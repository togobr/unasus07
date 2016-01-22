define([], function() {
	var dropdown = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
			var recurso = this.el,
				$btndropdown  = $(recurso).find('.dropdown'),
				$conteudoDrop = $(recurso).find('.dropdown-menu');
				

				console.log("conteudodrop",$conteudoDrop);

				$btndropdown.on({click:function(e){


					$btndropdown.toggleClass("dropDownOpen");

					if($btndropdown.hasClass("dropDownOpen")){
						$conteudoDrop.slideToggle( "slow", function() {
   
 						 });
					} else{
						$conteudoDrop.slideToggle( "slow", function() {
   
 						 });
					}

		

			}
		}); 


	}

}

	return dropdown;
});