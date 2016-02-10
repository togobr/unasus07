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
					var $accordion = resource.$el.find("#accordion"),
						firstTabVisited = resource.$el.find('#accordion h3:first-child'),
						resource_id = resource.data.id,
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').sanfona,
						resource_scorm = {},
						new_suspend_data,
						tab = {};

					$accordion.accordion({
						collapsible: true,
						heightStyle: "content"
					});

					tab[0] = {
						visited: true
					};

					resource_scorm[resource_id] = {
						tabs: tab
					};

					new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);

					Player.Scorm.setScormValue('cmi.suspend_data', 'sanfona', new_suspend_data);
					firstTabVisited.addClass('visited');
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

							if (i == -1) return; //evita o salvamento de uma sanfona(aba) inexistente.

							new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);

							Player.Scorm.setScormValue('cmi.suspend_data', 'sanfona', new_suspend_data);

							console.log('foo tabs_lis.eq(i)', tabs_lis.eq(i));

							tabs_lis.eq(i).addClass('visited');
					});
		}

	}

	return sanfona;
});