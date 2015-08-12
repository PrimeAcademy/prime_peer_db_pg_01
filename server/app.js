var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var api = require('./routes/api');
var index = require('./routes/index');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);
app.use('/', index);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
