define(['jquery'], function($) {

	var botaoRD = function(template, data) {
		var me = this;

		this.init = function() {
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var recurso = this;
				
			
			recurso.$el
				.on({
					click: function(e) {
						var current_slide = Player.Tree.main.getCurrentSlide();

						if(!recurso.data.redirectTo) return;
						var slide = me.findSlidebyID(recurso.data.redirectTo);
						
						if(!(current_slide == (slide[0].data.order + 1))){
							Player.Elements.swipe.slide(slide[0].data.order);
							Player.Tree.main.updateIndice();
						}
					}
				});
		}

		this.findSlidebyID = function (id_slide) {
			var me = this;

			return $.grep(Player.Tree.slides, function(slide) {
				return slide.data._id == id_slide;
	        });
	    }

	    //teste para ie
	    this.msieversion = function () {
			var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0)      // If Internet Explorer, return version number
                alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            else                 // If another browser, return 0
                alert('otherbrowser');

            return false
	    }
	}

	return botaoRD;
});