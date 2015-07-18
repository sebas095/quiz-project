var express = require('express');
var app = express();

//el metodo 'get(path, MW)' responde a peticiones 'GET path'
//	como respuesta a 'GET path' ejecuta el middlewre MW

app.get('/mi_ruta',function(req, res){
	res.type('text/plain');
	res.status(200);
	res.send('<html><body><h1>Mi Ruta</h1></body></html>');
});

app.listen(8000);