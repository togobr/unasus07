define([], function() {
    'use strict';
    var initScorm = function() {
        var config = Player.Config.general.scorm,
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

        wrapper.doLMSInitialize();
        Player.Scorm.readScormVars();

        suspendedData = Player.Scorm.getScormValue('cmi.suspend_data');

        $.each(suspendedData.atividades || {}, function(key, item) {
            var atividade = Player.Helpers.findRecbyData('_id', key);

            if (!atividade) return;

            var atv = $('#' + key),
                gabarito = suspendedData.atividades[key].gabarito,
                resps = suspendedData.atividades[key].respostas,
                tentativaPorQuestaoRealizada = suspendedData.atividades[key].tentativaPorQuestaoRealizada,
                scoAtividade = suspendedData.atividades[key].scoAtividade,
                certa = suspendedData.atividades[key].respostaCerta,
                feedBackVisual = atv.find(".chkOrRadio"),
                feedBackCircundado = suspendedData.atividades[key].feedBackCircundado,
                arrayTeste = ["0", "1", "2", "3", "4"];


            for (var i = resps.length - 1; i >= 0; i--) {
                atv.find('[value="' + resps[i] + '"]').prop("checked", true);
            }

            for (var i = 0; i < (feedBackVisual.length); i++) {

                var found = $.inArray(arrayTeste[i], gabarito);

                if (found === -1) {
                    if (feedBackCircundado) {
                        feedBackVisual[i].parentNode.parentNode.setAttribute("class", "errado");
                    }
                } else {
                    if (feedBackCircundado) {
                        feedBackVisual[i].parentNode.parentNode.setAttribute("class", "certo");
                    }
                }
            }

            if (scoAtividade == "comNota") {
                atv.find('.chkOrRadio').prop('disabled', true);
                atv.find('.enviaResposta').hide();
                atividade.tentativaPorQuestaoRealizada = tentativaPorQuestaoRealizada;
            }
        });

        if (suspendedData['acertos']) {
            var totalAcertos = suspendedData['acertos'].questoesCorretas;
            // global var
            questoesCorretas = totalAcertos;
        }

        $(window).on({
            beforeunload: function() {
                Player.Scorm.saveScormData(true);
            },

            unload: function() {
                Player.Scorm.saveScormData(true);
            }
        });

        Player.Elements.$content.trigger('scormReady');

        console.log(Player);
    }

    return initScorm;
});