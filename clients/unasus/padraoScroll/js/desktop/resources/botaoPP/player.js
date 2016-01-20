/*
	Não importar jquery pois compilação entrega para ele. Explicar melhor na hora de documentar
*/

define([], function() {
	var botaoPP = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var recurso = this,
				$modalPrimeiroPlano = $(recurso).find('.primeiroPlano');


				console.log($modalPrimeiroPlano, 'modaltestelocalizacao')

			Player.Elements.generalModal.add(recurso, Player.Config.general.modal, {
				actions: [
					"click .btnFechar hide"
				],
				content: "#modalContent"
			});

			recurso.$el.on({
				click: function(e) {
					Player.Elements.generalModal.show(recurso.data.id);
				}
			});


			// $modalPrimeiroPlano.css({
   //              'margin-top': function () {
   //                  return window.pageYOffset-($(this).height() / 2 );
   //              }
   //          });



		}

	}

	return botaoPP;
});