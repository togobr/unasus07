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
            var recurso = this;

            recurso.$el.on({
                click: function(e) {
                    var cam = $(this).data("nsec");

                    $('html, body').animate({
                        scrollTop:$('#'+ cam).position().top
                    }, 1000);
                }
            });
        }
    }

    return botaoPular;
});