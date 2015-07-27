var models = require('../models/models.js');

//GET /quizes/question
exports.question = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question',{pregunta: quiz[0].pregunta});
	})
};

//GET /quizes/answer
exports.answer = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		if(req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer',{respuesta: 'Correcto'});
		}
		else{
			res.render('quizes/answer',{respuesta: 'Incorrecto <br><a href="/quizes/question">Volver a intentarlo</a>'});
		}
	})
};

exports.authors = function(req, res){
	res.render('author',{autores: '<img src="/images/perfil.jpg" width="120" height="150" alt="Photo Perfil"/><br><h3>Sebastian Duque Restrepo</h3>'});
};



