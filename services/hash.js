const bcrypt = require('bcrypt');

const Hash = () => {};

// ::INFO: CREATE - OPRETTER ET HASHED PASSWORD OG INDSÆTTER I DB (BRUGES PÅ SIDEN ADMIN/USERCREATEONE)
Hash.createOne = (password) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

Hash.compare = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

module.exports = Hash;