define([], function() {
	var doLMSFinish = function() {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return "false";
		} else {
			// call the LMSFinish function that should be implemented by the API
			var result = api.LMSFinish("");
			if (result.toString() != "true") {
				var err = ErrorHandler();
			}
		}
		return result.toString();
	}

	return doLMSFinish;
});