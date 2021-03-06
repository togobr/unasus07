define([
    'jquery',
    'bootstrap',
    'stellar'
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
                    var $btCreditos = $("body").find(".btCreditos"),
                        $modalCreditos = $("body").find(".modalCreditos");
                        $modalCreditos.appendTo("body");

                    self.loadScreenPosition();

                    $btCreditos.on({
                        click:function(e){
                            $modalCreditos.show();
                        }
                    });

                    $modalCreditos.on({
                        click:function(e){
                            $modalCreditos.hide();
                        }
                    })

                    if ($(window).width() <= 1021) {
                        $("body").find(".capa").css("height", "auto");
                        // $("body").find(".contContraCapa").css("display","table-row");
                    
                    } else {
                        $("body").find(".capa").css({
                            "height": $(window).height() + "px"
                        });
                        // $("body").find(".contContraCapa").css("display","table-cell");
                        // $("body").find(".contraCapa").css({
                        //     "height": $(window).height()- 177 + "px"
                        // });
                    }

                    //invocando stellar (parallax)
                    $.stellar({
                        horizontalScrolling: false,
                        responsive: true
                    });
                }
            });

            $(window).resize(function() {
                if ($(window).width() <= 1021) {
                    $("body").find(".capa").css("height", "auto");
                    // $("body").find(".contContraCapa").css("display","table-row");
                } else {
                    $("body").find(".capa").css({
                        "height": $(window).height() + "px"
                    });
                    // $("body").find(".contContraCapa").css("display","table-cell");
                    // $("body").find(".contraCapa").css({
                    //     "height": $(window).height()- 177 + "px"
                    // });
                }
            });
        }

        // ************************* METHODS ********W*****************

        this.loadScreenPosition = function() {
            var screenPosition = Player.Scorm.getScormValue('cmi.suspend_data').screenPosition || {};
                posY = screenPosition.posY || 0;

            $(document).scrollTop(posY)
        }

    }

    return mainplayer;
});