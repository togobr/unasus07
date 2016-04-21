define([
	'jquery'
	], function($) {

	var buildContent = function(json) {
		console.log('buildContent ------', json);
		var main = Player.Functions.generalInit(Player.VisualPattern.Main, json),
			contentSelector = Player.Config.selectors.content,
			slides = json.slides,
			slide,
			resources,
			resource;
		/*
			Documentar a criação de uma arvore de acesso aos elementos ops sua renderização e inicialização
		*/
		Player.Tree.main = main;
		Player.Tree.slides = [];
		Player.Tree.resources = [];

		for (var i = 0, limI = slides.length; i < limI; i += 1) {
			var slidePattern = Player.VisualPattern.Slides[slides[i].template] ? Player.VisualPattern.Slides[slides[i].template] : Player.VisualPattern.Slides['default'],
				slide = Player.Functions.generalInit(slidePattern, slides[i], i),
				recArray = [];

			Player.Tree.slides.push(slide);
			resources = slides[i].resources ? slides[i].resources : [];

			// corrige a propriedade "order" que deveria vir do backend como integer
			// caso contrario a ordenação dos recursos ficaria algo como:
			// ["0", "1", "11", "12", "2", ...]
			$.each(resources, function(i, rec) {
				rec.order = parseInt(rec.order, 10);
			});
			
			resources = Player.Helpers.sortByProperty("order", resources)

			for (var j = 0, limJ = resources.length; j < limJ; j += 1) {
				resources[j].slide = i;
				var recPattern = Player.VisualPattern.Resources[resources[j].template],
					resource = Player.Functions.generalInit(recPattern, resources[j], j);

				recArray.push(resource);
				(slide.addResource) ? slide.addResource(resource.$el) : slide.$el.append(resource.$el); //**Documentar, metodos de inclusão customizada de recursos
			}
			Player.Tree.resources.push(recArray);
			(main.addSlide) ? main.addSlide(slide.$el) : main.$el.find(contentSelector).append(slide.$el); //**Documentar, metodos de inclusão customizada de slides
		}

		$('body').append(main.$el);

	};

	return buildContent;
});
