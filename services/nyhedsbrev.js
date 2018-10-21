const db = require('../config/database').connect();

const Nyhedsbrev = () => { };

// ::INFO: CREATE - OPRETTER EN BESKED OG INDSÆTTER I DB (BRUGES PÅ SIDEN SITE/KONTAKT)
Nyhedsbrev.createOne = (email) => {
    // console.log(kategoriId);
    return new Promise(async (resolve, reject) => {
        var sql = `
                    INSERT INTO nyhedsbrev
                    SET
                        nyhedsbrev.email = ?
                `;
        db.query(sql, [ email ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = Nyhedsbrev;