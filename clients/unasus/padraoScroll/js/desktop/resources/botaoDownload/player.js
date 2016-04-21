define(['jquery'], function($) {

	var botaoDownload = function(template, data) {
		var me = this;

		this.init = function() {
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var recurso = this;
				
			
			recurso.$el
				.on({
					click: function(e) {
						var resource_id = recurso.data.id,
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').botaoDownload,
						resource_scorm = {},
						new_suspend_data;


						resource_scorm[resource_id] = {
							visited: true
						};
						new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);
						
						Player.Scorm.setScormValue('cmi.suspend_data', 'botaoDownload', new_suspend_data);

						recurso.$el.addClass('visited');
					}
				});
		}
	}

	return botaoDownload;
});