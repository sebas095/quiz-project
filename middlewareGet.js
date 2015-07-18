var express = require('express')
var app = express();

app.get('/user/:id', function(req, res, next){
	if(req.params.id == "Ana" || req.params.id == "Eva"){
		res.send('Usuario del sistema');
	}
	else{
		next();
	}
});

app.get('*', function(req,res){
	res.send('Usuario desconocido');
})

app.listen(8000);
console.log('Listening on port 8000');