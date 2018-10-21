const authenticate = require('../../middleware/authenticate');

const kommentar = require('../../services/kommentar');

 module.exports = (app) => {
  app.get('/admin/kommentar_ret/:id', authenticate, async (req, res) => {
    
    try {

      let kommentarId = req.params.id;
      let kommentaren = await kommentar.getOne(kommentarId);

       res.render('pages/admin/kommentar_ret', {
        siteTitle: 'CC',
        pageTitle: 'Kommentarredigering',
        kommentar: kommentaren,
        message: ''
      });
    } catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });

  // Sender data til db
  app.post('/admin/kommentar_ret/:id', async (req, res) => {
    try {
      
      await kommentar.updateOne(req.params.id, req.body.besked);
      res.redirect('/admin/kommentar_oversigt');

    }
    catch (e) {
      res.send(`'Der skete en fejl: '${e.name}`);
      console.log(e.name);
    }
  });
} 