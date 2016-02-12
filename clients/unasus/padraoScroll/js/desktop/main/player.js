define([
    'jquery',
    'bootstrap'
], function($) {

    var mainplayer = function() {
        var self = this,
            right,
            tSliderInd;

        function getElements() {
            var $el = self.$el;

            return {
                $el: $el
            }
        }

        this.init = function() {
            $.extend(this, new Player.Base.main.player(this));

            $.extend(this.elems, getElements());


            Player.Elements.$swipe.on({
                slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {}
            });

            Player.Elements.$content.on({
                contentReady: function(e) {
                    $("body").find(".modalCreditos").appendTo("body");



                    if ($(window).width() <= 1021) {
                        $("body").find(".capa").css("height", "auto");

                        $("body").find(".contContraCapa").css("display","table-row");

                    } else {
                        $("body").find(".capa").css({
                            "height": $(window).height() + "px"
                        });

                        $("body").find(".contContraCapa").css("display","table-cell");


                        $("body").find(".contraCapa").css({
                            "height": $(window).height()- 177 + "px"
                        });
                    }


                }
            });

            $(window).resize(function() {

                if ($(window).width() <= 1021) {
                    $("body").find(".capa").css("height", "auto");
                    $("body").find(".contContraCapa").css("display","table-row");

                } else {
                    $("body").find(".capa").css({
                        "height": $(window).height() + "px"
                    });

                    $("body").find(".contContraCapa").css("display","table-cell");

                     $("body").find(".contraCapa").css({
                            "height": $(window).height()- 177 + "px"
                        });
                }

            });
        }

        // ************************* METHODS ********W***************** 

        this.teste = function() {
            var player = this;
        }

    }

    return mainplayer;
});