define([
	"portChecker"
	], function() {

	var viewPortChecker = function() {


			// $('.textoSolto li').addClass("hiddenAnimate").viewportChecker({
		 //       classToAdd: 'visible animated fadeInLeft'
	  //      	});

	       	$('.cabecalho').addClass("hiddenAnimate").viewportChecker({
		       classToAdd: 'visible animated fadeInDown'
	       	});

	       	// $('.tituloModulo').addClass("hiddenAnimate").viewportChecker({
		       // classToAdd: 'visible animated fadeInDown'
	       	// });

	       	$('img').addClass("hiddenAnimate").viewportChecker({
		       classToAdd: 'visible animated fadeIn'
	       	});

	       	$('.caixaDestaque ').addClass("hiddenAnimate").viewportChecker({
		       classToAdd: 'visible animated fadeInLeft'
	       	});
	       	$('.alternativa_atividade ').addClass("hiddenAnimate").viewportChecker({
		       classToAdd: 'visible animated fadeInLeft'
	       	});
	       	// $('ul').addClass("hiddenAnimate").viewportChecker({
		       // classToAdd: 'visible animated fadeInLeft'
	       	// });


	       	


		
	}

	return viewPortChecker;
});