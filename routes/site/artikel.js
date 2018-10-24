const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');

const artikel = require('../../services/artikel');
const kommentar = require('../../services/kommentar');

module.exports = (app) => {
  app.get('/artikel/id=:id', async (req, res, next) => {

    try {

      let artiklen = await artikel.getOne(req.params.id); // Henter artikler til indhold på artikel-siden
      let artikelID = artiklen.id; // Gemmer artiklens id i en variabel til brug ved post

      // Hent nuværende antal visninger
      let visninger = artiklen.visningsantal;
      // console.log(visninger);

      // opdater antallet af visninger
      await artikel.updateOne_visning(req.params.id, visninger + 1);

      // viser det nye antal visninger på siden
      let visninger_addOne = visninger + 1;
      // console.log(visninger_addOne);


      let kommentarerne = await kommentar.getbyArtikel(artikelID) // Henter alle kommentarer tilhørende en bestemt artikel
      let kommentarantal = await kommentar.getAntal(artikelID); // Henter antallet af kommentarer inden for en bestemt artikel

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Vis artikel',
        artikel: artiklen,
        kommentarer: kommentarerne,
        kommentarAntal: kommentarantal,
        visningsAntal: visninger_addOne,
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame,
        artikel_id: artikelID,
        navn: '',
        email: '',
        besked: '',
        validerMedDetSamme: 'false' // Validering sættes på hold
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/artikel', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  app.post('/kommentar/:id', async (req, res) => {
    try {
      let artiklen = await artikel.getOne(req.params.id); // Henter artikler til indhold på artikel-siden
      let artikelID = artiklen.id; // Gemmer artiklens id i en variabel til brug ved post

      // Hent nuværende antal visninger
      let visninger = artiklen.visningsantal;
      // console.log(visninger);

      let kommentarerne = await kommentar.getbyArtikel(req.params.id) // Henter alle kommentarer tilhørende en bestemt artikel
      let kommentarantal = await kommentar.getAntal(artikelID); // Henter antallet af kommentarer inden for en bestemt artikel

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame


      // Henter felternes value og lægger ned i en variabel
      let besked = req.body.besked;
      let navn = req.body.navn;
      let email = req.body.email;
      let fk_artikel = artikelID;

      // Sætter som default status til true
      let status = true;

      // Tjekker de forskellige inputfelter - hvis de er tomme sættes status til false
      if (besked == "") status = false;
      if (navn == "") status = false;
      if (email == "") status = false;

      // Hvis felterne ikke er tomme indsættes data i db og siden renderes på ny
      if (status == true) {
        await kommentar.createOne(besked, navn, email, fk_artikel);

        res.redirect('/artikel/id=' + artikelID);
      } else {
        console.log("Formulardata ikke ok!");

        // Definerer et objekt med forsk. key/values og tildeler det til en variabel
        let render_data = {
          siteTitle: 'BBBMag',
          pageTitle: 'Vis artikel',
          artikel: artiklen,
          kommentarer: kommentarerne,
          kommentarAntal: kommentarantal,
          visningsAntal: visninger,
          menuKategorier: kategorien,
          kontakt: kontaktinfo,
          artikler_mestLaeste: mestLaeste,
          artikler_sponsorReklame: sponsorReklame,
          artikel_id: artikelID,
          navn: navn, // Sørger for at det indtastede indhold bliver stående
          email: email,
          besked: besked,
          validerMedDetSamme: 'true' // Validering sættes igang
        }
        // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
        res.render('pages/site/artikel', render_data);
      }
    }
    catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}