define([], function() {
    var captivate = function() {
        this.init = function() {
            /*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/

            var recurso = this,
                $iframe = recurso.$el.find("iframe");
                

            Player.Elements.$content.on({
                contentReady: function(e) {
                    $iframe.load(function(){
                        var iframeDoc = $iframe.contents();
                        

                        var iframeDoc = $iframe.contents(),
                            body = iframeDoc.find("body"),                            
                            sheet = (function() {                               
                                var style = document.createElement("style");

                                style.appendChild(document.createTextNode(""));                                
                                iframeDoc[0].head.appendChild(style);

                                return style.sheet;
                            })();      

                        sheet.insertRule(".cpMainContainer { background-color: rgb(61, 58, 59) !important;}", 0);
                         sheet.insertRule("#CPUnSupportedBrowserWarning_ID{display: none !important; }", 0);

                    });
                }
            });
        }
    }

    return captivate;
});