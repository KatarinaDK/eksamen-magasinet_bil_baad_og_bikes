const authenticate = require('../../middleware/authenticate');

const redaktoer = require('../../services/redaktion');

 module.exports = (app) => {
  // RENDERING AF SIDEN
  app.get('/admin/redaktion_oversigt', authenticate, async (req, res) => {
    // console.log(req.session);

    try {
      let redaktoererne = await redaktoer.getAll_aktiv();

       res.render('pages/admin/redaktion_oversigt', {
        siteTitle: 'BBBMag',
        pageTitle: 'Redaktøroversigt',
        redaktoerer: redaktoererne
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
  // DEAKTIVER EN REDAKTØR OG GENINDLÆS SIDEN
  app.get('/admin/redaktion_arkiver/:id', async (req, res) => {
    let redaktoerId = req.params.id;
     try {
      await redaktoer.updateOne_arkiver(redaktoerId);
      res.redirect('/admin/redaktion_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
  
   // SLET EN ARTIKEL OG GENINDLÆS SIDEN
  app.get('/admin/redaktion_slet/:id', async (req, res) => {
    let redaktoerId = req.params.id;
     try {
      await redaktoer.deleteOne(redaktoerId);
      res.redirect('/admin/redaktion_oversigt');
    }
    catch (e) {
      res.send('Der skete en fejl');
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    };
  });
} 