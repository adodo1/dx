var _EXT_CHARS_ = ["=", ".", "-", "*"];
if (typeof GEO_TYPE_AREA == "undefined") {
    var GEO_TYPE_AREA = 0
}
if (typeof GEO_TYPE_LINE == "undefined") {
    var GEO_TYPE_LINE = 1
}
if (typeof GEO_TYPE_POINT == "undefined") {
    var GEO_TYPE_POINT = 2
}
var _MAX_DELTA_ = 1 << 23;
function decode_geo_diff(k) {
    var h = _decode_type(k.charAt(0));
    var b = k.substr(1);
    var n = 0;
    var a = b.length;
    var o = [];
    var f = [];
    var g = [];
    while (n < a) {
        if (b.charAt(n) == _EXT_CHARS_[0]) {
            if ((a - n) < 13) {
                return 0
            }
            g = _decode_6byte_(b.substr(n, 13), o);
            if (g < 0) {
                return 0
            }
            n += 13
        } else {
            if (b.charAt(n) == ";") {
                f.push(o.slice(0));
                o.length = 0; ++n
            } else {
                if ((a - n) < 8) {
                    return 0
                }
                g = _decode_4byte_(b.substr(n, 8), o);
                if (g < 0) {
                    return 0
                }
                n += 8
            }
        }
    }
    for (var e = 0,
    c = f.length; e < c; e++) {
        for (var d = 0,
        m = f[e].length; d < m; d++) {
            f[e][d] /= 100
        }
    }
    return {
        geoType: h,
        geo: f
    }
}
function _decode_type(b) {
    var a = -1;
    if (b == _EXT_CHARS_[1]) {
        a = GEO_TYPE_POINT
    } else {
        if (b == _EXT_CHARS_[2]) {
            a = GEO_TYPE_LINE
        } else {
            if (b == _EXT_CHARS_[3]) {
                a = GEO_TYPE_AREA
            }
        }
    }
    return a
}
function _decode_6byte_(d, b) {
    var a = 0;
    var f = 0;
    var e = 0;
    for (var c = 0; c < 6; c++) {
        e = _char2num_(d.substr(1 + c, 1));
        if (e < 0) {
            return - 1 - c
        }
        a += e << (6 * c);
        e = _char2num_(d.substr(7 + c, 1));
        if (e < 0) {
            return - 7 - c
        }
        f += e << (6 * c)
    }
    b.push(a);
    b.push(f);
    return 0
}
function _decode_4byte_(e, c) {
    var b = c.length;
    if (b < 2) {
        return - 1
    }
    var a = 0;
    var g = 0;
    var f = 0;
    for (var d = 0; d < 4; d++) {
        f = _char2num_(e.substr(d, 1));
        if (f < 0) {
            return - 1 - d
        }
        a += f << (6 * d);
        f = _char2num_(e.substr(4 + d, 1));
        if (f < 0) {
            return - 5 - d
        }
        g += f << (6 * d)
    }
    if (a > _MAX_DELTA_) {
        a = _MAX_DELTA_ - a
    }
    if (g > _MAX_DELTA_) {
        g = _MAX_DELTA_ - g
    }
    c.push(c[b - 2] + a);
    c.push(c[b - 1] + g);
    return 0
}
function _char2num_(b) {
    var a = b.charCodeAt(0);
    if (b >= "A" && b <= "Z") {
        return a - "A".charCodeAt(0)
    } else {
        if (b >= "a" && b <= "z") {
            return (26 + a - "a".charCodeAt(0))
        } else {
            if (b >= "0" && b <= "9") {
                return (52 + a - "0".charCodeAt(0))
            } else {
                if (b == "+") {
                    return 62
                } else {
                    if (b == "/") {
                        return 63
                    }
                }
            }
        }
    }
    return - 1
}
var activeCitys = {
    taxi: [131, 289, 257, 340, 75, 332, 179, 218, 224, 315, 132, 268, 233, 288, 236, 158],
    smp: [1, 2, 11, 21, 26, 28, 36, 38, 39, 41],
    smpSug: ["PoiSearch", "BusSearchSta", "BusSearchEnd", "DriveSearchSta", "DriveSearchEnd", "iw_ssn", "iw_esn"]
};
function isActiveCity(a, b) {
    return T.array.some(activeCitys[a],
    function(c) {
        return c == b
    })
}
function openTaxi(i, a, h) {
    var k;
    var d = {
        title: "打车费用",
        content: "",
        width: 458,
        height: 170,
        close: function() {
            delete window.temp.taxiPop
        }
    };
    a = (a && typeof a == "object") ? T.extend({},
    a) : {};
    if (window.temp.taxiPop) {
        window.temp.taxiPop.close()
    } else {
        k = window.temp.taxiPop = new Popup(d);
        k.addConnectDom(i);
        k.render();
        k.hide();
        go("tpl:TaxiPanel", {
            dom: k.content,
            cinfo: {
                query: a.query,
                data: a.data
            }
        });
        var e = k.getDom();
        var j = getPosition(i);
        var c, b;
        if (typeof h == "undefined") {
            b = T.g("route_content")
        } else {
            b = T.g("cbtMiddle")
        }
        c = b.scrollTop;
        var g = window.setInterval(function() {
            if (k._state_ == 1) {
                f();
                window.clearInterval(g)
            } else {
                if (k._state_ == -1) {
                    window.clearInterval(g)
                }
            }
        },
        50)
    }
    function f() {
        var l = j.left - d.width + i.offsetWidth;
        var m = 413;
        if (h) {
            m = 148
        }
        var q = j.top - k.config.height - c + 3;
        var n = j.top;
        var p = document.body.offsetWidth;
        var o = document.body.offsetHeight;
        if ((o - n) > n) {
            e.style.left = 15 + "px";
            e.style.top = j.top + 20 + "px"
        } else {
            e.style.left = 15 + "px";
            e.style.top = q + "px"
        }
    }
} (function() {
	
    var e = {
        config: {
            DETAIL_URL: "http://map.baidu.com/?newmap=1&",
            VCODE_URL: "/v",
            SEND_URL: "/ag/sms/send/",
            READY_URL: "/ag/sms/ready?url=",
            PWD_URL: "https://passport.baidu.com/v2/?login&tpl=ma&u=",
            BMW_INFO: "http://map.baidu.com/?qt=inf&ie=utf-8",
            BMW_DATA_URL: "http://map.baidu.com/car/send"
        },
        spop: null,
        isActive: true,
        del: function(i, h) {
            return T.array.filter(i,
            function(j) {
                return j != h
            })
        },
        isMobilePhone: function(h) {
            return /^(18|13|15|14)\d{9}/.test(h)
        },
        isBMWPhone: function(h) {
            return /^((86)|(\+86))?(18|13|15|14)\d{9}/.test(h)
        },
        isEmpty: function(h) {
            return ! /\S+/.test(h)
        },
        isWord: function(h) {
            return /^[a-zA-Z0-9]{4}$/.test(h)
        },
        encodeHTML: function(h) {
            return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }
    };
    var g = {
        target: null,
        uid: null
    };
    var c = {
        isTitle: false,
        content: "",
        extClass: "loginStyle",
        width: 558,
        height: 468,
        clickClose: false,
        close: function() {
            g.target = null;
            g.uid = null;
            Share.setSmSCode(0);
            var h = window.ModelMgr.mainModel;
            if (h && h.cinfo.sms) {
                h.cinfo.sms = null
            }
        },
        free: function() {
            delete e.spop
        }
    };
    var f = {
        POI: "s=inf%26uid%3D_UID_%26c%3D_CITY_%26newmap%3D1%26it%3D1",
        LINE: "s=bsl%26bsltp%3D0%26uid%3D_UID_%26c%3D_CITY_%26newmap%3D1"
    };
    var a = function(h) {
        switch (parseInt(h, 10)) {
        case POI_TYPE_NORMAL:
            return f.POI;
            break;
        case POI_TYPE_BUSSTOP:
            return f.POI;
            break;
        case POI_TYPE_BUSLINE:
            return f.LINE;
            break;
        case POI_TYPE_SUBSTOP:
            return f.POI;
            break;
        case POI_TYPE_SUBLINE:
            return f.LINE;
            break
        }
    };
    var b = function(h, i, j, k) {
        Share.getLink(function(l) {
            var n = encodeURIComponent(l);
            var m = {
                oldUrl: n
            };
            if ((i && typeof(j) != "undefined")) {
                Share.setSmSCode(i);
                m.curUrl = "&current_url=" + n
            } else {
                m.curUrl = ""
            }
            if ((i && typeof(j) != "undefined")) {
                m.tplUrl = encodeURIComponent(e.config.DETAIL_URL + a(j).replace("_UID_", i).replace("_CITY_", k))
            } else {
                Share.setSmSCode(i);
                m.tplUrl = n
            }
            h && h(m)
        },
        true, {
            sms: true
        })
    };
    var d = function(l, k, m, h, p) {
        addStat(STAT_SHOUJI_SEND, {
            uid: k,
            ct: p
        });
        c.addDom = map.getContainer();
        if (!e.spop) {
            e.spop = new Popup(c);
            e.spop.addConnectDom(l);
            e.spop.render();
            e.spop.hide()
        } else {
            map.getContainer().appendChild(e.spop.main)
        }
        T.on(e.spop.main, "contextmenu",
        function(q) {
            var q = window.event || q;
            stopBubble(q);
            preventDefault(q)
        });
        var i = e.spop.getDom(),
        j = map.getSize(),
        o = j.width <= c.width ? 0 : j.width / 2 - c.width / 2,
        n = j.height <= c.height ? 0 : j.height / 2 - c.height / 2;
        if (c && typeof c.right != "undefined") {
            i.style.right = c.right + "px"
        } else {
            if (c && typeof c.left != "undefined") {
                i.style.left = c.left + "px"
            } else {
                i.style.left = o + "px"
            }
        }
        if (c && typeof c.top != "undefined") {
            i.style.top = c.top + "px"
        } else {
            if (c && typeof c.bottom != "undefined") {
                i.style.top = c.bottom + "px"
            } else {
                i.style.top = n + "px"
            }
        }
        if (l != g.target && (k ? (g.uid != k) : true)) {
            g.target = l;
            g.uid = k ? k: null;
            b(function(q) {
                go("tpl:SmS", {
                    dom: e.spop.content,
                    cinfo: {
                        infoWin: e.spop,
                        tplUrl: q.tplUrl,
                        oldUrl: q.oldUrl,
                        curUrl: q.curUrl,
                        uid: k || "",
                        type: m || 0
                    }
                })
            },
            k, m, h)
        }
        return false
    };
    e.ready = d;
    window.sms = e
})(); (function() {
    var a = {
        version: 1001,
        debug: false,
        initialize: false,
        isopen: false,
        container: null,
        cover: null,
        init: function() {
            var b = this;
            this.switchDebug(this.debug);
            this.initialize = true
        },
        switchDebug: function(b) {
            if (b) {
                this.path = "/shinei/index_uc.html?"
            } else {
                this.path = "/shinei/?"
            }
        },
        open: function(d, e) {
            if (!d) {
                return
            }
            if (this.isopen) {
                return
            }
            if (!this.initialize) {
                this.init()
            }
            e = e || {};
            var i = this;
            var g = {
                qt: "ind",
                level: "1",
                uid: d,
                wd: e.wd
            };
            var c = this.path + "s=" + encodeURIComponent(jsonToQuery(g)) + "&l=2&v=" + new Date().getTime();
            var f = T.dom.create("div", {
                id: "inr_cover"
            });
            var b = T.dom.create("div", {
                id: "inr_box"
            });
            if (T.browser.chrome) {
                b.style.border = "2px solid #000"
            }
            var h = document.createElement("iframe");
            h.name = "inr_iframe";
            h.id = "inr_iframe";
            h.setAttribute("frameborder", "0", 0);
            b.innerHTML = "<img id='inr_logo' src='image/transparent.gif' width=137 height=35 /><span id='inr_loader' title='正在加载中...'></span><span id='inr_close' title='关闭' onclick='InrMgr.close()'></span>";
            b.appendChild(h);
            this.container = b;
            this.framer = h;
            this.cover = f;
            this.isopen = true;
            this.bind(h, c);
            if (e.code) {
                addStat(e.code)
            }
            if (e.fr == "label") {
                MapHunter.record("ma", 5, {
                    uid: d
                })
            }
        },
        bind: function(g, c) {
            var f = this,
            b = this.container,
            e = this.cover;
            if (T.browser.ie || T.browser.opera) {
                this.hideFramer()
            }
            if (T.browser.ie) {
                document.body.appendChild(b);
                document.body.appendChild(e);
                g.src = c
            } else {
                g.src = c;
                document.body.appendChild(e);
                document.body.appendChild(b);
                window.setTimeout(function() {
                    e.style.opacity = "0.4"
                },
                0)
            }
            this.setSize();
            this._innerFun = function() {
                f.setSize()
            };
            T.on(window, "resize", this._innerFun);
            var d = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
            T.on(window.document, d,
            function(h) {
                if (h.keyCode == 27) {
                    f.close()
                }
                f._eseFun = arguments.callee
            })
        },
        setSize: function() {
            if (this.container && this.cover) {
                var f = this.cover,
                c = this.container,
                e = getClientSize(),
                d = e.width - 100,
                b = e.height - 100;
                c.style.width = (d > 700 ? d: 700) + "px";
                c.style.height = (b > 300 ? b: 300) + "px";
                if (T.browser.ie == 6) {
                    f.style.width = e.width + "px";
                    f.style.height = e.height + "px"
                }
            }
        },
        addState: function(b) {
            switch (b) {
            case "cate":
                addStat(STAT_INR_CATE_CLICK);
                break;
            case "floor":
                addStat(STAT_INR_FLOOR_CLICK);
                break;
            case "drag":
                addStat(STAT_INR_DRAG_COUNT);
                break;
            case "zoom":
                addStat(STAT_INR_ZOOM_COUNT);
                break
            }
        },
        close: function() {
            var b = this;
            this.isopen = false;
            if (T.browser.ie) {
                b.cover && document.body.removeChild(b.cover);
                b.container && document.body.removeChild(b.container);
                b.clear()
            } else {
                b.cover.style.opacity = 0;
                b.container && document.body.removeChild(b.container);
                b.container = null;
                window.setTimeout(function() {
                    b.cover && document.body.removeChild(b.cover);
                    b.clear()
                },
                250)
            }
        },
        clear: function() {
            if (this._innerFun) {
                T.un(window, "resize", this._innerFun);
                this._innerFun = null
            }
            if (this._eseFun) {
                var b = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
                T.un(window.document, b, this._eseFun);
                this._eseFun = null
            }
            this.container = null;
            this.cover = null;
            this.framer = null
        },
        showFramer: function() {
            this.framer.style.visibility = "visible"
        },
        hideFramer: function() {
            this.framer.style.visibility = "hidden"
        },
        showLoader: function() {
            T.g("inr_loader").style.visibility = "visible"
        },
        hideLoader: function() {
            T.g("inr_loader").style.visibility = "hidden"
        }
    };
    window.InrMgr = a
})();
var GR_ICON = new BMap.Icon(A_J_MARKER_IMG, new BMap.Size(15, 17), {
    offset: new BMap.Size(7, 20),
    imageOffset: new BMap.Size( - 152, -176),
    infoWindowOffset: new BMap.Size(7, 2)
});
function GenRequest(a) {
    T.lang.Class.call(this);
    this.areaData = {
        "131": {
            name: "北京",
            geo: "12|12957244.92;4828090.32",
            district: [{
                n: "海淀",
                geo: "13|12947113.84;4833237.81",
                b: [{
                    n: "上地",
                    geo: "15|12946713.00;4845200.00"
                },
                {
                    n: "万柳",
                    geo: "16|12946807.94;4837741.22"
                },
                {
                    n: "清河",
                    geo: "16|12952427.16;4843134.54"
                },
                {
                    n: "中关村",
                    geo: "15|12948753.20;4836350.42"
                },
                {
                    n: "五道口",
                    geo: "16|12951922.33;4838323.61"
                },
                {
                    n: "西二旗",
                    geo: "17|12948273.14;4847122.01"
                },
                {
                    n: "公主坟",
                    geo: "15|12948296.79;4825356.30"
                },
                {
                    n: "魏公村",
                    geo: "16|12949712.21;4832574.55"
                },
                {
                    n: "蓟门桥",
                    geo: "16|12953345.73;4834374.02"
                },
                {
                    n: "西三旗",
                    geo: "16|12954178.54;4847954.43"
                },
                {
                    n: "玉泉路",
                    geo: "16|12942085.81;4825707.07"
                },
                {
                    n: "甘家口",
                    geo: "16|12950691.53;4827744.07"
                },
                {
                    n: "紫竹桥",
                    geo: "16|12948441.70;4830729.41"
                },
                {
                    n: "北太平庄",
                    geo: "17|12953830.92;4832741.76"
                }]
            },
            {
                n: "朝阳",
                geo: "13|12969038.76;4834759.95",
                b: [{
                    n: "望京",
                    geo: "15|12965631.42;4838691.50"
                },
                {
                    n: "国贸",
                    geo: "16|12965674.90;4825982.15"
                },
                {
                    n: "劲松",
                    geo: "16|12965728.85;4822573.01"
                },
                {
                    n: "马甸",
                    geo: "16|12956086.05;4834704.68"
                },
                {
                    n: "安贞",
                    geo: "16|12958871.01;4834563.01"
                },
                {
                    n: "CBD",
                    geo: "15|12966858.81;4825910.40"
                },
                {
                    n: "酒仙桥",
                    geo: "16|12968606.14;4834073.87"
                },
                {
                    n: "团结湖",
                    geo: "16|12965544.18;4829196.01"
                },
                {
                    n: "三元桥",
                    geo: "16|12964870.75;4832882.36"
                },
                {
                    n: "潘家园",
                    geo: "16|12964595.23;4820906.53"
                },
                {
                    n: "立水桥",
                    geo: "15|12959965.15;4846712.47"
                },
                {
                    n: "大望路",
                    geo: "16|12967070.77;4825412.42"
                },
                {
                    n: "奥林匹克公园",
                    geo: "16|12957966.51;4840428.21"
                }]
            },
            {
                n: "西城",
                geo: "13|12951634.63;4826598.67",
                b: [{
                    n: "西单",
                    geo: "15|12955433.94;4826160.19"
                },
                {
                    n: "西直门",
                    geo: "15|12953250.67;4830617.23"
                },
                {
                    n: "木樨地",
                    geo: "17|12951105.47;4825788.95"
                },
                {
                    n: "金融街",
                    geo: "17|12953795.02;4826858.36"
                },
                {
                    n: "什刹海",
                    geo: "17|12956797.07;4829610.36"
                },
                {
                    n: "大栅栏",
                    geo: "16|12957439.12;4824046.78"
                },
                {
                    n: "广安门",
                    geo: "16|12953118.14;4823129.45"
                },
                {
                    n: "宣武门",
                    geo: "16|12955597.69;4824605.61"
                },
                {
                    n: "白纸坊",
                    geo: "17|12954154.45;4821876.54"
                }]
            },
            {
                n: "东城",
                geo: "13|12961059.01;4831072.01",
                b: [{
                    n: "王府井",
                    geo: "15|12959752.83;4826986.53"
                },
                {
                    n: "东直门",
                    geo: "15|12962931.06;4830058.56"
                },
                {
                    n: "雍和宫",
                    geo: "16|12960413.72;4831524.50"
                },
                {
                    n: "安定门",
                    geo: "17|12959286.24;4831372.30"
                },
                {
                    n: "朝阳门",
                    geo: "17|12962203.85;4828061.36"
                },
                {
                    n: "天坛",
                    geo: "16|12959164.13;4821715.59"
                },
                {
                    n: "前门",
                    geo: "15|12958252.85;4824539.31"
                },
                {
                    n: "崇文门",
                    geo: "16|12960672.05;4824214.88"
                },
                {
                    n: "磁器口",
                    geo: "17|12960497.84;4823578.05"
                }]
            },
            {
                n: "丰台",
                geo: "14|12945986.03;4815749.69",
                b: [{
                    n: "青塔",
                    geo: "16|12943809.90;4823670.16"
                },
                {
                    n: "方庄",
                    geo: "16|12961530.26;4819065.53"
                },
                {
                    n: "木樨园",
                    geo: "15|12958983.87;4818595.49"
                },
                {
                    n: "玉泉营",
                    geo: "16|12952111.53;4816989.53"
                },
                {
                    n: "丽泽桥",
                    geo: "15|12949054.77;4819608.82"
                },
                {
                    n: "马家堡",
                    geo: "16|12955509.24;4817810.47"
                },
                {
                    n: "岳各庄",
                    geo: "16|12944883.28;4821603.45"
                },
                {
                    n: "菜户营",
                    geo: "16|12952495.33;4820145.53"
                },
                {
                    n: "看丹桥",
                    geo: "16|12945862.40;4816176.13"
                },
                {
                    n: "北大地",
                    geo: "16|12945408.91;4817990.76"
                }]
            },
            {
                n: "石景山",
                geo: "14|12938760.75;4825395.38",
                b: [{
                    n: "古城",
                    geo: "16|12934902.57;4826268.68"
                },
                {
                    n: "鲁谷",
                    geo: "16|12939157.90;4824572.75"
                },
                {
                    n: "苹果园",
                    geo: "16|12934784.38;4828718.97"
                }]
            }]
        },
        "289": {
            name: "上海",
            geo: "12|13524118.26;3642780.37",
            district: [{
                n: "浦东",
                geo: "13|13531166.07;3640140.64",
                b: [{
                    n: "张江",
                    geo: "16|13537075.76;3637330.26"
                },
                {
                    n: "金桥",
                    geo: "17|13535196.62;3644608.86"
                },
                {
                    n: "陆家嘴",
                    geo: "15|13525956.70;3642033.54"
                },
                {
                    n: "外高桥",
                    geo: "17|13535462.40;3654554.04"
                },
                {
                    n: "世纪公园",
                    geo: "16|13531736.19;3640558.04"
                }]
            },
            {
                n: "闵行",
                geo: "14|13513072.05;3625912.94",
                b: [{
                    n: "莘庄",
                    geo: "16|13511760.46;3626943.97"
                },
                {
                    n: "梅陇",
                    geo: "16|13518014.99;3624575.97"
                },
                {
                    n: "龙柏",
                    geo: "16|13509618.62;3632972.79"
                },
                {
                    n: "金虹桥",
                    geo: "16|13514633.14;3634766.53"
                },
                {
                    n: "静安新城",
                    geo: "16|13513071.00;3631659.49"
                }]
            },
            {
                n: "黄浦",
                geo: "14|13524524.13;3641254.81",
                b: [{
                    n: "老西门",
                    geo: "17|13524540.44;3639233.95"
                },
                {
                    n: "城隍庙",
                    geo: "17|13525308.92;3640432.86"
                },
                {
                    n: "人民广场",
                    geo: "17|13523121.37;3641075.69"
                },
                {
                    n: "南京东路",
                    geo: "15|13524688.48;3642066.80"
                },
                {
                    n: "黄埔滨江",
                    geo: "16|13526148.14;3661003.86"
                }]
            },
            {
                n: "徐汇",
                geo: "14|13519144.68;3635725.02",
                b: [{
                    n: "华泾",
                    geo: "16|13521272.61;3626916.49"
                },
                {
                    n: "龙华",
                    geo: "16|13521272.61;3626916.49"
                },
                {
                    n: "徐家汇",
                    geo: "15|13520169.05;3636101.16"
                },
                {
                    n: "斜土路",
                    geo: "17|13522142.76;3637307.38"
                },
                {
                    n: "淮海西路",
                    geo: "15|13518091.10;3637102.79"
                },
                {
                    n: "上海南站",
                    geo: "16|13518333.95;3631173.78"
                }]
            },
            {
                n: "普陀",
                geo: "14|13514730.45;3643556.45",
                b: [{
                    n: "曹杨",
                    geo: "16|13515946.78;3642063.11"
                },
                {
                    n: "真如",
                    geo: "16|13515202.14;3644571.75"
                },
                {
                    n: "桃浦",
                    geo: "16|13510985.84;3647432.98"
                },
                {
                    n: "中山北路",
                    geo: "16|13518681.33;3643662.39"
                }]
            },
            {
                n: "闸北",
                geo: "14|13521692.76;3643263.97",
                b: [{
                    n: "新客站",
                    geo: "16|13521026.26;3643428.84"
                },
                {
                    n: "汶水路",
                    geo: "17|13520623.94;3649241.47"
                },
                {
                    n: "闸北公园",
                    geo: "16|13521745.42;3646348.04"
                }]
            },
            {
                n: "静安",
                geo: "14|13520291.20;3640808.74",
                b: [{
                    n: "静安寺",
                    geo: "17|13519889.88;3640477.70"
                },
                {
                    n: "江宁路",
                    geo: "17|13520404.05;3642405.09"
                },
                {
                    n: "南京西路",
                    geo: "15|13520885.84;3640159.62"
                }]
            },
            {
                n: "卢湾",
                geo: "14|13552952.69;3639503.41",
                b: [{
                    n: "新天地",
                    geo: "17|13523472.35;3639700.83"
                },
                {
                    n: "五里桥",
                    geo: "17|13524159.40;3637294.17"
                },
                {
                    n: "淮海中路",
                    geo: "15|13521330.51;3639221.16"
                },
                {
                    n: "复兴公园",
                    geo: "17|13522723.30;3639438.60"
                }]
            },
            {
                n: "长宁",
                geo: "14|13517715.87;3639840.25",
                b: [{
                    n: "虹桥",
                    geo: "16|13516056.26;3636833.81"
                },
                {
                    n: "新华路",
                    geo: "17|13517972.27;3637879.92"
                },
                {
                    n: "动物园",
                    geo: "16|13510917.73;3636374.14"
                },
                {
                    n: "中山公园",
                    geo: "16|13517132.49;3640080.14"
                }]
            },
            {
                n: "虹口",
                geo: "14|13526844.26;3615481.51",
                b: [{
                    n: "北外滩",
                    geo: "16|13526567.13;3644065.97"
                },
                {
                    n: "临平路",
                    geo: "16|13525746.95;3645247.60"
                },
                {
                    n: "曲阳地区",
                    geo: "16|13525119.49;3647437.78"
                },
                {
                    n: "鲁迅公园",
                    geo: "16|13524378.89;3646471.82"
                },
                {
                    n: "四川北路",
                    geo: "16|13524291.09;3644107.87"
                }]
            }]
        },
        "257": {
            name: "广州",
            geo: "12|12613487.11;2629614.08",
            district: [{
                n: "越秀区",
                geo: "14|12609653.72;2631444.87",
                b: [{
                    n: "北京路",
                    geo: "15|12609921.42;2630516.50"
                },
                {
                    n: "火车站",
                    geo: "16|12607292.91;2635078.16"
                },
                {
                    n: "东风中路",
                    geo: "17|12610008.63;2631742.11"
                },
                {
                    n: "人民北路",
                    geo: "17|12608540.74;2632277.84"
                },
                {
                    n: "越秀公园",
                    geo: "17|12609506.60;2632746.99"
                },
                {
                    n: "五羊新城",
                    geo: "17|12614816.44;2630343.24"
                }]
            },
            {
                n: "天河区",
                geo: "14|12620269.51;2630868.62",
                b: [{
                    n: "龙口",
                    geo: "17|12617603.09;2632288.42"
                },
                {
                    n: "天河城",
                    geo: "15|12615877.32;2631857.12"
                },
                {
                    n: "天河公园",
                    geo: "16|12620735.78;2631328.52"
                },
                {
                    n: "珠江新城",
                    geo: "16|12615713.05;2630233.93"
                },
                {
                    n: "广州东站",
                    geo: "16|12616112.52;2633814.59"
                }]
            },
            {
                n: "白云区",
                geo: "14|12609672.47;2637099.16",
                b: [{
                    n: "三元里",
                    geo: "16|12609304.74;2635244.67"
                },
                {
                    n: "同德围",
                    geo: "16|12606128.16;2635802.00"
                },
                {
                    n: "罗冲围",
                    geo: "16|12604776.42;2633800.22"
                },
                {
                    n: "广园新村",
                    geo: "17|12609700.37;2635342.78"
                }]
            },
            {
                n: "荔湾区",
                geo: "14|12607145.84;2631022.83",
                b: [{
                    n: "芳村",
                    geo: "17|12606198.49;2628080.96"
                },
                {
                    n: "沙面",
                    geo: "17|12607601.98;2628867.20"
                },
                {
                    n: "上下九",
                    geo: "15|12607589.15;2629684.08"
                },
                {
                    n: "中山六路",
                    geo: "17|12608689.14,2630992.22"
                }]
            },
            {
                n: "番禺区",
                geo: "14|12622748.85;2608197.02",
                b: [{
                    n: "市桥",
                    geo: "17|12620790.05;2609599.36"
                },
                {
                    n: "大石",
                    geo: "17|12614260.15;2618816.01"
                },
                {
                    n: "大学城",
                    geo: "17|12623862.31;2622919.27"
                }]
            }]
        },
        "315": {
            name: "南京市",
            geo: "12|13222458.63;3747938.29",
            district: [{
                n: "玄武区",
                geo: "14|13230347.14;3749837.66"
            },
            {
                n: "白下区",
                geo: "14|13228226.06;3744427.14"
            },
            {
                n: "秦淮区",
                geo: "14|13226816.42;3741500.47"
            },
            {
                n: "建邺区",
                geo: "14|13215252.54;3742094.77"
            },
            {
                n: "鼓楼区",
                geo: "14|13221009.51;3749424.41"
            },
            {
                n: "下关区",
                geo: "14|13221843.96;3754736.22"
            },
            {
                n: "浦口区",
                geo: "14|13199198.21;3748177.07"
            },
            {
                n: "栖霞区",
                geo: "14|13243125.35;3762611.48"
            },
            {
                n: "雨花台区",
                geo: "14|13216214.00;3734524.21"
            },
            {
                n: "江宁区",
                geo: "14|13228842.18;3722703.75"
            },
            {
                n: "六合区",
                geo: "14|13230261.28;3792909.99"
            }]
        },
        "75": {
            name: "成都市",
            geo: "12|11584914.30;3569251.03",
            district: [{
                n: "锦江区",
                geo: "14|11591186.76;3559770.53"
            },
            {
                n: "青羊区",
                geo: "14|11578717.92;3569732.41"
            },
            {
                n: "金牛区",
                geo: "14|11584185.53;3576423.98"
            },
            {
                n: "武侯区",
                geo: "14|11578974.53;3560871.54"
            },
            {
                n: "成华区",
                geo: "14|11593382.86;3570594.94"
            },
            {
                n: "龙泉驿区",
                geo: "14|11609193.36;3558367.55"
            },
            {
                n: "青白江区",
                geo: "14|11619751.1;3584906.1"
            },
            {
                n: "新都区",
                geo: "14|11587504.75;3587289.37"
            },
            {
                n: "温江区",
                geo: "14|11558526.74;3575216.79"
            }]
        },
        "179": {
            name: "杭州市",
            geo: "12|13382905.27;3515188.13",
            district: [{
                n: "上城区",
                geo: "14|13378354.38;3513336.64"
            },
            {
                n: "下城区",
                geo: "14|13379553.66;3521746.23"
            },
            {
                n: "江干区",
                geo: "14|13386241.03;3523198.59"
            },
            {
                n: "拱墅区",
                geo: "14|13375222.15;3524609.55"
            },
            {
                n: "西湖区",
                geo: "14|13369527.36;3513905.55"
            },
            {
                n: "滨江区",
                geo: "14|13382016.91;3507473.7"
            },
            {
                n: "余杭区",
                geo: "14|13365128.26;3531409.42"
            }]
        },
        "268": {
            name: "郑州市",
            geo: "12|12651558.14;4106269.36",
            district: [{
                n: "中原区",
                geo: "14|12641276.29;4109353.61"
            },
            {
                n: "二七区",
                geo: "14|12647866.51;4098376.08"
            },
            {
                n: "管城回族区",
                geo: "14|12659597.41;4099850.32"
            },
            {
                n: "金水区",
                geo: "14|12658055.64;4111773.15"
            },
            {
                n: "上街区",
                geo: "14|12612892.48;4114838.02"
            }]
        },
        "233": {
            name: "西安市",
            geo: "12|12128735.39;4041877.19",
            district: [{
                n: "新城区",
                geo: "14|12133014.6;4041028.92"
            },
            {
                n: "碑林区",
                geo: "14|12130200.44;4038885.21"
            },
            {
                n: "灞桥区",
                geo: "14|12146063.2;4045379.67"
            },
            {
                n: "未央区",
                geo: "14|12125770.22;4049057.83"
            },
            {
                n: "雁塔区",
                geo: "14|12127142.63;4034318.79"
            },
            {
                n: "阎良区",
                geo: "14|12168846.34;4096800.19"
            },
            {
                n: "临潼区",
                geo: "14|12168516.35;4065835.88"
            },
            {
                n: "长安区",
                geo: "14|12119958.65;4013632.03"
            }]
        }
    };
    this.json = null;
    this.gInfo = {};
    this.qWord = "";
    this.qCity = -1;
    this.listeners = {};
    this.isGRequest = false;
    this.isableGenUIRequest = true;
    this.isableGRequestByMapChanged = true;
    this.genDataLst = {};
    this.spotId = "";
    this.genDataIdLis = [];
    this.isableGenMDRequest = false;
    this.curTileMapId = "";
    this.mouseOnTileTime = null;
    this.spotOnId = "";
    this.gssSubmitId = "";
    this.mdLabel1 = null;
    this.mdMarker1 = null;
    this.mdLabel2 = null;
    this.mdMarker2 = null;
    this.toolAreaId = "GR_Select";
    this.GRMapId = "";
    this.areaCity = "";
    this.areaDistrict = "";
    this.GRCircleRadius = 1000;
    this.isGRCircleShow = true;
    this.spotOverUid = "";
    this.isClearBeforeSend = true;
    this.queryStr = "";
    this.uiPermit = 1000;
    this.openedMarker = null;
    this.curSearchCPt = null;
    this.types = {
        "36": {
            t: 1
        },
        "37": {
            t: 2
        },
        "38": {
            t: 1
        },
        "39": {
            t: 1
        },
        "40": {
            t: 2
        }
    };
    this.ifShowCustonTip = false;
    this.disabledGR = false;
    this.initialize()
}
T.extend(GenRequest.prototype, {
    initialize: function(a) {
        for (var b in a) {
            if (typeof(a[b]) != "undefined") {
                this[b] = a[b]
            }
        }
        this.clearCache();
        this.addGRTool();
        if (navigator.cookieEnabled && T.cookie.get("showgrtip") != "1") {
            this.ifShowCustonTip = true;
            this.customTip1 = '<div id="GR_CustomTip1" class="GR_Tip GR_Tip1"><div class="tip">查找到当前地图内的所有结果，<br />您可缩放或移动地图进行筛选。</div><button onclick="Instance(\'' + this.guid + "').removeTip(T.G('GR_CustomTip1'))\"></button></div>";
            this.customTip2 = '<div  id="GR_CustomTip2" class="GR_Tip GR_Tip2"><div class="tip">您可在此选择城区及对应地段，快速定位</div><button onclick="Instance(\'' + this.guid + "').removeTip(T.G('GR_CustomTip2'))\"></button><div class=\"arrow\"></div></div>";
            T.cookie.set("showgrtip", "1", {
                domain: "map.baidu.com",
                expires: 946080000000
            })
        }
    },
    setGRData: function(a, b) {
        if (this.disabledGR) {
            this.clearCache();
            this.clearGRMap();
            return
        }
        if (!a) {
            return
        }
        this.json = a;
        this.gInfo = b || {};
        this.clearListener();
        this.resetStatus()
    },
    resetStatus: function() {
        var a = this.json.result.type.toString();
        if (!this.types[a]) {
            return
        }
        this.isGRequest = true;
        if (this.types[a].t == 1) {
            this.addGRMap();
            this.addMDRequest();
            this.showGRTool(this.json.current_city.code);
            this.addTip()
        } else {
            if (this.types[a].t == 2) {
                this.clearGRMap();
                this.clearListener();
                this.hideGRTool()
            }
        }
        this.addMDEvent();
        this.curSearchCPt = map.centerPoint
    },
    addTip: function() {
        if (this.ifShowCustonTip) {
            var a = getClientSize().width;
            if (sideBar.status == "open") {
                a -= 310
            }
            this.ifShowCustonTip = false;
            if (this.customTip1) {
                beforeEndHTML(document.body, this.customTip1)
            }
            T.G("GR_CustomTip1").style.left = a / 2 + 204 + "px";
            if (map.fullScreenMode) {
                T.G("GR_CustomTip1").style.top = "39px"
            }
        }
    },
    removeTip: function(a) {
        if (a) {
            if (a.id && a.id == "GR_CustomTip1" && this.noRemoveTip1) {
                this.noRemoveTip1 = false;
                return
            }
            a.parentNode.removeChild(a)
        }
    },
    clearBeforeSendAtBase: function() {
        if (this.isClearBeforeSend) {
            this.clearListener()
        } else {
            this.isClearBeforeSend = true
        }
    },
    clearAfterGetAtBase: function(c) {
        var f = {
            "36": "poiSearch",
            "38": "circleSearch",
            "39": "searchInView"
        };
        var b = {
            "18": "busLine",
            "6": "busLineStop",
            "27": "rightClick"
        };
        var e = c.result.type;
        if (e == 2 && c.content && c.content.error == 0) {
            return
        }
        if (!e) {
            return
        }
        if (!f[e]) {
            if (b[e]) {
                return
            }
            var d = c.result.return_query || "";
            var a = c.result.wd2 || "";
            if (this.qWord != (d + "_" + a) || this.qCity != modelConfig.cityCode) {
                this.genDataLst = {};
                this.genDataIdLis = []
            }
            this.qWord = "";
            this.qCity = -1;
            this.clearGRMap();
            this.hideGRTool();
            this.openedMarker = null;
            if (T.G("GR_CustomTip2")) {
                this.removeTip(T.G("GR_CustomTip2"));
                this.notShowTip2 = true
            }
        }
    },
    removeTipForMC: function(a) {
        if (!a || !this.areaData[a]) {
            if (T.G("GR_CustomTip2")) {
                this.removeTip(T.G("GR_CustomTip2"))
            }
        }
    },
    clearCache: function() {
        var a = this;
        a.isableGenUIRequest = true;
        a.isableGRequestByMapChanged = true;
        a.isGRequest = false;
        a.genDataLst = {};
        a.genDataIdLis = [];
        a.isableGenMDRequest = false;
        a.curTileMapId = "";
        a.mouseOnTileTime = null;
        a.spotOnId = "";
        a.gssSubmitId = "";
        a.spotOverUid = "";
        if (a.mdLabel1) {
            a.mdLabel1.hide()
        }
        if (a.mdLabel2) {
            a.mdLabel2.hide()
        }
        if (a.mdMarker1) {
            a.mdMarker1.hide()
        }
        if (a.mdMarker2) {
            a.mdMarker2.hide()
        }
        a.clearListener();
        if (a.spotId != "") {
            map.removeSpots(a.spotId);
            a.spotId = ""
        }
    },
    checkEventBind: function(c, d, b, a) {
        if (c) {
            if (d[b] && d[b] == a) {
                return false
            } else {
                d[b] = a;
                return true
            }
        } else {
            if (d[b] && d[b] == a) {
                d[b] = "";
                delete d[b];
                return true
            } else {
                return false
            }
        }
    },
    clearListener: function(a) {
        var b = this;
        if (!a || a == "md") {
            if (b.checkEventBind(false, b.listeners, "map_mousemove", "addMouseOnMDEvent")) {
                setTimeout(function() {
                    map.removeEventListener("mousemove", window.addMouseOnMDEvent)
                },
                0)
            }
            if (b.checkEventBind(false, b.listeners, "map_spotmouseover", "spotMouseOverMD")) {
                setTimeout(function() {
                    map.removeEventListener("spotmouseover", window.spotMouseOverMD)
                },
                5)
            }
            if (b.checkEventBind(false, b.listeners, "map_spotmouseout", "spotMouseOutMD2")) {
                setTimeout(function() {
                    map.removeEventListener("spotmouseout", window.spotMouseOutMD2)
                },
                10)
            }
        }
        if (!a || a == "ui") {
            if (b.checkEventBind(false, b.listeners, "map_load", "bindGenResLoad")) {
                map.removeEventListener("load", window.bindGenResLoad)
            }
            if (b.checkEventBind(false, b.listeners, "map_moveend", "bindGenResMove")) {
                map.removeEventListener("moveend", window.bindGenResMove)
            }
            if (b.checkEventBind(false, b.listeners, "map_zoomend", "bindGenResZoom")) {
                map.removeEventListener("zoomend", window.bindGenResZoom)
            }
            if (b.checkEventBind(false, b.listeners, "map_mapcontainerresize", "bindGenResResize")) {
                map.removeEventListener("mapcontainerresize", window.bindGenResResize)
            }
        }
    },
    clearGRMap: function() {
        if (this.GRMapId == "") {
            return
        }
        var a = map.getTileLayer(this.GRMapId);
        if (a) {
            map.removeTileLayer(a);
            this.GRMapId = "";
            this.qWord = "";
            this.qCity = -1;
            this.genDataLst = {};
            this.genDataIdLis = []
        }
    },
    addGRMap: function() {
        var g = this;
        if (!g.json) {
            return
        }
        var e = g.json.result.return_query || "";
        var c = g.json.result.wd2 || "";
        if (!window._getPlaceParam) {
            window._getPlaceParam = function(j) {
                var l = j.place_info,
                h = false;
                if (l) {
                    for (var i in l) {
                        if (/_section$/.test(i) && l[i] != _getPlaceParam[i]) {
                            _getPlaceParam[i] = l[i];
                            h = true
                        }
                    }
                }
                return h
            }
        }
        if (g.qWord != (e + "_" + c) || g.qCity != modelConfig.cityCode || ( !! place.result && _getPlaceParam(g.json))) {
            g.clearGRMap();
            if (g.json.result.type == 38 && map.zoomLevel < 11) {
                return
            }
            g.qWord = e + "_" + c;
            g.qCity = modelConfig.cityCode;
            var f = new BMap.Bounds( - 21364736, -10616832, 23855104, 15859712);
            var d = new BMap.Copyright(f);
            var b = false;
            var a = new BMap.TileLayer({
                copyright: d,
                transparentPng: b
            });
            a.zIndex = 1;
            a.getTilesUrl = function(s, j) {
                var l = BMap.MapType[this.getMapType()];
                if (typeof l != "object") {
                    return null
                }
                var r = l.baseUnits * Math.pow(2, (18 - j));
                var u = parseInt(s.lng / r);
                var p = parseInt(s.lat / r);
                var k = "";
                var v = ["http://gss0.map.baidu.com", "http://gss1.map.baidu.com", "http://gss2.map.baidu.com", "http://gss3.map.baidu.com"];
                var n = Math.abs(u + p) % v.length;
                k = modelConfig.DATA_URL + "bkg_png&c=" + modelConfig.cityCode + "&ie=utf-8";
                if (!place.urlArr) {
                    k += "&wd=" + encodeURIComponent(g.json.result.return_query)
                } else {
                    k += "&wd=" + encodeURIComponent(g.json.result.return_query) + place.urlArr
                }
                if ( !! g.json.result.wd2) {
                    k += "&wd_h=" + encodeURIComponent(g.json.result.wd2)
                }
                var q = map.getBounds();
                var o = Math.min(q.minX, q.maxX);
                var i = Math.max(q.minX, q.maxX);
                var m = Math.min(q.minY, q.maxY);
                var h = Math.max(q.minY, q.maxY);
                var t = escape("(") + o + "," + m + ";" + i + "," + h + escape(")");
                k += "&l=" + j + "&xy=" + u + "_" + p + "&b=" + t + "&t=" + new Date().getTime();
                if (b && T.browser.ie > 5 && T.browser.ie < 7) {
                    k = encodeURIComponent(k)
                }
                k = v[n] + k;
                return k
            };
            map.addTileLayer(a);
            g.GRMapId = a.getMapType()
        }
    },
    addMDRequest: function() {
        var me = this;
        if (!window.addMouseOnMDEvent) {
            window.addMouseOnMDEvent = function(e) {
                var tPOI = map.getTileId(e.point, map.getZoom());
                if (!tPOI.row || !tPOI.column || !tPOI.level) {
                    return
                }
                var tPoiId = tPOI.level + "_" + tPOI.row + "_" + tPOI.column;
                me.curTileMapId = tPoiId;
                if ( !! me.genDataLst[tPoiId]) {
                    if (me.spotOnId != tPoiId) {
                        if (me.spotId != "") {
                            map.removeSpots(me.spotId)
                        }
                        me.spotId = map.addSpots(me.genDataLst[tPoiId]);
                        me.spotOnId = tPoiId;
                        var idIndex = -1;
                        for (var i = 0,
                        n = me.genDataIdLis.length; i < n; i++) {
                            if (tPoiId == me.genDataIdLis[i]) {
                                idIndex = i;
                                break
                            }
                        }
                        if (idIndex >= 0) {
                            me.genDataIdLis.splice(idIndex, idIndex);
                            me.genDataIdLis.push(tPoiId)
                        }
                    }
                } else {
                    if ( !! me.json.result.return_query && me.gssSubmitId != (tPOI.level + "_" + tPOI.row + "_" + tPOI.column)) {
                        me.gssSubmitId = tPOI.level + "_" + tPOI.row + "_" + tPOI.column;
                        var url = [];
                        url.push("http://gss3.map.baidu.com/" + modelConfig.DATA_URL);
                        if (!place.urlArr) {
                            url.push("bkg_data&c=" + modelConfig.cityCode + "&ie=utf-8&wd=" + encodeURIComponent(me.json.result.return_query))
                        } else {
                            url.push("bkg_data&c=" + modelConfig.cityCode + "&ie=utf-8&wd=" + encodeURIComponent(me.json.result.return_query) + place.urlArr)
                        }
                        if ( !! me.json.result.wd2) {
                            url.push("&wd_h=" + encodeURIComponent(me.json.result.wd2))
                        }
                        var b = map.getBounds();
                        var bs = "(" + b.minX + "," + b.minY + ";" + b.maxX + "," + b.maxY + ")";
                        url.push("&l=" + map.zoomLevel + "&xy=" + tPOI.row + "_" + tPOI.column + "&callback=getMData&b=" + bs);
                        scriptRequest(url.join(""))
                    }
                }
            }
        }
        if (!window.spotMouseOverMD) {
            window.spotMouseOverMD = function(e) {
                var spotArr = e.spots;
                if (!spotArr || spotArr.length < 1 || !(spotArr[0].tag) || spotArr[0].tag != "GR_DATA") {
                    return
                }
                if (me.json && me.json.content) {
                    for (var i = 0,
                    n = me.json.content.length; i < n; i++) {
                        for (var j = 0,
                        nn = spotArr.length; j < nn; j++) {
                            if (spotArr[j].userdata.uid == me.json.content[i].uid) {
                                return
                            }
                        }
                    }
                }
                var tempMarker = null,
                tempLabel = null,
                mindex = 0;
                if (me.onMarker && me.onMarker === me.mdMarker1) {
                    tempMarker = me.mdMarker2;
                    tempLabel = me.mdLabel2;
                    mindex = 2
                } else {
                    tempMarker = me.mdMarker1;
                    tempLabel = me.mdLabel1;
                    mindex = 1
                }
                if (tempMarker && tempMarker.map) {
                    tempMarker.hide();
                    tempMarker.setPoint(spotArr[0].pt);
                    tempMarker.show();
                    me.spotOverUid = spotArr[0].userdata.uid
                } else {
                    tempMarker = new BMap.Marker(spotArr[0].pt, {
                        icon: GR_ICON,
                        zIndexFixed: true,
                        baseZIndex: 3000000
                    });
                    me.spotOverUid = spotArr[0].userdata.uid;
                    map.addOverlay(tempMarker);
                    eval("me.mdMarker" + mindex + " = tempMarker");
                    tempMarker.addEventListener("click", window.spotClickMD);
                    tempMarker.addEventListener("mouseout", window.spotMouseOutMD)
                }
                var laStr = [];
                for (var i = 0,
                n = spotArr.length; i < n; i++) {
                    laStr.push(spotArr[i].userdata.name)
                }
                if (tempLabel && tempLabel.map) {
                    if (!tempMarker.getLabel()) {
                        tempMarker.setLabel(tempLabel)
                    }
                    tempLabel.hide();
                    tempLabel.setContent(laStr.join("<br />"));
                    tempLabel.show()
                } else {
                    tempLabel = new BMap.Label(laStr.join("<br />"), {
                        offset: new BMap.Size(10, -24)
                    });
                    tempMarker.setLabel(tempLabel);
                    eval("me.mdLabel" + mindex + " = tempLabel");
                    tempLabel.setStyle({
                        backgroundColor: "#FFFFD5",
                        borderColor: "#808080"
                    })
                }
            }
        }
        if (!window.spotMouseOutMD) {
            window.spotMouseOutMD = function(e) {
                me.mdLabel1 && me.mdLabel1.hide();
                me.mdLabel2 && me.mdLabel2.hide();
                if (me.onMarker === this) {
                    return
                }
                if (map.temp.infoWin && map.temp.infoWin.isOpen() == true) {
                    if (map.temp.infoWin.overlay === this) {
                        return
                    } else {
                        this.hide()
                    }
                } else {
                    this.hide();
                    me.spotOverUid = ""
                }
            }
        }
        if (!window.spotMouseOutMD2) {
            window.spotMouseOutMD2 = function() {
                var tempMarker = me.mdMarker2;
                if (tempMarker && tempMarker.map) {
                    if (!map.temp.infoWin || map.temp.infoWin.isOpen() == false || map.temp.infoWin.overlay !== tempMarker) {
                        if (me.onMarker && me.onMarker === tempMarker) {
                            return
                        } else {
                            tempMarker.hide()
                        }
                    }
                }
                tempMarker = me.mdMarker1;
                if (tempMarker && tempMarker.map) {
                    if (!map.temp.infoWin || map.temp.infoWin.isOpen() == false || map.temp.infoWin.overlay !== tempMarker) {
                        if (me.onMarker && me.onMarker === tempMarker) {
                            return
                        } else {
                            tempMarker.hide()
                        }
                    }
                }
            }
        }
        if (!window.spotClickMD) {
            window.spotClickMD = function() {
                if (me.spotOverUid == "") {
                    return
                }
                map.temp.infoWin && map.temp.infoWin.close();
                me.onMarker = this;
                addStat(STAT_GR_MARKER_CLICK, {
                    uid: me.spotOverUid,
                    ct: "spot"
                });
                me.sendInfoRequest(me.spotOverUid);
                MapHunter.record("ma", 4, {
                    uid: me.spotOverUid
                })
            }
        }
        setTimeout(function() {
            if (me.checkEventBind(true, me.listeners, "map_mousemove", "addMouseOnMDEvent")) {
                map.addEventListener("mousemove", window.addMouseOnMDEvent)
            }
        },
        10);
        setTimeout(function() {
            if (me.checkEventBind(true, me.listeners, "map_spotmouseover", "spotMouseOverMD")) {
                map.addEventListener("spotmouseover", window.spotMouseOverMD)
            }
        },
        20);
        setTimeout(function() {
            if (me.checkEventBind(true, me.listeners, "map_spotmouseout", "spotMouseOutMD2")) {
                map.addEventListener("spotmouseout", window.spotMouseOutMD2)
            }
        },
        30)
    },
    sendInfoRequest: function(uid) {
        if (!uid) {
            return
        }
        var me = this;
        Share.listIndex = "uid," + uid;
        var pars = "/?qt=inf&uid=" + uid + "&ie=utf-8&t=" + new Date().getTime();
        T.Ajax.request(pars,
        function(res) {
            if (!res || res.responseText == "") {
                return
            }
            var js = eval("(" + res.responseText + ")");
            if (!js || !js.content) {
                return
            }
            var c = js.content;
            var pt = getPointByStr(parseGeo(c.geo).points);
            if (!opts) {
                var opts = {}
            }
            var addr = c.addr;
            if (c.poiType == POI_TYPE_BUSSTOP || c.poiType == POI_TYPE_SUBSTOP) {
                addr = T.array.unique(addr.split(";")).join("; ")
            }
            var tel = c.tel;
            if (tel) {
                tel = tel.replace(/,/g, ", ")
            }
            var cate = me._getCateInfo(c.cla);
            if (c.ext && c.ext.src_name && (c.ext.src_name == "hotel" || c.ext.src_name == "house" || c.ext.src_name == "cater")) {
                addStat(window["STAT_PLACE_" + c.ext.src_name.toUpperCase() + "_SPOT"])
            }
            var infoWnd = createSearchInfoWnd({
                title: c.name,
                addr: addr,
                tel: tel,
                uid: c.uid,
                cate: cate,
                ext_type: c.ext_type,
                detail: c.detail,
                poiType: c.poiType,
                hasDetail: (c.detail && c.ty == GEO_TYPE_POINT || c.poiType == POI_TYPE_BUSLINE || c.poiType == POI_TYPE_SUBLINE),
                ext: c.ext,
                houseDetailUrl: myext._getHouseDetailUrl(c),
                cp: c.cp,
                cla: c.cla
            },
            {
                cityCode: me.sCityCode,
                x: pt.lng,
                y: pt.lat
            });
            if (!infoWnd) {
                return
            }
            GRControll.openedMarker = {
                uid: c.uid,
                geo: c.geo,
                name: c.name
            };
            infoWnd.addEventListener("open",
            function() {
                me.setGRequestFlg(1500);
                if (infoWnd.closeButton) {
                    T.on(infoWnd.closeButton, "click",
                    function() {
                        map.temp.infoWin.overlay && map.temp.infoWin.overlay.hide();
                        me.onMarker = null;
                        me.openedMarker = null;
                        T.un(infoWnd.closeButton, "click", arguments.callee)
                    })
                }
                infoWnd.removeEventListener("open", arguments.callee)
            });
            infoWnd.addEventListener("close",
            function() {
                me.mdLabel1 && me.mdLabel1.hide();
                me.mdLabel2 && me.mdLabel2.hide();
                if (map.temp.infoWin.overlay) {
                    map.temp.infoWin.overlay.hide()
                }
                Share.listIndex = "";
                me.onMarker = null;
                me.openedMarker = null;
                infoWnd.removeEventListener("close", arguments.callee)
            });
            if (me.onMarker) {
                openSearchInfoWnd(infoWnd, me.onMarker, opts)
            } else {
                if (!me.mdMarker1) {
                    var point = getPointByStr(parseGeo(c.geo).points);
                    me.mdMarker1 = new BMap.Marker(point, {
                        icon: GR_ICON,
                        zIndexFixed: true
                    });
                    map.addOverlay(me.mdMarker1);
                    me.mdMarker1.addEventListener("click", window.spotClickMD);
                    me.mdMarker1.addEventListener("mouseout", window.spotMouseOutMD);
                    openSearchInfoWnd(infoWnd, me.mdMarker1, opts)
                }
            }
            me.mdLabel1 && me.mdLabel1.hide();
            me.mdLabel2 && me.mdLabel2.hide()
        })
    },
    setGRequestFlg: function(a) {
        var b = this;
        b.isableGRequestByMapChanged = false;
        setTimeout(function() {
            b.isableGRequestByMapChanged = true
        },
        a)
    },
    ifChangeMap: function() {
        if (!this.json) {
            return {
                f: 0
            }
        }
        if (this.json.result.op_gel == 1) {
            var a = new BMap.Point(this.json.result.res_x, this.json.result.res_y);
            return {
                f: 1,
                p: a,
                l: this.json.result.res_l
            }
        } else {
            return {
                f: 2
            }
        }
    },
    getGRData: function(c) {
        if (!c || c.err_no < 0) {
            return
        }
        var a = [];
        for (var b = 0,
        f = c.uids.length; b < f; b++) {
            a.push({
                pt: new BMap.Point(c.uids[b].x, c.uids[b].y),
                bd: [ - 7, 0, 7, 17],
                userdata: {
                    name: c.uids[b].name,
                    uid: c.uids[b].uid
                },
                tag: "GR_DATA"
            })
        }
        var d = c.tileid;
        this.genDataLst[d] = a;
        this.genDataIdLis.push(d);
        if (this.genDataIdLis.length > 30) {
            var e = this.genDataIdLis.shift();
            delete(this.genDataLst[e]);
            delete e
        }
        if (this.spotOnId != this.curTileMapId) {
            if (this.spotId != "") {
                map.removeSpots(this.spotId)
            }
            if (this.genDataLst[this.curTileMapId]) {
                this.spotId = map.addSpots(this.genDataLst[this.curTileMapId]);
                this.spotOnId = this.curTileMapId
            }
        }
    },
    hideMarkerByIW: function() {
        var a = this;
        var b = false;
        b = (map.temp.infoWin && map.temp.infoWin.isOpen() == true);
        if (b && map.temp.infoWin.overlay === a.mdMarker1) {
            if (a.mdLabel2) {
                a.mdLabel2.hide()
            }
            if (a.mdMarker2) {
                a.mdMarker2.hide()
            }
        } else {
            if (b && map.temp.infoWin.overlay === a.mdMarker2) {
                if (a.mdLabel1) {
                    a.mdLabel1.hide()
                }
                if (a.mdMarker1) {
                    a.mdMarker1.hide()
                }
            } else {
                if (a.mdLabel1) {
                    a.mdLabel1.hide()
                }
                if (a.mdLabel2) {
                    a.mdLabel2.hide()
                }
                if (a.mdMarker1) {
                    a.mdMarker1.hide()
                }
                if (a.mdMarker2) {
                    a.mdMarker2.hide()
                }
            }
        }
    },
    checkMove: function() {
        var e = this;
        if (!e.curSearchCPt || sideBar && sideBar.isGoing || fullScreenCtrl && fullScreenCtrl.isGoing) {
            return false
        }
        var d = map.pointToPixel(e.curSearchCPt);
        var c = map.pointToPixel(map.centerPoint);
        var b = Math.abs(d.x - c.x);
        var a = Math.abs(d.y - c.y);
        if (b >= 0.2 * map.width || a >= 0.2 * map.height) {
            return true
        }
        return false
    },
    addMDEvent: function() {
        var a = this;
        a.clearListener();
        if (!window.bindGenResLoad) {
            window.bindGenResLoad = function() {
                a.hideMarkerByIW();
                a.sendGenRequest()
            }
        }
        if (!window.bindGenResDrag) {
            window.bindGenResDrag = function() {
                if (a.checkMove() == true) {
                    a.sendGenRequest("&gr=2")
                }
            }
        }
        if (!window.bindGenResMove) {
            window.bindGenResMove = function() {
                if (a.checkMove() == true) {
                    a.sendGenRequest("&gr=2")
                }
            }
        }
        if (!window.bindGenResZoom) {
            window.bindGenResZoom = function() {
                a.hideMarkerByIW();
                a.sendGenRequest("&gr=1")
            }
        }
        if (!window.bindGenResResize) {
            window.bindGenResResize = function() {
                if (a.mdLabel) {
                    a.mdLabel.hide()
                }
                if (a.mdMarker) {
                    a.mdMarker.hide()
                }
                a.sendGenRequest()
            }
        }
        if (a.checkEventBind(true, a.listeners, "map_load", "bindGenResLoad")) {
            map.addEventListener("load", window.bindGenResLoad)
        }
        if (a.checkEventBind(true, a.listeners, "map_moveend", "bindGenResMove")) {
            map.addEventListener("moveend", window.bindGenResMove)
        }
        if (a.checkEventBind(true, a.listeners, "map_zoomend", "bindGenResZoom")) {
            map.addEventListener("zoomend", window.bindGenResZoom)
        }
        if (a.checkEventBind(true, a.listeners, "map_mapcontainerresize", "bindGenResResize")) {
            map.addEventListener("mapcontainerresize", window.bindGenResResize)
        }
    },
    sendGenRequest: function(f) {
        var i = this;
        i.curSearchCPt = map.centerPoint;
        if (!i.json) {
            return
        }
        if (i.json.result.type == 38 && map.zoomLevel < 11) {
            i.clearListener("md");
            i.clearGRMap();
            i.hideGRTool();
            window.clearMarkersInPoi && window.clearMarkersInPoi("a");
            T.G(modelConfig.MAIN_BOX).innerHTML = '<p style="font-size:12px;text-align:center;margin-top:10px">对不起，搜索区域过大，请放大地图</p>';
            return
        }
        if (!i.isableGenUIRequest || !i.isableGRequestByMapChanged) {
            return
        }
        if (!this.hasShowTip1) {
            if (T.G("GR_CustomTip1")) {
                i.removeTip(T.G("GR_CustomTip1"));
                this.hasShowTip1 = true
            }
            var d = i.json.current_city.code;
            if (i.areaData[d] && !i.notShowTip2 && !map.fullScreenMode && this.customTip2 && !T.G("GR_CustomTip2")) {
                beforeEndHTML(document.body, this.customTip2);
                var c = 166;
                var h = setInterval(function() {
                    if (c <= 158) {
                        clearInterval(h)
                    } else {
                        c = c - 14;
                        if (!T.G("GR_CustomTip2")) {
                            clearInterval(h)
                        }
                        if (T.G("GR_CustomTip2")) {
                            T.G("GR_CustomTip2").style.top = c + "px"
                        }
                    }
                },
                50)
            }
        }
        if (i.mdLabel) {
            i.mdLabel.hide()
        }
        if (i.mdMarker) {
            i.mdMarker.hide()
        }
        var j = null,
        m = null;
        i.clearListener();
        if (!f) {
            f = ""
        }
        var e = i.json.result.return_query;
        var a = "&c=" + modelConfig.cityCode + "&wd=" + encodeURIComponent(e) + "&on_gel=1&l=" + map.zoomLevel + f;
        if ( !! i.json.result.wd2) {
            a += "&wd2=" + i.json.result.wd2
        }
        var g = map.getBounds();
        a += "&b=(" + g.minX + "," + g.minY + ";" + g.maxX + "," + g.maxY + ")";
        i.isableGenUIRequest = false;
        switch (i.json.result.type) {
        case 36:
            window.clearMarkersInPoi && window.clearMarkersInPoi();
            setTimeout(function() {
                i.isableGenUIRequest = true
            },
            i.uiPermit);
            if (!place.urlArr) {
                i.queryStr = "s" + a
            } else {
                i.queryStr = "s" + a + place.urlArr
            }
            ModelMgr.mainModel.modelQuery = i.queryStr;
            go(i.queryStr, {
                dom: T.G("MapInfo")
            });
            break;
        case 37:
            window.clearClarify && clearClarify();
            setTimeout(function() {
                i.isableGenUIRequest = true
            },
            i.uiPermit);
            i.queryStr = "s" + a;
            go(i.queryStr, {
                dom: T.G("MapInfo")
            });
            break;
        case 38:
            var l = "";
            window.clearMarkersInPoi && window.clearMarkersInPoi();
            if (i.json.center && i.json.center.poi) {
                l += "&uid=" + i.json.center.poi[0].uid;
                var k = getPointByStr(parseGeo(i.json.center.poi[0].geo).points);
                l += "&nb_x=" + k.lng;
                l += "&nb_y=" + k.lat
            } else {
                if (i.gInfo.cinfo.centerPoint) {
                    l += "&nb_x=" + i.gInfo.cinfo.centerPoint.lng;
                    l += "&nb_y=" + i.gInfo.cinfo.centerPoint.lat
                }
            }
            setTimeout(function() {
                i.isableGenUIRequest = true
            },
            i.uiPermit);
            ModelMgr.mainModel.modelQuery = "nb" + a + l;
            if (!place.urlArr) {
                if (i.gInfo.cinfo) {
                    go("nb" + a + l, {
                        dom: T.G("MapInfo"),
                        cinfo: i.gInfo.cinfo
                    })
                } else {
                    go("nb" + a + l, {
                        dom: T.G("MapInfo")
                    })
                }
            } else {
                if (i.gInfo.cinfo) {
                    go("nb" + a + place.urlArr + l, {
                        dom: T.G("MapInfo"),
                        cinfo: i.gInfo.cinfo
                    })
                } else {
                    go("nb" + a + place.urlArr + l, {
                        dom: T.G("MapInfo")
                    })
                }
            }
            break;
        case 39:
            clearMarkersInSiv && clearMarkersInSiv();
            setTimeout(function() {
                i.isableGenUIRequest = true
            },
            i.uiPermit);
            ModelMgr.mainModel.modelQuery = "bd" + a;
            if (!place.urlArr) {
                go("bd" + a, {
                    dom: T.G("MapInfo")
                })
            } else {
                go("bd" + a + place.urlArr, {
                    dom: T.G("MapInfo")
                })
            }
            break;
        case 40:
            searchInViewCtrl.clear();
            setTimeout(function() {
                i.isableGenUIRequest = true
            },
            i.uiPermit);
            go("bd" + a, {
                dom: T.G("MapInfo")
            });
            break
        }
    },
    addGRTool: function() {
        if (!this.toolAreaId) {
            return
        }
        T.G(this.toolAreaId).style.display = "none";
        var a = '<a id="GR_SelectCity" class="curcity-expand" href="javascript:void(0)" onclick="Instance(\'' + this.guid + '\').showGRPop(this, 0);return false;">选择城区</a>&nbsp;&nbsp;&nbsp;&nbsp;<a id="GR_SelectArea" class="curcity-expand" href="javascript:void(0)" onclick="Instance(\'' + this.guid + '\').showGRPop(this, 1)" style="visibility:hidden">选择地段</a>';
        T.G(this.toolAreaId).innerHTML = a
    },
    showGRTool: function(a) {
        this.manageGRTool(a)
    },
    hideGRTool: function() {
        this.manageGRTool()
    },
    manageGRTool: function(a) {
        if (!a || !this.areaData[a]) {
            T.G(this.toolAreaId).style.display = "none";
            T.G("GR_SelectCity").innerHTML = "选择城区";
            T.G("GR_SelectArea").innerHTML = "选择地段";
            T.G("GR_SelectArea").style.visibility = "hidden";
            this.areaDistrict = "";
            if (this.GRPop) {
                this.GRPop.close();
                this.GRPop = null
            }
            return
        }
        this.areaCity = a;
        if (!map.fullScreenMode) {
            T.G(this.toolAreaId).style.display = ""
        }
    },
    showGRPop: function(b, k) {
        if (this.GRPop) {
            this.GRPop.close();
            return
        }
        if (T.G("GR_CustomTip1")) {
            this.removeTip(T.G("GR_CustomTip1"))
        }
        if (T.G("GR_CustomTip2")) {
            this.removeTip(T.G("GR_CustomTip2"))
        }
        this.notShowTip2 = true;
        if (this.areaCity == "" || !this.areaData[this.areaCity]) {
            return
        }
        var j = this;
        var g = null;
        switch (k) {
        case 0:
            g = j.areaData[j.areaCity].district;
            break;
        case 1:
            if (j.areaDistrict == "") {
                return
            }
            var e = j.areaData[j.areaCity].district;
            for (var f = 0,
            c = e.length; f < c; f++) {
                if (e[f].n == j.areaDistrict) {
                    g = e[f].b;
                    break
                }
            }
            break
        }
        var h = [];
        h.push("<div class='sel_city blueC' style='margin:0;width:138px;padding:7px 16px 7px 7px;'>");
        if (k == 0) {
            h.push("<a href='javascript:void(0)' style='line-height:18px;' onclick='Instance(\"" + j.guid + '").changeArea({n:"选择城区",g:"' + j.areaData[j.areaCity].geo + '",t:' + k + "});return false;'>全部城区</a>：<br />")
        } else {
            h.push("<a href='javascript:void(0)' style='line-height:18px;' onclick='Instance(\"" + j.guid + '").changeArea({n:"选择地段",g:"' + e[f].geo + '",t:' + k + "});return false;'>全部地段</a>：<br />")
        }
        for (var f = 0,
        c = g.length; f < c; f++) {
            h.push("<nobr><a href='javascript:void(0)' style='line-height:18px;margin-right:6px;' onclick='Instance(\"" + j.guid + '").changeArea({n:"' + g[f].n + '",g:"' + g[f].geo + '",t:' + k + "});return false;'>" + g[f].n + "</a></nobr> ")
        }
        h.push("</div>");
        var m = getPosition(b);
        var l = m.top + 16;
        var d = m.left,
        a = "curcity-expand-selected";
        j.GRPop = new Popup({
            content: h.join(""),
            isTitle: false,
            isAddBottomHeight: false,
            width: 168,
            open: function() {
                T.ac(b, a)
            },
            close: function() {
                T.rc(b, a);
                j.GRPop = null
            }
        });
        j.GRPop.addConnectDom(b);
        j.GRPop.render();
        j.GRPop.getDom().style.left = d + "px";
        j.GRPop.getDom().style.top = l + "px"
    },
    changeArea: function(f) {
        if (f.t == 0) {
            this.areaDistrict = f.n;
            T.G("GR_SelectCity").innerHTML = f.n;
            T.G("GR_SelectArea").innerHTML = "选择地段";
            var d = this.areaData[this.areaCity].district;
            for (var e = 0,
            h = d.length; e < h; e++) {
                lst = d[e].b;
                if (!lst) {
                    T.G("GR_SelectArea").style.visibility = "hidden"
                } else {
                    if (f.n != "选择城区") {
                        T.G("GR_SelectArea").style.visibility = "visible"
                    } else {
                        T.G("GR_SelectArea").style.visibility = "hidden"
                    }
                }
            }
            addStat(STAT_GR_CHOOSE_CITY)
        }
        if (f.t == 1) {
            T.G("GR_SelectArea").innerHTML = f.n;
            addStat(STAT_GR_CHOOSE_AREA)
        }
        var c = f.g.split("|");
        var b = c[1].split(";");
        this.GRPop.close();
        this.GRPop = null;
        var a = new BMap.Point(b[0], b[1]);
        map.centerAndZoom(a, c[0] * 1);
        if ( !! place.result && window.place_dateType) {
            var g = window.place_dateType.toUpperCase();
            addStat(window["STAT_PLACE_" + g + "_SQ"])
        }
    },
    _getCateInfo: function(d) {
        var c = [];
        for (var e = 0,
        b = d.length; e < b; e++) {
            c.push(d[e][1]);
            if (e < b - 1) {
                c.push(", ")
            }
        }
        return c.join("")
    },
    getDataForSnap: function() {
        if (this.isGRequest && this.json) {
            var b = this.json.result.return_query || "";
            var a = this.json.result.wd2 || "";
            var e = "bkg_png";
            var d = modelConfig.cityCode;
            return {
                wd: b,
                wd2: a,
                qt: e,
                c: d
            }
        } else {
            return false
        }
    }
});
function getMData(a) {
    if (!a) {
        return
    }
    window.GRControll.getGRData(a)
} (function() {
    var b = {
        cater: {
            name: "cater",
            cn_name: "餐馆",
            cTag: {
                "中餐馆": "china",
                "西餐厅": "western",
                "快餐": "snack",
                "日本菜": "japan",
                "东南亚菜": "southeast",
                "韩国料理": "korea",
                "川菜": "sichuan",
                "粤菜": "yuecai",
                "小吃": "xiaochi",
                "西式快餐": "westernSnack",
                "中式快餐": "chinaSnack",
                "甜点冷饮": "sweetmeats",
                "面包西点": "bakeshop",
                "火锅": "huoguo",
                "披萨": "pizza",
                "牛排": "beefsteak"
            },
            sTag: {
                tagTxt: ["全部", "中餐馆", "西餐厅", "日本菜", "韩国料理", "东南亚菜", "快餐", "甜点冷饮", "火锅"],
                tagTxt_b: ["餐馆", "中餐馆-", "西餐厅-", "日本菜-", "韩国料理-", "东南亚菜-", "快餐-", "甜点冷饮-", "中餐馆-火锅-"],
                china: ["火锅", "自助餐", "川菜", "湘菜", "粤菜", "东北菜", "鲁菜", "江浙菜", "烧烤", "海鲜", "小吃"],
                china_b: ["中餐馆-火锅-", "中餐馆-自助餐", "中餐馆-川菜-", "中餐馆-湘菜", "中餐馆-粤菜-", "中餐馆-东北菜", "中餐馆-鲁菜", "中餐馆-江浙菜", "中餐馆-烧烤", "中餐馆-海鲜", "中餐馆-小吃-"],
                western: ["披萨", "牛排", "意大利菜", "法国菜", "德国菜", "俄罗斯菜", "拉美烧烤", "中东料理"],
                western_b: ["西餐厅-披萨-", "西餐厅-牛排-", "西餐厅-意大利菜", "西餐厅-法国菜", "西餐厅-德国菜", "西餐厅-俄罗斯菜", "西餐厅-拉美烧烤", "西餐厅-中东料理"],
                snack: ["中式快餐", "西式快餐", "肯德基", "麦当劳", "永和大王", "味千拉面", "马兰拉面", "真功夫"],
                snack_b: ["快餐-中式快餐-", "快餐-西式快餐-", "快餐-肯德基", "快餐-麦当劳", "快餐-永和大王", "快餐-味千拉面", "快餐-马兰拉面", "快餐-真功夫"],
                japan: ["日本料理", "日式烧烤", "寿司", "日式自助"],
                japan_b: ["日本菜-日本料理", "日本菜-日式烧烤", "日本菜-寿司", "日本菜-日式自助"],
                southeast: ["泰国菜", "越南菜", "印度菜", "菲律宾菜", "印尼菜"],
                southeast_b: ["东南亚菜-泰国菜", "东南亚菜-越南菜", "东南亚菜-印度菜", "东南亚菜-菲律宾菜", "东南亚菜-印尼菜"],
                pizza: ["必胜客", "好伦哥", "巴贝拉"],
                pizza_b: ["西餐厅-披萨-必胜客", "西餐厅-披萨-好伦哥", "西餐厅-披萨-巴贝拉"],
                beefsteak: ["豪客来", "豪享来", "绿茵阁"],
                beefsteak_b: ["西餐厅-牛排-豪客来", "西餐厅-牛排-豪享来", "西餐厅-牛排-绿茵阁"],
                korea: ["权金城", "汉拿山"],
                korea_b: ["韩国料理-权金城", "韩国料理-汉拿山"],
                sichuan: ["香锅", "烤鱼"],
                sichuan_b: ["中餐馆-川菜-香锅", "中餐馆-川菜-烤鱼"],
                huoguo: ["海底捞", "小肥羊", "东来顺", "呷哺呷哺"],
                huoguo_b: ["中餐馆-火锅-海底捞", "中餐馆-火锅-小肥羊", "中餐馆-火锅-东来顺", "中餐馆-火锅-呷哺呷哺"],
                xiaochi: ["粉面馆", "麻辣烫", "饺子馆", "包子", "馄饨店", "粥店", "熟食", "零食"],
                xiaochi_b: ["中餐馆-小吃-粉面馆", "中餐馆-小吃-麻辣烫", "中餐馆-小吃-饺子馆", "中餐馆-小吃-包子", "中餐馆-小吃-馄饨店", "中餐馆-小吃-粥店", "中餐馆-小吃-熟食", "中餐馆-小吃-零食"],
                yuecai: ["茶餐厅", "燕翅鲍", "潮汕菜", "客家菜", "湛江菜"],
                yuecai_b: ["中餐馆-粤菜-茶餐厅", "中餐馆-粤菜-燕翅鲍", "中餐馆-粤菜-潮汕菜", "中餐馆-粤菜-客家菜", "中餐馆-粤菜-湛江菜"],
                westernSnack: ["肯德基", "麦当劳", "德克士", "赛百味"],
                westernSnack_b: ["快餐-西式快餐-肯德基", "快餐-西式快餐-麦当劳", "快餐-西式快餐-德克士", "快餐-西式快餐-赛百味"],
                chinaSnack: ["永和大王", "味千拉面", "马兰拉面", "真功夫", "吉野家"],
                chinaSnack_b: ["快餐-中式快餐-永和大王", "快餐-中式快餐-味千拉面", "快餐-中式快餐-马兰拉面", "快餐-中式快餐-真功夫", "快餐-中式快餐-吉野家"],
                sweetmeats: ["面包西点", "冰淇淋", "甜点饮品", "稻香村", "面包新语", "味多美"],
                sweetmeats_b: ["甜点冷饮-面包西点-", "甜点冷饮-冰淇淋", "甜点冷饮-甜点饮品", "甜点冷饮-稻香村", "甜点冷饮-面包新语", "甜点冷饮-味多美"],
                bakeshop: ["稻香村", "面包新语", "味多美", "好利来", "元祖", "贝儿多爸爸"],
                bakeshop_b: ["甜点冷饮-面包西点-稻香村", "甜点冷饮-面包西点-面包新语", "甜点冷饮-面包西点-味多美", "甜点冷饮-面包西点-好利来", "甜点冷饮-面包西点-元祖", "甜点冷饮-面包西点-贝儿多爸爸"],
                price: ["0,+", "1,20", "20,50", "50,120", "120,+"],
                price_cn: ["不限", "<em>20</em>元以下", "<em>20~50</em>元", "<em>50~120</em>元", "<em>120</em>元以上"],
                rule: ["data_type", "taste_rating", "price", "overall_rating", "service_rating"],
                rule_cn: ["<em>默认</em>", "<em class='em_o'>口味</em>", "<em class='em_p'>价格</em>", "<em class='em_o'>好评</em>", "<em class='em_o'>服务</em>"]
            }
        },
        hotel: {
            name: "hotel",
            cn_name: "酒店",
            cTag: {
                "星级酒店": "star",
                "旅馆": "hotel"
            },
            sTag: {
                tagTxt: ["全部", "快捷酒店", "星级酒店", "旅馆", "度假村", "五星级", "四星级", "三星级", "招待所", "青年旅社"],
                tagTxt_b: ["酒店", "快捷酒店", "星级酒店-", "旅馆-", "度假村", "五星级", "四星级", "三星级", "招待所", "青年旅社"],
                star: ["五星级", "四星级", "三星级"],
                star_b: ["星级酒店-五星级", "星级酒店-四星级", "星级酒店-三星级"],
                hotel: ["招待所", "家庭旅馆", "青年旅社", "客栈"],
                hotel_b: ["旅馆-招待所", "旅馆-家庭旅馆", "旅馆-青年旅社", "旅馆-客栈"],
                price: ["0,+", "1,200", "200,500", "500,800", "800,+"],
                price_cn: ["不限", "<em>200</em>元以下", "<em>200~500</em>元", "<em>500~800</em>元", "<em>800</em>元以上"],
                rule: ["default", "price", "total_score", "level", "health_score"],
                rule_cn: ["<em>默认</em>", "<em class='em_p'>价格</em>", "<em class='em_o'>好评</em>", "<em class='em_o'>星级</em>", "<em class='em_o'>卫生</em>"]
            }
        },
        hospital: {
            name: "hospital",
            cn_name: "医院",
            sTag: {
                tagTxt: ["全部", "中医院", "口腔医院", "儿童医院", "肿瘤医院", "妇科医院", "眼科医院", "骨科医院", "妇幼保健院"],
                tagTxt_b: ["医院", "中医院", "口腔医院", "儿童医院", "肿瘤医院", "妇科医院", "眼科医院", "骨科医院", "妇幼保健院"]
            }
        },
        life: {
            name: "life",
            cn_name: "休闲娱乐",
            cTag: {
                "健身": "js",
                "体育场馆": "tycg",
                "洗浴": "xy",
                "棋牌室": "qps"
            },
            sTag: {
                tagTxt: ["全部", "电影院", "KTV", "体育场馆", "健身", "游泳馆", "羽毛球馆", "棋牌室", "网吧", "洗浴", "按摩", "足疗"],
                tagTxt_b: ["休闲娱乐", "电影院", "KTV", "体育场馆-", "健身-", "游泳馆", "羽毛球馆", "棋牌室-", "网吧", "洗浴-", "按摩", "足疗"],
                js: ["健身房", "瑜伽会所"],
                js_b: ["健身-健身房", "健身-瑜伽会所"],
                tycg: ["游泳馆", "体育中心", "羽毛球馆", "篮球场", "溜冰场", "桌球馆", "网球场", "足球场", "乒乓球馆", "保龄球馆", "垂钓"],
                tycg_b: ["体育场馆-游泳馆", "体育场馆-体育中心", "体育场馆-羽毛球馆", "体育场馆-篮球场", "体育场馆-溜冰场", "体育场馆-桌球馆", "体育场馆-网球场", "体育场馆-足球场", "体育场馆-乒乓球馆", "体育场馆-保龄球馆", "体育场馆-垂钓"],
                xy: ["桑拿", "温泉"],
                xy_b: ["洗浴-桑拿", "洗浴-温泉"],
                qps: ["桌游"],
                qps_b: ["棋牌室-桌游"],
                price: ["0,+", "0,20", "20,50", "50,120", "120,+"],
                price_cn: ["不限", "<em>20</em>元以下", "<em>20~50</em>元", "<em>50~120</em>元", "<em>120</em>元以上"],
                rule: ["data_type", "price", "overall_rating", "comment_num"],
                rule_cn: ["<em>默认</em>", "<em class='em_p'>价格</em>", "<em class='em_o'>好评</em>", "<em class='em_o'>点评数</em>"]
            }
        }
    };
    var c = {
        src_name: "通用",
        price: "人均",
        priceUnit: "元"
    };
    var a = {
        urlArr: "",
        URL_PARAM_PREFIX: "pl_",
        urlParam: {},
        sectionDiscount: Math.floor((new Date() - Date.parse("01/01/2012")) / (24 * 60 * 60 * 1000)) + ",+",
        result: false,
        barState: {
            tag: {
                display: true
            },
            price: {
                display: true
            }
        },
        statVar: {
            hotel: "",
            cater: "C_"
        },
        placeRe: /^(hotel|cater|hospital|house|life|education|enterprise|scope|shopping)$/,
        placeConfig: {
            basicInfoCN: {
                cater: {
                    src_name: "餐饮",
                    service_rating: "服务",
                    hygiene_rating: "卫生",
                    facility_rating: "设施",
                    taste_rating: "口味",
                    environment_rating: "环境",
                    price: "人均价",
                    priceUnit: "元"
                },
                hotel: {
                    src_name: "酒店",
                    service_rating: "服务",
                    hygiene_rating: "卫生",
                    facility_rating: "设施",
                    price: "参考价",
                    priceUnit: "元"
                },
                house: {
                    src_name: "房产",
                    price: "均价",
                    priceUnit: "元/平方米"
                },
                hospital: {
                    src_name: "医疗",
                    tag: "标签",
                    technology_rating: "技术",
                    service_rating: "服务"
                },
                life: {
                    src_name: "休闲娱乐",
                    price: "人均",
                    priceUnit: "元"
                },
                education: c,
                enterprise: c,
                scope: c,
                shopping: c
            }
        },
        insertHtml: function(w, K, s) {
            var u = [],
            y = K.place_info,
            I = y.d_data_type,
            i = "",
            A = [],
            f = y.d_discount_section.replace("-", ","),
            k = y.d_groupon_section.replace("-", ",");
            this.stat_data_type = I.toUpperCase() + "_";
            window.place_dateType = K.place_info.d_data_type;
            var M = "";
            if (K.place_info.d_sub_type) {
                i = K.place_info.d_sub_type;
                if (i.indexOf("-") > -1) {
                    A = i.split("-");
                    M = A[A.length - 1];
                    if (M == "") {
                        M = b[I].cn_name
                    }
                } else {
                    M = i
                }
            }
            var q = "";
            if (K.place_info.d_price_section) {
                q = K.place_info.d_price_section.replace("-", ",")
            }
            var G = "";
            if (I == "hotel") {
                G = "default"
            } else {
                if (/^(cater|life)$/.test(I)) {
                    G = "data_type"
                }
            }
            if (K.place_info.d_sort_type) {
                G = K.place_info.d_sort_type
            }
            var l = "";
            if (K.place_param && K.place_param[0].sort_rule) {
                l = K.place_param[0].sort_rule
            } else {
                if (K.place_info.d_sort_rule) {
                    l = K.place_info.d_sort_rule
                }
            }
            this.urlParam[this.URL_PARAM_PREFIX + "data_type"] = I;
            this.urlParam[this.URL_PARAM_PREFIX + "sub_type"] = i;
            this.urlParam[this.URL_PARAM_PREFIX + "price_section"] = q;
            this.urlParam[this.URL_PARAM_PREFIX + "sort_type"] = G;
            this.urlParam[this.URL_PARAM_PREFIX + "sort_rule"] = l;
            this.urlParam[this.URL_PARAM_PREFIX + "discount_section"] = f;
            this.urlParam[this.URL_PARAM_PREFIX + "groupon_section"] = k;
            a.urlArr = this.getUrlParamString();
            if (A.length == 2) {
                var L = b[I].cTag[A[0]];
                var v = b[I].cTag[A[0]] + "_b"
            }
            if (A.length == 3) {
                L = b[I].cTag[A[1]];
                v = b[I].cTag[A[1]] + "_b"
            }
            if (A.length == 3 && b[I].sTag[L]) {
                var D = b[I].sTag[L];
                var E = b[I].sTag[v];
                u.push("<div  id=\"tagBar\" class=\"poi_hotelBar\"  onclick= \"place.toggleBar(this, 'tag');addStat(window['STAT_'+place.stat_data_type+'PLACE_BAR_TYPE'])\">");
                u.push('<a class="backAll" href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + b[I].cn_name + "','" + q + "','" + G + "','" + l + "');place.stopBubbleBar(event);return false;\">" + b[I].cn_name + "</a>");
                u.push('<span id="hotelCheap"><a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + A[0] + "-','" + q + "','" + G + "','" + l + "');place.stopBubbleBar(event);return false;\">" + A[0] + "</a></span>");
                u.push('<span id="" class="three">' + A[1] + "</span>");
                u.push("<span></span>");
                u.push('<span class="bar_iconBg_c"></span>');
                u.push("</div>");
                u.push('<div class="poi_hotelCon" id="poi_hotelCon">');
                for (var H = 0; H < D.length; H++) {
                    if (M != D[H]) {
                        u.push('<a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + E[H] + "','" + q + "','" + G + "','" + l + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + E[H] + "',tag:'" + D[H] + "'});return false;\">" + D[H] + "</a>")
                    } else {
                        u.push("<span>" + D[H] + "</span>")
                    }
                }
            } else {
                if (A.length == 2 && b[I].sTag[L]) {
                    var D = b[I].sTag[L];
                    var E = b[I].sTag[v];
                    u.push("<div  id=\"tagBar\" class=\"poi_hotelBar\"  onclick= \"place.toggleBar(this, 'tag');addStat(window['STAT_'+place.stat_data_type+'PLACE_BAR_TYPE'])\">");
                    u.push('<a class="backAll" href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + b[I].cn_name + "','" + q + "','" + G + "','" + l + "');place.stopBubbleBar(event);return false;\">" + b[I].cn_name + "</a>");
                    u.push('<span id="hotelCheap" class="three">' + A[0] + "</span>");
                    u.push("<span></span>");
                    u.push('<span class="bar_iconBg_c"></span>');
                    u.push("</div>");
                    u.push('<div class="poi_hotelCon" id="poi_hotelCon">');
                    for (var H = 0; H < D.length; H++) {
                        if (M != D[H]) {
                            u.push('<a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + E[H] + "','" + q + "','" + G + "','" + l + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + E[H] + "',tag:'" + D[H] + "'});return false;\">" + D[H] + "</a>")
                        } else {
                            u.push("<span>" + D[H] + "</span>")
                        }
                    }
                } else {
                    var e = b[I].sTag.tagTxt;
                    var j = b[I].sTag.tagTxt_b;
                    u.push("<div id=\"tagBar\" class=\"poi_hotelBar\"  onclick= \"place.toggleBar(this,'tag');addStat(window['STAT_'+place.stat_data_type+'PLACE_BAR_TYPE'])\">");
                    u.push('<span class="theAll">' + b[I].cn_name + "</span>");
                    u.push("<span></span>");
                    u.push('<span class="bar_iconBg_c"></span>');
                    u.push("</div>");
                    u.push('<div class="poi_hotelCon" id="poi_hotelCon" style="padding-right:28px;">');
                    if (M == b[I].cn_name) {
                        u.push("<span>" + e[0] + "</span>")
                    } else {
                        u.push('<a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + j[0] + "','" + q + "','" + G + "','" + l + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + j[0] + "'});return false;\">" + e[0] + "</a>")
                    }
                    for (var x = 1; x < e.length; x++) {
                        if (M == e[x]) {
                            u.push("<span>" + e[x] + "</span>")
                        } else {
                            u.push('<a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + j[x] + "','" + q + "','" + G + "','" + l + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + j[x] + "',tag:'" + e[x] + "'});return false;\">" + e[x] + "</a>")
                        }
                    }
                }
            }
            u.push("</div>");
            var F = b[I].sTag.price_cn,
            P = b[I].sTag.price;
            if ( !! F) {
                u.push('<div id="priceBar" class="poi_hotelBar"  onclick= "place.toggleBar(this,\'price\');addStat(window[\'STAT_\'+place.stat_data_type+\'PLACE_BAR_PRICE\'])"><span class="theAll">价格</span><span id="pl_show_price"></span><span class="bar_iconBg_c"></span></div><div class="poi_hotelCon" id="poi_price">');
                for (var B = 0; B < F.length; B++) {
                    if (q != P[B]) {
                        u.push('<a href="javascript:void(0);" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + i + "','" + P[B] + "','" + G + "','" + l + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + P[B] + "'});return false;\">" + F[B] + "</a>")
                    } else {
                        u.push("<span>" + F[B] + "</span>")
                    }
                }
                u.push("</div>")
            }
            var o = b[I].sTag.rule_cn,
            J = b[I].sTag.rule,
            n = 280,
            d;
            if ( !! o && K.content) {
                u.push('<div class="poi_hotel_PX" id="poi_hotel_PX">');
                d = Math.floor(n / o.length) + "px";
                for (var z = 0; z < o.length; z++) {
                    if (G != J[z]) {
                        u.push('<a style="width:' + d + ';" href="javascript:void(0);" onmouseover="place.showTips(this)" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + i + "','" + q + "','" + J[z] + "','0');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + J[z] + "'});return false;\">" + o[z] + "</a>")
                    } else {
                        if (G == "price") {
                            var O = "";
                            if (l == "") {
                                O = "1"
                            }
                            if (l == "1") {
                                O = "0"
                            }
                            if (l == "0") {
                                O = "1"
                            }
                            u.push('<a style="width:' + d + ';" href="javascript:void(0);" onmouseover="place.showTips(this)" onclick="Instance(\'' + s + "')._hotelType('" + I + "','" + i + "','" + q + "','" + J[z] + "','" + O + "');addStat(window['STAT_'+place.stat_data_type+'PLACE_SEARCH_TYPE'],{type:'" + J[z] + '\'});return false;" class="rule' + O + '">' + o[z] + "</a>")
                        } else {
                            u.push('<span style="width:' + d + ';">' + o[z] + "</span>")
                        }
                    }
                }
                u.push("</div>")
            }
            var m = Special.isBoxInCity("preferential", K.current_city && K.current_city.name),
            N = this.isDefaultFilterSection(f),
            h = this.isDefaultFilterSection(k),
            C = [];
            C.push('<div class="place-filter-cb" id="premium_sort">');
            if (I == "cater" && (m || (!m && !N))) {
                C.push(['<a id="place_premium" href="javascript:void(0);" ' + (!N ? ' class="item-selected"': "") + " onclick=\"place.togglePremium(this, {guid:'" + s + "',data:'" + I + "',sub:'" + i + "',price:'" + q + "',sort:'" + G + "',rule:'" + l + "'});\">", "<em class='checkbox'></em><span>有优惠</span>", "</a>"].join(""))
            }
            if ((modelConfig.sup & 1) || !h) {
                C.push(['<a id="place_groupon" href="javascript:void(0);" ' + (!h ? ' class="item-selected"': "") + " onclick=\"place.togglePremium(this, {guid:'" + s + "',data:'" + I + "',sub:'" + i + "',price:'" + q + "',sort:'" + G + "',rule:'" + l + "'});\">", "<em class='checkbox'></em><span>正在团购</span><img src='image/hot.png'/>", "</a>"].join(""))
            }
            C.push("</div>");
            if (C.length > 2) {
                u.push(C.join(""))
            }
            if (I == "hospital") {
                u.push('<div style="border-bottom: 1px solid #F1F1F1;"></div>')
            }
            return u.join("")
        },
        getUrlArr: function() {
            return this.urlArr
        },
        togglePremium: function(g, h) {
            var d = this.urlParam,
            e = "item-selected",
            j = T.dom.hasClass(g, e),
            i = this.URL_PARAM_PREFIX + (g.id == "place_premium" ? "discount_section": "groupon_section"),
            f = g.id == "place_premium" ? "d": "g";
            if (j) {
                T.rc(g, e);
                delete d[i]
            } else {
                T.ac(g, e);
                d[i] = this.sectionDiscount
            }
            addStat(PLACE_FILTER_CODE, {
                ct: "l_cb_" + f + (j ? 0 : 1)
            });
            Instance(h.guid).searchByFilter(d)
        },
        isDefaultFilterSection: function(d) {
            return /^0,\+$/.test(d)
        },
        getUrlParamString: function(f) {
            var f = f || this.urlParam,
            d = [];
            for (var e in f) {
                if (f.hasOwnProperty(e)) {
                    d.push("&" + e + "=" + encodeURIComponent(f[e]))
                }
            }
            return d.join("")
        },
        toggleBar: function(f, d) {
            var e = f.nextSibling;
            if (e.style.display == "none") {
                a.showBar(f, d)
            } else {
                a.hideBar(f, d)
            }
        },
        showBar: function(g, d) {
            if (!g) {
                return
            }
            var f = g.nextSibling;
            f.style.display = "block";
            g.lastChild.className = "bar_iconBg_c";
            var e = g.childNodes[g.childNodes.length - 2];
            e.style.display = "none";
            a.barState[d].display = true
        },
        hideBar: function(j, d) {
            if (!j) {
                return
            }
            var h = j.nextSibling;
            h.style.display = "none";
            j.lastChild.className = "bar_iconBg_o";
            var e = j.nextSibling.childNodes;
            var f = j.childNodes[j.childNodes.length - 2];
            f.style.display = "block";
            for (var g = 0; g < e.length; g++) {
                if (e[g].nodeName == "SPAN") {
                    f.innerHTML = e[g].innerHTML;
                    f.style.fontWeight = "bold";
                    f.style.marginLeft = "8px"
                }
            }
            a.barState[d].display = false
        },
        showTips: function(f) {
            var e = f.firstChild.innerHTML;
            var d = "";
            switch (e) {
            case "默认":
                d = "默认排序";
                break;
            case "口味":
                d = "口味从高到低";
                break;
            case "服务":
                d = "服务从高到低";
                break;
            case "星级":
                d = "星级从高到低";
                break;
            case "好评":
                d = "好评从高到低";
                break;
            case "卫生":
                d = "卫生从高到低";
                break;
            default:
                d = ""
            }
            if (e == "价格") {
                if (f.className == "rule1") {
                    d = "价格从高到低"
                } else {
                    d = "价格从低到高"
                }
            }
            f.title = "按" + d
        },
        stopBubbleBar: function(d) {
            stopBubble(d)
        }
    };
    window.place = a
})(); (function() {
    var a = {
        BD: ["餐饮", "酒店", "超市", "KTV", "电影院", "银行", "医院", "公交站", "停车场", "加油站"],
        placeCaterWd: ["中餐馆", "西餐厅", "日本菜", "韩国料理", "东南亚菜", "快餐", "甜点冷饮", "火锅"],
        placeHotelWd: ["快捷酒店", "星级酒店", "旅馆", "度假村", "五星级", "四星级", "三星级", "招待所", "青年旅社"],
        placeHospitalWd: ["中医院", "口腔医院", "儿童医院", "肿瘤医院", "妇科医院", "眼科医院", "骨科医院", "妇幼保健院"],
        placeLifeWd: ["电影院", "KTV", "体育场馆", "健身", "游泳馆", "羽毛球馆", "棋牌室", "网吧", "洗浴", "按摩", "足疗"],
        insertHtml: function(l, g, k, j, h, c) {
            var m = a;
            var b = "";
            var e = "";
            var f = [];
            switch (l) {
            case 33:
                b = m.BD;
                e = c;
                addStat(PLACE_ENTER_BD);
                break;
            case 13:
                b = m.placeCaterWd;
                e = "餐饮";
                addStat(PLACE_ENTER_CATE);
                break;
            case 14:
                b = m.placeHotelWd;
                e = "酒店";
                addStat(PLACE_ENTER_HOTEL);
                break;
            case 18:
                b = m.placeLifeWd;
                e = "休闲娱乐";
                addStat(PLACE_ENTER_LIFE);
                break;
            case 20:
                b = m.placeHospitalWd;
                e = "医院";
                addStat(PLACE_ENTER_HOSPITAL);
                break;
            default:
                b = ""
            }
            if (l == 33) {
                f.push('<div tid="placeEntranceBox" class="placeEntranceBox_bd">');
                f.push("<h3>在<span>" + e + "</span>附近找</h3>");
                for (var d = 0; d < b.length; d++) {
                    f.push('<a href="javascript:void(0)" onclick="placeEntrance._showPlaceWdLink_NB(this,' + g + ", " + k + ", " + j + ", '" + h + "');return false;\">" + b[d] + "</a>")
                }
                f.push("</div>")
            } else {
                f.push('<div tid="placeEntranceBox" class="placeEntranceBox">');
                f.push('<h3>查看更多附近<a href="javascript:void(0)" onclick="placeEntrance._showPlaceWdLink_BD(this,' + g + "," + l + ');return false;">' + e + '</a></h3>');
                for (var d = 0; d < b.length; d++) {
                    f.push('<a href="javascript:void(0)" onclick="placeEntrance._showPlaceWdLink_BD(this,' + g + ", " + l + ');return false;">' + b[d] + "</a>")
                }
                f.push("</div>")
            }
            return f.join("")
        },
        _showPlaceWdLink_BD: function(d, c, e) {
            var b = d.innerHTML;
            document.fmwd.word.value = b;
            switch (e) {
            case 13:
                addStat(917, {
                    name: b
                });
                break;
            case 14:
                addStat(918, {
                    name: b
                });
                break;
            case 18:
                addStat(919, {
                    name: b
                });
                break;
            case 20:
                addStat(920, {
                    name: b
                });
                break
            }
            go("bd&c=" + c + "&wd=" + encodeURIComponent(b));
            if (searchInViewCtrl && searchInViewCtrl.isOpen) {
                searchInViewCtrl._container.onclick()
            }
        },
        _showPlaceWdLink_NB: function(g, h, m, k, i) {
            var b = 2000;
            m = m * 1;
            k = k * 1;
            b = b * 1;
            var e = m - b;
            var l = k - b;
            var c = m + b;
            var j = k + b;
            var d = "(" + e + "," + l + ";" + c + "," + j + ")";
            var f = g.innerHTML;
            var n = "(" + m + "," + k + ")";
            map.centerAndZoom(n, 16);
            param = {
                c: h,
                l: map.zoomLevel,
                wd: f,
                nb_x: m,
                nb_y: k,
                r: b,
                b: d,
                uid: i
            };
            addStat(915, {
                name: f
            });
            roundSearchByValue(f, i, "crangeListI", h, null, m, k)
        },
        execGeo: function(f) {
            var d = /([^\|;]*)(?=;)/;
            var g = d.exec(f);
            var c = g[0].split(",")[0] * 1;
            var b = g[0].split(",")[1] * 1;
            var e = {
                x: c,
                y: b
            };
            return e
        }
    };
    window.placeEntrance = a
})();
var poiUidObj = {};
function transInfoWindow(g, a, b) {
    var e = {
        ccode: modelConfig.cityCode,
        showLine: true
    };
    var d = window.ModelMgr.mainModel;
    var f = g.getPoint();
    if (b && typeof b == "object") {
        e = T.extend(e, b)
    }
    if (a._transUid != null) {
        var c = a._transUid;
        go("inf&uid=" + c,
        function(i) {
            if (!i || !i.content) {
                poiUidObj[c] = {
                    addr: null,
                    tel: null,
                    type: null,
                    pid: null,
                    blinfo: null
                }
            } else {
                var m = i.content.addr;
                var h = i.content.tel;
                var j = i.content.poiType;
                var l = i.content.uid;
                var k = i.content.blinfo;
                poiUidObj[c] = {
                    addr: m,
                    tel: h,
                    type: j,
                    pid: l,
                    blinfo: k,
                    iw: a
                }
            }
            setTransInfoWd(g, a, poiUidObj[c], e)
        })
    } else {
        g.openInfoWindow(a);
        addStat(STAT_POP_DIR)
    }
    if (d._className == "BusTrans") {
        if (d.isOperated) {
            if (!isInBounds(f)) {
                map.setCenter(f)
            }
        } else {
            map.centerAndZoom(f, 17)
        }
    }
}
function setTransInfoWd(b, e, s, a) {
    var m = s.addr;
    var g = s.tel;
    var n = s.type;
    var i = s.pid;
    var r = s.blinfo;
    var h = [];
    b.openInfoWindow(e);
    addStat(STAT_POP_DIR);
    if (m && m != "") {
        if (n == 0) {
            h.push("地址：" + m + "<br/>")
        } else {
            if (a.showLine) {
                h.push(n == 1 ? "途经公交：": "途经地铁：");
                var o = formatBlinfo(r);
                for (var f = 0,
                q = [], c, k = {},
                d = o.length; f < d; f++) {
                    var c = r[f].addr;
                    if (!k[c]) {
                        h.push((f != 0 ? ", ": "") + "<a class='stalink' href='javascript:void(0)' ");
                        h.push("onclick='getLFS(this, \"" + o[f].uid + '", "' + i + '", ' + n + ", " + a.ccode + ', "' + e._transUid + "\")'>");
                        h.push(o[f].addr + "</a>");
                        k[c] = true
                    }
                }
                h.push('<span class="lfsPanel" id="lfsPanel"></span>')
            }
        }
    }
    if (g && g != "") {
        h.push("电话：" + g + "<br/>")
    }
    h = h.join("");
    var p = T.g("trans_info_content");
    if (p) {
        p.style.display = "block";
        p.innerHTML = h;
        p.style.paddingBottom = "5px"
    }
    e.redraw()
}
function getLFS(e, n, m, h, g, f) {
    var k = this,
    d = n.indexOf("_"),
    l,
    b,
    a,
    j = [];
    if (d >= 0) {
        l = n.split("_");
        b = l[0];
        a = l[1]
    }
    if (!poiUidObj[f].link) {
        T.ac(e, "active");
        poiUidObj[f].link = e;
        poiUidObj[f].guid = n
    } else {
        var c = poiUidObj[f].guid.split("_")[0];
        if (c != b && c != a) {
            T.rc(poiUidObj[f].link, "active");
            T.ac(e, "active");
            poiUidObj[f].link = e;
            poiUidObj[f].guid = n
        }
    }
    var i = "bsl&newmap=1&c=" + g + "&uid=" + (b ? b: n) + "&ie=utf-8&t=" + new Date().getTime();
    go(i,
    function(p) {
        var q = p.content[0];
        j.push("<dl tid='iwLineBox' class='lfs'><dt>" + q.name);
        if (d >= 0) {
            j.push(" <a href='javascript:void(0)' onclick='getLFS(this, \"" + a + "_" + b + '", "' + m + '", ' + h + ", " + g + ', "' + f + "\");return false;'>返程</a>")
        }
        j.push('</dt><dd><table cellspacing="1" cellpadding="0" width="100%">');
        if (q.startTime && q.endTime) {
            j.push("<tr><th>起点站首末班时间</th><td>" + q.startTime + " - " + q.endTime + "</td></tr>")
        } else {
            if (q.startTime) {
                j.push("<tr><th>起点站首班时间</th><td>" + q.startTime + "</td></tr>")
            }
            if (q.endTime) {
                j.push("<tr><th>起点站末班时间</th><td>" + q.endTime + "</td></tr>")
            }
        }
        if (q.maxPrice) {
            j.push("<tr><th>单程最高票价</th><td>" + (q.maxPrice / 100).toFixed(2) + "元</td></tr>")
        }
        j.push("</table></dd></dl>");
        o(m, true, j.join(""))
    });
    function o(q, r, p) {
        var s = T.g("lfsPanel");
        s.style.display = r ? "block": "none";
        s.innerHTML = p ? p: "";
        poiUidObj[f].iw.redraw()
    }
}
function parse2Geo(g, o) {
    if (!o) {
        o = 0
    } else {
        if (o < 0.25) {
            o = 0
        } else {
            if (o > 0.25 && o < 1) {
                o = 1
            } else {
                if (o > 32) {
                    o = 32
                }
            }
        }
    }
    var l = g.split("|");
    if (l.length == 1) {
        var k = decode_geo_diff(l[0]);
        return {
            type: k.type,
            bound: "",
            points: k.geo.join(",")
        }
    } else {
        if (l.length > 1) {
            var b = g.split(";.=");
            var m = [];
            var p = [];
            var h = 0;
            var q = b.length;
            for (var f = 0; f < q; f++) {
                var d = b[f];
                if (q > 1) {
                    if (f == 0) {
                        d = d + ";"
                    }
                    if (f > 0 && f < q - 1) {
                        d = ".=" + d + ";"
                    }
                    if (f == q - 1) {
                        d = ".=" + d
                    }
                }
                var c = d.split("|");
                var j = decode_geo_diff(c[0]);
                var e = decode_geo_diff(c[1]);
                m.push(j.geo.join(","));
                m.push(e.geo.join(","));
                var k = decode_geo_diff(c[2]);
                h = k.type;
                var a = k.geo.join(",");
                a = a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;");
                if (o > 0) {
                    var n = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + o + "}", "ig");
                    a = a.replace(n, "$1")
                }
                p.push(a)
            }
            if (q <= 1) {
                p = p.join(";")
            }
            return {
                type: h,
                bound: m.join(";"),
                points: p
            }
        }
    }
}
function cutPoints(c, b) {
    if (!b) {
        b = 0
    } else {
        if (b < 0.25) {
            b = 0
        } else {
            if (b > 0.25 && b < 1) {
                b = 1
            } else {
                if (b > 32) {
                    b = 32
                }
            }
        }
    }
    if (!c || typeof c != "string") {
        return
    }
    var a = c;
    if (b > 0) {
        var d = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig");
        a = c.replace(d, "$1")
    }
    return a
}
function getBPoints(e) {
    if (!e || e.length == 0) {
        return
    }
    var d = [];
    for (var c = 0; c < e.length; c++) {
        if (e[c]) {
            var f = e[c].split(";");
            for (var b = 0; b < f.length; b++) {
                var a = getPointByStr(f[b]);
                d.push(a)
            }
        }
    }
    return d
}
function addSearchPoi(j, g, k, a) {
    var m = getPoiPoint(j);
    if (!m || typeof(g) == "undefined" || g < 0 || g > 9) {
        return
    }
    a = a || {};
    a.type = a.type || "normal";
    var l, h = A_J_MARKER_NEWYEAR_IMG;
    if (a.type == "RouteAddrMarker" && !ENABLE_NEWYEAR_SKIN) {
        h = A_J_MARKER_IMG
    }
    if (a.type == "generic") {
        h = A_J_MARKER_IMG;
        var c = new BMap.Size( - 152, -134);
        var f = new BMap.Icon(h, new BMap.Size(11, 13), {
            offset: new BMap.Size(0, -10),
            imageOffset: c,
            infoWindowOffset: A_J_MARKER_INFOWND_OFFSET
        });
        l = OVERLAY_STYLE.GEN_MKR
    } else {
        var d = 0;
        if (a.type == "RouteAddrMarker") {
            d = -A_J_MARKER_ORANGE_ICON_Y
        }
        var c = new BMap.Size( - A_J_MARKER_RED_ICON_WID * g, d);
        var f = new BMap.Icon(h, A_J_MARKER_NEWYEAR_RED_SIZE, {
            offset: A_J_MARKER_NEWYEAR_RED_OFFSET,
            imageOffset: c,
            infoWindowOffset: A_J_MARKER_NEWYEAR_INFOWND_OFFSET
        });
        l = g + 1
    }
    var e = new BMap.Marker(m, {
        icon: f,
        zIndexFixed: true,
        baseZIndex: 2500000 - 100 * g
    });
    if (a.uid && typeof(a.ext_type) != "undefined" && !!(a.ext_type & 1)) {
        var b = "<span class='inr-tip' onclick='InrMgr.open(\"" + a.uid + '", {fr: "label", wd : "' + k + "\", code : STAT_INR_TIPS_CLICK})'>室内地图</span>";
        var i = createNormalTip(b, {
            point: m,
            offset: new BMap.Size(10, -22)
        });
        i.setStyle({
            background: "url(" + MapConfig.smFlwCon + "image/inr_bg.gif) 0 -29px no-repeat",
            height: "20px",
            border: "0"
        });
        i.setTitle("查看室内地图");
        i._indoor = true;
        e.setLabel(i)
    }
    map.addOverlay(e);
    if (a.type == "generic") {
        e.addEventListener("remove",
        function() {
            this.dispose()
        })
    }
    e._stCode = l;
    if (k) {
        e.setTitle(k)
    }
    return e
}
function createNormalTip(d, c) {
    var b = {
        display: true,
        style: {
            background: "url(" + MapConfig.smFlwCon + "image/tip.gif) 0 0 no-repeat",
            color: "#000",
            height: "30px",
            border: "0",
            padding: "0 0 0 4px"
        }
    };
    if (c && typeof c == "object") {
        c = T.extend(b, c)
    }
    var a = new BMap.Label(d, {
        point: c.point,
        offset: c.offset
    });
    return a
}
var rangeSearchCenterMarker = null;
function addRangeSearchCenterPoi(a, f, c, g) {
    if (rangeSearchCenterMarker) {
        rangeSearchCenterMarker.remove();
        rangeSearchCenterMarker = null
    }
    var e = getPoiPoint(a);
    if (!e) {
        return
    }
    var d = new BMap.Icon(A_J_MARKER_IMG, A_J_MARKER_BLUE_SIZE, {
        offset: A_J_MARKER_BLUE_OFFSET,
        imageOffset: new BMap.Size( - 68, -156),
        infoWindowOffset: A_J_MARKER_INFOWND_OFFSET
    });
    baseZIndex = g || 2500000;
    var b = new BMap.Marker(e, {
        icon: d,
        zIndexFixed: true,
        baseZIndex: baseZIndex
    });
    map.addOverlay(b);
    b._stCode = OVERLAY_STYLE.MKR_RCTR;
    if (!c) {
        rangeSearchCenterMarker = b
    }
    if (f) {
        b.setTitle(f)
    }
    return b
}
function addSearchInViewPoi(a, e) {
    var d = getPoiPoint(a);
    if (!d) {
        return
    }
    var c = new BMap.Icon(A_J_MARKER_IMG, A_J_MARKER_RED_SIZE, {
        offset: A_J_MARKER_OFFSET,
        imageOffset: new BMap.Size(0, -300),
        infoWindowOffset: A_J_MARKER_INFOWND_OFFSET
    });
    var b = new BMap.Marker(d, {
        icon: c
    });
    b._stCode = OVERLAY_STYLE.MKR_NULL;
    if (e) {
        b.setTitle(e)
    }
    b.siblingElement.hashCode = b.guid;
    map.addOverlay(b);
    return b
}
function addSearchInViewTitle(a, d, b) {
    var c = createSearchInViewTitle(a, d);
    c._stCode = OVERLAY_STYLE.VIW_LBL;
    if (!b || b.toString() != "Marker") {
        map.addOverlay(c);
        return c
    }
    b.setLabel(c);
    return c
}
function createSearchInViewTitle(a, f) {
    var c = getPoiPoint(a);
    if (!c) {
        return
    }
    var e = new BMap.Size(14, -21);
    var d = f;
    if (f.replace(/[\u0100-\uffff]/g, "##").length > 20) {
        f = f.substring(0, 10) + "..."
    }
    var b = new BMap.Label(f, {
        point: c,
        offset: e
    });
    b.setTitle(d);
    b.setStyle({
        lineHeight: "15px",
        padding: "1px 3px",
        borderColor: "#a7a7a7",
        color: "#666",
        cursor: "pointer"
    });
    return b
}
function addDetailPoi(a, e) {
    var d = getPoiPoint(a);
    if (!d) {
        return
    }
    var c = new BMap.Icon(A_J_MARKER_IMG, new BMap.Size(22, 31), {
        offset: new BMap.Size(11, 31),
        imageOffset: new BMap.Size(0, -116),
        infoWindowOffset: A_J_MARKER_INFOWND_OFFSET
    });
    var b = new BMap.Marker(d, {
        icon: c
    });
    map.addOverlay(b);
    b._stCode = OVERLAY_STYLE.MKR;
    if (e) {
        b.setTitle(e)
    }
    return b
}
function addRoute(j, h, b, e) {
    var d = [{
        stroke: 6,
        color: "#3a6bdb",
        opacity: 0.65,
        stCode: OVERLAY_STYLE.ROUTE
    },
    {
        stroke: 6,
        color: "#3a6bdb",
        opacity: 0.95,
        stCode: OVERLAY_STYLE.BUS_ROUTE
    },
    {
        stroke: 4,
        color: "#30a208",
        opacity: 0.65,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.WALK_ROUTE
    },
    {
        stroke: 5,
        color: "#3a6bdb",
        opacity: 0.65,
        stCode: OVERLAY_STYLE.DRV_ROUTE
    },
    {
        stroke: 6,
        color: "#3a6bdb",
        opacity: 0.5,
        stCode: OVERLAY_STYLE.BUS_ROUTE
    },
    {
        stroke: 4,
        color: "#30a208",
        opacity: 0.5,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.WALK_ROUTE
    },
    {
        stroke: 6,
        color: "#688DE1",
        opacity: 0.95,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.RAIL_DASHED_ROUTE
    }];
    if (typeof h == "undefined") {
        h = 0
    }
    if (!d[h]) {
        return
    }
    var g = d[h];
    var a = {
        strokeWeight: g.stroke,
        strokeColor: g.color,
        strokeOpacity: g.opacity,
        strokeStyle: g.strokeStyle
    };
    if (typeof j == "string" || j[0].toString() == "Point") {
        var c = new BMap.Polyline(j, a)
    } else {
        if (Object.prototype.toString.call(j) == "[object Array]") {
            var c = new BMap.PolylineMultipart(j, a)
        }
    }
    var f = e || map;
    f.addOverlay(c);
    c._stCode = d[h].stCode;
    c._routeType = h;
    if (h == ROUTE_TYPE_BUS) {
        var i = new BMap.Polyline(j, {
            strokeWeight: g.stroke - 2,
            strokeColor: "#fff",
            strokeOpacity: 0.3
        });
        c._p = i;
        f.addOverlay(i)
    }
    return c
}
function selectRoute(b) {
    if (!b || b.toString() != "Polyline") {
        return
    }
    var a = ["#ff0103", "#ff0103", "#ff0103", "#ff0103", "", "", "#ff0103"];
    if (a[b._routeType]) {
        b.setStrokeColor(a[b._routeType]);
        if (b._stCode == OVERLAY_STYLE.BUS_ROUTE) {
            b._stCode = OVERLAY_STYLE.HO_LINE
        } else {
            if (b._stCode == OVERLAY_STYLE.WALK_ROUTE) {
                b._stCode = OVERLAY_STYLE.HW_LINE
            } else {
                b._stCode = OVERLAY_STYLE.H_LINE
            }
        }
    }
}
function unSelectRoute(c) {
    if (!c || c.toString() != "Polyline") {
        return
    }
    var b = ["#3a6bdb", "#3a6bdb", "#30a208", "#3a6bdb", "", "", "#688DE1"];
    var a = [OVERLAY_STYLE.ROUTE, OVERLAY_STYLE.BUS_ROUTE, OVERLAY_STYLE.WALK_ROUTE, OVERLAY_STYLE.DRV_ROUTE, , , OVERLAY_STYLE.RAIL_DASHED_ROUTE];
    if (b[c._routeType]) {
        c.setStrokeColor(b[c._routeType]);
        c._stCode = a[c._routeType]
    }
}
function removeRoute(a) {
    if (a._p && a._p.toString() == "Polyline") {
        a._p.remove();
        a._p = null
    }
    a.remove();
    a = null
}
var AREA_TYPE_NORM = 0;
var AREA_TYPE_PROV = 1;
var AREA_TYPE_DIST = 2;
function addArea(e, d) {
    if (!e) {
        return
    }
    var c = [{
        strokeColor: "#0064fc",
        strokeWeight: 2,
        fillColor: false,
        strokeOpacity: 0.8,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.AREA
    },
    {
        strokeColor: "#0064fc",
        strokeWeight: 2,
        fillColor: false,
        strokeOpacity: 0.8,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.AREA
    },
    {
        strokeColor: "#0064fc",
        strokeWeight: 2,
        fillColor: false,
        strokeOpacity: 0.8,
        strokeStyle: "dashed",
        stCode: OVERLAY_STYLE.AREA
    }];
    var b = d || 0;
    if (!c[b]) {
        return
    }
    var a = new BMap.Polygon(e, c[b]);
    map.addOverlay(a);
    a.setFillColor(false);
    a._stCode = c[b].stCode;
    return a
}
function removeArea(a) {
    if (a.toString() == "Polygon") {
        a.remove();
        a = null
    }
}
var TRANS_TYPE_BUS = 0;
var TRANS_TYPE_SUB = 1;
var TRANS_TYPE_RAIL = 2;
var TRANS_TYPE_AIR = 3;
var TRANS_TYPE_DRIVING = 4;
var TRANS_TYPE_WALKING = 5;
function addTransPoi(h, g, i, a) {
    var j = [];
    var k = getPoiPoint(h);
    if (!k) {
        return
    }
    var f = OVERLAY_STYLE.BUS_TRANS;
    var c = -55;
    switch (g) {
    case TRANS_TYPE_BUS:
        c = -55;
        break;
    case TRANS_TYPE_SUB:
        f = OVERLAY_STYLE.SUB_TRANS;
        c = -76;
        break;
    case TRANS_TYPE_RAIL:
        c = -118;
        break;
    case TRANS_TYPE_AIR:
        c = -139;
        break;
    case TRANS_TYPE_DRIVING:
        c = -97;
        break;
    case TRANS_TYPE_WALKING:
        c = -160;
        break;
    default:
        break
    }
    var e = new BMap.Icon(MapConfig.smFlwCon + "image/trans_icons.png", new BMap.Size(21, 21), {
        imageOffset: new BMap.Size(0, c),
        infoWindowOffset: new BMap.Size(10, 0)
    });
    var d = new BMap.Marker(k, {
        icon: e
    });
    var b = a || map;
    d._stCode = f;
    if (i) {
        d.setTitle(i)
    }
    b.addOverlay(d);
    return d
}
function addBusStopPoi(a, f) {
    var e = [];
    var d = getPoiPoint(a);
    if (!d) {
        return
    }
    var c = new BMap.Icon(MapConfig.smFlwCon + "image/stop_icon.png", MARKER_11_11_SIZE, {
        offset: MARKER_11_11_OFFSET,
        infoWindowOffset: MARKER_11_11_INFOWND_OFFSET
    });
    var b = new BMap.Marker(d, {
        icon: c,
        baseZIndex: 1500000
    });
    map.addOverlay(b);
    b._stCode = OVERLAY_STYLE.BUS_STOP;
    if (f) {
        b.setTitle(f)
    }
    return b
}
var DEST_START = 0;
var DEST_END = 1;
var DEST_MIDDLE = 2;
var DEST_SEC = 3;
function addDestPoi(g, i, e, f, b) {
    b = b || map;
    var j = getPoiPoint(g);
    if (!j) {
        return
    }
    if (e == DEST_MIDDLE) {
        var d = new BMap.Icon(MapConfig.smFlwCon + "image/drv_m.png", MARKER_11_11_SIZE, {
            offset: MARKER_11_11_OFFSET,
            infoWindowOffset: MARKER_11_11_INFOWND_OFFSET
        });
        var c = new BMap.Marker(j, {
            icon: d
        });
        b.addOverlay(c);
        c.enableDragging(true);
        c._stCode = OVERLAY_STYLE.DRV_M_MKR;
        return c
    }
    if (e == DEST_SEC) {
        var d = new BMap.Icon(MapConfig.smFlwCon + "image/drv_m.png", MARKER_11_11_SIZE, {
            offset: MARKER_11_11_OFFSET,
            imageOffset: new BMap.Size(0, -11),
            infoWindowOffset: MARKER_11_11_INFOWND_OFFSET
        });
        var c = new BMap.Marker(j, {
            icon: d
        });
        b.addOverlay(c);
        c._stCode = OVERLAY_STYLE.DRV_E_MKR;
        return c
    }
    if (!f) {
        var d = new BMap.Icon(MapConfig.smFlwCon + "image/dest_markers.png", DEST_MARKER_SIZE, {
            offset: DEST_MARKER_OFFSET,
            imageOffset: new BMap.Size(0, -34 * e),
            infoWindowOffset: DEST_MARKER_INFOWND_OFFSET
        });
        var c = new BMap.Marker(j, {
            icon: d,
            baseZIndex: 3500000
        });
        if (i) {
            c.setTitle(i)
        }
        c._stCode = OVERLAY_STYLE.DS_MKR + e;
        b.addOverlay(c);
        return c
    }
    var h = i;
    if (h.length > 10) {
        h = h.substring(0, 10) + "..."
    }
    var a = new BMap.Label(i, {
        point: j
    });
    a.setStyles({
        cursor: "pointer"
    });
    a.setOffset(new BMap.Size( - 12, -28));
    a._stCode = OVERLAY_STYLE.DS_LBL + e;
    a.addEventListener("domready",
    function() {
        var l = a.getDom();
        l.style.border = "none";
        l.style.background = "transparent";
        l.style.overflow = "visible";
        l.style.zIndex = 2500000 + 2 * map.pointToPixel(j).y;
        l.style.cursor = "url(" + map.config.defaultCursor + "), default";
        if (!T.browser.ie) {
            T.on(l, "mousedown",
            function() {
                l.style.cursor = "url(" + map.config.draggingCursor + "), default"
            });
            T.on(l, "mouseup",
            function() {
                l.style.cursor = "url(" + map.config.defaultCursor + "), default"
            })
        }
        a.zIndex = l.style.zIndex;
        var k = "";
        if (T.browser.ie == 6) {
            k = '<div class="dest_icon_left_ie6 dest' + e + '"><div></div></div><div class="dest_icon_right_ie6"><div></div><span class="dest_text_ie6">' + h + "</span></div>"
        } else {
            k = '<div class="dest_icon dest' + e + '"><div class="dest_icon_right"><span class="dest_text">' + h + "</span></div></div>"
        }
        l.innerHTML = k
    });
    b.addOverlay(a);
    return a
}
function createDrvMidLabel(c, a) {
    var b = new BMap.Label(c, {
        point: a,
        offset: new BMap.Size(15, -5)
    });
    b.setStyles({
        border: "1px solid #999",
        color: "#666",
        padding: "2px",
        background: "#fff"
    });
    return b
}
function addDrvDirIcon(b, d, c) {
    c = c || map;
    var g = getPoiPoint(b);
    if (!g) {
        return
    }
    if (d < 0 || d > 12) {
        d = 0
    }
    var a = d * ( - 18);
    var f = new BMap.Icon(MapConfig.smFlwCon + "image/dest_markers.png", new BMap.Size(18, 18), {
        imageOffset: new BMap.Size(a, -100),
        infoWindowOffset: new BMap.Size(9, 0)
    });
    var e = new BMap.Marker(g, {
        icon: f
    });
    c.addOverlay(e);
    e._stCode = OVERLAY_STYLE.DIR_MKR + d;
    return e
}
var POI_TYPE_NORMAL = 0;
var POI_TYPE_BUSSTOP = 1;
var POI_TYPE_BUSLINE = 2;
var POI_TYPE_SUBSTOP = 3;
var POI_TYPE_SUBLINE = 4;
function createSearchInfoWnd(Z, aK) {
    var k = Z.title;
    var ag = Z.addr;
    var x = Z.desc;
    var M = Z.tel && Z.tel.replace(/(,|;)/ig, ", ");
    var au = Z.uid || "";
    var y = Z.poiType || POI_TYPE_NORMAL;
    var aa = Z.hasDetail;
    var at = Z.ext;
    var aN = Z.transUid;
    var aL = Z.topic;
    var p = Z.date;
    var e = Z.houseDetailUrl;
    var j = Z.mingpian;
    var u = at && at.pic_info ? at.pic_info: [];
    var aM = Z.userSign || 0;
    var al = Z.fav || 0;
    var o = Z.content;
    var m = window.place.placeRe,
    ak = window.place.placeConfig,
    N = !!at && at.src_name,
    z = {
        action: "open_iw"
    };
    var P = "";
    var ah = "";
    var aB = "";
    if (u.length > 0 && u[0].pics) {
        u = at.pic_info[0].pics
    }
    if (!aK) {
        aK = {}
    }
    var r = aK.cityCode || modelConfig.cityCode;
    var a = ["", "", ""];
    var E = ["none", "none", "none"];
    a[0] = "hover";
    E[0] = "block";
    if (!k) {
        return null
    }
    var ao = !!at;
    var aH = 345;
    if (ao) {
        switch (at.src_name) {
        case "ctrip_hotel":
            break;
        case "ctrip_site":
            ao = false;
            break;
        case "dianping":
            ao = false;
            break;
        case "house_new":
            break;
        case "house_ershou":
            break;
        case "biaozhu_data":
            break;
        default:
            break
        }
    }
    var G = k;
    if (y == POI_TYPE_BUSSTOP) {
        G = G + "-公交车站"
    } else {
        if (y == POI_TYPE_SUBSTOP) {
            G = G + "-地铁站"
        }
    }
    P = G;
    if (G.replace(/[\u0100-\uffff]/g, "##").length > 30) {
        G = G.substring(0, 14) + "..."
    }
    var aI = "<p class='iw_poi_title' title='" + k + "'>";
    if (aa || !aK.hideDetail && (y == POI_TYPE_BUSLINE || y == POI_TYPE_SUBLINE)) {
        if (G.replace(/[\u0100-\uffff]/g, "##").length > 25) {
            G = G.substring(0, 11) + "..."
        }
        aI += G;
        if (at && (at.src_name == "biaozhu_data" || m.test(N))) {
            var ay = "详情";
            if (at.src_name == "biaozhu_data" && (at.detail_info[1].description != "" || at.youhui_info.length > 0 && (at.youhui_info[0].info != "" || at.youhui_info[0].date.length == 2) || u.length > 0)) {} else {
                if (m.test(N)) {
                    var aP = N.toUpperCase() + "_";
                    aI += "<a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ', "' + at.src_name + '","Page","Iw");addStat(window["STAT_" + "' + aP + '"+ "PLACE_BOX_DETAIL"]);return false;\'>' + ay + "&raquo;</a>"
                } else {
                    aI += "<a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ', "' + at.src_name + '","Page","Iw");return false;\'>' + ay + "&raquo;</a>"
                }
            }
        } else {
            aI += "<a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ");return false;'>详情&raquo;</a>"
        }
    } else {
        aI += G
    }
    aI += "</p>";
    var aE = [];
    var aA = "";
    if (aM) {
        aA = 'style="display:none;"'
    }
    aE.push("<div class='iw_poi_conTop'" + aA + "><div>");
    if (ao && at.pic && at.pic.length > 0 && at.pic[0]) {
        aE.push("<div style='float:right;width:70px;height:70px;overflow:hidden;display:inline' title='" + k + "'><img border='0' alt='" + k + "' src='" + at.pic[0] + "'/></div>")
    }
    if (ao && at.src_name && (at.src_name == "biaozhu_data" && at.yw_type == "1" && u.length > 0 && u[0].minurl || (m.test(at.src_name) && at.detail_info && at.detail_info.image))) {
        var J = "";
        var aF = "";
        var I = 120;
        var aJ = 120;
        var W = 90;
        var d = 90;
        var K = "";
        var ar = "";
        var ae = "ISHOP_INFO_IMG";
        var aC = "";
        createSearchInfoWnd.iwImgLoading = 1;
        if (at.src_name == "biaozhu_data") {
            J = u[0].title;
            aF = u[0].minurl
        } else {
            J = k;
            I = 106;
            aJ = 104;
            W = 71;
            d = 69;
            K = " style='border:#bdbdbd solid 1px'";
            aF = at.detail_info.image;
            ae = at.src_name;
            aC = "Page_Pic";
            ar = ";text-align:center"
        }
        if (/sina|soufun/i.test(aF)) {
            aF += "?"
        }
        aE.push("<div style='float:right;width:" + I + "px;height:" + W + "px;display:inline" + ar + "' title='" + J + "'>");
        if (m.test(at.src_name)) {
            var aP = N.toUpperCase() + "_";
            aE.push("<a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ', "' + ae + '", "' + aC + '","Iw");addStat(window["STAT_"+"' + aP + '"+"PLACE_WID_IMG"]);return false;\'\'>')
        } else {
            aE.push("<a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ', "' + ae + '", "' + aC + '","Iw");return false;\'\'>')
        }
        aE.push("<img tid='iw_poi_img' onload='javascript:scaleImage(this," + aJ + "," + d + ")' width='" + aJ + "' height='" + d + "' border='0'" + K + " alt='" + J + "' src='" + aF + "' id='detail_" + au + "'/>");
        aE.push("</a>");
        aE.push("</div>");
        if (T.browser.ie == 6) {
            createSearchInfoWnd.iwImgLoadingSum = 0;
            if (createSearchInfoWnd.iwImgLoadingTimer) {
                clearInterval(createSearchInfoWnd.iwImgLoadingTimer)
            }
            createSearchInfoWnd.iwImgLoadingTimer = setInterval(function() {
                if (createSearchInfoWnd.iwImgLoadingSum >= 100) {
                    clearInterval(createSearchInfoWnd.iwImgLoadingTimer);
                    createSearchInfoWnd.iwImgLoadingSum = 0
                }
                if (createSearchInfoWnd.iwImgLoading && T.G("detail_" + au)) {
                    T.G("detail_" + au).src = aF;
                    createSearchInfoWnd.iwImgLoadingSum++
                }
            },
            100)
        }
    }
    var ac = 25;
    if (ao && at && at.title_link) {
        aE.push("<div class='iw_poi_content iw_poi_content_search' style='width:220px'>")
    } else {
        if (ao && at && ((at.src_name == "biaozhu_data" && u.length > 0) || (m.test(at.src_name) && at.detail_info.image))) {
            aE.push("<div class='iw_poi_content iw_poi_content_search' style='width:190px'>")
        } else {
            aE.push("<div class='iw_poi_content iw_poi_content_search'>");
            ac = 35
        }
    }
    if (at && at.src_name == "biaozhu_data") {
        aE.push("<div>");
        if (at.detail_info && at.detail_info.length > 0) {
            if (at.detail_info[0].city.length > 0) {
                var X = at.detail_info[0];
                var L = X.city[0].replace(/\d+\-/g, "");
                if (L == "北京市" || L == "重庆市" || L == "上海市" || L == "天津市" || L == "澳门特别行政区" || L == "香港特别行政区") {
                    X.city[0] = ""
                }
                var b = X.city.join("").replace(/\d+\-/g, "");
                aE.push(b)
            }
            if (at.detail_info[0].street != "") {
                aE.push(at.detail_info[0].street)
            }
            if (at.detail_info[0].address != "") {
                aE.push(at.detail_info[0].address)
            }
        }
        aE.push("</div>");
        if (at.detail_info && at.detail_info.length > 0 && at.detail_info[0].tels.length > 0) {
            for (var S = 0,
            O = at.detail_info[0].tels.length; S < O; S++) {
                if (at.detail_info[0].tels[S].type != 2) {
                    aE.push("<div>" + at.detail_info[0].tels[S].no + "</div>")
                }
            }
        }
        if (at.detail_info[0].website != "") {
            aE.push("<div><a style='color:#A49FD1' target='_blank' href='" + at.detail_info[0].website + "'>" + T.string.subByte(at.detail_info[0].website, ac, "...") + "</a></div>")
        }
        if (at.yw_type == "1") {
            if (at.youhui_info.length > 0 && (at.youhui_info[0].date != "" || at.youhui_info[0].info != "" || at.youhui_info[0].pics.length > 0)) {
                aE.push("<div>优惠信息：</div>");
                var af = "http://map.baidu.com/ishop/detail.html?newmap=1&s=" + encodeURIComponent("inf&uid=" + au + "&c=" + r + "&newmap=1") + "#speresult";
                aE.push("<div><a target='_blank' style='color:#A49FD1' href='" + af + "'>" + T.string.subByte(af, ac, "...") + "</a></div>")
            }
            if (at.detail_info[1].description != "" || at.youhui_info.length > 0 && (at.youhui_info[0].info != "" || at.youhui_info[0].date.length > 0 || at.youhui_info[0].pics.length > 0) || u.length > 0) {
                aE.push("<div style='margin-top:3px;'><a href='javascript:void(0)' onclick='showDetail(\"" + au + '", ' + y + ", " + r + ', "ISHOP_INFO");return false;\'>更多详情&raquo;</a></div>')
            }
        }
    } else {
        if (ag) {
            if (y == POI_TYPE_BUSSTOP || y == POI_TYPE_SUBSTOP) {
                aE.push("<p>车次：" + ag + "</p>");
                ah = (y == POI_TYPE_BUSSTOP ? "途经公交：": "途经地铁：") + ag
            } else {
                aE.push('<table cellspacing="0" class="table_addr_tel"><tr tid="iw_poi_addr"><th>地址：&nbsp;</th><td>');
                aE.push(ag + "&nbsp;</td></tr>");
                ah = ag;
                if (M) {
                    aE.push('<tr tid="iw_poi_tel"><th>电话：&nbsp;</th><td>' + M + "</td></tr>");
                    aB = M
                }
                aE.push("</table>")
            }
        } else {
            if (M) {
                aE.push('<table cellspacing="0" class="table_addr_tel">');
                aE.push('<tr tid="iw_poi_tel"><th>电话：&nbsp;</th><td>' + M + "</td></tr>");
                aB = M;
                aE.push("</table>")
            }
        }
    }
    if (x) {
        aE.push("<p>" + x + "</p>")
    }
    if (at && m.test(at.src_name)) {
        var D = at.detail_info,
        aP = N.toUpperCase() + "_";
        if (at.src_name != "cater" && D.homepage) {
            aE.push('<div class="url"><a href="' + D.homepage + '" target="_blank" onclick ="addStat(window[\'STAT_\'+\'' + aP + "'+'PLACE_LINK'])\">" + D.homepage + "</a></div>")
        }
        if (D.overall_rating || D.comment_num || D.price) {
            aE.push('<div class="hotel_iw">');
            if (D.overall_rating) {
                var I = Math.round((D.overall_rating * 1) * (64 / 5));
                I = isNaN(I) ? 0 : I;
                if (I > 0) {
                    aE.push('<span class="score"><b style="width:' + I + 'px">评分</b></span><span tid="iw_poi_score" class="starNum">' + D.overall_rating + "</span>")
                }
            }
            if (D.price) {
                var f = parseFloat(D.price),
                av = ak.basicInfoCN[at.src_name],
                am = av.price,
                aO = av.priceUnit;
                if (!isNaN(f) && f > 0 && am && aO) {
                    aE.push('<span tid="iw_poi_price" class="price">' + am + "：" + f + aO + "</span>")
                }
            }
            aE.push("</div>")
        }
        if (M) {
            M = M.replace("、", "<br />")
        }
    }
    if (aL) {
        aE.push('<table cellspacing="0" class="table_addr_tel">');
        aE.push("<tr><th>主题：&nbsp;</th><td>" + aL + "</td></tr>");
        aE.push("</table>")
    }
    if (p) {
        aE.push('<table cellspacing="0" class="table_addr_tel">');
        aE.push('<tr><th style="width:48px;text-align:left">场馆日：&nbsp;</th><td><span>' + p + "</span></td></tr>");
        aE.push("</table>")
    }
    var B = {
        list: [{
            venuename: "\u57ce\u5e02\u672a\u6765\u9986",
            baike: {
                name: "\u57ce\u5e02\u672a\u6765\u9986",
                url: "http://baike.baidu.com/view/3485391.htm"
            }
        },
        {
            venuename: "\u6cd5\u56fd\u9986",
            baike: {
                name: "\u6cd5\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455454.htm"
            }
        },
        {
            venuename: "\u975e\u6d32\u8054\u5408\u9986",
            baike: {
                name: "\u975e\u6d32\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3454883.htm"
            }
        },
        {
            venuename: "\u9ece\u5df4\u5ae9\u9986",
            baike: {
                name: "\u9ece\u5df4\u5ae9\u9986",
                url: "http://baike.baidu.com/view/3479911.html"
            }
        },
        {
            venuename: "\u4e16\u535a\u6587\u5316\u4e2d\u5fc3",
            baike: {
                name: "\u4e16\u535a\u6587\u5316\u4e2d\u5fc3",
                url: "http://baike.baidu.com/view/3365273.htm"
            }
        },
        {
            venuename: "\u4e16\u535a\u8f74",
            baike: {
                name: "\u4e16\u535a\u8f74",
                url: "http://baike.baidu.com/view/3481036.htm"
            }
        },
        {
            venuename: "\u4e16\u754c\u6c14\u8c61\u9986",
            baike: {
                name: "\u4e16\u754c\u6c14\u8c61\u9986",
                url: "http://baike.baidu.com/view/3485450.htm"
            }
        },
        {
            venuename: "\u4e07\u79d1\u9986",
            baike: {
                name: "\u4e07\u79d1\u9986",
                url: "http://baike.baidu.com/view/3464512.htm"
            }
        },
        {
            venuename: "\u5370\u5ea6\u5c3c\u897f\u4e9a\u9986",
            baike: {
                name: "\u5370\u5ea6\u5c3c\u897f\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3454980.htm"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u8239\u8236\u9986",
            baike: {
                name: "\u4e2d\u56fd\u8239\u8236\u9986",
                url: "http://baike.baidu.com/view/3409991.htm"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u77f3\u6cb9\u9986",
            baike: {
                name: "\u4e2d\u56fd\u77f3\u6cb9\u9986",
                url: "http://baike.baidu.com/view/3485404.html"
            }
        },
        {
            venuename: "\u4e2d\u5357\u7f8e\u6d32\u8054\u5408\u9986",
            baike: {
                name: "\u4e2d\u5357\u7f8e\u6d32\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3455139.htm"
            }
        },
        {
            venuename: "\u963f\u66fc\u9986",
            baike: {
                name: "\u963f\u66fc\u9986",
                url: "http://baike.baidu.com/view/3487619.htm"
            }
        },
        {
            venuename: "\u6ce2\u9ed1\u9986",
            baike: {
                name: "\u6ce2\u9ed1\u9986",
                url: "http://baike.baidu.com/view/3455503.html"
            }
        },
        {
            venuename: "\u4e39\u9ea6\u9986",
            baike: {
                name: "\u4e39\u9ea6\u9986",
                url: "http://baike.baidu.com/view/3455480.htm"
            }
        },
        {
            venuename: "\u4fc4\u7f57\u65af\u9986",
            baike: {
                name: "\u4fc4\u7f57\u65af\u9986",
                url: "http://baike.baidu.com/view/3455460.htm"
            }
        },
        {
            venuename: "\u53e4\u5df4\u9986",
            baike: {
                name: "\u53e4\u5df4\u9986",
                url: "http://baike.baidu.com/view/3463101.htm"
            }
        },
        {
            venuename: "\u54c8\u8428\u514b\u65af\u5766\u9986",
            baike: {
                name: "\u54c8\u8428\u514b\u65af\u5766\u9986",
                url: "http://baike.baidu.com/view/3455428.html"
            }
        },
        {
            venuename: "\u97e9\u56fd\u9986",
            baike: {
                name: "\u97e9\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455406.htm"
            }
        },
        {
            venuename: "\u97e9\u56fd\u4f01\u4e1a\u8054\u5408\u9986",
            baike: {
                name: "\u97e9\u56fd\u4f01\u4e1a\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3485436.htm"
            }
        },
        {
            venuename: "\u53ef\u53e3\u53ef\u4e50\u9986",
            baike: {
                name: "\u53ef\u53e3\u53ef\u4e50\u9986",
                url: "http://baike.baidu.com/view/3464528.htm"
            }
        },
        {
            venuename: "\u5362\u68ee\u5821\u9986",
            baike: {
                name: "\u5362\u68ee\u5821\u9986",
                url: "http://baike.baidu.com/view/3455569.htm"
            }
        },
        {
            venuename: "\u7f8e\u56fd\u9986",
            baike: {
                name: "\u7f8e\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455081.htm"
            }
        },
        {
            venuename: "\u5357\u975e\u9986",
            baike: {
                name: "\u5357\u975e\u9986",
                url: "http://baike.baidu.com/view/3455161.htm"
            }
        },
        {
            venuename: "\u632a\u5a01\u9986",
            baike: {
                name: "\u632a\u5a01\u9986",
                url: "http://baike.baidu.com/view/3454998.htm"
            }
        },
        {
            venuename: "\u8461\u8404\u7259\u9986",
            baike: {
                name: "\u8461\u8404\u7259\u9986",
                url: "http://baike.baidu.com/view/3482315.htm"
            }
        },
        {
            venuename: "\u65e5\u672c\u4ea7\u4e1a\u8054\u5408\u9986",
            baike: {
                name: "\u65e5\u672c\u4ea7\u4e1a\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3455028.htm"
            }
        },
        {
            venuename: "\u745e\u58eb\u9986",
            baike: {
                name: "\u745e\u58eb\u9986",
                url: "http://baike.baidu.com/view/3455095.htm"
            }
        },
        {
            venuename: "\u4e16\u535a\u4e2d\u5fc3",
            baike: {
                name: "\u4e16\u535a\u4e2d\u5fc3",
                url: "http://baike.baidu.com/view/3365278.htm"
            }
        },
        {
            venuename: "\u4e16\u535a\u8f74\u9633\u5149\u8c37",
            baike: {
                name: "\u4e16\u535a\u8f74\u9633\u5149\u8c37",
                url: "http://baike.baidu.com/view/2386387.html"
            }
        },
        {
            venuename: "\u65af\u91cc\u5170\u5361\u9986",
            baike: {
                name: "\u65af\u91cc\u5170\u5361\u9986",
                url: "http://baike.baidu.com/view/3487545.html"
            }
        },
        {
            venuename: "\u592a\u5e73\u6d0b\u8054\u5408\u9986",
            baike: {
                name: "\u592a\u5e73\u6d0b\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3454895.htm"
            }
        },
        {
            venuename: "\u6cf0\u56fd\u9986",
            baike: {
                name: "\u6cf0\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455278.htm"
            }
        },
        {
            venuename: "\u571f\u5e93\u66fc\u65af\u5766\u9986",
            baike: {
                name: "\u571f\u5e93\u66fc\u65af\u5766\u9986",
                url: "http://baike.baidu.com/view/3461957.html"
            }
        },
        {
            venuename: "\u897f\u73ed\u7259\u9986",
            baike: {
                name: "\u897f\u73ed\u7259\u9986",
                url: "http://baike.baidu.com/view/3455345.htm"
            }
        },
        {
            venuename: "\u5e0c\u814a\u9986",
            baike: {
                name: "\u5e0c\u814a\u9986",
                url: "http://baike.baidu.com/view/3482357.html"
            }
        },
        {
            venuename: "\u9999\u6e2f\u9986",
            baike: {
                name: "\u9999\u6e2f\u9986",
                url: "http://baike.baidu.com/view/3480943.html"
            }
        },
        {
            venuename: "\u65b0\u52a0\u5761\u9986",
            baike: {
                name: "\u65b0\u52a0\u5761\u9986",
                url: "http://baike.baidu.com/view/3455361.htm"
            }
        },
        {
            venuename: "\u65b0\u897f\u5170\u9986",
            baike: {
                name: "\u65b0\u897f\u5170\u9986",
                url: "http://baike.baidu.com/view/3455377.htm"
            }
        },
        {
            venuename: "\u4fe1\u606f\u901a\u4fe1\u9986",
            baike: {
                name: "\u4fe1\u606f\u901a\u4fe1\u9986",
                url: "http://baike.baidu.com/view/3488655.htm"
            }
        },
        {
            venuename: "\u5308\u7259\u5229\u9986",
            baike: {
                name: "\u5308\u7259\u5229\u9986",
                url: "http://baike.baidu.com/view/3455387.htm"
            }
        },
        {
            venuename: "\u5370\u5ea6\u9986",
            baike: {
                name: "\u5370\u5ea6\u9986",
                url: "http://baike.baidu.com/view/3454967.htm"
            }
        },
        {
            venuename: "\u82f1\u56fd\u9986",
            baike: {
                name: "\u82f1\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455072.htm"
            }
        },
        {
            venuename: "\u8d8a\u5357\u9986",
            baike: {
                name: "\u8d8a\u5357\u9986",
                url: "http://baike.baidu.com/view/3464188.html"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u94c1\u8def\u9986",
            baike: {
                name: "\u4e2d\u56fd\u94c1\u8def\u9986",
                url: "http://baike.baidu.com/view/3485397.htm"
            }
        },
        {
            venuename: "\u963f\u5c14\u53ca\u5229\u4e9a\u9986",
            baike: {
                name: "\u963f\u5c14\u53ca\u5229\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3455104.htm"
            }
        },
        {
            venuename: "\u963f\u8054\u914b\u9986",
            baike: {
                name: "\u963f\u8054\u914b\u9986",
                url: "http://baike.baidu.com/view/3455126.htm"
            }
        },
        {
            venuename: "\u7231\u5c14\u5170\u9986",
            baike: {
                name: "\u7231\u5c14\u5170\u9986",
                url: "http://baike.baidu.com/view/3455142.htm"
            }
        },
        {
            venuename: "\u5965\u5730\u5229\u9986",
            baike: {
                name: "\u5965\u5730\u5229\u9986",
                url: "http://baike.baidu.com/view/3455598.htm"
            }
        },
        {
            venuename: "\u6fb3\u5927\u5229\u4e9a\u9986",
            baike: {
                name: "\u6fb3\u5927\u5229\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3455221.htm"
            }
        },
        {
            venuename: "\u5df4\u57fa\u65af\u5766\u9986",
            baike: {
                name: "\u5df4\u57fa\u65af\u5766\u9986",
                url: "http://baike.baidu.com/view/3455591.htm"
            }
        },
        {
            venuename: "\u5df4\u897f\u9986",
            baike: {
                name: "\u5df4\u897f\u9986",
                url: "http://baike.baidu.com/view/3455532.htm"
            }
        },
        {
            venuename: "\u6bd4\u5229\u65f6-\u6b27\u76df\u9986",
            baike: {
                name: "\u6bd4\u5229\u65f6-\u6b27\u76df\u9986",
                url: "http://baike.baidu.com/view/3455522.htm"
            }
        },
        {
            venuename: "\u6ce2\u5170\u9986",
            baike: {
                name: "\u6ce2\u5170\u9986",
                url: "http://baike.baidu.com/view/3455498.htm"
            }
        },
        {
            venuename: "\u5fb7\u56fd\u9986",
            baike: {
                name: "\u5fb7\u56fd\u9986",
                url: "http://baike.baidu.com/view/3455468.htm"
            }
        },
        {
            venuename: "\u83f2\u5f8b\u5bbe\u9986",
            baike: {
                name: "\u83f2\u5f8b\u5bbe\u9986",
                url: "http://baike.baidu.com/view/3487581.htm"
            }
        },
        {
            venuename: "\u82ac\u5170\u9986",
            baike: {
                name: "\u82ac\u5170\u9986",
                url: "http://baike.baidu.com/view/3455442.htm"
            }
        },
        {
            venuename: "\u56fd\u5bb6\u7535\u7f51\u9986",
            baike: {
                name: "\u56fd\u5bb6\u7535\u7f51\u9986",
                url: "http://baike.baidu.com/view/3485440.htm"
            }
        },
        {
            venuename: "\u52a0\u62ff\u5927\u9986",
            baike: {
                name: "\u52a0\u62ff\u5927\u9986",
                url: "http://baike.baidu.com/view/3455554.htm"
            }
        },
        {
            venuename: "\u6377\u514b\u9986",
            baike: {
                name: "\u6377\u514b\u9986",
                url: "http://baike.baidu.com/view/3455559.htm"
            }
        },
        {
            venuename: "\u5361\u5854\u5c14\u9986",
            baike: {
                name: "\u5361\u5854\u5c14\u9986",
                url: "http://baike.baidu.com/view/3479952.html"
            }
        },
        {
            venuename: "\u62c9\u8131\u7ef4\u4e9a\u9986",
            baike: {
                name: "\u62c9\u8131\u7ef4\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3479868.html"
            }
        },
        {
            venuename: "\u7f57\u9a6c\u5c3c\u4e9a\u9986",
            baike: {
                name: "\u7f57\u9a6c\u5c3c\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3455549.htm"
            }
        },
        {
            venuename: "\u9a6c\u6765\u897f\u4e9a\u9986",
            baike: {
                name: "\u9a6c\u6765\u897f\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3455536.htm"
            }
        },
        {
            venuename: "\u79d8\u9c81\u9986",
            baike: {
                name: "\u79d8\u9c81\u9986",
                url: "http://baike.baidu.com/view/3455101.htm"
            }
        },
        {
            venuename: "\u6469\u6d1b\u54e5\u9986",
            baike: {
                name: "\u6469\u6d1b\u54e5\u9986",
                url: "http://baike.baidu.com/view/3455116.htm"
            }
        },
        {
            venuename: "\u58a8\u897f\u54e5\u9986",
            baike: {
                name: "\u58a8\u897f\u54e5\u9986",
                url: "http://baike.baidu.com/view/3455155.htm"
            }
        },
        {
            venuename: "\u5c3c\u6cca\u5c14\u9986",
            baike: {
                name: "\u5c3c\u6cca\u5c14\u9986",
                url: "http://baike.baidu.com/view/3455183.htm"
            }
        },
        {
            venuename: "\u745e\u5178\u9986",
            baike: {
                name: "\u745e\u5178\u9986",
                url: "http://baike.baidu.com/view/3455052.htm"
            }
        },
        {
            venuename: "\u585e\u5c14\u7ef4\u4e9a\u9986",
            baike: {
                name: "\u585e\u5c14\u7ef4\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3464229.htm"
            }
        },
        {
            venuename: "\u4e0a\u6d77\u4f01\u4e1a\u8054\u5408\u9986",
            baike: {
                name: "\u4e0a\u6d77\u4f01\u4e1a\u8054\u5408\u9986",
                url: "http://baike.baidu.com/view/3485433.htm"
            }
        },
        {
            venuename: "\u4e0a\u6c7d\u96c6\u56e2-\u901a\u7528\u6c7d\u8f66\u9986",
            baike: {
                name: "\u4e0a\u6c7d\u96c6\u56e2-\u901a\u7528\u6c7d\u8f66\u9986",
                url: "http://baike.baidu.com/view/3365319.htm"
            }
        },
        {
            venuename: "\u4e16\u754c\u8d38\u6613\u4e2d\u5fc3\u534f\u4f1a\u9986",
            baike: {
                name: "\u4e16\u754c\u8d38\u6613\u4e2d\u5fc3\u534f\u4f1a\u9986",
                url: "http://baike.baidu.com/view/3463956.htm"
            }
        },
        {
            venuename: "\u601d\u79d1\u9986",
            baike: {
                name: "\u601d\u79d1\u9986",
                url: "http://baike.baidu.com/view/3485427.htm"
            }
        },
        {
            venuename: "\u53f0\u6e7e\u9986",
            baike: {
                name: "\u53f0\u6e7e\u9986",
                url: "http://baike.baidu.com/view/3480921.htm"
            }
        },
        {
            venuename: "\u4e4c\u5179\u522b\u514b\u65af\u5766\u9986",
            baike: {
                name: "\u4e4c\u5179\u522b\u514b\u65af\u5766\u9986",
                url: "http://baike.baidu.com/view/3461967.html"
            }
        },
        {
            venuename: "\u610f\u5927\u5229\u9986",
            baike: {
                name: "\u610f\u5927\u5229\u9986",
                url: "http://baike.baidu.com/view/3476982.htm"
            }
        },
        {
            venuename: "\u8fdc\u5927\u9986",
            baike: {
                name: "\u8fdc\u5927\u9986",
                url: "http://baike.baidu.com/view/3464303.htm"
            }
        },
        {
            venuename: "\u9707\u65e6\u9986",
            baike: {
                name: "\u9707\u65e6\u9986",
                url: "http://baike.baidu.com/view/3485413.htm"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u56fd\u5bb6\u9986",
            baike: {
                name: "\u4e2d\u56fd\u56fd\u5bb6\u9986",
                url: "http://baike.baidu.com/view/3487840.htm"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u822a\u7a7a\u9986",
            baike: {
                name: "\u4e2d\u56fd\u822a\u7a7a\u9986",
                url: "http://baike.baidu.com/view/3485376.htm"
            }
        },
        {
            venuename: "\u4e2d\u56fd\u4eba\u4fdd\u9986",
            baike: {
                name: "\u4e2d\u56fd\u4eba\u4fdd\u9986",
                url: "http://baike.baidu.com/view/3485407.htm"
            }
        },
        {
            venuename: "\u57c3\u53ca\u9986",
            baike: {
                name: "\u57c3\u53ca\u9986",
                url: "http://baike.baidu.com/view/3455135.html"
            }
        },
        {
            venuename: "\u7231\u6c99\u5c3c\u4e9a\u9986",
            baike: {
                name: "\u7231\u6c99\u5c3c\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3479832.html"
            }
        },
        {
            venuename: "\u767d\u4fc4\u7f57\u65af\u9986",
            baike: {
                name: "\u767d\u4fc4\u7f57\u65af\u9986",
                url: "http://baike.baidu.com/view/3479856.html"
            }
        },
        {
            venuename: "\u671d\u9c9c\u9986",
            baike: {
                name: "\u671d\u9c9c\u9986",
                url: "http://baike.baidu.com/view/3479977.htm"
            }
        },
        {
            venuename: "\u8377\u5170\u9986",
            baike: {
                name: "\u8377\u5170\u9986",
                url: "http://baike.baidu.com/view/3455397.htm"
            }
        },
        {
            venuename: "\u67ec\u57d4\u5be8\u9986",
            baike: {
                name: "\u67ec\u57d4\u5be8\u9986",
                url: "http://baike.baidu.com/view/3487991.htm"
            }
        },
        {
            venuename: "\u5229\u6bd4\u4e9a\u9986",
            baike: {
                name: "\u5229\u6bd4\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3479880.html"
            }
        },
        {
            venuename: "\u6c99\u7279\u963f\u62c9\u4f2f\u9986",
            baike: {
                name: "\u6c99\u7279\u963f\u62c9\u4f2f\u9986",
                url: "http://baike.baidu.com/view/3455222.html"
            }
        },
        {
            venuename: "\u65af\u6d1b\u4f10\u514b\u9986",
            baike: {
                name: "\u65af\u6d1b\u4f10\u514b\u9986",
                url: "http://baike.baidu.com/view/3476852.htm"
            }
        },
        {
            venuename: "\u592a\u7a7a\u5bb6\u56ed\u9986",
            baike: {
                name: "\u592a\u7a7a\u5bb6\u56ed\u9986",
                url: "http://baike.baidu.com/view/3485419.htm"
            }
        },
        {
            venuename: "\u571f\u8033\u5176\u9986",
            baike: {
                name: "\u571f\u8033\u5176\u9986",
                url: "http://baike.baidu.com/view/3455300.htm"
            }
        },
        {
            venuename: "\u59d4\u5185\u745e\u62c9\u9986",
            baike: {
                name: "\u59d4\u5185\u745e\u62c9\u9986",
                url: "http://baike.baidu.com/view/3455314.htm"
            }
        },
        {
            venuename: "\u6587\u83b1\u9986",
            baike: {
                name: "\u6587\u83b1\u9986",
                url: "http://baike.baidu.com/view/3487593.html"
            }
        },
        {
            venuename: "\u4e4c\u514b\u5170\u9986",
            baike: {
                name: "\u4e4c\u514b\u5170\u9986",
                url: "http://baike.baidu.com/view/3455324.html"
            }
        },
        {
            venuename: "\u4f0a\u6717\u9986",
            baike: {
                name: "\u4f0a\u6717\u9986",
                url: "http://baike.baidu.com/view/3487565.html"
            }
        },
        {
            venuename: "\u4ee5\u8272\u5217\u9986",
            baike: {
                name: "\u4ee5\u8272\u5217\u9986",
                url: "http://baike.baidu.com/view/3454992.htm"
            }
        },
        {
            venuename: "\u667a\u5229\u9986",
            baike: {
                name: "\u667a\u5229\u9986",
                url: "http://baike.baidu.com/view/3455129.htm"
            }
        },
        {
            venuename: "\u6fb3\u95e8\u9986",
            baike: {
                name: "\u6fb3\u95e8\u9986",
                url: "http://baike.baidu.com/view/3480909.html"
            }
        },
        {
            venuename: "\u51b0\u5c9b\u9986",
            baike: {
                name: "\u51b0\u5c9b\u9986",
                url: "http://baike.baidu.com/view/3455512.htm"
            }
        },
        {
            venuename: "\u54e5\u4f26\u6bd4\u4e9a\u9986",
            baike: {
                name: "\u54e5\u4f26\u6bd4\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3455409.htm"
            }
        },
        {
            venuename: "\u6469\u7eb3\u54e5\u9986",
            baike: {
                name: "\u6469\u7eb3\u54e5\u9986",
                url: "http://baike.baidu.com/view/3455146.htm"
            }
        },
        {
            venuename: "\u5c3c\u65e5\u5229\u4e9a\u9986",
            baike: {
                name: "\u5c3c\u65e5\u5229\u4e9a\u9986",
                url: "http://baike.baidu.com/view/3454927.html"
            }
        },
        {
            venuename: "\u7a81\u5c3c\u65af\u9986",
            baike: {
                name: "\u7a81\u5c3c\u65af\u9986",
                url: "http://baike.baidu.com/view/3455285.htm"
            }
        }]
    };
    var Y;
    for (var S = 0,
    Q = B.list.length; S < Q; S++) {
        if (k == B.list[S].venuename) {
            Y = B.list[S].baike.url;
            break
        }
    }
    if (Y) {
        aE.push('<table cellspacing="0" class="table_addr_tel">');
        aE.push('<tr><th style="width:72px;text-align:left">世博百科馆：&nbsp;</th><td><span><a href="' + Y + '"" target="_blank">' + k + "</a></span></td></tr>");
        aE.push("</table>")
    }
    if (ao && at && at.title_link) {
        var q = ["<p style='margin-top:2px'>"];
        if (at.title_link) {
            for (var S = 0,
            Q = at.title_link.length; S < Q; S++) {
                q.push("<a href='" + at.title_link[S].link + "' target='_blank' onclick='nsClick(this.href, \"" + at.src_name + "\")'>" + at.title_link[S].title + "</a>");
                if (S < at.title_link.length - 1) {
                    q.push("&nbsp;&nbsp;")
                }
            }
        }
        aE.push(q.join(""));
        aE.push("</p>")
    }
    aE.push('</div></div><div style=""></div>');
    if (e) {
        aE.push('<p><a href="javascript:void(0)" onclick ="addStat(' + STAT_PLACE_HOUSE_WINGOTOBDLEJU + ");window.open('" + e + '\');return false;" class="housedetail">查看房产地图&raquo;</a></p>')
    }
    if (j) {
        aE.push("<p>" + j + "</p>")
    }
    if (at && at.detail_info && m.test(at.src_name)) {
        var D = at.detail_info,
        aP = N.toUpperCase() + "_";
        if (D.tag && D.tag != "" && !D.other_movie_num) {
            var ax = D.tag.replace(new RegExp(",", "gm"), " ");
            aE.push('<p tid="iw_poi_tag" class="tag">标签：' + ax + "</p>")
        }
        if (D.premium && Object.prototype.toString.call(D.premium) == "[object Array]") {
            var R = D.premium[0],
            V = R.discount_title;
            if (V.length > 20) {
                V = V.substr(0, 20) + "..."
            }
            aE.push(['<p class="place-preferential">', "<a onclick=\"showDetail('" + au + "', '" + y + "', '" + r + "', '" + at.src_name + "','page_discount','Iw');addStat('" + STAT_PLACE_LINK_IW_PREMIUM + "',{'uid':'" + au + "',ct:'iw'})\" href=\"javascript:void(0)\">", "<em></em><strong>" + V + "</strong><i></i>", "</a></p>"].join(""));
            z.discount = 1
        }
        if (D.groupon && Object.prototype.toString.call(D.groupon) == "[object Array]") {
            aE.push(['<p class="place-preferential groupon">', "<a onclick=\"showDetail('" + au + "', '" + y + "', '" + r + "', '" + at.src_name + "','groupon','Iw');return false\" href=\"javascript:void(0)\">", "<em></em><strong>" + D.groupon.length + "条团购信息</strong>", "</a></p>"].join(""));
            z.groupon = 1
        }
        if (D.other_movie_num) {
            aE.push(['<p class="link"><span>今日上映&nbsp;' + D.other_movie_num + "部电影，</span>", "<a onclick=\"showDetail('" + au + "', '" + y + "', '" + r + "', '" + at.src_name + "','other_movie','Iw');return false\" href=\"javascript:void(0)\">", "查看放映表&gt;&gt;", "</a></p>"].join(""));
            z.other_movie = 1
        }
        if (D.link = (D.link || [])) {
            var ai = [];
            ai.push('<p tid="iw_poi_detail" class="link">详情：');
            for (var Q = 0; Q < D.link.length; Q++) {
                if (D.link && D.link[Q].url) {
                    if (D.link[Q].name == "kuxun") {
                        D.link[Q].url = D.link[Q].url + "?fromid=Khslmapbaidu-S1168731-T1183261&est=marketing"
                    }
                    ai.push("<span onclick=\"addStat(window['STAT_'+'" + aP + "'+'PLACE_BOX_LINK'],{name: '" + D.link[Q].name + "'});addStat(window['STAT_'+'" + aP + "'+'PLACE_ALL_LINK'],{name: '" + D.link[Q].name + "',uid:'" + au + "',ct:'iw' })\"><a href=\"" + D.link[Q].url + '" target="_blank">' + D.link[Q].cn_name + "</a></span>")
                }
            }
            ai.push("</p>");
            if (ai.length > 2) {
                aE.push(ai.join(""))
            }
        }
    }
    aE.push("<div class='iw_btn_con'>");
    if (typeof(Z.ext_type) != "undefined" && !!(Z.ext_type & 1)) {
        aE.push('<span class="inr_iw" onclick=\'InrMgr.open("' + au + '", {wd : "' + Z.title + '", code : STAT_INR_INFO_CLICK})\' onmouseover="this.className=\'inr_iw_on\'" onmouseout="this.className=\'inr_iw\'" onmousedown="this.className=\'inr_iw_down\'" onmouseup="this.className=\'inr_iw_on\'"  title="查看室内地图"></span>')
    }
    aE.push("</div>");
    aE.push("</div>");
    if (aM || au || aK.smp) {
        if (aM) {
            aE.push('<div id="userSignContent">' + o + "</div>")
        }
        aE.push('<div id="userSignCtrl" class="userShowCtrl">');
        aE.push('<div class="ctrl">');
        if (Z.jiucuofr) {
            var an = Z.jiucuofr
        } else {
            var an = ""
        }
        if (aM) {
            aE.push('<span class="edit"><b onclick="_gl.editInfoWnd({\'type\':\'button\'})" title="修改此点的名称和内容"></b></span>');
            aE.push('<span class="delete"><b onclick="_gl.deletePoint()" title="删除此点"></b></span>')
        } else {
            if (aK.smp) {
                aE.push('<span class="edit"><b onclick="SmpMgr.editMyPlace(event, \'' + aK.smp + '\')" title="修改此点的名称和内容"></b></span>');
                aE.push('<span class="delete"><b onclick="SmpMgr.rmvMyplace(event, \'' + aK.smp + "', '" + k + '\')" title="删除此点"></b></span>')
            }
        }
        var ad = "";
        if ((_sign._USERSHARE || !aM) && !aK.smp) {
            var az = "";
            var U = "";
            var aq = "shareBtn_u";
            if (!aM) {
                az = "onmouseover=\"T.ac(this,'span_focus')\" onmouseout=\"T.rc(this,'span_focus')\"";
                U = "分享";
                aq = "shareBtn"
            }
            var A = (aK.x + " " + aK.y);
            ad = '<span class="' + aq + '" ' + az + " onclick=\"_sign.goShare({'uid' : '" + au + "', 'cityCode' : '" + r + "', 'title' : '" + P + "', 'addr' : '" + ah + "', 'tel' : '" + aB + "', 'point' : '" + A + '\'})" title="将此点在图区上的位置分享给好友"><b></b>' + U + "</span>";
            if (_sign._USERSHARE && aM) {
                aE.push(ad)
            }
        }
        var aj = "",
        aw;
        if (_sign._USERFAV) {
            var ap = k.replace(/\"/g, "&quot;");
            var C = [];
            if (ag) {
                if (y == POI_TYPE_BUSSTOP || y == POI_TYPE_SUBSTOP) {
                    C.push("车次:" + ag + "<br/>")
                } else {
                    C.push("地址:" + ag + "<br/>")
                }
            } else {
                if (o) {
                    C.push(o)
                }
            }
            if (M) {
                C.push("电话:" + M)
            }
            var H = C.join("").replace(/\"/g, "&quot;"),
            aG = window.parseFloat(aK.x) + "|" + window.parseFloat(aK.y),
            v = {
                point: aG,
                uid: au,
                cityCode: r,
                title: ap,
                content: H
            };
            if (aM) {
                aw = {
                    userSign: aM,
                    isfav: al,
                    json: v
                };
                aE.push('<span class="fav" id="JiwFav" onclick="addStat(' + STAT_FAV_IW_BTN + ');_gl.goFav()" title="加入收藏夹"><b></b></span>')
            } else {
                aw = {
                    json: v
                };
                aj = "<span id=\"JiwFav\" class=\"point\" onmouseover=\"T.ac(this,'span_focus')\" onmouseout=\"T.rc(this,'span_focus')\" onclick=\"_sign('searchPoiSign',{'point':'" + aG + "','uid':'" + au + "','cityCode':'" + r + "','title':'" + ap + "','content':'" + H + '\'})" title="将此点的位置标记在地图上"><b></b>标记</span>';
                aE.push('<span class="fav" id="JiwFav" uid="' + au + '" onclick="addStat(' + STAT_FAV_IW_BTN + ",{'uid':'" + au + "'});_gl.goFav({'point':'" + aG + "','uid':'" + au + "','cityCode':'" + r + "','title':'" + ap + "','content':'" + H + '\'})" title="加入收藏夹"><b></b></span>')
            }
        }
        if (!aM && sms.isActive && au) {
            aE.push("<span class='send_telf'><b onclick='sms.ready(this, \"" + au + '", "' + y + '", "' + r + '","iw")\' title="免费发送到手机/汽车"></b></span>')
        }
        if (!aM) {
            aE.push("<span id='iw_tool_icon' class='box' onmouseover=\"this.className='box box_on';T.g('iw_tool_box').style.top=''\" onmouseout=\"this.className='box';T.g('iw_tool_box').style.top='-2000px'\"><b></b>");
            aE.push('<div class="iw_tool_box" id="iw_tool_box" style="top:-2000px">');
            if (aj) {
                aE.push(aj)
            }
            aE.push(ad);
            if (!aM && isCorrect(Z)) {
                aE.push('<span class="sicon08" onmouseover="T.ac(this,\'span_focus\')" onmouseout="T.rc(this,\'span_focus\')" onclick="goCorrect(2,\'' + au + "','" + an + '\')"  title="纠错"><b></b>纠错</span>')
            }
            aE.push("</div></span>")
        }
        aE.push("	</div>");
        aE.push('	<div class="share" id="iw_share_con" style="display:none">');
        aE.push("	</div>");
        aE.push("</div>")
    }
    aE.push("<div class='iw_poi_inter' id='iw_poi_inter'>");
    if (aK && aK.isFromMPC) {
        aE.push("<ul class='nav_tab'><li id='nav_tab2' class='third blueA " + a[0] + "' onclick='switchInfoWndTab(2, \"rangekw\", null, null, 1)'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>在附近找</li>");
        aE.push("<li id='nav_tab0' class='second blueA " + a[1] + "' onclick='switchInfoWndTab(0, \"iw_ssn\", null, null, 1)'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>到这里去</li>");
        aE.push("<li id='nav_tab1' class='first blueA " + a[2] + "' onclick='switchInfoWndTab(1, \"iw_esn\", null, null, 1)'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>从这里出发</li></ul>")
    } else {
        aE.push("<ul class='nav_tab'><li id='nav_tab2' class='third blueA " + a[0] + "' onclick='switchInfoWndTab(2, \"rangekw\")'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>在附近找</li>");
        aE.push("<li id='nav_tab0' class='second blueA " + a[1] + "' onclick='switchInfoWndTab(0, \"iw_ssn\")'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>到这里去</li>");
        aE.push("<li id='nav_tab1' class='first blueA " + a[2] + "' onclick='switchInfoWndTab(1, \"iw_esn\")'><img src='" + MapConfig.smFlwCon + "image/transparent.gif'>从这里出发</li></ul>")
    }
    aE.push("<div id='iw_tab0' class='nav_tab_content' style='display:" + E[1] + "'>");
    aE.push("<form id='iw_s_frm'>");
    aE.push("<div><span class='lef'>起点</span><span id='iw_ssnSpan' class='iw_txt_wrap'><input id='iw_ssn' type='text' size='22' maxlength='100' autocomplete='off' /><span class='smp_iws_btn' title='常用地点' onclick='SmpMgr.openList(\"iw_ssn\", event)'></span></span>");
    aE.push("<input id='iw_ssb_btn' type='submit' value='公交' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' />");
    aE.push("<input id='iw_ssd_btn' type='button' class='iw_bt' value='驾车' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' /></div>");
    aE.push("</form></div>");
    aE.push("<div id='iw_tab1' class='nav_tab_content' style='display:" + E[2] + "'>");
    aE.push("<form id='iw_e_frm'>");
    aE.push("<div><span class='lef'>终点</span><span id='iw_esnSpan' class='iw_txt_wrap'><input id='iw_esn' type='text' size='22' maxlength='100' autocomplete='off'/><span class='smp_iwe_btn' title='常用地点' onclick='SmpMgr.openList(\"iw_esn\", event)'></span></span>");
    aE.push("<input id='iw_esb_btn' type='submit' value='公交' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"'/>");
    aE.push("<input id='iw_esd_btn' type='button' value='驾车' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' /></div>");
    aE.push("</form></div>");
    aE.push("<div id='iw_tab2' class='nav_tab_content' style='display:" + E[0] + "'>");
    aE.push("<div class='iw_cate_list'>");
    var ab = ["宾馆", "餐馆", "银行", "医院", "公交站"];
    if (aK && aK.isFromMPC) {
        var c = 1
    } else {
        var c = 0
    }
    if (au) {
        for (var S = 0,
        Q = ab.length; S < Q; S++) {
            if (S == 0) {
                aE.push(generateSingleLink(ab[S], au, "", r, true, (aK.x + ", " + aK.y), c))
            } else {
                aE.push(generateSingleLink(ab[S], au, "", r, false, (aK.x + ", " + aK.y), c))
            }
        }
    } else {
        for (var S = 0,
        Q = ab.length; S < Q; S++) {
            if (S == 0) {
                aE.push(generateSingleLinkForRange(ab[S], (aK.x + "," + aK.y), "", r, true, null, aK.statCode || 0, c))
            } else {
                aE.push(generateSingleLinkForRange(ab[S], (aK.x + "," + aK.y), "", r, false, null, aK.statCode || 0, c))
            }
        }
    }
    aE.push("</div>");
    aE.push("<div class='iw_cate_form'>");
    if (au) {
        aE.push('<form onsubmit=\'roundSearchByInput("rangekw", "' + au + '", null, ' + r + ", null, " + aK.x + ", " + aK.y + ", " + c + ");return false'>")
    } else {
        aE.push('<form onsubmit=\'rangeSearchByInput("rangekw", ' + aK.x + ", " + aK.y + ", null, + " + r + ", null, " + (aK.statCode || 0) + ", " + c + ");return false'>")
    }
    aE.push("<input id='rangekw' type='text' size='19' maxLength='100' autocomplete='off' /> ");
    aE.push("<input tid='iwNSBtn' type='submit' value='搜索' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' />");
    aE.push("</form></div></div>");
    aE.push("</div>");
    aE.push("<div id='userSignEdit' style='display:none;'></div>");
    if ( !! place.result && window.place_dateType) {
        var aD = window.place_dateType.toUpperCase();
        addStat(window["STAT_PLACE_" + aD + "_ALLWID"]);
        if (z.discount || z.groupon) {
            addStat(PLACE_FILTER_CODE, z)
        }
    }
    var g = [0, -26];
    if (aK.forBusLine) {
        g[1] = -5
    }
    if (aK.isMenu) {
        g[1] = -30
    }
    var F = new BMap.InfoWindow(aE.join(""), {
        title: aI,
        height: 0,
        width: aH,
        margin: [10, 10, 20, 10]
    });
    if ( !! aw) {
        F.favObj = aw
    }
    F._config.collisions = openSearchInfoWnd._colls;
    F._ext = {
        uid: au,
        pt: new BMap.Point(aK.x, aK.y),
        name: k,
        c: r,
        poiType: y,
        geoloc: aK.geoloc
    };
    F.addEventListener("open",
    function() {
        var h = F.overlay.getLabel();
        if (h && h._indoor) {
            h.hide()
        }
        if (map.infoWindow.closeButton && !map.infoWindow.closeButton._statBinded) {
            T.on(map.infoWindow.closeButton, "click",
            function() {
                addStat(STAT_POP_CLOSED_N)
            });
            map.infoWindow.closeButton._statBinded = true
        }
    });
    F.addEventListener("close",
    function() {
        var h = F.overlay.getLabel();
        if (h && h._indoor) {
            h.show()
        }
    });
    F._transUid = aN;
    return F
}
function ishopResetInfow() {
    map.temp.infoWin.reset()
}
function openSearchInfoWndPOI(d, b, c) {
    var a = window.GRControll.ifChangeMap();
    if (a.f != 0) {
        window.GRControll.setGRequestFlg(2000)
    }
    openSearchInfoWnd(d, b, c)
}
function openSearchInfoWnd(d, k, b) {
    if (window.isPrint) {
        return
    }
    var f = d._ext || {};
    if (f && f.uid) {
        var j = map.getBounds(),
        i = Math.min(j.minX, j.maxX),
        c = Math.max(j.minX, j.maxX),
        h = Math.min(j.minY, j.maxY),
        a = Math.max(j.minY, j.maxY),
        e = "(" + i + "," + h + ";" + c + "," + a + ")",
        g = (window.ModelMgr && window.ModelMgr.mainModel && window.ModelMgr.mainModel.curKw) || "";
        addStat(STAT_USER_BEHAVIOUR_MINMING, {
            uid: f.uid,
            wd: g,
            b: e
        })
    }
    if (!b) {
        var b = {}
    }
    if (d && d.toString() == "InfoWindow" && k.toString() == "Marker") {
        addStat(STAT_POP_NORM);
        d.addEventListener("open",
        function() {
            var l = this.favObj; (function() {
                if (!l) {
                    return
                }
                var p = window._gl,
                m, n, o;
                if ((p = window._gl) != null && !!(fav = p.favCloudData) && fav.length > 0) {
                    if (!isNaN(b.favId) && b.favId != -1) {
                        n = b.favId
                    } else {
                        n = p.checkInFav("", {
                            from: "poi",
                            json: l.json
                        })
                    }
                    if (n == -1) {
                        return
                    }
                    o = T.g("JiwFav");
                    o.className = "has_fav";
                    o.title = "取消收藏"
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })();
            if (typeof bdMapSuggest != "undefined") {
                d.iw_sugg_0 = new bdMapSuggest({
                    inputid: "iw_ssn",
                    offset: [1, 0],
                    closeB: 1,
                    qType: 2,
                    cityid: f.c
                },
                function(m) {
                    f.wd2 = m
                });
                d.iw_sugg_1 = new bdMapSuggest({
                    inputid: "iw_esn",
                    offset: [1, 0],
                    closeB: 1,
                    qType: 2,
                    cityid: f.c
                },
                function(m) {
                    f.wd2 = m
                })
            }
            iwNavSubmit._ext = f;
            iwNavSubmit._opt = b;
            T.on(T.G("iw_s_frm"), "submit", iwNavSubmit);
            T.on(T.G("iw_e_frm"), "submit", iwNavSubmit);
            T.on(T.G("iw_ssd_btn"), "click", iwNavSubmit);
            T.on(T.G("iw_esd_btn"), "click", iwNavSubmit);
            d.removeEventListener("open", arguments.callee)
        });
        d.addEventListener("close",
        function() {
            if (d.iw_sugg_0) {
                d.iw_sugg_0.disposeSug();
                d.iw_sugg_0 = null
            }
            if (d.iw_sugg_1) {
                d.iw_sugg_1.disposeSug();
                d.iw_sugg_1 = null
            }
            d.removeEventListener("close", arguments.callee)
        });
        b && b.notMove && d.disableAutoPan();
        k.openInfoWindow(d, b)
    }
}
openSearchInfoWnd._colls = [[65, 245], [233, 39], [10, 10], [10, 10]];
openSearchInfoWnd._MAX_BTN_W_IN_FSM = 233 + 25;
function setInfoWndCollisions(b, a) {
    var c = openSearchInfoWnd._colls;
    if (!b || b && b.length == 0) {
        if (a == 1) {
            if (!T.G("trafficBut") || T.G("trafficBut") && T.G("trafficBut").style.display == "none" || T.G("trafficBut") && T.G("trafficBut").style.visibility == "hidden") {
                openSearchInfoWnd._colls[1] = [159, 39]
            } else {
                openSearchInfoWnd._colls[1] = [233, 39]
            }
        }
        if (map.fullScreenMode) {
            openSearchInfoWnd._colls[1][0] = openSearchInfoWnd._colls[1][0] + 25;
            openSearchInfoWnd._colls[1][1] = openSearchInfoWnd._colls[1][1] + 25
        }
    } else {
        if (map.fullScreenMode && a == 1 && b[0] < openSearchInfoWnd._MAX_BTN_W_IN_FSM) {
            b[0] = openSearchInfoWnd._MAX_BTN_W_IN_FSM
        }
        openSearchInfoWnd._colls[a] = b.slice(0)
    }
}
function generateSingleLink(g, a, d, c, e, f, b) {
    var h = !!b ? 1 : 0;
    if (!e) {
        return "<a href='javascript:void(0)' onclick='roundSearchByLink(this, \"" + a + '", "' + d + '", ' + c + ", 0, " + f + ", " + h + ");return false;'>" + g + "</a>"
    } else {
        return "<a href='javascript:void(0)' tid='iwNSLink' onclick='roundSearchByLink(this, \"" + a + '", "' + d + '", ' + c + ", 0, " + f + ", " + h + ");return false;' class='first'>" + g + "</a>"
    }
}
function generateSingleLinkForRange(h, i, b, f, a, c, d, e) {
    var g = !!e ? 1 : 0;
    if (!a) {
        return "<a href='javascript:void(0)' onclick='rangeSearchByLink(this, " + i + ', "' + b + '", ' + f + ", null, " + d + ", " + g + ");return false;'>" + h + "</a>"
    } else {
        return "<a href='javascript:void(0)' onclick='rangeSearchByLink(this, " + i + ', "' + b + '", ' + f + ", null, true, " + g + ");return false;' class='first'>" + h + "</a>"
    }
}
function roundSearchByLink(d, e, a, h, k, i, g, f) {
    var j = !!f ? 1 : 0;
    if (d.nodeName.toLowerCase() == "a") {
        var b = d.innerHTML;
        if (b) {
            var c = k || 0;
            roundSearchByValue(b, e, a, h, c, i, g, j)
        }
    }
}
function roundSearchByInput(h, c, a, f, j, g, e, d) {
    var i = !!d ? 1 : 0;
    if (T.G(h)) {
        if (T.G(h).value) {
            var b = j || 1;
            roundSearchByValue(filtQuery(T.G(h).value), c, a, f, b, g, e, i);
            MapHunter.record("se", 3, {
                wd: filtQuery(T.G(h).value)
            })
        } else {
            T.G(h).focus();
            return false
        }
    }
}
function roundSearchByValue(j, e, c, h, l, i, g, f, d) {
    if (j) {
        var b = 2000;
        if (c && T.G(c)) {
            b = T.G(c).value
        }
        var a = {
            r: b,
            c: h,
            wd: encodeURIComponent(j),
            nbtp: l,
            nb_x: i,
            nb_y: g
        };
        if ( !! f) {
            a.spotclick = 1
        } else {
            for (var k in d) {
                if (d.hasOwnProperty(k)) {
                    a[k] = encodeURIComponent(d[k])
                }
            }
        }
        roundSearch(e, a)
    }
}
function roundSearch(j, b) {
    var d = "",
    b = b || {};
    b = statParamInterceptor(b);
    for (var h in b) {
        if (typeof b[h] != "undefined") {
            d = d + "&" + h + "=" + b[h]
        }
    }
    var k = "nb" + d + "&uid=" + j;
    window.GRControll.GRCircleRadius = 1000;
    window.GRControll.isGRCircleShow = true;
    window.GRControll.setGRequestFlg(1500);
    window.GRControll.hideGRTool();
    map.centerAndZoom(new BMap.Point(b.nb_x, b.nb_y), 16);
    if (k.indexOf("b=") < 0) {
        var g = map.getBounds();
        var f = Math.min(g.minX, g.maxX);
        var c = Math.max(g.minX, g.maxX);
        var e = Math.min(g.minY, g.maxY);
        var a = Math.max(g.minY, g.maxY);
        k += "&b=(" + f + "," + e + ";" + c + "," + a + ")"
    }
    if (k.indexOf("l=") < 0) {
        var g = map.getBounds();
        k += "&l=" + map.zoomLevel
    }
    GRControll.openedMarker = null;
    go(k + "&from=webmap", {
        cinfo: {
            oc: b.c
        }
    })
}
function rangeSearchByInput(h, g, e, a, f, j, c, d) {
    var i = !!d ? 1 : 0;
    if (T.G(h)) {
        if (T.G(h).value) {
            var b = j || 1;
            rangeSearchByValue(filtQuery(T.G(h).value), g, e, a, f, b, c, i)
        } else {
            T.G(h).focus()
        }
    }
}
function rangeSearchByLink(e, i, g, a, h, k, d, f) {
    var j = !!f ? 1 : 0;
    if (e.nodeName.toLowerCase() == "a") {
        var b = e.innerHTML;
        if (b) {
            var c = k || 0;
            rangeSearchByValue(b, i, g, a, h, c, d, j)
        }
    }
}
function rangeSearchByValue(l, f, e, n, c, d, j, g, k) {
    var q = !!g ? 1 : 0;
    if (l) {
        var i = 2000;
        if (n && T.G(n)) {
            i = T.G(n).value
        }
        f = f * 1;
        e = e * 1;
        i = i * 1;
        var o = f - i;
        var b = e - i;
        var m = f + i;
        var a = e + i;
        var p = "(" + o + "," + b + ";" + m + "," + a + ")";
        var h = {
            ar: p,
            wd: encodeURIComponent(l),
            c: c,
            bdtp: d,
            nb_x: f,
            nb_y: e
        };
        if ( !! g) {
            h.spotclick = 1
        } else {
            for (var s in k) {
                if (k.hasOwnProperty(s)) {
                    h[s] = encodeURIComponent(k[s])
                }
            }
        }
        rangeSearch(h, new BMap.Point(f, e), i);
        if (j) {
            addStat(j)
        }
    }
}
function rangeSearch(f, a, e) {
    if (!f) {
        return
    }
    var g = "";
    for (var b in f) {
        if (typeof f[b] != "undefined") {
            g = g + "&" + b + "=" + f[b]
        }
    }
    window.GRControll.GRCircleRadius = 1000;
    window.GRControll.isGRCircleShow = true;
    window.GRControll.setGRequestFlg(1500);
    window.GRControll.hideGRTool();
    map.centerAndZoom(a, 16);
    var d = "?nb" + g;
    if (d.indexOf("b=") < 0) {
        var c = map.getBounds();
        d += "&b=(" + c.minX + "," + c.minY + ";" + c.maxX + "," + c.maxY + ")"
    }
    if (d.indexOf("l=") < 0) {
        var c = map.getBounds();
        d += "&l=" + map.zoomLevel
    }
    go("tpl:PoiSearch" + d + "&r=" + e + "&from=webmap", {
        cinfo: {
            searchByContextMenu: true,
            centerPoint: a,
            radius: e,
            oc: f.c
        }
    })
}
function searchDrv(c, f, b) {
    var d = "";
    var a = "";
    if (c == 0) {
        d = T.G(f).value;
        if (!d) {
            T.G(f).focus();
            return
        }
        a = b
    } else {
        if (c == 1) {
            d = f;
            a = T.G(b).value;
            if (!a) {
                T.G(b).focus();
                return
            }
        }
    }
    if (!d || !a) {
        return
    }
    var e = modelConfig.cityCode;
    go("nav&c=" + e + "&sc=" + e + "&ec=" + e + "&sn=2$$$$$$" + encodeURIComponent(d) + "$$$$$$&en=2$$$$$$" + encodeURIComponent(a) + "$$$$$$")
}
function switchInfoWndTab(f, m, a, h, j) {
    var k = [T.G("nav_tab0"), T.G("nav_tab1"), T.G("nav_tab2")];
    var c = [T.G("iw_tab0"), T.G("iw_tab1"), T.G("iw_tab2")];
    if (k[f] && k[f].className.match(/hover/) && !a) {
        return
    }
    T.ac(k[f], "hover");
    if (h) {
        setTimeout(function() {
            addStat(STAT_PTAB_FROMHERE + f)
        },
        2000)
    } else {
        if ( !! j) {
            addStat(STAT_PTAB_FROMHERE + f, {
                spotclick: 1
            })
        } else {
            addStat(STAT_PTAB_FROMHERE + f)
        }
    }
    if (c[f]) {
        c[f].style.display = "block"
    }
    for (var d = 0,
    b = k.length; d < b; d++) {
        if (d != f) {
            T.rc(k[d], "hover");
            c[d].style.display = "none"
        }
    }
    if (m && T.G(m)) {
        try {
            T.G(m).focus()
        } catch(g) {
            setTimeout(function() {
                try {
                    T.G(m).focus()
                } catch(i) {}
            },
            100)
        }
    }
}
function createRangeInfoWnd(a) {
    if (!a) {
        return
    }
    return createSearchInfoWnd({
        title: "未知地点",
        poiType: 0
    },
    {
        x: a.lng,
        y: a.lat,
        tabIndex: 2,
        statCode: STAT_CM_ROUND
    })
}
function exitRangeSearch() {
    if (rangeSearchCenterMarker) {
        rangeSearchCenterMarker.remove();
        rangeSearchCenterMarker = null
    }
} (function() {
    function c(i, h, g) {
        if (i.replace(/[\u0100-\uffff]/g, "##").length > h) {
            return i = i.substring(0, parseInt(h / 2) - 1) + g
        } else {
            return i
        }
    }
    function e(i) {
        if (!i) {
            return
        }
        var g = c(i, 26, "...");
        var h = ["<p class='iw_poi_title' title='" + i + "'>" + g];
        h.push("<a id='trans_zoom_out' style='display:none' href='javascript:void(0)'>缩小</a>");
        h.push("<a id='trans_zoom_in' href='javascript:void(0)'>放大</a></td>");
        h.push("</p>");
        return h.join("")
    }
    function d(m) {
        var l = m.content,
        i = m.curIndex,
        k = m.total,
        g = m.nextInfo;
        var j = ["<div class='iw_poi_content'>"];
        if (l) {
            j.push("<div class='iw_trans_content'>" + l + "</div>")
        }
        j.push("<div id='trans_info_content'></div>");
        j.push('<table width="99%" cols="2" class="iw_trans_nav"><tbody><tr>');
        j.push('<td nowrap="nowrap" width="50%" align="left">');
        if (i == 0) {
            j.push('<span class="trans_disabled" >上一步</span>')
        } else {
            j.push('<a id="trans_prev" href="javascript:void(0)">上一步</a>')
        }
        j.push("</td>");
        j.push('<td nowrap="nowrap" width="50%" align="right">');
        if (i == k - 1) {
            j.push('<span class="trans_disabled" >下一步</span>')
        } else {
            var h = c(g, 25, "...");
            j.push('<a id="trans_next" href="javascript:void(0)">下一步</a>');
            j.push('<span style="color:#6b6b6b" title="' + g + '">(' + h + ")</span>")
        }
        j.push("</td></tr></tbody></table>");
        return j.join("")
    }
    function f() {
        var h = T.G("trans_zoom_in"),
        g = T.G("trans_zoom_out");
        if (!h || !g) {
            return
        }
        if (map.zoomLevel == BMap.MapType[map.mapType].zoomLevelMax) {
            h.style.display = "none";
            g.style.display = "inline"
        } else {
            h.style.display = "inline";
            g.style.display = "none"
        }
    }
    function b(g, j) {
        var h = j.curIndex,
        i = j.nextTransCbk,
        l = j.zoomTransCbk,
        k = j.obj;
        g.addEventListener("open",
        function() {
            if (map.infoWindow.closeButton) {
                T.on(map.infoWindow.closeButton, "click",
                function() {
                    addStat(STAT_POP_CLOSED_D)
                })
            }
            g.removeEventListener("open", arguments.callee)
        });
        g.addEventListener("open",
        function() {
            var p = T.G("trans_prev"),
            o = T.G("trans_next"),
            n = T.G("trans_zoom_in"),
            m = T.G("trans_zoom_out");
            if (p) {
                T.on(p, "click",
                function() {
                    if (i && typeof i == "function") {
                        i(h - 1, k)
                    }
                    addStat(STAT_BUS_TRANS_CLICK, {
                        wd: "prev"
                    })
                })
            }
            if (o) {
                T.on(o, "click",
                function() {
                    if (i && typeof i == "function") {
                        i(h + 1, k)
                    }
                    addStat(STAT_BUS_TRANS_CLICK, {
                        wd: "next"
                    })
                })
            }
            if (n && m) {
                T.on(n, "click",
                function() {
                    if (l && typeof l == "function") {
                        l(0, k)
                    }
                    n.style.display = "none";
                    m.style.display = "inline"
                });
                T.on(m, "click",
                function() {
                    if (l && typeof l == "function") {
                        l(1, k)
                    }
                    n.style.display = "inline";
                    n.style.display = "none"
                })
            }
            f()
        });
        map.addEventListener("zoomend", f);
        g.addEventListener("close",
        function() {
            map.removeEventListener("zoomend", f)
        })
    }
    function a(h) {
        if (!h.title) {
            return
        }
        var t = h.title,
        p = h.content,
        g = h.curIndex,
        r = h.total,
        k = h.nextInfo,
        j = h.nextTransCbk,
        o = h.zoomTransCbk,
        m = h.obj,
        s = h.transUid;
        var n = e(t),
        q = d(h);
        var l = [0, -10];
        if (g == 0 || g == r - 1) {
            l[1] = -30
        }
        var i = new BMap.InfoWindow(q, {
            title: n,
            height: 0,
            width: 263,
            margin: [10, 10, 20, 10]
        });
        i._config.collisions = openSearchInfoWnd._colls;
        i._transUid = s;
        b(i, h);
        return i
    }
    window.createTransInfoWnd = a
})();
function addDrRoute(y, f) {
    if (!window.dropRoutes) {
        window.dropRoutes = []
    }
    f.onRemoveTips();
    var u = f.routePoints;
    f.mapZoomLevel = map.zoomLevel;
    if (f.driveBounds.length > 0) {
        var x = getBPoints(f.driveBounds);
        if (f.drag == 0 && !y) {
            if (map.mapType == BMAP_TYPE_DIMENSIONAL) {
                var h = BMap.MapType[BMAP_TYPE_DIMENSIONAL].citys;
                var B = h[map.currentCity][1];
                var A = getPointsBounds(x);
                var a = getBitLevel(A);
                if (B.intersects(A)) {
                    if (a <= 15) {
                        a = 15
                    }
                    if (f.dragPois) {
                        map.centerAndZoom(f.dragPois[0].getPoint(), a)
                    }
                } else {
                    map.setMapType(BMAP_NORMAL_MAP);
                    setViewport(x, 40);
                    add3DTip();
                    setTimeout(function() {
                        var i = T.G("DEM_CustomTip1");
                        remove3DTip(i)
                    },
                    3000)
                }
            } else {
                setViewport(x, 40)
            }
        }
        f.drag = 0
    }
    var g = Math.pow(2, BMap.MapType[map.mapType].zoomLevelMax - map.zoomLevel);
    var e = map.pixelToPoint({
        x: -map.width * 3,
        y: map.height * 3
    });
    var d = map.pixelToPoint({
        x: map.width * 3,
        y: -map.height * 3
    });
    var r = new BMap.Bounds(e.lng, e.lat, d.lng, d.lat);
    for (var z = 0; z < u.length; z++) {
        var C = u[z];
        var p = [];
        for (var v = 0; v < C.length; v++) {
            if (map.mapType === BMAP_TYPE_DIMENSIONAL) {
                var s = C[v].p;
                var c = 2;
                var w = cutPoints(s, g);
                var o = [];
                var t = w.split(";");
                for (var m = 0; m < t.length; m++) {
                    var b = t[m].split(",");
                    var k = new BMap.Point(b[0], b[1]);
                    p.push(k)
                }
            } else {
                var s = C[v].p;
                var c = 2;
                var w = cutPoints(s, 0);
                var o = [];
                var t = w.split(";");
                for (var m = 0; m < t.length; m++) {
                    var b = t[m].split(",");
                    var k = new BMap.Point(b[0], b[1]);
                    p.push(k)
                }
            }
        }
        if (!f.draging && f.sended == 0) {
            var E = f;
            if (y == false) {
                var D = addRoute(p, ROUTE_TYPE_DRIVE);
                D.index = z;
                D.addEventListener("mouseover",
                function(i) {
                    E.onRouteOver(i)
                });
                D.addEventListener("mousemove",
                function(i) {
                    E.onRouteMove(i)
                });
                D.addEventListener("mouseout",
                function(i) {
                    E.onRouteOut(i)
                });
                window.dropRoutes.push(D)
            } else {
                var q = window.dropRoutes[z];
                if (q) {
                    q.setPoints(p)
                }
            }
        }
    }
}
function showDetail(h, k, d, f, g, l) {
    if (h) {
        var e = {
            cuid: h,
            uid: h
        };
        if ( !! l && !!g) {
            e.ct = l.toLowerCase() + "_" + g.toLowerCase()
        }
        addStat(STAT_POI_ONXQ, e)
    }
    var c = window.location.pathname,
    s = "http://" + window.location.host + ((c && c.length <= 1) ? "": window.location.pathname),
    t = "inf",
    a = false;
    if (window.place && window.place.placeRe.test(f)) {
        if (a) {
            s += "/detail";
            t = "ninf"
        }
    }
    if (k == POI_TYPE_BUSLINE || k == POI_TYPE_SUBLINE) {
        s += "?newmap=1&t=" + map.mapType + "&s=" + encodeURIComponent("bsl&bsltp=0&uid=" + h + "&c=" + d)
    } else {
        var b = map.getBounds(),
        q = Math.min(b.minX, b.maxX),
        p = Math.max(b.minX, b.maxX),
        o = Math.min(b.minY, b.maxY),
        n = Math.max(b.minY, b.maxY),
        i = "(" + q + "," + o + ";" + p + "," + n + ")",
        j = (window.ModelMgr && window.ModelMgr.mainModel && window.ModelMgr.mainModel.curKw) || "",
        j = encodeURIComponent(j),
        r = "&wd=" + j + "&b=" + i + "&" + jsonToQuery(statParamInterceptor());
        if (f) {
            var m = f.toUpperCase();
            if (f == "ISHOP_INFO") {
                s += "/ishop/detail.html?newmap=1&s=" + encodeURIComponent(t + "&uid=" + h + "&c=" + d)
            }
            if (f == "ISHOP_INFO_IMG") {
                s += "/ishop/detail.html?newmap=1&s=" + encodeURIComponent(t + "&uid=" + h + "&c=" + d) + "#picresult"
            }
            if (g == "Page") {
                if (l == "List") {
                    addStat(window["STAT_PLACE_" + m + "_LISTDETAIL"])
                } else {
                    if (l == "Iw") {
                        addStat(window["STAT_PLACE_" + m + "_WINDETAIL"])
                    }
                }
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f
            }
            if (g == "Page_Pic") {
                if (l == "Iw") {
                    addStat(window["STAT_PLACE_" + m + "_WINPIC"])
                }
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "#picresult"
            }
            if (g == "Page_Comm") {
                if (l == "List") {
                    addStat(window["STAT_PLACE_" + m + "_LISTCOMMENT"])
                } else {
                    if (l == "Iw") {
                        addStat(window["STAT_PLACE_" + m + "_WINCOMMENT"])
                    }
                }
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "#comment"
            }
            if (g == "Pic_Page") {
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "_pic"
            }
            if (g == "Info_Page") {
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "_info"
            }
            if (g == "page_discount") {
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "_info&dstype=discount"
            }
            if (g == "groupon") {
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "#groupon"
            }
            if (g == "other_movie") {
                s += "?qt=" + t + "&uid=" + h + r + "&detail=" + f + "#other_movie"
            }
        } else {
            s += "?newmap=1&t=" + map.mapType + "&s=" + encodeURIComponent("inf&uid=" + h + "&c=" + d + "&it=" + STAT_INF_NORMAL)
        }
    }
    window.open(s)
}
function createTip(f, d, e) {
    if (!f && typeof f != "string") {
        return
    }
    var c = {
        display: true,
        offset: new BMap.Size(3, -34),
        style: {
            background: "url(" + MapConfig.smFlwCon + "image/tip.gif) 0 0 no-repeat",
            color: "#000",
            height: "30px",
            border: "0",
            padding: "0 0 0 4px"
        }
    };
    c.point = map.getCenter();
    if (e && typeof e == "object") {
        e = T.extend(c, e)
    }
    f = "<span class=" + d + ">" + f + "</span>";
    var b = new BMap.Label(f, {
        point: e.point,
        offset: e.offset
    });
    var a = new BMap.Marker(e.point, {
        icon: new BMap.Icon(MapConfig.smFlwCon + "image/transparent.gif", new BMap.Size(1, 1))
    });
    b.setStyle(e.style);
    a.setLabel(b);
    if (e.display == false) {
        b.hide()
    }
    map.addOverlay(a);
    b.addEventListener("mouseover",
    function(g) {
        a.setTop(true, 3500000 - BMap.Overlay.getZIndex(e.point.lat, BMAP_COORD_MERCATOR))
    });
    b.addEventListener("mouseout",
    function(g) {
        a.setTop(false)
    });
    return a
}
function getBitLevel(d) {
    var c = BMap.MapType[map.mapType];
    var a = c.zoomLevelMax;
    var f = 1;
    for (var e = a; e >= f; e--) {
        var b = Math.pow(2, (c.zoomLevelMax - e)) * c.baseUnits / c.tileSize;
        if ((d.getMaxX() - d.getMinX()) / b < map.width - 60 && (d.getMaxY() - d.getMinY()) / b < map.height - 60) {
            break
        }
    }
    return e
}
BMap.Overlay.getZIndex = function(c, a, b) {
    c = c * 1;
    if (!c) {
        return 0
    }
    if (a && a == BMAP_COORD_MERCATOR) {
        c = BMap.Project.convertMC2LL(new BMap.Point(0, c)).lat
    }
    return ((c * -100000) << 5) + (b || 0)
};
function setViewport(b, d) {
    if (b.length == 0) {
        return
    }
    var c = null;
    if (d) {
        c = {
            margins: [d, d, d, d]
        }
    }
    var a = map.getViewport(b, c);
    if (a.zoom == map.config.zoomLevelMax) {
        a.zoom -= 1
    }
    map.setViewport(a)
}
function getPointsBounds(d) {
    var a = new BMap.Bounds();
    for (var c = 0,
    b = d.length; c < b; c++) {
        a.extend(d[c])
    }
    return a
}
function foramtBounds(a) {
    var b = a || map.getBounds();
    if (b) {
        return "(" + b.minX + "," + b.minY + ";" + b.maxX + "," + b.maxY + ")"
    } else {
        return ""
    }
}
function iwNavSubmit(M) {
    M = window.event || M;
    var A = "",
    K = "",
    m = "sn",
    J = "en",
    s = "sc",
    O = "ec",
    x = "",
    G = "",
    g = {},
    k = {},
    a = M.target || M.srcElement,
    L = iwNavSubmit._ext,
    v = iwNavSubmit._opts,
    P = L.c || modelConfig.cityCode,
    z = "",
    p = "";
    var l = 0;
    switch (a.id) {
    case "iw_s_frm":
        A = "iw_ssn";
        K = "bt";
        m = "en";
        J = "sn";
        s = "ec";
        O = "sc";
        x = "BusSearchEnd";
        G = "BusSearchSta";
        l = 0;
        z = "0";
        break;
    case "iw_e_frm":
        A = "iw_esn";
        K = "bt";
        x = "BusSearchSta";
        G = "BusSearchEnd";
        l = 1;
        z = 1;
        break;
    case "iw_ssd_btn":
        A = "iw_ssn";
        K = "nav";
        x = "DriveSearchEnd";
        G = "DriveSearchSta";
        m = "en";
        J = "sn";
        s = "ec";
        O = "sc";
        l = 0;
        p = "0";
        break;
    case "iw_esd_btn":
        A = "iw_esn";
        K = "nav";
        x = "DriveSearchSta";
        G = "DriveSearchEnd";
        l = 1;
        p = 1;
        break
    }
    var b = T.g(A);
    var D = T.string.trim(b.value);
    var y = searchBox.inputInfo[A];
    var c = (y && y.point && y.note == D);
    if (b && SmpMgr.helper.isEmpty(D)) {
        b.focus();
        M.returnValue = false;
        return
    }
    if (c) {
        var E = L.name;
        var q = y.note;
        var B = encodeURIComponent(E);
        var w = encodeURIComponent(q);
        var j = L.pt.lng + "," + L.pt.lat;
        var H = y.point;
        var n = L.c;
        var f = y.ccode;
        g = {
            c: P,
            pn: 0,
            rn: 5
        };
        g[m] = "1$$$$" + j + "$$" + B + "$$$$$$";
        g[J] = "1$$$$" + H + "$$" + w + "$$$$$$";
        g[s] = n;
        g[O] = f;
        searchBox.inputInfo[x] = {
            note: E,
            ccode: n,
            point: j
        };
        searchBox.inputInfo[G] = {
            note: q,
            ccode: f,
            point: H
        }
    } else {
        K = (K == "bt") ? "bse": "nse";
        var d = L.pt.lng + "," + L.pt.lat,
        C = L.name || "",
        N = L.uid || "",
        r = L.wd2 ? 1 : 0,
        t = L.wd2 || "",
        I = D,
        F = 0,
        u = (L.poiType == POI_TYPE_BUSSTOP || L.poiType == POI_TYPE_SUBSTOP) ? 0 : 1;
        g = {
            c: P,
            t: F,
            poiType: L.poiType,
            ptx: L.pt.lng,
            pty: L.pt.lat,
            sug: r,
            wd: encodeURIComponent(I),
            wd2: encodeURIComponent(t),
            name: encodeURIComponent(C),
            isSingle: "true",
            nsetp: p,
            bsetp: z
        };
        g = statParamInterceptor(g);
        g[m] = u + "$$" + N + "$$" + d + "$$" + encodeURIComponent(C) + "$$$$$$";
        k = {
            cinfo: {
                q: K + "&" + jsonToQuery(g),
                c: P,
                t: l,
                isSingle: true,
                kwn: {
                    name: C,
                    uid: N,
                    pt: L.pt,
                    poiType: L.poiType
                }
            }
        };
        var o = (A == "iw_ssn") ? x: G;
        searchBox.inputInfo[o] = {
            note: C,
            ccode: P,
            point: d
        }
    }
    if (v && v.isFromMPC) {
        g.spotclick = 1
    }
    if (GRControll.isGRequest) {
        g.gr = 5
    }
    if (L.geoloc == true) {
        g.geoloc = 1
    }
    go(K + "&" + jsonToQuery(g), k);
    if ( !! place.result && window.place_dateType) {
        var i = window.place_dateType.toUpperCase();
        var h = (K == "bt" || K == "bse") ? "_BUS": "_NAV";
        addStat(window["STAT_PLACE_" + i + h])
    }
    MapHunter.record("se", 4, {
        wd: I,
        fid: a.id,
        tid: A
    });
    M.returnValue = false
} (function() {
    var a = {
        isRepeat: function(g, d) {
            g = g || {};
            if (!g.data) {
                g.data = a.makeData.call(this, g)
            }
            var f = SyncMgr.current_tab_index,
            c = _gl.favCloudData;
            for (var e = 0,
            b = c.length; e < b; e++) {
                var h = c[e];
                if (a.isSameScheme(g.data, h.data)) {
                    g.dom.className = "i hasafav";
                    g.dom.title = "取消收藏";
                    d && d({
                        id: h.id,
                        data: h.data,
                        i: e
                    });
                    return true
                }
            }
            g.dom.className = "i afav";
            g.dom.title = "加入收藏夹";
            return false
        },
        isSameScheme: function(d, i) {
            if (!d || !i) {
                return false
            }
            var h = d.sfavnode,
            c = d.efavnode,
            e = i.sfavnode,
            f = i.efavnode,
            b = T.json.stringify(d.wp),
            g = T.json.stringify(i.wp);
            if (d.plankind != i.plankind || d.pathtype != i.pathtype || d.busidx != i.busidx) {
                return false
            } else {
                if (h.geoptx != e.geoptx || c.geopty != f.geopty) {
                    return false
                } else {
                    if (typeof(d.transkind) == "number" || typeof(i.transkind) == "number") {
                        if (d.transkind != i.transkind) {
                            return false
                        }
                    }
                    if (typeof(d.pagenumber) == "number" && typeof(i.pagenumber) == "number") {
                        if (d.pagenumber != i.pagenumber) {
                            return false
                        }
                    }
                }
            }
            return true
        },
        makeData: function(i) {
            var e = this.start,
            d = this.end,
            u = e.pt.split(","),
            q = d.pt.split(","),
            r = parseInt(modelConfig.cityCode, 10),
            b = s_ccode = e_ccode = (this.currentCity || r),
            t = (e.bus_stop && e.uid) ? 0 : 1,
            c = (d.bus_stop && d.uid) ? 0 : 1,
            g = this.strategy,
            f = this.dragPoints || "",
            n = parseInt(i.pathtype || 0, 10),
            j = parseInt(this.pagenum || 0, 10),
            k = SyncMgr.pk_dict[i.pathtype].t + e.wd + "-" + d.wd,
            p = 0,
            h = "",
            m = "",
            o = "";
            switch (i.pathtype) {
            case 0:
                var l = SyncMgr.pk_dict[i.pathtype];
                s_ccode = parseInt(this.sCity.code, 10);
                e_ccode = parseInt(this.eCity.code, 10);
                h = l[g].ck;
                o = l[g].txt;
                break;
            case 1:
                var s = SyncMgr.pk_dict[i.pathtype];
                h = s[g].ck;
                o = s[g].txt;
                p = this.schemeIndex;
                break;
            case 2:
                s_ccode = parseInt(this.sCity.code, 10);
                e_ccode = parseInt(this.eCity.code, 10);
                break;
            case 9:
                var s = SyncMgr.pk_dict[i.pathtype];
                h = s[this.csy].ck;
                o = s[this.csy].txt;
                m = parseInt(this.cty, 10);
                s_ccode = parseInt(this.startCity.code, 10);
                e_ccode = parseInt(this.endCity.code, 10);
                n = 1;
                p = this.curLineIndex;
                break
            }
            var v = {
                sfavnode: {
                    cityid: s_ccode,
                    geoptx: parseFloat(u[0]),
                    geopty: parseFloat(u[1]),
                    uid: e.uid,
                    name: e.wd,
                    type: t
                },
                efavnode: {
                    cityid: e_ccode,
                    geoptx: parseFloat(q[0]),
                    geopty: parseFloat(q[1]),
                    uid: d.uid,
                    name: d.wd,
                    type: c
                },
                pathname: k + o,
                pathtype: n,
                plankind: h,
                transkind: m,
                pagenumber: j,
                wp: f,
                curcityid: b,
                busidx: p,
                type: 1
            };
            return v
        },
        deleteRepeat: function(c, b) {
            if (!c) {
                return
            }
            SyncMgr.upload([{
                id: c.id,
                action: 2,
                type: 1,
                data: c.data
            }],
            function() {
                _gl.showTipInfo("已从收藏夹中删除");
                addStat(STAT_FAV_DELLINE);
                b && b()
            });
            T.array.removeAt(_gl.favCloudData, c.i)
        },
        getIndexById: function(d) {
            for (var c = 0,
            b = _gl.favCloudData.length; c < b; c++) {
                if (d == _gl.favCloudData[c].id) {
                    return c
                }
            }
        },
        toClound: function(d) {
            d = d || {};
            var e = a.makeData.call(this, d),
            c = {
                action: 0,
                type: 1,
                data: e
            };
            var b = a.isRepeat({
                dom: d.dom,
                data: e
            },
            function(f) {
                a.deleteRepeat(f,
                function() {
                    d.dom.className = "i afav";
                    d.dom.title = "添加到收藏夹"
                })
            });
            if (!b) {
                SyncMgr.upload([c],
                function(f) {
                    addStat(STAT_FAV_ADDLINE);
                    _gl.showTipInfo("成功添加到收藏夹");
                    d.dom.className = "i hasafav";
                    d.dom.title = "取消收藏";
                    try {
                        c.id = f.content.data[0].id;
                        _gl.favCloudData.unshift(c)
                    } catch(g) {}
                })
            }
        }
    };
    window.SchemeFaver = a
})();
var arrAds = [];
var _adsDataURL = "map.baidu.com";
if (window.location.host) {
    _adsDataURL = window.location.host
}
var adsDataURL = "http://" + _adsDataURL + "/baidu/fwmap/upload/cmsads/";




var arrFailCities = [];
function addAdsContent(json, posType) {
	
	
	
    /*if (_adsDataURL != "map.baidu.com") {
		
		alert('0');
		
        return
    }*/
    if (json && json.current_city) {
        var cityCode = "";
        if (json.current_city.code) {
            cityCode = json.current_city.code
        }
        if (json.current_city.up_cityid) {
            cityCode = json.current_city.up_cityid
        }
        if (arrAds[cityCode]) {
            dispAds(arrAds[cityCode], posType);
            return
        }
        var d = new Date();
        var adsFile = adsDataURL + "json/" + cityCode + ".json?" + d.getTime();
        var cityAjax = new T.Ajax();
        cityAjax.onsuccess = function(xhr) {
            try {
                var adsJson = eval("(" + xhr.responseText + ")");
                if (adsJson) {
                    arrAds[cityCode] = adsJson;
                    dispAds(arrAds[cityCode], posType)
                }
            } catch(e) {}
        };
        cityAjax.onfailure = function(xhr) {
            arrFailCities[cityCode] = 1
        };
        if (!arrFailCities[cityCode]) {
            cityAjax.request(adsFile)
        }
    }
}
function dispAds(a, b) {
    switch (b) {
    case 1:
        if (a.p1) {
            if (a.p1.pic) {
                dispPicAds(a.p1, 1)
            } else {
                dispWordAds(a.p1, 1)
            }
        }
        if (a.p2) {
            if (a.p2.pic) {
                dispPicAds(a.p2, 2)
            } else {
                dispWordAds(a.p2, 2)
            }
        }
        break;
    case 2:
        if (a.p3) {
            if (a.p3.pic) {
                dispPicAds(a.p3, 3)
            } else {
                dispWordAds(a.p3, 3)
            }
        }
        if (a.p4) {
            if (a.p4.pic) {
                dispPicAds(a.p4, 4)
            } else {
                dispWordAds(a.p4, 4)
            }
        }
        break;
    case 3:
        if (a.p5) {
            if (a.p5.pic) {
                dispPicAds(a.p5, 5)
            } else {
                dispWordAds(a.p5, 5)
            }
        }
        if (a.p6) {
            if (a.p6.pic) {
                dispPicAds(a.p6, 6)
            } else {
                dispWordAds(a.p6, 6)
            }
        }
        break;
    case 4:
        if (a.p7) {
            if (a.p7.pic) {
                dispPicAds(a.p7, 7)
            } else {
                dispWordAds(a.p7, 7)
            }
        }
        if (a.p8) {
            if (a.p8.pic) {
                dispPicAds(a.p8, 8)
            } else {
                dispWordAds(a.p8, 8)
            }
        }
        break;
    case 5:
        if (a.p9) {
            if (a.p9.pic) {
                dispPicAds(a.p9, 9)
            } else {
                dispWordAds(a.p9, 9)
            }
        }
        if (a.p10) {
            if (a.p10.pic) {
                dispPicAds(a.p10, 10)
            } else {
                dispWordAds(a.p10, 10)
            }
        }
        break
    }
}
function dispWordAds(a, g) {
    var d = T.G("pos" + g);
    if (d) {
        var c = a.nm;
        var i = a.lk;
        d.style.display = "block";
        d.innerHTML = "<p class='clswd" + g + "'><a style='display:block;border:none' id='adswd" + g + "' href='" + i + "' target='_blank'>" + c + "</a></p>"
    }
    if (g == 7 || g == 9) {
        var b = T.G("route_content");
        var e = parseInt(b.style.height);
        if (e - 22 > 0) {
            b.style.height = e - 22 + "px"
        }
    }
    if (g == 5 || g == 6) {
        var j = T.G("RADIV_BODY0").childNodes[0].offsetHeight ? T.G("RADIV_BODY0").childNodes[0].offsetHeight: 0;
        var f = T.G("RADIV_BODY1").childNodes[0].offsetHeight ? T.G("RADIV_BODY1").childNodes[0].offsetHeight: 0;
        var b = j > f ? T.G("RADIV_BODY0").childNodes[0] : T.G("RADIV_BODY1").childNodes[0];
        if (g == 5) {
            if (b.offsetHeight - 24 > 0) {
                b.style.height = b.offsetHeight - 24 + "px"
            }
        }
        if (g == 6) {
            if (b.offsetHeight - 35 > 0) {
                b.style.height = b.offsetHeight - 35 + "px"
            }
        }
    }
}
function dispPicAds(a, j) {
    var d = T.G("pos" + j);
    if (d) {
        var c = a.nm;
        var k = a.lk;
        var f = a.pic;
        d.style.display = "block";
        d.innerHTML = "<p class='clsImg" + j + "'><a style='display:block;font-size:0pt;border:none' href='" + k + "' target='_blank'><img id='adsImg" + j + "' src='" + f + "'></a></p>";
        if (j == 7 || j == 9) {
            var b = T.G("route_content");
            var e = parseInt(b.style.height);
            if (e - 32 > 0) {
                b.style.height = e - 32 + "px"
            }
        }
        if (j == 5 || j == 6) {
            var i = T.G("RADIV_BODY0").childNodes[0].offsetHeight ? T.G("RADIV_BODY0").childNodes[0].offsetHeight: 0;
            var g = T.G("RADIV_BODY1").childNodes[0].offsetHeight ? T.G("RADIV_BODY1").childNodes[0].offsetHeight: 0;
            var b = i > g ? T.G("RADIV_BODY0").childNodes[0] : T.G("RADIV_BODY1").childNodes[0];
            if (j == 5) {
                if (b.offsetHeight - 34 > 0) {
                    b.style.height = b.offsetHeight - 34 + "px"
                }
            }
            if (j == 6) {
                if (b.offsetHeight - 45 > 0) {
                    b.style.height = b.offsetHeight - 45 + "px"
                }
            }
        }
    }
}
function initDriveControlHelper(t, f, M, ak) {
    var V = T,
    E = t.Helper = t.Helper || {},
    o = f,
    y = M,
    c = ak,
    A = DriveControl.Stat,
    w = DriveControl.Const;
    E.NaviTrans = E.NaviTrans || {};
    var F = E.amap,
    u = E.omap,
    aj = E.aselect,
    ai = E.aeach,
    d = E.oeach,
    an = E.uniq,
    x = E.tryget,
    n = E.fmt,
    r = E.NaviTrans;
    var N = BMap.MapType[y.getMapType()];
    var s = typeof(N) === "object" ? N.zoomLevelMax: 18;
    var a = s - 3;
    var g = {
        "0": "摄像头",
        "1": "限速摄像头",
        "2": "交通信号灯摄像头",
        "4": "雷达测速摄像头",
        "5": "单行线摄像头",
        "6": "非机动车道摄像头",
        "7": "出入口摄像头",
        "8": "公交车道摄像头",
        "10": "移动式测速摄像头",
        "11": "禁止左转摄像头",
        "12": "禁止右转摄像头",
        "15": "其他摄像头"
    };
    var ae = {
        strokeColor: "#018607",
        strokeWeight: 4,
        strokeOpacity: 0.65
    },
    e = {
        strokeColor: "#004eff",
        strokeWeight: 4,
        strokeOpacity: 0.65
    },
    k = {
        strokeColor: "#fc5e20",
        strokeWeight: 4,
        strokeOpacity: 0.65
    };
    var Z = {
        lgt: "light",
        tol: "toll"
    };
    var Y = MapConfig.smFlwCon + "image/route_markers.png",
    j = 23,
    h = {},
    J = new BMap.Size(22, 29),
    I = ["light", "cam", "toll", "entry", "sapa", "park", "gas", "poi", "road"];
    var ao = 1024,
    l = 1023,
    af = new BMap.Size(8, -8);
    ai(I,
    function(G, H) {
        h[G] = new BMap.Icon(Y, J, {
            imageOffset: new BMap.Size( - 74 - j * H, -1)
        })
    });
    var L = function(H, G) {
        ai(this,
        function(ap) {
            G ? H.addOverlay(ap) : H.removeOverlay(ap)
        })
    };
    function ab(G) {
        if (G <= 0) {
            return undefined
        }
        if (G <= 2) {
            return ae
        } else {
            if (G === 3) {
                return e
            } else {
                return k
            }
        }
    }
    r.getColorizedRoutes = function(ap) {
        var aq = [],
        G = [];
        if (ap.content && !ap.content.rss) {
            return G
        }
        var H = {
            rank: null,
            points: []
        };
        d(ap.content.rss,
        function(au, ar) {
            var ax = ar.rr,
            aw = ar.g;
            if (typeof(aw) !== "string") {
                return
            }
            if (!ax || !aw) {
                return
            }
            var av = parse2Geo(aw).points;
            if (H.rank === null || ab(H.rank) === ab(ax)) {
                H.points.push(av);
                H.rank = ax
            } else {
                aq.push(H);
                if (H.points.length > 0) {
                    var at = H.points[H.points.length - 1].split(";");
                    at = prevLastPoint = at[at.length - 1];
                    at && (av = at + ";" + av)
                }
                H = {
                    rank: ax,
                    points: [av]
                }
            }
        });
        aq.push(H);
        ai(aq,
        function(au) {
            var ar = null;
            if (au.length === 0) {
                return
            }
            ar = ab(au.rank);
            var at = au.points.join(";");
            G.push(new BMap.Polyline(at, ar))
        });
        G.toggle = L;
        return G
    };
    function S(G) {
        if (G.replace(/[\u0100-\uffff]/g, "##").length > 25) {
            return G.substring(0, 11) + "..."
        }
        return G
    }
    var D = DriveControl.ID || "DriveCtrl";
    var ag = "zoomOut_" + D,
    z = "zoomIn_" + D,
    p = "prev_" + D,
    ad = "next_" + D;
    var X = ['<p class="iw_poi_title" title="{title0}">{title}', '<a id="' + ag + '" style="display:none" href="javascript:void(0)">缩小</a>', '<a id="' + z + '" href="javascript:void(0)">放大</a>', "</p>"];
    var P = ['<div class="iw_poi_content">', '<div class="iw_trans_content">{info}</div>', '<table width="99%" cols="2" class="iw_trans_nav">', "<tbody><tr>", '<td nowrap="nowrap" width="50%" align="left">', '<a id="' + p + '" href="javascript:void(0);">上一个</a>', "</td>", '<td nowrap="nowrap" width="50%" align="right">', '<a id="' + ad + '"  href="javascript:void(0);">下一个</a>', "<span>{next}</span>", "</td>", "</tr></tbody>", "</table>", "</div>"];
    var al = InfoWindowMaker = {
        lgt: function(G) {
            var ap = G.__info;
            var aq = n(X, {
                title0: "",
                title: "红绿灯"
            });
            var H = n(P, {
                next: "",
                info: ""
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        tol: function(G) {
            var ap = G.__item;
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.n)
            });
            var H = n(P, {
                next: "",
                info: ""
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        sapa: function(G) {
            var ap = G.__item;
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.n)
            });
            var H = n(P, {
                next: "",
                info: ""
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        gas: function(G) {
            var ap = G.__item;
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.n)
            });
            var H = n(P, {
                next: "",
                info: ""
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        poi: function(G) {
            var ap = G.__info[G.__t];
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.pn)
            });
            var H = n(P, {
                next: "",
                info: ""
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        entry: function(G) {
            var ap = o.popInfos[G.__i];
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.title)
            }),
            H = n(P, {
                info: ap.info,
                next: (ap.next ? "(" + ap.next + ")": "")
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        road: function(G) {
            var ap = G.__info;
            var aq = n(X, {
                title0: (ap.n || ""),
                title: S(ap.n)
            });
            var H = n(P, {
                next: "",
                info: "该路段长约" + o.roundDis(ap.mn.ml)
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        park: function(G) {
            var ap = G.__info;
            var aq = n(X, {
                title0: (ap.name || ""),
                title: S(ap.name)
            });
            var H = n(P, {
                next: "",
                info: n("地址：{addr}", ap)
            });
            return m(new BMap.InfoWindow(H, {
                title: aq,
                width: 240,
                height: 0
            }), G)
        },
        cam: function(G) {
            var aq = G.__item;
            var H = g[aq.t];
            H = H || g[0];
            var ar = n(X, {
                title0: H,
                title: H
            });
            var ap = n(P, {
                next: "",
                info: n(aq.s ? "限速：{s}公里/小时": "", aq)
            });
            return m(new BMap.InfoWindow(ap, {
                title: ar,
                width: 240,
                height: 0
            }), G)
        }
    };
    function O(G) {
        if (!G) {
            return
        }
        G.style.color = "#666";
        G.style.cursor = "default"
    }
    function C(G) {
        if (!G) {
            return
        }
        G.style.color = "";
        G.style.cursor = ""
    }
    function K(H, G) {
        if (!H) {
            return
        }
        H.style.display = G ? "inline": "none"
    }
    function m(aq, G) {
        var ar = aa(G, false),
        ap = aa(G, true),
        H = {
            type: G.__t
        };
        aq.addEventListener("open",
        function(az) {
            var aw = V.G(ad),
            ay = V.G(p);
            if (ap) {
                V.on(aw, "click",
                function(aB) {
                    b({
                        target: ap
                    },
                    true);
                    A.everytime(w.INFOW_NEXT, H)
                });
                C(aw)
            } else {
                O(aw)
            }
            if (ar) {
                V.on(ay, "click",
                function(aB) {
                    b({
                        target: ar
                    },
                    true);
                    A.everytime(w.INFOW_PREV, H)
                });
                C(ay)
            } else {
                O(ay)
            }
            var aA = V.G(z),
            at = V.G(ag);
            var ax = y.getZoom();
            if (ax === s) {
                K(aA, false);
                K(at, true)
            } else {
                K(aA, true);
                K(at, false)
            }
            V.on(aA, "click",
            function(aB) {
                y.zoomTo(s);
                K(aA, false);
                K(at, true);
                A.everytime(w.INFOW_ZOOMIN, H)
            });
            V.on(at, "click",
            function(aB) {
                y.zoomTo(a);
                K(aA, true);
                K(at, false);
                A.everytime(w.INFOW_ZOOMOUT, H)
            });
            y.addEventListener("zoomend",
            function() {
                var aB = y.getZoom();
                if (aB === s) {
                    K(aA, false);
                    K(at, true)
                } else {
                    K(aA, true);
                    K(at, false)
                }
            });
            var au = x(aq, "map.infoWindowDoms.closeButton");
            if (au) {
                var av = au.onclick;
                au.onclick = function() {
                    A.everytime(w.INFOW_CLOSE, H);
                    av.apply(this, arguments)
                }
            }
        });
        return aq
    }
    function b(at, H) {
        var G = at.target,
        ar = G.__t,
        aq = al[ar];
        if (!aq) {
            return
        }
        var ap = aq(G);
        G.openInfoWindow(ap);
        A.set(w.OPERATED, true);
        if (!H) {
            A.everytime(w.MARKER_CLICK, {
                type: ar
            })
        }
    }
    function W(G) {
        _raiseMarkerToTop(G.target)
    }
    function v(ap) {
        var G = ap.target,
        H = null;
        if (G && G.__label) {
            H = G.__label;
            if (H) {
                if (H.__hide) {
                    H.show()
                } else {
                    H.hide()
                }
                H.__hide = !H.__hide
            }
        }
    }
    function U(H) {
        var G = H.target;
        G.setZIndex(ao);
        if (G.__label) {
            G.__label.setZIndex(ao)
        }
        if (o.tipLabel) {
            y.removeOverlay(o.tipLabel)
        }
    }
    function ah(H) {
        var G = H.target;
        G.setZIndex(l);
        if (G.__label) {
            G.__label.setZIndex(l)
        }
        if (o.tipLabel) {
            y.removeOverlay(o.tipLabel)
        }
    }
    function ac(ar, H, aq, at, aw) {
        var au = ar.getPoint(),
        ax = x(H, aq);
        if (aw) {
            ax = aw(ax)
        }
        if (!ax) {
            return
        }
        var G = J.width / 2 + af.width,
        av = -J.height / 2 + af.height - 2;
        var ap = new BMap.Label(ax, {
            point: au,
            offset: new BMap.Size(G, av)
        }),
        ay = {
            border: "1px solid #999",
            color: "#666",
            padding: "2px",
            background: "#fff"
        };
        ap.setStyles(ay);
        ap.setZIndex(l);
        ap.__hide = at;
        ar.__label = ap
    }
    function Q(av, aq, ap, at, au) {
        var H = [],
        G = null,
        ar = null;
        ai(av,
        function(ax, aw) {
            if (at(ax)) {
                ar = x(ax, ap);
                if (typeof(ar) === "undefined") {
                    return
                }
                if (typeof(ar) === "string") {
                    if (ar.length === 0) {
                        return
                    }
                    ar = parse2Geo(ar).points.split(",")
                }
                G = new BMap.Marker(new BMap.Point(ar[0], ar[1]), {
                    icon: h[aq]
                });
                G.__i = aw;
                G.__t = aq;
                G.__info = ax;
                G.__ctn = H;
                G.setZIndex(l);
                G.setOffset(af);
                G.addEventListener("click", b);
                G.addEventListener("mouseover", U);
                G.addEventListener("mouseout", ah);
                H.push(G)
            }
        });
        return H
    }
    function R(aq, H) {
        var ap = 0,
        ar = null,
        at = null,
        G = [];
        for (; ap < aq.length; ++ap) {
            ar = aq[ap];
            if (!ar[H]) {
                continue
            }
            at = ar[H];
            if (!at) {
                continue
            }
            ai(at,
            function(av) {
                pt = av.g;
                if (typeof(pt) === "undefined") {
                    return
                }
                if (typeof(pt) === "string") {
                    if (pt.length === 0) {
                        return
                    }
                    pt = parse2Geo(pt).points.split(",")
                }
                var au = new BMap.Marker(new BMap.Point(pt[0], pt[1]), {
                    icon: h[Z[H] || H]
                });
                au.__i = ap;
                au.__t = H;
                au.__info = ar;
                au.__item = av;
                au.__ctn = G;
                au.setZIndex(l);
                au.setOffset(af);
                au.addEventListener("click", b);
                au.addEventListener("mouseover", U);
                au.addEventListener("mouseout", ah);
                G.push(au)
            })
        }
        return G
    }
    r.getMarkersAlongRoute = function(ap) {
        var G = {},
        ar = ap.content.rss,
        aq = ap.content.kps,
        H = null;
        H = G.light = R(ar, "lgt");
        c.setNum("light", H.length);
        H = G.gas = R(ar, "gas");
        c.setNum("gas", H.length);
        H = G.toll = R(ar, "tol");
        c.setNum("toll", H.length);
        H = G.cam = R(ar, "cam");
        c.setNum("cam", H.length);
        ai(H,
        function(at) {
            ac(at, at.__item, "t", true,
            function(au) {
                var au = g[au];
                return au || g[0]
            });
            at.addEventListener("mouseover", v);
            at.addEventListener("mouseout", v)
        });
        H = G.sapa = R(ar, "sapa");
        ai(H,
        function(at) {
            ac(at, at.__item, "n", true);
            at.addEventListener("mouseover", v);
            at.addEventListener("mouseout", v)
        });
        c.setNum("sapa", H.length);
        H = G.poi = Q(ar, "poi", "poi.pg",
        function(at) {
            return at.poi
        });
        ai(H,
        function(at) {
            ac(at, at.__info, "poi.pn", true);
            at.addEventListener("mouseover", v);
            at.addEventListener("mouseout", v)
        });
        c.setNum("poi", an(H,
        function(at) {
            return "" + at.getPoint().lng + at.getPoint().lat
        }).length);
        H = G.road = Q(ar, "road", "mn.mg",
        function(at) {
            return at.mn && at.mn.m == 1
        });
        ai(H,
        function(at) {
            ac(at, at.__info, "n", false)
        });
        c.setNum("road", H.length);
        H = G.entry = Q(aq, "entry", "pt",
        function(at) {
            return at.ic
        });
        c.setNum("entry", H.length);
        return G
    };
    r.getMarkersByIndex = function(H, G) {
        return aj(H,
        function(ap) {
            return ap.__i == G
        })
    };
    r.getMarkersByLabelText = function(H, G) {
        return aj(H,
        function(ap) {
            var aq = ap.__label;
            if (!aq) {
                return false
            }
            return aq.content === G
        })
    };
    function aa(ap, at) {
        var av = at ? 1 : -1,
        ar = ap.__ctn,
        au = null;
        if (Array.prototype.indexOf) {
            au = ar.indexOf(ap)
        } else {
            for (var H = 0; H < ar.length; ++H) {
                if (ar[H] === ap) {
                    au = H;
                    break
                }
            }
        }
        var aq = au + av,
        G = ar[aq];
        while (G && ap.getPoint().equals(G.getPoint())) {
            aq = aq + av;
            G = ar[aq]
        }
        return G
    }
    r.toggleMarkers = function(ap, aq, G, ar) {
        if (typeof(aq) === "undefined") {
            return
        }
        var H = null;
        ai(aq,
        function(at) {
            H = at.__label;
            if (G) {
                ap.addOverlay(at);
                if (H) {
                    ap.addOverlay(H);
                    if (H.__hide) {
                        H.hide()
                    }
                }
            } else {
                ap.removeOverlay(at);
                if (H) {
                    ap.removeOverlay(H)
                }
            }
            ar && ar(ap, at, G)
        })
    };
    var B = 12;
    r.isNearAnyMarker = function(ar, ax, at, H) {
        if (at.count <= 0) {
            return false
        }
        var av = null,
        ap = null,
        aw = null;
        at = at.status;
        for (var au in at) {
            if (!at[au]) {
                continue
            }
            av = ar[au];
            if (!av || av.length === 0) {
                continue
            }
            for (var aq = 0; aq < av.length; ++aq) {
                aw = H.pointToPixel(av[aq].getPoint());
                var G = getDistanceByPixel(ax, aw);
                if (G <= B) {
                    return true
                }
            }
        }
        return false
    };
    var am = 2000;
    var i = [];
    function q(H) {
        var G = H.content || [];
        ai(G,
        function(ar) {
            var aq = getPointByStr(parseGeo(ar.geo).points);
            var ap = new BMap.Marker(aq, {
                icon: h.park
            });
            ap.__t = "park";
            ap.__ctn = i;
            ap.__info = ar;
            ap.setZIndex(l);
            ap.setOffset(af);
            ap.addEventListener("click", b);
            ap.addEventListener("mouseover", v);
            ap.addEventListener("mouseover", U);
            ap.addEventListener("mouseout", ah);
            ac(ap, ar, "name", false);
            i.push(ap)
        });
        c.setNum("park", i.length);
        if (c.isPushed() && c.isChecked("park")) {
            ai(i,
            function(ap) {
                y.addOverlay(ap)
            })
        }
    }
    r.toggleDestParks = function(G, H, ar) {
        if (H) {
            if (i.length === 0 || ar) {
                i.length = 0;
                var ap = am;
                var aq = n(["nb&wd={wd}&nb_x={x}&nb_y={y}&r={r}", "&b=({lng1},{lat1};{lng2},{lat2})&from=webnav"], {
                    r: ap,
                    x: G.lng,
                    y: G.lat,
                    wd: encodeURIComponent("停车场"),
                    lng1: G.lng - ap,
                    lat1: G.lat - ap,
                    lng2: G.lng + ap,
                    lat2: G.lat + ap
                });
                go(aq, q)
            } else {
                ai(i,
                function(at) {
                    y.addOverlay(at)
                })
            }
        } else {
            ai(i,
            function(at) {
                y.removeOverlay(at)
            })
        }
    };
    r.requestDestParks = function(G) {
        r.toggleDestParks(G, true, true)
    }
}
function initPacks() {
    if (window.GenRequest && !window.GRControll) {
        window.GRControll = new GenRequest({
            toolAreaId: "GR_Select"
        })
    }
};