! function(t) {
	function e(i) {
		if(a[i]) return a[i].exports;
		var o = a[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
	}
	var a = {};
	return e.m = t, e.c = a, e.p = "", e(0)
}([function(t, e, a) {
	t.exports = a(1)
}, function(t, e, a) {
	a(2), a(3), MI.cart = function() {
		function t() {
			$.ajax({
				url: D.urls.getList,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				timeout: 1e4,
				error: function() {
					O.tipMsg("网络出错，请刷新页面！")
				},
				success: function(t) {
					t && 1 === t.code ? (D.listData = t.data, e(t.data), a(), D.selGoodsTotal = 0, D.goodsTotal = 0, D.giftTotal = 0, $("#J_cartLoading").addClass("hide")) : (t.code > 1e3 || t.code < 0) && O.tipMsg(t.msg)
				}
			})
		}

		function e() {
			if($(".J_goShoping").attr("href", MI.GLOBAL_CONFIG.listSite + "/0"), D.listData.items.length <= 0) return $("#J_cartEmpty").removeClass("hide"), $("#J_cartBox").addClass("hide"), $("#J_miniHeaderTitle").html("<h2>我的购物车</h2>").removeClass("has-more"), $.cookie("cUserId") || $.cookie("userId") || ($("#J_cartEmpty").addClass("cart-empty-nologin"), $("#J_loginBtn").attr("href", MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href)), void j(!0);
			location.href.indexOf("autogo") >= 0 && $("#J_goCheckout").trigger("click"), $("#J_cartBox").removeClass("hide"), $.each(D.listData.items, function(t, e) {
				e.isOvercartTTL || e.showCos || !e.is_on_sale ? (1 === e.sel_status || 2 === e.sel_status || 3 === e.sel_status) && (D.goodsTotal += parseInt(e.num)) : (D.goodsTotal += parseInt(e.num), e.pulse_bargains_cart && e.pulse_bargains_cart.length && $.each(e.pulse_bargains_cart, function(t, e) {
					D.goodsTotal += parseInt(e.num)
				}), e.pulse_gift && e.pulse_gift.length && $.each(e.pulse_gift, function(t, e) {
					D.goodsTotal += parseInt(e.num)
				}), e.service_info && e.service_info.length > 0 && $.each(e.service_info, function(t, e) {
					$.each(e.service_info, function(t, e) {
						e.item_id && (D.goodsTotal += parseInt(e.num))
					})
				})), e.properties && e.properties.insurance && e.properties.insurance.itemId && (D.goodsTotal += parseInt(e.num))
			}), D.listData.activitys.gift && D.listData.activitys.gift.length && $.each(D.listData.activitys.gift, function(t, e) {
				D.giftTotal += parseInt(e.num)
			});
			var t = "";
			D.listData.shipmentDes ? (t = "<p>" + D.listData.shipmentDesc + "</p>", $("#J_miniHeaderTitle").addClass("has-more")) : ($("#J_miniHeaderTitle").addClass("has-more"), t = "<p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>"), $("#J_miniHeaderTitle").html("<h2>我的购物车</h2>" + t), $("#J_cartTotalNum").text(D.goodsTotal + D.giftTotal).parent().removeClass("hide"), D.listData.activityDiscountMoney > 0 ? $("#J_cartActivityMoney").text(D.listData.activityDiscountMoney).parent().removeClass("hide") : $("#J_cartActivityMoney").text("0").parent().addClass("hide"), $("#J_cartTotalPrice").text(D.listData.orderMoneySelGoods), !D.listData.postFree && D.listData.postFreeBalance ? ($("#J_postFreeBalance").text(D.listData.postFreeBalance), D.listData.gatherorder_goods_list && D.listData.gatherorder_goods_list.length > 0 && ($("#J_coudanTip").removeClass("hide"), $("#J_showCoudan").removeClass("hide"))) : $("#J_coudanTip").addClass("hide")
		}

		function a() {
			D.listData.items.length <= 0 || (i(D.listData.items), o(D.listData.activitys), D.listData.giftsDiv && D.listData.giftsDiv.length && r(D.listData.giftsDiv), s(D.listData.bargains), D.listData.bargainDiv && D.listData.bargainDiv.length && n(D.listData.bargainDiv), D.listData.gatherorder_goods_list && D.listData.gatherorder_goods_list.length && c(D.listData.gatherorder_goods_list), D.closeGoods = [], $.each(D.listData.items, function(t, e) {
				(e.isOvercartTTL || e.showCos || !e.is_on_sale) && D.closeGoods.push(e)
			}), D.closeGoods.length && l(), d(D.listData.items), p())
		}

		function i(t) {
			var e = doT.template($("#J_cartGoodsTemplate").html()),
				a = e(t);
			$("#J_cartListBody").html(a)
		}

		function o(t) {
			if(t) {
				var e = doT.template($("#J_cartActivitysTemplate").html()),
					a = e(t);
				$("#J_cartListBody").append(a)
			}
		}

		function s(t) {
			if(t) {
				var e = doT.template($("#J_cartRaisebuyTemplate").html()),
					a = e(t);
				$(".J_modalRaiseBuy").remove(), $("#J_raiseBuyBox").html(a)
			}
		}

		function n(t) {
			if(t) {
				$(".J_cartGoods").each(function() {
					var e = O.parseJson($(this).attr("data-info"));
					return "bargain" !== e.gettype ? !0 : void $.each(t, function(t, a) {
						return e.itemid.indexOf(a.actId) < 0 ? !0 : void $.each(a.selecInfo, function(t, a) {
							return e.itemid.indexOf(a.product_id) < 0 ? !0 : (a.num = e.num, void(a.isBuy = "true"))
						})
					})
				});
				var e = doT.template($("#J_cartRaisebuyClassTemplate").html()),
					a = e(t);
				$(".J_modalRaisebuy").remove(), $("body").append(a)
			}
		}

		function r(t) {
			if(t) {
				var e = doT.template($("#J_cartGiftTemplate").html()),
					a = e(t);
				$(".J_modalGift").remove(), $("body").append(a)
			}
		}

		function c(t) {
			if(t) {
				var e = doT.template($("#J_cartCoudanTemplate").html()),
					a = e(t);
				$(".J_modalCoudan").remove(), $("body").append(a), $("#J_coudanMoney").text(D.listData.postFreeBalance)
			}
		}

		function l() {
			var t = doT.template($("#J_cartCloseTemplate").html()),
				e = t(D.closeGoods),
				a = '<div class="item-disable-box">' + e + "</div>";
			$("#J_cartListBody").append(a)
		}

		function d(t) {
			$.each(t, function(t, e) {
				e.isOvercartTTL || e.showCos || !e.is_on_sale ? (1 === e.sel_status || 2 === e.sel_status || 3 === e.sel_status) && (D.selGoodsTotal += parseInt(e.num)) : ((1 === e.sel_status || 2 === e.sel_status || 3 === e.sel_status) && (D.selGoodsTotal += 1 * e.num, e.properties && e.properties.insurance && e.properties.insurance.itemId && (D.selGoodsTotal += parseInt(e.num)), e.pulse_bargains_cart && e.pulse_bargains_cart.length && $.each(e.pulse_bargains_cart, function(t, e) {
					D.selGoodsTotal += parseInt(e.num)
				}), e.pulse_gift && e.pulse_gift.length && $.each(e.pulse_gift, function(t, e) {
					D.selGoodsTotal += e.num
				}), e.service_info && e.service_info.length > 0 && $.each(e.service_info, function(t, e) {
					$.each(e.service_info, function(t, e) {
						e.item_id && (D.selGoodsTotal += parseInt(e.num))
					})
				})), e.pulse_bargains && $.each(e.pulse_bargains, function(t, e) {
					e.selectable && u(e)
				}), e.pulse_gift && $.each(e.pulse_gift, function(t, e) {
					e.selectable && m(e)
				}))
			}), D.selGoodsTotal === D.goodsTotal && D.selGoodsTotal > 0 ? $("#J_selectAll").addClass("icon-checkbox-selected") : $("#J_selectAll").removeClass("icon-checkbox-selected"), D.selGoodsTotal <= 0 ? ($("#J_goCheckout").removeClass("btn-primary").addClass("btn-disabled"), $("#J_noSelectTip").removeClass("hide")) : ($("#J_goCheckout").removeClass("btn-disabled").addClass("btn-primary"), $("#J_noSelectTip").addClass("hide")), $("#J_selTotalNum").html(D.selGoodsTotal + D.giftTotal)
		}

		function u(t) {
			if(t) {
				var e = [];
				e.push(t);
				var a = doT.template($("#J_goodsSubRaisebuyClassTemplate").html()),
					i = a(e);
				$("#J_choosePro-" + t.actId).remove(), $("body").append(i)
			}
		}

		function m(t) {
			if(t) {
				var e = [];
				e.push(t);
				var a = doT.template($("#J_cartGiftTemplate").html()),
					i = a(e);
				$("body").append(i)
			}
		}

		function p() {
			f(), _(!0), j()
		}

		function f() {
			$(".J_delGoods").off().on("click", function() {
				return C($(this)), !1
			}), $(".J_changeGoodsNum").on("mouseover", function() {
				$(this).toggleClass("change-goods-num-hover")
			}).on("mouseout", function() {
				$(this).toggleClass("change-goods-num-hover")
			}), $(".J_goodsNum").off().on("blur", function() {
				var t = parseInt($(this).val()),
					e = parseInt($(this).attr("data-buylimit")),
					a = parseInt($(this).attr("data-num")),
					i = $(this).attr("name"),
					o = $.isNumeric(t);
				if(o) {
					if(1 > t) return $(this).val(a), !1;
					if(t > e) return v(e, "input", i), O.tipMsg("该商品数量不能大于" + e), !1;
					v(t, "input", i)
				} else O.tipMsg("输入的数量只能是数字！"), $(this).val(a)
			}), $(".J_minus").off().on("click", function() {
				var t = $(this).parent().find(".J_goodsNum"),
					e = parseInt(t.val());
				return $.isNumeric(e) ? e > 1 && v(e, "reduce", t.attr("name")) : O.tipMsg("输入的数量只能是数字！"), !1
			}), $(".J_plus").off().on("click", function() {
				var t = $(this).parent().find(".J_goodsNum"),
					e = parseInt(t.val()),
					a = parseInt(t.attr("data-buylimit")),
					i = t.attr("name");
				return $.isNumeric(e) ? (e >= 1 && a > e ? v(e, "add", i) : v(a, "add", i), !1) : (O.tipMsg("输入的数量只能是数字!"), !1)
			}), J(), $(".J_chooseGift").on("click", function() {
				var t = $(this).attr("data-actId");
				return x("#J_choosePro-" + t), !1
			}), I(), w(), M(), $("#J_showCoudan").off().on("click", function() {
				return x("#J_CoudanBox"), !1
			}), $(".J_carouselList").carousel({
				itemPerSlide: 5,
				containerSelector: ".J_carouselContainer",
				controlsSelector: ".J_carouselControl",
				controls: !1,
				pager: !0
			}), $(".J_addFavorite").on("click", function() {
				var t = $(this).attr("data-gid");
				return t ? void $.ajax({
					url: D.urls.favorite + t,
					dataType: "jsonp",
					jsonp: "jsonpcallback",
					timeout: 1e4,
					error: function() {},
					success: function(e) {
						e && 1 === e.code ? $('.J_addFavorite[data-gid="' + t + '"]').addClass("is-favorite") : O.tipMsg(e.msg)
					}
				}) : !1
			}), $(".J_itemCheckbox").on("click", function() {
				var t = $(this).hasClass("icon-checkbox-selected"),
					e = $(this).attr("data-itemid");
				t ? h(e, 0) : h(e, 1)
			});
			var t = $(".J_service").find(".extend-buy");
			t.find(".agreement").on("click", function(t) {
				t.stopPropagation()
			}), t.on("click", function() {
				L = $(this);
				var t = $(this).data("pindex"),
					e = $(this).data("index"),
					a = $(this).data("sindex"),
					i = window.doT.template($("#J_agreementTmp").html()),
					o = D.listData.items[t];
				o = o.service_info[a].service_info[e], $("#J_modalAgreement").modal("show").html(i(o))
			})
		}

		function h(t, e, a) {
			$.ajax({
				url: D.urls.sel,
				dataType: "jsonp",
				data: {
					itemId: t,
					status: e
				},
				jsonp: "jsonpcallback",
				success: function(t) {
					1 === t.code ? (T(), "function" == typeof a && a()) : O.tipMsg(t.msg)
				}
			})
		}

		function g() {
			$("#J_selectAll").on("click", function() {
				var t = $(this).hasClass("icon-checkbox-selected"),
					e = [],
					a = null;
				$(".J_itemCheckbox").each(function() {
					e.push($(this).attr("data-itemid")), a = t ? 0 : 1
				}), e.length && h(e.join("__"), a)
			})
		}

		function _(t) {
			var e = $("#J_cartBar"),
				a = $(window).height(),
				i = "cart-bar-fixed";
			t && e.removeClass(i);
			var o = e.offset();
			o.top > a ? e.addClass(i) : e.removeClass(i);
			var s = 0;
			$(window).off("scroll").on("scroll", function() {
				s = $(this).scrollTop() + a, s > o.top ? e.removeClass(i) : e.addClass(i)
			})
		}

		function v(t, e, a) {
			"add" === e ? t += 1 : "reduce" === e && (t -= 1), $.ajax({
				url: MI.GLOBAL_CONFIG.cartSite + "/cart/update?api=1&Cart=" + a + "__" + t,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				success: function(t) {
					var e = $.trim(t.msg);
					if("ok" === e) MI.updateMiniCart();
					else {
						if("CANTMODIFY" === e) return O.tipMsg("非常抱歉！该商品不允许修改数量！"), !1;
						if("SALEOUT" === e) return O.tipMsg("修改失败！"), window.location.reload(), !1;
						if(e.indexOf("MAX") > -1) {
							var a = e.split("|");
							return $("#J_cart_" + a[1]).val(a[2]), O.tipMsg("1" === a[3] ? "每笔订单最多购买4部小米手机。如有需要，请您另下订单继续购买。" : "超出商品最大购买数量。"), !1
						}
						O.tipMsg(e)
					}
					T()
				}
			})
		}

		function C(t) {
			if(t.length) {
				var e = t.attr("data-msg"),
					a = t.attr("id");
				O.tipMsg(e, !0, function() {
					b(a)
				})
			}
		}

		function b(t) {
			t && $.ajax({
				dataType: "jsonp",
				url: MI.GLOBAL_CONFIG.cartSite + "/cart/delete/" + t + "?api=1&ajax=cart-grid",
				jsonp: "jsonpcallback",
				cache: "false",
				success: function(t) {
					1 === t.code ? T() : O.tipMsg(t.msg)
				}
			})
		}

		function J() {
			$(".J_raiseBuyItem").on("click", function() {
				var t = O.parseJson($(this).attr("data-info")),
					e = $(this).hasClass("selected");
				if(e) b(t.bargainid);
				else if("true" === t.isBatch) x("#J_choosePro-" + t.actId);
				else {
					if(t.num && t.num > 0) {
						var a = t.maxnum - t.num + 1;
						t.goodsId = t.productId + "-0-" + a + "-" + t.actId
					}
					k(t.goodsId, t.actId, t.type)
				}
			})
		}

		function x(t) {
			if(t && $(t).length) {
				var e = $(t),
					a = e.find(".J_chooseProList"),
					i = e.find(".J_chooseProBtn"),
					o = e.attr("data-isadd") || !1,
					s = e.attr("data-isgift") || !1,
					n = a.find("li").length;
				e.addClass("modal-choose-pro-" + n), e.on("shown.bs.modal", function() {
					$(".modal-backdrop").addClass("modal-backdrop-dark")
				}).on("show.bs.modal", function() {
					$(this).find(".list").find("img").each(function() {
						$(this).attr("data-src") && $(this).attr("src", $(this).attr("data-src"))
					})
				}).modal({
					backdrop: "static",
					show: !0
				}), a.children("li").on("click", function() {
					$(this).addClass("selected").siblings().removeClass("selected");
					var t = $(this).attr("data-gid"),
						e = $(this).attr("data-price"),
						a = $(this).attr("data-coudan"),
						o = $(this).attr("data-num"),
						s = $(this).attr("data-maxnum");
					if("true" === a) {
						var n = D.listData.postFreeBalance - parseFloat(e);
						n > 0 ? ($("#J_coudanOver").addClass("hide"), $("#J_coudanDesc").removeClass("hide")) : ($("#J_coudanOver").removeClass("hide"), $("#J_coudanDesc").addClass("hide"))
					}
					if(o && s) {
						o = parseInt(o), s = parseInt(s);
						var r = $(this).attr("data-pid"),
							c = $(this).attr("data-actid");
						if(s > o) {
							var l = [];
							$(this).siblings("li").each(function() {
								var t = parseInt($(this).attr("data-num"));
								t > 0 && l.push($(this).attr("data-pid") + "-0-" + t + "-" + $(this).attr("data-actid"))
							}), o += 1, t = l.length ? r + "-0-" + o + "-" + c + "_" + l.join("_") : r + "-0-" + o + "-" + c, $(this).attr("data-gid", t)
						}
					}
					i.attr("href", "/cart/add/" + t).removeClass("btn-disable").addClass("btn-primary")
				}), i.off().on("click", function() {
					if($(this).hasClass("btn-disable")) return !1;
					var t = a.find(".selected").attr("data-gid");
					if("true" === o && a.find('[data-isbuy="true"]').length > 0) {
						t = "";
						var i = !0,
							n = 0;
						a.find('[data-isbuy="true"]').each(function() {
							var e = $(this).attr("data-pid"),
								a = $(this).attr("data-num"),
								o = $(this).attr("data-actid");
							$(this).hasClass("selected") && (a = parseInt(a) + 1, i = !1), t += (n > 0 ? "_" : "") + e + "-0-" + a + "-" + o, n += 1
						}), i && (t += "_" + a.find(".selected").attr("data-gid"))
					}
					if("true" === o || "true" === s) {
						var r = $(this).attr("data-actid"),
							c = $(this).attr("data-type");
						k(t, r, c)
					} else y(t);
					return e.modal("hide"), !1
				})
			}
		}

		function y(t) {
			MI.addShopCart(t, function(t) {
				t && 1 === t.code ? T() : O.tipMsg(t.msg)
			})
		}

		function k(t, e, a) {
			var i = MI.GLOBAL_CONFIG.cartSite + "/cart/addCartActivity.php";
			$.ajax({
				url: i,
				dataType: "jsonp",
				data: "id=" + t + "&promotion_id=" + e + "&promotion_type=" + a + "&api=1",
				jsonp: "jsonpcallback",
				timeout: 1e4,
				error: function() {
					O.tipMsg("网络请求超时")
				},
				success: function(t) {
					1 === t.code ? T() : O.tipMsg(t.message)
				}
			})
		}

		function T() {
			t()
		}

		function I() {
			var t = "";
			$(".J_showBaoxian").off().on("click", function() {
				var e = O.parseJson($(this).attr("data-info"));
				t = e.goodsId + "?parent_itemId=" + e.parent_itemId, $(".J_buyBaoxian").find(".num").html(e.count + "份"), $("#J_baoxian").modal({
					backdrop: "static",
					show: !0
				});
				var a = MI.GLOBAL_CONFIG.cartSite + "/static/insuranceAgreement.php?type=" + e.type;
				$(".J_baoxianMore").attr("href", a)
			}), $(".J_baoxianAgree").off().on("click", function() {
				$(this).toggleClass("selected")
			}), $(".J_buyBaoxian").off().on("click", function() {
				var e = $(".J_baoxianAgree").hasClass("selected");
				e ? (y(t), $("#J_baoxian").modal("hide")) : alert("请先阅读并同意《小米手机意外保障服务》！")
			}), $("#J_baoxian").on("hide.bs.modal", function() {
				$(".J_baoxianAgree").removeClass("selected")
			})
		}

		function w() {
			$(".J_showGuajia").on("click", function() {
				var t = $(this).attr("data-gid"),
					e = $(this).attr("data-parent_itemid");
				$(".J_buyGuaJia").attr("data-gid", t).attr("data-parent_itemid", e), $("#J_modalGuajia").modal({
					backdrop: "static",
					show: !0
				})
			}), $(".J_buyGuaJia").off().on("click", function() {
				var t = $(this).attr("data-gid"),
					e = $(this).attr("data-parent_itemid");
				t && e ? (t += "?parent_itemId=" + e, y(t), $("#J_modalGuajia").modal("hide")) : alert("参数错误")
			})
		}

		function M() {
			$(".J_showWaterInstall").on("click", function() {
				var t = $(this).attr("data-gid"),
					e = $(this).attr("data-parent_itemid");
				$(".J_buyWaterInstall").attr("data-gid", t).attr("data-parent_itemid", e), $("#J_modalWaterInstall").modal({
					backdrop: "static",
					show: !0
				})
			}), $(".J_buyWaterInstall").off().on("click", function() {
				var t = $(this).attr("data-gid"),
					e = $(this).attr("data-parent_itemid");
				t && e ? (t += "?parent_itemId=" + e, y(t), $("#J_modalWaterInstall").modal("hide")) : alert("参数错误")
			})
		}

		function j(t) {
			if(t) $("#J_miRecommendBox").addClass("hide"), $("#J_historyRecommend").removeClass("hide").miRecommend({
				type: "historyRecommend"
			});
			else {
				var e = [];
				$(".J_cartGoods").each(function() {
					var t = O.parseJson($(this).attr("data-info"));
					t && e.push(t.commodity_id)
				}), $("#J_miRecommendBox").removeClass("hide").miRecommend({
					type: "recommendBox",
					gid: e ? e.join() : ""
				})
			}
		}

		function G() {
			$("#J_goCheckout").on("click", function() {
				var t = $(this).hasClass("btn-disabled");
				return t ? !1 : ($(this).addClass("btn-disabled"), void $.ajax({
					url: D.urls.preCheckout + "?r=" + O.randomNum(),
					dataType: "jsonp",
					jsonp: "jsonpcallback",
					timeout: 5e3,
					error: function() {
						$(this).removeClass("btn-disabled"), location.href = MI.GLOBAL_CONFIG.orderSite + "/buy/checkout?r=" + O.randomNum()
					},
					success: function(t) {
						if($(this).removeClass("btn-disabled"), 1 === t.code) location.href = MI.GLOBAL_CONFIG.orderSite + "/buy/checkout?r=" + O.randomNum();
						else if(-2 === t.code) location.href = MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href + "?autogo";
						else if(2004002 === t.code) location.reload();
						else if(10006 === t.code) O.tipMsg(t.msg);
						else {
							var e = !1;
							$.each(D.preCheckoutCode, function(a, i) {
								return t.code.toString() === a ? (t.texts = i, e = !0, !1) : void 0
							}), e ? S(t) : O.tipMsg(t.msg)
						}
					}
				}))
			})
		}

		function S(t) {
			if(t) {
				$("#J_modalPrecheckTip").remove();
				var e = doT.template($("#J_preCheckTipTemplate").html()),
					a = e(t);
				$("body").append(a), t.data.items && t.data.items.length > 3 && $("#J_preCheckList").carousel({
					itemPerSlide: 3,
					containerSelector: "#J_modalPrecheckTip",
					controlsSelector: ".modal-bd",
					controls: !0,
					pager: !1
				}), $("#J_modalPrecheckTip").modal({
					backdrop: "static",
					show: !0
				}).on("hide.be.modal", function() {
					$("#J_goCheckout").removeClass("btn-disabled")
				}), B()
			}
		}

		function B() {
			$("#J_preCheckBtn").on("click", function() {
				var t = $(this).attr("data-action");
				if(t) {
					if("3" === t) return $("#J_modalPrecheckTip").modal("hide"), void T();
					var e = $("#J_preCheckList").find("li"),
						a = [],
						i = [],
						o = [];
					$(".J_itemCheckbox").each(function() {
						var t = $(this).attr("data-itemid"),
							e = $(this).hasClass("icon-checkbox-selected"),
							a = $(this).attr("data-isdis");
						i.push(t), e && "true" === a && o.push(t)
					}), e.each(function() {
						var t = $(this).attr("data-itemid");
						a.push(t)
					}), "1" === t ? h(i.join("__"), 0, function() {
						h(a.join("__"), 1, function() {
							$("#J_modalPrecheckTip").modal("hide"), $("#J_goCheckout").trigger("click")
						})
					}) : "2" === t ? h(a.join("__"), 0, function() {
						$("#J_modalPrecheckTip").modal("hide"), $("#J_goCheckout").trigger("click")
					}) : "4" === t && o.length && h(o.join("__"), 0, function() {
						$("#J_modalPrecheckTip").modal("hide")
					})
				}
			})
		}
		var D = {
				urls: {
					getList: MI.GLOBAL_CONFIG.cartSite + "/cart/getList.php?api=1",
					favorite: MI.GLOBAL_CONFIG.orderSite + "/favorite/add/id/",
					sel: MI.GLOBAL_CONFIG.cartSite + "/cart/sel.php",
					preCheckout: MI.GLOBAL_CONFIG.orderSite + "/buy/checkoutPreCheck.php"
				},
				listData: null,
				selGoodsTotal: 0,
				goodsTotal: 0,
				giftTotal: 0,
				preCheckoutCode: {
					2003073: {
						title: "以下为预售商品，需要单独结算",
						btn: "先购买这些商品",
						action: 1
					},
					2003072: {
						title: "以下为开放购买商品，需要单独结算",
						btn: "先购买这些商品",
						action: 1
					},
					2003074: {
						title: "以下为大型商品（需特殊配送），需要单独结算",
						btn: "先购买这些商品",
						action: 1
					},
					2003075: {
						title: "以下为合约机，需要单独结算",
						btn: "先购买这些商品",
						action: 1
					},
					2003080: {
						title: "以下为需要特殊配送的商品，需要单独结算",
						btn: "先购买这些商品",
						action: 1
					},
					2003077: {
						title: "抱歉，以下商品已经失效或者暂时售罄",
						btn: "购买其他已选商品",
						action: 2
					},
					2003076: {
						msg: "抱歉，已选商品已经失效或者暂时售罄",
						btn: "看看其他商品",
						action: 4
					},
					2004046: {
						msg: "抱歉，已选商品已经下架",
						btn: "看看其他商品",
						action: 4
					},
					2003078: {
						msg: "请勾选需要结算的商品",
						btn: "确定",
						action: 3
					}
				}
			},
			L = "";
		$("body").on("click", ".J_agreement", function() {
			$(this).toggleClass("active"), $("#J_modalAgreement").find(".btn").toggleClass("btn-disabled")
		}), $("#J_modalAgreement").on("click", ".btn", function() {
			if(!$(this).hasClass("btn-disabled")) {
				var t = $(this).data("id"),
					e = $(this).data("pid"),
					a = $(this).data("source");
				MI.addShopCart(t, function(t) {
					t && 1 === t.code ? T() : O.tipMsg(t.message)
				}, L, {
					parent_itemId: e,
					source: a
				}), $("#J_modalAgreement").modal("hide")
			}
		});
		var O = {
				tipMsg: function(t, e, a) {
					if(t) {
						var i = "";
						t.length > 10 && (i = "much-text"), $("#J_alertMsg").html(t).addClass(i), $("#J_modalAlert").modal("show").on("hide.bs.modal", function() {
							$("#J_alertMsg").html(""), $("#J_alertOk").off()
						}), e ? $("#J_alertCancel").removeClass("hide") : $("#J_alertCancel").addClass("hide"), "function" == typeof a && $("#J_alertOk").off().on("click", a)
					} else $("#J_modalAlert").modal("hide")
				},
				randomNum: function() {
					return parseInt(9e4 * Math.random() + 1e4) + "." + parseInt((new Date).getTime() / 1e3)
				},
				formatImageUrl: function(t, e) {
					if(t && e) {
						var a = t.lastIndexOf("."),
							i = t.slice(a),
							o = t.slice(0, a),
							s = o + "!" + e + "x" + e + i;
						return s
					}
				},
				formatDate: function(t, e) {
					if(t) {
						var a = new Date(1e3 * parseInt(t)),
							i = {
								Y: a.getFullYear(),
								M: a.getMonth() + 1,
								D: a.getDate(),
								h: a.getHours() < 10 ? "0" + a.getHours() : a.getHours(),
								m: a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes(),
								s: a.getSeconds()
							},
							o = e || "##Y##-##M##-##D## ##h##:##m##:##s##",
							s = "";
						for(var n in i) i[n] >= 0 && (s = "##" + n + "##", o.indexOf(s) >= 0 && (o = o.replace(s, i[n])));
						return o
					}
				},
				parseJson: function(t) {
					return new Function("return " + t)()
				}
			},
			N = function() {
				t(), g(), G(), $(window).on("resize", function() {
					_(!0)
				})
			};
		return {
			init: N,
			unit: O
		}
	}(), $(document).ready(function() {
		MI.cart.init()
	})
}, function(t, e) {
	! function(t) {
		function e(e) {
			function a() {
				return 0 >= $ ? !1 : (C && clearInterval(C), void(C = setTimeout(function() {
					var t = b === $ - 1 ? 0 : b + 1;
					i(t), a()
				}, f.pause)))
			}

			function i(t) {
				return b === t ? !1 : (v.css({
					marginLeft: -g * h * t,
					transition: "margin-left " + f.speed / 1e3 + "s " + f.easing
				}), f.controls && (0 === t ? d.addClass("control-disabled") : d.removeClass("control-disabled"), t === $ - 1 ? u.addClass("control-disabled") : u.removeClass("control-disabled")), f.pager && m.find("li").eq(t).addClass("pager-active").siblings().removeClass("pager-active"), void(b = t))
			}

			function o() {
				for(var e = '<ul class="xm-pagers">', a = 0, o = $; o > a; a += 1) e += '<li class="pager' + (0 === a ? " pager-active" : "") + '"><span class="dot">' + (a + 1) + "</span></li>";
				e += "</ul>", m.html(e), m.find("li").off(".carousel").on("click.carousel", function() {
					t(this).addClass("pager-active").siblings().removeClass("pager-active"), i(m.find("li").index(t(this)))
				})
			}

			function s() {
				h = f.itemPerSlide || Math.ceil(r.width() / g), $ = Math.ceil(c.length / h), 1 >= $ || (i(0), f.pager && o(), f.auto && (a(), f.controls && l.find(".control").off(".carousel").on({
					"mouseenter.carousel": function() {
						C && clearTimeout(C)
					},
					"mouseleave.carousel": function() {
						a()
					}
				}), f.pager && m.find(".pager").off(".carousel").on({
					"mouseenter.carousel": function() {
						C && clearTimeout(C)
					},
					"mouseleave.carousel": function() {
						a()
					}
				})))
			}
			var n, r, c, l, d, u, m, p, f, h, g, _, $, v = t(this),
				C = 0,
				b = -1;
			return p = {
				itemSelector: "> li",
				itemWidth: null,
				itemHeight: null,
				itemPerSlide: null,
				containerSelector: null,
				controlsSelector: null,
				pagersSelector: null,
				speed: 500,
				easing: "ease",
				auto: !1,
				pause: 5e3,
				controls: !0,
				controlsClass: "xm-controls-line-small",
				pager: !1,
				onLoad: t.noop
			}, f = t.extend({}, p, e), c = v.find(f.itemSelector), f.itemPerSlide && c.length <= f.itemPerSlide ? this : (g = f.itemWidth || c.outerWidth(!0), _ = f.itemHeight || c.outerHeight(), n = f.containerSelector ? v.closest(f.containerSelector) : v.parent(), n.addClass("xm-carousel-container"), r = v.wrap('<div class="xm-carousel-wrapper"></div>').closest(".xm-carousel-wrapper").css({
				height: _,
				overflow: "hidden"
			}), v.css("width", g * c.length), f.controls && (l = t('<div class="xm-controls ' + f.controlsClass + ' xm-carousel-controls"><a class="control control-prev iconfont" href="javascript: void(0);">&#xe628;</a><a class="control control-next iconfont" href="javascript: void(0);">&#xe623;</a></div>'), f.controlsSelector ? n.find(f.controlsSelector).append(l) : l.insertAfter(r), d = l.find(".control-prev"), u = l.find(".control-next"), d.on("click", function(e) {
				e.preventDefault(), t(this).hasClass("control-disabled") || i(b - 1)
			}), u.on("click", function(e) {
				e.preventDefault(), t(this).hasClass("control-disabled") || i(b + 1)
			})), f.pager && (m = t('<div class="xm-pagers-wrapper"></div>'), f.pagersSelector ? n.find(f.pagersSelector).append(m) : m.insertAfter(r)), s(), f.onLoad(v), void t(window).on("resize", s))
		}
		t.fn.carousel = function(t) {
			return this.each(function() {
				e.call(this, t)
			}), this
		}
	}(jQuery)
}, function(t, e, a) {
	function i(t, e, a) {
		var i = t.find("a");
		$.each(i, function(t, i) {
			var o, s = $(i).attr("data-stat-index"),
				n = r($(i).attr("data-stat-text")),
				c = $(i).attr("data-stat-method"),
				l = $(i).attr("data-stat-addcart");
			o = l ? "stat_" + e + l + "." + a + "_" + s + "_" + c : "stat_" + e + "." + a + "_" + s + "_" + c, $(i).attr({
				"data-stat-pid": o,
				"data-stat-aid": n
			})
		})
	}

	function o(t) {
		if("cart" !== n.page && n.useCarousel) {
			var e = t.find("ul").eq(0);
			e && e.carousel({
				containerSelector: t,
				controls: n.carouselControl,
				pager: n.carouselPage,
				itemHeight: 320
			})
		}
		n.isBuy && ($(".J_xm-recommend-list").hover(function() {
			$(this).find(".J_xm-recommend-btn").show()
		}, function() {
			$(this).find(".J_xm-recommend-btn").hide()
		}), $(".J_xm-recommend-btn").off(".addcart").on("click.addcart", function() {
			function t() {
				a.removeClass("xm-recommend-notice-active"), setTimeout(function() {
					e.removeClass("disabled"), a.empty()
				}, 500)
			}
			var e = $(this),
				a = e.parent().siblings(".xm-recommend-notice");
			return e.hasClass("disabled") ? !1 : (MI.addShopCart(e.attr("data-stat-gid"), function(e) {
				1 === e.code ? "cart" !== n.page ? (a.addClass("xm-recommend-notice-active").empty().append('<a class="btn btn-block btn-green btn-notice" href="javascript: void(0);">成功加入购物车</a>'), a.find(".btn-notice").one("click", t), setTimeout(function() {
					t(), location.reload()
				}, 1e3)) : location.href = MI.GLOBAL_CONFIG.staticSite + "/cart/" : alert(e.msg)
			}), !1)
		})), i(t, n.page, n.pageName), $.isFunction($("body").linkSign) && t.linkSign({
			live: !0
		});
		var a = t.attr("id"),
			o = "re-" + n.page + "." + n.tips;
		$.force_appear(), t.appear(), t.one("appear", function() {
			if("undefined" != typeof _msq && _msq.push(["trackPanelShow", a, o]), !t.data("log_codes")) {
				for(var e = t.find(".J_xm-recommend-list").find("dt").find("a"), i = "", s = 0, n = e.length; n > s; s++) i += e.eq(s).data("log_code") + ";";
				t.attr("data-log_codes", i.substring(0, i.length - 1))
			}
		})
	}
	a(2), a(4);
	var s = {},
		n = {},
		r = function(t) {
			try {
				return t.replace(/\s/g, "")
			} catch(e) {
				return t
			}
		};
	! function(t) {
		function e(t, e, i, s) {
			if(t.length < 5) return !1;
			var r = a(5),
				c = {
					v: 1,
					data: t,
					useCarousel: n.useCarousel,
					isBuy: n.isBuy,
					itemSite: MI.GLOBAL_CONFIG.itemSite,
					title: s ? "买购物车中商品的人还看了" : n.title,
					page: n.page,
					hideTitle: n.hideTitle,
					type: e.type
				};
			i.addClass("container").html(r(c)), o(i), null !== e.callback && "function" == typeof e.callback && e.callback()
		}

		function i(t) {
			return t.length < 5 ? !1 : (t.length > 20 && (t = t.slice(0, 20)), t.length > 15 && t.length < 20 && (t = t.slice(0, 15)), t.length > 10 && t.length < 15 && (t = t.slice(0, 10)), t.length > 5 && t.length < 10 && (t = t.slice(0, 5)), t)
		}

		function r(a) {
			var o = n.api,
				r = {
					cid: s.gid
				};
			t.ajax({
				url: o,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				cache: !0,
				data: r,
				success: function(o) {
					if(0 === o.code) {
						o = o.data || {};
						var n = t(a);
						"buyRecommend" === s.type || "paySuccess" === s.type ? (e(i(o.alsobuy), s, n), s.type = "dirHistoryRecommend", n = t("#J_historyRecommend"), e(i(o.alsoview), s, n, !0)) : e(i(o), s, n)
					}
				}
			})
		}
		var c = {
			recommendBox: {
				api: "//rec.www.mi.com/rec/cartbuy",
				title: "买购物车中商品的人还买了",
				isBuy: !0,
				page: "Cart",
				pageName: "购物车",
				tips: "购物车推荐",
				useCarousel: !1
			},
			historyRecommend: {
				api: "//rec.www.mi.com/rec/cartempty",
				title: "为您推荐",
				isBuy: !0,
				page: "Cart",
				pageName: "购物车",
				tips: "猜你喜欢",
				useCarousel: !1
			},
			dirHistoryRecommend: {
				api: "//rec.www.mi.com/rec/cartsuccess",
				title: "根据浏览向您推荐",
				isBuy: !0,
				page: "CartSuc",
				pageName: "加购成功",
				tips: "看了还看",
				useCarousel: !1
			},
			alsoBuy: {
				api: "//rec.www.mi.com/rec/detail",
				title: "买过该商品的人还买了",
				isBuy: !0,
				page: "ItemTail",
				pageName: "单品页底部",
				tips: "买过该商品的人还买了",
				useCarousel: !0,
				carouselControl: !1,
				carouselPage: !0
			},
			buyRecommend: {
				api: "//rec.www.mi.com/rec/cartsuccess",
				title: "买购物车中商品的人还买了",
				isBuy: !0,
				page: "CartSuc",
				pageName: "加购成功",
				tips: "买过该商品的人还买了",
				useCarousel: !0,
				carouselControl: !1,
				carouselPage: !0
			},
			searchHistoryRecommend: {
				api: "//rec.www.mi.com/rec/search",
				title: "您还看了",
				isBuy: !0,
				page: "Search",
				pageName: "搜索页",
				tips: "您还看了",
				useCarousel: !0,
				carouselControl: !1,
				carouselPage: !0
			},
			homeRecommend: {
				api: "//rec.www.mi.com/rec/guesslike",
				title: "为你推荐",
				isBuy: !1,
				page: "Home",
				pageName: "首页",
				tips: "为你推荐",
				useCarousel: !0,
				carouselControl: !0,
				carouselPage: !1,
				hideTitle: !0
			},
			paySuccess: {
				api: "//rec.www.mi.com/rec/cartsuccess",
				title: "为你推荐",
				isBuy: !0,
				page: "CartSuc",
				pageName: "支付成功",
				tips: "为你推荐",
				useCarousel: !0,
				carouselControl: !1,
				carouselPage: !0
			}
		};
		t.fn.miRecommend = function(e) {
			s = t.extend(c, e), n = s[s.type], r(this)
		}
	}(jQuery)
}, function(t, e) {
	! function(t) {
		function e() {
			s = !1;
			for(var e = 0, o = i.length; o > e; e++) {
				var n = t(i[e]).filter(function() {
					return t(this).is(":appeared")
				});
				if(n.trigger("appear", [n]), a) {
					var r = a.not(n);
					r.trigger("disappear", [r])
				}
				a = n
			}
		}
		var a, i = [],
			o = !1,
			s = !1,
			n = {
				interval: 250,
				force_process: !1
			},
			r = t(window);
		t.expr[":"].appeared = function(e) {
			var a = t(e);
			if(!a.is(":visible")) return !1;
			var i = r.scrollLeft(),
				o = r.scrollTop(),
				s = a.offset(),
				n = s.left,
				c = s.top;
			return c + a.height() >= o && c - (a.data("appear-top-offset") || 0) <= o + r.height() && n + a.width() >= i && n - (a.data("appear-left-offset") || 0) <= i + r.width() ? !0 : !1
		}, t.fn.extend({
			appear: function(a) {
				var r = t.extend({}, n, a || {}),
					c = this.selector || this;
				if(!o) {
					var l = function() {
						s || (s = !0, setTimeout(e, r.interval))
					};
					t(window).scroll(l).resize(l), o = !0
				}
				return r.force_process && setTimeout(e, r.interval), i.push(c), t(c)
			}
		}), t.extend({
			force_appear: function() {
				return o ? (e(), !0) : !1
			}
		})
	}(jQuery)
}, function(t, e) {
	t.exports = function(t) {
		var e = "";
		t.title && !t.hideTitle && (e += '<h2 class="xm-recommend-title"><span>' + t.title + "</span></h2>"), e += '<div class="xm-recommend"> ', e += t.useCarousel ? ' <ul class="xm-carousel-col-5-list xm-carousel-list clearfix"> ' : ' <ul class="row clearfix"> ';
		var a = t.data;
		if(a)
			for(var i, o = -1, s = a.length - 1; s > o;) {
				i = a[o += 1], e += " ", e += t.useCarousel ? ' <li class="J_xm-recommend-list"> ' : ' <li class="J_xm-recommend-list span4"> ', e += " ";
				var n = /.jpg|.jpeg|.png/,
					r = n.exec(i.image),
					c = "!140x140" + r,
					l = "!280x280" + r;
				if(e += " ", i.ext && i.ext.img && i.ext.url) {
					e += " ";
					var n = /.jpg|.jpeg|.png/,
						d = n.exec(i.ext.img),
						u = "!234x300" + d,
						m = "!468x600" + d;
					e += ' <a target="_blank" href="' + i.ext.url + '" data-log_code="' + i.logcode + '" data-stat-method="' + t.v + "_" + i.algorithm + '" data-stat-index=' + o + ' data-stat-text="' + i.name + '"> <img src="' + i.ext.img.replace(/.jpg|.png|.jpeg/, u) + '" srcset="' + i.ext.img.replace(/.jpg|.png|.jpeg/, m) + '  2x" alt="' + i.name + '" /> </a> '
				} else e += ' <dl> <dt> <a href="' + t.itemSite + "/" + i.commodityid + '.html" data-log_code="' + i.logcode + '" data-stat-method="' + t.v + "_" + i.algorithm + '" data-stat-index=' + o + ' data-stat-text="' + i.name + '" target="_blank"> <img src="' + i.image.replace(/.jpg|.png|.jpeg/, c) + '" srcset="' + i.image.replace(/.jpg|.png|.jpeg/, l) + '  2x" alt="' + i.name + '" /> </a> </dt> <dd class="xm-recommend-name"> <a href="' + t.itemSite + "/" + i.commodityid + '.html" data-log_code="' + i.logcode + '" data-stat-method="' + t.v + "_" + i.algorithm + '" data-stat-index=' + o + ' target="_blank"> ' + i.name + ' </a> </dd> <dd class="xm-recommend-price">' + i.price + '元</dd> <dd class="xm-recommend-tips"> ', i.comments && (e += " ", parseInt(i.comments) > 0 && (e += " " + i.comments + "人好评 "), e += " "), e += " ", t.isBuy && (e += ' <a href="' + t.itemSite + "/cart/add/" + i.goodsid + '-0-1" data-log_code="' + i.logcode + '" data-stat-gid="' + i.goodsid + '" data-stat-method="' + t.v + "_" + i.algorithm + '" data-stat-index=' + o + ' data-stat-text="' + i.name + '" data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn">加入购物车</a> '), e += ' </dd> <dd class="xm-recommend-notice"></dd> </dl> ';
				e += " </li>"
			}
		return e += "</ul></div>"
	}
}]);