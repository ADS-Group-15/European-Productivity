/*jshint esversion: 8 */

const mysql = require('mysql');
const readline = require('readline');
const fs = require('fs');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "data"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

let sql = "CREATE TABLE IF NOT EXISTS data (time YEAR NOT NULL, geo VARCHAR(255) NOT NULL, unit VARCHAR(255) NOT NULL, na_item VARCHAR(255) NOT NULL, value FLOAT)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

    const readInterface = readline.createInterface({
        input: fs.createReadStream(__dirname + '/data.csv')
    });

    let array;
    readInterface.on('line', function (line) {
        array = line.split(',');
        array[4] = parseFloat(array[4].replace(/\s/g, ''));
        //console.log(array);

        if (isNaN(array[4])) {
            array[4] = 0;
        }

        if (array.length != 5) {
            console.log(array);
        }

        let sql = "INSERT INTO data (time, geo, unit, na_item, value) VALUES ("
            .concat('\'').concat(array[0]).concat('\',')
            .concat('\'').concat(array[1]).concat('\',')
            .concat('\'').concat(array[2]).concat('\',')
            .concat('\'').concat(array[3]).concat('\',')
            .concat('\'').concat(array[4]).concat('\')');

        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
});