const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');

const artikel = require('../../services/artikel');
const kommentar = require('../../services/kommentar');

module.exports = (app) => {
  app.get('/arkiv/offset=:offset', async (req, res, next) => {

    try {

      let limit = 5; // Der skal kun vises 5 artikler ad gangen
      let artikelAntal = await artikel.getAntal(); // Tæller antallet af artikler
      let artiklerne = await artikel.getbyPage(parseInt(req.params.offset), limit); // Henter alle artikler til indhold på arkiv-siden

      let linkAntal = Math.ceil(artikelAntal / limit); // Regner ud hvor mange links som skal genereres (Math.ceil runder op til nærmeste heltal)
      let kommentarantal = await kommentar.getAntal(1); // Henter antallet af kommentarer inden for en bestemt artikel

      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren
      let mestLaeste = await artikel.getMestLaeste(); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame(); // Henter reklamer til aside/content/sponsor_reklame

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: 'Arkivet',
        artikler: artiklerne,
        kommentarAntal: kommentarantal,
        limit: limit,
        antalLink: linkAntal,
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/artikelArkiv', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
 
}