var express = require('express');
var path = require('path');
var app = express();

//Middleware de acceso a paginas web estaticas
//	-> root = directorio 'public'
//	-> __dirname: nombre del directorio de ejecucion

app.use(express.static(path.join(__dirname,'public')));

app.get('/mi_ruta',function(req, res){
	res.send('<html><body><h1>Mi Ruta</h1><a href="hola1.html">HOLA</a></body></html>');
});

app.listen(8000);
