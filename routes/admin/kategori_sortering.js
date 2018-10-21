const authenticate = require('../../middleware/authenticate');

const kategori = require('../../services/kategori');

module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/kategori_sortering', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let kategorierne = await kategori.getAll();

      res.render('pages/admin/kategori_sortering', {
        siteTitle: 'BBBMag',
        pageTitle: 'Kategorisortering',
        kategorier: kategorierne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  // SLET EN KOMMENTAR OG GENINDLÆS SIDEN
  app.post('/admin/kategori_sortering', async (req, res) => {
    // try {
    let sorter = req.body.sortering;

      await kategori.update_kategori_sortering(sorter);
      res.redirect('/admin/kategori_sortering');
      
     
  
    // } catch (e) {
    //   res.send('Der skete en fejl');
    //   res.send(`'Der skete en fejl: '${e.name}`);
    //   console.log(e.name);
    // };

  });
} 