const db = require('../config/database').connect();

const Artikel = () => { };

// ::INFO: CREATE - OPRETTER EN ARTIKEL OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/ARTIKEL_OPRET)
Artikel.createOne = (titel, kategori, bruger, tekst) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ titel, kategori, bruger, tekst ];

        var sql = `
        INSERT INTO artikel
        SET
            artikel.titel = ?,
            artikel.FK_kategori = ?,
            artikel.FK_bruger = ?,
            artikel.tekst = ?,
            artikel.dato = NOW()
        `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER EN ARTIKEL - BRUGES PÅ SITE/ARTIKEL + ADMIN/ARTIKEL_RET
Artikel.getOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.tekst AS tekst,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            DATE_FORMAT (artikel.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
            kategori.id AS kategoriId,
            kategori.navn AS kategori,
            bruger.navn AS redaktoernavn,
            bruger.billede AS redaktoerbillede,
            bruger.profiltekst AS redaktoertekst
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        INNER JOIN bruger ON artikel.FK_bruger = bruger.id
        WHERE artikel.id = ?
        `;
        // console.log(sql);
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER DE SENESTE 6 ARTIKLER - BRUGES PÅ SITE/INDEX
Artikel.getNewest = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.tekst AS tekst,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            DATE_FORMAT (artikel.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
            kategori.id AS kategoriId,
            kategori.navn AS kategori
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        ORDER BY dato DESC
        LIMIT 6
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER DE 6 MEST BESØGTE ARTIKLER - BRUGES I ASIDE/MEST LÆSTE
Artikel.getMestLaeste = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.titel AS titel
        FROM artikel
        ORDER BY artikel.visningsantal DESC
        LIMIT 6
        `;
        // console.log(sql);
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER DE 6 MEST BESØGTE ARTIKLER - BRUGES I ASIDE/MEST LÆSTE
Artikel.getMestLaeste_byKategori = (kategoriID) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.titel AS titel
        FROM artikel
        WHERE artikel.FK_kategori = ?
        ORDER BY artikel.visningsantal DESC
        LIMIT 6
        `;
        // console.log(sql);
        db.query(sql, [kategoriID], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER DE SENESTE 3 ARTIKLER I EN BESKEMT KATEGORI - BRUGES PÅ SITE/ARTIKELKATEGORI
Artikel.getbyKategori = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.tekst AS tekst,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            DATE_FORMAT (artikel.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
            kategori.navn AS kategori
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        WHERE kategori.id = ?
        ORDER BY dato DESC
        LIMIT 3
        `;
        // console.log(sql);
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER MODELNAVNET FRA DB OG SAMMENLIGNER MED DET INDTASTET NAVN I FORMULAREN OM DE ER ENS (BRUGES PÅ SIDEN ADMIN/CYKEL_OPRET + ADMIN/CYKEL_OPRET + ADMIN/CYKEL_OVERSIGT)
Artikel.getAll_artikelTitelAntal = (artikeltitelnavn) => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(*) AS antal
                FROM artikel
                WHERE artikel.titel = ?
            `;
        db.query(sql, [ artikeltitelnavn ], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER ALLE ARTIKLERNE FRA DB OG TÆLLER HVOR MANGE DER ER (BRUGES PÅ SIDEN ADMIN/INDEX)
Artikel.getAntal = () => {
    return new Promise((resolve, reject) => {
        var sql = `
                SELECT COUNT(*) AS antal
                FROM artikel
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result[ 0 ].antal);
        });
    });
};

// ::INFO - READ - HENTER ALLE ARTIKLER - BRUGES PÅ SITE/ARKIV
Artikel.getbyPage = (offset, limit) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.tekst AS tekst,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            DATE_FORMAT (artikel.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
            kategori.id AS kategoriId,
            kategori.navn AS kategori
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        ORDER BY dato DESC
        LIMIT ?, ?
        `;
        db.query(sql, [ offset, limit ], (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO: READ - HENTER ALLE FREMSØGTE CYKLER (BRUGES PÅ SIDEN SITE/AVANCERETFIND)
Artikel.getbyFind = (fritekst) => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.tekst AS tekst,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            DATE_FORMAT (artikel.dato, '%e. %M %Y kl. %H:%i' ) AS dato,
            kategori.id AS kategoriId,
            kategori.navn AS kategori,
            bruger.navn AS brugernavn
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        INNER JOIN bruger ON artikel.FK_bruger = bruger.id
        WHERE 
            artikel.tekst LIKE '%${fritekst}%' OR 
            artikel.titel LIKE '%${fritekst}%' OR 
            bruger.navn LIKE '%${fritekst}%' OR
            kategori.navn LIKE '%${fritekst}%'
        ORDER BY dato DESC
        `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

// ::INFO - READ - HENTER ALLE ARTIKLER (BRUGES PÅ SIDERNE ADMIN/ARTIKEL_OVERSIGT)
Artikel.getAll = () => {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT
            artikel.id AS id,
            artikel.titel AS titel,
            artikel.visningsantal AS visningsantal,
            kategori.navn AS kategori
        FROM artikel
        INNER JOIN kategori ON artikel.FK_kategori = kategori.id
        `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            // console.log(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN ARTIKEL OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/ARTIKEL_RET)
Artikel.updateOne = (id, titel, kategori, bruger, tekst) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ titel, kategori, bruger, tekst, id ];

        var sql = `
        UPDATE artikel
        SET
            artikel.titel = ?,
            artikel.FK_kategori = ?,
            artikel.FK_bruger = ?,
            artikel.tekst = ?,
            artikel.dato = NOW()
        WHERE artikel.id = ?
        `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN ARTIKEL-VISNING OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/ARTIKEL_RET)
Artikel.updateOne_visning = (id, nyVisning) => {
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ nyVisning, id ];

        var sql = `
        UPDATE artikel
        SET
            artikel.visningsantal = ?
        WHERE artikel.id = ?
        `;

        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// ::INFO: DELETE - SLETTER EN ARTIKEL (BRUGES PÅ SIDEN ADMIN/ARTIKEL_OVERSIGT)
Artikel.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
                DELETE FROM artikel 
                WHERE artikel.id = ?              
            `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};
module.exports = Artikel;