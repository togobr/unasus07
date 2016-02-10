define(["jqueryUiTabs"], function() {

	var gavetaVertical = function(template, data) {
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


			// renderTabsContent deve ser chamado antes da execução do evento `contentReady`
			resource.renderGavetaVertical();

			Player.Elements.$content.on({
				contentReady: function() {	
					var $gaveta = resource.$el.find("#tabsVert"),
						scorm = Player.Scorm.getScormValue('cmi.suspend_data').gavetaVertical || {};

					$gaveta.tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
					$gaveta.find("li").removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
				}
			});


		};

		this.renderGavetaVertical= function() {
			var me = this,
				gavetaVertical = me.$el,
				tabs_lis = me.$el.find('li'),
				resource_id = me.data.id,
				// scorm = Player.Scorm.getScormValue('cmi.suspend_data').gavetaVertical || {},
				// resource_scorm = scorm[resource_id] || {},
				new_suspend_data;

				gavetaVertical
				.off('tabsactivate.setVisited')
				.on('tabsactivate.setVisited', function(event, ui) {
					
					var i = tabs_lis.index(ui.newTab),
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').gavetaVertical,
						resource_scorm = {},
						new_suspend_data,
						tab = {};

						tab[i] = {
							visited: true
						};

						resource_scorm[resource_id] = {
							active: i,
							tabs: tab
						};

						new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);

						Player.Scorm.setScormValue('cmi.suspend_data', 'gavetaVertical', new_suspend_data);
						tabs_lis.eq(i).addClass('visited');
				});
		}

	}



	return gavetaVertical;
});