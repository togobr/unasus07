define([
	"jquery",
	"namespace!overrides",
	"namespace!functions",
	"namespace!components",
	"namespace!scorm",
	"namespace!scormWrapper",
	"namespace!helpers",
	"namespace!main",
	"namespace!slides",
	"namespace!resources",
	"namespace!config",
	"namespace!polyfill",
	"mustache",
	"tooltipster"

], function($, Overrides, Functions, Components, Scorm, ScormWrapper, Helpers, Main, Slides, Resources, Config, Polly, Mustache, Tooltipster) {
	'use strict';

	// console.log(Resources);
	// window.Mustache = Mustache;

	Helpers.namespace('Player', [
		'Base',
		'Overrides',
		'Functions',
		'Components',
		'Scorm',
		'Helpers',
		'VisualPattern',
		'Config',
		'Elements',
		'Tree'
	]);

	var namespaces = {
		functions: Functions,
		components: Components,
		scorm: Scorm,
		scormWrapper: ScormWrapper,
		helpers: Helpers,
		main: Main,
		slides: Slides,
		resources: Resources,
		config: Config,
		polyfill: Polly
	};

	Player.Base = $.extend(true, {}, namespaces);
	Player.Overrides = Overrides;
	$.extend(true, namespaces, Overrides);
	Player.Functions = Functions;
	Player.Components = Components;
	Player.Scorm = Scorm;
	Player.Scorm.Wrapper = ScormWrapper;
	Player.Helpers = Helpers;
	Player.VisualPattern = {
		Main: Main,
		Slides: Slides,
		Resources: Resources
	};
	Player.Config = Config;

	// console.log(Player);

	var jsonPath = Player.Helpers.getQueryVariable('aula'),
		ajaxJson = Player.Functions.ajax({
			type: "GET",
			url: jsonPath,
			dataType: "json"
		});

	$.when(ajaxJson)
		.done(function(data, response) {
			Player.json = data;
			Player.Functions.buildContent(data);

			Player.Scorm.initScorm();

			Player.Elements.$content.trigger('contentReady');
			(window.callPhantom) ? window.callPhantom('takeShot') : null;
		})
		.fail(function(data, response) {
			console.log(data);
			$('body').append('<h1>Aula não encontrada</h1><h2>' + response + ' ' + data.status + ' ' + data.statusText + '</h2>');
		});

	console.log(jsonPath);

});