(function(window){
	//显示密码  原生js规避jq版本不兼容问题
	window.onload=function(){
		var obj_arr = document.getElementsByClassName('psw-eyes');
	    for(i=0;i<obj_arr.length;i++){
	        obj_arr[i].addEventListener('click',function () {
	            var inputobj = this.parentNode.children;
	            if(inputobj[0].type == 'password'){
	                inputobj[0].type = 'type';
	                addClass(this,'active');
	            }else{
	                inputobj[0].type = 'password';
	                removeClass(this,'active');
	            }
	        });
	    }
	    function hasClass(obj,cls) {
	        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    }
	    function addClass(obj,cls) {
	        if (!hasClass(obj,cls)) {
	            obj.className += " " + cls;
	        }
	    }
	    function removeClass(obj,cls) {
	        if (hasClass(obj,cls)) {
	            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	            obj.className = obj.className.replace(reg,'');
	        }
	    }
	} 
})(window)