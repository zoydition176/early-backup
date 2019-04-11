// IIFE
(function($) {

		// Define Plugin
    $.organicTabs = function(el, options) {
    
    		// JavaScript native version of this
        var base = this;
        

        
        // jQuery version of this
        base.$el = $(el);//插件实例化的对象
        console.log(base);
        // Navigation for current selector passed to plugin
        base.$nav = base.$el.find(".nav");//插件点击切换的对象
        
        // Runs once when plugin called       
        base.init = function() {
        
        		// Pull in arguments
            base.options = $.extend({},$.organicTabs.defaultOptions, options);
            console.log($.organicTabs.defaultOptions);
            //$.extend方法用来扩展一个对象，可以把后面的对象合并到前面的对象里面去，相同的就不变 不同的就用后面的，当只有一个对象作为参数的时候，就合并jquery本身
            //这一段的作用就是让插件支持传参，传的参数可以覆盖进默认的参数里面
                        
            // Accessible hiding fix (hmmm, re-look at this, screen readers still run JS)
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            }); 
            
            // When navigation tab is clicked...
            base.$nav.on("click","a", function(e) {
            
            		// no hash links
            		e.preventDefault();//防止a标签乱跳
            
                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),//主要是为了把#号去掉
                
                // List moving to
                    $newList = $(this),
                    
                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),//当前点击的href去掉#号头
                
                // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
                		$allListWrap.height(curListHeight);
                                        
                if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {
                                            
                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function() {
                        
                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.speed);
                        
                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#"+listID).height();
                        $allListWrap.animate({
                            height: newHeight
                        }, base.options.speed);
                        
                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("current");
                        $newList.addClass("current");
                        
                        // Change window location to add URL params
                        if (window.history && history.pushState) {
                          // NOTE: doesn't take into account existing params
                            history.replaceState("", "", "?" + base.options.param + "=" + listID);
                        }
                    });
                    
                }   

            });
            
            var queryString = {};
            window.location.href.replace(
                new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                function($0, $1, $2, $3) { queryString[$1] = $3; }
            );
            
            if (queryString[base.options.param]) {
            
            	var tab = $("a[href='#" + queryString[base.options.param] + "']");
            	console.log(base.options);
            
							tab
								.closest(".nav")
								.find("a")
								.removeClass("current")
								.end()
								.next(".list-wrap")
								.find("ul")
								.hide();
							tab.addClass("current");
							$("#" + queryString[base.options.param]).show();
			            
			        };            
            
        };
        base.init();
    };
    //www.jq22.com
		$.organicTabs.defaultOptions = {
		    "speed": 300,
		    "param": "tab"
		};
    
    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };
    
})(jQuery);