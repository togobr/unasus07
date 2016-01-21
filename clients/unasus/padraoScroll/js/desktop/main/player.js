define([
    'jquery'
], function($) {

    var mainplayer = function() {
        var self = this,
            right,
            tSliderInd;

        this.init = function() {
            $.extend(this, new Player.Base.main.player(this));

            Player.Elements.$swipe.on({
                slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
                }
            });


            Player.Elements.$content.on({
                contentReady: function(e) {
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

        }

        // ************************* METHODS ************************* 

        this.teste = function() {
            var player = this;
        }

    }

    return mainplayer;
});