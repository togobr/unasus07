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

			recurso.$el.on({
				click: function(e) {
						
						Player.Elements.generalModal.show(recurso.data.id);

					var resource_id = recurso.data.id,
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').botaoModal,
						resource_scorm = {},
						new_suspend_data,
						$contentModal = $("body").find($("#"+recurso.data.id+"Content")),
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

						resource_scorm[resource_id] = {
							visited: true
						};
						new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);
						
						Player.Scorm.setScormValue('cmi.suspend_data', 'botaoModal', new_suspend_data);

						recurso.$el.addClass('visited');
				}
			});



		}

	}

	return botaoModal;
});