var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId){
	models.Quiz.findById(quizId).then(
		function(quiz){
			if(quiz){
				req.quiz = quiz;
				next();
			}
			else{
				next(new Error('No existe quizId=' + quizId));
			}
		}
	).catch(function(error){ next(error); });
};

// GET /quizes/
exports.index = function(req, res){
	var busqueda = req.query.search;
	if(busqueda === undefined){
		models.Quiz.findAll().then(function (quizes){
				res.render('quizes/index.ejs', {quizes: quizes, errors: []});
        		}
     		).catch(function(error) { next(error);})
	}
	else{
		busqueda = '%'+busqueda.replace(/ /g,'%')+'%';
		models.Quiz.findAll({where:["pregunta LIKE ?", busqueda], order:"question"}).then(function(quizes){
			res.render('quizes/index.ejs', { quizes: quizes, errors: [] });
			}
		).catch(function(error){ next(error); });
	}
		
};

// GET /quizes/new
exports.new = function(req, res){
	var quiz = models.Quiz.build(// crea objeto quiz
		{ pregunta: "Pregunta", respuesta: "Respuesta"}
	);

	res.render('quizes/new', { quiz: quiz, errors: [] });
};

// POST /quizes/create
exports.create = function(req, res){
	var quiz = models.Quiz.build( req.body.quiz );

	quiz.validate().then(function(err){
		if(err){
			res.render('quizes/new', { quiz: quiz, errors: err.errors});
		}
		else{
			// guarda en DB los campos pregunta y respuesta de quiz
			quiz.save({ fields: ["pregunta", "respuesta"]}).then(function(){
				res.redirect('/quizes');
			}) // Redireccion HTPP (URL relativo) lista de preguntas
		}
	});
	
};

// GET/quizes/:id/edit
exports.edit = function(req, res){
	var quiz = req.quiz; // autoload de instancia quiz

	res.render('quizes/edit', { quiz:quiz, errors: [] });
};

// PUT /quizes/:id
exports.update = function(req, res){
	req.quiz.pregunta = req.body.quiz.pregunta;
	req.quiz.respuesta = req.body.quiz.respuesta;

	req.quiz.validate().then(function(err){
		if(err){
			res.render('quizes/edit', { quiz:req.quiz, errors: err.errors});
		}
		else{
			req.quiz.save({ fields: ["pregunta","respuesta"]})// guarda en DB los campos pregunta y respuesta de quiz
			.then(function(){
				res.redirect('/quizes'); // Redireccion HTPP (URL relativo) lista de preguntas
			});
		}
	});
};

// DELETE /quizes/:id
exports.destroy = function(req, res){
	req.quiz.destroy().then(function(){
		res.redirect('/quizes');
	}).catch(function(error){ next(error) });
};

// GET /quizes/:id
exports.show = function(req, res){
	res.render('quizes/show',{ quiz: req.quiz, errors: [] });
};

// GET /quizes/:id/answer
exports.answer = function(req, res){
	var resultado = 'Incorrecto';
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto';
	}
	res.render('quizes/answer',{ quiz: req.quiz, respuesta: resultado, errors: [] });
};

exports.authors = function(req, res){
	res.render('quizes/author',{
		autores: '<img src="/images/perfil.jpg" width="120" height="150" alt="Photo Perfil"/><br><h3>Sebastian Duque Restrepo</h3>',
		errors: []
	});
};



