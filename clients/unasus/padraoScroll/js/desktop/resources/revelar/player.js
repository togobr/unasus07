define([], function() {
	var revelar = function() {
		var me = this;
		
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var recurso = this,
				$dropDownType = recurso.$el.find('.dropDownType'),
				$clickType = recurso.$el.find('.clickType'),
				$hoverType = recurso.$el.find('.hoverType')
				$content = recurso.$el.find('.tagP'),
				$contentCapa = recurso.$el.find('.contentCapa'),
				$dropDown = recurso.$el.find('.dropdown-toggle'),
				$dropDownContent = recurso.$el.find('.dropdown-menu');

				if(recurso.$el.hasClass("dropdown")){
					$dropDownType.show();
				}else if(recurso.$el.hasClass("click")){
					$clickType.show();

					recurso.$el.on({
						click: function(e) {
							$(this).toggleClass('clicked');
						}
					});
				}else{
					$hoverType.show();

					recurso.$el.on({
						mouseover: function(e) {
							$(this).addClass('hovered'); 
						},
						mouseout: function(e) {
							$(this).removeClass('hovered');
						}
					});
				}
		}
	}

	return revelar;
});