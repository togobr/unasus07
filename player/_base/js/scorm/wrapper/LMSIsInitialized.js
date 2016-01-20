define([], function() {

	var LMSIsInitialized = function() {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return false;
		} else {
			var value = api.LMSGetValue("cmi.core.student_name");
			var errCode = api.LMSGetLastError().toString();
			if (errCode == Player.Scorm.Wrapper.options._NotInitialized) {
				return false;
			} else {
				return true;
			}
		}
	}

	return LMSIsInitialized;
});
