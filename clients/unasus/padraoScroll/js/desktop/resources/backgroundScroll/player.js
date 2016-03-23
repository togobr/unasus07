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

			var recurso = this,
				resourceAnimate = this.data.images || "",
				animateType;

				if(resourceAnimate){
					animateType = resourceAnimate[0].animate;
				}else{
					animateType = "";
				}

			Player.Elements.$content.on({
                contentReady: function(e) {

                	if(animateType){
                		recurso.$el.find('.imgBG').addClass("hidden").viewportChecker({
			                classToAdd: 'visible ' + animateType + ' animated '  , // Class to add to the elements when they are visible
			                offset: 500,
			                invertBottomOffset: true
			            });
                	}

                	

                	$("body").find(".rec").each(function(){
                		var $divSection = $("body").find("#section-"+$(this).data("section")).children(".content");
                		$(this).appendTo($divSection);
                	});              
                }
            });

            recurso.$el.find('.capa').viewportChecker({
            	repeat: true,
                callbackFunction: function(){
                	var unidadeName = Player.Tree.main.$el.find('.unidadeName span'),
                		unidade = recurso.data.unidade || "";
	             		unidadeName.replaceWith('<span>' + unidade + '</span>');
                }
            });
		}

	}

	return backgroundScroll;
});