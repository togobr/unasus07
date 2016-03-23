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
				pinContainer = recurso.$el.find('.pinContainer'),
				id_pinContainer = recurso.$el.find('.pinContainer').attr('id'),
				id_slideContainer = recurso.$el.find('.slideContainer').attr('id'),
				screenHeightDesktop = $(window).height() - 95,
				screenHeightMobile = $(window).height() - 50;
	
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			
			//Definindo tamanho inicial, e auto escalonamento ao alterar o tamanho da janela.
			if ($(window).width() <= 1021) {
				pinContainer.css('height', screenHeightMobile + 'px'); //problema espaço top não é do slider.
            } else {
            	pinContainer.css('height', screenHeightDesktop + 'px');
            }

            $(window).resize(function() {
            	pinContainer.css('height', ($(window).height() - 95) + 'px');
            });


			Player.Elements.$content.on({
                contentReady: function(e) {
	               	var controller = new ScrollMagic.Controller(),
	               		nSlides = recurso.data.slides.length,
	               		n = 0;

					var wipeAnimation = new TimelineMax();

					for (var i = nSlides - 2; i >= 0; i--) {	
						n += 25;
						wipeAnimation.add( TweenLite.to("#"+id_slideContainer, 1, {x: '-'+n+'%'}) )
	               	};


					// create scene to pin and link animation
					new ScrollMagic.Scene({
							triggerElement: "#"+recurso.data.id,
							triggerHook: "onLeave",
							duration: "100%"
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