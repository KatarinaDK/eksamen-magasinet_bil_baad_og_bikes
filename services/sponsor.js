const db = require('../config/database').connect();

const Sponsor = () => { };

// ::INFO - READ - HENTER 5 TILFÆLDIGE REKLAMER - BRUGES I CONTENT/ASIDE
Sponsor.getReklame = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            sponsor_reklame.id AS id,
            sponsor_reklame.billede AS billede,
            kategori.navn AS kategori
        FROM sponsor_reklame
        INNER JOIN kategori ON sponsor_reklame.FK_kategori = kategori.id
        ORDER BY RAND()
        LIMIT 5
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER 5 TILFÆLDIGE REKLAMER - BRUGES I CONTENT/ASIDE
Sponsor.getReklame_byKategori = (kategoriID) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            sponsor_reklame.id AS id,
            sponsor_reklame.billede AS billede,
            kategori.navn AS kategori
        FROM sponsor_reklame
        INNER JOIN kategori ON sponsor_reklame.FK_kategori = kategori.id
        WHERE sponsor_reklame.FK_kategori = ?
        ORDER BY RAND()
        LIMIT 5
        `;
        // console.log(sql);
        db.query(sql, [ kategoriID ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER TEKST TIL SPONSOR SIDEN
Sponsor.getTekst = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            side_tekst.id AS id,
            side_tekst.indhold AS tekst
        FROM side_tekst
        WHERE side_tekst.FK_side = 1
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER TEKST TIL SPONSOR SIDEN
Sponsor.getPriser = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            side_sponsor_priser.id AS id,
            side_sponsor_priser.visninger AS visninger,
            side_sponsor_priser.pris AS pris
        FROM side_sponsor_priser
        WHERE side_sponsor_priser.FK_side = 1
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER ALLE SPONSOR REKLAMER FRA DB OG TÆLLER HVOR MANGE DER ER (BRUGES PÅ SIDEN ADMIN/INDEX)
Sponsor.getAntal = () => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(sponsor_reklame.id) AS antal
                FROM sponsor_reklame
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

module.exports = Sponsor;