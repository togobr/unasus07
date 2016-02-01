define(["jqueryUiAccordion"], function() {

	var sanfona = function(template, data) {
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
				$accordion = $(resource).find("#accordion"),
				$btSanfona = $accordion.children("h3");

				console.log("$btSanfona", $btSanfona);

			$accordion.accordion({
				collapsible: true,
				heightStyle: "content"
			});

			
			$btSanfona.each(function(){
				
				if($(this).hasClass("ui-accordion-header-active")){
					
					$(this).addClass("sanfonaAtiva");

					$(this).children(".iconSanf").removeClass("icon-setaPreenchida_direita");
						$(this).children(".iconSanf").addClass("icon-setaPreenchida_baixo");
					
				}else{
					
					$(this).children(".iconSanf").addClass("icon-setaPreenchida_direita");
						$(this).children(".iconSanf").removeClass("icon-setaPreenchida_baixo");
					$(this).next().find("li").addClass("hiddenAnimate");
				}
			})

			$btSanfona.on({
				click:function(e){
			
					$btSanfona.removeClass("sanfonaAtiva");

					$btSanfona.children(".iconSanf").addClass("icon-setaPreenchida_direita");
					$btSanfona.children(".iconSanf").removeClass("icon-setaPreenchida_baixo");

					if($btSanfona.hasClass("ui-accordion-header-active")){
						$(this).toggleClass("sanfonaAtiva");
						$(this).children(".iconSanf").removeClass("icon-setaPreenchida_direita");
						$(this).children(".iconSanf").addClass("icon-setaPreenchida_baixo");

					}

			
					$(this).next().find("li").addClass("visible").addClass("animated").addClass("fadeInLeft");
				}
			})
				
		}

	}

	return sanfona;
});