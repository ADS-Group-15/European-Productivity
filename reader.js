/*jshint esversion: 8 */

const mysql = require('mysql');
const sqlConfig = {
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "data"
};
const connection = mysql.createPool(sqlConfig);

function search(geo, unit, na_item, callback) {
    let sql = "SELECT * FROM data WHERE geo="
        .concat('\'').concat(geo).concat('\'')
        .concat(' AND ').concat('unit=')
        .concat('\'').concat(unit).concat('\'')
        .concat(' AND ').concat('na_item=')
        .concat('\'').concat(na_item).concat('\'');

    connection.getConnection(function (err, conn) {
        if (err) throw err;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            conn.release();
            return callback(result);
        });
    });
}

module.exports = {
    search: search
};