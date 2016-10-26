var express = require('express');
var app = express();

app.get('/:timestamp', function (req, res) {
    var inputDate = req.params.timestamp;
    if(!isNaN(inputDate)) inputDate = parseInt(inputDate) * 1000;
    var date = new Date(inputDate);
    var output = {'unix': null, 'natural_date': null};
    if(!isNaN(date.getTime())){
        output.unix = date.getTime()/1000;
        output.natural_date = date.toDateString();
    }
  res.send(JSON.stringify(output));
});

app.listen(8080);