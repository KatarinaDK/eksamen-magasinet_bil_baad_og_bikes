const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');

const artikel = require('../../services/artikel');

module.exports = (app) => {
  app.get('/kontakt', async (req, res, next) => {

    try {

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren og til siden
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Kontakt',
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame,
        navn: '',
        email: '',
        emne: '',
        besked: '',
        validerMedDetSamme: 'false'
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/kontakt', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  app.post('/kontakt', async (req, res, next) => {

    try {

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(1); // Henter kontaktinfo til footeren og til siden
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // Henter felternes value og lægger ned i en variabel
      let navn = req.body.navn;
      let email = req.body.email;
      let emne = req.body.emne;
      let besked = req.body.besked;

      // Sætter som default status til true
      let status = true;

      // Tjekker de forskellige inputfelter - hvis de er tomme sættes status til false
      if (navn == "") status = false;
      if (email == "") status = false;
      if (emne == "") status = false;
      if (besked == "") status = false;

      if (status == true) {
        await kontakt.createOne(navn, email, emne, besked);

        // Definerer et objekt med forsk. key/values og tildeler det til en variabel
        let render_data = {
          siteTitle: 'BBBMag',
          pageTitle: 'Kontakt',
          menuKategorier: kategorien,
          kontakt: kontaktinfo,
          artikler_mestLaeste: mestLaeste,
          artikler_sponsorReklame: sponsorReklame,
          navn: '',
          email: '',
          emne: '',
          besked: '',
          validerMedDetSamme: 'false'
        }

        // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
        res.render('pages/site/kontakt', render_data);
      } else {
        console.log("Formulardata ikke ok!");

        // Definerer et objekt med forsk. key/values og tildeler det til en variabel
        let render_data = {
          siteTitle: 'BBBMag',
          pageTitle: 'Kontakt',
          menuKategorier: kategorien,
          kontakt: kontaktinfo,
          artikler_mestLaeste: mestLaeste,
          artikler_sponsorReklame: sponsorReklame,
          navn: '',
          email: '',
          emne: '',
          besked: '',
          validerMedDetSamme: 'true'
        }

        // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
        res.render('pages/site/kontakt', render_data);
      }
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}