var express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./db/database')
const Note = require('./db/models/Note')

app.post('/', function (req, res) {
  Note.create(req.body, function (err, small) {
    if (err){
      res.status(200).send({
        status : 0,
        message: err
      })
    }
    res.status(200).send({
      status : 1
    })
  }); 
});

module.exports = app

/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/