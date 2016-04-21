define([
	'jquery'
	], function($) {

	var atividadeGaveta = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var player = this,
			$liGaveta = this.$el.find('li'),
			$gavetaTexto = this.$el.find('.gavetaTexto');

			$gavetaTexto.hide();


			$liGaveta.on({
				click: function(e) {
					$liGaveta.removeClass('gavetaSelected');
					$(this).addClass('gavetaChecked');
					$(this).addClass('gavetaSelected');

					var id = $(this).attr("id");
					var divTexto = $(this).parent().parent().parent().find('.texto');

					$gavetaTexto.show();

					divTexto.each(function (index, event) {
						var parGaveta = $(divTexto[index]).attr("data-gaveta");
						if(id === parGaveta) {
							$(divTexto).hide();
							$(divTexto[index]).show();
						}
					});
				}
			});
		}

	}

	return atividadeGaveta;
});
