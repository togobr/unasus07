define(["knockout"], function() {
    var checkbox = function() {
        this.init = function() {
            /*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/

            var recurso = this,
                $btnEnviaResposta = this.$el.find('.enviaResposta'),
                $chkOrRadio = this.$el.find('.chkOrRadio'),
                $serverMsg = this.$el.find('.serverMsg'),
                $btnFechar = this.$el.find('.fecharMensagem'),
                $msgSistema = this.$el.find('.mensagemSistema'),
                $msgAcerto = this.$el.find('.msg-confirmacao'),
                $msgErro = this.$el.find('.msg-erro'),
                $desativarBarra = this.$el.find('.desativacao'),
                atvType = recurso.data.multipla,
                qtdSlide = Player.Tree.slides,
                respostaUsuario = new Array(),
                altAssinaladas = this.$el.find(".chkOrRadio:checked"),
                gabarito = recurso.data.parametros.gabarito,
                count = 0;
            
            questoesCorretas = 0; //verificar se é necessário desta variável global.
            recurso.tentativaPorQuestaoRealizada = 0;


            if (Player.Scorm.getScormValue("cmi.core.score.raw") != undefined && Player.Scorm.getScormValue("cmi.core.score.raw") != "") {
                notaFinal = parseInt(Player.Scorm.getScormValue("cmi.core.score.raw"));

                console.log(notaFinal, "notaFinalera");
            } else {
                notaFinal = 0;
            }






            recurso.$el.attr("value", recurso.data.order);
            Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id"));





            if (Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")) != undefined) {



                $chkOrRadio.each(function(index, value) {



                });


            }


            Player.Elements.$content.on({
                contentReady: function(e) {

                    $btnEnviaResposta.addClass("desativado");

                    if (Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")) != undefined) {



                        $chkOrRadio.each(function(index) {


                            if (index == Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")).questoesAssinalada) {
                                $(this).attr("checked", true);
                                $btnEnviaResposta.addClass('desativado');
                                $btnEnviaResposta.css({
                                    "cursor": "default;"
                                });
                                $btnEnviaResposta.off('click');
                                $chkOrRadio.attr('disabled', true);
                                $btnFechar.hide();
                            }




                            if (gabarito[0] == Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")).questoesAssinalada) {

                                $msgAcerto.find(".feedBackQ").html(Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")).feedbackQuestao);
                                $btnFechar.hide();
                                $msgAcerto.show();





                            } else {

                                $msgErro.find(".feedBackQ").html(Player.Scorm.getScormValue('cmi.suspend_data', recurso.$el.attr("id")).feedbackQuestao);
                                $btnFechar.hide();
                                $msgErro.show();



                            }

                        });


                    }

                }


            });



            // ************************* MSG SISTEMA ************************* 



            $btnFechar.on({
                click: function(e) {

                    $(this).parent().parent().addClass('animated').addClass("fadeOutDown");



                }
            });


            // ************************* EVENTOS ************************* 

            $chkOrRadio.on({
                click: function() {

                    $msgAcerto.removeClass('animated').removeClass("fadeOutDown");
                    $msgErro.removeClass('animated').removeClass("fadeOutDown");
                    $msgAcerto.hide();
                    $msgErro.hide();

                    if ($('.chkOrRadio').is(':checked')) {
                        $btnEnviaResposta.off('click'); //utilizado para não chamar a função "ativaBtnResposta()", pela quantidade de alternativas assinaladas, mas apenas uma vez.
                        recurso.ativaBtnResposta();
                    } else {
                        recurso.desativaBtnResposta();
                        $btnEnviaResposta.off('click');
                    }
                }

            });



            $btnEnviaResposta.on({
                click: function(e) {


                }

            });







            // ************************* FUNÇÕES ************************* 


            this.ativaBtnResposta = function() {
                $btnEnviaResposta.removeClass('desativado');
                $btnEnviaResposta.on('click', this.enviaResposta);


            }


            this.desativaBtnResposta = function() {
                $btnEnviaResposta.addClass('desativado');
            }


            this.enviaResposta = function() {
                var altAssinaladas = recurso.$el.find(".chkOrRadio:checked"),
                    feedBackVisual = recurso.$el.find(".chkOrRadio"),
                    respostaCerta = false,
                    idAtividade = $(this).parent().attr('id'),
                    posicaoAtividade = Number($(altAssinaladas).parent().parent().parent().parent().parent().parent().parent().attr("value")) - 1,
                    altFeedback = Number($(altAssinaladas).val());

                $btnEnviaResposta.addClass("desativado");
                $btnEnviaResposta.off("click");

                idAtividade = $(altAssinaladas).parent().parent().parent().parent().parent().parent().parent().attr("id");





                feedbackCerto = Player.json.slides[0].resources[posicaoAtividade].alternativas[0].feedBackCerto;
                feedbackErradoUm = Player.json.slides[0].resources[posicaoAtividade].alternativas[1].feedBackErradoUm;
                feedBackErradoDois = Player.json.slides[0].resources[posicaoAtividade].alternativas[2].feedBackErradoDois;




                Player.Scorm.setScormValue('cmi.suspend_data', idAtividade, {
                    questoesAssinalada: $(altAssinaladas).attr("value"),
                    feedbackQuestao: ""
                });



                respostaUsuario = []; //A cada vez que o usuário clicar para enviar a resposta, ele zera o array antes.

                altAssinaladas.each(function() {
                    respostaUsuario.push($(this).val());
                });

                respostaCerta = recurso.checaResposta(respostaUsuario, altAssinaladas, respostaCerta, feedBackVisual, idAtividade);


                $serverMsg.css('display', 'block');
            }


            this.checaResposta = function(respostaUsuario, altAssinaladas, respostaCerta, feedBackVisual, idAtividade) {
                var arrayTeste = ["0", "1", "2", "3"],
                    todasAtividades = recurso.$el.attr("class");



                console.log(contAtividades, "contAtividades");



                if (respostaUsuario.compare(gabarito)) { // realiza a comparação com o que o usuário assinalou, com o gabarito do Json.
                    questoesCorretas += 1;
                    respostaCerta = true;

                    $msgAcerto.find(".feedBackQ").html(feedbackCerto);
                    $msgAcerto.show();
                    $btnEnviaResposta.addClass('desativado');

                    $btnEnviaResposta.css({
                        "cursor": "default;"
                    });
                    $btnEnviaResposta.off('click');
                    $chkOrRadio.attr('disabled', true);
                    $btnFechar.hide();
                    count = 0;

                    notaFinal = (questoesCorretas * 100) /contAtividades;
                    Player.Scorm.setScormValue('cmi.core.score.raw', notaFinal);

                    Player.Scorm.getScormValue('cmi.suspend_data', idAtividade).feedbackQuestao = feedbackCerto;

                    

                    recurso.$el.addClass("atvRespondida");
                    $("." + todasAtividades).each(function(index) {

                            if (!$(this).hasClass("atvRespondida")) {
                                return false;
                            }
                            if((index+1) >=contAtividades){
                                Player.Scorm.setScormValue('cmi.core.lesson_status', 'completed');
                                Player.Scorm.saveScormData();
                            }
                    })


                } else {
                    count++;
                    console.log('[rec]atividade [method]checaResposta [var]count: ', count);

                    if (count > 1) {
                        count = 0;
                        $msgErro.find(".feedBackQ").html(feedBackErradoDois);
                        $msgErro.show();
                        $btnEnviaResposta.addClass('desativado');
                        $chkOrRadio.attr('disabled', true);
                        $btnEnviaResposta.css({
                            "cursor": "default;"
                        });
                        $btnEnviaResposta.off('click');
                        $btnFechar.hide();

                        Player.Scorm.getScormValue('cmi.suspend_data', idAtividade).feedbackQuestao = feedBackErradoDois;

                        recurso.$el.addClass("atvRespondida");

                        $("." + todasAtividades).each(function(index) {

                            if (!$(this).hasClass("atvRespondida")) {
                                return false;
                            }
                            if((index+1) >=contAtividades){
                                Player.Scorm.setScormValue('cmi.core.lesson_status', 'completed');
                                Player.Scorm.saveScormData();
                            }
                        })



                    } else {
                        $msgErro.find(".feedBackQ").html(feedbackErradoUm);
                        $msgErro.show();

                        Player.Scorm.getScormValue('cmi.suspend_data', idAtividade).feedbackQuestao = feedbackErradoUm;

                    }

                }

                console.log('RespostaUsuario: ', respostaUsuario, gabarito);
                return respostaCerta;
            }


        }

    }

    return checkbox;
});