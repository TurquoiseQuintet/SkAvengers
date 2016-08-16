'use strict';
var bcrypt = require('bcrypt');

function hash(password) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(8, function(err, salt) {
            if (err) {
                reject(err);
            } else {
              console.log(password, salt);
                bcrypt.hash(password, salt, function(err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
}

module.exports = hash;
