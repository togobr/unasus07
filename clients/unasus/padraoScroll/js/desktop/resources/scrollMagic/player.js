/*
	Não importar jquery pois compilação entrega para ele. Explicar melhor na hora de documentar
*/

define(["ScrollMagic"], function(ScrollMagic) {
	var scrollMagic = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var resource = this,
				$pinContainer = $(resource).find("#pinContainer");


			Player.Elements.$content.on({
				contentReady: function() {
					var x = ScrollMagic;

					console.log('fooo resource', x);

				}
			});

		}

	}

	return scrollMagic;
});