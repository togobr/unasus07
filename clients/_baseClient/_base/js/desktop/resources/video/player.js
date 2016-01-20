/*
	Não importar jquery pois compilação entrega para ele. Explicar melhor na hora de documentar
*/

define([], function() {
	var video = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
			console.log('init do recurso: ', this);
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var video = this;

			Player.Elements.$content.on({
				contentReady: function() {
					video.bindVideoEvents();
				}
			});
		},

		this.out = function() {
			var video = this,
				player = video.player;

			if (!player.played) return;

			this.player = this.renderVideojs();
			video.bindVideoEvents();
		},

		this.bindVideoEvents = function() {
			var video = this,
				player = video.player;

			console.log('contentReady rec player: ', player);

			player

			.one('play', function() {
				player.played = true;
			})

			.on("play", function() {
				console.log('video started to play');
				if (video.data.lock) {
					//video.lockPlayer(true);
				}
			})

			.on("error", function() {
				console.log('video error');
				if (video.data.lock) {
					video.lockPlayer(false);
				}
			})

			.on("ended", function() {
				console.log('video ended');
				if (video.data.lock) {
					video.lockPlayer(false);
				}
			})

			.on("fullscreenchange", function() {
				console.log('foo full screen change');
				video.$el.css('-webkit-animation', 'none');
			});

			if (video.data.lock && !player._src) {
				video.lockPlayer(false);
			}
		}
	}

	return video;
});