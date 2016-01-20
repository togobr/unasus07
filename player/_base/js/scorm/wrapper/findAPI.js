define([], function() {
	var findAPI = function(win) {
		while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
			Player.Scorm.Wrapper.options.findAPITries++;
			// Note: 7 is an arbitrary number, but should be more than sufficient
			if (Player.Scorm.Wrapper.options.findAPITries > 7) {
				return null;
			}
			win = win.parent;
		}
		return win.API;
	}

	return findAPI;
});
