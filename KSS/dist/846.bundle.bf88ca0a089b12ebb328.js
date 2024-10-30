/*! For license information please see 846.bundle.bf88ca0a089b12ebb328.js.LICENSE.txt */
(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[846], {
    67097: function(M, b) {
        !function(M) {
            "use strict";
            var b = function(M) {
                return function(b) {
                    var z = M(b);
                    return b.add(z),
                    z
                }
            }
              , z = function(M) {
                return function(b, z) {
                    return M.set(b, z),
                    z
                }
            }
              , p = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER
              , O = 536870912
              , o = 2 * O
              , e = function(M, b) {
                return function(z) {
                    var e = b.get(z)
                      , c = void 0 === e ? z.size : e < o ? e + 1 : 0;
                    if (!z.has(c))
                        return M(z, c);
                    if (z.size < O) {
                        for (; z.has(c); )
                            c = Math.floor(Math.random() * o);
                        return M(z, c)
                    }
                    if (z.size > p)
                        throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                    for (; z.has(c); )
                        c = Math.floor(Math.random() * p);
                    return M(z, c)
                }
            }
              , c = new WeakMap
              , n = z(c)
              , t = e(n, c)
              , a = b(t);
            M.addUniqueNumber = a,
            M.generateUniqueNumber = t
        }(b)
    },
    44523: M => {
        "use strict";
        M.exports = function(M, b) {
            return b || (b = {}),
            "string" != typeof (M = M && M.__esModule ? M.default : M) ? M : (b.hash && (M += b.hash),
            b.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(M) ? '"'.concat(M, '"') : M)
        }
    }
    ,
    2464: function(M, b, z) {
        "use strict";
        var p = this && this.__spreadArray || function(M, b, z) {
            if (z || 2 === arguments.length)
                for (var p, O = 0, o = b.length; O < o; O++)
                    !p && O in b || (p || (p = Array.prototype.slice.call(b, 0, O)),
                    p[O] = b[O]);
            return M.concat(p || Array.prototype.slice.call(b))
        }
        ;
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var O = z(30851)
          , o = "is-tab-duplicated:duplication-history"
          , e = "is-tab-duplicated:tab-id"
          , c = function() {
            function M() {}
            return M.generateTabId = function() {
                return (0,
                O.v4)()
            }
            ,
            M.saveTabIdToSessionStorage = function(M) {
                sessionStorage.setItem(e, M)
            }
            ,
            M.failOnMissingSessionStorage = function() {
                if (!navigator.cookieEnabled || !sessionStorage)
                    throw new Error("sessionStorage needs to be enabled to handle duplicated tabs")
            }
            ,
            M.clearTabIdFromSessionStorage = function() {
                return sessionStorage.removeItem(e)
            }
            ,
            M.getTabIdFromSessionStorage = function() {
                return sessionStorage && sessionStorage.getItem(e)
            }
            ,
            M.initInstance = function() {
                var b = this;
                this.failOnMissingSessionStorage();
                var z, O, e, c = this.getTabIdFromSessionStorage();
                c ? (M.instance = {
                    id: c
                },
                this.clearTabIdFromSessionStorage()) : M.instance = {
                    id: this.generateTabId()
                },
                z = {
                    tabId: M.getInstance().id
                },
                (e = sessionStorage.getItem(o)) && 0 !== JSON.parse(e).filter((function(M) {
                    return M.tabId === z.tabId
                }
                )).length || (O = z,
                e ? sessionStorage.setItem(o, JSON.stringify(p(p([], JSON.parse(e), !0), [O], !1))) : sessionStorage.setItem(o, JSON.stringify([O])));
                var n = {
                    visibilitychangehide: !1,
                    pagehide: !1,
                    blur: !1
                };
                document.addEventListener("visibilitychange", (function(z) {
                    "visible" === document.visibilityState ? (n.visibilitychangehide = !1,
                    b.clearTabIdFromSessionStorage()) : (n.visibilitychangehide = !0,
                    n.pagehide || n.blur || !n.visibilitychangehide || b.saveTabIdToSessionStorage(M.instance.id))
                }
                )),
                document.addEventListener("pagehide", (function() {
                    n.pagehide = !0
                }
                )),
                document.addEventListener("pageshow", (function() {
                    n.pagehide = !1
                }
                )),
                window.addEventListener("blur", (function() {
                    n.blur = !0
                }
                )),
                window.addEventListener("focus", (function() {
                    n.blur = !1
                }
                ))
            }
            ,
            M.getInstance = function() {
                return M.instance
            }
            ,
            M.isTabDuplicated = function() {
                return !(!sessionStorage || null === sessionStorage.getItem(o)) && JSON.parse(sessionStorage.getItem(o)).length > 1
            }
            ,
            M
        }();
        b.default = c
    },
    30851: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        Object.defineProperty(b, "NIL", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(b, "parse", {
            enumerable: !0,
            get: function() {
                return A.default
            }
        }),
        Object.defineProperty(b, "stringify", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }),
        Object.defineProperty(b, "v1", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(b, "v3", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }),
        Object.defineProperty(b, "v4", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(b, "v5", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }),
        Object.defineProperty(b, "validate", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }),
        Object.defineProperty(b, "version", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var p = d(z(73576))
          , O = d(z(36939))
          , o = d(z(5181))
          , e = d(z(8e4))
          , c = d(z(4382))
          , n = d(z(52885))
          , t = d(z(46454))
          , a = d(z(39573))
          , A = d(z(82964));
        function d(M) {
            return M && M.__esModule ? M : {
                default: M
            }
        }
    }
    ,
    13159: (M, b) => {
        "use strict";
        function z(M) {
            return 14 + (M + 64 >>> 9 << 4) + 1
        }
        function p(M, b) {
            const z = (65535 & M) + (65535 & b);
            return (M >> 16) + (b >> 16) + (z >> 16) << 16 | 65535 & z
        }
        function O(M, b, z, O, o, e) {
            return p((c = p(p(b, M), p(O, e))) << (n = o) | c >>> 32 - n, z);
            var c, n
        }
        function o(M, b, z, p, o, e, c) {
            return O(b & z | ~b & p, M, b, o, e, c)
        }
        function e(M, b, z, p, o, e, c) {
            return O(b & p | z & ~p, M, b, o, e, c)
        }
        function c(M, b, z, p, o, e, c) {
            return O(b ^ z ^ p, M, b, o, e, c)
        }
        function n(M, b, z, p, o, e, c) {
            return O(z ^ (b | ~p), M, b, o, e, c)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var t = function(M) {
            if ("string" == typeof M) {
                const b = unescape(encodeURIComponent(M));
                M = new Uint8Array(b.length);
                for (let z = 0; z < b.length; ++z)
                    M[z] = b.charCodeAt(z)
            }
            return function(M) {
                const b = []
                  , z = 32 * M.length
                  , p = "0123456789abcdef";
                for (let O = 0; O < z; O += 8) {
                    const z = M[O >> 5] >>> O % 32 & 255
                      , o = parseInt(p.charAt(z >>> 4 & 15) + p.charAt(15 & z), 16);
                    b.push(o)
                }
                return b
            }(function(M, b) {
                M[b >> 5] |= 128 << b % 32,
                M[z(b) - 1] = b;
                let O = 1732584193
                  , t = -271733879
                  , a = -1732584194
                  , A = 271733878;
                for (let b = 0; b < M.length; b += 16) {
                    const z = O
                      , d = t
                      , r = a
                      , i = A;
                    O = o(O, t, a, A, M[b], 7, -680876936),
                    A = o(A, O, t, a, M[b + 1], 12, -389564586),
                    a = o(a, A, O, t, M[b + 2], 17, 606105819),
                    t = o(t, a, A, O, M[b + 3], 22, -1044525330),
                    O = o(O, t, a, A, M[b + 4], 7, -176418897),
                    A = o(A, O, t, a, M[b + 5], 12, 1200080426),
                    a = o(a, A, O, t, M[b + 6], 17, -1473231341),
                    t = o(t, a, A, O, M[b + 7], 22, -45705983),
                    O = o(O, t, a, A, M[b + 8], 7, 1770035416),
                    A = o(A, O, t, a, M[b + 9], 12, -1958414417),
                    a = o(a, A, O, t, M[b + 10], 17, -42063),
                    t = o(t, a, A, O, M[b + 11], 22, -1990404162),
                    O = o(O, t, a, A, M[b + 12], 7, 1804603682),
                    A = o(A, O, t, a, M[b + 13], 12, -40341101),
                    a = o(a, A, O, t, M[b + 14], 17, -1502002290),
                    t = o(t, a, A, O, M[b + 15], 22, 1236535329),
                    O = e(O, t, a, A, M[b + 1], 5, -165796510),
                    A = e(A, O, t, a, M[b + 6], 9, -1069501632),
                    a = e(a, A, O, t, M[b + 11], 14, 643717713),
                    t = e(t, a, A, O, M[b], 20, -373897302),
                    O = e(O, t, a, A, M[b + 5], 5, -701558691),
                    A = e(A, O, t, a, M[b + 10], 9, 38016083),
                    a = e(a, A, O, t, M[b + 15], 14, -660478335),
                    t = e(t, a, A, O, M[b + 4], 20, -405537848),
                    O = e(O, t, a, A, M[b + 9], 5, 568446438),
                    A = e(A, O, t, a, M[b + 14], 9, -1019803690),
                    a = e(a, A, O, t, M[b + 3], 14, -187363961),
                    t = e(t, a, A, O, M[b + 8], 20, 1163531501),
                    O = e(O, t, a, A, M[b + 13], 5, -1444681467),
                    A = e(A, O, t, a, M[b + 2], 9, -51403784),
                    a = e(a, A, O, t, M[b + 7], 14, 1735328473),
                    t = e(t, a, A, O, M[b + 12], 20, -1926607734),
                    O = c(O, t, a, A, M[b + 5], 4, -378558),
                    A = c(A, O, t, a, M[b + 8], 11, -2022574463),
                    a = c(a, A, O, t, M[b + 11], 16, 1839030562),
                    t = c(t, a, A, O, M[b + 14], 23, -35309556),
                    O = c(O, t, a, A, M[b + 1], 4, -1530992060),
                    A = c(A, O, t, a, M[b + 4], 11, 1272893353),
                    a = c(a, A, O, t, M[b + 7], 16, -155497632),
                    t = c(t, a, A, O, M[b + 10], 23, -1094730640),
                    O = c(O, t, a, A, M[b + 13], 4, 681279174),
                    A = c(A, O, t, a, M[b], 11, -358537222),
                    a = c(a, A, O, t, M[b + 3], 16, -722521979),
                    t = c(t, a, A, O, M[b + 6], 23, 76029189),
                    O = c(O, t, a, A, M[b + 9], 4, -640364487),
                    A = c(A, O, t, a, M[b + 12], 11, -421815835),
                    a = c(a, A, O, t, M[b + 15], 16, 530742520),
                    t = c(t, a, A, O, M[b + 2], 23, -995338651),
                    O = n(O, t, a, A, M[b], 6, -198630844),
                    A = n(A, O, t, a, M[b + 7], 10, 1126891415),
                    a = n(a, A, O, t, M[b + 14], 15, -1416354905),
                    t = n(t, a, A, O, M[b + 5], 21, -57434055),
                    O = n(O, t, a, A, M[b + 12], 6, 1700485571),
                    A = n(A, O, t, a, M[b + 3], 10, -1894986606),
                    a = n(a, A, O, t, M[b + 10], 15, -1051523),
                    t = n(t, a, A, O, M[b + 1], 21, -2054922799),
                    O = n(O, t, a, A, M[b + 8], 6, 1873313359),
                    A = n(A, O, t, a, M[b + 15], 10, -30611744),
                    a = n(a, A, O, t, M[b + 6], 15, -1560198380),
                    t = n(t, a, A, O, M[b + 13], 21, 1309151649),
                    O = n(O, t, a, A, M[b + 4], 6, -145523070),
                    A = n(A, O, t, a, M[b + 11], 10, -1120210379),
                    a = n(a, A, O, t, M[b + 2], 15, 718787259),
                    t = n(t, a, A, O, M[b + 9], 21, -343485551),
                    O = p(O, z),
                    t = p(t, d),
                    a = p(a, r),
                    A = p(A, i)
                }
                return [O, t, a, A]
            }(function(M) {
                if (0 === M.length)
                    return [];
                const b = 8 * M.length
                  , p = new Uint32Array(z(b));
                for (let z = 0; z < b; z += 8)
                    p[z >> 5] |= (255 & M[z / 8]) << z % 32;
                return p
            }(M), 8 * M.length))
        };
        b.default = t
    }
    ,
    74120: (M, b) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var z = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        b.default = z
    }
    ,
    4382: (M, b) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        b.default = "00000000-0000-0000-0000-000000000000"
    }
    ,
    82964: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p, O = (p = z(46454)) && p.__esModule ? p : {
            default: p
        };
        var o = function(M) {
            if (!(0,
            O.default)(M))
                throw TypeError("Invalid UUID");
            let b;
            const z = new Uint8Array(16);
            return z[0] = (b = parseInt(M.slice(0, 8), 16)) >>> 24,
            z[1] = b >>> 16 & 255,
            z[2] = b >>> 8 & 255,
            z[3] = 255 & b,
            z[4] = (b = parseInt(M.slice(9, 13), 16)) >>> 8,
            z[5] = 255 & b,
            z[6] = (b = parseInt(M.slice(14, 18), 16)) >>> 8,
            z[7] = 255 & b,
            z[8] = (b = parseInt(M.slice(19, 23), 16)) >>> 8,
            z[9] = 255 & b,
            z[10] = (b = parseInt(M.slice(24, 36), 16)) / 1099511627776 & 255,
            z[11] = b / 4294967296 & 255,
            z[12] = b >>> 24 & 255,
            z[13] = b >>> 16 & 255,
            z[14] = b >>> 8 & 255,
            z[15] = 255 & b,
            z
        };
        b.default = o
    }
    ,
    19566: (M, b) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        b.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
    }
    ,
    4411: (M, b) => {
        "use strict";
        let z;
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = function() {
            if (!z && (z = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !z))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return z(p)
        }
        ;
        const p = new Uint8Array(16)
    }
    ,
    89863: (M, b) => {
        "use strict";
        function z(M, b, z, p) {
            switch (M) {
            case 0:
                return b & z ^ ~b & p;
            case 1:
            case 3:
                return b ^ z ^ p;
            case 2:
                return b & z ^ b & p ^ z & p
            }
        }
        function p(M, b) {
            return M << b | M >>> 32 - b
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var O = function(M) {
            const b = [1518500249, 1859775393, 2400959708, 3395469782]
              , O = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof M) {
                const b = unescape(encodeURIComponent(M));
                M = [];
                for (let z = 0; z < b.length; ++z)
                    M.push(b.charCodeAt(z))
            } else
                Array.isArray(M) || (M = Array.prototype.slice.call(M));
            M.push(128);
            const o = M.length / 4 + 2
              , e = Math.ceil(o / 16)
              , c = new Array(e);
            for (let b = 0; b < e; ++b) {
                const z = new Uint32Array(16);
                for (let p = 0; p < 16; ++p)
                    z[p] = M[64 * b + 4 * p] << 24 | M[64 * b + 4 * p + 1] << 16 | M[64 * b + 4 * p + 2] << 8 | M[64 * b + 4 * p + 3];
                c[b] = z
            }
            c[e - 1][14] = 8 * (M.length - 1) / Math.pow(2, 32),
            c[e - 1][14] = Math.floor(c[e - 1][14]),
            c[e - 1][15] = 8 * (M.length - 1) & 4294967295;
            for (let M = 0; M < e; ++M) {
                const o = new Uint32Array(80);
                for (let b = 0; b < 16; ++b)
                    o[b] = c[M][b];
                for (let M = 16; M < 80; ++M)
                    o[M] = p(o[M - 3] ^ o[M - 8] ^ o[M - 14] ^ o[M - 16], 1);
                let e = O[0]
                  , n = O[1]
                  , t = O[2]
                  , a = O[3]
                  , A = O[4];
                for (let M = 0; M < 80; ++M) {
                    const O = Math.floor(M / 20)
                      , c = p(e, 5) + z(O, n, t, a) + A + b[O] + o[M] >>> 0;
                    A = a,
                    a = t,
                    t = p(n, 30) >>> 0,
                    n = e,
                    e = c
                }
                O[0] = O[0] + e >>> 0,
                O[1] = O[1] + n >>> 0,
                O[2] = O[2] + t >>> 0,
                O[3] = O[3] + a >>> 0,
                O[4] = O[4] + A >>> 0
            }
            return [O[0] >> 24 & 255, O[0] >> 16 & 255, O[0] >> 8 & 255, 255 & O[0], O[1] >> 24 & 255, O[1] >> 16 & 255, O[1] >> 8 & 255, 255 & O[1], O[2] >> 24 & 255, O[2] >> 16 & 255, O[2] >> 8 & 255, 255 & O[2], O[3] >> 24 & 255, O[3] >> 16 & 255, O[3] >> 8 & 255, 255 & O[3], O[4] >> 24 & 255, O[4] >> 16 & 255, O[4] >> 8 & 255, 255 & O[4]]
        };
        b.default = O
    }
    ,
    39573: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0,
        b.unsafeStringify = e;
        var p, O = (p = z(46454)) && p.__esModule ? p : {
            default: p
        };
        const o = [];
        for (let M = 0; M < 256; ++M)
            o.push((M + 256).toString(16).slice(1));
        function e(M, b=0) {
            return o[M[b + 0]] + o[M[b + 1]] + o[M[b + 2]] + o[M[b + 3]] + "-" + o[M[b + 4]] + o[M[b + 5]] + "-" + o[M[b + 6]] + o[M[b + 7]] + "-" + o[M[b + 8]] + o[M[b + 9]] + "-" + o[M[b + 10]] + o[M[b + 11]] + o[M[b + 12]] + o[M[b + 13]] + o[M[b + 14]] + o[M[b + 15]]
        }
        var c = function(M, b=0) {
            const z = e(M, b);
            if (!(0,
            O.default)(z))
                throw TypeError("Stringified UUID is invalid");
            return z
        };
        b.default = c
    }
    ,
    73576: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p, O = (p = z(4411)) && p.__esModule ? p : {
            default: p
        }, o = z(39573);
        let e, c, n = 0, t = 0;
        var a = function(M, b, z) {
            let p = b && z || 0;
            const a = b || new Array(16);
            let A = (M = M || {}).node || e
              , d = void 0 !== M.clockseq ? M.clockseq : c;
            if (null == A || null == d) {
                const b = M.random || (M.rng || O.default)();
                null == A && (A = e = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]),
                null == d && (d = c = 16383 & (b[6] << 8 | b[7]))
            }
            let r = void 0 !== M.msecs ? M.msecs : Date.now()
              , i = void 0 !== M.nsecs ? M.nsecs : t + 1;
            const q = r - n + (i - t) / 1e4;
            if (q < 0 && void 0 === M.clockseq && (d = d + 1 & 16383),
            (q < 0 || r > n) && void 0 === M.nsecs && (i = 0),
            i >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            n = r,
            t = i,
            c = d,
            r += 122192928e5;
            const s = (1e4 * (268435455 & r) + i) % 4294967296;
            a[p++] = s >>> 24 & 255,
            a[p++] = s >>> 16 & 255,
            a[p++] = s >>> 8 & 255,
            a[p++] = 255 & s;
            const u = r / 4294967296 * 1e4 & 268435455;
            a[p++] = u >>> 8 & 255,
            a[p++] = 255 & u,
            a[p++] = u >>> 24 & 15 | 16,
            a[p++] = u >>> 16 & 255,
            a[p++] = d >>> 8 | 128,
            a[p++] = 255 & d;
            for (let M = 0; M < 6; ++M)
                a[p + M] = A[M];
            return b || (0,
            o.unsafeStringify)(a)
        };
        b.default = a
    }
    ,
    36939: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p = o(z(30648))
          , O = o(z(13159));
        function o(M) {
            return M && M.__esModule ? M : {
                default: M
            }
        }
        var e = (0,
        p.default)("v3", 48, O.default);
        b.default = e
    }
    ,
    30648: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.URL = b.DNS = void 0,
        b.default = function(M, b, z) {
            function p(M, p, e, c) {
                var n;
                if ("string" == typeof M && (M = function(M) {
                    M = unescape(encodeURIComponent(M));
                    const b = [];
                    for (let z = 0; z < M.length; ++z)
                        b.push(M.charCodeAt(z));
                    return b
                }(M)),
                "string" == typeof p && (p = (0,
                o.default)(p)),
                16 !== (null === (n = p) || void 0 === n ? void 0 : n.length))
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let t = new Uint8Array(16 + M.length);
                if (t.set(p),
                t.set(M, p.length),
                t = z(t),
                t[6] = 15 & t[6] | b,
                t[8] = 63 & t[8] | 128,
                e) {
                    c = c || 0;
                    for (let M = 0; M < 16; ++M)
                        e[c + M] = t[M];
                    return e
                }
                return (0,
                O.unsafeStringify)(t)
            }
            try {
                p.name = M
            } catch (M) {}
            return p.DNS = e,
            p.URL = c,
            p
        }
        ;
        var p, O = z(39573), o = (p = z(82964)) && p.__esModule ? p : {
            default: p
        };
        const e = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        b.DNS = e;
        const c = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        b.URL = c
    }
    ,
    5181: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p = e(z(74120))
          , O = e(z(4411))
          , o = z(39573);
        function e(M) {
            return M && M.__esModule ? M : {
                default: M
            }
        }
        var c = function(M, b, z) {
            if (p.default.randomUUID && !b && !M)
                return p.default.randomUUID();
            const e = (M = M || {}).random || (M.rng || O.default)();
            if (e[6] = 15 & e[6] | 64,
            e[8] = 63 & e[8] | 128,
            b) {
                z = z || 0;
                for (let M = 0; M < 16; ++M)
                    b[z + M] = e[M];
                return b
            }
            return (0,
            o.unsafeStringify)(e)
        };
        b.default = c
    }
    ,
    8e4: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p = o(z(30648))
          , O = o(z(89863));
        function o(M) {
            return M && M.__esModule ? M : {
                default: M
            }
        }
        var e = (0,
        p.default)("v5", 80, O.default);
        b.default = e
    }
    ,
    46454: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p, O = (p = z(19566)) && p.__esModule ? p : {
            default: p
        };
        var o = function(M) {
            return "string" == typeof M && O.default.test(M)
        };
        b.default = o
    }
    ,
    52885: (M, b, z) => {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = void 0;
        var p, O = (p = z(46454)) && p.__esModule ? p : {
            default: p
        };
        var o = function(M) {
            if (!(0,
            O.default)(M))
                throw TypeError("Invalid UUID");
            return parseInt(M.slice(14, 15), 16)
        };
        b.default = o
    }
    ,
    38659: (M, b, z) => {
        var p, O, o;
        window.jQuery,
        window.Zepto,
        O = [z(81271)],
        void 0 === (o = "function" == typeof (p = function(M) {
            "use strict";
            var b = function(b, z, p) {
                var O = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var M, z = 0, p = b.get(0), o = document.selection, e = p.selectionStart;
                            return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((M = o.createRange()).moveStart("character", -O.val().length),
                            z = M.text.length) : (e || "0" === e) && (z = e),
                            z
                        } catch (M) {}
                    },
                    setCaret: function(M) {
                        try {
                            if (b.is(":focus")) {
                                var z, p = b.get(0);
                                p.setSelectionRange ? p.setSelectionRange(M, M) : ((z = p.createTextRange()).collapse(!0),
                                z.moveEnd("character", M),
                                z.moveStart("character", M),
                                z.select())
                            }
                        } catch (M) {}
                    },
                    events: function() {
                        b.on("keydown.mask", (function(M) {
                            b.data("mask-keycode", M.keyCode || M.which),
                            b.data("mask-previus-value", b.val()),
                            b.data("mask-previus-caret-pos", O.getCaret()),
                            O.maskDigitPosMapOld = O.maskDigitPosMap
                        }
                        )).on(M.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", O.behaviour).on("paste.mask drop.mask", (function() {
                            setTimeout((function() {
                                b.keydown().keyup()
                            }
                            ), 100)
                        }
                        )).on("change.mask", (function() {
                            b.data("changed", !0)
                        }
                        )).on("blur.mask", (function() {
                            c === O.val() || b.data("changed") || b.trigger("change"),
                            b.data("changed", !1)
                        }
                        )).on("blur.mask", (function() {
                            c = O.val()
                        }
                        )).on("focus.mask", (function(b) {
                            !0 === p.selectOnFocus && M(b.target).select()
                        }
                        )).on("focusout.mask", (function() {
                            p.clearIfNotMatch && !o.test(O.val()) && O.val("")
                        }
                        ))
                    },
                    getRegexMask: function() {
                        for (var M, b, p, O, o, c, n = [], t = 0; t < z.length; t++)
                            (M = e.translation[z.charAt(t)]) ? (b = M.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                            p = M.optional,
                            (O = M.recursive) ? (n.push(z.charAt(t)),
                            o = {
                                digit: z.charAt(t),
                                pattern: b
                            }) : n.push(p || O ? b + "?" : b)) : n.push(z.charAt(t).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return c = n.join(""),
                        o && (c = c.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit,"g"), o.pattern)),
                        new RegExp(c)
                    },
                    destroyEvents: function() {
                        b.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                    },
                    val: function(M) {
                        var z, p = b.is("input") ? "val" : "text";
                        return arguments.length > 0 ? (b[p]() !== M && b[p](M),
                        z = b) : z = b[p](),
                        z
                    },
                    calculateCaretPosition: function(M) {
                        var z = O.getMasked()
                          , p = O.getCaret();
                        if (M !== z) {
                            var o = b.data("mask-previus-caret-pos") || 0
                              , e = z.length
                              , c = M.length
                              , n = 0
                              , t = 0
                              , a = 0
                              , A = 0
                              , d = 0;
                            for (d = p; d < e && O.maskDigitPosMap[d]; d++)
                                t++;
                            for (d = p - 1; d >= 0 && O.maskDigitPosMap[d]; d--)
                                n++;
                            for (d = p - 1; d >= 0; d--)
                                O.maskDigitPosMap[d] && a++;
                            for (d = o - 1; d >= 0; d--)
                                O.maskDigitPosMapOld[d] && A++;
                            if (p > c)
                                p = 10 * e;
                            else if (o >= p && o !== c) {
                                if (!O.maskDigitPosMapOld[p]) {
                                    var r = p;
                                    p -= A - a,
                                    p -= n,
                                    O.maskDigitPosMap[p] && (p = r)
                                }
                            } else
                                p > o && (p += a - A,
                                p += t)
                        }
                        return p
                    },
                    behaviour: function(z) {
                        z = z || window.event,
                        O.invalid = [];
                        var p = b.data("mask-keycode");
                        if (-1 === M.inArray(p, e.byPassKeys)) {
                            var o = O.getMasked()
                              , c = O.getCaret()
                              , n = b.data("mask-previus-value") || "";
                            return setTimeout((function() {
                                O.setCaret(O.calculateCaretPosition(n))
                            }
                            ), M.jMaskGlobals.keyStrokeCompensation),
                            O.val(o),
                            O.setCaret(c),
                            O.callbacks(z)
                        }
                    },
                    getMasked: function(M, b) {
                        var o, c, n, t = [], a = void 0 === b ? O.val() : b + "", A = 0, d = z.length, r = 0, i = a.length, q = 1, s = "push", u = -1, W = 0, l = [];
                        for (p.reverse ? (s = "unshift",
                        q = -1,
                        o = 0,
                        A = d - 1,
                        r = i - 1,
                        c = function() {
                            return A > -1 && r > -1
                        }
                        ) : (o = d - 1,
                        c = function() {
                            return A < d && r < i
                        }
                        ); c(); ) {
                            var f = z.charAt(A)
                              , _ = a.charAt(r)
                              , L = e.translation[f];
                            L ? (_.match(L.pattern) ? (t[s](_),
                            L.recursive && (-1 === u ? u = A : A === o && A !== u && (A = u - q),
                            o === u && (A -= q)),
                            A += q) : _ === n ? (W--,
                            n = void 0) : L.optional ? (A += q,
                            r -= q) : L.fallback ? (t[s](L.fallback),
                            A += q,
                            r -= q) : O.invalid.push({
                                p: r,
                                v: _,
                                e: L.pattern
                            }),
                            r += q) : (M || t[s](f),
                            _ === f ? (l.push(r),
                            r += q) : (n = f,
                            l.push(r + W),
                            W++),
                            A += q)
                        }
                        var m = z.charAt(o);
                        d !== i + 1 || e.translation[m] || t.push(m);
                        var R = t.join("");
                        return O.mapMaskdigitPositions(R, l, i),
                        R
                    },
                    mapMaskdigitPositions: function(M, b, z) {
                        var o = p.reverse ? M.length - z : 0;
                        O.maskDigitPosMap = {};
                        for (var e = 0; e < b.length; e++)
                            O.maskDigitPosMap[b[e] + o] = 1
                    },
                    callbacks: function(M) {
                        var o = O.val()
                          , e = o !== c
                          , n = [o, M, b, p]
                          , t = function(M, b, z) {
                            "function" == typeof p[M] && b && p[M].apply(this, z)
                        };
                        t("onChange", !0 === e, n),
                        t("onKeyPress", !0 === e, n),
                        t("onComplete", o.length === z.length, n),
                        t("onInvalid", O.invalid.length > 0, [o, M, b, O.invalid, p])
                    }
                };
                b = M(b);
                var o, e = this, c = O.val();
                z = "function" == typeof z ? z(O.val(), void 0, b, p) : z,
                e.mask = z,
                e.options = p,
                e.remove = function() {
                    var M = O.getCaret();
                    return e.options.placeholder && b.removeAttr("placeholder"),
                    b.data("mask-maxlength") && b.removeAttr("maxlength"),
                    O.destroyEvents(),
                    O.val(e.getCleanVal()),
                    O.setCaret(M),
                    b
                }
                ,
                e.getCleanVal = function() {
                    return O.getMasked(!0)
                }
                ,
                e.getMaskedVal = function(M) {
                    return O.getMasked(!1, M)
                }
                ,
                e.init = function(c) {
                    if (c = c || !1,
                    p = p || {},
                    e.clearIfNotMatch = M.jMaskGlobals.clearIfNotMatch,
                    e.byPassKeys = M.jMaskGlobals.byPassKeys,
                    e.translation = M.extend({}, M.jMaskGlobals.translation, p.translation),
                    e = M.extend(!0, {}, e, p),
                    o = O.getRegexMask(),
                    c)
                        O.events(),
                        O.val(O.getMasked());
                    else {
                        p.placeholder && b.attr("placeholder", p.placeholder),
                        b.data("mask") && b.attr("autocomplete", "off");
                        for (var n = 0, t = !0; n < z.length; n++) {
                            var a = e.translation[z.charAt(n)];
                            if (a && a.recursive) {
                                t = !1;
                                break
                            }
                        }
                        t && b.attr("maxlength", z.length).data("mask-maxlength", !0),
                        O.destroyEvents(),
                        O.events();
                        var A = O.getCaret();
                        O.val(O.getMasked()),
                        O.setCaret(A)
                    }
                }
                ,
                e.init(!b.is("input"))
            };
            M.maskWatchers = {};
            var z = function() {
                var z = M(this)
                  , O = {}
                  , o = "data-mask-"
                  , e = z.attr("data-mask");
                if (z.attr(o + "reverse") && (O.reverse = !0),
                z.attr(o + "clearifnotmatch") && (O.clearIfNotMatch = !0),
                "true" === z.attr(o + "selectonfocus") && (O.selectOnFocus = !0),
                p(z, e, O))
                    return z.data("mask", new b(this,e,O))
            }
              , p = function(b, z, p) {
                p = p || {};
                var O = M(b).data("mask")
                  , o = JSON.stringify
                  , e = M(b).val() || M(b).text();
                try {
                    return "function" == typeof z && (z = z(e)),
                    "object" != typeof O || o(O.options) !== o(p) || O.mask !== z
                } catch (M) {}
            }
              , O = function(M) {
                var b, z = document.createElement("div");
                return (b = (M = "on" + M)in z) || (z.setAttribute(M, "return;"),
                b = "function" == typeof z[M]),
                z = null,
                b
            };
            M.fn.mask = function(z, O) {
                O = O || {};
                var o = this.selector
                  , e = M.jMaskGlobals
                  , c = e.watchInterval
                  , n = O.watchInputs || e.watchInputs
                  , t = function() {
                    if (p(this, z, O))
                        return M(this).data("mask", new b(this,z,O))
                };
                return M(this).each(t),
                o && "" !== o && n && (clearInterval(M.maskWatchers[o]),
                M.maskWatchers[o] = setInterval((function() {
                    M(document).find(o).each(t)
                }
                ), c)),
                this
            }
            ,
            M.fn.masked = function(M) {
                return this.data("mask").getMaskedVal(M)
            }
            ,
            M.fn.unmask = function() {
                return clearInterval(M.maskWatchers[this.selector]),
                delete M.maskWatchers[this.selector],
                this.each((function() {
                    var b = M(this).data("mask");
                    b && b.remove().removeData("mask")
                }
                ))
            }
            ,
            M.fn.cleanVal = function() {
                return this.data("mask").getCleanVal()
            }
            ,
            M.applyDataMask = function(b) {
                ((b = b || M.jMaskGlobals.maskElements)instanceof M ? b : M(b)).filter(M.jMaskGlobals.dataMaskAttr).each(z)
            }
            ;
            var o = {
                maskElements: "input,td,span,div",
                dataMaskAttr: "*[data-mask]",
                dataMask: !0,
                watchInterval: 300,
                watchInputs: !0,
                keyStrokeCompensation: 10,
                useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && O("input"),
                watchDataMask: !1,
                byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                translation: {
                    0: {
                        pattern: /\d/
                    },
                    9: {
                        pattern: /\d/,
                        optional: !0
                    },
                    "#": {
                        pattern: /\d/,
                        recursive: !0
                    },
                    A: {
                        pattern: /[a-zA-Z0-9]/
                    },
                    S: {
                        pattern: /[a-zA-Z]/
                    }
                }
            };
            M.jMaskGlobals = M.jMaskGlobals || {},
            (o = M.jMaskGlobals = M.extend(!0, {}, o, M.jMaskGlobals)).dataMask && M.applyDataMask(),
            setInterval((function() {
                M.jMaskGlobals.watchDataMask && M.applyDataMask()
            }
            ), o.watchInterval)
        }
        ) ? p.apply(b, O) : p) || (M.exports = o)
    }
    ,
    82910: M => {
        !function() {
            var b = "onfocusin"in document.createElement("input") ? "focusin" : "focus"
              , z = document.createElement("div");
            z.appendChild(document.createTextNode("x-")),
            z.appendChild(document.createTextNode("x")),
            z.normalize();
            var p = 3 == z.firstChild.length
              , O = M.exports = function(M, z) {
                var p;
                if (z)
                    p = new l;
                else if (window.getSelection && M.setSelectionRange)
                    try {
                        M.selectionStart,
                        p = new t
                    } catch (A) {
                        p = new l
                    }
                else
                    p = window.getSelection ? new a : document.selection ? new e : new l;
                if (p._el = M,
                p._doc = M.ownerDocument,
                p._win = "defaultView"in p._doc ? p._doc.defaultView : p._doc.parentWindow,
                p._textProp = function(M) {
                    return void 0 !== M.value ? "value" : void 0 !== M.text ? "text" : void 0 !== M.textContent ? "textContent" : "innerText"
                }(M),
                p._bounds = [0, p.length()],
                !("bililiteRangeMouseDown"in p._doc)) {
                    var o = {
                        _el: p._doc
                    };
                    p._doc.bililiteRangeMouseDown = !1,
                    O.fn.listen.call(o, "mousedown", (function() {
                        p._doc.bililiteRangeMouseDown = !0
                    }
                    )),
                    O.fn.listen.call(o, "mouseup", (function() {
                        p._doc.bililiteRangeMouseDown = !1
                    }
                    ))
                }
                if (!("bililiteRangeSelection"in M)) {
                    function c(b) {
                        b && 9 == b.which ? p._nativeSelect(p._nativeRange(M.bililiteRangeSelection)) : M.bililiteRangeSelection = p._nativeSelection()
                    }
                    c(),
                    "onbeforedeactivate"in M ? p.listen("beforedeactivate", c) : p.listen("mouseup", c).listen("keyup", c),
                    p.listen(b, (function() {
                        p._doc.bililiteRangeMouseDown || p._nativeSelect(p._nativeRange(M.bililiteRangeSelection))
                    }
                    ))
                }
                if (!("oninput"in M)) {
                    var n = function() {
                        p.dispatch({
                            type: "input",
                            bubbles: !0
                        })
                    };
                    p.listen("keyup", n),
                    p.listen("cut", n),
                    p.listen("paste", n),
                    p.listen("drop", n),
                    M.oninput = "patched"
                }
                return p
            }
            ;
            function o() {}
            function e() {}
            function c(M, b) {
                var z = b.text.replace(/\r/g, "").length;
                if (M.compareEndPoints("StartToStart", b) <= 0)
                    return 0;
                if (M.compareEndPoints("StartToEnd", b) >= 0)
                    return z;
                for (var p = 0; M.compareEndPoints("StartToStart", b) > 0; ++p,
                M.moveStart("character", -1))
                    ;
                return p
            }
            function n(M, b) {
                var z = b.text.replace(/\r/g, "").length;
                if (M.compareEndPoints("EndToEnd", b) >= 0)
                    return z;
                if (M.compareEndPoints("EndToStart", b) <= 0)
                    return 0;
                for (var p = 0; M.compareEndPoints("EndToStart", b) > 0; ++p,
                M.moveEnd("character", -1))
                    ;
                return p
            }
            function t() {}
            function a() {}
            function A(M, b) {
                if (M.firstChild)
                    return M.firstChild;
                if (M.nextSibling)
                    return M.nextSibling;
                if (M === b)
                    return null;
                for (; M.parentNode; ) {
                    if ((M = M.parentNode) == b)
                        return null;
                    if (M.nextSibling)
                        return M.nextSibling
                }
                return null
            }
            function d(M, b, z, p) {
                if (!(b <= 0)) {
                    var O = M[z ? "startContainer" : "endContainer"];
                    for (3 == O.nodeType && (b += M[z ? "startOffset" : "endOffset"]); O; ) {
                        if (3 == O.nodeType) {
                            var o = O.nodeValue.length;
                            if (b <= o) {
                                if (M[z ? "setStart" : "setEnd"](O, b),
                                b == o) {
                                    for (var e = A(O, p); e && 3 == e.nodeType && 0 == e.nodeValue.length; e = A(e, p))
                                        M[z ? "setStartAfter" : "setEndAfter"](e);
                                    e && 1 == e.nodeType && "BR" == e.nodeName && M[z ? "setStartAfter" : "setEndAfter"](e)
                                }
                                return
                            }
                            M[z ? "setStartAfter" : "setEndAfter"](O),
                            b -= o
                        }
                        O = A(O, p)
                    }
                }
            }
            o.prototype = {
                length: function() {
                    return this._el[this._textProp].replace(/\r/g, "").length
                },
                bounds: function(M) {
                    if (O.bounds[M])
                        this._bounds = O.bounds[M].apply(this);
                    else {
                        if (!M) {
                            var b = [Math.max(0, Math.min(this.length(), this._bounds[0])), Math.max(0, Math.min(this.length(), this._bounds[1]))];
                            return b[1] = Math.max(b[0], b[1]),
                            b
                        }
                        this._bounds = M
                    }
                    return this
                },
                select: function() {
                    var M = this._el.bililiteRangeSelection = this.bounds();
                    return this._el === this._doc.activeElement && this._nativeSelect(this._nativeRange(M)),
                    this.dispatch({
                        type: "select",
                        bubbles: !0
                    }),
                    this
                },
                text: function(M, b) {
                    if (arguments.length) {
                        var z = this.bounds();
                        this._el;
                        return this.dispatch({
                            type: "beforeinput",
                            bubbles: !0,
                            data: M,
                            bounds: z
                        }),
                        this._nativeSetText(M, this._nativeRange(z)),
                        "start" == b ? this.bounds([z[0], z[0]]) : "end" == b ? this.bounds([z[0] + M.length, z[0] + M.length]) : "all" == b && this.bounds([z[0], z[0] + M.length]),
                        this.dispatch({
                            type: "input",
                            bubbles: !0,
                            data: M,
                            bounds: z
                        }),
                        this
                    }
                    return this._nativeGetText(this._nativeRange(this.bounds())).replace(/\r/g, "")
                },
                insertEOL: function() {
                    return this._nativeEOL(),
                    this._bounds = [this._bounds[0] + 1, this._bounds[0] + 1],
                    this
                },
                sendkeys: function(M) {
                    var b = this;
                    function z(M, b) {
                        /^{[^}]*}$/.test(b) && (b = b.slice(1, -1));
                        for (var z = 0; z < b.length; ++z) {
                            var p = b.charCodeAt(z);
                            M.dispatch({
                                type: "keypress",
                                bubbles: !0,
                                keyCode: p,
                                which: p,
                                charCode: p
                            })
                        }
                        M.text(b, "end")
                    }
                    return this.data().sendkeysOriginalText = this.text(),
                    this.data().sendkeysBounds = void 0,
                    M.replace(/{[^}]*}|[^{]+|{/g, (function(M) {
                        (O.sendkeys[M] || z)(b, M, z)
                    }
                    )),
                    this.bounds(this.data().sendkeysBounds),
                    this.dispatch({
                        type: "sendkeys",
                        which: M
                    }),
                    this
                },
                top: function() {
                    return this._nativeTop(this._nativeRange(this.bounds()))
                },
                scrollIntoView: function(M) {
                    var b = this.top();
                    return (this._el.scrollTop > b || this._el.scrollTop + this._el.clientHeight < b) && (M ? M.call(this._el, b) : this._el.scrollTop = b),
                    this
                },
                wrap: function(M) {
                    return this._nativeWrap(M, this._nativeRange(this.bounds())),
                    this
                },
                selection: function(M) {
                    return arguments.length ? this.bounds("selection").text(M, "end").select() : this.bounds("selection").text()
                },
                clone: function() {
                    return O(this._el).bounds(this.bounds())
                },
                all: function(M) {
                    return arguments.length ? (this.dispatch({
                        type: "beforeinput",
                        bubbles: !0,
                        data: M
                    }),
                    this._el[this._textProp] = M,
                    this.dispatch({
                        type: "input",
                        bubbles: !0,
                        data: M
                    }),
                    this) : this._el[this._textProp].replace(/\r/g, "")
                },
                element: function() {
                    return this._el
                },
                dispatch: function(M) {
                    M = M || {};
                    var b = document.createEvent ? document.createEvent("CustomEvent") : this._doc.createEventObject();
                    for (var z in b.initCustomEvent && b.initCustomEvent(M.type, !!M.bubbles, !!M.cancelable, M.detail),
                    M)
                        b[z] = M[z];
                    var p = this._el;
                    return setTimeout((function() {
                        try {
                            p.dispatchEvent ? p.dispatchEvent(b) : p.fireEvent("on" + M.type, document.createEventObject())
                        } catch (o) {
                            var z = p["listen" + M.type];
                            if (z)
                                for (var O = 0; O < z.length; ++O)
                                    z[O].call(p, b)
                        }
                    }
                    ), 0),
                    this
                },
                listen: function(M, b) {
                    var z = this._el;
                    z.addEventListener ? z.addEventListener(M, b) : (z.attachEvent("on" + M, b),
                    (z["listen" + M] = z["listen" + M] || []).push(b));
                    return this
                },
                dontlisten: function(M, b) {
                    var z = this._el;
                    if (z.removeEventListener)
                        z.removeEventListener(M, b);
                    else
                        try {
                            z.detachEvent("on" + M, b)
                        } catch (o) {
                            var p = z["listen" + M];
                            if (p)
                                for (var O = 0; O < p.length; ++O)
                                    p[O] === b && (p[O] = function() {}
                                    )
                        }
                    return this
                }
            },
            O.fn = o.prototype,
            O.extend = function(M) {
                for (fn in M)
                    o.prototype[fn] = M[fn]
            }
            ,
            O.bounds = {
                all: function() {
                    return [0, this.length()]
                },
                start: function() {
                    return [0, 0]
                },
                end: function() {
                    return [this.length(), this.length()]
                },
                selection: function() {
                    return this._el === this._doc.activeElement ? (this.bounds("all"),
                    this._nativeSelection()) : this._el.bililiteRangeSelection
                }
            },
            O.sendkeys = {
                "{enter}": function(M) {
                    M.dispatch({
                        type: "keypress",
                        bubbles: !0,
                        keyCode: "\n",
                        which: "\n",
                        charCode: "\n"
                    }),
                    M.insertEOL()
                },
                "{tab}": function(M, b, z) {
                    z(M, "\t")
                },
                "{newline}": function(M, b, z) {
                    z(M, "\n")
                },
                "{backspace}": function(M) {
                    var b = M.bounds();
                    b[0] == b[1] && M.bounds([b[0] - 1, b[0]]),
                    M.text("", "end")
                },
                "{del}": function(M) {
                    var b = M.bounds();
                    b[0] == b[1] && M.bounds([b[0], b[0] + 1]),
                    M.text("", "end")
                },
                "{rightarrow}": function(M) {
                    var b = M.bounds();
                    b[0] == b[1] && ++b[1],
                    M.bounds([b[1], b[1]])
                },
                "{leftarrow}": function(M) {
                    var b = M.bounds();
                    b[0] == b[1] && --b[0],
                    M.bounds([b[0], b[0]])
                },
                "{selectall}": function(M) {
                    M.bounds("all")
                },
                "{selection}": function(M) {
                    for (var b = M.data().sendkeysOriginalText, z = 0; z < b.length; ++z) {
                        var p = b.charCodeAt(z);
                        M.dispatch({
                            type: "keypress",
                            bubbles: !0,
                            keyCode: p,
                            which: p,
                            charCode: p
                        })
                    }
                    M.text(b, "end")
                },
                "{mark}": function(M) {
                    M.data().sendkeysBounds = M.bounds()
                }
            },
            O.sendkeys["{Enter}"] = O.sendkeys["{enter}"],
            O.sendkeys["{Backspace}"] = O.sendkeys["{backspace}"],
            O.sendkeys["{Delete}"] = O.sendkeys["{del}"],
            O.sendkeys["{ArrowRight}"] = O.sendkeys["{rightarrow}"],
            O.sendkeys["{ArrowLeft}"] = O.sendkeys["{leftarrow}"],
            e.prototype = new o,
            e.prototype._nativeRange = function(M) {
                var b;
                return "INPUT" == this._el.tagName ? b = this._el.createTextRange() : (b = this._doc.body.createTextRange()).moveToElementText(this._el),
                M && (M[1] < 0 && (M[1] = 0),
                M[0] > this.length() && (M[0] = this.length()),
                M[1] < b.text.replace(/\r/g, "").length && (b.moveEnd("character", -1),
                b.moveEnd("character", M[1] - b.text.replace(/\r/g, "").length)),
                M[0] > 0 && b.moveStart("character", M[0])),
                b
            }
            ,
            e.prototype._nativeSelect = function(M) {
                M.select()
            }
            ,
            e.prototype._nativeSelection = function() {
                var M = this._nativeRange()
                  , b = this.length()
                  , z = this._doc.selection.createRange();
                try {
                    return [c(z, M), n(z, M)]
                } catch (M) {
                    return z.parentElement().sourceIndex < this._el.sourceIndex ? [0, 0] : [b, b]
                }
            }
            ,
            e.prototype._nativeGetText = function(M) {
                return M.text
            }
            ,
            e.prototype._nativeSetText = function(M, b) {
                b.text = M
            }
            ,
            e.prototype._nativeEOL = function() {
                "value"in this._el ? this.text("\n") : this._nativeRange(this.bounds()).pasteHTML("\n<br/>")
            }
            ,
            e.prototype._nativeTop = function(M) {
                var b = this._nativeRange([0, 0]);
                return M.boundingTop - b.boundingTop
            }
            ,
            e.prototype._nativeWrap = function(M, b) {
                var z = document.createElement("div");
                z.appendChild(M);
                var p = z.innerHTML.replace("><", ">" + b.htmlText + "<");
                b.pasteHTML(p)
            }
            ,
            t.prototype = new o,
            t.prototype._nativeRange = function(M) {
                return M || [0, this.length()]
            }
            ,
            t.prototype._nativeSelect = function(M) {
                this._el.setSelectionRange(M[0], M[1])
            }
            ,
            t.prototype._nativeSelection = function() {
                return [this._el.selectionStart, this._el.selectionEnd]
            }
            ,
            t.prototype._nativeGetText = function(M) {
                return this._el.value.substring(M[0], M[1])
            }
            ,
            t.prototype._nativeSetText = function(M, b) {
                var z = this._el.value;
                this._el.value = z.substring(0, b[0]) + M + z.substring(b[1])
            }
            ,
            t.prototype._nativeEOL = function() {
                this.text("\n")
            }
            ,
            t.prototype._nativeTop = function(M) {
                var b = this._el.cloneNode(!0);
                b.style.visibility = "hidden",
                b.style.position = "absolute",
                this._el.parentNode.insertBefore(b, this._el),
                b.style.height = "1px",
                b.value = this._el.value.slice(0, M[0]);
                var z = b.scrollHeight;
                return b.value = "X",
                z -= b.scrollHeight,
                b.parentNode.removeChild(b),
                z
            }
            ,
            t.prototype._nativeWrap = function() {
                throw new Error("Cannot wrap in a text element")
            }
            ,
            a.prototype = new o,
            a.prototype._nativeRange = function(M) {
                var b = this._doc.createRange();
                return b.selectNodeContents(this._el),
                M && (d(b, M[0], !0, this._el),
                b.collapse(!0),
                d(b, M[1] - M[0], !1, this._el)),
                b
            }
            ,
            a.prototype._nativeSelect = function(M) {
                this._win.getSelection().removeAllRanges(),
                this._win.getSelection().addRange(M)
            }
            ,
            a.prototype._nativeSelection = function() {
                var M = this._nativeRange();
                if (0 == this._win.getSelection().rangeCount)
                    return [this.length(), this.length()];
                var b = this._win.getSelection().getRangeAt(0);
                return [u(b, M), W(b, M)]
            }
            ,
            a.prototype._nativeGetText = function(M) {
                return String.prototype.slice.apply(this._el.textContent, this.bounds())
            }
            ,
            a.prototype._nativeSetText = function(M, b) {
                b.deleteContents(),
                b.insertNode(this._doc.createTextNode(M)),
                p && this._el.normalize()
            }
            ,
            a.prototype._nativeEOL = function() {
                var M = this._nativeRange(this.bounds());
                M.deleteContents();
                var b = this._doc.createElement("br");
                b.setAttribute("_moz_dirty", ""),
                M.insertNode(b),
                M.insertNode(this._doc.createTextNode("\n")),
                M.collapse(!1)
            }
            ,
            a.prototype._nativeTop = function(M) {
                if (0 == this.length)
                    return 0;
                if ("" == M.toString()) {
                    var b = this._doc.createTextNode("X");
                    M.insertNode(b)
                }
                var z = this._nativeRange([0, 1])
                  , p = M.getBoundingClientRect().top - z.getBoundingClientRect().top;
                return b && b.parentNode.removeChild(b),
                p
            }
            ,
            a.prototype._nativeWrap = function(M, b) {
                b.surroundContents(M)
            }
            ;
            var r = 0
              , i = 1
              , q = 2
              , s = 3;
            function u(M, b) {
                return M.compareBoundaryPoints(r, b) <= 0 ? 0 : M.compareBoundaryPoints(s, b) >= 0 ? b.toString().length : ((M = M.cloneRange()).setEnd(b.endContainer, b.endOffset),
                b.toString().replace(/\r/g, "").length - M.toString().replace(/\r/g, "").length)
            }
            function W(M, b) {
                return M.compareBoundaryPoints(q, b) >= 0 ? b.toString().length : M.compareBoundaryPoints(i, b) <= 0 ? 0 : ((M = M.cloneRange()).setStart(b.startContainer, b.startOffset),
                M.toString().replace(/\r/g, "").length)
            }
            function l() {}
            l.prototype = new o,
            l.prototype._nativeRange = function(M) {
                return M || [0, this.length()]
            }
            ,
            l.prototype._nativeSelect = function(M) {}
            ,
            l.prototype._nativeSelection = function() {
                return [0, 0]
            }
            ,
            l.prototype._nativeGetText = function(M) {
                return this._el[this._textProp].substring(M[0], M[1])
            }
            ,
            l.prototype._nativeSetText = function(M, b) {
                var z = this._el[this._textProp];
                this._el[this._textProp] = z.substring(0, b[0]) + M + z.substring(b[1])
            }
            ,
            l.prototype._nativeEOL = function() {
                this.text("\n")
            }
            ,
            l.prototype._nativeTop = function() {
                return 0
            }
            ,
            l.prototype._nativeWrap = function() {
                throw new Error("Wrapping not implemented")
            }
            ;
            var f = [];
            O.fn.data = function() {
                var M = this.element().bililiteRangeData;
                return null == M && (M = this.element().bililiteRangeData = f.length,
                f[M] = new _(this)),
                f[M]
            }
            ;
            try {
                Object.defineProperty({}, "foo", {});
                var _ = function(M) {
                    Object.defineProperty(this, "values", {
                        value: {}
                    }),
                    Object.defineProperty(this, "sourceRange", {
                        value: M
                    }),
                    Object.defineProperty(this, "toJSON", {
                        value: function() {
                            var M = {};
                            for (var b in _.prototype)
                                b in this.values && (M[b] = this.values[b]);
                            return M
                        }
                    }),
                    Object.defineProperty(this, "all", {
                        get: function() {
                            var M = {};
                            for (var b in _.prototype)
                                M[b] = this[b];
                            return M
                        }
                    })
                };
                _.prototype = {},
                Object.defineProperty(_.prototype, "values", {
                    value: {}
                }),
                Object.defineProperty(_.prototype, "monitored", {
                    value: {}
                }),
                O.data = function(M, b) {
                    b = b || {};
                    var z = Object.getOwnPropertyDescriptor(_.prototype, M) || {};
                    "enumerable"in b && (z.enumerable = !!b.enumerable),
                    "enumerable"in z || (z.enumerable = !0),
                    "value"in b && (_.prototype.values[M] = b.value),
                    "monitored"in b && (_.prototype.monitored[M] = b.monitored),
                    z.configurable = !0,
                    z.get = function() {
                        return M in this.values ? this.values[M] : _.prototype.values[M]
                    }
                    ,
                    z.set = function(b) {
                        this.values[M] = b,
                        _.prototype.monitored[M] && this.sourceRange.dispatch({
                            type: "bililiteRangeData",
                            bubbles: !0,
                            detail: {
                                name: M,
                                value: b
                            }
                        })
                    }
                    ,
                    Object.defineProperty(_.prototype, M, z)
                }
            } catch (M) {
                (_ = function(M) {
                    this.sourceRange = M
                }
                ).prototype = {},
                O.data = function(M, b) {
                    "value"in b && (_.prototype[M] = b.value)
                }
            }
        }(),
        Array.prototype.forEach || (Array.prototype.forEach = function(M) {
            "use strict";
            if (null == this)
                throw new TypeError;
            var b = Object(this)
              , z = b.length >>> 0;
            if ("function" != typeof M)
                throw new TypeError;
            for (var p = arguments.length >= 2 ? arguments[1] : void 0, O = 0; O < z; O++)
                O in b && M.call(p, b[O], O, b)
        }
        )
    }
    ,
    64102: (M, b, z) => {
        var p, O = z(81271), o = z(82910);
        (p = O).fn.sendkeys = function(M) {
            return M = M.replace(/([^{])\n/g, "$1{enter}"),
            this.each((function() {
                o(this).bounds("selection").sendkeys(M).select(),
                this.focus()
            }
            ))
        }
        ,
        p.event.special.keydown = p.event.special.keydown || {},
        p.event.special.keydown._default = function(M) {
            if (M.isTrusted)
                return !1;
            if (M.ctrlKey || M.altKey || M.metaKey)
                return !1;
            if (null == M.key)
                return !1;
            var b = M.target;
            if (b.isContentEditable || "INPUT" == b.nodeName || "TEXTAREA" == b.nodeName) {
                var z = M.key;
                return z.length > 1 && "{" != z.charAt(0) && (z = "{" + z + "}"),
                p(b).sendkeys(z),
                !0
            }
            return !1
        }
    }
    ,
    81271: function(M, b) {
        var z;
        !function(b, z) {
            "use strict";
            "object" == typeof M.exports ? M.exports = b.document ? z(b, !0) : function(M) {
                if (!M.document)
                    throw new Error("jQuery requires a window with a document");
                return z(M)
            }
            : z(b)
        }("undefined" != typeof window ? window : this, (function(p, O) {
            "use strict";
            var o = []
              , e = Object.getPrototypeOf
              , c = o.slice
              , n = o.flat ? function(M) {
                return o.flat.call(M)
            }
            : function(M) {
                return o.concat.apply([], M)
            }
              , t = o.push
              , a = o.indexOf
              , A = {}
              , d = A.toString
              , r = A.hasOwnProperty
              , i = r.toString
              , q = i.call(Object)
              , s = {}
              , u = function(M) {
                return "function" == typeof M && "number" != typeof M.nodeType && "function" != typeof M.item
            }
              , W = function(M) {
                return null != M && M === M.window
            }
              , l = p.document
              , f = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function _(M, b, z) {
                var p, O, o = (z = z || l).createElement("script");
                if (o.text = M,
                b)
                    for (p in f)
                        (O = b[p] || b.getAttribute && b.getAttribute(p)) && o.setAttribute(p, O);
                z.head.appendChild(o).parentNode.removeChild(o)
            }
            function L(M) {
                return null == M ? M + "" : "object" == typeof M || "function" == typeof M ? A[d.call(M)] || "object" : typeof M
            }
            var m = "3.6.4"
              , R = function(M, b) {
                return new R.fn.init(M,b)
            };
            function h(M) {
                var b = !!M && "length"in M && M.length
                  , z = L(M);
                return !u(M) && !W(M) && ("array" === z || 0 === b || "number" == typeof b && b > 0 && b - 1 in M)
            }
            R.fn = R.prototype = {
                jquery: m,
                constructor: R,
                length: 0,
                toArray: function() {
                    return c.call(this)
                },
                get: function(M) {
                    return null == M ? c.call(this) : M < 0 ? this[M + this.length] : this[M]
                },
                pushStack: function(M) {
                    var b = R.merge(this.constructor(), M);
                    return b.prevObject = this,
                    b
                },
                each: function(M) {
                    return R.each(this, M)
                },
                map: function(M) {
                    return this.pushStack(R.map(this, (function(b, z) {
                        return M.call(b, z, b)
                    }
                    )))
                },
                slice: function() {
                    return this.pushStack(c.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(R.grep(this, (function(M, b) {
                        return (b + 1) % 2
                    }
                    )))
                },
                odd: function() {
                    return this.pushStack(R.grep(this, (function(M, b) {
                        return b % 2
                    }
                    )))
                },
                eq: function(M) {
                    var b = this.length
                      , z = +M + (M < 0 ? b : 0);
                    return this.pushStack(z >= 0 && z < b ? [this[z]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: t,
                sort: o.sort,
                splice: o.splice
            },
            R.extend = R.fn.extend = function() {
                var M, b, z, p, O, o, e = arguments[0] || {}, c = 1, n = arguments.length, t = !1;
                for ("boolean" == typeof e && (t = e,
                e = arguments[c] || {},
                c++),
                "object" == typeof e || u(e) || (e = {}),
                c === n && (e = this,
                c--); c < n; c++)
                    if (null != (M = arguments[c]))
                        for (b in M)
                            p = M[b],
                            "__proto__" !== b && e !== p && (t && p && (R.isPlainObject(p) || (O = Array.isArray(p))) ? (z = e[b],
                            o = O && !Array.isArray(z) ? [] : O || R.isPlainObject(z) ? z : {},
                            O = !1,
                            e[b] = R.extend(t, o, p)) : void 0 !== p && (e[b] = p));
                return e
            }
            ,
            R.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(M) {
                    throw new Error(M)
                },
                noop: function() {},
                isPlainObject: function(M) {
                    var b, z;
                    return !(!M || "[object Object]" !== d.call(M)) && (!(b = e(M)) || "function" == typeof (z = r.call(b, "constructor") && b.constructor) && i.call(z) === q)
                },
                isEmptyObject: function(M) {
                    var b;
                    for (b in M)
                        return !1;
                    return !0
                },
                globalEval: function(M, b, z) {
                    _(M, {
                        nonce: b && b.nonce
                    }, z)
                },
                each: function(M, b) {
                    var z, p = 0;
                    if (h(M))
                        for (z = M.length; p < z && !1 !== b.call(M[p], p, M[p]); p++)
                            ;
                    else
                        for (p in M)
                            if (!1 === b.call(M[p], p, M[p]))
                                break;
                    return M
                },
                makeArray: function(M, b) {
                    var z = b || [];
                    return null != M && (h(Object(M)) ? R.merge(z, "string" == typeof M ? [M] : M) : t.call(z, M)),
                    z
                },
                inArray: function(M, b, z) {
                    return null == b ? -1 : a.call(b, M, z)
                },
                merge: function(M, b) {
                    for (var z = +b.length, p = 0, O = M.length; p < z; p++)
                        M[O++] = b[p];
                    return M.length = O,
                    M
                },
                grep: function(M, b, z) {
                    for (var p = [], O = 0, o = M.length, e = !z; O < o; O++)
                        !b(M[O], O) !== e && p.push(M[O]);
                    return p
                },
                map: function(M, b, z) {
                    var p, O, o = 0, e = [];
                    if (h(M))
                        for (p = M.length; o < p; o++)
                            null != (O = b(M[o], o, z)) && e.push(O);
                    else
                        for (o in M)
                            null != (O = b(M[o], o, z)) && e.push(O);
                    return n(e)
                },
                guid: 1,
                support: s
            }),
            "function" == typeof Symbol && (R.fn[Symbol.iterator] = o[Symbol.iterator]),
            R.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(M, b) {
                A["[object " + b + "]"] = b.toLowerCase()
            }
            ));
            var y = function(M) {
                var b, z, p, O, o, e, c, n, t, a, A, d, r, i, q, s, u, W, l, f = "sizzle" + 1 * new Date, _ = M.document, L = 0, m = 0, R = nM(), h = nM(), y = nM(), N = nM(), B = function(M, b) {
                    return M === b && (A = !0),
                    0
                }, T = {}.hasOwnProperty, g = [], X = g.pop, Y = g.push, v = g.push, k = g.slice, D = function(M, b) {
                    for (var z = 0, p = M.length; z < p; z++)
                        if (M[z] === b)
                            return z;
                    return -1
                }, w = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", S = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + S + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", E = "\\[" + S + "*(" + H + ")(?:" + S + "*([*^$|!~]?=)" + S + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + S + "*\\]", x = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + E + ")*)|.*)\\)|)", j = new RegExp(S + "+","g"), P = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$","g"), C = new RegExp("^" + S + "*," + S + "*"), F = new RegExp("^" + S + "*([>+~]|" + S + ")" + S + "*"), I = new RegExp(S + "|>"), U = new RegExp(x), G = new RegExp("^" + H + "$"), J = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + E),
                    PSEUDO: new RegExp("^" + x),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + w + ")$","i"),
                    needsContext: new RegExp("^" + S + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)","i")
                }, K = /HTML$/i, V = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, MM = /[+~]/, bM = new RegExp("\\\\[\\da-fA-F]{1,6}" + S + "?|\\\\([^\\r\\n\\f])","g"), zM = function(M, b) {
                    var z = "0x" + M.slice(1) - 65536;
                    return b || (z < 0 ? String.fromCharCode(z + 65536) : String.fromCharCode(z >> 10 | 55296, 1023 & z | 56320))
                }, pM = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, OM = function(M, b) {
                    return b ? "\0" === M ? "�" : M.slice(0, -1) + "\\" + M.charCodeAt(M.length - 1).toString(16) + " " : "\\" + M
                }, oM = function() {
                    d()
                }, eM = fM((function(M) {
                    return !0 === M.disabled && "fieldset" === M.nodeName.toLowerCase()
                }
                ), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    v.apply(g = k.call(_.childNodes), _.childNodes),
                    g[_.childNodes.length].nodeType
                } catch (M) {
                    v = {
                        apply: g.length ? function(M, b) {
                            Y.apply(M, k.call(b))
                        }
                        : function(M, b) {
                            for (var z = M.length, p = 0; M[z++] = b[p++]; )
                                ;
                            M.length = z - 1
                        }
                    }
                }
                function cM(M, b, p, O) {
                    var o, c, t, a, A, i, u, W = b && b.ownerDocument, _ = b ? b.nodeType : 9;
                    if (p = p || [],
                    "string" != typeof M || !M || 1 !== _ && 9 !== _ && 11 !== _)
                        return p;
                    if (!O && (d(b),
                    b = b || r,
                    q)) {
                        if (11 !== _ && (A = Z.exec(M)))
                            if (o = A[1]) {
                                if (9 === _) {
                                    if (!(t = b.getElementById(o)))
                                        return p;
                                    if (t.id === o)
                                        return p.push(t),
                                        p
                                } else if (W && (t = W.getElementById(o)) && l(b, t) && t.id === o)
                                    return p.push(t),
                                    p
                            } else {
                                if (A[2])
                                    return v.apply(p, b.getElementsByTagName(M)),
                                    p;
                                if ((o = A[3]) && z.getElementsByClassName && b.getElementsByClassName)
                                    return v.apply(p, b.getElementsByClassName(o)),
                                    p
                            }
                        if (z.qsa && !N[M + " "] && (!s || !s.test(M)) && (1 !== _ || "object" !== b.nodeName.toLowerCase())) {
                            if (u = M,
                            W = b,
                            1 === _ && (I.test(M) || F.test(M))) {
                                for ((W = MM.test(M) && uM(b.parentNode) || b) === b && z.scope || ((a = b.getAttribute("id")) ? a = a.replace(pM, OM) : b.setAttribute("id", a = f)),
                                c = (i = e(M)).length; c--; )
                                    i[c] = (a ? "#" + a : ":scope") + " " + lM(i[c]);
                                u = i.join(",")
                            }
                            try {
                                return v.apply(p, W.querySelectorAll(u)),
                                p
                            } catch (b) {
                                N(M, !0)
                            } finally {
                                a === f && b.removeAttribute("id")
                            }
                        }
                    }
                    return n(M.replace(P, "$1"), b, p, O)
                }
                function nM() {
                    var M = [];
                    return function b(z, O) {
                        return M.push(z + " ") > p.cacheLength && delete b[M.shift()],
                        b[z + " "] = O
                    }
                }
                function tM(M) {
                    return M[f] = !0,
                    M
                }
                function aM(M) {
                    var b = r.createElement("fieldset");
                    try {
                        return !!M(b)
                    } catch (M) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null
                    }
                }
                function AM(M, b) {
                    for (var z = M.split("|"), O = z.length; O--; )
                        p.attrHandle[z[O]] = b
                }
                function dM(M, b) {
                    var z = b && M
                      , p = z && 1 === M.nodeType && 1 === b.nodeType && M.sourceIndex - b.sourceIndex;
                    if (p)
                        return p;
                    if (z)
                        for (; z = z.nextSibling; )
                            if (z === b)
                                return -1;
                    return M ? 1 : -1
                }
                function rM(M) {
                    return function(b) {
                        return "input" === b.nodeName.toLowerCase() && b.type === M
                    }
                }
                function iM(M) {
                    return function(b) {
                        var z = b.nodeName.toLowerCase();
                        return ("input" === z || "button" === z) && b.type === M
                    }
                }
                function qM(M) {
                    return function(b) {
                        return "form"in b ? b.parentNode && !1 === b.disabled ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === M : b.disabled === M : b.isDisabled === M || b.isDisabled !== !M && eM(b) === M : b.disabled === M : "label"in b && b.disabled === M
                    }
                }
                function sM(M) {
                    return tM((function(b) {
                        return b = +b,
                        tM((function(z, p) {
                            for (var O, o = M([], z.length, b), e = o.length; e--; )
                                z[O = o[e]] && (z[O] = !(p[O] = z[O]))
                        }
                        ))
                    }
                    ))
                }
                function uM(M) {
                    return M && void 0 !== M.getElementsByTagName && M
                }
                for (b in z = cM.support = {},
                o = cM.isXML = function(M) {
                    var b = M && M.namespaceURI
                      , z = M && (M.ownerDocument || M).documentElement;
                    return !K.test(b || z && z.nodeName || "HTML")
                }
                ,
                d = cM.setDocument = function(M) {
                    var b, O, e = M ? M.ownerDocument || M : _;
                    return e != r && 9 === e.nodeType && e.documentElement ? (i = (r = e).documentElement,
                    q = !o(r),
                    _ != r && (O = r.defaultView) && O.top !== O && (O.addEventListener ? O.addEventListener("unload", oM, !1) : O.attachEvent && O.attachEvent("onunload", oM)),
                    z.scope = aM((function(M) {
                        return i.appendChild(M).appendChild(r.createElement("div")),
                        void 0 !== M.querySelectorAll && !M.querySelectorAll(":scope fieldset div").length
                    }
                    )),
                    z.cssHas = aM((function() {
                        try {
                            return r.querySelector(":has(*,:jqfake)"),
                            !1
                        } catch (M) {
                            return !0
                        }
                    }
                    )),
                    z.attributes = aM((function(M) {
                        return M.className = "i",
                        !M.getAttribute("className")
                    }
                    )),
                    z.getElementsByTagName = aM((function(M) {
                        return M.appendChild(r.createComment("")),
                        !M.getElementsByTagName("*").length
                    }
                    )),
                    z.getElementsByClassName = $.test(r.getElementsByClassName),
                    z.getById = aM((function(M) {
                        return i.appendChild(M).id = f,
                        !r.getElementsByName || !r.getElementsByName(f).length
                    }
                    )),
                    z.getById ? (p.filter.ID = function(M) {
                        var b = M.replace(bM, zM);
                        return function(M) {
                            return M.getAttribute("id") === b
                        }
                    }
                    ,
                    p.find.ID = function(M, b) {
                        if (void 0 !== b.getElementById && q) {
                            var z = b.getElementById(M);
                            return z ? [z] : []
                        }
                    }
                    ) : (p.filter.ID = function(M) {
                        var b = M.replace(bM, zM);
                        return function(M) {
                            var z = void 0 !== M.getAttributeNode && M.getAttributeNode("id");
                            return z && z.value === b
                        }
                    }
                    ,
                    p.find.ID = function(M, b) {
                        if (void 0 !== b.getElementById && q) {
                            var z, p, O, o = b.getElementById(M);
                            if (o) {
                                if ((z = o.getAttributeNode("id")) && z.value === M)
                                    return [o];
                                for (O = b.getElementsByName(M),
                                p = 0; o = O[p++]; )
                                    if ((z = o.getAttributeNode("id")) && z.value === M)
                                        return [o]
                            }
                            return []
                        }
                    }
                    ),
                    p.find.TAG = z.getElementsByTagName ? function(M, b) {
                        return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(M) : z.qsa ? b.querySelectorAll(M) : void 0
                    }
                    : function(M, b) {
                        var z, p = [], O = 0, o = b.getElementsByTagName(M);
                        if ("*" === M) {
                            for (; z = o[O++]; )
                                1 === z.nodeType && p.push(z);
                            return p
                        }
                        return o
                    }
                    ,
                    p.find.CLASS = z.getElementsByClassName && function(M, b) {
                        if (void 0 !== b.getElementsByClassName && q)
                            return b.getElementsByClassName(M)
                    }
                    ,
                    u = [],
                    s = [],
                    (z.qsa = $.test(r.querySelectorAll)) && (aM((function(M) {
                        var b;
                        i.appendChild(M).innerHTML = "<a id='" + f + "'></a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        M.querySelectorAll("[msallowcapture^='']").length && s.push("[*^$]=" + S + "*(?:''|\"\")"),
                        M.querySelectorAll("[selected]").length || s.push("\\[" + S + "*(?:value|" + w + ")"),
                        M.querySelectorAll("[id~=" + f + "-]").length || s.push("~="),
                        (b = r.createElement("input")).setAttribute("name", ""),
                        M.appendChild(b),
                        M.querySelectorAll("[name='']").length || s.push("\\[" + S + "*name" + S + "*=" + S + "*(?:''|\"\")"),
                        M.querySelectorAll(":checked").length || s.push(":checked"),
                        M.querySelectorAll("a#" + f + "+*").length || s.push(".#.+[+~]"),
                        M.querySelectorAll("\\\f"),
                        s.push("[\\r\\n\\f]")
                    }
                    )),
                    aM((function(M) {
                        M.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var b = r.createElement("input");
                        b.setAttribute("type", "hidden"),
                        M.appendChild(b).setAttribute("name", "D"),
                        M.querySelectorAll("[name=d]").length && s.push("name" + S + "*[*^$|!~]?="),
                        2 !== M.querySelectorAll(":enabled").length && s.push(":enabled", ":disabled"),
                        i.appendChild(M).disabled = !0,
                        2 !== M.querySelectorAll(":disabled").length && s.push(":enabled", ":disabled"),
                        M.querySelectorAll("*,:x"),
                        s.push(",.*:")
                    }
                    ))),
                    (z.matchesSelector = $.test(W = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && aM((function(M) {
                        z.disconnectedMatch = W.call(M, "*"),
                        W.call(M, "[s!='']:x"),
                        u.push("!=", x)
                    }
                    )),
                    z.cssHas || s.push(":has"),
                    s = s.length && new RegExp(s.join("|")),
                    u = u.length && new RegExp(u.join("|")),
                    b = $.test(i.compareDocumentPosition),
                    l = b || $.test(i.contains) ? function(M, b) {
                        var z = 9 === M.nodeType && M.documentElement || M
                          , p = b && b.parentNode;
                        return M === p || !(!p || 1 !== p.nodeType || !(z.contains ? z.contains(p) : M.compareDocumentPosition && 16 & M.compareDocumentPosition(p)))
                    }
                    : function(M, b) {
                        if (b)
                            for (; b = b.parentNode; )
                                if (b === M)
                                    return !0;
                        return !1
                    }
                    ,
                    B = b ? function(M, b) {
                        if (M === b)
                            return A = !0,
                            0;
                        var p = !M.compareDocumentPosition - !b.compareDocumentPosition;
                        return p || (1 & (p = (M.ownerDocument || M) == (b.ownerDocument || b) ? M.compareDocumentPosition(b) : 1) || !z.sortDetached && b.compareDocumentPosition(M) === p ? M == r || M.ownerDocument == _ && l(_, M) ? -1 : b == r || b.ownerDocument == _ && l(_, b) ? 1 : a ? D(a, M) - D(a, b) : 0 : 4 & p ? -1 : 1)
                    }
                    : function(M, b) {
                        if (M === b)
                            return A = !0,
                            0;
                        var z, p = 0, O = M.parentNode, o = b.parentNode, e = [M], c = [b];
                        if (!O || !o)
                            return M == r ? -1 : b == r ? 1 : O ? -1 : o ? 1 : a ? D(a, M) - D(a, b) : 0;
                        if (O === o)
                            return dM(M, b);
                        for (z = M; z = z.parentNode; )
                            e.unshift(z);
                        for (z = b; z = z.parentNode; )
                            c.unshift(z);
                        for (; e[p] === c[p]; )
                            p++;
                        return p ? dM(e[p], c[p]) : e[p] == _ ? -1 : c[p] == _ ? 1 : 0
                    }
                    ,
                    r) : r
                }
                ,
                cM.matches = function(M, b) {
                    return cM(M, null, null, b)
                }
                ,
                cM.matchesSelector = function(M, b) {
                    if (d(M),
                    z.matchesSelector && q && !N[b + " "] && (!u || !u.test(b)) && (!s || !s.test(b)))
                        try {
                            var p = W.call(M, b);
                            if (p || z.disconnectedMatch || M.document && 11 !== M.document.nodeType)
                                return p
                        } catch (M) {
                            N(b, !0)
                        }
                    return cM(b, r, null, [M]).length > 0
                }
                ,
                cM.contains = function(M, b) {
                    return (M.ownerDocument || M) != r && d(M),
                    l(M, b)
                }
                ,
                cM.attr = function(M, b) {
                    (M.ownerDocument || M) != r && d(M);
                    var O = p.attrHandle[b.toLowerCase()]
                      , o = O && T.call(p.attrHandle, b.toLowerCase()) ? O(M, b, !q) : void 0;
                    return void 0 !== o ? o : z.attributes || !q ? M.getAttribute(b) : (o = M.getAttributeNode(b)) && o.specified ? o.value : null
                }
                ,
                cM.escape = function(M) {
                    return (M + "").replace(pM, OM)
                }
                ,
                cM.error = function(M) {
                    throw new Error("Syntax error, unrecognized expression: " + M)
                }
                ,
                cM.uniqueSort = function(M) {
                    var b, p = [], O = 0, o = 0;
                    if (A = !z.detectDuplicates,
                    a = !z.sortStable && M.slice(0),
                    M.sort(B),
                    A) {
                        for (; b = M[o++]; )
                            b === M[o] && (O = p.push(o));
                        for (; O--; )
                            M.splice(p[O], 1)
                    }
                    return a = null,
                    M
                }
                ,
                O = cM.getText = function(M) {
                    var b, z = "", p = 0, o = M.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof M.textContent)
                                return M.textContent;
                            for (M = M.firstChild; M; M = M.nextSibling)
                                z += O(M)
                        } else if (3 === o || 4 === o)
                            return M.nodeValue
                    } else
                        for (; b = M[p++]; )
                            z += O(b);
                    return z
                }
                ,
                p = cM.selectors = {
                    cacheLength: 50,
                    createPseudo: tM,
                    match: J,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(M) {
                            return M[1] = M[1].replace(bM, zM),
                            M[3] = (M[3] || M[4] || M[5] || "").replace(bM, zM),
                            "~=" === M[2] && (M[3] = " " + M[3] + " "),
                            M.slice(0, 4)
                        },
                        CHILD: function(M) {
                            return M[1] = M[1].toLowerCase(),
                            "nth" === M[1].slice(0, 3) ? (M[3] || cM.error(M[0]),
                            M[4] = +(M[4] ? M[5] + (M[6] || 1) : 2 * ("even" === M[3] || "odd" === M[3])),
                            M[5] = +(M[7] + M[8] || "odd" === M[3])) : M[3] && cM.error(M[0]),
                            M
                        },
                        PSEUDO: function(M) {
                            var b, z = !M[6] && M[2];
                            return J.CHILD.test(M[0]) ? null : (M[3] ? M[2] = M[4] || M[5] || "" : z && U.test(z) && (b = e(z, !0)) && (b = z.indexOf(")", z.length - b) - z.length) && (M[0] = M[0].slice(0, b),
                            M[2] = z.slice(0, b)),
                            M.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(M) {
                            var b = M.replace(bM, zM).toLowerCase();
                            return "*" === M ? function() {
                                return !0
                            }
                            : function(M) {
                                return M.nodeName && M.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(M) {
                            var b = R[M + " "];
                            return b || (b = new RegExp("(^|" + S + ")" + M + "(" + S + "|$)")) && R(M, (function(M) {
                                return b.test("string" == typeof M.className && M.className || void 0 !== M.getAttribute && M.getAttribute("class") || "")
                            }
                            ))
                        },
                        ATTR: function(M, b, z) {
                            return function(p) {
                                var O = cM.attr(p, M);
                                return null == O ? "!=" === b : !b || (O += "",
                                "=" === b ? O === z : "!=" === b ? O !== z : "^=" === b ? z && 0 === O.indexOf(z) : "*=" === b ? z && O.indexOf(z) > -1 : "$=" === b ? z && O.slice(-z.length) === z : "~=" === b ? (" " + O.replace(j, " ") + " ").indexOf(z) > -1 : "|=" === b && (O === z || O.slice(0, z.length + 1) === z + "-"))
                            }
                        },
                        CHILD: function(M, b, z, p, O) {
                            var o = "nth" !== M.slice(0, 3)
                              , e = "last" !== M.slice(-4)
                              , c = "of-type" === b;
                            return 1 === p && 0 === O ? function(M) {
                                return !!M.parentNode
                            }
                            : function(b, z, n) {
                                var t, a, A, d, r, i, q = o !== e ? "nextSibling" : "previousSibling", s = b.parentNode, u = c && b.nodeName.toLowerCase(), W = !n && !c, l = !1;
                                if (s) {
                                    if (o) {
                                        for (; q; ) {
                                            for (d = b; d = d[q]; )
                                                if (c ? d.nodeName.toLowerCase() === u : 1 === d.nodeType)
                                                    return !1;
                                            i = q = "only" === M && !i && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (i = [e ? s.firstChild : s.lastChild],
                                    e && W) {
                                        for (l = (r = (t = (a = (A = (d = s)[f] || (d[f] = {}))[d.uniqueID] || (A[d.uniqueID] = {}))[M] || [])[0] === L && t[1]) && t[2],
                                        d = r && s.childNodes[r]; d = ++r && d && d[q] || (l = r = 0) || i.pop(); )
                                            if (1 === d.nodeType && ++l && d === b) {
                                                a[M] = [L, r, l];
                                                break
                                            }
                                    } else if (W && (l = r = (t = (a = (A = (d = b)[f] || (d[f] = {}))[d.uniqueID] || (A[d.uniqueID] = {}))[M] || [])[0] === L && t[1]),
                                    !1 === l)
                                        for (; (d = ++r && d && d[q] || (l = r = 0) || i.pop()) && ((c ? d.nodeName.toLowerCase() !== u : 1 !== d.nodeType) || !++l || (W && ((a = (A = d[f] || (d[f] = {}))[d.uniqueID] || (A[d.uniqueID] = {}))[M] = [L, l]),
                                        d !== b)); )
                                            ;
                                    return (l -= O) === p || l % p == 0 && l / p >= 0
                                }
                            }
                        },
                        PSEUDO: function(M, b) {
                            var z, O = p.pseudos[M] || p.setFilters[M.toLowerCase()] || cM.error("unsupported pseudo: " + M);
                            return O[f] ? O(b) : O.length > 1 ? (z = [M, M, "", b],
                            p.setFilters.hasOwnProperty(M.toLowerCase()) ? tM((function(M, z) {
                                for (var p, o = O(M, b), e = o.length; e--; )
                                    M[p = D(M, o[e])] = !(z[p] = o[e])
                            }
                            )) : function(M) {
                                return O(M, 0, z)
                            }
                            ) : O
                        }
                    },
                    pseudos: {
                        not: tM((function(M) {
                            var b = []
                              , z = []
                              , p = c(M.replace(P, "$1"));
                            return p[f] ? tM((function(M, b, z, O) {
                                for (var o, e = p(M, null, O, []), c = M.length; c--; )
                                    (o = e[c]) && (M[c] = !(b[c] = o))
                            }
                            )) : function(M, O, o) {
                                return b[0] = M,
                                p(b, null, o, z),
                                b[0] = null,
                                !z.pop()
                            }
                        }
                        )),
                        has: tM((function(M) {
                            return function(b) {
                                return cM(M, b).length > 0
                            }
                        }
                        )),
                        contains: tM((function(M) {
                            return M = M.replace(bM, zM),
                            function(b) {
                                return (b.textContent || O(b)).indexOf(M) > -1
                            }
                        }
                        )),
                        lang: tM((function(M) {
                            return G.test(M || "") || cM.error("unsupported lang: " + M),
                            M = M.replace(bM, zM).toLowerCase(),
                            function(b) {
                                var z;
                                do {
                                    if (z = q ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return (z = z.toLowerCase()) === M || 0 === z.indexOf(M + "-")
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                        }
                        )),
                        target: function(b) {
                            var z = M.location && M.location.hash;
                            return z && z.slice(1) === b.id
                        },
                        root: function(M) {
                            return M === i
                        },
                        focus: function(M) {
                            return M === r.activeElement && (!r.hasFocus || r.hasFocus()) && !!(M.type || M.href || ~M.tabIndex)
                        },
                        enabled: qM(!1),
                        disabled: qM(!0),
                        checked: function(M) {
                            var b = M.nodeName.toLowerCase();
                            return "input" === b && !!M.checked || "option" === b && !!M.selected
                        },
                        selected: function(M) {
                            return M.parentNode && M.parentNode.selectedIndex,
                            !0 === M.selected
                        },
                        empty: function(M) {
                            for (M = M.firstChild; M; M = M.nextSibling)
                                if (M.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(M) {
                            return !p.pseudos.empty(M)
                        },
                        header: function(M) {
                            return Q.test(M.nodeName)
                        },
                        input: function(M) {
                            return V.test(M.nodeName)
                        },
                        button: function(M) {
                            var b = M.nodeName.toLowerCase();
                            return "input" === b && "button" === M.type || "button" === b
                        },
                        text: function(M) {
                            var b;
                            return "input" === M.nodeName.toLowerCase() && "text" === M.type && (null == (b = M.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: sM((function() {
                            return [0]
                        }
                        )),
                        last: sM((function(M, b) {
                            return [b - 1]
                        }
                        )),
                        eq: sM((function(M, b, z) {
                            return [z < 0 ? z + b : z]
                        }
                        )),
                        even: sM((function(M, b) {
                            for (var z = 0; z < b; z += 2)
                                M.push(z);
                            return M
                        }
                        )),
                        odd: sM((function(M, b) {
                            for (var z = 1; z < b; z += 2)
                                M.push(z);
                            return M
                        }
                        )),
                        lt: sM((function(M, b, z) {
                            for (var p = z < 0 ? z + b : z > b ? b : z; --p >= 0; )
                                M.push(p);
                            return M
                        }
                        )),
                        gt: sM((function(M, b, z) {
                            for (var p = z < 0 ? z + b : z; ++p < b; )
                                M.push(p);
                            return M
                        }
                        ))
                    }
                },
                p.pseudos.nth = p.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    p.pseudos[b] = rM(b);
                for (b in {
                    submit: !0,
                    reset: !0
                })
                    p.pseudos[b] = iM(b);
                function WM() {}
                function lM(M) {
                    for (var b = 0, z = M.length, p = ""; b < z; b++)
                        p += M[b].value;
                    return p
                }
                function fM(M, b, z) {
                    var p = b.dir
                      , O = b.next
                      , o = O || p
                      , e = z && "parentNode" === o
                      , c = m++;
                    return b.first ? function(b, z, O) {
                        for (; b = b[p]; )
                            if (1 === b.nodeType || e)
                                return M(b, z, O);
                        return !1
                    }
                    : function(b, z, n) {
                        var t, a, A, d = [L, c];
                        if (n) {
                            for (; b = b[p]; )
                                if ((1 === b.nodeType || e) && M(b, z, n))
                                    return !0
                        } else
                            for (; b = b[p]; )
                                if (1 === b.nodeType || e)
                                    if (a = (A = b[f] || (b[f] = {}))[b.uniqueID] || (A[b.uniqueID] = {}),
                                    O && O === b.nodeName.toLowerCase())
                                        b = b[p] || b;
                                    else {
                                        if ((t = a[o]) && t[0] === L && t[1] === c)
                                            return d[2] = t[2];
                                        if (a[o] = d,
                                        d[2] = M(b, z, n))
                                            return !0
                                    }
                        return !1
                    }
                }
                function _M(M) {
                    return M.length > 1 ? function(b, z, p) {
                        for (var O = M.length; O--; )
                            if (!M[O](b, z, p))
                                return !1;
                        return !0
                    }
                    : M[0]
                }
                function LM(M, b, z, p, O) {
                    for (var o, e = [], c = 0, n = M.length, t = null != b; c < n; c++)
                        (o = M[c]) && (z && !z(o, p, O) || (e.push(o),
                        t && b.push(c)));
                    return e
                }
                function mM(M, b, z, p, O, o) {
                    return p && !p[f] && (p = mM(p)),
                    O && !O[f] && (O = mM(O, o)),
                    tM((function(o, e, c, n) {
                        var t, a, A, d = [], r = [], i = e.length, q = o || function(M, b, z) {
                            for (var p = 0, O = b.length; p < O; p++)
                                cM(M, b[p], z);
                            return z
                        }(b || "*", c.nodeType ? [c] : c, []), s = !M || !o && b ? q : LM(q, d, M, c, n), u = z ? O || (o ? M : i || p) ? [] : e : s;
                        if (z && z(s, u, c, n),
                        p)
                            for (t = LM(u, r),
                            p(t, [], c, n),
                            a = t.length; a--; )
                                (A = t[a]) && (u[r[a]] = !(s[r[a]] = A));
                        if (o) {
                            if (O || M) {
                                if (O) {
                                    for (t = [],
                                    a = u.length; a--; )
                                        (A = u[a]) && t.push(s[a] = A);
                                    O(null, u = [], t, n)
                                }
                                for (a = u.length; a--; )
                                    (A = u[a]) && (t = O ? D(o, A) : d[a]) > -1 && (o[t] = !(e[t] = A))
                            }
                        } else
                            u = LM(u === e ? u.splice(i, u.length) : u),
                            O ? O(null, e, u, n) : v.apply(e, u)
                    }
                    ))
                }
                function RM(M) {
                    for (var b, z, O, o = M.length, e = p.relative[M[0].type], c = e || p.relative[" "], n = e ? 1 : 0, a = fM((function(M) {
                        return M === b
                    }
                    ), c, !0), A = fM((function(M) {
                        return D(b, M) > -1
                    }
                    ), c, !0), d = [function(M, z, p) {
                        var O = !e && (p || z !== t) || ((b = z).nodeType ? a(M, z, p) : A(M, z, p));
                        return b = null,
                        O
                    }
                    ]; n < o; n++)
                        if (z = p.relative[M[n].type])
                            d = [fM(_M(d), z)];
                        else {
                            if ((z = p.filter[M[n].type].apply(null, M[n].matches))[f]) {
                                for (O = ++n; O < o && !p.relative[M[O].type]; O++)
                                    ;
                                return mM(n > 1 && _M(d), n > 1 && lM(M.slice(0, n - 1).concat({
                                    value: " " === M[n - 2].type ? "*" : ""
                                })).replace(P, "$1"), z, n < O && RM(M.slice(n, O)), O < o && RM(M = M.slice(O)), O < o && lM(M))
                            }
                            d.push(z)
                        }
                    return _M(d)
                }
                return WM.prototype = p.filters = p.pseudos,
                p.setFilters = new WM,
                e = cM.tokenize = function(M, b) {
                    var z, O, o, e, c, n, t, a = h[M + " "];
                    if (a)
                        return b ? 0 : a.slice(0);
                    for (c = M,
                    n = [],
                    t = p.preFilter; c; ) {
                        for (e in z && !(O = C.exec(c)) || (O && (c = c.slice(O[0].length) || c),
                        n.push(o = [])),
                        z = !1,
                        (O = F.exec(c)) && (z = O.shift(),
                        o.push({
                            value: z,
                            type: O[0].replace(P, " ")
                        }),
                        c = c.slice(z.length)),
                        p.filter)
                            !(O = J[e].exec(c)) || t[e] && !(O = t[e](O)) || (z = O.shift(),
                            o.push({
                                value: z,
                                type: e,
                                matches: O
                            }),
                            c = c.slice(z.length));
                        if (!z)
                            break
                    }
                    return b ? c.length : c ? cM.error(M) : h(M, n).slice(0)
                }
                ,
                c = cM.compile = function(M, b) {
                    var z, O = [], o = [], c = y[M + " "];
                    if (!c) {
                        for (b || (b = e(M)),
                        z = b.length; z--; )
                            (c = RM(b[z]))[f] ? O.push(c) : o.push(c);
                        c = y(M, function(M, b) {
                            var z = b.length > 0
                              , O = M.length > 0
                              , o = function(o, e, c, n, a) {
                                var A, i, s, u = 0, W = "0", l = o && [], f = [], _ = t, m = o || O && p.find.TAG("*", a), R = L += null == _ ? 1 : Math.random() || .1, h = m.length;
                                for (a && (t = e == r || e || a); W !== h && null != (A = m[W]); W++) {
                                    if (O && A) {
                                        for (i = 0,
                                        e || A.ownerDocument == r || (d(A),
                                        c = !q); s = M[i++]; )
                                            if (s(A, e || r, c)) {
                                                n.push(A);
                                                break
                                            }
                                        a && (L = R)
                                    }
                                    z && ((A = !s && A) && u--,
                                    o && l.push(A))
                                }
                                if (u += W,
                                z && W !== u) {
                                    for (i = 0; s = b[i++]; )
                                        s(l, f, e, c);
                                    if (o) {
                                        if (u > 0)
                                            for (; W--; )
                                                l[W] || f[W] || (f[W] = X.call(n));
                                        f = LM(f)
                                    }
                                    v.apply(n, f),
                                    a && !o && f.length > 0 && u + b.length > 1 && cM.uniqueSort(n)
                                }
                                return a && (L = R,
                                t = _),
                                l
                            };
                            return z ? tM(o) : o
                        }(o, O)),
                        c.selector = M
                    }
                    return c
                }
                ,
                n = cM.select = function(M, b, z, O) {
                    var o, n, t, a, A, d = "function" == typeof M && M, r = !O && e(M = d.selector || M);
                    if (z = z || [],
                    1 === r.length) {
                        if ((n = r[0] = r[0].slice(0)).length > 2 && "ID" === (t = n[0]).type && 9 === b.nodeType && q && p.relative[n[1].type]) {
                            if (!(b = (p.find.ID(t.matches[0].replace(bM, zM), b) || [])[0]))
                                return z;
                            d && (b = b.parentNode),
                            M = M.slice(n.shift().value.length)
                        }
                        for (o = J.needsContext.test(M) ? 0 : n.length; o-- && (t = n[o],
                        !p.relative[a = t.type]); )
                            if ((A = p.find[a]) && (O = A(t.matches[0].replace(bM, zM), MM.test(n[0].type) && uM(b.parentNode) || b))) {
                                if (n.splice(o, 1),
                                !(M = O.length && lM(n)))
                                    return v.apply(z, O),
                                    z;
                                break
                            }
                    }
                    return (d || c(M, r))(O, b, !q, z, !b || MM.test(M) && uM(b.parentNode) || b),
                    z
                }
                ,
                z.sortStable = f.split("").sort(B).join("") === f,
                z.detectDuplicates = !!A,
                d(),
                z.sortDetached = aM((function(M) {
                    return 1 & M.compareDocumentPosition(r.createElement("fieldset"))
                }
                )),
                aM((function(M) {
                    return M.innerHTML = "<a href='#'></a>",
                    "#" === M.firstChild.getAttribute("href")
                }
                )) || AM("type|href|height|width", (function(M, b, z) {
                    if (!z)
                        return M.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }
                )),
                z.attributes && aM((function(M) {
                    return M.innerHTML = "<input/>",
                    M.firstChild.setAttribute("value", ""),
                    "" === M.firstChild.getAttribute("value")
                }
                )) || AM("value", (function(M, b, z) {
                    if (!z && "input" === M.nodeName.toLowerCase())
                        return M.defaultValue
                }
                )),
                aM((function(M) {
                    return null == M.getAttribute("disabled")
                }
                )) || AM(w, (function(M, b, z) {
                    var p;
                    if (!z)
                        return !0 === M[b] ? b.toLowerCase() : (p = M.getAttributeNode(b)) && p.specified ? p.value : null
                }
                )),
                cM
            }(p);
            R.find = y,
            R.expr = y.selectors,
            R.expr[":"] = R.expr.pseudos,
            R.uniqueSort = R.unique = y.uniqueSort,
            R.text = y.getText,
            R.isXMLDoc = y.isXML,
            R.contains = y.contains,
            R.escapeSelector = y.escape;
            var N = function(M, b, z) {
                for (var p = [], O = void 0 !== z; (M = M[b]) && 9 !== M.nodeType; )
                    if (1 === M.nodeType) {
                        if (O && R(M).is(z))
                            break;
                        p.push(M)
                    }
                return p
            }
              , B = function(M, b) {
                for (var z = []; M; M = M.nextSibling)
                    1 === M.nodeType && M !== b && z.push(M);
                return z
            }
              , T = R.expr.match.needsContext;
            function g(M, b) {
                return M.nodeName && M.nodeName.toLowerCase() === b.toLowerCase()
            }
            var X = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function Y(M, b, z) {
                return u(b) ? R.grep(M, (function(M, p) {
                    return !!b.call(M, p, M) !== z
                }
                )) : b.nodeType ? R.grep(M, (function(M) {
                    return M === b !== z
                }
                )) : "string" != typeof b ? R.grep(M, (function(M) {
                    return a.call(b, M) > -1 !== z
                }
                )) : R.filter(b, M, z)
            }
            R.filter = function(M, b, z) {
                var p = b[0];
                return z && (M = ":not(" + M + ")"),
                1 === b.length && 1 === p.nodeType ? R.find.matchesSelector(p, M) ? [p] : [] : R.find.matches(M, R.grep(b, (function(M) {
                    return 1 === M.nodeType
                }
                )))
            }
            ,
            R.fn.extend({
                find: function(M) {
                    var b, z, p = this.length, O = this;
                    if ("string" != typeof M)
                        return this.pushStack(R(M).filter((function() {
                            for (b = 0; b < p; b++)
                                if (R.contains(O[b], this))
                                    return !0
                        }
                        )));
                    for (z = this.pushStack([]),
                    b = 0; b < p; b++)
                        R.find(M, O[b], z);
                    return p > 1 ? R.uniqueSort(z) : z
                },
                filter: function(M) {
                    return this.pushStack(Y(this, M || [], !1))
                },
                not: function(M) {
                    return this.pushStack(Y(this, M || [], !0))
                },
                is: function(M) {
                    return !!Y(this, "string" == typeof M && T.test(M) ? R(M) : M || [], !1).length
                }
            });
            var v, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (R.fn.init = function(M, b, z) {
                var p, O;
                if (!M)
                    return this;
                if (z = z || v,
                "string" == typeof M) {
                    if (!(p = "<" === M[0] && ">" === M[M.length - 1] && M.length >= 3 ? [null, M, null] : k.exec(M)) || !p[1] && b)
                        return !b || b.jquery ? (b || z).find(M) : this.constructor(b).find(M);
                    if (p[1]) {
                        if (b = b instanceof R ? b[0] : b,
                        R.merge(this, R.parseHTML(p[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                        X.test(p[1]) && R.isPlainObject(b))
                            for (p in b)
                                u(this[p]) ? this[p](b[p]) : this.attr(p, b[p]);
                        return this
                    }
                    return (O = l.getElementById(p[2])) && (this[0] = O,
                    this.length = 1),
                    this
                }
                return M.nodeType ? (this[0] = M,
                this.length = 1,
                this) : u(M) ? void 0 !== z.ready ? z.ready(M) : M(R) : R.makeArray(M, this)
            }
            ).prototype = R.fn,
            v = R(l);
            var D = /^(?:parents|prev(?:Until|All))/
              , w = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function S(M, b) {
                for (; (M = M[b]) && 1 !== M.nodeType; )
                    ;
                return M
            }
            R.fn.extend({
                has: function(M) {
                    var b = R(M, this)
                      , z = b.length;
                    return this.filter((function() {
                        for (var M = 0; M < z; M++)
                            if (R.contains(this, b[M]))
                                return !0
                    }
                    ))
                },
                closest: function(M, b) {
                    var z, p = 0, O = this.length, o = [], e = "string" != typeof M && R(M);
                    if (!T.test(M))
                        for (; p < O; p++)
                            for (z = this[p]; z && z !== b; z = z.parentNode)
                                if (z.nodeType < 11 && (e ? e.index(z) > -1 : 1 === z.nodeType && R.find.matchesSelector(z, M))) {
                                    o.push(z);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? R.uniqueSort(o) : o)
                },
                index: function(M) {
                    return M ? "string" == typeof M ? a.call(R(M), this[0]) : a.call(this, M.jquery ? M[0] : M) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(M, b) {
                    return this.pushStack(R.uniqueSort(R.merge(this.get(), R(M, b))))
                },
                addBack: function(M) {
                    return this.add(null == M ? this.prevObject : this.prevObject.filter(M))
                }
            }),
            R.each({
                parent: function(M) {
                    var b = M.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                },
                parents: function(M) {
                    return N(M, "parentNode")
                },
                parentsUntil: function(M, b, z) {
                    return N(M, "parentNode", z)
                },
                next: function(M) {
                    return S(M, "nextSibling")
                },
                prev: function(M) {
                    return S(M, "previousSibling")
                },
                nextAll: function(M) {
                    return N(M, "nextSibling")
                },
                prevAll: function(M) {
                    return N(M, "previousSibling")
                },
                nextUntil: function(M, b, z) {
                    return N(M, "nextSibling", z)
                },
                prevUntil: function(M, b, z) {
                    return N(M, "previousSibling", z)
                },
                siblings: function(M) {
                    return B((M.parentNode || {}).firstChild, M)
                },
                children: function(M) {
                    return B(M.firstChild)
                },
                contents: function(M) {
                    return null != M.contentDocument && e(M.contentDocument) ? M.contentDocument : (g(M, "template") && (M = M.content || M),
                    R.merge([], M.childNodes))
                }
            }, (function(M, b) {
                R.fn[M] = function(z, p) {
                    var O = R.map(this, b, z);
                    return "Until" !== M.slice(-5) && (p = z),
                    p && "string" == typeof p && (O = R.filter(p, O)),
                    this.length > 1 && (w[M] || R.uniqueSort(O),
                    D.test(M) && O.reverse()),
                    this.pushStack(O)
                }
            }
            ));
            var H = /[^\x20\t\r\n\f]+/g;
            function E(M) {
                return M
            }
            function x(M) {
                throw M
            }
            function j(M, b, z, p) {
                var O;
                try {
                    M && u(O = M.promise) ? O.call(M).done(b).fail(z) : M && u(O = M.then) ? O.call(M, b, z) : b.apply(void 0, [M].slice(p))
                } catch (M) {
                    z.apply(void 0, [M])
                }
            }
            R.Callbacks = function(M) {
                M = "string" == typeof M ? function(M) {
                    var b = {};
                    return R.each(M.match(H) || [], (function(M, z) {
                        b[z] = !0
                    }
                    )),
                    b
                }(M) : R.extend({}, M);
                var b, z, p, O, o = [], e = [], c = -1, n = function() {
                    for (O = O || M.once,
                    p = b = !0; e.length; c = -1)
                        for (z = e.shift(); ++c < o.length; )
                            !1 === o[c].apply(z[0], z[1]) && M.stopOnFalse && (c = o.length,
                            z = !1);
                    M.memory || (z = !1),
                    b = !1,
                    O && (o = z ? [] : "")
                }, t = {
                    add: function() {
                        return o && (z && !b && (c = o.length - 1,
                        e.push(z)),
                        function b(z) {
                            R.each(z, (function(z, p) {
                                u(p) ? M.unique && t.has(p) || o.push(p) : p && p.length && "string" !== L(p) && b(p)
                            }
                            ))
                        }(arguments),
                        z && !b && n()),
                        this
                    },
                    remove: function() {
                        return R.each(arguments, (function(M, b) {
                            for (var z; (z = R.inArray(b, o, z)) > -1; )
                                o.splice(z, 1),
                                z <= c && c--
                        }
                        )),
                        this
                    },
                    has: function(M) {
                        return M ? R.inArray(M, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return O = e = [],
                        o = z = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return O = e = [],
                        z || b || (o = z = ""),
                        this
                    },
                    locked: function() {
                        return !!O
                    },
                    fireWith: function(M, z) {
                        return O || (z = [M, (z = z || []).slice ? z.slice() : z],
                        e.push(z),
                        b || n()),
                        this
                    },
                    fire: function() {
                        return t.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!p
                    }
                };
                return t
            }
            ,
            R.extend({
                Deferred: function(M) {
                    var b = [["notify", "progress", R.Callbacks("memory"), R.Callbacks("memory"), 2], ["resolve", "done", R.Callbacks("once memory"), R.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", R.Callbacks("once memory"), R.Callbacks("once memory"), 1, "rejected"]]
                      , z = "pending"
                      , O = {
                        state: function() {
                            return z
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(M) {
                            return O.then(null, M)
                        },
                        pipe: function() {
                            var M = arguments;
                            return R.Deferred((function(z) {
                                R.each(b, (function(b, p) {
                                    var O = u(M[p[4]]) && M[p[4]];
                                    o[p[1]]((function() {
                                        var M = O && O.apply(this, arguments);
                                        M && u(M.promise) ? M.promise().progress(z.notify).done(z.resolve).fail(z.reject) : z[p[0] + "With"](this, O ? [M] : arguments)
                                    }
                                    ))
                                }
                                )),
                                M = null
                            }
                            )).promise()
                        },
                        then: function(M, z, O) {
                            var o = 0;
                            function e(M, b, z, O) {
                                return function() {
                                    var c = this
                                      , n = arguments
                                      , t = function() {
                                        var p, t;
                                        if (!(M < o)) {
                                            if ((p = z.apply(c, n)) === b.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            t = p && ("object" == typeof p || "function" == typeof p) && p.then,
                                            u(t) ? O ? t.call(p, e(o, b, E, O), e(o, b, x, O)) : (o++,
                                            t.call(p, e(o, b, E, O), e(o, b, x, O), e(o, b, E, b.notifyWith))) : (z !== E && (c = void 0,
                                            n = [p]),
                                            (O || b.resolveWith)(c, n))
                                        }
                                    }
                                      , a = O ? t : function() {
                                        try {
                                            t()
                                        } catch (p) {
                                            R.Deferred.exceptionHook && R.Deferred.exceptionHook(p, a.stackTrace),
                                            M + 1 >= o && (z !== x && (c = void 0,
                                            n = [p]),
                                            b.rejectWith(c, n))
                                        }
                                    }
                                    ;
                                    M ? a() : (R.Deferred.getStackHook && (a.stackTrace = R.Deferred.getStackHook()),
                                    p.setTimeout(a))
                                }
                            }
                            return R.Deferred((function(p) {
                                b[0][3].add(e(0, p, u(O) ? O : E, p.notifyWith)),
                                b[1][3].add(e(0, p, u(M) ? M : E)),
                                b[2][3].add(e(0, p, u(z) ? z : x))
                            }
                            )).promise()
                        },
                        promise: function(M) {
                            return null != M ? R.extend(M, O) : O
                        }
                    }
                      , o = {};
                    return R.each(b, (function(M, p) {
                        var e = p[2]
                          , c = p[5];
                        O[p[1]] = e.add,
                        c && e.add((function() {
                            z = c
                        }
                        ), b[3 - M][2].disable, b[3 - M][3].disable, b[0][2].lock, b[0][3].lock),
                        e.add(p[3].fire),
                        o[p[0]] = function() {
                            return o[p[0] + "With"](this === o ? void 0 : this, arguments),
                            this
                        }
                        ,
                        o[p[0] + "With"] = e.fireWith
                    }
                    )),
                    O.promise(o),
                    M && M.call(o, o),
                    o
                },
                when: function(M) {
                    var b = arguments.length
                      , z = b
                      , p = Array(z)
                      , O = c.call(arguments)
                      , o = R.Deferred()
                      , e = function(M) {
                        return function(z) {
                            p[M] = this,
                            O[M] = arguments.length > 1 ? c.call(arguments) : z,
                            --b || o.resolveWith(p, O)
                        }
                    };
                    if (b <= 1 && (j(M, o.done(e(z)).resolve, o.reject, !b),
                    "pending" === o.state() || u(O[z] && O[z].then)))
                        return o.then();
                    for (; z--; )
                        j(O[z], e(z), o.reject);
                    return o.promise()
                }
            });
            var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            R.Deferred.exceptionHook = function(M, b) {
                p.console && p.console.warn && M && P.test(M.name) && p.console.warn("jQuery.Deferred exception: " + M.message, M.stack, b)
            }
            ,
            R.readyException = function(M) {
                p.setTimeout((function() {
                    throw M
                }
                ))
            }
            ;
            var C = R.Deferred();
            function F() {
                l.removeEventListener("DOMContentLoaded", F),
                p.removeEventListener("load", F),
                R.ready()
            }
            R.fn.ready = function(M) {
                return C.then(M).catch((function(M) {
                    R.readyException(M)
                }
                )),
                this
            }
            ,
            R.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(M) {
                    (!0 === M ? --R.readyWait : R.isReady) || (R.isReady = !0,
                    !0 !== M && --R.readyWait > 0 || C.resolveWith(l, [R]))
                }
            }),
            R.ready.then = C.then,
            "complete" === l.readyState || "loading" !== l.readyState && !l.documentElement.doScroll ? p.setTimeout(R.ready) : (l.addEventListener("DOMContentLoaded", F),
            p.addEventListener("load", F));
            var I = function(M, b, z, p, O, o, e) {
                var c = 0
                  , n = M.length
                  , t = null == z;
                if ("object" === L(z))
                    for (c in O = !0,
                    z)
                        I(M, b, c, z[c], !0, o, e);
                else if (void 0 !== p && (O = !0,
                u(p) || (e = !0),
                t && (e ? (b.call(M, p),
                b = null) : (t = b,
                b = function(M, b, z) {
                    return t.call(R(M), z)
                }
                )),
                b))
                    for (; c < n; c++)
                        b(M[c], z, e ? p : p.call(M[c], c, b(M[c], z)));
                return O ? M : t ? b.call(M) : n ? b(M[0], z) : o
            }
              , U = /^-ms-/
              , G = /-([a-z])/g;
            function J(M, b) {
                return b.toUpperCase()
            }
            function K(M) {
                return M.replace(U, "ms-").replace(G, J)
            }
            var V = function(M) {
                return 1 === M.nodeType || 9 === M.nodeType || !+M.nodeType
            };
            function Q() {
                this.expando = R.expando + Q.uid++
            }
            Q.uid = 1,
            Q.prototype = {
                cache: function(M) {
                    var b = M[this.expando];
                    return b || (b = {},
                    V(M) && (M.nodeType ? M[this.expando] = b : Object.defineProperty(M, this.expando, {
                        value: b,
                        configurable: !0
                    }))),
                    b
                },
                set: function(M, b, z) {
                    var p, O = this.cache(M);
                    if ("string" == typeof b)
                        O[K(b)] = z;
                    else
                        for (p in b)
                            O[K(p)] = b[p];
                    return O
                },
                get: function(M, b) {
                    return void 0 === b ? this.cache(M) : M[this.expando] && M[this.expando][K(b)]
                },
                access: function(M, b, z) {
                    return void 0 === b || b && "string" == typeof b && void 0 === z ? this.get(M, b) : (this.set(M, b, z),
                    void 0 !== z ? z : b)
                },
                remove: function(M, b) {
                    var z, p = M[this.expando];
                    if (void 0 !== p) {
                        if (void 0 !== b) {
                            z = (b = Array.isArray(b) ? b.map(K) : (b = K(b))in p ? [b] : b.match(H) || []).length;
                            for (; z--; )
                                delete p[b[z]]
                        }
                        (void 0 === b || R.isEmptyObject(p)) && (M.nodeType ? M[this.expando] = void 0 : delete M[this.expando])
                    }
                },
                hasData: function(M) {
                    var b = M[this.expando];
                    return void 0 !== b && !R.isEmptyObject(b)
                }
            };
            var $ = new Q
              , Z = new Q
              , MM = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , bM = /[A-Z]/g;
            function zM(M, b, z) {
                var p;
                if (void 0 === z && 1 === M.nodeType)
                    if (p = "data-" + b.replace(bM, "-$&").toLowerCase(),
                    "string" == typeof (z = M.getAttribute(p))) {
                        try {
                            z = function(M) {
                                return "true" === M || "false" !== M && ("null" === M ? null : M === +M + "" ? +M : MM.test(M) ? JSON.parse(M) : M)
                            }(z)
                        } catch (M) {}
                        Z.set(M, b, z)
                    } else
                        z = void 0;
                return z
            }
            R.extend({
                hasData: function(M) {
                    return Z.hasData(M) || $.hasData(M)
                },
                data: function(M, b, z) {
                    return Z.access(M, b, z)
                },
                removeData: function(M, b) {
                    Z.remove(M, b)
                },
                _data: function(M, b, z) {
                    return $.access(M, b, z)
                },
                _removeData: function(M, b) {
                    $.remove(M, b)
                }
            }),
            R.fn.extend({
                data: function(M, b) {
                    var z, p, O, o = this[0], e = o && o.attributes;
                    if (void 0 === M) {
                        if (this.length && (O = Z.get(o),
                        1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
                            for (z = e.length; z--; )
                                e[z] && 0 === (p = e[z].name).indexOf("data-") && (p = K(p.slice(5)),
                                zM(o, p, O[p]));
                            $.set(o, "hasDataAttrs", !0)
                        }
                        return O
                    }
                    return "object" == typeof M ? this.each((function() {
                        Z.set(this, M)
                    }
                    )) : I(this, (function(b) {
                        var z;
                        if (o && void 0 === b)
                            return void 0 !== (z = Z.get(o, M)) || void 0 !== (z = zM(o, M)) ? z : void 0;
                        this.each((function() {
                            Z.set(this, M, b)
                        }
                        ))
                    }
                    ), null, b, arguments.length > 1, null, !0)
                },
                removeData: function(M) {
                    return this.each((function() {
                        Z.remove(this, M)
                    }
                    ))
                }
            }),
            R.extend({
                queue: function(M, b, z) {
                    var p;
                    if (M)
                        return b = (b || "fx") + "queue",
                        p = $.get(M, b),
                        z && (!p || Array.isArray(z) ? p = $.access(M, b, R.makeArray(z)) : p.push(z)),
                        p || []
                },
                dequeue: function(M, b) {
                    b = b || "fx";
                    var z = R.queue(M, b)
                      , p = z.length
                      , O = z.shift()
                      , o = R._queueHooks(M, b);
                    "inprogress" === O && (O = z.shift(),
                    p--),
                    O && ("fx" === b && z.unshift("inprogress"),
                    delete o.stop,
                    O.call(M, (function() {
                        R.dequeue(M, b)
                    }
                    ), o)),
                    !p && o && o.empty.fire()
                },
                _queueHooks: function(M, b) {
                    var z = b + "queueHooks";
                    return $.get(M, z) || $.access(M, z, {
                        empty: R.Callbacks("once memory").add((function() {
                            $.remove(M, [b + "queue", z])
                        }
                        ))
                    })
                }
            }),
            R.fn.extend({
                queue: function(M, b) {
                    var z = 2;
                    return "string" != typeof M && (b = M,
                    M = "fx",
                    z--),
                    arguments.length < z ? R.queue(this[0], M) : void 0 === b ? this : this.each((function() {
                        var z = R.queue(this, M, b);
                        R._queueHooks(this, M),
                        "fx" === M && "inprogress" !== z[0] && R.dequeue(this, M)
                    }
                    ))
                },
                dequeue: function(M) {
                    return this.each((function() {
                        R.dequeue(this, M)
                    }
                    ))
                },
                clearQueue: function(M) {
                    return this.queue(M || "fx", [])
                },
                promise: function(M, b) {
                    var z, p = 1, O = R.Deferred(), o = this, e = this.length, c = function() {
                        --p || O.resolveWith(o, [o])
                    };
                    for ("string" != typeof M && (b = M,
                    M = void 0),
                    M = M || "fx"; e--; )
                        (z = $.get(o[e], M + "queueHooks")) && z.empty && (p++,
                        z.empty.add(c));
                    return c(),
                    O.promise(b)
                }
            });
            var pM = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , OM = new RegExp("^(?:([+-])=|)(" + pM + ")([a-z%]*)$","i")
              , oM = ["Top", "Right", "Bottom", "Left"]
              , eM = l.documentElement
              , cM = function(M) {
                return R.contains(M.ownerDocument, M)
            }
              , nM = {
                composed: !0
            };
            eM.getRootNode && (cM = function(M) {
                return R.contains(M.ownerDocument, M) || M.getRootNode(nM) === M.ownerDocument
            }
            );
            var tM = function(M, b) {
                return "none" === (M = b || M).style.display || "" === M.style.display && cM(M) && "none" === R.css(M, "display")
            };
            function aM(M, b, z, p) {
                var O, o, e = 20, c = p ? function() {
                    return p.cur()
                }
                : function() {
                    return R.css(M, b, "")
                }
                , n = c(), t = z && z[3] || (R.cssNumber[b] ? "" : "px"), a = M.nodeType && (R.cssNumber[b] || "px" !== t && +n) && OM.exec(R.css(M, b));
                if (a && a[3] !== t) {
                    for (n /= 2,
                    t = t || a[3],
                    a = +n || 1; e--; )
                        R.style(M, b, a + t),
                        (1 - o) * (1 - (o = c() / n || .5)) <= 0 && (e = 0),
                        a /= o;
                    a *= 2,
                    R.style(M, b, a + t),
                    z = z || []
                }
                return z && (a = +a || +n || 0,
                O = z[1] ? a + (z[1] + 1) * z[2] : +z[2],
                p && (p.unit = t,
                p.start = a,
                p.end = O)),
                O
            }
            var AM = {};
            function dM(M) {
                var b, z = M.ownerDocument, p = M.nodeName, O = AM[p];
                return O || (b = z.body.appendChild(z.createElement(p)),
                O = R.css(b, "display"),
                b.parentNode.removeChild(b),
                "none" === O && (O = "block"),
                AM[p] = O,
                O)
            }
            function rM(M, b) {
                for (var z, p, O = [], o = 0, e = M.length; o < e; o++)
                    (p = M[o]).style && (z = p.style.display,
                    b ? ("none" === z && (O[o] = $.get(p, "display") || null,
                    O[o] || (p.style.display = "")),
                    "" === p.style.display && tM(p) && (O[o] = dM(p))) : "none" !== z && (O[o] = "none",
                    $.set(p, "display", z)));
                for (o = 0; o < e; o++)
                    null != O[o] && (M[o].style.display = O[o]);
                return M
            }
            R.fn.extend({
                show: function() {
                    return rM(this, !0)
                },
                hide: function() {
                    return rM(this)
                },
                toggle: function(M) {
                    return "boolean" == typeof M ? M ? this.show() : this.hide() : this.each((function() {
                        tM(this) ? R(this).show() : R(this).hide()
                    }
                    ))
                }
            });
            var iM, qM, sM = /^(?:checkbox|radio)$/i, uM = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, WM = /^$|^module$|\/(?:java|ecma)script/i;
            iM = l.createDocumentFragment().appendChild(l.createElement("div")),
            (qM = l.createElement("input")).setAttribute("type", "radio"),
            qM.setAttribute("checked", "checked"),
            qM.setAttribute("name", "t"),
            iM.appendChild(qM),
            s.checkClone = iM.cloneNode(!0).cloneNode(!0).lastChild.checked,
            iM.innerHTML = "<textarea>x</textarea>",
            s.noCloneChecked = !!iM.cloneNode(!0).lastChild.defaultValue,
            iM.innerHTML = "<option></option>",
            s.option = !!iM.lastChild;
            var lM = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function fM(M, b) {
                var z;
                return z = void 0 !== M.getElementsByTagName ? M.getElementsByTagName(b || "*") : void 0 !== M.querySelectorAll ? M.querySelectorAll(b || "*") : [],
                void 0 === b || b && g(M, b) ? R.merge([M], z) : z
            }
            function _M(M, b) {
                for (var z = 0, p = M.length; z < p; z++)
                    $.set(M[z], "globalEval", !b || $.get(b[z], "globalEval"))
            }
            lM.tbody = lM.tfoot = lM.colgroup = lM.caption = lM.thead,
            lM.th = lM.td,
            s.option || (lM.optgroup = lM.option = [1, "<select multiple='multiple'>", "</select>"]);
            var LM = /<|&#?\w+;/;
            function mM(M, b, z, p, O) {
                for (var o, e, c, n, t, a, A = b.createDocumentFragment(), d = [], r = 0, i = M.length; r < i; r++)
                    if ((o = M[r]) || 0 === o)
                        if ("object" === L(o))
                            R.merge(d, o.nodeType ? [o] : o);
                        else if (LM.test(o)) {
                            for (e = e || A.appendChild(b.createElement("div")),
                            c = (uM.exec(o) || ["", ""])[1].toLowerCase(),
                            n = lM[c] || lM._default,
                            e.innerHTML = n[1] + R.htmlPrefilter(o) + n[2],
                            a = n[0]; a--; )
                                e = e.lastChild;
                            R.merge(d, e.childNodes),
                            (e = A.firstChild).textContent = ""
                        } else
                            d.push(b.createTextNode(o));
                for (A.textContent = "",
                r = 0; o = d[r++]; )
                    if (p && R.inArray(o, p) > -1)
                        O && O.push(o);
                    else if (t = cM(o),
                    e = fM(A.appendChild(o), "script"),
                    t && _M(e),
                    z)
                        for (a = 0; o = e[a++]; )
                            WM.test(o.type || "") && z.push(o);
                return A
            }
            var RM = /^([^.]*)(?:\.(.+)|)/;
            function hM() {
                return !0
            }
            function yM() {
                return !1
            }
            function NM(M, b) {
                return M === function() {
                    try {
                        return l.activeElement
                    } catch (M) {}
                }() == ("focus" === b)
            }
            function BM(M, b, z, p, O, o) {
                var e, c;
                if ("object" == typeof b) {
                    for (c in "string" != typeof z && (p = p || z,
                    z = void 0),
                    b)
                        BM(M, c, z, p, b[c], o);
                    return M
                }
                if (null == p && null == O ? (O = z,
                p = z = void 0) : null == O && ("string" == typeof z ? (O = p,
                p = void 0) : (O = p,
                p = z,
                z = void 0)),
                !1 === O)
                    O = yM;
                else if (!O)
                    return M;
                return 1 === o && (e = O,
                O = function(M) {
                    return R().off(M),
                    e.apply(this, arguments)
                }
                ,
                O.guid = e.guid || (e.guid = R.guid++)),
                M.each((function() {
                    R.event.add(this, b, O, p, z)
                }
                ))
            }
            function TM(M, b, z) {
                z ? ($.set(M, b, !1),
                R.event.add(M, b, {
                    namespace: !1,
                    handler: function(M) {
                        var p, O, o = $.get(this, b);
                        if (1 & M.isTrigger && this[b]) {
                            if (o.length)
                                (R.event.special[b] || {}).delegateType && M.stopPropagation();
                            else if (o = c.call(arguments),
                            $.set(this, b, o),
                            p = z(this, b),
                            this[b](),
                            o !== (O = $.get(this, b)) || p ? $.set(this, b, !1) : O = {},
                            o !== O)
                                return M.stopImmediatePropagation(),
                                M.preventDefault(),
                                O && O.value
                        } else
                            o.length && ($.set(this, b, {
                                value: R.event.trigger(R.extend(o[0], R.Event.prototype), o.slice(1), this)
                            }),
                            M.stopImmediatePropagation())
                    }
                })) : void 0 === $.get(M, b) && R.event.add(M, b, hM)
            }
            R.event = {
                global: {},
                add: function(M, b, z, p, O) {
                    var o, e, c, n, t, a, A, d, r, i, q, s = $.get(M);
                    if (V(M))
                        for (z.handler && (z = (o = z).handler,
                        O = o.selector),
                        O && R.find.matchesSelector(eM, O),
                        z.guid || (z.guid = R.guid++),
                        (n = s.events) || (n = s.events = Object.create(null)),
                        (e = s.handle) || (e = s.handle = function(b) {
                            return void 0 !== R && R.event.triggered !== b.type ? R.event.dispatch.apply(M, arguments) : void 0
                        }
                        ),
                        t = (b = (b || "").match(H) || [""]).length; t--; )
                            r = q = (c = RM.exec(b[t]) || [])[1],
                            i = (c[2] || "").split(".").sort(),
                            r && (A = R.event.special[r] || {},
                            r = (O ? A.delegateType : A.bindType) || r,
                            A = R.event.special[r] || {},
                            a = R.extend({
                                type: r,
                                origType: q,
                                data: p,
                                handler: z,
                                guid: z.guid,
                                selector: O,
                                needsContext: O && R.expr.match.needsContext.test(O),
                                namespace: i.join(".")
                            }, o),
                            (d = n[r]) || ((d = n[r] = []).delegateCount = 0,
                            A.setup && !1 !== A.setup.call(M, p, i, e) || M.addEventListener && M.addEventListener(r, e)),
                            A.add && (A.add.call(M, a),
                            a.handler.guid || (a.handler.guid = z.guid)),
                            O ? d.splice(d.delegateCount++, 0, a) : d.push(a),
                            R.event.global[r] = !0)
                },
                remove: function(M, b, z, p, O) {
                    var o, e, c, n, t, a, A, d, r, i, q, s = $.hasData(M) && $.get(M);
                    if (s && (n = s.events)) {
                        for (t = (b = (b || "").match(H) || [""]).length; t--; )
                            if (r = q = (c = RM.exec(b[t]) || [])[1],
                            i = (c[2] || "").split(".").sort(),
                            r) {
                                for (A = R.event.special[r] || {},
                                d = n[r = (p ? A.delegateType : A.bindType) || r] || [],
                                c = c[2] && new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                e = o = d.length; o--; )
                                    a = d[o],
                                    !O && q !== a.origType || z && z.guid !== a.guid || c && !c.test(a.namespace) || p && p !== a.selector && ("**" !== p || !a.selector) || (d.splice(o, 1),
                                    a.selector && d.delegateCount--,
                                    A.remove && A.remove.call(M, a));
                                e && !d.length && (A.teardown && !1 !== A.teardown.call(M, i, s.handle) || R.removeEvent(M, r, s.handle),
                                delete n[r])
                            } else
                                for (r in n)
                                    R.event.remove(M, r + b[t], z, p, !0);
                        R.isEmptyObject(n) && $.remove(M, "handle events")
                    }
                },
                dispatch: function(M) {
                    var b, z, p, O, o, e, c = new Array(arguments.length), n = R.event.fix(M), t = ($.get(this, "events") || Object.create(null))[n.type] || [], a = R.event.special[n.type] || {};
                    for (c[0] = n,
                    b = 1; b < arguments.length; b++)
                        c[b] = arguments[b];
                    if (n.delegateTarget = this,
                    !a.preDispatch || !1 !== a.preDispatch.call(this, n)) {
                        for (e = R.event.handlers.call(this, n, t),
                        b = 0; (O = e[b++]) && !n.isPropagationStopped(); )
                            for (n.currentTarget = O.elem,
                            z = 0; (o = O.handlers[z++]) && !n.isImmediatePropagationStopped(); )
                                n.rnamespace && !1 !== o.namespace && !n.rnamespace.test(o.namespace) || (n.handleObj = o,
                                n.data = o.data,
                                void 0 !== (p = ((R.event.special[o.origType] || {}).handle || o.handler).apply(O.elem, c)) && !1 === (n.result = p) && (n.preventDefault(),
                                n.stopPropagation()));
                        return a.postDispatch && a.postDispatch.call(this, n),
                        n.result
                    }
                },
                handlers: function(M, b) {
                    var z, p, O, o, e, c = [], n = b.delegateCount, t = M.target;
                    if (n && t.nodeType && !("click" === M.type && M.button >= 1))
                        for (; t !== this; t = t.parentNode || this)
                            if (1 === t.nodeType && ("click" !== M.type || !0 !== t.disabled)) {
                                for (o = [],
                                e = {},
                                z = 0; z < n; z++)
                                    void 0 === e[O = (p = b[z]).selector + " "] && (e[O] = p.needsContext ? R(O, this).index(t) > -1 : R.find(O, this, null, [t]).length),
                                    e[O] && o.push(p);
                                o.length && c.push({
                                    elem: t,
                                    handlers: o
                                })
                            }
                    return t = this,
                    n < b.length && c.push({
                        elem: t,
                        handlers: b.slice(n)
                    }),
                    c
                },
                addProp: function(M, b) {
                    Object.defineProperty(R.Event.prototype, M, {
                        enumerable: !0,
                        configurable: !0,
                        get: u(b) ? function() {
                            if (this.originalEvent)
                                return b(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[M]
                        }
                        ,
                        set: function(b) {
                            Object.defineProperty(this, M, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    })
                },
                fix: function(M) {
                    return M[R.expando] ? M : new R.Event(M)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(M) {
                            var b = this || M;
                            return sM.test(b.type) && b.click && g(b, "input") && TM(b, "click", hM),
                            !1
                        },
                        trigger: function(M) {
                            var b = this || M;
                            return sM.test(b.type) && b.click && g(b, "input") && TM(b, "click"),
                            !0
                        },
                        _default: function(M) {
                            var b = M.target;
                            return sM.test(b.type) && b.click && g(b, "input") && $.get(b, "click") || g(b, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(M) {
                            void 0 !== M.result && M.originalEvent && (M.originalEvent.returnValue = M.result)
                        }
                    }
                }
            },
            R.removeEvent = function(M, b, z) {
                M.removeEventListener && M.removeEventListener(b, z)
            }
            ,
            R.Event = function(M, b) {
                if (!(this instanceof R.Event))
                    return new R.Event(M,b);
                M && M.type ? (this.originalEvent = M,
                this.type = M.type,
                this.isDefaultPrevented = M.defaultPrevented || void 0 === M.defaultPrevented && !1 === M.returnValue ? hM : yM,
                this.target = M.target && 3 === M.target.nodeType ? M.target.parentNode : M.target,
                this.currentTarget = M.currentTarget,
                this.relatedTarget = M.relatedTarget) : this.type = M,
                b && R.extend(this, b),
                this.timeStamp = M && M.timeStamp || Date.now(),
                this[R.expando] = !0
            }
            ,
            R.Event.prototype = {
                constructor: R.Event,
                isDefaultPrevented: yM,
                isPropagationStopped: yM,
                isImmediatePropagationStopped: yM,
                isSimulated: !1,
                preventDefault: function() {
                    var M = this.originalEvent;
                    this.isDefaultPrevented = hM,
                    M && !this.isSimulated && M.preventDefault()
                },
                stopPropagation: function() {
                    var M = this.originalEvent;
                    this.isPropagationStopped = hM,
                    M && !this.isSimulated && M.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var M = this.originalEvent;
                    this.isImmediatePropagationStopped = hM,
                    M && !this.isSimulated && M.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            R.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, R.event.addProp),
            R.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(M, b) {
                R.event.special[M] = {
                    setup: function() {
                        return TM(this, M, NM),
                        !1
                    },
                    trigger: function() {
                        return TM(this, M),
                        !0
                    },
                    _default: function(b) {
                        return $.get(b.target, M)
                    },
                    delegateType: b
                }
            }
            )),
            R.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(M, b) {
                R.event.special[M] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(M) {
                        var z, p = M.relatedTarget, O = M.handleObj;
                        return p && (p === this || R.contains(this, p)) || (M.type = O.origType,
                        z = O.handler.apply(this, arguments),
                        M.type = b),
                        z
                    }
                }
            }
            )),
            R.fn.extend({
                on: function(M, b, z, p) {
                    return BM(this, M, b, z, p)
                },
                one: function(M, b, z, p) {
                    return BM(this, M, b, z, p, 1)
                },
                off: function(M, b, z) {
                    var p, O;
                    if (M && M.preventDefault && M.handleObj)
                        return p = M.handleObj,
                        R(M.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler),
                        this;
                    if ("object" == typeof M) {
                        for (O in M)
                            this.off(O, b, M[O]);
                        return this
                    }
                    return !1 !== b && "function" != typeof b || (z = b,
                    b = void 0),
                    !1 === z && (z = yM),
                    this.each((function() {
                        R.event.remove(this, M, z, b)
                    }
                    ))
                }
            });
            var gM = /<script|<style|<link/i
              , XM = /checked\s*(?:[^=]|=\s*.checked.)/i
              , YM = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function vM(M, b) {
                return g(M, "table") && g(11 !== b.nodeType ? b : b.firstChild, "tr") && R(M).children("tbody")[0] || M
            }
            function kM(M) {
                return M.type = (null !== M.getAttribute("type")) + "/" + M.type,
                M
            }
            function DM(M) {
                return "true/" === (M.type || "").slice(0, 5) ? M.type = M.type.slice(5) : M.removeAttribute("type"),
                M
            }
            function wM(M, b) {
                var z, p, O, o, e, c;
                if (1 === b.nodeType) {
                    if ($.hasData(M) && (c = $.get(M).events))
                        for (O in $.remove(b, "handle events"),
                        c)
                            for (z = 0,
                            p = c[O].length; z < p; z++)
                                R.event.add(b, O, c[O][z]);
                    Z.hasData(M) && (o = Z.access(M),
                    e = R.extend({}, o),
                    Z.set(b, e))
                }
            }
            function SM(M, b) {
                var z = b.nodeName.toLowerCase();
                "input" === z && sM.test(M.type) ? b.checked = M.checked : "input" !== z && "textarea" !== z || (b.defaultValue = M.defaultValue)
            }
            function HM(M, b, z, p) {
                b = n(b);
                var O, o, e, c, t, a, A = 0, d = M.length, r = d - 1, i = b[0], q = u(i);
                if (q || d > 1 && "string" == typeof i && !s.checkClone && XM.test(i))
                    return M.each((function(O) {
                        var o = M.eq(O);
                        q && (b[0] = i.call(this, O, o.html())),
                        HM(o, b, z, p)
                    }
                    ));
                if (d && (o = (O = mM(b, M[0].ownerDocument, !1, M, p)).firstChild,
                1 === O.childNodes.length && (O = o),
                o || p)) {
                    for (c = (e = R.map(fM(O, "script"), kM)).length; A < d; A++)
                        t = O,
                        A !== r && (t = R.clone(t, !0, !0),
                        c && R.merge(e, fM(t, "script"))),
                        z.call(M[A], t, A);
                    if (c)
                        for (a = e[e.length - 1].ownerDocument,
                        R.map(e, DM),
                        A = 0; A < c; A++)
                            t = e[A],
                            WM.test(t.type || "") && !$.access(t, "globalEval") && R.contains(a, t) && (t.src && "module" !== (t.type || "").toLowerCase() ? R._evalUrl && !t.noModule && R._evalUrl(t.src, {
                                nonce: t.nonce || t.getAttribute("nonce")
                            }, a) : _(t.textContent.replace(YM, ""), t, a))
                }
                return M
            }
            function EM(M, b, z) {
                for (var p, O = b ? R.filter(b, M) : M, o = 0; null != (p = O[o]); o++)
                    z || 1 !== p.nodeType || R.cleanData(fM(p)),
                    p.parentNode && (z && cM(p) && _M(fM(p, "script")),
                    p.parentNode.removeChild(p));
                return M
            }
            R.extend({
                htmlPrefilter: function(M) {
                    return M
                },
                clone: function(M, b, z) {
                    var p, O, o, e, c = M.cloneNode(!0), n = cM(M);
                    if (!(s.noCloneChecked || 1 !== M.nodeType && 11 !== M.nodeType || R.isXMLDoc(M)))
                        for (e = fM(c),
                        p = 0,
                        O = (o = fM(M)).length; p < O; p++)
                            SM(o[p], e[p]);
                    if (b)
                        if (z)
                            for (o = o || fM(M),
                            e = e || fM(c),
                            p = 0,
                            O = o.length; p < O; p++)
                                wM(o[p], e[p]);
                        else
                            wM(M, c);
                    return (e = fM(c, "script")).length > 0 && _M(e, !n && fM(M, "script")),
                    c
                },
                cleanData: function(M) {
                    for (var b, z, p, O = R.event.special, o = 0; void 0 !== (z = M[o]); o++)
                        if (V(z)) {
                            if (b = z[$.expando]) {
                                if (b.events)
                                    for (p in b.events)
                                        O[p] ? R.event.remove(z, p) : R.removeEvent(z, p, b.handle);
                                z[$.expando] = void 0
                            }
                            z[Z.expando] && (z[Z.expando] = void 0)
                        }
                }
            }),
            R.fn.extend({
                detach: function(M) {
                    return EM(this, M, !0)
                },
                remove: function(M) {
                    return EM(this, M)
                },
                text: function(M) {
                    return I(this, (function(M) {
                        return void 0 === M ? R.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = M)
                        }
                        ))
                    }
                    ), null, M, arguments.length)
                },
                append: function() {
                    return HM(this, arguments, (function(M) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || vM(this, M).appendChild(M)
                    }
                    ))
                },
                prepend: function() {
                    return HM(this, arguments, (function(M) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = vM(this, M);
                            b.insertBefore(M, b.firstChild)
                        }
                    }
                    ))
                },
                before: function() {
                    return HM(this, arguments, (function(M) {
                        this.parentNode && this.parentNode.insertBefore(M, this)
                    }
                    ))
                },
                after: function() {
                    return HM(this, arguments, (function(M) {
                        this.parentNode && this.parentNode.insertBefore(M, this.nextSibling)
                    }
                    ))
                },
                empty: function() {
                    for (var M, b = 0; null != (M = this[b]); b++)
                        1 === M.nodeType && (R.cleanData(fM(M, !1)),
                        M.textContent = "");
                    return this
                },
                clone: function(M, b) {
                    return M = null != M && M,
                    b = null == b ? M : b,
                    this.map((function() {
                        return R.clone(this, M, b)
                    }
                    ))
                },
                html: function(M) {
                    return I(this, (function(M) {
                        var b = this[0] || {}
                          , z = 0
                          , p = this.length;
                        if (void 0 === M && 1 === b.nodeType)
                            return b.innerHTML;
                        if ("string" == typeof M && !gM.test(M) && !lM[(uM.exec(M) || ["", ""])[1].toLowerCase()]) {
                            M = R.htmlPrefilter(M);
                            try {
                                for (; z < p; z++)
                                    1 === (b = this[z] || {}).nodeType && (R.cleanData(fM(b, !1)),
                                    b.innerHTML = M);
                                b = 0
                            } catch (M) {}
                        }
                        b && this.empty().append(M)
                    }
                    ), null, M, arguments.length)
                },
                replaceWith: function() {
                    var M = [];
                    return HM(this, arguments, (function(b) {
                        var z = this.parentNode;
                        R.inArray(this, M) < 0 && (R.cleanData(fM(this)),
                        z && z.replaceChild(b, this))
                    }
                    ), M)
                }
            }),
            R.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(M, b) {
                R.fn[M] = function(M) {
                    for (var z, p = [], O = R(M), o = O.length - 1, e = 0; e <= o; e++)
                        z = e === o ? this : this.clone(!0),
                        R(O[e])[b](z),
                        t.apply(p, z.get());
                    return this.pushStack(p)
                }
            }
            ));
            var xM = new RegExp("^(" + pM + ")(?!px)[a-z%]+$","i")
              , jM = /^--/
              , PM = function(M) {
                var b = M.ownerDocument.defaultView;
                return b && b.opener || (b = p),
                b.getComputedStyle(M)
            }
              , CM = function(M, b, z) {
                var p, O, o = {};
                for (O in b)
                    o[O] = M.style[O],
                    M.style[O] = b[O];
                for (O in p = z.call(M),
                b)
                    M.style[O] = o[O];
                return p
            }
              , FM = new RegExp(oM.join("|"),"i")
              , IM = "[\\x20\\t\\r\\n\\f]"
              , UM = new RegExp("^" + IM + "+|((?:^|[^\\\\])(?:\\\\.)*)" + IM + "+$","g");
            function GM(M, b, z) {
                var p, O, o, e, c = jM.test(b), n = M.style;
                return (z = z || PM(M)) && (e = z.getPropertyValue(b) || z[b],
                c && e && (e = e.replace(UM, "$1") || void 0),
                "" !== e || cM(M) || (e = R.style(M, b)),
                !s.pixelBoxStyles() && xM.test(e) && FM.test(b) && (p = n.width,
                O = n.minWidth,
                o = n.maxWidth,
                n.minWidth = n.maxWidth = n.width = e,
                e = z.width,
                n.width = p,
                n.minWidth = O,
                n.maxWidth = o)),
                void 0 !== e ? e + "" : e
            }
            function JM(M, b) {
                return {
                    get: function() {
                        if (!M())
                            return (this.get = b).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function M() {
                    if (a) {
                        t.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        a.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        eM.appendChild(t).appendChild(a);
                        var M = p.getComputedStyle(a);
                        z = "1%" !== M.top,
                        n = 12 === b(M.marginLeft),
                        a.style.right = "60%",
                        e = 36 === b(M.right),
                        O = 36 === b(M.width),
                        a.style.position = "absolute",
                        o = 12 === b(a.offsetWidth / 3),
                        eM.removeChild(t),
                        a = null
                    }
                }
                function b(M) {
                    return Math.round(parseFloat(M))
                }
                var z, O, o, e, c, n, t = l.createElement("div"), a = l.createElement("div");
                a.style && (a.style.backgroundClip = "content-box",
                a.cloneNode(!0).style.backgroundClip = "",
                s.clearCloneStyle = "content-box" === a.style.backgroundClip,
                R.extend(s, {
                    boxSizingReliable: function() {
                        return M(),
                        O
                    },
                    pixelBoxStyles: function() {
                        return M(),
                        e
                    },
                    pixelPosition: function() {
                        return M(),
                        z
                    },
                    reliableMarginLeft: function() {
                        return M(),
                        n
                    },
                    scrollboxSize: function() {
                        return M(),
                        o
                    },
                    reliableTrDimensions: function() {
                        var M, b, z, O;
                        return null == c && (M = l.createElement("table"),
                        b = l.createElement("tr"),
                        z = l.createElement("div"),
                        M.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        b.style.cssText = "border:1px solid",
                        b.style.height = "1px",
                        z.style.height = "9px",
                        z.style.display = "block",
                        eM.appendChild(M).appendChild(b).appendChild(z),
                        O = p.getComputedStyle(b),
                        c = parseInt(O.height, 10) + parseInt(O.borderTopWidth, 10) + parseInt(O.borderBottomWidth, 10) === b.offsetHeight,
                        eM.removeChild(M)),
                        c
                    }
                }))
            }();
            var KM = ["Webkit", "Moz", "ms"]
              , VM = l.createElement("div").style
              , QM = {};
            function $M(M) {
                var b = R.cssProps[M] || QM[M];
                return b || (M in VM ? M : QM[M] = function(M) {
                    for (var b = M[0].toUpperCase() + M.slice(1), z = KM.length; z--; )
                        if ((M = KM[z] + b)in VM)
                            return M
                }(M) || M)
            }
            var ZM = /^(none|table(?!-c[ea]).+)/
              , Mb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , bb = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function zb(M, b, z) {
                var p = OM.exec(b);
                return p ? Math.max(0, p[2] - (z || 0)) + (p[3] || "px") : b
            }
            function pb(M, b, z, p, O, o) {
                var e = "width" === b ? 1 : 0
                  , c = 0
                  , n = 0;
                if (z === (p ? "border" : "content"))
                    return 0;
                for (; e < 4; e += 2)
                    "margin" === z && (n += R.css(M, z + oM[e], !0, O)),
                    p ? ("content" === z && (n -= R.css(M, "padding" + oM[e], !0, O)),
                    "margin" !== z && (n -= R.css(M, "border" + oM[e] + "Width", !0, O))) : (n += R.css(M, "padding" + oM[e], !0, O),
                    "padding" !== z ? n += R.css(M, "border" + oM[e] + "Width", !0, O) : c += R.css(M, "border" + oM[e] + "Width", !0, O));
                return !p && o >= 0 && (n += Math.max(0, Math.ceil(M["offset" + b[0].toUpperCase() + b.slice(1)] - o - n - c - .5)) || 0),
                n
            }
            function Ob(M, b, z) {
                var p = PM(M)
                  , O = (!s.boxSizingReliable() || z) && "border-box" === R.css(M, "boxSizing", !1, p)
                  , o = O
                  , e = GM(M, b, p)
                  , c = "offset" + b[0].toUpperCase() + b.slice(1);
                if (xM.test(e)) {
                    if (!z)
                        return e;
                    e = "auto"
                }
                return (!s.boxSizingReliable() && O || !s.reliableTrDimensions() && g(M, "tr") || "auto" === e || !parseFloat(e) && "inline" === R.css(M, "display", !1, p)) && M.getClientRects().length && (O = "border-box" === R.css(M, "boxSizing", !1, p),
                (o = c in M) && (e = M[c])),
                (e = parseFloat(e) || 0) + pb(M, b, z || (O ? "border" : "content"), o, p, e) + "px"
            }
            function ob(M, b, z, p, O) {
                return new ob.prototype.init(M,b,z,p,O)
            }
            R.extend({
                cssHooks: {
                    opacity: {
                        get: function(M, b) {
                            if (b) {
                                var z = GM(M, "opacity");
                                return "" === z ? "1" : z
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(M, b, z, p) {
                    if (M && 3 !== M.nodeType && 8 !== M.nodeType && M.style) {
                        var O, o, e, c = K(b), n = jM.test(b), t = M.style;
                        if (n || (b = $M(c)),
                        e = R.cssHooks[b] || R.cssHooks[c],
                        void 0 === z)
                            return e && "get"in e && void 0 !== (O = e.get(M, !1, p)) ? O : t[b];
                        "string" === (o = typeof z) && (O = OM.exec(z)) && O[1] && (z = aM(M, b, O),
                        o = "number"),
                        null != z && z == z && ("number" !== o || n || (z += O && O[3] || (R.cssNumber[c] ? "" : "px")),
                        s.clearCloneStyle || "" !== z || 0 !== b.indexOf("background") || (t[b] = "inherit"),
                        e && "set"in e && void 0 === (z = e.set(M, z, p)) || (n ? t.setProperty(b, z) : t[b] = z))
                    }
                },
                css: function(M, b, z, p) {
                    var O, o, e, c = K(b);
                    return jM.test(b) || (b = $M(c)),
                    (e = R.cssHooks[b] || R.cssHooks[c]) && "get"in e && (O = e.get(M, !0, z)),
                    void 0 === O && (O = GM(M, b, p)),
                    "normal" === O && b in bb && (O = bb[b]),
                    "" === z || z ? (o = parseFloat(O),
                    !0 === z || isFinite(o) ? o || 0 : O) : O
                }
            }),
            R.each(["height", "width"], (function(M, b) {
                R.cssHooks[b] = {
                    get: function(M, z, p) {
                        if (z)
                            return !ZM.test(R.css(M, "display")) || M.getClientRects().length && M.getBoundingClientRect().width ? Ob(M, b, p) : CM(M, Mb, (function() {
                                return Ob(M, b, p)
                            }
                            ))
                    },
                    set: function(M, z, p) {
                        var O, o = PM(M), e = !s.scrollboxSize() && "absolute" === o.position, c = (e || p) && "border-box" === R.css(M, "boxSizing", !1, o), n = p ? pb(M, b, p, c, o) : 0;
                        return c && e && (n -= Math.ceil(M["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(o[b]) - pb(M, b, "border", !1, o) - .5)),
                        n && (O = OM.exec(z)) && "px" !== (O[3] || "px") && (M.style[b] = z,
                        z = R.css(M, b)),
                        zb(0, z, n)
                    }
                }
            }
            )),
            R.cssHooks.marginLeft = JM(s.reliableMarginLeft, (function(M, b) {
                if (b)
                    return (parseFloat(GM(M, "marginLeft")) || M.getBoundingClientRect().left - CM(M, {
                        marginLeft: 0
                    }, (function() {
                        return M.getBoundingClientRect().left
                    }
                    ))) + "px"
            }
            )),
            R.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(M, b) {
                R.cssHooks[M + b] = {
                    expand: function(z) {
                        for (var p = 0, O = {}, o = "string" == typeof z ? z.split(" ") : [z]; p < 4; p++)
                            O[M + oM[p] + b] = o[p] || o[p - 2] || o[0];
                        return O
                    }
                },
                "margin" !== M && (R.cssHooks[M + b].set = zb)
            }
            )),
            R.fn.extend({
                css: function(M, b) {
                    return I(this, (function(M, b, z) {
                        var p, O, o = {}, e = 0;
                        if (Array.isArray(b)) {
                            for (p = PM(M),
                            O = b.length; e < O; e++)
                                o[b[e]] = R.css(M, b[e], !1, p);
                            return o
                        }
                        return void 0 !== z ? R.style(M, b, z) : R.css(M, b)
                    }
                    ), M, b, arguments.length > 1)
                }
            }),
            R.Tween = ob,
            ob.prototype = {
                constructor: ob,
                init: function(M, b, z, p, O, o) {
                    this.elem = M,
                    this.prop = z,
                    this.easing = O || R.easing._default,
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = p,
                    this.unit = o || (R.cssNumber[z] ? "" : "px")
                },
                cur: function() {
                    var M = ob.propHooks[this.prop];
                    return M && M.get ? M.get(this) : ob.propHooks._default.get(this)
                },
                run: function(M) {
                    var b, z = ob.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = R.easing[this.easing](M, this.options.duration * M, 0, 1, this.options.duration) : this.pos = b = M,
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    z && z.set ? z.set(this) : ob.propHooks._default.set(this),
                    this
                }
            },
            ob.prototype.init.prototype = ob.prototype,
            ob.propHooks = {
                _default: {
                    get: function(M) {
                        var b;
                        return 1 !== M.elem.nodeType || null != M.elem[M.prop] && null == M.elem.style[M.prop] ? M.elem[M.prop] : (b = R.css(M.elem, M.prop, "")) && "auto" !== b ? b : 0
                    },
                    set: function(M) {
                        R.fx.step[M.prop] ? R.fx.step[M.prop](M) : 1 !== M.elem.nodeType || !R.cssHooks[M.prop] && null == M.elem.style[$M(M.prop)] ? M.elem[M.prop] = M.now : R.style(M.elem, M.prop, M.now + M.unit)
                    }
                }
            },
            ob.propHooks.scrollTop = ob.propHooks.scrollLeft = {
                set: function(M) {
                    M.elem.nodeType && M.elem.parentNode && (M.elem[M.prop] = M.now)
                }
            },
            R.easing = {
                linear: function(M) {
                    return M
                },
                swing: function(M) {
                    return .5 - Math.cos(M * Math.PI) / 2
                },
                _default: "swing"
            },
            R.fx = ob.prototype.init,
            R.fx.step = {};
            var eb, cb, nb = /^(?:toggle|show|hide)$/, tb = /queueHooks$/;
            function ab() {
                cb && (!1 === l.hidden && p.requestAnimationFrame ? p.requestAnimationFrame(ab) : p.setTimeout(ab, R.fx.interval),
                R.fx.tick())
            }
            function Ab() {
                return p.setTimeout((function() {
                    eb = void 0
                }
                )),
                eb = Date.now()
            }
            function db(M, b) {
                var z, p = 0, O = {
                    height: M
                };
                for (b = b ? 1 : 0; p < 4; p += 2 - b)
                    O["margin" + (z = oM[p])] = O["padding" + z] = M;
                return b && (O.opacity = O.width = M),
                O
            }
            function rb(M, b, z) {
                for (var p, O = (ib.tweeners[b] || []).concat(ib.tweeners["*"]), o = 0, e = O.length; o < e; o++)
                    if (p = O[o].call(z, b, M))
                        return p
            }
            function ib(M, b, z) {
                var p, O, o = 0, e = ib.prefilters.length, c = R.Deferred().always((function() {
                    delete n.elem
                }
                )), n = function() {
                    if (O)
                        return !1;
                    for (var b = eb || Ab(), z = Math.max(0, t.startTime + t.duration - b), p = 1 - (z / t.duration || 0), o = 0, e = t.tweens.length; o < e; o++)
                        t.tweens[o].run(p);
                    return c.notifyWith(M, [t, p, z]),
                    p < 1 && e ? z : (e || c.notifyWith(M, [t, 1, 0]),
                    c.resolveWith(M, [t]),
                    !1)
                }, t = c.promise({
                    elem: M,
                    props: R.extend({}, b),
                    opts: R.extend(!0, {
                        specialEasing: {},
                        easing: R.easing._default
                    }, z),
                    originalProperties: b,
                    originalOptions: z,
                    startTime: eb || Ab(),
                    duration: z.duration,
                    tweens: [],
                    createTween: function(b, z) {
                        var p = R.Tween(M, t.opts, b, z, t.opts.specialEasing[b] || t.opts.easing);
                        return t.tweens.push(p),
                        p
                    },
                    stop: function(b) {
                        var z = 0
                          , p = b ? t.tweens.length : 0;
                        if (O)
                            return this;
                        for (O = !0; z < p; z++)
                            t.tweens[z].run(1);
                        return b ? (c.notifyWith(M, [t, 1, 0]),
                        c.resolveWith(M, [t, b])) : c.rejectWith(M, [t, b]),
                        this
                    }
                }), a = t.props;
                for (!function(M, b) {
                    var z, p, O, o, e;
                    for (z in M)
                        if (O = b[p = K(z)],
                        o = M[z],
                        Array.isArray(o) && (O = o[1],
                        o = M[z] = o[0]),
                        z !== p && (M[p] = o,
                        delete M[z]),
                        (e = R.cssHooks[p]) && "expand"in e)
                            for (z in o = e.expand(o),
                            delete M[p],
                            o)
                                z in M || (M[z] = o[z],
                                b[z] = O);
                        else
                            b[p] = O
                }(a, t.opts.specialEasing); o < e; o++)
                    if (p = ib.prefilters[o].call(t, M, a, t.opts))
                        return u(p.stop) && (R._queueHooks(t.elem, t.opts.queue).stop = p.stop.bind(p)),
                        p;
                return R.map(a, rb, t),
                u(t.opts.start) && t.opts.start.call(M, t),
                t.progress(t.opts.progress).done(t.opts.done, t.opts.complete).fail(t.opts.fail).always(t.opts.always),
                R.fx.timer(R.extend(n, {
                    elem: M,
                    anim: t,
                    queue: t.opts.queue
                })),
                t
            }
            R.Animation = R.extend(ib, {
                tweeners: {
                    "*": [function(M, b) {
                        var z = this.createTween(M, b);
                        return aM(z.elem, M, OM.exec(b), z),
                        z
                    }
                    ]
                },
                tweener: function(M, b) {
                    u(M) ? (b = M,
                    M = ["*"]) : M = M.match(H);
                    for (var z, p = 0, O = M.length; p < O; p++)
                        z = M[p],
                        ib.tweeners[z] = ib.tweeners[z] || [],
                        ib.tweeners[z].unshift(b)
                },
                prefilters: [function(M, b, z) {
                    var p, O, o, e, c, n, t, a, A = "width"in b || "height"in b, d = this, r = {}, i = M.style, q = M.nodeType && tM(M), s = $.get(M, "fxshow");
                    for (p in z.queue || (null == (e = R._queueHooks(M, "fx")).unqueued && (e.unqueued = 0,
                    c = e.empty.fire,
                    e.empty.fire = function() {
                        e.unqueued || c()
                    }
                    ),
                    e.unqueued++,
                    d.always((function() {
                        d.always((function() {
                            e.unqueued--,
                            R.queue(M, "fx").length || e.empty.fire()
                        }
                        ))
                    }
                    ))),
                    b)
                        if (O = b[p],
                        nb.test(O)) {
                            if (delete b[p],
                            o = o || "toggle" === O,
                            O === (q ? "hide" : "show")) {
                                if ("show" !== O || !s || void 0 === s[p])
                                    continue;
                                q = !0
                            }
                            r[p] = s && s[p] || R.style(M, p)
                        }
                    if ((n = !R.isEmptyObject(b)) || !R.isEmptyObject(r))
                        for (p in A && 1 === M.nodeType && (z.overflow = [i.overflow, i.overflowX, i.overflowY],
                        null == (t = s && s.display) && (t = $.get(M, "display")),
                        "none" === (a = R.css(M, "display")) && (t ? a = t : (rM([M], !0),
                        t = M.style.display || t,
                        a = R.css(M, "display"),
                        rM([M]))),
                        ("inline" === a || "inline-block" === a && null != t) && "none" === R.css(M, "float") && (n || (d.done((function() {
                            i.display = t
                        }
                        )),
                        null == t && (a = i.display,
                        t = "none" === a ? "" : a)),
                        i.display = "inline-block")),
                        z.overflow && (i.overflow = "hidden",
                        d.always((function() {
                            i.overflow = z.overflow[0],
                            i.overflowX = z.overflow[1],
                            i.overflowY = z.overflow[2]
                        }
                        ))),
                        n = !1,
                        r)
                            n || (s ? "hidden"in s && (q = s.hidden) : s = $.access(M, "fxshow", {
                                display: t
                            }),
                            o && (s.hidden = !q),
                            q && rM([M], !0),
                            d.done((function() {
                                for (p in q || rM([M]),
                                $.remove(M, "fxshow"),
                                r)
                                    R.style(M, p, r[p])
                            }
                            ))),
                            n = rb(q ? s[p] : 0, p, d),
                            p in s || (s[p] = n.start,
                            q && (n.end = n.start,
                            n.start = 0))
                }
                ],
                prefilter: function(M, b) {
                    b ? ib.prefilters.unshift(M) : ib.prefilters.push(M)
                }
            }),
            R.speed = function(M, b, z) {
                var p = M && "object" == typeof M ? R.extend({}, M) : {
                    complete: z || !z && b || u(M) && M,
                    duration: M,
                    easing: z && b || b && !u(b) && b
                };
                return R.fx.off ? p.duration = 0 : "number" != typeof p.duration && (p.duration in R.fx.speeds ? p.duration = R.fx.speeds[p.duration] : p.duration = R.fx.speeds._default),
                null != p.queue && !0 !== p.queue || (p.queue = "fx"),
                p.old = p.complete,
                p.complete = function() {
                    u(p.old) && p.old.call(this),
                    p.queue && R.dequeue(this, p.queue)
                }
                ,
                p
            }
            ,
            R.fn.extend({
                fadeTo: function(M, b, z, p) {
                    return this.filter(tM).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, M, z, p)
                },
                animate: function(M, b, z, p) {
                    var O = R.isEmptyObject(M)
                      , o = R.speed(b, z, p)
                      , e = function() {
                        var b = ib(this, R.extend({}, M), o);
                        (O || $.get(this, "finish")) && b.stop(!0)
                    };
                    return e.finish = e,
                    O || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
                },
                stop: function(M, b, z) {
                    var p = function(M) {
                        var b = M.stop;
                        delete M.stop,
                        b(z)
                    };
                    return "string" != typeof M && (z = b,
                    b = M,
                    M = void 0),
                    b && this.queue(M || "fx", []),
                    this.each((function() {
                        var b = !0
                          , O = null != M && M + "queueHooks"
                          , o = R.timers
                          , e = $.get(this);
                        if (O)
                            e[O] && e[O].stop && p(e[O]);
                        else
                            for (O in e)
                                e[O] && e[O].stop && tb.test(O) && p(e[O]);
                        for (O = o.length; O--; )
                            o[O].elem !== this || null != M && o[O].queue !== M || (o[O].anim.stop(z),
                            b = !1,
                            o.splice(O, 1));
                        !b && z || R.dequeue(this, M)
                    }
                    ))
                },
                finish: function(M) {
                    return !1 !== M && (M = M || "fx"),
                    this.each((function() {
                        var b, z = $.get(this), p = z[M + "queue"], O = z[M + "queueHooks"], o = R.timers, e = p ? p.length : 0;
                        for (z.finish = !0,
                        R.queue(this, M, []),
                        O && O.stop && O.stop.call(this, !0),
                        b = o.length; b--; )
                            o[b].elem === this && o[b].queue === M && (o[b].anim.stop(!0),
                            o.splice(b, 1));
                        for (b = 0; b < e; b++)
                            p[b] && p[b].finish && p[b].finish.call(this);
                        delete z.finish
                    }
                    ))
                }
            }),
            R.each(["toggle", "show", "hide"], (function(M, b) {
                var z = R.fn[b];
                R.fn[b] = function(M, p, O) {
                    return null == M || "boolean" == typeof M ? z.apply(this, arguments) : this.animate(db(b, !0), M, p, O)
                }
            }
            )),
            R.each({
                slideDown: db("show"),
                slideUp: db("hide"),
                slideToggle: db("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(M, b) {
                R.fn[M] = function(M, z, p) {
                    return this.animate(b, M, z, p)
                }
            }
            )),
            R.timers = [],
            R.fx.tick = function() {
                var M, b = 0, z = R.timers;
                for (eb = Date.now(); b < z.length; b++)
                    (M = z[b])() || z[b] !== M || z.splice(b--, 1);
                z.length || R.fx.stop(),
                eb = void 0
            }
            ,
            R.fx.timer = function(M) {
                R.timers.push(M),
                R.fx.start()
            }
            ,
            R.fx.interval = 13,
            R.fx.start = function() {
                cb || (cb = !0,
                ab())
            }
            ,
            R.fx.stop = function() {
                cb = null
            }
            ,
            R.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            R.fn.delay = function(M, b) {
                return M = R.fx && R.fx.speeds[M] || M,
                b = b || "fx",
                this.queue(b, (function(b, z) {
                    var O = p.setTimeout(b, M);
                    z.stop = function() {
                        p.clearTimeout(O)
                    }
                }
                ))
            }
            ,
            function() {
                var M = l.createElement("input")
                  , b = l.createElement("select").appendChild(l.createElement("option"));
                M.type = "checkbox",
                s.checkOn = "" !== M.value,
                s.optSelected = b.selected,
                (M = l.createElement("input")).value = "t",
                M.type = "radio",
                s.radioValue = "t" === M.value
            }();
            var qb, sb = R.expr.attrHandle;
            R.fn.extend({
                attr: function(M, b) {
                    return I(this, R.attr, M, b, arguments.length > 1)
                },
                removeAttr: function(M) {
                    return this.each((function() {
                        R.removeAttr(this, M)
                    }
                    ))
                }
            }),
            R.extend({
                attr: function(M, b, z) {
                    var p, O, o = M.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === M.getAttribute ? R.prop(M, b, z) : (1 === o && R.isXMLDoc(M) || (O = R.attrHooks[b.toLowerCase()] || (R.expr.match.bool.test(b) ? qb : void 0)),
                        void 0 !== z ? null === z ? void R.removeAttr(M, b) : O && "set"in O && void 0 !== (p = O.set(M, z, b)) ? p : (M.setAttribute(b, z + ""),
                        z) : O && "get"in O && null !== (p = O.get(M, b)) ? p : null == (p = R.find.attr(M, b)) ? void 0 : p)
                },
                attrHooks: {
                    type: {
                        set: function(M, b) {
                            if (!s.radioValue && "radio" === b && g(M, "input")) {
                                var z = M.value;
                                return M.setAttribute("type", b),
                                z && (M.value = z),
                                b
                            }
                        }
                    }
                },
                removeAttr: function(M, b) {
                    var z, p = 0, O = b && b.match(H);
                    if (O && 1 === M.nodeType)
                        for (; z = O[p++]; )
                            M.removeAttribute(z)
                }
            }),
            qb = {
                set: function(M, b, z) {
                    return !1 === b ? R.removeAttr(M, z) : M.setAttribute(z, z),
                    z
                }
            },
            R.each(R.expr.match.bool.source.match(/\w+/g), (function(M, b) {
                var z = sb[b] || R.find.attr;
                sb[b] = function(M, b, p) {
                    var O, o, e = b.toLowerCase();
                    return p || (o = sb[e],
                    sb[e] = O,
                    O = null != z(M, b, p) ? e : null,
                    sb[e] = o),
                    O
                }
            }
            ));
            var ub = /^(?:input|select|textarea|button)$/i
              , Wb = /^(?:a|area)$/i;
            function lb(M) {
                return (M.match(H) || []).join(" ")
            }
            function fb(M) {
                return M.getAttribute && M.getAttribute("class") || ""
            }
            function _b(M) {
                return Array.isArray(M) ? M : "string" == typeof M && M.match(H) || []
            }
            R.fn.extend({
                prop: function(M, b) {
                    return I(this, R.prop, M, b, arguments.length > 1)
                },
                removeProp: function(M) {
                    return this.each((function() {
                        delete this[R.propFix[M] || M]
                    }
                    ))
                }
            }),
            R.extend({
                prop: function(M, b, z) {
                    var p, O, o = M.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && R.isXMLDoc(M) || (b = R.propFix[b] || b,
                        O = R.propHooks[b]),
                        void 0 !== z ? O && "set"in O && void 0 !== (p = O.set(M, z, b)) ? p : M[b] = z : O && "get"in O && null !== (p = O.get(M, b)) ? p : M[b]
                },
                propHooks: {
                    tabIndex: {
                        get: function(M) {
                            var b = R.find.attr(M, "tabindex");
                            return b ? parseInt(b, 10) : ub.test(M.nodeName) || Wb.test(M.nodeName) && M.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            s.optSelected || (R.propHooks.selected = {
                get: function(M) {
                    var b = M.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex,
                    null
                },
                set: function(M) {
                    var b = M.parentNode;
                    b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex)
                }
            }),
            R.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                R.propFix[this.toLowerCase()] = this
            }
            )),
            R.fn.extend({
                addClass: function(M) {
                    var b, z, p, O, o, e;
                    return u(M) ? this.each((function(b) {
                        R(this).addClass(M.call(this, b, fb(this)))
                    }
                    )) : (b = _b(M)).length ? this.each((function() {
                        if (p = fb(this),
                        z = 1 === this.nodeType && " " + lb(p) + " ") {
                            for (o = 0; o < b.length; o++)
                                O = b[o],
                                z.indexOf(" " + O + " ") < 0 && (z += O + " ");
                            e = lb(z),
                            p !== e && this.setAttribute("class", e)
                        }
                    }
                    )) : this
                },
                removeClass: function(M) {
                    var b, z, p, O, o, e;
                    return u(M) ? this.each((function(b) {
                        R(this).removeClass(M.call(this, b, fb(this)))
                    }
                    )) : arguments.length ? (b = _b(M)).length ? this.each((function() {
                        if (p = fb(this),
                        z = 1 === this.nodeType && " " + lb(p) + " ") {
                            for (o = 0; o < b.length; o++)
                                for (O = b[o]; z.indexOf(" " + O + " ") > -1; )
                                    z = z.replace(" " + O + " ", " ");
                            e = lb(z),
                            p !== e && this.setAttribute("class", e)
                        }
                    }
                    )) : this : this.attr("class", "")
                },
                toggleClass: function(M, b) {
                    var z, p, O, o, e = typeof M, c = "string" === e || Array.isArray(M);
                    return u(M) ? this.each((function(z) {
                        R(this).toggleClass(M.call(this, z, fb(this), b), b)
                    }
                    )) : "boolean" == typeof b && c ? b ? this.addClass(M) : this.removeClass(M) : (z = _b(M),
                    this.each((function() {
                        if (c)
                            for (o = R(this),
                            O = 0; O < z.length; O++)
                                p = z[O],
                                o.hasClass(p) ? o.removeClass(p) : o.addClass(p);
                        else
                            void 0 !== M && "boolean" !== e || ((p = fb(this)) && $.set(this, "__className__", p),
                            this.setAttribute && this.setAttribute("class", p || !1 === M ? "" : $.get(this, "__className__") || ""))
                    }
                    )))
                },
                hasClass: function(M) {
                    var b, z, p = 0;
                    for (b = " " + M + " "; z = this[p++]; )
                        if (1 === z.nodeType && (" " + lb(fb(z)) + " ").indexOf(b) > -1)
                            return !0;
                    return !1
                }
            });
            var Lb = /\r/g;
            R.fn.extend({
                val: function(M) {
                    var b, z, p, O = this[0];
                    return arguments.length ? (p = u(M),
                    this.each((function(z) {
                        var O;
                        1 === this.nodeType && (null == (O = p ? M.call(this, z, R(this).val()) : M) ? O = "" : "number" == typeof O ? O += "" : Array.isArray(O) && (O = R.map(O, (function(M) {
                            return null == M ? "" : M + ""
                        }
                        ))),
                        (b = R.valHooks[this.type] || R.valHooks[this.nodeName.toLowerCase()]) && "set"in b && void 0 !== b.set(this, O, "value") || (this.value = O))
                    }
                    ))) : O ? (b = R.valHooks[O.type] || R.valHooks[O.nodeName.toLowerCase()]) && "get"in b && void 0 !== (z = b.get(O, "value")) ? z : "string" == typeof (z = O.value) ? z.replace(Lb, "") : null == z ? "" : z : void 0
                }
            }),
            R.extend({
                valHooks: {
                    option: {
                        get: function(M) {
                            var b = R.find.attr(M, "value");
                            return null != b ? b : lb(R.text(M))
                        }
                    },
                    select: {
                        get: function(M) {
                            var b, z, p, O = M.options, o = M.selectedIndex, e = "select-one" === M.type, c = e ? null : [], n = e ? o + 1 : O.length;
                            for (p = o < 0 ? n : e ? o : 0; p < n; p++)
                                if (((z = O[p]).selected || p === o) && !z.disabled && (!z.parentNode.disabled || !g(z.parentNode, "optgroup"))) {
                                    if (b = R(z).val(),
                                    e)
                                        return b;
                                    c.push(b)
                                }
                            return c
                        },
                        set: function(M, b) {
                            for (var z, p, O = M.options, o = R.makeArray(b), e = O.length; e--; )
                                ((p = O[e]).selected = R.inArray(R.valHooks.option.get(p), o) > -1) && (z = !0);
                            return z || (M.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            R.each(["radio", "checkbox"], (function() {
                R.valHooks[this] = {
                    set: function(M, b) {
                        if (Array.isArray(b))
                            return M.checked = R.inArray(R(M).val(), b) > -1
                    }
                },
                s.checkOn || (R.valHooks[this].get = function(M) {
                    return null === M.getAttribute("value") ? "on" : M.value
                }
                )
            }
            )),
            s.focusin = "onfocusin"in p;
            var mb = /^(?:focusinfocus|focusoutblur)$/
              , Rb = function(M) {
                M.stopPropagation()
            };
            R.extend(R.event, {
                trigger: function(M, b, z, O) {
                    var o, e, c, n, t, a, A, d, i = [z || l], q = r.call(M, "type") ? M.type : M, s = r.call(M, "namespace") ? M.namespace.split(".") : [];
                    if (e = d = c = z = z || l,
                    3 !== z.nodeType && 8 !== z.nodeType && !mb.test(q + R.event.triggered) && (q.indexOf(".") > -1 && (s = q.split("."),
                    q = s.shift(),
                    s.sort()),
                    t = q.indexOf(":") < 0 && "on" + q,
                    (M = M[R.expando] ? M : new R.Event(q,"object" == typeof M && M)).isTrigger = O ? 2 : 3,
                    M.namespace = s.join("."),
                    M.rnamespace = M.namespace ? new RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    M.result = void 0,
                    M.target || (M.target = z),
                    b = null == b ? [M] : R.makeArray(b, [M]),
                    A = R.event.special[q] || {},
                    O || !A.trigger || !1 !== A.trigger.apply(z, b))) {
                        if (!O && !A.noBubble && !W(z)) {
                            for (n = A.delegateType || q,
                            mb.test(n + q) || (e = e.parentNode); e; e = e.parentNode)
                                i.push(e),
                                c = e;
                            c === (z.ownerDocument || l) && i.push(c.defaultView || c.parentWindow || p)
                        }
                        for (o = 0; (e = i[o++]) && !M.isPropagationStopped(); )
                            d = e,
                            M.type = o > 1 ? n : A.bindType || q,
                            (a = ($.get(e, "events") || Object.create(null))[M.type] && $.get(e, "handle")) && a.apply(e, b),
                            (a = t && e[t]) && a.apply && V(e) && (M.result = a.apply(e, b),
                            !1 === M.result && M.preventDefault());
                        return M.type = q,
                        O || M.isDefaultPrevented() || A._default && !1 !== A._default.apply(i.pop(), b) || !V(z) || t && u(z[q]) && !W(z) && ((c = z[t]) && (z[t] = null),
                        R.event.triggered = q,
                        M.isPropagationStopped() && d.addEventListener(q, Rb),
                        z[q](),
                        M.isPropagationStopped() && d.removeEventListener(q, Rb),
                        R.event.triggered = void 0,
                        c && (z[t] = c)),
                        M.result
                    }
                },
                simulate: function(M, b, z) {
                    var p = R.extend(new R.Event, z, {
                        type: M,
                        isSimulated: !0
                    });
                    R.event.trigger(p, null, b)
                }
            }),
            R.fn.extend({
                trigger: function(M, b) {
                    return this.each((function() {
                        R.event.trigger(M, b, this)
                    }
                    ))
                },
                triggerHandler: function(M, b) {
                    var z = this[0];
                    if (z)
                        return R.event.trigger(M, b, z, !0)
                }
            }),
            s.focusin || R.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(M, b) {
                var z = function(M) {
                    R.event.simulate(b, M.target, R.event.fix(M))
                };
                R.event.special[b] = {
                    setup: function() {
                        var p = this.ownerDocument || this.document || this
                          , O = $.access(p, b);
                        O || p.addEventListener(M, z, !0),
                        $.access(p, b, (O || 0) + 1)
                    },
                    teardown: function() {
                        var p = this.ownerDocument || this.document || this
                          , O = $.access(p, b) - 1;
                        O ? $.access(p, b, O) : (p.removeEventListener(M, z, !0),
                        $.remove(p, b))
                    }
                }
            }
            ));
            var hb = p.location
              , yb = {
                guid: Date.now()
            }
              , Nb = /\?/;
            R.parseXML = function(M) {
                var b, z;
                if (!M || "string" != typeof M)
                    return null;
                try {
                    b = (new p.DOMParser).parseFromString(M, "text/xml")
                } catch (M) {}
                return z = b && b.getElementsByTagName("parsererror")[0],
                b && !z || R.error("Invalid XML: " + (z ? R.map(z.childNodes, (function(M) {
                    return M.textContent
                }
                )).join("\n") : M)),
                b
            }
            ;
            var Bb = /\[\]$/
              , Tb = /\r?\n/g
              , gb = /^(?:submit|button|image|reset|file)$/i
              , Xb = /^(?:input|select|textarea|keygen)/i;
            function Yb(M, b, z, p) {
                var O;
                if (Array.isArray(b))
                    R.each(b, (function(b, O) {
                        z || Bb.test(M) ? p(M, O) : Yb(M + "[" + ("object" == typeof O && null != O ? b : "") + "]", O, z, p)
                    }
                    ));
                else if (z || "object" !== L(b))
                    p(M, b);
                else
                    for (O in b)
                        Yb(M + "[" + O + "]", b[O], z, p)
            }
            R.param = function(M, b) {
                var z, p = [], O = function(M, b) {
                    var z = u(b) ? b() : b;
                    p[p.length] = encodeURIComponent(M) + "=" + encodeURIComponent(null == z ? "" : z)
                };
                if (null == M)
                    return "";
                if (Array.isArray(M) || M.jquery && !R.isPlainObject(M))
                    R.each(M, (function() {
                        O(this.name, this.value)
                    }
                    ));
                else
                    for (z in M)
                        Yb(z, M[z], b, O);
                return p.join("&")
            }
            ,
            R.fn.extend({
                serialize: function() {
                    return R.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var M = R.prop(this, "elements");
                        return M ? R.makeArray(M) : this
                    }
                    )).filter((function() {
                        var M = this.type;
                        return this.name && !R(this).is(":disabled") && Xb.test(this.nodeName) && !gb.test(M) && (this.checked || !sM.test(M))
                    }
                    )).map((function(M, b) {
                        var z = R(this).val();
                        return null == z ? null : Array.isArray(z) ? R.map(z, (function(M) {
                            return {
                                name: b.name,
                                value: M.replace(Tb, "\r\n")
                            }
                        }
                        )) : {
                            name: b.name,
                            value: z.replace(Tb, "\r\n")
                        }
                    }
                    )).get()
                }
            });
            var vb = /%20/g
              , kb = /#.*$/
              , Db = /([?&])_=[^&]*/
              , wb = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , Sb = /^(?:GET|HEAD)$/
              , Hb = /^\/\//
              , Eb = {}
              , xb = {}
              , jb = "*/".concat("*")
              , Pb = l.createElement("a");
            function Cb(M) {
                return function(b, z) {
                    "string" != typeof b && (z = b,
                    b = "*");
                    var p, O = 0, o = b.toLowerCase().match(H) || [];
                    if (u(z))
                        for (; p = o[O++]; )
                            "+" === p[0] ? (p = p.slice(1) || "*",
                            (M[p] = M[p] || []).unshift(z)) : (M[p] = M[p] || []).push(z)
                }
            }
            function Fb(M, b, z, p) {
                var O = {}
                  , o = M === xb;
                function e(c) {
                    var n;
                    return O[c] = !0,
                    R.each(M[c] || [], (function(M, c) {
                        var t = c(b, z, p);
                        return "string" != typeof t || o || O[t] ? o ? !(n = t) : void 0 : (b.dataTypes.unshift(t),
                        e(t),
                        !1)
                    }
                    )),
                    n
                }
                return e(b.dataTypes[0]) || !O["*"] && e("*")
            }
            function Ib(M, b) {
                var z, p, O = R.ajaxSettings.flatOptions || {};
                for (z in b)
                    void 0 !== b[z] && ((O[z] ? M : p || (p = {}))[z] = b[z]);
                return p && R.extend(!0, M, p),
                M
            }
            Pb.href = hb.href,
            R.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: hb.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(hb.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": jb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": R.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(M, b) {
                    return b ? Ib(Ib(M, R.ajaxSettings), b) : Ib(R.ajaxSettings, M)
                },
                ajaxPrefilter: Cb(Eb),
                ajaxTransport: Cb(xb),
                ajax: function(M, b) {
                    "object" == typeof M && (b = M,
                    M = void 0),
                    b = b || {};
                    var z, O, o, e, c, n, t, a, A, d, r = R.ajaxSetup({}, b), i = r.context || r, q = r.context && (i.nodeType || i.jquery) ? R(i) : R.event, s = R.Deferred(), u = R.Callbacks("once memory"), W = r.statusCode || {}, f = {}, _ = {}, L = "canceled", m = {
                        readyState: 0,
                        getResponseHeader: function(M) {
                            var b;
                            if (t) {
                                if (!e)
                                    for (e = {}; b = wb.exec(o); )
                                        e[b[1].toLowerCase() + " "] = (e[b[1].toLowerCase() + " "] || []).concat(b[2]);
                                b = e[M.toLowerCase() + " "]
                            }
                            return null == b ? null : b.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return t ? o : null
                        },
                        setRequestHeader: function(M, b) {
                            return null == t && (M = _[M.toLowerCase()] = _[M.toLowerCase()] || M,
                            f[M] = b),
                            this
                        },
                        overrideMimeType: function(M) {
                            return null == t && (r.mimeType = M),
                            this
                        },
                        statusCode: function(M) {
                            var b;
                            if (M)
                                if (t)
                                    m.always(M[m.status]);
                                else
                                    for (b in M)
                                        W[b] = [W[b], M[b]];
                            return this
                        },
                        abort: function(M) {
                            var b = M || L;
                            return z && z.abort(b),
                            h(0, b),
                            this
                        }
                    };
                    if (s.promise(m),
                    r.url = ((M || r.url || hb.href) + "").replace(Hb, hb.protocol + "//"),
                    r.type = b.method || b.type || r.method || r.type,
                    r.dataTypes = (r.dataType || "*").toLowerCase().match(H) || [""],
                    null == r.crossDomain) {
                        n = l.createElement("a");
                        try {
                            n.href = r.url,
                            n.href = n.href,
                            r.crossDomain = Pb.protocol + "//" + Pb.host != n.protocol + "//" + n.host
                        } catch (M) {
                            r.crossDomain = !0
                        }
                    }
                    if (r.data && r.processData && "string" != typeof r.data && (r.data = R.param(r.data, r.traditional)),
                    Fb(Eb, r, b, m),
                    t)
                        return m;
                    for (A in (a = R.event && r.global) && 0 == R.active++ && R.event.trigger("ajaxStart"),
                    r.type = r.type.toUpperCase(),
                    r.hasContent = !Sb.test(r.type),
                    O = r.url.replace(kb, ""),
                    r.hasContent ? r.data && r.processData && 0 === (r.contentType || "").indexOf("application/x-www-form-urlencoded") && (r.data = r.data.replace(vb, "+")) : (d = r.url.slice(O.length),
                    r.data && (r.processData || "string" == typeof r.data) && (O += (Nb.test(O) ? "&" : "?") + r.data,
                    delete r.data),
                    !1 === r.cache && (O = O.replace(Db, "$1"),
                    d = (Nb.test(O) ? "&" : "?") + "_=" + yb.guid++ + d),
                    r.url = O + d),
                    r.ifModified && (R.lastModified[O] && m.setRequestHeader("If-Modified-Since", R.lastModified[O]),
                    R.etag[O] && m.setRequestHeader("If-None-Match", R.etag[O])),
                    (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && m.setRequestHeader("Content-Type", r.contentType),
                    m.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + jb + "; q=0.01" : "") : r.accepts["*"]),
                    r.headers)
                        m.setRequestHeader(A, r.headers[A]);
                    if (r.beforeSend && (!1 === r.beforeSend.call(i, m, r) || t))
                        return m.abort();
                    if (L = "abort",
                    u.add(r.complete),
                    m.done(r.success),
                    m.fail(r.error),
                    z = Fb(xb, r, b, m)) {
                        if (m.readyState = 1,
                        a && q.trigger("ajaxSend", [m, r]),
                        t)
                            return m;
                        r.async && r.timeout > 0 && (c = p.setTimeout((function() {
                            m.abort("timeout")
                        }
                        ), r.timeout));
                        try {
                            t = !1,
                            z.send(f, h)
                        } catch (M) {
                            if (t)
                                throw M;
                            h(-1, M)
                        }
                    } else
                        h(-1, "No Transport");
                    function h(M, b, e, n) {
                        var A, d, l, f, _, L = b;
                        t || (t = !0,
                        c && p.clearTimeout(c),
                        z = void 0,
                        o = n || "",
                        m.readyState = M > 0 ? 4 : 0,
                        A = M >= 200 && M < 300 || 304 === M,
                        e && (f = function(M, b, z) {
                            for (var p, O, o, e, c = M.contents, n = M.dataTypes; "*" === n[0]; )
                                n.shift(),
                                void 0 === p && (p = M.mimeType || b.getResponseHeader("Content-Type"));
                            if (p)
                                for (O in c)
                                    if (c[O] && c[O].test(p)) {
                                        n.unshift(O);
                                        break
                                    }
                            if (n[0]in z)
                                o = n[0];
                            else {
                                for (O in z) {
                                    if (!n[0] || M.converters[O + " " + n[0]]) {
                                        o = O;
                                        break
                                    }
                                    e || (e = O)
                                }
                                o = o || e
                            }
                            if (o)
                                return o !== n[0] && n.unshift(o),
                                z[o]
                        }(r, m, e)),
                        !A && R.inArray("script", r.dataTypes) > -1 && R.inArray("json", r.dataTypes) < 0 && (r.converters["text script"] = function() {}
                        ),
                        f = function(M, b, z, p) {
                            var O, o, e, c, n, t = {}, a = M.dataTypes.slice();
                            if (a[1])
                                for (e in M.converters)
                                    t[e.toLowerCase()] = M.converters[e];
                            for (o = a.shift(); o; )
                                if (M.responseFields[o] && (z[M.responseFields[o]] = b),
                                !n && p && M.dataFilter && (b = M.dataFilter(b, M.dataType)),
                                n = o,
                                o = a.shift())
                                    if ("*" === o)
                                        o = n;
                                    else if ("*" !== n && n !== o) {
                                        if (!(e = t[n + " " + o] || t["* " + o]))
                                            for (O in t)
                                                if ((c = O.split(" "))[1] === o && (e = t[n + " " + c[0]] || t["* " + c[0]])) {
                                                    !0 === e ? e = t[O] : !0 !== t[O] && (o = c[0],
                                                    a.unshift(c[1]));
                                                    break
                                                }
                                        if (!0 !== e)
                                            if (e && M.throws)
                                                b = e(b);
                                            else
                                                try {
                                                    b = e(b)
                                                } catch (M) {
                                                    return {
                                                        state: "parsererror",
                                                        error: e ? M : "No conversion from " + n + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: b
                            }
                        }(r, f, m, A),
                        A ? (r.ifModified && ((_ = m.getResponseHeader("Last-Modified")) && (R.lastModified[O] = _),
                        (_ = m.getResponseHeader("etag")) && (R.etag[O] = _)),
                        204 === M || "HEAD" === r.type ? L = "nocontent" : 304 === M ? L = "notmodified" : (L = f.state,
                        d = f.data,
                        A = !(l = f.error))) : (l = L,
                        !M && L || (L = "error",
                        M < 0 && (M = 0))),
                        m.status = M,
                        m.statusText = (b || L) + "",
                        A ? s.resolveWith(i, [d, L, m]) : s.rejectWith(i, [m, L, l]),
                        m.statusCode(W),
                        W = void 0,
                        a && q.trigger(A ? "ajaxSuccess" : "ajaxError", [m, r, A ? d : l]),
                        u.fireWith(i, [m, L]),
                        a && (q.trigger("ajaxComplete", [m, r]),
                        --R.active || R.event.trigger("ajaxStop")))
                    }
                    return m
                },
                getJSON: function(M, b, z) {
                    return R.get(M, b, z, "json")
                },
                getScript: function(M, b) {
                    return R.get(M, void 0, b, "script")
                }
            }),
            R.each(["get", "post"], (function(M, b) {
                R[b] = function(M, z, p, O) {
                    return u(z) && (O = O || p,
                    p = z,
                    z = void 0),
                    R.ajax(R.extend({
                        url: M,
                        type: b,
                        dataType: O,
                        data: z,
                        success: p
                    }, R.isPlainObject(M) && M))
                }
            }
            )),
            R.ajaxPrefilter((function(M) {
                var b;
                for (b in M.headers)
                    "content-type" === b.toLowerCase() && (M.contentType = M.headers[b] || "")
            }
            )),
            R._evalUrl = function(M, b, z) {
                return R.ajax({
                    url: M,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(M) {
                        R.globalEval(M, b, z)
                    }
                })
            }
            ,
            R.fn.extend({
                wrapAll: function(M) {
                    var b;
                    return this[0] && (u(M) && (M = M.call(this[0])),
                    b = R(M, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map((function() {
                        for (var M = this; M.firstElementChild; )
                            M = M.firstElementChild;
                        return M
                    }
                    )).append(this)),
                    this
                },
                wrapInner: function(M) {
                    return u(M) ? this.each((function(b) {
                        R(this).wrapInner(M.call(this, b))
                    }
                    )) : this.each((function() {
                        var b = R(this)
                          , z = b.contents();
                        z.length ? z.wrapAll(M) : b.append(M)
                    }
                    ))
                },
                wrap: function(M) {
                    var b = u(M);
                    return this.each((function(z) {
                        R(this).wrapAll(b ? M.call(this, z) : M)
                    }
                    ))
                },
                unwrap: function(M) {
                    return this.parent(M).not("body").each((function() {
                        R(this).replaceWith(this.childNodes)
                    }
                    )),
                    this
                }
            }),
            R.expr.pseudos.hidden = function(M) {
                return !R.expr.pseudos.visible(M)
            }
            ,
            R.expr.pseudos.visible = function(M) {
                return !!(M.offsetWidth || M.offsetHeight || M.getClientRects().length)
            }
            ,
            R.ajaxSettings.xhr = function() {
                try {
                    return new p.XMLHttpRequest
                } catch (M) {}
            }
            ;
            var Ub = {
                0: 200,
                1223: 204
            }
              , Gb = R.ajaxSettings.xhr();
            s.cors = !!Gb && "withCredentials"in Gb,
            s.ajax = Gb = !!Gb,
            R.ajaxTransport((function(M) {
                var b, z;
                if (s.cors || Gb && !M.crossDomain)
                    return {
                        send: function(O, o) {
                            var e, c = M.xhr();
                            if (c.open(M.type, M.url, M.async, M.username, M.password),
                            M.xhrFields)
                                for (e in M.xhrFields)
                                    c[e] = M.xhrFields[e];
                            for (e in M.mimeType && c.overrideMimeType && c.overrideMimeType(M.mimeType),
                            M.crossDomain || O["X-Requested-With"] || (O["X-Requested-With"] = "XMLHttpRequest"),
                            O)
                                c.setRequestHeader(e, O[e]);
                            b = function(M) {
                                return function() {
                                    b && (b = z = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null,
                                    "abort" === M ? c.abort() : "error" === M ? "number" != typeof c.status ? o(0, "error") : o(c.status, c.statusText) : o(Ub[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? {
                                        binary: c.response
                                    } : {
                                        text: c.responseText
                                    }, c.getAllResponseHeaders()))
                                }
                            }
                            ,
                            c.onload = b(),
                            z = c.onerror = c.ontimeout = b("error"),
                            void 0 !== c.onabort ? c.onabort = z : c.onreadystatechange = function() {
                                4 === c.readyState && p.setTimeout((function() {
                                    b && z()
                                }
                                ))
                            }
                            ,
                            b = b("abort");
                            try {
                                c.send(M.hasContent && M.data || null)
                            } catch (M) {
                                if (b)
                                    throw M
                            }
                        },
                        abort: function() {
                            b && b()
                        }
                    }
            }
            )),
            R.ajaxPrefilter((function(M) {
                M.crossDomain && (M.contents.script = !1)
            }
            )),
            R.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(M) {
                        return R.globalEval(M),
                        M
                    }
                }
            }),
            R.ajaxPrefilter("script", (function(M) {
                void 0 === M.cache && (M.cache = !1),
                M.crossDomain && (M.type = "GET")
            }
            )),
            R.ajaxTransport("script", (function(M) {
                var b, z;
                if (M.crossDomain || M.scriptAttrs)
                    return {
                        send: function(p, O) {
                            b = R("<script>").attr(M.scriptAttrs || {}).prop({
                                charset: M.scriptCharset,
                                src: M.url
                            }).on("load error", z = function(M) {
                                b.remove(),
                                z = null,
                                M && O("error" === M.type ? 404 : 200, M.type)
                            }
                            ),
                            l.head.appendChild(b[0])
                        },
                        abort: function() {
                            z && z()
                        }
                    }
            }
            ));
            var Jb, Kb = [], Vb = /(=)\?(?=&|$)|\?\?/;
            R.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var M = Kb.pop() || R.expando + "_" + yb.guid++;
                    return this[M] = !0,
                    M
                }
            }),
            R.ajaxPrefilter("json jsonp", (function(M, b, z) {
                var O, o, e, c = !1 !== M.jsonp && (Vb.test(M.url) ? "url" : "string" == typeof M.data && 0 === (M.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(M.data) && "data");
                if (c || "jsonp" === M.dataTypes[0])
                    return O = M.jsonpCallback = u(M.jsonpCallback) ? M.jsonpCallback() : M.jsonpCallback,
                    c ? M[c] = M[c].replace(Vb, "$1" + O) : !1 !== M.jsonp && (M.url += (Nb.test(M.url) ? "&" : "?") + M.jsonp + "=" + O),
                    M.converters["script json"] = function() {
                        return e || R.error(O + " was not called"),
                        e[0]
                    }
                    ,
                    M.dataTypes[0] = "json",
                    o = p[O],
                    p[O] = function() {
                        e = arguments
                    }
                    ,
                    z.always((function() {
                        void 0 === o ? R(p).removeProp(O) : p[O] = o,
                        M[O] && (M.jsonpCallback = b.jsonpCallback,
                        Kb.push(O)),
                        e && u(o) && o(e[0]),
                        e = o = void 0
                    }
                    )),
                    "script"
            }
            )),
            s.createHTMLDocument = ((Jb = l.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Jb.childNodes.length),
            R.parseHTML = function(M, b, z) {
                return "string" != typeof M ? [] : ("boolean" == typeof b && (z = b,
                b = !1),
                b || (s.createHTMLDocument ? ((p = (b = l.implementation.createHTMLDocument("")).createElement("base")).href = l.location.href,
                b.head.appendChild(p)) : b = l),
                o = !z && [],
                (O = X.exec(M)) ? [b.createElement(O[1])] : (O = mM([M], b, o),
                o && o.length && R(o).remove(),
                R.merge([], O.childNodes)));
                var p, O, o
            }
            ,
            R.fn.load = function(M, b, z) {
                var p, O, o, e = this, c = M.indexOf(" ");
                return c > -1 && (p = lb(M.slice(c)),
                M = M.slice(0, c)),
                u(b) ? (z = b,
                b = void 0) : b && "object" == typeof b && (O = "POST"),
                e.length > 0 && R.ajax({
                    url: M,
                    type: O || "GET",
                    dataType: "html",
                    data: b
                }).done((function(M) {
                    o = arguments,
                    e.html(p ? R("<div>").append(R.parseHTML(M)).find(p) : M)
                }
                )).always(z && function(M, b) {
                    e.each((function() {
                        z.apply(this, o || [M.responseText, b, M])
                    }
                    ))
                }
                ),
                this
            }
            ,
            R.expr.pseudos.animated = function(M) {
                return R.grep(R.timers, (function(b) {
                    return M === b.elem
                }
                )).length
            }
            ,
            R.offset = {
                setOffset: function(M, b, z) {
                    var p, O, o, e, c, n, t = R.css(M, "position"), a = R(M), A = {};
                    "static" === t && (M.style.position = "relative"),
                    c = a.offset(),
                    o = R.css(M, "top"),
                    n = R.css(M, "left"),
                    ("absolute" === t || "fixed" === t) && (o + n).indexOf("auto") > -1 ? (e = (p = a.position()).top,
                    O = p.left) : (e = parseFloat(o) || 0,
                    O = parseFloat(n) || 0),
                    u(b) && (b = b.call(M, z, R.extend({}, c))),
                    null != b.top && (A.top = b.top - c.top + e),
                    null != b.left && (A.left = b.left - c.left + O),
                    "using"in b ? b.using.call(M, A) : a.css(A)
                }
            },
            R.fn.extend({
                offset: function(M) {
                    if (arguments.length)
                        return void 0 === M ? this : this.each((function(b) {
                            R.offset.setOffset(this, M, b)
                        }
                        ));
                    var b, z, p = this[0];
                    return p ? p.getClientRects().length ? (b = p.getBoundingClientRect(),
                    z = p.ownerDocument.defaultView,
                    {
                        top: b.top + z.pageYOffset,
                        left: b.left + z.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var M, b, z, p = this[0], O = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === R.css(p, "position"))
                            b = p.getBoundingClientRect();
                        else {
                            for (b = this.offset(),
                            z = p.ownerDocument,
                            M = p.offsetParent || z.documentElement; M && (M === z.body || M === z.documentElement) && "static" === R.css(M, "position"); )
                                M = M.parentNode;
                            M && M !== p && 1 === M.nodeType && ((O = R(M).offset()).top += R.css(M, "borderTopWidth", !0),
                            O.left += R.css(M, "borderLeftWidth", !0))
                        }
                        return {
                            top: b.top - O.top - R.css(p, "marginTop", !0),
                            left: b.left - O.left - R.css(p, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var M = this.offsetParent; M && "static" === R.css(M, "position"); )
                            M = M.offsetParent;
                        return M || eM
                    }
                    ))
                }
            }),
            R.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(M, b) {
                var z = "pageYOffset" === b;
                R.fn[M] = function(p) {
                    return I(this, (function(M, p, O) {
                        var o;
                        if (W(M) ? o = M : 9 === M.nodeType && (o = M.defaultView),
                        void 0 === O)
                            return o ? o[b] : M[p];
                        o ? o.scrollTo(z ? o.pageXOffset : O, z ? O : o.pageYOffset) : M[p] = O
                    }
                    ), M, p, arguments.length)
                }
            }
            )),
            R.each(["top", "left"], (function(M, b) {
                R.cssHooks[b] = JM(s.pixelPosition, (function(M, z) {
                    if (z)
                        return z = GM(M, b),
                        xM.test(z) ? R(M).position()[b] + "px" : z
                }
                ))
            }
            )),
            R.each({
                Height: "height",
                Width: "width"
            }, (function(M, b) {
                R.each({
                    padding: "inner" + M,
                    content: b,
                    "": "outer" + M
                }, (function(z, p) {
                    R.fn[p] = function(O, o) {
                        var e = arguments.length && (z || "boolean" != typeof O)
                          , c = z || (!0 === O || !0 === o ? "margin" : "border");
                        return I(this, (function(b, z, O) {
                            var o;
                            return W(b) ? 0 === p.indexOf("outer") ? b["inner" + M] : b.document.documentElement["client" + M] : 9 === b.nodeType ? (o = b.documentElement,
                            Math.max(b.body["scroll" + M], o["scroll" + M], b.body["offset" + M], o["offset" + M], o["client" + M])) : void 0 === O ? R.css(b, z, c) : R.style(b, z, O, c)
                        }
                        ), b, e ? O : void 0, e)
                    }
                }
                ))
            }
            )),
            R.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(M, b) {
                R.fn[b] = function(M) {
                    return this.on(b, M)
                }
            }
            )),
            R.fn.extend({
                bind: function(M, b, z) {
                    return this.on(M, null, b, z)
                },
                unbind: function(M, b) {
                    return this.off(M, null, b)
                },
                delegate: function(M, b, z, p) {
                    return this.on(b, M, z, p)
                },
                undelegate: function(M, b, z) {
                    return 1 === arguments.length ? this.off(M, "**") : this.off(b, M || "**", z)
                },
                hover: function(M, b) {
                    return this.mouseenter(M).mouseleave(b || M)
                }
            }),
            R.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(M, b) {
                R.fn[b] = function(M, z) {
                    return arguments.length > 0 ? this.on(b, null, M, z) : this.trigger(b)
                }
            }
            ));
            var Qb = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            R.proxy = function(M, b) {
                var z, p, O;
                if ("string" == typeof b && (z = M[b],
                b = M,
                M = z),
                u(M))
                    return p = c.call(arguments, 2),
                    O = function() {
                        return M.apply(b || this, p.concat(c.call(arguments)))
                    }
                    ,
                    O.guid = M.guid = M.guid || R.guid++,
                    O
            }
            ,
            R.holdReady = function(M) {
                M ? R.readyWait++ : R.ready(!0)
            }
            ,
            R.isArray = Array.isArray,
            R.parseJSON = JSON.parse,
            R.nodeName = g,
            R.isFunction = u,
            R.isWindow = W,
            R.camelCase = K,
            R.type = L,
            R.now = Date.now,
            R.isNumeric = function(M) {
                var b = R.type(M);
                return ("number" === b || "string" === b) && !isNaN(M - parseFloat(M))
            }
            ,
            R.trim = function(M) {
                return null == M ? "" : (M + "").replace(Qb, "$1")
            }
            ,
            void 0 === (z = function() {
                return R
            }
            .apply(b, [])) || (M.exports = z);
            var $b = p.jQuery
              , Zb = p.$;
            return R.noConflict = function(M) {
                return p.$ === R && (p.$ = Zb),
                M && p.jQuery === R && (p.jQuery = $b),
                R
            }
            ,
            void 0 === O && (p.jQuery = p.$ = R),
            R
        }
        ))
    },
    47812: (M, b, z) => {
        (M.exports = z(32828)).tz.load(z(91128))
    }
    ,
    32828: function(M, b, z) {
        var p, O, o;
        !function(e, c) {
            "use strict";
            M.exports ? M.exports = c(z(36105)) : (O = [z(36105)],
            void 0 === (o = "function" == typeof (p = c) ? p.apply(b, O) : p) || (M.exports = o))
        }(0, (function(M) {
            "use strict";
            void 0 === M.version && M.default && (M = M.default);
            var b, z = {}, p = {}, O = {}, o = {}, e = {};
            M && "string" == typeof M.version || T("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
            var c = M.version.split(".")
              , n = +c[0]
              , t = +c[1];
            function a(M) {
                return M > 96 ? M - 87 : M > 64 ? M - 29 : M - 48
            }
            function A(M) {
                var b = 0
                  , z = M.split(".")
                  , p = z[0]
                  , O = z[1] || ""
                  , o = 1
                  , e = 0
                  , c = 1;
                for (45 === M.charCodeAt(0) && (b = 1,
                c = -1); b < p.length; b++)
                    e = 60 * e + a(p.charCodeAt(b));
                for (b = 0; b < O.length; b++)
                    o /= 60,
                    e += a(O.charCodeAt(b)) * o;
                return e * c
            }
            function d(M) {
                for (var b = 0; b < M.length; b++)
                    M[b] = A(M[b])
            }
            function r(M, b) {
                var z, p = [];
                for (z = 0; z < b.length; z++)
                    p[z] = M[b[z]];
                return p
            }
            function i(M) {
                var b = M.split("|")
                  , z = b[2].split(" ")
                  , p = b[3].split("")
                  , O = b[4].split(" ");
                return d(z),
                d(p),
                d(O),
                function(M, b) {
                    for (var z = 0; z < b; z++)
                        M[z] = Math.round((M[z - 1] || 0) + 6e4 * M[z]);
                    M[b - 1] = 1 / 0
                }(O, p.length),
                {
                    name: b[0],
                    abbrs: r(b[1].split(" "), p),
                    offsets: r(z, p),
                    untils: O,
                    population: 0 | b[5]
                }
            }
            function q(M) {
                M && this._set(i(M))
            }
            function s(M, b) {
                this.name = M,
                this.zones = b
            }
            function u(M) {
                var b = M.toTimeString()
                  , z = b.match(/\([a-z ]+\)/i);
                "GMT" === (z = z && z[0] ? (z = z[0].match(/[A-Z]/g)) ? z.join("") : void 0 : (z = b.match(/[A-Z]{3,5}/g)) ? z[0] : void 0) && (z = void 0),
                this.at = +M,
                this.abbr = z,
                this.offset = M.getTimezoneOffset()
            }
            function W(M) {
                this.zone = M,
                this.offsetScore = 0,
                this.abbrScore = 0
            }
            function l(M, b) {
                for (var z, p; p = 6e4 * ((b.at - M.at) / 12e4 | 0); )
                    (z = new u(new Date(M.at + p))).offset === M.offset ? M = z : b = z;
                return M
            }
            function f(M, b) {
                return M.offsetScore !== b.offsetScore ? M.offsetScore - b.offsetScore : M.abbrScore !== b.abbrScore ? M.abbrScore - b.abbrScore : M.zone.population !== b.zone.population ? b.zone.population - M.zone.population : b.zone.name.localeCompare(M.zone.name)
            }
            function _(M, b) {
                var z, p;
                for (d(b),
                z = 0; z < b.length; z++)
                    p = b[z],
                    e[p] = e[p] || {},
                    e[p][M] = !0
            }
            function L(M) {
                var b, z, p, O = M.length, c = {}, n = [];
                for (b = 0; b < O; b++)
                    for (z in p = e[M[b].offset] || {})
                        p.hasOwnProperty(z) && (c[z] = !0);
                for (b in c)
                    c.hasOwnProperty(b) && n.push(o[b]);
                return n
            }
            function m() {
                try {
                    var M = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (M && M.length > 3) {
                        var b = o[R(M)];
                        if (b)
                            return b;
                        T("Moment Timezone found " + M + " from the Intl api, but did not have that data loaded.")
                    }
                } catch (M) {}
                var z, p, O, e = function() {
                    var M, b, z, p = (new Date).getFullYear() - 2, O = new u(new Date(p,0,1)), o = [O];
                    for (z = 1; z < 48; z++)
                        (b = new u(new Date(p,z,1))).offset !== O.offset && (M = l(O, b),
                        o.push(M),
                        o.push(new u(new Date(M.at + 6e4)))),
                        O = b;
                    for (z = 0; z < 4; z++)
                        o.push(new u(new Date(p + z,0,1))),
                        o.push(new u(new Date(p + z,6,1)));
                    return o
                }(), c = e.length, n = L(e), t = [];
                for (p = 0; p < n.length; p++) {
                    for (z = new W(y(n[p]),c),
                    O = 0; O < c; O++)
                        z.scoreOffsetAt(e[O]);
                    t.push(z)
                }
                return t.sort(f),
                t.length > 0 ? t[0].zone.name : void 0
            }
            function R(M) {
                return (M || "").toLowerCase().replace(/\//g, "_")
            }
            function h(M) {
                var b, p, O, e;
                for ("string" == typeof M && (M = [M]),
                b = 0; b < M.length; b++)
                    e = R(p = (O = M[b].split("|"))[0]),
                    z[e] = M[b],
                    o[e] = p,
                    _(e, O[2].split(" "))
            }
            function y(M, b) {
                M = R(M);
                var O, e = z[M];
                return e instanceof q ? e : "string" == typeof e ? (e = new q(e),
                z[M] = e,
                e) : p[M] && b !== y && (O = y(p[M], y)) ? ((e = z[M] = new q)._set(O),
                e.name = o[M],
                e) : null
            }
            function N(M) {
                var b, z, O, e;
                for ("string" == typeof M && (M = [M]),
                b = 0; b < M.length; b++)
                    O = R((z = M[b].split("|"))[0]),
                    e = R(z[1]),
                    p[O] = e,
                    o[O] = z[0],
                    p[e] = O,
                    o[e] = z[1]
            }
            function B(M) {
                var b = "X" === M._f || "x" === M._f;
                return !(!M._a || void 0 !== M._tzm || b)
            }
            function T(M) {
                "undefined" != typeof console && console.error
            }
            function g(b) {
                var z = Array.prototype.slice.call(arguments, 0, -1)
                  , p = arguments[arguments.length - 1]
                  , O = y(p)
                  , o = M.utc.apply(null, z);
                return O && !M.isMoment(b) && B(o) && o.add(O.parse(o), "minutes"),
                o.tz(p),
                o
            }
            (n < 2 || 2 === n && t < 6) && T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + M.version + ". See momentjs.com"),
            q.prototype = {
                _set: function(M) {
                    this.name = M.name,
                    this.abbrs = M.abbrs,
                    this.untils = M.untils,
                    this.offsets = M.offsets,
                    this.population = M.population
                },
                _index: function(M) {
                    var b, z = +M, p = this.untils;
                    for (b = 0; b < p.length; b++)
                        if (z < p[b])
                            return b
                },
                countries: function() {
                    var M = this.name;
                    return Object.keys(O).filter((function(b) {
                        return -1 !== O[b].zones.indexOf(M)
                    }
                    ))
                },
                parse: function(M) {
                    var b, z, p, O, o = +M, e = this.offsets, c = this.untils, n = c.length - 1;
                    for (O = 0; O < n; O++)
                        if (b = e[O],
                        z = e[O + 1],
                        p = e[O ? O - 1 : O],
                        b < z && g.moveAmbiguousForward ? b = z : b > p && g.moveInvalidForward && (b = p),
                        o < c[O] - 6e4 * b)
                            return e[O];
                    return e[n]
                },
                abbr: function(M) {
                    return this.abbrs[this._index(M)]
                },
                offset: function(M) {
                    return T("zone.offset has been deprecated in favor of zone.utcOffset"),
                    this.offsets[this._index(M)]
                },
                utcOffset: function(M) {
                    return this.offsets[this._index(M)]
                }
            },
            W.prototype.scoreOffsetAt = function(M) {
                this.offsetScore += Math.abs(this.zone.utcOffset(M.at) - M.offset),
                this.zone.abbr(M.at).replace(/[^A-Z]/g, "") !== M.abbr && this.abbrScore++
            }
            ,
            g.version = "0.5.43",
            g.dataVersion = "",
            g._zones = z,
            g._links = p,
            g._names = o,
            g._countries = O,
            g.add = h,
            g.link = N,
            g.load = function(M) {
                h(M.zones),
                N(M.links),
                function(M) {
                    var b, z, p, o;
                    if (M && M.length)
                        for (b = 0; b < M.length; b++)
                            z = (o = M[b].split("|"))[0].toUpperCase(),
                            p = o[1].split(" "),
                            O[z] = new s(z,p)
                }(M.countries),
                g.dataVersion = M.version
            }
            ,
            g.zone = y,
            g.zoneExists = function M(b) {
                return M.didShowError || (M.didShowError = !0,
                T("moment.tz.zoneExists('" + b + "') has been deprecated in favor of !moment.tz.zone('" + b + "')")),
                !!y(b)
            }
            ,
            g.guess = function(M) {
                return b && !M || (b = m()),
                b
            }
            ,
            g.names = function() {
                var M, b = [];
                for (M in o)
                    o.hasOwnProperty(M) && (z[M] || z[p[M]]) && o[M] && b.push(o[M]);
                return b.sort()
            }
            ,
            g.Zone = q,
            g.unpack = i,
            g.unpackBase60 = A,
            g.needsOffset = B,
            g.moveInvalidForward = !0,
            g.moveAmbiguousForward = !1,
            g.countries = function() {
                return Object.keys(O)
            }
            ,
            g.zonesForCountry = function(M, b) {
                var z;
                if (z = (z = M).toUpperCase(),
                !(M = O[z] || null))
                    return null;
                var p = M.zones.sort();
                return b ? p.map((function(M) {
                    return {
                        name: M,
                        offset: y(M).utcOffset(new Date)
                    }
                }
                )) : p
            }
            ;
            var X, Y = M.fn;
            function v(M) {
                return function() {
                    return this._z ? this._z.abbr(this) : M.call(this)
                }
            }
            function k(M) {
                return function() {
                    return this._z = null,
                    M.apply(this, arguments)
                }
            }
            M.tz = g,
            M.defaultZone = null,
            M.updateOffset = function(b, z) {
                var p, O = M.defaultZone;
                if (void 0 === b._z && (O && B(b) && !b._isUTC && (b._d = M.utc(b._a)._d,
                b.utc().add(O.parse(b), "minutes")),
                b._z = O),
                b._z)
                    if (p = b._z.utcOffset(b),
                    Math.abs(p) < 16 && (p /= 60),
                    void 0 !== b.utcOffset) {
                        var o = b._z;
                        b.utcOffset(-p, z),
                        b._z = o
                    } else
                        b.zone(p, z)
            }
            ,
            Y.tz = function(b, z) {
                if (b) {
                    if ("string" != typeof b)
                        throw new Error("Time zone name must be a string, got " + b + " [" + typeof b + "]");
                    return this._z = y(b),
                    this._z ? M.updateOffset(this, z) : T(),
                    this
                }
                if (this._z)
                    return this._z.name
            }
            ,
            Y.zoneName = v(Y.zoneName),
            Y.zoneAbbr = v(Y.zoneAbbr),
            Y.utc = k(Y.utc),
            Y.local = k(Y.local),
            Y.utcOffset = (X = Y.utcOffset,
            function() {
                return arguments.length > 0 && (this._z = null),
                X.apply(this, arguments)
            }
            ),
            M.tz.setDefault = function(b) {
                return (n < 2 || 2 === n && t < 9) && T(M.version),
                M.defaultZone = b ? y(b) : null,
                M
            }
            ;
            var D = M.momentProperties;
            return "[object Array]" === Object.prototype.toString.call(D) ? (D.push("_z"),
            D.push("_a")) : D && (D._z = null),
            M
        }
        ))
    },
    94506: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(M) {
                    return /^nm$/i.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? z ? "vm" : "VM" : z ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(M) {
                    return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    62887: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = function(M) {
                return 0 === M ? 0 : 1 === M ? 1 : 2 === M ? 2 : M % 100 >= 3 && M % 100 <= 10 ? 3 : M % 100 >= 11 ? 4 : 5
            }
              , z = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , p = function(M) {
                return function(p, O, o, e) {
                    var c = b(p)
                      , n = z[M][b(p)];
                    return 2 === c && (n = n[O ? 0 : 1]),
                    n.replace(/%d/i, p)
                }
            }
              , O = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            M.defineLocale("ar-dz", {
                months: O,
                monthsShort: O,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(M) {
                    return "م" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: p("s"),
                    ss: p("s"),
                    m: p("m"),
                    mm: p("m"),
                    h: p("h"),
                    hh: p("h"),
                    d: p("d"),
                    dd: p("d"),
                    M: p("M"),
                    MM: p("M"),
                    y: p("y"),
                    yy: p("y")
                },
                postformat: function(M) {
                    return M.replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(z(36105))
    },
    66307: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        }(z(36105))
    },
    51664: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            }
              , z = function(M) {
                return 0 === M ? 0 : 1 === M ? 1 : 2 === M ? 2 : M % 100 >= 3 && M % 100 <= 10 ? 3 : M % 100 >= 11 ? 4 : 5
            }
              , p = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , O = function(M) {
                return function(b, O, o, e) {
                    var c = z(b)
                      , n = p[M][z(b)];
                    return 2 === c && (n = n[O ? 0 : 1]),
                    n.replace(/%d/i, b)
                }
            }
              , o = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            M.defineLocale("ar-ly", {
                months: o,
                monthsShort: o,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(M) {
                    return "م" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: O("s"),
                    ss: O("s"),
                    m: O("m"),
                    mm: O("m"),
                    h: O("h"),
                    hh: O("h"),
                    d: O("d"),
                    dd: O("d"),
                    M: O("M"),
                    MM: O("M"),
                    y: O("y"),
                    yy: O("y")
                },
                preparse: function(M) {
                    return M.replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    89926: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    85207: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , z = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
            M.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(M) {
                    return "م" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(M) {
                    return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(M) {
                        return z[M]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    52912: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    59687: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , z = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
              , p = function(M) {
                return 0 === M ? 0 : 1 === M ? 1 : 2 === M ? 2 : M % 100 >= 3 && M % 100 <= 10 ? 3 : M % 100 >= 11 ? 4 : 5
            }
              , O = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , o = function(M) {
                return function(b, z, o, e) {
                    var c = p(b)
                      , n = O[M][p(b)];
                    return 2 === c && (n = n[z ? 0 : 1]),
                    n.replace(/%d/i, b)
                }
            }
              , e = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            M.defineLocale("ar", {
                months: e,
                monthsShort: e,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(M) {
                    return "م" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: o("s"),
                    ss: o("s"),
                    m: o("m"),
                    mm: o("m"),
                    h: o("h"),
                    hh: o("h"),
                    d: o("d"),
                    dd: o("d"),
                    M: o("M"),
                    MM: o("M"),
                    y: o("y"),
                    yy: o("y")
                },
                preparse: function(M) {
                    return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(M) {
                        return z[M]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    5011: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            M.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "bir neçə saniyə",
                    ss: "%d saniyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(M) {
                    return /^(gündüz|axşam)$/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "gecə" : M < 12 ? "səhər" : M < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(M) {
                    if (0 === M)
                        return M + "-ıncı";
                    var z = M % 10
                      , p = M % 100 - z
                      , O = M >= 100 ? 100 : null;
                    return M + (b[z] || b[p] || b[O])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    25997: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b) {
                var z = M.split("_");
                return b % 10 == 1 && b % 100 != 11 ? z[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? z[1] : z[2]
            }
            function z(M, z, p) {
                return "m" === p ? z ? "хвіліна" : "хвіліну" : "h" === p ? z ? "гадзіна" : "гадзіну" : M + " " + b({
                    ss: z ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: z ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: z ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[p], +M)
            }
            M.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: z,
                    mm: z,
                    h: z,
                    hh: z,
                    d: "дзень",
                    dd: z,
                    M: "месяц",
                    MM: z,
                    y: "год",
                    yy: z
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(M) {
                    return /^(дня|вечара)$/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "ночы" : M < 12 ? "раніцы" : M < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return M % 10 != 2 && M % 10 != 3 || M % 100 == 12 || M % 100 == 13 ? M + "-ы" : M + "-і";
                    case "D":
                        return M + "-га";
                    default:
                        return M
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    4427: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Миналата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Миналия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    w: "седмица",
                    ww: "%d седмици",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(M) {
                    var b = M % 10
                      , z = M % 100;
                    return 0 === M ? M + "-ев" : 0 === z ? M + "-ен" : z > 10 && z < 20 ? M + "-ти" : 1 === b ? M + "-ви" : 2 === b ? M + "-ри" : 7 === b || 8 === b ? M + "-ми" : M + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    85385: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lɛrɛ] LT",
                    nextDay: "[Sini lɛrɛ] LT",
                    nextWeek: "dddd [don lɛrɛ] LT",
                    lastDay: "[Kunu lɛrɛ] LT",
                    lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kɔnɔ",
                    past: "a bɛ %s bɔ",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lɛrɛ kelen",
                    hh: "lɛrɛ %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    57002: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
              , z = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
            M.defineLocale("bn-bd", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(M) {
                    return M.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "রাত" === b ? M < 4 ? M : M + 12 : "ভোর" === b || "সকাল" === b ? M : "দুপুর" === b ? M >= 3 ? M : M + 12 : "বিকাল" === b || "সন্ধ্যা" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "রাত" : M < 6 ? "ভোর" : M < 12 ? "সকাল" : M < 15 ? "দুপুর" : M < 18 ? "বিকাল" : M < 20 ? "সন্ধ্যা" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    67703: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
              , z = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
            M.defineLocale("bn", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(M) {
                    return M.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "রাত" === b && M >= 4 || "দুপুর" === b && M < 5 || "বিকাল" === b ? M + 12 : M
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "রাত" : M < 10 ? "সকাল" : M < 17 ? "দুপুর" : M < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    39841: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            }
              , z = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
            M.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
                monthsShortRegex: /^(ཟླ་\d{1,2})/,
                monthsParseExact: !0,
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    ss: "%d སྐར་ཆ།",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(M) {
                    return M.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "མཚན་མོ" === b && M >= 4 || "ཉིན་གུང" === b && M < 5 || "དགོང་དག" === b ? M + 12 : M
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "མཚན་མོ" : M < 10 ? "ཞོགས་ཀས" : M < 17 ? "ཉིན་གུང" : M < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    45642: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z) {
                return M + " " + O({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[z], M)
            }
            function z(M) {
                switch (p(M)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return M + " bloaz";
                default:
                    return M + " vloaz"
                }
            }
            function p(M) {
                return M > 9 ? p(M % 10) : M
            }
            function O(M, b) {
                return 2 === b ? o(M) : M
            }
            function o(M) {
                var b = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === b[M.charAt(0)] ? M : b[M.charAt(0)] + M.substring(1)
            }
            var e = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
              , c = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
              , n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i
              , t = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
              , a = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i]
              , A = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i]
              , d = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
            M.defineLocale("br", {
                months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParse: d,
                fullWeekdaysParse: a,
                shortWeekdaysParse: A,
                minWeekdaysParse: d,
                monthsRegex: c,
                monthsShortRegex: c,
                monthsStrictRegex: n,
                monthsShortStrictRegex: t,
                monthsParse: e,
                longMonthsParse: e,
                shortMonthsParse: e,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY HH:mm",
                    LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warcʼhoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Decʼh da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s ʼzo",
                    s: "un nebeud segondennoù",
                    ss: "%d eilenn",
                    m: "ur vunutenn",
                    mm: b,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: b,
                    M: "ur miz",
                    MM: b,
                    y: "ur bloaz",
                    yy: z
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(M) {
                    return M + (1 === M ? "añ" : "vet")
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /a.m.|g.m./,
                isPM: function(M) {
                    return "g.m." === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "a.m." : "g.m."
                }
            })
        }(z(36105))
    },
    69038: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z) {
                var p = M + " ";
                switch (z) {
                case "ss":
                    return p += 1 === M ? "sekunda" : 2 === M || 3 === M || 4 === M ? "sekunde" : "sekundi";
                case "m":
                    return b ? "jedna minuta" : "jedne minute";
                case "mm":
                    return p += 1 === M ? "minuta" : 2 === M || 3 === M || 4 === M ? "minute" : "minuta";
                case "h":
                    return b ? "jedan sat" : "jednog sata";
                case "hh":
                    return p += 1 === M ? "sat" : 2 === M || 3 === M || 4 === M ? "sata" : "sati";
                case "dd":
                    return p += 1 === M ? "dan" : "dana";
                case "MM":
                    return p += 1 === M ? "mjesec" : 2 === M || 3 === M || 4 === M ? "mjeseca" : "mjeseci";
                case "yy":
                    return p += 1 === M ? "godina" : 2 === M || 3 === M || 4 === M ? "godine" : "godina"
                }
            }
            M.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: "dan",
                    dd: b,
                    M: "mjesec",
                    MM: b,
                    y: "godinu",
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    53512: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(M, b) {
                    var z = 1 === M ? "r" : 2 === M ? "n" : 3 === M ? "r" : 4 === M ? "t" : "è";
                    return "w" !== b && "W" !== b || (z = "a"),
                    M + z
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    39497: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                format: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                standalone: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")
            }
              , z = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
              , p = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
              , O = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
            function o(M) {
                return M > 1 && M < 5 && 1 != ~~(M / 10)
            }
            function e(M, b, z, p) {
                var O = M + " ";
                switch (z) {
                case "s":
                    return b || p ? "pár sekund" : "pár sekundami";
                case "ss":
                    return b || p ? O + (o(M) ? "sekundy" : "sekund") : O + "sekundami";
                case "m":
                    return b ? "minuta" : p ? "minutu" : "minutou";
                case "mm":
                    return b || p ? O + (o(M) ? "minuty" : "minut") : O + "minutami";
                case "h":
                    return b ? "hodina" : p ? "hodinu" : "hodinou";
                case "hh":
                    return b || p ? O + (o(M) ? "hodiny" : "hodin") : O + "hodinami";
                case "d":
                    return b || p ? "den" : "dnem";
                case "dd":
                    return b || p ? O + (o(M) ? "dny" : "dní") : O + "dny";
                case "M":
                    return b || p ? "měsíc" : "měsícem";
                case "MM":
                    return b || p ? O + (o(M) ? "měsíce" : "měsíců") : O + "měsíci";
                case "y":
                    return b || p ? "rok" : "rokem";
                case "yy":
                    return b || p ? O + (o(M) ? "roky" : "let") : O + "lety"
                }
            }
            M.defineLocale("cs", {
                months: b,
                monthsShort: z,
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: e,
                    ss: e,
                    m: e,
                    mm: e,
                    h: e,
                    hh: e,
                    d: e,
                    dd: e,
                    M: e,
                    MM: e,
                    y: e,
                    yy: e
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    6479: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(M) {
                        return M + (/сехет$/i.exec(M) ? "рен" : /ҫул$/i.exec(M) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    ss: "%d ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    89318: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(M) {
                    var b = "";
                    return M > 20 ? b = 40 === M || 50 === M || 60 === M || 80 === M || 100 === M ? "fed" : "ain" : M > 0 && (b = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][M]),
                    M + b
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    97229: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    51044: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [M + " Tage", M + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [M + " Monate", M + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [M + " Jahre", M + " Jahren"]
                };
                return b ? O[z][0] : O[z][1]
            }
            M.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: b,
                    mm: "%d Minuten",
                    h: b,
                    hh: "%d Stunden",
                    d: b,
                    dd: b,
                    w: b,
                    ww: "%d Wochen",
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    26445: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [M + " Tage", M + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [M + " Monate", M + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [M + " Jahre", M + " Jahren"]
                };
                return b ? O[z][0] : O[z][1]
            }
            M.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: b,
                    mm: "%d Minuten",
                    h: b,
                    hh: "%d Stunden",
                    d: b,
                    dd: b,
                    w: b,
                    ww: "%d Wochen",
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    63460: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [M + " Tage", M + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [M + " Monate", M + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [M + " Jahre", M + " Jahren"]
                };
                return b ? O[z][0] : O[z][1]
            }
            M.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: b,
                    mm: "%d Minuten",
                    h: b,
                    hh: "%d Stunden",
                    d: b,
                    dd: b,
                    w: b,
                    ww: "%d Wochen",
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    32096: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
              , z = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            M.defineLocale("dv", {
                months: b,
                monthsShort: b,
                weekdays: z,
                weekdaysShort: z,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(M) {
                    return "މފ" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    ss: "d% ސިކުންތު",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(M) {
                    return M.replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        }(z(36105))
    },
    16048: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M) {
                return "undefined" != typeof Function && M instanceof Function || "[object Function]" === Object.prototype.toString.call(M)
            }
            M.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(M, b) {
                    return M ? "string" == typeof b && /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[M.month()] : this._monthsNominativeEl[M.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(M, b, z) {
                    return M > 11 ? z ? "μμ" : "ΜΜ" : z ? "πμ" : "ΠΜ"
                },
                isPM: function(M) {
                    return "μ" === (M + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                    },
                    sameElse: "L"
                },
                calendar: function(M, z) {
                    var p = this._calendarEl[M]
                      , O = z && z.hours();
                    return b(p) && (p = p.apply(z)),
                    p.replace("{}", O % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    74301: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(z(36105))
    },
    66855: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            })
        }(z(36105))
    },
    761: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    46127: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    49157: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            })
        }(z(36105))
    },
    37199: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-in", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    31511: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    47309: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("en-sg", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    92160: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "[la] D[-an de] MMMM, YYYY",
                    LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                    llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(M) {
                    return "p" === M.charAt(0).toLowerCase()
                },
                meridiem: function(M, b, z) {
                    return M > 11 ? z ? "p.t.m." : "P.T.M." : z ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd[n je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasintan] dddd[n je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "kelkaj sekundoj",
                    ss: "%d sekundoj",
                    m: "unu minuto",
                    mm: "%d minutoj",
                    h: "unu horo",
                    hh: "%d horoj",
                    d: "unu tago",
                    dd: "%d tagoj",
                    M: "unu monato",
                    MM: "%d monatoj",
                    y: "unu jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    71885: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , p = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , O = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            M.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    68131: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , p = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , O = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            M.defineLocale("es-mx", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(z(36105))
    },
    16962: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , p = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , O = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            M.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    68582: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , z = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , p = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , O = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            M.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(z(36105))
    },
    98890: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    ss: [M + "sekundi", M + "sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [M + " minuti", M + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [M + " tunni", M + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [M + " kuu", M + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [M + " aasta", M + " aastat"]
                };
                return b ? O[z][2] ? O[z][2] : O[z][1] : p ? O[z][0] : O[z][1]
            }
            M.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: "%d päeva",
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    37704: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    22562: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }
              , z = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
            M.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(M) {
                    return /بعد از ظهر/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    ss: "%d ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(M) {
                    return M.replace(/[۰-۹]/g, (function(M) {
                        return z[M]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    )).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    70877: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
              , z = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", b[7], b[8], b[9]];
            function p(M, b, z, p) {
                var o = "";
                switch (z) {
                case "s":
                    return p ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    o = p ? "sekunnin" : "sekuntia";
                    break;
                case "m":
                    return p ? "minuutin" : "minuutti";
                case "mm":
                    o = p ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return p ? "tunnin" : "tunti";
                case "hh":
                    o = p ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return p ? "päivän" : "päivä";
                case "dd":
                    o = p ? "päivän" : "päivää";
                    break;
                case "M":
                    return p ? "kuukauden" : "kuukausi";
                case "MM":
                    o = p ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return p ? "vuoden" : "vuosi";
                case "yy":
                    o = p ? "vuoden" : "vuotta"
                }
                return o = O(M, p) + " " + o
            }
            function O(M, p) {
                return M < 10 ? p ? z[M] : b[M] : M
            }
            M.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: p,
                    ss: p,
                    m: p,
                    mm: p,
                    h: p,
                    hh: p,
                    d: p,
                    dd: p,
                    M: p,
                    MM: p,
                    y: p,
                    yy: p
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    34246: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("fil", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(M) {
                    return M
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    78341: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaður",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    82347: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(M, b) {
                    switch (b) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return M + (1 === M ? "er" : "e");
                    case "w":
                    case "W":
                        return M + (1 === M ? "re" : "e")
                    }
                }
            })
        }(z(36105))
    },
    17683: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(M, b) {
                    switch (b) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return M + (1 === M ? "er" : "e");
                    case "w":
                    case "W":
                        return M + (1 === M ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    19867: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
              , z = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i
              , p = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
              , O = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
            M.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsRegex: p,
                monthsShortRegex: p,
                monthsStrictRegex: b,
                monthsShortStrictRegex: z,
                monthsParse: O,
                longMonthsParse: O,
                shortMonthsParse: O,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    w: "une semaine",
                    ww: "%d semaines",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "D":
                        return M + (1 === M ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return M + (1 === M ? "er" : "e");
                    case "w":
                    case "W":
                        return M + (1 === M ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    21982: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
              , z = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            M.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    ss: "%d sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(M) {
                    return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    13905: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"]
              , z = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"]
              , p = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"]
              , O = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"]
              , o = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
            M.defineLocale("ga", {
                months: b,
                monthsShort: z,
                monthsParseExact: !0,
                weekdays: p,
                weekdaysShort: O,
                weekdaysMin: o,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Amárach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inné ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s ó shin",
                    s: "cúpla soicind",
                    ss: "%d soicind",
                    m: "nóiméad",
                    mm: "%d nóiméad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lá",
                    dd: "%d lá",
                    M: "mí",
                    MM: "%d míonna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(M) {
                    return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    13443: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
              , z = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
              , p = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
              , O = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
              , o = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            M.defineLocale("gd", {
                months: b,
                monthsShort: z,
                monthsParseExact: !0,
                weekdays: p,
                weekdaysShort: O,
                weekdaysMin: o,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(M) {
                    return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    66905: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(M) {
                        return 0 === M.indexOf("un") ? "n" + M : "en " + M
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    91324: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                    ss: [M + " सॅकंडांनी", M + " सॅकंड"],
                    m: ["एका मिणटान", "एक मिनूट"],
                    mm: [M + " मिणटांनी", M + " मिणटां"],
                    h: ["एका वरान", "एक वर"],
                    hh: [M + " वरांनी", M + " वरां"],
                    d: ["एका दिसान", "एक दीस"],
                    dd: [M + " दिसांनी", M + " दीस"],
                    M: ["एका म्हयन्यान", "एक म्हयनो"],
                    MM: [M + " म्हयन्यानी", M + " म्हयने"],
                    y: ["एका वर्सान", "एक वर्स"],
                    yy: [M + " वर्सांनी", M + " वर्सां"]
                };
                return p ? O[z][0] : O[z][1]
            }
            M.defineLocale("gom-deva", {
                months: {
                    standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [वाजतां]",
                    LTS: "A h:mm:ss [वाजतां]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [वाजतां]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                    llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
                },
                calendar: {
                    sameDay: "[आयज] LT",
                    nextDay: "[फाल्यां] LT",
                    nextWeek: "[फुडलो] dddd[,] LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[फाटलो] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s आदीं",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: b,
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                ordinal: function(M, b) {
                    return "D" === b ? M + "वेर" : M
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "राती" === b ? M < 4 ? M : M + 12 : "सकाळीं" === b ? M : "दनपारां" === b ? M > 12 ? M : M + 12 : "सांजे" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "राती" : M < 12 ? "सकाळीं" : M < 16 ? "दनपारां" : M < 20 ? "सांजे" : "राती"
                }
            })
        }(z(36105))
    },
    41890: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    s: ["thoddea sekondamni", "thodde sekond"],
                    ss: [M + " sekondamni", M + " sekond"],
                    m: ["eka mintan", "ek minut"],
                    mm: [M + " mintamni", M + " mintam"],
                    h: ["eka voran", "ek vor"],
                    hh: [M + " voramni", M + " voram"],
                    d: ["eka disan", "ek dis"],
                    dd: [M + " disamni", M + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [M + " mhoineamni", M + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [M + " vorsamni", M + " vorsam"]
                };
                return p ? O[z][0] : O[z][1]
            }
            M.defineLocale("gom-latn", {
                months: {
                    standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Fuddlo] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fattlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: b,
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function(M, b) {
                    return "D" === b ? M + "er" : M
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /rati|sokallim|donparam|sanje/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "rati" === b ? M < 4 ? M : M + 12 : "sokallim" === b ? M : "donparam" === b ? M > 12 ? M : M + 12 : "sanje" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "rati" : M < 12 ? "sokallim" : M < 16 ? "donparam" : M < 20 ? "sanje" : "rati"
                }
            })
        }(z(36105))
    },
    37134: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            }
              , z = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
            M.defineLocale("gu", {
                months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                monthsParseExact: !0,
                weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                longDateFormat: {
                    LT: "A h:mm વાગ્યે",
                    LTS: "A h:mm:ss વાગ્યે",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                    LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                },
                calendar: {
                    sameDay: "[આજ] LT",
                    nextDay: "[કાલે] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ગઇકાલે] LT",
                    lastWeek: "[પાછલા] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s મા",
                    past: "%s પહેલા",
                    s: "અમુક પળો",
                    ss: "%d સેકંડ",
                    m: "એક મિનિટ",
                    mm: "%d મિનિટ",
                    h: "એક કલાક",
                    hh: "%d કલાક",
                    d: "એક દિવસ",
                    dd: "%d દિવસ",
                    M: "એક મહિનો",
                    MM: "%d મહિનો",
                    y: "એક વર્ષ",
                    yy: "%d વર્ષ"
                },
                preparse: function(M) {
                    return M.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "રાત" === b ? M < 4 ? M : M + 12 : "સવાર" === b ? M : "બપોર" === b ? M >= 10 ? M : M + 12 : "સાંજ" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "રાત" : M < 10 ? "સવાર" : M < 17 ? "બપોર" : M < 20 ? "સાંજ" : "રાત"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    96835: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(M) {
                        return 2 === M ? "שעתיים" : M + " שעות"
                    },
                    d: "יום",
                    dd: function(M) {
                        return 2 === M ? "יומיים" : M + " ימים"
                    },
                    M: "חודש",
                    MM: function(M) {
                        return 2 === M ? "חודשיים" : M + " חודשים"
                    },
                    y: "שנה",
                    yy: function(M) {
                        return 2 === M ? "שנתיים" : M % 10 == 0 && 10 !== M ? M + " שנה" : M + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(M) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 5 ? "לפנות בוקר" : M < 10 ? "בבוקר" : M < 12 ? z ? 'לפנה"צ' : "לפני הצהריים" : M < 18 ? z ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        }(z(36105))
    },
    81394: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , z = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }
              , p = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i]
              , O = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
            M.defineLocale("hi", {
                months: {
                    format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                },
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: O,
                monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    ss: "%d सेकंड",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(M) {
                    return M.replace(/[१२३४५६७८९०]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "रात" === b ? M < 4 ? M : M + 12 : "सुबह" === b ? M : "दोपहर" === b ? M >= 10 ? M : M + 12 : "शाम" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "रात" : M < 10 ? "सुबह" : M < 17 ? "दोपहर" : M < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    13564: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z) {
                var p = M + " ";
                switch (z) {
                case "ss":
                    return p += 1 === M ? "sekunda" : 2 === M || 3 === M || 4 === M ? "sekunde" : "sekundi";
                case "m":
                    return b ? "jedna minuta" : "jedne minute";
                case "mm":
                    return p += 1 === M ? "minuta" : 2 === M || 3 === M || 4 === M ? "minute" : "minuta";
                case "h":
                    return b ? "jedan sat" : "jednog sata";
                case "hh":
                    return p += 1 === M ? "sat" : 2 === M || 3 === M || 4 === M ? "sata" : "sati";
                case "dd":
                    return p += 1 === M ? "dan" : "dana";
                case "MM":
                    return p += 1 === M ? "mjesec" : 2 === M || 3 === M || 4 === M ? "mjeseca" : "mjeseci";
                case "yy":
                    return p += 1 === M ? "godina" : 2 === M || 3 === M || 4 === M ? "godine" : "godina"
                }
            }
            M.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM YYYY",
                    LLL: "Do MMMM YYYY H:mm",
                    LLLL: "dddd, Do MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[prošlu] [nedjelju] [u] LT";
                        case 3:
                            return "[prošlu] [srijedu] [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: "dan",
                    dd: b,
                    M: "mjesec",
                    MM: b,
                    y: "godinu",
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    46269: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            function z(M, b, z, p) {
                var O = M;
                switch (z) {
                case "s":
                    return p || b ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return O + (p || b) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (p || b ? " perc" : " perce");
                case "mm":
                    return O + (p || b ? " perc" : " perce");
                case "h":
                    return "egy" + (p || b ? " óra" : " órája");
                case "hh":
                    return O + (p || b ? " óra" : " órája");
                case "d":
                    return "egy" + (p || b ? " nap" : " napja");
                case "dd":
                    return O + (p || b ? " nap" : " napja");
                case "M":
                    return "egy" + (p || b ? " hónap" : " hónapja");
                case "MM":
                    return O + (p || b ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (p || b ? " év" : " éve");
                case "yy":
                    return O + (p || b ? " év" : " éve")
                }
                return ""
            }
            function p(M) {
                return (M ? "" : "[múlt] ") + "[" + b[this.day()] + "] LT[-kor]"
            }
            M.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(M) {
                    return "u" === M.charAt(1).toLowerCase()
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? !0 === z ? "de" : "DE" : !0 === z ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return p.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return p.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: z,
                    ss: z,
                    m: z,
                    mm: z,
                    h: z,
                    hh: z,
                    d: z,
                    dd: z,
                    M: z,
                    MM: z,
                    y: z,
                    yy: z
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    57269: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    ss: "%d վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(M) {
                    return /^(ցերեկվա|երեկոյան)$/.test(M)
                },
                meridiem: function(M) {
                    return M < 4 ? "գիշերվա" : M < 12 ? "առավոտվա" : M < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === M ? M + "-ին" : M + "-րդ";
                    default:
                        return M
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    44254: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "pagi" === b ? M : "siang" === b ? M >= 11 ? M : M + 12 : "sore" === b || "malam" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 11 ? "pagi" : M < 15 ? "siang" : M < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    8699: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M) {
                return M % 100 == 11 || M % 10 != 1
            }
            function z(M, z, p, O) {
                var o = M + " ";
                switch (p) {
                case "s":
                    return z || O ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return b(M) ? o + (z || O ? "sekúndur" : "sekúndum") : o + "sekúnda";
                case "m":
                    return z ? "mínúta" : "mínútu";
                case "mm":
                    return b(M) ? o + (z || O ? "mínútur" : "mínútum") : z ? o + "mínúta" : o + "mínútu";
                case "hh":
                    return b(M) ? o + (z || O ? "klukkustundir" : "klukkustundum") : o + "klukkustund";
                case "d":
                    return z ? "dagur" : O ? "dag" : "degi";
                case "dd":
                    return b(M) ? z ? o + "dagar" : o + (O ? "daga" : "dögum") : z ? o + "dagur" : o + (O ? "dag" : "degi");
                case "M":
                    return z ? "mánuður" : O ? "mánuð" : "mánuði";
                case "MM":
                    return b(M) ? z ? o + "mánuðir" : o + (O ? "mánuði" : "mánuðum") : z ? o + "mánuður" : o + (O ? "mánuð" : "mánuði");
                case "y":
                    return z || O ? "ár" : "ári";
                case "yy":
                    return b(M) ? o + (z || O ? "ár" : "árum") : o + (z || O ? "ár" : "ári")
                }
            }
            M.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: z,
                    ss: z,
                    m: z,
                    mm: z,
                    h: "klukkustund",
                    hh: z,
                    d: z,
                    dd: z,
                    M: z,
                    MM: z,
                    y: z,
                    yy: z
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    92887: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(M) {
                        return (/^[0-9].+$/.test(M) ? "tra" : "in") + " " + M
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    28301: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextDay: function() {
                        return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextWeek: function() {
                        return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastDay: function() {
                        return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastWeek: function() {
                        return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "tra %s",
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    w: "una settimana",
                    ww: "%d settimane",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    64642: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ja", {
                eras: [{
                    since: "2019-05-01",
                    offset: 1,
                    name: "令和",
                    narrow: "㋿",
                    abbr: "R"
                }, {
                    since: "1989-01-08",
                    until: "2019-04-30",
                    offset: 1,
                    name: "平成",
                    narrow: "㍻",
                    abbr: "H"
                }, {
                    since: "1926-12-25",
                    until: "1989-01-07",
                    offset: 1,
                    name: "昭和",
                    narrow: "㍼",
                    abbr: "S"
                }, {
                    since: "1912-07-30",
                    until: "1926-12-24",
                    offset: 1,
                    name: "大正",
                    narrow: "㍽",
                    abbr: "T"
                }, {
                    since: "1873-01-01",
                    until: "1912-07-29",
                    offset: 6,
                    name: "明治",
                    narrow: "㍾",
                    abbr: "M"
                }, {
                    since: "0001-01-01",
                    until: "1873-12-31",
                    offset: 1,
                    name: "西暦",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "紀元前",
                    narrow: "BC",
                    abbr: "BC"
                }],
                eraYearOrdinalRegex: /(元|\d+)年/,
                eraYearOrdinalParse: function(M, b) {
                    return "元" === b[1] ? 1 : parseInt(b[1] || M, 10)
                },
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日(ddd) HH:mm"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(M) {
                    return "午後" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: function(M) {
                        return M.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                    },
                    lastDay: "[昨日] LT",
                    lastWeek: function(M) {
                        return this.week() !== M.week() ? "[先週]dddd LT" : "dddd LT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "y":
                        return 1 === M ? "元年" : M + "年";
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "日";
                    default:
                        return M
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        }(z(36105))
    },
    62168: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "enjing" === b ? M : "siyang" === b ? M >= 11 ? M : M + 12 : "sonten" === b || "ndalu" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 11 ? "enjing" : M < 15 ? "siyang" : M < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    94501: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ka", {
                months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(M) {
                        return M.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(M, b, z) {
                            return "ი" === z ? b + "ში" : b + z + "ში"
                        }
                        ))
                    },
                    past: function(M) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(M) ? M.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(M) ? M.replace(/წელი$/, "წლის წინ") : M
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(M) {
                    return 0 === M ? M : 1 === M ? M + "-ლი" : M < 20 || M <= 100 && M % 20 == 0 || M % 100 == 0 ? "მე-" + M : M + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    49537: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            M.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    ss: "%d секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(M) {
                    var z = M % 10
                      , p = M >= 100 ? 100 : null;
                    return M + (b[M] || b[z] || b[p])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    45808: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            }
              , z = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
            M.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ព្រឹក|ល្ងាច/,
                isPM: function(M) {
                    return "ល្ងាច" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ព្រឹក" : "ល្ងាច"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    ss: "%d វិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                ordinal: "ទី%d",
                preparse: function(M) {
                    return M.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    34881: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            }
              , z = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
            M.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    ss: "%d ಸೆಕೆಂಡುಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function(M) {
                    return M.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "ರಾತ್ರಿ" === b ? M < 4 ? M : M + 12 : "ಬೆಳಿಗ್ಗೆ" === b ? M : "ಮಧ್ಯಾಹ್ನ" === b ? M >= 10 ? M : M + 12 : "ಸಂಜೆ" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "ರಾತ್ರಿ" : M < 10 ? "ಬೆಳಿಗ್ಗೆ" : M < 17 ? "ಮಧ್ಯಾಹ್ನ" : M < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function(M) {
                    return M + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    62951: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "일";
                    case "M":
                        return M + "월";
                    case "w":
                    case "W":
                        return M + "주";
                    default:
                        return M
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function(M) {
                    return "오후" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "오전" : "오후"
                }
            })
        }(z(36105))
    },
    92452: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , z = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
              , p = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
            M.defineLocale("ku", {
                months: p,
                monthsShort: p,
                weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ئێواره‌|به‌یانی/,
                isPM: function(M) {
                    return /ئێواره‌/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "به‌یانی" : "ئێواره‌"
                },
                calendar: {
                    sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                    nextDay: "[به‌یانی كاتژمێر] LT",
                    nextWeek: "dddd [كاتژمێر] LT",
                    lastDay: "[دوێنێ كاتژمێر] LT",
                    lastWeek: "dddd [كاتژمێر] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "له‌ %s",
                    past: "%s",
                    s: "چه‌ند چركه‌یه‌ك",
                    ss: "چركه‌ %d",
                    m: "یه‌ك خوله‌ك",
                    mm: "%d خوله‌ك",
                    h: "یه‌ك كاتژمێر",
                    hh: "%d كاتژمێر",
                    d: "یه‌ك ڕۆژ",
                    dd: "%d ڕۆژ",
                    M: "یه‌ك مانگ",
                    MM: "%d مانگ",
                    y: "یه‌ك ساڵ",
                    yy: "%d ساڵ"
                },
                preparse: function(M) {
                    return M.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(M) {
                        return z[M]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    1853: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            M.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кечээ саат] LT",
                    lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    ss: "%d секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(M) {
                    var z = M % 10
                      , p = M >= 100 ? 100 : null;
                    return M + (b[M] || b[z] || b[p])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    77639: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return b ? O[z][0] : O[z][1]
            }
            function z(M) {
                return O(M.substr(0, M.indexOf(" "))) ? "a " + M : "an " + M
            }
            function p(M) {
                return O(M.substr(0, M.indexOf(" "))) ? "viru " + M : "virun " + M
            }
            function O(M) {
                if (M = parseInt(M, 10),
                isNaN(M))
                    return !1;
                if (M < 0)
                    return !0;
                if (M < 10)
                    return 4 <= M && M <= 7;
                if (M < 100) {
                    var b = M % 10;
                    return O(0 === b ? M / 10 : b)
                }
                if (M < 1e4) {
                    for (; M >= 10; )
                        M /= 10;
                    return O(M)
                }
                return O(M /= 1e3)
            }
            M.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: z,
                    past: p,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: b,
                    mm: "%d Minutten",
                    h: b,
                    hh: "%d Stonnen",
                    d: b,
                    dd: "%d Deeg",
                    M: b,
                    MM: "%d Méint",
                    y: b,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    34502: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(M) {
                    return "ຕອນແລງ" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    ss: "%d ວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(M) {
                    return "ທີ່" + M
                }
            })
        }(z(36105))
    },
    60874: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                ss: "sekundė_sekundžių_sekundes",
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            function z(M, b, z, p) {
                return b ? "kelios sekundės" : p ? "kelių sekundžių" : "kelias sekundes"
            }
            function p(M, b, z, p) {
                return b ? o(z)[0] : p ? o(z)[1] : o(z)[2]
            }
            function O(M) {
                return M % 10 == 0 || M > 10 && M < 20
            }
            function o(M) {
                return b[M].split("_")
            }
            function e(M, b, z, e) {
                var c = M + " ";
                return 1 === M ? c + p(M, b, z[0], e) : b ? c + (O(M) ? o(z)[1] : o(z)[0]) : e ? c + o(z)[1] : c + (O(M) ? o(z)[1] : o(z)[2])
            }
            M.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: z,
                    ss: e,
                    m: p,
                    mm: e,
                    h: p,
                    hh: e,
                    d: p,
                    dd: e,
                    M: p,
                    MM: e,
                    y: p,
                    yy: e
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(M) {
                    return M + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    18237: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            function z(M, b, z) {
                return z ? b % 10 == 1 && b % 100 != 11 ? M[2] : M[3] : b % 10 == 1 && b % 100 != 11 ? M[0] : M[1]
            }
            function p(M, p, O) {
                return M + " " + z(b[O], M, p)
            }
            function O(M, p, O) {
                return z(b[O], M, p)
            }
            function o(M, b) {
                return b ? "dažas sekundes" : "dažām sekundēm"
            }
            M.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: o,
                    ss: p,
                    m: O,
                    mm: p,
                    h: O,
                    hh: p,
                    d: O,
                    dd: p,
                    M: O,
                    MM: p,
                    y: O,
                    yy: p
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    87878: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                words: {
                    ss: ["sekund", "sekunda", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(M, b) {
                    return 1 === M ? b[0] : M >= 2 && M <= 4 ? b[1] : b[2]
                },
                translate: function(M, z, p) {
                    var O = b.words[p];
                    return 1 === p.length ? z ? O[0] : O[1] : M + " " + b.correctGrammaticalCase(M, O)
                }
            };
            M.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    ss: b.translate,
                    m: b.translate,
                    mm: b.translate,
                    h: b.translate,
                    hh: b.translate,
                    d: "dan",
                    dd: b.translate,
                    M: "mjesec",
                    MM: b.translate,
                    y: "godinu",
                    yy: b.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    64234: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    ss: "%d hēkona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    17535: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "една минута",
                    mm: "%d минути",
                    h: "еден час",
                    hh: "%d часа",
                    d: "еден ден",
                    dd: "%d дена",
                    M: "еден месец",
                    MM: "%d месеци",
                    y: "една година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(M) {
                    var b = M % 10
                      , z = M % 100;
                    return 0 === M ? M + "-ев" : 0 === z ? M + "-ен" : z > 10 && z < 20 ? M + "-ти" : 1 === b ? M + "-ви" : 2 === b ? M + "-ри" : 7 === b || 8 === b ? M + "-ми" : M + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    43896: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    ss: "%d സെക്കൻഡ്",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "രാത്രി" === b && M >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? M + 12 : M
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "രാത്രി" : M < 12 ? "രാവിലെ" : M < 17 ? "ഉച്ച കഴിഞ്ഞ്" : M < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        }(z(36105))
    },
    63046: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                switch (z) {
                case "s":
                    return b ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return M + (b ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return M + (b ? " минут" : " минутын");
                case "h":
                case "hh":
                    return M + (b ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return M + (b ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return M + (b ? " сар" : " сарын");
                case "y":
                case "yy":
                    return M + (b ? " жил" : " жилийн");
                default:
                    return M
                }
            }
            M.defineLocale("mn", {
                months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                monthsParseExact: !0,
                weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY оны MMMMын D",
                    LLL: "YYYY оны MMMMын D HH:mm",
                    LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                },
                meridiemParse: /ҮӨ|ҮХ/i,
                isPM: function(M) {
                    return "ҮХ" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ҮӨ" : "ҮХ"
                },
                calendar: {
                    sameDay: "[Өнөөдөр] LT",
                    nextDay: "[Маргааш] LT",
                    nextWeek: "[Ирэх] dddd LT",
                    lastDay: "[Өчигдөр] LT",
                    lastWeek: "[Өнгөрсөн] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s дараа",
                    past: "%s өмнө",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: b,
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + " өдөр";
                    default:
                        return M
                    }
                }
            })
        }(z(36105))
    },
    80927: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , z = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            function p(M, b, z, p) {
                var O = "";
                if (b)
                    switch (z) {
                    case "s":
                        O = "काही सेकंद";
                        break;
                    case "ss":
                        O = "%d सेकंद";
                        break;
                    case "m":
                        O = "एक मिनिट";
                        break;
                    case "mm":
                        O = "%d मिनिटे";
                        break;
                    case "h":
                        O = "एक तास";
                        break;
                    case "hh":
                        O = "%d तास";
                        break;
                    case "d":
                        O = "एक दिवस";
                        break;
                    case "dd":
                        O = "%d दिवस";
                        break;
                    case "M":
                        O = "एक महिना";
                        break;
                    case "MM":
                        O = "%d महिने";
                        break;
                    case "y":
                        O = "एक वर्ष";
                        break;
                    case "yy":
                        O = "%d वर्षे"
                    }
                else
                    switch (z) {
                    case "s":
                        O = "काही सेकंदां";
                        break;
                    case "ss":
                        O = "%d सेकंदां";
                        break;
                    case "m":
                        O = "एका मिनिटा";
                        break;
                    case "mm":
                        O = "%d मिनिटां";
                        break;
                    case "h":
                        O = "एका तासा";
                        break;
                    case "hh":
                        O = "%d तासां";
                        break;
                    case "d":
                        O = "एका दिवसा";
                        break;
                    case "dd":
                        O = "%d दिवसां";
                        break;
                    case "M":
                        O = "एका महिन्या";
                        break;
                    case "MM":
                        O = "%d महिन्यां";
                        break;
                    case "y":
                        O = "एका वर्षा";
                        break;
                    case "yy":
                        O = "%d वर्षां"
                    }
                return O.replace(/%d/i, M)
            }
            M.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: p,
                    ss: p,
                    m: p,
                    mm: p,
                    h: p,
                    hh: p,
                    d: p,
                    dd: p,
                    M: p,
                    MM: p,
                    y: p,
                    yy: p
                },
                preparse: function(M) {
                    return M.replace(/[१२३४५६७८९०]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "पहाटे" === b || "सकाळी" === b ? M : "दुपारी" === b || "सायंकाळी" === b || "रात्री" === b ? M >= 12 ? M : M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M >= 0 && M < 6 ? "पहाटे" : M < 12 ? "सकाळी" : M < 17 ? "दुपारी" : M < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    66332: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "pagi" === b ? M : "tengahari" === b ? M >= 11 ? M : M + 12 : "petang" === b || "malam" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 11 ? "pagi" : M < 15 ? "tengahari" : M < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    37224: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "pagi" === b ? M : "tengahari" === b ? M >= 11 ? M : M + 12 : "petang" === b || "malam" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 11 ? "pagi" : M < 15 ? "tengahari" : M < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    24866: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[Għada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraħ fil-]LT",
                    lastWeek: "dddd [li għadda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "f’ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegħa",
                    hh: "%d siegħat",
                    d: "ġurnata",
                    dd: "%d ġranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    24206: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            }
              , z = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
            M.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    ss: "%d စက္ကန့်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(M) {
                    return M.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    66723: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    w: "en uke",
                    ww: "%d uker",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    45097: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , z = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            M.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(M) {
                    return M.replace(/[१२३४५६७८९०]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "राति" === b ? M < 4 ? M : M + 12 : "बिहान" === b ? M : "दिउँसो" === b ? M >= 10 ? M : M + 12 : "साँझ" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 3 ? "राति" : M < 12 ? "बिहान" : M < 16 ? "दिउँसो" : M < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    ss: "%d सेकेण्ड",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    1355: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , z = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , p = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , O = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            M.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(M) {
                    return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    37529: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , z = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , p = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , O = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            M.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(M, p) {
                    return M ? /-MMM-/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsRegex: O,
                monthsShortRegex: O,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    w: "één week",
                    ww: "%d weken",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(M) {
                    return M + (1 === M || 8 === M || M >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    30296: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    w: "ei veke",
                    ww: "%d veker",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    4802: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("oc-lnc", {
                months: {
                    standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                    format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: "[uèi a] LT",
                    nextDay: "[deman a] LT",
                    nextWeek: "dddd [a] LT",
                    lastDay: "[ièr a] LT",
                    lastWeek: "dddd [passat a] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "unas segondas",
                    ss: "%d segondas",
                    m: "una minuta",
                    mm: "%d minutas",
                    h: "una ora",
                    hh: "%d oras",
                    d: "un jorn",
                    dd: "%d jorns",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(M, b) {
                    var z = 1 === M ? "r" : 2 === M ? "n" : 3 === M ? "r" : 4 === M ? "t" : "è";
                    return "w" !== b && "W" !== b || (z = "a"),
                    M + z
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    77057: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            }
              , z = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
            M.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "[ਅਗਲਾ] dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    ss: "%d ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(M) {
                    return M.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "ਰਾਤ" === b ? M < 4 ? M : M + 12 : "ਸਵੇਰ" === b ? M : "ਦੁਪਹਿਰ" === b ? M >= 10 ? M : M + 12 : "ਸ਼ਾਮ" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "ਰਾਤ" : M < 10 ? "ਸਵੇਰ" : M < 17 ? "ਦੁਪਹਿਰ" : M < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    69850: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
              , z = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
              , p = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
            function O(M) {
                return M % 10 < 5 && M % 10 > 1 && ~~(M / 10) % 10 != 1
            }
            function o(M, b, z) {
                var p = M + " ";
                switch (z) {
                case "ss":
                    return p + (O(M) ? "sekundy" : "sekund");
                case "m":
                    return b ? "minuta" : "minutę";
                case "mm":
                    return p + (O(M) ? "minuty" : "minut");
                case "h":
                    return b ? "godzina" : "godzinę";
                case "hh":
                    return p + (O(M) ? "godziny" : "godzin");
                case "ww":
                    return p + (O(M) ? "tygodnie" : "tygodni");
                case "MM":
                    return p + (O(M) ? "miesiące" : "miesięcy");
                case "yy":
                    return p + (O(M) ? "lata" : "lat")
                }
            }
            M.defineLocale("pl", {
                months: function(M, p) {
                    return M ? /D MMMM/.test(p) ? z[M.month()] : b[M.month()] : b
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: o,
                    m: o,
                    mm: o,
                    h: o,
                    hh: o,
                    d: "1 dzień",
                    dd: "%d dni",
                    w: "tydzień",
                    ww: o,
                    M: "miesiąc",
                    MM: o,
                    y: "rok",
                    yy: o
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    83726: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("pt-br", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                invalidDate: "Data inválida"
            })
        }(z(36105))
    },
    15552: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("pt", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    w: "uma semana",
                    ww: "%d semanas",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    1717: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z) {
                var p = " ";
                return (M % 100 >= 20 || M >= 100 && M % 100 == 0) && (p = " de "),
                M + p + {
                    ss: "secunde",
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    ww: "săptămâni",
                    MM: "luni",
                    yy: "ani"
                }[z]
            }
            M.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    ss: b,
                    m: "un minut",
                    mm: b,
                    h: "o oră",
                    hh: b,
                    d: "o zi",
                    dd: b,
                    w: "o săptămână",
                    ww: b,
                    M: "o lună",
                    MM: b,
                    y: "un an",
                    yy: b
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    79117: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b) {
                var z = M.split("_");
                return b % 10 == 1 && b % 100 != 11 ? z[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? z[1] : z[2]
            }
            function z(M, z, p) {
                return "m" === p ? z ? "минута" : "минуту" : M + " " + b({
                    ss: z ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: z ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[p], +M)
            }
            var p = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            M.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: p,
                longMonthsParse: p,
                shortMonthsParse: p,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                calendar: {
                    sameDay: "[Сегодня, в] LT",
                    nextDay: "[Завтра, в] LT",
                    lastDay: "[Вчера, в] LT",
                    nextWeek: function(M) {
                        if (M.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                        }
                    },
                    lastWeek: function(M) {
                        if (M.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    ss: z,
                    m: z,
                    mm: z,
                    h: "час",
                    hh: z,
                    d: "день",
                    dd: z,
                    w: "неделя",
                    ww: z,
                    M: "месяц",
                    MM: z,
                    y: "год",
                    yy: z
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(M) {
                    return /^(дня|вечера)$/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "ночи" : M < 12 ? "утра" : M < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                        return M + "-й";
                    case "D":
                        return M + "-го";
                    case "w":
                    case "W":
                        return M + "-я";
                    default:
                        return M
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    61742: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
              , z = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            M.defineLocale("sd", {
                months: b,
                monthsShort: b,
                weekdays: z,
                weekdaysShort: z,
                weekdaysMin: z,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(M) {
                    return "شام" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    ss: "%d سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(M) {
                    return M.replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    92049: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    83329: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    ss: "තත්පර %d",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(M) {
                    return M + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(M) {
                    return "ප.ව." === M || "පස් වරු" === M
                },
                meridiem: function(M, b, z) {
                    return M > 11 ? z ? "ප.ව." : "පස් වරු" : z ? "පෙ.ව." : "පෙර වරු"
                }
            })
        }(z(36105))
    },
    27619: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
              , z = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            function p(M) {
                return M > 1 && M < 5
            }
            function O(M, b, z, O) {
                var o = M + " ";
                switch (z) {
                case "s":
                    return b || O ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return b || O ? o + (p(M) ? "sekundy" : "sekúnd") : o + "sekundami";
                case "m":
                    return b ? "minúta" : O ? "minútu" : "minútou";
                case "mm":
                    return b || O ? o + (p(M) ? "minúty" : "minút") : o + "minútami";
                case "h":
                    return b ? "hodina" : O ? "hodinu" : "hodinou";
                case "hh":
                    return b || O ? o + (p(M) ? "hodiny" : "hodín") : o + "hodinami";
                case "d":
                    return b || O ? "deň" : "dňom";
                case "dd":
                    return b || O ? o + (p(M) ? "dni" : "dní") : o + "dňami";
                case "M":
                    return b || O ? "mesiac" : "mesiacom";
                case "MM":
                    return b || O ? o + (p(M) ? "mesiace" : "mesiacov") : o + "mesiacmi";
                case "y":
                    return b || O ? "rok" : "rokom";
                case "yy":
                    return b || O ? o + (p(M) ? "roky" : "rokov") : o + "rokmi"
                }
            }
            M.defineLocale("sk", {
                months: b,
                monthsShort: z,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: O,
                    ss: O,
                    m: O,
                    mm: O,
                    h: O,
                    hh: O,
                    d: O,
                    dd: O,
                    M: O,
                    MM: O,
                    y: O,
                    yy: O
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    76707: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = M + " ";
                switch (z) {
                case "s":
                    return b || p ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return O += 1 === M ? b ? "sekundo" : "sekundi" : 2 === M ? b || p ? "sekundi" : "sekundah" : M < 5 ? b || p ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return b ? "ena minuta" : "eno minuto";
                case "mm":
                    return O += 1 === M ? b ? "minuta" : "minuto" : 2 === M ? b || p ? "minuti" : "minutama" : M < 5 ? b || p ? "minute" : "minutami" : b || p ? "minut" : "minutami";
                case "h":
                    return b ? "ena ura" : "eno uro";
                case "hh":
                    return O += 1 === M ? b ? "ura" : "uro" : 2 === M ? b || p ? "uri" : "urama" : M < 5 ? b || p ? "ure" : "urami" : b || p ? "ur" : "urami";
                case "d":
                    return b || p ? "en dan" : "enim dnem";
                case "dd":
                    return O += 1 === M ? b || p ? "dan" : "dnem" : 2 === M ? b || p ? "dni" : "dnevoma" : b || p ? "dni" : "dnevi";
                case "M":
                    return b || p ? "en mesec" : "enim mesecem";
                case "MM":
                    return O += 1 === M ? b || p ? "mesec" : "mesecem" : 2 === M ? b || p ? "meseca" : "mesecema" : M < 5 ? b || p ? "mesece" : "meseci" : b || p ? "mesecev" : "meseci";
                case "y":
                    return b || p ? "eno leto" : "enim letom";
                case "yy":
                    return O += 1 === M ? b || p ? "leto" : "letom" : 2 === M ? b || p ? "leti" : "letoma" : M < 5 ? b || p ? "leta" : "leti" : b || p ? "let" : "leti"
                }
            }
            M.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: b,
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    84281: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(M) {
                    return "M" === M.charAt(0)
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    13408: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                words: {
                    ss: ["секунда", "секунде", "секунди"],
                    m: ["један минут", "једног минута"],
                    mm: ["минут", "минута", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    d: ["један дан", "једног дана"],
                    dd: ["дан", "дана", "дана"],
                    M: ["један месец", "једног месеца"],
                    MM: ["месец", "месеца", "месеци"],
                    y: ["једну годину", "једне године"],
                    yy: ["годину", "године", "година"]
                },
                correctGrammaticalCase: function(M, b) {
                    return M % 10 >= 1 && M % 10 <= 4 && (M % 100 < 10 || M % 100 >= 20) ? M % 10 == 1 ? b[0] : b[1] : b[2]
                },
                translate: function(M, z, p, O) {
                    var o, e = b.words[p];
                    return 1 === p.length ? "y" === p && z ? "једна година" : O || z ? e[0] : e[1] : (o = b.correctGrammaticalCase(M, e),
                    "yy" === p && z && "годину" === o ? M + " година" : M + " " + o)
                }
            };
            M.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    ss: b.translate,
                    m: b.translate,
                    mm: b.translate,
                    h: b.translate,
                    hh: b.translate,
                    d: b.translate,
                    dd: b.translate,
                    M: b.translate,
                    MM: b.translate,
                    y: b.translate,
                    yy: b.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    60436: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                words: {
                    ss: ["sekunda", "sekunde", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    d: ["jedan dan", "jednog dana"],
                    dd: ["dan", "dana", "dana"],
                    M: ["jedan mesec", "jednog meseca"],
                    MM: ["mesec", "meseca", "meseci"],
                    y: ["jednu godinu", "jedne godine"],
                    yy: ["godinu", "godine", "godina"]
                },
                correctGrammaticalCase: function(M, b) {
                    return M % 10 >= 1 && M % 10 <= 4 && (M % 100 < 10 || M % 100 >= 20) ? M % 10 == 1 ? b[0] : b[1] : b[2]
                },
                translate: function(M, z, p, O) {
                    var o, e = b.words[p];
                    return 1 === p.length ? "y" === p && z ? "jedna godina" : O || z ? e[0] : e[1] : (o = b.correctGrammaticalCase(M, e),
                    "yy" === p && z && "godinu" === o ? M + " godina" : M + " " + o)
                }
            };
            M.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: b.translate,
                    m: b.translate,
                    mm: b.translate,
                    h: b.translate,
                    hh: b.translate,
                    d: b.translate,
                    dd: b.translate,
                    M: b.translate,
                    MM: b.translate,
                    y: b.translate,
                    yy: b.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    27500: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(M, b, z) {
                    return M < 11 ? "ekuseni" : M < 15 ? "emini" : M < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "ekuseni" === b ? M : "emini" === b ? M >= 11 ? M : M + 12 : "entsambama" === b || "ebusuku" === b ? 0 === M ? 0 : M + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    6950: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? ":e" : 1 === b || 2 === b ? ":a" : ":e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    54222: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "hh:mm A",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "siku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    73746: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            }
              , z = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
            M.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    ss: "%d விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function(M) {
                    return M + "வது"
                },
                preparse: function(M) {
                    return M.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(M) {
                        return z[M]
                    }
                    ))
                },
                postformat: function(M) {
                    return M.replace(/\d/g, (function(M) {
                        return b[M]
                    }
                    ))
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(M, b, z) {
                    return M < 2 ? " யாமம்" : M < 6 ? " வைகறை" : M < 10 ? " காலை" : M < 14 ? " நண்பகல்" : M < 18 ? " எற்பாடு" : M < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "யாமம்" === b ? M < 2 ? M : M + 12 : "வைகறை" === b || "காலை" === b || "நண்பகல்" === b && M >= 10 ? M : M + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    1130: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    ss: "%d సెకన్లు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "రాత్రి" === b ? M < 4 ? M : M + 12 : "ఉదయం" === b ? M : "మధ్యాహ్నం" === b ? M >= 10 ? M : M + 12 : "సాయంత్రం" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "రాత్రి" : M < 10 ? "ఉదయం" : M < 17 ? "మధ్యాహ్నం" : M < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(z(36105))
    },
    34740: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "segundu balun",
                    ss: "segundu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    13378: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                0: "-ум",
                1: "-ум",
                2: "-юм",
                3: "-юм",
                4: "-ум",
                5: "-ум",
                6: "-ум",
                7: "-ум",
                8: "-ум",
                9: "-ум",
                10: "-ум",
                12: "-ум",
                13: "-ум",
                20: "-ум",
                30: "-юм",
                40: "-ум",
                50: "-ум",
                60: "-ум",
                70: "-ум",
                80: "-ум",
                90: "-ум",
                100: "-ум"
            };
            M.defineLocale("tg", {
                months: {
                    format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                    standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                },
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Имрӯз соати] LT",
                    nextDay: "[Фардо соати] LT",
                    lastDay: "[Дирӯз соати] LT",
                    nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                    lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "баъди %s",
                    past: "%s пеш",
                    s: "якчанд сония",
                    m: "як дақиқа",
                    mm: "%d дақиқа",
                    h: "як соат",
                    hh: "%d соат",
                    d: "як рӯз",
                    dd: "%d рӯз",
                    M: "як моҳ",
                    MM: "%d моҳ",
                    y: "як сол",
                    yy: "%d сол"
                },
                meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "шаб" === b ? M < 4 ? M : M + 12 : "субҳ" === b ? M : "рӯз" === b ? M >= 11 ? M : M + 12 : "бегоҳ" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "шаб" : M < 11 ? "субҳ" : M < 16 ? "рӯз" : M < 19 ? "бегоҳ" : "шаб"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                ordinal: function(M) {
                    var z = M % 10
                      , p = M >= 100 ? 100 : null;
                    return M + (b[M] || b[z] || b[p])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    20628: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(M) {
                    return "หลังเที่ยง" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    w: "1 สัปดาห์",
                    ww: "%d สัปดาห์",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        }(z(36105))
    },
    92622: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "'inji",
                5: "'inji",
                8: "'inji",
                70: "'inji",
                80: "'inji",
                2: "'nji",
                7: "'nji",
                20: "'nji",
                50: "'nji",
                3: "'ünji",
                4: "'ünji",
                100: "'ünji",
                6: "'njy",
                9: "'unjy",
                10: "'unjy",
                30: "'unjy",
                60: "'ynjy",
                90: "'ynjy"
            };
            M.defineLocale("tk", {
                months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
                monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
                weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
                weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
                weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün sagat] LT",
                    nextDay: "[ertir sagat] LT",
                    nextWeek: "[indiki] dddd [sagat] LT",
                    lastDay: "[düýn] LT",
                    lastWeek: "[geçen] dddd [sagat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s soň",
                    past: "%s öň",
                    s: "birnäçe sekunt",
                    m: "bir minut",
                    mm: "%d minut",
                    h: "bir sagat",
                    hh: "%d sagat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir aý",
                    MM: "%d aý",
                    y: "bir ýyl",
                    yy: "%d ýyl"
                },
                ordinal: function(M, z) {
                    switch (z) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return M;
                    default:
                        if (0 === M)
                            return M + "'unjy";
                        var p = M % 10
                          , O = M % 100 - p
                          , o = M >= 100 ? 100 : null;
                        return M + (b[p] || b[O] || b[o])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    30100: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(M) {
                    return M
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    22871: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            function z(M) {
                var b = M;
                return b = -1 !== M.indexOf("jaj") ? b.slice(0, -3) + "leS" : -1 !== M.indexOf("jar") ? b.slice(0, -3) + "waQ" : -1 !== M.indexOf("DIS") ? b.slice(0, -3) + "nem" : b + " pIq"
            }
            function p(M) {
                var b = M;
                return b = -1 !== M.indexOf("jaj") ? b.slice(0, -3) + "Hu’" : -1 !== M.indexOf("jar") ? b.slice(0, -3) + "wen" : -1 !== M.indexOf("DIS") ? b.slice(0, -3) + "ben" : b + " ret"
            }
            function O(M, b, z, p) {
                var O = o(M);
                switch (z) {
                case "ss":
                    return O + " lup";
                case "mm":
                    return O + " tup";
                case "hh":
                    return O + " rep";
                case "dd":
                    return O + " jaj";
                case "MM":
                    return O + " jar";
                case "yy":
                    return O + " DIS"
                }
            }
            function o(M) {
                var z = Math.floor(M % 1e3 / 100)
                  , p = Math.floor(M % 100 / 10)
                  , O = M % 10
                  , o = "";
                return z > 0 && (o += b[z] + "vatlh"),
                p > 0 && (o += ("" !== o ? " " : "") + b[p] + "maH"),
                O > 0 && (o += ("" !== o ? " " : "") + b[O]),
                "" === o ? "pagh" : o
            }
            M.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: z,
                    past: p,
                    s: "puS lup",
                    ss: O,
                    m: "wa’ tup",
                    mm: O,
                    h: "wa’ rep",
                    hh: O,
                    d: "wa’ jaj",
                    dd: O,
                    M: "wa’ jar",
                    MM: O,
                    y: "wa’ DIS",
                    yy: O
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    33600: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            M.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                meridiem: function(M, b, z) {
                    return M < 12 ? z ? "öö" : "ÖÖ" : z ? "ös" : "ÖS"
                },
                meridiemParse: /öö|ÖÖ|ös|ÖS/,
                isPM: function(M) {
                    return "ös" === M || "ÖS" === M
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    w: "bir hafta",
                    ww: "%d hafta",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinal: function(M, z) {
                    switch (z) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return M;
                    default:
                        if (0 === M)
                            return M + "'ıncı";
                        var p = M % 10
                          , O = M % 100 - p
                          , o = M >= 100 ? 100 : null;
                        return M + (b[p] || b[O] || b[o])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    18985: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b, z, p) {
                var O = {
                    s: ["viensas secunds", "'iensas secunds"],
                    ss: [M + " secunds", M + " secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [M + " míuts", M + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [M + " þoras", M + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [M + " ziuas", M + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [M + " mesen", M + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [M + " ars", M + " ars"]
                };
                return p || b ? O[z][0] : O[z][1]
            }
            M.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(M) {
                    return "d'o" === M.toLowerCase()
                },
                meridiem: function(M, b, z) {
                    return M > 11 ? z ? "d'o" : "D'O" : z ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: b,
                    ss: b,
                    m: b,
                    mm: b,
                    h: b,
                    hh: b,
                    d: b,
                    dd: b,
                    M: b,
                    MM: b,
                    y: b,
                    yy: b
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    51145: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    3627: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    ss: "%d ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(z(36105))
    },
    4790: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("ug-cn", {
                months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                    LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                    LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                },
                meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "يېرىم كېچە" === b || "سەھەر" === b || "چۈشتىن بۇرۇن" === b ? M : "چۈشتىن كېيىن" === b || "كەچ" === b ? M + 12 : M >= 11 ? M : M + 12
                },
                meridiem: function(M, b, z) {
                    var p = 100 * M + b;
                    return p < 600 ? "يېرىم كېچە" : p < 900 ? "سەھەر" : p < 1130 ? "چۈشتىن بۇرۇن" : p < 1230 ? "چۈش" : p < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                },
                calendar: {
                    sameDay: "[بۈگۈن سائەت] LT",
                    nextDay: "[ئەتە سائەت] LT",
                    nextWeek: "[كېلەركى] dddd [سائەت] LT",
                    lastDay: "[تۆنۈگۈن] LT",
                    lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s كېيىن",
                    past: "%s بۇرۇن",
                    s: "نەچچە سېكونت",
                    ss: "%d سېكونت",
                    m: "بىر مىنۇت",
                    mm: "%d مىنۇت",
                    h: "بىر سائەت",
                    hh: "%d سائەت",
                    d: "بىر كۈن",
                    dd: "%d كۈن",
                    M: "بىر ئاي",
                    MM: "%d ئاي",
                    y: "بىر يىل",
                    yy: "%d يىل"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "-كۈنى";
                    case "w":
                    case "W":
                        return M + "-ھەپتە";
                    default:
                        return M
                    }
                },
                preparse: function(M) {
                    return M.replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    97712: function(M, b, z) {
        !function(M) {
            "use strict";
            function b(M, b) {
                var z = M.split("_");
                return b % 10 == 1 && b % 100 != 11 ? z[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? z[1] : z[2]
            }
            function z(M, z, p) {
                return "m" === p ? z ? "хвилина" : "хвилину" : "h" === p ? z ? "година" : "годину" : M + " " + b({
                    ss: z ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: z ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: z ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[p], +M)
            }
            function p(M, b) {
                var z = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === M ? z.nominative.slice(1, 7).concat(z.nominative.slice(0, 1)) : M ? z[/(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"][M.day()] : z.nominative
            }
            function O(M) {
                return function() {
                    return M + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            M.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: p,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: O("[Сьогодні "),
                    nextDay: O("[Завтра "),
                    lastDay: O("[Вчора "),
                    nextWeek: O("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return O("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return O("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    ss: z,
                    m: z,
                    mm: z,
                    h: "годину",
                    hh: z,
                    d: "день",
                    dd: z,
                    M: "місяць",
                    MM: z,
                    y: "рік",
                    yy: z
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(M) {
                    return /^(дня|вечора)$/.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 4 ? "ночі" : M < 12 ? "ранку" : M < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return M + "-й";
                    case "D":
                        return M + "-го";
                    default:
                        return M
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    99529: function(M, b, z) {
        !function(M) {
            "use strict";
            var b = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
              , z = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            M.defineLocale("ur", {
                months: b,
                monthsShort: b,
                weekdays: z,
                weekdaysShort: z,
                weekdaysMin: z,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(M) {
                    return "شام" === M
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    ss: "%d سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function(M) {
                    return M.replace(/،/g, ",")
                },
                postformat: function(M) {
                    return M.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    61737: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    99141: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    ss: "%d фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(z(36105))
    },
    98205: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(M) {
                    return /^ch$/i.test(M)
                },
                meridiem: function(M, b, z) {
                    return M < 12 ? z ? "sa" : "SA" : z ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần trước lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    ss: "%d giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    w: "một tuần",
                    ww: "%d tuần",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(M) {
                    return M
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    20697: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    ss: "%d s~écóñ~ds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 == ~~(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    37826: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    ss: "aayá %d",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    83994: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "凌晨" === b || "早上" === b || "上午" === b ? M : "下午" === b || "晚上" === b ? M + 12 : M >= 11 ? M : M + 12
                },
                meridiem: function(M, b, z) {
                    var p = 100 * M + b;
                    return p < 600 ? "凌晨" : p < 900 ? "早上" : p < 1130 ? "上午" : p < 1230 ? "中午" : p < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: function(M) {
                        return M.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                    },
                    lastDay: "[昨天]LT",
                    lastWeek: function(M) {
                        return this.week() !== M.week() ? "[上]dddLT" : "[本]dddLT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "日";
                    case "M":
                        return M + "月";
                    case "w":
                    case "W":
                        return M + "周";
                    default:
                        return M
                    }
                },
                relativeTime: {
                    future: "%s后",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    w: "1 周",
                    ww: "%d 周",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(z(36105))
    },
    36892: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "凌晨" === b || "早上" === b || "上午" === b ? M : "中午" === b ? M >= 11 ? M : M + 12 : "下午" === b || "晚上" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    var p = 100 * M + b;
                    return p < 600 ? "凌晨" : p < 900 ? "早上" : p < 1200 ? "上午" : 1200 === p ? "中午" : p < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "日";
                    case "M":
                        return M + "月";
                    case "w":
                    case "W":
                        return M + "週";
                    default:
                        return M
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(z(36105))
    },
    43884: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("zh-mo", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "D/M/YYYY",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "凌晨" === b || "早上" === b || "上午" === b ? M : "中午" === b ? M >= 11 ? M : M + 12 : "下午" === b || "晚上" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    var p = 100 * M + b;
                    return p < 600 ? "凌晨" : p < 900 ? "早上" : p < 1130 ? "上午" : p < 1230 ? "中午" : p < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "日";
                    case "M":
                        return M + "月";
                    case "w":
                    case "W":
                        return M + "週";
                    default:
                        return M
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(z(36105))
    },
    85136: function(M, b, z) {
        !function(M) {
            "use strict";
            M.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(M, b) {
                    return 12 === M && (M = 0),
                    "凌晨" === b || "早上" === b || "上午" === b ? M : "中午" === b ? M >= 11 ? M : M + 12 : "下午" === b || "晚上" === b ? M + 12 : void 0
                },
                meridiem: function(M, b, z) {
                    var p = 100 * M + b;
                    return p < 600 ? "凌晨" : p < 900 ? "早上" : p < 1130 ? "上午" : p < 1230 ? "中午" : p < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(M, b) {
                    switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return M + "日";
                    case "M":
                        return M + "月";
                    case "w":
                    case "W":
                        return M + "週";
                    default:
                        return M
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(z(36105))
    },
    36105: function(M, b, z) {
        (M = z.nmd(M)).exports = function() {
            "use strict";
            var b, p;
            function O() {
                return b.apply(null, arguments)
            }
            function o(M) {
                b = M
            }
            function e(M) {
                return M instanceof Array || "[object Array]" === Object.prototype.toString.call(M)
            }
            function c(M) {
                return null != M && "[object Object]" === Object.prototype.toString.call(M)
            }
            function n(M, b) {
                return Object.prototype.hasOwnProperty.call(M, b)
            }
            function t(M) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(M).length;
                var b;
                for (b in M)
                    if (n(M, b))
                        return !1;
                return !0
            }
            function a(M) {
                return void 0 === M
            }
            function A(M) {
                return "number" == typeof M || "[object Number]" === Object.prototype.toString.call(M)
            }
            function d(M) {
                return M instanceof Date || "[object Date]" === Object.prototype.toString.call(M)
            }
            function r(M, b) {
                var z, p = [], O = M.length;
                for (z = 0; z < O; ++z)
                    p.push(b(M[z], z));
                return p
            }
            function i(M, b) {
                for (var z in b)
                    n(b, z) && (M[z] = b[z]);
                return n(b, "toString") && (M.toString = b.toString),
                n(b, "valueOf") && (M.valueOf = b.valueOf),
                M
            }
            function q(M, b, z, p) {
                return Jz(M, b, z, p, !0).utc()
            }
            function s() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }
            function u(M) {
                return null == M._pf && (M._pf = s()),
                M._pf
            }
            function W(M) {
                if (null == M._isValid) {
                    var b = u(M)
                      , z = p.call(b.parsedDateParts, (function(M) {
                        return null != M
                    }
                    ))
                      , O = !isNaN(M._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidEra && !b.invalidMonth && !b.invalidWeekday && !b.weekdayMismatch && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && z);
                    if (M._strict && (O = O && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour),
                    null != Object.isFrozen && Object.isFrozen(M))
                        return O;
                    M._isValid = O
                }
                return M._isValid
            }
            function l(M) {
                var b = q(NaN);
                return null != M ? i(u(b), M) : u(b).userInvalidated = !0,
                b
            }
            p = Array.prototype.some ? Array.prototype.some : function(M) {
                var b, z = Object(this), p = z.length >>> 0;
                for (b = 0; b < p; b++)
                    if (b in z && M.call(this, z[b], b, z))
                        return !0;
                return !1
            }
            ;
            var f = O.momentProperties = []
              , _ = !1;
            function L(M, b) {
                var z, p, O, o = f.length;
                if (a(b._isAMomentObject) || (M._isAMomentObject = b._isAMomentObject),
                a(b._i) || (M._i = b._i),
                a(b._f) || (M._f = b._f),
                a(b._l) || (M._l = b._l),
                a(b._strict) || (M._strict = b._strict),
                a(b._tzm) || (M._tzm = b._tzm),
                a(b._isUTC) || (M._isUTC = b._isUTC),
                a(b._offset) || (M._offset = b._offset),
                a(b._pf) || (M._pf = u(b)),
                a(b._locale) || (M._locale = b._locale),
                o > 0)
                    for (z = 0; z < o; z++)
                        a(O = b[p = f[z]]) || (M[p] = O);
                return M
            }
            function m(M) {
                L(this, M),
                this._d = new Date(null != M._d ? M._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === _ && (_ = !0,
                O.updateOffset(this),
                _ = !1)
            }
            function R(M) {
                return M instanceof m || null != M && null != M._isAMomentObject
            }
            function h(M) {
                !1 === O.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
            }
            function y(M, b) {
                var z = !0;
                return i((function() {
                    if (null != O.deprecationHandler && O.deprecationHandler(null, M),
                    z) {
                        var p, o, e, c = [], t = arguments.length;
                        for (o = 0; o < t; o++) {
                            if (p = "",
                            "object" == typeof arguments[o]) {
                                for (e in p += "\n[" + o + "] ",
                                arguments[0])
                                    n(arguments[0], e) && (p += e + ": " + arguments[0][e] + ", ");
                                p = p.slice(0, -2)
                            } else
                                p = arguments[o];
                            c.push(p)
                        }
                        h(M + "\nArguments: " + Array.prototype.slice.call(c).join("") + "\n" + (new Error).stack),
                        z = !1
                    }
                    return b.apply(this, arguments)
                }
                ), b)
            }
            var N, B = {};
            function T(M, b) {
                null != O.deprecationHandler && O.deprecationHandler(M, b),
                B[M] || (h(b),
                B[M] = !0)
            }
            function g(M) {
                return "undefined" != typeof Function && M instanceof Function || "[object Function]" === Object.prototype.toString.call(M)
            }
            function X(M) {
                var b, z;
                for (z in M)
                    n(M, z) && (g(b = M[z]) ? this[z] = b : this["_" + z] = b);
                this._config = M,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            function Y(M, b) {
                var z, p = i({}, M);
                for (z in b)
                    n(b, z) && (c(M[z]) && c(b[z]) ? (p[z] = {},
                    i(p[z], M[z]),
                    i(p[z], b[z])) : null != b[z] ? p[z] = b[z] : delete p[z]);
                for (z in M)
                    n(M, z) && !n(b, z) && c(M[z]) && (p[z] = i({}, p[z]));
                return p
            }
            function v(M) {
                null != M && this.set(M)
            }
            O.suppressDeprecationWarnings = !1,
            O.deprecationHandler = null,
            N = Object.keys ? Object.keys : function(M) {
                var b, z = [];
                for (b in M)
                    n(M, b) && z.push(b);
                return z
            }
            ;
            var k = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };
            function D(M, b, z) {
                var p = this._calendar[M] || this._calendar.sameElse;
                return g(p) ? p.call(b, z) : p
            }
            function w(M, b, z) {
                var p = "" + Math.abs(M)
                  , O = b - p.length;
                return (M >= 0 ? z ? "+" : "" : "-") + Math.pow(10, Math.max(0, O)).toString().substr(1) + p
            }
            var S = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , E = {}
              , x = {};
            function j(M, b, z, p) {
                var O = p;
                "string" == typeof p && (O = function() {
                    return this[p]()
                }
                ),
                M && (x[M] = O),
                b && (x[b[0]] = function() {
                    return w(O.apply(this, arguments), b[1], b[2])
                }
                ),
                z && (x[z] = function() {
                    return this.localeData().ordinal(O.apply(this, arguments), M)
                }
                )
            }
            function P(M) {
                return M.match(/\[[\s\S]/) ? M.replace(/^\[|\]$/g, "") : M.replace(/\\/g, "")
            }
            function C(M) {
                var b, z, p = M.match(S);
                for (b = 0,
                z = p.length; b < z; b++)
                    x[p[b]] ? p[b] = x[p[b]] : p[b] = P(p[b]);
                return function(b) {
                    var O, o = "";
                    for (O = 0; O < z; O++)
                        o += g(p[O]) ? p[O].call(b, M) : p[O];
                    return o
                }
            }
            function F(M, b) {
                return M.isValid() ? (b = I(b, M.localeData()),
                E[b] = E[b] || C(b),
                E[b](M)) : M.localeData().invalidDate()
            }
            function I(M, b) {
                var z = 5;
                function p(M) {
                    return b.longDateFormat(M) || M
                }
                for (H.lastIndex = 0; z >= 0 && H.test(M); )
                    M = M.replace(H, p),
                    H.lastIndex = 0,
                    z -= 1;
                return M
            }
            var U = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            function G(M) {
                var b = this._longDateFormat[M]
                  , z = this._longDateFormat[M.toUpperCase()];
                return b || !z ? b : (this._longDateFormat[M] = z.match(S).map((function(M) {
                    return "MMMM" === M || "MM" === M || "DD" === M || "dddd" === M ? M.slice(1) : M
                }
                )).join(""),
                this._longDateFormat[M])
            }
            var J = "Invalid date";
            function K() {
                return this._invalidDate
            }
            var V = "%d"
              , Q = /\d{1,2}/;
            function $(M) {
                return this._ordinal.replace("%d", M)
            }
            var Z = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function MM(M, b, z, p) {
                var O = this._relativeTime[z];
                return g(O) ? O(M, b, z, p) : O.replace(/%d/i, M)
            }
            function bM(M, b) {
                var z = this._relativeTime[M > 0 ? "future" : "past"];
                return g(z) ? z(b) : z.replace(/%s/i, b)
            }
            var zM = {};
            function pM(M, b) {
                var z = M.toLowerCase();
                zM[z] = zM[z + "s"] = zM[b] = M
            }
            function OM(M) {
                return "string" == typeof M ? zM[M] || zM[M.toLowerCase()] : void 0
            }
            function oM(M) {
                var b, z, p = {};
                for (z in M)
                    n(M, z) && (b = OM(z)) && (p[b] = M[z]);
                return p
            }
            var eM = {};
            function cM(M, b) {
                eM[M] = b
            }
            function nM(M) {
                var b, z = [];
                for (b in M)
                    n(M, b) && z.push({
                        unit: b,
                        priority: eM[b]
                    });
                return z.sort((function(M, b) {
                    return M.priority - b.priority
                }
                )),
                z
            }
            function tM(M) {
                return M % 4 == 0 && M % 100 != 0 || M % 400 == 0
            }
            function aM(M) {
                return M < 0 ? Math.ceil(M) || 0 : Math.floor(M)
            }
            function AM(M) {
                var b = +M
                  , z = 0;
                return 0 !== b && isFinite(b) && (z = aM(b)),
                z
            }
            function dM(M, b) {
                return function(z) {
                    return null != z ? (iM(this, M, z),
                    O.updateOffset(this, b),
                    this) : rM(this, M)
                }
            }
            function rM(M, b) {
                return M.isValid() ? M._d["get" + (M._isUTC ? "UTC" : "") + b]() : NaN
            }
            function iM(M, b, z) {
                M.isValid() && !isNaN(z) && ("FullYear" === b && tM(M.year()) && 1 === M.month() && 29 === M.date() ? (z = AM(z),
                M._d["set" + (M._isUTC ? "UTC" : "") + b](z, M.month(), Mb(z, M.month()))) : M._d["set" + (M._isUTC ? "UTC" : "") + b](z))
            }
            function qM(M) {
                return g(this[M = OM(M)]) ? this[M]() : this
            }
            function sM(M, b) {
                if ("object" == typeof M) {
                    var z, p = nM(M = oM(M)), O = p.length;
                    for (z = 0; z < O; z++)
                        this[p[z].unit](M[p[z].unit])
                } else if (g(this[M = OM(M)]))
                    return this[M](b);
                return this
            }
            var uM, WM = /\d/, lM = /\d\d/, fM = /\d{3}/, _M = /\d{4}/, LM = /[+-]?\d{6}/, mM = /\d\d?/, RM = /\d\d\d\d?/, hM = /\d\d\d\d\d\d?/, yM = /\d{1,3}/, NM = /\d{1,4}/, BM = /[+-]?\d{1,6}/, TM = /\d+/, gM = /[+-]?\d+/, XM = /Z|[+-]\d\d:?\d\d/gi, YM = /Z|[+-]\d\d(?::?\d\d)?/gi, vM = /[+-]?\d+(\.\d{1,3})?/, kM = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
            function DM(M, b, z) {
                uM[M] = g(b) ? b : function(M, p) {
                    return M && z ? z : b
                }
            }
            function wM(M, b) {
                return n(uM, M) ? uM[M](b._strict, b._locale) : new RegExp(SM(M))
            }
            function SM(M) {
                return HM(M.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(M, b, z, p, O) {
                    return b || z || p || O
                }
                )))
            }
            function HM(M) {
                return M.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            uM = {};
            var EM = {};
            function xM(M, b) {
                var z, p, O = b;
                for ("string" == typeof M && (M = [M]),
                A(b) && (O = function(M, z) {
                    z[b] = AM(M)
                }
                ),
                p = M.length,
                z = 0; z < p; z++)
                    EM[M[z]] = O
            }
            function jM(M, b) {
                xM(M, (function(M, z, p, O) {
                    p._w = p._w || {},
                    b(M, p._w, p, O)
                }
                ))
            }
            function PM(M, b, z) {
                null != b && n(EM, M) && EM[M](b, z._a, z, M)
            }
            var CM, FM = 0, IM = 1, UM = 2, GM = 3, JM = 4, KM = 5, VM = 6, QM = 7, $M = 8;
            function ZM(M, b) {
                return (M % b + b) % b
            }
            function Mb(M, b) {
                if (isNaN(M) || isNaN(b))
                    return NaN;
                var z = ZM(b, 12);
                return M += (b - z) / 12,
                1 === z ? tM(M) ? 29 : 28 : 31 - z % 7 % 2
            }
            CM = Array.prototype.indexOf ? Array.prototype.indexOf : function(M) {
                var b;
                for (b = 0; b < this.length; ++b)
                    if (this[b] === M)
                        return b;
                return -1
            }
            ,
            j("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            }
            )),
            j("MMM", 0, 0, (function(M) {
                return this.localeData().monthsShort(this, M)
            }
            )),
            j("MMMM", 0, 0, (function(M) {
                return this.localeData().months(this, M)
            }
            )),
            pM("month", "M"),
            cM("month", 8),
            DM("M", mM),
            DM("MM", mM, lM),
            DM("MMM", (function(M, b) {
                return b.monthsShortRegex(M)
            }
            )),
            DM("MMMM", (function(M, b) {
                return b.monthsRegex(M)
            }
            )),
            xM(["M", "MM"], (function(M, b) {
                b[IM] = AM(M) - 1
            }
            )),
            xM(["MMM", "MMMM"], (function(M, b, z, p) {
                var O = z._locale.monthsParse(M, p, z._strict);
                null != O ? b[IM] = O : u(z).invalidMonth = M
            }
            ));
            var bb = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , zb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , pb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , Ob = kM
              , ob = kM;
            function eb(M, b) {
                return M ? e(this._months) ? this._months[M.month()] : this._months[(this._months.isFormat || pb).test(b) ? "format" : "standalone"][M.month()] : e(this._months) ? this._months : this._months.standalone
            }
            function cb(M, b) {
                return M ? e(this._monthsShort) ? this._monthsShort[M.month()] : this._monthsShort[pb.test(b) ? "format" : "standalone"][M.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            function nb(M, b, z) {
                var p, O, o, e = M.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    p = 0; p < 12; ++p)
                        o = q([2e3, p]),
                        this._shortMonthsParse[p] = this.monthsShort(o, "").toLocaleLowerCase(),
                        this._longMonthsParse[p] = this.months(o, "").toLocaleLowerCase();
                return z ? "MMM" === b ? -1 !== (O = CM.call(this._shortMonthsParse, e)) ? O : null : -1 !== (O = CM.call(this._longMonthsParse, e)) ? O : null : "MMM" === b ? -1 !== (O = CM.call(this._shortMonthsParse, e)) || -1 !== (O = CM.call(this._longMonthsParse, e)) ? O : null : -1 !== (O = CM.call(this._longMonthsParse, e)) || -1 !== (O = CM.call(this._shortMonthsParse, e)) ? O : null
            }
            function tb(M, b, z) {
                var p, O, o;
                if (this._monthsParseExact)
                    return nb.call(this, M, b, z);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                p = 0; p < 12; p++) {
                    if (O = q([2e3, p]),
                    z && !this._longMonthsParse[p] && (this._longMonthsParse[p] = new RegExp("^" + this.months(O, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[p] = new RegExp("^" + this.monthsShort(O, "").replace(".", "") + "$","i")),
                    z || this._monthsParse[p] || (o = "^" + this.months(O, "") + "|^" + this.monthsShort(O, ""),
                    this._monthsParse[p] = new RegExp(o.replace(".", ""),"i")),
                    z && "MMMM" === b && this._longMonthsParse[p].test(M))
                        return p;
                    if (z && "MMM" === b && this._shortMonthsParse[p].test(M))
                        return p;
                    if (!z && this._monthsParse[p].test(M))
                        return p
                }
            }
            function ab(M, b) {
                var z;
                if (!M.isValid())
                    return M;
                if ("string" == typeof b)
                    if (/^\d+$/.test(b))
                        b = AM(b);
                    else if (!A(b = M.localeData().monthsParse(b)))
                        return M;
                return z = Math.min(M.date(), Mb(M.year(), b)),
                M._d["set" + (M._isUTC ? "UTC" : "") + "Month"](b, z),
                M
            }
            function Ab(M) {
                return null != M ? (ab(this, M),
                O.updateOffset(this, !0),
                this) : rM(this, "Month")
            }
            function db() {
                return Mb(this.year(), this.month())
            }
            function rb(M) {
                return this._monthsParseExact ? (n(this, "_monthsRegex") || qb.call(this),
                M ? this._monthsShortStrictRegex : this._monthsShortRegex) : (n(this, "_monthsShortRegex") || (this._monthsShortRegex = Ob),
                this._monthsShortStrictRegex && M ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function ib(M) {
                return this._monthsParseExact ? (n(this, "_monthsRegex") || qb.call(this),
                M ? this._monthsStrictRegex : this._monthsRegex) : (n(this, "_monthsRegex") || (this._monthsRegex = ob),
                this._monthsStrictRegex && M ? this._monthsStrictRegex : this._monthsRegex)
            }
            function qb() {
                function M(M, b) {
                    return b.length - M.length
                }
                var b, z, p = [], O = [], o = [];
                for (b = 0; b < 12; b++)
                    z = q([2e3, b]),
                    p.push(this.monthsShort(z, "")),
                    O.push(this.months(z, "")),
                    o.push(this.months(z, "")),
                    o.push(this.monthsShort(z, ""));
                for (p.sort(M),
                O.sort(M),
                o.sort(M),
                b = 0; b < 12; b++)
                    p[b] = HM(p[b]),
                    O[b] = HM(O[b]);
                for (b = 0; b < 24; b++)
                    o[b] = HM(o[b]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + O.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + p.join("|") + ")","i")
            }
            function sb(M) {
                return tM(M) ? 366 : 365
            }
            j("Y", 0, 0, (function() {
                var M = this.year();
                return M <= 9999 ? w(M, 4) : "+" + M
            }
            )),
            j(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            }
            )),
            j(0, ["YYYY", 4], 0, "year"),
            j(0, ["YYYYY", 5], 0, "year"),
            j(0, ["YYYYYY", 6, !0], 0, "year"),
            pM("year", "y"),
            cM("year", 1),
            DM("Y", gM),
            DM("YY", mM, lM),
            DM("YYYY", NM, _M),
            DM("YYYYY", BM, LM),
            DM("YYYYYY", BM, LM),
            xM(["YYYYY", "YYYYYY"], FM),
            xM("YYYY", (function(M, b) {
                b[FM] = 2 === M.length ? O.parseTwoDigitYear(M) : AM(M)
            }
            )),
            xM("YY", (function(M, b) {
                b[FM] = O.parseTwoDigitYear(M)
            }
            )),
            xM("Y", (function(M, b) {
                b[FM] = parseInt(M, 10)
            }
            )),
            O.parseTwoDigitYear = function(M) {
                return AM(M) + (AM(M) > 68 ? 1900 : 2e3)
            }
            ;
            var ub = dM("FullYear", !0);
            function Wb() {
                return tM(this.year())
            }
            function lb(M, b, z, p, O, o, e) {
                var c;
                return M < 100 && M >= 0 ? (c = new Date(M + 400,b,z,p,O,o,e),
                isFinite(c.getFullYear()) && c.setFullYear(M)) : c = new Date(M,b,z,p,O,o,e),
                c
            }
            function fb(M) {
                var b, z;
                return M < 100 && M >= 0 ? ((z = Array.prototype.slice.call(arguments))[0] = M + 400,
                b = new Date(Date.UTC.apply(null, z)),
                isFinite(b.getUTCFullYear()) && b.setUTCFullYear(M)) : b = new Date(Date.UTC.apply(null, arguments)),
                b
            }
            function _b(M, b, z) {
                var p = 7 + b - z;
                return -(7 + fb(M, 0, p).getUTCDay() - b) % 7 + p - 1
            }
            function Lb(M, b, z, p, O) {
                var o, e, c = 1 + 7 * (b - 1) + (7 + z - p) % 7 + _b(M, p, O);
                return c <= 0 ? e = sb(o = M - 1) + c : c > sb(M) ? (o = M + 1,
                e = c - sb(M)) : (o = M,
                e = c),
                {
                    year: o,
                    dayOfYear: e
                }
            }
            function mb(M, b, z) {
                var p, O, o = _b(M.year(), b, z), e = Math.floor((M.dayOfYear() - o - 1) / 7) + 1;
                return e < 1 ? p = e + Rb(O = M.year() - 1, b, z) : e > Rb(M.year(), b, z) ? (p = e - Rb(M.year(), b, z),
                O = M.year() + 1) : (O = M.year(),
                p = e),
                {
                    week: p,
                    year: O
                }
            }
            function Rb(M, b, z) {
                var p = _b(M, b, z)
                  , O = _b(M + 1, b, z);
                return (sb(M) - p + O) / 7
            }
            function hb(M) {
                return mb(M, this._week.dow, this._week.doy).week
            }
            j("w", ["ww", 2], "wo", "week"),
            j("W", ["WW", 2], "Wo", "isoWeek"),
            pM("week", "w"),
            pM("isoWeek", "W"),
            cM("week", 5),
            cM("isoWeek", 5),
            DM("w", mM),
            DM("ww", mM, lM),
            DM("W", mM),
            DM("WW", mM, lM),
            jM(["w", "ww", "W", "WW"], (function(M, b, z, p) {
                b[p.substr(0, 1)] = AM(M)
            }
            ));
            var yb = {
                dow: 0,
                doy: 6
            };
            function Nb() {
                return this._week.dow
            }
            function Bb() {
                return this._week.doy
            }
            function Tb(M) {
                var b = this.localeData().week(this);
                return null == M ? b : this.add(7 * (M - b), "d")
            }
            function gb(M) {
                var b = mb(this, 1, 4).week;
                return null == M ? b : this.add(7 * (M - b), "d")
            }
            function Xb(M, b) {
                return "string" != typeof M ? M : isNaN(M) ? "number" == typeof (M = b.weekdaysParse(M)) ? M : null : parseInt(M, 10)
            }
            function Yb(M, b) {
                return "string" == typeof M ? b.weekdaysParse(M) % 7 || 7 : isNaN(M) ? null : M
            }
            function vb(M, b) {
                return M.slice(b, 7).concat(M.slice(0, b))
            }
            j("d", 0, "do", "day"),
            j("dd", 0, 0, (function(M) {
                return this.localeData().weekdaysMin(this, M)
            }
            )),
            j("ddd", 0, 0, (function(M) {
                return this.localeData().weekdaysShort(this, M)
            }
            )),
            j("dddd", 0, 0, (function(M) {
                return this.localeData().weekdays(this, M)
            }
            )),
            j("e", 0, 0, "weekday"),
            j("E", 0, 0, "isoWeekday"),
            pM("day", "d"),
            pM("weekday", "e"),
            pM("isoWeekday", "E"),
            cM("day", 11),
            cM("weekday", 11),
            cM("isoWeekday", 11),
            DM("d", mM),
            DM("e", mM),
            DM("E", mM),
            DM("dd", (function(M, b) {
                return b.weekdaysMinRegex(M)
            }
            )),
            DM("ddd", (function(M, b) {
                return b.weekdaysShortRegex(M)
            }
            )),
            DM("dddd", (function(M, b) {
                return b.weekdaysRegex(M)
            }
            )),
            jM(["dd", "ddd", "dddd"], (function(M, b, z, p) {
                var O = z._locale.weekdaysParse(M, p, z._strict);
                null != O ? b.d = O : u(z).invalidWeekday = M
            }
            )),
            jM(["d", "e", "E"], (function(M, b, z, p) {
                b[p] = AM(M)
            }
            ));
            var kb = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , Db = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , wb = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , Sb = kM
              , Hb = kM
              , Eb = kM;
            function xb(M, b) {
                var z = e(this._weekdays) ? this._weekdays : this._weekdays[M && !0 !== M && this._weekdays.isFormat.test(b) ? "format" : "standalone"];
                return !0 === M ? vb(z, this._week.dow) : M ? z[M.day()] : z
            }
            function jb(M) {
                return !0 === M ? vb(this._weekdaysShort, this._week.dow) : M ? this._weekdaysShort[M.day()] : this._weekdaysShort
            }
            function Pb(M) {
                return !0 === M ? vb(this._weekdaysMin, this._week.dow) : M ? this._weekdaysMin[M.day()] : this._weekdaysMin
            }
            function Cb(M, b, z) {
                var p, O, o, e = M.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    p = 0; p < 7; ++p)
                        o = q([2e3, 1]).day(p),
                        this._minWeekdaysParse[p] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[p] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                        this._weekdaysParse[p] = this.weekdays(o, "").toLocaleLowerCase();
                return z ? "dddd" === b ? -1 !== (O = CM.call(this._weekdaysParse, e)) ? O : null : "ddd" === b ? -1 !== (O = CM.call(this._shortWeekdaysParse, e)) ? O : null : -1 !== (O = CM.call(this._minWeekdaysParse, e)) ? O : null : "dddd" === b ? -1 !== (O = CM.call(this._weekdaysParse, e)) || -1 !== (O = CM.call(this._shortWeekdaysParse, e)) || -1 !== (O = CM.call(this._minWeekdaysParse, e)) ? O : null : "ddd" === b ? -1 !== (O = CM.call(this._shortWeekdaysParse, e)) || -1 !== (O = CM.call(this._weekdaysParse, e)) || -1 !== (O = CM.call(this._minWeekdaysParse, e)) ? O : null : -1 !== (O = CM.call(this._minWeekdaysParse, e)) || -1 !== (O = CM.call(this._weekdaysParse, e)) || -1 !== (O = CM.call(this._shortWeekdaysParse, e)) ? O : null
            }
            function Fb(M, b, z) {
                var p, O, o;
                if (this._weekdaysParseExact)
                    return Cb.call(this, M, b, z);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                p = 0; p < 7; p++) {
                    if (O = q([2e3, 1]).day(p),
                    z && !this._fullWeekdaysParse[p] && (this._fullWeekdaysParse[p] = new RegExp("^" + this.weekdays(O, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[p] = new RegExp("^" + this.weekdaysShort(O, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[p] = new RegExp("^" + this.weekdaysMin(O, "").replace(".", "\\.?") + "$","i")),
                    this._weekdaysParse[p] || (o = "^" + this.weekdays(O, "") + "|^" + this.weekdaysShort(O, "") + "|^" + this.weekdaysMin(O, ""),
                    this._weekdaysParse[p] = new RegExp(o.replace(".", ""),"i")),
                    z && "dddd" === b && this._fullWeekdaysParse[p].test(M))
                        return p;
                    if (z && "ddd" === b && this._shortWeekdaysParse[p].test(M))
                        return p;
                    if (z && "dd" === b && this._minWeekdaysParse[p].test(M))
                        return p;
                    if (!z && this._weekdaysParse[p].test(M))
                        return p
                }
            }
            function Ib(M) {
                if (!this.isValid())
                    return null != M ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != M ? (M = Xb(M, this.localeData()),
                this.add(M - b, "d")) : b
            }
            function Ub(M) {
                if (!this.isValid())
                    return null != M ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == M ? b : this.add(M - b, "d")
            }
            function Gb(M) {
                if (!this.isValid())
                    return null != M ? this : NaN;
                if (null != M) {
                    var b = Yb(M, this.localeData());
                    return this.day(this.day() % 7 ? b : b - 7)
                }
                return this.day() || 7
            }
            function Jb(M) {
                return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Qb.call(this),
                M ? this._weekdaysStrictRegex : this._weekdaysRegex) : (n(this, "_weekdaysRegex") || (this._weekdaysRegex = Sb),
                this._weekdaysStrictRegex && M ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function Kb(M) {
                return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Qb.call(this),
                M ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (n(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Hb),
                this._weekdaysShortStrictRegex && M ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function Vb(M) {
                return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Qb.call(this),
                M ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (n(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Eb),
                this._weekdaysMinStrictRegex && M ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function Qb() {
                function M(M, b) {
                    return b.length - M.length
                }
                var b, z, p, O, o, e = [], c = [], n = [], t = [];
                for (b = 0; b < 7; b++)
                    z = q([2e3, 1]).day(b),
                    p = HM(this.weekdaysMin(z, "")),
                    O = HM(this.weekdaysShort(z, "")),
                    o = HM(this.weekdays(z, "")),
                    e.push(p),
                    c.push(O),
                    n.push(o),
                    t.push(p),
                    t.push(O),
                    t.push(o);
                e.sort(M),
                c.sort(M),
                n.sort(M),
                t.sort(M),
                this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + c.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")","i")
            }
            function $b() {
                return this.hours() % 12 || 12
            }
            function Zb() {
                return this.hours() || 24
            }
            function Mz(M, b) {
                j(M, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                }
                ))
            }
            function bz(M, b) {
                return b._meridiemParse
            }
            function zz(M) {
                return "p" === (M + "").toLowerCase().charAt(0)
            }
            j("H", ["HH", 2], 0, "hour"),
            j("h", ["hh", 2], 0, $b),
            j("k", ["kk", 2], 0, Zb),
            j("hmm", 0, 0, (function() {
                return "" + $b.apply(this) + w(this.minutes(), 2)
            }
            )),
            j("hmmss", 0, 0, (function() {
                return "" + $b.apply(this) + w(this.minutes(), 2) + w(this.seconds(), 2)
            }
            )),
            j("Hmm", 0, 0, (function() {
                return "" + this.hours() + w(this.minutes(), 2)
            }
            )),
            j("Hmmss", 0, 0, (function() {
                return "" + this.hours() + w(this.minutes(), 2) + w(this.seconds(), 2)
            }
            )),
            Mz("a", !0),
            Mz("A", !1),
            pM("hour", "h"),
            cM("hour", 13),
            DM("a", bz),
            DM("A", bz),
            DM("H", mM),
            DM("h", mM),
            DM("k", mM),
            DM("HH", mM, lM),
            DM("hh", mM, lM),
            DM("kk", mM, lM),
            DM("hmm", RM),
            DM("hmmss", hM),
            DM("Hmm", RM),
            DM("Hmmss", hM),
            xM(["H", "HH"], GM),
            xM(["k", "kk"], (function(M, b, z) {
                var p = AM(M);
                b[GM] = 24 === p ? 0 : p
            }
            )),
            xM(["a", "A"], (function(M, b, z) {
                z._isPm = z._locale.isPM(M),
                z._meridiem = M
            }
            )),
            xM(["h", "hh"], (function(M, b, z) {
                b[GM] = AM(M),
                u(z).bigHour = !0
            }
            )),
            xM("hmm", (function(M, b, z) {
                var p = M.length - 2;
                b[GM] = AM(M.substr(0, p)),
                b[JM] = AM(M.substr(p)),
                u(z).bigHour = !0
            }
            )),
            xM("hmmss", (function(M, b, z) {
                var p = M.length - 4
                  , O = M.length - 2;
                b[GM] = AM(M.substr(0, p)),
                b[JM] = AM(M.substr(p, 2)),
                b[KM] = AM(M.substr(O)),
                u(z).bigHour = !0
            }
            )),
            xM("Hmm", (function(M, b, z) {
                var p = M.length - 2;
                b[GM] = AM(M.substr(0, p)),
                b[JM] = AM(M.substr(p))
            }
            )),
            xM("Hmmss", (function(M, b, z) {
                var p = M.length - 4
                  , O = M.length - 2;
                b[GM] = AM(M.substr(0, p)),
                b[JM] = AM(M.substr(p, 2)),
                b[KM] = AM(M.substr(O))
            }
            ));
            var pz = /[ap]\.?m?\.?/i
              , Oz = dM("Hours", !0);
            function oz(M, b, z) {
                return M > 11 ? z ? "pm" : "PM" : z ? "am" : "AM"
            }
            var ez, cz = {
                calendar: k,
                longDateFormat: U,
                invalidDate: J,
                ordinal: V,
                dayOfMonthOrdinalParse: Q,
                relativeTime: Z,
                months: bb,
                monthsShort: zb,
                week: yb,
                weekdays: kb,
                weekdaysMin: wb,
                weekdaysShort: Db,
                meridiemParse: pz
            }, nz = {}, tz = {};
            function az(M, b) {
                var z, p = Math.min(M.length, b.length);
                for (z = 0; z < p; z += 1)
                    if (M[z] !== b[z])
                        return z;
                return p
            }
            function Az(M) {
                return M ? M.toLowerCase().replace("_", "-") : M
            }
            function dz(M) {
                for (var b, z, p, O, o = 0; o < M.length; ) {
                    for (b = (O = Az(M[o]).split("-")).length,
                    z = (z = Az(M[o + 1])) ? z.split("-") : null; b > 0; ) {
                        if (p = iz(O.slice(0, b).join("-")))
                            return p;
                        if (z && z.length >= b && az(O, z) >= b - 1)
                            break;
                        b--
                    }
                    o++
                }
                return ez
            }
            function rz(M) {
                return null != M.match("^[^/\\\\]*$")
            }
            function iz(b) {
                var p = null;
                if (void 0 === nz[b] && M && M.exports && rz(b))
                    try {
                        p = ez._abbr,
                        z(46700)("./" + b),
                        qz(p)
                    } catch (M) {
                        nz[b] = null
                    }
                return nz[b]
            }
            function qz(M, b) {
                var z;
                return M && ((z = a(b) ? Wz(M) : sz(M, b)) ? ez = z : "undefined" != typeof console && console.warn),
                ez._abbr
            }
            function sz(M, b) {
                if (null !== b) {
                    var z, p = cz;
                    if (b.abbr = M,
                    null != nz[M])
                        T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        p = nz[M]._config;
                    else if (null != b.parentLocale)
                        if (null != nz[b.parentLocale])
                            p = nz[b.parentLocale]._config;
                        else {
                            if (null == (z = iz(b.parentLocale)))
                                return tz[b.parentLocale] || (tz[b.parentLocale] = []),
                                tz[b.parentLocale].push({
                                    name: M,
                                    config: b
                                }),
                                null;
                            p = z._config
                        }
                    return nz[M] = new v(Y(p, b)),
                    tz[M] && tz[M].forEach((function(M) {
                        sz(M.name, M.config)
                    }
                    )),
                    qz(M),
                    nz[M]
                }
                return delete nz[M],
                null
            }
            function uz(M, b) {
                if (null != b) {
                    var z, p, O = cz;
                    null != nz[M] && null != nz[M].parentLocale ? nz[M].set(Y(nz[M]._config, b)) : (null != (p = iz(M)) && (O = p._config),
                    b = Y(O, b),
                    null == p && (b.abbr = M),
                    (z = new v(b)).parentLocale = nz[M],
                    nz[M] = z),
                    qz(M)
                } else
                    null != nz[M] && (null != nz[M].parentLocale ? (nz[M] = nz[M].parentLocale,
                    M === qz() && qz(M)) : null != nz[M] && delete nz[M]);
                return nz[M]
            }
            function Wz(M) {
                var b;
                if (M && M._locale && M._locale._abbr && (M = M._locale._abbr),
                !M)
                    return ez;
                if (!e(M)) {
                    if (b = iz(M))
                        return b;
                    M = [M]
                }
                return dz(M)
            }
            function lz() {
                return N(nz)
            }
            function fz(M) {
                var b, z = M._a;
                return z && -2 === u(M).overflow && (b = z[IM] < 0 || z[IM] > 11 ? IM : z[UM] < 1 || z[UM] > Mb(z[FM], z[IM]) ? UM : z[GM] < 0 || z[GM] > 24 || 24 === z[GM] && (0 !== z[JM] || 0 !== z[KM] || 0 !== z[VM]) ? GM : z[JM] < 0 || z[JM] > 59 ? JM : z[KM] < 0 || z[KM] > 59 ? KM : z[VM] < 0 || z[VM] > 999 ? VM : -1,
                u(M)._overflowDayOfYear && (b < FM || b > UM) && (b = UM),
                u(M)._overflowWeeks && -1 === b && (b = QM),
                u(M)._overflowWeekday && -1 === b && (b = $M),
                u(M).overflow = b),
                M
            }
            var _z = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , Lz = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , mz = /Z|[+-]\d\d(?::?\d\d)?/
              , Rz = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
              , hz = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
              , yz = /^\/?Date\((-?\d+)/i
              , Nz = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
              , Bz = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function Tz(M) {
                var b, z, p, O, o, e, c = M._i, n = _z.exec(c) || Lz.exec(c), t = Rz.length, a = hz.length;
                if (n) {
                    for (u(M).iso = !0,
                    b = 0,
                    z = t; b < z; b++)
                        if (Rz[b][1].exec(n[1])) {
                            O = Rz[b][0],
                            p = !1 !== Rz[b][2];
                            break
                        }
                    if (null == O)
                        return void (M._isValid = !1);
                    if (n[3]) {
                        for (b = 0,
                        z = a; b < z; b++)
                            if (hz[b][1].exec(n[3])) {
                                o = (n[2] || " ") + hz[b][0];
                                break
                            }
                        if (null == o)
                            return void (M._isValid = !1)
                    }
                    if (!p && null != o)
                        return void (M._isValid = !1);
                    if (n[4]) {
                        if (!mz.exec(n[4]))
                            return void (M._isValid = !1);
                        e = "Z"
                    }
                    M._f = O + (o || "") + (e || ""),
                    jz(M)
                } else
                    M._isValid = !1
            }
            function gz(M, b, z, p, O, o) {
                var e = [Xz(M), zb.indexOf(b), parseInt(z, 10), parseInt(p, 10), parseInt(O, 10)];
                return o && e.push(parseInt(o, 10)),
                e
            }
            function Xz(M) {
                var b = parseInt(M, 10);
                return b <= 49 ? 2e3 + b : b <= 999 ? 1900 + b : b
            }
            function Yz(M) {
                return M.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }
            function vz(M, b, z) {
                return !M || Db.indexOf(M) === new Date(b[0],b[1],b[2]).getDay() || (u(z).weekdayMismatch = !0,
                z._isValid = !1,
                !1)
            }
            function kz(M, b, z) {
                if (M)
                    return Bz[M];
                if (b)
                    return 0;
                var p = parseInt(z, 10)
                  , O = p % 100;
                return (p - O) / 100 * 60 + O
            }
            function Dz(M) {
                var b, z = Nz.exec(Yz(M._i));
                if (z) {
                    if (b = gz(z[4], z[3], z[2], z[5], z[6], z[7]),
                    !vz(z[1], b, M))
                        return;
                    M._a = b,
                    M._tzm = kz(z[8], z[9], z[10]),
                    M._d = fb.apply(null, M._a),
                    M._d.setUTCMinutes(M._d.getUTCMinutes() - M._tzm),
                    u(M).rfc2822 = !0
                } else
                    M._isValid = !1
            }
            function wz(M) {
                var b = yz.exec(M._i);
                null === b ? (Tz(M),
                !1 === M._isValid && (delete M._isValid,
                Dz(M),
                !1 === M._isValid && (delete M._isValid,
                M._strict ? M._isValid = !1 : O.createFromInputFallback(M)))) : M._d = new Date(+b[1])
            }
            function Sz(M, b, z) {
                return null != M ? M : null != b ? b : z
            }
            function Hz(M) {
                var b = new Date(O.now());
                return M._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
            }
            function Ez(M) {
                var b, z, p, O, o, e = [];
                if (!M._d) {
                    for (p = Hz(M),
                    M._w && null == M._a[UM] && null == M._a[IM] && xz(M),
                    null != M._dayOfYear && (o = Sz(M._a[FM], p[FM]),
                    (M._dayOfYear > sb(o) || 0 === M._dayOfYear) && (u(M)._overflowDayOfYear = !0),
                    z = fb(o, 0, M._dayOfYear),
                    M._a[IM] = z.getUTCMonth(),
                    M._a[UM] = z.getUTCDate()),
                    b = 0; b < 3 && null == M._a[b]; ++b)
                        M._a[b] = e[b] = p[b];
                    for (; b < 7; b++)
                        M._a[b] = e[b] = null == M._a[b] ? 2 === b ? 1 : 0 : M._a[b];
                    24 === M._a[GM] && 0 === M._a[JM] && 0 === M._a[KM] && 0 === M._a[VM] && (M._nextDay = !0,
                    M._a[GM] = 0),
                    M._d = (M._useUTC ? fb : lb).apply(null, e),
                    O = M._useUTC ? M._d.getUTCDay() : M._d.getDay(),
                    null != M._tzm && M._d.setUTCMinutes(M._d.getUTCMinutes() - M._tzm),
                    M._nextDay && (M._a[GM] = 24),
                    M._w && void 0 !== M._w.d && M._w.d !== O && (u(M).weekdayMismatch = !0)
                }
            }
            function xz(M) {
                var b, z, p, O, o, e, c, n, t;
                null != (b = M._w).GG || null != b.W || null != b.E ? (o = 1,
                e = 4,
                z = Sz(b.GG, M._a[FM], mb(Kz(), 1, 4).year),
                p = Sz(b.W, 1),
                ((O = Sz(b.E, 1)) < 1 || O > 7) && (n = !0)) : (o = M._locale._week.dow,
                e = M._locale._week.doy,
                t = mb(Kz(), o, e),
                z = Sz(b.gg, M._a[FM], t.year),
                p = Sz(b.w, t.week),
                null != b.d ? ((O = b.d) < 0 || O > 6) && (n = !0) : null != b.e ? (O = b.e + o,
                (b.e < 0 || b.e > 6) && (n = !0)) : O = o),
                p < 1 || p > Rb(z, o, e) ? u(M)._overflowWeeks = !0 : null != n ? u(M)._overflowWeekday = !0 : (c = Lb(z, p, O, o, e),
                M._a[FM] = c.year,
                M._dayOfYear = c.dayOfYear)
            }
            function jz(M) {
                if (M._f !== O.ISO_8601)
                    if (M._f !== O.RFC_2822) {
                        M._a = [],
                        u(M).empty = !0;
                        var b, z, p, o, e, c, n, t = "" + M._i, a = t.length, A = 0;
                        for (n = (p = I(M._f, M._locale).match(S) || []).length,
                        b = 0; b < n; b++)
                            o = p[b],
                            (z = (t.match(wM(o, M)) || [])[0]) && ((e = t.substr(0, t.indexOf(z))).length > 0 && u(M).unusedInput.push(e),
                            t = t.slice(t.indexOf(z) + z.length),
                            A += z.length),
                            x[o] ? (z ? u(M).empty = !1 : u(M).unusedTokens.push(o),
                            PM(o, z, M)) : M._strict && !z && u(M).unusedTokens.push(o);
                        u(M).charsLeftOver = a - A,
                        t.length > 0 && u(M).unusedInput.push(t),
                        M._a[GM] <= 12 && !0 === u(M).bigHour && M._a[GM] > 0 && (u(M).bigHour = void 0),
                        u(M).parsedDateParts = M._a.slice(0),
                        u(M).meridiem = M._meridiem,
                        M._a[GM] = Pz(M._locale, M._a[GM], M._meridiem),
                        null !== (c = u(M).era) && (M._a[FM] = M._locale.erasConvertYear(c, M._a[FM])),
                        Ez(M),
                        fz(M)
                    } else
                        Dz(M);
                else
                    Tz(M)
            }
            function Pz(M, b, z) {
                var p;
                return null == z ? b : null != M.meridiemHour ? M.meridiemHour(b, z) : null != M.isPM ? ((p = M.isPM(z)) && b < 12 && (b += 12),
                p || 12 !== b || (b = 0),
                b) : b
            }
            function Cz(M) {
                var b, z, p, O, o, e, c = !1, n = M._f.length;
                if (0 === n)
                    return u(M).invalidFormat = !0,
                    void (M._d = new Date(NaN));
                for (O = 0; O < n; O++)
                    o = 0,
                    e = !1,
                    b = L({}, M),
                    null != M._useUTC && (b._useUTC = M._useUTC),
                    b._f = M._f[O],
                    jz(b),
                    W(b) && (e = !0),
                    o += u(b).charsLeftOver,
                    o += 10 * u(b).unusedTokens.length,
                    u(b).score = o,
                    c ? o < p && (p = o,
                    z = b) : (null == p || o < p || e) && (p = o,
                    z = b,
                    e && (c = !0));
                i(M, z || b)
            }
            function Fz(M) {
                if (!M._d) {
                    var b = oM(M._i)
                      , z = void 0 === b.day ? b.date : b.day;
                    M._a = r([b.year, b.month, z, b.hour, b.minute, b.second, b.millisecond], (function(M) {
                        return M && parseInt(M, 10)
                    }
                    )),
                    Ez(M)
                }
            }
            function Iz(M) {
                var b = new m(fz(Uz(M)));
                return b._nextDay && (b.add(1, "d"),
                b._nextDay = void 0),
                b
            }
            function Uz(M) {
                var b = M._i
                  , z = M._f;
                return M._locale = M._locale || Wz(M._l),
                null === b || void 0 === z && "" === b ? l({
                    nullInput: !0
                }) : ("string" == typeof b && (M._i = b = M._locale.preparse(b)),
                R(b) ? new m(fz(b)) : (d(b) ? M._d = b : e(z) ? Cz(M) : z ? jz(M) : Gz(M),
                W(M) || (M._d = null),
                M))
            }
            function Gz(M) {
                var b = M._i;
                a(b) ? M._d = new Date(O.now()) : d(b) ? M._d = new Date(b.valueOf()) : "string" == typeof b ? wz(M) : e(b) ? (M._a = r(b.slice(0), (function(M) {
                    return parseInt(M, 10)
                }
                )),
                Ez(M)) : c(b) ? Fz(M) : A(b) ? M._d = new Date(b) : O.createFromInputFallback(M)
            }
            function Jz(M, b, z, p, O) {
                var o = {};
                return !0 !== b && !1 !== b || (p = b,
                b = void 0),
                !0 !== z && !1 !== z || (p = z,
                z = void 0),
                (c(M) && t(M) || e(M) && 0 === M.length) && (M = void 0),
                o._isAMomentObject = !0,
                o._useUTC = o._isUTC = O,
                o._l = z,
                o._i = M,
                o._f = b,
                o._strict = p,
                Iz(o)
            }
            function Kz(M, b, z, p) {
                return Jz(M, b, z, p, !1)
            }
            O.createFromInputFallback = y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(M) {
                M._d = new Date(M._i + (M._useUTC ? " UTC" : ""))
            }
            )),
            O.ISO_8601 = function() {}
            ,
            O.RFC_2822 = function() {}
            ;
            var Vz = y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var M = Kz.apply(null, arguments);
                return this.isValid() && M.isValid() ? M < this ? this : M : l()
            }
            ))
              , Qz = y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var M = Kz.apply(null, arguments);
                return this.isValid() && M.isValid() ? M > this ? this : M : l()
            }
            ));
            function $z(M, b) {
                var z, p;
                if (1 === b.length && e(b[0]) && (b = b[0]),
                !b.length)
                    return Kz();
                for (z = b[0],
                p = 1; p < b.length; ++p)
                    b[p].isValid() && !b[p][M](z) || (z = b[p]);
                return z
            }
            function Zz() {
                return $z("isBefore", [].slice.call(arguments, 0))
            }
            function Mp() {
                return $z("isAfter", [].slice.call(arguments, 0))
            }
            var bp = function() {
                return Date.now ? Date.now() : +new Date
            }
              , zp = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function pp(M) {
                var b, z, p = !1, O = zp.length;
                for (b in M)
                    if (n(M, b) && (-1 === CM.call(zp, b) || null != M[b] && isNaN(M[b])))
                        return !1;
                for (z = 0; z < O; ++z)
                    if (M[zp[z]]) {
                        if (p)
                            return !1;
                        parseFloat(M[zp[z]]) !== AM(M[zp[z]]) && (p = !0)
                    }
                return !0
            }
            function Op() {
                return this._isValid
            }
            function op() {
                return Bp(NaN)
            }
            function ep(M) {
                var b = oM(M)
                  , z = b.year || 0
                  , p = b.quarter || 0
                  , O = b.month || 0
                  , o = b.week || b.isoWeek || 0
                  , e = b.day || 0
                  , c = b.hour || 0
                  , n = b.minute || 0
                  , t = b.second || 0
                  , a = b.millisecond || 0;
                this._isValid = pp(b),
                this._milliseconds = +a + 1e3 * t + 6e4 * n + 1e3 * c * 60 * 60,
                this._days = +e + 7 * o,
                this._months = +O + 3 * p + 12 * z,
                this._data = {},
                this._locale = Wz(),
                this._bubble()
            }
            function cp(M) {
                return M instanceof ep
            }
            function np(M) {
                return M < 0 ? -1 * Math.round(-1 * M) : Math.round(M)
            }
            function tp(M, b, z) {
                var p, O = Math.min(M.length, b.length), o = Math.abs(M.length - b.length), e = 0;
                for (p = 0; p < O; p++)
                    (z && M[p] !== b[p] || !z && AM(M[p]) !== AM(b[p])) && e++;
                return e + o
            }
            function ap(M, b) {
                j(M, 0, 0, (function() {
                    var M = this.utcOffset()
                      , z = "+";
                    return M < 0 && (M = -M,
                    z = "-"),
                    z + w(~~(M / 60), 2) + b + w(~~M % 60, 2)
                }
                ))
            }
            ap("Z", ":"),
            ap("ZZ", ""),
            DM("Z", YM),
            DM("ZZ", YM),
            xM(["Z", "ZZ"], (function(M, b, z) {
                z._useUTC = !0,
                z._tzm = dp(YM, M)
            }
            ));
            var Ap = /([\+\-]|\d\d)/gi;
            function dp(M, b) {
                var z, p, O = (b || "").match(M);
                return null === O ? null : 0 === (p = 60 * (z = ((O[O.length - 1] || []) + "").match(Ap) || ["-", 0, 0])[1] + AM(z[2])) ? 0 : "+" === z[0] ? p : -p
            }
            function rp(M, b) {
                var z, p;
                return b._isUTC ? (z = b.clone(),
                p = (R(M) || d(M) ? M.valueOf() : Kz(M).valueOf()) - z.valueOf(),
                z._d.setTime(z._d.valueOf() + p),
                O.updateOffset(z, !1),
                z) : Kz(M).local()
            }
            function ip(M) {
                return -Math.round(M._d.getTimezoneOffset())
            }
            function qp(M, b, z) {
                var p, o = this._offset || 0;
                if (!this.isValid())
                    return null != M ? this : NaN;
                if (null != M) {
                    if ("string" == typeof M) {
                        if (null === (M = dp(YM, M)))
                            return this
                    } else
                        Math.abs(M) < 16 && !z && (M *= 60);
                    return !this._isUTC && b && (p = ip(this)),
                    this._offset = M,
                    this._isUTC = !0,
                    null != p && this.add(p, "m"),
                    o !== M && (!b || this._changeInProgress ? vp(this, Bp(M - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    O.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? o : ip(this)
            }
            function sp(M, b) {
                return null != M ? ("string" != typeof M && (M = -M),
                this.utcOffset(M, b),
                this) : -this.utcOffset()
            }
            function up(M) {
                return this.utcOffset(0, M)
            }
            function Wp(M) {
                return this._isUTC && (this.utcOffset(0, M),
                this._isUTC = !1,
                M && this.subtract(ip(this), "m")),
                this
            }
            function lp() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var M = dp(XM, this._i);
                    null != M ? this.utcOffset(M) : this.utcOffset(0, !0)
                }
                return this
            }
            function fp(M) {
                return !!this.isValid() && (M = M ? Kz(M).utcOffset() : 0,
                (this.utcOffset() - M) % 60 == 0)
            }
            function _p() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Lp() {
                if (!a(this._isDSTShifted))
                    return this._isDSTShifted;
                var M, b = {};
                return L(b, this),
                (b = Uz(b))._a ? (M = b._isUTC ? q(b._a) : Kz(b._a),
                this._isDSTShifted = this.isValid() && tp(b._a, M.toArray()) > 0) : this._isDSTShifted = !1,
                this._isDSTShifted
            }
            function mp() {
                return !!this.isValid() && !this._isUTC
            }
            function Rp() {
                return !!this.isValid() && this._isUTC
            }
            function hp() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            O.updateOffset = function() {}
            ;
            var yp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
              , Np = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function Bp(M, b) {
                var z, p, O, o = M, e = null;
                return cp(M) ? o = {
                    ms: M._milliseconds,
                    d: M._days,
                    M: M._months
                } : A(M) || !isNaN(+M) ? (o = {},
                b ? o[b] = +M : o.milliseconds = +M) : (e = yp.exec(M)) ? (z = "-" === e[1] ? -1 : 1,
                o = {
                    y: 0,
                    d: AM(e[UM]) * z,
                    h: AM(e[GM]) * z,
                    m: AM(e[JM]) * z,
                    s: AM(e[KM]) * z,
                    ms: AM(np(1e3 * e[VM])) * z
                }) : (e = Np.exec(M)) ? (z = "-" === e[1] ? -1 : 1,
                o = {
                    y: Tp(e[2], z),
                    M: Tp(e[3], z),
                    w: Tp(e[4], z),
                    d: Tp(e[5], z),
                    h: Tp(e[6], z),
                    m: Tp(e[7], z),
                    s: Tp(e[8], z)
                }) : null == o ? o = {} : "object" == typeof o && ("from"in o || "to"in o) && (O = Xp(Kz(o.from), Kz(o.to)),
                (o = {}).ms = O.milliseconds,
                o.M = O.months),
                p = new ep(o),
                cp(M) && n(M, "_locale") && (p._locale = M._locale),
                cp(M) && n(M, "_isValid") && (p._isValid = M._isValid),
                p
            }
            function Tp(M, b) {
                var z = M && parseFloat(M.replace(",", "."));
                return (isNaN(z) ? 0 : z) * b
            }
            function gp(M, b) {
                var z = {};
                return z.months = b.month() - M.month() + 12 * (b.year() - M.year()),
                M.clone().add(z.months, "M").isAfter(b) && --z.months,
                z.milliseconds = +b - +M.clone().add(z.months, "M"),
                z
            }
            function Xp(M, b) {
                var z;
                return M.isValid() && b.isValid() ? (b = rp(b, M),
                M.isBefore(b) ? z = gp(M, b) : ((z = gp(b, M)).milliseconds = -z.milliseconds,
                z.months = -z.months),
                z) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function Yp(M, b) {
                return function(z, p) {
                    var O;
                    return null === p || isNaN(+p) || (T(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    O = z,
                    z = p,
                    p = O),
                    vp(this, Bp(z, p), M),
                    this
                }
            }
            function vp(M, b, z, p) {
                var o = b._milliseconds
                  , e = np(b._days)
                  , c = np(b._months);
                M.isValid() && (p = null == p || p,
                c && ab(M, rM(M, "Month") + c * z),
                e && iM(M, "Date", rM(M, "Date") + e * z),
                o && M._d.setTime(M._d.valueOf() + o * z),
                p && O.updateOffset(M, e || c))
            }
            Bp.fn = ep.prototype,
            Bp.invalid = op;
            var kp = Yp(1, "add")
              , Dp = Yp(-1, "subtract");
            function wp(M) {
                return "string" == typeof M || M instanceof String
            }
            function Sp(M) {
                return R(M) || d(M) || wp(M) || A(M) || Ep(M) || Hp(M) || null == M
            }
            function Hp(M) {
                var b, z, p = c(M) && !t(M), O = !1, o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], e = o.length;
                for (b = 0; b < e; b += 1)
                    z = o[b],
                    O = O || n(M, z);
                return p && O
            }
            function Ep(M) {
                var b = e(M)
                  , z = !1;
                return b && (z = 0 === M.filter((function(b) {
                    return !A(b) && wp(M)
                }
                )).length),
                b && z
            }
            function xp(M) {
                var b, z, p = c(M) && !t(M), O = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (b = 0; b < o.length; b += 1)
                    z = o[b],
                    O = O || n(M, z);
                return p && O
            }
            function jp(M, b) {
                var z = M.diff(b, "days", !0);
                return z < -6 ? "sameElse" : z < -1 ? "lastWeek" : z < 0 ? "lastDay" : z < 1 ? "sameDay" : z < 2 ? "nextDay" : z < 7 ? "nextWeek" : "sameElse"
            }
            function Pp(M, b) {
                1 === arguments.length && (arguments[0] ? Sp(arguments[0]) ? (M = arguments[0],
                b = void 0) : xp(arguments[0]) && (b = arguments[0],
                M = void 0) : (M = void 0,
                b = void 0));
                var z = M || Kz()
                  , p = rp(z, this).startOf("day")
                  , o = O.calendarFormat(this, p) || "sameElse"
                  , e = b && (g(b[o]) ? b[o].call(this, z) : b[o]);
                return this.format(e || this.localeData().calendar(o, this, Kz(z)))
            }
            function Cp() {
                return new m(this)
            }
            function Fp(M, b) {
                var z = R(M) ? M : Kz(M);
                return !(!this.isValid() || !z.isValid()) && ("millisecond" === (b = OM(b) || "millisecond") ? this.valueOf() > z.valueOf() : z.valueOf() < this.clone().startOf(b).valueOf())
            }
            function Ip(M, b) {
                var z = R(M) ? M : Kz(M);
                return !(!this.isValid() || !z.isValid()) && ("millisecond" === (b = OM(b) || "millisecond") ? this.valueOf() < z.valueOf() : this.clone().endOf(b).valueOf() < z.valueOf())
            }
            function Up(M, b, z, p) {
                var O = R(M) ? M : Kz(M)
                  , o = R(b) ? b : Kz(b);
                return !!(this.isValid() && O.isValid() && o.isValid()) && ("(" === (p = p || "()")[0] ? this.isAfter(O, z) : !this.isBefore(O, z)) && (")" === p[1] ? this.isBefore(o, z) : !this.isAfter(o, z))
            }
            function Gp(M, b) {
                var z, p = R(M) ? M : Kz(M);
                return !(!this.isValid() || !p.isValid()) && ("millisecond" === (b = OM(b) || "millisecond") ? this.valueOf() === p.valueOf() : (z = p.valueOf(),
                this.clone().startOf(b).valueOf() <= z && z <= this.clone().endOf(b).valueOf()))
            }
            function Jp(M, b) {
                return this.isSame(M, b) || this.isAfter(M, b)
            }
            function Kp(M, b) {
                return this.isSame(M, b) || this.isBefore(M, b)
            }
            function Vp(M, b, z) {
                var p, O, o;
                if (!this.isValid())
                    return NaN;
                if (!(p = rp(M, this)).isValid())
                    return NaN;
                switch (O = 6e4 * (p.utcOffset() - this.utcOffset()),
                b = OM(b)) {
                case "year":
                    o = Qp(this, p) / 12;
                    break;
                case "month":
                    o = Qp(this, p);
                    break;
                case "quarter":
                    o = Qp(this, p) / 3;
                    break;
                case "second":
                    o = (this - p) / 1e3;
                    break;
                case "minute":
                    o = (this - p) / 6e4;
                    break;
                case "hour":
                    o = (this - p) / 36e5;
                    break;
                case "day":
                    o = (this - p - O) / 864e5;
                    break;
                case "week":
                    o = (this - p - O) / 6048e5;
                    break;
                default:
                    o = this - p
                }
                return z ? o : aM(o)
            }
            function Qp(M, b) {
                if (M.date() < b.date())
                    return -Qp(b, M);
                var z = 12 * (b.year() - M.year()) + (b.month() - M.month())
                  , p = M.clone().add(z, "months");
                return -(z + (b - p < 0 ? (b - p) / (p - M.clone().add(z - 1, "months")) : (b - p) / (M.clone().add(z + 1, "months") - p))) || 0
            }
            function $p() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function Zp(M) {
                if (!this.isValid())
                    return null;
                var b = !0 !== M
                  , z = b ? this.clone().utc() : this;
                return z.year() < 0 || z.year() > 9999 ? F(z, b ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : g(Date.prototype.toISOString) ? b ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(z, "Z")) : F(z, b ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            function MO() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var M, b, z, p, O = "moment", o = "";
                return this.isLocal() || (O = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                o = "Z"),
                M = "[" + O + '("]',
                b = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                z = "-MM-DD[T]HH:mm:ss.SSS",
                p = o + '[")]',
                this.format(M + b + z + p)
            }
            function bO(M) {
                M || (M = this.isUtc() ? O.defaultFormatUtc : O.defaultFormat);
                var b = F(this, M);
                return this.localeData().postformat(b)
            }
            function zO(M, b) {
                return this.isValid() && (R(M) && M.isValid() || Kz(M).isValid()) ? Bp({
                    to: this,
                    from: M
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }
            function pO(M) {
                return this.from(Kz(), M)
            }
            function OO(M, b) {
                return this.isValid() && (R(M) && M.isValid() || Kz(M).isValid()) ? Bp({
                    from: this,
                    to: M
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }
            function oO(M) {
                return this.to(Kz(), M)
            }
            function eO(M) {
                var b;
                return void 0 === M ? this._locale._abbr : (null != (b = Wz(M)) && (this._locale = b),
                this)
            }
            O.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            O.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var cO = y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(M) {
                return void 0 === M ? this.localeData() : this.locale(M)
            }
            ));
            function nO() {
                return this._locale
            }
            var tO = 1e3
              , aO = 60 * tO
              , AO = 60 * aO
              , dO = 3506328 * AO;
            function rO(M, b) {
                return (M % b + b) % b
            }
            function iO(M, b, z) {
                return M < 100 && M >= 0 ? new Date(M + 400,b,z) - dO : new Date(M,b,z).valueOf()
            }
            function qO(M, b, z) {
                return M < 100 && M >= 0 ? Date.UTC(M + 400, b, z) - dO : Date.UTC(M, b, z)
            }
            function sO(M) {
                var b, z;
                if (void 0 === (M = OM(M)) || "millisecond" === M || !this.isValid())
                    return this;
                switch (z = this._isUTC ? qO : iO,
                M) {
                case "year":
                    b = z(this.year(), 0, 1);
                    break;
                case "quarter":
                    b = z(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    b = z(this.year(), this.month(), 1);
                    break;
                case "week":
                    b = z(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    b = z(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    b = z(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    b = this._d.valueOf(),
                    b -= rO(b + (this._isUTC ? 0 : this.utcOffset() * aO), AO);
                    break;
                case "minute":
                    b = this._d.valueOf(),
                    b -= rO(b, aO);
                    break;
                case "second":
                    b = this._d.valueOf(),
                    b -= rO(b, tO)
                }
                return this._d.setTime(b),
                O.updateOffset(this, !0),
                this
            }
            function uO(M) {
                var b, z;
                if (void 0 === (M = OM(M)) || "millisecond" === M || !this.isValid())
                    return this;
                switch (z = this._isUTC ? qO : iO,
                M) {
                case "year":
                    b = z(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    b = z(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    b = z(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    b = z(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    b = z(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    b = z(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    b = this._d.valueOf(),
                    b += AO - rO(b + (this._isUTC ? 0 : this.utcOffset() * aO), AO) - 1;
                    break;
                case "minute":
                    b = this._d.valueOf(),
                    b += aO - rO(b, aO) - 1;
                    break;
                case "second":
                    b = this._d.valueOf(),
                    b += tO - rO(b, tO) - 1
                }
                return this._d.setTime(b),
                O.updateOffset(this, !0),
                this
            }
            function WO() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function lO() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function fO() {
                return new Date(this.valueOf())
            }
            function _O() {
                var M = this;
                return [M.year(), M.month(), M.date(), M.hour(), M.minute(), M.second(), M.millisecond()]
            }
            function LO() {
                var M = this;
                return {
                    years: M.year(),
                    months: M.month(),
                    date: M.date(),
                    hours: M.hours(),
                    minutes: M.minutes(),
                    seconds: M.seconds(),
                    milliseconds: M.milliseconds()
                }
            }
            function mO() {
                return this.isValid() ? this.toISOString() : null
            }
            function RO() {
                return W(this)
            }
            function hO() {
                return i({}, u(this))
            }
            function yO() {
                return u(this).overflow
            }
            function NO() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function BO(M, b) {
                var z, p, o, e = this._eras || Wz("en")._eras;
                for (z = 0,
                p = e.length; z < p; ++z)
                    switch ("string" == typeof e[z].since && (o = O(e[z].since).startOf("day"),
                    e[z].since = o.valueOf()),
                    typeof e[z].until) {
                    case "undefined":
                        e[z].until = 1 / 0;
                        break;
                    case "string":
                        o = O(e[z].until).startOf("day").valueOf(),
                        e[z].until = o.valueOf()
                    }
                return e
            }
            function TO(M, b, z) {
                var p, O, o, e, c, n = this.eras();
                for (M = M.toUpperCase(),
                p = 0,
                O = n.length; p < O; ++p)
                    if (o = n[p].name.toUpperCase(),
                    e = n[p].abbr.toUpperCase(),
                    c = n[p].narrow.toUpperCase(),
                    z)
                        switch (b) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (e === M)
                                return n[p];
                            break;
                        case "NNNN":
                            if (o === M)
                                return n[p];
                            break;
                        case "NNNNN":
                            if (c === M)
                                return n[p]
                        }
                    else if ([o, e, c].indexOf(M) >= 0)
                        return n[p]
            }
            function gO(M, b) {
                var z = M.since <= M.until ? 1 : -1;
                return void 0 === b ? O(M.since).year() : O(M.since).year() + (b - M.offset) * z
            }
            function XO() {
                var M, b, z, p = this.localeData().eras();
                for (M = 0,
                b = p.length; M < b; ++M) {
                    if (z = this.clone().startOf("day").valueOf(),
                    p[M].since <= z && z <= p[M].until)
                        return p[M].name;
                    if (p[M].until <= z && z <= p[M].since)
                        return p[M].name
                }
                return ""
            }
            function YO() {
                var M, b, z, p = this.localeData().eras();
                for (M = 0,
                b = p.length; M < b; ++M) {
                    if (z = this.clone().startOf("day").valueOf(),
                    p[M].since <= z && z <= p[M].until)
                        return p[M].narrow;
                    if (p[M].until <= z && z <= p[M].since)
                        return p[M].narrow
                }
                return ""
            }
            function vO() {
                var M, b, z, p = this.localeData().eras();
                for (M = 0,
                b = p.length; M < b; ++M) {
                    if (z = this.clone().startOf("day").valueOf(),
                    p[M].since <= z && z <= p[M].until)
                        return p[M].abbr;
                    if (p[M].until <= z && z <= p[M].since)
                        return p[M].abbr
                }
                return ""
            }
            function kO() {
                var M, b, z, p, o = this.localeData().eras();
                for (M = 0,
                b = o.length; M < b; ++M)
                    if (z = o[M].since <= o[M].until ? 1 : -1,
                    p = this.clone().startOf("day").valueOf(),
                    o[M].since <= p && p <= o[M].until || o[M].until <= p && p <= o[M].since)
                        return (this.year() - O(o[M].since).year()) * z + o[M].offset;
                return this.year()
            }
            function DO(M) {
                return n(this, "_erasNameRegex") || PO.call(this),
                M ? this._erasNameRegex : this._erasRegex
            }
            function wO(M) {
                return n(this, "_erasAbbrRegex") || PO.call(this),
                M ? this._erasAbbrRegex : this._erasRegex
            }
            function SO(M) {
                return n(this, "_erasNarrowRegex") || PO.call(this),
                M ? this._erasNarrowRegex : this._erasRegex
            }
            function HO(M, b) {
                return b.erasAbbrRegex(M)
            }
            function EO(M, b) {
                return b.erasNameRegex(M)
            }
            function xO(M, b) {
                return b.erasNarrowRegex(M)
            }
            function jO(M, b) {
                return b._eraYearOrdinalRegex || TM
            }
            function PO() {
                var M, b, z = [], p = [], O = [], o = [], e = this.eras();
                for (M = 0,
                b = e.length; M < b; ++M)
                    p.push(HM(e[M].name)),
                    z.push(HM(e[M].abbr)),
                    O.push(HM(e[M].narrow)),
                    o.push(HM(e[M].name)),
                    o.push(HM(e[M].abbr)),
                    o.push(HM(e[M].narrow));
                this._erasRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._erasNameRegex = new RegExp("^(" + p.join("|") + ")","i"),
                this._erasAbbrRegex = new RegExp("^(" + z.join("|") + ")","i"),
                this._erasNarrowRegex = new RegExp("^(" + O.join("|") + ")","i")
            }
            function CO(M, b) {
                j(0, [M, M.length], 0, b)
            }
            function FO(M) {
                return VO.call(this, M, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function IO(M) {
                return VO.call(this, M, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function UO() {
                return Rb(this.year(), 1, 4)
            }
            function GO() {
                return Rb(this.isoWeekYear(), 1, 4)
            }
            function JO() {
                var M = this.localeData()._week;
                return Rb(this.year(), M.dow, M.doy)
            }
            function KO() {
                var M = this.localeData()._week;
                return Rb(this.weekYear(), M.dow, M.doy)
            }
            function VO(M, b, z, p, O) {
                var o;
                return null == M ? mb(this, p, O).year : (b > (o = Rb(M, p, O)) && (b = o),
                QO.call(this, M, b, z, p, O))
            }
            function QO(M, b, z, p, O) {
                var o = Lb(M, b, z, p, O)
                  , e = fb(o.year, 0, o.dayOfYear);
                return this.year(e.getUTCFullYear()),
                this.month(e.getUTCMonth()),
                this.date(e.getUTCDate()),
                this
            }
            function $O(M) {
                return null == M ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (M - 1) + this.month() % 3)
            }
            j("N", 0, 0, "eraAbbr"),
            j("NN", 0, 0, "eraAbbr"),
            j("NNN", 0, 0, "eraAbbr"),
            j("NNNN", 0, 0, "eraName"),
            j("NNNNN", 0, 0, "eraNarrow"),
            j("y", ["y", 1], "yo", "eraYear"),
            j("y", ["yy", 2], 0, "eraYear"),
            j("y", ["yyy", 3], 0, "eraYear"),
            j("y", ["yyyy", 4], 0, "eraYear"),
            DM("N", HO),
            DM("NN", HO),
            DM("NNN", HO),
            DM("NNNN", EO),
            DM("NNNNN", xO),
            xM(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(M, b, z, p) {
                var O = z._locale.erasParse(M, p, z._strict);
                O ? u(z).era = O : u(z).invalidEra = M
            }
            )),
            DM("y", TM),
            DM("yy", TM),
            DM("yyy", TM),
            DM("yyyy", TM),
            DM("yo", jO),
            xM(["y", "yy", "yyy", "yyyy"], FM),
            xM(["yo"], (function(M, b, z, p) {
                var O;
                z._locale._eraYearOrdinalRegex && (O = M.match(z._locale._eraYearOrdinalRegex)),
                z._locale.eraYearOrdinalParse ? b[FM] = z._locale.eraYearOrdinalParse(M, O) : b[FM] = parseInt(M, 10)
            }
            )),
            j(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            }
            )),
            j(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            }
            )),
            CO("gggg", "weekYear"),
            CO("ggggg", "weekYear"),
            CO("GGGG", "isoWeekYear"),
            CO("GGGGG", "isoWeekYear"),
            pM("weekYear", "gg"),
            pM("isoWeekYear", "GG"),
            cM("weekYear", 1),
            cM("isoWeekYear", 1),
            DM("G", gM),
            DM("g", gM),
            DM("GG", mM, lM),
            DM("gg", mM, lM),
            DM("GGGG", NM, _M),
            DM("gggg", NM, _M),
            DM("GGGGG", BM, LM),
            DM("ggggg", BM, LM),
            jM(["gggg", "ggggg", "GGGG", "GGGGG"], (function(M, b, z, p) {
                b[p.substr(0, 2)] = AM(M)
            }
            )),
            jM(["gg", "GG"], (function(M, b, z, p) {
                b[p] = O.parseTwoDigitYear(M)
            }
            )),
            j("Q", 0, "Qo", "quarter"),
            pM("quarter", "Q"),
            cM("quarter", 7),
            DM("Q", WM),
            xM("Q", (function(M, b) {
                b[IM] = 3 * (AM(M) - 1)
            }
            )),
            j("D", ["DD", 2], "Do", "date"),
            pM("date", "D"),
            cM("date", 9),
            DM("D", mM),
            DM("DD", mM, lM),
            DM("Do", (function(M, b) {
                return M ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
            }
            )),
            xM(["D", "DD"], UM),
            xM("Do", (function(M, b) {
                b[UM] = AM(M.match(mM)[0])
            }
            ));
            var ZO = dM("Date", !0);
            function Mo(M) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == M ? b : this.add(M - b, "d")
            }
            j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            pM("dayOfYear", "DDD"),
            cM("dayOfYear", 4),
            DM("DDD", yM),
            DM("DDDD", fM),
            xM(["DDD", "DDDD"], (function(M, b, z) {
                z._dayOfYear = AM(M)
            }
            )),
            j("m", ["mm", 2], 0, "minute"),
            pM("minute", "m"),
            cM("minute", 14),
            DM("m", mM),
            DM("mm", mM, lM),
            xM(["m", "mm"], JM);
            var bo = dM("Minutes", !1);
            j("s", ["ss", 2], 0, "second"),
            pM("second", "s"),
            cM("second", 15),
            DM("s", mM),
            DM("ss", mM, lM),
            xM(["s", "ss"], KM);
            var zo, po, Oo = dM("Seconds", !1);
            for (j("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100)
            }
            )),
            j(0, ["SS", 2], 0, (function() {
                return ~~(this.millisecond() / 10)
            }
            )),
            j(0, ["SSS", 3], 0, "millisecond"),
            j(0, ["SSSS", 4], 0, (function() {
                return 10 * this.millisecond()
            }
            )),
            j(0, ["SSSSS", 5], 0, (function() {
                return 100 * this.millisecond()
            }
            )),
            j(0, ["SSSSSS", 6], 0, (function() {
                return 1e3 * this.millisecond()
            }
            )),
            j(0, ["SSSSSSS", 7], 0, (function() {
                return 1e4 * this.millisecond()
            }
            )),
            j(0, ["SSSSSSSS", 8], 0, (function() {
                return 1e5 * this.millisecond()
            }
            )),
            j(0, ["SSSSSSSSS", 9], 0, (function() {
                return 1e6 * this.millisecond()
            }
            )),
            pM("millisecond", "ms"),
            cM("millisecond", 16),
            DM("S", yM, WM),
            DM("SS", yM, lM),
            DM("SSS", yM, fM),
            zo = "SSSS"; zo.length <= 9; zo += "S")
                DM(zo, TM);
            function oo(M, b) {
                b[VM] = AM(1e3 * ("0." + M))
            }
            for (zo = "S"; zo.length <= 9; zo += "S")
                xM(zo, oo);
            function eo() {
                return this._isUTC ? "UTC" : ""
            }
            function co() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            po = dM("Milliseconds", !1),
            j("z", 0, 0, "zoneAbbr"),
            j("zz", 0, 0, "zoneName");
            var no = m.prototype;
            function to(M) {
                return Kz(1e3 * M)
            }
            function ao() {
                return Kz.apply(null, arguments).parseZone()
            }
            function Ao(M) {
                return M
            }
            no.add = kp,
            no.calendar = Pp,
            no.clone = Cp,
            no.diff = Vp,
            no.endOf = uO,
            no.format = bO,
            no.from = zO,
            no.fromNow = pO,
            no.to = OO,
            no.toNow = oO,
            no.get = qM,
            no.invalidAt = yO,
            no.isAfter = Fp,
            no.isBefore = Ip,
            no.isBetween = Up,
            no.isSame = Gp,
            no.isSameOrAfter = Jp,
            no.isSameOrBefore = Kp,
            no.isValid = RO,
            no.lang = cO,
            no.locale = eO,
            no.localeData = nO,
            no.max = Qz,
            no.min = Vz,
            no.parsingFlags = hO,
            no.set = sM,
            no.startOf = sO,
            no.subtract = Dp,
            no.toArray = _O,
            no.toObject = LO,
            no.toDate = fO,
            no.toISOString = Zp,
            no.inspect = MO,
            "undefined" != typeof Symbol && null != Symbol.for && (no[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">"
            }
            ),
            no.toJSON = mO,
            no.toString = $p,
            no.unix = lO,
            no.valueOf = WO,
            no.creationData = NO,
            no.eraName = XO,
            no.eraNarrow = YO,
            no.eraAbbr = vO,
            no.eraYear = kO,
            no.year = ub,
            no.isLeapYear = Wb,
            no.weekYear = FO,
            no.isoWeekYear = IO,
            no.quarter = no.quarters = $O,
            no.month = Ab,
            no.daysInMonth = db,
            no.week = no.weeks = Tb,
            no.isoWeek = no.isoWeeks = gb,
            no.weeksInYear = JO,
            no.weeksInWeekYear = KO,
            no.isoWeeksInYear = UO,
            no.isoWeeksInISOWeekYear = GO,
            no.date = ZO,
            no.day = no.days = Ib,
            no.weekday = Ub,
            no.isoWeekday = Gb,
            no.dayOfYear = Mo,
            no.hour = no.hours = Oz,
            no.minute = no.minutes = bo,
            no.second = no.seconds = Oo,
            no.millisecond = no.milliseconds = po,
            no.utcOffset = qp,
            no.utc = up,
            no.local = Wp,
            no.parseZone = lp,
            no.hasAlignedHourOffset = fp,
            no.isDST = _p,
            no.isLocal = mp,
            no.isUtcOffset = Rp,
            no.isUtc = hp,
            no.isUTC = hp,
            no.zoneAbbr = eo,
            no.zoneName = co,
            no.dates = y("dates accessor is deprecated. Use date instead.", ZO),
            no.months = y("months accessor is deprecated. Use month instead", Ab),
            no.years = y("years accessor is deprecated. Use year instead", ub),
            no.zone = y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", sp),
            no.isDSTShifted = y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Lp);
            var ro = v.prototype;
            function io(M, b, z, p) {
                var O = Wz()
                  , o = q().set(p, b);
                return O[z](o, M)
            }
            function qo(M, b, z) {
                if (A(M) && (b = M,
                M = void 0),
                M = M || "",
                null != b)
                    return io(M, b, z, "month");
                var p, O = [];
                for (p = 0; p < 12; p++)
                    O[p] = io(M, p, z, "month");
                return O
            }
            function so(M, b, z, p) {
                "boolean" == typeof M ? (A(b) && (z = b,
                b = void 0),
                b = b || "") : (z = b = M,
                M = !1,
                A(b) && (z = b,
                b = void 0),
                b = b || "");
                var O, o = Wz(), e = M ? o._week.dow : 0, c = [];
                if (null != z)
                    return io(b, (z + e) % 7, p, "day");
                for (O = 0; O < 7; O++)
                    c[O] = io(b, (O + e) % 7, p, "day");
                return c
            }
            function uo(M, b) {
                return qo(M, b, "months")
            }
            function Wo(M, b) {
                return qo(M, b, "monthsShort")
            }
            function lo(M, b, z) {
                return so(M, b, z, "weekdays")
            }
            function fo(M, b, z) {
                return so(M, b, z, "weekdaysShort")
            }
            function _o(M, b, z) {
                return so(M, b, z, "weekdaysMin")
            }
            ro.calendar = D,
            ro.longDateFormat = G,
            ro.invalidDate = K,
            ro.ordinal = $,
            ro.preparse = Ao,
            ro.postformat = Ao,
            ro.relativeTime = MM,
            ro.pastFuture = bM,
            ro.set = X,
            ro.eras = BO,
            ro.erasParse = TO,
            ro.erasConvertYear = gO,
            ro.erasAbbrRegex = wO,
            ro.erasNameRegex = DO,
            ro.erasNarrowRegex = SO,
            ro.months = eb,
            ro.monthsShort = cb,
            ro.monthsParse = tb,
            ro.monthsRegex = ib,
            ro.monthsShortRegex = rb,
            ro.week = hb,
            ro.firstDayOfYear = Bb,
            ro.firstDayOfWeek = Nb,
            ro.weekdays = xb,
            ro.weekdaysMin = Pb,
            ro.weekdaysShort = jb,
            ro.weekdaysParse = Fb,
            ro.weekdaysRegex = Jb,
            ro.weekdaysShortRegex = Kb,
            ro.weekdaysMinRegex = Vb,
            ro.isPM = zz,
            ro.meridiem = oz,
            qz("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(M) {
                    var b = M % 10;
                    return M + (1 === AM(M % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            }),
            O.lang = y("moment.lang is deprecated. Use moment.locale instead.", qz),
            O.langData = y("moment.langData is deprecated. Use moment.localeData instead.", Wz);
            var Lo = Math.abs;
            function mo() {
                var M = this._data;
                return this._milliseconds = Lo(this._milliseconds),
                this._days = Lo(this._days),
                this._months = Lo(this._months),
                M.milliseconds = Lo(M.milliseconds),
                M.seconds = Lo(M.seconds),
                M.minutes = Lo(M.minutes),
                M.hours = Lo(M.hours),
                M.months = Lo(M.months),
                M.years = Lo(M.years),
                this
            }
            function Ro(M, b, z, p) {
                var O = Bp(b, z);
                return M._milliseconds += p * O._milliseconds,
                M._days += p * O._days,
                M._months += p * O._months,
                M._bubble()
            }
            function ho(M, b) {
                return Ro(this, M, b, 1)
            }
            function yo(M, b) {
                return Ro(this, M, b, -1)
            }
            function No(M) {
                return M < 0 ? Math.floor(M) : Math.ceil(M)
            }
            function Bo() {
                var M, b, z, p, O, o = this._milliseconds, e = this._days, c = this._months, n = this._data;
                return o >= 0 && e >= 0 && c >= 0 || o <= 0 && e <= 0 && c <= 0 || (o += 864e5 * No(go(c) + e),
                e = 0,
                c = 0),
                n.milliseconds = o % 1e3,
                M = aM(o / 1e3),
                n.seconds = M % 60,
                b = aM(M / 60),
                n.minutes = b % 60,
                z = aM(b / 60),
                n.hours = z % 24,
                e += aM(z / 24),
                c += O = aM(To(e)),
                e -= No(go(O)),
                p = aM(c / 12),
                c %= 12,
                n.days = e,
                n.months = c,
                n.years = p,
                this
            }
            function To(M) {
                return 4800 * M / 146097
            }
            function go(M) {
                return 146097 * M / 4800
            }
            function Xo(M) {
                if (!this.isValid())
                    return NaN;
                var b, z, p = this._milliseconds;
                if ("month" === (M = OM(M)) || "quarter" === M || "year" === M)
                    switch (b = this._days + p / 864e5,
                    z = this._months + To(b),
                    M) {
                    case "month":
                        return z;
                    case "quarter":
                        return z / 3;
                    case "year":
                        return z / 12
                    }
                else
                    switch (b = this._days + Math.round(go(this._months)),
                    M) {
                    case "week":
                        return b / 7 + p / 6048e5;
                    case "day":
                        return b + p / 864e5;
                    case "hour":
                        return 24 * b + p / 36e5;
                    case "minute":
                        return 1440 * b + p / 6e4;
                    case "second":
                        return 86400 * b + p / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * b) + p;
                    default:
                        throw new Error("Unknown unit " + M)
                    }
            }
            function Yo() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * AM(this._months / 12) : NaN
            }
            function vo(M) {
                return function() {
                    return this.as(M)
                }
            }
            var ko = vo("ms")
              , Do = vo("s")
              , wo = vo("m")
              , So = vo("h")
              , Ho = vo("d")
              , Eo = vo("w")
              , xo = vo("M")
              , jo = vo("Q")
              , Po = vo("y");
            function Co() {
                return Bp(this)
            }
            function Fo(M) {
                return M = OM(M),
                this.isValid() ? this[M + "s"]() : NaN
            }
            function Io(M) {
                return function() {
                    return this.isValid() ? this._data[M] : NaN
                }
            }
            var Uo = Io("milliseconds")
              , Go = Io("seconds")
              , Jo = Io("minutes")
              , Ko = Io("hours")
              , Vo = Io("days")
              , Qo = Io("months")
              , $o = Io("years");
            function Zo() {
                return aM(this.days() / 7)
            }
            var Me = Math.round
              , be = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                w: null,
                M: 11
            };
            function ze(M, b, z, p, O) {
                return O.relativeTime(b || 1, !!z, M, p)
            }
            function pe(M, b, z, p) {
                var O = Bp(M).abs()
                  , o = Me(O.as("s"))
                  , e = Me(O.as("m"))
                  , c = Me(O.as("h"))
                  , n = Me(O.as("d"))
                  , t = Me(O.as("M"))
                  , a = Me(O.as("w"))
                  , A = Me(O.as("y"))
                  , d = o <= z.ss && ["s", o] || o < z.s && ["ss", o] || e <= 1 && ["m"] || e < z.m && ["mm", e] || c <= 1 && ["h"] || c < z.h && ["hh", c] || n <= 1 && ["d"] || n < z.d && ["dd", n];
                return null != z.w && (d = d || a <= 1 && ["w"] || a < z.w && ["ww", a]),
                (d = d || t <= 1 && ["M"] || t < z.M && ["MM", t] || A <= 1 && ["y"] || ["yy", A])[2] = b,
                d[3] = +M > 0,
                d[4] = p,
                ze.apply(null, d)
            }
            function Oe(M) {
                return void 0 === M ? Me : "function" == typeof M && (Me = M,
                !0)
            }
            function oe(M, b) {
                return void 0 !== be[M] && (void 0 === b ? be[M] : (be[M] = b,
                "s" === M && (be.ss = b - 1),
                !0))
            }
            function ee(M, b) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var z, p, O = !1, o = be;
                return "object" == typeof M && (b = M,
                M = !1),
                "boolean" == typeof M && (O = M),
                "object" == typeof b && (o = Object.assign({}, be, b),
                null != b.s && null == b.ss && (o.ss = b.s - 1)),
                p = pe(this, !O, o, z = this.localeData()),
                O && (p = z.pastFuture(+this, p)),
                z.postformat(p)
            }
            var ce = Math.abs;
            function ne(M) {
                return (M > 0) - (M < 0) || +M
            }
            function te() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var M, b, z, p, O, o, e, c, n = ce(this._milliseconds) / 1e3, t = ce(this._days), a = ce(this._months), A = this.asSeconds();
                return A ? (M = aM(n / 60),
                b = aM(M / 60),
                n %= 60,
                M %= 60,
                z = aM(a / 12),
                a %= 12,
                p = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                O = A < 0 ? "-" : "",
                o = ne(this._months) !== ne(A) ? "-" : "",
                e = ne(this._days) !== ne(A) ? "-" : "",
                c = ne(this._milliseconds) !== ne(A) ? "-" : "",
                O + "P" + (z ? o + z + "Y" : "") + (a ? o + a + "M" : "") + (t ? e + t + "D" : "") + (b || M || n ? "T" : "") + (b ? c + b + "H" : "") + (M ? c + M + "M" : "") + (n ? c + p + "S" : "")) : "P0D"
            }
            var ae = ep.prototype;
            return ae.isValid = Op,
            ae.abs = mo,
            ae.add = ho,
            ae.subtract = yo,
            ae.as = Xo,
            ae.asMilliseconds = ko,
            ae.asSeconds = Do,
            ae.asMinutes = wo,
            ae.asHours = So,
            ae.asDays = Ho,
            ae.asWeeks = Eo,
            ae.asMonths = xo,
            ae.asQuarters = jo,
            ae.asYears = Po,
            ae.valueOf = Yo,
            ae._bubble = Bo,
            ae.clone = Co,
            ae.get = Fo,
            ae.milliseconds = Uo,
            ae.seconds = Go,
            ae.minutes = Jo,
            ae.hours = Ko,
            ae.days = Vo,
            ae.weeks = Zo,
            ae.months = Qo,
            ae.years = $o,
            ae.humanize = ee,
            ae.toISOString = te,
            ae.toString = te,
            ae.toJSON = te,
            ae.locale = eO,
            ae.localeData = nO,
            ae.toIsoString = y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", te),
            ae.lang = cO,
            j("X", 0, 0, "unix"),
            j("x", 0, 0, "valueOf"),
            DM("x", gM),
            DM("X", vM),
            xM("X", (function(M, b, z) {
                z._d = new Date(1e3 * parseFloat(M))
            }
            )),
            xM("x", (function(M, b, z) {
                z._d = new Date(AM(M))
            }
            )),
            O.version = "2.29.4",
            o(Kz),
            O.fn = no,
            O.min = Zz,
            O.max = Mp,
            O.now = bp,
            O.utc = q,
            O.unix = to,
            O.months = uo,
            O.isDate = d,
            O.locale = qz,
            O.invalid = l,
            O.duration = Bp,
            O.isMoment = R,
            O.weekdays = lo,
            O.parseZone = ao,
            O.localeData = Wz,
            O.isDuration = cp,
            O.monthsShort = Wo,
            O.weekdaysMin = _o,
            O.defineLocale = sz,
            O.updateLocale = uz,
            O.locales = lz,
            O.weekdaysShort = fo,
            O.normalizeUnits = OM,
            O.relativeTimeRounding = Oe,
            O.relativeTimeThreshold = oe,
            O.calendarFormat = jp,
            O.prototype = no,
            O.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            },
            O
        }()
    },
    78570: (M, b, z) => {
        "use strict";
        var p;
        z.d(b, {
            Z: () => A
        });
        var O = new Uint8Array(16);
        function o() {
            if (!p && !(p = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return p(O)
        }
        const e = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        const c = function(M) {
            return "string" == typeof M && e.test(M)
        };
        for (var n = [], t = 0; t < 256; ++t)
            n.push((t + 256).toString(16).substr(1));
        const a = function(M) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , z = (n[M[b + 0]] + n[M[b + 1]] + n[M[b + 2]] + n[M[b + 3]] + "-" + n[M[b + 4]] + n[M[b + 5]] + "-" + n[M[b + 6]] + n[M[b + 7]] + "-" + n[M[b + 8]] + n[M[b + 9]] + "-" + n[M[b + 10]] + n[M[b + 11]] + n[M[b + 12]] + n[M[b + 13]] + n[M[b + 14]] + n[M[b + 15]]).toLowerCase();
            if (!c(z))
                throw TypeError("Stringified UUID is invalid");
            return z
        };
        const A = function(M, b, z) {
            var p = (M = M || {}).random || (M.rng || o)();
            if (p[6] = 15 & p[6] | 64,
            p[8] = 63 & p[8] | 128,
            b) {
                z = z || 0;
                for (var O = 0; O < 16; ++O)
                    b[z + O] = p[O];
                return b
            }
            return a(p)
        }
    }
    ,
    33152: (M, b, z) => {
        "use strict";
        z.d(b, {
            cv: () => o,
            Zi: () => e
        });
        var p = z(67097);
        const O = ( (M, b) => {
            let z = null;
            return () => {
                if (null !== z)
                    return z;
                const p = new Blob([b],{
                    type: "application/javascript; charset=utf-8"
                })
                  , O = URL.createObjectURL(p);
                return z = M(O),
                setTimeout(( () => URL.revokeObjectURL(O))),
                z
            }
        }
        )((M => {
            const b = new Map([[0, () => {}
            ]])
              , z = new Map([[0, () => {}
            ]])
              , O = new Map
              , o = new Worker(M);
            o.addEventListener("message", ( ({data: M}) => {
                if (void 0 !== (p = M).method && "call" === p.method) {
                    const {params: {timerId: p, timerType: o}} = M;
                    if ("interval" === o) {
                        const M = b.get(p);
                        if ("number" == typeof M) {
                            const b = O.get(M);
                            if (void 0 === b || b.timerId !== p || b.timerType !== o)
                                throw new Error("The timer is in an undefined state.")
                        } else {
                            if (void 0 === M)
                                throw new Error("The timer is in an undefined state.");
                            M()
                        }
                    } else if ("timeout" === o) {
                        const M = z.get(p);
                        if ("number" == typeof M) {
                            const b = O.get(M);
                            if (void 0 === b || b.timerId !== p || b.timerType !== o)
                                throw new Error("The timer is in an undefined state.")
                        } else {
                            if (void 0 === M)
                                throw new Error("The timer is in an undefined state.");
                            M(),
                            z.delete(p)
                        }
                    }
                } else {
                    if (!(M => null === M.error && "number" == typeof M.id)(M)) {
                        const {error: {message: b}} = M;
                        throw new Error(b)
                    }
                    {
                        const {id: p} = M
                          , o = O.get(p);
                        if (void 0 === o)
                            throw new Error("The timer is in an undefined state.");
                        const {timerId: e, timerType: c} = o;
                        O.delete(p),
                        "interval" === c ? b.delete(e) : z.delete(e)
                    }
                }
                var p
            }
            ));
            return {
                clearInterval: M => {
                    const z = (0,
                    p.generateUniqueNumber)(O);
                    O.set(z, {
                        timerId: M,
                        timerType: "interval"
                    }),
                    b.set(M, z),
                    o.postMessage({
                        id: z,
                        method: "clear",
                        params: {
                            timerId: M,
                            timerType: "interval"
                        }
                    })
                }
                ,
                clearTimeout: M => {
                    const b = (0,
                    p.generateUniqueNumber)(O);
                    O.set(b, {
                        timerId: M,
                        timerType: "timeout"
                    }),
                    z.set(M, b),
                    o.postMessage({
                        id: b,
                        method: "clear",
                        params: {
                            timerId: M,
                            timerType: "timeout"
                        }
                    })
                }
                ,
                setInterval: (M, z) => {
                    const O = (0,
                    p.generateUniqueNumber)(b);
                    return b.set(O, ( () => {
                        M(),
                        "function" == typeof b.get(O) && o.postMessage({
                            id: null,
                            method: "set",
                            params: {
                                delay: z,
                                now: performance.now(),
                                timerId: O,
                                timerType: "interval"
                            }
                        })
                    }
                    )),
                    o.postMessage({
                        id: null,
                        method: "set",
                        params: {
                            delay: z,
                            now: performance.now(),
                            timerId: O,
                            timerType: "interval"
                        }
                    }),
                    O
                }
                ,
                setTimeout: (M, b) => {
                    const O = (0,
                    p.generateUniqueNumber)(z);
                    return z.set(O, M),
                    o.postMessage({
                        id: null,
                        method: "set",
                        params: {
                            delay: b,
                            now: performance.now(),
                            timerId: O,
                            timerType: "timeout"
                        }
                    }),
                    O
                }
            }
        }
        ), '(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error(\'The given type "\'.concat(i,\'" is not supported\'));(e=>{const r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error(\'The given method "\'.concat(s.method,\'" is not supported\'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error(\'The given type "\'.concat(d,\'" is not supported\'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();')
          , o = M => O().clearInterval(M)
          , e = (M, b) => O().setInterval(M, b)
    }
    ,
    91128: M => {
        "use strict";
    }
}]);