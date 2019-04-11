(function(g, s, pa) {
	function Ga(a) {
		return a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ":" + a.getMilliseconds()
	}

	function aa(a) {
		return(a + "").replace(/^\s+/, "").replace(/\s+$/, "")
	}

	function U(a) {
		var b = "",
			c = !1;
		if(0 === location.search.length) {
			return b
		}
		if(0 == location.search.indexOf("?") && 1 < location.search.indexOf("=")) {
			for(arrSource = location.search.substring(1, location.search.length).split("&"), i = 0; i < arrSource.length && !c;) {
				0 < arrSource[i].indexOf("=") && arrSource[i].split("=")[0].toLowerCase() == a.toLowerCase() && (b = arrSource[i].split("=")[1], c = !0), i++
			}
		}
		return b
	}

	function E(a, b, c) {
		if(!b) {
			return a
		}
		c = c || /\{([\w-]+)\}/g;
		a = ba(a);
		return a.replace(c, function(a, e) {
			if(b[e] !== pa) {
				var m;
				m = b[e] instanceof Function ? b[e].call(b) : ba(b[e]);
				return c.test(m) ? E(m, b, c) : m
			}
			return g.__debug__ ? e : ""
		})
	}

	function ba(a) {
		var b = {
				"{quot}": "'"
			},
			c;
		for(c in b) {
			b.hasOwnProperty(c) && (a = (a + "").replace(c, b[c]))
		}
		return a
	}

	function qa(a) {
		try {
			return Array.prototype.slice.call(a, 0)
		} catch(b) {
			for(var c = [], d = 0, e = a.length; d < e; d++) {
				c.push(a[d])
			}
			return c
		}
	}

	function f(a, b) {
		a = a || "";
		b = b || s;
		if(0 === a.indexOf("#")) {
			return b.getElementById(a.substring(1))
		}
		var c = [];
		if(/^[a-zA-Z]{1,}$/.test(a)) {
			c = qa(b.getElementsByTagName(a))
		} else {
			if(0 === a.indexOf(".")) {
				if(b.querySelectorAll) {
					c = qa(b.querySelectorAll(a))
				} else {
					for(var d = b.getElementsByTagName("*"), e = a.substring(1), m = 0, l = d.length; m < l; m++) {
						y(d[m], e) && c.push(d[m])
					}
				}
			}
		}
		return c
	}

	function u(a, b) {
		a && 1 === a.nodeType && ("none" === a.style.display ? a.style.display = b ? "block" : a._oldDisplay || "" : b && (a.style.display = "block"))
	}

	function k(a) {
		a && 1 === a.nodeType && "none" !== a.style.display && (a._oldDisplay = a.style.display || "", a.style.display = "none")
	}

	function p(a, b) {
		if("[object Array]" === Object.prototype.toString.call(a)) {
			for(var c = 0, d = a.length; c < d; c++) {
				p(a[c], b)
			}
		} else {
			y(a, b) || (a.className = "" === a.className ? b : a.className + (" " + b))
		}
	}

	function y(a, b) {
		if(a.className) {
			var c = a.className.split(/\s+/);
			c.unshift("000");
			c.push("000");
			return 2 < c.length && -1 < c.join(",").indexOf("," + b + ",")
		}
		return !1
	}

	function r(a, b) {
		if("[object Array]" === Object.prototype.toString.call(a)) {
			for(var c = 0, d = a.length; c < d; c++) {
				r(a[c], b)
			}
		} else {
			if(y(a, b)) {
				for(var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
					if(b === c[d]) {
						c.splice(d, 1);
						break
					}
				}
				a.className = c.join(" ")
			}
		}
	}

	function q(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
	}

	function Ha(a) {
		return "string" === typeof a ? g.JSON && g.JSON.parse ? g.JSON.parse(a) : eval("(" + a + ")") : a
	}

	function K(a) {
		var b = {};
		a = (a + "").replace("&&&START&&&", "");
		try {
			b = Ha(a)
		} catch(c) {}
		return b
	}

	function V(a) {
		if(g.JSON && g.JSON.stringify) {
			return g.JSON.stringify(a)
		}
		var b = [];
		if("object" == typeof a) {
			if(a instanceof Array) {
				var c = [];
				b.push("[");
				for(var d = 0; d < a.length; d++) {
					c.push(V(a[d]))
				}
				b.push(c.join());
				b.push("]")
			} else {
				if(null != a) {
					b.push("{");
					c = [];
					for(d in a) {
						c.push('"' + d + '":' + V(a[d]))
					}
					b.push(c.join());
					b.push("}")
				}
			}
			return b.join("")
		}
		return "number" !== typeof a ? '"' + (a || "") + '"' : a
	}

	function ra(a) {
		var b = [],
			c = "",
			d;
		for(d in a) {
			c = typeof a[d], "object" !== c || "number" == c ? b.push(d + "=" + a[d]) : b.push(d + "=" + encodeURIComponent(ra(a[d])))
		}
		return b.join("&")
	}

	function sa(a, b) {
		var c = s.createElement("input");
		if(!("placeholder" in c || c._initedplace)) {
			c._initedplace = !0;
			var d = a.getAttribute("placeholder"),
				e = a.id || a.name,
				m = a.className;
			c.value = d;
			c.id = e + "_pla";
			c.className = m;
			p(a, "hideimportant");
			a.setAttribute("pla_id", e + "_pla");
			c.setAttribute("for_id", e);
			c.style.color = "#999";
			a.parentNode.insertBefore(c, a);
			q(c, "focus", function() {
				p(c, "hideimportant");
				r(a, "hideimportant");
				a.focus()
			});
			q(a, "blur", function() {
				"" == aa(a.value) && (p(a, "hideimportant"), r(c, "hideimportant"))
			});
			b && (a.value = "", p(a, "hideimportant"), r(c, "hideimportant"));
			try {
				a.focus(), a.blur()
			} catch(l) {}
		}
	}

	function ta(a) {
		this.key = a || "account.xiaomi.com"
	}

	function Ia(a) {
		if("object" !== typeof a) {
			return a
		}
		var b = [],
			c;
		for(c in a) {
			b.push(c + "=" + encodeURIComponent(a[c]))
		}
		return b.join("&")
	}

	function ua(a) {
		this.id = Ja++;
		for(var b in a) {
			a.hasOwnProperty(b) && (this[b] = a[b])
		}
		this.xhr = new(g.XMLHttpRequest || g.ActiveXObject)("Microsoft.XMLHTTP");
		this.request()
	}

	function ca(a) {
		this.opt = O(a || {}, Ka);
		this.init()
	}

	function O(a, b) {
		var c = {},
			d;
		for(d in b) {
			d in c || d in a || (a[d] = b[d])
		}
		return a
	}

	function La(a) {
		P.on(function(b, c) {
			a.style.height = Math.max(b.height, c.height) + "px";
			a.style.width = c.width + "px"
		});
		P.onbeforeResize(function() {
			a.style.height = "auto";
			a.style.width = "100%"
		})
	}

	function Ma(a) {
		for(var b = 0; b < v.length; b++) {
			if(a & 1 << b) {
				return v[b]
			}
		}
	}

	function va(a) {
		for(var b = 0; b < v.length; b++) {
			if(v[b] && a === v[b].key) {
				return v[b]
			}
		}
	}

	function Na(a) {
		for(var b = [], c = 0; c < v.length; c++) {
			a & 1 << c && b.push(v[c])
		}
		return b
	}

	function L(a, b, c) {
		var d = [];
		if(a && a.length) {
			Oa || (check_available_time = (new Date).getTime());
			for(var e = !0, m = 0, l; l = a[m++];) {
				l.status && l.status !== w.UNINIT ? l.status === w.CHECKING || l.status === w.UNKNOWN ? e = !1 : l.status === w.ALLOW && d.push(l) : (wa(l, c), e = !1)
			}
			e ? b(d) : setTimeout(function() {
				L(a, b, c)
			}, 200)
		}
	}

	function wa(a, b) {
		a.status != w.ALLOW && a.status !== w.DENY && (a.status !== w.UNKNOWN && (a.status = w.CHECKING), Ajax({
			url: E(a.url, {
				user: h.user
			}),
			method: "GET",
			data: {
				_json: "true",
				user: h.user
			},
			success: function(c) {
				c = K(c);
				a.paramJson = c;
				0 === c.code ? a.status = w.ALLOW : 2 === c.code ? !0 === b ? da(c) : a.status = w.DENY : a.status = w.DENY
			},
			error: function() {
				a.status === w.CHECKING ? (a.status = w.UNKNOWN, wa(a)) : a.status = w.DENY
			},
			timeout: function() {
				a.status = w.DENY
			}
		}))
	}

	function Q(a) {
		a = a || v;
		for(var b = 0; b < a.length; b++) {
			a[b] && (a[b].status = w.UNINIT)
		}
	}

	function ea(a) {
		var b = a.tpl || [];
		h && h.trustDevice && a.trustSelect && a.tpl.splice(1, 0, "trust_device");
		for(var c = "", d = 0; d < b.length; d++) {
			c = "function" === typeof b[d] ? c + b[d]() : c + A.get(b[d])
		}
		a = O(a.tpl_data, M);
		return E(c, a)
	}

	function fa(a) {
		var b = a.flag;
		a.option ? ga = a.option : a.backupCode && (ga = a.backupCode + b);
		if(b) {
			var c = Ma(b);
			c ? L([c], function(a) {
				c.status === w.ALLOW ? ha(c) : c.status === w.DENY && fa(c.paramJson || {})
			}, !0) : C({
				code: "1004",
				desc: "\u6ca1\u6709\u914d\u7f6e\u6587\u4ef6"
			})
		} else {
			a.backupUrl && 0 === a.backupUrl.indexOf("/pass/retrieve/prompt") && ha(), C({
				code: "1003",
				desc: "\u627e\u4e0d\u5230\u53ef\u7528\u7684\u9a8c\u8bc1\u65b9\u5f0f"
			})
		}
	}

	function Pa() {
		H = f("#verify-mod-container");
		n = f("#verify-mod-list");
		W = f("#verify-mod-captcha");
		SendTicketTip = f("#verify-mod-sendTicketTip");
		n.__con = f(".verify-mod-list-con")[0];
		n.__empty = f(".verify-mod-list-empty")[0];
		var a = f(".verify-mod-list-content", n)[0];
		"mobile" === h.deviceType && "true" === U("_provision") && "scorpio" === U("_device_name") && (p(f("body"), "viewblack"), z.add("intoA4Mode"));
		var b, c;
		for(c in v) {
			b = v[c], b.key && !b.forbid && b.listname && (B[b.key] = Qa(b.key, b.listname, b.listText, a))
		}
		a = f(".btn-select-mode", n)[0];
		n.__select = a;
		b = f(".btn-select-cancel", n)[0];
		f(".btn-select-manual", n)[0].href = E(M.ManualHref, O({
			user: encodeURIComponent(h.user)
		}, h));
		a && q(a, "click", function() {
			var a = "",
				b;
			for(b in B) {
				B[b] && y(B[b], "now") && (a = b)
			}
			a && (a = va(a)) && R(a, n.__from)
		});
		b && q(b, "click", function() {
			var a = va(n.__from);
			a && R(a, n.__from)
		})
	}

	function ha(a) {
		z.add("into verification main");
		if(!I) {
			var b = O({
					submit: "\u4e0b\u4e00\u6b65"
				}, M),
				b = E(A.get("verify_main"), b);
			I = new ca({
				title: M.modal_title,
				cls: "mod_acc_tip",
				bodyCls: "mod_tip_bd",
				html: b,
				deviceType: h.deviceType,
				renderTo: h.renderTo,
				afterRender: function() {
					Pa()
				},
				beforeClose: function() {
					X = !0;
					C({
						code: "3001",
						desc: "\u5f39\u7a97\u5173\u95ed"
					})
				}
			})
		}
		z.add("modal inited");
		h.beforeModal && h.beforeModal();
		I.show();
		X = !1;
		Y();
		a ? ((x = a) || C({
			code: "2001",
			desc: "\u6ca1\u6709\u914d\u7f6e\u6587\u4ef6"
		}), R(x)) : ia("none")
	}

	function R(a, b) {
		var c = a.key || (a.key = Ra()),
			d = S[c];
		Sa.push(c);
		x !== a && (x = a);
		c && !a.sourceKey && F({
			type: c,
			step: 0
		});
		d || (d = S[c] = Ta(a));
		u(H);
		k(n);
		k(SendTicketTip);
		var c = {},
			e;
		for(e in S) {
			e in c || !S[e] || k(S[e])
		}
		e = f(".verify-masked", d)[0];
		c = (c = a.paramJson && (a.paramJson.maskedPhone || a.paramJson.maskedEmail)) || a.ticketPhone || "";
		e && (c ? e.innerHTML = c : k(e.parentNode));
		a.els.trustCheck && (Z ? p(a.els.trustCheck, "now") : r(a.els.trustCheck, "now"));
		if("Question" === a.key) {
			e = a.paramJson && a.paramJson.questions;
			for(var c = f(".verify-question-item", d), m, l, N, g, xa = 0; m = c[xa++];) {
				l = f(".verify-question-item-display", m)[0], N = f(".verify-question-item-hidden", m)[0], m = f(".verify-question-item-input", m)[0], g = e[xa - 1], l.innerHTML = g.q, N.value = g.q, N.setAttribute("name", "q_" + g.p), m.setAttribute("name", "a_" + g.p)
			}
		}
		a.forceInit && a.sendTicket && (a.sendTicket.holdStatusTc && clearTimeout(a.sendTicket.holdStatusTc), a.sendTicket.sending = !1, a.sendTicket.hold = 0, G(a.els.sendBtn, a.sendTicket.send), a.els.unavailable && k(a.els.unavailable));
		a.sendTicket && (a.sendTicket.shownTips = !1);
		a.onModeShown && a.onModeShown(d, a, I);
		Ua(d)
	}

	function Ta(a) {
		var b = s.createElement("div");
		b.id = "verify-mod-" + a.key;
		var c = ea(a);
		b.innerHTML = c;
		H.appendChild(b);
		var d = x.els = {},
			c = f("input", b);
		d.inputs = [];
		for(var e = 0, m, l, N; m = c[e++];) {
			l = m.getAttribute("name"), N = "hidden" == m.getAttribute("type"), l && !N && d.inputs.push({
				name: l,
				el: m
			})
		}
		d.sendBtn = f(".verify-sendbtn", b)[0];
		d.submitBtn = f(".btn-submit", b)[0];
		d.cancelBtn = f(".btn-cancel", b)[0];
		d.unavailable = f(".verify-unavailable", b)[0];
		d.intoList = f(".verify-into-list", b)[0];
		d.errorCon = f(".verify-error-con", b)[0];
		d.leftTimes = f(".send_left_times", b)[0];
		d.captchaBox = f(".captcha-box", b)[0];
		d.trustCheck = f(".trust-mydevice", b)[0];
		for(e = 0; e < d.inputs.length; e++) {
			ja(d.inputs[e].el)
		}
		q(d.submitBtn, "click", function() {
			ya()
		});
		q(d.intoList, "click", function() {
			ia(a.sourceKey || a.key)
		});
		d.sendBtn && q(d.sendBtn, "click", function() {
			$()
		});
		d.trustCheck && q(d.trustCheck, "click", function() {
			var a = d.trustCheck;
			a && (y(a, "now") ? (r(a, "now"), Z = !1) : (p(a, "now"), Z = !0))
		});
		a.afterRender && a.afterRender(b, a, I);
		return b
	}

	function ja(a, b) {
		sa(a, !0);
		q(a, "keyup", function(a) {
			a = parseInt(a.charCode) || a.keyCode;
			13 === a ? ya() : 8 === a && t()
		});
		q(a, "input", function() {
			t()
		});
		q(a, "focus", function() {
			t()
		});
		q(a, "propertychange", function() {
			t()
		})
	}

	function ya() {
		var a = x;
		if(!y(a.els.submitBtn, "disabled")) {
			var b = a.validateForm ? a.validateForm() : Va(),
				c = {
					_json: "true",
					user: h.user
				};
			if(b && b.length) {
				a.beforeSubmitData && (b = a.beforeSubmitData(b));
				if("Question" === a.key) {
					var d = a.paramJson && a.paramJson.questions,
						e = [],
						m, l, f = a.els.inputs.length;
					if(d) {
						for(var g = 0; g < d.length; g++) {
							m = d[g], l = b[g], m && "p" in m && "q" in m && l && e.push({
								p: m.p,
								q: m.q,
								a: l["a_" + m.p]
							})
						}
					}
					if(e.length === f) {
						c.questions = V(e)
					} else {
						return
					}
				} else {
					if("InstalledApp" === a.key || "ContactName" === a.key) {
						c.items = b.join(",")
					} else {
						for(d = 0; d < b.length; d++) {
							c = O(c, b[d])
						}
					}
				}
				h && h.trustDevice && a.trustSelect && (c.trust = Z);
				"relatedPhone" === a.key && (c.phoneKey = a.paramJson.maskedPhoneKey);
				b = (b = a.nextStep && a.nextStep.url) || a.url;
				Ajax({
					url: b,
					data: c,
					method: "POST",
					success: function(b) {
						b = K(b);
						0 === b.code ? a.nextStep ? (F({
							type: a.key,
							step: "one"
						}), a.nextStep.submit(b)) : (da(b), a.sourceKey ? F({
							type: a.sourceKey,
							step: "success"
						}) : F({
							type: a.key,
							step: "success"
						})) : 70014 === b.code || 70016 === b.code || 100006 === b.code || 100005 === b.code ? (b = a.data.ResError, t(a.els.errorCon, b, a.els.inputs)) : 87001 === b.code ? (za(b, a), t(a.els.errorCon, T.ResError, a.els.inputs[1].el)) : 10023 === b.code ? (b = a.data.ResQuotaError || M.ResQuotaError, t(a.els.errorCon, b, a.els.inputs)) : 10017 === b.code ? t(a.els.errorCon, a.data.CantSafePhoneError || "", a.els.inputs) : 66108 === b.code ? t(a.els.errorCon, a.data.DuplicateError, a.els.inputs) : (z.add(a.url, a.data, b), C({
							code: "2002",
							desc: "\u672a\u77e5\u9519\u8bef"
						}))
					},
					error: function(b) {
						"page" === h.type && (403 === b.status ? t(a.els.errorCon, a.data.ResQuotaError || M.ResQuotaError, a.els.inputs) : alert("\u5f53\u524d\u9a8c\u8bc1\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\u6216\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\u3002"));
						C({
							code: "2003",
							desc: "\u63d0\u4ea4\u9519\u8bef"
						})
					},
					timeout: function() {
						alert("\u9a8c\u8bc1\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5");
						C({
							code: "2004",
							desc: "\u8d85\u65f6\u9519\u8bef"
						})
					}
				})
			}
		}
	}

	function Va() {
		var a = x,
			b = a.els.inputs,
			c = 0,
			d = [],
			e, m, l, g, h = a.els.errorCon;
		if(a.els.chooseArea !== pa) {
			m = f(".now", a.els.chooseArea);
			l = [];
			for(var k = 0; k < m.length; k++) {
				l.push(m[k].getAttribute("itemId"))
			}
			if(0 !== l.length) {
				return l
			}
		}
		for(k = 0; k < b.length && (c = 0, e = b[k].el, m = "Question" !== a.key ? b[k].name : e.getAttribute("name"), l = a.notrim ? e.value : aa(e.value), g = e.getAttribute("rule"), "" === l ? (t(h, a.data.EmptyError, e), c++) : "idNo" !== m || /(^[0-9]{14}[\d|X|x]$)|(^[0-9]{17}[\d|X|x]$)/.test(l) ? g && "required" !== g && !RegExp(g).test(l) ? (t(h, a.data.RuleError, e), c++) : (e = {}, e[m] = l, d.push(e)) : (t(h, a.data.idNoRule, e), c++), !c); k++) {}
		return c ? !1 : d
	}

	function t(a, b, c) {
		a || (a = x.els.errorCon);
		b ? (b = ba(b), a.innerHTML = b, u(a.parentNode, !0)) : (a.innerHTML = "", k(a.parentNode));
		if(c && c.nodeName && 1 === c.nodeType) {
			b ? p(c.parentNode, "error_bg") : r(c.parentNode, "error_bg")
		} else {
			if(c && c.length) {
				for(a = 0; a < c.length; a++) {
					c[a].el && p(c[a].el.parentNode, "error_bg")
				}
			} else {
				for(c = x.els.inputs, a = 0; a < c.length; a++) {
					c[a].el && r(c[a].el.parentNode, "error_bg")
				}
			}
		}
	}

	function za(a, b) {
		b.els.captchaImage || Wa(a, b);
		b.els.captchaImage.src = (a.captchaUrl || "/pass/getCode?icodeType=login") + "&" + Math.random()
	}

	function Wa(a, b) {
		var c = E(A.get("captchaCode"), T);
		b.els.captchaBox.innerHTML = c;
		b.els.captchaImage = f(".captcha-image", b.els.captchaBox)[0];
		c = f(".icode-input", b.els.captchaBox)[0];
		b.els.inputs.push({
			name: "icode",
			el: c
		});
		ja(c);
		q(b.els.captchaImage, "click", function() {
			clearTimeout(b.captchaRefreshTc);
			b.captchaRefreshTc = setTimeout(function() {
				za(a, b)
			}, 200)
		})
	}

	function ia(a) {
		"true" === U("_provision") && "scorpio" === U("_device_name") && k(f(".fixbottom", n)[0]);
		if("none" === a) {
			F({
				step: "manual"
			}), k(n.__con), u(n.__empty), k(n.__select.parentNode)
		} else {
			k(H);
			u(n);
			g.start_loading && g.start_loading();
			"tips" === a && (a = Aa.sourceKey);
			F({
				type: a,
				step: "skip"
			});
			n.__from = a;
			var b, c;
			for(c in B) {
				b = B[c], r(b, "now"), k(b)
			}
			var d = [];
			b = Na(ga);
			var e = !1;
			0 === b.length ? (Y(), k(n.__con), u(n.__empty), k(n.__select), r(n.__select.parentNode, "page332_btns_two")) : L(b, function(b) {
				for(var c = 0, g; g = b[c++];) {
					if(g.key in B && a !== g.key) {
						var h = f(".verify-list-masked", B[g.key])[0];
						h && g.paramJson && (h.innerHTML = g.paramJson.maskedPhone);
						u(B[g.key], !0);
						e = !0;
						d.push(B[g.key])
					}
				}
				1 === d.length && p(d[0], "now");
				Y();
				e ? (u(n.__con), k(n.__empty), u(n.__select), p(n.__select.parentNode, "page332_btns_two")) : (k(n.__con), u(n.__empty), k(n.__select), r(n.__select.parentNode, "page332_btns_two"))
			}, !1)
		}
	}

	function Qa(a, b, c, d) {
		var e = s.createElement("li");
		e.id = "verify-mode-list-" + a;
		e.innerHTML = E(A.get("modeList"), {
			modeName: b,
			modeText: c
		});
		d.appendChild(e);
		q(e, "click", function() {
			for(var a in B) {
				B[a] && r(B[a], "now")
			}
			p(e, "now")
		});
		return e
	}

	function Ua(a) {
		var b = x;
		if(b.sendTicket) {
			var c = "autoSend" in h ? h.autoSend : b.sendTicket.autoSend;
			b.sendTicket.initQuota || (b.sendTicket.initQuota = 1, Xa(b.sendTicket, function(a) {
				b.sendTicket.leftTimes = a
			}));
			c && $()
		}
		u(a, !0);
		c = b.els.inputs;
		a = f("input", a);
		for(var d = 0; d < c.length; d++) {
			var e = c[d].el;
			if(e && (t(), e.value = "", !("placeholder" in s.createElement("input")))) {
				var m = e.getAttribute("pla_id"),
					l = e.getAttribute("placeholder");
				p(e, "hideimportant");
				for(e = 0; e < a.length; e++) {
					a[e].id === m && (a[e].value = l, r(a[e], "hideimportant"))
				}
			}
		}
	}

	function Xa(a, b) {
		Ajax({
			url: "/pass/sms/userQuota",
			method: "POST",
			data: {
				contentType: a.contentType,
				addressType: a.type,
				user: h.user
			},
			success: function(a) {
				a = K(a);
				var d = 0;
				0 === a.result && (d = parseInt(a.info, 10) || 0);
				b && b(d)
			},
			error: function() {
				b && b(10)
			}
		})
	}

	function Ya(a, b) {
		var c = Aa;
		if(!SendTicketTip.inited) {
			SendTicketTip.inited = !0;
			var d = s.createElement("div");
			d.id = "verify-mod-" + c.key;
			var e = ea(c);
			d.innerHTML = e;
			SendTicketTip.appendChild(d);
			e = SendTicketTip.els = {};
			e.sendBtn = f(".verify-sendbtn", d)[0];
			e.intoList = f(".verify-into-list", d)[0];
			e.tips = f(".send-ticket-tip", d)[0];
			e.tipHeader = f(".send-ticket-header")[0];
			e.prompt = f(".send-ticket-prompt", d)[0];
			e.phone = f(".verify-masked", d)[0];
			q(e.intoList, "click", function() {
				k(SendTicketTip);
				u(H);
				ia("tips")
			});
			e.sendBtn && q(e.sendBtn, "click", function() {
				k(SendTicketTip);
				u(H);
				$()
			})
		}
		k(H);
		u(SendTicketTip);
		c.sourceKey = a.sourceKey || a.key;
		c = a.sendTicket;
		e = SendTicketTip.els;
		e.sendBtn.innerHTML = c.send;
		e.tips.innerHTML = c.tips;
		e.tipHeader.innerHTML = c.tipHeader;
		e.prompt.innerHTML = c.prompt ? c.prompt : "";
		c = (c = a.paramJson && (a.paramJson.maskedPhone || a.paramJson.maskedEmail)) || a.ticketPhone || "";
		e.phone.innerHTML = c
	}

	function $(a) {
		var b = x,
			c = b.sendTicket,
			d = {
				user: h.user,
				retry: c.times
			};
		"relatedPhone" === b.key && (d.phoneKey = b.paramJson.maskedPhoneKey);
		a && (d.icode = a);
		if(c.params) {
			for(var e in c.params) {
				c.params.hasOwnProperty(e) && (d[e] = c.params[e])
			}
		}
		1 > c.leftTimes ? (G(b.els.sendBtn, c.resend, !0), ka(c)) : c.shownTips || b.shownVerifyModal ? c && !c.sending && 1 > c.hold && (t(), c.sending = !0, G(b.els.sendBtn, c.sending_txt, !0), Ajax({
			url: c.url,
			data: d,
			method: "POST",
			success: function(a) {
				Ba.close();
				var d = K(a);
				if("function" !== typeof c.beforeSuccess || !1 !== c.beforeSuccess.call(c, d)) {
					var e = function() {
						c.hold--;
						if(1 <= c.hold) {
							var d = E(a, {
								time: "(" + c.hold + ")"
							});
							G(b.els.sendBtn, d, !0);
							c.holdStatusTc = setTimeout(function() {
								e()
							}, 980)
						} else {
							G(b.els.sendBtn, c.resend, !c.leftTimes)
						}
					};
					if(0 == d.code) {
						c.captchaNeed = !1, c.leftTimes = Math.max(c.leftTimes - 1, 0), ka(c), c.sending = !1, a = c.resend_hold, c.hold = d.data && d.data.wt ? d.data.wt : 60 * (c.times += 1), e()
					} else {
						if(87001 === d.code) {
							c.sending = !1;
							var f = "";
							c.captchaNeed && (f = T.ResError);
							c.captchaNeed = !0;
							c.captchaurl || (c.captchaurl = d.icodeUrl);
							Ba.getiCode(function(a) {
								!1 === a ? c.captchaNeed = !1 : $(a)
							}, c.captchaurl, f);
							G(b.els.sendBtn, c.resend, !1)
						} else {
							70022 === d.code ? (ka(c.leftTimes = 0), G(b.els.sendBtn, c.resend, !0)) : 20024 === d.code ? (c.sending = !1, t(b.els.errorCon, b.data.FrequentError, b.els.inputs), a = c.resend_hold, c.hold = d.data && d.data.wt ? d.data.wt : 60 * (c.times += 1), e()) : (c.sending = !1, G(b.els.sendBtn, c.resend, !1))
						}
					}
					"function" === typeof c.afterSuccess && c.afterSuccess.call(c, d)
				}
			},
			error: function() {
				c.sending = !1;
				G(b.els.sendBtn, c.resend, !1)
			}
		})) : (Ya(b, a), c.shownTips = !0)
	}

	function G(a, b, c) {
		b && a && (a.innerHTML = b);
		c ? p(a, "disabled") : r(a, "disabled")
	}

	function ka() {
		var a = x.sendTicket.leftTimes || 0;
		if(3 > a) {
			var b = x.els.leftTimes,
				c = 0 < a ? x.sendTicket.leftTimesText : x.sendTicket.nochance;
			b && (b.innerHTML = E(c, {
				left: a
			}), u(b, !0))
		}
		0 === a && G(x.els.sendBtn, x.sendTicket.resend, !0);
		0 < x.sendTicket.times && u(x.els.unavailable)
	}

	function Ca(a) {
		h = a;
		h.retrieveType || (h.retrieveType = "bind");
		g.start_loading && g.start_loading();
		F({
			step: 0
		});
		a.url && a.user ? (Q(), Za(function(a) {
			da(a)
		})) : a.enterJson && (Q(), fa(a.enterJson))
	}

	function Za(a) {
		Ajax({
			url: h.url,
			data: {
				user: h.user,
				_json: "true"
			},
			success: function(b) {
				b = K(b);
				2 === b.code ? a(b) : 0 === b.code ? (h.beforeModal && h.beforeModal(), Da()) : C({
					code: "1001",
					desc: "\u83b7\u53d6\u4e1a\u52a1\u94fe\u63a5code\u51fa\u9519"
				})
			},
			error: function(a) {
				C({
					code: "1001",
					desc: "\u83b7\u53d6\u4e1a\u52a1\u94fe\u63a5\u51fa\u9519",
					status: a.status
				})
			}
		})
	}

	function da(a, b) {
		var c = a.url || a.location;
		"page" === h.type && a.notificationUrl ? location.href = a.nofificationUrl : Ajax({
			url: c,
			data: {
				_json: "true"
			},
			success: function(b) {
				b = K(b);
				0 === b.code ? $a(b) : 2 === b.code ? fa(b) : (a.backupUrl && 0 === a.backupUrl.indexOf("/pass/retrieve/prompt") && ha(), C({
					code: "10021",
					desc: "\u8fdb\u5165\u8eab\u4efd\u8bc6\u522b\u51fa\u9519"
				}))
			},
			error: function() {
				C({
					code: "10022",
					desc: "\u8fdb\u5165\u8eab\u4efd\u8bc6\u522b\u51fa\u9519"
				})
			}
		})
	}

	function $a(a) {
		var b = a.notificationUrl || a.location;
		"page" === h.type ? F({
			step: "success"
		}, function() {
			location.href = b
		}) : Ajax({
			url: b,
			success: function(a) {
				Da()
			},
			error: function() {
				C({
					code: "4002",
					desc: "sts\u8bbf\u95ee\u51fa\u9519"
				})
			}
		})
	}

	function Da(a) {
		z.add("succ", a);
		h.success && h.success(a);
		F({
			step: "success"
		});
		Ea = la.SUCCESS;
		"page" !== h.type && I && !X && I.close()
	}

	function C(a) {
		z.add("err", a);
		h.fail && h.fail(a);
		Y();
		!Ea === la.FAIL && a && 3001 === a.code ? F({
			step: "close"
		}) : F({
			step: "end"
		});
		"page" !== h.type && I && !X && I.close()
	}

	function Y() {
		g.stop_loading && g.stop_loading()
	}
	var ma = g.MiLogin || (g.MiLogin = {});
	(function() {
		var a = location.hostname;
		return -1 < a.indexOf("onebox") ? "onebox" : -1 < a.indexOf("preview") ? "preview" : "release"
	})();
	var z = function() {
			var a = [];
			return {
				add: function(b, c, d) {
					a.push({
						title: b,
						message: c,
						more: d,
						time: Ga(new Date)
					}); - 1 !== (location.search + "").indexOf("debug") && "console" in g && "function" === typeof g.console.log && console.log(arguments)
				},
				get: function() {
					return a
				}
			}
		}(),
		Fa = function() {
			var a = navigator.userAgent,
				b = {};
			/\s+chrome\/([\d\.]*)/i.test(a) ? (b.name = "Chrome", b.version = parseInt(RegExp.$1)) : /msie\s+(\d+\.\d+)/i.test(a) ? (b.name = "IE", b.version = parseFloat(RegExp.$1)) : /\s+firefox\/([\d\.]*)/i.test(a) ? (b.name = "Firefox", b.version = parseInt(RegExp.$1)) : /applewebKit\/([\d\.]*)/i.test(a) ? (b.name = "Webkit", b.version = parseInt(RegExp.$1), /miuibrowser\/([\d\.]*)/i.test(a) && (b.name = "MIUI Browser", b.version = parseInt(RegExp.$1)), /version\/([\d\.]*)\s+Safari/i.test(a) && (b.name = "Safari", b.version = parseInt(RegExp.$1))) : /trident\/([\d\.]*)/i.test(a) ? (a = a.match(/rv:([\d\.]*)/)) && 2 <= a.length ? (b.name = "IE", b.version = parseFloat(a[1])) : (b.name = "Trident", b.version = RegExp.$1) : (b.name = a, b.version = 0);
			return b
		}();
	(function() {
		var a = s.createElement("a");
		a.target = "_blank";
		s.body.appendChild(a);
		var b = 0,
			c = null;
		return function(d, e) {
			if("_self" === e) {
				location.href = d
			} else {
				a.href = d;
				var f = (new Date).getTime();
				if(!(c === d && 1000 > f - b)) {
					c = d;
					b = f;
					try {
						var l = s.createEvent("MouseEvents");
						l.initMouseEvent("click", !0, !0, g);
						a.dispatchEvent(l)
					} catch(k) {
						a.click()
					}
				}
			}
		}
	})();
	try {
		var na = !!g.localStorage
	} catch(cb) {
		na = !1
	}
	ta.prototype = {
		key: "account.xiaomi.com",
		_read: na ? function() {
			var a = "";
			try {
				a = g.localStorage.getItem(this.key)
			} catch(b) {}
			a = (new Function("", "return " + a))();
			return "object" == typeof a && a ? a : {}
		} : function() {
			return {}
		},
		_save: na ? function(a) {
			try {
				g.localStorage.setItem(this.key, V(a))
			} catch(b) {
				z.add("setItem \u629b\u51fa\u5f02\u5e38", Fa.name + " " + Fa.version)
			}
		} : function() {
			return !1
		},
		_readAndGc: function(a) {
			var b = this._read(),
				c;
			for(c in b) {
				var d = b[c];
				d.expires && (new Date).getTime() - d.time >= d.expires && delete b[c]
			}
			this._save(b);
			return a ? b[a] : b
		},
		remove: function(a) {
			var b = this._readAndGc();
			delete b[a];
			this._save(b)
		},
		get: function(a) {
			a = this._readAndGc(a) || {};
			return a.value ? a.value : null
		},
		set: function(a, b, c) {
			if(!a) {
				return !1
			}
			var d = this._readAndGc(),
				e = (new Date).getTime();
			d[a] = {
				value: b,
				expires: c,
				time: e
			};
			this._save(d)
		}
	};
	g.LStore = new ta("account.xiaomi.com");
	var Ja = 0;
	ua.prototype = {
		request: function() {
			var a = this.url || "?",
				b = this.data || {},
				c = (this.method || "GET").toUpperCase(),
				d = this;
			this.xhr.onreadystatechange = function() {
				d.state = d.xhr.readyState;
				z.add("xhrReadyState", d.xhr.readyState);
				4 == d.xhr.readyState && (g.clearTimeout(d.timeouthandler), d.status = d.xhr.status, z.add("xhrStatus", d.status), 200 == d.xhr.status ? d.success && d.success(d.xhr.responseText, d.xhr) : (z.add("xhrError"), d.error && d.error(d.xhr)))
			};
			b = Ia(b);
			"GET" == c ? (a = -1 === a.indexOf("?") ? a + ("?" + b + "&_dc=" + (new Date).getTime()) : a + ("&" + b + "&_dc=" + (new Date).getTime()), b = null) : a += "?_dc=" + (new Date).getTime();
			z.add("initopen");
			this.xhr.open(c, a, !0);
			this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			this.timeouthandler = g.setTimeout(function() {
				z.add("intoTimeout");
				d.timeout()
			}, 5000);
			z.add("initsend");
			this.xhr.send(b)
		},
		timeout: function() {}
	};
	g.Ajax = function(a) {
		return new ua(a)
	};
	var P = {
			fns: [],
			beforeFns: [],
			inited: !1,
			on: function(a) {
				"function" === typeof a && this.fns.push(a);
				!this.inited && this.init();
				g.onresize && g.onresize()
			},
			off: function(a) {
				if("function" === typeof a) {
					for(var b = 0, c = this.fns.length; b < c; b++) {
						if(a === this.fns[b]) {
							return this.fns.splice(b, 1), !0
						}
					}
				}
				return !1
			},
			onbeforeResize: function(a) {
				"function" === typeof a && this.beforeFns.push(a)
			},
			beforeExec: function() {
				for(var a = 0, b; b = this.beforeFns[a++];) {
					b && b.call(g)
				}
			},
			exec: function() {
				this.beforeExec();
				var a;
				a = g.innerWidth || 0;
				var b = g.innerHeight || 0;
				a || ("CSS1Compat" == s.compatMode ? (a = s.documentElement.clientWidth, b = s.documentElement.clientHeight) : (a = s.body.clientWidth, b = s.body.clientHeight));
				a = {
					width: a,
					height: b
				};
				for(var b = s.documentElement, c = s.body, d = Math.max(b.clientHeight || 0, c.scrollHeight, b.scrollHeight || 0, c.offsetHeight, b.offsetHeight || 0), b = {
						width: Math.max(b.clientWidth || 0, c.scrollWidth, b.scrollWidth || 0, c.offsetWidth, b.offsetWidth || 0),
						height: d
					}, c = s.documentElement, d = s.body, c = {
						scleft: Math.max(c.scrollLeft || 0, d.scrollLeft),
						sctop: Math.max(c.scrollTop || 0, d.scrollTop)
					}, d = 0, e; e = this.fns[d++];) {
					e && e.call(g, a, b, c)
				}
			},
			init: function() {
				var a = null,
					b = this;
				g.onresize = function() {
					g.clearTimeout(a);
					a = g.setTimeout(function() {
						b.exec()
					}, 60)
				}
			},
			triggle: function() {
				this.exec()
			}
		},
		oa = {},
		D = null,
		ab = s.body,
		Ka = {
			title: "{Modal-DefTitle}",
			cls: "",
			titleCls: "",
			bodyCls: "",
			html: "",
			afterRender: function() {}
		},
		bb = function() {
			var a = 0;
			return function() {
				return "modal-id-" + a++
			}
		}();
	ca.prototype = {
		init: function() {
			var a = this.opt;
			D || (a.renderTo ? D = a.renderTo : (D = s.createElement("div"), p(D, "modal_container"), D.innerHTML = '<div class="modal_msk"></div>', ab.appendChild(D), !a.modalfixed && La(D)));
			this.id = a.id || bb();
			var b = this.modal = oa[this.id],
				c = this;
			b || (b = this.modal = s.createElement("div"), p(b, "modal_tip"), this.hide(), b.id = this.id, b.innerHTML = '<div class="modal_tip_flex"><div class="modal_tip_hd modal-header"><div class="external_logo_area"><a class="milogo" href="javascript:void(0)"></a></div><div class="modal-header-text modal_tip_title"></div><a href="javascript:void(0)" title="" class="modal-header-close btn_mod_close"><span>\u5173\u95ed</span></a></div><div class="modal_tip_bd modal-body"></div></div>', a.renderTo ? a.renderTo.appendChild(b) : D.appendChild(b), this.header = f(".modal-header", b)[0], this.title = f(".modal-header-text", b)[0], this.body = f(".modal-body", b)[0], this.closeBtn = f(".modal-header-close", b)[0], q(this.closeBtn, "click", function() {
				c.close()
			}), this.render(a), oa[this.id] = b, this.resizeModal = function(c, e, f) {
				e = b;
				var l = "getComputedStyle" in g ? g.getComputedStyle(e) : e.currentStyle;
				e = {
					width: Math.max(parseInt(l.width) || 0, e.clientWidth, e.offsetWidth),
					height: Math.max(parseInt(l.height) || 0, e.clientHeight, e.offsetHeight)
				};
				l = c.height;
				c = c.width;
				var k = f.sctop;
				f = f.scleft;
				a.deviceType && "mobile" === a.deviceType || (e && e.height && (b.style.marginTop = e.height < l ? (l - e.height) / 2 + "px" : 0 + k + "px", b.style.top = 0), e && e.width && (b.style.marginLeft = e.width < c ? (c - e.width) / 2 + "px" : 0 + f + "px", b.style.left = 0))
			}, a.modalfixed && (this.resizeModal = function() {}), !a.renderTo && P.on(this.resizeModal));
			this.show()
		},
		show: function() {
			if(this.modal && (u(D, "hide"), u(this.modal, "hide"), !this.opt.renderTo)) {
				var a = this;
				setTimeout(function() {
					!a.opt.modalfixed && P.triggle()
				}, 200)
			}
		},
		beforeClose: function() {
			if(this.opt.beforeClose) {
				return this.opt.beforeClose.call(this)
			}
		},
		close: function(a) {
			if(this.modal) {
				if(!1 === this.beforeClose()) {
					return 0
				}
				a ? (P.off(this.resizeModal), D.removeChild(this.modal), this.modal = null, oa[this.id] = null, k(D, "hide")) : this.hide()
			}
		},
		hide: function() {
			k(D, "hide");
			k(this.modal, "hide")
		},
		render: function(a) {
			this.title.innerHTML = a.title;
			this.body.innerHTML = a.html;
			a.titleCls && p(this.title, a.titleCls);
			a.bodyCls && p(this.body, a.bodyCls);
			a.cls && p(this.modal, a.cls);
			a.afterRender.call(this)
		},
		update: function(a, b) {
			b && (a.titleCls && r(this.title, a.titleCls), a.bodyCls && r(this.body, a.bodyCls), a.cls && r(this.modal, a.cls));
			this.render(a)
		}
	};
	g.Modal = ca;
	var A = function() {
		var a = {};
		return {
			add: function(b, c) {
				if(c) {
					a[b] = c
				} else {
					if("object" === typeof b) {
						for(var d in b) {
							b.hasOwnProperty(d) && (a[d] = b[d])
						}
					}
				}
			},
			get: function(b) {
				return a[b] || ""
			}
		}
	}();
	A.add({
		maskedmsg: '<em class="verify-masked"></em>',
		verify_main: '<div id="verify-mod-container">                </div>                <div id="verify-mod-list">                   <div class="disten30x103 identity_way_list verify-mod-list-con">                      <h4>\u8bf7\u9009\u62e9\u9a8c\u8bc1\u65b9\u5f0f\uff1a</h4>                      <ul class="md_way verify-mod-list-content">                      </ul>                    </div>                    <div class="disten30x103 identity_way_list verify-mod-list-empty" style="display:none">                      <h4>\u5f53\u524d\u6ca1\u6709\u5176\u4ed6\u53ef\u7528\u7684\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\uff1a</h4>                      <ul class="md_way md_unavailable">                        <li>\u6362\u4e00\u53f0\u767b\u5f55\u8fc7\u5c0f\u7c73\u5e10\u53f7\u7684\u8bbe\u5907\u8bd5\u8bd5</li>                        <li>\u70b9\u51fb\u9875\u9762\u4e0b\u65b9\u94fe\u63a5\u63d0\u4ea4\u5e10\u53f7\u7533\u8bc9</li>                      </ul>                    </div>                  <div class="tip_btns page332_btns_two">                     <a class="btn_tip btn_commom btn-select-mode" href="javascript:void(0)" title="{submit}">{submit}</a>                     <a class="btn_tip btn_back btn-select-cancel" href="javascript:void(0)" title="{back}">{back}</a>                  </div>                  <div class="fixbottom">                    <div class="txt_qst">                      <a href="javascript:void(0)" class="btn-select-manual" target="_blank" title="{ManualList}">{ManualList}</a>                    </div>                  </div>                </div>                <div id="verify-mod-captcha">                </div>                <div id="verify-mod-sendTicketTip" style="display:none">                </div>',
		captcha_mode: '<div class="disten30x103 flush_none">                    <h6>{title}</h6>                    <div class="mod">                      <div class="inputcode inputsend captcha-box">                        <label class="input_bg error_bg">                          <input class="code_input captcha-input" type="text" placeholder="{holder}">                        </label>                        <img class="chkcode_img captcha-image" />                      </div>                      <div class="err_tip"><em class="icon_error"></em><span class="verify-error-con"></span></div>                    </div>                  </div>                  <div class="tip_btns  page332_btns_two">                    <a class="btn_tip btn_commom btn-submit" href="javascript:void(0)" title="{submit}">{submit}</a>                    <a class="btn_tip btn_back btn-cancel" href="javascript:void(0)" title="{cancel}">{cancel}</a>                  </div>',
		captchaCode: '<label class="input_bg chkcode">                    <input class="code_input icode-input" rule="{rule}" type="text" name="{inputName}" placeholder="{Captcha_PLA}">                 </label>                 <img class="chkcode_img captcha-image" alt="{CaptchaImg-alt}">',
		modeList: '<div class="item">                <i class="icon_radio_list"></i>{modeName}              </div>              <div class="text">                <p>{modeText}</p>              </div>',
		btns: '<div class="tip_btns">             <a class="btn_tip btn_commom btn-submit" href="javascript:void(0)" title="{submit}">{submit}</a>           </div>',
		bottom: '<div class="fixbottom">              <div class="t_c">                <a href="javascript:void(0)" class="next_step verify-into-list" title="\u6362\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f">\u6362\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f</a>              </div>            </div>',
		input: '<div class="disten30x103">             <h6>{title}</h6>             <div class="mod inputsend {ext_cls}">               <label class="input_bg">                 <input class="resendinput" type="{inputType}" rule="{rule}" name="{inputName}" placeholder="{holder}">               </label>               <span class="remain">                 <a href="javascript:void(0)" title="{send}" class="verify-sendbtn">{send}</a>               </span>             </div>             <div class="codetip mar10 captcha-box">             </div>             <div class="err_tip">                <em class="icon_error"></em>                <span class="verify-error-con"></span>             </div>             <div class="err_tip send_left_times">             </div>             <div class="txt_link">               <span class="verify-unavailable" style="display:none">                {unavailable}               </span>             </div>           </div>',
		trust_device: '<div class="n_checked twostep_trustinfo trust-mydevice">                    <label>                      <i class="icon_select"></i>                      \u8fd9\u662f\u6211\u7684\u79c1\u4eba\u8bbe\u5907\uff0c\u4ee5\u540e\u767b\u5f55\u65e0\u9700\u8f93\u5165\u53e3\u4ee4                    </label>                  </div>',
		input_verifySMS: '<div class="identity_phone_effect">                       <div class="disten20x10">                         <h4 class="pb0">{title}</h4>                       </div>                       <div class="description">                         <p>{sendedtip1}</p>                         <p>{sendedtip2}</p>                       </div>                       <div class="mod inputsend {ext_cls}">                         <label class="input_bg">                           <input class="resendinput" type="{inputType}" rule="{rule}" name="{inputName}" placeholder="{holder}">                         </label>                         <span class="remain">                           <a href="javascript:void(0)" title="{send}" class="verify-sendbtn">{send}</a>                         </span>                       </div>                       <div class="codetip mar10 captcha-box">                       </div>                       <div class="err_tip">                          <em class="icon_error"></em>                          <span class="verify-error-con"></span>                       </div>                       <div class="err_tip send_left_times">                       </div>                       <div class="txt_link">                         <span class="verify-unavailable" style="display:none">                          {unavailable}                         </span>                       </div>                     </div>',
		input_question: '<li class="verify-question-item">                      <p class="verify-question-item-display">{question}</p>                      <label class="input_bg">                        <input type="hidden" name="q_{position}" class="verify-question-item-hidden" value="{question}">                        <input type="text" name="a_{position}" class="verify-question-item-input">                      </label>                    </li>',
		questions: '<div class="disten30x90">                  <h4>{title}</h4>                  <div class="mod">                    <ul class="set_qst_block">                      {questions_inputels}                      <div class="err_tip" style="display:block">                        <span style="display:none">                          <em class="icon_error"></em>                          <span class="verify-error-con"></span>                        </span>                      </div>                    </ul>                  </div>                 </div>',
		sendTicketTips: '<div class="identity_phone_effect">                      <div class="disten20x10">                        <h4 class="pb0 send-ticket-header">                        </h4>                      </div>                      <div class="description">                        <p>                          <span class="send-ticket-tip">                          </span>                          <span class="ff6 verify-masked">                          </span>                        </p>                        <p class="send-ticket-prompt"></p>                      </div>                    </div>                    <div class="tip_btns">                      <button class="btn_tip btn_commom verify-sendbtn">                      </button>                    </div>'
	});
	var M = {
			modal_title: "\u5c0f\u7c73\u5e10\u53f7\u5b89\u5168\u9a8c\u8bc1",
			submit: "\u786e\u5b9a",
			cancel: "\u53d6\u6d88",
			back: "\u8fd4\u56de",
			send: "",
			next_step: "\u6362\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
			ResQuotaError: "\u60a8\u7684\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u4e3a\u4e86\u4fdd\u62a4\u60a8\u7684\u5e10\u53f7\u5b89\u5168\uff0c\u8bf7\u6362\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f\u6216\u4e00\u5929\u540e\u518d\u6b21\u5c1d\u8bd5",
			ManualList: "\u5e10\u53f7\u7533\u8bc9\u91cd\u7f6e\u5bc6\u4fdd",
			ManualHref: "/pass/retrieve/prompt?externalId={user}&type={retrieveType}"
		},
		J = {},
		w = {
			ALLOW: 1,
			DENY: 2,
			UNINIT: 3,
			CHECKING: 4,
			UNKNOWN: 5
		},
		T = {
			key: "captcha",
			Captcha_PLA: "\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801",
			"CaptchaImg-alt": "\u70b9\u51fb\u53ef\u5237\u65b0\u56fe\u7247\u9a8c\u8bc1\u7801",
			inputName: "icode",
			rule: "\\w{4,8}",
			ResError: "\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e",
			tpl: ["captcha_mode"],
			tpl_data: {
				title: "\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801",
				holder: "\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801",
				rule: "\\w{4,8}",
				inputName: "icode",
				inputType: "text"
			}
		},
		Aa = {
			key: "send_ticket_tip",
			tpl: ["sendTicketTips", "bottom"],
			tpl_data: {}
		},
		Z = !0,
		v = [{
			name: "\u9a8c\u8bc1\u5bc6\u7801",
			key: "pwd",
			notrim: !0,
			url: "/auth/verifyPassword?_flag=1",
			tpl: ["input", "btns", "bottom"],
			listname: "\u9a8c\u8bc1\u5bc6\u7801",
			status: w.UNINIT,
			tpl_data: {
				title: "\u9700\u8981\u9a8c\u8bc1\u60a8\u7684\u5bc6\u7801",
				holder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
				rule: "required",
				unavailable: "",
				inputName: "pwd",
				inputType: "password",
				ext_cls: "identitypwd"
			},
			data: {
				EmptyError: "\u8bf7\u8f93\u5165\u5bc6\u7801",
				RuleError: "\u5bc6\u7801\u8f93\u5165\u9519\u8bef",
				ResError: "\u5bc6\u7801\u8f93\u5165\u9519\u8bef"
			}
		}, {
			name: "\u9a8c\u8bc1\u4ee4\u724c",
			listname: "\u4f7f\u7528\u5c0f\u7c73\u5b89\u5168\u4ee4\u724c",
			listText: "\u9a8c\u8bc1\u60a8\u7ed1\u5b9a\u7684\u52a8\u6001\u4ee4\u724c",
			key: "token",
			url: "/auth/verifyStep2?_flag=2",
			tpl: ["input", "btns", "bottom"],
			status: w.UNINIT,
			trustSelect: !0,
			tpl_data: {
				title: "\u9700\u8981\u9a8c\u8bc1\u60a8\u7684\u5c0f\u7c73\u5b89\u5168\u4ee4\u724c",
				holder: "\u8bf7\u8f93\u5165\u5b89\u5168\u4ee4\u724c\u751f\u6210\u7684\u9a8c\u8bc1\u7801",
				rule: "^\\d{6,8}$",
				unavailable: "",
				inputName: "code",
				inputType: "text",
				ext_cls: "identitypwd"
			},
			data: {
				EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
				RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
				ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
			}
		}, {
			name: "\u9a8c\u8bc1\u624b\u673a",
			key: "SMS",
			listname: "\u901a\u8fc7\u5b89\u5168\u624b\u673a\u63a5\u6536\u9a8c\u8bc1\u77ed\u4fe1",
			listText: "\u9a8c\u8bc1\u60a8\u7ed1\u5b9a\u7684\u5b89\u5168\u624b\u673a",
			trustSelect: !0,
			sendTicket: {
				autoSend: !0,
				url: "/auth/sendPhoneTicket",
				contentType: 160010,
				type: "PH",
				sending: !1,
				hold: 0,
				leftTimes: 10,
				times: 0,
				leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u6761\u77ed\u4fe1",
				tips: "\u70b9\u51fb\u53d1\u9001\u77ed\u4fe1\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a",
				tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
				prompt: "",
				nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u77ed\u4fe1\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
				send: "\u53d1\u9001\u77ed\u4fe1",
				sending_txt: "\u6b63\u5728\u53d1\u9001",
				resend: "\u91cd\u65b0\u53d1\u9001",
				resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
			},
			url: "/auth/verifyPhone?_flag=4",
			tpl: ["input", "btns", "bottom"],
			tpl_data: {
				inputName: "ticket",
				inputType: "text",
				send: "\u53d1\u9001\u77ed\u4fe1",
				title: '\u8bf7\u4f7f\u7528\u5b89\u5168\u624b\u673a<em class="ff6 verify-masked"></em>\u83b7\u53d6\u9a8c\u8bc1\u7801\u77ed\u4fe1',
				holder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
				rule: "^\\d{6,8}$",
				unavailable: '<em class="acctip_icon icon_qst"></em>\u4e00\u76f4\u6536\u4e0d\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff1f<a target="_blank"  href="https://static.account.xiaomi.com/html/faq/faqSMSerror.html">\u67e5\u770b\u53ef\u80fd\u539f\u56e0</a>'
			},
			data: {
				EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
				RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
				FrequentError: "\u60a8\u7684\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
				ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
			}
		}, {
			name: "\u9a8c\u8bc1\u90ae\u7bb1",
			key: "email",
			listname: "\u901a\u8fc7\u5b89\u5168\u90ae\u7bb1\u63a5\u6536\u9a8c\u8bc1\u90ae\u4ef6",
			listText: "\u9a8c\u8bc1\u60a8\u7ed1\u5b9a\u7684\u5b89\u5168\u90ae\u7bb1",
			sendTicket: {
				autoSend: !0,
				url: "/auth/sendEmailTicket",
				contentType: 160010,
				type: "EM",
				sending: !1,
				hold: 0,
				leftTimes: 10,
				times: 0,
				leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u5c01\u90ae\u4ef6",
				tips: "\u70b9\u51fb\u53d1\u9001\u90ae\u4ef6\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u5c01\u6709\u9a8c\u8bc1\u7801\u7684\u90ae\u4ef6\u81f3\u90ae\u7bb1",
				tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u90ae\u7bb1\u6709\u6548\u6027",
				prompt: "",
				nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u90ae\u4ef6\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
				send: "\u53d1\u9001\u90ae\u4ef6",
				sending_txt: "\u6b63\u5728\u53d1\u9001",
				resend: "\u91cd\u65b0\u53d1\u9001",
				resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
			},
			url: "/auth/verifyEmail?_flag=8",
			tpl: ["input", "btns", "bottom"],
			tpl_data: {
				inputName: "ticket",
				inputType: "text",
				send: "\u53d1\u9001\u90ae\u4ef6",
				title: '\u8bf7\u4f7f\u7528\u5b89\u5168\u90ae\u7bb1<em class="ff6 verify-masked"></em>\u83b7\u53d6\u9a8c\u8bc1\u7801',
				holder: "\u8bf7\u8f93\u5165\u90ae\u4ef6\u9a8c\u8bc1\u7801",
				rule: "^\\d{6,8}$",
				unavailable: ""
			},
			data: {
				EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
				RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
				ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
			}
		}, {
			name: "\u5bc6\u4fdd\u95ee\u9898",
			listname: "\u56de\u7b54\u8bbe\u7f6e\u7684\u5bc6\u4fdd\u95ee\u9898",
			listText: "\u9a8c\u8bc1\u60a8\u8bbe\u7f6e\u7684\u5bc6\u4fdd\u95ee\u9898\u7b54\u6848",
			key: "Question",
			url: "/auth/answerQuestion?_flag=16",
			tpl: [function() {
				var a = x,
					b = a.paramJson && a.paramJson.questions,
					c = A.get("questions"),
					d = [],
					e;
				if(b && b.length) {
					for(var f = 0; f < b.length; f++) {
						(e = b[f]) && "p" in e && "q" in e && d.push(E(A.get("input_question"), {
							question: e.q,
							position: e.p
						}))
					}
				}
				return E(c, {
					questions_inputels: d.join(""),
					title: a.tpl_data.title
				})
			}, "btns", "bottom"],
			tpl_data: {
				title: "\u8bf7\u56de\u7b54\u5bc6\u4fdd\u95ee\u9898",
				inputType: "text",
				holder: "\u8bf7\u56de\u7b54\u5bc6\u4fdd\u95ee\u9898",
				rule: "",
				unavailable: ""
			},
			data: {
				EmptyError: "\u8bf7\u586b\u5199\u5bc6\u4fdd\u95ee\u9898",
				RuleError: "\u5b58\u5728\u9519\u8bef\u7b54\u6848",
				ResError: "\u5b58\u5728\u9519\u8bef\u7b54\u6848"
			}
		}];
	A.add({
		Contact_Name: '<div class="select_names t_c">            <div class="disten20x10">{title}</div>            <div class="choose_contacts_area">            </div>            <div class="err_tip pb10">                <em class="icon_error"></em>                <span class="verify-error-con"></span>            </div>          </div>',
		ContactName_Tips: '<p class="contact_tips t_c ft12">\u5c0f\u7c73\u4e0d\u4f1a\u6cc4\u6f0f\u60a8\u7684\u4e2a\u4eba\u79c1\u5bc6\u4fe1\u606f\uff0c\u4ec5\u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u4f7f\u7528</p>'
	});
	v[21] = {
		name: "ContactName",
		listname: "\u9a8c\u8bc1\u60a8\u5c0f\u7c73\u624b\u673a\u4e2d\u7684\u8054\u7cfb\u4eba",
		key: "ContactName",
		url: "/auth/micloudContacts/nameVerify?_flag=2097152",
		tpl: ["Contact_Name", "btns", "ContactName_Tips", "bottom"],
		tpl_data: {
			title: '\u8bf7\u9009\u53d6<span class="choose-item-num"> 3 </span>\u4e2a\u60a8\u5c0f\u7c73\u624b\u673a\u4e2d\u7684\u8054\u7cfb\u4eba',
			ContactName_Tips: "\u5c0f\u7c73\u4e0d\u4f1a\u6cc4\u6f0f\u60a8\u7684\u4e2a\u4eba\u79c1\u5bc6\u4fe1\u606f\uff0c\u4ec5\u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u4f7f\u7528"
		},
		onModeShown: function(a, b, c) {
			var d = b.els;
			c = f("#verify-mod-ContactName");
			d.chooseArea.innerHTML = "";
			d.submitBtn = f(".btn-submit", c)[0];
			p(d.submitBtn, "disabled");
			d.errorCon = f(".verify-error-con", c)[0];
			k(d.errorCon.parentNode);
			a = function() {
				var a = b.paramJson && b.paramJson.micloudContactsName;
				b.paramJson._used = !0;
				for(var c = [], f = 0; f < a.length; f++) {
					var g = a[f];
					c.push("<div class='choose_contact_item' itemId='" + g + "'><i class='chosen_icon'></i><div class='t_c contactName ft12'>" + g + "</div></div>")
				}
				d.chooseArea.innerHTML = c.join("")
			};
			b.paramJson && !b.paramJson._used ? a() : (Q([b]), L([b], a))
		},
		afterRender: function(a, b, c) {
			var d = b.els;
			d.chooseArea = f(".choose_contacts_area")[0];
			a = f("#verify-mod-ContactName");
			d.submitBtn = f(".btn-submit", a)[0];
			d.errorCon = f(".verify-error-con", a)[0];
			p(d.submitBtn, "disabled");
			q(d.chooseArea, "click", function(a) {
				a = a || g.event;
				a = a.target || a.srcElement;
				a = y(a, "choose_contact_item") ? a : a.parentNode;
				y(a, "choose_contact_item") && (k(d.errorCon.parentNode), 2 >= f(".now", d.chooseArea).length ? y(a, "now") ? r(a, "now") : p(a, "now") : y(a, "now") && r(a, "now"), 3 === f(".now", d.chooseArea).length ? r(d.submitBtn, "disabled") : p(d.submitBtn, "disabled"))
			})
		},
		data: {
			ResError: "\u60a8\u9009\u62e9\u7684\u8054\u7cfb\u4eba\u9519\u8bef"
		}
	};
	A.add({
		delivery_contact: '<div class="wapbox getaddress">                        <div class="disten20x10">                          <h4 class="pb0">{title}</h4>                          <p>{secTitle}</p>                        </div>                        <div class="regbox">                          <div class="pb5">{delivery_contact}</div>                          <div class="inputbg">                            <label class="labelbox" for="">                              <input type="tel" name="{inputName}" rule="{rule}" placeholder="{holder}">                            </label>                          </div>                          <div class="err_tip">                              <em class="icon_error"></em>                              <span class="verify-error-con"></span>                          </div>                        </div>                      </div>'
	});
	J.verify_delivery_contact = {
		name: "Verify Delivery Ticket",
		key: "VerifyDeliveryContact",
		sourceKey: "DeliveryContact",
		url: "/auth/deliveryAddress/verify?_flag=32",
		tpl: ["input_verifySMS", "btns", "bottom"],
		tpl_data: {
			title: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			sendedtip1: '\u5df2\u7ecf\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a<span class="verify-masked ff6"></span>',
			sendedtip2: "\u8bf7\u8054\u7cfb\u53f7\u7801\u7684\u4e3b\u4eba\u83b7\u53d6\u9a8c\u8bc1\u7801\uff0c\u586b\u5165\u4e0b\u65b9\u8f93\u5165\u6846\u3002",
			inputType: "text",
			holder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
			inputName: "ticket",
			rule: "^\\d{6,8}$",
			unavailable: '<em class="acctip_icon icon_qst"></em>\u4e00\u76f4\u6536\u4e0d\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff1f<a target="_blank"  href="https://static.account.xiaomi.com/html/faq/faqSMSerror.html">\u67e5\u770b\u53ef\u80fd\u539f\u56e0</a>'
		},
		forceInit: !0,
		sendTicket: {
			autoSend: !0,
			url: "/auth/deliveryAddress/sendTicket",
			contentType: 4000006,
			params: {
				rkey: 0,
				phone: 0
			},
			beforeSuccess: function(a) {
				0 === a.code ? a.rkey && (this.params.rkey = a.rkey) : 21307 === a.code && (alert("\u5f53\u524d\u64cd\u4f5c\u5df2\u7ecf\u5931\u6548\uff0c\u8bf7\u91cd\u8bd5\uff01"), location.reload())
			},
			type: "PH",
			sending: !1,
			hold: 0,
			leftTimes: 10,
			times: 0,
			leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u6761\u77ed\u4fe1",
			tips: "\u70b9\u51fb\u53d1\u9001\u77ed\u4fe1\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a",
			tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			prompt: "\u8bf7\u8054\u7cfb\u53f7\u7801\u7684\u4e3b\u4eba\u83b7\u53d6\u9a8c\u8bc1\u7801\u77ed\u4fe1",
			nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u77ed\u4fe1\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
			send: "\u53d1\u9001\u77ed\u4fe1",
			sending_txt: "\u6b63\u5728\u53d1\u9001",
			resend: "\u91cd\u65b0\u53d1\u9001",
			resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
			RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
			ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
		}
	};
	v[5] = {
		name: "Delivery Contact",
		listname: "\u5c0f\u7c73\u7f51\u6536\u8d27\u8054\u7cfb\u4eba",
		listText: "\u9a8c\u8bc1\u60a8\u5c0f\u7c73\u7f51\u8ba2\u5355\u4e2d\u6536\u8d27\u8054\u7cfb\u4eba",
		key: "DeliveryContact",
		url: "/auth/deliveryAddress/verify?_flag=32",
		tpl: ["delivery_contact", "btns", "bottom"],
		nextStep: {
			url: "/auth/deliveryAddress/check",
			submit: function(a, b) {
				a && a.phone && (J.verify_delivery_contact.ticketPhone = a.phone, J.verify_delivery_contact.sendTicket.params = {
					rkey: a.rkey,
					phone: a.phone
				}, R(J.verify_delivery_contact))
			}
		},
		tpl_data: {
			submit: "\u4e0b\u4e00\u6b65",
			title: "\u8bf7\u5199\u51fa\u5c0f\u7c73\u7f51\u6536\u8d27\u5730\u5740\u4e2d\u7684\u624b\u673a\u53f7\u7801",
			secTitle: '\u8bf7\u5199\u51fa\u9664<span class="ff6 verify-masked"></span>\u5916\u7684\u624b\u673a\u53f7\u7801\uff0c\u6b64\u53f7\u7801\u5c06\u63a5\u6536\u9a8c\u8bc1\u77ed\u4fe1',
			inputType: "tel",
			inputName: "phone",
			rule: "\\+*\\d{4,20}",
			delivery_contact: "\u6536\u8d27\u624b\u673a\u53f7\u7801\uff1a",
			holder: "\u8bf7\u8f93\u5165\u6536\u8d27\u624b\u673a\u53f7\u7801",
			ruleType: "contact",
			unavailable: ""
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u60a8\u7684\u6536\u8d27\u4eba\u53f7\u7801",
			RuleError: "\u6536\u8d27\u4eba\u53f7\u7801\u9519\u8bef",
			ResError: "\u6536\u8d27\u4eba\u53f7\u7801\u9519\u8bef",
			DuplicateError: "\u8bf7\u52ff\u8f93\u5165\u60a8\u7684\u5b89\u5168\u624b\u673a\u7684\u53f7\u7801"
		}
	};
	A.add({
		idnumber_input: '<div class="disten30x103">             <h6>{title}</h6>             <div class="mod inputsend {ext_cls}">               <label class="input_bg">                 <input class="resendinput" type="{inputType_name}" rule="{rule_name}" name="{inputName_name}" placeholder="{holder_name}">               </label>             </div>             <div class="mod inputsend {ext_cls}">               <label class="input_bg">                 <input class="resendinput" type="{inputType_id}" rule="" name="{inputName_id}" placeholder="{holder_id}">               </label>             </div>             <div class="codetip mar10 captcha-box">             </div>             <div class="err_tip">                <em class="icon_error"></em>                <span class="verify-error-con"></span>             </div>             <div class="err_tip send_left_times">             </div>             <div class="txt_link">               <span class="verify-unavailable" style="display:none">                {unavailable}               </span>             </div>           </div>',
		IDNumber_Tip: '<div class="idnumberbox idnumber-tip-container"><div class="idnumber_hd idnumber-tip-header">\u60a8\u53ef\u80fd\u5728\u5982\u4e0b\u60c5\u51b5\u5c06\u5c0f\u7c73\u5e10\u53f7\u548c\u8eab\u4efd\u8bc1\u7ed1\u5b9a\uff1a</div><ul class="idnumberlist idnumber-tip-ul"><li class="idnumber-tip-li">\u5c0f\u7c73\u652f\u4ed8\u7ed1\u5b9a\u94f6\u884c\u5361\u65f6\uff0c\u5bf9\u5e94\u7ed1\u5b9a\u5f00\u5361\u8eab\u4efd\u8bc1\u53f7</li><li class="idnumber-tip-li">\u5c0f\u7c73\u91d1\u878d\u8d2d\u4e70\u7406\u8d22\u4ea7\u54c1\u65f6\uff0c\u94f6\u884c\u5e10\u53f7\u5bf9\u5e94\u7684\u8eab\u4efd\u8bc1\u53f7</li><li class="idnumber-tip-li">\u8d2d\u4e70\u4fdd\u9669\u7c7b\u4ea7\u54c1\u586b\u5199\u7684\u8d2d\u4e70\u4eba\u5b9e\u540d\u4fe1\u606f</li></ul></div>'
	});
	v[19] = {
		name: "IDNumber verify",
		listname: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u60a8\u7ed1\u5b9a\u5c0f\u7c73\u5e10\u53f7\u7684\u8eab\u4efd\u8bc1",
		key: "IDNumberVerify",
		url: "/auth/id/verify?_flag=524288",
		tpl: ["idnumber_input", "btns", "IDNumber_Tip", "bottom"],
		tpl_data: {
			title: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u60a8\u7ed1\u5b9a\u5c0f\u7c73\u5e10\u53f7\u7684\u8eab\u4efd\u8bc1",
			inputType_name: "text",
			inputName_name: "idName",
			holder_name: "\u8bf7\u8f93\u5165\u60a8\u7684\u8bc1\u4ef6\u59d3\u540d",
			inputType_id: "text",
			inputName_id: "idNo",
			rule_name: "required",
			rule_id: "[0-9xX]{15,18}",
			holder_id: "\u8bf7\u8f93\u5165\u60a8\u7684\u8eab\u4efd\u8bc1\u53f7",
			ext_cls: "identitypwd"
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u5b8c\u6574\u7684\u59d3\u540d\u548c\u8eab\u4efd\u8bc1\u53f7",
			RuleError: "\u60a8\u8f93\u5165\u7684\u59d3\u540d\u6216\u8eab\u4efd\u8bc1\u53f7\u9519\u8bef",
			idNoRule: "\u60a8\u8f93\u5165\u7684\u8eab\u4efd\u8bc1\u53f7\u9519\u8bef",
			ResError: "\u60a8\u8f93\u5165\u7684\u59d3\u540d\u6216\u8eab\u4efd\u8bc1\u53f7\u9a8c\u8bc1\u9519\u8bef",
			DuplicateError: "{DuplicateErrorIDNumber}"
		}
	};
	A.add({
		Installed_App: '<div class="select_apps t_c">            <div class="disten20x10">{title}</div>            <div class="choose_apps_area">            </div>            <div class="err_tip pb10">                <em class="icon_error"></em>                <span class="verify-error-con"></span>            </div>          </div>',
		InstalledApp_Tips: '<p class="app_tips t_c ft12">\u6570\u636e\u6765\u6e90\u4e8e\u5c0f\u7c73\u5e94\u7528\u5546\u5e97\uff0c\u4ec5\u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u4f7f\u7528</p>'
	});
	v[20] = {
		name: "InstalledApp",
		listname: "\u9a8c\u8bc1\u60a8\u5c0f\u7c73\u624b\u673a\u4e2d\u7684\u5e94\u7528",
		key: "InstalledApp",
		url: "/auth/appHistory/verify?_flag=1048576",
		tpl: ["Installed_App", "btns", "InstalledApp_Tips", "bottom"],
		tpl_data: {
			title: '\u8bf7\u9009\u53d6<span class="choose-item-num"> 3 </span>\u4e2a\u60a8\u5c0f\u7c73\u624b\u673a\u4e2d\u7684\u5e94\u7528',
			InstalledApp_Tips: "\u6570\u636e\u6765\u6e90\u4e8e\u5c0f\u7c73\u5e94\u7528\u5546\u5e97\uff0c\u4ec5\u4f5c\u4e3a\u8eab\u4efd\u9a8c\u8bc1\u4f7f\u7528"
		},
		onModeShown: function(a, b, c) {
			var d = b.els;
			c = f("#verify-mod-InstalledApp");
			d.chooseArea.innerHTML = "";
			d.submitBtn = f(".btn-submit", c)[0];
			p(d.submitBtn, "disabled");
			d.errorCon = f(".verify-error-con", c)[0];
			k(d.errorCon.parentNode);
			a = function() {
				var a = b.paramJson && b.paramJson.userHistoryApps;
				b.paramJson._used = !0;
				for(var c = [], f = 0; f < a.length; f++) {
					c.push("<div class='choose_app_item' itemId='" + a[f].package_name + "'><img src='" + a[f].icon + "'/><i class='chosen_icon'></i><div class='t_c appName ft12'>" + a[f].display_name + "</div></div>")
				}
				d.chooseArea.innerHTML = c.join("")
			};
			b.paramJson && !b.paramJson._used ? a() : (Q([b]), L([b], a))
		},
		afterRender: function(a, b, c) {
			var d = b.els;
			d.chooseArea = f(".choose_apps_area")[0];
			a = f("#verify-mod-InstalledApp");
			d.submitBtn = f(".btn-submit", a)[0];
			d.errorCon = f(".verify-error-con", a)[0];
			p(d.submitBtn, "disabled");
			q(d.chooseArea, "click", function(a) {
				a = a || g.event;
				a = a.target || a.srcElement;
				a = y(a, "choose_app_item") ? a : a.parentNode;
				y(a, "choose_app_item") && (k(d.errorCon.parentNode), 2 >= f(".now", d.chooseArea).length ? y(a, "now") ? r(a, "now") : p(a, "now") : y(a, "now") && r(a, "now"), 3 === f(".now", d.chooseArea).length ? r(d.submitBtn, "disabled") : p(d.submitBtn, "disabled"))
			})
		},
		data: {
			ResError: "\u60a8\u9009\u62e9\u7684\u5e94\u7528\u9519\u8bef"
		}
	};
	A.add({
		Micloud_contact: '<div class="select_phone_step1">          <div class="identify_newph">            <div class="disten20x10">              <h4 class="pb0">{title}</h4>              <p class="style_h4">{step1_title}</p>            </div>            <div class="identity_ph_lists">              <ul class="c_b select_phone_list_con">              </ul>            </div>          </div>          <div class="tip_btns">            <input class="btn_tip btn_commom btn-submit-1 disabled" type="button" value="\u4e0b\u4e00\u6b65">          </div>        </div>        <div class="select_phone_step2">          <div class="identify_newph">            <div class="disten20x10">              <h4 class="pb0">{title}</h4>              <p class="style_h4">{step2_title}</p>            </div>            <div class="identity_ph_fill">              <ul class="fill_phone_list_con">              </ul>            </div>            <div class="err_tip">              <em class="icon_error"></em>              <span class="verify-error-con"></span>            </div>          </div>          <div class="tip_btns">            <input class="btn_tip btn_commom btn-submit" type="button" value="\u4e0b\u4e00\u6b65">          </div>        </div>'
	});
	J.verify_Micloud_contact = {
		name: "Verify Ticket",
		key: "VerifyMicloudContact",
		sourceKey: "MicloudContact",
		url: "/auth/verifyContacts?_flag=64",
		tpl: ["input_verifySMS", "btns", "bottom"],
		tpl_data: {
			title: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			sendedtip1: '\u5df2\u7ecf\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a<span class="verify-masked ff6"></span>',
			sendedtip2: "\u8bf7\u8054\u7cfb\u53f7\u7801\u7684\u4e3b\u4eba\u83b7\u53d6\u9a8c\u8bc1\u7801\uff0c\u586b\u5165\u4e0b\u65b9\u8f93\u5165\u6846\u3002",
			inputType: "tel",
			holder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
			inputName: "ticket",
			send: "\u53d1\u9001\u77ed\u4fe1",
			rule: "^\\d{6,8}$",
			unavailable: '<em class="acctip_icon icon_qst"></em>\u4e00\u76f4\u6536\u4e0d\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff1f<a target="_blank"  href="https://static.account.xiaomi.com/html/faq/faqSMSerror.html">\u67e5\u770b\u53ef\u80fd\u539f\u56e0</a>'
		},
		forceInit: !0,
		sendTicket: {
			autoSend: !0,
			url: "/auth/sendContactTicket",
			contentType: 4000005,
			params: {
				rkey: 0,
				phone: 0
			},
			beforeSuccess: function(a) {
				0 === a.code ? a.rkey && (this.params.rkey = a.rkey) : 21307 === a.code && (alert("\u5f53\u524d\u64cd\u4f5c\u5df2\u7ecf\u5931\u6548\uff0c\u8bf7\u91cd\u8bd5\uff01"), location.reload())
			},
			type: "PH",
			sending: !1,
			hold: 0,
			leftTimes: 10,
			times: 0,
			leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u6761\u77ed\u4fe1",
			tips: "\u70b9\u51fb\u53d1\u9001\u77ed\u4fe1\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a",
			tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			prompt: "\u8bf7\u8054\u7cfb\u53f7\u7801\u7684\u4e3b\u4eba\u83b7\u53d6\u9a8c\u8bc1\u7801\u77ed\u4fe1",
			nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u77ed\u4fe1\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
			send: "\u53d1\u9001\u77ed\u4fe1",
			sending_txt: "\u6b63\u5728\u53d1\u9001",
			resend: "\u91cd\u65b0\u53d1\u9001",
			resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
			RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
			ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
		}
	};
	v[6] = {
		name: "Micloud Contact",
		listname: "\u540c\u6b65\u5230\u5c0f\u7c73\u4e91\u670d\u52a1\u7684\u5e38\u7528\u8054\u7cfb\u4eba",
		listText: "\u9a8c\u8bc1\u60a8\u5c0f\u7c73\u4e91\u540c\u6b65\u7684\u901a\u8baf\u5f55\u5e38\u7528\u8054\u7cfb\u4eba",
		key: "MicloudContact",
		url: "/auth/verifyContacts?_flag=64",
		tpl: ["Micloud_contact", "bottom"],
		nextStep: {
			url: "/auth/checkContacts",
			submit: function(a, b) {
				a && a.phone && (J.verify_Micloud_contact.ticketPhone = a.phone, J.verify_Micloud_contact.sendTicket.params = {
					rkey: a.rkey,
					phone: a.phone
				}, R(J.verify_Micloud_contact))
			}
		},
		afterRender: function(a, b, c) {
			var d = b.els;
			d.step1 = f(".select_phone_step1")[0];
			d.step2 = f(".select_phone_step2")[0];
			d.selectCon = f(".select_phone_list_con")[0];
			d.fillCon = f(".fill_phone_list_con")[0];
			d.submit1 = f(".btn-submit-1")[0];
			q(d.selectCon, "click", function(a) {
				a = a || g.event;
				a = a.target || a.srcElement;
				a = y(a, "select_phone_list_li") ? a : a.parentNode;
				if(y(a, "select_phone_list_li")) {
					var b = f("span", a);
					y(a, "now") ? (r(a, "now"), r(b, "select_phone_value")) : (p(a, "now"), p(b, "select_phone_value"))
				}
				3 <= f(".now", d.selectCon).length ? r(d.submit1, "disabled") : p(d.submit1, "disabled")
			});
			q(d.submit1, "click", function() {
				if(y(d.submit1, "disabled")) {
					return !1
				}
				var a = f(".select_phone_value", d.selectCon),
					c = [];
				b.selectedPhones = [];
				for(var g = 0, h; g < a.length; g++) {
					h = (a[g].innerHTML + "").replace(/\**$/, ""), b.selectedPhones.push(h), c.push("<li>                    <span>" + h + '</span>                    <label class="input_bg fill_contacts_input">                      <input class="fill_phone_input" type="text"                         rule="^\\d{3}$" name="contacts"                         placeholder="\u8865\u5168\u7535\u8bdd\u53f7\u7801">                    </label>                  </li>')
				}
				d.fillCon.innerHTML = c.join("");
				d.inputs = [];
				a = f(".fill_phone_input", d.fillCon);
				for(g = 0; c = a[g++];) {
					_n = c.getAttribute("name"), hidden = "hidden" == c.getAttribute("type"), _n && !hidden && d.inputs.push({
						name: _n,
						el: c
					}), ja(c)
				}
				k(d.step1);
				u(d.step2)
			})
		},
		beforeSubmitData: function(a) {
			for(var b = [], c = 0; c < a.length; c++) {
				b.push(this.selectedPhones[c] + a[c].contacts)
			}
			return [{
				contacts: b.join(",")
			}]
		},
		onModeShown: function(a, b, c) {
			a = b.els;
			a.selectCon.innerHTML = "";
			a.fillCon.innerHTML = "";
			k(a.step2);
			u(a.step1);
			a = function() {
				var a = (b.paramJson && b.paramJson.contacts).split(",");
				b.paramJson._used = !0;
				for(var c = [], f = 0; f < a.length; f++) {
					c.push('<li class="n_checked select_phone_list_li"><i class="icon_select"></i><span>' + a[f] + "</span></li>")
				}
				b.els.selectCon.innerHTML = c.join("")
			};
			b.paramJson && !b.paramJson._used ? a() : (Q([b]), L([b], a))
		},
		tpl_data: {
			submit: "\u4e0b\u4e00\u6b65",
			title: "\u624b\u673a\u901a\u8baf\u5f55\u8054\u7cfb\u4eba\u9a8c\u8bc1",
			step1_title: "\u8bf7\u7b5b\u9009\u51fa\u4e0b\u65b9\u624b\u673a\u53f7\u7801\u4e2d\uff0c\u5c5e\u4e8e\u60a8\u624b\u673a\u7535\u8bdd\u8054\u7cfb\u4eba\u7684\u53f7\u7801\u3002",
			step2_title: "\u8bf7\u60a8\u8865\u5168\u4e0b\u65b9\u8054\u7cfb\u4eba\u7684\u7535\u8bdd\u53f7\u7801",
			secTitle: "\u4ec5\u9650\u6700\u8fd13\u4e2a\u6708\u5185\u540c\u6b65\u5230\u5c0f\u7c73\u4e91\u670d\u52a1\u5e76\u6709\u901a\u8bdd\u8bb0\u5f55\u6216\u77ed\u4fe1\u8bb0\u5f55\u7684\u5e38\u7528\u8054\u7cfb\u4eba",
			inputType: "tel",
			holder: "\u8bf7\u8f93\u5165\u7535\u8bdd\u53f7\u7801",
			rule: "\\+*\\d{4,20}",
			contact_list1: "\u8054\u7cfb\u4eba1\uff1a",
			contact_list2: "\u8054\u7cfb\u4eba2\uff1a",
			contact_list3: "\u8054\u7cfb\u4eba3\uff1a",
			contact_list4: "\u8054\u7cfb\u4eba4\uff1a",
			unavailable: ""
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u60a8\u7684\u8054\u7cfb\u4eba\u53f7\u7801",
			RuleError: "\u8054\u7cfb\u4eba\u53f7\u7801\u9519\u8bef",
			ResError: "\u8054\u7cfb\u4eba\u53f7\u7801\u9519\u8bef",
			DuplicateError: "\u8054\u7cfb\u4eba\u53f7\u7801\u91cd\u590d"
		}
	};
	v[16] = {
		name: "push",
		listname: "\u901a\u8fc7\u9a8c\u8bc1\u7684\u8bbe\u5907\u83b7\u53d6\u9a8c\u8bc1\u7801",
		listText: "\u4f7f\u7528\u5df2\u7ecf\u767b\u5f55\u5c0f\u7c73\u5e10\u53f7\u5e76\u901a\u8fc7\u9a8c\u8bc1\u7684\u8bbe\u5907\uff0c\u8054\u7f51\u63a5\u6536\u63d0\u9192",
		key: "push",
		trustSelect: !0,
		shownVerifyModal: !0,
		sendTicket: {
			autoSend: !0,
			url: "/auth/sendPushTicket",
			contentType: 160032,
			type: "PH",
			sending: !1,
			hold: 0,
			leftTimes: 10,
			times: 0,
			leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u6761\u77ed\u4fe1",
			tips: "\u70b9\u51fb\u53d1\u9001\u77ed\u4fe1\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a",
			tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			prompt: "",
			nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u77ed\u4fe1\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
			send: "\u53d1\u9001\u77ed\u4fe1",
			sending_txt: "\u6b63\u5728\u53d1\u9001",
			resend: "\u91cd\u65b0\u53d1\u9001",
			resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
		},
		url: "/auth/verifyPush?_flag=65536",
		tpl: ["input", "btns", "bottom"],
		tpl_data: {
			title: "\u5df2\u7ecf\u5411\u60a8\u901a\u8fc7\u9a8c\u8bc1\u7684\u8bbe\u5907\u53d1\u9001\u4e00\u6761\u901a\u77e5\u63d0\u9192\uff0c\u8bf7\u70b9\u51fb\u901a\u77e5\uff0c\u83b7\u53d6\u9a8c\u8bc1\u7801\u3002",
			inputName: "ticket",
			inputType: "text",
			send: "\u53d1\u9001\u77ed\u4fe1",
			rule: "required",
			holder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
			unavailable: '<em class="acctip_icon icon_qst"></em>\u4e00\u76f4\u6536\u4e0d\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff1f<a target="_blank"  href="https://static.account.xiaomi.com/html/faq/faqSMSerror.html">\u67e5\u770b\u53ef\u80fd\u539f\u56e0</a>'
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
			RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
			ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
		}
	};
	v[17] = {
		name: "Qucik Delivery Contact",
		listname: "\u9a8c\u8bc1\u60a8\u7684\u5c0f\u7c73\u7f51\u6536\u8d27\u4eba\u624b\u673a\u53f7",
		listText: "",
		key: "QuickDeliveryContact",
		url: "/auth/deliveryAddress/quickVerify?_flag=131072",
		tpl: ["input", "btns", "bottom"],
		tpl_data: {
			title: "\u8bf7\u586b\u5199\u60a8\u5c0f\u7c73\u7f51\u5730\u5740\u5217\u8868\u4e2d\u7684\u6536\u8d27\u4eba\u624b\u673a\u53f7",
			secTitle: "\u6536\u8d27\u4eba\u624b\u673a\u53f7",
			inputType: "text",
			inputName: "consignee",
			rule: "required",
			holder: "\u8bf7\u586b\u5199\u60a8\u7684\u6536\u8d27\u4eba\u624b\u673a\u53f7",
			ext_cls: "identitypwd",
			unavailable: ""
		},
		data: {
			EmptyError: "\u8bf7\u586b\u5199\u6536\u8d27\u4eba\u624b\u673a\u53f7",
			RuleError: "\u8bf7\u586b\u5199\u6536\u8d27\u4eba\u624b\u673a\u53f7",
			ResError: "\u624b\u673a\u53f7\u4e0d\u6b63\u786e",
			DuplicateError: "\u624b\u673a\u53f7\u4e0d\u6b63\u786e",
			CantSafePhoneError: "\u4e0d\u80fd\u4e0e\u5e10\u53f7\u7ed1\u5b9a\u7684\u624b\u673a\u53f7\u76f8\u540c"
		}
	};
	A.add({
		quick_micloud_contact: '<div class="disten30x103">              <h6>{title}</h6>              <div class="contacts_box">                <dl class="c_b">                  <dt>{contact_list}</dt>                  <dd><label class="input_bg"><input type="{inputType}" rule="{rule}" name="{inputName}" placeholder="{holder}"></label></dd>                </dl>                <div class="err_tip">                  <em class="icon_error"></em>                  <span class="verify-error-con"></span>                </div>                <div class="err_tip send_left_times">                </div>              </div>              <div class="txt_link">                <span class="verify-unavailable" style="display:none">                {unavailable}                </span>              </div>           </div>'
	});
	v[18] = {
		name: "Qucik Micloud Contact",
		listname: "\u9a8c\u8bc1\u540c\u6b65\u5230\u5c0f\u7c73\u4e91\u670d\u52a1\u7684\u8054\u7cfb\u4eba",
		listText: "",
		key: "QuickMicloudContact",
		url: "/auth/micloudContacts/quickVerify?_flag=262144",
		tpl: ["quick_micloud_contact", "btns", "bottom"],
		tpl_data: {
			title: "\u8bf7\u8f93\u5165\u4e00\u4e2a\u60a8\u5c0f\u7c73\u624b\u673a\u901a\u8baf\u5f55\u4fdd\u5b58\u7684\u8054\u7cfb\u4eba\u7684\u7535\u8bdd\u53f7\u7801",
			secTitle: "{QuickMicloud-secTitle}",
			inputType: "tel",
			inputName: "phone",
			rule: "\\+*\\d{4,20}",
			holder: "\u8bf7\u8f93\u5165\u7535\u8bdd\u53f7\u7801",
			ext_cls: "identitypwd",
			contact_list: "\u8054\u7cfb\u4eba\uff1a",
			unavailable: ""
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u7535\u8bdd\u53f7\u7801",
			RuleError: "\u53f7\u7801\u6709\u8bef\uff0c\u65e0\u6cd5\u901a\u8fc7\u9a8c\u8bc1",
			ResError: "\u53f7\u7801\u6709\u8bef\uff0c\u65e0\u6cd5\u901a\u8fc7\u9a8c\u8bc1",
			DuplicateError: "\u53f7\u7801\u6709\u8bef\uff0c\u65e0\u6cd5\u901a\u8fc7\u9a8c\u8bc1"
		}
	};
	v[22] = {
		name: "relatedPhone",
		listname: '\u901a\u8fc7\u624b\u673a\u53f7<em class="verify-list-masked"></em>\u63a5\u6536\u9a8c\u8bc1\u77ed\u4fe1',
		listText: "\u8be5\u624b\u673a\u53f7\u662f\u7cfb\u7edf\u5224\u5b9a\u7684\u53ef\u4fe1\u624b\u673a\u53f7",
		key: "relatedPhone",
		sendTicket: {
			autoSend: !0,
			url: "/auth/relatedPhone/sendPhoneTicket",
			contentType: 160032,
			type: "PH",
			sending: !1,
			hold: 0,
			leftTimes: 10,
			times: 0,
			leftTimesText: "\u60a8\u4eca\u5929\u8fd8\u80fd\u53d1\u9001{left}\u6761\u77ed\u4fe1",
			tips: "\u70b9\u51fb\u53d1\u9001\u77ed\u4fe1\u6309\u94ae\uff0c\u5c06\u4f1a\u53d1\u9001\u4e00\u6761\u6709\u9a8c\u8bc1\u7801\u7684\u77ed\u4fe1\u81f3\u624b\u673a",
			tipHeader: "\u4e3a\u4e86\u4fdd\u62a4\u5e10\u53f7\u5b89\u5168\uff0c\u9700\u8981\u9a8c\u8bc1\u624b\u673a\u6709\u6548\u6027",
			prompt: "",
			nochance: "\u60a8\u4eca\u5929\u5df2\u7ecf\u53d1\u9001\u592a\u591a\u77ed\u4fe1\uff0c\u8bf7\u6362\u4e2a\u65f6\u95f4\u6216\u6539\u7528\u5176\u4ed6\u9a8c\u8bc1\u65b9\u5f0f",
			send: "\u53d1\u9001\u77ed\u4fe1",
			sending_txt: "\u6b63\u5728\u53d1\u9001",
			resend: "\u91cd\u65b0\u53d1\u9001",
			resend_hold: "\u91cd\u65b0\u53d1\u9001{time}"
		},
		url: "/auth/relatedPhone/verify?_flag=4194304",
		tpl: ["input", "btns", "bottom"],
		tpl_data: {
			title: '\u8bf7\u4f7f\u7528\u624b\u673a<em class="ff6 verify-masked"></em>\u83b7\u53d6\u9a8c\u8bc1\u7801\u77ed\u4fe1',
			inputName: "ticket",
			inputType: "text",
			send: "\u53d1\u9001\u77ed\u4fe1",
			rule: "required",
			holder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
			unavailable: '<em class="acctip_icon icon_qst"></em>\u4e00\u76f4\u6536\u4e0d\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff1f<a target="_blank"  href="https://static.account.xiaomi.com/html/faq/faqSMSerror.html">\u67e5\u770b\u53ef\u80fd\u539f\u56e0</a>'
		},
		data: {
			EmptyError: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
			RuleError: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef",
			ResError: "\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"
		}
	};
	var Oa = null,
		I = null,
		H = null,
		n = null,
		W = null,
		S = {},
		x = null,
		B = {},
		Sa = [],
		ga = 0,
		X = !0,
		Ra = function() {
			var a = 0;
			return function() {
				return "VerifyKey" + a++
			}
		}(),
		Ba = {
			getiCode: function(a, b, c) {
				this.captchaBox || (this.captchaBox = this.initCaptchaContainer(T));
				this.show();
				this._callback = a;
				this._url = b;
				this.setCaptchaImg(b);
				a = this.els;
				c ? t(a.errorCon, c, a.input) : t(a.errorCon, "", a.input)
			},
			show: function() {
				u(W);
				k(H);
				k(n)
			},
			setCaptchaImg: function(a) {
				this.els.captchaImg.src = (a || "/pass/getCode?icodeType=login") + "&" + Math.random();
				this.els.input.value = ""
			},
			submit: function() {
				var a = this.els,
					b = aa(a.input.value);
				/^\w{4,8}$/.test(b) ? this._callback(b) : t(a.errorCon, T.ResError, a.input)
			},
			initCaptchaContainer: function(a) {
				var b = this,
					c = s.createElement("div");
				c.id = "verify-mod-" + a.key;
				a = ea(a);
				c.innerHTML = a;
				W.appendChild(c);
				var d = this.els = {};
				d.input = f(".captcha-input")[0];
				d.submitBtn = f(".btn-submit", c)[0];
				d.cancelBtn = f(".btn-cancel", c)[0];
				d.captchaBox = f(".captcha-box", c)[0];
				d.captchaImg = f(".captcha-image", c)[0];
				d.errorCon = f(".verify-error-con", c)[0];
				q(d.submitBtn, "click", function() {
					b.submit()
				});
				q(d.cancelBtn, "click", function() {
					b.close();
					b._callback(!1)
				});
				q(d.captchaImg, "click", function() {
					clearTimeout(b.captchaRefreshTc);
					b.captchaRefreshTc = setTimeout(function() {
						b.setCaptchaImg(b._url)
					}, 200)
				});
				sa(d.input, !0);
				q(d.input, "keyup", function(a) {
					a = parseInt(a.charCode) || a.keyCode;
					13 === a ? b.submit() : 8 === a && t(d.errorCon, "", d.input)
				});
				q(d.input, "input", function() {
					t(d.errorCon, "", d.input)
				});
				q(d.input, "propertychange", function() {
					t(d.errorCon, "", d.input)
				});
				return c
			},
			close: function() {
				k(W);
				u(H);
				k(n)
			}
		},
		h = {},
		la = {
			SUCCESS: 0,
			FAIL: 1
		},
		Ea = la.FAIL,
		F = function() {
			var a = {},
				b = [],
				c = "",
				d = null,
				e = 0,
				f = function() {
					var b = a[c];
					b && b.callback && b.callback();
					c = "";
					clearTimeout(d);
					d = null;
					g()
				},
				g = function() {
					if(!d) {
						var e = b.shift();
						if(e) {
							c = e;
							var e = ra(a[e].data),
								h = new Image;
							h.onload = h.oncomplete = h.onerror = f;
							h.src = "/pass/ajax/tick?biz=auth&" + e;
							d = setTimeout(function() {
								d = null;
								g()
							}, 1000)
						}
					}
				};
			return function(c, d) {
				c._t = (new Date).getTime();
				key = "sendStatus-" + e++;
				c = {
					key: key,
					data: c,
					callback: d
				};
				z.add(key, c);
				a[key] = c;
				b.push(key);
				g()
			}
		}();
	Ca.log = z;
	g.MiAccountVerification = Ca;
	ma && ma.loaded && ma.loaded()
})(window, document);