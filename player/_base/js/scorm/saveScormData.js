define([], function() {

	var saveScormData = function(finaliza) {
		var scormWrapper = Player.Scorm.Wrapper,
			setValue = scormWrapper.doLMSSetValue,
			scormVars = Player.Scorm.vars,
			FK_topico = (window.parent.topicos ? window.parent.topicos.getTopicoAtual() : null);

		console.log(scormVars);
		for (var key in scormVars) {
			if (scormVars.hasOwnProperty(key)) {
				var valor = key === "cmi.suspend_data" && scormVars[key] !== "" ? JSON.stringify(scormVars[key]) : scormVars[key];
				// var valor = scormVars[key].value;
				if (valor) {
					setValue(key, valor);

					console.log(key, valor);
				}
			}
		}

		scormWrapper.computeTime(Player.Scorm.info.startTime);
		scormWrapper.doLMSCommit(null, FK_topico);


		if (finaliza) {
			Player.Scorm.endScorm();
		}
	}

	return saveScormData;
});
