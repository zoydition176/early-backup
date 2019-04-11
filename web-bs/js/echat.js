; /*!visitor/common/lib/json3.js*/
(function() {
	function t(e, n) {
		function i(t) {
			if(i[t] !== d) return i[t];
			var e;
			if("bug-string-char-index" == t) e = "a" != "a" [0];
			else if("json" == t) e = i("json-stringify") && i("json-parse");
			else {
				var r, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
				if("json-stringify" == t) {
					var l = n.stringify,
						s = "function" == typeof l && C;
					if(s) {
						(r = function() {
							return 1
						}).toJSON = r;
						try {
							s = "0" === l(0) && "0" === l(new c) && '""' == l(new a) && l(v) === d && l(d) === d && l() === d && "1" === l(r) && "[1]" == l([r]) && "[null]" == l([d]) && "null" == l(null) && "[null,null,null]" == l([d, v, null]) && l({
								a: [r, !0, !1, null, "\x00\b\n\f\r	"]
							}) == o && "1" === l(null, r) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new f(-1))
						} catch(u) {
							s = !1
						}
					}
					e = s
				}
				if("json-parse" == t) {
					var h = n.parse;
					if("function" == typeof h) try {
						if(0 === h("0") && !h(!1)) {
							r = h(o);
							var p = 5 == r.a.length && 1 === r.a[0];
							if(p) {
								try {
									p = !h('"	"')
								} catch(u) {}
								if(p) try {
									p = 1 !== h("01")
								} catch(u) {}
								if(p) try {
									p = 1 !== h("1.")
								} catch(u) {}
							}
						}
					} catch(u) {
						p = !1
					}
					e = p
				}
			}
			return i[t] = !!e
		}
		e || (e = o.Object()), n || (n = o.Object());
		var c = e.Number || o.Number,
			a = e.String || o.String,
			l = e.Object || o.Object,
			f = e.Date || o.Date,
			s = e.SyntaxError || o.SyntaxError,
			u = e.TypeError || o.TypeError,
			h = e.Math || o.Math,
			p = e.JSON || o.JSON;
		"object" == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
		var g, y, d, b = l.prototype,
			v = b.toString,
			C = new f(-0xc782b5b800cec);
		try {
			C = -109252 == C.getUTCFullYear() && 0 === C.getUTCMonth() && 1 === C.getUTCDate() && 10 == C.getUTCHours() && 37 == C.getUTCMinutes() && 6 == C.getUTCSeconds() && 708 == C.getUTCMilliseconds()
		} catch(S) {}
		if(!i("json")) {
			var O = "[object Function]",
				j = "[object Date]",
				w = "[object Number]",
				T = "[object String]",
				A = "[object Array]",
				N = "[object Boolean]",
				_ = i("bug-string-char-index");
			if(!C) var J = h.floor,
				U = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
				x = function(t, e) {
					return U[e] + 365 * (t - 1970) + J((t - 1969 + (e = +(e > 1))) / 4) - J((t - 1901 + e) / 100) + J((t - 1601 + e) / 400)
				};
			if((g = b.hasOwnProperty) || (g = function(t) {
					var e, r = {};
					return(r.__proto__ = null, r.__proto__ = {
						toString: 1
					}, r).toString != v ? g = function(t) {
						var e = this.__proto__,
							r = t in (this.__proto__ = null, this);
						return this.__proto__ = e, r
					} : (e = r.constructor, g = function(t) {
						var r = (this.constructor || e).prototype;
						return t in this && !(t in r && this[t] === r[t])
					}), r = null, g.call(this, t)
				}), y = function(t, e) {
					var n, o, i, c = 0;
					(n = function() {
						this.valueOf = 0
					}).prototype.valueOf = 0, o = new n;
					for(i in o) g.call(o, i) && c++;
					return n = o = null, c ? y = 2 == c ? function(t, e) {
						var r, n = {},
							o = v.call(t) == O;
						for(r in t) o && "prototype" == r || g.call(n, r) || !(n[r] = 1) || !g.call(t, r) || e(r)
					} : function(t, e) {
						var r, n, o = v.call(t) == O;
						for(r in t) o && "prototype" == r || !g.call(t, r) || (n = "constructor" === r) || e(r);
						(n || g.call(t, r = "constructor")) && e(r)
					} : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function(t, e) {
						var n, i, c = v.call(t) == O,
							a = !c && "function" != typeof t.constructor && r[typeof t.hasOwnProperty] && t.hasOwnProperty || g;
						for(n in t) c && "prototype" == n || !a.call(t, n) || e(n);
						for(i = o.length; n = o[--i]; a.call(t, n) && e(n));
					}), y(t, e)
				}, !i("json-stringify")) {
				var m = {
						92: "\\\\",
						34: '\\"',
						8: "\\b",
						12: "\\f",
						10: "\\n",
						13: "\\r",
						9: "\\t"
					},
					M = "000000",
					k = function(t, e) {
						return(M + (e || 0)).slice(-t)
					},
					D = "\\u00",
					E = function(t) {
						for(var e = '"', r = 0, n = t.length, o = !_ || n > 10, i = o && (_ ? t.split("") : t); n > r; r++) {
							var c = t.charCodeAt(r);
							switch(c) {
								case 8:
								case 9:
								case 10:
								case 12:
								case 13:
								case 34:
								case 92:
									e += m[c];
									break;
								default:
									if(32 > c) {
										e += D + k(2, c.toString(16));
										break
									}
									e += o ? i[r] : t.charAt(r)
							}
						}
						return e + '"'
					},
					P = function(t, e, r, n, o, i, c) {
						var a, l, f, s, h, p, b, C, S, O, _, U, m, M, D, Z;
						try {
							a = e[t]
						} catch(F) {}
						if("object" == typeof a && a)
							if(l = v.call(a), l != j || g.call(a, "toJSON")) "function" == typeof a.toJSON && (l != w && l != T && l != A || g.call(a, "toJSON")) && (a = a.toJSON(t));
							else if(a > -1 / 0 && 1 / 0 > a) {
							if(x) {
								for(h = J(a / 864e5), f = J(h / 365.2425) + 1970 - 1; x(f + 1, 0) <= h; f++);
								for(s = J((h - x(f, 0)) / 30.42); x(f, s + 1) <= h; s++);
								h = 1 + h - x(f, s), p = (a % 864e5 + 864e5) % 864e5, b = J(p / 36e5) % 24, C = J(p / 6e4) % 60, S = J(p / 1e3) % 60, O = p % 1e3
							} else f = a.getUTCFullYear(), s = a.getUTCMonth(), h = a.getUTCDate(), b = a.getUTCHours(), C = a.getUTCMinutes(), S = a.getUTCSeconds(), O = a.getUTCMilliseconds();
							a = (0 >= f || f >= 1e4 ? (0 > f ? "-" : "+") + k(6, 0 > f ? -f : f) : k(4, f)) + "-" + k(2, s + 1) + "-" + k(2, h) + "T" + k(2, b) + ":" + k(2, C) + ":" + k(2, S) + "." + k(3, O) + "Z"
						} else a = null;
						if(r && (a = r.call(e, t, a)), null === a) return "null";
						if(l = v.call(a), l == N) return "" + a;
						if(l == w) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
						if(l == T) return E("" + a);
						if("object" == typeof a) {
							for(M = c.length; M--;)
								if(c[M] === a) throw u();
							if(c.push(a), _ = [], D = i, i += o, l == A) {
								for(m = 0, M = a.length; M > m; m++) U = P(m, a, r, n, o, i, c), _.push(U === d ? "null" : U);
								Z = _.length ? o ? "[\n" + i + _.join(",\n" + i) + "\n" + D + "]" : "[" + _.join(",") + "]" : "[]"
							} else y(n || a, function(t) {
								var e = P(t, a, r, n, o, i, c);
								e !== d && _.push(E(t) + ":" + (o ? " " : "") + e)
							}), Z = _.length ? o ? "{\n" + i + _.join(",\n" + i) + "\n" + D + "}" : "{" + _.join(",") + "}" : "{}";
							return c.pop(), Z
						}
					};
				n.stringify = function(t, e, n) {
					var o, i, c, a;
					if(r[typeof e] && e)
						if((a = v.call(e)) == O) i = e;
						else if(a == A) {
						c = {};
						for(var l, f = 0, s = e.length; s > f; l = e[f++], a = v.call(l), (a == T || a == w) && (c[l] = 1));
					}
					if(n)
						if((a = v.call(n)) == w) {
							if((n -= n % 1) > 0)
								for(o = "", n > 10 && (n = 10); o.length < n; o += " ");
						} else a == T && (o = n.length <= 10 ? n : n.slice(0, 10));
					return P("", (l = {}, l[""] = t, l), i, c, o, "", [])
				}
			}
			if(!i("json-parse")) {
				var Z, F, $ = a.fromCharCode,
					H = {
						92: "\\",
						34: '"',
						47: "/",
						98: "\b",
						116: "	",
						110: "\n",
						102: "\f",
						114: "\r"
					},
					I = function() {
						throw Z = F = null, s()
					},
					Y = function() {
						for(var t, e, r, n, o, i = F, c = i.length; c > Z;) switch(o = i.charCodeAt(Z)) {
							case 9:
							case 10:
							case 13:
							case 32:
								Z++;
								break;
							case 123:
							case 125:
							case 91:
							case 93:
							case 58:
							case 44:
								return t = _ ? i.charAt(Z) : i[Z], Z++, t;
							case 34:
								for(t = "@", Z++; c > Z;)
									if(o = i.charCodeAt(Z), 32 > o) I();
									else if(92 == o) switch(o = i.charCodeAt(++Z)) {
									case 92:
									case 34:
									case 47:
									case 98:
									case 116:
									case 110:
									case 102:
									case 114:
										t += H[o], Z++;
										break;
									case 117:
										for(e = ++Z, r = Z + 4; r > Z; Z++) o = i.charCodeAt(Z), o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || I();
										t += $("0x" + i.slice(e, Z));
										break;
									default:
										I()
								} else {
									if(34 == o) break;
									for(o = i.charCodeAt(Z), e = Z; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++Z);
									t += i.slice(e, Z)
								}
								if(34 == i.charCodeAt(Z)) return Z++, t;
								I();
							default:
								if(e = Z, 45 == o && (n = !0, o = i.charCodeAt(++Z)), o >= 48 && 57 >= o) {
									for(48 == o && (o = i.charCodeAt(Z + 1), o >= 48 && 57 >= o) && I(), n = !1; c > Z && (o = i.charCodeAt(Z), o >= 48 && 57 >= o); Z++);
									if(46 == i.charCodeAt(Z)) {
										for(r = ++Z; c > r && (o = i.charCodeAt(r), o >= 48 && 57 >= o); r++);
										r == Z && I(), Z = r
									}
									if(o = i.charCodeAt(Z), 101 == o || 69 == o) {
										for(o = i.charCodeAt(++Z), (43 == o || 45 == o) && Z++, r = Z; c > r && (o = i.charCodeAt(r), o >= 48 && 57 >= o); r++);
										r == Z && I(), Z = r
									}
									return +i.slice(e, Z)
								}
								if(n && I(), "true" == i.slice(Z, Z + 4)) return Z += 4, !0;
								if("false" == i.slice(Z, Z + 5)) return Z += 5, !1;
								if("null" == i.slice(Z, Z + 4)) return Z += 4, null;
								I()
						}
						return "$"
					},
					B = function(t) {
						var e, r;
						if("$" == t && I(), "string" == typeof t) {
							if("@" == (_ ? t.charAt(0) : t[0])) return t.slice(1);
							if("[" == t) {
								for(e = []; t = Y(), "]" != t; r || (r = !0)) r && ("," == t ? (t = Y(), "]" == t && I()) : I()), "," == t && I(), e.push(B(t));
								return e
							}
							if("{" == t) {
								for(e = {}; t = Y(), "}" != t; r || (r = !0)) r && ("," == t ? (t = Y(), "}" == t && I()) : I()), ("," == t || "string" != typeof t || "@" != (_ ? t.charAt(0) : t[0]) || ":" != Y()) && I(), e[t.slice(1)] = B(Y());
								return e
							}
							I()
						}
						return t
					},
					L = function(t, e, r) {
						var n = q(t, e, r);
						n === d ? delete t[e] : t[e] = n
					},
					q = function(t, e, r) {
						var n, o = t[e];
						if("object" == typeof o && o)
							if(v.call(o) == A)
								for(n = o.length; n--;) L(o, n, r);
							else y(o, function(t) {
								L(o, t, r)
							});
						return r.call(t, e, o)
					};
				n.parse = function(t, e) {
					var r, n;
					return Z = 0, F = "" + t, r = B(Y()), "$" != Y() && I(), Z = F = null, e && v.call(e) == O ? q((n = {}, n[""] = r, n), "", e) : r
				}
			}
		}
		return n.runInContext = t, n
	}
	var e = "function" == typeof define && define.amd,
		r = {
			"function": !0,
			object: !0
		},
		n = r[typeof exports] && exports && !exports.nodeType && exports,
		o = r[typeof window] && window || this,
		i = n && r[typeof module] && module && !module.nodeType && "object" == typeof global && global;
	if(o && (!i || i.global !== i && i.window !== i && i.self !== i || (o = i)), n && !e) t(o, n);
	else {
		var c = o.JSON,
			a = o.JSON3,
			l = !1,
			f = t(o, o.JSON3 = {
				noConflict: function() {
					return l || (l = !0, o.JSON = c, o.JSON3 = a, c = a = null), f
				}
			});
		o.JSON ? (o.JSON.parse || (o.JSON.parse = f.parse), o.JSON.stringify || (o.JSON.stringify = f.stringify)) : o.JSON = {
			parse: f.parse,
			stringify: f.stringify
		}
	}
}).call(this);; /*!visitor/common/js/cometd.js*/
(function() {
	this.org = this.org || {}, org.cometd = {}, org.cometd.JSON = {}, org.cometd.JSON.toJSON = org.cometd.JSON.fromJSON = function() {
		throw "Abstract"
	}, org.cometd.Utils = {}, org.cometd.Utils.isString = function(e) {
		return void 0 === e || null === e ? !1 : "string" == typeof e || e instanceof String
	}, org.cometd.Utils.isArray = function(e) {
		return void 0 === e || null === e ? !1 : e instanceof Array
	}, org.cometd.Utils.inArray = function(e, t) {
		for(var n = 0; n < t.length; ++n)
			if(e === t[n]) return n;
		return -1
	}, org.cometd.Utils.setTimeout = function(e, t, n) {
		return window.setTimeout(function() {
			try {
				e._debug("Invoking timed function", t), t()
			} catch(n) {
				e._debug("Exception invoking timed function", t, n)
			}
		}, n)
	}, org.cometd.Utils.clearTimeout = function(e) {
		window.clearTimeout(e)
	}, org.cometd.TransportRegistry = function() {
		var e = [],
			t = {};
		this.getTransportTypes = function() {
			return e.slice(0)
		}, this.findTransportTypes = function(n, r, i) {
			for(var o = [], s = 0; s < e.length; ++s) {
				var a = e[s];
				t[a].accept(n, r, i) === !0 && o.push(a)
			}
			return o
		}, this.negotiateTransport = function(n, r, i, o) {
			for(var s = 0; s < e.length; ++s)
				for(var a = e[s], c = 0; c < n.length; ++c)
					if(a === n[c]) {
						var u = t[a];
						if(u.accept(r, i, o) === !0) return u
					}
			return null
		}, this.add = function(n, r, i) {
			for(var o = !1, s = 0; s < e.length; ++s)
				if(e[s] === n) {
					o = !0;
					break
				}
			return o || ("number" != typeof i ? e.push(n) : e.splice(i, 0, n), t[n] = r), !o
		}, this.find = function(n) {
			for(var r = 0; r < e.length; ++r)
				if(e[r] === n) return t[n];
			return null
		}, this.remove = function(n) {
			for(var r = 0; r < e.length; ++r)
				if(e[r] === n) {
					e.splice(r, 1);
					var i = t[n];
					return delete t[n], i
				}
			return null
		}, this.clear = function() {
			e = [], t = {}
		}, this.reset = function() {
			for(var n = 0; n < e.length; ++n) t[e[n]].reset()
		}
	}, org.cometd.Transport = function() {
		var e, t;
		this.registered = function(n, r) {
			e = n, t = r
		}, this.unregistered = function() {
			e = null, t = null
		}, this._debug = function() {
			t._debug.apply(t, arguments)
		}, this._mixin = function() {
			return t._mixin.apply(t, arguments)
		}, this.getConfiguration = function() {
			return t.getConfiguration()
		}, this.getAdvice = function() {
			return t.getAdvice()
		}, this.setTimeout = function(e, n) {
			return org.cometd.Utils.setTimeout(t, e, n)
		}, this.clearTimeout = function(e) {
			org.cometd.Utils.clearTimeout(e)
		}, this.convertToMessages = function(e) {
			if(org.cometd.Utils.isString(e)) try {
				return org.cometd.JSON.fromJSON(e)
			} catch(t) {
				throw this._debug("Could not convert to JSON the following string", '"' + e + '"'), t
			}
			if(org.cometd.Utils.isArray(e)) return e;
			if(void 0 === e || null === e) return [];
			if(e instanceof Object) return [e];
			throw "Conversion Error " + e + ", typeof " + typeof e
		}, this.accept = function() {
			throw "Abstract"
		}, this.getType = function() {
			return e
		}, this.send = function() {
			throw "Abstract"
		}, this.reset = function() {
			this._debug("Transport", e, "reset")
		}, this.abort = function() {
			this._debug("Transport", e, "aborted")
		}, this.toString = function() {
			return this.getType()
		}
	}, org.cometd.Transport.derive = function(e) {
		function t() {}
		return t.prototype = e, new t
	}, org.cometd.RequestTransport = function() {
		function e(e) {
			for(; g.length > 0;) {
				var t = g[0],
					n = t[0],
					r = t[1];
				if(n.url !== e.url || n.sync !== e.sync) break;
				g.shift(), e.messages = e.messages.concat(n.messages), this._debug("Coalesced", n.messages.length, "messages from request", r.id)
			}
		}

		function t(e, t) {
			if(this.transportSend(e, t), t.expired = !1, !e.sync) {
				var n = this.getConfiguration().maxNetworkDelay,
					r = n;
				t.metaConnect === !0 && (r += this.getAdvice().timeout), this._debug("Transport", this.getType(), "waiting at most", r, "ms for the response, maxNetworkDelay", n);
				var i = this;
				t.timeout = this.setTimeout(function() {
					t.expired = !0;
					var n = "Request " + t.id + " of transport " + i.getType() + " exceeded " + r + " ms max network delay",
						o = {
							reason: n
						},
						s = t.xhr;
					o.httpCode = i.xhrStatus(s), i.abortXHR(s), i._debug(n), i.complete(t, !1, t.metaConnect), e.onFailure(s, e.messages, o)
				}, r)
			}
		}

		function n(e) {
			var n = ++c,
				r = {
					id: n,
					metaConnect: !1,
					envelope: e
				};
			l.length < this.getConfiguration().maxConnections - 1 ? (l.push(r), t.call(this, e, r)) : (this._debug("Transport", this.getType(), "queueing request", n, "envelope", e), g.push([e, r]))
		}

		function r(e) {
			var t = e.id;
			if(this._debug("Transport", this.getType(), "metaConnect complete, request", t), null !== u && u.id !== t) throw "Longpoll request mismatch, completing request " + t;
			u = null
		}

		function i(t, r) {
			var i = org.cometd.Utils.inArray(t, l);
			if(i >= 0 && l.splice(i, 1), g.length > 0) {
				var o = g.shift(),
					s = o[0],
					a = o[1];
				if(this._debug("Transport dequeued request", a.id), r) this.getConfiguration().autoBatch && e.call(this, s), n.call(this, s), this._debug("Transport completed request", t.id, s);
				else {
					var c = this;
					this.setTimeout(function() {
						c.complete(a, !1, a.metaConnect);
						var e = {
								reason: "Previous request failed"
							},
							t = a.xhr;
						e.httpCode = c.xhrStatus(t), s.onFailure(t, s.messages, e)
					}, 0)
				}
			}
		}

		function o(e) {
			if(null !== u) throw "Concurrent metaConnect requests not allowed, request id=" + u.id + " not yet completed";
			var n = ++c;
			this._debug("Transport", this.getType(), "metaConnect send, request", n, "envelope", e);
			var r = {
				id: n,
				metaConnect: !0,
				envelope: e
			};
			t.call(this, e, r), u = r
		}
		var s = new org.cometd.Transport,
			a = org.cometd.Transport.derive(s),
			c = 0,
			u = null,
			l = [],
			g = [];
		return a.complete = function(e, t, n) {
			n ? r.call(this, e) : i.call(this, e, t)
		}, a.transportSend = function() {
			throw "Abstract"
		}, a.transportSuccess = function(e, t, n) {
			t.expired || (this.clearTimeout(t.timeout), this.complete(t, !0, t.metaConnect), n && n.length > 0 ? e.onSuccess(n) : e.onFailure(t.xhr, e.messages, {
				httpCode: 204
			}))
		}, a.transportFailure = function(e, t, n) {
			t.expired || (this.clearTimeout(t.timeout), this.complete(t, !1, t.metaConnect), e.onFailure(t.xhr, e.messages, n))
		}, a.send = function(e, t) {
			t ? o.call(this, e) : n.call(this, e)
		}, a.abort = function() {
			s.abort();
			for(var e = 0; e < l.length; ++e) {
				var t = l[e];
				t && (this._debug("Aborting request", t), this.abortXHR(t.xhr) || this.transportFailure(t.envelope, t, {
					reason: "abort"
				}))
			}
			u && (this._debug("Aborting metaConnect request", u), this.abortXHR(u.xhr) || this.transportFailure(u.envelope, u, {
				reason: "abort"
			})), this.reset()
		}, a.reset = function() {
			s.reset(), u = null, l = [], g = []
		}, a.abortXHR = function(e) {
			if(e) try {
				var t = e.readyState;
				return e.abort(), t !== XMLHttpRequest.UNSENT
			} catch(n) {
				this._debug(n)
			}
			return !1
		}, a.xhrStatus = function(e) {
			if(e) try {
				return e.status
			} catch(t) {
				this._debug(t)
			}
			return -1
		}, a
	}, org.cometd.LongPollingTransport = function() {
		var e = new org.cometd.RequestTransport,
			t = org.cometd.Transport.derive(e),
			n = !0;
		return t.accept = function(e, t) {
			return n || !t
		}, t.xhrSend = function() {
			throw "Abstract"
		}, t.transportSend = function(e, t) {
			this._debug("Transport", this.getType(), "sending request", t.id, "envelope", e);
			var r = this;
			try {
				var i = !0;
				t.xhr = this.xhrSend({
					transport: this,
					url: e.url,
					sync: e.sync,
					headers: this.getConfiguration().requestHeaders,
					body: org.cometd.JSON.toJSON(e.messages),
					onSuccess: function(i) {
						r._debug("Transport", r.getType(), "received response", i);
						var o = !1;
						try {
							var s = r.convertToMessages(i);
							0 === s.length ? (n = !1, r.transportFailure(e, t, {
								httpCode: 204
							})) : (o = !0, r.transportSuccess(e, t, s))
						} catch(a) {
							if(r._debug(a), !o) {
								n = !1;
								var c = {
									exception: a
								};
								c.httpCode = r.xhrStatus(t.xhr), r.transportFailure(e, t, c)
							}
						}
					},
					onError: function(o, s) {
						r._debug("Transport", r.getType(), "received error", o, s), n = !1;
						var a = {
							reason: o,
							exception: s
						};
						a.httpCode = r.xhrStatus(t.xhr), i ? r.setTimeout(function() {
							r.transportFailure(e, t, a)
						}, 0) : r.transportFailure(e, t, a)
					}
				}), i = !1
			} catch(o) {
				n = !1, this.setTimeout(function() {
					r.transportFailure(e, t, {
						exception: o
					})
				}, 0)
			}
		}, t.reset = function() {
			e.reset(), n = !0
		}, t
	}, org.cometd.CallbackPollingTransport = function() {
		function e(e, t, n) {
			var r = this;
			return function() {
				r.transportFailure(e, t, "error", n)
			}
		}
		var t = new org.cometd.RequestTransport,
			n = org.cometd.Transport.derive(t),
			r = 2e3;
		return n.accept = function() {
			return !0
		}, n.jsonpSend = function() {
			throw "Abstract"
		}, n.transportSend = function(t, n) {
			for(var i = this, o = 0, s = t.messages.length, a = []; s > 0;) {
				var c = org.cometd.JSON.toJSON(t.messages.slice(o, o + s)),
					u = t.url.length + encodeURI(c).length;
				if(u > r) {
					if(1 === s) {
						var l = "Bayeux message too big (" + u + " bytes, max is " + r + ") for transport " + this.getType();
						return void this.setTimeout(e.call(this, t, n, l), 0)
					}--s
				} else a.push(s), o += s, s = t.messages.length - o
			}
			var g = t;
			if(a.length > 1) {
				var d = 0,
					h = a[0];
				this._debug("Transport", this.getType(), "split", t.messages.length, "messages into", a.join(" + ")), g = this._mixin(!1, {}, t), g.messages = t.messages.slice(d, h), g.onSuccess = t.onSuccess, g.onFailure = t.onFailure;
				for(var f = 1; f < a.length; ++f) {
					var p = this._mixin(!1, {}, t);
					d = h, h += a[f], p.messages = t.messages.slice(d, h), p.onSuccess = t.onSuccess, p.onFailure = t.onFailure, this.send(p, n.metaConnect)
				}
			}
			this._debug("Transport", this.getType(), "sending request", n.id, "envelope", g);
			try {
				var m = !0;
				this.jsonpSend({
					transport: this,
					url: g.url,
					sync: g.sync,
					headers: this.getConfiguration().requestHeaders,
					body: org.cometd.JSON.toJSON(g.messages),
					onSuccess: function(e) {
						var t = !1;
						try {
							var r = i.convertToMessages(e);
							0 === r.length ? i.transportFailure(g, n, {
								httpCode: 204
							}) : (t = !0, i.transportSuccess(g, n, r))
						} catch(o) {
							i._debug(o), t || i.transportFailure(g, n, {
								exception: o
							})
						}
					},
					onError: function(e, t) {
						var r = {
							reason: e,
							exception: t
						};
						m ? i.setTimeout(function() {
							i.transportFailure(g, n, r)
						}, 0) : i.transportFailure(g, n, r)
					}
				}), m = !1
			} catch(v) {
				this.setTimeout(function() {
					i.transportFailure(g, n, {
						exception: v
					})
				}, 0)
			}
		}, n
	}, org.cometd.WebSocketTransport = function() {
		function e() {
			if(!g) {
				g = !0;
				var e = r.getURL().replace(/^http/, "ws");
				this._debug("Transport", this.getType(), "connecting to URL", e);
				var t;
				try {
					var n = r.getConfiguration().protocol;
					t = n ? new org.cometd.WebSocket(e, n) : new org.cometd.WebSocket(e)
				} catch(i) {
					throw s = !1, this._debug("Exception while creating WebSocket object", i), i
				}
				c = r.getConfiguration().stickyReconnect !== !1;
				var o = this,
					a = null,
					u = r.getConfiguration().connectTimeout;
				u > 0 && (a = this.setTimeout(function() {
					a = null, o._debug("Transport", o.getType(), "timed out while connecting to URL", e, ":", u, "ms");
					var n = {
						code: 1e3,
						reason: "Connect Timeout"
					};
					o.webSocketClose(t, n.code, n.reason), o.onClose(t, n)
				}, u));
				var l = function() {
						o._debug("WebSocket opened", t), g = !1, a && (o.clearTimeout(a), a = null), d ? (r._warn("Closing Extra WebSocket Connections", t, d), o.webSocketClose(t, 1e3, "Extra Connection")) : o.onOpen(t)
					},
					h = function(e) {
						e = e || {
							code: 1e3
						}, o._debug("WebSocket closing", t, e), g = !1, a && (o.clearTimeout(a), a = null), null !== d && t !== d ? o._debug("Closed Extra WebSocket Connection", t) : o.onClose(t, e)
					},
					f = function(e) {
						o._debug("WebSocket message", e, t), t !== d && r._warn("Extra WebSocket Connections", t, d), o.onMessage(t, e)
					};
				t.onopen = l, t.onclose = h, t.onerror = function() {
					h({
						code: 1002,
						reason: "Error"
					})
				}, t.onmessage = f, this._debug("Transport", this.getType(), "configured callbacks on", t)
			}
		}

		function t(e, t, n) {
			var r = org.cometd.JSON.toJSON(t.messages);
			e.send(r), this._debug("Transport", this.getType(), "sent", t, "metaConnect =", n);
			var i = this.getConfiguration().maxNetworkDelay,
				o = i;
			n && (o += this.getAdvice().timeout, h = !0);
			for(var s = this, a = [], c = 0; c < t.messages.length; ++c) ! function() {
				var n = t.messages[c];
				n.id && (a.push(n.id), l[n.id] = this.setTimeout(function() {
					s._debug("Transport", s.getType(), "timing out message", n.id, "after", o, "on", e);
					var t = {
						code: 1e3,
						reason: "Message Timeout"
					};
					s.webSocketClose(e, t.code, t.reason), s.onClose(e, t)
				}, o))
			}();
			this._debug("Transport", this.getType(), "waiting at most", o, "ms for messages", a, "maxNetworkDelay", i, ", timeouts:", l)
		}

		function n(n, r, i) {
			try {
				null === n ? e.call(this) : t.call(this, n, r, i)
			} catch(o) {
				this.setTimeout(function() {
					r.onFailure(n, r.messages, {
						exception: o
					})
				}, 0)
			}
		}
		var r, i = new org.cometd.Transport,
			o = org.cometd.Transport.derive(i),
			s = !0,
			a = !1,
			c = !0,
			u = {},
			l = {},
			g = !1,
			d = null,
			h = !1,
			f = null;
		return o.reset = function() {
			i.reset(), s = !0, a = !1, c = !0, u = {}, l = {}, g = !1, h = !1
		}, o.onOpen = function(e) {
			this._debug("Transport", this.getType(), "opened", e), d = e, a = !0, this._debug("Sending pending messages", u);
			for(var n in u) {
				var r = u[n],
					i = r[0];
				if(i) {
					var o = r[1];
					f = i.onSuccess, t.call(this, e, i, o)
				}
			}
		}, o.onMessage = function(e, t) {
			this._debug("Transport", this.getType(), "received websocket message", t, e);
			for(var n = !1, r = this.convertToMessages(t.data), i = [], o = 0; o < r.length; ++o) {
				var s = r[o];
				if((/^\/meta\//.test(s.channel) || void 0 === s.data) && s.id) {
					i.push(s.id);
					var a = l[s.id];
					a && (this.clearTimeout(a), delete l[s.id], this._debug("Transport", this.getType(), "removed timeout for message", s.id, ", timeouts", l))
				}
				"/meta/connect" === s.channel && (h = !1), "/meta/disconnect" !== s.channel || h || (n = !0)
			}
			for(var c = !1, g = 0; g < i.length; ++g) {
				var d = i[g];
				for(var p in u) {
					var m = p.split(","),
						v = org.cometd.Utils.inArray(d, m);
					if(v >= 0) {
						c = !0, m.splice(v, 1);
						var b = u[p][0],
							T = u[p][1];
						delete u[p], m.length > 0 && (u[m.join(",")] = [b, T]);
						break
					}
				}
			}
			c && this._debug("Transport", this.getType(), "removed envelope, envelopes", u), f.call(this, r), n && this.webSocketClose(e, 1e3, "Disconnect")
		}, o.onClose = function(e, t) {
			this._debug("Transport", this.getType(), "closed", e, t), s = c && a;
			var n = l;
			l = {};
			for(var r in n) this.clearTimeout(n[r]);
			var i = u;
			u = {};
			for(var o in i) {
				var g = i[o][0],
					f = i[o][1];
				f && (h = !1), g.onFailure(e, g.messages, {
					websocketCode: t.code,
					reason: t.reason
				})
			}
			d = null
		}, o.registered = function(e, t) {
			i.registered(e, t), r = t
		}, o.accept = function() {
			return s && !!org.cometd.WebSocket && r.websocketEnabled !== !1
		}, o.send = function(e, t) {
			this._debug("Transport", this.getType(), "sending", e, "metaConnect =", t);
			for(var r = [], i = 0; i < e.messages.length; ++i) {
				var o = e.messages[i];
				o.id && r.push(o.id)
			}
			u[r.join(",")] = [e, t], this._debug("Transport", this.getType(), "stored envelope, envelopes", u), n.call(this, d, e, t)
		}, o.webSocketClose = function(e, t, n) {
			try {
				e.close(t, n)
			} catch(r) {
				this._debug(r)
			}
		}, o.abort = function() {
			if(i.abort(), d) {
				var e = {
					code: 1001,
					reason: "Abort"
				};
				this.webSocketClose(d, e.code, e.reason), this.onClose(d, e)
			}
			this.reset()
		}, o
	}, org.cometd.CometD = function(e) {
		function t(e, t) {
			try {
				return e[t]
			} catch(n) {
				return void 0
			}
		}

		function n(e) {
			return org.cometd.Utils.isString(e)
		}

		function r(e) {
			return void 0 === e || null === e ? !1 : "function" == typeof e
		}

		function i(e, t) {
			for(var n = ""; --t > 0 && !(e >= Math.pow(10, t));) n += "0";
			return n += e
		}

		function o(e, t) {
			if(window.console) {
				var n = window.console[e];
				if(r(n)) {
					var o = new Date;
					[].splice.call(t, 0, 0, i(o.getHours(), 2) + ":" + i(o.getMinutes(), 2) + ":" + i(o.getSeconds(), 2) + "." + i(o.getMilliseconds(), 3)), n.apply(window.console, t)
				}
			}
		}

		function s(e) {
			ct._debug("Configuring cometd object with", e), n(e) && (e = {
				url: e
			}), e || (e = {}), Ut = ct._mixin(!1, Ut, e);
			var t = ct.getURL();
			if(!t) throw "Missing required configuration parameter 'url' specifying the Bayeux server URL";
			var r = /(^https?:\/\/)?(((\[[^\]]+\])|([^:\/\?#]+))(:(\d+))?)?([^\?#]*)(.*)?/.exec(t),
				i = r[2],
				o = r[8],
				s = r[9];
			if(lt = ct._isCrossDomain(i), Ut.appendMessageTypeToURL)
				if(void 0 !== s && s.length > 0) ct._info("Appending message type to URI " + o + s + " is not supported, disabling 'appendMessageTypeToURL' configuration"), Ut.appendMessageTypeToURL = !1;
				else {
					var a = o.split("/"),
						c = a.length - 1;
					o.match(/\/$/) && (c -= 1), a[c].indexOf(".") >= 0 && (ct._info("Appending message type to URI " + o + " is not supported, disabling 'appendMessageTypeToURL' configuration"), Ut.appendMessageTypeToURL = !1)
				}
		}

		function a(e) {
			if(e) {
				var t = bt[e.channel];
				t && t[e.id] && (delete t[e.id], ct._debug("Removed", e.listener ? "listener" : "subscription", e))
			}
		}

		function c(e) {
			e && !e.listener && a(e)
		}

		function u() {
			for(var e in bt) {
				var t = bt[e];
				if(t)
					for(var n = 0; n < t.length; ++n) c(t[n])
			}
		}

		function l(e) {
			dt !== e && (ct._debug("Status", dt, "->", e), dt = e)
		}

		function g() {
			return "disconnecting" === dt || "disconnected" === dt
		}

		function d() {
			var e = ++ht;
			return "" + e
		}

		function h(e, t, n, i, o) {
			try {
				return t.call(e, i)
			} catch(s) {
				var a = ct.onExtensionException;
				if(r(a)) {
					ct._debug("Invoking extension exception handler", n, s);
					try {
						a.call(ct, s, n, o, i)
					} catch(c) {
						ct._info("Exception during execution of extension exception handler", n, c)
					}
				} else ct._info("Exception during execution of extension", n, s);
				return i
			}
		}

		function f(e) {
			for(var t = 0; t < _t.length && (void 0 !== e && null !== e); ++t) {
				var n = Ut.reverseIncomingExtensions ? _t.length - 1 - t : t,
					i = _t[n],
					o = i.extension.incoming;
				if(r(o)) {
					var s = h(i.extension, o, i.name, e, !1);
					e = void 0 === s ? e : s
				}
			}
			return e
		}

		function p(e) {
			for(var t = 0; t < _t.length && (void 0 !== e && null !== e); ++t) {
				var n = _t[t],
					i = n.extension.outgoing;
				if(r(i)) {
					var o = h(n.extension, i, n.name, e, !0);
					e = void 0 === o ? e : o
				}
			}
			return e
		}

		function m(e, t) {
			var n = bt[e];
			if(n && n.length > 0)
				for(var i = 0; i < n.length; ++i) {
					var o = n[i];
					if(o) try {
						o.callback.call(o.scope, t)
					} catch(s) {
						var a = ct.onListenerException;
						if(r(a)) {
							ct._debug("Invoking listener exception handler", o, s);
							try {
								a.call(ct, s, o, o.listener, t)
							} catch(c) {
								ct._info("Exception during execution of listener exception handler", o, c)
							}
						} else ct._info("Exception during execution of listener", o, t, s)
					}
				}
		}

		function v(e, t) {
			m(e, t);
			for(var n = e.split("/"), r = n.length - 1, i = r; i > 0; --i) {
				var o = n.slice(0, i).join("/") + "/*";
				i === r && m(o, t), o += "*", m(o, t)
			}
		}

		function b() {
			null !== yt && org.cometd.Utils.clearTimeout(yt), yt = null
		}

		function T(e) {
			b();
			var t = xt.interval + Tt;
			ct._debug("Function scheduled in", t, "ms, interval =", xt.interval, "backoff =", Tt, e), yt = org.cometd.Utils.setTimeout(ct, e, t)
		}

		function y(e, t, n, r) {
			for(var i = 0; i < t.length; ++i) {
				var o = t[i],
					s = o.id;
				ft && (o.clientId = ft), o = p(o), void 0 !== o && null !== o ? (o.id = s, t[i] = o) : (delete wt[s], t.splice(i--, 1))
			}
			if(0 !== t.length) {
				var a = ct.getURL();
				Ut.appendMessageTypeToURL && (a.match(/\/$/) || (a += "/"), r && (a += r));
				var c = {
					url: a,
					sync: e,
					messages: t,
					onSuccess: function(e) {
						try {
							It.call(ct, e)
						} catch(t) {
							ct._info("Exception during handling of messages", t)
						}
					},
					onFailure: function(e, t, n) {
						try {
							var r = ct.getTransport();
							n.connectionType = r ? r.getType() : "unknown", Rt.call(ct, e, t, n)
						} catch(i) {
							ct._info("Exception during handling of failure", i)
						}
					}
				};
				ct._debug("Send", c), ot.send(c, n)
			}
		}

		function _(e) {
			pt > 0 || vt === !0 ? mt.push(e) : y(!1, [e], !1)
		}

		function x() {
			Tt = 0
		}

		function w() {
			Tt < Ut.maxBackoff && (Tt += Ut.backoffIncrement)
		}

		function k() {
			++pt, ct._debug("Starting batch, depth", pt)
		}

		function C() {
			var e = mt;
			mt = [], e.length > 0 && y(!1, e, !1)
		}

		function S() {
			if(--pt, ct._debug("Ending batch, depth", pt), 0 > pt) throw "Calls to startBatch() and endBatch() are not paired";
			0 !== pt || g() || vt || C()
		}

		function U() {
			if(!g()) {
				var e = {
					id: d(),
					channel: "/meta/connect",
					connectionType: ot.getType()
				};
				St || (e.advice = {
					timeout: 0
				}), l("connecting"), ct._debug("Connect sent", e), y(!1, [e], !0, "connect"), l("connected")
			}
		}

		function I() {
			l("connecting"), T(function() {
				U()
			})
		}

		function R(e) {
			e && (xt = ct._mixin(!1, {}, Ut.advice, e), ct._debug("New advice", xt))
		}

		function E(e) {
			if(b(), e && ot && ot.abort(), ft = null, l("disconnected"), pt = 0, x(), ot = null, mt.length > 0) {
				var t = mt;
				mt = [], Rt.call(ct, void 0, t, {
					reason: "Disconnected"
				})
			}
		}

		function q(e, t, n) {
			var i = ct.onTransportException;
			if(r(i)) {
				ct._debug("Invoking transport exception handler", e, t, n);
				try {
					i.call(ct, n, e, t)
				} catch(o) {
					ct._info("Exception during execution of transport exception handler", o)
				}
			}
		}

		function L(e, t) {
			r(e) && (t = e, e = void 0), ft = null, u(), g() ? (gt.reset(), R(Ut.advice)) : R(ct._mixin(!1, xt, {
				reconnect: "retry"
			})), pt = 0, vt = !0, st = e, at = t;
			var n = "1.0",
				i = ct.getURL(),
				o = gt.findTransportTypes(n, lt, i),
				s = {
					id: d(),
					version: n,
					minimumVersion: n,
					channel: "/meta/handshake",
					supportedConnectionTypes: o,
					advice: {
						timeout: xt.timeout,
						interval: xt.interval
					}
				},
				a = ct._mixin(!1, {}, st, s);
			if(ct._putCallback(a.id, t), !ot && (ot = gt.negotiateTransport(o, n, lt, i), !ot)) {
				var c = "Could not find initial transport among: " + gt.getTransportTypes();
				throw ct._warn(c), c
			}
			ct._debug("Initial transport is", ot.getType()), l("handshaking"), ct._debug("Handshake sent", a), y(!1, [a], !1, "handshake")
		}

		function A() {
			l("handshaking"), vt = !0, T(function() {
				L(st, at)
			})
		}

		function F(e, t) {
			try {
				e.call(ct, t)
			} catch(n) {
				var i = ct.onCallbackException;
				if(r(i)) {
					ct._debug("Invoking callback exception handler", n);
					try {
						i.call(ct, n, t)
					} catch(o) {
						ct._info("Exception during execution of callback exception handler", o)
					}
				} else ct._info("Exception during execution of message callback", n)
			}
		}

		function N(e) {
			var t = ct._getCallback([e.id]);
			r(t) && (delete wt[e.id], F(t, e))
		}

		function M(e) {
			var t = kt[e.id];
			if(delete kt[e.id], ct._debug("Handling remote call response for", e, "with context", t), t) {
				var n = t.timeout;
				n && org.cometd.Utils.clearTimeout(n);
				var i = t.callback;
				if(r(i)) return F(i, e), !0
			}
			return !1
		}

		function O(e) {
			N(e), v("/meta/handshake", e), v("/meta/unsuccessful", e);
			var t = !g() && "none" !== xt.reconnect;
			t ? (w(), A()) : E(!0)
		}

		function B(e) {
			if(e.successful) {
				ft = e.clientId;
				var t = ct.getURL(),
					n = gt.negotiateTransport(e.supportedConnectionTypes, e.version, lt, t);
				if(null === n) {
					var r = "Could not negotiate transport with server; client=[" + gt.findTransportTypes(e.version, lt, t) + "], server=[" + e.supportedConnectionTypes + "]",
						i = ct.getTransport();
					return q(i.getType(), null, {
						reason: r,
						connectionType: i.getType(),
						transport: i
					}), ct._warn(r), void E(!0)
				}
				ot !== n && (ct._debug("Transport", ot.getType(), "->", n.getType()), ot = n), vt = !1, C(), e.reestablish = Ct, Ct = !0, N(e), v("/meta/handshake", e);
				var o = g() ? "none" : xt.reconnect;
				switch(o) {
					case "retry":
						x(), I();
						break;
					case "none":
						E(!0);
						break;
					default:
						throw "Unrecognized advice action " + o
				}
			} else O(e)
		}

		function J(e) {
			var t = "1.0",
				n = ct.getURL(),
				r = ct.getTransport(),
				i = gt.findTransportTypes(t, lt, n),
				o = gt.negotiateTransport(i, t, lt, n);
			o ? (ct._debug("Transport", r.getType(), "->", o.getType()), q(r.getType(), o.getType(), e.failure), O(e), ot = o) : (q(r.getType(), null, e.failure), ct._warn("Could not negotiate transport; client=[" + i + "]"), E(!0), O(e))
		}

		function D(e) {
			v("/meta/connect", e), v("/meta/unsuccessful", e);
			var t = g() ? "none" : xt.reconnect;
			switch(t) {
				case "retry":
					I(), w();
					break;
				case "handshake":
					gt.reset(), x(), A();
					break;
				case "none":
					E(!0);
					break;
				default:
					throw "Unrecognized advice action" + t
			}
		}

		function W(e) {
			if(St = e.successful) {
				v("/meta/connect", e);
				var t = g() ? "none" : xt.reconnect;
				switch(t) {
					case "retry":
						x(), I();
						break;
					case "none":
						E(!1);
						break;
					default:
						throw "Unrecognized advice action " + t
				}
			} else D(e)
		}

		function j(e) {
			St = !1, D(e)
		}

		function H(e) {
			E(!0), N(e), v("/meta/disconnect", e), v("/meta/unsuccessful", e)
		}

		function X(e) {
			e.successful ? (E(!1), N(e), v("/meta/disconnect", e)) : H(e)
		}

		function P(e) {
			H(e)
		}

		function z(e) {
			var t = bt[e.subscription];
			if(t)
				for(var n = t.length - 1; n >= 0; --n) {
					var r = t[n];
					if(r && !r.listener) {
						delete t[n], ct._debug("Removed failed subscription", r);
						break
					}
				}
			N(e), v("/meta/subscribe", e), v("/meta/unsuccessful", e)
		}

		function $(e) {
			e.successful ? (N(e), v("/meta/subscribe", e)) : z(e)
		}

		function V(e) {
			z(e)
		}

		function G(e) {
			N(e), v("/meta/unsubscribe", e), v("/meta/unsuccessful", e)
		}

		function K(e) {
			e.successful ? (N(e), v("/meta/unsubscribe", e)) : G(e)
		}

		function Q(e) {
			G(e)
		}

		function Y(e) {
			M(e) || (N(e), v("/meta/publish", e), v("/meta/unsuccessful", e))
		}

		function Z(e) {
			void 0 !== e.data ? M(e) || v(e.channel, e) : void 0 === e.successful ? ct._warn("Unknown Bayeux Message", e) : e.successful ? (N(e), v("/meta/publish", e)) : Y(e)
		}

		function et(e) {
			Y(e)
		}

		function tt(e) {
			if(e = f(e), void 0 !== e && null !== e) {
				R(e.advice);
				var t = e.channel;
				switch(t) {
					case "/meta/handshake":
						B(e);
						break;
					case "/meta/connect":
						W(e);
						break;
					case "/meta/disconnect":
						X(e);
						break;
					case "/meta/subscribe":
						$(e);
						break;
					case "/meta/unsubscribe":
						K(e);
						break;
					default:
						Z(e)
				}
			}
		}

		function nt(e) {
			var t = bt[e];
			if(t)
				for(var n = 0; n < t.length; ++n)
					if(t[n]) return !0;
			return !1
		}

		function rt(e, t) {
			var i = {
				scope: e,
				method: t
			};
			if(r(e)) i.scope = void 0, i.method = e;
			else if(n(t)) {
				if(!e) throw "Invalid scope " + e;
				if(i.method = e[t], !r(i.method)) throw "Invalid callback " + t + " for scope " + e
			} else if(!r(t)) throw "Invalid callback " + t;
			return i
		}

		function it(e, t, n, r) {
			var i = rt(t, n);
			ct._debug("Adding", r ? "listener" : "subscription", "on", e, "with scope", i.scope, "and callback", i.method);
			var o = {
					channel: e,
					scope: i.scope,
					callback: i.method,
					listener: r
				},
				s = bt[e];
			return s || (s = [], bt[e] = s), o.id = s.push(o) - 1, ct._debug("Added", r ? "listener" : "subscription", o), o[0] = e, o[1] = o.id, o
		}
		var ot, st, at, ct = this,
			ut = e || "default",
			lt = !1,
			gt = new org.cometd.TransportRegistry,
			dt = "disconnected",
			ht = 0,
			ft = null,
			pt = 0,
			mt = [],
			vt = !1,
			bt = {},
			Tt = 0,
			yt = null,
			_t = [],
			xt = {},
			wt = {},
			kt = {},
			Ct = !1,
			St = !1,
			Ut = {
				protocol: null,
				stickyReconnect: !0,
				connectTimeout: 0,
				maxConnections: 2,
				backoffIncrement: 1e3,
				maxBackoff: 6e4,
				logLevel: "info",
				reverseIncomingExtensions: !0,
				maxNetworkDelay: 1e4,
				requestHeaders: {},
				appendMessageTypeToURL: !0,
				autoBatch: !1,
				advice: {
					timeout: 6e4,
					interval: 0,
					reconnect: "retry"
				}
			};
		this._mixin = function(e, n) {
			for(var r = n || {}, i = 2; i < arguments.length; ++i) {
				var o = arguments[i];
				if(void 0 !== o && null !== o)
					for(var s in o) {
						var a = t(o, s),
							c = t(r, s);
						if(a !== n && void 0 !== a)
							if(e && "object" == typeof a && null !== a)
								if(a instanceof Array) r[s] = this._mixin(e, c instanceof Array ? c : [], a);
								else {
									var u = "object" != typeof c || c instanceof Array ? {} : c;
									r[s] = this._mixin(e, u, a)
								}
						else r[s] = a
					}
			}
			return r
		}, this._warn = function() {
			o("warn", arguments)
		}, this._info = function() {
			"warn" !== Ut.logLevel && o("info", arguments)
		}, this._debug = function() {
			"debug" === Ut.logLevel && o("debug", arguments)
		}, this._isCrossDomain = function(e) {
			return e && e !== window.location.host
		};
		var It, Rt;
		this.send = _, this._getCallback = function(e) {
			return wt[e]
		}, this._putCallback = function(e, t) {
			var n = this._getCallback(e);
			return r(t) && (wt[e] = t), n
		}, this.receive = tt, It = function(e) {
			ct._debug("Received", e);
			for(var t = 0; t < e.length; ++t) {
				var n = e[t];
				tt(n)
			}
		}, Rt = function(e, t, n) {
			ct._debug("handleFailure", e, t, n), n.transport = e;
			for(var r = 0; r < t.length; ++r) {
				var i = t[r],
					o = {
						id: i.id,
						successful: !1,
						channel: i.channel,
						failure: n
					};
				switch(n.message = i, i.channel) {
					case "/meta/handshake":
						J(o);
						break;
					case "/meta/connect":
						j(o);
						break;
					case "/meta/disconnect":
						P(o);
						break;
					case "/meta/subscribe":
						o.subscription = i.subscription, V(o);
						break;
					case "/meta/unsubscribe":
						o.subscription = i.subscription, Q(o);
						break;
					default:
						et(o)
				}
			}
		}, this.registerTransport = function(e, t, n) {
			var i = gt.add(e, t, n);
			return i && (this._debug("Registered transport", e), r(t.registered) && t.registered(e, this)), i
		}, this.getTransportTypes = function() {
			return gt.getTransportTypes()
		}, this.unregisterTransport = function(e) {
			var t = gt.remove(e);
			return null !== t && (this._debug("Unregistered transport", e), r(t.unregistered) && t.unregistered()), t
		}, this.unregisterTransports = function() {
			gt.clear()
		}, this.findTransport = function(e) {
			return gt.find(e)
		}, this.configure = function(e) {
			s.call(this, e)
		}, this.init = function(e, t) {
			this.configure(e), this.handshake(t)
		}, this.handshake = function(e, t) {
			l("disconnected"), Ct = !1, L(e, t)
		}, this.disconnect = function(e, t, n) {
			if(!g()) {
				"boolean" != typeof e && (n = t, t = e, e = !1), r(t) && (n = t, t = void 0);
				var i = {
						id: d(),
						channel: "/meta/disconnect"
					},
					o = this._mixin(!1, {}, t, i);
				ct._putCallback(o.id, n), l("disconnecting"), y(e === !0, [o], !1, "disconnect")
			}
		}, this.startBatch = function() {
			k()
		}, this.endBatch = function() {
			S()
		}, this.batch = function(e, t) {
			var n = rt(e, t);
			this.startBatch();
			try {
				n.method.call(n.scope), this.endBatch()
			} catch(r) {
				throw this._info("Exception during execution of batch", r), this.endBatch(), r
			}
		}, this.addListener = function(e, t, r) {
			if(arguments.length < 2) throw "Illegal arguments number: required 2, got " + arguments.length;
			if(!n(e)) throw "Illegal argument type: channel must be a string";
			return it(e, t, r, !0)
		}, this.removeListener = function(e) {
			if(!(e && e.channel && "id" in e)) throw "Invalid argument: expected subscription, not " + e;
			a(e)
		}, this.clearListeners = function() {
			bt = {}
		}, this.subscribe = function(e, t, i, o, s) {
			if(arguments.length < 2) throw "Illegal arguments number: required 2, got " + arguments.length;
			if(!n(e)) throw "Illegal argument type: channel must be a string";
			if(g()) throw "Illegal state: already disconnected";
			r(t) && (s = o, o = i, i = t, t = void 0), r(o) && (s = o, o = void 0);
			var a = !nt(e),
				c = it(e, t, i, !1);
			if(a) {
				var u = {
						id: d(),
						channel: "/meta/subscribe",
						subscription: e
					},
					l = this._mixin(!1, {}, o, u);
				ct._putCallback(l.id, s), _(l)
			}
			return c
		}, this.unsubscribe = function(e, t, n) {
			if(arguments.length < 1) throw "Illegal arguments number: required 1, got " + arguments.length;
			if(g()) throw "Illegal state: already disconnected";
			r(t) && (n = t, t = void 0), this.removeListener(e);
			var i = e.channel;
			if(!nt(i)) {
				var o = {
						id: d(),
						channel: "/meta/unsubscribe",
						subscription: i
					},
					s = this._mixin(!1, {}, t, o);
				ct._putCallback(s.id, n), _(s)
			}
		}, this.resubscribe = function(e, t) {
			return c(e), e ? this.subscribe(e.channel, e.scope, e.callback, t) : void 0
		}, this.clearSubscriptions = function() {
			u()
		}, this.publish = function(e, t, i, o) {
			if(arguments.length < 1) throw "Illegal arguments number: required 1, got " + arguments.length;
			if(!n(e)) throw "Illegal argument type: channel must be a string";
			if(/^\/meta\//.test(e)) throw "Illegal argument: cannot publish to meta channels";
			if(g()) throw "Illegal state: already disconnected";
			r(t) ? (o = t, t = i = {}) : r(i) && (o = i, i = {});
			var s = {
					id: d(),
					channel: e,
					data: t
				},
				a = this._mixin(!1, {}, i, s);
			ct._putCallback(a.id, o), _(a)
		}, this.remoteCall = function(e, t, i, o) {
			if(arguments.length < 1) throw "Illegal arguments number: required 1, got " + arguments.length;
			if(!n(e)) throw "Illegal argument type: target must be a string";
			if(g()) throw "Illegal state: already disconnected";
			if(r(t) ? (o = t, t = {}, i = Ut.maxNetworkDelay) : r(i) && (o = i, i = Ut.maxNetworkDelay), "number" != typeof i) throw "Illegal argument type: timeout must be a number";
			e.match(/^\//) || (e = "/" + e);
			var s = "/service" + e,
				a = {
					id: d(),
					channel: s,
					data: t
				},
				c = {
					callback: o
				};
			i > 0 && (c.timeout = org.cometd.Utils.setTimeout(ct, function() {
				ct._debug("Timing out remote call", a, "after", i, "ms"), Y({
					id: a.id,
					error: "406::timeout",
					successful: !1,
					failure: {
						message: a,
						reason: "Remote Call Timeout"
					}
				})
			}, i), ct._debug("Scheduled remote call timeout", a, "in", i, "ms")), kt[a.id] = c, _(a)
		}, this.getStatus = function() {
			return dt
		}, this.isDisconnected = g, this.setBackoffIncrement = function(e) {
			Ut.backoffIncrement = e
		}, this.getBackoffIncrement = function() {
			return Ut.backoffIncrement
		}, this.getBackoffPeriod = function() {
			return Tt
		}, this.setLogLevel = function(e) {
			Ut.logLevel = e
		}, this.registerExtension = function(e, t) {
			if(arguments.length < 2) throw "Illegal arguments number: required 2, got " + arguments.length;
			if(!n(e)) throw "Illegal argument type: extension name must be a string";
			for(var i = !1, o = 0; o < _t.length; ++o) {
				var s = _t[o];
				if(s.name === e) {
					i = !0;
					break
				}
			}
			return i ? (this._info("Could not register extension with name", e, "since another extension with the same name already exists"), !1) : (_t.push({
				name: e,
				extension: t
			}), this._debug("Registered extension", e), r(t.registered) && t.registered(e, this), !0)
		}, this.unregisterExtension = function(e) {
			if(!n(e)) throw "Illegal argument type: extension name must be a string";
			for(var t = !1, i = 0; i < _t.length; ++i) {
				var o = _t[i];
				if(o.name === e) {
					_t.splice(i, 1), t = !0, this._debug("Unregistered extension", e);
					var s = o.extension;
					r(s.unregistered) && s.unregistered();
					break
				}
			}
			return t
		}, this.getExtension = function(e) {
			for(var t = 0; t < _t.length; ++t) {
				var n = _t[t];
				if(n.name === e) return n.extension
			}
			return null
		}, this.getName = function() {
			return ut
		}, this.getClientId = function() {
			return ft
		}, this.getURL = function() {
			if(ot && "object" == typeof Ut.urls) {
				var e = Ut.urls[ot.getType()];
				if(e) return e
			}
			return Ut.url
		}, this.getTransport = function() {
			return ot
		}, this.getConfiguration = function() {
			return this._mixin(!0, {}, Ut)
		}, this.getAdvice = function() {
			return this._mixin(!0, {}, xt)
		}, org.cometd.WebSocket = window.WebSocket
	}
}).call(this);; /*!visitor/common/js/query.js*/
! function() {
	var e = function() {
		function e(e) {
			return e._zid || (e._zid = rt++)
		}

		function t(e) {
			!A.createElement;
			var t = A.createElement("div");
			try {
				return !!e(t)
			} catch(n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function n(e, t, i) {
			var s = t && t.ownerDocument,
				i = i || [];
			return e ? e.nodeType || e == window.document || e == window ? (this.context = e, this.results = [e], this.length = 1, this) : X(e) ? "undefined" != typeof tt ? this.readyList.push(e) : e() : e instanceof n ? e : ((t ? t.ownerDocument || t : L) !== A && w(t), t = t || A, this.selector = e, this.context = t, this.results = r(e, t, i, s), void(this.length = this.results.length)) : (this.length = 0, this)
		}

		function r(e, t, n, r) {
			if(!e) return n;
			var i, s, o, a, u, l = t ? t.nodeType : 9;
			if(a = b.exec(e), 11 !== l && (a = b.exec(e)))
				if(i = a[1]) {
					if(9 === l) {
						if(!(o = t.getElementById(i))) return n;
						if(o.id === i) return n.push(o), n
					} else if(t.ownerDocument && (o = t.ownerDocument.getElementById(i)) && E(t, o) && o.id === i) return n.push(o), n
				} else {
					if(i = a[2]) return(d = B.find.TAG(i, t)) && I.apply(n, d), n;
					if((i = a[3]) && P.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(i)), n
				}
			if(1 !== l && (r = t, u = e), u) try {
				return I.apply(n, r.querySelectorAll(u)), n
			} catch(c) {} finally {}
			var f, d = B.find.TAG("*", t),
				h = d.length;
			if(s = 0, f = a[2]) {
				var p = [];
				if(n = t.getElementsByTagName(f), o = nt, "*" === f) {
					for(; o = n[s++];) 1 === o.nodeType && p.push(o);
					return p
				}
				return n
			}
			for(var m = R.CLASS, v = m(a[3]); s !== h && null != (o = d[s]); s++) o && 1 === o.nodeType && v(o) && n.push(o);
			return n
		}

		function i(e) {
			return null == e ? String(e) : Q[W.call(e)] || "object"
		}

		function s(e) {
			return null != e && e == e.window
		}

		function o(e) {
			return "object" == i(e)
		}

		function a(e, t, n) {
			for(var r in t) n && (Y(t[r]) || G(t[r])) ? (Y(t[r]) && !Y(e[r]) && (e[r] = {}), G(t[r]) && !G(e[r]) && (e[r] = []), a(e[r], t[r], n)) : t[r] !== nt && (e[r] = t[r])
		}

		function e(e) {
			return e._zid || (e._zid = rt++)
		}

		function u(t, n, r, i) {
			function s(t) {
				return !(!t || n.e && t.e != n.e || n.ns && !o.test(t.ns) || r && e(t.fn) !== e(r) || i && t.sel != i)
			}
			if(n = l(n), n.ns) var o = c(n.ns);
			for(var a = it[e(t)] || [], u = [], f = 0; f < a.length; f++) s(a[f]) && u.push(a[f]);
			return u
		}

		function l(e) {
			var t = ("" + e).split(".");
			return {
				e: t[0],
				ns: t.slice(1).sort().join(" ")
			}
		}

		function c(e) {
			return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
		}

		function f(e, t) {
			return e.del && !ot && e.e in at || !!t
		}

		function d(e) {
			return ut[e] || ot && at[e] || e
		}

		function h(t, n, r, i, s, o, a) {
			var u = e(t),
				c = it[u] || (it[u] = []);
			g.fn.each(n.split(/\s/), function(e, n) {
				if("ready" == n) return g(A).ready(r);
				var u = l(n);
				u.fn = r, u.sel = s, u.e in ut && (r = function(e) {
					var t = e.relatedTarget;
					return !t || t !== this && !g.contains(this, t) ? u.fn.apply(this, arguments) : void 0
				}), u.del = o;
				var h = o || r;
				u.proxy = function(e) {
					if(e = m(e), !e.isImmediatePropagationStopped()) {
						e.data = i;
						var n = h.apply(t, e._args == nt ? [e] : [e].concat(e._args));
						return n === !1 && (e.preventDefault(), e.stopPropagation()), n
					}
				}, u.i = c.length, c.push(u), "addEventListener" in t ? t.addEventListener(d(u.e), u.proxy, f(u, a)) : t.attachEvent("on" + d(u.e), u.proxy)
			})
		}

		function p(t, n, r, i, s) {
			var o = e(t);
			g.fn.each((n || "").split(/\s/), function(e, n) {
				g.fn.each(u(t, n, r, i), function(e, n) {
					delete it[o][n.i], "removeEventListener" in t ? t.removeEventListener(d(n.e), n.proxy, f(n, s)) : t.detachEvent("on" + d(n.e), n.proxy)
				})
			})
		}

		function m(e, t) {
			return(t || !e.isDefaultPrevented) && (t || (t = e), g.each(dt, function(n, r) {
				var i = t[n];
				e[n] = function() {
					return this[r] = lt, i && i.apply(t, arguments)
				}, e[r] = ct
			}), (t.defaultPrevented !== nt ? t.defaultPrevented : "returnValue" in t ? t.returnValue === !1 : t.getPreventDefault && t.getPreventDefault()) && (e.isDefaultPrevented = lt)), e
		}

		function v(e) {
			var t, n = {
				originalEvent: e
			};
			for(t in e) ft.test(t) || e[t] === nt || (n[t] = e[t]);
			return m(n, e)
		}
		var g, y, E, w, N = [],
			b = (N.concat, /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/),
			T = /^[^{]+\{\s*\[native \w/,
			x = /[\t\r\n\f]/g,
			C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			S = /\S+/g,
			B = {
				find: {},
				filter: {}
			},
			L = window.document,
			A = window.document,
			j = "echatQuery" + 1 * new Date,
			P = {},
			D = [],
			O = (D.pop, D.push, D.slice),
			I = D.push,
			H = new RegExp("\\\\([\\da-f]{1,6}" + k + "?|(" + k + ")|.)", "ig"),
			M = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			k = "[\\x20\\t\\r\\n\\f]",
			F = function() {
				w()
			},
			R = {
				TAG: function(e) {
					var t = e.replace(H, M).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = new RegExp("(^|" + k + ")" + e + "(" + k + "|$)");
					return function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					}
				}
			};
		P.getElementsByTagName = t(function(e) {
			return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
		}), w = function(e) {
			var n, r, i = e ? e.ownerDocument || e : L;
			return i === A || 9 !== i.nodeType || !i.documentElement, A = i, y = A.documentElement, (r = A.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", F, !1) : r.attachEvent && r.attachEvent("onunload", F)), P.attributes = t(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), P.getElementsByTagName = t(function(e) {
				return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
			}), P.getElementsByClassName = T.test(i.getElementsByClassName), P.getById = t(function(e) {
				return y.appendChild(e).id = j, !A.getElementsByName || !A.getElementsByName(j).length
			}), P.getById ? (B.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}, B.filter.ID = function(e) {
				var t = e.replace(H, M);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete B.find.ID, B.filter.ID = function(e) {
				var t = e.replace(H, M);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), P.qsa = T.test(i.querySelectorAll), B.find.TAG = P.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : P.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				for(var n, r = [], i = 0, s = L.getElementsByTagName(e); n = s[i++];) 1 === n.nodeType && E(t, n) && r.push(n);
				return r
			}, B.find.CLASS = P.getElementsByClassName && function(e, t) {
				return "undefined" != typeof t.getElementsByClassName && documentIsHTML ? t.getElementsByClassName(e) : void 0
			}, n = T.test(y.compareDocumentPosition), E = n || T.test(y.contains) ? function(e, t) {
				if(!e || !t) return !1;
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if(!e) return !1;
				if(t)
					for(; t = t.parentNode;)
						if(t === e) return !0;
				return !1
			}, i
		}, w(), g = function(e, t) {
			return new n(e, t)
		};
		var q = 0,
			$ = /(\=)\?(&|$)|\?\?/i;
		g.ajaxJSONP = function(e, t) {
			function n(n, i) {
				g(a).remove(), n && "error" == n.type || !r ? e.error && e.error(null, i || "error", c, e, t) : e.success && e.success(r[0], c, e, t), window[o] = u, r && X(u) && u(r[0]), u = r = nt
			}
			if(!("type" in e)) return g.ajax(e);
			var r, i = window.document,
				s = e.jsonpCallback,
				o = (X(s) ? s() : s) || "jsonp" + ++q,
				a = i.createElement("script"),
				u = window[o],
				l = function(e) {
					g(script).triggerHandler("error", e || "abort")
				},
				c = {
					abort: l
				};
			t && t.promise(c);
			i.getElementsByTagName("head")[0];
			window[o] = function() {
				r = arguments
			};
			var f = "$1" + o + "$2";
			e.url = e.url.replace($, f);
			var d = "";
			if(e.data) {
				for(var h in e.data) {
					var p = "string" == typeof e.data[h] ? e.data[h] : JSON.stringify(e.data[h]);
					d = "&" + h + "=" + encodeURIComponent(p)
				}
				d && (d = d.substring(1), d += "&")
			}
			e.url += (/\?/.test(e.url) ? "&" : "?") + d + (e.jsonpCB || "jsonp") + "=" + o;
			var m = "onload" in a;
			return m ? (a.onload = n, a.onerror = function() {
				n({
					type: "error"
				})
			}) : a.onreadystatechange = function() {
				/loaded|complete/.test(a.readyState) && n()
			}, e.beforeSend && e.beforeSend(c) === !1 ? (console.log("abort", e), c) : (a.src = e.url, i.getElementsByTagName("head")[0].appendChild(a), c)
		}, g.ajax = function(e) {
			function t() {
				var e;
				try {
					e = new XMLHttpRequest
				} catch(t) {
					for(var n = ["Msxml3.XMLHTTP", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"], r = 0, i = n.length; i > r; r++) try {
						e = new ActiveXObject(n[r]);
						break
					} catch(t) {
						continue
					}
				}
				return e
			}
			if("jsonp" == e.jsonp || "JSONP" == e.jsonp || "jsonp" == e.type || "JSONP" == e.type) return g.ajaxJSONP(e, e.deferred);
			var n = t();
			if(n.onreadystatechange = function() {
					4 == n.readyState && (200 == n.status ? e.success && e.success(n.responseText) : e.error(n, n.responseText))
				}, n.open(e.type, e.url, !0), e.header)
				for(var r in e.header) n.setRequestHeader(r, e.header[r]);
			e.header && (e.header["Content-Type"] || e.header["Content-type"] || e.header["content-type"]) && e.contentType === !1 || n.setRequestHeader("Content-type", e.contentType || "application/json;charset=UTF-8;"), e.beforeSend && e.beforeSend(n);
			var i = e.data,
				s = "";
			if(i && "[object object]" == Object.prototype.toString.apply(i).toLowerCase())
				for(var o in i) s += "&" + o + "=" + encodeURIComponent(i[o]);
			window.XMLHttpRequest ? i || (i = null) : i || (i = nt), n.send(s ? s.substring(1) : i)
		};
		var _, U = /^-ms-/,
			z = /-([\da-z])/gi,
			J = function(e) {
				return e.replace(U, "ms-").replace(z, function(e, t) {
					return t.toUpperCase()
				})
			};
		! function() {
			var e, t, n;
			e = A.createElement("div"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], t = n && n.style, t = t.cssText = "float:left;opacity:.5", _ = {
				"float": t.cssFloat ? "cssFloat" : "styleFloat"
			}, e = null, n = null
		}();
		var X = function(e) {
				return null == e ? !1 : "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e)
			},
			G = function(e) {
				return "[object Array]" === Object.prototype.toString.apply(e)
			},
			V = function(e) {
				return "string" == typeof e
			},
			Q = {},
			W = Q.toString,
			Y = function(e) {
				return o(e) && !s(e) && Object.getPrototypeOf(e) == Object.prototype
			},
			Z = function(e) {
				return null == e ? "" : (e + "").replace(C, "")
			};
		g.extend = function(e, t, n) {
			for(var r in t) n && (Y(t[r]) || G(t[r])) ? (Y(t[r]) && !Y(e[r]) && (e[r] = {}), G(t[r]) && !G(e[r]) && (e[r] = []), a(e[r], t[r], n)) : t[r] !== nt && (e[r] = t[r]);
			return e
		}, g.cookie = function(e, t, n) {
			if(arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(t)) || null === t || t === nt)) {
				if(n = g.extend({}, n), (null === t || t === nt) && (n.expires = -1), "number" == typeof n.expires) {
					var r = n.expires,
						i = n.expires = new Date;
					i.setDate(i.getDate() + r)
				}
				return t = String(t), A.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", "; path=" + (n.path || "/"), n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
			}
			n = t || {};
			for(var s, o = n.raw ? function(e) {
					return e
				} : decodeURIComponent, a = A.cookie.split("; "), u = 0; s = a[u] && a[u].split("="); u++)
				if(o(s[0]) === e) return o(s[1] || "");
			return null
		}, g.toJSON = JSON.stringify;
		var K = {
				src: !0,
				href: !0
			},
			et = {
				isFunction: X,
				isArray: G,
				isString: V,
				isObject: o,
				isPlainObject: Y,
				trim: Z,
				contains: E,
				readyList: [],
				find: function(e) {
					var t = {};
					return this.each(function(r, i) {
						n.call(t, e, i, t.results)
					}), t
				},
				match: function(e, t) {
					var r = new n(t),
						i = null;
					return r.each(function(t, n) {
						return n == e || E(n, e) ? (i = n, !0) : void 0
					}), i
				},
				html: function(e) {
					return e || "" === e ? this.each(function(t, n) {
						n.innerHTML = e
					}) : this.results && this.results[0] ? this.results[0].innerHTML : null
				},
				text: function(e) {
					return "string" == typeof e ? this.each(function(t, n) {
						"string" == typeof n.textContent ? n.textContent = e : n.innerText = e
					}) : this.results && this.results[0] ? this.results[0].textContent || this.results[0].innerText : null
				},
				append: function(e) {
					if(e) {
						if(V(e)) {
							var t = A.createElement("div");
							t.innerHTML = e;
							var n = t.childNodes;
							this.each(function(e, t) {
								for(var r, e = 0; r = n[e++];) 1 == r.nodeType && (r = r.cloneNode(!0), t.appendChild(r))
							})
						} else this.each(function(t, n) {
							n.appendChild(e)
						});
						return this
					}
				},
				insertBefore: function(e, t) {
					if(e) {
						if(V(e)) {
							var n = A.createElement("div");
							n.innerHTML = e;
							var r = n.childNodes;
							this.each(function(n, i) {
								for(var s, n = 0; s = r[n++];) 1 == s.nodeType && (s = s.cloneNode(!0), i.insertBefore(e, t || i.childNodes[0]))
							})
						} else this.each(function(n, r) {
							r.insertBefore(e, t || r.childNodes[0])
						});
						return this
					}
				},
				show: function() {
					return this.each(function(e, t) {
						t.style.display = "block"
					}), this
				},
				hide: function() {
					return this.each(function(e, t) {
						t.style.display = "none"
					})
				},
				removeClass: function(e) {
					for(var t, n, r, i, s = this.results.length, o = 0, a = 0, u = (e || "").match(S) || []; s > a; a++)
						if(t = this.results[a], n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(x, " ") : "")) {
							for(o = 0; r = u[o++];)
								for(; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
							i = e ? Z(n) : "", t.className !== i && (t.className = i)
						} else t.className = "";
					return this
				},
				addClass: function(e) {
					for(var t, n, r, i, s = this.results.length, o = 0, a = 0, u = (e || "").match(S) || []; s > a; a++)
						if(t = this.results[a], n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(x, " ") : "")) {
							for(o = 0; r = u[o++];)
								for(; n.indexOf(" " + r + " ") < 0;) n += r + " ";
							i = e ? Z(n) : "", t.className !== i && (t.className = i)
						} else t.className = e;
					return this
				},
				attr: function(e, t) {
					if(!e) return this;
					if("undefined" == typeof t)
						if("string" == typeof e) {
							if(this.results && this.results.length > 0) return this.getAttr(this.results[0], e)
						} else {
							var n = this.results ? this.results.length : 0;
							for(var r in e)
								for(var i = 0; n > i; i++) {
									var s = this.results[i];
									K[r] ? s[r] = e[r] : s.setAttribute(r + "", e[r])
								}
						}
					else
						for(var n = this.results ? this.results.length : 0, i = 0; n > i; i++) {
							var s = this.results[i];
							s.setAttribute(e, t), K[e] ? s[e] = t : s.setAttribute(e, t)
						}
					return this
				},
				css: function(e, t) {
					if(!e) return this;
					if("undefined" == typeof t)
						if("string" == typeof e) this.css(e, 0 === t ? "0" : "inherit");
						else
							for(var n = this.results ? this.results.length : 0, r = 0; n > r; r++)
								for(var i in e) {
									var s = J(i);
									s = _[s] || s;
									var o = this.results[r];
									o.style[s] = e[i]
								} else try {
									for(var n = this.results ? this.results.length : 0, r = 0; n > r; r++) {
										var s = J(e);
										s = _[s] || s;
										var o = this.results[r];
										o.style[s] = t
									}
								} catch(a) {
									return this
								}
					return this
				},
				remove: function() {
					for(var e = this.results ? this.results.length : 0, t = 0; e > t; t++) {
						var n = this.results[t];
						n.parentNode.removeChild(n)
					}
					return this.length = 0, this.results = [], this
				},
				removeAttr: function(e) {
					return this.each(function(t, n) {
						n.setAttribute(e, ""), n.removeAttribute(e)
					})
				},
				ready: function() {
					for(var e, t = 0; this.readyList && (e = this.readyList[t]);) e.call(window), t++;
					return this
				},
				hasClass: function(e) {
					for(var t = this.results ? this.results.length : 0, n = [], r = R.CLASS(e), i = 0; t > i; i++) {
						var s = this.results[i];
						r(s) && n.push(s)
					}
					return n.length
				},
				max: function(e, t) {
					return e > t ? e : t
				},
				width: function() {
					return this.results && this.results[0] ? et.max(this.results[0].offsetWidth, this.results[0].clientWidth) : null
				},
				height: function() {
					return this.results && this.results[0] ? et.max(this.results[0].offsetHeight, this.results[0].clientHeight) : null
				},
				val: function(e) {
					return "undefined" == typeof e ? this.results && this.results[0] ? this.results[0].value : null : (this.results && this.results[0] ? this.results[0].value = e + "" : null, this)
				},
				getAttr: function(e, t) {
					return e.getAttribute(t)
				},
				each: function(e, t) {
					if(G(e))
						for(var n = 0; n < e.length && !t.call(e[n], n, e[n]); n++);
					else if(X(e)) {
						t = e, e = this.results || [];
						for(var n = 0; n < e.length && !t.call(e[n], n, e[n]); n++);
					} else
						for(var n in e)
							if(t.call(e[n], n, e[n])) break;
					return this
				}
			},
			tt = function() {
				function e() {
					i.removeEventListener("DOMContentLoaded", e, !1), i.removeEventListener("load", e, !1), r()
				}

				function t() {
					"complete" == i.readyState && (i.detachEvent("onreadystatechange", t), i.detachEvent("onload", n), r())
				}

				function n() {
					i.detachEvent("onreadystatechange", t), i.detachEvent("onload", n), r()
				}
				var r = function() {
						tt && (et.ready(), tt = nt)
					},
					i = window.document;
				if(i.addEventListener) i.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
				else if(i.attachEvent) i.attachEvent("onreadystatechange", t), window.attachEvent("onload", n);
				else if(i.lastChild == i.body) return r();
				var s = i.getElementsByTagName("body") || [];
				s.length > 0 && r()
			};
		tt(), g.fn = et, g.each = et.each;
		var nt, rt = 1,
			O = Array.prototype.slice,
			it = {},
			st = {},
			ot = "onfocusin" in window,
			at = {
				focus: "focusin",
				blur: "focusout"
			},
			ut = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		st.click = st.mousedown = st.mouseup = st.mousemove = "MouseEvents", g.event = {
			add: h,
			remove: p
		}, g.proxy = function(t, n) {
			var r = 2 in arguments && O.call(arguments, 2);
			if(X(t)) {
				var i = function() {
					return t.apply(n, r ? r.concat(O.call(arguments)) : arguments)
				};
				return i._zid = e(t), i
			}
			if(V(n)) return r ? (r.unshift(t[n], t), g.proxy.apply(null, r)) : g.proxy(t[n], t);
			throw new TypeError("expected function")
		}, g.fn.bind = function(e, t, n) {
			return this.on(e, t, n)
		}, g.fn.unbind = function(e, t) {
			return this.off(e, t)
		}, g.fn.one = function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		};
		var lt = function() {
				return !0
			},
			ct = function() {
				return !1
			},
			ft = /^([A-Z]|returnValue$|layer[XY]$)/,
			dt = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		return g.fn.delegate = function(e, t, n) {
			return this.on(t, e, n)
		}, g.fn.undelegate = function(e, t, n) {
			return this.off(t, e, n)
		}, g.fn.live = function(e, t) {
			return g(A.getElementsByTagName("body")).delegate(this.selector, e, t), this
		}, g.fn.die = function(e, t) {
			return g(A.getElementsByTagName("body")).undelegate(this.selector, e, t), this
		}, g.fn.on = function(e, t, n, r, i) {
			var s, o, a = this;
			return e && !V(e) ? (g.each(e, function(e, r) {
				a.on(e, t, n, r, i)
			}), a) : (V(t) || X(r) || r === !1 || (r = n, n = t, t = nt), (r === nt || n === !1) && (r = n, n = nt), r === !1 && (r = ct), a.each(function(a, u) {
				i && (s = function(e) {
					return p(u, e.type, r), r.apply(this, arguments)
				}), t && (o = function(e) {
					e = e || window.event;
					var n, i = e.target || e.srcElement,
						o = et.match(i, t);
					return o && o !== u ? (n = g.extend(v(e), {
						currentTarget: o,
						liveFired: u
					}), (s || r).apply(o, [n].concat(O.call(arguments, 1)))) : void 0
				}), h(u, e, r, n, t, o || s)
			}))
		}, g.fn.off = function(e, t, n) {
			var r = this;
			return e && !V(e) ? (g.each(e, function(e, n) {
				r.off(e, t, n)
			}), r) : (V(t) || X(n) || n === !1 || (n = t, t = nt), n === !1 && (n = ct), r.each(function() {
				p(this, e, n, t)
			}))
		}, g.fn.trigger = function(e, t) {
			return e = V(e) || Y(e) ? g.Event(e) : m(e), e._args = t, this.each(function() {
				e.type in at && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : g(this).triggerHandler(e, t)
			})
		}, g.fn.triggerHandler = function(e, t) {
			var n, r;
			return this.each(function(i, s) {
				n = v(V(e) ? g.Event(e) : e), n._args = t, n.target = s, g.each(u(s, e.type || e), function(e, t) {
					return r = t.proxy(n), n.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), r
		}, g.fn.each("focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" "), function(e, t) {
			g.fn[t] = function(e) {
				return 0 in arguments ? this.bind(t, e) : this.trigger(t)
			}
		}), g.Event = function(e, t) {
			V(e) || (t = e, e = t.type);
			var n = A.createEvent(st[e] || "Events"),
				r = !0;
			if(t)
				for(var i in t) "bubbles" == i ? r = !!t[i] : n[i] = t[i];
			return n.initEvent(e, r, !0), m(n)
		}, n.prototype = g.fn, g
	}();
	window.EChatQuery = e
}();; /*!visitor/common/js/qcometd.js*/
! function(e, n) {
	! function(e, n) {
		function t(e, n) {
			if(n)
				for(var t in n) "content-type" !== t.toLowerCase() && e.setRequestHeader(t, n[t])
		}

		function o() {
			var o = new n.LongPollingTransport,
				r = n.Transport.derive(o);
			return r.xhrSend = function(n) {
				return e.ajax({
					url: n.url,
					async: n.sync !== !0,
					type: "POST",
					contentType: "application/json;charset=UTF-8",
					data: n.body,
					global: !1,
					xhrFields: {
						withCredentials: !0
					},
					beforeSend: function(e) {
						try {
							e.withCredentials = !0
						} catch(o) {}
						return t(e, n.headers), !0
					},
					success: n.onSuccess,
					error: function(e, t, o) {
						n.onError(t, o);
						var r = "";
						for(var a in e);
						for(var a in o) r += o[a]
					}
				})
			}, r
		}

		function r() {
			var o = new n.CallbackPollingTransport,
				r = n.Transport.derive(o);
			return r.jsonpSend = function(n) {
				e.ajax({
					url: n.url,
					async: n.sync !== !0,
					type: "GET",
					dataType: "jsonp",
					jsonp: "jsonp",
					data: {
						message: n.body
					},
					beforeSend: function(e) {
						return t(e, n.headers), !0
					},
					success: n.onSuccess,
					error: function(e, t, o) {
						n.onError(t, o)
					}
				})
			}, r
		}
		return "undefined" != typeof JSON && (n.JSON.toJSON = JSON.stringify, n.JSON.fromJSON = JSON.parse), e.CometD = function(e) {
			var t = new n.CometD(e);
			return n.WebSocket && t.registerTransport("websocket", new n.WebSocketTransport), t.registerTransport("long-polling", new o), t.registerTransport("callback-polling", new r), t
		}, e.cometd = new e.CometD, e.cometd
	}(e, n.cometd),
	function(e) {
		return e.AckExtension = function() {
			function e(e, t) {
				n._debug(e, t)
			}
			var n, t = !1,
				o = -1;
			this.registered = function(t, o) {
				n = o, e("AckExtension: executing registration callback")
			}, this.unregistered = function() {
				e("AckExtension: executing unregistration callback"), n = null
			}, this.incoming = function(n) {
				var r = n.channel;
				if("/meta/handshake" == r) t = n.ext && n.ext.ack, e("AckExtension: server supports acks", t);
				else if("/meta/connect" == r && n.successful && t) {
					var a = n.ext;
					a && "number" == typeof a.ack && (o = a.ack, e("AckExtension: server sent ack id", o))
				}
				return n
			}, this.outgoing = function(r) {
				var a = r.channel;
				return "/meta/handshake" == a ? (r.ext || (r.ext = {}), r.ext.ack = n && n.ackEnabled !== !1, o = -1) : "/meta/connect" == a && t && (r.ext || (r.ext = {}), r.ext.ack = o, e("AckExtension: client sending ack id", o)), r
			}
		}
	}(n.cometd),
	function(e, n) {
		var t = new e;
		return n.registerExtension("ack", t), t
	}(n.cometd.AckExtension, e.cometd),
	function(e, n) {
		return n && (e.COOKIE || (e.COOKIE = {}, e.COOKIE.set = n, e.COOKIE.get = n)), e.ReloadExtension = function(n) {
			function t(n) {
				if(i.handshakeResponse) {
					p = !0;
					var t = a.getTransport();
					t && t.abort(), r(n), i.cookiePath = u;
					var o = e.JSON.toJSON(i);
					s("Reload extension saving cookie value", o), e.COOKIE.set(c, o, {
						"max-age": d,
						path: u,
						expires: new Date((new Date).getTime() + 1e3 * d)
					})
				}
			}

			function o(e) {
				return i.url == e.url
			}

			function r(e) {
				e && ("number" == typeof e.cookieMaxAge && (d = e.cookieMaxAge), "string" == typeof e.cookieName && (c = e.cookieName), "string" == typeof e.cookiePath && (u = e.cookiePath))
			}
			var a, s, i = {},
				c = "org.cometd.reload",
				u = "/",
				d = 5,
				l = !1,
				p = !1;
			this.configure = r, this.registered = function(e, n) {
				a = n, a.reload = t, s = a._debug
			}, this.unregistered = function() {
				delete a.reload, a = null
			}, this.outgoing = function(n) {
				switch(n.channel) {
					case "/meta/handshake":
						i = {}, i.url = a.getURL();
						var t = e.COOKIE.get(c);
						if(s("Reload extension found cookie value", t), t) try {
							var r = e.JSON.fromJSON(t);
							if(e.COOKIE.set(c, "", {
									"max-age": -1,
									path: r.cookiePath,
									expires: -1
								}), r.handshakeResponse && o(r)) {
								s("Reload extension restoring state", r);
								var u = a._getCallback(n.id);
								return setTimeout(function() {
									s("Reload extension replaying handshake response", r.handshakeResponse), i.handshakeResponse = r.handshakeResponse, i.transportType = r.transportType, a._putCallback(n.id, u);
									var e = a._mixin(!0, {}, i.handshakeResponse, {
										id: n.id,
										ext: {
											reload: !0
										}
									});
									e.supportedConnectionTypes = [i.transportType], a.receive(e), s("Reload extension replayed handshake response", e)
								}, 0), l || (l = !0, a.startBatch()), null
							}
							s("Reload extension could not restore state", r)
						} catch(d) {
							s("Reload extension error while trying to restore cookie", d)
						}
						break;
					case "/meta/connect":
						if(p === !0) return s("Reload extension aborting /meta/connect during reload"), null;
						i.transportType || (i.transportType = n.connectionType, s("Reload extension tracked transport type", i.transportType));
						break;
					case "/meta/disconnect":
						i = {}
				}
				return n
			}, this.incoming = function(e) {
				if(e.successful) switch(e.channel) {
					case "/meta/handshake":
						i.handshakeResponse || (i.handshakeResponse = e, s("Reload extension tracked handshake response", e));
						break;
					case "/meta/connect":
						l && (l = !1, a.endBatch());
						break;
					case "/meta/disconnect":
						i = {}
				}
				return e
			}, r(n)
		}
	}(n.cometd, e.cookie),
	function(e, n, t) {
		var o = new n;
		return t.registerExtension("reload", o), o
	}(n.cometd, n.cometd.ReloadExtension, e.cometd)
}(EChatQuery, org);; /*!visitor/common/js/util.js*/
! function($) {
	"undefined" == typeof window.ECHATObjKeyMap && (window.ECHATObjKeyMap = {});
	var UTIL = function(justBase) {
		function _isPointerEventType(e, t) {
			return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t || e.type == "mouse" + t
		}

		function _isPrimaryTouch(e) {
			var t = e.type.indexOf("mouse") > -1 || ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary;
			return t
		}
		this.ECHATConfig = {
			contextPath: "/mychat/visitor"
		};
		var _self = this;
		if(this.subMap = {}, this.eventMap = {}, this.setSub = function(e) {
				this.subMap[e] = e
			}, this.removeSub = function(e) {
				delete this.subMap["string" == typeof e ? e : e.KEY]
			}, this.publish = function(e) {
				var t = this.subMap;
				for(var n in t) {
					var i = ECHATObjKeyMap[n];
					if(i && i.eventMap && i.eventMap[e]) {
						var o = i.eventMap[e];
						if(this.isArray(o))
							for(var r = 0; r < o.length; r++) o[r].apply(i, arguments)
					}
				}
			}, this.subscribe = function(e, t) {
				this.eventMap[e] ? this.eventMap[e].push(t) : this.eventMap[e] = [t]
			}, this.unSubscribeAll = function() {
				this.eventMap = {}
			}, this.unSubscribe = function(e) {
				if(this.isArray(e))
					for(var t = 0; t < e.length; t++) delete this.eventMap[e[t]];
				else delete this.eventMap[e]
			}, this.isArray = function(e) {
				return "[object Array]" === Object.prototype.toString.apply(e)
			}, this.getQueryString = function(e) {
				var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
					n = location.search.substr(1).match(t);
				return null != n ? decodeURIComponent(n[2]) : void 0
			}, this.getQueryParams = function(e) {
				var t = {};
				"string" != typeof e && (e = location.search), -1 != e.indexOf("#") && (e = e.substring(0, e.indexOf("#"))), -1 != e.indexOf("?") && (e = e.substring(e.indexOf("?") + 1));
				for(var n, i = e.split("&"), o = i.length, r = 0; o > r; r++) i[r] && (n = i[r].split("="), n[0] && n[1] && (t[n[0]] = decodeURIComponent(n[1]), t[n[0].toLowerCase()] = t[n[0]]));
				if(t.visEvt) try {
					var s = JSON.parse(t.visEvt);
					s && s.eventId && (t.eventId = s.eventId, t.eventid = s.eventId)
				} catch(a) {
					t.visEvt = void 0, delete t.visEvt
				}
				return t
			}, this.queryParams = this.getQueryParams(), this.companyId = this.getQueryString("companyid"), this.hasStorage = function() {
				try {
					if(!window.localStorage) return !1;
					window.localStorage.setItem("echt_test_storage", "ok");
					var e = window.localStorage.getItem("echt_test_storage");
					if(!e) return !1
				} catch(t) {
					return !1
				}
				return window.localStorage.removeItem("echt_test_storage"), !0
			}(), this.hasCookie = function() {
				$.cookie("echt_test_cookie", "ok");
				var e = $.cookie("echt_test_cookie");
				return e ? ($.cookie("echt_test_cookie", null), !0) : !1
			}(), $.store = function(e) {
				return e ? function(e, t, n) {
					return e ? arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(t)) || null === t || void 0 === t) ? (n = $.extend({}, n), (null === t || void 0 === t) && (n.expires = -1), t = String(t), n.session ? window.sessionStorage.setItem(e, t) : window.localStorage.setItem(e, t), t) : (n = t || {}, n.local ? window.localStorage.getItem(e) : n.session ? window.sessionStorage.getItem(e) : window.localStorage.getItem(e) || window.sessionStorage.getItem(e) || $.cookie(e)) : null
				} : $.cookie
			}(this.hasStorage), !justBase) {
			this.getDeviceInfo = function() {
				function G() {
					var e = /mobile|kgbrowser|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i,
						t = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
						n = C || D || window.opera,
						i = e.test(n) || t.test(n.substr(0, 4));
					return i
				}

				function L() {
					return window.document.documentElement.clientWidth > window.document.documentElement.clientHeight
				}

				function R() {
					return E && /(iemobile|windows phone)/i.test(C)
				}

				function T() {
					return E && y.test(D) && (!z.test(C) || /samsung/i.test(C))
				}

				function Y() {
					var e = 1.2,
						t = 640,
						n = window.document.documentElement.clientWidth,
						i = window.document.documentElement.clientHeight,
						o = n / i > e,
						r = window.screen.width,
						s = window.screen.height,
						a = !1;
					o && s > r && (a = !0, r = window.screen.height, s = window.screen.width);
					var c = window.innerWidth,
						d = n / r;
					window.devicePixelRatio && T() && r > t ? d *= window.devicePixelRatio : R() && (d *= 1.5);
					var l = n / c / d;
					return l = (l / e).toFixed(2), (r / c).toFixed(2)
				}

				function Z() {
					var e = window,
						t = e.document.documentElement,
						n = e.document.body,
						i = null,
						o = {
							top: 0,
							left: 0
						};
					if(h(t.getBoundingClientRect) && (h(e.getComputedStyle) ? "relative" == e.getComputedStyle(n).position ? i = n : "relative" == e.getComputedStyle(t).position && (i = t) : n.currentStyle ? "relative" == n.currentStyle.position ? i = n : "relative" == t.currentStyle.position && (i = t) : "relative" == n.style.position ? i = n : "relative" == t.style.position && (i = t)), i) {
						var r = i.getBoundingClientRect();
						o.top = r.top + e.pageYOffset - t.clientTop, o.left = r.left + e.pageXOffset - t.clientLeft
					}
					return o
				}
				_self.deviceInfo = F;
				var b = _self,
					f = b.indexOf = function() {
						function e(e) {
							if(null == this) throw new TypeError;
							var t = Object(this),
								n = t.length >>> 0;
							if(0 === n) return -1;
							var i = 0;
							if(arguments.length > 0 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && 1 / 0 != i && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
							for(var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > o; o++)
								if(o in t && t[o] === e) return o;
							return -1
						}

						function t(e, t, i) {
							return n.call(t, e, i)
						}
						var n = Array.prototype.indexOf;
						return "function" == typeof n && /\[native code\]/.test(n.toString()) || (n = e), t
					}(),
					h = b.isFunction = function() {
						function e(e) {
							return "function" == typeof e
						}
						return e
					}(),
					i = b.isString = function() {
						function e(e) {
							return "string" == typeof e
						}
						return e
					}(),
					q = b.Browser = function() {
						function $f(e) {
							return e.replace(/^http:/, $a ? "https:" : "http:")
						}

						function $g() {
							return window.innerHeight !== a ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.getElementsByTagName("body").length ? document.getElementsByTagName("body")[0].clientHeight : 0
						}

						function $h() {
							return window.innerWidth !== a ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.getElementsByTagName("body").length ? document.getElementsByTagName("body")[0].clientWidth : 0
						}

						function $o() {
							var e, t = x.plugins && x.plugins[$k];
							if(t) return e = x.mimeTypes && x.mimeTypes[$m], e && !e.enabledPlugin ? null : t.description;
							if(window.ActiveXObject) try {
								return t = new window.ActiveXObject($l), t.AllowScriptAccess = "always", t.GetVariable("$version")
							} catch(n) {}
						}

						function $p() {
							var e = x.mimeTypes;
							return A ? Q ? !1 : "javaEnabled" in x && x.javaEnabled() : e && (e = e[$n]) && (e = e.enabledPlugin) ? e.name : void 0
						}

						function $q() {
							if(!k(S)) return S;
							var e = document.createElement("div"),
								t = document.createElement("div"),
								n = e.style,
								i = t.style;
							return n.overflow = "auto", n.width = n.height = "100px", n.position = "absolute", n.top = "-1000px", i.width = "100%", i.height = "200px", e.appendChild(t), document.body.appendChild(e), S = e.offsetWidth - e.clientWidth, document.body.removeChild(e), S
						}

						function $r() {
							try {
								return eval("false")
							} catch($u) {
								return !0
							}
						}

						function $s() {
							for(var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", n[0];);
							return e > 4 ? e : document.documentMode
						}
						var x = navigator,
							y = x.userAgent.toLowerCase(),
							z = +(/trident.*rv:? *([0-9]+)/.exec(y) || [])[1] || !1,
							A = $s(),
							zz = /edge/.exec(y) || !A && !!window.StyleMedia || !1,
							B = 8 == A,
							C = 7 == A,
							D = 6 == A,
							E = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera) || /webkit/.test(y) && (/opr/.test(y) || /opera/.test(y)),
							F = "Google Inc." == navigator.vendor,
							G = "Apple Computer, Inc." == navigator.vendor,
							H = !A && (F || G || /webkit|khtml/.test(y)),
							I = +/\d+/.exec(/firefox\/\d+/i.exec(navigator.userAgent) || ""),
							J = y.indexOf("firefox/2") > -1,
							K = y.indexOf("firefox/3") > -1,
							L = -1 != y.indexOf("iphone"),
							M = -1 != y.indexOf("ipod"),
							N = -1 != y.indexOf("ipad"),
							O = L || N || M,
							P = -1 != y.indexOf("android"),
							Q = -1 != y.indexOf("wp7"),
							kgBrowser = -1 != y.indexOf("kgbrowser"),
							R = O || P || Q || kgBrowser,
							S, uc = -1 != y.indexOf("ucbrowser"),
							liebao = -1 != y.indexOf("lbbroser") || y.indexOf("liebao") > -1,
							qq = -1 != y.indexOf("qqbrowser"),
							sogou = -1 != y.indexOf("metasr") || -1 != y.indexOf("sogou"),
							f360 = !1,
							maxth = -1 != y.indexOf("maxthon"),
							baidu = -1 != y.indexOf("bidubrowser") || -1 != y.indexOf("baidubrowser") || -1 != y.indexOf("baidu"),
							weixin = -1 != y.indexOf("micromessenger"),
							T = A && "msie" || I && "firefox" || E && "opera" || uc && "uc" || liebao && "liebao" || qq && "qq" || zz && "edge" || sogou && "sogou" || f360 && "360" || maxth && "maxth" || baidu && "baidu" || weixin && "weixin" || G && "safari" || F && "chrome" || H && "chrome",
							U, V = A && !W,
							W = "CSS1Compat" == document.compatMode,
							X = !W,
							Y = A && X && document.documentElement && !!document.documentElement.style.setExpression,
							Z = document.documentMode || A,
							$$ = -1 != y.indexOf("windows") || -1 != y.indexOf("win32"),
							$_ = -1 != y.indexOf("macintosh") || -1 != y.indexOf("mac os x") || -1 != window.navigator.platform.indexOf("Mac"),
							$a = "https:" == document.location.protocol,
							$b = x.language || x.browserLanguage || x.userLanguage || x.systemLanguage,
							$c = {
								noBoxSizing: 7 >= Z,
								ie: {
									cssBottomRight: D,
									cssFixed: D || Y,
									buggyCSS: D || Y
								}
							},
							$d = "textContent" in document.createElement("div"),
							$e = !1;
						try {
							window.CustomEvent && /\[native code\]/.test(window.CustomEvent.toString()) && (new window.CustomEvent("testevent", {
								bubbles: !1,
								cancelable: !0,
								detail: !0
							}), $e = !0)
						} catch($u) {}
						switch(T) {
							case "opera":
								U = +/\d+/.exec(new RegExp("opr[ /]\\d+").exec(y) || "");
								break;
							case "msie":
							case "firefox":
							case "chrome":
								U = U || +/\d+/.exec(new RegExp(T + "[ /]\\d+").exec(y) || "");
								break;
							case "baidu":
								U = +/\d+/.exec(new RegExp("bidubrowser[ /]\\d+").exec(y) || "");
								break;
							case "maxth":
								U = +/\d+/.exec(new RegExp("maxthon[ /]\\d+").exec(y) || "");
								break;
							case "qq":
								U = +/\d+/.exec(new RegExp("qqbrowser[ /]\\d+").exec(y) || "");
								break;
							case "liebao":
								U = +/\d+/.exec(new RegExp("lbbroser[ /]\\d+").exec(y) || "");
								break;
							case "uc":
								U = +/\d+/.exec(new RegExp("ucbrowser[ /]\\d+").exec(y) || "");
								break;
							case "sogou":
								U = +/\d+/.exec(new RegExp("metasr[ /]\\d+").exec(y) || "");
								break;
							default:
								U = +/\d+/.exec(/version[ \/]\d+/.exec(y) || "")
						}
						if(D) {
							var $i = [];
							$c.leaksMemory = function(e) {
								p.isFunction(e), $i.push(e)
							};
							var $j = function() {
								for(var e = 0; e < $i.length; e++) $i[e]()
							};
							$c.leaksMemory.remove = function(e) {
								for(var t = $i.length - 1; t >= 0; t--) e == $i[t] && $i.splice(t, 1)
							}, window.attachEvent("onunload", $j)
						}
						var $k = "Shockwave Flash",
							$l = "ShockwaveFlash.ShockwaveFlash",
							$m = "application/x-shockwave-flash",
							$n = "application/x-java-vm",
							$t = {
								browser: T,
								version: U,
								isStrict: W,
								isQuirks: X,
								isOpera: E,
								isSafari: G,
								isWebKit: H,
								isChrome: !E && F,
								isAndroid: P,
								isIPhone: L,
								isIPod: M,
								isIPad: N,
								isIOS: O,
								isWP7: Q,
								isMobile: R,
								isEdge: zz,
								isNewIE: z,
								isIE: A,
								isIE6: D,
								isIE7: C,
								isIE8: B,
								isFF: I,
								isFF2: J,
								isFF3: K,
								isBorderBox: V,
								isCustomEvents: $e,
								engineIE: Z,
								bugs: $c,
								isWindows: $$,
								isXP: /windows nt 5.1/.test(y),
								isMac: $_,
								isLinux: /Linux/.test(navigator.platform),
								isSecure: $a,
								secureURL: $f,
								hasFlash: $o(),
								hasJava: $p(),
								language: $b,
								getScrollbarSize: $q,
								getWindowClientHeight: $g,
								getWindowClientWidth: $h,
								isTextContent: $d,
								hasCSP: $r()
							};
						return $t.isPC = !$t.isMobile && ($t.isWindows || $t.isMac || $t.isEdge || $t.isLinux), $t
					}(),
					x = b.__$$__jx_ui_HTMLElement,
					y = /google inc\./i,
					z = /chrome/i,
					A = /apple computer, inc\./i,
					B = /crios/i,
					C = window.navigator.userAgent || "",
					D = window.navigator.vendor || "",
					F = {
						checkLandscape: L,
						getZoomLevel: Y,
						getOffset: Z
					},
					E = G();
				_self.Device = F
			}();
			var isMobilePage = window.mobilePage || -1 != location.href.split("?")[0].indexOf("mobile");
			_self.Device.media = _self.Browser.isMobile || isMobilePage || !_self.Browser.isPC ? 2 : 1, _self.Device.OS = this.Browser.isWindows && "Windows" || this.Browser.isIPhone && "iPhone" || this.Browser.isIPad && "IPAD" || this.Browser.isIPod && "IPOD" || this.Browser.isMac && "OSX" || this.Browser.isAndroid && "Android" || this.Device.isWP && "Windows Phone" || this.Browser.isLinux && "Linux" || "others", this.hasTranslate = this.Browser.isMobile, this.setTransform = function(e, t) {
				var n = "translate(" + e + "px," + t + "px)";
				$(this).css(_self.hasTranslate ? {
					"-webkit-transform": n,
					"-o-transfrom": n,
					"-ms-transform": n,
					"-moz-transform": n,
					transform: n
				} : {
					left: e + "px",
					top: t + "px"
				})
			}, this.setScale = function() {
				function e() {
					{
						var e = _self.deviceInfo.getZoomLevel();
						(1 / e).toFixed(2), window.pageXOffset, window.pageYOffset, window.innerWidth, window.innerHeight, t[0].clientWidth, t[0].clientHeight
					}
					return
				}
				var t = this;
				e()
			};
			var _clearSlct = "getSelection" in window ? function() {
				window.getSelection().removeAllRanges()
			} : function() {
				document.selection.empty()
			};
			this.pageSlide = function(e, t) {
				$(document).on("mousedown touchstart MSPointerDown pointerdown", e, function(e) {
					e = e || window.event;
					var n = !1;
					if(!(n = _isPointerEventType(e, "down")) || _isPrimaryTouch(e)) {
						e = n ? e : e.touches && e.touches[0] || e;
						var i = {};
						i.x2 = void 0, i.y2 = void 0;
						var o = 0,
							r = 0,
							s = 0,
							a = $(this),
							c = this.parentNode.clientWidth,
							d = c / 8,
							l = parseInt(a.attr("x") || this.offsetLeft) || 0,
							u = this.clientWidth,
							m = -u + c - 20,
							h = 20;
						i.x1 = e.clientX, i.y1 = e.clientY, a.removeClass("transition");
						var f = function(e) {
								e = n ? e : e.touches && e.touches[0] || e, i.x2 = e.clientX, i.y2 = e.clientY, o = i.x2 - i.x1, r = i.y2 - i.y1;
								var t = o + l;
								t = t > h ? h : m > t ? m : t, _self.setTransform.call(a, t, 0), a.attr("x2", t), _clearSlct()
							},
							p = function(e) {
								if(_clearSlct(), a) {
									a.addClass("transition");
									var n = 0;
									if(0 == s && d < Math.abs(o)) {
										{
											parseInt(a.attr("x2"))
										}
										o >= d && 0 >= l + c ? (_self.setTransform.call(a, l + c, 0), a.attr("x", l + c), n = -1) : -d >= o && l - c + u > 0 ? (_self.setTransform.call(a, l - c, 0), a.attr("x", l - c), n = 1) : _self.setTransform.call(a, l, 0)
									} else _self.setTransform.call(a, l, 0);
									var i = t && t(n);
									return $(document).off("mousemover mousemove touchmove MSPointerMove pointermove", f).off("mouseup touchend MSPointerUp pointerup", p), a = null, _clearSlct(), i === !1 ? (e.stopPropagation && e.stopPropagation, e.preventDefault && e.preventDefault(), !1) : void 0
								}
							};
						$(document).on("mousemover mousemove touchmove MSPointerMove pointermove", f).on("mouseup touchend MSPointerUp pointerup", p)
					}
				})
			}, this.getCSSRule = function(e, t, n) {
				if(n = n || window.document, e = e.toLowerCase(), n.styleSheets)
					for(var i = 0; i < n.styleSheets.length; i++) {
						var o = n.styleSheets[i],
							r = 0,
							s = !1;
						do {
							if(s = o.cssRules ? o.cssRules[r] : o.rules[r], s && s.selectorText && s.selectorText.toLowerCase() == e) return "delete" == t ? (o.cssRules ? o.deleteRule(r) : o.removeRule(r), !0) : s;
							r++
						} while (s)
					}
				return !1
			}, this.killCSSRule = function(e) {
				return this.getCSSRule(e, "delete")
			}, this.addCSSRule = function(e) {
				return document.styleSheets && (this.getCSSRule(e) || (document.styleSheets[0].addRule ? document.styleSheets[0].addRule(e, null, 0) : document.styleSheets[0].insertRule(e + " { }", 0))), this.getCSSRule(e)
			}, this.addJS = function(e, t) {
				function n(e) {
					i.onload = i.onerror = i.onreadystatechange = null, o.removeChild(i), i = null, t(e)
				}
				var i = document.createElement("script");
				i.setAttribute("type", "text/javascript");
				var o = document.getElementsByTagName("head")[0],
					r = "onload" in i;
				r ? (i.onload = n, i.onerror = function() {
					n(!0)
				}) : i.onreadystatechange = function() {
					/loaded|complete/.test(i.readyState) && n()
				}, i.src = e, o.appendChild(i)
			}, this.addCSS = function(e) {
				var t = document.createElement("link");
				t.rel = "stylesheet", t.type = "text/css", t.href = e, t.media = "screen";
				var n = document.getElementsByTagName("head")[0];
				n.appendChild(t)
			}, this.base64encode = function(e) {
				var t, n, i, o, r, s, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
				for(i = e.length, n = 0, t = ""; i > n;) {
					if(o = 255 & e.charCodeAt(n++), n == i) {
						t += a.charAt(o >> 2), t += a.charAt((3 & o) << 4), t += "==";
						break
					}
					if(r = e.charCodeAt(n++), n == i) {
						t += a.charAt(o >> 2), t += a.charAt((3 & o) << 4 | (240 & r) >> 4), t += a.charAt((15 & r) << 2), t += "=";
						break
					}
					s = e.charCodeAt(n++), t += a.charAt(o >> 2), t += a.charAt((3 & o) << 4 | (240 & r) >> 4), t += a.charAt((15 & r) << 2 | (192 & s) >> 6), t += a.charAt(63 & s)
				}
				return t
			}, $(document).on("drag", function(e) {
				return e = e || window.event, e.preventDefault && e.preventDefault(), !1
			})
		}
	};
	Date.prototype.format = function(e) {
		var t = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			S: this.getMilliseconds()
		};
		/(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
		for(var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
		return e
	}, window.UTIL = UTIL, "undefined" == typeof console && (window.console = {
		log: function() {}
	})
}(EChatQuery);; /*!visitor/surfer/js/connect.js*/
! function(e) {
	function i() {
		function i(e) {
			D.publish("startChat", e)
		}

		function t(i) {
			D.publish("endChat", i), D.isMini && (D.unSubscribe(["sendVisitorEvent", "visitorCommonEvent"]), o(), e.cometd.disconnect(), f = !0)
		}

		function n() {
			D.hasInit = !1, D.unSubscribe("sendVisitorEvent")
		}

		function a() {
			if(!D.hasInit) {
				D.hasInit = !0; {
					setTimeout(function() {
						D.hasInit = !1
					}, 2e3)
				}
				D.unSubscribe("sendVisitorEvent"), D.subscribe("sendVisitorEvent", function(i, t) {
					switch(t.et + "") {
						case "101":
							break;
						case "102":
							break;
						case "107":
					}
					V ? e.cometd.publish("/service/visitor/event", t) : D.msgQueue.push({
						channel: "/service/visitor/event",
						message: t
					})
				}), D.publish("initSurfer")
			}
		}

		function s() {
			D.unSubscribe("sendVisitorEvent"), o(), e.cometd.disconnect(), f = !0
		}

		function o(i) {
			return i ? (p = null, y = null, h = null, I = null, k = null, void(g = null)) : (g && e.cometd.unsubscribe(g), g = null, p && e.cometd.unsubscribe(p), p = null, h && e.cometd.unsubscribe(h), h = null, y && e.cometd.unsubscribe(y), y = null, I && e.cometd.unsubscribe(I), I = null, k && e.cometd.unsubscribe(k), void(k = null))
		}

		function r() {
			y || (y = e.cometd.subscribe("/visitor/selfmsg", D, D.receiveTrack)), g || (g = e.cometd.subscribe("/visitor/session/" + D.companyId + "/" + D.visitorId + "/" + D.sessionId, D, D.receiveTrack))
		}

		function c() {
			return D.isMini ? void(h || (h = e.cometd.subscribe("/visitor/chat/" + D.companyId + "/" + D.visitorId, D, D.receiveTrack))) : (I = e.cometd.subscribe("/visitor/track/" + D.companyId, D, D.receiveTrack), p = e.cometd.subscribe("/visitor/track/" + D.companyId + "/" + D.visitorId, D, D.receiveTrack), void(k || D.routeId && (k = e.cometd.subscribe("/visitor/route/track/" + D.companyId + "/" + D.routeId, D, D.receiveTrack))))
		}

		function u(i) {
			e.cometd.batch(function() {
				r()
			}), D.preClientId = D.curClientId, D.curClientId = i.clientId, i.data && i.data.visitorId && (D.visitorId = i.data.visitorId), D.isMini && (c(), D.miniParam && (D.miniParam.visitorId = D.visitorId, D.publish("handlePureInnerChat", D.miniParam), delete D.miniParam))
		}

		function d() {
			for(D.receive({
					data: {
						user: "system",
						chat: "Connection to Server Opened"
					}
				}), a(); D.msgQueue.length > 0 && V;) {
				var i = D.msgQueue[0];
				e.cometd.publish(i.channel, i.data), self.msgQueue.shift()
			}
		}

		function m() {
			D.receive({
				data: {
					user: "system",
					chat: "Connection to Server Closed"
				}
			})
		}

		function v(e) {
			if(f) V = !1, m();
			else {
				var i = V;
				V = e.successful === !0, !i && V ? d() : "402::Unknown client" == e.error && (o(1), n())
			}
		}

		function l(e) {
			e.successful && e.data && D.receiveTrack(e), e.successful && u(e)
		}

		function b(i) {
			if(-1 != D.loaderHost.indexOf("echatsoft")) {
				var t, n = [];
				t = {
					companyId: D.companyId,
					vid: window.chatVisitorId,
					encryptVId: i.encryptVID || D.vId,
					data: JSON.stringify({
						link: location.href,
						referrer: document.referrer || ""
					})
				}, D.metaData && (t.metaData = D.metaData);
				for(var a in t)
					if(t[a]) {
						n.push("&"), n.push(a), n.push("=");
						var s = encodeURIComponent(t[a]);
						s.length > 9e3 && (s = s.substr(0, 9e3), t[a] = t[a].substr(0, 5e3)), n.push(s)
					}
				setTimeout(function() {
					e.ajax({
						url: location.protocol + "//" + i.apiServerDomain + "/chatapi/vcls?t=1" + n.join(""),
						type: "jsonp",
						jsonpCB: "jsonpCallback",
						success: function() {},
						error: function() {}
					}), n = null
				}, 10)
			}
		}
		UTIL.call(this, !0);
		var f, h, I, p, y, k, g, D = this,
			V = !1;
		this.msgQueue = [], this.join = function() {
			f = !1, D.isMini = !1;
			var i = D.dataHost + D.ECHATConfig.contextPath;
			e.cometd.configure({
				url: i
			});
			var t = "";
			"undefined" != typeof encryptVID && (t = encryptVID), "undefined" != typeof chatVisitorId && (D.chatVisitorId = chatVisitorId);
			var n = {
				from: 1,
				companyId: D.companyId,
				encryptVId: t,
				metaData: D.metaData || void 0,
				myData: D.myData || void 0,
				info: D.info || void 0,
				vip: D.vip ? 1 : 0,
				lan: D.queryParams.lan || navigator.language || navigator.browserLanguage || void 0
			};
			e.cometd.handshake({
				data: n
			})
		}, this.join_mini = function() {
			if(D.isMini = !0, "disconnected" == EChatQuery.cometd.getStatus()) {
				f = !1;
				var i = D.dataHost + D.ECHATConfig.contextPath;
				e.cometd.configure({
					url: i
				});
				var t = "";
				"undefined" != typeof encryptVID && (t = encryptVID);
				var n = {
					from: 1,
					companyId: D.companyId,
					encryptVId: t,
					metaData: D.metaData || void 0,
					myData: D.myData || void 0,
					info: D.info || void 0,
					vip: D.vip ? 1 : 0,
					lan: D.queryParams.lan || navigator.language || navigator.browserLanguage || void 0
				};
				e.cometd.handshake({
					data: n
				})
			}
		}, D.subscribe("initMiniChat", function(i, t) {
			"disconnected" == e.cometd.getStatus() && (D.join_mini(), D.miniParam = e.extend(t, {
				chatVisitorId: D.chatVisitorId,
				status: 1,
				chatStatus: 2
			}))
		}), this.receiveTrack = function(n) {
			var a = n.data;
			switch(a.mt + "") {
				case "600":
					D.publish("handshake", a), D.visitorId = a.visitorId, D.sessionId = a.sessionId, b(a);
					break;
				case "601":
					D.publish("staffInvite", a);
					break;
				case "602":
					D.publish("staffChat", a);
					break;
				case "603":
					D.publish("companyState", a);
					break;
				case "604":
					i(a), D.publish("staffInfo", a);
					break;
				case "605":
					t(a);
					break;
				case "640":
				case "641":
				case "642":
				case "647":
				case "680":
					D.publish("getMsg", a);
					break;
				case "654":
					p ? D.publish("companyState", a) : (D.visitorId = a.visitorId, D.routeId = a.routeId, 1 == a.independentJS && (D.isMini = !0), c(), D.publish("startSurfer", a), 2 == a.chatStatus && i(a));
					break;
				case "655":
				case "674":
					D.publish("getMsg", a);
					break;
				case "923":
					{
						var s = a.newVisitorId;a.oldVisitorId
					}
					D.visitorId = s, D.metaData = a.metaData, D.myData = a.myData, D.info = a.info, D.isMini || (p ? e.cometd.unsubscribe(p, void 0, function() {
						p = e.cometd.subscribe("/visitor/track/" + D.companyId + "/" + D.visitorId, D, D.receiveTrack)
					}) : p = e.cometd.subscribe("/visitor/track/" + D.companyId + "/" + D.visitorId, D, D.receiveTrack), D.publish("refreshVisitor", {
						visitorId: a.newVisitorId,
						metaData: a.metaData,
						myData: a.myData,
						info: a.info
					}));
					break;
				case "10009":
					return void e.cometd.disconnect()
			}
		}, this.receive = function() {}, D.subscribe("endSurfer", s), e.cometd.addListener("/meta/handshake", l), e.cometd.addListener("/meta/connect", v)
	}
	window.Connect = i
}(EChatQuery);; /*!visitor/surfer/js/surferClass.js*/
! function(e) {
	var i = function() {
		function i() {
			var i = r.getChatLink();
			r.chatParam = i.params;
			var t = r.chatLink = i.chatLink;
			r.miniLink = i.miniLink, r.Browser.isMobile || (e("#ECHAT_icon_link").attr("href", t), e("#ECHAT_invite_accept").attr("href", t), e("#ECHAT_invite_mask").attr("href", t), e(".echat-menu-item-max").attr("href", t))
		}

		function t(e, i, t, n, a) {
			var o = {};
			return i ? -1 != e.indexOf("left") ? (o.marginLeft = i + "px", o.marginRight = "auto") : (o.marginRight = i + "px", o.marginLeft = "auto") : (o.marginLeft = "auto", o.marginRight = "auto"), t ? -1 != e.indexOf("center") ? (o.marginTop = -(a || 0) / 2 + parseInt(t) + "px", o.marginBottom = "auto") : -1 != e.indexOf("bottom") ? (o.marginBottom = t + "px", o.marginTop = "auto") : -1 != e.indexOf("top") && (o.marginTop = t + "px", o.marginBottom = "auto") : (-1 != e.indexOf("center") && (o.marginTop = -(a || 0) / 2 + "px", o.marginBottom = "auto"), o.marginLeft = "auto", o.marginRight = "auto"), o
		}

		function n() {
			function i() {
				e(a).removeClass("echat-moving"), a.removeAttribute("unselectable"), e(a).off("mouseup", i), e(a).off("mousemove", n), e(a).off("mouseout", t)
			}

			function t(e) {
				var t = e.toElement;
				"html" == (t.nodeName || t.tagName).toLowerCase() && i(e)
			}

			function n(i) {
				e(s).css({
					left: c.left + i.clientX - r.x + "px",
					right: "auto",
					bottom: c.bottom + r.y - i.clientY + "px",
					top: "auto",
					marginLeft: 0,
					marginRight: 0
				})
			}
			var a = document.body,
				o = document.getElementById("ECHAT_menu"),
				s = document.getElementById("ECHAT_mini"),
				c = {},
				r = {};
			e(o).on("mousedown", function(o) {
				e(a).addClass("echat-moving"), a.setAttribute("unselectable", "on");
				o.target;
				c.left = s.offsetLeft, c.bottom = parseInt(s.style.bottom) || 0, r.x = o.clientX, r.y = o.clientY, e(a).on("mousemove", n), e(a).on("mouseup", i), e(a).on("mouseout", t)
			})
		}

		function a(e) {
			return
		}

		function o(e) {
			return e ? e.replace(/<(?:.|\s)*?>/gi, "") : e
		}

		function s(i) {
			r.needHttps && (i.url = i.url.replace(/^http:/, r.needHttps)), i.url = r.addEchatInnerFrameParam(i.url);
			var t = document.getElementById("ECHAT_mini"),
				n = "",
				a = document.getElementById("ECHAT_mini_site"),
				o = window.innerWidth,
				s = t.offsetLeft,
				c = t.clientWidth;
			if("number" != typeof o && (o = "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth), n = s > o - c - s ? "echat-site-left" : "echat-site-right", r.Browser.isMobile || (t.style.width = document.getElementById("ECHAT_mini_win").clientWidth + "px"), a) {
				e("#ECHAT_mini_site").addClass("echat-hidden");
				var d = e("#ECHAT_site_iframe").attr("src");
				d != i.url && e("#ECHAT_site_iframe").attr("src", i.url), setTimeout(function() {
					e("#ECHAT_mini_site").removeClass("echat-hidden")
				}, 120)
			} else {
				var l = document.createElement("DIV");
				l.className = "echat-mini-site echat-hidden " + n, l.id = "ECHAT_mini_site", t.appendChild(l), l.innerHTML = '<div class="echat-site-back"><span class="echat-site-title">' + i.title + '</span><a class="echat-site-back-icon"></a></div><iframe id="ECHAT_site_iframe" name="echatSiteIframe" class="echat-site-iframe" src="' + i.url + '" allowtransparency="true" border="0" frameborder="0"></iframe>', setTimeout(function() {
					e("#ECHAT_mini_site").removeClass("echat-hidden")
				}, 30)
			}
			r.postMessage({
				innerURL: "opening"
			})
		}

		function c(e) {
			var i = e.src.toUpperCase();
			if("PNG" == i.substring(i.length - 3, i.length)) {
				var t = e.id ? "id='" + e.id + "' " : "",
					n = e.className ? "class='" + e.className + "' " : "",
					a = e.title ? "title='" + e.title + "' " : "title='" + e.alt + "' ",
					o = "display:inline-block;" + e.style.cssText;
				"left" == e.align && (o = "float:left;" + o), "right" == e.align && (o = "float:right;" + o), e.parentElement.href && (o = "cursor:hand;" + o);
				var s = "<span " + t + n + a + ' style="width:' + (e.width || e.clientWidth) + "px; height:" + (e.height || e.clientHeight) + "px;" + o + ";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.src + "', sizingMethod='scale');\"></span>";
				e.outerHTML = s
			}
		}
		UTIL.call(this);
		var r = this;
		this.msgNum = 0, this.hasMini = !1, this.staffInvite = 0, this.ie6 = /MSIE 6/g.test(navigator.userAgent), r.ltIE9 = r.Browser.isIE && r.Browser.version < 9, this.companyOff = !1, this.Browser.isMobile && -1 != navigator.userAgent.toLowerCase().indexOf("huawei") && (this.isHuawei = !0), this.documentTitle = function() {
			if("title" in document) return document.title || "";
			var e, i = document.getElementsByTagName("title");
			return i && i[0] ? (e = i[0], "textContent" in e ? e.textContent || "" : "innerText" in e ? e.innerText || "" : "") : (e = document.createElement("title"), document.getElementsByTagName("head")[0].appendChild(e), "")
		}(document), this.subscribe("initSurfer", function() {
			if(r.ltIE9 || "undefined" != typeof r.initMid) r.sendBaseInfo();
			else var e = 0,
				i = setInterval(function() {
					e++, ("undefined" != typeof r.initMid || e > 10) && (clearInterval(i), r.sendBaseInfo())
				}, 50)
		}), this.subscribe("refreshVisitor", function(e, t) {
			r.visitorId = t.visitorId, r.metaData = t.metaData, r.myData = t.myData, r.info = t.info, i()
		}), this.subscribe("handshake", function(i, t) {
			if(r.visitorId = t.visitorId, "undefined" == typeof r.referrer) {
				var n = function(e) {
						return e ? (-1 != e.indexOf("://") && (e = e.substr(e.indexOf("://") + 3)), -1 != e.indexOf("/") && (e = e.substring(0, e.indexOf("/"))), e) : void 0
					},
					a = document.referrer;
				if(t.visitorSessionSize > 0) r.referrer = a || "";
				else {
					var o = e.cookie("echat_referrer"),
						s = location.host,
						c = a && n(a),
						d = o && "null" != o && n(o);
					a ? c && s == c ? o && "null" != o ? r.referrer = d == s ? a : o : (r.referrer = a, e.cookie("echat_referrer", r.referrer)) : a && (r.referrer = a, e.cookie("echat_referrer", r.referrer)) : o ? r.referrer = "null" == o ? "" : o : (r.referrer = "", e.cookie("echat_referrer", "null"))
				}
			}
		}), this.subscribe("startSurfer", function(i, t) {
			r.companyOff = 2 == t.status ? !0 : !1, r.visitorId = t.visitorId;
			var n = r.hasParsedParam,
				a = r.miniWinParam = t.chatBoxExtInfo,
				o = r.Device.getZoomLevel();
			if(!r.partScreen && a && a.chatBoxTopMargin && parseInt(a.chatBoxTopMargin) > 0 && (r.partScreen = parseInt(a.chatBoxTopMargin), (o > 1.1 || .9 > o) && (r.partScreen = r.partScreen / o)), t.independentJS && (r.isMini = !0), (t.chatButtonInfo || t.mobileChatButtonInfo) && r.parseParam(t), !n && r.Browser.isMobile) {
				var s = r.Device.getZoomLevel();
				1 != s && e(".echat").css("zoom", 1 / s)
			}
			a && 1 != r.echatInnerFrame && (r.pcMiniWinParam = e.extend({
				min: 1 == a.enableMinimizeBtn,
				max: 1 == a.enableMaximizeBtn,
				close: 1 == a.enableCloseBtn,
				width: a.floatingWindowWidth || 400,
				height: a.floatingWindowHeight || 550
			}, r.pcMiniWinParam), a.minimizeBtnImg && e(".echat-menu-item-min").css("background", "inherit").html('<img src="' + (r.needHttps ? a.minimizeBtnImg.replace(/^http:/i, r.needHttps) : a.minimizeBtnImg) + '"/>'), a.maximizeBtnImg && e(".echat-menu-item-max").css("background", "inherit").html('<img src="' + (r.needHttps ? a.maximizeBtnImg.replace(/^http:/i, r.needHttps) : a.maximizeBtnImg) + '"/>'), a.chatEndBtnImg && e(".echat-menu-item-close").css("background", "inherit").html('<img src="' + (r.needHttps ? a.chatEndBtnImg.replace(/^http:/i, r.needHttps) : a.chatEndBtnImg) + '"/>'), r.companyOff || 1 != a.enableOnlinePopAfterLoad || setTimeout(function() {
				!r.hasMini && r.miniChat(void 0, 8)
			}, 1e3 * (parseInt(a.onlineAutoPopLoadTime) || 0)), r.companyOff && 1 == a.enableOfflinePopAfterLoad && setTimeout(function() {
				!r.hasMini && r.miniChat(void 0, 8)
			}, 1e3 * (parseInt(a.offlineAutoPopLoadTime) || 0))), n || r.initTrailEvent(), (1 == t.chatStatus || 1 == r.echatInnerFrame) && (r.inviteTimeout && clearTimeout(r.inviteTimeout), e("#ECHAT_invite").hide()), r.chatStatus = t.chatStatus, (44 == r.companyId || r.isMini && 2 != r.chatStatus || 1 == r.echatInnerFrame) && (r.inviteTimeout && clearTimeout(r.inviteTimeout), r.publish("endSurfer")), r.isReady || (r.isReady = !0, r.publish("__ready")), r.isMini || 1 != t.chatStatus && 2 != t.chatStatus || !r.visitorEventObj || (r.publish("sendVisitorEvent", r.visitorEventObj), r.visitorEventObj = null);
			var c = t.unreadMsgNumber || t.mNumber;
			if(c) {
				if(r.setDocumentTitle("s"), r.miniUnfold) return;
				r.msgNum += parseInt(c), e(".echat-mini-num").html(r.msgNum > 9 ? "9+" : r.msgNum).show(), r.publish("__newMsg", r.msgNum)
			}
			r.publish("__newEvent", {
				act: 100,
				eventAction: "staffStatus",
				eventLabel: t.status
			})
		}), this.subscribe("staffInfo", function(i, t) {
			var n = t.staffDetailInfo || {};
			r.chatStatus = 2, r.Browser.isMobile || r.Browser.isIE && r.Browser.version < 9 || (n.staffHead ? (r.needHttps && (n.staffHead = n.staffHead.replace(/^http:/, r.needHttps)), e("#ECHAT_staff_img").attr("src", n.staffHead).css("display", "block")) : e("#ECHAT_staff_img").css("display", "none")), r.staffLabel = {
				staffId: t.staffId,
				staffNickName: t.staffNickName || "",
				staffPhone: n.staffPhone || "",
				staffHead: n.staffHead,
				staffInfo: n.staffInfo || ""
			}
		}), this.sendBaseInfo = function() {
			var i = r.initMid,
				t = e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read");
			i && t && (i = Math.max(i, t)), "undefined" != i && i || (i = void 0), this.baseInfo = {
				et: 101,
				companyId: r.companyId,
				page: location.href,
				title: r.documentTitle,
				referrer: r.referrer || "",
				media: r.Device.media,
				browserName: r.Browser.browser,
				browserVersion: r.Browser.version,
				osName: r.Device.OS,
				firstEnterUrl: r.firstUrl,
				firstEnterTitle: r.firstTitle,
				echatTag: r.echatTag || void 0,
				screenResolution: window.screen.width + "x" + window.screen.height,
				mid: i
			}, ECHATObjKeyMap.cometdId.preClientId && (this.baseInfo.preClientId = ECHATObjKeyMap.cometdId.preClientId), this.publish("sendVisitorEvent", this.baseInfo)
		};
		var d = location.href;
		this.getChatLink = function(e) {
			e = e || {};
			var i = "?companyId=" + r.companyId;
			1 == e.autoPop && (i += "&autoPop=1&autoChat=" + e.autoChat), i += "&encryptVID=" + encodeURIComponent(window.encryptVID || "") + "&chatVisitorId=" + encodeURIComponent(window.chatVisitorId || "") + (r.routeEntranceId || e.routeEntranceId ? "&routeEntranceId=" + encodeURIComponent(e.routeEntranceId || r.routeEntranceId || "") : "") + (1 == e.acceptInvite ? "&acceptInvite=1" : "") + "&enterUrl=" + encodeURIComponent(d) + "&enterTitle=" + encodeURIComponent(r.documentTitle) + "&firstUrl=" + encodeURIComponent(r.firstUrl) + "&firstTitle=" + encodeURIComponent(r.firstTitle) + (r.referrer ? "&referrer=" + encodeURIComponent(r.referrer) : "") + (r.echatIframeDisable ? "&echatIframeDisable=" + (r.echatIframeDisable || "") : "") + "&fromHost=" + (window.location.protocol + "//" + window.location.host) + (r.dataHost ? "&dataHost=" + encodeURIComponent(r.dataHost) : "") + (r.metaData || e.metaData ? "&metaData=" + encodeURIComponent(e.metaData || r.metaData) : "") + (r.myData || e.myData ? "&myData=" + encodeURIComponent(e.myData || r.myData) : "") + (r.info || e.info ? "&info=" + encodeURIComponent(e.info || r.info) : "") + (r.echatTag || e.echatTag ? "&echatTag=" + encodeURIComponent(e.echatTag || r.echatTag) : "") + (r.fastQuestion || e.fastQuestion ? "&fastQuestion=" + encodeURIComponent(e.fastQuestion || r.fastQuestion) : "") + (r.queryParams.lan || e.lan ? "&lan=" + encodeURIComponent(e.lan || r.queryParams.lan) : "") + (r.visitorEventData || r.visEvt || e.visEvt ? "&visEvt=" + encodeURIComponent(e.visEvt || r.visitorEventData || r.visEvt) : "");
			var t = this.loaderHost + "/visitor/",
				n = r.Device.getZoomLevel();
			return {
				chatLink: t + (r.Browser.isMobile ? "mobile/chat.html" : "pc/chat.html") + i,
				miniLink: t + (r.Browser.isMobile ? .9 > n | n > 1.1 ? "mobile/miniMB2.html" : "mobile/miniMB.html" : "pc/miniPC.html") + i,
				params: i
			}
		}, this.initMiniHTML = function() {
			if(!document.getElementById("ECHAT_mini_chat")) {
				var i;
				if(r.data = {
						icon: {
							enable: 0
						},
						invite: {
							enable: 0
						}
					}, r.Browser.isMobile) {
					var t = r.partScreen ? r.partScreen - 0 : "";
					"number" == typeof t ? t = "height:" + (r.isHuawei ? "calc(100% - " + t + "px);" : window.innerHeight - t + "px;") : r.partScreen && (t = "height:" + (r.isHuawei ? "calc(100% - 80px);" : window.innerHeight - 80 + "px;")), 0 == e("#ehcat_mini_holder").results.length && (i = '<div class="echat-mini-holder echat-hide" id="ehcat_mini_holder"><iframe id="ECHAT_mini_chat" style="display: none;' + t + '" name="ECHAT_mini_chat" scrolling="no" border="0" allowtransparency="true" frameborder="0"></iframe></div>')
				} else 0 == e("#ECHAT_mini").results.length && (i = '<div id="ECHAT_mini" class="echat echat-mini echat-hide echat-left-bottom" style="margin: 0px 10px 23px; display: block;">  <div id="ECHAT_mini_win" class="echat echat-mini-win"> <div class="echat-staff"><img id="ECHAT_staff_img"></div>    <div id="ECHAT_menu" class="echat-mini-btn echat-menu"><a draggable="false" class="echat-menu-item echat-menu-item-min" onclick="ECHAT.hideMiniChat(this)" href="javascript:;"></a><a draggable="false" class="echat-menu-item echat-menu-item-max" onclick="return ECHAT.maxMiniChat(this)" ></a><a draggable="false" class="echat-menu-item echat-menu-item-close" onclick="ECHAT.closeMiniChat(this)" href="javascript:;"></a></div>    <iframe id="ECHAT_mini_chat" name="ECHAT_mini_chat" scrolling="no" border="0" allowtransparency="true" frameborder="0" ondragstart="return false" onselectstart="return false" onselect="if(document.selection)document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false"></iframe> </div><div id="echat_mm" class="echat-movable-cover"></div></div>');
				if(!i) return;
				var n = document.createElement("div");
				n.innerHTML = i;
				for(var a, o = document.getElementsByTagName("body")[0], s = n.childNodes, c = 0; a = s[c++];) 1 == a.nodeType && (a = a.cloneNode(!0), o.appendChild(a));
				s = null, n = null
			}
		}, this.initCheckChatStatus = function() {}, this.initCheckNewMsg = function() {}, this.parseParamMobile = function(i, n) {
			var a = document.createElement("div"),
				o = "",
				s = null;
			if(i.icon.buttonCanClose = 0, i.icon) {
				if("0" == i.icon.mobileType && 1 == i.icon.buttonEnable) {
					var c = n.offline ? i.icon.buttonOfflineImg : i.icon.buttonOnlineImg,
						d = new Image;
					d.onload = function() {
						var n = e("#ECHAT_icon"),
							a = e("#ECHAT_icon_link"),
							o = this.width / 2,
							s = this.height / 2,
							c = t(i.icon.buttonDir || "right-center", i.icon.buttonSideMargin || 0, i.icon.buttonBottomMargin || 0, o, s);
						c.width = o + "px", c.height = s + "px", c.display = "block", n.css(c), a.css({
							width: o + "px",
							height: s + "px"
						})
					}, s = '<div id="ECHAT_icon" class="echat echat-icon echat-' + (0 != i.icon.buttonDir && i.icon.buttonDir ? i.icon.buttonDir : "right-center") + '" style="display:none;"><div id="ECHAT_icon_link" class="echat-icon-link"  onclick="return ECHAT.miniChat(this,1)""> <img id="ECHAT_icon_img"  alt="' + LANG.iconTitle + '" class="echat-icon-img" src="' + c + '"/><span class="echat-mini-num"></span></div></div>'
				} else if("1" == i.icon.mobileType && 1 == i.icon.mobileTextEnable) {
					var l = n.offline ? i.icon.mobileOfflineTxt : i.icon.mobileOnlineTxt;
					s = ' <div id="ECHAT_icon" class="echat echat-icon echat-icon-mb echat-' + i.icon.mobileDir + '" style="text-align:center;display:block;margin:' + (i.icon.mobileBottomMargin || 0) + "px " + (i.icon.mobileSideMargin || 0) + 'px !important;">   <div id="ECHAT_icon_linkmb2" class="echat-icon-mb-text"    style="display:block;background: ' + (i.icon.mobileBackColor || "false") + ';color: #ffffff;"    onclick="return ECHAT.miniChat(this,2)">' + (l || LANG.clickChat) + ' </div><div class="echat-mini-num"></div></div>'
				}!i.icon.renderId && s && (o += s, s = null)
			}
			r.initInvite = function(t) {
				r.initInvite = null;
				var n = new Image;
				n.onload = function() {
					var n = this.width / 2,
						a = this.height / 2;
					e("#ECHAT_invite").css({
						width: n + "px",
						height: a + "px",
						marginLeft: -n / 2 + "px",
						marginTop: -a / 2 + "px"
					}), "0" != i.invite.enable ? (r.inviteTimeout && clearTimeout(r.inviteTimeout), r.hasMini || r.companyOff || (r.inviteTimeout = setTimeout(function() {
						var i = e("#ECHAT_invite");
						i.css({
							visibility: "visible"
						}), r.hasMini || r.companyOff || i.show()
					}, i.invite.inviteDelaySeconds ? 1e3 * parseInt(i.invite.inviteDelaySeconds) : 0))) : t ? e("#ECHAT_invite").css({
						visibility: "visible"
					}).show() : e("#ECHAT_invite").hide().css({
						visibility: "visible"
					})
				};
				var a, o;
				i.invite.inviteAccpetBtnImg && (a = new Image, a.onload = function() {
					e("#ECHAT_invite_accept").css({
						width: this.width / 2 + "px",
						height: this.height / 2 + "px",
						lineHeight: this.height / 2 + "px",
						background: "url(" + i.invite.inviteAccpetBtnImg + ") no-repeat",
						backgroundSize: this.width / 2 + "px," + this.height / 2 + "px"
					})
				}), "1" == i.invite.inviteCanCancel && i.invite.inviteCancelBtnImg && (o = new Image, o.onload = function() {
					e("#ECHAT_invite_reject").css({
						width: this.width / 2 + "px",
						height: this.height / 2 + "px",
						lineHeight: this.height / 2 + "px",
						background: "url(" + i.invite.inviteCancelBtnImg + ") no-repeat",
						backgroundSize: this.width / 2 + "px," + this.height / 2 + "px"
					})
				});
				var s = ("1" == i.invite.inviteType ? '  <img id="ECHAT_invite_bg"  class="echat-invite-bg" src="' + i.invite.inviteBackImg + '"/>  <div class="echat-invite-container">    <div class="echat-invite-title" style="' + (i.invite.inviteTitlePos || "") + ';">' + (i.invite.inviteTitleTxt || "") + '</div>    <div class="echat-invite-text" style="' + (i.invite.inviteContentPos || "") + ';">' + (i.invite.inviteContentTxt || "") + '</div>  </div>   <div id="ECHAT_invite_accept" class="echat-invite-accept" style="' + (i.invite.inviteAcceptBtnPos || "") + ';" onclick="return ECHAT.miniChat(this,3)">     <span>' + (i.invite.inviteAcceptTxt || "&nbsp;") + "</span></div>" + ("1" == i.invite.inviteCanCancel ? '   <div id="ECHAT_invite_reject" class="echat-invite-reject" style="' + (i.invite.inviteCancelBtnPos || "") + ';" onclick="ECHAT.rejectInvite(this)">' + (i.invite.inviteCancelTxt || "") + "</div>" : "") : '<div class="echat_invite_mask" id="ECHAT_invite_mask" onclick="return ECHAT.miniChat(this,3)" >  <img id="ECHAT_invite_bg" class="echat-invite-bg" src="' + i.invite.inviteBackImg + '"/></div>') + ("1" == i.invite.inviteCanClose && i.invite.inviteCloseBtnImg ? '<div id="ECHAT_invite_close" class="echat-invite-close cursor-p" style="' + i.invite.inviteCloseBtnPos + ';" onclick="ECHAT.rejectInvite(this)"><img class="cursor-p" alt="' + LANG.close + '" src="' + i.invite.inviteCloseBtnImg + "\" onload=\"this.style.width=this.naturalWidth/2+'px';this.style.height=this.naturalHeight/2+'px';\"/></div>" : "") + "</div>";
				n && (n.src = i.invite.inviteBackImg), a && (a.src = i.invite.inviteAccpetBtnImg), o && (o.src = i.invite.inviteCancelBtnImg), document.getElementById("ECHAT_invite").innerHTML = s
			}, "0" != i.invite.enable && setTimeout(r.initInvite, 10), o += '<div id="ECHAT_invite" class="echat echat-invite ' + ("0" == i.invite.inviteType ? "allimg" : "") + '" style="visibility:hidden;display:' + (n.offline ? "none;" : "block;") + '"></div>';
			var h = (n.offline ? i.icon.innerOfflineTxt : i.icon.innerOnlineTxt, n.offline ? i.icon.innerOfflineImg : i.icon.innerOnlineImg, r.partScreen ? r.partScreen - 0 : "");
			if(h && r.supportPartScreen && ("number" == typeof h ? h = "top:" + h + "px;height:" + (r.isHuawei ? "calc(100% - " + h + "px);" : window.innerHeight - h + "px;") : r.partScreen && (h = "top:80px;height:" + (r.isHuawei ? "calc(100% - 80px);" : window.innerHeight - 80 + "px;"))), 0 == e("#ECHAT_mini_chat").results.length && (o = o + '<div class="echat-mini-holder echat-hide" id="ehcat_mini_holder">' + ("file:" == location.protocol ? '<div class="echat-mini-close" onclick="ECHAT.hideMiniChat()"></div>' : "") + '<iframe id="ECHAT_mini_chat" style="display: none;' + h + '" name="ECHAT_mini_chat" scrolling="no" border="0" allowtransparency="true" frameborder="0" ></iframe></div>'), s) {
				var m = document.createElement("div");
				m.id = "ECHAT_icon_wrap", m.className = "echat-icon-static", m.innerHTML = s, document.getElementById(i.icon.renderId).appendChild(m)
			}
			var u = navigator.userAgent.toLowerCase(),
				f = u.match(/bidubrowser|baidubrowser/i);
			if(r.Device.isAndroid && f && e("body").addClass("android-bidubrowser"), r.isHuawei ? (e("body").addClass("huawei"), r.Device.isAndroid && -1 != u.indexOf("baiduboxapp") && e("body").addClass("android-baiduboxapp")) : r.Device.isIOS && -1 != u.indexOf("baidubrowser") ? e("body").addClass("ios-baidubrowser") : r.Device.isAndroid && u.match(/lite baiduboxapp/i) ? e("body").addClass("android-lite-baiduboxapp") : r.Device.isAndroid && u.match(/baiduboxapp/i) && e("body").addClass("android-baiduboxapp"), r.Device.isAndroid && f) {
				var v = "0" == i.icon.mobileType ? i.icon.buttonDir : i.icon.mobileDir;
				v = -1 != v.indexOf("top") ? 0 : -1 != v.indexOf("center") ? .5 : 1, window.addEventListener("scroll", function() {
					var i = e("body").results[0].scrollTop;
					e("#ECHAT_icon").css("top", window.innerHeight * v + i + "px"), e("#ECHAT_invite").css("top", .5 * window.innerHeight + i + "px")
				});
				var p = e("body").results[0].scrollTop;
				e("#ECHAT_icon").css("top", window.innerHeight * v + p + "px"), e("#ECHAT_invite").css("top", .5 * window.innerHeight + p + "px")
			}
			a.innerHTML = o;
			for(var g, b = document.getElementsByTagName("body")[0], C = a.childNodes, T = 0; g = C[T++];) 1 == g.nodeType && (g = g.cloneNode(!0), b.appendChild(g));
			C = null, b = null, d && (d.src = c), document.getElementById("ehcat_mini_holder").addEventListener("touchmove", function(e) {
				return e.preventDefault && e.preventDefault(), !1
			}, !1)
		}, this.parseParam = function(i) {
			if(r.hasParsedParam) return void r.publish("companyState", i);
			if(r.hasParsedParam = !0, 1 == r.Device.media) var a = {
				invite: i.inviteBoxInfo,
				icon: i.chatButtonInfo
			};
			else var a = {
				invite: i.mobileInviteBoxInfo,
				icon: i.mobileChatButtonInfo
			};
			var o = this.data = {
				offline: r.companyOff,
				blacklist: !1,
				themeColor: a.icon.innerColor,
				textColor: "#FFFFFF",
				miniToBlank: !1,
				invite: a.invite,
				icon: a.icon
			};
			1 == r.echatInnerFrame && (o.invite.enable = "0");
			var s = r.getChatLink();
			r.chatParam = s.params;
			var c = r.chatLink = s.chatLink;
			if(r.miniLink = s.miniLink, r.needHttps) {
				var d, l;
				if(a.invite) {
					d = ["inviteAccpetBtnImg", "inviteBackImg", "inviteCancelBtnImg", "inviteCloseBtnImg"];
					for(var h = 0; h < d.length; h++) l = a.invite[d[h]], l && (a.invite[d[h]] = l.replace(/^http:/, r.needHttps))
				}
				if(a.icon) {
					d = ["buttonCloseIconImg", "buttonOfflineImg", "buttonOnlineImg", "innerOfflineImg", "innerOnlineImg"];
					for(var h = 0; h < d.length; h++) l = a.icon[d[h]], l && (a.icon[d[h]] = l.replace(/^http:/, r.needHttps))
				}
			}
			if(1 != r.Device.media || r.Browser.isMobile) return this.parseParamMobile(a, o, r.chatLink, r.miniLink);
			var m = document.createElement("div"),
				u = "",
				f = null;
			if(a.icon.buttonCanClose = 0, a.icon && 1 == a.icon.buttonEnable) {
				var v = o.offline ? a.icon.buttonOfflineImg : a.icon.buttonOnlineImg,
					p = new Image;
				p.onload = function() {
					var i = e("#ECHAT_icon"),
						n = e("#ECHAT_icon_link");
					"0" == a.icon.buttonEnable ? i.hide() : i.show();
					var o = this.width,
						s = this.height,
						c = t(a.icon.buttonDir || "right-center", a.icon.buttonSideMargin || 0, a.icon.buttonBottomMargin || 0, o, s);
					if(c.width = o + "px", c.height = s + "px", i.css(c), n.css({
							width: o + "px",
							height: s + "px"
						}), correctPNG(document.getElementById("ECHAT_icon_img")), r.ie6) {
						var d = document.getElementById("ECHAT_icon_img");
						d.style.width = o + "px", d.style.height = s + "px"
					}
				}, f = '<div id="ECHAT_icon" class="echat echat-icon echat-' + (0 != a.icon.buttonDir && a.icon.buttonDir ? a.icon.buttonDir : "right-center") + '" style="display:none;">' + ("0" == a.icon.buttonOpenType ? '<div target="_blank" id="ECHAT_icon_link" class="echat-icon-link" href="' + c + '" onclick="return ECHAT.miniChat(this,0)"><img id="ECHAT_icon_img" alt="' + LANG.iconTitle + '" class="echat-icon-img" src="' + v + '" /><span class="echat-mini-num"></span></div>' : '<a target="_blank" id="ECHAT_icon_link" class="echat-icon-link" href="' + c + '" onclick="return ECHAT.iconChat(this)"><img id="ECHAT_icon_img" alt="' + LANG.iconTitle + '" class="echat-icon-img" src="' + v + '" /><span class="echat-mini-num"></span></a>') + "</div>", a.icon.renderId || (u += f, f = null)
			}
			r.initInvite = function(i) {
				r.initInvite = null;
				var t = new Image;
				t.onload = function() {
					var t = this.width,
						n = this.height;
					if(e("#ECHAT_invite").css({
							width: t + "px",
							height: n + "px",
							marginLeft: -t / 2 + "px",
							marginTop: -n / 2 + "px"
						}), correctPNG(document.getElementById("ECHAT_invite_bg")), r.ie6) {
						var o = document.getElementById("ECHAT_invite_bg");
						o.style.width = t + "px", o.style.height = t + "px"
					}
					"0" != a.invite.enable ? (r.inviteTimeout && clearTimeout(r.inviteTimeout), r.hasMini || r.companyOff || (r.inviteTimeout = setTimeout(function() {
						var i = e("#ECHAT_invite");
						i.css({
							visibility: "visible"
						}), r.hasMini || r.companyOff || i.show()
					}, a.invite.inviteDelaySeconds ? 1e3 * parseInt(a.invite.inviteDelaySeconds) : 0))) : i ? e("#ECHAT_invite").css({
						visibility: "visible"
					}).show() : e("#ECHAT_invite").hide().css({
						visibility: "visible"
					})
				};
				var n, o;
				a.invite.inviteAccpetBtnImg && (n = new Image, n.onload = function() {
					e("#ECHAT_invite_accept").css({
						width: this.width + "px",
						height: this.height + "px",
						lineHeight: this.height + "px",
						background: "url(" + a.invite.inviteAccpetBtnImg + ") no-repeat"
					})
				}), "1" == a.invite.inviteCanCancel && a.invite.inviteCancelBtnImg && (o = new Image, o.onload = function() {
					e("#ECHAT_invite_reject").css({
						width: this.width + "px",
						height: this.height + "px",
						lineHeight: this.height + "px",
						background: "url(" + a.invite.inviteCancelBtnImg + ") no-repeat"
					})
				});
				var s = ("1" == a.invite.inviteType ? '  <img id="ECHAT_invite_bg" class="echat-invite-bg" src="' + a.invite.inviteBackImg + '"/>  <div class="echat-invite-container">    <div class="echat-invite-title" style="' + (a.invite.inviteTitlePos || "") + ';">' + (a.invite.inviteTitleTxt || "") + '</div>    <div class="echat-invite-text" style="' + (a.invite.inviteContentPos || "") + ';">' + (a.invite.inviteContentTxt || "") + '</div>  </div>   <a id="ECHAT_invite_accept" class="echat-invite-accept" style="' + (a.invite.inviteAcceptBtnPos || "") + ';" onclick="return ECHAT.inviteChat(this)" href="' + c + '" target="_blank">     <span>' + (a.invite.inviteAcceptTxt || "&nbsp;") + "</span></a>" + ("1" == a.invite.inviteCanCancel ? '   <div id="ECHAT_invite_reject" class="echat-invite-reject" style="' + (a.invite.inviteCancelBtnPos || "") + ';" onclick="ECHAT.rejectInvite(this)">' + (a.invite.inviteCancelTxt || "") + "</div>" : "") : '<a target="_blank" class="echat_invite_mask" id="ECHAT_invite_mask" href="' + c + '" onclick="return ECHAT.inviteChat(this)">  <img id="ECHAT_invite_bg" class="echat-invite-bg" src="' + a.invite.inviteBackImg + '"/></a>') + ("1" == a.invite.inviteCanClose && a.invite.inviteCloseBtnImg ? '<div id="ECHAT_invite_close" class="echat-invite-close cursor-p" style="' + a.invite.inviteCloseBtnPos + ';" onclick="ECHAT.rejectInvite(this)"><img onload="correctPNG(this)" class="cursor-p" alt="' + LANG.close + '" src="' + a.invite.inviteCloseBtnImg + '"/></div>' : "");
				t && (t.src = a.invite.inviteBackImg), n && (n.src = a.invite.inviteAccpetBtnImg), o && (o.src = a.invite.inviteCancelBtnImg), document.getElementById("ECHAT_invite").innerHTML = s
			}, "0" != a.invite.enable && setTimeout(r.initInvite, 10), u += '<div id="ECHAT_invite" class="echat echat-invite ' + ("0" == a.invite.inviteType ? "allimg" : "") + '" style="visibility:hidden;display:' + (o.offline ? "none;" : "block;") + '"></div>';
			var g = o.offline ? a.icon.innerOfflineTxt : a.icon.innerOnlineTxt,
				b = o.offline ? a.icon.innerOfflineImg : a.icon.innerOnlineImg,
				C = "margin:0 " + (a.icon.innerSideMargin || 10) + "px " + (a.icon.innerBottomMargin ? a.icon.innerBottomMargin + "px ;" : "0;") + (o.themeColor ? "background-color:" + o.themeColor + ";" : "");
			if(u = u + '  <a  id="ECHAT_mini_icon" style="display:' + ("0" == a.icon.innerEnable ? "none;" : "block;") + C + ';"  class="echat echat-mini echat-mini-icon cursor-p  echat-' + (0 != a.icon.innerDir && a.icon.innerDir ? a.icon.innerDir : "left-bottom") + '" onclick="return ECHAT.miniChat(this,2)">' + (b ? '    <div class="echat-mini-img cursor-p"  style="display:' + (b ? "block" : "none") + ';"><img width="26"  height="18" onload="correctPNG(this)" class="echat-mini-img-img" src="' + (b || "") + '"/></div>' : "") + '    <div class="echat-mini-text cursor-p" style="padding-left:' + (b ? "44" : "14") + 'px;">' + (g || LANG.clickChat) + '</div>    <div class="echat-mini-num"></div>  </a>', 0 == e("#ECHAT_mini").results.length && (u = u + '<div id="ECHAT_mini" class="echat echat-mini echat-hide echat-mini-pc echat-' + (0 != a.icon.innerDir && a.icon.innerDir ? a.icon.innerDir : "left-bottom") + ' " style="' + C + '">  <div id="ECHAT_mini_win" class="echat echat-mini-win">    <div class="echat-staff"><img id="ECHAT_staff_img"/></div>    <div id="ECHAT_menu"  class="echat-mini-btn echat-menu" ><div class="echat-menu-list"><a draggable="false" class="echat-menu-item echat-menu-item-min" onclick="ECHAT.hideMiniChat(this)" href="javascript:;"></a><a draggable="false" class="echat-menu-item echat-menu-item-max" onclick="return ECHAT.maxMiniChat(this)" target="_blank" href="' + r.chatLink + '" ></a><a draggable="false" class="echat-menu-item echat-menu-item-close" onclick="ECHAT.closeMiniChat(this)" href="javascript:;"></a></div></div>    <iframe id="ECHAT_mini_chat" name="ECHAT_mini_chat" scrolling="no" border="0" allowtransparency="true" frameborder="0" ondragstart="return false" onselectstart="return false" onselect="if(document.selection)document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false"></iframe>  </div><div id="echat_mm" class="echat-movable-cover"></div></div>'), f) {
				var l = document.createElement("div");
				l.id = "ECHAT_icon_wrap", l.className = "echat-icon-static", l.innerHTML = f, document.getElementById(a.icon.renderId).appendChild(l)
			}
			this.coverFlash(), m.innerHTML = u;
			for(var T, _ = document.getElementsByTagName("body")[0], w = m.childNodes, h = 0; T = w[h++];) 1 == T.nodeType && (T = T.cloneNode(!0), _.appendChild(T));
			w = null, _ = null, p && (p.src = v), r.ie6 && r.parseIE6Png(), n(a.icon), e("#ECHAT_mini").on("click", ".echat-site-back-icon", function() {
				r.hideInnerURLPage()
			})
		}, this.coverFlash = function() {}, this.showInvite = function() {}, this.showIcon = function() {}, this.init = function() {}, this.subscribe("_openChat", function(e, i) {
			if("blank" == i.type);
			else if("inner" == i.type);
			else if("default" == i.type) {
				if(!r.Browser.isMobile && r.openEchatWin && !r.openEchatWin.closed) try {
					return void r.openEchatWin.focus()
				} catch(t) {}
				if(1 == r.echatInnerFrame) return void r.postChatMessage({
					evt: "echatjs",
					type: "openChat"
				});
				var n;
				"invite" == i.from && (n = {
					acceptInvite: 1
				}), r.Browser.isMobile ? r.openEchatWin = window.open(r.getChatLink(n).chatLink) : (2 == r.chatStatus && (r.targetWinName = "ECHAT_WIN" + (new Date).getTime()), r.openEchatWin = window.open(r.getChatLink(n).chatLink, r.targetWinName, "width=900,height=600,top=80,left=20,directories=no,menubar=no,toolbar=no"))
			}
		});
		var l = 1;
		r.canRefresh = !1;
		var h;
		window.addEventListener && (window.addEventListener("resize", function() {
			r.focusH && r.focusH - window.innerHeight < 50 && (e("#ehcat_mini_holder").removeClass("echat-input-focus"), r.postMessage({
				action: "blurInput",
				from: "resize"
			}))
		}), window.addEventListener("message", function(t) {
			if(t.data && (t.data && "echatInnerFrameCallback" == t.data.type ? (r.echatInnerFrame = 1, r.hasParsedParam && (r.inviteTimeout && clearTimeout(r.inviteTimeout), r.publish("endSurfer"))) : "echatjs" == t.data.evt && ("echatInnerFrame" == t.data.type ? e("iframe").each(function() {
					var e = this,
						i = e.contentWindow || document.frames[e.id];
					try {
						i.postMessage({
							type: "echatInnerFrameCallback"
						}, o.origin)
					} catch(t) {
						console.log(t)
					}
				}) : "openChat" == t.data.type && (console.log("*****getCrossMessage****", t.data), r.postMessage({
					evt: "echatjs",
					type: "openChat"
				}), r.miniChat())), r.loaderHost && t.origin == r.loaderHost)) {
				if(t.data && t.data.isBridge) return r.handleBridge(t.data);
				if(2 == t.data) r.canRefresh = !1;
				else if("miniReady" == t.data) r.miniReady = !0;
				else if(3 == t.data) r.canRefresh = !0;
				else if("hideMBmini" == t.data || "hideMini" == t.data) r.hideMiniChat();
				else if("hideMBminiNoBack" == t.data) r.hideMiniChat(!0, !0);
				else if("inputScrollIosHack" == t.data) {
					{
						var n = (window.screen.height < 600 ? 242 : window.screen.width > 400 ? 335 : 322, window.innerHeight);
						window.screen.height < 600 ? .5 : window.screen.height < 700 ? .55 : .6
					}
					h = setTimeout(function() {
						h = null;
						var e = document.getElementById("ECHAT_mini_chat").getBoundingClientRect().bottom;
						100 > n - e && (document.getElementById("ehcat_mini_holder").style.height = window.screen.height - (window.screen.height < 600 ? 160 : 100) + "px")
					}, 600)
				} else if("topScroll" == t.data) a("top");
				else if("inputScroll" == t.data) e("#ehcat_mini_holder").addClass("echat-input-focus"), setTimeout(function() {
					r.focusH = window.innerHeight
				}, 500);
				else if("inputScrollStop" == t.data) r.focusH = 0, e("#ehcat_mini_holder").removeClass("echat-input-focus"), h && clearTimeout(h), document.getElementById("ehcat_mini_holder").style.height = "100%", l = 1;
				else if("toLeaveMessage" == t.data) e(".echat-staff").addClass("echat-hide");
				else if(100 == t.data.act || 200 == t.data.act) {
					if(r.publish("__newEvent", t.data), 100 == t.data.act) {
						if("chatStaffInfo" == t.data.eventAction) {
							var o = JSON.parse(t.data.eventLabel);
							r.isMini && (r.Browser.isIE && r.Browser.version < 9 || r.Browser.isMobile || (o.staffHead ? (r.needHttps && (o.staffHead = o.staffHead.replace(/^http:/, r.needHttps)), e("#ECHAT_staff_img").attr("src", o.staffHead).css("display", "block")) : e("#ECHAT_staff_img").css("display", "none"))), delete o.userSetStaffPhoto, r.staffLabel = o
						}
						"chatStatus" == t.data.eventAction && (t.data.eventLabel.match(/^end/) ? (r.chatStatus = 4, r.staffLabel = "") : "chatting" == t.data.eventLabel ? (r.chatStatus = 2, !r.isMini || e.cometd && "disconnected" != e.cometd.getStatus() || r.publish("initMiniChat", {
							fromInner: !0
						}), r.visitorEventData = "", i()) : t.data.eventLabel.match(/^leave/) ? r.chatStatus = 0 : "waiting" == t.data.eventLabel && (r.chatStatus = 1, r.visitorEventData = "", i()), r.miniChatStatus = t.data.eventLabel)
					}
				} else 300 == t.data.act && r.handleInnerURLPage(t.data);
				return !1
			}
		}, !0)), this.initTrailEvent = function() {
			function t() {
				r.initInvite && r.initInvite(!0), setTimeout(function() {
					r.staffInvite++, r.inviteTimeout && clearTimeout(r.inviteTimeout), e("#ECHAT_invite").show().css({
						visibility: "visible"
					})
				})
			}

			function n() {
				r.unSubscribe("staffInvite"), r.subscribe("staffInvite", t), r.chatStatus = 4, r.staffLabel = ""
			}
			this.subscribe("companyState", function(i, t) {
				var n = r.companyOff;
				r.companyOff = 2 == t.status ? !0 : !1, n && !r.companyOff ? (r.offToOn = !0, r.onToOff = !1) : !n && r.companyOff ? (r.onToOff = !0, r.offToOn = !1) : (r.onToOff = !1, r.offToOn = !1), r.companyOff ? (r.inviteTimeout && clearTimeout(r.inviteTimeout), e("#ECHAT_invite").hide(), e(".echat-icon-img").attr("src", r.data.icon.buttonOfflineImg), e(".echat-mini-text").html(r.data.icon.innerOfflineTxt), e(".echat-mini-img-img").attr("src", r.data.icon.innerOfflineImg), e("#ECHAT_icon_linkmb2").html(r.data.icon.mobileOfflineTxt)) : (e(".echat-icon-img").attr("src", r.data.icon.buttonOnlineImg), e(".echat-mini-text").html(r.data.icon.innerOnlineTxt), e(".echat-mini-img-img").attr("src", r.data.icon.innerOnlineImg), e("#ECHAT_icon_linkmb2").html(r.data.icon.mobileOnlineTxt), 1 == r.data.invite.enable && (r.inviteTimeout && clearTimeout(r.inviteTimeout), r.offToOn && e("#ECHAT_invite").show().css({
					visibility: "visible"
				}))), r.publish("__newEvent", {
					act: 100,
					eventAction: "staffStatus",
					eventLabel: t.status
				})
			}), this.subscribe("staffChat", function() {
				var e = r.companyOff;
				e && (r.offToOn = !0, r.onToOff = !1), r.miniChat(void 0, 5), e && (r.onToOff = !0, r.offToOn = !1)
			}), r.unSubscribe("getMsg");
			var a = {};
			r.subscribe("getMsg", function(i, t) {
				t.mid && !a[t.mid] && (a[t.mid] = 1, ("647" != t.mt || 6 != t.type && 8 != t.type && 9 != t.type) && (r.Browser.isMobile || r.setDocumentTitle("s"), r.lasMid = r.lasMid || e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read") || 0, r.lasGetMid = t.mid, r.miniUnfold && t.mid ? e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read", t.mid) : (r.msgNum++, e(".echat-mini-num").html(r.msgNum > 9 ? "9+" : r.msgNum).show(), r.publish("__newMsg", r.msgNum))))
			}), r.unSubscribe("__newMsg"), r.subscribe("__newMsg", function(e, i) {
				r.miniWinParam && i > 0 && !r.companyOff && 1 == r.miniWinParam.enableOnlineChatWhenMsg && r.miniChat(void 0, 9)
			}), r.subscribe("clearGetMsg", function(i, t) {
				r.msgNum = 0, e(".echat-mini-num").hide().html(""), r.publish("__newMsg", r.msgNum), t && t.mid && e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read", t.mid)
			}), this.subscribe("startChat", function(t, n) {
				r.visitorEventData = "", i(), 2 == n.chatStatus, r.miniUnfold && 4 == r.chatStatus && r.canRefresh && r.restartMiniChat(), r.chatStatus = 2, r.inviteTimeout && clearTimeout(r.inviteTimeout), e("#ECHAT_invite").hide(), r.unSubscribe("staffInvite"), e(".echat-staff").removeClass("echat-hide")
			}), r.subscribe("endChat", n), this.subscribe("staffInvite", t), this.subscribe("_rejectInvite", function() {
				r.publish("sendVisitorEvent", {
					et: 102,
					content: LANG.rejectInvite
				})
			})
		}, this.supportPartScreen = function() {
			var e = navigator.userAgent.toLocaleLowerCase();
			if(r.Device.isIOS) {
				if(-1 != e.indexOf("baidubrowser")) return !1
			} else if(r.Device.isAndroid && -1 != e.indexOf("baiduboxapp")) return !1;
			return !0
		}(), this.hasPartScreen = !1, this.setMobilePageHeight = function(i) {
			var t = i ? i - 0 : !1;
			r.partScreen = t;
			var n = r.Device.getZoomLevel();
			(n > 1.1 || .9 > n) && (r.partScreen = t = "number" == typeof t ? r.partScreen / n : 80 / n);
			var a, o = document.documentElement;
			if(o && e(o).removeClass("echat-html"), r.Browser.isMobile && r.partScreen && r.supportPartScreen) {
				e("body").removeClass("echat-body-hide");
				var s = "";
				"number" == typeof t ? (s = t + "px", a = r.isHuawei ? window.innerHeight - t + "px" : "calc(100% - " + t + "px)") : r.partScreen && (s = "80px", a = r.isHuawei ? window.innerHeight - 80 + "px" : "calc(100% - 80px)"), e("#ECHAT_mini_chat").css({
					top: s,
					height: a
				}), e("body").addClass("echat-body-fix"), that.hasPartScreen = !0
			} else r.Browser.isMobile && (e("body").removeClass("echat-body-fix"), e("#ECHAT_mini_chat").css({
				top: 0,
				height: "100%"
			}))
		}, this.rejectInvite = function() {
			e("#ECHAT_invite").hide(), r.staffInvite && r.publish("_rejectInvite"), 2 == r.data.invite.inviteTimes && r.data.invite.inviteRepeat > 0 && (r.inviteTimeout = setTimeout(function() {
				e("#ECHAT_invite").show().css({
					visibility: "visible"
				}), r.data.invite.inviteRepeat = +r.data.invite.inviteRepeat - 1
			}, r.data.invite.inviteIntervalSeconds ? 1e3 * +r.data.invite.inviteIntervalSeconds : 5e3))
		}, this.iconChat = function() {
			return r.publish("_openChat", {
				type: "default",
				from: "icon"
			}), !1
		}, this.inviteChat = function() {
			return r.publish("_openChat", {
				type: "default",
				from: "invite"
			}), !1
		}, this.maxMiniChat = function() {
			return r.publish("_openChat", {
				type: "default",
				from: "mini"
			}), !1
		}, this.restartMiniChat = function() {
			this.miniUnfold = !0, r.miniLink = r.getChatLink(arguments[2]).miniLink, r.hasMini && e("#ECHAT_mini_chat").attr("src", r.miniLink + "&time=" + (new Date).getTime() + "#TOECHAT")
		}, this.ltIE9 = r.Browser.isIE && r.Browser.version < 9, this.ltIE8 = r.Browser.isIE && r.Browser.version < 8, this.initScale = function() {
			if(r.Browser.isMobile) {
				var i = r.Device.getZoomLevel();
				1 != i && e(".echat").css("zoom", 1 / i)
			}
			r.initScale = !1;
			for(var t, n = document.getElementsByTagName("meta"), a = 0; a < n.length; a++)
				if(t = n[a], "viewport" == t.name || "viewport" == t.getAttribute("name")) {
					t.setAttribute("id", "echatTempViewport"), r.viewportContent = t.getAttribute("content");
					break
				}
			r.toggleViewport = function(e) {
				return
			}
		}, this.miniChat = function(i, t, n, a) {
			if(r.initScale && r.initScale(), 1 == r.echatInnerFrame) return void r.postChatMessage({
				evt: "echatjs",
				type: "openChat"
			});
			var o = !this.miniUnfold,
				s = r.hasMini;
			0 == e("#ECHAT_mini_chat").results.length && r.initMiniHTML(), this.miniUnfold = !0, r.toggleViewport && r.toggleViewport(!0);
			var c = 6 == t || !s && r.visitorId && (5 == t || 7 == t) && 4 != r.chatStatus && !r.Browser.isMobile && 1 == e.cookie("ECHAT_" + r.companyId + "_" + r.visitorId + "_miniHide");
			!r.Browser.isMobile || s || 6 != t && 7 != t || (c = !0), o || (c = !1), c || (e("#ECHAT_mini_icon").hide(), e.cookie("ECHAT_" + r.companyId + "_" + r.visitorId + "_miniHide", "0")), r.inviteTimeout && clearTimeout(r.inviteTimeout), e("#ECHAT_invite").hide();
			var d = r.data;
			if(i && i.nodeType && d.miniToBlank) return e(i).attr("target", "_blank").attr("href", r.getChatLink(n).chatLink), e("#ECHAT_icon").hide(), r.publish("_openChat", {
				type: "blank",
				from: "mini"
			}), !0;
			r.Browser.isMobile && o && (r.windowLastTop = document.body.scrollTop || 0, document.body.scrollTop = 0, window.scrollTo(0, 0));
			var l = e("body").hasClass("echat-win-show"),
				h = !1;
			if(r.hasMini) 2 != r.chatStatus && 1 != r.chatStatus && r.miniLink.replace("&miniInitHide=1", "") != r.getChatLink(n).miniLink ? (r.miniLink = r.getChatLink(n).miniLink, e("#ECHAT_mini_chat").attr("src", r.miniLink), h = !1) : !r.isMini && r.ltIE9 || "leaveToUrl" == !r.miniChatStatus ? (r.offToOn || 4 == r.chatStatus || 5 == t) && r.restartMiniChat(arguments) : h = !0, r.offToOn = !1;
			else {
				if(r.hasMini = !0, r.Browser.isMobile) {
					e("body").addClass("echat-win-show");
					var m = document.documentElement;
					m && e(m).addClass("echat-html"), r.partScreen || e("body").addClass("echat-body-hide")
				}
				r.initHistoryLength = window.history.length || 0, 8 == t && 2 != r.chatStatus && (n = n || {}, n.autoPop = "1", n.autoChat = r.miniWinParam && 1 == r.miniWinParam.enableOnlineChatWhenPop ? "1" : "0"), r.miniLink = r.getChatLink(n).miniLink, c && (r.miniLink += "&miniInitHide=1"), e("#ECHAT_mini_chat").attr("src", r.miniLink)
			}
			2 != r.chatStatus && 1 != r.chatStatus && 3 != r.chatStatus && (r.chatStatus = 0);
			var u = {},
				f = document.getElementById("ECHAT_mini"),
				v = "auto !important",
				p = "px !important";
			if(!r.Browser.isMobile && !s) {
				r.pcMiniWinParam = e.extend({
					left: void 0,
					right: void 0,
					bottom: void 0,
					width: 400,
					height: 550,
					min: !0,
					max: !0,
					close: !0
				}, r.pcMiniWinParam), a = e.extend(r.pcMiniWinParam, a || {}), u.width = (a && a.width || 400) + p, u.height = (a && a.height || 550) + p, a && (a.left ? (u.left = a.left + p, u.right = v, u.marginLeft = "0px", u.marginRight = "0px") : a.right && (u.left = v, u.right = a.right + p, u.marginLeft = "0px", u.marginRight = "0px"), a.bottom ? (u.bottom = a.bottom + p, u.top = v) : a.top && (u.bottom = v, u.top = a.top + p), a.min === !1 ? e(".echat-menu-item-min").addClass("hide") : e(".echat-menu-item-min").removeClass("hide"), a.max === !1 ? e(".echat-menu-item-max").addClass("hide") : e(".echat-menu-item-max").removeClass("hide"), a.close === !1 ? e(".echat-menu-item-close").addClass("hide") : e(".echat-menu-item-close").removeClass("hide"));
				var g = "";
				for(var i in u) g += ";" + i + ":" + u[i];
				f.style.cssText = f.style.cssText + g
			}
			if(f = null, e("#ehcat_mini_holder").removeClass("echat-hide"), r.Browser.isMobile) {
				history.pushState && (l || c || (r.lastHash = "#TOECHAT" + (new Date).getTime(), history.pushState({
					title: LANG.onlineStaff
				}, LANG.onlineStaff, location.href + r.lastHash))), e("body").addClass("echat-win-show");
				var m = document.documentElement;
				m && e(m).addClass("echat-html"), r.partScreen && r.supportPartScreen ? r.partScreen && e("body").addClass("echat-body-fix") : e("body").addClass("echat-body-hide")
			}
			if(o && !c) {
				var b = e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read");
				r.lasGetMid && (!b || r.lasGetMid > parseInt(b)) && e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read", r.lasGetMid, {
					local: !0
				})
			}
			return c ? (r.hideMiniChat(void 0, void 0, !0), r.postMessage({
				action: "showMiniChat",
				mayNeedRestart: h,
				type: t,
				hide: !0
			})) : (e("#ECHAT_mini").show(), this.miniUnfold = !0, r.publish("__showMiniWin", 1), r.publish("clearGetMsg"), r.postMessage({
				action: "showMiniChat",
				mayNeedRestart: h,
				type: t
			})), !1
		}, this.hideMiniChat = function(i, t, n) {
			if(r.toggleViewport && r.toggleViewport(!1), r.hideInnerURLPage(), e.cookie("ECHAT_" + r.companyId + "_" + r.visitorId + "_miniHide", "1"), this.miniUnfold !== !1) {
				if(r.postMessage({
						action: "hideMiniChat"
					}), r.SCROLLTIMER && clearTimeout(r.SCROLLTIMER), this.miniUnfold = !1, n || r.publish("clearGetMsg"), e("#ECHAT_mini").hide(), e("#ehcat_mini_holder").addClass("echat-hide"), 1 == r.data.icon.innerEnable && e("#ECHAT_mini_icon").show(), r.Browser.isMobile) {
					if(!t && i !== !0 && history.pushState && e("body").hasClass("echat-win-show")) {
						if(e("body").removeClass("echat-win-show").removeClass("echat-body-hide"), "MicroMessenger" != navigator.userAgent.match(/MicroMessenger/i) && !navigator.userAgent.match(/MQQBrowser/i)) try {
							(r.initHistoryLength < window.history.length || r.lastHash && -1 != location.href.indexOf(r.lastHash)) && history.back()
						} catch(a) {}
					} else e("body").removeClass("echat-win-show").removeClass("echat-body-hide");
					var o = document.documentElement;
					o && e(o).removeClass("echat-html")
				} else r.publish("__newEvent", {
					act: 100,
					eventAction: "visitorHide",
					eventLabel: ""
				});
				return r.Browser.isMobile && "undefined" != typeof r.windowLastTop && setTimeout(function() {
					document.body.scrollTop = r.windowLastTop, window.scrollTo(0, r.windowLastTop)
				}, 20), r.miniWinParam && 4 != r.chatStatus && (r.autoPopTimer && clearTimeout(r.autoPopTimer), r.companyOff && 1 == r.miniWinParam.enableOfflinePopAfterHide ? r.autoPopTimer = setTimeout(function() {
					r.miniChat(void 0, 8)
				}, 1e3 * (parseInt(r.miniWinParam.offlineAutoPopHideTime) || 0)) : r.companyOff || 1 != r.miniWinParam.enableOnlinePopAfterHide || (r.autoPopTimer = setTimeout(function() {
					r.miniChat(void 0, 8)
				}, 1e3 * (parseInt(r.miniWinParam.onlineAutoPopHideTime) || 0)))), !0
			}
		}, this.targetWinName = "ECHAT_WIN", this.openChatWindow = function(e, i, t) {
			if(i = i || {}, !r.Browser.isMobile && r.openEchatWin && !r.openEchatWin.closed) try {
				return void r.openEchatWin.focus()
			} catch(n) {}
			if(1 == r.echatInnerFrame) return void r.postChatMessage({
				evt: "echatjs",
				type: "openChat"
			});
			var a, o = r.getChatLink(i).chatLink;
			if(t) {
				var s = window.screen.width / 2,
					c = window.screen.height - 100,
					d = s > 900 ? 900 : s;
				d = 600 > d ? 600 : d, c = c > 600 ? 600 : c, c = 500 > c ? 500 : c;
				var l = t.features || "width=" + (t.width || d) + ",height=" + (t.height || c) + ",top=80,left=20,directories=no,menubar=no,toolbar=no";
				return r.Browser.isMobile ? r.openEchatWin = a = window.open(o, void 0, l) : (2 == r.chatStatus && (r.targetWinName = "ECHAT_WIN" + (new Date).getTime(), t.name && (t.name = t.name + (new Date).getTime())), r.openEchatWin = a = window.open(o, t.name || r.targetWinName, l)), a
			}
			return r.Browser.isMobile ? r.miniChat(void 0, 4, i) : (r.openEchatWin = a = window.open(o), a)
		}, this.surferEndChat = function() {
			"disconnected" != EChatQuery.cometd.getStatus() && window.ltIE10 || !r.postMessage({
				action: "closeChat"
			}) ? r.publish("sendVisitorEvent", {
				et: 107,
				content: LANG.closeInner
			}) : "disconnected" == EChatQuery.cometd.getStatus() && r.publish("endChat")
		}, this.pageTitle = r.documentTitle || "", this.titles = [LANG.newMsg, this.pageTitle], this.showChangeTitle = !1, this.setPageTitle = function(e) {
			return e ? (this.pageTitle = e, this.titles[1] = e, !0) : void 0
		};
		var m = function() {
			r.showChangeTitle = !1, r.setDocumentTitle("c")
		};
		e(window).on("focus", m).on("blur", function() {
			r.showChangeTitle = !0
		});
		var u = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null,
			f = u && u.replace(/hidden/i, "visibilitychange");
		e(window).on("focus", m).on("blur", function() {
			r.showChangeTitle = !0
		}), u && document.addEventListener(f, function() {
			document[u] ? r.showChangeTitle = !0 : m(1)
		}), e(document).on("mouseover keydown touchstart", m).on("mouseout", function() {
			r.showChangeTitle = !0
		}), e("#ECHAT_mini_chat").on("mouseover keydown touchend", m);
		var v = function() {
			if("title" in document) return function(e) {
				document.title = e
			};
			var e, i = document.getElementsByTagName("title");
			return i && i[0] ? e = i[0] : (e = document.createElement("title"), document.getElementsByTagName("head")[0].appendChild(e)), "textContent" in e ? function(e) {
				document.getElementsByTagName("title")[0].textContent = e
			} : "innerText" in e ? function(e) {
				document.getElementsByTagName("title")[0].innerText = e
			} : function() {}
		}(document);
		this.setDocumentTitle = function(e) {
			if(r.showChangeTitle && "c" != e) {
				if(v(r.titles[0]), !r.pageTitleTimer) {
					var i = 1;
					r.pageTitleTimer = setInterval(function() {
						v(r.titles[i++ % 2])
					}, 800)
				}
			} else v(r.pageTitle), clearInterval(r.pageTitleTimer), r.pageTitleTimer = null
		}, this.refreshVisitorMetaData = function(e, i, t) {
			e && t && r.publish("sendVisitorEvent", {
				et: 125,
				metaData: e,
				myData: i,
				info: t
			})
		}, this.getVisitorId = function() {
			return r.visitorId || void 0
		}, this.getChatPageUrl = function(e) {
			return e ? r.getChatLink(e).chatLink : r.chatLink || r.getChatLink().chatLink
		}, this.pushVisitorEvent = function(e) {
			2 != r.chatStatus && 1 != r.chatStatus && (r.visitorEventData = JSON.stringify(e), i());
			var t = {
				et: 126,
				customizeMsgType: e.customizeMsgType || 1,
				dedup: 0,
				eventId: e.eventId,
				title: o(e.title),
				content: e.content,
				imageUrl: e.imageUrl,
				url: e.url,
				memo: o(e.memo),
				visibility: e.visibility,
				urlEnableForVisitor: e.urlEnableForVisitor,
				closeURLPage: e.closeURLPage
			};
			"disconnected" == EChatQuery.cometd.getStatus() || r.isMini === !0 || 1 == r.echatInnerFrame ? ! function() {
				function i(e) {
					var i, t = "";
					for(var n in e) i = 0 === e[n] || e[n] === !1 ? e[n] + "" : e[n] || "", i && (t += (t ? "&" : "") + n + "=" + encodeURIComponent(i));
					return t
				}
				var t = {
					companyId: r.companyId,
					customizeMsgType: e.customizeMsgType || 1,
					eventId: e.eventId,
					title: o(e.title),
					content: e.content,
					imageUrl: e.imageUrl,
					url: e.url,
					memo: o(e.memo),
					visibility: e.visibility,
					urlEnableForVisitor: e.urlEnableForVisitor,
					closeURLPage: e.closeURLPage,
					encryptVID: window.encryptVID,
					metadata: r.metaData,
					info: r.info
				};
				r.metaData && (t.myData = r.myData);
				var n = r.dataHost + "/cms?" + i(t);
				r.addJS(n, function(e) {})
			}() : 2 == r.chatStatus || 1 == r.chatStatus ? r.publish("sendVisitorEvent", t) : r.isReady ? r.publish("sendVisitorEvent", t) : r.visitorEventObj = t
		}, this.parseIE6Png = function() {
			function e() {
				i.onreadystatechange = null, t.removeChild(i), i = null, setTimeout(function() {
					DD_belatedPNG.fix(".echat-invite-reject,.echat-invite-accept,.echat-menu-item-icon,.fr"), correctPNG(!1)
				}, 500)
			}
			var i = document.createElement("script");
			i.setAttribute("type", "text/javascript");
			var t = document.getElementsByTagName("head")[0];
			i.onreadystatechange = function() {
				i.readyState && /loaded|complete/.test(i.readyState) && e()
			}, i.src = this.loaderHost + "/visitor/common/lib/DD_belatedPNG_0.0.8a.js", t.appendChild(i)
		}, this.handleInnerURLPage = function(e) {
			"open" == e.type ? s(e) : r.hideInnerURLPage(e)
		}, this.initBridge = function() {
			function i() {
				var t = e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read");
				t && r.lasGetMid && (t == r.lasGetMid || t > r.lasGetMid) && r.publish("clearGetMsg"), n = setTimeout(i, 1e3)
			}
			var t = "";
			"undefined" != typeof encryptVID && (t = encryptVID), "undefined" != typeof chatVisitorId && (r.chatVisitorId = chatVisitorId);
			var n;
			n = setTimeout(i, 1e3);
			var a = {},
				o = r.loaderHost + "/visitor/surfer/bridge.html?companyId=" + r.companyId + "&visitorId=" + encodeURIComponent(r.chatVisitorId) + "&fromHost=" + encodeURIComponent(location.origin),
				s = document.createElement("div");
			s.style.cssText = "display:none", s.innerHTML = '<iframe id="echatBridgeIframe" src="' + o + '"></iframe>', document.getElementsByTagName("body")[0].appendChild(s), r.handleBridge = function(i) {
				"undefined" == typeof a.mid ? (a.mid = Math.max(i.mid, e.cookie("ECHAT_" + r.companyId + "_" + window.chatVisitorId + "_mid_read") || 0), r.initMid = a.mid) : (i.mid && a.mid != i.mid && (a.mid = i.mid, r.publish("clearGetMsg", i)), 2 == i.chatStatus && 2 != r.chatStatus && (r.chatStatus = i.chatStatus, a.chatStatus = i.chatStatus, r.publish("initMiniChat", i)), a.chatStatus != i.chatStatus && (r.chatStatus = i.chatStatus), i.staffHead && a.staffHead != i.staffHead && (a.staffHead = i.staffHead, r.publish("handlePureInnerChat_staffHead", i)))
			}
		}, this.subscribe("handlePureInnerChat", function(t, n) {
			n.fromInner || !r.Browser.isMobile && !n.refresh || r.miniChat(void 0, n.refresh ? 7 : 6, void 0), "undefined" != typeof n.chatStatus && (r.chatStatus = n.chatStatus), 2 == r.chatStatus && (r.visitorEventData = "", i()), n.staffHead ? e("#ECHAT_staff_img").attr("src", n.staffHead).show() : !1
		}), this.subscribe("handlePureInnerChat_staffHead", function(i, t) {
			t.staffHead ? e("#ECHAT_staff_img").attr("src", t.staffHead).show() : e("#ECHAT_staff_img").hide()
		}), this.addEchatInnerFrameParam = function(e) {
			if(e) {
				var i = e.split("#"),
					t = i[1] || "",
					n = i[0],
					a = -1 == n.indexOf("?") ? 0 : 1;
				return n + (a ? "&" : "?") + "echatInnerFrame=1" + (t ? "#" : "") + t
			}
		}, this.hideInnerURLPage = function() {
			e("#ECHAT_mini_site").remove(), r.postMessage({
				innerURL: "closed"
			})
		}, this.posInnerURLPage = function() {}, this.setChatLanRes = function(e) {
			r.postMessage({
				action: "extendLanRes",
				lanRes: e
			})
		}, this.postMessage = function(e) {
			if(!r.hasMini || !r.miniReady) return !1;
			try {
				return(document.getElementById("ECHAT_mini_chat").contentWindow || document.frames.ECHAT_mini_chat).postMessage(e, r.loaderHost || "*"), !0
			} catch(i) {}
			return !1
		}, this.postChatMessage = function(e) {
			if(!e || window.top == window.self) return !1;
			try {
				return e.origin = location.protocol + "//" + location.host, window.parent.postMessage(e, "*"), !0
			} catch(i) {}
			return !1
		};
		var p = [];
		window.correctPNG = function(e) {
			if(r.ie6 && (e && p.push(e), "undefined" != typeof DD_belatedPNG)) {
				for(var i = 0; i < p.length; i++) {
					var t = p[i];
					"echat-mini-img-img" == t.className ? c(t) : DD_belatedPNG.fixPng(p[i])
				}
				p = []
			}
		}
	};
	window.Surfer = i
}(EChatQuery);; /*!visitor/surfer/js/surfer.js*/
var LANG = {
	iconTitle: "å¯¹è¯å›¾æ ‡",
	clickChat: "ç‚¹å‡»å’¨è¯¢",
	invite: "é‚€è¯·çª—å£",
	close: "å…³é—­",
	unfoldIcon: "å±•å¼€å›¾æ ‡",
	foldIcon: "å…³é—­å›¾æ ‡",
	closeInner: "è®¿å®¢ä»Žå†…é¡µç»“æŸå¯¹è¯",
	rejectInvite: "è®¿å®¢æ‹’ç»é‚€è¯·",
	onlineStaff: "åœ¨çº¿å®¢æœ",
	newMsg: "æ‚¨æœ‰æ–°æ¶ˆæ¯..."
};
! function(t) {
	function e(t, e) {
		function n(t) {
			a.onload = a.onerror = a.onreadystatechange = null, i.removeChild(a), a = null, e(t)
		}
		var a = document.createElement("script");
		a.setAttribute("type", "text/javascript");
		var i = document.getElementsByTagName("head")[0],
			r = "onload" in a;
		r ? (a.onload = n, a.onerror = function() {
			n(!0)
		}) : a.onreadystatechange = function() {
			/loaded|complete/.test(a.readyState) && n()
		}, a.src = t, i.appendChild(a)
	}

	function n() {
		function e(e) {
			var n;
			if("object" != typeof e) return {};
			n = e;
			var a = {},
				i = {
					mini: 1,
					domain: 1,
					companyId: 1,
					echatTag: 1,
					myData: 1,
					metaData: 1,
					info: 1,
					routeEntranceId: 1,
					lan: 1,
					visEvt: 1,
					pcMiniWinParam: 1,
					partScreen: 1,
					loaderHost: 1,
					echatIframeDisable: 1,
					echatInnerFrame: 1
				};
			for(var r in n) i[r] && ("domain" == r ? (a.dataHost = o.param.dataHost = location.protocol + "//" + n.domain, o.param.loaderHost || (o.param.loaderHost = a.dataHost)) : ("metaData" == r || "info" == r) && (a.vip = o.param.vip = 1), a[r] = o.param[r] = "pcMiniWinParam" == r ? "object" == typeof n[r] ? n[r] : void 0 : "string" != typeof n[r] ? JSON.stringify(n[r]) : n[r]);
			return o.param.queryParams = t.extend(o.param.queryParams || {}, e), a
		}
		if(window._echat = function() {
				var t, e = arguments,
					n = e[0];
				if(r[n]) {
					t = [];
					for(var a = 1; a < e.length; a++) t[a - 1] = e[a];
					return r[n].apply(r, t)
				}
			}, window._echat.isInit = !0, r.initParam = function(t) {
				t && e(t)
			}, r.on = function(t) {
				if(t) {
					if("function" == typeof t.init)
						if(r.isInit) try {
							t.init()
						} catch(e) {} else u.subscribe("__init", function(e, n) {
							try {
								t.init(n)
							} catch(a) {}
						});
					if("function" == typeof t.ready)
						if(r.isReady && r.isReady()) try {
							t.ready()
						} catch(e) {} else u.subscribe("__ready", function(e, n) {
							try {
								t.ready(n)
							} catch(a) {}
						});
					"function" == typeof t.newMsg && u.subscribe("__newMsg", function(e, n) {
						try {
							t.newMsg(n)
						} catch(a) {}
					}), "function" == typeof t.newEvent && u.subscribe("__newEvent", function(e, n) {
						100 == n.act ? n.eventCategory = "echat" : 200 == n.act && (n.eventCategory = "analytics"), setTimeout(function() {
							t.newEvent(n)
						}, 1)
					})
				}
			}, r.off = function(t) {
				t && u.unSubscribe(t)
			}, window.ECHAT = {
				on: r.on,
				off: r.off
			}, "function" == typeof c && c.q)
			for(var n = c.q, a = 0; a < n.length; a++)("initParam" == n[a][0] || "on" == n[a][0]) && (_echat.apply(_echat, n[a]), n[a][0] = void 0);
		u.subscribe("__ready", function() {
			try {
				if("function" == typeof c && c.q)
					for(var t = c.q, e = 0; e < t.length; e++) t[e][0] && _echat.apply(_echat, t[e])
			} catch(n) {}
		})
	}

	function a(t) {
		function e(t) {
			var e;
			e = "string" == typeof t ? {
				echatTag: t
			} : "object" == typeof t ? t : {};
			var n = {},
				a = {
					visEvt: 1,
					lan: 1,
					echatTag: 1,
					info: 1,
					myData: 1,
					metaData: 1,
					fastQuestion: 1,
					routeEntranceId: 1
				};
			for(var i in e) a[i] && (n[i] = "string" != typeof e[i] ? JSON.stringify(e[i]) : e[i]);
			return n
		}
		t.ec = r, r.isInit = !0, r.isReady = function() {
			return t.isReady
		}, r.customOpenChat = function(n) {
			var a = e(n);
			return u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), t.openChatWindow(void 0, a, !1)
		}, r.customNewWinChat = function(n, a) {
			var i = e(n);
			return u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), a || (n = n || {}, a = {
				features: n.features,
				width: n.width,
				height: n.height,
				name: n.name
			}), t.openChatWindow(void 0, i, a)
		}, r.customMiniChat = function(n) {
			var a = e(n),
				i = arguments[1];
			return !i && n && (i = n.pcMiniWinParam), u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), t.miniChat(void 0, 4, a, i)
		}, r.pushVisitorEvent = function(e) {
			e && (e.url || e.imageUrl) && t.pushVisitorEvent(e)
		}, r.getChatPageUrl = function(n) {
			return n && (n = e(n)), t.getChatPageUrl(n)
		}, r.getEchatVisitorId = function() {
			return t.getVisitorId()
		}, r.setPageTitle = function(e) {
			return e && t.setPageTitle(e)
		}, r.setMobilePageHeight = function(e) {
			t.setMobilePageHeight(e)
		}, r.setMobilePageTop = function(e) {
			t.setMobilePageHeight(e)
		}, r.getMiniStatus = function() {
			return t.miniUnfold ? "open" : "close"
		}, r.getChatStatus = function() {
			return 4 == t.chatStatus ? 0 : t.chatStatus
		}, r.getUnReadMsgCount = function() {
			return t.msgNum
		}, r.getChatStaffInfo = function() {
			return t.staffLabel
		}, r.setFastQuestion = function(e) {
			return t.fastQuestion = e || ""
		}, r.setChatLanRes = function(e) {
			return t.setChatLanRes(e)
		}, r.rejectInvite = function(e) {
			return t.rejectInvite(e)
		}, r.iconChat = function() {
			return u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), t.iconChat()
		}, r.inviteChat = function() {
			return u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), t.inviteChat()
		}, r.miniChat = function() {
			return u.publish("__newEvent", {
				act: 200,
				eventAction: "Button Clicked"
			}), t.miniChat.apply(t, arguments)
		}, r.hideMiniChat = function() {
			return t.hideMiniChat()
		}, r.closeMiniChat = function() {
			return(4 == t.chatStatus || "leaveToUrl" == t.miniChatStatus) && t.hideMiniChat(), t.surferEndChat(), !0
		}, r.maxMiniChat = function() {
			return t.hideMiniChat(), t.maxMiniChat()
		}, window.ECHAT.isInit = !0, window.ECHAT.isReady = function() {
			return r.isReady()
		}, window.ECHAT.customOpenChat = function() {
			return r.customOpenChat.apply(r, arguments)
		}, window.ECHAT.customNewWinChat = function() {
			return r.customNewWinChat.apply(r, arguments)
		}, window.ECHAT.customMiniChat = function() {
			return r.customMiniChat.apply(r, arguments)
		}, window.ECHAT.refreshVisitorMetaData = function(e, n, a) {
			return t.refreshVisitorMetaData(e, n, a)
		}, window.ECHAT.pushVisitorEvent = function() {
			return r.pushVisitorEvent.apply(r, arguments)
		}, window.ECHAT.getChatPageUrl = function() {
			return r.getChatPageUrl.apply(r, arguments)
		}, window.ECHAT.getEchatVisitorId = function() {
			return r.getEchatVisitorId.apply(r, arguments)
		}, window.ECHAT.setPageTitle = function() {
			return r.setPageTitle.apply(r, arguments)
		}, window.ECHAT.setMobilePageHeight = function() {
			return r.setMobilePageHeight.apply(r, arguments)
		}, window.ECHAT.setMobilePageTop = function() {
			return r.setMobilePageTop.apply(r, arguments)
		}, window.ECHAT.getMiniStatus = function() {
			return r.getMiniStatus.apply(r, arguments)
		}, window.ECHAT.getChatStatus = function() {
			return r.getChatStatus.apply(r, arguments)
		}, window.ECHAT.getUnReadMsgCount = function() {
			return r.getUnReadMsgCount.apply(r, arguments)
		}, window.ECHAT.getChatStaffInfo = function() {
			return r.getChatStaffInfo.apply(r, arguments)
		}, window.ECHAT.setFastQuestion = function() {
			return r.setFastQuestion.apply(r, arguments)
		}, window.ECHAT.setChatLanRes = function() {
			return r.setChatLanRes.apply(r, arguments)
		}, window.ECHAT.rejectInvite = function() {
			return r.rejectInvite.apply(r, arguments)
		}, window.ECHAT.iconChat = function() {
			return r.iconChat.apply(r, arguments)
		}, window.ECHAT.inviteChat = function() {
			return r.inviteChat.apply(r, arguments)
		}, window.ECHAT.miniChat = function() {
			return r.miniChat.apply(r, arguments)
		}, window.ECHAT.hideMiniChat = function() {
			return r.hideMiniChat.apply(r, arguments)
		}, window.ECHAT.closeMiniChat = function() {
			return r.closeMiniChat.apply(r, arguments)
		}, window.ECHAT.maxMiniChat = function() {
			return r.maxMiniChat.apply(r, arguments)
		}
	}

	function i() {
		function e() {
			t("body").hasClass("echat-win-show") && n.hideMiniChat(!0)
		}
		var n = new Surfer,
			i = new Connect;
		ECHATObjKeyMap.cometdId = i, ECHATObjKeyMap.surferId = n, i.setSub("surferId"), n.setSub("cometdId"), n.setSub("surferId"), n.setSub("outerId"), n.connect = i, i.surfer = n, a(n);
		var r = document.createElement("link");
		r.rel = "stylesheet", r.type = "text/css", r.href = o.param.loaderHost + "/visitor/surfer/css/surfer_b4acfad.css", r.media = "screen";
		var c = document.getElementsByTagName("head")[0];
		c.appendChild(r), t.store(o.param.domain + "_" + o.param.companyId + "_encryptVID", encryptVID), t.store(o.param.domain + "_" + o.param.companyId + "_chatVisitorId", chatVisitorId), s(n), s = null, o.setParam(n), o.setParam(i), o.setParam(window.ECHATConfig), o = null, n.pcMiniWinParam = n.pcMiniWinParam || {}, n.initBridge(), i.join(), -1 != n.loaderHost.indexOf("https:") && (n.needHttps = "https:"), u.publish("__init"), n.Browser.isMobile && history.pushState && setTimeout(function() {
			window.addEventListener("popstate", function() {
				e()
			})
		}, 2e3)
	}
	var r = {},
		o = function() {
			function t(t) {
				var e = t.match(i);
				return e && e[0].substr(1)
			}

			function e(t) {
				return t.hasAttribute ? t.src : t.getAttribute("src", 4)
			}
			var n, a, i = /[?#][^?#]*/,
				r = "undefined" == typeof window && "undefined" != typeof importScripts && isFunction(importScripts),
				o = /^(about|blob):/,
				c = !location.href || o.test(location.href) ? "" : t(location.href);
			if(r) {
				var s;
				try {
					var u = new Error;
					throw u
				} catch(p) {
					s = p.stack.split("\n")
				}
				s.shift();
				for(var d, f = /.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i, h = /(.*?):\d+:\d+\)?$/; s.length > 0;) {
					var m = s.shift();
					if(d = f.exec(m), null != d) break
				}
				var l;
				if(null != d) var l = h.exec(d[1])[1];
				a = l, n = t(l || c), "" === c && (c = n)
			} else {
				var g = document,
					y = g.scripts,
					v = g.getElementById("echatmodulejs") || y[y.length - 1];
				a = e(v), n = t(a || c)
			}
			var w = /^(http[s]?:\/\/[^\/]+)\/.+/g.exec(a),
				C = w ? w[1] : null;
			("https:" == location.protocol || -1 != C.indexOf("https:")) && (C = C.replace("http:", "https:"));
			var E = C.split("//")[1],
				I = E;
			if("undefined" != typeof _echatServer && "[object Array]" === Object.prototype.toString.apply(_echatServer)) {
				var b = parseInt(Math.random() * _echatServer.length);
				(b || 0 === b) && _echatServer[b] && (I = _echatServer[b])
			} else E.match(/^([^\.]+)s\./) && (I = I.replace(/^([^\.]+)s\./, "$1."));
			var T = function(t) {
					var e = {};
					if("string" != typeof t) return e; - 1 != t.indexOf("#") && (t = t.substring(0, t.indexOf("#"))), -1 != t.indexOf("?") && (t = t.substring(t.indexOf("?") + 1));
					for(var n, a = t.split("&"), i = a.length, r = 0; i > r; r++) a[r] && (n = a[r].split("="), n[0] && n[1] && (e[n[0]] = decodeURIComponent(n[1]), e[n[0].toLowerCase()] = e[n[0]]));
					return e
				}(a),
				M = {
					param: {},
					setParam: function(t) {
						if(t) {
							for(var e in M.param) "undefined" != typeof M.param[e] && (t[e] = M.param[e]);
							"1" == M.param.mini && (t.isMini = !0)
						}
					}
				};
			0 == a.indexOf("//") && (a = location.protocol + a);
			var _ = T.companyid,
				H = T.metadata,
				A = T.info,
				S = T.routeentranceid,
				P = T.mydata,
				x = T.echattag,
				O = H || A ? 1 : void 0;
			M.param.dataHost = (-1 != C.indexOf("https:") ? "https:" : "http:") + "//" + I, M.param.loaderHost = C, M.param.loaderPath = a, M.param.companyId = _, M.param.domain = E, M.param.vip = O || void 0, M.param.lan = T.lan || void 0, M.param.echatTag = x || void 0, M.param.metaData = H || void 0, M.param.info = A || void 0, M.param.myData = P || void 0, M.param.routeEntranceId = S || void 0, M.param.visEvt = T.visEvt || void 0, M.param.mini = T.mini || void 0, M.param.echatInnerFrame = T.echatInnerFrame || void 0, M.param.echatIframeDisable = T.echatIframeDisable || void 0;
			try {
				M.param.pcMiniWinParam = T.pcMiniWinParam ? JSON.parse(T.pcMiniWinParam) : {}
			} catch(p) {}
			return M.param.queryParams = T, T.partscreen && (M.param.partScreen = T.partscreen), window.top != window && -1 != location.href.indexOf("echatInnerFrame=1") && (M.param.echatInnerFrame = 1), M
		}(),
		c = window._echat,
		s = function(e) {
			var n = t.cookie("echat_firsturl");
			n || (t.cookie("echat_firsturl", location.href), t.cookie("echat_firsttitle", function() {
				if("title" in document) return document.title || "";
				var t, e = document.getElementsByTagName("title");
				return e && e[0] ? (t = e[0], "textContent" in t ? t.textContent || "" : "innerText" in t ? t.innerText || "" : "") : (t = document.createElement("title"), document.getElementsByTagName("head")[0].appendChild(t), "")
			}(document))), e.firstUrl = n || location.href, e.firstTitle = t.cookie("echat_firsttitle") || ""
		},
		u = ECHATObjKeyMap.outerId;
	if(u || (u = {}, UTIL.call(u, !0), ECHATObjKeyMap.outerId = u, u.setSub("outerId")), window._echat && _echat.isInit) return void console.log("è¯·å‹¿é‡å¤åŠ å…¥echatä»£ç ");
	if(n(), !o.param.companyId) return void u.publish("error", {
		msg: "There is not companyId"
	});
	if(window.top != window && 1 == !o.param.echatInnerFrame) try {
		window.parent.postMessage({
			evt: "echatjs",
			type: "echatInnerFrame",
			origin: location.protocol + "//" + location.host
		}, "*")
	} catch(p) {
		console.log(p)
	}
	t(function() {
		window.encryptVID = t.store(o.param.domain + "_" + o.param.companyId + "_encryptVID"), window.chatVisitorId = t.store(o.param.domain + "_" + o.param.companyId + "_chatVisitorId"), encryptVID && chatVisitorId ? i() : e(o.param.dataHost + "/ysc?companyId=" + o.param.companyId + "&t=" + (new Date).getTime(), i)
	})
}(EChatQuery);