define([], function() {
	var caixaDestaque = function() {
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
				animate = this.data.animate || "";

			Player.Elements.$content.on({
				contentReady: function() {
					recurso.$el.addClass("hidden").viewportChecker({
		                classToAdd: 'visible ' + animate + ' animated '  , // Class to add to the elements when they are visible
		                offset: 100    
		            }); 

		            console.log('foo togo');
				}
			});
		}

	}

	return caixaDestaque;
});