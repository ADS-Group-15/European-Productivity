/*jshint esversion: 8 */

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const reader = require('./reader');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/editor', (req, res) => {
  res.render('new');
});


app.post('/api', jsonParser, async (req, res) => {
  let result = [];
  await getResult(req, function (data) {
    for (let i = 0; i < req.body.year.length; i++) {
      for (let j = 0; j < data.length; j++) {
        for (let n = 0; n < data[0].length; n++) {
          if (req.body.year[i] == data[j][n].time) {
            result.push(data[j][n]);
          }
        }
      }
    }
    res.send(result);
    res.end();
  });


});

function getResult(req, callback) {
  let result = [];
  for (let i = 0; i < req.body.geo.length; i++) {
    (function(i) {
      reader.search(req.body.geo[i], req.body.unit, req.body.na_item, function (data) {
        result.push(data);
        if (result.length == req.body.geo.length) {
          return callback(result);
        }
      });
    })(i);
  }
}

app.listen(5000);