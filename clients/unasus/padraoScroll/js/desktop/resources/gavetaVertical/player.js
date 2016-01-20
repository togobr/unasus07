define(["jqueryUiTabs"], function() {

	var gavetaVertical = function(template, data) {
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
				$gaveta = $(resource).find("#tabsVert");

				$gaveta.tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
				$gaveta.find("li").removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

				console.log("ligaveta", $gaveta.find("li"))



			
				
		}

	}

	return gavetaVertical;
});