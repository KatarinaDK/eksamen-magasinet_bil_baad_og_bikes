const authenticate = require('../../middleware/authenticate');

const kommentar = require('../../services/kommentar');

 module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/kommentar_oversigt', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let kommentarerne = await kommentar.getAll();

       res.render('pages/admin/kommentar_oversigt', {
        siteTitle: 'BBBMag',
        pageTitle: 'Kommentaroversigt',
        kommentarer: kommentarerne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

   // SLET EN KOMMENTAR OG GENINDLÆS SIDEN
  app.get('/admin/kommentar_slet/:id', async (req, res) => {
    let kommentarId = req.params.id;
     try {
      await kommentar.deleteOne(kommentarId);
      res.redirect('/admin/kommentar_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
} 