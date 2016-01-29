define([], function() {
	var texto = function() {
		var me = this;
		
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
				$underlineTitle = recurso.$el.find('.underlineTitle');

			if((!recurso.$el.hasClass('title')) && (!recurso.$el.hasClass('subtitle'))){
				$underlineTitle.hide();
			}

		}
	}

	return texto;
});