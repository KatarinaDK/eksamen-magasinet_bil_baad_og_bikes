const db = require('../config/database').connect();

const Image = () => { };


Image.insertImage = async (url) => {
    return new Promise((resolve, reject) => {

        db.query(`
            
            INSERT INTO image_upload
            SET
                url = ?
            
            `, [ url ], (error, result) => {

                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

module.exports = Image;
