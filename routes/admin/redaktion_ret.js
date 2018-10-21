const authenticate = require('../../middleware/authenticate');

const redaktoer = require('../../services/redaktion');

// Formidable handles form data (regular fields + uploaded files, but not resizing)
const formidable = require('formidable');

// Sharp handles image resizing.  Documentation: http://sharp.dimens.io/en/stable/
const sharp = require('sharp');

module.exports = (app) => {
  app.get('/admin/redaktion_ret/:id', authenticate, async (req, res) => {
    try {
      let redaktoeren = await redaktoer.getOne(req.params.id);

      res.render('pages/admin/redaktion_ret', {
        siteTitle: 'BBBMag',
        pageTitle: 'Redaktørredigering',
        redaktoer: redaktoeren[ 0 ],
        message: ''
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  // Sender data til db
  // Som en ekstra sikkerhed valideres der inden data sendes afsted og i tilfælde af at clienside valideringen ikke virker
  app.post('/admin/redaktion_ret/:id', async (req, res) => {
    try {

      // undersøg om der er indtastet et nyt navn og om det findes hos en anden bruger
      let originalRedaktoer = await redaktoer.getOne(req.params.id);

      let originaltNavn = originalRedaktoer[ 0 ].navn;
      let indtastetNavn = req.body.navn;

      let navneResultat = await redaktoer.getAll_redaktoerNavnAntal(indtastetNavn);

      let nytNavn = navneResultat[ 0 ].antal == 0;
      let navn = nytNavn ? indtastetNavn : originaltNavn;

      if (nytNavn || indtastetNavn == originaltNavn) {

        await redaktoer.updateOne(req.params.id, navn, req.body.tekst, req.body.mail);
        res.redirect('/admin/redaktion_oversigt');
      }
      else {
        let redaktoeren = await redaktoer.getOne(req.params.id);

        res.render('pages/admin/redaktion_ret', {
          siteTitle: 'BBBMag',
          pageTitle: 'Redaktørredigering',
          redaktoer: redaktoeren[ 0 ],
          message: 'Navnet findes i forvejen - forsøg med et andet navn'
        });
      }
    }
    catch (e) {
      res.send(e)
      console.log(e.name);
    }
  });

  // Opdater billede
  app.post('/admin/redaktion_ret_billede/:id', async (req, res) => {
    try {

      // Enables/Disables debugging (only within this route)
      let debug = true;
      if (debug) console.log("\n------- DEBUG POST IMAGES START -------\n");

      // Timestamp example: 1537738117714  (Milliseconds since 1970. Used to generate unique image filenames)
      let timestamp = Date.now();

      let form = new formidable.IncomingForm();

      form.parse(req, function (err, fields, files) {
        // When using formidable, req.body is not directly available.
        // This copies the form data from formidable to req.body
        req.body = fields;
      });

      // Indbygget formidable eventhandler - parametret "end" igangsættes når req er modtaget og alle filer er overført.
      // Her indsættes response og redirect
      form.on("end", async () => {

        // ----------------------------------------------------------------
        // Image upload and resize

        let allFiles = form.openedFiles;

        let destinationFile = ""; // Do NOT change this here.
        let imageFolder = "public/images/bruger_profilbillede/";

        for (let i = 0; i < allFiles.length; i++) {
          let file = allFiles[ i ];

          let uniqueFilename = timestamp + '_' + file.name; // Example: 1537738117714_monkey.jpg


          let sourceFile = file.path;  // Example: C:\Users\ChuckNorris\AppData\Local\Temp\upload_40536f848dded4c0c81e2401713bca4c

          if (debug) console.log("Unique Filename: ", uniqueFilename, "\n---");

          // Image
          destinationFile = imageFolder + uniqueFilename;
          await sharp(sourceFile).resize(128).toFile(destinationFile);

          // Insert image into a separate table in the database
          if (debug) console.log("DB Insert image: ", uniqueFilename, "\n---");

          await redaktoer.updateOne_billede(req.params.id, uniqueFilename);
        };
        if (debug) console.log("\n------- DEBUG POST IMAGES END -------\n");

        // ----------------------------------------------------------------

        res.redirect('/admin/redaktion_oversigt');
      });
    }
    catch (e) {
      res.send(e)
      console.log(e.name);
    }
  });
} 