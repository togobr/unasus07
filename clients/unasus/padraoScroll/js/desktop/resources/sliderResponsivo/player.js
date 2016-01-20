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

			var resource = this.el,
				$sliderResponsivo = $(resource).find(".rslides"),
				$sliderContainer = $(resource).find(".sliderContainer");
			

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
	
				
		}

	}

	return sliderResponsivo;
});