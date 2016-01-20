define(["jqueryUiTabs"], function() {

	var gavetaHorizontal = function(template, data) {
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
				$gaveta = $(resource).find("#tabsHor");
				$gaveta.tabs();
				// $gaveta.children("ul").attr("class","");
				// $gaveta.children("ul").children("li").attr("class","");
				//$gaveta.children("ul").children("li").children("a").attr("class","")
				// $gaveta.attr("class","")
		}

	}

	return gavetaHorizontal;
});