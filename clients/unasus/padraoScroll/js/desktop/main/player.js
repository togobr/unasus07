define([
    'jquery'
], function($) {

    var mainplayer = function() {
        var self = this,
            right,
            tSliderInd;

        this.init = function() {
            $.extend(this, new Player.Base.main.player(this));
            self.startIndice();

            Player.Elements.$swipe.on({
                slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
                    self.updateSlideNumber();

                    if (endIndex == 0) {
                        self.elems.$bottom.hide();
                    } else {
                        self.elems.$bottom.show();
                    }
                }
            });




            Player.Elements.$content.on({
                contentReady: function(e) {
                    self.updateIndice();
                    Player.Components.viewPortChecker();
                    var $btIframe = $('body').find('.btnTextoFull');
                    var $btFecharIframe = $('body').find('.fechartelacheia');

                    contAtividades = 0;


                    for (var i = Player.json.slides[0].resources.length - 1; i >= 0; i--) {
                 

                        if (Player.json.slides[0].resources[i].template == "checkbox") {
                            contAtividades++;

                        }


                    };

                        $('.tituloModulo').addClass("hiddenAnimate").addClass("visible").addClass("animated").addClass("fadeInDown");



                    $btIframe.on({
                        click: function(e) {
                            // $(".iframeContent").toggle();
                            // $(".fechartelacheia").toggle();

                            // var captivateId = $(this).parent().parent().attr("id"),
                            // linkIframe = $("#"+ captivateId).find("iframe").attr("src");

                            // $(".telaCheiaIframe").attr("src",linkIframe);

                            var $iframe = $(this).parent().parent().find("iframe");

                            var iframeDoc = $iframe.contents();


                            var iframeDoc = $iframe.contents(),
                                body = iframeDoc.find("body"),
                                sheet = (function() {
                                    var style = document.createElement("style");

                                    style.appendChild(document.createTextNode(""));
                                    iframeDoc[0].head.appendChild(style);

                                    return style.sheet;
                                })();

                            

                            if (!$(this).hasClass("reduzirFrame")) {
                            	sheet.insertRule(".cpMainContainer { background-color: #fff !important; }", 0);

                                $(this).addClass("reduzirFrame")
                                $(this).parent().parent().find(".iframeWrapper").css({
                                    "top": "-9%",
                                    "left": "-9%",
                                    "bottom": "-9%",
                                    "right": "-9%"
                                });
                                $(this).text("Reduzir demonstração");







                                $(this).parent().parent().attr("style", "background:#fff;margin-bottom:100px;");
                                // $(this).parent().parent().css("backgorund","#fff")

                            } else {
                            	sheet.insertRule(".cpMainContainer { background-color: rgb(61, 58, 59) !important; }", 0);
                                $(this).removeClass("reduzirFrame");
                                $(this).parent().parent().find(".iframeWrapper").css({
                                    "top": "5%",
                                    "left": "9.5%",
                                    "bottom": "13%",
                                    "right": "9.5%"
                                });
                                $(this).text("Ampliar demonstração");
                                $(this).parent().parent().attr("style", "background:#bfdff5")



                            }



                            // $(this).parent().parent().find(".iframeWrapper").css({"top":"5%","left": "9.5%","bottom": "14%","right": "9.5%" });

                            // -webkit-transition: all .5s;


                        }
                    });
                    $btFecharIframe.on({
                        click: function(e) {
                            // $(".iframeContent").hide();
                            // $(".fechartelacheia").hide();
                        }
                    });
                }
            });

            self.elems.$btIndice.on({
                click: function(e) {
                    self.elems.$menuIndice.toggle();
                    $(this).toggleClass('actived')

                    if (right == tSliderInd) {
                        self.elems.$btAvancarIndice.hide();
                    }
                    if (right == 1) {
                        self.elems.$btVoltarIndice.hide();
                    }
                }
            });

            self.elems.$btAvancar.on({
                click: function(e) {
                    self.updateIndice();
                }
            });

            self.elems.$btVoltar.on({
                click: function(e) {
                    self.updateIndice();
                }
            });

            self.elems.$btAvancarIndice.on({
                click: function(e) {
                    console.log(tSliderInd);
                    $("#indice").animate({
                        right: "+=653px"
                    }, 500);

                    right += 1;
                    if (tSliderInd == right) {
                        self.elems.$btAvancarIndice.hide();
                    } else if (right < (tSliderInd)) {
                        self.elems.$btAvancarIndice.show();

                    }
                    self.elems.$btVoltarIndice.show();
                }
            });

            self.elems.$btVoltarIndice.on({
                click: function(e) {
                    $("#indice").animate({
                        right: "-=653px"
                    }, 500);

                    right -= 1;

                    if (right == 1) {
                        self.elems.$btVoltarIndice.hide();
                    }
                    self.elems.$btAvancarIndice.show();
                }
            });
        }

        // ************************* METHODS ************************* 

        this.updateSlideNumber = function() {
            var player = this,
                slide = self.getCurrentSlide(),
                perc = self.getSlidePercent(),
                total_slides = self.getTotalSlides();

            self.elems.$barraProgresso
                .find('.valorBarraProgresso')
                .animate({
                    'max-width': perc + '%'
                })
                .end()
                .find('.frontText, .backText')
                .text('Slide ' + slide + ' / ' + total_slides);
        }

        this.startIndice = function() {
            var player = this,
                slidesArray = player.data.slides,
                slidesTotal = slidesArray.length;

            right = 1;
            tSliderInd = (slidesTotal / 22)

            if (!(tSliderInd % 1 == 0)) {
                tSliderInd = parseInt(tSliderInd);
                tSliderInd += 1;
                if (tSliderInd < 1) {
                    tSliderInd += 1;
                }
            }

            self.elems.$itensLinst.each(function(index, el) {
                var $el = $(el);
                $el.on({
                    click: function(e) {
                        var atual = this;

                        if (!$(atual).hasClass('indiceAtual')) {
                            Player.Elements.swipe.slide(index);
                            self.elems.$itensLinst.removeClass('indiceAtual');
                            $(this).addClass('indiceVisitado');
                            $(this).addClass('indiceAtual');
                        }
                        self.elems.$menuIndice.toggle();
                        self.elems.$btIndice.toggleClass('actived');
                    }
                });
            });
        }

        this.updateIndice = function() {
            var slide = self.getCurrentSlide();

            self.elems.$menuIndice.hide();
            self.elems.$btIndice.removeClass('actived');

            self.elems.$itensLinst
                .filter('.indiceAtual')
                .removeClass('indiceAtual indiceDesativado')
                .end()
                .eq(slide - 1)
                .removeClass('indiceDesativado')
                .addClass('indiceVisitado indiceAtual');
        }

    }

    return mainplayer;
});