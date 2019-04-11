(function(){
	var zValidate = function(params){
		var strategy = {//策略类
			isMobile:function(mobile,message){
				var regu = /^\d{11}$/;
				var re = new RegExp(regu);
				if (!re.test(mobile)) {
					$(this).next('.alert').html(message);
					return message;
				}				
			},
			isEmail:function(email,message){
				var reg=/^[0-9a-zA-Z_\-\.]{1}\**@\w+([-.]\w+)*\.\w+([-.]\w+)*(\s*$)/;
			   	if(!reg.test(email)){
			   		$(this).next('.alert').html(message);
			   		return message;
			   	}
			},
			notEmpty:function(v,message){
				if(!($.trim(v))){
					return message;
				}
			}
		}
		this.strategy = strategy;
		this.arrMetheds = [];
		console.log(params);
//		for()
		
	}
	window.zValidate = zValidate;
	
	
})()
