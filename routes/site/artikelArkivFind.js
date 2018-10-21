const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');

const artikel = require('../../services/artikel');
const kommentar = require('../../services/kommentar');

module.exports = (app) => {

  app.get('/arkivFind', async (req, res, next) => {

    try {

      let artiklerne = await artikel.getbyFind(req.query.fritekst); // Henter alle artikler til indhold på arkiv-siden
      let fritekst = req.query.fritekst;

      let artikelResultat_antal = artiklerne.length;
   
      let kommentarantal = await kommentar.getAntal(1); // Henter antallet af kommentarer inden for en bestemt artikel

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Find i arkivet',
        artikler: artiklerne,
        kommentarAntal: kommentarantal,
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame,
        artikler_findMessage: fritekst,
        artikler_antalMessage: artikelResultat_antal
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/artikelArkivFind', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}