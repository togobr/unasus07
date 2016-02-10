define(["jqueryUiTabs"], function() {

	var gavetaHorizontal = function(template, data) {
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


			resource.renderGavetaHorizontal();
				
			Player.Elements.$content.on({
				contentReady: function() {	
					var $gaveta = resource.$el.find("#tabsHor"),
						firstTabVisited = resource.$el.find('ul li:first-child'),
						resource_id = resource.data.id,
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').gavetaHorizontal,
						resource_scorm = {},
						new_suspend_data,
						tab = {};

						$gaveta.tabs();

						tab[0] = {
							visited: true
						};

						resource_scorm[resource_id] = {
							tabs: tab
						};

						new_suspend_data = $.extend(true, {}, suspend_data, resource_scorm);

						Player.Scorm.setScormValue('cmi.suspend_data', 'gavetaHorizontal', new_suspend_data);
						firstTabVisited.addClass('visited');
				}
			});
		};

		this.renderGavetaHorizontal= function() {
			var me = this,
				gavetaHorizontal = me.$el,
				tabs_lis = me.$el.find('li'),
				resource_id = me.data.id,
				// scorm = Player.Scorm.getScormValue('cmi.suspend_data').gavetaHorizontal || {},
				// resource_scorm = scorm[resource_id] || {},
				new_suspend_data;

				gavetaHorizontal
				.off('tabsactivate.setVisited')
				.on('tabsactivate.setVisited', function(event, ui) {
					
					var i = tabs_lis.index(ui.newTab),
						suspend_data = Player.Scorm.getScormValue('cmi.suspend_data').gavetaHorizontal,
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

						Player.Scorm.setScormValue('cmi.suspend_data', 'gavetaHorizontal', new_suspend_data);
						tabs_lis.eq(i).addClass('visited');
				});
		}

	}

	return gavetaHorizontal;
});