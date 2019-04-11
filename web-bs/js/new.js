function show_qa_all_answers(_this, question_id, type) {
	var cache_this = $(_this);
	if(type == 'less') {
		cache_this.parents('.answer_block').find('dd:gt(0)').slideUp();
		cache_this.attr('onclick', 'show_qa_all_answers(this,' + question_id + ',\'more\')');
		cache_this.next().removeClass('active');
	} else if(type == 'more') {
		cache_this.parents('.answer_block').find('dd').slideDown();
		cache_this.attr('onclick', 'show_qa_all_answers(this,' + question_id + ',\'less\')');
		cache_this.next().addClass('active');
	} else if(type == 'ajax_more') {
		$.ajax({
			type: "POST",
			url: "index.php?main_page=customer_QA&action=get_all_answers",
			data: {
				'question_id': question_id
			},
			dataType: "json",
			success: function(reponse) {
				if(reponse.status == '1') {
					cache_this.parents('.answer_block').html(reponse.data);
				} else {
					sweetAlert(reponse.info, "", "error");
				}
			}
		});
	}
}

function show_more_questions() {
	$.ajax({
		type: "POST",
		url: "index.php?main_page=customer_QA&action=get_more_questions",
		data: {
			'products_id': products_id,
			'page': QA_page
		},
		dataType: "json",
		success: function(reponse) {
			if(reponse.status == '1') {
				if(reponse.data.is_show_more == '0') {
					$('#show_more_questions').hide();
				}
				$('#QA_ul').append(reponse.data.content);
				QA_page++;
			} else {
				sweetAlert(reponse.info, "", "error");
			}
		}
	});
}
$(function() {
	var current_part = window.location.hash;
	if(current_part == '#QA') {
		setTabNew('one', 7, 9, setTabNewOne7);
		var Menubox = $('.Menubox').offset().top + 48;
		$('html,body').animate({
			scrollTop: Menubox
		}, 1000);
		$('.Menubox ul li').each(function() {
			$(this).removeClass('hover');
		})
		$('#one7').addClass('hover');
		$('.product_tab01_ul li').each(function() {
			$(this).removeClass('active');
		})
		$('#ones7').addClass('active');
	}
	var oPlaceholder = new String();
	$('input,textarea').on('focus', function() {
		oPlaceholder = $(this).attr('placeholder')
		$(this).attr('placeholder', "");
	});
	$('input,textarea').on('blur', function() {
		$(this).attr('placeholder', oPlaceholder);
		oPlaceholder = "";
	});
	$('.show_QA_ask_window').click(function() {
		var oTop = $(window).scrollTop();
		var wiDth = $('body').width();
		if(wiDth <= 480) {
			$('#have_question').css('position', 'absolute');
			$('#have_question').css('top', '0');
		} else {
			$('#have_question').css('top', oTop + 20);
		}
		$('.ui-widget-overlay,#question').show();
		$('.error_prompt').hide();
		$("#qa_sort").val("");
		$("#qa_question_content").val("");
		$("#qa_email").val("");
		$("#qa_nickname").val("");
		$('#is_send_email').attr('checked', 'checked');
	})
	QA_ask_valide['errorPlacement'] = validateShowError1;
	$('#QA_ask_form').validate(QA_ask_valide);
	$("#q_submit").click(function() {
		if($('#QA_ask_form').valid()) {
			var type = $.trim($("#qa_type").val()).replace("'", "鈥�");
			var question_content = $.trim($("#qa_question_content").val()).replace("\'", "鈥�");
			var email = $.trim($("#qa_email").val()).replace("\'", "鈥�");
			var nickname = $.trim($("#qa_nickname").val()).replace("\'", "鈥�");
			var is_send_email = -1;
			if($("#is_send_email").is(':checked')) {
				is_send_email = 1;
			}
			$.ajax({
				type: 'POST',
				url: 'index.php?main_page=customer_QA&action=customer_qa',
				dataType: "json",
				async: true,
				data: {
					'type': type,
					'question_content': question_content,
					'email': email,
					'nickname': nickname,
					'products_id': products_id,
					'is_send_email': is_send_email,
				},
				beforeSend: function() {
					$('#q_submit').val(submit_str + '...').addClass('button_gey').attr('disabled', 'disabled');
				},
				success: function(reponse) {
					$('.ui-widget-overlay,#question,#have_question').hide();
					if(reponse.status == '1') {
						$('#q_submit').val(submit_str).removeClass('button_gey').removeAttr('disabled');
						swal({
							type: "success",
							text: reponse.info,
							showCloseButton: true,
							showConfirmButton: false,
							timer: 3000
						});
					} else {
						sweetAlert(reponse.info, "", "error");
						$('#q_submit').val(submit_str).removeClass('button_gey').removeAttr('disabled');
					}
				},
				error: function() {
					$('.ui-widget-overlay,#question').hide();
					sweetAlert(reponse.info, "", "error");
					$('#q_submit').val(submit_str).removeClass('button_gey').removeAttr('disabled');
				}
			});
			return false;
		}
	});
});
$(document).ready(function() {
	var imgSizes = {};
	var iamge_num;
	var wid = document.body.clientWidth;
	$(document).ready(function() {
		if(wid < 1200) {
			iamge_num = 4
		} else {
			iamge_num = 5
		}
	});
	$(window).resize(function() {
		var wd = document.body.clientWidth;
		if(wd > 1200) {
			iamge_num = 5
		} else {
			iamge_num = 4
		}
	});

	function loadingImg(obj) {
		var img = new Image();
		img.onload = function() {
			img.onload = null;
			if(imgSizes["xlarge"]) {
				new Image().src = obj.attr("href").replace("/" + imgSizes["normal"] + "/", "/" + imgSizes["xlarge"] + "/")
			}
		};
		img.src = obj.attr("href")
	}
	$.fn.infiniteCarousel = function(options) {
		var $me = $(this),
			me = this;
		this.sets = {
			show: iamge_num,
			start: 0,
			left: 0,
			dis: 270,
			end: 0,
			now: 0,
			width: 64,
			time: 1000
		};
		if(options) {
			$.extend(me.sets, options)
		}
		this.setPage = function(n) {
			var _n = $("img", this).size();
			if(iamge_num < _n) {
				me.sets.end += n * me.sets.show;
				if(me.sets.end < 0) {
					me.sets.end = me.sets.end + _n
				} else {
					if(me.sets.end >= _n) {
						me.sets.end = me.sets.end - _n
					}
				}
				me.setLocation(n);
				me.mov(n)
			}
		};
		this.copyHtml = function() {
			var _li = me.sets.show - $("img", this).size() % me.sets.show;
			for(var i = 0; i < _li; i++) {
				$("ul", this).append($("li", this).eq(i).clone().removeClass().attr({
					"clone": true
				}))
			}
			for(var r = 0; r < me.sets.show; r++) {
				$("li", this).eq(r).css({
					left: r * me.sets.width
				}).attr({
					"list": r
				}).show()
			}
		};
		this.setLocation = function(n) {
			var t = 0;
			var _m = me.sets.end + (iamge_num - me.sets.show);
			$("li", this).attr({
				"list": ""
			});
			for(var p = me.sets.end; p < me.sets.end + iamge_num; p++) {
				var x = p;
				if(x >= $("img", this).size()) {
					x = p - $("img", this).size()
				}
				$("li", this).eq(x).attr({
					"list": p - me.sets.end
				})
			}
			for(var i = _m; i < (parseInt(_m) + parseInt(me.sets.show)); i++) {
				var z = i;
				if(z >= $("img", this).size()) {
					z = i - $("img", this).size()
				}
				$("li", this).eq(z).css({
					left: t * me.sets.width - me.sets.left + n * (me.sets.show * me.sets.width) + (iamge_num - me.sets.show) * me.sets.width
				}).show();
				t++
			}
		};
		this.mov = function(n) {
			me.sets.start += n;
			me.sets.left = parseInt($("ul", this).css("left")) - n * (me.sets.show * me.sets.width);
			$("ul", this).animate({
				left: me.sets.left + "px"
			}, me.sets.time)
		};
		if($("img", this).size() > me.sets.show) {
			me.copyHtml()
		} else {
			$("li", this).each(function(n) {
				$(this).css({
					left: n * me.sets.width
				}).show()
			})
		}
		$("a.pre", this).click(function() {
			me.sets.show = iamge_num;
		});
		$("a.nex", this).click(function() {
			me.sets.show = iamge_num;
		});
		$("li a", this).click(function() {
			if($('.widget li a').length <= 5) {
				$('.widget').css({
					'left': 0
				})
			} else if(Math.abs(parseInt($('.widget').css('left'))) >= ($('.widget').width() - (54 * 5 + 5 * 10) + 10)) {
				$('.widget').css({
					'left': -($('.widget').width() - (54 * 5 + 5 * 10) + 10)
				})
			} else {
				$('.widget').stop().animate({
					left: parseInt($('.widget').css('left')) - (54 + 10)
				}, 150)
			}
			if($(this).parent().hasClass("current")) {
				return false
			}
			$("#w-featurePics a").removeAttr("href");
			loadingImg($(this));
			if($(this).parent().next().find("a")[0]) {
				loadingImg($(this).parent().next().find("a"))
			}
			var href = $(this).attr("data-normal");
			if(href) {
				$("#img_loading").show();
				$("#w-featurePics a > img").preLoad({
					"src": href,
					success: function() {
						$("#w-featurePics > a").attr("href", href.replace("images/" + imgSizes["normal"] + "/", litb.siteWater + "images/" + imgSizes["large"] + "/"));
						$("#img_loading").hide()
					}
				})
			} else {
				$.ajax({
					type: "POST",
					dataType: "html",
					url: "ajax_process_products_info_images.php",
					data: "tag=" + $(this).attr("tag"),
					success: function(href) {
						$("#w-featurePics a > img").preLoad({
							"src": href,
							success: function() {
								$("#w-featurePics > a").attr("href", href.replace("images/" + imgSizes["normal"] + "/", litb.siteWater + "images/" + imgSizes["large"] + "/"))
							}
						})
					}
				})
			}
			$("li", me).removeClass();
			$(this).parent().addClass("current");
			return false
		})
	};
	$("#w-prodtViewAll").infiniteCarousel();
	(function prodImageScrollList() {
		$("#w-featurePics").click(function() {
			var thumblists = [],
				images = [];
			$("#w-prodtViewList li a").each(function() {
				if(!$(this).parent().attr("clone")) {
					images.push($(this).attr("data-normal").replace("images/" + imgSizes["normal"] + "/", litb.siteWater + "images/" + imgSizes["large"] + "/"));
					thumblists.push($(this).attr("href").replace("images/" + imgSizes["normal"] + "/", "images/" + imgSizes["small"] + "/"))
				}
			});
			if(window.innerWidth > 960) {
				var win = new NormalPopup({
					width: 840,
					height: 660,
					imgWidth: 500,
					imgHeight: 600,
					thumbWidth: 60,
					thumbDim: {
						width: 54,
						height: 54
					},
					title: $("a", this).attr("title"),
					specialStyle: ["prodtViewspecial", 640, 620, 210],
					imageUrl: $("a", this).attr("href"),
					thumblists: thumblists,
					images: images
				})
			} else {
				var win = new NormalPopup({
					width: "100%",
					height: "100%",
					imgWidth: "100%",
					imgHeight: "100%",
					thumbWidth: 60,
					thumbDim: {
						width: 54,
						height: 54
					},
					title: $("a", this).attr("title"),
					specialStyle: ["prodtViewspecial", "100%", 620, 210],
					imageUrl: $("a", this).attr("href"),
					thumblists: thumblists,
					images: images
				});
				$("body").css("overflow-x", "hidden");
				$("body").css("overflow-y", "hidden")
			}
			win.show();
			return false
		})
	})();
	$("#w-prodtViewList li a").each(function(n) {
		if(n < 2) {
			loadingImg($(this))
		}
	})
	fnShop($('.widget'), $('.widget li'), $('.pre'), $('.nex'))

	function fnShop(oBox, oLi, oPrev, oNext) {
		var oWidth = oLi.width();
		var oLength = oLi.length;
		oBox.css({
			'width': (oWidth + 10) * oLength - 10
		})
		oLi.eq(oLi.length - 1).css({
			'margin-right': 0
		})
		var LastLeft = oBox.width() - (oWidth * 5 + 5 * 10)
		oLi.click = function() {
			if(oLi.length <= 5) {
				oBox.css({
					'left': 0
				})
			} else if(Math.abs(parseInt(oBox.css('left'))) >= (oBox.width() - (54 * 5 + 5 * 10) + 10)) {
				oBox.css({
					'left': -(oBox.width() - (54 * 5 + 5 * 10) + 10)
				})
			} else {
				oBox.stop().animate({
					left: parseInt(oBox.css('left')) - (54 + 10)
				}, 150)
			}
		}
		oNext.click(function() {
			console.log(Math.abs(parseInt(oBox.css('left'))), oBox.width() - Math.abs(parseInt(oBox.css('left'))) - (oWidth * 5 + 5 * 10))
			if(oLi.length <= 5) {
				oBox.css({
					'left': 0
				})
			} else if(oLi.length < 10) {
				oBox.stop().animate({
					left: -(oBox.width() - (oWidth * 5 + 5 * 10) + 10)
				});
				console.log(oBox.width() - (oWidth * 5 + 5 * 10));
			} else if(Math.abs(parseInt(oBox.css('left'))) > oBox.width() - Math.abs(parseInt(oBox.css('left'))) - (oWidth * 5 + 5 * 10)) {
				oBox.stop().animate({
					left: -(LastLeft + 10)
				})
			} else {
				oBox.stop().animate({
					left: parseInt(oBox.css('left')) - (oWidth * 5 + 5 * 10)
				})
			}
		});
		oPrev.click(function() {
			if(Math.abs(parseInt(oBox.css('left'))) < oWidth * 5 + 5 * 10) {
				oBox.stop().animate({
					left: 0
				})
			} else {
				oBox.stop().animate({
					left: parseInt(oBox.css('left')) + (oWidth * 5 + 5 * 10)
				})
			}
		})
	}
})

