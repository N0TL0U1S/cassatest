/*! For license information please see 484.bundle.468f2b910cfb51d7ade7.js.LICENSE.txt */
"use strict";
(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[484], {
    7484: (t, e, r) => {
        r.d(e, {
            ZP: () => mr
        });
        var n = r(7209)
          , i = Uint8Array
          , a = Uint16Array
          , o = Uint32Array
          , s = new i([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
          , u = new i([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
          , c = new i([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
          , h = function(t, e) {
            for (var r = new a(31), n = 0; n < 31; ++n)
                r[n] = e += 1 << t[n - 1];
            var i = new o(r[30]);
            for (n = 1; n < 30; ++n)
                for (var s = r[n]; s < r[n + 1]; ++s)
                    i[s] = s - r[n] << 5 | n;
            return [r, i]
        }
          , l = h(s, 2)
          , f = l[0]
          , d = l[1];
        f[28] = 258,
        d[258] = 28;
        for (var p = h(u, 0), g = p[0], m = p[1], v = new a(32768), b = 0; b < 32768; ++b) {
            var y = (43690 & b) >>> 1 | (21845 & b) << 1;
            y = (61680 & (y = (52428 & y) >>> 2 | (13107 & y) << 2)) >>> 4 | (3855 & y) << 4,
            v[b] = ((65280 & y) >>> 8 | (255 & y) << 8) >>> 1
        }
        var w = function(t, e, r) {
            for (var n = t.length, i = 0, o = new a(e); i < n; ++i)
                ++o[t[i] - 1];
            var s, u = new a(e);
            for (i = 0; i < e; ++i)
                u[i] = u[i - 1] + o[i - 1] << 1;
            if (r) {
                s = new a(1 << e);
                var c = 15 - e;
                for (i = 0; i < n; ++i)
                    if (t[i])
                        for (var h = i << 4 | t[i], l = e - t[i], f = u[t[i] - 1]++ << l, d = f | (1 << l) - 1; f <= d; ++f)
                            s[v[f] >>> c] = h
            } else
                for (s = new a(n),
                i = 0; i < n; ++i)
                    s[i] = v[u[t[i] - 1]++] >>> 15 - t[i];
            return s
        }
          , N = new i(288);
        for (b = 0; b < 144; ++b)
            N[b] = 8;
        for (b = 144; b < 256; ++b)
            N[b] = 9;
        for (b = 256; b < 280; ++b)
            N[b] = 7;
        for (b = 280; b < 288; ++b)
            N[b] = 8;
        var L = new i(32);
        for (b = 0; b < 32; ++b)
            L[b] = 5;
        var A = w(N, 9, 0)
          , x = w(N, 9, 1)
          , S = w(L, 5, 0)
          , _ = w(L, 5, 1)
          , P = function(t) {
            for (var e = t[0], r = 1; r < t.length; ++r)
                t[r] > e && (e = t[r]);
            return e
        }
          , k = function(t, e, r) {
            var n = e / 8 >> 0;
            return (t[n] | t[n + 1] << 8) >>> (7 & e) & r
        }
          , I = function(t, e) {
            var r = e / 8 >> 0;
            return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >>> (7 & e)
        }
          , F = function(t) {
            return (t / 8 >> 0) + (7 & t && 1)
        }
          , C = function(t, e, r) {
            (null == e || e < 0) && (e = 0),
            (null == r || r > t.length) && (r = t.length);
            var n = new (t instanceof a ? a : t instanceof o ? o : i)(r - e);
            return n.set(t.subarray(e, r)),
            n
        }
          , j = function(t, e, r) {
            var n = t.length
              , a = !e || r
              , o = !r || r.i;
            r || (r = {}),
            e || (e = new i(3 * n));
            var h = function(t) {
                var r = e.length;
                if (t > r) {
                    var n = new i(Math.max(2 * r, t));
                    n.set(e),
                    e = n
                }
            }
              , l = r.f || 0
              , d = r.p || 0
              , p = r.b || 0
              , m = r.l
              , v = r.d
              , b = r.m
              , y = r.n
              , N = 8 * n;
            do {
                if (!m) {
                    r.f = l = k(t, d, 1);
                    var L = k(t, d + 1, 3);
                    if (d += 3,
                    !L) {
                        var A = t[(U = F(d) + 4) - 4] | t[U - 3] << 8
                          , S = U + A;
                        if (S > n) {
                            if (o)
                                throw "unexpected EOF";
                            break
                        }
                        a && h(p + A),
                        e.set(t.subarray(U, S), p),
                        r.b = p += A,
                        r.p = d = 8 * S;
                        continue
                    }
                    if (1 == L)
                        m = x,
                        v = _,
                        b = 9,
                        y = 5;
                    else {
                        if (2 != L)
                            throw "invalid block type";
                        var j = k(t, d, 31) + 257
                          , O = k(t, d + 10, 15) + 4
                          , B = j + k(t, d + 5, 31) + 1;
                        d += 14;
                        for (var M = new i(B), E = new i(19), q = 0; q < O; ++q)
                            E[c[q]] = k(t, d + 3 * q, 7);
                        d += 3 * O;
                        var D = P(E)
                          , R = (1 << D) - 1;
                        if (!o && d + B * (D + 7) > N)
                            break;
                        var T = w(E, D, 1);
                        for (q = 0; q < B; ) {
                            var U, z = T[k(t, d, R)];
                            if (d += 15 & z,
                            (U = z >>> 4) < 16)
                                M[q++] = U;
                            else {
                                var H = 0
                                  , W = 0;
                                for (16 == U ? (W = 3 + k(t, d, 3),
                                d += 2,
                                H = M[q - 1]) : 17 == U ? (W = 3 + k(t, d, 7),
                                d += 3) : 18 == U && (W = 11 + k(t, d, 127),
                                d += 7); W--; )
                                    M[q++] = H
                            }
                        }
                        var V = M.subarray(0, j)
                          , G = M.subarray(j);
                        b = P(V),
                        y = P(G),
                        m = w(V, b, 1),
                        v = w(G, y, 1)
                    }
                    if (d > N)
                        throw "unexpected EOF"
                }
                a && h(p + 131072);
                for (var Y = (1 << b) - 1, J = (1 << y) - 1, X = b + y + 18; o || d + X < N; ) {
                    var K = (H = m[I(t, d) & Y]) >>> 4;
                    if ((d += 15 & H) > N)
                        throw "unexpected EOF";
                    if (!H)
                        throw "invalid length/literal";
                    if (K < 256)
                        e[p++] = K;
                    else {
                        if (256 == K) {
                            m = null;
                            break
                        }
                        var Z = K - 254;
                        if (K > 264) {
                            var $ = s[q = K - 257];
                            Z = k(t, d, (1 << $) - 1) + f[q],
                            d += $
                        }
                        var Q = v[I(t, d) & J]
                          , tt = Q >>> 4;
                        if (!Q)
                            throw "invalid distance";
                        d += 15 & Q;
                        G = g[tt];
                        if (tt > 3) {
                            $ = u[tt];
                            G += I(t, d) & (1 << $) - 1,
                            d += $
                        }
                        if (d > N)
                            throw "unexpected EOF";
                        a && h(p + 131072);
                        for (var et = p + Z; p < et; p += 4)
                            e[p] = e[p - G],
                            e[p + 1] = e[p + 1 - G],
                            e[p + 2] = e[p + 2 - G],
                            e[p + 3] = e[p + 3 - G];
                        p = et
                    }
                }
                r.l = m,
                r.p = d,
                r.b = p,
                m && (l = 1,
                r.m = b,
                r.d = v,
                r.n = y)
            } while (!l);
            return p == e.length ? e : C(e, 0, p)
        }
          , O = function(t, e, r) {
            r <<= 7 & e;
            var n = e / 8 >> 0;
            t[n] |= r,
            t[n + 1] |= r >>> 8
        }
          , B = function(t, e, r) {
            r <<= 7 & e;
            var n = e / 8 >> 0;
            t[n] |= r,
            t[n + 1] |= r >>> 8,
            t[n + 2] |= r >>> 16
        }
          , M = function(t, e) {
            for (var r = [], n = 0; n < t.length; ++n)
                t[n] && r.push({
                    s: n,
                    f: t[n]
                });
            var o = r.length
              , s = r.slice();
            if (!o)
                return [new i(0), 0];
            if (1 == o) {
                var u = new i(r[0].s + 1);
                return u[r[0].s] = 1,
                [u, 1]
            }
            r.sort((function(t, e) {
                return t.f - e.f
            }
            )),
            r.push({
                s: -1,
                f: 25001
            });
            var c = r[0]
              , h = r[1]
              , l = 0
              , f = 1
              , d = 2;
            for (r[0] = {
                s: -1,
                f: c.f + h.f,
                l: c,
                r: h
            }; f != o - 1; )
                c = r[r[l].f < r[d].f ? l++ : d++],
                h = r[l != f && r[l].f < r[d].f ? l++ : d++],
                r[f++] = {
                    s: -1,
                    f: c.f + h.f,
                    l: c,
                    r: h
                };
            var p = s[0].s;
            for (n = 1; n < o; ++n)
                s[n].s > p && (p = s[n].s);
            var g = new a(p + 1)
              , m = E(r[f - 1], g, 0);
            if (m > e) {
                n = 0;
                var v = 0
                  , b = m - e
                  , y = 1 << b;
                for (s.sort((function(t, e) {
                    return g[e.s] - g[t.s] || t.f - e.f
                }
                )); n < o; ++n) {
                    var w = s[n].s;
                    if (!(g[w] > e))
                        break;
                    v += y - (1 << m - g[w]),
                    g[w] = e
                }
                for (v >>>= b; v > 0; ) {
                    var N = s[n].s;
                    g[N] < e ? v -= 1 << e - g[N]++ - 1 : ++n
                }
                for (; n >= 0 && v; --n) {
                    var L = s[n].s;
                    g[L] == e && (--g[L],
                    ++v)
                }
                m = e
            }
            return [new i(g), m]
        }
          , E = function(t, e, r) {
            return -1 == t.s ? Math.max(E(t.l, e, r + 1), E(t.r, e, r + 1)) : e[t.s] = r
        }
          , q = function(t) {
            for (var e = t.length; e && !t[--e]; )
                ;
            for (var r = new a(++e), n = 0, i = t[0], o = 1, s = function(t) {
                r[n++] = t
            }, u = 1; u <= e; ++u)
                if (t[u] == i && u != e)
                    ++o;
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138)
                            s(32754);
                        o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305),
                        o = 0)
                    } else if (o > 3) {
                        for (s(i),
                        --o; o > 6; o -= 6)
                            s(8304);
                        o > 2 && (s(o - 3 << 5 | 8208),
                        o = 0)
                    }
                    for (; o--; )
                        s(i);
                    o = 1,
                    i = t[u]
                }
            return [r.subarray(0, n), e]
        }
          , D = function(t, e) {
            for (var r = 0, n = 0; n < e.length; ++n)
                r += t[n] * e[n];
            return r
        }
          , R = function(t, e, r) {
            var n = r.length
              , i = F(e + 2);
            t[i] = 255 & n,
            t[i + 1] = n >>> 8,
            t[i + 2] = 255 ^ t[i],
            t[i + 3] = 255 ^ t[i + 1];
            for (var a = 0; a < n; ++a)
                t[i + a + 4] = r[a];
            return 8 * (i + 4 + n)
        }
          , T = function(t, e, r, n, i, o, h, l, f, d, p) {
            O(e, p++, r),
            ++i[256];
            for (var g = M(i, 15), m = g[0], v = g[1], b = M(o, 15), y = b[0], x = b[1], _ = q(m), P = _[0], k = _[1], I = q(y), F = I[0], C = I[1], j = new a(19), E = 0; E < P.length; ++E)
                j[31 & P[E]]++;
            for (E = 0; E < F.length; ++E)
                j[31 & F[E]]++;
            for (var T = M(j, 7), U = T[0], z = T[1], H = 19; H > 4 && !U[c[H - 1]]; --H)
                ;
            var W, V, G, Y, J = d + 5 << 3, X = D(i, N) + D(o, L) + h, K = D(i, m) + D(o, y) + h + 14 + 3 * H + D(j, U) + (2 * j[16] + 3 * j[17] + 7 * j[18]);
            if (J <= X && J <= K)
                return R(e, p, t.subarray(f, f + d));
            if (O(e, p, 1 + (K < X)),
            p += 2,
            K < X) {
                W = w(m, v, 0),
                V = m,
                G = w(y, x, 0),
                Y = y;
                var Z = w(U, z, 0);
                O(e, p, k - 257),
                O(e, p + 5, C - 1),
                O(e, p + 10, H - 4),
                p += 14;
                for (E = 0; E < H; ++E)
                    O(e, p + 3 * E, U[c[E]]);
                p += 3 * H;
                for (var $ = [P, F], Q = 0; Q < 2; ++Q) {
                    var tt = $[Q];
                    for (E = 0; E < tt.length; ++E) {
                        var et = 31 & tt[E];
                        O(e, p, Z[et]),
                        p += U[et],
                        et > 15 && (O(e, p, tt[E] >>> 5 & 127),
                        p += tt[E] >>> 12)
                    }
                }
            } else
                W = A,
                V = N,
                G = S,
                Y = L;
            for (E = 0; E < l; ++E)
                if (n[E] > 255) {
                    et = n[E] >>> 18 & 31;
                    B(e, p, W[et + 257]),
                    p += V[et + 257],
                    et > 7 && (O(e, p, n[E] >>> 23 & 31),
                    p += s[et]);
                    var rt = 31 & n[E];
                    B(e, p, G[rt]),
                    p += Y[rt],
                    rt > 3 && (B(e, p, n[E] >>> 5 & 8191),
                    p += u[rt])
                } else
                    B(e, p, W[n[E]]),
                    p += V[n[E]];
            return B(e, p, W[256]),
            p + V[256]
        }
          , U = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
          , z = new i(0)
          , H = function(t, e, r, n, c, h) {
            var l = t.length
              , f = new i(n + l + 5 * (1 + Math.floor(l / 7e3)) + c)
              , p = f.subarray(n, f.length - c)
              , g = 0;
            if (!e || l < 8)
                for (var v = 0; v <= l; v += 65535) {
                    var b = v + 65535;
                    b < l ? g = R(p, g, t.subarray(v, b)) : (p[v] = h,
                    g = R(p, g, t.subarray(v, l)))
                }
            else {
                for (var y = U[e - 1], w = y >>> 13, N = 8191 & y, L = (1 << r) - 1, A = new a(32768), x = new a(L + 1), S = Math.ceil(r / 3), _ = 2 * S, P = function(e) {
                    return (t[e] ^ t[e + 1] << S ^ t[e + 2] << _) & L
                }, k = new o(25e3), I = new a(288), j = new a(32), O = 0, B = 0, M = (v = 0,
                0), E = 0, q = 0; v < l; ++v) {
                    var D = P(v)
                      , H = 32767 & v
                      , W = x[D];
                    if (A[H] = W,
                    x[D] = H,
                    E <= v) {
                        var V = l - v;
                        if ((O > 7e3 || M > 24576) && V > 423) {
                            g = T(t, p, 0, k, I, j, B, M, q, v - q, g),
                            M = O = B = 0,
                            q = v;
                            for (var G = 0; G < 286; ++G)
                                I[G] = 0;
                            for (G = 0; G < 30; ++G)
                                j[G] = 0
                        }
                        var Y = 2
                          , J = 0
                          , X = N
                          , K = H - W & 32767;
                        if (V > 2 && D == P(v - K))
                            for (var Z = Math.min(w, V) - 1, $ = Math.min(32767, v), Q = Math.min(258, V); K <= $ && --X && H != W; ) {
                                if (t[v + Y] == t[v + Y - K]) {
                                    for (var tt = 0; tt < Q && t[v + tt] == t[v + tt - K]; ++tt)
                                        ;
                                    if (tt > Y) {
                                        if (Y = tt,
                                        J = K,
                                        tt > Z)
                                            break;
                                        var et = Math.min(K, tt - 2)
                                          , rt = 0;
                                        for (G = 0; G < et; ++G) {
                                            var nt = v - K + G + 32768 & 32767
                                              , it = nt - A[nt] + 32768 & 32767;
                                            it > rt && (rt = it,
                                            W = nt)
                                        }
                                    }
                                }
                                K += (H = W) - (W = A[H]) + 32768 & 32767
                            }
                        if (J) {
                            k[M++] = 268435456 | d[Y] << 18 | m[J];
                            var at = 31 & d[Y]
                              , ot = 31 & m[J];
                            B += s[at] + u[ot],
                            ++I[257 + at],
                            ++j[ot],
                            E = v + Y,
                            ++O
                        } else
                            k[M++] = t[v],
                            ++I[t[v]]
                    }
                }
                g = T(t, p, h, k, I, j, B, M, q, v - q, g),
                h || (g = R(p, g, z))
            }
            return C(f, 0, n + F(g) + c)
        }
          , W = function() {
            var t = 1
              , e = 0;
            return {
                p: function(r) {
                    for (var n = t, i = e, a = r.length, o = 0; o != a; ) {
                        for (var s = Math.min(o + 5552, a); o < s; ++o)
                            i += n += r[o];
                        n %= 65521,
                        i %= 65521
                    }
                    t = n,
                    e = i
                },
                d: function() {
                    return (t >>> 8 << 16 | (255 & e) << 8 | e >>> 8) + 2 * ((255 & t) << 23)
                }
            }
        }
          , V = function(t, e, r, n, i) {
            return H(t, null == e.level ? 6 : e.level, null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, r, n, !i)
        }
          , G = function(t, e, r) {
            for (; r; ++e)
                t[e] = r,
                r >>>= 8
        }
          , Y = function(t, e) {
            var r = e.level
              , n = 0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2;
            t[0] = 120,
            t[1] = n << 6 | (n ? 32 - 2 * n : 1)
        }
          , J = function(t) {
            if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || (t[0] << 8 | t[1]) % 31)
                throw "invalid zlib data";
            if (32 & t[1])
                throw "invalid zlib data: preset dictionaries not supported"
        };
        function X(t, e) {
            void 0 === e && (e = {});
            var r = W();
            r.p(t);
            var n = V(t, e, 2, 4);
            return Y(n, e),
            G(n, n.length - 4, r.d()),
            n
        }
        function K(t, e) {
            return j((J(t),
            t.subarray(2, -4)), e)
        }
        var Z = function() {
            return "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : this
        }();
        function $() {
            Z.console && "function" == typeof Z.console.log && Z.console.log.apply(Z.console, arguments)
        }
        var Q = {
            log: $,
            warn: function(t) {
                Z.console && ("function" == typeof Z.console.warn ? Z.console.warn.apply(Z.console, arguments) : $.call(null, arguments))
            },
            error: function(t) {
                Z.console && ("function" == typeof Z.console.error ? Z.console.error.apply(Z.console, arguments) : $(t))
            }
        };
        function tt(t, e, r) {
            var n = new XMLHttpRequest;
            n.open("GET", t),
            n.responseType = "blob",
            n.onload = function() {
                at(n.response, e, r)
            }
            ,
            n.onerror = function() {
                Q.error("could not download file")
            }
            ,
            n.send()
        }
        function et(t) {
            var e = new XMLHttpRequest;
            e.open("HEAD", t, !1);
            try {
                e.send()
            } catch (t) {}
            return e.status >= 200 && e.status <= 299
        }
        function rt(t) {
            try {
                t.dispatchEvent(new MouseEvent("click"))
            } catch (r) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                t.dispatchEvent(e)
            }
        }
        var nt, it, at = Z.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : (0,
        n.Z)(window)) || window !== Z ? function() {}
        : "undefined" != typeof HTMLAnchorElement && "download"in HTMLAnchorElement.prototype ? function(t, e, r) {
            var n = Z.URL || Z.webkitURL
              , i = document.createElement("a");
            e = e || t.name || "download",
            i.download = e,
            i.rel = "noopener",
            "string" == typeof t ? (i.href = t,
            i.origin !== location.origin ? et(i.href) ? tt(t, e, r) : rt(i, i.target = "_blank") : rt(i)) : (i.href = n.createObjectURL(t),
            setTimeout((function() {
                n.revokeObjectURL(i.href)
            }
            ), 4e4),
            setTimeout((function() {
                rt(i)
            }
            ), 0))
        }
        : "msSaveOrOpenBlob"in navigator ? function(t, e, r) {
            if (e = e || t.name || "download",
            "string" == typeof t)
                if (et(t))
                    tt(t, e, r);
                else {
                    var i = document.createElement("a");
                    i.href = t,
                    i.target = "_blank",
                    setTimeout((function() {
                        rt(i)
                    }
                    ))
                }
            else
                navigator.msSaveOrOpenBlob(function(t, e) {
                    return void 0 === e ? e = {
                        autoBom: !1
                    } : "object" !== (0,
                    n.Z)(e) && (Q.warn("Deprecated: Expected third argument to be a object"),
                    e = {
                        autoBom: !e
                    }),
                    e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t],{
                        type: t.type
                    }) : t
                }(t, r), e)
        }
        : function(t, e, r, i) {
            if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."),
            "string" == typeof t)
                return tt(t, e, r);
            var a = "application/octet-stream" === t.type
              , o = /constructor/i.test(Z.HTMLElement) || Z.safari
              , s = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((s || a && o) && "object" === ("undefined" == typeof FileReader ? "undefined" : (0,
            n.Z)(FileReader))) {
                var u = new FileReader;
                u.onloadend = function() {
                    var t = u.result;
                    t = s ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"),
                    i ? i.location.href = t : location = t,
                    i = null
                }
                ,
                u.readAsDataURL(t)
            } else {
                var c = Z.URL || Z.webkitURL
                  , h = c.createObjectURL(t);
                i ? i.location = h : location.href = h,
                i = null,
                setTimeout((function() {
                    c.revokeObjectURL(h)
                }
                ), 4e4)
            }
        }
        );
        function ot(t) {
            var e;
            t = t || "",
            this.ok = !1,
            "#" == t.charAt(0) && (t = t.substr(1, 6)),
            t = {
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
            }[t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
            for (var r = [{
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function(t) {
                    return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
                }
            }, {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ["#00ff00", "336699"],
                process: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ["#fb0", "f0f"],
                process: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }], n = 0; n < r.length; n++) {
                var i = r[n].re
                  , a = r[n].process
                  , o = i.exec(t);
                o && (e = a(o),
                this.r = e[0],
                this.g = e[1],
                this.b = e[2],
                this.ok = !0)
            }
            this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r,
            this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g,
            this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b,
            this.toRGB = function() {
                return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
            }
            ,
            this.toHex = function() {
                var t = this.r.toString(16)
                  , e = this.g.toString(16)
                  , r = this.b.toString(16);
                return 1 == t.length && (t = "0" + t),
                1 == e.length && (e = "0" + e),
                1 == r.length && (r = "0" + r),
                "#" + t + e + r
            }
        }
        function st(t, e) {
            var r = t[0]
              , n = t[1]
              , i = t[2]
              , a = t[3];
            r = ct(r, n, i, a, e[0], 7, -680876936),
            a = ct(a, r, n, i, e[1], 12, -389564586),
            i = ct(i, a, r, n, e[2], 17, 606105819),
            n = ct(n, i, a, r, e[3], 22, -1044525330),
            r = ct(r, n, i, a, e[4], 7, -176418897),
            a = ct(a, r, n, i, e[5], 12, 1200080426),
            i = ct(i, a, r, n, e[6], 17, -1473231341),
            n = ct(n, i, a, r, e[7], 22, -45705983),
            r = ct(r, n, i, a, e[8], 7, 1770035416),
            a = ct(a, r, n, i, e[9], 12, -1958414417),
            i = ct(i, a, r, n, e[10], 17, -42063),
            n = ct(n, i, a, r, e[11], 22, -1990404162),
            r = ct(r, n, i, a, e[12], 7, 1804603682),
            a = ct(a, r, n, i, e[13], 12, -40341101),
            i = ct(i, a, r, n, e[14], 17, -1502002290),
            r = ht(r, n = ct(n, i, a, r, e[15], 22, 1236535329), i, a, e[1], 5, -165796510),
            a = ht(a, r, n, i, e[6], 9, -1069501632),
            i = ht(i, a, r, n, e[11], 14, 643717713),
            n = ht(n, i, a, r, e[0], 20, -373897302),
            r = ht(r, n, i, a, e[5], 5, -701558691),
            a = ht(a, r, n, i, e[10], 9, 38016083),
            i = ht(i, a, r, n, e[15], 14, -660478335),
            n = ht(n, i, a, r, e[4], 20, -405537848),
            r = ht(r, n, i, a, e[9], 5, 568446438),
            a = ht(a, r, n, i, e[14], 9, -1019803690),
            i = ht(i, a, r, n, e[3], 14, -187363961),
            n = ht(n, i, a, r, e[8], 20, 1163531501),
            r = ht(r, n, i, a, e[13], 5, -1444681467),
            a = ht(a, r, n, i, e[2], 9, -51403784),
            i = ht(i, a, r, n, e[7], 14, 1735328473),
            r = lt(r, n = ht(n, i, a, r, e[12], 20, -1926607734), i, a, e[5], 4, -378558),
            a = lt(a, r, n, i, e[8], 11, -2022574463),
            i = lt(i, a, r, n, e[11], 16, 1839030562),
            n = lt(n, i, a, r, e[14], 23, -35309556),
            r = lt(r, n, i, a, e[1], 4, -1530992060),
            a = lt(a, r, n, i, e[4], 11, 1272893353),
            i = lt(i, a, r, n, e[7], 16, -155497632),
            n = lt(n, i, a, r, e[10], 23, -1094730640),
            r = lt(r, n, i, a, e[13], 4, 681279174),
            a = lt(a, r, n, i, e[0], 11, -358537222),
            i = lt(i, a, r, n, e[3], 16, -722521979),
            n = lt(n, i, a, r, e[6], 23, 76029189),
            r = lt(r, n, i, a, e[9], 4, -640364487),
            a = lt(a, r, n, i, e[12], 11, -421815835),
            i = lt(i, a, r, n, e[15], 16, 530742520),
            r = ft(r, n = lt(n, i, a, r, e[2], 23, -995338651), i, a, e[0], 6, -198630844),
            a = ft(a, r, n, i, e[7], 10, 1126891415),
            i = ft(i, a, r, n, e[14], 15, -1416354905),
            n = ft(n, i, a, r, e[5], 21, -57434055),
            r = ft(r, n, i, a, e[12], 6, 1700485571),
            a = ft(a, r, n, i, e[3], 10, -1894986606),
            i = ft(i, a, r, n, e[10], 15, -1051523),
            n = ft(n, i, a, r, e[1], 21, -2054922799),
            r = ft(r, n, i, a, e[8], 6, 1873313359),
            a = ft(a, r, n, i, e[15], 10, -30611744),
            i = ft(i, a, r, n, e[6], 15, -1560198380),
            n = ft(n, i, a, r, e[13], 21, 1309151649),
            r = ft(r, n, i, a, e[4], 6, -145523070),
            a = ft(a, r, n, i, e[11], 10, -1120210379),
            i = ft(i, a, r, n, e[2], 15, 718787259),
            n = ft(n, i, a, r, e[9], 21, -343485551),
            t[0] = wt(r, t[0]),
            t[1] = wt(n, t[1]),
            t[2] = wt(i, t[2]),
            t[3] = wt(a, t[3])
        }
        function ut(t, e, r, n, i, a) {
            return e = wt(wt(e, t), wt(n, a)),
            wt(e << i | e >>> 32 - i, r)
        }
        function ct(t, e, r, n, i, a, o) {
            return ut(e & r | ~e & n, t, e, i, a, o)
        }
        function ht(t, e, r, n, i, a, o) {
            return ut(e & n | r & ~n, t, e, i, a, o)
        }
        function lt(t, e, r, n, i, a, o) {
            return ut(e ^ r ^ n, t, e, i, a, o)
        }
        function ft(t, e, r, n, i, a, o) {
            return ut(r ^ (e | ~n), t, e, i, a, o)
        }
        function dt(t) {
            var e, r = t.length, n = [1732584193, -271733879, -1732584194, 271733878];
            for (e = 64; e <= t.length; e += 64)
                st(n, pt(t.substring(e - 64, e)));
            t = t.substring(e - 64);
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < t.length; e++)
                i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
            if (i[e >> 2] |= 128 << (e % 4 << 3),
            e > 55)
                for (st(n, i),
                e = 0; e < 16; e++)
                    i[e] = 0;
            return i[14] = 8 * r,
            st(n, i),
            n
        }
        function pt(t) {
            var e, r = [];
            for (e = 0; e < 64; e += 4)
                r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return r
        }
        nt = Z.atob.bind(Z),
        it = Z.btoa.bind(Z);
        var gt = "0123456789abcdef".split("");
        function mt(t) {
            for (var e = "", r = 0; r < 4; r++)
                e += gt[t >> 8 * r + 4 & 15] + gt[t >> 8 * r & 15];
            return e
        }
        function vt(t) {
            return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24)
        }
        function bt(t) {
            return dt(t).map(vt).join("")
        }
        var yt = "5d41402abc4b2a76b9719d911017c592" != function(t) {
            for (var e = 0; e < t.length; e++)
                t[e] = mt(t[e]);
            return t.join("")
        }(dt("hello"));
        function wt(t, e) {
            if (yt) {
                var r = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
            }
            return t + e & 4294967295
        }
        function Nt(t, e) {
            var r, n, i, a;
            if (t !== r) {
                for (var o = (i = t,
                a = 1 + (256 / t.length >> 0),
                new Array(a + 1).join(i)), s = [], u = 0; u < 256; u++)
                    s[u] = u;
                var c = 0;
                for (u = 0; u < 256; u++) {
                    var h = s[u];
                    c = (c + h + o.charCodeAt(u)) % 256,
                    s[u] = s[c],
                    s[c] = h
                }
                r = t,
                n = s
            } else
                s = n;
            var l = e.length
              , f = 0
              , d = 0
              , p = "";
            for (u = 0; u < l; u++)
                d = (d + (h = s[f = (f + 1) % 256])) % 256,
                s[f] = s[d],
                s[d] = h,
                o = s[(s[f] + s[d]) % 256],
                p += String.fromCharCode(e.charCodeAt(u) ^ o);
            return p
        }
        var Lt = {
            print: 4,
            modify: 8,
            copy: 16,
            "annot-forms": 32
        };
        function At(t, e, r, n) {
            this.v = 1,
            this.r = 2;
            var i = 192;
            t.forEach((function(t) {
                if (void 0 !== Lt.perm)
                    throw new Error("Invalid permission: " + t);
                i += Lt[t]
            }
            )),
            this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
            var a = (e + this.padding).substr(0, 32)
              , o = (r + this.padding).substr(0, 32);
            this.O = this.processOwnerPassword(a, o),
            this.P = -(1 + (255 ^ i)),
            this.encryptionKey = bt(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n)).substr(0, 5),
            this.U = Nt(this.encryptionKey, this.padding)
        }
        function xt(t) {
            if (/[^\u0000-\u00ff]/.test(t))
                throw new Error("Invalid PDF Name Object: " + t + ", Only accept ASCII characters.");
            for (var e = "", r = t.length, n = 0; n < r; n++) {
                var i = t.charCodeAt(n);
                e += i < 33 || 35 === i || 37 === i || 40 === i || 41 === i || 47 === i || 60 === i || 62 === i || 91 === i || 93 === i || 123 === i || 125 === i || i > 126 ? "#" + ("0" + i.toString(16)).slice(-2) : t[n]
            }
            return e
        }
        function St(t) {
            if ("object" !== (0,
            n.Z)(t))
                throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
            var e = {};
            this.subscribe = function(t, r, n) {
                if (n = n || !1,
                "string" != typeof t || "function" != typeof r || "boolean" != typeof n)
                    throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
                e.hasOwnProperty(t) || (e[t] = {});
                var i = Math.random().toString(35);
                return e[t][i] = [r, !!n],
                i
            }
            ,
            this.unsubscribe = function(t) {
                for (var r in e)
                    if (e[r][t])
                        return delete e[r][t],
                        0 === Object.keys(e[r]).length && delete e[r],
                        !0;
                return !1
            }
            ,
            this.publish = function(r) {
                if (e.hasOwnProperty(r)) {
                    var n = Array.prototype.slice.call(arguments, 1)
                      , i = [];
                    for (var a in e[r]) {
                        var o = e[r][a];
                        try {
                            o[0].apply(t, n)
                        } catch (r) {
                            Z.console && Q.error("jsPDF PubSub Error", r.message, r)
                        }
                        o[1] && i.push(a)
                    }
                    i.length && i.forEach(this.unsubscribe)
                }
            }
            ,
            this.getTopics = function() {
                return e
            }
        }
        function _t(t) {
            if (!(this instanceof _t))
                return new _t(t);
            var e = "opacity,stroke-opacity".split(",");
            for (var r in t)
                t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
            this.id = "",
            this.objectNumber = -1
        }
        function Pt(t, e) {
            this.gState = t,
            this.matrix = e,
            this.id = "",
            this.objectNumber = -1
        }
        function kt(t, e, r, n, i) {
            if (!(this instanceof kt))
                return new kt(t,e,r,n,i);
            this.type = "axial" === t ? 2 : 3,
            this.coords = e,
            this.colors = r,
            Pt.call(this, n, i)
        }
        function It(t, e, r, n, i) {
            if (!(this instanceof It))
                return new It(t,e,r,n,i);
            this.boundingBox = t,
            this.xStep = e,
            this.yStep = r,
            this.stream = "",
            this.cloneIndex = 0,
            Pt.call(this, n, i)
        }
        function Ft(t) {
            var e, r = "string" == typeof arguments[0] ? arguments[0] : "p", i = arguments[1], a = arguments[2], o = arguments[3], s = [], u = 1, c = 16, h = "S", l = null;
            "object" === (0,
            n.Z)(t = t || {}) && (r = t.orientation,
            i = t.unit || i,
            a = t.format || a,
            o = t.compress || t.compressPdf || o,
            null !== (l = t.encryption || null) && (l.userPassword = l.userPassword || "",
            l.ownerPassword = l.ownerPassword || "",
            l.userPermissions = l.userPermissions || []),
            u = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1,
            void 0 !== t.precision && (e = t.precision),
            void 0 !== t.floatPrecision && (c = t.floatPrecision),
            h = t.defaultPathOperation || "S"),
            s = t.filters || (!0 === o ? ["FlateEncode"] : s),
            i = i || "mm",
            r = ("" + (r || "P")).toLowerCase();
            var f = t.putOnlyUsedFonts || !1
              , d = {}
              , p = {
                internal: {},
                __private__: {}
            };
            p.__private__.PubSub = St;
            var g = "1.3"
              , m = p.__private__.getPdfVersion = function() {
                return g
            }
            ;
            p.__private__.setPdfVersion = function(t) {
                g = t
            }
            ;
            var v = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243]
            };
            p.__private__.getPageFormats = function() {
                return v
            }
            ;
            var b = p.__private__.getPageFormat = function(t) {
                return v[t]
            }
            ;
            a = a || "a4";
            var y = {
                COMPAT: "compat",
                ADVANCED: "advanced"
            }
              , w = y.COMPAT;
            function N() {
                this.saveGraphicsState(),
                $(new Ht(vt,0,0,-vt,0,Nr() * vt).toString() + " cm"),
                this.setFontSize(this.getFontSize() / vt),
                h = "n",
                w = y.ADVANCED
            }
            function L() {
                this.restoreGraphicsState(),
                h = "S",
                w = y.COMPAT
            }
            var A = p.__private__.combineFontStyleAndFontWeight = function(t, e) {
                if ("bold" == t && "normal" == e || "bold" == t && 400 == e || "normal" == t && "italic" == e || "bold" == t && "italic" == e)
                    throw new Error("Invalid Combination of fontweight and fontstyle");
                return e && (t = 400 == e || "normal" === e ? "italic" === t ? "italic" : "normal" : 700 != e && "bold" !== e || "normal" !== t ? (700 == e ? "bold" : e) + "" + t : "bold"),
                t
            }
            ;
            p.advancedAPI = function(t) {
                var e = w === y.COMPAT;
                return e && N.call(this),
                "function" != typeof t || (t(this),
                e && L.call(this)),
                this
            }
            ,
            p.compatAPI = function(t) {
                var e = w === y.ADVANCED;
                return e && L.call(this),
                "function" != typeof t || (t(this),
                e && N.call(this)),
                this
            }
            ,
            p.isAdvancedAPI = function() {
                return w === y.ADVANCED
            }
            ;
            var x, S = function(t) {
                if (w !== y.ADVANCED)
                    throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
            }, _ = p.roundToPrecision = p.__private__.roundToPrecision = function(t, r) {
                var n = e || r;
                if (isNaN(t) || isNaN(n))
                    throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
                return t.toFixed(n).replace(/0+$/, "")
            }
            ;
            x = p.hpf = p.__private__.hpf = "number" == typeof c ? function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return _(t, c)
            }
            : "smart" === c ? function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return _(t, t > -1 && t < 1 ? 16 : 5)
            }
            : function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return _(t, 16)
            }
            ;
            var P = p.f2 = p.__private__.f2 = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.f2");
                return _(t, 2)
            }
              , k = p.__private__.f3 = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.f3");
                return _(t, 3)
            }
              , I = p.scale = p.__private__.scale = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.scale");
                return w === y.COMPAT ? t * vt : w === y.ADVANCED ? t : void 0
            }
              , F = function(t) {
                return I(function(t) {
                    return w === y.COMPAT ? Nr() - t : w === y.ADVANCED ? t : void 0
                }(t))
            };
            p.__private__.setPrecision = p.setPrecision = function(t) {
                "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10))
            }
            ;
            var C, j = "00000000000000000000000000000000", O = p.__private__.getFileId = function() {
                return j
            }
            , B = p.__private__.setFileId = function(t) {
                return j = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : j.split("").map((function() {
                    return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
                }
                )).join(""),
                null !== l && (Ce = new At(l.userPermissions,l.userPassword,l.ownerPassword,j)),
                j
            }
            ;
            p.setFileId = function(t) {
                return B(t),
                this
            }
            ,
            p.getFileId = function() {
                return O()
            }
            ;
            var M = p.__private__.convertDateToPDFDate = function(t) {
                var e = t.getTimezoneOffset()
                  , r = e < 0 ? "+" : "-"
                  , n = Math.floor(Math.abs(e / 60))
                  , i = Math.abs(e % 60)
                  , a = [r, T(n), "'", T(i), "'"].join("");
                return ["D:", t.getFullYear(), T(t.getMonth() + 1), T(t.getDate()), T(t.getHours()), T(t.getMinutes()), T(t.getSeconds()), a].join("")
            }
              , E = p.__private__.convertPDFDateToDate = function(t) {
                var e = parseInt(t.substr(2, 4), 10)
                  , r = parseInt(t.substr(6, 2), 10) - 1
                  , n = parseInt(t.substr(8, 2), 10)
                  , i = parseInt(t.substr(10, 2), 10)
                  , a = parseInt(t.substr(12, 2), 10)
                  , o = parseInt(t.substr(14, 2), 10);
                return new Date(e,r,n,i,a,o,0)
            }
              , q = p.__private__.setCreationDate = function(t) {
                var e;
                if (void 0 === t && (t = new Date),
                t instanceof Date)
                    e = M(t);
                else {
                    if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))
                        throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                    e = t
                }
                return C = e
            }
              , D = p.__private__.getCreationDate = function(t) {
                var e = C;
                return "jsDate" === t && (e = E(C)),
                e
            }
            ;
            p.setCreationDate = function(t) {
                return q(t),
                this
            }
            ,
            p.getCreationDate = function(t) {
                return D(t)
            }
            ;
            var R, T = p.__private__.padd2 = function(t) {
                return ("0" + parseInt(t)).slice(-2)
            }
            , U = p.__private__.padd2Hex = function(t) {
                return ("00" + (t = t.toString())).substr(t.length)
            }
            , z = 0, H = [], W = [], V = 0, G = [], Y = [], J = !1, X = W;
            p.__private__.setCustomOutputDestination = function(t) {
                J = !0,
                X = t
            }
            ;
            var K = function(t) {
                J || (X = t)
            };
            p.__private__.resetCustomOutputDestination = function() {
                J = !1,
                X = W
            }
            ;
            var $ = p.__private__.out = function(t) {
                return t = t.toString(),
                V += t.length + 1,
                X.push(t),
                X
            }
              , tt = p.__private__.write = function(t) {
                return $(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "))
            }
              , et = p.__private__.getArrayBuffer = function(t) {
                for (var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r); e--; )
                    n[e] = t.charCodeAt(e);
                return r
            }
              , rt = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
            p.__private__.getStandardFonts = function() {
                return rt
            }
            ;
            var nt = t.fontSize || 16;
            p.__private__.setFontSize = p.setFontSize = function(t) {
                return nt = w === y.ADVANCED ? t / vt : t,
                this
            }
            ;
            var st, ut = p.__private__.getFontSize = p.getFontSize = function() {
                return w === y.COMPAT ? nt : nt * vt
            }
            , ct = t.R2L || !1;
            p.__private__.setR2L = p.setR2L = function(t) {
                return ct = t,
                this
            }
            ,
            p.__private__.getR2L = p.getR2L = function() {
                return ct
            }
            ;
            var ht, lt = p.__private__.setZoomMode = function(t) {
                if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t))
                    st = t;
                else if (isNaN(t)) {
                    if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t))
                        throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
                    st = t
                } else
                    st = parseInt(t, 10)
            }
            ;
            p.__private__.getZoomMode = function() {
                return st
            }
            ;
            var ft, dt = p.__private__.setPageMode = function(t) {
                if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t))
                    throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
                ht = t
            }
            ;
            p.__private__.getPageMode = function() {
                return ht
            }
            ;
            var pt = p.__private__.setLayoutMode = function(t) {
                if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t))
                    throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
                ft = t
            }
            ;
            p.__private__.getLayoutMode = function() {
                return ft
            }
            ,
            p.__private__.setDisplayMode = p.setDisplayMode = function(t, e, r) {
                return lt(t),
                pt(e),
                dt(r),
                this
            }
            ;
            var gt = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            };
            p.__private__.getDocumentProperty = function(t) {
                if (-1 === Object.keys(gt).indexOf(t))
                    throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
                return gt[t]
            }
            ,
            p.__private__.getDocumentProperties = function() {
                return gt
            }
            ,
            p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(t) {
                for (var e in gt)
                    gt.hasOwnProperty(e) && t[e] && (gt[e] = t[e]);
                return this
            }
            ,
            p.__private__.setDocumentProperty = function(t, e) {
                if (-1 === Object.keys(gt).indexOf(t))
                    throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
                return gt[t] = e
            }
            ;
            var mt, vt, bt, yt, wt, Nt = {}, Lt = {}, Pt = [], Ct = {}, jt = {}, Ot = {}, Bt = {}, Mt = null, Et = 0, qt = [], Dt = new St(p), Rt = t.hotfixes || [], Tt = {}, Ut = {}, zt = [], Ht = function t(e, r, n, i, a, o) {
                if (!(this instanceof t))
                    return new t(e,r,n,i,a,o);
                isNaN(e) && (e = 1),
                isNaN(r) && (r = 0),
                isNaN(n) && (n = 0),
                isNaN(i) && (i = 1),
                isNaN(a) && (a = 0),
                isNaN(o) && (o = 0),
                this._matrix = [e, r, n, i, a, o]
            };
            Object.defineProperty(Ht.prototype, "sx", {
                get: function() {
                    return this._matrix[0]
                },
                set: function(t) {
                    this._matrix[0] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "shy", {
                get: function() {
                    return this._matrix[1]
                },
                set: function(t) {
                    this._matrix[1] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "shx", {
                get: function() {
                    return this._matrix[2]
                },
                set: function(t) {
                    this._matrix[2] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "sy", {
                get: function() {
                    return this._matrix[3]
                },
                set: function(t) {
                    this._matrix[3] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "tx", {
                get: function() {
                    return this._matrix[4]
                },
                set: function(t) {
                    this._matrix[4] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "ty", {
                get: function() {
                    return this._matrix[5]
                },
                set: function(t) {
                    this._matrix[5] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "a", {
                get: function() {
                    return this._matrix[0]
                },
                set: function(t) {
                    this._matrix[0] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "b", {
                get: function() {
                    return this._matrix[1]
                },
                set: function(t) {
                    this._matrix[1] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "c", {
                get: function() {
                    return this._matrix[2]
                },
                set: function(t) {
                    this._matrix[2] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "d", {
                get: function() {
                    return this._matrix[3]
                },
                set: function(t) {
                    this._matrix[3] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "e", {
                get: function() {
                    return this._matrix[4]
                },
                set: function(t) {
                    this._matrix[4] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "f", {
                get: function() {
                    return this._matrix[5]
                },
                set: function(t) {
                    this._matrix[5] = t
                }
            }),
            Object.defineProperty(Ht.prototype, "rotation", {
                get: function() {
                    return Math.atan2(this.shx, this.sx)
                }
            }),
            Object.defineProperty(Ht.prototype, "scaleX", {
                get: function() {
                    return this.decompose().scale.sx
                }
            }),
            Object.defineProperty(Ht.prototype, "scaleY", {
                get: function() {
                    return this.decompose().scale.sy
                }
            }),
            Object.defineProperty(Ht.prototype, "isIdentity", {
                get: function() {
                    return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
                }
            }),
            Ht.prototype.join = function(t) {
                return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(x).join(t)
            }
            ,
            Ht.prototype.multiply = function(t) {
                var e = t.sx * this.sx + t.shy * this.shx
                  , r = t.sx * this.shy + t.shy * this.sy
                  , n = t.shx * this.sx + t.sy * this.shx
                  , i = t.shx * this.shy + t.sy * this.sy
                  , a = t.tx * this.sx + t.ty * this.shx + this.tx
                  , o = t.tx * this.shy + t.ty * this.sy + this.ty;
                return new Ht(e,r,n,i,a,o)
            }
            ,
            Ht.prototype.decompose = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty
                  , o = Math.sqrt(t * t + e * e)
                  , s = (t /= o) * r + (e /= o) * n;
                r -= t * s,
                n -= e * s;
                var u = Math.sqrt(r * r + n * n);
                return s /= u,
                t * (n /= u) < e * (r /= u) && (t = -t,
                e = -e,
                s = -s,
                o = -o),
                {
                    scale: new Ht(o,0,0,u,0,0),
                    translate: new Ht(1,0,0,1,i,a),
                    rotate: new Ht(t,e,-e,t,0,0),
                    skew: new Ht(1,0,s,1,0,0)
                }
            }
            ,
            Ht.prototype.toString = function(t) {
                return this.join(" ")
            }
            ,
            Ht.prototype.inversed = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty
                  , o = 1 / (t * n - e * r)
                  , s = n * o
                  , u = -e * o
                  , c = -r * o
                  , h = t * o;
                return new Ht(s,u,c,h,-s * i - c * a,-u * i - h * a)
            }
            ,
            Ht.prototype.applyToPoint = function(t) {
                var e = t.x * this.sx + t.y * this.shx + this.tx
                  , r = t.x * this.shy + t.y * this.sy + this.ty;
                return new pr(e,r)
            }
            ,
            Ht.prototype.applyToRectangle = function(t) {
                var e = this.applyToPoint(t)
                  , r = this.applyToPoint(new pr(t.x + t.w,t.y + t.h));
                return new gr(e.x,e.y,r.x - e.x,r.y - e.y)
            }
            ,
            Ht.prototype.clone = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty;
                return new Ht(t,e,r,n,i,a)
            }
            ,
            p.Matrix = Ht;
            var Wt = p.matrixMult = function(t, e) {
                return e.multiply(t)
            }
              , Vt = new Ht(1,0,0,1,0,0);
            p.unitMatrix = p.identityMatrix = Vt;
            var Gt = function(t, e) {
                if (!jt[t]) {
                    var r = (e instanceof kt ? "Sh" : "P") + (Object.keys(Ct).length + 1).toString(10);
                    e.id = r,
                    jt[t] = r,
                    Ct[r] = e,
                    Dt.publish("addPattern", e)
                }
            };
            p.ShadingPattern = kt,
            p.TilingPattern = It,
            p.addShadingPattern = function(t, e) {
                return S("addShadingPattern()"),
                Gt(t, e),
                this
            }
            ,
            p.beginTilingPattern = function(t) {
                S("beginTilingPattern()"),
                vr(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix)
            }
            ,
            p.endTilingPattern = function(t, e) {
                S("endTilingPattern()"),
                e.stream = Y[R].join("\n"),
                Gt(t, e),
                Dt.publish("endTilingPattern", e),
                zt.pop().restore()
            }
            ;
            var Yt, Jt = p.__private__.newObject = function() {
                var t = Xt();
                return Kt(t, !0),
                t
            }
            , Xt = p.__private__.newObjectDeferred = function() {
                return z++,
                H[z] = function() {
                    return V
                }
                ,
                z
            }
            , Kt = function(t, e) {
                return e = "boolean" == typeof e && e,
                H[t] = V,
                e && $(t + " 0 obj"),
                t
            }, Zt = p.__private__.newAdditionalObject = function() {
                var t = {
                    objId: Xt(),
                    content: ""
                };
                return G.push(t),
                t
            }
            , $t = Xt(), Qt = Xt(), te = p.__private__.decodeColorString = function(t) {
                var e = t.split(" ");
                if (2 !== e.length || "g" !== e[1] && "G" !== e[1])
                    5 !== e.length || "k" !== e[4] && "K" !== e[4] || (e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"]);
                else {
                    var r = parseFloat(e[0]);
                    e = [r, r, r, "r"]
                }
                for (var n = "#", i = 0; i < 3; i++)
                    n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
                return n
            }
            , ee = p.__private__.encodeColorString = function(t) {
                var e;
                "string" == typeof t && (t = {
                    ch1: t
                });
                var r = t.ch1
                  , i = t.ch2
                  , a = t.ch3
                  , o = t.ch4
                  , s = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
                if ("string" == typeof r && "#" !== r.charAt(0)) {
                    var u = new ot(r);
                    if (u.ok)
                        r = u.toHex();
                    else if (!/^\d*\.?\d*$/.test(r))
                        throw new Error('Invalid color "' + r + '" passed to jsPDF.encodeColorString.')
                }
                if ("string" == typeof r && /^#[0-9A-Fa-f]{3}$/.test(r) && (r = "#" + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]),
                "string" == typeof r && /^#[0-9A-Fa-f]{6}$/.test(r)) {
                    var c = parseInt(r.substr(1), 16);
                    r = c >> 16 & 255,
                    i = c >> 8 & 255,
                    a = 255 & c
                }
                if (void 0 === i || void 0 === o && r === i && i === a)
                    if ("string" == typeof r)
                        e = r + " " + s[0];
                    else if (2 === t.precision)
                        e = P(r / 255) + " " + s[0];
                    else
                        e = k(r / 255) + " " + s[0];
                else if (void 0 === o || "object" === (0,
                n.Z)(o)) {
                    if (o && !isNaN(o.a) && 0 === o.a)
                        return ["1.", "1.", "1.", s[1]].join(" ");
                    if ("string" == typeof r)
                        e = [r, i, a, s[1]].join(" ");
                    else if (2 === t.precision)
                        e = [P(r / 255), P(i / 255), P(a / 255), s[1]].join(" ");
                    else
                        e = [k(r / 255), k(i / 255), k(a / 255), s[1]].join(" ")
                } else if ("string" == typeof r)
                    e = [r, i, a, o, s[2]].join(" ");
                else if (2 === t.precision)
                    e = [P(r), P(i), P(a), P(o), s[2]].join(" ");
                else
                    e = [k(r), k(i), k(a), k(o), s[2]].join(" ");
                return e
            }
            , re = p.__private__.getFilters = function() {
                return s
            }
            , ne = p.__private__.putStream = function(t) {
                var e = (t = t || {}).data || ""
                  , r = t.filters || re()
                  , n = t.alreadyAppliedFilters || []
                  , i = t.addLength1 || !1
                  , a = e.length
                  , o = t.objectId
                  , s = function(t) {
                    return t
                };
                if (null !== l && void 0 === o)
                    throw new Error("ObjectId must be passed to putStream for file encryption");
                null !== l && (s = Ce.encryptor(o, 0));
                var u = {};
                !0 === r && (r = ["FlateEncode"]);
                var c = t.additionalKeyValues || []
                  , h = (u = void 0 !== Ft.API.processDataByFilters ? Ft.API.processDataByFilters(e, r) : {
                    data: e,
                    reverseChain: []
                }).reverseChain + (Array.isArray(n) ? n.join(" ") : n.toString());
                if (0 !== u.data.length && (c.push({
                    key: "Length",
                    value: u.data.length
                }),
                !0 === i && c.push({
                    key: "Length1",
                    value: a
                })),
                0 != h.length)
                    if (h.split("/").length - 1 == 1)
                        c.push({
                            key: "Filter",
                            value: h
                        });
                    else {
                        c.push({
                            key: "Filter",
                            value: "[" + h + "]"
                        });
                        for (var f = 0; f < c.length; f += 1)
                            if ("DecodeParms" === c[f].key) {
                                for (var d = [], p = 0; p < u.reverseChain.split("/").length - 1; p += 1)
                                    d.push("null");
                                d.push(c[f].value),
                                c[f].value = "[" + d.join(" ") + "]"
                            }
                    }
                $("<<");
                for (var g = 0; g < c.length; g++)
                    $("/" + c[g].key + " " + c[g].value);
                $(">>"),
                0 !== u.data.length && ($("stream"),
                $(s(u.data)),
                $("endstream"))
            }
            , ie = p.__private__.putPage = function(t) {
                var e = t.number
                  , r = t.data
                  , n = t.objId
                  , i = t.contentsObjId;
                Kt(n, !0),
                $("<</Type /Page"),
                $("/Parent " + t.rootDictionaryObjId + " 0 R"),
                $("/Resources " + t.resourceDictionaryObjId + " 0 R"),
                $("/MediaBox [" + parseFloat(x(t.mediaBox.bottomLeftX)) + " " + parseFloat(x(t.mediaBox.bottomLeftY)) + " " + x(t.mediaBox.topRightX) + " " + x(t.mediaBox.topRightY) + "]"),
                null !== t.cropBox && $("/CropBox [" + x(t.cropBox.bottomLeftX) + " " + x(t.cropBox.bottomLeftY) + " " + x(t.cropBox.topRightX) + " " + x(t.cropBox.topRightY) + "]"),
                null !== t.bleedBox && $("/BleedBox [" + x(t.bleedBox.bottomLeftX) + " " + x(t.bleedBox.bottomLeftY) + " " + x(t.bleedBox.topRightX) + " " + x(t.bleedBox.topRightY) + "]"),
                null !== t.trimBox && $("/TrimBox [" + x(t.trimBox.bottomLeftX) + " " + x(t.trimBox.bottomLeftY) + " " + x(t.trimBox.topRightX) + " " + x(t.trimBox.topRightY) + "]"),
                null !== t.artBox && $("/ArtBox [" + x(t.artBox.bottomLeftX) + " " + x(t.artBox.bottomLeftY) + " " + x(t.artBox.topRightX) + " " + x(t.artBox.topRightY) + "]"),
                "number" == typeof t.userUnit && 1 !== t.userUnit && $("/UserUnit " + t.userUnit),
                Dt.publish("putPage", {
                    objId: n,
                    pageContext: qt[e],
                    pageNumber: e,
                    page: r
                }),
                $("/Contents " + i + " 0 R"),
                $(">>"),
                $("endobj");
                var a = r.join("\n");
                return w === y.ADVANCED && (a += "\nQ"),
                Kt(i, !0),
                ne({
                    data: a,
                    filters: re(),
                    objectId: i
                }),
                $("endobj"),
                n
            }
            , ae = p.__private__.putPages = function() {
                var t, e, r = [];
                for (t = 1; t <= Et; t++)
                    qt[t].objId = Xt(),
                    qt[t].contentsObjId = Xt();
                for (t = 1; t <= Et; t++)
                    r.push(ie({
                        number: t,
                        data: Y[t],
                        objId: qt[t].objId,
                        contentsObjId: qt[t].contentsObjId,
                        mediaBox: qt[t].mediaBox,
                        cropBox: qt[t].cropBox,
                        bleedBox: qt[t].bleedBox,
                        trimBox: qt[t].trimBox,
                        artBox: qt[t].artBox,
                        userUnit: qt[t].userUnit,
                        rootDictionaryObjId: $t,
                        resourceDictionaryObjId: Qt
                    }));
                Kt($t, !0),
                $("<</Type /Pages");
                var n = "/Kids [";
                for (e = 0; e < Et; e++)
                    n += r[e] + " 0 R ";
                $(n + "]"),
                $("/Count " + Et),
                $(">>"),
                $("endobj"),
                Dt.publish("postPutPages")
            }
            , oe = function(t) {
                Dt.publish("putFont", {
                    font: t,
                    out: $,
                    newObject: Jt,
                    putStream: ne
                }),
                !0 !== t.isAlreadyPutted && (t.objectNumber = Jt(),
                $("<<"),
                $("/Type /Font"),
                $("/BaseFont /" + xt(t.postScriptName)),
                $("/Subtype /Type1"),
                "string" == typeof t.encoding && $("/Encoding /" + t.encoding),
                $("/FirstChar 32"),
                $("/LastChar 255"),
                $(">>"),
                $("endobj"))
            }, se = function(t) {
                t.objectNumber = Jt();
                var e = [];
                e.push({
                    key: "Type",
                    value: "/XObject"
                }),
                e.push({
                    key: "Subtype",
                    value: "/Form"
                }),
                e.push({
                    key: "BBox",
                    value: "[" + [x(t.x), x(t.y), x(t.x + t.width), x(t.y + t.height)].join(" ") + "]"
                }),
                e.push({
                    key: "Matrix",
                    value: "[" + t.matrix.toString() + "]"
                });
                var r = t.pages[1].join("\n");
                ne({
                    data: r,
                    additionalKeyValues: e,
                    objectId: t.objectNumber
                }),
                $("endobj")
            }, ue = function(t, e) {
                e || (e = 21);
                var r = Jt()
                  , n = function(t, e) {
                    var r, n = [], i = 1 / (e - 1);
                    for (r = 0; r < 1; r += i)
                        n.push(r);
                    if (n.push(1),
                    0 != t[0].offset) {
                        var a = {
                            offset: 0,
                            color: t[0].color
                        };
                        t.unshift(a)
                    }
                    if (1 != t[t.length - 1].offset) {
                        var o = {
                            offset: 1,
                            color: t[t.length - 1].color
                        };
                        t.push(o)
                    }
                    for (var s = "", u = 0, c = 0; c < n.length; c++) {
                        for (r = n[c]; r > t[u + 1].offset; )
                            u++;
                        var h = t[u].offset
                          , l = (r - h) / (t[u + 1].offset - h)
                          , f = t[u].color
                          , d = t[u + 1].color;
                        s += U(Math.round((1 - l) * f[0] + l * d[0]).toString(16)) + U(Math.round((1 - l) * f[1] + l * d[1]).toString(16)) + U(Math.round((1 - l) * f[2] + l * d[2]).toString(16))
                    }
                    return s.trim()
                }(t.colors, e)
                  , i = [];
                i.push({
                    key: "FunctionType",
                    value: "0"
                }),
                i.push({
                    key: "Domain",
                    value: "[0.0 1.0]"
                }),
                i.push({
                    key: "Size",
                    value: "[" + e + "]"
                }),
                i.push({
                    key: "BitsPerSample",
                    value: "8"
                }),
                i.push({
                    key: "Range",
                    value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                }),
                i.push({
                    key: "Decode",
                    value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                }),
                ne({
                    data: n,
                    additionalKeyValues: i,
                    alreadyAppliedFilters: ["/ASCIIHexDecode"],
                    objectId: r
                }),
                $("endobj"),
                t.objectNumber = Jt(),
                $("<< /ShadingType " + t.type),
                $("/ColorSpace /DeviceRGB");
                var a = "/Coords [" + x(parseFloat(t.coords[0])) + " " + x(parseFloat(t.coords[1])) + " ";
                2 === t.type ? a += x(parseFloat(t.coords[2])) + " " + x(parseFloat(t.coords[3])) : a += x(parseFloat(t.coords[2])) + " " + x(parseFloat(t.coords[3])) + " " + x(parseFloat(t.coords[4])) + " " + x(parseFloat(t.coords[5])),
                $(a += "]"),
                t.matrix && $("/Matrix [" + t.matrix.toString() + "]"),
                $("/Function " + r + " 0 R"),
                $("/Extend [true true]"),
                $(">>"),
                $("endobj")
            }, ce = function(t, e) {
                var r = Xt()
                  , n = Jt();
                e.push({
                    resourcesOid: r,
                    objectOid: n
                }),
                t.objectNumber = n;
                var i = [];
                i.push({
                    key: "Type",
                    value: "/Pattern"
                }),
                i.push({
                    key: "PatternType",
                    value: "1"
                }),
                i.push({
                    key: "PaintType",
                    value: "1"
                }),
                i.push({
                    key: "TilingType",
                    value: "1"
                }),
                i.push({
                    key: "BBox",
                    value: "[" + t.boundingBox.map(x).join(" ") + "]"
                }),
                i.push({
                    key: "XStep",
                    value: x(t.xStep)
                }),
                i.push({
                    key: "YStep",
                    value: x(t.yStep)
                }),
                i.push({
                    key: "Resources",
                    value: r + " 0 R"
                }),
                t.matrix && i.push({
                    key: "Matrix",
                    value: "[" + t.matrix.toString() + "]"
                }),
                ne({
                    data: t.stream,
                    additionalKeyValues: i,
                    objectId: t.objectNumber
                }),
                $("endobj")
            }, he = function(t) {
                for (var e in t.objectNumber = Jt(),
                $("<<"),
                t)
                    switch (e) {
                    case "opacity":
                        $("/ca " + P(t[e]));
                        break;
                    case "stroke-opacity":
                        $("/CA " + P(t[e]))
                    }
                $(">>"),
                $("endobj")
            }, le = function(t) {
                Kt(t.resourcesOid, !0),
                $("<<"),
                $("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                function() {
                    for (var t in $("/Font <<"),
                    Nt)
                        Nt.hasOwnProperty(t) && (!1 === f || !0 === f && d.hasOwnProperty(t)) && $("/" + t + " " + Nt[t].objectNumber + " 0 R");
                    $(">>")
                }(),
                function() {
                    if (Object.keys(Ct).length > 0) {
                        for (var t in $("/Shading <<"),
                        Ct)
                            Ct.hasOwnProperty(t) && Ct[t]instanceof kt && Ct[t].objectNumber >= 0 && $("/" + t + " " + Ct[t].objectNumber + " 0 R");
                        Dt.publish("putShadingPatternDict"),
                        $(">>")
                    }
                }(),
                function(t) {
                    if (Object.keys(Ct).length > 0) {
                        for (var e in $("/Pattern <<"),
                        Ct)
                            Ct.hasOwnProperty(e) && Ct[e]instanceof p.TilingPattern && Ct[e].objectNumber >= 0 && Ct[e].objectNumber < t && $("/" + e + " " + Ct[e].objectNumber + " 0 R");
                        Dt.publish("putTilingPatternDict"),
                        $(">>")
                    }
                }(t.objectOid),
                function() {
                    if (Object.keys(Ot).length > 0) {
                        var t;
                        for (t in $("/ExtGState <<"),
                        Ot)
                            Ot.hasOwnProperty(t) && Ot[t].objectNumber >= 0 && $("/" + t + " " + Ot[t].objectNumber + " 0 R");
                        Dt.publish("putGStateDict"),
                        $(">>")
                    }
                }(),
                function() {
                    for (var t in $("/XObject <<"),
                    Tt)
                        Tt.hasOwnProperty(t) && Tt[t].objectNumber >= 0 && $("/" + t + " " + Tt[t].objectNumber + " 0 R");
                    Dt.publish("putXobjectDict"),
                    $(">>")
                }(),
                $(">>"),
                $("endobj")
            }, fe = function() {
                var t = [];
                (function() {
                    for (var t in Nt)
                        Nt.hasOwnProperty(t) && (!1 === f || !0 === f && d.hasOwnProperty(t)) && oe(Nt[t])
                }
                )(),
                function() {
                    var t;
                    for (t in Ot)
                        Ot.hasOwnProperty(t) && he(Ot[t])
                }(),
                function() {
                    for (var t in Tt)
                        Tt.hasOwnProperty(t) && se(Tt[t])
                }(),
                function(t) {
                    var e;
                    for (e in Ct)
                        Ct.hasOwnProperty(e) && (Ct[e]instanceof kt ? ue(Ct[e]) : Ct[e]instanceof It && ce(Ct[e], t))
                }(t),
                Dt.publish("putResources"),
                t.forEach(le),
                le({
                    resourcesOid: Qt,
                    objectOid: Number.MAX_SAFE_INTEGER
                }),
                Dt.publish("postPutResources")
            }, de = function(t) {
                Lt[t.fontName] = Lt[t.fontName] || {},
                Lt[t.fontName][t.fontStyle] = t.id
            }, pe = function(t, e, r, n, i) {
                var a = {
                    id: "F" + (Object.keys(Nt).length + 1).toString(10),
                    postScriptName: t,
                    fontName: e,
                    fontStyle: r,
                    encoding: n,
                    isStandardFont: i || !1,
                    metadata: {}
                };
                return Dt.publish("addFont", {
                    font: a,
                    instance: this
                }),
                Nt[a.id] = a,
                de(a),
                a.id
            }, ge = p.__private__.pdfEscape = p.pdfEscape = function(t, e) {
                return function(t, e) {
                    var r, n, i, a, o, s, u, c, h;
                    if (i = (e = e || {}).sourceEncoding || "Unicode",
                    o = e.outputEncoding,
                    (e.autoencode || o) && Nt[mt].metadata && Nt[mt].metadata[i] && Nt[mt].metadata[i].encoding && (a = Nt[mt].metadata[i].encoding,
                    !o && Nt[mt].encoding && (o = Nt[mt].encoding),
                    !o && a.codePages && (o = a.codePages[0]),
                    "string" == typeof o && (o = a[o]),
                    o)) {
                        for (u = !1,
                        s = [],
                        r = 0,
                        n = t.length; r < n; r++)
                            (c = o[t.charCodeAt(r)]) ? s.push(String.fromCharCode(c)) : s.push(t[r]),
                            s[r].charCodeAt(0) >> 8 && (u = !0);
                        t = s.join("")
                    }
                    for (r = t.length; void 0 === u && 0 !== r; )
                        t.charCodeAt(r - 1) >> 8 && (u = !0),
                        r--;
                    if (!u)
                        return t;
                    for (s = e.noBOM ? [] : [254, 255],
                    r = 0,
                    n = t.length; r < n; r++) {
                        if ((h = (c = t.charCodeAt(r)) >> 8) >> 8)
                            throw new Error("Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                        s.push(h),
                        s.push(c - (h << 8))
                    }
                    return String.fromCharCode.apply(void 0, s)
                }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }
            , me = p.__private__.beginPage = function(t) {
                Y[++Et] = [],
                qt[Et] = {
                    objId: 0,
                    contentsObjId: 0,
                    userUnit: Number(u),
                    artBox: null,
                    bleedBox: null,
                    cropBox: null,
                    trimBox: null,
                    mediaBox: {
                        bottomLeftX: 0,
                        bottomLeftY: 0,
                        topRightX: Number(t[0]),
                        topRightY: Number(t[1])
                    }
                },
                ye(Et),
                K(Y[R])
            }
            , ve = function(t, e) {
                var n, i, o;
                switch (r = e || r,
                "string" == typeof t && (n = b(t.toLowerCase()),
                Array.isArray(n) && (i = n[0],
                o = n[1])),
                Array.isArray(t) && (i = t[0] * vt,
                o = t[1] * vt),
                isNaN(i) && (i = a[0],
                o = a[1]),
                (i > 14400 || o > 14400) && (Q.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),
                i = Math.min(14400, i),
                o = Math.min(14400, o)),
                a = [i, o],
                r.substr(0, 1)) {
                case "l":
                    o > i && (a = [o, i]);
                    break;
                case "p":
                    i > o && (a = [o, i])
                }
                me(a),
                Ze(Xe),
                $(ar),
                0 !== lr && $(lr + " J"),
                0 !== fr && $(fr + " j"),
                Dt.publish("addPage", {
                    pageNumber: Et
                })
            }, be = function(t) {
                t > 0 && t <= Et && (Y.splice(t, 1),
                qt.splice(t, 1),
                Et--,
                R > Et && (R = Et),
                this.setPage(R))
            }, ye = function(t) {
                t > 0 && t <= Et && (R = t)
            }, we = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
                return Y.length - 1
            }
            , Ne = function(t, e, r) {
                var n, i = void 0;
                return r = r || {},
                t = void 0 !== t ? t : Nt[mt].fontName,
                e = void 0 !== e ? e : Nt[mt].fontStyle,
                n = t.toLowerCase(),
                void 0 !== Lt[n] && void 0 !== Lt[n][e] ? i = Lt[n][e] : void 0 !== Lt[t] && void 0 !== Lt[t][e] ? i = Lt[t][e] : !1 === r.disableWarning && Q.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."),
                i || r.noFallback || null == (i = Lt.times[e]) && (i = Lt.times.normal),
                i
            }, Le = p.__private__.putInfo = function() {
                var t = Jt()
                  , e = function(t) {
                    return t
                };
                for (var r in null !== l && (e = Ce.encryptor(t, 0)),
                $("<<"),
                $("/Producer (" + ge(e("jsPDF " + Ft.version)) + ")"),
                gt)
                    gt.hasOwnProperty(r) && gt[r] && $("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + ge(e(gt[r])) + ")");
                $("/CreationDate (" + ge(e(C)) + ")"),
                $(">>"),
                $("endobj")
            }
            , Ae = p.__private__.putCatalog = function(t) {
                var e = (t = t || {}).rootDictionaryObjId || $t;
                switch (Jt(),
                $("<<"),
                $("/Type /Catalog"),
                $("/Pages " + e + " 0 R"),
                st || (st = "fullwidth"),
                st) {
                case "fullwidth":
                    $("/OpenAction [3 0 R /FitH null]");
                    break;
                case "fullheight":
                    $("/OpenAction [3 0 R /FitV null]");
                    break;
                case "fullpage":
                    $("/OpenAction [3 0 R /Fit]");
                    break;
                case "original":
                    $("/OpenAction [3 0 R /XYZ null null 1]");
                    break;
                default:
                    var r = "" + st;
                    "%" === r.substr(r.length - 1) && (st = parseInt(st) / 100),
                    "number" == typeof st && $("/OpenAction [3 0 R /XYZ null null " + P(st) + "]")
                }
                switch (ft || (ft = "continuous"),
                ft) {
                case "continuous":
                    $("/PageLayout /OneColumn");
                    break;
                case "single":
                    $("/PageLayout /SinglePage");
                    break;
                case "two":
                case "twoleft":
                    $("/PageLayout /TwoColumnLeft");
                    break;
                case "tworight":
                    $("/PageLayout /TwoColumnRight")
                }
                ht && $("/PageMode /" + ht),
                Dt.publish("putCatalog"),
                $(">>"),
                $("endobj")
            }
            , xe = p.__private__.putTrailer = function() {
                $("trailer"),
                $("<<"),
                $("/Size " + (z + 1)),
                $("/Root " + z + " 0 R"),
                $("/Info " + (z - 1) + " 0 R"),
                null !== l && $("/Encrypt " + Ce.oid + " 0 R"),
                $("/ID [ <" + j + "> <" + j + "> ]"),
                $(">>")
            }
            , Se = p.__private__.putHeader = function() {
                $("%PDF-" + g),
                $("%ºß¬à")
            }
            , _e = p.__private__.putXRef = function() {
                var t = "0000000000";
                $("xref"),
                $("0 " + (z + 1)),
                $("0000000000 65535 f ");
                for (var e = 1; e <= z; e++)
                    "function" == typeof H[e] ? $((t + H[e]()).slice(-10) + " 00000 n ") : void 0 !== H[e] ? $((t + H[e]).slice(-10) + " 00000 n ") : $("0000000000 00000 n ")
            }
            , Pe = p.__private__.buildDocument = function() {
                z = 0,
                V = 0,
                W = [],
                H = [],
                G = [],
                $t = Xt(),
                Qt = Xt(),
                K(W),
                Dt.publish("buildDocument"),
                Se(),
                ae(),
                function() {
                    Dt.publish("putAdditionalObjects");
                    for (var t = 0; t < G.length; t++) {
                        var e = G[t];
                        Kt(e.objId, !0),
                        $(e.content),
                        $("endobj")
                    }
                    Dt.publish("postPutAdditionalObjects")
                }(),
                fe(),
                null !== l && (Ce.oid = Jt(),
                $("<<"),
                $("/Filter /Standard"),
                $("/V " + Ce.v),
                $("/R " + Ce.r),
                $("/U <" + Ce.toHexString(Ce.U) + ">"),
                $("/O <" + Ce.toHexString(Ce.O) + ">"),
                $("/P " + Ce.P),
                $(">>"),
                $("endobj")),
                Le(),
                Ae();
                var t = V;
                return _e(),
                xe(),
                $("startxref"),
                $("" + t),
                $("%%EOF"),
                K(Y[R]),
                W.join("\n")
            }
            , ke = p.__private__.getBlob = function(t) {
                return new Blob([et(t)],{
                    type: "application/pdf"
                })
            }
            , Ie = p.output = p.__private__.output = (Yt = function(t, e) {
                switch ("string" == typeof (e = e || {}) ? e = {
                    filename: e
                } : e.filename = e.filename || "generated.pdf",
                t) {
                case void 0:
                    return Pe();
                case "save":
                    p.save(e.filename);
                    break;
                case "arraybuffer":
                    return et(Pe());
                case "blob":
                    return ke(Pe());
                case "bloburi":
                case "bloburl":
                    if (void 0 !== Z.URL && "function" == typeof Z.URL.createObjectURL)
                        return Z.URL && Z.URL.createObjectURL(ke(Pe())) || void 0;
                    Q.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                    break;
                case "datauristring":
                case "dataurlstring":
                    var r = ""
                      , n = Pe();
                    try {
                        r = it(n)
                    } catch (t) {
                        r = it(unescape(encodeURIComponent(n)))
                    }
                    return "data:application/pdf;filename=" + e.filename + ";base64," + r;
                case "pdfobjectnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(Z)) {
                        var i = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js"
                          , a = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                        e.pdfObjectUrl && (i = e.pdfObjectUrl,
                        a = "");
                        var o = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + i + '"' + a + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>"
                          , s = Z.open();
                        return null !== s && s.document.write(o),
                        s
                    }
                    throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                case "pdfjsnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(Z)) {
                        var u = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>'
                          , c = Z.open();
                        if (null !== c) {
                            c.document.write(u);
                            var h = this;
                            c.document.documentElement.querySelector("#pdfViewer").onload = function() {
                                c.document.title = e.filename,
                                c.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(h.output("bloburl"))
                            }
                        }
                        return c
                    }
                    throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                case "dataurlnewwindow":
                    if ("[object Window]" !== Object.prototype.toString.call(Z))
                        throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                    var l = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>'
                      , f = Z.open();
                    if (null !== f && (f.document.write(l),
                    f.document.title = e.filename),
                    f || "undefined" == typeof safari)
                        return f;
                    break;
                case "datauri":
                case "dataurl":
                    return Z.document.location.href = this.output("datauristring", e);
                default:
                    return null
                }
            }
            ,
            Yt.foo = function() {
                try {
                    return Yt.apply(this, arguments)
                } catch (r) {
                    var t = r.stack || "";
                    ~t.indexOf(" at ") && (t = t.split(" at ")[1]);
                    var e = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + r.message;
                    if (!Z.console)
                        throw new Error(e);
                    Z.console.error(e, r),
                    Z.alert && alert(e)
                }
            }
            ,
            Yt.foo.bar = Yt,
            Yt.foo), Fe = function(t) {
                return !0 === Array.isArray(Rt) && Rt.indexOf(t) > -1
            };
            switch (i) {
            case "pt":
                vt = 1;
                break;
            case "mm":
                vt = 72 / 25.4;
                break;
            case "cm":
                vt = 72 / 2.54;
                break;
            case "in":
                vt = 72;
                break;
            case "px":
                vt = 1 == Fe("px_scaling") ? .75 : 96 / 72;
                break;
            case "pc":
            case "em":
                vt = 12;
                break;
            case "ex":
                vt = 6;
                break;
            default:
                if ("number" != typeof i)
                    throw new Error("Invalid unit: " + i);
                vt = i
            }
            var Ce = null;
            q(),
            B();
            var je = p.__private__.getPageInfo = p.getPageInfo = function(t) {
                if (isNaN(t) || t % 1 != 0)
                    throw new Error("Invalid argument passed to jsPDF.getPageInfo");
                return {
                    objId: qt[t].objId,
                    pageNumber: t,
                    pageContext: qt[t]
                }
            }
              , Oe = p.__private__.getPageInfoByObjId = function(t) {
                if (isNaN(t) || t % 1 != 0)
                    throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
                for (var e in qt)
                    if (qt[e].objId === t)
                        break;
                return je(e)
            }
              , Be = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
                return {
                    objId: qt[R].objId,
                    pageNumber: R,
                    pageContext: qt[R]
                }
            }
            ;
            p.addPage = function() {
                return ve.apply(this, arguments),
                this
            }
            ,
            p.setPage = function() {
                return ye.apply(this, arguments),
                K.call(this, Y[R]),
                this
            }
            ,
            p.insertPage = function(t) {
                return this.addPage(),
                this.movePage(R, t),
                this
            }
            ,
            p.movePage = function(t, e) {
                var r, n;
                if (t > e) {
                    r = Y[t],
                    n = qt[t];
                    for (var i = t; i > e; i--)
                        Y[i] = Y[i - 1],
                        qt[i] = qt[i - 1];
                    Y[e] = r,
                    qt[e] = n,
                    this.setPage(e)
                } else if (t < e) {
                    r = Y[t],
                    n = qt[t];
                    for (var a = t; a < e; a++)
                        Y[a] = Y[a + 1],
                        qt[a] = qt[a + 1];
                    Y[e] = r,
                    qt[e] = n,
                    this.setPage(e)
                }
                return this
            }
            ,
            p.deletePage = function() {
                return be.apply(this, arguments),
                this
            }
            ,
            p.__private__.text = p.text = function(t, e, r, i, a) {
                var o, s, u, c, h, l, f, p, g, m = (i = i || {}).scope || this;
                if ("number" == typeof t && "number" == typeof e && ("string" == typeof r || Array.isArray(r))) {
                    var v = r;
                    r = e,
                    e = t,
                    t = v
                }
                if (arguments[3]instanceof Ht == 0 ? (u = arguments[4],
                c = arguments[5],
                "object" === (0,
                n.Z)(f = arguments[3]) && null !== f || ("string" == typeof u && (c = u,
                u = null),
                "string" == typeof f && (c = f,
                f = null),
                "number" == typeof f && (u = f,
                f = null),
                i = {
                    flags: f,
                    angle: u,
                    align: c
                })) : (S("The transform parameter of text() with a Matrix value"),
                g = a),
                isNaN(e) || isNaN(r) || null == t)
                    throw new Error("Invalid arguments passed to jsPDF.text");
                if (0 === t.length)
                    return m;
                var b, N = "", L = "number" == typeof i.lineHeightFactor ? i.lineHeightFactor : Je, A = m.internal.scaleFactor;
                function _(t) {
                    return t = t.split("\t").join(Array(i.TabLen || 9).join(" ")),
                    ge(t, f)
                }
                function P(t) {
                    for (var e, r = t.concat(), n = [], i = r.length; i--; )
                        "string" == typeof (e = r.shift()) ? n.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? n.push(e[0]) : n.push([e[0], e[1], e[2]]);
                    return n
                }
                function k(t, e) {
                    var r;
                    if ("string" == typeof t)
                        r = e(t)[0];
                    else if (Array.isArray(t)) {
                        for (var n, i, a = t.concat(), o = [], s = a.length; s--; )
                            "string" == typeof (n = a.shift()) ? o.push(e(n)[0]) : Array.isArray(n) && "string" == typeof n[0] && (i = e(n[0], n[1], n[2]),
                            o.push([i[0], i[1], i[2]]));
                        r = o
                    }
                    return r
                }
                var F = !1
                  , C = !0;
                if ("string" == typeof t)
                    F = !0;
                else if (Array.isArray(t)) {
                    var j = t.concat();
                    s = [];
                    for (var O, B = j.length; B--; )
                        ("string" != typeof (O = j.shift()) || Array.isArray(O) && "string" != typeof O[0]) && (C = !1);
                    F = C
                }
                if (!1 === F)
                    throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
                var M = nt / m.internal.scaleFactor
                  , E = M * (L - 1);
                switch (i.baseline) {
                case "bottom":
                    r -= E;
                    break;
                case "top":
                    r += M - E;
                    break;
                case "hanging":
                    r += M - 2 * E;
                    break;
                case "middle":
                    r += M / 2 - E
                }
                if ((l = i.maxWidth || 0) > 0 && ("string" == typeof t ? t = m.splitTextToSize(t, l) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
                    return t.concat(m.splitTextToSize(e, l))
                }
                ), []))),
                o = {
                    text: t,
                    x: e,
                    y: r,
                    options: i,
                    mutex: {
                        pdfEscape: ge,
                        activeFontKey: mt,
                        fonts: Nt,
                        activeFontSize: nt
                    }
                },
                Dt.publish("preProcessText", o),
                t = o.text,
                u = (i = o.options).angle,
                g instanceof Ht == 0 && u && "number" == typeof u) {
                    u *= Math.PI / 180,
                    0 === i.rotationDirection && (u = -u),
                    w === y.ADVANCED && (u = -u);
                    var q = Math.cos(u)
                      , D = Math.sin(u);
                    g = new Ht(q,D,-D,q,0,0)
                } else
                    u && u instanceof Ht && (g = u);
                w !== y.ADVANCED || g || (g = Vt),
                void 0 !== (h = i.charSpace || cr) && (N += x(I(h)) + " Tc\n",
                this.setCharSpace(this.getCharSpace() || 0)),
                void 0 !== (p = i.horizontalScale) && (N += x(100 * p) + " Tz\n"),
                i.lang;
                var R = -1
                  , T = void 0 !== i.renderingMode ? i.renderingMode : i.stroke
                  , U = m.internal.getCurrentPageInfo().pageContext;
                switch (T) {
                case 0:
                case !1:
                case "fill":
                    R = 0;
                    break;
                case 1:
                case !0:
                case "stroke":
                    R = 1;
                    break;
                case 2:
                case "fillThenStroke":
                    R = 2;
                    break;
                case 3:
                case "invisible":
                    R = 3;
                    break;
                case 4:
                case "fillAndAddForClipping":
                    R = 4;
                    break;
                case 5:
                case "strokeAndAddPathForClipping":
                    R = 5;
                    break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                    R = 6;
                    break;
                case 7:
                case "addToPathForClipping":
                    R = 7
                }
                var z = void 0 !== U.usedRenderingMode ? U.usedRenderingMode : -1;
                -1 !== R ? N += R + " Tr\n" : -1 !== z && (N += "0 Tr\n"),
                -1 !== R && (U.usedRenderingMode = R),
                c = i.align || "left";
                var H, W = nt * L, V = m.internal.pageSize.getWidth(), G = Nt[mt];
                h = i.charSpace || cr,
                l = i.maxWidth || 0,
                f = Object.assign({
                    autoencode: !0,
                    noBOM: !0
                }, i.flags);
                var Y = [];
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    var J;
                    s = P(t),
                    "left" !== c && (H = s.map((function(t) {
                        return m.getStringUnitWidth(t, {
                            font: G,
                            charSpace: h,
                            fontSize: nt,
                            doKerning: !1
                        }) * nt / A
                    }
                    )));
                    var X, K = 0;
                    if ("right" === c) {
                        e -= H[0],
                        t = [],
                        B = s.length;
                        for (var Z = 0; Z < B; Z++)
                            0 === Z ? (X = er(e),
                            J = rr(r)) : (X = I(K - H[Z]),
                            J = -W),
                            t.push([s[Z], X, J]),
                            K = H[Z]
                    } else if ("center" === c) {
                        e -= H[0] / 2,
                        t = [],
                        B = s.length;
                        for (var Q = 0; Q < B; Q++)
                            0 === Q ? (X = er(e),
                            J = rr(r)) : (X = I((K - H[Q]) / 2),
                            J = -W),
                            t.push([s[Q], X, J]),
                            K = H[Q]
                    } else if ("left" === c) {
                        t = [],
                        B = s.length;
                        for (var tt = 0; tt < B; tt++)
                            t.push(s[tt])
                    } else {
                        if ("justify" !== c)
                            throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                        t = [],
                        B = s.length,
                        l = 0 !== l ? l : V;
                        for (var et = 0; et < B; et++)
                            J = 0 === et ? rr(r) : -W,
                            X = 0 === et ? er(e) : 0,
                            et < B - 1 ? Y.push(x(I((l - H[et]) / (s[et].split(" ").length - 1)))) : Y.push(0),
                            t.push([s[et], X, J])
                    }
                }
                !0 === ("boolean" == typeof i.R2L ? i.R2L : ct) && (t = k(t, (function(t, e, r) {
                    return [t.split("").reverse().join(""), e, r]
                }
                ))),
                o = {
                    text: t,
                    x: e,
                    y: r,
                    options: i,
                    mutex: {
                        pdfEscape: ge,
                        activeFontKey: mt,
                        fonts: Nt,
                        activeFontSize: nt
                    }
                },
                Dt.publish("postProcessText", o),
                t = o.text,
                b = o.mutex.isHex || !1;
                var rt = Nt[mt].encoding;
                "WinAnsiEncoding" !== rt && "StandardEncoding" !== rt || (t = k(t, (function(t, e, r) {
                    return [_(t), e, r]
                }
                ))),
                s = P(t),
                t = [];
                for (var it, at, ot, st = Array.isArray(s[0]) ? 1 : 0, ut = "", ht = function(t, e, r) {
                    var n = "";
                    return r instanceof Ht ? (r = "number" == typeof i.angle ? Wt(r, new Ht(1,0,0,1,t,e)) : Wt(new Ht(1,0,0,1,t,e), r),
                    w === y.ADVANCED && (r = Wt(new Ht(1,0,0,-1,0,0), r)),
                    n = r.join(" ") + " Tm\n") : n = x(t) + " " + x(e) + " Td\n",
                    n
                }, lt = 0; lt < s.length; lt++) {
                    switch (ut = "",
                    st) {
                    case 1:
                        ot = (b ? "<" : "(") + s[lt][0] + (b ? ">" : ")"),
                        it = parseFloat(s[lt][1]),
                        at = parseFloat(s[lt][2]);
                        break;
                    case 0:
                        ot = (b ? "<" : "(") + s[lt] + (b ? ">" : ")"),
                        it = er(e),
                        at = rr(r)
                    }
                    void 0 !== Y && void 0 !== Y[lt] && (ut = Y[lt] + " Tw\n"),
                    0 === lt ? t.push(ut + ht(it, at, g) + ot) : 0 === st ? t.push(ut + ot) : 1 === st && t.push(ut + ht(it, at, g) + ot)
                }
                t = 0 === st ? t.join(" Tj\nT* ") : t.join(" Tj\n"),
                t += " Tj\n";
                var ft = "BT\n/";
                return ft += mt + " " + nt + " Tf\n",
                ft += x(nt * L) + " TL\n",
                ft += sr + "\n",
                ft += N,
                ft += t,
                $(ft += "ET"),
                d[mt] = !0,
                m
            }
            ;
            var Me = p.__private__.clip = p.clip = function(t) {
                return $("evenodd" === t ? "W*" : "W"),
                this
            }
            ;
            p.clipEvenOdd = function() {
                return Me("evenodd")
            }
            ,
            p.__private__.discardPath = p.discardPath = function() {
                return $("n"),
                this
            }
            ;
            var Ee = p.__private__.isValidStyle = function(t) {
                var e = !1;
                return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0),
                e
            }
            ;
            p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(t) {
                return Ee(t) && (h = t),
                this
            }
            ;
            var qe = p.__private__.getStyle = p.getStyle = function(t) {
                var e = h;
                switch (t) {
                case "D":
                case "S":
                    e = "S";
                    break;
                case "F":
                    e = "f";
                    break;
                case "FD":
                case "DF":
                    e = "B";
                    break;
                case "f":
                case "f*":
                case "B":
                case "B*":
                    e = t
                }
                return e
            }
              , De = p.close = function() {
                return $("h"),
                this
            }
            ;
            p.stroke = function() {
                return $("S"),
                this
            }
            ,
            p.fill = function(t) {
                return Re("f", t),
                this
            }
            ,
            p.fillEvenOdd = function(t) {
                return Re("f*", t),
                this
            }
            ,
            p.fillStroke = function(t) {
                return Re("B", t),
                this
            }
            ,
            p.fillStrokeEvenOdd = function(t) {
                return Re("B*", t),
                this
            }
            ;
            var Re = function(t, e) {
                "object" === (0,
                n.Z)(e) ? ze(e, t) : $(t)
            }
              , Te = function(t) {
                null === t || w === y.ADVANCED && void 0 === t || (t = qe(t),
                $(t))
            };
            function Ue(t, e, r, n, i) {
                var a = new It(e || this.boundingBox,r || this.xStep,n || this.yStep,this.gState,i || this.matrix);
                a.stream = this.stream;
                var o = t + "$$" + this.cloneIndex++ + "$$";
                return Gt(o, a),
                a
            }
            var ze = function(t, e) {
                var r = jt[t.key]
                  , n = Ct[r];
                if (n instanceof kt)
                    $("q"),
                    $(He(e)),
                    n.gState && p.setGState(n.gState),
                    $(t.matrix.toString() + " cm"),
                    $("/" + r + " sh"),
                    $("Q");
                else if (n instanceof It) {
                    var i = new Ht(1,0,0,-1,0,Nr());
                    t.matrix && (i = i.multiply(t.matrix || Vt),
                    r = Ue.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id),
                    $("q"),
                    $("/Pattern cs"),
                    $("/" + r + " scn"),
                    n.gState && p.setGState(n.gState),
                    $(e),
                    $("Q")
                }
            }
              , He = function(t) {
                switch (t) {
                case "f":
                case "F":
                case "n":
                    return "W n";
                case "f*":
                    return "W* n";
                case "B":
                case "S":
                    return "W S";
                case "B*":
                    return "W* S"
                }
            }
              , We = p.moveTo = function(t, e) {
                return $(x(I(t)) + " " + x(F(e)) + " m"),
                this
            }
              , Ve = p.lineTo = function(t, e) {
                return $(x(I(t)) + " " + x(F(e)) + " l"),
                this
            }
              , Ge = p.curveTo = function(t, e, r, n, i, a) {
                return $([x(I(t)), x(F(e)), x(I(r)), x(F(n)), x(I(i)), x(F(a)), "c"].join(" ")),
                this
            }
            ;
            p.__private__.line = p.line = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ee(i))
                    throw new Error("Invalid arguments passed to jsPDF.line");
                return w === y.COMPAT ? this.lines([[r - t, n - e]], t, e, [1, 1], i || "S") : this.lines([[r - t, n - e]], t, e, [1, 1]).stroke()
            }
            ,
            p.__private__.lines = p.lines = function(t, e, r, n, i, a) {
                var o, s, u, c, h, l, f, d, p, g, m, v;
                if ("number" == typeof t && (v = r,
                r = e,
                e = t,
                t = v),
                n = n || [1, 1],
                a = a || !1,
                isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n) || !Ee(i) || "boolean" != typeof a)
                    throw new Error("Invalid arguments passed to jsPDF.lines");
                for (We(e, r),
                o = n[0],
                s = n[1],
                c = t.length,
                g = e,
                m = r,
                u = 0; u < c; u++)
                    2 === (h = t[u]).length ? (g = h[0] * o + g,
                    m = h[1] * s + m,
                    Ve(g, m)) : (l = h[0] * o + g,
                    f = h[1] * s + m,
                    d = h[2] * o + g,
                    p = h[3] * s + m,
                    g = h[4] * o + g,
                    m = h[5] * s + m,
                    Ge(l, f, d, p, g, m));
                return a && De(),
                Te(i),
                this
            }
            ,
            p.path = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e]
                      , n = r.c;
                    switch (r.op) {
                    case "m":
                        We(n[0], n[1]);
                        break;
                    case "l":
                        Ve(n[0], n[1]);
                        break;
                    case "c":
                        Ge.apply(this, n);
                        break;
                    case "h":
                        De()
                    }
                }
                return this
            }
            ,
            p.__private__.rect = p.rect = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ee(i))
                    throw new Error("Invalid arguments passed to jsPDF.rect");
                return w === y.COMPAT && (n = -n),
                $([x(I(t)), x(F(e)), x(I(r)), x(I(n)), "re"].join(" ")),
                Te(i),
                this
            }
            ,
            p.__private__.triangle = p.triangle = function(t, e, r, n, i, a, o) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Ee(o))
                    throw new Error("Invalid arguments passed to jsPDF.triangle");
                return this.lines([[r - t, n - e], [i - r, a - n], [t - i, e - a]], t, e, [1, 1], o, !0),
                this
            }
            ,
            p.__private__.roundedRect = p.roundedRect = function(t, e, r, n, i, a, o) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Ee(o))
                    throw new Error("Invalid arguments passed to jsPDF.roundedRect");
                var s = 4 / 3 * (Math.SQRT2 - 1);
                return i = Math.min(i, .5 * r),
                a = Math.min(a, .5 * n),
                this.lines([[r - 2 * i, 0], [i * s, 0, i, a - a * s, i, a], [0, n - 2 * a], [0, a * s, -i * s, a, -i, a], [2 * i - r, 0], [-i * s, 0, -i, -a * s, -i, -a], [0, 2 * a - n], [0, -a * s, i * s, -a, i, -a]], t + i, e, [1, 1], o, !0),
                this
            }
            ,
            p.__private__.ellipse = p.ellipse = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Ee(i))
                    throw new Error("Invalid arguments passed to jsPDF.ellipse");
                var a = 4 / 3 * (Math.SQRT2 - 1) * r
                  , o = 4 / 3 * (Math.SQRT2 - 1) * n;
                return We(t + r, e),
                Ge(t + r, e - o, t + a, e - n, t, e - n),
                Ge(t - a, e - n, t - r, e - o, t - r, e),
                Ge(t - r, e + o, t - a, e + n, t, e + n),
                Ge(t + a, e + n, t + r, e + o, t + r, e),
                Te(i),
                this
            }
            ,
            p.__private__.circle = p.circle = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || !Ee(n))
                    throw new Error("Invalid arguments passed to jsPDF.circle");
                return this.ellipse(t, e, r, r, n)
            }
            ,
            p.setFont = function(t, e, r) {
                return r && (e = A(e, r)),
                mt = Ne(t, e, {
                    disableWarning: !1
                }),
                this
            }
            ;
            var Ye = p.__private__.getFont = p.getFont = function() {
                return Nt[Ne.apply(p, arguments)]
            }
            ;
            p.__private__.getFontList = p.getFontList = function() {
                var t, e, r = {};
                for (t in Lt)
                    if (Lt.hasOwnProperty(t))
                        for (e in r[t] = [],
                        Lt[t])
                            Lt[t].hasOwnProperty(e) && r[t].push(e);
                return r
            }
            ,
            p.addFont = function(t, e, r, n, i) {
                var a = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
                return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (r = A(r, n)),
                pe.call(this, t, e, r, i = i || "Identity-H")
            }
            ;
            var Je, Xe = t.lineWidth || .200025, Ke = p.__private__.getLineWidth = p.getLineWidth = function() {
                return Xe
            }
            , Ze = p.__private__.setLineWidth = p.setLineWidth = function(t) {
                return Xe = t,
                $(x(I(t)) + " w"),
                this
            }
            ;
            p.__private__.setLineDash = Ft.API.setLineDash = Ft.API.setLineDashPattern = function(t, e) {
                if (t = t || [],
                e = e || 0,
                isNaN(e) || !Array.isArray(t))
                    throw new Error("Invalid arguments passed to jsPDF.setLineDash");
                return t = t.map((function(t) {
                    return x(I(t))
                }
                )).join(" "),
                e = x(I(e)),
                $("[" + t + "] " + e + " d"),
                this
            }
            ;
            var $e = p.__private__.getLineHeight = p.getLineHeight = function() {
                return nt * Je
            }
            ;
            p.__private__.getLineHeight = p.getLineHeight = function() {
                return nt * Je
            }
            ;
            var Qe = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(t) {
                return "number" == typeof (t = t || 1.15) && (Je = t),
                this
            }
              , tr = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
                return Je
            }
            ;
            Qe(t.lineHeight);
            var er = p.__private__.getHorizontalCoordinate = function(t) {
                return I(t)
            }
              , rr = p.__private__.getVerticalCoordinate = function(t) {
                return w === y.ADVANCED ? t : qt[R].mediaBox.topRightY - qt[R].mediaBox.bottomLeftY - I(t)
            }
              , nr = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(t) {
                return x(er(t))
            }
              , ir = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(t) {
                return x(rr(t))
            }
              , ar = t.strokeColor || "0 G";
            p.__private__.getStrokeColor = p.getDrawColor = function() {
                return te(ar)
            }
            ,
            p.__private__.setStrokeColor = p.setDrawColor = function(t, e, r, n) {
                return ar = ee({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "draw",
                    precision: 2
                }),
                $(ar),
                this
            }
            ;
            var or = t.fillColor || "0 g";
            p.__private__.getFillColor = p.getFillColor = function() {
                return te(or)
            }
            ,
            p.__private__.setFillColor = p.setFillColor = function(t, e, r, n) {
                return or = ee({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "fill",
                    precision: 2
                }),
                $(or),
                this
            }
            ;
            var sr = t.textColor || "0 g"
              , ur = p.__private__.getTextColor = p.getTextColor = function() {
                return te(sr)
            }
            ;
            p.__private__.setTextColor = p.setTextColor = function(t, e, r, n) {
                return sr = ee({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "text",
                    precision: 3
                }),
                this
            }
            ;
            var cr = t.charSpace
              , hr = p.__private__.getCharSpace = p.getCharSpace = function() {
                return parseFloat(cr || 0)
            }
            ;
            p.__private__.setCharSpace = p.setCharSpace = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.setCharSpace");
                return cr = t,
                this
            }
            ;
            var lr = 0;
            p.CapJoinStyles = {
                0: 0,
                butt: 0,
                but: 0,
                miter: 0,
                1: 1,
                round: 1,
                rounded: 1,
                circle: 1,
                2: 2,
                projecting: 2,
                project: 2,
                square: 2,
                bevel: 2
            },
            p.__private__.setLineCap = p.setLineCap = function(t) {
                var e = p.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return lr = e,
                $(e + " J"),
                this
            }
            ;
            var fr = 0;
            p.__private__.setLineJoin = p.setLineJoin = function(t) {
                var e = p.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return fr = e,
                $(e + " j"),
                this
            }
            ,
            p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(t) {
                if (t = t || 0,
                isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
                return $(x(I(t)) + " M"),
                this
            }
            ,
            p.GState = _t,
            p.setGState = function(t) {
                (t = "string" == typeof t ? Ot[Bt[t]] : dr(null, t)).equals(Mt) || ($("/" + t.id + " gs"),
                Mt = t)
            }
            ;
            var dr = function(t, e) {
                if (!t || !Bt[t]) {
                    var r = !1;
                    for (var n in Ot)
                        if (Ot.hasOwnProperty(n) && Ot[n].equals(e)) {
                            r = !0;
                            break
                        }
                    if (r)
                        e = Ot[n];
                    else {
                        var i = "GS" + (Object.keys(Ot).length + 1).toString(10);
                        Ot[i] = e,
                        e.id = i
                    }
                    return t && (Bt[t] = e.id),
                    Dt.publish("addGState", e),
                    e
                }
            };
            p.addGState = function(t, e) {
                return dr(t, e),
                this
            }
            ,
            p.saveGraphicsState = function() {
                return $("q"),
                Pt.push({
                    key: mt,
                    size: nt,
                    color: sr
                }),
                this
            }
            ,
            p.restoreGraphicsState = function() {
                $("Q");
                var t = Pt.pop();
                return mt = t.key,
                nt = t.size,
                sr = t.color,
                Mt = null,
                this
            }
            ,
            p.setCurrentTransformationMatrix = function(t) {
                return $(t.toString() + " cm"),
                this
            }
            ,
            p.comment = function(t) {
                return $("#" + t),
                this
            }
            ;
            var pr = function(t, e) {
                var r = t || 0;
                Object.defineProperty(this, "x", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        isNaN(t) || (r = parseFloat(t))
                    }
                });
                var n = e || 0;
                Object.defineProperty(this, "y", {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        isNaN(t) || (n = parseFloat(t))
                    }
                });
                var i = "pt";
                return Object.defineProperty(this, "type", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t.toString()
                    }
                }),
                this
            }
              , gr = function(t, e, r, n) {
                pr.call(this, t, e),
                this.type = "rect";
                var i = r || 0;
                Object.defineProperty(this, "w", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        isNaN(t) || (i = parseFloat(t))
                    }
                });
                var a = n || 0;
                return Object.defineProperty(this, "h", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        isNaN(t) || (a = parseFloat(t))
                    }
                }),
                this
            }
              , mr = function() {
                this.page = Et,
                this.currentPage = R,
                this.pages = Y.slice(0),
                this.pagesContext = qt.slice(0),
                this.x = bt,
                this.y = yt,
                this.matrix = wt,
                this.width = yr(R),
                this.height = Nr(R),
                this.outputDestination = X,
                this.id = "",
                this.objectNumber = -1
            };
            mr.prototype.restore = function() {
                Et = this.page,
                R = this.currentPage,
                qt = this.pagesContext,
                Y = this.pages,
                bt = this.x,
                yt = this.y,
                wt = this.matrix,
                wr(R, this.width),
                Lr(R, this.height),
                X = this.outputDestination
            }
            ;
            var vr = function(t, e, r, n, i) {
                zt.push(new mr),
                Et = R = 0,
                Y = [],
                bt = t,
                yt = e,
                wt = i,
                me([r, n])
            };
            for (var br in p.beginFormObject = function(t, e, r, n, i) {
                return vr(t, e, r, n, i),
                this
            }
            ,
            p.endFormObject = function(t) {
                return function(t) {
                    if (Ut[t])
                        zt.pop().restore();
                    else {
                        var e = new mr
                          , r = "Xo" + (Object.keys(Tt).length + 1).toString(10);
                        e.id = r,
                        Ut[t] = r,
                        Tt[r] = e,
                        Dt.publish("addFormObject", e),
                        zt.pop().restore()
                    }
                }(t),
                this
            }
            ,
            p.doFormObject = function(t, e) {
                var r = Tt[Ut[t]];
                return $("q"),
                $(e.toString() + " cm"),
                $("/" + r.id + " Do"),
                $("Q"),
                this
            }
            ,
            p.getFormObject = function(t) {
                var e = Tt[Ut[t]];
                return {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    matrix: e.matrix
                }
            }
            ,
            p.save = function(t, e) {
                return t = t || "generated.pdf",
                (e = e || {}).returnPromise = e.returnPromise || !1,
                !1 === e.returnPromise ? (at(ke(Pe()), t),
                "function" == typeof at.unload && Z.setTimeout && setTimeout(at.unload, 911),
                this) : new Promise((function(e, r) {
                    try {
                        var n = at(ke(Pe()), t);
                        "function" == typeof at.unload && Z.setTimeout && setTimeout(at.unload, 911),
                        e(n)
                    } catch (t) {
                        r(t.message)
                    }
                }
                ))
            }
            ,
            Ft.API)
                Ft.API.hasOwnProperty(br) && ("events" === br && Ft.API.events.length ? function(t, e) {
                    var r, n, i;
                    for (i = e.length - 1; -1 !== i; i--)
                        r = e[i][0],
                        n = e[i][1],
                        t.subscribe.apply(t, [r].concat("function" == typeof n ? [n] : n))
                }(Dt, Ft.API.events) : p[br] = Ft.API[br]);
            var yr = p.getPageWidth = function(t) {
                return (qt[t = t || R].mediaBox.topRightX - qt[t].mediaBox.bottomLeftX) / vt
            }
              , wr = p.setPageWidth = function(t, e) {
                qt[t].mediaBox.topRightX = e * vt + qt[t].mediaBox.bottomLeftX
            }
              , Nr = p.getPageHeight = function(t) {
                return (qt[t = t || R].mediaBox.topRightY - qt[t].mediaBox.bottomLeftY) / vt
            }
              , Lr = p.setPageHeight = function(t, e) {
                qt[t].mediaBox.topRightY = e * vt + qt[t].mediaBox.bottomLeftY
            }
            ;
            return p.internal = {
                pdfEscape: ge,
                getStyle: qe,
                getFont: Ye,
                getFontSize: ut,
                getCharSpace: hr,
                getTextColor: ur,
                getLineHeight: $e,
                getLineHeightFactor: tr,
                getLineWidth: Ke,
                write: tt,
                getHorizontalCoordinate: er,
                getVerticalCoordinate: rr,
                getCoordinateString: nr,
                getVerticalCoordinateString: ir,
                collections: {},
                newObject: Jt,
                newAdditionalObject: Zt,
                newObjectDeferred: Xt,
                newObjectDeferredBegin: Kt,
                getFilters: re,
                putStream: ne,
                events: Dt,
                scaleFactor: vt,
                pageSize: {
                    getWidth: function() {
                        return yr(R)
                    },
                    setWidth: function(t) {
                        wr(R, t)
                    },
                    getHeight: function() {
                        return Nr(R)
                    },
                    setHeight: function(t) {
                        Lr(R, t)
                    }
                },
                encryptionOptions: l,
                encryption: Ce,
                getEncryptor: function(t) {
                    return null !== l ? Ce.encryptor(t, 0) : function(t) {
                        return t
                    }
                },
                output: Ie,
                getNumberOfPages: we,
                pages: Y,
                out: $,
                f2: P,
                f3: k,
                getPageInfo: je,
                getPageInfoByObjId: Oe,
                getCurrentPageInfo: Be,
                getPDFVersion: m,
                Point: pr,
                Rectangle: gr,
                Matrix: Ht,
                hasHotfix: Fe
            },
            Object.defineProperty(p.internal.pageSize, "width", {
                get: function() {
                    return yr(R)
                },
                set: function(t) {
                    wr(R, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(p.internal.pageSize, "height", {
                get: function() {
                    return Nr(R)
                },
                set: function(t) {
                    Lr(R, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            function(t) {
                for (var e = 0, r = rt.length; e < r; e++) {
                    var n = pe.call(this, t[e][0], t[e][1], t[e][2], rt[e][3], !0);
                    !1 === f && (d[n] = !0);
                    var i = t[e][0].split("-");
                    de({
                        id: n,
                        fontName: i[0],
                        fontStyle: i[1] || ""
                    })
                }
                Dt.publish("addFonts", {
                    fonts: Nt,
                    dictionary: Lt
                })
            }
            .call(p, rt),
            mt = "F1",
            ve(a, r),
            Dt.publish("initialized"),
            p
        }
        At.prototype.lsbFirstWord = function(t) {
            return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255)
        }
        ,
        At.prototype.toHexString = function(t) {
            return t.split("").map((function(t) {
                return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2)
            }
            )).join("")
        }
        ,
        At.prototype.hexToBytes = function(t) {
            for (var e = [], r = 0; r < t.length; r += 2)
                e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
            return e.join("")
        }
        ,
        At.prototype.processOwnerPassword = function(t, e) {
            return Nt(bt(e).substr(0, 5), t)
        }
        ,
        At.prototype.encryptor = function(t, e) {
            var r = bt(this.encryptionKey + String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
            return function(t) {
                return Nt(r, t)
            }
        }
        ,
        _t.prototype.equals = function(t) {
            var e, r = "id,objectNumber,equals";
            if (!t || (0,
            n.Z)(t) !== (0,
            n.Z)(this))
                return !1;
            var i = 0;
            for (e in this)
                if (!(r.indexOf(e) >= 0)) {
                    if (this.hasOwnProperty(e) && !t.hasOwnProperty(e))
                        return !1;
                    if (this[e] !== t[e])
                        return !1;
                    i++
                }
            for (e in t)
                t.hasOwnProperty(e) && r.indexOf(e) < 0 && i--;
            return 0 === i
        }
        ,
        Ft.API = {
            events: []
        },
        Ft.version = "2.5.1";
        var Ct = Ft.API
          , jt = 1
          , Ot = function(t) {
            return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
        }
          , Bt = function(t) {
            return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
        }
          , Mt = function(t) {
            return t.toFixed(2)
        }
          , Et = function(t) {
            return t.toFixed(5)
        };
        Ct.__acroform__ = {};
        var qt = function(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t
        }
          , Dt = function(t) {
            return t * jt
        }
          , Rt = function(t) {
            var e = new re
              , r = me.internal.getHeight(t) || 0
              , n = me.internal.getWidth(t) || 0;
            return e.BBox = [0, 0, Number(Mt(n)), Number(Mt(r))],
            e
        }
          , Tt = Ct.__acroform__.setBit = function(t, e) {
            if (t = t || 0,
            e = e || 0,
            isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
            return t | 1 << e
        }
          , Ut = Ct.__acroform__.clearBit = function(t, e) {
            if (t = t || 0,
            e = e || 0,
            isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
            return t & ~(1 << e)
        }
          , zt = Ct.__acroform__.getBit = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
            return 0 == (t & 1 << e) ? 0 : 1
        }
          , Ht = Ct.__acroform__.getBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
            return zt(t, e - 1)
        }
          , Wt = Ct.__acroform__.setBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
            return Tt(t, e - 1)
        }
          , Vt = Ct.__acroform__.clearBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
            return Ut(t, e - 1)
        }
          , Gt = Ct.__acroform__.calculateCoordinates = function(t, e) {
            var r = e.internal.getHorizontalCoordinate
              , n = e.internal.getVerticalCoordinate
              , i = t[0]
              , a = t[1]
              , o = t[2]
              , s = t[3]
              , u = {};
            return u.lowerLeft_X = r(i) || 0,
            u.lowerLeft_Y = n(a + s) || 0,
            u.upperRight_X = r(i + o) || 0,
            u.upperRight_Y = n(a) || 0,
            [Number(Mt(u.lowerLeft_X)), Number(Mt(u.lowerLeft_Y)), Number(Mt(u.upperRight_X)), Number(Mt(u.upperRight_Y))]
        }
          , Yt = function(t) {
            if (t.appearanceStreamContent)
                return t.appearanceStreamContent;
            if (t.V || t.DV) {
                var e = []
                  , r = t._V || t.DV
                  , n = Jt(t, r)
                  , i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
                e.push("/Tx BMC"),
                e.push("q"),
                e.push("BT"),
                e.push(t.scope.__private__.encodeColorString(t.color)),
                e.push("/" + i + " " + Mt(n.fontSize) + " Tf"),
                e.push("1 0 0 1 0 0 Tm"),
                e.push(n.text),
                e.push("ET"),
                e.push("Q"),
                e.push("EMC");
                var a = Rt(t);
                return a.scope = t.scope,
                a.stream = e.join("\n"),
                a
            }
        }
          , Jt = function(t, e) {
            var r = 0 === t.fontSize ? t.maxFontSize : t.fontSize
              , n = {
                text: "",
                fontSize: ""
            }
              , i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" ");
            i = t.multiline ? i.map((function(t) {
                return t.split("\n")
            }
            )) : i.map((function(t) {
                return [t]
            }
            ));
            var a = r
              , o = me.internal.getHeight(t) || 0;
            o = o < 0 ? -o : o;
            var s = me.internal.getWidth(t) || 0;
            s = s < 0 ? -s : s;
            var u = function(e, r, n) {
                if (e + 1 < i.length) {
                    var a = r + " " + i[e + 1][0];
                    return Xt(a, t, n).width <= s - 4
                }
                return !1
            };
            a++;
            t: for (; a > 0; ) {
                e = "",
                a--;
                var c, h, l = Xt("3", t, a).height, f = t.multiline ? o - a : (o - l) / 2, d = f += 2, p = 0, g = 0, m = 0;
                if (a <= 0) {
                    e = "(...) Tj\n",
                    e += "% Width of Text: " + Xt(e, t, a = 12).width + ", FieldWidth:" + s + "\n";
                    break
                }
                for (var v = "", b = 0, y = 0; y < i.length; y++)
                    if (i.hasOwnProperty(y)) {
                        var w = !1;
                        if (1 !== i[y].length && m !== i[y].length - 1) {
                            if ((l + 2) * (b + 2) + 2 > o)
                                continue t;
                            v += i[y][m],
                            w = !0,
                            g = y,
                            y--
                        } else {
                            v = " " == (v += i[y][m] + " ").substr(v.length - 1) ? v.substr(0, v.length - 1) : v;
                            var N = parseInt(y)
                              , L = u(N, v, a)
                              , A = y >= i.length - 1;
                            if (L && !A) {
                                v += " ",
                                m = 0;
                                continue
                            }
                            if (L || A) {
                                if (A)
                                    g = N;
                                else if (t.multiline && (l + 2) * (b + 2) + 2 > o)
                                    continue t
                            } else {
                                if (!t.multiline)
                                    continue t;
                                if ((l + 2) * (b + 2) + 2 > o)
                                    continue t;
                                g = N
                            }
                        }
                        for (var x = "", S = p; S <= g; S++) {
                            var _ = i[S];
                            if (t.multiline) {
                                if (S === g) {
                                    x += _[m] + " ",
                                    m = (m + 1) % _.length;
                                    continue
                                }
                                if (S === p) {
                                    x += _[_.length - 1] + " ";
                                    continue
                                }
                            }
                            x += _[0] + " "
                        }
                        switch (x = " " == x.substr(x.length - 1) ? x.substr(0, x.length - 1) : x,
                        h = Xt(x, t, a).width,
                        t.textAlign) {
                        case "right":
                            c = s - h - 2;
                            break;
                        case "center":
                            c = (s - h) / 2;
                            break;
                        default:
                            c = 2
                        }
                        e += Mt(c) + " " + Mt(d) + " Td\n",
                        e += "(" + Ot(x) + ") Tj\n",
                        e += -Mt(c) + " 0 Td\n",
                        d = -(a + 2),
                        h = 0,
                        p = w ? g : g + 1,
                        b++,
                        v = ""
                    }
                break
            }
            return n.text = e,
            n.fontSize = a,
            n
        }
          , Xt = function(t, e, r) {
            var n = e.scope.internal.getFont(e.fontName, e.fontStyle)
              , i = e.scope.getStringUnitWidth(t, {
                font: n,
                fontSize: parseFloat(r),
                charSpace: 0
            }) * parseFloat(r);
            return {
                height: e.scope.getStringUnitWidth("3", {
                    font: n,
                    fontSize: parseFloat(r),
                    charSpace: 0
                }) * parseFloat(r) * 1.5,
                width: i
            }
        }
          , Kt = {
            fields: [],
            xForms: [],
            acroFormDictionaryRoot: null,
            printedOut: !1,
            internal: null,
            isInitialized: !1
        }
          , Zt = function(t, e) {
            var r = {
                type: "reference",
                object: t
            };
            void 0 === e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t) {
                return t.type === r.type && t.object === r.object
            }
            )) && e.internal.getPageInfo(t.page).pageContext.annotations.push(r)
        }
          , $t = function(t, e) {
            if (e.scope = t,
            void 0 !== t.internal && (void 0 === t.internal.acroformPlugin || !1 === t.internal.acroformPlugin.isInitialized)) {
                if (ie.FieldNum = 0,
                t.internal.acroformPlugin = JSON.parse(JSON.stringify(Kt)),
                t.internal.acroformPlugin.acroFormDictionaryRoot)
                    throw new Error("Exception while creating AcroformDictionary");
                jt = t.internal.scaleFactor,
                t.internal.acroformPlugin.acroFormDictionaryRoot = new ne,
                t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t,
                t.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t.internal.events.subscribe("postPutResources", (function() {
                    var e;
                    (e = t).internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID),
                    delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
                    e.internal.acroformPlugin.printedOut = !0
                }
                )),
                t.internal.events.subscribe("buildDocument", (function() {
                    !function(t) {
                        t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                        var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var n = e[r];
                                n.objId = void 0,
                                n.hasAnnotation && Zt(n, t)
                            }
                    }(t)
                }
                )),
                t.internal.events.subscribe("putCatalog", (function() {
                    !function(t) {
                        if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot)
                            throw new Error("putCatalogCallback: Root missing.");
                        t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                    }(t)
                }
                )),
                t.internal.events.subscribe("postPutPages", (function(e) {
                    !function(t, e) {
                        var r = !t;
                        for (var i in t || (e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0),
                        e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
                        t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                            if (t.hasOwnProperty(i)) {
                                var a = t[i]
                                  , o = []
                                  , s = a.Rect;
                                if (a.Rect && (a.Rect = Gt(a.Rect, e)),
                                e.internal.newObjectDeferredBegin(a.objId, !0),
                                a.DA = me.createDefaultAppearanceStream(a),
                                "object" === (0,
                                n.Z)(a) && "function" == typeof a.getKeyValueListForStream && (o = a.getKeyValueListForStream()),
                                a.Rect = s,
                                a.hasAppearanceStream && !a.appearanceStreamContent) {
                                    var u = Yt(a);
                                    o.push({
                                        key: "AP",
                                        value: "<</N " + u + ">>"
                                    }),
                                    e.internal.acroformPlugin.xForms.push(u)
                                }
                                if (a.appearanceStreamContent) {
                                    var c = "";
                                    for (var h in a.appearanceStreamContent)
                                        if (a.appearanceStreamContent.hasOwnProperty(h)) {
                                            var l = a.appearanceStreamContent[h];
                                            if (c += "/" + h + " ",
                                            c += "<<",
                                            Object.keys(l).length >= 1 || Array.isArray(l)) {
                                                for (var i in l)
                                                    if (l.hasOwnProperty(i)) {
                                                        var f = l[i];
                                                        "function" == typeof f && (f = f.call(e, a)),
                                                        c += "/" + i + " " + f + " ",
                                                        e.internal.acroformPlugin.xForms.indexOf(f) >= 0 || e.internal.acroformPlugin.xForms.push(f)
                                                    }
                                            } else
                                                "function" == typeof (f = l) && (f = f.call(e, a)),
                                                c += "/" + i + " " + f,
                                                e.internal.acroformPlugin.xForms.indexOf(f) >= 0 || e.internal.acroformPlugin.xForms.push(f);
                                            c += ">>"
                                        }
                                    o.push({
                                        key: "AP",
                                        value: "<<\n" + c + ">>"
                                    })
                                }
                                e.internal.putStream({
                                    additionalKeyValues: o,
                                    objectId: a.objId
                                }),
                                e.internal.out("endobj")
                            }
                        r && function(t, e) {
                            for (var r in t)
                                if (t.hasOwnProperty(r)) {
                                    var i = r
                                      , a = t[r];
                                    e.internal.newObjectDeferredBegin(a.objId, !0),
                                    "object" === (0,
                                    n.Z)(a) && "function" == typeof a.putStream && a.putStream(),
                                    delete t[i]
                                }
                        }(e.internal.acroformPlugin.xForms, e)
                    }(e, t)
                }
                )),
                t.internal.acroformPlugin.isInitialized = !0
            }
        }
          , Qt = Ct.__acroform__.arrayToPdfArray = function(t, e, r) {
            var i = function(t) {
                return t
            };
            if (Array.isArray(t)) {
                for (var a = "[", o = 0; o < t.length; o++)
                    switch (0 !== o && (a += " "),
                    (0,
                    n.Z)(t[o])) {
                    case "boolean":
                    case "number":
                    case "object":
                        a += t[o].toString();
                        break;
                    case "string":
                        "/" !== t[o].substr(0, 1) ? (void 0 !== e && r && (i = r.internal.getEncryptor(e)),
                        a += "(" + Ot(i(t[o].toString())) + ")") : a += t[o].toString()
                    }
                return a + "]"
            }
            throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
        }
          , te = function(t, e, r) {
            var n = function(t) {
                return t
            };
            return void 0 !== e && r && (n = r.internal.getEncryptor(e)),
            (t = t || "").toString(),
            "(" + Ot(n(t)) + ")"
        }
          , ee = function() {
            this._objId = void 0,
            this._scope = void 0,
            Object.defineProperty(this, "objId", {
                get: function() {
                    if (void 0 === this._objId) {
                        if (void 0 === this.scope)
                            return;
                        this._objId = this.scope.internal.newObjectDeferred()
                    }
                    return this._objId
                },
                set: function(t) {
                    this._objId = t
                }
            }),
            Object.defineProperty(this, "scope", {
                value: this._scope,
                writable: !0
            })
        };
        ee.prototype.toString = function() {
            return this.objId + " 0 R"
        }
        ,
        ee.prototype.putStream = function() {
            var t = this.getKeyValueListForStream();
            this.scope.internal.putStream({
                data: this.stream,
                additionalKeyValues: t,
                objectId: this.objId
            }),
            this.scope.internal.out("endobj")
        }
        ,
        ee.prototype.getKeyValueListForStream = function() {
            var t = []
              , e = Object.getOwnPropertyNames(this).filter((function(t) {
                return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1)
            }
            ));
            for (var r in e)
                if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
                    var n = e[r]
                      , i = this[n];
                    i && (Array.isArray(i) ? t.push({
                        key: n,
                        value: Qt(i, this.objId, this.scope)
                    }) : i instanceof ee ? (i.scope = this.scope,
                    t.push({
                        key: n,
                        value: i.objId + " 0 R"
                    })) : "function" != typeof i && t.push({
                        key: n,
                        value: i
                    }))
                }
            return t
        }
        ;
        var re = function() {
            ee.call(this),
            Object.defineProperty(this, "Type", {
                value: "/XObject",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "Subtype", {
                value: "/Form",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "FormType", {
                value: 1,
                configurable: !1,
                writable: !0
            });
            var t, e = [];
            Object.defineProperty(this, "BBox", {
                configurable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            }),
            Object.defineProperty(this, "Resources", {
                value: "2 0 R",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "stream", {
                enumerable: !1,
                configurable: !0,
                set: function(e) {
                    t = e.trim()
                },
                get: function() {
                    return t || null
                }
            })
        };
        qt(re, ee);
        var ne = function() {
            ee.call(this);
            var t, e = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return e.length > 0 ? e : void 0
                }
            }),
            Object.defineProperty(this, "Fields", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return e
                }
            }),
            Object.defineProperty(this, "DA", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (t) {
                        var e = function(t) {
                            return t
                        };
                        return this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
                        "(" + Ot(e(t)) + ")"
                    }
                },
                set: function(e) {
                    t = e
                }
            })
        };
        qt(ne, ee);
        var ie = function t() {
            ee.call(this);
            var e = 4;
            Object.defineProperty(this, "F", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    if (isNaN(t))
                        throw new Error('Invalid value "' + t + '" for attribute F supplied.');
                    e = t
                }
            }),
            Object.defineProperty(this, "showWhenPrinted", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(e, 3))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.F = Wt(e, 3) : this.F = Vt(e, 3)
                }
            });
            var r = 0;
            Object.defineProperty(this, "Ff", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (isNaN(t))
                        throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
                    r = t
                }
            });
            var n = [];
            Object.defineProperty(this, "Rect", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (0 !== n.length)
                        return n
                },
                set: function(t) {
                    n = void 0 !== t ? t : []
                }
            }),
            Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[0]) ? 0 : n[0]
                },
                set: function(t) {
                    n[0] = t
                }
            }),
            Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[1]) ? 0 : n[1]
                },
                set: function(t) {
                    n[1] = t
                }
            }),
            Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[2]) ? 0 : n[2]
                },
                set: function(t) {
                    n[2] = t
                }
            }),
            Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[3]) ? 0 : n[3]
                },
                set: function(t) {
                    n[3] = t
                }
            });
            var i = "";
            Object.defineProperty(this, "FT", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return i
                },
                set: function(t) {
                    switch (t) {
                    case "/Btn":
                    case "/Tx":
                    case "/Ch":
                    case "/Sig":
                        i = t;
                        break;
                    default:
                        throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
                    }
                }
            });
            var a = null;
            Object.defineProperty(this, "T", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (!a || a.length < 1) {
                        if (this instanceof fe)
                            return;
                        a = "FieldObject" + t.FieldNum++
                    }
                    var e = function(t) {
                        return t
                    };
                    return this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
                    "(" + Ot(e(a)) + ")"
                },
                set: function(t) {
                    a = t.toString()
                }
            }),
            Object.defineProperty(this, "fieldName", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    a = t
                }
            });
            var o = "helvetica";
            Object.defineProperty(this, "fontName", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    o = t
                }
            });
            var s = "normal";
            Object.defineProperty(this, "fontStyle", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    s = t
                }
            });
            var u = 0;
            Object.defineProperty(this, "fontSize", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return u
                },
                set: function(t) {
                    u = t
                }
            });
            var c = void 0;
            Object.defineProperty(this, "maxFontSize", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return void 0 === c ? 50 / jt : c
                },
                set: function(t) {
                    c = t
                }
            });
            var h = "black";
            Object.defineProperty(this, "color", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return h
                },
                set: function(t) {
                    h = t
                }
            });
            var l = "/F1 0 Tf 0 g";
            Object.defineProperty(this, "DA", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (!(!l || this instanceof fe || this instanceof pe))
                        return te(l, this.objId, this.scope)
                },
                set: function(t) {
                    t = t.toString(),
                    l = t
                }
            });
            var f = null;
            Object.defineProperty(this, "DV", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (f)
                        return this instanceof ce == 0 ? te(f, this.objId, this.scope) : f
                },
                set: function(t) {
                    t = t.toString(),
                    f = this instanceof ce == 0 ? "(" === t.substr(0, 1) ? Bt(t.substr(1, t.length - 2)) : Bt(t) : t
                }
            }),
            Object.defineProperty(this, "defaultValue", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this instanceof ce == 1 ? Bt(f.substr(1, f.length - 1)) : f
                },
                set: function(t) {
                    t = t.toString(),
                    f = this instanceof ce == 1 ? "/" + t : t
                }
            });
            var d = null;
            Object.defineProperty(this, "_V", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (d)
                        return d
                },
                set: function(t) {
                    this.V = t
                }
            }),
            Object.defineProperty(this, "V", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (d)
                        return this instanceof ce == 0 ? te(d, this.objId, this.scope) : d
                },
                set: function(t) {
                    t = t.toString(),
                    d = this instanceof ce == 0 ? "(" === t.substr(0, 1) ? Bt(t.substr(1, t.length - 2)) : Bt(t) : t
                }
            }),
            Object.defineProperty(this, "value", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this instanceof ce == 1 ? Bt(d.substr(1, d.length - 1)) : d
                },
                set: function(t) {
                    t = t.toString(),
                    d = this instanceof ce == 1 ? "/" + t : t
                }
            }),
            Object.defineProperty(this, "hasAnnotation", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.Rect
                }
            }),
            Object.defineProperty(this, "Type", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.hasAnnotation ? "/Annot" : null
                }
            }),
            Object.defineProperty(this, "Subtype", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.hasAnnotation ? "/Widget" : null
                }
            });
            var p, g = !1;
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return g
                },
                set: function(t) {
                    t = Boolean(t),
                    g = t
                }
            }),
            Object.defineProperty(this, "page", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    if (p)
                        return p
                },
                set: function(t) {
                    p = t
                }
            }),
            Object.defineProperty(this, "readOnly", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 1))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 1) : this.Ff = Vt(this.Ff, 1)
                }
            }),
            Object.defineProperty(this, "required", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 2))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 2) : this.Ff = Vt(this.Ff, 2)
                }
            }),
            Object.defineProperty(this, "noExport", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 3))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 3) : this.Ff = Vt(this.Ff, 3)
                }
            });
            var m = null;
            Object.defineProperty(this, "Q", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (null !== m)
                        return m
                },
                set: function(t) {
                    if (-1 === [0, 1, 2].indexOf(t))
                        throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
                    m = t
                }
            }),
            Object.defineProperty(this, "textAlign", {
                get: function() {
                    var t;
                    switch (m) {
                    case 0:
                    default:
                        t = "left";
                        break;
                    case 1:
                        t = "center";
                        break;
                    case 2:
                        t = "right"
                    }
                    return t
                },
                configurable: !0,
                enumerable: !0,
                set: function(t) {
                    switch (t) {
                    case "right":
                    case 2:
                        m = 2;
                        break;
                    case "center":
                    case 1:
                        m = 1;
                        break;
                    default:
                        m = 0
                    }
                }
            })
        };
        qt(ie, ee);
        var ae = function() {
            ie.call(this),
            this.FT = "/Ch",
            this.V = "()",
            this.fontName = "zapfdingbats";
            var t = 0;
            Object.defineProperty(this, "TI", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "topIndex", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            });
            var e = [];
            Object.defineProperty(this, "Opt", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return Qt(e, this.objId, this.scope)
                },
                set: function(t) {
                    var r, n;
                    n = [],
                    "string" == typeof (r = t) && (n = function(t, e, r) {
                        r || (r = 1);
                        for (var n, i = []; n = e.exec(t); )
                            i.push(n[r]);
                        return i
                    }(r, /\((.*?)\)/g)),
                    e = n
                }
            }),
            this.getOptions = function() {
                return e
            }
            ,
            this.setOptions = function(t) {
                e = t,
                this.sort && e.sort()
            }
            ,
            this.addOption = function(t) {
                t = (t = t || "").toString(),
                e.push(t),
                this.sort && e.sort()
            }
            ,
            this.removeOption = function(t, r) {
                for (r = r || !1,
                t = (t = t || "").toString(); -1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1),
                !1 !== r); )
                    ;
            }
            ,
            Object.defineProperty(this, "combo", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 18))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 18) : this.Ff = Vt(this.Ff, 18)
                }
            }),
            Object.defineProperty(this, "edit", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 19))
                },
                set: function(t) {
                    !0 === this.combo && (!0 === Boolean(t) ? this.Ff = Wt(this.Ff, 19) : this.Ff = Vt(this.Ff, 19))
                }
            }),
            Object.defineProperty(this, "sort", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 20))
                },
                set: function(t) {
                    !0 === Boolean(t) ? (this.Ff = Wt(this.Ff, 20),
                    e.sort()) : this.Ff = Vt(this.Ff, 20)
                }
            }),
            Object.defineProperty(this, "multiSelect", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 22))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 22) : this.Ff = Vt(this.Ff, 22)
                }
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 23))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 23) : this.Ff = Vt(this.Ff, 23)
                }
            }),
            Object.defineProperty(this, "commitOnSelChange", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 27))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 27) : this.Ff = Vt(this.Ff, 27)
                }
            }),
            this.hasAppearanceStream = !1
        };
        qt(ae, ie);
        var oe = function() {
            ae.call(this),
            this.fontName = "helvetica",
            this.combo = !1
        };
        qt(oe, ae);
        var se = function() {
            oe.call(this),
            this.combo = !0
        };
        qt(se, oe);
        var ue = function() {
            se.call(this),
            this.edit = !0
        };
        qt(ue, se);
        var ce = function() {
            ie.call(this),
            this.FT = "/Btn",
            Object.defineProperty(this, "noToggleToOff", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 15))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 15) : this.Ff = Vt(this.Ff, 15)
                }
            }),
            Object.defineProperty(this, "radio", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 16))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 16) : this.Ff = Vt(this.Ff, 16)
                }
            }),
            Object.defineProperty(this, "pushButton", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 17))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 17) : this.Ff = Vt(this.Ff, 17)
                }
            }),
            Object.defineProperty(this, "radioIsUnison", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 26))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 26) : this.Ff = Vt(this.Ff, 26)
                }
            });
            var t, e = {};
            Object.defineProperty(this, "MK", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    var t = function(t) {
                        return t
                    };
                    if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)),
                    0 !== Object.keys(e).length) {
                        var r, n = [];
                        for (r in n.push("<<"),
                        e)
                            n.push("/" + r + " (" + Ot(t(e[r])) + ")");
                        return n.push(">>"),
                        n.join("\n")
                    }
                },
                set: function(t) {
                    "object" === (0,
                    n.Z)(t) && (e = t)
                }
            }),
            Object.defineProperty(this, "caption", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return e.CA || ""
                },
                set: function(t) {
                    "string" == typeof t && (e.CA = t)
                }
            }),
            Object.defineProperty(this, "AS", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "appearanceState", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t.substr(1, t.length - 1)
                },
                set: function(e) {
                    t = "/" + e
                }
            })
        };
        qt(ce, ie);
        var he = function() {
            ce.call(this),
            this.pushButton = !0
        };
        qt(he, ce);
        var le = function() {
            ce.call(this),
            this.radio = !0,
            this.pushButton = !1;
            var t = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = void 0 !== e ? e : []
                }
            })
        };
        qt(le, ce);
        var fe = function() {
            var t, e;
            ie.call(this),
            Object.defineProperty(this, "Parent", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "optionName", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            });
            var r, i = {};
            Object.defineProperty(this, "MK", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    var t = function(t) {
                        return t
                    };
                    this.scope && (t = this.scope.internal.getEncryptor(this.objId));
                    var e, r = [];
                    for (e in r.push("<<"),
                    i)
                        r.push("/" + e + " (" + Ot(t(i[e])) + ")");
                    return r.push(">>"),
                    r.join("\n")
                },
                set: function(t) {
                    "object" === (0,
                    n.Z)(t) && (i = t)
                }
            }),
            Object.defineProperty(this, "caption", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return i.CA || ""
                },
                set: function(t) {
                    "string" == typeof t && (i.CA = t)
                }
            }),
            Object.defineProperty(this, "AS", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return r
                },
                set: function(t) {
                    r = t
                }
            }),
            Object.defineProperty(this, "appearanceState", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return r.substr(1, r.length - 1)
                },
                set: function(t) {
                    r = "/" + t
                }
            }),
            this.caption = "l",
            this.appearanceState = "Off",
            this._AppearanceType = me.RadioButton.Circle,
            this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
        };
        qt(fe, ie),
        le.prototype.setAppearance = function(t) {
            if (!("createAppearanceStream"in t) || !("getCA"in t))
                throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
            for (var e in this.Kids)
                if (this.Kids.hasOwnProperty(e)) {
                    var r = this.Kids[e];
                    r.appearanceStreamContent = t.createAppearanceStream(r.optionName),
                    r.caption = t.getCA()
                }
        }
        ,
        le.prototype.createOption = function(t) {
            var e = new fe;
            return e.Parent = this,
            e.optionName = t,
            this.Kids.push(e),
            ve.call(this.scope, e),
            e
        }
        ;
        var de = function() {
            ce.call(this),
            this.fontName = "zapfdingbats",
            this.caption = "3",
            this.appearanceState = "On",
            this.value = "On",
            this.textAlign = "center",
            this.appearanceStreamContent = me.CheckBox.createAppearanceStream()
        };
        qt(de, ce);
        var pe = function() {
            ie.call(this),
            this.FT = "/Tx",
            Object.defineProperty(this, "multiline", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 13))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 13) : this.Ff = Vt(this.Ff, 13)
                }
            }),
            Object.defineProperty(this, "fileSelect", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 21))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 21) : this.Ff = Vt(this.Ff, 21)
                }
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 23))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 23) : this.Ff = Vt(this.Ff, 23)
                }
            }),
            Object.defineProperty(this, "doNotScroll", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 24))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 24) : this.Ff = Vt(this.Ff, 24)
                }
            }),
            Object.defineProperty(this, "comb", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 25))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 25) : this.Ff = Vt(this.Ff, 25)
                }
            }),
            Object.defineProperty(this, "richText", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 26))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 26) : this.Ff = Vt(this.Ff, 26)
                }
            });
            var t = null;
            Object.defineProperty(this, "MaxLen", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "maxLength", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    Number.isInteger(e) && (t = e)
                }
            }),
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.V || this.DV
                }
            })
        };
        qt(pe, ie);
        var ge = function() {
            pe.call(this),
            Object.defineProperty(this, "password", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Ht(this.Ff, 14))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Wt(this.Ff, 14) : this.Ff = Vt(this.Ff, 14)
                }
            }),
            this.password = !0
        };
        qt(ge, pe);
        var me = {
            CheckBox: {
                createAppearanceStream: function() {
                    return {
                        N: {
                            On: me.CheckBox.YesNormal
                        },
                        D: {
                            On: me.CheckBox.YesPushDown,
                            Off: me.CheckBox.OffPushDown
                        }
                    }
                },
                YesPushDown: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = []
                      , n = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                      , i = t.scope.__private__.encodeColorString(t.color)
                      , a = Jt(t, t.caption);
                    return r.push("0.749023 g"),
                    r.push("0 0 " + Mt(me.internal.getWidth(t)) + " " + Mt(me.internal.getHeight(t)) + " re"),
                    r.push("f"),
                    r.push("BMC"),
                    r.push("q"),
                    r.push("0 0 1 rg"),
                    r.push("/" + n + " " + Mt(a.fontSize) + " Tf " + i),
                    r.push("BT"),
                    r.push(a.text),
                    r.push("ET"),
                    r.push("Q"),
                    r.push("EMC"),
                    e.stream = r.join("\n"),
                    e
                },
                YesNormal: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                      , n = t.scope.__private__.encodeColorString(t.color)
                      , i = []
                      , a = me.internal.getHeight(t)
                      , o = me.internal.getWidth(t)
                      , s = Jt(t, t.caption);
                    return i.push("1 g"),
                    i.push("0 0 " + Mt(o) + " " + Mt(a) + " re"),
                    i.push("f"),
                    i.push("q"),
                    i.push("0 0 1 rg"),
                    i.push("0 0 " + Mt(o - 1) + " " + Mt(a - 1) + " re"),
                    i.push("W"),
                    i.push("n"),
                    i.push("0 g"),
                    i.push("BT"),
                    i.push("/" + r + " " + Mt(s.fontSize) + " Tf " + n),
                    i.push(s.text),
                    i.push("ET"),
                    i.push("Q"),
                    e.stream = i.join("\n"),
                    e
                },
                OffPushDown: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = [];
                    return r.push("0.749023 g"),
                    r.push("0 0 " + Mt(me.internal.getWidth(t)) + " " + Mt(me.internal.getHeight(t)) + " re"),
                    r.push("f"),
                    e.stream = r.join("\n"),
                    e
                }
            },
            RadioButton: {
                Circle: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: me.RadioButton.Circle.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = me.RadioButton.Circle.YesNormal,
                        e.D[t] = me.RadioButton.Circle.YesPushDown,
                        e
                    },
                    getCA: function() {
                        return "l"
                    },
                    YesNormal: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = me.internal.Bezier_C
                          , a = Number((n * i).toFixed(5));
                        return r.push("q"),
                        r.push("1 0 0 1 " + Et(me.internal.getWidth(t) / 2) + " " + Et(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(n + " 0 m"),
                        r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"),
                        r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"),
                        r.push("-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c"),
                        r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = Number((2 * n).toFixed(5))
                          , a = Number((i * me.internal.Bezier_C).toFixed(5))
                          , o = Number((n * me.internal.Bezier_C).toFixed(5));
                        return r.push("0.749023 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Et(me.internal.getWidth(t) / 2) + " " + Et(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(i + " 0 m"),
                        r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"),
                        r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"),
                        r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"),
                        r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        r.push("0 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Et(me.internal.getWidth(t) / 2) + " " + Et(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(n + " 0 m"),
                        r.push(n + " " + o + " " + o + " " + n + " 0 " + n + " c"),
                        r.push("-" + o + " " + n + " -" + n + " " + o + " -" + n + " 0 c"),
                        r.push("-" + n + " -" + o + " -" + o + " -" + n + " 0 -" + n + " c"),
                        r.push(o + " -" + n + " " + n + " -" + o + " " + n + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = Number((2 * n).toFixed(5))
                          , a = Number((i * me.internal.Bezier_C).toFixed(5));
                        return r.push("0.749023 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Et(me.internal.getWidth(t) / 2) + " " + Et(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(i + " 0 m"),
                        r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"),
                        r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"),
                        r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"),
                        r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    }
                },
                Cross: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: me.RadioButton.Cross.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = me.RadioButton.Cross.YesNormal,
                        e.D[t] = me.RadioButton.Cross.YesPushDown,
                        e
                    },
                    getCA: function() {
                        return "8"
                    },
                    YesNormal: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.calculateCross(t);
                        return r.push("q"),
                        r.push("1 1 " + Mt(me.internal.getWidth(t) - 2) + " " + Mt(me.internal.getHeight(t) - 2) + " re"),
                        r.push("W"),
                        r.push("n"),
                        r.push(Mt(n.x1.x) + " " + Mt(n.x1.y) + " m"),
                        r.push(Mt(n.x2.x) + " " + Mt(n.x2.y) + " l"),
                        r.push(Mt(n.x4.x) + " " + Mt(n.x4.y) + " m"),
                        r.push(Mt(n.x3.x) + " " + Mt(n.x3.y) + " l"),
                        r.push("s"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = me.internal.calculateCross(t)
                          , n = [];
                        return n.push("0.749023 g"),
                        n.push("0 0 " + Mt(me.internal.getWidth(t)) + " " + Mt(me.internal.getHeight(t)) + " re"),
                        n.push("f"),
                        n.push("q"),
                        n.push("1 1 " + Mt(me.internal.getWidth(t) - 2) + " " + Mt(me.internal.getHeight(t) - 2) + " re"),
                        n.push("W"),
                        n.push("n"),
                        n.push(Mt(r.x1.x) + " " + Mt(r.x1.y) + " m"),
                        n.push(Mt(r.x2.x) + " " + Mt(r.x2.y) + " l"),
                        n.push(Mt(r.x4.x) + " " + Mt(r.x4.y) + " m"),
                        n.push(Mt(r.x3.x) + " " + Mt(r.x3.y) + " l"),
                        n.push("s"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = [];
                        return r.push("0.749023 g"),
                        r.push("0 0 " + Mt(me.internal.getWidth(t)) + " " + Mt(me.internal.getHeight(t)) + " re"),
                        r.push("f"),
                        e.stream = r.join("\n"),
                        e
                    }
                }
            },
            createDefaultAppearanceStream: function(t) {
                var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                  , r = t.scope.__private__.encodeColorString(t.color);
                return "/" + e + " " + t.fontSize + " Tf " + r
            }
        };
        me.internal = {
            Bezier_C: .551915024494,
            calculateCross: function(t) {
                var e = me.internal.getWidth(t)
                  , r = me.internal.getHeight(t)
                  , n = Math.min(e, r);
                return {
                    x1: {
                        x: (e - n) / 2,
                        y: (r - n) / 2 + n
                    },
                    x2: {
                        x: (e - n) / 2 + n,
                        y: (r - n) / 2
                    },
                    x3: {
                        x: (e - n) / 2,
                        y: (r - n) / 2
                    },
                    x4: {
                        x: (e - n) / 2 + n,
                        y: (r - n) / 2 + n
                    }
                }
            }
        },
        me.internal.getWidth = function(t) {
            var e = 0;
            return "object" === (0,
            n.Z)(t) && (e = Dt(t.Rect[2])),
            e
        }
        ,
        me.internal.getHeight = function(t) {
            var e = 0;
            return "object" === (0,
            n.Z)(t) && (e = Dt(t.Rect[3])),
            e
        }
        ;
        var ve = Ct.addField = function(t) {
            if ($t(this, t),
            !(t instanceof ie))
                throw new Error("Invalid argument passed to jsPDF.addField.");
            var e;
            return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1,
            e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null),
            e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
            t.page = t.scope.internal.getCurrentPageInfo().pageNumber,
            this
        }
        ;
        Ct.AcroFormChoiceField = ae,
        Ct.AcroFormListBox = oe,
        Ct.AcroFormComboBox = se,
        Ct.AcroFormEditBox = ue,
        Ct.AcroFormButton = ce,
        Ct.AcroFormPushButton = he,
        Ct.AcroFormRadioButton = le,
        Ct.AcroFormCheckBox = de,
        Ct.AcroFormTextField = pe,
        Ct.AcroFormPasswordField = ge,
        Ct.AcroFormAppearance = me,
        Ct.AcroForm = {
            ChoiceField: ae,
            ListBox: oe,
            ComboBox: se,
            EditBox: ue,
            Button: ce,
            PushButton: he,
            RadioButton: le,
            CheckBox: de,
            TextField: pe,
            PasswordField: ge,
            Appearance: me
        },
        Ft.AcroForm = {
            ChoiceField: ae,
            ListBox: oe,
            ComboBox: se,
            EditBox: ue,
            Button: ce,
            PushButton: he,
            RadioButton: le,
            CheckBox: de,
            TextField: pe,
            PasswordField: ge,
            Appearance: me
        };
        var be, ye;
        Ft.AcroForm;
        function we(t) {
            return t.reduce((function(t, e, r) {
                return t[e] = r,
                t
            }
            ), {})
        }
        !function(t) {
            t.__addimage__ = {};
            var e = "UNKNOWN"
              , r = {
                PNG: [[137, 80, 78, 71]],
                TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]],
                JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]],
                JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
                GIF87a: [[71, 73, 70, 56, 55, 97]],
                GIF89a: [[71, 73, 70, 56, 57, 97]],
                WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
                BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]]
            }
              , i = t.__addimage__.getImageFileTypeByImageData = function(t, n) {
                var i, a, o, s, u, c = e;
                if ("RGBA" === (n = n || e) || void 0 !== t.data && t.data instanceof Uint8ClampedArray && "height"in t && "width"in t)
                    return "RGBA";
                if (A(t))
                    for (u in r)
                        for (o = r[u],
                        i = 0; i < o.length; i += 1) {
                            for (s = !0,
                            a = 0; a < o[i].length; a += 1)
                                if (void 0 !== o[i][a] && o[i][a] !== t[a]) {
                                    s = !1;
                                    break
                                }
                            if (!0 === s) {
                                c = u;
                                break
                            }
                        }
                else
                    for (u in r)
                        for (o = r[u],
                        i = 0; i < o.length; i += 1) {
                            for (s = !0,
                            a = 0; a < o[i].length; a += 1)
                                if (void 0 !== o[i][a] && o[i][a] !== t.charCodeAt(a)) {
                                    s = !1;
                                    break
                                }
                            if (!0 === s) {
                                c = u;
                                break
                            }
                        }
                return c === e && n !== e && (c = n),
                c
            }
              , a = function t(e) {
                for (var r = this.internal.write, n = this.internal.putStream, i = (0,
                this.internal.getFilters)(); -1 !== i.indexOf("FlateEncode"); )
                    i.splice(i.indexOf("FlateEncode"), 1);
                e.objectId = this.internal.newObject();
                var a = [];
                if (a.push({
                    key: "Type",
                    value: "/XObject"
                }),
                a.push({
                    key: "Subtype",
                    value: "/Image"
                }),
                a.push({
                    key: "Width",
                    value: e.width
                }),
                a.push({
                    key: "Height",
                    value: e.height
                }),
                e.colorSpace === v.INDEXED ? a.push({
                    key: "ColorSpace",
                    value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask"in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
                }) : (a.push({
                    key: "ColorSpace",
                    value: "/" + e.colorSpace
                }),
                e.colorSpace === v.DEVICE_CMYK && a.push({
                    key: "Decode",
                    value: "[1 0 1 0 1 0 1 0]"
                })),
                a.push({
                    key: "BitsPerComponent",
                    value: e.bitsPerComponent
                }),
                "decodeParameters"in e && void 0 !== e.decodeParameters && a.push({
                    key: "DecodeParms",
                    value: "<<" + e.decodeParameters + ">>"
                }),
                "transparency"in e && Array.isArray(e.transparency)) {
                    for (var o = "", s = 0, u = e.transparency.length; s < u; s++)
                        o += e.transparency[s] + " " + e.transparency[s] + " ";
                    a.push({
                        key: "Mask",
                        value: "[" + o + "]"
                    })
                }
                void 0 !== e.sMask && a.push({
                    key: "SMask",
                    value: e.objectId + 1 + " 0 R"
                });
                var c = void 0 !== e.filter ? ["/" + e.filter] : void 0;
                if (n({
                    data: e.data,
                    additionalKeyValues: a,
                    alreadyAppliedFilters: c,
                    objectId: e.objectId
                }),
                r("endobj"),
                "sMask"in e && void 0 !== e.sMask) {
                    var h = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width
                      , l = {
                        width: e.width,
                        height: e.height,
                        colorSpace: "DeviceGray",
                        bitsPerComponent: e.bitsPerComponent,
                        decodeParameters: h,
                        data: e.sMask
                    };
                    "filter"in e && (l.filter = e.filter),
                    t.call(this, l)
                }
                if (e.colorSpace === v.INDEXED) {
                    var f = this.internal.newObject();
                    n({
                        data: S(new Uint8Array(e.palette)),
                        objectId: f
                    }),
                    r("endobj")
                }
            }
              , o = function() {
                var t = this.internal.collections.addImage_images;
                for (var e in t)
                    a.call(this, t[e])
            }
              , s = function() {
                var t, e = this.internal.collections.addImage_images, r = this.internal.write;
                for (var n in e)
                    r("/I" + (t = e[n]).index, t.objectId, "0", "R")
            }
              , u = function() {
                this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {},
                this.internal.events.subscribe("putResources", o),
                this.internal.events.subscribe("putXobjectDict", s))
            }
              , c = function() {
                var t = this.internal.collections.addImage_images;
                return u.call(this),
                t
            }
              , h = function() {
                return Object.keys(this.internal.collections.addImage_images).length
            }
              , l = function(e) {
                return "function" == typeof t["process" + e.toUpperCase()]
            }
              , f = function(t) {
                return "object" === (0,
                n.Z)(t) && 1 === t.nodeType
            }
              , d = function(e, r) {
                if ("IMG" === e.nodeName && e.hasAttribute("src")) {
                    var n = "" + e.getAttribute("src");
                    if (0 === n.indexOf("data:image/"))
                        return nt(unescape(n).split("base64,").pop());
                    var i = t.loadFile(n, !0);
                    if (void 0 !== i)
                        return i
                }
                if ("CANVAS" === e.nodeName) {
                    if (0 === e.width || 0 === e.height)
                        throw new Error("Given canvas must have data. Canvas width: " + e.width + ", height: " + e.height);
                    var a;
                    switch (r) {
                    case "PNG":
                        a = "image/png";
                        break;
                    case "WEBP":
                        a = "image/webp";
                        break;
                    default:
                        a = "image/jpeg"
                    }
                    return nt(e.toDataURL(a, 1).split("base64,").pop())
                }
            }
              , p = function(t) {
                var e = this.internal.collections.addImage_images;
                if (e)
                    for (var r in e)
                        if (t === e[r].alias)
                            return e[r]
            }
              , g = function(t, e, r) {
                return t || e || (t = -96,
                e = -96),
                t < 0 && (t = -1 * r.width * 72 / t / this.internal.scaleFactor),
                e < 0 && (e = -1 * r.height * 72 / e / this.internal.scaleFactor),
                0 === t && (t = e * r.width / r.height),
                0 === e && (e = t * r.height / r.width),
                [t, e]
            }
              , m = function(t, e, r, n, i, a) {
                var o = g.call(this, r, n, i)
                  , s = this.internal.getCoordinateString
                  , u = this.internal.getVerticalCoordinateString
                  , h = c.call(this);
                if (r = o[0],
                n = o[1],
                h[i.index] = i,
                a) {
                    a *= Math.PI / 180;
                    var l = Math.cos(a)
                      , f = Math.sin(a)
                      , d = function(t) {
                        return t.toFixed(4)
                    }
                      , p = [d(l), d(f), d(-1 * f), d(l), 0, 0, "cm"]
                }
                this.internal.write("q"),
                a ? (this.internal.write([1, "0", "0", 1, s(t), u(e + n), "cm"].join(" ")),
                this.internal.write(p.join(" ")),
                this.internal.write([s(r), "0", "0", s(n), "0", "0", "cm"].join(" "))) : this.internal.write([s(r), "0", "0", s(n), s(t), u(e + n), "cm"].join(" ")),
                this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
                this.internal.write("/I" + i.index + " Do"),
                this.internal.write("Q")
            }
              , v = t.color_spaces = {
                DEVICE_RGB: "DeviceRGB",
                DEVICE_GRAY: "DeviceGray",
                DEVICE_CMYK: "DeviceCMYK",
                CAL_GREY: "CalGray",
                CAL_RGB: "CalRGB",
                LAB: "Lab",
                ICC_BASED: "ICCBased",
                INDEXED: "Indexed",
                PATTERN: "Pattern",
                SEPARATION: "Separation",
                DEVICE_N: "DeviceN"
            };
            t.decode = {
                DCT_DECODE: "DCTDecode",
                FLATE_DECODE: "FlateDecode",
                LZW_DECODE: "LZWDecode",
                JPX_DECODE: "JPXDecode",
                JBIG2_DECODE: "JBIG2Decode",
                ASCII85_DECODE: "ASCII85Decode",
                ASCII_HEX_DECODE: "ASCIIHexDecode",
                RUN_LENGTH_DECODE: "RunLengthDecode",
                CCITT_FAX_DECODE: "CCITTFaxDecode"
            };
            var b = t.image_compression = {
                NONE: "NONE",
                FAST: "FAST",
                MEDIUM: "MEDIUM",
                SLOW: "SLOW"
            }
              , y = t.__addimage__.sHashCode = function(t) {
                var e, r, n = 0;
                if ("string" == typeof t)
                    for (r = t.length,
                    e = 0; e < r; e++)
                        n = (n << 5) - n + t.charCodeAt(e),
                        n |= 0;
                else if (A(t))
                    for (r = t.byteLength / 2,
                    e = 0; e < r; e++)
                        n = (n << 5) - n + t[e],
                        n |= 0;
                return n
            }
              , w = t.__addimage__.validateStringAsBase64 = function(t) {
                (t = t || "").toString().trim();
                var e = !0;
                return 0 === t.length && (e = !1),
                t.length % 4 != 0 && (e = !1),
                !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1),
                !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1),
                e
            }
              , N = t.__addimage__.extractImageFromDataUrl = function(t) {
                var e = (t = t || "").split("base64,")
                  , r = null;
                if (2 === e.length) {
                    var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);
                    Array.isArray(n) && (r = {
                        mimeType: n[1],
                        charset: n[2],
                        data: e[1]
                    })
                }
                return r
            }
              , L = t.__addimage__.supportsArrayBuffer = function() {
                return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
            }
            ;
            t.__addimage__.isArrayBuffer = function(t) {
                return L() && t instanceof ArrayBuffer
            }
            ;
            var A = t.__addimage__.isArrayBufferView = function(t) {
                return L() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array)
            }
              , x = t.__addimage__.binaryStringToUint8Array = function(t) {
                for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
                    r[n] = t.charCodeAt(n);
                return r
            }
              , S = t.__addimage__.arrayBufferToBinaryString = function(t) {
                for (var e = "", r = A(t) ? t : new Uint8Array(t), n = 0; n < r.length; n += 8192)
                    e += String.fromCharCode.apply(null, r.subarray(n, n + 8192));
                return e
            }
            ;
            t.addImage = function() {
                var t, r, i, a, o, s, c, h, l;
                if ("number" == typeof arguments[1] ? (r = e,
                i = arguments[1],
                a = arguments[2],
                o = arguments[3],
                s = arguments[4],
                c = arguments[5],
                h = arguments[6],
                l = arguments[7]) : (r = arguments[1],
                i = arguments[2],
                a = arguments[3],
                o = arguments[4],
                s = arguments[5],
                c = arguments[6],
                h = arguments[7],
                l = arguments[8]),
                "object" === (0,
                n.Z)(t = arguments[0]) && !f(t) && "imageData"in t) {
                    var d = t;
                    t = d.imageData,
                    r = d.format || r || e,
                    i = d.x || i || 0,
                    a = d.y || a || 0,
                    o = d.w || d.width || o,
                    s = d.h || d.height || s,
                    c = d.alias || c,
                    h = d.compression || h,
                    l = d.rotation || d.angle || l
                }
                var p = this.internal.getFilters();
                if (void 0 === h && -1 !== p.indexOf("FlateEncode") && (h = "SLOW"),
                isNaN(i) || isNaN(a))
                    throw new Error("Invalid coordinates passed to jsPDF.addImage");
                u.call(this);
                var g = _.call(this, t, r, c, h);
                return m.call(this, i, a, o, s, g, l),
                this
            }
            ;
            var _ = function(r, n, a, o) {
                var s, u, c;
                if ("string" == typeof r && i(r) === e) {
                    r = unescape(r);
                    var g = P(r, !1);
                    ("" !== g || void 0 !== (g = t.loadFile(r, !0))) && (r = g)
                }
                if (f(r) && (r = d(r, n)),
                n = i(r, n),
                !l(n))
                    throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
                if ((null == (c = a) || 0 === c.length) && (a = function(t) {
                    return "string" == typeof t || A(t) ? y(t) : A(t.data) ? y(t.data) : null
                }(r)),
                (s = p.call(this, a)) || (L() && (r instanceof Uint8Array || "RGBA" === n || (u = r,
                r = x(r))),
                s = this["process" + n.toUpperCase()](r, h.call(this), a, function(e) {
                    return e && "string" == typeof e && (e = e.toUpperCase()),
                    e in t.image_compression ? e : b.NONE
                }(o), u)),
                !s)
                    throw new Error("An unknown error occurred whilst processing the image.");
                return s
            }
              , P = t.__addimage__.convertBase64ToBinaryString = function(t, e) {
                var r;
                e = "boolean" != typeof e || e;
                var n, i = "";
                if ("string" == typeof t) {
                    n = null !== (r = N(t)) ? r.data : t;
                    try {
                        i = nt(n)
                    } catch (t) {
                        if (e)
                            throw w(n) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
                    }
                }
                return i
            }
            ;
            t.getImageProperties = function(r) {
                var n, a, o = "";
                if (f(r) && (r = d(r)),
                "string" == typeof r && i(r) === e && ("" === (o = P(r, !1)) && (o = t.loadFile(r) || ""),
                r = o),
                a = i(r),
                !l(a))
                    throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
                if (!L() || r instanceof Uint8Array || (r = x(r)),
                !(n = this["process" + a.toUpperCase()](r)))
                    throw new Error("An unknown error occurred whilst processing the image");
                return n.fileType = a,
                n
            }
        }(Ft.API),
        be = Ft.API,
        ye = function(t) {
            if (void 0 !== t && "" != t)
                return !0
        }
        ,
        Ft.API.events.push(["addPage", function(t) {
            this.internal.getPageInfo(t.pageNumber).pageContext.annotations = []
        }
        ]),
        be.events.push(["putPage", function(t) {
            for (var e, r, n, i = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, o = this.internal.getPageInfoByObjId(t.objId), s = t.pageContext.annotations, u = !1, c = 0; c < s.length && !u; c++)
                switch ((e = s[c]).type) {
                case "link":
                    (ye(e.options.url) || ye(e.options.pageNumber)) && (u = !0);
                    break;
                case "reference":
                case "text":
                case "freetext":
                    u = !0
                }
            if (0 != u) {
                this.internal.write("/Annots [");
                for (var h = 0; h < s.length; h++) {
                    e = s[h];
                    var l = this.internal.pdfEscape
                      , f = this.internal.getEncryptor(t.objId);
                    switch (e.type) {
                    case "reference":
                        this.internal.write(" " + e.object.objId + " 0 R ");
                        break;
                    case "text":
                        var d = this.internal.newAdditionalObject()
                          , p = this.internal.newAdditionalObject()
                          , g = this.internal.getEncryptor(d.objId)
                          , m = e.title || "Note";
                        n = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + i(e.bounds.x) + " " + a(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w) + " " + a(e.bounds.y) + "] ") + "/Contents (" + l(g(e.contents)) + ")",
                        n += " /Popup " + p.objId + " 0 R",
                        n += " /P " + o.objId + " 0 R",
                        n += " /T (" + l(g(m)) + ") >>",
                        d.content = n;
                        var v = d.objId + " 0 R";
                        n = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + i(e.bounds.x + 30) + " " + a(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w + 30) + " " + a(e.bounds.y) + "] ") + " /Parent " + v,
                        e.open && (n += " /Open true"),
                        n += " >>",
                        p.content = n,
                        this.internal.write(d.objId, "0 R", p.objId, "0 R");
                        break;
                    case "freetext":
                        r = "/Rect [" + i(e.bounds.x) + " " + a(e.bounds.y) + " " + i(e.bounds.x + e.bounds.w) + " " + a(e.bounds.y + e.bounds.h) + "] ";
                        var b = e.color || "#000000";
                        n = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + l(f(e.contents)) + ")",
                        n += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + b + ")",
                        n += " /Border [0 0 0]",
                        n += " >>",
                        this.internal.write(n);
                        break;
                    case "link":
                        if (e.options.name) {
                            var y = this.annotations._nameMap[e.options.name];
                            e.options.pageNumber = y.page,
                            e.options.top = y.y
                        } else
                            e.options.top || (e.options.top = 0);
                        if (r = "/Rect [" + e.finalBounds.x + " " + e.finalBounds.y + " " + e.finalBounds.w + " " + e.finalBounds.h + "] ",
                        n = "",
                        e.options.url)
                            n = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + l(f(e.options.url)) + ") >>";
                        else if (e.options.pageNumber)
                            switch (n = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(e.options.pageNumber).objId + " 0 R",
                            e.options.magFactor = e.options.magFactor || "XYZ",
                            e.options.magFactor) {
                            case "Fit":
                                n += " /Fit]";
                                break;
                            case "FitH":
                                n += " /FitH " + e.options.top + "]";
                                break;
                            case "FitV":
                                e.options.left = e.options.left || 0,
                                n += " /FitV " + e.options.left + "]";
                                break;
                            default:
                                var w = a(e.options.top);
                                e.options.left = e.options.left || 0,
                                void 0 === e.options.zoom && (e.options.zoom = 0),
                                n += " /XYZ " + e.options.left + " " + w + " " + e.options.zoom + "]"
                            }
                        "" != n && (n += " >>",
                        this.internal.write(n))
                    }
                }
                this.internal.write("]")
            }
        }
        ]),
        be.createAnnotation = function(t) {
            var e = this.internal.getCurrentPageInfo();
            switch (t.type) {
            case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
            case "text":
            case "freetext":
                e.pageContext.annotations.push(t)
            }
        }
        ,
        be.link = function(t, e, r, n, i) {
            var a = this.internal.getCurrentPageInfo()
              , o = this.internal.getCoordinateString
              , s = this.internal.getVerticalCoordinateString;
            a.pageContext.annotations.push({
                finalBounds: {
                    x: o(t),
                    y: s(e),
                    w: o(t + r),
                    h: s(e + n)
                },
                options: i,
                type: "link"
            })
        }
        ,
        be.textWithLink = function(t, e, r, n) {
            var i, a, o = this.getTextWidth(t), s = this.internal.getLineHeight() / this.internal.scaleFactor;
            if (void 0 !== n.maxWidth) {
                a = n.maxWidth;
                var u = this.splitTextToSize(t, a).length;
                i = Math.ceil(s * u)
            } else
                a = o,
                i = s;
            return this.text(t, e, r, n),
            r += .2 * s,
            "center" === n.align && (e -= o / 2),
            "right" === n.align && (e -= o),
            this.link(e, r - s, a, i, n),
            o
        }
        ,
        be.getTextWidth = function(t) {
            var e = this.internal.getFontSize();
            return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
        }
        ,
        function(t) {
            var e = {
                1569: [65152],
                1570: [65153, 65154],
                1571: [65155, 65156],
                1572: [65157, 65158],
                1573: [65159, 65160],
                1574: [65161, 65162, 65163, 65164],
                1575: [65165, 65166],
                1576: [65167, 65168, 65169, 65170],
                1577: [65171, 65172],
                1578: [65173, 65174, 65175, 65176],
                1579: [65177, 65178, 65179, 65180],
                1580: [65181, 65182, 65183, 65184],
                1581: [65185, 65186, 65187, 65188],
                1582: [65189, 65190, 65191, 65192],
                1583: [65193, 65194],
                1584: [65195, 65196],
                1585: [65197, 65198],
                1586: [65199, 65200],
                1587: [65201, 65202, 65203, 65204],
                1588: [65205, 65206, 65207, 65208],
                1589: [65209, 65210, 65211, 65212],
                1590: [65213, 65214, 65215, 65216],
                1591: [65217, 65218, 65219, 65220],
                1592: [65221, 65222, 65223, 65224],
                1593: [65225, 65226, 65227, 65228],
                1594: [65229, 65230, 65231, 65232],
                1601: [65233, 65234, 65235, 65236],
                1602: [65237, 65238, 65239, 65240],
                1603: [65241, 65242, 65243, 65244],
                1604: [65245, 65246, 65247, 65248],
                1605: [65249, 65250, 65251, 65252],
                1606: [65253, 65254, 65255, 65256],
                1607: [65257, 65258, 65259, 65260],
                1608: [65261, 65262],
                1609: [65263, 65264, 64488, 64489],
                1610: [65265, 65266, 65267, 65268],
                1649: [64336, 64337],
                1655: [64477],
                1657: [64358, 64359, 64360, 64361],
                1658: [64350, 64351, 64352, 64353],
                1659: [64338, 64339, 64340, 64341],
                1662: [64342, 64343, 64344, 64345],
                1663: [64354, 64355, 64356, 64357],
                1664: [64346, 64347, 64348, 64349],
                1667: [64374, 64375, 64376, 64377],
                1668: [64370, 64371, 64372, 64373],
                1670: [64378, 64379, 64380, 64381],
                1671: [64382, 64383, 64384, 64385],
                1672: [64392, 64393],
                1676: [64388, 64389],
                1677: [64386, 64387],
                1678: [64390, 64391],
                1681: [64396, 64397],
                1688: [64394, 64395],
                1700: [64362, 64363, 64364, 64365],
                1702: [64366, 64367, 64368, 64369],
                1705: [64398, 64399, 64400, 64401],
                1709: [64467, 64468, 64469, 64470],
                1711: [64402, 64403, 64404, 64405],
                1713: [64410, 64411, 64412, 64413],
                1715: [64406, 64407, 64408, 64409],
                1722: [64414, 64415],
                1723: [64416, 64417, 64418, 64419],
                1726: [64426, 64427, 64428, 64429],
                1728: [64420, 64421],
                1729: [64422, 64423, 64424, 64425],
                1733: [64480, 64481],
                1734: [64473, 64474],
                1735: [64471, 64472],
                1736: [64475, 64476],
                1737: [64482, 64483],
                1739: [64478, 64479],
                1740: [64508, 64509, 64510, 64511],
                1744: [64484, 64485, 64486, 64487],
                1746: [64430, 64431],
                1747: [64432, 64433]
            }
              , r = {
                65247: {
                    65154: 65269,
                    65156: 65271,
                    65160: 65273,
                    65166: 65275
                },
                65248: {
                    65154: 65270,
                    65156: 65272,
                    65160: 65274,
                    65166: 65276
                },
                65165: {
                    65247: {
                        65248: {
                            65258: 65010
                        }
                    }
                },
                1617: {
                    1612: 64606,
                    1613: 64607,
                    1614: 64608,
                    1615: 64609,
                    1616: 64610
                }
            }
              , n = {
                1612: 64606,
                1613: 64607,
                1614: 64608,
                1615: 64609,
                1616: 64610
            }
              , i = [1570, 1571, 1573, 1575];
            t.__arabicParser__ = {};
            var a = t.__arabicParser__.isInArabicSubstitutionA = function(t) {
                return void 0 !== e[t.charCodeAt(0)]
            }
              , o = t.__arabicParser__.isArabicLetter = function(t) {
                return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)
            }
              , s = t.__arabicParser__.isArabicEndLetter = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length <= 2
            }
              , u = t.__arabicParser__.isArabicAlfLetter = function(t) {
                return o(t) && i.indexOf(t.charCodeAt(0)) >= 0
            }
            ;
            t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 1
            }
            ;
            var c = t.__arabicParser__.arabicLetterHasFinalForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 2
            }
            ;
            t.__arabicParser__.arabicLetterHasInitialForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 3
            }
            ;
            var h = t.__arabicParser__.arabicLetterHasMedialForm = function(t) {
                return o(t) && a(t) && 4 == e[t.charCodeAt(0)].length
            }
              , l = t.__arabicParser__.resolveLigatures = function(t) {
                var e = 0
                  , n = r
                  , i = ""
                  , a = 0;
                for (e = 0; e < t.length; e += 1)
                    void 0 !== n[t.charCodeAt(e)] ? (a++,
                    "number" == typeof (n = n[t.charCodeAt(e)]) && (i += String.fromCharCode(n),
                    n = r,
                    a = 0),
                    e === t.length - 1 && (n = r,
                    i += t.charAt(e - (a - 1)),
                    e -= a - 1,
                    a = 0)) : (n = r,
                    i += t.charAt(e - a),
                    e -= a,
                    a = 0);
                return i
            }
            ;
            t.__arabicParser__.isArabicDiacritic = function(t) {
                return void 0 !== t && void 0 !== n[t.charCodeAt(0)]
            }
            ;
            var f = t.__arabicParser__.getCorrectForm = function(t, e, r) {
                return o(t) ? !1 === a(t) ? -1 : !c(t) || !o(e) && !o(r) || !o(r) && s(e) || s(t) && !o(e) || s(t) && u(e) || s(t) && s(e) ? 0 : h(t) && o(e) && !s(e) && o(r) && c(r) ? 3 : s(t) || !o(r) ? 1 : 2 : -1
            }
              , d = function(t) {
                var r = 0
                  , n = 0
                  , i = 0
                  , a = ""
                  , s = ""
                  , u = ""
                  , c = (t = t || "").split("\\s+")
                  , h = [];
                for (r = 0; r < c.length; r += 1) {
                    for (h.push(""),
                    n = 0; n < c[r].length; n += 1)
                        a = c[r][n],
                        s = c[r][n - 1],
                        u = c[r][n + 1],
                        o(a) ? (i = f(a, s, u),
                        h[r] += -1 !== i ? String.fromCharCode(e[a.charCodeAt(0)][i]) : a) : h[r] += a;
                    h[r] = l(h[r])
                }
                return h.join(" ")
            }
              , p = t.__arabicParser__.processArabic = t.processArabic = function() {
                var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, r = [];
                if (Array.isArray(e)) {
                    var n = 0;
                    for (r = [],
                    n = 0; n < e.length; n += 1)
                        Array.isArray(e[n]) ? r.push([d(e[n][0]), e[n][1], e[n][2]]) : r.push([d(e[n])]);
                    t = r
                } else
                    t = d(e);
                return "string" == typeof arguments[0] ? t : (arguments[0].text = t,
                arguments[0])
            }
            ;
            t.events.push(["preProcessText", p])
        }(Ft.API),
        Ft.API.autoPrint = function(t) {
            var e;
            if ("javascript" === ((t = t || {}).variant = t.variant || "non-conform",
            t.variant))
                this.addJS("print({});");
            else
                this.internal.events.subscribe("postPutResources", (function() {
                    e = this.internal.newObject(),
                    this.internal.out("<<"),
                    this.internal.out("/S /Named"),
                    this.internal.out("/Type /Action"),
                    this.internal.out("/N /Print"),
                    this.internal.out(">>"),
                    this.internal.out("endobj")
                }
                )),
                this.internal.events.subscribe("putCatalog", (function() {
                    this.internal.out("/OpenAction " + e + " 0 R")
                }
                ));
            return this
        }
        ,
        function(t) {
            var e = function() {
                var t = void 0;
                Object.defineProperty(this, "pdf", {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = e
                    }
                });
                var e = 150;
                Object.defineProperty(this, "width", {
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t,
                        this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1)
                    }
                });
                var r = 300;
                Object.defineProperty(this, "height", {
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t,
                        this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1)
                    }
                });
                var n = [];
                Object.defineProperty(this, "childNodes", {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = t
                    }
                });
                var i = {};
                Object.defineProperty(this, "style", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t
                    }
                }),
                Object.defineProperty(this, "parentNode", {})
            };
            e.prototype.getContext = function(t, e) {
                var r;
                if ("2d" !== (t = t || "2d"))
                    return null;
                for (r in e)
                    this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]);
                return this.pdf.context2d._canvas = this,
                this.pdf.context2d
            }
            ,
            e.prototype.toDataURL = function() {
                throw new Error("toDataURL is not implemented.")
            }
            ,
            t.events.push(["initialized", function() {
                this.canvas = new e,
                this.canvas.pdf = this
            }
            ])
        }(Ft.API),
        function(t) {
            var e = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }
              , r = !1
              , i = function() {
                void 0 === this.internal.__cell__ && (this.internal.__cell__ = {},
                this.internal.__cell__.padding = 3,
                this.internal.__cell__.headerFunction = void 0,
                this.internal.__cell__.margins = Object.assign({}, e),
                this.internal.__cell__.margins.width = this.getPageWidth(),
                a.call(this))
            }
              , a = function() {
                this.internal.__cell__.lastCell = new o,
                this.internal.__cell__.pages = 1
            }
              , o = function() {
                var t = arguments[0];
                Object.defineProperty(this, "x", {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = e
                    }
                });
                var e = arguments[1];
                Object.defineProperty(this, "y", {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = t
                    }
                });
                var r = arguments[2];
                Object.defineProperty(this, "width", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = t
                    }
                });
                var n = arguments[3];
                Object.defineProperty(this, "height", {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = t
                    }
                });
                var i = arguments[4];
                Object.defineProperty(this, "text", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t
                    }
                });
                var a = arguments[5];
                Object.defineProperty(this, "lineNumber", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        a = t
                    }
                });
                var o = arguments[6];
                return Object.defineProperty(this, "align", {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        o = t
                    }
                }),
                this
            };
            o.prototype.clone = function() {
                return new o(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)
            }
            ,
            o.prototype.toArray = function() {
                return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
            }
            ,
            t.setHeaderFunction = function(t) {
                return i.call(this),
                this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0,
                this
            }
            ,
            t.getTextDimensions = function(t, e) {
                i.call(this);
                var r = (e = e || {}).fontSize || this.getFontSize()
                  , n = e.font || this.getFont()
                  , a = e.scaleFactor || this.internal.scaleFactor
                  , o = 0
                  , s = 0
                  , u = 0
                  , c = this;
                if (!Array.isArray(t) && "string" != typeof t) {
                    if ("number" != typeof t)
                        throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                    t = String(t)
                }
                var h = e.maxWidth;
                h > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, h) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
                    return t.concat(c.splitTextToSize(e, h))
                }
                ), [])) : t = Array.isArray(t) ? t : [t];
                for (var l = 0; l < t.length; l++)
                    o < (u = this.getStringUnitWidth(t[l], {
                        font: n
                    }) * r) && (o = u);
                return 0 !== o && (s = t.length),
                {
                    w: o /= a,
                    h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / a, 0)
                }
            }
            ,
            t.cellAddPage = function() {
                i.call(this),
                this.addPage();
                var t = this.internal.__cell__.margins || e;
                return this.internal.__cell__.lastCell = new o(t.left,t.top,void 0,void 0),
                this.internal.__cell__.pages += 1,
                this
            }
            ;
            var s = t.cell = function() {
                var t;
                t = arguments[0]instanceof o ? arguments[0] : new o(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),
                i.call(this);
                var n = this.internal.__cell__.lastCell
                  , a = this.internal.__cell__.padding
                  , s = this.internal.__cell__.margins || e
                  , u = this.internal.__cell__.tableHeaderRow
                  , c = this.internal.__cell__.printHeaders;
                return void 0 !== n.lineNumber && (n.lineNumber === t.lineNumber ? (t.x = (n.x || 0) + (n.width || 0),
                t.y = n.y || 0) : n.y + n.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(),
                t.y = s.top,
                c && u && (this.printHeaderRow(t.lineNumber, !0),
                t.y += u[0].height)) : t.y = n.y + n.height || t.y),
                void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0),
                "right" === t.align ? this.text(t.text, t.x + t.width - a, t.y + a, {
                    align: "right",
                    baseline: "top"
                }) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + a, {
                    align: "center",
                    baseline: "top",
                    maxWidth: t.width - a - a
                }) : this.text(t.text, t.x + a, t.y + a, {
                    align: "left",
                    baseline: "top",
                    maxWidth: t.width - a - a
                })),
                this.internal.__cell__.lastCell = t,
                this
            }
            ;
            t.table = function(t, r, c, h, l) {
                if (i.call(this),
                !c)
                    throw new Error("No data for PDF table.");
                var f, d, p, g, m = [], v = [], b = [], y = {}, w = {}, N = [], L = [], A = (l = l || {}).autoSize || !1, x = !1 !== l.printHeaders, S = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12, _ = l.margins || Object.assign({
                    width: this.getPageWidth()
                }, e), P = "number" == typeof l.padding ? l.padding : 3, k = l.headerBackgroundColor || "#c8c8c8", I = l.headerTextColor || "#000";
                if (a.call(this),
                this.internal.__cell__.printHeaders = x,
                this.internal.__cell__.margins = _,
                this.internal.__cell__.table_font_size = S,
                this.internal.__cell__.padding = P,
                this.internal.__cell__.headerBackgroundColor = k,
                this.internal.__cell__.headerTextColor = I,
                this.setFontSize(S),
                null == h)
                    v = m = Object.keys(c[0]),
                    b = m.map((function() {
                        return "left"
                    }
                    ));
                else if (Array.isArray(h) && "object" === (0,
                n.Z)(h[0]))
                    for (m = h.map((function(t) {
                        return t.name
                    }
                    )),
                    v = h.map((function(t) {
                        return t.prompt || t.name || ""
                    }
                    )),
                    b = h.map((function(t) {
                        return t.align || "left"
                    }
                    )),
                    f = 0; f < h.length; f += 1)
                        w[h[f].name] = h[f].width * (19.049976 / 25.4);
                else
                    Array.isArray(h) && "string" == typeof h[0] && (v = m = h,
                    b = m.map((function() {
                        return "left"
                    }
                    )));
                if (A || Array.isArray(h) && "string" == typeof h[0])
                    for (f = 0; f < m.length; f += 1) {
                        for (y[g = m[f]] = c.map((function(t) {
                            return t[g]
                        }
                        )),
                        this.setFont(void 0, "bold"),
                        N.push(this.getTextDimensions(v[f], {
                            fontSize: this.internal.__cell__.table_font_size,
                            scaleFactor: this.internal.scaleFactor
                        }).w),
                        d = y[g],
                        this.setFont(void 0, "normal"),
                        p = 0; p < d.length; p += 1)
                            N.push(this.getTextDimensions(d[p], {
                                fontSize: this.internal.__cell__.table_font_size,
                                scaleFactor: this.internal.scaleFactor
                            }).w);
                        w[g] = Math.max.apply(null, N) + P + P,
                        N = []
                    }
                if (x) {
                    var F = {};
                    for (f = 0; f < m.length; f += 1)
                        F[m[f]] = {},
                        F[m[f]].text = v[f],
                        F[m[f]].align = b[f];
                    var C = u.call(this, F, w);
                    L = m.map((function(e) {
                        return new o(t,r,w[e],C,F[e].text,void 0,F[e].align)
                    }
                    )),
                    this.setTableHeaderRow(L),
                    this.printHeaderRow(1, !1)
                }
                var j = h.reduce((function(t, e) {
                    return t[e.name] = e.align,
                    t
                }
                ), {});
                for (f = 0; f < c.length; f += 1) {
                    "rowStart"in l && l.rowStart instanceof Function && l.rowStart({
                        row: f,
                        data: c[f]
                    }, this);
                    var O = u.call(this, c[f], w);
                    for (p = 0; p < m.length; p += 1) {
                        var B = c[f][m[p]];
                        "cellStart"in l && l.cellStart instanceof Function && l.cellStart({
                            row: f,
                            col: p,
                            data: B
                        }, this),
                        s.call(this, new o(t,r,w[m[p]],O,B,f + 2,j[m[p]]))
                    }
                }
                return this.internal.__cell__.table_x = t,
                this.internal.__cell__.table_y = r,
                this
            }
            ;
            var u = function(t, e) {
                var r = this.internal.__cell__.padding
                  , n = this.internal.__cell__.table_font_size
                  , i = this.internal.scaleFactor;
                return Object.keys(t).map((function(n) {
                    var i = t[n];
                    return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e[n] - r - r)
                }
                ), this).map((function(t) {
                    return this.getLineHeightFactor() * t.length * n / i + r + r
                }
                ), this).reduce((function(t, e) {
                    return Math.max(t, e)
                }
                ), 0)
            };
            t.setTableHeaderRow = function(t) {
                i.call(this),
                this.internal.__cell__.tableHeaderRow = t
            }
            ,
            t.printHeaderRow = function(t, e) {
                if (i.call(this),
                !this.internal.__cell__.tableHeaderRow)
                    throw new Error("Property tableHeaderRow does not exist.");
                var n;
                if (r = !0,
                "function" == typeof this.internal.__cell__.headerFunction) {
                    var a = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                    this.internal.__cell__.lastCell = new o(a[0],a[1],a[2],a[3],void 0,-1)
                }
                this.setFont(void 0, "bold");
                for (var u = [], c = 0; c < this.internal.__cell__.tableHeaderRow.length; c += 1) {
                    n = this.internal.__cell__.tableHeaderRow[c].clone(),
                    e && (n.y = this.internal.__cell__.margins.top || 0,
                    u.push(n)),
                    n.lineNumber = t;
                    var h = this.getTextColor();
                    this.setTextColor(this.internal.__cell__.headerTextColor),
                    this.setFillColor(this.internal.__cell__.headerBackgroundColor),
                    s.call(this, n),
                    this.setTextColor(h)
                }
                u.length > 0 && this.setTableHeaderRow(u),
                this.setFont(void 0, "normal"),
                r = !1
            }
        }(Ft.API);
        var Ne = {
            italic: ["italic", "oblique", "normal"],
            oblique: ["oblique", "italic", "normal"],
            normal: ["normal", "oblique", "italic"]
        }
          , Le = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"]
          , Ae = we(Le)
          , xe = [100, 200, 300, 400, 500, 600, 700, 800, 900]
          , Se = we(xe);
        function _e(t) {
            var e = t.family.replace(/"|'/g, "").toLowerCase()
              , r = function(t) {
                return Ne[t = t || "normal"] ? t : "normal"
            }(t.style)
              , n = function(t) {
                return t ? "number" == typeof t ? t >= 100 && t <= 900 && t % 100 == 0 ? t : 400 : /^\d00$/.test(t) ? parseInt(t) : "bold" === t ? 700 : 400 : 400
            }(t.weight)
              , i = function(t) {
                return "number" == typeof Ae[t = t || "normal"] ? t : "normal"
            }(t.stretch);
            return {
                family: e,
                style: r,
                weight: n,
                stretch: i,
                src: t.src || [],
                ref: t.ref || {
                    name: e,
                    style: [i, r, n].join(" ")
                }
            }
        }
        function Pe(t, e, r, n) {
            var i;
            for (i = r; i >= 0 && i < e.length; i += n)
                if (t[e[i]])
                    return t[e[i]];
            for (i = r; i >= 0 && i < e.length; i -= n)
                if (t[e[i]])
                    return t[e[i]]
        }
        var ke = {
            "sans-serif": "helvetica",
            fixed: "courier",
            monospace: "courier",
            terminal: "courier",
            cursive: "times",
            fantasy: "times",
            serif: "times"
        }
          , Ie = {
            caption: "times",
            icon: "times",
            menu: "times",
            "message-box": "times",
            "small-caption": "times",
            "status-bar": "times"
        };
        function Fe(t) {
            return [t.stretch, t.style, t.weight, t.family].join(" ")
        }
        function Ce(t) {
            return t.trimLeft()
        }
        function je(t, e) {
            for (var r = 0; r < t.length; ) {
                if (t.charAt(r) === e)
                    return [t.substring(0, r), t.substring(r + 1)];
                r += 1
            }
            return null
        }
        function Oe(t) {
            var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
            return null === e ? null : [e[0], t.substring(e[0].length)]
        }
        var Be, Me, Ee, qe = ["times"];
        !function(t) {
            var e, r, i, a, o, s, u, c, h, l = function(t) {
                return t = t || {},
                this.isStrokeTransparent = t.isStrokeTransparent || !1,
                this.strokeOpacity = t.strokeOpacity || 1,
                this.strokeStyle = t.strokeStyle || "#000000",
                this.fillStyle = t.fillStyle || "#000000",
                this.isFillTransparent = t.isFillTransparent || !1,
                this.fillOpacity = t.fillOpacity || 1,
                this.font = t.font || "10px sans-serif",
                this.textBaseline = t.textBaseline || "alphabetic",
                this.textAlign = t.textAlign || "left",
                this.lineWidth = t.lineWidth || 1,
                this.lineJoin = t.lineJoin || "miter",
                this.lineCap = t.lineCap || "butt",
                this.path = t.path || [],
                this.transform = void 0 !== t.transform ? t.transform.clone() : new c,
                this.globalCompositeOperation = t.globalCompositeOperation || "normal",
                this.globalAlpha = t.globalAlpha || 1,
                this.clip_path = t.clip_path || [],
                this.currentPoint = t.currentPoint || new s,
                this.miterLimit = t.miterLimit || 10,
                this.lastPoint = t.lastPoint || new s,
                this.lineDashOffset = t.lineDashOffset || 0,
                this.lineDash = t.lineDash || [],
                this.margin = t.margin || [0, 0, 0, 0],
                this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0,
                this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect,
                this
            };
            t.events.push(["initialized", function() {
                this.context2d = new f(this),
                e = this.internal.f2,
                r = this.internal.getCoordinateString,
                i = this.internal.getVerticalCoordinateString,
                a = this.internal.getHorizontalCoordinate,
                o = this.internal.getVerticalCoordinate,
                s = this.internal.Point,
                u = this.internal.Rectangle,
                c = this.internal.Matrix,
                h = new l
            }
            ]);
            var f = function(t) {
                Object.defineProperty(this, "canvas", {
                    get: function() {
                        return {
                            parentNode: !1,
                            style: !1
                        }
                    }
                });
                var e = t;
                Object.defineProperty(this, "pdf", {
                    get: function() {
                        return e
                    }
                });
                var r = !1;
                Object.defineProperty(this, "pageWrapXEnabled", {
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = Boolean(t)
                    }
                });
                var n = !1;
                Object.defineProperty(this, "pageWrapYEnabled", {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = Boolean(t)
                    }
                });
                var i = 0;
                Object.defineProperty(this, "posX", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        isNaN(t) || (i = t)
                    }
                });
                var a = 0;
                Object.defineProperty(this, "posY", {
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        isNaN(t) || (a = t)
                    }
                }),
                Object.defineProperty(this, "margin", {
                    get: function() {
                        return h.margin
                    },
                    set: function(t) {
                        var e;
                        "number" == typeof t ? e = [t, t, t, t] : ((e = new Array(4))[0] = t[0],
                        e[1] = t.length >= 2 ? t[1] : e[0],
                        e[2] = t.length >= 3 ? t[2] : e[0],
                        e[3] = t.length >= 4 ? t[3] : e[1]),
                        h.margin = e
                    }
                });
                var o = !1;
                Object.defineProperty(this, "autoPaging", {
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        o = t
                    }
                });
                var s = 0;
                Object.defineProperty(this, "lastBreak", {
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        s = t
                    }
                });
                var u = [];
                Object.defineProperty(this, "pageBreaks", {
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        u = t
                    }
                }),
                Object.defineProperty(this, "ctx", {
                    get: function() {
                        return h
                    },
                    set: function(t) {
                        t instanceof l && (h = t)
                    }
                }),
                Object.defineProperty(this, "path", {
                    get: function() {
                        return h.path
                    },
                    set: function(t) {
                        h.path = t
                    }
                });
                var c = [];
                Object.defineProperty(this, "ctxStack", {
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        c = t
                    }
                }),
                Object.defineProperty(this, "fillStyle", {
                    get: function() {
                        return this.ctx.fillStyle
                    },
                    set: function(t) {
                        var e;
                        e = d(t),
                        this.ctx.fillStyle = e.style,
                        this.ctx.isFillTransparent = 0 === e.a,
                        this.ctx.fillOpacity = e.a,
                        this.pdf.setFillColor(e.r, e.g, e.b, {
                            a: e.a
                        }),
                        this.pdf.setTextColor(e.r, e.g, e.b, {
                            a: e.a
                        })
                    }
                }),
                Object.defineProperty(this, "strokeStyle", {
                    get: function() {
                        return this.ctx.strokeStyle
                    },
                    set: function(t) {
                        var e = d(t);
                        this.ctx.strokeStyle = e.style,
                        this.ctx.isStrokeTransparent = 0 === e.a,
                        this.ctx.strokeOpacity = e.a,
                        0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a,
                        this.pdf.setDrawColor(e.r, e.g, e.b))
                    }
                }),
                Object.defineProperty(this, "lineCap", {
                    get: function() {
                        return this.ctx.lineCap
                    },
                    set: function(t) {
                        -1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t,
                        this.pdf.setLineCap(t))
                    }
                }),
                Object.defineProperty(this, "lineWidth", {
                    get: function() {
                        return this.ctx.lineWidth
                    },
                    set: function(t) {
                        isNaN(t) || (this.ctx.lineWidth = t,
                        this.pdf.setLineWidth(t))
                    }
                }),
                Object.defineProperty(this, "lineJoin", {
                    get: function() {
                        return this.ctx.lineJoin
                    },
                    set: function(t) {
                        -1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t,
                        this.pdf.setLineJoin(t))
                    }
                }),
                Object.defineProperty(this, "miterLimit", {
                    get: function() {
                        return this.ctx.miterLimit
                    },
                    set: function(t) {
                        isNaN(t) || (this.ctx.miterLimit = t,
                        this.pdf.setMiterLimit(t))
                    }
                }),
                Object.defineProperty(this, "textBaseline", {
                    get: function() {
                        return this.ctx.textBaseline
                    },
                    set: function(t) {
                        this.ctx.textBaseline = t
                    }
                }),
                Object.defineProperty(this, "textAlign", {
                    get: function() {
                        return this.ctx.textAlign
                    },
                    set: function(t) {
                        -1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t)
                    }
                });
                var f = null;
                function p(t, e) {
                    if (null === f) {
                        var r = function(t) {
                            var e = [];
                            return Object.keys(t).forEach((function(r) {
                                t[r].forEach((function(t) {
                                    var n = null;
                                    switch (t) {
                                    case "bold":
                                        n = {
                                            family: r,
                                            weight: "bold"
                                        };
                                        break;
                                    case "italic":
                                        n = {
                                            family: r,
                                            style: "italic"
                                        };
                                        break;
                                    case "bolditalic":
                                        n = {
                                            family: r,
                                            weight: "bold",
                                            style: "italic"
                                        };
                                        break;
                                    case "":
                                    case "normal":
                                        n = {
                                            family: r
                                        }
                                    }
                                    null !== n && (n.ref = {
                                        name: r,
                                        style: t
                                    },
                                    e.push(n))
                                }
                                ))
                            }
                            )),
                            e
                        }(t.getFontList());
                        f = function(t) {
                            for (var e = {}, r = 0; r < t.length; ++r) {
                                var n = _e(t[r])
                                  , i = n.family
                                  , a = n.stretch
                                  , o = n.style
                                  , s = n.weight;
                                e[i] = e[i] || {},
                                e[i][a] = e[i][a] || {},
                                e[i][a][o] = e[i][a][o] || {},
                                e[i][a][o][s] = n
                            }
                            return e
                        }(r.concat(e))
                    }
                    return f
                }
                var g = null;
                Object.defineProperty(this, "fontFaces", {
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        f = null,
                        g = t
                    }
                }),
                Object.defineProperty(this, "font", {
                    get: function() {
                        return this.ctx.font
                    },
                    set: function(t) {
                        var e;
                        if (this.ctx.font = t,
                        null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                            var r = e[1]
                              , n = (e[2],
                            e[3])
                              , i = e[4]
                              , a = (e[5],
                            e[6])
                              , o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
                            i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor),
                            this.pdf.setFontSize(i);
                            var s = function(t) {
                                var e, r, n = [], i = t.trim();
                                if ("" === i)
                                    return qe;
                                if (i in Ie)
                                    return [Ie[i]];
                                for (; "" !== i; ) {
                                    switch (r = null,
                                    e = (i = Ce(i)).charAt(0)) {
                                    case '"':
                                    case "'":
                                        r = je(i.substring(1), e);
                                        break;
                                    default:
                                        r = Oe(i)
                                    }
                                    if (null === r)
                                        return qe;
                                    if (n.push(r[0]),
                                    "" !== (i = Ce(r[1])) && "," !== i.charAt(0))
                                        return qe;
                                    i = i.replace(/^,/, "")
                                }
                                return n
                            }(a);
                            if (this.fontFaces) {
                                var u = function(t, e, r) {
                                    for (var n = (r = r || {}).defaultFontFamily || "times", i = Object.assign({}, ke, r.genericFontFamilies || {}), a = null, o = null, s = 0; s < e.length; ++s)
                                        if (i[(a = _e(e[s])).family] && (a.family = i[a.family]),
                                        t.hasOwnProperty(a.family)) {
                                            o = t[a.family];
                                            break
                                        }
                                    if (!(o = o || t[n]))
                                        throw new Error("Could not find a font-family for the rule '" + Fe(a) + "' and default family '" + n + "'.");
                                    if (o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        var r = Ae[t]
                                          , n = r <= Ae.normal ? -1 : 1
                                          , i = Pe(e, Le, r, n);
                                        if (!i)
                                            throw new Error("Could not find a matching font-stretch value for " + t);
                                        return i
                                    }(a.stretch, o),
                                    o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        for (var r = Ne[t], n = 0; n < r.length; ++n)
                                            if (e[r[n]])
                                                return e[r[n]];
                                        throw new Error("Could not find a matching font-style for " + t)
                                    }(a.style, o),
                                    !(o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        if (400 === t && e[500])
                                            return e[500];
                                        if (500 === t && e[400])
                                            return e[400];
                                        var r = Se[t]
                                          , n = Pe(e, xe, r, t < 400 ? -1 : 1);
                                        if (!n)
                                            throw new Error("Could not find a matching font-weight for value " + t);
                                        return n
                                    }(a.weight, o)))
                                        throw new Error("Failed to resolve a font for the rule '" + Fe(a) + "'.");
                                    return o
                                }(p(this.pdf, this.fontFaces), s.map((function(t) {
                                    return {
                                        family: t,
                                        stretch: "normal",
                                        weight: n,
                                        style: r
                                    }
                                }
                                )));
                                this.pdf.setFont(u.ref.name, u.ref.style)
                            } else {
                                var c = "";
                                ("bold" === n || parseInt(n, 10) >= 700 || "bold" === r) && (c = "bold"),
                                "italic" === r && (c += "italic"),
                                0 === c.length && (c = "normal");
                                for (var h = "", l = {
                                    arial: "Helvetica",
                                    Arial: "Helvetica",
                                    verdana: "Helvetica",
                                    Verdana: "Helvetica",
                                    helvetica: "Helvetica",
                                    Helvetica: "Helvetica",
                                    "sans-serif": "Helvetica",
                                    fixed: "Courier",
                                    monospace: "Courier",
                                    terminal: "Courier",
                                    cursive: "Times",
                                    fantasy: "Times",
                                    serif: "Times"
                                }, f = 0; f < s.length; f++) {
                                    if (void 0 !== this.pdf.internal.getFont(s[f], c, {
                                        noFallback: !0,
                                        disableWarning: !0
                                    })) {
                                        h = s[f];
                                        break
                                    }
                                    if ("bolditalic" === c && void 0 !== this.pdf.internal.getFont(s[f], "bold", {
                                        noFallback: !0,
                                        disableWarning: !0
                                    }))
                                        h = s[f],
                                        c = "bold";
                                    else if (void 0 !== this.pdf.internal.getFont(s[f], "normal", {
                                        noFallback: !0,
                                        disableWarning: !0
                                    })) {
                                        h = s[f],
                                        c = "normal";
                                        break
                                    }
                                }
                                if ("" === h)
                                    for (var d = 0; d < s.length; d++)
                                        if (l[s[d]]) {
                                            h = l[s[d]];
                                            break
                                        }
                                h = "" === h ? "Times" : h,
                                this.pdf.setFont(h, c)
                            }
                        }
                    }
                }),
                Object.defineProperty(this, "globalCompositeOperation", {
                    get: function() {
                        return this.ctx.globalCompositeOperation
                    },
                    set: function(t) {
                        this.ctx.globalCompositeOperation = t
                    }
                }),
                Object.defineProperty(this, "globalAlpha", {
                    get: function() {
                        return this.ctx.globalAlpha
                    },
                    set: function(t) {
                        this.ctx.globalAlpha = t
                    }
                }),
                Object.defineProperty(this, "lineDashOffset", {
                    get: function() {
                        return this.ctx.lineDashOffset
                    },
                    set: function(t) {
                        this.ctx.lineDashOffset = t,
                        D.call(this)
                    }
                }),
                Object.defineProperty(this, "lineDash", {
                    get: function() {
                        return this.ctx.lineDash
                    },
                    set: function(t) {
                        this.ctx.lineDash = t,
                        D.call(this)
                    }
                }),
                Object.defineProperty(this, "ignoreClearRect", {
                    get: function() {
                        return this.ctx.ignoreClearRect
                    },
                    set: function(t) {
                        this.ctx.ignoreClearRect = Boolean(t)
                    }
                })
            };
            f.prototype.setLineDash = function(t) {
                this.lineDash = t
            }
            ,
            f.prototype.getLineDash = function() {
                return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
            }
            ,
            f.prototype.fill = function() {
                N.call(this, "fill", !1)
            }
            ,
            f.prototype.stroke = function() {
                N.call(this, "stroke", !1)
            }
            ,
            f.prototype.beginPath = function() {
                this.path = [{
                    type: "begin"
                }]
            }
            ,
            f.prototype.moveTo = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.moveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
                var r = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "mt",
                    x: r.x,
                    y: r.y
                }),
                this.ctx.lastPoint = new s(t,e)
            }
            ,
            f.prototype.closePath = function() {
                var t = new s(0,0)
                  , e = 0;
                for (e = this.path.length - 1; -1 !== e; e--)
                    if ("begin" === this.path[e].type && "object" === (0,
                    n.Z)(this.path[e + 1]) && "number" == typeof this.path[e + 1].x) {
                        t = new s(this.path[e + 1].x,this.path[e + 1].y);
                        break
                    }
                this.path.push({
                    type: "close"
                }),
                this.ctx.lastPoint = new s(t.x,t.y)
            }
            ,
            f.prototype.lineTo = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.lineTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
                var r = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "lt",
                    x: r.x,
                    y: r.y
                }),
                this.ctx.lastPoint = new s(r.x,r.y)
            }
            ,
            f.prototype.clip = function() {
                this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)),
                N.call(this, null, !0)
            }
            ,
            f.prototype.quadraticCurveTo = function(t, e, r, n) {
                if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
                var i = this.ctx.transform.applyToPoint(new s(r,n))
                  , a = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "qct",
                    x1: a.x,
                    y1: a.y,
                    x: i.x,
                    y: i.y
                }),
                this.ctx.lastPoint = new s(i.x,i.y)
            }
            ,
            f.prototype.bezierCurveTo = function(t, e, r, n, i, a) {
                if (isNaN(i) || isNaN(a) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
                var o = this.ctx.transform.applyToPoint(new s(i,a))
                  , u = this.ctx.transform.applyToPoint(new s(t,e))
                  , c = this.ctx.transform.applyToPoint(new s(r,n));
                this.path.push({
                    type: "bct",
                    x1: u.x,
                    y1: u.y,
                    x2: c.x,
                    y2: c.y,
                    x: o.x,
                    y: o.y
                }),
                this.ctx.lastPoint = new s(o.x,o.y)
            }
            ,
            f.prototype.arc = function(t, e, r, n, i, a) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i))
                    throw Q.error("jsPDF.context2d.arc: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.arc");
                if (a = Boolean(a),
                !this.ctx.transform.isIdentity) {
                    var o = this.ctx.transform.applyToPoint(new s(t,e));
                    t = o.x,
                    e = o.y;
                    var u = this.ctx.transform.applyToPoint(new s(0,r))
                      , c = this.ctx.transform.applyToPoint(new s(0,0));
                    r = Math.sqrt(Math.pow(u.x - c.x, 2) + Math.pow(u.y - c.y, 2))
                }
                Math.abs(i - n) >= 2 * Math.PI && (n = 0,
                i = 2 * Math.PI),
                this.path.push({
                    type: "arc",
                    x: t,
                    y: e,
                    radius: r,
                    startAngle: n,
                    endAngle: i,
                    counterclockwise: a
                })
            }
            ,
            f.prototype.arcTo = function(t, e, r, n, i) {
                throw new Error("arcTo not implemented.")
            }
            ,
            f.prototype.rect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.rect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.rect");
                this.moveTo(t, e),
                this.lineTo(t + r, e),
                this.lineTo(t + r, e + n),
                this.lineTo(t, e + n),
                this.lineTo(t, e),
                this.lineTo(t + r, e),
                this.lineTo(t, e)
            }
            ,
            f.prototype.fillRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.fillRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
                if (!p.call(this)) {
                    var i = {};
                    "butt" !== this.lineCap && (i.lineCap = this.lineCap,
                    this.lineCap = "butt"),
                    "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin,
                    this.lineJoin = "miter"),
                    this.beginPath(),
                    this.rect(t, e, r, n),
                    this.fill(),
                    i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap),
                    i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
                }
            }
            ,
            f.prototype.strokeRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
                g.call(this) || (this.beginPath(),
                this.rect(t, e, r, n),
                this.stroke())
            }
            ,
            f.prototype.clearRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.clearRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
                this.ignoreClearRect || (this.fillStyle = "#ffffff",
                this.fillRect(t, e, r, n))
            }
            ,
            f.prototype.save = function(t) {
                t = "boolean" != typeof t || t;
                for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
                    this.pdf.setPage(r + 1),
                    this.pdf.internal.out("q");
                if (this.pdf.setPage(e),
                t) {
                    this.ctx.fontSize = this.pdf.internal.getFontSize();
                    var n = new l(this.ctx);
                    this.ctxStack.push(this.ctx),
                    this.ctx = n
                }
            }
            ,
            f.prototype.restore = function(t) {
                t = "boolean" != typeof t || t;
                for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
                    this.pdf.setPage(r + 1),
                    this.pdf.internal.out("Q");
                this.pdf.setPage(e),
                t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(),
                this.fillStyle = this.ctx.fillStyle,
                this.strokeStyle = this.ctx.strokeStyle,
                this.font = this.ctx.font,
                this.lineCap = this.ctx.lineCap,
                this.lineWidth = this.ctx.lineWidth,
                this.lineJoin = this.ctx.lineJoin,
                this.lineDash = this.ctx.lineDash,
                this.lineDashOffset = this.ctx.lineDashOffset)
            }
            ,
            f.prototype.toDataURL = function() {
                throw new Error("toDataUrl not implemented.")
            }
            ;
            var d = function(t) {
                var e, r, n, i;
                if (!0 === t.isCanvasGradient && (t = t.getColor()),
                !t)
                    return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        style: t
                    };
                if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))
                    e = 0,
                    r = 0,
                    n = 0,
                    i = 0;
                else {
                    var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                    if (null !== a)
                        e = parseInt(a[1]),
                        r = parseInt(a[2]),
                        n = parseInt(a[3]),
                        i = 1;
                    else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))
                        e = parseInt(a[1]),
                        r = parseInt(a[2]),
                        n = parseInt(a[3]),
                        i = parseFloat(a[4]);
                    else {
                        if (i = 1,
                        "string" == typeof t && "#" !== t.charAt(0)) {
                            var o = new ot(t);
                            t = o.ok ? o.toHex() : "#000000"
                        }
                        4 === t.length ? (e = t.substring(1, 2),
                        e += e,
                        r = t.substring(2, 3),
                        r += r,
                        n = t.substring(3, 4),
                        n += n) : (e = t.substring(1, 3),
                        r = t.substring(3, 5),
                        n = t.substring(5, 7)),
                        e = parseInt(e, 16),
                        r = parseInt(r, 16),
                        n = parseInt(n, 16)
                    }
                }
                return {
                    r: e,
                    g: r,
                    b: n,
                    a: i,
                    style: t
                }
            }
              , p = function() {
                return this.ctx.isFillTransparent || 0 == this.globalAlpha
            }
              , g = function() {
                return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
            };
            f.prototype.fillText = function(t, e, r, n) {
                if (isNaN(e) || isNaN(r) || "string" != typeof t)
                    throw Q.error("jsPDF.context2d.fillText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.fillText");
                if (n = isNaN(n) ? void 0 : n,
                !p.call(this)) {
                    var i = M(this.ctx.transform.rotation)
                      , a = this.ctx.transform.scaleX;
                    I.call(this, {
                        text: t,
                        x: e,
                        y: r,
                        scale: a,
                        angle: i,
                        align: this.textAlign,
                        maxWidth: n
                    })
                }
            }
            ,
            f.prototype.strokeText = function(t, e, r, n) {
                if (isNaN(e) || isNaN(r) || "string" != typeof t)
                    throw Q.error("jsPDF.context2d.strokeText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
                if (!g.call(this)) {
                    n = isNaN(n) ? void 0 : n;
                    var i = M(this.ctx.transform.rotation)
                      , a = this.ctx.transform.scaleX;
                    I.call(this, {
                        text: t,
                        x: e,
                        y: r,
                        scale: a,
                        renderingMode: "stroke",
                        angle: i,
                        align: this.textAlign,
                        maxWidth: n
                    })
                }
            }
            ,
            f.prototype.measureText = function(t) {
                if ("string" != typeof t)
                    throw Q.error("jsPDF.context2d.measureText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.measureText");
                var e = this.pdf
                  , r = this.pdf.internal.scaleFactor
                  , n = e.internal.getFontSize()
                  , i = e.getStringUnitWidth(t) * n / e.internal.scaleFactor;
                return new function(t) {
                    var e = (t = t || {}).width || 0;
                    return Object.defineProperty(this, "width", {
                        get: function() {
                            return e
                        }
                    }),
                    this
                }
                ({
                    width: i *= Math.round(96 * r / 72 * 1e4) / 1e4
                })
            }
            ,
            f.prototype.scale = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.scale: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.scale");
                var r = new c(t,0,0,e,0,0);
                this.ctx.transform = this.ctx.transform.multiply(r)
            }
            ,
            f.prototype.rotate = function(t) {
                if (isNaN(t))
                    throw Q.error("jsPDF.context2d.rotate: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.rotate");
                var e = new c(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);
                this.ctx.transform = this.ctx.transform.multiply(e)
            }
            ,
            f.prototype.translate = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.translate: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.translate");
                var r = new c(1,0,0,1,t,e);
                this.ctx.transform = this.ctx.transform.multiply(r)
            }
            ,
            f.prototype.transform = function(t, e, r, n, i, a) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a))
                    throw Q.error("jsPDF.context2d.transform: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.transform");
                var o = new c(t,e,r,n,i,a);
                this.ctx.transform = this.ctx.transform.multiply(o)
            }
            ,
            f.prototype.setTransform = function(t, e, r, n, i, a) {
                t = isNaN(t) ? 1 : t,
                e = isNaN(e) ? 0 : e,
                r = isNaN(r) ? 0 : r,
                n = isNaN(n) ? 1 : n,
                i = isNaN(i) ? 0 : i,
                a = isNaN(a) ? 0 : a,
                this.ctx.transform = new c(t,e,r,n,i,a)
            }
            ;
            var m = function() {
                return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
            };
            f.prototype.drawImage = function(t, e, r, n, i, a, o, s, h) {
                var l = this.pdf.getImageProperties(t)
                  , f = 1
                  , d = 1
                  , p = 1
                  , g = 1;
                void 0 !== n && void 0 !== s && (p = s / n,
                g = h / i,
                f = l.width / n * s / n,
                d = l.height / i * h / i),
                void 0 === a && (a = e,
                o = r,
                e = 0,
                r = 0),
                void 0 !== n && void 0 === s && (s = n,
                h = i),
                void 0 === n && void 0 === s && (s = l.width,
                h = l.height);
                for (var b, N = this.ctx.transform.decompose(), A = M(N.rotate.shx), x = new c, S = (x = (x = (x = x.multiply(N.translate)).multiply(N.skew)).multiply(N.scale)).applyToRectangle(new u(a - e * p,o - r * g,n * f,i * d)), _ = v.call(this, S), P = [], k = 0; k < _.length; k += 1)
                    -1 === P.indexOf(_[k]) && P.push(_[k]);
                if (w(P),
                this.autoPaging)
                    for (var I = P[0], F = P[P.length - 1], C = I; C < F + 1; C++) {
                        this.pdf.setPage(C);
                        var j = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1]
                          , O = 1 === C ? this.posY + this.margin[0] : this.margin[0]
                          , B = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , E = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]
                          , q = 1 === C ? 0 : B + (C - 2) * E;
                        if (0 !== this.ctx.clip_path.length) {
                            var D = this.path;
                            b = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(b, this.posX + this.margin[3], -q + O + this.ctx.prevPageLastElemOffset),
                            L.call(this, "fill", !0),
                            this.path = D
                        }
                        var R = JSON.parse(JSON.stringify(S));
                        R = y([R], this.posX + this.margin[3], -q + O + this.ctx.prevPageLastElemOffset)[0];
                        var T = (C > I || C < F) && m.call(this);
                        T && (this.pdf.saveGraphicsState(),
                        this.pdf.rect(this.margin[3], this.margin[0], j, E, null).clip().discardPath()),
                        this.pdf.addImage(t, "JPEG", R.x, R.y, R.w, R.h, null, null, A),
                        T && this.pdf.restoreGraphicsState()
                    }
                else
                    this.pdf.addImage(t, "JPEG", S.x, S.y, S.w, S.h, null, null, A)
            }
            ;
            var v = function(t, e, r) {
                var n = [];
                e = e || this.pdf.internal.pageSize.width,
                r = r || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
                var i = this.posY + this.ctx.prevPageLastElemOffset;
                switch (t.type) {
                default:
                case "mt":
                case "lt":
                    n.push(Math.floor((t.y + i) / r) + 1);
                    break;
                case "arc":
                    n.push(Math.floor((t.y + i - t.radius) / r) + 1),
                    n.push(Math.floor((t.y + i + t.radius) / r) + 1);
                    break;
                case "qct":
                    var a = E(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                    n.push(Math.floor((a.y + i) / r) + 1),
                    n.push(Math.floor((a.y + a.h + i) / r) + 1);
                    break;
                case "bct":
                    var o = q(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                    n.push(Math.floor((o.y + i) / r) + 1),
                    n.push(Math.floor((o.y + o.h + i) / r) + 1);
                    break;
                case "rect":
                    n.push(Math.floor((t.y + i) / r) + 1),
                    n.push(Math.floor((t.y + t.h + i) / r) + 1)
                }
                for (var s = 0; s < n.length; s += 1)
                    for (; this.pdf.internal.getNumberOfPages() < n[s]; )
                        b.call(this);
                return n
            }
              , b = function() {
                var t = this.fillStyle
                  , e = this.strokeStyle
                  , r = this.font
                  , n = this.lineCap
                  , i = this.lineWidth
                  , a = this.lineJoin;
                this.pdf.addPage(),
                this.fillStyle = t,
                this.strokeStyle = e,
                this.font = r,
                this.lineCap = n,
                this.lineWidth = i,
                this.lineJoin = a
            }
              , y = function(t, e, r) {
                for (var n = 0; n < t.length; n++)
                    switch (t[n].type) {
                    case "bct":
                        t[n].x2 += e,
                        t[n].y2 += r;
                    case "qct":
                        t[n].x1 += e,
                        t[n].y1 += r;
                    default:
                        t[n].x += e,
                        t[n].y += r
                    }
                return t
            }
              , w = function(t) {
                return t.sort((function(t, e) {
                    return t - e
                }
                ))
            }
              , N = function(t, e) {
                for (var r, n, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, u = Math.abs(s * this.ctx.transform.scaleX), c = this.lineJoin, h = JSON.parse(JSON.stringify(this.path)), l = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < l.length; d++)
                    if (void 0 !== l[d].x)
                        for (var p = v.call(this, l[d]), g = 0; g < p.length; g += 1)
                            -1 === f.indexOf(p[g]) && f.push(p[g]);
                for (var N = 0; N < f.length; N++)
                    for (; this.pdf.internal.getNumberOfPages() < f[N]; )
                        b.call(this);
                if (w(f),
                this.autoPaging)
                    for (var A = f[0], x = f[f.length - 1], S = A; S < x + 1; S++) {
                        this.pdf.setPage(S),
                        this.fillStyle = i,
                        this.strokeStyle = a,
                        this.lineCap = o,
                        this.lineWidth = u,
                        this.lineJoin = c;
                        var _ = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1]
                          , P = 1 === S ? this.posY + this.margin[0] : this.margin[0]
                          , k = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , I = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]
                          , F = 1 === S ? 0 : k + (S - 2) * I;
                        if (0 !== this.ctx.clip_path.length) {
                            var C = this.path;
                            r = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(r, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset),
                            L.call(this, t, !0),
                            this.path = C
                        }
                        if (n = JSON.parse(JSON.stringify(h)),
                        this.path = y(n, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset),
                        !1 === e || 0 === S) {
                            var j = (S > A || S < x) && m.call(this);
                            j && (this.pdf.saveGraphicsState(),
                            this.pdf.rect(this.margin[3], this.margin[0], _, I, null).clip().discardPath()),
                            L.call(this, t, e),
                            j && this.pdf.restoreGraphicsState()
                        }
                        this.lineWidth = s
                    }
                else
                    this.lineWidth = u,
                    L.call(this, t, e),
                    this.lineWidth = s;
                this.path = h
            }
              , L = function(t, e) {
                if (("stroke" !== t || e || !g.call(this)) && ("stroke" === t || e || !p.call(this))) {
                    for (var r, n, i = [], a = this.path, o = 0; o < a.length; o++) {
                        var s = a[o];
                        switch (s.type) {
                        case "begin":
                            i.push({
                                begin: !0
                            });
                            break;
                        case "close":
                            i.push({
                                close: !0
                            });
                            break;
                        case "mt":
                            i.push({
                                start: s,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var u = i.length;
                            if (a[o - 1] && !isNaN(a[o - 1].x) && (r = [s.x - a[o - 1].x, s.y - a[o - 1].y],
                            u > 0))
                                for (; u >= 0; u--)
                                    if (!0 !== i[u - 1].close && !0 !== i[u - 1].begin) {
                                        i[u - 1].deltas.push(r),
                                        i[u - 1].abs.push(s);
                                        break
                                    }
                            break;
                        case "bct":
                            r = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y],
                            i[i.length - 1].deltas.push(r);
                            break;
                        case "qct":
                            var c = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x)
                              , h = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y)
                              , l = s.x + 2 / 3 * (s.x1 - s.x)
                              , f = s.y + 2 / 3 * (s.y1 - s.y)
                              , d = s.x
                              , m = s.y;
                            r = [c - a[o - 1].x, h - a[o - 1].y, l - a[o - 1].x, f - a[o - 1].y, d - a[o - 1].x, m - a[o - 1].y],
                            i[i.length - 1].deltas.push(r);
                            break;
                        case "arc":
                            i.push({
                                deltas: [],
                                abs: [],
                                arc: !0
                            }),
                            Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
                        }
                    }
                    n = e ? null : "stroke" === t ? "stroke" : "fill";
                    for (var v = !1, b = 0; b < i.length; b++)
                        if (i[b].arc)
                            for (var y = i[b].abs, w = 0; w < y.length; w++) {
                                var N = y[w];
                                "arc" === N.type ? S.call(this, N.x, N.y, N.radius, N.startAngle, N.endAngle, N.counterclockwise, void 0, e, !v) : F.call(this, N.x, N.y),
                                v = !0
                            }
                        else if (!0 === i[b].close)
                            this.pdf.internal.out("h"),
                            v = !1;
                        else if (!0 !== i[b].begin) {
                            var L = i[b].start.x
                              , A = i[b].start.y;
                            C.call(this, i[b].deltas, L, A),
                            v = !0
                        }
                    n && _.call(this, n),
                    e && P.call(this)
                }
            }
              , A = function(t) {
                var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor
                  , r = e * (this.pdf.internal.getLineHeightFactor() - 1);
                switch (this.ctx.textBaseline) {
                case "bottom":
                    return t - r;
                case "top":
                    return t + e - r;
                case "hanging":
                    return t + e - 2 * r;
                case "middle":
                    return t + e / 2 - r;
                default:
                    return t
                }
            }
              , x = function(t) {
                return t + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1)
            };
            f.prototype.createLinearGradient = function() {
                var t = function() {};
                return t.colorStops = [],
                t.addColorStop = function(t, e) {
                    this.colorStops.push([t, e])
                }
                ,
                t.getColor = function() {
                    return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
                }
                ,
                t.isCanvasGradient = !0,
                t
            }
            ,
            f.prototype.createPattern = function() {
                return this.createLinearGradient()
            }
            ,
            f.prototype.createRadialGradient = function() {
                return this.createLinearGradient()
            }
            ;
            var S = function(t, e, r, n, i, a, o, s, u) {
                for (var c = O.call(this, r, n, i, a), h = 0; h < c.length; h++) {
                    var l = c[h];
                    0 === h && (u ? k.call(this, l.x1 + t, l.y1 + e) : F.call(this, l.x1 + t, l.y1 + e)),
                    j.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4)
                }
                s ? P.call(this) : _.call(this, o)
            }
              , _ = function(t) {
                switch (t) {
                case "stroke":
                    this.pdf.internal.out("S");
                    break;
                case "fill":
                    this.pdf.internal.out("f")
                }
            }
              , P = function() {
                this.pdf.clip(),
                this.pdf.discardPath()
            }
              , k = function(t, e) {
                this.pdf.internal.out(r(t) + " " + i(e) + " m")
            }
              , I = function(t) {
                var e;
                switch (t.align) {
                case "right":
                case "end":
                    e = "right";
                    break;
                case "center":
                    e = "center";
                    break;
                default:
                    e = "left"
                }
                var r = this.pdf.getTextDimensions(t.text)
                  , n = A.call(this, t.y)
                  , i = x.call(this, n) - r.h
                  , a = this.ctx.transform.applyToPoint(new s(t.x,n))
                  , o = this.ctx.transform.decompose()
                  , h = new c;
                h = (h = (h = h.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);
                for (var l, f, d, p = this.ctx.transform.applyToRectangle(new u(t.x,n,r.w,r.h)), g = h.applyToRectangle(new u(t.x,i,r.w,r.h)), b = v.call(this, g), N = [], S = 0; S < b.length; S += 1)
                    -1 === N.indexOf(b[S]) && N.push(b[S]);
                if (w(N),
                this.autoPaging)
                    for (var _ = N[0], P = N[N.length - 1], k = _; k < P + 1; k++) {
                        this.pdf.setPage(k);
                        var I = 1 === k ? this.posY + this.margin[0] : this.margin[0]
                          , F = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , C = this.pdf.internal.pageSize.height - this.margin[2]
                          , j = C - this.margin[0]
                          , O = this.pdf.internal.pageSize.width - this.margin[1]
                          , B = O - this.margin[3]
                          , M = 1 === k ? 0 : F + (k - 2) * j;
                        if (0 !== this.ctx.clip_path.length) {
                            var E = this.path;
                            l = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(l, this.posX + this.margin[3], -1 * M + I),
                            L.call(this, "fill", !0),
                            this.path = E
                        }
                        var q = y([JSON.parse(JSON.stringify(g))], this.posX + this.margin[3], -M + I + this.ctx.prevPageLastElemOffset)[0];
                        t.scale >= .01 && (f = this.pdf.internal.getFontSize(),
                        this.pdf.setFontSize(f * t.scale),
                        d = this.lineWidth,
                        this.lineWidth = d * t.scale);
                        var D = "text" !== this.autoPaging;
                        if (D || q.y + q.h <= C) {
                            if (D || q.y >= I && q.x <= O) {
                                var R = D ? t.text : this.pdf.splitTextToSize(t.text, t.maxWidth || O - q.x)[0]
                                  , T = y([JSON.parse(JSON.stringify(p))], this.posX + this.margin[3], -M + I + this.ctx.prevPageLastElemOffset)[0]
                                  , U = D && (k > _ || k < P) && m.call(this);
                                U && (this.pdf.saveGraphicsState(),
                                this.pdf.rect(this.margin[3], this.margin[0], B, j, null).clip().discardPath()),
                                this.pdf.text(R, T.x, T.y, {
                                    angle: t.angle,
                                    align: e,
                                    renderingMode: t.renderingMode
                                }),
                                U && this.pdf.restoreGraphicsState()
                            }
                        } else
                            q.y < C && (this.ctx.prevPageLastElemOffset += C - q.y);
                        t.scale >= .01 && (this.pdf.setFontSize(f),
                        this.lineWidth = d)
                    }
                else
                    t.scale >= .01 && (f = this.pdf.internal.getFontSize(),
                    this.pdf.setFontSize(f * t.scale),
                    d = this.lineWidth,
                    this.lineWidth = d * t.scale),
                    this.pdf.text(t.text, a.x + this.posX, a.y + this.posY, {
                        angle: t.angle,
                        align: e,
                        renderingMode: t.renderingMode,
                        maxWidth: t.maxWidth
                    }),
                    t.scale >= .01 && (this.pdf.setFontSize(f),
                    this.lineWidth = d)
            }
              , F = function(t, e, n, a) {
                n = n || 0,
                a = a || 0,
                this.pdf.internal.out(r(t + n) + " " + i(e + a) + " l")
            }
              , C = function(t, e, r) {
                return this.pdf.lines(t, e, r, null, null)
            }
              , j = function(t, r, n, i, s, u, c, h) {
                this.pdf.internal.out([e(a(n + t)), e(o(i + r)), e(a(s + t)), e(o(u + r)), e(a(c + t)), e(o(h + r)), "c"].join(" "))
            }
              , O = function(t, e, r, n) {
                for (var i = 2 * Math.PI, a = Math.PI / 2; e > r; )
                    e -= i;
                var o = Math.abs(r - e);
                o < i && n && (o = i - o);
                for (var s = [], u = n ? -1 : 1, c = e; o > 1e-5; ) {
                    var h = c + u * Math.min(o, a);
                    s.push(B.call(this, t, c, h)),
                    o -= Math.abs(h - c),
                    c = h
                }
                return s
            }
              , B = function(t, e, r) {
                var n = (r - e) / 2
                  , i = t * Math.cos(n)
                  , a = t * Math.sin(n)
                  , o = i
                  , s = -a
                  , u = o * o + s * s
                  , c = u + o * i + s * a
                  , h = 4 / 3 * (Math.sqrt(2 * u * c) - c) / (o * a - s * i)
                  , l = o - h * s
                  , f = s + h * o
                  , d = l
                  , p = -f
                  , g = n + e
                  , m = Math.cos(g)
                  , v = Math.sin(g);
                return {
                    x1: t * Math.cos(e),
                    y1: t * Math.sin(e),
                    x2: l * m - f * v,
                    y2: l * v + f * m,
                    x3: d * m - p * v,
                    y3: d * v + p * m,
                    x4: t * Math.cos(r),
                    y4: t * Math.sin(r)
                }
            }
              , M = function(t) {
                return 180 * t / Math.PI
            }
              , E = function(t, e, r, n, i, a) {
                var o = t + .5 * (r - t)
                  , s = e + .5 * (n - e)
                  , c = i + .5 * (r - i)
                  , h = a + .5 * (n - a)
                  , l = Math.min(t, i, o, c)
                  , f = Math.max(t, i, o, c)
                  , d = Math.min(e, a, s, h)
                  , p = Math.max(e, a, s, h);
                return new u(l,d,f - l,p - d)
            }
              , q = function(t, e, r, n, i, a, o, s) {
                var c, h, l, f, d, p, g, m, v, b, y, w, N, L, A = r - t, x = n - e, S = i - r, _ = a - n, P = o - i, k = s - a;
                for (h = 0; h < 41; h++)
                    v = (g = (l = t + (c = h / 40) * A) + c * ((d = r + c * S) - l)) + c * (d + c * (i + c * P - d) - g),
                    b = (m = (f = e + c * x) + c * ((p = n + c * _) - f)) + c * (p + c * (a + c * k - p) - m),
                    0 == h ? (y = v,
                    w = b,
                    N = v,
                    L = b) : (y = Math.min(y, v),
                    w = Math.min(w, b),
                    N = Math.max(N, v),
                    L = Math.max(L, b));
                return new u(Math.round(y),Math.round(w),Math.round(N - y),Math.round(L - w))
            }
              , D = function() {
                if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
                    var t, e, r = (t = this.ctx.lineDash,
                    e = this.ctx.lineDashOffset,
                    JSON.stringify({
                        lineDash: t,
                        lineDashOffset: e
                    }));
                    this.prevLineDash !== r && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
                    this.prevLineDash = r)
                }
            }
        }(Ft.API),
        function(t) {
            var e = function(t) {
                var e, r, n, i, a, o, s, u, c, h;
                for (/[^\x00-\xFF]/.test(t),
                r = [],
                n = 0,
                i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > n; n += 4)
                    0 !== (a = (t.charCodeAt(n) << 24) + (t.charCodeAt(n + 1) << 16) + (t.charCodeAt(n + 2) << 8) + t.charCodeAt(n + 3)) ? (o = (a = ((a = ((a = ((a = (a - (h = a % 85)) / 85) - (c = a % 85)) / 85) - (u = a % 85)) / 85) - (s = a % 85)) / 85) % 85,
                    r.push(o + 33, s + 33, u + 33, c + 33, h + 33)) : r.push(122);
                return function(t, e) {
                    for (var r = e; r > 0; r--)
                        t.pop()
                }(r, e.length),
                String.fromCharCode.apply(String, r) + "~>"
            }
              , r = function(t) {
                var e, r, n, i, a, o = String, s = "length", u = 255, c = "charCodeAt", h = "slice", l = "replace";
                for (t[h](-2),
                t = t[h](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"),
                n = [],
                i = 0,
                a = (t += e = "uuuuu"[h](t[s] % 5 || 5))[s]; a > i; i += 5)
                    r = 52200625 * (t[c](i) - 33) + 614125 * (t[c](i + 1) - 33) + 7225 * (t[c](i + 2) - 33) + 85 * (t[c](i + 3) - 33) + (t[c](i + 4) - 33),
                    n.push(u & r >> 24, u & r >> 16, u & r >> 8, u & r);
                return function(t, e) {
                    for (var r = e; r > 0; r--)
                        t.pop()
                }(n, e[s]),
                o.fromCharCode.apply(o, n)
            }
              , n = function(t) {
                var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
                if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))),
                t.length % 2 && (t += "0"),
                !1 === e.test(t))
                    return "";
                for (var r = "", n = 0; n < t.length; n += 2)
                    r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
                return r
            }
              , i = function(t) {
                for (var e = new Uint8Array(t.length), r = t.length; r--; )
                    e[r] = t.charCodeAt(r);
                return (e = X(e)).reduce((function(t, e) {
                    return t + String.fromCharCode(e)
                }
                ), "")
            };
            t.processDataByFilters = function(t, a) {
                var o = 0
                  , s = t || ""
                  , u = [];
                for ("string" == typeof (a = a || []) && (a = [a]),
                o = 0; o < a.length; o += 1)
                    switch (a[o]) {
                    case "ASCII85Decode":
                    case "/ASCII85Decode":
                        s = r(s),
                        u.push("/ASCII85Encode");
                        break;
                    case "ASCII85Encode":
                    case "/ASCII85Encode":
                        s = e(s),
                        u.push("/ASCII85Decode");
                        break;
                    case "ASCIIHexDecode":
                    case "/ASCIIHexDecode":
                        s = n(s),
                        u.push("/ASCIIHexEncode");
                        break;
                    case "ASCIIHexEncode":
                    case "/ASCIIHexEncode":
                        s = s.split("").map((function(t) {
                            return ("0" + t.charCodeAt().toString(16)).slice(-2)
                        }
                        )).join("") + ">",
                        u.push("/ASCIIHexDecode");
                        break;
                    case "FlateEncode":
                    case "/FlateEncode":
                        s = i(s),
                        u.push("/FlateDecode");
                        break;
                    default:
                        throw new Error('The filter: "' + a[o] + '" is not implemented')
                    }
                return {
                    data: s,
                    reverseChain: u.reverse().join(" ")
                }
            }
        }(Ft.API),
        function(t) {
            t.loadFile = function(t, e, r) {
                return function(t, e, r) {
                    e = !1 !== e,
                    r = "function" == typeof r ? r : function() {}
                    ;
                    var n = void 0;
                    try {
                        n = function(t, e, r) {
                            var n = new XMLHttpRequest
                              , i = 0
                              , a = function(t) {
                                var e = t.length
                                  , r = []
                                  , n = String.fromCharCode;
                                for (i = 0; i < e; i += 1)
                                    r.push(n(255 & t.charCodeAt(i)));
                                return r.join("")
                            };
                            if (n.open("GET", t, !e),
                            n.overrideMimeType("text/plain; charset=x-user-defined"),
                            !1 === e && (n.onload = function() {
                                200 === n.status ? r(a(this.responseText)) : r(void 0)
                            }
                            ),
                            n.send(null),
                            e && 200 === n.status)
                                return a(n.responseText)
                        }(t, e, r)
                    } catch (t) {}
                    return n
                }(t, e, r)
            }
            ,
            t.loadImageFile = t.loadFile
        }(Ft.API),
        function(t) {
            function e() {
                return (Z.html2canvas ? Promise.resolve(Z.html2canvas) : r.e(900).then(r.t.bind(r, 95243, 23))).catch((function(t) {
                    return Promise.reject(new Error("Could not load html2canvas: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            function i() {
                return (Z.DOMPurify ? Promise.resolve(Z.DOMPurify) : r.e(245).then(r.t.bind(r, 83245, 23))).catch((function(t) {
                    return Promise.reject(new Error("Could not load dompurify: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            var a = function(t) {
                var e = (0,
                n.Z)(t);
                return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown"
            }
              , o = function(t, e) {
                var r = document.createElement(t);
                for (var n in e.className && (r.className = e.className),
                e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)),
                e.style)
                    r.style[n] = e.style[n];
                return r
            }
              , s = function t(e) {
                var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template)))
                  , n = t.convert(Promise.resolve(), r);
                return (n = n.setProgress(1, t, 1, [t])).set(e)
            };
            (s.prototype = Object.create(Promise.prototype)).constructor = s,
            s.convert = function(t, e) {
                return t.__proto__ = e || s.prototype,
                t
            }
            ,
            s.template = {
                prop: {
                    src: null,
                    container: null,
                    overlay: null,
                    canvas: null,
                    img: null,
                    pdf: null,
                    pageSize: null,
                    callback: function() {}
                },
                progress: {
                    val: 0,
                    state: null,
                    n: 0,
                    stack: []
                },
                opt: {
                    filename: "file.pdf",
                    margin: [0, 0, 0, 0],
                    enableLinks: !0,
                    x: 0,
                    y: 0,
                    html2canvas: {},
                    jsPDF: {},
                    backgroundColor: "transparent"
                }
            },
            s.prototype.from = function(t, e) {
                return this.then((function() {
                    switch (e = e || function(t) {
                        switch (a(t)) {
                        case "string":
                            return "string";
                        case "element":
                            return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
                        default:
                            return "unknown"
                        }
                    }(t)) {
                    case "string":
                        return this.then(i).then((function(e) {
                            return this.set({
                                src: o("div", {
                                    innerHTML: t,
                                    dompurify: e
                                })
                            })
                        }
                        ));
                    case "element":
                        return this.set({
                            src: t
                        });
                    case "canvas":
                        return this.set({
                            canvas: t
                        });
                    case "img":
                        return this.set({
                            img: t
                        });
                    default:
                        return this.error("Unknown source type.")
                    }
                }
                ))
            }
            ,
            s.prototype.to = function(t) {
                switch (t) {
                case "container":
                    return this.toContainer();
                case "canvas":
                    return this.toCanvas();
                case "img":
                    return this.toImg();
                case "pdf":
                    return this.toPdf();
                default:
                    return this.error("Invalid target.")
                }
            }
            ,
            s.prototype.toContainer = function() {
                return this.thenList([function() {
                    return this.prop.src || this.error("Cannot duplicate - no source HTML.")
                }
                , function() {
                    return this.prop.pageSize || this.setPageSize()
                }
                ]).then((function() {
                    var t = {
                        position: "relative",
                        display: "inline-block",
                        width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                        left: 0,
                        right: 0,
                        top: 0,
                        margin: "auto",
                        backgroundColor: this.opt.backgroundColor
                    }
                      , e = function t(e, r) {
                        for (var n = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling)
                            !0 !== r && 1 === i.nodeType && "SCRIPT" === i.nodeName || n.appendChild(t(i, r));
                        return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (n.width = e.width,
                        n.height = e.height,
                        n.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (n.value = e.value),
                        n.addEventListener("load", (function() {
                            n.scrollTop = e.scrollTop,
                            n.scrollLeft = e.scrollLeft
                        }
                        ), !0)),
                        n
                    }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                    "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"),
                    this.prop.overlay = o("div", {
                        className: "html2pdf__overlay",
                        style: {
                            position: "fixed",
                            overflow: "hidden",
                            zIndex: 1e3,
                            left: "-100000px",
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }),
                    this.prop.container = o("div", {
                        className: "html2pdf__container",
                        style: t
                    }),
                    this.prop.container.appendChild(e),
                    this.prop.container.firstChild.appendChild(o("div", {
                        style: {
                            clear: "both",
                            border: "0 none transparent",
                            margin: 0,
                            padding: 0,
                            height: 0
                        }
                    })),
                    this.prop.container.style.float = "none",
                    this.prop.overlay.appendChild(this.prop.container),
                    document.body.appendChild(this.prop.overlay),
                    this.prop.container.firstChild.style.position = "relative",
                    this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
                }
                ))
            }
            ,
            s.prototype.toCanvas = function() {
                var t = [function() {
                    return document.body.contains(this.prop.container) || this.toContainer()
                }
                ];
                return this.thenList(t).then(e).then((function(t) {
                    var e = Object.assign({}, this.opt.html2canvas);
                    return delete e.onrendered,
                    t(this.prop.container, e)
                }
                )).then((function(t) {
                    (this.opt.html2canvas.onrendered || function() {}
                    )(t),
                    this.prop.canvas = t,
                    document.body.removeChild(this.prop.overlay)
                }
                ))
            }
            ,
            s.prototype.toContext2d = function() {
                var t = [function() {
                    return document.body.contains(this.prop.container) || this.toContainer()
                }
                ];
                return this.thenList(t).then(e).then((function(t) {
                    var e = this.opt.jsPDF
                      , r = this.opt.fontFaces
                      , n = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth
                      , i = Object.assign({
                        async: !0,
                        allowTaint: !0,
                        scale: n,
                        scrollX: this.opt.scrollX || 0,
                        scrollY: this.opt.scrollY || 0,
                        backgroundColor: "#ffffff",
                        imageTimeout: 15e3,
                        logging: !0,
                        proxy: null,
                        removeContainer: !0,
                        foreignObjectRendering: !1,
                        useCORS: !1
                    }, this.opt.html2canvas);
                    if (delete i.onrendered,
                    e.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging,
                    e.context2d.posX = this.opt.x,
                    e.context2d.posY = this.opt.y,
                    e.context2d.margin = this.opt.margin,
                    e.context2d.fontFaces = r,
                    r)
                        for (var a = 0; a < r.length; ++a) {
                            var o = r[a]
                              , s = o.src.find((function(t) {
                                return "truetype" === t.format
                            }
                            ));
                            s && e.addFont(s.url, o.ref.name, o.ref.style)
                        }
                    return i.windowHeight = i.windowHeight || 0,
                    i.windowHeight = 0 == i.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i.windowHeight,
                    e.context2d.save(!0),
                    t(this.prop.container, i)
                }
                )).then((function(t) {
                    this.opt.jsPDF.context2d.restore(!0),
                    (this.opt.html2canvas.onrendered || function() {}
                    )(t),
                    this.prop.canvas = t,
                    document.body.removeChild(this.prop.overlay)
                }
                ))
            }
            ,
            s.prototype.toImg = function() {
                return this.thenList([function() {
                    return this.prop.canvas || this.toCanvas()
                }
                ]).then((function() {
                    var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                    this.prop.img = document.createElement("img"),
                    this.prop.img.src = t
                }
                ))
            }
            ,
            s.prototype.toPdf = function() {
                return this.thenList([function() {
                    return this.toContext2d()
                }
                ]).then((function() {
                    this.prop.pdf = this.prop.pdf || this.opt.jsPDF
                }
                ))
            }
            ,
            s.prototype.output = function(t, e, r) {
                return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e)
            }
            ,
            s.prototype.outputPdf = function(t, e) {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).then((function() {
                    return this.prop.pdf.output(t, e)
                }
                ))
            }
            ,
            s.prototype.outputImg = function(t) {
                return this.thenList([function() {
                    return this.prop.img || this.toImg()
                }
                ]).then((function() {
                    switch (t) {
                    case void 0:
                    case "img":
                        return this.prop.img;
                    case "datauristring":
                    case "dataurlstring":
                        return this.prop.img.src;
                    case "datauri":
                    case "dataurl":
                        return document.location.href = this.prop.img.src;
                    default:
                        throw 'Image output type "' + t + '" is not supported.'
                    }
                }
                ))
            }
            ,
            s.prototype.save = function(t) {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).set(t ? {
                    filename: t
                } : null).then((function() {
                    this.prop.pdf.save(this.opt.filename)
                }
                ))
            }
            ,
            s.prototype.doCallback = function() {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).then((function() {
                    this.prop.callback(this.prop.pdf)
                }
                ))
            }
            ,
            s.prototype.set = function(t) {
                if ("object" !== a(t))
                    return this;
                var e = Object.keys(t || {}).map((function(e) {
                    if (e in s.template.prop)
                        return function() {
                            this.prop[e] = t[e]
                        }
                        ;
                    switch (e) {
                    case "margin":
                        return this.setMargin.bind(this, t.margin);
                    case "jsPDF":
                        return function() {
                            return this.opt.jsPDF = t.jsPDF,
                            this.setPageSize()
                        }
                        ;
                    case "pageSize":
                        return this.setPageSize.bind(this, t.pageSize);
                    default:
                        return function() {
                            this.opt[e] = t[e]
                        }
                    }
                }
                ), this);
                return this.then((function() {
                    return this.thenList(e)
                }
                ))
            }
            ,
            s.prototype.get = function(t, e) {
                return this.then((function() {
                    var r = t in s.template.prop ? this.prop[t] : this.opt[t];
                    return e ? e(r) : r
                }
                ))
            }
            ,
            s.prototype.setMargin = function(t) {
                return this.then((function() {
                    switch (a(t)) {
                    case "number":
                        t = [t, t, t, t];
                    case "array":
                        if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
                        4 === t.length)
                            break;
                    default:
                        return this.error("Invalid margin array.")
                    }
                    this.opt.margin = t
                }
                )).then(this.setPageSize)
            }
            ,
            s.prototype.setPageSize = function(t) {
                function e(t, e) {
                    return Math.floor(t * e / 72 * 96)
                }
                return this.then((function() {
                    (t = t || Ft.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
                        width: t.width - this.opt.margin[1] - this.opt.margin[3],
                        height: t.height - this.opt.margin[0] - this.opt.margin[2]
                    },
                    t.inner.px = {
                        width: e(t.inner.width, t.k),
                        height: e(t.inner.height, t.k)
                    },
                    t.inner.ratio = t.inner.height / t.inner.width),
                    this.prop.pageSize = t
                }
                ))
            }
            ,
            s.prototype.setProgress = function(t, e, r, n) {
                return null != t && (this.progress.val = t),
                null != e && (this.progress.state = e),
                null != r && (this.progress.n = r),
                null != n && (this.progress.stack = n),
                this.progress.ratio = this.progress.val / this.progress.state,
                this
            }
            ,
            s.prototype.updateProgress = function(t, e, r, n) {
                return this.setProgress(t ? this.progress.val + t : null, e || null, r ? this.progress.n + r : null, n ? this.progress.stack.concat(n) : null)
            }
            ,
            s.prototype.then = function(t, e) {
                var r = this;
                return this.thenCore(t, e, (function(t, e) {
                    return r.updateProgress(null, null, 1, [t]),
                    Promise.prototype.then.call(this, (function(e) {
                        return r.updateProgress(null, t),
                        e
                    }
                    )).then(t, e).then((function(t) {
                        return r.updateProgress(1),
                        t
                    }
                    ))
                }
                ))
            }
            ,
            s.prototype.thenCore = function(t, e, r) {
                r = r || Promise.prototype.then,
                t && (t = t.bind(this)),
                e && (e = e.bind(this));
                var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : s.convert(Object.assign({}, this), Promise.prototype)
                  , i = r.call(n, t, e);
                return s.convert(i, this.__proto__)
            }
            ,
            s.prototype.thenExternal = function(t, e) {
                return Promise.prototype.then.call(this, t, e)
            }
            ,
            s.prototype.thenList = function(t) {
                var e = this;
                return t.forEach((function(t) {
                    e = e.thenCore(t)
                }
                )),
                e
            }
            ,
            s.prototype.catch = function(t) {
                t && (t = t.bind(this));
                var e = Promise.prototype.catch.call(this, t);
                return s.convert(e, this)
            }
            ,
            s.prototype.catchExternal = function(t) {
                return Promise.prototype.catch.call(this, t)
            }
            ,
            s.prototype.error = function(t) {
                return this.then((function() {
                    throw new Error(t)
                }
                ))
            }
            ,
            s.prototype.using = s.prototype.set,
            s.prototype.saveAs = s.prototype.save,
            s.prototype.export = s.prototype.output,
            s.prototype.run = s.prototype.then,
            Ft.getPageSize = function(t, e, r) {
                if ("object" === (0,
                n.Z)(t)) {
                    var i = t;
                    t = i.orientation,
                    e = i.unit || e,
                    r = i.format || r
                }
                e = e || "mm",
                r = r || "a4",
                t = ("" + (t || "P")).toLowerCase();
                var a, o = ("" + r).toLowerCase(), s = {
                    a0: [2383.94, 3370.39],
                    a1: [1683.78, 2383.94],
                    a2: [1190.55, 1683.78],
                    a3: [841.89, 1190.55],
                    a4: [595.28, 841.89],
                    a5: [419.53, 595.28],
                    a6: [297.64, 419.53],
                    a7: [209.76, 297.64],
                    a8: [147.4, 209.76],
                    a9: [104.88, 147.4],
                    a10: [73.7, 104.88],
                    b0: [2834.65, 4008.19],
                    b1: [2004.09, 2834.65],
                    b2: [1417.32, 2004.09],
                    b3: [1000.63, 1417.32],
                    b4: [708.66, 1000.63],
                    b5: [498.9, 708.66],
                    b6: [354.33, 498.9],
                    b7: [249.45, 354.33],
                    b8: [175.75, 249.45],
                    b9: [124.72, 175.75],
                    b10: [87.87, 124.72],
                    c0: [2599.37, 3676.54],
                    c1: [1836.85, 2599.37],
                    c2: [1298.27, 1836.85],
                    c3: [918.43, 1298.27],
                    c4: [649.13, 918.43],
                    c5: [459.21, 649.13],
                    c6: [323.15, 459.21],
                    c7: [229.61, 323.15],
                    c8: [161.57, 229.61],
                    c9: [113.39, 161.57],
                    c10: [79.37, 113.39],
                    dl: [311.81, 623.62],
                    letter: [612, 792],
                    "government-letter": [576, 756],
                    legal: [612, 1008],
                    "junior-legal": [576, 360],
                    ledger: [1224, 792],
                    tabloid: [792, 1224],
                    "credit-card": [153, 243]
                };
                switch (e) {
                case "pt":
                    a = 1;
                    break;
                case "mm":
                    a = 72 / 25.4;
                    break;
                case "cm":
                    a = 72 / 2.54;
                    break;
                case "in":
                    a = 72;
                    break;
                case "px":
                    a = .75;
                    break;
                case "pc":
                case "em":
                    a = 12;
                    break;
                case "ex":
                    a = 6;
                    break;
                default:
                    throw "Invalid unit: " + e
                }
                var u, c = 0, h = 0;
                if (s.hasOwnProperty(o))
                    c = s[o][1] / a,
                    h = s[o][0] / a;
                else
                    try {
                        c = r[1],
                        h = r[0]
                    } catch (t) {
                        throw new Error("Invalid format: " + r)
                    }
                if ("p" === t || "portrait" === t)
                    t = "p",
                    h > c && (u = h,
                    h = c,
                    c = u);
                else {
                    if ("l" !== t && "landscape" !== t)
                        throw "Invalid orientation: " + t;
                    t = "l",
                    c > h && (u = h,
                    h = c,
                    c = u)
                }
                return {
                    width: h,
                    height: c,
                    unit: e,
                    k: a,
                    orientation: t
                }
            }
            ,
            t.html = function(t, e) {
                (e = e || {}).callback = e.callback || function() {}
                ,
                e.html2canvas = e.html2canvas || {},
                e.html2canvas.canvas = e.html2canvas.canvas || this.canvas,
                e.jsPDF = e.jsPDF || this,
                e.fontFaces = e.fontFaces ? e.fontFaces.map(_e) : null;
                var r = new s(e);
                return e.worker ? r : r.from(t).doCallback()
            }
        }(Ft.API),
        Ft.API.addJS = function(t) {
            return Ee = t,
            this.internal.events.subscribe("postPutResources", (function() {
                Be = this.internal.newObject(),
                this.internal.out("<<"),
                this.internal.out("/Names [(EmbeddedJS) " + (Be + 1) + " 0 R]"),
                this.internal.out(">>"),
                this.internal.out("endobj"),
                Me = this.internal.newObject(),
                this.internal.out("<<"),
                this.internal.out("/S /JavaScript"),
                this.internal.out("/JS (" + Ee + ")"),
                this.internal.out(">>"),
                this.internal.out("endobj")
            }
            )),
            this.internal.events.subscribe("putCatalog", (function() {
                void 0 !== Be && void 0 !== Me && this.internal.out("/Names <</JavaScript " + Be + " 0 R>>")
            }
            )),
            this
        }
        ,
        function(t) {
            var e;
            t.events.push(["postPutResources", function() {
                var t = this
                  , r = /^(\d+) 0 obj$/;
                if (this.outline.root.children.length > 0)
                    for (var n = t.outline.render().split(/\r\n/), i = 0; i < n.length; i++) {
                        var a = n[i]
                          , o = r.exec(a);
                        if (null != o) {
                            var s = o[1];
                            t.internal.newObjectDeferredBegin(s, !1)
                        }
                        t.internal.write(a)
                    }
                if (this.outline.createNamedDestinations) {
                    var u = this.internal.pages.length
                      , c = [];
                    for (i = 0; i < u; i++) {
                        var h = t.internal.newObject();
                        c.push(h);
                        var l = t.internal.getPageInfo(i + 1);
                        t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj")
                    }
                    var f = t.internal.newObject();
                    for (t.internal.write("<< /Names [ "),
                    i = 0; i < c.length; i++)
                        t.internal.write("(page_" + (i + 1) + ")" + c[i] + " 0 R");
                    t.internal.write(" ] >>", "endobj"),
                    e = t.internal.newObject(),
                    t.internal.write("<< /Dests " + f + " 0 R"),
                    t.internal.write(">>", "endobj")
                }
            }
            ]),
            t.events.push(["putCatalog", function() {
                this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)),
                this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"))
            }
            ]),
            t.events.push(["initialized", function() {
                var t = this;
                t.outline = {
                    createNamedDestinations: !1,
                    root: {
                        children: []
                    }
                },
                t.outline.add = function(t, e, r) {
                    var n = {
                        title: e,
                        options: r,
                        children: []
                    };
                    return null == t && (t = this.root),
                    t.children.push(n),
                    n
                }
                ,
                t.outline.render = function() {
                    return this.ctx = {},
                    this.ctx.val = "",
                    this.ctx.pdf = t,
                    this.genIds_r(this.root),
                    this.renderRoot(this.root),
                    this.renderItems(this.root),
                    this.ctx.val
                }
                ,
                t.outline.genIds_r = function(e) {
                    e.id = t.internal.newObjectDeferred();
                    for (var r = 0; r < e.children.length; r++)
                        this.genIds_r(e.children[r])
                }
                ,
                t.outline.renderRoot = function(t) {
                    this.objStart(t),
                    this.line("/Type /Outlines"),
                    t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])),
                    this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
                    this.line("/Count " + this.count_r({
                        count: 0
                    }, t)),
                    this.objEnd()
                }
                ,
                t.outline.renderItems = function(e) {
                    for (var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++) {
                        var i = e.children[n];
                        this.objStart(i),
                        this.line("/Title " + this.makeString(i.title)),
                        this.line("/Parent " + this.makeRef(e)),
                        n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])),
                        n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])),
                        i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])),
                        this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                        var a = this.count = this.count_r({
                            count: 0
                        }, i);
                        if (a > 0 && this.line("/Count " + a),
                        i.options && i.options.pageNumber) {
                            var o = t.internal.getPageInfo(i.options.pageNumber);
                            this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + r(0) + " 0]")
                        }
                        this.objEnd()
                    }
                    for (var s = 0; s < e.children.length; s++)
                        this.renderItems(e.children[s])
                }
                ,
                t.outline.line = function(t) {
                    this.ctx.val += t + "\r\n"
                }
                ,
                t.outline.makeRef = function(t) {
                    return t.id + " 0 R"
                }
                ,
                t.outline.makeString = function(e) {
                    return "(" + t.internal.pdfEscape(e) + ")"
                }
                ,
                t.outline.objStart = function(t) {
                    this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
                }
                ,
                t.outline.objEnd = function() {
                    this.ctx.val += ">> \r\nendobj\r\n"
                }
                ,
                t.outline.count_r = function(t, e) {
                    for (var r = 0; r < e.children.length; r++)
                        t.count++,
                        this.count_r(t, e.children[r]);
                    return t.count
                }
            }
            ])
        }(Ft.API),
        function(t) {
            var e = [192, 193, 194, 195, 196, 197, 198, 199];
            t.processJPEG = function(t, r, n, i, a, o) {
                var s, u = this.decode.DCT_DECODE, c = null;
                if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
                    switch (t = a || t,
                    t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t,
                    (s = function(t) {
                        for (var r, n = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, a = {
                            width: 0,
                            height: 0,
                            numcomponents: 1
                        }, o = 4; o < i; o += 2) {
                            if (o += n,
                            -1 !== e.indexOf(t.charCodeAt(o + 1))) {
                                r = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6),
                                a = {
                                    width: 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8),
                                    height: r,
                                    numcomponents: t.charCodeAt(o + 9)
                                };
                                break
                            }
                            n = 256 * t.charCodeAt(o + 2) + t.charCodeAt(o + 3)
                        }
                        return a
                    }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t)).numcomponents) {
                    case 1:
                        o = this.color_spaces.DEVICE_GRAY;
                        break;
                    case 4:
                        o = this.color_spaces.DEVICE_CMYK;
                        break;
                    case 3:
                        o = this.color_spaces.DEVICE_RGB
                    }
                    c = {
                        data: t,
                        width: s.width,
                        height: s.height,
                        colorSpace: o,
                        bitsPerComponent: 8,
                        filter: u,
                        index: r,
                        alias: n
                    }
                }
                return c
            }
        }(Ft.API);
        var De, Re, Te, Ue, ze, He = function() {
            var t, e, r;
            function n(t) {
                var e, r, n, i, a, o, s, u, c, h, l, f, d, p;
                for (this.data = t,
                this.pos = 8,
                this.palette = [],
                this.imgData = [],
                this.transparency = {},
                this.animation = null,
                this.text = {},
                o = null; ; ) {
                    switch (e = this.readUInt32(),
                    c = function() {
                        var t, e;
                        for (e = [],
                        t = 0; t < 4; ++t)
                            e.push(String.fromCharCode(this.data[this.pos++]));
                        return e
                    }
                    .call(this).join("")) {
                    case "IHDR":
                        this.width = this.readUInt32(),
                        this.height = this.readUInt32(),
                        this.bits = this.data[this.pos++],
                        this.colorType = this.data[this.pos++],
                        this.compressionMethod = this.data[this.pos++],
                        this.filterMethod = this.data[this.pos++],
                        this.interlaceMethod = this.data[this.pos++];
                        break;
                    case "acTL":
                        this.animation = {
                            numFrames: this.readUInt32(),
                            numPlays: this.readUInt32() || 1 / 0,
                            frames: []
                        };
                        break;
                    case "PLTE":
                        this.palette = this.read(e);
                        break;
                    case "fcTL":
                        o && this.animation.frames.push(o),
                        this.pos += 4,
                        o = {
                            width: this.readUInt32(),
                            height: this.readUInt32(),
                            xOffset: this.readUInt32(),
                            yOffset: this.readUInt32()
                        },
                        a = this.readUInt16(),
                        i = this.readUInt16() || 100,
                        o.delay = 1e3 * a / i,
                        o.disposeOp = this.data[this.pos++],
                        o.blendOp = this.data[this.pos++],
                        o.data = [];
                        break;
                    case "IDAT":
                    case "fdAT":
                        for ("fdAT" === c && (this.pos += 4,
                        e -= 4),
                        t = (null != o ? o.data : void 0) || this.imgData,
                        f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f)
                            t.push(this.data[this.pos++]);
                        break;
                    case "tRNS":
                        switch (this.transparency = {},
                        this.colorType) {
                        case 3:
                            if (n = this.palette.length / 3,
                            this.transparency.indexed = this.read(e),
                            this.transparency.indexed.length > n)
                                throw new Error("More transparent colors than palette size");
                            if ((h = n - this.transparency.indexed.length) > 0)
                                for (d = 0; 0 <= h ? d < h : d > h; 0 <= h ? ++d : --d)
                                    this.transparency.indexed.push(255);
                            break;
                        case 0:
                            this.transparency.grayscale = this.read(e)[0];
                            break;
                        case 2:
                            this.transparency.rgb = this.read(e)
                        }
                        break;
                    case "tEXt":
                        s = (l = this.read(e)).indexOf(0),
                        u = String.fromCharCode.apply(String, l.slice(0, s)),
                        this.text[u] = String.fromCharCode.apply(String, l.slice(s + 1));
                        break;
                    case "IEND":
                        return o && this.animation.frames.push(o),
                        this.colors = function() {
                            switch (this.colorType) {
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3
                            }
                        }
                        .call(this),
                        this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p,
                        r = this.colors + (this.hasAlphaChannel ? 1 : 0),
                        this.pixelBitlength = this.bits * r,
                        this.colorSpace = function() {
                            switch (this.colors) {
                            case 1:
                                return "DeviceGray";
                            case 3:
                                return "DeviceRGB"
                            }
                        }
                        .call(this),
                        void (this.imgData = new Uint8Array(this.imgData));
                    default:
                        this.pos += e
                    }
                    if (this.pos += 4,
                    this.pos > this.data.length)
                        throw new Error("Incomplete or corrupt PNG file")
                }
            }
            n.prototype.read = function(t) {
                var e, r;
                for (r = [],
                e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
                    r.push(this.data[this.pos++]);
                return r
            }
            ,
            n.prototype.readUInt32 = function() {
                return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            n.prototype.readUInt16 = function() {
                return this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            n.prototype.decodePixels = function(t) {
                var e = this.pixelBitlength / 8
                  , r = new Uint8Array(this.width * this.height * e)
                  , n = 0
                  , i = this;
                if (null == t && (t = this.imgData),
                0 === t.length)
                    return new Uint8Array(0);
                function a(a, o, s, u) {
                    var c, h, l, f, d, p, g, m, v, b, y, w, N, L, A, x, S, _, P, k, I, F = Math.ceil((i.width - a) / s), C = Math.ceil((i.height - o) / u), j = i.width == F && i.height == C;
                    for (L = e * F,
                    w = j ? r : new Uint8Array(L * C),
                    p = t.length,
                    N = 0,
                    h = 0; N < C && n < p; ) {
                        switch (t[n++]) {
                        case 0:
                            for (f = S = 0; S < L; f = S += 1)
                                w[h++] = t[n++];
                            break;
                        case 1:
                            for (f = _ = 0; _ < L; f = _ += 1)
                                c = t[n++],
                                d = f < e ? 0 : w[h - e],
                                w[h++] = (c + d) % 256;
                            break;
                        case 2:
                            for (f = P = 0; P < L; f = P += 1)
                                c = t[n++],
                                l = (f - f % e) / e,
                                A = N && w[(N - 1) * L + l * e + f % e],
                                w[h++] = (A + c) % 256;
                            break;
                        case 3:
                            for (f = k = 0; k < L; f = k += 1)
                                c = t[n++],
                                l = (f - f % e) / e,
                                d = f < e ? 0 : w[h - e],
                                A = N && w[(N - 1) * L + l * e + f % e],
                                w[h++] = (c + Math.floor((d + A) / 2)) % 256;
                            break;
                        case 4:
                            for (f = I = 0; I < L; f = I += 1)
                                c = t[n++],
                                l = (f - f % e) / e,
                                d = f < e ? 0 : w[h - e],
                                0 === N ? A = x = 0 : (A = w[(N - 1) * L + l * e + f % e],
                                x = l && w[(N - 1) * L + (l - 1) * e + f % e]),
                                g = d + A - x,
                                m = Math.abs(g - d),
                                b = Math.abs(g - A),
                                y = Math.abs(g - x),
                                v = m <= b && m <= y ? d : b <= y ? A : x,
                                w[h++] = (c + v) % 256;
                            break;
                        default:
                            throw new Error("Invalid filter algorithm: " + t[n - 1])
                        }
                        if (!j) {
                            var O = ((o + N * u) * i.width + a) * e
                              , B = N * L;
                            for (f = 0; f < F; f += 1) {
                                for (var M = 0; M < e; M += 1)
                                    r[O++] = w[B++];
                                O += (s - 1) * e
                            }
                        }
                        N++
                    }
                }
                return t = K(t),
                1 == i.interlaceMethod ? (a(0, 0, 8, 8),
                a(4, 0, 8, 8),
                a(0, 4, 4, 8),
                a(2, 0, 4, 4),
                a(0, 2, 2, 4),
                a(1, 0, 2, 2),
                a(0, 1, 1, 2)) : a(0, 0, 1, 1),
                r
            }
            ,
            n.prototype.decodePalette = function() {
                var t, e, r, n, i, a, o, s, u;
                for (r = this.palette,
                a = this.transparency.indexed || [],
                i = new Uint8Array((a.length || 0) + r.length),
                n = 0,
                t = 0,
                e = o = 0,
                s = r.length; o < s; e = o += 3)
                    i[n++] = r[e],
                    i[n++] = r[e + 1],
                    i[n++] = r[e + 2],
                    i[n++] = null != (u = a[t++]) ? u : 255;
                return i
            }
            ,
            n.prototype.copyToImageData = function(t, e) {
                var r, n, i, a, o, s, u, c, h, l, f;
                if (n = this.colors,
                h = null,
                r = this.hasAlphaChannel,
                this.palette.length && (h = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(),
                n = 4,
                r = !0),
                c = (i = t.data || t).length,
                o = h || e,
                a = s = 0,
                1 === n)
                    for (; a < c; )
                        u = h ? 4 * e[a / 4] : s,
                        l = o[u++],
                        i[a++] = l,
                        i[a++] = l,
                        i[a++] = l,
                        i[a++] = r ? o[u++] : 255,
                        s = u;
                else
                    for (; a < c; )
                        u = h ? 4 * e[a / 4] : s,
                        i[a++] = o[u++],
                        i[a++] = o[u++],
                        i[a++] = o[u++],
                        i[a++] = r ? o[u++] : 255,
                        s = u
            }
            ,
            n.prototype.decode = function() {
                var t;
                return t = new Uint8Array(this.width * this.height * 4),
                this.copyToImageData(t, this.decodePixels()),
                t
            }
            ;
            var i = function() {
                if ("[object Window]" === Object.prototype.toString.call(Z)) {
                    try {
                        e = Z.document.createElement("canvas"),
                        r = e.getContext("2d")
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                return !1
            };
            return i(),
            t = function(t) {
                var n;
                if (!0 === i())
                    return r.width = t.width,
                    r.height = t.height,
                    r.clearRect(0, 0, t.width, t.height),
                    r.putImageData(t, 0, 0),
                    (n = new Image).src = e.toDataURL(),
                    n;
                throw new Error("This method requires a Browser with Canvas-capability.")
            }
            ,
            n.prototype.decodeFrames = function(e) {
                var r, n, i, a, o, s, u, c;
                if (this.animation) {
                    for (c = [],
                    n = o = 0,
                    s = (u = this.animation.frames).length; o < s; n = ++o)
                        r = u[n],
                        i = e.createImageData(r.width, r.height),
                        a = this.decodePixels(new Uint8Array(r.data)),
                        this.copyToImageData(i, a),
                        r.imageData = i,
                        c.push(r.image = t(i));
                    return c
                }
            }
            ,
            n.prototype.renderFrame = function(t, e) {
                var r, n, i;
                return r = (n = this.animation.frames)[e],
                i = n[e - 1],
                0 === e && t.clearRect(0, 0, this.width, this.height),
                1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
                0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height),
                t.drawImage(r.image, r.xOffset, r.yOffset)
            }
            ,
            n.prototype.animate = function(t) {
                var e, r, n, i, a, o, s = this;
                return r = 0,
                o = this.animation,
                i = o.numFrames,
                n = o.frames,
                a = o.numPlays,
                (e = function() {
                    var o, u;
                    if (o = r++ % i,
                    u = n[o],
                    s.renderFrame(t, o),
                    i > 1 && r / i < a)
                        return s.animation._timeout = setTimeout(e, u.delay)
                }
                )()
            }
            ,
            n.prototype.stopAnimation = function() {
                var t;
                return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
            }
            ,
            n.prototype.render = function(t) {
                var e, r;
                return t._png && t._png.stopAnimation(),
                t._png = this,
                t.width = this.width,
                t.height = this.height,
                e = t.getContext("2d"),
                this.animation ? (this.decodeFrames(e),
                this.animate(e)) : (r = e.createImageData(this.width, this.height),
                this.copyToImageData(r, this.decodePixels()),
                e.putImageData(r, 0, 0))
            }
            ,
            n
        }();
        function We(t) {
            var e = 0;
            if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++])
                throw new Error("Invalid GIF 87a/89a header.");
            var r = t[e++] | t[e++] << 8
              , n = t[e++] | t[e++] << 8
              , i = t[e++]
              , a = i >> 7
              , o = 1 << 1 + (7 & i);
            t[e++],
            t[e++];
            var s = null
              , u = null;
            a && (s = e,
            u = o,
            e += 3 * o);
            var c = !0
              , h = []
              , l = 0
              , f = null
              , d = 0
              , p = null;
            for (this.width = r,
            this.height = n; c && e < t.length; )
                switch (t[e++]) {
                case 33:
                    switch (t[e++]) {
                    case 255:
                        if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16])
                            e += 14,
                            p = t[e++] | t[e++] << 8,
                            e++;
                        else
                            for (e += 12; ; ) {
                                if (!((P = t[e++]) >= 0))
                                    throw Error("Invalid block size");
                                if (0 === P)
                                    break;
                                e += P
                            }
                        break;
                    case 249:
                        if (4 !== t[e++] || 0 !== t[e + 4])
                            throw new Error("Invalid graphics extension block.");
                        var g = t[e++];
                        l = t[e++] | t[e++] << 8,
                        f = t[e++],
                        0 == (1 & g) && (f = null),
                        d = g >> 2 & 7,
                        e++;
                        break;
                    case 254:
                        for (; ; ) {
                            if (!((P = t[e++]) >= 0))
                                throw Error("Invalid block size");
                            if (0 === P)
                                break;
                            e += P
                        }
                        break;
                    default:
                        throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16))
                    }
                    break;
                case 44:
                    var m = t[e++] | t[e++] << 8
                      , v = t[e++] | t[e++] << 8
                      , b = t[e++] | t[e++] << 8
                      , y = t[e++] | t[e++] << 8
                      , w = t[e++]
                      , N = w >> 6 & 1
                      , L = 1 << 1 + (7 & w)
                      , A = s
                      , x = u
                      , S = !1;
                    w >> 7 && (S = !0,
                    A = e,
                    x = L,
                    e += 3 * L);
                    var _ = e;
                    for (e++; ; ) {
                        var P;
                        if (!((P = t[e++]) >= 0))
                            throw Error("Invalid block size");
                        if (0 === P)
                            break;
                        e += P
                    }
                    h.push({
                        x: m,
                        y: v,
                        width: b,
                        height: y,
                        has_local_palette: S,
                        palette_offset: A,
                        palette_size: x,
                        data_offset: _,
                        data_length: e - _,
                        transparent_index: f,
                        interlaced: !!N,
                        delay: l,
                        disposal: d
                    });
                    break;
                case 59:
                    c = !1;
                    break;
                default:
                    throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16))
                }
            this.numFrames = function() {
                return h.length
            }
            ,
            this.loopCount = function() {
                return p
            }
            ,
            this.frameInfo = function(t) {
                if (t < 0 || t >= h.length)
                    throw new Error("Frame index out of range.");
                return h[t]
            }
            ,
            this.decodeAndBlitFrameBGRA = function(e, n) {
                var i = this.frameInfo(e)
                  , a = i.width * i.height
                  , o = new Uint8Array(a);
                Ve(t, i.data_offset, o, a);
                var s = i.palette_offset
                  , u = i.transparent_index;
                null === u && (u = 256);
                var c = i.width
                  , h = r - c
                  , l = c
                  , f = 4 * (i.y * r + i.x)
                  , d = 4 * ((i.y + i.height) * r + i.x)
                  , p = f
                  , g = 4 * h;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                    var y = o[v];
                    if (0 === l && (l = c,
                    (p += g) >= d && (g = 4 * h + 4 * r * (m - 1),
                    p = f + (c + h) * (m << 1),
                    m >>= 1)),
                    y === u)
                        p += 4;
                    else {
                        var w = t[s + 3 * y]
                          , N = t[s + 3 * y + 1]
                          , L = t[s + 3 * y + 2];
                        n[p++] = L,
                        n[p++] = N,
                        n[p++] = w,
                        n[p++] = 255
                    }
                    --l
                }
            }
            ,
            this.decodeAndBlitFrameRGBA = function(e, n) {
                var i = this.frameInfo(e)
                  , a = i.width * i.height
                  , o = new Uint8Array(a);
                Ve(t, i.data_offset, o, a);
                var s = i.palette_offset
                  , u = i.transparent_index;
                null === u && (u = 256);
                var c = i.width
                  , h = r - c
                  , l = c
                  , f = 4 * (i.y * r + i.x)
                  , d = 4 * ((i.y + i.height) * r + i.x)
                  , p = f
                  , g = 4 * h;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                    var y = o[v];
                    if (0 === l && (l = c,
                    (p += g) >= d && (g = 4 * h + 4 * r * (m - 1),
                    p = f + (c + h) * (m << 1),
                    m >>= 1)),
                    y === u)
                        p += 4;
                    else {
                        var w = t[s + 3 * y]
                          , N = t[s + 3 * y + 1]
                          , L = t[s + 3 * y + 2];
                        n[p++] = w,
                        n[p++] = N,
                        n[p++] = L,
                        n[p++] = 255
                    }
                    --l
                }
            }
        }
        function Ve(t, e, r, n) {
            for (var i = t[e++], a = 1 << i, o = a + 1, s = o + 1, u = i + 1, c = (1 << u) - 1, h = 0, l = 0, f = 0, d = t[e++], p = new Int32Array(4096), g = null; ; ) {
                for (; h < 16 && 0 !== d; )
                    l |= t[e++] << h,
                    h += 8,
                    1 === d ? d = t[e++] : --d;
                if (h < u)
                    break;
                var m = l & c;
                if (l >>= u,
                h -= u,
                m !== a) {
                    if (m === o)
                        break;
                    for (var v = m < s ? m : g, b = 0, y = v; y > a; )
                        y = p[y] >> 8,
                        ++b;
                    var w = y;
                    if (f + b + (v !== m ? 1 : 0) > n)
                        return void Q.log("Warning, gif stream longer than expected.");
                    r[f++] = w;
                    var N = f += b;
                    for (v !== m && (r[f++] = w),
                    y = v; b--; )
                        y = p[y],
                        r[--N] = 255 & y,
                        y >>= 8;
                    null !== g && s < 4096 && (p[s++] = g << 8 | w,
                    s >= c + 1 && u < 12 && (++u,
                    c = c << 1 | 1)),
                    g = m
                } else
                    s = o + 1,
                    c = (1 << (u = i + 1)) - 1,
                    g = null
            }
            return f !== n && Q.log("Warning, gif stream shorter than expected."),
            r
        }
        function Ge(t) {
            var e, r, n, i, a, o = Math.floor, s = new Array(64), u = new Array(64), c = new Array(64), h = new Array(64), l = new Array(65535), f = new Array(65535), d = new Array(64), p = new Array(64), g = [], m = 0, v = 7, b = new Array(64), y = new Array(64), w = new Array(64), N = new Array(256), L = new Array(2048), A = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], x = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], _ = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], F = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], C = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            function j(t, e) {
                for (var r = 0, n = 0, i = new Array, a = 1; a <= 16; a++) {
                    for (var o = 1; o <= t[a]; o++)
                        i[e[n]] = [],
                        i[e[n]][0] = r,
                        i[e[n]][1] = a,
                        n++,
                        r++;
                    r *= 2
                }
                return i
            }
            function O(t) {
                for (var e = t[0], r = t[1] - 1; r >= 0; )
                    e & 1 << r && (m |= 1 << v),
                    r--,
                    --v < 0 && (255 == m ? (B(255),
                    B(0)) : B(m),
                    v = 7,
                    m = 0)
            }
            function B(t) {
                g.push(t)
            }
            function M(t) {
                B(t >> 8 & 255),
                B(255 & t)
            }
            function E(t, e, r, n, i) {
                for (var a, o = i[0], s = i[240], u = function(t, e) {
                    var r, n, i, a, o, s, u, c, h, l, f = 0;
                    for (h = 0; h < 8; ++h) {
                        r = t[f],
                        n = t[f + 1],
                        i = t[f + 2],
                        a = t[f + 3],
                        o = t[f + 4],
                        s = t[f + 5],
                        u = t[f + 6];
                        var p = r + (c = t[f + 7])
                          , g = r - c
                          , m = n + u
                          , v = n - u
                          , b = i + s
                          , y = i - s
                          , w = a + o
                          , N = a - o
                          , L = p + w
                          , A = p - w
                          , x = m + b
                          , S = m - b;
                        t[f] = L + x,
                        t[f + 4] = L - x;
                        var _ = .707106781 * (S + A);
                        t[f + 2] = A + _,
                        t[f + 6] = A - _;
                        var P = .382683433 * ((L = N + y) - (S = v + g))
                          , k = .5411961 * L + P
                          , I = 1.306562965 * S + P
                          , F = .707106781 * (x = y + v)
                          , C = g + F
                          , j = g - F;
                        t[f + 5] = j + k,
                        t[f + 3] = j - k,
                        t[f + 1] = C + I,
                        t[f + 7] = C - I,
                        f += 8
                    }
                    for (f = 0,
                    h = 0; h < 8; ++h) {
                        r = t[f],
                        n = t[f + 8],
                        i = t[f + 16],
                        a = t[f + 24],
                        o = t[f + 32],
                        s = t[f + 40],
                        u = t[f + 48];
                        var O = r + (c = t[f + 56])
                          , B = r - c
                          , M = n + u
                          , E = n - u
                          , q = i + s
                          , D = i - s
                          , R = a + o
                          , T = a - o
                          , U = O + R
                          , z = O - R
                          , H = M + q
                          , W = M - q;
                        t[f] = U + H,
                        t[f + 32] = U - H;
                        var V = .707106781 * (W + z);
                        t[f + 16] = z + V,
                        t[f + 48] = z - V;
                        var G = .382683433 * ((U = T + D) - (W = E + B))
                          , Y = .5411961 * U + G
                          , J = 1.306562965 * W + G
                          , X = .707106781 * (H = D + E)
                          , K = B + X
                          , Z = B - X;
                        t[f + 40] = Z + Y,
                        t[f + 24] = Z - Y,
                        t[f + 8] = K + J,
                        t[f + 56] = K - J,
                        f++
                    }
                    for (h = 0; h < 64; ++h)
                        l = t[h] * e[h],
                        d[h] = l > 0 ? l + .5 | 0 : l - .5 | 0;
                    return d
                }(t, e), c = 0; c < 64; ++c)
                    p[A[c]] = u[c];
                var h = p[0] - r;
                r = p[0],
                0 == h ? O(n[0]) : (O(n[f[a = 32767 + h]]),
                O(l[a]));
                for (var g = 63; g > 0 && 0 == p[g]; )
                    g--;
                if (0 == g)
                    return O(o),
                    r;
                for (var m, v = 1; v <= g; ) {
                    for (var b = v; 0 == p[v] && v <= g; )
                        ++v;
                    var y = v - b;
                    if (y >= 16) {
                        m = y >> 4;
                        for (var w = 1; w <= m; ++w)
                            O(s);
                        y &= 15
                    }
                    a = 32767 + p[v],
                    O(i[(y << 4) + f[a]]),
                    O(l[a]),
                    v++
                }
                return 63 != g && O(o),
                r
            }
            function q(t) {
                t = Math.min(Math.max(t, 1), 100),
                a != t && (function(t) {
                    for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], r = 0; r < 64; r++) {
                        var n = o((e[r] * t + 50) / 100);
                        n = Math.min(Math.max(n, 1), 255),
                        s[A[r]] = n
                    }
                    for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
                        var l = o((i[a] * t + 50) / 100);
                        l = Math.min(Math.max(l, 1), 255),
                        u[A[a]] = l
                    }
                    for (var f = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], d = 0, p = 0; p < 8; p++)
                        for (var g = 0; g < 8; g++)
                            c[d] = 1 / (s[A[d]] * f[p] * f[g] * 8),
                            h[d] = 1 / (u[A[d]] * f[p] * f[g] * 8),
                            d++
                }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
                a = t)
            }
            this.encode = function(t, a) {
                a && q(a),
                g = new Array,
                m = 0,
                v = 7,
                M(65496),
                M(65504),
                M(16),
                B(74),
                B(70),
                B(73),
                B(70),
                B(0),
                B(1),
                B(1),
                B(0),
                M(1),
                M(1),
                B(0),
                B(0),
                function() {
                    M(65499),
                    M(132),
                    B(0);
                    for (var t = 0; t < 64; t++)
                        B(s[t]);
                    B(1);
                    for (var e = 0; e < 64; e++)
                        B(u[e])
                }(),
                function(t, e) {
                    M(65472),
                    M(17),
                    B(8),
                    M(e),
                    M(t),
                    B(3),
                    B(1),
                    B(17),
                    B(0),
                    B(2),
                    B(17),
                    B(1),
                    B(3),
                    B(17),
                    B(1)
                }(t.width, t.height),
                function() {
                    M(65476),
                    M(418),
                    B(0);
                    for (var t = 0; t < 16; t++)
                        B(x[t + 1]);
                    for (var e = 0; e <= 11; e++)
                        B(S[e]);
                    B(16);
                    for (var r = 0; r < 16; r++)
                        B(_[r + 1]);
                    for (var n = 0; n <= 161; n++)
                        B(P[n]);
                    B(1);
                    for (var i = 0; i < 16; i++)
                        B(k[i + 1]);
                    for (var a = 0; a <= 11; a++)
                        B(I[a]);
                    B(17);
                    for (var o = 0; o < 16; o++)
                        B(F[o + 1]);
                    for (var s = 0; s <= 161; s++)
                        B(C[s])
                }(),
                M(65498),
                M(12),
                B(3),
                B(1),
                B(0),
                B(2),
                B(17),
                B(3),
                B(17),
                B(0),
                B(63),
                B(0);
                var o = 0
                  , l = 0
                  , f = 0;
                m = 0,
                v = 7,
                this.encode.displayName = "_encode_";
                for (var d, p, N, A, j, D, R, T, U, z = t.data, H = t.width, W = t.height, V = 4 * H, G = 0; G < W; ) {
                    for (d = 0; d < V; ) {
                        for (j = V * G + d,
                        R = -1,
                        T = 0,
                        U = 0; U < 64; U++)
                            D = j + (T = U >> 3) * V + (R = 4 * (7 & U)),
                            G + T >= W && (D -= V * (G + 1 + T - W)),
                            d + R >= V && (D -= d + R - V + 4),
                            p = z[D++],
                            N = z[D++],
                            A = z[D++],
                            b[U] = (L[p] + L[N + 256 >> 0] + L[A + 512 >> 0] >> 16) - 128,
                            y[U] = (L[p + 768 >> 0] + L[N + 1024 >> 0] + L[A + 1280 >> 0] >> 16) - 128,
                            w[U] = (L[p + 1280 >> 0] + L[N + 1536 >> 0] + L[A + 1792 >> 0] >> 16) - 128;
                        o = E(b, c, o, e, n),
                        l = E(y, h, l, r, i),
                        f = E(w, h, f, r, i),
                        d += 32
                    }
                    G += 8
                }
                if (v >= 0) {
                    var Y = [];
                    Y[1] = v + 1,
                    Y[0] = (1 << v + 1) - 1,
                    O(Y)
                }
                return M(65497),
                new Uint8Array(g)
            }
            ,
            t = t || 50,
            function() {
                for (var t = String.fromCharCode, e = 0; e < 256; e++)
                    N[e] = t(e)
            }(),
            e = j(x, S),
            r = j(k, I),
            n = j(_, P),
            i = j(F, C),
            function() {
                for (var t = 1, e = 2, r = 1; r <= 15; r++) {
                    for (var n = t; n < e; n++)
                        f[32767 + n] = r,
                        l[32767 + n] = [],
                        l[32767 + n][1] = r,
                        l[32767 + n][0] = n;
                    for (var i = -(e - 1); i <= -t; i++)
                        f[32767 + i] = r,
                        l[32767 + i] = [],
                        l[32767 + i][1] = r,
                        l[32767 + i][0] = e - 1 + i;
                    t <<= 1,
                    e <<= 1
                }
            }(),
            function() {
                for (var t = 0; t < 256; t++)
                    L[t] = 19595 * t,
                    L[t + 256 >> 0] = 38470 * t,
                    L[t + 512 >> 0] = 7471 * t + 32768,
                    L[t + 768 >> 0] = -11059 * t,
                    L[t + 1024 >> 0] = -21709 * t,
                    L[t + 1280 >> 0] = 32768 * t + 8421375,
                    L[t + 1536 >> 0] = -27439 * t,
                    L[t + 1792 >> 0] = -5329 * t
            }(),
            q(t)
        }
        function Ye(t, e) {
            if (this.pos = 0,
            this.buffer = t,
            this.datav = new DataView(t.buffer),
            this.is_with_alpha = !!e,
            this.bottom_up = !0,
            this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]),
            this.pos += 2,
            -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
                throw new Error("Invalid BMP File");
            this.parseHeader(),
            this.parseBGR()
        }
        function Je(t) {
            function e(t) {
                if (!t)
                    throw Error("assert :P")
            }
            function r(t, e, r) {
                for (var n = 0; 4 > n; n++)
                    if (t[e + n] != r.charCodeAt(n))
                        return !0;
                return !1
            }
            function n(t, e, r, n, i) {
                for (var a = 0; a < i; a++)
                    t[e + a] = r[n + a]
            }
            function i(t, e, r, n) {
                for (var i = 0; i < n; i++)
                    t[e + i] = r
            }
            function a(t) {
                return new Int32Array(t)
            }
            function o(t, e) {
                for (var r = [], n = 0; n < t; n++)
                    r.push(new e);
                return r
            }
            function s(t, e) {
                var r = [];
                return function t(r, n, i) {
                    for (var a = i[n], o = 0; o < a && (r.push(i.length > n + 1 ? [] : new e),
                    !(i.length < n + 1)); o++)
                        t(r[o], n + 1, i)
                }(r, 0, t),
                r
            }
            var u = function() {
                var t = this;
                function u(t, e) {
                    for (var r = 1 << e - 1 >>> 0; t & r; )
                        r >>>= 1;
                    return r ? (t & r - 1) + r : t
                }
                function c(t, r, n, i, a) {
                    e(!(i % n));
                    do {
                        t[r + (i -= n)] = a
                    } while (0 < i)
                }
                function h(t, r, n, i, o) {
                    if (e(2328 >= o),
                    512 >= o)
                        var s = a(512);
                    else if (null == (s = a(o)))
                        return 0;
                    return function(t, r, n, i, o, s) {
                        var h, f, d = r, p = 1 << n, g = a(16), m = a(16);
                        for (e(0 != o),
                        e(null != i),
                        e(null != t),
                        e(0 < n),
                        f = 0; f < o; ++f) {
                            if (15 < i[f])
                                return 0;
                            ++g[i[f]]
                        }
                        if (g[0] == o)
                            return 0;
                        for (m[1] = 0,
                        h = 1; 15 > h; ++h) {
                            if (g[h] > 1 << h)
                                return 0;
                            m[h + 1] = m[h] + g[h]
                        }
                        for (f = 0; f < o; ++f)
                            h = i[f],
                            0 < i[f] && (s[m[h]++] = f);
                        if (1 == m[15])
                            return (i = new l).g = 0,
                            i.value = s[0],
                            c(t, d, 1, p, i),
                            p;
                        var v, b = -1, y = p - 1, w = 0, N = 1, L = 1, A = 1 << n;
                        for (f = 0,
                        h = 1,
                        o = 2; h <= n; ++h,
                        o <<= 1) {
                            if (N += L <<= 1,
                            0 > (L -= g[h]))
                                return 0;
                            for (; 0 < g[h]; --g[h])
                                (i = new l).g = h,
                                i.value = s[f++],
                                c(t, d + w, o, A, i),
                                w = u(w, h)
                        }
                        for (h = n + 1,
                        o = 2; 15 >= h; ++h,
                        o <<= 1) {
                            if (N += L <<= 1,
                            0 > (L -= g[h]))
                                return 0;
                            for (; 0 < g[h]; --g[h]) {
                                if (i = new l,
                                (w & y) != b) {
                                    for (d += A,
                                    v = 1 << (b = h) - n; 15 > b && !(0 >= (v -= g[b])); )
                                        ++b,
                                        v <<= 1;
                                    p += A = 1 << (v = b - n),
                                    t[r + (b = w & y)].g = v + n,
                                    t[r + b].value = d - r - b
                                }
                                i.g = h - n,
                                i.value = s[f++],
                                c(t, d + (w >> n), o, A, i),
                                w = u(w, h)
                            }
                        }
                        return N != 2 * m[15] - 1 ? 0 : p
                    }(t, r, n, i, o, s)
                }
                function l() {
                    this.value = this.g = 0
                }
                function f() {
                    this.value = this.g = 0
                }
                function d() {
                    this.G = o(5, l),
                    this.H = a(5),
                    this.jc = this.Qb = this.qb = this.nd = 0,
                    this.pd = o(Dr, f)
                }
                function p(t, r, n, i) {
                    e(null != t),
                    e(null != r),
                    e(2147483648 > i),
                    t.Ca = 254,
                    t.I = 0,
                    t.b = -8,
                    t.Ka = 0,
                    t.oa = r,
                    t.pa = n,
                    t.Jd = r,
                    t.Yc = n + i,
                    t.Zc = 4 <= i ? n + i - 4 + 1 : n,
                    _(t)
                }
                function g(t, e) {
                    for (var r = 0; 0 < e--; )
                        r |= k(t, 128) << e;
                    return r
                }
                function m(t, e) {
                    var r = g(t, e);
                    return P(t) ? -r : r
                }
                function v(t, r, n, i) {
                    var a, o = 0;
                    for (e(null != t),
                    e(null != r),
                    e(4294967288 > i),
                    t.Sb = i,
                    t.Ra = 0,
                    t.u = 0,
                    t.h = 0,
                    4 < i && (i = 4),
                    a = 0; a < i; ++a)
                        o += r[n + a] << 8 * a;
                    t.Ra = o,
                    t.bb = i,
                    t.oa = r,
                    t.pa = n
                }
                function b(t) {
                    for (; 8 <= t.u && t.bb < t.Sb; )
                        t.Ra >>>= 8,
                        t.Ra += t.oa[t.pa + t.bb] << Ur - 8 >>> 0,
                        ++t.bb,
                        t.u -= 8;
                    A(t) && (t.h = 1,
                    t.u = 0)
                }
                function y(t, r) {
                    if (e(0 <= r),
                    !t.h && r <= Tr) {
                        var n = L(t) & Rr[r];
                        return t.u += r,
                        b(t),
                        n
                    }
                    return t.h = 1,
                    t.u = 0
                }
                function w() {
                    this.b = this.Ca = this.I = 0,
                    this.oa = [],
                    this.pa = 0,
                    this.Jd = [],
                    this.Yc = 0,
                    this.Zc = [],
                    this.Ka = 0
                }
                function N() {
                    this.Ra = 0,
                    this.oa = [],
                    this.h = this.u = this.bb = this.Sb = this.pa = 0
                }
                function L(t) {
                    return t.Ra >>> (t.u & Ur - 1) >>> 0
                }
                function A(t) {
                    return e(t.bb <= t.Sb),
                    t.h || t.bb == t.Sb && t.u > Ur
                }
                function x(t, e) {
                    t.u = e,
                    t.h = A(t)
                }
                function S(t) {
                    t.u >= zr && (e(t.u >= zr),
                    b(t))
                }
                function _(t) {
                    e(null != t && null != t.oa),
                    t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0,
                    t.b += 8) : (e(null != t && null != t.oa),
                    t.pa < t.Yc ? (t.b += 8,
                    t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8,
                    t.b += 8,
                    t.Ka = 1))
                }
                function P(t) {
                    return g(t, 1)
                }
                function k(t, e) {
                    var r = t.Ca;
                    0 > t.b && _(t);
                    var n = t.b
                      , i = r * e >>> 8
                      , a = (t.I >>> n > i) + 0;
                    for (a ? (r -= i,
                    t.I -= i + 1 << n >>> 0) : r = i + 1,
                    n = r,
                    i = 0; 256 <= n; )
                        i += 8,
                        n >>= 8;
                    return n = 7 ^ i + Hr[n],
                    t.b -= n,
                    t.Ca = (r << n) - 1,
                    a
                }
                function I(t, e, r) {
                    t[e + 0] = r >> 24 & 255,
                    t[e + 1] = r >> 16 & 255,
                    t[e + 2] = r >> 8 & 255,
                    t[e + 3] = r >> 0 & 255
                }
                function F(t, e) {
                    return t[e + 0] << 0 | t[e + 1] << 8
                }
                function C(t, e) {
                    return F(t, e) | t[e + 2] << 16
                }
                function j(t, e) {
                    return F(t, e) | F(t, e + 2) << 16
                }
                function O(t, r) {
                    var n = 1 << r;
                    return e(null != t),
                    e(0 < r),
                    t.X = a(n),
                    null == t.X ? 0 : (t.Mb = 32 - r,
                    t.Xa = r,
                    1)
                }
                function B(t, r) {
                    e(null != t),
                    e(null != r),
                    e(t.Xa == r.Xa),
                    n(r.X, 0, t.X, 0, 1 << r.Xa)
                }
                function M() {
                    this.X = [],
                    this.Xa = this.Mb = 0
                }
                function E(t, r, n, i) {
                    e(null != n),
                    e(null != i);
                    var a = n[0]
                      , o = i[0];
                    return 0 == a && (a = (t * o + r / 2) / r),
                    0 == o && (o = (r * a + t / 2) / t),
                    0 >= a || 0 >= o ? 0 : (n[0] = a,
                    i[0] = o,
                    1)
                }
                function q(t, e) {
                    return t + (1 << e) - 1 >>> e
                }
                function D(t, e) {
                    return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0
                }
                function R(e, r) {
                    t[r] = function(r, n, i, a, o, s, u) {
                        var c;
                        for (c = 0; c < o; ++c) {
                            var h = t[e](s[u + c - 1], i, a + c);
                            s[u + c] = D(r[n + c], h)
                        }
                    }
                }
                function T() {
                    this.ud = this.hd = this.jd = 0
                }
                function U(t, e) {
                    return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0
                }
                function z(t) {
                    return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
                }
                function H(t, e) {
                    return z(t + (t - e + .5 >> 1))
                }
                function W(t, e, r) {
                    return Math.abs(e - r) - Math.abs(t - r)
                }
                function V(t, e, r, n, i, a, o) {
                    for (n = a[o - 1],
                    r = 0; r < i; ++r)
                        a[o + r] = n = D(t[e + r], n)
                }
                function G(t, e, r, n, i) {
                    var a;
                    for (a = 0; a < r; ++a) {
                        var o = t[e + a]
                          , s = o >> 8 & 255
                          , u = 16711935 & (u = (u = 16711935 & o) + ((s << 16) + s));
                        n[i + a] = (4278255360 & o) + u >>> 0
                    }
                }
                function Y(t, e) {
                    e.jd = t >> 0 & 255,
                    e.hd = t >> 8 & 255,
                    e.ud = t >> 16 & 255
                }
                function J(t, e, r, n, i, a) {
                    var o;
                    for (o = 0; o < n; ++o) {
                        var s = e[r + o]
                          , u = s >>> 8
                          , c = s
                          , h = 255 & (h = (h = s >>> 16) + ((t.jd << 24 >> 24) * (u << 24 >> 24) >>> 5));
                        c = 255 & (c = (c += (t.hd << 24 >> 24) * (u << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (h << 24 >> 24) >>> 5)),
                        i[a + o] = (4278255360 & s) + (h << 16) + c
                    }
                }
                function X(e, r, n, i, a) {
                    t[r] = function(t, e, r, n, o, s, u, c, h) {
                        for (n = u; n < c; ++n)
                            for (u = 0; u < h; ++u)
                                o[s++] = a(r[i(t[e++])])
                    }
                    ,
                    t[e] = function(e, r, o, s, u, c, h) {
                        var l = 8 >> e.b
                          , f = e.Ea
                          , d = e.K[0]
                          , p = e.w;
                        if (8 > l)
                            for (e = (1 << e.b) - 1,
                            p = (1 << l) - 1; r < o; ++r) {
                                var g, m = 0;
                                for (g = 0; g < f; ++g)
                                    g & e || (m = i(s[u++])),
                                    c[h++] = a(d[m & p]),
                                    m >>= l
                            }
                        else
                            t["VP8LMapColor" + n](s, u, d, p, c, h, r, o, f)
                    }
                }
                function K(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 16 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 0 & 255
                    }
                }
                function Z(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 16 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 0 & 255,
                        n[i++] = a >> 24 & 255
                    }
                }
                function $(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15
                          , o = o >> 0 & 240 | o >> 28 & 15;
                        n[i++] = a,
                        n[i++] = o
                    }
                }
                function Q(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7
                          , o = o >> 5 & 224 | o >> 3 & 31;
                        n[i++] = a,
                        n[i++] = o
                    }
                }
                function tt(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 0 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 16 & 255
                    }
                }
                function et(t, e, r, i, a, o) {
                    if (0 == o)
                        for (r = e + r; e < r; )
                            I(i, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0),
                            a += 32;
                    else
                        n(i, a, t, e, r)
                }
                function rt(e, r) {
                    t[r][0] = t[e + "0"],
                    t[r][1] = t[e + "1"],
                    t[r][2] = t[e + "2"],
                    t[r][3] = t[e + "3"],
                    t[r][4] = t[e + "4"],
                    t[r][5] = t[e + "5"],
                    t[r][6] = t[e + "6"],
                    t[r][7] = t[e + "7"],
                    t[r][8] = t[e + "8"],
                    t[r][9] = t[e + "9"],
                    t[r][10] = t[e + "10"],
                    t[r][11] = t[e + "11"],
                    t[r][12] = t[e + "12"],
                    t[r][13] = t[e + "13"],
                    t[r][14] = t[e + "0"],
                    t[r][15] = t[e + "0"]
                }
                function nt(t) {
                    return t == Hn || t == Wn || t == Vn || t == Gn
                }
                function it() {
                    this.eb = [],
                    this.size = this.A = this.fb = 0
                }
                function at() {
                    this.y = [],
                    this.f = [],
                    this.ea = [],
                    this.F = [],
                    this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
                }
                function ot() {
                    this.Rd = this.height = this.width = this.S = 0,
                    this.f = {},
                    this.f.RGBA = new it,
                    this.f.kb = new at,
                    this.sd = null
                }
                function st() {
                    this.width = [0],
                    this.height = [0],
                    this.Pd = [0],
                    this.Qd = [0],
                    this.format = [0]
                }
                function ut() {
                    this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
                }
                function ct(t) {
                    return alert("todo:WebPSamplerProcessPlane"),
                    t.T
                }
                function ht(t, e) {
                    var r = t.T
                      , i = e.ba.f.RGBA
                      , a = i.eb
                      , o = i.fb + t.ka * i.A
                      , s = vi[e.ba.S]
                      , u = t.y
                      , c = t.O
                      , h = t.f
                      , l = t.N
                      , f = t.ea
                      , d = t.W
                      , p = e.cc
                      , g = e.dc
                      , m = e.Mc
                      , v = e.Nc
                      , b = t.ka
                      , y = t.ka + t.T
                      , w = t.U
                      , N = w + 1 >> 1;
                    for (0 == b ? s(u, c, null, null, h, l, f, d, h, l, f, d, a, o, null, null, w) : (s(e.ec, e.fc, u, c, p, g, m, v, h, l, f, d, a, o - i.A, a, o, w),
                    ++r); b + 2 < y; b += 2)
                        p = h,
                        g = l,
                        m = f,
                        v = d,
                        l += t.Rc,
                        d += t.Rc,
                        o += 2 * i.A,
                        s(u, (c += 2 * t.fa) - t.fa, u, c, p, g, m, v, h, l, f, d, a, o - i.A, a, o, w);
                    return c += t.fa,
                    t.j + y < t.o ? (n(e.ec, e.fc, u, c, w),
                    n(e.cc, e.dc, h, l, N),
                    n(e.Mc, e.Nc, f, d, N),
                    r--) : 1 & y || s(u, c, null, null, h, l, f, d, h, l, f, d, a, o + i.A, null, null, w),
                    r
                }
                function lt(t, r, n) {
                    var i = t.F
                      , a = [t.J];
                    if (null != i) {
                        var o = t.U
                          , s = r.ba.S
                          , u = s == Tn || s == Vn;
                        r = r.ba.f.RGBA;
                        var c = [0]
                          , h = t.ka;
                        c[0] = t.T,
                        t.Kb && (0 == h ? --c[0] : (--h,
                        a[0] -= t.width),
                        t.j + t.ka + t.T == t.o && (c[0] = t.o - t.j - h));
                        var l = r.eb;
                        h = r.fb + h * r.A,
                        t = Sn(i, a[0], t.width, o, c, l, h + (u ? 0 : 3), r.A),
                        e(n == c),
                        t && nt(s) && An(l, h, u, o, c, r.A)
                    }
                    return 0
                }
                function ft(t) {
                    var e = t.ma
                      , r = e.ba.S
                      , n = 11 > r
                      , i = r == qn || r == Rn || r == Tn || r == Un || 12 == r || nt(r);
                    if (e.memory = null,
                    e.Ib = null,
                    e.Jb = null,
                    e.Nd = null,
                    !Mr(e.Oa, t, i ? 11 : 12))
                        return 0;
                    if (i && nt(r) && br(),
                    t.da)
                        alert("todo:use_scaling");
                    else {
                        if (n) {
                            if (e.Ib = ct,
                            t.Kb) {
                                if (r = t.U + 1 >> 1,
                                e.memory = a(t.U + 2 * r),
                                null == e.memory)
                                    return 0;
                                e.ec = e.memory,
                                e.fc = 0,
                                e.cc = e.ec,
                                e.dc = e.fc + t.U,
                                e.Mc = e.cc,
                                e.Nc = e.dc + r,
                                e.Ib = ht,
                                br()
                            }
                        } else
                            alert("todo:EmitYUV");
                        i && (e.Jb = lt,
                        n && mr())
                    }
                    if (n && !Ci) {
                        for (t = 0; 256 > t; ++t)
                            ji[t] = 89858 * (t - 128) + _i >> Si,
                            Mi[t] = -22014 * (t - 128) + _i,
                            Bi[t] = -45773 * (t - 128),
                            Oi[t] = 113618 * (t - 128) + _i >> Si;
                        for (t = Pi; t < ki; ++t)
                            e = 76283 * (t - 16) + _i >> Si,
                            Ei[t - Pi] = Vt(e, 255),
                            qi[t - Pi] = Vt(e + 8 >> 4, 15);
                        Ci = 1
                    }
                    return 1
                }
                function dt(t) {
                    var r = t.ma
                      , n = t.U
                      , i = t.T;
                    return e(!(1 & t.ka)),
                    0 >= n || 0 >= i ? 0 : (n = r.Ib(t, r),
                    null != r.Jb && r.Jb(t, r, n),
                    r.Dc += n,
                    1)
                }
                function pt(t) {
                    t.ma.memory = null
                }
                function gt(t, e, r, n) {
                    return 47 != y(t, 8) ? 0 : (e[0] = y(t, 14) + 1,
                    r[0] = y(t, 14) + 1,
                    n[0] = y(t, 1),
                    0 != y(t, 3) ? 0 : !t.h)
                }
                function mt(t, e) {
                    if (4 > t)
                        return t + 1;
                    var r = t - 2 >> 1;
                    return (2 + (1 & t) << r) + y(e, r) + 1
                }
                function vt(t, e) {
                    return 120 < e ? e - 120 : 1 <= (r = ((r = $n[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1;
                    var r
                }
                function bt(t, e, r) {
                    var n = L(r)
                      , i = t[e += 255 & n].g - 8;
                    return 0 < i && (x(r, r.u + 8),
                    n = L(r),
                    e += t[e].value,
                    e += n & (1 << i) - 1),
                    x(r, r.u + t[e].g),
                    t[e].value
                }
                function yt(t, r, n) {
                    return n.g += t.g,
                    n.value += t.value << r >>> 0,
                    e(8 >= n.g),
                    t.g
                }
                function wt(t, r, n) {
                    var i = t.xc;
                    return e((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb),
                    t.Ya[r]
                }
                function Nt(t, r, i, a) {
                    var o = t.ab
                      , s = t.c * r
                      , u = t.C;
                    r = u + r;
                    var c = i
                      , h = a;
                    for (a = t.Ta,
                    i = t.Ua; 0 < o--; ) {
                        var l = t.gc[o]
                          , f = u
                          , d = r
                          , p = c
                          , g = h
                          , m = (h = a,
                        c = i,
                        l.Ea);
                        switch (e(f < d),
                        e(d <= l.nc),
                        l.hc) {
                        case 2:
                            Gr(p, g, (d - f) * m, h, c);
                            break;
                        case 0:
                            var v = f
                              , b = d
                              , y = h
                              , w = c
                              , N = (_ = l).Ea;
                            0 == v && (Wr(p, g, null, null, 1, y, w),
                            V(p, g + 1, 0, 0, N - 1, y, w + 1),
                            g += N,
                            w += N,
                            ++v);
                            for (var L = 1 << _.b, A = L - 1, x = q(N, _.b), S = _.K, _ = _.w + (v >> _.b) * x; v < b; ) {
                                var P = S
                                  , k = _
                                  , I = 1;
                                for (Vr(p, g, y, w - N, 1, y, w); I < N; ) {
                                    var F = (I & ~A) + L;
                                    F > N && (F = N),
                                    (0,
                                    Zr[P[k++] >> 8 & 15])(p, g + +I, y, w + I - N, F - I, y, w + I),
                                    I = F
                                }
                                g += N,
                                w += N,
                                ++v & A || (_ += x)
                            }
                            d != l.nc && n(h, c - m, h, c + (d - f - 1) * m, m);
                            break;
                        case 1:
                            for (m = p,
                            b = g,
                            N = (p = l.Ea) - (w = p & ~(y = (g = 1 << l.b) - 1)),
                            v = q(p, l.b),
                            L = l.K,
                            l = l.w + (f >> l.b) * v; f < d; ) {
                                for (A = L,
                                x = l,
                                S = new T,
                                _ = b + w,
                                P = b + p; b < _; )
                                    Y(A[x++], S),
                                    $r(S, m, b, g, h, c),
                                    b += g,
                                    c += g;
                                b < P && (Y(A[x++], S),
                                $r(S, m, b, N, h, c),
                                b += N,
                                c += N),
                                ++f & y || (l += v)
                            }
                            break;
                        case 3:
                            if (p == h && g == c && 0 < l.b) {
                                for (b = h,
                                p = m = c + (d - f) * m - (w = (d - f) * q(l.Ea, l.b)),
                                g = h,
                                y = c,
                                v = [],
                                w = (N = w) - 1; 0 <= w; --w)
                                    v[w] = g[y + w];
                                for (w = N - 1; 0 <= w; --w)
                                    b[p + w] = v[w];
                                Yr(l, f, d, h, m, h, c)
                            } else
                                Yr(l, f, d, p, g, h, c)
                        }
                        c = a,
                        h = i
                    }
                    h != i && n(a, i, c, h, s)
                }
                function Lt(t, r) {
                    var n = t.V
                      , i = t.Ba + t.c * t.C
                      , a = r - t.C;
                    if (e(r <= t.l.o),
                    e(16 >= a),
                    0 < a) {
                        var o = t.l
                          , s = t.Ta
                          , u = t.Ua
                          , c = o.width;
                        if (Nt(t, a, n, i),
                        a = u = [u],
                        e((n = t.C) < (i = r)),
                        e(o.v < o.va),
                        i > o.o && (i = o.o),
                        n < o.j) {
                            var h = o.j - n;
                            n = o.j,
                            a[0] += h * c
                        }
                        if (n >= i ? n = 0 : (a[0] += 4 * o.v,
                        o.ka = n - o.j,
                        o.U = o.va - o.v,
                        o.T = i - n,
                        n = 1),
                        n) {
                            if (u = u[0],
                            11 > (n = t.ca).S) {
                                var l = n.f.RGBA
                                  , f = (i = n.S,
                                a = o.U,
                                o = o.T,
                                h = l.eb,
                                l.A)
                                  , d = o;
                                for (l = l.fb + t.Ma * l.A; 0 < d--; ) {
                                    var p = s
                                      , g = u
                                      , m = a
                                      , v = h
                                      , b = l;
                                    switch (i) {
                                    case En:
                                        Qr(p, g, m, v, b);
                                        break;
                                    case qn:
                                        tn(p, g, m, v, b);
                                        break;
                                    case Hn:
                                        tn(p, g, m, v, b),
                                        An(v, b, 0, m, 1, 0);
                                        break;
                                    case Dn:
                                        nn(p, g, m, v, b);
                                        break;
                                    case Rn:
                                        et(p, g, m, v, b, 1);
                                        break;
                                    case Wn:
                                        et(p, g, m, v, b, 1),
                                        An(v, b, 0, m, 1, 0);
                                        break;
                                    case Tn:
                                        et(p, g, m, v, b, 0);
                                        break;
                                    case Vn:
                                        et(p, g, m, v, b, 0),
                                        An(v, b, 1, m, 1, 0);
                                        break;
                                    case Un:
                                        en(p, g, m, v, b);
                                        break;
                                    case Gn:
                                        en(p, g, m, v, b),
                                        xn(v, b, m, 1, 0);
                                        break;
                                    case zn:
                                        rn(p, g, m, v, b);
                                        break;
                                    default:
                                        e(0)
                                    }
                                    u += c,
                                    l += f
                                }
                                t.Ma += o
                            } else
                                alert("todo:EmitRescaledRowsYUVA");
                            e(t.Ma <= n.height)
                        }
                    }
                    t.C = r,
                    e(t.C <= t.i)
                }
                function At(t) {
                    var e;
                    if (0 < t.ua)
                        return 0;
                    for (e = 0; e < t.Wb; ++e) {
                        var r = t.Ya[e].G
                          , n = t.Ya[e].H;
                        if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g)
                            return 0
                    }
                    return 1
                }
                function xt(t, r, n, i, a, o) {
                    if (0 != t.Z) {
                        var s = t.qd
                          , u = t.rd;
                        for (e(null != mi[t.Z]); r < n; ++r)
                            mi[t.Z](s, u, i, a, i, a, o),
                            s = i,
                            u = a,
                            a += o;
                        t.qd = s,
                        t.rd = u
                    }
                }
                function St(t, r) {
                    var n = t.l.ma
                      , i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
                    if (i = t.C < i ? i : t.C,
                    e(r <= t.l.o),
                    r > i) {
                        var a = t.l.width
                          , o = n.ca
                          , s = n.tb + a * i
                          , u = t.V
                          , c = t.Ba + t.c * i
                          , h = t.gc;
                        e(1 == t.ab),
                        e(3 == h[0].hc),
                        Xr(h[0], i, r, u, c, o, s),
                        xt(n, i, r, o, s, a)
                    }
                    t.C = t.Ma = r
                }
                function _t(t, r, n, i, a, o, s) {
                    var u = t.$ / i
                      , c = t.$ % i
                      , h = t.m
                      , l = t.s
                      , f = n + t.$
                      , d = f;
                    a = n + i * a;
                    var p = n + i * o
                      , g = 280 + l.ua
                      , m = t.Pb ? u : 16777216
                      , v = 0 < l.ua ? l.Wa : null
                      , b = l.wc
                      , y = f < p ? wt(l, c, u) : null;
                    e(t.C < o),
                    e(p <= a);
                    var w = !1;
                    t: for (; ; ) {
                        for (; w || f < p; ) {
                            var N = 0;
                            if (u >= m) {
                                var _ = f - n;
                                e((m = t).Pb),
                                m.wd = m.m,
                                m.xd = _,
                                0 < m.s.ua && B(m.s.Wa, m.s.vb),
                                m = u + ti
                            }
                            if (c & b || (y = wt(l, c, u)),
                            e(null != y),
                            y.Qb && (r[f] = y.qb,
                            w = !0),
                            !w)
                                if (S(h),
                                y.jc) {
                                    N = h,
                                    _ = r;
                                    var P = f
                                      , k = y.pd[L(N) & Dr - 1];
                                    e(y.jc),
                                    256 > k.g ? (x(N, N.u + k.g),
                                    _[P] = k.value,
                                    N = 0) : (x(N, N.u + k.g - 256),
                                    e(256 <= k.value),
                                    N = k.value),
                                    0 == N && (w = !0)
                                } else
                                    N = bt(y.G[0], y.H[0], h);
                            if (h.h)
                                break;
                            if (w || 256 > N) {
                                if (!w)
                                    if (y.nd)
                                        r[f] = (y.qb | N << 8) >>> 0;
                                    else {
                                        if (S(h),
                                        w = bt(y.G[1], y.H[1], h),
                                        S(h),
                                        _ = bt(y.G[2], y.H[2], h),
                                        P = bt(y.G[3], y.H[3], h),
                                        h.h)
                                            break;
                                        r[f] = (P << 24 | w << 16 | N << 8 | _) >>> 0
                                    }
                                if (w = !1,
                                ++f,
                                ++c >= i && (c = 0,
                                ++u,
                                null != s && u <= o && !(u % 16) && s(t, u),
                                null != v))
                                    for (; d < f; )
                                        N = r[d++],
                                        v.X[(506832829 * N & 4294967295) >>> v.Mb] = N
                            } else if (280 > N) {
                                if (N = mt(N - 256, h),
                                _ = bt(y.G[4], y.H[4], h),
                                S(h),
                                _ = vt(i, _ = mt(_, h)),
                                h.h)
                                    break;
                                if (f - n < _ || a - f < N)
                                    break t;
                                for (P = 0; P < N; ++P)
                                    r[f + P] = r[f + P - _];
                                for (f += N,
                                c += N; c >= i; )
                                    c -= i,
                                    ++u,
                                    null != s && u <= o && !(u % 16) && s(t, u);
                                if (e(f <= a),
                                c & b && (y = wt(l, c, u)),
                                null != v)
                                    for (; d < f; )
                                        N = r[d++],
                                        v.X[(506832829 * N & 4294967295) >>> v.Mb] = N
                            } else {
                                if (!(N < g))
                                    break t;
                                for (w = N - 280,
                                e(null != v); d < f; )
                                    N = r[d++],
                                    v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                                N = f,
                                e(!(w >>> (_ = v).Xa)),
                                r[N] = _.X[w],
                                w = !0
                            }
                            w || e(h.h == A(h))
                        }
                        if (t.Pb && h.h && f < a)
                            e(t.m.h),
                            t.a = 5,
                            t.m = t.wd,
                            t.$ = t.xd,
                            0 < t.s.ua && B(t.s.vb, t.s.Wa);
                        else {
                            if (h.h)
                                break t;
                            null != s && s(t, u > o ? o : u),
                            t.a = 0,
                            t.$ = f - n
                        }
                        return 1
                    }
                    return t.a = 3,
                    0
                }
                function Pt(t) {
                    e(null != t),
                    t.vc = null,
                    t.yc = null,
                    t.Ya = null;
                    var r = t.Wa;
                    null != r && (r.X = null),
                    t.vb = null,
                    e(null != t)
                }
                function kt() {
                    var e = new or;
                    return null == e ? null : (e.a = 0,
                    e.xb = gi,
                    rt("Predictor", "VP8LPredictors"),
                    rt("Predictor", "VP8LPredictors_C"),
                    rt("PredictorAdd", "VP8LPredictorsAdd"),
                    rt("PredictorAdd", "VP8LPredictorsAdd_C"),
                    Gr = G,
                    $r = J,
                    Qr = K,
                    tn = Z,
                    en = $,
                    rn = Q,
                    nn = tt,
                    t.VP8LMapColor32b = Jr,
                    t.VP8LMapColor8b = Kr,
                    e)
                }
                function It(t, r, n, s, u) {
                    var c = 1
                      , f = [t]
                      , p = [r]
                      , g = s.m
                      , m = s.s
                      , v = null
                      , b = 0;
                    t: for (; ; ) {
                        if (n)
                            for (; c && y(g, 1); ) {
                                var w = f
                                  , N = p
                                  , A = s
                                  , _ = 1
                                  , P = A.m
                                  , k = A.gc[A.ab]
                                  , I = y(P, 2);
                                if (A.Oc & 1 << I)
                                    c = 0;
                                else {
                                    switch (A.Oc |= 1 << I,
                                    k.hc = I,
                                    k.Ea = w[0],
                                    k.nc = N[0],
                                    k.K = [null],
                                    ++A.ab,
                                    e(4 >= A.ab),
                                    I) {
                                    case 0:
                                    case 1:
                                        k.b = y(P, 3) + 2,
                                        _ = It(q(k.Ea, k.b), q(k.nc, k.b), 0, A, k.K),
                                        k.K = k.K[0];
                                        break;
                                    case 3:
                                        var F, C = y(P, 8) + 1, j = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
                                        if (w[0] = q(k.Ea, j),
                                        k.b = j,
                                        F = _ = It(C, 1, 0, A, k.K)) {
                                            var B, M = C, E = k, R = 1 << (8 >> E.b), T = a(R);
                                            if (null == T)
                                                F = 0;
                                            else {
                                                var U = E.K[0]
                                                  , z = E.w;
                                                for (T[0] = E.K[0][0],
                                                B = 1; B < 1 * M; ++B)
                                                    T[B] = D(U[z + B], T[B - 1]);
                                                for (; B < 4 * R; ++B)
                                                    T[B] = 0;
                                                E.K[0] = null,
                                                E.K[0] = T,
                                                F = 1
                                            }
                                        }
                                        _ = F;
                                        break;
                                    case 2:
                                        break;
                                    default:
                                        e(0)
                                    }
                                    c = _
                                }
                            }
                        if (f = f[0],
                        p = p[0],
                        c && y(g, 1) && !(c = 1 <= (b = y(g, 4)) && 11 >= b)) {
                            s.a = 3;
                            break t
                        }
                        var H;
                        if (H = c)
                            e: {
                                var W, V, G, Y = s, J = f, X = p, K = b, Z = n, $ = Y.m, Q = Y.s, tt = [null], et = 1, rt = 0, nt = Qn[K];
                                r: for (; ; ) {
                                    if (Z && y($, 1)) {
                                        var it = y($, 3) + 2
                                          , at = q(J, it)
                                          , ot = q(X, it)
                                          , st = at * ot;
                                        if (!It(at, ot, 0, Y, tt))
                                            break r;
                                        for (tt = tt[0],
                                        Q.xc = it,
                                        W = 0; W < st; ++W) {
                                            var ut = tt[W] >> 8 & 65535;
                                            tt[W] = ut,
                                            ut >= et && (et = ut + 1)
                                        }
                                    }
                                    if ($.h)
                                        break r;
                                    for (V = 0; 5 > V; ++V) {
                                        var ct = Xn[V];
                                        !V && 0 < K && (ct += 1 << K),
                                        rt < ct && (rt = ct)
                                    }
                                    var ht = o(et * nt, l)
                                      , lt = et
                                      , ft = o(lt, d);
                                    if (null == ft)
                                        var dt = null;
                                    else
                                        e(65536 >= lt),
                                        dt = ft;
                                    var pt = a(rt);
                                    if (null == dt || null == pt || null == ht) {
                                        Y.a = 1;
                                        break r
                                    }
                                    var gt = ht;
                                    for (W = G = 0; W < et; ++W) {
                                        var mt = dt[W]
                                          , vt = mt.G
                                          , bt = mt.H
                                          , wt = 0
                                          , Nt = 1
                                          , Lt = 0;
                                        for (V = 0; 5 > V; ++V) {
                                            ct = Xn[V],
                                            vt[V] = gt,
                                            bt[V] = G,
                                            !V && 0 < K && (ct += 1 << K);
                                            n: {
                                                var At, xt = ct, St = Y, kt = pt, Ft = gt, Ct = G, jt = 0, Ot = St.m, Bt = y(Ot, 1);
                                                if (i(kt, 0, 0, xt),
                                                Bt) {
                                                    var Mt = y(Ot, 1) + 1
                                                      , Et = y(Ot, 1)
                                                      , qt = y(Ot, 0 == Et ? 1 : 8);
                                                    kt[qt] = 1,
                                                    2 == Mt && (kt[qt = y(Ot, 8)] = 1);
                                                    var Dt = 1
                                                } else {
                                                    var Rt = a(19)
                                                      , Tt = y(Ot, 4) + 4;
                                                    if (19 < Tt) {
                                                        St.a = 3;
                                                        var Ut = 0;
                                                        break n
                                                    }
                                                    for (At = 0; At < Tt; ++At)
                                                        Rt[Zn[At]] = y(Ot, 3);
                                                    var zt = void 0
                                                      , Ht = void 0
                                                      , Wt = St
                                                      , Vt = Rt
                                                      , Gt = xt
                                                      , Yt = kt
                                                      , Jt = 0
                                                      , Xt = Wt.m
                                                      , Kt = 8
                                                      , Zt = o(128, l);
                                                    i: for (; h(Zt, 0, 7, Vt, 19); ) {
                                                        if (y(Xt, 1)) {
                                                            var $t = 2 + 2 * y(Xt, 3);
                                                            if ((zt = 2 + y(Xt, $t)) > Gt)
                                                                break i
                                                        } else
                                                            zt = Gt;
                                                        for (Ht = 0; Ht < Gt && zt--; ) {
                                                            S(Xt);
                                                            var Qt = Zt[0 + (127 & L(Xt))];
                                                            x(Xt, Xt.u + Qt.g);
                                                            var te = Qt.value;
                                                            if (16 > te)
                                                                Yt[Ht++] = te,
                                                                0 != te && (Kt = te);
                                                            else {
                                                                var ee = 16 == te
                                                                  , re = te - 16
                                                                  , ne = Jn[re]
                                                                  , ie = y(Xt, Yn[re]) + ne;
                                                                if (Ht + ie > Gt)
                                                                    break i;
                                                                for (var ae = ee ? Kt : 0; 0 < ie--; )
                                                                    Yt[Ht++] = ae
                                                            }
                                                        }
                                                        Jt = 1;
                                                        break i
                                                    }
                                                    Jt || (Wt.a = 3),
                                                    Dt = Jt
                                                }
                                                (Dt = Dt && !Ot.h) && (jt = h(Ft, Ct, 8, kt, xt)),
                                                Dt && 0 != jt ? Ut = jt : (St.a = 3,
                                                Ut = 0)
                                            }
                                            if (0 == Ut)
                                                break r;
                                            if (Nt && 1 == Kn[V] && (Nt = 0 == gt[G].g),
                                            wt += gt[G].g,
                                            G += Ut,
                                            3 >= V) {
                                                var oe, se = pt[0];
                                                for (oe = 1; oe < ct; ++oe)
                                                    pt[oe] > se && (se = pt[oe]);
                                                Lt += se
                                            }
                                        }
                                        if (mt.nd = Nt,
                                        mt.Qb = 0,
                                        Nt && (mt.qb = (vt[3][bt[3] + 0].value << 24 | vt[1][bt[1] + 0].value << 16 | vt[2][bt[2] + 0].value) >>> 0,
                                        0 == wt && 256 > vt[0][bt[0] + 0].value && (mt.Qb = 1,
                                        mt.qb += vt[0][bt[0] + 0].value << 8)),
                                        mt.jc = !mt.Qb && 6 > Lt,
                                        mt.jc) {
                                            var ue, ce = mt;
                                            for (ue = 0; ue < Dr; ++ue) {
                                                var he = ue
                                                  , le = ce.pd[he]
                                                  , fe = ce.G[0][ce.H[0] + he];
                                                256 <= fe.value ? (le.g = fe.g + 256,
                                                le.value = fe.value) : (le.g = 0,
                                                le.value = 0,
                                                he >>= yt(fe, 8, le),
                                                he >>= yt(ce.G[1][ce.H[1] + he], 16, le),
                                                he >>= yt(ce.G[2][ce.H[2] + he], 0, le),
                                                yt(ce.G[3][ce.H[3] + he], 24, le))
                                            }
                                        }
                                    }
                                    Q.vc = tt,
                                    Q.Wb = et,
                                    Q.Ya = dt,
                                    Q.yc = ht,
                                    H = 1;
                                    break e
                                }
                                H = 0
                            }
                        if (!(c = H)) {
                            s.a = 3;
                            break t
                        }
                        if (0 < b) {
                            if (m.ua = 1 << b,
                            !O(m.Wa, b)) {
                                s.a = 1,
                                c = 0;
                                break t
                            }
                        } else
                            m.ua = 0;
                        var de = s
                          , pe = f
                          , ge = p
                          , me = de.s
                          , ve = me.xc;
                        if (de.c = pe,
                        de.i = ge,
                        me.md = q(pe, ve),
                        me.wc = 0 == ve ? -1 : (1 << ve) - 1,
                        n) {
                            s.xb = pi;
                            break t
                        }
                        if (null == (v = a(f * p))) {
                            s.a = 1,
                            c = 0;
                            break t
                        }
                        c = (c = _t(s, v, 0, f, p, p, null)) && !g.h;
                        break t
                    }
                    return c ? (null != u ? u[0] = v : (e(null == v),
                    e(n)),
                    s.$ = 0,
                    n || Pt(m)) : Pt(m),
                    c
                }
                function Ft(t, r) {
                    var n = t.c * t.i
                      , i = n + r + 16 * r;
                    return e(t.c <= r),
                    t.V = a(i),
                    null == t.V ? (t.Ta = null,
                    t.Ua = 0,
                    t.a = 1,
                    0) : (t.Ta = t.V,
                    t.Ua = t.Ba + n + r,
                    1)
                }
                function Ct(t, r) {
                    var n = t.C
                      , i = r - n
                      , a = t.V
                      , o = t.Ba + t.c * n;
                    for (e(r <= t.l.o); 0 < i; ) {
                        var s = 16 < i ? 16 : i
                          , u = t.l.ma
                          , c = t.l.width
                          , h = c * s
                          , l = u.ca
                          , f = u.tb + c * n
                          , d = t.Ta
                          , p = t.Ua;
                        Nt(t, s, a, o),
                        _n(d, p, l, f, h),
                        xt(u, n, n + s, l, f, c),
                        i -= s,
                        a += s * t.c,
                        n += s
                    }
                    e(n == r),
                    t.C = t.Ma = r
                }
                function jt() {
                    this.ub = this.yd = this.td = this.Rb = 0
                }
                function Ot() {
                    this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
                }
                function Bt() {
                    this.Fb = this.Bb = this.Cb = 0,
                    this.Zb = a(4),
                    this.Lb = a(4)
                }
                function Mt() {
                    this.Yb = function() {
                        var t = [];
                        return function t(e, r, n) {
                            for (var i = n[r], a = 0; a < i && (e.push(n.length > r + 1 ? [] : 0),
                            !(n.length < r + 1)); a++)
                                t(e[a], r + 1, n)
                        }(t, 0, [3, 11]),
                        t
                    }()
                }
                function Et() {
                    this.jb = a(3),
                    this.Wc = s([4, 8], Mt),
                    this.Xc = s([4, 17], Mt)
                }
                function qt() {
                    this.Pc = this.wb = this.Tb = this.zd = 0,
                    this.vd = new a(4),
                    this.od = new a(4)
                }
                function Dt() {
                    this.ld = this.La = this.dd = this.tc = 0
                }
                function Rt() {
                    this.Na = this.la = 0
                }
                function Tt() {
                    this.Sc = [0, 0],
                    this.Eb = [0, 0],
                    this.Qc = [0, 0],
                    this.ia = this.lc = 0
                }
                function Ut() {
                    this.ad = a(384),
                    this.Za = 0,
                    this.Ob = a(16),
                    this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
                }
                function zt() {
                    this.uc = this.M = this.Nb = 0,
                    this.wa = Array(new Dt),
                    this.Y = 0,
                    this.ya = Array(new Ut),
                    this.aa = 0,
                    this.l = new Gt
                }
                function Ht() {
                    this.y = a(16),
                    this.f = a(8),
                    this.ea = a(8)
                }
                function Wt() {
                    this.cb = this.a = 0,
                    this.sc = "",
                    this.m = new w,
                    this.Od = new jt,
                    this.Kc = new Ot,
                    this.ed = new qt,
                    this.Qa = new Bt,
                    this.Ic = this.$c = this.Aa = 0,
                    this.D = new zt,
                    this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0,
                    this.Jc = o(8, w),
                    this.ia = 0,
                    this.pb = o(4, Tt),
                    this.Pa = new Et,
                    this.Bd = this.kc = 0,
                    this.Ac = [],
                    this.Bc = 0,
                    this.zc = [0, 0, 0, 0],
                    this.Gd = Array(new Ht),
                    this.Hd = 0,
                    this.rb = Array(new Rt),
                    this.sb = 0,
                    this.wa = Array(new Dt),
                    this.Y = 0,
                    this.oc = [],
                    this.pc = 0,
                    this.sa = [],
                    this.ta = 0,
                    this.qa = [],
                    this.ra = 0,
                    this.Ha = [],
                    this.B = this.R = this.Ia = 0,
                    this.Ec = [],
                    this.M = this.ja = this.Vb = this.Fc = 0,
                    this.ya = Array(new Ut),
                    this.L = this.aa = 0,
                    this.gd = s([4, 2], Dt),
                    this.ga = null,
                    this.Fa = [],
                    this.Cc = this.qc = this.P = 0,
                    this.Gb = [],
                    this.Uc = 0,
                    this.mb = [],
                    this.nb = 0,
                    this.rc = [],
                    this.Ga = this.Vc = 0
                }
                function Vt(t, e) {
                    return 0 > t ? 0 : t > e ? e : t
                }
                function Gt() {
                    this.T = this.U = this.ka = this.height = this.width = 0,
                    this.y = [],
                    this.f = [],
                    this.ea = [],
                    this.Rc = this.fa = this.W = this.N = this.O = 0,
                    this.ma = "void",
                    this.put = "VP8IoPutHook",
                    this.ac = "VP8IoSetupHook",
                    this.bc = "VP8IoTeardownHook",
                    this.ha = this.Kb = 0,
                    this.data = [],
                    this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0,
                    this.F = [],
                    this.J = 0
                }
                function Yt() {
                    var t = new Wt;
                    return null != t && (t.a = 0,
                    t.sc = "OK",
                    t.cb = 0,
                    t.Xb = 0,
                    ni || (ni = Zt)),
                    t
                }
                function Jt(t, e, r) {
                    return 0 == t.a && (t.a = e,
                    t.sc = r,
                    t.cb = 0),
                    0
                }
                function Xt(t, e, r) {
                    return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2]
                }
                function Kt(t, r) {
                    if (null == t)
                        return 0;
                    if (t.a = 0,
                    t.sc = "OK",
                    null == r)
                        return Jt(t, 2, "null VP8Io passed to VP8GetHeaders()");
                    var n = r.data
                      , a = r.w
                      , o = r.ha;
                    if (4 > o)
                        return Jt(t, 7, "Truncated header.");
                    var s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16
                      , u = t.Od;
                    if (u.Rb = !(1 & s),
                    u.td = s >> 1 & 7,
                    u.yd = s >> 4 & 1,
                    u.ub = s >> 5,
                    3 < u.td)
                        return Jt(t, 3, "Incorrect keyframe parameters.");
                    if (!u.yd)
                        return Jt(t, 4, "Frame not displayable.");
                    a += 3,
                    o -= 3;
                    var c = t.Kc;
                    if (u.Rb) {
                        if (7 > o)
                            return Jt(t, 7, "cannot parse picture header");
                        if (!Xt(n, a, o))
                            return Jt(t, 3, "Bad code word");
                        c.c = 16383 & (n[a + 4] << 8 | n[a + 3]),
                        c.Td = n[a + 4] >> 6,
                        c.i = 16383 & (n[a + 6] << 8 | n[a + 5]),
                        c.Ud = n[a + 6] >> 6,
                        a += 7,
                        o -= 7,
                        t.za = c.c + 15 >> 4,
                        t.Ub = c.i + 15 >> 4,
                        r.width = c.c,
                        r.height = c.i,
                        r.Da = 0,
                        r.j = 0,
                        r.v = 0,
                        r.va = r.width,
                        r.o = r.height,
                        r.da = 0,
                        r.ib = r.width,
                        r.hb = r.height,
                        r.U = r.width,
                        r.T = r.height,
                        i((s = t.Pa).jb, 0, 255, s.jb.length),
                        e(null != (s = t.Qa)),
                        s.Cb = 0,
                        s.Bb = 0,
                        s.Fb = 1,
                        i(s.Zb, 0, 0, s.Zb.length),
                        i(s.Lb, 0, 0, s.Lb)
                    }
                    if (u.ub > o)
                        return Jt(t, 7, "bad partition length");
                    p(s = t.m, n, a, u.ub),
                    a += u.ub,
                    o -= u.ub,
                    u.Rb && (c.Ld = P(s),
                    c.Kd = P(s)),
                    c = t.Qa;
                    var h, l = t.Pa;
                    if (e(null != s),
                    e(null != c),
                    c.Cb = P(s),
                    c.Cb) {
                        if (c.Bb = P(s),
                        P(s)) {
                            for (c.Fb = P(s),
                            h = 0; 4 > h; ++h)
                                c.Zb[h] = P(s) ? m(s, 7) : 0;
                            for (h = 0; 4 > h; ++h)
                                c.Lb[h] = P(s) ? m(s, 6) : 0
                        }
                        if (c.Bb)
                            for (h = 0; 3 > h; ++h)
                                l.jb[h] = P(s) ? g(s, 8) : 255
                    } else
                        c.Bb = 0;
                    if (s.Ka)
                        return Jt(t, 3, "cannot parse segment header");
                    if ((c = t.ed).zd = P(s),
                    c.Tb = g(s, 6),
                    c.wb = g(s, 3),
                    c.Pc = P(s),
                    c.Pc && P(s)) {
                        for (l = 0; 4 > l; ++l)
                            P(s) && (c.vd[l] = m(s, 6));
                        for (l = 0; 4 > l; ++l)
                            P(s) && (c.od[l] = m(s, 6))
                    }
                    if (t.L = 0 == c.Tb ? 0 : c.zd ? 1 : 2,
                    s.Ka)
                        return Jt(t, 3, "cannot parse filter header");
                    var f = o;
                    if (o = h = a,
                    a = h + f,
                    c = f,
                    t.Xb = (1 << g(t.m, 2)) - 1,
                    f < 3 * (l = t.Xb))
                        n = 7;
                    else {
                        for (h += 3 * l,
                        c -= 3 * l,
                        f = 0; f < l; ++f) {
                            var d = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16;
                            d > c && (d = c),
                            p(t.Jc[+f], n, h, d),
                            h += d,
                            c -= d,
                            o += 3
                        }
                        p(t.Jc[+l], n, h, c),
                        n = h < a ? 0 : 5
                    }
                    if (0 != n)
                        return Jt(t, n, "cannot parse partitions");
                    for (n = g(h = t.m, 7),
                    o = P(h) ? m(h, 4) : 0,
                    a = P(h) ? m(h, 4) : 0,
                    c = P(h) ? m(h, 4) : 0,
                    l = P(h) ? m(h, 4) : 0,
                    h = P(h) ? m(h, 4) : 0,
                    f = t.Qa,
                    d = 0; 4 > d; ++d) {
                        if (f.Cb) {
                            var v = f.Zb[d];
                            f.Fb || (v += n)
                        } else {
                            if (0 < d) {
                                t.pb[d] = t.pb[0];
                                continue
                            }
                            v = n
                        }
                        var b = t.pb[d];
                        b.Sc[0] = ei[Vt(v + o, 127)],
                        b.Sc[1] = ri[Vt(v + 0, 127)],
                        b.Eb[0] = 2 * ei[Vt(v + a, 127)],
                        b.Eb[1] = 101581 * ri[Vt(v + c, 127)] >> 16,
                        8 > b.Eb[1] && (b.Eb[1] = 8),
                        b.Qc[0] = ei[Vt(v + l, 117)],
                        b.Qc[1] = ri[Vt(v + h, 127)],
                        b.lc = v + h
                    }
                    if (!u.Rb)
                        return Jt(t, 4, "Not a key frame.");
                    for (P(s),
                    u = t.Pa,
                    n = 0; 4 > n; ++n) {
                        for (o = 0; 8 > o; ++o)
                            for (a = 0; 3 > a; ++a)
                                for (c = 0; 11 > c; ++c)
                                    l = k(s, ci[n][o][a][c]) ? g(s, 8) : si[n][o][a][c],
                                    u.Wc[n][o].Yb[a][c] = l;
                        for (o = 0; 17 > o; ++o)
                            u.Xc[n][o] = u.Wc[n][hi[o]]
                    }
                    return t.kc = P(s),
                    t.kc && (t.Bd = g(s, 8)),
                    t.cb = 1
                }
                function Zt(t, e, r, n, i, a, o) {
                    var s = e[i].Yb[r];
                    for (r = 0; 16 > i; ++i) {
                        if (!k(t, s[r + 0]))
                            return i;
                        for (; !k(t, s[r + 1]); )
                            if (s = e[++i].Yb[0],
                            r = 0,
                            16 == i)
                                return 16;
                        var u = e[i + 1].Yb;
                        if (k(t, s[r + 2])) {
                            var c = t
                              , h = 0;
                            if (k(c, (f = s)[(l = r) + 3]))
                                if (k(c, f[l + 6])) {
                                    for (s = 0,
                                    l = 2 * (h = k(c, f[l + 8])) + (f = k(c, f[l + 9 + h])),
                                    h = 0,
                                    f = ii[l]; f[s]; ++s)
                                        h += h + k(c, f[s]);
                                    h += 3 + (8 << l)
                                } else
                                    k(c, f[l + 7]) ? (h = 7 + 2 * k(c, 165),
                                    h += k(c, 145)) : h = 5 + k(c, 159);
                            else
                                h = k(c, f[l + 4]) ? 3 + k(c, f[l + 5]) : 2;
                            s = u[2]
                        } else
                            h = 1,
                            s = u[1];
                        u = o + ai[i],
                        0 > (c = t).b && _(c);
                        var l, f = c.b, d = (l = c.Ca >> 1) - (c.I >> f) >> 31;
                        --c.b,
                        c.Ca += d,
                        c.Ca |= 1,
                        c.I -= (l + 1 & d) << f,
                        a[u] = ((h ^ d) - d) * n[(0 < i) + 0]
                    }
                    return 16
                }
                function $t(t) {
                    var e = t.rb[t.sb - 1];
                    e.la = 0,
                    e.Na = 0,
                    i(t.zc, 0, 0, t.zc.length),
                    t.ja = 0
                }
                function Qt(t, r) {
                    if (null == t)
                        return 0;
                    if (null == r)
                        return Jt(t, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!t.cb && !Kt(t, r))
                        return 0;
                    if (e(t.cb),
                    null == r.ac || r.ac(r)) {
                        r.ob && (t.L = 0);
                        var s = Ri[t.L];
                        if (2 == t.L ? (t.yb = 0,
                        t.zb = 0) : (t.yb = r.v - s >> 4,
                        t.zb = r.j - s >> 4,
                        0 > t.yb && (t.yb = 0),
                        0 > t.zb && (t.zb = 0)),
                        t.Va = r.o + 15 + s >> 4,
                        t.Hb = r.va + 15 + s >> 4,
                        t.Hb > t.za && (t.Hb = t.za),
                        t.Va > t.Ub && (t.Va = t.Ub),
                        0 < t.L) {
                            var u = t.ed;
                            for (s = 0; 4 > s; ++s) {
                                var c;
                                if (t.Qa.Cb) {
                                    var h = t.Qa.Lb[s];
                                    t.Qa.Fb || (h += u.Tb)
                                } else
                                    h = u.Tb;
                                for (c = 0; 1 >= c; ++c) {
                                    var l = t.gd[s][c]
                                      , f = h;
                                    if (u.Pc && (f += u.vd[0],
                                    c && (f += u.od[0])),
                                    0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
                                        var d = f;
                                        0 < u.wb && (d = 4 < u.wb ? d >> 2 : d >> 1) > 9 - u.wb && (d = 9 - u.wb),
                                        1 > d && (d = 1),
                                        l.dd = d,
                                        l.tc = 2 * f + d,
                                        l.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0
                                    } else
                                        l.tc = 0;
                                    l.La = c
                                }
                            }
                        }
                        s = 0
                    } else
                        Jt(t, 6, "Frame setup failed"),
                        s = t.a;
                    if (s = 0 == s) {
                        if (s) {
                            t.$c = 0,
                            0 < t.Aa || (t.Ic = Ui);
                            t: {
                                s = t.Ic,
                                u = 4 * (d = t.za);
                                var p = 32 * d
                                  , g = d + 1
                                  , m = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0
                                  , v = (2 == t.Aa ? 2 : 1) * d;
                                if ((l = u + 832 + (c = 3 * (16 * s + Ri[t.L]) / 2 * p) + (h = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != l)
                                    s = 0;
                                else {
                                    if (l > t.Vb) {
                                        if (t.Vb = 0,
                                        t.Ec = a(l),
                                        t.Fc = 0,
                                        null == t.Ec) {
                                            s = Jt(t, 1, "no memory during frame initialization.");
                                            break t
                                        }
                                        t.Vb = l
                                    }
                                    l = t.Ec,
                                    f = t.Fc,
                                    t.Ac = l,
                                    t.Bc = f,
                                    f += u,
                                    t.Gd = o(p, Ht),
                                    t.Hd = 0,
                                    t.rb = o(g + 1, Rt),
                                    t.sb = 1,
                                    t.wa = m ? o(m, Dt) : null,
                                    t.Y = 0,
                                    t.D.Nb = 0,
                                    t.D.wa = t.wa,
                                    t.D.Y = t.Y,
                                    0 < t.Aa && (t.D.Y += d),
                                    e(!0),
                                    t.oc = l,
                                    t.pc = f,
                                    f += 832,
                                    t.ya = o(v, Ut),
                                    t.aa = 0,
                                    t.D.ya = t.ya,
                                    t.D.aa = t.aa,
                                    2 == t.Aa && (t.D.aa += d),
                                    t.R = 16 * d,
                                    t.B = 8 * d,
                                    d = (p = Ri[t.L]) * t.R,
                                    p = p / 2 * t.B,
                                    t.sa = l,
                                    t.ta = f + d,
                                    t.qa = t.sa,
                                    t.ra = t.ta + 16 * s * t.R + p,
                                    t.Ha = t.qa,
                                    t.Ia = t.ra + 8 * s * t.B + p,
                                    t.$c = 0,
                                    f += c,
                                    t.mb = h ? l : null,
                                    t.nb = h ? f : null,
                                    e(f + h <= t.Fc + t.Vb),
                                    $t(t),
                                    i(t.Ac, t.Bc, 0, u),
                                    s = 1
                                }
                            }
                            if (s) {
                                if (r.ka = 0,
                                r.y = t.sa,
                                r.O = t.ta,
                                r.f = t.qa,
                                r.N = t.ra,
                                r.ea = t.Ha,
                                r.Vd = t.Ia,
                                r.fa = t.R,
                                r.Rc = t.B,
                                r.F = null,
                                r.J = 0,
                                !Cn) {
                                    for (s = -255; 255 >= s; ++s)
                                        Pn[255 + s] = 0 > s ? -s : s;
                                    for (s = -1020; 1020 >= s; ++s)
                                        kn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                                    for (s = -112; 112 >= s; ++s)
                                        In[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                                    for (s = -255; 510 >= s; ++s)
                                        Fn[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                                    Cn = 1
                                }
                                an = ce,
                                on = ae,
                                un = oe,
                                cn = se,
                                hn = ue,
                                sn = ie,
                                ln = Je,
                                fn = Xe,
                                dn = $e,
                                pn = Qe,
                                gn = Ke,
                                mn = Ze,
                                vn = tr,
                                bn = er,
                                yn = ze,
                                wn = He,
                                Nn = We,
                                Ln = Ve,
                                fi[0] = xe,
                                fi[1] = le,
                                fi[2] = Le,
                                fi[3] = Ae,
                                fi[4] = Se,
                                fi[5] = Pe,
                                fi[6] = _e,
                                fi[7] = ke,
                                fi[8] = Fe,
                                fi[9] = Ie,
                                li[0] = ve,
                                li[1] = de,
                                li[2] = pe,
                                li[3] = ge,
                                li[4] = be,
                                li[5] = ye,
                                li[6] = we,
                                di[0] = Be,
                                di[1] = fe,
                                di[2] = Ce,
                                di[3] = je,
                                di[4] = Ee,
                                di[5] = Me,
                                di[6] = qe,
                                s = 1
                            } else
                                s = 0
                        }
                        s && (s = function(t, r) {
                            for (t.M = 0; t.M < t.Va; ++t.M) {
                                var o, s = t.Jc[t.M & t.Xb], u = t.m, c = t;
                                for (o = 0; o < c.za; ++o) {
                                    var h = u
                                      , l = c
                                      , f = l.Ac
                                      , d = l.Bc + 4 * o
                                      , p = l.zc
                                      , g = l.ya[l.aa + o];
                                    if (l.Qa.Bb ? g.$b = k(h, l.Pa.jb[0]) ? 2 + k(h, l.Pa.jb[2]) : k(h, l.Pa.jb[1]) : g.$b = 0,
                                    l.kc && (g.Ad = k(h, l.Bd)),
                                    g.Za = !k(h, 145) + 0,
                                    g.Za) {
                                        var m = g.Ob
                                          , v = 0;
                                        for (l = 0; 4 > l; ++l) {
                                            var b, y = p[0 + l];
                                            for (b = 0; 4 > b; ++b) {
                                                y = ui[f[d + b]][y];
                                                for (var w = oi[k(h, y[0])]; 0 < w; )
                                                    w = oi[2 * w + k(h, y[w])];
                                                y = -w,
                                                f[d + b] = y
                                            }
                                            n(m, v, f, d, 4),
                                            v += 4,
                                            p[0 + l] = y
                                        }
                                    } else
                                        y = k(h, 156) ? k(h, 128) ? 1 : 3 : k(h, 163) ? 2 : 0,
                                        g.Ob[0] = y,
                                        i(f, d, y, 4),
                                        i(p, 0, y, 4);
                                    g.Dd = k(h, 142) ? k(h, 114) ? k(h, 183) ? 1 : 3 : 2 : 0
                                }
                                if (c.m.Ka)
                                    return Jt(t, 7, "Premature end-of-partition0 encountered.");
                                for (; t.ja < t.za; ++t.ja) {
                                    if (c = s,
                                    h = (u = t).rb[u.sb - 1],
                                    f = u.rb[u.sb + u.ja],
                                    o = u.ya[u.aa + u.ja],
                                    d = u.kc ? o.Ad : 0)
                                        h.la = f.la = 0,
                                        o.Za || (h.Na = f.Na = 0),
                                        o.Hc = 0,
                                        o.Gc = 0,
                                        o.ia = 0;
                                    else {
                                        var N, L;
                                        if (h = f,
                                        f = c,
                                        d = u.Pa.Xc,
                                        p = u.ya[u.aa + u.ja],
                                        g = u.pb[p.$b],
                                        l = p.ad,
                                        m = 0,
                                        v = u.rb[u.sb - 1],
                                        y = b = 0,
                                        i(l, m, 0, 384),
                                        p.Za)
                                            var A = 0
                                              , x = d[3];
                                        else {
                                            w = a(16);
                                            var S = h.Na + v.Na;
                                            if (S = ni(f, d[1], S, g.Eb, 0, w, 0),
                                            h.Na = v.Na = (0 < S) + 0,
                                            1 < S)
                                                an(w, 0, l, m);
                                            else {
                                                var _ = w[0] + 3 >> 3;
                                                for (w = 0; 256 > w; w += 16)
                                                    l[m + w] = _
                                            }
                                            A = 1,
                                            x = d[0]
                                        }
                                        var P = 15 & h.la
                                          , I = 15 & v.la;
                                        for (w = 0; 4 > w; ++w) {
                                            var F = 1 & I;
                                            for (_ = L = 0; 4 > _; ++_)
                                                P = P >> 1 | (F = (S = ni(f, x, S = F + (1 & P), g.Sc, A, l, m)) > A) << 7,
                                                L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]),
                                                m += 16;
                                            P >>= 4,
                                            I = I >> 1 | F << 7,
                                            b = (b << 8 | L) >>> 0
                                        }
                                        for (x = P,
                                        A = I >> 4,
                                        N = 0; 4 > N; N += 2) {
                                            for (L = 0,
                                            P = h.la >> 4 + N,
                                            I = v.la >> 4 + N,
                                            w = 0; 2 > w; ++w) {
                                                for (F = 1 & I,
                                                _ = 0; 2 > _; ++_)
                                                    S = F + (1 & P),
                                                    P = P >> 1 | (F = 0 < (S = ni(f, d[2], S, g.Qc, 0, l, m))) << 3,
                                                    L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]),
                                                    m += 16;
                                                P >>= 2,
                                                I = I >> 1 | F << 5
                                            }
                                            y |= L << 4 * N,
                                            x |= P << 4 << N,
                                            A |= (240 & I) << N
                                        }
                                        h.la = x,
                                        v.la = A,
                                        p.Hc = b,
                                        p.Gc = y,
                                        p.ia = 43690 & y ? 0 : g.ia,
                                        d = !(b | y)
                                    }
                                    if (0 < u.L && (u.wa[u.Y + u.ja] = u.gd[o.$b][o.Za],
                                    u.wa[u.Y + u.ja].La |= !d),
                                    c.Ka)
                                        return Jt(t, 7, "Premature end-of-file encountered.")
                                }
                                if ($t(t),
                                u = r,
                                c = 1,
                                o = (s = t).D,
                                h = 0 < s.L && s.M >= s.zb && s.M <= s.Va,
                                0 == s.Aa)
                                    t: {
                                        if (o.M = s.M,
                                        o.uc = h,
                                        Or(s, o),
                                        c = 1,
                                        o = (L = s.D).Nb,
                                        h = (y = Ri[s.L]) * s.R,
                                        f = y / 2 * s.B,
                                        w = 16 * o * s.R,
                                        _ = 8 * o * s.B,
                                        d = s.sa,
                                        p = s.ta - h + w,
                                        g = s.qa,
                                        l = s.ra - f + _,
                                        m = s.Ha,
                                        v = s.Ia - f + _,
                                        I = 0 == (P = L.M),
                                        b = P >= s.Va - 1,
                                        2 == s.Aa && Or(s, L),
                                        L.uc)
                                            for (F = (S = s).D.M,
                                            e(S.D.uc),
                                            L = S.yb; L < S.Hb; ++L) {
                                                A = L,
                                                x = F;
                                                var C = (j = (U = S).D).Nb;
                                                N = U.R;
                                                var j = j.wa[j.Y + A]
                                                  , O = U.sa
                                                  , B = U.ta + 16 * C * N + 16 * A
                                                  , M = j.dd
                                                  , E = j.tc;
                                                if (0 != E)
                                                    if (e(3 <= E),
                                                    1 == U.L)
                                                        0 < A && wn(O, B, N, E + 4),
                                                        j.La && Ln(O, B, N, E),
                                                        0 < x && yn(O, B, N, E + 4),
                                                        j.La && Nn(O, B, N, E);
                                                    else {
                                                        var q = U.B
                                                          , D = U.qa
                                                          , R = U.ra + 8 * C * q + 8 * A
                                                          , T = U.Ha
                                                          , U = U.Ia + 8 * C * q + 8 * A;
                                                        C = j.ld,
                                                        0 < A && (fn(O, B, N, E + 4, M, C),
                                                        pn(D, R, T, U, q, E + 4, M, C)),
                                                        j.La && (mn(O, B, N, E, M, C),
                                                        bn(D, R, T, U, q, E, M, C)),
                                                        0 < x && (ln(O, B, N, E + 4, M, C),
                                                        dn(D, R, T, U, q, E + 4, M, C)),
                                                        j.La && (gn(O, B, N, E, M, C),
                                                        vn(D, R, T, U, q, E, M, C))
                                                    }
                                            }
                                        if (s.ia && alert("todo:DitherRow"),
                                        null != u.put) {
                                            if (L = 16 * P,
                                            P = 16 * (P + 1),
                                            I ? (u.y = s.sa,
                                            u.O = s.ta + w,
                                            u.f = s.qa,
                                            u.N = s.ra + _,
                                            u.ea = s.Ha,
                                            u.W = s.Ia + _) : (L -= y,
                                            u.y = d,
                                            u.O = p,
                                            u.f = g,
                                            u.N = l,
                                            u.ea = m,
                                            u.W = v),
                                            b || (P -= y),
                                            P > u.o && (P = u.o),
                                            u.F = null,
                                            u.J = null,
                                            null != s.Fa && 0 < s.Fa.length && L < P && (u.J = lr(s, u, L, P - L),
                                            u.F = s.mb,
                                            null == u.F && 0 == u.F.length)) {
                                                c = Jt(s, 3, "Could not decode alpha data.");
                                                break t
                                            }
                                            L < u.j && (y = u.j - L,
                                            L = u.j,
                                            e(!(1 & y)),
                                            u.O += s.R * y,
                                            u.N += s.B * (y >> 1),
                                            u.W += s.B * (y >> 1),
                                            null != u.F && (u.J += u.width * y)),
                                            L < P && (u.O += u.v,
                                            u.N += u.v >> 1,
                                            u.W += u.v >> 1,
                                            null != u.F && (u.J += u.v),
                                            u.ka = L - u.j,
                                            u.U = u.va - u.v,
                                            u.T = P - L,
                                            c = u.put(u))
                                        }
                                        o + 1 != s.Ic || b || (n(s.sa, s.ta - h, d, p + 16 * s.R, h),
                                        n(s.qa, s.ra - f, g, l + 8 * s.B, f),
                                        n(s.Ha, s.Ia - f, m, v + 8 * s.B, f))
                                    }
                                if (!c)
                                    return Jt(t, 6, "Output aborted.")
                            }
                            return 1
                        }(t, r)),
                        null != r.bc && r.bc(r),
                        s &= 1
                    }
                    return s ? (t.cb = 0,
                    s) : 0
                }
                function te(t, e, r, n, i) {
                    i = t[e + r + 32 * n] + (i >> 3),
                    t[e + r + 32 * n] = -256 & i ? 0 > i ? 0 : 255 : i
                }
                function ee(t, e, r, n, i, a) {
                    te(t, e, 0, r, n + i),
                    te(t, e, 1, r, n + a),
                    te(t, e, 2, r, n - a),
                    te(t, e, 3, r, n - i)
                }
                function re(t) {
                    return (20091 * t >> 16) + t
                }
                function ne(t, e, r, n) {
                    var i, o = 0, s = a(16);
                    for (i = 0; 4 > i; ++i) {
                        var u = t[e + 0] + t[e + 8]
                          , c = t[e + 0] - t[e + 8]
                          , h = (35468 * t[e + 4] >> 16) - re(t[e + 12])
                          , l = re(t[e + 4]) + (35468 * t[e + 12] >> 16);
                        s[o + 0] = u + l,
                        s[o + 1] = c + h,
                        s[o + 2] = c - h,
                        s[o + 3] = u - l,
                        o += 4,
                        e++
                    }
                    for (i = o = 0; 4 > i; ++i)
                        u = (t = s[o + 0] + 4) + s[o + 8],
                        c = t - s[o + 8],
                        h = (35468 * s[o + 4] >> 16) - re(s[o + 12]),
                        te(r, n, 0, 0, u + (l = re(s[o + 4]) + (35468 * s[o + 12] >> 16))),
                        te(r, n, 1, 0, c + h),
                        te(r, n, 2, 0, c - h),
                        te(r, n, 3, 0, u - l),
                        o++,
                        n += 32
                }
                function ie(t, e, r, n) {
                    var i = t[e + 0] + 4
                      , a = 35468 * t[e + 4] >> 16
                      , o = re(t[e + 4])
                      , s = 35468 * t[e + 1] >> 16;
                    ee(r, n, 0, i + o, t = re(t[e + 1]), s),
                    ee(r, n, 1, i + a, t, s),
                    ee(r, n, 2, i - a, t, s),
                    ee(r, n, 3, i - o, t, s)
                }
                function ae(t, e, r, n, i) {
                    ne(t, e, r, n),
                    i && ne(t, e + 16, r, n + 4)
                }
                function oe(t, e, r, n) {
                    on(t, e + 0, r, n, 1),
                    on(t, e + 32, r, n + 128, 1)
                }
                function se(t, e, r, n) {
                    var i;
                    for (t = t[e + 0] + 4,
                    i = 0; 4 > i; ++i)
                        for (e = 0; 4 > e; ++e)
                            te(r, n, e, i, t)
                }
                function ue(t, e, r, n) {
                    t[e + 0] && cn(t, e + 0, r, n),
                    t[e + 16] && cn(t, e + 16, r, n + 4),
                    t[e + 32] && cn(t, e + 32, r, n + 128),
                    t[e + 48] && cn(t, e + 48, r, n + 128 + 4)
                }
                function ce(t, e, r, n) {
                    var i, o = a(16);
                    for (i = 0; 4 > i; ++i) {
                        var s = t[e + 0 + i] + t[e + 12 + i]
                          , u = t[e + 4 + i] + t[e + 8 + i]
                          , c = t[e + 4 + i] - t[e + 8 + i]
                          , h = t[e + 0 + i] - t[e + 12 + i];
                        o[0 + i] = s + u,
                        o[8 + i] = s - u,
                        o[4 + i] = h + c,
                        o[12 + i] = h - c
                    }
                    for (i = 0; 4 > i; ++i)
                        s = (t = o[0 + 4 * i] + 3) + o[3 + 4 * i],
                        u = o[1 + 4 * i] + o[2 + 4 * i],
                        c = o[1 + 4 * i] - o[2 + 4 * i],
                        h = t - o[3 + 4 * i],
                        r[n + 0] = s + u >> 3,
                        r[n + 16] = h + c >> 3,
                        r[n + 32] = s - u >> 3,
                        r[n + 48] = h - c >> 3,
                        n += 64
                }
                function he(t, e, r) {
                    var n, i = e - 32, a = Bn, o = 255 - t[i - 1];
                    for (n = 0; n < r; ++n) {
                        var s, u = a, c = o + t[e - 1];
                        for (s = 0; s < r; ++s)
                            t[e + s] = u[c + t[i + s]];
                        e += 32
                    }
                }
                function le(t, e) {
                    he(t, e, 4)
                }
                function fe(t, e) {
                    he(t, e, 8)
                }
                function de(t, e) {
                    he(t, e, 16)
                }
                function pe(t, e) {
                    var r;
                    for (r = 0; 16 > r; ++r)
                        n(t, e + 32 * r, t, e - 32, 16)
                }
                function ge(t, e) {
                    var r;
                    for (r = 16; 0 < r; --r)
                        i(t, e, t[e - 1], 16),
                        e += 32
                }
                function me(t, e, r) {
                    var n;
                    for (n = 0; 16 > n; ++n)
                        i(e, r + 32 * n, t, 16)
                }
                function ve(t, e) {
                    var r, n = 16;
                    for (r = 0; 16 > r; ++r)
                        n += t[e - 1 + 32 * r] + t[e + r - 32];
                    me(n >> 5, t, e)
                }
                function be(t, e) {
                    var r, n = 8;
                    for (r = 0; 16 > r; ++r)
                        n += t[e - 1 + 32 * r];
                    me(n >> 4, t, e)
                }
                function ye(t, e) {
                    var r, n = 8;
                    for (r = 0; 16 > r; ++r)
                        n += t[e + r - 32];
                    me(n >> 4, t, e)
                }
                function we(t, e) {
                    me(128, t, e)
                }
                function Ne(t, e, r) {
                    return t + 2 * e + r + 2 >> 2
                }
                function Le(t, e) {
                    var r, i = e - 32;
                    for (i = new Uint8Array([Ne(t[i - 1], t[i + 0], t[i + 1]), Ne(t[i + 0], t[i + 1], t[i + 2]), Ne(t[i + 1], t[i + 2], t[i + 3]), Ne(t[i + 2], t[i + 3], t[i + 4])]),
                    r = 0; 4 > r; ++r)
                        n(t, e + 32 * r, i, 0, i.length)
                }
                function Ae(t, e) {
                    var r = t[e - 1]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96];
                    I(t, e + 0, 16843009 * Ne(t[e - 1 - 32], r, n)),
                    I(t, e + 32, 16843009 * Ne(r, n, i)),
                    I(t, e + 64, 16843009 * Ne(n, i, a)),
                    I(t, e + 96, 16843009 * Ne(i, a, a))
                }
                function xe(t, e) {
                    var r, n = 4;
                    for (r = 0; 4 > r; ++r)
                        n += t[e + r - 32] + t[e - 1 + 32 * r];
                    for (n >>= 3,
                    r = 0; 4 > r; ++r)
                        i(t, e + 32 * r, n, 4)
                }
                function Se(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 - 32]
                      , o = t[e + 0 - 32]
                      , s = t[e + 1 - 32]
                      , u = t[e + 2 - 32]
                      , c = t[e + 3 - 32];
                    t[e + 0 + 96] = Ne(n, i, t[e - 1 + 96]),
                    t[e + 1 + 96] = t[e + 0 + 64] = Ne(r, n, i),
                    t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = Ne(a, r, n),
                    t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = Ne(o, a, r),
                    t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = Ne(s, o, a),
                    t[e + 3 + 32] = t[e + 2 + 0] = Ne(u, s, o),
                    t[e + 3 + 0] = Ne(c, u, s)
                }
                function _e(t, e) {
                    var r = t[e + 1 - 32]
                      , n = t[e + 2 - 32]
                      , i = t[e + 3 - 32]
                      , a = t[e + 4 - 32]
                      , o = t[e + 5 - 32]
                      , s = t[e + 6 - 32]
                      , u = t[e + 7 - 32];
                    t[e + 0 + 0] = Ne(t[e + 0 - 32], r, n),
                    t[e + 1 + 0] = t[e + 0 + 32] = Ne(r, n, i),
                    t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = Ne(n, i, a),
                    t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = Ne(i, a, o),
                    t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = Ne(a, o, s),
                    t[e + 3 + 64] = t[e + 2 + 96] = Ne(o, s, u),
                    t[e + 3 + 96] = Ne(s, u, u)
                }
                function Pe(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 - 32]
                      , o = t[e + 0 - 32]
                      , s = t[e + 1 - 32]
                      , u = t[e + 2 - 32]
                      , c = t[e + 3 - 32];
                    t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1,
                    t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1,
                    t[e + 2 + 0] = t[e + 3 + 64] = s + u + 1 >> 1,
                    t[e + 3 + 0] = u + c + 1 >> 1,
                    t[e + 0 + 96] = Ne(i, n, r),
                    t[e + 0 + 64] = Ne(n, r, a),
                    t[e + 0 + 32] = t[e + 1 + 96] = Ne(r, a, o),
                    t[e + 1 + 32] = t[e + 2 + 96] = Ne(a, o, s),
                    t[e + 2 + 32] = t[e + 3 + 96] = Ne(o, s, u),
                    t[e + 3 + 32] = Ne(s, u, c)
                }
                function ke(t, e) {
                    var r = t[e + 0 - 32]
                      , n = t[e + 1 - 32]
                      , i = t[e + 2 - 32]
                      , a = t[e + 3 - 32]
                      , o = t[e + 4 - 32]
                      , s = t[e + 5 - 32]
                      , u = t[e + 6 - 32]
                      , c = t[e + 7 - 32];
                    t[e + 0 + 0] = r + n + 1 >> 1,
                    t[e + 1 + 0] = t[e + 0 + 64] = n + i + 1 >> 1,
                    t[e + 2 + 0] = t[e + 1 + 64] = i + a + 1 >> 1,
                    t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1,
                    t[e + 0 + 32] = Ne(r, n, i),
                    t[e + 1 + 32] = t[e + 0 + 96] = Ne(n, i, a),
                    t[e + 2 + 32] = t[e + 1 + 96] = Ne(i, a, o),
                    t[e + 3 + 32] = t[e + 2 + 96] = Ne(a, o, s),
                    t[e + 3 + 64] = Ne(o, s, u),
                    t[e + 3 + 96] = Ne(s, u, c)
                }
                function Ie(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96];
                    t[e + 0 + 0] = r + n + 1 >> 1,
                    t[e + 2 + 0] = t[e + 0 + 32] = n + i + 1 >> 1,
                    t[e + 2 + 32] = t[e + 0 + 64] = i + a + 1 >> 1,
                    t[e + 1 + 0] = Ne(r, n, i),
                    t[e + 3 + 0] = t[e + 1 + 32] = Ne(n, i, a),
                    t[e + 3 + 32] = t[e + 1 + 64] = Ne(i, a, a),
                    t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a
                }
                function Fe(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96]
                      , o = t[e - 1 - 32]
                      , s = t[e + 0 - 32]
                      , u = t[e + 1 - 32]
                      , c = t[e + 2 - 32];
                    t[e + 0 + 0] = t[e + 2 + 32] = r + o + 1 >> 1,
                    t[e + 0 + 32] = t[e + 2 + 64] = n + r + 1 >> 1,
                    t[e + 0 + 64] = t[e + 2 + 96] = i + n + 1 >> 1,
                    t[e + 0 + 96] = a + i + 1 >> 1,
                    t[e + 3 + 0] = Ne(s, u, c),
                    t[e + 2 + 0] = Ne(o, s, u),
                    t[e + 1 + 0] = t[e + 3 + 32] = Ne(r, o, s),
                    t[e + 1 + 32] = t[e + 3 + 64] = Ne(n, r, o),
                    t[e + 1 + 64] = t[e + 3 + 96] = Ne(i, n, r),
                    t[e + 1 + 96] = Ne(a, i, n)
                }
                function Ce(t, e) {
                    var r;
                    for (r = 0; 8 > r; ++r)
                        n(t, e + 32 * r, t, e - 32, 8)
                }
                function je(t, e) {
                    var r;
                    for (r = 0; 8 > r; ++r)
                        i(t, e, t[e - 1], 8),
                        e += 32
                }
                function Oe(t, e, r) {
                    var n;
                    for (n = 0; 8 > n; ++n)
                        i(e, r + 32 * n, t, 8)
                }
                function Be(t, e) {
                    var r, n = 8;
                    for (r = 0; 8 > r; ++r)
                        n += t[e + r - 32] + t[e - 1 + 32 * r];
                    Oe(n >> 4, t, e)
                }
                function Me(t, e) {
                    var r, n = 4;
                    for (r = 0; 8 > r; ++r)
                        n += t[e + r - 32];
                    Oe(n >> 3, t, e)
                }
                function Ee(t, e) {
                    var r, n = 4;
                    for (r = 0; 8 > r; ++r)
                        n += t[e - 1 + 32 * r];
                    Oe(n >> 3, t, e)
                }
                function qe(t, e) {
                    Oe(128, t, e)
                }
                function De(t, e, r) {
                    var n = t[e - r]
                      , i = t[e + 0]
                      , a = 3 * (i - n) + jn[1020 + t[e - 2 * r] - t[e + r]]
                      , o = On[112 + (a + 4 >> 3)];
                    t[e - r] = Bn[255 + n + On[112 + (a + 3 >> 3)]],
                    t[e + 0] = Bn[255 + i - o]
                }
                function Re(t, e, r, n) {
                    var i = t[e + 0]
                      , a = t[e + r];
                    return Mn[255 + t[e - 2 * r] - t[e - r]] > n || Mn[255 + a - i] > n
                }
                function Te(t, e, r, n) {
                    return 4 * Mn[255 + t[e - r] - t[e + 0]] + Mn[255 + t[e - 2 * r] - t[e + r]] <= n
                }
                function Ue(t, e, r, n, i) {
                    var a = t[e - 3 * r]
                      , o = t[e - 2 * r]
                      , s = t[e - r]
                      , u = t[e + 0]
                      , c = t[e + r]
                      , h = t[e + 2 * r]
                      , l = t[e + 3 * r];
                    return 4 * Mn[255 + s - u] + Mn[255 + o - c] > n ? 0 : Mn[255 + t[e - 4 * r] - a] <= i && Mn[255 + a - o] <= i && Mn[255 + o - s] <= i && Mn[255 + l - h] <= i && Mn[255 + h - c] <= i && Mn[255 + c - u] <= i
                }
                function ze(t, e, r, n) {
                    var i = 2 * n + 1;
                    for (n = 0; 16 > n; ++n)
                        Te(t, e + n, r, i) && De(t, e + n, r)
                }
                function He(t, e, r, n) {
                    var i = 2 * n + 1;
                    for (n = 0; 16 > n; ++n)
                        Te(t, e + n * r, 1, i) && De(t, e + n * r, 1)
                }
                function We(t, e, r, n) {
                    var i;
                    for (i = 3; 0 < i; --i)
                        ze(t, e += 4 * r, r, n)
                }
                function Ve(t, e, r, n) {
                    var i;
                    for (i = 3; 0 < i; --i)
                        He(t, e += 4, r, n)
                }
                function Ge(t, e, r, n, i, a, o, s) {
                    for (a = 2 * a + 1; 0 < i--; ) {
                        if (Ue(t, e, r, a, o))
                            if (Re(t, e, r, s))
                                De(t, e, r);
                            else {
                                var u = t
                                  , c = e
                                  , h = r
                                  , l = u[c - 2 * h]
                                  , f = u[c - h]
                                  , d = u[c + 0]
                                  , p = u[c + h]
                                  , g = u[c + 2 * h]
                                  , m = 27 * (b = jn[1020 + 3 * (d - f) + jn[1020 + l - p]]) + 63 >> 7
                                  , v = 18 * b + 63 >> 7
                                  , b = 9 * b + 63 >> 7;
                                u[c - 3 * h] = Bn[255 + u[c - 3 * h] + b],
                                u[c - 2 * h] = Bn[255 + l + v],
                                u[c - h] = Bn[255 + f + m],
                                u[c + 0] = Bn[255 + d - m],
                                u[c + h] = Bn[255 + p - v],
                                u[c + 2 * h] = Bn[255 + g - b]
                            }
                        e += n
                    }
                }
                function Ye(t, e, r, n, i, a, o, s) {
                    for (a = 2 * a + 1; 0 < i--; ) {
                        if (Ue(t, e, r, a, o))
                            if (Re(t, e, r, s))
                                De(t, e, r);
                            else {
                                var u = t
                                  , c = e
                                  , h = r
                                  , l = u[c - h]
                                  , f = u[c + 0]
                                  , d = u[c + h]
                                  , p = On[112 + (4 + (g = 3 * (f - l)) >> 3)]
                                  , g = On[112 + (g + 3 >> 3)]
                                  , m = p + 1 >> 1;
                                u[c - 2 * h] = Bn[255 + u[c - 2 * h] + m],
                                u[c - h] = Bn[255 + l + g],
                                u[c + 0] = Bn[255 + f - p],
                                u[c + h] = Bn[255 + d - m]
                            }
                        e += n
                    }
                }
                function Je(t, e, r, n, i, a) {
                    Ge(t, e, r, 1, 16, n, i, a)
                }
                function Xe(t, e, r, n, i, a) {
                    Ge(t, e, 1, r, 16, n, i, a)
                }
                function Ke(t, e, r, n, i, a) {
                    var o;
                    for (o = 3; 0 < o; --o)
                        Ye(t, e += 4 * r, r, 1, 16, n, i, a)
                }
                function Ze(t, e, r, n, i, a) {
                    var o;
                    for (o = 3; 0 < o; --o)
                        Ye(t, e += 4, 1, r, 16, n, i, a)
                }
                function $e(t, e, r, n, i, a, o, s) {
                    Ge(t, e, i, 1, 8, a, o, s),
                    Ge(r, n, i, 1, 8, a, o, s)
                }
                function Qe(t, e, r, n, i, a, o, s) {
                    Ge(t, e, 1, i, 8, a, o, s),
                    Ge(r, n, 1, i, 8, a, o, s)
                }
                function tr(t, e, r, n, i, a, o, s) {
                    Ye(t, e + 4 * i, i, 1, 8, a, o, s),
                    Ye(r, n + 4 * i, i, 1, 8, a, o, s)
                }
                function er(t, e, r, n, i, a, o, s) {
                    Ye(t, e + 4, 1, i, 8, a, o, s),
                    Ye(r, n + 4, 1, i, 8, a, o, s)
                }
                function rr() {
                    this.ba = new ot,
                    this.ec = [],
                    this.cc = [],
                    this.Mc = [],
                    this.Dc = this.Nc = this.dc = this.fc = 0,
                    this.Oa = new ut,
                    this.memory = 0,
                    this.Ib = "OutputFunc",
                    this.Jb = "OutputAlphaFunc",
                    this.Nd = "OutputRowFunc"
                }
                function nr() {
                    this.data = [],
                    this.offset = this.kd = this.ha = this.w = 0,
                    this.na = [],
                    this.xa = this.gb = this.Ja = this.Sa = this.P = 0
                }
                function ir() {
                    this.nc = this.Ea = this.b = this.hc = 0,
                    this.K = [],
                    this.w = 0
                }
                function ar() {
                    this.ua = 0,
                    this.Wa = new M,
                    this.vb = new M,
                    this.md = this.xc = this.wc = 0,
                    this.vc = [],
                    this.Wb = 0,
                    this.Ya = new d,
                    this.yc = new l
                }
                function or() {
                    this.xb = this.a = 0,
                    this.l = new Gt,
                    this.ca = new ot,
                    this.V = [],
                    this.Ba = 0,
                    this.Ta = [],
                    this.Ua = 0,
                    this.m = new N,
                    this.Pb = 0,
                    this.wd = new N,
                    this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0,
                    this.s = new ar,
                    this.ab = 0,
                    this.gc = o(4, ir),
                    this.Oc = 0
                }
                function sr() {
                    this.Lc = this.Z = this.$a = this.i = this.c = 0,
                    this.l = new Gt,
                    this.ic = 0,
                    this.ca = [],
                    this.tb = 0,
                    this.qd = null,
                    this.rd = 0
                }
                function ur(t, e, r, n, i, a, o) {
                    for (t = null == t ? 0 : t[e + 0],
                    e = 0; e < o; ++e)
                        i[a + e] = t + r[n + e] & 255,
                        t = i[a + e]
                }
                function cr(t, e, r, n, i, a, o) {
                    var s;
                    if (null == t)
                        ur(null, null, r, n, i, a, o);
                    else
                        for (s = 0; s < o; ++s)
                            i[a + s] = t[e + s] + r[n + s] & 255
                }
                function hr(t, e, r, n, i, a, o) {
                    if (null == t)
                        ur(null, null, r, n, i, a, o);
                    else {
                        var s, u = t[e + 0], c = u, h = u;
                        for (s = 0; s < o; ++s)
                            c = h + (u = t[e + s]) - c,
                            h = r[n + s] + (-256 & c ? 0 > c ? 0 : 255 : c) & 255,
                            c = u,
                            i[a + s] = h
                    }
                }
                function lr(t, r, i, o) {
                    var s = r.width
                      , u = r.o;
                    if (e(null != t && null != r),
                    0 > i || 0 >= o || i + o > u)
                        return null;
                    if (!t.Cc) {
                        if (null == t.ga) {
                            var c;
                            if (t.ga = new sr,
                            (c = null == t.ga) || (c = r.width * r.o,
                            e(0 == t.Gb.length),
                            t.Gb = a(c),
                            t.Uc = 0,
                            null == t.Gb ? c = 0 : (t.mb = t.Gb,
                            t.nb = t.Uc,
                            t.rc = null,
                            c = 1),
                            c = !c),
                            !c) {
                                c = t.ga;
                                var h = t.Fa
                                  , l = t.P
                                  , f = t.qc
                                  , d = t.mb
                                  , p = t.nb
                                  , g = l + 1
                                  , m = f - 1
                                  , b = c.l;
                                if (e(null != h && null != d && null != r),
                                mi[0] = null,
                                mi[1] = ur,
                                mi[2] = cr,
                                mi[3] = hr,
                                c.ca = d,
                                c.tb = p,
                                c.c = r.width,
                                c.i = r.height,
                                e(0 < c.c && 0 < c.i),
                                1 >= f)
                                    r = 0;
                                else if (c.$a = h[l + 0] >> 0 & 3,
                                c.Z = h[l + 0] >> 2 & 3,
                                c.Lc = h[l + 0] >> 4 & 3,
                                l = h[l + 0] >> 6 & 3,
                                0 > c.$a || 1 < c.$a || 4 <= c.Z || 1 < c.Lc || l)
                                    r = 0;
                                else if (b.put = dt,
                                b.ac = ft,
                                b.bc = pt,
                                b.ma = c,
                                b.width = r.width,
                                b.height = r.height,
                                b.Da = r.Da,
                                b.v = r.v,
                                b.va = r.va,
                                b.j = r.j,
                                b.o = r.o,
                                c.$a)
                                    t: {
                                        e(1 == c.$a),
                                        r = kt();
                                        e: for (; ; ) {
                                            if (null == r) {
                                                r = 0;
                                                break t
                                            }
                                            if (e(null != c),
                                            c.mc = r,
                                            r.c = c.c,
                                            r.i = c.i,
                                            r.l = c.l,
                                            r.l.ma = c,
                                            r.l.width = c.c,
                                            r.l.height = c.i,
                                            r.a = 0,
                                            v(r.m, h, g, m),
                                            !It(c.c, c.i, 1, r, null))
                                                break e;
                                            if (1 == r.ab && 3 == r.gc[0].hc && At(r.s) ? (c.ic = 1,
                                            h = r.c * r.i,
                                            r.Ta = null,
                                            r.Ua = 0,
                                            r.V = a(h),
                                            r.Ba = 0,
                                            null == r.V ? (r.a = 1,
                                            r = 0) : r = 1) : (c.ic = 0,
                                            r = Ft(r, c.c)),
                                            !r)
                                                break e;
                                            r = 1;
                                            break t
                                        }
                                        c.mc = null,
                                        r = 0
                                    }
                                else
                                    r = m >= c.c * c.i;
                                c = !r
                            }
                            if (c)
                                return null;
                            1 != t.ga.Lc ? t.Ga = 0 : o = u - i
                        }
                        e(null != t.ga),
                        e(i + o <= u);
                        t: {
                            if (r = (h = t.ga).c,
                            u = h.l.o,
                            0 == h.$a) {
                                if (g = t.rc,
                                m = t.Vc,
                                b = t.Fa,
                                l = t.P + 1 + i * r,
                                f = t.mb,
                                d = t.nb + i * r,
                                e(l <= t.P + t.qc),
                                0 != h.Z)
                                    for (e(null != mi[h.Z]),
                                    c = 0; c < o; ++c)
                                        mi[h.Z](g, m, b, l, f, d, r),
                                        g = f,
                                        m = d,
                                        d += r,
                                        l += r;
                                else
                                    for (c = 0; c < o; ++c)
                                        n(f, d, b, l, r),
                                        g = f,
                                        m = d,
                                        d += r,
                                        l += r;
                                t.rc = g,
                                t.Vc = m
                            } else {
                                if (e(null != h.mc),
                                r = i + o,
                                e(null != (c = h.mc)),
                                e(r <= c.i),
                                c.C >= r)
                                    r = 1;
                                else if (h.ic || mr(),
                                h.ic) {
                                    h = c.V,
                                    g = c.Ba,
                                    m = c.c;
                                    var y = c.i
                                      , w = (b = 1,
                                    l = c.$ / m,
                                    f = c.$ % m,
                                    d = c.m,
                                    p = c.s,
                                    c.$)
                                      , N = m * y
                                      , L = m * r
                                      , x = p.wc
                                      , _ = w < L ? wt(p, f, l) : null;
                                    e(w <= N),
                                    e(r <= y),
                                    e(At(p));
                                    e: for (; ; ) {
                                        for (; !d.h && w < L; ) {
                                            if (f & x || (_ = wt(p, f, l)),
                                            e(null != _),
                                            S(d),
                                            256 > (y = bt(_.G[0], _.H[0], d)))
                                                h[g + w] = y,
                                                ++w,
                                                ++f >= m && (f = 0,
                                                ++l <= r && !(l % 16) && St(c, l));
                                            else {
                                                if (!(280 > y)) {
                                                    b = 0;
                                                    break e
                                                }
                                                y = mt(y - 256, d);
                                                var P, k = bt(_.G[4], _.H[4], d);
                                                if (S(d),
                                                !(w >= (k = vt(m, k = mt(k, d))) && N - w >= y)) {
                                                    b = 0;
                                                    break e
                                                }
                                                for (P = 0; P < y; ++P)
                                                    h[g + w + P] = h[g + w + P - k];
                                                for (w += y,
                                                f += y; f >= m; )
                                                    f -= m,
                                                    ++l <= r && !(l % 16) && St(c, l);
                                                w < L && f & x && (_ = wt(p, f, l))
                                            }
                                            e(d.h == A(d))
                                        }
                                        St(c, l > r ? r : l);
                                        break e
                                    }
                                    !b || d.h && w < N ? (b = 0,
                                    c.a = d.h ? 5 : 3) : c.$ = w,
                                    r = b
                                } else
                                    r = _t(c, c.V, c.Ba, c.c, c.i, r, Ct);
                                if (!r) {
                                    o = 0;
                                    break t
                                }
                            }
                            i + o >= u && (t.Cc = 1),
                            o = 1
                        }
                        if (!o)
                            return null;
                        if (t.Cc && (null != (o = t.ga) && (o.mc = null),
                        t.ga = null,
                        0 < t.Ga))
                            return alert("todo:WebPDequantizeLevels"),
                            null
                    }
                    return t.nb + i * s
                }
                function fr(t, e, r, n, i, a) {
                    for (; 0 < i--; ) {
                        var o, s = t, u = e + (r ? 1 : 0), c = t, h = e + (r ? 0 : 3);
                        for (o = 0; o < n; ++o) {
                            var l = c[h + 4 * o];
                            255 != l && (l *= 32897,
                            s[u + 4 * o + 0] = s[u + 4 * o + 0] * l >> 23,
                            s[u + 4 * o + 1] = s[u + 4 * o + 1] * l >> 23,
                            s[u + 4 * o + 2] = s[u + 4 * o + 2] * l >> 23)
                        }
                        e += a
                    }
                }
                function dr(t, e, r, n, i) {
                    for (; 0 < n--; ) {
                        var a;
                        for (a = 0; a < r; ++a) {
                            var o = t[e + 2 * a + 0]
                              , s = 15 & (c = t[e + 2 * a + 1])
                              , u = 4369 * s
                              , c = (240 & c | c >> 4) * u >> 16;
                            t[e + 2 * a + 0] = (240 & o | o >> 4) * u >> 16 & 240 | (15 & o | o << 4) * u >> 16 >> 4 & 15,
                            t[e + 2 * a + 1] = 240 & c | s
                        }
                        e += i
                    }
                }
                function pr(t, e, r, n, i, a, o, s) {
                    var u, c, h = 255;
                    for (c = 0; c < i; ++c) {
                        for (u = 0; u < n; ++u) {
                            var l = t[e + u];
                            a[o + 4 * u] = l,
                            h &= l
                        }
                        e += r,
                        o += s
                    }
                    return 255 != h
                }
                function gr(t, e, r, n, i) {
                    var a;
                    for (a = 0; a < i; ++a)
                        r[n + a] = t[e + a] >> 8
                }
                function mr() {
                    An = fr,
                    xn = dr,
                    Sn = pr,
                    _n = gr
                }
                function vr(r, n, i) {
                    t[r] = function(t, r, a, o, s, u, c, h, l, f, d, p, g, m, v, b, y) {
                        var w, N = y - 1 >> 1, L = s[u + 0] | c[h + 0] << 16, A = l[f + 0] | d[p + 0] << 16;
                        e(null != t);
                        var x = 3 * L + A + 131074 >> 2;
                        for (n(t[r + 0], 255 & x, x >> 16, g, m),
                        null != a && (x = 3 * A + L + 131074 >> 2,
                        n(a[o + 0], 255 & x, x >> 16, v, b)),
                        w = 1; w <= N; ++w) {
                            var S = s[u + w] | c[h + w] << 16
                              , _ = l[f + w] | d[p + w] << 16
                              , P = L + S + A + _ + 524296
                              , k = P + 2 * (S + A) >> 3;
                            x = k + L >> 1,
                            L = (P = P + 2 * (L + _) >> 3) + S >> 1,
                            n(t[r + 2 * w - 1], 255 & x, x >> 16, g, m + (2 * w - 1) * i),
                            n(t[r + 2 * w - 0], 255 & L, L >> 16, g, m + (2 * w - 0) * i),
                            null != a && (x = P + A >> 1,
                            L = k + _ >> 1,
                            n(a[o + 2 * w - 1], 255 & x, x >> 16, v, b + (2 * w - 1) * i),
                            n(a[o + 2 * w + 0], 255 & L, L >> 16, v, b + (2 * w + 0) * i)),
                            L = S,
                            A = _
                        }
                        1 & y || (x = 3 * L + A + 131074 >> 2,
                        n(t[r + y - 1], 255 & x, x >> 16, g, m + (y - 1) * i),
                        null != a && (x = 3 * A + L + 131074 >> 2,
                        n(a[o + y - 1], 255 & x, x >> 16, v, b + (y - 1) * i)))
                    }
                }
                function br() {
                    vi[En] = bi,
                    vi[qn] = wi,
                    vi[Dn] = yi,
                    vi[Rn] = Ni,
                    vi[Tn] = Li,
                    vi[Un] = Ai,
                    vi[zn] = xi,
                    vi[Hn] = wi,
                    vi[Wn] = Ni,
                    vi[Vn] = Li,
                    vi[Gn] = Ai
                }
                function yr(t) {
                    return t & ~Fi ? 0 > t ? 0 : 255 : t >> Ii
                }
                function wr(t, e) {
                    return yr((19077 * t >> 8) + (26149 * e >> 8) - 14234)
                }
                function Nr(t, e, r) {
                    return yr((19077 * t >> 8) - (6419 * e >> 8) - (13320 * r >> 8) + 8708)
                }
                function Lr(t, e) {
                    return yr((19077 * t >> 8) + (33050 * e >> 8) - 17685)
                }
                function Ar(t, e, r, n, i) {
                    n[i + 0] = wr(t, r),
                    n[i + 1] = Nr(t, e, r),
                    n[i + 2] = Lr(t, e)
                }
                function xr(t, e, r, n, i) {
                    n[i + 0] = Lr(t, e),
                    n[i + 1] = Nr(t, e, r),
                    n[i + 2] = wr(t, r)
                }
                function Sr(t, e, r, n, i) {
                    var a = Nr(t, e, r);
                    e = a << 3 & 224 | Lr(t, e) >> 3,
                    n[i + 0] = 248 & wr(t, r) | a >> 5,
                    n[i + 1] = e
                }
                function _r(t, e, r, n, i) {
                    var a = 240 & Lr(t, e) | 15;
                    n[i + 0] = 240 & wr(t, r) | Nr(t, e, r) >> 4,
                    n[i + 1] = a
                }
                function Pr(t, e, r, n, i) {
                    n[i + 0] = 255,
                    Ar(t, e, r, n, i + 1)
                }
                function kr(t, e, r, n, i) {
                    xr(t, e, r, n, i),
                    n[i + 3] = 255
                }
                function Ir(t, e, r, n, i) {
                    Ar(t, e, r, n, i),
                    n[i + 3] = 255
                }
                function Vt(t, e) {
                    return 0 > t ? 0 : t > e ? e : t
                }
                function Fr(e, r, n) {
                    t[e] = function(t, e, i, a, o, s, u, c, h) {
                        for (var l = c + (-2 & h) * n; c != l; )
                            r(t[e + 0], i[a + 0], o[s + 0], u, c),
                            r(t[e + 1], i[a + 0], o[s + 0], u, c + n),
                            e += 2,
                            ++a,
                            ++s,
                            c += 2 * n;
                        1 & h && r(t[e + 0], i[a + 0], o[s + 0], u, c)
                    }
                }
                function Cr(t, e, r) {
                    return 0 == r ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : r
                }
                function jr(t, e, r, n, i) {
                    switch (t >>> 30) {
                    case 3:
                        on(e, r, n, i, 0);
                        break;
                    case 2:
                        sn(e, r, n, i);
                        break;
                    case 1:
                        cn(e, r, n, i)
                    }
                }
                function Or(t, e) {
                    var r, a, o = e.M, s = e.Nb, u = t.oc, c = t.pc + 40, h = t.oc, l = t.pc + 584, f = t.oc, d = t.pc + 600;
                    for (r = 0; 16 > r; ++r)
                        u[c + 32 * r - 1] = 129;
                    for (r = 0; 8 > r; ++r)
                        h[l + 32 * r - 1] = 129,
                        f[d + 32 * r - 1] = 129;
                    for (0 < o ? u[c - 1 - 32] = h[l - 1 - 32] = f[d - 1 - 32] = 129 : (i(u, c - 32 - 1, 127, 21),
                    i(h, l - 32 - 1, 127, 9),
                    i(f, d - 32 - 1, 127, 9)),
                    a = 0; a < t.za; ++a) {
                        var p = e.ya[e.aa + a];
                        if (0 < a) {
                            for (r = -1; 16 > r; ++r)
                                n(u, c + 32 * r - 4, u, c + 32 * r + 12, 4);
                            for (r = -1; 8 > r; ++r)
                                n(h, l + 32 * r - 4, h, l + 32 * r + 4, 4),
                                n(f, d + 32 * r - 4, f, d + 32 * r + 4, 4)
                        }
                        var g = t.Gd
                          , m = t.Hd + a
                          , v = p.ad
                          , b = p.Hc;
                        if (0 < o && (n(u, c - 32, g[m].y, 0, 16),
                        n(h, l - 32, g[m].f, 0, 8),
                        n(f, d - 32, g[m].ea, 0, 8)),
                        p.Za) {
                            var y = u
                              , w = c - 32 + 16;
                            for (0 < o && (a >= t.za - 1 ? i(y, w, g[m].y[15], 4) : n(y, w, g[m + 1].y, 0, 4)),
                            r = 0; 4 > r; r++)
                                y[w + 128 + r] = y[w + 256 + r] = y[w + 384 + r] = y[w + 0 + r];
                            for (r = 0; 16 > r; ++r,
                            b <<= 2)
                                y = u,
                                w = c + Di[r],
                                fi[p.Ob[r]](y, w),
                                jr(b, v, 16 * +r, y, w)
                        } else if (y = Cr(a, o, p.Ob[0]),
                        li[y](u, c),
                        0 != b)
                            for (r = 0; 16 > r; ++r,
                            b <<= 2)
                                jr(b, v, 16 * +r, u, c + Di[r]);
                        for (r = p.Gc,
                        y = Cr(a, o, p.Dd),
                        di[y](h, l),
                        di[y](f, d),
                        b = v,
                        y = h,
                        w = l,
                        255 & (p = r >> 0) && (170 & p ? un(b, 256, y, w) : hn(b, 256, y, w)),
                        p = f,
                        b = d,
                        255 & (r >>= 8) && (170 & r ? un(v, 320, p, b) : hn(v, 320, p, b)),
                        o < t.Ub - 1 && (n(g[m].y, 0, u, c + 480, 16),
                        n(g[m].f, 0, h, l + 224, 8),
                        n(g[m].ea, 0, f, d + 224, 8)),
                        r = 8 * s * t.B,
                        g = t.sa,
                        m = t.ta + 16 * a + 16 * s * t.R,
                        v = t.qa,
                        p = t.ra + 8 * a + r,
                        b = t.Ha,
                        y = t.Ia + 8 * a + r,
                        r = 0; 16 > r; ++r)
                            n(g, m + r * t.R, u, c + 32 * r, 16);
                        for (r = 0; 8 > r; ++r)
                            n(v, p + r * t.B, h, l + 32 * r, 8),
                            n(b, y + r * t.B, f, d + 32 * r, 8)
                    }
                }
                function Br(t, n, i, a, o, s, u, c, h) {
                    var l = [0]
                      , f = [0]
                      , d = 0
                      , p = null != h ? h.kd : 0
                      , g = null != h ? h : new nr;
                    if (null == t || 12 > i)
                        return 7;
                    g.data = t,
                    g.w = n,
                    g.ha = i,
                    n = [n],
                    i = [i],
                    g.gb = [g.gb];
                    t: {
                        var m = n
                          , b = i
                          , y = g.gb;
                        if (e(null != t),
                        e(null != b),
                        e(null != y),
                        y[0] = 0,
                        12 <= b[0] && !r(t, m[0], "RIFF")) {
                            if (r(t, m[0] + 8, "WEBP")) {
                                y = 3;
                                break t
                            }
                            var w = j(t, m[0] + 4);
                            if (12 > w || 4294967286 < w) {
                                y = 3;
                                break t
                            }
                            if (p && w > b[0] - 8) {
                                y = 7;
                                break t
                            }
                            y[0] = w,
                            m[0] += 12,
                            b[0] -= 12
                        }
                        y = 0
                    }
                    if (0 != y)
                        return y;
                    for (w = 0 < g.gb[0],
                    i = i[0]; ; ) {
                        t: {
                            var L = t;
                            b = n,
                            y = i;
                            var A = l
                              , x = f
                              , S = m = [0];
                            if ((k = d = [d])[0] = 0,
                            8 > y[0])
                                y = 7;
                            else {
                                if (!r(L, b[0], "VP8X")) {
                                    if (10 != j(L, b[0] + 4)) {
                                        y = 3;
                                        break t
                                    }
                                    if (18 > y[0]) {
                                        y = 7;
                                        break t
                                    }
                                    var _ = j(L, b[0] + 8)
                                      , P = 1 + C(L, b[0] + 12);
                                    if (2147483648 <= P * (L = 1 + C(L, b[0] + 15))) {
                                        y = 3;
                                        break t
                                    }
                                    null != S && (S[0] = _),
                                    null != A && (A[0] = P),
                                    null != x && (x[0] = L),
                                    b[0] += 18,
                                    y[0] -= 18,
                                    k[0] = 1
                                }
                                y = 0
                            }
                        }
                        if (d = d[0],
                        m = m[0],
                        0 != y)
                            return y;
                        if (b = !!(2 & m),
                        !w && d)
                            return 3;
                        if (null != s && (s[0] = !!(16 & m)),
                        null != u && (u[0] = b),
                        null != c && (c[0] = 0),
                        u = l[0],
                        m = f[0],
                        d && b && null == h) {
                            y = 0;
                            break
                        }
                        if (4 > i) {
                            y = 7;
                            break
                        }
                        if (w && d || !w && !d && !r(t, n[0], "ALPH")) {
                            i = [i],
                            g.na = [g.na],
                            g.P = [g.P],
                            g.Sa = [g.Sa];
                            t: {
                                _ = t,
                                y = n,
                                w = i;
                                var k = g.gb;
                                A = g.na,
                                x = g.P,
                                S = g.Sa,
                                P = 22,
                                e(null != _),
                                e(null != w),
                                L = y[0];
                                var I = w[0];
                                for (e(null != A),
                                e(null != S),
                                A[0] = null,
                                x[0] = null,
                                S[0] = 0; ; ) {
                                    if (y[0] = L,
                                    w[0] = I,
                                    8 > I) {
                                        y = 7;
                                        break t
                                    }
                                    var F = j(_, L + 4);
                                    if (4294967286 < F) {
                                        y = 3;
                                        break t
                                    }
                                    var O = 8 + F + 1 & -2;
                                    if (P += O,
                                    0 < k && P > k) {
                                        y = 3;
                                        break t
                                    }
                                    if (!r(_, L, "VP8 ") || !r(_, L, "VP8L")) {
                                        y = 0;
                                        break t
                                    }
                                    if (I[0] < O) {
                                        y = 7;
                                        break t
                                    }
                                    r(_, L, "ALPH") || (A[0] = _,
                                    x[0] = L + 8,
                                    S[0] = F),
                                    L += O,
                                    I -= O
                                }
                            }
                            if (i = i[0],
                            g.na = g.na[0],
                            g.P = g.P[0],
                            g.Sa = g.Sa[0],
                            0 != y)
                                break
                        }
                        i = [i],
                        g.Ja = [g.Ja],
                        g.xa = [g.xa];
                        t: if (k = t,
                        y = n,
                        w = i,
                        A = g.gb[0],
                        x = g.Ja,
                        S = g.xa,
                        _ = y[0],
                        L = !r(k, _, "VP8 "),
                        P = !r(k, _, "VP8L"),
                        e(null != k),
                        e(null != w),
                        e(null != x),
                        e(null != S),
                        8 > w[0])
                            y = 7;
                        else {
                            if (L || P) {
                                if (k = j(k, _ + 4),
                                12 <= A && k > A - 12) {
                                    y = 3;
                                    break t
                                }
                                if (p && k > w[0] - 8) {
                                    y = 7;
                                    break t
                                }
                                x[0] = k,
                                y[0] += 8,
                                w[0] -= 8,
                                S[0] = P
                            } else
                                S[0] = 5 <= w[0] && 47 == k[_ + 0] && !(k[_ + 4] >> 5),
                                x[0] = w[0];
                            y = 0
                        }
                        if (i = i[0],
                        g.Ja = g.Ja[0],
                        g.xa = g.xa[0],
                        n = n[0],
                        0 != y)
                            break;
                        if (4294967286 < g.Ja)
                            return 3;
                        if (null == c || b || (c[0] = g.xa ? 2 : 1),
                        u = [u],
                        m = [m],
                        g.xa) {
                            if (5 > i) {
                                y = 7;
                                break
                            }
                            c = u,
                            p = m,
                            b = s,
                            null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5) ? (w = [0],
                            k = [0],
                            A = [0],
                            v(x = new N, t, n, i),
                            gt(x, w, k, A) ? (null != c && (c[0] = w[0]),
                            null != p && (p[0] = k[0]),
                            null != b && (b[0] = A[0]),
                            t = 1) : t = 0) : t = 0
                        } else {
                            if (10 > i) {
                                y = 7;
                                break
                            }
                            c = m,
                            null == t || 10 > i || !Xt(t, n + 3, i - 3) ? t = 0 : (p = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16,
                            b = 16383 & (t[n + 7] << 8 | t[n + 6]),
                            t = 16383 & (t[n + 9] << 8 | t[n + 8]),
                            1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (u && (u[0] = b),
                            c && (c[0] = t),
                            t = 1))
                        }
                        if (!t)
                            return 3;
                        if (u = u[0],
                        m = m[0],
                        d && (l[0] != u || f[0] != m))
                            return 3;
                        null != h && (h[0] = g,
                        h.offset = n - h.w,
                        e(4294967286 > n - h.w),
                        e(h.offset == h.ha - i));
                        break
                    }
                    return 0 == y || 7 == y && d && null == h ? (null != s && (s[0] |= null != g.na && 0 < g.na.length),
                    null != a && (a[0] = u),
                    null != o && (o[0] = m),
                    0) : y
                }
                function Mr(t, e, r) {
                    var n = e.width
                      , i = e.height
                      , a = 0
                      , o = 0
                      , s = n
                      , u = i;
                    if (e.Da = null != t && 0 < t.Da,
                    e.Da && (s = t.cd,
                    u = t.bd,
                    a = t.v,
                    o = t.j,
                    11 > r || (a &= -2,
                    o &= -2),
                    0 > a || 0 > o || 0 >= s || 0 >= u || a + s > n || o + u > i))
                        return 0;
                    if (e.v = a,
                    e.j = o,
                    e.va = a + s,
                    e.o = o + u,
                    e.U = s,
                    e.T = u,
                    e.da = null != t && 0 < t.da,
                    e.da) {
                        if (!E(s, u, r = [t.ib], a = [t.hb]))
                            return 0;
                        e.ib = r[0],
                        e.hb = a[0]
                    }
                    return e.ob = null != t && t.ob,
                    e.Kb = null == t || !t.Sd,
                    e.da && (e.ob = e.ib < 3 * n / 4 && e.hb < 3 * i / 4,
                    e.Kb = 0),
                    1
                }
                function Er(t) {
                    if (null == t)
                        return 2;
                    if (11 > t.S) {
                        var e = t.f.RGBA;
                        e.fb += (t.height - 1) * e.A,
                        e.A = -e.A
                    } else
                        e = t.f.kb,
                        t = t.height,
                        e.O += (t - 1) * e.fa,
                        e.fa = -e.fa,
                        e.N += (t - 1 >> 1) * e.Ab,
                        e.Ab = -e.Ab,
                        e.W += (t - 1 >> 1) * e.Db,
                        e.Db = -e.Db,
                        null != e.F && (e.J += (t - 1) * e.lb,
                        e.lb = -e.lb);
                    return 0
                }
                function qr(t, e, r, n) {
                    if (null == n || 0 >= t || 0 >= e)
                        return 2;
                    if (null != r) {
                        if (r.Da) {
                            var i = r.cd
                              , o = r.bd
                              , s = -2 & r.v
                              , u = -2 & r.j;
                            if (0 > s || 0 > u || 0 >= i || 0 >= o || s + i > t || u + o > e)
                                return 2;
                            t = i,
                            e = o
                        }
                        if (r.da) {
                            if (!E(t, e, i = [r.ib], o = [r.hb]))
                                return 2;
                            t = i[0],
                            e = o[0]
                        }
                    }
                    n.width = t,
                    n.height = e;
                    t: {
                        var c = n.width
                          , h = n.height;
                        if (t = n.S,
                        0 >= c || 0 >= h || !(t >= En && 13 > t))
                            t = 2;
                        else {
                            if (0 >= n.Rd && null == n.sd) {
                                s = o = i = e = 0;
                                var l = (u = c * zi[t]) * h;
                                if (11 > t || (o = (h + 1) / 2 * (e = (c + 1) / 2),
                                12 == t && (s = (i = c) * h)),
                                null == (h = a(l + 2 * o + s))) {
                                    t = 1;
                                    break t
                                }
                                n.sd = h,
                                11 > t ? ((c = n.f.RGBA).eb = h,
                                c.fb = 0,
                                c.A = u,
                                c.size = l) : ((c = n.f.kb).y = h,
                                c.O = 0,
                                c.fa = u,
                                c.Fd = l,
                                c.f = h,
                                c.N = 0 + l,
                                c.Ab = e,
                                c.Cd = o,
                                c.ea = h,
                                c.W = 0 + l + o,
                                c.Db = e,
                                c.Ed = o,
                                12 == t && (c.F = h,
                                c.J = 0 + l + 2 * o),
                                c.Tc = s,
                                c.lb = i)
                            }
                            if (e = 1,
                            i = n.S,
                            o = n.width,
                            s = n.height,
                            i >= En && 13 > i)
                                if (11 > i)
                                    t = n.f.RGBA,
                                    e &= (u = Math.abs(t.A)) * (s - 1) + o <= t.size,
                                    e &= u >= o * zi[i],
                                    e &= null != t.eb;
                                else {
                                    t = n.f.kb,
                                    u = (o + 1) / 2,
                                    l = (s + 1) / 2,
                                    c = Math.abs(t.fa),
                                    h = Math.abs(t.Ab);
                                    var f = Math.abs(t.Db)
                                      , d = Math.abs(t.lb)
                                      , p = d * (s - 1) + o;
                                    e &= c * (s - 1) + o <= t.Fd,
                                    e &= h * (l - 1) + u <= t.Cd,
                                    e = (e &= f * (l - 1) + u <= t.Ed) & c >= o & h >= u & f >= u,
                                    e &= null != t.y,
                                    e &= null != t.f,
                                    e &= null != t.ea,
                                    12 == i && (e &= d >= o,
                                    e &= p <= t.Tc,
                                    e &= null != t.F)
                                }
                            else
                                e = 0;
                            t = e ? 0 : 2
                        }
                    }
                    return 0 != t || null != r && r.fd && (t = Er(n)),
                    t
                }
                var Dr = 64
                  , Rr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215]
                  , Tr = 24
                  , Ur = 32
                  , zr = 8
                  , Hr = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
                R("Predictor0", "PredictorAdd0"),
                t.Predictor0 = function() {
                    return 4278190080
                }
                ,
                t.Predictor1 = function(t) {
                    return t
                }
                ,
                t.Predictor2 = function(t, e, r) {
                    return e[r + 0]
                }
                ,
                t.Predictor3 = function(t, e, r) {
                    return e[r + 1]
                }
                ,
                t.Predictor4 = function(t, e, r) {
                    return e[r - 1]
                }
                ,
                t.Predictor5 = function(t, e, r) {
                    return U(U(t, e[r + 1]), e[r + 0])
                }
                ,
                t.Predictor6 = function(t, e, r) {
                    return U(t, e[r - 1])
                }
                ,
                t.Predictor7 = function(t, e, r) {
                    return U(t, e[r + 0])
                }
                ,
                t.Predictor8 = function(t, e, r) {
                    return U(e[r - 1], e[r + 0])
                }
                ,
                t.Predictor9 = function(t, e, r) {
                    return U(e[r + 0], e[r + 1])
                }
                ,
                t.Predictor10 = function(t, e, r) {
                    return U(U(t, e[r - 1]), U(e[r + 0], e[r + 1]))
                }
                ,
                t.Predictor11 = function(t, e, r) {
                    var n = e[r + 0];
                    return 0 >= W(n >> 24 & 255, t >> 24 & 255, (e = e[r - 1]) >> 24 & 255) + W(n >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + W(n >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + W(255 & n, 255 & t, 255 & e) ? n : t
                }
                ,
                t.Predictor12 = function(t, e, r) {
                    var n = e[r + 0];
                    return (z((t >> 24 & 255) + (n >> 24 & 255) - ((e = e[r - 1]) >> 24 & 255)) << 24 | z((t >> 16 & 255) + (n >> 16 & 255) - (e >> 16 & 255)) << 16 | z((t >> 8 & 255) + (n >> 8 & 255) - (e >> 8 & 255)) << 8 | z((255 & t) + (255 & n) - (255 & e))) >>> 0
                }
                ,
                t.Predictor13 = function(t, e, r) {
                    var n = e[r - 1];
                    return (H((t = U(t, e[r + 0])) >> 24 & 255, n >> 24 & 255) << 24 | H(t >> 16 & 255, n >> 16 & 255) << 16 | H(t >> 8 & 255, n >> 8 & 255) << 8 | H(t >> 0 & 255, n >> 0 & 255)) >>> 0
                }
                ;
                var Wr = t.PredictorAdd0;
                t.PredictorAdd1 = V,
                R("Predictor2", "PredictorAdd2"),
                R("Predictor3", "PredictorAdd3"),
                R("Predictor4", "PredictorAdd4"),
                R("Predictor5", "PredictorAdd5"),
                R("Predictor6", "PredictorAdd6"),
                R("Predictor7", "PredictorAdd7"),
                R("Predictor8", "PredictorAdd8"),
                R("Predictor9", "PredictorAdd9"),
                R("Predictor10", "PredictorAdd10"),
                R("Predictor11", "PredictorAdd11"),
                R("Predictor12", "PredictorAdd12"),
                R("Predictor13", "PredictorAdd13");
                var Vr = t.PredictorAdd2;
                X("ColorIndexInverseTransform", "MapARGB", "32b", (function(t) {
                    return t >> 8 & 255
                }
                ), (function(t) {
                    return t
                }
                )),
                X("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(t) {
                    return t
                }
                ), (function(t) {
                    return t >> 8 & 255
                }
                ));
                var Gr, Yr = t.ColorIndexInverseTransform, Jr = t.MapARGB, Xr = t.VP8LColorIndexInverseTransformAlpha, Kr = t.MapAlpha, Zr = t.VP8LPredictorsAdd = [];
                Zr.length = 16,
                (t.VP8LPredictors = []).length = 16,
                (t.VP8LPredictorsAdd_C = []).length = 16,
                (t.VP8LPredictors_C = []).length = 16;
                var $r, Qr, tn, en, rn, nn, an, on, sn, un, cn, hn, ln, fn, dn, pn, gn, mn, vn, bn, yn, wn, Nn, Ln, An, xn, Sn, _n, Pn = a(511), kn = a(2041), In = a(225), Fn = a(767), Cn = 0, jn = kn, On = In, Bn = Fn, Mn = Pn, En = 0, qn = 1, Dn = 2, Rn = 3, Tn = 4, Un = 5, zn = 6, Hn = 7, Wn = 8, Vn = 9, Gn = 10, Yn = [2, 3, 7], Jn = [3, 3, 11], Xn = [280, 256, 256, 256, 40], Kn = [0, 1, 1, 1, 0], Zn = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], $n = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Qn = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], ti = 8, ei = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], ri = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ni = null, ii = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], si = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], ui = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], ci = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], hi = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], li = [], fi = [], di = [], pi = 1, gi = 2, mi = [], vi = [];
                vr("UpsampleRgbLinePair", Ar, 3),
                vr("UpsampleBgrLinePair", xr, 3),
                vr("UpsampleRgbaLinePair", Ir, 4),
                vr("UpsampleBgraLinePair", kr, 4),
                vr("UpsampleArgbLinePair", Pr, 4),
                vr("UpsampleRgba4444LinePair", _r, 2),
                vr("UpsampleRgb565LinePair", Sr, 2);
                var bi = t.UpsampleRgbLinePair
                  , yi = t.UpsampleBgrLinePair
                  , wi = t.UpsampleRgbaLinePair
                  , Ni = t.UpsampleBgraLinePair
                  , Li = t.UpsampleArgbLinePair
                  , Ai = t.UpsampleRgba4444LinePair
                  , xi = t.UpsampleRgb565LinePair
                  , Si = 16
                  , _i = 1 << Si - 1
                  , Pi = -227
                  , ki = 482
                  , Ii = 6
                  , Fi = (256 << Ii) - 1
                  , Ci = 0
                  , ji = a(256)
                  , Oi = a(256)
                  , Bi = a(256)
                  , Mi = a(256)
                  , Ei = a(ki - Pi)
                  , qi = a(ki - Pi);
                Fr("YuvToRgbRow", Ar, 3),
                Fr("YuvToBgrRow", xr, 3),
                Fr("YuvToRgbaRow", Ir, 4),
                Fr("YuvToBgraRow", kr, 4),
                Fr("YuvToArgbRow", Pr, 4),
                Fr("YuvToRgba4444Row", _r, 2),
                Fr("YuvToRgb565Row", Sr, 2);
                var Di = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396]
                  , Ri = [0, 2, 8]
                  , Ti = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1]
                  , Ui = 1;
                this.WebPDecodeRGBA = function(t, r, n, i, a) {
                    var o = qn
                      , s = new rr
                      , u = new ot;
                    s.ba = u,
                    u.S = o,
                    u.width = [u.width],
                    u.height = [u.height];
                    var c = u.width
                      , h = u.height
                      , l = new st;
                    if (null == l || null == t)
                        var f = 2;
                    else
                        e(null != l),
                        f = Br(t, r, n, l.width, l.height, l.Pd, l.Qd, l.format, null);
                    if (0 != f ? c = 0 : (null != c && (c[0] = l.width[0]),
                    null != h && (h[0] = l.height[0]),
                    c = 1),
                    c) {
                        u.width = u.width[0],
                        u.height = u.height[0],
                        null != i && (i[0] = u.width),
                        null != a && (a[0] = u.height);
                        t: {
                            if (i = new Gt,
                            (a = new nr).data = t,
                            a.w = r,
                            a.ha = n,
                            a.kd = 1,
                            r = [0],
                            e(null != a),
                            (0 == (t = Br(a.data, a.w, a.ha, null, null, null, r, null, a)) || 7 == t) && r[0] && (t = 4),
                            0 == (r = t)) {
                                if (e(null != s),
                                i.data = a.data,
                                i.w = a.w + a.offset,
                                i.ha = a.ha - a.offset,
                                i.put = dt,
                                i.ac = ft,
                                i.bc = pt,
                                i.ma = s,
                                a.xa) {
                                    if (null == (t = kt())) {
                                        s = 1;
                                        break t
                                    }
                                    if (function(t, r) {
                                        var n = [0]
                                          , i = [0]
                                          , a = [0];
                                        e: for (; ; ) {
                                            if (null == t)
                                                return 0;
                                            if (null == r)
                                                return t.a = 2,
                                                0;
                                            if (t.l = r,
                                            t.a = 0,
                                            v(t.m, r.data, r.w, r.ha),
                                            !gt(t.m, n, i, a)) {
                                                t.a = 3;
                                                break e
                                            }
                                            if (t.xb = gi,
                                            r.width = n[0],
                                            r.height = i[0],
                                            !It(n[0], i[0], 1, t, null))
                                                break e;
                                            return 1
                                        }
                                        return e(0 != t.a),
                                        0
                                    }(t, i)) {
                                        if (i = 0 == (r = qr(i.width, i.height, s.Oa, s.ba))) {
                                            e: {
                                                i = t;
                                                r: for (; ; ) {
                                                    if (null == i) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if (e(null != i.s.yc),
                                                    e(null != i.s.Ya),
                                                    e(0 < i.s.Wb),
                                                    e(null != (n = i.l)),
                                                    e(null != (a = n.ma)),
                                                    0 != i.xb) {
                                                        if (i.ca = a.ba,
                                                        i.tb = a.tb,
                                                        e(null != i.ca),
                                                        !Mr(a.Oa, n, Rn)) {
                                                            i.a = 2;
                                                            break r
                                                        }
                                                        if (!Ft(i, n.width))
                                                            break r;
                                                        if (n.da)
                                                            break r;
                                                        if ((n.da || nt(i.ca.S)) && mr(),
                                                        11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"),
                                                        null != i.ca.f.kb.F && mr()),
                                                        i.Pb && 0 < i.s.ua && null == i.s.vb.X && !O(i.s.vb, i.s.Wa.Xa)) {
                                                            i.a = 1;
                                                            break r
                                                        }
                                                        i.xb = 0
                                                    }
                                                    if (!_t(i, i.V, i.Ba, i.c, i.i, n.o, Lt))
                                                        break r;
                                                    a.Dc = i.Ma,
                                                    i = 1;
                                                    break e
                                                }
                                                e(0 != i.a),
                                                i = 0
                                            }
                                            i = !i
                                        }
                                        i && (r = t.a)
                                    } else
                                        r = t.a
                                } else {
                                    if (null == (t = new Yt)) {
                                        s = 1;
                                        break t
                                    }
                                    if (t.Fa = a.na,
                                    t.P = a.P,
                                    t.qc = a.Sa,
                                    Kt(t, i)) {
                                        if (0 == (r = qr(i.width, i.height, s.Oa, s.ba))) {
                                            if (t.Aa = 0,
                                            n = s.Oa,
                                            e(null != (a = t)),
                                            null != n) {
                                                if (0 < (c = 0 > (c = n.Md) ? 0 : 100 < c ? 255 : 255 * c / 100)) {
                                                    for (h = l = 0; 4 > h; ++h)
                                                        12 > (f = a.pb[h]).lc && (f.ia = c * Ti[0 > f.lc ? 0 : f.lc] >> 3),
                                                        l |= f.ia;
                                                    l && (alert("todo:VP8InitRandom"),
                                                    a.ia = 1)
                                                }
                                                a.Ga = n.Id,
                                                100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0)
                                            }
                                            Qt(t, i) || (r = t.a)
                                        }
                                    } else
                                        r = t.a
                                }
                                0 == r && null != s.Oa && s.Oa.fd && (r = Er(s.ba))
                            }
                            s = r
                        }
                        o = 0 != s ? null : 11 > o ? u.f.RGBA.eb : u.f.kb.y
                    } else
                        o = null;
                    return o
                }
                ;
                var zi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
            };
            function c(t, e) {
                for (var r = "", n = 0; n < 4; n++)
                    r += String.fromCharCode(t[e++]);
                return r
            }
            function h(t, e) {
                return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0
            }
            function l(t, e) {
                return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
            }
            new u;
            var f = [0]
              , d = [0]
              , p = []
              , g = new u
              , m = t
              , v = function(t, e) {
                var r = {}
                  , n = 0
                  , i = !1
                  , a = 0
                  , o = 0;
                if (r.frames = [],
                !function(t, e, r, n) {
                    for (var i = 0; i < 4; i++)
                        if (t[e + i] != "RIFF".charCodeAt(i))
                            return !0;
                    return !1
                }(t, e)) {
                    var s, u;
                    for (l(t, e += 4),
                    e += 8; e < t.length; ) {
                        var f = c(t, e)
                          , d = l(t, e += 4);
                        e += 4;
                        var p = d + (1 & d);
                        switch (f) {
                        case "VP8 ":
                        case "VP8L":
                            void 0 === r.frames[n] && (r.frames[n] = {}),
                            (v = r.frames[n]).src_off = i ? o : e - 8,
                            v.src_size = a + d + 8,
                            n++,
                            i && (i = !1,
                            a = 0,
                            o = 0);
                            break;
                        case "VP8X":
                            (v = r.header = {}).feature_flags = t[e];
                            var g = e + 4;
                            v.canvas_width = 1 + h(t, g),
                            g += 3,
                            v.canvas_height = 1 + h(t, g),
                            g += 3;
                            break;
                        case "ALPH":
                            i = !0,
                            a = p + 8,
                            o = e - 8;
                            break;
                        case "ANIM":
                            (v = r.header).bgcolor = l(t, e),
                            g = e + 4,
                            v.loop_count = (s = t)[(u = g) + 0] << 0 | s[u + 1] << 8,
                            g += 2;
                            break;
                        case "ANMF":
                            var m, v;
                            (v = r.frames[n] = {}).offset_x = 2 * h(t, e),
                            e += 3,
                            v.offset_y = 2 * h(t, e),
                            e += 3,
                            v.width = 1 + h(t, e),
                            e += 3,
                            v.height = 1 + h(t, e),
                            e += 3,
                            v.duration = h(t, e),
                            e += 3,
                            m = t[e++],
                            v.dispose = 1 & m,
                            v.blend = m >> 1 & 1
                        }
                        "ANMF" != f && (e += p)
                    }
                    return r
                }
            }(m, 0);
            v.response = m,
            v.rgbaoutput = !0,
            v.dataurl = !1;
            var b = v.header ? v.header : null
              , y = v.frames ? v.frames : null;
            if (b) {
                b.loop_counter = b.loop_count,
                f = [b.canvas_height],
                d = [b.canvas_width];
                for (var w = 0; w < y.length && 0 != y[w].blend; w++)
                    ;
            }
            var N = y[0]
              , L = g.WebPDecodeRGBA(m, N.src_off, N.src_size, d, f);
            N.rgba = L,
            N.imgwidth = d[0],
            N.imgheight = f[0];
            for (var A = 0; A < d[0] * f[0] * 4; A++)
                p[A] = L[A];
            return this.width = d,
            this.height = f,
            this.data = p,
            this
        }
        !function(t) {
            var e = function(e, n, u, c) {
                var h = 4
                  , l = a;
                switch (c) {
                case t.image_compression.FAST:
                    h = 1,
                    l = i;
                    break;
                case t.image_compression.MEDIUM:
                    h = 6,
                    l = o;
                    break;
                case t.image_compression.SLOW:
                    h = 9,
                    l = s
                }
                var f = X(e = r(e, n, u, l), {
                    level: h
                });
                return t.__addimage__.arrayBufferToBinaryString(f)
            }
              , r = function(t, e, r, n) {
                for (var i, a, o, s = t.length / e, u = new Uint8Array(t.length + s), l = c(), f = 0; f < s; f += 1) {
                    if (o = f * e,
                    i = t.subarray(o, o + e),
                    n)
                        u.set(n(i, r, a), o + f);
                    else {
                        for (var d, p = l.length, g = []; d < p; d += 1)
                            g[d] = l[d](i, r, a);
                        var m = h(g.concat());
                        u.set(g[m], o + f)
                    }
                    a = i
                }
                return u
            }
              , n = function(t) {
                var e = Array.apply([], t);
                return e.unshift(0),
                e
            }
              , i = function(t, e) {
                var r, n = [], i = t.length;
                n[0] = 1;
                for (var a = 0; a < i; a += 1)
                    r = t[a - e] || 0,
                    n[a + 1] = t[a] - r + 256 & 255;
                return n
            }
              , a = function(t, e, r) {
                var n, i = [], a = t.length;
                i[0] = 2;
                for (var o = 0; o < a; o += 1)
                    n = r && r[o] || 0,
                    i[o + 1] = t[o] - n + 256 & 255;
                return i
            }
              , o = function(t, e, r) {
                var n, i, a = [], o = t.length;
                a[0] = 3;
                for (var s = 0; s < o; s += 1)
                    n = t[s - e] || 0,
                    i = r && r[s] || 0,
                    a[s + 1] = t[s] + 256 - (n + i >>> 1) & 255;
                return a
            }
              , s = function(t, e, r) {
                var n, i, a, o, s = [], c = t.length;
                s[0] = 4;
                for (var h = 0; h < c; h += 1)
                    n = t[h - e] || 0,
                    i = r && r[h] || 0,
                    a = r && r[h - e] || 0,
                    o = u(n, i, a),
                    s[h + 1] = t[h] - o + 256 & 255;
                return s
            }
              , u = function(t, e, r) {
                if (t === e && e === r)
                    return t;
                var n = Math.abs(e - r)
                  , i = Math.abs(t - r)
                  , a = Math.abs(t + e - r - r);
                return n <= i && n <= a ? t : i <= a ? e : r
            }
              , c = function() {
                return [n, i, a, o, s]
            }
              , h = function(t) {
                var e = t.map((function(t) {
                    return t.reduce((function(t, e) {
                        return t + Math.abs(e)
                    }
                    ), 0)
                }
                ));
                return e.indexOf(Math.min.apply(null, e))
            };
            t.processPNG = function(r, n, i, a) {
                var o, s, u, c, h, l, f, d, p, g, m, v, b, y, w, N = this.decode.FLATE_DECODE, L = "";
                if (this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)),
                this.__addimage__.isArrayBufferView(r)) {
                    if (r = (u = new He(r)).imgData,
                    s = u.bits,
                    o = u.colorSpace,
                    h = u.colors,
                    -1 !== [4, 6].indexOf(u.colorType)) {
                        if (8 === u.bits) {
                            p = (d = 32 == u.pixelBitlength ? new Uint32Array(u.decodePixels().buffer) : 16 == u.pixelBitlength ? new Uint16Array(u.decodePixels().buffer) : new Uint8Array(u.decodePixels().buffer)).length,
                            m = new Uint8Array(p * u.colors),
                            g = new Uint8Array(p);
                            var A, x = u.pixelBitlength - u.bits;
                            for (y = 0,
                            w = 0; y < p; y++) {
                                for (b = d[y],
                                A = 0; A < x; )
                                    m[w++] = b >>> A & 255,
                                    A += u.bits;
                                g[y] = b >>> A & 255
                            }
                        }
                        if (16 === u.bits) {
                            p = (d = new Uint32Array(u.decodePixels().buffer)).length,
                            m = new Uint8Array(p * (32 / u.pixelBitlength) * u.colors),
                            g = new Uint8Array(p * (32 / u.pixelBitlength)),
                            v = u.colors > 1,
                            y = 0,
                            w = 0;
                            for (var S = 0; y < p; )
                                b = d[y++],
                                m[w++] = b >>> 0 & 255,
                                v && (m[w++] = b >>> 16 & 255,
                                b = d[y++],
                                m[w++] = b >>> 0 & 255),
                                g[S++] = b >>> 16 & 255;
                            s = 8
                        }
                        a !== t.image_compression.NONE ? (r = e(m, u.width * u.colors, u.colors, a),
                        f = e(g, u.width, 1, a)) : (r = m,
                        f = g,
                        N = void 0)
                    }
                    if (3 === u.colorType && (o = this.color_spaces.INDEXED,
                    l = u.palette,
                    u.transparency.indexed)) {
                        var _ = u.transparency.indexed
                          , P = 0;
                        for (y = 0,
                        p = _.length; y < p; ++y)
                            P += _[y];
                        if ((P /= 255) == p - 1 && -1 !== _.indexOf(0))
                            c = [_.indexOf(0)];
                        else if (P !== p) {
                            for (d = u.decodePixels(),
                            g = new Uint8Array(d.length),
                            y = 0,
                            p = d.length; y < p; y++)
                                g[y] = _[d[y]];
                            f = e(g, u.width, 1)
                        }
                    }
                    var k = function(e) {
                        var r;
                        switch (e) {
                        case t.image_compression.FAST:
                            r = 11;
                            break;
                        case t.image_compression.MEDIUM:
                            r = 13;
                            break;
                        case t.image_compression.SLOW:
                            r = 14;
                            break;
                        default:
                            r = 12
                        }
                        return r
                    }(a);
                    return N === this.decode.FLATE_DECODE && (L = "/Predictor " + k + " "),
                    L += "/Colors " + h + " /BitsPerComponent " + s + " /Columns " + u.width,
                    (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) && (r = this.__addimage__.arrayBufferToBinaryString(r)),
                    (f && this.__addimage__.isArrayBuffer(f) || this.__addimage__.isArrayBufferView(f)) && (f = this.__addimage__.arrayBufferToBinaryString(f)),
                    {
                        alias: i,
                        data: r,
                        index: n,
                        filter: N,
                        decodeParameters: L,
                        transparency: c,
                        palette: l,
                        sMask: f,
                        predictor: k,
                        width: u.width,
                        height: u.height,
                        bitsPerComponent: s,
                        colorSpace: o
                    }
                }
            }
        }(Ft.API),
        function(t) {
            t.processGIF89A = function(e, r, n, i) {
                var a = new We(e)
                  , o = a.width
                  , s = a.height
                  , u = [];
                a.decodeAndBlitFrameRGBA(0, u);
                var c = {
                    data: u,
                    width: o,
                    height: s
                }
                  , h = new Ge(100).encode(c, 100);
                return t.processJPEG.call(this, h, r, n, i)
            }
            ,
            t.processGIF87A = t.processGIF89A
        }(Ft.API),
        Ye.prototype.parseHeader = function() {
            if (this.fileSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.reserved = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.offset = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.headerSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.width = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.height = this.datav.getInt32(this.pos, !0),
            this.pos += 4,
            this.planes = this.datav.getUint16(this.pos, !0),
            this.pos += 2,
            this.bitPP = this.datav.getUint16(this.pos, !0),
            this.pos += 2,
            this.compress = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.rawSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.hr = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.vr = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.colors = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.importantColors = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
            this.bitPP < 15) {
                var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
                this.palette = new Array(t);
                for (var e = 0; e < t; e++) {
                    var r = this.datav.getUint8(this.pos++, !0)
                      , n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0);
                    this.palette[e] = {
                        red: i,
                        green: n,
                        blue: r,
                        quad: a
                    }
                }
            }
            this.height < 0 && (this.height *= -1,
            this.bottom_up = !1)
        }
        ,
        Ye.prototype.parseBGR = function() {
            this.pos = this.offset;
            try {
                var t = "bit" + this.bitPP
                  , e = this.width * this.height * 4;
                this.data = new Uint8Array(e),
                this[t]()
            } catch (t) {
                Q.log("bit decode error:" + t)
            }
        }
        ,
        Ye.prototype.bit1 = function() {
            var t, e = Math.ceil(this.width / 8), r = e % 4;
            for (t = this.height - 1; t >= 0; t--) {
                for (var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)
                    for (var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
                        var u = this.palette[a >> 7 - s & 1];
                        this.data[o + 4 * s] = u.blue,
                        this.data[o + 4 * s + 1] = u.green,
                        this.data[o + 4 * s + 2] = u.red,
                        this.data[o + 4 * s + 3] = 255
                    }
                0 !== r && (this.pos += 4 - r)
            }
        }
        ,
        Ye.prototype.bit4 = function() {
            for (var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < t; i++) {
                    var a = this.datav.getUint8(this.pos++, !0)
                      , o = n * this.width * 4 + 2 * i * 4
                      , s = a >> 4
                      , u = 15 & a
                      , c = this.palette[s];
                    if (this.data[o] = c.blue,
                    this.data[o + 1] = c.green,
                    this.data[o + 2] = c.red,
                    this.data[o + 3] = 255,
                    2 * i + 1 >= this.width)
                        break;
                    c = this.palette[u],
                    this.data[o + 4] = c.blue,
                    this.data[o + 4 + 1] = c.green,
                    this.data[o + 4 + 2] = c.red,
                    this.data[o + 4 + 3] = 255
                }
                0 !== e && (this.pos += 4 - e)
            }
        }
        ,
        Ye.prototype.bit8 = function() {
            for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
                for (var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
                    var i = this.datav.getUint8(this.pos++, !0)
                      , a = r * this.width * 4 + 4 * n;
                    if (i < this.palette.length) {
                        var o = this.palette[i];
                        this.data[a] = o.red,
                        this.data[a + 1] = o.green,
                        this.data[a + 2] = o.blue,
                        this.data[a + 3] = 255
                    } else
                        this.data[a] = 255,
                        this.data[a + 1] = 255,
                        this.data[a + 2] = 255,
                        this.data[a + 3] = 255
                }
                0 !== t && (this.pos += 4 - t)
            }
        }
        ,
        Ye.prototype.bit15 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
                    var a = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var o = (a & e) / e * 255 | 0
                      , s = (a >> 5 & e) / e * 255 | 0
                      , u = (a >> 10 & e) / e * 255 | 0
                      , c = a >> 15 ? 255 : 0
                      , h = n * this.width * 4 + 4 * i;
                    this.data[h] = u,
                    this.data[h + 1] = s,
                    this.data[h + 2] = o,
                    this.data[h + 3] = c
                }
                this.pos += t
            }
        }
        ,
        Ye.prototype.bit16 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--) {
                for (var i = this.bottom_up ? n : this.height - 1 - n, a = 0; a < this.width; a++) {
                    var o = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var s = (o & e) / e * 255 | 0
                      , u = (o >> 5 & r) / r * 255 | 0
                      , c = (o >> 11) / e * 255 | 0
                      , h = i * this.width * 4 + 4 * a;
                    this.data[h] = c,
                    this.data[h + 1] = u,
                    this.data[h + 2] = s,
                    this.data[h + 3] = 255
                }
                this.pos += t
            }
        }
        ,
        Ye.prototype.bit24 = function() {
            for (var t = this.height - 1; t >= 0; t--) {
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0)
                      , o = e * this.width * 4 + 4 * r;
                    this.data[o] = a,
                    this.data[o + 1] = i,
                    this.data[o + 2] = n,
                    this.data[o + 3] = 255
                }
                this.pos += this.width % 4
            }
        }
        ,
        Ye.prototype.bit32 = function() {
            for (var t = this.height - 1; t >= 0; t--)
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0)
                      , o = this.datav.getUint8(this.pos++, !0)
                      , s = e * this.width * 4 + 4 * r;
                    this.data[s] = a,
                    this.data[s + 1] = i,
                    this.data[s + 2] = n,
                    this.data[s + 3] = o
                }
        }
        ,
        Ye.prototype.getData = function() {
            return this.data
        }
        ,
        function(t) {
            t.processBMP = function(e, r, n, i) {
                var a = new Ye(e,!1)
                  , o = a.width
                  , s = a.height
                  , u = {
                    data: a.getData(),
                    width: o,
                    height: s
                }
                  , c = new Ge(100).encode(u, 100);
                return t.processJPEG.call(this, c, r, n, i)
            }
        }(Ft.API),
        Je.prototype.getData = function() {
            return this.data
        }
        ,
        function(t) {
            t.processWEBP = function(e, r, n, i) {
                var a = new Je(e,!1)
                  , o = a.width
                  , s = a.height
                  , u = {
                    data: a.getData(),
                    width: o,
                    height: s
                }
                  , c = new Ge(100).encode(u, 100);
                return t.processJPEG.call(this, c, r, n, i)
            }
        }(Ft.API),
        Ft.API.processRGBA = function(t, e, r) {
            for (var n = t.data, i = n.length, a = new Uint8Array(i / 4 * 3), o = new Uint8Array(i / 4), s = 0, u = 0, c = 0; c < i; c += 4) {
                var h = n[c]
                  , l = n[c + 1]
                  , f = n[c + 2]
                  , d = n[c + 3];
                a[s++] = h,
                a[s++] = l,
                a[s++] = f,
                o[u++] = d
            }
            var p = this.__addimage__.arrayBufferToBinaryString(a);
            return {
                alpha: this.__addimage__.arrayBufferToBinaryString(o),
                data: p,
                index: e,
                alias: r,
                colorSpace: "DeviceRGB",
                bitsPerComponent: 8,
                width: t.width,
                height: t.height
            }
        }
        ,
        Ft.API.setLanguage = function(t) {
            return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {},
            this.internal.languageSettings.isSubscribed = !1),
            void 0 !== {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic (Standard)",
                "ar-DZ": "Arabic (Algeria)",
                "ar-BH": "Arabic (Bahrain)",
                "ar-EG": "Arabic (Egypt)",
                "ar-IQ": "Arabic (Iraq)",
                "ar-JO": "Arabic (Jordan)",
                "ar-KW": "Arabic (Kuwait)",
                "ar-LB": "Arabic (Lebanon)",
                "ar-LY": "Arabic (Libya)",
                "ar-MA": "Arabic (Morocco)",
                "ar-OM": "Arabic (Oman)",
                "ar-QA": "Arabic (Qatar)",
                "ar-SA": "Arabic (Saudi Arabia)",
                "ar-SY": "Arabic (Syria)",
                "ar-TN": "Arabic (Tunisia)",
                "ar-AE": "Arabic (U.A.E.)",
                "ar-YE": "Arabic (Yemen)",
                an: "Aragonese",
                hy: "Armenian",
                as: "Assamese",
                ast: "Asturian",
                az: "Azerbaijani",
                eu: "Basque",
                be: "Belarusian",
                bn: "Bengali",
                bs: "Bosnian",
                br: "Breton",
                bg: "Bulgarian",
                my: "Burmese",
                ca: "Catalan",
                ch: "Chamorro",
                ce: "Chechen",
                zh: "Chinese",
                "zh-HK": "Chinese (Hong Kong)",
                "zh-CN": "Chinese (PRC)",
                "zh-SG": "Chinese (Singapore)",
                "zh-TW": "Chinese (Taiwan)",
                cv: "Chuvash",
                co: "Corsican",
                cr: "Cree",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch (Standard)",
                "nl-BE": "Dutch (Belgian)",
                en: "English",
                "en-AU": "English (Australia)",
                "en-BZ": "English (Belize)",
                "en-CA": "English (Canada)",
                "en-IE": "English (Ireland)",
                "en-JM": "English (Jamaica)",
                "en-NZ": "English (New Zealand)",
                "en-PH": "English (Philippines)",
                "en-ZA": "English (South Africa)",
                "en-TT": "English (Trinidad & Tobago)",
                "en-GB": "English (United Kingdom)",
                "en-US": "English (United States)",
                "en-ZW": "English (Zimbabwe)",
                eo: "Esperanto",
                et: "Estonian",
                fo: "Faeroese",
                fj: "Fijian",
                fi: "Finnish",
                fr: "French (Standard)",
                "fr-BE": "French (Belgium)",
                "fr-CA": "French (Canada)",
                "fr-FR": "French (France)",
                "fr-LU": "French (Luxembourg)",
                "fr-MC": "French (Monaco)",
                "fr-CH": "French (Switzerland)",
                fy: "Frisian",
                fur: "Friulian",
                gd: "Gaelic (Scots)",
                "gd-IE": "Gaelic (Irish)",
                gl: "Galacian",
                ka: "Georgian",
                de: "German (Standard)",
                "de-AT": "German (Austria)",
                "de-DE": "German (Germany)",
                "de-LI": "German (Liechtenstein)",
                "de-LU": "German (Luxembourg)",
                "de-CH": "German (Switzerland)",
                el: "Greek",
                gu: "Gujurati",
                ht: "Haitian",
                he: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                iu: "Inuktitut",
                ga: "Irish",
                it: "Italian (Standard)",
                "it-CH": "Italian (Switzerland)",
                ja: "Japanese",
                kn: "Kannada",
                ks: "Kashmiri",
                kk: "Kazakh",
                km: "Khmer",
                ky: "Kirghiz",
                tlh: "Klingon",
                ko: "Korean",
                "ko-KP": "Korean (North Korea)",
                "ko-KR": "Korean (South Korea)",
                la: "Latin",
                lv: "Latvian",
                lt: "Lithuanian",
                lb: "Luxembourgish",
                mk: "North Macedonia",
                ms: "Malay",
                ml: "Malayalam",
                mt: "Maltese",
                mi: "Maori",
                mr: "Marathi",
                mo: "Moldavian",
                nv: "Navajo",
                ng: "Ndonga",
                ne: "Nepali",
                no: "Norwegian",
                nb: "Norwegian (Bokmal)",
                nn: "Norwegian (Nynorsk)",
                oc: "Occitan",
                or: "Oriya",
                om: "Oromo",
                fa: "Persian",
                "fa-IR": "Persian/Iran",
                pl: "Polish",
                pt: "Portuguese",
                "pt-BR": "Portuguese (Brazil)",
                pa: "Punjabi",
                "pa-IN": "Punjabi (India)",
                "pa-PK": "Punjabi (Pakistan)",
                qu: "Quechua",
                rm: "Rhaeto-Romanic",
                ro: "Romanian",
                "ro-MO": "Romanian (Moldavia)",
                ru: "Russian",
                "ru-MO": "Russian (Moldavia)",
                sz: "Sami (Lappish)",
                sg: "Sango",
                sa: "Sanskrit",
                sc: "Sardinian",
                sd: "Sindhi",
                si: "Singhalese",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                so: "Somani",
                sb: "Sorbian",
                es: "Spanish",
                "es-AR": "Spanish (Argentina)",
                "es-BO": "Spanish (Bolivia)",
                "es-CL": "Spanish (Chile)",
                "es-CO": "Spanish (Colombia)",
                "es-CR": "Spanish (Costa Rica)",
                "es-DO": "Spanish (Dominican Republic)",
                "es-EC": "Spanish (Ecuador)",
                "es-SV": "Spanish (El Salvador)",
                "es-GT": "Spanish (Guatemala)",
                "es-HN": "Spanish (Honduras)",
                "es-MX": "Spanish (Mexico)",
                "es-NI": "Spanish (Nicaragua)",
                "es-PA": "Spanish (Panama)",
                "es-PY": "Spanish (Paraguay)",
                "es-PE": "Spanish (Peru)",
                "es-PR": "Spanish (Puerto Rico)",
                "es-ES": "Spanish (Spain)",
                "es-UY": "Spanish (Uruguay)",
                "es-VE": "Spanish (Venezuela)",
                sx: "Sutu",
                sw: "Swahili",
                sv: "Swedish",
                "sv-FI": "Swedish (Finland)",
                "sv-SV": "Swedish (Sweden)",
                ta: "Tamil",
                tt: "Tatar",
                te: "Teluga",
                th: "Thai",
                tig: "Tigre",
                ts: "Tsonga",
                tn: "Tswana",
                tr: "Turkish",
                tk: "Turkmen",
                uk: "Ukrainian",
                hsb: "Upper Sorbian",
                ur: "Urdu",
                ve: "Venda",
                vi: "Vietnamese",
                vo: "Volapuk",
                wa: "Walloon",
                cy: "Welsh",
                xh: "Xhosa",
                ji: "Yiddish",
                zu: "Zulu"
            }[t] && (this.internal.languageSettings.languageCode = t,
            !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
                this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
            }
            )),
            this.internal.languageSettings.isSubscribed = !0)),
            this
        }
        ,
        De = Ft.API,
        Re = De.getCharWidthsArray = function(t, e) {
            var r, i, a = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), s = e.charSpace || this.internal.getCharSpace(), u = e.widths ? e.widths : a.metadata.Unicode.widths, c = u.fof ? u.fof : 1, h = e.kerning ? e.kerning : a.metadata.Unicode.kerning, l = h.fof ? h.fof : 1, f = !1 !== e.doKerning, d = 0, p = t.length, g = 0, m = u[0] || c, v = [];
            for (r = 0; r < p; r++)
                i = t.charCodeAt(r),
                "function" == typeof a.metadata.widthOfString ? v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i)) + s * (1e3 / o) || 0) / 1e3) : (d = f && "object" === (0,
                n.Z)(h[i]) && !isNaN(parseInt(h[i][g], 10)) ? h[i][g] / l : 0,
                v.push((u[i] || m) / c + d)),
                g = i;
            return v
        }
        ,
        Te = De.getStringUnitWidth = function(t, e) {
            var r = (e = e || {}).fontSize || this.internal.getFontSize()
              , n = e.font || this.internal.getFont()
              , i = e.charSpace || this.internal.getCharSpace();
            return De.processArabic && (t = De.processArabic(t)),
            "function" == typeof n.metadata.widthOfString ? n.metadata.widthOfString(t, r, i) / r : Re.apply(this, arguments).reduce((function(t, e) {
                return t + e
            }
            ), 0)
        }
        ,
        Ue = function(t, e, r, n) {
            for (var i = [], a = 0, o = t.length, s = 0; a !== o && s + e[a] < r; )
                s += e[a],
                a++;
            i.push(t.slice(0, a));
            var u = a;
            for (s = 0; a !== o; )
                s + e[a] > n && (i.push(t.slice(u, a)),
                s = 0,
                u = a),
                s += e[a],
                a++;
            return u !== a && i.push(t.slice(u, a)),
            i
        }
        ,
        ze = function(t, e, r) {
            r || (r = {});
            var n, i, a, o, s, u, c, h = [], l = [h], f = r.textIndent || 0, d = 0, p = 0, g = t.split(" "), m = Re.apply(this, [" ", r])[0];
            if (u = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0) {
                var v = Array(u).join(" ")
                  , b = [];
                g.map((function(t) {
                    (t = t.split(/\s*\n/)).length > 1 ? b = b.concat(t.map((function(t, e) {
                        return (e && t.length ? "\n" : "") + t
                    }
                    ))) : b.push(t[0])
                }
                )),
                g = b,
                u = Te.apply(this, [v, r])
            }
            for (a = 0,
            o = g.length; a < o; a++) {
                var y = 0;
                if (n = g[a],
                u && "\n" == n[0] && (n = n.substr(1),
                y = 1),
                f + d + (p = (i = Re.apply(this, [n, r])).reduce((function(t, e) {
                    return t + e
                }
                ), 0)) > e || y) {
                    if (p > e) {
                        for (s = Ue.apply(this, [n, i, e - (f + d), e]),
                        h.push(s.shift()),
                        h = [s.pop()]; s.length; )
                            l.push([s.shift()]);
                        p = i.slice(n.length - (h[0] ? h[0].length : 0)).reduce((function(t, e) {
                            return t + e
                        }
                        ), 0)
                    } else
                        h = [n];
                    l.push(h),
                    f = p + u,
                    d = m
                } else
                    h.push(n),
                    f += d + p,
                    d = m
            }
            return c = u ? function(t, e) {
                return (e ? v : "") + t.join(" ")
            }
            : function(t) {
                return t.join(" ")
            }
            ,
            l.map(c)
        }
        ,
        De.splitTextToSize = function(t, e, r) {
            var n, i = (r = r || {}).fontSize || this.internal.getFontSize(), a = function(t) {
                if (t.widths && t.kerning)
                    return {
                        widths: t.widths,
                        kerning: t.kerning
                    };
                var e = this.internal.getFont(t.fontName, t.fontStyle);
                return e.metadata.Unicode ? {
                    widths: e.metadata.Unicode.widths || {
                        0: 1
                    },
                    kerning: e.metadata.Unicode.kerning || {}
                } : {
                    font: e.metadata,
                    fontSize: this.internal.getFontSize(),
                    charSpace: this.internal.getCharSpace()
                }
            }
            .call(this, r);
            n = Array.isArray(t) ? t : String(t).split(/\r?\n/);
            var o = 1 * this.internal.scaleFactor * e / i;
            a.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / i : 0,
            a.lineIndent = r.lineIndent;
            var s, u, c = [];
            for (s = 0,
            u = n.length; s < u; s++)
                c = c.concat(ze.apply(this, [n[s], o, a]));
            return c
        }
        ,
        function(t) {
            t.__fontmetrics__ = t.__fontmetrics__ || {};
            for (var e = "klmnopqrstuvwxyz", r = {}, i = {}, a = 0; a < 16; a++)
                r[e[a]] = "0123456789abcdef"[a],
                i["0123456789abcdef"[a]] = e[a];
            var o = function(t) {
                return "0x" + parseInt(t, 10).toString(16)
            }
              , s = t.__fontmetrics__.compress = function(t) {
                var e, r, a, u, c = ["{"];
                for (var h in t) {
                    if (e = t[h],
                    isNaN(parseInt(h, 10)) ? r = "'" + h + "'" : (h = parseInt(h, 10),
                    r = (r = o(h).slice(2)).slice(0, -1) + i[r.slice(-1)]),
                    "number" == typeof e)
                        e < 0 ? (a = o(e).slice(3),
                        u = "-") : (a = o(e).slice(2),
                        u = ""),
                        a = u + a.slice(0, -1) + i[a.slice(-1)];
                    else {
                        if ("object" !== (0,
                        n.Z)(e))
                            throw new Error("Don't know what to do with value type " + (0,
                            n.Z)(e) + ".");
                        a = s(e)
                    }
                    c.push(r + a)
                }
                return c.push("}"),
                c.join("")
            }
              , u = t.__fontmetrics__.uncompress = function(t) {
                if ("string" != typeof t)
                    throw new Error("Invalid argument passed to uncompress.");
                for (var e, n, i, a, o = {}, s = 1, u = o, c = [], h = "", l = "", f = t.length - 1, d = 1; d < f; d += 1)
                    "'" == (a = t[d]) ? e ? (i = e.join(""),
                    e = void 0) : e = [] : e ? e.push(a) : "{" == a ? (c.push([u, i]),
                    u = {},
                    i = void 0) : "}" == a ? ((n = c.pop())[0][n[1]] = u,
                    i = void 0,
                    u = n[0]) : "-" == a ? s = -1 : void 0 === i ? r.hasOwnProperty(a) ? (h += r[a],
                    i = parseInt(h, 16) * s,
                    s = 1,
                    h = "") : h += a : r.hasOwnProperty(a) ? (l += r[a],
                    u[i] = parseInt(l, 16) * s,
                    s = 1,
                    i = void 0,
                    l = "") : l += a;
                return o
            }
              , c = {
                codePages: ["WinAnsiEncoding"],
                WinAnsiEncoding: u("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
            }
              , h = {
                Unicode: {
                    Courier: c,
                    "Courier-Bold": c,
                    "Courier-BoldOblique": c,
                    "Courier-Oblique": c,
                    Helvetica: c,
                    "Helvetica-Bold": c,
                    "Helvetica-BoldOblique": c,
                    "Helvetica-Oblique": c,
                    "Times-Roman": c,
                    "Times-Bold": c,
                    "Times-BoldItalic": c,
                    "Times-Italic": c
                }
            }
              , l = {
                Unicode: {
                    "Courier-Oblique": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-BoldItalic": u("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                    "Helvetica-Bold": u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    Courier: u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Courier-BoldOblique": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Bold": u("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                    Symbol: u("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
                    Helvetica: u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                    "Helvetica-BoldOblique": u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    ZapfDingbats: u("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Courier-Bold": u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Italic": u("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                    "Times-Roman": u("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                    "Helvetica-Oblique": u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
                }
            };
            t.events.push(["addFont", function(t) {
                var e = t.font
                  , r = l.Unicode[e.postScriptName];
                r && (e.metadata.Unicode = {},
                e.metadata.Unicode.widths = r.widths,
                e.metadata.Unicode.kerning = r.kerning);
                var n = h.Unicode[e.postScriptName];
                n && (e.metadata.Unicode.encoding = n,
                e.encoding = n.codePages[0])
            }
            ])
        }(Ft.API),
        function(t) {
            var e = function(t) {
                for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
                    r[n] = t.charCodeAt(n);
                return r
            };
            t.API.events.push(["addFont", function(r) {
                var n = void 0
                  , i = r.font
                  , a = r.instance;
                if (!i.isStandardFont) {
                    if (void 0 === a)
                        throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                    if ("string" != typeof (n = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName)))
                        throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                    !function(r, n) {
                        n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(nt(n)),
                        r.metadata = t.API.TTFFont.open(n),
                        r.metadata.Unicode = r.metadata.Unicode || {
                            encoding: {},
                            kerning: {},
                            widths: []
                        },
                        r.metadata.glyIdsUsed = [0]
                    }(i, n)
                }
            }
            ])
        }(Ft),
        function(t) {
            function e() {
                return (Z.canvg ? Promise.resolve(Z.canvg) : r.e(806).then(r.bind(r, 53806))).catch((function(t) {
                    return Promise.reject(new Error("Could not load canvg: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            Ft.API.addSvgAsImage = function(t, r, n, i, a, o, s, u) {
                if (isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
                    new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
                if (isNaN(i) || isNaN(a))
                    throw Q.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
                    new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
                var c = document.createElement("canvas");
                c.width = i,
                c.height = a;
                var h = c.getContext("2d");
                h.fillStyle = "#fff",
                h.fillRect(0, 0, c.width, c.height);
                var l = {
                    ignoreMouse: !0,
                    ignoreAnimation: !0,
                    ignoreDimensions: !0
                }
                  , f = this;
                return e().then((function(e) {
                    return e.fromString(h, t, l)
                }
                ), (function() {
                    return Promise.reject(new Error("Could not load canvg."))
                }
                )).then((function(t) {
                    return t.render(l)
                }
                )).then((function() {
                    f.addImage(c.toDataURL("image/jpeg", 1), r, n, i, a, s, u)
                }
                ))
            }
        }(),
        Ft.API.putTotalPages = function(t) {
            var e, r = 0;
            parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t,"g"),
            r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()),"g"),
            r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
            for (var n = 1; n <= this.internal.getNumberOfPages(); n++)
                for (var i = 0; i < this.internal.pages[n].length; i++)
                    this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
            return this
        }
        ,
        Ft.API.viewerPreferences = function(t, e) {
            var r;
            t = t || {},
            e = e || !1;
            var i, a, o, s = {
                HideToolbar: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                HideMenubar: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                HideWindowUI: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                FitWindow: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                CenterWindow: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                DisplayDocTitle: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.4
                },
                NonFullScreenPageMode: {
                    defaultValue: "UseNone",
                    value: "UseNone",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                    pdfVersion: 1.3
                },
                Direction: {
                    defaultValue: "L2R",
                    value: "L2R",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["L2R", "R2L"],
                    pdfVersion: 1.3
                },
                ViewArea: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                ViewClip: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintArea: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintClip: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintScaling: {
                    defaultValue: "AppDefault",
                    value: "AppDefault",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["AppDefault", "None"],
                    pdfVersion: 1.6
                },
                Duplex: {
                    defaultValue: "",
                    value: "none",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
                    pdfVersion: 1.7
                },
                PickTrayByPDFSize: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.7
                },
                PrintPageRange: {
                    defaultValue: "",
                    value: "",
                    type: "array",
                    explicitSet: !1,
                    valueSet: null,
                    pdfVersion: 1.7
                },
                NumCopies: {
                    defaultValue: 1,
                    value: 1,
                    type: "integer",
                    explicitSet: !1,
                    valueSet: null,
                    pdfVersion: 1.7
                }
            }, u = Object.keys(s), c = [], h = 0, l = 0, f = 0;
            function d(t, e) {
                var r, n = !1;
                for (r = 0; r < t.length; r += 1)
                    t[r] === e && (n = !0);
                return n
            }
            if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {},
            this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s)),
            this.internal.viewerpreferences.isSubscribed = !1),
            r = this.internal.viewerpreferences.configuration,
            "reset" === t || !0 === e) {
                var p = u.length;
                for (f = 0; f < p; f += 1)
                    r[u[f]].value = r[u[f]].defaultValue,
                    r[u[f]].explicitSet = !1
            }
            if ("object" === (0,
            n.Z)(t))
                for (a in t)
                    if (o = t[a],
                    d(u, a) && void 0 !== o) {
                        if ("boolean" === r[a].type && "boolean" == typeof o)
                            r[a].value = o;
                        else if ("name" === r[a].type && d(r[a].valueSet, o))
                            r[a].value = o;
                        else if ("integer" === r[a].type && Number.isInteger(o))
                            r[a].value = o;
                        else if ("array" === r[a].type) {
                            for (h = 0; h < o.length; h += 1)
                                if (i = !0,
                                1 === o[h].length && "number" == typeof o[h][0])
                                    c.push(String(o[h] - 1));
                                else if (o[h].length > 1) {
                                    for (l = 0; l < o[h].length; l += 1)
                                        "number" != typeof o[h][l] && (i = !1);
                                    !0 === i && c.push([o[h][0] - 1, o[h][1] - 1].join(" "))
                                }
                            r[a].value = "[" + c.join(" ") + "]"
                        } else
                            r[a].value = r[a].defaultValue;
                        r[a].explicitSet = !0
                    }
            return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
                var t, e = [];
                for (t in r)
                    !0 === r[t].explicitSet && ("name" === r[t].type ? e.push("/" + t + " /" + r[t].value) : e.push("/" + t + " " + r[t].value));
                0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
            }
            )),
            this.internal.viewerpreferences.isSubscribed = !0),
            this.internal.viewerpreferences.configuration = r,
            this
        }
        ,
        function(t) {
            var e = function() {
                var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>'
                  , e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'))
                  , r = unescape(encodeURIComponent(t))
                  , n = unescape(encodeURIComponent(this.internal.__metadata__.metadata))
                  , i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>"))
                  , a = unescape(encodeURIComponent("</x:xmpmeta>"))
                  , o = r.length + n.length + i.length + e.length + a.length;
                this.internal.__metadata__.metadata_object_number = this.internal.newObject(),
                this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"),
                this.internal.write("stream"),
                this.internal.write(e + r + n + i + a),
                this.internal.write("endstream"),
                this.internal.write("endobj")
            }
              , r = function() {
                this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
            };
            t.addMetadata = function(t, n) {
                return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
                    metadata: t,
                    namespaceuri: n || "http://jspdf.default.namespaceuri/"
                },
                this.internal.events.subscribe("putCatalog", r),
                this.internal.events.subscribe("postPutResources", e)),
                this
            }
        }(Ft.API),
        function(t) {
            var e = t.API
              , r = e.pdfEscape16 = function(t, e) {
                for (var r, n = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], a = [""], o = 0, s = t.length; o < s; ++o) {
                    if (r = e.metadata.characterToGlyph(t.charCodeAt(o)),
                    e.metadata.glyIdsUsed.push(r),
                    e.metadata.toUnicode[r] = t.charCodeAt(o),
                    -1 == n.indexOf(r) && (n.push(r),
                    n.push([parseInt(e.metadata.widthOfGlyph(r), 10)])),
                    "0" == r)
                        return a.join("");
                    r = r.toString(16),
                    a.push(i[4 - r.length], r)
                }
                return a.join("")
            }
              , n = function(t) {
                var e, r, n, i, a, o, s;
                for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
                n = [],
                o = 0,
                s = (r = Object.keys(t).sort((function(t, e) {
                    return t - e
                }
                ))).length; o < s; o++)
                    e = r[o],
                    n.length >= 100 && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar",
                    n = []),
                    void 0 !== t[e] && null !== t[e] && "function" == typeof t[e].toString && (i = ("0000" + t[e].toString(16)).slice(-4),
                    e = ("0000" + (+e).toString(16)).slice(-4),
                    n.push("<" + e + "><" + i + ">"));
                return n.length && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"),
                a + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
            };
            e.events.push(["putFont", function(e) {
                !function(e) {
                    var r = e.font
                      , i = e.out
                      , a = e.newObject
                      , o = e.putStream;
                    if (r.metadata instanceof t.API.TTFFont && "Identity-H" === r.encoding) {
                        for (var s = r.metadata.Unicode.widths, u = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), c = "", h = 0; h < u.length; h++)
                            c += String.fromCharCode(u[h]);
                        var l = a();
                        o({
                            data: c,
                            addLength1: !0,
                            objectId: l
                        }),
                        i("endobj");
                        var f = a();
                        o({
                            data: n(r.metadata.toUnicode),
                            addLength1: !0,
                            objectId: f
                        }),
                        i("endobj");
                        var d = a();
                        i("<<"),
                        i("/Type /FontDescriptor"),
                        i("/FontName /" + xt(r.fontName)),
                        i("/FontFile2 " + l + " 0 R"),
                        i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                        i("/Flags " + r.metadata.flags),
                        i("/StemV " + r.metadata.stemV),
                        i("/ItalicAngle " + r.metadata.italicAngle),
                        i("/Ascent " + r.metadata.ascender),
                        i("/Descent " + r.metadata.decender),
                        i("/CapHeight " + r.metadata.capHeight),
                        i(">>"),
                        i("endobj");
                        var p = a();
                        i("<<"),
                        i("/Type /Font"),
                        i("/BaseFont /" + xt(r.fontName)),
                        i("/FontDescriptor " + d + " 0 R"),
                        i("/W " + t.API.PDFObject.convert(s)),
                        i("/CIDToGIDMap /Identity"),
                        i("/DW 1000"),
                        i("/Subtype /CIDFontType2"),
                        i("/CIDSystemInfo"),
                        i("<<"),
                        i("/Supplement 0"),
                        i("/Registry (Adobe)"),
                        i("/Ordering (" + r.encoding + ")"),
                        i(">>"),
                        i(">>"),
                        i("endobj"),
                        r.objectNumber = a(),
                        i("<<"),
                        i("/Type /Font"),
                        i("/Subtype /Type0"),
                        i("/ToUnicode " + f + " 0 R"),
                        i("/BaseFont /" + xt(r.fontName)),
                        i("/Encoding /" + r.encoding),
                        i("/DescendantFonts [" + p + " 0 R]"),
                        i(">>"),
                        i("endobj"),
                        r.isAlreadyPutted = !0
                    }
                }(e)
            }
            ]),
            e.events.push(["putFont", function(e) {
                !function(e) {
                    var r = e.font
                      , i = e.out
                      , a = e.newObject
                      , o = e.putStream;
                    if (r.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                        for (var s = r.metadata.rawData, u = "", c = 0; c < s.length; c++)
                            u += String.fromCharCode(s[c]);
                        var h = a();
                        o({
                            data: u,
                            addLength1: !0,
                            objectId: h
                        }),
                        i("endobj");
                        var l = a();
                        o({
                            data: n(r.metadata.toUnicode),
                            addLength1: !0,
                            objectId: l
                        }),
                        i("endobj");
                        var f = a();
                        i("<<"),
                        i("/Descent " + r.metadata.decender),
                        i("/CapHeight " + r.metadata.capHeight),
                        i("/StemV " + r.metadata.stemV),
                        i("/Type /FontDescriptor"),
                        i("/FontFile2 " + h + " 0 R"),
                        i("/Flags 96"),
                        i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                        i("/FontName /" + xt(r.fontName)),
                        i("/ItalicAngle " + r.metadata.italicAngle),
                        i("/Ascent " + r.metadata.ascender),
                        i(">>"),
                        i("endobj"),
                        r.objectNumber = a();
                        for (var d = 0; d < r.metadata.hmtx.widths.length; d++)
                            r.metadata.hmtx.widths[d] = parseInt(r.metadata.hmtx.widths[d] * (1e3 / r.metadata.head.unitsPerEm));
                        i("<</Subtype/TrueType/Type/Font/ToUnicode " + l + " 0 R/BaseFont/" + xt(r.fontName) + "/FontDescriptor " + f + " 0 R/Encoding/" + r.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(r.metadata.hmtx.widths) + ">>"),
                        i("endobj"),
                        r.isAlreadyPutted = !0
                    }
                }(e)
            }
            ]);
            var i = function(t) {
                var e, n = t.text || "", i = t.x, a = t.y, o = t.options || {}, s = t.mutex || {}, u = s.pdfEscape, c = s.activeFontKey, h = s.fonts, l = c, f = "", d = 0, p = "", g = h[l].encoding;
                if ("Identity-H" !== h[l].encoding)
                    return {
                        text: n,
                        x: i,
                        y: a,
                        options: o,
                        mutex: s
                    };
                for (p = n,
                l = c,
                Array.isArray(n) && (p = n[0]),
                d = 0; d < p.length; d += 1)
                    h[l].metadata.hasOwnProperty("cmap") && (e = h[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),
                    e || p[d].charCodeAt(0) < 256 && h[l].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
                var m = "";
                return parseInt(l.slice(1)) < 14 || "WinAnsiEncoding" === g ? m = u(f, l).split("").map((function(t) {
                    return t.charCodeAt(0).toString(16)
                }
                )).join("") : "Identity-H" === g && (m = r(f, h[l])),
                s.isHex = !0,
                {
                    text: m,
                    x: i,
                    y: a,
                    options: o,
                    mutex: s
                }
            };
            e.events.push(["postProcessText", function(t) {
                var e = t.text || ""
                  , r = []
                  , n = {
                    text: e,
                    x: t.x,
                    y: t.y,
                    options: t.options,
                    mutex: t.mutex
                };
                if (Array.isArray(e)) {
                    var a = 0;
                    for (a = 0; a < e.length; a += 1)
                        Array.isArray(e[a]) && 3 === e[a].length ? r.push([i(Object.assign({}, n, {
                            text: e[a][0]
                        })).text, e[a][1], e[a][2]]) : r.push(i(Object.assign({}, n, {
                            text: e[a]
                        })).text);
                    t.text = r
                } else
                    t.text = i(Object.assign({}, n, {
                        text: e
                    })).text
            }
            ])
        }(Ft),
        function(t) {
            var e = function() {
                return void 0 === this.internal.vFS && (this.internal.vFS = {}),
                !0
            };
            t.existsFileInVFS = function(t) {
                return e.call(this),
                void 0 !== this.internal.vFS[t]
            }
            ,
            t.addFileToVFS = function(t, r) {
                return e.call(this),
                this.internal.vFS[t] = r,
                this
            }
            ,
            t.getFileFromVFS = function(t) {
                return e.call(this),
                void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
            }
        }(Ft.API),
        function(t) {
            t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t) {
                var r, n, i, a, o, s, u, c = e, h = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], l = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], f = {
                    L: 0,
                    R: 1,
                    EN: 2,
                    AN: 3,
                    N: 4,
                    B: 5,
                    S: 6
                }, d = {
                    0: 0,
                    5: 1,
                    6: 2,
                    7: 3,
                    32: 4,
                    251: 5,
                    254: 6,
                    255: 7
                }, p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], g = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m = !1, v = 0;
                this.__bidiEngine__ = {};
                var b = function(t) {
                    var e = t.charCodeAt()
                      , r = e >> 8
                      , n = d[r];
                    return void 0 !== n ? c[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g.test(r) ? "L" : 8 === r ? "R" : "N"
                }
                  , y = function(t) {
                    for (var e, r = 0; r < t.length; r++) {
                        if ("L" === (e = b(t.charAt(r))))
                            return !1;
                        if ("R" === e)
                            return !0
                    }
                    return !1
                }
                  , w = function(t, e, o, s) {
                    var u, c, h, l, f = e[s];
                    switch (f) {
                    case "L":
                    case "R":
                    case "LRE":
                    case "RLE":
                    case "LRO":
                    case "RLO":
                    case "PDF":
                        m = !1;
                        break;
                    case "N":
                    case "AN":
                        break;
                    case "EN":
                        m && (f = "AN");
                        break;
                    case "AL":
                        m = !0,
                        f = "R";
                        break;
                    case "WS":
                    case "BN":
                        f = "N";
                        break;
                    case "CS":
                        s < 1 || s + 1 >= e.length || "EN" !== (u = o[s - 1]) && "AN" !== u || "EN" !== (c = e[s + 1]) && "AN" !== c ? f = "N" : m && (c = "AN"),
                        f = c === u ? c : "N";
                        break;
                    case "ES":
                        f = "EN" === (u = s > 0 ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                        break;
                    case "ET":
                        if (s > 0 && "EN" === o[s - 1]) {
                            f = "EN";
                            break
                        }
                        if (m) {
                            f = "N";
                            break
                        }
                        for (h = s + 1,
                        l = e.length; h < l && "ET" === e[h]; )
                            h++;
                        f = h < l && "EN" === e[h] ? "EN" : "N";
                        break;
                    case "NSM":
                        if (i && !a) {
                            for (l = e.length,
                            h = s + 1; h < l && "NSM" === e[h]; )
                                h++;
                            if (h < l) {
                                var d = t[s]
                                  , p = d >= 1425 && d <= 2303 || 64286 === d;
                                if (u = e[h],
                                p && ("R" === u || "AL" === u)) {
                                    f = "R";
                                    break
                                }
                            }
                        }
                        f = s < 1 || "B" === (u = e[s - 1]) ? "N" : o[s - 1];
                        break;
                    case "B":
                        m = !1,
                        r = !0,
                        f = v;
                        break;
                    case "S":
                        n = !0,
                        f = "N"
                    }
                    return f
                }
                  , N = function(t, e, r) {
                    var n = t.split("");
                    return r && L(n, r, {
                        hiLevel: v
                    }),
                    n.reverse(),
                    e && e.reverse(),
                    n.join("")
                }
                  , L = function(t, e, i) {
                    var a, o, s, u, c, d = -1, p = t.length, g = 0, y = [], N = v ? l : h, L = [];
                    for (m = !1,
                    r = !1,
                    n = !1,
                    o = 0; o < p; o++)
                        L[o] = b(t[o]);
                    for (s = 0; s < p; s++) {
                        if (c = g,
                        y[s] = w(t, L, y, s),
                        a = 240 & (g = N[c][f[y[s]]]),
                        g &= 15,
                        e[s] = u = N[g][5],
                        a > 0)
                            if (16 === a) {
                                for (o = d; o < s; o++)
                                    e[o] = 1;
                                d = -1
                            } else
                                d = -1;
                        if (N[g][6])
                            -1 === d && (d = s);
                        else if (d > -1) {
                            for (o = d; o < s; o++)
                                e[o] = u;
                            d = -1
                        }
                        "B" === L[s] && (e[s] = 0),
                        i.hiLevel |= u
                    }
                    n && function(t, e, r) {
                        for (var n = 0; n < r; n++)
                            if ("S" === t[n]) {
                                e[n] = v;
                                for (var i = n - 1; i >= 0 && "WS" === t[i]; i--)
                                    e[i] = v
                            }
                    }(L, e, p)
                }
                  , A = function(t, e, n, i, a) {
                    if (!(a.hiLevel < t)) {
                        if (1 === t && 1 === v && !r)
                            return e.reverse(),
                            void (n && n.reverse());
                        for (var o, s, u, c, h = e.length, l = 0; l < h; ) {
                            if (i[l] >= t) {
                                for (u = l + 1; u < h && i[u] >= t; )
                                    u++;
                                for (c = l,
                                s = u - 1; c < s; c++,
                                s--)
                                    o = e[c],
                                    e[c] = e[s],
                                    e[s] = o,
                                    n && (o = n[c],
                                    n[c] = n[s],
                                    n[s] = o);
                                l = u
                            }
                            l++
                        }
                    }
                }
                  , x = function(t, e, r) {
                    var n = t.split("")
                      , i = {
                        hiLevel: v
                    };
                    return r || (r = []),
                    L(n, r, i),
                    function(t, e, r) {
                        if (0 !== r.hiLevel && u)
                            for (var n, i = 0; i < t.length; i++)
                                1 === e[i] && (n = p.indexOf(t[i])) >= 0 && (t[i] = p[n + 1])
                    }(n, r, i),
                    A(2, n, e, r, i),
                    A(1, n, e, r, i),
                    n.join("")
                };
                return this.__bidiEngine__.doBidiReorder = function(t, e, r) {
                    if (function(t, e) {
                        if (e)
                            for (var r = 0; r < t.length; r++)
                                e[r] = r;
                        void 0 === a && (a = y(t)),
                        void 0 === s && (s = y(t))
                    }(t, e),
                    i || !o || s)
                        if (i && o && a ^ s)
                            v = a ? 1 : 0,
                            t = N(t, e, r);
                        else if (!i && o && s)
                            v = a ? 1 : 0,
                            t = x(t, e, r),
                            t = N(t, e);
                        else if (!i || a || o || s) {
                            if (i && !o && a ^ s)
                                t = N(t, e),
                                a ? (v = 0,
                                t = x(t, e, r)) : (v = 1,
                                t = x(t, e, r),
                                t = N(t, e));
                            else if (i && a && !o && s)
                                v = 1,
                                t = x(t, e, r),
                                t = N(t, e);
                            else if (!i && !o && a ^ s) {
                                var n = u;
                                a ? (v = 1,
                                t = x(t, e, r),
                                v = 0,
                                u = !1,
                                t = x(t, e, r),
                                u = n) : (v = 0,
                                t = x(t, e, r),
                                t = N(t, e),
                                v = 1,
                                u = !1,
                                t = x(t, e, r),
                                u = n,
                                t = N(t, e))
                            }
                        } else
                            v = 0,
                            t = x(t, e, r);
                    else
                        v = a ? 1 : 0,
                        t = x(t, e, r);
                    return t
                }
                ,
                this.__bidiEngine__.setOptions = function(t) {
                    t && (i = t.isInputVisual,
                    o = t.isOutputVisual,
                    a = t.isInputRtl,
                    s = t.isOutputRtl,
                    u = t.isSymmetricSwapping)
                }
                ,
                this.__bidiEngine__.setOptions(t),
                this.__bidiEngine__
            }
            ;
            var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]
              , r = new t.__bidiEngine__({
                isInputVisual: !0
            });
            t.API.events.push(["postProcessText", function(t) {
                var e = t.text
                  , n = (t.x,
                t.y,
                t.options || {})
                  , i = (t.mutex,
                n.lang,
                []);
                if (n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual,
                r.setOptions(n),
                "[object Array]" === Object.prototype.toString.call(e)) {
                    var a = 0;
                    for (i = [],
                    a = 0; a < e.length; a += 1)
                        "[object Array]" === Object.prototype.toString.call(e[a]) ? i.push([r.doBidiReorder(e[a][0]), e[a][1], e[a][2]]) : i.push([r.doBidiReorder(e[a])]);
                    t.text = i
                } else
                    t.text = r.doBidiReorder(e);
                r.setOptions({
                    isInputVisual: !0
                })
            }
            ])
        }(Ft),
        Ft.API.TTFFont = function() {
            function t(t) {
                var e;
                if (this.rawData = t,
                e = this.contents = new Ke(t),
                this.contents.pos = 4,
                "ttcf" === e.readString(4))
                    throw new Error("TTCF not supported.");
                e.pos = 0,
                this.parse(),
                this.subset = new gr(this),
                this.registerTTF()
            }
            return t.open = function(e) {
                return new t(e)
            }
            ,
            t.prototype.parse = function() {
                return this.directory = new Ze(this.contents),
                this.head = new tr(this),
                this.name = new sr(this),
                this.cmap = new rr(this),
                this.toUnicode = {},
                this.hhea = new nr(this),
                this.maxp = new ur(this),
                this.hmtx = new cr(this),
                this.post = new ar(this),
                this.os2 = new ir(this),
                this.loca = new pr(this),
                this.glyf = new lr(this),
                this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender,
                this.decender = this.os2.exists && this.os2.decender || this.hhea.decender,
                this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap,
                this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
            }
            ,
            t.prototype.registerTTF = function() {
                var t, e, r, n, i;
                if (this.scaleFactor = 1e3 / this.head.unitsPerEm,
                this.bbox = function() {
                    var e, r, n, i;
                    for (i = [],
                    e = 0,
                    r = (n = this.bbox).length; e < r; e++)
                        t = n[e],
                        i.push(Math.round(t * this.scaleFactor));
                    return i
                }
                .call(this),
                this.stemV = 0,
                this.post.exists ? (r = 255 & (n = this.post.italic_angle),
                0 != (32768 & (e = n >> 16)) && (e = -(1 + (65535 ^ e))),
                this.italicAngle = +(e + "." + r)) : this.italicAngle = 0,
                this.ascender = Math.round(this.ascender * this.scaleFactor),
                this.decender = Math.round(this.decender * this.scaleFactor),
                this.lineGap = Math.round(this.lineGap * this.scaleFactor),
                this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender,
                this.xHeight = this.os2.exists && this.os2.xHeight || 0,
                this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8,
                this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i,
                this.isScript = 10 === this.familyClass,
                this.flags = 0,
                this.post.isFixedPitch && (this.flags |= 1),
                this.isSerif && (this.flags |= 2),
                this.isScript && (this.flags |= 8),
                0 !== this.italicAngle && (this.flags |= 64),
                this.flags |= 32,
                !this.cmap.unicode)
                    throw new Error("No unicode cmap for font")
            }
            ,
            t.prototype.characterToGlyph = function(t) {
                var e;
                return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0
            }
            ,
            t.prototype.widthOfGlyph = function(t) {
                var e;
                return e = 1e3 / this.head.unitsPerEm,
                this.hmtx.forGlyph(t).advance * e
            }
            ,
            t.prototype.widthOfString = function(t, e, r) {
                var n, i, a, o;
                for (a = 0,
                i = 0,
                o = (t = "" + t).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i)
                    n = t.charCodeAt(i),
                    a += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) || 0;
                return a * (e / 1e3)
            }
            ,
            t.prototype.lineHeight = function(t, e) {
                var r;
                return null == e && (e = !1),
                r = e ? this.lineGap : 0,
                (this.ascender + r - this.decender) / 1e3 * t
            }
            ,
            t
        }();
        var Xe, Ke = function() {
            function t(t) {
                this.data = null != t ? t : [],
                this.pos = 0,
                this.length = this.data.length
            }
            return t.prototype.readByte = function() {
                return this.data[this.pos++]
            }
            ,
            t.prototype.writeByte = function(t) {
                return this.data[this.pos++] = t
            }
            ,
            t.prototype.readUInt32 = function() {
                return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
            }
            ,
            t.prototype.writeUInt32 = function(t) {
                return this.writeByte(t >>> 24 & 255),
                this.writeByte(t >> 16 & 255),
                this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt32 = function() {
                var t;
                return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t
            }
            ,
            t.prototype.writeInt32 = function(t) {
                return t < 0 && (t += 4294967296),
                this.writeUInt32(t)
            }
            ,
            t.prototype.readUInt16 = function() {
                return this.readByte() << 8 | this.readByte()
            }
            ,
            t.prototype.writeUInt16 = function(t) {
                return this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt16 = function() {
                var t;
                return (t = this.readUInt16()) >= 32768 ? t - 65536 : t
            }
            ,
            t.prototype.writeInt16 = function(t) {
                return t < 0 && (t += 65536),
                this.writeUInt16(t)
            }
            ,
            t.prototype.readString = function(t) {
                var e, r;
                for (r = [],
                e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e)
                    r[e] = String.fromCharCode(this.readByte());
                return r.join("")
            }
            ,
            t.prototype.writeString = function(t) {
                var e, r, n;
                for (n = [],
                e = 0,
                r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e)
                    n.push(this.writeByte(t.charCodeAt(e)));
                return n
            }
            ,
            t.prototype.readShort = function() {
                return this.readInt16()
            }
            ,
            t.prototype.writeShort = function(t) {
                return this.writeInt16(t)
            }
            ,
            t.prototype.readLongLong = function() {
                var t, e, r, n, i, a, o, s;
                return t = this.readByte(),
                e = this.readByte(),
                r = this.readByte(),
                n = this.readByte(),
                i = this.readByte(),
                a = this.readByte(),
                o = this.readByte(),
                s = this.readByte(),
                128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ n) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * r + 4294967296 * n + 16777216 * i + 65536 * a + 256 * o + s
            }
            ,
            t.prototype.writeLongLong = function(t) {
                var e, r;
                return e = Math.floor(t / 4294967296),
                r = 4294967295 & t,
                this.writeByte(e >> 24 & 255),
                this.writeByte(e >> 16 & 255),
                this.writeByte(e >> 8 & 255),
                this.writeByte(255 & e),
                this.writeByte(r >> 24 & 255),
                this.writeByte(r >> 16 & 255),
                this.writeByte(r >> 8 & 255),
                this.writeByte(255 & r)
            }
            ,
            t.prototype.readInt = function() {
                return this.readInt32()
            }
            ,
            t.prototype.writeInt = function(t) {
                return this.writeInt32(t)
            }
            ,
            t.prototype.read = function(t) {
                var e, r;
                for (e = [],
                r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r)
                    e.push(this.readByte());
                return e
            }
            ,
            t.prototype.write = function(t) {
                var e, r, n, i;
                for (i = [],
                r = 0,
                n = t.length; r < n; r++)
                    e = t[r],
                    i.push(this.writeByte(e));
                return i
            }
            ,
            t
        }(), Ze = function() {
            var t;
            function e(t) {
                var e, r, n;
                for (this.scalarType = t.readInt(),
                this.tableCount = t.readShort(),
                this.searchRange = t.readShort(),
                this.entrySelector = t.readShort(),
                this.rangeShift = t.readShort(),
                this.tables = {},
                r = 0,
                n = this.tableCount; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)
                    e = {
                        tag: t.readString(4),
                        checksum: t.readInt(),
                        offset: t.readInt(),
                        length: t.readInt()
                    },
                    this.tables[e.tag] = e
            }
            return e.prototype.encode = function(e) {
                var r, n, i, a, o, s, u, c, h, l, f, d, p;
                for (p in f = Object.keys(e).length,
                s = Math.log(2),
                h = 16 * Math.floor(Math.log(f) / s),
                a = Math.floor(h / s),
                c = 16 * f - h,
                (n = new Ke).writeInt(this.scalarType),
                n.writeShort(f),
                n.writeShort(h),
                n.writeShort(a),
                n.writeShort(c),
                i = 16 * f,
                u = n.pos + i,
                o = null,
                d = [],
                e)
                    for (l = e[p],
                    n.writeString(p),
                    n.writeInt(t(l)),
                    n.writeInt(u),
                    n.writeInt(l.length),
                    d = d.concat(l),
                    "head" === p && (o = u),
                    u += l.length; u % 4; )
                        d.push(0),
                        u++;
                return n.write(d),
                r = 2981146554 - t(n.data),
                n.pos = o + 8,
                n.writeUInt32(r),
                n.data
            }
            ,
            t = function(t) {
                var e, r, n, i;
                for (t = hr.call(t); t.length % 4; )
                    t.push(0);
                for (n = new Ke(t),
                r = 0,
                e = 0,
                i = t.length; e < i; e = e += 4)
                    r += n.readUInt32();
                return 4294967295 & r
            }
            ,
            e
        }(), $e = {}.hasOwnProperty, Qe = function(t, e) {
            for (var r in e)
                $e.call(e, r) && (t[r] = e[r]);
            function n() {
                this.constructor = t
            }
            return n.prototype = e.prototype,
            t.prototype = new n,
            t.__super__ = e.prototype,
            t
        };
        Xe = function() {
            function t(t) {
                var e;
                this.file = t,
                e = this.file.directory.tables[this.tag],
                this.exists = !!e,
                e && (this.offset = e.offset,
                this.length = e.length,
                this.parse(this.file.contents))
            }
            return t.prototype.parse = function() {}
            ,
            t.prototype.encode = function() {}
            ,
            t.prototype.raw = function() {
                return this.exists ? (this.file.contents.pos = this.offset,
                this.file.contents.read(this.length)) : null
            }
            ,
            t
        }();
        var tr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "head",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.revision = t.readInt(),
                this.checkSumAdjustment = t.readInt(),
                this.magicNumber = t.readInt(),
                this.flags = t.readShort(),
                this.unitsPerEm = t.readShort(),
                this.created = t.readLongLong(),
                this.modified = t.readLongLong(),
                this.xMin = t.readShort(),
                this.yMin = t.readShort(),
                this.xMax = t.readShort(),
                this.yMax = t.readShort(),
                this.macStyle = t.readShort(),
                this.lowestRecPPEM = t.readShort(),
                this.fontDirectionHint = t.readShort(),
                this.indexToLocFormat = t.readShort(),
                this.glyphDataFormat = t.readShort()
            }
            ,
            e.prototype.encode = function(t) {
                var e;
                return (e = new Ke).writeInt(this.version),
                e.writeInt(this.revision),
                e.writeInt(this.checkSumAdjustment),
                e.writeInt(this.magicNumber),
                e.writeShort(this.flags),
                e.writeShort(this.unitsPerEm),
                e.writeLongLong(this.created),
                e.writeLongLong(this.modified),
                e.writeShort(this.xMin),
                e.writeShort(this.yMin),
                e.writeShort(this.xMax),
                e.writeShort(this.yMax),
                e.writeShort(this.macStyle),
                e.writeShort(this.lowestRecPPEM),
                e.writeShort(this.fontDirectionHint),
                e.writeShort(t),
                e.writeShort(this.glyphDataFormat),
                e.data
            }
            ,
            e
        }()
          , er = function() {
            function t(t, e) {
                var r, n, i, a, o, s, u, c, h, l, f, d, p, g, m, v, b;
                switch (this.platformID = t.readUInt16(),
                this.encodingID = t.readShort(),
                this.offset = e + t.readInt(),
                h = t.pos,
                t.pos = this.offset,
                this.format = t.readUInt16(),
                this.length = t.readUInt16(),
                this.language = t.readUInt16(),
                this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format,
                this.codeMap = {},
                this.format) {
                case 0:
                    for (s = 0; s < 256; ++s)
                        this.codeMap[s] = t.readByte();
                    break;
                case 4:
                    for (f = t.readUInt16(),
                    l = f / 2,
                    t.pos += 6,
                    i = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    t.pos += 2,
                    p = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    u = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    c = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    n = (this.length - t.pos + this.offset) / 2,
                    o = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= n ? e < n : e > n; s = 0 <= n ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    s = m = 0,
                    b = i.length; m < b; s = ++m)
                        for (g = i[s],
                        r = v = d = p[s]; d <= g ? v <= g : v >= g; r = d <= g ? ++v : --v)
                            0 === c[s] ? a = r + u[s] : 0 !== (a = o[c[s] / 2 + (r - d) - (l - s)] || 0) && (a += u[s]),
                            this.codeMap[r] = 65535 & a
                }
                t.pos = h
            }
            return t.encode = function(t, e) {
                var r, n, i, a, o, s, u, c, h, l, f, d, p, g, m, v, b, y, w, N, L, A, x, S, _, P, k, I, F, C, j, O, B, M, E, q, D, R, T, U, z, H, W, V, G, Y;
                switch (I = new Ke,
                a = Object.keys(t).sort((function(t, e) {
                    return t - e
                }
                )),
                e) {
                case "macroman":
                    for (p = 0,
                    g = function() {
                        var t = [];
                        for (d = 0; d < 256; ++d)
                            t.push(0);
                        return t
                    }(),
                    v = {
                        0: 0
                    },
                    i = {},
                    F = 0,
                    B = a.length; F < B; F++)
                        null == v[W = t[n = a[F]]] && (v[W] = ++p),
                        i[n] = {
                            old: t[n],
                            new: v[t[n]]
                        },
                        g[n] = v[t[n]];
                    return I.writeUInt16(1),
                    I.writeUInt16(0),
                    I.writeUInt32(12),
                    I.writeUInt16(0),
                    I.writeUInt16(262),
                    I.writeUInt16(0),
                    I.write(g),
                    {
                        charMap: i,
                        subtable: I.data,
                        maxGlyphID: p + 1
                    };
                case "unicode":
                    for (P = [],
                    h = [],
                    b = 0,
                    v = {},
                    r = {},
                    m = u = null,
                    C = 0,
                    M = a.length; C < M; C++)
                        null == v[w = t[n = a[C]]] && (v[w] = ++b),
                        r[n] = {
                            old: w,
                            new: v[w]
                        },
                        o = v[w] - n,
                        null != m && o === u || (m && h.push(m),
                        P.push(n),
                        u = o),
                        m = n;
                    for (m && h.push(m),
                    h.push(65535),
                    P.push(65535),
                    S = 2 * (x = P.length),
                    A = 2 * Math.pow(Math.log(x) / Math.LN2, 2),
                    l = Math.log(A / 2) / Math.LN2,
                    L = 2 * x - A,
                    s = [],
                    N = [],
                    f = [],
                    d = j = 0,
                    E = P.length; j < E; d = ++j) {
                        if (_ = P[d],
                        c = h[d],
                        65535 === _) {
                            s.push(0),
                            N.push(0);
                            break
                        }
                        if (_ - (k = r[_].new) >= 32768)
                            for (s.push(0),
                            N.push(2 * (f.length + x - d)),
                            n = O = _; _ <= c ? O <= c : O >= c; n = _ <= c ? ++O : --O)
                                f.push(r[n].new);
                        else
                            s.push(k - _),
                            N.push(0)
                    }
                    for (I.writeUInt16(3),
                    I.writeUInt16(1),
                    I.writeUInt32(12),
                    I.writeUInt16(4),
                    I.writeUInt16(16 + 8 * x + 2 * f.length),
                    I.writeUInt16(0),
                    I.writeUInt16(S),
                    I.writeUInt16(A),
                    I.writeUInt16(l),
                    I.writeUInt16(L),
                    z = 0,
                    q = h.length; z < q; z++)
                        n = h[z],
                        I.writeUInt16(n);
                    for (I.writeUInt16(0),
                    H = 0,
                    D = P.length; H < D; H++)
                        n = P[H],
                        I.writeUInt16(n);
                    for (V = 0,
                    R = s.length; V < R; V++)
                        o = s[V],
                        I.writeUInt16(o);
                    for (G = 0,
                    T = N.length; G < T; G++)
                        y = N[G],
                        I.writeUInt16(y);
                    for (Y = 0,
                    U = f.length; Y < U; Y++)
                        p = f[Y],
                        I.writeUInt16(p);
                    return {
                        charMap: r,
                        subtable: I.data,
                        maxGlyphID: b + 1
                    }
                }
            }
            ,
            t
        }()
          , rr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "cmap",
            e.prototype.parse = function(t) {
                var e, r, n;
                for (t.pos = this.offset,
                this.version = t.readUInt16(),
                n = t.readUInt16(),
                this.tables = [],
                this.unicode = null,
                r = 0; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)
                    e = new er(t,this.offset),
                    this.tables.push(e),
                    e.isUnicode && null == this.unicode && (this.unicode = e);
                return !0
            }
            ,
            e.encode = function(t, e) {
                var r, n;
                return null == e && (e = "macroman"),
                r = er.encode(t, e),
                (n = new Ke).writeUInt16(0),
                n.writeUInt16(1),
                r.table = n.data.concat(r.subtable),
                r
            }
            ,
            e
        }()
          , nr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "hhea",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.ascender = t.readShort(),
                this.decender = t.readShort(),
                this.lineGap = t.readShort(),
                this.advanceWidthMax = t.readShort(),
                this.minLeftSideBearing = t.readShort(),
                this.minRightSideBearing = t.readShort(),
                this.xMaxExtent = t.readShort(),
                this.caretSlopeRise = t.readShort(),
                this.caretSlopeRun = t.readShort(),
                this.caretOffset = t.readShort(),
                t.pos += 8,
                this.metricDataFormat = t.readShort(),
                this.numberOfMetrics = t.readUInt16()
            }
            ,
            e
        }()
          , ir = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "OS/2",
            e.prototype.parse = function(t) {
                if (t.pos = this.offset,
                this.version = t.readUInt16(),
                this.averageCharWidth = t.readShort(),
                this.weightClass = t.readUInt16(),
                this.widthClass = t.readUInt16(),
                this.type = t.readShort(),
                this.ySubscriptXSize = t.readShort(),
                this.ySubscriptYSize = t.readShort(),
                this.ySubscriptXOffset = t.readShort(),
                this.ySubscriptYOffset = t.readShort(),
                this.ySuperscriptXSize = t.readShort(),
                this.ySuperscriptYSize = t.readShort(),
                this.ySuperscriptXOffset = t.readShort(),
                this.ySuperscriptYOffset = t.readShort(),
                this.yStrikeoutSize = t.readShort(),
                this.yStrikeoutPosition = t.readShort(),
                this.familyClass = t.readShort(),
                this.panose = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 10; ++e)
                        r.push(t.readByte());
                    return r
                }(),
                this.charRange = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 4; ++e)
                        r.push(t.readInt());
                    return r
                }(),
                this.vendorID = t.readString(4),
                this.selection = t.readShort(),
                this.firstCharIndex = t.readShort(),
                this.lastCharIndex = t.readShort(),
                this.version > 0 && (this.ascent = t.readShort(),
                this.descent = t.readShort(),
                this.lineGap = t.readShort(),
                this.winAscent = t.readShort(),
                this.winDescent = t.readShort(),
                this.codePageRange = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 2; e = ++e)
                        r.push(t.readInt());
                    return r
                }(),
                this.version > 1))
                    return this.xHeight = t.readShort(),
                    this.capHeight = t.readShort(),
                    this.defaultChar = t.readShort(),
                    this.breakChar = t.readShort(),
                    this.maxContext = t.readShort()
            }
            ,
            e
        }()
          , ar = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "post",
            e.prototype.parse = function(t) {
                var e, r, n;
                switch (t.pos = this.offset,
                this.format = t.readInt(),
                this.italicAngle = t.readInt(),
                this.underlinePosition = t.readShort(),
                this.underlineThickness = t.readShort(),
                this.isFixedPitch = t.readInt(),
                this.minMemType42 = t.readInt(),
                this.maxMemType42 = t.readInt(),
                this.minMemType1 = t.readInt(),
                this.maxMemType1 = t.readInt(),
                this.format) {
                case 65536:
                case 196608:
                    break;
                case 131072:
                    var i;
                    for (r = t.readUInt16(),
                    this.glyphNameIndex = [],
                    i = 0; 0 <= r ? i < r : i > r; i = 0 <= r ? ++i : --i)
                        this.glyphNameIndex.push(t.readUInt16());
                    for (this.names = [],
                    n = []; t.pos < this.offset + this.length; )
                        e = t.readByte(),
                        n.push(this.names.push(t.readString(e)));
                    return n;
                case 151552:
                    return r = t.readUInt16(),
                    this.offsets = t.read(r);
                case 262144:
                    return this.map = function() {
                        var e, r, n;
                        for (n = [],
                        i = e = 0,
                        r = this.file.maxp.numGlyphs; 0 <= r ? e < r : e > r; i = 0 <= r ? ++e : --e)
                            n.push(t.readUInt32());
                        return n
                    }
                    .call(this)
                }
            }
            ,
            e
        }()
          , or = function(t, e) {
            this.raw = t,
            this.length = t.length,
            this.platformID = e.platformID,
            this.encodingID = e.encodingID,
            this.languageID = e.languageID
        }
          , sr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "name",
            e.prototype.parse = function(t) {
                var e, r, n, i, a, o, s, u, c, h, l;
                for (t.pos = this.offset,
                t.readShort(),
                e = t.readShort(),
                o = t.readShort(),
                r = [],
                i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i)
                    r.push({
                        platformID: t.readShort(),
                        encodingID: t.readShort(),
                        languageID: t.readShort(),
                        nameID: t.readShort(),
                        length: t.readShort(),
                        offset: this.offset + o + t.readShort()
                    });
                for (s = {},
                i = c = 0,
                h = r.length; c < h; i = ++c)
                    n = r[i],
                    t.pos = n.offset,
                    u = t.readString(n.length),
                    a = new or(u,n),
                    null == s[l = n.nameID] && (s[l] = []),
                    s[n.nameID].push(a);
                this.strings = s,
                this.copyright = s[0],
                this.fontFamily = s[1],
                this.fontSubfamily = s[2],
                this.uniqueSubfamily = s[3],
                this.fontName = s[4],
                this.version = s[5];
                try {
                    this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                } catch (t) {
                    this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                }
                return this.trademark = s[7],
                this.manufacturer = s[8],
                this.designer = s[9],
                this.description = s[10],
                this.vendorUrl = s[11],
                this.designerUrl = s[12],
                this.license = s[13],
                this.licenseUrl = s[14],
                this.preferredFamily = s[15],
                this.preferredSubfamily = s[17],
                this.compatibleFull = s[18],
                this.sampleText = s[19]
            }
            ,
            e
        }()
          , ur = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "maxp",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.numGlyphs = t.readUInt16(),
                this.maxPoints = t.readUInt16(),
                this.maxContours = t.readUInt16(),
                this.maxCompositePoints = t.readUInt16(),
                this.maxComponentContours = t.readUInt16(),
                this.maxZones = t.readUInt16(),
                this.maxTwilightPoints = t.readUInt16(),
                this.maxStorage = t.readUInt16(),
                this.maxFunctionDefs = t.readUInt16(),
                this.maxInstructionDefs = t.readUInt16(),
                this.maxStackElements = t.readUInt16(),
                this.maxSizeOfInstructions = t.readUInt16(),
                this.maxComponentElements = t.readUInt16(),
                this.maxComponentDepth = t.readUInt16()
            }
            ,
            e
        }()
          , cr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "hmtx",
            e.prototype.parse = function(t) {
                var e, r, n, i, a, o, s;
                for (t.pos = this.offset,
                this.metrics = [],
                e = 0,
                o = this.file.hhea.numberOfMetrics; 0 <= o ? e < o : e > o; e = 0 <= o ? ++e : --e)
                    this.metrics.push({
                        advance: t.readUInt16(),
                        lsb: t.readInt16()
                    });
                for (n = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
                this.leftSideBearings = function() {
                    var r, i;
                    for (i = [],
                    e = r = 0; 0 <= n ? r < n : r > n; e = 0 <= n ? ++r : --r)
                        i.push(t.readInt16());
                    return i
                }(),
                this.widths = function() {
                    var t, e, r, n;
                    for (n = [],
                    t = 0,
                    e = (r = this.metrics).length; t < e; t++)
                        i = r[t],
                        n.push(i.advance);
                    return n
                }
                .call(this),
                r = this.widths[this.widths.length - 1],
                s = [],
                e = a = 0; 0 <= n ? a < n : a > n; e = 0 <= n ? ++a : --a)
                    s.push(this.widths.push(r));
                return s
            }
            ,
            e.prototype.forGlyph = function(t) {
                return t in this.metrics ? this.metrics[t] : {
                    advance: this.metrics[this.metrics.length - 1].advance,
                    lsb: this.leftSideBearings[t - this.metrics.length]
                }
            }
            ,
            e
        }()
          , hr = [].slice
          , lr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "glyf",
            e.prototype.parse = function() {
                return this.cache = {}
            }
            ,
            e.prototype.glyphFor = function(t) {
                var e, r, n, i, a, o, s, u, c, h;
                return t in this.cache ? this.cache[t] : (i = this.file.loca,
                e = this.file.contents,
                r = i.indexOf(t),
                0 === (n = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + r,
                a = (o = new Ke(e.read(n))).readShort(),
                u = o.readShort(),
                h = o.readShort(),
                s = o.readShort(),
                c = o.readShort(),
                this.cache[t] = -1 === a ? new dr(o,u,h,s,c) : new fr(o,a,u,h,s,c),
                this.cache[t]))
            }
            ,
            e.prototype.encode = function(t, e, r) {
                var n, i, a, o, s;
                for (a = [],
                i = [],
                o = 0,
                s = e.length; o < s; o++)
                    n = t[e[o]],
                    i.push(a.length),
                    n && (a = a.concat(n.encode(r)));
                return i.push(a.length),
                {
                    table: a,
                    offsets: i
                }
            }
            ,
            e
        }()
          , fr = function() {
            function t(t, e, r, n, i, a) {
                this.raw = t,
                this.numberOfContours = e,
                this.xMin = r,
                this.yMin = n,
                this.xMax = i,
                this.yMax = a,
                this.compound = !1
            }
            return t.prototype.encode = function() {
                return this.raw.data
            }
            ,
            t
        }()
          , dr = function() {
            function t(t, e, r, n, i) {
                var a, o;
                for (this.raw = t,
                this.xMin = e,
                this.yMin = r,
                this.xMax = n,
                this.yMax = i,
                this.compound = !0,
                this.glyphIDs = [],
                this.glyphOffsets = [],
                a = this.raw; o = a.readShort(),
                this.glyphOffsets.push(a.pos),
                this.glyphIDs.push(a.readUInt16()),
                32 & o; )
                    a.pos += 1 & o ? 4 : 2,
                    128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2)
            }
            return t.prototype.encode = function() {
                var t, e, r;
                for (e = new Ke(hr.call(this.raw.data)),
                t = 0,
                r = this.glyphIDs.length; t < r; ++t)
                    e.pos = this.glyphOffsets[t];
                return e.data
            }
            ,
            t
        }()
          , pr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return Qe(e, Xe),
            e.prototype.tag = "loca",
            e.prototype.parse = function(t) {
                var e, r;
                return t.pos = this.offset,
                e = this.file.head.indexToLocFormat,
                this.offsets = 0 === e ? function() {
                    var e, n;
                    for (n = [],
                    r = 0,
                    e = this.length; r < e; r += 2)
                        n.push(2 * t.readUInt16());
                    return n
                }
                .call(this) : function() {
                    var e, n;
                    for (n = [],
                    r = 0,
                    e = this.length; r < e; r += 4)
                        n.push(t.readUInt32());
                    return n
                }
                .call(this)
            }
            ,
            e.prototype.indexOf = function(t) {
                return this.offsets[t]
            }
            ,
            e.prototype.lengthOf = function(t) {
                return this.offsets[t + 1] - this.offsets[t]
            }
            ,
            e.prototype.encode = function(t, e) {
                for (var r = new Uint32Array(this.offsets.length), n = 0, i = 0, a = 0; a < r.length; ++a)
                    if (r[a] = n,
                    i < e.length && e[i] == a) {
                        ++i,
                        r[a] = n;
                        var o = this.offsets[a]
                          , s = this.offsets[a + 1] - o;
                        s > 0 && (n += s)
                    }
                for (var u = new Array(4 * r.length), c = 0; c < r.length; ++c)
                    u[4 * c + 3] = 255 & r[c],
                    u[4 * c + 2] = (65280 & r[c]) >> 8,
                    u[4 * c + 1] = (16711680 & r[c]) >> 16,
                    u[4 * c] = (4278190080 & r[c]) >> 24;
                return u
            }
            ,
            e
        }()
          , gr = function() {
            function t(t) {
                this.font = t,
                this.subset = {},
                this.unicodes = {},
                this.next = 33
            }
            return t.prototype.generateCmap = function() {
                var t, e, r, n, i;
                for (e in n = this.font.cmap.tables[0].codeMap,
                t = {},
                i = this.subset)
                    r = i[e],
                    t[e] = n[r];
                return t
            }
            ,
            t.prototype.glyphsFor = function(t) {
                var e, r, n, i, a, o, s;
                for (n = {},
                a = 0,
                o = t.length; a < o; a++)
                    n[i = t[a]] = this.font.glyf.glyphFor(i);
                for (i in e = [],
                n)
                    (null != (r = n[i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
                if (e.length > 0)
                    for (i in s = this.glyphsFor(e))
                        r = s[i],
                        n[i] = r;
                return n
            }
            ,
            t.prototype.encode = function(t, e) {
                var r, n, i, a, o, s, u, c, h, l, f, d, p, g, m;
                for (n in r = rr.encode(this.generateCmap(), "unicode"),
                a = this.glyphsFor(t),
                f = {
                    0: 0
                },
                m = r.charMap)
                    f[(s = m[n]).old] = s.new;
                for (d in l = r.maxGlyphID,
                a)
                    d in f || (f[d] = l++);
                return c = function(t) {
                    var e, r;
                    for (e in r = {},
                    t)
                        r[t[e]] = e;
                    return r
                }(f),
                h = Object.keys(c).sort((function(t, e) {
                    return t - e
                }
                )),
                p = function() {
                    var t, e, r;
                    for (r = [],
                    t = 0,
                    e = h.length; t < e; t++)
                        o = h[t],
                        r.push(c[o]);
                    return r
                }(),
                i = this.font.glyf.encode(a, p, f),
                u = this.font.loca.encode(i.offsets, p),
                g = {
                    cmap: this.font.cmap.raw(),
                    glyf: i.table,
                    loca: u,
                    hmtx: this.font.hmtx.raw(),
                    hhea: this.font.hhea.raw(),
                    maxp: this.font.maxp.raw(),
                    post: this.font.post.raw(),
                    name: this.font.name.raw(),
                    head: this.font.head.encode(e)
                },
                this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()),
                this.font.directory.encode(g)
            }
            ,
            t
        }();
        Ft.API.PDFObject = function() {
            var t;
            function e() {}
            return t = function(t, e) {
                return (Array(e + 1).join("0") + t).slice(-e)
            }
            ,
            e.convert = function(r) {
                var n, i, a, o;
                if (Array.isArray(r))
                    return "[" + function() {
                        var t, i, a;
                        for (a = [],
                        t = 0,
                        i = r.length; t < i; t++)
                            n = r[t],
                            a.push(e.convert(n));
                        return a
                    }().join(" ") + "]";
                if ("string" == typeof r)
                    return "/" + r;
                if (null != r ? r.isString : void 0)
                    return "(" + r + ")";
                if (r instanceof Date)
                    return "(D:" + t(r.getUTCFullYear(), 4) + t(r.getUTCMonth(), 2) + t(r.getUTCDate(), 2) + t(r.getUTCHours(), 2) + t(r.getUTCMinutes(), 2) + t(r.getUTCSeconds(), 2) + "Z)";
                if ("[object Object]" === {}.toString.call(r)) {
                    for (i in a = ["<<"],
                    r)
                        o = r[i],
                        a.push("/" + i + " " + e.convert(o));
                    return a.push(">>"),
                    a.join("\n")
                }
                return "" + r
            }
            ,
            e
        }();
        const mr = Ft
    }
    ,
    7209: (t, e, r) => {
        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        r.d(e, {
            Z: () => n
        })
    }
}]);
