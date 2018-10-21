// ::INFO - TJEK OM DER ER SAT EN SESSION

// Funktionen tjekker om der er sat en session.

// Eksempel hvor authenticate er indsat i et route: 
// app.get('/admin/cykel/getAll', authenticate, async (req, res) => {}

// Når betingelserne for authenticate retunerer true, vil routet fortsætte med at læse parametrene -og derved nå til (req, res).

// Hvis authenticate retunerer false, redirectes istedet til login-siden.

module.exports = function (req, res, next) {

    let undvigLogin = false;
    
    if (undvigLogin == true) {
        next();
    }
    else {
        if (req.session && req.session.isLoggedIn) {
            next();
        }
        else {
            res.redirect('/login');
        }
    }
};