function externallinks() {
	var anchors = document.getElementById("products_tab_description").getElementsByTagName("a");
	for(var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		if(anchor.getAttribute("href")) {
			anchor.target = "_blank"
		}
	}
}
window.onload = externallinks;

function pre_pic(rid) {
	var pic = (rid - 1);
	if($("#basic-modal-content_reviews_" + pic).length == 0) {
		return false;
	}
	$('#basic-modal-content_reviews_' + pic).show();
	$('#basic-modal-content_reviews_' + rid).hide();
}

function next_pic(rid) {
	var pic = (rid + 1);
	if($("#basic-modal-content_reviews_" + pic).length == 0) {
		return false;
	}
	$('#basic-modal-content_reviews_' + pic).show();
	$('#basic-modal-content_reviews_' + rid).hide();
}
$(function() {
	for(var i = 0; i < 5; i++) {
		$(".p_06").eq(i).show();
	}
	if($(".p_06").length > 5) {
		$(".P_06_morebtn").show();
	} else {
		$(".P_06_morebtn").hide();
	}
	$(".new_page").hide();
	$('.review_pic').live('click', function() {
		if($(this).children('ul').children('li').length <= 1) {
			$('.n_prev').hide()
			$('.n_next').hide()
		} else {
			$('.n_prev').show()
			$('.n_next').show()
		}
	})
});

