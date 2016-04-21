define([], function() {
	var getAPI = function() {
		var theAPI = Player.Scorm.Wrapper.findAPI(window.top.parent);
		if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined")) {
			theAPI = Player.Scorm.Wrapper.findAPI(window.opener);
		}

		if (theAPI == null) {
		}
		return theAPI;
	}

	return getAPI;
});
