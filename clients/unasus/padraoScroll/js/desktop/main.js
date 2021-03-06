require.config({

	urlArgs: "bust=" + (new Date()).getTime(),

	shim: {
		mustache: {
			exports: 'Mustache'
		},

		jquery: {
			exports: '$'
		},

		modal: {
			exports: "Modal"
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

		portChecker:{
			deps:[
				"jquery"
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
		jqueryUiAccordion:{
			deps:[
				"jquery",
				"jqueryUiCore",
				"jqueryUiWidget"
			]
		},
		jqueryUiTabs:{
			deps:[
				"jquery",
				"jqueryUiCore",
				"jqueryUiWidget"
			]
		},

		checklist:{
			deps:[
				"jquery"

			]
		},
		knockout:{
			deps:[
				"jquery"
			]
		},
		responsiveSlidesJs:{
			deps:[
				"jquery"
			]
		},
		bootstrap:{
			deps:[
				"jquery"
			]
		},
		stellar:{
			deps:[
				"jquery"
			]
		}
	},

	paths: {
		player: '../../../../_baseClient/_base/js/desktop/player',
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
		jqueryUiAccordion:'../../../../../vendor/components/jquery.ui/ui/jquery.ui.accordion',
		responsiveSlidesJs:'../../../../../vendor/components/responsiveSlidesJs/responsiveslides',
		jqueryUiTabs:'../../../../../vendor/components/jquery.ui/ui/jquery.ui.tabs',
        jqueryUiCore:"../../../../../vendor/components/jquery.ui/ui/jquery.ui.core",
        jqueryUiWidget:"../../../../../vendor/components/jquery.ui/ui/jquery.ui.widget",
        portChecker:"../../../../../vendor/components/viewPortChecker/src/jquery.viewportchecker",
        knockout:"../../../../../vendor/components/knockout/dist/knockout",
        checklist: "../../../../../vendor/components/knockout/dist/checklist",
        bootstrap:'../../../../../vendor/components/bootstrap/dist/js/bootstrap.min',
        stellar: '../../../../../vendor/components/jquery.stellar/jquery.stellar.min',
        ScrollMagic: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/ScrollMagic',
        addIndicators: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
        gsap: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
        TweenMax: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/plugins/TweenMax',
        TimelineMax: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/plugins/TimelineMax',
        TweenLite: '../../../../../vendor/components/scrollmagic/scrollmagic/uncompressed/plugins/TweenLite'
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
				},

				"resources": {
					"video":{
						"baseURL": "./resources/video",
						"paths": [
							"text!template.html"
						]
					}
				},

				"slides": {
					"slideScroll": {
						"baseURL": "slides/slideScroll",
						"paths": [							
							"text!template.html"
						]
					}					
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
					"modal",
					"swipe",
					"tooltipster",
					"viewPortChecker"
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
				"baseURL": "../../../../_baseClient/_base/config",
				"paths": [
					"json!general.json",
					"json!selectors.json",
				]
			},

			"main": {
				"baseURL": "../../../../_baseClient/_base/js/desktop/main",
				"paths": [
					"text!template.html",
					"player"
				]
			},

			"resources": {

				"video":{
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/video",
						"paths": [
							"text!template.html",
							"player",
							"generalInit"
						]
				},

				"atividade":{
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/atividade",
						"paths": [
							"text!template.html",
							"player"
							
						]
				},
				
				"audio":{
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/audio",
						"paths": [
							"text!template.html",
							"player",
							"generalInit"
						]
				},

				"multimedia": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"imagem": {
					"baseURL": "./resources/imagem",
					"paths": [
						"text!template.html",
						"player"
					]
				},
				
				"caixaDestaque": {
					"baseURL": "./resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"player"
					]
				},	
				
				"botaoModal": {
					"baseURL": "./resources/botaoModal",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"player"
					]
				},


				"sanfona": {
					"baseURL": "./resources/sanfona",
					"paths":[
						"text!template.html",
						"player"

					]
				},

				"dropdown": {
					"baseURL": "./resources/dropdown",
					"paths": [
						"text!template.html",
						"player"	
					]
				},

				"gavetaVertical": {
					"baseURL": "./resources/gavetaVertical",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"gavetaHorizontal": {
					"baseURL": "./resources/gavetaHorizontal",
					"paths": [
						"text!template.html",
						"player"	
					]
				},


				"sliderResponsivo": {
					"baseURL": "./resources/sliderResponsivo",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"texto": {
					"baseURL": "./resources/texto",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"revelar": {
					"baseURL": "./resources/revelar",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"backgroundScroll": {
					"baseURL": "./resources/backgroundScroll",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"botaoDownload": {
					"baseURL": "./resources/botaoDownload",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"botaoPular": {
					"baseURL": "./resources/botaoPular",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"capa": {
					"baseURL": "./resources/capa",
					"paths": [
						"text!template.html"
					]
				},

				"contraCapa": {
					"baseURL": "./resources/contraCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"parallaxBlock": {
					"baseURL": "./resources/parallaxBlock",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"magicSlider": {
					"baseURL": "./resources/magicSlider",
					"paths": [
						"text!template.html",
						"player"
					]
				}
			},

			"slides": {
				"default": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/default",
					"paths": [
						"text!template.html"
					]
				},

				"slideCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideFinal": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideFinal",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideSubCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAnimacao": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAnimacao",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAtividade": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAtividade",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideAudio": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideAudio",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideVideo": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideVideo",
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