define([], function() {
	var parallaxBlock = function() {
		var recurso = this;
		
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
	
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));
		}
	}

	return parallaxBlock;
});