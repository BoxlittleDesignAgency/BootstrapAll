var express    = require('express'),
    path       = require('path'),
    logger     = require('morgan'),
    compress   = require('compression'),
    cors       = require('cors'),
    bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 7201;
var environment = process.env.NODE_ENV;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));



console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment){
    case 'production':
        console.log('** PRODUCTION ON **');
        console.log('serving from ' + './build/');
        process.chdir('./../../');
        app.use('/', express.static('./build/'));
        break;
    case 'stage':
    case 'build':
        console.log('** BUILD **');
        console.log('serving from ' + './build/');
        app.use('/', express.static('./build/'));
        break;
    default:
    console.log('** DEV **');
        console.log('serving from ' + './src/client/app/ and ./');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});

