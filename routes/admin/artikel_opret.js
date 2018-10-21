const authenticate = require('../../middleware/authenticate');

const artikel = require('../../services/artikel');
const kategori = require('../../services/kategori');
const redaktoer = require('../../services/redaktion');

module.exports = (app) => {
  app.get('/admin/artikel_opret', authenticate, async (req, res) => {
    try {

      let artikelKategori = await kategori.getAll();
      let artikelRedaktoer = await redaktoer.getAll();

      res.render('pages/admin/artikel_opret', {
        siteTitle: 'BBBMag',
        pageTitle: 'Artikeloprettelse',
        kategorier: artikelKategori, 
        redaktoerer: artikelRedaktoer,
        message: ''
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  // Sender data til db
  // Som en ekstra sikkerhed valideres der inden data sendes afsted og i tilfælde af at clienside valideringen ikke virker
  app.post('/admin/artikel_opret', async (req, res) => {

    try {

      let indtastetTitel = req.body.titel;

      // undersøg om det indtastede navn eksisterer i DB
      let countEnsTitler = await artikel.getAll_artikelTitelAntal(indtastetTitel);
      let titelResultat = countEnsTitler[ 0 ].antal == 0;

      
      if (titelResultat = 0) {
        await artikel.createOne(
          req.body.titel,
          req.body.kategorinavn,
          req.body.redaktoernavn,
          req.body.tekst
        );
        res.redirect('/admin/artikel_oversigt');
      }
      else {

        let artikelKategori = await kategori.getAll();
        let artikelRedaktoer = await redaktoer.getAll();

        res.render('pages/admin/artikel_opret', {
          siteTitle: 'BBBMag',
          pageTitle: 'Artikeloprettelse',
          kategorier: artikelKategori,
          redaktoerer: artikelRedaktoer,
          message: 'Titlen findes i forvejen - forsøg med en anden Titel'
        });
      }
    } catch (e) {
      res.send(e)
      console.log(e.name);
    }
  });
} 