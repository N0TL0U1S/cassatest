"use strict";
(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[93], {
    22131: (e, t, s) => {
        s.d(t, {
            kx: () => T,
            t$: () => i
        });
        var i, a = s(81271), n = s.n(a), o = s(49001), r = s(23859), m = s(81814), l = s(81026), c = s(41175), p = s(47442), h = s(33720), g = s(66115), d = s(93468), u = s(87488), x = s(25941);
        !function(e) {
            e[e.TIP = 0] = "TIP",
            e[e.RESULT = 1] = "RESULT",
            e[e.ODDS = 2] = "ODDS",
            e[e.TURNOVER = 3] = "TURNOVER"
        }(i || (i = {}));
        class T {
            get ticketWasOpen() {
                return this._ticketWasOpen
            }
            set ticketWasOpen(e) {
                this._ticketWasOpen = e
            }
            constructor(e) {
                this.hideTimer = null,
                this.evDeltaY = 0,
                this.deltaY = 0,
                this.curViewId = i.TIP,
                this.lastInterceptOffset = 0,
                this.lastClick = 0,
                this.countsLastClick = 0,
                this._ticketWasOpen = !1,
                this.tipViewHideTimer = null,
                this.tipViewShowTimer = null,
                this.tipViewShowAnimTimer = null,
                this.startShowIndex = 0,
                this.showIntervall = p.Z.gameSettingsPos.turnoverTableLacyLoadInterval,
                this.showRows = 3 * this.showIntervall,
                this.endShowIndex = -1,
                this.lastReached = "top",
                this.ticketClosedSumElem = null,
                this.ticketOpenSumElem = null,
                this.posGame = e,
                this.gameRelatedModalDialog = new x.W(this.posGame.preFix + "md","#" + this.posGame.preFix + "gameModDialog",!1)
            }
            changeView(e, t) {
                if (e !== this.curViewId) {
                    if (r.O.performanceLevel === g.BR.LOW && this.posGame.gameType !== t)
                        return;
                    const s = Date.now();
                    this.countsLastClick = this.lastClick - this.lastInterceptOffset;
                    let a = 0
                      , o = 0
                      , m = 0
                      , l = !0
                      , c = 1;
                    switch (e !== i.TIP && this.curViewId !== i.TIP && (c = .6,
                    l = !1),
                    e) {
                    case i.TIP:
                        a = .3 * p.Z.gameSettings.tipViewAnimTime,
                        m = a + p.Z.gameSettings.tipViewAnimTime - (s - this.countsLastClick);
                        break;
                    case i.RESULT:
                        a = this.curViewId === i.TIP ? .3 * p.Z.gameSettings.resViewAnimTime : p.Z.gameSettings.resViewAnimTime * c,
                        m = a + p.Z.gameSettings.resViewAnimTime * c - (s - this.countsLastClick);
                        break;
                    case i.ODDS:
                        a = this.curViewId === i.TIP ? .3 * p.Z.gameSettings.quoViewAnimTime : p.Z.gameSettings.quoViewAnimTime * c,
                        m = a + p.Z.gameSettings.quoViewAnimTime * c - (s - this.countsLastClick);
                        break;
                    case i.TURNOVER:
                        a = this.curViewId === i.TIP ? .3 * p.Z.gameSettings.turnViewAnimTime : p.Z.gameSettings.turnViewAnimTime * c,
                        m = a + p.Z.gameSettings.turnViewAnimTime * c - (s - this.countsLastClick)
                    }
                    switch (m < 0 && (m = 0),
                    m < a ? (a -= m,
                    o = 0) : (o = m - a,
                    a = 0),
                    this.curViewId) {
                    case i.TIP:
                        n()("#" + this.posGame.preFix + "butTip").removeClass("selected");
                        break;
                    case i.RESULT:
                        n()("#" + this.posGame.preFix + "butRes").removeClass("selected");
                        break;
                    case i.ODDS:
                        n()("#" + this.posGame.preFix + "butQuo").removeClass("selected");
                        break;
                    case i.TURNOVER:
                        n()("#" + this.posGame.preFix + "butTur").removeClass("selected")
                    }
                    switch (e) {
                    case i.TIP:
                        n()("#" + this.posGame.preFix + "butTip").addClass("selected");
                        break;
                    case i.RESULT:
                        n()("#" + this.posGame.preFix + "butRes").addClass("selected");
                        break;
                    case i.ODDS:
                        n()("#" + this.posGame.preFix + "butQuo").addClass("selected");
                        break;
                    case i.TURNOVER:
                        n()("#" + this.posGame.preFix + "butTur").addClass("selected")
                    }
                    setTimeout(( () => {
                        switch (this.curViewId) {
                        case i.TIP:
                            n()("#" + this.posGame.preFix + "butTip").removeClass("selected"),
                            this.hideTipView(m);
                            break;
                        case i.RESULT:
                            const e = p.Z.gameSettings.resViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butRes").removeClass("selected"),
                            this.hideResultsView(e, m, l);
                            break;
                        case i.ODDS:
                            const t = p.Z.gameSettings.quoViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butQuo").removeClass("selected"),
                            this.hideOddsView(t, m, l);
                            break;
                        case i.TURNOVER:
                            const s = p.Z.gameSettings.turnViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butTur").removeClass("selected"),
                            this.hideTurnoverView(s, m, l)
                        }
                        switch (this.curViewId = e,
                        e) {
                        case i.TIP:
                            n()("#" + this.posGame.preFix + "butTip").addClass("selected"),
                            this.showTipView(a, o, m);
                            break;
                        case i.RESULT:
                            const e = p.Z.gameSettings.resViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butRes").addClass("selected"),
                            this.showResultsView(e, a, o);
                            break;
                        case i.ODDS:
                            const t = p.Z.gameSettings.resViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butQuo").addClass("selected"),
                            this.showOddsView(t, a, o);
                            break;
                        case i.TURNOVER:
                            const s = p.Z.gameSettings.turnViewAnimTime * c;
                            n()("#" + this.posGame.preFix + "butTur").addClass("selected"),
                            this.showTurnoverView(s, a, o)
                        }
                        this.lastInterceptOffset = m,
                        this.lastClick = s
                    }
                    ), 1)
                }
            }
            updateClosedTempBetList(e) {
                const t = n()("#" + this.posGame.preFix + "tickClosList");
                let s = ""
                  , i = 0;
                for (const t of e) {
                    let e = "";
                    i <= 0 && (e = " first");
                    let a = '<div class="beLiNumbClo secndLine"></div>';
                    null !== t.second && (a = '<div  class="beLiNumbClo ' + this.posGame.preFix + "number" + t.second + ' secndLine"></div>'),
                    s += '<div class="oneBetBordClo' + e + '" data-betid="' + t.betId + '"><div class="beLiNumbClo ' + this.posGame.preFix + "number" + t.first + '"></div>' + a + "</div>",
                    i++
                }
                t.html(s),
                this.updateClosedTempBetSum(),
                e.length <= 0 ? n()("#" + this.posGame.preFix + "ticket_parent").addClass("empty") : n()("#" + this.posGame.preFix + "ticket_parent").removeClass("empty")
            }
            updateClosedTempBetSum() {
                if (null === this.ticketClosedSumElem && (this.ticketClosedSumElem = n()("#" + this.posGame.preFix + "tickCloSum")),
                0 !== this.posGame.tempBets.sumStake) {
                    const e = o.Z.formatValue(this.posGame.tempBets.sumStake / r.O.creditFactor, r.O.decimalPlaces, m.I.commaSymbol);
                    e.length > 7 ? this.ticketClosedSumElem.addClass("smTxt") : this.ticketClosedSumElem.removeClass("smTxt"),
                    this.ticketClosedSumElem.html(e)
                } else
                    this.ticketClosedSumElem.html("")
            }
            updateOpendTempBetList(e) {
                const t = n()("#" + this.posGame.preFix + "tickOpenList");
                let s = ""
                  , i = "";
                for (let t = 0; t < e.length; t++) {
                    const a = e[t];
                    i = t % 2 == 0 ? "" : " odd";
                    let n = '<div class="beLiNumb"></div>';
                    null !== a.second && (n = '<div  class="beLiNumb ' + this.posGame.preFix + "number" + a.second + '"></div>'),
                    s += '<div class="oneBetBord' + i + '" data-betid="' + a.betId + '"><div class="oneBet"><div class="obColumn tickHeadColumnNr">' + (t + 1) + '</div><div class="obColumn tickHeadColumnStd">' + o.Z.formatNumber(a.odd, this.posGame.oddsNumbDigits) + '</div><div class="obColumn tickHeadColumnStd">' + o.Z.formatValue(a.stake / r.O.creditFactor, r.O.decimalPlaces, m.I.commaSymbol) + '</div><div class="obColumn tickHeadColumnTi"><div class="beLiNumb ' + this.posGame.preFix + "number" + a.first + '"></div>' + n + "</div></div></div>"
                }
                t.html(s),
                n()("#" + this.posGame.preFix + "tickOpenList .oneBet").each(( (e, t) => {
                    const s = new c.Manager(t);
                    s.add(new c.Pan({
                        direction: c.DIRECTION_ALL
                    })),
                    s.add(new c.Swipe({
                        direction: c.DIRECTION_HORIZONTAL
                    }));
                    let i = 0
                      , a = !1
                      , o = !1;
                    s.on("panleft panright panend pancancel", (e => {
                        if (this.posGame.lockChangeTicket)
                            return;
                        const t = n()(e.target).closest(".oneBet")
                          , s = t[0];
                        if ("panleft" === e.type || "panright" === e.type) {
                            a || (a = !0,
                            i = s.offsetLeft,
                            this.deltaY = 0,
                            o = !1);
                            let t = e.deltaX + i;
                            this.deltaY = e.deltaY,
                            l.Y.debug("--------------------------\x3e delta x:" + e.deltaX),
                            l.Y.debug("--------------------------\x3e delta y:" + e.deltaY),
                            l.Y.debug("--------------------------\x3e last Pos x:" + i),
                            l.Y.debug("--------------------------\x3e overall y:" + this.deltaY),
                            t > 0 && (t = 0),
                            s.style.left = t + "px"
                        }
                        "panend" !== e.type && "pancancel" !== event.type || (a = !1,
                        l.Y.debug("Final"),
                        o || (l.Y.debug("left:" + parseInt(s.style.left.replace("px", ""), 10)),
                        parseInt(s.style.left.replace("px", ""), 10) < -1 * p.Z.gameSettings.posPanLeftDelTicketMin && this.deltaY < 50 ? (t.stop(),
                        t.animate({
                            left: "-120%"
                        }, 300, ( () => {
                            const e = t.closest(".oneBetBord");
                            e.hide(0),
                            e.remove();
                            const s = e.attr("data-betid");
                            this.posGame.tempBets.deleteTempBet(s),
                            this.updateTempBetListGraphic()
                        }
                        ))) : (l.Y.debug("Back"),
                        t.animate({
                            left: "0px"
                        }, 200, (function() {}
                        )))))
                    }
                    )),
                    s.on("swipeleft", (e => {
                        if (this.posGame.lockChangeTicket)
                            return;
                        o = !0;
                        const t = n()(e.target).closest(".oneBetBord");
                        t.stop(),
                        t.animate({
                            left: "-120%"
                        }, 300, ( () => {
                            t.hide(0),
                            t.remove();
                            const e = t.attr("data-betid");
                            this.posGame.tempBets.deleteTempBet(e),
                            this.updateOpendTempBetSum(),
                            this.updateOddRows()
                        }
                        ))
                    }
                    ))
                }
                )),
                this.updateOpendTempBetSum()
            }
            updateOpendTempBetSum() {
                if (null === this.ticketOpenSumElem && (this.ticketOpenSumElem = n()("#" + this.posGame.preFix + "tickOpenSum")),
                0 !== this.posGame.tempBets.sumStake) {
                    const e = o.Z.formatValue(this.posGame.tempBets.sumStake / r.O.creditFactor, r.O.decimalPlaces, m.I.commaSymbol);
                    e.length > 8 ? this.ticketOpenSumElem.addClass("smTxt") : this.ticketOpenSumElem.removeClass("smTxt"),
                    this.ticketOpenSumElem.html(e)
                } else
                    this.ticketOpenSumElem.html("")
            }
            updateOddRows() {
                n()("#" + this.posGame.preFix + "tickOpenList").find(".oneBetBord").each(( (e, t) => {
                    e % 2 == 0 ? n()(t).removeClass("odd") : n()(t).addClass("odd")
                }
                ))
            }
            updateTempBetListGraphic() {
                this.updateOpendTempBetSum(),
                this.updateClosedTempBetSum(),
                this.updateClosedTempBetList(this.posGame.tempBets.tempBetList),
                this.updateOddRows()
            }
            clearTempBetListGraphic() {
                n()("#" + this.posGame.preFix + "tickClosList").html(""),
                n()("#" + this.posGame.preFix + "tickCloSum").html(""),
                n()("#" + this.posGame.preFix + "tickOpenList").html(""),
                n()("#" + this.posGame.preFix + "tickOpenSum").html(""),
                n()("#" + this.posGame.preFix + "ticket_parent").addClass("empty"),
                n()("#" + this.posGame.preFix + "ticket_parent").hasClass("open") && this.posGame.setUp.setTempBetTicketOpen(!1)
            }
            updateOdEvenTurnoverTable() {
                n()("#" + this.posGame.preFix + "turnOpenList .oneTabRowBord").each(( (e, t) => {
                    const s = n()(t);
                    e % 2 != 0 ? s.addClass("odd") : s.removeClass("odd")
                }
                ))
            }
            setUpTurnoverScrollLogic() {
                n()(this.posGame.setUp.turnoverSimpleBar.getScrollElement()).on("scroll", (e => {
                    l.Y.debug("___________________SSSS srollTop:" + n()(e.target).scrollTop() + " innerHeight:" + n()(e.target).innerHeight() + " scroll Height:" + n()(e.target)[0].scrollHeight);
                    let t = !1;
                    if (Math.round(n()(e.target).scrollTop() + n()(e.target).innerHeight()) >= Math.round(n()(e.target)[0].scrollHeight) - 0) {
                        if (l.Y.debug("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Bottom reached"),
                        "bottom" !== this.lastReached) {
                            l.Y.debug("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Acting Bottom reached"),
                            this.lastReached = "bottom";
                            const e = h._.instance.posTicketTurnover.ticketList;
                            if (e.length > this.showRows) {
                                const s = n()("#" + this.posGame.preFix + "turnOpenList")
                                  , i = this.startShowIndex
                                  , a = this.endShowIndex;
                                this.startShowIndex -= this.showIntervall,
                                this.startShowIndex = Math.max(this.startShowIndex, 0),
                                this.endShowIndex = this.startShowIndex + this.showRows - 1,
                                this.endShowIndex = Math.min(e.length - 1, this.endShowIndex),
                                l.Y.debug(" oldStartIndex:" + i + " oldEndIndex:" + a + " newStartIndex:" + this.startShowIndex + " newEndIndex:" + this.endShowIndex);
                                for (let n = e.length - 1; n >= 0; n--)
                                    if (n >= this.startShowIndex && n < i) {
                                        l.Y.debug(" Add Index:" + n);
                                        const i = h._.instance.posTicketTurnover.getTurnoverOneTicketHtml(e[n], !1);
                                        s.append(i),
                                        t = !0
                                    } else if (n <= a && n > this.endShowIndex) {
                                        l.Y.debug(" Remove Index:" + n);
                                        s.find(".oneTabRowBord[data-id=" + e[n].ticketIdHex + "]").remove(),
                                        t = !0
                                    }
                            }
                        }
                        this.lastReached = "bottom"
                    } else if (n()(e.target).scrollTop() <= 0) {
                        l.Y.debug("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Top reached"),
                        this.lastReached = "top";
                        const e = h._.instance.posTicketTurnover.ticketList;
                        if (e.length > this.showRows && this.endShowIndex < e.length - 1) {
                            const s = n()("#" + this.posGame.preFix + "turnOpenList")
                              , i = this.startShowIndex
                              , a = this.endShowIndex;
                            this.endShowIndex += this.showIntervall,
                            this.endShowIndex = Math.min(e.length - 1, this.endShowIndex),
                            this.startShowIndex = this.endShowIndex - (this.showRows - 1),
                            this.startShowIndex = Math.max(this.startShowIndex, 0),
                            l.Y.debug(" oldStartIndex:" + i + " oldEndIndex:" + a + " newStartIndex:" + this.startShowIndex + " newEndIndex:" + this.endShowIndex);
                            let o = 0
                              , r = 5;
                            for (let n = 0; n < e.length; n++)
                                if (n >= i && n < this.startShowIndex) {
                                    l.Y.debug(" Remove Index:" + n);
                                    const a = s.find(".oneTabRowBord[data-id=" + e[n].ticketIdHex + "]");
                                    n === i && (r = a.outerHeight()),
                                    a.remove(),
                                    t = !0
                                } else if (n > a && n <= this.endShowIndex) {
                                    l.Y.debug(" Add Index:" + n);
                                    const i = h._.instance.posTicketTurnover.getTurnoverOneTicketHtml(e[n], !1);
                                    s.prepend(i),
                                    t = !0,
                                    o++
                                }
                            n()(this.posGame.setUp.turnoverSimpleBar.getScrollElement()).scrollTop(r * o)
                        }
                    } else
                        this.lastReached = "scroll";
                    t && (this.updateOdEvenTurnoverTable(),
                    this.lastReached = "scroll")
                }
                ))
            }
            addTurnoverTicket(e, t) {
                const s = h._.instance.posTicketTurnover.ticketList;
                if (this.endShowIndex >= s.length - 2) {
                    const e = n()("#" + this.posGame.preFix + "turnOpenList");
                    e.prepend(t),
                    h._.instance.posTicketTurnover.ticketList.length > this.showRows && e.find(".oneTabRowBord").last().remove(),
                    this.endShowIndex++,
                    this.startShowIndex = this.endShowIndex - (this.showRows - 1),
                    this.startShowIndex = Math.max(this.startShowIndex, 0),
                    l.Y.debug("Add ticket, startIndex:" + this.startShowIndex + " endIndex:" + this.endShowIndex),
                    this.updateOdEvenTurnoverTable()
                }
            }
            redrawTurnoverTickets(e) {
                n()("#" + this.posGame.preFix + "turnOpenList").html("");
                let t = 0;
                for (const s of e)
                    if (s.drawInList) {
                        if (this.startShowIndex <= t && this.endShowIndex >= t) {
                            const e = h._.instance.posTicketTurnover.getTurnoverOneTicketHtml(s, !0);
                            n()("#" + this.posGame.preFix + "turnOpenList").prepend(e)
                        }
                        t++
                    }
                this.updateOdEvenTurnoverTable()
            }
            removeTurnoverTicket(e, t) {
                if (this.startShowIndex <= t && this.endShowIndex >= t) {
                    const t = n()("#" + this.posGame.preFix + "turnOpenList")
                      , s = t.find(".oneTabRowBord[data-id=" + e.ticketIdHex + "]");
                    if (s.length > 0) {
                        s.remove();
                        const e = h._.instance.posTicketTurnover.ticketList;
                        if (this.startShowIndex <= 0 && e.length > this.endShowIndex) {
                            const s = h._.instance.posTicketTurnover.getTurnoverOneTicketHtml(e[this.endShowIndex], !1);
                            t.prepend(s),
                            l.Y.debug("Append because of new place, index:" + this.endShowIndex + " ID:" + e[this.endShowIndex].ticketIdHex)
                        }
                    } else
                        l.Y.error("To remove Ticket not found:" + e.longTicketId);
                    this.updateOdEvenTurnoverTable()
                }
            }
            getQuotaTableRecord(e, t) {
                let s = "";
                t && (s = " odd");
                let i = "<div class='oneTabRowBord" + s + "'><div class='tabColumn tabHeadColumnRaNr tabRaceNrCe'>" + e.roundInfo.gameId.toString().padStart(4, "0") + "</div>";
                for (let t = 0; t < this.posGame.getNumberCompetitor(); t++)
                    i += "<div  class='tabColumn tabColumnQuota'>" + o.Z.formatNumber(e.serverOdds[t], 1) + "</div>";
                return i += "</div>",
                i
            }
            showMinBet(e) {
                return new Promise((t => {
                    this.gameRelatedModalDialog.showModalDialog(d.cC.MIN_BET, u.l.instance.getTextCommon("changeBetHead").toUpperCase(), u.l.instance.getTextCommon("dialogMinBet").replace("__MINBET__", o.Z.formatNumber(e / r.O.creditFactor, r.O.decimalPlaces)).replace("__CUR__", ""), !0, !0, !1, !0, u.l.instance.getTextCommon("changeBet").toUpperCase(), u.l.instance.getText("dialogCancel").toUpperCase()).then((s => {
                        s ? t(e) : this.hideMessageDialog().then()
                    }
                    ))
                }
                ))
            }
            hideMessageDialog() {
                return new Promise((e => {
                    this.gameRelatedModalDialog.hideModalDialog().then(( () => {
                        e()
                    }
                    ))
                }
                ))
            }
        }
    }
    ,
    43162: (e, t, s) => {
        s.d(t, {
            GK: () => v,
            Sn: () => w,
            Zg: () => k
        });
        var i = s(81271)
          , a = s.n(i)
          , n = s(87488)
          , o = s(23859)
          , r = s(33325)
          , m = s(81026)
          , l = s(41175)
          , c = s.n(l)
          , p = s(33720)
          , h = s(22131)
          , g = s(47442)
          , d = s(40039)
          , u = s(66115)
          , x = s(30703)
          , T = s(98153)
          , S = s(49001)
          , C = function(e, t, s, i) {
            return new (s || (s = Promise))((function(a, n) {
                function o(e) {
                    try {
                        m(i.next(e))
                    } catch (e) {
                        n(e)
                    }
                }
                function r(e) {
                    try {
                        m(i.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }
                function m(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof s ? t : new s((function(e) {
                        e(t)
                    }
                    ))).then(o, r)
                }
                m((i = i.apply(e, t || [])).next())
            }
            ))
        };
        class k {
            get target() {
                return this._target
            }
            get turnoverSimpleBar() {
                return this._turnoverSimpleBar
            }
            constructor(e) {
                this.posgame = null,
                this.preFix = "",
                this.deltaY = 0,
                this.deltaYBack = 0,
                this.scrollLastX = 0,
                this.scrollLastY = 0,
                this.startX = 0,
                this.startY = 0,
                this.dragged = !1,
                this.mouseIsDown = !1,
                this.lastTickClick = 0,
                this.animOpenTimout = null,
                this.animCloseTimout = null,
                this.ticketSwipeXStart = 0,
                this.ticketSwipeXStartTarg = 0,
                this.posgame = e,
                this.preFix = this.posgame.preFix
            }
            initGraphicSetUp() {
                this.posgame.posWithRunner ? (this.posgame.posWithRunner.setUpCoins(),
                this.posgame.posWithRunner.setUpSelectNumbers(),
                this.posgame.gameType === u.O4.DOG63.gamType && this.posgame.posWithRunner.setUpSumNumberPad()) : this.posgame.posRoulette ? (this.posgame.posRoulette.setUpCoins(),
                this.posgame.posRoulette.setUpSelectLogic()) : this.posgame.posKickbox && (this.posgame.posKickbox.setUpCoins(),
                this.posgame.posKickbox.setUpSetLogic()),
                this.setUpTempTickets(),
                this.setUpResultHeader(),
                this.setUpQuotaHeader(),
                this.setQuotaView(),
                this.setUpTurnoverHeader(),
                this.setUpTurnoverView(),
                this.setUpAction(),
                this.setUpClosedTicketLogic(),
                this.initLanguageSettingsMenu(),
                this._target = a()("#" + this.preFix + "ticket_parent"),
                this.numberElem = a()("#" + this.preFix + "parent_1"),
                this.numberSecElem = a()("#" + this.preFix + "parent_2"),
                this.numberActElem = a()("#" + this.preFix + "parent_1_active"),
                this.numberActSecElem = a()("#" + this.preFix + "parent_2_active"),
                this.coinElem = a()("#" + this.preFix + "coinCont"),
                this.func1Elem = a()("#" + this.preFix + "func_parent_1"),
                this.func2Elem = a()("#" + this.preFix + "func_parent_2"),
                this.ticketBack = a()("#" + this.preFix + "ticket_parent").find(".tickBack")
            }
            initLanguageSettingsMenu() {
                let e = n.l.instance.getLanguages().length;
                e += 1,
                e > 15 && (e = 15);
                let t = 4.9995 * (1 - .07 * (e - 1));
                const i = -27.977 * (1 - .07 * (e - 1));
                let r = 5.5;
                const m = 30.25 - 1.95 * e - .2;
                let l = .34 * e + 1;
                this.posgame.gameType !== u.O4.RTT.gamType && this.posgame.gameType !== u.O4.KICKBOX.gamType || (t = 0,
                r = 0),
                a()("#" + this.preFix + "language_settings").css("height", 1.95 * e + 1 + "vw"),
                a()("#" + this.preFix + "language_menu_items").css("transform", "translateY(" + m + "vw)"),
                n.l.instance.getLanguages().forEach(( (t, i) => {
                    if (i < 15) {
                        const i = n.l.instance.getLanguage() === t.getIso() ? "current_language" : ""
                          , r = this.preFix + "language_" + t.getIso();
                        l = .34 * e + 1,
                        this.posgame.gameType !== u.O4.RTT.gamType && this.posgame.gameType !== u.O4.KICKBOX.gamType || (l = 1);
                        const m = '<div class="language_menu_item" id="' + this.preFix + " languageBtn_" + t.getIso() + '" style="margin-left: ' + l + 'vw"><img class="flagImage" src="' + s(52342)("./" + t.getFileName()) + '" alt="' + t.getIso() + '" style="z-index: 100;"><div class="language_menu_item_text"><span id=\'' + r + "' class='" + i + " tok_langTxt_" + t.getIso() + "'>" + t.getText() + "</span></div></div>";
                        a()("#" + this.preFix + "language_menu_items").append(m),
                        a()("#" + r).on("click", ( () => {
                            this.posgame.updateCurrentLanguageDisplayToId(t.getIso()),
                            n.l.instance.getLanguage() !== t.getIso() ? (p._.instance.showWaitdialog(n.l.instance.getTextCommon("changeLanguage")),
                            setTimeout(( () => {
                                o.O.updateLanguage(t.getIso()),
                                o.O.getUserInitResult().settingsUser.language = t.getIso(),
                                o.O.initSetSaved = !1,
                                this.closeLanguageSettings(),
                                o.O.updateCurrentLanguageDisplay(),
                                p._.instance.modalDialog.hideModalDialog()
                            }
                            ), 20)) : this.closeLanguageSettings()
                        }
                        )),
                        e--
                    }
                }
                )),
                this.posgame.autoSwitchToggle = new b("Asw",this.preFix,o.O.autoSwitchGame),
                l = .34 * e + 1,
                this.posgame.gameType !== u.O4.RTT.gamType && this.posgame.gameType !== u.O4.KICKBOX.gamType || (l = 1);
                const c = '<div class="language_menu_item breakItem toggleLine" style="margin-left: ' + l + 'vw"><div class="language_menu_item_set_text"><span class=\'tok_autoSwGa noActive\'>' + n.l.instance.getText("autoSwGa") + "</span></div><div style='margin-right: 0.1vw;position: relative;top: 0.05vw;'>" + this.posgame.autoSwitchToggle.getHtml() + "</div></div>";
                a()("#" + this.preFix + "language_menu_items").append(c),
                e--,
                this.posgame.autoSwitchToggle.setUpEvents(( () => {
                    o.O.setAllGamesAutoSwitch(!0),
                    o.O.getUserInitResult().settingsUser.gameAutoswitch = !0,
                    o.O.initSetSaved = !1
                }
                ), ( () => {
                    o.O.setAllGamesAutoSwitch(!1),
                    o.O.getUserInitResult().settingsUser.gameAutoswitch = !1,
                    o.O.initSetSaved = !1
                }
                ));
                const h = "<style id='" + this.posgame.preFix + "language_settings_css'>@keyframes " + this.preFix + "menuAnimationIn {  from {transform: translate(" + r + "vw, -31vw);}  to {transform: translate(" + t + "vw, " + i + "vw);}}@keyframes " + this.preFix + "menuAnimationOut {  from {transform: translate(" + t + "vw, " + i + "vw);}  to {transform: translate(" + r + "vw, -31vw);}}." + this.preFix + "language_menu_animation_in {  display: block;  transform: translate(" + t + "vw, " + i + "vw);  animation: " + this.preFix + "menuAnimationIn .3s ease-out;}." + this.preFix + "language_menu_animation_out {  display: block;  transform: translate(" + r + "vw, -31vw);  animation: " + this.preFix + "menuAnimationOut .3s ease-in;}";
                a()("head").append(h)
            }
            setUpAction() {
                o.O.isTouch || a()("#" + this.preFix + "printAction").on("click", ( () => {
                    this.printTicketClicked()
                }
                )),
                a()("#" + this.preFix + "printAction").on("touchstart", ( () => {
                    setTimeout(( () => {
                        this.printTicketClicked()
                    }
                    ), 1)
                }
                )),
                o.O.isTouch || a()("#" + this.preFix + "delButt").on("click", ( () => {
                    this.deleteClicked()
                }
                )),
                a()("#" + this.preFix + "delButt").on("touchstart", ( () => {
                    setTimeout(( () => {
                        this.deleteClicked()
                    }
                    ), 1)
                }
                )),
                o.O.isTouch || (a()("#" + this.preFix + "butTip").on("click", ( () => {
                    p._.instance.changeViewAllGames(h.t$.TIP, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butRes").on("click", ( () => {
                    p._.instance.changeViewAllGames(h.t$.RESULT, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butQuo").on("click", ( () => {
                    p._.instance.changeViewAllGames(h.t$.ODDS, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butTur").on("click", ( () => {
                    p._.instance.changeViewAllGames(h.t$.TURNOVER, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "extTiShowBut").on("click", ( () => {
                    o.O.getHasExternalTickets() && p._.instance.externalTickets.showExternTicketView(!0)
                }
                )),
                a()("#" + this.preFix + "closExtTicketViewBut").on("click", ( () => {
                    o.O.getHasExternalTickets() && p._.instance.externalTickets.showExternTicketView(!1)
                }
                ))),
                a()("#" + this.preFix + "butTip").on("touchstart", ( () => {
                    p._.instance.changeViewAllGames(h.t$.TIP, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butRes").on("touchstart", ( () => {
                    p._.instance.changeViewAllGames(h.t$.RESULT, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butQuo").on("touchstart", ( () => {
                    p._.instance.changeViewAllGames(h.t$.ODDS, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "butTur").on("touchstart", ( () => {
                    p._.instance.changeViewAllGames(h.t$.TURNOVER, this.posgame.gameType)
                }
                )),
                a()("#" + this.preFix + "extTiShowBut").on("touchstart", ( () => {
                    o.O.getHasExternalTickets() && p._.instance.externalTickets.showExternTicketView(!0)
                }
                )),
                a()("#" + this.preFix + "closExtTicketViewBut").on("touchstart", ( () => {
                    o.O.getHasExternalTickets() && p._.instance.externalTickets.showExternTicketView(!1)
                }
                )),
                this.setUpTicketSwipe(),
                o.O.isTouch || a()("#" + this.preFix + "butSet").on("click", ( () => {
                    this.showSettingClicked()
                }
                )),
                a()("#" + this.preFix + "butSet").on("touchstart", ( () => {
                    this.showSettingClicked()
                }
                )),
                o.O.getUserInitResult().setting.showTicketInput ? (a()("#" + this.preFix + "tickScaInp").attr("placeholder", n.l.instance.getText("enterTicket")),
                o.O.isTouch || a()("#" + this.preFix + "ticketScannAct").on("click", (e => {
                    const t = a()(e.currentTarget);
                    this.showScannTicketClicked(t)
                }
                )),
                a()("#" + this.preFix + "ticketScannAct").on("touchstart", (e => {
                    const t = a()(e.currentTarget);
                    this.showScannTicketClicked(t)
                }
                )),
                a()("#" + this.preFix + "tickScaInp").on("keyup", (e => {
                    if (m.Y.debug("KKKKKKKDDDDDD Char Code:" + e.key),
                    void 0 === e.key)
                        return void m.Y.warn("Error key code undefined");
                    let t = !1;
                    if (navigator.userAgent.match(/Android/i) && (t = !0,
                    13 !== e.keyCode)) {
                        const t = a()(e.currentTarget).val();
                        if ("string" == typeof t) {
                            const s = t.charAt(t.length - 1).charCodeAt(0);
                            m.Y.debug("KKKKKKKAAAAAAA Char Code:" + s),
                            e.key = t.charAt(t.length - 1),
                            e.keyCode = s
                        }
                    }
                    this.posgame.scannedInputEvent(e, !0, t)
                }
                )),
                a()("#" + this.preFix + "tiScDel").on("click", ( () => {
                    const e = a()("#" + this.preFix + "tickScaInp");
                    e.val(""),
                    e.focus(),
                    this.posgame.scannedText = ""
                }
                )),
                a()("#" + this.preFix + "tiScSe").on("click", ( () => {
                    const e = a()("#" + this.preFix + "tickScaInp");
                    e.val(o.O.getInitResult().sessionID),
                    e.focus(),
                    this.posgame.scannedText = o.O.getInitResult().sessionID
                }
                ))) : a()("#" + this.preFix + "ticketScannAct").css("display", "none"),
                o.O.isTouch || a()("#" + this.preFix + "turnBalanceBut .balanceButtAct").on("click", ( () => {
                    p._.instance.checkBalancing()
                }
                )),
                a()("#" + this.preFix + "turnBalanceBut .balanceButtAct").on("touchstart", ( () => {
                    setTimeout(( () => {
                        p._.instance.checkBalancing()
                    }
                    ), 1)
                }
                ))
            }
            deleteClicked() {
                this.posgame.lockChangeTicket || (this.posgame.gameType !== u.O4.RTT.gamType && this.posgame.tempBets.tempBetList.length <= 0 && (this.posgame.posWithRunner ? this.posgame.posWithRunner.isSelection() || p._.instance.posTicketTurnover.checkCancleLastTicket(this.posgame.gameType) : this.posgame.posKickbox && (this.posgame.posKickbox.isSelection() || p._.instance.posTicketTurnover.checkCancleLastTicket(this.posgame.gameType))),
                this.posgame.posWithRunner ? this.posgame.posWithRunner.isSelection() && this.posgame.posWithRunner.clearSelection() : this.posgame.posKickbox && this.posgame.posKickbox.isSelection() && this.posgame.posKickbox.clearSelection(),
                this.posgame.tempBets.clearTempBetList(!0))
            }
            printTicketClicked() {
                m.Y.debug("********************* Print"),
                this.posgame.lockChangeTicket || this.checkLogChangeTicketTime() || this.posgame.createTicket(d.ticketCreatModes.STANDARD)
            }
            createExternTicketClicked(e) {
                m.Y.debug("********************* Print"),
                this.posgame.lockChangeTicket || this.checkLogChangeTicketTime() || this.posgame.createTicket(d.ticketCreatModes.EXTERN, e, this.posgame)
            }
            showScannTicketClicked(e) {
                e.hasClass("activeState") ? this.hideScannTicketInput(e) : this.showScannTicketInput(e)
            }
            showSettingClicked() {
                const e = a()("#" + this.preFix + "language_settings")
                  , t = a()("#" + this.preFix + "language_settings_menu");
                e.hasClass("language_settings_active") ? this.closeLanguageSettings() : (t.removeClass(this.preFix + "language_menu_animation_out"),
                t.addClass(this.preFix + "language_menu_animation_in"),
                e.addClass("language_settings_active"),
                e.css({
                    "z-index": 2e3,
                    display: "block"
                }),
                a()("#" + this.preFix + "butSet").addClass("active").closest(".language_settings_menu_button").addClass("active"),
                a()(document).off("click"),
                setTimeout(( () => {
                    a()(document).on("click", (t => {
                        e.hasClass("language_settings_active") && !a()(t.target).closest("#" + this.preFix + "language_menu_items").length && this.closeLanguageSettings()
                    }
                    ))
                }
                ), 300))
            }
            setUpTicketSwipe() {
                const e = a()("#" + this.preFix + "ticket_parent");
                e.on("mousedown", (e => {
                    this.startX = e.originalEvent.pageX,
                    this.startY = e.originalEvent.pageY,
                    this.dragged = !1,
                    this.mouseIsDown = !0
                }
                )),
                e.on("mousemove", (e => {
                    this.mouseIsDown && (Math.abs(this.startX - e.originalEvent.pageX) > o.O.clickTollerance || Math.abs(this.startY - e.originalEvent.pageY) > o.O.clickTollerance) && (m.Y.debug("--------------\x3e Dragged"),
                    this.dragged = !0)
                }
                )),
                e.on("mouseup", ( () => {
                    this.mouseIsDown = !1
                }
                )),
                e.on("mouseleave", ( () => {
                    this.mouseIsDown = !1
                }
                )),
                e.on("click", (e => {
                    if (this.dragged)
                        return;
                    a()(e.currentTarget).hasClass("open") ? this.setTempBetTicketOpen(!1) : this.setTempBetTicketOpen(!0)
                }
                )),
                e.find(".ticketSwipe").on("click", (t => {
                    this.dragged || (e.hasClass("open") ? this.setTempBetTicketOpen(!1) : this.setTempBetTicketOpen(!0),
                    t.stopPropagation())
                }
                ));
                const t = a()("#" + this.preFix + "ticket_parent").find(".ticketSwipe")[0]
                  , s = new (c().Manager)(t);
                s.add(new (c().Pan)({
                    direction: c().DIRECTION_ALL
                })),
                s.on("swipeleft", ( () => {
                    this.setTempBetTicketOpen(!1)
                }
                ));
                let i = 0
                  , n = !1
                  , r = !1;
                s.on("panleft panright panend pancancel", (e => {
                    const t = a()("#" + this.preFix + "ticket_parent")
                      , s = t[0];
                    if ("panleft" === e.type || "panright" === e.type) {
                        m.Y.debug("***************** Pan Left Ticket Parent type:" + e.type),
                        n || (n = !0,
                        i = s.offsetLeft,
                        this.deltaY = 0,
                        this.ticketSwipeXStart = s.offsetLeft,
                        r = !1,
                        t.addClass("moving"));
                        const a = e.deltaX + i;
                        this.deltaY = e.deltaY,
                        m.Y.debug("--------------------------\x3e delta x:" + e.deltaX),
                        m.Y.debug("--------------------------\x3e delta y:" + e.deltaY),
                        m.Y.debug("--------------------------\x3e last Pos x:" + i),
                        m.Y.debug("--------------------------\x3e overall y:" + this.deltaY),
                        m.Y.debug("--------------------------\x3e posX:" + a),
                        m.Y.debug("--------------------------\x3e Start posX:" + this.ticketSwipeXStart),
                        this.ticketSwipeXStart > 0 && (this.ticketSwipeXStart = 0),
                        s.style.left = a + "px"
                    }
                    "panend" !== e.type && "pancancel" !== event.type || (n = !1,
                    m.Y.debug("Final"),
                    r || (m.Y.debug("left:" + parseInt(s.style.left.replace("px", ""), 10)),
                    parseInt(s.style.left.replace("px", ""), 10) < -1 * g.Z.gameSettings.posPanLeftDelTicketMin ? this.setTempBetTicketOpen(!1) : (m.Y.debug("Back"),
                    t.css("left", ""))),
                    t.removeClass("moving"))
                }
                ));
                const l = a()("#" + this.preFix + "ticket_parent")[0]
                  , p = new (c().Manager)(l);
                p.add(new (c().Pan)({
                    direction: c().DIRECTION_ALL
                })),
                p.on("swipeleft", ( () => {
                    this.setTempBetTicketOpen(!1)
                }
                ));
                let h = 0
                  , d = !1
                  , u = !1;
                p.on("panleft panright panend pancancel", (e => {
                    if (m.Y.debug("---------------------- Pan Class:" + e.target.className),
                    (a()(e.target).hasClass("beLiNumb") || a()(e.target).hasClass("obColumn") || a()(e.target).hasClass("noSwipeElem") || a()(e.target).hasClass("simplebar-scrollbar") || a()(e.target).hasClass("simplebar-track") || a()(e.target).hasClass("dot_betSign") || a()(e.target).hasClass("dot_tiElemCont") || a()(e.target).hasClass("dotTiNoSwipe") || a()(e.target).hasClass("oneBet")) && "panend" !== e.type && "pancancel" !== e.type)
                        return void m.Y.debug("---------------------- Return");
                    const t = a()("#" + this.preFix + "ticket_parent");
                    if (!t.hasClass("open"))
                        return;
                    const s = t[0];
                    if ("panleft" === e.type || "panright" === e.type) {
                        m.Y.debug("***************** Pan Left Ticket Parent type:" + e.type),
                        d || (d = !0,
                        h = s.offsetLeft,
                        this.deltaYBack = 0,
                        this.ticketSwipeXStartTarg = s.offsetLeft,
                        u = !1,
                        t.addClass("moving"));
                        let i = e.deltaX + h;
                        this.deltaYBack = e.deltaY,
                        m.Y.debug("--------------------------\x3e delta x:" + e.deltaX),
                        m.Y.debug("--------------------------\x3e delta y:" + e.deltaY),
                        m.Y.debug("--------------------------\x3e last Pos x:" + h),
                        m.Y.debug("--------------------------\x3e overall y:" + this.deltaYBack),
                        m.Y.debug("--------------------------\x3e posX:" + i),
                        m.Y.debug("--------------------------\x3e Start posX:" + this.ticketSwipeXStartTarg),
                        i > this.ticketSwipeXStartTarg && (i = this.ticketSwipeXStartTarg),
                        s.style.left = i + "px"
                    }
                    "panend" !== e.type && "pancancel" !== event.type || (d = !1,
                    m.Y.debug("Final"),
                    u || (m.Y.debug("left:" + parseInt(s.style.left.replace("px", ""), 10)),
                    parseInt(s.style.left.replace("px", ""), 10) < -1 * g.Z.gameSettings.posPanLeftDelTicketMin ? this.setTempBetTicketOpen(!1) : (m.Y.debug("Back"),
                    t.css("left", ""))),
                    t.removeClass("moving"))
                }
                ))
            }
            setUpResultHeader() {
                let e = "";
                e += "<span class='tabHeadColumn tabHeadColumnRaNr'>" + n.l.instance.getText("Quotes_Column1") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnTi'>" + n.l.instance.getText("result") + "</span>",
                a()("#" + this.preFix + "resOpenColumns").html(e)
            }
            setUpResultView() {
                new r.Z(a()("#" + this.preFix + "resOpenLiWarp")[0],{
                    autoHide: !1
                });
                let e = 0;
                for (const t of this.posgame.gamesList)
                    if (null !== t.result && t.winIsShown) {
                        const s = this.posgame.gameGraphics.getResultTableRecord(t, e % 2 != 0);
                        a()("#" + this.preFix + "resOpenList").append(s),
                        this.posgame.numberResults++,
                        e++
                    }
                let t = "printButtAct";
                this.posgame.gameType === u.O4.RTT.gamType && (t = "printIcoButt"),
                a()("#" + this.preFix + "resPri1 ." + t).on("click", (e => {
                    this.posgame.printResults(5, a()(e.target))
                }
                )),
                a()("#" + this.preFix + "resPri2 ." + t).on("click", (e => {
                    this.posgame.checkAddOldData(10).then((t => {
                        this.posgame.printResults(10, a()(e.target));
                        for (const e of t)
                            this.posgame.addOldResultTableRecord(e)
                    }
                    )).catch(( () => {
                        this.posgame.printResults(10, a()(e.target))
                    }
                    ))
                }
                )),
                a()("#" + this.preFix + "resPri3 ." + t).on("click", (e => {
                    this.posgame.checkAddOldData(20).then((t => {
                        this.posgame.printResults(20, a()(e.target));
                        for (const e of t)
                            this.posgame.addOldResultTableRecord(e)
                    }
                    )).catch(( () => {
                        this.posgame.printResults(20, a()(e.target))
                    }
                    ))
                }
                ))
            }
            setUpQuotaHeader() {
                let e = "";
                e += "<span class='tabHeadColumn tabHeadColumnRaNr'>" + n.l.instance.getText("Quotes_Column1") + "</span>";
                for (let t = 0; t < this.posgame.getNumberCompetitor(); t++)
                    e += "<div class='tabHeadColumn tabHeadNumb " + this.preFix + "number" + (t + 1) + "'></div>";
                a()("#" + this.preFix + "quoOpenColumns").html(e)
            }
            setUpQuotaHeaderTxt() {
                if (this.posgame.gameType === u.O4.KICKBOX.gamType) {
                    const e = a()("#" + this.preFix + "quoOpenColumns");
                    e.find(".tabHeadColumnFi").text(n.l.instance.getText("theFight")),
                    e.find(".tabHeadColumnWi").text(n.l.instance.getText("Winner")),
                    e.find(".tabHeadColumnRou").each(( (e, t) => {
                        a()(t).text(n.l.instance.getText("roundWgp") + " " + (e + 1))
                    }
                    ))
                } else
                    a()("#" + this.preFix + "quoOpenColumns").find(".tabHeadColumnRaNr").text(n.l.instance.getText("Quotes_Column1"))
            }
            setUpTurnoverHeader() {
                let e = "";
                e += "<span class='tabHeadColumn tabHeadColumnTiNr'>" + n.l.instance.getText("TurnOver_Column1") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnDate'>" + n.l.instance.getText("TurnOver_Column2") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnTip'>" + n.l.instance.getText("TurnOver_Column3") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column4") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column5") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column6") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column7") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnIcon'>" + n.l.instance.getText("TurnOver_Column8") + "</span>",
                e += "<span class='tabHeadColumn tabHeadColumnStatus'>" + n.l.instance.getText("TurnOver_Column9") + "</span>",
                a()("#" + this.preFix + "turnOpenColumns").html(e);
                let t = "";
                t += "<span class='turnSuHeCo tabHeadColumnTiNr'></span>",
                t += "<span class='turnSuHeCo tabHeadColumnDate'></span>",
                t += "<span class='turnSuHeCo tabHeadColumnTip'>" + n.l.instance.getText("TurnOver_Column3") + "</span>",
                t += "<span class='turnSuHeCo tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column4") + "</span>",
                t += "<span class='turnSuHeCo tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column5") + "</span>",
                t += "<span class='turnSuHeCo tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column6") + "</span>",
                t += "<span class='turnSuHeCo tabHeadColumnAmount'>" + n.l.instance.getText("TurnOver_Column7") + "</span>",
                a()("#" + this.preFix + "turnSumRow .turnSuHead").html(t)
            }
            setUpTurnoverView() {
                this._turnoverSimpleBar = new r.Z(a()("#" + this.preFix + "turnOpenLiWarp")[0],{
                    autoHide: !1
                })
            }
            closeLanguageSettings() {
                const e = a()("#" + this.preFix + "language_settings")
                  , t = a()("#" + this.preFix + "language_settings_menu");
                e.removeClass("language_settings_active"),
                t.addClass(this.preFix + "language_menu_animation_out"),
                t.removeClass(this.preFix + "language_menu_animation_in"),
                a()("#" + this.preFix + "butSet").removeClass("active").closest(".language_settings_menu_button").removeClass("active"),
                setTimeout(( () => {
                    e.css({
                        "z-index": -1,
                        display: "none"
                    })
                }
                ), 300),
                o.O.initSetSaved || x.u.instance.sendSetUserSettingRequest(x.u.getUserSettingsMessageFromUserSettings(o.O.getUserInitResult().settingsUser)).then((e => C(this, void 0, void 0, (function*() {
                    o.O.initSetSaved = !0
                }
                )))).catch((e => {
                    m.Y.error("Send Set user set Error:" + JSON.stringify(e))
                }
                ))
            }
            setUpTempTickets() {
                let e = "";
                e += "<span class='tickHeadColumn tickHeadColumnNr'>" + n.l.instance.getText("LeftBar_Number") + "</span>",
                e += "<span class='tickHeadColumn tickHeadColumnStd'>" + n.l.instance.getText("LeftBar_Quote") + "</span>",
                e += "<span class='tickHeadColumn tickHeadColumnStd'>" + n.l.instance.getText("LeftBar_Einsatz") + "</span>",
                e += "<span class='tickHeadColumn tickHeadColumnTi'>" + n.l.instance.getText("LeftBar_Ticket") + "</span>",
                a()("#" + this.preFix + "tickOpenColumns").html(e)
            }
            changeViewSetTempBetTicketOpen(e, t) {
                m.Y.debug("------- Change View set Temp Bet visible:" + e + " Game:" + this.posgame.gameType);
                const i = a()("#" + this.preFix + "ticket_parent");
                let n = 0;
                if (n = e ? g.Z.gameSettings.changeViewTickOpenAnimTime - t : g.Z.gameSettings.changeViewTickCloseAnimTime - t,
                n < 0 && (n = 0),
                e) {
                    const e = n / t * 100
                      , o = t / (t - n)
                      , r = s(16233)({
                        0: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (17 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (22 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (27 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (80 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (85 - e) * o)]: {
                            filter: "blur(5px)"
                        },
                        [Math.max(0, (90 - e) * o)]: {
                            filter: "blur(0px)"
                        },
                        100: {
                            filter: "blur(0px)"
                        }
                    }, "blur-ticket-sw");
                    a()("#keyframes").text(r.css),
                    a()("#" + this.preFix + "ticket_parent").css({
                        "animation-name": "blur-ticket-sw",
                        "animation-duration": t + "ms",
                        "-webkit-animation-fill-mode": "forwards",
                        "animation-fill-mode": "forwards"
                    }),
                    i.css({
                        "transition-property": "",
                        "transition-duration": "",
                        "transition-delay": ""
                    }),
                    i.css({
                        "transition-delay": .1 * t + "ms, " + .1 * t + "ms, " + .1 * t + "ms ",
                        "transition-duration": t + "ms, " + t + "ms, 0ms"
                    }),
                    i.find(".openShow").css({
                        "transition-delay": 1.1 * t + "ms, " + t + "ms",
                        "transition-duration": .1 * t + "ms, 0ms"
                    }),
                    m.Y.debug("Add open 1"),
                    i.addClass("open activeAnim"),
                    clearTimeout(this.ticketOpenTimout),
                    this.ticketOpenTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * g.Z.gameSettings.tempBetsOpenAnimTime)
                } else {
                    const e = n / t * 100
                      , o = t / (t - n)
                      , r = s(16233)({
                        0: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (10 - e) * o)]: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (15 - e) * o)]: {
                            filter: "blur(5px)"
                        },
                        [Math.max(0, (20 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (66 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (71 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (76 - e) * o)]: {
                            filter: "blur(20px)"
                        },
                        100: {
                            filter: "blur(20px)"
                        }
                    }, "blur-ticket-close-sw");
                    a()("#keyframes").text(r.css),
                    i.hasClass("open") && a()("#" + this.preFix + "ticket_parent").css({
                        "animation-name": "blur-ticket-close-sw",
                        "animation-duration": t + "ms",
                        "-webkit-animation-fill-mode": "forwards",
                        "animation-fill-mode": "forwards"
                    }),
                    i.css({
                        "transition-property": "",
                        "transition-duration": "",
                        "transition-delay": ""
                    }),
                    i.css({
                        "transition-delay": .1 * t + "ms, " + .1 * t + "ms, " + t + "ms ",
                        "transition-duration": t + "ms, " + t + "ms, 0ms"
                    }),
                    m.Y.debug("Remove open 2"),
                    i.removeClass("open").addClass("activeAnim"),
                    clearTimeout(this.ticketCloseTimout),
                    this.ticketCloseTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * g.Z.gameSettings.tempBetsOpenAnimTime)
                }
                this.lastTickClick = Date.now()
            }
            showScannTicketInput(e) {
                a()("#" + this.preFix + "ticketScannCont").addClass("activeState"),
                a()("#" + this.preFix + "tickScaInp").val(this.posgame.scannedText),
                e.addClass("activeState")
            }
            hideScannTicketInput(e) {
                a()("#" + this.preFix + "ticketScannCont").removeClass("activeState"),
                e.removeClass("activeState"),
                this.posgame.scannedText = "",
                a()("#" + this.preFix + "tickScaInp").val("")
            }
            checkLogChangeTicketTime() {
                return this.posgame.gameLength - this.posgame.gameTimer.getGameLoopSec() <= d.TIME_NO_MORE_BETS_ALLOWED
            }
        }
        class b {
            constructor(e, t, s) {
                this.toggleId = "",
                this.gamePreFix = "",
                this.preSetValue = !1,
                this.toggleId = e,
                this.gamePreFix = t,
                this.preSetValue = s
            }
            getHtml() {
                let e = ""
                  , t = ""
                  , s = ""
                  , i = ""
                  , a = "";
                return this.preSetValue ? (t = " togglerActiveText noActive",
                i = " togglerActive",
                a = " togglerIn") : (s = " togglerActiveText noActive",
                a = " togglerOut"),
                e = "<div class='toggler '><span class='tokc_on_lab togglerTxt" + t + "' id='" + this.gamePreFix + "toggler" + this.toggleId + "OnTxt'>" + n.l.instance.getTextCommon("on_lab") + "</span><div class='togglerBtn" + i + "' id='" + this.gamePreFix + "toggler" + this.toggleId + "'><div class='togglerCircle" + a + "' id='" + this.gamePreFix + "toggler" + this.toggleId + "Circle'></div></div><span id='" + this.gamePreFix + "toggler" + this.toggleId + "OffTxt' class='tokc_off_lab togglerTxt" + s + "'>" + n.l.instance.getTextCommon("off_lab") + "</span></div>",
                e
            }
            setUpEvents(e, t) {
                a()("#" + this.gamePreFix + "toggler" + this.toggleId).on("click", (s => {
                    a()(s.target).hasClass("togglerActive") ? this.setToggle(a()(s.target), !1, e, t) : this.setToggle(a()(s.target), !0, e, t)
                }
                )),
                a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OffTxt").on("click", (s => {
                    const i = a()("#" + this.gamePreFix + "toggler" + this.toggleId);
                    i.hasClass("togglerActive") && this.setToggle(i, !1, e, t)
                }
                )),
                a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OnTxt").on("click", (s => {
                    const i = a()("#" + this.gamePreFix + "toggler" + this.toggleId);
                    i.hasClass("togglerActive") || this.setToggle(i, !0, e, t)
                }
                ))
            }
            setToggleValue(e, t, s) {
                this.setToggle(a()("#" + this.gamePreFix + "toggler" + this.toggleId), e, t, s)
            }
            setToggle(e, t, s, i) {
                if (t) {
                    const t = a()("#" + this.gamePreFix + "toggler" + this.toggleId + "Circle");
                    t.addClass("togglerIn"),
                    t.removeClass("togglerOut"),
                    e.addClass("togglerActive"),
                    a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OnTxt").addClass("togglerActiveText noActive"),
                    a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OffTxt").removeClass("togglerActiveText noActive"),
                    s()
                } else {
                    const t = a()("#" + this.gamePreFix + "toggler" + this.toggleId + "Circle");
                    t.addClass("togglerOut"),
                    t.removeClass("togglerIn"),
                    e.removeClass("togglerActive"),
                    a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OffTxt").addClass("togglerActiveText noActive"),
                    a()("#" + this.gamePreFix + "toggler" + this.toggleId + "OnTxt").removeClass("togglerActiveText noActive"),
                    i()
                }
            }
        }
        class w extends k {
            setUpClosedTicketLogic() {
                new r.Z(a()("#" + this.preFix + "tickOpenLiWarp")[0],{
                    autoHide: !1
                });
                const e = new r.Z(a()("#" + this.preFix + "tickClosLiWarp")[0],{
                    autoHide: !0,
                    clickOnTrack: !1
                });
                if (a()("#" + this.preFix + "tickClosLiWarp").on("wheel", (t => {
                    m.Y.debug("----------------\x3e Wheel event" + t.originalEvent.deltaY),
                    e.getScrollElement().scrollLeft += -1 * Math.round(t.originalEvent.deltaY / 4),
                    t.preventDefault()
                }
                )),
                !o.O.isTouch) {
                    const t = a()("#" + this.preFix + "tickClosLiWarp")[0]
                      , s = new (c().Manager)(t);
                    o.O.noTouchHammerJsList.push(s),
                    s.add(new (c().Pan)({
                        direction: c().DIRECTION_HORIZONTAL
                    })),
                    s.on("panstart panleft panright", (t => {
                        m.Y.debug("Close List --------------------------\x3e delta x:" + t.deltaX),
                        m.Y.debug("Close List --------------------------\x3e delta y:" + t.deltaY),
                        "panstart" === t.type && (this.scrollLastX = 0),
                        e.getScrollElement().scrollLeft += -1 * Math.round(t.deltaX - this.scrollLastX),
                        this.scrollLastX = t.deltaX
                    }
                    ))
                }
            }
            setTempBetTicketOpen(e) {
                m.Y.debug("------- set Temp Bet visible:" + e + " Game:" + this.posgame.gameType);
                let t = g.Z.gameSettings.tempBetsOpenAnimTime - (Date.now() - this.lastTickClick)
                  , i = 0;
                const n = .75 * g.Z.gameSettings.tempBetsOpenAnimTime / (this.posgame.numberCompetitor + 1)
                  , r = .95 * g.Z.gameSettings.tempBetsOpenAnimTime / this.posgame.numberCompetitor;
                if (t < 0 && (t = 0),
                o.O.performanceLevel !== u.BR.LOW && (this._target.css({
                    "transition-property": "",
                    "transition-duration": "",
                    "transition-delay": "",
                    "animation-fill-mode": ""
                }),
                a()("#" + this.posgame.preFix + "ticket_parent .openHide").css({
                    "transition-duration": ""
                }),
                this._target.find(".openShow").css({
                    "transition-delay": "",
                    "transition-duration": ""
                }),
                a()("#" + this.preFix + "coinCont .coin0_txt").css({
                    "transition-duration": .2 * g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                }),
                a()("#" + this.preFix + "coinCont .coinSing").css({
                    "transition-duration": .6 * g.Z.gameSettings.tempBetsOpenAnimTime / 5 + "ms"
                }),
                a()("." + this.preFix + "selNumCont").css({
                    "transition-duration": g.Z.gameSettings.tempBetsOpenAnimTime / (this.posgame.numberCompetitor + 1) + "ms"
                }),
                a()("." + this.preFix + "activeCont").css({
                    "transition-duration": g.Z.gameSettings.tempBetsOpenAnimTime / (this.posgame.numberCompetitor + 1) + "ms"
                })),
                e) {
                    if (o.O.performanceLevel !== u.BR.LOW) {
                        for (let e = 0; e <= this.posgame.numberCompetitor; e++) {
                            const s = Math.max(0, i - t);
                            e <= 0 ? (a()("#" + this.preFix + "first").css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "second").css("transition-delay", s + "ms")) : (a()("#" + this.preFix + "selNumbFirst" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "selNumbSecond" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "activeFirst" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "activeSecond" + e).css("transition-delay", s + "ms")),
                            i += n
                        }
                        const e = Math.max(0, 0 * g.Z.gameSettings.tempBetsOpenAnimTime - t);
                        a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", e + "ms");
                        const o = .2 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , r = .6 * g.Z.gameSettings.tempBetsOpenAnimTime / this.posgame.coinsValueList.length;
                        for (let e = 0; e <= this.posgame.coinsValueList.length; e++) {
                            let t = o + r * (e + 1);
                            e === this.posgame.coinsValueList.length - 1 && (t = o + r * e),
                            a()("#" + this.preFix + "coinCont .coinPos" + e).css({
                                "transition-duration": r + "ms, 0ms, " + .2 * g.Z.gameSettings.tempBetsOpenAnimTime + "ms",
                                "transition-delay": o + r * e + "ms, " + t + "ms, " + t + "ms"
                            })
                        }
                        a()("#" + this.preFix + "coinCont .coinOverlay").css({
                            "transition-delay": "0ms "
                        });
                        const m = .4 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , l = .5 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , c = .3 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , p = .7 * g.Z.gameSettings.tempBetsOpenAnimTime;
                        a()("#" + this.preFix + "func_parent_1 .functxt").css({
                            "transition-duration": m + "ms",
                            "transition-delay": l + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_2 .functxt").css({
                            "transition-duration": m + "ms",
                            "transition-delay": l + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_1>div").css({
                            "transition-duration": c + "ms",
                            "transition-delay": p + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_2>div").css({
                            "transition-duration": c + "ms",
                            "transition-delay": p + "ms"
                        });
                        const h = t / g.Z.gameSettings.tempBetsOpenAnimTime * 100
                          , d = g.Z.gameSettings.tempBetsOpenAnimTime / (g.Z.gameSettings.tempBetsOpenAnimTime - t)
                          , u = s(16233)({
                            0: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (17 - h) * d)]: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (22 - h) * d)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (27 - h) * d)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (80 - h) * d)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (85 - h) * d)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (90 - h) * d)]: {
                                filter: "blur(0px)"
                            },
                            100: {
                                filter: "blur(0px)"
                            }
                        }, "blur-ticket");
                        a()("#keyframes").text(u.css),
                        a()("#" + this.preFix + "ticket_parent").css({
                            "animation-name": "blur-ticket",
                            "animation-duration": g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                        }),
                        this._target.css({
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-delay": ""
                        })
                    }
                    m.Y.debug("Add open 2"),
                    this._target.addClass("open activeAnim"),
                    this.numberElem.addClass("tickOpen"),
                    this.numberSecElem.addClass("tickOpen"),
                    this.numberActElem.addClass("tickOpen"),
                    this.numberActSecElem.addClass("tickOpen"),
                    this.coinElem.addClass("tickOpen"),
                    this.func1Elem.addClass("tickOpen"),
                    this.func2Elem.addClass("tickOpen"),
                    clearTimeout(this.animOpenTimout),
                    this.animOpenTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .2 * g.Z.gameSettings.tempBetsOpenAnimTime)
                } else {
                    if (this.posgame.gameGraphics.ticketWasOpen = !1,
                    o.O.performanceLevel !== u.BR.LOW) {
                        for (let e = this.posgame.numberCompetitor; e >= 0; e--) {
                            const s = Math.max(0, i - t);
                            e <= 0 ? (a()("#" + this.preFix + "first").css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "second").css("transition-delay", s + "ms")) : (a()("#" + this.preFix + "selNumbFirst" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "selNumbSecond" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "activeFirst" + e).css("transition-delay", s + "ms"),
                            a()("#" + this.preFix + "activeSecond" + e).css("transition-delay", s + "ms")),
                            i += r
                        }
                        const e = Math.max(0, .7 * g.Z.gameSettings.tempBetsOpenAnimTime - t);
                        a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", e + "ms");
                        const n = .25 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , o = .8 * g.Z.gameSettings.tempBetsOpenAnimTime / this.posgame.coinsValueList.length;
                        let m = -1;
                        for (let e = this.posgame.coinsValueList.length - 1; e >= 0; e--) {
                            let t = 0;
                            t = e === this.posgame.coinsValueList.length - 1 ? 0 : e === this.posgame.coinsValueList.length - 2 ? n : n + o * m,
                            a()("#" + this.preFix + "coinCont .coinPos" + e).css({
                                "transition-duration": o + "ms, 0ms, " + n + "ms",
                                "transition-delay": t + "ms, " + t + "ms, 0ms"
                            }),
                            m++
                        }
                        a()("#" + this.preFix + "coinCont .coinOverlay").css({
                            "transition-delay": g.Z.gameSettings.tempBetsOpenAnimTime - t + "ms "
                        });
                        const l = .5 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , c = .3 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , p = .3 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , h = 0 * g.Z.gameSettings.tempBetsOpenAnimTime;
                        a()("#" + this.preFix + "func_parent_1 .functxt").css({
                            "transition-duration": l + "ms",
                            "transition-delay": c + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_2 .functxt").css({
                            "transition-duration": l + "ms",
                            "transition-delay": c + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_1>div").css({
                            "transition-duration": p + "ms",
                            "transition-delay": h + "ms"
                        }),
                        a()("#" + this.preFix + "func_parent_2>div").css({
                            "transition-duration": p + "ms",
                            "transition-delay": h + "ms"
                        });
                        const d = s(16233)
                          , u = t / g.Z.gameSettings.tempBetsOpenAnimTime * 100
                          , x = g.Z.gameSettings.tempBetsOpenAnimTime / (g.Z.gameSettings.tempBetsOpenAnimTime - t)
                          , T = d({
                            0: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (10 - u) * x)]: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (15 - u) * x)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (20 - u) * x)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (66 - u) * x)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (71 - u) * x)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (76 - u) * x)]: {
                                filter: "blur(0px)"
                            },
                            100: {
                                filter: "blur(0px)"
                            }
                        }, "blur-ticket-close");
                        a()("#keyframes").text(T.css),
                        a()("#" + this.preFix + "ticket_parent").css({
                            "animation-name": "blur-ticket-close",
                            "animation-duration": g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                        }),
                        this._target.css({
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-delay": ""
                        })
                    }
                    m.Y.debug("Remove open 1"),
                    this._target.removeClass("open").addClass("activeAnim"),
                    this.numberElem.removeClass("tickOpen"),
                    this.numberSecElem.removeClass("tickOpen"),
                    this.numberActElem.removeClass("tickOpen"),
                    this.numberActSecElem.removeClass("tickOpen"),
                    this.coinElem.removeClass("tickOpen"),
                    this._target.css("left", ""),
                    this.func1Elem.removeClass("tickOpen"),
                    this.func2Elem.removeClass("tickOpen"),
                    clearTimeout(this.animCloseTimout),
                    this.animCloseTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * g.Z.gameSettings.tempBetsOpenAnimTime)
                }
                this.lastTickClick = Date.now()
            }
            changeViewCloseTempBetTicket(e) {
                if (m.Y.debug("------- Close Ticket change view: " + e),
                o.O.performanceLevel !== u.BR.LOW) {
                    let t = 0;
                    t = g.Z.gameSettings.changeViewTickCloseAnimTime - e,
                    t < 0 && (t = 0);
                    const i = t / e * 100
                      , n = e / (e - t)
                      , o = s(16233)({
                        0: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (10 - i) * n)]: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (15 - i) * n)]: {
                            filter: "blur(5px)"
                        },
                        [Math.max(0, (20 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (66 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (71 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (76 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        100: {
                            filter: "blur(20px)"
                        }
                    }, "blur-ticket-close-sw");
                    a()("#keyframes").text(o.css),
                    this._target.hasClass("open") && a()("#" + this.preFix + "ticket_parent").css({
                        "animation-name": "blur-ticket-close-sw",
                        "animation-duration": e + "ms"
                    }),
                    this._target.css({
                        "transition-property": "",
                        "transition-duration": "",
                        "transition-delay": ""
                    }),
                    this._target.css({
                        "transition-delay": .1 * e + "ms, " + .1 * e + "ms, " + e + "ms ",
                        "transition-duration": e + "ms, " + e + "ms, 0ms"
                    }),
                    this._target.removeClass("open").addClass("activeAnim"),
                    clearTimeout(this.ticketCloseTimout),
                    this.ticketCloseTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * e)
                }
                let t = 0
                  , i = 0;
                const n = e / this.posgame.numberCompetitor + 1;
                if (t < 0 && (t = 0),
                o.O.performanceLevel !== u.BR.LOW) {
                    a()("#" + this.preFix + "coinCont .coin0_txt").css({
                        "transition-duration": .2 * e + "ms"
                    }),
                    a()("#" + this.preFix + "coinCont .coinSing").css({
                        "transition-duration": .6 * e / 5 + "ms"
                    }),
                    a()("." + this.preFix + "selNumCont").css({
                        "transition-duration": e / (this.posgame.numberCompetitor + 1) + "ms"
                    }),
                    a()("." + this.preFix + "activeCont").css({
                        "transition-duration": e / (this.posgame.numberCompetitor + 1) + "ms"
                    });
                    for (let e = this.posgame.numberCompetitor; e >= 0; e--) {
                        const s = Math.max(0, i - t);
                        e <= 0 ? (a()("#" + this.preFix + "first").css("transition-delay", s + "ms"),
                        a()("#" + this.preFix + "second").css("transition-delay", s + "ms")) : (a()("#" + this.preFix + "selNumbFirst" + e).css("transition-delay", s + "ms"),
                        a()("#" + this.preFix + "selNumbSecond" + e).css("transition-delay", s + "ms"),
                        a()("#" + this.preFix + "activeFirst" + e).css("transition-delay", s + "ms"),
                        a()("#" + this.preFix + "activeSecond" + e).css("transition-delay", s + "ms")),
                        i += n
                    }
                    const s = Math.max(0, .7 * e - t);
                    a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", s + "ms");
                    const o = .1 * e
                      , r = .95 * e / this.posgame.coinsValueList.length;
                    let m = -1;
                    for (let e = this.posgame.coinsValueList.length - 1; e >= 0; e--) {
                        let t = 0;
                        t = e === this.posgame.coinsValueList.length - 1 ? 0 : e === this.posgame.coinsValueList.length - 2 ? o : o + r * m,
                        a()("#" + this.preFix + "coinCont .coinPos" + e).css({
                            "transition-duration": r + "ms, 0ms, " + o + "ms",
                            "transition-delay": t + "ms, " + t + "ms, 0ms"
                        }),
                        m++
                    }
                    a()("#" + this.preFix + "coinCont .coinOverlay").css({
                        "transition-delay": e - t + "ms "
                    });
                    const l = .5 * e
                      , c = .3 * e
                      , p = .3 * e
                      , h = 0 * e;
                    a()("#" + this.preFix + "func_parent_1 .functxt").css({
                        "transition-duration": l + "ms",
                        "transition-delay": c + "ms"
                    }),
                    a()("#" + this.preFix + "func_parent_2 .functxt").css({
                        "transition-duration": l + "ms",
                        "transition-delay": c + "ms"
                    }),
                    a()("#" + this.preFix + "func_parent_1>div").css({
                        "transition-duration": p + "ms",
                        "transition-delay": h + "ms"
                    }),
                    a()("#" + this.preFix + "func_parent_2>div").css({
                        "transition-duration": p + "ms",
                        "transition-delay": h + "ms"
                    })
                }
                this.numberElem.removeClass("tickOpen"),
                this.numberSecElem.removeClass("tickOpen"),
                this.numberActElem.removeClass("tickOpen"),
                this.numberActSecElem.removeClass("tickOpen"),
                this.coinElem.removeClass("tickOpen"),
                this._target.css("left", ""),
                this.func1Elem.removeClass("tickOpen"),
                this.func2Elem.removeClass("tickOpen")
            }
            setQuotaView() {
                new r.Z(a()("#" + this.preFix + "quoOpenLiWarp")[0],{
                    autoHide: !1
                }),
                a()("#" + this.preFix + "quoPri1 .printButtAct").on("click", (e => {
                    this.posgame.printOdds(5, a()(e.target))
                }
                )),
                a()("#" + this.preFix + "quoPri2 .printButtAct").on("click", (e => {
                    this.posgame.printOdds(10, a()(e.target))
                }
                )),
                a()("#" + this.preFix + "quoPri3 .printButtAct").on("click", (e => {
                    this.posgame.printOdds(20, a()(e.target))
                }
                ))
            }
            updateQuotaView() {
                let e = 0
                  , t = "";
                for (let s = this.posgame.gamesList.length - 1; s >= 0; s--) {
                    const i = this.posgame.gamesList[s];
                    s >= Math.max(this.posgame.getIndexCurGame() - 1 - g.Z.gameSettingsPos.quotaViewMaxFuture, 0) && s <= this.posgame.getIndexCurGame() - 1 + g.Z.gameSettingsPos.quotaViewMaxPast && (t += this.posgame.gameGraphics.getQuotaTableRecord(i, e % 2 != 0),
                    e++)
                }
                a()("#" + this.preFix + "quoOpenList").html(t)
            }
            offClickEvents() {}
        }
        class v extends k {
            constructor() {
                super(...arguments),
                this.grid = null,
                this.wheelGrid = null,
                this.coinGrid = null,
                this.wheeleCoinGrid = null,
                this._gridLogic = new O(this.posgame),
                this.deltaDragX = 0,
                this.deltaDragY = 0,
                this.coinDragElement = null
            }
            get gridLogic() {
                return this._gridLogic
            }
            initGraphicSetUp() {
                super.initGraphicSetUp(),
                this.grid = a()("#" + this.preFix + "grid"),
                this.wheelGrid = a()("#" + this.preFix + "rndView"),
                this.coinGrid = a()("#rtt_grid_coin"),
                this.wheeleCoinGrid = a()("#rtt_rndGrid_coin"),
                this.changeViewElem = a()("#" + this.preFix + "ChangeView"),
                this.changeViewSpotElem = a()("#" + this.preFix + "changeViewSpot"),
                this.setUpRouletteAction(),
                this._gridLogic.setUpGirdLogic(),
                this._gridLogic.setUpWheeleGirdLogic(),
                this.gridLogic.setUpMultiSelect()
            }
            setUpRouletteAction() {
                o.O.isTouch || a()("#" + this.preFix + "delLastButt").on("click", ( () => {
                    this.deleteLastClicked()
                }
                )),
                a()("#" + this.preFix + "delLastButt").on("touchstart", ( () => {
                    setTimeout(( () => {
                        this.deleteLastClicked()
                    }
                    ), 1)
                }
                )),
                a()("#" + this.preFix + "changeViewSpot").on("click", (e => {
                    const t = a()("#" + this.preFix + "ChangeView");
                    this.changeGridView(t)
                }
                )),
                a()("#" + this.preFix + "changeViewSpot").on("touchstart", (e => {
                    const t = a()("#" + this.preFix + "ChangeView");
                    this.changeGridView(t)
                }
                ))
            }
            setTempBetTicketOpen(e) {
                m.Y.debug("------- set Temp Bet visible:" + e + " Game:" + this.posgame.gameType);
                let t = g.Z.gameSettings.tempBetsOpenAnimTime - (Date.now() - this.lastTickClick);
                if (t < 0 && (t = 0),
                m.Y.debug("AAAAAAAAAAAAAAAnim Offset:" + t),
                o.O.performanceLevel !== u.BR.LOW && (this._target.css({
                    "transition-property": "",
                    "transition-duration": "",
                    "transition-delay": "",
                    "animation-fill-mode": ""
                }),
                a()("#" + this.posgame.preFix + "ticket_parent .openHide").css({
                    "transition-duration": ""
                }),
                this._target.find(".openShow").css({
                    "transition-delay": "",
                    "transition-duration": ""
                }),
                a()("#" + this.preFix + "coinCont .coin0_txt").css({
                    "transition-duration": .2 * g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                }),
                a()("#" + this.preFix + "coinCont .coinSing").css({
                    "transition-duration": .6 * g.Z.gameSettings.tempBetsOpenAnimTime / 5 + "ms"
                }),
                a()("." + this.preFix + "selNumCont").css({
                    "transition-duration": g.Z.gameSettings.tempBetsOpenAnimTime / (this.posgame.numberCompetitor + 1) + "ms"
                }),
                a()("." + this.preFix + "activeCont").css({
                    "transition-duration": g.Z.gameSettings.tempBetsOpenAnimTime / (this.posgame.numberCompetitor + 1) + "ms"
                })),
                e) {
                    if (o.O.performanceLevel !== u.BR.LOW) {
                        const e = Math.max(0, .08 * g.Z.gameSettings.tempBetsOpenAnimTime - t);
                        a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", e + "ms");
                        const i = .2 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , n = .4 * g.Z.gameSettings.tempBetsOpenAnimTime / this.posgame.coinsValueList.length;
                        for (let e = 0; e <= this.posgame.coinsValueList.length; e++) {
                            let t = i + n * (e + 1);
                            e === this.posgame.coinsValueList.length - 1 && (t = i + n * e),
                            a()("#" + this.preFix + "coinCont ." + this.preFix + "coinPos" + e).css({
                                "transition-duration": n + "ms, 0ms, " + .2 * g.Z.gameSettings.tempBetsOpenAnimTime + "ms",
                                "transition-delay": i + n * e + "ms, " + t + "ms, " + t + "ms"
                            })
                        }
                        a()("#" + this.preFix + "coinCont .coinOverlay").css({
                            "transition-delay": "0ms "
                        });
                        const o = Math.max(.3 * g.Z.gameSettings.tempBetsOpenAnimTime - t, 0);
                        this.changeViewElem.css({
                            "transition-duration": o + "ms",
                            "transition-delay": "0ms"
                        }),
                        this.changeViewSpotElem.css({
                            "transition-delay": "0ms"
                        });
                        const r = .7 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , m = Math.max(r - t, 0)
                          , l = .49 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , c = .125 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , p = Math.max(c - t, 0);
                        let h = l;
                        p <= 0 && (h = Math.max(h - (t - c), 0)),
                        this.grid.css({
                            "transition-duration": m + "ms, " + h + "ms, 0ms",
                            "transition-delay": "0ms, " + p + "ms, " + (p + h) + "ms"
                        }),
                        this.wheelGrid.css({
                            "transition-duration": m + "ms, " + h + "ms, 0ms ",
                            "transition-delay": "0ms, " + p + "ms, " + (p + h) + "ms "
                        });
                        const d = t / g.Z.gameSettings.tempBetsOpenAnimTime * 100
                          , u = g.Z.gameSettings.tempBetsOpenAnimTime / (g.Z.gameSettings.tempBetsOpenAnimTime - t)
                          , x = s(16233)({
                            0: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (17 - d) * u)]: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (22 - d) * u)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (27 - d) * u)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (80 - d) * u)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (85 - d) * u)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (90 - d) * u)]: {
                                filter: "blur(0px)"
                            },
                            100: {
                                filter: "blur(0px)"
                            }
                        }, "blur-ticket");
                        a()("#keyframes").text(x.css),
                        a()("#" + this.preFix + "ticket_parent").css({
                            "animation-name": "blur-ticket",
                            "animation-duration": g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                        }),
                        this._target.css({
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-delay": ""
                        })
                    }
                    m.Y.debug("Add open 2"),
                    this._target.addClass("open activeAnim"),
                    this.coinElem.addClass("tickOpen"),
                    this.changeViewElem.addClass("tickOpen"),
                    this.changeViewSpotElem.addClass("tickOpen"),
                    this.grid.addClass("tickOpen"),
                    this.wheelGrid.addClass("tickOpen"),
                    clearTimeout(this.animOpenTimout),
                    this.animOpenTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .2 * g.Z.gameSettings.tempBetsOpenAnimTime)
                } else {
                    if (this.posgame.gameGraphics.ticketWasOpen = !1,
                    o.O.performanceLevel !== u.BR.LOW) {
                        const e = Math.max(0, .7 * g.Z.gameSettings.tempBetsOpenAnimTime - t);
                        a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", e + "ms");
                        const i = .35 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , n = .7 * g.Z.gameSettings.tempBetsOpenAnimTime / this.posgame.coinsValueList.length;
                        let o = -1;
                        for (let e = this.posgame.coinsValueList.length - 1; e >= 0; e--) {
                            let t = 0;
                            t = i + n * o,
                            a()("#" + this.preFix + "coinCont ." + this.preFix + "coinPos" + e).css({
                                "transition-duration": n + "ms, 0ms, " + i + "ms",
                                "transition-delay": t + "ms, " + t + "ms, " + i + "ms"
                            }),
                            o++
                        }
                        a()("#" + this.preFix + "coinCont .coinOverlay").css({
                            "transition-delay": g.Z.gameSettings.tempBetsOpenAnimTime - t + "ms "
                        });
                        const r = .7 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , m = Math.max(r - t);
                        let l = .3 * g.Z.gameSettings.tempBetsOpenAnimTime;
                        m <= 0 && (l = Math.max(l - (t - r), 0)),
                        this.changeViewElem.css({
                            "transition-duration": l + "ms",
                            "transition-delay": m + "ms"
                        }),
                        this.changeViewSpotElem.css({
                            "transition-delay": m + "ms"
                        });
                        const c = .6 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , p = .4 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , h = Math.max(p - t, 0);
                        let d = c;
                        h <= 0 && (d = Math.max(d - (t - p), 0));
                        const u = .6 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , x = .4 * g.Z.gameSettings.tempBetsOpenAnimTime
                          , T = Math.max(x - t, 0);
                        let S = u;
                        T <= 0 && (S = Math.max(S - (t - x), 0)),
                        this.grid.css({
                            "transition-duration": d + "ms, " + S + "ms, 0ms",
                            "transition-delay": h + "ms, " + T + "ms, 0ms"
                        }),
                        this.wheelGrid.css({
                            "transition-duration": d + "ms, " + S + "ms, 0ms ",
                            "transition-delay": h + "ms, " + T + "ms, 0ms "
                        });
                        const C = s(16233)
                          , k = t / g.Z.gameSettings.tempBetsOpenAnimTime * 100
                          , b = g.Z.gameSettings.tempBetsOpenAnimTime / (g.Z.gameSettings.tempBetsOpenAnimTime - t)
                          , w = C({
                            0: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (10 - k) * b)]: {
                                filter: "blur(0px)"
                            },
                            [Math.max(0, (15 - k) * b)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (20 - k) * b)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (66 - k) * b)]: {
                                filter: "blur(20px)"
                            },
                            [Math.max(0, (71 - k) * b)]: {
                                filter: "blur(5px)"
                            },
                            [Math.max(0, (76 - k) * b)]: {
                                filter: "blur(0px)"
                            },
                            100: {
                                filter: "blur(0px)"
                            }
                        }, "blur-ticket-close");
                        a()("#keyframes").text(w.css),
                        a()("#" + this.preFix + "ticket_parent").css({
                            "animation-name": "blur-ticket-close",
                            "animation-duration": g.Z.gameSettings.tempBetsOpenAnimTime + "ms"
                        }),
                        this._target.css({
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-delay": ""
                        })
                    }
                    m.Y.debug("Remove open 1"),
                    this._target.removeClass("open").addClass("activeAnim"),
                    this.coinElem.removeClass("tickOpen"),
                    this._target.css("left", ""),
                    this.changeViewElem.removeClass("tickOpen"),
                    this.changeViewSpotElem.removeClass("tickOpen"),
                    this.grid.removeClass("tickOpen"),
                    this.wheelGrid.removeClass("tickOpen"),
                    clearTimeout(this.animCloseTimout),
                    this.animCloseTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * g.Z.gameSettings.tempBetsOpenAnimTime)
                }
                this.lastTickClick = Date.now()
            }
            changeViewCloseTempBetTicket(e) {
                if (m.Y.debug("------- Close Ticket change view: " + e),
                o.O.performanceLevel !== u.BR.LOW) {
                    let t = 0;
                    t = g.Z.gameSettings.changeViewTickCloseAnimTime - e,
                    t < 0 && (t = 0);
                    const i = t / e * 100
                      , n = e / (e - t)
                      , o = s(16233)({
                        0: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (10 - i) * n)]: {
                            filter: "blur(0px)"
                        },
                        [Math.max(0, (15 - i) * n)]: {
                            filter: "blur(5px)"
                        },
                        [Math.max(0, (20 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (66 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (71 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        [Math.max(0, (76 - i) * n)]: {
                            filter: "blur(20px)"
                        },
                        100: {
                            filter: "blur(20px)"
                        }
                    }, "blur-ticket-close-sw");
                    a()("#keyframes").text(o.css),
                    this._target.hasClass("open") && a()("#" + this.preFix + "ticket_parent").css({
                        "animation-name": "blur-ticket-close-sw",
                        "animation-duration": e + "ms"
                    }),
                    this._target.css({
                        "transition-property": "",
                        "transition-duration": "",
                        "transition-delay": ""
                    }),
                    this._target.css({
                        "transition-delay": .1 * e + "ms, " + .1 * e + "ms, " + e + "ms ",
                        "transition-duration": e + "ms, " + e + "ms, 0ms"
                    }),
                    this._target.removeClass("open").addClass("activeAnim"),
                    clearTimeout(this.ticketCloseTimout),
                    this.ticketCloseTimout = setTimeout(( () => {
                        this._target.removeClass("activeAnim")
                    }
                    ), .9 * g.Z.gameSettings.tempBetsOpenAnimTime),
                    a()("#" + this.preFix + "coinCont .coin0_txt").css({
                        "transition-duration": .2 * e + "ms"
                    }),
                    a()("#" + this.preFix + "coinCont .coinSing").css({
                        "transition-duration": .6 * e / 5 + "ms"
                    }),
                    a()("." + this.preFix + "selNumCont").css({
                        "transition-duration": e / (this.posgame.numberCompetitor + 1) + "ms"
                    }),
                    a()("." + this.preFix + "activeCont").css({
                        "transition-duration": e / (this.posgame.numberCompetitor + 1) + "ms"
                    });
                    const r = Math.max(0, .7 * e);
                    a()("#" + this.preFix + "coinCont .coin0_txt").css("transition-delay", r + "ms");
                    const m = .1 * e
                      , l = .95 * e / this.posgame.coinsValueList.length;
                    let c = -1;
                    for (let e = this.posgame.coinsValueList.length - 1; e >= 0; e--) {
                        let t = 0;
                        t = e === this.posgame.coinsValueList.length - 1 ? 0 : e === this.posgame.coinsValueList.length - 2 ? m : m + l * c,
                        a()("#" + this.preFix + "coinCont ." + this.preFix + "coinPos" + e).css({
                            "transition-duration": l + "ms, 0ms, " + m + "ms",
                            "transition-delay": t + "ms, " + t + "ms, 0ms"
                        }),
                        c++
                    }
                    a()("#" + this.preFix + "coinCont .coinOverlay").css({
                        "transition-delay": e + "ms "
                    });
                    const p = .7 * e
                      , h = Math.max(p);
                    let d = .3 * e;
                    h <= 0 && (d = Math.max(d - p, 0)),
                    this.changeViewElem.css({
                        "transition-duration": d + "ms",
                        "transition-delay": h + "ms"
                    }),
                    this.changeViewSpotElem.css({
                        "transition-delay": h + "ms"
                    });
                    const u = .7 * e
                      , x = .3 * e
                      , T = Math.max(x, 0);
                    let S = u;
                    T <= 0 && (S = Math.max(S, 0));
                    const C = .7 * e
                      , k = .3 * e
                      , b = Math.max(k, 0);
                    let w = C;
                    b <= 0 && (w = Math.max(w, 0)),
                    this.grid.css({
                        "transition-duration": S + "ms, " + w + "ms, 0ms",
                        "transition-delay": T + "ms, " + b + "ms, 0ms"
                    }),
                    this.wheelGrid.css({
                        "transition-duration": S + "ms, " + w + "ms, 0ms ",
                        "transition-delay": T + "ms, " + b + "ms, 0ms "
                    })
                }
                m.Y.debug("Remove open 1"),
                this.coinElem.removeClass("tickOpen"),
                this._target.css("left", ""),
                this.changeViewElem.removeClass("tickOpen"),
                this.changeViewSpotElem.removeClass("tickOpen"),
                this.grid.removeClass("tickOpen"),
                this.wheelGrid.removeClass("tickOpen")
            }
            changeGridView(e) {
                e.hasClass("viewW") ? (this.posgame.gameGraphics.changeGridView(T.yR.VIEW_WHEELE),
                e.removeClass("viewW").addClass("viewA")) : (this.posgame.gameGraphics.changeGridView(T.yR.VIEW_A),
                e.removeClass("viewA").addClass("viewW"))
            }
            setUpClosedTicketLogic() {
                new r.Z(a()("#" + this.preFix + "tickOpenLiWarp")[0],{
                    autoHide: !1
                });
                const e = new r.Z(a()("#" + this.preFix + "tickClosLiWarp")[0],{
                    autoHide: !0,
                    clickOnTrack: !1
                });
                if (a()("#" + this.preFix + "tickClosLiWarp").on("wheel", (t => {
                    m.Y.debug("----------------\x3e Wheel event" + t.originalEvent.deltaY),
                    e.getScrollElement().scrollTop += Math.round(t.originalEvent.deltaY / 4),
                    t.preventDefault()
                }
                )),
                !o.O.isTouch) {
                    const t = a()("#" + this.preFix + "tickClosLiWarp")[0]
                      , s = new (c().Manager)(t);
                    o.O.noTouchHammerJsList.push(s),
                    s.add(new (c().Pan)({
                        direction: c().DIRECTION_VERTICAL
                    })),
                    s.on("panstart panup pandown", (t => {
                        m.Y.debug("Close List --------------------------\x3e delta x:" + t.deltaX),
                        m.Y.debug("Close List --------------------------\x3e delta y:" + t.deltaY),
                        "panstart" === t.type && (this.scrollLastY = 0),
                        e.getScrollElement().scrollTop += -1 * Math.round(t.deltaY - this.scrollLastY),
                        this.scrollLastY = t.deltaY
                    }
                    ))
                }
            }
            deleteLastClicked() {
                this.posgame.lockChangeTicket || (this.posgame.tempBets.tempBetList.length <= 0 && p._.instance.posTicketTurnover.checkCancleLastTicket(this.posgame.gameType),
                this.posgame.tempBets.clearLastTip(!0),
                this.gridLogic.checkSeriesGames(this.posgame.tempBets.tempBetList, this.posgame.getNextGameData()))
            }
            setQuotaView() {}
            updateQuotaView() {}
            offClickEvents() {
                this.gridLogic.offClickEvents()
            }
        }
        class O extends T.Wi {
            createBetsJetonsSet(e, t, s, i, a) {
                if (!this.gameLogic.lockChangeTicket) {
                    if (1 === e.length && s) {
                        let t = this.gameLogic.coinsValueList[this.gameLogic.posRoulette.currentSelectedJetonIndex];
                        const s = this.gameLogic.tempBets.getTempBetById(e[0].betId.toString());
                        null !== s && (t += s.stake);
                        const i = this.gameLogic.rouletteLogic.checkMinBet(e[0].betId, t);
                        if (i >= 0)
                            return m.Y.debug("MMMMMMMMMMMMMMMMMMMMMMMMMMMMM min bet"),
                            void this.gameLogic.gameGraphics.showMinBet(i).then((e => {
                                const t = this.gameLogic.rouletteLogic.getMinBetCoinIndex(e);
                                this.setCoinByIndexSelected(t),
                                this.gameLogic.gameGraphics.hideMessageDialog()
                            }
                            ))
                    }
                    this.gameLogic.tempBets.createBetsJetonsSet(e, this.gameLogic.getNextGameData(), s, i, a),
                    this.checkSeriesGames(this.gameLogic.tempBets.tempBetList, this.gameLogic.getNextGameData())
                }
            }
            setCoinIndexSelected(e, t) {
                this.setCoinIndexSelectedAtElement(e, a()(t).closest(".coinSing"))
            }
            coinClicked(e) {
                this.gameLogic.coinClicked(e)
            }
            updateSeriesJetonSet(e, t, s) {
                this.gameLogic.tempBets.updateSeriesGraphics(e, t)
            }
            clearSeriesTipsFromTempBetList(e, t) {
                this.gameLogic.lockChangeTicket || this.gameLogic.tempBets.clearSeriesTipsFromTempBetList(e, t)
            }
            moveBet(e, t) {
                if (this.gameLogic.lockChangeTicket)
                    return;
                const s = this.gameLogic.tempBets.getTempBetById(e);
                if (null !== s) {
                    const i = s.stake;
                    let a = s.stake;
                    const r = this.gameLogic.tempBets.getTempBetById(t);
                    null !== r && (a += r.stake);
                    const m = this.gameLogic.rouletteLogic.checkMinBet(parseInt(t, 10), a);
                    if (m > 0)
                        return void this.gameLogic.createPlayerMessage(n.l.instance.getTextCommon("minBetMsg").replace("__MAX__", S.Z.formatNumber(m / o.O.creditFactor, o.O.decimalPlaces)).replace("__CUR__", ""), !1);
                    const l = [{
                        betId: parseInt(t, 10),
                        valueFactor: 1
                    }];
                    this.createBetsJetonsSet(l, this.gameLogic.getNextGameData(), !1, "", i),
                    this.gameLogic.tempBets.deleteTempBet(e),
                    this.gameLogic.gameGraphics.updateClosedTempBetList(this.gameLogic.tempBets.tempBetList),
                    this.gameLogic.gameGraphics.updateOpendTempBetList(this.gameLogic.tempBets.tempBetList),
                    this.gameLogic.gameGraphics.updateTempBetListGraphic()
                }
            }
            deleteBet(e) {
                if (this.gameLogic.lockChangeTicket)
                    return;
                null !== this.gameLogic.tempBets.getTempBetById(e) && (this.gameLogic.tempBets.deleteTempBet(e),
                this.gameLogic.gameGraphics.updateClosedTempBetList(this.gameLogic.tempBets.tempBetList),
                this.gameLogic.gameGraphics.updateOpendTempBetList(this.gameLogic.tempBets.tempBetList),
                this.gameLogic.gameGraphics.updateTempBetListGraphic())
            }
        }
    }
    ,
    77684: e => {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMSAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjEgMjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC41LDBDMTAsMCw5LjcsMC40LDkuNywwLjhWNWMwLDAuNSwwLjQsMC44LDAuOCwwLjhzMC44LTAuNCwwLjgtMC44VjEuN2M0LjUsMC40LDgsNC4yLDgsOC44DQoJCQkJYzAsNC44LTQsOC44LTguOSw4LjhjLTQuOCwwLTguOC00LTguOC04LjhjMC0yLjQsMS00LjcsMi43LTYuM2MwLjMtMC4zLDAuNC0wLjgsMC0xLjJjLTAuMy0wLjMtMC44LTAuNC0xLjIsMA0KCQkJCUMxLjEsNC45LDAsNy42LDAsMTAuNUMwLDE2LjMsNC43LDIxLDEwLjUsMjFDMTYuMywyMSwyMSwxNi4zLDIxLDEwLjVDMjEsNC43LDE2LjMsMCwxMC41LDB6IE05LjMsMTEuNWMwLjEsMC4yLDAuMiwwLjMsMC40LDAuNA0KCQkJCWMwLjcsMC41LDEuNywwLjMsMi4yLTAuNGMwLjUtMC43LDAuMy0xLjctMC40LTIuMkw2LjMsNS42Yy0wLjItMC4yLTAuNC0wLjItMC42LDBDNS41LDUuNyw1LjQsNi4xLDUuNiw2LjNMOS4zLDExLjV6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
    }
}]);
