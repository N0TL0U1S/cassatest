(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[41], {
    28071: (t, e, n) => {
        "use strict";
        n.d(e, {
            do: () => Y
        });
        var r, i = [], o = "ResizeObserver loop completed with undelivered notifications.";
        !function(t) {
            t.BORDER_BOX = "border-box",
            t.CONTENT_BOX = "content-box",
            t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
        }(r || (r = {}));
        var a, s = function(t) {
            return Object.freeze(t)
        }, c = function(t, e) {
            this.inlineSize = t,
            this.blockSize = e,
            s(this)
        }, l = function() {
            function t(t, e, n, r) {
                return this.x = t,
                this.y = e,
                this.width = n,
                this.height = r,
                this.top = this.y,
                this.left = this.x,
                this.bottom = this.top + this.height,
                this.right = this.left + this.width,
                s(this)
            }
            return t.prototype.toJSON = function() {
                var t = this;
                return {
                    x: t.x,
                    y: t.y,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
            ,
            t.fromRect = function(e) {
                return new t(e.x,e.y,e.width,e.height)
            }
            ,
            t
        }(), u = function(t) {
            return t instanceof SVGElement && "getBBox"in t
        }, p = function(t) {
            if (u(t)) {
                var e = t.getBBox()
                  , n = e.width
                  , r = e.height;
                return !n && !r
            }
            var i = t
              , o = i.offsetWidth
              , a = i.offsetHeight;
            return !(o || a || t.getClientRects().length)
        }, f = function(t) {
            var e;
            if (t instanceof Element)
                return !0;
            var n = null === (e = null == t ? void 0 : t.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            return !!(n && t instanceof n.Element)
        }, d = "undefined" != typeof window ? window : {}, h = new WeakMap, v = /auto|scroll/, g = /^tb|vertical/, m = /msie|trident/i.test(d.navigator && d.navigator.userAgent), y = function(t) {
            return parseFloat(t || "0")
        }, b = function(t, e, n) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === n && (n = !1),
            new c((n ? e : t) || 0,(n ? t : e) || 0)
        }, x = s({
            devicePixelContentBoxSize: b(),
            borderBoxSize: b(),
            contentBoxSize: b(),
            contentRect: new l(0,0,0,0)
        }), w = function(t, e) {
            if (void 0 === e && (e = !1),
            h.has(t) && !e)
                return h.get(t);
            if (p(t))
                return h.set(t, x),
                x;
            var n = getComputedStyle(t)
              , r = u(t) && t.ownerSVGElement && t.getBBox()
              , i = !m && "border-box" === n.boxSizing
              , o = g.test(n.writingMode || "")
              , a = !r && v.test(n.overflowY || "")
              , c = !r && v.test(n.overflowX || "")
              , f = r ? 0 : y(n.paddingTop)
              , d = r ? 0 : y(n.paddingRight)
              , w = r ? 0 : y(n.paddingBottom)
              , E = r ? 0 : y(n.paddingLeft)
              , T = r ? 0 : y(n.borderTopWidth)
              , S = r ? 0 : y(n.borderRightWidth)
              , _ = r ? 0 : y(n.borderBottomWidth)
              , O = E + d
              , k = f + w
              , P = (r ? 0 : y(n.borderLeftWidth)) + S
              , z = T + _
              , D = c ? t.offsetHeight - z - t.clientHeight : 0
              , M = a ? t.offsetWidth - P - t.clientWidth : 0
              , I = i ? O + P : 0
              , A = i ? k + z : 0
              , R = r ? r.width : y(n.width) - I - M
              , C = r ? r.height : y(n.height) - A - D
              , j = R + O + M + P
              , F = C + k + D + z
              , B = s({
                devicePixelContentBoxSize: b(Math.round(R * devicePixelRatio), Math.round(C * devicePixelRatio), o),
                borderBoxSize: b(j, F, o),
                contentBoxSize: b(R, C, o),
                contentRect: new l(E,f,R,C)
            });
            return h.set(t, B),
            B
        }, E = function(t, e, n) {
            var i = w(t, n)
              , o = i.borderBoxSize
              , a = i.contentBoxSize
              , s = i.devicePixelContentBoxSize;
            switch (e) {
            case r.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.BORDER_BOX:
                return o;
            default:
                return a
            }
        }, T = function(t) {
            var e = w(t);
            this.target = t,
            this.contentRect = e.contentRect,
            this.borderBoxSize = s([e.borderBoxSize]),
            this.contentBoxSize = s([e.contentBoxSize]),
            this.devicePixelContentBoxSize = s([e.devicePixelContentBoxSize])
        }, S = function(t) {
            if (p(t))
                return 1 / 0;
            for (var e = 0, n = t.parentNode; n; )
                e += 1,
                n = n.parentNode;
            return e
        }, _ = function() {
            var t = 1 / 0
              , e = [];
            i.forEach((function(n) {
                if (0 !== n.activeTargets.length) {
                    var r = [];
                    n.activeTargets.forEach((function(e) {
                        var n = new T(e.target)
                          , i = S(e.target);
                        r.push(n),
                        e.lastReportedSize = E(e.target, e.observedBox),
                        i < t && (t = i)
                    }
                    )),
                    e.push((function() {
                        n.callback.call(n.observer, r, n.observer)
                    }
                    )),
                    n.activeTargets.splice(0, n.activeTargets.length)
                }
            }
            ));
            for (var n = 0, r = e; n < r.length; n++) {
                (0,
                r[n])()
            }
            return t
        }, O = function(t) {
            i.forEach((function(e) {
                e.activeTargets.splice(0, e.activeTargets.length),
                e.skippedTargets.splice(0, e.skippedTargets.length),
                e.observationTargets.forEach((function(n) {
                    n.isActive() && (S(n.target) > t ? e.activeTargets.push(n) : e.skippedTargets.push(n))
                }
                ))
            }
            ))
        }, k = function() {
            var t, e = 0;
            for (O(e); i.some((function(t) {
                return t.activeTargets.length > 0
            }
            )); )
                e = _(),
                O(e);
            return i.some((function(t) {
                return t.skippedTargets.length > 0
            }
            )) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error",{
                message: o
            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1),
            t.message = o),
            window.dispatchEvent(t)),
            e > 0
        }, P = [], z = function(t) {
            if (!a) {
                var e = 0
                  , n = document.createTextNode("");
                new MutationObserver((function() {
                    return P.splice(0).forEach((function(t) {
                        return t()
                    }
                    ))
                }
                )).observe(n, {
                    characterData: !0
                }),
                a = function() {
                    n.textContent = "".concat(e ? e-- : e++)
                }
            }
            P.push(t),
            a()
        }, D = 0, M = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }, I = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], A = function(t) {
            return void 0 === t && (t = 0),
            Date.now() + t
        }, R = !1, C = new (function() {
            function t() {
                var t = this;
                this.stopped = !0,
                this.listener = function() {
                    return t.schedule()
                }
            }
            return t.prototype.run = function(t) {
                var e = this;
                if (void 0 === t && (t = 250),
                !R) {
                    R = !0;
                    var n, r = A(t);
                    n = function() {
                        var n = !1;
                        try {
                            n = k()
                        } finally {
                            if (R = !1,
                            t = r - A(),
                            !D)
                                return;
                            n ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
                        }
                    }
                    ,
                    z((function() {
                        requestAnimationFrame(n)
                    }
                    ))
                }
            }
            ,
            t.prototype.schedule = function() {
                this.stop(),
                this.run()
            }
            ,
            t.prototype.observe = function() {
                var t = this
                  , e = function() {
                    return t.observer && t.observer.observe(document.body, M)
                };
                document.body ? e() : d.addEventListener("DOMContentLoaded", e)
            }
            ,
            t.prototype.start = function() {
                var t = this;
                this.stopped && (this.stopped = !1,
                this.observer = new MutationObserver(this.listener),
                this.observe(),
                I.forEach((function(e) {
                    return d.addEventListener(e, t.listener, !0)
                }
                )))
            }
            ,
            t.prototype.stop = function() {
                var t = this;
                this.stopped || (this.observer && this.observer.disconnect(),
                I.forEach((function(e) {
                    return d.removeEventListener(e, t.listener, !0)
                }
                )),
                this.stopped = !0)
            }
            ,
            t
        }()), j = function(t) {
            !D && t > 0 && C.start(),
            !(D += t) && C.stop()
        }, F = function() {
            function t(t, e) {
                this.target = t,
                this.observedBox = e || r.CONTENT_BOX,
                this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return t.prototype.isActive = function() {
                var t, e = E(this.target, this.observedBox, !0);
                return t = this.target,
                u(t) || function(t) {
                    switch (t.tagName) {
                    case "INPUT":
                        if ("image" !== t.type)
                            break;
                    case "VIDEO":
                    case "AUDIO":
                    case "EMBED":
                    case "OBJECT":
                    case "CANVAS":
                    case "IFRAME":
                    case "IMG":
                        return !0
                    }
                    return !1
                }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e),
                this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
            }
            ,
            t
        }(), B = function(t, e) {
            this.activeTargets = [],
            this.skippedTargets = [],
            this.observationTargets = [],
            this.observer = t,
            this.callback = e
        }, X = new WeakMap, L = function(t, e) {
            for (var n = 0; n < t.length; n += 1)
                if (t[n].target === e)
                    return n;
            return -1
        }, N = function() {
            function t() {}
            return t.connect = function(t, e) {
                var n = new B(t,e);
                X.set(t, n)
            }
            ,
            t.observe = function(t, e, n) {
                var r = X.get(t)
                  , o = 0 === r.observationTargets.length;
                L(r.observationTargets, e) < 0 && (o && i.push(r),
                r.observationTargets.push(new F(e,n && n.box)),
                j(1),
                C.schedule())
            }
            ,
            t.unobserve = function(t, e) {
                var n = X.get(t)
                  , r = L(n.observationTargets, e)
                  , o = 1 === n.observationTargets.length;
                r >= 0 && (o && i.splice(i.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                j(-1))
            }
            ,
            t.disconnect = function(t) {
                var e = this
                  , n = X.get(t);
                n.observationTargets.slice().forEach((function(n) {
                    return e.unobserve(t, n.target)
                }
                )),
                n.activeTargets.splice(0, n.activeTargets.length)
            }
            ,
            t
        }(), Y = function() {
            function t(t) {
                if (0 === arguments.length)
                    throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof t)
                    throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                N.connect(this, t)
            }
            return t.prototype.observe = function(t, e) {
                if (0 === arguments.length)
                    throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!f(t))
                    throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                N.observe(this, t, e)
            }
            ,
            t.prototype.unobserve = function(t) {
                if (0 === arguments.length)
                    throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!f(t))
                    throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                N.unobserve(this, t)
            }
            ,
            t.prototype.disconnect = function() {
                N.disconnect(this)
            }
            ,
            t.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }
            ,
            t
        }()
    }
    ,
    66709: function(t, e, n) {
        (t = n.nmd(t)).exports = function() {
            "use strict";
            function e(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function n(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? e(Object(r), !0).forEach((function(e) {
                        s(t, e, r[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }
                    ))
                }
                return t
            }
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                r(t)
            }
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, h(r.key), r)
                }
            }
            function a(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }
            function s(t, e, n) {
                return (e = h(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function c(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && u(t, e)
            }
            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                ,
                l(t)
            }
            function u(t, e) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                ,
                u(t, e)
            }
            function p(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return p(t)
                    }(this, n)
                }
            }
            function d() {
                return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)); )
                            ;
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }
                ,
                d.apply(this, arguments)
            }
            function h(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r)
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var v = function(t) {
                return !(!t || !t.Window) && t instanceof t.Window
            }
              , g = void 0
              , m = void 0;
            function y(t) {
                g = t;
                var e = t.document.createTextNode("");
                e.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(e) === e && (t = t.wrap(t)),
                m = t
            }
            function b(t) {
                return v(t) ? t : (t.ownerDocument || t).defaultView || m.window
            }
            "undefined" != typeof window && window && y(window);
            var x = function(t) {
                return !!t && "object" === r(t)
            }
              , w = function(t) {
                return "function" == typeof t
            }
              , E = {
                window: function(t) {
                    return t === m || v(t)
                },
                docFrag: function(t) {
                    return x(t) && 11 === t.nodeType
                },
                object: x,
                func: w,
                number: function(t) {
                    return "number" == typeof t
                },
                bool: function(t) {
                    return "boolean" == typeof t
                },
                string: function(t) {
                    return "string" == typeof t
                },
                element: function(t) {
                    if (!t || "object" !== r(t))
                        return !1;
                    var e = b(t) || m;
                    return /object|function/.test("undefined" == typeof Element ? "undefined" : r(Element)) ? t instanceof Element || t instanceof e.Element : 1 === t.nodeType && "string" == typeof t.nodeName
                },
                plainObject: function(t) {
                    return x(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString())
                },
                array: function(t) {
                    return x(t) && void 0 !== t.length && w(t.splice)
                }
            };
            function T(t) {
                var e = t.interaction;
                if ("drag" === e.prepared.name) {
                    var n = e.prepared.axis;
                    "x" === n ? (e.coords.cur.page.y = e.coords.start.page.y,
                    e.coords.cur.client.y = e.coords.start.client.y,
                    e.coords.velocity.client.y = 0,
                    e.coords.velocity.page.y = 0) : "y" === n && (e.coords.cur.page.x = e.coords.start.page.x,
                    e.coords.cur.client.x = e.coords.start.client.x,
                    e.coords.velocity.client.x = 0,
                    e.coords.velocity.page.x = 0)
                }
            }
            function S(t) {
                var e = t.iEvent
                  , n = t.interaction;
                if ("drag" === n.prepared.name) {
                    var r = n.prepared.axis;
                    if ("x" === r || "y" === r) {
                        var i = "x" === r ? "y" : "x";
                        e.page[i] = n.coords.start.page[i],
                        e.client[i] = n.coords.start.client[i],
                        e.delta[i] = 0
                    }
                }
            }
            var _ = {
                id: "actions/drag",
                install: function(t) {
                    var e = t.actions
                      , n = t.Interactable
                      , r = t.defaults;
                    n.prototype.draggable = _.draggable,
                    e.map.drag = _,
                    e.methodDict.drag = "draggable",
                    r.actions.drag = _.defaults
                },
                listeners: {
                    "interactions:before-action-move": T,
                    "interactions:action-resume": T,
                    "interactions:action-move": S,
                    "auto-start:check": function(t) {
                        var e = t.interaction
                          , n = t.interactable
                          , r = t.buttons
                          , i = n.options.drag;
                        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (r & n.options.drag.mouseButtons)))
                            return t.action = {
                                name: "drag",
                                axis: "start" === i.lockAxis ? i.startAxis : i.lockAxis
                            },
                            !1
                    }
                },
                draggable: function(t) {
                    return E.object(t) ? (this.options.drag.enabled = !1 !== t.enabled,
                    this.setPerAction("drag", t),
                    this.setOnEvents("drag", t),
                    /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis),
                    /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis),
                    this) : E.bool(t) ? (this.options.drag.enabled = t,
                    this) : this.options.drag
                },
                beforeMove: T,
                move: S,
                defaults: {
                    startAxis: "xy",
                    lockAxis: "xy"
                },
                getCursor: function() {
                    return "move"
                },
                filterEventType: function(t) {
                    return 0 === t.search("drag")
                }
            }
              , O = _
              , k = {
                init: function(t) {
                    var e = t;
                    k.document = e.document,
                    k.DocumentFragment = e.DocumentFragment || P,
                    k.SVGElement = e.SVGElement || P,
                    k.SVGSVGElement = e.SVGSVGElement || P,
                    k.SVGElementInstance = e.SVGElementInstance || P,
                    k.Element = e.Element || P,
                    k.HTMLElement = e.HTMLElement || k.Element,
                    k.Event = e.Event,
                    k.Touch = e.Touch || P,
                    k.PointerEvent = e.PointerEvent || e.MSPointerEvent
                },
                document: null,
                DocumentFragment: null,
                SVGElement: null,
                SVGSVGElement: null,
                SVGElementInstance: null,
                Element: null,
                HTMLElement: null,
                Event: null,
                Touch: null,
                PointerEvent: null
            };
            function P() {}
            var z = k
              , D = {
                init: function(t) {
                    var e = z.Element
                      , n = t.navigator || {};
                    D.supportsTouch = "ontouchstart"in t || E.func(t.DocumentTouch) && z.document instanceof t.DocumentTouch,
                    D.supportsPointerEvent = !1 !== n.pointerEnabled && !!z.PointerEvent,
                    D.isIOS = /iP(hone|od|ad)/.test(n.platform),
                    D.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion),
                    D.isIe9 = /MSIE 9/.test(n.userAgent),
                    D.isOperaMobile = "Opera" === n.appName && D.supportsTouch && /Presto/.test(n.userAgent),
                    D.prefixedMatchesSelector = "matches"in e.prototype ? "matches" : "webkitMatchesSelector"in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector"in e.prototype ? "mozMatchesSelector" : "oMatchesSelector"in e.prototype ? "oMatchesSelector" : "msMatchesSelector",
                    D.pEventTypes = D.supportsPointerEvent ? z.PointerEvent === t.MSPointerEvent ? {
                        up: "MSPointerUp",
                        down: "MSPointerDown",
                        over: "mouseover",
                        out: "mouseout",
                        move: "MSPointerMove",
                        cancel: "MSPointerCancel"
                    } : {
                        up: "pointerup",
                        down: "pointerdown",
                        over: "pointerover",
                        out: "pointerout",
                        move: "pointermove",
                        cancel: "pointercancel"
                    } : null,
                    D.wheelEvent = z.document && "onmousewheel"in z.document ? "mousewheel" : "wheel"
                },
                supportsTouch: null,
                supportsPointerEvent: null,
                isIOS7: null,
                isIOS: null,
                isIe9: null,
                isOperaMobile: null,
                prefixedMatchesSelector: null,
                pEventTypes: null,
                wheelEvent: null
            }
              , M = D;
            function I(t, e) {
                if (t.contains)
                    return t.contains(e);
                for (; e; ) {
                    if (e === t)
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function A(t, e) {
                for (; E.element(t); ) {
                    if (C(t, e))
                        return t;
                    t = R(t)
                }
                return null
            }
            function R(t) {
                var e = t.parentNode;
                if (E.docFrag(e)) {
                    for (; (e = e.host) && E.docFrag(e); )
                        ;
                    return e
                }
                return e
            }
            function C(t, e) {
                return m !== g && (e = e.replace(/\/deep\//g, " ")),
                t[M.prefixedMatchesSelector](e)
            }
            var j = function(t) {
                return t.parentNode || t.host
            };
            function F(t, e) {
                for (var n, r = [], i = t; (n = j(i)) && i !== e && n !== i.ownerDocument; )
                    r.unshift(i),
                    i = n;
                return r
            }
            function B(t, e, n) {
                for (; E.element(t); ) {
                    if (C(t, e))
                        return !0;
                    if ((t = R(t)) === n)
                        return C(t, e)
                }
                return !1
            }
            function X(t) {
                return t.correspondingUseElement || t
            }
            function L(t) {
                var e = t instanceof z.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
                return e && {
                    left: e.left,
                    right: e.right,
                    top: e.top,
                    bottom: e.bottom,
                    width: e.width || e.right - e.left,
                    height: e.height || e.bottom - e.top
                }
            }
            function N(t) {
                var e, n = L(t);
                if (!M.isIOS7 && n) {
                    var r = {
                        x: (e = (e = b(t)) || m).scrollX || e.document.documentElement.scrollLeft,
                        y: e.scrollY || e.document.documentElement.scrollTop
                    };
                    n.left += r.x,
                    n.right += r.x,
                    n.top += r.y,
                    n.bottom += r.y
                }
                return n
            }
            function Y(t) {
                for (var e = []; t; )
                    e.push(t),
                    t = R(t);
                return e
            }
            function W(t) {
                return !!E.string(t) && (z.document.querySelector(t),
                !0)
            }
            function V(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function q(t, e, n) {
                return "parent" === t ? R(n) : "self" === t ? e.getRect(n) : A(n, t)
            }
            function G(t, e, n, r) {
                var i = t;
                return E.string(i) ? i = q(i, e, n) : E.func(i) && (i = i.apply(void 0, r)),
                E.element(i) && (i = N(i)),
                i
            }
            function H(t) {
                return t && {
                    x: "x"in t ? t.x : t.left,
                    y: "y"in t ? t.y : t.top
                }
            }
            function U(t) {
                return !t || "x"in t && "y"in t || ((t = V({}, t)).x = t.left || 0,
                t.y = t.top || 0,
                t.width = t.width || (t.right || 0) - t.x,
                t.height = t.height || (t.bottom || 0) - t.y),
                t
            }
            function K(t, e, n) {
                t.left && (e.left += n.x),
                t.right && (e.right += n.x),
                t.top && (e.top += n.y),
                t.bottom && (e.bottom += n.y),
                e.width = e.right - e.left,
                e.height = e.bottom - e.top
            }
            function $(t, e, n) {
                var r = n && t.options[n];
                return H(G(r && r.origin || t.options.origin, t, e, [t && e])) || {
                    x: 0,
                    y: 0
                }
            }
            function J(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t) {
                    return !0
                }
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                if (r = r || {},
                E.string(t) && -1 !== t.search(" ") && (t = Q(t)),
                E.array(t))
                    return t.forEach((function(t) {
                        return J(t, e, n, r)
                    }
                    )),
                    r;
                if (E.object(t) && (e = t,
                t = ""),
                E.func(e) && n(t))
                    r[t] = r[t] || [],
                    r[t].push(e);
                else if (E.array(e))
                    for (var i = 0, o = e; i < o.length; i++) {
                        var a = o[i];
                        J(t, a, n, r)
                    }
                else if (E.object(e))
                    for (var s in e)
                        J(Q(s).map((function(e) {
                            return "".concat(t).concat(e)
                        }
                        )), e[s], n, r);
                return r
            }
            function Q(t) {
                return t.trim().split(/ +/)
            }
            var Z = function(t, e) {
                return Math.sqrt(t * t + e * e)
            }
              , tt = ["webkit", "moz"];
            function et(t, e) {
                t.__set || (t.__set = {});
                var n = function(n) {
                    if (tt.some((function(t) {
                        return 0 === n.indexOf(t)
                    }
                    )))
                        return 1;
                    "function" != typeof t[n] && "__set" !== n && Object.defineProperty(t, n, {
                        get: function() {
                            return n in t.__set ? t.__set[n] : t.__set[n] = e[n]
                        },
                        set: function(e) {
                            t.__set[n] = e
                        },
                        configurable: !0
                    })
                };
                for (var r in e)
                    n(r);
                return t
            }
            function nt(t, e) {
                t.page = t.page || {},
                t.page.x = e.page.x,
                t.page.y = e.page.y,
                t.client = t.client || {},
                t.client.x = e.client.x,
                t.client.y = e.client.y,
                t.timeStamp = e.timeStamp
            }
            function rt(t) {
                t.page.x = 0,
                t.page.y = 0,
                t.client.x = 0,
                t.client.y = 0
            }
            function it(t) {
                return t instanceof z.Event || t instanceof z.Touch
            }
            function ot(t, e, n) {
                return t = t || "page",
                (n = n || {}).x = e[t + "X"],
                n.y = e[t + "Y"],
                n
            }
            function at(t, e) {
                return e = e || {
                    x: 0,
                    y: 0
                },
                M.isOperaMobile && it(t) ? (ot("screen", t, e),
                e.x += window.scrollX,
                e.y += window.scrollY) : ot("page", t, e),
                e
            }
            function st(t) {
                return E.number(t.pointerId) ? t.pointerId : t.identifier
            }
            function ct(t, e, n) {
                var r = e.length > 1 ? ut(e) : e[0];
                at(r, t.page),
                function(t, e) {
                    e = e || {},
                    M.isOperaMobile && it(t) ? ot("screen", t, e) : ot("client", t, e)
                }(r, t.client),
                t.timeStamp = n
            }
            function lt(t) {
                var e = [];
                return E.array(t) ? (e[0] = t[0],
                e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0],
                e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0],
                e[1] = t.changedTouches[1]) : (e[0] = t.touches[0],
                e[1] = t.touches[1]),
                e
            }
            function ut(t) {
                for (var e = {
                    pageX: 0,
                    pageY: 0,
                    clientX: 0,
                    clientY: 0,
                    screenX: 0,
                    screenY: 0
                }, n = 0; n < t.length; n++) {
                    var r = t[n];
                    for (var i in e)
                        e[i] += r[i]
                }
                for (var o in e)
                    e[o] /= t.length;
                return e
            }
            function pt(t) {
                if (!t.length)
                    return null;
                var e = lt(t)
                  , n = Math.min(e[0].pageX, e[1].pageX)
                  , r = Math.min(e[0].pageY, e[1].pageY)
                  , i = Math.max(e[0].pageX, e[1].pageX)
                  , o = Math.max(e[0].pageY, e[1].pageY);
                return {
                    x: n,
                    y: r,
                    left: n,
                    top: r,
                    right: i,
                    bottom: o,
                    width: i - n,
                    height: o - r
                }
            }
            function ft(t, e) {
                var n = e + "X"
                  , r = e + "Y"
                  , i = lt(t)
                  , o = i[0][n] - i[1][n]
                  , a = i[0][r] - i[1][r];
                return Z(o, a)
            }
            function dt(t, e) {
                var n = e + "X"
                  , r = e + "Y"
                  , i = lt(t)
                  , o = i[1][n] - i[0][n]
                  , a = i[1][r] - i[0][r];
                return 180 * Math.atan2(a, o) / Math.PI
            }
            function ht(t) {
                return E.string(t.pointerType) ? t.pointerType : E.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof z.Touch ? "touch" : "mouse"
            }
            function vt(t) {
                var e = E.func(t.composedPath) ? t.composedPath() : t.path;
                return [X(e ? e[0] : t.target), X(t.currentTarget)]
            }
            var gt = function() {
                function t(e) {
                    i(this, t),
                    this.immediatePropagationStopped = !1,
                    this.propagationStopped = !1,
                    this._interaction = e
                }
                return a(t, [{
                    key: "preventDefault",
                    value: function() {}
                }, {
                    key: "stopPropagation",
                    value: function() {
                        this.propagationStopped = !0
                    }
                }, {
                    key: "stopImmediatePropagation",
                    value: function() {
                        this.immediatePropagationStopped = this.propagationStopped = !0
                    }
                }]),
                t
            }();
            Object.defineProperty(gt.prototype, "interaction", {
                get: function() {
                    return this._interaction._proxy
                },
                set: function() {}
            });
            var mt = function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    t.push(r)
                }
                return t
            }
              , yt = function(t) {
                return mt([], t)
            }
              , bt = function(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n], n, t))
                        return n;
                return -1
            }
              , xt = function(t, e) {
                return t[bt(t, e)]
            }
              , wt = function(t) {
                c(n, t);
                var e = f(n);
                function n(t, r, o) {
                    var a;
                    i(this, n),
                    (a = e.call(this, r._interaction)).dropzone = void 0,
                    a.dragEvent = void 0,
                    a.relatedTarget = void 0,
                    a.draggable = void 0,
                    a.propagationStopped = !1,
                    a.immediatePropagationStopped = !1;
                    var s = "dragleave" === o ? t.prev : t.cur
                      , c = s.element
                      , l = s.dropzone;
                    return a.type = o,
                    a.target = c,
                    a.currentTarget = c,
                    a.dropzone = l,
                    a.dragEvent = r,
                    a.relatedTarget = r.target,
                    a.draggable = r.interactable,
                    a.timeStamp = r.timeStamp,
                    a
                }
                return a(n, [{
                    key: "reject",
                    value: function() {
                        var t = this
                          , e = this._interaction.dropState;
                        if ("dropactivate" === this.type || this.dropzone && e.cur.dropzone === this.dropzone && e.cur.element === this.target)
                            if (e.prev.dropzone = this.dropzone,
                            e.prev.element = this.target,
                            e.rejected = !0,
                            e.events.enter = null,
                            this.stopImmediatePropagation(),
                            "dropactivate" === this.type) {
                                var r = e.activeDrops
                                  , i = bt(r, (function(e) {
                                    var n = e.dropzone
                                      , r = e.element;
                                    return n === t.dropzone && r === t.target
                                }
                                ));
                                e.activeDrops.splice(i, 1);
                                var o = new n(e,this.dragEvent,"dropdeactivate");
                                o.dropzone = this.dropzone,
                                o.target = this.target,
                                this.dropzone.fire(o)
                            } else
                                this.dropzone.fire(new n(e,this.dragEvent,"dragleave"))
                    }
                }, {
                    key: "preventDefault",
                    value: function() {}
                }, {
                    key: "stopPropagation",
                    value: function() {
                        this.propagationStopped = !0
                    }
                }, {
                    key: "stopImmediatePropagation",
                    value: function() {
                        this.immediatePropagationStopped = this.propagationStopped = !0
                    }
                }]),
                n
            }(gt);
            function Et(t, e) {
                for (var n = 0, r = t.slice(); n < r.length; n++) {
                    var i = r[n]
                      , o = i.dropzone
                      , a = i.element;
                    e.dropzone = o,
                    e.target = a,
                    o.fire(e),
                    e.propagationStopped = e.immediatePropagationStopped = !1
                }
            }
            function Tt(t, e) {
                for (var n = function(t, e) {
                    for (var n = [], r = 0, i = t.interactables.list; r < i.length; r++) {
                        var o = i[r];
                        if (o.options.drop.enabled) {
                            var a = o.options.drop.accept;
                            if (!(E.element(a) && a !== e || E.string(a) && !C(e, a) || E.func(a) && !a({
                                dropzone: o,
                                draggableElement: e
                            })))
                                for (var s = 0, c = o.getAllElements(); s < c.length; s++) {
                                    var l = c[s];
                                    l !== e && n.push({
                                        dropzone: o,
                                        element: l,
                                        rect: o.getRect(l)
                                    })
                                }
                        }
                    }
                    return n
                }(t, e), r = 0; r < n.length; r++) {
                    var i = n[r];
                    i.rect = i.dropzone.getRect(i.element)
                }
                return n
            }
            function St(t, e, n) {
                for (var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0, c = r.activeDrops; s < c.length; s++) {
                    var l = c[s]
                      , u = l.dropzone
                      , p = l.element
                      , f = l.rect
                      , d = u.dropCheck(e, n, i, o, p, f);
                    a.push(d ? p : null)
                }
                var h = function(t) {
                    for (var e, n, r, i = [], o = 0; o < t.length; o++) {
                        var a = t[o]
                          , s = t[e];
                        if (a && o !== e)
                            if (s) {
                                var c = j(a)
                                  , l = j(s);
                                if (c !== a.ownerDocument)
                                    if (l !== a.ownerDocument)
                                        if (c !== l) {
                                            i = i.length ? i : F(s);
                                            var u = void 0;
                                            if (s instanceof z.HTMLElement && a instanceof z.SVGElement && !(a instanceof z.SVGSVGElement)) {
                                                if (a === l)
                                                    continue;
                                                u = a.ownerSVGElement
                                            } else
                                                u = a;
                                            for (var p = F(u, s.ownerDocument), f = 0; p[f] && p[f] === i[f]; )
                                                f++;
                                            var d = [p[f - 1], p[f], i[f]];
                                            if (d[0])
                                                for (var h = d[0].lastChild; h; ) {
                                                    if (h === d[1]) {
                                                        e = o,
                                                        i = p;
                                                        break
                                                    }
                                                    if (h === d[2])
                                                        break;
                                                    h = h.previousSibling
                                                }
                                        } else
                                            r = s,
                                            (parseInt(b(n = a).getComputedStyle(n).zIndex, 10) || 0) >= (parseInt(b(r).getComputedStyle(r).zIndex, 10) || 0) && (e = o);
                                    else
                                        e = o
                            } else
                                e = o
                    }
                    return e
                }(a);
                return r.activeDrops[h] || null
            }
            function _t(t, e, n) {
                var r = t.dropState
                  , i = {
                    enter: null,
                    leave: null,
                    activate: null,
                    deactivate: null,
                    move: null,
                    drop: null
                };
                return "dragstart" === n.type && (i.activate = new wt(r,n,"dropactivate"),
                i.activate.target = null,
                i.activate.dropzone = null),
                "dragend" === n.type && (i.deactivate = new wt(r,n,"dropdeactivate"),
                i.deactivate.target = null,
                i.deactivate.dropzone = null),
                r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new wt(r,n,"dragleave"),
                n.dragLeave = i.leave.target = r.prev.element,
                n.prevDropzone = i.leave.dropzone = r.prev.dropzone),
                r.cur.dropzone && (i.enter = new wt(r,n,"dragenter"),
                n.dragEnter = r.cur.element,
                n.dropzone = r.cur.dropzone)),
                "dragend" === n.type && r.cur.dropzone && (i.drop = new wt(r,n,"drop"),
                n.dropzone = r.cur.dropzone,
                n.relatedTarget = r.cur.element),
                "dragmove" === n.type && r.cur.dropzone && (i.move = new wt(r,n,"dropmove"),
                n.dropzone = r.cur.dropzone)),
                i
            }
            function Ot(t, e) {
                var n = t.dropState
                  , r = n.activeDrops
                  , i = n.cur
                  , o = n.prev;
                e.leave && o.dropzone.fire(e.leave),
                e.enter && i.dropzone.fire(e.enter),
                e.move && i.dropzone.fire(e.move),
                e.drop && i.dropzone.fire(e.drop),
                e.deactivate && Et(r, e.deactivate),
                n.prev.dropzone = i.dropzone,
                n.prev.element = i.element
            }
            function kt(t, e) {
                var n = t.interaction
                  , r = t.iEvent
                  , i = t.event;
                if ("dragmove" === r.type || "dragend" === r.type) {
                    var o = n.dropState;
                    e.dynamicDrop && (o.activeDrops = Tt(e, n.element));
                    var a = r
                      , s = St(n, a, i);
                    o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element,
                    o.cur.dropzone = s && s.dropzone,
                    o.cur.element = s && s.element,
                    o.events = _t(n, 0, a)
                }
            }
            var Pt = {
                id: "actions/drop",
                install: function(t) {
                    var e = t.actions
                      , n = t.interactStatic
                      , r = t.Interactable
                      , i = t.defaults;
                    t.usePlugin(O),
                    r.prototype.dropzone = function(t) {
                        return function(t, e) {
                            if (E.object(e)) {
                                if (t.options.drop.enabled = !1 !== e.enabled,
                                e.listeners) {
                                    var n = J(e.listeners)
                                      , r = Object.keys(n).reduce((function(t, e) {
                                        return t[/^(enter|leave)/.test(e) ? "drag".concat(e) : /^(activate|deactivate|move)/.test(e) ? "drop".concat(e) : e] = n[e],
                                        t
                                    }
                                    ), {})
                                      , i = t.options.drop.listeners;
                                    i && t.off(i),
                                    t.on(r),
                                    t.options.drop.listeners = r
                                }
                                return E.func(e.ondrop) && t.on("drop", e.ondrop),
                                E.func(e.ondropactivate) && t.on("dropactivate", e.ondropactivate),
                                E.func(e.ondropdeactivate) && t.on("dropdeactivate", e.ondropdeactivate),
                                E.func(e.ondragenter) && t.on("dragenter", e.ondragenter),
                                E.func(e.ondragleave) && t.on("dragleave", e.ondragleave),
                                E.func(e.ondropmove) && t.on("dropmove", e.ondropmove),
                                /^(pointer|center)$/.test(e.overlap) ? t.options.drop.overlap = e.overlap : E.number(e.overlap) && (t.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)),
                                "accept"in e && (t.options.drop.accept = e.accept),
                                "checker"in e && (t.options.drop.checker = e.checker),
                                t
                            }
                            return E.bool(e) ? (t.options.drop.enabled = e,
                            t) : t.options.drop
                        }(this, t)
                    }
                    ,
                    r.prototype.dropCheck = function(t, e, n, r, i, o) {
                        return function(t, e, n, r, i, o, a) {
                            var s = !1;
                            if (!(a = a || t.getRect(o)))
                                return !!t.options.drop.checker && t.options.drop.checker(e, n, s, t, o, r, i);
                            var c = t.options.drop.overlap;
                            if ("pointer" === c) {
                                var l = $(r, i, "drag")
                                  , u = at(e);
                                u.x += l.x,
                                u.y += l.y;
                                var p = u.x > a.left && u.x < a.right
                                  , f = u.y > a.top && u.y < a.bottom;
                                s = p && f
                            }
                            var d = r.getRect(i);
                            if (d && "center" === c) {
                                var h = d.left + d.width / 2
                                  , v = d.top + d.height / 2;
                                s = h >= a.left && h <= a.right && v >= a.top && v <= a.bottom
                            }
                            return d && E.number(c) && (s = Math.max(0, Math.min(a.right, d.right) - Math.max(a.left, d.left)) * Math.max(0, Math.min(a.bottom, d.bottom) - Math.max(a.top, d.top)) / (d.width * d.height) >= c),
                            t.options.drop.checker && (s = t.options.drop.checker(e, n, s, t, o, r, i)),
                            s
                        }(this, t, e, n, r, i, o)
                    }
                    ,
                    n.dynamicDrop = function(e) {
                        return E.bool(e) ? (t.dynamicDrop = e,
                        n) : t.dynamicDrop
                    }
                    ,
                    V(e.phaselessTypes, {
                        dragenter: !0,
                        dragleave: !0,
                        dropactivate: !0,
                        dropdeactivate: !0,
                        dropmove: !0,
                        drop: !0
                    }),
                    e.methodDict.drop = "dropzone",
                    t.dynamicDrop = !1,
                    i.actions.drop = Pt.defaults
                },
                listeners: {
                    "interactions:before-action-start": function(t) {
                        var e = t.interaction;
                        "drag" === e.prepared.name && (e.dropState = {
                            cur: {
                                dropzone: null,
                                element: null
                            },
                            prev: {
                                dropzone: null,
                                element: null
                            },
                            rejected: null,
                            events: null,
                            activeDrops: []
                        })
                    },
                    "interactions:after-action-start": function(t, e) {
                        var n = t.interaction
                          , r = (t.event,
                        t.iEvent);
                        if ("drag" === n.prepared.name) {
                            var i = n.dropState;
                            i.activeDrops = [],
                            i.events = {},
                            i.activeDrops = Tt(e, n.element),
                            i.events = _t(n, 0, r),
                            i.events.activate && (Et(i.activeDrops, i.events.activate),
                            e.fire("actions/drop:start", {
                                interaction: n,
                                dragEvent: r
                            }))
                        }
                    },
                    "interactions:action-move": kt,
                    "interactions:after-action-move": function(t, e) {
                        var n = t.interaction
                          , r = t.iEvent;
                        if ("drag" === n.prepared.name) {
                            var i = n.dropState;
                            Ot(n, i.events),
                            e.fire("actions/drop:move", {
                                interaction: n,
                                dragEvent: r
                            }),
                            i.events = {}
                        }
                    },
                    "interactions:action-end": function(t, e) {
                        if ("drag" === t.interaction.prepared.name) {
                            var n = t.interaction
                              , r = t.iEvent;
                            kt(t, e),
                            Ot(n, n.dropState.events),
                            e.fire("actions/drop:end", {
                                interaction: n,
                                dragEvent: r
                            })
                        }
                    },
                    "interactions:stop": function(t) {
                        var e = t.interaction;
                        if ("drag" === e.prepared.name) {
                            var n = e.dropState;
                            n && (n.activeDrops = null,
                            n.events = null,
                            n.cur.dropzone = null,
                            n.cur.element = null,
                            n.prev.dropzone = null,
                            n.prev.element = null,
                            n.rejected = !1)
                        }
                    }
                },
                getActiveDrops: Tt,
                getDrop: St,
                getDropEvents: _t,
                fireDropEvents: Ot,
                filterEventType: function(t) {
                    return 0 === t.search("drag") || 0 === t.search("drop")
                },
                defaults: {
                    enabled: !1,
                    accept: null,
                    overlap: "pointer"
                }
            }
              , zt = Pt;
            function Dt(t) {
                var e = t.interaction
                  , n = t.iEvent
                  , r = t.phase;
                if ("gesture" === e.prepared.name) {
                    var i = e.pointers.map((function(t) {
                        return t.pointer
                    }
                    ))
                      , o = "start" === r
                      , a = "end" === r
                      , s = e.interactable.options.deltaSource;
                    if (n.touches = [i[0], i[1]],
                    o)
                        n.distance = ft(i, s),
                        n.box = pt(i),
                        n.scale = 1,
                        n.ds = 0,
                        n.angle = dt(i, s),
                        n.da = 0,
                        e.gesture.startDistance = n.distance,
                        e.gesture.startAngle = n.angle;
                    else if (a || e.pointers.length < 2) {
                        var c = e.prevEvent;
                        n.distance = c.distance,
                        n.box = c.box,
                        n.scale = c.scale,
                        n.ds = 0,
                        n.angle = c.angle,
                        n.da = 0
                    } else
                        n.distance = ft(i, s),
                        n.box = pt(i),
                        n.scale = n.distance / e.gesture.startDistance,
                        n.angle = dt(i, s),
                        n.ds = n.scale - e.gesture.scale,
                        n.da = n.angle - e.gesture.angle;
                    e.gesture.distance = n.distance,
                    e.gesture.angle = n.angle,
                    E.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale)
                }
            }
            var Mt = {
                id: "actions/gesture",
                before: ["actions/drag", "actions/resize"],
                install: function(t) {
                    var e = t.actions
                      , n = t.Interactable
                      , r = t.defaults;
                    n.prototype.gesturable = function(t) {
                        return E.object(t) ? (this.options.gesture.enabled = !1 !== t.enabled,
                        this.setPerAction("gesture", t),
                        this.setOnEvents("gesture", t),
                        this) : E.bool(t) ? (this.options.gesture.enabled = t,
                        this) : this.options.gesture
                    }
                    ,
                    e.map.gesture = Mt,
                    e.methodDict.gesture = "gesturable",
                    r.actions.gesture = Mt.defaults
                },
                listeners: {
                    "interactions:action-start": Dt,
                    "interactions:action-move": Dt,
                    "interactions:action-end": Dt,
                    "interactions:new": function(t) {
                        t.interaction.gesture = {
                            angle: 0,
                            distance: 0,
                            scale: 1,
                            startAngle: 0,
                            startDistance: 0
                        }
                    },
                    "auto-start:check": function(t) {
                        if (!(t.interaction.pointers.length < 2)) {
                            var e = t.interactable.options.gesture;
                            if (e && e.enabled)
                                return t.action = {
                                    name: "gesture"
                                },
                                !1
                        }
                    }
                },
                defaults: {},
                getCursor: function() {
                    return ""
                },
                filterEventType: function(t) {
                    return 0 === t.search("gesture")
                }
            }
              , It = Mt;
            function At(t, e, n, r, i, o, a) {
                if (!e)
                    return !1;
                if (!0 === e) {
                    var s = E.number(o.width) ? o.width : o.right - o.left
                      , c = E.number(o.height) ? o.height : o.bottom - o.top;
                    if (a = Math.min(a, Math.abs(("left" === t || "right" === t ? s : c) / 2)),
                    s < 0 && ("left" === t ? t = "right" : "right" === t && (t = "left")),
                    c < 0 && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")),
                    "left" === t) {
                        var l = s >= 0 ? o.left : o.right;
                        return n.x < l + a
                    }
                    if ("top" === t) {
                        var u = c >= 0 ? o.top : o.bottom;
                        return n.y < u + a
                    }
                    if ("right" === t)
                        return n.x > (s >= 0 ? o.right : o.left) - a;
                    if ("bottom" === t)
                        return n.y > (c >= 0 ? o.bottom : o.top) - a
                }
                return !!E.element(r) && (E.element(e) ? e === r : B(r, e, i))
            }
            function Rt(t) {
                var e = t.iEvent
                  , n = t.interaction;
                if ("resize" === n.prepared.name && n.resizeAxes) {
                    var r = e;
                    n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x,
                    r.axes = "xy") : (r.axes = n.resizeAxes,
                    "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0))
                }
            }
            var Ct, jt, Ft = {
                id: "actions/resize",
                before: ["actions/drag"],
                install: function(t) {
                    var e = t.actions
                      , n = t.browser
                      , r = t.Interactable
                      , i = t.defaults;
                    Ft.cursors = function(t) {
                        return t.isIe9 ? {
                            x: "e-resize",
                            y: "s-resize",
                            xy: "se-resize",
                            top: "n-resize",
                            left: "w-resize",
                            bottom: "s-resize",
                            right: "e-resize",
                            topleft: "se-resize",
                            bottomright: "se-resize",
                            topright: "ne-resize",
                            bottomleft: "ne-resize"
                        } : {
                            x: "ew-resize",
                            y: "ns-resize",
                            xy: "nwse-resize",
                            top: "ns-resize",
                            left: "ew-resize",
                            bottom: "ns-resize",
                            right: "ew-resize",
                            topleft: "nwse-resize",
                            bottomright: "nwse-resize",
                            topright: "nesw-resize",
                            bottomleft: "nesw-resize"
                        }
                    }(n),
                    Ft.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10,
                    r.prototype.resizable = function(e) {
                        return function(t, e, n) {
                            return E.object(e) ? (t.options.resize.enabled = !1 !== e.enabled,
                            t.setPerAction("resize", e),
                            t.setOnEvents("resize", e),
                            E.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t.options.resize.axis = e.axis : null === e.axis && (t.options.resize.axis = n.defaults.actions.resize.axis),
                            E.bool(e.preserveAspectRatio) ? t.options.resize.preserveAspectRatio = e.preserveAspectRatio : E.bool(e.square) && (t.options.resize.square = e.square),
                            t) : E.bool(e) ? (t.options.resize.enabled = e,
                            t) : t.options.resize
                        }(this, e, t)
                    }
                    ,
                    e.map.resize = Ft,
                    e.methodDict.resize = "resizable",
                    i.actions.resize = Ft.defaults
                },
                listeners: {
                    "interactions:new": function(t) {
                        t.interaction.resizeAxes = "xy"
                    },
                    "interactions:action-start": function(t) {
                        !function(t) {
                            var e = t.iEvent
                              , n = t.interaction;
                            if ("resize" === n.prepared.name && n.prepared.edges) {
                                var r = e
                                  , i = n.rect;
                                n._rects = {
                                    start: V({}, i),
                                    corrected: V({}, i),
                                    previous: V({}, i),
                                    delta: {
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        top: 0,
                                        bottom: 0,
                                        height: 0
                                    }
                                },
                                r.edges = n.prepared.edges,
                                r.rect = n._rects.corrected,
                                r.deltaRect = n._rects.delta
                            }
                        }(t),
                        Rt(t)
                    },
                    "interactions:action-move": function(t) {
                        !function(t) {
                            var e = t.iEvent
                              , n = t.interaction;
                            if ("resize" === n.prepared.name && n.prepared.edges) {
                                var r = e
                                  , i = n.interactable.options.resize.invert
                                  , o = "reposition" === i || "negate" === i
                                  , a = n.rect
                                  , s = n._rects
                                  , c = s.start
                                  , l = s.corrected
                                  , u = s.delta
                                  , p = s.previous;
                                if (V(p, l),
                                o) {
                                    if (V(l, a),
                                    "reposition" === i) {
                                        if (l.top > l.bottom) {
                                            var f = l.top;
                                            l.top = l.bottom,
                                            l.bottom = f
                                        }
                                        if (l.left > l.right) {
                                            var d = l.left;
                                            l.left = l.right,
                                            l.right = d
                                        }
                                    }
                                } else
                                    l.top = Math.min(a.top, c.bottom),
                                    l.bottom = Math.max(a.bottom, c.top),
                                    l.left = Math.min(a.left, c.right),
                                    l.right = Math.max(a.right, c.left);
                                for (var h in l.width = l.right - l.left,
                                l.height = l.bottom - l.top,
                                l)
                                    u[h] = l[h] - p[h];
                                r.edges = n.prepared.edges,
                                r.rect = l,
                                r.deltaRect = u
                            }
                        }(t),
                        Rt(t)
                    },
                    "interactions:action-end": function(t) {
                        var e = t.iEvent
                          , n = t.interaction;
                        if ("resize" === n.prepared.name && n.prepared.edges) {
                            var r = e;
                            r.edges = n.prepared.edges,
                            r.rect = n._rects.corrected,
                            r.deltaRect = n._rects.delta
                        }
                    },
                    "auto-start:check": function(t) {
                        var e = t.interaction
                          , n = t.interactable
                          , r = t.element
                          , i = t.rect
                          , o = t.buttons;
                        if (i) {
                            var a = V({}, e.coords.cur.page)
                              , s = n.options.resize;
                            if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (o & s.mouseButtons))) {
                                if (E.object(s.edges)) {
                                    var c = {
                                        left: !1,
                                        right: !1,
                                        top: !1,
                                        bottom: !1
                                    };
                                    for (var l in c)
                                        c[l] = At(l, s.edges[l], a, e._latestPointer.eventTarget, r, i, s.margin || Ft.defaultMargin);
                                    c.left = c.left && !c.right,
                                    c.top = c.top && !c.bottom,
                                    (c.left || c.right || c.top || c.bottom) && (t.action = {
                                        name: "resize",
                                        edges: c
                                    })
                                } else {
                                    var u = "y" !== s.axis && a.x > i.right - Ft.defaultMargin
                                      , p = "x" !== s.axis && a.y > i.bottom - Ft.defaultMargin;
                                    (u || p) && (t.action = {
                                        name: "resize",
                                        axes: (u ? "x" : "") + (p ? "y" : "")
                                    })
                                }
                                return !t.action && void 0
                            }
                        }
                    }
                },
                defaults: {
                    square: !1,
                    preserveAspectRatio: !1,
                    axis: "xy",
                    margin: NaN,
                    edges: null,
                    invert: "none"
                },
                cursors: null,
                getCursor: function(t) {
                    var e = t.edges
                      , n = t.axis
                      , r = t.name
                      , i = Ft.cursors
                      , o = null;
                    if (n)
                        o = i[r + n];
                    else if (e) {
                        for (var a = "", s = 0, c = ["top", "bottom", "left", "right"]; s < c.length; s++) {
                            var l = c[s];
                            e[l] && (a += l)
                        }
                        o = i[a]
                    }
                    return o
                },
                filterEventType: function(t) {
                    return 0 === t.search("resize")
                },
                defaultMargin: null
            }, Bt = Ft, Xt = {
                id: "actions",
                install: function(t) {
                    t.usePlugin(It),
                    t.usePlugin(Bt),
                    t.usePlugin(O),
                    t.usePlugin(zt)
                }
            }, Lt = 0, Nt = {
                request: function(t) {
                    return Ct(t)
                },
                cancel: function(t) {
                    return jt(t)
                },
                init: function(t) {
                    if (Ct = t.requestAnimationFrame,
                    jt = t.cancelAnimationFrame,
                    !Ct)
                        for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
                            var r = e[n];
                            Ct = t["".concat(r, "RequestAnimationFrame")],
                            jt = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")]
                        }
                    Ct = Ct && Ct.bind(t),
                    jt = jt && jt.bind(t),
                    Ct || (Ct = function(e) {
                        var n = Date.now()
                          , r = Math.max(0, 16 - (n - Lt))
                          , i = t.setTimeout((function() {
                            e(n + r)
                        }
                        ), r);
                        return Lt = n + r,
                        i
                    }
                    ,
                    jt = function(t) {
                        return clearTimeout(t)
                    }
                    )
                }
            }, Yt = {
                defaults: {
                    enabled: !1,
                    margin: 60,
                    container: null,
                    speed: 300
                },
                now: Date.now,
                interaction: null,
                i: 0,
                x: 0,
                y: 0,
                isScrolling: !1,
                prevTime: 0,
                margin: 0,
                speed: 0,
                start: function(t) {
                    Yt.isScrolling = !0,
                    Nt.cancel(Yt.i),
                    t.autoScroll = Yt,
                    Yt.interaction = t,
                    Yt.prevTime = Yt.now(),
                    Yt.i = Nt.request(Yt.scroll)
                },
                stop: function() {
                    Yt.isScrolling = !1,
                    Yt.interaction && (Yt.interaction.autoScroll = null),
                    Nt.cancel(Yt.i)
                },
                scroll: function() {
                    var t = Yt.interaction
                      , e = t.interactable
                      , n = t.element
                      , r = t.prepared.name
                      , i = e.options[r].autoScroll
                      , o = Wt(i.container, e, n)
                      , a = Yt.now()
                      , s = (a - Yt.prevTime) / 1e3
                      , c = i.speed * s;
                    if (c >= 1) {
                        var l = {
                            x: Yt.x * c,
                            y: Yt.y * c
                        };
                        if (l.x || l.y) {
                            var u = Vt(o);
                            E.window(o) ? o.scrollBy(l.x, l.y) : o && (o.scrollLeft += l.x,
                            o.scrollTop += l.y);
                            var p = Vt(o)
                              , f = {
                                x: p.x - u.x,
                                y: p.y - u.y
                            };
                            (f.x || f.y) && e.fire({
                                type: "autoscroll",
                                target: n,
                                interactable: e,
                                delta: f,
                                interaction: t,
                                container: o
                            })
                        }
                        Yt.prevTime = a
                    }
                    Yt.isScrolling && (Nt.cancel(Yt.i),
                    Yt.i = Nt.request(Yt.scroll))
                },
                check: function(t, e) {
                    var n;
                    return null == (n = t.options[e].autoScroll) ? void 0 : n.enabled
                },
                onInteractionMove: function(t) {
                    var e = t.interaction
                      , n = t.pointer;
                    if (e.interacting() && Yt.check(e.interactable, e.prepared.name))
                        if (e.simulation)
                            Yt.x = Yt.y = 0;
                        else {
                            var r, i, o, a, s = e.interactable, c = e.element, l = e.prepared.name, u = s.options[l].autoScroll, p = Wt(u.container, s, c);
                            if (E.window(p))
                                a = n.clientX < Yt.margin,
                                r = n.clientY < Yt.margin,
                                i = n.clientX > p.innerWidth - Yt.margin,
                                o = n.clientY > p.innerHeight - Yt.margin;
                            else {
                                var f = L(p);
                                a = n.clientX < f.left + Yt.margin,
                                r = n.clientY < f.top + Yt.margin,
                                i = n.clientX > f.right - Yt.margin,
                                o = n.clientY > f.bottom - Yt.margin
                            }
                            Yt.x = i ? 1 : a ? -1 : 0,
                            Yt.y = o ? 1 : r ? -1 : 0,
                            Yt.isScrolling || (Yt.margin = u.margin,
                            Yt.speed = u.speed,
                            Yt.start(e))
                        }
                }
            };
            function Wt(t, e, n) {
                return (E.string(t) ? q(t, e, n) : t) || b(n)
            }
            function Vt(t) {
                return E.window(t) && (t = window.document.body),
                {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }
            }
            var qt = {
                id: "auto-scroll",
                install: function(t) {
                    var e = t.defaults
                      , n = t.actions;
                    t.autoScroll = Yt,
                    Yt.now = function() {
                        return t.now()
                    }
                    ,
                    n.phaselessTypes.autoscroll = !0,
                    e.perAction.autoScroll = Yt.defaults
                },
                listeners: {
                    "interactions:new": function(t) {
                        t.interaction.autoScroll = null
                    },
                    "interactions:destroy": function(t) {
                        t.interaction.autoScroll = null,
                        Yt.stop(),
                        Yt.interaction && (Yt.interaction = null)
                    },
                    "interactions:stop": Yt.stop,
                    "interactions:action-move": function(t) {
                        return Yt.onInteractionMove(t)
                    }
                }
            }
              , Gt = qt;
            function Ht(t, e) {
                var n = !1;
                return function() {
                    return n || (m.console.warn(e),
                    n = !0),
                    t.apply(this, arguments)
                }
            }
            function Ut(t, e) {
                return t.name = e.name,
                t.axis = e.axis,
                t.edges = e.edges,
                t
            }
            function Kt(t) {
                return E.bool(t) ? (this.options.styleCursor = t,
                this) : null === t ? (delete this.options.styleCursor,
                this) : this.options.styleCursor
            }
            function $t(t) {
                return E.func(t) ? (this.options.actionChecker = t,
                this) : null === t ? (delete this.options.actionChecker,
                this) : this.options.actionChecker
            }
            var Jt = {
                id: "auto-start/interactableMethods",
                install: function(t) {
                    var e = t.Interactable;
                    e.prototype.getAction = function(e, n, r, i) {
                        var o = function(t, e, n, r, i) {
                            var o = t.getRect(r)
                              , a = {
                                action: null,
                                interactable: t,
                                interaction: n,
                                element: r,
                                rect: o,
                                buttons: e.buttons || {
                                    0: 1,
                                    1: 4,
                                    3: 8,
                                    4: 16
                                }[e.button]
                            };
                            return i.fire("auto-start:check", a),
                            a.action
                        }(this, n, r, i, t);
                        return this.options.actionChecker ? this.options.actionChecker(e, n, o, this, i, r) : o
                    }
                    ,
                    e.prototype.ignoreFrom = Ht((function(t) {
                        return this._backCompatOption("ignoreFrom", t)
                    }
                    ), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),
                    e.prototype.allowFrom = Ht((function(t) {
                        return this._backCompatOption("allowFrom", t)
                    }
                    ), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),
                    e.prototype.actionChecker = $t,
                    e.prototype.styleCursor = Kt
                }
            };
            function Qt(t, e, n, r, i) {
                return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && ne(e, n, t, i) ? t : null
            }
            function Zt(t, e, n, r, i, o, a) {
                for (var s = 0, c = r.length; s < c; s++) {
                    var l = r[s]
                      , u = i[s]
                      , p = l.getAction(e, n, t, u);
                    if (p) {
                        var f = Qt(p, l, u, o, a);
                        if (f)
                            return {
                                action: f,
                                interactable: l,
                                element: u
                            }
                    }
                }
                return {
                    action: null,
                    interactable: null,
                    element: null
                }
            }
            function te(t, e, n, r, i) {
                var o = []
                  , a = []
                  , s = r;
                function c(t) {
                    o.push(t),
                    a.push(s)
                }
                for (; E.element(s); ) {
                    o = [],
                    a = [],
                    i.interactables.forEachMatch(s, c);
                    var l = Zt(t, e, n, o, a, r, i);
                    if (l.action && !l.interactable.options[l.action.name].manualStart)
                        return l;
                    s = R(s)
                }
                return {
                    action: null,
                    interactable: null,
                    element: null
                }
            }
            function ee(t, e, n) {
                var r = e.action
                  , i = e.interactable
                  , o = e.element;
                r = r || {
                    name: null
                },
                t.interactable = i,
                t.element = o,
                Ut(t.prepared, r),
                t.rect = i && r.name ? i.getRect(o) : null,
                oe(t, n),
                n.fire("autoStart:prepared", {
                    interaction: t
                })
            }
            function ne(t, e, n, r) {
                var i = t.options
                  , o = i[n.name].max
                  , a = i[n.name].maxPerElement
                  , s = r.autoStart.maxInteractions
                  , c = 0
                  , l = 0
                  , u = 0;
                if (!(o && a && s))
                    return !1;
                for (var p = 0, f = r.interactions.list; p < f.length; p++) {
                    var d = f[p]
                      , h = d.prepared.name;
                    if (d.interacting()) {
                        if (++c >= s)
                            return !1;
                        if (d.interactable === t) {
                            if ((l += h === n.name ? 1 : 0) >= o)
                                return !1;
                            if (d.element === e && (u++,
                            h === n.name && u >= a))
                                return !1
                        }
                    }
                }
                return s > 0
            }
            function re(t, e) {
                return E.number(t) ? (e.autoStart.maxInteractions = t,
                this) : e.autoStart.maxInteractions
            }
            function ie(t, e, n) {
                var r = n.autoStart.cursorElement;
                r && r !== t && (r.style.cursor = ""),
                t.ownerDocument.documentElement.style.cursor = e,
                t.style.cursor = e,
                n.autoStart.cursorElement = e ? t : null
            }
            function oe(t, e) {
                var n = t.interactable
                  , r = t.element
                  , i = t.prepared;
                if ("mouse" === t.pointerType && n && n.options.styleCursor) {
                    var o = "";
                    if (i.name) {
                        var a = n.options[i.name].cursorChecker;
                        o = E.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i)
                    }
                    ie(t.element, o || "", e)
                } else
                    e.autoStart.cursorElement && ie(e.autoStart.cursorElement, "", e)
            }
            var ae = {
                id: "auto-start/base",
                before: ["actions"],
                install: function(t) {
                    var e = t.interactStatic
                      , n = t.defaults;
                    t.usePlugin(Jt),
                    n.base.actionChecker = null,
                    n.base.styleCursor = !0,
                    V(n.perAction, {
                        manualStart: !1,
                        max: 1 / 0,
                        maxPerElement: 1,
                        allowFrom: null,
                        ignoreFrom: null,
                        mouseButtons: 1
                    }),
                    e.maxInteractions = function(e) {
                        return re(e, t)
                    }
                    ,
                    t.autoStart = {
                        maxInteractions: 1 / 0,
                        withinInteractionLimit: ne,
                        cursorElement: null
                    }
                },
                listeners: {
                    "interactions:down": function(t, e) {
                        var n = t.interaction
                          , r = t.pointer
                          , i = t.event
                          , o = t.eventTarget;
                        n.interacting() || ee(n, te(n, r, i, o, e), e)
                    },
                    "interactions:move": function(t, e) {
                        !function(t, e) {
                            var n = t.interaction
                              , r = t.pointer
                              , i = t.event
                              , o = t.eventTarget;
                            "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || ee(n, te(n, r, i, o, e), e)
                        }(t, e),
                        function(t, e) {
                            var n = t.interaction;
                            if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
                                e.fire("autoStart:before-start", t);
                                var r = n.interactable
                                  , i = n.prepared.name;
                                i && r && (r.options[i].manualStart || !ne(r, n.element, n.prepared, e) ? n.stop() : (n.start(n.prepared, r, n.element),
                                oe(n, e)))
                            }
                        }(t, e)
                    },
                    "interactions:stop": function(t, e) {
                        var n = t.interaction
                          , r = n.interactable;
                        r && r.options.styleCursor && ie(n.element, "", e)
                    }
                },
                maxInteractions: re,
                withinInteractionLimit: ne,
                validateAction: Qt
            }
              , se = ae
              , ce = {
                id: "auto-start/dragAxis",
                listeners: {
                    "autoStart:before-start": function(t, e) {
                        var n = t.interaction
                          , r = t.eventTarget
                          , i = t.dx
                          , o = t.dy;
                        if ("drag" === n.prepared.name) {
                            var a = Math.abs(i)
                              , s = Math.abs(o)
                              , c = n.interactable.options.drag
                              , l = c.startAxis
                              , u = a > s ? "x" : a < s ? "y" : "xy";
                            if (n.prepared.axis = "start" === c.lockAxis ? u[0] : c.lockAxis,
                            "xy" !== u && "xy" !== l && l !== u) {
                                n.prepared.name = null;
                                for (var p = r, f = function(t) {
                                    if (t !== n.interactable) {
                                        var i = n.interactable.options.drag;
                                        if (!i.manualStart && t.testIgnoreAllow(i, p, r)) {
                                            var o = t.getAction(n.downPointer, n.downEvent, n, p);
                                            if (o && "drag" === o.name && function(t, e) {
                                                if (!e)
                                                    return !1;
                                                var n = e.options.drag.startAxis;
                                                return "xy" === t || "xy" === n || n === t
                                            }(u, t) && se.validateAction(o, t, p, r, e))
                                                return t
                                        }
                                    }
                                }; E.element(p); ) {
                                    var d = e.interactables.forEachMatch(p, f);
                                    if (d) {
                                        n.prepared.name = "drag",
                                        n.interactable = d,
                                        n.element = p;
                                        break
                                    }
                                    p = R(p)
                                }
                            }
                        }
                    }
                }
            };
            function le(t) {
                var e = t.prepared && t.prepared.name;
                if (!e)
                    return null;
                var n = t.interactable.options;
                return n[e].hold || n[e].delay
            }
            var ue = {
                id: "auto-start/hold",
                install: function(t) {
                    var e = t.defaults;
                    t.usePlugin(se),
                    e.perAction.hold = 0,
                    e.perAction.delay = 0
                },
                listeners: {
                    "interactions:new": function(t) {
                        t.interaction.autoStartHoldTimer = null
                    },
                    "autoStart:prepared": function(t) {
                        var e = t.interaction
                          , n = le(e);
                        n > 0 && (e.autoStartHoldTimer = setTimeout((function() {
                            e.start(e.prepared, e.interactable, e.element)
                        }
                        ), n))
                    },
                    "interactions:move": function(t) {
                        var e = t.interaction
                          , n = t.duplicate;
                        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer),
                        e.autoStartHoldTimer = null)
                    },
                    "autoStart:before-start": function(t) {
                        var e = t.interaction;
                        le(e) > 0 && (e.prepared.name = null)
                    }
                },
                getHoldDuration: le
            }
              , pe = ue
              , fe = {
                id: "auto-start",
                install: function(t) {
                    t.usePlugin(se),
                    t.usePlugin(pe),
                    t.usePlugin(ce)
                }
            }
              , de = function(t) {
                return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t,
                this) : E.bool(t) ? (this.options.preventDefault = t ? "always" : "never",
                this) : this.options.preventDefault
            };
            function he(t) {
                var e = t.interaction
                  , n = t.event;
                e.interactable && e.interactable.checkAndPreventDefault(n)
            }
            var ve = {
                id: "core/interactablePreventDefault",
                install: function(t) {
                    var e = t.Interactable;
                    e.prototype.preventDefault = de,
                    e.prototype.checkAndPreventDefault = function(e) {
                        return function(t, e, n) {
                            var r = t.options.preventDefault;
                            if ("never" !== r)
                                if ("always" !== r) {
                                    if (e.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
                                        var i = b(n.target).document
                                          , o = e.getDocOptions(i);
                                        if (!o || !o.events || !1 !== o.events.passive)
                                            return
                                    }
                                    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || E.element(n.target) && C(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault()
                                } else
                                    n.preventDefault()
                        }(this, t, e)
                    }
                    ,
                    t.interactions.docEvents.push({
                        type: "dragstart",
                        listener: function(e) {
                            for (var n = 0, r = t.interactions.list; n < r.length; n++) {
                                var i = r[n];
                                if (i.element && (i.element === e.target || I(i.element, e.target)))
                                    return void i.interactable.checkAndPreventDefault(e)
                            }
                        }
                    })
                },
                listeners: ["down", "move", "up", "cancel"].reduce((function(t, e) {
                    return t["interactions:".concat(e)] = he,
                    t
                }
                ), {})
            };
            function ge(t, e) {
                if (e.phaselessTypes[t])
                    return !0;
                for (var n in e.map)
                    if (0 === t.indexOf(n) && t.substr(n.length)in e.phases)
                        return !0;
                return !1
            }
            function me(t) {
                var e = {};
                for (var n in t) {
                    var r = t[n];
                    E.plainObject(r) ? e[n] = me(r) : E.array(r) ? e[n] = yt(r) : e[n] = r
                }
                return e
            }
            var ye = function() {
                function t(e) {
                    i(this, t),
                    this.states = [],
                    this.startOffset = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    this.startDelta = void 0,
                    this.result = void 0,
                    this.endResult = void 0,
                    this.startEdges = void 0,
                    this.edges = void 0,
                    this.interaction = void 0,
                    this.interaction = e,
                    this.result = be(),
                    this.edges = {
                        left: !1,
                        right: !1,
                        top: !1,
                        bottom: !1
                    }
                }
                return a(t, [{
                    key: "start",
                    value: function(t, e) {
                        var n, r, i = t.phase, o = this.interaction, a = function(t) {
                            var e = t.interactable.options[t.prepared.name]
                              , n = e.modifiers;
                            return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(t) {
                                var n = e[t];
                                return n && n.enabled && {
                                    options: n,
                                    methods: n._methods
                                }
                            }
                            )).filter((function(t) {
                                return !!t
                            }
                            ))
                        }(o);
                        this.prepareStates(a),
                        this.startEdges = V({}, o.edges),
                        this.edges = V({}, this.startEdges),
                        this.startOffset = (r = e,
                        (n = o.rect) ? {
                            left: r.x - n.left,
                            top: r.y - n.top,
                            right: n.right - r.x,
                            bottom: n.bottom - r.y
                        } : {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        }),
                        this.startDelta = {
                            x: 0,
                            y: 0
                        };
                        var s = this.fillArg({
                            phase: i,
                            pageCoords: e,
                            preEnd: !1
                        });
                        return this.result = be(),
                        this.startAll(s),
                        this.result = this.setAll(s)
                    }
                }, {
                    key: "fillArg",
                    value: function(t) {
                        var e = this.interaction;
                        return t.interaction = e,
                        t.interactable = e.interactable,
                        t.element = e.element,
                        t.rect || (t.rect = e.rect),
                        t.edges || (t.edges = this.startEdges),
                        t.startOffset = this.startOffset,
                        t
                    }
                }, {
                    key: "startAll",
                    value: function(t) {
                        for (var e = 0, n = this.states; e < n.length; e++) {
                            var r = n[e];
                            r.methods.start && (t.state = r,
                            r.methods.start(t))
                        }
                    }
                }, {
                    key: "setAll",
                    value: function(t) {
                        var e = t.phase
                          , n = t.preEnd
                          , r = t.skipModifiers
                          , i = t.rect
                          , o = t.edges;
                        t.coords = V({}, t.pageCoords),
                        t.rect = V({}, i),
                        t.edges = V({}, o);
                        for (var a = r ? this.states.slice(r) : this.states, s = be(t.coords, t.rect), c = 0; c < a.length; c++) {
                            var l, u = a[c], p = u.options, f = V({}, t.coords), d = null;
                            null != (l = u.methods) && l.set && this.shouldDo(p, n, e) && (t.state = u,
                            d = u.methods.set(t),
                            K(t.edges, t.rect, {
                                x: t.coords.x - f.x,
                                y: t.coords.y - f.y
                            })),
                            s.eventProps.push(d)
                        }
                        V(this.edges, t.edges),
                        s.delta.x = t.coords.x - t.pageCoords.x,
                        s.delta.y = t.coords.y - t.pageCoords.y,
                        s.rectDelta.left = t.rect.left - i.left,
                        s.rectDelta.right = t.rect.right - i.right,
                        s.rectDelta.top = t.rect.top - i.top,
                        s.rectDelta.bottom = t.rect.bottom - i.bottom;
                        var h = this.result.coords
                          , v = this.result.rect;
                        if (h && v) {
                            var g = s.rect.left !== v.left || s.rect.right !== v.right || s.rect.top !== v.top || s.rect.bottom !== v.bottom;
                            s.changed = g || h.x !== s.coords.x || h.y !== s.coords.y
                        }
                        return s
                    }
                }, {
                    key: "applyToInteraction",
                    value: function(t) {
                        var e = this.interaction
                          , n = t.phase
                          , r = e.coords.cur
                          , i = e.coords.start
                          , o = this.result
                          , a = this.startDelta
                          , s = o.delta;
                        "start" === n && V(this.startDelta, o.delta);
                        for (var c = 0, l = [[i, a], [r, s]]; c < l.length; c++) {
                            var u = l[c]
                              , p = u[0]
                              , f = u[1];
                            p.page.x += f.x,
                            p.page.y += f.y,
                            p.client.x += f.x,
                            p.client.y += f.y
                        }
                        var d = this.result.rectDelta
                          , h = t.rect || e.rect;
                        h.left += d.left,
                        h.right += d.right,
                        h.top += d.top,
                        h.bottom += d.bottom,
                        h.width = h.right - h.left,
                        h.height = h.bottom - h.top
                    }
                }, {
                    key: "setAndApply",
                    value: function(t) {
                        var e = this.interaction
                          , n = t.phase
                          , r = t.preEnd
                          , i = t.skipModifiers
                          , o = this.setAll(this.fillArg({
                            preEnd: r,
                            phase: n,
                            pageCoords: t.modifiedCoords || e.coords.cur.page
                        }));
                        if (this.result = o,
                        !o.changed && (!i || i < this.states.length) && e.interacting())
                            return !1;
                        if (t.modifiedCoords) {
                            var a = e.coords.cur.page
                              , s = {
                                x: t.modifiedCoords.x - a.x,
                                y: t.modifiedCoords.y - a.y
                            };
                            o.coords.x += s.x,
                            o.coords.y += s.y,
                            o.delta.x += s.x,
                            o.delta.y += s.y
                        }
                        this.applyToInteraction(t)
                    }
                }, {
                    key: "beforeEnd",
                    value: function(t) {
                        var e = t.interaction
                          , n = t.event
                          , r = this.states;
                        if (r && r.length) {
                            for (var i = !1, o = 0; o < r.length; o++) {
                                var a = r[o];
                                t.state = a;
                                var s = a.options
                                  , c = a.methods
                                  , l = c.beforeEnd && c.beforeEnd(t);
                                if (l)
                                    return this.endResult = l,
                                    !1;
                                i = i || !i && this.shouldDo(s, !0, t.phase, !0)
                            }
                            i && e.move({
                                event: n,
                                preEnd: !0
                            })
                        }
                    }
                }, {
                    key: "stop",
                    value: function(t) {
                        var e = t.interaction;
                        if (this.states && this.states.length) {
                            var n = V({
                                states: this.states,
                                interactable: e.interactable,
                                element: e.element,
                                rect: null
                            }, t);
                            this.fillArg(n);
                            for (var r = 0, i = this.states; r < i.length; r++) {
                                var o = i[r];
                                n.state = o,
                                o.methods.stop && o.methods.stop(n)
                            }
                            this.states = null,
                            this.endResult = null
                        }
                    }
                }, {
                    key: "prepareStates",
                    value: function(t) {
                        this.states = [];
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e]
                              , r = n.options
                              , i = n.methods
                              , o = n.name;
                            this.states.push({
                                options: r,
                                methods: i,
                                index: e,
                                name: o
                            })
                        }
                        return this.states
                    }
                }, {
                    key: "restoreInteractionCoords",
                    value: function(t) {
                        var e = t.interaction
                          , n = e.coords
                          , r = e.rect
                          , i = e.modification;
                        if (i.result) {
                            for (var o = i.startDelta, a = i.result, s = a.delta, c = a.rectDelta, l = 0, u = [[n.start, o], [n.cur, s]]; l < u.length; l++) {
                                var p = u[l]
                                  , f = p[0]
                                  , d = p[1];
                                f.page.x -= d.x,
                                f.page.y -= d.y,
                                f.client.x -= d.x,
                                f.client.y -= d.y
                            }
                            r.left -= c.left,
                            r.right -= c.right,
                            r.top -= c.top,
                            r.bottom -= c.bottom
                        }
                    }
                }, {
                    key: "shouldDo",
                    value: function(t, e, n, r) {
                        return !(!t || !1 === t.enabled || r && !t.endOnly || t.endOnly && !e || "start" === n && !t.setStart)
                    }
                }, {
                    key: "copyFrom",
                    value: function(t) {
                        this.startOffset = t.startOffset,
                        this.startDelta = t.startDelta,
                        this.startEdges = t.startEdges,
                        this.edges = t.edges,
                        this.states = t.states.map((function(t) {
                            return me(t)
                        }
                        )),
                        this.result = be(V({}, t.result.coords), V({}, t.result.rect))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        for (var t in this)
                            this[t] = null
                    }
                }]),
                t
            }();
            function be(t, e) {
                return {
                    rect: e,
                    coords: t,
                    delta: {
                        x: 0,
                        y: 0
                    },
                    rectDelta: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    eventProps: [],
                    changed: !0
                }
            }
            function xe(t, e) {
                var n = t.defaults
                  , r = {
                    start: t.start,
                    set: t.set,
                    beforeEnd: t.beforeEnd,
                    stop: t.stop
                }
                  , i = function(t) {
                    var i = t || {};
                    for (var o in i.enabled = !1 !== i.enabled,
                    n)
                        o in i || (i[o] = n[o]);
                    var a = {
                        options: i,
                        methods: r,
                        name: e,
                        enable: function() {
                            return i.enabled = !0,
                            a
                        },
                        disable: function() {
                            return i.enabled = !1,
                            a
                        }
                    };
                    return a
                };
                return e && "string" == typeof e && (i._defaults = n,
                i._methods = r),
                i
            }
            function we(t) {
                var e = t.iEvent
                  , n = t.interaction.modification.result;
                n && (e.modifiers = n.eventProps)
            }
            var Ee = {
                id: "modifiers/base",
                before: ["actions"],
                install: function(t) {
                    t.defaults.perAction.modifiers = []
                },
                listeners: {
                    "interactions:new": function(t) {
                        var e = t.interaction;
                        e.modification = new ye(e)
                    },
                    "interactions:before-action-start": function(t) {
                        var e = t.interaction
                          , n = t.interaction.modification;
                        n.start(t, e.coords.start.page),
                        e.edges = n.edges,
                        n.applyToInteraction(t)
                    },
                    "interactions:before-action-move": function(t) {
                        var e = t.interaction
                          , n = e.modification
                          , r = n.setAndApply(t);
                        return e.edges = n.edges,
                        r
                    },
                    "interactions:before-action-end": function(t) {
                        var e = t.interaction
                          , n = e.modification
                          , r = n.beforeEnd(t);
                        return e.edges = n.startEdges,
                        r
                    },
                    "interactions:action-start": we,
                    "interactions:action-move": we,
                    "interactions:action-end": we,
                    "interactions:after-action-start": function(t) {
                        return t.interaction.modification.restoreInteractionCoords(t)
                    },
                    "interactions:after-action-move": function(t) {
                        return t.interaction.modification.restoreInteractionCoords(t)
                    },
                    "interactions:stop": function(t) {
                        return t.interaction.modification.stop(t)
                    }
                }
            }
              , Te = Ee
              , Se = {
                base: {
                    preventDefault: "auto",
                    deltaSource: "page"
                },
                perAction: {
                    enabled: !1,
                    origin: {
                        x: 0,
                        y: 0
                    }
                },
                actions: {}
            }
              , _e = function(t) {
                c(n, t);
                var e = f(n);
                function n(t, r, o, a, s, c, l) {
                    var u;
                    i(this, n),
                    (u = e.call(this, t)).relatedTarget = null,
                    u.screenX = void 0,
                    u.screenY = void 0,
                    u.button = void 0,
                    u.buttons = void 0,
                    u.ctrlKey = void 0,
                    u.shiftKey = void 0,
                    u.altKey = void 0,
                    u.metaKey = void 0,
                    u.page = void 0,
                    u.client = void 0,
                    u.delta = void 0,
                    u.rect = void 0,
                    u.x0 = void 0,
                    u.y0 = void 0,
                    u.t0 = void 0,
                    u.dt = void 0,
                    u.duration = void 0,
                    u.clientX0 = void 0,
                    u.clientY0 = void 0,
                    u.velocity = void 0,
                    u.speed = void 0,
                    u.swipe = void 0,
                    u.axes = void 0,
                    u.preEnd = void 0,
                    s = s || t.element;
                    var f = t.interactable
                      , d = (f && f.options || Se).deltaSource
                      , h = $(f, s, o)
                      , v = "start" === a
                      , g = "end" === a
                      , m = v ? p(u) : t.prevEvent
                      , y = v ? t.coords.start : g ? {
                        page: m.page,
                        client: m.client,
                        timeStamp: t.coords.cur.timeStamp
                    } : t.coords.cur;
                    return u.page = V({}, y.page),
                    u.client = V({}, y.client),
                    u.rect = V({}, t.rect),
                    u.timeStamp = y.timeStamp,
                    g || (u.page.x -= h.x,
                    u.page.y -= h.y,
                    u.client.x -= h.x,
                    u.client.y -= h.y),
                    u.ctrlKey = r.ctrlKey,
                    u.altKey = r.altKey,
                    u.shiftKey = r.shiftKey,
                    u.metaKey = r.metaKey,
                    u.button = r.button,
                    u.buttons = r.buttons,
                    u.target = s,
                    u.currentTarget = s,
                    u.preEnd = c,
                    u.type = l || o + (a || ""),
                    u.interactable = f,
                    u.t0 = v ? t.pointers[t.pointers.length - 1].downTime : m.t0,
                    u.x0 = t.coords.start.page.x - h.x,
                    u.y0 = t.coords.start.page.y - h.y,
                    u.clientX0 = t.coords.start.client.x - h.x,
                    u.clientY0 = t.coords.start.client.y - h.y,
                    u.delta = v || g ? {
                        x: 0,
                        y: 0
                    } : {
                        x: u[d].x - m[d].x,
                        y: u[d].y - m[d].y
                    },
                    u.dt = t.coords.delta.timeStamp,
                    u.duration = u.timeStamp - u.t0,
                    u.velocity = V({}, t.coords.velocity[d]),
                    u.speed = Z(u.velocity.x, u.velocity.y),
                    u.swipe = g || "inertiastart" === a ? u.getSwipe() : null,
                    u
                }
                return a(n, [{
                    key: "getSwipe",
                    value: function() {
                        var t = this._interaction;
                        if (t.prevEvent.speed < 600 || this.timeStamp - t.prevEvent.timeStamp > 150)
                            return null;
                        var e = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
                        e < 0 && (e += 360);
                        var n = 112.5 <= e && e < 247.5
                          , r = 202.5 <= e && e < 337.5;
                        return {
                            up: r,
                            down: !r && 22.5 <= e && e < 157.5,
                            left: n,
                            right: !n && (292.5 <= e || e < 67.5),
                            angle: e,
                            speed: t.prevEvent.speed,
                            velocity: {
                                x: t.prevEvent.velocityX,
                                y: t.prevEvent.velocityY
                            }
                        }
                    }
                }, {
                    key: "preventDefault",
                    value: function() {}
                }, {
                    key: "stopImmediatePropagation",
                    value: function() {
                        this.immediatePropagationStopped = this.propagationStopped = !0
                    }
                }, {
                    key: "stopPropagation",
                    value: function() {
                        this.propagationStopped = !0
                    }
                }]),
                n
            }(gt);
            Object.defineProperties(_e.prototype, {
                pageX: {
                    get: function() {
                        return this.page.x
                    },
                    set: function(t) {
                        this.page.x = t
                    }
                },
                pageY: {
                    get: function() {
                        return this.page.y
                    },
                    set: function(t) {
                        this.page.y = t
                    }
                },
                clientX: {
                    get: function() {
                        return this.client.x
                    },
                    set: function(t) {
                        this.client.x = t
                    }
                },
                clientY: {
                    get: function() {
                        return this.client.y
                    },
                    set: function(t) {
                        this.client.y = t
                    }
                },
                dx: {
                    get: function() {
                        return this.delta.x
                    },
                    set: function(t) {
                        this.delta.x = t
                    }
                },
                dy: {
                    get: function() {
                        return this.delta.y
                    },
                    set: function(t) {
                        this.delta.y = t
                    }
                },
                velocityX: {
                    get: function() {
                        return this.velocity.x
                    },
                    set: function(t) {
                        this.velocity.x = t
                    }
                },
                velocityY: {
                    get: function() {
                        return this.velocity.y
                    },
                    set: function(t) {
                        this.velocity.y = t
                    }
                }
            });
            var Oe = a((function t(e, n, r, o, a) {
                i(this, t),
                this.id = void 0,
                this.pointer = void 0,
                this.event = void 0,
                this.downTime = void 0,
                this.downTarget = void 0,
                this.id = e,
                this.pointer = n,
                this.event = r,
                this.downTime = o,
                this.downTarget = a
            }
            ))
              , ke = function(t) {
                return t.interactable = "",
                t.element = "",
                t.prepared = "",
                t.pointerIsDown = "",
                t.pointerWasMoved = "",
                t._proxy = "",
                t
            }({})
              , Pe = function(t) {
                return t.start = "",
                t.move = "",
                t.end = "",
                t.stop = "",
                t.interacting = "",
                t
            }({})
              , ze = 0
              , De = function() {
                function t(e) {
                    var n = this
                      , r = e.pointerType
                      , o = e.scopeFire;
                    i(this, t),
                    this.interactable = null,
                    this.element = null,
                    this.rect = null,
                    this._rects = void 0,
                    this.edges = null,
                    this._scopeFire = void 0,
                    this.prepared = {
                        name: null,
                        axis: null,
                        edges: null
                    },
                    this.pointerType = void 0,
                    this.pointers = [],
                    this.downEvent = null,
                    this.downPointer = {},
                    this._latestPointer = {
                        pointer: null,
                        event: null,
                        eventTarget: null
                    },
                    this.prevEvent = null,
                    this.pointerIsDown = !1,
                    this.pointerWasMoved = !1,
                    this._interacting = !1,
                    this._ending = !1,
                    this._stopped = !0,
                    this._proxy = void 0,
                    this.simulation = null,
                    this.doMove = Ht((function(t) {
                        this.move(t)
                    }
                    ), "The interaction.doMove() method has been renamed to interaction.move()"),
                    this.coords = {
                        start: {
                            page: {
                                x: 0,
                                y: 0
                            },
                            client: {
                                x: 0,
                                y: 0
                            },
                            timeStamp: 0
                        },
                        prev: {
                            page: {
                                x: 0,
                                y: 0
                            },
                            client: {
                                x: 0,
                                y: 0
                            },
                            timeStamp: 0
                        },
                        cur: {
                            page: {
                                x: 0,
                                y: 0
                            },
                            client: {
                                x: 0,
                                y: 0
                            },
                            timeStamp: 0
                        },
                        delta: {
                            page: {
                                x: 0,
                                y: 0
                            },
                            client: {
                                x: 0,
                                y: 0
                            },
                            timeStamp: 0
                        },
                        velocity: {
                            page: {
                                x: 0,
                                y: 0
                            },
                            client: {
                                x: 0,
                                y: 0
                            },
                            timeStamp: 0
                        }
                    },
                    this._id = ze++,
                    this._scopeFire = o,
                    this.pointerType = r;
                    var a = this;
                    this._proxy = {};
                    var s = function(t) {
                        Object.defineProperty(n._proxy, t, {
                            get: function() {
                                return a[t]
                            }
                        })
                    };
                    for (var c in ke)
                        s(c);
                    var l = function(t) {
                        Object.defineProperty(n._proxy, t, {
                            value: function() {
                                return a[t].apply(a, arguments)
                            }
                        })
                    };
                    for (var u in Pe)
                        l(u);
                    this._scopeFire("interactions:new", {
                        interaction: this
                    })
                }
                return a(t, [{
                    key: "pointerMoveTolerance",
                    get: function() {
                        return 1
                    }
                }, {
                    key: "pointerDown",
                    value: function(t, e, n) {
                        var r = this.updatePointer(t, e, n, !0)
                          , i = this.pointers[r];
                        this._scopeFire("interactions:down", {
                            pointer: t,
                            event: e,
                            eventTarget: n,
                            pointerIndex: r,
                            pointerInfo: i,
                            type: "down",
                            interaction: this
                        })
                    }
                }, {
                    key: "start",
                    value: function(t, e, n) {
                        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t.name ? 2 : 1) || !e.options[t.name].enabled) && (Ut(this.prepared, t),
                        this.interactable = e,
                        this.element = n,
                        this.rect = e.getRect(n),
                        this.edges = this.prepared.edges ? V({}, this.prepared.edges) : {
                            left: !0,
                            right: !0,
                            top: !0,
                            bottom: !0
                        },
                        this._stopped = !1,
                        this._interacting = this._doPhase({
                            interaction: this,
                            event: this.downEvent,
                            phase: "start"
                        }) && !this._stopped,
                        this._interacting)
                    }
                }, {
                    key: "pointerMove",
                    value: function(t, e, n) {
                        this.simulation || this.modification && this.modification.endResult || this.updatePointer(t, e, n, !1);
                        var r, i, o = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                        this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x,
                        i = this.coords.cur.client.y - this.coords.start.client.y,
                        this.pointerWasMoved = Z(r, i) > this.pointerMoveTolerance);
                        var a, s, c, l = this.getPointerIndex(t), u = {
                            pointer: t,
                            pointerIndex: l,
                            pointerInfo: this.pointers[l],
                            event: e,
                            type: "move",
                            eventTarget: n,
                            dx: r,
                            dy: i,
                            duplicate: o,
                            interaction: this
                        };
                        o || (a = this.coords.velocity,
                        s = this.coords.delta,
                        c = Math.max(s.timeStamp / 1e3, .001),
                        a.page.x = s.page.x / c,
                        a.page.y = s.page.y / c,
                        a.client.x = s.client.x / c,
                        a.client.y = s.client.y / c,
                        a.timeStamp = c),
                        this._scopeFire("interactions:move", u),
                        o || this.simulation || (this.interacting() && (u.type = null,
                        this.move(u)),
                        this.pointerWasMoved && nt(this.coords.prev, this.coords.cur))
                    }
                }, {
                    key: "move",
                    value: function(t) {
                        t && t.event || rt(this.coords.delta),
                        (t = V({
                            pointer: this._latestPointer.pointer,
                            event: this._latestPointer.event,
                            eventTarget: this._latestPointer.eventTarget,
                            interaction: this
                        }, t || {})).phase = "move",
                        this._doPhase(t)
                    }
                }, {
                    key: "pointerUp",
                    value: function(t, e, n, r) {
                        var i = this.getPointerIndex(t);
                        -1 === i && (i = this.updatePointer(t, e, n, !1));
                        var o = /cancel$/i.test(e.type) ? "cancel" : "up";
                        this._scopeFire("interactions:".concat(o), {
                            pointer: t,
                            pointerIndex: i,
                            pointerInfo: this.pointers[i],
                            event: e,
                            eventTarget: n,
                            type: o,
                            curEventTarget: r,
                            interaction: this
                        }),
                        this.simulation || this.end(e),
                        this.removePointer(t, e)
                    }
                }, {
                    key: "documentBlur",
                    value: function(t) {
                        this.end(t),
                        this._scopeFire("interactions:blur", {
                            event: t,
                            type: "blur",
                            interaction: this
                        })
                    }
                }, {
                    key: "end",
                    value: function(t) {
                        var e;
                        this._ending = !0,
                        t = t || this._latestPointer.event,
                        this.interacting() && (e = this._doPhase({
                            event: t,
                            interaction: this,
                            phase: "end"
                        })),
                        this._ending = !1,
                        !0 === e && this.stop()
                    }
                }, {
                    key: "currentAction",
                    value: function() {
                        return this._interacting ? this.prepared.name : null
                    }
                }, {
                    key: "interacting",
                    value: function() {
                        return this._interacting
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this._scopeFire("interactions:stop", {
                            interaction: this
                        }),
                        this.interactable = this.element = null,
                        this._interacting = !1,
                        this._stopped = !0,
                        this.prepared.name = this.prevEvent = null
                    }
                }, {
                    key: "getPointerIndex",
                    value: function(t) {
                        var e = st(t);
                        return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : bt(this.pointers, (function(t) {
                            return t.id === e
                        }
                        ))
                    }
                }, {
                    key: "getPointerInfo",
                    value: function(t) {
                        return this.pointers[this.getPointerIndex(t)]
                    }
                }, {
                    key: "updatePointer",
                    value: function(t, e, n, r) {
                        var i, o, a, s = st(t), c = this.getPointerIndex(t), l = this.pointers[c];
                        return r = !1 !== r && (r || /(down|start)$/i.test(e.type)),
                        l ? l.pointer = t : (l = new Oe(s,t,e,null,null),
                        c = this.pointers.length,
                        this.pointers.push(l)),
                        ct(this.coords.cur, this.pointers.map((function(t) {
                            return t.pointer
                        }
                        )), this._now()),
                        i = this.coords.delta,
                        o = this.coords.prev,
                        a = this.coords.cur,
                        i.page.x = a.page.x - o.page.x,
                        i.page.y = a.page.y - o.page.y,
                        i.client.x = a.client.x - o.client.x,
                        i.client.y = a.client.y - o.client.y,
                        i.timeStamp = a.timeStamp - o.timeStamp,
                        r && (this.pointerIsDown = !0,
                        l.downTime = this.coords.cur.timeStamp,
                        l.downTarget = n,
                        et(this.downPointer, t),
                        this.interacting() || (nt(this.coords.start, this.coords.cur),
                        nt(this.coords.prev, this.coords.cur),
                        this.downEvent = e,
                        this.pointerWasMoved = !1)),
                        this._updateLatestPointer(t, e, n),
                        this._scopeFire("interactions:update-pointer", {
                            pointer: t,
                            event: e,
                            eventTarget: n,
                            down: r,
                            pointerInfo: l,
                            pointerIndex: c,
                            interaction: this
                        }),
                        c
                    }
                }, {
                    key: "removePointer",
                    value: function(t, e) {
                        var n = this.getPointerIndex(t);
                        if (-1 !== n) {
                            var r = this.pointers[n];
                            this._scopeFire("interactions:remove-pointer", {
                                pointer: t,
                                event: e,
                                eventTarget: null,
                                pointerIndex: n,
                                pointerInfo: r,
                                interaction: this
                            }),
                            this.pointers.splice(n, 1),
                            this.pointerIsDown = !1
                        }
                    }
                }, {
                    key: "_updateLatestPointer",
                    value: function(t, e, n) {
                        this._latestPointer.pointer = t,
                        this._latestPointer.event = e,
                        this._latestPointer.eventTarget = n
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._latestPointer.pointer = null,
                        this._latestPointer.event = null,
                        this._latestPointer.eventTarget = null
                    }
                }, {
                    key: "_createPreparedEvent",
                    value: function(t, e, n, r) {
                        return new _e(this,t,this.prepared.name,e,this.element,n,r)
                    }
                }, {
                    key: "_fireEvent",
                    value: function(t) {
                        var e;
                        null == (e = this.interactable) || e.fire(t),
                        (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t)
                    }
                }, {
                    key: "_doPhase",
                    value: function(t) {
                        var e = t.event
                          , n = t.phase
                          , r = t.preEnd
                          , i = t.type
                          , o = this.rect;
                        if (o && "move" === n && (K(this.edges, o, this.coords.delta[this.interactable.options.deltaSource]),
                        o.width = o.right - o.left,
                        o.height = o.bottom - o.top),
                        !1 === this._scopeFire("interactions:before-action-".concat(n), t))
                            return !1;
                        var a = t.iEvent = this._createPreparedEvent(e, n, r, i);
                        return this._scopeFire("interactions:action-".concat(n), t),
                        "start" === n && (this.prevEvent = a),
                        this._fireEvent(a),
                        this._scopeFire("interactions:after-action-".concat(n), t),
                        !0
                    }
                }, {
                    key: "_now",
                    value: function() {
                        return Date.now()
                    }
                }]),
                t
            }();
            function Me(t) {
                Ie(t.interaction)
            }
            function Ie(t) {
                if (!function(t) {
                    return !(!t.offset.pending.x && !t.offset.pending.y)
                }(t))
                    return !1;
                var e = t.offset.pending;
                return Re(t.coords.cur, e),
                Re(t.coords.delta, e),
                K(t.edges, t.rect, e),
                e.x = 0,
                e.y = 0,
                !0
            }
            function Ae(t) {
                var e = t.x
                  , n = t.y;
                this.offset.pending.x += e,
                this.offset.pending.y += n,
                this.offset.total.x += e,
                this.offset.total.y += n
            }
            function Re(t, e) {
                var n = t.page
                  , r = t.client
                  , i = e.x
                  , o = e.y;
                n.x += i,
                n.y += o,
                r.x += i,
                r.y += o
            }
            Pe.offsetBy = "";
            var Ce = {
                id: "offset",
                before: ["modifiers", "pointer-events", "actions", "inertia"],
                install: function(t) {
                    t.Interaction.prototype.offsetBy = Ae
                },
                listeners: {
                    "interactions:new": function(t) {
                        t.interaction.offset = {
                            total: {
                                x: 0,
                                y: 0
                            },
                            pending: {
                                x: 0,
                                y: 0
                            }
                        }
                    },
                    "interactions:update-pointer": function(t) {
                        return function(t) {
                            t.pointerIsDown && (Re(t.coords.cur, t.offset.total),
                            t.offset.pending.x = 0,
                            t.offset.pending.y = 0)
                        }(t.interaction)
                    },
                    "interactions:before-action-start": Me,
                    "interactions:before-action-move": Me,
                    "interactions:before-action-end": function(t) {
                        var e = t.interaction;
                        if (Ie(e))
                            return e.move({
                                offset: !0
                            }),
                            e.end(),
                            !1
                    },
                    "interactions:stop": function(t) {
                        var e = t.interaction;
                        e.offset.total.x = 0,
                        e.offset.total.y = 0,
                        e.offset.pending.x = 0,
                        e.offset.pending.y = 0
                    }
                }
            }
              , je = Ce
              , Fe = function() {
                function t(e) {
                    i(this, t),
                    this.active = !1,
                    this.isModified = !1,
                    this.smoothEnd = !1,
                    this.allowResume = !1,
                    this.modification = void 0,
                    this.modifierCount = 0,
                    this.modifierArg = void 0,
                    this.startCoords = void 0,
                    this.t0 = 0,
                    this.v0 = 0,
                    this.te = 0,
                    this.targetOffset = void 0,
                    this.modifiedOffset = void 0,
                    this.currentOffset = void 0,
                    this.lambda_v0 = 0,
                    this.one_ve_v0 = 0,
                    this.timeout = void 0,
                    this.interaction = void 0,
                    this.interaction = e
                }
                return a(t, [{
                    key: "start",
                    value: function(t) {
                        var e = this.interaction
                          , n = Be(e);
                        if (!n || !n.enabled)
                            return !1;
                        var r = e.coords.velocity.client
                          , i = Z(r.x, r.y)
                          , o = this.modification || (this.modification = new ye(e));
                        if (o.copyFrom(e.modification),
                        this.t0 = e._now(),
                        this.allowResume = n.allowResume,
                        this.v0 = i,
                        this.currentOffset = {
                            x: 0,
                            y: 0
                        },
                        this.startCoords = e.coords.cur.page,
                        this.modifierArg = o.fillArg({
                            pageCoords: this.startCoords,
                            preEnd: !0,
                            phase: "inertiastart"
                        }),
                        this.t0 - e.coords.cur.timeStamp < 50 && i > n.minSpeed && i > n.endSpeed)
                            this.startInertia();
                        else {
                            if (o.result = o.setAll(this.modifierArg),
                            !o.result.changed)
                                return !1;
                            this.startSmoothEnd()
                        }
                        return e.modification.result.rect = null,
                        e.offsetBy(this.targetOffset),
                        e._doPhase({
                            interaction: e,
                            event: t,
                            phase: "inertiastart"
                        }),
                        e.offsetBy({
                            x: -this.targetOffset.x,
                            y: -this.targetOffset.y
                        }),
                        e.modification.result.rect = null,
                        this.active = !0,
                        e.simulation = this,
                        !0
                    }
                }, {
                    key: "startInertia",
                    value: function() {
                        var t = this
                          , e = this.interaction.coords.velocity.client
                          , n = Be(this.interaction)
                          , r = n.resistance
                          , i = -Math.log(n.endSpeed / this.v0) / r;
                        this.targetOffset = {
                            x: (e.x - i) / r,
                            y: (e.y - i) / r
                        },
                        this.te = i,
                        this.lambda_v0 = r / this.v0,
                        this.one_ve_v0 = 1 - n.endSpeed / this.v0;
                        var o = this.modification
                          , a = this.modifierArg;
                        a.pageCoords = {
                            x: this.startCoords.x + this.targetOffset.x,
                            y: this.startCoords.y + this.targetOffset.y
                        },
                        o.result = o.setAll(a),
                        o.result.changed && (this.isModified = !0,
                        this.modifiedOffset = {
                            x: this.targetOffset.x + o.result.delta.x,
                            y: this.targetOffset.y + o.result.delta.y
                        }),
                        this.onNextFrame((function() {
                            return t.inertiaTick()
                        }
                        ))
                    }
                }, {
                    key: "startSmoothEnd",
                    value: function() {
                        var t = this;
                        this.smoothEnd = !0,
                        this.isModified = !0,
                        this.targetOffset = {
                            x: this.modification.result.delta.x,
                            y: this.modification.result.delta.y
                        },
                        this.onNextFrame((function() {
                            return t.smoothEndTick()
                        }
                        ))
                    }
                }, {
                    key: "onNextFrame",
                    value: function(t) {
                        var e = this;
                        this.timeout = Nt.request((function() {
                            e.active && t()
                        }
                        ))
                    }
                }, {
                    key: "inertiaTick",
                    value: function() {
                        var t, e, n, r, i, o, a, s = this, c = this.interaction, l = Be(c).resistance, u = (c._now() - this.t0) / 1e3;
                        if (u < this.te) {
                            var p, f = 1 - (Math.exp(-l * u) - this.lambda_v0) / this.one_ve_v0;
                            this.isModified ? (t = 0,
                            e = 0,
                            n = this.targetOffset.x,
                            r = this.targetOffset.y,
                            i = this.modifiedOffset.x,
                            o = this.modifiedOffset.y,
                            p = {
                                x: Le(a = f, t, n, i),
                                y: Le(a, e, r, o)
                            }) : p = {
                                x: this.targetOffset.x * f,
                                y: this.targetOffset.y * f
                            };
                            var d = {
                                x: p.x - this.currentOffset.x,
                                y: p.y - this.currentOffset.y
                            };
                            this.currentOffset.x += d.x,
                            this.currentOffset.y += d.y,
                            c.offsetBy(d),
                            c.move(),
                            this.onNextFrame((function() {
                                return s.inertiaTick()
                            }
                            ))
                        } else
                            c.offsetBy({
                                x: this.modifiedOffset.x - this.currentOffset.x,
                                y: this.modifiedOffset.y - this.currentOffset.y
                            }),
                            this.end()
                    }
                }, {
                    key: "smoothEndTick",
                    value: function() {
                        var t = this
                          , e = this.interaction
                          , n = e._now() - this.t0
                          , r = Be(e).smoothEndDuration;
                        if (n < r) {
                            var i = {
                                x: Ne(n, 0, this.targetOffset.x, r),
                                y: Ne(n, 0, this.targetOffset.y, r)
                            }
                              , o = {
                                x: i.x - this.currentOffset.x,
                                y: i.y - this.currentOffset.y
                            };
                            this.currentOffset.x += o.x,
                            this.currentOffset.y += o.y,
                            e.offsetBy(o),
                            e.move({
                                skipModifiers: this.modifierCount
                            }),
                            this.onNextFrame((function() {
                                return t.smoothEndTick()
                            }
                            ))
                        } else
                            e.offsetBy({
                                x: this.targetOffset.x - this.currentOffset.x,
                                y: this.targetOffset.y - this.currentOffset.y
                            }),
                            this.end()
                    }
                }, {
                    key: "resume",
                    value: function(t) {
                        var e = t.pointer
                          , n = t.event
                          , r = t.eventTarget
                          , i = this.interaction;
                        i.offsetBy({
                            x: -this.currentOffset.x,
                            y: -this.currentOffset.y
                        }),
                        i.updatePointer(e, n, r, !0),
                        i._doPhase({
                            interaction: i,
                            event: n,
                            phase: "resume"
                        }),
                        nt(i.coords.prev, i.coords.cur),
                        this.stop()
                    }
                }, {
                    key: "end",
                    value: function() {
                        this.interaction.move(),
                        this.interaction.end(),
                        this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.active = this.smoothEnd = !1,
                        this.interaction.simulation = null,
                        Nt.cancel(this.timeout)
                    }
                }]),
                t
            }();
            function Be(t) {
                var e = t.interactable
                  , n = t.prepared;
                return e && e.options && n.name && e.options[n.name].inertia
            }
            var Xe = {
                id: "inertia",
                before: ["modifiers", "actions"],
                install: function(t) {
                    var e = t.defaults;
                    t.usePlugin(je),
                    t.usePlugin(Te),
                    t.actions.phases.inertiastart = !0,
                    t.actions.phases.resume = !0,
                    e.perAction.inertia = {
                        enabled: !1,
                        resistance: 10,
                        minSpeed: 100,
                        endSpeed: 10,
                        allowResume: !0,
                        smoothEndDuration: 300
                    }
                },
                listeners: {
                    "interactions:new": function(t) {
                        var e = t.interaction;
                        e.inertia = new Fe(e)
                    },
                    "interactions:before-action-end": function(t) {
                        var e = t.interaction
                          , n = t.event;
                        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null
                    },
                    "interactions:down": function(t) {
                        var e = t.interaction
                          , n = t.eventTarget
                          , r = e.inertia;
                        if (r.active)
                            for (var i = n; E.element(i); ) {
                                if (i === e.element) {
                                    r.resume(t);
                                    break
                                }
                                i = R(i)
                            }
                    },
                    "interactions:stop": function(t) {
                        var e = t.interaction.inertia;
                        e.active && e.stop()
                    },
                    "interactions:before-action-resume": function(t) {
                        var e = t.interaction.modification;
                        e.stop(t),
                        e.start(t, t.interaction.coords.cur.page),
                        e.applyToInteraction(t)
                    },
                    "interactions:before-action-inertiastart": function(t) {
                        return t.interaction.modification.setAndApply(t)
                    },
                    "interactions:action-resume": we,
                    "interactions:action-inertiastart": we,
                    "interactions:after-action-inertiastart": function(t) {
                        return t.interaction.modification.restoreInteractionCoords(t)
                    },
                    "interactions:after-action-resume": function(t) {
                        return t.interaction.modification.restoreInteractionCoords(t)
                    }
                }
            };
            function Le(t, e, n, r) {
                var i = 1 - t;
                return i * i * e + 2 * i * t * n + t * t * r
            }
            function Ne(t, e, n, r) {
                return -n * (t /= r) * (t - 2) + e
            }
            var Ye = Xe;
            function We(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (t.immediatePropagationStopped)
                        break;
                    r(t)
                }
            }
            var Ve = function() {
                function t(e) {
                    i(this, t),
                    this.options = void 0,
                    this.types = {},
                    this.propagationStopped = !1,
                    this.immediatePropagationStopped = !1,
                    this.global = void 0,
                    this.options = V({}, e || {})
                }
                return a(t, [{
                    key: "fire",
                    value: function(t) {
                        var e, n = this.global;
                        (e = this.types[t.type]) && We(t, e),
                        !t.propagationStopped && n && (e = n[t.type]) && We(t, e)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        var n = J(t, e);
                        for (t in n)
                            this.types[t] = mt(this.types[t] || [], n[t])
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        var n = J(t, e);
                        for (t in n) {
                            var r = this.types[t];
                            if (r && r.length)
                                for (var i = 0, o = n[t]; i < o.length; i++) {
                                    var a = o[i]
                                      , s = r.indexOf(a);
                                    -1 !== s && r.splice(s, 1)
                                }
                        }
                    }
                }, {
                    key: "getRect",
                    value: function(t) {
                        return null
                    }
                }]),
                t
            }()
              , qe = function() {
                function t(e) {
                    i(this, t),
                    this.currentTarget = void 0,
                    this.originalEvent = void 0,
                    this.type = void 0,
                    this.originalEvent = e,
                    et(this, e)
                }
                return a(t, [{
                    key: "preventOriginalDefault",
                    value: function() {
                        this.originalEvent.preventDefault()
                    }
                }, {
                    key: "stopPropagation",
                    value: function() {
                        this.originalEvent.stopPropagation()
                    }
                }, {
                    key: "stopImmediatePropagation",
                    value: function() {
                        this.originalEvent.stopImmediatePropagation()
                    }
                }]),
                t
            }();
            function Ge(t) {
                return E.object(t) ? {
                    capture: !!t.capture,
                    passive: !!t.passive
                } : {
                    capture: !!t,
                    passive: !1
                }
            }
            function He(t, e) {
                return t === e || ("boolean" == typeof t ? !!e.capture === t && 0 == !!e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive)
            }
            var Ue = {
                id: "events",
                install: function(t) {
                    var e, n = [], r = {}, i = [], o = {
                        add: a,
                        remove: s,
                        addDelegate: function(t, e, n, o, s) {
                            var u = Ge(s);
                            if (!r[n]) {
                                r[n] = [];
                                for (var p = 0; p < i.length; p++) {
                                    var f = i[p];
                                    a(f, n, c),
                                    a(f, n, l, !0)
                                }
                            }
                            var d = r[n]
                              , h = xt(d, (function(n) {
                                return n.selector === t && n.context === e
                            }
                            ));
                            h || (h = {
                                selector: t,
                                context: e,
                                listeners: []
                            },
                            d.push(h)),
                            h.listeners.push({
                                func: o,
                                options: u
                            })
                        },
                        removeDelegate: function(t, e, n, i, o) {
                            var a, u = Ge(o), p = r[n], f = !1;
                            if (p)
                                for (a = p.length - 1; a >= 0; a--) {
                                    var d = p[a];
                                    if (d.selector === t && d.context === e) {
                                        for (var h = d.listeners, v = h.length - 1; v >= 0; v--) {
                                            var g = h[v];
                                            if (g.func === i && He(g.options, u)) {
                                                h.splice(v, 1),
                                                h.length || (p.splice(a, 1),
                                                s(e, n, c),
                                                s(e, n, l, !0)),
                                                f = !0;
                                                break
                                            }
                                        }
                                        if (f)
                                            break
                                    }
                                }
                        },
                        delegateListener: c,
                        delegateUseCapture: l,
                        delegatedEvents: r,
                        documents: i,
                        targets: n,
                        supportsOptions: !1,
                        supportsPassive: !1
                    };
                    function a(t, e, r, i) {
                        if (t.addEventListener) {
                            var a = Ge(i)
                              , s = xt(n, (function(e) {
                                return e.eventTarget === t
                            }
                            ));
                            s || (s = {
                                eventTarget: t,
                                events: {}
                            },
                            n.push(s)),
                            s.events[e] || (s.events[e] = []),
                            xt(s.events[e], (function(t) {
                                return t.func === r && He(t.options, a)
                            }
                            )) || (t.addEventListener(e, r, o.supportsOptions ? a : a.capture),
                            s.events[e].push({
                                func: r,
                                options: a
                            }))
                        }
                    }
                    function s(t, e, r, i) {
                        if (t.addEventListener && t.removeEventListener) {
                            var a = bt(n, (function(e) {
                                return e.eventTarget === t
                            }
                            ))
                              , c = n[a];
                            if (c && c.events)
                                if ("all" !== e) {
                                    var l = !1
                                      , u = c.events[e];
                                    if (u) {
                                        if ("all" === r) {
                                            for (var p = u.length - 1; p >= 0; p--) {
                                                var f = u[p];
                                                s(t, e, f.func, f.options)
                                            }
                                            return
                                        }
                                        for (var d = Ge(i), h = 0; h < u.length; h++) {
                                            var v = u[h];
                                            if (v.func === r && He(v.options, d)) {
                                                t.removeEventListener(e, r, o.supportsOptions ? d : d.capture),
                                                u.splice(h, 1),
                                                0 === u.length && (delete c.events[e],
                                                l = !0);
                                                break
                                            }
                                        }
                                    }
                                    l && !Object.keys(c.events).length && n.splice(a, 1)
                                } else
                                    for (e in c.events)
                                        c.events.hasOwnProperty(e) && s(t, e, "all")
                        }
                    }
                    function c(t, e) {
                        for (var n = Ge(e), i = new qe(t), o = r[t.type], a = vt(t)[0], s = a; E.element(s); ) {
                            for (var c = 0; c < o.length; c++) {
                                var l = o[c]
                                  , u = l.selector
                                  , p = l.context;
                                if (C(s, u) && I(p, a) && I(p, s)) {
                                    var f = l.listeners;
                                    i.currentTarget = s;
                                    for (var d = 0; d < f.length; d++) {
                                        var h = f[d];
                                        He(h.options, n) && h.func(i)
                                    }
                                }
                            }
                            s = R(s)
                        }
                    }
                    function l(t) {
                        return c(t, !0)
                    }
                    return null == (e = t.document) || e.createElement("div").addEventListener("test", null, {
                        get capture() {
                            return o.supportsOptions = !0
                        },
                        get passive() {
                            return o.supportsPassive = !0
                        }
                    }),
                    t.events = o,
                    o
                }
            }
              , Ke = {
                methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
                search: function(t) {
                    for (var e = 0, n = Ke.methodOrder; e < n.length; e++) {
                        var r = n[e]
                          , i = Ke[r](t);
                        if (i)
                            return i
                    }
                    return null
                },
                simulationResume: function(t) {
                    var e = t.pointerType
                      , n = t.eventType
                      , r = t.eventTarget
                      , i = t.scope;
                    if (!/down|start/i.test(n))
                        return null;
                    for (var o = 0, a = i.interactions.list; o < a.length; o++) {
                        var s = a[o]
                          , c = r;
                        if (s.simulation && s.simulation.allowResume && s.pointerType === e)
                            for (; c; ) {
                                if (c === s.element)
                                    return s;
                                c = R(c)
                            }
                    }
                    return null
                },
                mouseOrPen: function(t) {
                    var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
                    if ("mouse" !== r && "pen" !== r)
                        return null;
                    for (var a = 0, s = o.interactions.list; a < s.length; a++) {
                        var c = s[a];
                        if (c.pointerType === r) {
                            if (c.simulation && !$e(c, n))
                                continue;
                            if (c.interacting())
                                return c;
                            e || (e = c)
                        }
                    }
                    if (e)
                        return e;
                    for (var l = 0, u = o.interactions.list; l < u.length; l++) {
                        var p = u[l];
                        if (!(p.pointerType !== r || /down/i.test(i) && p.simulation))
                            return p
                    }
                    return null
                },
                hasPointer: function(t) {
                    for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
                        var i = r[n];
                        if ($e(i, e))
                            return i
                    }
                    return null
                },
                idle: function(t) {
                    for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
                        var i = r[n];
                        if (1 === i.pointers.length) {
                            var o = i.interactable;
                            if (o && (!o.options.gesture || !o.options.gesture.enabled))
                                continue
                        } else if (i.pointers.length >= 2)
                            continue;
                        if (!i.interacting() && e === i.pointerType)
                            return i
                    }
                    return null
                }
            };
            function $e(t, e) {
                return t.pointers.some((function(t) {
                    return t.id === e
                }
                ))
            }
            var Je = Ke
              , Qe = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
            function Ze(t, e) {
                return function(n) {
                    var r = e.interactions.list
                      , i = ht(n)
                      , o = vt(n)
                      , a = o[0]
                      , s = o[1]
                      , c = [];
                    if (/^touch/.test(n.type)) {
                        e.prevTouchTime = e.now();
                        for (var l = 0, u = n.changedTouches; l < u.length; l++) {
                            var p = u[l]
                              , f = {
                                pointer: p,
                                pointerId: st(p),
                                pointerType: i,
                                eventType: n.type,
                                eventTarget: a,
                                curEventTarget: s,
                                scope: e
                            }
                              , d = tn(f);
                            c.push([f.pointer, f.eventTarget, f.curEventTarget, d])
                        }
                    } else {
                        var h = !1;
                        if (!M.supportsPointerEvent && /mouse/.test(n.type)) {
                            for (var v = 0; v < r.length && !h; v++)
                                h = "mouse" !== r[v].pointerType && r[v].pointerIsDown;
                            h = h || e.now() - e.prevTouchTime < 500 || 0 === n.timeStamp
                        }
                        if (!h) {
                            var g = {
                                pointer: n,
                                pointerId: st(n),
                                pointerType: i,
                                eventType: n.type,
                                curEventTarget: s,
                                eventTarget: a,
                                scope: e
                            }
                              , m = tn(g);
                            c.push([g.pointer, g.eventTarget, g.curEventTarget, m])
                        }
                    }
                    for (var y = 0; y < c.length; y++) {
                        var b = c[y]
                          , x = b[0]
                          , w = b[1]
                          , E = b[2];
                        b[3][t](x, n, w, E)
                    }
                }
            }
            function tn(t) {
                var e = t.pointerType
                  , n = t.scope
                  , r = {
                    interaction: Je.search(t),
                    searchDetails: t
                };
                return n.fire("interactions:find", r),
                r.interaction || n.interactions.new({
                    pointerType: e
                })
            }
            function en(t, e) {
                var n = t.doc
                  , r = t.scope
                  , i = t.options
                  , o = r.interactions.docEvents
                  , a = r.events
                  , s = a[e];
                for (var c in r.browser.isIOS && !i.events && (i.events = {
                    passive: !1
                }),
                a.delegatedEvents)
                    s(n, c, a.delegateListener),
                    s(n, c, a.delegateUseCapture, !0);
                for (var l = i && i.events, u = 0; u < o.length; u++) {
                    var p = o[u];
                    s(n, p.type, p.listener, l)
                }
            }
            var nn = {
                id: "core/interactions",
                install: function(t) {
                    for (var e = {}, n = 0; n < Qe.length; n++) {
                        var r = Qe[n];
                        e[r] = Ze(r, t)
                    }
                    var o, s = M.pEventTypes;
                    function l() {
                        for (var e = 0, n = t.interactions.list; e < n.length; e++) {
                            var r = n[e];
                            if (r.pointerIsDown && "touch" === r.pointerType && !r._interacting)
                                for (var i = function() {
                                    var e = a[o];
                                    t.documents.some((function(t) {
                                        return I(t.doc, e.downTarget)
                                    }
                                    )) || r.removePointer(e.pointer, e.event)
                                }, o = 0, a = r.pointers; o < a.length; o++)
                                    i()
                        }
                    }
                    (o = z.PointerEvent ? [{
                        type: s.down,
                        listener: l
                    }, {
                        type: s.down,
                        listener: e.pointerDown
                    }, {
                        type: s.move,
                        listener: e.pointerMove
                    }, {
                        type: s.up,
                        listener: e.pointerUp
                    }, {
                        type: s.cancel,
                        listener: e.pointerUp
                    }] : [{
                        type: "mousedown",
                        listener: e.pointerDown
                    }, {
                        type: "mousemove",
                        listener: e.pointerMove
                    }, {
                        type: "mouseup",
                        listener: e.pointerUp
                    }, {
                        type: "touchstart",
                        listener: l
                    }, {
                        type: "touchstart",
                        listener: e.pointerDown
                    }, {
                        type: "touchmove",
                        listener: e.pointerMove
                    }, {
                        type: "touchend",
                        listener: e.pointerUp
                    }, {
                        type: "touchcancel",
                        listener: e.pointerUp
                    }]).push({
                        type: "blur",
                        listener: function(e) {
                            for (var n = 0, r = t.interactions.list; n < r.length; n++)
                                r[n].documentBlur(e)
                        }
                    }),
                    t.prevTouchTime = 0,
                    t.Interaction = function(e) {
                        c(r, e);
                        var n = f(r);
                        function r() {
                            return i(this, r),
                            n.apply(this, arguments)
                        }
                        return a(r, [{
                            key: "pointerMoveTolerance",
                            get: function() {
                                return t.interactions.pointerMoveTolerance
                            },
                            set: function(e) {
                                t.interactions.pointerMoveTolerance = e
                            }
                        }, {
                            key: "_now",
                            value: function() {
                                return t.now()
                            }
                        }]),
                        r
                    }(De),
                    t.interactions = {
                        list: [],
                        new: function(e) {
                            e.scopeFire = function(e, n) {
                                return t.fire(e, n)
                            }
                            ;
                            var n = new t.Interaction(e);
                            return t.interactions.list.push(n),
                            n
                        },
                        listeners: e,
                        docEvents: o,
                        pointerMoveTolerance: 1
                    },
                    t.usePlugin(ve)
                },
                listeners: {
                    "scope:add-document": function(t) {
                        return en(t, "add")
                    },
                    "scope:remove-document": function(t) {
                        return en(t, "remove")
                    },
                    "interactable:unset": function(t, e) {
                        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
                            var i = e.interactions.list[r];
                            i.interactable === n && (i.stop(),
                            e.fire("interactions:destroy", {
                                interaction: i
                            }),
                            i.destroy(),
                            e.interactions.list.length > 2 && e.interactions.list.splice(r, 1))
                        }
                    }
                },
                onDocSignal: en,
                doOnInteractions: Ze,
                methodNames: Qe
            }
              , rn = nn
              , on = function(t) {
                return t[t.On = 0] = "On",
                t[t.Off = 1] = "Off",
                t
            }(on || {})
              , an = function() {
                function t(e, n, r, o) {
                    i(this, t),
                    this.target = void 0,
                    this.options = void 0,
                    this._actions = void 0,
                    this.events = new Ve,
                    this._context = void 0,
                    this._win = void 0,
                    this._doc = void 0,
                    this._scopeEvents = void 0,
                    this._actions = n.actions,
                    this.target = e,
                    this._context = n.context || r,
                    this._win = b(W(e) ? this._context : e),
                    this._doc = this._win.document,
                    this._scopeEvents = o,
                    this.set(n)
                }
                return a(t, [{
                    key: "_defaults",
                    get: function() {
                        return {
                            base: {},
                            perAction: {},
                            actions: {}
                        }
                    }
                }, {
                    key: "setOnEvents",
                    value: function(t, e) {
                        return E.func(e.onstart) && this.on("".concat(t, "start"), e.onstart),
                        E.func(e.onmove) && this.on("".concat(t, "move"), e.onmove),
                        E.func(e.onend) && this.on("".concat(t, "end"), e.onend),
                        E.func(e.oninertiastart) && this.on("".concat(t, "inertiastart"), e.oninertiastart),
                        this
                    }
                }, {
                    key: "updatePerActionListeners",
                    value: function(t, e, n) {
                        var r, i = this, o = null == (r = this._actions.map[t]) ? void 0 : r.filterEventType, a = function(t) {
                            return (null == o || o(t)) && ge(t, i._actions)
                        };
                        (E.array(e) || E.object(e)) && this._onOff(on.Off, t, e, void 0, a),
                        (E.array(n) || E.object(n)) && this._onOff(on.On, t, n, void 0, a)
                    }
                }, {
                    key: "setPerAction",
                    value: function(t, e) {
                        var n = this._defaults;
                        for (var r in e) {
                            var i = r
                              , o = this.options[t]
                              , a = e[i];
                            "listeners" === i && this.updatePerActionListeners(t, o.listeners, a),
                            E.array(a) ? o[i] = yt(a) : E.plainObject(a) ? (o[i] = V(o[i] || {}, me(a)),
                            E.object(n.perAction[i]) && "enabled"in n.perAction[i] && (o[i].enabled = !1 !== a.enabled)) : E.bool(a) && E.object(n.perAction[i]) ? o[i].enabled = a : o[i] = a
                        }
                    }
                }, {
                    key: "getRect",
                    value: function(t) {
                        return t = t || (E.element(this.target) ? this.target : null),
                        E.string(this.target) && (t = t || this._context.querySelector(this.target)),
                        N(t)
                    }
                }, {
                    key: "rectChecker",
                    value: function(t) {
                        var e = this;
                        return E.func(t) ? (this.getRect = function(n) {
                            var r = V({}, t.apply(e, n));
                            return "width"in r || (r.width = r.right - r.left,
                            r.height = r.bottom - r.top),
                            r
                        }
                        ,
                        this) : null === t ? (delete this.getRect,
                        this) : this.getRect
                    }
                }, {
                    key: "_backCompatOption",
                    value: function(t, e) {
                        if (W(e) || E.object(e)) {
                            for (var n in this.options[t] = e,
                            this._actions.map)
                                this.options[n][t] = e;
                            return this
                        }
                        return this.options[t]
                    }
                }, {
                    key: "origin",
                    value: function(t) {
                        return this._backCompatOption("origin", t)
                    }
                }, {
                    key: "deltaSource",
                    value: function(t) {
                        return "page" === t || "client" === t ? (this.options.deltaSource = t,
                        this) : this.options.deltaSource
                    }
                }, {
                    key: "getAllElements",
                    value: function() {
                        var t = this.target;
                        return E.string(t) ? Array.from(this._context.querySelectorAll(t)) : E.func(t) && t.getAllElements ? t.getAllElements() : E.element(t) ? [t] : []
                    }
                }, {
                    key: "context",
                    value: function() {
                        return this._context
                    }
                }, {
                    key: "inContext",
                    value: function(t) {
                        return this._context === t.ownerDocument || I(this._context, t)
                    }
                }, {
                    key: "testIgnoreAllow",
                    value: function(t, e, n) {
                        return !this.testIgnore(t.ignoreFrom, e, n) && this.testAllow(t.allowFrom, e, n)
                    }
                }, {
                    key: "testAllow",
                    value: function(t, e, n) {
                        return !t || !!E.element(n) && (E.string(t) ? B(n, t, e) : !!E.element(t) && I(t, n))
                    }
                }, {
                    key: "testIgnore",
                    value: function(t, e, n) {
                        return !(!t || !E.element(n)) && (E.string(t) ? B(n, t, e) : !!E.element(t) && I(t, n))
                    }
                }, {
                    key: "fire",
                    value: function(t) {
                        return this.events.fire(t),
                        this
                    }
                }, {
                    key: "_onOff",
                    value: function(t, e, n, r, i) {
                        E.object(e) && !E.array(e) && (r = n,
                        n = null);
                        var o = J(e, n, i);
                        for (var a in o) {
                            "wheel" === a && (a = M.wheelEvent);
                            for (var s = 0, c = o[a]; s < c.length; s++) {
                                var l = c[s];
                                ge(a, this._actions) ? this.events[t === on.On ? "on" : "off"](a, l) : E.string(this.target) ? this._scopeEvents[t === on.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a, l, r) : this._scopeEvents[t === on.On ? "add" : "remove"](this.target, a, l, r)
                            }
                        }
                        return this
                    }
                }, {
                    key: "on",
                    value: function(t, e, n) {
                        return this._onOff(on.On, t, e, n)
                    }
                }, {
                    key: "off",
                    value: function(t, e, n) {
                        return this._onOff(on.Off, t, e, n)
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        var e = this._defaults;
                        for (var n in E.object(t) || (t = {}),
                        this.options = me(e.base),
                        this._actions.methodDict) {
                            var r = n
                              , i = this._actions.methodDict[r];
                            this.options[r] = {},
                            this.setPerAction(r, V(V({}, e.perAction), e.actions[r])),
                            this[i](t[r])
                        }
                        for (var o in t)
                            "getRect" !== o ? E.func(this[o]) && this[o](t[o]) : this.rectChecker(t.getRect);
                        return this
                    }
                }, {
                    key: "unset",
                    value: function() {
                        if (E.string(this.target))
                            for (var t in this._scopeEvents.delegatedEvents)
                                for (var e = this._scopeEvents.delegatedEvents[t], n = e.length - 1; n >= 0; n--) {
                                    var r = e[n]
                                      , i = r.selector
                                      , o = r.context
                                      , a = r.listeners;
                                    i === this.target && o === this._context && e.splice(n, 1);
                                    for (var s = a.length - 1; s >= 0; s--)
                                        this._scopeEvents.removeDelegate(this.target, this._context, t, a[s][0], a[s][1])
                                }
                        else
                            this._scopeEvents.remove(this.target, "all")
                    }
                }]),
                t
            }()
              , sn = function() {
                function t(e) {
                    var n = this;
                    i(this, t),
                    this.list = [],
                    this.selectorMap = {},
                    this.scope = void 0,
                    this.scope = e,
                    e.addListeners({
                        "interactable:unset": function(t) {
                            var e = t.interactable
                              , r = e.target
                              , i = E.string(r) ? n.selectorMap[r] : r[n.scope.id]
                              , o = bt(i, (function(t) {
                                return t === e
                            }
                            ));
                            i.splice(o, 1)
                        }
                    })
                }
                return a(t, [{
                    key: "new",
                    value: function(t, e) {
                        e = V(e || {}, {
                            actions: this.scope.actions
                        });
                        var n = new this.scope.Interactable(t,e,this.scope.document,this.scope.events);
                        return this.scope.addDocument(n._doc),
                        this.list.push(n),
                        E.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []),
                        this.selectorMap[t].push(n)) : (n.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
                            value: [],
                            configurable: !0
                        }),
                        t[this.scope.id].push(n)),
                        this.scope.fire("interactable:new", {
                            target: t,
                            options: e,
                            interactable: n,
                            win: this.scope._win
                        }),
                        n
                    }
                }, {
                    key: "getExisting",
                    value: function(t, e) {
                        var n = e && e.context || this.scope.document
                          , r = E.string(t)
                          , i = r ? this.selectorMap[t] : t[this.scope.id];
                        if (i)
                            return xt(i, (function(e) {
                                return e._context === n && (r || e.inContext(t))
                            }
                            ))
                    }
                }, {
                    key: "forEachMatch",
                    value: function(t, e) {
                        for (var n = 0, r = this.list; n < r.length; n++) {
                            var i = r[n]
                              , o = void 0;
                            if ((E.string(i.target) ? E.element(t) && C(t, i.target) : t === i.target) && i.inContext(t) && (o = e(i)),
                            void 0 !== o)
                                return o
                        }
                    }
                }]),
                t
            }()
              , cn = function() {
                function t() {
                    var e = this;
                    i(this, t),
                    this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())),
                    this.isInitialized = !1,
                    this.listenerMaps = [],
                    this.browser = M,
                    this.defaults = me(Se),
                    this.Eventable = Ve,
                    this.actions = {
                        map: {},
                        phases: {
                            start: !0,
                            move: !0,
                            end: !0
                        },
                        methodDict: {},
                        phaselessTypes: {}
                    },
                    this.interactStatic = function(t) {
                        var e = function e(n, r) {
                            var i = t.interactables.getExisting(n, r);
                            return i || ((i = t.interactables.new(n, r)).events.global = e.globalEvents),
                            i
                        };
                        return e.getPointerAverage = ut,
                        e.getTouchBBox = pt,
                        e.getTouchDistance = ft,
                        e.getTouchAngle = dt,
                        e.getElementRect = N,
                        e.getElementClientRect = L,
                        e.matchesSelector = C,
                        e.closest = A,
                        e.globalEvents = {},
                        e.version = "1.10.27",
                        e.scope = t,
                        e.use = function(t, e) {
                            return this.scope.usePlugin(t, e),
                            this
                        }
                        ,
                        e.isSet = function(t, e) {
                            return !!this.scope.interactables.get(t, e && e.context)
                        }
                        ,
                        e.on = Ht((function(t, e, n) {
                            if (E.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)),
                            E.array(t)) {
                                for (var r = 0, i = t; r < i.length; r++) {
                                    var o = i[r];
                                    this.on(o, e, n)
                                }
                                return this
                            }
                            if (E.object(t)) {
                                for (var a in t)
                                    this.on(a, t[a], e);
                                return this
                            }
                            return ge(t, this.scope.actions) ? this.globalEvents[t] ? this.globalEvents[t].push(e) : this.globalEvents[t] = [e] : this.scope.events.add(this.scope.document, t, e, {
                                options: n
                            }),
                            this
                        }
                        ), "The interact.on() method is being deprecated"),
                        e.off = Ht((function(t, e, n) {
                            if (E.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)),
                            E.array(t)) {
                                for (var r = 0, i = t; r < i.length; r++) {
                                    var o = i[r];
                                    this.off(o, e, n)
                                }
                                return this
                            }
                            if (E.object(t)) {
                                for (var a in t)
                                    this.off(a, t[a], e);
                                return this
                            }
                            var s;
                            return ge(t, this.scope.actions) ? t in this.globalEvents && -1 !== (s = this.globalEvents[t].indexOf(e)) && this.globalEvents[t].splice(s, 1) : this.scope.events.remove(this.scope.document, t, e, n),
                            this
                        }
                        ), "The interact.off() method is being deprecated"),
                        e.debug = function() {
                            return this.scope
                        }
                        ,
                        e.supportsTouch = function() {
                            return M.supportsTouch
                        }
                        ,
                        e.supportsPointerEvent = function() {
                            return M.supportsPointerEvent
                        }
                        ,
                        e.stop = function() {
                            for (var t = 0, e = this.scope.interactions.list; t < e.length; t++)
                                e[t].stop();
                            return this
                        }
                        ,
                        e.pointerMoveTolerance = function(t) {
                            return E.number(t) ? (this.scope.interactions.pointerMoveTolerance = t,
                            this) : this.scope.interactions.pointerMoveTolerance
                        }
                        ,
                        e.addDocument = function(t, e) {
                            this.scope.addDocument(t, e)
                        }
                        ,
                        e.removeDocument = function(t) {
                            this.scope.removeDocument(t)
                        }
                        ,
                        e
                    }(this),
                    this.InteractEvent = _e,
                    this.Interactable = void 0,
                    this.interactables = new sn(this),
                    this._win = void 0,
                    this.document = void 0,
                    this.window = void 0,
                    this.documents = [],
                    this._plugins = {
                        list: [],
                        map: {}
                    },
                    this.onWindowUnload = function(t) {
                        return e.removeDocument(t.target)
                    }
                    ;
                    var n = this;
                    this.Interactable = function(t) {
                        c(r, t);
                        var e = f(r);
                        function r() {
                            return i(this, r),
                            e.apply(this, arguments)
                        }
                        return a(r, [{
                            key: "_defaults",
                            get: function() {
                                return n.defaults
                            }
                        }, {
                            key: "set",
                            value: function(t) {
                                return d(l(r.prototype), "set", this).call(this, t),
                                n.fire("interactable:set", {
                                    options: t,
                                    interactable: this
                                }),
                                this
                            }
                        }, {
                            key: "unset",
                            value: function() {
                                d(l(r.prototype), "unset", this).call(this);
                                var t = n.interactables.list.indexOf(this);
                                t < 0 || (n.interactables.list.splice(t, 1),
                                n.fire("interactable:unset", {
                                    interactable: this
                                }))
                            }
                        }]),
                        r
                    }(an)
                }
                return a(t, [{
                    key: "addListeners",
                    value: function(t, e) {
                        this.listenerMaps.push({
                            id: e,
                            map: t
                        })
                    }
                }, {
                    key: "fire",
                    value: function(t, e) {
                        for (var n = 0, r = this.listenerMaps; n < r.length; n++) {
                            var i = r[n].map[t];
                            if (i && !1 === i(e, this, t))
                                return !1
                        }
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        return this.isInitialized ? this : function(t, e) {
                            return t.isInitialized = !0,
                            E.window(e) && y(e),
                            z.init(e),
                            M.init(e),
                            Nt.init(e),
                            t.window = e,
                            t.document = e.document,
                            t.usePlugin(rn),
                            t.usePlugin(Ue),
                            t
                        }(this, t)
                    }
                }, {
                    key: "pluginIsInstalled",
                    value: function(t) {
                        var e = t.id;
                        return e ? !!this._plugins.map[e] : -1 !== this._plugins.list.indexOf(t)
                    }
                }, {
                    key: "usePlugin",
                    value: function(t, e) {
                        if (!this.isInitialized)
                            return this;
                        if (this.pluginIsInstalled(t))
                            return this;
                        if (t.id && (this._plugins.map[t.id] = t),
                        this._plugins.list.push(t),
                        t.install && t.install(this, e),
                        t.listeners && t.before) {
                            for (var n = 0, r = this.listenerMaps.length, i = t.before.reduce((function(t, e) {
                                return t[e] = !0,
                                t[ln(e)] = !0,
                                t
                            }
                            ), {}); n < r; n++) {
                                var o = this.listenerMaps[n].id;
                                if (o && (i[o] || i[ln(o)]))
                                    break
                            }
                            this.listenerMaps.splice(n, 0, {
                                id: t.id,
                                map: t.listeners
                            })
                        } else
                            t.listeners && this.listenerMaps.push({
                                id: t.id,
                                map: t.listeners
                            });
                        return this
                    }
                }, {
                    key: "addDocument",
                    value: function(t, e) {
                        if (-1 !== this.getDocIndex(t))
                            return !1;
                        var n = b(t);
                        e = e ? V({}, e) : {},
                        this.documents.push({
                            doc: t,
                            options: e
                        }),
                        this.events.documents.push(t),
                        t !== this.document && this.events.add(n, "unload", this.onWindowUnload),
                        this.fire("scope:add-document", {
                            doc: t,
                            window: n,
                            scope: this,
                            options: e
                        })
                    }
                }, {
                    key: "removeDocument",
                    value: function(t) {
                        var e = this.getDocIndex(t)
                          , n = b(t)
                          , r = this.documents[e].options;
                        this.events.remove(n, "unload", this.onWindowUnload),
                        this.documents.splice(e, 1),
                        this.events.documents.splice(e, 1),
                        this.fire("scope:remove-document", {
                            doc: t,
                            window: n,
                            scope: this,
                            options: r
                        })
                    }
                }, {
                    key: "getDocIndex",
                    value: function(t) {
                        for (var e = 0; e < this.documents.length; e++)
                            if (this.documents[e].doc === t)
                                return e;
                        return -1
                    }
                }, {
                    key: "getDocOptions",
                    value: function(t) {
                        var e = this.getDocIndex(t);
                        return -1 === e ? null : this.documents[e].options
                    }
                }, {
                    key: "now",
                    value: function() {
                        return (this.window.Date || Date).now()
                    }
                }]),
                t
            }();
            function ln(t) {
                return t && t.replace(/\/.*$/, "")
            }
            var un = new cn
              , pn = un.interactStatic
              , fn = "undefined" != typeof globalThis ? globalThis : window;
            un.init(fn);
            var dn = Object.freeze({
                __proto__: null,
                edgeTarget: function() {},
                elements: function() {},
                grid: function(t) {
                    var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(e) {
                        var n = e[0]
                          , r = e[1];
                        return n in t || r in t
                    }
                    ))
                      , n = function(n, r) {
                        for (var i = t.range, o = t.limits, a = void 0 === o ? {
                            left: -1 / 0,
                            right: 1 / 0,
                            top: -1 / 0,
                            bottom: 1 / 0
                        } : o, s = t.offset, c = void 0 === s ? {
                            x: 0,
                            y: 0
                        } : s, l = {
                            range: i,
                            grid: t,
                            x: null,
                            y: null
                        }, u = 0; u < e.length; u++) {
                            var p = e[u]
                              , f = p[0]
                              , d = p[1]
                              , h = Math.round((n - c.x) / t[f])
                              , v = Math.round((r - c.y) / t[d]);
                            l[f] = Math.max(a.left, Math.min(a.right, h * t[f] + c.x)),
                            l[d] = Math.max(a.top, Math.min(a.bottom, v * t[d] + c.y))
                        }
                        return l
                    };
                    return n.grid = t,
                    n.coordFields = e,
                    n
                }
            })
              , hn = {
                id: "snappers",
                install: function(t) {
                    var e = t.interactStatic;
                    e.snappers = V(e.snappers || {}, dn),
                    e.createSnapGrid = e.snappers.grid
                }
            }
              , vn = hn
              , gn = {
                start: function(t) {
                    var e = t.state
                      , r = t.rect
                      , i = t.edges
                      , o = t.pageCoords
                      , a = e.options
                      , s = a.ratio
                      , c = a.enabled
                      , l = e.options
                      , u = l.equalDelta
                      , p = l.modifiers;
                    "preserve" === s && (s = r.width / r.height),
                    e.startCoords = V({}, o),
                    e.startRect = V({}, r),
                    e.ratio = s,
                    e.equalDelta = u;
                    var f = e.linkedEdges = {
                        top: i.top || i.left && !i.bottom,
                        left: i.left || i.top && !i.right,
                        bottom: i.bottom || i.right && !i.top,
                        right: i.right || i.bottom && !i.left
                    };
                    if (e.xIsPrimaryAxis = !(!i.left && !i.right),
                    e.equalDelta) {
                        var d = (f.left ? 1 : -1) * (f.top ? 1 : -1);
                        e.edgeSign = {
                            x: d,
                            y: d
                        }
                    } else
                        e.edgeSign = {
                            x: f.left ? -1 : 1,
                            y: f.top ? -1 : 1
                        };
                    if (!1 !== c && V(i, f),
                    null != p && p.length) {
                        var h = new ye(t.interaction);
                        h.copyFrom(t.interaction.modification),
                        h.prepareStates(p),
                        e.subModification = h,
                        h.startAll(n({}, t))
                    }
                },
                set: function(t) {
                    var e = t.state
                      , r = t.rect
                      , i = t.coords
                      , o = e.linkedEdges
                      , a = V({}, i)
                      , s = e.equalDelta ? mn : yn;
                    if (V(t.edges, o),
                    s(e, e.xIsPrimaryAxis, i, r),
                    !e.subModification)
                        return null;
                    var c = V({}, r);
                    K(o, c, {
                        x: i.x - a.x,
                        y: i.y - a.y
                    });
                    var l = e.subModification.setAll(n(n({}, t), {}, {
                        rect: c,
                        edges: o,
                        pageCoords: i,
                        prevCoords: i,
                        prevRect: c
                    }))
                      , u = l.delta;
                    return l.changed && (s(e, Math.abs(u.x) > Math.abs(u.y), l.coords, l.rect),
                    V(i, l.coords)),
                    l.eventProps
                },
                defaults: {
                    ratio: "preserve",
                    equalDelta: !1,
                    modifiers: [],
                    enabled: !1
                }
            };
            function mn(t, e, n) {
                var r = t.startCoords
                  , i = t.edgeSign;
                e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x
            }
            function yn(t, e, n, r) {
                var i = t.startRect
                  , o = t.startCoords
                  , a = t.ratio
                  , s = t.edgeSign;
                if (e) {
                    var c = r.width / a;
                    n.y = o.y + (c - i.height) * s.y
                } else {
                    var l = r.height * a;
                    n.x = o.x + (l - i.width) * s.x
                }
            }
            var bn = xe(gn, "aspectRatio")
              , xn = function() {};
            xn._defaults = {};
            var wn = xn;
            function En(t, e, n) {
                return E.func(t) ? G(t, e.interactable, e.element, [n.x, n.y, e]) : G(t, e.interactable, e.element)
            }
            var Tn = {
                start: function(t) {
                    var e = t.rect
                      , n = t.startOffset
                      , r = t.state
                      , i = t.interaction
                      , o = t.pageCoords
                      , a = r.options
                      , s = a.elementRect
                      , c = V({
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }, a.offset || {});
                    if (e && s) {
                        var l = En(a.restriction, i, o);
                        if (l) {
                            var u = l.right - l.left - e.width
                              , p = l.bottom - l.top - e.height;
                            u < 0 && (c.left += u,
                            c.right += u),
                            p < 0 && (c.top += p,
                            c.bottom += p)
                        }
                        c.left += n.left - e.width * s.left,
                        c.top += n.top - e.height * s.top,
                        c.right += n.right - e.width * (1 - s.right),
                        c.bottom += n.bottom - e.height * (1 - s.bottom)
                    }
                    r.offset = c
                },
                set: function(t) {
                    var e = t.coords
                      , n = t.interaction
                      , r = t.state
                      , i = r.options
                      , o = r.offset
                      , a = En(i.restriction, n, e);
                    if (a) {
                        var s = function(t) {
                            return !t || "left"in t && "top"in t || ((t = V({}, t)).left = t.x || 0,
                            t.top = t.y || 0,
                            t.right = t.right || t.left + t.width,
                            t.bottom = t.bottom || t.top + t.height),
                            t
                        }(a);
                        e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left),
                        e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top)
                    }
                },
                defaults: {
                    restriction: null,
                    elementRect: null,
                    offset: null,
                    endOnly: !1,
                    enabled: !1
                }
            }
              , Sn = xe(Tn, "restrict")
              , _n = {
                top: 1 / 0,
                left: 1 / 0,
                bottom: -1 / 0,
                right: -1 / 0
            }
              , On = {
                top: -1 / 0,
                left: -1 / 0,
                bottom: 1 / 0,
                right: 1 / 0
            };
            function kn(t, e) {
                for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
                    var i = r[n];
                    i in t || (t[i] = e[i])
                }
                return t
            }
            var Pn = {
                noInner: _n,
                noOuter: On,
                start: function(t) {
                    var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
                    o && (e = H(En(o.offset, n, n.coords.start.page))),
                    e = e || {
                        x: 0,
                        y: 0
                    },
                    i.offset = {
                        top: e.y + r.top,
                        left: e.x + r.left,
                        bottom: e.y - r.bottom,
                        right: e.x - r.right
                    }
                },
                set: function(t) {
                    var e = t.coords
                      , n = t.edges
                      , r = t.interaction
                      , i = t.state
                      , o = i.offset
                      , a = i.options;
                    if (n) {
                        var s = V({}, e)
                          , c = En(a.inner, r, s) || {}
                          , l = En(a.outer, r, s) || {};
                        kn(c, _n),
                        kn(l, On),
                        n.top ? e.y = Math.min(Math.max(l.top + o.top, s.y), c.top + o.top) : n.bottom && (e.y = Math.max(Math.min(l.bottom + o.bottom, s.y), c.bottom + o.bottom)),
                        n.left ? e.x = Math.min(Math.max(l.left + o.left, s.x), c.left + o.left) : n.right && (e.x = Math.max(Math.min(l.right + o.right, s.x), c.right + o.right))
                    }
                },
                defaults: {
                    inner: null,
                    outer: null,
                    offset: null,
                    endOnly: !1,
                    enabled: !1
                }
            }
              , zn = xe(Pn, "restrictEdges")
              , Dn = V({
                get elementRect() {
                    return {
                        top: 0,
                        left: 0,
                        bottom: 1,
                        right: 1
                    }
                },
                set elementRect(t) {}
            }, Tn.defaults)
              , Mn = xe({
                start: Tn.start,
                set: Tn.set,
                defaults: Dn
            }, "restrictRect")
              , In = {
                width: -1 / 0,
                height: -1 / 0
            }
              , An = {
                width: 1 / 0,
                height: 1 / 0
            }
              , Rn = xe({
                start: function(t) {
                    return Pn.start(t)
                },
                set: function(t) {
                    var e = t.interaction
                      , n = t.state
                      , r = t.rect
                      , i = t.edges
                      , o = n.options;
                    if (i) {
                        var a = U(En(o.min, e, t.coords)) || In
                          , s = U(En(o.max, e, t.coords)) || An;
                        n.options = {
                            endOnly: o.endOnly,
                            inner: V({}, Pn.noInner),
                            outer: V({}, Pn.noOuter)
                        },
                        i.top ? (n.options.inner.top = r.bottom - a.height,
                        n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height,
                        n.options.outer.bottom = r.top + s.height),
                        i.left ? (n.options.inner.left = r.right - a.width,
                        n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width,
                        n.options.outer.right = r.left + s.width),
                        Pn.set(t),
                        n.options = o
                    }
                },
                defaults: {
                    min: null,
                    max: null,
                    endOnly: !1,
                    enabled: !1
                }
            }, "restrictSize")
              , Cn = {
                start: function(t) {
                    var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, s = t.startOffset, c = a.options, l = c.offsetWithOrigin ? function(t) {
                        var e = t.interaction.element;
                        return H(G(t.state.options.origin, null, null, [e])) || $(t.interactable, e, t.interaction.prepared.name)
                    }(t) : {
                        x: 0,
                        y: 0
                    };
                    if ("startCoords" === c.offset)
                        e = {
                            x: n.coords.start.page.x,
                            y: n.coords.start.page.y
                        };
                    else {
                        var u = G(c.offset, r, i, [n]);
                        (e = H(u) || {
                            x: 0,
                            y: 0
                        }).x += l.x,
                        e.y += l.y
                    }
                    var p = c.relativePoints;
                    a.offsets = o && p && p.length ? p.map((function(t, n) {
                        return {
                            index: n,
                            relativePoint: t,
                            x: s.left - o.width * t.x + e.x,
                            y: s.top - o.height * t.y + e.y
                        }
                    }
                    )) : [{
                        index: 0,
                        relativePoint: null,
                        x: e.x,
                        y: e.y
                    }]
                },
                set: function(t) {
                    var e = t.interaction
                      , n = t.coords
                      , r = t.state
                      , i = r.options
                      , o = r.offsets
                      , a = $(e.interactable, e.element, e.prepared.name)
                      , s = V({}, n)
                      , c = [];
                    i.offsetWithOrigin || (s.x -= a.x,
                    s.y -= a.y);
                    for (var l = 0, u = o; l < u.length; l++)
                        for (var p = u[l], f = s.x - p.x, d = s.y - p.y, h = 0, v = i.targets.length; h < v; h++) {
                            var g = i.targets[h]
                              , m = void 0;
                            (m = E.func(g) ? g(f, d, e._proxy, p, h) : g) && c.push({
                                x: (E.number(m.x) ? m.x : f) + p.x,
                                y: (E.number(m.y) ? m.y : d) + p.y,
                                range: E.number(m.range) ? m.range : i.range,
                                source: g,
                                index: h,
                                offset: p
                            })
                        }
                    for (var y = {
                        target: null,
                        inRange: !1,
                        distance: 0,
                        range: 0,
                        delta: {
                            x: 0,
                            y: 0
                        }
                    }, b = 0; b < c.length; b++) {
                        var x = c[b]
                          , w = x.range
                          , T = x.x - s.x
                          , S = x.y - s.y
                          , _ = Z(T, S)
                          , O = _ <= w;
                        w === 1 / 0 && y.inRange && y.range !== 1 / 0 && (O = !1),
                        y.target && !(O ? y.inRange && w !== 1 / 0 ? _ / w < y.distance / y.range : w === 1 / 0 && y.range !== 1 / 0 || _ < y.distance : !y.inRange && _ < y.distance) || (y.target = x,
                        y.distance = _,
                        y.range = w,
                        y.inRange = O,
                        y.delta.x = T,
                        y.delta.y = S)
                    }
                    return y.inRange && (n.x = y.target.x,
                    n.y = y.target.y),
                    r.closest = y,
                    y
                },
                defaults: {
                    range: 1 / 0,
                    targets: null,
                    offset: null,
                    offsetWithOrigin: !0,
                    origin: null,
                    relativePoints: null,
                    endOnly: !1,
                    enabled: !1
                }
            }
              , jn = xe(Cn, "snap")
              , Fn = {
                start: function(t) {
                    var e = t.state
                      , n = t.edges
                      , r = e.options;
                    if (!n)
                        return null;
                    t.state = {
                        options: {
                            targets: null,
                            relativePoints: [{
                                x: n.left ? 0 : 1,
                                y: n.top ? 0 : 1
                            }],
                            offset: r.offset || "self",
                            origin: {
                                x: 0,
                                y: 0
                            },
                            range: r.range
                        }
                    },
                    e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]],
                    Cn.start(t),
                    e.offsets = t.state.offsets,
                    t.state = e
                },
                set: function(t) {
                    var e = t.interaction
                      , n = t.state
                      , r = t.coords
                      , i = n.options
                      , o = n.offsets
                      , a = {
                        x: r.x - o[0].x,
                        y: r.y - o[0].y
                    };
                    n.options = V({}, i),
                    n.options.targets = [];
                    for (var s = 0, c = i.targets || []; s < c.length; s++) {
                        var l = c[s]
                          , u = void 0;
                        if (u = E.func(l) ? l(a.x, a.y, e) : l) {
                            for (var p = 0, f = n.targetFields; p < f.length; p++) {
                                var d = f[p]
                                  , h = d[0]
                                  , v = d[1];
                                if (h in u || v in u) {
                                    u.x = u[h],
                                    u.y = u[v];
                                    break
                                }
                            }
                            n.options.targets.push(u)
                        }
                    }
                    var g = Cn.set(t);
                    return n.options = i,
                    g
                },
                defaults: {
                    range: 1 / 0,
                    targets: null,
                    offset: null,
                    endOnly: !1,
                    enabled: !1
                }
            }
              , Bn = xe(Fn, "snapSize")
              , Xn = {
                aspectRatio: bn,
                restrictEdges: zn,
                restrict: Sn,
                restrictRect: Mn,
                restrictSize: Rn,
                snapEdges: xe({
                    start: function(t) {
                        var e = t.edges;
                        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]],
                        Fn.start(t)) : null
                    },
                    set: Fn.set,
                    defaults: V(me(Fn.defaults), {
                        targets: void 0,
                        range: void 0,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    })
                }, "snapEdges"),
                snap: jn,
                snapSize: Bn,
                spring: wn,
                avoid: wn,
                transform: wn,
                rubberband: wn
            }
              , Ln = {
                id: "modifiers",
                install: function(t) {
                    var e = t.interactStatic;
                    for (var n in t.usePlugin(Te),
                    t.usePlugin(vn),
                    e.modifiers = Xn,
                    Xn) {
                        var r = Xn[n]
                          , i = r._defaults
                          , o = r._methods;
                        i._methods = o,
                        t.defaults.perAction[n] = i
                    }
                }
            }
              , Nn = Ln
              , Yn = function(t) {
                c(n, t);
                var e = f(n);
                function n(t, r, o, a, s, c) {
                    var l;
                    if (i(this, n),
                    et(p(l = e.call(this, s)), o),
                    o !== r && et(p(l), r),
                    l.timeStamp = c,
                    l.originalEvent = o,
                    l.type = t,
                    l.pointerId = st(r),
                    l.pointerType = ht(r),
                    l.target = a,
                    l.currentTarget = null,
                    "tap" === t) {
                        var u = s.getPointerIndex(r);
                        l.dt = l.timeStamp - s.pointers[u].downTime;
                        var f = l.timeStamp - s.tapTime;
                        l.double = !!s.prevTap && "doubletap" !== s.prevTap.type && s.prevTap.target === l.target && f < 500
                    } else
                        "doubletap" === t && (l.dt = r.timeStamp - s.tapTime,
                        l.double = !0);
                    return l
                }
                return a(n, [{
                    key: "_subtractOrigin",
                    value: function(t) {
                        var e = t.x
                          , n = t.y;
                        return this.pageX -= e,
                        this.pageY -= n,
                        this.clientX -= e,
                        this.clientY -= n,
                        this
                    }
                }, {
                    key: "_addOrigin",
                    value: function(t) {
                        var e = t.x
                          , n = t.y;
                        return this.pageX += e,
                        this.pageY += n,
                        this.clientX += e,
                        this.clientY += n,
                        this
                    }
                }, {
                    key: "preventDefault",
                    value: function() {
                        this.originalEvent.preventDefault()
                    }
                }]),
                n
            }(gt)
              , Wn = {
                id: "pointer-events/base",
                before: ["inertia", "modifiers", "auto-start", "actions"],
                install: function(t) {
                    t.pointerEvents = Wn,
                    t.defaults.actions.pointerEvents = Wn.defaults,
                    V(t.actions.phaselessTypes, Wn.types)
                },
                listeners: {
                    "interactions:new": function(t) {
                        var e = t.interaction;
                        e.prevTap = null,
                        e.tapTime = 0
                    },
                    "interactions:update-pointer": function(t) {
                        var e = t.down
                          , n = t.pointerInfo;
                        !e && n.hold || (n.hold = {
                            duration: 1 / 0,
                            timeout: null
                        })
                    },
                    "interactions:move": function(t, e) {
                        var n = t.interaction
                          , r = t.pointer
                          , i = t.event
                          , o = t.eventTarget;
                        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && Gn(t),
                        Vn({
                            interaction: n,
                            pointer: r,
                            event: i,
                            eventTarget: o,
                            type: "move"
                        }, e))
                    },
                    "interactions:down": function(t, e) {
                        !function(t, e) {
                            for (var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.pointerIndex, s = n.pointers[a].hold, c = Y(o), l = {
                                interaction: n,
                                pointer: r,
                                event: i,
                                eventTarget: o,
                                type: "hold",
                                targets: [],
                                path: c,
                                node: null
                            }, u = 0; u < c.length; u++) {
                                var p = c[u];
                                l.node = p,
                                e.fire("pointerEvents:collect-targets", l)
                            }
                            if (l.targets.length) {
                                for (var f = 1 / 0, d = 0, h = l.targets; d < h.length; d++) {
                                    var v = h[d].eventable.options.holdDuration;
                                    v < f && (f = v)
                                }
                                s.duration = f,
                                s.timeout = setTimeout((function() {
                                    Vn({
                                        interaction: n,
                                        eventTarget: o,
                                        pointer: r,
                                        event: i,
                                        type: "hold"
                                    }, e)
                                }
                                ), f)
                            }
                        }(t, e),
                        Vn(t, e)
                    },
                    "interactions:up": function(t, e) {
                        Gn(t),
                        Vn(t, e),
                        function(t, e) {
                            var n = t.interaction
                              , r = t.pointer
                              , i = t.event
                              , o = t.eventTarget;
                            n.pointerWasMoved || Vn({
                                interaction: n,
                                eventTarget: o,
                                pointer: r,
                                event: i,
                                type: "tap"
                            }, e)
                        }(t, e)
                    },
                    "interactions:cancel": function(t, e) {
                        Gn(t),
                        Vn(t, e)
                    }
                },
                PointerEvent: Yn,
                fire: Vn,
                collectEventTargets: qn,
                defaults: {
                    holdDuration: 600,
                    ignoreFrom: null,
                    allowFrom: null,
                    origin: {
                        x: 0,
                        y: 0
                    }
                },
                types: {
                    down: !0,
                    move: !0,
                    up: !0,
                    cancel: !0,
                    tap: !0,
                    doubletap: !0,
                    hold: !0
                }
            };
            function Vn(t, e) {
                var n = t.interaction
                  , r = t.pointer
                  , i = t.event
                  , o = t.eventTarget
                  , a = t.type
                  , s = t.targets
                  , c = void 0 === s ? qn(t, e) : s
                  , l = new Yn(a,r,i,o,n,e.now());
                e.fire("pointerEvents:new", {
                    pointerEvent: l
                });
                for (var u = {
                    interaction: n,
                    pointer: r,
                    event: i,
                    eventTarget: o,
                    targets: c,
                    type: a,
                    pointerEvent: l
                }, p = 0; p < c.length; p++) {
                    var f = c[p];
                    for (var d in f.props || {})
                        l[d] = f.props[d];
                    var h = $(f.eventable, f.node);
                    if (l._subtractOrigin(h),
                    l.eventable = f.eventable,
                    l.currentTarget = f.node,
                    f.eventable.fire(l),
                    l._addOrigin(h),
                    l.immediatePropagationStopped || l.propagationStopped && p + 1 < c.length && c[p + 1].node !== l.currentTarget)
                        break
                }
                if (e.fire("pointerEvents:fired", u),
                "tap" === a) {
                    var v = l.double ? Vn({
                        interaction: n,
                        pointer: r,
                        event: i,
                        eventTarget: o,
                        type: "doubletap"
                    }, e) : l;
                    n.prevTap = v,
                    n.tapTime = v.timeStamp
                }
                return l
            }
            function qn(t, e) {
                var n = t.interaction
                  , r = t.pointer
                  , i = t.event
                  , o = t.eventTarget
                  , a = t.type
                  , s = n.getPointerIndex(r)
                  , c = n.pointers[s];
                if ("tap" === a && (n.pointerWasMoved || !c || c.downTarget !== o))
                    return [];
                for (var l = Y(o), u = {
                    interaction: n,
                    pointer: r,
                    event: i,
                    eventTarget: o,
                    type: a,
                    path: l,
                    targets: [],
                    node: null
                }, p = 0; p < l.length; p++) {
                    var f = l[p];
                    u.node = f,
                    e.fire("pointerEvents:collect-targets", u)
                }
                return "hold" === a && (u.targets = u.targets.filter((function(t) {
                    var e, r;
                    return t.eventable.options.holdDuration === (null == (e = n.pointers[s]) || null == (r = e.hold) ? void 0 : r.duration)
                }
                ))),
                u.targets
            }
            function Gn(t) {
                var e = t.interaction
                  , n = t.pointerIndex
                  , r = e.pointers[n].hold;
                r && r.timeout && (clearTimeout(r.timeout),
                r.timeout = null)
            }
            var Hn = Object.freeze({
                __proto__: null,
                default: Wn
            });
            function Un(t) {
                var e = t.interaction;
                e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle),
                e.holdIntervalHandle = null)
            }
            var Kn = {
                id: "pointer-events/holdRepeat",
                install: function(t) {
                    t.usePlugin(Wn);
                    var e = t.pointerEvents;
                    e.defaults.holdRepeatInterval = 0,
                    e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0
                },
                listeners: ["move", "up", "cancel", "endall"].reduce((function(t, e) {
                    return t["pointerEvents:".concat(e)] = Un,
                    t
                }
                ), {
                    "pointerEvents:new": function(t) {
                        var e = t.pointerEvent;
                        "hold" === e.type && (e.count = (e.count || 0) + 1)
                    },
                    "pointerEvents:fired": function(t, e) {
                        var n = t.interaction
                          , r = t.pointerEvent
                          , i = t.eventTarget
                          , o = t.targets;
                        if ("hold" === r.type && o.length) {
                            var a = o[0].eventable.options.holdRepeatInterval;
                            a <= 0 || (n.holdIntervalHandle = setTimeout((function() {
                                e.pointerEvents.fire({
                                    interaction: n,
                                    eventTarget: i,
                                    type: "hold",
                                    pointer: r,
                                    event: r
                                }, e)
                            }
                            ), a))
                        }
                    }
                })
            }
              , $n = Kn
              , Jn = {
                id: "pointer-events/interactableTargets",
                install: function(t) {
                    var e = t.Interactable;
                    e.prototype.pointerEvents = function(t) {
                        return V(this.events.options, t),
                        this
                    }
                    ;
                    var n = e.prototype._backCompatOption;
                    e.prototype._backCompatOption = function(t, e) {
                        var r = n.call(this, t, e);
                        return r === this && (this.events.options[t] = e),
                        r
                    }
                },
                listeners: {
                    "pointerEvents:collect-targets": function(t, e) {
                        var n = t.targets
                          , r = t.node
                          , i = t.type
                          , o = t.eventTarget;
                        e.interactables.forEachMatch(r, (function(t) {
                            var e = t.events
                              , a = e.options;
                            e.types[i] && e.types[i].length && t.testIgnoreAllow(a, r, o) && n.push({
                                node: r,
                                eventable: e,
                                props: {
                                    interactable: t
                                }
                            })
                        }
                        ))
                    },
                    "interactable:new": function(t) {
                        var e = t.interactable;
                        e.events.getRect = function(t) {
                            return e.getRect(t)
                        }
                    },
                    "interactable:set": function(t, e) {
                        var n = t.interactable
                          , r = t.options;
                        V(n.events.options, e.pointerEvents.defaults),
                        V(n.events.options, r.pointerEvents || {})
                    }
                }
            }
              , Qn = Jn
              , Zn = {
                id: "pointer-events",
                install: function(t) {
                    t.usePlugin(Hn),
                    t.usePlugin($n),
                    t.usePlugin(Qn)
                }
            }
              , tr = Zn
              , er = {
                id: "reflow",
                install: function(t) {
                    var e = t.Interactable;
                    t.actions.phases.reflow = !0,
                    e.prototype.reflow = function(e) {
                        return function(t, e, n) {
                            for (var r = t.getAllElements(), i = n.window.Promise, o = i ? [] : null, a = function() {
                                var a = r[s]
                                  , c = t.getRect(a);
                                if (!c)
                                    return 1;
                                var l, u = xt(n.interactions.list, (function(n) {
                                    return n.interacting() && n.interactable === t && n.element === a && n.prepared.name === e.name
                                }
                                ));
                                if (u)
                                    u.move(),
                                    o && (l = u._reflowPromise || new i((function(t) {
                                        u._reflowResolve = t
                                    }
                                    )));
                                else {
                                    var p = U(c)
                                      , f = function(t) {
                                        return {
                                            coords: t,
                                            get page() {
                                                return this.coords.page
                                            },
                                            get client() {
                                                return this.coords.client
                                            },
                                            get timeStamp() {
                                                return this.coords.timeStamp
                                            },
                                            get pageX() {
                                                return this.coords.page.x
                                            },
                                            get pageY() {
                                                return this.coords.page.y
                                            },
                                            get clientX() {
                                                return this.coords.client.x
                                            },
                                            get clientY() {
                                                return this.coords.client.y
                                            },
                                            get pointerId() {
                                                return this.coords.pointerId
                                            },
                                            get target() {
                                                return this.coords.target
                                            },
                                            get type() {
                                                return this.coords.type
                                            },
                                            get pointerType() {
                                                return this.coords.pointerType
                                            },
                                            get buttons() {
                                                return this.coords.buttons
                                            },
                                            preventDefault: function() {}
                                        }
                                    }({
                                        page: {
                                            x: p.x,
                                            y: p.y
                                        },
                                        client: {
                                            x: p.x,
                                            y: p.y
                                        },
                                        timeStamp: n.now()
                                    });
                                    l = function(t, e, n, r, i) {
                                        var o = t.interactions.new({
                                            pointerType: "reflow"
                                        })
                                          , a = {
                                            interaction: o,
                                            event: i,
                                            pointer: i,
                                            eventTarget: n,
                                            phase: "reflow"
                                        };
                                        o.interactable = e,
                                        o.element = n,
                                        o.prevEvent = i,
                                        o.updatePointer(i, i, n, !0),
                                        rt(o.coords.delta),
                                        Ut(o.prepared, r),
                                        o._doPhase(a);
                                        var s = t.window.Promise
                                          , c = s ? new s((function(t) {
                                            o._reflowResolve = t
                                        }
                                        )) : void 0;
                                        return o._reflowPromise = c,
                                        o.start(r, e, n),
                                        o._interacting ? (o.move(a),
                                        o.end(i)) : (o.stop(),
                                        o._reflowResolve()),
                                        o.removePointer(i, i),
                                        c
                                    }(n, t, a, e, f)
                                }
                                o && o.push(l)
                            }, s = 0; s < r.length && !a(); s++)
                                ;
                            return o && i.all(o).then((function() {
                                return t
                            }
                            ))
                        }(this, e, t)
                    }
                },
                listeners: {
                    "interactions:stop": function(t, e) {
                        var n = t.interaction;
                        "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(),
                        function(t, e) {
                            t.splice(t.indexOf(e), 1)
                        }(e.interactions.list, n))
                    }
                }
            }
              , nr = er;
            if (pn.use(ve),
            pn.use(je),
            pn.use(tr),
            pn.use(Ye),
            pn.use(Nn),
            pn.use(fe),
            pn.use(Xt),
            pn.use(Gt),
            pn.use(nr),
            pn.default = pn,
            "object" === r(t) && t)
                try {
                    t.exports = pn
                } catch (e) {}
            return pn.default = pn,
            pn
        }()
    }
}]);
