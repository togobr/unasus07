define([
	"jquery",
], function($) {
	var modal = function(params, $el) {
		var me = this,
			$modal,
			$overlay,
			defaults = {
				color: "0, 0, 0",
				opacity: "0.6",
				transition: "fade",
				time: 500
			};

		me.params = $.extend({}, me.defaults, params);

		var modal = document.createElement('div'),
			$modal = $(modal);

		modal.id = "modal";
		me.$modal = $modal;
		me.active = "init";

		var overlay = document.createElement('div');
		overlay.id = "modalOverlay";
		if (!Modernizr.rgba) {
			var corHex = Player.Helpers.rgbaToHex(me.params.color, me.params.opacity);
			overlay.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + corHex + ",endColorstr=" + corHex + ");";
		} else {
			overlay.style.background = 'rgba(' + me.params.color + ', ' + me.params.opacity + ')';
		}
		me.$overlay = $(overlay);

		me.$overlay.on({
			click: function(e) {
				me.hide();
			}
		});

		Player.Functions.animateEl({
			"action": "hide",
			"element": me.$overlay
		});

		me.$modal.append(me.$overlay);
		$el.append(me.$modal);

		Player.Elements.$swipe.on({
			slideInit: function(e, stratIndex, endIndex, domInit, domEnd) {
				me.hide();
			}
		});

		Player.Elements.$content.on({
			contentReady: function(e) {
				me.hide();
			}
		});

		this.add = function(obj, params, config) {

				var me = this,
					data = obj.data,
					id = config.id ? config.id : obj.data.id,
					dataId = config.dataId,
					modalData;

				if (config.id && !dataId) {
					modalData = data[id];
				} else if (dataId) {
					modalData = data[dataId];
				} else if (data._modal_id.modal) {
					// talvez fazer com que o servidor retorne a propriedade
					// `resources` dentro de `modal`
					modalData = data._modal_id.modal;
					modalData.resources = data._modal_id.resources;
				} else if (data._modal_id) {
					modalData = data._modal_id;
				} else {
					modalData = data.modal;
				}

				var contentString = Player.Functions.compileTemplate(obj.modal, modalData),
					content = Player.Helpers.parser(contentString),
					$content = $(content),
					resources = modalData.resources;

				content.id = config.id ? config.id + "Content" : id + "Content";

				if (resources) {
					for (var i = 0, limI = resources.length; i < limI; i += 1) {
						resources[i].slide = data.slide;
						var resourcePattern = Player.VisualPattern.Resources[resources[i].template],
							resource = Player.Functions.generalInit(resourcePattern, resources[i], i);
						$content.find(config.content).append(resource.$el);
					}
				}

				Player.Functions.delegateEvents(me, $content, config.actions);

				me.$modal.prepend($content);
				$content.css({
					top: (me.$overlay.height() - $content.height()) / 2,
					left: (me.$overlay.width() - $content.width()) / 2,
				});

				Player.Functions.animateEl({
					"action": "hide",
					"element": $content
				});

				return $content;
			},

			this.show = function(id, scope) {
				var me = this,
					active = "#" + id + "Content",
					$element = me.$modal.find(active),
					doc = document.documentElement,
					//left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
					//top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
					w = $(document).width(),
					//h = $(document).height(),
					//wvp = Math.max(doc.clientWidth, window.innerWidth || 0),
					hvp = Math.max(doc.clientHeight, window.innerHeight || 0),
					ew = $element.width(),
					eh = $element.height();

				//console.log('foo', left, top, w, h, hvp, wvp, eh, ew);

				Player.Functions.animateEl({
					"action": "in",
					"element": [
						$element,
						me.$modal,
						me.$overlay
					],
					"transition": me.params.transition,
					"time": me.params.time
				});

				if ($element.hasClass('responsive')) {
					$element.removeAttr('style');
					return;
				}

				$element.css({
					top: Math.max(0, (hvp - eh) / 2) + 'px',
					left: ((w - ew) / 2) + 'px'
				});
			},

			this.hide = function(element) {
				var me = this,
					visible = me.$modal.find('> :not(.visuallyhidden):not(#modalOverlay)'),
					element = element || visible,
					yet_visible = visible.not(element);

				Player.Functions.animateEl({
					"action": "hide",
					"element": element
				});

				if (yet_visible.length) return;

				// hide modal's parent
				Player.Functions.animateEl({
					"action": "out",
					"element": me.$modal,
					"transition": me.params.transition,
					"time": me.params.time
				});

			}
	}

	return modal;
});