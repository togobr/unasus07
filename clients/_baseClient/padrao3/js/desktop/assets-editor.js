require.config({
	paths: {
		jquery: '../../../../../vendor/components/jquery/dist/jquery.min',
		jqueryChanges: '../../../../../vendor/changes/jquery/jqueryChanges',
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
					"baseURL": "../../config/slides",
					"paths": [
						"json!config.json"
					]
				},

				"stage": {
					"baseURL": "../../../_base/config/stage",
					"paths": [
						"json!main.json",
						"json!modal.json"
					]
				}
			},

			"slides": {
				"slideCapa": {
					"baseURL": "slides/slideCapa",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideCapa2": {
					"baseURL": "slides/slideCapa2",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideCapa3": {
					"baseURL": "slides/slideCapa3",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideCapa4": {
					"baseURL": "slides/slideCapa4",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideFinal": {
					"baseURL": "slides/slideFinal",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"template1": {
					"baseURL": "slides/template1",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"template2": {
					"baseURL": "slides/template2",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},


				"template3": {
					"baseURL": "slides/template3",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				}
			},

			"resources": {
				"audio": {
					"baseURL": "../../../_base/js/desktop/resources/audio",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"multimedia": {
					"baseURL": "../../../_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"caixaDestaque": {
					"baseURL": "resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"imagem": {
					"baseURL": "../../../_base/js/desktop/resources/imagem",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"video": {
					"baseURL": "../../../_base/js/desktop/resources/video",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"texto": {
					"baseURL": "../../../_base/js/desktop/resources/texto",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"botaoPP": {
					"baseURL": "../../../_base/js/desktop/resources/botaoPP",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"atividade": {
					"baseURL": "../../../_base/js/desktop/resources/atividade",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				}, 

				"atividadeGaveta": {
					"baseURL": "../../../_base/js/desktop/resources/atividadeGaveta",
					"paths": [
						"text!template.html",
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
	"jqueryChanges",
	"namespace!overrides",
	"namespace!config",
	"namespace!slides",
	"namespace!resources"
], function($, jqueryChanges, Overrides, Config, Slides, Resources) {

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

	/*
	Não é a solução mais bonita mais eventos não funcionavam e escutar o carregamento deste
	script no editor com "onLoad" só apontava que o arquivo foi devidamente carregado e não
	que tinah sido executado entregando windo.Player
	*/
	(window.loadedAssets) ? window.loadedAssets() : null;
});