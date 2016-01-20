define([], function() {

	var doLMSSetValue = function(name, value) {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return;
		} else {
			var result = api.LMSSetValue(name, value);
			if (result.toString() != "true") {
				var err = Player.Scorm.Wrapper.ErrorHandler();
			}
		}
		return;
	}

	return doLMSSetValue;
});
