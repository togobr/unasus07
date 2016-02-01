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
            var recurso = this.el;




            Player.Elements.$content.on({
                contentReady: function(e) {

            

                    $('a[href*="#"]:not([href="#"])').click(function() {

                        var cam = $(this).attr("href");

                        if(cam.match("tabs") != null) return;

                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                            var target = $(this.hash);
                            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                            if (target.length) {
                                $('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 1000);
                                return false;
                            }
                        }
                    });
                }


            });






        }

    }

    return botaoPular;
});