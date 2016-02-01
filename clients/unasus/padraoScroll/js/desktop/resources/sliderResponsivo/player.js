define(["responsiveSlidesJs"], function() {

	var sliderResponsivo = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var resource = this,
				$sliderResponsivo = resource.$el.find(".rslides"),
				$sliderContainer = resource.$el.find(".sliderContainer"),
				$contentSlider = resource.$el.find(".contentSlider"),
				$btnVolta = resource.$el.find(".slider_nav"),
				$btnAvanca = resource.$el.find(".slider1_nav.next");

				// console.log('foo this', resource.$el.find('.slider_nav'));


				if(!$contentSlider.html()){
					$contentSlider.hide();
				}


			Player.Elements.$content.on({
				contentReady: function() {
					$sliderResponsivo.responsiveSlides({
						auto: false,
						pager: true,
						nav: true,
						speed: 500,
						namespace: "slider",
						prevText: "&#59237;",
						nextText: "&#59238;"
					});   

					$sliderContainer.children(".slider_tabs").appendTo($sliderContainer.children(".bottomContainer"));
					resource.$el.find('.slider_nav.prev').wrapInner("<div class='wrapperBtnNav prev'></div>")
					resource.$el.find('.slider_nav.next').wrapInner("<div class='wrapperBtnNav next'></div>")
				}
			});
		}
	}

	return sliderResponsivo;
});