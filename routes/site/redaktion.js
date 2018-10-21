const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');
const artikel = require('../../services/artikel');

const redaktion = require('../../services/redaktion');

module.exports = (app) => {
  app.get('/redaktion', async (req, res, next) => {

    try {

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // let kategoriAntal = await kategori.getAntal(); // Tæller antallet af kategorier
      // let kategoriId = 3
      ;
      let redaktionen_bil = await redaktion.getbyKategori(1);
      let redaktionen_baad = await redaktion.getbyKategori(2);
      let redaktionen_bike = await redaktion.getbyKategori(3);

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Redaktionen',
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame,
        // antalKategorier: kategoriAntal,
        redaktionen_bil: redaktionen_bil,
        redaktionen_baad: redaktionen_baad,
        redaktionen_bike: redaktionen_bike
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/redaktion', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}