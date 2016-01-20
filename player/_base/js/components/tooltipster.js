define([
	"jquery",
	"tooltipster"
	], function($) {

	var tooltipster = function() {


		$('.mbTooltip').tooltipster({
			functionReady: function(){
        		$("<div class='btnFecharToolTip'>&#10006;</div>").appendTo(".tooltipster-content");
        		$(".tooltipster-default").addClass("toolTipNormal");
    		},
    		trigger: 'click',
    		arrowColor:'#2b95dd'
		});

		$('.mbTooltipGlossario').tooltipster({
			functionReady: function(){
        		$("<div class='btnFecharToolTipGlossario'>&#10006;</div>").appendTo(".tooltipster-content");
        		$("<div class='topGlossario'><h3 class='palavraDestacada'></h3></div>").appendTo(".tooltipster-content");
        		$(".tooltipster-default").addClass("toolTipglossario");
        		$(".palavraDestacada").html($('.mbTooltipGlossario').html());

    		},
    		trigger: 'click',
    		arrowColor: '#f59e00',
    		position:"bottom"
		});
		
	}

	return tooltipster;
});