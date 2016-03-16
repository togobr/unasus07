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
				$fechaRevelar = recurso.$el.find('.fechaRevelar'),
				$setaPreenchida_baixo = recurso.$el.find('.setaPreenchida_baixo'),
				$setaPreenchida_cima = recurso.$el.find('.setaPreenchida_cima'),
				animate = this.data.animate || "";


				Player.Elements.$content.on({
					contentReady: function() {
						recurso.$el.addClass("hidden").viewportChecker({
			                classToAdd: 'visible ' + animate + ' animated '  , // Class to add to the elements when they are visible
			                offset: 100    
			            }); 
					}
				});


				if(recurso.$el.hasClass("dropdown")){
					$dropDownType.show();

					recurso.$el.on({
						click: function(e) {
							$(this)
								.find('.openCloseIcon')
								// .toggleClass('opened');
						}
					});

				}else if(recurso.$el.hasClass("click")){
					$clickType.show();

					recurso.$el.on({
						click: function(e) {
							$(this).toggleClass('clicked');
						}
					});
				}else{
					$hoverType.show();
					$fechaRevelar.hide();

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