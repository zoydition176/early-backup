/*
 *  盒子随屏幕下拉插件  $(...).fixBlock('top') 暂时只写了紧贴上方的方法
 * */
var fixBlock = function($){
	var boxSlide = function(el,type){
		var base = this;
			base.$el = $(el);
			base.screenHeight = $(window).scrollTop();
			base.type = '';
		var ClS = 'active';
		var cH = base.$el.length>0 ? base.$el.offset().top : 0;			
		base.init = function(){
			base.type = type;
			if(base.type==='top'){
				base.screenHeight > cH ? base.$el.addClass(ClS) : base.$el.removeClass(ClS);
				$(window).on('scroll',function () {
			        var wh = $(this).scrollTop();
			        if(wh>cH){
			        	base.$el.addClass(ClS);
			        }else{
			        	base.$el.removeClass(ClS);
			        }
			    });
			}
		}
		base.init();
	}
	$.fn.fixBlock = function(type){
		return this.each(function(){
			new boxSlide(this,type)
		})
	}
}($)

