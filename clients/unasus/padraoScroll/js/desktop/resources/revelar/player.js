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
				$contentCapa = recurso.$el.find('.contentCapa'),
				$content = recurso.$el.find('.tagP'),
				$dropDown = recurso.$el.find('.dropdown-toggle'),
				$dropDownContent = recurso.$el.find('.dropdown-menu');

				$content.hide();
				$dropDown.hide()


				if(recurso.$el.hasClass('click')){
					recurso.$el.on({
						click: function(e) {
							recurso.changeContent();
						}
					});
				}else if(recurso.$el.hasClass('hover')){
					recurso.$el.on({
						mouseover: function(e) {
							recurso.changeContent();
						},
						mouseout: function(e) {
							recurso.changeContent();
						}
					});
				}else{
					recurso.changeContent();
					$dropDown.css('display', 'block')
				}
		},

		this.changeContent = function() {
			$contentCapa = this.$el.find('.contentCapa'),
			$content = this.$el.find('.tagP'),
			$dropDown = this.$el.find('.dropdown-toggle'),
			$dropDownContent = this.$el.find('.dropdown-menu');

			$content.toggle();
			$contentCapa.toggle();

			if(this.$el.hasClass('dropdown')){
				$dropDown.show();
				$content.hide();
				$contentCapa.hide();
			}

			
		}

	}

	return revelar;
});