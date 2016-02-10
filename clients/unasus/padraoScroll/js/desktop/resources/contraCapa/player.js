define([], function() {
    var contraCapa = function(template, data) {
        this.init = function() {
            /*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
            var recurso = this;

            if(!recurso.data.final){
                recurso.$el.find(".contLeft").css("opacity",0);
                recurso.$el.find(".contLeft").parent().parent().addClass("col-xs-0");

            }

            
        }
    }

    return contraCapa;
});