function click_more(itotal, ptotal) {
	var num = 10;
	for(var i = 0; i < 5; i++) {
		$(".p_06").eq(i + 5).show();
	}
	$(".P_06_morebtn").hide();
	if(ptotal != 1) {
		$(".new_page").show();
	} else {
		$(".new_page").hide();
	}
}

function share_to(id) {
	$.ajax({
		type: "POST",
		url: "ajax_review_page.php?request_type=share_reviews",
		data: "&rid=" + id,
		success: function(data) {
			$('#share1').html(data);
		},
	});
	$('#share1,.ui-widget-overlay,#review_share').show();
}

function share_clo() {
	$('#share1,.ui-widget-overlay,#review_share').hide();
}

function show_hide_compatible(id) {
	if($("#platform_support1_" + id).is(":hidden")) {
		$("#platform_support1_" + id).slideDown();
		$("#platform_support2_" + id).slideDown();
		$("#platform_support_sh_" + id).addClass('sidebar_more');
		$("#platform_support_sh_" + id).html(FS_LESS);
	} else {
		$("#platform_support1_" + id).slideUp();
		$("#platform_support2_" + id).slideUp();
		$("#platform_support_sh_" + id).removeClass('sidebar_more');
		$("#platform_support_sh_" + id).html(FS_MORE);
	}
}
$("#lenths").change(function() {
	var url = $("#lenths").val();
	location.href = url;
});
$("#cart_form").submit(function() {
	$('#add_to_cart').attr('disabled', true);
	$('#add_to_wishlist').attr('disabled', true);
	var error = false;
	if($('.attr_input').length) {
		$('.attr_input').each(function() {
			if(2 > $(this).val().length) {
				error = true;
				if(1 > $(this).siblings('span').length) {
					$(this).focus().after(' <span> * ' + REQUIRED + '</span>');
				}
			}
		});
	}
	if($('.attr_input_1').length) {
		$('.attr_input_1').each(function() {
			if(2 > $(this).val().length) {
				error = true;
				if(1 > $(this).siblings('span').length) {
					$(this).focus().after(' <span> * ' + REQUIRED + '</span>');
				}
			}
		});
	}
	if(!parseInt($("#cart_quantity").val())) {
		$("#products_moq").text(MOQ_IS + Moq + UPPER).addClass('moq_alert');
		$("#cart_quantity").css({
			"border": "1px solid #A10000"
		}).val(Moq);
		error = true;
	}
	if(parseInt($("#cart_quantity").val()) <= (parseInt(Moq) - 1)) {
		$("#products_moq").text(MOQ_IS + Moq + UPPER).addClass('moq_alert');
		$("#cart_quantity").css({
			"border": "1px solid #A10000"
		}).val(Moq);
		error = true;
	}
	if(error) {
		$('#add_to_cart').removeClass('contact_button_01').val('Add to Cart').removeAttr('disabled');
		return false;
	}
});

function cart_quantity_change(type) {
	var qty = parseInt($("#cart_quantity").val());
	if(!isNaN(qty)) {
		switch(type) {
			case 0:
				if(Moq != "" && qty == Moq) {
					$("#products_moq").text('This products the MOQ is ' + Moq + ', NO upper limit').addClass('moq_alert');
					$("#cart_quantity").css({
						"border": "1px solid #A10000"
					}).val(Moq);
				} else {
					if(qty >= 2)
						$("#cart_quantity").val(qty - 1);
					else return false;
				}
				break;
			case 1:
				$("#cart_quantity").val(qty + 1);
				break;
		}
	} else {
		alert(ENTER_NUMBER);
		$("#cart_quantity").val(1);
		return false;
	}
}

function move_cart_quantity_change(type) {
	var qty = parseInt($("#move_cart_quantity").val());
	if(!isNaN(qty)) {
		switch(type) {
			case 0:
				if(Moq != "" && qty == Moq) {
					$("#products_moq").text(MOQ_IS + Moq + UPPER).addClass('moq_alert');
					$("#cart_quantity").css({
						"border": "1px solid #A10000"
					}).val(Moq);
				} else {
					if(qty >= 2)
						$("#move_cart_quantity").val(qty - 1);
					else return false;
				}
				break;
			case 1:
				$("#move_cart_quantity").val(qty + 1);
				break;
		}
	} else {
		alert(ENTER_NUMBER);
		$("#move_cart_quantity").val(1);
		return false;
	}
}

function checkOptions(obj, option_name, option_count) {
	if($("input[name^='" + option_name + "']").filter("input:checked").length > option_count) {
		alert(CHECK_AGAIN);
		$("#" + obj).attr('checked', '');
		return false;
	}
}

