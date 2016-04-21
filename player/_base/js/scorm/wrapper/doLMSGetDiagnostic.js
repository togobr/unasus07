define([], function() {
	var doLMSGetDiagnostic = function(errorCode) {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
		}
		return api.LMSGetDiagnostic(errorCode).toString();
	}
	return doLMSGetDiagnostic;
});
