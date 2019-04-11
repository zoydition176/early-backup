/*
* 基于jquery实例化对象扩展的方法
*
* */
(function () {
    $.zRolls = function (el,options) {
        var base = this;
            base.$el = $(el);
            base.$list = base.$el.find('.zrollist');
            base.$box = base.$el.find('.zrollbox');
        var listh = base.$list.outerHeight(true);
        var viewHeight = listh*(options.itemNum);
        base.start = function () {
            base.option = $.extend({},$.zRolls.defaultOptions, options);
            base.$el.css({
                'overflow':'hidden',
                'height':viewHeight
            })
            base.$box.css({
                'position':'relative'
            }).addClass('active').html(base.$box.html()+base.$box.html());
            var rolls = function () {
                var listHeight = listh*(base.$list.length);
                var a = (base.$box.css('top')).replace(/px/,'') - 0;
                var unit = listh;
                if((Math.abs(a))>=(listHeight)){
                    base.$box.css({'top':'0'}).animate({
                        top:'-='+unit+'px'
                    },500);
                }else{
                    base.$box.animate({
                        top:'-='+unit+'px'
                    },500);
                }
            }
            if(base.$el.find(':animated').length === 0){
                var timer = setInterval(rolls,options.speed);
            }
            base.$el.on('mouseover',function () {
                clearInterval(timer);
            })
            base.$el.on('mouseout',function () {
                if(base.$el.find(":animated").length === 0){
                    timer = setInterval(rolls,options.speed);
                }
            })
        }
        base.start();
    }
    $.zRolls.defaultOptions = {
        speed:1000,
        itemNum:1
    }
    $.fn.zRolls = function (options) {
        return this.each(function () {
            new $.zRolls(this,options)
        })
    }
})()