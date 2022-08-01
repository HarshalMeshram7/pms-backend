const db = require('../db/schema/index');

/* This function is used to normal users signup */
exports.addUser = (userObj) => {
    return new Promise(function (resolve, reject) {
        db.users.findOrCreate({
            where: { 'email': userObj.email },
            defaults: userObj
        }).then(result => {
            if (result[0]._options.isNewRecord == true) {
                resolve(result[0].dataValues);
            } else {
                resolve(false);
            }
        }).catch(error => {
            reject(error)
        })
    })
}