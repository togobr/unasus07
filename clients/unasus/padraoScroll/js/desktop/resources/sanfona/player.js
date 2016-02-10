define(["jqueryUiAccordion"], function() {

	var sanfona = function(template, data) {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
		
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var resource = this;

			resource.renderSanfona();

			Player.Elements.$content.on({
				contentReady: function() {	
					var $accordion = resource.$el.find("#accordion");

					$accordion.accordion({
						collapsible: true,
						heightStyle: "content"
					});
				}
			});			
		};

		this.renderSanfona= function() {
			var me = this,
				sanfonaEl = me.$el,
				tabs_lis = me.$el.find('h3'),
				resource_id = me.data.id,
				// scorm = Player.Scorm.getScormValue('cmi.suspend_data').sanfona || {},
				// resource_scorm = scorm[resource_id] || {},
				new_suspend_data;

				sanfonaEl
					.off('accordionactivate.setVisited')
					.on('accordionactivate.setVisited', function(event, ui) {
						var i = tabs_lis.index(ui.newHeader),
							suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').sanfona,
							resource_scorm = {},
							new_suspend_data,
							tab = {};

							tab[i] = {
								visited: true
							};

							console.log('foo tab[i]', tab[i]);

							resource_scorm[resource_id] = {
								active: i,
								tabs: tab
							};

							new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);

							Player.Scorm.setScormValue('cmi.suspend_data', 'sanfona', new_suspend_data);
							tabs_lis.eq(i).addClass('visited');
					});
		}

	}

	return sanfona;
});