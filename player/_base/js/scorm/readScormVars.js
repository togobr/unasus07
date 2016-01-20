define([], function() {
	var readScormVars = function() {
		Player.Scorm.vars = Player.Scorm.vars ? Player.Scorm.vars : {};
		Player.Scorm.info = Player.Scorm.info ? Player.Scorm.info : {};
		Player.Scorm.info.startTime = new Date().getTime();

		var scormVars = Player.Config.general.scorm.vars,
			getValue = Player.Scorm.Wrapper.doLMSGetValue;

		console.log('scormVars---------', scormVars);
		for (var i = scormVars.length - 1; i >= 0; i--) {
			if (scormVars[i]) {
				var value = getValue(scormVars[i]);
				if (scormVars[i] === "cmi.suspend_data") {
					if (!Player.Helpers.isJSON(value) && value === "") {
						Player.Scorm.vars[scormVars[i]] = {};
					} else {
						Player.Scorm.vars[scormVars[i]] = jQuery.parseJSON(value);
					}
				} else if (scormVars[i] === "cmi.core.lesson_location" && value > (Player.Tree.slides.length - 1)) {
					Player.Scorm.vars[scormVars[i]] = Player.Tree.slides.length - 1;

				} else {
					Player.Scorm.vars[scormVars[i]] = value;
				}

			}
		};
	}

	return readScormVars;
});
