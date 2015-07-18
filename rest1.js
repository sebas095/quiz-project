var express = require('express');
var app = express();

//el metodo 'get(path, MW)' responde a peticiones 'GET path'
//	como respuesta a 'GET path' ejecuta el middlewre MW

app.get('/mi_ruta',function(req, res){
	res.send('Bienvenido a mi primera aplicacion');
	console.log("req.method =      " + req.method);
	console.log("req.path =        " + req.path);
	console.log("req.get('host') = " + req.get('host'));
});

app.listen(8000);