const authenticate = require('../../middleware/authenticate');

const redaktoer = require('../../services/redaktion');

 module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/redaktion_aktiver', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let redaktoererne = await redaktoer.getAll_inaktiv();

       res.render('pages/admin/redaktion_aktiver', {
        siteTitle: 'BBBMag',
        pageTitle: 'Redaktøraktivering',
        redaktoerer: redaktoererne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
  // AKTIVER EN REDAKTØR OG GENINDLÆS SIDEN
  app.get('/admin/redaktion_aktiver/:id', async (req, res) => {
    let redaktoerId = req.params.id;
     try {
      await redaktoer.updateOne_aktiver(redaktoerId);
      res.redirect('/admin/redaktion_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
} 