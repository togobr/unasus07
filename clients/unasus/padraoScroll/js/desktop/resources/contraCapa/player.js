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
            var recurso = this,
                $btVoltar = recurso.$el.find(".voltarNav"),
                $btAvancar = recurso.$el.find(".avancarNav");

            if (!recurso.data.final) {
                recurso.$el.find(".contLeft").css("opacity", 0);
                recurso.$el.find(".contLeft").parent().parent().addClass("col-xs-0");

            }


            if(recurso.data.inicio){
                $btVoltar.css("width","250px");
            }




            $btVoltar.on({
                click: function(e) {

                    console.log(recurso.data.inicio,"foo");

                    var cam = $(this).data("sec"),
                        hrefMods = $(this).data("modulos");


                    if (!recurso.data.inicio) {
                        $('html, body').animate({
                            scrollTop: $('#backgroundScroll' + cam).position().top
                        }, 1000);

                    }else{
                        window.top.parent.location.href = hrefMods;
                    }


                }
            })

            $btAvancar.on({
                click: function(e) {

                    var cam = $(this).data("sec"),
                        hrefMods = $(this).data("modulos");


                    if (!recurso.data.final) {
                        $('html, body').animate({
                            scrollTop: $('#backgroundScroll' + cam).position().top
                        }, 1000);

                    } else {

                        window.top.parent.location.href = hrefMods;

                    }



                }
            })




        }
    }

    return contraCapa;
});