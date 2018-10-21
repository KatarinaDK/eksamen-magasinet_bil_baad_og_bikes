const db = require('../config/database').connect();

const Kommentar = () => { };

// ::INFO - CREATE - OPRETTER EN KOMMENTARER TILHØRENDE EN BESTEMT ARTIKEL - BRUGES PÅ SIDEN ARTIKEL
Kommentar.createOne = (besked, navn, email, fk_artikel) => {
    return new Promise((resolve, reject) => {
        var sql = `
            INSERT INTO kommentar
            SET
                kommentar.besked = ?,
                kommentar.navn = ?,
                kommentar.email = ?,
                kommentar.dato = NOW(),
                kommentar.FK_artikel = ?
        `;
        // console.log(sql);
        db.query(sql, [ besked, navn, email, fk_artikel ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER EN ARTIKEL - BRUGES PÅ SITE/ARTIKEL + ADMIN/ARTIKEL_RET
Kommentar.getOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            kommentar.id AS id,
            kommentar.besked AS besked,
            kommentar.navn AS navn,
            kommentar.email AS email,
            artikel.titel AS artikel
        FROM kommentar
        INNER JOIN artikel ON kommentar.FK_artikel = artikel.id
        WHERE kommentar.id = ?
        `;
        // console.log(sql);
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result[0]);
        });
    });
};

// ::INFO - READ - HENTER KOMMENTARER TILHØRENDE EN BESTEMT ARTIKEL - BRUGES PÅ SIDEN ARTIKEL
Kommentar.getbyArtikel = (artikelID) => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
            kommentar.navn AS navn,
                kommentar.besked AS besked,
                kommentar.email AS email,
                DATE_FORMAT (kommentar.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
                artikel.id AS artikelId
            FROM kommentar 
            INNER JOIN artikel ON kommentar.FK_artikel = artikel.id
            WHERE FK_artikel = ?
            ORDER BY dato DESC
        `;
        // console.log(sql);
        db.query(sql, [ artikelID ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ANTALLET AF KOMMENTARER VED EN BESTEMT ARTIKEL - BRUGES I CONTENT/ARTIKEL_xxx
Kommentar.getAntal = (artikelID) => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT COUNT(*) AS kommentarAntal 
            FROM kommentar 
            INNER JOIN artikel ON kommentar.FK_artikel = artikel.id
            WHERE FK_artikel = ?
        `;
        // console.log(sql);
        db.query(sql, [ artikelID ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result[ 0 ].kommentarAntal);
        });
    });
};

// ::INFO: READ - HENTER ALLE KOMMENTARERNE FRA DB OG TÆLLER HVOR MANGE DER ER (BRUGES PÅ SIDEN ADMIN/INDEX)
Kommentar.getAntal_total = () => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(*) AS antal
                FROM kommentar
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result[ 0 ].antal);
        });
    });
};

// ::INFO: READ - HENTER ALLE KOMMENTARER (BRUGES PÅ SIDEN ADMIN/KOMMENTAR_OVERSIGT)
Kommentar.getAll = () => {
    // console.log(kategoriId);
    return new Promise(async (resolve, reject) => {
        var sql = `
            SELECT
                kommentar.id AS id,
                kommentar.navn AS navn,
                kommentar.email AS email,
                kommentar.besked AS besked,
                artikel.titel AS artikel
            FROM kommentar
            INNER JOIN artikel ON kommentar.FK_artikel = artikel.id

                `;
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN KOMMENTAR OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/KOMMENTAR_RET)
Kommentar.updateOne = (id, besked) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ besked, id ];
        var sql = `
            UPDATE kommentar
            SET
                kommentar.besked = ?
            WHERE kommentar.id = ?
            `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: DELETE - SLETTER EN KOMMENTAR (BRUGES PÅ SIDEN ADMIN/KOMMENTAR_OVERSIGT)
Kommentar.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                DELETE FROM kommentar 
                WHERE kommentar.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = Kommentar;