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

			var recurso = this,
				$contentCapa = recurso.$el.find('.contentCapa');
				$content = recurso.$el.find('.tagP');

				$content.hide();

				if(recurso.$el.hasClass('click')){
					recurso.$el.on({
						click: function(e) {
							$content.toggle();
							$contentCapa.toggle();
						}
					});
				}else{
					recurso.$el.on({
						mouseover: function(e) {
							$content.toggle();
							$contentCapa.toggle();
						},
						mouseout: function(e) {
							$content.toggle();
							$contentCapa.toggle();
						}
					});
				}
		}

	}

	return revelar;
});