function pulling_eye_fun(value) {
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "index.php?modules=ajax&handler=pulling_eye_attribute&ajax_request_action=storeHttpReferers",
		data: "&value=" + value,
		success: function(data) {
			$("#pulling_eye_price").html(data);
		}
	});
}
jQuery.fn.customInput = function() {
	return $(this).each(function() {
		if($(this).is('[type=checkbox],[type=radio]')) {
			var input = $(this);
			var label = $('label[for=' + input.attr('id') + ']');
			input.add(label).wrapAll('<div class="custom-' + input.attr('type') + '"></div>');
			label.hover(function() {
				$(this).addClass('hover');
			}, function() {
				$(this).removeClass('hover');
			});
			input.bind('updateState', function() {
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus');
			}).trigger('updateState').click(function() {
				$(this).trigger('updateState');
			}).focus(function() {
				label.addClass('focus');
				if(input.is(':checked')) {
					$(this).addClass('checkedFocus');
				}
			}).blur(function() {
				label.removeClass('focus checkedFocus');
			});
		}
	});
};
jQuery.fn.customInput3 = function() {
	return $(this).each(function() {
		if($(this).is('[type=checkbox],[type=radio]')) {
			var input = $(this);
			var label = $('label[for=' + input.attr('id') + ']');
			input.add(label).wrapAll('<div class="custom-' + input.attr('type') + '"></div>');
			label.hover(function() {
				$(this).addClass('hover');
			}, function() {
				$(this).removeClass('hover');
			});
			input.bind('updateState', function() {
				$(".lable_color_3").each(function() {
					$(this).removeClass('checked checkedHover checkedFocus');
				});
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus');
			}).trigger('updateState').click(function() {
				$(this).trigger('updateState');
			}).focus(function() {
				label.addClass('focus');
				if(input.is(':checked')) {
					$(this).addClass('checkedFocus');
				}
			}).blur(function() {
				label.removeClass('focus checkedFocus');
			});
		}
	});
};
jQuery.fn.customInput4 = function(n) {
	return $(this).each(function() {
		if($(this).is('[type=checkbox],[type=radio]')) {
			var input = $(this);
			var label = $('label[for=' + input.attr('id') + ']');
			input.add(label).wrapAll('<div class="custom-' + input.attr('type') + '"></div>');
			label.hover(function() {
				$(this).addClass('hover');
			}, function() {
				$(this).removeClass('hover');
			});
			input.bind('updateState', function() {
				$(".lable_color_" + n).each(function(i) {
					if(i > 0) {
						$(this).removeClass('checked checkedHover checkedFocus');
					}
				});
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus');
			})
			input.bind('updateStates', function() {
				$(".lable_color_" + n).each(function() {
					$(this).removeClass('checked checkedHover checkedFocus');
				});
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus');
			}).trigger('updateState').click(function() {
				$(this).trigger('updateStates');
			}).focus(function() {
				label.addClass('focus');
				if(input.is(':checked')) {
					$(this).addClass('checkedFocus');
				}
			}).blur(function() {
				label.removeClass('focus checkedFocus');
			});
		}
	});
};
$(function() {
	$('#show1 input').customInput();
	$('#show2 input').customInput();
	$('#show18 input').customInput();
	$('#show3 input').customInput3();
	for(i = 4; i <= 17; i++) {
		$('#show' + i + ' input').customInput4(i);
	}
	$('.toggle,.c_wavelength').each(function() {
		$('div:first', this).addClass('first');
		$('div:last', this).addClass('last');
	});
	for(i = 4; i <= 17; i++) {
		$('#show' + i).each(function() {
			$('div:first', this).addClass('first');
			$('div:last', this).addClass('last');
		});
	}
});

function set_attribute_others(id, select_id, text_id, brand_attribute_id, brand_attrib_id, display) {
	if($("#" + select_id + " option:selected").text() == 'Others' || $("#" + select_id + " option:selected").text() == 'with pulling eye') {
		$("#" + id).css('display', display);
		$("#" + text_id).attr("class", 'attr_input_1');
		$("#" + brand_attribute_id).css('display', 'none');
		$("#" + brand_attrib_id).val('');
		$("#" + brand_attrib_id).attr("class", 'attr_input_2');
	} else {
		var select_option_value_id = $("#" + select_id).val();
		$.ajax({
			type: "POST",
			url: "?modules=ajax&handler=attribute_brand&ajax_request_action=storeHttpReferers",
			data: "select_option_value_id=" + select_option_value_id,
			dataType: 'html',
			success: function(data) {
				if(data) {
					$("#" + brand_attribute_id).html(data);
				}
			}
		});
		$("#" + id).css('display', 'none');
		$("#" + text_id).val('');
		$("#" + text_id).attr("class", 'attr_input_2');
		if($("#" + select_id + " option:selected").text() == 'Generic') {
			$("#" + brand_attribute_id).css('display', 'none');
			$("#" + brand_attrib_id).val('');
			$("#" + brand_attrib_id).attr("class", 'attr_input_2');
		} else {
			$("#" + brand_attribute_id).css('display', 'block');
			$("#" + brand_attrib_id).attr("class", 'attr_input_2');
		}
	}
}

