
require.config({
	paths: {
		jquery: '../../../../../vendor/components/jquery/dist/jquery.min',
		image: '../../../../../vendor/components/require-plugins/src/image',
		json: '../../../../../vendor/components/require-plugins/src/json',
		text: '../../../../../vendor/components/requirejs-text/text',
		namespace: '../../../../../vendor/components/namespace/namespace',
		videojs: '../../../../../vendor/components/video.js/dist/video-js/video',
		videojsyoutube: '../../../../../vendor/components/videojs-youtube/dist/vjs.youtube',
		videojsvimeo: '../../../../../vendor/components/videojs-vimeo/vjs.vimeo'
	},

	config: {
		namespace: {
			"overrides": {
				
			},

			"config": {
				"slides": {
					"baseURL": "../../../../_baseClient/_base/config/slides",
					"paths": [
						"json!config.json"
					]
				},

				"resources": {
					"baseURL": "../../../../_baseClient/_base/config/resources",
					"paths": [
						"json!config.json"
					]
				}
			},

			"slides": {
				"slideCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideCapa",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideFinal": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideFinal",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideSubCapa",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideAnimacao": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAnimacao",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor",
						"text!edition.html"
					]
				},

				"slideVideo": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideVideo",
					"paths": [
						"text!template.html",
						"json!config.json"
					]
				},

				"slideAudio": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAudio",
					"paths": [
						"text!template.html",
						"json!config.json"
					]
				},

				"slideAtividade": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAtividade",
					"paths": [
						"text!template.html",
						"json!config.json"
					]
				}
			},

			"resources": {
				"audio": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/audio",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"multimedia": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"caixaDestaque": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"imagem": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/imagem",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"video": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/video",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"texto": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/texto",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"botaoPP": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/botaoPP",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"atividade": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/atividade",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				}

			}
		}
	}
});

require([
	"jquery",
	"namespace!overrides",
	"namespace!config",
	"namespace!slides",
	"namespace!resources"
], function($, Overrides, Config, Slides, Resources) {

	var namespaces = {
			config: Config,
			slides: Slides,
			resources: Resources
		},
		Player = {
			"Base": $.extend(true, {}, namespaces),
			"Overrides": Overrides,
			"_base": Config,
			"Slides": Slides,
			"Resources": Resources
		};

	$.extend(true, namespaces, Overrides);

	window.Player = Player;
});