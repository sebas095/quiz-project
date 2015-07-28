var models = require('../models/models.js');

// GET /quizes/
exports.index = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', { quizes: quizes });
	})
};

// GET /quizes/:id
exports.show = function(req, res){
	models.Quiz.findById(req.params.quizId).then(function(quiz){
		res.render('quizes/show',{ quiz: quiz});
	})
};

// GET /quizes/:id/answer
exports.answer = function(req, res){
	models.Quiz.findById(req.params.quizId).then(function(quiz){
		if(req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer',{ 
				quiz: quiz, 
				respuesta: 'Correcto'
			});
		}
		else{
			res.render('quizes/answer',{
				quiz: quiz, 
				respuesta: 'Incorrecto'
			});
		}
	})
};

exports.authors = function(req, res){
	res.render('quizes/author',{
		autores: '<img src="/images/perfil.jpg" width="120" height="150" alt="Photo Perfil"/><br><h3>Sebastian Duque Restrepo</h3>'
	});
};