function add_to_carts(keys_number, retail, categories, current_id) {
	current_id = parseInt(current_id);
	var custom_arr = [1276, 3104];
	if($(":radio[name='id[106]']").length >= 1) {
		if($("input[name='id[106]']:checked").val() >= 1) {} else {
			alert(CHOOSE_WAVELENGTH);
			return false;
		}
	}
	if($(":radio[name='id[722]']").length >= 1) {
		if($("input[name='id[722]']:checked").val() >= 1) {} else {
			alert(CHOOSE_CONNECTOR_A);
			return false;
		}
	}
	if($(":radio[name='id[735]']").length >= 1) {
		if($("input[name='id[735]']:checked").val() >= 1) {} else {
			alert(CHOOSE_CONNECTOR_B);
			return false;
		}
	}
	if($("select[name='id[2]']").val() == 'all') {
		$("#brand_remark").show();
		return false;
	} else {
		$("#brand_remark").hide();
	}
	if($(".attr_input_2").is(':visible')) {
		if($.trim($(".attr_input_2").val()).length == 0) {
			$(".attr_input_2").css('border', '1px solid #a10000');
			return false;
		}
	}
	var oChooseNum;
	for(var i = 0; i < $('.custom_attribute').length; i++) {
		var iNum = 0;
		$('.custom_attribute').eq(i).find('input').each(function() {
			if($(this).attr("type") == "radio" || $(this).attr("type") == "checkbox") {
				iNum++;
			}
		})
		if(iNum) {
			var oCheckNum = 0;
			for(var j = 0; j < $('.custom_attribute').eq(i).find('input').length; j++) {
				if($('.custom_attribute').eq(i).find('input').eq(j).is(':checked')) {
					oCheckNum++;
				}
			}
			if(oCheckNum == 0) {
				$('.custom_attribute').eq(i).find('.product_03_15').css('color', '#333')
				$('#option_remark').show();
				oChooseNum = true;
			} else {
				$('.custom_attribute').eq(i).find('.product_03_15').css('color', '#999');
			}
		}
	}
	if(oChooseNum) {
		return false;
	} else {
		$('#option_remark').hide();
	}
	$('#add_to_cart').addClass('contact_button_01').val(PROCESSING);
	if(categories == 978 || categories == 584) {
		if($("#length_attribute").val() == '') {
			if(Number($("#custom_length").val())) {} else {
				if(!$("#custom_length").val()) {
					$("#custom_length").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val('Add to Cart').removeAttr('disabled');
					return false;
				} else {
					$("#custom_length").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val('Add to Cart').removeAttr('disabled');
					return false;
				}
			}
		}
	} else {
		if(keys_number == 2 || (keys_number == 1 && retail == 0)) {
			if(categories == 573 && $.inArray(country_id, custom_arr) == -1) {
				var the_moq = 'The MOQ is 2KM';
				var length_min = 2;
			} else {
				var the_moq = 'The MOQ is 1KM';
				var length_min = 1;
			}
			if(($("#length_attribute_length").val() == '1m' || $("#length_attribute_length").val() == '1km') && categories == 573 && $.inArray(country_id, custom_arr) == -1) {
				$("#error_text").html(the_moq);
				$("#error_text").css('display', 'inline-block');
				$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
				return false;
			}
			if(($("#length_attribute_length").val() == '1m') && categories == 573 && $.inArray(country_id, custom_arr) > -1) {
				$("#error_text").html(the_moq);
				$("#error_text").css('display', 'inline-block');
				$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
				return false;
			}
			if($("#length_attribute").val() == '') {
				if(Number($("#custom_length").val())) {
					if($("#custom_length").val() < length_min) {
						$("#error_text").html(the_moq);
						$("#error_text").css('display', 'inline-block');
						$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
						return false;
					}
				} else {
					$("#custom_length").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
					return false;
				}
			}
		} else if(keys_number == 4) {
			if($("#length_attribute").val() == '') {
				if(Number($("#custom_length").val())) {
					if($("#custom_length").val() < 10) {
						$("#error_text").html(LENGTH_MUST_10m);
						$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
						return false;
					}
				} else {
					$("#custom_length").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
					return false;
				}
			}
		} else if(keys_number == 5) {
			if($("#length_attribute").val() == '') {
				if(Number($("#custom_length").val())) {
					if($("#custom_length").val() < 100) {
						$("#error_text").html(FS_PRODUCTS_JS_LENGTH_MUST_10M);
						$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
						return false;
					}
				} else {
					$("#custom_length").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
					return false;
				}
			}
		} else {
			if($("#length_attribute").val() == '') {
				if(Number($("#custom_length").val())) {
					var customLen = Number($("#custom_length").val());
					if(current_id == 2875) {
						if(customLen > 100) {
							$("#custom_length").css('border', '1px solid #a10000');
							$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
							return false;
						}
					}
				} else {
					if(!$("#custom_length").val()) {
						$("#custom_length").css('border', '1px solid #a10000');
						$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
						return false;
					} else {
						$("#custom_length").css('border', '1px solid #a10000');
						$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
						return false;
					}
				}
			}
		}
	}
	if($("#select_option_id").val()) {
		if($("#input_option_id").val()) {
			var select_option_id = $("#select_option_id").val();
			var input_option_id = $("#input_option_id").val();
			if($("#attrib-" + select_option_id + " option:selected").text() == 'Others' || $("#attrib-" + select_option_id + " option:selected").text() == 'with pulling eye') {
				if(!$("#attrib-" + input_option_id + "-0").val()) {
					$("#attrib-" + input_option_id + "-0").css('border', '1px solid #a10000');
					$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
					return false;
				}
			}
		}
	}
	if($('#inner_hole_size option:selected').text() == '128um (MOQ:100pcs)' || $('#inner_hole_size option:selected').text() == '129um (MOQ:100pcs)') {
		if($("#cart_quantity").val() < 100) {
			$("#MOQ").html('&nbsp;&nbsp;' + LENGTH_MUST_PCS);
			$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
			return false;
		}
	} else {}
	var act = $("input[name='UPLOAD_PREFIX1']").val();
	var upload_picture = $("#attrib-" + act + "-0").val();
	if(upload_picture) {
		var str = upload_picture.substring(upload_picture.length - 3);
		if(str == 'jpg' || str == 'gif' || str == 'png') {
			return true;
		} else {
			alert('Please upload pictures!!!');
			return false;
		}
	}
	var outer_jacket = $("#outer_jacket option:selected").text();
	if(outer_jacket.indexOf("Quotation") > 0) {
		location.href = 'index.php?main_page=live_chat_service';
		return false;
	}
}
$(document).ready(function() {
	if($("#breakout_leg_length option").size()) {
		for(var i = 4; i <= $("#breakout_leg_length option").size() - 1; i++) {
			$("#breakout_leg_length option[index=" + i + "]").attr("disabled", true);
		}
	}
});

function custom_select(product_id) {
	$('#add_to_cart').removeClass('contact_button_01').val(ADD_TO_CART).removeAttr('disabled');
	if($('#length option:selected').text() == '1m' || $('#length option:selected').val() == '') {
		if($("#breakout_leg_length option").size()) {
			for(var i = 4; i <= $("#breakout_leg_length option").size() - 1; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", true);
			}
		}
	} else if($('#length option:selected').text().substr(0, 2).replace(/m/, "") == '3') {
		if($("#breakout_leg_length option").size()) {
			for(var i = 27; i <= $("#breakout_leg_length option").size() - 1; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", true);
			}
			for(var i = 0; i <= 26; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", false);
			}
		}
	} else {
		if($("#breakout_leg_length option").size()) {
			for(var i = 0; i <= $("#breakout_leg_length option").size() - 1; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", false);
			}
		}
	}
	if($("#length").val()) {
		$("#custom_text").css("display", "none");
		$("#custom_price").css("display", "none");
		$("#error_text").css("display", "none");
		$("#error_text").html("");
		$.ajax({
			type: "POST",
			url: "ajax_process_custom_length.php?type=length_update",
			data: "products_id=" + product_id + "&length=" + $("#length").val(),
			dataType: 'html',
			success: function(data) {
				if(data != 'err') {
					$("#productsbaseprice").html(data);
					$("#products_base_price_per_meter").html('');
				}
				_act();
				custom_fiber_count(product_id);
			}
		});
	} else {
		$("#error_text").css("display", "none");
		$("#error_text").html("");
		$("#custom_text").css("display", "inline-block");
		$("#custom_price").css("display", "none");
		$("#custom_length").val('');
	}
}

function custom_fiber_count(product_id) {
	var fiber_type = $("#fiber_type option:selected").text();
	var fiber_count = $("#fiber_count option:selected").text();
	var length = $("#length option:selected").text();
	if(length != '1m' && fiber_type && fiber_count) {
		var fiber_count = Number(fiber_count.replace(/Fibers/g, ''));
		if(length == 'Custom') {
			length = $("#custom_length").val();
		} else {
			length = length.split("km");
			length = Number(length[0]);
		}
		if(fiber_type && fiber_count && length) {
			$.ajax({
				type: "POST",
				url: "?modules=ajax&handler=fiber_count&ajax_request_action=storeHttpReferers",
				data: "fiber_count=" + fiber_count + "&length=" + length + "&fiber_type=" + fiber_type + "&product_id=" + product_id,
				dataType: 'json',
				success: function(data) {
					if(data != 'err') {
						$("#fiber_count_span").css('color', '#A10000');
						$("#fiber_count_span").html(data.price_j);
						$("#products_base_price").html(data.price_t);
					}
				}
			});
		}
	} else {
		$("#fiber_count_span").html('');
	}
}

