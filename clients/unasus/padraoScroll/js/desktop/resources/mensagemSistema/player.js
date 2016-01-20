define([], function() {
	var mensagemSistema = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			var recurso = this.el,
				$btnFechar = $(recurso).find('.fecharMensagem'),
                $msgSistema = $(recurso).find('.mensagemSistema');

				$btnFechar.on({click:function(e){

					$(this).parent().parent().parent().addClass('animated').addClass("fadeOutDown");
						

			}
		}); 


	}

}

	return mensagemSistema;
});