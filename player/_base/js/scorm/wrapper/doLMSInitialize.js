define([], function() {
	var doLMSInitialize = function() {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return "false";
		}
		var result = api.LMSInitialize("");

		if (result.toString() != "true") {
			var err = Player.Scorm.Wrapper.ErrorHandler();
		}

		return result.toString();
	}

	return doLMSInitialize;
});
