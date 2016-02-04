/*
	Não importar jquery pois compilação entrega para ele. Explicar melhor na hora de documentar
*/

define([], function() {
	var backgroundScroll = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var recurso = this;

			Player.Elements.$content.on({
                contentReady: function(e) {

                	$("body").find(".rec").each(function(){
                		var $divSection = $("body").find("#section-"+$(this).data("section")).children(".content");
                		$(this).appendTo($divSection);
                	});

               
                }
            });
		}

	}

	return backgroundScroll;
});