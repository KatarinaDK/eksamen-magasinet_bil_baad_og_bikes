const db = require('../config/database').connect();
const Hash = require('./hash');

const Login = () => { };

// ::INFO: VALIDATE - TJEKKER OM BRUGERNAVN OG PASSWORD ER KORREKT (BRUGES PÅ SIDEN LOGIN)
Login.validateLogin = (brugernavn, password) => {
    return new Promise((resolve, reject) => {

        var sql = `
            SELECT 
                bruger.id, 
                bruger.password, 
                bruger.FK_rolle 
            FROM bruger 
            WHERE bruger.brugernavn = ?
        `;

        db.query(sql, [ brugernavn ], async (err, result) => {

            if (err) resolve({ status: false, besked: "Teknisk MySQL fejl", fejl: err });

            if (result[ 0 ] === undefined) {
                resolve({ status: false, besked: "Brugeren ikke fundet" });
            }
            else {
                if (await Hash.compare(password, result[ 0 ].password)) {
                    resolve({ status: true, besked: "", userId: result[ 0 ].id, rolleId: result[ 0 ].FK_rolle }); // sender bla brugerrolle med til login route (bruges til at styre hvem der kan se hvad)
                } else {
                    // reject('invalid password');
                    resolve({ status: false, besked: "Forkert kodeord" });
                }
            }
        });
    });
};

module.exports = Login;