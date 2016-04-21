define([], function() {

	var endScorm = function() {
		Player.Scorm.Wrapper.doLMSFinish();
		Player.Scorm.info.finalizado = true;
	}

	return endScorm;
});
