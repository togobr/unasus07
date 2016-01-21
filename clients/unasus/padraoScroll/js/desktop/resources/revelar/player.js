define([], function() {
	var revelar = function() {
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
				}
			});
		}

	}

	return revelar;
});