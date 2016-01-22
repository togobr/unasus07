define([
    'jquery',
    'bootstrap'
], function($) {

    var mainplayer = function() {
        var self = this,
            right,
            tSliderInd;

        function getElements(){
            var $el = self.$el;

            return{
                $el : $el
            }
        }

        this.init = function() {
            $.extend(this, new Player.Base.main.player(this));

            $.extend(this.elems, getElements());


            Player.Elements.$swipe.on({
                slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
                }
            });

            Player.Elements.$content.on({
                contentReady: function(e) {
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