// ::INFO - ROUTE RENDER ADMIN SIDEN
// Dette route har til formål at rendere admin siden og hente antallet af produkter
// Kalder bl.a. funktionen authenticate - vil ikke kunne gå videre medmindre der retuneres true - funktionen vil derfor ikke blive udført
const authenticate = require('../../middleware/authenticate');

const kontakt = require('../../services/kontakt');
const redaktoer = require('../../services/redaktion');
const artikel = require('../../services/artikel');
const kategori = require('../../services/kategori');
const kommentar = require('../../services/kommentar');


// const path = require('path'); // Bruges ved /billed_upload (uden resize)

module.exports = (app) => {
  app.get('/admin', authenticate, async (req, res, next) => {
    // console.log(req.session);

    try {
    
      let kontaktbeskederne = await kontakt.getAntal();
      let kontaktbeskedAntal = kontaktbeskederne; //

      let redaktoererne = await redaktoer.getAntal();
      let redaktoerAntal = redaktoererne;
      
      let artiklerne = await artikel.getAntal();
      let artikelAntal = artiklerne;
      
      let kategorierne = await kategori.getAntal(); //
      let kategoriAntal = kategorierne;
      
      let kommentarerne = await kommentar.getAntal_total(); //
      let kommentarAntal = kommentarerne;

      res.render('pages/admin/index', {
        siteTitle: 'BBBMag', 
        pageTitle: 'Adminpanel',
        kontaktbeskedAntal: kontaktbeskedAntal,
        redaktoerAntal: redaktoerAntal,
        artikelAntal: artikelAntal,
        kategoriAntal: kategoriAntal,
        kommentarAntal: kommentarAntal
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
}