define([], function() {
    'use strict';
    var initScorm = function() {
        var self = this,
            config = Player.Config.general.scorm,
            wrapper = Player.Scorm.Wrapper,
            scorm = Player.Helpers.getQueryVariable('scorm') === 'false' ? false : true,
            suspendedData;

        Player.Scorm.vars = {
            "cmi.core.lesson_location": undefined,
            "cmi.core.lesson_status": undefined,
            "cmi.core.score.raw": undefined,
            "cmi.suspend_data": {
                // checkbox1: {
                //     feedbackQuestao: "Sua resposta ainda está incorreta. É importante que você retome o conteúdo e fale com seu tutor caso ainda tenha dúvidas sobre o assunto. A resposta correta para esta atividade é: Clicar no botão Iniciar do Windows / Clicar em Todos os Programas / Clicar na pasta Microsoft Office / Abrir o Microsoft Word 2010.",
                //     questoesAssinalada: 2
                // },

                // checkbox2: {
                //     feedbackQuestao: "Parabéns, você acertou! Isso mostra que você acompanhou este módulo com muita atenção e conseguiu acessar o Microsoft Word 2010 com sucesso. Siga em frente!",
                //     questoesAssinalada: 1
                // },

                // checkbox4: {
                //     questoesAssinalada: 0,
                //     feedbackQuestao: "Parabéns, você acertou! Isso mostra que você acompanhou este módulo com muita atenção e conseguiu acessar o Microsoft Word 2010 com sucesso. Siga em frente!"
                // },
                // checkbox5: {
                //     questoesAssinalada: 2,
                //     feedbackQuestao: "Parabéns, você acertou! Isso mostra que você acompanhou este módulo com muita atenção e conseguiu acessar o Microsoft Word 2010 com sucesso. Siga em frente!"
                // },
                // checkbox3: {
                //    questoesAssinalada: 0,
                //     feedbackQuestao: "Sua resposta ainda está incorreta. É importante que você retome o conteúdo e fale com seu tutor caso ainda tenha dúvidas sobre o assunto. A resposta correta para esta atividade é: 1º Clique na Guia Arquivo / 2º Clique em Salvar / 3º Digite o nome na opção Nome do arquivo / 4º Clique no botão Salvar."
                // }
            }
        };

        if (scorm === false) return;


        console.log('foo scorm', scorm);

        wrapper.doLMSInitialize();
        Player.Scorm.readScormVars();

        suspendedData = Player.Scorm.getScormValue('cmi.suspend_data');

        // Player.Scorm.setScormValue('cmi.suspend_data', {
        //     screenPosition: {
        //         posX: 0,
        //         posY: 5000
        //     }
        // });

        $(window).on({
            beforeunload: function() {
                self.savePositionBeforeUnload();
                Player.Scorm.saveScormData(true);
            },

            unload: function() {
                self.savePositionBeforeUnload();
                Player.Scorm.saveScormData(true);
            }
        });


        self.savePositionBeforeUnload = function(){
            var posY = $(document).scrollTop();

            Player.Scorm.setScormValue('cmi.suspend_data', {
                screenPosition: {
                    posY: posY
                }
            });
        }

        Player.Elements.$content.trigger('scormReady');
    }

    return initScorm;
});