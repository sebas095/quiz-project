var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/form', function(req, res){
	res.send('<html><body>'
		+	  '<form method="post" action="/proc">'
		+		'Su nombre: <br>'
		+		'<input type="text" name="user"/><br>'
		+		'<input type="submit" value="Enviar"/>'
		+		'</form>'
		+	 '</body></html>');
});
 
app.post('/proc', function(req, res){
	// ...... (los datos se procesan aquí)
	res.send('Gracias por su envío ' + req.body.user);
});

app.listen(8000);