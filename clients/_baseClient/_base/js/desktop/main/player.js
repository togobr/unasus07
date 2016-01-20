define([
	'jquery'
], function($) {

	var baseplayer = function(player) {

		var self = this,
			current_slide_index = 0;

		function getElements() {
			var $el = player.$el;

		return {
				$el: $el,
				$btAvancar: $el.find('.botaoAvancar'),
				$btVoltar: $el.find('.botaoVoltar'),
				$btAjuda: $el.find('.botaoAjuda'),
				$telaAjuda: $el.find('.ajuda'),
				$btAvancarIndice: $el.find('.avancarIndice'),
				$btVoltarIndice: $el.find('.voltarIndice'),
				$barraProgresso: $el.find('.barraProgresso'),
				$bottom: $el.find('.bottom'),
				$btIndice: $el.find('.botaoIcon-indice').parent(),
				$menuIndice: $el.find('.menuIndice'),
				$itensLinst: $el.find('#indice li')
			};
		}

		this.init = function() {

			self.elems = getElements();

			Player.Elements.$content = self.elems.$el.find(Player.Config.selectors.content);
			Player.Elements.$swipe = self.elems.$el.find(Player.Config.selectors.swipe);
			Player.Elements.generalModal = new Player.Components.modal(Player.Config.general.modal, $('body'));

			(Player.Components.recSequentialEntry) ? Player.Components.recSequentialEntry.init() : null;

			Player.Elements.$swipe.on({
				slideInit: function(e, startIndex, endIndex, domInit, domEnd) {

					// check for 'out' events on every resource within the last slide
					console.log('slide #%d was changed. Triggering resource\'s "out" events for that slider...', startIndex);
					$.each($.makeArray(Player.Tree.resources[startIndex]), function(i, resource) {
						if (!$.isFunction(resource.out)) return;
						resource.out(startIndex);
					});

					// check for 'in' events on every resource within the actual slide
					console.log('slide #%d started. Triggering resource\'s "in" events for this slider...', endIndex);
					$.each($.makeArray(Player.Tree.resources[endIndex]), function(i, resource) {
						if (!$.isFunction(resource.in)) return;
						resource.in(endIndex);
					});

					// slides 'in' and 'out'
					// check for 'out' events of the last slide
					if ($.isFunction(Player.Tree.slides[startIndex].out)) {
						Player.Tree.slides[startIndex].out();
					}

					// check for 'in' event of the current slide
					if ($.isFunction(Player.Tree.slides[endIndex].in)) {
						Player.Tree.slides[endIndex].in();
					}

				},

				slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
					self.updateScorm(endIndex);
					current_slide_index = parseInt(endIndex);
					self.updateSlideButtons();
				},

				transitionEnd: function() {
					self.updateSlideButtons();
				}
			});

			Player.Elements.$content.on({
				contentReady: function(e) {
					Player.Components.swipe(Player.Elements.$swipe, Player.Config.general.swipe);
					Player.Components.tooltipster();

					current_slide_index = parseInt(Player.Scorm.getScormValue('cmi.core.lesson_location')) || 0;

					self.updateScorm(current_slide_index);
					self.updateSlideButtons();

					// usar timeout porque há recursos que executam metodos de inicialização no evento `contentReady`
					// e os métodos `in` devem ser executados somente após o recurso ter sido completamente inicializado
					setTimeout(function() {
						// check for 'in' event of the current slide
						if ($.isFunction(Player.Tree.slides[current_slide_index].in)) {
							Player.Tree.slides[current_slide_index].in();
						}

						$.each($.makeArray(Player.Tree.resources[current_slide_index]), function(i, resource) {
							if (!$.isFunction(resource.in)) return;
							resource.in(current_slide_index);
						});
					});
				}
			});


			// ************************* EVENTOS *************************

			self.elems.$btAvancar.on({
				click: function(e) {
					if (Player.Helpers.isLocked()) {
						self.playerLocked();
						return;
					}

					Player.Elements.swipe.next();
				}
			});

			self.elems.$btVoltar.on({
				click: function(e) {
					Player.Elements.swipe.prev();
				}
			});

			self.elems.$btAjuda.on({
				click: function(e) {
					if(self.elems.$btAjuda.hasClass("desativado")) return;

					self.elems.$telaAjuda.toggle();
					$(this).toggleClass('active');
					self.elems.$btIndice.toggleClass('desativado');
				}
			});

		}

		// ************************* METHODS ************************* 

		this.updateSlideButtons = function() {
			var current_slide = this.getCurrentSlide(),
				total_slides = this.getTotalSlides(),
				player_locked = Player.Helpers.isLocked();

			self.elems.$btVoltar.toggleClass('hidden', current_slide <= 1);

			if (player_locked || current_slide >= total_slides) {
				this.disableBtAvancar();
			} else {
				this.enableBtAvancar();
			}
		}

		this.disableBtAvancar = function() {
			self.elems.$btAvancar
				.addClass('desativado');
		}

		this.enableBtAvancar = function() {
			if (this.getCurrentSlide() >= this.getTotalSlides()) return; // end of slide

			self.elems.$btAvancar
				.removeClass('desativado');
		}

		this.getTotalSlides = function() {
			return Player.json.slides.length;
		}

		this.getCurrentSlide = function() {
			return current_slide_index + 1;
		}

		this.getSlidePercent = function() {
			var slide = this.getCurrentSlide(),
				total_slides = this.getTotalSlides();

			return (slide * 100) / total_slides;
		}

		this.updateScorm = function(slide) {
			console.log('updateScorm', slide);

			var scoAtividade = player.data.atividade,
				scormLocation = Player.Scorm.getScormValue('cmi.core.lesson_location'),
				scormStatus = Player.Scorm.getScormValue('cmi.core.lesson_status'),
				totalSlides = Player.json.slides.length,
				setValue = Player.Scorm.setScormValue,
				 $atividadesChk = $(Player.Elements.$content[0]).find(".checkbox"),
				 contAtvs = 0;


				 $atividadesChk.each(function(index){

				 	if(Player.Scorm.getScormValue('cmi.suspend_data',$(this).attr("id")) != undefined){
				 		$(this).addClass("atvRespondida");
				 	}
				 	if(!$(this).hasClass("atvRespondida")){
				 		contAtvs++;
				 	}
				 });

	

			if (!scormLocation || scormLocation < slide) {
				setValue('cmi.core.lesson_location', slide);
			}

			if ((Number(slide) === (totalSlides - 1) || scormStatus === 'completed') && contAtvs == 0) {
				setValue('cmi.core.lesson_status', 'completed');


				if ((Player.Tree.slides[totalSlides - 1].el.className) == "slideFinal") {
					Player.Tree.slides[totalSlides - 1].feedBackFinal();
				}
			} else {
				setValue('cmi.core.lesson_status', 'incomplete');
				if ((Player.Tree.slides[totalSlides - 1].el.className) == "slideFinal") {
					Player.Tree.slides[totalSlides - 1].feedBackFinal();
				}
			}
		}

		this.playerLocked = function() {
			console.log('a resource disabled the "next" button');
			// do something
		}

		this.init();
	}

	return baseplayer;
});