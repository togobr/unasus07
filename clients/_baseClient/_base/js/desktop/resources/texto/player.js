define(['jquery'], function($) {

	var texto = function(template, data) {
		this.init = function() {

			var texto = this,
				animate = this.data.animate || "";

			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			Player.Elements.$content.on({
				contentReady: function() {
					texto.$el.addClass("hidden").viewportChecker({
		                classToAdd: 'visible ' + animate + ' animated '  , // Class to add to the elements when they are visible
		                offset: 100    
		            }); 
				}
			});
			
			
		}

		this.in = function(slide) {
			console.log('caixa de texto slider IN executed on slide #%d', slide);
		}

		this.out = function(slide) {
			console.log('caixa de texto slider OUT executed on slide #%d', slide);
		}

	}

	return texto;
});