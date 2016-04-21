define([], function() {
	var doLMSCommit = function(val, FK_topico) {
		var api = Player.Scorm.Wrapper.getAPIHandle();
		if (api == null) {
			return "false";
		} else {
			var result = api.LMSCommit(val, FK_topico);
			if (result != "true") {
				var err = Player.Scorm.Wrapper.ErrorHandler();
			}
		}
		return result.toString();
	}

	return doLMSCommit;
});
