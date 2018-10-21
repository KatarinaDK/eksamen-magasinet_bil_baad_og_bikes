const db = require('../config/database').connect();

const Side = () => { };

// ::INFO - READ - HENTER ALLE SIDER (BRUGES PÅ SIDEN ADMIN/SIDE_OVERSIGT)
Side.getAll = () => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
                side_test.id AS id,
                side_test.navn AS navn,
                side_test.afsnit AS afsnit,
                side_test.url AS url
            FROM side_test
            `;
        db.query(sql, (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};


Side.getOne = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `
            SELECT
                side_test.id AS id,
                side_test.navn AS navn,
                side_test.afsnit AS afsnit,
                side_test.url AS url
            FROM side_test
            WHERE side_test.id = ?
        `;
        db.query(sql, [ id ], (err, result) => {
            if (err) reject(err)
            resolve(result[0]);
        });
    });
};

// ::INFO: UPDATE - OPDATERER EN SIDEOG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/SIDE_RET)
Side.updateOne = (id, afsnit, forsidebillede) => {
    console.log(id, afsnit, forsidebillede);
    return new Promise(async (resolve, reject) => {

        var prepareStatement = [ afsnit, forsidebillede, id ];
        var sql = `
            UPDATE side_test
            SET
                side_test.afsnit = ?,
                side_test.url = ?
            WHERE side_test.id = ?
        `;
        if (forsidebillede == "") {
            prepareStatement = [ afsnit, id  ];
            var sql = `
                UPDATE side_test
                SET
                    side_test.afsnit = ?
                WHERE side_test.id = ?
            `;
        }
        // console.log(sql);
        db.query(sql, prepareStatement, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};


module.exports = Side;