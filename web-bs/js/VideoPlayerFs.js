$(function () {
	    	var $vobj = $('#vj video');
	        var vdom = $vobj[0];
	        var $vbar = $('#vj .zvj-control-progress em');
	        var vbar = $vbar[0];	        
	        var t = vdom.duration;
	        
	        
	    	TomVideoPlayer = {
	    		init:function(){
	    			
	    		},
	    		ControlGroup:function(){
	    			//        播放与暂停
	    			$('.zvj-control-btnplay').on('click',function(){
	    				if($(this).hasClass('active')){
	    					vdom.pause();
	    					$(this).removeClass('active');
	    					console.log(vdom.currentTime);
	    				}else{
	    					vdom.play();
	    					$(this).addClass('active');
	    				}	    				
	    			});
	    			$vobj.on('pause',function () {
		                console.log(vdom.currentTime);
		
		            });
	    		
	    			
	    			
	    			
	    			
	    			
	    			//        监听媒体dom时间轴的变化
		        	vdom.ontimeupdate = function () {
		    		//        ontimeupdate方法监听了currenttime返回值发生改变的时候触发该事件
			            var curt= changeTime(vdom.currentTime);			            
			            var bfb = (vdom.currentTime/vdom.duration).toFixed(3);
			            console.log(vdom.currentTime)
			            window.VprogressPercent = bfb;	            
			            $('.zvj-control-progress i').css('width',bfb*100 + '%');
			            $('#vj .zvj-control-stime').html(curt);			            
			        }; 
			        vdom.oncanplay = function(){
			        	var vobj = document.getElementById('video').duration;
			        	var allt = changeTime(vobj);
			        	$('#vj .zvj-control-etime').html(allt);
			        }
			        
			        $('body').on('click','.zvj-control-progress',function(e){
			        	var wt = $(this).width();
			        	var x = e.offsetX;
			        	var duration = vdom.duration;
			        	window.VprogressPercent = (x/wt).toFixed(3);        	
			        	vdom.currentTime = duration * window.VprogressPercent;
			        	$(this).find('i').css('width',((x/wt)*100)+'%');				        	
			        });
			        
			        
			        vbar.onmousedown = function(e){
			        	$('.zvj-control-progress').stopPropagation();//阻止事件冒泡
			        	vdom.pause();//鼠标点上去之后视频先暂停
			        	$('.zvj-control-btnplay').removeClass('active');
			        	var e = e || window.e;//浏览器兼容
			        	var dragL = e.clientX;//当前触发对象X轴
			        	a = this.offsetLeft;
			        	var barL = $('.zvj-control-progress .progress-wrap').offset().left;
			        	xds = dragL - barL;//相对于进度条偏移量
			        	document.onmousemove = function(e){
			        		var e = e || window.e;//浏览器兼容
			        		var mouseX = e.clientX;
			        		var dis = $('.zvj-control-progress .progress-wrap').width();
			        		var currentX = (mouseX - barL)/dis;		
			        		var duration = vdom.duration;

							if(mouseX<barL){
			        			currentX = 0;
			        			vdom.currentTime = (duration * currentX).toFixed(3);
				        		console.log(currentX*100 + 'a');
				        		$('.zvj-control-btnplay').addClass('active');
//				        		vdom.play();
			        		}else if(mouseX>=barL && mouseX<=(barL+dis)){
			        			vdom.currentTime = (duration * currentX).toFixed(3);
				        		console.log(currentX*100 + 'b');
				        		$('.zvj-control-btnplay').addClass('active');
//				        		vdom.play();
			        		}else{
			        			currentX = 1;
			        			vdom.currentTime = (duration * currentX).toFixed(3);
				        		console.log(currentX*100 + 'b');
				        		$('.zvj-control-btnplay').addClass('active');
//				        		vdom.play();
			        		}
			        		
			        		
			        		$vbar.parent('i').css('width',currentX*100 + '%');
			        	}
			        	

			        }
		        	document.onmouseup = function(e){
		        		var e = e || window.e;//浏览器兼容
		        		var mouseX = e.clientX;
		        		document.onmousemove = null;		        	
		        	}
			        
			        
		       
			       
			        $('.zvj-control-fulls').on('click',function(){
	        		//        全屏
			        	if(!document.webkitIsFullScreen){
			        		vdom.webkitRequestFullScreen();
			        	}else{
			        		vdom.webkitCancelFullScreen();
			        	}	        	
			        })
			        
			        
			        $('.zvj-control-sound').on('click',function(){
			        	//音量开关
			        	if(vdom.muted){
			        		vdom.muted = false;
			        		$(this).removeClass('forbid');
			        		$(this).next('.zvj-control-volume').removeClass('forbid');
			        		//打开声音
			        	}else{
			        		vdom.muted = true;
			        		$(this).addClass('forbid');
			        		$(this).next('.zvj-control-volume').addClass('forbid');
			        		//静音
			        	}
			        });
			        
			        
			        $('.zvj-control-volume').on('click',function(e){
			        	var wt = $(this).width();
			        	var x = e.offsetX;
			        	$(this).find('i').css('width',((x/wt)*100)+'%');
			        	window.VvolumePower = (x/wt).toFixed(1);
			        	vdom.volume = window.VvolumePower;
			        	console.log(x+'+'+wt);
			        });
			        	//传入秒数  返回一个时间格式的字符串
			        var changeTime = function(num){
			        	if(typeof(num) == 'number'){
			        		var min = parseInt(num/60);
			        		var sec = parseInt(((num/60) - min)*60);
			        		return NumSet(min)+":"+NumSet(sec);      		
			        	}else{
			        		alert('错误：传入值必须为纯数字！')
			        	}
			        }
					var NumSet = function(n){
						if(n>=1&&n<10){
							n = '0'+parseInt(n);
							return n;
						}else if(n>=10){
							n =parseInt(n); 
							return n;
						}else if(n<1){
							n = '0'+parseInt(n);
							return n;
						}
					}
	    			
	    			
	    		}
	    	}
	    	TomVideoPlayer.ControlGroup();

	        
	        	        

	        
	    });
	    



(function($,window){
	var TomVideoPlay = function(){
		
		var changeTime = function(num){
	    	if(typeof(num) == 'number'){
	    		var min = parseInt(num/60);
	    		var sec = parseInt(((num/60) - min)*60);
	    		return NumSet(min)+":"+NumSet(sec);      		
	    	}else{
	    		alert('错误：传入值必须为纯数字！')
	    	}
	    }
		var NumSet = function(n){
			if(n>=1&&n<10){
				n = '0'+parseInt(n);
				return n;
			}else if(n>=10){
				n =parseInt(n); 
				return n;
			}else if(n<1){
				n = '0'+parseInt(n);
				return n;
			}
		}
		
		
		
	}
})($,window);
