! function(e) {
	function t(a) {
		if(i[a]) return i[a].exports;
		var s = i[a] = {
			exports: {},
			id: a,
			loaded: !1
		};
		return e[a].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
	}
	var i = {};
	return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
	e.exports = i(1)
}, function(e, t, i) {
	function a() {
		return Math.random() > .5 ? -1 : 1
	}

	function s(e, t) {
		var i, a, n, o, r, l, d, c, m, u, g, p;
		if(e.length > 1) return e.each(function() {
			s($(this), t)
		}), this;
		if(!bricksData.hasOwnProperty(e.attr("id"))) return this;
		if(n = {
				onLoad: $.noop
			}, o = $.extend({}, n, t), p = e.attr("id"), r = bricksData[p], i = e.find(".J_brickBd"), a = e.find(".J_brickNav"), l = r.left.length > 1 ? T.promoTemplateMiddle : T.promoTemplateLarge, u = '<div class="span4 span-first"><ul class="brick-promo-list clearfix">' + l(r.left) + "</ul></div>", g = "", r.right.length > 1) {
			g = '<div class="span16"><div id="' + (e.attr("id") + "-content") + '" class="tab-container">', m = '<ul class="tab-list J_brickTabSwitch" data-tab-target="' + (e.attr("id") + "-content") + '">', ("smart" === p || "homeelec" === p) && $.each(r.right, function(e, t) {
				$.each(t.items, function(e, t) {
					t.sectionName = "smart"
				})
			});
			for(var h = 0, f = r.right.length; f > h; h += 1) {
				var v = r.right[h].items;
				d = T.itemTemplateMiddle1, c = T.itemTemplateSmall, g += '<ul class="brick-list tab-content clearfix' + (0 === h ? " tab-content-active J_recommendActive" : " tab-content-hide") + '">' + d(v.splice(0, v.length - 1)) + c(v) + '<li class="brick-item brick-item-s"><div class="figure figure-more"><a href="' + r.right[h].area_url + '" target="_blank"><i class="iconfont">&#xe615;</i></a></div><a class="more" href="' + r.right[h].area_url + '" target="_blank">浏览更多<small>' + r.right[h].area_title + "</small></a></li></ul>", m += "<li" + (0 === h ? ' class="tab-active"' : "") + ">" + r.right[h].area_title + "</li>"
			}
			m += "</ul>", g += "</div></div>"
		} else d = T.itemTemplateMiddle2, m = '<a class="more-link" href="' + r.right[0].area_url + '" target="_blank">查看全部<i class="iconfont">&#xe623;</i></a>', g = '<div class="span16"><ul class="brick-list clearfix">' + d(r.right[0].items) + "</ul></div>";
		a.html(m), i.html('<div class="row">' + u + g + "</div>"), o.onLoad(e)
	}

	function n(e, t, i) {
		var a = e.find("a"),
			s = function(e) {
				try {
					return e.replace(/\s/g, "")
				} catch(t) {
					return e
				}
			};
		$.each(a, function(e, a) {
			var n = $(a).attr("data-stat-index"),
				o = s($(a).attr("data-stat-text")),
				r = $(a).attr("data-stat-method"),
				l = "stat_" + t + "." + i + "_" + n + "_" + r;
			$(a).attr({
				"data-stat-pid": l,
				"data-stat-aid": o
			})
		})
	}

	function o(e, t) {
		var i = e.attr("id"),
			a = {
				v: 1,
				data: t.data,
				morelink: y[i].morelink,
				itemSite: MI.GLOBAL_CONFIG.itemSite
			},
			s = T.itemTemplateRecommend,
			o = e.find(".J_recommendActive");
		o.html(s(a));
		var r = e.find("h2.title").text() || e.attr("data-stat-title");
		n(o, "首页", r + "热门"), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(o[0]).linkSign();
		var l = "re-首页." + y[i].name;
		$.force_appear(), e.appear(), e.one("appear", function() {
			if("undefined" != typeof _msq && _msq.push(["trackPanelShow", i, l]), !e.data("log_codes")) {
				for(var t = e.find(".brick-item").find(".figure-img a"), a = "", s = 0, n = t.length; n > s; s++) a += t.eq(s).data("log_code") + ";";
				e.attr("data-log_codes", a.substring(0, a.length - 1))
			}
		}), e.find(".brick-item").on({
			mouseenter: function() {
				$(this).addClass("brick-item-active")
			},
			mouseleave: function() {
				$(this).removeClass("brick-item-active")
			}
		})
	}

	function r(e) {
		var t = e.attr("id"),
			i = "recommend_home_" + t,
			a = y[t].api;
		$.ajax({
			dataType: "JSONP",
			url: a,
			jsonpCallback: i,
			cache: !0,
			success: function(t) {
				null !== o && "function" == typeof o && o(e, t)
			}
		})
	}

	function l(e, t) {
		var i, s, n, o, r, d, c;
		return e.length > 1 ? (e.each(function() {
			l($(this), t)
		}), this) : bricksData.hasOwnProperty(e.attr("id")) ? (s = {
			onLoad: $.noop
		}, n = $.extend({}, s, t), o = bricksData[e.attr("id")], i = e.find(".J_brickBd"), r = T.itemTemplateReview, c = o.sort(a).splice(0, 4), d = '<ul class="review-list clearfix">' + r(c) + "</ul>", i.html(d), void n.onLoad(e)) : this
	}

	function d(e, t) {
		function i(e) {
			var t = {
					book: {
						title: "图书",
						style: "orange",
						image: MI.GLOBAL_CONFIG.assetsSite + "/i/index/more-duokan.jpg",
						url: "http://www.duokan.com/list/1-1?from=xiaomi",
						desc: "海量好书，享受精品阅读时光<br />漂亮的中文排版，千万读者选择！",
						text: "多看阅读"
					},
					theme: {
						title: "MIUI 主题",
						style: "green",
						image: MI.GLOBAL_CONFIG.assetsSite + "/i/index/more-miui.jpg",
						url: "http://zhuti.xiaomi.com/?from=mi",
						desc: "众多个性主题、百变锁屏与自由桌面<br />让你的手机与众不同！",
						text: "MIUI主题市场"
					},
					game: {
						title: "游戏",
						style: "red",
						image: MI.GLOBAL_CONFIG.assetsSite + "/i/index/more-game.jpg",
						url: "http://game.xiaomi.com/index.php?c=index&a=run",
						desc: "免费下载海量的手机游戏<br />天天都有现金福利赠送",
						text: "小米游戏商店"
					},
					app: {
						title: "应用",
						style: "ocean",
						image: MI.GLOBAL_CONFIG.assetsSite + "/i/index/more-app.jpg",
						url: "http://app.mi.com/?from=mi",
						desc: "帮助小米手机和其他安卓手机用户<br />发现好用的安卓应用",
						text: "小米应用商店"
					}
				},
				i = T.itemTemplateContent,
				a = T.itemTemplateContentMore;
			return '<li class="content-item content-item-' + e + ("book" === e ? " content-item-first" : "") + '"><h2 class="title">' + t[e].title + '</h2><ul class="item-list clearfix">' + i(o[e]) + a(t[e]) + "</ul></li>"
		}
		var a, s, n, o, r;
		return e.length > 1 ? (e.each(function() {
			d($(this), t)
		}), this) : bricksData.hasOwnProperty(e.attr("id")) ? (s = {
			onLoad: $.noop
		}, n = $.extend({}, s, t), o = bricksData[e.attr("id")], a = e.find(".J_brickBd"), r = '<ul class="content-list clearfix">' + i("book") + i("theme") + i("game") + i("app") + "</ul>", a.html(r), void n.onLoad(e)) : this
	}

	function c(e, t) {
		var i, a, s, n, o, r, l, d;
		return e.length > 1 ? (e.each(function() {
			c($(this), t)
		}), this) : bricksData.hasOwnProperty(e.attr("id")) ? (s = {
			onLoad: $.noop
		}, n = $.extend({}, s, t), o = bricksData[e.attr("id")], i = e.find(".J_brickBd"), a = e.find(".J_brickNav"), r = T.itemTemplateVideo, l = '<a class="more-link" href="' + MI.GLOBAL_CONFIG.wwwSite + '/video/" target="_blank">查看全部<i class="iconfont">&#xe623;</i></a>', d = '<ul class="video-list clearfix">' + r(o) + "</ul></div>", a.html(l), i.html(d), void n.onLoad(e)) : this
	}

	function m(e, t) {
		for(var i in t)
			if(t.hasOwnProperty(i)) {
				if(e.hasClass("no-comment-total")) return;
				var a = e.find('[data-gid="' + i + '"]').find(".rank");
				a.length && t[i] && a.text(t[i] + "人评价")
			}
	}

	function u() {
		("undefined" == typeof isCommentOpen || isCommentOpen) && $.ajax({
			url: MI.GLOBAL_CONFIG.assetsSite + "/c/js/indexMD2015.js",
			cache: !0,
			dataType: "script",
			timeout: 5e3,
			error: function() {
				return !1
			},
			success: function() {
				"undefined" != typeof commentTotal && (k = commentTotal, m(b, k))
			}
		})
	}

	function g() {
		$(".J_homeBanner").each(function() {
			var e = $(this).attr("data-index"),
				t = "banner_" + e,
				i = {},
				a = "";
			bricksData[t] && bricksData[t].length && (i = bricksData[t][0], a = T.itemTemplateBanner, $(this).html(a(i)).removeClass("hide"), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle($(this)[0]).linkSign())
		})
	}

	function p() {
		function e(e) {
			var i = $(t(e));
			i.appendTo(".header-logo").fadeIn(2e3), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(i[0]).linkSign()
		}
		var t = i(26);
		$.ajax({
			url: "//i.huodong.mi.com/airrecommend/default/getIPAD?ad_id=256",
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function(t) {
				1 === parseInt(t.code) && e(t.data)
			}
		})
	}

	function h() {
		var e = $(window).width(),
			t = $(window).height(),
			i = $(".J_homeRightBar");
		1440 >= e ? (i.removeClass("home-right-bar-show-l582").addClass("home-right-bar-show-s"), $("#J_rightbar_s").show(), $("#J_rightbar_l").hide(), $(".J_barToTopL").hide(), $(".J_barToTopS").show(), 428 >= t ? i.addClass("home-right-bar-show-s428") : i.removeClass("home-right-bar-show-s428")) : (i.removeClass("home-right-bar-show-s").removeClass("home-right-bar-show-s428"), $("#J_rightbar_s").hide(), $("#J_rightbar_l").show(), $(".J_barToTopS").hide(), $(".J_barToTopL").show(), 582 >= t ? i.addClass("home-right-bar-show-l582") : i.removeClass("home-right-bar-show-l582"))
	}

	function f() {
		function e() {
			if(i = document.documentElement.scrollTop || document.body.scrollTop, i === t) {
				var e = $(window).height(),
					a = $(document).scrollTop();
				a >= e ? ($(".J_barToTop").removeClass("hidden"), h()) : $(".J_barToTop").addClass("hidden")
			}
		}
		var t = 0,
			i = 0,
			a = null;
		document.onscroll = function() {
			clearTimeout(a), a = setTimeout(e, 500), t = document.documentElement.scrollTop || document.body.scrollTop
		}
	}

	function v() {
		$(".J_barToTop").click(function() {
			$(document).scrollTop(0)
		})
	}

	function _(e, t) {
		var i, a, s = e.length,
			n = null;
		for(i = 0; i < e.length - 1; i++)
			for(a = 0; s - i - 1 > a; a++) e[a][t] >= e[a + 1][t] && (n = e[a], e[a] = e[a + 1], e[a + 1] = n);
		return e
	}

	function x() {
		if(siderbarData && 0 !== siderbarData.length) {
			if(!$.isArray(siderbarData)) return;
			for(var e = _(siderbarData, "weight").reverse(), t = 0; t < e.length; t++) "cart" === e[t].type && (e[t].carnum = 0, $.cookie("xm_user_www_num") && (e[t].carnum = $.cookie("xm_user_www_num")));
			var i = document.getElementById("J_rightbartempl_l").innerHTML,
				a = document.getElementById("J_rightbartempl_s").innerHTML,
				s = document.getElementById("J_rightbar_l"),
				n = document.getElementById("J_rightbar_s"),
				o = doT.template(i),
				r = doT.template(a);
			s.innerHTML = o(e), n.innerHTML = r(e), h()
		}
	}
	i(2), i(3), i(4), i(5), i(6), i(7), i(10), i(11);
	var b = $(".J_itemBox"),
		w = $("#J_modalVideo"),
		S = i(14),
		k = null,
		T = {
			promoTemplateLarge: i(15),
			promoTemplateMiddle: i(16),
			itemTemplateMiddle1: i(17),
			itemTemplateMiddle2: i(18),
			itemTemplateRecommend: i(19),
			itemTemplateSmall: i(20),
			itemTemplateReview: i(21),
			itemTemplateContent: i(22),
			itemTemplateContentMore: i(23),
			itemTemplateVideo: i(24),
			itemTemplateBanner: i(25)
		},
		y = {
			match: {
				api: "//rec.www.mi.com/rec/collection?jsonpcallback=aa",
				morelink: "//list.mi.com/dapei",
				name: "搭配"
			},
			accessories: {
				api: "//rec.www.mi.com/rec/accessory?jsonpcallback=aa",
				morelink: "//list.mi.com/pjrm",
				name: "配件"
			},
			around: {
				api: "//rec.www.mi.com/periphery/get",
				morelink: "//list.mi.com/zhoubian",
				name: "周边"
			}
		};
	jQuery(function(e) {
		function t(t, i) {
			var a, s = e(t),
				n = s.find(".slide").eq(i);
			n.hasClass("loaded") || (a = e.parseJSON(n.data("bg-set").replace(/'/g, '"')), n.addClass("loaded").find("> a").append('<img src="' + a.img + '"' + (a.imgHd ? ' srcset="' + a.imgHd + ' 2x"' : "") + " />"))
		}
		var i = e("#J_homeSlider"),
			a = e("#J_categoryList");
		0 !== e("#comment").length && u(), S(a), g(), i.slider({
			mode: "fade",
			auto: !0,
			autoHover: !0,
			onSliderLoad: function(e) {
				t(i, e)
			},
			onSlideBefore: function(e, a, s) {
				t(i, s)
			}
		}), e(".J_carouselList").carousel({
			containerSelector: ".home-star-goods",
			controlsSelector: ".box-hd .more",
			controlsClass: "xm-controls-line-small",
			itemPerSlide: 4,
			auto: !0,
			pause: 8e3
		}), e(".J_brickBox").on("visible.visibleWatcher", function() {
			e(this).data("visible") || (s(e(this), {
				onLoad: function(t) {
					"true" === t.attr("data-from-stat") && r(t), t.addClass("loaded").find(".J_brickTabSwitch").tabSwitch({
						events: "mouseenter"
					}), t.find(".brick-item").on({
						mouseenter: function() {
							e(this).addClass("brick-item-active")
						},
						mouseleave: function() {
							e(this).removeClass("brick-item-active")
						}
					}), k && m(t, k), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(t[0]).linkSign()
				}
			}), e(this).data("visible", !0))
		}), e(".J_recommendBox").on("visible.visibleWatcher", function() {
			var t = e(this);
			t.data("visible") || (t.find(".J_brickBd").miRecommend({
				type: "homeRecommend",
				callback: function() {
					t.find(".xm-controls").appendTo(t.find(".J_brickNav"))
				}
			}), t.data("visible", !0))
		}), e(".J_reviewBox").on("visible.visibleWatcher", function() {
			e(this).data("visible") || (l(e(this), {
				onLoad: function(e) {
					k && m(e, k), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(e[0]).linkSign()
				}
			}), e(this).data("visible", !0))
		}), e(".J_contentBox").on("visible.visibleWatcher", function() {
			e(this).data("visible") || (d(e(this), {
				onLoad: function(e) {
					e.find(".item-list").carousel({
						controlsClass: "xm-controls-block-small",
						pager: !0
					}), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(e[0]).linkSign()
				}
			}), e(this).data("visible", !0))
		}), e(".J_videoBox").on("visible.visibleWatcher", function() {
			e(this).data("visible") || 
			(c(e(this),{
				onLoad: function(t) {
					t.find(".J_videoTrigger").on("click", function(t) {
						t.preventDefault(), 
						document.domain = "mi.com",
						w.find(".modal-hd .title").text(e(this).attr("data-video-title")).end().find(".modal-bd").html('<iframe id="miPlayerIframe" width="880" height="536" src="//hd.mi.com/f/zt/hd/miplayer2/index.html?vurl=' + e(this).attr("data-video") + "&poster=" + e(this).attr("data-video-poster") + '" frameborder="0" allowfullscreen></iframe>').find("iframe").focus(), 
						w.modal({
							show: !0,
							backdrop: "static"
						})
					}), 
					w.on("hide", function() {
						w.find(".modal-hd .title").empty(), w.find(".modal-bd").empty()
					}), 
					window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(t[0]).linkSign()
				}
			}), 
			e(this).data("visible", !0)
			)
		}), e(".J_homeBanner").on("visible.visibleWatcher", function() {
			if(!e(this).data("visible") && e(this).find("img").length) {
				var t = e(this).find("img"),
					i = t.attr("data-original");
				t.attr("src", i).removeAttr("data-original").removeClass("hide"), e(this).data("visible", !0)
			}
		}), b.visibleWatcher({
			offset: -300
		}), doodleData && 0 !== doodleData.type && (1 === doodleData.type ? p() : 2 === doodleData.type && doodleData.link && doodleData.logo && e('<div class="doodle"><a class="exposure link-block" style="background-image:url(' + doodleData.logo + ')" href="' + doodleData.link + '" data-stat-id="首页logo广告位" data-log_code="pc#bid=3008001.1&page=home" onclick="_msq.push([\'trackEvent\', \'首页logo广告位\', \'' + doodleData.link + "', 'pcpid', 'pc#bid=3008001.1&page=home']);\" target=\"_blank\" >" + doodleData.linkText + "</a></div>").appendTo(".header-logo").delay(1e3).fadeIn()), topbarData && 0 !== topbarData.type && e(".site-topbar").before('<div class="site-bn-bar" style="background-image:url(' + topbarData.img + ');"><a class="site-bn-bar-link exposure" href="' + topbarData.link + '" data-stat-id="首页顶通广告位" data-log_code="pc#bid=3008000.1&page=home" onclick="_msq.push([\'trackEvent\', \'首页顶通广告位\', \'' + topbarData.link + "', 'pcpid', 'pc#bid=3008000.1&page=home']);\" target=\"_blank\" >" + topbarData.linkText + "</a></div>"), "undefined" != typeof _msq && _msq.push(["miPageTiming"]), f(), v(), x(), e(window).resize(function() {
			h()
		})
	})
}, function(e, t) {
	! function(e) {
		function t(t) {
			function i(e) {
				g.push({
					x: e.pageX,
					y: e.pageY
				}), g.length > f && g.shift()
			}

			function a() {
				h && clearTimeout(h), c.exitMenu(this) && (u && c.deactivate(u), u = null)
			}

			function s() {
				h && clearTimeout(h), c.enter(this), r(this)
			}

			function n() {
				c.exit(this)
			}

			function o(e) {
				e !== u && (u && c.deactivate(u), c.activate(e), u = e)
			}

			function r(e) {
				var t = l();
				t ? h = setTimeout(function() {
					r(e)
				}, t) : o(e)
			}

			function l() {
				function t(e, t) {
					return(t.y - e.y) / (t.x - e.x)
				}
				if(!u || !e(u).is(c.submenuSelector)) return 0;
				var i = m.offset(),
					a = {
						x: i.left,
						y: i.top - c.tolerance
					},
					s = {
						x: i.left + m.outerWidth(),
						y: a.y
					},
					n = {
						x: i.left,
						y: i.top + m.outerHeight() + c.tolerance
					},
					o = {
						x: i.left + m.outerWidth(),
						y: n.y
					},
					r = g[g.length - 1],
					l = g[0];
				if(!r) return 0;
				if(l || (l = r), l.x < i.left || l.x > o.x || l.y < i.top || l.y > o.y) return 0;
				if(p && r.x === p.x && r.y === p.y) return 0;
				var d = s,
					h = o;
				"left" === c.submenuDirection ? (d = n, h = a) : "below" === c.submenuDirection ? (d = o, h = n) : "above" === c.submenuDirection && (d = a, h = s);
				var f = t(r, d),
					_ = t(r, h),
					x = t(l, d),
					b = t(l, h);
				return x > f && _ > b ? (p = r, v) : (p = null, 0)
			}
			var d, c, m = e(this),
				u = null,
				g = [],
				p = null,
				h = null,
				f = 3,
				v = 300;
			d = {
				rowSelector: "> li",
				submenuSelector: "*",
				submenuDirection: "right",
				tolerance: 75,
				enter: e.noop,
				exit: e.noop,
				activate: e.noop,
				deactivate: e.noop,
				exitMenu: e.noop
			}, c = e.extend({}, d, t), m.on("mouseleave", a).find(c.rowSelector).on({
				mouseenter: s,
				mouseleave: n,
				click: function() {
					o(this)
				}
			}), e(document).mousemove(i)
		}
		e.fn.miMenuAim = function(e) {
			return this.each(function() {
				t.call(this, e)
			}), this
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		var t = {},
			a = {
				mode: "horizontal",
				slideSelector: "",
				infiniteLoop: !0,
				hideControlOnEnd: !1,
				speed: 500,
				easing: null,
				slideMargin: 0,
				startSlide: 0,
				randomStart: !1,
				captions: !1,
				ticker: !1,
				tickerHover: !1,
				adaptiveHeight: !1,
				adaptiveHeightSpeed: 500,
				video: !1,
				useCSS: !0,
				preloadImages: "visible",
				responsive: !0,
				slideZIndex: 50,
				wrapperClass: "ui-wrapper",
				touchEnabled: !0,
				swipeThreshold: 50,
				oneToOneTouch: !0,
				preventDefaultSwipeX: !0,
				preventDefaultSwipeY: !1,
				pager: !0,
				pagerType: "full",
				pagerShortSeparator: " / ",
				pagerSelector: null,
				buildPager: null,
				pagerCustom: null,
				controls: !0,
				nextText: "下一张",
				prevText: "上一张",
				nextSelector: null,
				prevSelector: null,
				autoControls: !1,
				startText: "开始",
				stopText: "停止",
				autoControlsCombine: !1,
				autoControlsSelector: null,
				auto: !1,
				pause: 4e3,
				autoStart: !0,
				autoDirection: "next",
				autoHover: !1,
				autoDelay: 0,
				autoSlideForOnePage: !1,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 0,
				slideWidth: 0,
				onSliderLoad: e.noop,
				onSlideBefore: e.noop,
				onSlideAfter: e.noop,
				onSlideNext: e.noop,
				onSlidePrev: e.noop,
				onSliderResize: e.noop
			};
		e.fn.slider = function(s) {
			if(0 == this.length) return this;
			if(this.length > 1) return this.each(function() {
				e(this).slider(s)
			}), this;
			var n = {},
				o = this;
			t.el = this;
			var r = e(window).width(),
				l = e(window).height(),
				d = function() {
					n.settings = e.extend({}, a, s), n.settings.slideWidth = parseInt(n.settings.slideWidth), n.children = o.children(n.settings.slideSelector), n.children.length < n.settings.minSlides && (n.settings.minSlides = n.children.length), n.children.length < n.settings.maxSlides && (n.settings.maxSlides = n.children.length), n.settings.randomStart && (n.settings.startSlide = Math.floor(Math.random() * n.children.length)), n.active = {
						index: n.settings.startSlide
					}, n.carousel = n.settings.minSlides > 1 || n.settings.maxSlides > 1, n.carousel && (n.settings.preloadImages = "all"), n.minThreshold = n.settings.minSlides * n.settings.slideWidth + (n.settings.minSlides - 1) * n.settings.slideMargin, n.maxThreshold = n.settings.maxSlides * n.settings.slideWidth + (n.settings.maxSlides - 1) * n.settings.slideMargin, n.working = !1, n.controls = {}, n.interval = null, n.animProp = "vertical" == n.settings.mode ? "top" : "left", n.usingCSS = n.settings.useCSS && "fade" != n.settings.mode && function() {
						var e = document.createElement("div"),
							t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for(var i in t)
							if(void 0 !== e.style[t[i]]) return n.cssPrefix = t[i].replace("Perspective", "").toLowerCase(), n.animProp = "-" + n.cssPrefix + "-transform", !0;
						return !1
					}(), "vertical" == n.settings.mode && (n.settings.maxSlides = n.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(n.settings.slideSelector).each(function() {
						e(this).data("origStyle", e(this).attr("style"))
					}), c()
				},
				c = function() {
					o.wrap('<div class="' + n.settings.wrapperClass + '"><div class="ui-viewport"></div></div>'), n.viewport = o.parent(), n.loader = e('<div class="ui-loading" />'), n.viewport.prepend(n.loader), o.css({
						width: "horizontal" == n.settings.mode ? 100 * n.children.length + 215 + "%" : "auto",
						position: "relative"
					}), n.usingCSS && n.settings.easing ? o.css("-" + n.cssPrefix + "-transition-timing-function", n.settings.easing) : n.settings.easing || (n.settings.easing = "swing");
					f();
					n.viewport.css({
						width: "100%",
						overflow: "hidden",
						position: "relative"
					}), n.viewport.parent().css({
						maxWidth: p()
					}), n.settings.pager || n.viewport.parent().css({
						margin: "0 auto 0px"
					}), n.children.css({
						"float": "horizontal" == n.settings.mode ? "left" : "none",
						listStyle: "none",
						position: "relative"
					}), n.children.css("width", h()), "horizontal" == n.settings.mode && n.settings.slideMargin > 0 && n.children.css("marginRight", n.settings.slideMargin), "vertical" == n.settings.mode && n.settings.slideMargin > 0 && n.children.css("marginBottom", n.settings.slideMargin), "fade" == n.settings.mode && (n.children.css({
						position: "absolute",
						zIndex: 0,
						display: "none"
					}), n.children.eq(n.settings.startSlide).css({
						zIndex: n.settings.slideZIndex,
						display: "block"
					})), n.controls.el = e('<div class="ui-controls" />'), n.settings.captions && y(), n.active.last = n.settings.startSlide == v() - 1, n.settings.video && o.fitVids();
					var t = n.children.eq(n.settings.startSlide);
					"all" == n.settings.preloadImages && (t = n.children), n.settings.ticker ? n.settings.pager = !1 : (n.settings.pager && S(), n.settings.controls && k(), n.settings.auto && n.settings.autoControls && T(), (n.settings.controls || n.settings.autoControls || n.settings.pager) && n.viewport.after(n.controls.el)), m(t, u)
				},
				m = function(t, i) {
					var a = t.find("img, iframe").length;
					if(0 == a) return void i();
					var s = 0;
					t.find("img, iframe").each(function() {
						e(this).one("load", function() {
							++s == a && i()
						}).each(function() {
							this.complete && e(this).load()
						})
					})
				},
				u = function() {
					if(n.settings.infiniteLoop && "fade" != n.settings.mode && !n.settings.ticker) {
						var t = "vertical" == n.settings.mode ? n.settings.minSlides : n.settings.maxSlides,
							i = n.children.slice(0, t).clone().addClass("ui-clone"),
							a = n.children.slice(-t).clone().addClass("ui-clone");
						o.append(i).prepend(a)
					}
					n.loader.remove(), x(), "vertical" == n.settings.mode && (n.settings.adaptiveHeight = !0), n.viewport.height(g()), o.redrawSlider(), n.settings.onSliderLoad(n.active.index), n.initialized = !0, n.settings.responsive && e(window).bind("resize", O), n.settings.auto && n.settings.autoStart && (v() > 1 || n.settings.autoSlideForOnePage) && E(), n.settings.ticker && N(), n.settings.pager && A(n.settings.startSlide), n.settings.controls && J(), n.settings.touchEnabled && !n.settings.ticker && B()
				},
				g = function() {
					var t = 0,
						a = e();
					if("vertical" == n.settings.mode || n.settings.adaptiveHeight)
						if(n.carousel) {
							var s = 1 == n.settings.moveSlides ? n.active.index : n.active.index * _();
							for(a = n.children.eq(s), i = 1; i <= n.settings.maxSlides - 1; i++) a = a.add(s + i >= n.children.length ? n.children.eq(i - 1) : n.children.eq(s + i))
						} else a = n.children.eq(n.active.index);
					else a = n.children;
					return "vertical" == n.settings.mode ? (a.each(function(i) {
						t += e(this).outerHeight()
					}), n.settings.slideMargin > 0 && (t += n.settings.slideMargin * (n.settings.minSlides - 1))) : t = Math.max.apply(Math, a.map(function() {
						return e(this).outerHeight(!1)
					}).get()), "border-box" == n.viewport.css("box-sizing") ? t += parseFloat(n.viewport.css("padding-top")) + parseFloat(n.viewport.css("padding-bottom")) + parseFloat(n.viewport.css("border-top-width")) + parseFloat(n.viewport.css("border-bottom-width")) : "padding-box" == n.viewport.css("box-sizing") && (t += parseFloat(n.viewport.css("padding-top")) + parseFloat(n.viewport.css("padding-bottom"))), t
				},
				p = function() {
					var e = "100%";
					return n.settings.slideWidth > 0 && (e = "horizontal" == n.settings.mode ? n.settings.maxSlides * n.settings.slideWidth + (n.settings.maxSlides - 1) * n.settings.slideMargin : n.settings.slideWidth), e
				},
				h = function() {
					var e = n.settings.slideWidth,
						t = n.viewport.width();
					return 0 == n.settings.slideWidth || n.settings.slideWidth > t && !n.carousel || "vertical" == n.settings.mode ? e = t : n.settings.maxSlides > 1 && "horizontal" == n.settings.mode && (t > n.maxThreshold || t < n.minThreshold && (e = (t - n.settings.slideMargin * (n.settings.minSlides - 1)) / n.settings.minSlides)), e
				},
				f = function() {
					var e = 1;
					if("horizontal" == n.settings.mode && n.settings.slideWidth > 0)
						if(n.viewport.width() < n.minThreshold) e = n.settings.minSlides;
						else if(n.viewport.width() > n.maxThreshold) e = n.settings.maxSlides;
					else {
						var t = n.children.first().width() + n.settings.slideMargin;
						e = Math.floor((n.viewport.width() + n.settings.slideMargin) / t)
					} else "vertical" == n.settings.mode && (e = n.settings.minSlides);
					return e
				},
				v = function() {
					var e = 0;
					if(n.settings.moveSlides > 0)
						if(n.settings.infiniteLoop) e = Math.ceil(n.children.length / _());
						else
							for(var t = 0, i = 0; t < n.children.length;) ++e, t = i + f(), i += n.settings.moveSlides <= f() ? n.settings.moveSlides : f();
					else e = Math.ceil(n.children.length / f());
					return e
				},
				_ = function() {
					return n.settings.moveSlides > 0 && n.settings.moveSlides <= f() ? n.settings.moveSlides : f()
				},
				x = function() {
					if(n.children.length > n.settings.maxSlides && n.active.last && !n.settings.infiniteLoop) {
						if("horizontal" == n.settings.mode) {
							var e = n.children.last(),
								t = e.position();
							b(-(t.left - (n.viewport.width() - e.outerWidth())), "reset", 0)
						} else if("vertical" == n.settings.mode) {
							var i = n.children.length - n.settings.minSlides,
								t = n.children.eq(i).position();
							b(-t.top, "reset", 0)
						}
					} else {
						var t = n.children.eq(n.active.index * _()).position();
						n.active.index == v() - 1 && (n.active.last = !0), void 0 != t && ("horizontal" == n.settings.mode ? b(-t.left, "reset", 0) : "vertical" == n.settings.mode && b(-t.top, "reset", 0))
					}
				},
				b = function(e, t, i, a) {
					if(n.usingCSS) {
						var s = "vertical" == n.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
						o.css("-" + n.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == t ? (o.css(n.animProp, s), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), I()
						})) : "reset" == t ? o.css(n.animProp, s) : "ticker" == t && (o.css("-" + n.cssPrefix + "-transition-timing-function", "linear"), o.css(n.animProp, s), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(a.resetValue, "reset", 0), j()
						}))
					} else {
						var r = {};
						r[n.animProp] = e, "slide" == t ? o.animate(r, i, n.settings.easing, function() {
							I()
						}) : "reset" == t ? o.css(n.animProp, e) : "ticker" == t && o.animate(r, speed, "linear", function() {
							b(a.resetValue, "reset", 0), j()
						})
					}
				},
				w = function() {
					var t = "",
						i = v();
					if(!(v() <= 1)) {
						for(var a = 0; i > a; a++) {
							var s = "";
							n.settings.buildPager && e.isFunction(n.settings.buildPager) ? (s = n.settings.buildPager(a), n.pagerEl.addClass("ui-custom-pager")) : (s = a + 1, n.pagerEl.addClass("ui-default-pager")), t += '<div class="ui-pager-item"><a href="" data-slide-index="' + a + '" class="ui-pager-link">' + s + "</a></div>"
						}
						n.pagerEl.html(t)
					}
				},
				S = function() {
					n.settings.pagerCustom ? n.pagerEl = e(n.settings.pagerCustom) : (n.pagerEl = e('<div class="ui-pager" />'), n.settings.pagerSelector ? e(n.settings.pagerSelector).html(n.pagerEl) : n.controls.el.addClass("ui-has-pager").append(n.pagerEl), w()), n.pagerEl.on("click", "a", D)
				},
				k = function() {
					n.controls.next = e('<a class="ui-next" href="">' + n.settings.nextText + "</a>"), n.controls.prev = e('<a class="ui-prev" href="">' + n.settings.prevText + "</a>"), n.controls.next.bind("click", C), n.controls.prev.bind("click", L), n.settings.nextSelector && e(n.settings.nextSelector).append(n.controls.next), n.settings.prevSelector && e(n.settings.prevSelector).append(n.controls.prev), n.settings.nextSelector || n.settings.prevSelector || (n.controls.directionEl = e('<div class="ui-controls-direction" />'), n.controls.directionEl.append(n.controls.prev).append(n.controls.next), n.controls.el.addClass("ui-has-controls-direction").append(n.controls.directionEl))
				},
				T = function() {
					n.controls.start = e('<div class="ui-controls-auto-item"><a class="ui-start" href="">' + n.settings.startText + "</a></div>"), n.controls.stop = e('<div class="ui-controls-auto-item"><a class="ui-stop" href="">' + n.settings.stopText + "</a></div>"), n.controls.autoEl = e('<div class="ui-controls-auto" />'), n.controls.autoEl.on("click", ".ui-start", $), n.controls.autoEl.on("click", ".ui-stop", M), n.settings.autoControlsCombine ? n.controls.autoEl.append(n.controls.start) : n.controls.autoEl.append(n.controls.start).append(n.controls.stop), n.settings.autoControlsSelector ? e(n.settings.autoControlsSelector).html(n.controls.autoEl) : n.controls.el.addClass("ui-has-controls-auto").append(n.controls.autoEl), P(n.settings.autoStart ? "stop" : "start")
				},
				y = function() {
					n.children.each(function(t) {
						var i = e(this).find("img:first").attr("title");
						void 0 != i && ("" + i).length && e(this).append('<div class="ui-caption"><span>' + i + "</span></div>")
					})
				},
				C = function(e) {
					n.settings.auto && o.stopAuto(), o.goToNextSlide(), e.preventDefault()
				},
				L = function(e) {
					n.settings.auto && o.stopAuto(), o.goToPrevSlide(), e.preventDefault()
				},
				$ = function(e) {
					o.startAuto(), e.preventDefault()
				},
				M = function(e) {
					o.stopAuto(), e.preventDefault()
				},
				D = function(t) {
					n.settings.auto && o.stopAuto();
					var i = e(t.currentTarget);
					if(void 0 !== i.attr("data-slide-index")) {
						var a = parseInt(i.attr("data-slide-index"));
						a != n.active.index && o.goToSlide(a), t.preventDefault()
					}
				},
				A = function(t) {
					var i = n.children.length;
					return "short" == n.settings.pagerType ? (n.settings.maxSlides > 1 && (i = Math.ceil(n.children.length / n.settings.maxSlides)), void n.pagerEl.html(t + 1 + n.settings.pagerShortSeparator + i)) : (n.pagerEl.find("a").removeClass("active"), void n.pagerEl.each(function(i, a) {
						e(a).find("a").eq(t).addClass("active")
					}))
				},
				I = function() {
					if(n.settings.infiniteLoop) {
						var e = "";
						0 == n.active.index ? e = n.children.eq(0).position() : n.active.index == v() - 1 && n.carousel ? e = n.children.eq((v() - 1) * _()).position() : n.active.index == n.children.length - 1 && (e = n.children.eq(n.children.length - 1).position()), e && ("horizontal" == n.settings.mode ? b(-e.left, "reset", 0) : "vertical" == n.settings.mode && b(-e.top, "reset", 0))
					}
					n.working = !1, n.settings.onSlideAfter(n.children.eq(n.active.index), n.oldIndex, n.active.index)
				},
				P = function(e) {
					n.settings.autoControlsCombine ? n.controls.autoEl.html(n.controls[e]) : (n.controls.autoEl.find("a").removeClass("active"), n.controls.autoEl.find("a:not(.ui-" + e + ")").addClass("active"))
				},
				J = function() {
					1 == v() ? (n.controls.prev.addClass("disabled"), n.controls.next.addClass("disabled")) : !n.settings.infiniteLoop && n.settings.hideControlOnEnd && (0 == n.active.index ? (n.controls.prev.addClass("disabled"), n.controls.next.removeClass("disabled")) : n.active.index == v() - 1 ? (n.controls.next.addClass("disabled"), n.controls.prev.removeClass("disabled")) : (n.controls.prev.removeClass("disabled"), n.controls.next.removeClass("disabled")))
				},
				E = function() {
					if(n.settings.autoDelay > 0) {
						setTimeout(o.startAuto, n.settings.autoDelay)
					} else o.startAuto();
					n.settings.autoHover && o.hover(function() {
						n.interval && (o.stopAuto(!0), n.autoPaused = !0)
					}, function() {
						n.autoPaused && (o.startAuto(!0), n.autoPaused = null)
					})
				},
				N = function() {
					var t = 0;
					if("next" == n.settings.autoDirection) o.append(n.children.clone().addClass("ui-clone"));
					else {
						o.prepend(n.children.clone().addClass("ui-clone"));
						var i = n.children.first().position();
						t = "horizontal" == n.settings.mode ? -i.left : -i.top
					}
					b(t, "reset", 0), n.settings.pager = !1, n.settings.controls = !1, n.settings.autoControls = !1, n.settings.tickerHover && !n.usingCSS && n.viewport.hover(function() {
						o.stop()
					}, function() {
						var t = 0;
						n.children.each(function(i) {
							t += "horizontal" == n.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
						});
						var i = n.settings.speed / t,
							a = "horizontal" == n.settings.mode ? "left" : "top",
							s = i * (t - Math.abs(parseInt(o.css(a))));
						j(s)
					}), j()
				},
				j = function(e) {
					speed = e ? e : n.settings.speed;
					var t = {
							left: 0,
							top: 0
						},
						i = {
							left: 0,
							top: 0
						};
					"next" == n.settings.autoDirection ? t = o.find(".ui-clone").first().position() : i = n.children.first().position();
					var a = "horizontal" == n.settings.mode ? -t.left : -t.top,
						s = "horizontal" == n.settings.mode ? -i.left : -i.top,
						r = {
							resetValue: s
						};
					b(a, "ticker", speed, r)
				},
				B = function() {
					n.touch = {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						}
					}, n.viewport.bind("touchstart", q)
				},
				q = function(e) {
					if(n.working) e.preventDefault();
					else {
						n.touch.originalPos = o.position();
						var t = e.originalEvent;
						n.touch.start.x = t.changedTouches[0].pageX, n.touch.start.y = t.changedTouches[0].pageY, n.viewport.bind("touchmove", z), n.viewport.bind("touchend", H)
					}
				},
				z = function(e) {
					var t = e.originalEvent,
						i = Math.abs(t.changedTouches[0].pageX - n.touch.start.x),
						a = Math.abs(t.changedTouches[0].pageY - n.touch.start.y);
					if(3 * i > a && n.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * a > i && n.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != n.settings.mode && n.settings.oneToOneTouch) {
						var s = 0;
						if("horizontal" == n.settings.mode) {
							var o = t.changedTouches[0].pageX - n.touch.start.x;
							s = n.touch.originalPos.left + o
						} else {
							var o = t.changedTouches[0].pageY - n.touch.start.y;
							s = n.touch.originalPos.top + o
						}
						b(s, "reset", 0)
					}
				},
				H = function(e) {
					n.viewport.unbind("touchmove", z);
					var t = e.originalEvent,
						i = 0;
					if(n.touch.end.x = t.changedTouches[0].pageX, n.touch.end.y = t.changedTouches[0].pageY, "fade" == n.settings.mode) {
						var a = Math.abs(n.touch.start.x - n.touch.end.x);
						a >= n.settings.swipeThreshold && (n.touch.start.x > n.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
					} else {
						var a = 0;
						"horizontal" == n.settings.mode ? (a = n.touch.end.x - n.touch.start.x, i = n.touch.originalPos.left) : (a = n.touch.end.y - n.touch.start.y, i = n.touch.originalPos.top), !n.settings.infiniteLoop && (0 == n.active.index && a > 0 || n.active.last && 0 > a) ? b(i, "reset", 200) : Math.abs(a) >= n.settings.swipeThreshold ? (0 > a ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : b(i, "reset", 200)
					}
					n.viewport.unbind("touchend", H)
				},
				O = function(t) {
					if(n.initialized) {
						var i = e(window).width(),
							a = e(window).height();
						(r != i || l != a) && (r = i, l = a, o.redrawSlider(), n.settings.onSliderResize.call(o, n.active.index))
					}
				};
			return o.goToSlide = function(t, i) {
				if(!n.working && n.active.index != t)
					if(n.working = !0, n.oldIndex = n.active.index, n.active.index = 0 > t ? v() - 1 : t >= v() ? 0 : t, n.settings.onSlideBefore(n.children.eq(n.active.index), n.oldIndex, n.active.index), "next" == i ? n.settings.onSlideNext(n.children.eq(n.active.index), n.oldIndex, n.active.index) : "prev" == i && n.settings.onSlidePrev(n.children.eq(n.active.index), n.oldIndex, n.active.index), n.active.last = n.active.index >= v() - 1, n.settings.pager && A(n.active.index), n.settings.controls && J(), "fade" == n.settings.mode) n.settings.adaptiveHeight && n.viewport.height() != g() && n.viewport.animate({
						height: g()
					}, n.settings.adaptiveHeightSpeed), n.children.filter(":visible").fadeOut(n.settings.speed).css({
						zIndex: 0
					}), n.children.eq(n.active.index).css("zIndex", n.settings.slideZIndex + 1).fadeIn(n.settings.speed, function() {
						e(this).css("zIndex", n.settings.slideZIndex), I()
					});
					else {
						n.settings.adaptiveHeight && n.viewport.height() != g() && n.viewport.animate({
							height: g()
						}, n.settings.adaptiveHeightSpeed);
						var a = 0,
							s = {
								left: 0,
								top: 0
							};
						if(!n.settings.infiniteLoop && n.carousel && n.active.last)
							if("horizontal" == n.settings.mode) {
								var r = n.children.eq(n.children.length - 1);
								s = r.position(), a = n.viewport.width() - r.outerWidth()
							} else {
								var l = n.children.length - n.settings.minSlides;
								s = n.children.eq(l).position();

							}
						else if(n.carousel && n.active.last && "prev" == i) {
							var d = 1 == n.settings.moveSlides ? n.settings.maxSlides - _() : (v() - 1) * _() - (n.children.length - n.settings.maxSlides),
								r = o.children(".ui-clone").eq(d);
							s = r.position()
						} else if("next" == i && 0 == n.active.index) s = o.find("> .ui-clone").eq(n.settings.maxSlides).position(), n.active.last = !1;
						else if(t >= 0) {
							var c = t * _();
							s = n.children.eq(c).position()
						}
						if("undefined" != typeof s) {
							var m = "horizontal" == n.settings.mode ? -(s.left - a) : -s.top;
							b(m, "slide", n.settings.speed)
						}
					}
			}, o.goToNextSlide = function() {
				if(n.settings.infiniteLoop || !n.active.last) {
					var e = parseInt(n.active.index) + 1;
					o.goToSlide(e, "next")
				}
			}, o.goToPrevSlide = function() {
				if(n.settings.infiniteLoop || 0 != n.active.index) {
					var e = parseInt(n.active.index) - 1;
					o.goToSlide(e, "prev")
				}
			}, o.startAuto = function(e) {
				n.interval || (n.interval = setInterval(function() {
					"next" == n.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
				}, n.settings.pause), n.settings.autoControls && 1 != e && P("stop"))
			}, o.stopAuto = function(e) {
				n.interval && (clearInterval(n.interval), n.interval = null, n.settings.autoControls && 1 != e && P("start"))
			}, o.getCurrentSlide = function() {
				return n.active.index
			}, o.getCurrentSlideElement = function() {
				return n.children.eq(n.active.index)
			}, o.getSlideCount = function() {
				return n.children.length
			}, o.redrawSlider = function() {
				n.children.add(o.find(".ui-clone")).width(h()), n.viewport.css("height", g()), n.settings.ticker || x(), n.active.last && (n.active.index = v() - 1), n.active.index >= v() && (n.active.last = !0), n.settings.pager && !n.settings.pagerCustom && (w(), A(n.active.index))
			}, o.destroySlider = function() {
				n.initialized && (n.initialized = !1, e(".ui-clone", this).remove(), n.children.each(function() {
					void 0 != e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
				}), void 0 != e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), n.controls.el && n.controls.el.remove(), n.controls.next && n.controls.next.remove(), n.controls.prev && n.controls.prev.remove(), n.pagerEl && n.settings.controls && n.pagerEl.remove(), e(".ui-caption", this).remove(), n.controls.autoEl && n.controls.autoEl.remove(), clearInterval(n.interval), n.settings.responsive && e(window).unbind("resize", O))
			}, o.reloadSlider = function(e) {
				void 0 != e && (s = e), o.destroySlider(), d()
			}, d(), this
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		function t(i, a) {
			function s(t) {
				o = t.find(c.tabSelector), o.on(c.events, function(i) {
					var a = o.index(e(this));
					if(i.preventDefault(), e(this).attr("href") && e(this).attr("href").split("#")[1]) {
						var s = e(window).scrollTop();
						window.location.hash = e(this).attr("href").split("#")[1], e("body, html").scrollTop(s)
					}
					n.each(function() {
						e(this).find(c.tabSelector).eq(a).addClass("tab-active").siblings(c.tabSelector).removeClass("tab-active")
					}), "function" == typeof c.onShow ? c.onShow(l.eq(a), a) : l.eq(a).removeClass("hide").show(), "function" == typeof c.onHide ? c.onHide(l.eq(a).siblings(c.contentSelector), a) : l.eq(a).siblings(c.contentSelector).addClass("hide").hide(), c.onLoad(t, a, c)
				})
			}
			var n, o, r, l, d, c;
			if(d = {
					isSync: !1,
					events: "click",
					tabSelector: "li",
					containerSelector: ".tab-container",
					contentSelector: ".tab-content",
					onShow: null,
					onHide: null,
					onLoad: e.noop
				}, c = e.extend({}, d, a), c.isSync === !1) {
				if(0 === i.length) return i;
				if(i.length > 1) return i.each(function() {
					t(e(this), a)
				}), i
			}
			n = e(i), r = n.first().attr("data-tab-target") ? e("#" + n.first().attr("data-tab-target")) : n.first().siblings(c.containerSelector), l = r.children(c.contentSelector), n.each(function() {
				s(e(this))
			}), c.onLoad(n, c)
		}
		e.fn.tabSwitch = function(e) {
			return t(this, e), this
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		function t(t) {
			function i() {
				return 0 >= _ ? !1 : (b && clearInterval(b), void(b = setTimeout(function() {
					var e = w === _ - 1 ? 0 : w + 1;
					a(e), i()
				}, p.pause)))
			}

			function a(e) {
				return w === e ? !1 : (x.css({
					marginLeft: -f * h * e,
					transition: "margin-left " + p.speed / 1e3 + "s " + p.easing
				}), p.controls && (0 === e ? c.addClass("control-disabled") : c.removeClass("control-disabled"), e === _ - 1 ? m.addClass("control-disabled") : m.removeClass("control-disabled")), p.pager && u.find("li").eq(e).addClass("pager-active").siblings().removeClass("pager-active"), void(w = e))
			}

			function s() {
				for(var t = '<ul class="xm-pagers">', i = 0, s = _; s > i; i += 1) t += '<li class="pager' + (0 === i ? " pager-active" : "") + '"><span class="dot">' + (i + 1) + "</span></li>";
				t += "</ul>", u.html(t), u.find("li").off(".carousel").on("click.carousel", function() {
					e(this).addClass("pager-active").siblings().removeClass("pager-active"), a(u.find("li").index(e(this)))
				})
			}

			function n() {
				h = p.itemPerSlide || Math.ceil(r.width() / f), _ = Math.ceil(l.length / h), 1 >= _ || (a(0), p.pager && s(), p.auto && (i(), p.controls && d.find(".control").off(".carousel").on({
					"mouseenter.carousel": function() {
						b && clearTimeout(b)
					},
					"mouseleave.carousel": function() {
						i()
					}
				}), p.pager && u.find(".pager").off(".carousel").on({
					"mouseenter.carousel": function() {
						b && clearTimeout(b)
					},
					"mouseleave.carousel": function() {
						i()
					}
				})))
			}
			var o, r, l, d, c, m, u, g, p, h, f, v, _, x = e(this),
				b = 0,
				w = -1;
			return g = {
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
				onLoad: e.noop
			}, p = e.extend({}, g, t), l = x.find(p.itemSelector), p.itemPerSlide && l.length <= p.itemPerSlide ? this : (f = p.itemWidth || l.outerWidth(!0), v = p.itemHeight || l.outerHeight(), o = p.containerSelector ? x.closest(p.containerSelector) : x.parent(), o.addClass("xm-carousel-container"), r = x.wrap('<div class="xm-carousel-wrapper"></div>').closest(".xm-carousel-wrapper").css({
				height: v,
				overflow: "hidden"
			}), x.css("width", f * l.length), p.controls && (d = e('<div class="xm-controls ' + p.controlsClass + ' xm-carousel-controls"><a class="control control-prev iconfont" href="javascript: void(0);">&#xe628;</a><a class="control control-next iconfont" href="javascript: void(0);">&#xe623;</a></div>'), p.controlsSelector ? o.find(p.controlsSelector).append(d) : d.insertAfter(r), c = d.find(".control-prev"), m = d.find(".control-next"), c.on("click", function(t) {
				t.preventDefault(), e(this).hasClass("control-disabled") || a(w - 1)
			}), m.on("click", function(t) {
				t.preventDefault(), e(this).hasClass("control-disabled") || a(w + 1)
			})), p.pager && (u = e('<div class="xm-pagers-wrapper"></div>'), p.pagersSelector ? o.find(p.pagersSelector).append(u) : u.insertAfter(r)), n(), p.onLoad(x), void e(window).on("resize", n))
		}
		e.fn.carousel = function(e) {
			return this.each(function() {
				t.call(this, e)
			}), this
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		function t(t) {
			function i() {
				for(var t = -1, i = e(document).scrollTop(), a = 0, s = d.length; s > a && i + o.viewport.height() > d[a]; a += 1) t += 1;
				return t
			}

			function a() {
				var t = i();
				l !== t && (l = t, r.filter(function(t) {
					return l >= t && !e(this).hasClass(o.visibleClass)
				}).addClass(o.visibleClass).trigger("visible.visibleWatcher"), o.onVisible(r.eq(l), l))
			}

			function s() {
				r.each(function() {
					var t = e(this).attr("data-offset") ? Number(e(this).attr("data-offset")) : o.offset,
						i = t % 1 === 0 ? t : t * o.viewport.height();
					d.push(e(this).offset().top + i)
				}), a(), o.onLoad()
			}
			var n, o, r = e(this),
				l = -1,
				d = [];
			n = {
				viewport: e(window),
				visibleClass: "is-visible",
				offset: 300,
				onLoad: e.noop,
				onVisible: e.noop
			}, o = e.extend({}, n, t), s(), o.viewport.on({
				"scroll.visibleWatcher": a,
				"resize.visibleWatcher": s
			})
		}
		e.fn.visibleWatcher = function(e) {
			return t.call(this, e), this
		}
	}(jQuery)
}, function(e, t, i) {
	function a(e, t, i) {
		var a = e.find("a");
		$.each(a, function(e, a) {
			var s, n = $(a).attr("data-stat-index"),
				o = r($(a).attr("data-stat-text")),
				l = $(a).attr("data-stat-method"),
				d = $(a).attr("data-stat-addcart");
			s = d ? "stat_" + t + d + "." + i + "_" + n + "_" + l : "stat_" + t + "." + i + "_" + n + "_" + l, $(a).attr({
				"data-stat-pid": s,
				"data-stat-aid": o
			})
		})
	}

	function s(e) {
		if("cart" !== o.page && o.useCarousel) {
			var t = e.find("ul").eq(0);
			t && t.carousel({
				containerSelector: e,
				controls: o.carouselControl,
				pager: o.carouselPage,
				itemHeight: 320
			})
		}
		o.isBuy && ($(".J_xm-recommend-list").hover(function() {
			$(this).find(".J_xm-recommend-btn").show()
		}, function() {
			$(this).find(".J_xm-recommend-btn").hide()
		}), $(".J_xm-recommend-btn").off(".addcart").on("click.addcart", function() {
			function e() {
				i.removeClass("xm-recommend-notice-active"), setTimeout(function() {
					t.removeClass("disabled"), i.empty()
				}, 500)
			}
			var t = $(this),
				i = t.parent().siblings(".xm-recommend-notice");
			return t.hasClass("disabled") ? !1 : (MI.addShopCart(t.attr("data-stat-gid"), function(t) {
				1 === t.code ? "cart" !== o.page ? (i.addClass("xm-recommend-notice-active").empty().append('<a class="btn btn-block btn-green btn-notice" href="javascript: void(0);">成功加入购物车</a>'), i.find(".btn-notice").one("click", e), setTimeout(function() {
					e(), location.reload()
				}, 1e3)) : location.href = MI.GLOBAL_CONFIG.staticSite + "/cart/" : alert(t.msg)
			}), !1)
		})), a(e, o.page, o.pageName), $.isFunction($("body").linkSign) && e.linkSign({
			live: !0
		});
		var i = e.attr("id"),
			s = "re-" + o.page + "." + o.tips;
		$.force_appear(), e.appear(), e.one("appear", function() {
			if("undefined" != typeof _msq && _msq.push(["trackPanelShow", i, s]), !e.data("log_codes")) {
				for(var t = e.find(".J_xm-recommend-list").find("dt").find("a"), a = "", n = 0, o = t.length; o > n; n++) a += t.eq(n).data("log_code") + ";";
				e.attr("data-log_codes", a.substring(0, a.length - 1))
			}
		})
	}
	i(5), i(8);
	var n = {},
		o = {},
		r = function(e) {
			try {
				return e.replace(/\s/g, "")
			} catch(t) {
				return e
			}
		};
	! function(e) {
		function t(e, t, a, n) {
			if(e.length < 5) return !1;
			var r = i(9),
				l = {
					v: 1,
					data: e,
					useCarousel: o.useCarousel,
					isBuy: o.isBuy,
					itemSite: MI.GLOBAL_CONFIG.itemSite,
					title: n ? "买购物车中商品的人还看了" : o.title,
					page: o.page,
					hideTitle: o.hideTitle,
					type: t.type
				};
			a.addClass("container").html(r(l)), s(a), null !== t.callback && "function" == typeof t.callback && t.callback()
		}

		function a(e) {
			return e.length < 5 ? !1 : (e.length > 20 && (e = e.slice(0, 20)), e.length > 15 && e.length < 20 && (e = e.slice(0, 15)), e.length > 10 && e.length < 15 && (e = e.slice(0, 10)), e.length > 5 && e.length < 10 && (e = e.slice(0, 5)), e)
		}

		function r(i) {
			var s = o.api;
			console.log(s);
			
				r = {
					cid: n.gid
				};
			e.ajax({
				url: s,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				cache: !0,
				data: r,
				success: function(s) {
					if(0 === s.code) {
						s = s.data || {};
						var o = e(i);
						"buyRecommend" === n.type || "paySuccess" === n.type ? (t(a(s.alsobuy), n, o), n.type = "dirHistoryRecommend", o = e("#J_historyRecommend"), t(a(s.alsoview), n, o, !0)) : t(a(s), n, o)
					}
				}
			})
		}
		var l = {
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
		e.fn.miRecommend = function(t) {
			n = e.extend(l, t), o = n[n.type], r(this)
		}
	}(jQuery)
}, function(e, t) {
	! function(e) {
		function t() {
			n = !1;
			for(var t = 0, s = a.length; s > t; t++) {
				var o = e(a[t]).filter(function() {
					return e(this).is(":appeared")
				});
				if(o.trigger("appear", [o]), i) {
					var r = i.not(o);
					r.trigger("disappear", [r])
				}
				i = o
			}
		}
		var i, a = [],
			s = !1,
			n = !1,
			o = {
				interval: 250,
				force_process: !1
			},
			r = e(window);
		e.expr[":"].appeared = function(t) {
			var i = e(t);
			if(!i.is(":visible")) return !1;
			var a = r.scrollLeft(),
				s = r.scrollTop(),
				n = i.offset(),
				o = n.left,
				l = n.top;
			return l + i.height() >= s && l - (i.data("appear-top-offset") || 0) <= s + r.height() && o + i.width() >= a && o - (i.data("appear-left-offset") || 0) <= a + r.width() ? !0 : !1
		}, e.fn.extend({
			appear: function(i) {
				var r = e.extend({}, o, i || {}),
					l = this.selector || this;
				if(!s) {
					var d = function() {
						n || (n = !0, setTimeout(t, r.interval))
					};
					e(window).scroll(d).resize(d), s = !0
				}
				return r.force_process && setTimeout(t, r.interval), a.push(l), e(l)
			}
		}), e.extend({
			force_appear: function() {
				return s ? (t(), !0) : !1
			}
		})
	}(jQuery)
}, function(e, t) {
	e.exports = function(e) {
		var t = "";
		e.title && !e.hideTitle && (t += '<h2 class="xm-recommend-title"><span>' + e.title + "</span></h2>"), t += '<div class="xm-recommend"> ', t += e.useCarousel ? ' <ul class="xm-carousel-col-5-list xm-carousel-list clearfix"> ' : ' <ul class="row clearfix"> ';
		var i = e.data;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) {
				a = i[s += 1], t += " ", t += e.useCarousel ? ' <li class="J_xm-recommend-list"> ' : ' <li class="J_xm-recommend-list span4"> ', t += " ";
				var o = /.jpg|.jpeg|.png/,
					r = o.exec(a.image),
					l = "!140x140" + r,
					d = "!280x280" + r;
				if(t += " ", a.ext && a.ext.img && a.ext.url) {
					t += " ";
					var o = /.jpg|.jpeg|.png/,
						c = o.exec(a.ext.img),
						m = "!234x300" + c,
						u = "!468x600" + c;
					t += ' <a target="_blank" href="' + a.ext.url + '" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index=' + s + ' data-stat-text="' + a.name + '"> <img src="' + a.ext.img.replace(/.jpg|.png|.jpeg/, m) + '" srcset="' + a.ext.img.replace(/.jpg|.png|.jpeg/, u) + '  2x" alt="' + a.name + '" /> </a> '
				} else t += ' <dl> <dt> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index=' + s + ' data-stat-text="' + a.name + '" target="_blank"> <img src="' + a.image.replace(/.jpg|.png|.jpeg/, l) + '" srcset="' + a.image.replace(/.jpg|.png|.jpeg/, d) + '  2x" alt="' + a.name + '" /> </a> </dt> <dd class="xm-recommend-name"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index=' + s + ' target="_blank"> ' + a.name + ' </a> </dd> <dd class="xm-recommend-price">' + a.price + '元</dd> <dd class="xm-recommend-tips"> ', a.comments && (t += " ", parseInt(a.comments) > 0 && (t += " " + a.comments + "人好评 "), t += " "), t += " ", e.isBuy && (t += ' <a href="' + e.itemSite + "/cart/add/" + a.goodsid + '-0-1" data-log_code="' + a.logcode + '" data-stat-gid="' + a.goodsid + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index=' + s + ' data-stat-text="' + a.name + '" data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn">加入购物车</a> '), t += ' </dd> <dd class="xm-recommend-notice"></dd> </dl> ';
				t += " </li>"
			}
		return t += "</ul></div>"
	}
}, function(e, t) {
	jQuery(function(e) {
		var t = document.all && !window.XMLHttpRequest,
			i = e("body");
		t && i.addClass("ie6")
	})
}, function(e, t, i) {
	i(12), i(13),
		function(e) {
			function t() {
				l.addClass("failed"), i.html("暂无闪购活动"), r.html('<li class="rainbow-item-1"><div class="bg"></div> </li><li class="rainbow-item-2"><div class="bg"></div></li><li class="rainbow-item-3"><div class="bg"></div></li><li class="rainbow-item-4"><div class="bg"></div></li>')
			}
			var i = e(".J_falshDesc"),
				a = e(".J_falshRound"),
				s = e(".J_falshTime"),
				n = e("#J_flashLoading"),
				o = e(".J_flashPurchaseList"),
				r = e(".J_purchase_temp"),
				l = e(".J_flashPurchaseInfo"),
				d = doT.template(e("#J_flashgoodList").html()),
				c = {
					getcurRound: function(e) {
						var t = new Date(1e3 * e),
							i = t.getMinutes(),
							s = t.getHours();
						10 > s && (s = "0" + s), 10 > i && (i = "0" + i);
						var n = s + ":" + i + " 场";
						a.html(n)
					},
					getCountdownTime: function(t, a) {
						var s = this;
						e.miCountdown({
							startTime: t,
							endTime: a,
							upTime: !0,
							onTime: function(e) {
								i.html("距离开始还有"), s.flashtime(e)
							},
							onStart: function(e) {
								i.html("距离结束还有"), s.flashtime(e)
							},
							onEnd: function() {
								window.timer && clearTimeout(window.timer), i.html("距离结束还有"), s.flashtime(0)
							}
						})
					},
					flashtime: function(e) {
						var t, i, a, n;
						t = Math.floor(e % 60), i = Math.floor(e / 60 % 60), a = Math.floor(e / 3600 % 24), n = Math.floor(e / 86400) > 0 ? Math.floor(e / 86400) : "", 10 > a && (a = "0" + a), 10 > i && (i = "0" + i), 10 > t && (t = "0" + t);
						var o = ' <div class="box">' + a + '</div><div class="dosh">:</div><div class="box">' + i + '</div><div class="dosh">:</div><div class="box">' + t + "</div>";
						s.html(o)
					}
				};
			e.ajax({
				url: "//a.huodong.mi.com/flashsale/getslideshow",
				dataType: "jsonp",
				cache: !0,
				timeout: 1e4,
				error: function() {
					t()
				},
				success: function(i) {
					if(n.hide(), o.removeClass("hide"), i.data && i.data.list) {
						var a = i.data.list.start_time,
							s = i.data.list.end_time;
						0 === a ? t() : (i.data.list.list ? (c.getcurRound(a), c.getCountdownTime(a, s), r.html(d(i.data.list.list))) : t(), window.xmstLittle && xmstLittle.isFunction(xmstLittle.fn.linkSign) && xmstLittle(r[0]).linkSign(), e(".J_carouselList").carousel2({
							containerSelector: ".xm-flashPurchase",
							controlsSelector: ".box-hd .more",
							controlsClass: "xm-controls-line-small",
							itemPerSlide: 4,
							auto: !1,
							pause: 8e3
						}))
					} else t()
				}
			})
		}(jQuery)
}, function(e, t) {
	$.extend({
		miCountdown: function(e) {
			var t = {
					startTime: "",
					endTime: "",
					timer: "",
					upTime: !1,
					onTime: $.noop,
					onStart: $.noop,
					onEnd: $.noop
				},
				i = $.extend(t, e);
			if(i.startTime && i.endTime) {
				var a = $.isNumeric(i.startTime) ? i.startTime : new Date(i.startTime).getTime() / 1e3,
					s = $.isNumeric(i.endTime) ? i.endTime : new Date(i.endTime).getTime() / 1e3;
				return window.diffTime = window.diffTime || 0, window.checkTime = function() {
					var e = parseInt((new Date).getTime() / 1e3) + window.diffTime;
					if(window.surplusTime = a - e, i.timer && clearTimeout(i.timer), i.upTime) {
						if(e >= a && s > e) "function" == typeof i.onStart && i.onStart(s - e);
						else if(e >= s) {
							if("function" == typeof i.onEnd) return void i.onEnd(e)
						} else i.onTime(window.surplusTime);
						i.timer = setTimeout(function() {
							window.checkTime()
						}, 1e3)
					} else e >= a && s > e ? "function" == typeof i.onStart && i.onStart(e) : e >= s ? "function" == typeof i.onEnd && i.onEnd(e) : (i.onTime(window.surplusTime), i.timer = setTimeout(function() {
						e += 1, window.checkTime()
					}, 1e3))
				}, window.servertime ? void window.checkTime() : void $.ajax({
					url: "//time.hd.mi.com/gettimestamp",
					dataType: "script",
					cache: !0,
					timeout: 1e4,
					error: function() {
						window.servertime = (new Date).getTime() / 1e3, window.checkTime()
					},
					success: function() {
						window.servertime && "number" == typeof window.servertime ? (window.servertime = window.servertime, window.diffTime = window.servertime - parseInt((new Date).getTime() / 1e3)) : window.servertime = (new Date).getTime() / 1e3, window.checkTime()
					}
				})
			}
		}
	})
}, function(e, t) {
	! function(e) {
		function t(t) {
			function i() {
				x >= r.length - g ? c.addClass("control-disabled") : c.removeClass("control-disabled"), 0 >= x ? d.addClass("control-disabled") : d.removeClass("control-disabled"), v.css({
					marginLeft: -p * x,
					transition: "margin-left " + u.speed / 1e3 + "s " + u.easing
				})
			}

			function a(e) {
				_ = e >= g ? g : r.length % g
			}

			function s() {
				g = u.itemPerSlide || Math.ceil(o.width() / p), f = Math.ceil(r.length / g), 1 >= f || i(0)
			}
			var n, o, r, l, d, c, m, u, g, p, h, f, v = e(this),
				_ = 1,
				x = 0;
			return m = {
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
				onLoad: e.noop
			}, u = e.extend({}, m, t), r = v.find(u.itemSelector), u.itemPerSlide && r.length <= u.itemPerSlide ? this : (p = u.itemWidth || r.outerWidth(!0), h = u.itemHeight || r.outerHeight(), n = u.containerSelector ? v.closest(u.containerSelector) : v.parent(), n.addClass("xm-carousel-container"), o = v.wrap('<div class="xm-carousel-wrapper"></div>').closest(".xm-carousel-wrapper").css({
				height: h,
				overflow: "hidden"
			}), v.css("width", p * r.length), u.controls && (l = e('<div class="xm-controls ' + u.controlsClass + ' xm-carousel-controls"><a class="control control-prev iconfont" href="javascript: void(0);">&#xe628;</a><a class="control control-next iconfont" href="javascript: void(0);">&#xe623;</a></div>'), u.controlsSelector ? n.find(u.controlsSelector).append(l) : l.insertAfter(o), d = l.find(".control-prev"), c = l.find(".control-next"), d.on("click", function(t) {
				t.preventDefault(), e(this).hasClass("control-disabled") || (a(x), x -= _, i(x))
			}), c.on("click", function(t) {
				t.preventDefault(), e(this).hasClass("control-disabled") || (a(r.length - x - g), x += _, i(x))
			})), s(), u.onLoad(v), void e(window).on("resize", s))
		}
		e.fn.carousel2 = function(e) {
			return this.each(function() {
				t.call(this, e)
			}), this
		}
	}(jQuery)
}, function(e, t) {
	e.exports = function(e) {
		var t = $(e),
			i = t.find("> li");
		i.each(function() {
			var e, t = $(this).find(".children-list").find("> li");
			$(this).find(".children").addClass("children-col-" + Math.ceil(t.length / 6)), t.length > 6 && (e = $(document.createDocumentFragment()), t.each(function(t) {
				t % 6 === 0 && e.append($('<ul class="children-list children-list-col children-list-col-' + Math.ceil((t + 1) / 6) + '"></ul>')), $(this).appendTo(e.find(".children-list-col-" + Math.ceil((t + 1) / 6)))
			}), $(this).find(".children").html(e))
		}), t.miMenuAim({
			activate: function(e) {
				$(e).addClass("category-item-active").find("img").each(function() {
					$(this).attr("src", $(this).attr("data-src"))
				})
			},
			deactivate: function(e) {
				$(e).removeClass("category-item-active")
			},
			exitMenu: function() {
				return !0
			}
		})
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += ' <li class="brick-item brick-item-l"> <a href="' + a.url + '" class="exposure" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"><img src="' + a.image + '"  alt="" /></a> </li>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += ' <li class="brick-item brick-item-m"> <a href="' + a.url + '" class="exposure" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"><img src="' + a.image + '"  alt="" /></a> </li>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;)
				if(a = i[s += 1], t += " ", a.goods_id) {
					if(t += ' <li class="brick-item brick-item-m" data-gid="' + ("0" !== a.goods_id ? a.goods_id : a.commodity_id) + '"> <div class="figure figure-img"> <a class="exposure" href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" target="_blank" data-log_code="' + a.log_code + '"><img src="' + a.image + '" width="150" height="150" alt="' + a.title + '" /></a> </div> <h3 class="title"> <a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank">' + a.title + "</a></h3> ", "undefined" != typeof a.sectionName && "smart" === a.sectionName && (t += ' <p class="desc">' + a.desc + "</p> "), t += ' <p class="price"> <span class="num">' + a.sale_price + "</span>元 ", Number(a.origin_price) > Number(a.sale_price) && (t += ' <del><span class="num">' + a.origin_price + "</span>元</del> "), t += ' </p> <p class="rank"></p> ', "1" === a.is_discount && Number(a.origin_price) > Number(a.sale_price)) {
						t += ' <div class="flag flag-saleoff"> ';
						var o = Number(a.sale_price) / Number(a.origin_price) * 10;
						if(o = Math.ceil(o), t += " ", 9 > o) t += " 享" + o + "折 ";
						else {
							t += " ", o = Math.ceil(10 * o) / 10;
							var r = Number(a.origin_price) - Number(a.sale_price);
							t += " 减 " + r + " 元 "
						}
						t += " </div> "
					} else parseInt(a.free_ship) > 0 ? (t += ' <div class="flag flag-postfree">', t += 1 === parseInt(a.free_ship) ? "免邮费" : "" + a.free_ship + "件包邮", t += "</div> ") : "1" === a.buy_give ? t += ' <div class="flag flag-gift">有赠品</div> ' : "1" === a.is_new && (t += ' <div class="flag flag-new">新品</div> ');
					t += " ", a.comment && a.comment.content && (t += ' <div class="review-wrapper"> <a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"> <span class="review">' + a.comment.content + '</span> <span class="author"> 来自于 ' + a.comment.user_name + ' 的评价 <span class="date" data-date="' + a.comment.add_time + '"></span> </span> </a> </div> '), t += " </li> "
				}
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;)
				if(a = i[s += 1], t += " ", a.goods_id) {
					if(t += ' <li class="brick-item brick-item-m brick-item-m-2" data-gid="' + ("0" !== a.goods_id ? a.goods_id : a.commodity_id) + '"> <div class="figure figure-img"> <a class="exposure" href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"> <img src="' + a.image + '" width="160" height="160" alt="' + a.title + '" /> </a> </div> <h3 class="title"><a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank">' + a.title + '</a></h3> <p class="desc">' + a.desc + '</p> <p class="price"> <span class="num">' + a.sale_price + "</span>元 ", Number(a.origin_price) > Number(a.sale_price) && (t += ' <del><span class="num">' + a.origin_price + "</span>元</del> "), t += " </p> ", "1" === a.is_discount && Number(a.origin_price) > Number(a.sale_price)) {
						t += ' <div class="flag flag-saleoff"> ';
						var o = Number(a.sale_price) / Number(a.origin_price) * 10;
						if(o = Math.ceil(o), t += " ", 9 > o) t += " 享" + o + "折 ";
						else {
							t += " ", o = Math.ceil(10 * o) / 10;
							var r = Number(a.origin_price) - Number(a.sale_price);
							t += " 减 " + r + " 元 "
						}
						t += " </div> "
					} else parseInt(a.free_ship) > 0 ? (t += ' <div class="flag flag-postfree">', t += 1 === parseInt(a.free_ship) ? "免邮费" : "" + a.free_ship + "件包邮", t += "</div> ") : "1" === a.buy_give ? t += ' <div class="flag flag-gift">有赠品</div> ' : "1" === a.is_new && (t += ' <div class="flag flag-new">新品</div> ');
					t += " </li> "
				}
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e.data;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += " ", 7 > s && (t += ' <li class="brick-item brick-item-m" data-gid="' + a.goodsid + '"> <div class="figure figure-img"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index="' + s + '" data-stat-text="' + a.name + '" target="_blank"><img src="' + a.image + '?width=150&height=150" width="150" height="150" alt="' + a.name + '" /></a> </div> <h3 class="title"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index="' + s + '" data-stat-text="' + a.name + '" target="_blank"> ', t += a.adapt && a.adapt[0] && -1 == a.name.indexOf(a.adapt[0]) ? " " + a.adapt[0] + " " + a.name + " " : " " + a.name + " ", t += ' </a></h3> <p class="price"> <span class="num">' + a.price + "</span>元 ", Number(a.market_price) > Number(a.price) && (t += ' <del><span class="num">' + a.market_price + "</span>元</del> "), t += " </p> ", "0" !== a.comments && (t += ' <p class="rank">' + a.comments + "人评价</p> "), t += " ", a.isnew ? t += ' <div class="flag flag-new">新品</div> ' : a.post_freenum ? (t += ' <div class="flag flag-postfree">', t += 1 === a.post_freenum ? "免邮费" : "" + a.post_freenum + "件包邮", t += "</div> ") : a.hasgift ? t += ' <div class="flag flag-gift">有赠品</div> ' : a.discount && (t += ' <div class="flag flag-saleoff"> 享' + a.discount + " </div> "), t += " ", a.commentcontent && a.commentuser && (t += ' <div class="review-wrapper"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index="' + s + '" data-stat-text="' + a.name + '" target="_blank"> <span class="review">' + a.commentcontent + '</span> <span class="author"> 来自于 ' + a.commentuser + ' 的评价 <span class="date"></span> </span> </a> </div> '), t += " </li> "), t += " ", 7 === s && (t += ' <li class="brick-item brick-item-s" data-gid="' + a.goodsid + '"> <div class="figure figure-img"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index="' + s + '" data-stat-text="' + a.name + '" target="_blank"> <img src="' + a.image + '?width=80&height=80" width="80" height="80" alt="' + a.name + '" /> </a> </div> <h3 class="title"> <a href="' + e.itemSite + "/" + a.commodityid + '.html" data-log_code="' + a.logcode + '" data-stat-method="' + e.v + "_" + a.algorithm + '" data-stat-index="' + s + '" data-stat-text="' + a.name + '" target="_blank">' + a.name + '</a></h3> <p class="price"><span class="num">' + a.price + '</span>元</p> </li> <li class="brick-item brick-item-s"> <div class="figure figure-more"><a href="' + e.morelink + '" target="_blank"><i class="iconfont">&#xe615;</i></a></div> <a class="more" href="' + e.morelink + '" target="_blank">浏览更多<small>热门</small></a> </li> ');
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += " ", a.goods_id && (t += ' <li class="brick-item brick-item-s" data-gid="' + ("0" !== a.goods_id ? a.goods_id : a.commodity_id) + '"> <div class="figure figure-img"> <a href="' + a.url + '" class="exposure" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"> <img src="' + a.image + '" width="80" height="80" alt="' + a.title + '" /> </a> </div> <h3 class="title"><a href="' + a.url + '" class="exposure" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + a.sort + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank">' + a.title + '</a></h3> <p class="price"><span class="num">' + a.sale_price + "</span>元</p> </li> ");
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += " ", a.goods_id && (t += ' <li class="review-item', 0 === s && (t += " review-item-first"), t += '" data-gid="' + a.goods_id + '"> <div class="figure figure-img"> <a class="exposure" href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank"> <img src="' + a.image + '" width="296" height="220" alt="' + a.title + '" /> </a> </div> ', a.comment && a.comment.content && (t += ' <p class="review"><a href="' + (MI.GLOBAL_CONFIG.orderSite + "/comment/commentDetail/comment_id/" + a.comment.comment_id) + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank">' + a.comment.content + '</a></p> <p class="author"> 来自于 ' + a.comment.user_name + ' 的评价 <span class="date" data-date="' + a.comment.add_time + '"></span> </p> <div class="info"> <h3 class="title"><a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" target="_blank">' + a.title + '</a></h3> <span class="sep">|</span> <p class="price"><span class="num">' + a.sale_price + "</span>元</p> </div> "), t += " </li> ");
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += '<li> <h4 class="name"> <a href="' + a.url + '" class="exposure" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" tabindex="-1" target="_blank">' + a.title + '</a></h4> <p class="desc"><a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" tabindex="-1" target="_blank">' + a.desc + '</a></p> <p class="price"><a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" tabindex="-1" target="_blank">' + a.sale_price + '</a></p> <div class="figure figure-img"> <a href="' + a.url + '" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" tabindex="-1" target="_blank"> <img src="' + a.image + '" width="160" height="140" alt="' + a.title + '" /> </a> </div></li>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<li class="more"> <p class="desc">' + e.desc + '</p> <a class="btn btn-small btn-line-' + e.style + '" href="' + e.url + '" tabindex="-1" target="_blank">前往' + e.text + '</a> <img class="thumb" src="' + e.image + '" width="160" height="140" alt="' + e.text + '" /></li>';
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			i = e;
		if(i)
			for(var a, s = -1, n = i.length - 1; n > s;) a = i[s += 1], t += '<li class="video-item', 0 === s && (t += " video-item-first"), t += '"> <div class="figure figure-img"> <a class="J_videoTrigger exposure" href="javascript: void(0);" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" data-video="' + (a.mivideo.hd_url || a.mivideo.sd_url) + '" data-video-poster="' + a.mivideo.image_url + '" data-video-title="' + a.title + '" title="点击播放视频" > <img src="' + a.image + '" width="296" height="180" alt="' + a.title + '" /> <span class="play"><i class="iconfont">&#xe601;</i></span> </a> </div> <h3 class="title"> <a class="J_videoTrigger" href="javascript: void(0);" data-stat-aid="AA' + a.adv_id + '" data-stat-pid="2_' + a.area_id + "_" + (s + 1) + "_" + a.space_id + '" data-log_code="' + a.log_code + '" data-video="' + (a.mivideo.hd_url || a.mivideo.sd_url) + '" data-video-poster="' + a.mivideo.image_url + '" data-video-title="' + a.title + '" title="点击播放视频" >' + a.title + '</a> </h3> <p class="desc">' + a.desc + "</p></li>";
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<a href="' + e.url + '" target="_blank" data-log_code="' + e.log_code + '"> <img class="hide" data-original="' + (e.image_hd ? e.image_hd : e.image) + '" alt="' + e.title + '" width="1226"></a>';

		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div id="J_logoDoodle" class="doodle air-doodle clearfix"> <a class="link-block" href="' + e.adData.url + '" data-stat-aid="' + e.adData.channel_alias + e.adData.adv_id + '" data-stat-pid="' + e.adData.channel_group_id + "_" + e.adData.area_id + "_1_" + e.adData.space_id + '" target="_blank"> <span class="doodle-img" style="background: url(' + e.adData.image + ') no-repeat 50% 50%"></span> <span class="doodle-state">' + e.adData.desc + '</span> <span class="doodle-info"> <span class="city">' + e.ipAddr[1] + '市</span> <span class="pm">PM2.5 : ' + e.aqi.pm25 + "</span> </span> </a></div>";
		return t
	}
}]);