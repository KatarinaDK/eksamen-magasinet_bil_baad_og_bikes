const db = require('../config/database').connect();
const Hash = require('./hash');


const Redaktion = () => { };

// ::INFO: UPDATE - OPDATERER EN ARTIKEL OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/ARTIKEL_RET)
Redaktion.createOne = (navn, profiltekst, email, brugernavn, password) => {
    return new Promise(async (resolve, reject) => {

        const hash = await Hash.createOne(password);

        var prepareStatement = [ navn, profiltekst, email, brugernavn, hash ];

        var sql = `
        INSERT INTO bruger
        SET
            bruger.navn = ?,
            bruger.profiltekst = ?,
            bruger.email = ?,
            bruger.brugernavn = ?,
            bruger.password = ?,
            bruger.FK_rolle = 2
        `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - OPDATERER ET BILLEDE OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/REDAKTION_RET)
Redaktion.createOne_billede = (billede) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ billede ];
        var sql = `
            INSERT INTO bruger
            SET
                bruger.billede = ?
            `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ALLE BRUGERE - BRUGES PÅ ADMIN ARTIKEL_RET + ARTIKEL_OPRET
Redaktion.getAll = () => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
                bruger.id AS id,
                bruger.navn AS navn
            FROM bruger
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ALLE REDAKTØRER INDEN FOR EN BESTEM KATEGORI - BRUGES PÅ SITE/REDAKTION
Redaktion.getbyKategori = (kategoriID) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            brugerkategori.id AS id,
            bruger.navn AS navn,
            bruger.profiltekst AS tekst,
            bruger.email AS email,
            bruger.billede AS billede,
            kategori.navn AS kategori
        FROM brugerkategori
        INNER JOIN bruger ON brugerkategori.FK_bruger = bruger.id
        INNER JOIN kategori ON brugerkategori.FK_kategori = kategori.id
        WHERE kategori.id = ?
        `;
        // console.log(sql);
        db.query(sql, [ kategoriID ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER EN REDAKTØR - BRUGES PÅ ADMIN/REDATION_RET
Redaktion.getOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
        bruger.id AS id,
        bruger.navn AS navn,
        bruger.billede AS billede,
        bruger.profiltekst AS tekst,
        bruger.email AS mail
        FROM bruger
        WHERE bruger.id = ?
        `;
        // console.log(sql);
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};



// -----------------------------------------------------------------------------------------------------------------
//                                                   REDAKTION - AKTIVER + DEAKTIVER
// -----------------------------------------------------------------------------------------------------------------

// ::INFO - READ - HENTER ALLE AKTIVE REDAKTØRER - BRUGES PÅ ADMIN/REDATION_OVERSIGT
Redaktion.getAll_aktiv = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            bruger.id AS id,
            bruger.navn AS navn,
            bruger.billede AS billede
        FROM bruger
        WHERE bruger.aktiv = 1
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ALLE INAKTIVE REDAKTØRER - BRUGES PÅ ADMIN/REDATION_AKTIVER
Redaktion.getAll_inaktiv = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            bruger.id AS id,
            bruger.navn AS navn,
            bruger.billede AS billede
        FROM bruger
        WHERE bruger.aktiv = 0
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - AKTIVERER EN REDAKTØR OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/REDAKTION_AKTIVER)
Redaktion.updateOne_aktiver = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                UPDATE bruger SET 
                    bruger.aktiv = 1 
                WHERE bruger.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - ARKIVERER EN REDAKTØR OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/REDDAKTION_OVERSIGT)
Redaktion.updateOne_arkiver = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                UPDATE bruger SET 
                    bruger.aktiv = 0 
                WHERE bruger.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------




// ::INFO: READ - HENTER NAVNET FRA DB OG SAMMENLIGNER MED DET INDTASTET NAVN I FORMULAREN OM DE ER ENS (BRUGES PÅ SIDEN ADMIN/REDAKTION_RET + ADMIN/REDAKTION_OPRET)
Redaktion.getAll_redaktoerNavnAntal = (brugerNavn) => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(*) AS antal
                FROM bruger
                WHERE bruger.navn = ?
            `;
        db.query(sql, [ brugerNavn ], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER NAVNET FRA DB OG SAMMENLIGNER MED DET INDTASTET BRUGERNAVN I FORMULAREN OM DE ER ENS (BRUGES PÅ SIDEN ADMIN/REDAKTION_OPRET)
Redaktion.getAll_brugernavnAntal = (brugernavn) => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(bruger.brugernavn) AS antal
                FROM bruger
                WHERE bruger.brugernavn = ?
            `;
        // console.log(brugernavn);
        db.query(sql, [ brugernavn ], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER ALLE REDAKTØRERNE FRA DB OG TÆLLER HVOR MANGE DER ER (BRUGES PÅ SIDEN ADMIN/INDEX)
Redaktion.getAntal = () => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(bruger.id) AS antal
                FROM bruger
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result[ 0 ].antal);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN REDAKTØR OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/REDAKTION_RET)
Redaktion.updateOne = (id, navn, tekst, mail) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ navn, tekst, mail, id ];
        var sql = `
            UPDATE bruger
            SET
                bruger.navn = ?,
                bruger.profiltekst = ?,
                bruger.email = ?
            WHERE bruger.id = ?
            `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - OPDATERER ET BILLEDE OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/REDAKTION_RET)
Redaktion.updateOne_billede = (id, billede) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ billede, id ];
        var sql = `
            UPDATE bruger
            SET
                bruger.billede = ?
            WHERE bruger.id = ?
            `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: DELETE - SLETTER EN REDAK (BRUGES PÅ SIDEN ADMIN/ARTIKEL_OVERSIGT)
Redaktion.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                DELETE FROM bruger 
                WHERE bruger.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = Redaktion;