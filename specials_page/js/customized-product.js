/* base on vue2.0
 *
 * 
 * 
 * */
function submodal(){
	var name = $('#clientName'),
		tel = $('#clientTel'),
		com = $('#clientCompany'),
		mail = $('#clientMail');
	var chk = [],
		result = 0;
	var myreg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
    var telreg = /^((1[3-9])+\d{9})$/;
	var showerror = function(msg){//策略
		var $this = this;
		$this.siblings('.cp-modal-error').addClass('active').html(msg);
	}
	if($.trim(name.val())==''){
		showerror.apply(name,['请填写您的名称']);
		chk.push(0);
	}else{
		chk.push(1);
	};
	if(!telreg.test(tel.val())){
		showerror.apply(tel,['请填写您正确格式的手机号码']);
		chk.push(0);
	}else{
		chk.push(1);
	};
	if($.trim(com.val())==''){
		showerror.apply(com,['请填写您的公司名称']);
		chk.push(0);
	}else{
		chk.push(1);
	};
	if(!myreg.test(mail.val())){
		showerror.apply(mail,['请填写您正确格式的邮箱地址']);
		chk.push(0);
	}else{
		chk.push(1);
	};
	for(x in chk){
		if(!chk[x]){
			return false;
		}else{
			result = 1;
		}
	};
	if(!!result){
		alert('shangchuan')
	}
	
}



function subcheck(obj,id){
	var t = $(obj),
		list = t.parents('ul'),
		item = list.children('li'),
		m = list.find('[name="material"]'),
		ch = [],
		base = {t:'',value:0},
		listarr = [],
		num = list.find('[name="cart_quantity"]');
	var reg = /^[0-9]{1,}$/;
	var bg = "<div class='zt_backdrop'></div>";
	var pushin = function(x,y){
		base.t = x || '';
		base.value = $.trim(y) || 0;
		listarr.push(base);
		base = {t:'',value:0};	
	};
	if(!reg.test(m.val()) && m.length>0){
		m.siblings('.cp-filter-error').show();return false;
	}else{
		ch.push(1);
	}
	if(!reg.test(num.val())){			
		num.parent('.cp-filter-bottom').siblings('.cp-filter-error').show();return false;
	}else{
		ch.push(1);
	}
	var chn = ch.filter(function(x){
		return x===1;
	})
	if(chn.length===ch.length){
		for(i=0;i<item.length;i++){
			var a = $(item[i]).find('.cp-filter-ln').html();
			var b = $(item[i]).find('.cp-filter-it.choose').html() || $(item[i]).find('.cp-filter-color.choose').children('b').html() || ($(item[i]).find('.cp-filter-length').val() + $(item[i]).find('.cp-filter-unit option:selected').val()) || $(item[i]).find('.cp-filter-select option:selected').val() ||$(item[i]).find('[name="cart_quantity"]').val();
			pushin(a,b);
		}
		vm.modalist = listarr;//赋值给vue渲染		
		$('body').append(bg);
		$('#cpModal').show();
	}else{
		return false;
	}
	
//			alert('提交');	
}
//dom
$(document).on('click','.cp-filter-unit-list li',function(){
	var value = $(this).html();
	$(this).parent('ul').siblings('span').html(value);
});
$(document).on('click','.cp-filter-it,.cp-filter-color',function(){
	$(this).addClass('choose').siblings('span').removeClass('choose');
});
$(document).on('focus','[name="cart_quantity"],[name="material"]',function(){
	$(this).parents('.cp-filter-v').find('.cp-filter-error').hide();
});
$(document).on('focus','.cp-modal-input input[type="text"]',function(){
	$(this).siblings('.cp-modal-error').removeClass('active').html('');
})
$(document).on('click','.cp-modal-head span',function(){
	vm.modalist = [];//清空vue数组中的数据
	$('body .zt_backdrop').remove();
	$('#cpModal').hide();			
});
$(document).on('click','.cp-filter-select,.cp-filter-unit',function(){
	$(this).children('.cp-filter-unit-list').toggle();
});
$(document).on('click','.cp-list-left dd',function(){
	$(this).addClass('active').siblings('dd').removeClass('active');
})
