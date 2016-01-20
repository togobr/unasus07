define([
	'jquery'
], function($) {

	var mainplayer = function() {
		var self = this,
			right,
			tSliderInd;

		function getElements(){
			var $el = self.$el;

			return{
				$el : $el,
				$btnIndice : $el.find('.botaoIndice'),
				$btnAjuda : $el.find('.botaoAjuda'),
				$valorSlideAtual: $el.find('.valorSlideAtual')
			}
		}

		this.init = function() {
			$.extend(this, new Player.Base.main.player(this));

			$.extend(this.elems, getElements());

			console.log('[main]player [method]init [var]self: ', self);
			self.startIndice();

			Player.Elements.$swipe.on({
				slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
					self.updateSlideNumber();

					if (endIndex == 0) {
						self.elems.$bottom.hide();
					} else {
						self.elems.$bottom.show();
					}
				}
			});

			Player.Elements.$content.on({
				contentReady: function(e) {
					self.updateIndice();
				}
			});

			self.elems.$btIndice.on({
				click: function(e) {
					if(self.elems.$btnIndice.hasClass("desativado")) return;

					self.elems.$menuIndice.toggle();
					$(this).toggleClass('active');
					self.elems.$btnAjuda.toggleClass('desativado');

					if (right == tSliderInd) {
						self.elems.$btAvancarIndice.hide();
					}
					if (right == 1) {
						self.elems.$btVoltarIndice.hide();
					}
				}
			});

			self.elems.$btAvancar.on({
				click: function(e) {
					self.updateIndice();
				}
			});

			self.elems.$btVoltar.on({
				click: function(e) {
					self.updateIndice();
				}
			});

			self.elems.$btAvancarIndice.on({
				click: function(e) {
					console.log(tSliderInd);
					$("#indice").animate({
						right: "+=653px"
					}, 500);

					right += 1;
					if (tSliderInd == right) {
						self.elems.$btAvancarIndice.hide();
					} else if (right < (tSliderInd)) {
						self.elems.$btAvancarIndice.show();

					}
					self.elems.$btVoltarIndice.show();
				}
			});

			self.elems.$btVoltarIndice.on({
				click: function(e) {
					$("#indice").animate({
						right: "-=653px"
					}, 500);

					right -= 1;

					if (right == 1) {
						self.elems.$btVoltarIndice.hide();
					}
					self.elems.$btAvancarIndice.show();
				}
			});
		}

		// ************************* METHODS ************************* 

		this.updateSlideNumber = function() {
			var player = this,
				slide = self.getCurrentSlide(),
				perc = self.getSlidePercent(),
				total_slides = self.getTotalSlides();

			self.elems.$barraProgresso
				.find('.valorBarraProgresso')
				.animate({
					'max-width': perc + '%'
				})
				.end()
				.find('.frontText, .backText')
				.text('Slide ' + slide + ' / ' + total_slides);
		}

		this.startIndice = function() {
			var player = this,
				slidesArray = player.data.slides,
				slidesTotal = slidesArray.length;

			right = 1;
			tSliderInd = (slidesTotal / 22)

			if (!(tSliderInd % 1 == 0)) {
				tSliderInd = parseInt(tSliderInd);
				tSliderInd += 1;
				if (tSliderInd < 1) {
					tSliderInd += 1;
				}
			}

			self.elems.$itensLinst.each(function(index, el) {
				var $el = $(el);
				$el.on({
					click: function(e) {
						var atual = this;

						if (!$(atual).hasClass('indiceAtual')) {
							Player.Elements.swipe.slide(index);
							self.elems.$itensLinst.removeClass('indiceAtual');
							$(this).addClass('indiceVisitado');
							$(this).addClass('indiceAtual');
						}
						self.elems.$menuIndice.toggle();
						self.elems.$btnIndice.toggleClass('active');
						self.elems.$btnAjuda.toggleClass('desativado');
					}
				});
			});
		}


		this.updateIndice = function() {
			console.log('[main]player [method]updateIndice: ');
			var slide = self.getCurrentSlide();

			self.elems.$itensLinst
				.filter('.indiceAtual')
				.removeClass('indiceAtual indiceDesativado')
				.end()
				.filter(function(i) {
					return i < slide;
				})
				.addClass('indiceVisitado')
				.removeClass('indiceDesativado')
				.end()
				.eq(slide - 1)
				.addClass('indiceAtual')
		}


	}

	return mainplayer;
});