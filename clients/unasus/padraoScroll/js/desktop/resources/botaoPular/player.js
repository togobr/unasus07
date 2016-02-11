define([], function() {
    var botaoPular = function(template, data) {
        this.init = function() {
            /*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
            var recurso = this,
                $btPular = recurso.$el.find(".btPular"),
                cam = recurso.$el.data("nsec");

            $btPular.on({
                click: function(e) {
                

                    $('html, body').animate({
                        scrollTop:$('#'+ cam).position().top
                    }, 1000);
                }
            });
        }
    }

    return botaoPular;
});