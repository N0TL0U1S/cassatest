"use strict";
(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[534], {
    19121: (i, s, e) => {
        e.d(s, {
            y: () => c
        });
        var t = e(81271)
          , a = e.n(t)
          , n = e(22131)
          , m = e(47442)
          , o = e(23859)
          , r = e(66115)
          , p = e(81026);
        class c extends n.kx {
            constructor(i) {
                super(i)
            }
            showTipView(i, s, e) {
                clearTimeout(this.tipViewHideTimer);
                const t = a()("#" + this.posGame.preFix + "wrapper .mainContent")
                  , n = a()("#" + this.posGame.preFix + "ticket_parent")
                  , c = a()("#" + this.posGame.preFix + "parent_1")
                  , d = a()("#" + this.posGame.preFix + "parent_2")
                  , h = a()("#" + this.posGame.preFix + "parent_1_active")
                  , l = a()("#" + this.posGame.preFix + "parent_2_active")
                  , u = a()("#" + this.posGame.preFix + "coinCont")
                  , x = a()("#" + this.posGame.preFix + "func_parent_1")
                  , g = a()("#" + this.posGame.preFix + "func_parent_2")
                  , w = a()("#" + this.posGame.preFix + "tpParent")
                  , G = .9 * m.Z.gameSettings.tipViewAnimTime;
                if (o.O.performanceLevel !== r.BR.LOW) {
                    a()("#" + this.posGame.preFix + "coinCont .coin0_txt").css({
                        "transition-duration": .2 * m.Z.gameSettings.tipViewAnimTime + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "coinCont .coinSing").css({
                        "transition-duration": .6 * m.Z.gameSettings.tipViewAnimTime / 5 + "ms"
                    }),
                    a()("." + this.posGame.preFix + "selNumCont").css({
                        "transition-duration": m.Z.gameSettings.tipViewAnimTime / (this.posGame.getNumberCompetitor() + 1) + "ms"
                    }),
                    a()("." + this.posGame.preFix + "activeCont").css({
                        "transition-duration": m.Z.gameSettings.tipViewAnimTime / (this.posGame.getNumberCompetitor() + 1) + "ms"
                    }),
                    p.Y.debug("Show Tip view, addOffset:" + i);
                    const e = m.Z.gameSettings.tipViewAnimTime / this.posGame.getNumberCompetitor() + 1;
                    let o = i;
                    for (let i = this.posGame.getNumberCompetitor(); i >= 0; i--) {
                        const t = Math.max(0, o - s);
                        i <= 0 ? (a()("#" + this.posGame.preFix + "first").css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "second").css("transition-delay", t + "ms")) : (a()("#" + this.posGame.preFix + "selNumbFirst" + i).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "selNumbSecond" + i).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "activeFirst" + i).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "activeSecond" + i).css("transition-delay", t + "ms")),
                        o += e
                    }
                    const r = Math.max(.7 * m.Z.gameSettings.tipViewAnimTime - s, 0) + i;
                    a()("#" + this.posGame.preFix + "coinCont .coin0_txt").css("transition-delay", r + "ms");
                    const c = .1 * m.Z.gameSettings.tipViewAnimTime + i
                      , d = .95 * m.Z.gameSettings.tipViewAnimTime / this.posGame.coinsValueList.length;
                    let h = -1;
                    for (let e = this.posGame.coinsValueList.length - 1; e >= 0; e--) {
                        let t = 0;
                        t = e === this.posGame.coinsValueList.length - 1 ? i : e === this.posGame.coinsValueList.length - 2 ? c : c + d * h,
                        t = Math.max(t - s, 0),
                        a()("#" + this.posGame.preFix + "coinCont .coinPos" + e).css({
                            "transition-duration": d + "ms, 0ms, " + c + "ms",
                            "transition-delay": t + "ms, " + t + "ms, 0ms"
                        }),
                        h++
                    }
                    a()("#" + this.posGame.preFix + "coinCont .coinOverlay").css({
                        "transition-delay": i + "ms "
                    });
                    const l = .5 * m.Z.gameSettings.tipViewAnimTime
                      , u = Math.max(.3 * m.Z.gameSettings.tipViewAnimTime - s, 0) + i
                      , x = .3 * m.Z.gameSettings.tipViewAnimTime
                      , g = i;
                    a()("#" + this.posGame.preFix + "func_parent_1 .functxt").css({
                        "transition-duration": l + "ms",
                        "transition-delay": u + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_2 .functxt").css({
                        "transition-duration": l + "ms",
                        "transition-delay": u + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_1>div").css({
                        "transition-duration": x + "ms",
                        "transition-delay": g + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_2>div").css({
                        "transition-duration": x + "ms",
                        "transition-delay": g + "ms"
                    });
                    const w = .4 * m.Z.gameSettings.tipViewAnimTime;
                    a()("#" + this.posGame.preFix + "tpParent .tickCreate").css({
                        "transition-duration": w + "ms",
                        "transition-delay": i + "ms"
                    });
                    const S = .1 * m.Z.gameSettings.tipViewAnimTime
                      , C = Math.max(.8 * m.Z.gameSettings.tipViewAnimTime - s, 0) + i;
                    n.css({
                        "transition-property": "visibility, filter",
                        "transition-duration": "0ms, " + S + "ms",
                        "transition-delay": C + "ms, " + C + "ms"
                    }),
                    this._ticketWasOpen || (a()("#" + this.posGame.preFix + "ticket_parent .openHide").css({
                        "transition-duration": ""
                    }),
                    t.css({
                        "transition-duration": "0ms, " + s + Math.max(G - s, 0) + "ms",
                        "transition-delay": s + "ms, " + s + "ms"
                    }))
                }
                if (this._ticketWasOpen || t.removeClass("tickViewHide"),
                n.removeClass("tickViewHide"),
                c.removeClass("tickViewHide"),
                d.removeClass("tickViewHide"),
                h.removeClass("tickViewHide"),
                l.removeClass("tickViewHide"),
                u.removeClass("tickViewHide"),
                x.removeClass("tickViewHide"),
                g.removeClass("tickViewHide"),
                w.removeClass("tickViewHide"),
                n.addClass("showViewActAnim"),
                clearTimeout(this.tipViewShowAnimTimer),
                this.tipViewShowAnimTimer = setTimeout(( () => {
                    n.removeClass("showViewActAnim")
                }
                ), .95 * m.Z.gameSettings.tipViewAnimTime),
                o.O.performanceLevel !== r.BR.LOW && this._ticketWasOpen) {
                    a()("#" + this.posGame.preFix + "ticket_parent .openHide").css({
                        "transition-duration": "0ms"
                    });
                    const i = .95 * m.Z.gameSettings.tipViewAnimTime - e;
                    this.tipViewShowTimer = setTimeout(( () => {
                        if (!this._ticketWasOpen)
                            return a()("#" + this.posGame.preFix + "ticket_parent .openHide").css({
                                "transition-duration": ""
                            }),
                            t.css({
                                "transition-duration": "0ms, 0ms",
                                "transition-delay": "0ms, 0ms"
                            }),
                            void t.removeClass("tickViewHide");
                        t.css({
                            "transition-duration": "0ms, " + (s + Math.max(G - s, 0)) + "ms",
                            "transition-delay": s + "ms, " + s + "ms"
                        }),
                        t.removeClass("tickViewHide"),
                        this.posGame.setUp.changeViewSetTempBetTicketOpen(!0, Math.max(m.Z.gameSettings.changeViewTickOpenAnimTime + i, 0))
                    }
                    ), Math.max(0, .95 * m.Z.gameSettings.tipViewAnimTime - e))
                }
            }
            hideTipView(i) {
                clearTimeout(this.tipViewShowTimer);
                const s = a()("#" + this.posGame.preFix + "ticket_parent");
                o.O.performanceLevel !== r.BR.LOW && s.hasClass("open") && (this._ticketWasOpen = !0,
                m.Z.gameSettingsPos.keepTicketViewOpen ? this.posGame.setUp.changeViewSetTempBetTicketOpen(!1, Math.max(m.Z.gameSettings.changeViewTickCloseAnimTime - i, 0)) : this.posGame.setUp.changeViewCloseTempBetTicket(Math.max(m.Z.gameSettings.changeViewTickCloseAnimTime - i, 0)));
                const e = .2 * m.Z.gameSettings.tipViewAnimTime
                  , t = .28 * m.Z.gameSettings.tipViewAnimTime
                  , n = a()("#" + this.posGame.preFix + "wrapper .mainContent")
                  , p = a()("#" + this.posGame.preFix + "parent_1")
                  , c = a()("#" + this.posGame.preFix + "parent_2")
                  , d = a()("#" + this.posGame.preFix + "parent_1_active")
                  , h = a()("#" + this.posGame.preFix + "parent_2_active")
                  , l = a()("#" + this.posGame.preFix + "coinCont")
                  , u = a()("#" + this.posGame.preFix + "func_parent_1")
                  , x = a()("#" + this.posGame.preFix + "func_parent_2")
                  , g = a()("#" + this.posGame.preFix + "tpParent");
                if (o.O.performanceLevel !== r.BR.LOW) {
                    a()("#" + this.posGame.preFix + "coinCont .coin0_txt").css({
                        "transition-duration": .2 * m.Z.gameSettings.tipViewAnimTime + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "coinCont .coinSing").css({
                        "transition-duration": .6 * m.Z.gameSettings.tipViewAnimTime / 5 + "ms"
                    }),
                    a()("." + this.posGame.preFix + "selNumCont").css({
                        "transition-duration": m.Z.gameSettings.tipViewAnimTime / (this.posGame.getNumberCompetitor() + 1) + "ms"
                    }),
                    a()("." + this.posGame.preFix + "activeCont").css({
                        "transition-duration": m.Z.gameSettings.tipViewAnimTime / (this.posGame.getNumberCompetitor() + 1) + "ms"
                    });
                    const s = m.Z.gameSettings.tipViewAnimTime / this.posGame.getNumberCompetitor() + 1;
                    let o = 0;
                    for (let e = 0; e <= this.posGame.getNumberCompetitor(); e++) {
                        const t = Math.max(0, o - i);
                        e <= 0 ? (a()("#" + this.posGame.preFix + "first").css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "second").css("transition-delay", t + "ms")) : (a()("#" + this.posGame.preFix + "selNumbFirst" + e).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "selNumbSecond" + e).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "activeFirst" + e).css("transition-delay", t + "ms"),
                        a()("#" + this.posGame.preFix + "activeSecond" + e).css("transition-delay", t + "ms")),
                        o += s
                    }
                    const r = Math.max(0, .08 * m.Z.gameSettings.tipViewAnimTime - i);
                    a()("#" + this.posGame.preFix + "coinCont .coin0_txt").css("transition-delay", r + "ms");
                    const p = .2 * m.Z.gameSettings.tipViewAnimTime
                      , c = .8 * m.Z.gameSettings.tipViewAnimTime / this.posGame.coinsValueList.length;
                    for (let i = 0; i <= this.posGame.coinsValueList.length; i++) {
                        let s = p + c * (i + 1)
                          , e = 0;
                        i === this.posGame.coinsValueList.length - 1 && (s = p + c * i,
                        e = c),
                        a()("#" + this.posGame.preFix + "coinCont .coinPos" + i).css({
                            "transition-duration": c + "ms, " + e + "ms, " + .2 * m.Z.gameSettings.tipViewAnimTime + "ms",
                            "transition-delay": p + c * i + "ms, " + s + "ms, " + s + "ms"
                        })
                    }
                    a()("#" + this.posGame.preFix + "coinCont .coinOverlay").css({
                        "transition-delay": "0ms "
                    });
                    const d = .4 * m.Z.gameSettings.tipViewAnimTime
                      , h = Math.max(.5 * m.Z.gameSettings.tipViewAnimTime - i, 0)
                      , l = .3 * m.Z.gameSettings.tipViewAnimTime
                      , u = Math.max(.7 * m.Z.gameSettings.tipViewAnimTime - i, 0);
                    a()("#" + this.posGame.preFix + "func_parent_1 .functxt").css({
                        "transition-duration": d + "ms",
                        "transition-delay": h + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_2 .functxt").css({
                        "transition-duration": d + "ms",
                        "transition-delay": h + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_1>div").css({
                        "transition-duration": l + "ms",
                        "transition-delay": u + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "func_parent_2>div").css({
                        "transition-duration": l + "ms",
                        "transition-delay": u + "ms"
                    });
                    const x = .4 * m.Z.gameSettings.tipViewAnimTime
                      , g = .6 * m.Z.gameSettings.tipViewAnimTime;
                    if (a()("#" + this.posGame.preFix + "tpParent .tickCreate").css({
                        "transition-duration": x + "ms",
                        "transition-delay": Math.max(g - i, 0) + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "ticket_parent .openHide").css({
                        "transition-duration": +e + "ms"
                    }),
                    this._ticketWasOpen) {
                        m.Z.gameSettingsPos.keepTicketViewOpen || (this._ticketWasOpen = !1);
                        const s = 1.05 * m.Z.gameSettings.changeViewTickCloseAnimTime
                          , e = .6 * m.Z.gameSettings.changeViewTickCloseAnimTime;
                        n.css({
                            "transition-duration": "0ms, " + e + "ms",
                            "transition-delay": Math.max(s - i, 0) + "ms, " + Math.max(s - e / 3 - i, 0) + "ms"
                        }),
                        this.tipViewHideTimer = setTimeout(( () => {
                            n.addClass("tickViewHide")
                        }
                        ), m.Z.gameSettings.changeViewTickCloseAnimTime)
                    } else {
                        a()("#" + this.posGame.preFix + "ticket_parent").css({
                            "transition-duration": "0ms, " + t + "ms",
                            "transition-delay": Math.max(t + e - i, 0) + "ms, " + Math.max(e - i, 0) + "ms"
                        });
                        const s = 1.17 * m.Z.gameSettings.tipViewAnimTime
                          , o = .4 * m.Z.gameSettings.tipViewAnimTime;
                        n.css({
                            "transition-duration": "0ms, " + o + "ms",
                            "transition-delay": Math.max(s - i, 0) + "ms, " + Math.max(s - o - i, 0) + "ms"
                        }),
                        n.addClass("tickViewHide")
                    }
                }
                n.addClass("tickViewHide"),
                p.addClass("tickViewHide"),
                c.addClass("tickViewHide"),
                d.addClass("tickViewHide"),
                h.addClass("tickViewHide"),
                l.addClass("tickViewHide"),
                u.addClass("tickViewHide"),
                x.addClass("tickViewHide"),
                g.addClass("tickViewHide")
            }
            showResultsView(i, s, e) {
                if (p.Y.debug("Show Result view,  animationTime:" + i + "addOffset:" + s + " animOffset:" + e),
                o.O.performanceLevel !== r.BR.LOW) {
                    const t = s
                      , n = .4 * i
                      , m = .8 * i
                      , o = .2 * i
                      , r = .2 * i
                      , c = .8 * i
                      , d = 0 * i
                      , h = .25 * i
                      , l = .85 * i
                      , u = .15 * i;
                    p.Y.debug("----------------- fadeoffset:" + (c + t)),
                    a()("#" + this.posGame.preFix + "resScreen").css({
                        "transition-delay": t + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "resScreen .resultParent").css({
                        "transition-delay": t + "ms, " + t + "ms, " + (t + Math.max(i - n - e, 0)) + "ms",
                        "transition-duration": m + "ms, " + m + "ms, " + o + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "resScreen .resultShow").css({
                        "transition-delay": +(t + Math.max(c - e, 0)) + "ms, " + (t + Math.max(c - e, 0)) + "ms",
                        "transition-duration": r + "ms, 0ms"
                    });
                    let x = t + d;
                    for (let i = 3; i >= 1; i--) {
                        const s = Math.max(x - e, 0);
                        3 === i ? (a()("#" + this.posGame.preFix + "resPri" + i).css({
                            "transition-delay": +s + "ms, " + s + "ms",
                            "transition-duration": "0ms, " + 1.5 * h + "ms"
                        }),
                        x += h) : (a()("#" + this.posGame.preFix + "resPri" + i).css({
                            "transition-delay": +s + "ms, " + s + "ms, " + s + "ms",
                            "transition-duration": h + "ms, " + h + "ms , 0ms"
                        }),
                        x += h)
                    }
                    a()("#" + this.posGame.preFix + "resScreen .printButtTxt").css({
                        "transition-delay": Math.max(l - e, 0) + t + "ms",
                        "transition-duration": u + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "resScreen").addClass("resSelect")
            }
            hideResultsView(i, s, e) {
                if (p.Y.debug("Hide Result, animationTime:" + i + " animOffset:" + s + " endOffset:" + e),
                o.O.performanceLevel !== r.BR.LOW) {
                    let t = 1;
                    e || (t = 1.25);
                    let n = .6 * i * t;
                    const m = .8 * i * t
                      , o = .05 * i * t
                      , r = .1 * i * t
                      , p = .1 * i * t
                      , c = Math.max(.1 * i * t - s, 0)
                      , d = .15 * i * t
                      , h = 0
                      , l = .15 * i * t;
                    e || (n = i),
                    a()("#" + this.posGame.preFix + "resScreen").css({
                        "transition-delay": Math.max(m - s, 0) + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "resScreen .resultParent").css({
                        "transition-delay": Math.max(h - s, 0) + "ms, " + Math.max(h - s, 0) + "ms, " + Math.max(o - s, 0) + "ms",
                        "transition-duration": n + "ms, " + n + "ms, " + r + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "resScreen .resultShow").css({
                        "transition-delay": "0ms, 0ms",
                        "transition-duration": p + "ms, 0ms"
                    });
                    let u = c;
                    for (let i = 1; i <= 3; i++) {
                        const e = Math.max(u - s, 0);
                        3 === i ? (a()("#" + this.posGame.preFix + "resPri" + i).css({
                            "transition-delay": +Math.max(u + 1.5 * d - s, 0) + "ms, " + e + "ms",
                            "transition-duration": "0ms, " + 1.5 * d + "ms"
                        }),
                        u += 1.5 * d) : (a()("#" + this.posGame.preFix + "resPri" + i).css({
                            "transition-delay": +e + "ms, " + e + "ms, " + Math.max(u + d - s, 0) + "ms",
                            "transition-duration": d + "ms, " + d + "ms , 0ms"
                        }),
                        u += d)
                    }
                    a()("#" + this.posGame.preFix + "resScreen .printButtTxt").css({
                        "transition-delay": h + "ms",
                        "transition-duration": l + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "resScreen").removeClass("resSelect")
            }
            showOddsView(i, s, e) {
                if (p.Y.debug("Show Odds view, animationTime:" + i + "addOffset:" + s + " animOffset:" + e),
                o.O.performanceLevel !== r.BR.LOW) {
                    const t = s
                      , n = .4 * i
                      , m = .8 * i
                      , o = .2 * i
                      , r = .2 * i
                      , c = .8 * i
                      , d = 0 * i
                      , h = .25 * i
                      , l = .85 * i
                      , u = .15 * i;
                    p.Y.debug("----------------- fadeoffset:" + (c + t)),
                    a()("#" + this.posGame.preFix + "quoScreen").css({
                        "transition-delay": t + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "quoScreen .quoParent").css({
                        "transition-delay": t + "ms, " + t + "ms, " + (t + Math.max(i - n - e, 0)) + "ms",
                        "transition-duration": m + "ms, " + m + "ms, " + o + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "quoScreen .quoShow").css({
                        "transition-delay": +(t + Math.max(c - e, 0)) + "ms, " + (t + Math.max(c - e, 0)) + "ms",
                        "transition-duration": r + "ms, 0ms"
                    });
                    let x = t + d;
                    for (let i = 3; i >= 1; i--) {
                        const s = Math.max(x - e, 0);
                        3 === i ? (a()("#" + this.posGame.preFix + "quoPri" + i).css({
                            "transition-delay": +s + "ms, " + s + "ms",
                            "transition-duration": "0ms, " + 1.5 * h + "ms"
                        }),
                        x += h) : (a()("#" + this.posGame.preFix + "quoPri" + i).css({
                            "transition-delay": +s + "ms, " + s + "ms, " + s + "ms",
                            "transition-duration": h + "ms, " + h + "ms , 0ms"
                        }),
                        x += h)
                    }
                    a()("#" + this.posGame.preFix + "quoScreen .printButtTxt").css({
                        "transition-delay": Math.max(l - e, 0) + t + "ms",
                        "transition-duration": u + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "quoScreen").addClass("quoSelect")
            }
            hideOddsView(i, s, e) {
                if (p.Y.debug("Hide Odds, animationTime:" + i + " animOffset:" + s + " endOffset:" + e),
                o.O.performanceLevel !== r.BR.LOW) {
                    let t = 1;
                    e || (t = 1.25);
                    let n = .6 * i * t;
                    const m = .8 * i * t
                      , o = .05 * i * t
                      , r = .1 * i * t
                      , p = .1 * i * t
                      , c = Math.max(.1 * i * t - s, 0)
                      , d = .15 * i * t
                      , h = 0
                      , l = .15 * i * t;
                    e || (n = i),
                    a()("#" + this.posGame.preFix + "quoScreen").css({
                        "transition-delay": Math.max(m - s, 0) + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "quoScreen .quoParent").css({
                        "transition-delay": Math.max(h - s, 0) + "ms, " + Math.max(h - s, 0) + "ms, " + Math.max(o - s, 0) + "ms",
                        "transition-duration": n + "ms, " + n + "ms, " + r + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "quoScreen .quoShow").css({
                        "transition-delay": "0ms, 0ms",
                        "transition-duration": p + "ms, 0ms"
                    });
                    let u = c;
                    for (let i = 1; i <= 3; i++) {
                        const e = Math.max(u - s, 0);
                        3 === i ? (a()("#" + this.posGame.preFix + "quoPri" + i).css({
                            "transition-delay": +Math.max(u + 1.5 * d - s, 0) + "ms, " + e + "ms",
                            "transition-duration": "0ms, " + 1.5 * d + "ms"
                        }),
                        u += 1.5 * d) : (a()("#" + this.posGame.preFix + "quoPri" + i).css({
                            "transition-delay": +e + "ms, " + e + "ms, " + Math.max(u + d - s, 0) + "ms",
                            "transition-duration": d + "ms, " + d + "ms , 0ms"
                        }),
                        u += d)
                    }
                    a()("#" + this.posGame.preFix + "quoScreen .printButtTxt").css({
                        "transition-delay": h + "ms",
                        "transition-duration": l + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "quoScreen").removeClass("quoSelect")
            }
            showTurnoverView(i, s, e) {
                if (p.Y.debug("Show Result view,  addOffset:" + s + " animOffset:" + e),
                o.O.performanceLevel !== r.BR.LOW) {
                    const t = s
                      , n = .4 * i
                      , m = .8 * i
                      , o = .2 * i
                      , r = .2 * i
                      , c = .8 * i
                      , d = .4 * i
                      , h = .4 * i
                      , l = .7 * i
                      , u = .3 * i;
                    p.Y.debug("----------------- fadeoffset:" + (c + t)),
                    a()("#" + this.posGame.preFix + "turnScreen").css({
                        "transition-delay": t + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .turnParent").css({
                        "transition-delay": t + "ms, " + t + "ms, " + (t + Math.max(i - n - e, 0)) + "ms",
                        "transition-duration": m + "ms, " + m + "ms, " + o + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .turnShow").css({
                        "transition-delay": +(t + Math.max(c - e, 0)) + "ms, " + (t + Math.max(c - e, 0)) + "ms",
                        "transition-duration": r + "ms, 0ms"
                    });
                    const x = Math.max(d - e, 0) + t;
                    a()("#" + this.posGame.preFix + "turnBalanceBut").css({
                        "transition-delay": +x + "ms, " + x + "ms",
                        "transition-duration": "0ms, " + h + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .balanceButtTxt").css({
                        "transition-delay": Math.max(l - e, 0) + t + "ms",
                        "transition-duration": u + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "turnScreen").addClass("turnSelect")
            }
            hideTurnoverView(i, s, e) {
                if (o.O.performanceLevel !== r.BR.LOW) {
                    let t = 1;
                    e || (t = 1.25);
                    let n = .6 * i * t;
                    const m = .8 * i * t
                      , o = .05 * i * t
                      , r = .1 * i * t
                      , p = .1 * i * t
                      , c = 0
                      , d = .15 * i * t
                      , h = .1 * i * t
                      , l = .32 * i * t;
                    e || (n = i),
                    a()("#" + this.posGame.preFix + "turnScreen").css({
                        "transition-delay": Math.max(m - s, 0) + "ms "
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .turnParent").css({
                        "transition-delay": Math.max(c - s, 0) + "ms, " + Math.max(c - s, 0) + "ms, " + Math.max(o - s, 0) + "ms",
                        "transition-duration": n + "ms, " + n + "ms, " + r + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .turnShow").css({
                        "transition-delay": "0ms, 0ms",
                        "transition-duration": p + "ms, 0ms"
                    });
                    const u = Math.max(h - s, 0);
                    a()("#" + this.posGame.preFix + "turnBalanceBut").css({
                        "transition-delay": +Math.max(h + l - s, 0) + "ms, " + u + "ms",
                        "transition-duration": "0ms, " + l + "ms"
                    }),
                    a()("#" + this.posGame.preFix + "turnScreen .balanceButtTxt").css({
                        "transition-delay": Math.max(c - s, 0) + "ms",
                        "transition-duration": d + "ms"
                    })
                }
                a()("#" + this.posGame.preFix + "turnScreen").removeClass("turnSelect")
            }
            getResultTableRecord(i, s) {
                let e = "";
                "x2" !== i.roundInfo.roundBonusType && "x3" !== i.roundInfo.roundBonusType || (e = "<div class='tabColumn tabHeadColumnBonus'>" + i.roundInfo.roundBonusType + "</div>");
                let t = "";
                s && (t = " odd");
                return "<div class='oneTabRowBord" + t + "'><div class='tabColumn tabHeadColumnRaNr tabRaceNrCe'>" + i.roundInfo.gameId.toString().padStart(4, "0") + "</div><div class='tabColumn tabHeadColumnTi'><div class='beLiNumb " + this.posGame.preFix + "number" + (i.result.first.driverIndex + 1) + "'></div><div  class='beLiNumb " + this.posGame.preFix + "number" + (i.result.second.driverIndex + 1) + "'></div></div>" + e + "</div>"
            }
        }
    }
    ,
    5419: i => {
        i.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIzODBweCIgaGVpZ2h0PSIxODhweCIgdmlld0JveD0iMCAwIDM4MCAxODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MCAxODg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30NCgkuc3Qxe29wYWNpdHk6MC4yODtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjU1ZHSURfMl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KPC9zdHlsZT4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTc0Ljk1IiB5MT0iMCIgeDI9IjE3NC45NSIgeTI9IjQ5Ij4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRjRGNTAwO3N0b3Atb3BhY2l0eTowLjk3Ii8+DQoJPHN0b3AgIG9mZnNldD0iMC4wMzAyIiBzdHlsZT0ic3RvcC1jb2xvcjojRTVEMzAwIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0Q2QzUwMCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzQ5LjksMCAwLDAgMCw0OSAzNDEuMSw0OSAiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTY5LjA1IiB5MT0iMTYiIHgyPSIxNjkuMDUiIHkyPSItODUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDEzNCkiPg0KCTxzdG9wICBvZmZzZXQ9IjAuODIiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTAsNDl2MTAxaDI5NC40YzE0LjgsMCwyNy40LTEwLjYsMzAuMS0yNS4yTDMzOC4xLDQ5SDB6Ii8+DQo8L3N2Zz4NCg=="
    }
}]);
