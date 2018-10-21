const db = require('../config/database').connect();

const Kontakt = () => { };

// ::INFO: CREATE - OPRETTER EN BESKED OG INDSÆTTER I DB (BRUGES PÅ SIDEN SITE/KONTAKT)
Kontakt.createOne = (navn, email, emne, besked) => {
    // console.log(kategoriId);
    return new Promise(async (resolve, reject) => {
        var sql = `
                    INSERT INTO kontaktbesked
                    SET
                        kontaktbesked.navn = ?,
                        kontaktbesked.email = ?,
                        kontaktbesked.emne = ?,
                        kontaktbesked.besked = ?
                `;
        db.query(sql, [ navn, email, emne, besked ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ALLE KONTAKTOPLYSNINGERNE - BRUGES PÅ SIDEN SITE/KONTAKT, SAMT I FOOTEREN
Kontakt.getOne = () => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
                kontaktoplysning.id AS id,
                kontaktoplysning.firmanavn AS firmanavn,
                kontaktoplysning.vejnavn AS vejnavn,
                kontaktoplysning.husnummer AS husnummer,
                kontaktoplysning.postnummer AS postnummer,
                kontaktoplysning.bynavn AS bynavn,
                kontaktoplysning.land AS land,
                kontaktoplysning.telefon AS telefon,
                kontaktoplysning.fax AS fax,
                kontaktoplysning.email AS email
            FROM kontaktoplysning
            WHERE id = 1
        `;
        db.query(sql, (err, result) => {
            // console.log(err);
            if (err) reject(err)
            resolve(result[ 0 ]);
        });
    });
};

// ::INFO: READ - HENTER ALLE BESKEDER (BRUGES PÅ SIDEN ADMIN/KONTAKTBESKED_OVERSIGT)
Kontakt.getAll = () => {
    // console.log(kategoriId);
    return new Promise(async (resolve, reject) => {
        var sql = `
            SELECT
                kontaktbesked.id AS id,
                kontaktbesked.navn AS navn,
                kontaktbesked.email AS email,
                kontaktbesked.emne AS emne,
                kontaktbesked.besked AS besked
            FROM kontaktbesked
                `;
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER ALLE KONTAKTBESKEDERNE FRA DB OG TÆLLER HVOR MANGE DER ER (BRUGES PÅ SIDEN ADMIN/INDEX)
Kontakt.getAntal = () => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(*) AS antal
                FROM kontaktbesked
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result[ 0 ].antal);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN ARTIKEL OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/ARTIKEL_RET)
Kontakt.updateOne = (id, vejnavn, husnummer, postnummer, bynavn, land, telefon, fax, email) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ vejnavn, husnummer, postnummer, bynavn, land, telefon, fax, email, id ];

        var sql = `
        UPDATE kontaktoplysning
        SET
            kontaktoplysning.vejnavn = ?,
            kontaktoplysning.husnummer = ?,
            kontaktoplysning.postnummer = ?,
            kontaktoplysning.bynavn = ?,
            kontaktoplysning.land = ?,
            kontaktoplysning.telefon = ?,
            kontaktoplysning.fax = ?,
            kontaktoplysning.email = ?
        WHERE kontaktoplysning.id = ?
        `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: DELETE - SLETTER EN KONTAKTBESKED (BRUGES PÅ SIDEN ADMIN/KONTAKTBESKED_OVERSIGT)
Kontakt.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                DELETE FROM kontaktbesked 
                WHERE kontaktbesked.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = Kontakt;