require.config({

	urlArgs: "bust=" + (new Date()).getTime(),

	shim: {
		mustache: {
			exports: 'Mustache'
		},

		jquery: {
			exports: '$'
		},

		modernizr: {
			exports: 'Modernizr'
		},

		swipe: {
			exports: 'Swipe'
		},

		tooltipster: {
			deps: [
				'jquery'
			]
		},

		videojs: {
			exports: 'videojs'
		},

		videojsyoutube: {
			exports: 'videojs.Youtube',
			deps: [
				'videojs'
			]
		},

		videojsvimeo: {
			exports: 'videojs.Vimeo',
			deps: [
				'videojs'
			]
		},

		zoom: {
			deps: [
				'jquery'
			]
		}

	},

	paths: {
		player: '../../../_base/js/desktop/player',
		jquery: '../../../../../vendor/components/jquery/dist/jquery.min',
		mustache: '../../../../../vendor/components/mustache/mustache',
		modernizr: '../../../../../vendor/components/modernizr/modernizr',
		json: '../../../../../vendor/components/require-plugins/src/json',
		text: '../../../../../vendor/components/requirejs-text/text',
		namespace: '../../../../../vendor/components/namespace/namespace',
		swipe: '../../../../../vendor/components/swipe/swipe',
		tooltipster: '../../../../../vendor/components/tooltipster/js/jquery.tooltipster.min',
		videojs: '../../../../../vendor/components/video.js/dist/video-js/video',
		videojsyoutube: '../../../../../vendor/components/videojs-youtube/dist/vjs.youtube',
		videojsvimeo: '../../../../../vendor/components/videojs-vimeo/vjs.vimeo',
		zoom: '../../../../../vendor/components/jquery-zoom/jquery.zoom.min'

	},

	config: {
		namespace: {
			"overrides": {
				"config": {
					"baseURL": "../../config",
					"paths": [
						"json!general.json",
						"json!selectors.json",
					]
				},

				"main": {
					"baseURL": "main",
					"paths": [
						"player",
						"text!template.html"
					]
				}
			},

			"functions": {
				"baseURL": "../../../../../player/_base/js/functions",
				"paths": [
					"ajax",
					"compileTemplate",
					"compile",
					"findSlideByVar",
					"buildContent",
					"animateEl",
					"generalInit",
					"delegateEvents",
					"animate"
				]
			},

			"polyfill": {
				"baseURL": "../../../../../player/_base/js/polyfill",
				"paths": [
					"isArray",
				]
			},

			"helpers": {
				"baseURL": "../../../../../player/_base/js/helpers",
				"paths": [
					"namespace",
					"decode",
					"parser",
					"isJSON",
					"isLocked",
					"resourceExtend",
					"getQueryVariable",
					"base64Decode",
					"serializeJSON",
					"csslizeJSON",
					"removeClass",
					"sortByProperty",
					"rgbaToHex",
					"arrayCompare",
					"findRecbyData"
				]
			},

			"components": {
				"baseURL": "../../../../../player/_base/js/components",
				"paths": [
					"recSequentialEntry",
					"modal",
					"swipe",
					"tooltipster"
				]
			},

			"scorm": {
				"baseURL": "../../../../../player/_base/js/scorm",
				"paths": [
					"initScorm",
					"getScormValue",
					"setScormValue",
					"readScormVars",
					"saveScormData",
					"endScorm"
				]
			},

			"scormWrapper": {
				"baseURL": "../../../../../player/_base/js/scorm/wrapper",
				"paths": [
					"options",
					"doLMSInitialize",
					"doLMSFinish",
					"doLMSGetValue",
					"doLMSSetValue",
					"doLMSCommit",
					"doLMSGetLastError",
					"doLMSGetDiagnostic",
					"LMSIsInitialized",
					"ErrorHandler",
					"getAPIHandle",
					"findAPI",
					"getAPI",
					"computeTime",
					"convertTotalSeconds"
				]
			},

			"config": {
				"baseURL": "../../../_base/config",
				"paths": [
					"json!general.json",
					"json!selectors.json",
				]
			},

			"main": {
				"baseURL": "../../../_base/js/desktop/main",
				"paths": [
					"text!template.html",
					"player"
				]
			},

			"resources": {
				"caixaDestaque": {
					"baseURL": "../../../_base/js/desktop/resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"imagem": {
					"baseURL": "../../../_base/js/desktop/resources/imagem",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"botaoPP": {
					"baseURL": "../../../_base/js/desktop/resources/botaoPP",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"player"
					]
				},

				"video": {
					"baseURL": "../../../_base/js/desktop/resources/video",
					"paths": [
						"text!template.html",
						"player",
						"generalInit"
					]
				},

				"texto": {
					"baseURL": "../../../_base/js/desktop/resources/texto",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"atividade": {
					"baseURL": "../../../_base/js/desktop/resources/atividade",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"player"
					]
				},

				"audio": {
					"baseURL": "../../../_base/js/desktop/resources/audio",
					"paths": [
						"text!template.html",
						"player",
						"generalInit"
					]
				},

				"multimedia": {
					"baseURL": "../../../_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"atividadeGaveta": {
					"baseURL": "../../../_base/js/desktop/resources/atividadeGaveta",
					"paths": [
						"text!template.html",
						"player"
					]
				}
			},

			"slides": {
				"default": {
					"baseURL": "../../../_base/js/desktop/slides/default",
					"paths": [
						"text!template.html"
					]
				},

				"slideCapa": {
					"baseURL": "../../../_base/js/desktop/slides/slideCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideFinal": {
					"baseURL": "../../../_base/js/desktop/slides/slideFinal",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../_base/js/desktop/slides/slideSubCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAnimacao": {
					"baseURL": "../../../_base/js/desktop/slides/slideAnimacao",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAtividade": {
					"baseURL": "../../../_base/js/desktop/slides/slideAtividade",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAudio": {
					"baseURL": "../../../_base/js/desktop/slides/slideAudio",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideVideo": {
					"baseURL": "../../../_base/js/desktop/slides/slideVideo",
					"paths": [
						"text!template.html",
						"player"
					]
				}
			}
		}
	}
});

require([
	"player"
	], function(Player) {
	'use strict';

	/*jQuery(window).load(function() {
		alert("page finished loading now.");
	});*/
});