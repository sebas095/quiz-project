var express = require('express');
var app = express();

// URL con parametro: /hola/:n
//	-> Reconoce /hola/Pepe, /hola/14, ...

app.get('/hola/:n', function(req, res){

	// :n accesible como req.params.n
	res.send('Hola ' + req.params.n);
});

// 2 parametros :op e :id

app.get('/service/:op/user/:id', function(req, res){

	// :p accesible como req.params.p
	res.send('Usuario ' + req.params.id
		   + ' Solicita ' + req.params.op);
});

app.listen(8000);