define([
	'jquery',
    'ScrollMagic',
    'TweenMax',
    'gsap',
    'addIndicators'
	], function($, ScrollMagic) {
	var magicSlider = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/

			var recurso = this,
				id_pinContainer = recurso.$el.find('.pinContainer').attr('id'),
				id_slideContainer = recurso.$el.find('.slideContainer').attr('id');


				console.log('foo pinContainer', id_pinContainer);
	
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			


			Player.Elements.$content.on({
                contentReady: function(e) {
	               	var controller = new ScrollMagic.Controller(),
	               		nSlides = recurso.data.slides.length;

               		// for (var i = nSlides - 1; i >= 0; i--) {
	               	// 	.to("#"+id_slideContainer, 1,   {x: "-" + (n+25) + "%"})
	               	// };

	               	if (nSlides === 2) {
	               		var wipeAnimation = new TimelineMax()
						// animate to second panel
						.to("#"+id_slideContainer, 1,   {x: "-25%"})
	               	}else if(nSlides === 4){
	               		var wipeAnimation = new TimelineMax()
	               		.to("#"+id_slideContainer, 1,   {x: "-25%"})	// move in to first panel
						// animate to third panel
						.to("#"+id_slideContainer, 1,   {x: "-50%"})
						// animate to forth panel
						.to("#"+id_slideContainer, 1,   {x: "-75%"})
	               	}


					// define movement of panels
					// var wipeAnimation = new TimelineMax()
					// 	// animate to second panel
					// 	.to("#"+id_slideContainer, 1,   {x: "-25%"})	// move in to first panel
					// 	// animate to third panel
					// 	.to("#"+id_slideContainer, 1,   {x: "-50%"})
					// 	// animate to forth panel
					// 	.to("#"+id_slideContainer, 1,   {x: "-75%"})

					// 	console.log('foo ScrollMagic', wipeAnimation);

					// create scene to pin and link animation
					new ScrollMagic.Scene({
							triggerElement: "#"+recurso.data.id,
							triggerHook: "onLeave",
							duration: "500%"
						})
						.setPin('#'+id_pinContainer)
						.setTween(wipeAnimation)
						.addTo(controller);
                }
            });

		}
	}

	return magicSlider;
});