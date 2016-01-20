define([], function() {

	var doLMSGetLastError = function() {
		var api = Player.scorm.wrapper.options.getAPIHandle();
		if (api == null) {
			//since we can't get the error code from the LMS, return a general error
			return _GeneralError;
		}
		return api.LMSGetLastError().toString();
	}

	return doLMSGetLastError;
});