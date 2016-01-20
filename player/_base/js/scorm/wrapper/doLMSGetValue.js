define([], function() {

	var doLMSGetValue = function(name) {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return "";
		} else {
			var value = api.LMSGetValue(name);
			var errCode = api.LMSGetLastError().toString();
			if (errCode != Player.Scorm.Wrapper.options._NoError) {
				// an error was encountered so display the error description
				var errDescription = api.LMSGetErrorString(errCode);
				return "";
			} else {
				return (value != null && typeof value != "undefined" ? value.toString() : "");
			}
		}
	}

	return doLMSGetValue;
});
