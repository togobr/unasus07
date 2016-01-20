define([], function() {

	var View = {
		/*
		O objecto 'elemens' foi criado para separa em um objeto chamado elems atrelado a view
		todos os elementos que precisaram tratamento funcional.
		Os elementos são criados em pares com e sem o wrapper do jquery e nomeados com e som '$'.

		No objecto temos '<nome do objecto no elems>': '<seletor de busca atravez do $.find()>'
		ex: 'teste': '.verde' criará 'verde' e '$verde' no elems procurando por $.find('verde')

		Obs: todos tem main/$main no elems que representa o elemento geral		

		
		Aqui foi criada uma interface para criação de novas edições de recursos.
		Os verdadeiros metodos da view(render, initialize) foram abstraidos em um recurso genérico
		que serve de base para a criaão de todos os recursos e aqui fica as partes espicifas a edição
		deste recurso expecifico.

		Metodos disparados:
			- initializating: Ao final do initialiaze da view
			- showing: Ao final das funções de exibição do painel de edição
			- hiding: Ao final das funções de escondeimento do painel de edição
			- positioning: Ao final das funções de posicionamento
		*/

		initializating: function(e) {
			console.log('initialization botaoPP -------', this);
			var me = this;

			this.addElements({
				'editModal': '#recEditModal'
			});

			this.events = _.extend(this.events, {
				'click _editModal': 'openModal'
			});

			/*
			Processo de renderização irá ocorrer após o encerramento das ações de inicialização
 			*/
		},

		openModal: function() {
			var me = this,
				model = me.recView.model,
				modal_id = model.get('_modal_id'),
				data = $.extend({
					_id: modal_id
				}, Editor.Player.Resources.botaoPP.config.modal),
				slide_model = new Editor.Models.Slide(data),
				def = slide_model.save();

			def.done(function() {
				
				// open modal

				Editor.Views.playerModal.config.model = slide_model;
				Editor.Views.playerModal.render().open();
			});
		},

		showing: function() {
			var me = this,
				model = me.recView.model;

			this.recView.addElements.call(this.recView, {
				'content': '.tagP'
			});

			this.recView.addEvents.call(this.recView, {
				'click _content': me.editContent
			});
		},

		hiding: function() {
			var me = this,
				$content = me.recView.elems.$content;

			// #1
			// Retirado eventos inseridos nos elementos do recurso a ser editado

			this.recView.removeElements.call(this.recView, [
				'content'
			]);
			this.recView.removeEvents.call(this.recView, [
				'click _content'
			]);
		},

		editContent: function(e) {
			var me = this.edition, //Eventos atrelados a view do recurso tem que voltar a ter a referencia a view da edição
				//Pametros necessários para que o metodo de textEdition funcione
				params = {
					$el: me.recView.elems.$content, //Elemento wrapped pelo jquery
					attr: 'label', //atributo do modelo
					textEditor: {
						options: [ //opções do editor de texto
							'bold',
							'italic',
							'underline',
							'removeFormat',
							'align-left',
							'align-center',
							'align-right',
							'justify',
							'spellchecker'
						]
					}
				};

			//Metodo que é exposto para edição de textos
			me.textEdition(params);
		}

	};

	return View;
});