const login = require('../../services/login');

 module.exports = (app) => {
	app.get('/login', async (req, res) => {
		try {
			res.render('pages/admin/login', {
				siteTitle: 'BBBMag',
				pageTitle: 'Login',
				message: ''
			});
		} catch (e) {
			res.send(`'Der skete en fejl: '${e.name}`);
			console.log(e.name);
		  }
	});
 	app.post('/login', async (req, res) => {
		try {
			let validate = await login.validateLogin(req.body.brugernavn, req.body.password);
			// console.log(validate);
			
			if (validate && validate.status == true) {
				req.session.isLoggedIn = { id: validate.brugerId };
				res.redirect('/admin');
			} else {
				req.session.isLoggedIn = false;
				// console.log(validate.besked);
				res.render('pages/admin/login', {
					siteTitle: 'CC',
					pageTitle: 'Login',
					message: validate.besked
				});
			}
		} catch (e) {
			// Man bør aldrig nå ned til denne catch, da Promisen i bruger.validate kun indeholder resolve()
			req.session.isLoggedIn = false;
			// console.log(validate.besked);
		}
	});
 	app.get('/logout', (req, res) => {
		req.session.destroy((err) => { // Sletter al data i session
			res.redirect('/');
		})
	})
}; 