function breakout_leg_length(custom_length, custom_length_feet) {
	var length_array = new Array(0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9);
	var j = 0;
	for(var i = 0; i <= length_array.length - 1; i++) {
		if(custom_length <= length_array[i]) {
			j = i;
			break;
		}
	}
	if(custom_length <= 1 || custom_length_feet <= 3.28) {
		if($("#breakout_leg_length option").size()) {
			for(var i = 4; i <= $("#breakout_leg_length option").size() - 1; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", true);
			}
		}
	} else {
		if($("#breakout_leg_length option").size()) {
			for(var i = 0; i <= $("#breakout_leg_length option").size() - 1; i++) {
				$("#breakout_leg_length option[index=" + i + "]").attr("disabled", false);
			}
		}
		if(j != 0) {
			if($("#breakout_leg_length option").size()) {
				for(var i = j; i <= $("#breakout_leg_length option").size() - 1; i++) {
					$("#breakout_leg_length option[index=" + i + "]").attr("disabled", true);
				}
			}
		}
	}
}

function my_onblur(products_id, custom_on, cid) {
	if($("#custom_length").val()) {
		var custom_length = Number($("#custom_length").val());
		if(isNaN(custom_length)) {
			alert(ENTER_NUMBER);
			return false;
		}
		if(cid == 2875) {
			if(custom_length > 100) {
				custom_length = 100;
				$("#custom_length").val(custom_length)
			}
		}
		var custom_length_feet = custom_length / 0.3048;
		custom_length_feet = custom_length_feet.toFixed(2);
		$("#custom_length_feet").val(custom_length_feet);
		custom_length = custom_length.toFixed(2);
		$("#custom_length").val(custom_length);
		var arr = [];
		var allAttr = [];
		for(var i = 0; i < $('.login_country[rel=AttrSelect]').length; i++) {
			arr.push($('.login_country[rel=AttrSelect]').eq(i).val());
			var text = $('.login_country[rel=AttrSelect]').eq(i).attr('id').split('-')[1];
			allAttr.push(text);
		}
		for(var i = 0; i < $('.c_wavelength').length; i++) {
			for(var j = 0; j < $('.c_wavelength input').length; j++) {
				if($('.c_wavelength input').eq(j).is(':checked')) {
					arr.push($('.c_wavelength input').eq(j).val());
					var text = $('.c_wavelength input').eq(j).attr("id").split('-')[1];
					allAttr.push(text);
				}
			}
		}
		$('.attribsRadioButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		$('.attribsCheckboxButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		if($('#power_type').val() != '' && $('#power_type').val()) {
			arr.push($('#power_type').val());
			allAttr.push(60);
		}
		var oPtionVal = [];
		for(var i = 0; i < arr.length; i++) {
			oPtionVal.push(allAttr[i] + ':' + arr[i]);
		}
		$.ajax({
			type: "POST",
			url: "ajax_process_custom_length.php?type=custom",
			data: "products_id=" + products_id + "&custom_length=" + $("#custom_length").val() + "&allAttr=" + oPtionVal,
			dataType: 'html',
			dataType: 'json',
			success: function(data) {
				if(data.type == '1') {
					if(custom_on) {
						$("#productsbaseprice").html(data.totle_price);
					}
					$("#products_base_price_per_meter").html('');
					_act();
					custom_fiber_count(products_id);
				}
			}
		});
	}
	breakout_leg_length($("#custom_length").val(), $("#custom_length_feet").val());
}

function my_onblur_feet(products_id, custom_on, cid) {
	if($("#custom_length_feet").val()) {
		var custom_length_feet = Number($("#custom_length_feet").val());
		if(isNaN(custom_length_feet)) {
			alert(ENTER_NUMBER);
			return false;
		}
		var custom_length = $("#custom_length_feet").val() * 0.3048;
		custom_length = custom_length.toFixed(2);
		if(cid == 2875) {
			if(custom_length > 100) {
				custom_length = 100;
				var custom_feet = custom_length / 0.3048;
				custom_feet = custom_feet.toFixed(2);
				$("#custom_length_feet").val(custom_feet);
			}
		}
		$("#custom_length").val(custom_length);
		var arr = [];
		var allAttr = [];
		for(var i = 0; i < $('.login_country[rel=AttrSelect]').length; i++) {
			arr.push($('.login_country[rel=AttrSelect]').eq(i).val());
			var text = $('.login_country[rel=AttrSelect]').eq(i).attr('id').split('-')[1];
			allAttr.push(text);
		}
		for(var i = 0; i < $('.c_wavelength').length; i++) {
			for(var j = 0; j < $('.c_wavelength input').length; j++) {
				if($('.c_wavelength input').eq(j).is(':checked')) {
					arr.push($('.c_wavelength input').eq(j).val());
					var text = $('.c_wavelength input').eq(j).attr("id").split('-')[1];
					allAttr.push(text);
				}
			}
		}
		$('.attribsRadioButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		$('.attribsCheckboxButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		if($('#power_type').val() != '' && $('#power_type').val()) {
			arr.push($('#power_type').val());
			allAttr.push(60);
		}
		var oPtionVal = [];
		for(var i = 0; i < arr.length; i++) {
			oPtionVal.push(allAttr[i] + ':' + arr[i]);
		}
		$.ajax({
			type: "POST",
			url: "ajax_process_custom_length.php?type=custom",
			data: "products_id=" + products_id + "&custom_length=" + custom_length + "&allAttr=" + oPtionVal,
			dataType: 'html',
			dataType: 'json',
			success: function(data) {
				if(data.type == '1') {
					if(custom_on) {
						$("#productsbaseprice").html(data.totle_price);
					}
					$("#products_base_price_per_meter").html('');
					_act();
				}
			}
		});
	}
	breakout_leg_length($("#custom_length").val(), $("#custom_length_feet").val());
}

function codefans(id) {
	$("#go_to_cart_" + id).removeClass('go-to-cart-page-01');
	$("#Laddbtn_" + id).removeClass('button_10_01').val(FS_ADD).attr('disabled', false);
}
$(document).ready(function() {
	$('.pro17_QA_closed_view').click(function() {
		$(this).attr('target', '');
		$(this).parent().siblings('.pro17_A_con.first').slideToggle();
		$(this).parent().parent().siblings().find('.pro17_reply').slideUp();
	})
	$('.pro17_QA_closed_answer').click(function() {
		$(this).attr('target', '');
		$(this).parent().siblings('.pro17_reply').slideToggle();
		$(this).parent().parent().siblings().find('.pro17_reply').slideUp();
		if($(this).find('span').hasClass('show')) {
			$(this).find('span').removeClass('show');
		} else {
			$(this).find('span').addClass('show');
		};
		$(this).parent().parent().siblings().find('.pro17_QA_closed_answer').find('.icon').removeClass('show');
	})
})

function notice_put(type, question_id, batch, products_id, email) {
	var content = $(".text" + type + "_" + question_id + '_' + batch).val();
	if(!content) {
		alert('Write down your answers...');
		return false;
	}
	$(".text" + type + "_" + question_id + '_' + batch).val(null);
	$(".reply" + type + "_" + question_id + '_' + batch).slideToggle();
	$(".text" + type + "_" + question_id + '_' + batch).prev().css('display', 'none');
	$(".icon_" + question_id + '_' + batch).css('display', 'none');
	setTimeout(function() {
		$('.notice_msg_' + question_id + '_' + batch).show();
	}, 350)
	$.ajax({
		type: 'POST',
		url: 'customer_QA.html?action=chase_ask',
		dataType: "json",
		data: {
			'action': 'chase_ask',
			'question_id': question_id,
			'batch': batch,
			'products_id': products_id,
			'email': email,
			'content': content,
		},
		success: function(msg) {
			if(msg == 'ok') {
				setTimeout(function() {
					$(".text" + type + "_" + question_id + '_' + batch).val(null);
					$('.notice_msg_' + question_id + '_' + batch).hide();
				}, 3000)
			} else {
				alert("鎻愪氦澶辫触锛�");
				console.log(msg);
			}
		}
	});
}

function del_text(type, id, batch) {
	$(".text" + type + "_" + id + '_' + batch).val(null);
	$(this).css('display', 'none');
	$(".icon" + type + "_" + id + '_' + batch).css('display', 'none');
}

function text_clear(type, id, batch) {
	var remain = $(".text" + type + "_" + id + '_' + batch).val().length;
	if(remain > 0) {
		$(".text" + type + "_" + id + '_' + batch).prev().css('display', 'block');
		$(".text" + type + "_" + id + '_' + batch).prev().children().css('display', 'block');
	} else if(remain == 0) {
		$(".text" + type + "_" + id + '_' + batch).prev().css('display', 'none');
		$(".icon" + type + "_" + id + '_' + batch).css('display', 'none');
	}
}

function notice_cancel(type, id, batch) {
	$(".text" + type + "_" + id + '_' + batch).val(null);
	$(".icon" + type + "_" + id + '_' + batch).css('display', 'none');
	$(".reply" + type + "_" + id + '_' + batch).slideToggle();
}

function playholder_clear(type, id, batch) {
	$(".text" + type + "_" + id + '_' + batch).attr('placeholder', null);
}

function playholder_on(type, id, batch) {
	$(".text" + type + "_" + id + '_' + batch).attr('placeholder', 'Write down your answers...');
}
$("#target").click(function() {
	$(this).attr('target', '');
});

function reviews_login_on() {
	$('html,body').append($('fs_shadow'));
	$('#fs_shadow').show();
}

function reviews_login_off() {
	$('html,body').append($('fs_shadow'));
	$('#fs_shadow').show();
}

function Show_Popup(is_shipping) {
	if(is_shipping)
		$('html,body').animate({
			scrollTop: '350'
		}, {
			duration: 'slow'
		});
	$("#popup").css({
		"background-color": "#ccc",
		"position": "fixed",
		"z-index": "109"
	});
	$("body").prepend($("#popup"));
	if(is_shipping)
		$("#window").css({
			"display": "block",
			"left": (((screen.width - $("#window").width()) / 2 + $('html,body').scrollLeft()) + 'px'),
			"top": '400px'
		});
	else {
		var left = ((screen.width - $("#window").width()) / 2 + $('html,body').scrollLeft()) + 'px';
		var top = ((screen.height - $("#window").height()) / 2 + $('html,body').scrollTop()) + 'px';
		$("#window").css({
			"display": "block",
			"left": left,
			"top": top,
			"box-shadow": "2px 2px 23px",
			"z-index": "110"
		});
	}
	$('#popup,#window').show();
}

function showLogin() {
	$('#fs_overlay,#fs_popup').show();
}
$('#close_login').click(function() {
	$('#fs_shadow,.ping').hide();
});

function Close_Popups() {
	$('#fs_shadow,.ping').hide();
}

function submit_regist() {
	var email_address = $("#email_address_regist").val(),
		reg = new RegExp('^(.*)@(.*)\.(.*)'),
		error = false;
	if(email_address.length < 1 || !reg.test(email_address)) {
		$("#n_of_email_address_regist").addClass('loginErrorStyle');
		$("#n_of_email_address_regist").siblings().show();
		error = true;
	} else {
		$("#n_of_email_address_regist").siblings().hide();
	}
}
$(function() {
	$("input[name='email_address_regist']").click(function() {
		$("#n_of_email_address_regist").hide();
	});
	$("input[name='password_regist']").click(function() {
		$("#n_of_password_regist").hide();
	});
	$("input[name='name_regist']").click(function() {
		$("#n_of_name_regist").hide();
	});
});
var startX, startY;
document.addEventListener('touchstart', function(ev) {
	startX = ev.touches[0].pageX;
	startY = ev.touches[0].pageY;
}, false);
document.addEventListener('touchend', function(ev) {
	var endX, endY;
	endX = ev.changedTouches[0].pageX;
	endY = ev.changedTouches[0].pageY;
	var direction = GetSlideDirection(startX, startY, endX, endY);
	switch(direction) {
		case 0:
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			if(parseInt($('.num').html()) >= $('.widget li a').length) {
				$('.num').html($('.widget li a').length)
			} else {
				$('.num').text(parseInt($('.num').html()) + 1)
			}
			break;
		case 4:
			if(parseInt($('.num').html()) <= 1) {
				$('.num').html(1)
			} else {
				$('.num').html(parseInt($('.num').html()) - 1)
			}
			break;
		default:
	}
}, false);

function change_type(vid, pid, oid, obj) {
	$("#power_type").val(vid);
	$(obj).addClass("item_selected").siblings().removeClass("item_selected");
	$.ajax({
		type: "POST",
		url: "?modules=ajax&handler=ajax_get_switch_power_type&ajax_request_action=change_power_type",
		data: "products_id=" + pid + "&option_id=" + oid + "&option_value_id=" + vid,
		dataType: 'html',
		success: function(data) {
			if(data != 'err') {
				$("#productsbaseprice").html(data);
			}
		}
	});
}

function change_length(aid, id, product_id, length) {
	$("#length_attribute").val(id);
	$("#length_attribute_length").val(length);
	$("a").parent('.length').removeClass('item_selected');
	$("a").parent('#item_' + aid).addClass('item_selected');
	$("#custom_length").val('');
	if(id) {
		$("#custom_text").css("display", "none");
		$("#custom_price").css("display", "none");
		$("#error_text").css("display", "none");
		$("#error_text").html("");
		var arr = [];
		var allAttr = [];
		for(var i = 0; i < $('.login_country[rel=AttrSelect]').length; i++) {
			arr.push($('.login_country[rel=AttrSelect]').eq(i).val());
			var text = $('.login_country[rel=AttrSelect]').eq(i).attr('id').split('-')[1];
			allAttr.push(text);
		}
		for(var i = 0; i < $('.c_wavelength').length; i++) {
			for(var j = 0; j < $('.c_wavelength input').length; j++) {
				if($('.c_wavelength input').eq(j).is(':checked')) {
					arr.push($('.c_wavelength input').eq(j).val());
					var text = $('.c_wavelength input').eq(j).attr("id").split('-')[1];
					allAttr.push(text);
				}
			}
		}
		$('.attribsRadioButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		$('.attribsCheckboxButton input:checked').each(function() {
			arr.push($(this).val());
			var text = $(this).attr('id').split('-')[1];
			allAttr.push(text);
		})
		if($('#power_type').val() != '' && $('#power_type').val()) {
			arr.push($('#power_type').val());
			allAttr.push(60);
		}
		var oPtionVal = [];
		for(var i = 0; i < arr.length; i++) {
			oPtionVal.push(allAttr[i] + ':' + arr[i]);
		}
		if(arr.length == 0) {
			$.ajax({
				type: "POST",
				url: "ajax_process_custom_length.php?type=length_update",
				data: "products_id=" + product_id + "&length=" + id,
				dataType: 'html',
				success: function(data) {
					if(data != 'err') {
						$("#productsbaseprice").html(data);
						$("#products_base_price_per_meter").html('');
					}
					_act();
					custom_fiber_count(product_id);
				}
			});
		}
	} else {
		$("#error_text").css("display", "none");
		$("#error_text").html("");
		$("#custom_text").css("display", "inline-block");
		$("#custom_price").css("display", "none");
		$("#custom_length").val('');
	}
}

function GetSlideAngle(dx, dy) {
	return Math.atan2(dy, dx) * 180 / Math.PI;
}

function GetSlideDirection(startX, startY, endX, endY) {
	var dy = startY - endY;
	var dx = endX - startX;
	var result = 0;
	if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
		return result;
	}
	var angle = GetSlideAngle(dx, dy);
	if(angle >= -45 && angle < 45) {
		result = 4;
	} else if(angle >= 45 && angle < 135) {
		result = 1;
	} else if(angle >= -135 && angle < -45) {
		result = 2;
	} else if((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
		result = 3;
	}
	return result;
}

function setTabNewOne1() {
	$('#con_one_9').show();
	$('#product-tags-inner-title').hide();
	$('#product-tags-outer-title').show();
}

function setTabNewOne7() {
	$('#QA-inner-title').show();
	$('#QA-outer-title').hide();
}

function setTabNewOne9() {
	$('#product-tags-inner-title').show();
	$('#product-tags-outer-title').hide();
}

function setTabNew(block, curent_num, all_num, other_fun) {
	for(var i = 1; i <= all_num; i++) {
		$('#' + block + i).removeClass('hover');
		$('#' + block + i + '_phone').removeClass('hover');
		$('#con_' + block + '_' + i).hide();
	}
	$('#' + block + curent_num).addClass('hover');
	$('#' + block + curent_num + '_phone').addClass('hover');
	$('#con_' + block + '_' + curent_num).show();
	$('#con_one_7').show();
	$('#QA-inner-title').hide();
	$('#QA-outer-title').show();
	if(other_fun) {
		other_fun();
	}
}
$(function() {
	setTimeout(function() {
		for(var i = 0; i < $('.attribsRadioButton').length; i++) {
			if($('.attribsRadioButton').eq(i).find('input').is(':checked')) {
				$('.attribsRadioButton').eq(i).addClass('active');
			}
		}
		for(var i = 0; i < $('.attribsCheckboxButton').length; i++) {
			if($('.attribsCheckboxButton').eq(i).find('input').is(':checked')) {
				$('.attribsCheckboxButton').eq(i).addClass('active');
			}
		}
	})
	$('.attribsRadioButton').find('input').live('change', function() {
		if($(this).is(':checked')) {
			$(this).parents('.attribsRadioButton').addClass('active');
			$(this).parents('.attribsRadioButton').siblings().removeClass('active');
		}
	})
	$('.attribsCheckboxButton').find('input').live('change', function() {
		if($(this).is(':checked')) {
			$(this).parents('.attribsCheckboxButton').addClass('active');
		} else {
			$(this).parents('.attribsCheckboxButton').removeClass('active');
		}
	})
	var $html = '';
	for(var i = 0; i < $('.widget li a').length; i++) {
		$html += "<div class='swiper-slide'><img src=" + $('.widget li a').eq(i).attr('data-normal') + "></div>";
	}
	$('.productImg .swiper-wrapper').html($html);
	$('.productImg .swiper-container').append("<div class='prompt'><em class='num'>1</em>" + "/" + $('.widget li a').length + "</div>")
	var mySwiper = new Swiper('.productImg .swiper-container', {
		flip: {
			slideShadows: true,
			limitRotation: true
		},
		paginationHide: true,
	});
	$('.Cus_call_dl_wap dt').click(function() {
		$(this).siblings(".Cus_call_dd").slideToggle();
		$(this).closest(".Cus_call_dl_wap").siblings(".Cus_call_dl_wap").children('dd').animate({
			height: "hide"
		}, 500);
	});
	var li_index_length = $('.Menubox ul li').length - 1;
	var oDetailChoose = [];
	$('.Menubox ul li').click(function() {
		if($(this).index() != li_index_length) {
			$('.Menubox ul li').eq(li_index_length).removeClass('hover');
			$('.Menubox ul li').eq(li_index_length).removeClass('show');
			$('.Menubox_m_more').hide();
			$('.Menubox_m_more p').css('background-color', '#fff');
			$('.Menubox_m_more p').find('a').css('background-color', '#fff');
		}
	})
	$('.Menubox_m_more p').click(function() {
		$(this).addClass('choose');
		$(this).siblings().removeClass('choose');
	})
	$('.Menubox ul li').eq(li_index_length).click(function() {
		$(this).addClass('hover').siblings().removeClass('hover');
		if($(this).hasClass('show')) {
			$(this).removeClass('show');
			$('.Menubox_m_more').hide();
		} else {
			$(this).addClass('show');
			$('.Menubox_m_more').show();
		}
	})
	for(var i = 0; i < li_index_length; i++) {
		if($('.Menubox ul li').eq(i).css('display') != 'none') {
			oDetailChoose.push($('.Menubox ul li').eq(i).index());
		}
	}
	var oDetailLi = [];
	if($(window).width() <= 480 && oDetailChoose.length >= 3) {
		$('.Menubox ul li').eq(li_index_length).show();
		for(var i = 2; i < oDetailChoose.length; i++) {
			$('.Menubox ul li').eq(oDetailChoose[i]).hide();
			oDetailLi.push(oDetailChoose[i]);
		}
	}
	if($(window).width() <= 480) {
		$('#one7 a').html('Q & A');
	}
	for(var i = 0; i < oDetailLi.length; i++) {
		$('.Menubox_m_more p').eq(oDetailLi[i]).show();
	}
})

function q_cart_quantity_change(type, id) {
	var qty = parseInt($("#cart_quantity_" + id).val());
	if(!isNaN(qty)) {
		switch(type) {
			case 0:
				if(qty >= 2) {
					$("#cart_quantity_" + id).val(qty - 1);
				} else {}
				break;
			case 1:
				$("#cart_quantity_" + id).val(qty + 1);
				break;
		}
	} else {
		$("#cart_quantity_" + id).val(1);
		return false;
	}
}