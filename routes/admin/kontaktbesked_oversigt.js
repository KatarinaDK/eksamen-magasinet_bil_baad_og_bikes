const authenticate = require('../../middleware/authenticate');

const kontaktbesked = require('../../services/kontakt');

 module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/kontaktbesked_oversigt', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let beskederne = await kontaktbesked.getAll();

       res.render('pages/admin/kontaktbesked_oversigt', {
        siteTitle: 'BBBMag',
        pageTitle: 'Kontaktbeskedsoversigt',
        beskeder: beskederne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

   // SLET EN KONTAKTBESKED OG GENINDLÆS SIDEN
  app.get('/admin/kontaktbesked_slet/:id', async (req, res) => {

    let beskedId = req.params.id;

     try {
      await kontaktbesked.deleteOne(beskedId);
      res.redirect('/admin/kontaktbesked_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
} 