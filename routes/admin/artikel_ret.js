const authenticate = require('../../middleware/authenticate');

const artikel = require('../../services/artikel');
const kategori = require('../../services/kategori');
const redaktoer = require('../../services/redaktion');

module.exports = (app) => {
  app.get('/admin/artikel_ret/:id', authenticate, async (req, res) => {
    try {
      let artiklen = await artikel.getOne(req.params.id);

      let artikelKategori = await kategori.getAll();
      let artikelRedaktoer = await redaktoer.getAll();

      res.render('pages/admin/artikel_ret', {
        siteTitle: 'BBBMag',
        pageTitle: 'Artikelredigering',
        artikel: artiklen[0], 
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
  app.post('/admin/artikel_ret/:id', async (req, res) => {
    try {
      
      // undersøg om der er indtastet en nyt titel og om den findes i en anden artikel
      let originalArtikel = await artikel.getOne(req.params.id);

      let originalTitel = originalArtikel[ 0 ].titel;

      let indtastetTitel = req.body.titel;
      
      let titelResultat = await artikel.getAll_artikelTitelAntal(indtastetTitel);

      let nyTitel = titelResultat[ 0 ].antal == 0;
      let titel = nyTitel ? indtastetTitel : originalTitel;
      
      if (nyTitel || indtastetTitel == originalTitel) {
        await artikel.updateOne(
          req.params.id, 
          titel, 
          req.body.kategorinavn, 
          req.body.redaktoernavn,
          req.body.tekst
        );
        // console.log('post: ' + req.body.tilbudspris);
        res.redirect('/admin/artikel_oversigt');
      }
      else {
        let artiklen = await artikel.getOne(req.params.id);

        let artikelKategori = await kategori.getAll();
        let artikelRedaktoer = await redaktoer.getAll();
  
        res.render('pages/admin/artikel_ret', {
          siteTitle: 'BBBMag',
          pageTitle: 'Artikelredigering',
          artikel: artiklen[0],
          kategorier: artikelKategori,
          redaktoerer: artikelRedaktoer,
          message: 'Titlen findes i forvejen - forsøg med en anden Titel'
        });
      }
    }
    catch (e) {
      res.send(e)
      console.log(e.name);
    }
  });
} 