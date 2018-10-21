const authenticate = require('../../middleware/authenticate');

const artikel = require('../../services/artikel');

 module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/artikel_oversigt', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let artiklerne = await artikel.getAll();

       res.render('pages/admin/artikel_oversigt', {
        siteTitle: 'BBBMag',
        pageTitle: 'Artikeloversigt',
        artikler: artiklerne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

   // SLET EN ARTIKEL OG GENINDLÆS SIDEN
  app.get('/admin/artikel_slet/:id', async (req, res) => {
    let artikelId = req.params.id;
     try {
      await artikel.deleteOne(artikelId);
      res.redirect('/admin/artikel_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
} 