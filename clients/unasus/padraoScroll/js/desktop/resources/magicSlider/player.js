define([
	'jquery',
    'ScrollMagic',
    'TweenMax',
    'gsap',
    'addIndicators'
	], function($, ScrollMagic, TweenMax) {
	var magicSlider = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/

			var recurso = this;
	
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			console.log('foo ScrollMagic', ScrollMagic);


			Player.Elements.$content.on({
                contentReady: function(e) {
	               	var controller = new ScrollMagic.Controller();

					// define movement of panels
					var wipeAnimation = new TimelineMax()
						// animate to second panel
						.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
						.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
						// animate to third panel
						.to("#slideContainer", 1,   {x: "-50%"})
						.to("#slideContainer", 0.5, {z: 0})
						// animate to forth panel
						.to("#slideContainer", 1,   {x: "-75%"})
						.to("#slideContainer", 0.5, {z: 0});

					// create scene to pin and link animation
					new ScrollMagic.Scene({
							triggerElement: "#magicSlider1",
							triggerHook: "onLeave",
							duration: "500%"
						})
						.setPin("#pinContainer")
						.setTween(wipeAnimation)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
                }
            });

		}
	}

	return magicSlider;
});