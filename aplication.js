var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/preguntas', function(req, res){
	res.send('<html><body>'
		+	  '<form method="get" action="/respuestas">'
		+		'¿Quién descubrió América?: <br><br>'
		+		'<input type="text" name="descubrio_america"/><br><br>'
		+		'<input type="hidden" name="respuesta" value="01">'
		+		'<input type="submit" value="Enviar"/><br>'
		+		'</form><br>'
		+	  '<form method="get" action="/respuestas">'
		+		'¿Capital de Portugal?: <br><br>'
		+		'<input type="text" name="capital_portugal"/><br><br>'
		+		'<input type="hidden" name="respuesta" value="02">'
		+		'<input type="submit" value="Enviar"/>'
		+		'</form>'
		+	 '</body></html>');
});
 
app.get('/respuestas', function(req, res){
	// ...... (los datos se procesan aquí)
	var s = "";
	if(req.query.respuesta == "01"){
		if(req.query.descubrio_america == "Cristóbal Colón" || req.query.descubrio_america == "Cristobal Colon" || req.query.descubrio_america == "cristobal colon" || req.query.descubrio_america == "Cristóbal Colón" ){
			s += "Correcto, " + req.query.descubrio_america + " fue quien descubrió América.<br>";
		}
		else{
			s += "Incorrecto, " + req.query.descubrio_america + " no descubrió América, fue Cristóbal Colón.<br>";
		}
	}
	if(req.query.respuesta == "02"){
		if(req.query.capital_portugal == "Lisboa" || req.query.capital_portugal == "lisboa"){
			s += "Correcto, " + req.query.capital_portugal + " es la capital de Portugal.<br>";
		}
		else s += "Incorrecto, " + req.query.capital_portugal + " no es la capital de Portugal, es Lisboa.<br>";
	}
	
	res.send( s 
		+ '<html><body>'
		+ '<br><a href="/preguntas">Volver a la página inicial</a>'
		+ '</body></html>');
});

app.listen(8000);
console.log('Listening on port 8000');