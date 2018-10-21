const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');
const artikel = require('../../services/artikel');

module.exports = (app) => {
  app.get('/sponsor', async (req, res, next) => {

    try {

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame
      
      let sponsorTekst = await sponsor.getTekst(); // Henter tekst til siden
      let sponsorPriser = await sponsor.getPriser(); // Henter priser til siden
      

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Sponsor',
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame,
        sponsor_tekst: sponsorTekst[0].tekst,
        sponsor_priser: sponsorPriser
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/sponsor', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}