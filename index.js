// Inicio
const express = require('express');
const morgan = require('morgan');
const app = express();


//Settings
app.set('appName', 'Proyecto backend');
app.set('port', 3000);

//app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());

//app.use(morgan('dev'));
app.use(morgan('dev'));

//Query
const data= require('./src/data');


//Routting START
app.use(require('./src/routing'));

app.use(express.static('Principal'));

//Servidor
app.listen(app.get('port'), () => {
	console.log(`Server active on : ${app.get('port')}`);
});