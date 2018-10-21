const kategori = require('../../services/kategori');
const kontakt = require('../../services/kontakt');
const sponsor = require('../../services/sponsor');

const artikel = require('../../services/artikel');
const kommentar = require('../../services/kommentar');

module.exports = (app) => {
  app.get('/artikler/kategori=:id', async (req, res, next) => {

    try {

      let artiklerne = await artikel.getbyKategori(req.params.id); // Henter artikler til indhold på artikel-siden

      let kommentarantal = await kommentar.getAntal(1); // Henter antallet af kommentarer inden for en bestemt artikel

      let kategoriNavn = artiklerne[ 0 ].kategori; // Henter det gældende kategori-navn til pageTitle
      let kategorien = await kategori.getAll(); // Henter alle kategori navne til menuen
      let kontaktinfo = await kontakt.getOne(); // Henter kontaktinfo til footeren


      let mestLaeste = await artikel.getMestLaeste_byKategori(req.params.id); // Henter de mest læste artikler til aside/content/mestLaeste
      let sponsorReklame = await sponsor.getReklame_byKategori(req.params.id); // Henter reklamer til aside/content/sponsor_reklame
     

      // Definerer et objekt med forsk. key/values og tildeler det til en variabel
      let render_data = {
        siteTitle: 'BBBMag',
        pageTitle: kategoriNavn,
        artikler: artiklerne,
        kommentarAntal: kommentarantal,
        menuKategorier: kategorien,
        kontakt: kontaktinfo,
        artikler_mestLaeste: mestLaeste,
        artikler_sponsorReklame: sponsorReklame
      }

      // Renderer siden og tilføjer de nødvendige oplysninger vha. henvisning til variablen
      res.render('pages/site/artikelKategori', render_data);

    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}