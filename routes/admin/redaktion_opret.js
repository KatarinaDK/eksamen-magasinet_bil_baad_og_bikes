const authenticate = require('../../middleware/authenticate');

const redaktoer = require('../../services/redaktion');

// Formidable handles form data (regular fields + uploaded files, but not resizing)
const formidable = require('formidable');

// Sharp handles image resizing.  Documentation: http://sharp.dimens.io/en/stable/
const sharp = require('sharp');

module.exports = (app) => {
  app.get('/admin/redaktion_opret', authenticate, async (req, res) => {
    try {

      res.render('pages/admin/redaktion_opret', {
        siteTitle: 'BBBMag',
        pageTitle: 'Redaktøroprettelse',
        message: '',
        navn: '',
        tekst: '',
        mail: '',
        password: ''
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  // Sender data til db
  // Som en ekstra sikkerhed valideres der inden data sendes afsted og i tilfælde af at clienside valideringen ikke virker
  app.post('/admin/redaktion_opret', async (req, res) => {
    try {

      let indtastetBrugernavn = req.body.brugernavn;

      // undersøg om det indtastede brugernavn eksisterer i DB
      let countEnsBrugernavne = await redaktoer.getAll_brugernavnAntal(indtastetBrugernavn);

      let brugernavnResultat = countEnsBrugernavne[ 0 ].antal;

      // HVIS NAVNET ER UNIKT
      if (brugernavnResultat == 0) {

        await redaktoer.createOne(req.body.navn, req.body.tekst, req.body.mail, req.body.brugernavn, req.body.password);

        res.redirect('/admin/redaktion_oversigt');
      }
      else {

        let navn = req.body.navn;
        let tekst = req.body.tekst;
        let mail = req.body.mail;
        let password = req.body.password;

        res.render('pages/admin/redaktion_opret', {
          siteTitle: 'BBBMag',
          pageTitle: 'Redaktøroprettelse',
          message: 'Brugernavnet findes i forvejen',
          navn: navn,
          tekst: tekst,
          mail: mail,
          password: password
        });
      }
    } catch (e) {
      res.send(e)
      console.log(e.name);
    }
  });

  // Opdater billede
  app.post('/admin/redaktion_opret_billede', async (req, res) => {
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

          await redaktoer.createOne_billede(uniqueFilename);
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