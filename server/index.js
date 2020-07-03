const morgan = require('morgan')
const express= require('express');
const app = express();
const config= require('config');
const startupDebug = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const home = require('./routes/home');
const quiz = require('./routes/quiz');
const genres= require('./routes/genres');
const Joi = require('joi');
const { indexOf } = require('core-js/fn/array');

app.set('view engine', 'pug');
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({ extended: true})); // key=value&key2=value2
app.use(express.static('public')); // read file info

app.use('/', home);
app.use('/api/quiz', quiz);
app.use('/api/genres', genres);

console.log('Application name='+config.get('name'));

app.use(function(req,res,next){
    console.log('Logging......');
    next();
});

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('Morgan Enabled')
}

startupDebug('Application Startup');
dbDebugger('Connected to database...');

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listeninig....${port}`));
