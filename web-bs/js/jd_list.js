/* list-service.js Date:2018-05-10 14:23:34 */
"use strict";
define("//misc.360buyimg.com/user/myjd/ordercenter/js/list-service.js", 
["//misc.360buyimg.com/jdf/1.0.0/ui/switchable/1.0.0/switchable", "//misc.360buyimg.com/jdf/1.0.0/ui/dialog/1.0.0/dialog", "//misc.360buyimg.com/jdf/1.0.0/ui/gotop/1.0.0/gotop", "//misc.360buyimg.com/jdf/1.0.0/ui/tips/1.1.0/tips", "//misc.360buyimg.com/jdf/1.0.0/ui/lazyload/1.0.0/lazyload", "//misc.360buyimg.com/jdf/1.0.0/unit/trimPath/1.0.0/trimPath", "//misc.360buyimg.com/jdf/1.0.0/ui/fixable/1.0.0/fixable", "//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie", "//misc.360buyimg.com/felibs/json3/3.3.2/json3.min.js"], 
function(require) {
	require("//misc.360buyimg.com/jdf/1.0.0/ui/switchable/1.0.0/switchable");
	require("//misc.360buyimg.com/jdf/1.0.0/ui/dialog/1.0.0/dialog");
	require("//misc.360buyimg.com/jdf/1.0.0/ui/gotop/1.0.0/gotop");
	require("//misc.360buyimg.com/jdf/1.0.0/ui/tips/1.1.0/tips");
	require("//misc.360buyimg.com/jdf/1.0.0/ui/lazyload/1.0.0/lazyload");
	require("//misc.360buyimg.com/jdf/1.0.0/unit/trimPath/1.0.0/trimPath");
	require("//misc.360buyimg.com/jdf/1.0.0/ui/fixable/1.0.0/fixable");
	var j = require("//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie");
	require("//misc.360buyimg.com/felibs/json3/3.3.2/json3.min.js");
	var k = {
		bRecycle: $ORDER_CONFIG.isRecycle ? !0 : !1,
		init: function() {
			this.initSearchUnit(), this.initTags(), this.initData(), this.initStatusCss(), this.initCountdown(), this.initEvent(), this.initAlwaysBuy(), this.initQingcang(), this.initAds(), RecommendGuess.init($ORDER_CONFIG.recOrders, j("ipLoc-djd"), j("ipLocation"))
		},
		initStatusCss: function() {
			$(".order-status").each(function() {
				var a = getOrderStatus($.trim($(this).html()));
				$(this).addClass(a)
			})
		},
		initCountdown: function() {
			function a() {
				var a = [];
				var b = $(".count-time");
				for(var c = 0, d = b.length; d > c; c++) {
					var e = parseInt($(b[c]).attr("_val"));
					if(e) {
						var f = void 0;
						try {
							f = $(b[c]).closest("td").attr("id").replace("operate", "")
						} catch(g) {
							f = $(b[c]).closest("li").attr("id").replace("tb-", "")
						}
						a.push(f)
					}
				}
				for(var h = 0, i = a.length; i > h; h++) {
					var j = $("#tb-" + a[h] + " .count-time");
					var k = j.attr("_val");
					var l = 3600;
					var m = 60;
					var n = 86400;
					if(0 === k || 60 > k) {
						$(".count-time").hide(), $(".btn-pay").hide();
						break
					}
					k -= m;
					var o = "";
					o = k / n > 1 ? '<i class="time-icon"></i>\u5269\u4f59' + parseInt(k / n) + "\u5929" + Math.floor(k % n / l) + "\u65f6" : '<i class="time-icon"></i>\u5269\u4f59' + parseInt(k / l) + "\u65f6" + Math.ceil(k % l / m) + "\u5206", j.html(o), j.attr("_val", k), 2 * l > k ? j.addClass("count-time-red") : j.removeClass("count-time-red"), j.show()
				}
			}
			a(), setInterval(function() {
				a()
			}, 6e4)
		},
		initTags: function() {
			var a = location.href;
			var b = location.search;
			var c = {};
			if(-1 != b.indexOf("?")) {
				var d = b.substr(1).split("&");
				for(var e = 0, f = d.length; f > e; e++) {
					var g = d[e].split("=");
					c[g[0]] = unescape(g[1])
				}
			}
			var h = $(".extra-l a");
			var i = 0;
			var j = c.s;
			if(-1 == a.indexOf("recycle") && -1 == a.indexOf("alwaysbuy") && -1 == a.indexOf("tejiaqingcang") ? "1" == j ? i = 1 : "128" == j ? i = 2 : "4096" == j ? i = 0 : "1024" == j ? i = 3 : "-1" == j && (i = 0) : i = -1 != a.indexOf("alwaysbuy") ? "ordertoBuy" : -1 != a.indexOf("tejiaqingcang") ? "ordertoTejia" : "ordertoRecycle", 0 == i || 1 == i || 2 == i || 3 == i || "string" == typeof i) {
				h.removeClass("curr");
				var k = i;
				3 == i && (k = 0), "number" == typeof i ? $(h[k]).addClass("curr") : $("#" + i).addClass("curr")
			}
			"-1" == j && (i = 4);
			var l = {
				4096: "\u5168\u90e8\u72b6\u6001",
				1: "\u7b49\u5f85\u4ed8\u6b3e",
				128: "\u7b49\u5f85\u6536\u8d27",
				1024: "\u5df2\u5b8c\u6210",
				"-1": "\u5df2\u53d6\u6d88"
			};
			var m = $(".state-txt").html();
			m && ($(".state-txt").html(m.replace($(".state-txt").text(), l[j] || "\u5168\u90e8\u72b6\u6001")), $(".state-list li a").removeClass("curr"), $($(".state-list li a")[i]).addClass("curr")), this.initSelect(parseInt(c.d) || 1), null != c.t && ($(".top-search").show(), this.initTypeTab(c.t))
		},
		initTypeTab: function(a) {
			var b = $(".top-search .dl .dd a");
			b.each(function() {
				$(this).removeClass("curr");
				var b = $(this).attr("href");
				var c = b.indexOf(a);
				if(-1 != c) {
					var d = {};
					if(-1 != b.indexOf("?")) {
						var e = b.substr(b.indexOf("?") + 1).split("&");
						for(var f = 0; f < e.length; f++) d[e[f].split("=")[0]] = unescape(e[f].split("=")[1])
					}
					d.t == a && $(this).addClass("curr")
				}
			})
		},
		initSelect: function(a) {
			var b = $(".ordertime-cont .time-txt");
			if(b.length) {
				var c = void 0;
				a = a || "1";
				var d = {
					1: "\u8fd1\u4e09\u4e2a\u6708",
					2: "\u4eca\u5e74\u5185"
				};
				c = d[a], c || (c = 3 == Number(a) ? $(".ordertime-cont .time-list a").last().text().replace("\u8ba2\u5355", "") : a + "\u5e74");
				var e = b.html(); - 1 != e.indexOf("\u8ba2\u5355") && (c += "\u8ba2\u5355"), b.html(e.replace(b.text(), c)), $(".ordertime-cont .time-list a").each(function() {
					return $(this).attr("_val") == a ? void $(this).addClass("curr") : void 0
				}), $("#content").delegate(".lefta-box", "mouseover", function(a) {
					$(a.target).parents(".ordertime-cont").length ? $(".ordertime-cont").addClass("ordertime-hover") : $(".ordertime-cont").removeClass("ordertime-hover")
				}), $("#order02").delegate(".ordertime-cont .time-list a", "click", function() {
					var a = $ORDER_CONFIG.isRecycle ? 0 : 1;
					var b = a ? "list.action" : "recycle.action";
					var c = location.search;
					var d = "";
					if(-1 != c.indexOf("?")) {
						var e = c.substr(1).split("&");
						for(var f = 0, g = e.length; g > f; f++) {
							var h = e[f].split("=");
							if("t" == h[0] && !h[1]) {
								d = "&t=";
								break
							}
						}
					}
					return location.href = b + "?search=0&d=" + $(this).attr("_val") + d, log("orderlist", "click", "alltime"), !1
				})
			}
		},
		initData: function() {
			this.getOrderListCount(), this.getWatingCommentOrderCount();
			var a = this;
			this.initProductData(), this.getHouseOrderState(), this.getBaitiaoInfo(), getPopOrderInfo(function() {
				if(a.showComments(), "1" != $ORDER_CONFIG.CloseToolbarOdo) {
					a.bshowcancelbtn || (a.showCancelButton(), a.bshowcancelbtn = !0);
					var b = $ORDER_CONFIG.pop_sign;
					if(b) {
						b = JSON.parse(b);
						for(var c = 0, d = b.length; d > c; c++) {
							var e = b[c];
							if(116 == e.orderType || 131 == e.orderType) {
								var f = e.orderIds;
								f.forEach(function(a) {
									$("#idUrl" + a).attr("href", "javascript:void(0);").removeAttr("target")
								});
								break
							}
						}
					}
				}
			}), this.initSplitOrder(), this.getAllYuGouInfo(), this.showBuGouButton(), this.showPicPrint(), this.showEbookOrderState(), this.showMusicStatistics(), this.GetChatScriptData(), this.getPopIMInfo(), this.getPopTelInfo(), this.initReminderButtons(), this.initSimilarAndMatchGoods(), this.initGiftJingbean(), this.initBusinessCase(), this.ShowUserSafeHref(), this.initAlphaInfo(), this.initGlobalCS(), this.initInvoiceData(), this.initJiYunInfo(), setTimeout(function() {
				a.bshowcancelbtn || (a.showCancelButton(), a.bshowcancelbtn = !0)
			}, 2e3)
		},
		initEvent: function() {
			var a = this;
			a.bRecycle && $(".deal-state-cont .state-txt b").hide(), $("#content").delegate(".lefta-box", "mouseover", function(b) {
				var c = b.target;
				var d = $(c).parents(".deal-state-cont");
				if(d.length) {
					if(a.bRecycle) return;
					$(".deal-state-cont").addClass("deal-state-hover")
				} else $(".deal-state-cont").removeClass("deal-state-hover");
				var e = $(c).parents(".consignee");
				e.length ? e.find(".prompt-01").show() : $(".consignee .prompt-01").hide();
				var f = $(c).parents(".alphatip");
				f.length ? f.find(".prompt-03").show() : $(".alphatip .prompt-03").hide();
				var g = $(c).parents(".bad-detailstip");
				g.length ? g.find(".prompt-03").show() : $(".bad-detailstip .prompt-03").hide()
			}), $("#order02").delegate(".state-list li", "click", function() {
				var b = $(this).val();
				if(0 == b) {
					var c = -1 != $(this).html().indexOf("\u5df2\u53d6\u6d88") ? !0 : !1;
					b = c ? -1 : b
				}
				var d = location.search.substr(1);
				if(-1 != d.indexOf("&")) {
					d = d.split("&");
					var e = !1;
					for(var f = 0, g = d.length; g > f; f++) {
						var h = d[f].split("=");
						"page" == h[0] && (d[f] = "page=1"), "s" == h[0] && (d[f] = "s=" + b, e = !0)
					}
					d = d.join("&"), e || (d += "&s=" + b)
				} else d = "s=" + b;
				return log("orderlist", "click", "allstatus"), location.href = "list.action?" + d, !1
			}), $(".ui-slidebar").delegate(".jd-im", "click", function() {
				getPamsForChat()
			}), $("#order02").delegate(".btn-im-jd", "click", function() {
				getPamsForChat()
			}), $(".status .tooltip").hover(function() {
				var b = $(this);
				a.showUmsMessage(b.attr("_orderId"), b.attr("_ordertype"), b.attr("_orderstatus"), b.attr("_orderurl"), b.attr("_ordership")), $("#tracker" + $(this).attr("_orderId")).data("hide", !1)
			}, function() {
				var a = $(".prompt-01", $(this));
				a.hide(), $("#tracker" + $(this).attr("_orderId")).data("hide", !0)
			}), $("#order02").delegate(".order-cancel", "click", function() {
				var b = $(this);
				var c = b.attr("_status");
				return "1" == c || "2" == c ? cancelOrderWarningDialog(c) : a.cancleOrder(b.attr("_oid"), b.attr("_passkey"), b.attr("_url"), b.data("dialogVersion")), log("orderlist", "click", "quxiao"), !1
			}), $("tbody").hover(function() {
				var b = $(".order-del", $(this));
				b.show();
				var c = "\u5220\u9664";
				a.bRecycle && (c = "\u6c38\u4e45\u5220\u9664"), b.attr("title", c)
			}, function() {
				var a = $(".order-del", $(this));
				a.hide()
			}), $("#order02").delegate(".order-del", "click", function() {
				var b = $(this);
				var c = b.attr("_orderid"),
					d = b.attr("_passkey");
				return a.bRecycle ? (a.delOrderDlg(c, d), log("orderlist", "click", "yongjiushanchu")) : (a.removeOrderDlg(c, d), log("orderlist", "click", "shanchu")), !1
			}), $("body").delegate(".remove-order", "click", function() {
				var b = $(this);
				a.removeOrder(b.attr("_orderid"), b.attr("_passkey")), $.closeDialog()
			}), $("body").delegate(".remove-order-cancel", "click", function() {
				$.closeDialog()
			}), $("body").delegate(".delete-order", "click", function() {
				var b = $(this);
				a.delOrder(b.attr("_orderid"), b.attr("_passkey")), $.closeDialog()
			}), $("body").delegate(".delete-order-cancel", "click", function() {
				$.closeDialog()
			}), $("#order02").delegate(".order-recover", "click", function() {
				var b = $(this);
				a.recoverOrder(b.attr("_orderid"), b.attr("_passkey"))
			}), $("#order02").delegate(".order-confirm", "click", function() {
				var b = $(this);
				return a.confirmGoodsDlg(b.attr("_oid"), b.attr("_otype"), b.attr("_paytype"), b.attr("_shiptype"), b.attr("_rated")), log("orderlist", "click", "querenshouhuo"), !1
			}), $("body").delegate(".confirm-good", "click", function() {
				var b = $(this);
				a.confirmGoods(b.attr("_oid"), b.attr("_otype"), b.attr("_paytype"), b.attr("_shiptype"), b.attr("_rated")), $.closeDialog()
			}), $("body").delegate(".confirm-good-cancel", "click", function() {
				$.closeDialog()
			}), $("body").delegate(".comment-good-cancel", "click", function() {
				location.reload()
			}), $("#order02").delegate(".ebook-down", "click", function() {
				var b = $(this);
				a.OpenEbookClient(b.attr("_oid"), b.attr("_bid"))
			}), $("#order02").delegate(".btn-alpha", "click", function(b) {
				$(".alphatip .prompt-03").hide();
				var c = $(this).attr("oid");
				a.remindOrder(c), b.preventDefault()
			}), $("#order02").delegate(".homelove", "click", function() {
				a.openHomelove($(this).data("url"))
			}), $(".ui-slidebar").delegate("li", "hover", function() {
				$(this).toggleClass("hover")
			}), $(".backtop").gotop({
				hasAnimate: !0
			})
		},
		getOrderListCount: function() {
			var a = $ORDER_CONFIG.getOrderListCountJson;
			if(a) {
				var b = "";
				window.location.search.length > 0 && $.each(window.location.search.replace(/^\?/, "").split("&"), function(a, c) {
					var d = c.split("=");
					"d" === d[0] && (b = d[1])
				}), $.getJSON(a + "?" + (b ? "d=" + b + "&" : "") + "callback=?", function(a) {
					var b = a.info;
					if(b) {
						var c = b.waitPay;
						var d = b.waitReceive;
						if(c) {
							var e = '<a href="//order.jd.com/center/list.action?s=1"><em>' + c + "</em></a>";
							$("#ordertoPay").after(e).show()
						}
						if(d) {
							var f = '<a href="//order.jd.com/center/list.action?s=128"><em>' + d + "</em></a>";
							$("#ordertoReceive").after(f).show()
						}
					}
				})
			}
		},
		getWatingCommentOrderCount: function() {
			$.getJSON("//club.jd.com/myJdcomments/getVoucherOrderCount.action?callback=?", function(a) {
				if(a && a.commentCount > 0) {
					var b = '<a href="//club.jd.com/mycomments.aspx"><em>' + (a.commentCount > 30 ? "30+" : a.commentCount) + "</em></a>";
					$("#ordertoComment").after(b).show()
				}
			})
		},
		getAllOrderWareIds: function() {
			if($ORDER_CONFIG.orderIdAndWareIds) {
				var a = {};
				var b = $ORDER_CONFIG.orderIdAndWareIds.split(",");
				for(var c = 0, d = b.length; d > c; c++) {
					var e = b[c];
					var f = e.substring(0, e.indexOf("_"));
					a[f] || (a[f] = e.substring(e.indexOf("_") + 1).split("_").join(","))
				}
				return a
			}
		},
		getAllOnlineOrders: function(a) {
			if($ORDER_CONFIG.orderIdAndWareIds) {
				var b = $ORDER_CONFIG.orderIdAndWareIds.split(",");
				for(var c = 0, d = a.length; d > c; c++) {
					var e = a[c];
					if(1 != e.state)
						for(var f = b.length - 1, g = f; g > -1; g--) {
							var h = b[g]; - 1 != h.indexOf("_" + e.productId) && b.splice(g, 1)
						}
				}
				var i = [];
				for(var j = 0, k = b.length; k > j; j++) i.push(b[j].substring(0, b[j].indexOf("_")));
				return i
			}
		},
		initProductData: function() {
			if("undefined" == typeof $ORDER_CONFIG.orderWareIds) return void $("#order02 .p-img").lazyload({
				type: "img",
				placeholderClass: "err-product"
			});
			var a = $ORDER_CONFIG.orderWareIds;
			var b = $ORDER_CONFIG.orderWareTypes;
			var c = $ORDER_CONFIG.orderIds;
			var d = $ORDER_CONFIG.orderTypes;
			var e = $ORDER_CONFIG.orderSiteIds;
			if(a || b || c || d || e) {
				var f = this;
				var g = $ORDER_CONFIG.mainIdAndShadowIds;
				var h = $ORDER_CONFIG["3cZulinOrders"]; {
					$ORDER_CONFIG.sellForMoneyUrl
				}
				$.post("//order.jd.com/lazy/getOrderProductInfo.action", {
					orderWareIds: a,
					orderWareTypes: b,
					orderIds: c,
					orderTypes: d,
					orderSiteIds: e
				}).then(function(a) {
					var b = a ? a.length : 0;
					var c = {};
					if(g) {
						var d = g.split(",");
						var e = [];
						for(var i = 0, j = d.length; j > i; i++) {
							var k = d[i].split("_");
							e.push(k)
						}
						var l = !1;
						for(var m = 0; b > m; m++) {
							for(var n = 0, o = e.length; o > n; n++) {
								var p = e[n];
								if(a[m].productId == p[0]) {
									for(var q = 1, r = p.length; r > q; q++) c[p[q]] = a[m].imgPath;
									l = !0;
									break
								}
							}
							if(l) break
						}
					}
					var s = function(b) {
						var d = a[b];
						var e = $(".p-" + d.productId);
						e.each(function() {
							var b = $(this);
							$(".p-img a", b).attr("href", d.wareUrl), $(".p-img img", b).attr("title", d.name).attr("data-lazy-img", c[d.productId] || d.imgPath);
							var e = '<a href="' + d.wareUrl + '" class="a-link" clstag="click|keycount|orderinfo|order_product" target="_blank" title="' + d.name + '">' + d.name + "</a>";
							$(".p-name", b).html(e);
							var f = d.secondHandNameAndUrl;
							if(f) {
								var g = b.parents(".tr-bd").attr("oty").split(",")[0];
								if("131" != g) {
									var h = f.split(",");
									var i = h[0];
									var j = h[1] || "#none";
									e = '<a href="' + j + '" target="_blank" class="a-br" clstag="click|keycount|orderinfo|order_showsell">' + i + "</a>", b.parent().find(".goods-repair").append(e)
								}
							}
						})
					};
					for(var t = 0; b > t; t++) s(t);
					if(h) {
						var u = h.split(",");
						for(var v = 0, w = u.length; w > v; v++) {
							var x = u[v];
							$("#tb-" + x).find(".p-name").prepend('<span class="p-dabaitiao">\u62cd\u62cd</span>')
						}
					}
					$("#order02 .p-img").lazyload({
						type: "img",
						placeholderClass: "err-product"
					});
					var y = f.getAllOnlineOrders(a) || [];
					for(var z = 0, A = y.length; A > z; z++) {
						var B = y[z];
						$("#operate" + B + " .btn-again").addClass("btn-again-show").show()
					}
				})
			}
		},
		initSplitOrder: function() {
			var a = $ORDER_CONFIG.parentIds;
			if(a) {
				if($ORDER_CONFIG.noShowParentIds) {
					var b = $ORDER_CONFIG.noShowParentIds.split(",");
					for(var c = 0, d = b.length; d > c; c++) $("#parent-" + b[c]).hide()
				}
				$.post("//order.jd.com/lazy/getParentOrderList.action", {
					pin: $ORDER_CONFIG.currpin,
					parentIds: a
				}, function(a) {
					if(a.success) {
						var b = a.parentOrderList;
						var c = void 0;
						for(var d = 0, e = b.length; e > d; d++) {
							var f = b[d];
							c = $("#parent-" + f.orderId), $(".order-consignee", c).html($(".order-consignee", c).html() + f.customerName), $(".order-count em", c).html("&yen;" + f.shouldPay), $(".order-pay", c).html($(".order-pay", c).html() + f.paymentTypeName);
							var g = $(".tr-operate a", c);
							g.data("sendpay") || g.attr("href", f.itemUrl)
						}
						$(".split-row02", c).show()
					}
				})
			}
		},
		getHouseOrderState: function() {
			var a = $ORDER_CONFIG.houseOrderIds;
			a && $.post("/lazy/getHouseOrdersState.action", {
				orderIds: a
			}, function(a) {
				var b = a;
				for(var c = 0, d = b.length; d > c; c++) $("#track" + b[c].orderId).find(".order-status").html(b[c].statusDesc).addClass(getOrderStatus(b[c].statusDesc))
			})
		},
		initGlobalCS: function() {
			var a = $ORDER_CONFIG.joyBuyOrder;
			a && (a = a.split(","), $.each(a, function(a, b) {
				$("#tb-" + b).find(".order-shop").append('<a class="btn-mail" href="mailto:' + ($ORDER_CONFIG.globalMail || "global-cs@jd.com") + '"></a>')
			}))
		},
		initInvoiceData: function() {
			var a = $ORDER_CONFIG.invoiceDetailsOrders;
			a && $.post("//order.jd.com/lazy/findOrdersHaveDetails.action", {
				orderids: a
			}, function(a) {
				var b = a.orders;
				var c = b && b.split(",") || [];
				c.forEach(function(a) {
					var c = $("#operate" + a).find(".btn-again");
					var d = "<a class='' target='_blank' href='//myivc.jd.com/fpzz/zzxqByOrderId?orderId=" + a + "' clstag='click|keycount|orderinfo|invoice_show'>\u67e5\u770b\u53d1\u7968</a><br>";
					c.length ? c.before(d) : $("#operate" + a).append(d)
				})
			})
		},
		initJiYunInfo: function() {
			window.$ORDER_CONFIG && window.$ORDER_CONFIG.jiYunOrders && $.get("/lazy/getOrderSkuStatus.action?jiyunList=" + window.$ORDER_CONFIG.jiYunOrders).then(function(a) {
				"0" === a.resultCode && $.each(a.orderSkuResList, function(a, b) {
					if(b.jyDetailLink || b.jyGoodLink) {
						var c = $("#tb-" + b.orderId).find(".p-" + b.skuId);
						0 === c.siblings(".goods-repair").length && $('<div class="goods-repair"></div>').insertAfter(c.siblings(".goods-number")), c.siblings(".goods-repair").prepend('<a href="' + (b.jyDetailLink || b.jyGoodLink) + '" target="_blank">' + (b.jyDetailLink ? "\u67e5\u770b\u96c6\u8fd0\u8be6\u60c5" : "\u652f\u4ed8\u96c6\u8fd0\u8fd0\u8d39") + "</a><br>")
					}
				})
			})
		},
		getBaitiaoInfo: function() {
			var a = $ORDER_CONFIG.not_pop_ids + $ORDER_CONFIG.pop_ids;
			a && $.getJSON("//btshow.jd.com/queryBtOrderInfos.do?callback=?", {
				orderIds: a
			}, function(a) {
				if(a.result.isSuccess) {
					var b = a.orderInfos;
					for(var c = 0, d = b.length; d > c; c++) {
						var e = b[c];
						if(1 == e.isBtPay) {
							var f = $("#tb-" + e.orderId);
							if($(".amount .ftx-13", f).html("\u5728\u7ebf\u652f\u4ed8/\u767d\u6761"), 0 == e.repayStatus) {
								var g = '<a href="//baitiao.jd.com/v3/ious/list" class="a-baitiao">\u767d\u6761\u8fd8\u6b3e</a><br/>';
								1 == e.overDueStatus && (g = '<a href="//baitiao.jd.com/v3/ious/list" class="a-baitiao"><i class="tag"><b class="arrow"></b>\u903e\u671f</i>\u767d\u6761\u8fd8\u6b3e</a><br/>'), $(".operate", f).prepend(g)
							}
						}
					}
				}
			})
		},
		showComments: function() {
			var a = $ORDER_CONFIG.not_pop_ids + $ORDER_CONFIG.pop_ids;
			a && (this.bCommentshowed || (this.bCommentshowed = !0, $.getJSON("//club.jd.com/mycomments/getListOrderHandleState.action?callback=?", {
				orderIds: a
			}, function(a) {
				$.each(a.content, function(a, b) {
					var c = b.orderId;
					var d = $("#track" + c);
					var e = d.attr("oty");
					if(e) {
						var f = e.split(",");
						var g = "";
						if(b.isAppraise ? g += "<a class='' target='_blank' href='//club.jd.com/JdVote/TradeComment.aspx?ruleid=" + c + "&ot=" + f[0] + "&payid=" + f[1] + "&shipmentid=" + f[2] + "' clstag='click|keycount|orderinfo|product_comment'>\u8bc4\u4ef7</a>" : b.isAfterCommentShow && (g += "<a class='' target='_blank' href='//club.jd.com/afterComments/orderPublish.action?orderId=" + c + "' clstag='click|keycount|orderinfo|product_commentAgain'>\u8ffd\u8bc4</a>"), b.isShare && (g += (g.length > 0 ? "|" : "") + "<a class='' clstag='click|keycount|orderinfo|product_show' href='//club.jd.com/mycomments.aspx?sort=1' target='_blank'>\u6652\u5355</a>"), g += "<br>", b.isAppraise || b.isShare || b.isAfterCommentShow) {
							var h = $(".btn-again", d);
							h.length ? h.before(g) : $("#operate" + c).prepend(g)
						}
					}
				})
			})))
		},
		showCancelButton: function() {
			var a = $.trim($ORDER_CONFIG.showCacelIds);
			var b = $ORDER_CONFIG.baitiao_link;
			if(a && 0 != b) {
				var c = a.split(",");
				var d = "//orderop.jd.com";
				jQuery.ajax({
					type: "GET",
					url: d + "/toolbar_showCancelButtonListNew",
					data: {
						orderList: a,
						orderid: c[0]
					},
					dataType: "jsonp",
					contentType: "application/json",
					cache: !1,
					success: function(a) {
						for(var b = 0, c = a.length; c > b; b++) {
							var d = a[b],
								e = d.orderId;
							var f = "";
							if(("1" == d.statusString || "2" == d.statusString) && (f = '_status="' + d.statusString + '"'), e) {
								var g = d.isShowCancelDetail ? '<a class="a-link" href="' + d.url + '" target="_blank">\u67e5\u770b\u53d6\u6d88\u8be6\u60c5</a><br>' : '<a class="a-link order-cancel" href="javascript:void(0);" data-dialog-version="' + (d.dialogVersion ? d.dialogVersion : "0") + '" _oid="' + e + '" _passkey="' + d.passKey + '" _url="' + d.url + '" ' + f + " >\u53d6\u6d88\u8ba2\u5355</a><br>";
								var h = $("#operate" + e + " .operate");
								h.find(".J-reminder").length > 0 ? $(g).insertBefore(h.find(".J-reminder")) : $("#operate" + e + " .operate").append($(g))
							}
						}
					}
				})
			}
		},
		cancleOrder: function(a, b, c, d) {
			if("1" != $ORDER_CONFIG.CloseToolbarOdo) {
				var e = "true" == $ORDER_CONFIG.downGuessLike ? 1 : 2;
				var f = "//orderop.jd.com";
				var g = this.getAllOrderWareIds()[a];
				var h = "";
				g && (h = "&wareIds=" + g), a > 0 && b && $("body").dialog("201707" == d ? {
					title: "\u9009\u62e9\u53d6\u6d88\u539f\u56e0",
					width: 480,
					height: 265,
					type: "iframe",
					mainId: "cancel-order",
					source: f + "/" + c + "&orderId=" + a + "&key=" + b + h + "&rd" + Math.random() + "&downGuessLike=" + e,
					onCancel: function() {
						$("body").data("cancel-done") && window.location.reload()
					}
				} : {
					title: "\u63d0\u793a",
					width: 500,
					height: 400,
					type: "iframe",
					source: f + "/" + c + "&orderId=" + a + "&key=" + b + h + "&rd" + Math.random() + "&downGuessLike=" + e,
					onReady: function() {
						var a = this;
						setTimeout(function() {
							a.iframe.css({
								height: "100%"
							})
						}, 1e3), this.el.find("iframe")[0].contentWindow.focus()
					}
				})
			}
		},
		showBuGouButton: function() {
			var a = $ORDER_CONFIG.buGouOrderIdAndState;
			if(a) {
				a = $.parseJSON(a);
				var b = [];
				$.each(a, function(a, c) {
					var d = c.split("_");
					b.push('{"state": "' + d[1] + '","orderId":"' + d[0] + '"}')
				}), b = "[" + b.join(",") + "]";
				var c = "//bugou.jd.com/isAllowBugou?param=" + b;
				$.ajax({
					type: "get",
					url: c,
					dataType: "jsonp",
					cache: !1,
					timeout: 2e3,
					success: function(a) {
						a && a.isSuccess && $(a.data).each(function(a, b) {
							"0" !== b.isAllow && $("#operate" + b.orderId).prepend('<a clstag="click|keycount|orderinfo|order_check" target="_blank" href="https://bugou.jd.com/bugou/chooseService?orderId=' + b.orderId + '">\u9009\u8d2d\u4eac\u4e1c\u670d\u52a1</a><br/>')
						})
					}
				})
			}
		},
		showPicPrint: function() {
			$ORDER_CONFIG.printOrders && $.post("//order.jd.com/lazy/getOrderPrinting.action", {
				orderId: $ORDER_CONFIG.printOrders
			}).then(function(a) {
				var b = a[0].data.orderInfoList;
				b.forEach(function(a) {
					var b = a.orderId;
					if(a.showFlag) {
						var c = $("#operate" + b + " .operate");
						if(!c.find("a").hasClass("a-uploadPic")) {
							var d = '<a class="a-link a-uploadPic" href="' + a.url + '" target="_blank">\u4e0a\u4f20\u7167\u7247</a><br>';
							c.append(d)
						}
					}
				})
			})
		},
		getAllYuGouInfo: function() {
			var a = $ORDER_CONFIG.yuShouOrderListJson;
			if(a) {
				jQuery.ajax({
					type: "GET",
					url: "//yuding.jd.com/ordersoa/presale/ordersbatch?jsonstr=" + a + "&_=" + Math.random(),
					data: "",
					dataType: "jsonp",
					timeout: 6e3,
					success: function(a) {
						if(a && a.ret)
							for(var b = 0; b < a.ret.length; b++) {
								var c = a.ret[b];
								if(c.orderid) {
									var d = function() {
										var a = function(a) {
											return a = a || "", a.match(/^\d/) ? "&yen;" + a : a || "&nbsp;"
										};
										var b = function() {
											return Math.random().toString().replace("0.", "")
										};
										var d = function(a) {
											var b = "";
											var c = void 0;
											return a.ds && (c = '<i class="time-icon"></i>\u5269\u4f59' + parseInt(a.ds / 3600) + "\u65f6" + Math.ceil(a.ds % 3600 / 60) + "\u5206", b = '<div style="display:block" class="count-time" _val="' + a.ds + '">' + c + "</div>"), b
										};
										var e = function(a, b) {
											var c = "";
											if(0 == b.couponResult) {
												var d = $ORDER_CONFIG.downYushouCoupon;
												if(!d || d && "false" == d) {
													var e = "//details.jd.com/normal/useCoupon.action?orderid=" + g;
													return c = '<a class="btn-pay" href="' + e + '" target="_blank">\u4ed8\u6b3e</a>'
												}
											}
											if(!a) return c;
											var f = a.split("=");
											if("url" == f[0]) {
												var h = a.substring(4);
												c = '<a class="btn-pay" href="' + h + '" target="_blank">\u4ed8\u6b3e</a>'
											} else if("time" == f[0]) {
												var i = f[1].split("-");
												c = '<div class="time-title"><i class="t-icon"></i>\u652f\u4ed8\u65f6\u95f4</div>' + i[0] + "<br>\u81f3<br>" + i[1]
											} else c = f[0];
											return c
										};
										var f = c.data;
										var g = f.orderid;
										if(!g) return "continue";
										var h = f.row1;
										var i = f.row2;
										$.isEmptyObject(i) || "\u5df2\u5b8c\u6210" != i.d || (f.bold = ""), $("#yuShouDIV-" + g + " .stage-cont > div").addClass("stage stage-finish"), $("#yuShou-" + g + "-" + f.bold + "Div").addClass("stage-stress").removeClass("stage-finish"), $.isEmptyObject(h) || "\u672a\u5b8c\u6210" != h.d || $("#yuShouDIV-" + g + " .stage-cont > div").removeClass("stage-finish stage-stress");
										var j = $("#yuShou-" + g + "-row1Div");
										var k = $("#yuShou-" + g + "-row2Div");
										if($.isEmptyObject(h)) j.hide();
										else {
											var l = '<ul class="clearfix"><li class="fore1">' + h.item + '</li><li class="fore2"><strong>' + a(h.omey) + '</strong></li><li class="fore3"><span class="' + (getOrderStatus(h.d) || "ftx-04") + '">' + (h.d || "&nbsp;") + '</span></li><li id="tb-' + b() + '" class="fore4">' + d(h) + e(h.operate, h) + "</li></ul>";
											j.html(l)
										}
										if($.isEmptyObject(i)) k.hide();
										else {
											var m = '<br><span class="warning">\u5b9a\u91d1\u652f\u4ed8\u540e\u4e0d\u9000\u8fd8\uff0c\u8bf7\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u652f\u4ed8\u5c3e\u6b3e\u3002</span>';
											var n = '<ul class="clearfix"><li class="fore1">' + (i.item || "&nbsp;") + (k.hasClass("stage-stress") ? m : "") + '</li><li class="fore2"><strong class="' + (k.hasClass("stage-stress") ? "ftx-01" : "") + ' ">' + (parseInt(f.isHideRealPrice) ? "\u5f85\u53d1\u5e03" : a(i.omey)) + "</strong>" + (parseInt(f.couponDiscount) ? '<span class="asbr">\u4f18\u60e0\u5238\u5df2\u62b5\u6263\uff1a\uffe5' + f.couponDiscount + "</span>" : "") + '</li><li class="fore3"><span class="' + getOrderStatus(i.d) + '">' + (i.d || "&nbsp;") + '</span></li><li id="tb-' + b() + '" class="fore4">' + d(i) + e(i.operate, i) + "</li></ul>";
											k.html(n)
										}
										$.isEmptyObject(h) && $.isEmptyObject(i) ? $("#yuShouDIV-" + g).hide() : $("#yuShouDIV-" + g).show();
										var o = $("#tb-" + g).find(".amount");
										var p = o.find("input").val();
										if(p) {
											var q = p.trim().split(",");
											var r = "<span>\u603b\u989d &yen;" + q[0] + "</span><br>" + (parseInt(f.totalPrice) ? "<strong>\u5e94\u4ed8</strong><br><strong>&yen;" + f.totalPrice + "</strong><br>" : "") + '<span class="ftx-13">' + q[2] + "</span>";
											parseInt(f.isHideRealPrice) && (r = '<span>\u5f85\u53d1\u5e03</span><br><span class="ftx-13">' + q[2] + "</span>"), o.html(r).show()
										} else o.show()
									}();
									if("continue" === d) continue
								}
							}
					}
				})
			}
		},
		GetChatScriptData: function() {
			var a = document.createElement("script");
			a.type = "text/javascript", a.src = "//chat1.jd.com/api/checkByJd.action?t=" + (new Date).getTime() + "&id=orderTmDiv", document.getElementsByTagName("head")[0].appendChild(a)
		},
		getPopIMInfo: function() {
			var a = $ORDER_CONFIG.popVenderIds;
			if(a) {
				var b = a.split(",");
				jQuery.ajax({
					type: "GET",
					dataType: "jsonp",
					url: "//chat1.jd.com/api/checkChat?venderList=" + a,
					success: function(a) {
						if(a)
							for(var c = 0; c < b.length; c++)
								for(var d = 0; d < a.length; d++) {
									var e = a[d],
										f = e.venderId;
									b[c] == f && $(".venderChat" + f).attr("href", "//" + e.chatDomain + "/index.action?venderId=" + f)
								}
					}
				})
			}
		},
		getPopTelInfo: function() {
			var a = $ORDER_CONFIG.popVenderIds;
			a && jQuery.ajax({
				type: "POST",
				dataType: "json",
				data: {
					popVenderIds: a
				},
				url: "//order.jd.com/lazy/getPopTelInfo.action",
				success: function(b) {
					if(b) {
						var c = a.split(",");
						for(var d = 0; d < c.length; d++) {
							var e = c[d];
							var f = $(".venderTel" + e);
							var g = b[e];
							if(g) {
								var h = $(".venderName" + e);
								var i = h.attr("_type");
								var j = $ORDER_CONFIG.virtual_name_link.split(";");
								var k = {};
								for(var l = 0, m = j.length; m > l; l++)
									if(j[l]) {
										var n = j[l].split("_");
										k[n[0]] = {
											name: n[1],
											url: n[2]
										}
									}
								var o = k[i];
								var p = g.venderTel;
								var q = o && o.url || g.venderUrl;
								var r = o && o.name || g.venderName;
								q = q.replace(/^http:/, ""), $(".venderName" + e).attr("href", q).html(r).attr("title", r), $(".82venderName" + e).html(r), p && -1 == p.indexOf("null") ? f && f.length && f.parent().html() && -1 == f.parent().html().indexOf(p) && f.after(p).show() : f.hide()
							} else f.hide()
						}
					}
				}
			})
		},
		initSearchUnit: function() {
			var a = this;
			var b = "\u5546\u54c1\u540d\u79f0/\u5546\u54c1\u7f16\u53f7/\u8ba2\u5355\u53f7";
			$("#ip_keyword").css("color", "#ccc"), $("#ip_keyword").val(b).bind("focus", function() {
				this.value == b && (this.value = "", this.style.color = "#333")
			}).bind("blur", function() {
				"" == this.value && (this.value = b, this.style.color = "#ccc")
			}), $("#order02").delegate(".search-btn", "click", function() {
				return a.doSearch(), log("orderlist", "click", "sousuo"), !1
			}), $("#order02").delegate("#ip_keyword", "keydown", function(b) {
				return b = b || window.event, 13 == b.keyCode ? (a.doSearch(), !1) : void 0
			}), $("#order02").delegate(".high-search", "click", function() {
				var a = $(".top-search");
				return a.is(":visible") ? void a.hide() : (a.show(), log("orderlist", "click", "gaoji"), !1)
			}), $("#order02").delegate(".top-search .btn-9", "click", function() {
				return $(".top-search").hide(), log("orderlist", "click", "fanhui"), !1
			}), $("#order02").delegate(".top-search .ts-del", "click", function() {
				return $(".top-search").hide(), log("orderlist", "click", "guanbi"), !1
			})
		},
		doSearch: function() {
			var a = $.trim($("#ip_keyword").val());
			a && "\u5546\u54c1\u540d\u79f0/\u5546\u54c1\u7f16\u53f7/\u8ba2\u5355\u53f7" != a ? location.href = "//order.jd.com/center/search.action?keyword=" + a : alertDlg("\u8bf7\u8f93\u5165\u67e5\u8be2\u5173\u952e\u8bcd\uff01")
		},
		showUmsMessage: function(a, b, c, d, e) {
			var f = $("#tracker" + a);
			if($.trim(f.html())) {
				f.closest(".prompt-01").show();
				var g = f.closest(".tooltip");
				var h = g.find(".prompt-01");
				var i = h.find(".p-arrow");
				toFixUpLoc(g, h, i), toFixDownLoc(h, i)
			} else {
				var j = void 0;
				j = "1" != $ORDER_CONFIG.switchMultiPackage ? "//order.jd.com/lazy/getOrderTrackInfoForNewList.action" : "//order.jd.com/lazy/getOrderTrackInfoMultiPackage.action", this.getNewUmsMessage({
					pin: $ORDER_CONFIG.currpin,
					orderId: a,
					orderType: b,
					orderStatus: c
				}, d, e, j)
			}
			var k = (new Date).getTime();
			(!this.appTime || this.appTime && k - this.appTime > 18e5) && (this.appTime = k, this.showAppEnter(a, f.parent()))
		},
		getNewUmsMessage: function(a, b, c, d) {
			var e = this;
			jQuery.ajax({
				type: "GET",
				url: d,
				data: a,
				dataType: "jsonp",
				cache: !1,
				success: function(d) {
					var f = d.info;
					if(f) {
						var g = f.orderTrackGroupInfoList;
						"1" != $ORDER_CONFIG.switchMultiPackage ? e.showSinglePackageInfo(d, a, b, c) : g && g.length < 2 ? e.showSinglePackageInfo(d, a, b, c) : g && g.length >= 2 && e.showMultiPackageInfo(g, a, b)
					}
				}
			})
		},
		showMultiPackageInfo: function(a, b, c) {
			var d = [];
			for(var e = 0, f = a.length; f > e; e++) {
				var g = a[e].orderTrackShowList;
				var h = [];
				g && g.length && (h = g.reverse()), d.push(h)
			}
			var i = '<div class="prompt-01 prompt-package-box" style="display:block"><div class="pc" id="tracker${orderId}"><div class="package-title"><s></s><span class="warn">\u60a8\u8ba2\u5355\u4e2d\u7684\u5546\u54c1\u7531\u7b2c\u4e09\u65b9\u5546\u5bb6\u53d1\u8d27\uff0c\u5df2\u6253\u5305\u4e3a${list.length}\u4e2a\u5305\u88f9\u5206\u5f00\u914d\u9001\uff0c\u7ed9\u60a8\u5e26\u6765\u7684\u4e0d\u4fbf\u656c\u8bf7\u8c05\u89e3</span></div><div class="package-title-tabs"><ul>{for item in list}{if item_index<showNum}<li class="package-title-tab {if item_index==0} focus {/if}" data-id="tab${item_index}"><a href="#none">\u5305\u88f9 ${parseInt(item_index)+1}</a></li>{/if}{if item_index>showNum-1}<li class="package-title-tab last"><a href="${orderurl}" target="_blank">\u66f4\u591a</a></li>{/if}{/for}</ul></div><div class="package-content-tabs"><ul>{for item in list}<li class="package-content-tab tab${item_index} {if item_index==0} focus {/if}"><div class="logistics-cont"><ul>{for data in item}{if data_index < 5}<li class="{if data_index==0}first{/if}"><i class="node-icon"></i>${data.Content}<div class="ftx-13">${data.CreationTime}</div></li>{if item.length>4 && data_index == 4}<li class="more"><i class="node-icon"></i><a href="${orderurl}" target="_blank">\u67e5\u770b\u66f4\u591a</a></li>{/if}{/if}{/for}</ul></div></li>{/for}</ul></div></div><div class="p-arrow p-arrow-left"></div></div>';
			c = c || "javascript:void(0);";
			var j = 6;
			var k = i.process({
				list: d,
				orderId: b.orderId,
				orderurl: c,
				showNum: j
			});
			var l = $("#tracker" + b.orderId);
			if(!l.data("hide")) {
				var m = l.closest(".tooltip");
				var n = m.find(".prompt-01");
				var o = n.find(".p-arrow");
				toFixUpLoc(m, n, o), toFixDownLoc(n, o), l.closest(".prompt-01")[0].outerHTML = k, l.closest(".prompt-01").show(), $(".prompt-01").delegate(".package-title-tab", "click", function() {
					var a = $(this).data("id");
					a && ($(".package-title-tab").removeClass("focus"), $(this).addClass("focus"), $(".package-content-tab").removeClass("focus"), $(".package-content-tabs ." + a).addClass("focus"))
				})
			}
		},
		showSinglePackageInfo: function(a, b, c, d) {
			var e = "<ul>";
			var f = a.info;
			var g = f.orderTrackGroupInfoList;
			var h = void 0;
			var i = f.deliveryTip;
			var j = $("#tracker" + b.orderId);
			if(f.success)
				if(g && g.length) {
					var k = 0;
					var l = void 0;
					var m = void 0;
					for(var n = g.length, o = n - 1; o > -1; o--) {
						if(l = g[o], m = l.orderTrackShowList, h = l.shipId, 0 == l.groupType)
							if(h) {
								var p = "";
								switch(d) {
									case "65":
										p = "\u4eac\u4e1c\u914d\u9001";
										break;
									case "64":
									case "69":
										p = "\u4e0a\u95e8\u81ea\u63d0";
										break;
									default:
										p = "\u666e\u901a\u5feb\u9012"
								}
								j.siblings(".p-tit").html(p + "&nbsp;&nbsp;&nbsp;\u8fd0\u5355\u53f7\uff1a" + h)
							} else 69 == d && j.siblings(".p-tit").html("\u4e0a\u95e8\u81ea\u63d0");
						else 1 == l.groupType && j.siblings(".p-tit").html(l.thirdName + "&nbsp;&nbsp;&nbsp;\u8fd0\u5355\u53f7\uff1a" + h);
						var q = "";
						if(m) {
							if(k++, 6 > k) {
								var r = 1 == k ? "first" : "";
								q += '<li class="' + r + '"><i class="node-icon"></i><a href="' + (c || "javascript:void(0);") + '" target="_blank">' + m[m.length - 1].Content + "</a>" + (i ? "<br/>" + i : "") + '<div class="ftx-13">' + m[m.length - 1].CreationTime + "</div></li>"
							}
							var s = m.length;
							var t = s - 2;
							var u = s - 7;
							for(u = u > -1 ? u : -1; t > u; t--) {
								if(k++, k > 5) {
									q += '<li><i class="node-icon"></i><a href="' + (c || "javascript:void(0);") + '" target="_blank">\u67e5\u770b\u66f4\u591a</a></li>';
									break
								}
								q += '<li><i class="node-icon"></i><a href="' + (c || "javascript:void(0);") + '" target="_blank">' + m[t].Content + '</a><div class="ftx-13">' + m[t].CreationTime + "</div></li>"
							}
							if(e += q, k > 5) break
						}
					}
				} else i && (e += '<li class="first"><i class="node-icon"></i>' + i + '<div class="ftx-13">' + $("#datasubmit-" + b.orderId).val() + "</div></li>");
			if(f.success && g && g.length || f.success && i || (e += '<li class="first"><i class="node-icon"></i>\u60a8\u63d0\u4ea4\u4e86\u8ba2\u5355\uff0c\u8bf7\u7b49\u5f85\u7cfb\u7edf\u786e\u8ba4<div class="ftx-13">' + $("#datasubmit-" + b.orderId).val() + "</div></li>"), e += "</ul>", j.html(e), !j.data("hide")) {
				j.closest(".prompt-01").show();
				var v = j.closest(".tooltip");
				var w = v.find(".prompt-01");
				var x = w.find(".p-arrow");
				try {
					toFixUpLoc(v, w, x), toFixDownLoc(w, x)
				} catch(y) {}
			}
		},
		showAppEnter: function(a, b) {
			jQuery.ajax({
				type: "POST",
				url: "//order.jd.com/lazy/showOrderTrack.action?orderId=" + a,
				success: function(c) {
					c && jQuery.ajax({
						url: "//order.jd.com/lazy/getOrderToken.action",
						data: {
							orderId: a
						},
						success: function(c) {
							var d = "https://vs.m.jd.com/appdau/index.html?orderId=" + a + "&token=" + c.token + "&loginType=2&from=order";
							var e = encodeURIComponent(d);
							var f = "//qrimg.jd.com/" + e + "-80-1-1-0.png";
							var g = '<div class="tip-inner"><div class="tip-img"><img src="' + f + '" alt=""></div><div class="tip-cont"><div class="tip-title">\u60f3\u770b\u5b9e\u65f6\u8f68\u8ff9\u5c31\u4e0a<span>\u624b\u673a\u4eac\u4e1c</span>\uff0c\u8d76\u5feb\u626b\u7801\u770b\u770b\u5427</div><div class="tip-hint">\u652f\u6301V6.3\u4ee5\u4e0a\u7248\u672c\uff0c\u8bb0\u5f97\u767b\u9646\u76f8\u540c\u8d26\u53f7\u54e6</div></div></div>';
							$(".wx-qrcode").length ? $(".wx-qrcode").html(g) : b.after('<div class="wx-qrcode">' + g + "</div>"), expLogJSON("orderlist", "wxqrcode", "{'wxqrcode': 0}")
						}
					})
				},
				fail: function() {
					console.log("fail")
				}
			})
		},
		CloseUmsMessage: function() {
			$(".prompt-01").hide()
		},
		removeOrderDlg: function(a, b) {
			$("body").dialog({
				title: "\u63d0\u793a",
				width: 500,
				height: 120,
				type: "html",
				source: '<div class="tip-box icon-box"><span class="qm-icon m-icon"></span><div class="item-fore"><h3>\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u8ba2\u5355\u5417\uff1f</h3><div class="ftx-13">\u5220\u9664\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u8ba2\u5355\u56de\u6536\u7ad9\u8fd8\u539f\u8be5\u8ba2\u5355\uff0c\u4e5f\u53ef\u4ee5\u505a\u6c38\u4e45\u5220\u9664\u3002</div><div class="op-btns"><a href="javascript:void(0);" class="btn-1 remove-order" _orderid="' + a + '" _passkey="' + b + '">\u786e\u5b9a</a><a href="#none" class="btn-9 ml10 remove-order-cancel">\u53d6\u6d88</a></div></div></div>'
			})
		},
		removeOrder: function(a, b) {
			var c = this;
			jQuery.ajax({
				type: "GET",
				url: "//order.jd.com/lazy/recycleOrder.action?orderId=" + a + "&PassKey=" + b,
				dataType: "jsonp",
				cache: !1,
				success: function(b) {
					b.info.success ? c.resetList(1, a) : alertDlg("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
				}
			})
		},
		delOrderDlg: function(a, b) {
			$("body").dialog({
				title: "\u63d0\u793a",
				width: 500,
				height: 120,
				type: "html",
				source: '<div class="tip-box icon-box"><span class="qm-icon m-icon"></span><div class="item-fore"><h3>\u60a8\u786e\u5b9a\u8981\u6c38\u4e45\u5220\u9664\u8be5\u8ba2\u5355\u5417\uff1f</h3><div class="ftx-13">\u6c38\u4e45\u5220\u9664\u540e\uff0c\u8ba2\u5355\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u60a8\u5c06\u65e0\u6cd5\u5bf9\u8be5\u8ba2\u5355\u7684\u5546\u54c1\u7533\u8bf7\u552e\u540e\u670d\u52a1\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002</div><div class="op-btns"><a href="javascript:void(0);" class="btn-1 delete-order" _orderid="' + a + '" _passkey="' + b + '">\u786e\u5b9a</a><a href="#none" class="btn-9 ml10 delete-order-cancel">\u53d6\u6d88</a></div></div></div>'
			})
		},
		resetList: function(a, b) {
			var c = ["\u8fd8\u539f\u6210\u529f\uff01 \u60a8\u53ef\u4ee5\u5728\u201c<a href='//order.jd.com/center/list.action'>\u6211\u7684\u8ba2\u5355</a>\u201d\u4e2d\u67e5\u770b\u88ab\u8fd8\u539f\u7684\u8ba2\u5355~", "\u5220\u9664\u6210\u529f\uff01 \u60a8\u53ef\u4ee5\u5728\u201c<a href='//order.jd.com/center/recycle.action'>\u8ba2\u5355\u56de\u6536\u7ad9</a>\u201d\u4e2d\u67e5\u770b\u5df2\u88ab\u5220\u9664\u7684\u8ba2\u5355~", "\u6c38\u4e45\u5220\u9664\u6210\u529f\uff01"];
			var d = c[a];
			var e = $('<tbody><tr class="sep-row"><td colspan="5"></td></tr><tr class="tr-bd"><td colspan="5"><div class="rbin">' + d + '<span class="ftx-05">\u6211\u77e5\u9053\u4e86</span></div></td></tr></tbody>');
			var f = $("#tb-" + b).attr("class");
			if(f) {
				var g = f.split(" ");
				for(var h = 0, i = g.length; i > h; h++)
					if(-1 != g[h].indexOf("parent")) {
						f = g[h];
						break
					}
				var j = 0;
				$("." + f).each(function() {
					$(this).html() && j++
				}), 2 > j && $("#" + f).remove()
			}
			$("#tb-" + b).slideUp().empty().after(e), $(".rbin .ftx-05").click(function() {
				$(this).parents(":eq(3)").remove()
			}), e.fadeOut(2e3), 0 == $("table tr[id^='track']").length && this.changePageUrl()
		},
		changePageUrl: function() {
			$(".pagin .current").nextAll().each(function() {
				var b = $(this).attr("class");
				var c = $(this).attr("href");
				if("text" != b && "next-disabled" != b) {
					var d = c.indexOf("page=");
					if(-1 != d) {
						var e = c.substring(d + 5) - 1;
						$(this).attr("href", c.substring(0, d + 5) + e)
					}
				}
			})
		},
		recoverOrder: function(a, b) {
			var c = this;
			jQuery.ajax({
				type: "GET",
				url: "//order.jd.com/lazy/recoverOrder.action?orderId=" + a + "&PassKey=" + b,
				dataType: "jsonp",
				cache: !1,
				success: function(b) {
					b.info.success ? c.resetList(0, a) : alertDlg("\u8fd8\u539f\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
				}
			})
		},
		delOrder: function(a, b) {
			var c = this;
			jQuery.ajax({
				type: "GET",
				url: "//order.jd.com/lazy/deleteOrder.action?orderId=" + a + "&PassKey=" + b,
				dataType: "jsonp",
				cache: !1,
				success: function(b) {
					var d = b.info;
					if(1 == d.success) c.resetList(2, a);
					else {
						var e = "";
						var f = d.code;
						switch(f) {
							case 300:
								e = "\u8be5\u8ba2\u5355\u5728\u7533\u8bf7\u6295\u8bc9\uff0c\u5f85\u8be5\u4e1a\u52a1\u5904\u7406\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u6c38\u4e45\u5220\u9664\u3002";
								break;
							case 301:
								e = "\u8be5\u8ba2\u5355\u5728\u8fdb\u884c\u8fd4\u4fee\u9000\u6362\u8d27\uff0c\u5f85\u8be5\u4e1a\u52a1\u5904\u7406\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u6c38\u4e45\u5220\u9664\u3002";
								break;
							case 302:
								e = "\u8be5\u8ba2\u5355\u8fd8\u672a\u9000\u6b3e\u6210\u529f\uff0c\u5f85\u9000\u6b3e\u6210\u529f\u540e\uff0c\u5373\u53ef\u6c38\u4e45\u5220\u9664\u3002";
								break;
							case 100:
							case 101:
								e = "\u5f7b\u5e95\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"
						}
						alertDlg(e)
					}
				}
			})
		},
		confirmGoodsDlg: function(a, b, c, d, e) {
			$("body").dialog({
				title: "\u786e\u8ba4\u6536\u8d27",
				width: 400,
				height: 100,
				type: "html",
				source: '<div class="tip-box icon-box"><span class="qm-icon m-icon"></span><div class="item-fore"><h3>\u8bf7\u786e\u8ba4\u662f\u5426\u5df2\u6536\u5230\u8d27\uff1f</h3><div class="op-btns"><a href="javascript:void(0);" class="btn-1 confirm-good" _oid="' + a + '" _otype="' + b + '" _paytype="' + c + '" _shiptype="' + d + '" _rated="' + e + '">\u786e\u8ba4</a><a href="javascript:void(0);" class="btn-9 ml10 confirm-good-cancel">\u53d6\u6d88</a></div></div></div>'
			})
		},
		confirmGoods: function(a, b, c, d, e) {
			"1" != $ORDER_CONFIG.CloseToolbarOdo && jQuery.ajax({
				type: "GET",
				url: "//orderop.jd.com/toolbar_confirmDeliver?action=confirmDeliver&orderid=" + a,
				data: "",
				dataType: "jsonp",
				timeout: 6e3,
				success: function(f) {
					f.html && (f.html.indexOf("\u786e\u8ba4\u6536\u8d27\u6210\u529f") > -1 ? $.ajax({
						type: "GET",
						url: "//club.jd.com/myJdcomments/verifyReceivedVoucher.action",
						dataType: "jsonp",
						data: {
							orderId: a
						},
						success: function() {
							$("body").dialog({
								title: "\u786e\u8ba4\u6536\u8d27",
								width: 300,
								height: 100,
								type: "html",
								source: '<div class="tip-box icon-box"><span class="succ-icon m-icon"></span><div class="item-fore"><h3>\u786e\u8ba4\u6536\u8d27\u6210\u529f\uff01</h3><div class="op-btns">' + (1 == e ? "" : '<a href="//club.jd.com/mycomments.aspx" class="btn-1 comment-good" _oid="' + a + '" _otype="' + b + '" _paytype="' + c + '" _shiptype="' + d + '">\u7acb\u5373\u8bc4\u4ef7</a>') + '<a href="javascript:void(0);" class="btn-9 ml10 comment-good-cancel">\u5173\u95ed</a></div></div></div>'
							})
						}
					}) : alertDlg("\u786e\u8ba4\u6536\u8d27\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"))
				}
			})
		},
		initAds: function() {
			var a = document.getElementById("orderAdids");
			if(a) {
				var b = pageConfig.wideVersion && pageConfig.compatible;
				var c = b ? 1246 : 1245;
				$.ajax({
					url: "//x.jd.com/ShowInterface",
					type: "get",
					dataType: "jsonp",
					data: {
						ad_ids: c + ":1,1:1",
						template: 0,
						ad_type: "8",
						spread_type: "1",
						r: Math.floor(1e8 * Math.random())
					},
					success: function(a) {
						try {
							a = a[c][0], a.exposal_url && a.click_url && a.image_url && $("#orderAdids").html('<div id="sspid' + c + '" style="width: ' + (b ? 1069 : 849) + 'px; overflow: hidden; margin: 0px auto;"><img src="' + a.exposal_url + '" style="display:none" /><a href="' + a.click_url + '" target="_blank"><img src="//img30.360buyimg.com/pop/' + a.image_url + '" width="' + a.width + '" height="' + a.height + '" /></a></div>')
						} catch(d) {
							console.log(d)
						}
					}
				})
			}
			seajs.use(["//misc.360buyimg.com/user/myjd/ordercenter/js/fas"], function() {
				pageConfig.asyncScript("//nfa.jd.com/loadFa.js?aid=0_0_7005", "", "gbk")
			})
		},
		initSimilarAndMatchGoods: function() {
			var a = null;
			var b = {};
			var c = {};
			var d = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
			var e = '<span class="slider-prev"><b class="sicon"></b></span><span class="slider-next"><b class="sicon"></b></span><div class="slider-main" style="height: 151px;">    {if goodsList.length > 0}    <ul class="o-related-goods">        {for good in goodsList}        <li class="o-related-goods-item" data-clk="${good.clk}">            <div class="p-img">                <a href="//item.jd.com/${good.sku}.html" target="_blank"><img width="80" height="80" src="${pageConfig.FN_GetImageDomain(good.sku)}n4/${good.img}"></a>            </div>            <div class="p-name">                <a href="//item.jd.com/${good.sku}.html" target="_blank" title="${good.t}">${good.t}</a>            </div>            <div class="p-comment">                <a id="J-p-comment-${good.sku}" href="//club.jd.com/review/${good.sku}-1-1.html" target="_blank">\u5df2\u6709\u4eba\u8bc4\u4ef7</a>            </div>            <div class="p-price">                <strong>&yen;${good.jp}</strong>            </div>        </li>        {/for}    </ul>    {else}    \u65e0\u5546\u54c1\u63d0\u793a    {/if}</div>';

			function f(a, b) {
				$.each(b, function(b, c) {
					a.find("#J-p-comment-" + c.SkuId).html("\u5df2\u6709" + c.CommentCount + "\u4eba\u8bc4\u4ef7")
				})
			}

			function g(a, b, d) {
				if(a.html(e.process({
						goodsList: b
					})), !(b.length <= 0)) {
					if(c.hasOwnProperty(d)) f(a, c[d]);
					else {
						var g = [];
						$.each(b, function(a, b) {
							g.push(b.sku)
						}), $.ajax({
							url: "//club.jd.com/clubservice/summary-m-" + g.join(",") + ".html",
							dataType: "jsonp",
							success: function(b) {
								c[d] = b && b.CommentsCount && b.CommentsCount.length > 0 ? b.CommentsCount : [], f(a, c[d])
							}
						})
					}
					b.length > 5 && a.switchable({
						type: "slider",
						mainClass: "o-related-goods-item",
						contentClass: "o-related-goods",
						hasPage: !0,
						prevClass: "slider-prev",
						nextClass: "slider-next",
						step: 5,
						includeMargin: !0
					})
				}
			}
			$(".J-o-similar, .J-o-match").tips({
				tipsClass: "ui-tips-skin1",
				type: "hover",
				autoWindow: !1,
				source: '<div class="o-related-slider"><div class="con-loading">\u6570\u636e\u52a0\u8f7d\u8fc7\u6162\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5~</div></div>',
				callback: function(c, e) {
					var f = $(c);
					var h = $(e).find(".o-related-slider");
					var i = f.data("sku");
					var j = void 0;
					a = i;
					var k = f.hasClass("J-o-similar");
					var l = "click|keycount|orderlist|dapeishangpin";
					k && (l = "click|keycount|orderlist|xiangsishangpin"), h.attr("clstag", l), h.delegate(".o-related-goods-item", "click", function() {
						var a = $(this).data("clk");
						a && newImageRequest(a + d, !0)
					}), b.hasOwnProperty(i) ? g(h, b[i], i) : (j = {
						ec: "gbk",
						lim: 15,
						uuid: -1,
						lid: 1,
						sku: i
					}, j.p = k ? "902015" : "902014", $.ajax({
						url: "//diviner.jd.com/diviner",
						dataType: "jsonp",
						data: j,
						success: function(c) {
							c.success && (b[i] = c.data && c.data.length > 0 ? c.data : [], c.impr && newImageRequest(c.impr + d), (null == a || a == i) && g(h, b[i], i))
						}
					}))
				}
			})
		},
		initGiftJingbean: function() {
			$ORDER_CONFIG.finishOrderIds && $.ajax({
				url: '//bean.jd.com/beanRpc/getOrderJingBeanNum?paramStr={"orderId":"' + $ORDER_CONFIG.finishOrderIds + '"}',
				dataType: "jsonp",
				success: function(a) {
					a.success && ($.each(a.orderJingBeanNumList, function(a, b) {
						$('<br><a target="_blank" href="//vip.jd.com/myJingbean.html" class="ftx-01 bean-tips" data-tips="<div class=\'bean-tips-cont\'>\u5df2\u8fd4<span class=\'ftx-01\'>' + b.jingBeanNum + '</span>\u4eac\u8c46</div>"><i class="bean-icon"></i>+' + b.jingBeanNum + "</a>").insertAfter($("#tb-" + b.orderId + " .order-status"))
					}), $(".bean-tips").tips({
						tipsClass: "ui-tips-skin1 ui-tips-bean",
						type: "hover",
						hasArrow: !1,
						hasClose: !1
					}))
				}
			})
		},
		initBusinessCase: function() {
			$ORDER_CONFIG.marqueeText && $("#order01 .extra-r").html("<strong>" + $ORDER_CONFIG.marqueeText + "</strong>").addClass("ftx-04")
		},
		initAlphaInfo: function() {
			var a = $ORDER_CONFIG.downNodeOrderIds;
			a && $.post("/lazy/getDownNode.action", {
				orderid: a
			}).then(function(a) {
				if(a && a.orderDownNodeId) {
					a = a.orderDownNodeId;
					for(var b in a) {
						var c = a[b];
						var d = c.downNodeId;
						if(0 != d) {
							var e = $("#track" + c.orderid).find(".order-status");
							e.next().remove();
							var f = 1 == c.downNodeId ? '<i class="alpha-icon sw-icon"></i><div class="prompt-01 prompt-03"><div class="tip-box icon-box"><span class="alpha-icon w-icon"></span><div class="item-fore"><h3>\u5f88\u62b1\u6b49\u5546\u5bb6\u672a\u5728' + c.carryPickTime + '\u524d\u53d1\u8d27</h3><div class="ftx-13">\u60a8\u53ef\u7533\u8bf7\u201c\u50ac\u5355\u201d\u4e0e\u5546\u5bb6\u6c9f\u901a\u7269\u6d41\u8fdb\u5c55\u7ef4\u62a4\u60a8\u7684\u6743\u76ca</div><div class="op-btns"><a href="javascript:void(0);" class="btn-1 btn-alpha" oid="' + c.orderid + '">\u50ac\u5355</a></div></div></div>' : '<i class="alpha-icon sa-icon"></i><div class="prompt-01 prompt-03"><div class="tip-box icon-box"><span class="alpha-icon a-icon"></span><div class="item-fore"><div class="ftx-06">\u5546\u5bb6\u5e94\u5728' + c.carryPickTime + "\u524d\u53d1\u8d27\uff0c\u8bf7\u60a8\u968f\u65f6\u5173\u6ce8\u6700\u65b0\u8fdb\u5c55</div></div></div>";
							f = '<div class="tooltip alphatip"><span class="ftx-02 ml20">' + e.html() + "&nbsp;</span>" + f + '<div class="p-arrow p-arrow-left"></div></div></div>', e.after(f), e.remove()
						}
					}
				}
			})
		},
		initReminderButtons: function() {
			var a = $ORDER_CONFIG.orderRemindIds;
			if(a) {
				$.ajax({
					url: "/lazy/isShowReminderBtns.action",
					dataType: "json",
					type: "POST",
					data: {
						pin: $ORDER_CONFIG.currpin,
						orderids: a
					},
					success: function(a) {
						var b = {};
						a && $.each(a, function(a, c) {
							0 !== c.showBtnFlag || b[c.orderId] ? 2 !== c.showBtnFlag || b[c.orderId] || (b[c.orderId] = !0, $("#operate" + c.orderId).find(".operate").append('<a class="a-link" href="//myjd-crm.jd.com/reminder/reminderDetail.action?orderId=' + c.orderId + '" target="_blank">\u67e5\u770b\u50ac\u5355\u8be6\u60c5</a><br>')) : (b[c.orderId] = !0, $("#operate" + c.orderId).find(".operate").append('<a class="J-reminder" href="#" data-orderid="' + c.orderId + '">\u50ac\u5355</a><br>'))
						})
					}
				});
				var b = this;
				$("#order02").delegate(".J-reminder", "click", function(a) {
					var c = $(this).data("orderid");
					b.remindOrder(c), a.preventDefault()
				})
			}
		},
		remindOrder: function(a) {
			var b = '<div class="form remd-form"> <div class="item item-top">     <i class="joy-icon"></i>     \u8ba2\u5355\u592a\u6162\u4e86\uff1f\uff01\u7559\u4e0b\u60a8\u7684\u8054\u7cfb\u65b9\u5f0f\uff01Joy\u6765\u5e2e\u60a8\u50ac\u4e00\u50ac\uff0c\u5e76\u5c3d\u5feb\u7ed9\u60a8\u56de\u590d~ </div> <div class="item">     <span class="label"><em>*</em>\u7559\u8a00\uff1a</span>     <div class="item-rcol">         <div class="area-box">             <textarea class="area" name="" id="J-reminder-reason" placeholder="\u5199\u4e0b\u60a8\u7684\u50ac\u5355\u7406\u7531\u5427~" cols="30" rows="10"></textarea>             <div class="area-count">\u8fd8\u53ef\u4ee5\u8f93\u5165<span id="J-reminder-reason-limit">500</span>\u5b57</div>         </div>         <div class="error-msg hide"> \u7559\u8a00\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u60a8\u8f93\u5165\u7559\u8a00 </div>     </div> </div> {if supportPhone || supportSMS} <div class="item">     <span class="label"><em>*</em>\u56de\u590d\u65b9\u5f0f\uff1a</span>     <div class="item-rcol">         <ul class="list" id="J-reminder-type">             {if supportSMS}             <li class="selted" data-type="1">                 \u77ed\u4fe1\u56de\u590d                 <s></s>             </li>             {/if}             {if supportPhone}             <li class="{if !supportSMS}selted{/if}" data-type="2">                 \u7535\u8bdd\u56de\u590d                 <s></s>             </li>             {/if}         </ul>     </div> </div> {/if} {if supportSMS || supportPhone} <div class="item">     <span class="label"><em>*</em>\u8054\u7cfb\u65b9\u5f0f\uff1a</span>     <div class="item-rcol">         <input type="text" id="J-reminder-phone" class="itxt" placeholder="\u8bf7\u586b\u5199\u60a8\u7684\u624b\u673a\u53f7\u7801" maxlength="11">         <div class="error-msg hide"> \u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7 </div>     </div> </div> {/if} <div class="item">     <span class="label">&nbsp;</span>     <div class="item-rcol">         <div class="op-btns">             <a href="#none" class="btn-1">\u786e\u5b9a</a>         </div>     </div> </div></div>';
			var c = '<div class="tip-box icon-box"> <span class="succ-icon m-icon"></span> <div class="item-fore">     <h3>\u50ac\u5355\u6210\u529f\uff01</h3>     <div class="txt">         \u6211\u4eec\u4f1a\u52aa\u529b\u4e3a\u60a8\u5904\u7406\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85     </div> </div></div>';
			$.ajax({
				url: "/lazy/isCanReminder.action",
				dataType: "json",
				type: "POST",
				data: {
					orderid: a
				}
			}).then(function(d) {
				var e = void 0,
					f = void 0;
				d ? 1 == d.reminderFlag ? errorDialog("\u50ac\u5355", {
					dialogTitle: d.reminderMsgAPP,
					dialogBody: " ",
					width: 600
				}) : 2 == d.reminderFlag ? errorDialog("\u50ac\u5355", {
					dialogTitle: "\u60a8\u5df2\u6210\u529f\u63d0\u4ea4\u50ac\u5355\u7533\u8bf7\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e3a\u60a8\u5904\u7406\u3002",
					dialogBody: " ",
					width: 450,
					height: 120
				}) : 0 == d.reminderFlag && (e = 1 == d.msgReplyFlag, f = 1 == d.phoneReplyFlag, $("body").dialog({
					width: 430,
					title: "\u50ac\u5355",
					type: "html",
					source: b.process({
						supportSMS: e,
						supportPhone: f
					}),
					onReady: function() {
						var b = this.content;
						var d = /^(13\d|14[5,7]|15[0-35-9]|17[0,1,3,6,7,8]|18\d)\d{8}$/;
						$("#J-reminder-reason").val(""), seajs.use(["//misc.360buyimg.com/jdf/1.0.0/ui/placeholder/1.0.0/placeholder"], function() {
							$("#J-reminder-reason").placeholder({
								topDiff: 3
							}), $("#J-reminder-phone").placeholder({
								topDiff: 0
							})
						}), $("#J-reminder-reason").bind("keyup blur", function() {
							var a = $(this).val().length;
							$("#J-reminder-reason-limit").html(a > 500 ? 0 : 500 - a)
						}), $("#J-reminder-reason").bind("focus blur", function() {
							$(this).parent().toggleClass("area-box-focus")
						}), $("#J-reminder-phone").bind("focus blur", function() {
							$(this).toggleClass("itxt-focus")
						}), b.delegate(".list li", "click", function() {
							$(this).addClass("selted").siblings().removeClass("selted")
						}), b.delegate(".btn-1", "click", function() {
							var b = !1;
							var g = $.trim($("#J-reminder-phone").val());
							var h = $.trim($("#J-reminder-reason").val());
							var i = $("#J-reminder-type").find(".selted").data("type");
							var j = {
								reminderSource: "PC-L",
								orderid: a,
								applyPin: $ORDER_CONFIG.currpin
							};
							!f && !e || g.match(d) ? $("#J-reminder-phone").removeClass("itxt-error").siblings(".error-msg").addClass("hide") : (b = !0, $("#J-reminder-phone").addClass("itxt-error").siblings(".error-msg").removeClass("hide")), 0 === h.length ? (b = !0, $("#J-reminder-reason").parent().addClass("area-box-error").siblings(".error-msg").removeClass("hide")) : $("#J-reminder-reason").parent().removeClass("area-box-error").siblings(".error-msg").addClass("hide"), b || (j.reminderMsg = h, (e || f) && (j.replyType = i, j.mobileNumber = g), $.ajax({
								url: "/lazy/insertCsRcReminder.action",
								dataType: "json",
								type: "POST",
								data: j
							}).then(function(a) {
								$.closeDialog(), a ? $("body").dialog({
									title: "\u50ac\u5355",
									width: 350,
									height: 60,
									type: "html",
									source: c
								}) : errorDialog("\u50ac\u5355")
							}))
						})
					}
				})) : errorDialog("\u50ac\u5355")
			})
		},
		showEbookOrderState: function() {
			var a = $ORDER_CONFIG.ebook_orderWids;
			a.length > 1 && (a = a.substring(0, a.length - 1), this.getEbookOrderState(a))
		},
		getEbookOrderState: function(a) {
			var b = this;
			a.split(",");
			var d = encodeURI('//gw-e.jd.com/sentBook/bookSentStatus.action?body={"orderId"="' + a + '"}');
			$.ajax({
				type: "Get",
				dataType: "jsonp",
				url: d,
				cache: !1,
				async: !1,
				success: function(a) {
					if(a.list) {
						var c = [30104683, 30104684, 30104685, 30120439];
						for(var d = 0, e = a.list.length; e > d; d++) {
							var f = a.list[d];
							var g = f.bookId;
							if(-1 == $.inArray(g, c)) {
								var h = f.state;
								if(2 == h || 3 == h) {
									var i = f.orderId;
									var j = "\u5df2\u4e0b\u8f7d/\u53ef\u4e0b\u8f7d\u8bbe\u5907\u6570\uff1a" + f.bindNumber + "/" + f.totalNumber;
									var k = $("#ebookdown-" + i + g),
										l = k.closest("td"),
										m = $(".ebook-down", l);
									b.bRecycle || m.attr("_oid", i).attr("_bid", g).show(), k.html(j)
								}
							}
						}
					}
				}
			})
		},
		OpenEbookClient: function(a, b) {
			seajs.use(["//misc.360buyimg.com/user/myjd/ordercenter/js/base64"], function() {
				var c = $ORDER_CONFIG.currpin;
				var d = "[a]user=" + c + "&orderid=" + a + "&productid=" + b + "&obtain=purchase&charset=gb2312[z]";
				d = "LEBK://" + encode64(d), $("body").dialog({
					title: "\u63d0\u793a",
					width: 400,
					height: 100,
					type: "html",
					source: '<div class="tip-box icon-box"><span class="qm-icon m-icon"></span><div class="item-fore"><h3>\u9700\u8981\u542f\u52a8\u4eac\u4e1c\u9605\u8bfb\u5ba2\u6237\u7aef\u3002</h3><div class="op-btns"><a href="//sale.jd.com/act/W5hugLDc1R.html" class="btn-1" target="_blank">\u7acb\u5373\u5b89\u88c5</a><a href="' + d + '" class="btn-9 ml10" target="_blank">\u5df2\u5b89\u88c5\uff0c\u542f\u52a8\u5e94\u7528</a></div></div></div>'
				})
			})
		},
		showMusicStatistics: function() {
			var a = $ORDER_CONFIG.music_orderIds;
			var b = $ORDER_CONFIG.music_orderWids;
			a && b && (a = a.substring(0, a.length - 1), b = b.substring(0, b.length - 1), $.ajax({
				type: "POST",
				dataType: "jsonp",
				url: "//order.jd.com/lazy/getMusicOrderInfo",
				data: {
					musicOrderIds: a,
					musicOrderWids: b
				},
				cache: !1,
				success: function(a) {
					var b = a.info;
					if(b && b.list)
						for(var c = 0, d = b.list.length; d > c; c++) {
							var e = b.list[c];
							$("#musico" + e.orderId + e.musicId).html(e.bindNumber + "/" + e.totalNumber)
						}
				}
			}))
		},
		openHomelove: function(a) {
			$("body").dialog({
				title: null,
				width: 850,
				height: 590,
				type: "iframe",
				source: a,
				mainId: "festival-box",
				onReady: function() {
					var a = this;
					($.browser.isIE6() || $.browser.isIE7() || $.browser.isIE8()) && a.iframe.attr("allowTransparency", !0), a.iframe[0].onload = function() {
						var b = a.iframe[0].contentWindow.document.getElementById("orderId");
						b || a.el.attr("id", "")
					}
				}
			})
		},
		initAlwaysBuy: function() {
			var a = $("#order-ylist, #order-ylist2");
			if(a.length) {
				var b = function(a) {
					var b = a[0].contentWindow.document;
					return b.body.scrollHeight && b.documentElement.scrollHeight ? Math.max(b.body.scrollHeight, b.documentElement.scrollHeight) : b.documentElement.scrollHeight ? b.documentElement.scrollHeight : b.body.scrollHeight ? b.body.scrollHeight : void 0
				};
				var c = $("#order-ylist"),
					d = $("#order-tlist");
				var e = pageConfig.wideVersion && pageConfig.compatible;
				var f = void 0;
				0 == c.length && (c = $("#order-ylist2")), f = d.length > 0 ? e ? 1049 : 830 : e ? 1088 : 869;
				var g = e ? 1090 : 869;
				c.css({
					width: f
				}), d.css({
					width: g
				}), $.browser.msie ? ($("#order-ylist2").length > 0 && c.css({
					height: 1200
				}), d.css({
					height: 643
				})) : (c.one("load", function() {
					var a = b(c);
					c.css({
						height: a
					})
				}), d.one("load", function() {
					var a = b(d);
					d.css({
						height: a
					})
				}))
			}
		},
		initQingcang: function() {
			var a = $("#order-tejiaqingcang");
			if(a.length) {
				var b = function(a) {
					var b = a[0].contentWindow.document;
					return b.body.scrollHeight && b.documentElement.scrollHeight ? Math.max(b.body.scrollHeight, b.documentElement.scrollHeight) : b.documentElement.scrollHeight ? b.documentElement.scrollHeight : b.body.scrollHeight ? b.body.scrollHeight : void 0
				};
				var c = pageConfig.wideVersion && pageConfig.compatible;
				var d = c ? 1049 : 830;
				a.css({
					width: d
				}), a.one("load", function() {
					var c = b(a);
					a.css({
						height: c
					})
				})
			}
		},
		ShowUserSafeHref: function() {
			var a = this;
			$.ajax({
				type: "GET",
				url: "//safe.jd.com/user/paymentpassword/getUserSafeInfo.action?callback=?",
				data: "",
				dataType: "jsonp",
				timeout: 6e3,
				success: function(b) {
					var c = b.mailFlag,
						d = b.mobileFlag,
						e = b.usedFlag;
					var f = void 0,
						g = void 0,
						h = void 0;
					var i = $(".safety-box");
					1 != c && 1 != d && 1 != e ? (f = "\u5f88\u5371\u9669", g = "icon-rank01", h = "\u5e76<a href='//safe.jd.com/user/paymentpassword/safetyCenter.action' target='_blank'>\u5f00\u542f\u652f\u4ed8\u5bc6\u7801</a>", i.html(a.getUserSafeHtml(f, g, h)), i.show()) : 1 == c && 1 != d && 1 != e ? (f = "\u975e\u5e38\u4f4e", g = "icon-rank02", h = "\u5e76<a href='//safe.jd.com/user/paymentpassword/safetyCenter.action' target='_blank'>\u5f00\u542f\u652f\u4ed8\u5bc6\u7801</a>", i.html(a.getUserSafeHtml(f, g, h)), i.show()) : 1 != c && 1 != d && 1 == e && (f = "\u6bd4\u8f83\u4f4e", g = "icon-rank03", h = "", i.html(a.getUserSafeHtml(f, g, h)), i.show())
				}
			})
		},
		getUserSafeHtml: function(a, b, c) {
			var d = "\u8d26\u6237\u5b89\u5168\u7ea7\u522b\uff1a<strong class='rank-text ftx-01'>" + a + "</strong><div>\u60a8\u7684\u8d26\u6237\u4fe1\u606f\u53ca\u8d44\u4ea7\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u98ce\u9669\uff01\u5efa\u8bae\u60a8 <a class='btn-1' href='//safe.jd.com/validate/verifyMobile' target='_blank'>\u7acb\u5373\u9a8c\u8bc1\u624b\u673a</a>" + c + "\u4ee5\u63d0\u5347\u8d26\u6237\u5b89\u5168\u8bc4\u7ea7\uff01</div>";
			return d
		}
	};
	$(function() {
		k.init()
	})
});

function getOrderStatus(a) {
	var b = ["ftx-01", "ftx-02", "ftx-03", "ftx-04"],
		c = b[0],
		d = b[1],
		e = b[2],
		f = b[3];
	var g = {
		"\u8d27\u5230\u4ed8\u6b3e\u9000\u8d27": c,
		"\u9501\u5b9a": c,
		"\u9000\u6b3e\u5ba1\u6838": c,
		"\u7b49\u5f85\u9000\u6b3e": c,
		"\u5546\u54c1\u9000\u8d27": c,
		"\u914d\u9001\u9000\u8d27": c,
		"\u672a\u5f00\u59cb": c,
		"\u5df2\u53d1\u8d27": d,
		"\u5e97\u957f\u6700\u7ec8\u5ba1\u6838": d,
		"\u7b49\u5f85\u6253\u5370": d,
		"\u7b49\u5f85\u51fa\u5e93": d,
		"\u7b49\u5f85\u6253\u5305": d,
		"\u7b49\u5f85\u53d1\u8d27": d,
		"\u81ea\u63d0\u9014\u4e2d": d,
		"\u4e0a\u95e8\u63d0\u8d27": d,
		"\u7b49\u5f85\u6536\u8d27": d,
		"\u7b49\u5f85\u786e\u8ba4\u6536\u8d27": d,
		"\u8d27\u5230\u4ed8\u6b3e\u786e\u8ba4": d,
		"\u7b49\u5f85\u5206\u671f\u4ed8\u6b3e": d,
		"\u9000\u6b3e\u5ba1\u6838\u4e2d": d,
		"\u8bf7\u4e0a\u95e8\u81ea\u63d0": d,
		"\u6b63\u5728\u4ea4\u6613": d,
		"\u5df2\u5f00\u59cb": d,
		"\u6b63\u5728\u5145\u503c": d,
		"\u62a2\u5b9d\u6210\u529f": d,
		"\u62a2\u4e2d\u5546\u54c1": d,
		"\u5230\u5e97\u81ea\u53d6": d,
		"\u5df2\u6536\u8d27": e,
		"\u5df2\u6652\u5355": e,
		"\u5df2\u5b8c\u6210": e,
		"\u5df2\u53d6\u6d88": e,
		"\u8ba2\u5355\u53d6\u6d88": e,
		"\u9000\u6b3e\u6210\u529f": e,
		"\u4e0b\u5355\u5931\u8d25": e,
		"\u81ea\u63d0\u6210\u529f": e,
		"\u5145\u503c\u6210\u529f": e,
		"\u7f34\u8d39\u6210\u529f": e,
		"\u51fa\u7968\u6210\u529f": e,
		"\u8fc7\u671f\u5173\u95ed": e,
		"\u5df2\u9884\u8ba2": e,
		"\u672a\u5b8c\u6210": e,
		"\u9000\u6b3e\u5b8c\u6210": e,
		"\u8fc7\u671f\u653e\u5f03": e,
		"\u672a\u62a2\u4e2d": e,
		"\u5931\u8d25\u9000\u6b3e": e,
		"\u5f85\u53d1\u8d27": f,
		"\u63ed\u6653\u4e2d": f,
		"\u7b49\u5f85\u63ed\u6653": f,
		"\u7b49\u5f85\u4ed8\u6b3e": f,
		"\u7b49\u5f85\u4ed8\u6b3e\u786e\u8ba4": f,
		"\u4ed8\u6b3e\u6210\u529f": f,
		"\u5ef6\u8fdf\u4ed8\u6b3e\u786e\u8ba4": f,
		"\u9884\u5b9a\u4e2d": f,
		"\u6682\u505c": f,
		"\u7b49\u5f85\u5ba2\u6237\u56de\u590d": f,
		"\u5382\u5546\u786e\u8ba4\u5b8c\u6210": f,
		"\u7b49\u5f85\u5ba1\u6838": f,
		"\u7b49\u5f85\u5904\u7406": f,
		"\u7b49\u5f85\u5382\u5546\u5904\u7406": f,
		"\u6b63\u5728\u5904\u7406": f,
		"\u6b63\u5728\u9001\u8d27": f,
		"\u5546\u54c1\u51fa\u5e93": f,
		"\u51fa\u7968\u4e2d": f,
		"\u5904\u7406\u4e2d": f,
		"\u9000\u6b3e\u4e2d": f,
		"\u5546\u54c1\u9000\u5e93": f,
		"\u7b49\u5f85\u786e\u8ba4": f,
		"\u7b49\u5f85\u53d1\u7801": f,
		"\u6b63\u5728\u51fa\u5e93": f,
		"\u95e8\u5e97\u5907\u8d27": f
	};
	return g[a]
}
var adlg = null;

function alertDlg(a) {
	adlg && adlg.close(), adlg = $("body").dialog({
		title: "\u63d0\u793a",
		width: 400,
		height: 80,
		type: "html",
		source: '<div class="tip-box icon-box"><span class="warn-icon m-icon"></span><div class="item-fore"><div class="fs-14">' + a + "</div></div></div>"
	})
}

function toFixUpLoc(a, b, c) {
	var d = "BackCompat" == document.compatMode ? document.body : document.documentElement;
	d.clientHeight;
	var f = b.offset().top;
	var g = parseInt(b.css("top"), 10);
	b.outerHeight();
	var i = a.offset().top;
	var j = c.offset().top;
	var k = parseInt(c.css("top"), 10);
	var l = $(document).scrollTop();
	if(b.data("data-top")) {
		b.data("data-top")
	} else {
		var n = parseInt(b.css("top"), 10);
		b.data("data-top", n)
	}
	var o = b.data("data-top");
	if(c.data("data-top")) {
		c.data("data-top")
	} else {
		var q = parseInt(c.css("top"), 10);
		c.data("data-top", q)
	}
	var r = c.data("data-top");
	if(l + 21 > f) {
		var s = i - f;
		var t = k - 23 - (j - i);
		b.css("top", g + s), c.css("top", Math.max(t, 0))
	} else b.css("top", o), c.css("top", r)
}

function toFixDownLoc(a, b) {
	var c = "BackCompat" == document.compatMode ? document.body : document.documentElement;
	var d = c.clientHeight;
	var e = a.offset().top;
	var f = parseInt(a.css("top"), 10);
	var g = a.outerHeight();
	var h = $(document).scrollTop();
	parseInt(b.css("top"), 10);
	var j = d + h;
	var k = e + g;
	if(k - j > 0) {
		var l = f - (k - j) - 5;
		var m = k - j + 23;
		a.css("top", l), b.css("top", Math.min(Math.abs(l) - 15, m))
	}
}

function closeDlg() {
	$.closeDialog()
}

function openTimeOrder(a) {
	$("body").dialog({
		title: "\u5b9a\u671f\u9001\u8bbe\u7f6e",
		width: 560,
		type: "iframe",
		source: a
	})
}

function parentNotif(a, b) {
	d(a, b, "", decodeURIComponent(readCookie("pin")));

	function d(a, b, c, d) {
		var e = void 0;
		var f = void 0;
		var g = void 0;
		var h = {
			skuId: a,
			pin: encodeURI(d),
			webSite: 1,
			origin: 1,
			source: 1
		};
		if(1 == b && (e = "\u964d\u4ef7\u901a\u77e5", f = "//skunotify.jd.com/pricenotify.html?", g = 490), 2 == b) {
			e = "\u5230\u8d27\u901a\u77e5", f = "//skunotify.jd.com/storenotify.html?", g = 445;
			var i = readCookie("ipLoc-djd");
			i = i && -1 != i.indexOf(".") ? i.substring(0, i.indexOf(".")) : i, h.storeAddressId = i || "0-0-0"
		}
		f += c ? c : $.param(h), $("body").dialog({
			title: e,
			width: 500,
			height: g,
			type: "iframe",
			fixed: !0,
			source: decodeURIComponent(f) + "&nocache=" + +new Date,
			mainId: "notify_box",
			contentId: "notify_con",
			titleId: "notify_title",
			autoIframe: !0
		})
	}
}

function newImageRequest(a, b, c) {
	var d = new Image;
	a = b ? a + "&random=" + Math.random() + new Date : a, d.onload = function() {
		"undefined" != typeof c && c(a)
	}, d.setAttribute("src", a)
}

function errorDialog(a, b) {
	b = b || {};
	var c = b.dialogTitle || "\u7cfb\u7edf\u5f00\u5c0f\u5dee\u4e86";
	var d = b.dialogBody || "\u8bf7\u7a0d\u540e\u91cd\u8bd5";
	var e = '<div class="tip-box icon-box"> <span class="qm-icon m-icon"></span> <div class="item-fore">     <h3>' + c + '</h3>     <div class="ftx-13">' + d + '     </div>     <div class="op-btns">         <a href="#none" class="btn-1 mr10" onclick="$.closeDialog()">\u786e\u5b9a</a>     </div> </div></div>';
	var f = {
		width: b.width || 320,
		title: a,
		type: "html",
		source: e
	};
	b.height && (f.height = b.height), $("body").dialog(f)
}

function cancelOrderWarningDialog(a) {
	var b = "1" === a ? "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u7684\u8ba2\u5355\u6b63\u5728\u6d77\u5173\u6e05\u5173\u4e2d\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85~" : "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u7684\u8ba2\u5355\u5df2\u7ecf\u6e05\u5173\u5b8c\u6210\uff0c\u4e0d\u80fd\u53d6\u6d88\u8ba2\u5355~";
	var c = '<div class="tip-box icon-box"> <span class="qm-icon m-icon"></span> <div class="item-fore">     <h3 class="mt10">' + b + '</h3>     <div class="ftx-13">     </div>     <div class="op-btns">         <a href="#none" class="btn-9 mr10" onclick="$.closeDialog()">\u6211\u77e5\u9053\u5566</a>     </div> </div></div>';
	$("body").dialog({
		width: 630,
		height: 100,
		title: "\u63d0\u793a",
		type: "html",
		source: c
	})
}