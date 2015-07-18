var express = require('express');
var app = express();

// en :id? la interrogacion indica opcional
//	-> Reconoce /user  /user/Pepe,  /user/14, ...

app.get('/user/:id?', function(req, res){
	res.send('User ' + (req.params.id || 'anónimo'));
});

// Parametros se restringen con RegExp entre paréntesis
// '/user1/:id(\\d+)' reconoce '/user1/238' o '/user1/1'
// 					  pero no '/user1/a' o /user1

app.get('/user1/:id(\\d+)', function(req, res){
	res.send('User1 '  + req.params.id);
});

app.listen(8000);