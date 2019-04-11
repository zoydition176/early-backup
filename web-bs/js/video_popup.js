//移除状态判断
var backdrop = "<div class='zt_backdrop'></div>"
//	backdrop +=""
var ver = '0.0.1'
$('[data-target]').click(function(){
	var $e = $(this);
	var a = $e.attr('data-target');
	var sw = $e.attr('status')
    $('#'+a).fadeIn();
    $('.zt_popup').not($('#'+a)).hide();
    $('body').append(backdrop);
	console.log(a);		
})
$('[data-shut]').click(function(){
	var $e = $(this);
	var a = $e.attr('data-shut');
	$('#'+a).fadeOut();
	$('#'+a).find('input[type="text"],input[type="password"],input[type="file"]').attr('value','');
    $('#'+a).find('textarea').val('');
	$('body .zt_backdrop').remove();
//	$('[data-target='+a+']').attr('status','false');
});
function ztalert(message,title,e,id) {
    var zt = '<div class="zt_popup" id="'+id+'"><h3>'+title+'<span data-shut="'+id+'"></span></h3>';
    zt += '<div class="zt_popup_body">'+message+'<div class="zt_popup_btnset"><span><a class="zt_01" data-shut="'+id+'">'+e+'</a></span></div></div>';
    zt += '</div>';
    $('body').append(backdrop);
    $('body').append(zt);
}


//2018 tom
$.fn.jumpout = function(obj){
//	if (arguments.length === 0) {
//      alert('抱歉，未传入参数');
//      return false;
//  }
//	console.log(typeof(arguments[0]));
	if(typeof(arguments[0])!='string'){
		console.log('no good');
		
	}

	
    console.log('123');

};
