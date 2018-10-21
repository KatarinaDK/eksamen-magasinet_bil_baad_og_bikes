const db = require('../config/database').connect();

const Kategori = () => { };

// ::INFO - READ - HENTER ALLE KATEGORIER - BRUGES I TEMPLATE/MAINNAV
Kategori.getAll = () => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
                kategori.id AS id,
                kategori.navn AS navn
            FROM kategori
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};


Kategori.getAntal = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT COUNT(*) AS antal
        FROM kategori
        `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result[ 0 ].antal);
        });
    });
};

Kategori.update_kategori_sortering = (sortering) => {
    return new Promise((resolve, reject) => {
        if (sortering = 1) {

            var sql = `
            UPDATE kategori
            SET
                kategori.FK_sortering = 1
            `;
        } if (sortering = 2) {
            var sql = `
            UPDATE kategori
            SET
                kategori.FK_sortering = 2
            `;

        }
        db.query(sql,(err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
}


module.exports = Kategori;
