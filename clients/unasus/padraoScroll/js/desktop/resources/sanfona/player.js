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
					$(this).children(".icon-acc").html("&#10060;");
					$(this).addClass("sanfonaAtiva");
					
				}else{
					
					$(this).children(".icon-acc").html("&#10133;");
					$(this).next().find("li").addClass("hiddenAnimate");
				}
			})

			$btSanfona.on({
				click:function(e){
					$btSanfona.children(".icon-acc").html("&#10133;");
					$btSanfona.removeClass("sanfonaAtiva");

					if($btSanfona.hasClass("ui-accordion-header-active")){
						$(this).toggleClass("sanfonaAtiva");

					}

					if($(this).hasClass("sanfonaAtiva")){
						$(this).children(".icon-acc").html("&#10060;");
					}else{
						$(this).children(".icon-acc").html("&#10133;");
					}

					$(this).next().find("li").addClass("visible").addClass("animated").addClass("fadeInLeft");
				}
			})
				
		}

	}

	return sanfona;
});