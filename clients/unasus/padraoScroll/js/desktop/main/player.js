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
                $el: $el,
                $btnNavbarMobile: $el.find('.btnNavbarMobile'),
                $mainDropdown: $el.find('.mainDropdown'),
                $linksToMobile: $el.find('.linksToMobile'), 
                $mainNavBar: $el.find('.mainNavBar')
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
                        $("body").find(".contContraCapa").css("display","table-row");
                        self.elems.$mainNavBar.removeClass('screenDesktop');
                        self.elems.$mainNavBar.addClass('screenMobile');
                        

                    } else {
                        $("body").find(".capa").css({
                            "height": $(window).height() + "px"
                        });
                        $("body").find(".contContraCapa").css("display","table-cell");
                        $("body").find(".contraCapa").css({
                            "height": $(window).height()- 177 + "px"
                        });
                        self.elems.$mainNavBar.removeClass('screenMobile');
                        self.elems.$mainNavBar.addClass('screenDesktop');
                        
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
                    $("body").find(".contContraCapa").css("display","table-row");
                    self.elems.$mainNavBar.removeClass('screenDesktop');
                    self.elems.$mainNavBar.addClass('screenMobile');

                    // self.elems.$mainDropdown.hide();
                    // self.elems.$linksToMobile.show();
                } else {
                    $("body").find(".capa").css({
                        "height": $(window).height() + "px"
                    });
                    $("body").find(".contContraCapa").css("display","table-cell");
                    $("body").find(".contraCapa").css({
                        "height": $(window).height()- 177 + "px"
                    });

                    self.elems.$mainNavBar.removeClass('screenMobile');
                    self.elems.$mainNavBar.addClass('screenDesktop');

                    // self.elems.$mainDropdown.show();
                    // self.elems.$linksToMobile.hide();
                }
            });

            self.elems.$btnNavbarMobile.on({
                click: function(e) {
                    self.elems.$mainDropdown.hide();
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