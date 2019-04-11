
$(".nav_menu-item:eq(0)").children(".nav_submenu").css({'display':'block'});
$(".nav_menu-item:eq(0)").children(".nav_submenu01").css({'display':'block'});
$(".nav_menu-item").mousemove(function(e){
    $(".nav_menu-item").children(".nav_submenu").hide();
    $(".nav_menu-item").children(".nav_submenu01").hide();
    $(this).css({'background-color':'#FFFFFF'});
    $(this).children(".nav_submenu").css({'display':'block'});
    $(this).children(".nav_submenu01").css({'display':'block'});
})
;(function ($) {
    $.fn.extend({
        "nav": function (con) {
            var $this = $(this), $nav = $this.find('.switch-tab'), t = (con && con.t) || 4500, a = (con && con.a) || 1000, i = 0, autoChange = function () {
                $nav.find('a:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').addClass('current').siblings().removeClass('current');
                $this.find('.event-item:eq(' + i + ')').css('display', 'none').end().find('.event-item:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').css({
                    display: 'block',
                    opacity: 0.3
                }).animate({
                    opacity: 1
                }, a, function () {
                    i = i + 1 === 3 ? 0 : i + 1;
                }).siblings('.event-item').css({
                    display: 'none',
                    opacity: 0
                });
            }, st = setInterval(autoChange, t);
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
                st = setInterval(autoChange, t);
                return false;
            }).find('.switch-nav>a').bind('click', function () {
                var current = $nav.find('.current').index();
                i = $(this).attr('class') === 'prev' ? current - 2 : current;
                autoChange();
                return false;
            }).end().find('.switch-tab>a').bind('click', function () {
                i = $(this).index() - 1;
                autoChange();
                return false;
            });
            return $this;
        }
    });
}(jQuery));



$(document).on('scroll',function(){
    var top = $(window).scrollTop();
    if(top>=2953){
        var oContentWidth = $('.main_content_page').width();
        $('.TAP_show_list').width(oContentWidth).addClass('fix');
        var oCiscoTop = $('.TAP_show_main_pic').eq(0).offset().top-62;
        var oBrocadeTop = $('.TAP_show_main_pic').eq(1).offset().top-62;
        var oDellTop = $('.TAP_show_main_pic').eq(2).offset().top-62;
        var oJuniperTop = $('.TAP_show_main_pic').eq(3).offset().top-62;
        var oHPTop = $('.TAP_show_main_pic').eq(4).offset().top-62;
        var oOthersTop = $('.TAP_show_main_pic').eq(5).offset().top-62;
        if($(window).scrollTop()>=oBrocadeTop&&$(window).scrollTop()<=oDellTop){
            $('.TAP_show_name').eq(1).addClass('active').siblings().removeClass('active');
        }else if($(window).scrollTop()>=oDellTop && $(window).scrollTop()<=oJuniperTop){
            $('.TAP_show_name').eq(2).addClass('active').siblings().removeClass('active');
        }else if($(window).scrollTop()>=oJuniperTop && $(window).scrollTop()<=oHPTop){
            $('.TAP_show_name').eq(3).addClass('active').siblings().removeClass('active');
        }else if($(window).scrollTop()>=oHPTop && $(window).scrollTop()<=oOthersTop){
            $('.TAP_show_name').eq(4).addClass('active').siblings().removeClass('active');
        }else if($(window).scrollTop()>=oOthersTop){
            $('.TAP_show_name').eq(5).addClass('active').siblings().removeClass('active');
        }else if($(window).scrollTop()<oBrocadeTop){
            $('.TAP_show_name').eq(0).addClass('active').siblings().removeClass('active');
        }
    }else{
        $('.TAP_show_list').width('auto');
        $('.TAP_show_list').removeClass('fix');
    }
})
$(document).on('click','.TAP_show_name',function(){
    var oIndex = $(this).index();
    var oText = $(this).text();
    $('.TAP_show_list').find('h2').html(oText+"<span class='icon iconfont'>&#xf087;</span>");
    setTimeout(function(){
        $('.TAP_show_name').eq(oIndex).addClass('active').siblings().removeClass('active');
    },300)
    $('body,html').stop().animate({scrollTop:$('.TAP_show_main_pic').eq(oIndex).offset().top-60},300)
})
$(document).on('click','.TAP_show_list h2',function(){
    $('.TAP_show_list ul').slideToggle();
})


