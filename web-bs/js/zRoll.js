/*demo
	<div id="scrollwrap">  最外层必须要的id scrollwrap
		<ul class="zRollwrap"> 必须要的class  zRollwrap
			<li class="zRollist"> 滚动的对象必须要的class zRollist 
				<img src="img/data_center_cabling_04.jpg"/>
			</li>
			<li class="zRollist">
				<img src="img/data_center_cabling_05.jpg"/>
			</li>
			<li class="zRollist">
				<img src="img/data_center_cabling_06.jpg"/>
			</li>
			<li class="zRollist"> 
				<img src="img/data_center_cabling_07.jpg"/>
			</li>
		</ul>
	</div>
	引用完之后调用   var roll = new zRoll('#scrollwrap',2000)
*/ 

(function(){
	var zRoll = function(obj,speed){
		var o = $(obj);
		var oul = $(obj).find('.zRollwrap');
		var olist = $(obj).find('.zRollwrap').html();
		var sh = $('#scrollwrap').height();
		oul.addClass('rolling').html(olist+olist);
		var roll = function(){
			var h = ($(obj).find('.zRollist').height()+20)*$(obj).find('.zRollist').length;
			var a = ($(obj).find('.zRollwrap').css('top')).replace(/px/,'') - 0;
			var unit = ($(obj).find('.zRollist').height()+20)*1;
			console.log(a+'+'+h/2)
			if((Math.abs(a))>=(h/2)){
				oul.css({'top':'0'});
			}else{
				oul.animate({
					top:'-='+unit+'px'
				},500);
			}					
		};
		
		o.on('mouseover',function(){
			clearInterval(timer);
		});
		o.on('mouseout',function(){
			if(o.find(":animated").length == 0){
				timer = setInterval(roll,speed);
			}
		});
		if(o.find(":animated").length == 0){
			var timer = setInterval(roll,speed);
		}
	}
	window.zRoll = zRoll;
})();

(function(){
	var zRollc = function(obj,param){
		var o = $(obj);
		var oul = $(obj).find('.zRollwrap');
		var olist = $(obj).find('.zRollwrap').html();
		var sh = $('#scrollwrap').height();
		var speed = param.speed,
			itemN = param.items,
			moveitem = param.moveitem,
			spacing = param.spacing;
		oul.addClass('rolling').html(olist+olist);
		var roll = function(){
			var h = ($(obj).find('.zRollist').height()+spacing)*$(obj).find('.zRollist').length;
			var a = ($(obj).find('.zRollwrap').css('top')).replace(/px/,'') - 0;
			var unit = ($(obj).find('.zRollist').height()+spacing)*moveitem;
			console.log(a+'+'+h/2)
			if((Math.abs(a))>=(h/2)){
				oul.css({'top':'0'});
			}else{
				oul.animate({
					top:'-='+unit+'px'
				},500);
			}					
		};
		
		o.on('mouseover',function(){
			clearInterval(timer);
		});
		o.on('mouseout',function(){
			if(o.find(":animated").length == 0){
				timer = setInterval(roll,speed);
			}
		});
		if(o.find(":animated").length == 0){
			var timer = setInterval(roll,speed);
		}
	}
	window.zRollc = zRollc;
})();