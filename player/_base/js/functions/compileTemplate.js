define([
	'mustache'
	], function(Mustache) {

	var compileTemplate = function(temp, dados) {
		var ieFix = "class"; //Fix para ie que mantem "class" como reserved namespace;

		this.cont = this.cont ? this.cont : {};
		this.cont[dados.template] = this.cont[dados.template] ? this.cont[dados.template] + 1 : 1;

		dados.id = dados.id ? dados.id : dados.template + this.cont[dados.template];
		dados[ieFix] = dados[ieFix] ? dados.template + ' ' + dados[ieFix] : dados.template;

		dados.styleObj = dados.styleObj ? dados.styleObj : null;
		dados.style = dados.styleObj ? Player.Helpers.csslizeJSON(dados.styleObj) : dados.style;

		return Mustache.render(temp, dados);
	}

	return compileTemplate;
});
