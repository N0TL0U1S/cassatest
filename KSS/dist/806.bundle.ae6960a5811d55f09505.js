(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([
    [806], {
        15179: (t, e, r) => {
            var i = r(48198),
                n = r(54963),
                a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw a(n(t) + " is not a function")
            }
        },
        89141: (t, e, r) => {
            var i = r(90833),
                n = r(54963),
                a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw a(n(t) + " is not a constructor")
            }
        },
        5839: (t, e, r) => {
            var i = r(48198),
                n = String,
                a = TypeError;
            t.exports = function(t) {
                if ("object" == typeof t || i(t)) return t;
                throw a("Can't set " + n(t) + " as a prototype")
            }
        },
        98: (t, e, r) => {
            var i = r(397),
                n = r(55216),
                a = r(5688).f,
                s = i("unscopables"),
                o = Array.prototype;
            null == o[s] && a(o, s, {
                configurable: !0,
                value: n(null)
            }), t.exports = function(t) {
                o[s][t] = !0
            }
        },
        27771: (t, e, r) => {
            "use strict";
            var i = r(16568).charAt;
            t.exports = function(t, e, r) {
                return e + (r ? i(t, e).length : 1)
            }
        },
        92649: (t, e, r) => {
            var i = r(89540),
                n = TypeError;
            t.exports = function(t, e) {
                if (i(e, t)) return t;
                throw n("Incorrect invocation")
            }
        },
        17724: (t, e, r) => {
            var i = r(54190),
                n = String,
                a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw a(n(t) + " is not an object")
            }
        },
        60660: (t, e, r) => {
            var i = r(27990),
                n = r(78691),
                a = r(34945),
                s = function(t) {
                    return function(e, r, s) {
                        var o, h = i(e),
                            u = a(h),
                            l = n(s, u);
                        if (t && r != r) {
                            for (; u > l;)
                                if ((o = h[l++]) != o) return !0
                        } else
                            for (; u > l; l++)
                                if ((t || l in h) && h[l] === r) return t || l || 0;
                        return !t && -1
                    }
                };
            t.exports = {
                includes: s(!0),
                indexOf: s(!1)
            }
        },
        11655: (t, e, r) => {
            "use strict";
            var i = r(49898);
            t.exports = function(t, e) {
                var r = [][t];
                return !!r && i((function() {
                    r.call(null, e || function() {
                        return 1
                    }, 1)
                }))
            }
        },
        13949: (t, e, r) => {
            var i = r(15179),
                n = r(5422),
                a = r(39618),
                s = r(34945),
                o = TypeError,
                h = function(t) {
                    return function(e, r, h, u) {
                        i(r);
                        var l = n(e),
                            c = a(l),
                            f = s(l),
                            g = t ? f - 1 : 0,
                            p = t ? -1 : 1;
                        if (h < 2)
                            for (;;) {
                                if (g in c) {
                                    u = c[g], g += p;
                                    break
                                }
                                if (g += p, t ? g < 0 : f <= g) throw o("Reduce of empty array with no initial value")
                            }
                        for (; t ? g >= 0 : f > g; g += p) g in c && (u = r(u, c[g], g, l));
                        return u
                    }
                };
            t.exports = {
                left: h(!1),
                right: h(!0)
            }
        },
        1820: (t, e, r) => {
            var i = r(78691),
                n = r(34945),
                a = r(86496),
                s = Array,
                o = Math.max;
            t.exports = function(t, e, r) {
                for (var h = n(t), u = i(e, h), l = i(void 0 === r ? h : r, h), c = s(o(l - u, 0)), f = 0; u < l; u++, f++) a(c, f, t[u]);
                return c.length = f, c
            }
        },
        84402: (t, e, r) => {
            var i = r(63836);
            t.exports = i([].slice)
        },
        64619: (t, e, r) => {
            var i = r(397)("iterator"),
                n = !1;
            try {
                var a = 0,
                    s = {
                        next: function() {
                            return {
                                done: !!a++
                            }
                        },
                        return: function() {
                            n = !0
                        }
                    };
                s[i] = function() {
                    return this
                }, Array.from(s, (function() {
                    throw 2
                }))
            } catch (t) {}
            t.exports = function(t, e) {
                if (!e && !n) return !1;
                var r = !1;
                try {
                    var a = {};
                    a[i] = function() {
                        return {
                            next: function() {
                                return {
                                    done: r = !0
                                }
                            }
                        }
                    }, t(a)
                } catch (t) {}
                return r
            }
        },
        87739: (t, e, r) => {
            var i = r(63836),
                n = i({}.toString),
                a = i("".slice);
            t.exports = function(t) {
                return a(n(t), 8, -1)
            }
        },
        1873: (t, e, r) => {
            var i = r(93500),
                n = r(48198),
                a = r(87739),
                s = r(397)("toStringTag"),
                o = Object,
                h = "Arguments" == a(function() {
                    return arguments
                }());
            t.exports = i ? a : function(t) {
                var e, r, i;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                }(e = o(t), s)) ? r : h ? a(e) : "Object" == (i = a(e)) && n(e.callee) ? "Arguments" : i
            }
        },
        8020: (t, e, r) => {
            var i = r(89722),
                n = r(750),
                a = r(18816),
                s = r(5688);
            t.exports = function(t, e, r) {
                for (var o = n(e), h = s.f, u = a.f, l = 0; l < o.length; l++) {
                    var c = o[l];
                    i(t, c) || r && i(r, c) || h(t, c, u(e, c))
                }
            }
        },
        42304: (t, e, r) => {
            var i = r(397)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (r) {
                    try {
                        return e[i] = !1, "/./" [t](e)
                    } catch (t) {}
                }
                return !1
            }
        },
        22895: (t, e, r) => {
            var i = r(49898);
            t.exports = !i((function() {
                function t() {}
                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        },
        76212: t => {
            t.exports = function(t, e) {
                return {
                    value: t,
                    done: e
                }
            }
        },
        95589: (t, e, r) => {
            var i = r(18194),
                n = r(5688),
                a = r(81018);
            t.exports = i ? function(t, e, r) {
                return n.f(t, e, a(1, r))
            } : function(t, e, r) {
                return t[e] = r, t
            }
        },
        81018: t => {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        86496: (t, e, r) => {
            "use strict";
            var i = r(65977),
                n = r(5688),
                a = r(81018);
            t.exports = function(t, e, r) {
                var s = i(e);
                s in t ? n.f(t, s, a(0, r)) : t[s] = r
            }
        },
        51140: (t, e, r) => {
            var i = r(65819),
                n = r(5688);
            t.exports = function(t, e, r) {
                return r.get && i(r.get, e, {
                    getter: !0
                }), r.set && i(r.set, e, {
                    setter: !0
                }), n.f(t, e, r)
            }
        },
        28502: (t, e, r) => {
            var i = r(48198),
                n = r(5688),
                a = r(65819),
                s = r(63275);
            t.exports = function(t, e, r, o) {
                o || (o = {});
                var h = o.enumerable,
                    u = void 0 !== o.name ? o.name : e;
                if (i(r) && a(r, u, o), o.global) h ? t[e] = r : s(e, r);
                else {
                    try {
                        o.unsafe ? t[e] && (h = !0) : delete t[e]
                    } catch (t) {}
                    h ? t[e] = r : n.f(t, e, {
                        value: r,
                        enumerable: !1,
                        configurable: !o.nonConfigurable,
                        writable: !o.nonWritable
                    })
                }
                return t
            }
        },
        63275: (t, e, r) => {
            var i = r(11514),
                n = Object.defineProperty;
            t.exports = function(t, e) {
                try {
                    n(i, t, {
                        value: e,
                        configurable: !0,
                        writable: !0
                    })
                } catch (r) {
                    i[t] = e
                }
                return e
            }
        },
        18194: (t, e, r) => {
            var i = r(49898);
            t.exports = !i((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        56132: t => {
            var e = "object" == typeof document && document.all,
                r = void 0 === e && void 0 !== e;
            t.exports = {
                all: e,
                IS_HTMLDDA: r
            }
        },
        46401: (t, e, r) => {
            var i = r(11514),
                n = r(54190),
                a = i.document,
                s = n(a) && n(a.createElement);
            t.exports = function(t) {
                return s ? a.createElement(t) : {}
            }
        },
        55294: t => {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        77643: (t, e, r) => {
            var i = r(46401)("span").classList,
                n = i && i.constructor && i.constructor.prototype;
            t.exports = n === Object.prototype ? void 0 : n
        },
        23780: (t, e, r) => {
            var i = r(908),
                n = r(17127);
            t.exports = !i && !n && "object" == typeof window && "object" == typeof document
        },
        908: t => {
            t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
        },
        67966: (t, e, r) => {
            var i = r(45623);
            t.exports = /ipad|iphone|ipod/i.test(i) && "undefined" != typeof Pebble
        },
        80018: (t, e, r) => {
            var i = r(45623);
            t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(i)
        },
        17127: (t, e, r) => {
            var i = r(87739);
            t.exports = "undefined" != typeof process && "process" == i(process)
        },
        14037: (t, e, r) => {
            var i = r(45623);
            t.exports = /web0s(?!.*chrome)/i.test(i)
        },
        45623: t => {
            t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        27935: (t, e, r) => {
            var i, n, a = r(11514),
                s = r(45623),
                o = a.process,
                h = a.Deno,
                u = o && o.versions || h && h.version,
                l = u && u.v8;
            l && (n = (i = l.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !n && s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (n = +i[1]), t.exports = n
        },
        41297: t => {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        85977: (t, e, r) => {
            var i = r(11514),
                n = r(18816).f,
                a = r(95589),
                s = r(28502),
                o = r(63275),
                h = r(8020),
                u = r(30487);
            t.exports = function(t, e) {
                var r, l, c, f, g, p = t.target,
                    d = t.global,
                    v = t.stat;
                if (r = d ? i : v ? i[p] || o(p, {}) : (i[p] || {}).prototype)
                    for (l in e) {
                        if (f = e[l], c = t.dontCallGetSet ? (g = n(r, l)) && g.value : r[l], !u(d ? l : p + (v ? "." : "#") + l, t.forced) && void 0 !== c) {
                            if (typeof f == typeof c) continue;
                            h(f, c)
                        }(t.sham || c && c.sham) && a(f, "sham", !0), s(r, l, f, t)
                    }
            }
        },
        49898: t => {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        },
        76577: (t, e, r) => {
            "use strict";
            r(5915);
            var i = r(86841),
                n = r(28502),
                a = r(25048),
                s = r(49898),
                o = r(397),
                h = r(95589),
                u = o("species"),
                l = RegExp.prototype;
            t.exports = function(t, e, r, c) {
                var f = o(t),
                    g = !s((function() {
                        var e = {};
                        return e[f] = function() {
                            return 7
                        }, 7 != "" [t](e)
                    })),
                    p = g && !s((function() {
                        var e = !1,
                            r = /a/;
                        return "split" === t && ((r = {}).constructor = {}, r.constructor[u] = function() {
                            return r
                        }, r.flags = "", r[f] = /./ [f]), r.exec = function() {
                            return e = !0, null
                        }, r[f](""), !e
                    }));
                if (!g || !p || r) {
                    var d = i(/./ [f]),
                        v = e(f, "" [t], (function(t, e, r, n, s) {
                            var o = i(t),
                                h = e.exec;
                            return h === a || h === l.exec ? g && !s ? {
                                done: !0,
                                value: d(e, r, n)
                            } : {
                                done: !0,
                                value: o(r, e, n)
                            } : {
                                done: !1
                            }
                        }));
                    n(String.prototype, t, v[0]), n(l, f, v[1])
                }
                c && h(l[f], "sham", !0)
            }
        },
        38808: (t, e, r) => {
            var i = r(50036),
                n = Function.prototype,
                a = n.apply,
                s = n.call;
            t.exports = "object" == typeof Reflect && Reflect.apply || (i ? s.bind(a) : function() {
                return s.apply(a, arguments)
            })
        },
        92540: (t, e, r) => {
            var i = r(86841),
                n = r(15179),
                a = r(50036),
                s = i(i.bind);
            t.exports = function(t, e) {
                return n(t), void 0 === e ? t : a ? s(t, e) : function() {
                    return t.apply(e, arguments)
                }
            }
        },
        50036: (t, e, r) => {
            var i = r(49898);
            t.exports = !i((function() {
                var t = function() {}.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        },
        62051: (t, e, r) => {
            var i = r(50036),
                n = Function.prototype.call;
            t.exports = i ? n.bind(n) : function() {
                return n.apply(n, arguments)
            }
        },
        88078: (t, e, r) => {
            var i = r(18194),
                n = r(89722),
                a = Function.prototype,
                s = i && Object.getOwnPropertyDescriptor,
                o = n(a, "name"),
                h = o && "something" === function() {}.name,
                u = o && (!i || i && s(a, "name").configurable);
            t.exports = {
                EXISTS: o,
                PROPER: h,
                CONFIGURABLE: u
            }
        },
        92400: (t, e, r) => {
            var i = r(63836),
                n = r(15179);
            t.exports = function(t, e, r) {
                try {
                    return i(n(Object.getOwnPropertyDescriptor(t, e)[r]))
                } catch (t) {}
            }
        },
        86841: (t, e, r) => {
            var i = r(87739),
                n = r(63836);
            t.exports = function(t) {
                if ("Function" === i(t)) return n(t)
            }
        },
        63836: (t, e, r) => {
            var i = r(50036),
                n = Function.prototype,
                a = n.call,
                s = i && n.bind.bind(a, a);
            t.exports = i ? s : function(t) {
                return function() {
                    return a.apply(t, arguments)
                }
            }
        },
        35371: (t, e, r) => {
            var i = r(11514),
                n = r(48198);
            t.exports = function(t, e) {
                return arguments.length < 2 ? (r = i[t], n(r) ? r : void 0) : i[t] && i[t][e];
                var r
            }
        },
        8857: (t, e, r) => {
            var i = r(1873),
                n = r(34965),
                a = r(87880),
                s = r(73350),
                o = r(397)("iterator");
            t.exports = function(t) {
                if (!a(t)) return n(t, o) || n(t, "@@iterator") || s[i(t)]
            }
        },
        6891: (t, e, r) => {
            var i = r(62051),
                n = r(15179),
                a = r(17724),
                s = r(54963),
                o = r(8857),
                h = TypeError;
            t.exports = function(t, e) {
                var r = arguments.length < 2 ? o(t) : e;
                if (n(r)) return a(i(r, t));
                throw h(s(t) + " is not iterable")
            }
        },
        34965: (t, e, r) => {
            var i = r(15179),
                n = r(87880);
            t.exports = function(t, e) {
                var r = t[e];
                return n(r) ? void 0 : i(r)
            }
        },
        13992: (t, e, r) => {
            var i = r(63836),
                n = r(5422),
                a = Math.floor,
                s = i("".charAt),
                o = i("".replace),
                h = i("".slice),
                u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                l = /\$([$&'`]|\d{1,2})/g;
            t.exports = function(t, e, r, i, c, f) {
                var g = r + t.length,
                    p = i.length,
                    d = l;
                return void 0 !== c && (c = n(c), d = u), o(f, d, (function(n, o) {
                    var u;
                    switch (s(o, 0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return h(e, 0, r);
                        case "'":
                            return h(e, g);
                        case "<":
                            u = c[h(o, 1, -1)];
                            break;
                        default:
                            var l = +o;
                            if (0 === l) return n;
                            if (l > p) {
                                var f = a(l / 10);
                                return 0 === f ? n : f <= p ? void 0 === i[f - 1] ? s(o, 1) : i[f - 1] + s(o, 1) : n
                            }
                            u = i[l - 1]
                    }
                    return void 0 === u ? "" : u
                }))
            }
        },
        11514: (t, e, r) => {
            var i = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof r.g && r.g) || function() {
                return this
            }() || Function("return this")()
        },
        89722: (t, e, r) => {
            var i = r(63836),
                n = r(5422),
                a = i({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(t, e) {
                return a(n(t), e)
            }
        },
        18459: t => {
            t.exports = {}
        },
        42419: t => {
            t.exports = function(t, e) {}
        },
        96506: (t, e, r) => {
            var i = r(35371);
            t.exports = i("document", "documentElement")
        },
        48840: (t, e, r) => {
            var i = r(18194),
                n = r(49898),
                a = r(46401);
            t.exports = !i && !n((function() {
                return 7 != Object.defineProperty(a("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        39618: (t, e, r) => {
            var i = r(63836),
                n = r(49898),
                a = r(87739),
                s = Object,
                o = i("".split);
            t.exports = n((function() {
                return !s("z").propertyIsEnumerable(0)
            })) ? function(t) {
                return "String" == a(t) ? o(t, "") : s(t)
            } : s
        },
        10540: (t, e, r) => {
            var i = r(63836),
                n = r(48198),
                a = r(4725),
                s = i(Function.toString);
            n(a.inspectSource) || (a.inspectSource = function(t) {
                return s(t)
            }), t.exports = a.inspectSource
        },
        38486: (t, e, r) => {
            var i, n, a, s = r(683),
                o = r(11514),
                h = r(54190),
                u = r(95589),
                l = r(89722),
                c = r(4725),
                f = r(47963),
                g = r(18459),
                p = "Object already initialized",
                d = o.TypeError,
                v = o.WeakMap;
            if (s || c.state) {
                var y = c.state || (c.state = new v);
                y.get = y.get, y.has = y.has, y.set = y.set, i = function(t, e) {
                    if (y.has(t)) throw d(p);
                    return e.facade = t, y.set(t, e), e
                }, n = function(t) {
                    return y.get(t) || {}
                }, a = function(t) {
                    return y.has(t)
                }
            } else {
                var m = f("state");
                g[m] = !0, i = function(t, e) {
                    if (l(t, m)) throw d(p);
                    return e.facade = t, u(t, m, e), e
                }, n = function(t) {
                    return l(t, m) ? t[m] : {}
                }, a = function(t) {
                    return l(t, m)
                }
            }
            t.exports = {
                set: i,
                get: n,
                has: a,
                enforce: function(t) {
                    return a(t) ? n(t) : i(t, {})
                },
                getterFor: function(t) {
                    return function(e) {
                        var r;
                        if (!h(e) || (r = n(e)).type !== t) throw d("Incompatible receiver, " + t + " required");
                        return r
                    }
                }
            }
        },
        56818: (t, e, r) => {
            var i = r(397),
                n = r(73350),
                a = i("iterator"),
                s = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (n.Array === t || s[a] === t)
            }
        },
        99589: (t, e, r) => {
            var i = r(87739);
            t.exports = Array.isArray || function(t) {
                return "Array" == i(t)
            }
        },
        48198: (t, e, r) => {
            var i = r(56132),
                n = i.all;
            t.exports = i.IS_HTMLDDA ? function(t) {
                return "function" == typeof t || t === n
            } : function(t) {
                return "function" == typeof t
            }
        },
        90833: (t, e, r) => {
            var i = r(63836),
                n = r(49898),
                a = r(48198),
                s = r(1873),
                o = r(35371),
                h = r(10540),
                u = function() {},
                l = [],
                c = o("Reflect", "construct"),
                f = /^\s*(?:class|function)\b/,
                g = i(f.exec),
                p = !f.exec(u),
                d = function(t) {
                    if (!a(t)) return !1;
                    try {
                        return c(u, l, t), !0
                    } catch (t) {
                        return !1
                    }
                },
                v = function(t) {
                    if (!a(t)) return !1;
                    switch (s(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return p || !!g(f, h(t))
                    } catch (t) {
                        return !0
                    }
                };
            v.sham = !0, t.exports = !c || n((function() {
                var t;
                return d(d.call) || !d(Object) || !d((function() {
                    t = !0
                })) || t
            })) ? v : d
        },
        30487: (t, e, r) => {
            var i = r(49898),
                n = r(48198),
                a = /#|\.prototype\./,
                s = function(t, e) {
                    var r = h[o(t)];
                    return r == l || r != u && (n(e) ? i(e) : !!e)
                },
                o = s.normalize = function(t) {
                    return String(t).replace(a, ".").toLowerCase()
                },
                h = s.data = {},
                u = s.NATIVE = "N",
                l = s.POLYFILL = "P";
            t.exports = s
        },
        87880: t => {
            t.exports = function(t) {
                return null == t
            }
        },
        54190: (t, e, r) => {
            var i = r(48198),
                n = r(56132),
                a = n.all;
            t.exports = n.IS_HTMLDDA ? function(t) {
                return "object" == typeof t ? null !== t : i(t) || t === a
            } : function(t) {
                return "object" == typeof t ? null !== t : i(t)
            }
        },
        16172: t => {
            t.exports = !1
        },
        82766: (t, e, r) => {
            var i = r(54190),
                n = r(87739),
                a = r(397)("match");
            t.exports = function(t) {
                var e;
                return i(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == n(t))
            }
        },
        34545: (t, e, r) => {
            var i = r(35371),
                n = r(48198),
                a = r(89540),
                s = r(7706),
                o = Object;
            t.exports = s ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                var e = i("Symbol");
                return n(e) && a(e.prototype, o(t))
            }
        },
        10132: (t, e, r) => {
            var i = r(92540),
                n = r(62051),
                a = r(17724),
                s = r(54963),
                o = r(56818),
                h = r(34945),
                u = r(89540),
                l = r(6891),
                c = r(8857),
                f = r(57362),
                g = TypeError,
                p = function(t, e) {
                    this.stopped = t, this.result = e
                },
                d = p.prototype;
            t.exports = function(t, e, r) {
                var v, y, m, x, b, S, w, T = r && r.that,
                    A = !(!r || !r.AS_ENTRIES),
                    O = !(!r || !r.IS_RECORD),
                    C = !(!r || !r.IS_ITERATOR),
                    P = !(!r || !r.INTERRUPTED),
                    E = i(e, T),
                    M = function(t) {
                        return v && f(v, "normal", t), new p(!0, t)
                    },
                    N = function(t) {
                        return A ? (a(t), P ? E(t[0], t[1], M) : E(t[0], t[1])) : P ? E(t, M) : E(t)
                    };
                if (O) v = t.iterator;
                else if (C) v = t;
                else {
                    if (!(y = c(t))) throw g(s(t) + " is not iterable");
                    if (o(y)) {
                        for (m = 0, x = h(t); x > m; m++)
                            if ((b = N(t[m])) && u(d, b)) return b;
                        return new p(!1)
                    }
                    v = l(t, y)
                }
                for (S = O ? t.next : v.next; !(w = n(S, v)).done;) {
                    try {
                        b = N(w.value)
                    } catch (t) {
                        f(v, "throw", t)
                    }
                    if ("object" == typeof b && b && u(d, b)) return b
                }
                return new p(!1)
            }
        },
        57362: (t, e, r) => {
            var i = r(62051),
                n = r(17724),
                a = r(34965);
            t.exports = function(t, e, r) {
                var s, o;
                n(t);
                try {
                    if (!(s = a(t, "return"))) {
                        if ("throw" === e) throw r;
                        return r
                    }
                    s = i(s, t)
                } catch (t) {
                    o = !0, s = t
                }
                if ("throw" === e) throw r;
                if (o) throw s;
                return n(s), r
            }
        },
        37699: (t, e, r) => {
            "use strict";
            var i = r(82345).IteratorPrototype,
                n = r(55216),
                a = r(81018),
                s = r(18475),
                o = r(73350),
                h = function() {
                    return this
                };
            t.exports = function(t, e, r, u) {
                var l = e + " Iterator";
                return t.prototype = n(i, {
                    next: a(+!u, r)
                }), s(t, l, !1, !0), o[l] = h, t
            }
        },
        97504: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(62051),
                a = r(16172),
                s = r(88078),
                o = r(48198),
                h = r(37699),
                u = r(13282),
                l = r(48364),
                c = r(18475),
                f = r(95589),
                g = r(28502),
                p = r(397),
                d = r(73350),
                v = r(82345),
                y = s.PROPER,
                m = s.CONFIGURABLE,
                x = v.IteratorPrototype,
                b = v.BUGGY_SAFARI_ITERATORS,
                S = p("iterator"),
                w = "keys",
                T = "values",
                A = "entries",
                O = function() {
                    return this
                };
            t.exports = function(t, e, r, s, p, v, C) {
                h(r, e, s);
                var P, E, M, N = function(t) {
                        if (t === p && k) return k;
                        if (!b && t in V) return V[t];
                        switch (t) {
                            case w:
                            case T:
                            case A:
                                return function() {
                                    return new r(this, t)
                                }
                        }
                        return function() {
                            return new r(this)
                        }
                    },
                    R = e + " Iterator",
                    _ = !1,
                    V = t.prototype,
                    I = V[S] || V["@@iterator"] || p && V[p],
                    k = !b && I || N(p),
                    L = "Array" == e && V.entries || I;
                if (L && (P = u(L.call(new t))) !== Object.prototype && P.next && (a || u(P) === x || (l ? l(P, x) : o(P[S]) || g(P, S, O)), c(P, R, !0, !0), a && (d[R] = O)), y && p == T && I && I.name !== T && (!a && m ? f(V, "name", T) : (_ = !0, k = function() {
                        return n(I, this)
                    })), p)
                    if (E = {
                            values: N(T),
                            keys: v ? k : N(w),
                            entries: N(A)
                        }, C)
                        for (M in E)(b || _ || !(M in V)) && g(V, M, E[M]);
                    else i({
                        target: e,
                        proto: !0,
                        forced: b || _
                    }, E);
                return a && !C || V[S] === k || g(V, S, k, {
                    name: p
                }), d[e] = k, E
            }
        },
        82345: (t, e, r) => {
            "use strict";
            var i, n, a, s = r(49898),
                o = r(48198),
                h = r(54190),
                u = r(55216),
                l = r(13282),
                c = r(28502),
                f = r(397),
                g = r(16172),
                p = f("iterator"),
                d = !1;
            [].keys && ("next" in (a = [].keys()) ? (n = l(l(a))) !== Object.prototype && (i = n) : d = !0), !h(i) || s((function() {
                var t = {};
                return i[p].call(t) !== t
            })) ? i = {} : g && (i = u(i)), o(i[p]) || c(i, p, (function() {
                return this
            })), t.exports = {
                IteratorPrototype: i,
                BUGGY_SAFARI_ITERATORS: d
            }
        },
        73350: t => {
            t.exports = {}
        },
        34945: (t, e, r) => {
            var i = r(27903);
            t.exports = function(t) {
                return i(t.length)
            }
        },
        65819: (t, e, r) => {
            var i = r(63836),
                n = r(49898),
                a = r(48198),
                s = r(89722),
                o = r(18194),
                h = r(88078).CONFIGURABLE,
                u = r(10540),
                l = r(38486),
                c = l.enforce,
                f = l.get,
                g = String,
                p = Object.defineProperty,
                d = i("".slice),
                v = i("".replace),
                y = i([].join),
                m = o && !n((function() {
                    return 8 !== p((function() {}), "length", {
                        value: 8
                    }).length
                })),
                x = String(String).split("String"),
                b = t.exports = function(t, e, r) {
                    "Symbol(" === d(g(e), 0, 7) && (e = "[" + v(g(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!s(t, "name") || h && t.name !== e) && (o ? p(t, "name", {
                        value: e,
                        configurable: !0
                    }) : t.name = e), m && r && s(r, "arity") && t.length !== r.arity && p(t, "length", {
                        value: r.arity
                    });
                    try {
                        r && s(r, "constructor") && r.constructor ? o && p(t, "prototype", {
                            writable: !1
                        }) : t.prototype && (t.prototype = void 0)
                    } catch (t) {}
                    var i = c(t);
                    return s(i, "source") || (i.source = y(x, "string" == typeof e ? e : "")), t
                };
            Function.prototype.toString = b((function() {
                return a(this) && f(this).source || u(this)
            }), "toString")
        },
        21889: t => {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = Math.trunc || function(t) {
                var i = +t;
                return (i > 0 ? r : e)(i)
            }
        },
        21335: (t, e, r) => {
            var i, n, a, s, o, h = r(11514),
                u = r(92540),
                l = r(18816).f,
                c = r(91354).set,
                f = r(18889),
                g = r(80018),
                p = r(67966),
                d = r(14037),
                v = r(17127),
                y = h.MutationObserver || h.WebKitMutationObserver,
                m = h.document,
                x = h.process,
                b = h.Promise,
                S = l(h, "queueMicrotask"),
                w = S && S.value;
            if (!w) {
                var T = new f,
                    A = function() {
                        var t, e;
                        for (v && (t = x.domain) && t.exit(); e = T.get();) try {
                            e()
                        } catch (t) {
                            throw T.head && i(), t
                        }
                        t && t.enter()
                    };
                g || v || d || !y || !m ? !p && b && b.resolve ? ((s = b.resolve(void 0)).constructor = b, o = u(s.then, s), i = function() {
                    o(A)
                }) : v ? i = function() {
                    x.nextTick(A)
                } : (c = u(c, h), i = function() {
                    c(A)
                }) : (n = !0, a = m.createTextNode(""), new y(A).observe(a, {
                    characterData: !0
                }), i = function() {
                    a.data = n = !n
                }), w = function(t) {
                    T.head || i(), T.add(t)
                }
            }
            t.exports = w
        },
        7174: (t, e, r) => {
            "use strict";
            var i = r(15179),
                n = TypeError,
                a = function(t) {
                    var e, r;
                    this.promise = new t((function(t, i) {
                        if (void 0 !== e || void 0 !== r) throw n("Bad Promise constructor");
                        e = t, r = i
                    })), this.resolve = i(e), this.reject = i(r)
                };
            t.exports.f = function(t) {
                return new a(t)
            }
        },
        48526: (t, e, r) => {
            var i = r(82766),
                n = TypeError;
            t.exports = function(t) {
                if (i(t)) throw n("The method doesn't accept regular expressions");
                return t
            }
        },
        55216: (t, e, r) => {
            var i, n = r(17724),
                a = r(59611),
                s = r(41297),
                o = r(18459),
                h = r(96506),
                u = r(46401),
                l = r(47963),
                c = "prototype",
                f = "script",
                g = l("IE_PROTO"),
                p = function() {},
                d = function(t) {
                    return "<" + f + ">" + t + "</" + f + ">"
                },
                v = function(t) {
                    t.write(d("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                },
                y = function() {
                    try {
                        i = new ActiveXObject("htmlfile")
                    } catch (t) {}
                    var t, e, r;
                    y = "undefined" != typeof document ? document.domain && i ? v(i) : (e = u("iframe"), r = "java" + f + ":", e.style.display = "none", h.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F) : v(i);
                    for (var n = s.length; n--;) delete y[c][s[n]];
                    return y()
                };
            o[g] = !0, t.exports = Object.create || function(t, e) {
                var r;
                return null !== t ? (p[c] = n(t), r = new p, p[c] = null, r[g] = t) : r = y(), void 0 === e ? r : a.f(r, e)
            }
        },
        59611: (t, e, r) => {
            var i = r(18194),
                n = r(50613),
                a = r(5688),
                s = r(17724),
                o = r(27990),
                h = r(15145);
            e.f = i && !n ? Object.defineProperties : function(t, e) {
                s(t);
                for (var r, i = o(e), n = h(e), u = n.length, l = 0; u > l;) a.f(t, r = n[l++], i[r]);
                return t
            }
        },
        5688: (t, e, r) => {
            var i = r(18194),
                n = r(48840),
                a = r(50613),
                s = r(17724),
                o = r(65977),
                h = TypeError,
                u = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                c = "enumerable",
                f = "configurable",
                g = "writable";
            e.f = i ? a ? function(t, e, r) {
                if (s(t), e = o(e), s(r), "function" == typeof t && "prototype" === e && "value" in r && g in r && !r[g]) {
                    var i = l(t, e);
                    i && i[g] && (t[e] = r.value, r = {
                        configurable: f in r ? r[f] : i[f],
                        enumerable: c in r ? r[c] : i[c],
                        writable: !1
                    })
                }
                return u(t, e, r)
            } : u : function(t, e, r) {
                if (s(t), e = o(e), s(r), n) try {
                    return u(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw h("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        18816: (t, e, r) => {
            var i = r(18194),
                n = r(62051),
                a = r(47779),
                s = r(81018),
                o = r(27990),
                h = r(65977),
                u = r(89722),
                l = r(48840),
                c = Object.getOwnPropertyDescriptor;
            e.f = i ? c : function(t, e) {
                if (t = o(t), e = h(e), l) try {
                    return c(t, e)
                } catch (t) {}
                if (u(t, e)) return s(!n(a.f, t, e), t[e])
            }
        },
        19125: (t, e, r) => {
            var i = r(35287),
                n = r(41297).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return i(t, n)
            }
        },
        24429: (t, e) => {
            e.f = Object.getOwnPropertySymbols
        },
        13282: (t, e, r) => {
            var i = r(89722),
                n = r(48198),
                a = r(5422),
                s = r(47963),
                o = r(22895),
                h = s("IE_PROTO"),
                u = Object,
                l = u.prototype;
            t.exports = o ? u.getPrototypeOf : function(t) {
                var e = a(t);
                if (i(e, h)) return e[h];
                var r = e.constructor;
                return n(r) && e instanceof r ? r.prototype : e instanceof u ? l : null
            }
        },
        89540: (t, e, r) => {
            var i = r(63836);
            t.exports = i({}.isPrototypeOf)
        },
        35287: (t, e, r) => {
            var i = r(63836),
                n = r(89722),
                a = r(27990),
                s = r(60660).indexOf,
                o = r(18459),
                h = i([].push);
            t.exports = function(t, e) {
                var r, i = a(t),
                    u = 0,
                    l = [];
                for (r in i) !n(o, r) && n(i, r) && h(l, r);
                for (; e.length > u;) n(i, r = e[u++]) && (~s(l, r) || h(l, r));
                return l
            }
        },
        15145: (t, e, r) => {
            var i = r(35287),
                n = r(41297);
            t.exports = Object.keys || function(t) {
                return i(t, n)
            }
        },
        47779: (t, e) => {
            "use strict";
            var r = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                n = i && !r.call({
                    1: 2
                }, 1);
            e.f = n ? function(t) {
                var e = i(this, t);
                return !!e && e.enumerable
            } : r
        },
        48364: (t, e, r) => {
            var i = r(92400),
                n = r(17724),
                a = r(5839);
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var t, e = !1,
                    r = {};
                try {
                    (t = i(Object.prototype, "__proto__", "set"))(r, []), e = r instanceof Array
                } catch (t) {}
                return function(r, i) {
                    return n(r), a(i), e ? t(r, i) : r.__proto__ = i, r
                }
            }() : void 0)
        },
        91199: (t, e, r) => {
            var i = r(62051),
                n = r(48198),
                a = r(54190),
                s = TypeError;
            t.exports = function(t, e) {
                var r, o;
                if ("string" === e && n(r = t.toString) && !a(o = i(r, t))) return o;
                if (n(r = t.valueOf) && !a(o = i(r, t))) return o;
                if ("string" !== e && n(r = t.toString) && !a(o = i(r, t))) return o;
                throw s("Can't convert object to primitive value")
            }
        },
        750: (t, e, r) => {
            var i = r(35371),
                n = r(63836),
                a = r(19125),
                s = r(24429),
                o = r(17724),
                h = n([].concat);
            t.exports = i("Reflect", "ownKeys") || function(t) {
                var e = a.f(o(t)),
                    r = s.f;
                return r ? h(e, r(t)) : e
            }
        },
        92163: t => {
            t.exports = function(t) {
                try {
                    return {
                        error: !1,
                        value: t()
                    }
                } catch (t) {
                    return {
                        error: !0,
                        value: t
                    }
                }
            }
        },
        15399: (t, e, r) => {
            var i = r(11514),
                n = r(64834),
                a = r(48198),
                s = r(30487),
                o = r(10540),
                h = r(397),
                u = r(23780),
                l = r(908),
                c = r(16172),
                f = r(27935),
                g = n && n.prototype,
                p = h("species"),
                d = !1,
                v = a(i.PromiseRejectionEvent),
                y = s("Promise", (function() {
                    var t = o(n),
                        e = t !== String(n);
                    if (!e && 66 === f) return !0;
                    if (c && (!g.catch || !g.finally)) return !0;
                    if (!f || f < 51 || !/native code/.test(t)) {
                        var r = new n((function(t) {
                                t(1)
                            })),
                            i = function(t) {
                                t((function() {}), (function() {}))
                            };
                        if ((r.constructor = {})[p] = i, !(d = r.then((function() {})) instanceof i)) return !0
                    }
                    return !e && (u || l) && !v
                }));
            t.exports = {
                CONSTRUCTOR: y,
                REJECTION_EVENT: v,
                SUBCLASSING: d
            }
        },
        64834: (t, e, r) => {
            var i = r(11514);
            t.exports = i.Promise
        },
        12601: (t, e, r) => {
            var i = r(17724),
                n = r(54190),
                a = r(7174);
            t.exports = function(t, e) {
                if (i(t), n(e) && e.constructor === t) return e;
                var r = a.f(t);
                return (0, r.resolve)(e), r.promise
            }
        },
        81445: (t, e, r) => {
            var i = r(64834),
                n = r(64619),
                a = r(15399).CONSTRUCTOR;
            t.exports = a || !n((function(t) {
                i.all(t).then(void 0, (function() {}))
            }))
        },
        18889: t => {
            var e = function() {
                this.head = null, this.tail = null
            };
            e.prototype = {
                add: function(t) {
                    var e = {
                            item: t,
                            next: null
                        },
                        r = this.tail;
                    r ? r.next = e : this.head = e, this.tail = e
                },
                get: function() {
                    var t = this.head;
                    if (t) return null === (this.head = t.next) && (this.tail = null), t.item
                }
            }, t.exports = e
        },
        8721: (t, e, r) => {
            var i = r(62051),
                n = r(17724),
                a = r(48198),
                s = r(87739),
                o = r(25048),
                h = TypeError;
            t.exports = function(t, e) {
                var r = t.exec;
                if (a(r)) {
                    var u = i(r, t, e);
                    return null !== u && n(u), u
                }
                if ("RegExp" === s(t)) return i(o, t, e);
                throw h("RegExp#exec called on incompatible receiver")
            }
        },
        25048: (t, e, r) => {
            "use strict";
            var i, n, a = r(62051),
                s = r(63836),
                o = r(6609),
                h = r(52475),
                u = r(27517),
                l = r(41547),
                c = r(55216),
                f = r(38486).get,
                g = r(22097),
                p = r(39353),
                d = l("native-string-replace", String.prototype.replace),
                v = RegExp.prototype.exec,
                y = v,
                m = s("".charAt),
                x = s("".indexOf),
                b = s("".replace),
                S = s("".slice),
                w = (n = /b*/g, a(v, i = /a/, "a"), a(v, n, "a"), 0 !== i.lastIndex || 0 !== n.lastIndex),
                T = u.BROKEN_CARET,
                A = void 0 !== /()??/.exec("")[1];
            (w || A || T || g || p) && (y = function(t) {
                var e, r, i, n, s, u, l, g = this,
                    p = f(g),
                    O = o(t),
                    C = p.raw;
                if (C) return C.lastIndex = g.lastIndex, e = a(y, C, O), g.lastIndex = C.lastIndex, e;
                var P = p.groups,
                    E = T && g.sticky,
                    M = a(h, g),
                    N = g.source,
                    R = 0,
                    _ = O;
                if (E && (M = b(M, "y", ""), -1 === x(M, "g") && (M += "g"), _ = S(O, g.lastIndex), g.lastIndex > 0 && (!g.multiline || g.multiline && "\n" !== m(O, g.lastIndex - 1)) && (N = "(?: " + N + ")", _ = " " + _, R++), r = new RegExp("^(?:" + N + ")", M)), A && (r = new RegExp("^" + N + "$(?!\\s)", M)), w && (i = g.lastIndex), n = a(v, E ? r : g, _), E ? n ? (n.input = S(n.input, R), n[0] = S(n[0], R), n.index = g.lastIndex, g.lastIndex += n[0].length) : g.lastIndex = 0 : w && n && (g.lastIndex = g.global ? n.index + n[0].length : i), A && n && n.length > 1 && a(d, n[0], r, (function() {
                        for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (n[s] = void 0)
                    })), n && P)
                    for (n.groups = u = c(null), s = 0; s < P.length; s++) u[(l = P[s])[0]] = n[l[1]];
                return n
            }), t.exports = y
        },
        52475: (t, e, r) => {
            "use strict";
            var i = r(17724);
            t.exports = function() {
                var t = i(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
            }
        },
        61210: (t, e, r) => {
            var i = r(62051),
                n = r(89722),
                a = r(89540),
                s = r(52475),
                o = RegExp.prototype;
            t.exports = function(t) {
                var e = t.flags;
                return void 0 !== e || "flags" in o || n(t, "flags") || !a(o, t) ? e : i(s, t)
            }
        },
        27517: (t, e, r) => {
            var i = r(49898),
                n = r(11514).RegExp,
                a = i((function() {
                    var t = n("a", "y");
                    return t.lastIndex = 2, null != t.exec("abcd")
                })),
                s = a || i((function() {
                    return !n("a", "y").sticky
                })),
                o = a || i((function() {
                    var t = n("^r", "gy");
                    return t.lastIndex = 2, null != t.exec("str")
                }));
            t.exports = {
                BROKEN_CARET: o,
                MISSED_STICKY: s,
                UNSUPPORTED_Y: a
            }
        },
        22097: (t, e, r) => {
            var i = r(49898),
                n = r(11514).RegExp;
            t.exports = i((function() {
                var t = n(".", "s");
                return !(t.dotAll && t.exec("\n") && "s" === t.flags)
            }))
        },
        39353: (t, e, r) => {
            var i = r(49898),
                n = r(11514).RegExp;
            t.exports = i((function() {
                var t = n("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
            }))
        },
        41509: (t, e, r) => {
            var i = r(87880),
                n = TypeError;
            t.exports = function(t) {
                if (i(t)) throw n("Can't call method on " + t);
                return t
            }
        },
        71672: (t, e, r) => {
            "use strict";
            var i = r(35371),
                n = r(51140),
                a = r(397),
                s = r(18194),
                o = a("species");
            t.exports = function(t) {
                var e = i(t);
                s && e && !e[o] && n(e, o, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        18475: (t, e, r) => {
            var i = r(5688).f,
                n = r(89722),
                a = r(397)("toStringTag");
            t.exports = function(t, e, r) {
                t && !r && (t = t.prototype), t && !n(t, a) && i(t, a, {
                    configurable: !0,
                    value: e
                })
            }
        },
        47963: (t, e, r) => {
            var i = r(41547),
                n = r(28544),
                a = i("keys");
            t.exports = function(t) {
                return a[t] || (a[t] = n(t))
            }
        },
        4725: (t, e, r) => {
            var i = r(11514),
                n = r(63275),
                a = "__core-js_shared__",
                s = i[a] || n(a, {});
            t.exports = s
        },
        41547: (t, e, r) => {
            var i = r(16172),
                n = r(4725);
            (t.exports = function(t, e) {
                return n[t] || (n[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.30.1",
                mode: i ? "pure" : "global",
                copyright: "Â© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        44844: (t, e, r) => {
            var i = r(17724),
                n = r(89141),
                a = r(87880),
                s = r(397)("species");
            t.exports = function(t, e) {
                var r, o = i(t).constructor;
                return void 0 === o || a(r = i(o)[s]) ? e : n(r)
            }
        },
        16568: (t, e, r) => {
            var i = r(63836),
                n = r(79575),
                a = r(6609),
                s = r(41509),
                o = i("".charAt),
                h = i("".charCodeAt),
                u = i("".slice),
                l = function(t) {
                    return function(e, r) {
                        var i, l, c = a(s(e)),
                            f = n(r),
                            g = c.length;
                        return f < 0 || f >= g ? t ? "" : void 0 : (i = h(c, f)) < 55296 || i > 56319 || f + 1 === g || (l = h(c, f + 1)) < 56320 || l > 57343 ? t ? o(c, f) : i : t ? u(c, f, f + 2) : l - 56320 + (i - 55296 << 10) + 65536
                    }
                };
            t.exports = {
                codeAt: l(!1),
                charAt: l(!0)
            }
        },
        9324: (t, e, r) => {
            var i = r(88078).PROPER,
                n = r(49898),
                a = r(98801);
            t.exports = function(t) {
                return n((function() {
                    return !!a[t]() || "â€‹Â…á Ž" !== "â€‹Â…á Ž" [t]() || i && a[t].name !== t
                }))
            }
        },
        54427: (t, e, r) => {
            var i = r(63836),
                n = r(41509),
                a = r(6609),
                s = r(98801),
                o = i("".replace),
                h = RegExp("^[" + s + "]+"),
                u = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                l = function(t) {
                    return function(e) {
                        var r = a(n(e));
                        return 1 & t && (r = o(r, h, "")), 2 & t && (r = o(r, u, "$1")), r
                    }
                };
            t.exports = {
                start: l(1),
                end: l(2),
                trim: l(3)
            }
        },
        18193: (t, e, r) => {
            var i = r(27935),
                n = r(49898);
            t.exports = !!Object.getOwnPropertySymbols && !n((function() {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && i && i < 41
            }))
        },
        91354: (t, e, r) => {
            var i, n, a, s, o = r(11514),
                h = r(38808),
                u = r(92540),
                l = r(48198),
                c = r(89722),
                f = r(49898),
                g = r(96506),
                p = r(84402),
                d = r(46401),
                v = r(71157),
                y = r(80018),
                m = r(17127),
                x = o.setImmediate,
                b = o.clearImmediate,
                S = o.process,
                w = o.Dispatch,
                T = o.Function,
                A = o.MessageChannel,
                O = o.String,
                C = 0,
                P = {},
                E = "onreadystatechange";
            f((function() {
                i = o.location
            }));
            var M = function(t) {
                    if (c(P, t)) {
                        var e = P[t];
                        delete P[t], e()
                    }
                },
                N = function(t) {
                    return function() {
                        M(t)
                    }
                },
                R = function(t) {
                    M(t.data)
                },
                _ = function(t) {
                    o.postMessage(O(t), i.protocol + "//" + i.host)
                };
            x && b || (x = function(t) {
                v(arguments.length, 1);
                var e = l(t) ? t : T(t),
                    r = p(arguments, 1);
                return P[++C] = function() {
                    h(e, void 0, r)
                }, n(C), C
            }, b = function(t) {
                delete P[t]
            }, m ? n = function(t) {
                S.nextTick(N(t))
            } : w && w.now ? n = function(t) {
                w.now(N(t))
            } : A && !y ? (s = (a = new A).port2, a.port1.onmessage = R, n = u(s.postMessage, s)) : o.addEventListener && l(o.postMessage) && !o.importScripts && i && "file:" !== i.protocol && !f(_) ? (n = _, o.addEventListener("message", R, !1)) : n = E in d("script") ? function(t) {
                g.appendChild(d("script"))[E] = function() {
                    g.removeChild(this), M(t)
                }
            } : function(t) {
                setTimeout(N(t), 0)
            }), t.exports = {
                set: x,
                clear: b
            }
        },
        78691: (t, e, r) => {
            var i = r(79575),
                n = Math.max,
                a = Math.min;
            t.exports = function(t, e) {
                var r = i(t);
                return r < 0 ? n(r + e, 0) : a(r, e)
            }
        },
        27990: (t, e, r) => {
            var i = r(39618),
                n = r(41509);
            t.exports = function(t) {
                return i(n(t))
            }
        },
        79575: (t, e, r) => {
            var i = r(21889);
            t.exports = function(t) {
                var e = +t;
                return e != e || 0 === e ? 0 : i(e)
            }
        },
        27903: (t, e, r) => {
            var i = r(79575),
                n = Math.min;
            t.exports = function(t) {
                return t > 0 ? n(i(t), 9007199254740991) : 0
            }
        },
        5422: (t, e, r) => {
            var i = r(41509),
                n = Object;
            t.exports = function(t) {
                return n(i(t))
            }
        },
        8426: (t, e, r) => {
            var i = r(62051),
                n = r(54190),
                a = r(34545),
                s = r(34965),
                o = r(91199),
                h = r(397),
                u = TypeError,
                l = h("toPrimitive");
            t.exports = function(t, e) {
                if (!n(t) || a(t)) return t;
                var r, h = s(t, l);
                if (h) {
                    if (void 0 === e && (e = "default"), r = i(h, t, e), !n(r) || a(r)) return r;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === e && (e = "number"), o(t, e)
            }
        },
        65977: (t, e, r) => {
            var i = r(8426),
                n = r(34545);
            t.exports = function(t) {
                var e = i(t, "string");
                return n(e) ? e : e + ""
            }
        },
        93500: (t, e, r) => {
            var i = {};
            i[r(397)("toStringTag")] = "z", t.exports = "[object z]" === String(i)
        },
        6609: (t, e, r) => {
            var i = r(1873),
                n = String;
            t.exports = function(t) {
                if ("Symbol" === i(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return n(t)
            }
        },
        54963: t => {
            var e = String;
            t.exports = function(t) {
                try {
                    return e(t)
                } catch (t) {
                    return "Object"
                }
            }
        },
        28544: (t, e, r) => {
            var i = r(63836),
                n = 0,
                a = Math.random(),
                s = i(1..toString);
            t.exports = function(t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++n + a, 36)
            }
        },
        7706: (t, e, r) => {
            var i = r(18193);
            t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        50613: (t, e, r) => {
            var i = r(18194),
                n = r(49898);
            t.exports = i && n((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        71157: t => {
            var e = TypeError;
            t.exports = function(t, r) {
                if (t < r) throw e("Not enough arguments");
                return t
            }
        },
        683: (t, e, r) => {
            var i = r(11514),
                n = r(48198),
                a = i.WeakMap;
            t.exports = n(a) && /native code/.test(String(a))
        },
        397: (t, e, r) => {
            var i = r(11514),
                n = r(41547),
                a = r(89722),
                s = r(28544),
                o = r(18193),
                h = r(7706),
                u = i.Symbol,
                l = n("wks"),
                c = h ? u.for || u : u && u.withoutSetter || s;
            t.exports = function(t) {
                return a(l, t) || (l[t] = o && a(u, t) ? u[t] : c("Symbol." + t)), l[t]
            }
        },
        98801: t => {
            t.exports = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
        },
        86919: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(86841),
                a = r(60660).indexOf,
                s = r(11655),
                o = n([].indexOf),
                h = !!o && 1 / o([1], 1, -0) < 0;
            i({
                target: "Array",
                proto: !0,
                forced: h || !s("indexOf")
            }, {
                indexOf: function(t) {
                    var e = arguments.length > 1 ? arguments[1] : void 0;
                    return h ? o(this, t, e) || 0 : a(this, t, e)
                }
            })
        },
        97675: (t, e, r) => {
            "use strict";
            var i = r(27990),
                n = r(98),
                a = r(73350),
                s = r(38486),
                o = r(5688).f,
                h = r(97504),
                u = r(76212),
                l = r(16172),
                c = r(18194),
                f = "Array Iterator",
                g = s.set,
                p = s.getterFor(f);
            t.exports = h(Array, "Array", (function(t, e) {
                g(this, {
                    type: f,
                    target: i(t),
                    index: 0,
                    kind: e
                })
            }), (function() {
                var t = p(this),
                    e = t.target,
                    r = t.kind,
                    i = t.index++;
                return !e || i >= e.length ? (t.target = void 0, u(void 0, !0)) : u("keys" == r ? i : "values" == r ? e[i] : [i, e[i]], !1)
            }), "values");
            var d = a.Arguments = a.Array;
            if (n("keys"), n("values"), n("entries"), !l && c && "values" !== d.name) try {
                o(d, "name", {
                    value: "values"
                })
            } catch (t) {}
        },
        38849: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(13949).left,
                a = r(11655),
                s = r(27935);
            i({
                target: "Array",
                proto: !0,
                forced: !r(17127) && s > 79 && s < 83 || !a("reduce")
            }, {
                reduce: function(t) {
                    var e = arguments.length;
                    return n(this, t, e, e > 1 ? arguments[1] : void 0)
                }
            })
        },
        40651: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(63836),
                a = r(99589),
                s = n([].reverse),
                o = [1, 2];
            i({
                target: "Array",
                proto: !0,
                forced: String(o) === String(o.reverse())
            }, {
                reverse: function() {
                    return a(this) && (this.length = this.length), s(this)
                }
            })
        },
        93924: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(62051),
                a = r(15179),
                s = r(7174),
                o = r(92163),
                h = r(10132);
            i({
                target: "Promise",
                stat: !0,
                forced: r(81445)
            }, {
                all: function(t) {
                    var e = this,
                        r = s.f(e),
                        i = r.resolve,
                        u = r.reject,
                        l = o((function() {
                            var r = a(e.resolve),
                                s = [],
                                o = 0,
                                l = 1;
                            h(t, (function(t) {
                                var a = o++,
                                    h = !1;
                                l++, n(r, e, t).then((function(t) {
                                    h || (h = !0, s[a] = t, --l || i(s))
                                }), u)
                            })), --l || i(s)
                        }));
                    return l.error && u(l.value), r.promise
                }
            })
        },
        12459: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(16172),
                a = r(15399).CONSTRUCTOR,
                s = r(64834),
                o = r(35371),
                h = r(48198),
                u = r(28502),
                l = s && s.prototype;
            if (i({
                    target: "Promise",
                    proto: !0,
                    forced: a,
                    real: !0
                }, {
                    catch: function(t) {
                        return this.then(void 0, t)
                    }
                }), !n && h(s)) {
                var c = o("Promise").prototype.catch;
                l.catch !== c && u(l, "catch", c, {
                    unsafe: !0
                })
            }
        },
        51689: (t, e, r) => {
            "use strict";
            var i, n, a, s = r(85977),
                o = r(16172),
                h = r(17127),
                u = r(11514),
                l = r(62051),
                c = r(28502),
                f = r(48364),
                g = r(18475),
                p = r(71672),
                d = r(15179),
                v = r(48198),
                y = r(54190),
                m = r(92649),
                x = r(44844),
                b = r(91354).set,
                S = r(21335),
                w = r(42419),
                T = r(92163),
                A = r(18889),
                O = r(38486),
                C = r(64834),
                P = r(15399),
                E = r(7174),
                M = "Promise",
                N = P.CONSTRUCTOR,
                R = P.REJECTION_EVENT,
                _ = P.SUBCLASSING,
                V = O.getterFor(M),
                I = O.set,
                k = C && C.prototype,
                L = C,
                D = k,
                j = u.TypeError,
                B = u.document,
                F = u.process,
                z = E.f,
                U = z,
                H = !!(B && B.createEvent && u.dispatchEvent),
                X = "unhandledrejection",
                Y = function(t) {
                    var e;
                    return !(!y(t) || !v(e = t.then)) && e
                },
                W = function(t, e) {
                    var r, i, n, a = e.value,
                        s = 1 == e.state,
                        o = s ? t.ok : t.fail,
                        h = t.resolve,
                        u = t.reject,
                        c = t.domain;
                    try {
                        o ? (s || (2 === e.rejection && Z(e), e.rejection = 1), !0 === o ? r = a : (c && c.enter(), r = o(a), c && (c.exit(), n = !0)), r === t.promise ? u(j("Promise-chain cycle")) : (i = Y(r)) ? l(i, r, h, u) : h(r)) : u(a)
                    } catch (t) {
                        c && !n && c.exit(), u(t)
                    }
                },
                q = function(t, e) {
                    t.notified || (t.notified = !0, S((function() {
                        for (var r, i = t.reactions; r = i.get();) W(r, t);
                        t.notified = !1, e && !t.rejection && Q(t)
                    })))
                },
                G = function(t, e, r) {
                    var i, n;
                    H ? ((i = B.createEvent("Event")).promise = e, i.reason = r, i.initEvent(t, !1, !0), u.dispatchEvent(i)) : i = {
                        promise: e,
                        reason: r
                    }, !R && (n = u["on" + t]) ? n(i) : t === X && w("Unhandled promise rejection", r)
                },
                Q = function(t) {
                    l(b, u, (function() {
                        var e, r = t.facade,
                            i = t.value;
                        if ($(t) && (e = T((function() {
                                h ? F.emit("unhandledRejection", i, r) : G(X, r, i)
                            })), t.rejection = h || $(t) ? 2 : 1, e.error)) throw e.value
                    }))
                },
                $ = function(t) {
                    return 1 !== t.rejection && !t.parent
                },
                Z = function(t) {
                    l(b, u, (function() {
                        var e = t.facade;
                        h ? F.emit("rejectionHandled", e) : G("rejectionhandled", e, t.value)
                    }))
                },
                K = function(t, e, r) {
                    return function(i) {
                        t(e, i, r)
                    }
                },
                J = function(t, e, r) {
                    t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, q(t, !0))
                },
                tt = function(t, e, r) {
                    if (!t.done) {
                        t.done = !0, r && (t = r);
                        try {
                            if (t.facade === e) throw j("Promise can't be resolved itself");
                            var i = Y(e);
                            i ? S((function() {
                                var r = {
                                    done: !1
                                };
                                try {
                                    l(i, e, K(tt, r, t), K(J, r, t))
                                } catch (e) {
                                    J(r, e, t)
                                }
                            })) : (t.value = e, t.state = 1, q(t, !1))
                        } catch (e) {
                            J({
                                done: !1
                            }, e, t)
                        }
                    }
                };
            if (N && (D = (L = function(t) {
                    m(this, D), d(t), l(i, this);
                    var e = V(this);
                    try {
                        t(K(tt, e), K(J, e))
                    } catch (t) {
                        J(e, t)
                    }
                }).prototype, (i = function(t) {
                    I(this, {
                        type: M,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new A,
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = c(D, "then", (function(t, e) {
                    var r = V(this),
                        i = z(x(this, L));
                    return r.parent = !0, i.ok = !v(t) || t, i.fail = v(e) && e, i.domain = h ? F.domain : void 0, 0 == r.state ? r.reactions.add(i) : S((function() {
                        W(i, r)
                    })), i.promise
                })), n = function() {
                    var t = new i,
                        e = V(t);
                    this.promise = t, this.resolve = K(tt, e), this.reject = K(J, e)
                }, E.f = z = function(t) {
                    return t === L || undefined === t ? new n(t) : U(t)
                }, !o && v(C) && k !== Object.prototype)) {
                a = k.then, _ || c(k, "then", (function(t, e) {
                    var r = this;
                    return new L((function(t, e) {
                        l(a, r, t, e)
                    })).then(t, e)
                }), {
                    unsafe: !0
                });
                try {
                    delete k.constructor
                } catch (t) {}
                f && f(k, D)
            }
            s({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: N
            }, {
                Promise: L
            }), g(L, M, !1, !0), p(M)
        },
        10752: (t, e, r) => {
            r(51689), r(93924), r(12459), r(82044), r(30168), r(55374)
        },
        82044: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(62051),
                a = r(15179),
                s = r(7174),
                o = r(92163),
                h = r(10132);
            i({
                target: "Promise",
                stat: !0,
                forced: r(81445)
            }, {
                race: function(t) {
                    var e = this,
                        r = s.f(e),
                        i = r.reject,
                        u = o((function() {
                            var s = a(e.resolve);
                            h(t, (function(t) {
                                n(s, e, t).then(r.resolve, i)
                            }))
                        }));
                    return u.error && i(u.value), r.promise
                }
            })
        },
        30168: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(62051),
                a = r(7174);
            i({
                target: "Promise",
                stat: !0,
                forced: r(15399).CONSTRUCTOR
            }, {
                reject: function(t) {
                    var e = a.f(this);
                    return n(e.reject, void 0, t), e.promise
                }
            })
        },
        55374: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(35371),
                a = r(16172),
                s = r(64834),
                o = r(15399).CONSTRUCTOR,
                h = r(12601),
                u = n("Promise"),
                l = a && !o;
            i({
                target: "Promise",
                stat: !0,
                forced: a || o
            }, {
                resolve: function(t) {
                    return h(l && this === u ? s : this, t)
                }
            })
        },
        5915: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(25048);
            i({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== n
            }, {
                exec: n
            })
        },
        88760: (t, e, r) => {
            "use strict";
            var i = r(88078).PROPER,
                n = r(28502),
                a = r(17724),
                s = r(6609),
                o = r(49898),
                h = r(61210),
                u = "toString",
                l = RegExp.prototype[u],
                c = o((function() {
                    return "/a/b" != l.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                f = i && l.name != u;
            (c || f) && n(RegExp.prototype, u, (function() {
                var t = a(this);
                return "/" + s(t.source) + "/" + s(h(t))
            }), {
                unsafe: !0
            })
        },
        61231: (t, e, r) => {
            "use strict";
            var i, n = r(85977),
                a = r(86841),
                s = r(18816).f,
                o = r(27903),
                h = r(6609),
                u = r(48526),
                l = r(41509),
                c = r(42304),
                f = r(16172),
                g = a("".endsWith),
                p = a("".slice),
                d = Math.min,
                v = c("endsWith");
            n({
                target: "String",
                proto: !0,
                forced: !!(f || v || (i = s(String.prototype, "endsWith"), !i || i.writable)) && !v
            }, {
                endsWith: function(t) {
                    var e = h(l(this));
                    u(t);
                    var r = arguments.length > 1 ? arguments[1] : void 0,
                        i = e.length,
                        n = void 0 === r ? i : d(o(r), i),
                        a = h(t);
                    return g ? g(e, a, n) : p(e, n - a.length, n) === a
                }
            })
        },
        48158: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(63836),
                a = r(48526),
                s = r(41509),
                o = r(6609),
                h = r(42304),
                u = n("".indexOf);
            i({
                target: "String",
                proto: !0,
                forced: !h("includes")
            }, {
                includes: function(t) {
                    return !!~u(o(s(this)), o(a(t)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        78763: (t, e, r) => {
            "use strict";
            var i = r(62051),
                n = r(76577),
                a = r(17724),
                s = r(87880),
                o = r(27903),
                h = r(6609),
                u = r(41509),
                l = r(34965),
                c = r(27771),
                f = r(8721);
            n("match", (function(t, e, r) {
                return [function(e) {
                    var r = u(this),
                        n = s(e) ? void 0 : l(e, t);
                    return n ? i(n, e, r) : new RegExp(e)[t](h(r))
                }, function(t) {
                    var i = a(this),
                        n = h(t),
                        s = r(e, i, n);
                    if (s.done) return s.value;
                    if (!i.global) return f(i, n);
                    var u = i.unicode;
                    i.lastIndex = 0;
                    for (var l, g = [], p = 0; null !== (l = f(i, n));) {
                        var d = h(l[0]);
                        g[p] = d, "" === d && (i.lastIndex = c(n, o(i.lastIndex), u)), p++
                    }
                    return 0 === p ? null : g
                }]
            }))
        },
        69031: (t, e, r) => {
            "use strict";
            var i = r(38808),
                n = r(62051),
                a = r(63836),
                s = r(76577),
                o = r(49898),
                h = r(17724),
                u = r(48198),
                l = r(87880),
                c = r(79575),
                f = r(27903),
                g = r(6609),
                p = r(41509),
                d = r(27771),
                v = r(34965),
                y = r(13992),
                m = r(8721),
                x = r(397)("replace"),
                b = Math.max,
                S = Math.min,
                w = a([].concat),
                T = a([].push),
                A = a("".indexOf),
                O = a("".slice),
                C = "$0" === "a".replace(/./, "$0"),
                P = !!/./ [x] && "" === /./ [x]("a", "$0");
            s("replace", (function(t, e, r) {
                var a = P ? "$" : "$0";
                return [function(t, r) {
                    var i = p(this),
                        a = l(t) ? void 0 : v(t, x);
                    return a ? n(a, t, i, r) : n(e, g(i), t, r)
                }, function(t, n) {
                    var s = h(this),
                        o = g(t);
                    if ("string" == typeof n && -1 === A(n, a) && -1 === A(n, "$<")) {
                        var l = r(e, s, o, n);
                        if (l.done) return l.value
                    }
                    var p = u(n);
                    p || (n = g(n));
                    var v = s.global;
                    if (v) {
                        var x = s.unicode;
                        s.lastIndex = 0
                    }
                    for (var C = [];;) {
                        var P = m(s, o);
                        if (null === P) break;
                        if (T(C, P), !v) break;
                        "" === g(P[0]) && (s.lastIndex = d(o, f(s.lastIndex), x))
                    }
                    for (var E, M = "", N = 0, R = 0; R < C.length; R++) {
                        for (var _ = g((P = C[R])[0]), V = b(S(c(P.index), o.length), 0), I = [], k = 1; k < P.length; k++) T(I, void 0 === (E = P[k]) ? E : String(E));
                        var L = P.groups;
                        if (p) {
                            var D = w([_], I, V, o);
                            void 0 !== L && T(D, L);
                            var j = g(i(n, void 0, D))
                        } else j = y(_, o, V, I, L, n);
                        V >= N && (M += O(o, N, V) + j, N = V + _.length)
                    }
                    return M + O(o, N)
                }]
            }), !!o((function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })) || !C || P)
        },
        33036: (t, e, r) => {
            "use strict";
            var i = r(38808),
                n = r(62051),
                a = r(63836),
                s = r(76577),
                o = r(17724),
                h = r(87880),
                u = r(82766),
                l = r(41509),
                c = r(44844),
                f = r(27771),
                g = r(27903),
                p = r(6609),
                d = r(34965),
                v = r(1820),
                y = r(8721),
                m = r(25048),
                x = r(27517),
                b = r(49898),
                S = x.UNSUPPORTED_Y,
                w = 4294967295,
                T = Math.min,
                A = [].push,
                O = a(/./.exec),
                C = a(A),
                P = a("".slice);
            s("split", (function(t, e, r) {
                var a;
                return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, r) {
                    var a = p(l(this)),
                        s = void 0 === r ? w : r >>> 0;
                    if (0 === s) return [];
                    if (void 0 === t) return [a];
                    if (!u(t)) return n(e, a, t, s);
                    for (var o, h, c, f = [], g = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), d = 0, y = new RegExp(t.source, g + "g");
                        (o = n(m, y, a)) && !((h = y.lastIndex) > d && (C(f, P(a, d, o.index)), o.length > 1 && o.index < a.length && i(A, f, v(o, 1)), c = o[0].length, d = h, f.length >= s));) y.lastIndex === o.index && y.lastIndex++;
                    return d === a.length ? !c && O(y, "") || C(f, "") : C(f, P(a, d)), f.length > s ? v(f, 0, s) : f
                } : "0".split(void 0, 0).length ? function(t, r) {
                    return void 0 === t && 0 === r ? [] : n(e, this, t, r)
                } : e, [function(e, r) {
                    var i = l(this),
                        s = h(e) ? void 0 : d(e, t);
                    return s ? n(s, e, i, r) : n(a, p(i), e, r)
                }, function(t, i) {
                    var n = o(this),
                        s = p(t),
                        h = r(a, n, s, i, a !== e);
                    if (h.done) return h.value;
                    var u = c(n, RegExp),
                        l = n.unicode,
                        d = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (S ? "g" : "y"),
                        v = new u(S ? "^(?:" + n.source + ")" : n, d),
                        m = void 0 === i ? w : i >>> 0;
                    if (0 === m) return [];
                    if (0 === s.length) return null === y(v, s) ? [s] : [];
                    for (var x = 0, b = 0, A = []; b < s.length;) {
                        v.lastIndex = S ? 0 : b;
                        var O, E = y(v, S ? P(s, b) : s);
                        if (null === E || (O = T(g(v.lastIndex + (S ? b : 0)), s.length)) === x) b = f(s, b, l);
                        else {
                            if (C(A, P(s, x, b)), A.length === m) return A;
                            for (var M = 1; M <= E.length - 1; M++)
                                if (C(A, E[M]), A.length === m) return A;
                            b = x = O
                        }
                    }
                    return C(A, P(s, x)), A
                }]
            }), !!b((function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments)
                };
                var r = "ab".split(t);
                return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            })), S)
        },
        48405: (t, e, r) => {
            "use strict";
            var i, n = r(85977),
                a = r(86841),
                s = r(18816).f,
                o = r(27903),
                h = r(6609),
                u = r(48526),
                l = r(41509),
                c = r(42304),
                f = r(16172),
                g = a("".startsWith),
                p = a("".slice),
                d = Math.min,
                v = c("startsWith");
            n({
                target: "String",
                proto: !0,
                forced: !!(f || v || (i = s(String.prototype, "startsWith"), !i || i.writable)) && !v
            }, {
                startsWith: function(t) {
                    var e = h(l(this));
                    u(t);
                    var r = o(d(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                        i = h(t);
                    return g ? g(e, i, r) : p(e, r, r + i.length) === i
                }
            })
        },
        47250: (t, e, r) => {
            "use strict";
            var i = r(85977),
                n = r(54427).trim;
            i({
                target: "String",
                proto: !0,
                forced: r(9324)("trim")
            }, {
                trim: function() {
                    return n(this)
                }
            })
        },
        97050: (t, e, r) => {
            var i = r(11514),
                n = r(55294),
                a = r(77643),
                s = r(97675),
                o = r(95589),
                h = r(397),
                u = h("iterator"),
                l = h("toStringTag"),
                c = s.values,
                f = function(t, e) {
                    if (t) {
                        if (t[u] !== c) try {
                            o(t, u, c)
                        } catch (e) {
                            t[u] = c
                        }
                        if (t[l] || o(t, l, e), n[e])
                            for (var r in s)
                                if (t[r] !== s[r]) try {
                                    o(t, r, s[r])
                                } catch (e) {
                                    t[r] = s[r]
                                }
                    }
                };
            for (var g in n) f(i[g] && i[g].prototype, g);
            f(a, "DOMTokenList")
        },
        76279: function(t) {
            (function() {
                var e, r, i, n, a, s;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                    return performance.now()
                } : "undefined" != typeof process && null !== process && process.hrtime ? (t.exports = function() {
                    return (e() - a) / 1e6
                }, r = process.hrtime, n = (e = function() {
                    var t;
                    return 1e9 * (t = r())[0] + t[1]
                })(), s = 1e9 * process.uptime(), a = n - s) : Date.now ? (t.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (t.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        },
        61666: (t, e, r) => {
            for (var i = r(76279), n = "undefined" == typeof window ? r.g : window, a = ["moz", "webkit"], s = "AnimationFrame", o = n["request" + s], h = n["cancel" + s] || n["cancelRequest" + s], u = 0; !o && u < a.length; u++) o = n[a[u] + "Request" + s], h = n[a[u] + "Cancel" + s] || n[a[u] + "CancelRequest" + s];
            if (!o || !h) {
                var l = 0,
                    c = 0,
                    f = [];
                o = function(t) {
                    if (0 === f.length) {
                        var e = i(),
                            r = Math.max(0, 16.666666666666668 - (e - l));
                        l = r + e, setTimeout((function() {
                            var t = f.slice(0);
                            f.length = 0;
                            for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(l)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 0)
                                }
                        }), Math.round(r))
                    }
                    return f.push({
                        handle: ++c,
                        callback: t,
                        cancelled: !1
                    }), c
                }, h = function(t) {
                    for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0)
                }
            }
            t.exports = function(t) {
                return o.call(n, t)
            }, t.exports.cancel = function() {
                h.apply(n, arguments)
            }, t.exports.polyfill = function(t) {
                t || (t = n), t.requestAnimationFrame = o, t.cancelAnimationFrame = h
            }
        },
        26220: t => {
            t.exports = function(t) {
                this.ok = !1, this.alpha = 1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = (t = t.replace(/ /g, "")).toLowerCase();
                var e = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "00ffff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000000",
                    blanchedalmond: "ffebcd",
                    blue: "0000ff",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "00ffff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dodgerblue: "1e90ff",
                    feldspar: "d19275",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "ff00ff",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgrey: "d3d3d3",
                    lightgreen: "90ee90",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslateblue: "8470ff",
                    lightslategray: "778899",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "00ff00",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "ff00ff",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370d8",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "d87093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "ff0000",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    violetred: "d02090",
                    wheat: "f5deb3",
                    white: "ffffff",
                    whitesmoke: "f5f5f5",
                    yellow: "ffff00",
                    yellowgreen: "9acd32"
                };
                t = e[t] || t;
                for (var r = [{
                        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                        process: function(t) {
                            return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), parseFloat(t[4])]
                        }
                    }, {
                        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                        process: function(t) {
                            return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
                        }
                    }, {
                        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                        example: ["#00ff00", "336699"],
                        process: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        example: ["#fb0", "f0f"],
                        process: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }], i = 0; i < r.length; i++) {
                    var n = r[i].re,
                        a = r[i].process,
                        s = n.exec(t);
                    if (s) {
                        var o = a(s);
                        this.r = o[0], this.g = o[1], this.b = o[2], o.length > 3 && (this.alpha = o[3]), this.ok = !0
                    }
                }
                this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
                    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
                }, this.toRGBA = function() {
                    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")"
                }, this.toHex = function() {
                    var t = this.r.toString(16),
                        e = this.g.toString(16),
                        r = this.b.toString(16);
                    return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r
                }, this.getHelpXML = function() {
                    for (var t = new Array, i = 0; i < r.length; i++)
                        for (var n = r[i].example, a = 0; a < n.length; a++) t[t.length] = n[a];
                    for (var s in e) t[t.length] = s;
                    var o = document.createElement("ul");
                    o.setAttribute("id", "rgbcolor-examples");
                    for (i = 0; i < t.length; i++) try {
                        var h = document.createElement("li"),
                            u = new RGBColor(t[i]),
                            l = document.createElement("div");
                        l.style.cssText = "margin: 3px; border: 1px solid black; background:" + u.toHex() + "; color:" + u.toHex(), l.appendChild(document.createTextNode("test"));
                        var c = document.createTextNode(" " + t[i] + " -> " + u.toRGB() + " -> " + u.toHex());
                        h.appendChild(l), h.appendChild(c), o.appendChild(h)
                    } catch (t) {}
                    return o
                }
            }
        },
        53806: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                AElement: () => ce,
                AnimateColorElement: () => ae,
                AnimateElement: () => ne,
                AnimateTransformElement: () => se,
                BoundingBox: () => kt,
                CB1: () => nt,
                CB2: () => at,
                CB3: () => st,
                CB4: () => ot,
                Canvg: () => Ue,
                CircleElement: () => Yt,
                ClipPathElement: () => Ee,
                DefsElement: () => Kt,
                DescElement: () => ke,
                Document: () => Be,
                Element: () => Mt,
                EllipseElement: () => Wt,
                FeColorMatrixElement: () => Oe,
                FeCompositeElement: () => _e,
                FeDropShadowElement: () => Ne,
                FeGaussianBlurElement: () => Ve,
                FeMorphologyElement: () => Re,
                FilterElement: () => Me,
                Font: () => It,
                FontElement: () => oe,
                FontFaceElement: () => he,
                GElement: () => Jt,
                GlyphElement: () => Bt,
                GradientElement: () => te,
                ImageElement: () => ve,
                LineElement: () => qt,
                LinearGradientElement: () => ee,
                MarkerElement: () => Zt,
                MaskElement: () => Ce,
                Matrix: () => At,
                MissingGlyphElement: () => ue,
                Mouse: () => pt,
                PSEUDO_ZERO: () => tt,
                Parser: () => bt,
                PathElement: () => jt,
                PathParser: () => Lt,
                PatternElement: () => $t,
                Point: () => gt,
                PolygonElement: () => Qt,
                PolylineElement: () => Gt,
                Property: () => ct,
                QB1: () => ht,
                QB2: () => ut,
                QB3: () => lt,
                RadialGradientElement: () => re,
                RectElement: () => Xt,
                RenderedElement: () => Dt,
                Rotate: () => wt,
                SVGElement: () => Ht,
                SVGFontLoader: () => me,
                Scale: () => Tt,
                Screen: () => yt,
                Skew: () => Ot,
                SkewX: () => Ct,
                SkewY: () => Pt,
                StopElement: () => ie,
                StyleElement: () => xe,
                SymbolElement: () => ye,
                TRefElement: () => le,
                TSpanElement: () => zt,
                TextElement: () => Ft,
                TextPathElement: () => pe,
                TitleElement: () => Ie,
                Transform: () => Et,
                Translate: () => St,
                UnknownElement: () => Nt,
                UseElement: () => be,
                ViewPort: () => ft,
                compressSpaces: () => D,
                default: () => Ue,
                getSelectorSpecificity: () => J,
                normalizeAttributeName: () => U,
                normalizeColor: () => X,
                parseExternalUrl: () => H,
                presets: () => L,
                toNumbers: () => F,
                trimLeft: () => j,
                trimRight: () => B,
                vectorMagnitude: () => et,
                vectorsAngle: () => it,
                vectorsRatio: () => rt
            });
            r(10752);

            function i(t, e, r, i, n, a, s) {
                try {
                    var o = t[a](s),
                        h = o.value
                } catch (t) {
                    return void r(t)
                }
                o.done ? e(h) : Promise.resolve(h).then(i, n)
            }

            function n(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = t.apply(e, r);

                        function o(t) {
                            i(s, n, a, o, h, "next", t)
                        }

                        function h(t) {
                            i(s, n, a, o, h, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            r(78763), r(69031), r(48405), r(97675), r(97050);
            var a = r(7209);

            function s(t) {
                var e = function(t, e) {
                    if ("object" !== (0, a.Z)(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(t, e || "default");
                        if ("object" !== (0, a.Z)(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === (0, a.Z)(e) ? e : String(e)
            }

            function o(t, e, r) {
                return (e = s(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r(38849), r(61231), r(33036);
            var h = r(61666),
                u = (r(47250), r(26220)),
                l = (r(86919), r(48158), r(40651), function(t, e) {
                    return (l = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        })(t, e)
                });

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                l(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }

            function f(t, e) {
                var r = t[0],
                    i = t[1];
                return [r * Math.cos(e) - i * Math.sin(e), r * Math.sin(e) + i * Math.cos(e)]
            }

            function g() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var r = 0; r < t.length; r++)
                    if ("number" != typeof t[r]) throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof t[r] + " == typeof " + t[r]);
                return !0
            }
            var p = Math.PI;

            function d(t, e, r) {
                t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
                var i = t.rX,
                    n = t.rY,
                    a = t.x,
                    s = t.y;
                i = Math.abs(t.rX), n = Math.abs(t.rY);
                var o = f([(e - a) / 2, (r - s) / 2], -t.xRot / 180 * p),
                    h = o[0],
                    u = o[1],
                    l = Math.pow(h, 2) / Math.pow(i, 2) + Math.pow(u, 2) / Math.pow(n, 2);
                1 < l && (i *= Math.sqrt(l), n *= Math.sqrt(l)), t.rX = i, t.rY = n;
                var c = Math.pow(i, 2) * Math.pow(u, 2) + Math.pow(n, 2) * Math.pow(h, 2),
                    g = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(i, 2) * Math.pow(n, 2) - c) / c)),
                    d = i * u / n * g,
                    v = -n * h / i * g,
                    y = f([d, v], t.xRot / 180 * p);
                t.cX = y[0] + (e + a) / 2, t.cY = y[1] + (r + s) / 2, t.phi1 = Math.atan2((u - v) / n, (h - d) / i), t.phi2 = Math.atan2((-u - v) / n, (-h - d) / i), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * p), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * p), t.phi1 *= 180 / p, t.phi2 *= 180 / p
            }

            function v(t, e, r) {
                g(t, e, r);
                var i = t * t + e * e - r * r;
                if (0 > i) return [];
                if (0 === i) return [
                    [t * r / (t * t + e * e), e * r / (t * t + e * e)]
                ];
                var n = Math.sqrt(i);
                return [
                    [(t * r + e * n) / (t * t + e * e), (e * r - t * n) / (t * t + e * e)],
                    [(t * r - e * n) / (t * t + e * e), (e * r + t * n) / (t * t + e * e)]
                ]
            }
            var y, m = Math.PI / 180;

            function x(t, e, r) {
                return (1 - r) * t + r * e
            }

            function b(t, e, r, i) {
                return t + Math.cos(i / 180 * p) * e + Math.sin(i / 180 * p) * r
            }

            function S(t, e, r, i) {
                var n = 1e-6,
                    a = e - t,
                    s = r - e,
                    o = 3 * a + 3 * (i - r) - 6 * s,
                    h = 6 * (s - a),
                    u = 3 * a;
                return Math.abs(o) < n ? [-u / h] : function(t, e, r) {
                    void 0 === r && (r = 1e-6);
                    var i = t * t / 4 - e;
                    if (i < -r) return [];
                    if (i <= r) return [-t / 2];
                    var n = Math.sqrt(i);
                    return [-t / 2 - n, -t / 2 + n]
                }(h / o, u / o, n)
            }

            function w(t, e, r, i, n) {
                var a = 1 - n;
                return t * (a * a * a) + e * (3 * a * a * n) + r * (3 * a * n * n) + i * (n * n * n)
            }! function(t) {
                function e() {
                    return n((function(t, e, r) {
                        return t.relative && (void 0 !== t.x1 && (t.x1 += e), void 0 !== t.y1 && (t.y1 += r), void 0 !== t.x2 && (t.x2 += e), void 0 !== t.y2 && (t.y2 += r), void 0 !== t.x && (t.x += e), void 0 !== t.y && (t.y += r), t.relative = !1), t
                    }))
                }

                function r() {
                    var t = NaN,
                        e = NaN,
                        r = NaN,
                        i = NaN;
                    return n((function(n, a, s) {
                        return n.type & E.SMOOTH_CURVE_TO && (n.type = E.CURVE_TO, t = isNaN(t) ? a : t, e = isNaN(e) ? s : e, n.x1 = n.relative ? a - t : 2 * a - t, n.y1 = n.relative ? s - e : 2 * s - e), n.type & E.CURVE_TO ? (t = n.relative ? a + n.x2 : n.x2, e = n.relative ? s + n.y2 : n.y2) : (t = NaN, e = NaN), n.type & E.SMOOTH_QUAD_TO && (n.type = E.QUAD_TO, r = isNaN(r) ? a : r, i = isNaN(i) ? s : i, n.x1 = n.relative ? a - r : 2 * a - r, n.y1 = n.relative ? s - i : 2 * s - i), n.type & E.QUAD_TO ? (r = n.relative ? a + n.x1 : n.x1, i = n.relative ? s + n.y1 : n.y1) : (r = NaN, i = NaN), n
                    }))
                }

                function i() {
                    var t = NaN,
                        e = NaN;
                    return n((function(r, i, n) {
                        if (r.type & E.SMOOTH_QUAD_TO && (r.type = E.QUAD_TO, t = isNaN(t) ? i : t, e = isNaN(e) ? n : e, r.x1 = r.relative ? i - t : 2 * i - t, r.y1 = r.relative ? n - e : 2 * n - e), r.type & E.QUAD_TO) {
                            t = r.relative ? i + r.x1 : r.x1, e = r.relative ? n + r.y1 : r.y1;
                            var a = r.x1,
                                s = r.y1;
                            r.type = E.CURVE_TO, r.x1 = ((r.relative ? 0 : i) + 2 * a) / 3, r.y1 = ((r.relative ? 0 : n) + 2 * s) / 3, r.x2 = (r.x + 2 * a) / 3, r.y2 = (r.y + 2 * s) / 3
                        } else t = NaN, e = NaN;
                        return r
                    }))
                }

                function n(t) {
                    var e = 0,
                        r = 0,
                        i = NaN,
                        n = NaN;
                    return function(a) {
                        if (isNaN(i) && !(a.type & E.MOVE_TO)) throw new Error("path must start with moveto");
                        var s = t(a, e, r, i, n);
                        return a.type & E.CLOSE_PATH && (e = i, r = n), void 0 !== a.x && (e = a.relative ? e + a.x : a.x), void 0 !== a.y && (r = a.relative ? r + a.y : a.y), a.type & E.MOVE_TO && (i = e, n = r), s
                    }
                }

                function a(t, e, r, i, a, s) {
                    return g(t, e, r, i, a, s), n((function(n, o, h, u) {
                        var l = n.x1,
                            c = n.x2,
                            f = n.relative && !isNaN(u),
                            g = void 0 !== n.x ? n.x : f ? 0 : o,
                            p = void 0 !== n.y ? n.y : f ? 0 : h;

                        function d(t) {
                            return t * t
                        }
                        n.type & E.HORIZ_LINE_TO && 0 !== e && (n.type = E.LINE_TO, n.y = n.relative ? 0 : h), n.type & E.VERT_LINE_TO && 0 !== r && (n.type = E.LINE_TO, n.x = n.relative ? 0 : o), void 0 !== n.x && (n.x = n.x * t + p * r + (f ? 0 : a)), void 0 !== n.y && (n.y = g * e + n.y * i + (f ? 0 : s)), void 0 !== n.x1 && (n.x1 = n.x1 * t + n.y1 * r + (f ? 0 : a)), void 0 !== n.y1 && (n.y1 = l * e + n.y1 * i + (f ? 0 : s)), void 0 !== n.x2 && (n.x2 = n.x2 * t + n.y2 * r + (f ? 0 : a)), void 0 !== n.y2 && (n.y2 = c * e + n.y2 * i + (f ? 0 : s));
                        var v = t * i - e * r;
                        if (void 0 !== n.xRot && (1 !== t || 0 !== e || 0 !== r || 1 !== i))
                            if (0 === v) delete n.rX, delete n.rY, delete n.xRot, delete n.lArcFlag, delete n.sweepFlag, n.type = E.LINE_TO;
                            else {
                                var y = n.xRot * Math.PI / 180,
                                    m = Math.sin(y),
                                    x = Math.cos(y),
                                    b = 1 / d(n.rX),
                                    S = 1 / d(n.rY),
                                    w = d(x) * b + d(m) * S,
                                    T = 2 * m * x * (b - S),
                                    A = d(m) * b + d(x) * S,
                                    O = w * i * i - T * e * i + A * e * e,
                                    C = T * (t * i + e * r) - 2 * (w * r * i + A * t * e),
                                    P = w * r * r - T * t * r + A * t * t,
                                    M = (Math.atan2(C, O - P) + Math.PI) % Math.PI / 2,
                                    N = Math.sin(M),
                                    R = Math.cos(M);
                                n.rX = Math.abs(v) / Math.sqrt(O * d(R) + C * N * R + P * d(N)), n.rY = Math.abs(v) / Math.sqrt(O * d(N) - C * N * R + P * d(R)), n.xRot = 180 * M / Math.PI
                            } return void 0 !== n.sweepFlag && 0 > v && (n.sweepFlag = +!n.sweepFlag), n
                    }))
                }
                t.ROUND = function(t) {
                    function e(e) {
                        return Math.round(e * t) / t
                    }
                    return void 0 === t && (t = 1e13), g(t),
                        function(t) {
                            return void 0 !== t.x1 && (t.x1 = e(t.x1)), void 0 !== t.y1 && (t.y1 = e(t.y1)), void 0 !== t.x2 && (t.x2 = e(t.x2)), void 0 !== t.y2 && (t.y2 = e(t.y2)), void 0 !== t.x && (t.x = e(t.x)), void 0 !== t.y && (t.y = e(t.y)), void 0 !== t.rX && (t.rX = e(t.rX)), void 0 !== t.rY && (t.rY = e(t.rY)), t
                        }
                }, t.TO_ABS = e, t.TO_REL = function() {
                    return n((function(t, e, r) {
                        return t.relative || (void 0 !== t.x1 && (t.x1 -= e), void 0 !== t.y1 && (t.y1 -= r), void 0 !== t.x2 && (t.x2 -= e), void 0 !== t.y2 && (t.y2 -= r), void 0 !== t.x && (t.x -= e), void 0 !== t.y && (t.y -= r), t.relative = !0), t
                    }))
                }, t.NORMALIZE_HVZ = function(t, e, r) {
                    return void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), n((function(i, n, a, s, o) {
                        if (isNaN(s) && !(i.type & E.MOVE_TO)) throw new Error("path must start with moveto");
                        return e && i.type & E.HORIZ_LINE_TO && (i.type = E.LINE_TO, i.y = i.relative ? 0 : a), r && i.type & E.VERT_LINE_TO && (i.type = E.LINE_TO, i.x = i.relative ? 0 : n), t && i.type & E.CLOSE_PATH && (i.type = E.LINE_TO, i.x = i.relative ? s - n : s, i.y = i.relative ? o - a : o), i.type & E.ARC && (0 === i.rX || 0 === i.rY) && (i.type = E.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i
                    }))
                }, t.NORMALIZE_ST = r, t.QT_TO_C = i, t.INFO = n, t.SANITIZE = function(t) {
                    void 0 === t && (t = 0), g(t);
                    var e = NaN,
                        r = NaN,
                        i = NaN,
                        a = NaN;
                    return n((function(n, s, o, h, u) {
                        var l = Math.abs,
                            c = !1,
                            f = 0,
                            g = 0;
                        if (n.type & E.SMOOTH_CURVE_TO && (f = isNaN(e) ? 0 : s - e, g = isNaN(r) ? 0 : o - r), n.type & (E.CURVE_TO | E.SMOOTH_CURVE_TO) ? (e = n.relative ? s + n.x2 : n.x2, r = n.relative ? o + n.y2 : n.y2) : (e = NaN, r = NaN), n.type & E.SMOOTH_QUAD_TO ? (i = isNaN(i) ? s : 2 * s - i, a = isNaN(a) ? o : 2 * o - a) : n.type & E.QUAD_TO ? (i = n.relative ? s + n.x1 : n.x1, a = n.relative ? o + n.y1 : n.y2) : (i = NaN, a = NaN), n.type & E.LINE_COMMANDS || n.type & E.ARC && (0 === n.rX || 0 === n.rY || !n.lArcFlag) || n.type & E.CURVE_TO || n.type & E.SMOOTH_CURVE_TO || n.type & E.QUAD_TO || n.type & E.SMOOTH_QUAD_TO) {
                            var p = void 0 === n.x ? 0 : n.relative ? n.x : n.x - s,
                                d = void 0 === n.y ? 0 : n.relative ? n.y : n.y - o;
                            f = isNaN(i) ? void 0 === n.x1 ? f : n.relative ? n.x : n.x1 - s : i - s, g = isNaN(a) ? void 0 === n.y1 ? g : n.relative ? n.y : n.y1 - o : a - o;
                            var v = void 0 === n.x2 ? 0 : n.relative ? n.x : n.x2 - s,
                                y = void 0 === n.y2 ? 0 : n.relative ? n.y : n.y2 - o;
                            l(p) <= t && l(d) <= t && l(f) <= t && l(g) <= t && l(v) <= t && l(y) <= t && (c = !0)
                        }
                        return n.type & E.CLOSE_PATH && l(s - h) <= t && l(o - u) <= t && (c = !0), c ? [] : n
                    }))
                }, t.MATRIX = a, t.ROTATE = function(t, e, r) {
                    void 0 === e && (e = 0), void 0 === r && (r = 0), g(t, e, r);
                    var i = Math.sin(t),
                        n = Math.cos(t);
                    return a(n, i, -i, n, e - e * n + r * i, r - e * i - r * n)
                }, t.TRANSLATE = function(t, e) {
                    return void 0 === e && (e = 0), g(t, e), a(1, 0, 0, 1, t, e)
                }, t.SCALE = function(t, e) {
                    return void 0 === e && (e = t), g(t, e), a(t, 0, 0, e, 0, 0)
                }, t.SKEW_X = function(t) {
                    return g(t), a(1, 0, Math.atan(t), 1, 0, 0)
                }, t.SKEW_Y = function(t) {
                    return g(t), a(1, Math.atan(t), 0, 1, 0, 0)
                }, t.X_AXIS_SYMMETRY = function(t) {
                    return void 0 === t && (t = 0), g(t), a(-1, 0, 0, 1, t, 0)
                }, t.Y_AXIS_SYMMETRY = function(t) {
                    return void 0 === t && (t = 0), g(t), a(1, 0, 0, -1, 0, t)
                }, t.A_TO_C = function() {
                    return n((function(t, e, r) {
                        return E.ARC === t.type ? function(t, e, r) {
                            var i, n, a, s;
                            t.cX || d(t, e, r);
                            for (var o = Math.min(t.phi1, t.phi2), h = Math.max(t.phi1, t.phi2) - o, u = Math.ceil(h / 90), l = new Array(u), c = e, g = r, p = 0; p < u; p++) {
                                var v = x(t.phi1, t.phi2, p / u),
                                    y = x(t.phi1, t.phi2, (p + 1) / u),
                                    b = y - v,
                                    S = 4 / 3 * Math.tan(b * m / 4),
                                    w = [Math.cos(v * m) - S * Math.sin(v * m), Math.sin(v * m) + S * Math.cos(v * m)],
                                    T = w[0],
                                    A = w[1],
                                    O = [Math.cos(y * m), Math.sin(y * m)],
                                    C = O[0],
                                    P = O[1],
                                    M = [C + S * Math.sin(y * m), P - S * Math.cos(y * m)],
                                    N = M[0],
                                    R = M[1];
                                l[p] = {
                                    relative: t.relative,
                                    type: E.CURVE_TO
                                };
                                var _ = function(e, r) {
                                    var i = f([e * t.rX, r * t.rY], t.xRot),
                                        n = i[0],
                                        a = i[1];
                                    return [t.cX + n, t.cY + a]
                                };
                                i = _(T, A), l[p].x1 = i[0], l[p].y1 = i[1], n = _(N, R), l[p].x2 = n[0], l[p].y2 = n[1], a = _(C, P), l[p].x = a[0], l[p].y = a[1], t.relative && (l[p].x1 -= c, l[p].y1 -= g, l[p].x2 -= c, l[p].y2 -= g, l[p].x -= c, l[p].y -= g), c = (s = [l[p].x, l[p].y])[0], g = s[1]
                            }
                            return l
                        }(t, t.relative ? 0 : e, t.relative ? 0 : r) : t
                    }))
                }, t.ANNOTATE_ARCS = function() {
                    return n((function(t, e, r) {
                        return t.relative && (e = 0, r = 0), E.ARC === t.type && d(t, e, r), t
                    }))
                }, t.CLONE = function() {
                    return function(t) {
                        var e = {};
                        for (var r in t) e[r] = t[r];
                        return e
                    }
                }, t.CALCULATE_BOUNDS = function() {
                    var t = e(),
                        a = i(),
                        s = r(),
                        o = n((function(e, r, i) {
                            var n = s(a(t(function(t) {
                                var e = {};
                                for (var r in t) e[r] = t[r];
                                return e
                            }(e))));

                            function h(t) {
                                t > o.maxX && (o.maxX = t), t < o.minX && (o.minX = t)
                            }

                            function u(t) {
                                t > o.maxY && (o.maxY = t), t < o.minY && (o.minY = t)
                            }
                            if (n.type & E.DRAWING_COMMANDS && (h(r), u(i)), n.type & E.HORIZ_LINE_TO && h(n.x), n.type & E.VERT_LINE_TO && u(n.y), n.type & E.LINE_TO && (h(n.x), u(n.y)), n.type & E.CURVE_TO) {
                                h(n.x), u(n.y);
                                for (var l = 0, c = S(r, n.x1, n.x2, n.x); l < c.length; l++) 0 < (V = c[l]) && 1 > V && h(w(r, n.x1, n.x2, n.x, V));
                                for (var f = 0, g = S(i, n.y1, n.y2, n.y); f < g.length; f++) 0 < (V = g[f]) && 1 > V && u(w(i, n.y1, n.y2, n.y, V))
                            }
                            if (n.type & E.ARC) {
                                h(n.x), u(n.y), d(n, r, i);
                                for (var p = n.xRot / 180 * Math.PI, y = Math.cos(p) * n.rX, m = Math.sin(p) * n.rX, x = -Math.sin(p) * n.rY, T = Math.cos(p) * n.rY, A = n.phi1 < n.phi2 ? [n.phi1, n.phi2] : -180 > n.phi2 ? [n.phi2 + 360, n.phi1 + 360] : [n.phi2, n.phi1], O = A[0], C = A[1], P = function(t) {
                                        var e = t[0],
                                            r = t[1],
                                            i = 180 * Math.atan2(r, e) / Math.PI;
                                        return i < O ? i + 360 : i
                                    }, M = 0, N = v(x, -y, 0).map(P); M < N.length; M++)(V = N[M]) > O && V < C && h(b(n.cX, y, x, V));
                                for (var R = 0, _ = v(T, -m, 0).map(P); R < _.length; R++) {
                                    var V;
                                    (V = _[R]) > O && V < C && u(b(n.cY, m, T, V))
                                }
                            }
                            return e
                        }));
                    return o.minX = 1 / 0, o.maxX = -1 / 0, o.minY = 1 / 0, o.maxY = -1 / 0, o
                }
            }(y || (y = {}));
            var T, A = function() {
                    function t() {}
                    return t.prototype.round = function(t) {
                        return this.transform(y.ROUND(t))
                    }, t.prototype.toAbs = function() {
                        return this.transform(y.TO_ABS())
                    }, t.prototype.toRel = function() {
                        return this.transform(y.TO_REL())
                    }, t.prototype.normalizeHVZ = function(t, e, r) {
                        return this.transform(y.NORMALIZE_HVZ(t, e, r))
                    }, t.prototype.normalizeST = function() {
                        return this.transform(y.NORMALIZE_ST())
                    }, t.prototype.qtToC = function() {
                        return this.transform(y.QT_TO_C())
                    }, t.prototype.aToC = function() {
                        return this.transform(y.A_TO_C())
                    }, t.prototype.sanitize = function(t) {
                        return this.transform(y.SANITIZE(t))
                    }, t.prototype.translate = function(t, e) {
                        return this.transform(y.TRANSLATE(t, e))
                    }, t.prototype.scale = function(t, e) {
                        return this.transform(y.SCALE(t, e))
                    }, t.prototype.rotate = function(t, e, r) {
                        return this.transform(y.ROTATE(t, e, r))
                    }, t.prototype.matrix = function(t, e, r, i, n, a) {
                        return this.transform(y.MATRIX(t, e, r, i, n, a))
                    }, t.prototype.skewX = function(t) {
                        return this.transform(y.SKEW_X(t))
                    }, t.prototype.skewY = function(t) {
                        return this.transform(y.SKEW_Y(t))
                    }, t.prototype.xSymmetry = function(t) {
                        return this.transform(y.X_AXIS_SYMMETRY(t))
                    }, t.prototype.ySymmetry = function(t) {
                        return this.transform(y.Y_AXIS_SYMMETRY(t))
                    }, t.prototype.annotateArcs = function() {
                        return this.transform(y.ANNOTATE_ARCS())
                    }, t
                }(),
                O = function(t) {
                    return " " === t || "\t" === t || "\r" === t || "\n" === t
                },
                C = function(t) {
                    return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0)
                },
                P = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e
                    }
                    return c(e, t), e.prototype.finish = function(t) {
                        if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
                        return t
                    }, e.prototype.parse = function(t, e) {
                        var r = this;
                        void 0 === e && (e = []);
                        for (var i = function(t) {
                                e.push(t), r.curArgs.length = 0, r.canParseCommandOrComma = !0
                            }, n = 0; n < t.length; n++) {
                            var a = t[n],
                                s = !(this.curCommandType !== E.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
                                o = C(a) && ("0" === this.curNumber && "0" === a || s);
                            if (!C(a) || o)
                                if ("e" !== a && "E" !== a)
                                    if ("-" !== a && "+" !== a || !this.curNumberHasExp || this.curNumberHasExpDigits)
                                        if ("." !== a || this.curNumberHasExp || this.curNumberHasDecimal || s) {
                                            if (this.curNumber && -1 !== this.curCommandType) {
                                                var h = Number(this.curNumber);
                                                if (isNaN(h)) throw new SyntaxError("Invalid number ending at " + n);
                                                if (this.curCommandType === E.ARC)
                                                    if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                                        if (0 > h) throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + n + '"')
                                                    } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + n + '"');
                                                this.curArgs.push(h), this.curArgs.length === M[this.curCommandType] && (E.HORIZ_LINE_TO === this.curCommandType ? i({
                                                    type: E.HORIZ_LINE_TO,
                                                    relative: this.curCommandRelative,
                                                    x: h
                                                }) : E.VERT_LINE_TO === this.curCommandType ? i({
                                                    type: E.VERT_LINE_TO,
                                                    relative: this.curCommandRelative,
                                                    y: h
                                                }) : this.curCommandType === E.MOVE_TO || this.curCommandType === E.LINE_TO || this.curCommandType === E.SMOOTH_QUAD_TO ? (i({
                                                    type: this.curCommandType,
                                                    relative: this.curCommandRelative,
                                                    x: this.curArgs[0],
                                                    y: this.curArgs[1]
                                                }), E.MOVE_TO === this.curCommandType && (this.curCommandType = E.LINE_TO)) : this.curCommandType === E.CURVE_TO ? i({
                                                    type: E.CURVE_TO,
                                                    relative: this.curCommandRelative,
                                                    x1: this.curArgs[0],
                                                    y1: this.curArgs[1],
                                                    x2: this.curArgs[2],
                                                    y2: this.curArgs[3],
                                                    x: this.curArgs[4],
                                                    y: this.curArgs[5]
                                                }) : this.curCommandType === E.SMOOTH_CURVE_TO ? i({
                                                    type: E.SMOOTH_CURVE_TO,
                                                    relative: this.curCommandRelative,
                                                    x2: this.curArgs[0],
                                                    y2: this.curArgs[1],
                                                    x: this.curArgs[2],
                                                    y: this.curArgs[3]
                                                }) : this.curCommandType === E.QUAD_TO ? i({
                                                    type: E.QUAD_TO,
                                                    relative: this.curCommandRelative,
                                                    x1: this.curArgs[0],
                                                    y1: this.curArgs[1],
                                                    x: this.curArgs[2],
                                                    y: this.curArgs[3]
                                                }) : this.curCommandType === E.ARC && i({
                                                    type: E.ARC,
                                                    relative: this.curCommandRelative,
                                                    rX: this.curArgs[0],
                                                    rY: this.curArgs[1],
                                                    xRot: this.curArgs[2],
                                                    lArcFlag: this.curArgs[3],
                                                    sweepFlag: this.curArgs[4],
                                                    x: this.curArgs[5],
                                                    y: this.curArgs[6]
                                                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0
                                            }
                                            if (!O(a))
                                                if ("," === a && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                                                else if ("+" !== a && "-" !== a && "." !== a)
                                                if (o) this.curNumber = a, this.curNumberHasDecimal = !1;
                                                else {
                                                    if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + n + ".");
                                                    if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + a + '" at index ' + n + ". Command cannot follow comma");
                                                    if (this.canParseCommandOrComma = !1, "z" !== a && "Z" !== a)
                                                        if ("h" === a || "H" === a) this.curCommandType = E.HORIZ_LINE_TO, this.curCommandRelative = "h" === a;
                                                        else if ("v" === a || "V" === a) this.curCommandType = E.VERT_LINE_TO, this.curCommandRelative = "v" === a;
                                                    else if ("m" === a || "M" === a) this.curCommandType = E.MOVE_TO, this.curCommandRelative = "m" === a;
                                                    else if ("l" === a || "L" === a) this.curCommandType = E.LINE_TO, this.curCommandRelative = "l" === a;
                                                    else if ("c" === a || "C" === a) this.curCommandType = E.CURVE_TO, this.curCommandRelative = "c" === a;
                                                    else if ("s" === a || "S" === a) this.curCommandType = E.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === a;
                                                    else if ("q" === a || "Q" === a) this.curCommandType = E.QUAD_TO, this.curCommandRelative = "q" === a;
                                                    else if ("t" === a || "T" === a) this.curCommandType = E.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === a;
                                                    else {
                                                        if ("a" !== a && "A" !== a) throw new SyntaxError('Unexpected character "' + a + '" at index ' + n + ".");
                                                        this.curCommandType = E.ARC, this.curCommandRelative = "a" === a
                                                    } else e.push({
                                                        type: E.CLOSE_PATH
                                                    }), this.canParseCommandOrComma = !0, this.curCommandType = -1
                                                }
                                            else this.curNumber = a, this.curNumberHasDecimal = "." === a
                                        } else this.curNumber += a, this.curNumberHasDecimal = !0;
                            else this.curNumber += a;
                            else this.curNumber += a, this.curNumberHasExp = !0;
                            else this.curNumber += a, this.curNumberHasExpDigits = this.curNumberHasExp
                        }
                        return e
                    }, e.prototype.transform = function(t) {
                        return Object.create(this, {
                            parse: {
                                value: function(e, r) {
                                    void 0 === r && (r = []);
                                    for (var i = 0, n = Object.getPrototypeOf(this).parse.call(this, e); i < n.length; i++) {
                                        var a = n[i],
                                            s = t(a);
                                        Array.isArray(s) ? r.push.apply(r, s) : r.push(s)
                                    }
                                    return r
                                }
                            }
                        })
                    }, e
                }(A),
                E = function(t) {
                    function e(r) {
                        var i = t.call(this) || this;
                        return i.commands = "string" == typeof r ? e.parse(r) : r, i
                    }
                    return c(e, t), e.prototype.encode = function() {
                        return e.encode(this.commands)
                    }, e.prototype.getBounds = function() {
                        var t = y.CALCULATE_BOUNDS();
                        return this.transform(t), t
                    }, e.prototype.transform = function(t) {
                        for (var e = [], r = 0, i = this.commands; r < i.length; r++) {
                            var n = t(i[r]);
                            Array.isArray(n) ? e.push.apply(e, n) : e.push(n)
                        }
                        return this.commands = e, this
                    }, e.encode = function(t) {
                        return function(t) {
                            var e = "";
                            Array.isArray(t) || (t = [t]);
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r];
                                if (i.type === E.CLOSE_PATH) e += "z";
                                else if (i.type === E.HORIZ_LINE_TO) e += (i.relative ? "h" : "H") + i.x;
                                else if (i.type === E.VERT_LINE_TO) e += (i.relative ? "v" : "V") + i.y;
                                else if (i.type === E.MOVE_TO) e += (i.relative ? "m" : "M") + i.x + " " + i.y;
                                else if (i.type === E.LINE_TO) e += (i.relative ? "l" : "L") + i.x + " " + i.y;
                                else if (i.type === E.CURVE_TO) e += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
                                else if (i.type === E.SMOOTH_CURVE_TO) e += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
                                else if (i.type === E.QUAD_TO) e += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;
                                else if (i.type === E.SMOOTH_QUAD_TO) e += (i.relative ? "t" : "T") + i.x + " " + i.y;
                                else {
                                    if (i.type !== E.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + r + ".");
                                    e += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y
                                }
                            }
                            return e
                        }(t)
                    }, e.parse = function(t) {
                        var e = new P,
                            r = [];
                        return e.parse(t, r), e.finish(r), r
                    }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e
                }(A),
                M = ((T = {})[E.MOVE_TO] = 2, T[E.LINE_TO] = 2, T[E.HORIZ_LINE_TO] = 1, T[E.VERT_LINE_TO] = 1, T[E.CLOSE_PATH] = 0, T[E.QUAD_TO] = 4, T[E.SMOOTH_QUAD_TO] = 2, T[E.CURVE_TO] = 6, T[E.SMOOTH_CURVE_TO] = 4, T[E.ARC] = 7, T);
            r(88760);

            function N(t) {
                return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, N(t)
            }
            var R = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                _ = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

            function V(t, e, r, i, n) {
                if ("string" == typeof t && (t = document.getElementById(t)), !t || "object" !== N(t) || !("getContext" in t)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
                var a = t.getContext("2d");
                try {
                    return a.getImageData(e, r, i, n)
                } catch (t) {
                    throw new Error("unable to access image data: " + t)
                }
            }

            function I(t, e, r, i, n, a) {
                if (!(isNaN(a) || a < 1)) {
                    a |= 0;
                    var s = V(t, e, r, i, n);
                    s = function(t, e, r, i, n, a) {
                        for (var s, o = t.data, h = 2 * a + 1, u = i - 1, l = n - 1, c = a + 1, f = c * (c + 1) / 2, g = new k, p = g, d = 1; d < h; d++) p = p.next = new k, d === c && (s = p);
                        p.next = g;
                        for (var v = null, y = null, m = 0, x = 0, b = R[a], S = _[a], w = 0; w < n; w++) {
                            p = g;
                            for (var T = o[x], A = o[x + 1], O = o[x + 2], C = o[x + 3], P = 0; P < c; P++) p.r = T, p.g = A, p.b = O, p.a = C, p = p.next;
                            for (var E = 0, M = 0, N = 0, V = 0, I = c * T, L = c * A, D = c * O, j = c * C, B = f * T, F = f * A, z = f * O, U = f * C, H = 1; H < c; H++) {
                                var X = x + ((u < H ? u : H) << 2),
                                    Y = o[X],
                                    W = o[X + 1],
                                    q = o[X + 2],
                                    G = o[X + 3],
                                    Q = c - H;
                                B += (p.r = Y) * Q, F += (p.g = W) * Q, z += (p.b = q) * Q, U += (p.a = G) * Q, E += Y, M += W, N += q, V += G, p = p.next
                            }
                            v = g, y = s;
                            for (var $ = 0; $ < i; $++) {
                                var Z = U * b >> S;
                                if (o[x + 3] = Z, 0 !== Z) {
                                    var K = 255 / Z;
                                    o[x] = (B * b >> S) * K, o[x + 1] = (F * b >> S) * K, o[x + 2] = (z * b >> S) * K
                                } else o[x] = o[x + 1] = o[x + 2] = 0;
                                B -= I, F -= L, z -= D, U -= j, I -= v.r, L -= v.g, D -= v.b, j -= v.a;
                                var J = $ + a + 1;
                                J = m + (J < u ? J : u) << 2, B += E += v.r = o[J], F += M += v.g = o[J + 1], z += N += v.b = o[J + 2], U += V += v.a = o[J + 3], v = v.next;
                                var tt = y,
                                    et = tt.r,
                                    rt = tt.g,
                                    it = tt.b,
                                    nt = tt.a;
                                I += et, L += rt, D += it, j += nt, E -= et, M -= rt, N -= it, V -= nt, y = y.next, x += 4
                            }
                            m += i
                        }
                        for (var at = 0; at < i; at++) {
                            var st = o[x = at << 2],
                                ot = o[x + 1],
                                ht = o[x + 2],
                                ut = o[x + 3],
                                lt = c * st,
                                ct = c * ot,
                                ft = c * ht,
                                gt = c * ut,
                                pt = f * st,
                                dt = f * ot,
                                vt = f * ht,
                                yt = f * ut;
                            p = g;
                            for (var mt = 0; mt < c; mt++) p.r = st, p.g = ot, p.b = ht, p.a = ut, p = p.next;
                            for (var xt = i, bt = 0, St = 0, wt = 0, Tt = 0, At = 1; At <= a; At++) {
                                x = xt + at << 2;
                                var Ot = c - At;
                                pt += (p.r = st = o[x]) * Ot, dt += (p.g = ot = o[x + 1]) * Ot, vt += (p.b = ht = o[x + 2]) * Ot, yt += (p.a = ut = o[x + 3]) * Ot, Tt += st, bt += ot, St += ht, wt += ut, p = p.next, At < l && (xt += i)
                            }
                            x = at, v = g, y = s;
                            for (var Ct = 0; Ct < n; Ct++) {
                                var Pt = x << 2;
                                o[Pt + 3] = ut = yt * b >> S, ut > 0 ? (ut = 255 / ut, o[Pt] = (pt * b >> S) * ut, o[Pt + 1] = (dt * b >> S) * ut, o[Pt + 2] = (vt * b >> S) * ut) : o[Pt] = o[Pt + 1] = o[Pt + 2] = 0, pt -= lt, dt -= ct, vt -= ft, yt -= gt, lt -= v.r, ct -= v.g, ft -= v.b, gt -= v.a, Pt = at + ((Pt = Ct + c) < l ? Pt : l) * i << 2, pt += Tt += v.r = o[Pt], dt += bt += v.g = o[Pt + 1], vt += St += v.b = o[Pt + 2], yt += wt += v.a = o[Pt + 3], v = v.next, lt += st = y.r, ct += ot = y.g, ft += ht = y.b, gt += ut = y.a, Tt -= st, bt -= ot, St -= ht, wt -= ut, y = y.next, x += i
                            }
                        }
                        return t
                    }(s, 0, 0, i, n, a), t.getContext("2d").putImageData(s, e, r)
                }
            }
            var k = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
            };
            var L = Object.freeze({
                __proto__: null,
                offscreen: function() {
                    var {
                        DOMParser: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = {
                        window: null,
                        ignoreAnimation: !0,
                        ignoreMouse: !0,
                        DOMParser: t,
                        createCanvas: (t, e) => new OffscreenCanvas(t, e),
                        createImage: t => n((function*() {
                            var e = yield fetch(t), r = yield e.blob();
                            return yield createImageBitmap(r)
                        }))()
                    };
                    return "undefined" == typeof DOMParser && void 0 !== t || Reflect.deleteProperty(e, "DOMParser"), e
                },
                node: function(t) {
                    var {
                        DOMParser: e,
                        canvas: r,
                        fetch: i
                    } = t;
                    return {
                        window: null,
                        ignoreAnimation: !0,
                        ignoreMouse: !0,
                        DOMParser: e,
                        fetch: i,
                        createCanvas: r.createCanvas,
                        createImage: r.loadImage
                    }
                }
            });

            function D(t) {
                return t.replace(/(?!\u3000)\s+/gm, " ")
            }

            function j(t) {
                return t.replace(/^[\n \t]+/, "")
            }

            function B(t) {
                return t.replace(/[\n \t]+$/, "")
            }

            function F(t) {
                return ((t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []).map(parseFloat)
            }
            var z = /^[A-Z-]+$/;

            function U(t) {
                return z.test(t) ? t.toLowerCase() : t
            }

            function H(t) {
                var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t) || [];
                return e[2] || e[3] || e[4]
            }

            function X(t) {
                if (!t.startsWith("rgb")) return t;
                var e = 3;
                return t.replace(/\d+(\.\d+)?/g, ((t, r) => e-- && r ? String(Math.round(parseFloat(t))) : t))
            }
            var Y = /(\[[^\]]+\])/g,
                W = /(#[^\s+>~.[:]+)/g,
                q = /(\.[^\s+>~.[:]+)/g,
                G = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
                Q = /(:[\w-]+\([^)]*\))/gi,
                $ = /(:[^\s+>~.[:]+)/g,
                Z = /([^\s+>~.[:]+)/g;

            function K(t, e) {
                var r = e.exec(t);
                return r ? [t.replace(e, " "), r.length] : [t, 0]
            }

            function J(t) {
                var e = [0, 0, 0],
                    r = t.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
                    i = 0;
                return [r, i] = K(r, Y), e[1] += i, [r, i] = K(r, W), e[0] += i, [r, i] = K(r, q), e[1] += i, [r, i] = K(r, G), e[2] += i, [r, i] = K(r, Q), e[1] += i, [r, i] = K(r, $), e[1] += i, r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [r, i] = K(r, Z), e[2] += i, e.join("")
            }
            var tt = 1e-8;

            function et(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2))
            }

            function rt(t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (et(t) * et(e))
            }

            function it(t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(rt(t, e))
            }

            function nt(t) {
                return t * t * t
            }

            function at(t) {
                return 3 * t * t * (1 - t)
            }

            function st(t) {
                return 3 * t * (1 - t) * (1 - t)
            }

            function ot(t) {
                return (1 - t) * (1 - t) * (1 - t)
            }

            function ht(t) {
                return t * t
            }

            function ut(t) {
                return 2 * t * (1 - t)
            }

            function lt(t) {
                return (1 - t) * (1 - t)
            }
            class ct {
                constructor(t, e, r) {
                    this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1
                }
                static empty(t) {
                    return new ct(t, "EMPTY", "")
                }
                split() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
                        {
                            document: e,
                            name: r
                        } = this;
                    return D(this.getString()).trim().split(t).map((t => new ct(e, r, t)))
                }
                hasValue(t) {
                    var {
                        value: e
                    } = this;
                    return null !== e && "" !== e && (t || 0 !== e) && void 0 !== e
                }
                isString(t) {
                    var {
                        value: e
                    } = this, r = "string" == typeof e;
                    return r && t ? t.test(e) : r
                }
                isUrlDefinition() {
                    return this.isString(/^url\(/)
                }
                isPixels() {
                    if (!this.hasValue()) return !1;
                    var t = this.getString();
                    switch (!0) {
                        case t.endsWith("px"):
                        case /^[0-9]+$/.test(t):
                            return !0;
                        default:
                            return !1
                    }
                }
                setValue(t) {
                    return this.value = t, this
                }
                getValue(t) {
                    return void 0 === t || this.hasValue() ? this.value : t
                }
                getNumber(t) {
                    if (!this.hasValue()) return void 0 === t ? 0 : parseFloat(t);
                    var {
                        value: e
                    } = this, r = parseFloat(e);
                    return this.isString(/%$/) && (r /= 100), r
                }
                getString(t) {
                    return void 0 === t || this.hasValue() ? void 0 === this.value ? "" : String(this.value) : String(t)
                }
                getColor(t) {
                    var e = this.getString(t);
                    return this.isNormalizedColor || (this.isNormalizedColor = !0, e = X(e), this.value = e), e
                }
                getDpi() {
                    return 96
                }
                getRem() {
                    return this.document.rootEmSize
                }
                getEm() {
                    return this.document.emSize
                }
                getUnits() {
                    return this.getString().replace(/[0-9.-]/g, "")
                }
                getPixels(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.hasValue()) return 0;
                    var [r, i] = "boolean" == typeof t ? [void 0, t] : [t], {
                        viewPort: n
                    } = this.document.screen;
                    switch (!0) {
                        case this.isString(/vmin$/):
                            return this.getNumber() / 100 * Math.min(n.computeSize("x"), n.computeSize("y"));
                        case this.isString(/vmax$/):
                            return this.getNumber() / 100 * Math.max(n.computeSize("x"), n.computeSize("y"));
                        case this.isString(/vw$/):
                            return this.getNumber() / 100 * n.computeSize("x");
                        case this.isString(/vh$/):
                            return this.getNumber() / 100 * n.computeSize("y");
                        case this.isString(/rem$/):
                            return this.getNumber() * this.getRem();
                        case this.isString(/em$/):
                            return this.getNumber() * this.getEm();
                        case this.isString(/ex$/):
                            return this.getNumber() * this.getEm() / 2;
                        case this.isString(/px$/):
                            return this.getNumber();
                        case this.isString(/pt$/):
                            return this.getNumber() * this.getDpi() * (1 / 72);
                        case this.isString(/pc$/):
                            return 15 * this.getNumber();
                        case this.isString(/cm$/):
                            return this.getNumber() * this.getDpi() / 2.54;
                        case this.isString(/mm$/):
                            return this.getNumber() * this.getDpi() / 25.4;
                        case this.isString(/in$/):
                            return this.getNumber() * this.getDpi();
                        case this.isString(/%$/) && i:
                            return this.getNumber() * this.getEm();
                        case this.isString(/%$/):
                            return this.getNumber() * n.computeSize(r);
                        default:
                            var a = this.getNumber();
                            return e && a < 1 ? a * n.computeSize(r) : a
                    }
                }
                getMilliseconds() {
                    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber() : 0
                }
                getRadians() {
                    if (!this.hasValue()) return 0;
                    switch (!0) {
                        case this.isString(/deg$/):
                            return this.getNumber() * (Math.PI / 180);
                        case this.isString(/grad$/):
                            return this.getNumber() * (Math.PI / 200);
                        case this.isString(/rad$/):
                            return this.getNumber();
                        default:
                            return this.getNumber() * (Math.PI / 180)
                    }
                }
                getDefinition() {
                    var t = this.getString(),
                        e = /#([^)'"]+)/.exec(t);
                    return e && (e = e[1]), e || (e = t), this.document.definitions[e]
                }
                getFillStyleDefinition(t, e) {
                    var r = this.getDefinition();
                    if (!r) return null;
                    if ("function" == typeof r.createGradient) return r.createGradient(this.document.ctx, t, e);
                    if ("function" == typeof r.createPattern) {
                        if (r.getHrefAttribute().hasValue()) {
                            var i = r.getAttribute("patternTransform");
                            r = r.getHrefAttribute().getDefinition(), i.hasValue() && r.getAttribute("patternTransform", !0).setValue(i.value)
                        }
                        return r.createPattern(this.document.ctx, t, e)
                    }
                    return null
                }
                getTextBaseline() {
                    return this.hasValue() ? ct.textBaselineMapping[this.getString()] : null
                }
                addOpacity(t) {
                    for (var e = this.getColor(), r = e.length, i = 0, n = 0; n < r && ("," === e[n] && i++, 3 !== i); n++);
                    if (t.hasValue() && this.isString() && 3 !== i) {
                        var a = new u(e);
                        a.ok && (a.alpha = t.getNumber(), e = a.toRGBA())
                    }
                    return new ct(this.document, this.name, e)
                }
            }
            ct.textBaselineMapping = {
                baseline: "alphabetic",
                "before-edge": "top",
                "text-before-edge": "top",
                middle: "middle",
                central: "middle",
                "after-edge": "bottom",
                "text-after-edge": "bottom",
                ideographic: "ideographic",
                alphabetic: "alphabetic",
                hanging: "hanging",
                mathematical: "alphabetic"
            };
            class ft {
                constructor() {
                    this.viewPorts = []
                }
                clear() {
                    this.viewPorts = []
                }
                setCurrent(t, e) {
                    this.viewPorts.push({
                        width: t,
                        height: e
                    })
                }
                removeCurrent() {
                    this.viewPorts.pop()
                }
                getCurrent() {
                    var {
                        viewPorts: t
                    } = this;
                    return t[t.length - 1]
                }
                get width() {
                    return this.getCurrent().width
                }
                get height() {
                    return this.getCurrent().height
                }
                computeSize(t) {
                    return "number" == typeof t ? t : "x" === t ? this.width : "y" === t ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2)
                }
            }
            class gt {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                static parse(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        [r = e, i = e] = F(t);
                    return new gt(r, i)
                }
                static parseScale(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        [r = e, i = r] = F(t);
                    return new gt(r, i)
                }
                static parsePath(t) {
                    for (var e = F(t), r = e.length, i = [], n = 0; n < r; n += 2) i.push(new gt(e[n], e[n + 1]));
                    return i
                }
                angleTo(t) {
                    return Math.atan2(t.y - this.y, t.x - this.x)
                }
                applyTransform(t) {
                    var {
                        x: e,
                        y: r
                    } = this, i = e * t[0] + r * t[2] + t[4], n = e * t[1] + r * t[3] + t[5];
                    this.x = i, this.y = n
                }
            }
            class pt {
                constructor(t) {
                    this.screen = t, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this)
                }
                isWorking() {
                    return this.working
                }
                start() {
                    if (!this.working) {
                        var {
                            screen: t,
                            onClick: e,
                            onMouseMove: r
                        } = this, i = t.ctx.canvas;
                        i.onclick = e, i.onmousemove = r, this.working = !0
                    }
                }
                stop() {
                    if (this.working) {
                        var t = this.screen.ctx.canvas;
                        this.working = !1, t.onclick = null, t.onmousemove = null
                    }
                }
                hasEvents() {
                    return this.working && this.events.length > 0
                }
                runEvents() {
                    if (this.working) {
                        var {
                            screen: t,
                            events: e,
                            eventElements: r
                        } = this, {
                            style: i
                        } = t.ctx.canvas;
                        i && (i.cursor = ""), e.forEach(((t, e) => {
                            for (var {
                                    run: i
                                } = t, n = r[e]; n;) i(n), n = n.parent
                        })), this.events = [], this.eventElements = []
                    }
                }
                checkPath(t, e) {
                    if (this.working && e) {
                        var {
                            events: r,
                            eventElements: i
                        } = this;
                        r.forEach(((r, n) => {
                            var {
                                x: a,
                                y: s
                            } = r;
                            !i[n] && e.isPointInPath && e.isPointInPath(a, s) && (i[n] = t)
                        }))
                    }
                }
                checkBoundingBox(t, e) {
                    if (this.working && e) {
                        var {
                            events: r,
                            eventElements: i
                        } = this;
                        r.forEach(((r, n) => {
                            var {
                                x: a,
                                y: s
                            } = r;
                            !i[n] && e.isPointInBox(a, s) && (i[n] = t)
                        }))
                    }
                }
                mapXY(t, e) {
                    for (var {
                            window: r,
                            ctx: i
                        } = this.screen, n = new gt(t, e), a = i.canvas; a;) n.x -= a.offsetLeft, n.y -= a.offsetTop, a = a.offsetParent;
                    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n
                }
                onClick(t) {
                    var {
                        x: e,
                        y: r
                    } = this.mapXY(t.clientX, t.clientY);
                    this.events.push({
                        type: "onclick",
                        x: e,
                        y: r,
                        run(t) {
                            t.onClick && t.onClick()
                        }
                    })
                }
                onMouseMove(t) {
                    var {
                        x: e,
                        y: r
                    } = this.mapXY(t.clientX, t.clientY);
                    this.events.push({
                        type: "onmousemove",
                        x: e,
                        y: r,
                        run(t) {
                            t.onMouseMove && t.onMouseMove()
                        }
                    })
                }
            }
            var dt = "undefined" != typeof window ? window : null,
                vt = "undefined" != typeof fetch ? fetch.bind(void 0) : null;
            class yt {
                constructor(t) {
                    var {
                        fetch: e = vt,
                        window: r = dt
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new ft, this.mouse = new pt(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e
                }
                wait(t) {
                    this.waits.push(t)
                }
                ready() {
                    return this.readyPromise ? this.readyPromise : Promise.resolve()
                }
                isReady() {
                    if (this.isReadyLock) return !0;
                    var t = this.waits.every((t => t()));
                    return t && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = t, t
                }
                setDefaults(t) {
                    t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4
                }
                setViewBox(t) {
                    var {
                        document: e,
                        ctx: r,
                        aspectRatio: i,
                        width: n,
                        desiredWidth: a,
                        height: s,
                        desiredHeight: o,
                        minX: h = 0,
                        minY: u = 0,
                        refX: l,
                        refY: c,
                        clip: f = !1,
                        clipX: g = 0,
                        clipY: p = 0
                    } = t, d = D(i).replace(/^defer\s/, ""), [v, y] = d.split(" "), m = v || "xMidYMid", x = y || "meet", b = n / a, S = s / o, w = Math.min(b, S), T = Math.max(b, S), A = a, O = o;
                    "meet" === x && (A *= w, O *= w), "slice" === x && (A *= T, O *= T);
                    var C = new ct(e, "refX", l),
                        P = new ct(e, "refY", c),
                        E = C.hasValue() && P.hasValue();
                    if (E && r.translate(-w * C.getPixels("x"), -w * P.getPixels("y")), f) {
                        var M = w * g,
                            N = w * p;
                        r.beginPath(), r.moveTo(M, N), r.lineTo(n, N), r.lineTo(n, s), r.lineTo(M, s), r.closePath(), r.clip()
                    }
                    if (!E) {
                        var R = "meet" === x && w === S,
                            _ = "slice" === x && T === S,
                            V = "meet" === x && w === b,
                            I = "slice" === x && T === b;
                        m.startsWith("xMid") && (R || _) && r.translate(n / 2 - A / 2, 0), m.endsWith("YMid") && (V || I) && r.translate(0, s / 2 - O / 2), m.startsWith("xMax") && (R || _) && r.translate(n - A, 0), m.endsWith("YMax") && (V || I) && r.translate(0, s - O)
                    }
                    switch (!0) {
                        case "none" === m:
                            r.scale(b, S);
                            break;
                        case "meet" === x:
                            r.scale(w, w);
                            break;
                        case "slice" === x:
                            r.scale(T, T)
                    }
                    r.translate(-h, -u)
                }
                start(t) {
                    var {
                        enableRedraw: e = !1,
                        ignoreMouse: r = !1,
                        ignoreAnimation: i = !1,
                        ignoreDimensions: n = !1,
                        ignoreClear: a = !1,
                        forceRedraw: s,
                        scaleWidth: o,
                        scaleHeight: u,
                        offsetX: l,
                        offsetY: c
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        FRAMERATE: f,
                        mouse: g
                    } = this, p = 1e3 / f;
                    if (this.frameDuration = p, this.readyPromise = new Promise((t => {
                            this.resolveReady = t
                        })), this.isReady() && this.render(t, n, a, o, u, l, c), e) {
                        var d = Date.now(),
                            v = d,
                            y = 0,
                            m = () => {
                                d = Date.now(), (y = d - v) >= p && (v = d - y % p, this.shouldUpdate(i, s) && (this.render(t, n, a, o, u, l, c), g.runEvents())), this.intervalId = h(m)
                            };
                        r || g.start(), this.intervalId = h(m)
                    }
                }
                stop() {
                    this.intervalId && (h.cancel(this.intervalId), this.intervalId = null), this.mouse.stop()
                }
                shouldUpdate(t, e) {
                    if (!t) {
                        var {
                            frameDuration: r
                        } = this;
                        if (this.animations.reduce(((t, e) => e.update(r) || t), !1)) return !0
                    }
                    return !("function" != typeof e || !e()) || (!(this.isReadyLock || !this.isReady()) || !!this.mouse.hasEvents())
                }
                render(t, e, r, i, n, a, s) {
                    var {
                        CLIENT_WIDTH: o,
                        CLIENT_HEIGHT: h,
                        viewPort: u,
                        ctx: l,
                        isFirstRender: c
                    } = this, f = l.canvas;
                    u.clear(), f.width && f.height ? u.setCurrent(f.width, f.height) : u.setCurrent(o, h);
                    var g = t.getStyle("width"),
                        p = t.getStyle("height");
                    !e && (c || "number" != typeof i && "number" != typeof n) && (g.hasValue() && (f.width = g.getPixels("x"), f.style && (f.style.width = "".concat(f.width, "px"))), p.hasValue() && (f.height = p.getPixels("y"), f.style && (f.style.height = "".concat(f.height, "px"))));
                    var d = f.clientWidth || f.width,
                        v = f.clientHeight || f.height;
                    if (e && g.hasValue() && p.hasValue() && (d = g.getPixels("x"), v = p.getPixels("y")), u.setCurrent(d, v), "number" == typeof a && t.getAttribute("x", !0).setValue(a), "number" == typeof s && t.getAttribute("y", !0).setValue(s), "number" == typeof i || "number" == typeof n) {
                        var y = F(t.getAttribute("viewBox").getString()),
                            m = 0,
                            x = 0;
                        if ("number" == typeof i) {
                            var b = t.getStyle("width");
                            b.hasValue() ? m = b.getPixels("x") / i : isNaN(y[2]) || (m = y[2] / i)
                        }
                        if ("number" == typeof n) {
                            var S = t.getStyle("height");
                            S.hasValue() ? x = S.getPixels("y") / n : isNaN(y[3]) || (x = y[3] / n)
                        }
                        m || (m = x), x || (x = m), t.getAttribute("width", !0).setValue(i), t.getAttribute("height", !0).setValue(n);
                        var w = t.getStyle("transform", !0, !0);
                        w.setValue("".concat(w.getString(), " scale(").concat(1 / m, ", ").concat(1 / x, ")"))
                    }
                    r || l.clearRect(0, 0, d, v), t.render(l), c && (this.isFirstRender = !1)
                }
            }
            yt.defaultWindow = dt, yt.defaultFetch = vt;
            var {
                defaultFetch: mt
            } = yt, xt = "undefined" != typeof DOMParser ? DOMParser : null;
            class bt {
                constructor() {
                    var {
                        fetch: t = mt,
                        DOMParser: e = xt
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.fetch = t, this.DOMParser = e
                }
                parse(t) {
                    var e = this;
                    return n((function*() {
                        return t.startsWith("<") ? e.parseFromString(t) : e.load(t)
                    }))()
                }
                parseFromString(t) {
                    var e = new this.DOMParser;
                    try {
                        return this.checkDocument(e.parseFromString(t, "image/svg+xml"))
                    } catch (r) {
                        return this.checkDocument(e.parseFromString(t, "text/xml"))
                    }
                }
                checkDocument(t) {
                    var e = t.getElementsByTagName("parsererror")[0];
                    if (e) throw new Error(e.textContent);
                    return t
                }
                load(t) {
                    var e = this;
                    return n((function*() {
                        var r = yield e.fetch(t), i = yield r.text();
                        return e.parseFromString(i)
                    }))()
                }
            }
            class St {
                constructor(t, e) {
                    this.type = "translate", this.point = null, this.point = gt.parse(e)
                }
                apply(t) {
                    var {
                        x: e,
                        y: r
                    } = this.point;
                    t.translate(e || 0, r || 0)
                }
                unapply(t) {
                    var {
                        x: e,
                        y: r
                    } = this.point;
                    t.translate(-1 * e || 0, -1 * r || 0)
                }
                applyToPoint(t) {
                    var {
                        x: e,
                        y: r
                    } = this.point;
                    t.applyTransform([1, 0, 0, 1, e || 0, r || 0])
                }
            }
            class wt {
                constructor(t, e, r) {
                    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
                    var i = F(e);
                    this.angle = new ct(t, "angle", i[0]), this.originX = r[0], this.originY = r[1], this.cx = i[1] || 0, this.cy = i[2] || 0
                }
                apply(t) {
                    var {
                        cx: e,
                        cy: r,
                        originX: i,
                        originY: n,
                        angle: a
                    } = this, s = e + i.getPixels("x"), o = r + n.getPixels("y");
                    t.translate(s, o), t.rotate(a.getRadians()), t.translate(-s, -o)
                }
                unapply(t) {
                    var {
                        cx: e,
                        cy: r,
                        originX: i,
                        originY: n,
                        angle: a
                    } = this, s = e + i.getPixels("x"), o = r + n.getPixels("y");
                    t.translate(s, o), t.rotate(-1 * a.getRadians()), t.translate(-s, -o)
                }
                applyToPoint(t) {
                    var {
                        cx: e,
                        cy: r,
                        angle: i
                    } = this, n = i.getRadians();
                    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]), t.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]), t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0])
                }
            }
            class Tt {
                constructor(t, e, r) {
                    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
                    var i = gt.parseScale(e);
                    0 !== i.x && 0 !== i.y || (i.x = tt, i.y = tt), this.scale = i, this.originX = r[0], this.originY = r[1]
                }
                apply(t) {
                    var {
                        scale: {
                            x: e,
                            y: r
                        },
                        originX: i,
                        originY: n
                    } = this, a = i.getPixels("x"), s = n.getPixels("y");
                    t.translate(a, s), t.scale(e, r || e), t.translate(-a, -s)
                }
                unapply(t) {
                    var {
                        scale: {
                            x: e,
                            y: r
                        },
                        originX: i,
                        originY: n
                    } = this, a = i.getPixels("x"), s = n.getPixels("y");
                    t.translate(a, s), t.scale(1 / e, 1 / r || e), t.translate(-a, -s)
                }
                applyToPoint(t) {
                    var {
                        x: e,
                        y: r
                    } = this.scale;
                    t.applyTransform([e || 0, 0, 0, r || 0, 0, 0])
                }
            }
            class At {
                constructor(t, e, r) {
                    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = F(e), this.originX = r[0], this.originY = r[1]
                }
                apply(t) {
                    var {
                        originX: e,
                        originY: r,
                        matrix: i
                    } = this, n = e.getPixels("x"), a = r.getPixels("y");
                    t.translate(n, a), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), t.translate(-n, -a)
                }
                unapply(t) {
                    var {
                        originX: e,
                        originY: r,
                        matrix: i
                    } = this, n = i[0], a = i[2], s = i[4], o = i[1], h = i[3], u = i[5], l = 1 / (n * (1 * h - 0 * u) - a * (1 * o - 0 * u) + s * (0 * o - 0 * h)), c = e.getPixels("x"), f = r.getPixels("y");
                    t.translate(c, f), t.transform(l * (1 * h - 0 * u), l * (0 * u - 1 * o), l * (0 * s - 1 * a), l * (1 * n - 0 * s), l * (a * u - s * h), l * (s * o - n * u)), t.translate(-c, -f)
                }
                applyToPoint(t) {
                    t.applyTransform(this.matrix)
                }
            }
            class Ot extends At {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "skew", this.angle = null, this.angle = new ct(t, "angle", e)
                }
            }
            class Ct extends Ot {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]
                }
            }
            class Pt extends Ot {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]
                }
            }
            class Et {
                constructor(t, e, r) {
                    this.document = t, this.transforms = [];
                    var i = function(t) {
                        return D(t).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/)
                    }(e);
                    i.forEach((t => {
                        if ("none" !== t) {
                            var [e, i] = function(t) {
                                var [e, r] = t.split("(");
                                return [e.trim(), r.trim().replace(")", "")]
                            }(t), n = Et.transformTypes[e];
                            void 0 !== n && this.transforms.push(new n(this.document, i, r))
                        }
                    }))
                }
                static fromElement(t, e) {
                    var r = e.getStyle("transform", !1, !0),
                        [i, n = i] = e.getStyle("transform-origin", !1, !0).split(),
                        a = [i, n];
                    return r.hasValue() ? new Et(t, r.getString(), a) : null
                }
                apply(t) {
                    for (var {
                            transforms: e
                        } = this, r = e.length, i = 0; i < r; i++) e[i].apply(t)
                }
                unapply(t) {
                    for (var {
                            transforms: e
                        } = this, r = e.length - 1; r >= 0; r--) e[r].unapply(t)
                }
                applyToPoint(t) {
                    for (var {
                            transforms: e
                        } = this, r = e.length, i = 0; i < r; i++) e[i].applyToPoint(t)
                }
            }
            Et.transformTypes = {
                translate: St,
                rotate: wt,
                scale: Tt,
                matrix: At,
                skewX: Ct,
                skewY: Pt
            };
            class Mt {
                constructor(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], e && 1 === e.nodeType) {
                        if (Array.from(e.attributes).forEach((e => {
                                var r = U(e.nodeName);
                                this.attributes[r] = new ct(t, r, e.value)
                            })), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
                            var i = this.getAttribute("style").getString().split(";").map((t => t.trim()));
                            i.forEach((e => {
                                if (e) {
                                    var [r, i] = e.split(":").map((t => t.trim()));
                                    this.styles[r] = new ct(t, r, i)
                                }
                            }))
                        }
                        var {
                            definitions: n
                        } = t, a = this.getAttribute("id");
                        a.hasValue() && (n[a.getString()] || (n[a.getString()] = this)), Array.from(e.childNodes).forEach((e => {
                            if (1 === e.nodeType) this.addChild(e);
                            else if (r && (3 === e.nodeType || 4 === e.nodeType)) {
                                var i = t.createTextNode(e);
                                i.getText().length > 0 && this.addChild(i)
                            }
                        }))
                    }
                }
                getAttribute(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this.attributes[t];
                    if (!r && e) {
                        var i = new ct(this.document, t, "");
                        return this.attributes[t] = i, i
                    }
                    return r || ct.empty(this.document)
                }
                getHrefAttribute() {
                    for (var t in this.attributes)
                        if ("href" === t || t.endsWith(":href")) return this.attributes[t];
                    return ct.empty(this.document)
                }
                getStyle(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = this.styles[t];
                    if (i) return i;
                    var n = this.getAttribute(t);
                    if (null != n && n.hasValue()) return this.styles[t] = n, n;
                    if (!r) {
                        var {
                            parent: a
                        } = this;
                        if (a) {
                            var s = a.getStyle(t);
                            if (null != s && s.hasValue()) return s
                        }
                    }
                    if (e) {
                        var o = new ct(this.document, t, "");
                        return this.styles[t] = o, o
                    }
                    return i || ct.empty(this.document)
                }
                render(t) {
                    if ("none" !== this.getStyle("display").getString() && "hidden" !== this.getStyle("visibility").getString()) {
                        if (t.save(), this.getStyle("mask").hasValue()) {
                            var e = this.getStyle("mask").getDefinition();
                            e && (this.applyEffects(t), e.apply(t, this))
                        } else if ("none" !== this.getStyle("filter").getValue("none")) {
                            var r = this.getStyle("filter").getDefinition();
                            r && (this.applyEffects(t), r.apply(t, this))
                        } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
                        t.restore()
                    }
                }
                setContext(t) {}
                applyEffects(t) {
                    var e = Et.fromElement(this.document, this);
                    e && e.apply(t);
                    var r = this.getStyle("clip-path", !1, !0);
                    if (r.hasValue()) {
                        var i = r.getDefinition();
                        i && i.apply(t)
                    }
                }
                clearContext(t) {}
                renderChildren(t) {
                    this.children.forEach((e => {
                        e.render(t)
                    }))
                }
                addChild(t) {
                    var e = t instanceof Mt ? t : this.document.createElement(t);
                    e.parent = this, Mt.ignoreChildTypes.includes(e.type) || this.children.push(e)
                }
                matchesSelector(t) {
                    var e, {
                        node: r
                    } = this;
                    if ("function" == typeof r.matches) return r.matches(t);
                    var i = null === (e = r.getAttribute) || void 0 === e ? void 0 : e.call(r, "class");
                    return !(!i || "" === i) && i.split(" ").some((e => ".".concat(e) === t))
                }
                addStylesFromStyleDefinition() {
                    var {
                        styles: t,
                        stylesSpecificity: e
                    } = this.document;
                    for (var r in t)
                        if (!r.startsWith("@") && this.matchesSelector(r)) {
                            var i = t[r],
                                n = e[r];
                            if (i)
                                for (var a in i) {
                                    var s = this.stylesSpecificity[a];
                                    void 0 === s && (s = "000"), n >= s && (this.styles[a] = i[a], this.stylesSpecificity[a] = n)
                                }
                        }
                }
                removeStyles(t, e) {
                    return e.reduce(((e, r) => {
                        var i = t.getStyle(r);
                        if (!i.hasValue()) return e;
                        var n = i.getString();
                        return i.setValue(""), [...e, [r, n]]
                    }), [])
                }
                restoreStyles(t, e) {
                    e.forEach((e => {
                        var [r, i] = e;
                        t.getStyle(r, !0).setValue(i)
                    }))
                }
                isFirstChild() {
                    var t;
                    return 0 === (null === (t = this.parent) || void 0 === t ? void 0 : t.children.indexOf(this))
                }
            }
            Mt.ignoreChildTypes = ["title"];
            class Nt extends Mt {
                constructor(t, e, r) {
                    super(t, e, r)
                }
            }

            function Rt(t) {
                var e = t.trim();
                return /^('|")/.test(e) ? e : '"'.concat(e, '"')
            }

            function _t(t) {
                if (!t) return "";
                var e = t.trim().toLowerCase();
                switch (e) {
                    case "normal":
                    case "italic":
                    case "oblique":
                    case "inherit":
                    case "initial":
                    case "unset":
                        return e;
                    default:
                        return /^oblique\s+(-|)\d+deg$/.test(e) ? e : ""
                }
            }

            function Vt(t) {
                if (!t) return "";
                var e = t.trim().toLowerCase();
                switch (e) {
                    case "normal":
                    case "bold":
                    case "lighter":
                    case "bolder":
                    case "inherit":
                    case "initial":
                    case "unset":
                        return e;
                    default:
                        return /^[\d.]+$/.test(e) ? e : ""
                }
            }
            class It {
                constructor(t, e, r, i, n, a) {
                    var s = a ? "string" == typeof a ? It.parse(a) : a : {};
                    this.fontFamily = n || s.fontFamily, this.fontSize = i || s.fontSize, this.fontStyle = t || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = e || s.fontVariant
                }
                static parse() {
                    var t = arguments.length > 1 ? arguments[1] : void 0,
                        e = "",
                        r = "",
                        i = "",
                        n = "",
                        a = "",
                        s = D(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().split(" "),
                        o = {
                            fontSize: !1,
                            fontStyle: !1,
                            fontWeight: !1,
                            fontVariant: !1
                        };
                    return s.forEach((t => {
                        switch (!0) {
                            case !o.fontStyle && It.styles.includes(t):
                                "inherit" !== t && (e = t), o.fontStyle = !0;
                                break;
                            case !o.fontVariant && It.variants.includes(t):
                                "inherit" !== t && (r = t), o.fontStyle = !0, o.fontVariant = !0;
                                break;
                            case !o.fontWeight && It.weights.includes(t):
                                "inherit" !== t && (i = t), o.fontStyle = !0, o.fontVariant = !0, o.fontWeight = !0;
                                break;
                            case !o.fontSize:
                                "inherit" !== t && ([n] = t.split("/")), o.fontStyle = !0, o.fontVariant = !0, o.fontWeight = !0, o.fontSize = !0;
                                break;
                            default:
                                "inherit" !== t && (a += t)
                        }
                    })), new It(e, r, i, n, a, t)
                }
                toString() {
                    return [_t(this.fontStyle), this.fontVariant, Vt(this.fontWeight), this.fontSize, (t = this.fontFamily, "undefined" == typeof process ? t : t.trim().split(",").map(Rt).join(","))].join(" ").trim();
                    var t
                }
            }
            It.styles = "normal|italic|oblique|inherit", It.variants = "normal|small-caps|inherit", It.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
            class kt {
                constructor() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
                    this.x1 = t, this.y1 = e, this.x2 = r, this.y2 = i, this.addPoint(t, e), this.addPoint(r, i)
                }
                get x() {
                    return this.x1
                }
                get y() {
                    return this.y1
                }
                get width() {
                    return this.x2 - this.x1
                }
                get height() {
                    return this.y2 - this.y1
                }
                addPoint(t, e) {
                    void 0 !== t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), void 0 !== e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e))
                }
                addX(t) {
                    this.addPoint(t, null)
                }
                addY(t) {
                    this.addPoint(null, t)
                }
                addBoundingBox(t) {
                    if (t) {
                        var {
                            x1: e,
                            y1: r,
                            x2: i,
                            y2: n
                        } = t;
                        this.addPoint(e, r), this.addPoint(i, n)
                    }
                }
                sumCubic(t, e, r, i, n) {
                    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * i + Math.pow(t, 3) * n
                }
                bezierCurveAdd(t, e, r, i, n) {
                    var a = 6 * e - 12 * r + 6 * i,
                        s = -3 * e + 9 * r - 9 * i + 3 * n,
                        o = 3 * r - 3 * e;
                    if (0 !== s) {
                        var h = Math.pow(a, 2) - 4 * o * s;
                        if (!(h < 0)) {
                            var u = (-a + Math.sqrt(h)) / (2 * s);
                            0 < u && u < 1 && (t ? this.addX(this.sumCubic(u, e, r, i, n)) : this.addY(this.sumCubic(u, e, r, i, n)));
                            var l = (-a - Math.sqrt(h)) / (2 * s);
                            0 < l && l < 1 && (t ? this.addX(this.sumCubic(l, e, r, i, n)) : this.addY(this.sumCubic(l, e, r, i, n)))
                        }
                    } else {
                        if (0 === a) return;
                        var c = -o / a;
                        0 < c && c < 1 && (t ? this.addX(this.sumCubic(c, e, r, i, n)) : this.addY(this.sumCubic(c, e, r, i, n)))
                    }
                }
                addBezierCurve(t, e, r, i, n, a, s, o) {
                    this.addPoint(t, e), this.addPoint(s, o), this.bezierCurveAdd(!0, t, r, n, s), this.bezierCurveAdd(!1, e, i, a, o)
                }
                addQuadraticCurve(t, e, r, i, n, a) {
                    var s = t + 2 / 3 * (r - t),
                        o = e + 2 / 3 * (i - e),
                        h = s + 1 / 3 * (n - t),
                        u = o + 1 / 3 * (a - e);
                    this.addBezierCurve(t, e, s, h, o, u, n, a)
                }
                isPointInBox(t, e) {
                    var {
                        x1: r,
                        y1: i,
                        x2: n,
                        y2: a
                    } = this;
                    return r <= t && t <= n && i <= e && e <= a
                }
            }
            class Lt extends E {
                constructor(t) {
                    super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = []
                }
                reset() {
                    this.i = -1, this.command = null, this.previousCommand = null, this.start = new gt(0, 0), this.control = new gt(0, 0), this.current = new gt(0, 0), this.points = [], this.angles = []
                }
                isEnd() {
                    var {
                        i: t,
                        commands: e
                    } = this;
                    return t >= e.length - 1
                }
                next() {
                    var t = this.commands[++this.i];
                    return this.previousCommand = this.command, this.command = t, t
                }
                getPoint() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                        r = new gt(this.command[t], this.command[e]);
                    return this.makeAbsolute(r)
                }
                getAsControlPoint(t, e) {
                    var r = this.getPoint(t, e);
                    return this.control = r, r
                }
                getAsCurrentPoint(t, e) {
                    var r = this.getPoint(t, e);
                    return this.current = r, r
                }
                getReflectedControlPoint() {
                    var t = this.previousCommand.type;
                    if (t !== E.CURVE_TO && t !== E.SMOOTH_CURVE_TO && t !== E.QUAD_TO && t !== E.SMOOTH_QUAD_TO) return this.current;
                    var {
                        current: {
                            x: e,
                            y: r
                        },
                        control: {
                            x: i,
                            y: n
                        }
                    } = this;
                    return new gt(2 * e - i, 2 * r - n)
                }
                makeAbsolute(t) {
                    if (this.command.relative) {
                        var {
                            x: e,
                            y: r
                        } = this.current;
                        t.x += e, t.y += r
                    }
                    return t
                }
                addMarker(t, e, r) {
                    var {
                        points: i,
                        angles: n
                    } = this;
                    r && n.length > 0 && !n[n.length - 1] && (n[n.length - 1] = i[i.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null)
                }
                addMarkerAngle(t, e) {
                    this.points.push(t), this.angles.push(e)
                }
                getMarkerPoints() {
                    return this.points
                }
                getMarkerAngles() {
                    for (var {
                            angles: t
                        } = this, e = t.length, r = 0; r < e; r++)
                        if (!t[r])
                            for (var i = r + 1; i < e; i++)
                                if (t[i]) {
                                    t[r] = t[i];
                                    break
                                } return t
                }
            }
            class Dt extends Mt {
                constructor() {
                    super(...arguments), this.modifiedEmSizeStack = !1
                }
                calculateOpacity() {
                    for (var t = 1, e = this; e;) {
                        var r = e.getStyle("opacity", !1, !0);
                        r.hasValue(!0) && (t *= r.getNumber()), e = e.parent
                    }
                    return t
                }
                setContext(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) {
                        var r = this.getStyle("fill"),
                            i = this.getStyle("fill-opacity"),
                            n = this.getStyle("stroke"),
                            a = this.getStyle("stroke-opacity");
                        if (r.isUrlDefinition()) {
                            var s = r.getFillStyleDefinition(this, i);
                            s && (t.fillStyle = s)
                        } else if (r.hasValue()) {
                            "currentColor" === r.getString() && r.setValue(this.getStyle("color").getColor());
                            var o = r.getColor();
                            "inherit" !== o && (t.fillStyle = "none" === o ? "rgba(0,0,0,0)" : o)
                        }
                        if (i.hasValue()) {
                            var h = new ct(this.document, "fill", t.fillStyle).addOpacity(i).getColor();
                            t.fillStyle = h
                        }
                        if (n.isUrlDefinition()) {
                            var u = n.getFillStyleDefinition(this, a);
                            u && (t.strokeStyle = u)
                        } else if (n.hasValue()) {
                            "currentColor" === n.getString() && n.setValue(this.getStyle("color").getColor());
                            var l = n.getString();
                            "inherit" !== l && (t.strokeStyle = "none" === l ? "rgba(0,0,0,0)" : l)
                        }
                        if (a.hasValue()) {
                            var c = new ct(this.document, "stroke", t.strokeStyle).addOpacity(a).getString();
                            t.strokeStyle = c
                        }
                        var f = this.getStyle("stroke-width");
                        if (f.hasValue()) {
                            var g = f.getPixels();
                            t.lineWidth = g || tt
                        }
                        var p = this.getStyle("stroke-linecap"),
                            d = this.getStyle("stroke-linejoin"),
                            v = this.getStyle("stroke-miterlimit"),
                            y = this.getStyle("stroke-dasharray"),
                            m = this.getStyle("stroke-dashoffset");
                        if (p.hasValue() && (t.lineCap = p.getString()), d.hasValue() && (t.lineJoin = d.getString()), v.hasValue() && (t.miterLimit = v.getNumber()), y.hasValue() && "none" !== y.getString()) {
                            var x = F(y.getString());
                            void 0 !== t.setLineDash ? t.setLineDash(x) : void 0 !== t.webkitLineDash ? t.webkitLineDash = x : void 0 === t.mozDash || 1 === x.length && 0 === x[0] || (t.mozDash = x);
                            var b = m.getPixels();
                            void 0 !== t.lineDashOffset ? t.lineDashOffset = b : void 0 !== t.webkitLineDashOffset ? t.webkitLineDashOffset = b : void 0 !== t.mozDashOffset && (t.mozDashOffset = b)
                        }
                    }
                    if (this.modifiedEmSizeStack = !1, void 0 !== t.font) {
                        var S = this.getStyle("font"),
                            w = this.getStyle("font-style"),
                            T = this.getStyle("font-variant"),
                            A = this.getStyle("font-weight"),
                            O = this.getStyle("font-size"),
                            C = this.getStyle("font-family"),
                            P = new It(w.getString(), T.getString(), A.getString(), O.hasValue() ? "".concat(O.getPixels(!0), "px") : "", C.getString(), It.parse(S.getString(), t.font));
                        w.setValue(P.fontStyle), T.setValue(P.fontVariant), A.setValue(P.fontWeight), O.setValue(P.fontSize), C.setValue(P.fontFamily), t.font = P.toString(), O.isPixels() && (this.document.emSize = O.getPixels(), this.modifiedEmSizeStack = !0)
                    }
                    e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity())
                }
                clearContext(t) {
                    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize()
                }
            }
            class jt extends Dt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new Lt(this.getAttribute("d").getString())
                }
                path(t) {
                    var {
                        pathParser: e
                    } = this, r = new kt;
                    for (e.reset(), t && t.beginPath(); !e.isEnd();) switch (e.next().type) {
                        case Lt.MOVE_TO:
                            this.pathM(t, r);
                            break;
                        case Lt.LINE_TO:
                            this.pathL(t, r);
                            break;
                        case Lt.HORIZ_LINE_TO:
                            this.pathH(t, r);
                            break;
                        case Lt.VERT_LINE_TO:
                            this.pathV(t, r);
                            break;
                        case Lt.CURVE_TO:
                            this.pathC(t, r);
                            break;
                        case Lt.SMOOTH_CURVE_TO:
                            this.pathS(t, r);
                            break;
                        case Lt.QUAD_TO:
                            this.pathQ(t, r);
                            break;
                        case Lt.SMOOTH_QUAD_TO:
                            this.pathT(t, r);
                            break;
                        case Lt.ARC:
                            this.pathA(t, r);
                            break;
                        case Lt.CLOSE_PATH:
                            this.pathZ(t, r)
                    }
                    return r
                }
                getBoundingBox(t) {
                    return this.path()
                }
                getMarkers() {
                    var {
                        pathParser: t
                    } = this, e = t.getMarkerPoints(), r = t.getMarkerAngles(), i = e.map(((t, e) => [t, r[e]]));
                    return i
                }
                renderChildren(t) {
                    this.path(t), this.document.screen.mouse.checkPath(this, t);
                    var e = this.getStyle("fill-rule");
                    "" !== t.fillStyle && ("inherit" !== e.getString("inherit") ? t.fill(e.getString()) : t.fill()), "" !== t.strokeStyle && ("non-scaling-stroke" === this.getAttribute("vector-effect").getString() ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore()) : t.stroke());
                    var r = this.getMarkers();
                    if (r) {
                        var i = r.length - 1,
                            n = this.getStyle("marker-start"),
                            a = this.getStyle("marker-mid"),
                            s = this.getStyle("marker-end");
                        if (n.isUrlDefinition()) {
                            var o = n.getDefinition(),
                                [h, u] = r[0];
                            o.render(t, h, u)
                        }
                        if (a.isUrlDefinition())
                            for (var l = a.getDefinition(), c = 1; c < i; c++) {
                                var [f, g] = r[c];
                                l.render(t, f, g)
                            }
                        if (s.isUrlDefinition()) {
                            var p = s.getDefinition(),
                                [d, v] = r[i];
                            p.render(t, d, v)
                        }
                    }
                }
                static pathM(t) {
                    var e = t.getAsCurrentPoint();
                    return t.start = t.current, {
                        point: e
                    }
                }
                pathM(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        point: i
                    } = jt.pathM(r), {
                        x: n,
                        y: a
                    } = i;
                    r.addMarker(i), e.addPoint(n, a), t && t.moveTo(n, a)
                }
                static pathL(t) {
                    var {
                        current: e
                    } = t;
                    return {
                        current: e,
                        point: t.getAsCurrentPoint()
                    }
                }
                pathL(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        point: n
                    } = jt.pathL(r), {
                        x: a,
                        y: s
                    } = n;
                    r.addMarker(n, i), e.addPoint(a, s), t && t.lineTo(a, s)
                }
                static pathH(t) {
                    var {
                        current: e,
                        command: r
                    } = t, i = new gt((r.relative ? e.x : 0) + r.x, e.y);
                    return t.current = i, {
                        current: e,
                        point: i
                    }
                }
                pathH(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        point: n
                    } = jt.pathH(r), {
                        x: a,
                        y: s
                    } = n;
                    r.addMarker(n, i), e.addPoint(a, s), t && t.lineTo(a, s)
                }
                static pathV(t) {
                    var {
                        current: e,
                        command: r
                    } = t, i = new gt(e.x, (r.relative ? e.y : 0) + r.y);
                    return t.current = i, {
                        current: e,
                        point: i
                    }
                }
                pathV(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        point: n
                    } = jt.pathV(r), {
                        x: a,
                        y: s
                    } = n;
                    r.addMarker(n, i), e.addPoint(a, s), t && t.lineTo(a, s)
                }
                static pathC(t) {
                    var {
                        current: e
                    } = t;
                    return {
                        current: e,
                        point: t.getPoint("x1", "y1"),
                        controlPoint: t.getAsControlPoint("x2", "y2"),
                        currentPoint: t.getAsCurrentPoint()
                    }
                }
                pathC(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        point: n,
                        controlPoint: a,
                        currentPoint: s
                    } = jt.pathC(r);
                    r.addMarker(s, a, n), e.addBezierCurve(i.x, i.y, n.x, n.y, a.x, a.y, s.x, s.y), t && t.bezierCurveTo(n.x, n.y, a.x, a.y, s.x, s.y)
                }
                static pathS(t) {
                    var {
                        current: e
                    } = t;
                    return {
                        current: e,
                        point: t.getReflectedControlPoint(),
                        controlPoint: t.getAsControlPoint("x2", "y2"),
                        currentPoint: t.getAsCurrentPoint()
                    }
                }
                pathS(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        point: n,
                        controlPoint: a,
                        currentPoint: s
                    } = jt.pathS(r);
                    r.addMarker(s, a, n), e.addBezierCurve(i.x, i.y, n.x, n.y, a.x, a.y, s.x, s.y), t && t.bezierCurveTo(n.x, n.y, a.x, a.y, s.x, s.y)
                }
                static pathQ(t) {
                    var {
                        current: e
                    } = t;
                    return {
                        current: e,
                        controlPoint: t.getAsControlPoint("x1", "y1"),
                        currentPoint: t.getAsCurrentPoint()
                    }
                }
                pathQ(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        controlPoint: n,
                        currentPoint: a
                    } = jt.pathQ(r);
                    r.addMarker(a, n, n), e.addQuadraticCurve(i.x, i.y, n.x, n.y, a.x, a.y), t && t.quadraticCurveTo(n.x, n.y, a.x, a.y)
                }
                static pathT(t) {
                    var {
                        current: e
                    } = t, r = t.getReflectedControlPoint();
                    return t.control = r, {
                        current: e,
                        controlPoint: r,
                        currentPoint: t.getAsCurrentPoint()
                    }
                }
                pathT(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        current: i,
                        controlPoint: n,
                        currentPoint: a
                    } = jt.pathT(r);
                    r.addMarker(a, n, n), e.addQuadraticCurve(i.x, i.y, n.x, n.y, a.x, a.y), t && t.quadraticCurveTo(n.x, n.y, a.x, a.y)
                }
                static pathA(t) {
                    var {
                        current: e,
                        command: r
                    } = t, {
                        rX: i,
                        rY: n,
                        xRot: a,
                        lArcFlag: s,
                        sweepFlag: o
                    } = r, h = a * (Math.PI / 180), u = t.getAsCurrentPoint(), l = new gt(Math.cos(h) * (e.x - u.x) / 2 + Math.sin(h) * (e.y - u.y) / 2, -Math.sin(h) * (e.x - u.x) / 2 + Math.cos(h) * (e.y - u.y) / 2), c = Math.pow(l.x, 2) / Math.pow(i, 2) + Math.pow(l.y, 2) / Math.pow(n, 2);
                    c > 1 && (i *= Math.sqrt(c), n *= Math.sqrt(c));
                    var f = (s === o ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(n, 2) - Math.pow(i, 2) * Math.pow(l.y, 2) - Math.pow(n, 2) * Math.pow(l.x, 2)) / (Math.pow(i, 2) * Math.pow(l.y, 2) + Math.pow(n, 2) * Math.pow(l.x, 2)));
                    isNaN(f) && (f = 0);
                    var g = new gt(f * i * l.y / n, f * -n * l.x / i),
                        p = new gt((e.x + u.x) / 2 + Math.cos(h) * g.x - Math.sin(h) * g.y, (e.y + u.y) / 2 + Math.sin(h) * g.x + Math.cos(h) * g.y),
                        d = it([1, 0], [(l.x - g.x) / i, (l.y - g.y) / n]),
                        v = [(l.x - g.x) / i, (l.y - g.y) / n],
                        y = [(-l.x - g.x) / i, (-l.y - g.y) / n],
                        m = it(v, y);
                    return rt(v, y) <= -1 && (m = Math.PI), rt(v, y) >= 1 && (m = 0), {
                        currentPoint: u,
                        rX: i,
                        rY: n,
                        sweepFlag: o,
                        xAxisRotation: h,
                        centp: p,
                        a1: d,
                        ad: m
                    }
                }
                pathA(t, e) {
                    var {
                        pathParser: r
                    } = this, {
                        currentPoint: i,
                        rX: n,
                        rY: a,
                        sweepFlag: s,
                        xAxisRotation: o,
                        centp: h,
                        a1: u,
                        ad: l
                    } = jt.pathA(r), c = 1 - s ? 1 : -1, f = u + c * (l / 2), g = new gt(h.x + n * Math.cos(f), h.y + a * Math.sin(f));
                    if (r.addMarkerAngle(g, f - c * Math.PI / 2), r.addMarkerAngle(i, f - c * Math.PI), e.addPoint(i.x, i.y), t && !isNaN(u) && !isNaN(l)) {
                        var p = n > a ? n : a,
                            d = n > a ? 1 : n / a,
                            v = n > a ? a / n : 1;
                        t.translate(h.x, h.y), t.rotate(o), t.scale(d, v), t.arc(0, 0, p, u, u + l, Boolean(1 - s)), t.scale(1 / d, 1 / v), t.rotate(-o), t.translate(-h.x, -h.y)
                    }
                }
                static pathZ(t) {
                    t.current = t.start
                }
                pathZ(t, e) {
                    jt.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath()
                }
            }
            class Bt extends jt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString()
                }
            }
            class Ft extends Dt {
                constructor(t, e, r) {
                    super(t, e, new.target === Ft || r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1
                }
                setContext(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    super.setContext(t, e);
                    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
                    r && (t.textBaseline = r)
                }
                initializeCoordinates() {
                    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY
                }
                getBoundingBox(t) {
                    if ("text" !== this.type) return this.getTElementBoundingBox(t);
                    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
                    var e = null;
                    return this.children.forEach(((r, i) => {
                        var n = this.getChildBoundingBox(t, this, this, i);
                        e ? e.addBoundingBox(n) : e = n
                    })), e
                }
                getFontSize() {
                    var {
                        document: t,
                        parent: e
                    } = this, r = It.parse(t.ctx.font).fontSize;
                    return e.getStyle("font-size").getNumber(r)
                }
                getTElementBoundingBox(t) {
                    var e = this.getFontSize();
                    return new kt(this.x, this.y - e, this.x + this.measureText(t), this.y)
                }
                getGlyph(t, e, r) {
                    var i = e[r],
                        n = null;
                    if (t.isArabic) {
                        var a = e.length,
                            s = e[r - 1],
                            o = e[r + 1],
                            h = "isolated";
                        if ((0 === r || " " === s) && r < a - 1 && " " !== o && (h = "terminal"), r > 0 && " " !== s && r < a - 1 && " " !== o && (h = "medial"), r > 0 && " " !== s && (r === a - 1 || " " === o) && (h = "initial"), void 0 !== t.glyphs[i]) {
                            var u = t.glyphs[i];
                            n = u instanceof Bt ? u : u[h]
                        }
                    } else n = t.glyphs[i];
                    return n || (n = t.missingGlyph), n
                }
                getText() {
                    return ""
                }
                getTextFromNode(t) {
                    var e = t || this.node,
                        r = Array.from(e.parentNode.childNodes),
                        i = r.indexOf(e),
                        n = r.length - 1,
                        a = D(e.textContent || "");
                    return 0 === i && (a = j(a)), i === n && (a = B(a)), a
                }
                renderChildren(t) {
                    if ("text" === this.type) {
                        this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t), this.children.forEach(((e, r) => {
                            this.renderChild(t, this, this, r)
                        }));
                        var {
                            mouse: e
                        } = this.document.screen;
                        e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t))
                    } else this.renderTElementChildren(t)
                }
                renderTElementChildren(t) {
                    var {
                        document: e,
                        parent: r
                    } = this, i = this.getText(), n = r.getStyle("font-family").getDefinition();
                    if (n)
                        for (var {
                                unitsPerEm: a
                            } = n.fontFace, s = It.parse(e.ctx.font), o = r.getStyle("font-size").getNumber(s.fontSize), h = r.getStyle("font-style").getString(s.fontStyle), u = o / a, l = n.isRTL ? i.split("").reverse().join("") : i, c = F(r.getAttribute("dx").getString()), f = l.length, g = 0; g < f; g++) {
                            var p = this.getGlyph(n, l, g);
                            t.translate(this.x, this.y), t.scale(u, -u);
                            var d = t.lineWidth;
                            t.lineWidth = t.lineWidth * a / o, "italic" === h && t.transform(1, 0, .4, 1, 0, 0), p.render(t), "italic" === h && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = d, t.scale(1 / u, -1 / u), t.translate(-this.x, -this.y), this.x += o * (p.horizAdvX || n.horizAdvX) / a, void 0 === c[g] || isNaN(c[g]) || (this.x += c[g])
                        } else {
                            var {
                                x: v,
                                y
                            } = this;
                            t.fillStyle && t.fillText(i, v, y), t.strokeStyle && t.strokeText(i, v, y)
                        }
                }
                applyAnchoring() {
                    if (!(this.textChunkStart >= this.leafTexts.length)) {
                        var t = this.leafTexts[this.textChunkStart],
                            e = t.getStyle("text-anchor").getString("start"),
                            r = 0;
                        r = "start" === e ? t.x - this.minX : "end" === e ? t.x - this.maxX : t.x - (this.minX + this.maxX) / 2;
                        for (var i = this.textChunkStart; i < this.leafTexts.length; i++) this.leafTexts[i].x += r;
                        this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length
                    }
                }
                adjustChildCoordinatesRecursive(t) {
                    this.children.forEach(((e, r) => {
                        this.adjustChildCoordinatesRecursiveCore(t, this, this, r)
                    })), this.applyAnchoring()
                }
                adjustChildCoordinatesRecursiveCore(t, e, r, i) {
                    var n = r.children[i];
                    n.children.length > 0 ? n.children.forEach(((r, i) => {
                        e.adjustChildCoordinatesRecursiveCore(t, e, n, i)
                    })) : this.adjustChildCoordinates(t, e, r, i)
                }
                adjustChildCoordinates(t, e, r, i) {
                    var n = r.children[i];
                    if ("function" != typeof n.measureText) return n;
                    t.save(), n.setContext(t, !0);
                    var a = n.getAttribute("x"),
                        s = n.getAttribute("y"),
                        o = n.getAttribute("dx"),
                        h = n.getAttribute("dy"),
                        u = n.getStyle("font-family").getDefinition(),
                        l = Boolean(u) && u.isRTL;
                    0 === i && (a.hasValue() || a.setValue(n.getInheritedAttribute("x")), s.hasValue() || s.setValue(n.getInheritedAttribute("y")), o.hasValue() || o.setValue(n.getInheritedAttribute("dx")), h.hasValue() || h.setValue(n.getInheritedAttribute("dy")));
                    var c = n.measureText(t);
                    return l && (e.x -= c), a.hasValue() ? (e.applyAnchoring(), n.x = a.getPixels("x"), o.hasValue() && (n.x += o.getPixels("x"))) : (o.hasValue() && (e.x += o.getPixels("x")), n.x = e.x), e.x = n.x, l || (e.x += c), s.hasValue() ? (n.y = s.getPixels("y"), h.hasValue() && (n.y += h.getPixels("y"))) : (h.hasValue() && (e.y += h.getPixels("y")), n.y = e.y), e.y = n.y, e.leafTexts.push(n), e.minX = Math.min(e.minX, n.x, n.x + c), e.maxX = Math.max(e.maxX, n.x, n.x + c), n.clearContext(t), t.restore(), n
                }
                getChildBoundingBox(t, e, r, i) {
                    var n = r.children[i];
                    if ("function" != typeof n.getBoundingBox) return null;
                    var a = n.getBoundingBox(t);
                    return a ? (n.children.forEach(((r, i) => {
                        var s = e.getChildBoundingBox(t, e, n, i);
                        a.addBoundingBox(s)
                    })), a) : null
                }
                renderChild(t, e, r, i) {
                    var n = r.children[i];
                    n.render(t), n.children.forEach(((r, i) => {
                        e.renderChild(t, e, n, i)
                    }))
                }
                measureText(t) {
                    var {
                        measureCache: e
                    } = this;
                    if (~e) return e;
                    var r = this.getText(),
                        i = this.measureTargetText(t, r);
                    return this.measureCache = i, i
                }
                measureTargetText(t, e) {
                    if (!e.length) return 0;
                    var {
                        parent: r
                    } = this, i = r.getStyle("font-family").getDefinition();
                    if (i) {
                        for (var n = this.getFontSize(), a = i.isRTL ? e.split("").reverse().join("") : e, s = F(r.getAttribute("dx").getString()), o = a.length, h = 0, u = 0; u < o; u++) {
                            h += (this.getGlyph(i, a, u).horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, void 0 === s[u] || isNaN(s[u]) || (h += s[u])
                        }
                        return h
                    }
                    if (!t.measureText) return 10 * e.length;
                    t.save(), this.setContext(t, !0);
                    var {
                        width: l
                    } = t.measureText(e);
                    return this.clearContext(t), t.restore(), l
                }
                getInheritedAttribute(t) {
                    for (var e = this; e instanceof Ft && e.isFirstChild();) {
                        var r = e.parent.getAttribute(t);
                        if (r.hasValue(!0)) return r.getValue("0");
                        e = e.parent
                    }
                    return null
                }
            }
            class zt extends Ft {
                constructor(t, e, r) {
                    super(t, e, new.target === zt || r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode()
                }
                getText() {
                    return this.text
                }
            }
            class Ut extends zt {
                constructor() {
                    super(...arguments), this.type = "textNode"
                }
            }
            class Ht extends Dt {
                constructor() {
                    super(...arguments), this.type = "svg", this.root = !1
                }
                setContext(t) {
                    var e, {
                            document: r
                        } = this,
                        {
                            screen: i,
                            window: n
                        } = r,
                        a = t.canvas;
                    if (i.setDefaults(t), a.style && void 0 !== t.font && n && void 0 !== n.getComputedStyle) {
                        t.font = n.getComputedStyle(a).getPropertyValue("font");
                        var s = new ct(r, "fontSize", It.parse(t.font).fontSize);
                        s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize)
                    }
                    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
                    var {
                        width: o,
                        height: h
                    } = i.viewPort;
                    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
                    var u = this.getAttribute("refX"),
                        l = this.getAttribute("refY"),
                        c = this.getAttribute("viewBox"),
                        f = c.hasValue() ? F(c.getString()) : null,
                        g = !this.root && "visible" !== this.getStyle("overflow").getValue("hidden"),
                        p = 0,
                        d = 0,
                        v = 0,
                        y = 0;
                    f && (p = f[0], d = f[1]), this.root || (o = this.getStyle("width").getPixels("x"), h = this.getStyle("height").getPixels("y"), "marker" === this.type && (v = p, y = d, p = 0, d = 0)), i.viewPort.setCurrent(o, h), !this.node || this.parent && "foreignObject" !== (null === (e = this.node.parentNode) || void 0 === e ? void 0 : e.nodeName) || !this.getStyle("transform", !1, !0).hasValue() || this.getStyle("transform-origin", !1, !0).hasValue() || this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), f && (o = f[2], h = f[3]), r.setViewBox({
                        ctx: t,
                        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                        width: i.viewPort.width,
                        desiredWidth: o,
                        height: i.viewPort.height,
                        desiredHeight: h,
                        minX: p,
                        minY: d,
                        refX: u.getValue(),
                        refY: l.getValue(),
                        clip: g,
                        clipX: v,
                        clipY: y
                    }), f && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(o, h))
                }
                clearContext(t) {
                    super.clearContext(t), this.document.screen.viewPort.removeCurrent()
                }
                resize(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = this.getAttribute("width", !0),
                        n = this.getAttribute("height", !0),
                        a = this.getAttribute("viewBox"),
                        s = this.getAttribute("style"),
                        o = i.getNumber(0),
                        h = n.getNumber(0);
                    if (r)
                        if ("string" == typeof r) this.getAttribute("preserveAspectRatio", !0).setValue(r);
                        else {
                            var u = this.getAttribute("preserveAspectRatio");
                            u.hasValue() && u.setValue(u.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"))
                        } if (i.setValue(t), n.setValue(e), a.hasValue() || a.setValue("0 0 ".concat(o || t, " ").concat(h || e)), s.hasValue()) {
                        var l = this.getStyle("width"),
                            c = this.getStyle("height");
                        l.hasValue() && l.setValue("".concat(t, "px")), c.hasValue() && c.setValue("".concat(e, "px"))
                    }
                }
            }
            class Xt extends jt {
                constructor() {
                    super(...arguments), this.type = "rect"
                }
                path(t) {
                    var e = this.getAttribute("x").getPixels("x"),
                        r = this.getAttribute("y").getPixels("y"),
                        i = this.getStyle("width", !1, !0).getPixels("x"),
                        n = this.getStyle("height", !1, !0).getPixels("y"),
                        a = this.getAttribute("rx"),
                        s = this.getAttribute("ry"),
                        o = a.getPixels("x"),
                        h = s.getPixels("y");
                    if (a.hasValue() && !s.hasValue() && (h = o), s.hasValue() && !a.hasValue() && (o = h), o = Math.min(o, i / 2), h = Math.min(h, n / 2), t) {
                        var u = (Math.sqrt(2) - 1) / 3 * 4;
                        t.beginPath(), n > 0 && i > 0 && (t.moveTo(e + o, r), t.lineTo(e + i - o, r), t.bezierCurveTo(e + i - o + u * o, r, e + i, r + h - u * h, e + i, r + h), t.lineTo(e + i, r + n - h), t.bezierCurveTo(e + i, r + n - h + u * h, e + i - o + u * o, r + n, e + i - o, r + n), t.lineTo(e + o, r + n), t.bezierCurveTo(e + o - u * o, r + n, e, r + n - h + u * h, e, r + n - h), t.lineTo(e, r + h), t.bezierCurveTo(e, r + h - u * h, e + o - u * o, r, e + o, r), t.closePath())
                    }
                    return new kt(e, r, e + i, r + n)
                }
                getMarkers() {
                    return null
                }
            }
            class Yt extends jt {
                constructor() {
                    super(...arguments), this.type = "circle"
                }
                path(t) {
                    var e = this.getAttribute("cx").getPixels("x"),
                        r = this.getAttribute("cy").getPixels("y"),
                        i = this.getAttribute("r").getPixels();
                    return t && i > 0 && (t.beginPath(), t.arc(e, r, i, 0, 2 * Math.PI, !1), t.closePath()), new kt(e - i, r - i, e + i, r + i)
                }
                getMarkers() {
                    return null
                }
            }
            class Wt extends jt {
                constructor() {
                    super(...arguments), this.type = "ellipse"
                }
                path(t) {
                    var e = (Math.sqrt(2) - 1) / 3 * 4,
                        r = this.getAttribute("rx").getPixels("x"),
                        i = this.getAttribute("ry").getPixels("y"),
                        n = this.getAttribute("cx").getPixels("x"),
                        a = this.getAttribute("cy").getPixels("y");
                    return t && r > 0 && i > 0 && (t.beginPath(), t.moveTo(n + r, a), t.bezierCurveTo(n + r, a + e * i, n + e * r, a + i, n, a + i), t.bezierCurveTo(n - e * r, a + i, n - r, a + e * i, n - r, a), t.bezierCurveTo(n - r, a - e * i, n - e * r, a - i, n, a - i), t.bezierCurveTo(n + e * r, a - i, n + r, a - e * i, n + r, a), t.closePath()), new kt(n - r, a - i, n + r, a + i)
                }
                getMarkers() {
                    return null
                }
            }
            class qt extends jt {
                constructor() {
                    super(...arguments), this.type = "line"
                }
                getPoints() {
                    return [new gt(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new gt(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))]
                }
                path(t) {
                    var [{
                        x: e,
                        y: r
                    }, {
                        x: i,
                        y: n
                    }] = this.getPoints();
                    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, n)), new kt(e, r, i, n)
                }
                getMarkers() {
                    var [t, e] = this.getPoints(), r = t.angleTo(e);
                    return [
                        [t, r],
                        [e, r]
                    ]
                }
            }
            class Gt extends jt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "polyline", this.points = [], this.points = gt.parsePath(this.getAttribute("points").getString())
                }
                path(t) {
                    var {
                        points: e
                    } = this, [{
                        x: r,
                        y: i
                    }] = e, n = new kt(r, i);
                    return t && (t.beginPath(), t.moveTo(r, i)), e.forEach((e => {
                        var {
                            x: r,
                            y: i
                        } = e;
                        n.addPoint(r, i), t && t.lineTo(r, i)
                    })), n
                }
                getMarkers() {
                    var {
                        points: t
                    } = this, e = t.length - 1, r = [];
                    return t.forEach(((i, n) => {
                        n !== e && r.push([i, i.angleTo(t[n + 1])])
                    })), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r
                }
            }
            class Qt extends Gt {
                constructor() {
                    super(...arguments), this.type = "polygon"
                }
                path(t) {
                    var e = super.path(t),
                        [{
                            x: r,
                            y: i
                        }] = this.points;
                    return t && (t.lineTo(r, i), t.closePath()), e
                }
            }
            class $t extends Mt {
                constructor() {
                    super(...arguments), this.type = "pattern"
                }
                createPattern(t, e, r) {
                    var i = this.getStyle("width").getPixels("x", !0),
                        n = this.getStyle("height").getPixels("y", !0),
                        a = new Ht(this.document, null);
                    a.attributes.viewBox = new ct(this.document, "viewBox", this.getAttribute("viewBox").getValue()), a.attributes.width = new ct(this.document, "width", "".concat(i, "px")), a.attributes.height = new ct(this.document, "height", "".concat(n, "px")), a.attributes.transform = new ct(this.document, "transform", this.getAttribute("patternTransform").getValue()), a.children = this.children;
                    var s = this.document.createCanvas(i, n),
                        o = s.getContext("2d"),
                        h = this.getAttribute("x"),
                        u = this.getAttribute("y");
                    h.hasValue() && u.hasValue() && o.translate(h.getPixels("x", !0), u.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
                    for (var l = -1; l <= 1; l++)
                        for (var c = -1; c <= 1; c++) o.save(), a.attributes.x = new ct(this.document, "x", l * s.width), a.attributes.y = new ct(this.document, "y", c * s.height), a.render(o), o.restore();
                    return t.createPattern(s, "repeat")
                }
            }
            class Zt extends Mt {
                constructor() {
                    super(...arguments), this.type = "marker"
                }
                render(t, e, r) {
                    if (e) {
                        var {
                            x: i,
                            y: n
                        } = e, a = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
                        t.translate(i, n), "auto" === a && t.rotate(r), "strokeWidth" === s && t.scale(t.lineWidth, t.lineWidth), t.save();
                        var o = new Ht(this.document, null);
                        o.type = this.type, o.attributes.viewBox = new ct(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.refX = new ct(this.document, "refX", this.getAttribute("refX").getValue()), o.attributes.refY = new ct(this.document, "refY", this.getAttribute("refY").getValue()), o.attributes.width = new ct(this.document, "width", this.getAttribute("markerWidth").getValue()), o.attributes.height = new ct(this.document, "height", this.getAttribute("markerHeight").getValue()), o.attributes.overflow = new ct(this.document, "overflow", this.getAttribute("overflow").getValue()), o.attributes.fill = new ct(this.document, "fill", this.getAttribute("fill").getColor("black")), o.attributes.stroke = new ct(this.document, "stroke", this.getAttribute("stroke").getValue("none")), o.children = this.children, o.render(t), t.restore(), "strokeWidth" === s && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" === a && t.rotate(-r), t.translate(-i, -n)
                    }
                }
            }
            class Kt extends Mt {
                constructor() {
                    super(...arguments), this.type = "defs"
                }
                render() {}
            }
            class Jt extends Dt {
                constructor() {
                    super(...arguments), this.type = "g"
                }
                getBoundingBox(t) {
                    var e = new kt;
                    return this.children.forEach((r => {
                        e.addBoundingBox(r.getBoundingBox(t))
                    })), e
                }
            }
            class te extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
                    var {
                        stops: i,
                        children: n
                    } = this;
                    n.forEach((t => {
                        "stop" === t.type && i.push(t)
                    }))
                }
                getGradientUnits() {
                    return this.getAttribute("gradientUnits").getString("objectBoundingBox")
                }
                createGradient(t, e, r) {
                    var i = this;
                    this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
                    var {
                        stops: n
                    } = i, a = this.getGradient(t, e);
                    if (!a) return this.addParentOpacity(r, n[n.length - 1].color);
                    if (n.forEach((t => {
                            a.addColorStop(t.offset, this.addParentOpacity(r, t.color))
                        })), this.getAttribute("gradientTransform").hasValue()) {
                        var {
                            document: s
                        } = this, {
                            MAX_VIRTUAL_PIXELS: o,
                            viewPort: h
                        } = s.screen, [u] = h.viewPorts, l = new Xt(s, null);
                        l.attributes.x = new ct(s, "x", -o / 3), l.attributes.y = new ct(s, "y", -o / 3), l.attributes.width = new ct(s, "width", o), l.attributes.height = new ct(s, "height", o);
                        var c = new Jt(s, null);
                        c.attributes.transform = new ct(s, "transform", this.getAttribute("gradientTransform").getValue()), c.children = [l];
                        var f = new Ht(s, null);
                        f.attributes.x = new ct(s, "x", 0), f.attributes.y = new ct(s, "y", 0), f.attributes.width = new ct(s, "width", u.width), f.attributes.height = new ct(s, "height", u.height), f.children = [c];
                        var g = s.createCanvas(u.width, u.height),
                            p = g.getContext("2d");
                        return p.fillStyle = a, f.render(p), p.createPattern(g, "no-repeat")
                    }
                    return a
                }
                inheritStopContainer(t) {
                    this.attributesToInherit.forEach((e => {
                        !this.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue())
                    }))
                }
                addParentOpacity(t, e) {
                    return t.hasValue() ? new ct(this.document, "color", e).addOpacity(t).getColor() : e
                }
            }
            class ee extends te {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2")
                }
                getGradient(t, e) {
                    var r = "objectBoundingBox" === this.getGradientUnits(),
                        i = r ? e.getBoundingBox(t) : null;
                    if (r && !i) return null;
                    this.getAttribute("x1").hasValue() || this.getAttribute("y1").hasValue() || this.getAttribute("x2").hasValue() || this.getAttribute("y2").hasValue() || (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
                    var n = r ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"),
                        a = r ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"),
                        s = r ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"),
                        o = r ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
                    return n === s && a === o ? null : t.createLinearGradient(n, a, s, o)
                }
            }
            class re extends te {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr")
                }
                getGradient(t, e) {
                    var r = "objectBoundingBox" === this.getGradientUnits(),
                        i = e.getBoundingBox(t);
                    if (r && !i) return null;
                    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
                    var n = r ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"),
                        a = r ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"),
                        s = n,
                        o = a;
                    this.getAttribute("fx").hasValue() && (s = r ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (o = r ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
                    var h = r ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(),
                        u = this.getAttribute("fr").getPixels();
                    return t.createRadialGradient(s, o, u, n, a, h)
                }
            }
            class ie extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "stop";
                    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())),
                        n = this.getStyle("stop-opacity"),
                        a = this.getStyle("stop-color", !0);
                    "" === a.getString() && a.setValue("#000"), n.hasValue() && (a = a.addOpacity(n)), this.offset = i, this.color = a.getColor()
                }
            }
            class ne extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new ct(t, "values", null);
                    var i = this.getAttribute("values");
                    i.hasValue() && this.values.setValue(i.getString().split(";"))
                }
                getProperty() {
                    var t = this.getAttribute("attributeType").getString(),
                        e = this.getAttribute("attributeName").getString();
                    return "CSS" === t ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0)
                }
                calcValue() {
                    var {
                        initialUnits: t
                    } = this, {
                        progress: e,
                        from: r,
                        to: i
                    } = this.getProgress(), n = r.getNumber() + (i.getNumber() - r.getNumber()) * e;
                    return "%" === t && (n *= 100), "".concat(n).concat(t)
                }
                update(t) {
                    var {
                        parent: e
                    } = this, r = this.getProperty();
                    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
                        var i = this.getAttribute("fill").getString("remove");
                        if ("indefinite" === this.getAttribute("repeatCount").getString() || "indefinite" === this.getAttribute("repeatDur").getString()) this.duration = 0;
                        else if ("freeze" !== i || this.frozen) {
                            if ("remove" === i && !this.removed) return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0
                        } else this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
                        return !1
                    }
                    this.duration += t;
                    var n = !1;
                    if (this.begin < this.duration) {
                        var a = this.calcValue(),
                            s = this.getAttribute("type");
                        if (s.hasValue()) {
                            var o = s.getString();
                            a = "".concat(o, "(").concat(a, ")")
                        }
                        r.setValue(a), n = !0
                    }
                    return n
                }
                getProgress() {
                    var {
                        document: t,
                        values: e
                    } = this, r = {
                        progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                    };
                    if (e.hasValue()) {
                        var i = r.progress * (e.getValue().length - 1),
                            n = Math.floor(i),
                            a = Math.ceil(i);
                        r.from = new ct(t, "from", parseFloat(e.getValue()[n])), r.to = new ct(t, "to", parseFloat(e.getValue()[a])), r.progress = (i - n) / (a - n)
                    } else r.from = this.from, r.to = this.to;
                    return r
                }
            }
            class ae extends ne {
                constructor() {
                    super(...arguments), this.type = "animateColor"
                }
                calcValue() {
                    var {
                        progress: t,
                        from: e,
                        to: r
                    } = this.getProgress(), i = new u(e.getColor()), n = new u(r.getColor());
                    if (i.ok && n.ok) {
                        var a = i.r + (n.r - i.r) * t,
                            s = i.g + (n.g - i.g) * t,
                            o = i.b + (n.b - i.b) * t;
                        return "rgb(".concat(Math.floor(a), ", ").concat(Math.floor(s), ", ").concat(Math.floor(o), ")")
                    }
                    return this.getAttribute("from").getColor()
                }
            }
            class se extends ne {
                constructor() {
                    super(...arguments), this.type = "animateTransform"
                }
                calcValue() {
                    var {
                        progress: t,
                        from: e,
                        to: r
                    } = this.getProgress(), i = F(e.getString()), n = F(r.getString()), a = i.map(((e, r) => e + (n[r] - e) * t)).join(" ");
                    return a
                }
            }
            class oe extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
                    var {
                        definitions: i
                    } = t, {
                        children: n
                    } = this;
                    for (var a of n) switch (a.type) {
                        case "font-face":
                            this.fontFace = a;
                            var s = a.getStyle("font-family");
                            s.hasValue() && (i[s.getString()] = this);
                            break;
                        case "missing-glyph":
                            this.missingGlyph = a;
                            break;
                        case "glyph":
                            var o = a;
                            o.arabicForm ? (this.isRTL = !0, this.isArabic = !0, void 0 === this.glyphs[o.unicode] && (this.glyphs[o.unicode] = {}), this.glyphs[o.unicode][o.arabicForm] = o) : this.glyphs[o.unicode] = o
                    }
                }
                render() {}
            }
            class he extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber()
                }
            }
            class ue extends jt {
                constructor() {
                    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0
                }
            }
            class le extends Ft {
                constructor() {
                    super(...arguments), this.type = "tref"
                }
                getText() {
                    var t = this.getHrefAttribute().getDefinition();
                    if (t) {
                        var e = t.children[0];
                        if (e) return e.getText()
                    }
                    return ""
                }
            }
            class ce extends Ft {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "a";
                    var {
                        childNodes: i
                    } = e, n = i[0], a = i.length > 0 && Array.from(i).every((t => 3 === t.nodeType));
                    this.hasText = a, this.text = a ? this.getTextFromNode(n) : ""
                }
                getText() {
                    return this.text
                }
                renderChildren(t) {
                    if (this.hasText) {
                        super.renderChildren(t);
                        var {
                            document: e,
                            x: r,
                            y: i
                        } = this, {
                            mouse: n
                        } = e.screen, a = new ct(e, "fontSize", It.parse(e.ctx.font).fontSize);
                        n.isWorking() && n.checkBoundingBox(this, new kt(r, i - a.getPixels("y"), r + this.measureText(t), i))
                    } else if (this.children.length > 0) {
                        var s = new Jt(this.document, null);
                        s.children = this.children, s.parent = this, s.render(t)
                    }
                }
                onClick() {
                    var {
                        window: t
                    } = this.document;
                    t && t.open(this.getHrefAttribute().getString())
                }
                onMouseMove() {
                    this.document.ctx.canvas.style.cursor = "pointer"
                }
            }

            function fe(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function ge(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fe(Object(r), !0).forEach((function(e) {
                        o(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fe(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            class pe extends Ft {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = new Map([
                        ["", 0]
                    ]);
                    var i = this.getHrefAttribute().getDefinition();
                    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i)
                }
                getText() {
                    return this.text
                }
                path(t) {
                    var {
                        dataArray: e
                    } = this;
                    t && t.beginPath(), e.forEach((e => {
                        var {
                            type: r,
                            points: i
                        } = e;
                        switch (r) {
                            case Lt.LINE_TO:
                                t && t.lineTo(i[0], i[1]);
                                break;
                            case Lt.MOVE_TO:
                                t && t.moveTo(i[0], i[1]);
                                break;
                            case Lt.CURVE_TO:
                                t && t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                                break;
                            case Lt.QUAD_TO:
                                t && t.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                                break;
                            case Lt.ARC:
                                var [n, a, s, o, h, u, l, c] = i, f = s > o ? s : o, g = s > o ? 1 : s / o, p = s > o ? o / s : 1;
                                t && (t.translate(n, a), t.rotate(l), t.scale(g, p), t.arc(0, 0, f, h, h + u, Boolean(1 - c)), t.scale(1 / g, 1 / p), t.rotate(-l), t.translate(-n, -a));
                                break;
                            case Lt.CLOSE_PATH:
                                t && t.closePath()
                        }
                    }))
                }
                renderChildren(t) {
                    this.setTextData(t), t.save();
                    var e = this.parent.getStyle("text-decoration").getString(),
                        r = this.getFontSize(),
                        {
                            glyphInfo: i
                        } = this,
                        n = t.fillStyle;
                    "underline" === e && t.beginPath(), i.forEach(((i, n) => {
                        var {
                            p0: a,
                            p1: s,
                            rotation: o,
                            text: h
                        } = i;
                        t.save(), t.translate(a.x, a.y), t.rotate(o), t.fillStyle && t.fillText(h, 0, 0), t.strokeStyle && t.strokeText(h, 0, 0), t.restore(), "underline" === e && (0 === n && t.moveTo(a.x, a.y + r / 8), t.lineTo(s.x, s.y + r / 5))
                    })), "underline" === e && (t.lineWidth = r / 20, t.strokeStyle = n, t.stroke(), t.closePath()), t.restore()
                }
                getLetterSpacingAt() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.letterSpacingCache[t] || 0
                }
                findSegmentToFitChar(t, e, r, i, n, a, s, o, h) {
                    var u = a,
                        l = this.measureText(t, o);
                    " " === o && "justify" === e && r < i && (l += (i - r) / n), h > -1 && (u += this.getLetterSpacingAt(h));
                    var c = this.textHeight / 20,
                        f = this.getEquidistantPointOnPath(u, c, 0),
                        g = this.getEquidistantPointOnPath(u + l, c, 0),
                        p = {
                            p0: f,
                            p1: g
                        },
                        d = f && g ? Math.atan2(g.y - f.y, g.x - f.x) : 0;
                    if (s) {
                        var v = Math.cos(Math.PI / 2 + d) * s,
                            y = Math.cos(-d) * s;
                        p.p0 = ge(ge({}, f), {}, {
                            x: f.x + v,
                            y: f.y + y
                        }), p.p1 = ge(ge({}, g), {}, {
                            x: g.x + v,
                            y: g.y + y
                        })
                    }
                    return {
                        offset: u += l,
                        segment: p,
                        rotation: d
                    }
                }
                measureText(t, e) {
                    var {
                        measuresCache: r
                    } = this, i = e || this.getText();
                    if (r.has(i)) return r.get(i);
                    var n = this.measureTargetText(t, i);
                    return r.set(i, n), n
                }
                setTextData(t) {
                    if (!this.glyphInfo) {
                        var e = this.getText(),
                            r = e.split(""),
                            i = e.split(" ").length - 1,
                            n = this.parent.getAttribute("dx").split().map((t => t.getPixels("x"))),
                            a = this.parent.getAttribute("dy").getPixels("y"),
                            s = this.parent.getStyle("text-anchor").getString("start"),
                            o = this.getStyle("letter-spacing"),
                            h = this.parent.getStyle("letter-spacing"),
                            u = 0;
                        o.hasValue() && "inherit" !== o.getValue() ? o.hasValue() && "initial" !== o.getValue() && "unset" !== o.getValue() && (u = o.getPixels()) : u = h.getPixels();
                        var l = [],
                            c = e.length;
                        this.letterSpacingCache = l;
                        for (var f = 0; f < c; f++) l.push(void 0 !== n[f] ? n[f] : u);
                        var g = l.reduce(((t, e, r) => 0 === r ? 0 : t + e || 0), 0),
                            p = this.measureText(t),
                            d = Math.max(p + g, 0);
                        this.textWidth = p, this.textHeight = this.getFontSize(), this.glyphInfo = [];
                        var v = this.getPathLength(),
                            y = this.getStyle("startOffset").getNumber(0) * v,
                            m = 0;
                        "middle" !== s && "center" !== s || (m = -d / 2), "end" !== s && "right" !== s || (m = -d), m += y, r.forEach(((e, n) => {
                            var {
                                offset: o,
                                segment: h,
                                rotation: u
                            } = this.findSegmentToFitChar(t, s, d, v, i, m, a, e, n);
                            m = o, h.p0 && h.p1 && this.glyphInfo.push({
                                text: r[n],
                                p0: h.p0,
                                p1: h.p1,
                                rotation: u
                            })
                        }))
                    }
                }
                parsePathData(t) {
                    if (this.pathLength = -1, !t) return [];
                    var e = [],
                        {
                            pathParser: r
                        } = t;
                    for (r.reset(); !r.isEnd();) {
                        var {
                            current: i
                        } = r, n = i ? i.x : 0, a = i ? i.y : 0, s = r.next(), o = s.type, h = [];
                        switch (s.type) {
                            case Lt.MOVE_TO:
                                this.pathM(r, h);
                                break;
                            case Lt.LINE_TO:
                                o = this.pathL(r, h);
                                break;
                            case Lt.HORIZ_LINE_TO:
                                o = this.pathH(r, h);
                                break;
                            case Lt.VERT_LINE_TO:
                                o = this.pathV(r, h);
                                break;
                            case Lt.CURVE_TO:
                                this.pathC(r, h);
                                break;
                            case Lt.SMOOTH_CURVE_TO:
                                o = this.pathS(r, h);
                                break;
                            case Lt.QUAD_TO:
                                this.pathQ(r, h);
                                break;
                            case Lt.SMOOTH_QUAD_TO:
                                o = this.pathT(r, h);
                                break;
                            case Lt.ARC:
                                h = this.pathA(r);
                                break;
                            case Lt.CLOSE_PATH:
                                jt.pathZ(r)
                        }
                        s.type !== Lt.CLOSE_PATH ? e.push({
                            type: o,
                            points: h,
                            start: {
                                x: n,
                                y: a
                            },
                            pathLength: this.calcLength(n, a, o, h)
                        }) : e.push({
                            type: Lt.CLOSE_PATH,
                            points: [],
                            pathLength: 0
                        })
                    }
                    return e
                }
                pathM(t, e) {
                    var {
                        x: r,
                        y: i
                    } = jt.pathM(t).point;
                    e.push(r, i)
                }
                pathL(t, e) {
                    var {
                        x: r,
                        y: i
                    } = jt.pathL(t).point;
                    return e.push(r, i), Lt.LINE_TO
                }
                pathH(t, e) {
                    var {
                        x: r,
                        y: i
                    } = jt.pathH(t).point;
                    return e.push(r, i), Lt.LINE_TO
                }
                pathV(t, e) {
                    var {
                        x: r,
                        y: i
                    } = jt.pathV(t).point;
                    return e.push(r, i), Lt.LINE_TO
                }
                pathC(t, e) {
                    var {
                        point: r,
                        controlPoint: i,
                        currentPoint: n
                    } = jt.pathC(t);
                    e.push(r.x, r.y, i.x, i.y, n.x, n.y)
                }
                pathS(t, e) {
                    var {
                        point: r,
                        controlPoint: i,
                        currentPoint: n
                    } = jt.pathS(t);
                    return e.push(r.x, r.y, i.x, i.y, n.x, n.y), Lt.CURVE_TO
                }
                pathQ(t, e) {
                    var {
                        controlPoint: r,
                        currentPoint: i
                    } = jt.pathQ(t);
                    e.push(r.x, r.y, i.x, i.y)
                }
                pathT(t, e) {
                    var {
                        controlPoint: r,
                        currentPoint: i
                    } = jt.pathT(t);
                    return e.push(r.x, r.y, i.x, i.y), Lt.QUAD_TO
                }
                pathA(t) {
                    var {
                        rX: e,
                        rY: r,
                        sweepFlag: i,
                        xAxisRotation: n,
                        centp: a,
                        a1: s,
                        ad: o
                    } = jt.pathA(t);
                    return 0 === i && o > 0 && (o -= 2 * Math.PI), 1 === i && o < 0 && (o += 2 * Math.PI), [a.x, a.y, e, r, s, o, n, i]
                }
                calcLength(t, e, r, i) {
                    var n = 0,
                        a = null,
                        s = null,
                        o = 0;
                    switch (r) {
                        case Lt.LINE_TO:
                            return this.getLineLength(t, e, i[0], i[1]);
                        case Lt.CURVE_TO:
                            for (n = 0, a = this.getPointOnCubicBezier(0, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), o = .01; o <= 1; o += .01) s = this.getPointOnCubicBezier(o, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), n += this.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return n;
                        case Lt.QUAD_TO:
                            for (n = 0, a = this.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]), o = .01; o <= 1; o += .01) s = this.getPointOnQuadraticBezier(o, t, e, i[0], i[1], i[2], i[3]), n += this.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return n;
                        case Lt.ARC:
                            n = 0;
                            var h = i[4],
                                u = i[5],
                                l = i[4] + u,
                                c = Math.PI / 180;
                            if (Math.abs(h - l) < c && (c = Math.abs(h - l)), a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], h, 0), u < 0)
                                for (o = h - c; o > l; o -= c) s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0), n += this.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            else
                                for (o = h + c; o < l; o += c) s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0), n += this.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), n += this.getLineLength(a.x, a.y, s.x, s.y)
                    }
                    return 0
                }
                getPointOnLine(t, e, r, i, n) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
                        o = (n - r) / (i - e + tt),
                        h = Math.sqrt(t * t / (1 + o * o));
                    i < e && (h *= -1);
                    var u = o * h,
                        l = null;
                    if (i === e) l = {
                        x: a,
                        y: s + u
                    };
                    else if ((s - r) / (a - e + tt) === o) l = {
                        x: a + h,
                        y: s + u
                    };
                    else {
                        var c, f, g = this.getLineLength(e, r, i, n);
                        if (g < tt) return null;
                        var p = (a - e) * (i - e) + (s - r) * (n - r);
                        c = e + (p /= g * g) * (i - e), f = r + p * (n - r);
                        var d = this.getLineLength(a, s, c, f),
                            v = Math.sqrt(t * t - d * d);
                        h = Math.sqrt(v * v / (1 + o * o)), i < e && (h *= -1), l = {
                            x: c + h,
                            y: f + (u = o * h)
                        }
                    }
                    return l
                }
                getPointOnPath(t) {
                    var e = this.getPathLength(),
                        r = 0,
                        i = null;
                    if (t < -5e-5 || t - 5e-5 > e) return null;
                    var {
                        dataArray: n
                    } = this;
                    for (var a of n) {
                        if (!a || !(a.pathLength < 5e-5 || r + a.pathLength + 5e-5 < t)) {
                            var s = t - r,
                                o = 0;
                            switch (a.type) {
                                case Lt.LINE_TO:
                                    i = this.getPointOnLine(s, a.start.x, a.start.y, a.points[0], a.points[1], a.start.x, a.start.y);
                                    break;
                                case Lt.ARC:
                                    var h = a.points[4],
                                        u = a.points[5],
                                        l = a.points[4] + u;
                                    if (o = h + s / a.pathLength * u, u < 0 && o < l || u >= 0 && o > l) break;
                                    i = this.getPointOnEllipticalArc(a.points[0], a.points[1], a.points[2], a.points[3], o, a.points[6]);
                                    break;
                                case Lt.CURVE_TO:
                                    (o = s / a.pathLength) > 1 && (o = 1), i = this.getPointOnCubicBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3], a.points[4], a.points[5]);
                                    break;
                                case Lt.QUAD_TO:
                                    (o = s / a.pathLength) > 1 && (o = 1), i = this.getPointOnQuadraticBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3])
                            }
                            if (i) return i;
                            break
                        }
                        r += a.pathLength
                    }
                    return null
                }
                getLineLength(t, e, r, i) {
                    return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e))
                }
                getPathLength() {
                    return -1 === this.pathLength && (this.pathLength = this.dataArray.reduce(((t, e) => e.pathLength > 0 ? t + e.pathLength : t), 0)), this.pathLength
                }
                getPointOnCubicBezier(t, e, r, i, n, a, s, o, h) {
                    return {
                        x: o * nt(t) + a * at(t) + i * st(t) + e * ot(t),
                        y: h * nt(t) + s * at(t) + n * st(t) + r * ot(t)
                    }
                }
                getPointOnQuadraticBezier(t, e, r, i, n, a, s) {
                    return {
                        x: a * ht(t) + i * ut(t) + e * lt(t),
                        y: s * ht(t) + n * ut(t) + r * lt(t)
                    }
                }
                getPointOnEllipticalArc(t, e, r, i, n, a) {
                    var s = Math.cos(a),
                        o = Math.sin(a),
                        h = r * Math.cos(n),
                        u = i * Math.sin(n);
                    return {
                        x: t + (h * s - u * o),
                        y: e + (h * o + u * s)
                    }
                }
                buildEquidistantCache(t, e) {
                    var r = this.getPathLength(),
                        i = e || .25,
                        n = t || r / 100;
                    if (!this.equidistantCache || this.equidistantCache.step !== n || this.equidistantCache.precision !== i) {
                        this.equidistantCache = {
                            step: n,
                            precision: i,
                            points: []
                        };
                        for (var a = 0, s = 0; s <= r; s += i) {
                            var o = this.getPointOnPath(s),
                                h = this.getPointOnPath(s + i);
                            o && h && ((a += this.getLineLength(o.x, o.y, h.x, h.y)) >= n && (this.equidistantCache.points.push({
                                x: o.x,
                                y: o.y,
                                distance: s
                            }), a -= n))
                        }
                    }
                }
                getEquidistantPointOnPath(t, e, r) {
                    if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5) return null;
                    var i = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
                    return this.equidistantCache.points[i] || null
                }
            }
            var de = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
            class ve extends Dt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "image", this.loaded = !1;
                    var i = this.getHrefAttribute().getString();
                    if (i) {
                        var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
                        t.images.push(this), n ? this.loadSvg(i) : this.loadImage(i), this.isSvg = n
                    }
                }
                loadImage(t) {
                    var e = this;
                    return n((function*() {
                        try {
                            var r = yield e.document.createImage(t);
                            e.image = r
                        } catch (t) {}
                        e.loaded = !0
                    }))()
                }
                loadSvg(t) {
                    var e = this;
                    return n((function*() {
                        var r = de.exec(t);
                        if (r) {
                            var i = r[5];
                            "base64" === r[4] ? e.image = atob(i) : e.image = decodeURIComponent(i)
                        } else try {
                            var n = yield e.document.fetch(t), a = yield n.text();
                            e.image = a
                        } catch (t) {}
                        e.loaded = !0
                    }))()
                }
                renderChildren(t) {
                    var {
                        document: e,
                        image: r,
                        loaded: i
                    } = this, n = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), o = this.getStyle("height").getPixels("y");
                    if (i && r && s && o) {
                        if (t.save(), t.translate(n, a), this.isSvg) {
                            var h = e.canvg.forkString(t, this.image, {
                                ignoreMouse: !0,
                                ignoreAnimation: !0,
                                ignoreDimensions: !0,
                                ignoreClear: !0,
                                offsetX: 0,
                                offsetY: 0,
                                scaleWidth: s,
                                scaleHeight: o
                            });
                            h.document.documentElement.parent = this, h.render()
                        } else {
                            var u = this.image;
                            e.setViewBox({
                                ctx: t,
                                aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                                width: s,
                                desiredWidth: u.width,
                                height: o,
                                desiredHeight: u.height
                            }), this.loaded && (void 0 === u.complete || u.complete) && t.drawImage(u, 0, 0)
                        }
                        t.restore()
                    }
                }
                getBoundingBox() {
                    var t = this.getAttribute("x").getPixels("x"),
                        e = this.getAttribute("y").getPixels("y"),
                        r = this.getStyle("width").getPixels("x"),
                        i = this.getStyle("height").getPixels("y");
                    return new kt(t, e, t + r, e + i)
                }
            }
            class ye extends Dt {
                constructor() {
                    super(...arguments), this.type = "symbol"
                }
                render(t) {}
            }
            class me {
                constructor(t) {
                    this.document = t, this.loaded = !1, t.fonts.push(this)
                }
                load(t, e) {
                    var r = this;
                    return n((function*() {
                        try {
                            var {
                                document: i
                            } = r, n = (yield i.canvg.parser.load(e)).getElementsByTagName("font");
                            Array.from(n).forEach((e => {
                                var r = i.createElement(e);
                                i.definitions[t] = r
                            }))
                        } catch (t) {}
                        r.loaded = !0
                    }))()
                }
            }
            class xe extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "style";
                    var i = D(Array.from(e.childNodes).map((t => t.textContent)).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, ""));
                    i.split("}").forEach((e => {
                        var r = e.trim();
                        if (r) {
                            var i = r.split("{"),
                                n = i[0].split(","),
                                a = i[1].split(";");
                            n.forEach((e => {
                                var r = e.trim();
                                if (r) {
                                    var i = t.styles[r] || {};
                                    if (a.forEach((e => {
                                            var r = e.indexOf(":"),
                                                n = e.substr(0, r).trim(),
                                                a = e.substr(r + 1, e.length - r).trim();
                                            n && a && (i[n] = new ct(t, n, a))
                                        })), t.styles[r] = i, t.stylesSpecificity[r] = J(r), "@font-face" === r) {
                                        var n = i["font-family"].getString().replace(/"|'/g, "");
                                        i.src.getString().split(",").forEach((e => {
                                            if (e.indexOf('format("svg")') > 0) {
                                                var r = H(e);
                                                r && new me(t).load(n, r)
                                            }
                                        }))
                                    }
                                }
                            }))
                        }
                    }))
                }
            }
            xe.parseExternalUrl = H;
            class be extends Dt {
                constructor() {
                    super(...arguments), this.type = "use"
                }
                setContext(t) {
                    super.setContext(t);
                    var e = this.getAttribute("x"),
                        r = this.getAttribute("y");
                    e.hasValue() && t.translate(e.getPixels("x"), 0), r.hasValue() && t.translate(0, r.getPixels("y"))
                }
                path(t) {
                    var {
                        element: e
                    } = this;
                    e && e.path(t)
                }
                renderChildren(t) {
                    var {
                        document: e,
                        element: r
                    } = this;
                    if (r) {
                        var i = r;
                        if ("symbol" === r.type && ((i = new Ht(e, null)).attributes.viewBox = new ct(e, "viewBox", r.getAttribute("viewBox").getString()), i.attributes.preserveAspectRatio = new ct(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), i.attributes.overflow = new ct(e, "overflow", r.getAttribute("overflow").getString()), i.children = r.children, r.styles.opacity = new ct(e, "opacity", this.calculateOpacity())), "svg" === i.type) {
                            var n = this.getStyle("width", !1, !0),
                                a = this.getStyle("height", !1, !0);
                            n.hasValue() && (i.attributes.width = new ct(e, "width", n.getString())), a.hasValue() && (i.attributes.height = new ct(e, "height", a.getString()))
                        }
                        var s = i.parent;
                        i.parent = this, i.render(t), i.parent = s
                    }
                }
                getBoundingBox(t) {
                    var {
                        element: e
                    } = this;
                    return e ? e.getBoundingBox(t) : null
                }
                elementTransform() {
                    var {
                        document: t,
                        element: e
                    } = this;
                    return Et.fromElement(t, e)
                }
                get element() {
                    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement
                }
            }

            function Se(t, e, r, i, n, a) {
                return t[r * i * 4 + 4 * e + a]
            }

            function we(t, e, r, i, n, a, s) {
                t[r * i * 4 + 4 * e + a] = s
            }

            function Te(t, e, r) {
                return t[e] * r
            }

            function Ae(t, e, r, i) {
                return e + Math.cos(t) * r + Math.sin(t) * i
            }
            class Oe extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "feColorMatrix";
                    var i = F(this.getAttribute("values").getString());
                    switch (this.getAttribute("type").getString("matrix")) {
                        case "saturate":
                            var n = i[0];
                            i = [.213 + .787 * n, .715 - .715 * n, .072 - .072 * n, 0, 0, .213 - .213 * n, .715 + .285 * n, .072 - .072 * n, 0, 0, .213 - .213 * n, .715 - .715 * n, .072 + .928 * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                            break;
                        case "hueRotate":
                            var a = i[0] * Math.PI / 180;
                            i = [Ae(a, .213, .787, -.213), Ae(a, .715, -.715, -.715), Ae(a, .072, -.072, .928), 0, 0, Ae(a, .213, -.213, .143), Ae(a, .715, .285, .14), Ae(a, .072, -.072, -.283), 0, 0, Ae(a, .213, -.213, -.787), Ae(a, .715, -.715, .715), Ae(a, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                            break;
                        case "luminanceToAlpha":
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1]
                    }
                    this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue()
                }
                apply(t, e, r, i, n) {
                    for (var {
                            includeOpacity: a,
                            matrix: s
                        } = this, o = t.getImageData(0, 0, i, n), h = 0; h < n; h++)
                        for (var u = 0; u < i; u++) {
                            var l = Se(o.data, u, h, i, 0, 0),
                                c = Se(o.data, u, h, i, 0, 1),
                                f = Se(o.data, u, h, i, 0, 2),
                                g = Se(o.data, u, h, i, 0, 3),
                                p = Te(s, 0, l) + Te(s, 1, c) + Te(s, 2, f) + Te(s, 3, g) + Te(s, 4, 1),
                                d = Te(s, 5, l) + Te(s, 6, c) + Te(s, 7, f) + Te(s, 8, g) + Te(s, 9, 1),
                                v = Te(s, 10, l) + Te(s, 11, c) + Te(s, 12, f) + Te(s, 13, g) + Te(s, 14, 1),
                                y = Te(s, 15, l) + Te(s, 16, c) + Te(s, 17, f) + Te(s, 18, g) + Te(s, 19, 1);
                            a && (p = 0, d = 0, v = 0, y *= g / 255), we(o.data, u, h, i, 0, 0, p), we(o.data, u, h, i, 0, 1, d), we(o.data, u, h, i, 0, 2, v), we(o.data, u, h, i, 0, 3, y)
                        }
                    t.clearRect(0, 0, i, n), t.putImageData(o, 0, 0)
                }
            }
            class Ce extends Mt {
                constructor() {
                    super(...arguments), this.type = "mask"
                }
                apply(t, e) {
                    var {
                        document: r
                    } = this, i = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), a = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
                    if (!a && !s) {
                        var o = new kt;
                        this.children.forEach((e => {
                            o.addBoundingBox(e.getBoundingBox(t))
                        })), i = Math.floor(o.x1), n = Math.floor(o.y1), a = Math.floor(o.width), s = Math.floor(o.height)
                    }
                    var h = this.removeStyles(e, Ce.ignoreStyles),
                        u = r.createCanvas(i + a, n + s),
                        l = u.getContext("2d");
                    r.screen.setDefaults(l), this.renderChildren(l), new Oe(r, {
                        nodeType: 1,
                        childNodes: [],
                        attributes: [{
                            nodeName: "type",
                            value: "luminanceToAlpha"
                        }, {
                            nodeName: "includeOpacity",
                            value: "true"
                        }]
                    }).apply(l, 0, 0, i + a, n + s);
                    var c = r.createCanvas(i + a, n + s),
                        f = c.getContext("2d");
                    r.screen.setDefaults(f), e.render(f), f.globalCompositeOperation = "destination-in", f.fillStyle = l.createPattern(u, "no-repeat"), f.fillRect(0, 0, i + a, n + s), t.fillStyle = f.createPattern(c, "no-repeat"), t.fillRect(0, 0, i + a, n + s), this.restoreStyles(e, h)
                }
                render(t) {}
            }
            Ce.ignoreStyles = ["mask", "transform", "clip-path"];
            var Pe = () => {};
            class Ee extends Mt {
                constructor() {
                    super(...arguments), this.type = "clipPath"
                }
                apply(t) {
                    var {
                        document: e
                    } = this, r = Reflect.getPrototypeOf(t), {
                        beginPath: i,
                        closePath: n
                    } = t;
                    r && (r.beginPath = Pe, r.closePath = Pe), Reflect.apply(i, t, []), this.children.forEach((i => {
                        if (void 0 !== i.path) {
                            var a = void 0 !== i.elementTransform ? i.elementTransform() : null;
                            a || (a = Et.fromElement(e, i)), a && a.apply(t), i.path(t), r && (r.closePath = n), a && a.unapply(t)
                        }
                    })), Reflect.apply(n, t, []), t.clip(), r && (r.beginPath = i, r.closePath = n)
                }
                render(t) {}
            }
            class Me extends Mt {
                constructor() {
                    super(...arguments), this.type = "filter"
                }
                apply(t, e) {
                    var {
                        document: r,
                        children: i
                    } = this, n = e.getBoundingBox(t);
                    if (n) {
                        var a = 0,
                            s = 0;
                        i.forEach((t => {
                            var e = t.extraFilterDistance || 0;
                            a = Math.max(a, e), s = Math.max(s, e)
                        }));
                        var o = Math.floor(n.width),
                            h = Math.floor(n.height),
                            u = o + 2 * a,
                            l = h + 2 * s;
                        if (!(u < 1 || l < 1)) {
                            var c = Math.floor(n.x),
                                f = Math.floor(n.y),
                                g = this.removeStyles(e, Me.ignoreStyles),
                                p = r.createCanvas(u, l),
                                d = p.getContext("2d");
                            r.screen.setDefaults(d), d.translate(-c + a, -f + s), e.render(d), i.forEach((t => {
                                "function" == typeof t.apply && t.apply(d, 0, 0, u, l)
                            })), t.drawImage(p, 0, 0, u, l, c - a, f - s, u, l), this.restoreStyles(e, g)
                        }
                    }
                }
                render(t) {}
            }
            Me.ignoreStyles = ["filter", "transform", "clip-path"];
            class Ne extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition()
                }
                apply(t, e, r, i, n) {}
            }
            class Re extends Mt {
                constructor() {
                    super(...arguments), this.type = "feMorphology"
                }
                apply(t, e, r, i, n) {}
            }
            class _e extends Mt {
                constructor() {
                    super(...arguments), this.type = "feComposite"
                }
                apply(t, e, r, i, n) {}
            }
            class Ve extends Mt {
                constructor(t, e, r) {
                    super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius
                }
                apply(t, e, r, i, n) {
                    var {
                        document: a,
                        blurRadius: s
                    } = this, o = a.window ? a.window.document.body : null, h = t.canvas;
                    h.id = a.getUniqueId(), o && (h.style.display = "none", o.appendChild(h)), I(h, e, r, i, n, s), o && o.removeChild(h)
                }
            }
            class Ie extends Mt {
                constructor() {
                    super(...arguments), this.type = "title"
                }
            }
            class ke extends Mt {
                constructor() {
                    super(...arguments), this.type = "desc"
                }
            }
            var Le = {
                svg: Ht,
                rect: Xt,
                circle: Yt,
                ellipse: Wt,
                line: qt,
                polyline: Gt,
                polygon: Qt,
                path: jt,
                pattern: $t,
                marker: Zt,
                defs: Kt,
                linearGradient: ee,
                radialGradient: re,
                stop: ie,
                animate: ne,
                animateColor: ae,
                animateTransform: se,
                font: oe,
                "font-face": he,
                "missing-glyph": ue,
                glyph: Bt,
                text: Ft,
                tspan: zt,
                tref: le,
                a: ce,
                textPath: pe,
                image: ve,
                g: Jt,
                symbol: ye,
                style: xe,
                use: be,
                mask: Ce,
                clipPath: Ee,
                filter: Me,
                feDropShadow: Ne,
                feMorphology: Re,
                feComposite: _e,
                feColorMatrix: Oe,
                feGaussianBlur: Ve,
                title: Ie,
                desc: ke
            };

            function De(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function je() {
                return je = n((function*(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = document.createElement("img");
                    return e && (r.crossOrigin = "Anonymous"), new Promise(((e, i) => {
                        r.onload = () => {
                            e(r)
                        }, r.onerror = (t, e, r, n, a) => {
                            i(a)
                        }, r.src = t
                    }))
                })), je.apply(this, arguments)
            }
            class Be {
                constructor(t) {
                    var {
                        rootEmSize: e = 12,
                        emSize: r = 12,
                        createCanvas: i = Be.createCanvas,
                        createImage: n = Be.createImage,
                        anonymousCrossOrigin: a
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = i, this.createImage = this.bindCreateImage(n, a), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this))
                }
                bindCreateImage(t, e) {
                    return "boolean" == typeof e ? (r, i) => t(r, "boolean" == typeof i ? i : e) : t
                }
                get window() {
                    return this.screen.window
                }
                get fetch() {
                    return this.screen.fetch
                }
                get ctx() {
                    return this.screen.ctx
                }
                get emSize() {
                    var {
                        emSizeStack: t
                    } = this;
                    return t[t.length - 1]
                }
                set emSize(t) {
                    var {
                        emSizeStack: e
                    } = this;
                    e.push(t)
                }
                popEmSize() {
                    var {
                        emSizeStack: t
                    } = this;
                    t.pop()
                }
                getUniqueId() {
                    return "canvg".concat(++this.uniqueId)
                }
                isImagesLoaded() {
                    return this.images.every((t => t.loaded))
                }
                isFontsLoaded() {
                    return this.fonts.every((t => t.loaded))
                }
                createDocumentElement(t) {
                    var e = this.createElement(t.documentElement);
                    return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e
                }
                createElement(t) {
                    var e = t.nodeName.replace(/^[^:]+:/, ""),
                        r = Be.elementTypes[e];
                    return void 0 !== r ? new r(this, t) : new Nt(this, t)
                }
                createTextNode(t) {
                    return new Ut(this, t)
                }
                setViewBox(t) {
                    this.screen.setViewBox(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? De(Object(r), !0).forEach((function(e) {
                                o(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }({
                        document: this
                    }, t))
                }
            }

            function Fe(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function ze(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Fe(Object(r), !0).forEach((function(e) {
                        o(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            Be.createCanvas = function(t, e) {
                var r = document.createElement("canvas");
                return r.width = t, r.height = e, r
            }, Be.createImage = function(t) {
                return je.apply(this, arguments)
            }, Be.elementTypes = Le;
            class Ue {
                constructor(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.parser = new bt(r), this.screen = new yt(t, r), this.options = r;
                    var i = new Be(this, r),
                        n = i.createDocumentElement(e);
                    this.document = i, this.documentElement = n
                }
                static from(t, e) {
                    var r = arguments;
                    return n((function*() {
                        var i = r.length > 2 && void 0 !== r[2] ? r[2] : {},
                            n = new bt(i),
                            a = yield n.parse(e);
                        return new Ue(t, a, i)
                    }))()
                }
                static fromString(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = new bt(r).parseFromString(e);
                    return new Ue(t, i, r)
                }
                fork(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return Ue.from(t, e, ze(ze({}, this.options), r))
                }
                forkString(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return Ue.fromString(t, e, ze(ze({}, this.options), r))
                }
                ready() {
                    return this.screen.ready()
                }
                isReady() {
                    return this.screen.isReady()
                }
                render() {
                    var t = arguments,
                        e = this;
                    return n((function*() {
                        var r = t.length > 0 && void 0 !== t[0] ? t[0] : {};
                        e.start(ze({
                            enableRedraw: !0,
                            ignoreAnimation: !0,
                            ignoreMouse: !0
                        }, r)), yield e.ready(), e.stop()
                    }))()
                }
                start() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            documentElement: e,
                            screen: r,
                            options: i
                        } = this;
                    r.start(e, ze(ze({
                        enableRedraw: !0
                    }, i), t))
                }
                stop() {
                    this.screen.stop()
                }
                resize(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.documentElement.resize(t, e, r)
                }
            }
        }
    }
]);