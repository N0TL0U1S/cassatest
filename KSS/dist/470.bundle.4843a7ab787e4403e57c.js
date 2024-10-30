"use strict";
(self.webpackChunkgamepool = self.webpackChunkgamepool || []).push([[470], {
    80713: (e, t, s) => {
        s.d(t, {
            $0: () => i,
            Po: () => l,
            XC: () => h,
            nT: () => c
        });
        var i, r = s(24091), n = s(23859), a = s(81026), o = s(49001), d = s(87488), u = s(66115);
        !function(e) {
            e.WIN_1 = "WIN_1",
            e.WIN_2 = "WIN_2",
            e.FIGHTER_1_ROUND_1 = "FIGHTER_1_ROUND_1",
            e.FIGHTER_2_ROUND_1 = "FIGHTER_2_ROUND_1",
            e.FIGHTER_X_ROUND_1 = "FIGHTER_X_ROUND_1",
            e.FIGHTER_1_ROUND_2 = "FIGHTER_1_ROUND_2",
            e.FIGHTER_2_ROUND_2 = "FIGHTER_2_ROUND_2",
            e.FIGHTER_X_ROUND_2 = "FIGHTER_X_ROUND_2",
            e.FIGHTER_1_ROUND_3 = "FIGHTER_1_ROUND_3",
            e.FIGHTER_2_ROUND_3 = "FIGHTER_2_ROUND_3",
            e.FIGHTER_X_ROUND_3 = "FIGHTER_X_ROUND_3"
        }(i || (i = {}));
        class h {
            static getBetByKey(e) {
                for (const t of this.betsData)
                    if (e === t.key)
                        return t;
                return null
            }
        }
        h.betsData = [{
            key: i.WIN_1,
            bet: "odd_0",
            winFin1: "1",
            winFin2: "-",
            winFin3: "-",
            winFin4: "-"
        }, {
            key: i.WIN_2,
            bet: "odd_1",
            winFin1: "2",
            winFin2: "-",
            winFin3: "-",
            winFin4: "-"
        }, {
            key: i.FIGHTER_1_ROUND_1,
            bet: "odd_2",
            winFin1: "-",
            winFin2: "1",
            winFin3: "-",
            winFin4: "-"
        }, {
            key: i.FIGHTER_2_ROUND_1,
            bet: "odd_3",
            winFin1: "-",
            winFin2: "2",
            winFin3: "-",
            winFin4: "-"
        }, {
            key: i.FIGHTER_X_ROUND_1,
            bet: "odd_4",
            winFin1: "-",
            winFin2: "3",
            winFin3: "-",
            winFin4: "-"
        }, {
            key: i.FIGHTER_1_ROUND_2,
            bet: "odd_5",
            winFin1: "-",
            winFin2: "-",
            winFin3: "1",
            winFin4: "-"
        }, {
            key: i.FIGHTER_2_ROUND_2,
            bet: "odd_6",
            winFin1: "-",
            winFin2: "-",
            winFin3: "2",
            winFin4: "-"
        }, {
            key: i.FIGHTER_X_ROUND_2,
            bet: "odd_7",
            winFin1: "-",
            winFin2: "-",
            winFin3: "3",
            winFin4: "-"
        }, {
            key: i.FIGHTER_1_ROUND_3,
            bet: "odd_8",
            winFin1: "-",
            winFin2: "-",
            winFin3: "-",
            winFin4: "1"
        }, {
            key: i.FIGHTER_2_ROUND_3,
            bet: "odd_9",
            winFin1: "-",
            winFin2: "-",
            winFin3: "-",
            winFin4: "2"
        }, {
            key: i.FIGHTER_X_ROUND_3,
            bet: "odd_10",
            winFin1: "-",
            winFin2: "-",
            winFin3: "-",
            winFin4: "3"
        }];
        class l {
            static getPrintBetString(e) {
                let t = "";
                const s = parseInt(e, 10);
                return t += s < 2 ? s + 1 : s < 5 ? d.l.instance.getPrintText("roundWgpShort") + "1-" + this.getKickboxWinString(s - 1) : s < 8 ? d.l.instance.getPrintText("roundWgpShort") + "2-" + this.getKickboxWinString(s - 4) : s < 11 ? d.l.instance.getPrintText("roundWgpShort") + "3-" + this.getKickboxWinString(s - 7) : 11 === s ? "1-1-1" : 12 === s ? "1-1-2" : 13 === s ? "1-1-X" : 14 === s ? "1-2-1" : 15 === s ? "1-2-2" : 16 === s ? "1-2-X" : 17 === s ? "1-X-1" : 18 === s ? "1-X-2" : 19 === s ? "1-X-X" : 20 === s ? "2-1-1" : 21 === s ? "2-1-2" : 22 === s ? "2-1-X" : 23 === s ? "2-2-1" : 24 === s ? "2-2-2" : 25 === s ? "2-2-X" : 26 === s ? "2-X-1" : 27 === s ? "2-X-2" : 28 === s ? "2-X-X" : 29 === s ? "X-1-1" : 30 === s ? "X-1-2" : 31 === s ? "X-1-X" : 32 === s ? "X-2-1" : 33 === s ? "X-2-2" : 34 === s ? "X-2-X" : 35 === s ? "X-X-1" : 36 === s ? "X-X-2" : s,
                t
            }
            static getKickboxWinString(e) {
                switch (e) {
                case 1:
                    return "1";
                case 2:
                    return "2";
                case 3:
                    return "X"
                }
                return ""
            }
            constructor(e) {
                this.betNumbersQuotaIdList = [],
                this.gameLogic = e,
                this.setUpBetNumbersToQuotaIdList()
            }
            initalGamesSet() {}
            raceStarted() {}
            updateGameResult() {}
            setUpBetNumbersToQuotaIdList() {
                this.betNumbersQuotaIdList = [];
                let e = 0;
                for (let t = 0; t < this.gameLogic.getNumberCompetitor(); t++) {
                    this.betNumbersQuotaIdList[t + 1] = t;
                    for (let s = 0; s < this.gameLogic.getNumberCompetitor(); s++)
                        s !== t && (this.betNumbersQuotaIdList[parseInt((t + 1).toString(10) + (s + 1).toString(10), 10)] = e + this.gameLogic.getNumberCompetitor(),
                        e++)
                }
            }
            getBetidByBetNumbers(e, t) {
                if (null === t)
                    return this.betNumbersQuotaIdList[e];
                {
                    const s = e.toString() + t.toString();
                    return this.betNumbersQuotaIdList[parseInt(s, 10)]
                }
            }
        }
        class c extends r.n {
            getWgpInfo() {
                return this.wgpInfo
            }
            constructor(e) {
                super(e)
            }
            setServerData(e) {
                const t = parseInt(e.id.replace(e.idSchedule, ""), 10);
                let s, i;
                n.O.hasJackpotBounus() ? null !== e.jackpotInfo ? (s = e.jackpotInfo.bonusValue,
                i = e.jackpotInfo.oldBonusValue,
                this.jackpotHistory = this.getHistoryDataFromResult(e.jackpotInfo.bonusHistory)) : (a.Y.error("Bonus Flag set but no bonus values given!!"),
                this.jackpotHistory = void 0) : this.jackpotHistory = void 0,
                this.wgpInfo = e.wgpInfo,
                this.roundInfo = {
                    fullGameId: e.id,
                    gameId: t,
                    jackpotValue: s,
                    oldJackpotValue: i,
                    roundBonusType: void 0,
                    videoStartDt: e.videoStartDt,
                    videoEndDt: e.videoEndDt,
                    videoStartUnix: o.Z.getSecondsSinceFromUTCDate(o.Z.getDatFromStandardString(e.videoStartDt)),
                    videoEndUnix: o.Z.getSecondsSinceFromUTCDate(o.Z.getDatFromStandardString(e.videoEndDt))
                },
                this.serverOdds = e.odds,
                this.setResultData(e)
            }
            setResultData(e) {
                let t;
                null === e.finish ? this.result = null : this.result = {
                    first: {
                        driverIndex: e.finish[1].competitorIndex - 1,
                        time: ""
                    },
                    second: {
                        driverIndex: e.finish[1].competitorIndex - 1,
                        time: ""
                    },
                    round1: {
                        driverIndex: e.finish[2].competitorIndex - 1,
                        time: ""
                    },
                    round2: {
                        driverIndex: e.finish[3].competitorIndex - 1,
                        time: ""
                    },
                    round3: {
                        driverIndex: e.finish[4].competitorIndex - 1,
                        time: ""
                    },
                    clockEndTime: 0,
                    bonus: e.bonus,
                    videoname: e.videoname,
                    finish1Time: 0
                },
                e.interval,
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === n.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
            convertFromServerOdds() {
                if (this.getGameType() !== u.O4.RTT.gamType) {
                    a.Y.debug("Server Odds:" + this.serverOdds),
                    this.odds = [];
                    for (let e = 0; e < 37; e++)
                        this.odds.push(this.serverOdds[e]);
                    a.Y.info("Odds Set           :" + this.odds)
                }
            }
        }
    }
    ,
    14636: (e, t, s) => {
        s.d(t, {
            G: () => o,
            p: () => a
        });
        var i = s(81026)
          , r = s(23859)
          , n = s(37891);
        class a extends n.r8 {
            constructor(e) {
                super(e)
            }
        }
        class o extends n.nK {
            constructor(e) {
                super(e)
            }
            setResultData(e) {
                if (null === e.finish)
                    this.result = null;
                else {
                    let t = ""
                      , s = ""
                      , i = "";
                    e.finish[1].time && (t = e.finish[1].time.toString()),
                    e.finish[2].time && (s = e.finish[2].time.toString()),
                    e.finish[3].time && (i = e.finish[3].time.toString()),
                    this.result = {
                        first: {
                            driverIndex: e.finish[1].competitorIndex - 1,
                            time: t
                        },
                        second: {
                            driverIndex: e.finish[2].competitorIndex - 1,
                            time: s
                        },
                        third: {
                            driverIndex: e.finish[3].competitorIndex - 1,
                            time: i
                        },
                        clockEndTime: e.finish[3].time,
                        bonus: e.bonus,
                        videoname: e.videoname,
                        finish1Time: e.finish[1].time
                    }
                }
                let t;
                e.interval,
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === r.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
            convertFromServerOdds() {
                i.Y.debug("Server Odds:" + this.serverOdds),
                this.odds = [];
                for (let e = 0; e < this.serverOdds.length; e++)
                    this.odds.push(this.serverOdds[e]);
                i.Y.info("Odds Set           :" + this.odds)
            }
        }
    }
    ,
    37891: (e, t, s) => {
        s.d(t, {
            r8: () => l,
            nK: () => m,
            uH: () => g,
            Nb: () => c
        });
        var i = s(24091)
          , r = s(49001)
          , n = s(81026)
          , a = s(23859);
        const o = [{
            color: 4294935603,
            firstName: "Johnny",
            lastName: "Drift",
            driverInfos: [{
                key: "NATIONALITY:",
                value: "AUSTRIAN"
            }, {
                key: "HEIGHT:",
                value: "179CM"
            }, {
                key: "WEIGHT:",
                value: "73KG"
            }, {
                key: "NUMBER OF WINS:",
                value: "2"
            }, {
                key: "BEST LAP:",
                value: "00:45:02"
            }],
            driverBarText: "DRIVER NO. 3 <b>JOHNNY DRIFT</b> CAME 2ND IN THE LAST 3/10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            color: 4293115447,
            firstName: "Frank",
            lastName: "Lines",
            driverInfos: [{
                key: "NATIONALITY:",
                value: "GERMAN"
            }, {
                key: "HEIGHT:",
                value: "182CM"
            }, {
                key: "WEIGHT:",
                value: "75KG"
            }, {
                key: "NUMBER OF WINS:",
                value: "4"
            }, {
                key: "BEST LAP:",
                value: "00:45:27"
            }],
            driverBarText: "DRIVER NO. 2 <b>FRANK LINES</b> CAME 2ND IN THE LAST 3/10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            color: 4294967295,
            firstName: "Chris",
            lastName: "Drebin",
            driverInfos: [{
                key: "NATIONALITY:",
                value: "AUSTRIAN"
            }, {
                key: "HEIGHT:",
                value: "179CM"
            }, {
                key: "WEIGHT:",
                value: "73KG"
            }, {
                key: "NUMBER OF WINS:",
                value: "2"
            }, {
                key: "BEST LAP:",
                value: "00:45:02"
            }],
            driverBarText: "DRIVER NO. 3 <b>CHRIS DREBIN</b> CAME 2ND IN THE LAST 3/10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            color: 4284654796,
            firstName: "Mike",
            lastName: "Sprinter",
            driverInfos: [{
                key: "NATIONALITY:",
                value: "GERMAN"
            }, {
                key: "HEIGHT:",
                value: "182CM"
            }, {
                key: "WEIGHT:",
                value: "75KG"
            }, {
                key: "NUMBER OF WINS:",
                value: "4"
            }, {
                key: "BEST LAP:",
                value: "00:45:27"
            }],
            driverBarText: "DRIVER NO. 3 <b>MIKE SPRINTER</b> CAME 2ND IN THE LAST 3/10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            color: 4291173889,
            firstName: "Steve",
            lastName: "Powers",
            driverInfos: [{
                key: "NATIONALITY:",
                value: "AUSTRIAN"
            }, {
                key: "HEIGHT:",
                value: "179CM"
            }, {
                key: "WEIGHT:",
                value: "73KG"
            }, {
                key: "NUMBER OF WINS:",
                value: "2"
            }, {
                key: "BEST LAP:",
                value: "00:45:02"
            }],
            driverBarText: "DRIVER NO. 3 <b>STEVE POWERS</b> CAME 2ND IN THE LAST 3/10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }]
          , d = [{
            firstName: "James",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4291168059,
            driverBarText: "DOG NO.1 JAMES WON 5 IN THE LAST 20 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Archie",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "65lb"
            }, {
                key: "RUNS:",
                value: "018"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "15,21"
            }],
            color: 4280110547,
            driverBarText: "DOG NO.2 ARCHIE WON 3 IN THE LAST 12 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Apollo",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "020"
            }, {
                key: "WINS:",
                value: "008"
            }, {
                key: "STRIKE RATE:",
                value: "18,41"
            }],
            color: 4294899190,
            driverBarText: "DOG NO.3 APOLLO WON 1 IN THE LAST 7 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Gideon",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "009"
            }, {
                key: "WINS:",
                value: "005"
            }, {
                key: "STRIKE RATE:",
                value: "18,01"
            }],
            color: 4278715651,
            driverBarText: "DOG NO.4 GIDEO WON 6 IN THE LAST 13 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Jux",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4294024225,
            driverBarText: "DOG NO.5 JUX VON 2 IN THE LAST 10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Mickey",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "003"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "10,21"
            }],
            color: 4293519077,
            driverBarText: "DOG NO.6 MICKEY WON 2 IN THE LAST 5 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }]
          , u = [{
            firstName: "James",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4291168059,
            driverBarText: "DOG NO.1 JAMES WON 5 IN THE LAST 20 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Archie",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "65lb"
            }, {
                key: "RUNS:",
                value: "018"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "15,21"
            }],
            color: 4280110547,
            driverBarText: "DOG NO.2 ARCHIE WON 3 IN THE LAST 12 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Apollo",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "020"
            }, {
                key: "WINS:",
                value: "008"
            }, {
                key: "STRIKE RATE:",
                value: "18,41"
            }],
            color: 4294899190,
            driverBarText: "DOG NO.3 APOLLO WON 1 IN THE LAST 7 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Gideon",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "009"
            }, {
                key: "WINS:",
                value: "005"
            }, {
                key: "STRIKE RATE:",
                value: "18,01"
            }],
            color: 4278715651,
            driverBarText: "DOG NO.4 GIDEO WON 6 IN THE LAST 13 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Jux",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4294024225,
            driverBarText: "DOG NO.5 JUX VON 2 IN THE LAST 10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Mickey",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "003"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "10,21"
            }],
            color: 4293519077,
            driverBarText: "DOG NO.6 MICKEY WON 2 IN THE LAST 5 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Rudy",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "69lb"
            }, {
                key: "RUNS:",
                value: "012"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "5,12"
            }],
            color: 4282298703,
            driverBarText: "DOG NO.7 RUDI WON 5 IN THE LAST 20 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Maximus",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "010"
            }, {
                key: "WINS:",
                value: "008"
            }, {
                key: "STRIKE RATE:",
                value: "15,05"
            }],
            color: 4294492501,
            driverBarText: "DOG NO.8 MAXIMUS VON 6 IN THE LAST 12 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }]
          , h = [{
            firstName: "James",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4291168059,
            driverBarText: "DOG NO.1 JAMES WON 5 IN THE LAST 20 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Archie",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "65lb"
            }, {
                key: "RUNS:",
                value: "018"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "15,21"
            }],
            color: 4280110547,
            driverBarText: "DOG NO.2 ARCHIE WON 3 IN THE LAST 12 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Apollo",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "020"
            }, {
                key: "WINS:",
                value: "008"
            }, {
                key: "STRIKE RATE:",
                value: "18,41"
            }],
            color: 4294899190,
            driverBarText: "DOG NO.3 APOLLO WON 1 IN THE LAST 7 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Gideon",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "009"
            }, {
                key: "WINS:",
                value: "005"
            }, {
                key: "STRIKE RATE:",
                value: "18,01"
            }],
            color: 4278715651,
            driverBarText: "DOG NO.4 GIDEO WON 6 IN THE LAST 13 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Jux",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "70lb"
            }, {
                key: "RUNS:",
                value: "023"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "17,18"
            }],
            color: 4294024225,
            driverBarText: "DOG NO.5 JUX VON 2 IN THE LAST 10 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Mickey",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "68lb"
            }, {
                key: "RUNS:",
                value: "003"
            }, {
                key: "WINS:",
                value: "002"
            }, {
                key: "STRIKE RATE:",
                value: "10,21"
            }],
            color: 4293519077,
            driverBarText: "DOG NO.6 MICKEY WON 2 IN THE LAST 5 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }, {
            firstName: "Rudy",
            lastName: "",
            driverInfos: [{
                key: "WEIGHT:",
                value: "69lb"
            }, {
                key: "RUNS:",
                value: "012"
            }, {
                key: "WINS:",
                value: "006"
            }, {
                key: "STRIKE RATE:",
                value: "5,12"
            }],
            color: 4282298703,
            driverBarText: "DOG NO.7 RUDI WON 5 IN THE LAST 20 RACES",
            last5: [0, 0, 0, 0, 0],
            nbr1: 0,
            nbr2: 0,
            nbr3: 0,
            racesForStatistic: 0,
            trend: 1
        }];
        class l {
            constructor(e) {
                this.betNumbersQuotaIdList = [],
                this.gameLogic = e,
                this.setUpBetNumbersToQuotaIdList()
            }
            initalGamesSet() {}
            raceStarted() {}
            updateGameResult() {}
            setUpBetNumbersToQuotaIdList() {
                this.betNumbersQuotaIdList = [];
                let e = 0;
                for (let t = 0; t < this.gameLogic.getNumberCompetitor(); t++) {
                    this.betNumbersQuotaIdList[t + 1] = t;
                    for (let s = 0; s < this.gameLogic.getNumberCompetitor(); s++)
                        s !== t && (this.betNumbersQuotaIdList[parseInt((t + 1).toString(10) + (s + 1).toString(10), 10)] = e + this.gameLogic.getNumberCompetitor(),
                        e++)
                }
            }
            getBetidByBetNumbers(e, t) {
                if (null === t)
                    return this.betNumbersQuotaIdList[e];
                {
                    const s = e.toString() + t.toString();
                    return this.betNumbersQuotaIdList[parseInt(s, 10)]
                }
            }
        }
        class c extends i.q {
            constructor(e) {
                super(e)
            }
            setServerData(e) {
                const t = parseInt(e.id.replace(e.idSchedule, ""), 10);
                let s, i;
                a.O.hasJackpotBounus() ? null !== e.jackpotInfo ? (s = e.jackpotInfo.bonusValue,
                i = e.jackpotInfo.oldBonusValue,
                this.jackpotHistory = this.getHistoryDataFromResult(e.jackpotInfo.bonusHistory)) : (n.Y.error("Bonus Flag set but no bonus values given!!"),
                this.jackpotHistory = void 0) : this.jackpotHistory = void 0,
                this.roundInfo = {
                    fullGameId: e.id,
                    gameId: t,
                    jackpotValue: s,
                    oldJackpotValue: i,
                    roundBonusType: void 0,
                    videoStartDt: e.videoStartDt,
                    videoEndDt: e.videoEndDt,
                    videoStartUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoStartDt)),
                    videoEndUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoEndDt))
                },
                this.drivers = [];
                for (const e of o)
                    this.drivers.push(Object.assign({}, e));
                this.setStaticDataForCompetitors(e),
                this.serverOdds = e.odds,
                this.setResultData(e)
            }
            setResultData(e) {
                if (null === e.finish)
                    this.result = null;
                else {
                    let t = ""
                      , s = "";
                    e.finish[1].time && (t = e.finish[1].time.toString()),
                    e.finish[2].time && (s = e.finish[2].time.toString()),
                    this.result = {
                        first: {
                            driverIndex: e.finish[1].competitorIndex - 1,
                            time: t
                        },
                        second: {
                            driverIndex: e.finish[2].competitorIndex - 1,
                            time: s
                        },
                        clockEndTime: e.finish[2].time,
                        bonus: e.bonus,
                        videoname: e.videoname,
                        finish1Time: e.finish[1].time
                    }
                }
                let t;
                e.interval,
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === a.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
        }
        class m extends i.q {
            constructor(e) {
                super(e)
            }
            setServerData(e) {
                const t = parseInt(e.id.replace(e.idSchedule, ""), 10);
                let s, i;
                a.O.hasJackpotBounus() ? null !== e.jackpotInfo ? (s = e.jackpotInfo.bonusValue,
                i = e.jackpotInfo.oldBonusValue,
                this.jackpotHistory = this.getHistoryDataFromResult(e.jackpotInfo.bonusHistory)) : (n.Y.error("Bonus Flag set but no bonus values given!!"),
                this.jackpotHistory = void 0) : this.jackpotHistory = void 0,
                this.roundInfo = {
                    fullGameId: e.id,
                    gameId: t,
                    jackpotValue: s,
                    oldJackpotValue: i,
                    roundBonusType: void 0,
                    videoStartDt: e.videoStartDt,
                    videoEndDt: e.videoEndDt,
                    videoStartUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoStartDt)),
                    videoEndUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoEndDt))
                },
                this.drivers = [];
                let o = 0;
                switch (this.getGameType()) {
                case "dog6":
                    for (const e of d)
                        if (this.drivers.push(Object.assign({}, e)),
                        o++,
                        o >= this.game.getNumberCompetitor())
                            break;
                    break;
                case "dog63":
                    for (let t = 0; t < d.length; t++) {
                        const s = d[t]
                          , i = Object.assign({}, s);
                        if (i.firstName = e.competitors[t + 1].name,
                        this.drivers.push(i),
                        o++,
                        o >= this.game.getNumberCompetitor())
                            break
                    }
                    break;
                case "dog8":
                    for (const e of u)
                        if (this.drivers.push(Object.assign({}, e)),
                        o++,
                        o >= this.game.getNumberCompetitor())
                            break;
                    break;
                default:
                    n.Y.error("Illegal Dog game Type:" + this.getGameType())
                }
                this.setStaticDataForCompetitors(e),
                this.serverOdds = e.odds,
                this.setResultData(e)
            }
            setResultData(e) {
                if (null === e.finish)
                    this.result = null;
                else {
                    let t = ""
                      , s = "";
                    e.finish[1].time && (t = e.finish[1].time.toString()),
                    e.finish[2].time && (s = e.finish[2].time.toString()),
                    this.result = {
                        first: {
                            driverIndex: e.finish[1].competitorIndex - 1,
                            time: t
                        },
                        second: {
                            driverIndex: e.finish[2].competitorIndex - 1,
                            time: s
                        },
                        clockEndTime: e.finish[2].time,
                        bonus: e.bonus,
                        videoname: e.videoname,
                        finish1Time: e.finish[1].time
                    }
                }
                let t;
                e.interval,
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === a.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
        }
        class g extends i.q {
            constructor(e) {
                super(e)
            }
            setServerData(e) {
                const t = parseInt(e.id.replace(e.idSchedule, ""), 10);
                let s, i;
                a.O.hasJackpotBounus() ? null !== e.jackpotInfo ? (s = e.jackpotInfo.bonusValue,
                i = e.jackpotInfo.oldBonusValue,
                this.jackpotHistory = this.getHistoryDataFromResult(e.jackpotInfo.bonusHistory)) : (n.Y.error("Bonus Flag set but no bonus values given!!"),
                this.jackpotHistory = void 0) : this.jackpotHistory = void 0,
                this.roundInfo = {
                    fullGameId: e.id,
                    gameId: t,
                    jackpotValue: s,
                    oldJackpotValue: i,
                    roundBonusType: void 0,
                    videoStartDt: e.videoStartDt,
                    videoEndDt: e.videoEndDt,
                    videoStartUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoStartDt)),
                    videoEndUnix: r.Z.getSecondsSinceFromUTCDate(r.Z.getDatFromStandardString(e.videoEndDt))
                },
                this.drivers = [];
                let o = 0;
                switch (this.getGameType()) {
                case "horse":
                case "horsec":
                case "sulky":
                    for (const e of h)
                        if (this.drivers.push(Object.assign({}, e)),
                        o++,
                        o >= this.game.getNumberCompetitor())
                            break;
                    break;
                default:
                    n.Y.error("Illegal Horse game Type:" + this.getGameType())
                }
                this.setStaticDataForCompetitors(e),
                this.serverOdds = e.odds,
                this.setResultData(e)
            }
            setResultData(e) {
                if (null === e.finish)
                    this.result = null;
                else {
                    let t = ""
                      , s = "";
                    e.finish[1].time && (t = e.finish[1].time.toString()),
                    e.finish[2].time && (s = e.finish[2].time.toString()),
                    this.result = {
                        first: {
                            driverIndex: e.finish[1].competitorIndex - 1,
                            time: t
                        },
                        second: {
                            driverIndex: e.finish[2].competitorIndex - 1,
                            time: s
                        },
                        clockEndTime: e.finish[2].time,
                        bonus: e.bonus,
                        videoname: e.videoname,
                        finish1Time: e.finish[1].time
                    }
                }
                let t;
                e.interval,
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === a.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
        }
    }
    ,
    16765: (e, t, s) => {
        s.d(t, {
            d: () => G
        });
        var i = s(81271)
          , r = s.n(i)
          , n = s(85770)
          , a = s(66115)
          , o = s(30703)
          , d = s(81026)
          , u = s(39108)
          , h = s(49001)
          , l = s(72213)
          , c = s(66165)
          , m = s(47442)
          , g = s(93468)
          , v = s(23859)
          , I = s(87488);
        class T extends c._ {
            constructor(e, t, s, i, r) {
                super(e, t, s, i, r),
                this.testCountSync = 0
            }
            tick() {
                clearTimeout(this.logicTickTimeout),
                this.gameLoopSec += 1,
                this.videoStartSec += 1,
                this.serverTimeSecSince += 1e3,
                this.lastTimeSetTimestamp = Date.now(),
                d.Y.debug("Game loop " + this.gameLogic.gameType + " Tick:" + this.gameLoopSec + "   video Sec:" + this.videoStartSec + "   Last Tick Game Loop Sec:" + this.lastTickGameLoopSec),
                this.gameLogic.graphicTick(),
                v.O.tabActive ? this.logicTickTimeout = setTimeout(( () => {
                    this.logicTick()
                }
                ), 1) : (d.Y.debug("Tick immediately"),
                this.logicTick())
            }
            logicTick() {
                if (this.gameLogic.inRaceBreak || (this.gameLoopSec >= this.gameLoopLength ? (d.Y.info("Gameloop Reset:" + this.gameLoopSec + "   video Sec:" + this.videoStartSec),
                this.gameLoopSec = 0,
                this.gameLogic.raceStarted()) : this.lastTickGameLoopSec > this.gameLoopSec && this.lastTickGameLoopSec > this.gameLogic.gameLength - 20 && (d.Y.info("Start Race because race change while synch:" + this.gameLoopSec + "   video Sec:" + this.videoStartSec),
                this.gameLogic.raceStarted()),
                this.videoStartSec >= this.gameLoopLength && (this.videoStartSec = 0,
                d.Y.debug("Set videoStartSec to 0, gameType:" + this.gameLogic.gameType),
                this.gameLogic.videoLoopStarted())),
                this.lastTickGameLoopSec = this.gameLoopSec,
                this.gameLogic.tick(),
                this.lastServerTimeRequestTime > this.gameLoopSec && (this.lastServerTimeRequestTime -= this.gameLoopLength,
                this.lastServerTimeRequestTime > 0 && (this.lastServerTimeRequestTime = 2)),
                this.lastServerTimeRequestTime <= this.gameLoopSec - m.Z.gameSettings.timerSyncInterval)
                    if (c._.pendingTimeRequest)
                        d.Y.debug("Pending time request, sync at next tick");
                    else {
                        this.lastServerTimeRequestTime = this.gameLoopSec,
                        0 === Math.abs(this.gameLoopSec % 10) ? (d.Y.debug("Corrected lastServerRequestTime" + this.lastServerTimeRequestTime),
                        this.lastServerTimeRequestTime += 1) : Math.abs(this.gameLoopSec % 10) >= 9 && (d.Y.debug("Corrected lastServerRequestTime" + this.lastServerTimeRequestTime),
                        this.lastServerTimeRequestTime -= 2);
                        try {
                            this.synchronizeGameLoop(!1)
                        } catch (e) {}
                    }
                if (c._.lastSuccessSyncTime > 0 && c._.lastSuccessSyncTime + m.Z.gameSettings.maxTimeNoServerSync < this.lastTimeSetTimestamp) {
                    const e = g.T$.TO_LONG_NO_TIME_SYNC;
                    e.message = I.l.instance.getTextCommon("error_no_sync"),
                    n.q.instance.normalErrorHandler(e, !0, ( () => {
                        v.O.tryRestart(!1, !0)
                    }
                    ))
                }
            }
        }
        var S = s(85765)
          , O = s(37891)
          , f = s(80713)
          , p = s(14636)
          , b = s(54311)
          , k = s(3328)
          , R = function(e, t, s, i) {
            return new (s || (s = Promise))((function(r, n) {
                function a(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        n(e)
                    }
                }
                function o(e) {
                    try {
                        d(i.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof s ? t : new s((function(e) {
                        e(t)
                    }
                    ))).then(a, o)
                }
                d((i = i.apply(e, t || [])).next())
            }
            ))
        };
        class G extends l.h {
            static createGameModels(e, t) {
                let s = new O.Nb(t);
                switch (e) {
                case a.O4.KART.gamType:
                    s = new O.Nb(t);
                    break;
                case a.O4.DOG6.gamType:
                    s = new O.nK(t);
                    break;
                case a.O4.DOG63.gamType:
                    s = new p.G(t);
                    break;
                case a.O4.DOG8.gamType:
                    s = new O.nK(t);
                    break;
                case a.O4.RTT.gamType:
                    s = new b.S(t);
                    break;
                case a.O4.HORSE.gamType:
                case a.O4.HORSE_CLASSIC.gamType:
                    s = new O.uH(t);
                    break;
                case a.O4.KICKBOX.gamType:
                    s = new f.nT(t);
                    break;
                case a.O4.TROT.gamType:
                    s = new O.uH(t)
                }
                return s
            }
            get withRunnersLogic() {
                return this._withRunnersLogic
            }
            set withRunnersLogic(e) {
                this._withRunnersLogic = e
            }
            get rouletteLogic() {
                return this._rouletteLogic
            }
            set rouletteLogic(e) {
                this._rouletteLogic = e
            }
            get kickboxLogic() {
                return this._kickboxLogic
            }
            set kickboxLogic(e) {
                this._kickboxLogic = e
            }
            constructor(e, t, s, i, r, n, o, d, u, h, l, c) {
                super(e, t, s, i, r, n, d, u, h, l, c),
                this.savedGameResult = null,
                this._withRunnersLogic = null,
                this._rouletteLogic = null,
                this._kickboxLogic = null,
                this.lastActiveResultRequestTime = 0,
                o ? e === a.O4.DOG63.gamType ? this.withRunnersLogic = new p.p(this) : this.withRunnersLogic = new O.r8(this) : e === a.O4.RTT.gamType ? this.rouletteLogic = new k.V(this) : e === a.O4.KICKBOX.gamType && (this.kickboxLogic = new f.Po(this))
            }
            initGame(e) {
                let t = 169e3;
                if ("dog" === this.eventType)
                    switch (this.gameLength) {
                    case 120:
                        t = 57200;
                        break;
                    case 180:
                        t = 117200;
                        break;
                    case 240:
                        t = 177200;
                        break;
                    case 300:
                        t = 192200;
                        break;
                    default:
                        return
                    }
                else if ("dog8" === this.eventType)
                    switch (this.gameLength) {
                    case 120:
                        t = 57200;
                        break;
                    case 180:
                        t = 117200;
                        break;
                    case 240:
                        t = 177200;
                        break;
                    case 300:
                        t = 192371;
                        break;
                    default:
                        return
                    }
                else if ("kart" === this.eventType)
                    switch (this.gameLength) {
                    case 120:
                        t = 49100;
                        break;
                    case 180:
                        t = 109100;
                        break;
                    case 240:
                        t = 169100;
                        break;
                    case 300:
                        t = 184040;
                        break;
                    default:
                        return
                    }
                const s = new T(this,m.Z.gameSettings.timerSyncTimeout,m.Z.gameSettings.timerSyncTimeoutAtSetup,this.gameLength,t);
                if (this.setGameTimer(s),
                this.gamesList.length <= 0) {
                    const e = n.D.NO_GAMES_IN_LIST;
                    throw e.message = I.l.instance.getTextCommon("error_no_games").replace("___GAME___", I.l.instance.getPrintTextCommon("gna_" + this.gameType)).replace("___BETOFF___", this.betofferId.toString()),
                    n.q.instance.normalErrorHandler(e, !0),
                    new Error(e.code.toString())
                }
                this.initalGamesSet(this.gamesList, S.i.initNumberFuture);
                const i = this.getSaveGameResult();
                null !== i && (d.Y.info("Result was read before Init --\x3e set in Games list"),
                this.updateGameResult(i.id, i, !1),
                this.resetSavedGameResult()),
                this.nextVideoStarted = !1
            }
            initGraphicSetUp() {}
            startGame() {
                return R(this, void 0, void 0, (function*() {
                    return d.Y.info("================== Starting Game:" + this.gameType),
                    new Promise(( (e, t) => {
                        this.gameTimer.synchronizeGameLoop(!0).then(( () => {
                            d.Y.debug("-------------\x3e after Sync Game Call"),
                            this.gameTimer.getGameLoopSec() > m.Z.gameSettingsPos.roundRquestSecond ? this.roundRequestDone = !0 : this.roundRequestDone = !1,
                            this.gameTimer.getGameLoopSec() > this.showWinTime && (this.winShownGameId = this.getCurrentGameData().roundInfo.fullGameId),
                            (this.gameTimer.nextGameCausesRaceBrake && this.gameTimer.getGameLoopSec() > this.showWinTime || this.getCurrentGameData().isDummyGame && this.gameTimer.getGameLoopSec() <= this.showWinTime || this.gameTimer.currentCausesRaceBrake && this.gameTimer.getGameLoopSec() <= this.showWinTime) && this.onRaceBreak(),
                            e()
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            stopGame() {}
            updateLanguageFields() {}
            updateCurGameIndex() {
                let e = !1;
                for (let t = 0; t < this.gamesList.length; t++)
                    if (this.gamesList[t].roundInfo.fullGameId === this.curGameId) {
                        this.indexCurGame = t,
                        e = !0;
                        break
                    }
                if (!e) {
                    const e = n.D.GAME_NOT_IN_LIST;
                    e.message = "Current game id not in list:" + this.curGameId,
                    n.q.instance.normalErrorHandler(e, !1)
                }
            }
            initalGamesSet(e, t) {
                this.gamesList = e,
                this.indexCurGame = t,
                this.indexCurGame >= this.gamesList.length && (this.indexCurGame = this.gamesList.length - 1),
                this.updateCurrentGameId(),
                null !== this.withRunnersLogic ? this.withRunnersLogic.initalGamesSet() : null !== this.rouletteLogic ? this.rouletteLogic.initalGamesSet() : null !== this.kickboxLogic && this.kickboxLogic.initalGamesSet(),
                d.Y.info("Init Games"),
                this.logGameIds()
            }
            setUpWinIsShown() {
                for (let e = 0; e < this.gamesList.length; e++)
                    e > this.indexCurGame && (d.Y.debug("Win is shown, gameType:" + this.gameType + " ID:" + this.gamesList[e].roundInfo.gameId),
                    this.gamesList[e].winIsShown = !0)
            }
            addNewGameData(e) {
                if (e.length > 0) {
                    const t = this.gamesList[0].roundInfo.fullGameId
                      , s = [];
                    let i = !1;
                    for (const r of e) {
                        if (i)
                            s.unshift(r);
                        else if (!0 === v.O.getInitResult().setting.enableBonusTicker)
                            for (const e of this.gamesList)
                                e.roundInfo.fullGameId === r.roundInfo.fullGameId && (e.roundInfo.jackpotValue = r.roundInfo.jackpotValue,
                                e.roundInfo.oldJackpotValue = r.roundInfo.oldJackpotValue,
                                e.jackpotHistory = r.jackpotHistory,
                                d.Y.debug("Updated jackpot Values for roundID:" + e.roundInfo.fullGameId + " old Jackpot Value:" + e.roundInfo.oldJackpotValue + " jackpot Value:" + e.roundInfo.jackpotValue));
                        r.roundInfo.fullGameId === t && (i = !0)
                    }
                    if (!i) {
                        d.Y.debug("add all games");
                        const t = e[e.length - 1];
                        let i = !1;
                        for (const e of this.gamesList)
                            if (e.roundInfo.fullGameId === t.roundInfo.fullGameId) {
                                i = !0;
                                break
                            }
                        if (i)
                            d.Y.warn("Allready in List, do not add");
                        else
                            for (let t = e.length - 1; t >= 0; t--)
                                s.push(e[t])
                    }
                    this.gamesList = s.concat(this.gamesList),
                    this.updateCurGameIndex()
                }
                d.Y.info("Added new Games"),
                this.logGameIds()
            }
            addOldGameData(e) {
                const t = [];
                if (e.length > 0) {
                    const s = this.gamesList[this.gamesList.length - 1].roundInfo.fullGameId;
                    let i = !1;
                    for (let r = e.length - 1; r >= 0; r--) {
                        const n = e[r];
                        i && t.push(n),
                        n.roundInfo.fullGameId === s && (i = !0)
                    }
                    this.gamesList = this.gamesList.concat(t),
                    this.updateCurGameIndex(),
                    d.Y.info("Added old Games"),
                    this.logGameIds()
                }
                return t
            }
            raceStarted() {
                if (this.indexCurGame < 1) {
                    const e = n.D.GAME_NOT_LOADED;
                    e.message = "Not enough future games are loaded,  indexCurGame:" + this.indexCurGame,
                    n.q.instance.normalErrorHandler(e, !1)
                }
                clearTimeout(this.retryTimout),
                this.roundRequestDone = !1,
                this.raceBreakCheckDone = !1,
                this.receivedResultCheck = !1,
                this.indexCurGame--,
                this.updateCurrentGameId(),
                this.gamesList.length >= l.h.GameListMaxLength && this.gamesList.pop(),
                null !== this.withRunnersLogic ? this.withRunnersLogic.raceStarted() : null !== this.rouletteLogic ? this.rouletteLogic.raceStarted() : null !== this.kickboxLogic && this.kickboxLogic.raceStarted(),
                v.O.getHasExternalTickets() && v.O.sendOnRemoveOldExternalTickets(this.gameType, this.getServerTimeSecSince(), this.gameLength),
                d.Y.info("Game Modlel round switch"),
                this.logGameIds()
            }
            videoLoopStarted() {}
            updateGameResult(e, t, s) {
                if (d.Y.debug("update Game Result"),
                this.gamesList.length <= 0)
                    return d.Y.info("Result was send before Init --\x3e save the result"),
                    this.savedGameResult = {
                        id: e,
                        finish: t.finish,
                        interval: t.interval,
                        bonus: t.bonus,
                        videoname: t.videoname,
                        jackpot: t.jackpot
                    },
                    d.Y.info("saved result:" + JSON.stringify(this.savedGameResult)),
                    null;
                const i = this.getGameWithId(e);
                return i.setResultData(t),
                d.Y.info("updated Result for gameId:" + e + " Result:" + JSON.stringify(t)),
                null !== this.withRunnersLogic ? this.withRunnersLogic.updateGameResult() : null !== this.rouletteLogic ? this.rouletteLogic.updateGameResult() : null !== this.kickboxLogic && this.kickboxLogic.updateGameResult(),
                i.calculateTicketWin(),
                this.sessionResults && this.sessionResults.addSessionResult(e, i),
                i
            }
            updateWinValue(e) {
                d.Y.info("updateWinValue Method not implemented.")
            }
            stopGameLoop() {
                clearTimeout(this.retryTimout),
                this.gameTimer.stopGameLoop()
            }
            graphicTick() {
                r()("#" + this.preFix + "servtime").html(h.Z.formatTimeSecondsScince(this.gameTimer.getServerTimeSecSince()));
                const e = (this.gameLength - this.gameTimer.getGameLoopSec()).toString().padStart(2, "0");
                r()("#" + this.preFix + "countDownTime").html(e),
                this.inRaceBreak ? r()("#" + this.preFix + "switchToCountTime").html("") : r()("#" + this.preFix + "switchToCountTime").html(e),
                v.O.getHasExternalTickets() && (v.O.sendOnExternalTickerUpdates(this.gameTimer.getServerTimeSecSince()),
                r()("#extTiViewServtime").html(h.Z.formatTimeSecondsScince(this.gameTimer.getServerTimeSecSince())))
            }
            tick() {
                const e = this.getCurrentGameData();
                if (this.checkShowWin(e),
                this.checkShowRaceBreak(),
                this.inRaceBreak) {
                    if (this.checkNextWithinIntroTime(this.gameTimer.getServerTimeSecSince()))
                        this.offRaceBreak();
                    else if (this.gameTimer.getGameLoopSec() % m.Z.gameSettings.raceBreakReadGameRoundInterval == 0) {
                        ( () => R(this, void 0, void 0, (function*() {
                            const e = new u.XW(null,this.betofferId,0,this.getIndexCurGame() + this.readInterval);
                            o.u.instance.sendGameRequest(e).then((e => {
                                this.countInitInterval = 1;
                                const t = [];
                                for (const s of e.gamepool) {
                                    if (s.idBetoffer !== this.betofferId)
                                        continue;
                                    let e = new O.Nb(this);
                                    if (e = G.createGameModels(this.gameType, this),
                                    null === e)
                                        throw new Error("Invalied Game Type:" + this.gameType);
                                    e.setServerData(s),
                                    e.convertFromServerOdds(),
                                    t.push(e)
                                }
                                this.addNewGameData(t)
                            }
                            )).catch((e => {
                                d.Y.debug("Retry Round Request"),
                                this.retryTimout = setTimeout(( () => {
                                    this.roundRequestDone = !1
                                }
                                ), 5e3)
                            }
                            ))
                        }
                        )))()
                    }
                } else {
                    if (this.gameTimer.getGameLoopSec() > m.Z.gameSettingsPos.roundRquestSecond && !this.roundRequestDone && null !== e.result || !this.roundRequestDone && this.gameTimer.getGameLoopSec() >= this.gameLength - 7)
                        if (clearTimeout(this.retryTimout),
                        this.roundRequestDone = !0,
                        this.countInitInterval % this.readInterval == 0) {
                            ( () => R(this, void 0, void 0, (function*() {
                                const e = new u.XW(null,this.betofferId,0,this.getIndexCurGame() + this.readInterval);
                                o.u.instance.sendGameRequest(e).then((e => {
                                    this.countInitInterval = 1;
                                    const t = [];
                                    for (const s of e.gamepool) {
                                        if (s.idBetoffer !== this.betofferId)
                                            continue;
                                        let e = new O.Nb(this);
                                        if (e = G.createGameModels(this.gameType, this),
                                        null === e)
                                            throw new Error("Invalied Game Type:" + this.gameType);
                                        e.setServerData(s),
                                        e.convertFromServerOdds(),
                                        t.push(e)
                                    }
                                    this.addNewGameData(t)
                                }
                                )).catch((e => {
                                    d.Y.debug("Retry Round Request"),
                                    this.retryTimout = setTimeout(( () => {
                                        this.roundRequestDone = !1
                                    }
                                    ), 5e3)
                                }
                                ))
                            }
                            )))()
                        } else
                            this.countInitInterval += 1;
                    this.gameTimer.getGameLoopSec() > m.Z.gameSettings.activeResultRequestStart && this.gameTimer.getGameLoopSec() < this.showWinTime - m.Z.gameSettings.activeResultRequestUntil && this.checkRequestResultActive(),
                    this.gameTimer.getGameLoopSec() >= this.showWinTime - 3 && !this.receivedResultCheck && (this.receivedResultCheck = !0,
                    d.Y.info("Check if Result received, gameLoopSec:" + this.gameTimer.getGameLoopSec() + " showWinTime:" + this.showWinTime),
                    this.checkResultDalayToBig())
                }
            }
            checkResultDalayToBig() {
                const e = this.getCurrentGameData();
                if (!e.isDummyGame && null === e.result) {
                    const t = n.D.RESULT_NOT_RECEIVED;
                    t.message = t.message + e.roundInfo.fullGameId,
                    n.q.instance.normalErrorHandler(t, !1)
                }
            }
            checkRequestResultActive() {
                if (this.lastActiveResultRequestTime + m.Z.gameSettings.activeResultRequestIntervall < Date.now()) {
                    d.Y.debug("Check Request Result active Time, game:" + this.gameType);
                    const e = this.getCurrentGameData();
                    if (null === e.result && o.u.instance.serverSocketClient.isWebsocketOpenState()) {
                        const t = new u.bI(e.roundInfo.fullGameId,this.betofferId);
                        this.lastActiveResultRequestTime = Date.now(),
                        d.Y.info("----------------- Resend Active Game Result Request ------------------ game:" + this.gameType),
                        o.u.instance.sendGameResultRequest(t, !1).then((e => {
                            this.countInitInterval = 1,
                            v.O.updateGameResult(e.gameresult.id, e.gameresult, !0)
                        }
                        )).catch((e => {
                            d.Y.debug("Error reread result" + JSON.stringify(e))
                        }
                        ))
                    }
                }
            }
            checkShowWin(e) {
                this.gameTimer.getGameLoopSec() >= this.showWinTime && this.winShownGameId !== e.roundInfo.fullGameId && (this.winShownGameId = e.roundInfo.fullGameId,
                this.doShowWin(e))
            }
            checkShowRaceBreak() {
                !this.inRaceBreak && !this.raceBreakCheckDone && this.gameTimer.getGameLoopSec() >= this.showWinTime && (this.raceBreakCheckDone = !0,
                this.checkNextGameCausesRacebreak() && (this.checkNextWithinGameLoopTime(this.gameTimer.getServerTimeSecSince()) || this.onRaceBreak()))
            }
            setCurrentGameIndexByTime(e) {
                let t = 0;
                for (const s of this.gamesList) {
                    if (s.getGameStartTime() < e)
                        break;
                    t++
                }
                t < this.gamesList.length && (this.curGameId = this.gamesList[t].roundInfo.fullGameId,
                this.indexCurGame = t,
                d.Y.debug("Set Current Index By Time:"),
                this.logGameIds())
            }
            doShowWin(e) {
                d.Y.debug("Show win GameId:" + e.roundInfo.fullGameId),
                this.getCurrentGameData().winIsShown = !0
            }
            clearGamesList() {
                this.gamesList = []
            }
            resetSavedGameResult() {
                this.savedGameResult = null
            }
            getCurrentGameStartTime() {
                return this.getCurrentGameData().getGameStartTime()
            }
            getNextGameData() {
                return this.gamesList[this.indexCurGame + -1]
            }
            getCurrentGameData() {
                return this.gamesList[this.indexCurGame]
            }
            getIndexWithGameId(e) {
                let t = -1
                  , s = 0;
                for (const i of this.gamesList) {
                    if (i.roundInfo.fullGameId === e) {
                        t = s;
                        break
                    }
                    s++
                }
                if (t < 0) {
                    let t = ""
                      , s = 0;
                    for (const e of this.gamesList)
                        t += "index:" + s + " gameId:" + e.roundInfo.fullGameId + "  game start Time:" + e.roundInfo.videoStartDt,
                        s++;
                    const i = new Error
                      , r = g.T$.GET_GAME_NOT_IN_LIST;
                    if (r.message = r.message.replace("___GAID___", e).replace("___GALI___", t) + " stack:" + i.stack,
                    !v.O.gameStopped) {
                        n.q.instance.normalErrorHandler(r, !0);
                        const e = new u.vy(r.code.toString(),r.message);
                        o.u.instance.sendLogRequest(e)
                    }
                }
                return t
            }
            correctTicketStatus(e, t, s) {
                return new Promise(( (e, t) => {
                    e(!0)
                }
                ))
            }
            onRaceBreak() {
                d.Y.info("Set Race Break true"),
                "" === this.nextRaceStartTime && (this.nextRaceStartTime = this.startTime),
                this.inRaceBreak = !0,
                this.showRaceBreakView(h.Z.formatRaceBreakTime(this.nextRaceStartTime), this.nextRoundAfterBreak)
            }
            offRaceBreak() {
                d.Y.info("Set Race Break false"),
                this.nextRaceStartTime = "",
                this.nextRoundAfterBreak = null,
                this.inRaceBreak = !1,
                this.hideRaceBreakView()
            }
            showRaceBreakView(e, t) {}
            hideRaceBreakView() {}
            externTicketStatusChanged(e) {}
            getGamesList() {
                return this.gamesList
            }
            getIndexCurGame() {
                return this.indexCurGame
            }
            getSaveGameResult() {
                return this.savedGameResult
            }
            updateLongTextFields() {}
        }
        G.HISTROY_LENGTH = 5
    }
    ,
    72213: (e, t, s) => {
        s.d(t, {
            h: () => g
        });
        var i = s(66115)
          , r = s(49001)
          , n = s(81271)
          , a = s.n(n)
          , o = s(93468)
          , d = s(85770)
          , u = s(39108)
          , h = s(30703)
          , l = s(81026)
          , c = s(23859)
          , m = s(63810);
        class g {
            constructor(e, t, s, i, n, a, o, d, u, h, l) {
                this._gameType = "kart5",
                this._gameName = "",
                this._eventType = "kart5",
                this._betofferId = -1,
                this._preFix = "",
                this.gameWrapper = "",
                this._showWinTime = 30,
                this._numberCompetitor = 0,
                this._startTime = "",
                this.nextVideoStarted = !1,
                this.roundRequestDone = !0,
                this.receivedResultCheck = !1,
                this.countInitInterval = 0,
                this.winShownGameId = "-",
                this._gamesList = [],
                this.indexCurGame = 1,
                this.curGameId = "",
                this._coinsValueList = [],
                this._scannedText = "",
                this.playerMessageVisible = !1,
                this._raceScreenVisible = !1,
                this._nextGameGameType = null,
                this._inRaceBreak = !1,
                this._raceCanceled = !1,
                this.raceBreakCheckDone = !1,
                this._nextRaceStartTime = "",
                this._nextRoundAfterBreak = null,
                this._allowSetAgain = !0,
                this._oddsNumbDigits = 1,
                this._orderNumber = 0,
                this._sessionResults = null,
                this.gameType = e,
                this.eventType = t,
                this.betofferId = s,
                this.preFix = i,
                this.gameWrapper = "#" + this.preFix + "wrapper",
                this._gameLength = n,
                this._showWinTime = a,
                this._numberCompetitor = o,
                this.readInterval = d,
                this.coinsValueList = u,
                this._startTime = h,
                this.orderNumber = l,
                this.gameName = r.Z.getPrintGameNameByGameType(this.gameType),
                c.O.getPrintSessionResults() && (this._sessionResults = new m.s(this))
            }
            get gameType() {
                return this._gameType
            }
            set gameType(e) {
                this._gameType = e
            }
            get eventType() {
                return this._eventType
            }
            set eventType(e) {
                this._eventType = e
            }
            get betofferId() {
                return this._betofferId
            }
            set betofferId(e) {
                this._betofferId = e
            }
            get gameName() {
                return this._gameName
            }
            set gameName(e) {
                this._gameName = e
            }
            get preFix() {
                return this._preFix
            }
            set preFix(e) {
                this._preFix = e
            }
            get gameTimer() {
                return this._gameTimer
            }
            set gameTimer(e) {
                this._gameTimer = e
            }
            get coinsValueList() {
                return this._coinsValueList
            }
            set coinsValueList(e) {
                this._coinsValueList = e
            }
            get scannedText() {
                return this._scannedText
            }
            set scannedText(e) {
                this._scannedText = e
            }
            get numberCompetitor() {
                return this._numberCompetitor
            }
            set numberCompetitor(e) {
                this._numberCompetitor = e
            }
            get startTime() {
                return this._startTime
            }
            setGameTimer(e) {
                this._gameTimer = e
            }
            get raceScreenVisible() {
                return this._raceScreenVisible
            }
            get showWinTime() {
                if (this.gameType === i.O4.HORSE.gamType && i.qY.includes(this.betofferId) || this.gameType === i.O4.TROT.gamType && i.qY.includes(this.betofferId)) {
                    const e = this.getCurrentGameData();
                    if (e) {
                        if (e.result) {
                            return Math.round(e.result.finish1Time + 6)
                        }
                        return this._showWinTime
                    }
                    return this._showWinTime
                }
                return this._showWinTime
            }
            get nextGameGameType() {
                return this._nextGameGameType
            }
            set nextGameGameType(e) {
                this._nextGameGameType = e
            }
            get inRaceBreak() {
                return this._inRaceBreak
            }
            set inRaceBreak(e) {
                this._inRaceBreak = e
            }
            get raceCanceled() {
                return this._raceCanceled
            }
            set raceCanceled(e) {
                this._raceCanceled = e
            }
            get nextRaceStartTime() {
                return this._nextRaceStartTime
            }
            set nextRaceStartTime(e) {
                this._nextRaceStartTime = e
            }
            get nextRoundAfterBreak() {
                return this._nextRoundAfterBreak
            }
            set nextRoundAfterBreak(e) {
                this._nextRoundAfterBreak = e
            }
            get allowSetAgain() {
                return this._allowSetAgain
            }
            get oddsNumbDigits() {
                return this._oddsNumbDigits
            }
            get orderNumber() {
                return this._orderNumber
            }
            get sessionResults() {
                return this._sessionResults
            }
            set orderNumber(e) {
                this._orderNumber = e
            }
            getGameWithId(e) {
                const t = this.gamesList.find((t => t.roundInfo.fullGameId === e));
                if (void 0 === t) {
                    let t = ""
                      , s = 0;
                    for (const e of this.gamesList)
                        t += "index:" + s + " gameId:" + e.roundInfo.fullGameId + "  game start Time:" + e.roundInfo.videoStartDt,
                        s++;
                    const i = new Error
                      , r = o.T$.GET_GAME_NOT_IN_LIST;
                    r.message = r.message.replace("___GAID___", e).replace("___GALI___", t) + " stack:" + i.stack,
                    d.q.instance.normalErrorHandler(r, !0);
                    const n = new u.vy(r.code.toString(),r.message);
                    h.u.instance.sendLogRequest(n)
                }
                return t
            }
            getGameWithIdWithoutError(e) {
                return this.gamesList.find((t => t.roundInfo.fullGameId === e))
            }
            scannedKeyEvent(e) {}
            updateCurrentLanguageDisplay() {}
            createPlayerMessage(e, t) {
                !0 === this.playerMessageVisible && this.removePlayerMessage(),
                this.playerMessageVisible = !0;
                let s = "";
                t && (s = " fromTop");
                let i = "";
                i += "<div id='" + this.preFix + "playerMessageFrame' class='playerMessageFrame playerMessageHidden" + s + "'><div class='playerMessageBox'><span>" + e + "</span></div></div>",
                a()(this.gameWrapper).append(i),
                this.messageTimeout = setTimeout(( () => {
                    a()("#" + this.preFix + "playerMessageFrame").removeClass("playerMessageHidden"),
                    this.messageTimeout = setTimeout(( () => {
                        a()("#" + this.preFix + "playerMessageFrame").addClass("playerMessageHidden"),
                        this.messageTimeout = setTimeout(( () => {
                            a()("#" + this.preFix + "playerMessageFrame").remove(),
                            this.messageTimeout = null,
                            this.playerMessageVisible = !1
                        }
                        ), 750)
                    }
                    ), 3e3)
                }
                ), 10),
                a()("#" + this.preFix + "playerMessageFrame").on("click", ( () => {
                    this.removePlayerMessage()
                }
                ))
            }
            removePlayerMessage() {
                clearTimeout(this.messageTimeout),
                a()("#" + this.preFix + "playerMessageFrame").hide(),
                a()("#" + this.preFix + "playerMessageFrame").remove(),
                this.messageTimeout = null,
                this.playerMessageVisible = !1
            }
            getNumberCompetitor() {
                return this._numberCompetitor
            }
            offClickEvents() {}
            setAutoSwitchGame(e) {}
            getServerTimeSecSince() {
                return this._gameTimer.getServerTimeSecSince()
            }
            resetScannValue() {
                this.scannedText = ""
            }
            changeGameActionLowPerformance(e) {}
            checkNextGameCausesRacebreak() {
                const e = this.getCurrentGameData();
                if (!(this.getIndexCurGame() - 1 >= 0))
                    return !0;
                {
                    const t = this.gamesList[this.getIndexCurGame() - 1];
                    if (t.getGameStartTime() - e.getGameStartTime() > 1.5 * this.gameLength * 1e3)
                        return this.nextRaceStartTime = t.roundInfo.videoStartDt.substring(t.roundInfo.videoStartDt.length - 9, t.roundInfo.videoStartDt.length),
                        this.nextRoundAfterBreak = t,
                        !0
                }
                return !1
            }
            checkNextWithinGameLoopTime(e) {
                const t = this.getIndexCurGame();
                if (t > 0) {
                    if (this.gamesList[t - 1].getGameStartTime() - e < 1e3 * this.gameLength)
                        return !0
                }
                return !1
            }
            checkNextWithinIntroTime(e) {
                const t = this.getIndexCurGame();
                if (t > 0) {
                    if (this.gamesList[t - 1].getGameStartTime() - e < 1e3 * (this.gameLength - this.showWinTime))
                        return !0
                }
                return !1
            }
            updateCurrentGameId() {
                this.curGameId = this.gamesList[this.indexCurGame].roundInfo.fullGameId
            }
            addIndexCurrent(e) {
                this.indexCurGame += e,
                this.updateCurrentGameId()
            }
            logGameIds() {
                let e = 0;
                for (const t of this.gamesList)
                    l.Y.debug("index:" + e + " gameId:" + t.roundInfo.fullGameId + "  game start Time:" + t.roundInfo.videoStartDt),
                    e++;
                l.Y.debug("Curent game index:" + this.indexCurGame + " gameId:" + this.curGameId)
            }
            get gameLength() {
                return this._gameLength
            }
            set gameLength(e) {
                this._gameLength = e
            }
            get gamesList() {
                return this._gamesList
            }
            set gamesList(e) {
                this._gamesList = e
            }
        }
        g.GameListMaxLength = 20
    }
    ,
    24091: (e, t, s) => {
        s.d(t, {
            n: () => h,
            q: () => l
        });
        var i = s(66115)
          , r = s(81026)
          , n = s(49001)
          , a = s(87488)
          , o = s(81814)
          , d = s(49421)
          , u = s(23859);
        class h {
            get ticketList() {
                return this._ticketList
            }
            set ticketList(e) {
                this._ticketList = e
            }
            get hasDbWin() {
                return this._hasDbWin
            }
            set hasDbWin(e) {
                this._hasDbWin = e
            }
            get dbWinTicket() {
                return this._dbWinTicket
            }
            set dbWinTicket(e) {
                this._dbWinTicket = e
            }
            get dbWinAmount() {
                return this._dbWinAmount
            }
            set dbWinAmount(e) {
                this._dbWinAmount = e
            }
            get winIsShown() {
                return this._winIsShown
            }
            set winIsShown(e) {
                this._winIsShown = e
            }
            get isDummyGame() {
                return this._isDummyGame
            }
            set isDummyGame(e) {
                this._isDummyGame = e
            }
            get ticketsNotAcceptedAnyMore() {
                return this._ticketsNotAcceptedAnyMore
            }
            set ticketsNotAcceptedAnyMore(e) {
                this._ticketsNotAcceptedAnyMore = e
            }
            constructor(e) {
                this.odds = [],
                this.serverOdds = [],
                this.raceIntervals = [],
                this._ticketList = [],
                this._winIsShown = !1,
                this._isDummyGame = !1,
                this._ticketsNotAcceptedAnyMore = !1,
                this._game = e
            }
            convertFromServerOdds() {
                if (this.getGameType() === i.O4.RTT.gamType)
                    return;
                r.Y.debug("Server Odds:" + this.serverOdds),
                this.odds = [];
                let e = 0;
                for (let t = 0; t < this._game.getNumberCompetitor(); t++)
                    if (this.odds.push(this.serverOdds[t]),
                    t !== this._game.getNumberCompetitor() - 1) {
                        for (let t = 0; t < this._game.getNumberCompetitor(); t++)
                            this.odds.push(this.serverOdds[this._game.getNumberCompetitor() + e + t]);
                        e += this._game.getNumberCompetitor()
                    }
                r.Y.info("Odds Set           :" + this.odds)
            }
            getWinnerOdd(e) {
                return this.serverOdds[e]
            }
            getForecastOdd(e, t) {
                let s = 0
                  , i = this._game.getNumberCompetitor();
                r.Y.debug("Get forcast odd, winIndex:" + e + " secIndex:" + t);
                for (let n = 0; n < this._game.getNumberCompetitor(); n++)
                    for (let a = 0; a < this._game.getNumberCompetitor(); a++)
                        if (n !== a) {
                            if (n === e && a === t) {
                                s = this.serverOdds[i],
                                r.Y.debug("Server Ods Index:" + i),
                                r.Y.debug("Odd:" + s);
                                break
                            }
                            i++
                        }
                return s
            }
            getHistoryDataFromResult(e) {
                const t = [];
                for (const s of e)
                    t.push({
                        round: s.round,
                        id: s.id,
                        date: n.Z.formatDate(n.Z.getDatFromStandardShortString(s.date), a.l.instance.getTextCommon("mom_dateFormat")),
                        time: s.time,
                        name: s.name,
                        amount: n.Z.formatValue(s.amount, u.O.decimalPlaces, o.I.commaSymbol)
                    });
                return t
            }
            calculateTicketWin() {
                for (const e of this.ticketList)
                    this.calculateTicketWinOneTicket(e)
            }
            calculateTicketWinOneTicket(e) {
                this.getGameType() === i.O4.KICKBOX.gamType ? e.calculateWin(this.result.first.driverIndex, this.result.second.driverIndex, this.result.round1.driverIndex, this.result.round2.driverIndex, this.result.round3.driverIndex) : this.getGameType() === i.O4.DOG63.gamType ? e.calculateWin(this.result.first.driverIndex, this.result.second.driverIndex, this.result.third.driverIndex) : e.calculateWin(this.result.first.driverIndex, this.result.second.driverIndex)
            }
            posCheckWinUpdateTicketStatus() {
                let e = !1;
                for (const t of this.ticketList)
                    if (t.status === d.Tg.PAYDOUT && u.O.integrationType === i.zT.ONE_WALLET)
                        r.Y.debug("One Wallet Ticket already paydout, no status change");
                    else {
                        const s = t.checkWinStatus();
                        s > 0 && (u.O.sendOnUpdateTurnoverTicketStatus(t, !0, !1, !1),
                        2 === s && (e = !0))
                    }
                e && u.O.sendOnCalculateBalance()
            }
            posCheckStatusStartUp(e) {
                let t = !1;
                for (const s of this.ticketList)
                    s.status === d.Tg.NEW && e && (this.calculateTicketWinOneTicket(s),
                    s.checkWinStatus(),
                    u.O.sendOnUpdateTurnoverTicketStatus(s, !0, !1, !1),
                    t = !0),
                    s.status !== d.Tg.LOSS && s.status !== d.Tg.WIN || e || (s.status = d.Tg.NEW,
                    u.O.sendOnUpdateTurnoverTicketStatus(s, !0, !1, !1),
                    this.calculateTicketWinOneTicket(s),
                    t = !0);
                t && u.O.sendOnCalculateBalance()
            }
            setTicketsRaceStarted(e) {
                for (const t of this.ticketList)
                    t.raceStarted = e
            }
            getGameStartTime() {
                return this.roundInfo.videoStartUnix
            }
            getGameType() {
                return this._game.gameType
            }
            getOddByBetId(e) {
                return this.serverOdds[parseInt(e, 10)]
            }
            get game() {
                return this._game
            }
            set game(e) {
                this._game = e
            }
        }
        class l extends h {
            constructor() {
                super(...arguments),
                this.drivers = []
            }
            setStaticDataForCompetitors(e) {
                if (u.O.deviceType !== i.h7.Pos) {
                    r.Y.debug("Set Statistic Data for round:" + e.idSchedule + " id:" + e.id);
                    for (let t = 0; t < this.drivers.length; t++) {
                        const s = this.drivers[t];
                        if (s.firstName = e.competitors[t + 1].name,
                        e.competitors[t + 1].last5 && (s.last5 = e.competitors[t + 1].last5.split("|")),
                        s.nbr1 = e.competitors[t + 1].nbr1,
                        s.nbr2 = e.competitors[t + 1].nbr2,
                        s.nbr3 = e.competitors[t + 1].nbr3,
                        s.racesForStatistic = e.competitors[t + 1].racesForStatistic,
                        s.trend = e.competitors[t + 1].trend,
                        t >= this.game.getNumberCompetitor() - 1)
                            break
                    }
                }
            }
        }
    }
    ,
    74236: (e, t, s) => {
        s.d(t, {
            B9: () => d,
            DT: () => r,
            Mm: () => i
        });
        var i, r, n = s(87488), a = s(81026), o = s(66115);
        !function(e) {
            e.ODD = "odd",
            e.EVAN = "even",
            e.NONE = "none"
        }(i || (i = {})),
        function(e) {
            e.HIGH = "high",
            e.LOW = "low",
            e.NONE = "none"
        }(r || (r = {}));
        class d {
            static getPrintTipListThreeBetString(e) {
                let t = "";
                const s = parseInt(e.betId, 10);
                return s <= o.KZ.DOG63.forcastTo ? null === e.second ? t += e.first : t += e.first + "-" + e.second : s <= o.KZ.DOG63.place2To ? t = e.first + " 1/2" : s <= o.KZ.DOG63.place3To ? t = e.first + " 1/2/3" : s <= o.KZ.DOG63.forcastNoOrderTo ? t = e.first + "-" + e.second + " ↑↓" : s <= o.KZ.DOG63.tricastTo ? t = e.first + "-" + e.second + "-" + e.third : s <= o.KZ.DOG63.tricastNoOrderTo ? t = e.first + "-" + e.second + "-" + e.third + " ↑↓" : s === o.KZ.DOG63.underOverFrom ? t = n.l.instance.getPrintTextCommon("underTxt") : s === o.KZ.DOG63.underOverTo ? t = n.l.instance.getPrintTextCommon("overTxt") : s === o.KZ.DOG63.oddEvenFrom ? t = n.l.instance.getPrintTextCommon("oddTxt") : s === o.KZ.DOG63.oddEvenTo ? t = n.l.instance.getPrintTextCommon("evenBet") : s <= o.KZ.DOG63.twoInThreeTo ? t = e.first + "-" + e.second + " 1/2/3" : s <= o.KZ.DOG63.sumTricastTo ? t = n.l.instance.getPrintTextCommon("sumShort") + " 1/2/3: " + (s - o.KZ.DOG63.sumTricastFrom + 6) : s <= o.KZ.DOG63.sumForcastTo ? t = n.l.instance.getPrintTextCommon("sumShort") + " 1/2: " + (s - o.KZ.DOG63.sumForcastFrom + 3) : s <= o.KZ.DOG63.secondTo ? t = n.l.instance.getPrintText("a2ndPlace") + ": " + (s - o.KZ.DOG63.secondFrom + 1) : s <= o.KZ.DOG63.thirdTo ? t = n.l.instance.getPrintText("a3rdPlace") + ": " + (s - o.KZ.DOG63.thirdFrom + 1) : (t = "ID:" + e.betId,
                a.Y.error("Print Invalid bet id:" + e.betId)),
                t
            }
            static getSecondBetId(e) {
                return 241 + e
            }
            static getThirdBetId(e) {
                return 247 + e
            }
            static getInFirstTwoBetId(e) {
                return 36 + e
            }
            static getInFirstThreeBetId(e) {
                return 42 + e
            }
            static getFirstTwoNotInOrder(e, t) {
                return 0 === e && 1 === t || 1 === e && 0 === t ? 48 : 0 === e && 2 === t || 2 === e && 0 === t ? 49 : 0 === e && 3 === t || 3 === e && 0 === t ? 50 : 0 === e && 4 === t || 4 === e && 0 === t ? 51 : 0 === e && 5 === t || 5 === e && 0 === t ? 52 : 1 === e && 2 === t || 2 === e && 1 === t ? 53 : 1 === e && 3 === t || 3 === e && 1 === t ? 54 : 1 === e && 4 === t || 4 === e && 1 === t ? 55 : 1 === e && 5 === t || 5 === e && 1 === t ? 56 : 2 === e && 3 === t || 3 === e && 2 === t ? 57 : 2 === e && 4 === t || 4 === e && 2 === t ? 58 : 2 === e && 5 === t || 5 === e && 2 === t ? 59 : 3 === e && 4 === t || 4 === e && 3 === t ? 60 : 3 === e && 5 === t || 5 === e && 3 === t ? 61 : 4 === e && 5 === t || 5 === e && 4 === t ? 62 : -1
            }
            static getTrioInOrder(e, t, s) {
                return 0 === e && 1 === t && 2 === s ? 63 : 0 === e && 1 === t && 3 === s ? 64 : 0 === e && 1 === t && 4 === s ? 65 : 0 === e && 1 === t && 5 === s ? 66 : 0 === e && 2 === t && 1 === s ? 67 : 0 === e && 2 === t && 3 === s ? 68 : 0 === e && 2 === t && 4 === s ? 69 : 0 === e && 2 === t && 5 === s ? 70 : 0 === e && 3 === t && 1 === s ? 71 : 0 === e && 3 === t && 2 === s ? 72 : 0 === e && 3 === t && 4 === s ? 73 : 0 === e && 3 === t && 5 === s ? 74 : 0 === e && 4 === t && 1 === s ? 75 : 0 === e && 4 === t && 2 === s ? 76 : 0 === e && 4 === t && 3 === s ? 77 : 0 === e && 4 === t && 5 === s ? 78 : 0 === e && 5 === t && 1 === s ? 79 : 0 === e && 5 === t && 2 === s ? 80 : 0 === e && 5 === t && 3 === s ? 81 : 0 === e && 5 === t && 4 === s ? 82 : 1 === e && 0 === t && 2 === s ? 83 : 1 === e && 0 === t && 3 === s ? 84 : 1 === e && 0 === t && 4 === s ? 85 : 1 === e && 0 === t && 5 === s ? 86 : 1 === e && 2 === t && 0 === s ? 87 : 1 === e && 2 === t && 3 === s ? 88 : 1 === e && 2 === t && 4 === s ? 89 : 1 === e && 2 === t && 5 === s ? 90 : 1 === e && 3 === t && 0 === s ? 91 : 1 === e && 3 === t && 2 === s ? 92 : 1 === e && 3 === t && 4 === s ? 93 : 1 === e && 3 === t && 5 === s ? 94 : 1 === e && 4 === t && 0 === s ? 95 : 1 === e && 4 === t && 2 === s ? 96 : 1 === e && 4 === t && 3 === s ? 97 : 1 === e && 4 === t && 5 === s ? 98 : 1 === e && 5 === t && 0 === s ? 99 : 1 === e && 5 === t && 2 === s ? 100 : 1 === e && 5 === t && 3 === s ? 101 : 1 === e && 5 === t && 4 === s ? 102 : 2 === e && 0 === t && 1 === s ? 103 : 2 === e && 0 === t && 3 === s ? 104 : 2 === e && 0 === t && 4 === s ? 105 : 2 === e && 0 === t && 5 === s ? 106 : 2 === e && 1 === t && 0 === s ? 107 : 2 === e && 1 === t && 3 === s ? 108 : 2 === e && 1 === t && 4 === s ? 109 : 2 === e && 1 === t && 5 === s ? 110 : 2 === e && 3 === t && 0 === s ? 111 : 2 === e && 3 === t && 1 === s ? 112 : 2 === e && 3 === t && 4 === s ? 113 : 2 === e && 3 === t && 5 === s ? 114 : 2 === e && 4 === t && 0 === s ? 115 : 2 === e && 4 === t && 1 === s ? 116 : 2 === e && 4 === t && 3 === s ? 117 : 2 === e && 4 === t && 5 === s ? 118 : 2 === e && 5 === t && 0 === s ? 119 : 2 === e && 5 === t && 1 === s ? 120 : 2 === e && 5 === t && 3 === s ? 121 : 2 === e && 5 === t && 4 === s ? 122 : 3 === e && 0 === t && 1 === s ? 123 : 3 === e && 0 === t && 2 === s ? 124 : 3 === e && 0 === t && 4 === s ? 125 : 3 === e && 0 === t && 5 === s ? 126 : 3 === e && 1 === t && 0 === s ? 127 : 3 === e && 1 === t && 2 === s ? 128 : 3 === e && 1 === t && 4 === s ? 129 : 3 === e && 1 === t && 5 === s ? 130 : 3 === e && 2 === t && 0 === s ? 131 : 3 === e && 2 === t && 1 === s ? 132 : 3 === e && 2 === t && 4 === s ? 133 : 3 === e && 2 === t && 5 === s ? 134 : 3 === e && 4 === t && 0 === s ? 135 : 3 === e && 4 === t && 1 === s ? 136 : 3 === e && 4 === t && 2 === s ? 137 : 3 === e && 4 === t && 5 === s ? 138 : 3 === e && 5 === t && 0 === s ? 139 : 3 === e && 5 === t && 1 === s ? 140 : 3 === e && 5 === t && 2 === s ? 141 : 3 === e && 5 === t && 4 === s ? 142 : 4 === e && 0 === t && 1 === s ? 143 : 4 === e && 0 === t && 2 === s ? 144 : 4 === e && 0 === t && 3 === s ? 145 : 4 === e && 0 === t && 5 === s ? 146 : 4 === e && 1 === t && 0 === s ? 147 : 4 === e && 1 === t && 2 === s ? 148 : 4 === e && 1 === t && 3 === s ? 149 : 4 === e && 1 === t && 5 === s ? 150 : 4 === e && 2 === t && 0 === s ? 151 : 4 === e && 2 === t && 1 === s ? 152 : 4 === e && 2 === t && 3 === s ? 153 : 4 === e && 2 === t && 5 === s ? 154 : 4 === e && 3 === t && 0 === s ? 155 : 4 === e && 3 === t && 1 === s ? 156 : 4 === e && 3 === t && 2 === s ? 157 : 4 === e && 3 === t && 5 === s ? 158 : 4 === e && 5 === t && 0 === s ? 159 : 4 === e && 5 === t && 1 === s ? 160 : 4 === e && 5 === t && 2 === s ? 161 : 4 === e && 5 === t && 3 === s ? 162 : 5 === e && 0 === t && 1 === s ? 163 : 5 === e && 0 === t && 2 === s ? 164 : 5 === e && 0 === t && 3 === s ? 165 : 5 === e && 0 === t && 4 === s ? 166 : 5 === e && 1 === t && 0 === s ? 167 : 5 === e && 1 === t && 2 === s ? 168 : 5 === e && 1 === t && 3 === s ? 169 : 5 === e && 1 === t && 4 === s ? 170 : 5 === e && 2 === t && 0 === s ? 171 : 5 === e && 2 === t && 1 === s ? 172 : 5 === e && 2 === t && 3 === s ? 173 : 5 === e && 2 === t && 4 === s ? 174 : 5 === e && 3 === t && 0 === s ? 175 : 5 === e && 3 === t && 1 === s ? 176 : 5 === e && 3 === t && 2 === s ? 177 : 5 === e && 3 === t && 4 === s ? 178 : 5 === e && 4 === t && 0 === s ? 179 : 5 === e && 4 === t && 1 === s ? 180 : 5 === e && 4 === t && 2 === s ? 181 : 5 === e && 4 === t && 3 === s ? 182 : (a.Y.debug("No Quota found:" + e + "-" + t + "-" + s),
                -1)
            }
            static getTrioNotInOrder(e, t, s) {
                return 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? -1 : 202 : 201 : 200 : 199 : 198 : 197 : 196 : 195 : 194 : 193 : 192 : 191 : 190 : 189 : 188 : 187 : 186 : 185 : 184 : 183
            }
            static getTwoInThreeNotInOrderBetId(e, t) {
                return 0 !== e && 0 !== t || 1 !== e && 1 !== t ? 0 !== e && 0 !== t || 2 !== e && 2 !== t ? 0 !== e && 0 !== t || 3 !== e && 3 !== t ? 0 !== e && 0 !== t || 4 !== e && 4 !== t ? 0 !== e && 0 !== t || 5 !== e && 5 !== t ? 1 !== e && 1 !== t || 2 !== e && 2 !== t ? 1 !== e && 1 !== t || 3 !== e && 3 !== t ? 1 !== e && 1 !== t || 4 !== e && 4 !== t ? 1 !== e && 1 !== t || 5 !== e && 5 !== t ? 2 !== e && 2 !== t || 3 !== e && 3 !== t ? 2 !== e && 2 !== t || 4 !== e && 4 !== t ? 2 !== e && 2 !== t || 5 !== e && 5 !== t ? 3 !== e && 3 !== t || 4 !== e && 4 !== t ? 3 !== e && 3 !== t || 5 !== e && 5 !== t ? 4 !== e && 4 !== t || 5 !== e && 5 !== t ? -1 : 221 : 220 : 219 : 218 : 217 : 216 : 215 : 214 : 213 : 212 : 211 : 210 : 209 : 208 : 207
            }
            static getOddEvenBetId(e) {
                return e === i.ODD ? 205 : e === i.EVAN ? 206 : -1
            }
            static getHeighLowBetId(e) {
                return e === r.LOW ? 203 : e === r.HIGH ? 204 : -1
            }
            static getSumTwoBetId(e) {
                return 232 + e - 3
            }
            static getSumThreeBetId(e) {
                return 222 + e - 6
            }
            constructor(e) {
                this.serverOdds = [],
                this.serverOdds = e
            }
            getSecondOdd(e) {
                let t = 0;
                return t = this.serverOdds[241 + e],
                t
            }
            getThirdOdd(e) {
                let t = 0;
                return t = this.serverOdds[247 + e],
                t
            }
            getInFirstTwo(e) {
                return this.serverOdds[36 + e]
            }
            getInFirstThree(e) {
                return this.serverOdds[42 + e]
            }
            getFirstTwoNotInOrder(e, t) {
                let s = 0;
                return 0 === e && 1 === t || 1 === e && 0 === t ? s = this.serverOdds[48] : 0 === e && 2 === t || 2 === e && 0 === t ? s = this.serverOdds[49] : 0 === e && 3 === t || 3 === e && 0 === t ? s = this.serverOdds[50] : 0 === e && 4 === t || 4 === e && 0 === t ? s = this.serverOdds[51] : 0 === e && 5 === t || 5 === e && 0 === t ? s = this.serverOdds[52] : 1 === e && 2 === t || 2 === e && 1 === t ? s = this.serverOdds[53] : 1 === e && 3 === t || 3 === e && 1 === t ? s = this.serverOdds[54] : 1 === e && 4 === t || 4 === e && 1 === t ? s = this.serverOdds[55] : 1 === e && 5 === t || 5 === e && 1 === t ? s = this.serverOdds[56] : 2 === e && 3 === t || 3 === e && 2 === t ? s = this.serverOdds[57] : 2 === e && 4 === t || 4 === e && 2 === t ? s = this.serverOdds[58] : 2 === e && 5 === t || 5 === e && 2 === t ? s = this.serverOdds[59] : 3 === e && 4 === t || 4 === e && 3 === t ? s = this.serverOdds[60] : 3 === e && 5 === t || 5 === e && 3 === t ? s = this.serverOdds[61] : (4 === e && 5 === t || 5 === e && 4 === t) && (s = this.serverOdds[62]),
                s
            }
            getTwoInThreeNotInOrder(e, t, s) {
                const i = [];
                return 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || i.push({
                    firstDriverIndex: 0,
                    secondDriverIndex: 1,
                    quote: this.serverOdds[207]
                }),
                0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || i.push({
                    firstDriverIndex: 0,
                    secondDriverIndex: 2,
                    quote: this.serverOdds[208]
                }),
                0 !== e && 0 !== t && 0 !== s || 3 !== e && 3 !== t && 3 !== s || i.push({
                    firstDriverIndex: 0,
                    secondDriverIndex: 3,
                    quote: this.serverOdds[209]
                }),
                0 !== e && 0 !== t && 0 !== s || 4 !== e && 4 !== t && 4 !== s || i.push({
                    firstDriverIndex: 0,
                    secondDriverIndex: 4,
                    quote: this.serverOdds[210]
                }),
                0 !== e && 0 !== t && 0 !== s || 5 !== e && 5 !== t && 5 !== s || i.push({
                    firstDriverIndex: 0,
                    secondDriverIndex: 5,
                    quote: this.serverOdds[211]
                }),
                1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || i.push({
                    firstDriverIndex: 1,
                    secondDriverIndex: 2,
                    quote: this.serverOdds[212]
                }),
                1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s || i.push({
                    firstDriverIndex: 1,
                    secondDriverIndex: 3,
                    quote: this.serverOdds[213]
                }),
                1 !== e && 1 !== t && 1 !== s || 4 !== e && 4 !== t && 4 !== s || i.push({
                    firstDriverIndex: 1,
                    secondDriverIndex: 4,
                    quote: this.serverOdds[214]
                }),
                1 !== e && 1 !== t && 1 !== s || 5 !== e && 5 !== t && 5 !== s || i.push({
                    firstDriverIndex: 1,
                    secondDriverIndex: 5,
                    quote: this.serverOdds[215]
                }),
                2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s || i.push({
                    firstDriverIndex: 2,
                    secondDriverIndex: 3,
                    quote: this.serverOdds[216]
                }),
                2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s || i.push({
                    firstDriverIndex: 2,
                    secondDriverIndex: 4,
                    quote: this.serverOdds[217]
                }),
                2 !== e && 2 !== t && 2 !== s || 5 !== e && 5 !== t && 5 !== s || i.push({
                    firstDriverIndex: 2,
                    secondDriverIndex: 5,
                    quote: this.serverOdds[218]
                }),
                3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s || i.push({
                    firstDriverIndex: 3,
                    secondDriverIndex: 4,
                    quote: this.serverOdds[219]
                }),
                3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s || i.push({
                    firstDriverIndex: 3,
                    secondDriverIndex: 5,
                    quote: this.serverOdds[220]
                }),
                4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s || i.push({
                    firstDriverIndex: 4,
                    secondDriverIndex: 5,
                    quote: this.serverOdds[221]
                }),
                i
            }
            getTwoInThreeNotInOrderOdds(e, t) {
                return 0 === e && 1 === t ? this.serverOdds[207] : 0 === e && 2 === t ? this.serverOdds[208] : 0 === e && 3 === t ? this.serverOdds[209] : 0 === e && 4 === t ? this.serverOdds[210] : 0 === e && 5 === t ? this.serverOdds[211] : 1 === e && 2 === t ? this.serverOdds[212] : 1 === e && 3 === t ? this.serverOdds[213] : 1 === e && 4 === t ? this.serverOdds[214] : 1 === e && 5 === t ? this.serverOdds[215] : 2 === e && 3 === t ? this.serverOdds[216] : 2 === e && 4 === t ? this.serverOdds[217] : 2 === e && 5 === t ? this.serverOdds[218] : 3 === e && 4 === t ? this.serverOdds[219] : 3 === e && 5 === t ? this.serverOdds[220] : 4 === e && 5 === t ? this.serverOdds[221] : void 0
            }
            getTrioNotInOrder(e, t, s) {
                let i = 0;
                return 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 1 !== e && 1 !== t && 1 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 2 !== e && 2 !== t && 2 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 0 !== e && 0 !== t && 0 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 0 !== e && 0 !== t && 0 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s ? 1 !== e && 1 !== t && 1 !== s || 2 !== e && 2 !== t && 2 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 1 !== e && 1 !== t && 1 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 1 !== e && 1 !== t && 1 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s ? 2 !== e && 2 !== t && 2 !== s || 3 !== e && 3 !== t && 3 !== s || 5 !== e && 5 !== t && 5 !== s ? 2 !== e && 2 !== t && 2 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s ? 3 !== e && 3 !== t && 3 !== s || 4 !== e && 4 !== t && 4 !== s || 5 !== e && 5 !== t && 5 !== s || (i = this.serverOdds[202]) : i = this.serverOdds[201] : i = this.serverOdds[200] : i = this.serverOdds[199] : i = this.serverOdds[198] : i = this.serverOdds[197] : i = this.serverOdds[196] : i = this.serverOdds[195] : i = this.serverOdds[194] : i = this.serverOdds[193] : i = this.serverOdds[192] : i = this.serverOdds[191] : i = this.serverOdds[190] : i = this.serverOdds[189] : i = this.serverOdds[188] : i = this.serverOdds[187] : i = this.serverOdds[186] : i = this.serverOdds[185] : i = this.serverOdds[184] : i = this.serverOdds[183],
                i
            }
            getTrioInOrder(e, t, s) {
                let i = 0;
                return 0 === e && 1 === t && 2 === s ? i = this.serverOdds[63] : 0 === e && 1 === t && 3 === s ? i = this.serverOdds[64] : 0 === e && 1 === t && 4 === s ? i = this.serverOdds[65] : 0 === e && 1 === t && 5 === s ? i = this.serverOdds[66] : 0 === e && 2 === t && 1 === s ? i = this.serverOdds[67] : 0 === e && 2 === t && 3 === s ? i = this.serverOdds[68] : 0 === e && 2 === t && 4 === s ? i = this.serverOdds[69] : 0 === e && 2 === t && 5 === s ? i = this.serverOdds[70] : 0 === e && 3 === t && 1 === s ? i = this.serverOdds[71] : 0 === e && 3 === t && 2 === s ? i = this.serverOdds[72] : 0 === e && 3 === t && 4 === s ? i = this.serverOdds[73] : 0 === e && 3 === t && 5 === s ? i = this.serverOdds[74] : 0 === e && 4 === t && 1 === s ? i = this.serverOdds[75] : 0 === e && 4 === t && 2 === s ? i = this.serverOdds[76] : 0 === e && 4 === t && 3 === s ? i = this.serverOdds[77] : 0 === e && 4 === t && 5 === s ? i = this.serverOdds[78] : 0 === e && 5 === t && 1 === s ? i = this.serverOdds[79] : 0 === e && 5 === t && 2 === s ? i = this.serverOdds[80] : 0 === e && 5 === t && 3 === s ? i = this.serverOdds[81] : 0 === e && 5 === t && 4 === s ? i = this.serverOdds[82] : 1 === e && 0 === t && 2 === s ? i = this.serverOdds[83] : 1 === e && 0 === t && 3 === s ? i = this.serverOdds[84] : 1 === e && 0 === t && 4 === s ? i = this.serverOdds[85] : 1 === e && 0 === t && 5 === s ? i = this.serverOdds[86] : 1 === e && 2 === t && 0 === s ? i = this.serverOdds[87] : 1 === e && 2 === t && 3 === s ? i = this.serverOdds[88] : 1 === e && 2 === t && 4 === s ? i = this.serverOdds[89] : 1 === e && 2 === t && 5 === s ? i = this.serverOdds[90] : 1 === e && 3 === t && 0 === s ? i = this.serverOdds[91] : 1 === e && 3 === t && 2 === s ? i = this.serverOdds[92] : 1 === e && 3 === t && 4 === s ? i = this.serverOdds[93] : 1 === e && 3 === t && 5 === s ? i = this.serverOdds[94] : 1 === e && 4 === t && 0 === s ? i = this.serverOdds[95] : 1 === e && 4 === t && 2 === s ? i = this.serverOdds[96] : 1 === e && 4 === t && 3 === s ? i = this.serverOdds[97] : 1 === e && 4 === t && 5 === s ? i = this.serverOdds[98] : 1 === e && 5 === t && 0 === s ? i = this.serverOdds[99] : 1 === e && 5 === t && 2 === s ? i = this.serverOdds[100] : 1 === e && 5 === t && 3 === s ? i = this.serverOdds[101] : 1 === e && 5 === t && 4 === s ? i = this.serverOdds[102] : 2 === e && 0 === t && 1 === s ? i = this.serverOdds[103] : 2 === e && 0 === t && 3 === s ? i = this.serverOdds[104] : 2 === e && 0 === t && 4 === s ? i = this.serverOdds[105] : 2 === e && 0 === t && 5 === s ? i = this.serverOdds[106] : 2 === e && 1 === t && 0 === s ? i = this.serverOdds[107] : 2 === e && 1 === t && 3 === s ? i = this.serverOdds[108] : 2 === e && 1 === t && 4 === s ? i = this.serverOdds[109] : 2 === e && 1 === t && 5 === s ? i = this.serverOdds[110] : 2 === e && 3 === t && 0 === s ? i = this.serverOdds[111] : 2 === e && 3 === t && 1 === s ? i = this.serverOdds[112] : 2 === e && 3 === t && 4 === s ? i = this.serverOdds[113] : 2 === e && 3 === t && 5 === s ? i = this.serverOdds[114] : 2 === e && 4 === t && 0 === s ? i = this.serverOdds[115] : 2 === e && 4 === t && 1 === s ? i = this.serverOdds[116] : 2 === e && 4 === t && 3 === s ? i = this.serverOdds[117] : 2 === e && 4 === t && 5 === s ? i = this.serverOdds[118] : 2 === e && 5 === t && 0 === s ? i = this.serverOdds[119] : 2 === e && 5 === t && 1 === s ? i = this.serverOdds[120] : 2 === e && 5 === t && 3 === s ? i = this.serverOdds[121] : 2 === e && 5 === t && 4 === s ? i = this.serverOdds[122] : 3 === e && 0 === t && 1 === s ? i = this.serverOdds[123] : 3 === e && 0 === t && 2 === s ? i = this.serverOdds[124] : 3 === e && 0 === t && 4 === s ? i = this.serverOdds[125] : 3 === e && 0 === t && 5 === s ? i = this.serverOdds[126] : 3 === e && 1 === t && 0 === s ? i = this.serverOdds[127] : 3 === e && 1 === t && 2 === s ? i = this.serverOdds[128] : 3 === e && 1 === t && 4 === s ? i = this.serverOdds[129] : 3 === e && 1 === t && 5 === s ? i = this.serverOdds[130] : 3 === e && 2 === t && 0 === s ? i = this.serverOdds[131] : 3 === e && 2 === t && 1 === s ? i = this.serverOdds[132] : 3 === e && 2 === t && 4 === s ? i = this.serverOdds[133] : 3 === e && 2 === t && 5 === s ? i = this.serverOdds[134] : 3 === e && 4 === t && 0 === s ? i = this.serverOdds[135] : 3 === e && 4 === t && 1 === s ? i = this.serverOdds[136] : 3 === e && 4 === t && 2 === s ? i = this.serverOdds[137] : 3 === e && 4 === t && 5 === s ? i = this.serverOdds[138] : 3 === e && 5 === t && 0 === s ? i = this.serverOdds[139] : 3 === e && 5 === t && 1 === s ? i = this.serverOdds[140] : 3 === e && 5 === t && 2 === s ? i = this.serverOdds[141] : 3 === e && 5 === t && 4 === s ? i = this.serverOdds[142] : 4 === e && 0 === t && 1 === s ? i = this.serverOdds[143] : 4 === e && 0 === t && 2 === s ? i = this.serverOdds[144] : 4 === e && 0 === t && 3 === s ? i = this.serverOdds[145] : 4 === e && 0 === t && 5 === s ? i = this.serverOdds[146] : 4 === e && 1 === t && 0 === s ? i = this.serverOdds[147] : 4 === e && 1 === t && 2 === s ? i = this.serverOdds[148] : 4 === e && 1 === t && 3 === s ? i = this.serverOdds[149] : 4 === e && 1 === t && 5 === s ? i = this.serverOdds[150] : 4 === e && 2 === t && 0 === s ? i = this.serverOdds[151] : 4 === e && 2 === t && 1 === s ? i = this.serverOdds[152] : 4 === e && 2 === t && 3 === s ? i = this.serverOdds[153] : 4 === e && 2 === t && 5 === s ? i = this.serverOdds[154] : 4 === e && 3 === t && 0 === s ? i = this.serverOdds[155] : 4 === e && 3 === t && 1 === s ? i = this.serverOdds[156] : 4 === e && 3 === t && 2 === s ? i = this.serverOdds[157] : 4 === e && 3 === t && 5 === s ? i = this.serverOdds[158] : 4 === e && 5 === t && 0 === s ? i = this.serverOdds[159] : 4 === e && 5 === t && 1 === s ? i = this.serverOdds[160] : 4 === e && 5 === t && 2 === s ? i = this.serverOdds[161] : 4 === e && 5 === t && 3 === s ? i = this.serverOdds[162] : 5 === e && 0 === t && 1 === s ? i = this.serverOdds[163] : 5 === e && 0 === t && 2 === s ? i = this.serverOdds[164] : 5 === e && 0 === t && 3 === s ? i = this.serverOdds[165] : 5 === e && 0 === t && 4 === s ? i = this.serverOdds[166] : 5 === e && 1 === t && 0 === s ? i = this.serverOdds[167] : 5 === e && 1 === t && 2 === s ? i = this.serverOdds[168] : 5 === e && 1 === t && 3 === s ? i = this.serverOdds[169] : 5 === e && 1 === t && 4 === s ? i = this.serverOdds[170] : 5 === e && 2 === t && 0 === s ? i = this.serverOdds[171] : 5 === e && 2 === t && 1 === s ? i = this.serverOdds[172] : 5 === e && 2 === t && 3 === s ? i = this.serverOdds[173] : 5 === e && 2 === t && 4 === s ? i = this.serverOdds[174] : 5 === e && 3 === t && 0 === s ? i = this.serverOdds[175] : 5 === e && 3 === t && 1 === s ? i = this.serverOdds[176] : 5 === e && 3 === t && 2 === s ? i = this.serverOdds[177] : 5 === e && 3 === t && 4 === s ? i = this.serverOdds[178] : 5 === e && 4 === t && 0 === s ? i = this.serverOdds[179] : 5 === e && 4 === t && 1 === s ? i = this.serverOdds[180] : 5 === e && 4 === t && 2 === s ? i = this.serverOdds[181] : 5 === e && 4 === t && 3 === s && (i = this.serverOdds[182]),
                i
            }
            getOddEven(e) {
                const t = {
                    text: "",
                    quote: 0
                };
                return (e + 1) % 2 == 0 ? (t.text = n.l.instance.getText("evenTxt"),
                t.quote = this.serverOdds[206]) : (t.text = n.l.instance.getText("oddTxt"),
                t.quote = this.serverOdds[205]),
                t
            }
            getOddEvenOdds(e) {
                return (e + 1) % 2 == 0 ? this.serverOdds[206] : this.serverOdds[205]
            }
            getHeighLow(e) {
                const t = {
                    text: "",
                    quote: 0
                };
                return e + 1 > 3.5 ? (t.text = n.l.instance.getText("overTxt"),
                t.quote = this.serverOdds[204]) : (t.text = n.l.instance.getText("underTxt"),
                t.quote = this.serverOdds[203]),
                t
            }
            getHeighLowOdd(e) {
                return e + 1 > 3.5 ? this.serverOdds[204] : this.serverOdds[203]
            }
            getQuotaSumTwo(e) {
                return this.serverOdds[232 + e - 3]
            }
            getQuotaSumThree(e) {
                return this.serverOdds[222 + e - 6]
            }
        }
    }
    ,
    81736: (e, t, s) => {
        s.d(t, {
            F: () => n
        });
        var i = s(55291)
          , r = s(66115);
        class n {
            getResultValue(e, t, s) {
                e === r.O4.RTT.gamType ? this.getResultValueRoulette(t, s) : e === r.O4.KICKBOX.gamType ? this.getResultValueKickbox(t, s) : e === r.O4.DOG63.gamType ? this.getResultValueWithRunnerThree(t, s) : this.getResultValueWithRunner(t, s)
            }
            getResultValueWithRunner(e, t) {
                e.addColumn(this.getResultStringWithRunner(t), "0.23", i.jC.center, null)
            }
            getResultValueWithRunnerThree(e, t) {
                e.addColumn(this.getResultStringWithRunnerThree(t), "0.23", i.jC.center, null)
            }
            getResultValueRoulette(e, t) {
                e.addColumn(t.first.driverIndex.toString(10), "0.23", i.jC.center, null)
            }
            getResultValueKickbox(e, t) {
                e.addColumn(this.getResultStringKickbox(t), "0.23", i.jC.center, null)
            }
            getResultStringWithRunner(e) {
                return e.first.driverIndex + 1 + " - " + (e.second.driverIndex + 1)
            }
            getResultStringWithRunnerThree(e) {
                return e.first.driverIndex + 1 + " - " + (e.second.driverIndex + 1) + " - " + (e.third.driverIndex + 1)
            }
            getResultStringKickbox(e) {
                let t = (e.round1.driverIndex + 1).toString();
                "3" === t && (t = "X");
                let s = (e.round2.driverIndex + 1).toString();
                "3" === s && (s = "X");
                let i = (e.round3.driverIndex + 1).toString();
                "3" === i && (i = "X");
                return t + "-" + s + "-" + i + " : " + (e.first.driverIndex + 1)
            }
        }
    }
    ,
    3328: (e, t, s) => {
        s.d(t, {
            V: () => n,
            b: () => r
        });
        var i = s(23859);
        const r = "x";
        class n {
            constructor(e) {
                this.betNumbersQuotaIdList = [],
                this.gameLogic = e
            }
            initalGamesSet() {}
            raceStarted() {}
            updateGameResult() {}
            getBetDataById(e) {
                for (const t of i.O.getInitResult().rtt_info)
                    if (t.rtt_tip_id === e)
                        return t;
                return null
            }
            getJetonValueKey(e) {
                for (let t = this.gameLogic.coinsValueList.length - 1; t >= 0; t--)
                    if (e === this.gameLogic.coinsValueList[t])
                        return t.toString();
                return r
            }
            checkMinBet(e, t) {
                if (!i.O.checkMinBet)
                    return -1;
                const s = this.gameLogic.rouletteLogic.getBetDataById(e)
                  , r = this.calcMinBet(s.quota);
                return r > t ? r : -1
            }
            calcMinBet(e) {
                return 2 === e ? 4 * this.gameLogic.coinsValueList[0] : 3 === e ? 2 * this.gameLogic.coinsValueList[0] : this.gameLogic.coinsValueList[0]
            }
            getMinBetCoinIndex(e) {
                for (let t = 0; t < this.gameLogic.coinsValueList.length; t++)
                    if (this.gameLogic.coinsValueList[t] >= e)
                        return t;
                return 0
            }
        }
    }
    ,
    54311: (e, t, s) => {
        s.d(t, {
            S: () => o
        });
        var i = s(24091)
          , r = s(23859)
          , n = s(81026)
          , a = s(49001);
        class o extends i.n {
            constructor(e) {
                super(e)
            }
            setServerData(e) {
                const t = parseInt(e.id.replace(e.idSchedule, ""), 10);
                let s, i;
                r.O.hasJackpotBounus() ? null !== e.jackpotInfo ? (s = e.jackpotInfo.bonusValue,
                i = e.jackpotInfo.oldBonusValue,
                this.jackpotHistory = this.getHistoryDataFromResult(e.jackpotInfo.bonusHistory)) : (n.Y.error("Bonus Flag set but no bonus values given!!"),
                this.jackpotHistory = void 0) : this.jackpotHistory = void 0,
                this.roundInfo = {
                    fullGameId: e.id,
                    gameId: t,
                    jackpotValue: s,
                    oldJackpotValue: i,
                    roundBonusType: void 0,
                    videoStartDt: e.videoStartDt,
                    videoEndDt: e.videoEndDt,
                    videoStartUnix: a.Z.getSecondsSinceFromUTCDate(a.Z.getDatFromStandardString(e.videoStartDt)),
                    videoEndUnix: a.Z.getSecondsSinceFromUTCDate(a.Z.getDatFromStandardString(e.videoEndDt))
                },
                this.serverOdds = e.odds,
                this.setResultData(e)
            }
            setResultData(e) {
                let t;
                null === e.finish ? this.result = null : this.result = {
                    first: {
                        driverIndex: e.finish[1].competitorIndex,
                        time: ""
                    },
                    second: {
                        driverIndex: e.finish[1].competitorIndex,
                        time: ""
                    },
                    clockEndTime: 0,
                    bonus: e.bonus,
                    videoname: e.videoname,
                    finish1Time: 0
                },
                this.raceIntervals = [],
                2 === e.bonus ? t = "x2" : 3 === e.bonus && (t = "x3"),
                this.roundInfo.roundBonusType = t,
                !0 === r.O.getInitResult().setting.enableBonusTicker && null !== e.jackpot && void 0 !== e.jackpot && (this.hasDbWin = !0,
                this.dbWinTicket = e.jackpot.ticketId,
                this.dbWinAmount = e.jackpot.amount)
            }
        }
    }
    ,
    63810: (e, t, s) => {
        s.d(t, {
            s: () => u
        });
        var i = s(81026)
          , r = s(49001)
          , n = s(55291)
          , a = s(87488)
          , o = s(23859)
          , d = s(81736);
        class u {
            static getPrintSessionResults() {
                const e = new n.oF;
                e.createNewPage(n.yo.STANDART_FONT),
                e.addImage(n.yo.PRINT_LOGO_PATH),
                e.addTextline("--------------------------------------------------------------", n.jC.center, null),
                e.addTextline("*** " + a.l.instance.getPrintText("Printer_SessRes") + " ***", n.jC.center, n.My.bold),
                e.startRow(),
                e.addColumn(a.l.instance.getPrintText("Printer_LocationName"), "0.5", n.jC.left, null),
                e.addColumn(o.O.getInitResult().setting.locationName.replace("&", "&amp;"), "0.5", n.jC.right, null),
                e.endRow(),
                e.addTextline(a.l.instance.getPrintText("Printer_TerminalID"), n.jC.left, null),
                e.addTextline(o.O.deviceId, n.jC.right, null),
                e.startRow(),
                e.addColumn(a.l.instance.getPrintText("Printer_OperatorID"), "0.5", n.jC.left, null),
                e.addColumn(o.O.getUserInitResult().operatorID, "0.5", n.jC.right, null),
                e.endRow(),
                e.startRow(),
                e.addColumn(a.l.instance.getPrintText("Printer_SessionID"), "0.5", n.jC.left, null),
                e.addColumn(o.O.getInitResult().sessionID, "0.5", n.jC.right, null),
                e.endRow(),
                e.startRow(),
                e.addColumn(a.l.instance.getPrintText("Printer_StartDT"), "0.5", n.jC.left, null),
                e.addColumn(r.Z.printFormatDateTimeSecondsScince(o.O.sessionStartServerTime), "0.5", n.jC.right, null),
                e.endRow(),
                e.startRow(),
                e.addColumn(a.l.instance.getPrintText("Printer_EndDT"), "0.5", n.jC.left, null),
                e.addColumn(r.Z.printFormatDateTimeSecondsScince(o.O.sessionEndServerTime), "0.5", n.jC.right, null),
                e.endRow(),
                e.addTextline("******", n.jC.center, null);
                for (const t of o.O.gamesList)
                    t.sessionResults && t.sessionResults.getPrintGameResultsForSession(t.gameType, e);
                return e.addTextline("***", n.jC.center, null),
                e
            }
            constructor(e) {
                this._sessionResultsList = [],
                this.game = e
            }
            addSessionResult(e, t) {
                if (!this.hasSessionResultData(e)) {
                    const e = this.getSessionResultDataFromGameModel(t);
                    this.sessionResultsList.push(e),
                    this.logSessionResulstList()
                }
            }
            getSessionResultDataFromGameModel(e) {
                return {
                    gameId: e.roundInfo.gameId,
                    fullGameId: e.roundInfo.fullGameId,
                    videoStartDt: e.roundInfo.videoStartDt,
                    videoStartUnix: e.roundInfo.videoStartUnix,
                    result: e.result
                }
            }
            hasSessionResultData(e) {
                for (const t of this._sessionResultsList)
                    if (t.fullGameId === e)
                        return !0;
                return !1
            }
            logSessionResulstList() {
                i.Y.debug("Session Result List:");
                for (const e of this._sessionResultsList)
                    i.Y.debug(JSON.stringify(e))
            }
            get sessionResultsList() {
                return this._sessionResultsList
            }
            getPrintGameResultsForSession(e, t) {
                let s = a.l.instance.getPrintText("Printer_TableHeaderGameID");
                "wgp" !== e && "rtt" != e || (s = a.l.instance.getPrintText("Printer_TableHeaderRoundID")),
                t.addTextline("--------------------------------------------------------------", n.jC.center, null),
                t.addTextline("--- " + a.l.instance.getPrintText("Printer_GameType") + " " + this.game.gameName + " ---", n.jC.center, n.My.bold);
                let i = "-";
                for (const s of this._sessionResultsList) {
                    const a = s.fullGameId.length
                      , o = s.fullGameId.slice(0, a - 4);
                    o !== i && (i = o,
                    t.startRow(),
                    t.addColumn(r.Z.printFormatDateSecondsScince(s.videoStartUnix), "0.5", n.jC.left, null),
                    t.addColumn(o, "0.5", n.jC.left, null),
                    t.endRow(),
                    t.addTextline("--------------------------------------------------------------", n.jC.center, null)),
                    t.startRow(),
                    t.addColumn(s.gameId.toString().padStart(4, "0"), "0.2", n.jC.left, null),
                    t.addColumn(r.Z.printFormatTimeSecondsScince(s.videoStartUnix), "0.49", n.jC.center, null);
                    (new d.F).getResultValue(e, t, s.result),
                    2 === s.result.bonus ? t.addColumn("x2", "0.08", n.jC.right, null) : 3 === s.result.bonus ? t.addColumn("x3", "0.08", n.jC.right, null) : t.addColumn("", "0.08", n.jC.right, null),
                    t.endRow()
                }
            }
        }
    }
    ,
    80990: e => {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPgo8L2c+Cjwvc3ZnPgo="
    }
    ,
    95711: e => {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDljNzBjO30KPC9zdHlsZT4KPGc+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPgo8L2c+Cjwvc3ZnPgo="
    }
    ,
    15450: e => {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRTUxODJFO30KPC9zdHlsZT4KPGc+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPgo8L2c+Cjwvc3ZnPgo="
    }
}]);
