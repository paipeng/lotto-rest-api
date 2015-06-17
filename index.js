/**
 * Created by paipeng on 17.06.15.
 */


var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());




function getLotto(server_res, year) {
    server_res.writeHead(200, {'Content-Type': 'application/json'});

    var lotto = require('lotto-api');
    json = lotto.getLotto(year);
    server_res.write(JSON.stringify(json));
    server_res.end();
}

app.get('/lotto/:name', function (req, res) {
    var year = req.params.name;

    getLotto(res, year);
});

app.get('/lotto', function (req, res) {
    getLotto(res, undefined);
});


app.listen(3004);