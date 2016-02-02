/*
	Não importar jquery pois compilação entrega para ele. Explicar melhor na hora de documentar
*/

define([], function() {
	var botaoModal = function() {
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
			Player.Elements.generalModal.add(recurso, Player.Config.general.modal, {
				actions: [
					"click .btnFechar hide"
				],
				content: "#modalContent"
			});

			console.log("foo", recurso.$el.attr("class"));


			Player.Elements.$content.on({
                contentReady: function(e) {



                	if(recurso.$el.hasClass("tip")){





                		console.log(recurso.$el.attr("id"),"foo")

                		var tipNumber = recurso.$el.find(".botaoModal").data("ntip"),
                			$tooltipHolder = $("body").find("#tooltipHolder" + tipNumber);



                			$("body").find("#"+recurso.$el.attr("id")+"Content").find(".palavraDestacada").show();

						recurso.$el.appendTo($tooltipHolder);
		
					}

                	

               
                }
            });

			

			recurso.$el.on({
				click: function(e) {
					
					Player.Elements.generalModal.show(recurso.data.id);

					var $contentModal = $("body").find($("#"+recurso.data.id+"Content")),
						contentModalWidth = $contentModal.width(),
						contentModalHeight = $contentModal.height(),
						windowWidth = $(window).width(),
						windowHeight = $(window).height(),
						top = (((windowHeight - contentModalHeight)/2)*100)/windowHeight,
						left = (((windowWidth - contentModalWidth)/2)*100)/windowWidth;




						$contentModal.css({
							"top":  top+"%",
							"left": left+"%"


						})







					
				}
			});



		}

	}

	return botaoModal;
});