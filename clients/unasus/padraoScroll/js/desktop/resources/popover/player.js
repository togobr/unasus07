define([], function() {
	var popover = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/

				var recurso = this.el,
					$btnPopOver  = $(recurso).find('.btnPopOver');

						
				$btnPopOver.on({click:function(e){


				$btnPopOver.toggleClass("popOverOpen");

				if($(this).hasClass("popOverOpen")){
				$(".modalPopOver").fadeIn();

				$btnPopOver.children().html("<img src='./css/assets/images/PopOverOpen.png'>;");
				} else{
				$(".modalPopOver").fadeOut();
				$btnPopOver.children().html("<img src='./css/assets/images/PopOverClosed.png'>;");

				}
			}
		}) 

	}

}

	return popover;
});