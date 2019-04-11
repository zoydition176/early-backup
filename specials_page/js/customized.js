fnSlide($('.customized_slide01'),$('.customized_slide01 .customized_programme_slide_list'),$('.customized_slide01 .customized_programme_slide_dot em'))
fnSlide($('.customized_slide02'),$('.customized_slide02 .customized_programme_slide_list'),$('.customized_slide02 .customized_programme_slide_dot em'))
fnSlide($('.customized_slide03'),$('.customized_slide03 .customized_programme_slide_list'),$('.customized_slide03 .customized_programme_slide_dot em'))
fnSlide($('.customized_slide04'),$('.customized_slide04 .customized_programme_slide_list'),$('.customized_slide04 .customized_programme_slide_dot em'))
function fnSlide(oBox, aPic,aDot) {
    var oSlide = oBox;
    var num = 0;
    oSlide.timer = setInterval(fnNext, 5000);
    oSlide.mouseover(function () {
        clearInterval(oSlide.timer)
    });
    oSlide.mouseout(function () {
        oSlide.timer = setInterval(fnNext, 5000);
    });
    aDot.click(function () {
        num = $(this).index()
        fnOpacity()
    });
    function fnNext() {
        num++;
        if (num == aPic.length) {
            num = 0;
        };
        fnOpacity();
    }

    function fnPrev() {
        num--;
        if (num < 0) {
            num = aPic.length - 1;
        };
        fnOpacity();
    }

    function fnOpacity() {
        aPic.eq(num).addClass('active').siblings().removeClass('active');
        aDot.eq(num).addClass('active').siblings().removeClass('active');
        aPic.eq(num).stop().animate({opacity: '1'});
        aPic.eq(num).siblings().stop().animate({opacity: '0'});
    }
}
if($(window).width()>960){
	$(window).scroll(function(){
		var oCustomized = $(window).scrollTop();
		// console.log(oCustomized)
		if(oCustomized>864){
			$('.customized_introduce01').addClass('show');

		}
		if(oCustomized>1170 ){
			$('.customized_introduce02').addClass('show');
		}
		if(oCustomized>2164){
			$('.customized_introduce03').addClass('show');
		}
		if(oCustomized>2364){
			$('.customized_introduce04').addClass('show');
		}
	})
}


// 201712  tomtab插件封装
$.fn.Tomtab = function (cbox,citem) {
    var tabswitch = this;
    var tabNum ;
    var tabcont = cbox.children(citem);
    tabswitch.selfclick = function () {
        this.first('li').addClass('active');
        cbox.children(citem).first().addClass('active')
        // console.log(this);
    };
    tabswitch.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        tabNum = $(this).index();
        $(tabcont[tabNum]).addClass('active').siblings().removeClass('active');
    });
    tabswitch.selfclick();
}
//选择器为点击的切换按钮  方法里第一个参数为包裹内容的大容器，第二个参数为选项卡内容的类名
$('.customized_tab_btn li').Tomtab($('.customized_tab_content'),'.customized_tab_item');

$(function(){
    var CountBoxHeight = $('#CountBox').offset().top;
    var number_01 = 10;
    var number_02 = 100000;
    var number_03 = 200;
    $(window).on('scroll',function(){
        var $t = $(this);
        if(($(document).scrollTop()>=(CountBoxHeight-300))){
            $('#xmjy').prop('number',0).animateNumber({number:number_01},1000);
            $('#xmjy').html(number_01);
            $('#hzkh').prop('number',0).animateNumber({number:number_02},3000);
            $('#hzkh').html(number_02);
            $('#xwgj').prop('number',0).animateNumber({number:number_03},2500);
            $('#xwgj').html(number_03);
            $t.off('scroll');
        }

    });
});