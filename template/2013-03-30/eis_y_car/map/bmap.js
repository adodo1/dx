(function() {
    var l = l || {
        version: "20080809",
        emptyFn: function() {}
    }; (function() {
        l._log = [];
        var i = 0;
        var aR = {};
        l.BaseClass = function(aS) {
            aR[(this.hashCode = (aS || l.BaseClass.guid()))] = this
        };
        l.BaseClass.guid = function() {
            return "mz_" + (i++).toString(36)
        };
        l.BaseClass.create = function() {
            var aS = new l.BaseClass();
            aS.decontrol();
            return aS
        };
        var e = l.instance = l.I = function(aS) {
            return aR[aS]
        };
        l.BaseClass.prototype.dispose = function() {
            if (this.hashCode) {
                delete aR[this.hashCode]
            }
            for (var aS in this) {
                if (typeof this[aS] != "function") {
                    delete this[aS]
                }
            }
        };
        l.BaseClass.prototype.getHashCode = function() {
            if (!this.hashCode) {
                aR[(this.hashCode = l.BaseClass.guid())] = this
            }
            return this.hashCode
        };
        l.BaseClass.prototype.decontrol = function() {
            delete aR[this.hashCode]
        };
        l.BaseClass.prototype.toString = function() {
            return "[object " + (this._className || "Object") + "]"
        };
        l.BaseClass.prototype._wlog = function(aT, aU) {
            var aS = l._log;
            if (aS.length > 100) {
                aS.reverse().length = 50;
                aS.reverse()
            }
            aS[aS.length] = "[" + aT + "][" + (this._className || "Object") + " " + this.hashCode + "] " + aU
        }
    })();
    Function.prototype.inherits = function(aS, aR) {
        var e, aT, aV = this.prototype,
        aU = function() {};
        aU.prototype = aS.prototype;
        aT = this.prototype = new aU();
        if (typeof(aR) == "string") {
            aT._className = aR
        }
        for (e in aV) {
            aT[e] = aV[e]
        }
        this.prototype.constructor = aV.constructor;
        aV = aU = null;
        return aT
    };
    l.BaseEvent = function(e, i) {
        this.type = e;
        this.returnValue = true;
        this.target = i || null;
        this.currentTarget = this.srcElement = null;
        this.cancelBubble = false;
        this.domEvent = null
    };
    l.BaseClass.prototype.addEventListener = function(aS, aR, i) {
        if (typeof aR != "function") {
            return this._wlog("error", "addEventListener:" + aR + " is not a function")
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        var e = this._listeners,
        aT;
        if (typeof i == "string" && i) {
            if (/[^\w\-]/.test(i)) {
                this._wlog("warning", "nonstandard key:" + i)
            } else {
                aR.hashCode = i;
                aT = i
            }
        }
        if (aS.indexOf("on") != 0) {
            aS = "on" + aS
        }
        if (typeof e[aS] != "object") {
            e[aS] = {}
        }
        aT = aT || l.BaseClass.guid();
        aR.hashCode = aT;
        if (e[aS][aT]) {
            this._wlog("warning", "repeat key:" + aT)
        }
        e[aS][aT] = aR
    };
    l.BaseClass.prototype.removeEventListener = function(aR, i) {
        if (typeof i == "function") {
            i = i.hashCode
        } else {
            if (typeof i != "string") {
                return
            }
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        if (aR.indexOf("on") != 0) {
            aR = "on" + aR
        }
        var e = this._listeners;
        if (!e[aR]) {
            return
        }
        if (e[aR][i]) {
            delete e[aR][i]
        }
    };
    l.BaseClass.prototype.dispatchEvent = function(aS) {
        if (!this._listeners) {
            this._listeners = {}
        }
        var aR, e = this._listeners,
        aT = aS.type;
        aS.target = aS.srcElement = aS.target || aS.srcElement || this;
        aS.currentTarget = this;
        if (typeof this[aT] == "function") {
            this[aT](aS)
        }
        if (typeof e[aT] == "object") {
            for (aR in e[aT]) {
                if (typeof e[aT][aR] == "function") {
                    e[aT][aR].call(this, aS)
                }
            }
        }
        return aS.returnValue
    };
    l.BaseEvent.prototype.inherit = function(aT) {
        var aS = this;
        this.domEvent = aT = window.event || aT;
        aS.clientX = aT.clientX || aT.pageX;
        aS.clientY = aT.clientY || aT.pageY;
        aS.offsetX = aT.offsetX || aT.layerX;
        aS.offsetY = aT.offsetY || aT.layerY;
        aS.screenX = aT.screenX;
        aS.screenY = aT.screenY;
        aS.ctrlKey = aT.ctrlKey || aT.metaKey;
        aS.shiftKey = aT.shiftKey;
        aS.altKey = aT.altKey;
        if (aT.touches) {
            aS.touches = [];
            for (var aR = 0; aR < aT.touches.length; aR++) {
                aS.touches.push({
                    clientX: aT.touches[aR].clientX,
                    clientY: aT.touches[aR].clientY,
                    screenX: aT.touches[aR].screenX,
                    screenY: aT.touches[aR].screenY,
                    pageX: aT.touches[aR].pageX,
                    pageY: aT.touches[aR].pageY,
                    target: aT.touches[aR].target,
                    identifier: aT.touches[aR].identifier
                })
            }
        }
        if (aT.changedTouches) {
            aS.changedTouches = [];
            for (var aR = 0; aR < aT.changedTouches.length; aR++) {
                aS.changedTouches.push({
                    clientX: aT.changedTouches[aR].clientX,
                    clientY: aT.changedTouches[aR].clientY,
                    screenX: aT.changedTouches[aR].screenX,
                    screenY: aT.changedTouches[aR].screenY,
                    pageX: aT.changedTouches[aR].pageX,
                    pageY: aT.changedTouches[aR].pageY,
                    target: aT.changedTouches[aR].target,
                    identifier: aT.changedTouches[aR].identifier
                })
            }
        }
        if (aT.targetTouches) {
            aS.targetTouches = [];
            for (var aR = 0; aR < aT.targetTouches.length; aR++) {
                aS.targetTouches.push({
                    clientX: aT.targetTouches[aR].clientX,
                    clientY: aT.targetTouches[aR].clientY,
                    screenX: aT.targetTouches[aR].screenX,
                    screenY: aT.targetTouches[aR].screenY,
                    pageX: aT.targetTouches[aR].pageX,
                    pageY: aT.targetTouches[aR].pageY,
                    target: aT.targetTouches[aR].target,
                    identifier: aT.targetTouches[aR].identifier
                })
            }
        }
        aS.rotation = aT.rotation;
        aS.scale = aT.scale;
        return aS
    };
    l.Browser = (function() {
        var aR = navigator.userAgent;
        var e = 0,
        aT = 0,
        i = 0,
        aW = 0,
        aU = 0;
        var aX = 0,
        aS = 0,
        aV = 0;
        if (typeof(window.opera) == "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(aR)) {
            aT = parseFloat(RegExp.$2)
        } else {
            if (/MSIE (\d+(\.\d+)?)/.test(aR)) {
                e = parseFloat(RegExp.$1)
            } else {
                if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(aR)) {
                    aW = parseFloat(RegExp.$2)
                } else {
                    if (navigator.vendor == "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(aR)) {
                        aV = parseFloat(RegExp.$2)
                    } else {
                        if (aR.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(aR)) {
                            i = parseFloat(RegExp.$1)
                        }
                    }
                }
            }
        }
        if (aR.indexOf("Gecko") > -1 && aR.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/.test(aR)) {
            aS = parseFloat(RegExp.$1)
        }
        if (/chrome\/(\d+\.\d)/i.test(aR)) {
            aU = parseFloat(RegExp["\x241"])
        }
        return {
            ie: e,
            firefox: aW,
            gecko: aS,
            netscape: aV,
            opera: aT,
            safari: i,
            chrome: aU
        }
    })();
    window.FeBrowser = l.Browser;
    l.Dom = {};
    l.Dom.createDom = function(i, e) {
        if (l.isIE && e && e.name) {
            i = "<" + i + ' name="' + l.String.escapeHTML(e.name) + '">'
        }
        var aR = document.createElement(i);
        if (e) {
            l.Dom.setProperties(aR, e)
        }
        return aR
    };
    l.Dom.getOffset = function(aS) {
        var aV = l.Dom.getOwnerDocument(aS);
        var aU = l.isGecko > 0 && aV.getBoxObjectFor && l.Dom.getStyle(aS, "position") == "absolute" && (aS.style.top === "" || aS.style.left === "");
        var aW = {
            left: 0,
            top: 0
        };
        var i = (l.isIE && !l.isStrict) ? aV.body: aV.documentElement;
        if (aS == i) {
            return aW
        }
        var aR = null;
        var aT;
        if (aS.getBoundingClientRect) {
            aT = aS.getBoundingClientRect();
            aW.left = aT.left + Math.max(aV.documentElement.scrollLeft, aV.body.scrollLeft);
            aW.top = aT.top + Math.max(aV.documentElement.scrollTop, aV.body.scrollTop);
            aW.left -= aV.documentElement.clientLeft;
            aW.top -= aV.documentElement.clientTop;
            if (l.isIE && !l.isStrict) {
                aW.left -= 2;
                aW.top -= 2
            }
        } else {
            if (aV.getBoxObjectFor && !aU) {
                aT = aV.getBoxObjectFor(aS);
                var e = aV.getBoxObjectFor(i);
                aW.left = aT.screenX - e.screenX;
                aW.top = aT.screenY - e.screenY
            } else {
                aR = aS;
                do {
                    aW.left += aR.offsetLeft;
                    aW.top += aR.offsetTop;
                    if (l.isWebkit > 0 && l.Dom.getStyle(aR, "position") == "fixed") {
                        aW.left += aV.body.scrollLeft;
                        aW.top += aV.body.scrollTop;
                        break
                    }
                    aR = aR.offsetParent
                } while ( aR && aR != aS );
                if (l.isOpera > 0 || (l.isWebkit > 0 && l.Dom.getStyle(aS, "position") == "absolute")) {
                    aW.top -= aV.body.offsetTop
                }
                aR = aS.offsetParent;
                while (aR && aR != aV.body) {
                    aW.left -= aR.scrollLeft;
                    if (!l.isOpera || aR.tagName != "TR") {
                        aW.top -= aR.scrollTop
                    }
                    aR = aR.offsetParent
                }
            }
        }
        return aW
    };
    l.Dom.getOwnerDocument = function(e) {
        return e.nodeType == 9 ? e: e.ownerDocument || e.document
    };
    l.Dom.setProperties = function(i, e) {
        l.each(e,
        function(aS, aR) {
            l.Dom._setProperty(i, aR, aS)
        })
    };
    l.Dom._setProperty = function(i, e, aR) {
        if (e == "style") {
            i.style.cssText = aR
        } else {
            if (e == "class") {
                i.className = aR
            } else {
                if (e == "for") {
                    i.htmlFor = aR
                } else {
                    if (e in l.Dom._DIRECT_ATTRIBUTE_MAP) {
                        i.setAttribute(l.Dom._DIRECT_ATTRIBUTE_MAP[e], aR)
                    } else {
                        i[e] = aR
                    }
                }
            }
        }
    };
    l.Dom._DIRECT_ATTRIBUTE_MAP = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    l.G = function() {
        for (var aR = [], aS = arguments.length - 1; aS > -1; aS--) {
            var aT = arguments[aS];
            aR[aS] = null;
            if (typeof aT == "object" && aT && aT.dom) {
                aR[aS] = aT.dom
            } else {
                if ((typeof aT == "object" && aT && aT.tagName) || aT == window || aT == document) {
                    aR[aS] = aT
                } else {
                    if (typeof aT == "string" && (aT = document.getElementById(aT))) {
                        aR[aS] = aT
                    }
                }
            }
        }
        return aR.length < 2 ? aR[0] : aR
    };
    l.ac = function(e, i) {
        if (! (e = this.G(e))) {
            return
        }
        i = this.trim(i);
        if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
            e.className = e.className.split(/\s+/).concat(i).join(" ")
        }
    };
    l.addClassName = l.ac;
    l.each = function(aU, e) {
        if (typeof e != "function") {
            return aU
        }
        if (aU) {
            if (aU.length === undefined) {
                for (var aR in aU) {
                    e.call(aU[aR], aU[aR], aR)
                }
            } else {
                for (var aS = 0,
                aT = aU.length; aS < aT; aS++) {
                    e.call(aU[aS], aU[aS], aS)
                }
            }
        }
        return aU
    };
    l.extend = function(aU, aS) {
        if (aU && aS && typeof(aS) == "object") {
            for (var aT in aS) {
                aU[aT] = aS[aT]
            }
            var aR = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            for (var e = 0,
            i; e < aR.length; e++) {
                i = aR[e];
                if (Object.prototype.hasOwnProperty.call(aS, i)) {
                    aU[i] = aS[i]
                }
            }
        }
        return aU
    };
    l.hide = function() {
        l.each(arguments,
        function(e) {
            if (e = l.G(e)) {
                e.style.display = "none"
            }
        })
    };
    l.inherit = function(aW, aS, aR) {
        var aV = aW.prototype;
        var aU = function() {};
        aU.prototype = aS.prototype;
        var aT = aW.prototype = new aU();
        if (typeof aR == "string") {
            aT._className = aR
        }
        for (var e in aV) {
            aT[e] = aV[e]
        }
        aW.prototype.constructor = aV.constructor;
        aV = null;
        return aT
    };
    l.isIE = 0; (function() {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) { / MSIE(\d + (\.\d + ) ? ) / .test(navigator.userAgent);
            l.isIE = parseFloat(RegExp.$1)
        }
    })();
    l.rc = function(e, i) {
        if (! (e = this.G(e))) {
            return
        }
        i = this.trim(i);
        var aR = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
        if (e.className != aR) {
            e.className = aR
        }
    };
    l.removeClassName = l.rc;
    l.show = function() {
        this.each(arguments,
        function(e) {
            if (e = l.G(e)) {
                e.style.display = ""
            }
        })
    };
    l.trim = function(e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    };
    l.ajax = {};
    l.fn = {};
    l.fn.blank = function() {};
    l.ajax.request = function(aU, aY) {
        var aS = aY || {},
        a5 = aS.data || "",
        aV = !(aS.async === false),
        aT = aS.username || "",
        e = aS.password || "",
        aR = (aS.method || "GET").toUpperCase(),
        i = aS.headers || {},
        aX = aS.timeout || 0,
        aZ = {},
        a2,
        a6,
        aW;
        function a1() {
            if (aW.readyState == 4) {
                try {
                    var a8 = aW.status
                } catch(a7) {
                    a4("failure");
                    return
                }
                a4(a8);
                if ((a8 >= 200 && a8 < 300) || a8 == 304 || a8 == 1223) {
                    a4("success")
                } else {
                    a4("failure")
                }
                window.setTimeout(function() {
                    aW.onreadystatechange = l.fn.blank;
                    if (aV) {
                        aW = null
                    }
                },
                0)
            }
        }
        function a0() {
            if (window.ActiveXObject) {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch(a7) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch(a7) {}
                }
            }
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest()
            }
        }
        function a4(a9) {
            a9 = "on" + a9;
            var a8 = aZ[a9],
            ba = l.ajax[a9];
            if (a8) {
                if (a2) {
                    clearTimeout(a2)
                }
                if (a9 != "onsuccess") {
                    a8(aW)
                } else {
                    try {
                        aW.responseText
                    } catch(a7) {
                        return a8(aW)
                    }
                    a8(aW, aW.responseText)
                }
            } else {
                if (ba) {
                    if (a9 == "onsuccess") {
                        return
                    }
                    ba(aW)
                }
            }
        }
        for (a6 in aS) {
            aZ[a6] = aS[a6]
        }
        i["X-Requested-With"] = "XMLHttpRequest";
        try {
            aW = a0();
            if (aR == "GET") {
                if (a5) {
                    aU += (aU.indexOf("?") >= 0 ? "&": "?") + a5;
                    a5 = null
                }
                if (aS.noCache) {
                    aU += (aU.indexOf("?") >= 0 ? "&": "?") + "b" + ( + new Date) + "=1"
                }
            }
            if (aT) {
                aW.open(aR, aU, aV, aT, e)
            } else {
                aW.open(aR, aU, aV)
            }
            if (aV) {
                aW.onreadystatechange = a1
            }
            if (aR == "POST") {
                aW.setRequestHeader("Content-Type", (i["Content-Type"] || "application/x-www-form-urlencoded"))
            }
            for (a6 in i) {
                if (i.hasOwnProperty(a6)) {
                    aW.setRequestHeader(a6, i[a6])
                }
            }
            a4("beforerequest");
            if (aX) {
                a2 = setTimeout(function() {
                    aW.onreadystatechange = l.fn.blank;
                    aW.abort();
                    a4("timeout")
                },
                aX)
            }
            aW.send(a5);
            if (!aV) {
                a1()
            }
        } catch(a3) {
            a4("failure")
        }
        return aW
    };
    var D = l.BaseClass;
    D.prototype.toString = function() {
        return this._className || ""
    };
    var au = l.BaseEvent;
    l.on = function(aR, i, e) {
        if (! (aR = l.G(aR))) {
            return aR
        }
        i = i.replace(/^on/, "").toLowerCase();
        if (aR.addEventListener) {
            aR.addEventListener(i, e, false)
        } else {
            if (aR.attachEvent) {
                aR.attachEvent("on" + i, e)
            }
        }
        return aR
    };
    l.un = function(aR, i, e) {
        if (! (aR = l.G(aR))) {
            return aR
        }
        i = i.replace(/^on/, "").toLowerCase();
        if (aR.removeEventListener) {
            aR.removeEventListener(i, e, false)
        } else {
            if (aR.detachEvent) {
                aR.detachEvent("on" + i, e)
            }
        }
        return aR
    };
    l.hc = function(aS, aR) {
        if (!aS || !aS.className || typeof aS.className != "string") {
            return false
        }
        var i = -1;
        try {
            i = aS.className == aR || aS.className.search(new RegExp("(\\s|^)" + aR + "(\\s|$)"))
        } catch(aT) {
            return false
        }
        return i > -1
    };
    if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
        try {
            HTMLElement.prototype.__defineGetter__("children",
            function() {
                for (var aR = [], aS = 0, aU, aT = 0, e = this.childNodes.length; aT < e; aT++) {
                    aU = this.childNodes[aT];
                    if (aU.nodeType == 1) {
                        aR[aS++] = aU;
                        if (aU.name) {
                            if (!aR[aU.name]) {
                                aR[aU.name] = []
                            }
                            aR[aU.name][aR[aU.name].length] = aU
                        }
                        if (aU.id) {
                            aR[aU.id] = aU
                        }
                    }
                }
                return aR
            })
        } catch(O) {}
    }
    if (typeof(HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
        HTMLElement.prototype.insertAdjacentHTML = function(i, aR) {
            var aS = this.ownerDocument.createRange();
            aS.setStartBefore(this);
            aS = aS.createContextualFragment(aR);
            switch (i) {
            case "beforeBegin":
                this.parentNode.insertBefore(aS, this);
                break;
            case "afterBegin":
                this.insertBefore(aS, this.firstChild);
                break;
            case "beforeEnd":
                this.appendChild(aS);
                break;
            case "afterEnd":
                if (!this.nextSibling) {
                    this.parentNode.appendChild(aS)
                } else {
                    this.parentNode.insertBefore(aS, this.nextSibling)
                }
                break
            }
        }
    }
    if (typeof HTMLElement != "undefined" && !window.opera) {
        HTMLElement.prototype.contains = function(e) {
            if (e == this) {
                return true
            }
            while (e = e.parentNode) {
                if (e == this) {
                    return true
                }
            }
            return false
        }
    }
    if (!l.Browser.ie && typeof Event != "undefined" && !window.opera) {
        Event.prototype.__defineSetter__("returnValue",
        function(e) {
            if (!e) {
                this.preventDefault()
            }
            return e
        });
        Event.prototype.__defineSetter__("cancelBubble",
        function(e) {
            if (e) {
                this.stopPropagation()
            }
            return e
        })
    }
    l.each = function(aT, aS) {
        if (at(aS)) {
            for (var aR = 0,
            e = aT.length; aR < e; aR++) {
                if (aS.call(aT, aT[aR], aR) === false) {
                    break
                }
            }
        }
        return aT
    };
    l.Platform = {
        x11: 0,
        macintosh: 0,
        windows: 0,
        android: 0,
        iphone: 0,
        ipad: 0
    };
    for (var L in l.Platform) {
        if (l.Platform.hasOwnProperty(L)) {
            l.Platform[L] = new RegExp(L, "i").test(window.navigator.userAgent) ? 1 : 0
        }
    }
    if (typeof(l.Dom) === "undefined") {
        l.Dom = {}
    }
    l.Dom.getComputedStyle = function(i, e) {
        var aS = i.nodeType == 9 ? i: i.ownerDocument || i.document,
        aR;
        if (aS.defaultView && aS.defaultView.getComputedStyle) {
            aR = aS.defaultView.getComputedStyle(i, null);
            if (aR) {
                return aR[e] || aR.getPropertyValue(e)
            }
        } else {
            if (i.currentStyle) {
                return i.currentStyle[e] || ""
            }
        }
        return ""
    };
    var aN = {
        imgPath: "http://api.map.baidu.com/images/",
        cityNames: {
            "北京": "bj",
            "上海": "sh",
            "深圳": "sz",
            "广州": "gz",
            "泉州": "quanzhou",
            "昆明": "kunming",
            "福州": "fuzhou",
            "东莞": "dongguan",
            "武汉": "wuhan",
            "太原": "taiyuan",
            "蚌埠": "bengbu",
            "盐城": "yancheng",
            "义乌": "yiwu"
        }
    };
    if (l.Browser.firefox) {
        l.extend(aN, {
            distCursor: "url(" + aN.imgPath + "ruler.cur),crosshair",
            defaultCursor: "-moz-grab",
            draggingCursor: "-moz-grabbing"
        })
    } else {
        if (l.Browser.chrome || l.Browser.safari) {
            l.extend(aN, {
                distCursor: "url(" + aN.imgPath + "ruler.cur) 2 6,crosshair",
                defaultCursor: "url(" + aN.imgPath + "openhand.cur) 8 8,default",
                draggingCursor: "url(" + aN.imgPath + "closedhand.cur) 8 8,move"
            })
        } else {
            l.extend(aN, {
                distCursor: "url(" + aN.imgPath + "ruler.cur),crosshair",
                defaultCursor: "url(" + aN.imgPath + "openhand.cur),default",
                draggingCursor: "url(" + aN.imgPath + "closedhand.cur),move"
            })
        }
    }
    var aP = aP || {
        version: "1.1",
        _register: new Array(),
        register: function(e) {
            this._register[this._register.length] = e
        }
    };
    function B(aS, aU) {
        aS = l.G(aS);
        if (!aS) {
            return
        }
        D.call(this);
        this.container = aS;
        this._setStyle(aS);
        aS.unselectable = "on";
        aS.innerHTML = "";
        aS.appendChild(this.render());
        this.width = 0;
        this.height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.platform = aS.children[0];
        this.maskLayer = this.platform.children[0];
        this._panes = {};
        this._viewTiles = {};
        this._bind();
        this.centerPoint = null;
        this.zoomLevel = 0;
        this.lastLevel = 0;
        this.defaultZoomLevel = null;
        this.defaultCenter = null;
        this.currentCity = "";
        this.cityCode = "";
        this.currentOperation = 0;
        this.config = {
            clickInterval: 200,
            enableDragging: true,
            enableKeyboard: false,
            enableClickPan: false,
            enableDblclickZoom: true,
            enableContinuousZoom: false,
            enableWheelZoom: false,
            enableMouseDown: true,
            fps: 25,
            zoomerDuration: 240,
            actionDuration: 450,
            defaultCursor: aN.defaultCursor,
            draggingCursor: aN.draggingCursor,
            isOverviewMap: false,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            coordType: BMAP_COORD_LNGLAT,
            mapType: BMAP_NORMAL_MAP,
            restrictBounds: false,
            drawer: BMAP_SYS_DRAWER,
            enableInertialDragging: false,
            drawMargin: 500,
            enableFulltimeSpotClick: false
        };
        this.setConfig(aU);
        if (!aF[this.config.mapType]) {
            this.config.mapType = BMAP_NORMAL_MAP
        }
        aU = aU || {};
        this.config.zoomLevelMin = aU.zoomLevelMin || aF[this.config.mapType].zoomLevelMin;
        this.config.zoomLevelMax = aU.zoomLevelMax || aF[this.config.mapType].zoomLevelMax;
        this.mapType = this.config.mapType;
        this.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            I: function(i) {
                return l.I(i)
            },
            curSpots: [],
            curSpotsArray: [],
            spotsGuid: 1,
            registerIndex: -1
        };
        window.InstanceCore = this.temp.I;
        this.platform.style.cursor = this.config.defaultCursor;
        if (l.Browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch(aR) {}
        }
        for (var e = 0; e < aP._register.length; e++) {
            aP._register[e](this)
        }
        this.temp.registerIndex = e;
        var aT = this;
        if (l.Platform.windows || l.Platform.macintosh || l.Platform.x11) {
            ao.load("oppc",
            function() {
                aT._asyncRegister()
            })
        }
        if (l.Platform.iphone || l.Platform.ipad || l.Platform.android) {
            ao.load("opmb",
            function() {
                aT._asyncRegister()
            })
        }
        aS = null
    }
    B.inherits(D, "Map");
    l.extend(B.prototype, {
        render: function() {
            var e = q("div", {
                id: "platform"
            });
            var aS = e.style;
            aS.overflow = "visible";
            aS.position = "absolute";
            aS.zIndex = "0";
            aS.top = aS.left = "0px";
            var i = q("div", {
                id: "mask",
                "class": "BMap_mask"
            });
            var aR = i.style;
            aR.position = "absolute";
            aR.top = aR.left = "0px";
            aR.zIndex = "9";
            aR.overflow = "hidden";
            aR.WebkitUserSelect = "none";
            e.appendChild(i);
            return e
        },
        _setStyle: function(i) {
            var e = i.style;
            e.overflow = "hidden";
            if (al(i).position != "absolute") {
                e.position = "relative"
            }
            e.backgroundImage = "url(" + aN.imgPath + "bg.png)";
            e.textAlign = "left"
        },
        _bind: function() {
            var e = this;
            e._watchSize = function() {
                var aR = e.getSize();
                if (e.width != aR.width || e.height != aR.height) {
                    var aV = (aR.width - e.width) / 2;
                    var aX = (aR.height - e.height) / 2;
                    var aS = e.getZoomUnits();
                    var aU = e.centerPoint;
                    if (aU) {
                        e.centerPoint = new f(aU.lng + aV * aS, aU.lat - aX * aS)
                    }
                    e.maskLayer.style.width = (e.width = aR.width) + "px";
                    e.maskLayer.style.height = (e.height = aR.height) + "px";
                    if (e.divhs) {
                        e.divhs.style.width = (e.width = aR.width) + "px";
                        e.divhs.style.height = (e.height = aR.height) + "px"
                    }
                    var aT = new au("onresize");
                    aT.size = aR;
                    e.dispatchEvent(aT);
                    var i = parseInt(e.platform.style.left) || 0;
                    var aW = parseInt(e.platform.style.top) || 0;
                    if (e.currentOperation != "undefined" && e.currentOperation != 0 && (e.offsetX != i || e.offsetY != aW)) {
                        e._setPlatformPosition(i, aW)
                    }
                }
            };
            e._watchSize();
            setInterval(e._watchSize, 80)
        },
        _setPlatformPosition: function(a0, aY, aS, a1) {
            if (isNaN(a0) || isNaN(aY)) {
                return
            }
            if (this.offsetX == a0 && this.offsetY == aY) {
                return
            }
            var aT = this.offsetX - a0;
            var aR = this.offsetY - aY;
            var aU = this.getZoomUnits();
            var aZ = this.centerPoint.lng;
            var aX = this.centerPoint.lat;
            var aW = new f(aZ, aX);
            this.centerPoint = new f(aW.lng + aT * aU, aW.lat - aR * aU);
            if (aS) {
                this.centerPoint = aS
            }
            if (this.zoomLevel <= 4 || this.config.restrictBounds) {
                var i = aF[this.mapType].bounds;
                if (this.centerPoint.lng - this.width / 2 * aU <= i.minX && aT < 0 || this.centerPoint.lng + this.width / 2 * aU > i.maxX && aT >= 0) {
                    a0 = this.offsetX
                }
                if (this.centerPoint.lat - this.height / 2 * aU <= i.minY && aR >= 0 || this.centerPoint.lat + this.height / 2 * aU > i.maxY && aR < 0) {
                    aY = this.offsetY
                }
                this.centerPoint = new f(aW.lng + (this.offsetX - a0) * aU, aW.lat - (this.offsetY - aY) * aU);
                var aV = new au("onreachbounds");
                this.dispatchEvent(aV)
            }
            a0 = Math.round(a0);
            aY = Math.round(aY);
            this.offsetX = a0;
            this.offsetY = aY;
            this.platform.style.left = a0 + "px";
            this.platform.style.top = aY + "px";
            this.maskLayer.style.left = -a0 + "px";
            this.maskLayer.style.top = -aY + "px";
            if (this.divhs) {
                this.divhs.style.left = -a0 + "px";
                this.divhs.style.top = -aY + "px"
            }
            if (a1 != false) {
                this.dispatchEvent(new au("onmoving"))
            }
        },
        zoomTo: function(aV, i) {
            if (typeof aV != "number") {
                return
            }
            var aU = aF[this.mapType];
            if (!aU) {
                return
            }
            aV = this._getProperZoom(aV).zoom;
            if (aV == this.zoomLevel) {
                return
            }
            this.lastLevel = this.zoomLevel;
            if (i) {
                this.temp._cPoint = i;
                this.temp._cPixel = this.pointToPixel(i)
            } else {
                if (this.getInfoWindow()) {
                    var aT = this.getInfoWindow().getPoint();
                    this.temp._cPixel = this.pointToPixel(aT);
                    this.temp._cPoint = aT
                }
            }
            if (i || this.temp.infoWin && this.temp.infoWin.isOpen()) {
                var aR = this.config.coordType == BMAP_COORD_LNGLAT ? ap.convertLL2MC(this.temp._cPoint) : this.temp._cPoint;
                aR = this.mapType == BMAP_PERSPECTIVE_MAP ? T.convert2DTo3D(this.currentCity, aR) : aR;
                var e = this.temp._cPixel;
                var aS = this.getZoomUnits(aV);
                this.centerPoint = new f(aR.lng + aS * (this.width / 2 - e.x), aR.lat - aS * (this.height / 2 - e.y))
            }
            this.dispatchEvent(new au("onzoomstart"));
            this.dispatchEvent(new au("onzoomstartcode"));
            this.zoomLevel = aV
        },
        zoomIn: function(e) {
            this.zoomTo(this.zoomLevel + 1, e)
        },
        zoomOut: function(e) {
            this.zoomTo(this.zoomLevel - 1, e)
        },
        panTo: function(i, aS, aT) {
            if (!i || i.toString() != "Point") {
                return
            }
            var aR = this.pointToPixel(i);
            i = this.config.coordType == BMAP_COORD_LNGLAT ? T.convertLL2MC(i) : i;
            i = this.mapType == BMAP_PERSPECTIVE_MAP ? T.convert2DTo3D(this.currentCity, i) : i;
            var e = Math.round(this.width / 2);

            var aU = Math.round(this.height / 2);
            if (Math.abs(e - aR.x) > this.width || Math.abs(aU - aR.y) > this.height || aS == true) {
                this._panTo(e - aR.x, aU - aR.y, i)
            } else {
                this._panBy(e - aR.x, aU - aR.y, {
                    duration: aT
                })
            }
        },
        _panTo: function(i, e, aS) {
            var aR = this.temp;
            if (aR.operating == true) {
                return
            }
            if (aR.dragAni) {
                aR.dragAni.stop();
                aR.dragAni = null;
                this.dispatchEvent(new au("onmoveend"))
            }
            this.dispatchEvent(new au("onmovestart"));
            this._setPlatformPosition(this.offsetX + i, this.offsetY + e, aS);
            this.dispatchEvent(new au("onmoveend"))
        },
        panBy: function(i, e) {
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && !arguments[3]) {
                this._panBy(i, e, {
                    fps: arguments[2]
                })
            } else {
                this._panTo(i, e)
            }
        },
        _panBy: function(i, e, aT) {
            if (this.temp.operating == true) {
                return
            }
            aT = aT || {};
            this.dispatchEvent(new au("onmovestart"));
            var aS = this,
            aR = aS.temp;
            aR.pl = aS.offsetX;
            aR.pt = aS.offsetY;
            if (aR.tlPan) {
                aR.tlPan.cancel()
            }
            if (aR.dragAni) {
                aR.dragAni.stop();
                aR.dragAni = null;
                this.dispatchEvent(new au("onmoveend"))
            }
            aR.tlPan = new aD({
                fps: aT.fps || aS.config.fps,
                duration: aT.duration || aS.config.actionDuration,
                transition: aT.transition || k.easeInOutQuad,
                render: function(aU) {
                    this.terminative = aS.temp.operating;
                    if (aS.temp.operating) {
                        return
                    }
                    aS._setPlatformPosition(aR.pl + Math.ceil(i * aU), aR.pt + Math.ceil(e * aU))
                },
                finish: function(aU) {
                    aS.dispatchEvent(new au("onmoveend"));
                    aS.temp.tlPan = false;
                    if (aS.temp.stopArrow == true) {
                        aS.temp.stopArrow = false;
                        if (aS.temp.arrow != 0) {
                            aS._arrow()
                        }
                    }
                }
            })
        },
        addControl: function(e) {
            if (e && at(e._i)) {
                e._i(this);
                this.dispatchEvent(new au("onaddcontrol", e))
            }
        },
        removeControl: function(e) {
            if (e && at(e.remove)) {
                e.remove();
                this.dispatchEvent(new au("onremovecontrol", e))
            }
        },
        addContextMenu: function(e) {
            if (e && e._type == "contextmenu" && typeof e.initialize == "function") {
                e.initialize(this);
                this.dispatchEvent(new au("onaddcontextmenu", e))
            }
        },
        removeContextMenu: function(e) {
            if (e && e._type == "contextmenu" && typeof e.remove == "function") {
                this.dispatchEvent(new au("onremovecontextmenu", e));
                e.remove()
            }
        },
        addOverlay: function(e) {
            if (e && at(e._i)) {
                e._i(this);
                this.dispatchEvent(new au("onaddoverlay", e))
            }
        },
        removeOverlay: function(e) {
            if (e && at(e.remove)) {
                e.remove();
                this.dispatchEvent(new au("onremoveoverlay", e))
            }
        },
        clearOverlays: function() {
            this.dispatchEvent(new au("onclearoverlays"))
        },
        addTileLayer: function(e) {
            for (var aS = 0; aS < this.tileMgr.tileLayers.length; aS++) {
                var aR = this.tileMgr.tileLayers[aS];
                if (aR == e || aR.getMapType() == e.getMapType()) {
                    return
                }
            }
            if (e && e._type == "tilelayer" && at(e.initialize)) {
                e.initialize(this);
                this.dispatchEvent(new au("onaddtilelayer", e))
            }
        },
        removeTileLayer: function(e) {
            if (e && e._type == "tilelayer" && at(e.remove)) {
                e.remove();
                this.dispatchEvent(new au("onremovetilelayer", e))
            }
        },
        getTileLayer: function(e) {
            if (this.tileMgr) {
                return this.tileMgr.getTileLayer(e)
            }
            return
        },
        setMapType: function(i) {
            if (this.mapType == i) {
                return
            }
            var e = this;
            e._enableMapChange = false;
            if (e._changeMapType) {
                e._changeMapType(i)
            } else {
                ao.load("3dmap",
                function() {
                    e._asyncRegister();
                    e._changeMapType(i)
                })
            }
        },
        getTileId: function(e, aU) {
            var aS = aF[this.mapType];
            if (typeof aS != "object") {
                return null
            }
            var i = aS.baseUnits * Math.pow(2, (aS.zoomLevelBase - aU));
            var aT = parseInt(e.lng / i);
            var aR = parseInt(e.lat / i);
            return {
                row: aT,
                column: aR,
                level: aU
            }
        },
        getViewTiles: function() {
            var i = this;
            var e = this._viewTiles[i.mapType];
            return e
        },
        setCenter: function(e) {
            this.panTo(e, true)
        },
        centerAndZoom: function(i, aV, aR) {
            if (!i || !aV) {
                return
            }
            aV = this._getProperZoom(aV).zoom;
            this.lastLevel = this.zoomLevel || aV;
            this.zoomLevel = aV;
            var aT = new au("onload");
            aT.point = i;
            aT.zoom = aV;
            function aU(a1, a0, aW) {
                a1.centerPoint = new f(aW.lng, aW.lat);
                a1.defaultZoomLevel = a1.defaultZoomLevel || a1.zoomLevel;
                a1.defaultCenter = a1.defaultCenter || a1.centerPoint;
                if (!a1.loaded) {
                    var aZ = new x( - 21364736, -10616832, 23855104, 15859712);
                    var aY = new ae("baidu", aZ, "EGT地图");
                    var aX = new E({
                        mapType: a1.mapType,
                        copyright: aY
                    });
                    aX.baseLayer = true;
                    a1.addTileLayer(aX)
                }
                a0.pixel = a1.pointToPixel(a1.centerPoint, a1.zoomLevel, true);
                a1.dispatchEvent(a0)
            }
            if (!aR) {
                if (this.config.coordType == BMAP_COORD_LNGLAT) {
                    i = this.config.coordType == BMAP_COORD_LNGLAT ? T.convertLL2MC(i) : i
                }
                var aS = this;
                this._setCorrectPts();
                if (this.mapType == BMAP_PERSPECTIVE_MAP && !this._get3DHotspots) {
                    i = aS.mapType == BMAP_PERSPECTIVE_MAP ? T.convert2DTo3D(aS.currentCity, i) : i;
                    aU(aS, aT, i);
                    aS.config.zoomLevelMin = 15;
                    aS.config.zoomLevelMax = 20;
                    ao.load("3dmap",
                    function() {
                        aS.temp.overlayDiv.appendChild(aS.divhs);
                        aS._clear3DHotspots();
                        aS._asyncRegister();
                        if (!aS.loaded) {
                            aS.addEventListener("zoomend", aS._get3DHotspots);
                            aS.addEventListener("moveend", aS._get3DHotspots)
                        }
                        aS._get3DHotspots();
                        return
                    })
                } else {
                    i = this.mapType == BMAP_PERSPECTIVE_MAP ? T.convert2DTo3D(this.currentCity, i) : i
                }
            }
            if (this.mapType != BMAP_PERSPECTIVE_MAP || (this.mapType == BMAP_PERSPECTIVE_MAP && this._get3DHotspots)) {
                aU(this, aT, i);
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    this._get3DHotspots()
                }
            }
        },
        reset: function() {
            this.centerAndZoom(this.defaultCenter, this.defaultZoomLevel, true)
        },
        enableDragging: function() {
            this.config.enableDragging = true
        },
        disableDragging: function() {
            this.config.enableDragging = false
        },
        enableInertialDragging: function() {
            this.config.enableInertialDragging = true
        },
        disableInertialDragging: function() {
            this.config.enableInertialDragging = false
        },
        enableScrollWheelZoom: function() {
            this.config.enableWheelZoom = true
        },
        disableScrollWheelZoom: function() {
            this.config.enableWheelZoom = false
        },
        enableContinuousZoom: function() {
            this.config.enableContinuousZoom = true
        },
        disableContinuousZoom: function() {
            this.config.enableContinuousZoom = false
        },
        enableClickPan: function(e) {
            this.config.enableClickPan = !!e
        },
        enableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = true
        },
        disableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = false
        },
        enableKeyboard: function() {
            this.config.enableKeyboard = true
        },
        disableKeyboard: function() {
            this.config.enableKeyboard = false
        },
        getSize: function() {
            var e = new V(this.container.clientWidth, this.container.clientHeight);
            return e
        },
        getCenter: function() {
            var e = this.centerPoint;
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    e = T.convert3DTo2D(this.currentCity, e)
                }
                e = ap.convertMC2LL(e)
            } else {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    e = T.convert3DTo2D(this.currentCity, e)
                }
            }
            return e
        },
        getZoom: function() {
            return this.zoomLevel
        },
        _getProperZoom: function(aR) {
            var i = this.config.zoomLevelMin,
            e = this.config.zoomLevelMax,
            aS = false;
            if (aR < i) {
                aS = true;
                aR = i
            }
            if (aR > e) {
                aS = true;
                aR = e
            }
            return {
                zoom: aR,
                exceeded: aS
            }
        },
        getContainer: function() {
            return this.container
        },
        getZoomUnits: function(aR) {
            var e = aF[this.mapType];
            if (typeof e != "object") {
                return null
            }
            var i = aR || this.zoomLevel;
            return Math.pow(2, (e.zoomLevelBase - i)) * e.baseUnits / e.tileSize
        },
        pointToPixel: function(i, aU, aS) {
            if (!i) {
                return
            }
            if (!aS) {
                i = this.config.coordType == BMAP_COORD_LNGLAT ? T.convertLL2MC(i) : i;
                i = this.mapType == BMAP_PERSPECTIVE_MAP ? T.convert2DTo3D(this.currentCity, i) : i
            }
            var aR = this.getZoomUnits(aU);
            var e = Math.round((i.lng - this.centerPoint.lng) / aR + this.width / 2);
            var aT = Math.round((this.centerPoint.lat - i.lat) / aR + this.height / 2);
            return new aG(e, aT)
        },
        pixelToPoint: function(aU, aW, aR) {
            if (!aU) {
                return
            }
            var i = this.getZoomUnits(aW);
            var aT = this.centerPoint.lng + i * (aU.x - this.width / 2);
            var aV = this.centerPoint.lat - i * (aU.y - this.height / 2);
            var e = new f(aT, aV);
            if (!aR) {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    if (this.config.coordType == BMAP_COORD_LNGLAT) {
                        var aS = T.convert3DTo2D(this.currentCity, e);
                        e = T.convertMC2LL(aS)
                    } else {
                        e = this.mapType == BMAP_PERSPECTIVE_MAP ? T.convert3DTo2D(this.currentCity, e) : e
                    }
                } else {
                    if (this.config.coordType == BMAP_COORD_LNGLAT) {
                        e = this.config.coordType == BMAP_COORD_LNGLAT ? T.convertMC2LL(e) : e
                    }
                }
            }
            return e
        },
        pointToOverlayPixel: function(e, aS, i) {
            var aR = this.pointToPixel(e, aS, i);
            if (!aR) {
                return
            }
            aR.x -= this.offsetX;
            aR.y -= this.offsetY;
            return aR
        },
        overlayPixelToPoint: function(e, aR) {
            if (!e) {
                return
            }
            var i = new aG(e.x, e.y);
            i.x += this.offsetX;
            i.y += this.offsetY;
            return this.pixelToPoint(i, aR)
        },
        lnglatToMercator: function(i, aS) {
            var e = new f(i, aS);
            var aR = T.convertLL2MC(e);
            return [aR.lng, aR.lat]
        },
        mercatorToLnglat: function(aR, i) {
            if (isNaN(aR) || isNaN(i)) {
                return []
            }
            aR = parseFloat(aR);
            i = parseFloat(i);
            var aS = new f(aR, i);
            var e = T.convertMC2LL(aS);
            return [e.lng, e.lat]
        },
        getBounds: function() {
            if (!this.isLoaded()) {
                return new x()
            }
            var e = arguments[0] || {},
            aR = e.margins || [0, 0, 0, 0],
            aT = e.level || null,
            aS = this.pixelToPoint({
                x: aR[3],
                y: this.height - aR[2]
            },
            aT, true),
            i = this.pixelToPoint({
                x: this.width - aR[1],
                y: aR[0]
            },
            aT, true);
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                aS = T.convertMC2LL(aS);
                i = T.convertMC2LL(i)
            }
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                aS = T.convert3DTo2D(this.currentCity, aS);
                i = T.convert3DTo2D(this.currentCity, i)
            }
            return new x(aS.lng, aS.lat, i.lng, i.lat)
        },
        setConfig: function(e) {
            if (!e) {
                return
            }
            for (var i in e) {
                if (typeof this.config[i] == typeof e[i]) {
                    this.config[i] = e[i]
                }
            }
        },
        isLoaded: function() {
            return !! this.loaded
        },
        _getBestLevel: function(i, aR) {
            var aV = aF[this.mapType];
            if (!aV) {
                return this.getZoom()
            }
            var aW = aR.margins || [10, 10, 10, 10],
            aT = aR.zoomFactor || 0,
            aX = aW[1] + aW[3],
            aU = aW[0] + aW[2],
            e = aV.zoomLevelMin,
            aZ = aV.zoomLevelMax;
            for (var aS = aZ; aS >= e; aS--) {
                var aY = this.getZoomUnits(aS);
                if ((i.maxX - i.minX) / aY < this.width - aX && (i.maxY - i.minY) / aY < this.height - aU) {
                    break
                }
            }
            aS += aT;
            if (aS < e) {
                aS = e
            }
            if (aS > aZ) {
                aS = aZ
            }
            return aS
        },
        getViewport: function(a1, aR) {
            var a3 = {
                center: this.getCenter(),
                zoom: this.getZoom()
            };
            if (!a1 || a1.length == 0) {
                return a3
            }
            aR = aR || {};
            var aV = [];
            var aZ = [];
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                for (var aW = 0,
                aU = a1.length; aW < aU; aW++) {
                    aV.push(ap.convertLL2MC(a1[aW]))
                }
            } else {
                aV = a1
            }
            if (this.mapType != BMAP_PERSPECTIVE_MAP) {
                aZ = aV
            } else {
                for (var aW = 0,
                aU = aV.length; aW < aU; aW++) {
                    if (!aV[aW]) {
                        continue
                    }
                    aZ.push(ap.convert2DTo3D(this.currentCity, aV[aW]))
                }
            }
            var aS = new x();
            for (var aW = aZ.length - 1; aW >= 0; aW--) {
                aS.extend(aZ[aW])
            }
            if (aS.isEmpty()) {
                return a3
            }
            var e = aS.getCenter();
            var a2 = this._getBestLevel(aS, aR);
            if (aR.margins) {
                var aY = aR.margins,
                aX = (aY[1] - aY[3]) / 2,
                a0 = (aY[0] - aY[2]) / 2,
                aT = this.getZoomUnits(a2);
                e.lng = e.lng + aT * aX;
                e.lat = e.lat + aT * a0
            }
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                e = ap.convert3DTo2D(this.currentCity, e)
            }
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                e = ap.convertMC2LL(e)
            }
            return {
                center: e,
                zoom: a2
            }
        },
        setViewport: function(i, aT) {
            var e;
            if (i && i.center) {
                e = i
            } else {
                e = this.getViewport(i, aT)
            }
            aT = aT || {};
            var aR = aT.delay || 200;
            if (e.zoom == this.zoomLevel && aT.enableAnimation != false) {
                var aS = this;
                setTimeout(function() {
                    aS.panTo(e.center, false, 210)
                },
                aR)
            } else {
                this.centerAndZoom(e.center, e.zoom)
            }
        },
        addSpots: function(i, aS) {
            if (!i || i.length == 0) {
                return
            }
            aS = aS || {};
            var aU = aS.zIndex || 0,
            aT = typeof aS.enableMultiResponse == "undefined" ? true: !!aS.enableMultiResponse;
            this.spotsPool = this.spotsPool || {};
            var e = "sp" + (this.temp.spotsGuid++);
            this.spotsPool[e] = {
                spots: i.slice(0),
                zIndex: aU,
                enableMultiResponse: aT
            };
            var aR = this;
            ao.load("hotspot",
            function() {
                aR._asyncRegister()
            });
            return e
        },
        getSpots: function(e) {
            return this.spotsPool[e] && this.spotsPool[e].spots || []
        },
        removeSpots: function(e) {
            if (!e || !this.spotsPool[e]) {
                return
            }
            delete this.spotsPool[e]
        },
        clearSpots: function() {
            delete this.spotsPool
        },
        setBounds: function(e) {
            aF[this.mapType].bounds = new x(e.minX, e.minY, e.maxX, e.maxY)
        },
        getCoordType: function() {
            return this.config.coordType
        },
        getPanes: function() {
            return this._panes
        },
        getInfoWindow: function() {
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                return this.temp.infoWin
            }
            return null
        },
        getDistance: function(aR, e) {
            if (!aR || !e) {
                return
            }
            var i = 0;
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                i = T.getDistanceByLL(aR, e)
            } else {
                i = T.getDistanceByMC(aR, e)
            }
            return i
        },
        getOverlays: function() {
            var aT = [],
            aU = this._overlays,
            aS = this._customOverlays;
            if (aU) {
                for (var aR in aU) {
                    if (aU[aR] instanceof aC) {
                        aT.push(aU[aR])
                    }
                }
            }
            if (aS) {
                for (var aR = 0,
                e = aS.length; aR < e; aR++) {
                    aT.push(aS[aR])
                }
            }
            return aT
        },
        getMapType: function() {
            return this.mapType
        },
        _asyncRegister: function() {
            for (var e = this.temp.registerIndex; e < aP._register.length; e++) {
                aP._register[e](this)
            }
            this.temp.registerIndex = e
        },
        _setCorrectPts: function() {
            var i = aF[BMAP_PERSPECTIVE_MAP].citys;
            for (var aS in i) {
                var aR = i[aS][1];
                var e = i[aS][0];
                if (aS == this.currentCity) {
                    if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                        this.setBounds(e)
                    }
                    break
                }
            }
        },
        setCurrentCity: function(aR) {
            var e = this;
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                ao.load("3dmap",
                function() {
                    e._asyncRegister();
                    e.addEventListener("zoomend", e._get3DHotspots);
                    e.addEventListener("moveend", e._get3DHotspots)
                })
            }
            if (this._clear3DHotspots) {
                this._clear3DHotspots()
            }
            var i = aF[BMAP_PERSPECTIVE_MAP].citys;
            this.currentCity = this._get3DCityCode(aR);
            this.cityCode = i[this.currentCity][2];
            this._setCorrectPts()
        },
        _get3DCityCode: function(e) {
            if (!e) {
                return "bj"
            }
            var i = aN.cityNames;
            for (var aR in i) {
                if (e.search(aR) > -1 || e.search(i[aR]) > -1) {
                    return i[aR]
                }
            }
            return "bj"
        },
        setDefaultCursor: function(e) {
            this.config.defaultCursor = e;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function() {
            return this.config.defaultCursor
        },
        setDraggingCursor: function(e) {
            this.config.draggingCursor = e
        },
        getDraggingCursor: function() {
            return this.config.draggingCursor
        }
    });
    window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAP_PERSPECTIVE_MAP = "B_DIMENSIONAL_MAP";
    window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
    window.BMAP_HYBRID_MAP = "B_STREET_MAP";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function(aV, aU) {
        if (!aV) {
            return
        }
        aU = aU || {};
        var aT = "";
        for (var aR in aU) {
            aT = aT + "&" + aR + "=" + encodeURIComponent(aU[aR])
        }
        var aW = function(i) {
            if (!i) {
                return
            }
            _addStat._sending = true;
            setTimeout(function() {
                _addStat._img.src = "http://api.map.baidu.com/images/blank.gif?" + i.src
            },
            50)
        };
        var e = function() {
            var i = _addStat._reqQueue.shift();
            if (i) {
                aW(i)
            }
        };
        var aS = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({
                src: "t=" + aS + "&code=" + aV + aT
            })
        } else {
            aW({
                src: "t=" + aS + "&code=" + aV + aT
            })
        }
        if (!_addStat._binded) {
            l.on(_addStat._img, "load",
            function() {
                _addStat._sending = false;
                e()
            });
            l.on(_addStat._img, "error",
            function() {
                _addStat._sending = false;
                e()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    var aF = {
        B_NORMAL_MAP: {
            tileUrls: ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            zoomLevelBase: 18,
            errorUrl: aN.imgPath + "bg.png",
            bounds: new x( - 21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        B_DIMENSIONAL_MAP: {
            tileUrls: ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 15,
            zoomLevelMax: 20,
            zoomLevelBase: 20,
            errorUrl: aN.imgPath + "bg.png",
            bounds: new x( - 21364736, -10616832, 23855104, 15859712),
            imgExtend: "jpg",
            hotspotUrl: ["http://d0.map.baidu.com/resource/js/map/", "http://d1.map.baidu.com/resource/js/map/", "http://d2.map.baidu.com/resource/js/map/", "http://d3.map.baidu.com/resource/js/map/"],
            entityUrl: "http://d0.map.baidu.com/resource/js/entity/",
            citys: {
                bj: [new x(524288, 9363456, 727040, 9474048), new x(12821123.68, 4784960.94, 12958550, 4862821.56), 2],
                sh: [new x(983040, 8890369, 1130495, 8994816), new x(13507877.45, 3640466.88, 13537325.71, 3658712.59), 4],
                gz: [new x(983200, 1048776, 1212200, 1236792), new x(12585645.62, 2587467.79, 12657708.96, 2656299.78), 1],
                sz: [new x(947240, 1023316, 1246028, 1208124), new x(12669674.93, 2552766.98, 12727655.99, 2583802.97), 14],
                quanzhou: [new x(531634, 531227, 552903, 580087), new x(13200055.96, 2842106.96, 13210201.95, 2850700.89), 12],
                kunming: [new x(544898, 533594, 592678, 576352), new x(11428412.04, 2859931, 11438338.95, 2867685), 8],
                fuzhou: [new x(561776, 542595, 591062, 572664), new x(13278396.01, 2987362.98, 13287710.89, 2995040.02), 27],
                dongguan: [new x(529516, 510966, 611906, 553625), new x(12657432.89, 2615687.01, 12671200.92, 2630107.02), 16],
                wuhan: [new x(528560, 503456, 629708, 594224), new x(12712634.04, 3547374.03, 12740635.98, 3565780.02), 21],
                taiyuan: [new x(557729, 542071, 609414, 593653), new x(12525406.98, 4522867.92, 12537419.04, 4540811.98), 24],
                bengbu: [new x(537793, 534291, 567182, 551012), new x(13064114.01, 3861560.02, 13070216.06, 3865528.01), 25],
                yancheng: [new x(548741, 535609, 576543, 565433), new x(13371399, 3916352.01, 13378620.04, 3926347.01), 32],
                yiwu: [new x(522885, 524554, 576249, 547628), new x(13363048.95, 3391847.51, 13371668.96, 3398527.58), 7]
            }
        },
        B_SATELLITE_MAP: {
            tileUrls: ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            zoomLevelBase: 18,
            errorUrl: aN.imgPath + "bg.png",
            bounds: new x( - 21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        B_STREET_MAP: {
            tileUrls: ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            zoomLevelBase: 18,
            errorUrl: aN.imgPath + "bg.png",
            bounds: new x( - 21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        BMAP_CUSTOM_LAYER: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 19,
            zoomLevelBase: 18,
            errorUrl: aN.imgPath + "blank.gif",
            bounds: new x( - 21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        }
    };
    function m() {}
    l.extend(m, {
        num: {
            bj: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 6)
            },
            other: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            }
        },
        correct_pts: {},
        _hostUrl: "./template/eis_y_car/map/qt.php?qt=getreferencepoint&",
        _checkReferencePoint: function(aR, aV) {
            var aS = function(aY) {
                return aY.instance[aY.method].apply(aY.instance, aY.arguments)
            };
            if (m.correct_pts[aR]) {
                return aS(aV)
            }
            var aT = this,
            aU = this._hostUrl + "c=" + aR + "&t=" + new Date().getTime(),
            i = this._hostUrl + "t=" + new Date().getTime();
            if ( !! aR) {
                var aW = l.ajax.request(aU, {
                    async: false
                });
                var e = (new Function("return (" + aW.responseText + ")"))();
                m.correct_pts[aR] = e[aR];
                l.ajax.request(i, {
                    onsuccess: function(aZ, aY) {
                        var a0 = (new Function("return (" + aY + ")"))();
                        aT._setCoordTrans(a0)
                    }
                });
                return aS(aV)
            } else {
                var aW = l.ajax.request(i, {
                    async: false
                });
                var aX = (new Function("return (" + aW.responseText + ")"))();
                aT._setCoordTrans(aX);
                return aS(aV)
            }
        },
        _setCoordTrans: function(aU) {
            for (var e = 0,
            aT = aU.length; e < aT; e++) {
                var aS = aU[e];
                for (var aR in aS) {
                    m.correct_pts[aR] = aS[aR]
                }
            }
        },
        getLnglatIndex: function(aT, aX, aW) {
            var aS = 0;
            var aR = 0;
            var aY = 10000000,
            aV = 1000000000;
            for (var aU = 0; aU < this.correct_pts[aT].length; aU++) {
                var e = this.getDis(this.correct_pts[aT][aU].x, this.correct_pts[aT][aU].y, aX, aW);
                if (e < aV) {
                    if (e < aY) {
                        aV = aY;
                        aY = e;
                        aR = aS;
                        aS = aU
                    } else {
                        sedMinDis = e;
                        aR = aU
                    }
                }
            }
            return {
                lt: aS,
                rb: aR
            }
        },
        getOMapIndex_mm: function(aT, aY, aX) {
            var aS = 0;
            var aR = 0;
            var aW = 1294723000,
            aV = 1294723000;
            for (var aU = 0; aU < this.correct_pts[aT].length; aU++) {
                var e = this.getDis(this.correct_pts[aT][aU].utm_x, this.correct_pts[aT][aU].utm_y, aY, aX);
                if (e < aV) {
                    if (e < aW) {
                        aV = aW;
                        aW = e;
                        aR = aS;
                        aS = aU
                    } else {
                        sedMinDis = e;
                        aR = aU
                    }
                }
            }
            return {
                lt: aS,
                rb: aR
            }
        },
        getDis: function(e, aS, i, aR) {
            return Math.abs(e - i) + Math.abs(aS - aR)
        },
        toMap: function(aT, e, aU) {
            var aS = (!this.num[aT]) ? this.num.other: this.num[aT];
            var i = (e - aU) * aS.num;
            var aR = (e + aU) * aS.num * aS.num2;
            return {
                x: i,
                y: aR
            }
        },
        fromMap: function(aT, e, aU) {
            var aS = (!this.num[aT]) ? this.num.other: this.num[aT];
            aU = aU / aS.num2;
            var i = (e + aU) / (aS.num * 2);
            var aR = (aU - e) / (aS.num * 2);
            return {
                x: i,
                y: aR
            }
        },
        getDgPix_mm: function(aT, aY, aU) {
            var aX = this.fromMap(aT, this.correct_pts[aT][aY].x, this.correct_pts[aT][aY].y);
            var aV = this.fromMap(aT, this.correct_pts[aT][aU].x, this.correct_pts[aT][aU].y);
            var a3 = aX.x,
            i = aX.y;
            var a2 = aV.x,
            e = aV.y;
            var a0 = this.correct_pts[aT][aY].utm_x,
            aS = this.correct_pts[aT][aY].utm_y;
            var aW = this.correct_pts[aT][aU].utm_x,
            aR = this.correct_pts[aT][aU].utm_y;
            var a1 = Math.abs((aW - a0) * 100000 / (a2 - a3));
            var aZ = Math.abs((aR - aS) * 100000 / (e - i));
            return {
                j: a1,
                w: aZ,
                x: 100000 / a1,
                y: 100000 / aZ
            }
        },
        getPx_mm: function(a6, a2, a1, aT, aS) {
            var aR = this.correct_pts[a6][aT];
            var e = this.correct_pts[a6][aT];
            var aZ = this.getDgPix_mm(a6, aT, aS);
            var aV = this.fromMap(a6, aR.x, aR.y);
            var aU = e.utm_x,
            a8 = e.utm_y;
            var a7 = a2,
            a0 = a1;
            var a5 = aV.x;
            var i = aV.y;
            var aX = a7 - aU,
            a4 = a0 - a8;
            var aY = aX * aZ.x + a5;
            var aW = -a4 * aZ.y + i;
            var a3 = this.toMap(a6, aY, aW);
            return a3
        },
        getJw_mm: function(a4, aZ, aY, aU, aT) {
            var aX = this.correct_pts[a4][aU];
            var i = this.correct_pts[a4][aU];
            var a0 = this.getDgPix_mm(a4, aU, aT);
            var a2 = this.fromMap(a4, aZ, aY);
            var aS = this.fromMap(a4, aX.x, aX.y);
            var aV = i.utm_x,
            a5 = i.utm_y;
            var a3 = aS.x;
            var aR = aS.y;
            var a6 = a2.x - a3,
            a1 = aR - a2.y;
            var aW = a6 / a0.x + aV;
            var e = a1 / a0.y + a5;
            return {
                lng: aW,
                lat: e
            }
        },
        getOMap_pts: function(aR, i) {
            var e = {
                instance: this,
                method: "_getOMap_pts",
                "arguments": [aR, i]
            };
            return this._checkReferencePoint(aR, e)
        },
        _getOMap_pts: function(i, e) {
            return this.getOMap_index(i, e.lng, e.lat, e.lt, e.rb)
        },
        getMapJw_pts: function(aR, i) {
            var e = {
                instance: this,
                method: "_getMapJw_pts",
                "arguments": [aR, i]
            };
            return this._checkReferencePoint(aR, e)
        },
        _getMapJw_pts: function(i, e) {
            return this.getMapJw_index(i, e.lng, 9998336 - e.lat, e.lt, e.rb)
        },
        getOMap_mm: function(aS, aR, i) {
            var e = this.getOMapIndex_mm(aS, aR, i);
            return this.getOMap_index(aS, aR, i, e.lt, e.rb)
        },
        getMapJw_mm: function(aR, e, aS) {
            aS = 9998336 - aS;
            var i = this.getLnglatIndex(aR, e, aS);
            return this.getMapJw_index(aR, e, aS, i.lt, i.rb)
        },
        getMapJw_Array: function(aR, i) {
            var e = {
                instance: this,
                method: "_getMapJw_Array",
                "arguments": [aR, i]
            };
            return this._checkReferencePoint(aR, e)
        },
        _getMapJw_Array: function(aV, aU) {
            var aR = this.getLnglatIndex(aV, aU[0].lng, aU[0].lat);
            var e = new Array;
            for (var aT = 0; aT < aU.length; aT++) {
                var aS = this.getJw_mm(aV, aU[aT].lng, aU[aT].lat, aR.lt, aR.rb);
                e[aT] = {
                    lng: aS.lng,
                    lat: aS.lat,
                    lt: aR.lt,
                    rb: aR.rb
                }
            }
            return e
        },
        getOMap_Array: function(aR, i) {
            var e = {
                instance: this,
                method: "_getOMap_Array",
                "arguments": [aR, i]
            };
            return this._checkReferencePoint(aR, e)
        },
        _getOMap_Array: function(aV, aU) {
            var e = this.getOMapIndex_mm(aV, aU[0].lng, aU[0].lat);
            var aT = new Array;
            for (var aS = 0; aS < aU.length; aS++) {
                var aR = this.getPx_mm(aV, aU[aS].lng, aU[aS].lat, e.lt, e.rb);
                aT[aS] = {
                    lng: aR.x,
                    lat: aR.y,
                    lt: e.lt,
                    rb: e.rb
                }
            }
            return aT
        },
        getOMap_index: function(aV, aU, aT, e, aS) {
            if (!e || !aS) {
                var i = this.getOMapIndex_mm(aV, aU, aT)
            } else {
                var i = {
                    lt: e,
                    rb: aS
                }
            }
            var aR = this.getPx_mm(aV, aU, aT, i.lt, i.rb);
            return {
                x: Math.floor(aR.x),
                y: 9998336 - Math.floor(aR.y),
                lt: i.lt,
                rb: i.rb
            }
        },
        getMapJw_index: function(aU, aR, aV, i, aT) {
            if (!i || !aT) {
                var aS = this.getLnglatIndex(aU, aR, aV)
            } else {
                var aS = {
                    lt: i,
                    rb: aT
                }
            }
            var e = this.getJw_mm(aU, aR, aV, aS.lt, aS.rb);
            return {
                lng: e.lng,
                lat: e.lat,
                lt: aS.lt,
                rb: aS.rb
            }
        }
    });
    function y(e) {
        e = e || {};
        this.charset = e.charset || "utf-8";
        this.objName = e.objName || "mapData";
        this.callback = e.callback;
        this.errorUrl = e.errorUrl || ""
    }
    y.inherits(D, "DataRequest");
    l.extend(y.prototype, {
        send: function(i, e) {
            this.url = i;
            this.userData = e;
            var aR = this;
            var aS = q("script");
            aS.type = "text/javascript";
            aS.userData = e;
            aS.setAttribute("defer", "true");
            aS.defer = true;
            aS.loaded = false;
            aS.stime = new Date().getTime();
            if (aS.addEventListener) {
                aS.addEventListener("load",
                function(aT) {
                    aR._loadData(aR.objName, aS)
                },
                false);
                aS.addEventListener("error",
                function(aT) {
                    aR._loadError(aR.objName, aS)
                },
                false)
            } else {
                if (aS.attachEvent) {
                    aS.attachEvent("onreadystatechange",
                    function(aU) {
                        var aT = window.event.srcElement;
                        aS.timer = setInterval(function() {
                            aS.etime = new Date().getTime();
                            var aV = parseInt(aS.etime - aS.stime);
                            if (aT && (aT.readyState == "loaded" || aT.readyState == "complete")) {
                                aS.loaded = true
                            }
                            if (aS.loaded == true) {
                                aR._loadData(aR.objName, aS);
                                clearInterval(aS.timer)
                            } else {
                                if (aV > 5000) {
                                    aR._loadError(aR.objName, aS);
                                    clearInterval(aS.timer)
                                }
                            }
                        },
                        5)
                    })
                }
            }
            aS.charset = aR.charset;
            aS.src = aR.url;
            document.getElementsByTagName("head")[0].appendChild(aS)
        },
        _loadData: function(aU, aR) {
            var i = window[aU];
            var aT = new au("onloaded");
            aT.data = i;
            for (var aS in aR.userData) {
                if (!aT[aS] && aR.userData[aS]) {
                    aT[aS] = aR.userData[aS]
                }
            }
            this.dispatchEvent(aT);
            aR.parentNode && aR.parentNode.removeChild(aR);
            aR = null
        },
        _loadError: function(i, e) {
            e.parentNode && e.parentNode.removeChild(e);
            e = null
        }
    });
    var aE = {
        request: function(i) {
            var e = q("script", {
                src: i,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (e.addEventListener) {
                e.addEventListener("load",
                function(aS) {
                    var aR = aS.target;
                    aR.parentNode.removeChild(aR)
                },
                false)
            } else {
                if (e.attachEvent) {
                    e.attachEvent("onreadystatechange",
                    function(aS) {
                        var aR = window.event.srcElement;
                        if (aR && (aR.readyState == "loaded" || aR.readyState == "complete")) {
                            aR.parentNode.removeChild(aR)
                        }
                    })
                }
            }
            setTimeout(function() {
                document.getElementsByTagName("head")[0].appendChild(e);
                e = null
            },
            1)
        }
    };
    function aD(aT) {
        var e = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: k.linear
        };
        if (aT) {
            for (var aR in aT) {
                e[aR] = aT[aR]
            }
        }
        this._opts = e;
        if (e.delay) {
            var aS = this;
            setTimeout(function() {
                aS._beginTime = new Date().getTime();
                aS._endTime = aS._beginTime + aS._opts.duration;
                aS._launch()
            },
            e.delay)
        } else {
            this._beginTime = new Date().getTime();
            this._endTime = this._beginTime + this._opts.duration;
            this._launch()
        }
    }
    aD.prototype._launch = function() {
        var i = this;
        var e = new Date().getTime();
        if (e >= i._endTime) {
            if (typeof i._opts.render == "function") {
                i._opts.render(i._opts.transition(1))
            }
            if (typeof i._opts.finish == "function") {
                i._opts.finish()
            }
            return
        }
        i.schedule = i._opts.transition((e - i._beginTime) / i._opts.duration);
        if (typeof i._opts.render == "function") {
            i._opts.render(i.schedule)
        }
        if (!i.terminative) {
            i._timer = setTimeout(function() {
                i._launch()
            },
            1000 / i._opts.fps)
        }
    };
    aD.prototype.stop = function(e) {
        this.terminative = true;
        if (this._timer) {
            clearTimeout(this._timer)
        }
        if (e) {
            this._endTime = this._beginTime;
            this._launch()
        }
    };
    aD.prototype.cancel = function() {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    };
    var k = {
        linear: function(e) {
            return e
        },
        reverse: function(e) {
            return 1 - e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeInCubic: function(e) {
            return Math.pow(e, 3)
        },
        easeOutQuad: function(e) {
            return - (e * (e - 2))
        },
        easeOutCubic: function(e) {
            return Math.pow((e - 1), 3) + 1
        },
        easeInOutQuad: function(e) {
            if (e < 0.5) {
                return e * e * 2
            } else {
                return - 2 * (e - 2) * e - 1
            }
            return
        },
        easeInOutCubic: function(e) {
            if (e < 0.5) {
                return Math.pow(e, 3) * 4
            } else {
                return Math.pow(e - 1, 3) * 4 + 1
            }
        },
        easeInOutSine: function(e) {
            return (1 - Math.cos(Math.PI * e)) / 2
        }
    };
    function ao() {}
    l.extend(ao, {
        Request: {
            INITIAL: -1,
            WAITING: 0,
            COMPLETED: 1
        },
        Dependency: {
            control: [],
            marker: [],
            poly: ["marker"],
            infowindow: ["marker"],
            hotspot: ["poly"],
            menu: [],
            tools: ["marker", "poly"],
            oppc: [],
            opmb: [],
            "3dmap": ["hotspot"]
        },
        preLoaded: {},
        Config: {
            _baseUrl: "./template/eis_y_car/map/get.php?qt=getmodules&v=1.1",
            _timeout: 5000
        },
        delayFlag: false,
        Module: {
            _modules: {},
            _arrMdls: []
        },
        load: function(i, aS) {
            var e = this.current(i);
            if (e._status == this.Request.COMPLETED) {
                return
            } else {
                if (e._status == this.Request.INITIAL) {
                    this.combine(i);
                    this.pushUniqueMdl(i);
                    var aR = this;
                    if (aR.delayFlag == false) {
                        aR.delayFlag = true;
                        window.setTimeout(function() {
                            var aT = aR.Config._baseUrl + "&mod=" + aR.Module._arrMdls.join(",");
                            aE.request(aT);
                            aR.Module._arrMdls.length = 0;
                            aR.delayFlag = false
                        },
                        1)
                    }
                    e._status = this.Request.WAITING
                }
                e._callbacks.push(aS)
            }
        },
        combine: function(e) {
            if (e && this.Dependency[e]) {
                var aS = this.Dependency[e];
                for (var aR = 0; aR < aS.length; aR++) {
                    this.combine(aS[aR]);
                    if (!this.Module._modules[aS[aR]]) {
                        this.pushUniqueMdl(aS[aR])
                    }
                }
            }
        },
        pushUniqueMdl: function(aR) {
            for (var e = 0; e < this.Module._arrMdls.length; e++) {
                if (this.Module._arrMdls[e] == aR) {
                    return
                }
            }
            this.Module._arrMdls.push(aR)
        },
        run: function(aT, aV) {
            var aS = this.current(aT);
            try {
                eval(aV)
            } catch(aW) {
                return
            }
            aS._status = this.Request.COMPLETED;
            for (var aU = 0,
            aR = aS._callbacks.length; aU < aR; aU++) {
                aS._callbacks[aU]()
            }
            aS._callbacks.length = 0
        },
        check: function(i, aR) {
            var e = this;
            e.timeout = setTimeout(function() {
                var aS = e.Module._modules[i]._status;
                if (aS != e.Request.COMPLETED) {
                    e.remove(i);
                    e.load(i, aR)
                } else {
                    clearTimeout(e.timeout)
                }
            },
            e.Config._timeout)
        },
        current: function(i) {
            var e;
            if (!this.Module._modules[i]) {
                this.Module._modules[i] = {};
                this.Module._modules[i]._status = this.Request.INITIAL;
                this.Module._modules[i]._callbacks = []
            }
            e = this.Module._modules[i];
            return e
        },
        remove: function(i) {
            var e = this.current(i);
            delete e
        }
    });
    window._jsload = function(e, i) {
        ao.run(e, i)
    };
    function N() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    N.inherits(D, "Control");
    l.extend(N.prototype, {
        initialize: function(e) {
            this._map = e;
            if (this._container) {
                e.container.appendChild(this._container);
                return this._container
            }
            return
        },
        _i: function(e) {
            if (!this._container && this.initialize && at(this.initialize)) {
                this._container = this.initialize(e)
            }
            this._opts = this._opts || {
                printable: false
            };
            this._setStyle();
            this._setPosition();
            if (this._container) {
                this._container._jsobj = this
            }
        },
        _setStyle: function() {
            var i = this._container;
            if (i) {
                var e = i.style;
                e.position = "absolute";
                e.zIndex = this._cZIndex || "10";
                e.MozUserSelect = "none";
                if (!this._opts.printable) {
                    l.ac(i, "BMap_noprint")
                }
                l.on(i, "contextmenu", az)
            }
        },
        remove: function() {
            this._map = null;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container._jsobj = null;
            this._container = null
        },
        _render: function() {
            this._container = X(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                this._container.style.display = "none"
            }
            return this._container
        },
        _setPosition: function() {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function(aS) {
            if (this.anchorFixed || typeof aS != "number" || isNaN(aS) || aS < BMAP_ANCHOR_TOP_LEFT || aS > BMAP_ANCHOR_BOTTOM_RIGHT) {
                aS = this.defaultAnchor
            }
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var aR = this._opts.anchor;
            this._opts.anchor = aS;
            if (!this._container) {
                return
            }
            var aU = this._container;
            var e = this._opts.offset.width;
            var aT = this._opts.offset.height;
            aU.style.left = aU.style.top = aU.style.right = aU.style.bottom = "auto";
            switch (aS) {
            case BMAP_ANCHOR_TOP_LEFT:
                aU.style.top = aT + "px";
                aU.style.left = e + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                aU.style.top = aT + "px";
                aU.style.right = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                aU.style.bottom = aT + "px";
                aU.style.left = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                aU.style.bottom = aT + "px";
                aU.style.right = e + "px";
                break;
            default:
                break
            }
            var i = ["TL", "TR", "BL", "BR"];
            l.rc(this._container, "anchor" + i[aR]);
            l.ac(this._container, "anchor" + i[aS])
        },
        getAnchor: function() {
            return this._opts.anchor
        },
        setOffset: function(e) {
            if (!e || e && e.toString() != "Size") {
                return
            }
            this._opts.offset = new V(e.width, e.height);
            if (!this._container) {
                return
            }
            this.setAnchor(this._opts.anchor)
        },
        getOffset: function() {
            return this._opts.offset
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._visible == true) {
                return
            }
            this._visible = true;
            if (this._container) {
                this._container.style.display = ""
            }
        },
        hide: function() {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                this._container.style.display = "none"
            }
        },
        isPrintable: function() {
            return !! this._opts.printable
        },
        isVisible: function() {
            if (!this._container && !this._map) {
                return false
            }
            return !! this._visible
        }
    });
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    function I(e) {
        N.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        l.extend(this._opts, e);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new V(5, 2);
        this.setAnchor(e.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    I.inherits(N, "CopyrightControl");
    l.extend(I.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        addCopyright: function(aS) {
            if (!aS || typeof aS.id != "number" || isNaN(aS.id)) {
                return
            }
            var e = {
                minZoom: 0,
                bounds: null,
                content: "",
                mapType: ""
            };
            for (var aR in aS) {
                e[aR] = aS[aR]
            }
            if (this._map) {
                var aV = e.minZoom;
                if (aV == -1 || aV < aF[this._map.mapType].zoomLevelMin || aV > aF[this._map.mapType].zoomLevelMax) {
                    e.minZoom = aF[this._map.mapType].zoomLevelMin
                }
                if (e.mapType != "" && !aF[e.mapType]) {
                    e.mapType = BMAP_NORMAL_MAP
                }
            }
            var aT = this.getCopyright(aS.id);
            if (aT) {
                for (var aU in e) {
                    aT[aU] = e[aU]
                }
            } else {
                this._copyrightCollection.push(e)
            }
        },
        getCopyright: function(aS) {
            for (var aR = 0,
            e = this._copyrightCollection.length; aR < e; aR++) {
                if (this._copyrightCollection[aR].id == aS) {
                    return this._copyrightCollection[aR]
                }
            }
        },
        getCopyrightCollection: function() {
            return this._copyrightCollection
        },
        removeCopyright: function(aS) {
            for (var aR = 0,
            e = this._copyrightCollection.length; aR < e; aR++) {
                if (this._copyrightCollection[aR].id == aS) {
                    r = this._copyrightCollection.splice(aR, 1);
                    aR--;
                    e = this._copyrightCollection.length
                }
            }
        },
        _asyncLoadCode: function() {
            var e = this;
            ao.load("control",
            function() {
                e._asyncDraw()
            })
        }
    });
    function ag(e) {
        N.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = l.extend(l.extend(this._opts, {
            size: new V(150, 150),
            padding: 5,
            isOpen: false,
            zoomInterval: 4
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new V(0, 0);
        this.setAnchor(e.anchor);
        this.setSize(this._opts.size);
        this._omCanvas;
        this._omMapContainer;
        this._omView;
        this._omViewMv;
        this._omBtn;
        this._borderWidth = 1;
        this._btnWidth = 13;
        this._btnHeight = 13;
        this._quad = 4;
        this._overviewMap = null;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._curOMZoomLevel = -1;
        this._wRatio = 1;
        this._hRatio = 1;
        this._temp = {};
        this._currentOp = "";
        this._overviewInitialized = false;
        this._asyncLoadCode()
    }
    ag.inherits(N, "OverviewMapControl");
    l.extend(ag.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setAnchor: function(e) {
            N.prototype.setAnchor.call(this, e)
        },
        changeView: function() {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false;
                return
            }
        },
        setSize: function(e) {
            if (!e || e.toString() != "Size") {
                e = new V(150, 150)
            }
            e.width = e.width > 0 ? e.width: 150;
            e.height = e.height > 0 ? e.height: 150;
            this._opts.size = e
        },
        getSize: function() {
            if (this.isOpen()) {
                return this._opts.size
            } else {
                return new V(this._btnWidth, this._btnHeight)
            }
        },
        setOffset: function(e) {
            if (!e || e.toString() != "Size") {
                return
            }
            N.prototype.setOffset.call(this, e)
        },
        remove: function() {
            N.prototype.remove.call(this)
        },
        isOpen: function() {
            return this._opts.isOpen
        },
        _asyncLoadCode: function() {
            var e = this;
            ao.load("control",
            function() {
                e._asyncDraw()
            })
        }
    });
    function R(e) {
        N.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = l.extend(l.extend(this._opts, {
            color: "black",
            unit: "metric"
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new V(81, 18);
        this.setAnchor(e.anchor);
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5280,
                u1: "英尺",
                u2: "英里"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {};
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    R.inherits(N, "ScaleControl");
    l.extend(R.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setColor: function(e) {
            this._opts.color = e + ""
        },
        getColor: function() {
            return this._opts.color
        },
        setUnit: function(e) {
            this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
        },
        getUnit: function() {
            return this._opts.unit
        },
        _asyncLoadCode: function() {
            var e = this;
            ao.load("control",
            function() {
                e._asyncDraw()
            })
        }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    function G(e) {
        N.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        l.extend(this._opts, e);
        this.controlHeight = [{
            width: 62,
            height: 226,
            zoomHeight: 159,
            zoomWidth: 37,
            sliderHeight: 120,
            sliderCHeight: 120
        },
        {
            width: 37,
            height: 97,
            zoomHeight: 38,
            zoomWidth: 37,
            sliderHeight: 0,
            sliderCHeight: 0
        },
        {
            width: 37,
            height: 57,
            zoomHeight: 0,
            zoomWidth: 0,
            sliderHeight: 0,
            sliderCHeight: 0
        },
        {
            width: 21,
            height: 43,
            zoomHeight: 43,
            zoomWidth: 18,
            sliderHeight: 0,
            sliderCHeight: 0
        }];
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new V(10, 10);
        this.setAnchor(e.anchor);
        this.setType(e.type);
        this._maxTotalZoomLv = 19;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._totalZoomLv = -1;
        this._sliderInterval = 6;

        this._minBarY = 1;
        this._maxBarY = -1;
        this._curBarY = -1;
        this._zoomDom = null;
        this._zoomBtnDom = null;
        this._sliderDom = null;
        this._sliderBaseDom = null;
        this._cZIndex = "1100";
        this._asyncLoadCode()
    }
    G.inherits(N, "NavigationControl");
    l.extend(G.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setType: function(e) {
            if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ZOOM) {
                this._opts.type = e
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function() {
            return this._opts.type
        },
        _asyncLoadCode: function() {
            var e = this;
            ao.load("control",
            function() {
                e._asyncDraw()
            })
        }
    });
    function ac(e) {
        N.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new V(10, 10);
        this.setAnchor(e.anchor);
        this._is3DControlShow = true;
        this._opts = l.extend(l.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), e);
        this._asyncLoadCode()
    }
    ac.inherits(N, "MapTypeControl");
    l.extend(ac.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        select: function(e) {},
        hide3DControl: function() {
            this._is3DControlShow = false
        },
        show3DControl: function() {
            this._is3DControlShow = true
        },
        streetMapMgr: function(e) {
            this._map._isHybirdShow = e
        },
        getHeight: function() {
            return this._map.mapType === "B_SATELLITE_MAP" ? 86 : 60
        },
        _asyncLoadCode: function() {
            var e = this;
            ao.load("control",
            function() {
                e._asyncDraw()
            })
        }
    });
    function g(i) {
        D.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = l.extend(this._opts, i);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this._enable = true;
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var e = this;
        ao.load("menu",
        function() {
            e._draw()
        })
    }
    g.inherits(D, "ContextMenu");
    l.extend(g.prototype, {
        initialize: function(e) {
            this._map = e
        },
        remove: function() {
            this._map = null
        },
        addItem: function(aS) {
            if (!aS || aS._type != "menuitem" || aS._text == "" || aS._width <= 0) {
                return
            }
            for (var aR = 0,
            e = this._items.length; aR < e; aR++) {
                if (this._items[aR] === aS) {
                    return
                }
            }
            this._items.push(aS);
            this._rItems.push(aS)
        },
        removeItem: function(aS) {
            if (!aS || aS._type != "menuitem") {
                return
            }
            for (var aR = 0,
            e = this._items.length; aR < e; aR++) {
                if (this._items[aR] === aS) {
                    this._items[aR].remove();
                    this._items.splice(aR, 1);
                    e--
                }
            }
            for (var aR = 0,
            e = this._rItems.length; aR < e; aR++) {
                if (this._rItems[aR] === aS) {
                    this._rItems[aR].remove();
                    this._rItems.splice(aR, 1);
                    e--
                }
            }
        },
        addSeparator: function() {
            this._items.push({
                _type: "divider",
                _dIndex: this._dividers.length
            });
            this._dividers.push({
                dom: null
            })
        },
        removeSeparator: function(aR) {
            if (!this._dividers[aR]) {
                return
            }
            for (var aS = 0,
            e = this._items.length; aS < e; aS++) {
                if (this._items[aS] && this._items[aS]._type == "divider" && this._items[aS]._dIndex == aR) {
                    this._items.splice(aS, 1);
                    e--
                }
                if (this._items[aS] && this._items[aS]._type == "divider" && this._items[aS]._dIndex > aR) {
                    this._items[aS]._dIndex--
                }
            }
            this._dividers.splice(aR, 1)
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._isOpen == true) {
                return
            }
            this._isOpen = true
        },
        hide: function() {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false
        },
        setCursor: function(e) {
            if (!e) {
                return
            }
            this._opts.cursor = e
        },
        getItem: function(e) {
            return this._rItems[e]
        },
        enable: function() {
            this._enable = true
        },
        disable: function() {
            this._enable = false
        }
    });
    function J(aR, aS, i) {
        if (!aR || !aS || typeof aS != "function") {
            return
        }
        D.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        i = i || {};
        this._opts.width = (i.width * 1) ? i.width: 100;
        this._opts.id = i.id ? i.id: "";
        this._text = aR + "";
        this._callback = aS;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var e = this;
        ao.load("menu",
        function() {
            e._draw()
        })
    }
    J.inherits(D, "MenuItem");
    l.extend(J.prototype, {
        initialize: function(e, i) {
            this._map = e;
            this._contextmenu = i
        },
        remove: function() {
            this._contextmenu = null;
            this._map = null
        },
        setText: function(e) {
            if (!e) {
                return
            }
            this._text = e + ""
        },
        getDom: function() {
            return this._container
        },
        enable: function() {
            this._enabled = true
        },
        disable: function() {
            this._enabled = false
        }
    });
    function x(e, aS, aR, i) {
        this.minX = e;
        this.minY = aS;
        this.maxX = aR;
        this.maxY = i
    }
    l.extend(x.prototype, {
        isEmpty: function() {
            var e = "number";
            return (typeof(this.minX) != e || typeof(this.minY) != e || typeof(this.maxX) != e || typeof(this.maxY) != e)
        },
        equals: function(e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY)
        },
        getMaxX: function() {
            return this.maxX
        },
        getMaxY: function() {
            return this.maxY
        },
        getMinX: function() {
            return this.minX
        },
        getMinY: function() {
            return this.minY
        },
        containsBounds: function(e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (e.minX > this.minX && e.maxX < this.maxX && e.minY > this.minY && e.maxY < this.maxY)
        },
        getCenterPoint: function() {
            return new f((this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2)
        },
        getCenter: function() {
            return this.getCenterPoint()
        },
        intersects: function(aR) {
            if (!aR || aR.toString() != "Bounds") {
                return
            }
            if (Math.max(aR.minX, aR.maxX) < Math.min(this.minX, this.maxX) || Math.min(aR.minX, aR.maxX) > Math.max(this.minX, this.maxX) || Math.max(aR.minY, aR.maxY) < Math.min(this.minY, this.maxY) || Math.min(aR.minY, aR.maxY) > Math.max(this.minY, this.maxY)) {
                return null
            }
            var aT = Math.max(this.minX, aR.minX);
            var i = Math.min(this.maxX, aR.maxX);
            var aS = Math.max(this.minY, aR.minY);
            var e = Math.min(this.maxY, aR.maxY);
            return new x(aT, aS, i, e)
        },
        containsPoint: function(e) {
            if (!e || e.toString() != "Point") {
                return
            }
            return (e.lng >= this.minX && e.lng <= this.maxX && e.lat >= this.minY && e.lat <= this.maxY)
        },
        extend: function(e) {
            if (!e || e.toString() != "Point") {
                return
            }
            var i = e.lng,
            aR = e.lat;
            if (!this.minX || this.minX > i) {
                this.minX = i
            }
            if (!this.maxX || this.maxX < i) {
                this.maxX = i
            }
            if (!this.minY || this.minY > aR) {
                this.minY = aR
            }
            if (!this.maxY || this.maxY < aR) {
                this.maxY = aR
            }
        },
        getIntersectLine: function(e) {
            if (!e || e.toString() != "Line") {
                return
            }
            var i = e.sPoint;
            var aS = e.ePoint;
            var aR = [];
            if (i.lat == aS.lat) {
                if (i.lng == aS.lng) {
                    return null
                }
                if (i.lat > this.minY && i.lat < this.maxY) {}
                var e = new Line(aR.lng, aR.lat);
                return e
            }
        },
        getMin: function() {
            return new f(this.minX, this.minY)
        },
        getMax: function() {
            return new f(this.maxX, this.maxY)
        },
        toString: function() {
            return "Bounds"
        }
    });
    function f(e, i) {
        if (isNaN(e)) {
            e = Y(e);
            e = isNaN(e) ? 0 : e
        }
        if (typeof e == "string") {
            e = parseFloat(e)
        }
        if (isNaN(i)) {
            i = Y(i);
            i = isNaN(i) ? 0 : i
        }
        if (typeof i == "string") {
            i = parseFloat(i)
        }
        this.lng = e;
        this.lat = i
    }
    var t = f.prototype;
    t.equals = function(e) {
        if (!e || e.toString() != "Point") {
            return
        }
        return (this.lat == e.lat && this.lng == e.lng)
    };
    t.toString = function() {
        return "Point"
    };
    function w(e) {
        if (Object.prototype.toString.call(e) != "[object Array]") {
            return
        }
        this.points = e
    }
    w.inherits(D, "Area");
    w.prototype = {
        containsPoint: function(e) {
            var aR = 0,
            aT = 0;
            var aU = this.points;
            for (var aS = 0; aS < aU.length; aS++) {
                aR = (aS == aU.length - 1) ? 0 : aR + 1;
                if ((aU[aS].lat != aU[aR].lat) && (((e.lat >= aU[aS].lat) && (e.lat < aU[aR].lat)) || ((e.lat >= aU[aR].lat) && (e.lat < aU[aS].lat))) && (e.lng < (aU[aR].lng - aU[aS].lng) * (e.lat - aU[aS].lat) / (aU[aR].lat - aU[aS].lat) + aU[aS].lng)) {
                    aT++
                }
            }
            return (aT % 2 > 0) ? true: false
        },
        getQuad: function(e) {
            return (e.lng >= 0) ? ((e.lat >= 0) ? 0 : 3) : ((e.lat >= 0) ? 1 : 2)
        }
    };
    var aH = {
        undo: 1,
        redo: 2,
        zoom: 4,
        drag: 8,
        move: 16,
        mousewheel: 32,
        toolbarOperation: 64,
        stdMapCtrlDrag: 128,
        dblclick: 256
    };
    var an = {
        _map: null,
        _html: "<div class='BMap_opMask' unselectable='on'></div>",
        _maskElement: null,
        _cursor: "default",
        inUse: false,
        show: function(e) {
            if (!this._map) {
                this._map = e
            }
            this.inUse = true;
            if (!this._maskElement) {
                this._createMask(e)
            }
            this._maskElement.style.display = "block"
        },
        _createMask: function(i) {
            if (!this._map) {
                this._map = i
            }
            if (!this._map) {
                return
            }
            var e = this._maskElement = X(this._map.container, this._html);
            l.on(e, "mouseup",
            function(aR) {
                if (aR.button == 2) {
                    az(aR)
                }
            });
            l.on(e, "contextmenu", az);
            e.style.display = "none"
        },
        getDrawPoint: function(aS, aV, aT) {
            aS = window.event || aS;
            var i = aS.layerX || aS.offsetX || 0;
            var aU = aS.layerY || aS.offsetY || 0;
            var aR = aS.target || aS.srcElement;
            if (aR != an.getDom(this._map) && aV == true) {
                while (aR && aR != this._map.container) {
                    if (! (aR.clientWidth == 0 && aR.clientHeight == 0 && aR.offsetParent && aR.offsetParent.nodeName.toLowerCase() == "td")) {
                        i += aR.offsetLeft;
                        aU += aR.offsetTop
                    }
                    aR = aR.offsetParent
                }
            }
            if (aR != an.getDom(this._map) && aR != this._map.container) {
                return
            }
            if (typeof i === "undefined" || typeof aU === "undefined") {
                return
            }
            if (isNaN(i) || isNaN(aU)) {
                return
            }
            if (aT) {
                i = i + aT.x;
                aU = aU + aT.y
            }
            return this._map.pixelToPoint(new aG(i, aU))
        },
        hide: function() {
            if (!this._map) {
                return
            }
            this.inUse = false;
            if (this._maskElement) {
                this._maskElement.style.display = "none"
            }
        },
        getDom: function(e) {
            if (!this._maskElement) {
                this._createMask(e)
            }
            return this._maskElement
        },
        setCursor: function(e) {
            this._cursor = e || "default";
            if (this._maskElement) {
                this._maskElement.style.cursor = this._cursor
            }
        }
    };
    function M() {
        this._type = "overlay"
    }
    M.inherits(l.BaseClass, "Overlay");
    M.getZIndex = function(i, e) {
        i = i * 1;
        if (!i) {
            return 0
        }
        if (e && e == BMAP_COORD_MERCATOR) {
            i = T.convertMC2LL(new aP.Point(0, i)).lat
        }
        return (i * -100000) << 1
    };
    l.extend(M.prototype, {
        _i: function(e) {
            if (!this.domElement && at(this.initialize)) {
                this.domElement = this.initialize(e);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function(e) {
            throw "initialize方法未实现"
        },
        draw: function() {
            throw "draw方法未实现"
        },
        remove: function() {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null;
            this.dispatchEvent(new au("onremove"))
        },
        hide: function() {
            l.hide(this.domElement)
        },
        show: function() {
            l.show(this.domElement)
        },
        dispose: function() {
            l.BaseClass.prototype.decontrol.call(this)
        }
    });
    aP.register(function(i) {
        i.temp.overlayDiv = i.overlayDiv = e(i.platform, 200);
        i._panes.floatPane = e(i.temp.overlayDiv, 800);
        i._panes.markerMouseTarget = e(i.temp.overlayDiv, 700);
        i._panes.floatShadow = e(i.temp.overlayDiv, 600);
        i._panes.labelPane = e(i.temp.overlayDiv, 500);
        i._panes.markerPane = e(i.temp.overlayDiv, 400);
        i._panes.mapPane = e(i.temp.overlayDiv, 200);
        function e(aR, aU) {
            var aT = q("div"),
            aS = aT.style;
            aS.position = "absolute";
            aS.top = aS.left = aS.width = aS.height = "0";
            aS.zIndex = aU;
            aR.appendChild(aT);
            return aT
        }
    });
    function aC() {
        l.BaseClass.call(this);
        M.call(this);
        this._visible = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    aC.inherits(M, "OverlayInternal");
    l.extend(aC.prototype, {
        initialize: function(e) {
            this.map = e;
            l.BaseClass.call(this, this.hashCode);
            return null
        },
        draw: function() {},
        remove: function() {
            this.map = null;
            this.decontrol();
            M.prototype.remove.call(this)
        },
        hide: function() {
            if (this._visible == false) {
                return
            }
            this._visible = false
        },
        show: function() {
            if (this._visible == true) {
                return
            }
            this._visible = true
        },
        getDom: function() {
            return this.domElement
        },
        setConfig: function(i) {
            i = i || {};
            for (var e in i) {
                if (typeof(this._config[e]) == typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        getPoint: function(aR, aS) {
            if (!aR) {
                return this.point
            } else {
                var e = aS ? aS.width: 0;
                var aT = aS ? aS.height: 0;
                if (this.map) {
                    var i = this.map.pointToPixel(this.point);
                    if (this._config && this._config.offset) {
                        i.x = i.x + this._config.offset.width + e;
                        i.y = i.y + this._config.offset.height + aT
                    } else {
                        i.x = i.x + e;
                        i.y = i.y + aT
                    }
                    return this.map.pixelToPoint(i)
                }
            }
        },
        setZIndex: function(e) {
            this.zIndex = e
        },
        isVisible: function() {
            if (!this.domElement) {
                return false
            }
            return !! this._visible
        },
        enableMassClear: function() {
            this._config.enableMassClear = true
        },
        disableMassClear: function() {
            this._config.enableMassClear = false
        }
    });
    function aq() {
        this.map = null;
        this._overlays = {};
        this._customOverlays = []
    }
    aP.register(function(i) {
        var e = new aq();
        e.map = i;
        i._overlays = e._overlays;
        i._customOverlays = e._customOverlays;
        i.addEventListener("load",
        function(aR) {
            e.draw(aR)
        });
        i.addEventListener("moveend",
        function(aR) {
            e.draw(aR)
        });
        if (l.Browser.ie && l.Browser.ie < 8 || document.compatMode == "BackCompat") {
            i.addEventListener("zoomend",
            function(aR) {
                setTimeout(function() {
                    e.draw(aR)
                },
                20)
            })
        } else {
            i.addEventListener("zoomend",
            function(aR) {
                e.draw(aR)
            })
        }
        i.addEventListener("maptypechange",
        function(aR) {
            e.draw(aR)
        });
        i.addEventListener("addoverlay",
        function(aV) {
            var aS = aV.target;
            if (aS instanceof aC) {
                if (!e._overlays[aS.hashCode]) {
                    e._overlays[aS.hashCode] = aS
                }
            } else {
                var aU = false;
                for (var aT = 0,
                aR = e._customOverlays.length; aT < aR; aT++) {
                    if (e._customOverlays[aT] === aS) {
                        aU = true;
                        break
                    }
                }
                if (!aU) {
                    e._customOverlays.push(aS)
                }
            }
        });
        i.addEventListener("removeoverlay",
        function(aU) {
            var aS = aU.target;
            if (aS instanceof aC) {
                delete e._overlays[aS.hashCode]
            } else {
                for (var aT = 0,
                aR = e._customOverlays.length; aT < aR; aT++) {
                    if (e._customOverlays[aT] === aS) {
                        e._customOverlays.splice(aT, 1);
                        break
                    }
                }
            }
        });
        i.addEventListener("clearoverlays",
        function(aU) {
            this.closeInfoWindow();
            for (var aT in e._overlays) {
                if (e._overlays[aT]._config.enableMassClear) {
                    e._overlays[aT].remove();
                    delete e._overlays[aT]
                }
            }
            for (var aS = 0,
            aR = e._customOverlays.length; aS < aR; aS++) {
                if (e._customOverlays[aS].enableMassClear != false) {
                    e._customOverlays[aS].remove();
                    e._customOverlays[aS] = null;
                    e._customOverlays.splice(aS, 1);
                    aS--;
                    aR--
                }
            }
        });
        i.addEventListener("infowindowopen",
        function(aS) {
            var aR = this.infoWindow;
            if (aR) {
                l.hide(aR.popDom);
                l.hide(aR.shadowDom)
            }
        });
        i.addEventListener("movestart",
        function() {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        i.addEventListener("moveend",
        function() {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    aq.prototype.draw = function(aS) {
        for (var aR in this._overlays) {
            this._overlays[aR].draw()
        }
        l.each(this._customOverlays,
        function(e) {
            e.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (aP.DrawerSelector) {
            var i = aP.DrawerSelector.getDrawer(this.map);
            i.setPalette()
        }
    };
    function ar(e) {
        aC.call(this);
        this._config = {
            strokeColor: "#3a6bdb",
            strokeWeight: 5,
            strokeOpacity: 0.65,
            strokeStyle: "solid",
            enableMassClear: true,
            getParseTolerance: null,
            getParseCacheIndex: null,
            enableEditing: false,
            mouseOverTolerance: 15,
            use3DCoords: false
        };
        this.setConfig(e);
        if (this._config.strokeWeight <= 0) {
            this._config.strokeWeight = 5
        }
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 0.65
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 0.65
        }
        if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") {
            this._config.strokeStyle = "solid"
        }
        this.domElement = null;
        this._bounds = new aP.Bounds(0, 0, 0, 0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }
    ar.inherits(aC, "Graph");
    ar.getGraphPoints = function(i) {
        var e = [];
        if (!i) {
            return e
        }
        if (typeof i == "string") {
            var aR = i.split(";");
            l.each(aR,
            function(aT) {
                var aS = aT.split(",");
                e.push(new f(aS[0], aS[1]))
            })
        }
        if (i.constructor == Array && i.length > 0) {
            e = i
        }
        return e
    };
    ar.parseTolerance = {
        0 : [0.09, 0.005, 0.0001, 0.00001],
        1 : [9000, 500, 10, 1]
    };
    l.extend(ar.prototype, {
        initialize: function(e) {
            this.map = e;
            return null
        },
        draw: function() {
            return;
            if (!this.domElement) {
                return
            }
            if (this._drawer) {
                this._drawer.setPath(this.domElement, this._getDisplayPixels(this.points))
            }
        },
        setPoints: function(e) {
            this._parseCache.length = 0;
            this.points = ar.getGraphPoints(e).slice(0);
            this._calcBounds()
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds = new x();
            l.each(this.points,
            function(i) {
                e._bounds.extend(i)
            })
        },
        getPoints: function() {
            return this.points
        },
        setPointAt: function(i, e) {
            if (!e || !this.points[i]) {
                return
            }
            this._parseCache.length = 0;
            this.points[i] = new f(e.lng, e.lat);
            this._calcBounds()
        },
        setStrokeColor: function(e) {
            this._config.strokeColor = e
        },
        getStrokeColor: function() {
            return this._config.strokeColor
        },
        setStrokeWeight: function(e) {
            if (e > 0) {
                this._config.strokeWeight = e
            }
        },
        getStrokeWeight: function() {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function(e) {
            if (!e || e > 1 || e < 0) {
                return
            }
            this._config.strokeOpacity = e
        },
        getStrokeOpacity: function() {
            return this._config.strokeOpacity
        },
        setFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e
        },
        getFillOpacity: function() {
            return this._config.fillOpacity
        },
        setStrokeStyle: function(e) {
            if (e != "solid" && e != "dashed") {
                return
            }
            this._config.strokeStyle = e
        },
        getStrokeStyle: function() {
            return this._config.strokeStyle
        },
        setFillColor: function(e) {
            this._config.fillColor = e || ""
        },
        getFillColor: function() {
            return this._config.fillColor
        },
        getBounds: function() {
            return this._bounds
        },
        remove: function() {
            if (this.map) {
                this.map.removeEventListener("onmousemove", this._graphMouseEvent)
            }
            aC.prototype.remove.call(this);
            this._parseCache.length = 0
        },
        enableEditing: function() {
            this._config.enableEditing = true
        },
        disableEditing: function() {
            this._config.enableEditing = false
        }
    });
    if (l.Browser.ie && document.namespaces && !document.namespaces.olv) {
        document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
    }
    function ai(e) {
        aC.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            height: 0,
            offset: new V(0, 0),
            opacity: 1,
            background: "transparent",
            lineStroke: 1,
            lineColor: "#000",
            lineStyle: "solid",
            point: null
        };
        this.setConfig(e);
        this.point = this._config.point
    }
    ai.inherits(aC, "Division");
    l.extend(ai.prototype, {
        _addDom: function() {
            var e = this._config;
            var aR = this.content;
            var i = ['<div class="BMap_Division" style="position:absolute;'];
            i.push("width:" + e.width + "px;display:block;");
            i.push("overflow:hidden;");
            if (e.borderColor != "none") {
                i.push("border:" + e.lineStroke + "px " + e.lineStyle + " " + e.lineColor + ";")
            }
            i.push("opacity:" + e.opacity + "; filter:(opacity=" + e.opacity * 100 + ")");
            i.push("background:" + e.background + ";");
            i.push('z-index:60;">');
            i.push(aR);
            i.push("</div>");
            this.domElement = X(this.map.getPanes().markerMouseTarget, i.join(""))
        },
        initialize: function(e) {
            this.map = e;
            this._addDom();
            if (this.domElement) {
                l.on(this.domElement, "mousedown",
                function(i) {
                    af(i)
                })
            }
            return this.domElement
        },
        draw: function() {
            var e = this.map.pointToOverlayPixel(this._config.point);
            this._config.offset = new V( - Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
            this.domElement.style.left = e.x + this._config.offset.width + "px";
            this.domElement.style.top = e.y + this._config.offset.height + "px"
        },
        getPoint: function() {
            return this._config.point
        },
        _getPixel: function(e) {
            return this.map.pointToPixel(this.getPoint())
        },
        setPoint: function(e) {
            this._config.point = e;
            this.draw()
        },
        setDimension: function(e, i) {
            this._config.width = Math.round(e);
            this._config.height = Math.round(i);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.draw()
            }
        }
    });
    function v(i, aR, aT) {
        if (!i || !aR) {
            return
        }
        this.imageUrl = i;
        this.size = aR;
        var aS = new V(Math.floor(aR.width / 2), Math.floor(aR.height / 2));
        var aU = {
            offset: aS,
            imageOffset: new V(0, 0)
        };
        aT = aT || {};
        for (var e in aT) {
            if (typeof(aU[e]) == typeof(aT[e])) {
                aU[e] = aT[e]
            }
        }
        this.offset = aU.offset;
        this.imageOffset = aU.imageOffset;
        this.infoWindowOffset = aT.infoWindowOffset || this.offset;
        this.printImageUrl = aT.printImageUrl || ""
    }
    var P = v.prototype;
    P.setImageUrl = function(e) {
        if (!e) {
            return
        }
        this.imageUrl = e
    };
    P.setPrintImageUrl = function(e) {
        if (!e) {
            return
        }
        this.printImageUrl = e
    };
    P.setSize = function(e) {
        if (!e) {
            return
        }
        this.size = new V(e.width, e.height)
    };
    P.setOffset = function(e) {
        if (!e) {
            return
        }
        this.offset = new V(e.width, e.height)
    };
    P.setImageOffset = function(e) {
        if (!e) {
            return
        }
        this.imageOffset = new V(e.width, e.height)
    };
    P.setInfoWindowOffset = function(e) {
        if (!e) {
            return
        }
        this.infoWindowOffset = new V(e.width, e.height)
    };
    P.toString = function() {
        return "Icon"
    };
    function aw(aR, i) {
        l.BaseClass.call(this);
        this.content = aR;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new V(0, 0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        this.setConfig(i);
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = aN.imgPath;
        this.overlay = null;
        var e = this;
        ao.load("infowindow",
        function() {
            e._draw()
        })
    }
    aw.inherits(l.BaseClass, "InfoWindow");
    l.extend(aw.prototype, {
        setWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 60) {
                    e = 60
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        setContent: function(e) {
            this.content = e || ""
        },
        setMaxContent: function(e) {
            this._config.maxContent = e || ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        dispose: function() {
            l.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof(this._config[e]) == typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPoint: function() {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        dispose: function() {
            l.BaseClass.prototype.decontrol.call(this)
        },
        toString: function() {
            return "InfoWindow"
        }
    });
    B.prototype.openInfoWindow = function(aS, e) {
        if (!aS || aS.toString() != "InfoWindow" || !e || e.toString() != "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var aR = new v(aN.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            i.marker = new H(e, {
                icon: aR,
                width: 1,
                height: 1,
                offset: new V(0, 0),
                infoWindowOffset: new V(0, 0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.openInfoWindow(aS)
    };
    B.prototype.closeInfoWindow = function() {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeInfoWindow()
        }
    };
    aC.prototype.openInfoWindow = function(e) {
        if (this.map) {
            this.map.closeInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            l.BaseClass.call(e, e.hashCode)
        }
    };
    aC.prototype.closeInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    };
    function p(aR, i) {
        aC.call(this);
        this.content = aR;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new V(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px arial,simsun",
                zIndex: "80",
                MozUserSelect: "none"
            },
            point: null,
            enableMassClear: true
        };
        i = i || {};
        this.setConfig(i);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        this.point = this._config.point;
        var e = this;
        ao.load("marker",
        function() {
            e._draw()
        })
    }
    p.inherits(aC, "Label");
    l.extend(p.prototype, {
        setPoint: function(e) {
            if (e && e.toString() == "Point" && !this.getMarker()) {
                this.point = this._config.point = new f(e.lng, e.lat)
            }
        },
        setContent: function(e) {
            this.content = e
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._config.opacity = e
            }
        },
        setOffset: function(e) {
            if (!e || e.toString() != "Size") {
                return
            }
            this._config.offset = new V(e.width, e.height)
        },
        getOffset: function() {
            return this._config.offset
        },
        setStyle: function(e) {
            e = e || {};
            this._config.styles = l.extend(this._config.styles, e)
        },
        setStyles: function(e) {
            return this.setStyle(e)
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setMarker: function(e) {
            this._marker = e;
            if (e) {
                this.point = this._config.point = e.getPoint()
            } else {
                this.point = this._config.point = null
            }
        },
        getMarker: function() {
            return this._marker || null
        }
    });
    function H(e, aR) {
        aC.call(this);
        aR = aR || {};
        this.point = e;
        this.map = null;
        this.domElement = null;
        this.iconDom = null;
        this.infoWindowDom = null;
        this.siblingElement = null;
        this.iconClassName = "";
        this._config = {
            offset: new V(0, 0),
            opacity: 1,
            icon: null,
            title: "",
            infoWindow: null,
            label: null,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            restrictDraggingArea: false
        };
        this.setConfig(aR);
        if (!aR.icon) {
            this._config.icon = new aP.Icon(aN.imgPath + "marker_red.png", new V(23, 25), {
                offset: new V(10, 25),
                infoWindowOffset: new V(10, 0)
            })
        }
        this._isDragging = false;
        var i = this;
        ao.load("marker",
        function() {
            i._draw()
        })
    }
    H.TOP_ZINDEX = M.getZIndex( - 90) + 1000000;
    H.DRAG_ZINDEX = H.TOP_ZINDEX + 1000000;
    H.inherits(aC, "Marker");
    l.extend(H.prototype, {
        setIcon: function(e) {
            if (e && e.toString() == "Icon") {
                this._config.icon = e
            }
        },
        setIconClassName: function(e) {
            if (this.iconDom) {
                this.iconDom.className = e
            }
        },
        getIcon: function() {
            return this._config.icon
        },
        setLabel: function(e) {
            if (e && e.toString() == "Label") {
                this._config.label = e
            }
        },
        getLabel: function() {
            return this._config.label
        },
        enableDragging: function(e) {
            this._config.enableDragging = true
        },
        disableDragging: function() {
            this._config.enableDragging = false
        },
        setPoint: function(e) {
            if (e && e.toString() == "Point") {
                this.point = this._config.point = new f(e.lng, e.lat)
            }
        },
        setTop: function(i, e) {
            this._config.isTop = !!i;
            if (i) {
                this._addi = e || 0
            }
        },
        setTitle: function(e) {
            this._config.title = e
        },
        getTitle: function() {
            return this._config.title || ""
        },
        setOffset: function(e) {
            if (e && e.toString() == "Size") {
                this._config.offset = e
            }
        },
        getOffset: function() {
            return this._config.offset
        }
    });
    function ah(e, aR) {
        ar.call(this, aR);
        this.setPoints(e);
        var i = this;
        ao.load("poly",
        function() {
            i._draw()
        })
    }
    ah.inherits(ar, "Polyline");
    function aK(e, aR) {
        ar.call(this, aR);
        this.setPoints(e);
        var i = this;
        ao.load("poly",
        function() {
            i._draw()
        })
    }
    aK.inherits(ah, "PolylineMultipart");
    l.extend(aK.prototype, {
        setPoints: function(i) {
            this._parseCache.length = 0;
            var e = [];
            if (!i || i.constructor != Array) {
                return
            }
            l.each(i,
            function(aR) {
                e.push(ar.getGraphPoints(aR))
            });
            this.points = e
        }
    });
    function c(e, aR) {
        ar.call(this, aR);
        aR = aR || {};
        this._config.fillOpacity = aR.fillOpacity ? aR.fillOpacity: 0.65;
        if (aR.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = aR.fillColor ? aR.fillColor: "#fff"
        }
        this.setPoints(e);
        var i = this;
        ao.load("poly",
        function() {
            i._draw()
        })
    }
    c.inherits(ar, "Polygon");
    l.extend(c.prototype, {
        setPoints: function(i, e) {
            this._userPoints = ar.getGraphPoints(i).slice(0);
            var aR = ar.getGraphPoints(i).slice(0);
            if (aR.length > 1 && !aR[0].equals(aR[aR.length - 1])) {
                aR.push(new f(aR[0].lng, aR[0].lat))
            }
            ar.prototype.setPoints.call(this, aR, e)
        },
        setPointAt: function(i, e) {
            if (!this._userPoints[i]) {
                return
            }
            this._userPoints[i] = new f(e.lng, e.lat);
            this.points[i] = new f(e.lng, e.lat);
            if (i == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new f(e.lng, e.lat)
            }
            this._calcBounds()
        },
        getPoints: function() {
            var e = this._userPoints;
            if (e.length == 0) {
                e = this.points
            }
            return e
        }
    });
    function W(i, e, aR) {
        this.point = i;
        this.radius = Math.abs(e);
        c.call(this, [], aR)
    }
    W.parseTolerance = {
        0 : [0.01, 0.0001, 0.00001, 0.000004],
        1 : [1000, 10, 1, 0.4]
    };
    W.inherits(c, "Circle");
    l.extend(W.prototype, {
        initialize: function(e) {
            this.map = e;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getPoint: function() {
            return this.point
        },
        getCenter: function() {
            return this.point
        },
        setPoint: function(e, i) {
            if (!e) {
                return
            }
            this.point = e
        },
        setCenter: function(e, i) {
            this.setPoint(e, i)
        },
        getRadius: function() {
            return this.radius
        },
        setRadius: function(e, i) {
            this.radius = Math.abs(e)
        },
        _getPerimeterPoints: function(e, aY) {
            if (!e || !aY || !this.map) {
                return []
            }
            var aR = this.map;
            var aV = e.lng,
            aT = e.lat;
            if (aR.config.coordType == BMAP_COORD_MERCATOR) {
                var a4 = ap.convertMC2LL(e);
                aV = a4.lng;
                aT = a4.lat
            }
            var a6 = [];
            var a0 = aY / 6378800,
            aX = (Math.PI / 180) * aT,
            a3 = (Math.PI / 180) * aV;
            for (var aW = 0; aW < 360; aW += 9) {
                var aU = (Math.PI / 180) * aW,
                a1 = Math.asin(Math.sin(aX) * Math.cos(a0) + Math.cos(aX) * Math.sin(a0) * Math.cos(aU)),
                aZ = Math.atan2(Math.sin(aU) * Math.sin(a0) * Math.cos(aX), Math.cos(a0) - Math.sin(aX) * Math.sin(a1)),
                a2 = ((a3 - aZ + Math.PI) % (2 * Math.PI)) - Math.PI,
                a5 = new f(a2 * (180 / Math.PI), a1 * (180 / Math.PI));
                if (aR.config.coordType == BMAP_COORD_LNGLAT) {
                    a6.push(a5)
                } else {
                    a6.push(T.convertLL2MC(a5))
                }
            }
            var aS = a6[0];
            a6.push(new f(aS.lng, aS.lat));
            return a6
        }
    });
    function F(e, aR) {
        c.call(this, e, aR);
        var i = this;
        ao.load("poly",
        function() {
            i._draw()
        })
    }
    F.inherits(c, "Rectangle");
    l.extend(F.prototype, {
        setPoints: function(aS) {
            if (!aS) {
                return
            }
            var aR = aS[0],
            e = aS[1];
            if (!aR || !e || aR.toString() != "Point" || e.toString() != "Point") {
                return
            }
            var aW = aR;
            var aU = e;
            var aV = new f(aW.lng, aU.lat);
            var aT = new f(aU.lng, aW.lat);
            var i = aR;
            this.points = [aW, aV, aU, aT, i];
            this._calcBounds()
        },
        getPoints: function() {
            return [this.points[0], this.points[2]]
        }
    });
    function aG(e, i) {
        e = isNaN(e) ? 0 : e;
        i = isNaN(i) ? 0 : i;
        this.x = e;
        this.y = i
    }
    aG.prototype.equals = function(e) {
        if (!e) {
            return false
        }
        return e.x == this.x && e.y == this.y
    };
    aG.prototype.toString = function() {
        return "Pixel"
    };
    function T() {}
    var ap = T;
    l.extend(T, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [75, 60, 45, 30, 15, 0],
        MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [ - 7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [ - 3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [ - 1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
        LL2MC: [[ - 0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [ - 0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [ - 0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        getDistanceByMC: function(aU, aS) {
            if (typeof(aU) == "undefined" || typeof(aS) == "undefined") {
                return 0
            }
            var i, aT, e, aR;
            aU = this.convertMC2LL(aU);
            if (typeof(aU) == "undefined") {
                return 0
            }
            i = this.toRadians(aU.lng);
            aT = this.toRadians(aU.lat);
            aS = this.convertMC2LL(aS);
            if (typeof(aS) == "undefined") {
                return 0
            }
            e = this.toRadians(aS.lng);
            aR = this.toRadians(aS.lat);
            return this.getDistance(i, e, aT, aR)
        },
        getDistanceByLL: function(aU, aS) {
            if (typeof(aU) == "undefined" || typeof(aS) == "undefined") {
                return 0
            }
            aU.lng = this.getLoop(aU.lng, -180, 180);
            aU.lat = this.getRange(aU.lat, -74, 74);
            aS.lng = this.getLoop(aS.lng, -180, 180);
            aS.lat = this.getRange(aS.lat, -74, 74);
            var i, e, aT, aR;
            i = this.toRadians(aU.lng);
            aT = this.toRadians(aU.lat);
            e = this.toRadians(aS.lng);
            aR = this.toRadians(aS.lat);
            return this.getDistance(i, e, aT, aR)
        },
        convertMC2LL: function(aR) {
            var aS, aU;
            aS = new f(Math.abs(aR.lng), Math.abs(aR.lat));
            for (var aT = 0; aT < this.MCBAND.length; aT++) {
                if (aS.lat >= this.MCBAND[aT]) {
                    aU = this.MC2LL[aT];
                    break
                }
            }
            var e = this.convertor(aR, aU);
            var aR = new f(e.lng.toFixed(6), e.lat.toFixed(6));
            return aR
        },
        convertLL2MC: function(e) {
            var aR, aT;
            e.lng = this.getLoop(e.lng, -180, 180);
            e.lat = this.getRange(e.lat, -74, 74);
            aR = new f(e.lng, e.lat);
            for (var aS = 0; aS < this.LLBAND.length; aS++) {
                if (aR.lat >= this.LLBAND[aS]) {
                    aT = this.LL2MC[aS];
                    break
                }
            }
            if (!aT) {
                for (var aS = this.LLBAND.length - 1; aS >= 0; aS--) {
                    if (aR.lat <= -this.LLBAND[aS]) {
                        aT = this.LL2MC[aS];
                        break
                    }
                }
            }
            var aU = this.convertor(e, aT);
            var e = new f(aU.lng.toFixed(2), aU.lat.toFixed(2));
            return e
        },
        convertor: function(aR, aS) {
            if (!aR || !aS) {
                return
            }
            var e = aS[0] + aS[1] * Math.abs(aR.lng);
            var i = Math.abs(aR.lat) / aS[9];
            var aT = aS[2] + aS[3] * i + aS[4] * i * i + aS[5] * i * i * i + aS[6] * i * i * i * i + aS[7] * i * i * i * i * i + aS[8] * i * i * i * i * i * i;
            e *= (aR.lng < 0 ? -1 : 1);
            aT *= (aR.lat < 0 ? -1 : 1);
            return new f(e, aT)
        },
        getDistance: function(i, e, aS, aR) {
            return this.EARTHRADIUS * Math.acos((Math.sin(aS) * Math.sin(aR) + Math.cos(aS) * Math.cos(aR) * Math.cos(e - i)))
        },
        toRadians: function(e) {
            return Math.PI * e / 180
        },
        toDegrees: function(e) {
            return (180 * e) / Math.PI
        },
        getRange: function(aR, i, e) {
            if (i != null) {
                aR = Math.max(aR, i)
            }
            if (e != null) {
                aR = Math.min(aR, e)
            }
            return aR
        },
        getLoop: function(aR, i, e) {
            while (aR > e) {
                aR -= e - i
            }
            while (aR < i) {
                aR += e - i
            }
            return aR
        },
        convert2DTo3D: function(aR, e) {
            if (!aR) {
                aR = "bj"
            }
            var i = m.getOMap_pts(aR, e);
            return new f(i.x, i.y)
        },
        convert3DTo2D: function(aR, e) {
            if (!aR) {
                aR = "bj"
            }
            var i = m.getMapJw_pts(aR, e);
            return new f(i.lng, i.lat)
        },
        batch3DTo2D: function(aR, e) {
            if (!aR) {
                aR = "bj"
            }
            var i = m.getMapJw_Array(aR, e);
            return i
        },
        batch2DTo3D: function(aR, e) {
            if (!aR) {
                aR = "bj"
            }
            var i = m.getOMap_Array(aR, e);
            return i
        }
    });
    function V(i, e) {
        this.width = parseFloat(i) || 0;
        this.height = parseFloat(e) || 0
    }
    V.prototype.equals = function(e) {
        return !! (e && this.width == e.width && this.height == e.height)
    };
    V.prototype.toString = function() {
        return "Size"
    };
    function av(aX, i, aT, aR, aS) {
        this.mgr = aX;
        this.position = aT;
        this._cbks = [];
        this.name = aX.getTileName(aR, aS);
        this.info = aR;
        this._transparentPng = aS.isTransparentPng();
        var aY = q("img");
        o(aY);
        aY.galleryImg = false;
        var aW = aY.style;
        aW.position = "absolute";
        aW.width = aX.tileSize + "px";
        aW.height = aX.tileSize + "px";
        aW.left = aT[0] + "px";
        aW.top = aT[1] + "px";
        this.img = aY;
        this.src = i;
        if (ad) {
            aW.opacity = 0
        }
        var aV = this;
        this.img.onload = function(a5) {
            if (!aV.mgr) {
                return
            }
            var a2 = aV.mgr;
            var a6 = a2.bufferTiles;
            if (a2.bufferNumber > 0) {
                a6[aV.name] = aV;
                a6.push(aV.name)
            }
            var a8 = a6.length - a2.bufferNumber;
            for (var a3 = 0; a8 > 0 && a3 < a6.length; a3++) {
                var aZ = a6[a3];
                if (!a2.mapTiles[aZ]) {
                    if (a6[aZ]) {
                        a6[aZ].mgr = null;
                        var a4 = a6[aZ].img;
                        if (a4.parentNode) {
                            n(a4);
                            a4.parentNode.removeChild(a4)
                        }
                        a4 = null;
                        a6[aZ].img = null;
                        delete a6[aZ]
                    }
                    a6.splice(a3, 1);
                    a3--;
                    a8--
                }
            }
            aV.loaded = true;
            a2.imgNumber++;
            if (!s(aV.img)) {
                if (aS.tilesDiv) {
                    aS.tilesDiv.appendChild(aV.img);
                    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && aS.isTransparentPng() == true) {
                        var a0 = aV.img.style;
                        var a1 = a0.width;
                        var a9 = a0.height;

                        var a7 = 'position:absolute;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + aV.src + '",sizingMethod=scale);';
                        a0.cssText = a7;
                        a0.width = a1;
                        a0.height = a9;
                        a0.left = aV.position[0] + "px";
                        a0.top = aV.position[1] + "px"
                    }
                }
            }
            var a5 = new au("onimagechange");
            a5.action = "show";
            a5.tile = aV.name;
            a2.map.dispatchEvent(a5);
            if (ad) {
                new aD({
                    fps: 20,
                    duration: 200,
                    render: function(e) {
                        if (aV.img && aV.img.style) {
                            aV.img.style.opacity = e * 1
                        }
                    },
                    finish: function() {
                        if (aV.img && aV.img.style) {
                            delete aV.img.style.opacity
                        }
                    }
                })
            }
            aV._callCbks()
        };
        this.img.onerror = function(a1) {
            aV._callCbks();
            if (!aV.mgr) {
                return
            }
            var aZ = aV.mgr;
            aV.error = true;
            var a0 = aF[aS.mapType];
            if (a0.errorUrl) {
                aV.img.src = a0.errorUrl
            }
            if (!s(aV.img)) {
                if (aS.tilesDiv) {
                    aS.tilesDiv.appendChild(aV.img)
                }
            }
        };
        aY = null;
        var aU = new au("onimagebefore");
        aU.tile = aV.name;
        aX.map.dispatchEvent(aU)
    }
    av.prototype._addLoadCbk = function(e) {
        this._cbks.push(e)
    };
    av.prototype._load = function() {
        if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
            this.img.src = aN.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    };
    av.prototype._callCbks = function() {
        var aR = this;
        for (var e = 0; e < aR._cbks.length; e++) {
            aR._cbks[e]()
        }
        aR._cbks.length = 0
    };
    var ad = (!l.Browser.ie || l.Browser.ie > 8);
    function aB(e) {
        this.tileLayers = [];
        this.cacheDiv = null;
        this.map = e;
        this.bufferNumber = 300;
        this.mapTiles = [];
        this.bufferTiles = [];
        this.slideMaxZoom = 4;
        this.config = aF[this.map.mapType];
        this.errorUrl = this.config.errorUrl;
        this.tileSize = this.config.tileSize;
        this.baseUnits = this.config.baseUnits;
        this.baseZoomLevel = this.config.zoomLevelBase;
        this.tileURLs = this.config.tileUrls;
        this.imgNumber = 0;
        this.numLoading = 0;
        this.temp = {}
    }
    aP.register(function(i) {
        var e = i.tileMgr = new aB(i);
        i.addEventListener("dragstart",
        function(aR) {
            e.dragStart(aR)
        });
        i.addEventListener("dragend",
        function(aR) {
            e.dragEnd(aR)
        });
        i.addEventListener("click",
        function(aR) {
            e.click(aR)
        });
        i.addEventListener("mousewheel",
        function(aR) {
            e.mouseWheel(aR)
        });
        i.addEventListener("dblclick",
        function(aR) {
            e.dblClick(aR)
        });
        i.addEventListener("rightdblclick",
        function(aR) {
            e.dblClick(aR)
        });
        i.addEventListener("minuspress",
        function(aR) {
            e.keypress(aR)
        });
        i.addEventListener("pluspress",
        function(aR) {
            e.keypress(aR)
        });
        i.addEventListener("load",
        function(aR) {
            e.loadTiles()
        });
        i.addEventListener("zoomstartcode",
        function(aR) {
            e._zoom(aR)
        });
        i.addEventListener("moving",
        function(aR) {
            e.mend(aR)
        });
        i.addEventListener("resize",
        function(aR) {
            e.resizeMap(aR)
        });
        i.addEventListener("addtilelayer",
        function(aR) {
            e.addTileLayer(aR)
        });
        i.addEventListener("removetilelayer",
        function(aR) {
            e.removeTileLayer(aR)
        })
    });
    l.extend(aB.prototype, {
        addTileLayer: function(aS) {
            var aR = this;
            var i = aS.target;
            aR.tileLayers.push(i);
            aR.moveGridTiles()
        },
        removeTileLayer: function(aY) {
            var aZ = this;
            var aW = aY.target;
            var aU = aW.mapType;
            var aT = aZ.mapTiles;
            var a0 = aZ.bufferTiles;
            for (var aR in a0) {
                var aS = aR.split("-")[1];
                if (aS == aU) {
                    delete a0[aR]
                }
            }
            for (var aR in aT) {
                var aS = aR.split("-")[1];
                if (aS == aU) {
                    delete aT[aR]
                }
            }
            if (aZ.zoomsDiv && aZ.zoomsDiv.parentNode) {
                aZ.zoomsDiv.parentNode.removeChild(aZ.zoomsDiv);
                aZ.zoomsDiv.innerHTML = ""
            }
            for (var aX = 0,
            aV = aZ.tileLayers.length; aX < aV; aX++) {
                if (aW == aZ.tileLayers[aX]) {
                    aZ.tileLayers.splice(aX, 1);
                    delete aW
                }
            }
            aZ.moveGridTiles()
        },
        getTileLayer: function(aT) {
            var aS = this;
            for (var aR = 0,
            e = aS.tileLayers.length; aR < e; aR++) {
                tilelayer = aS.tileLayers[aR];
                if (tilelayer.mapType == aT) {
                    return tilelayer
                }
            }
            return
        },
        mend: function(i) {
            this.moveGridTiles()
        },
        _zoom: function(aR) {
            var i = this;
            if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
                i.zoomsDiv.style.display = "none"
            }
            setTimeout(function() {
                i.moveGridTiles();
                i.map.dispatchEvent(new au("onzoomend"))
            },
            10)
        },
        resizeMap: function(i) {
            this.loaded = false;
            this.moveGridTiles()
        },
        showTile: function(aV, aU, aX) {
            this.centerPos = aU;
            var aW = aF[aX.mapType];
            var aS = this.getTileName(aV, aX);
            var aT = (aV[0] * aW.tileSize) + aU[0];
            var a4 = 0;
            if (aX.mapType == BMAP_PERSPECTIVE_MAP && this.map.getZoom() == 15) {
                a4 = 0.5
            }
            var aR = (a4 - 1 - aV[1]) * aW.tileSize + aU[1];
            var aY = [aT, aR];
            var a1 = this;
            var a0 = this.mapTiles[aS];
            if (a0) {
                aO(a0.img, aY);
                if (a0.loaded) {
                    this._checkTilesLoaded()
                } else {
                    a0._addLoadCbk(function() {
                        a1._checkTilesLoaded()
                    })
                }
                return
            }
            a0 = this.bufferTiles[aS];
            if (a0) {
                this.imgNumber++;
                aX.tilesDiv.insertBefore(a0.img, aX.tilesDiv.lastChild);
                this.mapTiles[aS] = a0;
                aO(a0.img, aY);
                if (a0.loaded) {
                    this._checkTilesLoaded()
                } else {
                    a0._addLoadCbk(function() {
                        a1._checkTilesLoaded()
                    })
                }
                var aZ = new au("onimagechange");
                aZ.action = "cache";
                aZ.tile = this.getTileName(aV, aX);
                this.map.dispatchEvent(aZ);
                return
            } else {
                var a3 = aW.baseUnits * Math.pow(2, (aW.zoomLevelBase - aV[2]));
                var a2 = new f(aV[0] * a3, aV[1] * a3);
                var i = aX.getTilesUrl(a2, aV[2]);
                a0 = new av(this, i, aY, aV, aX);
                a0._addLoadCbk(function() {
                    a1._checkTilesLoaded()
                });
                a0._load();
                this.mapTiles[aS] = a0
            }
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            var e = this;
            if (this.numLoading == 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (e.numLoading == 0) {
                        e.map.dispatchEvent(new au("ontilesloaded"))
                    }
                    e._checkLoadedTimer = null
                },
                80)
            }
        },
        getTileName: function(e, i) {
            var aS = i.mapType;
            var aR = "";
            if (aS == BMAP_PERSPECTIVE_MAP) {
                aR = "TILE-" + aS + "-" + this.map.cityCode + "-" + e[0] + "-" + e[1] + "-" + e[2]
            } else {
                aR = "TILE-" + aS + "-" + e[0] + "-" + e[1] + "-" + e[2]
            }
            return aR
        },
        hideTile: function(aS, aR) {
            var i = aS.img;
            if (s(i)) {
                if (aS.loaded) {
                    this.imgNumber--
                }
                if (i.parentNode) {
                    n(i);
                    i.parentNode.removeChild(i)
                }
            }
            var aT = new au("onimagechange");
            aT.tile = this.getTileName(aS.info, aR);
            aT.action = "hide";
            delete this.mapTiles[aS.name];
            if (!aS.loaded) {
                n(i);
                aS._callCbks();
                i = null;
                aS.img = null;
                aS.mgr = null
            }
            this.map.dispatchEvent(aT)
        },
        loadTiles: function() {
            var i = this;
            if (l.Browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch(aS) {}
            }
            if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                this.zoomsDiv.style.display = "none"
            }
            i.moveGridTiles();
            var aR = i.map;
            aR.loaded = true
        },
        getCell: function(aT, aS) {
            var e = this.baseUnits * Math.pow(2, (this.baseZoomLevel - aS));
            var aR = parseInt(aT.lng / e);
            var i = parseInt(aT.lat / e);
            return [aR, i, e * (aR + 0.5), e * (i + 0.5)]
        },
        moveGridTiles: function() {
            var a6 = this.tileLayers.length;
            for (var a8 = 0; a8 < a6; a8++) {
                var aU = this.tileLayers[a8];
                if (aU.baseLayer || a6 == 1) {
                    this.tilesDiv = aU.tilesDiv
                }
                var bf = aF[aU.mapType];
                var bj = this.map;
                var a7 = bj.zoomLevel;
                var ba = bj.centerPoint;
                this.mapCenterPoint = ba;
                var aZ = bj.getZoomUnits(bj.zoomLevel);
                var a1 = bf.baseUnits * Math.pow(2, (bf.zoomLevelBase - a7));
                var a0 = parseInt(ba.lng / a1);
                if (ba.lng < 0) {
                    a0 -= 1
                }
                var aV = parseInt(ba.lat / a1);
                if (ba.lat < 0) {
                    aV -= 1
                }
                var a5 = bf.tileSize;
                var aT = [a0, aV, (ba.lng - a0 * a1) / a1 * a5, (ba.lat - aV * a1) / a1 * a5];
                var be = aT[0] - Math.ceil((bj.width / 2 - aT[2]) / a5);
                var aS = aT[1] - Math.ceil((bj.height / 2 - aT[3]) / a5);
                var bb = aT[0] + Math.ceil((bj.width / 2 + aT[2]) / a5);
                var a3 = 0;
                if (aU.mapType == BMAP_PERSPECTIVE_MAP && bj.getZoom() == 15) {
                    a3 = 1
                }
                var a2 = aT[1] + Math.ceil((bj.height / 2 + aT[3]) / a5) + a3;
                this.areaCenter = new f(ba.lng, ba.lat);
                var aR = this.mapTiles;
                var aY = -this.areaCenter.lng / aZ;
                var aX = this.areaCenter.lat / aZ;
                var bh = [Math.round(aY), Math.round(aX)];
                for (var bi in aR) {
                    var bk = aR[bi];
                    var bg = bk.info;
                    if (!bg) {
                        continue
                    }
                    if (bg[2] == bj.zoomLevel && (be > bg[0] || bb <= bg[0] || aS > bg[1] || a2 <= bg[1])) {
                        this.hideTile(bk, aU)
                    } else {
                        if (bg[2] != bj.zoomLevel) {
                            this.hideTile(bk, aU)
                        }
                    }
                }
                var aW = -bj.offsetX + bj.width / 2;
                var a4 = -bj.offsetY + bj.height / 2;
                aU.tilesDiv.style.left = Math.round(aY + aW) - bh[0] + "px";
                aU.tilesDiv.style.top = Math.round(aX + a4) - bh[1] + "px";
                var e = [];
                this.imgTotalNumber = 0;
                for (var bd = be; bd < bb; bd++) {
                    for (var bc = aS; bc < a2; bc++) {
                        e.push([bd, bc]);
                        this.imgTotalNumber++
                    }
                }
                e.sort((function(i) {
                    return function(bl, bm) {
                        return ((0.4 * Math.abs(bl[0] - i[0]) + 0.6 * Math.abs(bl[1] - i[1])) - (0.4 * Math.abs(bm[0] - i[0]) + 0.6 * Math.abs(bm[1] - i[1])))
                    }
                })([aT[0], aT[1]]));
                this.numLoading += e.length;
                for (var bd = 0,
                a9 = e.length; bd < a9; bd++) {
                    this.showTile([e[bd][0], e[bd][1], bj.zoomLevel], bh, aU)
                }
            }
            return
        },
        dragStart: function(i) {
            this.temp.pps = {
                x: this.map.offsetX,
                y: this.map.offsetY
            }
        },
        dragEnd: function(i) {
            this.temp.ppe = {
                x: this.map.offsetX,
                y: this.map.offsetY
            };
            if (l.Platform.iphone || l.Platform.ipad || l.Platform.android) {
                if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                    this.zoomsDiv.style.display = "none"
                }
            }
        },
        click: function(aR) {
            if (!this.map.config.enableClickPan) {
                return
            }
            var i = this.temp;
            if (this.map.currentOperation == 0 && !i.ppe && !i.pps || (i.ppe && i.pps && (i.ppe.x - i.pps.x == 0 && i.ppe.y - i.pps.y == 0))) {
                this.map.panBy(this.map.width / 2 - aR.offsetX, this.map.height / 2 - aR.offsetY)
            }
            i.pps = null;
            i.ppe = null
        },
        mouseWheel: function(aV) {
            var aU = this.map;
            if (!aU.config.enableWheelZoom) {
                return
            }
            var aW = aU.zoomLevel + (aV.trend == true ? 1 : -1);
            var aS = aU._getProperZoom(aW);
            if (aS.exceeded) {
                return
            }
            aU.dispatchEvent(new au("onzoomstart"));
            aU.lastLevel = aU.zoomLevel;
            aU.zoomLevel = aS.zoom;
            var i = aV.pixel;
            var aR = aU.pixelToPoint(i, aU.lastLevel, true);
            var aT = aU.getZoomUnits(aU.zoomLevel);
            aU.centerPoint = new f(aR.lng + aT * (aU.width / 2 - i.x), aR.lat - aT * (aU.height / 2 - i.y));
            this.zoom(i)
        },
        dblClick: function(aY) {
            var aT = this.map;
            if (!aT.config.enableDblclickZoom) {
                return
            }
            var aZ = aY.pixel;
            var aU = aT.pixelToPoint(aZ, null, true);
            var aV = 1;
            var aR = aZ;
            var aW = new V(0, 0);
            if (aY.type == "onrightdblclick") {
                aV = -1;
                aR = new aG(aT.width / 2, aT.height / 2)
            }
            var aS = aT.zoomLevel + aV;
            var aX = aT._getProperZoom(aS);
            if (!aX.exceeded) {
                aT.dispatchEvent(new au("onzoomstart"));
                aT.lastLevel = aT.zoomLevel;
                aT.zoomLevel = aX.zoom;
                if (aV == 1) {
                    aT.centerPoint = new f(aU.lng, aU.lat);
                    var i = (aT.getZoomUnits(aT.lastLevel)) / aT.getZoomUnits(aX.zoom) * 0.5;
                    aW.width = aZ.x - Math.round(aT.width / 2) * i;
                    aW.height = aZ.y - Math.round(aT.height / 2) * i
                }
                this.zoom(aR, aW)
            } else {
                if (aV == 1) {
                    var a0 = aT.pixelToPoint(aZ, null);
                    aT.panTo(a0)
                }
            }
        },
        keypress: function(aV) {
            var aU = this.map;
            if (!aU.config.enableContinuousZoom) {
                aV.type == "onpluspress" ? aU.zoomIn() : aU.zoomOut();
                return
            }
            if (this._zTimeLine) {
                return
            }
            var aW = aU.zoomLevel + (aV.type == "onpluspress" ? 1 : -1);
            var aS = aU._getProperZoom(aW);
            if (aS.exceeded) {
                return
            }
            aU.dispatchEvent(new au("onzoomstart"));
            var i = new aG(aU.width / 2, aU.height / 2);
            aU.lastLevel = aU.zoomLevel;
            aU.zoomLevel = aS.zoom;
            if (aU.getInfoWindow()) {
                i = aU.pointToPixel(aU.getInfoWindow().getPoint(), aU.lastLevel);
                var aR = aU.pixelToPoint(i, aU.lastLevel, true);
                var aT = aU.getZoomUnits(aU.zoomLevel);
                aU.centerPoint = new f(aR.lng + aT * (aU.width / 2 - i.x), aR.lat - aT * (aU.height / 2 - i.y))
            }
            this.zoom(i)
        }
    });
    function E(e) {
        this.opts = e || {};
        this.copyright = this.opts.copyright || {};
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.offset = [0, 0];
        this._type = "tilelayer"
    }
    E.inherits(D, "TileLayer");
    l.extend(E.prototype, {
        isTransparentPng: function() {
            return this.transparentPng
        },
        getTilesUrl: function(aX, i) {
            var aR = aF[this.mapType];
            if (typeof aR != "object") {
                return null
            }
            var aW = aR.baseUnits * Math.pow(2, (aR.zoomLevelBase - i));
            var aY = parseInt(aX.lng / aW) - this.offset[0];
            var aT = parseInt(aX.lat / aW - this.offset[1]);
            var aV = Math.floor(aY / 200);
            var aU = Math.floor(aT / 200);
            var e = "";
            if (this.opts.tileUrlTemplate) {
                e = this.opts.tileUrlTemplate;
                e = e.replace(/\{X\}/, aY);
                e = e.replace(/\{Y\}/, aT);
                e = e.replace(/\{Z\}/, i)
            } else {
                if (this.mapType == BMAP_NORMAL_MAP) {
                    e = aR.tileUrls[Math.abs(aY + aT) % aR.tileUrls.length] + "u=x=" + aY + ";y=" + aT + ";z=" + i + ";v=013;type=web&fm=44";
                    e = e.replace(/-(\d+)/gi, "M$1")
                }
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    var aS = Math.pow(2, (aR.zoomLevelBase - i)) * aR.baseUnits;
                    aT = Math.round((9998336 - aS * (aT)) / aS) - 1;
                    e = aR.tileUrls[Math.abs(aY + aT) % aR.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - i) + "/" + aY + "," + aT + "." + (aR.imgExtend || "jpg") + "?v=001"
                }
                if (this.mapType == BMAP_SATELLITE_MAP) {
                    e = aR.tileUrls[Math.abs(aY + aT) % aR.tileUrls.length] + "u=x=" + aY + ";y=" + aT + ";z=" + i + ";v=009;type=sate&fm=46";
                    e = e.replace(/-(\d+)/gi, "M$1")
                }
            }
            return e
        },
        initialize: function(aR) {
            if (!aR.temp.layerZIndex) {
                aR.temp.layerZIndex = 0
            }
            this.zIndex = this.zIndex || -1;
            if (this.baseLayer) {
                this.zIndex = -1
            }
            if (!aR.temp.layid) {
                aR.temp.layid = 0
            }
            if (!this.opts.mapType) {
                this.mapType = "BMAP_CUSTOM_LAYER_" + aR.temp.layid;
                aR.temp.layid++
            } else {
                this.mapType = this.opts.mapType
            }
            var e = aF[this.mapType];
            if (!e) {
                aF[this.mapType] = {
                    tileUrls: [],
                    tileSize: 256,
                    baseUnits: 256,
                    zoomLevelMin: 1,
                    zoomLevelMax: 19,
                    zoomLevelBase: 18,
                    errorUrl: aN.imgPath + "/blank.gif",
                    bounds: new x( - 21364736, -10616832, 23855104, 15859712),
                    imgExtend: "png"
                }
            }
            var i = X(aR.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
            i.style.display = "";
            i.style.left = Math.ceil( - aR.offsetX + aR.width / 2) + "px";
            i.style.top = Math.ceil( - aR.offsetY + aR.height / 2) + "px";
            this.tilesDiv = i;
            this.map = aR
        },
        remove: function() {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        getCopyright: function() {
            return this.copyright
        },
        getMapType: function() {
            return this.mapType
        },
        setZIndex: function(e) {
            this.zIndex = e;
            if (this.tilesDiv) {
                this.tilesDiv.style.zIndex = e
            }
        }
    });
    function ae(i, e, aR) {
        this.bounds = i;
        this.content = e;
        this.mapType = aR
    }
    ae.inherits(D, "Copyright");
    function am(e) {
        D.call(this);
        if (!e) {
            return
        }
        this._opts = {};
        this._map = e
    }
    am.inherits(D, "ToolbarItem");
    l.extend(am.prototype, {
        open: function() {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            return true
        },
        close: function() {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false
        },
        _checkStr: function(e) {
            if (!e) {
                return ""
            }
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    });
    function Q(aR, i) {
        am.call(this, aR);
        i = i || {};
        this._opts = l.extend(l.extend(this._opts || {},
        {
            autoClear: false,
            tips: "测距",
            followText: "单击确定起点，双击结束绘制",
            unit: "metric",
            showResult: true,
            lineColor: "blue",
            lineStroke: 2,
            opacity: 1,
            lineStyle: "solid",
            cursor: aN.imgPath + "ruler.cur",
            styleCodes: {
                lnCode: 0,
                spCode: 0,
                slCode: 0,
                tlCode: 0
            },
            enableMassClear: true
        }), i);
        if (this._opts.showResult == false) {
            if (typeof i.tips == "undefined") {
                this._opts.tips = "绘制折线"
            }
            if (!i.cursor) {
                this._opts.cursor = "crosshair"
            }
        }
        if (this._opts.lineStroke <= 0) {
            lineStroke = 2
        }
        if (this._opts.opacity > 1) {
            this._opts.opacity = 1
        } else {
            if (this._opts.opacity < 0) {
                this._opts.opacity = 0
            }
        }
        if (this._opts.lineStyle != "solid" && this._opts.lineStyle != "dashed") {
            this._opts.lineStyle = "solid"
        }
        this._checked = false;
        this._drawing = null;
        this.followTitle = null;
        this._totalDis = {};
        this._points = [];
        this._paths = [];
        this._dots = [];
        this._segDistance = [];
        this._overlays = [];
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5279.856,
                u1: "英尺",
                u2: "英里"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._dLineColor = "#ff6319";
        this._dLineStroke = 3;
        this._dOpacity = 0.8;
        this._dLineStyle = "solid";
        this._dCursor = aN.imgPath + "ruler.cur";
        if (this._opts.showResult) {
            this._opts.followText = "单击确定起点"
        }
        this._followTextM = "单击确定地点，双击结束";
        this._movingTimerId = null;
        if (this._opts.showResult) {
            this.text = "测距"
        } else {
            this.text = "绘线"
        }
        this._isOpen = false;
        var e = this;
        ao.load("tools",
        function() {
            e._draw()
        })
    }
    Q.inherits(am, "PolylineTItem");
    l.extend(Q.prototype, {
        setLineColor: function(e) {
            this._opts.lineColor = e
        },
        setLineStroke: function(e) {
            if (Math.round(e) > 0) {
                this._opts.lineStroke = Math.round(e)
            }
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        },
        setLineStyle: function(e) {
            if (e == "solid" || e == "dashed") {
                this._opts.lineStyle = e
            }
        },
        clear: function() {
            for (var aR = 0,
            e = this._overlays.length; aR < e; aR++) {
                if (this._overlays[aR]) {
                    this._map.removeOverlay(this._overlays[aR])
                }
            }
            this._overlays.length = 0;
            for (var aR = 0,
            e = this._dots.length; aR < e; aR++) {
                if (this._dots[aR] && this._dots[aR].parentNode) {
                    this._dots[aR].parentNode.removeChild(this._dots[aR])
                }
            }
            this._dots.length = 0
        },
        setCursor: function(e) {
            if (this._opts.showResult == true) {} else {
                this._opts.cursor = e
            }
        },
        getCursor: function() {
            if (this._opts.showResult == true) {
                return this._dCursor
            }
            var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
            if (e != null) {
                return e[1]
            } else {
                return this._opts.cursor
            }
        },
        showResult: function(e) {
            this._opts.showResult = !!e
        },
        toString: function() {
            return "DistanceTool"
        }
    });
    function aj(e) {
        return e.style
    }
    function aO(aR, e) {
        var i = aj(aR);
        i.left = j(e[0]);
        i.top = j(e[1])
    }
    function A(aR, i) {
        var e = aj(aR);
        e.opacity = i;
        e.MozOpacity = i;
        e.KhtmlOpacity = i;
        e.filter = "alpha(opacity=" + (i * 100) + ")";
        e = null
    }
    function j(aR) {
        if (typeof aR == "number") {
            return aR + "px"
        } else {
            if (typeof aR == "string") {
                var i = /"\\s","g"/;
                var aS = /"^\\d+(px|%)+$","i"/;
                var e = aR.replace(i, "");
                if (aS.exec(e)) {
                    return e
                }
                var aT = new RegExp("^\\d+$");
                if (aT.exec(e)) {
                    return e + "px"
                }
                return "0px"
            }
        }
    }
    function o(e) {
        if (l.Browser.ie > 0) {
            e.unselectable = "on";
            e.selectstart = function() {
                return false
            }
        } else {
            aj(e).MozUserSelect = "none"
        }
    }
    function aM(aR, e) {
        var i = aj(aR);
        i.width = j(e[0]);
        i.height = j(e[1])
    }
    function s(e) {
        return e && e.parentNode && e.parentNode.nodeType != 11
    }
    function X(i, e) {
        i.insertAdjacentHTML("beforeEnd", e);
        return i.lastChild
    }
    function z(e) {
        var i = {
            left: 0,
            top: 0
        };
        while (e && e.offsetParent) {
            i.left += e.offsetLeft;
            i.top += e.offsetTop;
            e = e.offsetParent
        }
        return i
    }
    function af(i) {
        var i = window.event || i;
        i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
    }
    function C(i) {
        var i = window.event || i;
        i.preventDefault ? i.preventDefault() : i.returnValue = false;
        return false
    }
    function az(i) {
        af(i);
        return C(i)
    }
    function K() {
        var e = document.documentElement,
        i = document.body;
        if (e && (e.scrollTop || e.scrollLeft)) {
            return [e.scrollTop, e.scrollLeft]
        } else {
            if (i) {
                return [i.scrollTop, i.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function n(aT) {
        if (!aT) {
            return
        }
        aT.onload = aT.onerror = null;
        var aR = aT.attributes,
        aS, e, aU;
        if (aR) {
            e = aR.length;
            for (aS = 0; aS < e; aS += 1) {
                aU = aR[aS].name;
                if (typeof aT[aU] === "function") {
                    aT[aU] = null
                }
            }
        }
        aR = aT.children;
        if (aR) {
            e = aR.length;
            for (aS = 0; aS < e; aS += 1) {
                n(aT.children[aS])
            }
        }
    }
    function aL(i, aV, aU) {
        var aT = aV.lng - aU.lng;
        var aS = aV.lat - aU.lat;
        if (aT == 0) {
            return Math.abs(i.lng - aV.lng)
        }
        if (aS == 0) {
            return Math.abs(i.lat - aV.lat)
        }
        var aR = aS / aT;
        var e = aV.lat - aR * aV.lng;
        return Math.abs(aR * i.lng - i.lat + e) / Math.sqrt(aR * aR + 1)
    }
    function u(i, e) {
        if (!i || !e) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
    }
    function ay(e, aR) {
        var i = [];
        aR = aR ||
        function(aT) {
            return aT
        };
        for (var aS in e) {
            i.push(aS + "=" + aR(e[aS]))
        }
        return i.join("&")
    }
    function q(aR, i, aU) {
        var aV = document.createElement(aR);
        if (aU) {
            aV = document.createElementNS(aU, aR)
        }
        i = i || {};
        for (var aS in i) {
            var aT = {
                "for": "htmlFor",
                "class": "cssClass"
            } [aS] || aS;
            if (aS == "style") {
                aV.style.cssText = i[aS];
                continue
            }
            if (aS == "class") {
                l.ac(aV, i[aS]);
                continue
            }
            if (aV.setAttribute) {
                aV.setAttribute(aT, i[aS])
            } else {
                try {
                    aV[aT] = i[aS]
                } catch(aV) {}
            }
        }
        return aV
    }
    function al(e) {
        if (e.currentStyle) {
            return e.currentStyle
        } else {
            if (e.ownerDocument && e.ownerDocument.defaultView) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }
        }
    }
    function at(e) {
        return typeof e == "function"
    }
    var aQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Y(aT) {
        var aR = "";
        var a0, aY, aW = "";
        var aZ, aX, aV, aU = "";
        var aS = 0;
        var e = /[^A-Za-z0-9\+\/\=]/g;
        if (!aT || e.exec(aT)) {
            return aT
        }
        aT = aT.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            aZ = aQ.indexOf(aT.charAt(aS++));
            aX = aQ.indexOf(aT.charAt(aS++));
            aV = aQ.indexOf(aT.charAt(aS++));
            aU = aQ.indexOf(aT.charAt(aS++));
            a0 = (aZ << 2) | (aX >> 4);
            aY = ((aX & 15) << 4) | (aV >> 2);
            aW = ((aV & 3) << 6) | aU;
            aR = aR + String.fromCharCode(a0);
            if (aV != 64) {
                aR = aR + String.fromCharCode(aY)
            }
            if (aU != 64) {
                aR = aR + String.fromCharCode(aW)
            }
            a0 = aY = aW = "";
            aZ = aX = aV = aU = ""
        } while ( aS < aT . length );
        return aR
    } (function(e) {
        if (!e) {
            e = window.BMap = {}
        }
        if (!e.Utils) {
            e.Utils = {}
        }
        var i = e.Utils;
        i.format = (function() {
            function aR(aV, aU, aW) {
                var aT = aW[ + aU];
                return typeof(aT) === "function" ? aT(aU) : aT
            }
            function aS(aV, aU, aW) {
                var aY = aU,
                aZ = [],
                aT = aU.split(":");
                if (aT.length === 2) {
                    aY = aT[0];
                    aZ.push(aT[1])
                }
                var aX = typeof(aW[aY]);
                if (aX === "function") {
                    return aW[aY].apply(undefined, aZ)
                } else {
                    if (aX === "undefined") {
                        return aV
                    } else {
                        return String(aW[aY])
                    }
                }
            }
            return function(aT, aU) {
                var aW = aU.splice ? aR: aS,
                aV = aT.splice ? aT.join("") : aT;
                return aV.replace(/{([a-zA-Z0-9_$:.]+)}/g,
                function(aY, aX) {
                    return aW(aY, aX, aU)
                })
            }
        })();
        i.IE = {
            getAlphaFilterCSS: function(aS, aR) {
                return i.format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{src}',{method});", {
                    src: aS,
                    method: !!aR ? ("sizingMethod=" + aR.toString()) : ""
                })
            },
            fixPNGs: function(aW, aV, aU) {
                if (!aW) {
                    return
                }
                aU = aU || {};
                var aR = aW.length,
                aS = null;
                if (aR === 0) {
                    return
                }
                for (var aT = 0; aT < aR; ++aT) {
                    aS = aW[aT];
                    aS.style.cssText = "FILTER:" + i.IE.getAlphaFilterCSS(aS.src, (aU.sizingMethod || "crop")) + aS.style.cssText;
                    aS.src = aV
                }
            }
        };
        i.isAncestor = function(aU, aS, aR) {
            var aT = false;
            if (aR && aU === aS) {
                return true
            }
            if (aU.constains) {
                return aU.constains(aS)
            } else {
                if (aU.compareDocumentPosition) {
                    aT = !!(aU.compareDocumentPosition(aS) & 16);
                    return aT
                } else {
                    while ((aS = aS.parentNode) && !aT) {
                        aT = aU === aS || aT
                    }
                }
            }
            return true
        }
    })(aP);
    function ab() {
        this._container = null
    }
    aP.register(function(i) {
        if (i.config.isOverviewMap) {
            return
        }
        var e = new ab();
        i.container.insertAdjacentHTML("beforeEnd", e.render(i.config.defaultCursor));
        e._container = i.container.lastChild;
        i.temp.zoomer = e
    });
    ab.prototype.render = function(i) {
        var e = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + i + '">'];
        e.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
        e.push("</div>");
        return e.join("")
    };
    ab.prototype.action = function(aX, aY) {
        if (ab._timeline) {
            return
        }
        var aW = this._container;
        if (!aW) {
            return
        }
        var a5 = aY;
        var aR = 60;
        var a4 = 120;
        var aZ = 4 / 3,
        aT = Math.ceil((a5 ? aR: a4) / 2),
        aU = Math.max(15, aT / aZ),
        aV = aW.style;
        aV.width = aT * 2 + "px";
        aV.height = aU * 2 + "px";
        aV.visibility = "visible";
        var a1 = aW.children;
        if (a5) {
            a1[0].style.backgroundPosition = "0 0";
            a1[1].style.backgroundPosition = "-7px 0";
            a1[2].style.backgroundPosition = "0 -7px";
            a1[3].style.backgroundPosition = "-7px -7px"
        } else {
            a1[0].style.backgroundPosition = "-7px -7px";
            a1[1].style.backgroundPosition = "0 -7px";
            a1[2].style.backgroundPosition = "-7px 0";
            a1[3].style.backgroundPosition = "0 0"
        }
        a1 = null;
        var a3 = aX.x - aT;
        var a2 = aX.y - aU;
        if (isNaN(a3) || isNaN(a2)) {
            return
        }
        aV.left = a3 + "px";
        aV.top = a2 + "px";
        var i = Math.ceil((a5 ? a4: aR) / 2);
        var aS = Math.max(15, i / aZ);
        i = i - aT;
        aS = Math.ceil(aS - aU);
        var a0 = this;
        var e = a0._container.style;
        if (ab._timeline) {
            ab._timeline.end()
        }
        ab._timeline = new aD({
            fps: 20,
            duration: 240,
            transition: k.easeInQuad,
            delay: 100,
            render: function(a7) {
                if (a7 < 0.1) {
                    return
                }
                var a8 = Math.ceil(i * a7);
                var a6 = Math.ceil(aS * a7);
                e.width = (aT + a8) * 2 + "px";
                e.height = (aU + a6) * 2 + "px";
                e.left = a3 - a8 + "px";
                e.top = a2 - a6 + "px"
            },
            finish: function() {
                ab._timeline = false;
                setTimeout(function() {
                    aV.visibility = "hidden"
                },
                300)
            }
        })
    };
    window.BMap = aP;
    aP.Map = B;
    aP.MapType = aF;
    aP.Point = f;
    aP.Pixel = aG;
    aP.Size = V;
    aP.Bounds = x;
    aP.Area = w;
    aP.TileLayer = E;
    aP.Copyright = ae;
    aP.CoordTrans = m;
    aP.Projection = aP.Project = T;
    aP.Overlay = M;
    aP.Label = p;
    aP.Marker = H;
    aP.Icon = v;
    aP.Polyline = ah;
    aP.PolylineMultipart = aK;
    aP.Polygon = c;
    aP.Rectangle = F;
    aP.InfoWindow = aw;
    aP.Circle = W;
    aP.Control = N;
    aP.NavigationControl = G;
    aP.OverviewMapControl = ag;
    aP.CopyrightControl = I;
    aP.ScaleControl = R;
    aP.MapTypeControl = ac;
    aP.DistanceTool = Q;
    aP.ContextMenu = g;
    aP.MenuItem = J;
    aP.OperationMask = an;
    aP.Animation = aD;
    aP.Transitions = k
})();
var modelCode = {
    "1": "City",
    "2": "City",
    "5": "BusStops",
    "6": "Detail",
    "7": "Clarify",
    "11": "PoiSearch",
    "13": "RouteAddr",
    "14": "BusTrans",
    "15": "LinesQuery",
    "18": "BusLines",
    "19": "RouteAddr",
    "20": "NavTrans",
    "21": "SearchInView",
    "22": "BusTrans",
    "23": "RouteAddr",
    "24": "RouteAddr",
    "26": "SpecialPoi",
    "28": "District",
    "29": "RouteAddr",
    "31": "NavWalk",
    "36": "PoiSearch",
    "37": "Clarify",
    "38": "PoiSearch",
    "39": "SearchInView",
    "40": "Clarify",
    "41": "PoiAddr",
    "48": "CBusTrans"
};
var modelCodeInfo = {
    PoiSearch: "20121010",
    BusTrans: "20121010",
    NavTrans: "20121010"
};
var MapConfig = {
    "3d_city": {
        "131": ["北京", 2],
        "289": ["上海", 4],
        "257": ["广州", 1],
        "340": ["深圳", 14],
        "134": ["泉州", 12],
        "104": ["昆明", 8],
        "300": ["福州", 27],
        "119": ["东莞", 16],
        "218": ["武汉", 21],
        "176": ["太原", 24],
        "126": ["蚌埠", 25],
        "223": ["盐城", 32],
        "2217": ["义乌", 7]
    },
    poiSearch: {
        enableRoute: true,
        showCircle: true
    },
    busTrans: {
        enableDragging: true
    },
    navTrans: {
        enableDragging: true
    },
    navWalk: {
        enableDragging: true
    },
    smFlwCon: ""
};
var T, baidu = T = baidu || {
    version: "1.3.9"
};
baidu.guid = "$BAIDU$";
window[baidu.guid] = window[baidu.guid] || {};
baidu.array = baidu.array || {};
baidu.array.filter = function(j, g, d) {
    var c = [],
    b = 0,
    a = j.length,
    h,
    f;
    if ("function" == typeof g) {
        for (f = 0; f < a; f++) {
            h = j[f];
            if (true === g.call(d || j, h, f)) {
                c[b++] = h
            }
        }
    }
    return c
};
baidu.array.remove = function(c, b) {
    var a = c.length;
    while (a--) {
        if (a in c && c[a] === b) {
            c.splice(a, 1)
        }
    }
    return c
};
baidu.array.removeAt = function(b, a) {
    return b.splice(a, 1)[0]
};
baidu.array.some = function(f, d, b) {
    var c = 0,
    a = f.length;
    for (; c < a; c++) {
        if (c in f && d.call(b || f, f[c], c)) {
            return true
        }
    }
    return false
};
baidu.array.unique = function(f, g) {
    var b = f.length,
    a = f.slice(0),
    d,
    c;
    if ("function" != typeof g) {
        g = function(i, h) {
            return i === h
        }
    }
    while (--b > 0) {
        c = a[b];
        d = b;
        while (d--) {
            if (g(c, a[d])) {
                a.splice(b, 1);
                break
            }
        }
    }
    return a
};
baidu.array.indexOf = function(f, b, d) {
    var a = f.length,
    c = b;
    d = d | 0;
    if (d < 0) {
        d = Math.max(0, a + d)
    }
    for (; d < a; d++) {
        if (d in f && f[d] === b) {
            return d
        }
    }
    return - 1
};
baidu.array.contains = function(a, b) {
    return (baidu.array.indexOf(a, b) >= 0)
};
baidu.browser = baidu.browser || {};
baidu.browser.chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["\x241"] : undefined;
baidu.browser.firefox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["\x241"] : undefined;
baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"]) : undefined;
baidu.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
baidu.browser.isStrict = document.compatMode == "CSS1Compat";
baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);
try {
    if (/(\d+\.\d+)/.test(external.max_version)) {
        baidu.browser.maxthon = +RegExp["\x241"]
    }
} catch(e) {}
baidu.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["\x246"] || RegExp["\x242"]) : undefined; (function() {
    var a = navigator.userAgent;
    baidu.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a) && !/chrome/i.test(a) ? +(RegExp["\x241"] || RegExp["\x242"]) : undefined
})();
baidu.cookie = baidu.cookie || {};
baidu.cookie._isValidKey = function(a) {
    return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)
};
baidu.cookie.getRaw = function(b) {
    if (baidu.cookie._isValidKey(b)) {
        var c = new RegExp("(^| )" + b + "=([^;]*)(;|\x24)"),
        a = c.exec(document.cookie);
        if (a) {
            return a[2] || null
        }
    }
    return null
};
baidu.cookie.get = function(a) {
    var b = baidu.cookie.getRaw(a);
    if ("string" == typeof b) {
        b = decodeURIComponent(b);
        return b
    }
    return null
};
baidu.cookie.setRaw = function(c, d, b) {
    if (!baidu.cookie._isValidKey(c)) {
        return
    }
    b = b || {};
    var a = b.expires;
    if ("number" == typeof b.expires) {
        a = new Date();
        a.setTime(a.getTime() + b.expires)
    }
    document.cookie = c + "=" + d + (b.path ? "; path=" + b.path: "") + (a ? "; expires=" + a.toGMTString() : "") + (b.domain ? "; domain=" + b.domain: "") + (b.secure ? "; secure": "")
};
baidu.cookie.remove = function(b, a) {
    a = a || {};
    a.expires = new Date(0);
    baidu.cookie.setRaw(b, "", a)
};
baidu.cookie.set = function(b, c, a) {
    baidu.cookie.setRaw(b, encodeURIComponent(c), a)
};
baidu.dom = baidu.dom || {};
baidu.dom.g = function(a) {
    if ("string" == typeof a || a instanceof String) {
        return document.getElementById(a)
    } else {
        if (a && a.nodeName && (a.nodeType == 1 || a.nodeType == 9)) {
            return a
        }
    }
    return null
};
baidu.g = baidu.G = baidu.dom.g;
baidu.string = baidu.string || {}; (function() {
    var a = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
    baidu.string.trim = function(b) {
        return String(b).replace(a, "")
    }
})();
baidu.trim = baidu.string.trim;
baidu.string.toCamelCase = function(a) {
    if (a.indexOf("-") < 0 && a.indexOf("_") < 0) {
        return a
    }
    return a.replace(/[-_][^-_]/g,
    function(b) {
        return b.charAt(1).toUpperCase()
    })
};
baidu.string.filterFormat = function(c, a) {
    var b = Array.prototype.slice.call(arguments, 1),
    d = Object.prototype.toString;
    if (b.length) {
        b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a: b) : b;
        return c.replace(/#\{(.+?)\}/g,
        function(g, k) {
            var m, j, h, f, l;
            if (!b) {
                return ""
            }
            m = k.split("|");
            j = b[m[0]];
            if ("[object Function]" == d.call(j)) {
                j = j(m[0])
            }
            for (h = 1, f = m.length; h < f; ++h) {
                l = baidu.string.filterFormat[m[h]];
                if ("[object Function]" == d.call(l)) {
                    j = l(j)
                }
            }
            return (("undefined" == typeof j || j === null) ? "": j)
        })
    }
    return c
};
baidu.string.filterFormat.escapeJs = function(f) {
    if (!f || "string" != typeof f) {
        return f
    }
    var d, a, b, c = [];
    for (d = 0, a = f.length; d < a; ++d) {
        b = f.charCodeAt(d);
        if (b > 255) {
            c.push(f.charAt(d))
        } else {
            c.push("\\x" + b.toString(16))
        }
    }
    return c.join("")
};
baidu.string.filterFormat.js = baidu.string.filterFormat.escapeJs;
baidu.string.filterFormat.escapeString = function(a) {
    if (!a || "string" != typeof a) {
        return a
    }
    return a.replace(/["'<>\\\/`]/g,
    function(b) {
        return "&#" + b.charCodeAt(0) + ";"
    })
};
baidu.string.filterFormat.e = baidu.string.filterFormat.escapeString;
baidu.dom.hasClass = function(c, d) {
    c = baidu.dom.g(c);
    var b = baidu.string.trim(d).split(/\s+/),
    a = b.length;
    d = c.className.split(/\s+/).join(" ");
    while (a--) {
        if (! (new RegExp("(^| )" + b[a] + "( |\x24)")).test(d)) {
            return false
        }
    }
    return true
};
baidu.dom.addClass = function(g, h) {
    g = baidu.dom.g(g);
    if (!g) {
        return
    }
    var b = h.split(/\s+/),
    a = g.className,
    f = " " + a + " ",
    d = 0,
    c = b.length;
    for (; d < c; d++) {
        if (f.indexOf(" " + b[d] + " ") < 0) {
            a += (a ? " ": "") + b[d]
        }
    }
    g.className = a;
    return g
};
baidu.addClass = baidu.ac = baidu.dom.addClass;
baidu.lang = baidu.lang || {};
baidu.lang.isString = function(a) {
    return "[object String]" == Object.prototype.toString.call(a)
};
baidu.isString = baidu.lang.isString;
baidu.dom._g = function(a) {
    if (baidu.lang.isString(a)) {
        return document.getElementById(a)
    }
    return a
};
baidu._g = baidu.dom._g;
baidu.dom.contains = function(a, b) {
    var c = baidu.dom._g;
    a = c(a);
    b = c(b);
    return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
};
baidu.dom._NAME_ATTRS = (function() {
    var a = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    if (baidu.browser.ie < 8) {
        a["for"] = "htmlFor";
        a["class"] = "className"
    } else {
        a.htmlFor = "for";
        a.className = "class"
    }
    return a
})();
baidu.dom.getAttr = function(b, a) {
    b = baidu.dom.g(b);
    if ("style" == a) {
        return b.style.cssText
    }
    a = baidu.dom._NAME_ATTRS[a] || a;
    return b.getAttribute(a)
};
baidu.getAttr = baidu.dom.getAttr;
baidu.dom.setAttr = function(b, a, c) {
    b = baidu.dom.g(b);
    if ("style" == a) {
        b.style.cssText = c
    } else {
        a = baidu.dom._NAME_ATTRS[a] || a;
        b.setAttribute(a, c)
    }
    return b
};
baidu.setAttr = baidu.dom.setAttr;
baidu.dom.setAttrs = function(c, a) {
    c = baidu.dom.g(c);
    for (var b in a) {
        baidu.dom.setAttr(c, b, a[b])
    }
    return c
};
baidu.setAttrs = baidu.dom.setAttrs;
baidu.dom.create = function(c, a) {
    var d = document.createElement(c),
    b = a || {};
    return baidu.dom.setAttrs(d, b)
};
baidu.dom.insertAfter = function(d, c) {
    var b, a;
    b = baidu.dom._g;
    d = b(d);
    c = b(c);
    a = c.parentNode;
    if (a) {
        a.insertBefore(d, c.nextSibling)
    }
    return d
};
baidu.dom.insertHTML = function(d, a, c) {
    d = baidu.dom.g(d);
    var b, f;
    if (d.insertAdjacentHTML && !baidu.browser.opera && !baidu.browser.firefox) {
        d.insertAdjacentHTML(a, c)
    } else {
        b = d.ownerDocument.createRange();
        a = a.toUpperCase();
        if (a == "AFTERBEGIN" || a == "BEFOREEND") {
            b.selectNodeContents(d);
            b.collapse(a == "AFTERBEGIN")
        } else {
            f = a == "BEFOREBEGIN";
            b[f ? "setStartBefore": "setEndAfter"](d);
            b.collapse(f)
        }
        b.insertNode(b.createContextualFragment(c))
    }
    return d
};
baidu.insertHTML = baidu.dom.insertHTML;
baidu.dom.remove = function(a) {
    a = baidu.dom._g(a);
    var b = a.parentNode;
    b && b.removeChild(a)
};
baidu.dom.getDocument = function(a) {
    a = baidu.dom.g(a);
    return a.nodeType == 9 ? a: a.ownerDocument || a.document
};
baidu.dom.getComputedStyle = function(b, a) {
    b = baidu.dom._g(b);
    var d = baidu.dom.getDocument(b),
    c;
    if (d.defaultView && d.defaultView.getComputedStyle) {
        c = d.defaultView.getComputedStyle(b, null);
        if (c) {
            return c[a] || c.getPropertyValue(a)
        }
    }
    return ""
};
baidu.dom.getStyle = function(c, b) {
    var f = baidu.dom;
    c = f.g(c);
    b = baidu.string.toCamelCase(b);
    var d = c.style[b] || (c.currentStyle ? c.currentStyle[b] : "") || f.getComputedStyle(c, b);
    if (!d) {
        var a = f._styleFixer[b];
        if (a) {
            d = a.get ? a.get(c) : baidu.dom.getStyle(c, a)
        }
    }
    if (a = f._styleFilter) {
        d = a.filter(b, d, "get")
    }
    return d
};
baidu.getStyle = baidu.dom.getStyle;
baidu.dom.getPosition = function(a) {
    a = baidu.dom.g(a);
    var k = baidu.dom.getDocument(a),
    d = baidu.browser,
    h = baidu.dom.getStyle,
    c = d.isGecko > 0 && k.getBoxObjectFor && h(a, "position") == "absolute" && (a.style.top === "" || a.style.left === ""),
    i = {
        left: 0,
        top: 0
    },
    g = (d.ie && !d.isStrict) ? k.body: k.documentElement,
    l,
    b;
    if (a == g) {
        return i
    }
    if (a.getBoundingClientRect) {
        b = a.getBoundingClientRect();
        i.left = Math.floor(b.left) + Math.max(k.documentElement.scrollLeft, k.body.scrollLeft);
        i.top = Math.floor(b.top) + Math.max(k.documentElement.scrollTop, k.body.scrollTop);
        i.left -= k.documentElement.clientLeft;
        i.top -= k.documentElement.clientTop;
        var j = k.body,
        m = parseInt(h(j, "borderLeftWidth")),
        f = parseInt(h(j, "borderTopWidth"));
        if (d.ie && !d.isStrict) {
            i.left -= isNaN(m) ? 2 : m;
            i.top -= isNaN(f) ? 2 : f
        }
    } else {
        l = a;
        do {
            i.left += l.offsetLeft;
            i.top += l.offsetTop;
            if (d.isWebkit > 0 && h(l, "position") == "fixed") {
                i.left += k.body.scrollLeft;
                i.top += k.body.scrollTop;
                break
            }
            l = l.offsetParent
        } while ( l && l != a );
        if (d.opera > 0 || (d.isWebkit > 0 && h(a, "position") == "absolute")) {
            i.top -= k.body.offsetTop
        }
        l = a.offsetParent;
        while (l && l != k.body) {
            i.left -= l.scrollLeft;
            if (!d.opera || l.tagName != "TR") {
                i.top -= l.scrollTop
            }
            l = l.offsetParent
        }
    }
    return i
};
baidu.event = baidu.event || {};
baidu.event._listeners = baidu.event._listeners || [];
baidu.event.on = function(b, f, h) {
    f = f.replace(/^on/i, "");
    b = baidu.dom._g(b);
    if (!b) {
        return
    }
    var g = function(j) {
        h.call(b, j)
    },
    a = baidu.event._listeners,
    d = baidu.event._eventFilter,
    i,
    c = f;
    f = f.toLowerCase();
    if (d && d[f]) {
        i = d[f](b, f, g);
        c = i.type;
        g = i.listener
    }
    if (b.addEventListener) {
        b.addEventListener(c, g, false)
    } else {
        if (b.attachEvent) {
            b.attachEvent("on" + c, g)
        }
    }
    a[a.length] = [b, f, h, g, c];
    return b
};
baidu.event.getKeyCode = function(a) {
    return a.which || a.keyCode
};
baidu.on = baidu.event.on;
baidu.event.un = function(c, g, b) {
    c = baidu.dom._g(c);
    g = g.replace(/^on/i, "").toLowerCase();
    var j = baidu.event._listeners,
    d = j.length,
    f = !b,
    i, h, a;
    while (d--) {
        i = j[d];
        if (i[1] === g && i[0] === c && (f || i[2] === b)) {
            h = i[4];
            a = i[3];
            if (c.removeEventListener) {
                c.removeEventListener(h, a, false)
            } else {
                if (c.detachEvent) {
                    c.detachEvent("on" + h, a)
                }
            }
            j.splice(d, 1)
        }
    }
    return c
};
baidu.un = baidu.event.un;
baidu.json = baidu.json || {};
baidu.json.parse = function(a) {
    return (new Function("return (" + a + ")"))()
};
baidu.json.stringify = (function() {
    var b = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    function a(g) {
        if (/["\\\x00-\x1f]/.test(g)) {
            g = g.replace(/["\\\x00-\x1f]/g,
            function(h) {
                var i = b[h];
                if (i) {
                    return i
                }
                i = h.charCodeAt();
                return "\\u00" + Math.floor(i / 16).toString(16) + (i % 16).toString(16)
            })
        }
        return '"' + g + '"'
    }
    function d(n) {
        var h = ["["],
        j = n.length,
        g,
        k,
        m;
        for (k = 0; k < j; k++) {
            m = n[k];
            switch (typeof m) {
            case "undefined":
            case "function":
            case "unknown":
                break;
            default:
                if (g) {
                    h.push(",")
                }
                h.push(baidu.json.stringify(m));
                g = 1
            }
        }
        h.push("]");
        return h.join("")
    }
    function c(g) {
        return g < 10 ? "0" + g: g
    }
    function f(g) {
        return '"' + g.getFullYear() + "-" + c(g.getMonth() + 1) + "-" + c(g.getDate()) + "T" + c(g.getHours()) + ":" + c(g.getMinutes()) + ":" + c(g.getSeconds()) + '"'
    }
    return function(l) {
        switch (typeof l) {
        case "undefined":
            return "undefined";
        case "number":
            return isFinite(l) ? String(l) : "null";
        case "string":
            return a(l);
        case "boolean":
            return String(l);
        default:
            if (l === null) {
                return "null"
            } else {
                if (l instanceof Array) {
                    return d(l)
                } else {
                    if (l instanceof Date) {
                        return f(l)
                    } else {
                        var h = ["{"],
                        k = baidu.json.stringify,
                        g,
                        j;
                        for (var i in l) {
                            if (Object.prototype.hasOwnProperty.call(l, i)) {
                                j = l[i];
                                switch (typeof j) {
                                case "undefined":
                                case "unknown":
                                case "function":
                                    break;
                                default:
                                    if (g) {
                                        h.push(",")
                                    }
                                    g = 1;
                                    h.push(k(i) + ":" + k(j))
                                }
                            }
                        }
                        h.push("}");
                        return h.join("")
                    }
                }
            }
        }
    }
})(); (function() {
    var a = window[baidu.guid];
    baidu.lang.guid = function() {
        return "TANGRAM__" + (a._counter++).toString(36)
    };
    a._counter = a._counter || 1
})();
window[baidu.guid]._instances = window[baidu.guid]._instances || {};
baidu.lang.isFunction = function(a) {
    return "[object Function]" == Object.prototype.toString.call(a)
};
baidu.lang.Class = function(a) {
    this.guid = a || baidu.lang.guid();
    window[baidu.guid]._instances[this.guid] = this
};
window[baidu.guid]._instances = window[baidu.guid]._instances || {};
window.Instance = function(a) {
    return window[baidu.guid]._instances[a]
};
baidu.lang.Class.prototype.dispose = function() {
    delete window[baidu.guid]._instances[this.guid];
    for (var a in this) {
        if (!baidu.lang.isFunction(this[a])) {
            delete this[a]
        }
    }
    this.disposed = true
};
baidu.lang.Class.prototype.toString = function() {
    return "[object " + (this._className || "Object") + "]"
};
baidu.lang.Event = function(a, b) {
    this.type = a;
    this.returnValue = true;
    this.target = b || null;
    this.currentTarget = null
};
baidu.lang.Class.prototype.addEventListener = function(d, c, b) {
    if (!baidu.lang.isFunction(c)) {
        return
    } ! this.__listeners && (this.__listeners = {});
    var a = this.__listeners,
    f;
    if (typeof b == "string" && b) {
        if (/[^\w\-]/.test(b)) {
            throw ("nonstandard key:" + b)
        } else {
            c.hashCode = b;
            f = b
        }
    }
    d.indexOf("on") != 0 && (d = "on" + d);
    typeof a[d] != "object" && (a[d] = {});
    f = f || baidu.lang.guid();
    c.hashCode = f;
    a[d][f] = c
};
baidu.lang.Class.prototype.removeEventListener = function(d, c) {
    if (typeof c != "undefined") {
        if ((baidu.lang.isFunction(c) && !(c = c.hashCode)) || (!baidu.lang.isString(c))) {
            return
        }
    } ! this.__listeners && (this.__listeners = {});
    d.indexOf("on") != 0 && (d = "on" + d);
    var b = this.__listeners;
    if (!b[d]) {
        return
    }
    if (typeof c != "undefined") {
        b[d][c] && delete b[d][c]
    } else {
        for (var a in b[d]) {
            delete b[d][a]
        }
    }
};
baidu.lang.Class.prototype.dispatchEvent = function(d, a) {
    if (baidu.lang.isString(d)) {
        d = new baidu.lang.Event(d)
    } ! this.__listeners && (this.__listeners = {});
    a = a || {};
    for (var c in a) {
        d[c] = a[c]
    }
    var c, b = this.__listeners,
    f = d.type;
    d.target = d.target || this;
    d.currentTarget = this;
    f.indexOf("on") != 0 && (f = "on" + f);
    baidu.lang.isFunction(this[f]) && this[f].apply(this, arguments);
    if (typeof b[f] == "object") {
        for (c in b[f]) {
            b[f][c].apply(this, arguments)
        }
    }
    return d.returnValue
};
baidu.lang.Class.prototype.addEventListeners = function(c, d) {
    if (typeof d == "undefined") {
        for (var b in c) {
            this.addEventListener(b, c[b])
        }
    } else {
        c = c.split(",");
        var b = 0,
        a = c.length,
        f;
        for (; b < a; b++) {
            this.addEventListener(baidu.trim(c[b]), d)
        }
    }
};
baidu.lang.decontrol = function(b) {
    var a = window[baidu.guid];
    a._instances && (delete a._instances[b])
};
baidu.lang.inherits = function(h, f, d) {
    var c, g, a = h.prototype,
    b = new Function();
    b.prototype = f.prototype;
    g = h.prototype = new b();
    for (c in a) {
        g[c] = a[c]
    }
    h.prototype.constructor = h;
    h.superClass = f.prototype;
    if ("string" == typeof d) {
        g._className = d
    }
};
baidu.inherits = baidu.lang.inherits;
baidu.lang.instance = function(a) {
    return window[baidu.guid]._instances[a] || null
};
baidu.lang.isArray = function(a) {
    return "[object Array]" == Object.prototype.toString.call(a)
};
baidu.lang.isElement = function(a) {
    return !! (a && a.nodeName && a.nodeType == 1)
};
baidu.lang.toArray = function(b) {
    if (b === null || b === undefined) {
        return []
    }
    if (baidu.lang.isArray(b)) {
        return b
    }
    if (typeof b.length !== "number" || typeof b === "string" || baidu.lang.isFunction(b)) {
        return [b]
    }
    if (b.item) {
        var a = b.length,
        c = new Array(a);
        while (a--) {
            c[a] = b[a]
        }
        return c
    }
    return [].slice.call(b)
};
baidu.object = baidu.object || {};
baidu.extend = baidu.object.extend = function(c, a) {
    for (var b in a) {
        if (a.hasOwnProperty(b)) {
            c[b] = a[b]
        }
    }
    return c
};
baidu.string.encodeHTML = function(a) {
    return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
};
baidu.encodeHTML = baidu.string.encodeHTML;
baidu.string.getByteLength = function(a) {
    return String(a).replace(/[^\x00-\xff]/g, "ci").length
};
baidu.string.subByte = function(c, b, a) {
    c = String(c);
    a = a || "";
    if (b < 0 || baidu.string.getByteLength(c) <= b) {
        return c
    }
    c = c.substr(0, b).replace(/([^\x00-\xff])/g, "\x241 ").substr(0, b).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "\x241");
    return c + a
};
baidu.swf = baidu.swf || {};
baidu.swf.version = (function() {
    var h = navigator;
    if (h.plugins && h.mimeTypes.length) {
        var d = h.plugins["Shockwave Flash"];
        if (d && d.description) {
            return d.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
        }
    } else {
        if (window.ActiveXObject && !window.opera) {
            for (var b = 12; b >= 2; b--) {
                try {
                    var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b);
                    if (g) {
                        var a = g.GetVariable("$version");
                        return a.replace(/WIN/g, "").replace(/,/g, ".")
                    }
                } catch(f) {}
            }
        }
    }
})();
baidu.swf.createHTML = function(v) {
    v = v || {};
    var l = baidu.swf.version,
    h = v.ver || "6.0.0",
    g, d, f, c, j, u, a = {},
    p = baidu.string.encodeHTML;
    for (c in v) {
        a[c] = v[c]
    }
    v = a;
    if (l) {
        l = l.split(".");
        h = h.split(".");
        for (f = 0; f < 3; f++) {
            g = parseInt(l[f], 10);
            d = parseInt(h[f], 10);
            if (d < g) {
                break
            } else {
                if (d > g) {
                    return ""
                }
            }
        }
    } else {
        return ""
    }
    var n = v.vars,
    m = ["classid", "codebase", "id", "width", "height", "align"];
    v.align = v.align || "middle";
    v.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
    v.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
    v.movie = v.url || "";
    delete v.vars;
    delete v.url;
    if ("string" == typeof n) {
        v.flashvars = n
    } else {
        var q = [];
        for (c in n) {
            u = n[c];
            q.push(c + "=" + encodeURIComponent(u))
        }
        v.flashvars = q.join("&")
    }
    var o = ["<object "];
    for (f = 0, j = m.length; f < j; f++) {
        u = m[f];
        o.push(" ", u, '="', p(v[u]), '"')
    }
    o.push(">");
    var b = {
        wmode: 1,
        scale: 1,
        quality: 1,
        play: 1,
        loop: 1,
        menu: 1,
        salign: 1,
        bgcolor: 1,
        base: 1,
        allowscriptaccess: 1,
        allownetworking: 1,
        allowfullscreen: 1,
        seamlesstabbing: 1,
        devicefont: 1,
        swliveconnect: 1,
        flashvars: 1,
        movie: 1
    };
    for (c in v) {
        u = v[c];
        c = c.toLowerCase();
        if (b[c] && (u || u === false || u === 0)) {
            o.push('<param name="' + c + '" value="' + p(u) + '" />')
        }
    }
    v.src = v.movie;
    v.name = v.id;
    delete v.id;
    delete v.movie;
    delete v.classid;
    delete v.codebase;
    v.type = "application/x-shockwave-flash";
    v.pluginspage = "http://www.macromedia.com/go/getflashplayer";
    o.push("<embed");
    var t;
    for (c in v) {
        u = v[c];
        if (u || u === false || u === 0) {
            if ((new RegExp("^salign\x24", "i")).test(c)) {
                t = u;
                continue
            }
            o.push(" ", c, '="', p(u), '"')
        }
    }
    if (t) {
        o.push(' salign="', p(t), '"')
    }
    o.push("></embed></object>");
    return o.join("")
};
baidu.swf.create = function(a, c) {
    a = a || {};
    var b = baidu.swf.createHTML(a) || a.errorMessage || "";
    if (c && "string" == typeof c) {
        c = document.getElementById(c)
    }
    if (c) {
        c.innerHTML = b
    } else {
        document.write(b)
    }
};
baidu.swf.getMovie = function(c) {
    var a = document[c],
    b;
    return baidu.browser.ie == 9 ? a && a.length ? (b = baidu.array.remove(baidu.lang.toArray(a),
    function(d) {
        return d.tagName.toLowerCase() != "embed"
    })).length == 1 ? b[0] : b: a: a || window[c]
};
baidu.sio = baidu.sio || {};
baidu.sio._createScriptTag = function(b, a, c) {
    b.setAttribute("type", "text/javascript");
    c && b.setAttribute("charset", c);
    b.setAttribute("src", a);
    document.getElementsByTagName("head")[0].appendChild(b)
};
baidu.sio._removeScriptTag = function(b) {
    if (b.clearAttributes) {
        b.clearAttributes()
    } else {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                delete b[a]
            }
        }
    }
    if (b && b.parentNode) {
        b.parentNode.removeChild(b)
    }
    b = null
};
baidu.sio.callByBrowser = function(a, h, j) {
    var d = document.createElement("SCRIPT"),
    f = 0,
    k = j || {},
    c = k.charset,
    i = h ||
    function() {},
    g = k.timeOut || 0,
    b;
    d.onload = d.onreadystatechange = function() {
        if (f) {
            return
        }
        var l = d.readyState;
        if ("undefined" == typeof l || l == "loaded" || l == "complete") {
            f = 1;
            try {
                i();
                clearTimeout(b)
            } finally {
                d.onload = d.onreadystatechange = null;
                baidu.sio._removeScriptTag(d)
            }
        }
    };
    if (g) {
        b = setTimeout(function() {
            d.onload = d.onreadystatechange = null;
            baidu.sio._removeScriptTag(d);
            k.onfailure && k.onfailure()
        },
        g)
    }
    baidu.sio._createScriptTag(d, a, c)
};
baidu.sio.callByServer = function(a, n, o) {
    var j = document.createElement("SCRIPT"),
    i = "bd__cbs__",
    l,
    f,
    p = o || {},
    d = p.charset,
    g = p.queryField || "callback",
    m = p.timeOut || 0,
    b,
    c = new RegExp("(\\?|&)" + g + "=([^&]*)"),
    h;
    if (baidu.lang.isFunction(n)) {
        l = i + Math.floor(Math.random() * 2147483648).toString(36);
        window[l] = k(0)
    } else {
        if (baidu.lang.isString(n)) {
            l = n
        } else {
            if (h = c.exec(a)) {
                l = h[2]
            }
        }
    }
    if (m) {
        b = setTimeout(k(1), m)
    }
    a = a.replace(c, "\x241" + g + "=" + l);
    if (a.search(c) < 0) {
        a += (a.indexOf("?") < 0 ? "?": "&") + g + "=" + l
    }
    baidu.sio._createScriptTag(j, a, d);
    function k(q) {
        return function() {
            try {
                if (q) {
                    p.onfailure && p.onfailure()
                } else {
                    n.apply(window, arguments);
                    clearTimeout(b)
                }
                window[l] = null;
                delete window[l]
            } catch(t) {} finally {
                baidu.sio._removeScriptTag(j)
            }
        }
    }
};
baidu.sio.log = function(b) {
    var a = new Image(),
    c = "tangram_sio_log_" + Math.floor(Math.random() * 2147483648).toString(36);
    window[c] = a;
    a.onload = a.onerror = a.onabort = function() {
        a.onload = a.onerror = a.onabort = null;
        window[c] = null;
        a = null
    };
    s;
    a.src = b
};
baidu.object.values = function(d) {
    var a = [],
    c = 0,
    b;
    for (b in d) {
        if (d.hasOwnProperty(b)) {
            a[c++] = d[b]
        }
    }
    return a
}; (function() {
    var d = baidu.browser,
    l = {
        keydown: 1,
        keyup: 1,
        keypress: 1
    },
    a = {
        click: 1,
        dblclick: 1,
        mousedown: 1,
        mousemove: 1,
        mouseup: 1,
        mouseover: 1,
        mouseout: 1
    },
    i = {
        abort: 1,
        blur: 1,
        change: 1,
        error: 1,
        focus: 1,
        load: d.ie ? 0 : 1,
        reset: 1,
        resize: 1,
        scroll: 1,
        select: 1,
        submit: 1,
        unload: d.ie ? 0 : 1
    },
    g = {
        scroll: 1,
        resize: 1,
        reset: 1,
        submit: 1,
        change: 1,
        select: 1,
        error: 1,
        abort: 1
    },
    k = {
        KeyEvents: ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
        MouseEvents: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
        HTMLEvents: ["bubbles", "cancelable"],
        UIEvents: ["bubbles", "cancelable", "view", "detail"],
        Events: ["bubbles", "cancelable"]
    };
    baidu.object.extend(g, l);
    baidu.object.extend(g, a);
    function c(t, p) {
        var o = 0,
        n = t.length,
        q = {};
        for (; o < n; o++) {
            q[t[o]] = p[t[o]];
            delete p[t[o]]
        }
        return q
    }
    function f(p, o, n) {
        n = baidu.object.extend({},
        n);
        var q = baidu.object.values(c(k[o], n)),
        t = document.createEvent(o);
        q.unshift(p);
        if ("KeyEvents" == o) {
            t.initKeyEvent.apply(t, q)
        } else {
            if ("MouseEvents" == o) {
                t.initMouseEvent.apply(t, q)
            } else {
                if ("UIEvents" == o) {
                    t.initUIEvent.apply(t, q)
                } else {
                    t.initEvent.apply(t, q)
                }
            }
        }
        baidu.object.extend(t, n);
        return t
    }
    function b(n) {
        var o;
        if (document.createEventObject) {
            o = document.createEventObject();
            baidu.object.extend(o, n)
        }
        return o
    }
    function h(q, n) {
        n = c(k.KeyEvents, n);
        var t;
        if (document.createEvent) {
            try {
                t = f(q, "KeyEvents", n)
            } catch(p) {
                try {
                    t = f(q, "Events", n)
                } catch(o) {
                    t = f(q, "UIEvents", n)
                }
            }
        } else {
            n.keyCode = n.charCode > 0 ? n.charCode: n.keyCode;
            t = b(n)
        }
        return t
    }
    function m(o, n) {
        n = c(k.MouseEvents, n);
        var p;
        if (document.createEvent) {
            p = f(o, "MouseEvents", n);
            if (n.relatedTarget && !p.relatedTarget) {
                if ("mouseout" == o.toLowerCase()) {
                    p.toElement = n.relatedTarget
                } else {
                    if ("mouseover" == o.toLowerCase()) {
                        p.fromElement = n.relatedTarget
                    }
                }
            }
        } else {
            n.button = n.button == 0 ? 1 : n.button == 1 ? 4 : baidu.lang.isNumber(n.button) ? n.button: 0;
            p = b(n)
        }
        return p
    }
    function j(p, n) {
        n.bubbles = g.hasOwnProperty(p);
        n = c(k.HTMLEvents, n);
        var t;
        if (document.createEvent) {
            try {
                t = f(p, "HTMLEvents", n)
            } catch(q) {
                try {
                    t = f(p, "UIEvents", n)
                } catch(o) {
                    t = f(p, "Events", n)
                }
            }
        } else {
            t = b(n)
        }
        return t
    }
    baidu.event.fire = function(o, p, n) {
        var q;
        p = p.replace(/^on/i, "");
        o = baidu.dom._g(o);
        n = baidu.object.extend({
            bubbles: true,
            cancelable: true,
            view: window,
            detail: 1,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: 0,
            charCode: 0,
            button: 0,
            relatedTarget: null
        },
        n);
        if (l[p]) {
            q = h(p, n)
        } else {
            if (a[p]) {
                q = m(p, n)
            } else {
                if (i[p]) {
                    q = j(p, n)
                } else {
                    throw (new Error(p + " is not support!"))
                }
            }
        }
        if (q) {
            if (o.dispatchEvent) {
                o.dispatchEvent(q)
            } else {
                if (o.fireEvent) {
                    o.fireEvent("on" + p, q)
                }
            }
        }
    }
})();
baidu.string.escapeReg = function(a) {
    return String(a).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])", "g"), "\\\x241")
};
baidu.dom.q = function(j, f, b) {
    var k = [],
    d = baidu.string.trim,
    h,
    g,
    a,
    c;
    if (! (j = d(j))) {
        return k
    }
    if ("undefined" == typeof f) {
        f = document
    } else {
        f = baidu.dom.g(f);
        if (!f) {
            return k
        }
    }
    b && (b = d(b).toUpperCase());
    if (f.getElementsByClassName) {
        a = f.getElementsByClassName(j);
        h = a.length;
        for (g = 0; g < h; g++) {
            c = a[g];
            if (b && c.tagName != b) {
                continue
            }
            k[k.length] = c
        }
    } else {
        j = new RegExp("(^|\\s)" + baidu.string.escapeReg(j) + "(\\s|\x24)");
        a = b ? f.getElementsByTagName(b) : (f.all || f.getElementsByTagName("*"));
        h = a.length;
        for (g = 0; g < h; g++) {
            c = a[g];
            j.test(c.className) && (k[k.length] = c)
        }
    }
    return k
};
baidu.dom._matchNode = function(a, c, d) {
    a = baidu.dom.g(a);
    for (var b = a[d]; b; b = b[c]) {
        if (b.nodeType == 1) {
            return b
        }
    }
    return null
};
baidu.dom.next = function(a) {
    return baidu.dom._matchNode(a, "nextSibling", "nextSibling")
};
var T, baidu = T = baidu || {
    version: "1.5.2.2"
};
baidu.guid = "$BAIDU$";
baidu.$$ = window[baidu.guid] = window[baidu.guid] || {
    global: {}
};
baidu.dom = baidu.dom || {}; (function() {
    var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
    i = "sizcache" + (Math.random() + "").replace(".", ""),
    o = 0,
    t = Object.prototype.toString,
    h = false,
    g = true,
    q = /\\/g,
    w = /\r\n/g,
    y = /\W/; [0, 0].sort(function() {
        g = false;
        return 0
    });
    var d = function(E, z, H, I) {
        H = H || [];
        z = z || document;
        var K = z;
        if (z.nodeType !== 1 && z.nodeType !== 9) {
            return []
        }
        if (!E || typeof E !== "string") {
            return H
        }
        var B, N, Q, A, L, P, O, G, D = true,
        C = d.isXML(z),
        F = [],
        J = E;
        do {
            n.exec("");
            B = n.exec(J);
            if (B) {
                J = B[3];
                F.push(B[1]);
                if (B[2]) {
                    A = B[3];
                    break
                }
            }
        } while ( B );
        if (F.length > 1 && j.exec(E)) {
            if (F.length === 2 && k.relative[F[0]]) {
                N = u(F[0] + F[1], z, I)
            } else {
                N = k.relative[F[0]] ? [z] : d(F.shift(), z);
                while (F.length) {
                    E = F.shift();
                    if (k.relative[E]) {
                        E += F.shift()
                    }
                    N = u(E, N, I)
                }
            }
        } else {
            if (!I && F.length > 1 && z.nodeType === 9 && !C && k.match.ID.test(F[0]) && !k.match.ID.test(F[F.length - 1])) {
                L = d.find(F.shift(), z, C);
                z = L.expr ? d.filter(L.expr, L.set)[0] : L.set[0]
            }
            if (z) {
                L = I ? {
                    expr: F.pop(),
                    set: l(I)
                }: d.find(F.pop(), F.length === 1 && (F[0] === "~" || F[0] === "+") && z.parentNode ? z.parentNode: z, C);
                N = L.expr ? d.filter(L.expr, L.set) : L.set;
                if (F.length > 0) {
                    Q = l(N)
                } else {
                    D = false
                }
                while (F.length) {
                    P = F.pop();
                    O = P;
                    if (!k.relative[P]) {
                        P = ""
                    } else {
                        O = F.pop()
                    }
                    if (O == null) {
                        O = z
                    }
                    k.relative[P](Q, O, C)
                }
            } else {
                Q = F = []
            }
        }
        if (!Q) {
            Q = N
        }
        if (!Q) {
            d.error(P || E)
        }
        if (t.call(Q) === "[object Array]") {
            if (!D) {
                H.push.apply(H, Q)
            } else {
                if (z && z.nodeType === 1) {
                    for (G = 0; Q[G] != null; G++) {
                        if (Q[G] && (Q[G] === true || Q[G].nodeType === 1 && d.contains(z, Q[G]))) {
                            H.push(N[G])
                        }
                    }
                } else {
                    for (G = 0; Q[G] != null; G++) {
                        if (Q[G] && Q[G].nodeType === 1) {
                            H.push(N[G])
                        }
                    }
                }
            }
        } else {
            l(Q, H)
        }
        if (A) {
            d(A, K, H, I);
            d.uniqueSort(H)
        }
        return H
    };
    d.uniqueSort = function(A) {
        if (p) {
            h = g;
            A.sort(p);
            if (h) {
                for (var z = 1; z < A.length; z++) {
                    if (A[z] === A[z - 1]) {
                        A.splice(z--, 1)
                    }
                }
            }
        }
        return A
    };
    d.matches = function(z, A) {
        return d(z, null, null, A)
    };
    d.matchesSelector = function(z, A) {
        return d(A, null, null, [z]).length > 0
    };
    d.find = function(G, z, H) {
        var F, B, D, C, E, A;
        if (!G) {
            return []
        }
        for (B = 0, D = k.order.length; B < D; B++) {
            E = k.order[B];
            if ((C = k.leftMatch[E].exec(G))) {
                A = C[1];
                C.splice(1, 1);
                if (A.substr(A.length - 1) !== "\\") {
                    C[1] = (C[1] || "").replace(q, "");
                    F = k.find[E](C, z, H);
                    if (F != null) {
                        G = G.replace(k.match[E], "");
                        break
                    }
                }
            }
        }
        if (!F) {
            F = typeof z.getElementsByTagName !== "undefined" ? z.getElementsByTagName("*") : []
        }
        return {
            set: F,
            expr: G
        }
    };
    d.filter = function(K, J, O, D) {
        var F, z, I, Q, N, A, C, E, L, B = K,
        P = [],
        H = J,
        G = J && J[0] && d.isXML(J[0]);
        while (K && J.length) {
            for (I in k.filter) {
                if ((F = k.leftMatch[I].exec(K)) != null && F[2]) {
                    A = k.filter[I];
                    C = F[1];
                    z = false;
                    F.splice(1, 1);
                    if (C.substr(C.length - 1) === "\\") {
                        continue
                    }
                    if (H === P) {
                        P = []
                    }
                    if (k.preFilter[I]) {
                        F = k.preFilter[I](F, H, O, P, D, G);
                        if (!F) {
                            z = Q = true
                        } else {
                            if (F === true) {
                                continue
                            }
                        }
                    }
                    if (F) {
                        for (E = 0; (N = H[E]) != null; E++) {
                            if (N) {
                                Q = A(N, F, E, H);
                                L = D ^ Q;
                                if (O && Q != null) {
                                    if (L) {
                                        z = true
                                    } else {
                                        H[E] = false
                                    }
                                } else {
                                    if (L) {
                                        P.push(N);
                                        z = true
                                    }
                                }
                            }
                        }
                    }
                    if (Q !== undefined) {
                        if (!O) {
                            H = P
                        }
                        K = K.replace(k.match[I], "");
                        if (!z) {
                            return []
                        }
                        break
                    }
                }
            }
            if (K === B) {
                if (z == null) {
                    d.error(K)
                } else {
                    break
                }
            }
            B = K
        }
        return H
    };
    d.error = function(z) {
        throw "Syntax error, unrecognized expression: " + z
    };
    var b = d.getText = function(D) {
        var B, C, z = D.nodeType,
        A = "";
        if (z) {
            if (z === 1) {
                if (typeof D.textContent === "string") {
                    return D.textContent
                } else {
                    if (typeof D.innerText === "string") {
                        return D.innerText.replace(w, "")
                    } else {
                        for (D = D.firstChild; D; D = D.nextSibling) {
                            A += b(D)
                        }
                    }
                }
            } else {
                if (z === 3 || z === 4) {
                    return D.nodeValue
                }
            }
        } else {
            for (B = 0; (C = D[B]); B++) {
                if (C.nodeType !== 8) {
                    A += b(C)
                }
            }
        }
        return A
    };
    var k = d.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function(z) {
                return z.getAttribute("href")
            },
            type: function(z) {
                return z.getAttribute("type")
            }
        },
        relative: {
            "+": function(F, A) {
                var C = typeof A === "string",
                E = C && !y.test(A),
                G = C && !E;
                if (E) {
                    A = A.toLowerCase()
                }
                for (var B = 0,
                z = F.length,
                D; B < z; B++) {
                    if ((D = F[B])) {
                        while ((D = D.previousSibling) && D.nodeType !== 1) {}
                        F[B] = G || D && D.nodeName.toLowerCase() === A ? D || false: D === A
                    }
                }
                if (G) {
                    d.filter(A, F, true)
                }
            },
            ">": function(F, A) {
                var E, D = typeof A === "string",
                B = 0,
                z = F.length;
                if (D && !y.test(A)) {
                    A = A.toLowerCase();
                    for (; B < z; B++) {
                        E = F[B];
                        if (E) {
                            var C = E.parentNode;
                            F[B] = C.nodeName.toLowerCase() === A ? C: false
                        }
                    }
                } else {
                    for (; B < z; B++) {
                        E = F[B];
                        if (E) {
                            F[B] = D ? E.parentNode: E.parentNode === A
                        }
                    }
                    if (D) {
                        d.filter(A, F, true)
                    }
                }
            },
            "": function(C, A, E) {
                var D, B = o++,
                z = v;
                if (typeof A === "string" && !y.test(A)) {
                    A = A.toLowerCase();
                    D = A;
                    z = a
                }
                z("parentNode", A, B, C, D, E)
            },
            "~": function(C, A, E) {
                var D, B = o++,
                z = v;
                if (typeof A === "string" && !y.test(A)) {
                    A = A.toLowerCase();
                    D = A;
                    z = a
                }
                z("previousSibling", A, B, C, D, E)
            }
        },
        find: {
            ID: function(A, B, C) {
                if (typeof B.getElementById !== "undefined" && !C) {
                    var z = B.getElementById(A[1]);
                    return z && z.parentNode ? [z] : []
                }
            },
            NAME: function(B, E) {
                if (typeof E.getElementsByName !== "undefined") {
                    var A = [],
                    D = E.getElementsByName(B[1]);
                    for (var C = 0,
                    z = D.length; C < z; C++) {
                        if (D[C].getAttribute("name") === B[1]) {
                            A.push(D[C])
                        }
                    }
                    return A.length === 0 ? null: A
                }
            },
            TAG: function(z, A) {
                if (typeof A.getElementsByTagName !== "undefined") {
                    return A.getElementsByTagName(z[1])
                }
            }
        },
        preFilter: {
            CLASS: function(C, A, B, z, F, G) {
                C = " " + C[1].replace(q, "") + " ";
                if (G) {
                    return C
                }
                for (var D = 0,
                E; (E = A[D]) != null; D++) {
                    if (E) {
                        if (F ^ (E.className && (" " + E.className + " ").replace(/[\t\n\r]/g, " ").indexOf(C) >= 0)) {
                            if (!B) {
                                z.push(E)
                            }
                        } else {
                            if (B) {
                                A[D] = false
                            }
                        }
                    }
                }
                return false
            },
            ID: function(z) {
                return z[1].replace(q, "")
            },
            TAG: function(A, z) {
                return A[1].replace(q, "").toLowerCase()
            },
            CHILD: function(z) {
                if (z[1] === "nth") {
                    if (!z[2]) {
                        d.error(z[0])
                    }
                    z[2] = z[2].replace(/^\+|\s*/g, "");
                    var A = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(z[2] === "even" && "2n" || z[2] === "odd" && "2n+1" || !/\D/.test(z[2]) && "0n+" + z[2] || z[2]);
                    z[2] = (A[1] + (A[2] || 1)) - 0;
                    z[3] = A[3] - 0
                } else {
                    if (z[2]) {
                        d.error(z[0])
                    }
                }
                z[0] = o++;
                return z
            },
            ATTR: function(D, A, B, z, E, F) {
                var C = D[1] = D[1].replace(q, "");
                if (!F && k.attrMap[C]) {
                    D[1] = k.attrMap[C]
                }
                D[4] = (D[4] || D[5] || "").replace(q, "");
                if (D[2] === "~=") {
                    D[4] = " " + D[4] + " "
                }
                return D
            },
            PSEUDO: function(D, A, B, z, E) {
                if (D[1] === "not") {
                    if ((n.exec(D[3]) || "").length > 1 || /^\w/.test(D[3])) {
                        D[3] = d(D[3], null, null, A)
                    } else {
                        var C = d.filter(D[3], A, B, true ^ E);
                        if (!B) {
                            z.push.apply(z, C)
                        }
                        return false
                    }
                } else {
                    if (k.match.POS.test(D[0]) || k.match.CHILD.test(D[0])) {
                        return true
                    }
                }
                return D
            },
            POS: function(z) {
                z.unshift(true);
                return z
            }
        },
        filters: {
            enabled: function(z) {
                return z.disabled === false && z.type !== "hidden"
            },
            disabled: function(z) {
                return z.disabled === true
            },
            checked: function(z) {
                return z.checked === true
            },
            selected: function(z) {
                if (z.parentNode) {
                    z.parentNode.selectedIndex
                }
                return z.selected === true
            },
            parent: function(z) {
                return !! z.firstChild
            },
            empty: function(z) {
                return ! z.firstChild
            },
            has: function(B, A, z) {
                return !! d(z[3], B).length
            },
            header: function(z) {
                return (/h\d/i).test(z.nodeName)
            },
            text: function(B) {
                var z = B.getAttribute("type"),
                A = B.type;
                return B.nodeName.toLowerCase() === "input" && "text" === A && (z === A || z === null)
            },
            radio: function(z) {
                return z.nodeName.toLowerCase() === "input" && "radio" === z.type
            },
            checkbox: function(z) {
                return z.nodeName.toLowerCase() === "input" && "checkbox" === z.type
            },
            file: function(z) {
                return z.nodeName.toLowerCase() === "input" && "file" === z.type
            },
            password: function(z) {
                return z.nodeName.toLowerCase() === "input" && "password" === z.type
            },
            submit: function(A) {
                var z = A.nodeName.toLowerCase();
                return (z === "input" || z === "button") && "submit" === A.type
            },
            image: function(z) {
                return z.nodeName.toLowerCase() === "input" && "image" === z.type
            },
            reset: function(A) {
                var z = A.nodeName.toLowerCase();
                return (z === "input" || z === "button") && "reset" === A.type
            },
            button: function(A) {
                var z = A.nodeName.toLowerCase();
                return z === "input" && "button" === A.type || z === "button"
            },
            input: function(z) {
                return (/input|select|textarea|button/i).test(z.nodeName)
            },
            focus: function(z) {
                return z === z.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function(A, z) {
                return z === 0
            },
            last: function(B, A, z, C) {
                return A === C.length - 1
            },
            even: function(A, z) {
                return z % 2 === 0
            },
            odd: function(A, z) {
                return z % 2 === 1
            },
            lt: function(B, A, z) {
                return A < z[3] - 0
            },
            gt: function(B, A, z) {
                return A > z[3] - 0
            },
            nth: function(B, A, z) {
                return z[3] - 0 === A
            },
            eq: function(B, A, z) {
                return z[3] - 0 === A
            }
        },
        filter: {
            PSEUDO: function(B, G, F, H) {
                var z = G[1],
                A = k.filters[z];
                if (A) {
                    return A(B, F, G, H)
                } else {
                    if (z === "contains") {
                        return (B.textContent || B.innerText || b([B]) || "").indexOf(G[3]) >= 0
                    } else {
                        if (z === "not") {
                            var C = G[3];
                            for (var E = 0,
                            D = C.length; E < D; E++) {
                                if (C[E] === B) {
                                    return false
                                }
                            }
                            return true
                        } else {
                            d.error(z)
                        }
                    }
                }
            },
            CHILD: function(B, D) {
                var C, J, F, I, z, E, H, G = D[1],
                A = B;
                switch (G) {
                case "only":
                case "first":
                    while ((A = A.previousSibling)) {
                        if (A.nodeType === 1) {
                            return false
                        }
                    }
                    if (G === "first") {
                        return true
                    }
                    A = B;
                case "last":
                    while ((A = A.nextSibling)) {
                        if (A.nodeType === 1) {
                            return false
                        }
                    }
                    return true;
                case "nth":
                    C = D[2];
                    J = D[3];
                    if (C === 1 && J === 0) {
                        return true
                    }
                    F = D[0];
                    I = B.parentNode;
                    if (I && (I[i] !== F || !B.nodeIndex)) {
                        E = 0;
                        for (A = I.firstChild; A; A = A.nextSibling) {
                            if (A.nodeType === 1) {
                                A.nodeIndex = ++E
                            }
                        }
                        I[i] = F
                    }
                    H = B.nodeIndex - J;
                    if (C === 0) {
                        return H === 0
                    } else {
                        return (H % C === 0 && H / C >= 0)
                    }
                }
            },
            ID: function(A, z) {
                return A.nodeType === 1 && A.getAttribute("id") === z
            },
            TAG: function(A, z) {
                return (z === "*" && A.nodeType === 1) || !!A.nodeName && A.nodeName.toLowerCase() === z
            },
            CLASS: function(A, z) {
                return (" " + (A.className || A.getAttribute("class")) + " ").indexOf(z) > -1
            },
            ATTR: function(E, C) {
                var B = C[1],
                z = d.attr ? d.attr(E, B) : k.attrHandle[B] ? k.attrHandle[B](E) : E[B] != null ? E[B] : E.getAttribute(B),
                F = z + "",
                D = C[2],
                A = C[4];
                return z == null ? D === "!=": !D && d.attr ? z != null: D === "=" ? F === A: D === "*=" ? F.indexOf(A) >= 0 : D === "~=" ? (" " + F + " ").indexOf(A) >= 0 : !A ? F && z !== false: D === "!=" ? F !== A: D === "^=" ? F.indexOf(A) === 0 : D === "$=" ? F.substr(F.length - A.length) === A: D === "|=" ? F === A || F.substr(0, A.length + 1) === A + "-": false
            },
            POS: function(D, A, B, E) {
                var z = A[2],
                C = k.setFilters[z];
                if (C) {
                    return C(D, B, A, E)
                }
            }
        }
    };
    var j = k.match.POS,
    c = function(A, z) {
        return "\\" + (z - 0 + 1)
    };
    for (var f in k.match) {
        k.match[f] = new RegExp(k.match[f].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
        k.leftMatch[f] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[f].source.replace(/\\(\d+)/g, c))
    }
    var l = function(A, z) {
        A = Array.prototype.slice.call(A, 0);
        if (z) {
            z.push.apply(z, A);
            return z
        }
        return A
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
    } catch(x) {
        l = function(D, C) {
            var B = 0,
            A = C || [];
            if (t.call(D) === "[object Array]") {
                Array.prototype.push.apply(A, D)
            } else {
                if (typeof D.length === "number") {
                    for (var z = D.length; B < z; B++) {
                        A.push(D[B])
                    }
                } else {
                    for (; D[B]; B++) {
                        A.push(D[B])
                    }
                }
            }
            return A
        }
    }
    var p, m;
    if (document.documentElement.compareDocumentPosition) {
        p = function(A, z) {
            if (A === z) {
                h = true;
                return 0
            }
            if (!A.compareDocumentPosition || !z.compareDocumentPosition) {
                return A.compareDocumentPosition ? -1 : 1
            }
            return A.compareDocumentPosition(z) & 4 ? -1 : 1
        }
    } else {
        p = function(H, G) {
            if (H === G) {
                h = true;
                return 0
            } else {
                if (H.sourceIndex && G.sourceIndex) {
                    return H.sourceIndex - G.sourceIndex
                }
            }
            var E, A, B = [],
            z = [],
            D = H.parentNode,
            F = G.parentNode,
            I = D;
            if (D === F) {
                return m(H, G)
            } else {
                if (!D) {
                    return - 1
                } else {
                    if (!F) {
                        return 1
                    }
                }
            }
            while (I) {
                B.unshift(I);
                I = I.parentNode
            }
            I = F;
            while (I) {
                z.unshift(I);
                I = I.parentNode
            }
            E = B.length;
            A = z.length;
            for (var C = 0; C < E && C < A; C++) {
                if (B[C] !== z[C]) {
                    return m(B[C], z[C])
                }
            }
            return C === E ? m(H, z[C], -1) : m(B[C], G, 1)
        };
        m = function(A, z, B) {
            if (A === z) {
                return B
            }
            var C = A.nextSibling;
            while (C) {
                if (C === z) {
                    return - 1
                }
                C = C.nextSibling
            }
            return 1
        }
    } (function() {
        var A = document.createElement("div"),
        B = "script" + (new Date()).getTime(),
        z = document.documentElement;
        A.innerHTML = "<a name='" + B + "'/>";
        z.insertBefore(A, z.firstChild);
        if (document.getElementById(B)) {
            k.find.ID = function(D, E, F) {
                if (typeof E.getElementById !== "undefined" && !F) {
                    var C = E.getElementById(D[1]);
                    return C ? C.id === D[1] || typeof C.getAttributeNode !== "undefined" && C.getAttributeNode("id").nodeValue === D[1] ? [C] : undefined: []
                }
            };
            k.filter.ID = function(E, C) {
                var D = typeof E.getAttributeNode !== "undefined" && E.getAttributeNode("id");
                return E.nodeType === 1 && D && D.nodeValue === C
            }
        }
        z.removeChild(A);
        z = A = null
    })(); (function() {
        var z = document.createElement("div");
        z.appendChild(document.createComment(""));
        if (z.getElementsByTagName("*").length > 0) {
            k.find.TAG = function(A, E) {
                var D = E.getElementsByTagName(A[1]);
                if (A[1] === "*") {
                    var C = [];
                    for (var B = 0; D[B]; B++) {
                        if (D[B].nodeType === 1) {
                            C.push(D[B])
                        }
                    }
                    D = C
                }
                return D
            }
        }
        z.innerHTML = "<a href='#'></a>";
        if (z.firstChild && typeof z.firstChild.getAttribute !== "undefined" && z.firstChild.getAttribute("href") !== "#") {
            k.attrHandle.href = function(A) {
                return A.getAttribute("href", 2)
            }
        }
        z = null
    })();
    if (document.querySelectorAll) { (function() {
            var z = d,
            C = document.createElement("div"),
            B = "__sizzle__";
            C.innerHTML = "<p class='TEST'></p>";
            if (C.querySelectorAll && C.querySelectorAll(".TEST").length === 0) {
                return
            }
            d = function(O, E, I, N) {
                E = E || document;
                if (!N && !d.isXML(E)) {
                    var L = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(O);
                    if (L && (E.nodeType === 1 || E.nodeType === 9)) {
                        if (L[1]) {
                            return l(E.getElementsByTagName(O), I)
                        } else {
                            if (L[2] && k.find.CLASS && E.getElementsByClassName) {
                                return l(E.getElementsByClassName(L[2]), I)
                            }
                        }
                    }
                    if (E.nodeType === 9) {
                        if (O === "body" && E.body) {
                            return l([E.body], I)
                        } else {
                            if (L && L[3]) {
                                var H = E.getElementById(L[3]);
                                if (H && H.parentNode) {
                                    if (H.id === L[3]) {
                                        return l([H], I)
                                    }
                                } else {
                                    return l([], I)
                                }
                            }
                        }
                        try {
                            return l(E.querySelectorAll(O), I)
                        } catch(J) {}
                    } else {
                        if (E.nodeType === 1 && E.nodeName.toLowerCase() !== "object") {
                            var F = E,
                            G = E.getAttribute("id"),
                            D = G || B,
                            Q = E.parentNode,
                            P = /^\s*[+~]/.test(O);
                            if (!G) {
                                E.setAttribute("id", D)
                            } else {
                                D = D.replace(/'/g, "\\$&")
                            }
                            if (P && Q) {
                                E = E.parentNode
                            }
                            try {
                                if (!P || Q) {
                                    return l(E.querySelectorAll("[id='" + D + "'] " + O), I)
                                }
                            } catch(K) {} finally {
                                if (!G) {
                                    F.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return z(O, E, I, N)
            };
            for (var A in z) {
                d[A] = z[A]
            }
            C = null
        })()
    } (function() {
        var z = document.documentElement,
        B = z.matchesSelector || z.mozMatchesSelector || z.webkitMatchesSelector || z.msMatchesSelector;
        if (B) {
            var D = !B.call(document.createElement("div"), "div"),
            A = false;
            try {
                B.call(document.documentElement, "[test!='']:sizzle")
            } catch(C) {
                A = true
            }
            d.matchesSelector = function(F, H) {
                H = H.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!d.isXML(F)) {
                    try {
                        if (A || !k.match.PSEUDO.test(H) && !/!=/.test(H)) {
                            var E = B.call(F, H);
                            if (E || !D || F.document && F.document.nodeType !== 11) {
                                return E
                            }
                        }
                    } catch(G) {}
                }
                return d(H, null, null, [F]).length > 0
            }
        }
    })(); (function() {
        var z = document.createElement("div");
        z.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (!z.getElementsByClassName || z.getElementsByClassName("e").length === 0) {
            return
        }
        z.lastChild.className = "e";
        if (z.getElementsByClassName("e").length === 1) {
            return
        }
        k.order.splice(1, 0, "CLASS");
        k.find.CLASS = function(A, B, C) {
            if (typeof B.getElementsByClassName !== "undefined" && !C) {
                return B.getElementsByClassName(A[1])
            }
        };
        z = null
    })();
    function a(A, F, E, I, G, H) {
        for (var C = 0,
        B = I.length; C < B; C++) {
            var z = I[C];
            if (z) {
                var D = false;
                z = z[A];
                while (z) {
                    if (z[i] === E) {
                        D = I[z.sizset];
                        break
                    }
                    if (z.nodeType === 1 && !H) {
                        z[i] = E;
                        z.sizset = C
                    }
                    if (z.nodeName.toLowerCase() === F) {
                        D = z;
                        break
                    }
                    z = z[A]
                }
                I[C] = D
            }
        }
    }
    function v(A, F, E, I, G, H) {
        for (var C = 0,
        B = I.length; C < B; C++) {
            var z = I[C];
            if (z) {
                var D = false;
                z = z[A];
                while (z) {
                    if (z[i] === E) {
                        D = I[z.sizset];
                        break
                    }
                    if (z.nodeType === 1) {
                        if (!H) {
                            z[i] = E;
                            z.sizset = C
                        }
                        if (typeof F !== "string") {
                            if (z === F) {
                                D = true;
                                break
                            }
                        } else {
                            if (d.filter(F, [z]).length > 0) {
                                D = z;
                                break
                            }
                        }
                    }
                    z = z[A]
                }
                I[C] = D
            }
        }
    }
    if (document.documentElement.contains) {
        d.contains = function(A, z) {
            return A !== z && (A.contains ? A.contains(z) : true)
        }
    } else {
        if (document.documentElement.compareDocumentPosition) {
            d.contains = function(A, z) {
                return !! (A.compareDocumentPosition(z) & 16)
            }
        } else {
            d.contains = function() {
                return false
            }
        }
    }
    d.isXML = function(z) {
        var A = (z ? z.ownerDocument || z: 0).documentElement;
        return A ? A.nodeName !== "HTML": false
    };
    var u = function(B, z, F) {
        var E, G = [],
        D = "",
        H = z.nodeType ? [z] : z;
        while ((E = k.match.PSEUDO.exec(B))) {
            D += E[0];
            B = B.replace(k.match.PSEUDO, "")
        }
        B = k.relative[B] ? B + "*": B;
        for (var C = 0,
        A = H.length; C < A; C++) {
            d(B, H[C], G, F)
        }
        return d.filter(D, G)
    };
    baidu.dom.query = d
})();
baidu.each = baidu.array.forEach = baidu.array.each = function(h, f, b) {
    var d, g, c, a = h.length;
    if ("function" == typeof f) {
        for (c = 0; c < a; c++) {
            g = h[c];
            d = f.call(b || h, g, c);
            if (d === false) {
                break
            }
        }
    }
    return h
};
baidu.url = baidu.url || {};
baidu.url.getQueryValue = function(b, c) {
    var d = new RegExp("(^|&|\\?|#)" + baidu.string.escapeReg(c) + "=([^&#]*)(&|\x24|#)", "");
    var a = b.match(d);
    if (a) {
        return a[2]
    }
    return null
};
baidu.url.queryToJson = function(a) {
    var g = a.substr(a.lastIndexOf("?") + 1),
    c = g.split("&"),
    f = c.length,
    l = {},
    d = 0,
    j,
    h,
    k,
    b;
    for (; d < f; d++) {
        if (!c[d]) {
            continue
        }
        b = c[d].split("=");
        j = b[0];
        h = b[1];
        k = l[j];
        if ("undefined" == typeof k) {
            l[j] = h
        } else {
            if (baidu.lang.isArray(k)) {
                k.push(h)
            } else {
                l[j] = [k, h]
            }
        }
    }
    return l
};
baidu.Ajax = function(b) {
    this.url = "";
    this.data = "";
    this.async = true;
    this.duration = -1;
    this.overtime = false;
    this.username = "";
    this.password = "";
    this.method = "GET";
    if (typeof b == "object" && b) {
        for (var a in b) {
            this[a] = b[a]
        }
    }
}; (function() {
    baidu.Ajax.prototype.request = function(d, k) {
        var i = this,
        g = b(),
        l = g.xhr;
        g.active = true;
        i.url = d;
        if (typeof k == "string" && k) {
            i.data = k
        }
        if (typeof i.onexecute == "function") {
            i.onexecute(l)
        }
        try {
            if (!i.username) {
                l.open(i.method, i.url, i.async)
            } else {
                l.open(i.method, i.url, i.async, i.username, i.password)
            }
            if (i.async) {
                l.onreadystatechange = h
            }
            if (i.method.toUpperCase() == "POST") {
                l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
            i.beginTime = new Date().getTime();
            if (i.duration > 0) {
                j()
            }
            
            
            
            l.send(i.data)
            
        } catch(f) {
            if (typeof i.onerror == "function") {
                i.onerror(f)
            }
        }
        if (!i.async) {
            h()
        }
        function h() {
            if (l.readyState == 4) {
                try {
                    l.status
                } catch(m) {
                    if (typeof i.ondisconnect == "function") {
                        i.ondisconnect(l)
                    }
                    g.active = false;
                    return
                }
                i.duration = -1;
                if (!i.overtime) {
                    if (typeof i["on" + l.status] == "function") {
                        i["on" + l.status](l)
                    }
                    if (l.status == 200 || l.status === 304) {
                        if (typeof i.onsuccess == "function") {
                            i.onsuccess(l)
                        }
                    } else {
                        if (typeof i.onfailure == "function") {
                            i.onfailure(l)
                        }
                    }
                }
                g.active = false;
                l.onreadystatechange = function() {}
            }
        }
        function j() {
            if (i.duration == -1) {
                return
            }
            if (new Date().getTime() - i.beginTime > i.duration) {
                i.duration = -1;
                try {
                    l.abort()
                } catch(m) {}
                i.overtime = true;
                g.active = false;
                if (typeof i.ontimeout == "function") {
                    i.ontimeout(l)
                }
            }
            setTimeout(function() {
                j()
            },
            10)
        }
    };
    var c = [];
    function b() {
        var g = c;
        for (var f = null,
        d = 0; d < g.length; d++) {
            f = g[d];
            if (!f.active) {
                break
            }
        }
        if (d >= g.length) {
            f = {
                active: false,
                xhr: a()
            };
            g[g.length] = f
        }
        return f
    }
    function a() {
        if (window.XMLHttpRequest) {
            var g = new XMLHttpRequest();
            baidu.on(window, "onunload",
            function() {
                g.abort()
            });
            return g
        } else {
            if (window.ActiveXObject) {
                var h = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "Msxml2.XMLHTTP", "MSXML.XMLHttp", "Microsoft.XMLHTTP"];
                for (var f = 0; h[f]; f++) {
                    try {
                        var g = new ActiveXObject(h[f]);
                        baidu.on(window, "onunload",
                        function() {
                            g.abort()
                        });
                        return g
                    } catch(d) {}
                }
                throw new Error("Your browser do not support XMLHttp")
            }
        }
    }
})();
baidu.Ajax.get = function(a, b) {
    return this.request(a, b)
};
baidu.Ajax.request = function(b, c, a) {
    if (typeof c == "object" && c) {
        a = c;
        c = null
    } else {
        if (typeof c == "function") {
            a = a || {};
            a.onsuccess = c;
            c = null
        }
    }
    var d = new baidu.Ajax(a);
    d.request(b, c);
    return d
};
baidu.localStorage = function(a) {
    this.contentID = a.contentID;
    this.flashURL = a.flashURL || MapConfig.smFlwCon + "./template/eis_y_car/map/image/LocalStorage.swf?v=20101012";
    this.flashID = a.flashID
};
baidu.localStorage.prototype = {
    createFlash: function(d) {
        var c = this;
        var a = "";
        if (_sign.isMaxthon()) {
            a = "aoyao"
        }
        baidu.swf.create({
            id: c.flashID,
            width: "215",
            height: "138",
            ver: "9.0.28",
            errorMessage: "Please download the newest flash player.",
            url: c.flashURL,
            bgColor: "#FFFFFF",
            wmode: "window",
            vars: {
                browser: a
            }
        },
        c.contentID);
        var b = setInterval(function() {
            if (c._init) {
                clearTimeout(b);
                if (d) {
                    d.callBack()
                }
            }
            if (!c._init) {
                try {
                    c.setValue("baidu", "t", 1);
                    var g = c.getValue("userID", "id");
                    if (g == undefined) {
                        c.setValue("userID", "id", _sign.getUserID())
                    }
                    var f = c.getValue("sign", "id");
                    if (f == undefined) {
                        c.setValue("sign", "id", 0)
                    }
                    c._init = 1
                } catch(h) {}
            }
        },
        10)
    },
    _init: 0,
    render: function(a) {
        this.createFlash(a)
    },
    getFlashID: function() {
        return this.flashID
    },
    setValue: function(d, a, c) {
        var b = this;
        if (baidu.swf.getMovie(b.flashID) && baidu.swf.getMovie(b.flashID).write) {
            baidu.swf.getMovie(b.flashID).write(d, a, c)
        }
    },
    getValue: function(c, a) {
        var b = this;
        if (baidu.swf.getMovie(b.flashID) && baidu.swf.getMovie(b.flashID).read) {
            return (baidu.swf.getMovie(b.flashID).read(c, a))
        }
    },
    getKeyList: function(b) {
        var a = this;
        return (baidu.swf.getMovie(a.flashID).getKeyList(b))
    },
    clear: function(b) {
        var a = this;
        baidu.swf.getMovie(a.flashID).clear(b)
    },
    remove: function(c, d) {
        var b = this;
        for (var a = 0; a < d.length; a++) {
            baidu.swf.getMovie(b.flashID).remove(c, d[a])
        }
    }
};
baidu.storage = {};
baidu.storage._isValidKey = function(a) {
    return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)
};
baidu.storage.userData = (function() {
    var g = "_BAIDU.ALL.KEY_";
    var b = function() {
        var i = null;
        i = document.createElement("input");
        i.type = "hidden";
        i.addBehavior("#default#userData");
        document.body.appendChild(i);
        return i
    };
    var a = function(l, k) {
        try {
            var j = b();
            var n = k || {};
            if (n.expires) {
                var i;
                if ("number" == typeof n.expires) {
                    i = new Date();
                    i.setTime(i.getTime() + n.expires)
                }
                j.expires = i.toUTCString()
            }
            n.expires = null;
            j.setAttribute(n.key, n.value);
            j.save(n.key)
        } catch(m) {}
    };
    var h = function(j, i) {
        a(j, i);
        result = f({
            key: g
        });
        if (result) {
            result = {
                value: result
            }
        } else {
            result = {
                key: g,
                value: ""
            }
        }
        if (! (new RegExp("(^||)" + j + "(||$)")).test(result.value)) {
            result.value += "|" + j;
            a(g, result)
        }
    };
    var f = function(j) {
        try {
            var i = b();
            i.load(j.key);
            return i.getAttribute(j.key) || null
        } catch(k) {
            return null
        }
    };
    var d = function(k) {
        try {
            var j = b();
            j.load(k.key);
            j.removeAttribute(k.key);
            var i = new Date();
            i.setTime(i.getTime() - 1);
            j.expires = i.toUTCString();
            j.save(k.key)
        } catch(l) {}
    };
    var c = function() {
        result = f({
            key: g
        });
        if (result) {
            result = {
                value: result
            };
            var k = (result.value || "").split("|");
            var l = k.length;
            for (var j = 0; j < l; j++) {
                d({
                    key: k[j]
                })
            }
        }
    };
    return {
        getItem: f,
        setItem: h,
        removeItem: d,
        clearAll: c
    }
})();
baidu.storage._isSupportLocalStorage = function() {
    return ("localStorage" in window) && (window.localStorage !== null)
};
baidu.storage.isSupportStorage = function() {
    return ("localStorage" in window) && (window.localStorage !== null) || document.all
};
baidu.storage.set = function(a) {
    if (!baidu.storage._isValidKey(a.key)) {
        return
    }
    var b = a || {};
    if (baidu.storage._isSupportLocalStorage()) {
        window.localStorage.setItem(b.key, b.value);
        if (a.expires) {
            window.localStorage.setItem(b.key + ".expires", b.expires)
        }
    } else {
        baidu.storage.userData.setItem(a.key, b)
    }
};
baidu.storage.get = function(c) {
    var a = null;
    if (!baidu.storage._isValidKey(c.key)) {
        return a
    }
    if (baidu.storage._isSupportLocalStorage()) {
        a = window.localStorage.getItem(c.key);
        if (a) {
            var b = window.localStorage.getItem(c.key + ".expires");
            a = {
                value: a,
                expires: b ? new Date(b) : null
            };
            if (a && a.expires && a.expires < new Date()) {
                a = null;
                window.localStorage.removeItem(c.key)
            }
        }
    } else {
        a = baidu.storage.userData.getItem(c);
        if (a) {
            a = {
                value: a
            }
        }
    }
    return a ? a.value: null
};
baidu.storage.remove = function(a) {
    if (baidu.storage._isSupportLocalStorage()) {
        window.localStorage.removeItem(a.key);
        window.localStorage.removeItem(a.key + ".expires")
    } else {
        baidu.storage.userData.removeItem(a)
    }
};
baidu.storage.clearAll = function() {
    if (baidu.storage._isSupportLocalStorage()) {
        window.localStorage.clear()
    } else {
        baidu.storage.userData.clearAll()
    }
};
baidu.dom.removeClass = function(g, h) {
    if (!g) {
        return
    }
    g = baidu.dom.g(g);
    var d = g.className.split(/\s+/),
    k = h.split(/\s+/),
    b,
    a = k.length,
    c,
    f = 0;
    for (; f < a; ++f) {
        for (c = 0, b = d.length; c < b; ++c) {
            if (d[c] == k[f]) {
                d.splice(c, 1);
                break
            }
        }
    }
    g.className = d.join(" ");
    return g
};
baidu.removeClass = baidu.rc = baidu.dom.removeClass;
baidu.ui = baidu.ui || {
    version: "1.3.9"
};
baidu.ui.getUI = function(c) {
    var c = c.split("-"),
    b = baidu.ui,
    a = c.length,
    d = 0;
    for (; d < a; d++) {
        b = b[c[d].charAt(0).toUpperCase() + c[d].slice(1)]
    }
    return b
};
baidu.ui.create = function(b, a) {
    if (baidu.lang.isString(b)) {
        b = baidu.ui.getUI(b)
    }
    return new b(a)
};
baidu.ui.Base = {
    id: "",
    getId: function(a) {
        var c = this,
        b;
        b = "tangram-" + c.uiType + "--" + (c.id ? c.id: c.guid);
        return a ? b + "-" + a: b
    },
    getClass: function(b) {
        var d = this,
        c = d.classPrefix,
        a = d.skin;
        if (b) {
            c += "-" + b;
            a += "-" + b
        }
        if (d.skin) {
            c += " " + a
        }
        return c
    },
    getMain: function() {
        return baidu.g(this.mainId)
    },
    getBody: function() {
        return baidu.g(this.getId())
    },
    uiType: "",
    getCallRef: function() {
        return "window['$BAIDU$']._instances['" + this.guid + "']"
    },
    getCallString: function(d) {
        var c = 0,
        b = Array.prototype.slice.call(arguments, 1),
        a = b.length;
        for (; c < a; c++) {
            if (typeof b[c] == "string") {
                b[c] = "'" + b[c] + "'"
            }
        }
        return this.getCallRef() + "." + d + "(" + b.join(",") + ");"
    },
    on: function(a, b, c) {
        baidu.on(a, b, c);
        this.addEventListener("ondispose",
        function() {
            baidu.un(a, b, c)
        })
    },
    renderMain: function(b) {
        var d = this,
        c = 0,
        a;
        if (d.getMain()) {
            return
        }
        b = baidu.g(b);
        if (!b) {
            b = document.createElement("div");
            document.body.appendChild(b);
            b.style.position = "absolute";
            b.className = d.getClass("main")
        }
        if (!b.id) {
            b.id = d.getId("main")
        }
        d.mainId = b.id;
        b.setAttribute("data-guid", d.guid);
        return b
    },
    dispose: function() {
        this.dispatchEvent("dispose");
        baidu.lang.Class.prototype.dispose.call(this)
    }
};
baidu.ui.createUI = function(c, k) {
    k = k || {};
    var h = k.superClass || baidu.lang.Class,
    g = h == baidu.lang.Class ? 1 : 0,
    d,
    b,
    j = function(l, i) {
        var m = this;
        l = l || {};
        h.call(m, !g ? l: (l.guid || ""), true);
        baidu.object.extend(m, j.options);
        baidu.object.extend(m, l);
        m.classPrefix = m.classPrefix || "tangram-" + m.uiType.toLowerCase();
        for (d in baidu.ui.behavior) {
            if (typeof m[d] != "undefined" && m[d]) {
                baidu.object.extend(m, baidu.ui.behavior[d]);
                if (baidu.lang.isFunction(m[d])) {
                    m.addEventListener("onload",
                    function() {
                        baidu.ui.behavior[d].call(m[d].apply(m))
                    })
                } else {
                    baidu.ui.behavior[d].call(m)
                }
            }
        }
        c.apply(m, arguments);
        for (d = 0, b = j._addons.length; d < b; d++) {
            j._addons[d](m)
        }
        if (l.parent && m.setParent) {
            m.setParent(l.parent)
        }
        if (!i && l.autoRender) {
            m.render(l.element)
        }
    },
    a = function() {};
    a.prototype = h.prototype;
    var f = j.prototype = new a();
    for (d in baidu.ui.Base) {
        f[d] = baidu.ui.Base[d]

    }
    j.extend = function(i) {
        for (d in i) {
            j.prototype[d] = i[d]
        }
        return j
    };
    j._addons = [];
    j.register = function(i) {
        if (typeof i == "function") {
            j._addons.push(i)
        }
    };
    j.options = {};
    return j
};
baidu.string.format = function(c, a) {
    c = String(c);
    var b = Array.prototype.slice.call(arguments, 1),
    d = Object.prototype.toString;
    if (b.length) {
        b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a: b) : b;
        return c.replace(/#\{(.+?)\}/g,
        function(f, h) {
            var g = b[h];
            if ("[object Function]" == d.call(g)) {
                g = g(h)
            }
            return ("undefined" == typeof g ? "": g)
        })
    }
    return c
};
baidu.format = baidu.string.format;
baidu.ui.Base.setParent = function(b) {
    var c = this,
    a = c._parent;
    a && a.dispatchEvent("removechild");
    if (b.dispatchEvent("appendchild", {
        child: c
    })) {
        c._parent = b
    }
};
baidu.ui.Base.getParent = function() {
    return this._parent || null
};
baidu.ui.behavior = baidu.ui.behavior || {};
baidu.event.getTarget = function(a) {
    return a.target || a.srcElement
};
baidu.each = baidu.array.forEach = baidu.array.each = function(h, f, b) {
    var d, g, c, a = h.length;
    if ("function" == typeof f) {
        for (c = 0; c < a; c++) {
            g = h[c];
            d = f.call(b || h, g, c);
            if (d === false) {
                break
            }
        }
    }
    return h
};
baidu.object.each = function(f, c) {
    var b, a, d;
    if ("function" == typeof c) {
        for (a in f) {
            if (f.hasOwnProperty(a)) {
                d = f[a];
                b = c.call(f, d, a);
                if (b === false) {
                    break
                }
            }
        }
    }
    return f
};
baidu.fn = baidu.fn || {};
baidu.fn.bind = function(b, a) {
    var c = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
    return function() {
        var f = baidu.lang.isString(b) ? a[b] : b,
        d = (c) ? c.concat([].slice.call(arguments, 0)) : arguments;
        return f.apply(a || f, d)
    }
}; (function() {
    var a = baidu.ui.behavior.statable = function() {
        var b = this;
        b.addEventListeners("ondisable,onenable",
        function(f, c) {
            var d, g;
            c = c || {};
            elementId = (c.element || b.getMain()).id;
            g = c.group;
            if (f.type == "ondisable" && !b.getState(elementId, g)["disabled"]) {
                b.removeState("press", elementId, g);
                b.removeState("hover", elementId, g);
                b.setState("disabled", elementId, g)
            } else {
                if (f.type == "onenable" && b.getState(elementId, g)["disabled"]) {
                    b.removeState("disabled", elementId, g)
                }
            }
        })
    };
    a._states = {};
    a._allStates = ["hover", "press", "disabled"];
    a._allEventsName = ["mouseover", "mouseout", "mousedown", "mouseup"];
    a._eventsHandler = {
        mouseover: function(d, c) {
            var b = this;
            if (!b.getState(d, c)["disabled"]) {
                b.setState("hover", d, c);
                return true
            }
        },
        mouseout: function(d, c) {
            var b = this;
            if (!b.getState(d, c)["disabled"]) {
                b.removeState("hover", d, c);
                b.removeState("press", d, c);
                return true
            }
        },
        mousedown: function(d, c) {
            var b = this;
            if (!b.getState(d, c)["disabled"]) {
                b.setState("press", d, c);
                return true
            }
        },
        mouseup: function(d, c) {
            var b = this;
            if (!b.getState(d, c)["disabled"]) {
                b.removeState("press", d, c);
                return true
            }
        }
    };
    a._getStateHandlerString = function(j, g) {
        var h = this,
        f = 0,
        b = h._allEventsName.length,
        c = [],
        d;
        if (typeof j == "undefined") {
            j = g = ""
        }
        for (; f < b; f++) {
            d = h._allEventsName[f];
            c[f] = "on" + d + '="' + h.getCallRef() + "._fireEvent('" + d + "', '" + j + "', '" + g + "', event)\""
        }
        return c.join(" ")
    };
    a._fireEvent = function(c, g, b, f) {
        var d = this,
        h = d.getId(g + b);
        if (d._eventsHandler[c].call(d, h, g)) {
            d.dispatchEvent(c, {
                element: h,
                group: g,
                key: b,
                DOMEvent: f
            })
        }
    };
    a.addState = function(f, b, c) {
        var d = this;
        d._allStates.push(f);
        if (b) {
            d._allEventsName.push(b);
            if (!c) {
                c = function() {
                    return true
                }
            }
            d._eventsHandler[b] = c
        }
    };
    a.getState = function(b, f) {
        var d = this,
        c;
        f = f ? f + "-": "";
        b = b ? b: d.getId();
        c = d._states[f + b];
        return c ? c: {}
    };
    a.setState = function(f, b, g) {
        var d = this,
        h, c;
        g = g ? g + "-": "";
        b = b ? b: d.getId();
        h = g + b;
        d._states[h] = d._states[h] || {};
        c = d._states[h][f];
        if (!c) {
            d._states[h][f] = 1;
            baidu.addClass(b, d.getClass(g + f))
        }
    };
    a.removeState = function(d, b, f) {
        var c = this,
        g;
        f = f ? f + "-": "";
        b = b ? b: c.getId();
        g = f + b;
        if (c._states[g]) {
            c._states[g][d] = 0;
            baidu.removeClass(b, c.getClass(f + d))
        }
    }
})();
baidu.ui.Button = baidu.ui.createUI(new Function).extend({
    uiType: "button",
    tplBody: '<div id="#{id}" #{statable} class="#{class}">#{content}</div>',
    disabled: false,
    statable: true,
    _getString: function() {
        var a = this;
        return baidu.format(a.tplBody, {
            id: a.getId(),
            statable: a._getStateHandlerString(),
            "class": a.getClass(),
            content: a.content
        })
    },
    render: function(c) {
        var b = this,
        a;
        b.addState("click", "click");
        baidu.dom.insertHTML(b.renderMain(c), "beforeEnd", b._getString());
        a = baidu.g(c).lastChild;
        if (b.title) {
            a.title = b.title
        }
        b.disabled && b.setState("disabled");
        b.dispatchEvent("onload")
    },
    isDisabled: function() {
        var a = this,
        b = a.getId();
        return a.getState()["disabled"]
    },
    dispose: function() {
        var b = this,
        a = b.getBody();
        b.dispatchEvent("dispose");
        baidu.each(b._allEventsName,
        function(d, c) {
            a["on" + d] = null
        });
        baidu.dom.remove(a);
        b.dispatchEvent("ondispose");
        baidu.lang.Class.prototype.dispose.call(b)
    },
    disable: function() {
        var b = this,
        a = b.getBody();
        b.dispatchEvent("ondisable", {
            element: a
        })
    },
    enable: function() {
        var a = this;
        body = a.getBody();
        a.dispatchEvent("onenable", {
            element: body
        })
    },
    fire: function(a, c) {
        var b = this,
        a = a.toLowerCase();
        if (b.getState()["disabled"]) {
            return
        }
        b._fireEvent(a, null, null, c)
    },
    update: function(a) {
        var b = this;
        baidu.extend(b, a);
        a.content && (b.getBody().innerHTML = a.content);
        b.dispatchEvent("onupdate")
    }
});
baidu.ui.Button.register(function(a) {
    if (!a.capture) {
        return
    }
    a.addEventListener("load",
    function() {
        var b = a.getBody(),
        c = baidu.fn.bind(function(f) {
            var g = baidu.event.getTarget(f);
            if (g != b && !baidu.dom.contains(b, g) && a.getState()["press"]) {
                a.fire("mouseout", f)
            }
        }),
        d = function(f) {
            if (!a.getState()["press"]) {
                a.fire("mouseout", f)
            }
        };
        b.onmouseout = null;
        a.on(b, "mouseout", d);
        a.on(document, "mouseup", c)
    })
});
baidu.lang.isBoolean = function(a) {
    return typeof a === "boolean"
};
baidu.ui.Button.register(function(a) {
    if (!a.poll) {
        return
    }
    baidu.lang.isBoolean(a.poll) && (a.poll = {});
    a.addEventListener("mousedown",
    function(b) {
        var d = 0,
        c = a.poll.interval || 100,
        f = a.poll.time || 0; (function() {
            if (a.getState()["press"]) {
                d++>f && a.onmousedown && a.onmousedown();
                a.poll.timeOut = setTimeout(arguments.callee, c)
            }
        })()
    });
    a.addEventListener("dispose",
    function() {
        if (a.poll.timeOut) {
            a.disable();
            window.clearTimeout(a.poll.timeOut)
        }
    })
});
baidu.page = baidu.page || {};
baidu.page.getScrollTop = function() {
    var a = document;
    return window.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop
};
baidu.page.getScrollLeft = function() {
    var a = document;
    return window.pageXOffset || a.documentElement.scrollLeft || a.body.scrollLeft
}; (function() {
    baidu.page.getMousePosition = function() {
        return {
            x: baidu.page.getScrollLeft() + a.x,
            y: baidu.page.getScrollTop() + a.y
        }
    };
    var a = {
        x: 0,
        y: 0
    };
    baidu.event.on(document, "onmousemove",
    function(b) {
        b = window.event || b;
        a.x = b.clientX;
        a.y = b.clientY
    })
})();
baidu.dom.getDocument = function(a) {
    a = baidu.dom.g(a);
    return a.nodeType == 9 ? a: a.ownerDocument || a.document
};
baidu.dom.getComputedStyle = function(b, a) {
    b = baidu.dom._g(b);
    var d = baidu.dom.getDocument(b),
    c;
    if (d.defaultView && d.defaultView.getComputedStyle) {
        c = d.defaultView.getComputedStyle(b, null);
        if (c) {
            return c[a] || c.getPropertyValue(a)
        }
    }
    return ""
};
baidu.dom._styleFixer = baidu.dom._styleFixer || {};
baidu.dom._styleFilter = baidu.dom._styleFilter || [];
baidu.dom._styleFilter.filter = function(b, f, g) {
    for (var a = 0,
    d = baidu.dom._styleFilter,
    c; c = d[a]; a++) {
        if (c = c[g]) {
            f = c(b, f)
        }
    }
    return f
};
baidu.string.toCamelCase = function(a) {
    if (a.indexOf("-") < 0 && a.indexOf("_") < 0) {
        return a
    }
    return a.replace(/[-_][^-_]/g,
    function(b) {
        return b.charAt(1).toUpperCase()
    })
};
baidu.dom.getStyle = function(c, b) {
    var f = baidu.dom;
    c = f.g(c);
    b = baidu.string.toCamelCase(b);
    var d = c.style[b] || (c.currentStyle ? c.currentStyle[b] : "") || f.getComputedStyle(c, b);
    if (!d) {
        var a = f._styleFixer[b];
        if (a) {
            d = a.get ? a.get(c) : baidu.dom.getStyle(c, a)
        }
    }
    if (a = f._styleFilter) {
        d = a.filter(b, d, "get")
    }
    return d
};
baidu.getStyle = baidu.dom.getStyle;
baidu.dom.getPosition = function(a) {
    a = baidu.dom.g(a);
    var k = baidu.dom.getDocument(a),
    d = baidu.browser,
    h = baidu.dom.getStyle,
    c = d.isGecko > 0 && k.getBoxObjectFor && h(a, "position") == "absolute" && (a.style.top === "" || a.style.left === ""),
    i = {
        left: 0,
        top: 0
    },
    g = (d.ie && !d.isStrict) ? k.body: k.documentElement,
    l,
    b;
    if (a == g) {
        return i
    }
    if (a.getBoundingClientRect) {
        b = a.getBoundingClientRect();
        i.left = Math.floor(b.left) + Math.max(k.documentElement.scrollLeft, k.body.scrollLeft);
        i.top = Math.floor(b.top) + Math.max(k.documentElement.scrollTop, k.body.scrollTop);
        i.left -= k.documentElement.clientLeft;
        i.top -= k.documentElement.clientTop;
        var j = k.body,
        m = parseInt(h(j, "borderLeftWidth")),
        f = parseInt(h(j, "borderTopWidth"));
        if (d.ie && !d.isStrict) {
            i.left -= isNaN(m) ? 2 : m;
            i.top -= isNaN(f) ? 2 : f
        }
    } else {
        l = a;
        do {
            i.left += l.offsetLeft;
            i.top += l.offsetTop;
            if (d.isWebkit > 0 && h(l, "position") == "fixed") {
                i.left += k.body.scrollLeft;
                i.top += k.body.scrollTop;
                break
            }
            l = l.offsetParent
        } while ( l && l != a );
        if (d.opera > 0 || (d.isWebkit > 0 && h(a, "position") == "absolute")) {
            i.top -= k.body.offsetTop
        }
        l = a.offsetParent;
        while (l && l != k.body) {
            i.left -= l.scrollLeft;
            if (!d.opera || l.tagName != "TR") {
                i.top -= l.scrollTop
            }
            l = l.offsetParent
        }
    }
    return i
};
baidu.event.preventDefault = function(a) {
    if (a.preventDefault) {
        a.preventDefault()
    } else {
        a.returnValue = false
    }
}; (function() {
    var n, m, h, f, q, i, t, a, p, g = baidu.lang.isFunction,
    d, k, c;
    baidu.dom.drag = function(v, u) {
        p = a = null;
        if (! (n = baidu.dom.g(v))) {
            return false
        }
        m = baidu.object.extend({
            autoStop: true,
            capture: true,
            interval: 16,
            handler: n
        },
        u);
        k = baidu.dom.getPosition(n.offsetParent);
        c = baidu.dom.getPosition(n);
        if (baidu.getStyle(n, "position") == "absolute") {
            q = c.top - (n.offsetParent == document.body ? 0 : k.top);
            i = c.left - (n.offsetParent == document.body ? 0 : k.left)
        } else {
            q = parseFloat(baidu.getStyle(n, "top")) || -parseFloat(baidu.getStyle(n, "bottom")) || 0;
            i = parseFloat(baidu.getStyle(n, "left")) || -parseFloat(baidu.getStyle(n, "right")) || 0
        }
        if (m.mouseEvent) {
            h = baidu.page.getScrollLeft() + m.mouseEvent.clientX;
            f = baidu.page.getScrollTop() + m.mouseEvent.clientY
        } else {
            var w = baidu.page.getMousePosition();
            h = w.x;
            f = w.y
        }
        m.autoStop && baidu.event.on(m.handler, "mouseup", o);
        m.autoStop && baidu.event.on(window, "mouseup", o);
        baidu.event.on(document, "selectstart", j);
        if (m.capture && m.handler.setCapture) {
            m.handler.setCapture()
        } else {
            if (m.capture && window.captureEvents) {
                window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
            }
        }
        t = document.body.style.MozUserSelect;
        document.body.style.MozUserSelect = "none";
        if (g(m.ondragstart)) {
            m.ondragstart(n, m)
        }
        d = setInterval(b, m.interval);
        return {
            stop: o,
            update: l
        }
    };
    function l(u) {
        baidu.extend(m, u)
    }
    function o() {
        clearInterval(d);
        if (m.capture && m.handler.releaseCapture) {
            m.handler.releaseCapture()
        } else {
            if (m.capture && window.releaseEvents) {
                window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
            }
        }
        document.body.style.MozUserSelect = t;
        baidu.event.un(document, "selectstart", j);
        m.autoStop && baidu.event.un(m.handler, "mouseup", o);
        m.autoStop && baidu.event.un(window, "mouseup", o);
        if (g(m.ondragend)) {
            m.ondragend(n, m)
        }
    }
    function b(y) {
        var u = m.range,
        x = baidu.page.getMousePosition(),
        v = i + x.x - h,
        w = q + x.y - f;
        if (typeof u == "object" && u && u.length == 4) {
            v = Math.max(u[3], v);
            v = Math.min(u[1] - n.offsetWidth, v);
            w = Math.max(u[0], w);
            w = Math.min(u[2] - n.offsetHeight, w)
        }
        n.style.top = w + "px";
        n.style.left = v + "px";
        if ((a !== v || p !== w) && (a !== null || p !== null)) {
            if (g(m.ondrag)) {
                m.ondrag(n, m)
            }
        }
        a = v;
        p = w
    }
    function j(u) {
        return baidu.event.preventDefault(u, false)
    }
})();
baidu.dom.setStyle = function(c, b, d) {
    var f = baidu.dom,
    a;
    c = f.g(c);
    b = baidu.string.toCamelCase(b);
    if (a = f._styleFilter) {
        d = a.filter(b, d, "set")
    }
    a = f._styleFixer[b]; (a && a.set) ? a.set(c, d) : (c.style[a || b] = d);
    return c
};
baidu.setStyle = baidu.dom.setStyle;
baidu.dom.draggable = function(b, l) {
    l = baidu.object.extend({
        toggle: function() {
            return true
        }
    },
    l || {});
    l.autoStop = true;
    b = baidu.dom.g(b);
    l.handler = l.handler || b;
    var a, j = ["ondragstart", "ondrag", "ondragend"],
    c = j.length - 1,
    d,
    k,
    g = {
        dispose: function() {
            k && k.stop();
            baidu.event.un(l.handler, "onmousedown", h);
            baidu.lang.Class.prototype.dispose.call(g)
        }
    },
    f = this;
    if (a = baidu.dom.ddManager) {
        for (; c >= 0; c--) {
            d = j[c];
            l[d] = (function(i) {
                var m = l[i];
                return function() {
                    baidu.lang.isFunction(m) && m.apply(f, arguments);
                    a.dispatchEvent(i, {
                        DOM: b
                    })
                }
            })(d)
        }
    }
    if (b) {
        function h(m) {
            var i = l.mouseEvent = window.event || m;
            if (i.button > 1 || (baidu.lang.isFunction(l.toggle) && !l.toggle())) {
                return
            }
            if (baidu.dom.getStyle(b, "position") == "static") {
                baidu.dom.setStyle(b, "position", "relative")
            }
            if (baidu.lang.isFunction(l.onbeforedragstart)) {
                l.onbeforedragstart(b)
            }
            k = baidu.dom.drag(b, l);
            g.stop = k.stop;
            g.update = k.update;
            baidu.event.preventDefault(i)
        }
        baidu.event.on(l.handler, "onmousedown", h)
    }
    return {
        cancel: function() {
            g.dispose()
        }
    }
};
baidu.ui.Slider = baidu.ui.createUI(function(a) {
    var b = this;
    b.range = b.range || [b.min, b.max]
}).extend({
    layout: "horizontal",
    uiType: "slider",
    tplBody: '<div id="#{id}" class="#{class}" onmousedown="#{mousedown}" style="position:relative;">#{thumb}</div>',
    tplThumb: '<div id="#{thumbId}" class="#{thumbClass}" style="position:absolute;"></div>',
    value: 0,
    min: 0,
    max: 100,
    disabled: false,
    _dragOpt: {},
    _axis: {
        horizontal: {
            mousePos: "x",
            pos: "left",
            size: "width",
            clientSize: "clientWidth",
            offsetSize: "offsetWidth"
        },
        vertical: {
            mousePos: "y",
            pos: "top",
            size: "height",
            clientSize: "clientHeight",
            offsetSize: "offsetHeight"
        }
    },
    getString: function() {
        var a = this;
        return baidu.format(a.tplBody, {
            id: a.getId(),
            "class": a.getClass(),
            mousedown: a.getCallRef() + "._mouseDown(event)",
            thumb: baidu.format(a.tplThumb, {
                thumbId: a.getId("thumb"),
                thumbClass: a.getClass("thumb")
            })
        })
    },
    _mouseDown: function(h) {
        var f = this,
        d = f._axis[f.layout],
        a = baidu.page.getMousePosition(),
        c = baidu.dom.getPosition(f.getBody()),
        b = f.getThumb(),
        g = baidu.event.getTarget(h);
        if (g == b || baidu.dom.contains(b, g) || f.disabled) {
            return
        }
        f._calcValue(a[d.mousePos] - c[d.pos] - b[d.offsetSize] / 2);
        f.update();
        f.dispatchEvent("slideclick")
    },
    render: function(b) {
        var a = this;
        if (!b) {
            return
        }
        baidu.dom.insertHTML(a.renderMain(b), "beforeEnd", a.getString());
        a._createThumb();
        a.update();
        a.dispatchEvent("onload")
    },
    _createThumb: function() {
        var b = this,
        a;
        b._dragOpt = {
            ondragend: function() {
                b.dispatchEvent("slidestop")
            },
            ondragstart: function() {
                b.dispatchEvent("slidestart")
            },
            ondrag: function() {
                var d = b._axis[b.layout],
                c = b.getThumb().style[d.pos];
                b._calcValue(parseInt(c));
                b.dispatchEvent("slide")
            },
            range: [0, 0, 0, 0]
        };
        b._updateDragRange();
        a = baidu.dom.draggable(b.getThumb(), b._dragOpt);
        b.addEventListener("dispose",
        function() {
            a.cancel()
        })
    },
    _updateDragRange: function(g) {
        var f = this,
        d = f._axis[f.layout],
        b = g || f.range,
        c = f._dragOpt.range,
        a = f.getThumb();
        b = [Math.max(Math.min(b[0], f.max), f.min), Math.max(Math.min(b[1], f.max), f.min)];
        if (f.layout.toLowerCase() == "horizontal") {
            c[1] = f._parseValue(b[1], "fix") + a[d.offsetSize];
            c[3] = f._parseValue(b[0], "fix");
            c[2] = a.clientHeight
        } else {
            c[0] = f._parseValue(b[0], "fix");
            c[2] = f._parseValue(b[1], "fix") + a[d.offsetSize];
            c[1] = a.clientWidth
        }
    },
    update: function(b) {
        var d = this,
        c = d._axis[d.layout],
        a = d.getBody();
        b = b || {};
        baidu.object.extend(d, b);
        d._updateDragRange();
        d._adjustValue();
        if (d.dispatchEvent("beforesliderto", {
            drop: b.drop
        })) {
            d.getThumb().style[c.pos] = d._parseValue(d.value, "pix") + "px";
            d.dispatchEvent("update")
        }
    },
    _adjustValue: function() {
        var b = this,
        a = b.range;
        b.value = Math.max(Math.min(b.value, a[1]), a[0])
    },
    _calcValue: function(b) {
        var a = this;
        a.value = a._parseValue(b, "value");
        a._adjustValue()
    },
    _parseValue: function(d, b) {
        var c = this,
        a = c._axis[c.layout];
        len = c.getBody()[a.clientSize] - c.getThumb()[a.offsetSize];
        if (b == "value") {
            d = (c.max - c.min) / len * d + c.min
        } else {
            d = Math.round(len / (c.max - c.min) * (d - c.min))
        }
        return d
    },
    getValue: function() {
        return this.value
    },
    getTarget: function() {
        return baidu.g(this.targetId)
    },
    getThumb: function() {
        return baidu.g(this.getId("thumb"))
    },
    disable: function() {
        var a = this;
        a.disabled = true;
        a._updateDragRange([a.value, a.value])
    },
    enable: function() {
        var a = this;
        a.disabled = false;
        a._updateDragRange(a.range)
    },
    dispose: function() {
        var a = this;
        a.dispatchEvent("dispose");
        baidu.dom.remove(a.getId());
        a.dispatchEvent("ondispose");
        baidu.lang.Class.prototype.dispose.call(a)
    }
});
baidu.dom.hide = function(a) {
    a = baidu.dom.g(a);
    a.style.display = "none";
    return a
};
baidu.hide = baidu.dom.hide;
baidu.dom.show = function(a) {
    a = baidu.dom.g(a);
    a.style.display = "";
    return a
};
baidu.show = baidu.dom.show;
baidu.ui.ScrollBar = baidu.ui.createUI(function(a) {
    var b = this;
    b._scrollBarSize = {
        width: 0,
        height: 0
    }
}).extend({
    uiType: "scrollbar",
    tplDOM: '<div id="#{id}" class="#{class}"></div>',
    tplThumb: '<div class="#{prev}"></div><div class="#{track}"></div><div class="#{next}"></div>',
    value: 0,
    dimension: 10,
    orientation: "vertical",
    step: 10,
    _axis: {
        horizontal: {
            size: "width",
            unSize: "height",
            offsetSize: "offsetWidth",
            unOffsetSize: "offsetHeight",
            clientSize: "clientWidth",
            scrollPos: "scrollLeft",
            scrollSize: "scrollWidth"
        },
        vertical: {
            size: "height",
            unSize: "width",
            offsetSize: "offsetHeight",
            unOffsetSize: "offsetWidth",
            clientSize: "clientHeight",
            scrollPos: "scrollTop",
            scrollSize: "scrollHeight"
        }
    },
    getThumbString: function() {
        var a = this;
        return baidu.string.format(a.tplThumb, {
            prev: a.getClass("thumb-prev"),
            track: a.getClass("thumb-track"),
            next: a.getClass("thumb-next")
        })
    },
    render: function(b) {
        var a = this;
        if (!b || a.getMain()) {
            return
        }
        baidu.dom.insertHTML(a.renderMain(b), "beforeEnd", baidu.string.format(a.tplDOM, {
            id: a.getId(),
            "class": a.getClass()
        }));
        a._renderUI();
        a.dispatchEvent("load")
    },
    _renderUI: function() {
        var i = this,
        f = i._axis[i.orientation],
        a = i.getBody(),
        h,
        g,
        d;
        function b(j) {
            return {
                classPrefix: i.classPrefix + "-" + j,
                skin: i.skin ? i.skin + "-" + j: "",
                poll: {
                    time: 4
                },
                onmousedown: function() {
                    i._basicScroll(j)
                },
                element: a,
                autoRender: true
            }
        }
        h = i._prev = new baidu.ui.Button(b("prev"));
        baidu.dom.insertHTML(a, "beforeEnd", baidu.string.format(i.tplDOM, {
            id: i.getId("track"),
            "class": i.getClass("track")
        }));
        d = i._next = new baidu.ui.Button(b("next"));
        function c(j) {
            i.dispatchEvent("scroll", {
                value: Math.round(j.target.getValue())
            })
        }
        g = i._slider = new baidu.ui.Slider({
            classPrefix: i.classPrefix + "-slider",
            skin: i.skin ? i.skin + "-slider": "",
            layout: i.orientation,
            onslide: c,
            onslideclick: c,
            element: baidu.dom.g(i.getId("track")),
            autoRender: true
        });
        i._scrollBarSize[f.unSize] = d.getBody()[f.unOffsetSize];
        i._thumbButton = new baidu.ui.Button({
            classPrefix: i.classPrefix + "-thumb-btn",
            skin: i.skin ? i.skin + "-thumb-btn": "",
            content: i.getThumbString(),
            capture: true,
            element: g.getThumb(),
            autoRender: true
        });
        i.flushUI(i.value, i.dimension);
        i._registMouseWheelEvt(i.getMain())
    },
    flushUI: function(k, f) {
        var j = this,
        d = j._axis[j.orientation],
        h = j._prev.getBody()[d.offsetSize] + j._next.getBody()[d.offsetSize],
        g = j.getBody(),
        b = j._slider,
        a = b.getThumb(),
        c;
        baidu.dom.hide(g);
        c = j.getMain()[d.clientSize];
        j._scrollBarSize[d.size] = (c <= 0) ? h: c;
        b.getMain().style[d.size] = (c <= 0 ? 0 : c - h) + "px";
        a.style[d.size] = Math.max(Math.min(f, 100), 0) + "%";
        if (T.browser.ie == 6) {
            var i = (c * f / 100);
            if (i > 0 && i < 12) {
                a.style.height = "12px"
            }
        }
        baidu.dom.show(g);
        j._scrollTo(k)
    },
    _scrollTo: function(a) {
        this._slider.update({
            value: a
        })
    },
    scrollTo: function(b) {
        var a = this;
        a._scrollTo(b);
        a.dispatchEvent("scroll", {
            value: b
        })
    },
    _basicScroll: function(b) {
        var a = this;
        a.scrollTo(Math.round(a._slider.getValue()) + (b == "prev" ? -a.step: a.step))
    },
    _onMouseWheelHandler: function(a) {
        var c = this,
        d = c.target,
        a = a || window.event,
        b = a.detail || -a.wheelDelta;
        baidu.event.preventDefault(a);
        c._basicScroll(b > 0 ? "next": "prev")
    },
    _registMouseWheelEvt: function(c) {
        var b = this,
        d = function() {
            var f = navigator.userAgent.toLowerCase(),
            g = /(webkit)/.exec(f) || /(opera)/.exec(f) || /(msie)/.exec(f) || f.indexOf("compatible") < 0 && /(mozilla)/.exec(f) || [];
            return g[1] == "mozilla" ? "DOMMouseScroll": "mousewheel"
        },
        a = {
            target: c,
            evtName: d(),
            handler: baidu.fn.bind("_onMouseWheelHandler", b)
        };
        baidu.event.on(a.target, a.evtName, a.handler);
        b.addEventListener("dispose",
        function() {
            baidu.event.un(a.target, a.evtName, a.handler)
        })
    },
    setVisible: function(b) {
        var a = "";
        if (baidu.browser.ie == 6) {
            a = "inline"
        }
        this.getMain().style.display = b ? a: "none"
    },
    isVisible: function() {
        return this.getMain().style.display != "none"
    },
    getSize: function() {
        return this._scrollBarSize
    },
    update: function(a) {
        var b = this;
        b.dispatchEvent("beforeupdate");
        baidu.object.extend(b, a);
        b.flushUI(b.value, b.dimension);
        b.dispatchEvent("update")
    },
    dispose: function() {
        var a = this;
        a.dispatchEvent("dispose");
        a._prev.dispose();
        a._thumbButton.dispose();
        a._slider.dispose();
        a._next.dispose();
        baidu.dom.remove(a.getMain());
        baidu.lang.Class.prototype.dispose.call(a)
    }
});
baidu.ui.ScrollBar.register(function(a) {
    if (!a.container) {
        return
    }
    a.addEventListeners({
        load: function() {
            a.update();
            if (a.orientation == "vertical") {
                a._registMouseWheelEvt(a.getContainer())
            }
        },
        beforeupdate: function() {
            var b = this;
            axis = b._axis[b.orientation],
            container = b.getContainer();
            if (!container) {
                return
            }
            b.dimension = Math.round(container[axis.clientSize] / container[axis.scrollSize] * 100);
            b.value = container[axis.scrollSize] - container[axis.clientSize];
            b.value > 0 && (b.value = Math.round(container[axis.scrollPos] / (container[axis.scrollSize] - container[axis.clientSize]) * 100))
        },
        scroll: function(c) {
            var b = a.getContainer(),
            d = a._axis[a.orientation];
            b[d.scrollPos] = c.value / 100 * (b[d.scrollSize] - b[d.clientSize])
        }
    })
});
baidu.object.extend(baidu.ui.ScrollBar.prototype, {
    getContainer: function() {
        return baidu.dom.g(this.container)
    }
});
baidu.dom._styleFixer["float"] = baidu.browser.ie ? "styleFloat": "cssFloat";
baidu.ui.ScrollPanel = baidu.ui.createUI(function(a) {
    if (a.autoUpdate) {
        this.autoUpdate = true
    }
}).extend({
    uiType: "scrollpanel",
    tplDOM: '<div id="#{id}" class="#{class}">#{body}</div>',
    overflow: "auto",
    _scrollBarSize: 0,
    _yVisible: false,
    _xVisible: false,
    _axis: {
        y: {
            size: "height",
            unSize: "width",
            unScrollSize: "scrollWidth",
            unClientSize: "clientWidth",
            offsetSize: "offsetHeight"
        },
        x: {
            size: "width",
            unSize: "height",
            unScrollSize: "scrollHeight",
            unClientSize: "clientHeight",
            offsetSize: "offsetWidth"
        }
    },
    setMargin: function() {
        var b = this,
        c = b.margin || [0, 0, 0, 0];
        for (var a = 0; a < c.length; a++) {
            if (isNaN(c[a])) {
                c[a] = 0
            }
        }
        b.margin = c
    },
    autoUpdate: true,
    updateTimeout: true,
    getString: function() {
        var a = this,
        b = baidu.string.format(a.tplDOM, {
            id: a.getId("panel"),
            "class": a.getClass("panel")
        });
        b = baidu.string.format(a.tplDOM, {
            id: a.getId(),
            "class": a.getClass(),
            body: b
        });
        return baidu.string.format(a.tplDOM, {
            id: a.getId("main"),
            "class": a.getClass("main"),
            body: b
        })
    },
    render: function(b) {
        if (window.isPrint) {
            return
        }
        var a = this;
        baidu.ui.ScrollPanel.all.push(this);
        this._scrollPanelId = baidu.ui.ScrollPanel.all.length;
        a.setMargin();
        a.target = b;
        if (!b || a.getMain()) {
            return
        }
        a.getTarget().style.overflow = "hidden";
        baidu.dom.insertHTML(a.getTarget(), "afterEnd", a.getString());
        a.renderMain(a.getId("main"));
        a._renderUI();
        a._switchCssEvt(a.getMain())
    },
    _switchCssEvt: function(b) {
        var a = this;
        T.on(b, "mouseover",
        function() {
            a._focusScrollBar()
        });
        T.on(b, "mouseout",
        function() {
            a._blurScrollBar()
        })
    },
    _focusScrollBar: function() {
        var d = this;
        if (T.browser.ie == 6) {
            document.execCommand("BackgroundImageCache", false, true)
        }
        var f = d.getScrollBar("y").element.children[0];
        T.dom.setStyle(f, "background-position", "-3px center");
        var a = d.getScrollBar("y")._thumbButton.getBody();
        var c = a.children[0];
        var b = a.children[2];
        T.dom.setStyle(a, "background-position", "-24px center");
        T.dom.setStyle(c, "background-position", "-36px -11px");
        T.dom.setStyle(b, "background-position", "-36px -15px")
    },
    _blurScrollBar: function() {
        var d = this;
        var f = d.getScrollBar("y").element.children[0];
        T.dom.setStyle(f, "background-position", "3px 0");
        var a = d.getScrollBar("y")._thumbButton.getBody();
        var c = a.children[0];
        var b = a.children[2];
        T.dom.setStyle(a, "background-position", "-12px center");
        T.dom.setStyle(c, "background-position", "-36px 0");
        T.dom.setStyle(b, "background-position", "-36px -4px")
    },
    _renderUI: function() {
        var c = this,
        a = c.getMain(),
        b = c.getPanel(),
        g = c.getTarget(),
        f = c.skin || "";
        a.style.width = g.offsetWidth + "px";
        if (g.style.width == "100%") {
            g.style.width = g.offsetWidth + "px"
        }
        b.appendChild(g);
        function d(l) {
            var i = c.getId("overflow-" + l),
            j = c._axis[l],
            h = c.getPanel(),
            k;
            baidu.dom.insertHTML(h, (l == "y" ? "afterEnd": "beforeEnd"), baidu.string.format(c.tplDOM, {
                id: i,
                "class": c.getClass("overflow-" + l)
            }));
            i = baidu.dom.g(i);
            if ("y" == l) {
                baidu.dom.setStyle(h, "float", "left");
                baidu.dom.setStyle(i, "float", "left");
                baidu.dom.setStyle(i, "display", "inline")
            }
            c["_" + l + "Visible"] = true;
            k = c["_" + l + "Scrollbar"] = new baidu.ui.ScrollBar({
                skin: f + "scrollbar-" + l,
                orientation: l == "y" ? "vertical": "horizontal",
                container: c.container,
                element: i,
                autoRender: true
            });
            i.style[j.unSize] = k.getSize()[j.unSize] + "px";
            i.style.marginTop = c.margin[0] + "px";
            i.style.marginRight = c.margin[1] + "px";
            i.style.marginBottom = c.margin[2] + "px";
            i.style.marginLeft = c.margin[3] + "px";
            c._scrollBarSize = k.getSize()[j.unSize] + c.margin[1] + c.margin[3];
            k.setVisible(false)
        }
        if (c.overflow == "overflow-y" || c.overflow == "auto") {
            d("y")
        }
        if (c.overflow == "overflow-x" || c.overflow == "auto") {
            d("x")
        }
        c._smartVisible()
    },
    _smartVisible: function() {
        var b = this,
        a = {
            yshow: false,
            xshow: false
        };
        if (!b.getContainer()) {
            return
        }
        function c(h) {
            var j = b._axis[h],
            k = b["_" + h + "Scrollbar"],
            g = b.getContainer(),
            i = {};
            if (!k || !k.isVisible()) {
                g.style[j.unSize] = g[j.unClientSize] - b._scrollBarSize + "px"
            }
            i[j.unSize] = g[j.unClientSize];
            i["scroll" + j.unSize] = g[j.unScrollSize];
            return i
        }
        function f(h, i) {
            var j = b._axis[h],
            g = b.getContainer();
            if (!b["_" + h + "Visible"] || !i[h + "show"] || !b["_" + h + "Scrollbar"]) {
                g.style[j.unSize] = g[j.unClientSize] + b._scrollBarSize + "px"
            }
        }
        function d(h, j) {
            var k = b._axis[h],
            g = b.getContainer(),
            l = b["_" + h + "Scrollbar"],
            i = j[h + "show"];
            if (l) {
                l.getMain().style[k.size] = g[k.offsetSize] - b.margin[0] - b.margin[2] + "px";
                l.setVisible(b["_" + h + "Visible"] ? i: false);
                l.update()
            }
        }
        baidu.object.extend(a, c("y"));
        baidu.object.extend(a, c("x"));
        if (a.scrollwidth <= a.width + b._scrollBarSize && a.scrollheight <= a.height + b._scrollBarSize) {
            a.yshow = a.xshow = false
        } else {
            if (a.scrollwidth <= a.width && a.scrollheight > a.height + b._scrollBarSize) {
                a.yshow = true;
                a.xshow = false
            } else {
                if (a.scrollwidth > a.width + b._scrollBarSize && a.scrollheight <= a.height) {
                    a.yshow = false;
                    a.xshow = true
                } else {
                    a.yshow = a.xshow = true
                }
            }
        }
        f("y", a);
        f("x", a);
        d("y", a);
        d("x", a)
    },
    setVisible: function(b, c) {
        var a = this;
        if (c) {
            a["_" + c + "Visible"] = b
        } else {
            a._yVisible = a._xVisible = b
        }
        a._smartVisible()
    },
    isVisible: function(b) {
        var a = this;
        return a["_" + b + "Visible"]
    },
    getScrollBar: function(c) {
        var b = this,
        a = c ? b["_" + c + "Scrollbar"] : null;
        if (!a) {
            a = (b._yScrollbar && b._xScrollbar) ? [b._yScrollbar, b._xScrollbar] : (b._yScrollbar || b._xScrollbar)
        }
        return a
    },
    update: function(a) {
        if (window.isPrint) {
            return
        }
        var c = this;
        if (!c.isVisible) {
            return
        }
        baidu.object.extend(c, a);
        if (c.getMain() && !c.getMain().offsetWidth) {
            return
        }
        c._smartVisible();
        if (c.getMain() && c.getMain().style.display != "none") {
            c.getMain().style.height = c.getContainer().style.height;
            if (T.browser.ie && c.updateTimeout) {
                if (c.scrollPanelTimerHandler) {
                    window.clearTimeout(c.scrollPanelTimerHandler)
                }
                c.scrollPanelTimerHandler = window.setTimeout(function() {
                    c._smartVisible(true)
                },
                50)
            }
            var b = this.getScrollBar();
            var d = b.value;
            b.scrollTo(d)
        }
    },
    getPanel: function() {
        return baidu.dom.g(this.getId("panel"))
    },
    getTarget: function() {
        return baidu.dom.g(this.target)
    },
    getContainer: function() {
        return baidu.dom.g(this.container)
    },
    dispose: function() {
        var b = this,
        a = b._yScrollbar,
        c = b._xScrollbar;
        b.dispatchEvent("dispose");
        b.getMain().parentNode.appendChild(b.getTarget());
        if (a) {
            a.dispose()
        }
        if (c) {
            c.dispose()
        }
        T.un(b.getMain(), "mouseover");
        T.un(b.getMain(), "mouseout");
        baidu.dom.remove(b.getMain());
        baidu.lang.Class.prototype.dispose.call(b)
    }
});
baidu.ui.ScrollPanel.all = [];
T.on(window, "resize",
function() {
    setTimeout(function() {
        var c = baidu.ui.ScrollPanel.all;
        for (var b = 0; b < c.length; b++) {
            var a = c[b];
            if (a.autoUpdate) {
                a.update()
            }
        }
    },
    100)
});
baidu.swf.createHTML = function(v) {
    v = v || {};
    var l = baidu.swf.version,
    h = v.ver || "6.0.0",
    g, d, f, c, j, u, a = {},
    p = baidu.string.encodeHTML;
    for (c in v) {
        a[c] = v[c]
    }
    v = a;
    var n = v.vars,
    m = ["classid", "codebase", "id", "width", "height", "align"];
    v.align = v.align || "middle";
    v.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
    v.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
    v.movie = v.url || "";
    delete v.vars;
    delete v.url;
    if ("string" == typeof n) {
        v.flashvars = n
    } else {
        var q = [];
        for (c in n) {
            u = n[c];
            q.push(c + "=" + encodeURIComponent(u))
        }
        v.flashvars = q.join("&")
    }
    var o = ["<object "];
    for (f = 0, j = m.length; f < j; f++) {
        u = m[f];
        o.push(" ", u, '="', p(v[u]), '"')
    }
    o.push(">");
    var b = {
        wmode: 1,
        scale: 1,
        quality: 1,
        play: 1,
        loop: 1,
        menu: 1,
        salign: 1,
        bgcolor: 1,
        base: 1,
        allowscriptaccess: 1,
        allownetworking: 1,
        allowfullscreen: 1,
        seamlesstabbing: 1,
        devicefont: 1,
        swliveconnect: 1,
        flashvars: 1,
        movie: 1
    };
    for (c in v) {
        u = v[c];
        c = c.toLowerCase();
        if (b[c] && (u || u === false || u === 0)) {
            o.push('<param name="' + c + '" value="' + p(u) + '" />')
        }
    }
    v.src = v.movie;
    v.name = v.id;
    delete v.id;
    delete v.movie;
    delete v.classid;
    delete v.codebase;
    v.type = "application/x-shockwave-flash";
    v.pluginspage = "http://www.macromedia.com/go/getflashplayer";
    o.push("<embed");
    var t;
    for (c in v) {
        u = v[c];
        if (u || u === false || u === 0) {
            if ((new RegExp("^salign\x24", "i")).test(c)) {
                t = u;
                continue
            }
            o.push(" ", c, '="', p(u), '"')
        }
    }
    if (t) {
        o.push(' salign="', p(t), '"')
    }
    o.push("></embed></object>");
    return o.join("")
};
baidu.ajax = baidu.ajax || {};
baidu.fn = baidu.fn || {};
baidu.fn.blank = function() {};
baidu.ajax.request = function(g, k) {
    var d = k || {},
    t = d.data || "",
    h = !(d.async === false),
    f = d.username || "",
    a = d.password || "",
    c = (d.method || "GET").toUpperCase(),
    b = d.headers || {},
    j = d.timeout || 0,
    l = {},
    o,
    u,
    i;
    function n() {
        if (i.readyState == 4) {
            try {
                var w = i.status
            } catch(v) {
                q("failure");
                return
            }
            q(w);
            if ((w >= 200 && w < 300) || w == 304 || w == 1223) {
                q("success")
            } else {
                q("failure")
            }
            window.setTimeout(function() {
                i.onreadystatechange = baidu.fn.blank;
                if (h) {
                    i = null
                }
            },
            0)
        }
    }
    function m() {
        if (window.ActiveXObject) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch(v) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch(v) {}
            }
        }
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest()
        }
    }
    function q(x) {
        x = "on" + x;
        var w = l[x],
        y = baidu.ajax[x];
        if (w) {
            if (o) {
                clearTimeout(o)
            }
            if (x != "onsuccess") {
                w(i)
            } else {
                try {
                    i.responseText
                } catch(v) {
                    return w(i)
                }
                w(i, i.responseText)
            }
        } else {
            if (y) {
                if (x == "onsuccess") {
                    return
                }
                y(i)
            }
        }
    }
    for (u in d) {
        l[u] = d[u]
    }
    b["X-Requested-With"] = "XMLHttpRequest";
    try {
        i = m();
        if (c == "GET") {
            if (t) {
                g += (g.indexOf("?") >= 0 ? "&": "?") + t;
                t = null
            }
            if (d.noCache) {
                g += (g.indexOf("?") >= 0 ? "&": "?") + "b" + ( + new Date) + "=1"
            }
        }
        if (f) {
            i.open(c, g, h, f, a)
        } else {
            i.open(c, g, h)
        }
        if (h) {
            i.onreadystatechange = n
        }
        if (c == "POST") {
            i.setRequestHeader("Content-Type", (b["Content-Type"] || "application/x-www-form-urlencoded"))
        }
        for (u in b) {
            if (b.hasOwnProperty(u)) {
                i.setRequestHeader(u, b[u])
            }
        }
        q("beforerequest");
        if (j) {
            o = setTimeout(function() {
                i.onreadystatechange = baidu.fn.blank;
                i.abort();
                q("timeout")
            },
            j)
        }
        i.send(t);
        if (!h) {
            n()
        }
    } catch(p) {
        q("failure")
    }
    return i
};
function Animation() {}
Animation.INFINITE = "INFINITE";
Animation.prototype.build = function(d) {
    var c = this;
    var a = {
        duration: 1000,
        fps: 30,
        delay: 0,
        transition: Transitions.linear,
        onStop: function() {}
    };
    this._anis = [];
    if (d) {
        for (var b in d) {
            a[b] = d[b]
        }
    }
    if (typeof a.delay == "number") {
        setTimeout(function() {
            c.start()
        },
        a.delay)
    } else {
        if (a.delay != Animation.INFINITE) {
            this.start()
        }
    }
    this._opts = a
};
Animation.prototype.start = function() {
    this._beginTime = (new Date).getTime();
    this._endTime = this._beginTime + this._opts.duration;
    this._launch()
};
Animation.prototype.add = function(a) {
    this._anis.push(a)
};
Animation.prototype._launch = function() {
    var c = this;
    var a = (new Date).getTime();
    if (a >= c._endTime) {
        c._opts.render(c._opts.transition(1));
        c._opts.finish();
        if (c._anis.length > 0) {
            var b = c._anis[0];
            b._anis = [].concat(c._anis.slice(1));
            b.start()
        }
        return
    }
    c.schedule = c._opts.transition((a - c._beginTime) / c._opts.duration);
    c._opts.render(c.schedule);
    if (!c.terminative) {
        c._timer = setTimeout(function() {
            c._launch()
        },
        1000 / c._opts.fps)
    }
};
Animation.prototype.stop = function(b) {
    this.terminative = true;
    for (var a = 0; a < this._anis.length; a++) {
        this._anis[a].stop();
        this._anis[a] = null
    }
    this._anis.length = 0;
    if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null
    }
    this._opts.onStop(this.schedule);
    if (b) {
        this._endTime = this._beginTime;
        this._launch()
    }
};
Animation.prototype.cancel = function() {
    if (this._timer) {
        clearTimeout(this._timer)
    }
    this._endTime = this._beginTime;
    this.schedule = 0
};
Animation.prototype.setFinishCallback = function(a) {
    if (this._anis.length > 0) {
        this._anis[this._anis.length - 1]._opts.finish = a
    } else {
        this._opts.finish = a
    }
};
var Transitions = {
    linear: function(a) {
        return a
    },
    reverse: function(a) {
        return 1 - a
    },
    easeInQuad: function(a) {
        return a * a
    },
    easeInCubic: function(a) {
        return Math.pow(a, 3)
    },
    easeOutQuad: function(a) {
        return - (a * (a - 2))
    },
    easeOutCubic: function(a) {
        return Math.pow((a - 1), 3) + 1
    },
    easeInOutQuad: function(a) {
        if (a < 0.5) {
            return a * a * 2
        } else {
            return - 2 * (a - 2) * a - 1
        }
        return
    },
    easeInOutCubic: function(a) {
        if (a < 0.5) {
            return Math.pow(a, 3) * 4
        } else {
            return Math.pow(a - 1, 3) * 4 + 1
        }
    },
    easeInOutSine: function(a) {
        return (1 - Math.cos(Math.PI * a)) / 2
    }
};
Transitions["ease-in"] = Transitions.easeInQuad;
Transitions["ease-out"] = Transitions.easeOutQuad;
var areaUID = "中国|1,安徽|23,福建|16,甘肃|6,广东|7,广西|17,贵州|24,海南|21,河北|25,黑龙江|2,河南|30,湖北|15,湖南|26,江苏|18,江西|31,吉林省|9,辽宁|19,内蒙古|22,宁夏|20,青海|11,山东|8,山西|10,陕西|27,四川|32,新疆|12,西藏|13,云南|28,浙江|29,北京|131,天津|332,石家庄|150,唐山|265,秦皇岛|148,邯郸|151,邢台|266,保定|307,张家口|264,承德|207,沧州|149,廊坊|191,衡水|208,太原|176,大同|355,阳泉|357,长治|356,晋城|290,朔州|237,晋中|238,运城|328,忻州|367,临汾|368,吕梁|327,呼和浩特|321,包头|229,乌海|123,赤峰|297,通辽|64,鄂尔多斯|283,呼伦贝尔|61,巴彦淖尔|169,乌兰察布|168,兴安盟|62,锡林郭勒盟|63,阿拉善盟|230,沈阳|58,大连|167,鞍山|320,抚顺|184,本溪|227,丹东|282,锦州|166,营口|281,阜新|59,辽阳|351,盘锦|228,铁岭|60,朝阳|280,葫芦岛|319,长春|53,吉林市|55,四平|56,辽源|183,通化|165,白山|57,松原|52,白城|51,延边朝鲜族自治州|54,哈尔滨|48,齐齐哈尔|41,鸡西|46,鹤岗|43,双鸭山|45,大庆|50,伊春|40,佳木斯|42,七台河|47,牡丹江|49,黑河|39,绥化|44,大兴安岭地区|38,上海|289,南京|315,无锡|317,徐州|316,常州|348,苏州|224,南通|161,连云港|347,淮安|162,盐城|223,扬州|346,镇江|160,泰州|276,宿迁|277,杭州|179,宁波|180,温州|178,嘉兴|334,湖州|294,绍兴|293,金华|333,衢州|243,舟山|245,台州|244,丽水|292,合肥|127,芜湖|129,蚌埠|126,淮南|250,马鞍山|358,淮北|253,铜陵|337,安庆|130,黄山|252,滁州|189,阜阳|128,宿州|370,巢湖|251,六安|298,亳州|188,池州|299,宣城|190,福州|300,厦门|194,莆田|195,三明|254,泉州|134,漳州|255,南平|133,龙岩|193,宁德|192,南昌|163,景德镇|225,萍乡|350,九江|349,新余|164,鹰潭|279,赣州|365,吉安|318,宜春|278,抚州|226,上饶|364,济南|288,青岛|236,淄博|354,枣庄|172,东营|174,烟台|326,潍坊|287,济宁|286,泰安|325,威海|175,日照|173,莱芜|124,临沂|234,德州|372,聊城|366,滨州|235,菏泽|353,郑州|268,开封|210,洛阳|153,平顶山|213,安阳|267,鹤壁|215,新乡|152,焦作|211,濮阳|209,许昌|155,漯河|344,三门峡|212,南阳|309,商丘|154,信阳|214,周口|308,驻马店|269,武汉|218,黄石|311,十堰|216,宜昌|270,襄樊|156,鄂州|122,荆门|217,孝感|310,荆州|157,黄冈|271,咸宁|362,随州|371,恩施土家族苗族自治州|373,仙桃|1713,潜江|1293,天门|2654,神农架林区|2734,长沙|158,株洲|222,湘潭|313,衡阳|159,邵阳|273,岳阳|220,常德|219,张家界|312,益阳|272,郴州|275,永州|314,怀化|363,娄底|221,湘西土家族苗族自治州|274,广州|257,韶关|137,深圳|340,珠海|140,汕头|303,佛山|138,江门|302,湛江|198,茂名|139,肇庆|338,惠州|301,梅州|141,汕尾|339,河源|200,阳江|199,清远|197,东莞|119,中山|187,潮州|201,揭阳|259,云浮|258,南宁|261,柳州|305,桂林|142,梧州|304,北海|295,防城港|204,钦州|145,贵港|341,玉林|361,百色|203,贺州|260,河池|143,来宾|202,崇左|144,海口|125,三亚|121,五指山|1644,琼海|2358,儋州|1215,文昌|2758,万宁|1216,东方|2634,定安|1214,屯昌|1641,澄迈|2757,临高|2033,白沙黎族自治|2359,昌江黎族自治|1642,乐东黎族自治|2032,陵水黎族自治|1643,保亭黎族苗族自治|1217,琼中黎族苗族自治|2031,重庆|132,成都|75,自贡|78,攀枝花|81,泸州|331,德阳|74,绵阳|240,广元|329,遂宁|330,内江|248,乐山|79,南充|291,眉山|77,宜宾|186,广安|241,达州|369,雅安|76,巴中|239,资阳|242,阿坝藏族羌族自治州|185,甘孜藏族自治州|73,凉山彝族自治州|80,贵阳|146,六盘水|147,遵义|262,安顺|263,铜仁地区|205,黔西南布依族苗族自治州|343,毕节地区|206,黔东南苗族侗族自治州|342,黔南布依族苗族自治州|306,昆明|104,曲靖|249,玉溪|106,保山|112,昭通|336,丽江|114,临沧|110,楚雄彝族自治州|105,红河哈尼族彝族自治州|107,文山壮族苗族自治州|177,普洱|108,西双版纳傣族自治州|109,大理白族自治州|111,德宏傣族景颇族自治州|116,怒江傈僳族自治州|113,迪庆藏族自治州|115,拉萨|100,昌都地区|99,山南地区|97,日喀则地区|102,那曲地区|101,阿里地区|103,林芝地区|98,西安|233,铜川|232,宝鸡|171,咸阳|323,渭南|170,延安|284,汉中|352,榆林|231,安康|324,商洛|285,兰州|36,嘉峪关|33,金昌|34,白银|35,天水|196,武威|118,张掖|117,平凉|359,酒泉|37,庆阳|135,定西|136,陇南|256,临夏回族自治州|182,甘南藏族自治州|247,西宁|66,海东地区|69,海北藏族自治州|67,黄南藏族自治州|70,海南藏族自治州|68,果洛藏族自治州|72,玉树藏族自治州|71,海西蒙古族藏族自治州|65,银川|360,石嘴山|335,吴忠|322,固原|246,中卫|181,乌鲁木齐|92,克拉玛依|95,吐鲁番地区|89,哈密地区|91,昌吉回族自治州|93,博尔塔拉蒙古自治州|88,巴音郭楞蒙古自治州|86,阿克苏地区|85,克孜勒苏柯尔克孜自治州|84,喀什地区|83,和田地区|82,伊犁哈萨克自治州|90,塔城地区|94,阿勒泰地区|96,石河子|770,阿拉尔|731,图木舒克|792,五家渠|789,香港特别行政区|2912,澳门特别行政区|2911".split(",");
var AID = []; (function() {
    for (var c = 0; c < areaUID.length; c++) {
        var b = areaUID[c].split("|");
        AID[b[0]] = b[1]
    }
})();
if (AID["中国"] != null) {
    AID["全国"] = AID["中国"]
}
if (typeof console == "undefined") {
    window.console = {};
    window.console.log = function() {}
}
window.onerror = function() {
    return false
};



var modelConfig = {
    MODEL_URL: MapConfig.smFlwCon + "./template/eis_y_car/map/component_c/",
    DATA_URL: "./template/eis_y_car/map/s.php?newmap=1&qt=",
	

	
    MAIN_BOX: "MapInfo",
    tpl: {},
    cityName: "全国",
    cityCode: AID["全国"],
    cityType: 0,
    upCityid: AID["全国"],
    supBus: 0,
    sup: 0,
    defalutCityCode: null,
    enableMapMove: true,
    level: {
        country: 4,
        province: 11,
        city: 12,
        area: 13
    },
    highLevel: 19
};
var CONST = {
    MapComplaintCenterURL: "http://192.168.1.135/"
};
var activeScript = window.activeScript = window.execScript ? window.execScript: window.eval;
var temp = {};
var mainAjax = new T.Ajax();
var subAjax = new T.Ajax();
var ModelMgr = {
    models: {},
    nowModel: null,
    run: function() {
        if (this.nowModel != null) {
            return
        }
        for (var a in this.models) {
            var b = this.models[a];
            this.nowModel = b.url;
			
            new Model(b.url, b.opts, b.key);
            return
        }
    },
    del: function(a) {
        delete this.models[a];
        this.nowModel = null;
        this.run()
    },
    register: function(a, b) {
        modelConfig.tpl[a] = b
    },
    mainModel: null
}; (function() {
    var f = 0;
    var b = 1;
    var a = 2;
    var c = 3;
    var d = {
        models: {},
        get: function(h, i) {
            if (!h) {
                return
            }
            if (!this.models[h]) {
                this.models[h] = {
                    url: h,
                    state: f
                }
            }
            var j = this,
            g = this.models[h],
            i = i || {};
            switch (g.state) {
            case a:
                j._execCBK(i.onsuccess);
                break;
            case c:
                j._execCBK(i.onfailure);
                break;
            case b:
                j._tryInterval(g, i);
                break;
            default:
                j._getScript(g, i);
                break
            }
        },
        _tryInterval: function(g, h) {
            if (!g) {
                return
            }
            var j = this;
            var i = window.setInterval(function() {
                switch (g.state) {
                case a:
                    window.clearInterval(i);
                    j._execCBK(h.onsuccess);
                    break;
                case c:
                    window.clearInterval(i);
                    j._execCBK(h.onfailure);
                    break
                }
            },
            500)
        },
        _getScript: function(g, h) {
            if (!g) {
                return
            }
            var i = this;
            this._setState(g, b, h);
            T.Ajax.get(g.url, {
                onsuccess: function(j) {
                    if (j.responseText) {
                        try {
                            activeScript(j.responseText);
                            i._initModel(g);
                            i._setState(g, a, h)
                        } catch(k) {
                            i._setState(g, c, h)
                        }
                    }
                },
                onfailure: function() {
                    i._setState(g, c, h)
                }
            })
        },
        _initModel: function(g) {
            if (g && g.url) {
                if (g.url.indexOf("ctrl") >= 0) {
                    initCtrls && initCtrls()
                }
                if (g.url.indexOf("pack") >= 0) {
                    initPacks && initPacks()
                }
            }
        },
        _setState: function(g, i, h) {
            if (!g || typeof(i) == "undefined") {
                return
            }
            g.state = i;
            switch (i) {
            case a:
                this._execCBK(h.onsuccess);
                break;
            case c:
                this._execCBK(h.onfailure);
                break;
            case b:
                this._execCBK(h.onloading);
                break
            }
        },
        _execCBK: function(g) {
            if (g && typeof g == "function") {
                g()
            }
        }
    };
    window.AsynLoader = d
})();
function go(a, d, b) {
    if (typeof d != "function" && a.indexOf("tpl") < 0) {
        var c = decodeURIComponent(getParam("?/" + a).wd);
        if (c && /卫星/.test(c)) {} else {
            window.GRControll && window.GRControll.clearBeforeSendAtBase()
        }
    }
    if (a.indexOf("bt&") > -1 || a.indexOf("bse&") > -1 || a.indexOf("nav&") > -1 || a.indexOf("nse&") > -1) {
        if (/&sy=\d(&f=.*?)?&/.test(a)) {
            a = a.replace(/&sy=\d(&f=.*?)?&/, "&");
            if (a.indexOf("bt&") > -1 || a.indexOf("bse&") > -1) {
                a += getSearchTranType("bus")
            } else {
                if (a.indexOf("nav&") > -1 || a.indexOf("nse&") > -1) {
                    a += getSearchTranType("nav")
                }
            }
        }
    }
    if (a.indexOf("nav&") != -1 || a.indexOf("nse&") != -1) {
        a += "&extinfo=63"
    }
    window.GRControll && window.GRControll.removeTip(T.g("GR_CustomTip1"));
    if ((d && d.dom) || typeof(d) == "function") {
        var g = ModelMgr.models;
        if (!ModelMgr.models[a]) {
            ModelMgr.models[a] = {
                url: a,
                opts: d,
                key: b
            };
            ModelMgr.run()
        }
        return
    }
    if (a.indexOf("bd&") != 0 && window.searchInViewCtrl) {
        window.searchInViewCtrl.exit();
        window.searchInViewCtrl.curKw = ""
    }
    if (typeof(sms) != "undefined") {
        try {
            sms.spop && sms.spop.visible && sms.spop.close()
        } catch(f) {}
    }
	
    new Model(a, d, b)
}
function Model(b, d, c) {
    T.lang.Class.call(this);
    this.key = c;
    this.stat = {};
    this.stat.begin = new Date().getTime();
    this.url = b;
    this.opts = d || {};
    this.opts.json = null;
    this.opts.tpl = null;
    this.queryString = null;
    this.modelType = null;
    this.dataUrl = null;
    this.tplUrl = null;
    this.modelObject = null;
    this.mainDiv = false;
    this.cityInfo = {};
    this.startCity = {
        name: modelConfig.cityName,
        code: modelConfig.cityCode
    };
    if (T.g("curCity")) {
        this.cityInfo.cityName = T.g("curCity").innerHTML;
        this.cityInfo.cityCode = modelConfig.cityCode
    }
    this.modelReg = /<script[^>]*>([\s\S]*)<\/script>/im;
    if (typeof(this.opts) == "function") {
        this.ajax = subAjax
    } else {
        if (this.opts.dom == null) {
            this.ajax = mainAjax;
            this.mainDiv = true;
            this.opts.dom = T.g(modelConfig.MAIN_BOX)
        } else {
            this.ajax = subAjax;
            this.opts.dom = T.g(this.opts.dom)
        }
    }
    if (b.indexOf("tpl:") > -1) {
        b = b.slice(4);
        this.queryString = "";
        if (b.indexOf("?") > -1) {
            var a = b.split("?");
            b = a[0];
            this.queryString = a[1]
        }
        this.modelType = "active";
        this.tplUrl = b;
        this.loadTpl(b)
    } else {
        this.modelType = "passive";
        var f = this;
        AsynLoader.get(srUrl.bctrl, {
            onsuccess: function() {
				
                f.loadData(b)
            }
        })
    }
}
T.inherits(Model, T.lang.Class, "Model");
T.extend(Model.prototype, {
    loadData: function(url) {
		
	
		
        var me = this;
        me.start_event = new Date().getTime();
        this.ajax.onfailure = function(json) {
            try {
                if (me.mainDiv && json.status == 500) {
                    go("tpl:Error");
                    return
                }
            } catch(e) {}
        };
        this.ajax.onsuccess = function(json) {
            me.start_send = new Date().getTime();
            me.stat.dataE = new Date().getTime();
            me.stat.dataSize = (T.string.getByteLength(json.responseText) / 1024).toFixed(2);
            try {
                eval("me.opts.json =" + json.responseText)
            } catch(e) {
                go("tpl:Error");
                return
            }
            var json = me.opts.json,
            result = json.result,
            compType;
            compType = me.compType = result && result.type;
            if (compType) {
                me.compName = window.modelCode[me.compType]
            }
            try {
                if (me.mainDiv) {
                    if (me.opts.json.result && me.opts.json.result.error == -1) {
                        go("tpl:Error");
                        return
                    }
                }
                if (me.mainDiv && me.opts.json.current_city) {
                    var json = me.opts.json;
                    var city = me.opts.json.current_city;
                    setCurCity(city.name, city.code, city.type, city);
                    var componentType = me.opts.json.result.type || -1;
                    if (componentType && componentType == 48) {
                        window.trafficCtrl && window.trafficCtrl.hide()
                    }
                    if (city.sup_bus != null) {
                        modelConfig.supBus = city.sup_bus
                    }
                    if (city.up_cityid) {
                        modelConfig.upCityid = city.up_cityid
                    } else {
                        modelConfig.upCityid = city.code
                    }
                    if (json.result && !(json.result.result_show & 1) && (json.result.type == 29 || json.result.type == 13 || (json.result.type == 11 && json.result.total == 0 && json.result.spec_dispnum == 0))) {
                        if (city.type != null) {
                            var cType = ["country", "province", "city", "area"];
                            var level = modelConfig.level[cType[city.type]];
                            map.zoomTo(level)
                        }
                        if (city.geo != null) {
                            var point = geoToPoint(city.geo);
                            map.setCenter(point)
                        }
                    }
                    window.clearClarify = null
                } else {
                    var json = me.opts.json;
                    if (json.result && json.result.type == 37) {
                        window.GRControll && window.GRControll.setGRData(json);
                        window.GRControll && window.GRControll.clearGRMap()
                    }
                }
            } catch(ex) {
                return
            }
            if (typeof(me.opts) == "function") {
                me.opts(me.opts.json, me.key);
                ModelMgr.del(me.url)
            } else {
                if (modelConfig.tpl[me.tplUrl]) {
					
                    me.instance(me.tplUrl)
                } else {
                    if (me.opts.json.result && me.opts.json.result && me.opts.json.result.type && modelCode[me.opts.json.result.type]) {
                        me.compMonitorFlag = true;
						
                        me.loadTpl(modelCode[me.opts.json.result.type])
                    }
                }
            }
            if (json.hot_city && _OLR) {
                _OLR.hot_city = json.hot_city
            }
            if (!json.result) {
                return
            }
            if ((json.result.result_show & 1) && json.result.pattern_sign == 1) {} else {
                window.GRControll && window.GRControll.clearAfterGetAtBase(json)
            }
            if (/^11|36|38|39$/.test(compType) && switchTab._curSelIndex == 1) {
                var poir = window.poiResponse;
                if (json.result.op_gel == "1" && window.useraction && (!poir || (poir && json.result.return_query == poir.result.return_query))) {
                    var firstqid = poir && poir.result.qid;
                    window.poiResponse = json;
                    addStat(7000, {
                        fqid: firstqid,
                        fbound: window.firstbounds,
                        bound: window.lastbounds,
                        useraction: window.useraction
                    })
                } else {
                    window.poiResponse = json
                }
            } else {
                window.poiResponse = null
            }
            if (me.mainDiv) {
                if (json.result.type == 39 && place.result == true) {
                    document.fmwd.word.value = json.result.wd;
                    if (poiSSG) {
                        poiSSG.setValue(json.result.wd);
                        if (document.getElementById("poiTS")) {
                            T.g("poiTS").href = "http://192.168.1.135/add?place=" + encodeURIComponent(json.result.wd)
                        }
                    }
                    switchTab(1)
                }
                if (json.result.type == 11 || json.result.type == 36) {
                    if (json.result.type != 21 && !json.center || json.result.type == 23) {
                        document.fmwd.word.value = json.result.wd;
                        if (poiSSG) {
                            poiSSG.setValue(json.result.wd);
                            if (document.getElementById("poiTS")) {
                                T.g("poiTS").href = "http://192.168.1.135/add?place=" + encodeURIComponent(json.result.wd)
                            }
                        }
                        switchTab(1)
                    }
                } else {
                    if (json.result.type == 19 || json.result.type == 20 || json.result.type == 29) {
                        switchTab(3);
                        var strSta = "",
                        strEnd = "";
                        if (json.result.type == 20) {
                            strSta = json.result.start.wd ? json.result.start.wd: "";
                            strEnd = json.result.end[json.result.end.length - 1].wd ? json.result.end[json.result.end.length - 1].wd: "";
                            var sCode = json.result.start_city.code;
                            var eCode = json.result.end_city[json.result.end_city.length - 1].code;
                            if (sCode != eCode && map.mapType == BMAP_TYPE_DIMENSIONAL) {
                                if (isSateMapSupportCity(modelConfig.cityCode)) {
                                    maptypeCtrl.hide3DControl()
                                } else {
                                    maptypeCtrl.hide()
                                }
                                map.setMapType(BMAP_NORMAL_MAP)
                            }
                        } else {
                            if (json.result.type == 19) {
                                strSta = json.result.s_wd ? json.result.s_wd: "";
                                strEnd = json.result.e_wd ? json.result.e_wd: ""
                            }
                        }
                        driveSSG1 ? driveSSG1.setValue(strSta) : searchBox.setValue("DriveSearchSta", strSta);
                        driveSSG2 ? driveSSG2.setValue(strEnd) : searchBox.setValue("DriveSearchEnd", strEnd)
                    } else {
                        if (json.result.type == 13 || json.result.type == 14 || json.result.type == 24 || json.result.type == 31 || json.result.type == 48) {
                            switchTab(2);
                            if (json.result.type == 13) {
                                searchBox.setValue("BusSearchSta", json.result.s_wd == null ? "": json.result.s_wd);
                                searchBox.setValue("BusSearchEnd", json.result.e_wd == null ? "": json.result.e_wd)
                            } else {
                                if (json.result.type != 24) {
                                    var json_result_end = json.result.end;
                                    if (json.result.type == 31) {
                                        json_result_end = json.result.end[json.result.end.length - 1]
                                    }
                                    searchBox.setValue("BusSearchSta", json.result.start.wd == null ? "": json.result.start.wd);
                                    searchBox.setValue("BusSearchEnd", json_result_end.wd == null ? "": json_result_end.wd)
                                }
                            }
                            if (busSSG1) {
                                busSSG1.setValue(document.fmbus.word_from.value)
                            }
                            if (busSSG2) {
                                busSSG2.setValue(document.fmbus.word_to.value)
                            }
                        }
                    }
                }
                if (json.result.type == 24 || json.result.type == 29) {
                    var fm = json.result.type == 24 ? "Bus": "Drive";
                    searchBox.setValue(fm + "SearchSta", json.result.s_query || json.result.s_word || "");
                    searchBox.setValue(fm + "SearchEnd", json.result.e_query || json.result.e_word || "")
                }
            }
        };
        var format = "";
		
		
		
        if (document.location.href.indexOf("format=1") > -1) {
            format = "&format=1"
        }
        var bound = map.getBounds();
        var zoomLevel = "&l=" + map.zoomLevel;
        if (url.indexOf("&l=") > -1) {
            zoomLevel = ""
        }
        this.stat.dataS = new Date().getTime();
        url = url.replace(/%3C/gi, encodeURIComponent(" ")).replace(/%3E/gi, encodeURIComponent(" ")) + "&tn=" + map.mapType;
        var dataUrl = window.isPrint ? location.pathname.replace("print.html", "") : location.pathname;
		    
			dataUrl  =dataUrl.replace(webfilename,'');
		    
        
		
		
		if (url.indexOf("b=(") > -1) {
            this.ajax.request(dataUrl + modelConfig.DATA_URL + url + format + mapDebug.getParam(url) + "&ie=utf-8" + zoomLevel + "&t=" + new Date().getTime())
        } else {
            var minX = Math.min(bound.minX, bound.maxX);
            var maxX = Math.max(bound.minX, bound.maxX);
            var minY = Math.min(bound.minY, bound.maxY);
            var maxY = Math.max(bound.minY, bound.maxY);
			
			
			
            this.ajax.request(dataUrl + modelConfig.DATA_URL + url + format + mapDebug.getParam(url) + "&ie=utf-8" + zoomLevel + "&b=(" + minX + "," + minY + ";" + maxX + "," + maxY + ")&t=" + new Date().getTime())
        }
    },
    loadTpl: function(a) {
		
		
		
        var c = this,
        b, f = c.compMonitorFlag;
        if (!modelConfig.tpl[a]) {
            if (c.getStorage(a)) {
                return
            }
            this.ajax.onsuccess = function(g) {
                c.compMonitorAppName = PDC.DICT[("COMP_" + c.compName).toUpperCase()];
                c.transfer_time = new Date().getTime();
                c.stat.modelE = new Date().getTime();
                var h = g.responseText;
                c.setStorage(a, h);
                c.parseHTML(h, a);
                modelConfig.tpl[a] = h.replace(c.modelReg, "");
                c.loadTpl(a)
            };
            this.stat.modelS = new Date().getTime();
            var d = window.isPrint ? location.pathname.replace("print.html", "") : location.pathname;
			    d=d.replace(webfilename,'');
            AsynLoader.get(srUrl.bpack, {
                onsuccess: function() {
                    c.ajax.request(d + modelConfig.MODEL_URL + a + ".html?t=" + new Date().getTime())
                }
            })
        } else {
            if (!c.compMonitorAppName) {
                c.compMonitorAppName = PDC.DICT[("COMP_" + c.compName + "_MEMORY").toUpperCase()];
                c.transfer_time = new Date().getTime()
            }
            if (this.ajax == mainAjax && T.g("MapInfo") && (a.indexOf("BusTrans") == -1 || a.indexOf("NavTrans") == -1 || a.indexOf("CBusTrans") == -1 || a.indexOf("LinesQuery") == -1 || a.indexOf("RouteAddr") == -1)) {
                if (window.mapInfoScrollPanel) {
                    window.mapInfoScrollPanel.show()
                } else {
                    T.g("MapInfo").style.overflowY = "auto"
                }
            }
			
            this.instance(a);
            if (this.ajax == mainAjax && T.g("MapInfo") && (a.indexOf("BusTrans") > -1 || a.indexOf("NavTrans") > -1 || a.indexOf("CBusTrans") > -1 || a.indexOf("LinesQuery") > -1 || a.indexOf("RouteAddr") > -1)) {
                if (window.mapInfoScrollPanel) {
                    window.mapInfoScrollPanel.hide()
                } else {
                    T.g("MapInfo").style.overflowY = "hidden"
                }
            }
            b = PDC.createInstance(c.compMonitorAppName);
            if (f && b && c.start_event) {
                b.markWithValue(PDC.START_EVENT, c.start_event);
                c.start_send && b.markWithValue(PDC.START_SEND, c.start_send);
                c.transfer_time && b.markWithValue(PDC.TRANSFER_TIME, c.transfer_time);
                b.view_time();
                b.ready()
            }
        }
    },
    getStorage: function(h) {
        var g = this;
        var b = function() {
            g.compMonitorAppName = PDC.DICT[("COMP_" + g.compName + "_CACHE").toUpperCase()];
            g.transfer_time = new Date().getTime();
            g.stat.modelE = new Date().getTime();
            g.parseHTML(k, h);
            modelConfig.tpl[h] = k.replace(g.modelReg, "");
            g.loadTpl(h)
        };
        if (modelCodeInfo[h] && baidu.storage.isSupportStorage()) {
            if (baidu.storage._isSupportLocalStorage()) {
                if (baidu.storage.get({
                    key: h
                }) && baidu.storage.get({
                    key: h + "Info"
                })) {
                    var f = modelCodeInfo[h];
                    var j = baidu.storage.get({
                        key: h + "Info"
                    });
                    if (f == j) {
                        g.stat.modelS = new Date().getTime();
                        var k = baidu.storage.get({
                            key: h
                        });
                        try {
                            b()
                        } catch(d) {
                            return false
                        }
                        return true
                    }
                }
            } else {
                if (baidu.storage.get({
                    key: h + "Info"
                })) {
                    var f = modelCodeInfo[h];
                    var j = baidu.storage.get({
                        key: h + "Info"
                    }).split("|")[0];
                    var a = baidu.storage.get({
                        key: h + "Info"
                    }).split("|")[1];
                    if (f == j) {
                        g.stat.modelS = new Date().getTime();
                        var k = "";
                        for (var c = 0; c < a; c++) {
                            k += baidu.storage.get({
                                key: h + c
                            })
                        }
                        try {
                            b()
                        } catch(d) {
                            return false
                        }
                        return true
                    }
                }
            }
        }
        return false
    },
    setStorage: function(a, h) {
        var g = modelCodeInfo[a];
        if (g) {
            if (baidu.storage.isSupportStorage()) {
                if (baidu.storage._isSupportLocalStorage()) {
                    baidu.storage.set({
                        key: a,
                        value: h
                    });
                    baidu.storage.set({
                        key: a + "Info",
                        value: modelCodeInfo[a]
                    })
                } else {
                    var f = 25000;
                    var b = Math.ceil(h.length / f);
                    var d = [];
                    for (var c = 0; c < b; c++) {
                        var d = h.substr(c * f, f);
                        baidu.storage.set({
                            key: a + c,
                            value: d
                        })
                    }
                    baidu.storage.set({
                        key: a + "Info",
                        value: modelCodeInfo[a] + "|" + b
                    })
                }
            }
        }
    },
    parseHTML: function(b, a) {
        var c = this;
        var f = c.modelReg.exec(b);
        if (f && f[1]) {
            try {
                c.exec(f[1], a)
            } catch(d) {
                return
            }
        }
    },
    exec: function(c, b) {
        this.stat.jsS = new Date().getTime();
        window.activeScript(c);
        if (!window[b]) {
            var a = document.createElement("SCRIPT");
            a.type = "text/javascript";
            document.body.appendChild(a);
            a.appendChild(document.createTextNode(c))
        }
        this.stat.jsE = new Date().getTime()
    },
    instance: function(n) {
        var m = this.opts;
        if (m.json && m.json.result && (m.json.result.result_show & 1)) {
            map.setMapType(BMAP_SATELLITE_MAP);
            maptypeCtrl && maptypeCtrl.streetMapMgr(true);
            return
        }
        if (!this.modelObject) {
        	
        	 
            this.modelObject = new window[n]();
            this.modelObject.container = m.dom;
            if (m.cinfo) {
                this.modelObject.cinfo = m.cinfo
            }
            if (m.history) {
                this.modelObject.history = m.history
            }
            if (m._mapInfo) {
                this.modelObject._mapInfo = m._mapInfo
            }
        }
        var d = this.modelObject;
        d.modelQuery = this.url;
        d.isMain = false;
        if (this.mainDiv) {
            Share.listIndex = null;
            Share.popIndex = null;
            d.isMain = true
        }
        if (d.cinfo == null) {
            d.cinfo = {}
        }
        if (d.cinfo.city == null || d.cinfo.city.name == null) {
            var u = this.startCity;
            d.cinfo.startCity = {
                name: u.name,
                code: u.code
            }
        }
        if ((this.tplUrl != "Fav") && _gl && _gl.showAllPoi && !_gl.showAllPoi.isGoing) {
            BoxContainer && BoxContainer.exit()
        } else {
            if (_gl && _gl.showAllPoi) {
                _gl.showAllPoi.isGoing = false
            }
        }
        d.cityInfo = this.cityInfo;
        if (this.modelType == "active" && this.dataUrl == null && d.loadData) {
            
			
			//this.dataUrl = this.dataUrl.replace(webfilename,'');
			
			this.dataUrl = d.loadData(this.queryString);
			
			
			
            if (this.dataUrl != null && this.dataUrl != "undefined") {
                this.loadData(this.dataUrl);
                return
            }
        }
        if (!this.mainDiv) {
            ModelMgr.del(this.url)
        }
        if (this.mainDiv) {
            if (ModelMgr.mainModel) {
                if (typeof(ModelMgr.mainModel.unload) == "function") {
                    ModelMgr.mainModel.unload()
                }
                if (typeof(m.onunload) == "function") {
                    m.onunload()
                }
                if (window.cxtBusPoints) {
                    window.cxtBusPoints = null;
                    window.startPoi = null;
                    window.endPoi = null
                }
            }
            ModelMgr.mainModel = this.modelObject
        }
        if (typeof(m.begin) == "function") {
            m.begin()
        }
        if (this.mainDiv && map) {
            if (closeOtherOps) {
                closeOtherOps()
            }
            map.clearOverlays()
        }
        if (this.mainDiv && setSearchResult) {
            setSearchResult("")
        }
        var k = d.render(modelConfig.tpl[n].replace(/#guid#/gi, d.guid), m.json);
        if (!k || k.indexOf("{") == 0) {
            return
        }
        m.dom.innerHTML = "";
        m.dom.innerHTML = k.replace(/#[\w]+#/ig, "");
        if ((map.fullScreenMode || sideBar.status == "close") && (!window.GRControll || !window.GRControll.isGRequest || m.history)) {
            if (map.fullScreenMode) {
                if (d.json && d.json.result && d.json.result.type == 2 || d.cinfo && d.cinfo.exitLargeMapMode == false) {} else {
                    fullScreenCtrl.exitFull();
                    if (sideBar.status == "close") {
                        sideBar.show()
                    }
                }
            } else {
                if (sideBar.status == "close") {
                    if (d.json && d.json.result && d.json.result.type == 2 || d.cinfo && d.cinfo.exitLargeMapMode == false) {} else {
                        sideBar.show()
                    }
                }
            }
        }
        if (this.mainDiv && d.json && d.json.result) {
            try {
                var i = "",
                c = d.json.result.type,
                w = d.json.result.s_query || "",
                g = d.json.result.e_query || "";
                if (c == 2) {
                    i = d.json.content.cname || ""
                } else {
                    i = (d.json.result.return_query || d.json.result.wd) || ""
                }
                var y = {
                    wd: i,
                    s_query: w,
                    e_query: g,
                    type: d.json.result.type
                };
                T.g("monitor").innerHTML = T.json.stringify(y)
            } catch(p) {}
            if (d.json.result.type == 36 || d.json.result.type == 38 || d.json.result.type == 39) {
                addStat(STAT_GR_NORMAL_REQUEST);
                if (d.json.result.type == 36) {
                    addStat(STAT_GR_SBOX_REQUEST)
                }
            }
            if (d.json.result.type == 7 || d.json.result.type == 37 || d.json.result.type == 40) {
                addStat(STAT_GR_CITYPAGE_SHOW);
                if (d.json.result.type == 37) {
                    addStat(STAT_GR_SBOX_CITY_SHOW)
                }
            }
        }
        if (this.mainDiv && d.json && d.json.result && (d.json.result.type == 11 || d.json.result.type == 1 || d.json.result.type == 36 || d.json.result.type == 2)) {
            modelConfig.enableMapMove = false;
            if (window.mapMoveTimer) {
                clearTimeout(window.mapMoveTimer)
            }
            window.mapMoveTimer = setTimeout(function() {
                modelConfig.enableMapMove = true
            },
            4000)
        } else {
            if (this.mainDiv) {
                if (window.mapMoveTimer) {
                    clearTimeout(window.mapMoveTimer)
                }
                modelConfig.enableMapMove = true
            }
        }
        try {
            d.initialize()
        } catch(p) {}
        if (d.json == null) {
            d.json = m.json
        }
        if (typeof(m.onload) == "function") {
            m.onload()
        }
        if (typeof(d.load) == "function") {
            d.load()
        }
        if (window[n + "Print"]) {
            var h = new window[n + "Print"]();
            var x = this;
            window.setTimeout(function() {
                h.initialize(x.modelObject)
            },
            300)
        }
        this.stat.ok = new Date().getTime();
        var q = this.stat;
        var b = d._className;
        var v = {
            className: b
        };
        if (b != null) {
            var t = 0;
            var o = 0;
            var a = 0;
            if (q.ok && q.begin) {
                var t = q.ok - q.begin;
                v.modelTime = t
            }
            if (q.dataE && q.dataS) {
                var o = q.dataE - q.dataS;
                v.dataTime = o;
                v.dataSize = q.dataSize
            }
            if (q.modelE - q.modelS) {
                var a = q.modelE - q.modelS;
                v.htmlTime = a
            }
            var l = t - o - a;
            v.jsTime = l;
            v.browser = window.navigator.userAgent
        }
        if (this.mainDiv) {
            var j = document.fmHistory;
            var f = escape(this.url);
            History.nowTpl = f;
            j.url.value = f;
            if (m.history != true) {
                if (T.browser.ie > 0 || T.browser.chrome > 0 || T.browser.safari > 0) {
                    T.g("wHistory").src = MapConfig.smFlwCon + "./template/eis_y_car/map/history.html?url=" + escape(f)
                } else {
                    j.submit()
                }
                this.opts._mapInfo = {
                    center: map.getCenter(),
                    level: map.getZoom()
                };
                History.tplOpts[f] = this.opts
            }
            if (window.temp.cityPop) {
                window.temp.cityPop.close()
            }
        }
        window.mapInfoScrollPanel.update()
    }
});
var History = {
    nowTpl: null,
    tplOpts: {}
};
var Share = {
    SHARE_PROC_URL: "http://j.map.baidu.com/",
    listIndex: null,
    mapSpotInf: null,
    mapInfo: {},
    procCbk: function(a) {
        this._rec = true;
        this.cbk((a && a.url) || this.oUrl)
    },
    getLink: function(cbk, old, opts) {
        this.cbk = cbk ||
        function() {};
        this.getMap();
        this.getList();
        this.getSpotInfo();
        this.getPopList();
        this.getComponent();
        this.getScrMode();
        this.getPoiShare();
        opts = opts || {};
        var me = this,
        link = [];
        for (var k in me.mapInfo) {
            if (me.mapInfo[k] != null) {
                link.push(k + "=" + me.mapInfo[k])
            }
        }
        me.oUrl = "http://map.baidu.com/?newmap=1&" + link.join("&");
        if (window.FavState) {
            me.oUrl += "&FavState=1"
        }
        if ( !! old && !opts.sms) {
            return me.oUrl
        }
        var shareMap = function() {
            var url = Share.SHARE_PROC_URL + "?url=" + encodeURIComponent(me.oUrl) + "&web=true&callback=Share.procCbk";
            me._rec = false;
            scriptRequest(url,
            function() {},
            "BMap_share_proc");
            clearTimeout(me._timer);
            this._timer = setTimeout(function() {
                if (me._rec == false) {
                    me.cbk(me.oUrl)
                }
            },
            3000)
        };
        eval("var json =" + baidu.json.stringify(_sign.mapSign));
        if (_sign._USERSHARE) {
            if (_sign.isNull(json.pointInfo.list) && _sign.isNull(json.polylineInfo.list) && _sign.isNull(json.remarkInfo.list)) {
                if ( !! old) {
                    cbk && cbk(me.oUrl);
                    return me.oUrl
                }
                shareMap()
            } else {
                for (var i in json.pointInfo.list) {
                    if (json.pointInfo.list[i].save == 0) {
                        delete json.pointInfo.list[i]
                    }
                }
                for (var i in json.remarkInfo.list) {
                    if (json.remarkInfo.list[i].type == 0) {
                        delete json.remarkInfo.list[i]
                    }
                }
                if (_sign.isNull(json.pointInfo.list) && _sign.isNull(json.polylineInfo.list) && _sign.isNull(json.remarkInfo.list)) {
                    if ( !! old) {
                        cbk && cbk(me.oUrl);
                        return me.oUrl
                    }
                    shareMap()
                } else {
                    _gl.getSignLink(baidu.json.stringify(json),
                    function(o) {
                        if (o.result == 1) {
                            var mapShareId = o.content.shareId;
                            me.oUrl += "&mapShareId=" + mapShareId;
                            if ( !! old) {
                                cbk && cbk(me.oUrl);
                                return me.oUrl
                            }
                            shareMap()
                        } else {
                            M.map.mapTip.show("有不符合相关法规政策的词，请修改", map, {
                                width: 235
                            });
                            if ( !! old) {
                                cbk && cbk(me.oUrl);
                                return me.oUrl
                            }
                            shareMap();
                            return
                        }
                    },
                    "all")
                }
            }
        } else {
            if ( !! old) {
                cbk && cbk(me.oUrl);
                return me.oUrl
            }
            shareMap()
        }
    },
    getScrMode: function() {
        if (map.fullScreenMode) {
            this.mapInfo.sc = 1
        } else {
            this.mapInfo.sc = 0
        }
    },
    getMap: function() {
        this.mapInfo.l = map.zoomLevel;
        this.mapInfo.tn = map.mapType;
        if (map._isHybirdShow) {
            this.mapInfo.hb = BMAP_TYPE_HYBIRD
        } else {
            this.mapInfo.hb = null
        }
        var a = map.centerPoint;
        this.mapInfo.c = a.lng.toFixed(0) + "," + a.lat.toFixed(0);
        this.mapInfo.cc = map.currentCity
    },
    getComponent: function() {
        if (ModelMgr.mainModel) {
            var a = ModelMgr.mainModel.modelQuery.replace(/&b=\((-?\d+)(\.\d+),(-?\d+)(\.\d+);(-?\d+)(\.\d+),(-?\d+)(\.\d+)\)/gi, "");
            this.mapInfo.s = encodeURIComponent(decodeURIComponent(a))
        }
    },
    getList: function() {
        if (this.listIndex != null) {
            this.mapInfo.i = this.listIndex.toString().replace("|", encodeURIComponent("|"))
        } else {
            this.mapInfo.i = null
        }
    },
    getPopList: function() {
        if (this.popIndex != null) {
            this.mapInfo.pi = this.popIndex
        } else {
            this.mapInfo.pi = null
        }
    },
    getPoiShare: function() {
        var a = location.href;
        var b = getParam(a);
        if (b && b.poiShareUid) {
            this.mapInfo.poiShareUid = b.poiShareUid
        }
    },
    setPoiShowAll: function(a) {
        this.mapInfo.poiall = a ? 1 : null
    },
    setSmSCode: function(a) {
        this.mapInfo.sms = a ? a: null
    },
    getSpotInfo: function() {
        if (this.mapSpotInf != null) {
            this.mapInfo.msi = this.mapSpotInf
        } else {
            this.mapInfo.msi = null
        }
    },
    setParam: function(a, b) {
        if (!a || "[object String]" !== Object.prototype.toString.call(a)) {
            return
        }
        if (b) {
            this.mapInfo[a] = b
        } else {
            delete this.mapInfo[a]
        }
    }
};
var MapRevert = {
    revert: function() {
        var c = location.href;
        var d = getParam(c);
        if (d != null && d.q != null) {
            var b = 0;
            for (var a in d) {
                b++
            }
            if (b == 1) {
                window.setTimeout(function() {
                    try {
                        T.g("PoiSearch").value = decodeURIComponent(d.q)
                    } catch(f) {}
                },
                300)
            }
        }
        if (d == null || !d.s) {
            return false
        }
        this.setModel(d);
        return true
    },
    setModel: function(param) {
        var me = this;
        var opts = {
            cinfo: {
                cityInit: 1
            },
            onload: function() {
                var mapType = param.tn || param.mt;
                if (param.l != null && typeof(parseInt(param.l)) == "number" || param.c != null) {
                    var p = param.c.split(",");
                    if (p.length == 2) {
                        var lng = parseFloat(p[0]);
                        var lat = parseFloat(p[1]);
                        var point = new BMap.Point(parseFloat(p[0]), parseFloat(p[1]));
                        if (mapType == BMAP_TYPE_DIMENSIONAL) {
                            point = BMap.Project.convert3DTo2D(map.currentCity, point)
                        }
                        map.setMapType(mapType);
                        map.centerAndZoom(point, parseInt(param.l))
                    }
                }
            }
        };
        if (param.l != null && typeof(parseInt(param.l)) == "number") {
            opts.cinfo._maplevel = parseInt(param.l)
        }
        if (param.c != null) {
            var p = param.c.split(",");
            if (p.length == 2) {
                var lng = parseFloat(p[0]);
                var lat = parseFloat(p[1]);
                var point = new BMap.Point(p[0], p[1]);
                opts.cinfo._centerPoint = point
            }
        }
        var index = param.i;
        if (index != null) {
            opts.cinfo._index = index;
            opts.cinfo.index = index
        }
        var showAll = param.poiall;
        if (showAll) {
            opts.cinfo.poiall = 1
        }
        var smsCode = param.sms;
        if (smsCode) {
            opts.cinfo.sms = smsCode
        } (function(tfc) {
            if (!param.tfc) {
                return
            }
            if (window.trafficCtrl) {
                window.trafficCtrl._toggle()
            } else {
                setTimeout(arguments.callee, 10)
            }
        })(param.tfc);
        var poPindex = param.pi;
        if (poPindex != null) {
            opts.cinfo._popIndex = parseInt(poPindex)
        }
        var popPoint = param.b;
        if (popPoint != null) {
            var p = popPoint.split(",");
            if (p.length == 2) {
                var lng = parseFloat(p[0]);
                var lat = parseFloat(p[1]);
                var point = new BMap.Point(p[0], p[1]);
                opts.cinfo._popPoint = point
            }
        }
        param.s = param.s.replace(/%u[0-9a-zA-Z]{4}/ig,
        function(v) {
            return encodeURIComponent(unescape(v))
        });
        var qs = [];
        try {
            qs = decodeURIComponent(param.s).split("&")
        } catch(e) {
            go("tpl:Error");
            return
        }
        var query = "";
        for (var i = 0,
        l = qs.length; i < l; i++) {
            var tempQ = qs[i].split("=");
            if (tempQ.length == 0) {
                continue
            }
            if (tempQ.length == 1) {
                query += tempQ[0];
                continue
            }
            var q = tempQ.slice(1).join("");
            if (tempQ[0] == "ec" || tempQ[0] == "en") {
                q = q.replace(/\+/g, " ")
            }
            query += "&" + tempQ[0] + "=" + encodeURIComponent(decodeURIComponent(q))
        }
        query = query.indexOf("&") == 0 ? query.substring(1) : query;
        if (!query.match(/.*&c=\d{1,3}.*/)) {
            var cc = modelConfig.cityCode;
            if (_OLR && _OLR.index) {
                try {
                    eval("var ccd =" + _OLR.index);
                    cc = ccd.content.code
                } catch(e) {
                    cc = modelConfig.cityCode
                }
            }
            if (query.match(/tpl:/) == null) {
                query += "&c=" + cc
            }
        }
        if ( !! param.sc && param.sc == "1") {
            AsynLoader.get(srUrl.bctrl, {
                onsuccess: function() {
                    window.fullScreenCtrl.toFull();
                    opts.cinfo.sc = 1
                }
            })
        }
        var queryType = T.trim(qs[0]);
        switch (queryType) {
        case "bt":
            query = query.replace(/wd1=(.*)&/, "sn=2$$$$$$$$$$$$$1$$$$$$&");
            query = query.replace(/wd2=(.*)&/, "en=2$$$$$$$$$$$$$1$$$$$$&");
        case "nav":
            query = query.replace(/wd1=(.*)&/, "sn=2$$$$$$$$$$$$$1$$$$$$&");
            query = query.replace(/wd2=(.*)&/, "en=2$$$$$$$$$$$$$1$$$$$$&");
            break;
        case "s":
            break
        }
        go(query, opts);
        searchBox.parseShare(decodeURIComponent(param.s))
    }
}; (function() {
    var a = {
        keyList: {
            tsina: {
                title: "分享到新浪微博",
                code: 1307,
                cbkcode: 1317
            },
            tqq: {
                title: "分享到腾讯微博",
                code: 1308,
                cbkcode: 1318
            },
            qzone: {
                title: "分享到QQ空间",
                code: 1306,
                cbkcode: 1316
            },
            renren: {
                title: "分享到人人网",
                code: 1309,
                cbkcode: 1319
            },
            baidu: {
                title: "分享到搜藏",
                code: 1310,
                cbkcode: 1320
            },
            kaixin001: {
                title: "分享到开心网",
                code: 1311,
                cbkcode: 1321
            },
            hi: {
                title: "分享到空间",
                code: 1312,
                cbkcode: 1322
            },
            douban: {
                title: "分享到豆瓣网",
                code: 1313,
                cbkcode: 1323
            },
            tsohu: {
                title: "分享到搜狐微博",
                code: 1314,
                cbkcode: 1324
            },
            msn: {
                title: "分享到Myspace",
                code: 1315,
                cbkcode: 1325
            }
        },
        addCbkStat: function() {
            var h = window.location.hash;
            if (!h) {
                return
            }
            var f = h.split("#"),
            j = "";
            for (var d = 0,
            b = f.length; d < b; d++) {
                if (f[d].indexOf("bshare") >= 0) {
                    j = f[d];
                    break
                }
            }
            if (j) {
                var c = j.split("-")[1],
                g = a.keyList[c];
                if (g) {
                    addStat(g.cbkcode)
                }
            }
        },
        open: function(f, c) {
            closeOtherOps();
            if (window.temp.linkPop) {
                window.temp.linkPop.close()
            }
            var d = {
                title: "您可将当前地图上的内容分享给好友",
                addDom: T.g("tool_container"),
                content: "",
                height: 94,
                width: T.browser.ie >= 8 ? 368 : 358,
                close: function() {
                    delete window.temp.linkPop;
                    T.rc(T.g("link"), "span_focus")
                }
            };
            var b = window.temp.linkPop = new Popup(d);
            b.addConnectDom(f);
            b.render();
            b.hide();
            b.getDom().style.right = "10px";
            b.getDom().style.top = "38px";
            go("tpl:SharePanel", {
                dom: b.content,
                cinfo: {
                    from: "mapshare"
                },
                onload: function() {
                    b.show()
                }
            });
            addStat(STAT_GET_LINK)
        },
        fixName: function(b) {
            return b ? "【" + b + "】": ""
        },
        Tween: function(g, f, i, h) {
            return i * ((g = g / h - 1) * g * g + 1) + f
        },
        getMInfo: function() {
            return {}
        }
    };
    window.BShare = a
})();
var STAT_INF_NORMAL = 1,
STAT_INF_STOP = 2,
STAT_BUS_UNFOLD = 3,
STAT_BUS_THUMB = 4,
STAT_SUGG_COUNT = 6,
STAT_TRAF_OPEN = 7,
STAT_BUS_PAGE = 10,
STAT_SUGG_CLOSE = 12,
STAT_FULL_SCREEN = 15,
STAT_DRV_SEL = 16,
STAT_PRNT_POI = 17,
STAT_PRNT_BUS = 18,
STAT_POP_NORM = 20,
STAT_POP_DIR = 21,
STAT_PTAB_FROMHERE = 22,
STAT_OVM_OPEN = 25,
STAT_PRNT_BUSQ = 26,
STAT_CM_FH = 27,
STAT_CM_TH = 28,
STAT_CM_ROUND = 29,
STAT_PANEL_SELECT = 30,
STAT_MAP_SELECT = 31,
STAT_POI_UNFOLD = 32,
STAT_POI_SELSUB = 33,
STAT_BUS_RESEL_ADDR = 34,
STAT_DRV_RESEL_ADDR = 36,
STAT_EXIT_FULL_SCREEN = 38,
STAT_DO_MEASURE = 40,
STAT_DO_CAPTURE = 41,
STAT_GET_LINK = 42,
STAT_CM_ZOOMIN = 43,
STAT_CM_ZOOMOUT = 44,
STAT_CM_CENTER = 45,
STAT_EXTLINK_WY = 46,
STAT_SUGG_DETAIL = 53,
STAT_POP_CLOSED_N = 55,
STAT_POP_CLOSED_D = 56,
STAT_SUGG_COUNT_WHAT = 57,
STAT_WALK_COUNT_LINK = 58,
STAT_WALK_SEL = 59,
STAT_GR_ITEM_CLICK = 65,
STAT_GR_MARKER_CLICK = 66,
STAT_GR_CHOOSE_CITY = 67,
STAT_GR_CHOOSE_AREA = 68,
STAT_TOUSU_TAB_NOR = 130,
STAT_TOUSU_TAB_BT = 131,
STAT_TOUSU_TAB_NAV = 132,
STAT_TOUSU_LIST_NOR = 133,
STAT_TOUSU_LIST_BT = 134,
STAT_TOUSU_LIST_NAV = 135,
STAT_TOUSU_LINE = 136,
STAT_TOUSU_NEAR = 137,
STAT_WC_CLICK = 141,
STAT_BUS_RETURN = 150,
STAT_BUS_ANEW = 151,
STAT_BUS_TAXI = 152,
STAT_BUS_STCOUNT = 153,
STAT_BUS_STKEY = 154,
STAT_DRIVE_RETURN = 155,
STAT_DRIVE_ANEW = 156,
STAT_DRIVE_TAXI = 157,
STAT_STLINE_CLOSE = 158,
STAT_BUS_STEP = 159,
STAT_PRNT_DRV_IN_CITY = 161,
STAT_PRNT_DRV_CROSS_CITY = 162,
STAT_PRNT_OTHER = 163,
STAT_PRNT_TOTAL_BUS = 164,
STAT_PRNT_TOTAL_DRV = 165,
STAT_PRNT_CITY = 166,
STAT_3D_SWITCH = 171,
STAT_3D_VIEWMAP = 172,
STAT_SIGN_SIGN = 191,
STAT_SIGN_POI = 192,
STAT_SIGN_LINE = 193,
STAT_SIGN_REMARK = 194,
STAT_SIGN_POISHARE = 195,
STAT_SIGN_POIFAV = 196,
STAT_SIGN_FAV = 197,
STAT_SIGN_FAVPOI = 198,
STAT_SIGN_IMG = 199,
STAT_STRONG_SHOW = 221,
STAT_STRONG_ALL = 222,
STAT_SUGGEST_SHOW = 251;
STAT_SUGGEST_CLICK = 252;
STAT_PS_SHOW = 253;
STAT_PS_CLICK = 254;
STAT_SPOT_CLICK = 313,
STAT_PLACE_HOTEL_LIST = 350,
STAT_PLACE_HOTEL_SPOT = 351,
STAT_PLACE_HOTEL_LISTDETAIL = 352,
STAT_PLACE_HOTEL_LISTCOMMENT = 353,
STAT_PLACE_HOTEL_WINDETAIL = 354,
STAT_PLACE_HOTEL_WINPIC = 355,
STAT_PLACE_HOTEL_WINCOMMENT = 356,
TRAFFIC_EVENT_CAR = 413,
TRAFFIC_EVENT_BUS = 414,
TRAFFIC_EVENT_WALK = 415,
TRAFFIC_EVENT_POI = 416,

TRAFFIC_EVENT_REFRESH = 417,
TRAFFIC_EVENT_FORECAST = 418,
TRAFFIC_EVENT_FORECAST_CHANGE = 419,
TRAFFIC_EVENT_TIP_GUANZHI = 420,
TRAFFIC_EVENT_TIP_SHIGU = 421,
TRAFFIC_EVENT_TIP_SHIGONG = 422,
TRAFFIC_EVENT_INFO_GUANZHI = 423,
TRAFFIC_EVENT_INFO_SHIGU = 424,
TRAFFIC_EVENT_INFO_SHIGONG = 425,
TRAFFIC_EVENT_SATELLITE = 426,
STAT_PLACE_HOUSE_LIST = 522,
STAT_PLACE_HOUSE_SPOT = 523,
STAT_PLACE_HOUSE_LISTDETAIL = 524,
STAT_PLACE_HOUSE_WINDETAIL = 525,
STAT_PLACE_HOUSE_WINPIC = 526,
STAT_PLACE_HOUSE_WINGOTOBDLEJU = 527,
STAT_VEDIOSTUDY = 550,
STAT_USER_BEHAVIOUR_MINMING = 553,
STAT_LISTCORRET = 560,
STAT_INFOWCORRET = 561,
STAT_BUS_WALK_NAV_OPEN = 615,
STAT_BUS_WALK_NAV_CLOSE = 616,
STAT_BUS_WALK_NAV_OPEN_BY_DIS = 617,
STAT_BUS_WALK_NAV_CLOSE_BY_BT = 618,
STAT_DOWNLOAD_MAP_APP = 731,
STAT_TOP_FEEDBACK = 732,
STAT_TOP_HELP = 733,
STAT_DOWNLOAD_MAP_APP_POI = 734,
STAT_DOWNLOAD_MAP_APP_BUS = 735,
STAT_DOWNLOAD_MAP_APP_NAV = 736,
STAT_INDEX_ONSEA = 740,
STAT_INDEX_ONBUS = 741,
STAT_INDEX_ONNAV = 742,
STAT_POI_ONXQ = 743,
STAT_POI_RIGHT_NB = 744,
STAT_INR_LIST_CLICK = 750,
STAT_INR_INFO_CLICK = 751,
STAT_INR_CATE_CLICK = 752,
STAT_INR_FLOOR_CLICK = 753,
STAT_INR_DRAG_COUNT = 754,
STAT_INR_ZOOM_COUNT = 755,
STAT_INR_TIPS_CLICK = 756,
STAT_CBT_ALL = 780,
STAT_CBT_RAIL_NEAREST = 781,
STAT_CBT_AIR_NEAREST = 782,
STAT_CBT_AIR_BOTH = 783,
STAT_CBT_TIPS_ALL = 784,
STAT_CBT_TIPS_CLICK = 785,
STAT_CBT_TIPS_CLOSE = 786,
STAT_CBT_NAV_BOTTOM = 787,
STAT_CBT_NAV_TOP = 788,
STAT_CBT_AIR_TAB = 789,
STAT_CBT_SY_START = 790,
STAT_CBT_SY_ALL = 791,
STAT_CBT_SY_ARRIVE = 792,
STAT_CBT_PAGE = 793,
STAT_CBT_NAV2BUS = 794,
STAT_CBT_BUS2NAV = 795,
STAT_TAXI_BUS_CLOSE = 800,
STAT_TAXI_BUS_TOP = 801,
STAT_TAXI_BUS_BOTTOM = 802,
STAT_TAXI_NAV_TOP = 803,
STAT_TAXI_NAV_BOTTOM = 804,
STAT_InnerCity_Open = 806,
STAT_InnerCity_Close = 807,
STAT_CBT_RightMenu = 808,
STAT_HOTEL_PLACE_SEARCH_TYPE = 810,
STAT_HOTEL_PLACE_BAR_TYPE = 811,
STAT_HOTEL_PLACE_BAR_PRICE = 812,
STAT_HOTEL_PLACE_TEXT_DETAIL = 813,
STAT_HOTEL_PLACE_TEXT_IMG = 814,
STAT_HOTEL_PLACE_TEXT_PRE = 815,
STAT_HOTEL_PLACE_TEXT_COMMENT = 816,
STAT_HOTEL_PLACE_BOX_PRE = 817,
STAT_HOTEL_PLACE_BOX_DETAIL = 818,
STAT_HOTEL_PLACE_BOX_LINK = 819,
STAT_HOTEL_PLACE_ALL_LINK = 820,
STAT_HOTEL_PLACE_WID_IMG = 823,
STAT_HOTEL_PLACE_LINK = 822,
STAT_PLACE_HOTEL_PAGE = 824,
STAT_PLACE_HOTEL_SQ = 825,
STAT_PLACE_HOTEL_BUS = 826,
STAT_PLACE_HOTEL_NAV = 827,
STAT_PLACE_HOTEL_ALLWID = 821,
STAT_CHANGE_MAPTYPE = 900,
STAT_CANCEL_HYBIRD = 901,
STAT_DRAG_MAP = 902,
STAT_SHOW_TIP = 903,
STAT_CLOSE_TIP = 904,
PLACE_ENTER_CATE = 910,
PLACE_ENTER_HOTEL = 911,
PLACE_ENTER_LIFE = 912,
PLACE_ENTER_HOSPITAL = 913,
PLACE_ENTER_BD_WD = 914,
PLACE_ENTER_LIFE_WD = 915,
PLACE_ENTER_BD = 916,
PLACE_ENTER_CATE_All = 917,
PLACE_ENTER_HOTEL_All = 918,
PLACE_ENTER_LIFE_All = 919,
PLACE_ENTER_HOSPITAL_All = 920,
STAT_BSHARE_SINGLE = 1300,
STAT_BSHARE_MORE = 1301,
STAT_BSHARE_NAVTRANS = 1302,
STAT_BSHARE_BUSTRANS = 1303,
STAT_BSHARE_BUSLINE = 1304,
STAT_BSHARE_NONE = 1305,
STAT_SMP_SAVE_OK = 1330,
STAT_SMP_DRAG_OK = 1331,
STAT_SMP_SEARCH_OK = 1332,
STAT_SMP_SEARCH_FAIL = 1333,
STAT_SMP_ACTIVE = 1334,
STAT_SMP_SITEM_CLICK = 1335,
STAT_SMP_NITEM_CLICK = 1336,
STAT_SMP_IITEM_CLICK = 1337,
STAT_SMP_SADD_CLICK = 1338,
STAT_SMP_NADD_CLICK = 1339,
STAT_SMP_IADD_CLICK = 1340,
STAT_SMP_ICON_CLICK = 1341,
STAT_INDEX_TUAN = 1400,
STAT_BOX_TUAN = 1401,
STAT_TUAN_GUIDE_SHOW = 1402,
STAT_TUAN_GUIDE_CLICK = 1403,
STAT_TUAN_CITY_SHOW = 1414,
STAT_API_CLICK = 1421,
STAT_GR_CITYPAGE_SHOW = 2000,
STAT_GR_NORMAL_REQUEST = 2001,
STAT_GR_SBOX_CITY_SHOW = 2002,
STAT_GR_SBOX_REQUEST = 2003,
STAT_CHANGE_CITY = 6001,
STAT_SELECTCITY_TAB = 6002,
STAT_SELECTCITY_ABC = 6003,
STAT_StandardMapControl_CLICK = 6004;
STAT_StandardMapControl_ZOOM = 6005;
STAT_StandardMapControl_MOVE = 6006;
STAT_NAV_COURSE_DEF = 6008,
STAT_NAV_COURSE_BIG = 6009,
STAT_NAV_COURSE_CHECK = 6010,
STAT_NAV_COURSE_CLOSE = 6011,
STAT_BOX_BTN = 6012,
STAT_SPEC_SUBWAY = 6013,
STAT_SPEC_TRAIN = 6014,
STAT_SPEC_PARK = 6015,
STAT_SPEC_GAS = 6016,
STAT_BOX_SUBWAY = 6017,
STAT_BOX_HOUSE = 6018,
STAT_BOX_WEATHER = 6019,
STAT_BOX_TRAIN = 6020,
STAT_BOX_PARK = 6021,
STAT_BOX_GAS = 6022,
STAT_INDEX_SUBWAY = 6023,
STAT_INDEX_HOUSE = 6024,
STAT_INDEX_WEATHER = 6025,
STAT_INDEX_TRAIN = 6026,
STAT_INDEX_PARK = 6027,
STAT_INDEX_GAS = 6028,
STAT_FAV_IW_BTN = 6029,
STAT_FAV_LIST_BTN = 6030,
STAT_SEARCH_IN_ROUTE = 6031,
STAT_SEARCH_IN_ROUTE_NOCHANGE = 6054,
STAT_SEARCH_IN_ROUTE_POI = 6055,
STAT_CLICK_TAB_ROUTE = 6032,
STAT_ROUTE_IW_BTN = 6033,
STAT_ROUTE_LIST_BTN = 6034,
STAT_ROUTE_IW_OPEN = 6035,
STAT_ROUTE_SELECT_1 = 6036,
STAT_ROUTE_SELECT_2 = 6037,
STAT_OPEN_SIDEBAR = 6038,
STAT_CLOSE_SIDEBAR = 6039,
STAT_BUS_RETURNICON_NO_WORD = 6040,
STAT_BUS_RETURNICON_NO_WORD_1 = 6041,
STAT_BUS_RETURNICON_RESULT_POI = 6042,
STAT_BUS_RETURNICON_WORD = 6043,
STAT_BUS_RETURNICON_ROUTEADDR = 6044,
STAT_BUS_RETURNICON_RESULT = 6045,
STAT_BUS_RETURNICON_RESULT1 = 6046,
STAT_NAV_RETURNICON_NO_WORD = 6047,
STAT_NAV_RETURNICON_NO_WORD_1 = 6048,
STAT_NAV_RETURNICON_RESULT_POI = 6049,
STAT_NAV_RETURNICON_WORD = 6050,
STAT_NAV_RETURNICON_ROUTEADDR = 6051,
STAT_NAV_RETURNICON_RESULT = 6052,
STAT_NAV_RETURNICON_RESULT1 = 6053,
STAT_SEARCH_RETURN_NEW = 6056,
STAT_BOX_INDEX_TITLE = 6057,
STAT_NAV_MAIN_ICON = 6060;
STAT_NAV_SHOW_ALL = 6061;
STAT_NAV_CANCEL_SHOW_ALL = 6062;
STAT_NAV_MAIN_SHOW_INFO = 6063;
STAT_NAV_LIST_CLICK = 6064;
STAT_P2M_BTN_IOS = 7030,
STAT_P2M_BTN_ANDROID = 7031,
STAT_P2M_BTN_S60V3 = 7032,
STAT_P2M_BTN_S60V5 = 7033,
STAT_P2M_SEL_DOWN = 7034,
STAT_P2M_HER_DOWN = 7035,
STAT_P2M_SMS_IOS = 7036,
STAT_P2M_SMS_ANDROID = 7037,
STAT_P2M_SMS_S60V3 = 7038,
STAT_P2M_SMS_S60V5 = 7038,
STAT_P2M_SMS_SYMBIAN3 = 7038,
STAT_P2M_DBM_IOS = 7039,
STAT_P2M_DBM_ANDROID = 7040,
STAT_P2M_DBM_S60V3 = 7041,
STAT_P2M_DBM_S60V5 = 7041,
STAT_P2M_DBM_SYMBIAN3 = 7041,
STAT_P2M_OPEN_INDEX = 7042,
STAT_P2M_OPEN_BUS = 7043,
STAT_P2M_OPEN_NAV = 7044,
STAT_P2M_OPEN_POI = 7045,
STAT_P2M_OPEN_CITY = 7046,
STAT_P2M_OPEN_FAV = 7047,
STAT_P2M_OPEN_OTHER = 7048,
STAT_P2M_BACK = 7049,
STAT_P2M_SHOUJI = 7050,
STAT_P2M_OPEN_POPUP = 7051,
STAT_TOP_LOGIN_CLICK = 7500,
STAT_FAV_LOGIN_CLICK = 7501,
STAT_OTHER_LOGIN_CLICK = 7502,
STAT_FAV_ADDPOI = 7503,
STAT_FAV_DELPOI = 7504,
STAT_SHOUJI_SEND = 7505,
STAT_TONGBU_WHETHER = 7506,
STAT_TONGBU_YES = 7507,
STAT_TONGBU_NO = 7508,
STAT_FAV_ADDLINE = 7509,
STAT_FAV_DELLINE = 7510,
STAT_FAV_CLICKALL = 7511,
STAT_FAV_CLICKPOI = 7512,
STAT_FAV_CLICKLINE = 7513,
STAT_CATER_PLACE_SEARCH_TYPE = 8001,
STAT_CATER_PLACE_BAR_TYPE = 8002,
STAT_CATER_PLACE_BAR_PRICE = 8003,
STAT_CATER_PLACE_TEXT_DETAIL = 8004,
STAT_CATER_PLACE_TEXT_IMG = 8005,
STAT_CATER_PLACE_TEXT_PRE = 8006,
STAT_CATER_PLACE_TEXT_COMMENT = 8007,
STAT_CATER_PLACE_BOX_PRE = 8008,
STAT_CATER_PLACE_BOX_DETAIL = 8009,
STAT_CATER_PLACE_BOX_LINK = 8010,
STAT_PLACE_CATER_ALLWID = 8013,
STAT_CATER_PLACE_LINK = 8014,
STAT_CATER_PLACE_WID_IMG = 8015,
STAT_PLACE_CATER_LIST = 8016,
STAT_PLACE_CATER_SPOT = 8017,
STAT_PLACE_CATER_PAGE = 8018,
STAT_PLACE_CATER_SQ = 8019,
STAT_PLACE_CATER_BUS = 8020,
STAT_PLACE_CATER_NAV = 8021,
STAT_CATER_PLACE_ALL_LINK = 8100,
STAT_PLACE_LINK_IW_PREMIUM = 8022,
STAT_PLACE_LINK_LIST_PREMIUM = 8023,
STAT_HOUSE_PLACE_SEARCH_TYPE = 8400,
STAT_HOUSE_PLACE_BAR_TYPE = 8401,
STAT_HOUSE_PLACE_BAR_PRICE = 8402,
STAT_HOUSE_PLACE_TEXT_DETAIL = 8403,
STAT_HOUSE_PLACE_TEXT_IMG = 8404,
STAT_HOUSE_PLACE_TEXT_PRE = 8405,
STAT_HOUSE_PLACE_TEXT_COMMENT = 8406,
STAT_HOUSE_PLACE_BOX_PRE = 8407,
STAT_HOUSE_PLACE_BOX_DETAIL = 8408,
STAT_HOUSE_PLACE_BOX_LINK = 8409,
STAT_HOUSE_PLACE_ALL_LINK = 8410,
STAT_HOUSE_PLACE_WID_IMG = 8411,
STAT_HOUSE_PLACE_LINK = 8412,
STAT_PLACE_HOUSE_PAGE = 8413,
STAT_PLACE_HOUSE_SQ = 8414,
STAT_PLACE_HOUSE_BUS = 8415,
STAT_PLACE_HOUSE_NAV = 8416,
STAT_PLACE_HOUSE_ALLWID = 8417,
STAT_PLACE_HOUSE_LIST = 8418,
STAT_PLACE_HOUSE_SPOT = 8419,
STAT_PLACE_HOUSE_LISTDETAIL = 8420,
STAT_PLACE_HOUSE_LISTCOMMENT = 8421,
STAT_PLACE_HOUSE_WINDETAIL = 8422,
STAT_PLACE_HOUSE_WINPIC = 8423,
STAT_PLACE_HOUSE_WINCOMMENT = 8424,
STAT_HOSPITAL_PLACE_SEARCH_TYPE = 8450,
STAT_HOSPITAL_PLACE_BAR_TYPE = 8451,
STAT_HOSPITAL_PLACE_BAR_PRICE = 8452,
STAT_HOSPITAL_PLACE_TEXT_DETAIL = 8453,
STAT_HOSPITAL_PLACE_TEXT_IMG = 8454,
STAT_HOSPITAL_PLACE_TEXT_PRE = 8455,
STAT_HOSPITAL_PLACE_TEXT_COMMENT = 8456,
STAT_HOSPITAL_PLACE_BOX_PRE = 8457,
STAT_HOSPITAL_PLACE_BOX_DETAIL = 8458,
STAT_HOSPITAL_PLACE_BOX_LINK = 8459,
STAT_HOSPITAL_PLACE_ALL_LINK = 8460,
STAT_HOSPITAL_PLACE_WID_IMG = 8461,
STAT_HOSPITAL_PLACE_LINK = 8462,
STAT_PLACE_HOSPITAL_PAGE = 8463,
STAT_PLACE_HOSPITAL_SQ = 8464,
STAT_PLACE_HOSPITAL_BUS = 8465,
STAT_PLACE_HOSPITAL_NAV = 8466,
STAT_PLACE_HOSPITAL_ALLWID = 8467,
STAT_PLACE_HOSPITAL_LIST = 8468,
STAT_PLACE_HOSPITAL_SPOT = 8469,
STAT_PLACE_HOSPITAL_LISTDETAIL = 8470,
STAT_PLACE_HOSPITAL_LISTCOMMENT = 8471,
STAT_PLACE_HOSPITAL_WINDETAIL = 8472,
STAT_PLACE_HOSPITAL_WINPIC = 8473,
STAT_PLACE_HOSPITAL_WINCOMMENT = 8474,
STAT_LIFE_PLACE_SEARCH_TYPE = 8600,
STAT_LIFE_PLACE_BAR_TYPE = 8601,
STAT_LIFE_PLACE_BAR_PRICE = 8602,
STAT_LIFE_PLACE_TEXT_DETAIL = 8603,
STAT_LIFE_PLACE_TEXT_IMG = 8604,
STAT_LIFE_PLACE_TEXT_PRE = 8605,
STAT_LIFE_PLACE_TEXT_COMMENT = 8606,
STAT_LIFE_PLACE_BOX_PRE = 8607,
STAT_LIFE_PLACE_BOX_DETAIL = 8608,
STAT_LIFE_PLACE_BOX_LINK = 8609,
STAT_LIFE_PLACE_ALL_LINK = 8610,
STAT_LIFE_PLACE_WID_IMG = 8611,
STAT_LIFE_PLACE_LINK = 8612,
STAT_PLACE_LIFE_PAGE = 8613,
STAT_PLACE_LIFE_SQ = 8614,
STAT_PLACE_LIFE_BUS = 8615,
STAT_PLACE_LIFE_NAV = 8616,
STAT_PLACE_LIFE_ALLWID = 8617,
STAT_PLACE_LIFE_LIST = 8618,
STAT_PLACE_LIFE_SPOT = 8619,
STAT_PLACE_LIFE_LISTDETAIL = 8620,
STAT_PLACE_LIFE_LISTCOMMENT = 8621,
STAT_PLACE_LIFE_WINDETAIL = 8622,
STAT_PLACE_LIFE_WINPIC = 8623,
STAT_PLACE_LIFE_WINCOMMENT = 8624,
PLACE_FILTER_CODE = 7000,
STAT_EARCH_ViEW = 9001,
STAT_NAV_RETURNICON = 9002,
STAT_BUS_RETURNICON = 9003,
STAT_BUS_TRANS_CLICK = 9004,
STAT_BUS_FAV_CLICK = 9005,
STAT_BUSANDNAV_TAB = 9006;
function beforeEndHTML(b, a) {
    b.insertAdjacentHTML("beforeEnd", a);
    return b.lastChild
}
function jsonToQuery(a, c) {
    var b = [];
    c = c ||
    function(g) {
        return g
    };
    for (var f in a) {
        var d = a[f];
        if (d != "" && d != null && typeof(d) != "undefined") {
            b.push(f + "=" + c(d))
        }
    }
    return b.join("&")
}
function getParam(a) {
    if (a.indexOf("?") > -1) {
        var d = a.slice(a.indexOf("?") + 1)
    } else {
        if (a.indexOf("#") > -1) {
            var d = a.slice(a.indexOf("#") + 1)
        } else {
            return
        }
    }
    if (d == "") {
        return
    }
    var g = {};
    var f = d.split("&");
    for (var b = 0; b < f.length; b++) {
        var c = f[b].split("=");
        g[c[0]] = c[1]
    }
    return g
}
function getPosition(a) {
    var b = {
        left: 0,
        top: 0
    };
    while (a && a.offsetParent) {
        b.left += a.offsetLeft;
        b.top += a.offsetTop;
        a = a.offsetParent
    }
    return b
}
function getClientSize() {
    if (window.innerHeight) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        } else {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }
    }
}
function geoToPoint(f) {
    var c = f.split("|");
    if (c[0] == 1) {
        var d = c[1].split(",");
        var b = new BMap.Point(parseFloat(d[0]), parseFloat(d[1]));
        return b
    } else {
        return
    }
}
function parseGeo(g) {
    if (typeof(g) != "string") {
        return
    }
    var b = g.split("|");
    var m = parseInt(b[0]);
    var c = b[1];
    var q = b[2];
    var f = q.split(";");
    var k = [];
    switch (m) {
    case 1:
        k.push(f[0]);
        break;
    case 2:
    case 3:
        for (var h = 0; h < f.length - 1; h++) {
            var p = f[h];
            if (p.length > 100) {
                p = p.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;");
                k.push(p)
            } else {
                var l = [];
                var a = p.split(",");
                for (var d = 0; d < a.length; d += 2) {
                    var o = a[d];
                    var n = a[d + 1];
                    l.push(o + "," + n)
                }
                k.push(l.join(";"))
            }
        }
        break
    }
    if (k.length <= 1) {
        k = k.toString()
    }
    return {
        type: m,
        bound: c,
        points: k
    }
}
function getPointByStr(a) {
    if (typeof a != "string") {
        return
    }
    var b = a.split(",");
    if (b.length < 2) {
        return
    }
    return new BMap.Point(b[0], b[1])
}
function searchWord(c, a) {
    if (typeof(c) == "object") {
        var b = encodeURIComponent(c.innerHTML)
    } else {
        var b = encodeURIComponent(c)
    }
    if (!a) {
        a = modelConfig.cityCode
    }
    if (a) {
        go("s&wd=" + b + "&c=" + a)
    } else {
        go("s&wd=" + b)
    }
}
function cnameSearch(a, b, f) {
    var d = encodeURIComponent(a);
    if (!f) {
        f = 0
    }
    var g = b || modelConfig.cityCode;
    go("con&contp=0&wd=" + d + "&pn=0&c=" + g + "&src=" + f)
}
function stopBubble(a) {
    var a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true
}
function preventDefault(a) {
    var a = window.event || a;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
    return false
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function setCurCity(a, f, c, d) {
    d = d || {};
    if (!T.g("curCity")) {
        return
    }
    if (a == "" || a == null || f == "" || f == null) {
        return
    }
    T.g("supBus").innerHTML = "";
    if (a == "中国") {
        a = "全国"
    }
    if (T.g("curCityText")) {
        if (a == "全国") {
            T.g("curCityText").innerHTML = "选择城市";
            modelConfig.cityType = 0
        } else {
            T.g("curCityText").innerHTML = "更换城市"
        }
    }
    T.g("curCity").innerHTML = a;
    if (window.GRControll && GRControll.isGRequest && modelConfig.cityCode != f) {
        window.GRControll.addGRMap()
    }
    modelConfig.cityCode = f;
    modelConfig.cityName = a;
    modelConfig.sup = d.sup;
    if (c !== null && c !== "") {
        modelConfig.cityType = c
    }
    setTrafficBut();
    var b = window.ModelMgr && window.ModelMgr.mainModel && window.ModelMgr.mainModel._className;
    if (MapConfig["3d_city"][modelConfig.cityCode] && map.getZoom() >= 12) {
        map.setCurrentCity(MapConfig["3d_city"][modelConfig.cityCode][0]);
        maptypeCtrl.show3DControl()
    } else {
        map.currentCity = "";
        map.cityCode = "";
        setMapCtrlWhenMoving(f)
    }
    addDataCopyright();
    _adjustMapButtons()
}
function addDataCopyright() {
    var g = modelConfig.cityCode;
    var d = map.mapType;
    var a = [AID["常州"], AID["成都"], AID["大连"], AID["重庆"], AID["南京"], AID["南昌"], AID["武汉"]];
    var c;
    
		
            c = ["&copy; 2012 易格时空 - GS(2010)6006号&nbsp;- Data &copy; "];
            c.push('<a target="_blank" href="http://www.egrasp.cn">更多请访问官方网站</a> &amp; ');
            
        
    
    if (!window.copyCtrl) {
        window.copyCtrl = new BMap.CopyrightControl();
        map.addControl(window.copyCtrl)
    }
    window.copyCtrl.addCopyright({
        content: c.join(""),
        id: 1
    })
}
function getXhr() {
    if (window.XMLHttpRequest) {
        var c = new XMLHttpRequest();
        T.on(window, "onunload",
        function() {
            c.abort()
        });
        return c
    } else {
        if (window.ActiveXObject) {
            var d = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "Msxml2.XMLHTTP", "MSXML.XMLHttp", "Microsoft.XMLHTTP"];
            for (var b = 0; d[b]; b++) {
                try {
                    var c = new ActiveXObject(d[b]);
                    T.on(window, "onunload",
                    function() {
                        c.abort()
                    });
                    return c
                } catch(a) {}
            }
            throw new Error("Your browser do not support XMLHttp")
        }
    }
}
function historyUrl(a, c) {
    var b = document.fmHistory;
    var a = escape(a);
    History.nowTpl = a;
    b.url.value = a;
    b.submit();
    History.tplOpts[a] = this.opts
}
function CreateFlash(c, a, b, d, g) {
    var f = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + b + '" height="' + d + '" id="' + c + '" align="middle">';
    f += '<param name="allowScriptAccess" value="always">';
    f += '<param name="quality" value="high">';
    f += '<param name="movie" value="' + a + '">';
    f += '<param name="flashvars" value="' + g + '">';
    f += '<embed src="' + a + '" flashvars="' + g + '" quality="high" width="' + b + '" height="' + d + '" name="' + c + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">';
    f += "</object>";
    return f
}
function CreateFlashTra(c, a, b, d, g) {
    var f = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + b + '" height="' + d + '" id="' + c + '">';
    f += '<param name="allowScriptAccess" value="always">';
    f += '<param name="quality" value="high">';
    f += '<param name="wmode" value="transparent">';
    f += '<param name="movie" value="' + a + '">';
    f += '<param name="flashvars" value="' + g + '">';
    f += '<embed src="' + a + '" flashvars="' + g + '" quality="high" wmode="transparent" width="' + b + '" height="' + d + '" name="' + c + '" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">';
    f += "</object>";
    return f
}
function nsClick(c, f) {
    var b = {
        ctrip_hotel: 1,
        ctrip_site: 1,
        dianping: 2,
        house_new: 3,
        house_ershou: 4,
        general_ext: 5
    };
    if (!window.nsLogImg) {
        window.nsLogImg = new Image()
    }
    var a = "http://nsclick.baidu.com/v.gif?pid=108&url=";
    var d = b[f] || 5;
    if (!d) {
        return
    }
    setTimeout(function() {
        window.nsLogImg.src = a + encodeURIComponent(c) + "&type=" + d + "&src_name=" + f + "&t=" + (new Date()).getTime()
    },
    50)
}
function strB(a) {
    return a.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**").length
}
function isInteger(a) {
    return /^\+?[1-9][0-9]*$/.test(a)
}
function lastString(b) {
    var a = b.substring(b.length - 1);
    if (a == "站") {
        return true
    }
    return false
}
function formatJSONString(b) {
    if (!b) {
        return ""
    }
    var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    a = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return c.test(b) ? b.replace(c,
    function(d) {
        var f = a[d];
        return typeof f === "string" ? f: "\\u" + ("0000" + d.charCodeAt(0).toString(16)).slice( - 4)
    }) : b
}
function s(g, f) {
    var a = "";
    if (document.fmwd.style.display == "block" || document.fmwd.style.display == "") {
        if (T.trim(document.fmwd.word.value) != "") {
            a = encodeURIComponent(document.fmwd.word.value)
        }
    } else {
        if (document.fmbus.style.display == "block" || document.fmbus.style.display == "") {
            if (T.trim(document.fmbus.word_from.value) != "" && T.trim(document.fmbus.word_to.value) != "") {
                a = encodeURIComponent("从" + T.trim(document.fmbus.word_from.value) + "到" + T.trim(document.fmbus.word_to.value))
            } else {
                if (T.trim(document.fmbus.word_from.value) == "" && T.trim(document.fmbus.word_to.value) != "") {
                    a = encodeURIComponent(T.trim(document.fmbus.word_to.value))
                } else {
                    if (T.trim(document.fmbus.word_from.value) != "" && T.trim(document.fmbus.word_to.value) == "") {
                        a = encodeURIComponent(T.trim(document.fmbus.word_from.value))
                    }
                }
            }
        } else {
            if (document.fmnav.style.display == "block" || document.fmnav.style.display == "") {
                if (T.trim(document.fmnav.word_from.value) != "" && T.trim(document.fmnav.word_to.value) != "") {
                    a = encodeURIComponent("从" + T.trim(document.fmnav.word_from.value) + "到" + T.trim(document.fmnav.word_to.value))
                } else {
                    if (T.trim(document.fmnav.word_from.value) == "" && T.trim(document.fmnav.word_to.value) != "") {
                        a = encodeURIComponent(T.trim(document.fmnav.word_to.value))
                    } else {
                        if (T.trim(document.fmnav.word_from.value) != "" && T.trim(document.fmnav.word_to.value) == "") {
                            a = encodeURIComponent(T.trim(document.fmnav.word_from.value))
                        }
                    }
                }
            }
        }
    }
    addStat(STAT_EXTLINK_WY + f);
    var c = ["http://news.baidu.com/ns?word=#####&tn=news&from=news&ie=utf-8&bs=mp3&sr=0&cl=2&rn=20&ct=1&prevct=no&sc=map", "http://www.baidu.com/s?wd=#####&ie=utf-8&fr=map1000", "http://tieba.baidu.com/f?kw=#####&ie=utf-8&fr=map_tab", "http://zhidao.baidu.com/q?word=#####&ct=17&pn=0&tn=ikaslist&rn=10&lm=0&fr=map0000", "http://mp3.baidu.com/m?f=nidx&tn=baidump3&ct=134217728&lf=&rn=&word=#####&lm=-1&ie=utf-8&fr=map0000", "http://image.baidu.com/i?tn=baiduimage&ct=201326592&cl=2&lm=-1&word=#####&z=0&ie=utf-8&fr=map0000", "http://video.baidu.com/v?ct=301989888&s=25&word=#####&ie=utf-8&fr=map0000", "http://baike.baidu.com/search/word?&word=#####&pic=1&sug=1&enc=utf8&fr=map0000", "http://wenku.baidu.com/search?word=#####&ie=utf-8&fr=map0000"];
    var d = g.href;
    if (a != "") {
        if (c[f * 1] != "" && c[f * 1].indexOf("#####") != -1) {
            g.href = c[f * 1].replace(/#####/ig, a)
        } else {
            var b = "?";
            g.href = g.href + b + "ie=utf-8&q=" + a
        }
    }
}
function filtQuery(a) {
    a = a || "";
    return a.replace(/[\uac00-\ud7a3]/g, "").replace(/\u2022|\u2027|\u30FB/g, String.fromCharCode(183)).replace(/^\s*|\s*$/g, "")
}
function scaleImage(d, a, c) {
    var b = new Image();
    b.onload = function() {
        if (this.width > 0 && this.height > 0) {
            if (this.width / this.height >= a / c) {
                if (this.width > a) {
                    d.width = a;
                    d.height = (this.height * a) / this.width
                } else {
                    d.width = this.width;
                    d.height = this.height
                }
            } else {
                if (this.height > c) {
                    d.height = c;
                    d.width = (this.width * c) / this.height
                } else {
                    d.width = this.width;
                    d.height = this.height
                }
            }
        }
    };
    b.src = d.src;
    if (T.browser.ie == 6 && createSearchInfoWnd.iwImgLoading && createSearchInfoWnd.iwImgLoadingTimer) {
        clearInterval(createSearchInfoWnd.iwImgLoadingTimer);
        createSearchInfoWnd.iwImgLoading = 0;
        createSearchInfoWnd.iwImgLoadingSum = 0
    }
}
function formatTime(n, h) {
    if (!n || isNaN(n)) {
        return ""
    }
    var c = "",
    f = 60,
    i = f * 24;
    var g = Math.ceil(n / f);
    if (h == "bustime") {
        var l = g % 10,
        j = parseInt(g / 10);
        g = l != 0 ? (l > 5 ? (++j * 10) : j ? (j * 10) : 5) : g
    }
    var o = parseInt(g / i);
    g %= i;
    var k = parseInt(g / f);
    g %= f;
    if (o >= 1) {
        c += o + "天"
    }
    if (k >= 1) {
        c += k + "小时"
    }
    if (g >= 1) {
        if (h && h == "nav" && o >= 1) {
            return c
        } else {
            c += g + "分钟"
        }
    }
    return c
}
function formatBlinfo(k) {
    var g = [];
    for (var d = 0,
    h = {},
    f, a = k.length; d < a; d++) {
        f = k[d].addr;
        if (!h[f]) {
            var j = T.extend({},
            k[d]);
            g.push(j);
            g[d].index = d;
            h[f] = d + 1
        } else {
            var b = g[h[f] - 1];
            b.uid = b.uid + "_" + k[d].uid;
            b.index = b.index + "_" + d;
            g.push(k[d])
        }
    }
    return g
}
function add3DTip() {
    var a = '<div id="DEM_CustomTip1" class="DEM_Tip DEM_Tip1"><div class="tip">抱歉，该区域无三维地图</div><button onclick="remove3DTip(T.g(\'DEM_CustomTip1\'))"></button></div>';
    beforeEndHTML(document.body, a);
    T.g("DEM_CustomTip1").style.left = map.width / 2 - 104 + "px";
    if (map.fullScreenMode) {
        T.g("DEM_CustomTip1").style.top = "30px"
    }
}
function remove3DTip(a) {
    if (a) {
        a.parentNode.removeChild(a)
    }
}
function isInBounds(a, b) {
    b = b || map.getBounds();
    return b.containsPoint(a)
}
function getDistanceByPixel(b, a) {
    if (!b || !a) {
        return
    }
    return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
}
function getIknowCode(a) {
    a = baidu.string.filterFormat.escapeString(a);
    return ['<div class="nr_know"><p>您可以在知道提问，让其他网友帮您解决问题：</p>', '<form name="IknowForm" action="http://zhidao.baidu.com/q" method="get" target="_blank">', '<p class="nr_pi"><input type="text" name="word" value="' + a + '" /></p>', '<div class="IknownBtn" onmouseover="IknowBtnOver(this)" onmouseout="IknowBtnOut(this)" onmousedown="IknowBtnDown(this)" onmouseup="IknowBtnUp(this)" onclick="IknowForm.submit()">我要提问</div>', '<input type="hidden" name="ct" value="17" />', '<input type="hidden" name="tn" value="ikask" />', '<input type="hidden" name="cm" value="1" />', '<input type="hidden" name="lm" value="394496" />', '<input type="hidden" name="pn" value="0" />', '<input type="hidden" name="rn" value="10" />', '<input type="hidden" name="fr" value="map" /></form></div>'].join("")
}
function IknowBtnOver(a) {
    a.style.backgroundPosition = "left center"
}
function IknowBtnOut(a) {
    a.style.backgroundPosition = "left top"
}
function IknowBtnDown(a) {
    a.style.backgroundPosition = "left bottom"
}
function IknowBtnUp(a) {
    a.style.backgroundPosition = "left center"
}
function createContextMenu(d, c, h) {
    var a = new BMap.ContextMenu({
        container: c
    });
    if (!c || c === map) {
        map.addContextMenu(a)
    } else {
        a.initialize(map)
    }
    for (var f = 0,
    b = d.length; f < b; f++) {
        var g = d[f];
        if (!g.separator) {
            a.addItem(new BMap.MenuItem(g.text, g.callback ||
            function() {},
            {
                width: g.width || 100,
                id: g.id
            }))
        } else {
            a.addSeparator()
        }
    }
    a.setCursor(h);
    return a
}
function destroyContextMenu(a) {
    if (a && a.destroy) {
        a.destroy();
        a = null
    }
}
function setSearchResult(a) {
    if (T.g("rcInfo")) {
        T.g("rcInfo").innerHTML = a
    }
}
function changeNavCtrlForGeoLoc() {
    var a = stdMapCtrl.getDom();
    if (a) {
        a.style.height = "249px";
        a.childNodes[1].style.top = "82px"
    } else {
        stdMapCtrl.addEventListener("domready",
        function() {
            var b = stdMapCtrl.getDom();
            b.style.height = "249px";
            b.childNodes[1].style.top = "82px";
            stdMapCtrl.removeEventListener("domready", arguments.callee)
        })
    }
}
function getSearchTranType(a) {
    var d = getSearchTranType.busSub;
    var c = "";
    var f = {
        bus: {
            0 : 0,
            2 : 2,
            3 : 3,
            4 : 4
        },
        nav: {
            0 : 0,
            1 : 1,
            2 : 2
        }
    };
    var b = T.cookie.get("Map_" + a + "TranType");
    if (navigator.cookieEnabled && !!b && f[a][b] != undefined) {
        if (a == "bus" && b == 4) {
            b = "4&f=" + d
        }
    } else {
        b = 0
    }
    c = "&sy=" + b;
    return c
}
getSearchTranType.busSub = "[0,2,4,7,5,8,9,10,11]"; (function() {
    var a = [];
    var d = {};
    var b = {};
    var c = 9;
    window.isSateMapSupportCity = function(f) {
        if (a.length == 0) {
            return true
        }
        if (modelConfig.cityType < 2) {
            return true
        }
        f = parseInt(f, 10);
        if (!f || !b[f]) {
            return false
        } else {
            return true
        }
    };
    window.setAvailableSateCityList = function(h) {
        a = h.cities;
        d = h.special;
        var j = [];
        for (var g = 0,
        k = a.length; g < k; g++) {
            var f = a[g];
            if (AID[f]) {
                b[AID[f]] = f
            } else {
                if (d[f]) {
                    b[d[f]] = f
                }
            }
        }
    };
    scriptRequest("http://map.baidu.com/satecitylist.js")
})();
function changeMapAfterSearch(c) {
    var a = map.mapType;
    if (a == BMAP_NORMAL_MAP) {
        return
    }
    if (a == BMAP_PERSPECTIVE_MAP) {
        var b = MapConfig["3d_city"];
        if (!b[c]) {
            maptypeCtrl.select(BMAP_NORMAL_MAP)
        }
    }
    if (map.mapType == BMAP_SATELLITE_MAP) {
        if (!isSateMapSupportCity(c)) {
            maptypeCtrl.select(BMAP_NORMAL_MAP)
        }
    }
}
function setMapCtrlWhenMoving(a) {
    if ((modelConfig.enableMapMove && map.mapType == BMAP_SATELLITE_MAP) || isSateMapSupportCity(a)) {
        maptypeCtrl.hide3DControl()
    } else {
        maptypeCtrl.hide()
    }
}
function getRandom(a, c) {
    var b = c - a + 1;
    return Math.floor(Math.random() * b + a)
}
function getPoiPoint(a) {
    var c = [];
    var b = null;
    if (a.toString() == "Point") {
        b = a
    } else {
        if (typeof a == "string") {
            c = T.trim(a).split(",");
            if (c.length < 2) {
                return
            }
            c[0] = parseFloat(T.trim(c[0]));
            c[1] = parseFloat(T.trim(c[1]))
        } else {
            c = a.slice(0);
            if (c.length < 2) {
                return
            }
        }
        b = new BMap.Point(c[0], c[1])
    }
    return b
} (function() {
    var a = 1500,
    d = null,
    c = "sate-tip-div",
    b = "<div class='satetip' id='" + c + "' style='display:none'><div class='text'>猛击吧，的卫星图！</div><div class='satetip-tip'></div><a onclick='hideSateCtrlTip();return false;' class='close' href='javascript:void(0)'>关闭</a></div>";
    function f() {
        var g = T.G(c);
        if (!g || !maptypeCtrl.isVisible()) {
            hideSateCtrlTip();
            return
        }
        var h = getPosition(maptypeCtrl.getDom());
        g.style.top = h.top + 28 + "px";
        g.style.left = h.left + 40 + "px";
        g.style.display = ""
    }
    window.showSateCtrlTip = function() {
        if (location.href.indexOf("print.html") >= 0) {
            return
        }
        maptypeCtrl.addEventListener("domready",
        function() {
            setTimeout(function() {
                if (!navigator.cookieEnabled || T.cookie.get("satetip") === "2" || !maptypeCtrl.isVisible() || map.mapType === BMAP_SATELLITE_MAP) {
                    T.cookie.set("satetip", "2", {
                        domain: "map.baidu.com",
                        expires: 946080000000
                    });
                    return
                }
                beforeEndHTML(document.body, b);
                addStat(STAT_SHOW_TIP);
                f();
                T.cookie.set("satetip", "2", {
                    domain: "map.baidu.com",
                    expires: 946080000000
                });
                d = setInterval(function() {
                    f()
                },
                500);
                map.addEventListener("maptypechange",
                function(g) {
                    hideSateCtrlTip();
                    map.removeEventListener("maptypechange", arguments.callee)
                })
            },
            a)
        })
    };
    window.hideSateCtrlTip = function() {
        var g = T.G(c);
        g && baidu.dom.remove(g);
        clearInterval(d);
        addStat(STAT_CLOSE_TIP)
    }
})();
var mapext = {};
var M = mapext;
M.fe = {},
M.map = {},
M.util = {},
M.service = {};
M.fe.tab = function(d) {
    var f = d.dom.parentNode;
    var a = d.dom.tagName;
    var b = f.getElementsByTagName(a);
    if (baidu.dom.hasClass(d.dom, "on")) {
        return
    } else {
        baidu.rc(b[M.fe.tab[d.mid]], "on");
        baidu.ac(d.dom, "on");
        f.className = d.mid + d.num;
        M.fe.tab[d.mid] = d.num;
        d.nameSpace[d.mid](d)
    }
};
M.fe.scriptRequest = function(ops) {
    var url = ops.url;
    var echo = ops.echo;
    var id = ops.id;
    var charset = ops.charset;
    var flag = ops.flag;
    var isIe = /msie/i.test(window.navigator.userAgent);
    if (isIe && T.dom.g("_script_" + id)) {
        var script = T.dom.g("_script_" + id)
    } else {
        if (T.dom.g("_script_" + id)) {
            T.dom.g("_script_" + id).parentNode.removeChild(T.dom.g("_script_" + id))
        }
        var script = document.createElement("script");
        if (charset != null) {
            script.charset = charset
        }
        if (id != null && id != "") {
            script.setAttribute("id", "_script_" + id)
        }
        script.setAttribute("type", "text/javascript");
        document.body.appendChild(script)
    }
    if (!flag) {
        var t = new Date();
        if (url.indexOf("?") > -1) {
            url += "&t=" + t.getTime()
        } else {
            url += "?t=" + t.getTime()
        }
    }
    var _complete = function() {
        if (!script.readyState || script.readyState == "loaded" || script.readyState == "complete") {
            script.onreadystatechange = script.onload = null;
            if (typeof(echo) == "function") {
                try {
                    echo()
                } catch(e) {}
            } else {
                eval(echo)
            }
        }
    };
    if (isIe) {
        script.onreadystatechange = _complete
    } else {
        script.onload = _complete
    }
    script.setAttribute("src", url)
};
M.service.confilter = function(g) {
    var d = g.confilterWords;
    var f = g.callback;
    var c = "http://map.baidu.com/maps/transformers/confilter?";
    var b = [];
    for (var a = 0; a < d.length; a++) {
        b.push("q[]=" + encodeURIComponent(d[a]))
    }
    M.fe.scriptRequest({
        url: c + "&cb=" + f + "&" + b.join("&")
    })
};
M.map.mapTip = {
    show: function(d, c, g) {
        var b = "";
        var a = c;
        if (g.width) {
            b = ' style="width:' + g.width + 'px"'
        }
        var f = '<div id="mapCommonTip" class="map_cTip"' + b + '><div class="tip">' + d + '</div><button onclick="M.map.mapTip.hide();"></button></div>';
        if (T.g("mapCommonTip")) {
            T.g("mapCommonTip").style.display = ""
        } else {
            M.map.mapTip._beforeEndHTML(a.getContainer(), f)
        }
        T.g("mapCommonTip").style.left = parseInt(a.width) / 2 - g.width / 2 + "px";
        setTimeout(this.hide, 2000)
    },
    hide: function() {
        if (T.g("mapCommonTip")) {
            T.g("mapCommonTip").style.display = "none"
        }
    }
};
M.map.mapTip._beforeEndHTML = function(b, a) {
    var c = document.createElement("div");
    c.innerHTML = a;
    b.appendChild(c);
    c = null;
    return b.lastChild
};
function getVerticalScroll() {
    if (window.innerWidth) {
        return window.pageYOffset
    } else {
        if (document.compatMode == "CSS1Compat") {
            return document.documentElement.scrollTop
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            }
        }
    }
}
CodeStat = (function() {
    var f = {
        method: "HEAD",
        onsuccess: b,
        onfailure: b
    },
    a = false,
    d = new Image(),
    h = false,
    c = [];
    d.onload = b;
    d.onerror = b;
    function j(p) {
        var n = window.poiResponse,
        l = n && n.result,
        q, p = p || {};
        if (n && l) {
            q = {
                from: "map",
                query: l.return_query || l.wd || "",
                qid: l.qid || "",
                page_num: isNaN(Number(l.page_num)) ? "": "" + l.page_num
            };
            for (var m in q) {
                if (q.hasOwnProperty(m) && q[m]) {
                    p[m] = q[m]
                }
            }
        }
        return p
    }
    window.statParamInterceptor = j;
    function i(k) {
        if (!k) {
            return
        }
        h = true;
        setTimeout(function() {
            if (!a) {
                T.ajax.request(MapConfig.smFlwCon + "./template/eis_y_car/map/img/transparent.gif?newmap=1" + k.src, f)
            } else {
                d.src = MapConfig.smFlwCon + "./template/eis_y_car/map/img/transparent.gif?newmap=1" + k.src
            }
        },
        100)
    }
    function g() {
        var k = c.shift();
        if (k) {
            i(k)
        }
    }
    function b() {
        h = false;
        g()
    }
    return {
        addStat: function(o, n) {
            if (!o) {
                return
            }
            n = n || {};
            if (n.uid || n.tag || n.useraction) {
                n = j(n)
            }
            var m = "";
            for (var k in n) {
                if (typeof n[k] == "undefined") {
                    continue
                }
                m = m + "&" + k + "=" + encodeURIComponent(n[k])
            }
            var l = (Math.random() * 100000000).toFixed(0);
            if (h) {
                c.push({
                    src: "&t=" + l + "&code=" + o + "&c=" + modelConfig.cityCode + m
                })
            } else {
                i({
                    src: "&t=" + l + "&code=" + o + "&c=" + modelConfig.cityCode + m
                })
            }
        }
    }
})();
addStat = CodeStat.addStat;
var myext = {
    _getHouseDetailUrl: function(c) {
        if (typeof(c.ext_type) != "undefined" && !!(c.ext_type & 2)) {
            var d = parseGeo(c.geo).points.split(",")[0];
            var a = parseGeo(c.geo).points.split(",")[1];
            var b = [myext._houseDetaillUrl, modelConfig.cityCode + "/?detail=round&from=map", "&t=" + new Date().getTime(), "&uid=" + c.uid + "&lng=" + d + "&lat=" + a].join("");
            return b
        } else {
            return false
        }
    },
    _houseDetaillUrl: "http://map.baidu.com/house/"
};
function isCorrect(f) {
    if (f.cp == "DQ") {
        return false
    }
    if (f.cp == "biaozhu") {
        return false
    }
    var b = isCorrect.da;
    if (f.cla && f.cla[0]) {
        var a = f.cla[0][0];
        if (b[a] && b[a][0] == 1) {
            return true
        }
        if (b[a] && b[a][0] == 20) {
            if (f.cla[1]) {} else {
                f.cla[1] = ["aa", "aa"]
            }
            var d = f.cla[1][0];
            if (f.cla[1] && b[a][1][d]) {
                return false
            } else {
                return true
            }
        }
        if (b[a] && b[a][0] == 2) {
            if (f.cla[1]) {} else {
                f.cla[1] = ["aa", "aa"]
            }
            var d = f.cla[1][0];
            if (b[a][1][d]) {
                return true
            } else {
                return false
            }
        }
    }
    return false
}
isCorrect.da = {
    13 : [1],
    14 : [1],
    15 : [1],
    16 : [1],
    17 : [20, {
        154 : 1,
        160 : 1
    }],
    18 : [1],
    19 : [1],
    20 : [1],
    21 : [1],
    22 : [2, {
        213 : 1,
        214 : 1,
        218 : 1
    }],
    23 : [1],
    24 : [1],
    25 : [1],
    26 : [1]
};
function goCorrect(f, d, a) {
    switch (f) {
    case 1:
        addStat(STAT_LISTCORRET);
        break;
    case 2:
        addStat(STAT_INFOWCORRET);
        break
    }
    var b = "http://" + window.location.host + "/";
    if (a) {
        var a = "&fr=" + a
    } else {
        var a = "&fr="
    }
    var c = b + "jiucuo/?uid=" + d + "&cid=" + modelConfig.cityCode + a;
    window.open(c)
} (function(c) {
    c.Helper = c.Helper || {};
    var f = Helper;
    f.aeach = function(g, h) {
        for (var a = 0; a < g.length; ++a) {
            h(g[a], a)
        }
    };
    f.oeach = function(h, g) {
        for (var a in h) {
            g(a, h[a])
        }
    };
    f.amap = function(g, h) {
        var j = [];
        for (var a = 0; a < g.length; ++a) {
            j.push(h(g[a], a))
        }
        return j
    };
    f.omap = function(i, g) {
        var h = [];
        for (var a in i) {
            h.push(g(a, i[a]))
        }
        return h
    };
    f.aselect = function(g, h) {
        var j = [];
        for (var a = 0; a < g.length; ++a) {
            if (h(g[a], a)) {
                j.push(g[a])
            }
        }
        return j
    };
    f.afind = function(g, h) {
        for (var a = 0; a < g.length; ++a) {
            if (h(g[a], a)) {
                return g[a]
            }
        }
        return undefined
    };
    f.oselect = function(i, g) {
        var h = [];
        for (var a in i) {
            if (g(a, i[a])) {
                h.push(i[a])
            }
        }
        return h
    };
    f.keys = function(h) {
        var g = [];
        for (var a in h) {
            if (h.hasOwnProperty(a)) {
                g.push(a)
            }
        }
        return g
    };
    f.values = function(h) {
        var g = [];
        for (var a in h) {
            if (h.hasOwnProperty(a)) {
                g.push(h[a])
            }
        }
        return g
    };
    f.tryget = function(l, k, a) {
        if (typeof(l) === "undefined") {
            return a
        }
        var j = k.split(".");
        if (j.length === 0) {
            return a
        }
        for (var h = l,
        g = 0; g < j.length; ++g) {
            h = h[j[g]];
            if (typeof(h) === "undefined") {
                return a
            }
        }
        return h
    };
    f.uniq = function(g, m) {
        if (!g || g.length === 0) {
            return []
        }
        var n = {},
        l = [],
        k = null;
        for (var j = 0; j < g.length; ++j) {
            k = m ? m(g[j]) : g[j];
            if (n[k] === undefined) {
                l.push(g[j]);
                n[k] = null
            }
        }
        return l
    };
    function b(h, g, i) {
        var a = i[ + g];
        return typeof(a) === "function" ? a(g) : a
    }
    function d(h, g, i) {
        var k = g,
        l = [],
        a = g.split(":");
        if (a.length === 2) {
            k = a[0];
            l.push(a[1])
        }
        var j = typeof(i[k]);
        if (j === "function") {
            return i[k].apply(undefined, l)
        } else {
            if (j === "undefined") {
                return h
            } else {
                return String(i[k])
            }
        }
    }
    f.fmt = (function() {
        return function(a, g) {
            var i = g.splice ? b: d,
            h = a.splice ? a.join("") : a;
            return h.replace(/{([a-zA-Z0-9_$:.]+)}/g,
            function(k, j) {
                return i(k, j, g)
            })
        }
    })()
})(window);
function Statistic(a) {
    this.send = a;
    this.codes = {};
    this.data = {};
    this.enabled = true
}
Statistic.prototype.disable = function() {
    this.enabled = false
};
Statistic.prototype.set = function(a, b) {
    if (!this.enabled) {
        return
    }
    if (typeof(b) === "function") {
        b.call(this, a)
    } else {
        this.data[a] = b
    }
};
Statistic.prototype.everytime = function(c, b) {
    if (!this.enabled) {
        return
    }
    var a = b;
    if (typeof(b) === "function") {
        b.call(this, c)
    } else {
        if (typeof(this.codes[c]) === "undefined") {
            this.codes[c] = 1
        } else {
            this.codes[c] += 1
        }
        this.send(c, a)
    }
};
Statistic.prototype.conditional = Statistic.prototype.everytime;
Statistic.prototype.firsttime = function(b, a) {
    if (!this.enabled) {
        return
    }
    if (typeof(this.codes[b]) === "undefined") {
        Statistic.prototype.everytime.call(this, b, a)
    }
}; (function(k) {
    var d = T,
    b = Helper;
    var i = 1,
    c = 2,
    a = 3,
    l = 4,
    j = 5;
    function f(m) {
        return m.s_query + "####" + m.e_query
    }
    function h(m) {
        var n = b.tryget(m, "json.content.0.poiType");
        return (n === POI_TYPE_BUSLINE || n === POI_TYPE_SUBLINE) ? c: i
    }
    var g = {
        searchinview: [i, "curKw"],
        poisearch: [h, "curKw"],
        poishare: [i, "json.result.wd"],
        poiaddr: [i, "curKw"],
        bustrans: [j, f],
        navtrans: [j, f],
        navwalk: [j, f],
        linesquery: [c, "json.result.wd"]
    };
    k.setComplaintCenterURL = function(m, u) {
        var n = u.constructor.name,
        t = null;
        if (n) {
            n = n.toLowerCase()
        } else {
            t = u.constructor.toString().match(/function (.*)\(.*\)/);
            if (t && t[1]) {
                n = t[1].toLowerCase()
            }
        }
        if (!g[n]) {
            return
        }
        var q = {
            tab: 0,
            place: "",
            base: CONST.MapComplaintCenterURL
        },
        w = d.G("mapComplaintCenter"),
        o = null;
        q.tab = m.mapType === BMAP_TYPE_DIMENSIONAL ? l: g[n][0];
        if (typeof(q.tab) === "function") {
            q.tab = q.tab(u)
        }
        var p = g[n][1];
        if (typeof(p) == "string") {
            q.place = b.tryget(u, p)
        } else {
            q.place = p ? p(u) : ""
        }
        if (q.place) {
            q.place = "?place=" + encodeURIComponent(q.place)
        }
        o = b.fmt("{base}add{place}#{tab}", q);
        try {
            if (w) {
                w.href = o;
                w.onclick = function() {
                    w.href = o;
                    return true
                }
            }
        } catch(v) {}
    }
})(window);
var POPUP_ANCHOR_MAP_CENTER = 1;
var POPUP_ANCHOR_WINDOW_CENTER = 2;
function Popup(a) {
    T.lang.Class.call(this);
    this.visible = false;
    this.config = a;
    if (!this.config) {
        return
    }
    this.config.addDom = this.config.addDom ? T.g(this.config.addDom) : document.body;
    if (a.clickClose != null && a.clickClose == false) {
        this.config.clickClose = false
    } else {
        this.config.clickClose = true
    }
    this.connectDom = new Array()
}
T.extend(Popup.prototype, {
    render: function() {
        var c = this.config;
        var b = this.config.extClass || "";
        this.main = beforeEndHTML(c.addDom, '<div class="map_popup ' + b + '" style="width:390px;display:none"></div>');
        var a = this.popBox = beforeEndHTML(this.main, '<div class="popup_main"></div>');
        if (c.isTitle != false) {
            this.title = beforeEndHTML(a, '<div class="title">系统信息</div>')
        }
        this.content = beforeEndHTML(a, '<div class="content"></div>');
        if ( !! this.config.closeButton) {
            this.button = beforeEndHTML(a, this.config.closeButton)
        } else {
            this.button = beforeEndHTML(a, '<button id="popup_close" title="关闭"></button>')
        }
        this.shadow = beforeEndHTML(this.main, '<div class="poput_shadow"></div>');
        this.addConnectDom(this.main);
        this.initialize()
    },
    initialize: function() {
        var b = this.config;
        this.setTitle(b.title);
        this.setContent(b.content);
        this.setWidth(b.width);
        this.setHeight(b.height);
        this.show();
        var c = this;
        var a = function(g) {
            var d = g.srcElement || g.target;
            while (d) {
                var h = c.connectDom;
                for (var f = 0; f < h.length; f++) {
                    if (d == h[f]) {
                        return
                    }
                }
                if (d == document.body) {
                    c.close();
                    return
                }
                d = d.parentNode
            }
        };
        if (this.config.clickClose) {
            T.on(document.body, "mousedown", a)
        }
        T.on(this.button, "click",
        function(d) {
            if (c.config.noCloseFun) {
                return
            }
            if (c.config.clickClose) {
                T.un(document.body, "mousedown", a)
            }
            if (c.config.closeEffect && typeof(c.config.closeEffect) == "function") {
                c.config.closeEffect()
            } else {
                c.main.parentNode.removeChild(c.main)
            }
            c.visible = false;
            if (c.config.close && typeof(c.config.close) == "function") {
                c.config.close()
            }
            if (this.resizeTimer) {
                window.clearInterval(this.resizeTimer);
                this.resizeTimer = null
            }
            if (T.g("imgLogo")) {
                T.g("imgLogo").style.display = "";
                T.g("imgLogo").style.display = "inline"
            }
        });
        if (b.open && typeof(b.open) == "function") {
            b.open()
        }
        this.setPosition()
    },
    dialog: function(c) {
        var b = function() {
            c.getDom().style.left = (getClientSize().width - c.config.width) / 2 + "px";
            c.getDom().style.top = (getClientSize().height - c.config.height) / 2 + "px"
        };
        var a = function() {
            setTimeout(function() {
                b();
                if (T.g("mapmask")) {
                    T.g("mapmask").style.width = getClientSize().width + "px";
                    T.g("mapmask").style.height = getClientSize().height + "px"
                }
            },
            20)
        };
        b();
        if (T.g("mapmask")) {
            T.g("mapmask").style.display = ""
        } else {
            beforeEndHTML(document.body, '<div id="mapmask" style="position:absolute;z-index:99996;background:#999;width:' + getClientSize().width + "px;height:" + getClientSize().height + 'px;left:0;top:0;opacity:0.5;filter:alpha(opacity=50);"></div>')
        }
        T.on(window, "resize", a);
        T.on(this.button, "click",
        function(d) {
            T.un(window, "resize", a)
        })
    },
    setPosition: function() {
        if (this.config.defaultAnchor) {
            this.updatePos(this.config.defaultAnchor)
        }
    },
    setTitle: function(a) {
        if (a && this.title) {
            this.title.innerHTML = a;
            this.config.title = a
        }
    },
    setContent: function(a) {
        if (a) {
            if (typeof(a) == "string") {
                this.content.innerHTML = a
            } else {
                this.content.innerHTML = "";
                this.content.appendChild(a)
            }
            this.config.content = a
        }
    },
    setWidth: function(a) {
        if (a) {
            this.main.style.width = (a - 8) + "px";
            this.config.width = a
        }
    },
    setHeight: function(a) {
        if (this.resizeTimer) {
            window.clearInterval(this.resizeTimer);
            this.resizeTimer = null
        }
        if (a) {
            this.main.style.height = this.shadow.style.height = (a - 9) + "px";
            this.config.height = a;
            if (this.config.isTitle == false) {
                this.content.style.height = (a - 2) + "px"
            } else {
                this.content.style.height = (a - 24 - 9) + "px"
            }
            if (this.config.contentOverFlow) {
                this.content.style.overflowY = "hidden"
            } else {
                this.content.style.overflowY = "auto"
            }
        } else {
            this.content.style.height = "auto";
            this.resize()
        }
    },
    hide: function() {
        this.main.style.display = "none";
        this.visible = false
    },
    show: function() {
        this.main.style.display = "block";
        this.popBox.scrollTop = 0;
        this.visible = true
    },
    getDom: function() {
        return this.main
    },
    resize: function() {
        var a = this;
        var b = function() {
            if (a.config.isAddBottomHeight == false) {
                var c = a.content.offsetHeight
            } else {
                var c = a.content.offsetHeight + 24
            }
            if (a.mainHeight) {
                if (a.mainHeight != c) {
                    a.mainHeight = c
                }
            }
            a.popBox.style.height = a.shadow.style.height = a.main.style.height = c + "px";
            a.popBox.scrollTop = 0
        };
        if (this.resizeTimer) {
            window.clearInterval(this.resizeTimer);
            this.resizeTimer = null
        }
        this.resizeTimer = window.setInterval(b, 50)
    },
    updatePos: function(d) {
        var f = this.main,
        c = this.config,
        g = map.getSize(),
        a = getClientSize(),
        b = c.offset || [],
        k = b[0] || 0,
        i = b[1] || 0,
        j = a.width <= c.width ? 0 : a.width / 2 - c.width / 2,
        h = a.height <= c.height ? 0 : a.height / 2 - c.height / 2;
        d = d || POPUP_ANCHOR_WINDOW_CENTER;
        switch (d) {
        case POPUP_ANCHOR_MAP_CENTER:
            j = g.width <= c.width ? 0 : g.width / 2 - c.width / 2;
            h = g.height <= c.height ? 0 : g.height / 2 - c.height / 2;
            break
        }
        if (c && typeof c.right != "undefined") {
            f.style.right = c.right + k + "px"
        } else {
            if (c && typeof c.left != "undefined") {
                f.style.left = c.left + k + "px"
            } else {
                f.style.left = j + k + "px"
            }
        }
        if (c && typeof c.top != "undefined") {
            f.style.top = c.top + i + "px"
        } else {
            if (c && typeof c.bottom != "undefined") {
                f.style.top = c.bottom + i + "px"
            } else {
                f.style.top = h + i + "px"
            }
        }
    },
    close: function() {
        this.button.click()
    },
    addConnectDom: function(a) {
        this.connectDom.push(a)
    }
});
var mapPass = {
    dialogTimer: null,
    jumpURL: "http://map.baidu.com/v2Jump.html",
    init: function(a) {
        this.userState = a;
        this.updateFavFun(a);
        mapPass.setFav()
    },
    setFav: function() {
        var a = getParam(location.href);
        if (a && a.FavState) {
            baidu.event.fire("favBtn", "click")
        }
    },
    updateFavFun: function() {},
    setDialog: function() {
        var c = [];
        c.push('<ul class="login_ul"><li id="normal_login" class="login_hover" onclick="UserMgr.clickPage(\'normal\', \'\');return false"><a href="javascript:void(0);" onfocus="this.blur();">普通登录</a></li><li id="phone_login" onclick="UserMgr.clickPage(\'iph\',\'\');return false"><a href="javascript:void(0);" onfocus="this.blur();">手机登录</a></li></ul>');
        c.push('<div id="loginBox_01" class="loginBox"><div id="pass_error_info" class="pass_error_style"></div><div id="passports"></div><div id="loginIframe_iph" style="display:none" ></div></div>');
        c.push('<div class="nopass">还没有帐号？<a href="https://passport.baidu.com/v2/?reg&regType=1&tpl=ma" target="_blank">立即注册</a></div>');
        var b = {
            title: "<strong>登录</strong>",
            content: c.join(""),
            height: 372,
            width: 462,
            extClass: "loginStyle",
            clickClose: false,
            open: function() {},
            noCloseFun: false,
            contentOverFlow: "hidden",
            close: function() {
                T.g("mapmask").style.display = "none";
                clearTimeout(mapPass.dialogTimer)
            }
        };
        var a = window.temp.pass = new Popup(b);
        a.render();
        a.dialog(a)
    }
};
if (location.href.indexOf("ditu.baidu.com") >= 0) {
    mapPass.jumpURL = "http://ditu.baidu.com/v2Jump.html"
}
function MapCenter() {
    T.lang.Class.call(this);
    this.startPoint = map.centerPoint;
    this.unit = 10000;
    this.url = "http://s0.map.baidu.com/?newmap=1&qt=cen";
    this._cbks = []
}
T.extend(MapCenter.prototype, {
    getBound: function() {
        var a = map.getBounds();
        var c = function(b) {
            return parseInt(b / 1000) * 1000
        };
        return c(a.minX) + "," + c(a.minY) + ";" + c(a.maxX) + "," + c(a.maxY)
    },
    request: function() {
        if (modelConfig.enableMapMove == false || map.mapType == BMAP_TYPE_DIMENSIONAL) {
            return
        }
        var f = map.zoomLevel;
        if (f <= 7) {
            window.temp.map_level = f;
            setCurCity("全国", "1", 0);
            return
        }
        var a = map.centerPoint;
        var d = this.startPoint;
        var b = Math.sqrt((d.lng - a.lng) * (d.lng - a.lng) + (d.lat - a.lat) * (d.lat - a.lat));
        if (b > this.unit || window.temp.map_level != f) {
            window.temp.map_level = f;
            this.startPoint = a;
            var c = this;
            scriptRequest(this.url + "&b=" + this.getBound() + "&l=" + f,
            function() {
                c.curCity()
            },
            "_MAP_CENTER_", "gbk")
        }
    },
    curCity: function() {
        if (modelConfig.enableMapMove == false) {
            return
        }
        try {
            if (!_mapCenter) {
                return
            }
            var c = _mapCenter;
            var d = c.content;
            if (!d) {
                return
            }
            if (c && c.current_city && c.current_city.code) {
                GRControll && GRControll.removeTipForMC(c.current_city.code)
            }
            d.sup = c.current_city && c.current_city.sup;
            setCurCity(d.name, d.uid, d.type, d);
            var g = d.uid;
            if (d.sup_bus != null) {
                modelConfig.supBus = d.sup_bus
            }
            if (c.hot_city && _OLR) {
                _OLR.hot_city = c.hot_city
            }
        } catch(f) {}
        for (var b = 0,
        a = this._cbks.length; b < a; b++) {
            if (this._cbks[b] && typeof this._cbks[b] == "function") {
                this._cbks[b]()
            }
        }
    },
    addCallback: function(a) {
        this._cbks.push(a)
    },
    removeCallback: function(c) {
        for (var b = 0,
        a = this._cbks.length; b < a; b++) {
            if (this._cbks[b] === c) {
                this._cbks.splice(b, 1);
                b--
            }
        }
    },
    clearCallbacks: function() {
        this._cbks.length = 0
    }
});
var _gl = null;
var _sign = function() {
    var a = arguments;
    if (_gl) {
        _sign.fun(a)
    } else {
        go("tpl:MapSign", {
            dom: "Jmapsign",
            cinfo: {
                arg: arguments
            }
        });
        _sign.addLink()
    }
};
_sign._USERSHARE = 1;
_sign._USERFAV = 1;
_sign.hideFav = function() {
    T.g("signfav").style.display = "none"
};
_sign.fun = function(a) {
    if (a.length == 1) {
        _gl[a[0]]()
    }
    if (a.length > 1) {
        _gl[a[0]](a[1])
    }
};
_sign.userTagPanl = null;
_sign.exituserSign = function() {
    if (_sign.userTagPanl && _sign.userTagPanl.isVisible()) {
        _gl.oSign.exituserSign()
    }
};
_sign.mapSign = {
    pointInfo: {
        list: {}
    },
    polylineInfo: {
        list: {}
    },
    remarkInfo: {
        list: {}
    }
};
_sign.isNull = function(a) {
    for (var b in a) {
        return 0
    }
    return 1
};
_sign.temp = {
    event: {}
};
_sign.getUserID = function() {
    return T.cookie.get("BAIDUID") || ""
};
_sign.deCodeShare = function(a) {
    var a = a || "";
    return a.replace(/&amp;/g, "&").replace(/&lt;br\/&gt;/g, "<br/>")
};
_sign.cpShare = function() {
    var a = T.g("shareInupt").value;
    if (_sign.cpShare.timer) {
        clearTimeout(_sign.cpShare.timer)
    }
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", a)
    }
    if (T.g("usSharMes")) {
        T.g("usSharMes").style.display = "block"
    }
    _sign.cpShare.timer = setTimeout(function() {
        if (T.g("usSharMes")) {
            T.g("usSharMes").style.display = "none"
        }
    },
    1000);
    return a
};
_sign.cpShareFF = function() {
    var b = T.g("shareInupt").value;
    var c = CreateFlashTra("flashClipBoard", MapConfig.smFlwCon + "image/signClipboard.swf", 33, 18, "method=_sign.cpShare");
    var a = 0;
    if (T.browser.firefox || T.browser.chrome || T.browser.safari) {
        if (T.browser.opera) {
            a = "1"
        }
    }
    var d = baidu.swf.createHTML({
        id: "signLinkBtnFlh",
        url: MapConfig.smFlwCon + "image/fClipboard.swf",
        width: "44",
        height: "24",
        wmode: "transparent",
        ver: "9.0.0"
    });
    _sign.cpShareFF.checkFlash = function() {
        var f = baidu.swf.getMovie("signLinkBtnFlh");
        if (f && f.flashInit && f.flashInit()) {
            clearInterval(_sign.cpShareFF.timer);
            f.setHandCursor(true);
            f.setContentFuncName("_sign.cpShareFF.getPasteData");
            f.setMEFuncName("_sign.cpShareFF.mouseEventHandler")
        }
    };
    _sign.cpShareFF.getPasteData = function() {
        var f = _sign.cpShare();
        return f
    };
    _sign.cpShareFF.mouseEventHandler = function(f) {
        var g = T.g("cpShareCon");
        if (f == "mouse_over") {
            g.className = "on"
        } else {
            if (f == "mouse_down") {
                g.className = "down"
            } else {
                if (f == "mouse_up") {
                    g.className = "on"
                } else {
                    if (f == "mouse_out") {
                        g.className = ""
                    }
                }
            }
        }
    };
    T.g("cpShareCon").innerHTML = d;
    _sign.cpShareFF.timer = setInterval(_sign.cpShareFF.checkFlash, 500)
};
_sign.goShare = function(a) {
    addStat(STAT_SIGN_POISHARE);
    T.g("iw_tool_box") ? T.g("iw_tool_box").style.top = "-2000px": null;
    var b = T.g("iw_share_con");
    go("tpl:SharePanel", {
        dom: b,
        cinfo: {
            from: "iwshare",
            data: a
        },
        onload: function() {
            b.style.display = "";
            _sign._goShare(a)
        }
    })
};
_sign._goShare = function(k) {
    T.g("shareInupt").style.display = "block";
    T.g("cpShareCon_").style.display = "none";
    var k = k && k.uid ? k: null;
    var h = T.g("shareInupt");
    var b = T.g("cpShareCon");
    var a = "http://map.baidu.com/?";
    if (T.browser.chrome) {
        T.g("iwBoxShareInput").style.padding = "0 93px 0 2px"
    }
    T.g("shareInupt").onfocus = function() {
        this.select()
    };
    if (!T.browser.ie) {
        _sign.cpShareFF()
    } else {
        if (b) {
            var j = function(l) {
                if (l.button == 0) {
                    this.className = "down"
                }
            };
            var c = function(l) {
                this.className = "on"
            };
            var d = function(l) {
                this.className = ""
            };
            b.onclick = function() {
                _sign.cpShare()
            };
            T.on(b, "mouseover", c);
            T.on(b, "mousedown", j);
            T.on(b, "mouseup", c);
            T.on(b, "mouseout", d);
            _sign.temp.event.shareCopy = [{
                obj: b,
                type: "mouseover",
                fun: c
            },
            {
                obj: b,
                type: "mousedown",
                fun: j
            },
            {
                obj: b,
                type: "mouseup",
                fun: c
            },
            {
                obj: b,
                type: "mouseout",
                fun: d
            }]
        }
    }
    var g = function() {
        var l = Share.SHARE_PROC_URL + "?url=" + encodeURIComponent(a) + "&web=true&callback=_sign.procCbk";
        _sign._rec = false;
        scriptRequest(l,
        function() {},
        "BMap_share_proc_sign");
        clearTimeout(_sign._timer);
        _sign._timer = setTimeout(function() {
            if (_sign._rec == false) {
                _sign.procCbk({
                    url: a
                })
            }
        },
        3000)
    };
    if (k) {
        a += "poiShareUid=" + k.uid + "&cityCode=" + k.cityCode + "&tn=" + map.mapType;
        if (map._isHybirdShow) {
            a += "&hb=" + BMAP_TYPE_HYBIRD
        }
        g()
    } else {
        var f = _gl.temp.iw.index;
        var i = _sign.mapSign.pointInfo.list[f];
        _gl.getSignLink(baidu.json.stringify(i),
        function(l) {
            if (l.result != 1) {
                T.g("shareInupt").style.display = "none";
                b.style.display = "none";
                T.g("cpShareCon_").style.display = "block";
                T.g("cpShareCon_").innerHTML = "有不符合相关法规政策的词，请修改";
                return
            }
            var m = l.content.shareId;
            a += "poiShareId=" + m;
            a += "&tn=" + map.mapType;
            if (map._isHybirdShow) {
                a += "&hb=" + BMAP_TYPE_HYBIRD
            }
            g()
        },
        "single")
    }
};
_sign.reShare = function() {
    T.g("iw_share_con").style.display = "none";
    if (_sign.temp.event.shareCopy && _sign.temp.event.shareCopy.length > 0) {
        var c = _sign.temp.event.shareCopy;
        for (var a = 0; a < c.length; a++) {
            var b = c[a];
            T.un(b.obj, b.type, b.fun)
        }
    }
};
_sign.procCbk = function(b) {
    var c = T.g("shareInupt");
    var a = T.g("cpShareCon");
    if (b && b.url) {
        _sign._rec = true;
        a.style.display = "inline";
        c.value = b.url;
        c.focus();
        c.select();
        window._iwUrlCbk && window._iwUrlCbk(b.url)
    }
};
_sign.parseShare = function(shareid) {
    T.Ajax.get("userflag/share.php?act=read_share&shareId=" + shareid + "&t=" + new Date().getTime(),
    function(json) {
        eval("var ooo =" + json.responseText);
        if (ooo.result == 1) {
            var con = ooo.content;
            _sign("parseAllShare", con)
        } else {
            _sign();
            _sign.hideMapInfo();
            alert("数据已经删除")
        }
    })
};
_sign.isMaxthon = function() {
    try {
        if (/(\d+\.\d)/.test(external.max_version)) {
            return 1
        }
    } catch(a) {}
};
if (_sign.isMaxthon()) {
    _sign._USERSHARE = 1;
    _sign._USERFAV = 1
}
_sign.setMapInfo = function() {
    var a = getParam(location.href);
    if (a && a.mapShareId || a && a.poiShareId) {
        T.g("declare").style.display = "inline";
        T.g("declare").innerHTML = "以下地图包含网友标记的内容"
    }
};
_sign.hideMapInfo = function() {
    T.g("declare").style.display = "none";
    T.g("declare").innerHTML = ""
};
_sign.addLink = function() {
    if (T.g("signwrap") && T.g("signwrap").innerHTML == "") {
        T.g("signwrap").innerHTML = '<a href="javascript:void(0)" id="signMap" onclick="_sign(\'signMap\');return false">标记</a>'
    }
    if (T.g("signfav") && T.g("signfav").innerHTML == "") {
        T.g("signfav").innerHTML = '<a href="javascript:void(0)" id="openFav" onclick="_sign(\'openFav\');return false">收藏夹</a>'
    }
};
var mapInfoScrollPanel = {
    panel: null,
    init: function() {
        var a = this;
        var b = 5;
        if (T.browser.ie) {
            b = 3
        }
        a.panel = new baidu.ui.ScrollPanel({
            container: "MapInfo",
            overflow: "overflow-y",
            margin: [5, b, 5, 0]
        });
        a.panel.render("MapInfo")
    },
    update: function(c) {
        c = c || {};
        var b = this;
        var a = c.notToTop;
        if (!b.panel || window.isPrint) {
            return
        }
        b.panel.update();
        if (!a) {
            b.panel.getScrollBar().scrollTo(0)
        }
    },
    show: function() {
        var a = this;
        if (!a.panel) {
            return
        }
        var b = a.panel.getTarget();
        a.panel && a.panel.setVisible(true)
    },
    hide: function() {
        var a = this;
        if (!a.panel) {
            return
        }
        var b = a.panel.getTarget();
        a.panel && a.panel.setVisible(false)
    }
};
function loadBody() {
    window.BMAP_TYPE_DIMENSIONAL = window.BMAP_PERSPECTIVE_MAP;
    window.BMAP_TYPE_HYBIRD = "B_SATELLITE_STREET";
    BMap.PolylineTItem = BMap.DistanceTool;
    initMap();
    addMapControls();
    addMapContextMenu();
    setTimeout(function() {
        mapResize()
    },
    200);
    if (T.g("wHistory")) {
        T.g("wHistory").src = "about:blank"
    }
    var param = getParam(location.href);
    _sign.GOSIGN = 1;
    if (param && param.mapShareId) {
        _sign.GOSIGN = 0;
        _sign.parseShare(param.mapShareId)
    }
    if (param && param.poiShareId) {
        _sign.GOSIGN = 0
    }
    if (param && param.mapdebug == 1) {
        var debugUrl = window.location.protocol + "//" + window.location.host;
        if (window.location.pathname) {
            debugUrl += window.location.pathname
        } else {
            debugUrl += "/"
        }
        debugUrl += "mapdebug.js";
        T.Ajax.request(debugUrl, {
            async: false,
            onsuccess: function(xhr) {
                var js = xhr.responseText;
                if (window.execScript) {
                    window.execScript(js)
                } else {
                    window.eval(js)
                }
                if (typeof mapDebug != "undefined") {
                    mapDebug.openDebug()
                }
            }
        })
    }
    if (!MapRevert.revert()) {
        go("tpl:City", {
            cinfo: {
                cityInit: 1
            }
        });
        document.fmwd.word.focus()
    }
    processUrlQuery();
    addMapCenter();
    AsynLoader.get(srUrl.bctrl, {
        onsuccess: function() {
            AsynLoader.get(srUrl.bpack, {
                onsuccess: function() {
                    changeMap(map);
                    handleUrlExt();
                    setTimeout(_adjustMapButtons, 200)
                }
            })
        }
    });
    var param = getParam(location.href);
    if (param && (param.poiShareId || param.poiShareUid)) {
        go("tpl:PoiShare", {
            dom: "MapInfo",
            onload: function() {
                var mapType = param.tn || param.mt;
                if (map.mapType !== mapType) {
                    map.setMapType(mapType)
                }
            }
        })
    }
    if (param && param.hb && param.hb == BMAP_TYPE_HYBIRD) {
        maptypeCtrl && maptypeCtrl.streetMapMgr(true)
    }
    BShare.addCbkStat();
    searchBox.init();
    mapInfoScrollPanel.init();
    SmpMgr.init();
    tools.resetWidth();
    PcToMobile.tip.add()
}
function initMap() {
    var mapType = BMAP_NORMAL_MAP;
    var param = getParam(location.href);
    if (param && (param.tn || param.mt)) {
        mapType = param.tn || param.mt
    }
    window.map = new BMap.Map("MapHolder", {
        coordType: BMAP_COORD_MERCATOR,
        zoomLevelMin: 3,
        mapType: mapType
    });
    var point = new BMap.Point(12957320, 4825100);
    map.enableKeyboard();
    map.enableScrollWheelZoom();
    map.enableInertialDragging();
    map.enableContinuousZoom();
    map.addEventListener("clickex",
    function(e) {
        if (e.overlay && e.overlay instanceof BMap.Circle) {
            if (this.getInfoWindow()) {
                this.closeInfoWindow()
            }
        }
    });
    map.addEventListener("maptypechange",
    function(e) {
        window.setComplaintCenterURL(map, ModelMgr.mainModel)
    });
    map.addEventListener("tilesloaded", indexPageMonitor);
    function indexPageMonitor() {
        Monitor.gp(PDC.DICT.INDEX_TILES_LOAD).view_time();
        Monitor.gp(PDC.DICT.INDEX_TILES_LOAD).ready();
        map.removeEventListener("tilesloaded", indexPageMonitor)
    }
    function userActionStat() {
        var r = window.poiResponse;
        if (!r || switchTab._curSelIndex != 1) {
            window.firstbounds = null;
            window.lastbounds = null;
            window.useraction = null;
            return
        }
        if (r.result && r.result.op_gel == 0) {
            addStat(7000, {
                fbound: window.firstbounds,
                bound: window.lastbounds,
                useraction: window.useraction
            })
        }
    }
    map.addEventListener("movestart",
    function(e) {
        window.firstbounds = foramtBounds()
    });
    map.addEventListener("moveend",
    function(e) {
        window.lastbounds = foramtBounds();
        window.useraction = "move";
        userActionStat()
    });
    map.addEventListener("zoomstart",
    function(e) {
        window.firstbounds = foramtBounds()
    });
    map.addEventListener("zoomend",
    function(e) {
        window.lastbounds = foramtBounds();
        window.useraction = "zoom";
        userActionStat()
    });
    var level = modelConfig.level.country;
    if (_OLR != null) {
        eval("var json =" + _OLR.index);
        _OLR.hot_city = json.hot_city;
        point = geoToPoint(json.content.geo);
        var cityType = [4, 11, 12, 15];
        level = cityType[json.content.city_type];
        if (json.current_city && json.current_city.sup_bus != null) {
            modelConfig.supBus = json.current_city.sup_bus
        }
        modelConfig.defalutCityCode = json.content.code
    }
    var param = getParam(location.href);
    var maptype = param && param.mt || param && param.tn;
    if (param && param.c) {
        var p = param.c.split(",");
        if (p.length == 2) {
            var lng = parseFloat(p[0]);
            var lat = parseFloat(p[1]);
            if (typeof(lng) == "number" && typeof(lat) == "number") {
                point = new BMap.Point(lng, lat)
            }
        }
        if (param.l && typeof(parseInt(param.l)) == "number") {
            level = parseInt(param.l)
        }
        if (maptype == BMAP_TYPE_DIMENSIONAL) {
            var _city = param.cc;
            if (window.isPrint) {
                var c_city = {
                    bj: "北京",
                    sh: "上海",
                    gz: "广州",
                    sz: "深圳",
                    quanzhou: "泉州",
                    kunming: "昆明",
                    fuzhou: "福州",
                    dongguan: "东莞",
                    wuhan: "武汉",
                    taiyuan: "太原",
                    bengbu: "蚌埠",
                    yancheng: "盐城",
                    yiwu: "义乌"
                };
                _city = c_city[param.cc]
            }
            if (_city) {
                map.setCurrentCity(_city);
                point = BMap.Project.convert3DTo2D(map.currentCity, point)
            }
        }
    }
    map.centerAndZoom(point, level);
    T.on(map.platform, "mousedown",
    function() {
        if (document.getElementById("form1") && document.getElementById("form1").word) {
            document.getElementById("form1").word.blur()
        }
    })
}
function _adjustMapButtons() {
    var h = window;
    var f = [h.maptypeCtrl];
    var j = 10,
    d = null,
    a = 10,
    g = 5,
    b = 0;
    f = f.reverse();
    for (var c in f) {
        d = f[c];
        if (!d) {
            continue
        }
        if (d !== h.maptypeCtrl) {
            if (!d.isVisible()) {
                continue
            }
            if (!d._container) {
                continue
            }
            b = parseInt(d._container.style.width);
            if (isNaN(b)) {
                continue
            }
            d.setOffset(new BMap.Size(a, j));
            a += b + g
        } else {
            d.setOffset(new BMap.Size(a, j))
        }
    }
}
function addMapControls() {
    window.stdMapCtrl = new BMap.NavigationControl(window.isPrint ? {
        type: BMAP_NAVIGATION_CONTROL_ZOOM
    }: {
        from: "MAP_INDEX"
    });
    map.addControl(window.stdMapCtrl);
    window.maptypeCtrl = new BMap.MapTypeControl({
        offset: new BMap.Size(230, 10)
    });
    showSateCtrlTip();
    map.addControl(window.maptypeCtrl);
    window.scaleCtrl = new BMap.ScaleControl({
        offset: new BMap.Size(5, 20),
        printable: true
    });
    map.addControl(window.scaleCtrl);
    window.overviewCtrl = new BMap.OverviewMapControl();
    map.addControl(window.overviewCtrl);
    overviewCtrl.addEventListener("viewchanged",
    function(f) {
        if (map.mapType == BMAP_TYPE_DIMENSIONAL) {
            if (!this.isOpen()) {
                addStat(STAT_3D_VIEWMAP)
            }
        }
    });
    if (!window.isPrint) {
        addDataCopyright()
    }
    var b = new BMap.PolylineTItem(map, {
        styleCodes: {
            lnCode: OVERLAY_STYLE.DIS_LINE,
            spCode: OVERLAY_STYLE.DIS_DOT,
            slCode: OVERLAY_STYLE.DIS_LBL,
            tlCode: OVERLAY_STYLE.DIS_T_LBL
        }
    });
    window.distanceControl = b;
    var d = ["PoiSearch", "BusSearchSta", "BusSearchEnd", "DriveSearchSta", "DriveSearchEnd"];
    for (var c = 0,
    a = d.length; c < a; c++) {
        T.on(T.g(d[c]), "mousedown",
        function() {
            closeMeasure()
        })
    }
    map.temp.toolsElement = []
}
function addMapContextMenu() {
    var g = function(i) {
        addStat(STAT_CM_FH);
        if (ModelMgr.mainModel && ModelMgr.mainModel._className == "RouteAddr") {
            var j = i.lng + "," + i.lat;
            go("sd&pt=" + j + "&r=5000", ModelMgr.mainModel.getCMStart, i)
        } else {
            if (switchTab._curSelIndex < 3) {
                go("tpl:BusTrans", {
                    dom: "",
                    cinfo: {
                        isPos: true,
                        destFlag: 0,
                        point: i
                    }
                })
            } else {
                go("tpl:NavTrans", {
                    dom: "",
                    cinfo: {
                        isPos: true,
                        destFlag: 0,
                        point: i
                    }
                })
            }
        }
        if (window.driveCtrl) {
            driveCtrl._fromContextMenu = true
        }
        MapHunter.record("cm", 1, {
            pt: i
        })
    };
    var b = function(i) {
        addStat(STAT_CM_TH);
        if (ModelMgr.mainModel && ModelMgr.mainModel._className == "RouteAddr") {
            var j = i.lng + "," + i.lat;
            go("sd&pt=" + j + "&r=5000", ModelMgr.mainModel.getCMEnd, i)
        } else {
            if (switchTab._curSelIndex < 3) {
                go("tpl:BusTrans", {
                    dom: "",
                    cinfo: {
                        isPos: true,
                        destFlag: 1,
                        point: i
                    }
                })
            } else {
                go("tpl:NavTrans", {
                    dom: "",
                    cinfo: {
                        isPos: true,
                        destFlag: 1,
                        point: i
                    }
                })
            }
        }
        if (window.driveCtrl) {
            driveCtrl._fromContextMenu = true
        }
        MapHunter.record("cm", 2, {
            pt: i
        })
    };
    var h = function(i) {
        var l = i;
        var k = addRangeSearchCenterPoi(l);
        var j = createRangeInfoWnd(l);
        j.addEventListener("close",
        function() {
            exitRangeSearch();
            if (j.overlay) {
                j.overlay.remove()
            }
        });
        j.addEventListener("open",
        function() {
            window.GRControll && window.GRControll.setGRequestFlg(1500);
            map.addEventListener("moveend",
            function() {
                setTimeout(function() {
                    if (T.g("rangekw")) {
                        try {
                            T.g("rangekw").focus()
                        } catch(m) {}
                    }
                },
                100);
                map.removeEventListener("moveend", arguments.callee)
            })
        });
        addStat(STAT_POI_RIGHT_NB);
        openSearchInfoWnd(j, k);
        MapHunter.record("cm", 3, {
            pt: i
        })
    };
    var d = function(i) {
        map.zoomIn(i);
        addStat(STAT_CM_ZOOMIN);
        MapHunter.record("cm", 4, {
            pt: i
        })
    };
    var c = function(i) {
        map.zoomOut(i);
        addStat(STAT_CM_ZOOMOUT);
        MapHunter.record("cm", 5, {
            pt: i
        })
    };
    var f = function(i) {
        map.panTo(i);
        addStat(STAT_CM_CENTER);
        MapHunter.record("cm", 6, {
            pt: i
        })
    };
    var a = createContextMenu([{
        text: "<span id='cmitem_start'> 以此为起点</span>",
        callback: g,
        width: 90
    },
    {
        text: "<span id='cmitem_end'> 以此为终点</span>",
        callback: b,
        width: 90
    },
    {
        separator: true
    },
    {
        text: "<span id='cmitem_nsearch'> 在此点附近找...</span>",
        callback: h,
        width: 90
    },
    {
        separator: true
    },
    {
        text: "<span id='cmitem_zoomin'>放大</span>",
        callback: d,
        width: 70
    },
    {
        text: "<span id='cmitem_zoomout'>缩小</span>",
        callback: c,
        width: 70
    },
    {
        text: "<span id='cmitem_center'>居中</span>",
        callback: f,
        width: 70
    }]);
    map.addEventListener("maptypechange",
    function() {
        if (this.getMapType() == BMAP_NORMAL_MAP) {
            a.enable()
        } else {
            if (this.getMapType() == BMAP_PERSPECTIVE_MAP) {
                a.disable()
            }
        }
    });
    a.addEventListener("open",
    function() {
        if (ModelMgr.mainModel && ModelMgr.mainModel._className == "RouteAddr") {
            return
        }
        if (this.getItem(0)) {
            this.getItem(0).enable()
        }
        if (this.getItem(1)) {
            this.getItem(1).enable()
        }
        if (map.getZoom() < 10) {
            this.getItem(2).disable()
        } else {
            this.getItem(2).enable()
        }
        if (map.getZoom() == map.config.zoomLevelMax) {
            this.getItem(3).disable()
        } else {
            this.getItem(3).enable()
        }
        if (map.getZoom() == map.config.zoomLevelMin) {
            this.getItem(4).disable()
        } else {
            this.getItem(4).enable()
        }
    });
    window.contextMenu = a;
    window.ContextMenuMgr = ["", g, b, h, d, c, f]
}
function switchTab(b, m, l, a) {
    if (window.isPrint) {
        return
    }
    if (b < 1 || b > 3) {
        return
    }
    searchBox.switchTab(b);
    a = a || {};
    var o = a.from || "";
    var q = window.ModelMgr && window.ModelMgr.mainModel && window.ModelMgr.mainModel._className;
    if (o == "button" && q == "RouteAddr") {
        addStat(STAT_CLICK_TAB_ROUTE)
    }
    var k = switchTab._curSelIndex;
    if (b == 1 && m != null && m != "") {
        T.g("PoiSearch").value = m;
        if (poiSSG) {
            poiSSG.setValue(m)
        }
    }
    if (k == b) {
        return
    }
    switchTab._curSelIndex = b;
    for (var d = 1; d <= 3; d++) {
        T.g("tab" + d).className = "";
        T.g("form" + d).style.display = "none"
    }
    T.g("tab" + b).className = "on";
    T.g("form" + b).style.display = "block";
    if (b == 1) {
        try {
            T.g("form1").word.focus()
        } catch(j) {}
    } else {
        T.g("form" + b).word_to.focus();
        T.g("form" + b).word_from.focus()
    }
    if (b != 1) {
        if (k != 1) {
            var h = T.trim(T.g("form" + k).word_from.value);
            var p = T.trim(T.g("form" + k).word_to.value);
            setQValue(p, 2, 1);
            setQValue(h, 2, 0);
            setQValue(p, 3, 1);
            setQValue(h, 3, 0)
        }
        var c = T.trim(T.g("form1").word.value),
        g = T.trim(T.g("form" + b).word_to.value);
        if (g == "" && c != "") {
            setQValue(c, b, 1);
            T.g("form" + b).word_to._fromPoiSearch = true
        }
    }
}
switchTab._ByClickTab = true;
switchTab._curSelIndex = 1;
function switchTabQuery(f) {
    var d = ModelMgr.mainModel._className;
    if (f == 2) {
        if (d == "NavTrans") {
            var c = Instance(window.YXMNavHash);
            if (T.g("DriveSearchSta").value == c.start.wd && T.g("DriveSearchEnd").value == c.end.wd) {
                if (c.sCity.code != c.eCity.code) {
                    addStat(STAT_CBT_NAV2BUS)
                }
                addStat(STAT_BUSANDNAV_TAB, {
                    no: "2"
                });
                go(c.busQueryString);
                return
            } else {
                qSearch(document.fmbus, "bt")
            }
        }
    } else {
        T.g("supBus").innerHTML = "";
        if (d == "BusTrans") {
            addStat(STAT_BUSANDNAV_TAB, {
                no: "3"
            });
            var a = Instance(window.YXMBusHash);
            if (T.g("BusSearchSta").value == a.start.wd && T.g("BusSearchEnd").value == a.end.wd) {
                go(a.navQueryString);
                return
            } else {
                qSearch(document.fmnav, "nav")
            }
        } else {
            if (d == "CBusTrans") {
                addStat(STAT_CBT_BUS2NAV);
                addStat(STAT_BUSANDNAV_TAB, {
                    no: "3"
                });
                var b = Instance(window.CBusTransHashCode);
                if (T.g("BusSearchSta").value == b.start.wd && T.g("BusSearchEnd").value == b.end.wd) {
                    go(b.navQueryString);
                    return
                } else {
                    qSearch(document.fmnav, "nav")
                }
            }
        }
    }
    if (d == "SelAddr" || d == "BusAddr" || d == "NavAddr" || d == "RouteAddr") {
        f == 2 ? qSearch(document.fmbus, "bt") : qSearch(document.fmnav, "nav")
    }
}
function toolbarSubmit() {
    if (T.g("ToolPoiSearch").value == "") {
        T.g("ToolPoiSearch").focus();
        return
    }
    var b = T.g("ToolPoiSearch").value;
    if (b.value == "从火星到地球") {
        return _showCE()
    }
    var a = modelConfig.cityCode || 1;
    setTimeout(function() {
        go("s&wd=" + encodeURIComponent(b) + "&c=" + a + "&src=0")
    },
    100);
    MapHunter.record("se", 1, {
        wd: b,
        cc: a
    })
}
function setQValue(a, b, c) {
    if (!a) {
        a = ""
    }
    if (!b) {
        b = 1
    }
    if (b < 1 || b > 3) {
        return
    }
    if (b == 1) {
        if (window.poiSSG) {
            poiSSG.setValue(a)
        } else {
            T.g("form1").word.value = a
        }
    } else {
        if (b == 2) {
            if (c == 0) {
                if (window.busSSG1) {
                    window.busSSG1.setValue(a)
                } else {
                    setSearchBoxValue("BusSearchSta", a)
                }
            } else {
                if (c == 1) {
                    if (window.busSSG2) {
                        window.busSSG2.setValue(a)
                    } else {
                        setSearchBoxValue("BusSearchEnd", a)
                    }
                }
            }
        } else {
            if (c == 0) {
                if (window.driveSSG1) {
                    window.driveSSG1.setValue(a)
                } else {
                    setSearchBoxValue("DriveSearchSta", a)
                }
            } else {
                if (c == 1) {
                    if (window.driveSSG2) {
                        window.driveSSG2.setValue(a)
                    } else {
                        setSearchBoxValue("DriveSearchEnd", a)
                    }
                }
            }
        }
    }
}
function setQFocus(a, b) {
    if (!a) {
        a = 1
    }
    if (a < 1 || a > 3) {
        return
    }
    if (a == 1) {
        T.g("form1").word.focus()
    } else {
        if (a == 2) {
            if (b == 0) {
                T.g("form2").word_from.focus()
            } else {
                if (b == 1) {
                    T.g("form2").word_to.focus()
                }
            }
        } else {
            if (b == 0) {
                T.g("form3").word_from.focus()
            } else {
                if (b == 1) {
                    T.g("form3").word_to.focus()
                }
            }
        }
    }
}
function setTrfcHighLevel() {
    if (map.mapType == "B_NORMAL_MAP") {
        if (need2ShowTraffic()) {
            window.trafficCtrl && window.trafficCtrl.show()
        } else {
            window.trafficCtrl && window.trafficCtrl.hide()
        }
    }
}
function addMapCenter() {
    if (!map || !MapCenter) {
        return
    }
    modelConfig.enableMapMove = true;
    var a = new MapCenter();
    window.MC = a;
    map.addEventListener("load",
    function(b) {
        a.request()
    });
    map.addEventListener("moveend",
    function(b) {
        a.request()
    });
    map.addEventListener("dragend",
    function(b) {
        a.request()
    });
    map.addEventListener("zoomend",
    function(b) {
        a.request()
    });
    map.addEventListener("load",
    function(b) {
        a.request()
    });
    map.addEventListener("zoomend",
    function(b) {
        setTrfcHighLevel()
    });
    map.addEventListener("load",
    function(b) {
        setTrfcHighLevel()
    })
}
function setTrafficBut() {
    if (need2ShowTraffic() && map.mapType != BMAP_TYPE_DIMENSIONAL) {
        window.trafficCtrl && window.trafficCtrl.show()
    } else {
        window.trafficCtrl && window.trafficCtrl.hide()
    }
}
function need2ShowTraffic() {
    var b = modelConfig.cityCode;
    var c = [AID["北京"], AID["上海"], AID["广州"], AID["深圳"], AID["常州"], AID["成都"], AID["大连"], AID["重庆"], AID["南京"], AID["南昌"], AID["武汉"], AID["宁波"], AID["石家庄"], AID["福州"], AID["天津"], AID["杭州"], AID["长沙"]];
    for (var a = 0; a < c.length; a++) {
        if (b == c[a]) {
            return true
        }
    }
    return false
}
function trafficExit() {
    window.trafficCtrl && window.trafficCtrl.close()
}
function clickCity(a) {
    go("cur&wd=" + encodeURIComponent(a) + "&ie=utf-8")
}
function setCursor(b, a) {
    stopBubble(a);
    map.platform.style.cursor = "pointer";
    b.oncontextmenu = function(c) {
        return false
    }
}
var CloseSuggestion = (function() {
    return Object({
        closeTime: null,
        showTip: function(inputBox) {
            var offdiv = null;
            if (!T.g("sugoff")) {
                offdiv = document.createElement("div");
                with(offdiv) {
                    id = "sugoff";
                    position = "absolute";
                    onselectstart = "return false";
                    style.zIndex = "200"
                }
                document.body.appendChild(offdiv)
            } else {
                offdiv = T.g("sugoff")
            }
            offdiv.innerHTML = "提示功能已关闭,您可以在高级搜索中再次启用";
            var iPos = this.getPos(inputBox);
            offdiv.style.left = iPos[0] * 1 + "px";
            offdiv.style.top = iPos[1] * 1 + parseInt(inputBox.offsetHeight) + "px";
            if (inputBox.offsetWidth >= offdiv.offsetWidth) {
                offdiv.style.width = inputBox.offsetWidth + "px"
            }
            this.closeTime = setTimeout(function() {
                clearTimeout(CloseSuggestion.closeTime);
                if (T.g("sugoff")) {
                    document.body.removeChild(T.g("sugoff"))
                }
            },
            3000)
        },
        getPos: function(el) {
            var xPos = 0,
            yPos = 0;
            while (el != null) {
                xPos += el.offsetLeft;
                yPos += el.offsetTop;
                el = el.offsetParent
            }
            return [xPos, yPos]
        }
    })
})();
window.mapDebug = {
    status: 0,
    openDebug: function() {
        if (this.status) {
            return
        }
        this.status = 1
    },
    getParam: function(a) {
        var c = "";
        var b = a.split("&")[0];
        if (this.status && b == "s") {
            c = "&debug=1";
            if (window.mapDebugObjWxp) {
                c += mapDebugObjWxp.getConfigStr()
            }
        }
        return c
    }
};
var searchBox = {
    inputInfo: {
        BusSearchSta: {},
        BusSearchEnd: {},
        DriveSearchSta: {},
        DriveSearchEnd: {},
        iw_ssn: {},
        iw_esn: {}
    },
    init: function() {
        var a = this;
        a.suggest();
        a.bind()
    },
    suggest: function() {
        var a = 4,
        b = 8;
        if (T.browser.ie) {
            a = 3
        }
        if (T.browser.ie == 7) {
            b = 7
        }
        T.g("PoiSearch").value = "";
        searchBox.setValue("BusSearchSta", "");
        searchBox.setValue("BusSearchEnd", "");
        searchBox.setValue("DriveSearchSta", "");
        searchBox.setValue("DriveSearchEnd", "");
        window.poiSSG = new bdMapSuggest({
            inputid: "PoiSearch",
            closeTip: 1,
            formName: "fmwd",
            _sq: true,
            offset1: [ - b, 0]
        },
        function(d, c) {
            if (c) {
                qSearch(document.fmwd, "loc", d)
            } else {
                if (T.g("PoiSearch")) {
                    T.g("PoiSearch")._wd2 = d
                }
            }
        },
        function() {
            CloseSuggestion.showTip(T.g("PoiSearch"))
        });
        window.busSSG1 = new bdMapSuggest({
            inputid: "BusSearchSta",
            closeTip: 1,
            qType: 2,
            cityid: "modelConfig.cityCode",
            offset1: [ - a, 0]
        },
        function(c) {
            if (T.g("BusSearchSta")) {
                T.g("BusSearchSta")._wd2 = c
            }
        },
        function() {
            CloseSuggestion.showTip(T.g("BusSearchSta"))
        });
        window.busSSG2 = new bdMapSuggest({
            inputid: "BusSearchEnd",
            closeTip: 1,
            qType: 2,
            cityid: "modelConfig.cityCode",
            offset1: [ - a, 0]
        },
        function(c) {
            if (T.g("BusSearchEnd")) {
                T.g("BusSearchEnd")._wd2 = c
            }
        },
        function() {
            CloseSuggestion.showTip(T.g("BusSearchEnd"))
        });
        window.driveSSG1 = new bdMapSuggest({
            inputid: "DriveSearchSta",
            closeTip: 1,
            offset1: [ - a, 0]
        },
        function(c) {
            if (T.g("DriveSearchSta")) {
                T.g("DriveSearchSta")._wd2 = c
            }
        },
        function() {
            CloseSuggestion.showTip(T.g("DriveSearchSta"))
        });
        window.driveSSG2 = new bdMapSuggest({
            inputid: "DriveSearchEnd",
            closeTip: 1,
            offset1: [ - a, 0]
        },
        function(c) {
            if (T.g("DriveSearchEnd")) {
                T.g("DriveSearchEnd")._wd2 = c
            }
        },
        function() {
            CloseSuggestion.showTip(T.g("DriveSearchEnd"))
        });
        poiSSG.setValue("");
        busSSG1.setValue("");
        busSSG2.setValue("");
        driveSSG1.setValue("");
        driveSSG2.setValue("")
    },
    bind: function() {
        var b = this;
        var h = function(i) {
            if (! (i.keyCode < 49 && !d["_" + i.keyCode])) {
                this._wd2 = null
            }
        };
        var d = {
            _8: 1,
            _32: 1,
            _46: 1
        };
        T.on(T.g("PoiSearch"), "keydown", h);
        T.on(T.g("BusSearchSta"), "keydown", h);
        T.on(T.g("BusSearchEnd"), "keydown", h);
        T.on(T.g("DriveSearchSta"), "keydown", h);
        T.on(T.g("DriveSearchEnd"), "keydown", h);
        var c = function() {
            var k = T.getAttr(this, "_from");
            var i = "input_" + k;
            var j = "input_" + k + "_focus";
            var l = this.value;
            window.temp.headSearchBoxFocus = this;
            T.rc(this, i);
            if (l.length == 0) {
                T.ac(this, j)
            } else {
                T.rc(this, i);
                T.rc(this, j)
            }
        };
        var g = function() {
            var k = T.getAttr(this, "_from");
            var i = "input_" + k;
            var j = "input_" + k + "_focus";
            var l = this.value;
            delete window.temp.headSearchBoxFocus;
            T.rc(this, j);
            if (l.length == 0) {
                T.ac(this, i)
            } else {
                T.rc(this, i);
                T.rc(this, j)
            }
        };
        var f = function(n) {
            if (!window.temp.headSearchBoxFocus) {
                return
            }
            var j = window.temp.headSearchBoxFocus;
            var l = T.getAttr(j, "_from");
            var i = "input_" + l;
            var k = "input_" + l + "_focus";
            var m = j.value;
            if (! (j && n.propertyName == "value")) {
                return
            }
            T.rc(j, i);
            if (m.length == 0) {
                T.ac(j, k)
            } else {
                T.rc(j, i);
                T.rc(j, k)
            }
        };
        var a = function() {
            var k = T.getAttr(this, "_from");
            var l = this.value;
            var i = "input_" + k;
            var j = "input_" + k + "_focus";
            T.rc(this, i);
            if (l.length == 0) {
                T.ac(this, j)
            } else {
                T.rc(this, i);
                T.rc(this, j)
            }
        };
        T.on(T.g("BusSearchSta"), "focus", c);
        T.on(T.g("BusSearchEnd"), "focus", c);
        T.on(T.g("DriveSearchSta"), "focus", c);
        T.on(T.g("DriveSearchEnd"), "focus", c);
        T.on(T.g("BusSearchSta"), "blur", g);
        T.on(T.g("BusSearchEnd"), "blur", g);
        T.on(T.g("DriveSearchSta"), "blur", g);
        T.on(T.g("DriveSearchEnd"), "blur", g);
        T.on(T.g("BusSearchSta"), "keyup", c);
        T.on(T.g("BusSearchEnd"), "keyup", c);
        T.on(T.g("DriveSearchSta"), "keyup", c);
        T.on(T.g("DriveSearchEnd"), "keyup", c);
        if (T.browser.ie) {
            T.g("BusSearchSta").attachEvent("onpropertychange", f);
            T.g("BusSearchEnd").attachEvent("onpropertychange", f);
            T.g("DriveSearchSta").attachEvent("onpropertychange", f);
            T.g("DriveSearchEnd").attachEvent("onpropertychange", f)
        } else {
            T.on(T.g("BusSearchSta"), "input", a);
            T.on(T.g("BusSearchEnd"), "input", a);
            T.on(T.g("DriveSearchSta"), "input", a);
            T.on(T.g("DriveSearchEnd"), "input", a)
        }
        T.on(T.g("busReturnIcon"), "mouseover",
        function() {
            var i = ModelMgr.mainModel._className;
            if (i == "BusTrans" || i == "CBusTrans" || i == "NavTrans") {
                this.title = "查看返程"
            } else {
                this.title = "切换起终点"
            }
            T.ac(this, "return_icon_on")
        });
        T.on(T.g("busReturnIcon"), "mouseout",
        function() {
            T.rc(this, "return_icon_on")
        });
        if (T.browser.chrome || T.browser.safari) {
            T.on(T.g("busReturnIcon"), "mousedown",
            function(i) {
                preventDefault(i)
            })
        }
        T.on(T.g("busReturnIcon"), "click",
        function() {
            searchBox.exChange();
            var n = document.fmbus;
            var i = n.word_from.value;
            var p = n.word_to.value;
            var q = ModelMgr.mainModel._className;
            var t = n.word_to._fromPoiSearch;
            b.notShowSuggest.run();
            var o = Instance(window.YXMBusHash);
            var l = Instance(window.CBusTransHashCode);
            var k = Instance(window.NavWalkGuid);
            if (o && q == "BusTrans" && T.g("BusSearchSta").value == o.start.wd && T.g("BusSearchEnd").value == o.end.wd || l && q == "CBusTrans" && !l.noResult && T.g("BusSearchSta").value == l.start.wd && T.g("BusSearchEnd").value == l.end.wd || k && q == "NavWalk" && T.g("BusSearchSta").value == k.start.wd && T.g("BusSearchEnd").value == k.end.wd) {
                if (q == "BusTrans") {
                    o.returnBus()
                } else {
                    if (q == "CBusTrans") {
                        l._back()
                    } else {
                        k.returnDr()
                    }
                }
                addStat(STAT_BUS_RETURNICON_RESULT)
            } else {
                var m = T.g("BusSearchSta")._wd2 ? T.trim(T.g("BusSearchSta")._wd2) : "";
                var j = T.g("BusSearchEnd")._wd2 ? T.trim(T.g("BusSearchEnd")._wd2) : "";
                searchBox.setValue("BusSearchSta", p);
                T.g("BusSearchSta")._wd2 = j;
                searchBox.setValue("BusSearchEnd", i);
                T.g("BusSearchEnd")._wd2 = m;
                if (q == "BusTrans" || q == "CBusTrans" || q == "SelAddr" || q == "BusAddr" || q == "RouteAddr") {
                    qSearch(document.fmbus, "bt");
                    if (q == "RouteAddr") {
                        addStat(STAT_BUS_RETURNICON_ROUTEADDR)
                    }
                    if (q == "BusTrans" || q == "CBusTrans") {
                        addStat(STAT_BUS_RETURNICON_RESULT1)
                    }
                } else {
                    if (t) {
                        addStat(STAT_BUS_RETURNICON_RESULT_POI)
                    } else {
                        if (i.length > 0 && p.length > 0) {
                            addStat(STAT_BUS_RETURNICON_WORD)
                        } else {
                            if (i.length == 0 && p.length == 0) {
                                addStat(STAT_BUS_RETURNICON_NO_WORD)
                            } else {
                                addStat(STAT_BUS_RETURNICON_NO_WORD_1)
                            }
                        }
                    }
                }
            }
            if (T.g("BusSearchSta").value == "") {
                T.g("BusSearchSta").focus()
            } else {
                if (T.g("BusSearchEnd").value == "") {
                    T.g("BusSearchEnd").focus()
                }
            }
            if (T.g("BusSearchSta") && T.g("BusSearchEnd") && T.g("BusSearchSta").value != "" && T.g("BusSearchEnd") != "") {
                addStat(STAT_BUS_RETURNICON)
            }
        });
        T.on(T.g("navReturnIcon"), "mouseover",
        function() {
            var i = ModelMgr.mainModel._className;
            if (i == "BusTrans" || i == "CBusTrans" || i == "NavTrans") {
                this.title = "查看返程"
            } else {
                this.title = "切换起终点"
            }
            T.ac(this, "return_icon_on")
        });
        T.on(T.g("navReturnIcon"), "mouseout",
        function() {
            T.rc(this, "return_icon_on")
        });
        if (T.browser.chrome || T.browser.safari) {
            T.on(T.g("navReturnIcon"), "mousedown",
            function(i) {
                preventDefault(i)
            })
        }
        T.on(T.g("navReturnIcon"), "click",
        function() {
            searchBox.exChange();
            var o = document.fmnav;
            var p = o.word_from.value;
            var j = o.word_to.value;
            var m = ModelMgr.mainModel._className;
            var i = o.word_to._fromPoiSearch;
            b.notShowSuggest.run();
            var n = Instance(window.YXMNavHash);
            if (n && m == "NavTrans" && !!n.total && T.g("DriveSearchSta").value == n.start.wd && T.g("DriveSearchEnd").value == n.end.wd) {
                n.returnDr();
                addStat(STAT_NAV_RETURNICON_RESULT)
            } else {
                var l = T.g("DriveSearchSta")._wd2 ? T.trim(T.g("DriveSearchSta")._wd2) : "";
                var k = T.g("DriveSearchEnd")._wd2 ? T.trim(T.g("DriveSearchEnd")._wd2) : "";
                searchBox.setValue("DriveSearchSta", j);
                T.g("DriveSearchSta")._wd2 = k;
                searchBox.setValue("DriveSearchEnd", p);
                T.g("DriveSearchEnd")._wd2 = l;
                if (m == "NavTrans" || m == "SelAddr" || m == "NavAddr" || m == "RouteAddr") {
                    qSearch(document.fmnav, "nav");
                    if (m == "RouteAddr") {
                        addStat(STAT_NAV_RETURNICON_ROUTEADDR)
                    }
                    if (m == "NavTrans") {
                        addStat(STAT_NAV_RETURNICON_RESULT1)
                    }
                } else {
                    if (i) {
                        addStat(STAT_NAV_RETURNICON_RESULT_POI)
                    } else {
                        if (p.length > 0 && j.length > 0) {
                            addStat(STAT_NAV_RETURNICON_WORD)
                        } else {
                            if (p.length == 0 && j.length == 0) {
                                addStat(STAT_NAV_RETURNICON_NO_WORD)
                            } else {
                                addStat(STAT_NAV_RETURNICON_NO_WORD_1)
                            }
                        }
                    }
                }
            }
            if (T.g("DriveSearchSta").value == "") {
                T.g("DriveSearchSta").focus()
            } else {
                if (T.g("DriveSearchEnd").value == "") {
                    T.g("DriveSearchEnd").focus()
                }
            }
            if (T.g("DriveSearchSta") && T.g("DriveSearchEnd") && T.g("DriveSearchSta").value != "" && T.g("DriveSearchEnd") != "") {
                addStat(STAT_NAV_RETURNICON)
            }
        })
    },
    setValue: function(c, b) {
        var g = T.g(c);
        b = T.trim(b);
        if (!g) {
            return
        }
        var f = T.getAttr(g, "_from");
        var a = "input_" + f;
        var d = "input_" + f + "_focus";
        if (g._fromPoiSearch) {
            g._fromPoiSearch = null
        }
        g.value = b;
        if (b.length > 0) {
            T.rc(g, a);
            T.rc(g, d)
        } else {
            T.ac(g, a)
        }
        g.blur()
    },
    notShowSuggest: {
        state: 0,
        timer: null,
        run: function() {
            var a = searchBox.notShowSuggest;
            a.state = 1;
            if (a.timer) {
                clearTimeout(a.timer)
            }
            a.timer = setTimeout(function() {
                a.state = 0
            },
            300)
        }
    },
    exChange: function() {
        var a = T.object.extend({},
        this.inputInfo.BusSearchSta),
        b = T.object.extend({},
        this.inputInfo.BusSearchEnd),
        c = T.object.extend({},
        this.inputInfo.DriveSearchSta),
        d = T.object.extend({},
        this.inputInfo.DriveSearchEnd);
        this.inputInfo.BusSearchSta = b;
        this.inputInfo.BusSearchEnd = a;
        this.inputInfo.DriveSearchSta = d;
        this.inputInfo.DriveSearchEnd = c
    },
    switchTab: function(f) {
        var a = this.inputInfo.BusSearchSta,
        b = this.inputInfo.BusSearchEnd,
        c = this.inputInfo.DriveSearchSta,
        d = this.inputInfo.DriveSearchEnd;
        if (f == 2) {
            if (!a.point && c.point) {
                this.inputInfo.BusSearchSta = T.object.extend({},
                c)
            }
            if (!b.point && d.point) {
                this.inputInfo.BusSearchEnd = T.object.extend({},
                d)
            }
        }
        if (f == 3) {
            if (!c.point && a.point) {
                this.inputInfo.DriveSearchSta = T.object.extend({},
                a)
            }
            if (!d.point && b.point) {
                this.inputInfo.DriveSearchEnd = T.object.extend({},
                b)
            }
        }
    },
    parseShare: function(b) {
        param = b.split("&");
        var l = param[0],
        f = {},
        a = {},
        d = 0,
        h = 0;
        if (l == "bt" || l == "bse" || l == "nse" || l == "nav") {
            for (var j = 0,
            k = param.length; j < k; j++) {
                if (param[j].indexOf("sn=1") >= 0) {
                    var c = param[j].split("$$");
                    f = {
                        note: c[3],
                        point: c[2]
                    }
                }
                if (param[j].indexOf("en=1") >= 0) {
                    var g = param[j].split("$$");
                    a = {
                        note: g[3],
                        point: g[2]
                    }
                }
                if (param[j].indexOf("sc=") >= 0) {
                    d = param[j].split("=")[1]
                }
                if (param[j].indexOf("ec=") >= 0) {
                    h = param[j].split("=")[1]
                }
            }
            if (l == "bt" || l == "bse") {
                if (f.note && f.point) {
                    if (d) {
                        f.ccode = d
                    }
                    this.inputInfo.BusSearchSta = f
                }
                if (a.note && a.point) {
                    if (h) {
                        a.ccode = h
                    }
                    this.inputInfo.BusSearchEnd = a
                }
            }
            if (l == "nse" || l == "nav") {
                if (f.note && f.point) {
                    if (d) {
                        f.ccode = d
                    }
                    this.inputInfo.DriveSearchSta = f
                }
                if (a.note && a.point) {
                    if (h) {
                        a.ccode = h
                    }
                    this.inputInfo.DriveSearchEnd = a
                }
            }
        }
    }
};
var Special = {
    sectionDiscount: Math.floor((new Date() - Date.parse("01/01/2012")) / (24 * 60 * 60 * 1000)) + ",+",
    data: {
        preferential: {
            title: "优惠券",
            maxTitle: "优惠券",
            wd: "餐饮",
            des: "提供北京市的餐饮类优惠券分布图",
            "北京": "beijing"
        },
        tuan: {
            title: "团购",
            maxTitle: "团购",
            des: "提供北京市的美食、娱乐、生活服务、酒店旅游团购分布图",
            url: "http://map.baidu.com/tuan/?city=" + encodeURIComponent("北京"),
            sup: 0
        },
        subway: {
            title: "地铁",
            maxTitle: "地铁专题",
            spTitle: "#cityName#地铁路线图",
            des: "共有北京，上海，广州，深圳，香港五个城市的地铁路线图",
            url: "http://map.baidu.com/subways/index.html?c=",
            "北京": "beijing",
            "上海": "shanghai",
            "广州": "guangzhou",
            "深圳": "shenzhen",
            "香港特别行政区": "hongkong"
        },
        house: {
            title: "房产",
            maxTitle: "房产地图",
            des: "梦想家——房产专题地图（新浪乐居合作）",
            url: "http://map.baidu.com/house/",
            "北京": "beijing",
            "上海": "shanghai",
            "天津": "tianjin",
            "重庆": "chongqing",
            "合肥": "hefei",
            "福州": "fuzhou",
            "泉州": "quanzhou",
            "厦门": "xiamen",
            "漳州": "zhangzhou",
            "兰州": "lanzhou",
            "东莞": "dongguan",
            "佛山": "foshan",
            "广州": "guangzhou",
            "惠州": "huizhou",
            "江门": "jiangmen",
            "揭阳": "jieyang",
            "汕头": "shantou",
            "深圳": "shenzhen",
            "肇庆": "zhaoqing",
            "中山": "zhongshan",
            "珠海": "zhuhai",
            "北海": "beihai",
            "防城港": "fangchenggang",
            "桂林": "guilin",
            "柳州": "liuzhou",
            "南宁": "nanning",
            "钦州": "qinzhou",
            "贵阳": "guiyang",
            "遵义": "zunyi",
            "海口": "haikou",
            "三亚": "sanya",
            "保定": "baoding",
            "承德": "chengde",
            "邯郸": "handan",
            "廊坊": "langfang",
            "秦皇岛": "qinhuangdao",
            "石家庄": "shijiazhuang",
            "唐山": "tangshan",
            "张家口": "zhangjiakou",
            "大庆": "daqing",
            "哈尔滨": "haerbin",
            "安阳": "anyang",
            "焦作": "jiaozuo",
            "洛阳": "luoyang",
            "郑州": "zhengzhou",
            "鄂州": "ezhou",
            "黄石": "huangshi",
            "荆州": "jingzhou",
            "武汉": "wuhan",
            "宜昌": "yichang",
            "长沙": "changsha",
            "郴州": "chenzhou",
            "衡阳": "hengyang",
            "怀化": "huaihua",
            "娄底": "loudi",
            "湘潭": "xiangtan",
            "永州": "yongzhou",
            "岳阳": "yueyang",
            "张家界": "zhangjiajie",
            "株洲": "zhuzhou",
            "常州": "changzhou",
            "淮安": "huaian",
            "南京": "nanjing",
            "南通": "nantong",
            "苏州": "suzhou",
            "无锡": "wuxi",
            "徐州": "xuzhou",
            "扬州": "yangzhou",
            "镇江": "zhenjiang",
            "赣州": "ganzhou",
            "南昌": "nanchang",
            "长春": "changchun",
            "吉林": "jilin",
            "鞍山": "anshan",
            "大连": "dalian",
            "葫芦岛": "huludao",
            "盘锦": "panjin",
            "沈阳": "shenyang",
            "营口": "yingkou",
            "呼和浩特": "huhehaote",
            "银川": "yinchuan",
            "西宁": "xining",
            "东营": "dongying",
            "济南": "jinan",
            "青岛": "qingdao",
            "日照": "rizhao",
            "泰安": "taian",
            "潍坊": "weifang",
            "威海": "weihai",
            "烟台": "yantai",
            "晋中": "jinzhong",
            "太原": "taiyuan",
            "西安": "xian",
            "咸阳": "xianyang",
            "成都": "chengdu",
            "德阳": "deyang",
            "乐山": "leshan",
            "眉山": "meishan",
            "绵阳": "mianyang",
            "南充": "nanchong",
            "昌吉回族自治州": "changjihuizuzizhizhou",
            "乌鲁木齐": "wulumuqi",
            "昆明": "kunming",
            "西双版纳傣族自治州": "xishuangbannadaizuzizhizhou",
            "杭州": "hangzhou",
            "嘉兴": "jiaxing",
            "宁波": "ningbo",
            "绍兴": "shaoxing",
            "台州": "taizhou"
        },
        weather: {
            title: "天气",
            maxTitle: "全国城市天气预报",
            des: "提供全国各大中城市未来三天的天气预报",
            url: "http://map.baidu.com/fwmap/zt/weather/page.html?qs=1"
        },
        gas: {
            title: "加油站",
            maxTitle: "加油站",
            des: "提供全国各大中城市的加油站分布图",
            "北京": "beijing",
            "上海": "shanghai",
            "广州": "guangzhou",
            "深圳": "shenzhen",
            "天津": "tianjin",
            "杭州": "hangzhou",
            "成都": "chengdu"
        },
        park: {
            title: "停车场",
            maxTitle: "停车场",
            des: "提供#cityName#市范围内的停车场分布图",
            "北京": "beijing",
            "上海": "shanghai",
            "广州": "guangzhou",
            "深圳": "shenzhen",
            "天津": "tianjin",
            "杭州": "hangzhou",
            "成都": "chengdu"
        },
        train: {
            title: "火车票",
            maxTitle: "火车票代售点",
            des: "提供#cityName#市范围内的火车票代售点分布图",
            "北京": "beijing",
            "上海": "shanghai",
            "广州": "guangzhou",
            "深圳": "shenzhen",
            "天津": "tianjin",
            "杭州": "hangzhou",
            "成都": "chengdu",
            "郑州": "zhengzhou",
            "武汉": "wuhan",
            "西安": "xian",
            "南京": "nanjing",
            "长沙": "changsha",
            "海口": "haikou",
            "昆明": "kunming",
            "沈阳": "shenyang",
            "重庆": "chongqing",
            "石家庄": "shijiazhuang",
            "太原": "taiyuan",
            "长春": "changchun",
            "哈尔滨": "haerbin",
            "合肥": "hefei",
            "福州": "fuzhou",
            "南昌": "nanchang",
            "济南": "jinan",
            "贵阳": "guiyang",
            "兰州": "lanzhou",
            "西宁": "xining",
            "南宁": "nanning",
            "呼和浩特": "huhehaote",
            "银川": "yinchuan",
            "乌鲁木齐": "wulumuqi",
            "苏州": "suzhou",
            "东莞": "dongguan",
            "佛山": "foshan",
            "青岛": "qingdao",
            "大连": "dalian",
            "无锡": "wuxi"
        }
    },
    getHtml: function(p) {
        p = p || {};
        var u = p.cityName || modelConfig.cityName,
        o = p.showDescript,
        y = p.liEvent || "",
        d = p.from,
        v = "",
        b = 0,
        l = "";
        if (p.sup & 1) {
            var c = encodeURIComponent(u);
            Special.data.tuan.des = "提供" + u + "的美食、娱乐、生活服务、酒店旅游团购分布图";
            Special.data.tuan.url = "http://map.baidu.com/tuan/?city=" + c;
            Special.data.tuan.sup = 1;
            addStat(STAT_TUAN_CITY_SHOW)
        } else {
            Special.data.tuan.sup = 0
        }
        u = u.replace(/市$/, "");
        for (var w in Special.data) {
            var t = Special.data[w];
            if (!t.title) {
                continue
            }
            var j = "javascript:void(0)",
            g = "",
            m = "",
            q = t.title,
            x = t.maxTitle,
            n = "INDEX",
            f = "",
            h = t.wd;
            var a = Number(/^优惠券$/.test(q));
            if (d == "box") {
                q = t.maxTitle;
                n = "BOX"
            }
            if (t.url) {
                if (w != "weather" && t[u]) {
                    f = t[u]
                }
                var k = window["STAT_" + n + "_" + w.toUpperCase()];
                if (k) {
                    m = 'onclick = "addStat(' + k + ");window.open('" + t.url + f + "')\""
                } else {
                    m = "onclick = \"window.open('" + t.url + f + "')\""
                }
            } else {
                m = "onclick = \"Special.searchWord('" + (!h ? x: h) + "',{type:'" + w + "',codeStr:'" + n + "'" + (a ? ",discount:" + a: "") + '});return false;"'
            }
            if (o) {
                l = "<p>" + t.des + "</p>"
            }
            if (w == "weather" || w == "lunch" || t[u] || (w == "tuan" && Special.data.tuan.sup)) {
                v += "<li" + y + '><a href="' + j + '" ' + g + m + '><img src="' + MapConfig.smFlwCon + './template/eis_y_car/map/image/transparent.gif" class="' + w + '" /><b>' + q + "</b>" + l + "</a></li>";
                b++
            }
        }
        v = v.replace(/#cityName#/g, u);
        return {
            html: v,
            length: b
        }
    },
    _getTuanHtml: function(b) {
        var d = encodeURIComponent(b),
        a = "http://map.baidu.com/tuan/?city=" + d,
        c = "提供" + b + "的美食、娱乐、生活服务、酒店旅游团购分布图";
        addStat(STAT_TUAN_GUIDE_SHOW);
        return '<div class="boxContent tuan-guid"><ul class="toolsIcon"><li onmouseover="T.ac(this,\'hover\')" onmouseout="T.rc(this,\'hover\')" ><a href="javascript:void(0)" onclick="addStat(STAT_TUAN_GUIDE_CLICK);window.open(\'' + a + '\')"><img src="./template/eis_y_car/map/image/transparent.gif" class="tuan" /><b>团购</b><p>' + c + "</p></a></li></ul></div>"
    },
    isBoxInCity: function(a, b) {
        return !! Special.data[a][b.replace(/^\s*|\s*$/g, "").replace(/市$/, "")]
    },
    searchWord: function(b, a) {
        a = a || {};
        var f = a.type,
        d = a.codeStr,
        j = a.discount;
        if (b.length < 1) {
            return
        }
        var g = modelConfig.cityCode || 1;
        var i = "";
        var h = 0;
        var c = map.getBounds();
        if (f && d) {
            addStat(window["STAT_" + d + "_" + f.toUpperCase()]);
            addStat(window.PLACE_FILTER_CODE, {
                ct: d.toLowerCase() + "_" + f.toLowerCase()
            })
        }
        go("s&wd=" + encodeURIComponent(b) + "&c=" + g + "&src=0&wd2=" + encodeURIComponent(i) + "&sug=" + h + "&l=" + map.zoomLevel + "&b=(" + c.minX + "," + c.minY + ";" + c.maxX + "," + c.maxY + ")" + (j ? "&pl_discount_section=" + encodeURIComponent(this.sectionDiscount) + "&pl_data_type=cater&pl_sub_type=" + encodeURIComponent(b) : ""))
    }
};
Ditu = window.Ditu || {};
void
function() {
    var h = Array.prototype.slice;
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;"
    };
    var b = /[&<>"'\/]/g;
    Ditu.escape = function(k) {
        return ("" + k).replace(b,
        function(l) {
            return a[l]
        })
    };
    templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var j = /.^/;
    var d = {
        "\\": "\\",
        "'": "'",
        r: "\r",
        n: "\n",
        t: "\t",
        u2028: "\u2028",
        u2029: "\u2029"
    };
    for (var i in d) {
        d[d[i]] = i
    }
    var g = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var c = /\\(\\|'|r|n|t|u2028|u2029)/g;
    var f = function(k) {
        return k.replace(c,
        function(l, m) {
            return d[m]
        })
    };
    Ditu.Template = function(p, o, m) {
        m = Ditu.apply(m || {},
        templateSettings);
        var n = "__p+='" + p.replace(g,
        function(q) {
            return "\\" + d[q]
        }).replace(m.escape || j,
        function(q, t) {
            return "'+\n((__t=(" + f(t) + "))==null?'':_.escape(__t))+\n'"
        }).replace(m.interpolate || j,
        function(q, t) {
            return "'+\n((__t=(" + f(t) + "))==null?'':__t)+\n'"
        }).replace(m.evaluate || j,
        function(q, t) {
            return "';\n" + f(t) + "\n__p+='"
        }) + "';\n";
        if (!m.variable) {
            n = "with(obj||{}){\n" + n + "}\n"
        }
        n = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n" + n + "return __p;\n";
        var l = new Function(m.variable || "obj", "_", n);
        if (o) {
            return l(o, Ditu)
        }
        var k = function(q) {
            return l.call(this, q, Ditu)
        };
        k.source = "function(" + (m.variable || "obj") + "){\n" + n + "}";
        return k
    };
    Ditu.apply = function(l, k) {
        for (var m in k) {
            l[m] = k[m]
        }
        return l
    }
} ();
var TransformView = function() {
    this.initialize.apply(this, arguments)
};
TransformView.prototype = {
    initialize: function(b, g, c) {
        var d = this.g(b),
        a = this.g(g),
        f = this;
        this.setOptions(c);
        this.index = 0;
        this.nextIndex = 0;
        this.timer = null;
        this._slider = a;
        this._sliderChilds = a.getElementsByTagName("li");
        this.indexNumEls = this.indexNumEl.getElementsByTagName("li");
        this.each(this._sliderChilds,
        function(j, h) {
            j.style.zIndex = h == 0 ? 2 : 1;
            f.setOpacity(j, (h == 0 ? 1 : 0))
        });
        this.count = this._sliderChilds.length || 0;
        if (this.count > 1) {
            this.each(this.indexNumEls,
            function(j, h) {
                j.onmouseover = function() {
                    f.mouseoverFlag = 1;
                    f.flagTimer = setTimeout(function() {
                        f.auto = false;
                        f.nextIndex = h;
                        f.start();
                        if (f.getCurrentIndex != h) {
                            addStat(7000, {
                                fun: "rbanner",
                                mover: 1
                            })
                        }
                    },
                    200)
                };
                j.onmouseout = function() {
                    f.flagTimer && clearTimeout(f.flagTimer);
                    f.mouseoverFlag = 0;
                    f.auto = true;
                    f.nextIndex = f.index;
                    f.start()
                }
            })
        } else {
            if (this.count == 1) {
                this.indexNumEl.style.display = "none"
            }
        }
        if (this.count <= 0) {
            return
        }
        d.style.overflow = "hidden";
        d.style.position = "relative";
        a.style.position = "absolute";
        a.style.top = a.style.left = 0
    },
    setOptions: function(a) {
        this.options = {
            TWEEN: {
                LINEAR: function(g, f, i, h) {
                    return i * g / h + f
                }
            },
            time: 5,
            auto: true,
            pause: 5000,
            mouseoverFlag: 1,
            onStart: function() {},
            onFinish: function() {},
            nowTime: 0,
            duration: 50
        };
        this.apply(this, this.options);
        this.apply(this, a || {})
    },
    start: function() {
        if (this.count == 1) {
            return
        }
        var a = this;
        clearTimeout(this.timer);
        clearTimeout(this.animateTimer);
        a.onStart();
        a.each(a.indexNumEls,
        function(c, b) {
            c.className = a.getNextIndex() == b ? "on": ""
        });
        a.fadeout()
    },
    getCurrentIndex: function() {
        if (this.index >= this.count) {
            this.index = 0
        }
        return this.index
    },
    getNextIndex: function() {
        var a;
        if (this.nextIndex == null) {
            a = this.index + 1 >= this.count ? 0 : this.index + 1
        } else {
            a = this.nextIndex
        }
        return a
    },
    fadeout: function() {
        var b = this,
        a = b.getCurrentIndex(),
        c = b.getNextIndex();
        if (b.mouseoverFlag) {
            b.setOpacity(b._sliderChilds[c], 1)
        } else {
            b.mouseoverFlag = 1
        } (function(g) {
            var f = arguments.callee;
            if (g.nowTime <= g.duration && a != c) {
                var d = g.TWEEN.LINEAR(g.nowTime, 1, -1, g.duration).toFixed(3);
                g.setOpacity(g._sliderChilds[g.index], d);
                g.animateTimer = setTimeout(function() {
                    g.nowTime++;
                    f(g)
                },
                g.time)
            } else {
                if (g.nowTime > g.duration) {
                    g._sliderChilds[c].style.zIndex = 2;
                    g._sliderChilds[g.index].style.zIndex = 1;
                    g.index = c;
                    g.nowTime = 0;
                    g.onFinish()
                }
                g.nextIndex = null;
                if (g.auto) {
                    g.timer = setTimeout(function() {
                        g.start()
                    },
                    g.pause)
                }
            }
        })(this)
    },
    setOpacity: function(b, a) {
        var c = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"]) : undefined;
        if (!c) {
            b.style.opacity = a;
            b.style.KHTMLOpacity = a
        } else {
            b.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(a * 100) + ")"
        }
    },
    each: function(d, b) {
        for (var c = 0,
        a = d.length; c < a; c++) {
            b(d[c], c)
        }
    },
    g: function(a) {
        return "string" == typeof a ? document.getElementById(a) : a
    },
    apply: function(a, c) {
        for (var b in c) {
            a[b] = c[b]
        }
        return a
    }
};
ModelMgr.register("City", '广告区');
function City() {
    T.lang.Class.call(this);
    this.type = "city";
    this.config = {
        cPoint: [12957320, 4825100]
    };
    this.defaultPage = false;
    this.curCity = {};
    window.GRControll && window.GRControll.clearGRMap();
    window.GRControll && window.GRControll.hideGRTool();
    this.customTip1 = '<div id="DEM_CustomTip1" class="DEM_Tip DEM_Tip1"><div class="tip">抱歉，该城市无三维地图</div><button onclick="Instance(\'' + this.guid + "').removeTip(T.g('DEM_CustomTip1'))\"></button></div>";
    this.animation = new Animation();
    this.specialArr = [];
    this.specialInfo = {}
}
T.inherits(City, T.lang.Class, "City");
T.extend(City.prototype, {
    render: function(html, json) {
        if (!json && _OLR) {
            eval("var defData =" + _OLR.index);
            json = defData;
            _OLR.hot_city = json.hot_city;
            this.defaultPage = true;
            if (json.content && json.content.code) {
                modelConfig.defalutCityCode = json.content.code
            }
        }
        if (window.isPrint && !json && !_OLR) {
            T.g("busDrivers").style.display = "none";
            T.g("searchValue").innerHTML = "<li><strong>全国</strong></li>";
            return
        }
        this.json = json;
        switch (json.content.city_type) {
        case 0:
            html = this.setCountry();
            break;
        case 1:
            html = this.setProvince();
            break;
        case 2:
            html = this.setCity(html);
            break;
        case 3:
            html = this.setArea();
            break;
        default:
            break
        }
        if (this.cinfo && this.cinfo.setDefCity) {
            modelConfig.defalutCityCode = this.json.content.code
        }
        html = this._addCbtTip(html, json);
        return html
    },
    _addCbtTip: function(d, c) {
        if (!window.cbtCities) {
            window.cbtCities = []
        }
        if (c.content) {
            var b = c.content.cname;
            if (b && b != "全国") {
                if (window.cbtCities.length > 0) {
                    var a = window.cbtCities[window.cbtCities.length - 1];
                    if (a != b) {
                        window.cbtCities.push(b)
                    }
                } else {
                    window.cbtCities.push(b)
                }
            }
        }
        if (window.cbtCities.length >= 2) {
            var g = window.cbtCities[window.cbtCities.length - 1];
            var f = window.cbtCities[window.cbtCities.length - 2];
            var h = this._getCbtLinkHtml(g, f);
            d = d.replace(/#cbtLink#/gi, h);
            addStat(STAT_CBT_TIPS_ALL)
        }
        return d
    },
    _getCbtLinkHtml: function(c, b) {
        var a = [];
        a.push('<button class="city_close" onclick="this.parentNode.style.display = \'none\';addStat(STAT_CBT_TIPS_CLOSE)"></button>');
        a.push('<p style="background-color:#E4EBF8;margin:2px 0 2px 0;padding: 5px 5px">');
        a.push('<a href="javascript:void(0)" onclick="Instance(\'' + this.guid + "')._openCbtLink('" + c + "', '" + b + "');return false;\">查看公交: 从" + b + "到" + c + "</a>");
        a.push("</p>");
        return a.join("")
    },
    _openCbtLink: function(c, b) {
        addStat(STAT_CBT_TIPS_CLICK);
        var a = "bt&c=" + modelConfig.cityCode + "&sn=2$$$$$$" + encodeURIComponent(b) + "$$0$$$$&en=2$$$$$$" + encodeURIComponent(c) + "$$0$$$$&pn=0&rn=5";
        go(a)
    },
    initialize: function() {
        if (!this.json || !this.json.content) {
            return
        }
        if (this.json.content.city_type == 2) {
            this.bindEvent()
        }
        var c = T.g("MapInfo").getElementsByTagName("img");
        for (var d = 0; d < c.length; d++) {
            c[d].onload = function() {
                window.mapInfoScrollPanel && window.mapInfoScrollPanel.update()
            }
        }
        var h = this.json.content;
        if (this.json.content.cname && this.json.content.if_current == 1) {
            if (!window.isPrint) {
                T.g("curCity").innerHTML = h.cname
            }
            modelConfig.cityName = h.cname;
            if (h.if_current == 1 && h.code) {
                this.curCity = {
                    name: h.cname,
                    code: h.code
                };
                setCurCity(h.cname, h.code, h.city_type, h)
            } else {
                setCurCity(modelConfig.cityName, modelConfig.cityCode, modelConfig.sup)
            }
        } else {
            if (h.if_current == 0 && h.pccode && h.pcname) {
                this.curCity = {
                    name: h.pcname,
                    code: h.pccode
                };
                setCurCity(h.pcname, h.pccode, h.city_type, h)
            }
        }
        this.setMap();
        if (this.json.result.wd != null) {
            if (this.json && this.json.result && this.json.result.jump_back == 1 && this.cinfo && this.cinfo.cityInit != 1 && this.cinfo.defCity != "setDef") {
                if (T.g("searchCity_" + this.guid)) {
                    T.g("searchCity_" + this.guid).style.display = "block"
                }
            }
        }
        var j = T.g("ditie_" + this.guid);
        if (j && this.json.content) {
            var g = [];
            g[AID["北京"]] = "北京市|beijing";
            g[AID["上海"]] = "上海市|shanghai";
            g[AID["广州"]] = "广州市|guangzhou";
            var b = this.json.content.code;
            if (g[b]) {
                var m = g[b].split("|");
                var l = '<div style="color:#f85d00;font-weight:bold;margin-bottom:5px">精彩推荐：</div>';
                if (m[1] == "beijing") {
                    l += '<div style="padding-left:20px;background:url(' + MapConfig.smFlwCon + 'image/city_icon.gif) no-repeat 0 -30px;font-weight:bold">四号线9月28日开通运营</div>';
                    l += '<div style="padding-left:20px">您可搜索：<a target="_blank" href="/?newmap=1&l=12&c=12950013,4828143&i=131,%E5%9C%B0%E9%93%814%E5%8F%B7%E7%BA%BF,f4270ea165df78a85a109328,0&s=tpl%3ALinesQuery">地铁4号线</a>							<a target="_blank" href="/?newmap=1&l=18&c=12955885,4825685&s=inf%26uid%3D722fee03d327cb7527d2bbde%26c%3D131%26newmap%3D1%26it%3D1">西单站</a>							<a target="_blank" href="/?newmap=1&l=18&c=12949165,4836765&s=inf%26uid%3D33ada2df36beb45380288a28%26c%3D131%26newmap%3D1%26it%3D1">中关村站</a></div>';
                    l += '<div style="padding-left:20px;background:url(' + MapConfig.smFlwCon + 'image/city_icon.gif) no-repeat 0 2px;margin:5px 0 20px">								<a href="subways/index.html?c=beijing" style="font-weight:bold;_vertical-align:-2px" target="_blank">北京市地铁路线图</a>								<sup style="color:#F00;vertical-align:2px">New</sup>							</div>'
                }
                if (m[1] == "shanghai") {
                    l += '<div style="padding-left:20px;background:url(' + MapConfig.smFlwCon + 'image/city_icon.gif) no-repeat 0 -59px;margin:5px 0 10px">								<a href="subways/index.html?c=shanghai" style="font-weight:bold;_vertical-align:-2px" target="_blank">上海市地铁路线图</a>								<sup style="color:#F00;vertical-align:2px">New</sup>							</div>'
                }
                if (m[1] == "guangzhou") {
                    l += '<div style="padding-left:20px;background:url(' + MapConfig.smFlwCon + 'image/city_icon.gif) no-repeat 0 -88px;margin:5px 0 10px">								<a href="subways/index.html?c=guangzhou" style="font-weight:bold;_vertical-align:-2px" target="_blank">广州市地铁路线图</a>								<sup style="color:#F00;vertical-align:2px">New</sup>							</div>'
                }
                j.style.display = "";
                j.style.lineHeight = "20px";
                j.innerHTML = l
            }
        }
        this.setBaike();
        if (this.defaultPage || (this.cinfo.defCity != null && this.cinfo.defCity == "setDef")) {
            this.setAsDefCityHtml()
        } else {
            var n = T.g("setDefCity_" + this.guid);
            if (n) {
                n.style.display = "none"
            }
        }
        if (this.json.content.city_type == CITY_TYPE_PROV || this.json.content.city_type == CITY_TYPE_DIST) {
            var k = this;
            var f = this.json.content.uid;
            if (!f) {
                return
            }
            if (window.mapMoveTimer) {
                clearTimeout(window.mapMoveTimer)
            }
            modelConfig.enableMapMove = false;
            go("ext&num=1000&l=10&uid=" + f,
            function(y) {
                if (k.guid != ModelMgr.mainModel.guid) {
                    return
                }
                modelConfig.enableMapMove = true;
                if (y.content && y.content.geo) {
                    var o = parseGeo(y.content.geo);
                    var z = 0;
                    if (y.content.city_type == CITY_TYPE_PROV) {
                        z = AREA_TYPE_PROV
                    }
                    if (y.content.city_type == CITY_TYPE_DIST) {
                        z = AREA_TYPE_DIST
                    }
                    var x = o.points;
                    if (typeof x == "string") {
                        if (k.type == "province") {
                            addArea(x, z, 500)
                        } else {
                            addArea(x, z)
                        }
                    } else {
                        for (var p = 0,
                        a = x.length; p < a; p++) {
                            if (!x[p]) {
                                continue
                            }
                            if (k.type == "province") {
                                if (k.json.content.code == AID["福建"] || k.json.content.code == AID["浙江"]) {
                                    addArea(x[p], z)
                                } else {
                                    addArea(x[p], z, 300)
                                }
                            } else {
                                addArea(x[p], z)
                            }
                        }
                    }
                    var q = o.bound.split(";");
                    var v = new Array();
                    var w = q[0].split(",");
                    var u = q[1].split(",");
                    v.push(new BMap.Point(w[0], w[1]));
                    v.push(new BMap.Point(u[0], u[1]));
                    modelConfig.enableMapMove = false;
                    if (window.mapMoveTimer) {
                        clearTimeout(window.mapMoveTimer)
                    }
                    window.mapMoveTimer = setTimeout(function() {
                        modelConfig.enableMapMove = true
                    },
                    4000);
                    if (k.cinfo._maplevel != null && k.cinfo._centerPoint != null) {
                        map.centerAndZoom(k.cinfo._centerPoint, k.cinfo._maplevel)
                    } else {
                        if (k.type == "area") {
                            setViewport(v)
                        }
                    }
                }
            })
        }
        if (T.g("richBanner")) {
            this.bindEventRb()
        }
    },
    selCity: function(b) {
        if (b.getAttribute("name") == null || b.getAttribute("name") == "") {
            var a = b.innerHTML
        } else {
            var a = b.name
        }
        go("cur&curtp=0&wd=" + encodeURIComponent(a), {
            cinfo: {
                cityInit: 1
            }
        })
    },
    setMap: function() {
        if (this.cinfo.notChangeMapCenter) {
            return
        }
        if (this.cinfo._maplevel != null && this.cinfo._centerPoint != null) {
            map.centerAndZoom(this.cinfo._centerPoint, this.cinfo._maplevel)
        } else {
            var i = modelConfig.level[this.type];
            var g = this.json.content.code;
            if (!g) {
                g = 1
            }
            if (this.json.content.level) {
                i = parseInt(this.json.content.level)
            }
            if (this.type == "country") {
                i = 4
            }
            var b = geoToPoint(this.json.content.geo);
            var d = false,
            a = false,
            c = map.mapType;
            if (MapConfig["3d_city"][g]) {
                d = true
            }
            var h = g;
            if (this.json.current_city && this.json.current_city.code) {
                h = this.json.current_city.code
            }
            if (isSateMapSupportCity(h)) {
                a = true
            }
            if (d) {
                if (i >= 12) {
                    maptypeCtrl.show3DControl();
                    map.setCurrentCity(MapConfig["3d_city"][g][0])
                }
            } else {
                if (c == BMAP_TYPE_DIMENSIONAL) {
                    map.currentCity = "";
                    map.cityCode = "";
                    this.addTip();
                    var f = this;
                    setTimeout(function() {
                        var j = T.g("DEM_CustomTip1");
                        f.removeTip(j)
                    },
                    3000)
                }
                if (c != BMAP_NORMAL_MAP) {
                    a ? maptypeCtrl.hide3DControl() : maptypeCtrl.hide()
                }
            }
            if (d) {
                if ( !! this.json.result && this.json.result.pattern_sign === 1) {
                    map.setMapType(BMAP_SATELLITE_MAP);
                    maptypeCtrl && maptypeCtrl.streetMapMgr(true)
                }
            } else {
                switch (c) {
                case BMAP_TYPE_DIMENSIONAL:
                    map.setMapType(BMAP_NORMAL_MAP);
                    break;
                case BMAP_SATELLITE_MAP:
                    if (!a) {
                        map.setMapType(BMAP_NORMAL_MAP)
                    }
                    break;
                case BMAP_NORMAL_MAP:
                    if ( !! this.json.result && a && this.json.result.pattern_sign === 1) {
                        map.setMapType(BMAP_SATELLITE_MAP);
                        maptypeCtrl && maptypeCtrl.streetMapMgr(true)
                    }
                    break
                }
            }
            map.centerAndZoom(b, i)
        }
    },
    setCity: function(d) {
        var l = this.json;
        this.type = "city";
        var g = l.content;
        if (g && g.error == 0) {
            return "未查找到相关数据！"
        }
        d = d.replace(/#cname#/gi, g.cname);
        d = d.replace(/#tips#/gi, l.result.wd);
        if (this.cinfo.startCity) {
            d = d.replace(/#search_city#/gi, this.cinfo.startCity.name);
            d = d.replace(/#city_code#/gi, this.cinfo.startCity.code)
        }
        if (g.sample && g.sample.poi) {
            d = d.replace(/#sample_poi#/gi, g.sample.poi)
        } else {
            d = d.replace(/#sample_poi_none#/gi, "none")
        }
        if (g.sample && g.sample.route) {
            d = d.replace(/#sample_route#/gi, g.sample.route)
        } else {
            d = d.replace(/#sample_route_none#/gi, "none")
        }
        if (!l.current_city || l.current_city.sup_bus == 1) {
            d = d.replace(/#sample_route_info#/gi, "找公交换乘或驾车路线？您可以输入：");
            d = d.replace(/#function#/gi, "searchWord")
        } else {
            d = d.replace(/#sample_route_info#/gi, "找驾车路线？您可以输入：");
            d = d.replace(/#function#/gi, "searchBus")
        }
        var k = "";
        if (l.weather) {
            k = this.setWeather(l.weather)
        }
        d = d.replace("#weather#", k);
        if ((l.content && l.content.code && modelConfig.defalutCityCode == l.content.code) || (this.cinfo.defCity != null && this.cinfo.defCity == "setDef")) {
            d = d.replace("#setCity_none#", "none")
        }
        var h = [];
        var f = false;
        if (g.sample && g.sample.other) {
            f = g.sample.other
        }
        if (f) {
            for (var c = 0; c < f.length; c++) {
                var b = f[c];
                for (var a = 0; a < b.length; a++) {
                    if (!b[a].name || b[a].name == "" || !b[a].id) {
                        continue
                    }
                    h.push('<a href="javascript:void(0)" onclick="Instance(\'' + this.guid + "').searchWord(this);return false;\">" + b[a].name + "</a>&nbsp;&nbsp;")
                }
                h.push("<br/>")
            }
        }
        if (h.length == 0) {
            d = d.replace("#none#", "none")
        }
        d = d.replace("#sample_other#", h.join(""));
        d = this.setSpecial(d);
        return d
    },
    setProvince: function() {
        this.type = "province";
        var f = this.provinceHtml();
        var d = this.json;
        f = f.replace(/#province_name#/gi, d.content.cname);
        f = f.replace(/#cur_kw#/gi, d.result.wd);
        f = f.replace(/#guid#/gi, this.guid);
        var g = d.content.province;
        var h = "";
        if (g != null) {
            for (var c = 0; c < g.length; c++) {
                var b = g[c];
                var a = Math.ceil(strB(b) / 10) * 62;
                h += '<li style="width:' + a + 'px"><a href="javascript:void(0)" class="switchCity" onclick="go(\'cur&curtp=1&wd=' + encodeURIComponent(b) + "',{cinfo:{cityInit:1}});return false;\">" + b + "</a></li>"
            }
        } else {
            f = f.replace(/#none#/gi, "none")
        }
        if (this.cinfo.cityInit == 1 || d.result.wd == null) {
            f = f.replace(/#searchCity_none#/gi, "none")
        }
        if (this.cinfo.startCity) {
            f = f.replace(/#search_city#/gi, this.cinfo.startCity.name);
            f = f.replace(/#city_code#/gi, this.cinfo.startCity.code)
        }
        f = f.replace(/#city_list#/gi, h);
        return f
    },
    provinceHtml: function() {
        var a = '<table width="260" style="margin:10px;display:inline" cellspacing="0" cellpadding="0" border="0" align="left">          <tr>            <td height="25" valign="top"><strong style="font-size:14px;line-height:17px">#province_name#</strong></td>          </tr>          <tr>            <td>              <span class="f13" style="display:#none#">EGT地图搜索当前支持"<font color="#c60a00">#province_name#</font>"以下城市：</span>            </td>          </tr>          <tr>            <td class="city_list">              <ul>#city_list#</ul>            </td>          </tr>                    <tr>            <td>              <br /><p id="searchCity_' + this.guid + '"" style="display:#searchCity_none#">您是否要<a href="javascript:void(0)" onclick="Instance(\'#guid#\')._cnameSearch(\'#cur_kw#\',\'#city_code#\');return false;">在<b>#search_city#</b>找名称中含有"<b>#cur_kw#</b>"的地点</a></p>            </td>          </tr>        </table>';
        return a
    },
    setCountry: function() {
        this.type = "country";
        var a = this.countryHtml();
        a = a.replace(/#city_search#/gi, 'href="javascript:void(0)" onclick="Instance(\'' + this.guid + "').selCity(this);return false;\"");
        a = a.replace(/#search_word#/gi, 'href="javascript:void(0)" onclick="Instance(\'' + this.guid + "').searchWord(this);return false;\"");
        return a
    },
    countryHtml: function() {
        var c = ['<div class="mapinfo_con country">'];
        c.push("<b>热点城市：</b>");
        c.push('<table style="width:240px;margin-left:10px;table-layout:fixed"><tr>');
        c.push('<td style="width:44px"><a #city_search#>北京</a></td>');
        c.push('<td style="width:44px"><a #city_search#>上海</a></td>');
        c.push('<td style="width:44px"><a #city_search#>广州</a></td>');
        c.push('<td style="width:44px"><a #city_search#>深圳</a></td>');
        c.push('<td style="width:44px"><a #city_search#>成都</a></td>');
        c.push("</tr></table>");
        c.push("<b>全国：</b>");
        var f = ["北京", "上海", "天津", "重庆", ""];
        var g = ["安徽", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "四川", "西藏", "新疆", "云南", "浙江"];
        var d = ["香港", "澳门", "台湾", "", ""];
        c.push('<table style="width:240px;margin-left:10px;line-height:14px;margin-bottom:-1px;table-layout:fixed">');
        for (var b = 0,
        a = f.length; b < a; b++) {
            if (b % 5 == 0) {
                c.push("<tr>")
            }
            if (f[b] == "") {
                c.push('<td style="width:44px"> </td>');
                continue
            }
            c.push('<td style="width:44px"><a #city_search#>' + f[b] + "</a></td>");
            if (b % 5 == 4) {
                c.push("</tr>")
            }
        }
        c.push("</table>");
        c.push('<table style="width:240px;margin-left:10px;line-height:14px;margin-bottom:-1px;table-layout:fixed">');
        for (var b = 0,
        a = g.length; b < a; b++) {
            if (b % 5 == 0) {
                c.push("<tr>")
            }
            if (g[b] == "吉林") {
                c.push('<td style="width:44px"><a #city_search# name="吉林省">' + g[b] + "</a></td>")
            } else {
                c.push('<td style="width:44px"><a #city_search#>' + g[b] + "</a></td>")
            }
            if (b % 5 == 4) {
                c.push("</tr>")
            }
        }
        c.push("</table>");
        c.push('<table style="width:240px;margin-left:10px;line-height:14px;margin-bottom:8px;table-layout:fixed">');
        for (var b = 0,
        a = d.length; b < a; b++) {
            if (b == 0) {
                c.push("<tr>")
            }
            if (d[b] == "") {
                c.push('<td style="width:44px"> </td>');
                continue
            }
            if (d[b] == "台湾") {
                c.push('<td style="width:44px"><a href="javascript:void(0)" onclick="go(\'s&wd=' + encodeURIComponent("台湾") + "');return false;\">台湾</a></td>")
            } else {
                c.push('<td style="width:44px"><a #city_search#>' + d[b] + "</a></td>")
            }
            if (b == a - 1) {
                c.push("</tr>")
            }
        }
        c.push("</table>");
        c.push("<b>搜索示例：</b>");
        c.push('<p style="padding-left:12px">找建筑、餐厅、旅游景点？您可以尝试：');
        c.push('<span style="padding-left:0">"<a #search_word#>中关村大厦</a>"<br>"<a #search_word#>广州 中餐馆</a>"</span>');
        c.push("</p>");
        c.push('<p style="padding-left:12px">要找公交换乘或驾车路线？您可以直接输入"从……到……" 进行搜索，例如：');
        c.push('<span style="padding-left:0">"<a #search_word#>从中关村到天安门</a>"<br>"<a #search_word#>从世界之窗到地王大厦</a>"</span>');
        c.push("</p>");
        c.push('<div id="setDefCity_' + this.guid + '"></div>');
        c.push('<div id="user_feedback" class="blueC">EGT提醒您：结果有错误？请到<a id="mapComplaintCenter" href="http://192.168.1.135/add?place=#keyword#" onclick="addStat(STAT_TOUSU_LIST_NOR)" target="_blank">EGT地图投诉中心</a>反馈。</div>');
        c.push("</div>");
        return c.join("")
    },
    setArea: function() {
        this.type = "area";
        var c = this.json;
        var b = this.areaHtml();
        var a = c.content.cname;
        b = b.replace(/#cname#/gi, a);
        b = b.replace(/#guid#/gi, this.guid);
        b = b.replace(/#cur_kw#/gi, c.result.wd);
        var d = "";
        if (c.weather) {
            d = this.setWeather(c.weather)
        }
        b = b.replace(/#weather#/gi, d);
        if ((a.indexOf("县") == -1) || (c.content && c.content.code && modelConfig.defalutCityCode == c.content.code) || (this.cinfo.defCity != null && this.cinfo.defCity == "setDef")) {
            b = b.replace("#setCity_none#", "none")
        }
        if ((c.result && c.result.jump_back != 1) || this.cinfo.cityInit == 1 || c.result.wd == null) {
            b = b.replace(/#searchCity_none#/gi, "none")
        }
        if (this.cinfo.startCity) {
            b = b.replace(/#search_city#/gi, this.cinfo.startCity.name);
            b = b.replace(/#city_code#/gi, this.cinfo.startCity.code)
        }
        return b
    },
    areaHtml: function() {
        var a = '<div class="mapinfo_con" style="display:#setCity_none#;">            <div>              <button class="city_close" onclick="this.parentNode.style.display=\'none\'"></button>              <p style="background:#e4ebf8;padding:5px">                已切换至<b>#cname#</b>，您可将其<nobr><a href="javascript:void(0)" title="如设置成功，您下次访问时将直接进入#cname#" onclick="Instance(\'' + this.guid + '\').setDefCity(\'#cname#\',this, 1);return false;">设为默认城市</a></nobr>              </p>            </div>                        <div>                            #cbtLink#                        </div>          </div>          <div style="padding:0 10px;line-height: 140%;" id="baike_' + this.guid + '">              <div style="border-bottom: 1px solid rgb(207, 207, 207); height: 28px; line-height: 28px; font-size: 14px; font-weight: bold; margin: 5px 0;">                <strong style="font-size: 14px;">#cname#</strong>              </div>          </div>          <p id="searchCity_' + this.guid + '"" style="display:#searchCity_none#;padding:10px">您是否要<a href="javascript:void(0)" onclick="Instance(\'#guid#\')._cnameSearch(\'#cur_kw#\',\'#city_code#\');return false;">在<b>#search_city#</b>找名称中含有"<b>#cur_kw#</b>"的地点</a></p>          <div id="setDefCity_' + this.guid + '" style="padding: 0 0 10px 10px"></div>          <div style="padding:0 10px">#weather#</div>';
        return a
    },
    setDefCity: function(b, d, f) {
        var c = this;
        var a = b;
        f = f || 0;
        go("def&deftp=" + f + "&wd=" + encodeURIComponent(a),
        function(g) {
            if (g.content != null && g.content.error != null && g.content.error == 1) {
                if (c.json && c.json.content && c.json.content.code) {
                    modelConfig.defalutCityCode = c.json.content.code;
                    d.parentNode.parentNode.innerHTML = "已设置成功！"
                } else {
                    d.parentNode.parentNode.innerHTML = "默认城市设置失败"
                }
            } else {
                d.parentNode.parentNode.innerHTML = "默认城市设置失败"
            }
        })
    },
    setAsDefCityHtml: function() {
        var a = T.g("setDefCity_" + this.guid);
        if (a) {
            this.setDefHtml(0);
            a.style.display = ""
        }
    },
    setDefHtml: function(d) {
        var f = this;
        var c = new Array();
        c[0] = '<font style="vertical-align:-2px"><b>默认城市：</b>' + this.json.content.cname + '&nbsp; <a href="javascript:void(0)" onclick="Instance(\'' + this.guid + "').setDefHtml(1);return false;\">修改</a></font>";
        c[1] = "<form onsubmit=\"Instance('" + this.guid + '\').updateDefCity();return false">            <b style="*vertical-align:4px">默认城市：</b>            <input type="text" style="width:70px" value="' + this.json.content.cname + '" id="defCityWd_' + this.guid + '"/>            <input type="submit" style="padding:0 2px" value="确定"/>            <input type="button" style="padding:0 2px" value="取消" onclick="Instance(\'' + this.guid + '\').setDefHtml(0)"/>            <div style="color:#d81221;text-indent:70px" id="error_info_' + this.guid + '"></div>          </form>';
        var b = T.g("setDefCity_" + this.guid);
        b.innerHTML = c[d];
        var a = T.g("defCityWd_" + this.guid);
        if (a) {
            setTimeout(function() {
                try {
                    if (window.city_sg2) {
                        city_sg2.disposeSug()
                    }
                    var h = T.g("defCityWd_" + f.guid).value;
                    window.city_sg2 = new bdMapSuggest({
                        inputid: "defCityWd_" + f.guid,
                        qType: 1,
                        closeB: 1
                    });
                    city_sg2.setValue(h);
                    a.focus();
                    a.select()
                } catch(g) {}
            },
            100);
            return
        }
    },
    updateDefCity: function() {
        var a = T.g("defCityWd_" + this.guid);
        if (a.value == "") {
            T.g("error_info_" + this.guid).innerHTML = "请输入正确的城市名";
            a.focus();
            return
        } else {
            var b = this;
            go("def&deftp=0&wd=" + encodeURIComponent(a.value),
            function(c) {
                if (c.content != null && c.content.error != null && c.content.error == 1) {
                    if (c.result && c.result.wd != null) {
                        var d = encodeURIComponent(c.result.wd);
                        go("cur&wd=" + d, {
                            cinfo: {
                                defCity: "setDef",
                                setDefCity: true
                            }
                        })
                    } else {
                        T.g("error_info_" + b.guid).innerHTML = "请输入正确的城市名"
                    }
                } else {
                    T.g("error_info_" + b.guid).innerHTML = "请输入正确的城市名"
                }
            })
        }
    },
    delDefCity: function() {
        var a = this;
        go("def&wd=" + encodeURIComponent("全国"),
        function(b) {
            a.setDefHtml(0)
        })
    },
    searchWord: function(f, c) {
        c = c || {};
        var g = c.from || "";
        var a = "";
        if (g == "index") {
            a = "&sefrom=1"
        }
        if (typeof(f) == "object") {
            var d = encodeURIComponent(f.innerHTML)
        } else {
            var d = encodeURIComponent(f)
        }
        var b = this.curCity.code;
        if (b) {
            go("s&wd=" + d + "&c=" + b + a)
        } else {
            go("s&wd=" + d + a)
        }
    },
    searchBus: function(c) {
        var b = this.json.content.code;
        var a = c.innerHTML.replace("从", "").split("到");
        go("nav&c=" + b + "&sy=0&sc=" + b + "&ec=" + b + "&sn=2$$$$$$" + encodeURIComponent(a[0]) + "$$$$$$&en=2$$$$$$" + encodeURIComponent(a[1]) + "$$$$$$")
    },
    setBaike: function() {
        var c = T.g("baike_" + this.guid);
        if (c != null) {
            var b = this.json.content.gbk_name;
            var a = this.json.content.baike;
            if (b == null) {
                return
            }
            b = b.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
            if (a != 1) {
                return
            }
            window.baikeBox = c;
            this.baikeName = b;
            this.getBaike()
        }
    },
    getBaike: function() {
        var c = {
            grant_type: "client_credentials",
            client_id: "eAlzIrF7aWzmi8kLr8PDRNCQ",
            client_secret: "TcQqN5qHaN17OV2tA25icrIZTIiWxrbH",
            cb: "Instance('" + this.guid + "').getAccessTokenCallback",
            url: "https://openapi.baidu.com/oauth/2.0/token"
        };
        var a = "http://map.baidu.com/maps/services/get_proxy?";
        var b = a + jsonToQuery(c);
        baidu.sio.callByBrowser(b)
    },
    getAccessTokenCallback: function(b) {
        if (b && b.access_token) {
            var c = {
                access_token: b.access_token,
                appid: "314359",
                bk_key: this.baikeName,
                bk_length: 400,
                bk_count: 6,
                callback: "getBaikeCardCallback"
            };
            var a = "https://openapi.baidu.com/rest/2.0/baike/openapi/BaikeLemmaCardApi?" + jsonToQuery(c);
            baidu.sio.callByBrowser(a)
        }
    },
    setWeather: function(data) {
        function leftB(str, len) {
            var s = str.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
            return str.slice(0, s.slice(0, len).replace(/\*\*/g, " ").replace(/\*/g, "").length)
        }
        function lenB(str) {
            return str.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**").length
        }
        try {
            var str = '<strong>#city#天气预报</strong>      <div style="height:70px;width:260px;color:#333;margin-top:3px">        <div style="width:120px;float:left;height:65px">          <strong>今天&nbsp; &nbsp; #temp1#</strong><br/>          <div style="padding-top:4px"><img src="#pic11#" style="width:38px;height:38px;float:left;margin:0 6px 0 0"/>          <span title="#weather1#" alt="#weather1#">#weather_str1#</span><br/>#wind1#</div>        </div>        <div style="width:130px;float:left;height:65px;border-left:1px solid #e1e1e1;padding-left:6px">          明天&nbsp; &nbsp; #temp2#<br/>          <div style="padding-top:4px"><img src="#pic21#" style="width:38px;height:38px;float:left;margin:0 6px 0 0"/>          <span title="#weather2#" alt="#weather2#">#weather_str2#</span><br/>#wind2#</div>        </div>      </div>      <div style="color:#666">以上信息由<a href="#url#"  style="color:#666" target="_blank">中国气象局</a>提供</div>';
            eval("var json=" + data);
            if (json.weather0 != null) {
                str = str.replace("#url#", json.url);
                str = str.replace("#wind1#", json.wind0 ? json.wind0: "");
                str = str.replace(/#weather1#/gi, json.weather0 ? json.weather0: "");
                str = str.replace("#temp1#", json.temp0 ? json.temp0: "");
                str = str.replace("#wind2#", json.wind1);
                str = str.replace("#weather2#", json.weather1);
                str = str.replace("#temp2#", json.temp1);
                var wStr1 = json.weather0;
                if (lenB(wStr1) > 12) {
                    str = str.replace("#weather_str1#", (leftB(wStr1, 10) + "..."))
                } else {
                    str = str.replace("#weather_str1#", wStr1)
                }
                var wStr2 = json.weather1;
                if (lenB(wStr2) > 12) {
                    str = str.replace("#weather_str2#", (leftB(wStr2, 10) + "..."))
                } else {
                    str = str.replace("#weather_str2#", wStr2)
                }
                var hours = new Date().getHours();
                str = str.replace("#pic11#", json.pic01);
                str = str.replace("#pic21#", json.pic11);
                str = str.replace("#city#", this.json.content.cname);
                return str
            } else {
                str = str.replace("#url#", json.url);
                str = str.replace("#wind1#", json.wind1 ? json.wind1: "");
                str = str.replace(/#weather1#/gi, json.weather1 ? json.weather1: "");
                str = str.replace("#temp1#", json.temp1 ? json.temp1: "");
                str = str.replace("#wind2#", json.wind2);
                str = str.replace("#weather2#", json.weather2);
                str = str.replace("#temp2#", json.temp2);
                var wStr1 = json.weather1;
                if (lenB(wStr1) > 12) {
                    str = str.replace("#weather_str1#", (leftB(wStr1, 10) + "..."))
                } else {
                    str = str.replace("#weather_str1#", wStr1)
                }
                var wStr2 = json.weather2;
                if (lenB(wStr2) > 12) {
                    str = str.replace("#weather_str2#", (leftB(wStr2, 10) + "..."))
                } else {
                    str = str.replace("#weather_str2#", wStr2)
                }
                var hours = new Date().getHours();
                str = str.replace("#pic11#", json.pic11);
                str = str.replace("#pic21#", json.pic21);
                str = str.replace("#city#", this.json.content.cname);
                return str
            }
        } catch(e) {
            return ""
        }
    },
    setSpecial: function(d) {
        var c = this.json.special;
        var g = this.json.content;
        var a = "hidden",
        h = "",
        f = 0,
        i = "本地生活";
        var b = Special.getHtml({
            cityName: g.cname,
            sup: g.sup
        });
        h = b.html;
        f = b.length;
        d = d.replace(/#special#/gi, h);
        if (f > 4) {
            a = ""
        }
        d = d.replace(/#boxConRVisibility#/gi, a);
        d = d.replace(/#boxMoreVisibility#/gi, a);
        d = d.replace(/#toolBoxTitle#/gi, i);
        d = this.setCmsAd(d);
        return d
    },
    setCmsAd: function(p) {
        var E = this.json.special && this.json.special.data;
        if (!E) {
            return p
        }
        var q = "";
        var a = ["top", "bottom", "banner"];
        for (var A = 0; A < a.length; A++) {
            var F = a[A];
            var b = E[F] || [];
            var B = b.length;
            if (!b || B < 1) {
                continue
            }
            var x = "";
            var h = parseInt(Math.random() * B);
            var v = b[h];
            var g = new RegExp("#" + F + "AdStr#", "gi");
            var C = v.type,
            u = v.title,
            t = v.pic_url,
            l = v.href,
            k = v.style || "",
            z = v.stat_code * 1,
            m = v.show_prom * 1,
            o = "",
            d = u,
            D = "",
            j = 'target="_blank"',
            c = "",
            w = "";
            if (m) {
                o = "<b>推广链接：</b>"
            }
            if (T.trim(l).length < 1) {
                l = "javascript:void(0)";
                j = "";
                c = ";return false;"
            }
            if (z > 259 && z < 300) {
                D = ' onclick="addStat(' + z + ")" + c + '"'
            }
            if (C == "image") {
                d = "";
                if (T.trim(t).length > 0) {
                    d = '<img src="' + t + '" />'
                }
            }
            if (T.trim(d).length < 1) {
                continue
            }
            if (F == "top") {
                w = " cityTip_top"
            }
            if (F == "banner" && T.trim(d).length > 0) {
                q = '<a href="' + l + '"' + j + D + ">" + d + "</a>"
            }
            x = '<div class="cityTip_' + C + "_" + k + w + '">' + o + '<a href="' + l + '"' + j + D + ">" + d + "</a></div>";
            p = p.replace(g, x)
        }
        if (T.G("mapBanner")) {
            T.G("mapBanner").innerHTML = q
        }
        var n = ["top_html", "bottom_html"];
        for (var A = 0; A < n.length; A++) {
            var G = n[A];
            var f = E[G];
            var y = new RegExp("#" + G + "AdStr#", "gi");
            if (f) {
                p = p.replace(y, f)
            }
        }
        p = p.replace(/#topAdStr#/gi, "");
        p = p.replace(/#bottomAdStr#/gi, "");
        p = p.replace(/#top_htmlAdStr#/gi, "");
        p = p.replace(/#bottom_htmlAdStr#/gi, "");
        p = this.setRichBanner(p);
        return p
    },
    setPctoMoin: function(a) {
        var b = ['<div class="pctomoin">', '<a onclick="PcToMobile.open(\'CITY\')" href="javascript:void(0)">', '<img width="273" height="59" src="./template/eis_y_car/map/image/pctomoicon.png?v=120808" alt="手机地图下载" />', "</a>", "</div>"];
        return a.replace(/#pctomoin#/gi, b.join(""))
    },
    setRichBanner: function(c) {
        var b = this.json.special && this.json.special.data,
        a = b.richbanner;
        if (!a || a.length == 0) {
            return c.replace(/#richbanner#/gi, "")
        }
        b.richStyle = this.richStyle = a[0].style;
        addStat(7000, {
            fun: "rbanner",
            rbanner: 1
        });
        tpl = ['<div class="rb-container" style=<%=richStyle == 3 ? \'height:97px;\' : \'height:118px;\'%> id="richBanner"><ul class="rb-slider rb-slider2" id="rb_slider">', "<% for (var i = 0; i < richbanner.length && i < 3; i++) { %>", "<li style=<%=richStyle == 3 ? 'height:97px;' : 'height:118px;'%> >", '<a href="<%=richbanner[i].href%>" target="_blank"><img src="<%=richbanner[i].pic_url%>" /></a>', "<% if(richStyle != 3) { %>", '<p class="rb-tag">', "<% if(richStyle == 1) { %>", "<% for (var j = 0; j < richbanner[i].tags.length; j++) { %>", '<a href="<%=richbanner[i].tags[j].tag_url%>" target="_blank"><%=richbanner[i].tags[j].tag%></a>', "<% } %>", '<a style="position:absolute;right:5px;_right:3px;top:0;" href="<%=richbanner[i].href%>" target="_blank">更多》</a>', "<% } %>", "<% if(richStyle == 2) { %>", '<a href="<%=richbanner[i].word_link_url%>" target="_blank">', '<%=richbanner[i].word_link.length > 20 ? richbanner[i].word_link.substr(0,20) + "..." : richbanner[i].word_link%>', "</a>", "<% } %>", "</p>", "<% } %>", "</li>", "<% } %>", "</ul>", '<ul class="rb-num" id="rb_num">', "<% for (var i = 0; i < richbanner.length && i < 3; i++) { %>", "<li></li>", "<% } %>", "</ul>", "</div>"];
        var d = Ditu.Template(tpl.join(""));
        c = c.replace(/#richbanner#/gi, d(b));
        return c
    },
    bindEventRb: function() {
        var b = this,
        a = T.g("rb_num"),
        d = T.g("richBanner"),
        c = new TransformView(d, "rb_slider", {
            pause: 5000,
            indexNumEl: a
        });
        c.start();
        T.on(d, "click",
        function(h) {
            var g = {
                fun: "rbanner",
                rstyle: b.richStyle,
                ridx: c.getCurrentIndex()
            },
            f = (T.event.getTarget(h).tagName + "").toUpperCase();
            if (f == "IMG") {
                g.ct = "bn"
            } else {
                if (f == "A") {
                    g.ct = "a"
                }
            }
            addStat(7000, g)
        })
    },
    removeTip: function(a) {
        if (a) {
            a.parentNode.removeChild(a)
        }
    },
    addTip: function() {
        if (this.customTip1) {
            beforeEndHTML(document.body, this.customTip1)
        }
        T.g("DEM_CustomTip1").style.left = map.width / 2 - 104 + "px";
        if (map.fullScreenMode) {
            T.g("DEM_CustomTip1").style.top = "30px"
        }
    },
    bindEvent: function() {
        var c = this,
        b = T.g("cityBoxBtnL"),
        d = T.g("cityBoxBtnR"),
        a = T.g("cityBoxCon");
        T.on(d, "click",
        function() {
            c.animation.build({
                fps: 100,
                transition: Transitions.easeInCubic,
                duration: 100,
                render: function(f) {
                    d.style.visibility = "hidden";
                    a.style.left = -232 * f + "px";
                    232
                },
                finish: function() {
                    b.style.visibility = ""
                }
            })
        });
        T.on(b, "click",
        function() {
            c.animation.build({
                fps: 100,
                transition: Transitions.easeInCubic,
                duration: 100,
                render: function(f) {
                    b.style.visibility = "hidden";
                    a.style.left = -(232 - 232 * f) + "px";
                    232
                },
                finish: function() {
                    d.style.visibility = ""
                }
            })
        })
    },
    _cnameSearch: function(b, d) {
        var f = encodeURIComponent(b);
        var g = d || modelConfig.cityCode;
        var a = "con&contp=0&wd=" + f + "&pn=0&c=" + g;
        if ( !! this.json.result && this.json.result.pattern_sign === 1) {
            a += "&check_sate=0"
        }
        go(a)
    }
});
function getBaikeCardCallback(d) {
    if (d && d.key && d["abstract"]) {
        var b = d["abstract"].replace(/<[^>].*?(>|$)/g, "") + "...";
        var c = ['<div style="height:28px;line-height:28px;font-size:14px;font-weight:bold;border-bottom:1px solid #cfcfcf;margin:5px 0">'];
        c.push('<strong style="font-size:14px">' + d.key + "</strong></div>");
        c.push('<font style="color:#666">' + b + "</font><div>");
        c.push('<div style="text-align:right;">来自 <a href="' + d.url + '" target="_blank">百科</a><div>');
        window.baikeBox.innerHTML = c.join("")
    }
}
function selectCity(f, c) {
    if (window.temp.cityPop) {
        window.temp.cityPop.close();
        return
    }
    var d = {
        title: "城市列表",
        content: "",
        height: 353,
        width: 390,
        open: function() {
            if (this.styleSwitch) {
                T.ac(f, "curcity-expand-selected")
            }
        },
        close: function() {
            if (this.styleSwitch) {
                T.rc(f, "curcity-expand-selected")
            }
            delete window.temp.cityPop
        }
    };
    for (var b in c) {
        d[b] = c[b]
    }
    var a = window.temp.cityPop = new Popup(d);
    a.addConnectDom(f);
    a.render();
    a.hide();
    if (d && typeof d.right != "undefined") {
        a.getDom().style.right = d.right + "px"
    } else {
        if (d && typeof d.left != "undefined") {
            a.getDom().style.left = d.left + "px"
        } else {
            if (sideBar.status == "close") {
                a.getDom().style.left = "12px"
            } else {
                a.getDom().style.left = "322px"
            }
        }
    }
    if (d && typeof d.top != "undefined") {
        a.getDom().style.top = d.top + "px"
    } else {
        if (d && typeof d.bottom != "undefined") {
            a.getDom().style.top = d.bottom + "px"
        } else {
            if (map.fullScreenMode) {
                a.getDom().style.top = "28px";
                a.getDom().style.left = "12px"
            } else {
                a.getDom().style.top = "139px"
            }
        }
    }
    c.exitLargeMapMode = false;
    go("tpl:SelectCity", {
        dom: a.content,
        cinfo: c,
        onload: function() {
            a.show()
        }
    });
    addStat(STAT_CHANGE_CITY)
}
function lineQuery(a) {
    a = a || "";
    var c = "";
    var b = modelConfig.cityCode || 1;
    if (a.length > 0) {
        c = "?c=" + b + "&word=" + a
    }
    window.GRControll && GRControll.clearGRMap();
    window.GRControll && GRControll.hideGRTool();
    if (setBusInfo()) {
        go("tpl:LinesQuery" + c)
    }
}
function setBusInfo() {
    var a = modelConfig.cityCode == AID["全国"] ? true: false;
    if (modelConfig.supBus == 0 || a) {
        if (modelConfig.cityType < 2 || a) {
            T.g("supBus").innerHTML = "请选择您要查询的城市"
        } else {
            T.g("supBus").innerHTML = "抱歉，该城市不支持公交查询"
        }
        return false
    } else {
        T.g("supBus").innerHTML = "";
        return true
    }
}
function qSearch(u, h, p, y) {
    y = y || {};
    var A = y.from || "";
    var w = window.ModelMgr && window.ModelMgr.mainModel && window.ModelMgr.mainModel._className;
    var k = window.RouteAddrHash && Instance(window.RouteAddrHash);
    var B = this,
    d = modelConfig.cityCode || 1,
    x = d == 1 ? true: false;
    if (h == "loc") {
        u.word.value = filtQuery(u.word.value);
        if (u.word.value == "") {
            u.word.focus();
            return false
        }
        if (u.word.value == "从火星到地球") {
            return _showCE()
        }
        var o = modelConfig.cityCode || 1;
        var F = p || (T.g("PoiSearch") && T.g("PoiSearch")._wd2) || "";
        var j = F ? 1 : 0;
        if (T.g("PoiSearch")) {
            T.g("PoiSearch")._wd2 = null
        }
        if (GRControll) {
            window.GRControll.hideGRTool();
            GRControll.openedMarker = null
        }
        var b = map.getBounds();
        if (A == "button" && w == "RouteAddr") {
            addStat(STAT_SEARCH_IN_ROUTE_POI)
        }
        go("s&wd=" + encodeURIComponent(u.word.value) + "&c=" + o + "&src=0&wd2=" + encodeURIComponent(F) + "&sug=" + j + "&l=" + map.zoomLevel + "&b=(" + b.minX + "," + b.minY + ";" + b.maxX + "," + b.maxY + ")&from=webmap");
        MapHunter.record("se", 5, {
            wd: u.word.value
        })
    } else {
        var G = 2,
        c = 2,
        E = "",
        K = "";
        qt = "",
        wd_sta2 = "",
        wd_end2 = "",
        req = "",
        goext = {},
        scode = d,
        ecode = d,
        sword = T.string.trim(u.word_from.value),
        eword = T.string.trim(u.word_to.value);
        switch (h) {
        case "bt":
            searchSta = "BusSearchSta";
            searchEnd = "BusSearchEnd";
            qt = "bt";
            break;
        case "nav":
            searchSta = "DriveSearchSta";
            searchEnd = "DriveSearchEnd";
            qt = "nav";
            break
        }
        searchBox.setValue(searchSta, filtQuery(sword));
        searchBox.setValue(searchEnd, filtQuery(eword));
        if (sword == "") {
            u.word_from.focus();
            return false
        }
        if (eword == "") {
            u.word_to.focus();
            return false
        }
        if (sword == "火星" && eword == "地球") {
            return _showCE()
        }
        if (T.g(searchSta)) {
            wd_sta2 = T.g(searchSta)._wd2 || "";
            T.g(searchSta)._wd2 = null
        }
        if (T.g(searchEnd)) {
            wd_end2 = T.g(searchEnd)._wd2 || "";
            T.g(searchEnd)._wd2 = null
        }
        var I = wd_sta2 ? 1 : 0;
        var H = wd_end2 ? 1 : 0;
        var D = searchBox.inputInfo[searchSta],
        C = searchBox.inputInfo[searchEnd],
        t = (D && D.point && D.note == sword),
        q = (C && C.point && C.note == eword);
        if ((t && q) || (!t && !q)) {
            if (t && q) {
                G = 1;
                c = 1;
                E = D.point;
                K = C.point;
                d = D.ccode || d;
                scode = D.ccode || d;
                ecode = C.ccode || d
            } else {
                searchBox.inputInfo[searchSta] = {};
                searchBox.inputInfo[searchEnd] = {}
            }
            var l = encodeURIComponent(sword);
            var i = encodeURIComponent(wd_sta2);
            var g = encodeURIComponent(eword);
            var f = encodeURIComponent(wd_end2);
            var n = {
                c: d,
                sn: G + "$$$$" + E + "$$" + l + "$$" + I + "$$" + i + "$$",
                en: c + "$$$$" + K + "$$" + g + "$$" + H + "$$" + f + "$$",
                sc: scode,
                ec: ecode,
                pn: 0,
                rn: 5
            };
            req = qt + "&" + jsonToQuery(n)
        } else {
            if (t || q) {
                qt = (qt == "bt") ? "bse": "nse";
                var z, a, m, v, J;
                if (t) {
                    z = D.point;
                    a = D.note;
                    m = eword;
                    v = "sn";
                    J = 1;
                    d = D.ccode || d;
                    searchBox.inputInfo[searchEnd] = {}
                } else {
                    if (q) {
                        z = C.point;
                        a = C.note;
                        m = sword;
                        v = "en";
                        J = 0;
                        d = q.ccode || d;
                        searchBox.inputInfo[searchSta] = {}
                    }
                }
                var n = {
                    c: d,
                    t: J,
                    poiType: "0",
                    isSingle: "true",
                    ptx: z.split(",")[0],
                    pty: z.split(",")[1],
                    wd: encodeURIComponent(m),
                    name: encodeURIComponent(a)
                };
                n[v] = "1$$$$" + z + "$$" + encodeURIComponent(a) + "$$$$$$";
                req = qt + "&" + jsonToQuery(n);
                goext = {
                    cinfo: {
                        q: req,
                        c: d,
                        t: 0,
                        isSingle: true,
                        kwn: {
                            name: a,
                            pt: getPoiPoint(z),
                            poiType: 0
                        }
                    }
                }
            }
        }
        go(req, goext);
        if (A == "button" && w == "RouteAddr") {
            addStat(STAT_SEARCH_IN_ROUTE);
            if (u.word_from.value == k.startName && u.word_to.value == k.endName) {
                addStat(STAT_SEARCH_IN_ROUTE_NOCHANGE)
            }
        }
        MapHunter.record("se", 6, {
            sw: sword,
            ew: eword,
            tp: h
        })
    }
}
function doMeasure() {
    endCaptureMap();
    _sign.exituserSign();
    var a = window;
    if (!doMeasure._initialized) {
        if (a.distanceControl) {
            a.distanceControl.addEventListener("drawend",
            function() {
                T.rc(T.g("measure"), "span_focus");
                MapHunter.record("dis", 1)
            });
            a.distanceControl.addEventListener("onaddpoint",
            function(c) {
                var b = c.point;
                MapHunter.record("dis", 2, {
                    pt: {
                        lat: b.lat,
                        lng: b.lng
                    },
                    txt: b.disLabel.content
                })
            })
        }
        doMeasure._initialized = true
    }
    if (a.distanceControl) {
        if (!a.distanceControl._isOpen) {
            a.distanceControl.open();
            T.ac(T.g("measure"), "span_focus");
            addStat(STAT_DO_MEASURE)
        } else {
            closeMeasure()
        }
    }
}
function closeMeasure() {
    var a = window;
    if (a.distanceControl) {
        a.distanceControl.close()
    }
    T.rc(T.g("measure"), "span_focus")
}
function printMap(b) {
    closeOtherOps();
    if (!ModelMgr || !ModelMgr.mainModel) {
        return
    }
    if ( !! (b && b.getAttribute("href"))) {
        b.removeAttribute("href")
    }
    var a = ModelMgr.mainModel;
    switch (a._className) {
    case "PoiSearch":
        addStat(STAT_PRNT_POI);
        getPrintUrl(b);
        return true;
        break;
    case "Detail":
        addStat(STAT_PRNT_POI);
        break;
    case "CBusTrans":
        getPrintUrl(b);
        return true;
        break;
    case "BusTrans":
        addStat(STAT_PRNT_BUS);
        getPrintUrl(b);
        return true;
        break;
    case "NavTrans":
        a.isCrossCity() ? addStat(STAT_PRNT_DRV_CROSS_CITY) : addStat(STAT_PRNT_DRV_IN_CITY);
        getPrintUrl(b);
        return true;
        break;
    case "SearchInView":
        addStat(STAT_PRNT_POI);
        getPrintUrl(b);
        return true;
        break;
    case "LinesQuery":
        addStat(STAT_PRNT_BUSQ);
        break;
    case "City":
        addStat(STAT_PRNT_CITY);
        getPrintUrl(b);
        return true;
        break;
    default:
        addStat(STAT_PRNT_OTHER);
        break
    }
    window.print();
    return false
}
function getPrintUrl(b) {
    var a = Share.getLink(null, true);
    a = a.replace("http://map.baidu.com/", MapConfig.smFlwCon + "print.html");
    a = a + "&pw=2";
    b.setAttribute("href", a)
}
function captureMap() {
    closeMeasure();
    _sign.exituserSign();
    if (!captureCtrl._initialized) {
        captureCtrl.initialize(map);
        captureCtrl._initialized = true
    }
    if (!captureCtrl._inUse) {
        captureCtrl.beginCapture();
        T.ac(T.g("capwrap"), "span_focus");
        addStat(STAT_DO_CAPTURE)
    } else {
        captureCtrl.endCapture();
        T.rc(T.g("capwrap"), "span_focus")
    }
}
function endCaptureMap() {
    if (window.captureCtrl && window.captureCtrl._initialized) {
        window.captureCtrl.endCapture()
    }
}
closeOtherOps = function() {
    closeMeasure();
    endCaptureMap();
    _sign.exituserSign()
};
function _showCE() {
    window.location = "http://" + window.location.host + window.location.pathname + "from_mars_to_the_earth.html"
}
var GEO_TYPE_AREA = 0;
var GEO_TYPE_LINE = 1;
var GEO_TYPE_POINT = 2;
var CITY_TYPE_PROV = 1;
var CITY_TYPE_CITY = 2;
var CITY_TYPE_DIST = 3;
var AREA_TYPE_NORM = 0;
var AREA_TYPE_PROV = 1;
var AREA_TYPE_DIST = 2;
var TRANS_TYPE_BUS = 0;
var TRANS_TYPE_SUB = 1;
var DEST_START = 0;
var DEST_END = 1;
var DEST_MIDDLE = 2;
var DEST_SEC = 3;
var POI_TYPE_NORMAL = 0;
var POI_TYPE_BUSSTOP = 1;
var POI_TYPE_BUSLINE = 2;
var POI_TYPE_SUBSTOP = 3;
var POI_TYPE_SUBLINE = 4;
var ROUTE_TYPE_DEFAULT = 0;
var ROUTE_TYPE_BUS = 1;
var ROUTE_TYPE_WALK = 2;
var ROUTE_TYPE_DRIVE = 3;
var ROUTE_TYPE_TEMP_BUS = 4;
var ROUTE_TYPE_TEMP_WALK = 5;
var ROUTE_TYPE_RAIL_DASHED = 6;
var SYNC_ACTION_ADD = 0;
var SYNC_ACTION_UPDATE = 1;
var SYNC_ACTION_DELETE = 2;
var SYNC_DATA_TYPE_POI = 0;
var SYNC_DATA_TYPE_ROUTE = 1;
var OVERLAY_STYLE = {
    MKR_A: 1,
    MKR_B: 2,
    MKR_C: 3,
    MKR_D: 4,
    MKR_E: 5,
    MKR_F: 6,
    MKR_H: 7,
    MKR_I: 8,
    MKR_J: 9,
    MKR_K: 10,
    MKR: 11,
    MKR_RCTR: 12,
    DIS_DOT: 13,
    BUS_STOP: 14,
    BUS_TRANS: 15,
    SUB_TRANS: 16,
    DS_MKR: 17,
    DE_MKR: 18,
    DRV_M_MKR: 19,
    DRV_E_MKR: 20,
    MKR_NULL: 21,
    GEN_MKR: 22,
    VIW_LBL: 30,
    DIS_LBL: 31,
    DIS_T_LBL: 32,
    DS_LBL: 33,
    DE_LBL: 34,
    DIR_MKR: 40,
    ROUTE: 60,
    BUS_ROUTE: 61,
    WALK_ROUTE: 62,
    DRV_ROUTE: 63,
    DIS_LINE: 64,
    AREA: 65,
    H_LINE: 66,
    HO_LINE: 67,
    HW_LINE: 68,
    ADDR_MKR_NUM: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    ADDR_MKR_ACC: 110,
    ADDR_MKR_EST: 111,
    RAIL_DASHED_ROUTE: 120
};
var ENABLE_NEWYEAR_SKIN = false;
var A_J_MARKER_IMG = MapConfig.smFlwCon + "./template/eis_y_car/map/image/markers_new.png";
var A_J_MARKER_RED_SIZE = new BMap.Size(29, 31);
var A_J_MARKER_BLUE_SIZE = new BMap.Size(34, 37);
var A_J_MARKER_OFFSET = new BMap.Size(11, 31);
var A_J_MARKER_BLUE_OFFSET = new BMap.Size(13, 37);
var A_J_MARKER_INFOWND_OFFSET = new BMap.Size(13, 1);
var A_J_MARKER_NEWYEAR_IMG = MapConfig.smFlwCon + "./template/eis_y_car/map/image/newyear2012/markers_new.png";
var A_J_MARKER_NEWYEAR_RED_SIZE = new BMap.Size(31, 37);
var A_J_MARKER_NEWYEAR_BLUE_SIZE = new BMap.Size(39, 43);
var A_J_MARKER_NEWYEAR_RED_OFFSET = new BMap.Size(17, 37);
var A_J_MARKER_NEWYEAR_BLUE_OFFSET = new BMap.Size(19, 43);
var A_J_MARKER_NEWYEAR_INFOWND_OFFSET = new BMap.Size(18, 1);
var A_J_MARKER_BLUE_ICON_Y = 86;
var A_J_MARKER_ORANGE_ICON_Y = 40;
var A_J_MARKER_BLUE_ICON_WID = 39;
var A_J_MARKER_RED_ICON_WID = 31;
if (!ENABLE_NEWYEAR_SKIN) {
    A_J_MARKER_NEWYEAR_IMG = A_J_MARKER_IMG;
    A_J_MARKER_NEWYEAR_RED_SIZE = A_J_MARKER_RED_SIZE;
    A_J_MARKER_NEWYEAR_BLUE_SIZE = A_J_MARKER_BLUE_SIZE;
    A_J_MARKER_NEWYEAR_RED_OFFSET = A_J_MARKER_OFFSET;
    A_J_MARKER_NEWYEAR_BLUE_OFFSET = A_J_MARKER_BLUE_OFFSET;
    A_J_MARKER_NEWYEAR_INFOWND_OFFSET = A_J_MARKER_INFOWND_OFFSET;
    A_J_MARKER_BLUE_ICON_Y = 73;
    A_J_MARKER_ORANGE_ICON_Y = 34;
    A_J_MARKER_BLUE_ICON_WID = 34;
    A_J_MARKER_RED_ICON_WID = 29
}
var A_J_ADDR_OFFSET = new BMap.Size(8, 20);
var DEST_MARKER_SIZE = new BMap.Size(42, 34);
var DEST_MARKER_OFFSET = new BMap.Size(14, 32);
var DEST_MARKER_INFOWND_OFFSET = new BMap.Size(14, 0);
var MARKER_11_11_SIZE = new BMap.Size(11, 11);
var MARKER_11_11_OFFSET = new BMap.Size(5, 5);
var MARKER_11_11_INFOWND_OFFSET = new BMap.Size(5, 0);
function Page(a, f, b) {
    T.lang.Class.call(this);
    if (!a) {
        return
    }
    this.container = (typeof(a) == "object") ? a: T.g(a);
    this.page = 1;
    this.pageCount = 100;
    this.argName = "pg";
    this.pagecap = 4;
    this.callback = f;
    this.update = true;
    var c = {
        page: 1,
        totalCount: 100,
        pageCount: 100,
        pagecap: 4,
        argName: "pg",
        update: true
    };
    if (!b) {
        b = c
    }
    for (var d in b) {
        if (typeof(b[d]) != "undefined") {
            this[d] = b[d]
        }
    }
    this.render()
}
T.extend(Page.prototype, {
    render: function() {
        this.initialize()
    },
    initialize: function() {
        this.checkPages();
        this.container.innerHTML = this.createHtml()
    },
    checkPages: function() {
        if (isNaN(parseInt(this.page))) {
            this.page = 1
        }
        if (isNaN(parseInt(this.pageCount))) {
            this.pageCount = 1
        }
        if (this.page < 1) {
            this.page = 1
        }
        if (this.pageCount < 1) {
            this.pageCount = 1
        }
        if (this.page > this.pageCount) {
            this.page = this.pageCount
        }
        this.page = parseInt(this.page);
        this.pageCount = parseInt(this.pageCount)
    },
    getPage: function() {
        var b = location.search;
        var c = new RegExp("[?&]?" + this.argName + "=([^&]*)[&$]?", "gi");
        var a = b.match(c);
        this.page = RegExp.$1
    },
    createHtml: function() {
        var k = [],
        c = this.page - 1,
        g = this.page + 1;
        k.push('<p class="page">');
        if (c < 1) {} else {
            if (this.page >= this.pagecap) {
                k.push('<span><a href="javascript:void(0)" tid="toFirstPage" onclick="Instance(\'' + this.guid + "').toPage(1);return false;\">首页</a></span>")
            }
            k.push('<span><a href="javascript:void(0)" tid="toPrevPage" onclick="Instance(\'' + this.guid + "').toPage(" + c + ');return false;"><上一页</a></span>')
        }
        if (this.page < this.pagecap) {
            if (this.page % this.pagecap == 0) {
                var d = this.page - this.pagecap - 1
            } else {
                var d = this.page - this.page % this.pagecap + 1
            }
            var h = d + this.pagecap - 1
        } else {
            var j = Math.floor(this.pagecap / 2);
            var f = this.pagecap % 2 - 1;
            if (this.pageCount > this.page + j) {
                var h = this.page + j;
                var d = this.page - j - f
            } else {
                var h = this.pageCount;
                var d = this.page - j - f
            }
        }
        if (this.page > this.pageCount - this.pagecap && this.page >= this.pagecap) {
            var d = this.pageCount - this.pagecap + 1;
            var h = this.pageCount
        }
        for (var b = d; b <= h; b++) {
            if (b > 0) {
                if (b == this.page) {
                    k.push('<span class="curPage">' + b + "</span>")
                } else {
                    if (b >= 1 && b <= this.pageCount) {
                        var a = "";
                        if (b == 2) {
                            a = "tid=secPageNum"
                        }
                        k.push('<span><a href="javascript:void(0)" ' + a + " onclick=\"Instance('" + this.guid + "').toPage(" + b + ');return false;">' + b + "</a></span>")
                    }
                }
            }
        }
        if (g > this.pageCount) {
            k.push('<span><a href="javascript:void(0)" tid="toNextPage" class="next next-none">下一页&gt;</a></span>')
        } else {
            k.push('<span><a href="javascript:void(0)" tid="toNextPage" onclick="Instance(\'' + this.guid + "').toPage(" + g + ');return false;">下一页></a></span>')
        }
        k.push("</p>");
        return k.join("")
    },
    toPage: function(b) {
        if ( !! place.result && window.place_dateType) {
            var c = window.place_dateType.toUpperCase();
            addStat(window["STAT_PLACE_" + c + "_PAGE"])
        }
        var a = b ? b: 1;
        if (typeof(this.callback) == "function") {
            this.callback(a);
            this.page = a
        }
        if (this.update) {
            this.render()
        }
    }
});
Object.extend = function(a, c) {
    for (var b in c) {
        a[b] = c[b]
    }
    return a
};
Object.extend(Object, {
    clone: function(a) {
        return Object.extend({},
        a)
    }
});
var Class = function() {
    var a = function() {
        this.initialize.apply(this, arguments)
    };
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        for (var d in c.prototype) {
            a.prototype[d] = c.prototype[d]
        }
    }
    a.child = function() {
        return new Class(this)
    };
    a.extend = function(f) {
        for (var g in f) {
            a.prototype[g] = f[g]
        }
    };
    return a
};
Function.prototype.bindAsEventListener = function(b) {
    var a = this;
    return function(c) {
        a.call(b, c || window.event)
    }
};
function proxy() {
    var c = [];
    for (var b = 0,
    a = arguments.length; b < a; b++) {
        c[b] = arguments[b]
    }
    var d = c[0];
    c.shift();
    return function() {
        d.apply(null, c)
    }
}
function BMAddEvent(c, b, a) {
    if (typeof(window.attachEvent) != "undefined") {
        c.attachEvent("on" + b, a)
    } else {
        if (window.addEventListener) {
            c.addEventListener(b, a, true)
        }
    }
}
window._bdMapSuggest = null;
var bdMapSuggest = new Class();
bdMapSuggest.prototype = {
    GE: function(a) {
        return document.getElementById(a)
    },
    C: function(a) {
        return document.createElement(a)
    },
    clktr: function(g) {
        var i = false;
        if (g.id) {
            var f = g.id.split("__"),
            c = f[2],
            d = f[1];
            if ((this.qType == 0 || this.qType == 2) && c > -1 && this.SD != null) {
                var a = this.SD.s[c];
                try {
                    addStat(STAT_SUGG_DETAIL, {
                        userinput: T.g(d).value,
                        suggtext: g.cells[2].childNodes[0].nodeValue,
                        suggtype: d
                    })
                } catch(h) {}
                if (a.split("$")[3] != "" && !!this.callback) {
                    if (this._sq) {
                        addStat(STAT_SUGG_COUNT_WHAT)
                    } else {
                        addStat(STAT_SUGG_COUNT)
                    }
                    i = true;
                    this.setValue(g.cells[2].childNodes[0].nodeValue);
                    if (typeof(this.callback) == "function") {
                        if (this.qType == 0 || this.qType == 2) {
                            this.callback(g.cells[3].innerHTML, true)
                        } else {
                            this.callback(g.cells[2].childNodes[0].nodeValue, true)
                        }
                    }
                }
                if (a.split("$")[3] != "") {
                    i = true;
                    this.setValue(g.cells[2].childNodes[0].nodeValue)
                } else {
                    addStat(STAT_SUGG_COUNT);
                    i = true;
                    this.setValue(g.cells[2].childNodes[0].nodeValue);
                    var b = "";
                    try {
                        b = g.cells[3].childNodes[0].nodeValue + g.cells[2].childNodes[0].nodeValue
                    } catch(h) {
                        b = g.cells[3].innerHTML + g.cells[2].innerHTML
                    }
                    if (typeof(this.callback) == "function") {
                        this.callback(g.cells[3].innerHTML, false)
                    }
                    setTimeout(proxy(this.sendQuery.bindAsEventListener(this), b), 200)
                }
            }
        }
        if (!i) {
            this.cs();
            this.sub(g.cells[2].childNodes[0].nodeValue)
        }
    },
    sub: function(a) {
        this.I.value = a
    },
    csc: function() {
        this.cs();
        this.I.blur();
        this.I.focus();
        if (navigator.cookieEnabled && T.cookie.get(this.cookieN) != "1") {
            T.cookie.set(this.cookieN, "1", {
                domain: "map.baidu.com",
                expires: 946080000000
            })
        }
        addStat(STAT_SUGG_CLOSE);
        if (typeof(this.closeSuggest) == "function") {
            this.closeSuggest()
        }
    },
    trMouseOver: function(a) {
        this.ct();
        a.className = "mo";
        this.mouseOnSug = true
    },
    trMouseDown: function(a) {
        this.E = true;
        a = a || window.event;
        var b = a.target || a.srcElement;
        while (b.tagName.toLowerCase() != "tr") {
            b = b.parentNode
        }
        this.clktr(b);
        this.I.focus();
        if (!this.isIE) {
            e.stopPropagation();
            return false
        }
    },
    setSug: function() {
        if (typeof(this.SD) != "object" || typeof(this.SD.s) == "undefined") {
            return
        }
        var tab = this.C("table");
        with(tab) {
            id = "bdmap_sugt_" + this.sgId;
            style.backgroundColor = "#fff";
            cellSpacing = 0;
            cellPadding = 1;
            style.cursor = "default"
        }
        var tb = this.C("tbody");
        tab.appendChild(tb);
        var regStr = this.I.value.replace(/[\?\*\|\\()\[\]]/g, "");
        var reExp = new RegExp(regStr, "g");
        var reExp1 = "<b>" + regStr + "</b>";
        var ifShowFLg = false;
        for (var i = 0; i < this.SD.s.length; i++) {
            if (this.SD.t == 3 && (this.SD.s[i].split("$")[4].split(";")[0] != eval(this.cityId) || this.SD.s[i].split("$")[3] == this.I.value)) {
                continue
            }
            ifShowFLg = true;
            var tr = tb.insertRow( - 1);
            tr.id = "tr__" + this.sgId + "__" + i;
            tr.onmouseover = proxy(this.trMouseOver.bindAsEventListener(this), tr);
            tr.onmouseout = this.ct.bindAsEventListener(this);
            var me = this;
            tr.onmousedown = function(event) {
                me.trMouseDown(event)
            };
            var td = tr.insertCell( - 1);
            var td1 = tr.insertCell( - 1);
            var td2 = tr.insertCell( - 1);
            var td3 = tr.insertCell( - 1);
            var text_indent = this.offsetPos1[0] < 0 ? -this.offsetPos1[0] - 1 : this.offsetPos1[0];
            td.style.textIndent = text_indent + "px";
            td2.style.display = "none";
            td3.style.display = "none";
            var sdwords = this.SD.s[i].split("$");
            switch (this.SD.t) {
            case 0:
                td1.style.display = "none";
                var keywordStr = "";
                if (sdwords[3] == "") {
                    if (sdwords[2].toLowerCase().indexOf(regStr.toLowerCase()) > -1) {
                        keywordStr = sdwords[2];
                        td.innerHTML = sdwords[2].replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + sdwords[0] + sdwords[1] + "</span>";
                        td3.innerHTML = sdwords[0] + sdwords[1]
                    } else {
                        if (sdwords[1].toLowerCase().indexOf(regStr.toLowerCase()) > -1 || (sdwords[1] + sdwords[2]).toLowerCase().indexOf(regStr.toLowerCase()) > -1) {
                            keywordStr = sdwords[1] + sdwords[2];
                            td.innerHTML = (sdwords[1] + sdwords[2]).replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + sdwords[0] + "</span>";
                            td3.innerHTML = sdwords[0]
                        } else {
                            keywordStr = sdwords[0] + sdwords[1] + sdwords[2];
                            td.innerHTML = (sdwords[0] + sdwords[1] + sdwords[2]).replace(reExp, reExp1);
                            td3.innerHTML = ""
                        }
                    }
                } else {
                    keywordStr = sdwords[3];
                    td.innerHTML = sdwords[3].replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + (sdwords[0] + sdwords[1]).replace(reExp, reExp1) + "</span>";
                    td3.innerHTML = sdwords[0] + sdwords[1] + sdwords[2]
                }
                td2.innerHTML = keywordStr;
                break;
            case 1:
                td1.style.display = "none";
                if (sdwords[1] != "") {
                    td.innerHTML = (sdwords[0] + sdwords[1]).replace(reExp, reExp1);
                    td2.innerHTML = sdwords[0] + sdwords[1]
                }
                break;
            case 2:
                td1.style.display = "none";
                var keywordStr = "";
                if (sdwords[3] == "") {
                    if (sdwords[2].toLowerCase().indexOf(regStr.toLowerCase()) > -1) {
                        keywordStr = sdwords[2];
                        td.innerHTML = sdwords[2].replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + sdwords[0] + sdwords[1] + "</span>";
                        td3.innerHTML = sdwords[0] + sdwords[1]
                    } else {
                        if (sdwords[1].toLowerCase().indexOf(regStr.toLowerCase()) > -1 || (sdwords[1] + sdwords[2]).toLowerCase().indexOf(regStr.toLowerCase()) > -1) {
                            keywordStr = sdwords[1] + sdwords[2];
                            td.innerHTML = (sdwords[1] + sdwords[2]).replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + sdwords[0] + "</span>";
                            td3.innerHTML = sdwords[0]
                        } else {
                            keywordStr = sdwords[0] + sdwords[1] + sdwords[2];
                            td.innerHTML = (sdwords[0] + sdwords[1] + sdwords[2]).replace(reExp, reExp1);
                            td3.innerHTML = ""
                        }
                    }
                } else {
                    keywordStr = sdwords[3];
                    td.innerHTML = sdwords[3].replace(reExp, reExp1) + '&nbsp;<span class="spoi1">' + (sdwords[0] + sdwords[1]).replace(reExp, reExp1) + "</span>";
                    td3.innerHTML = sdwords[0] + sdwords[1] + sdwords[2]
                }
                td2.innerHTML = keywordStr;
                break;
            case 3:
                td.innerHTML = td2.innerHTML = sdwords[3];
                td.width = 95;
                var tmpLineArr = sdwords[4].split(";");
                var lineArr = tmpLineArr[1].split(",");
                var lineStr = "";
                for (var j = lineArr.length - 1; j >= 0; j--) {
                    lineStr += '<div class="sugg_l_' + tmpLineArr[0] + " sugg_" + tmpLineArr[0] + "_l" + lineArr[j] + '"></div>'
                }
                td1.innerHTML = lineStr;
                td1.width = 55;
                break
            }
        }
        if (this.closeBol == 0) {
            var th = tb.insertRow( - 1);
            var td = th.insertCell( - 1);
            td.style.textAlign = "right";
            td.style.borderTop = "1px solid #EBEBEB";
            var oa = this.C("A");
            oa.style.color = "#888";
            oa.style.paddingRight = "5px";
            oa.href = "javascript:void(0)";
            oa.title = "关闭";
            oa.innerHTML = "关闭";
            oa.onclick = this.csc.bindAsEventListener(this);
            td.appendChild(oa);
            var td1 = th.insertCell( - 1);
            td1.style.display = "none";
            var td2 = th.insertCell( - 1);
            td2.style.display = "none"
        }
        this.S.innerHTML = "";
        this.S.appendChild(tab);
        this.T = this.GE("bdmap_sugt_" + this.sgId);
        if (ifShowFLg || (this.SD.t == 3 && this.SD.s.length == 1 && this.SD.s[0].split("$")[3] == this.I.value)) {
            this.setPos();
            if (this.GE("noResTip" + this.sgId)) {
                this.GE("noResTip" + this.sgId).style.display = "none"
            }
            this.ifSubmit = false
        } else {
            this.S.style.display = "none";
            if (this.isIE) {
                this.GE("bdmap_sugif_" + this.sgId).style.display = "none"
            }
            if (this.GE("noResTip" + this.sgId)) {
                var tmpRt = this.GE("noResTip" + this.sgId);
                var iPos = this.getPos(this.I);
                tmpRt.style.left = iPos[0] + this.offsetPos[0] + "px";
                tmpRt.style.top = iPos[1] + this.offsetPos[1] + parseInt(this.I.offsetHeight) + "px";
                tmpRt.innerHTML = this.nonResTip;
                tmpRt.style.display = ""
            }
            this.ifSubmit = true
        }
        this.c = -1;
        this.s3 = ""
    },
    setPos: function() {
        var a = T.g(this.I.id + "Span"),
        d,
        b,
        c;
        if (a) {
            d = T.dom.getPosition(a);
            b = a.clientWidth;
            c = a.offsetHeight
        } else {
            d = T.dom.getPosition(this.I);
            b = this.I.clientWidth;
            c = this.I.offsetHeight
        }
        if (this.I.id == "iw_ssn" || this.I.id == "iw_esn") {
            b -= 2
        }
        this.S.style.top = d.top + c - 1 + "px";
        this.S.style.left = d.left + "px";
        this.S.style.display = "block";
        if (b >= (this.T.offsetWidth + 2)) {
            this.T.style.width = b + "px"
        }
    },
    resetPos: function() {
        if (this.S.style.display != "none") {
            this.setPos()
        }
    },
    ct: function() {
        var a = this.T.rows;
        for (var b = 0; b < a.length; b++) {
            a[b].className = "ml"
        }
    },
    cs: function() {
        if (this.isIE && this.GE("bdmap_sugif_" + this.sgId)) {
            this.GE("bdmap_sugif_" + this.sgId).style.display = "none"
        }
        if (this.S) {
            this.S.style.display = "none"
        }
        if (this.GE("noResTip" + this.sgId)) {
            this.GE("noResTip" + this.sgId).style.display = "none"
        }
        this.timer3 = 0;
        this.c = -1
    },
    cb: function() {
        var c = true;
        var d = this.I.value;
        if (searchBox.notShowSuggest.state) {
            return
        }
        if (typeof(this.T) != "undefined" && this.T != null) {
            var a = this.T.rows;
            for (var f = 0; f < a.length; f++) {
                if (a[f].className == "mo") {
                    if (d == a[f].cells[2].childNodes[0].nodeValue && !this.mouseOnSug) {
                        c = false
                    }
                }
            }
        }
        if (c && !this.K && this.S) {
            if (this.ifSend) {
                this.sendQuery()
            } else {
                this.ifSend = true
            }
        }
    },
    sendQuery: function(qString) {
        if ( !! qString) {
            this.queryWord = this.I.value;
            this.specQuery1 = true
        } else {
            this.specQuery1 = false
        }
        var cityId = eval(this.cityId);
        var pars = "";
        var bounds = foramtBounds();
        if (cityId == 1 && this.I.id.indexOf("BusSearch") > -1) {
            pars = "./template/eis_y_car/map/u.php?wd=" + encodeURIComponent(!qString ? this.I.value: qString) + "&cid=" + cityId + "&type=0&newmap=1&b=" + bounds + "&t=" + new Date().getTime()
        } else {
            pars = "./template/eis_y_car/map/u.php?wd=" + encodeURIComponent(!qString ? this.I.value: qString) + "&cid=" + cityId + "&type=" + this.qType + "&newmap=1&b=" + bounds + "&t=" + new Date().getTime()
        }
        T.Ajax.request(pars, this.sugCallBack.bindAsEventListener(this))
    },
    sugCallBack: function(originalRequest) {
        if (this.tooFast) {
            return
        }
        if (!originalRequest || originalRequest.responseText == "") {
            return
        }
        var jsonResults = "(" + originalRequest.responseText + ")";
        var items = eval(jsonResults);
        if (typeof(items) == "object" && typeof(items.s) != "undefined" && typeof(items.s[0]) != "undefined") {
            var singleRes = false;
            if (items.s.length == 1) {
                switch (items.t) {
                case 0:
                case 1:
                case 2:
                    if (items.s[0].replace(/\$/g, "") == this.I.value) {
                        singleRes = true
                    }
                    break;
                case 3:
                    if (items.s[0].split("$")[3] == this.I.value) {
                        singleRes = true
                    }
                    break
                }
            }
            if ((this.enterQuery || items.t == 3) && singleRes) {
                this.cs();
                this.SD = {};
                this.enterQuery = false;
                this.ifSubmit = true
            } else {
                this.SD = items;
                this.setSug()
            }
        } else {
            this.cs();
            this.SD = {};
            if (this.GE("noResTip" + this.sgId)) {
                var tmpRt = this.GE("noResTip" + this.sgId);
                var iPos = this.getPos(this.I);
                tmpRt.style.left = iPos[0] + this.offsetPos[0] + "px";
                tmpRt.style.top = iPos[1] + this.offsetPos[1] + parseInt(this.I.offsetHeight) + "px";
                tmpRt.innerHTML = this.nonResTip;
                tmpRt.style.display = ""
            }
            this.ifSubmit = true
        }
    },
    setValue: function(b) {
        var c = ["BusSearchSta", "BusSearchEnd", "DriveSearchSta", "DriveSearchEnd"];
        this.cs();
        this.ifSend = false;
        for (var a = 0; a < c.length; a++) {
            if (this.I.id == c[a]) {
                searchBox.setValue(c[a], b);
                return
            }
        }
        this.I.value = b
    },
    f: function() {
        if (!this.GE(this.sgId)) {
            this.disposeSug();
            return
        }
        var a = this.I.value;
        if (a == this.s1 && a != "" && a != this.s3) {
            if (this.timer2 == 0) {
                if (navigator.cookieEnabled && T.cookie.get(this.cookieN) != "1") {
                    this.timer2 = setTimeout(this.cb.bindAsEventListener(this), 100)
                } else {
                    this.s3 = a
                }
            }
        } else {
            clearTimeout(this.timer2);
            this.timer2 = 0;
            this.s1 = a;
            if (a == "") {
                this.cs()
            }
            if (this.s3 != this.I.value) {
                this.s3 = ""
            }
        }
    },
    resetSuggestion: function() {
        if (this.S.style.display != "none") {
            setTimeout(function() {
                this.cs();
                if (this.SD != null) {
                    this.setSug(this.SD);
                    this.I.focus()
                }
            },
            100)
        }
    },
    keyDownSuggest: function(g) {
        window._bdMapSuggest = this;
        j = g || window.event;
        this.K = false;
        var h;
        if (j.keyCode == 27) {
            if (this.isIE) {
                j.returnValue = false
            } else {
                j.preventDefault()
            }
            this.I.blur();
            this.I.focus();
            return
        }
        if (j.keyCode == 13) {
            if (this.c == -1) {
                this.cs();
                this.tooFast = true;
                setTimeout(this.setTooFast.bindAsEventListener(this), 1000);
                return true
            }
            if (!this.ifSubmit) {
                if ((this.qType == 0 || this.qType == 2) && this.c > -1 && this.SD != null) {
                    var b = this.SD.s[this.c];
                    if ( !! this.callback && b.split("$")[3] != "") {
                        this.tooFast = true;
                        setTimeout(this.setTooFast.bindAsEventListener(this), 1000);
                        if (this._sq) {
                            addStat(STAT_SUGG_COUNT_WHAT)
                        } else {
                            addStat(STAT_SUGG_COUNT)
                        }
                        if (typeof(this.callback) == "function") {
                            this.callback(this.T.getElementsByTagName("TR")[this.c].cells[3].childNodes[0].nodeValue, true)
                        }
                    }
                    if (b.split("$")[3] != "") {
                        this.c = -1
                    } else {
                        addStat(STAT_SUGG_COUNT);
                        this.enterQuery = true;
                        var d = "";
                        try {
                            d = this.T.getElementsByTagName("TR")[this.c].cells[3].childNodes[0].nodeValue + this.T.getElementsByTagName("TR")[this.c].cells[2].childNodes[0].nodeValue
                        } catch(j) {
                            d = this.T.getElementsByTagName("TR")[this.c].cells[3].innerHTML + this.T.getElementsByTagName("TR")[this.c].cells[2].innerHTML
                        }
                        if (typeof(this.callback) == "function") {
                            this.callback(this.T.getElementsByTagName("TR")[this.c].cells[3].innerHTML, false)
                        }
                        this.sendQuery(d)
                    }
                } else {
                    this.enterQuery = true;
                    this.sendQuery()
                }
                this.cs();
                preventDefault(j);
                return false
            } else {
                this.tooFast = true;
                setTimeout(this.setTooFast.bindAsEventListener(this), 1000);
                return true
            }
        }
        if (j.keyCode == 38 || j.keyCode == 40) {
            this.mouseOnSug = false;
            if (this.S.style.display != "none") {
                var a = this.T.rows;
                if (this.closeBol == 0) {
                    var c = a.length - 1
                } else {
                    var c = a.length
                }
                for (var f = 0; f < c; f++) {
                    if (a[f].className == "mo") {
                        this.c = f;
                        break
                    }
                }
                this.ct();
                var h;
                if (j.keyCode == 38) {
                    if (this.c == 0) {
                        if (this.specQuery1) {
                            this.I.value = this.queryWord
                        } else {
                            this.I.value = this.SD.q
                        }
                        this.c = -1;
                        this.K = true
                    } else {
                        if (this.c == -1) {
                            this.c = c
                        }
                        h = a[--this.c];
                        h.className = "mo";
                        this.I.value = h.cells[2].childNodes[0].nodeValue
                    }
                }
                if (j.keyCode == 40) {
                    if (this.c == c - 1) {
                        if (this.specQuery1) {
                            this.I.value = this.queryWord
                        } else {
                            this.I.value = this.SD.q
                        }
                        this.c = -1;
                        this.K = true
                    } else {
                        h = a[++this.c];
                        h.className = "mo";
                        this.I.value = h.cells[2].childNodes[0].nodeValue
                    }
                }
                if (!this.isIE) {
                    j.preventDefault()
                }
            }
        }
    },
    docMouseDown: function(b) {
        var a = this;
        if (window._bdMapSuggest) {
            a = window._bdMapSuggest
        }
        e = b || window.event;
        var c = e.target || e.srcElement;
        if (c == a.I) {
            return
        }
        while (c = c.parentNode) {
            if (c == a.S || c == a.I) {
                a.isClkSug = true;
                return
            }
        }
        if (a.timer3 == 0) {
            a.timer3 = setTimeout(a.cs.bindAsEventListener(a), 200)
        }
    },
    docKeyDown: function(a) {
        if (this.isGecko) {
            e = a || window.event;
            if (e.ctrlKey) {
                if (e.keyCode == 61 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 96 || e.keyCode == 48) {
                    this.resetSuggestion()
                }
            }
        }
    },
    beforeDeaSuggest: function() {
        if (this.E) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
            this.E = false
        }
    },
    keyBlurSuggest: function() {
        if (!this.isClkSug) {
            if (this.timer3 == 0) {
                this.timer3 = setTimeout(this.cs.bindAsEventListener(this), 200)
            }
        }
        this.isClkSug = false
    },
    creatSugDiv: function() {
        if (!this.GE("bdmap_sug_" + this.sgId)) {
            var sugdiv = this.C("div");
            with(sugdiv) {
                id = "bdmap_sug_" + this.sgId;
                className = "sug";
                position = "absolute";
                onselectstart = "return false";
                style.display = "none";
                style.zIndex = "200001"
            }
            document.body.appendChild(sugdiv)
        }
        this.S = this.GE("bdmap_sug_" + this.sgId);
        if (this.isIE) {
            var sug_if = this.C("IFRAME");
            sug_if.src = "javascript:void(0)";
            sug_if.id = "bdmap_sugif_" + this.sgId;
            with(sug_if.style) {
                display = "none";
                position = "absolute"
            }
            this.S.parentNode.insertBefore(sug_if, this.S)
        }
        if (this.qType == 3) {
            var nrtdiv = this.C("div");
            with(nrtdiv) {
                id = "noResTip" + this.sgId;
                className = "sugtip";
                position = "absolute";
                onselectstart = "return false";
                style.display = "none";
                style.zIndex = "200"
            }
            document.body.appendChild(nrtdiv)
        }
    },
    disposeSug: function() {
        clearTimeout(this.timer2);
        this.timer2 = 0;
        this.s1 = this.I.value;
        clearInterval(this.timer1);
        if (this.GE("bdmap_sug_" + this.sgId)) {
            document.body.removeChild(this.GE("bdmap_sug_" + this.sgId))
        }
        if (this.GE("noResTip" + this.sgId)) {
            document.body.removeChild(this.GE("noResTip" + this.sgId))
        }
        if (this.isIE && this.GE("bdmap_sugif_" + this.sgId)) {
            document.body.removeChild(this.GE("bdmap_sugif_" + this.sgId))
        }
        if (this.isIE && this.GE("imgLogo")) {
            this.GE("imgLogo").style.display = "block";
            this.GE("imgLogo").style.display = ""
        }
    },
    getPos: function(a) {
        var c = 0,
        b = 0;
        while (a != null) {
            c += a.offsetLeft;
            b += a.offsetTop;
            a = a.offsetParent
        }
        return [c, b]
    },
    setTooFast: function() {
        this.tooFast = false
    },
    initialize: function(a, c, b) {
        this.callback = c;
        this.closeSuggest = b;
        this.sgId = a.inputid;
        this.cookieN = a.cookiename || "bdmapsug";
        this.cityId = a.cityid || "modelConfig.cityCode";
        this.closeBol = a.closeB || 0;
        this.qType = a.qType || 0;
        this.nonResTip = "抱歉，未找到相关的车站";
        this.offsetPos = a.offset || [0, 0];
        this.offsetPos1 = a.offset1 || [0, 0];
        this.closeTip = a.closeTip || 0;
        this._sq = a._sq || false;
        this.mouseOnSug = false;
        this.queryWord = "";
        this.ifSubmit = false;
        this.S = null;
        this.enterQuery = false;
        this.ifSend = true;
        this.I = this.GE(a.inputid);
        this.I.value = "";
        this.tooFast = false;
        this.SD;
        this.CS = null;
        this.c = -1;
        this.K = false;
        this.mouseOnSug = false;
        this.specQuery1 = false;
        this.E = false;
        this.isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
        this.isWebKit = (navigator.userAgent.indexOf("AppleWebKit/") > -1);
        this.isGecko = (navigator.userAgent.indexOf("Gecko") > -1) && (navigator.userAgent.indexOf("KHTML") == -1);
        this.timer3 = 0;
        this.T = null;
        this.s1 = "";
        this.s3 = "";
        this.timer1;
        this.timer2 = 0;
        this.isClkSug = false;
        this.I.setAttribute("autocomplete", "off");
        this.creatSugDiv();
        this.I.onblur = this.keyBlurSuggest.bindAsEventListener(this);
        this.I.onkeydown = this.keyDownSuggest.bindAsEventListener(this);
        document.onmousedown = this.docMouseDown.bindAsEventListener(this);
        document.onkeydown = this.docKeyDown.bindAsEventListener(this);
        this.I.onbeforedeactivate = this.beforeDeaSuggest.bindAsEventListener(this);
        this.s3 = this.I.value;
        this.timer1 = setInterval(this.f.bindAsEventListener(this), 10);
        BMAddEvent(window, "resize", this.resetPos.bindAsEventListener(this))
    }
}; (function() {
    var a = "https://passport.baidu.com/";
    var m = "http://mc.map.baidu.com/passport/Session.php";
    var h = "http://passport.baidu.com/?center&tpl=ma&aid=7&default_tab=4";
    var c = "v2/";
    var g = "&tpl=ma";
    var n = "?login";
    var j = "?logout";
    var b = "?reg";
    var o = "?ucenteradduname";
    var k = "api/?getapi&class=login&tangram=false";
    var f = "1";
    var d = "0";
    var i = null;
    var l = {
        init: function() {
            this.update()
        },
        getState: function(p) {
            scriptRequest(m + "?callback=UserMgr._getState", null, "map_user_bar");
            i = p
        },
        _getState: function(p) {
            if (p) {
                i && i(p)
            }
        },
        _login: function() {
            var p = this;
            mapPass.setDialog();
            Share.getLink(function(q) {
                if (T.g("passports")) {
                    T.g("passports").innerHTML = ""
                }
                bdPass.api.login.init({
                    u: q,
                    outerDomId: "passports",
                    staticpage: mapPass.jumpURL,
                    onInputOk: function(t) {
                        p.login_ok(t, "pass_error_info")
                    },
                    onReady: function() {
                        p.addTip("normal", "loginBox_01");
                        p.login_c()
                    },
                    onInputErr: function(t, u) {
                        p.login_Err(t, u, "pass_error_info")
                    },
                    onSystemErr: function(t, u, v) {
                        p.SystemErr(t, u, v, "pass_error_info")
                    }
                });
                bdPass.api.login.init({
                    u: q,
                    outerDomId: "loginIframe_iph",
                    staticpage: mapPass.jumpURL,
                    isPhone: true,
                    onReady: function() {
                        p.addTip("iph", "loginBox_01");
                        p.login_c()
                    },
                    onInputOk: function(t) {
                        p.login_ok(t, "pass_error_info")
                    },
                    onInputErr: function(t, u) {
                        p.login_Err(t, u, "pass_error_info")
                    },
                    onSystemErr: function(t, u, v) {
                        p.SystemErr(t, u, v, "pass_error_info")
                    }
                })
            })
        },
        login: function(p) {
            p = p ? ((typeof p == "object") ? p: {}) : {};
            var q = this.getPortUrl("api", p);
            scriptRequest(q,
            function() {},
            null, null, true);
            return false
        },
        login_c: function() {
            var p = baidu.dom.query("input.pass_login_input_username");
            var t = baidu.dom.query("input.pass_login_input_password");
            var y = baidu.dom.query("input.pass_login_input_phoneNumber");
            var x = baidu.dom.query("input.pass_login_input_verifycode");
            var u = p.concat(t, y, x);
            var q = baidu.dom.query("input.pass_login_input_submit");
            var v = baidu.dom.query(".loginStyle button");
            baidu.each(u,
            function(A, z) {
                baidu.on(u[z], "mouseover",
                function() {
                    u[z].style.borderTopColor = "#ababab";
                    u[z].style.borderLeftColor = "#ababab";
                    u[z].style.borderBottomColor = "#ccc";
                    u[z].style.borderRightColor = "#ccc"
                });
                baidu.on(u[z], "mouseout",
                function() {
                    u[z].style.borderColor = ""
                });
                baidu.on(u[z], "focus",
                function() {
                    u[z].style.borderColor = "#0078B6"
                })
            });
            baidu.each(q,
            function(A, z) {
                baidu.on(q[z], "mouseover",
                function() {
                    q[z].style.backgroundPosition = "-120px 0"
                });
                baidu.on(q[z], "mousedown",
                function() {
                    q[z].style.backgroundPosition = "-240px 0"
                });
                baidu.on(q[z], "mouseout",
                function() {
                    q[z].style.backgroundPosition = "left 0"
                })
            });
            baidu.each(v,
            function(A, z) {
                baidu.on(v[z], "mouseover",
                function() {
                    v[z].style.backgroundPosition = "-281px -81px"
                });
                baidu.on(v[z], "mousedown",
                function() {
                    v[z].style.backgroundPosition = "-281px -121px"
                });
                baidu.on(v[z], "mouseout",
                function() {
                    v[z].style.backgroundPosition = "-281px -41px"
                })
            });
            var w = setInterval(function() {
                if ((baidu.dom.query("#loginBox_01 .pass_login_p_verifycode")[0] && baidu.dom.query("#loginBox_01 .pass_login_p_verifycode")[0].style.display != "none") || (baidu.dom.query("#loginBox_01 .pass_login_p_verifycode")[1] && baidu.dom.query("#loginBox_01 .pass_login_p_verifycode")[1].style.display != "none")) {
                    window.temp.pass.getDom().style.height = "418px";
                    baidu.dom.query(".loginStyle .content")[0].style.height = "380px";
                    window.temp.pass.getDom().style.zoom = "1";
                    clearInterval(w)
                }
                if ((baidu.dom.query("#loginBox_02 .pass_login_p_verifycode")[0] && baidu.dom.query("#loginBox_02 .pass_login_p_verifycode")[0].style.display != "none") || (baidu.dom.query("#loginBox_02 .pass_login_p_verifycode")[1] && baidu.dom.query("#loginBox_02 .pass_login_p_verifycode")[1].style.display != "none")) {
                    sms.spop.getDom().style.height = "495px";
                    T.G("sms_pnl_phone").style.height = "310px";
                    sms.spop.getDom().style.zoom = "1";
                    clearInterval(w)
                }
            },
            50);
            if (T.dom.q("pass_login_label_username")[0]) {
                T.dom.q("pass_login_label_username")[0].innerHTML = "　帐号"
            }
            if (T.dom.q("pass_login_label_password")) {
                T.array.each(T.dom.q("pass_login_label_password"),
                function(z, A) {
                    z.innerHTML = "　密码"
                })
            }
            if (T.dom.q("pass_login_label_verifycode")) {
                T.array.each(T.dom.q("pass_login_label_verifycode"),
                function(z, A) {
                    z.innerHTML = "验证码"
                })
            }
            if (T.dom.q("pass_login_label_phoneNumber")[0]) {
                T.dom.q("pass_login_label_phoneNumber")[0].innerHTML = "手机号"
            }
        },
        addTip: function(E, w) {
            var u = "",
            F = "",
            q = "",
            z = "",
            y = "";
            if (E == "normal") {
                u = "#" + w + " .pass_login_input_username";
                F = "用户名/邮箱名";
                q = "#" + w + " .pass_login_p_username";
                tipC = "pass_username_tip";
                z = "#" + w + " .pass_username_tip"
            }
            if (E == "iph") {
                u = "#" + w + " .pass_login_input_phoneNumber";
                F = "手机号";
                q = "#" + w + " .pass_login_p_phoneNumber";
                tipC = "pass_userIph_tip";
                z = "#" + w + " .pass_userIph_tip"
            }
            var x = baidu.dom.query(u)[0];
            if (x) {
                var v = '<span class="' + tipC + '">' + F + "</span>";
                var t = baidu.dom.query(q)[0];
                if (t) {
                    baidu.dom.insertHTML(t, "beforeEnd", v)
                }
                var p = baidu.dom.query(z)[0];
                if (baidu.string.trim(x.value) != "") {
                    baidu.dom.hide(p)
                }
                baidu.event.on(x, "focus",
                function() {
                    baidu.dom.hide(p)
                });
                baidu.event.on(x, "blur",
                function() {
                    if (baidu.string.trim(x.value) != "") {
                        baidu.dom.hide(p)
                    } else {
                        baidu.dom.show(p)
                    }
                });
                baidu.event.on(p, "click",
                function() {
                    baidu.dom.hide(p);
                    var A = baidu.dom.query(q)[0];
                    baidu.dom.addClass(A, "inputactive");
                    x.focus()
                })
            }
        },
        login_Err: function(p, q, u) {
            var t = baidu.dom.next(p);
            p.style.borderColor = "#DA1111";
            baidu.dom.hide(t);
            if (baidu.dom.hasClass(p.parentNode, "pass_login_p_verifycode")) {
                baidu.dom.addClass(p.parentNode, "vcodeerrortive")
            } else {
                baidu.dom.addClass(p.parentNode, "errortive")
            }
            baidu.dom.g(u).innerHTML = t.innerHTML
        },
        login_ok: function(q, p) {
            q.style.borderColor = "#0078B6";
            T.G(p).innerHTML = ""
        },
        SystemErr: function(p, q, v, w) {
            var t = baidu.dom.q("pass_login_generalerror")[0];
            if (t) {
                baidu.dom.hide(t)
            }
            if (q == -1) {
                baidu.dom.g(w).innerHTML = "登录时发生未知错误，请重新输入"
            } else {
                if (q == 5) {
                    baidu.dom.g(w).innerHTML = "今日登录次数过多"
                } else {
                    if (q == 16) {
                        baidu.dom.g(w).innerHTML = "对不起，您现在无法登录"
                    } else {
                        if (q == 20) {
                            baidu.dom.g(w).innerHTML = "此帐号已登录人数过多"
                        } else {
                            if (q == 110024) {
                                var u = "https://passport.baidu.com/v2/?regnotify&needresend=true&tpl=mn&user=" + v.mail;
                                baidu.dom.g("pass_error_info").innerHTML = '帐号未激活，请到邮箱中激活或 <a href="' + u + '" target="_blank">重发验证</a>'
                            }
                        }
                    }
                }
            }
        },
        clickPage: function(q, p) {
            T.G("pass_error_info" + p).innerHTML = "";
            if (q == "normal") {
                T.G("loginIframe_iph" + p).style.display = "none";
                T.G("passports" + p).style.display = "block";
                T.G("normal_login" + p).className = "login_hover";
                T.G("phone_login" + p).className = ""
            }
            if (q == "iph") {
                T.G("loginIframe_iph" + p).style.display = "block";
                T.G("passports" + p).style.display = "none";
                T.G("phone_login" + p).className = "login_hover";
                T.G("normal_login" + p).className = ""
            }
        },
        logout: function() {
            window.FavState = 0;
            var p = this;
            Share.getLink(function(q) {
                window.location.href = p.getPortUrl("logout", {
                    u: encodeURIComponent(q)
                })
            })
        },
        fillPage: function() {
            var p = this;
            Share.getLink(function(q) {
                window.location = p.getPortUrl("fillname", {
                    u: encodeURIComponent(q)
                })
            });
            return false
        },
        regPage: function() {
            var p = this;
            Share.getLink(function(q) {
                window.location = p.getPortUrl("reg", {
                    u: encodeURIComponent(q)
                })
            });
            return false
        },
        update: function() {
            var u = this,
            p = T.g("login"),
            t = T.g("logout_user_info"),
            q = T.g("login_user_info");
            this.getState(function(w) {
                mapPass.init(w);
                switch (w.isOnline) {
                case f:
                    t.style.display = "none";
                    q.style.display = "inline";
                    q.innerHTML = u.getLoginHtml(w);
                    function v() {
                        u.tipTimer = setTimeout(function() {
                            T.g("popUserInfoId").style.visibility = "hidden"
                        },
                        200)
                    }
                    T.g("username").onmouseover = function(x) {
                        T.g("popUserInfoId").style.visibility = "visible"
                    };
                    T.g("username").onmouseout = v;
                    T.g("popUserInfoId").onmouseover = function(x) {
                        window.clearTimeout(u.tipTimer)
                    };
                    T.g("popUserInfoId").onmouseout = v;
                    if (!w.uName && (w.email || w.mobile)) {
                        u.tip.add()
                    }
                    break;
                case d:
                    t.style.display = "inline";
                    q.style.display = "none";
                    T.on(p, "click",
                    function(x) {
                        x = window.event || x;
                        u.login();
                        addStat(STAT_TOP_LOGIN_CLICK);
                        x.returnValue = false
                    });
                    break
                }
            })
        },
        getPortUrl: function(t, q) {
            var p = "",
            u = q ? ("&" + jsonToQuery(q)) : "";
            switch (t) {
            case "login":
                p = c + n;
                break;
            case "logout":
                p = j;
                break;
            case "fillname":
                p = c + o;
                break;
            case "reg":
                p = c + b;
                break;
            case "api":
                if (!q.callback) {
                    u += "callback=UserMgr._login"
                }
                p = c + k;
                break
            }
            return a + p + g + u
        },
        getLoginHtml: function(w) {
            if (!w) {
                return ""
            }
            var v = "",
            t = w.uName,
            q = w.email,
            p = w.mobile;
            if (t) {
                v = t
            } else {
                if (q || p) {
                    v = q || p
                }
            }
            var u = ['<ul><li id="usernameInfo" style="height:22px;" class="uname mn-lk-w">'];
            if (t) {
                u.push('<a id="username" class="mn-lk" href="http://www.baidu.com/p/' + t + '?from=map">' + v + "</a>")
            } else {
                u.push('<a id="username" class="mn-lk" href="https:/passport.baidu.com/v2/?ucenteradduname">' + v + "</a>")
            }
            u.push('<div id="popUserInfoId" style="width:80px;right:0;visibility:hidden;" class="mn-tip"><ul class="mn"><li>');
            if (t) {
                u.push('<a class="my-info" href="http://www.baidu.com/p/' + t + '?from=map">我的主页</a>')
            } else {
                u.push('<a class="my-info" href="https:/passport.baidu.com/v2/?ucenteradduname">我的主页</a>')
            }
            u.push('</li><li><a class="my-info" href="' + h + '">帐号设置</a></li><li><a onclick="UserMgr.logout()" class="logout" href="javascript:void(0)">退出</a></li></ul></div>');
            u.push('<li class="line">|</li>');
            u.push('<li><a href="http://lbc.baidu.com/ba/poi/poiindex?from=map" target="_blank">商户标注</a><a href="http://developer.baidu.com/map/" target="_blank" onmousedown="addStat(STAT_API_CLICK);">地图API</a><a href="http://shouji.baidu.com/map/" target="_blank">手机地图</a></li>');
            u.push('<li class="line">|</li>');
            u.push('<li><a href="http://www.baidu.com">首页</a></li>');
            return u.join("")
        },
        tip: {
            add: function() {
                var p = this;
                if (T.cookie.get("unametip") !== "1") {
                    beforeEndHTML(document.body, '<div id="fill_name_tip" style="left:800px; top:30px;" class="bar-tip tm"> <i class=triangle-t></i><i onclick="UserMgr.tip.remove()" title="关闭" class="close">关闭</i> <div class=tl> <div class=inner> <span class=icon><img src="./template/eis_y_car/map/image/fill_tip_icon.gif" style="float:left;"></span> <div class=cont> <p>快给自己起个昵称吧!</p> <p class=lk-btn><a onclick="UserMgr.fillPage()" href="javascript:void(0)">现在就去</a></p> </div> </div> </div> <div class=tr></div> <div class=bl></div> </div>');
                    p.update();
                    T.on(window, "resize", p.update)
                }
            },
            update: function() {
                var t = T.g("username"),
                p = t.offsetWidth || 0,
                u = T.dom.getPosition(t),
                q = T.g("fill_name_tip");
                if (u && q) {
                    q.style.left = u.left - 117 + p / 2 + "px";
                    q.style.top = u.top + 24 + "px"
                }
            },
            remove: function() {
                var p = T.g("fill_name_tip");
                baidu.dom.remove(p);
                T.un(window, "resize", this.update);
                T.cookie.set("unametip", "1", {
                    expires: 946080000000
                })
            }
        }
    };
    window.UserMgr = l
})(); (function() {
    var j = [0, T.G("searchWrapper").offsetHeight];
    var b = {
        title: "设置常用地点",
        height: 343,
        width: 457,
        left: 380,
        clickClose: false,
        addDom: document.body,
        offset: j || [0, 0],
        defaultAnchor: POPUP_ANCHOR_MAP_CENTER,
        close: function() {
            h.clear()
        }
    };
    var g = new BMap.Icon("image/smp_icon.png", new BMap.Size(13, 16), {
        offset: new BMap.Size(3, 16),
        infoWindowOffset: new BMap.Size(3, 0)
    });
    var i = '<tr class="smp_sug_item" onclick="SmpMgr.itemClick(\'#uid#\', \'#from#\')"><td class="td_note">#word#</td><td class="td_action"><a href="javascript:void(0)" onclick="SmpMgr.editMyPlace(event, \'#uid#\')">修改</a><a href="javascript:void(0)" onclick="SmpMgr.rmvMyplace(event, \'#uid#\', \'#word#\')">删除</a></td></tr>';
    var d = '<tr><td class="td_note defaultNote">#word#</td><td class="td_action"><a href="javascript:void(0)" onclick="SmpMgr.addMyPlace(\'#word#\')">设置</a></td></tr>';
    var c = '<tr class="nonSupNote"><td class="td_note">#word#</td><td class="td_action"><a href="javascript:void(0)">设置</a></td></tr>';
    var a = {
        isEmpty: function(m) {
            return ! /\S+/.test(m)
        },
        isNotWord: function(m) {
            return ! /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{0,30}$/.test(m)
        },
        isOverLong: function(n, m) {
            return T.string.getByteLength(n) > m ? true: false
        }
    };
    var k = {
        flash: null,
        arr: null,
        init: function(m) {
            if (!T.G("smp_storer_wrap")) {
                beforeEndHTML(document.body, '<div style="witdh:0;height:0;overflow:hidden" id="smp_storer_wrap"></div>')
            }
            if (!k.flash) {
                k.flash = new T.localStorage({
                    contentID: "smp_storer_wrap",
                    flashID: "smp_storer_flash"
                })
            }
            k.flash.render({
                callBack: m
            })
        },
        setAll: function(m) {
            this.flash.setValue("smp", "save", m);
            this.arr = m
        },
        set: function(o) {
            var m = this.arr;
            if (m && m.length != 0) {
                var n = this.getIndexByUid(o.uid);
                if (n != undefined) {
                    m[n] = o
                } else {
                    m.push(o)
                }
            } else {
                m = [o]
            }
            this.setAll(m)
        },
        getAll: function() {
            try {
                var m = this.flash.getValue("smp", "save")
            } catch(n) {
                return
            }
            this.arr = m || [];
            return m
        },
        getItemByUid: function(n) {
            if (!n) {
                return
            }
            var m = this.getIndexByUid(n);
            return this.arr[m]
        },
        getIndexByUid: function(o) {
            if (!o) {
                return
            }
            for (var n = 0,
            m = this.arr.length; n < m; n++) {
                if (o == this.arr[n].uid) {
                    return n
                }
            }
        },
        rmvItemByUid: function(m) {
            if (!m) {
                return
            }
            this.rmvItemByIndex(this.getIndexByUid(m))
        },
        rmvItemByIndex: function(m) {
            T.array.removeAt(this.arr, m);
            this.setAll(this.arr)
        },
        clear: function() {
            this.flash.remove("smp", ["save"])
        }
    };
    var l = {
        box: null,
        init: function() {
            var m = this;
            this.box = T.dom.create("div", {
                id: "smp_cover"
            });
            this._innerFun = function() {
                m.resize()
            };
            T.on(window, "resize", this._innerFun)
        },
        show: function() {
            var m = this.box;
            if (T.browser.ie) {
                document.body.appendChild(m)
            } else {
                document.body.appendChild(m);
                window.setTimeout(function() {
                    m.style.opacity = "0.2"
                },
                0)
            }
            this.resize()
        },
        hide: function() {
            var m = this;
            if (T.browser.ie) {
                m.box && document.body.removeChild(m.box);
                m.clear()
            } else {
                m.box.style.opacity = 0;
                window.setTimeout(function() {
                    m.box && document.body.removeChild(m.box);
                    m.clear()
                },
                250)
            }
        },
        resize: function() {
            if (this.box) {
                var n = this.box,
                m = getClientSize();
                if (T.browser.ie == 6) {
                    n.style.width = m.width + "px";
                    n.style.height = m.height + "px"
                }
            }
        },
        clear: function() {
            if (this._innerFun) {
                T.un(window, "resize", this._innerFun);
                delete this._innerFun
            }
            delete this.box
        }
    };
    var f = {
        container: null,
        display: false,
        init: function(o) {
            var n = this,
            m = T.dom.create("div", {
                "class": "smp_sug_wrap"
            });
            this.container = m;
            document.body.appendChild(m);
            T.on(document.body, "click",
            function() {
                n.hide()
            });
            map.addEventListener("mousedown",
            function() {
                n.hide()
            });
            this.open(o)
        },
        open: function(m) {
            if (this.container) {
                this.toggle(m)
            } else {
                this.init(m)
            }
        },
        toggle: function(m) {
            if (this.display && this.display == m) {
                this.hide()
            } else {
                this.show(m);
                this.update(m)
            }
        },
        show: function(n) {
            var m = this;
            this.container.style.display = "block";
            this.display = n;
            if (map.infoWindow) {
                T.on(map.infoWindow.contentMain, "click",
                function(o) {
                    m.hide()
                });
                T.on(map.infoWindow.titleDiv, "click",
                function() {
                    m.hide()
                })
            }
        },
        hide: function() {
            if (!this.container) {
                return
            }
            this.container.style.display = "none";
            this.display = false
        },
        update: function(m) {
            this.setContent({
                from: m
            });
            this.setPosAndSize(m)
        },
        setPosAndSize: function(v) {
            var p = T.g(v + "Span"),
            t = T.g("smp_sug_table"),
            u = T.dom.getPosition(p),
            o = this.container,
            q = p.clientWidth,
            n = p.offsetHeight;
            if (v == "iw_esn" || v == "iw_ssn") {
                q -= 2
            }
            if (q >= (t.offsetWidth + 2)) {
                t.style.width = q + "px"
            }
            if (T.browser.ie <= 6) {
                o.style.width = "100%";
                var m = t.offsetWidth;
                o.style.width = m + "px"
            }
            o.style.top = u.top + n - 1 + "px";
            o.style.left = u.left + "px"
        },
        setContent: function(t) {
            t = t || {};
            var v = t.from || "";
            var q = ['<table id="smp_sug_table" class="smp_sug_table" cellspacing="0" cellpadding="1">'];
            if (!T.swf.version) {
                var n = "(请安装flash插件)";
                if (v == "iw_esn" || v == "iw_ssn") {
                    n = ""
                }
                q.push(this.getItem({
                    note: "我的家"
                },
                "nonsup", v));
                q.push(this.getItem({
                    note: "我的公司"
                },
                "nonsup", v));
                q.push('</table><div id="smp_table_exts" class="exts oversize"><a href="javascript:void(0)">设置常用地点</a>' + n + "</div>");
                this.container.innerHTML = q.join("");
                return
            }
            var u = k.getAll();
            var p = this.getExtHtml(u, v);
            if (u && u.length != 0) {
                for (var o = 0,
                m = u.length; o < m; o++) {
                    q.push(this.getItem(u[o], "normal", v))
                }
            } else {
                q.push(this.getItem({
                    note: "我的家"
                },
                "default", v));
                q.push(this.getItem({
                    note: "我的公司"
                },
                "default", v))
            }
            q.push("</table>" + p);
            this.container.innerHTML = q.join("")
        },
        getExtHtml: function(o, p) {
            var n = '<div id="smp_table_exts" class="exts"><a href="javascript:void(0)" onclick="SmpMgr.addMyPlace(\'\', \'' + p + "')\">设置常用地点</a></div>";
            if (o && o.length != 0) {
                if (o.length >= 4) {
                    var m = "(最多设置4个常用地点)";
                    if (p == "iw_esn" || p == "iw_ssn") {
                        m = ""
                    }
                    n = '<div id="smp_table_exts" class="exts oversize"><a href="javascript:void(0)">设置常用地点</a>' + m + "</div>"
                }
            } else {
                var m = "(省去重复输入烦恼)";
                if (p == "iw_esn" || p == "iw_ssn") {
                    m = ""
                }
                var n = '<div id="smp_table_exts" class="exts"><a href="javascript:void(0)" onclick="SmpMgr.addMyPlace(\'\', \'' + p + '\')">设置常用地点</a><span style="color:#B3B3B3">' + m + "</span></div>"
            }
            return n
        },
        getItem: function(p, o, q) {
            var n = "";
            switch (o) {
            case "normal":
                n = i;
                break;
            case "default":
                n = d;
                break;
            case "nonsup":
                n = c;
                break
            }
            var m = n.replace(/#word#/ig, p.note).replace(/#uid#/ig, p.uid).replace(/#from#/ig, q);
            return m
        }
    };
    var h = {
        helper: a,
        storer: k,
        popup: null,
        component: null,
        markers: {},
        infoWindows: {},
        openList: function(n, m) {
            stopBubble(m || window.event);
            f.open(n)
        },
        init: function() {
            var m = this;
            k.init(function() {
                var n = baidu.swf.getMovie("smp_storer_flash").read;
                if (n == undefined) {
                    var o = window.setInterval(function() {
                        n = baidu.swf.getMovie("smp_storer_flash").read;
                        if (n != undefined) {
                            window.clearInterval(o);
                            m.addAllPlace()
                        }
                    },
                    500)
                } else {
                    m.addAllPlace()
                }
            })
        },
        open: function(o) {
            if (this.popup) {
                this.popup.close()
            }
            o = o || {};
            var m = this.popup = new Popup(b);
            m.render();
            m.hide();
            l.init();
            go("tpl:SetMyPlace", {
                dom: m.content,
                cinfo: o,
                onload: function() {
                    l.show();
                    m.show()
                }
            });
            var p = this;
            var n = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
            T.on(window.document, n,
            function(q) {
                p._escFun = arguments.callee;
                if (q.keyCode == 27) {
                    h.popup && h.popup.close()
                }
            })
        },
        clear: function() {
            if (this._escFun) {
                var m = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
                T.un(window.document, m, this._escFun);
                delete this._escFun
            }
            map.enableScrollWheelZoom();
            h.component.dispose();
            l.hide();
            delete this.popup
        },
        addAllPlace: function() {
            var o = k.getAll();
            if (o && o.length != 0) {
                for (var n = 0,
                m = o.length; n < m; n++) {
                    this.buildOverlay(o[n])
                }
            }
        },
        buildOverlay: function(o) {
            var m = this.createMarker(o);
            var n = this.createInfoWindow(o);
            map.addOverlay(m);
            m.addEventListener("click",
            function() {
                openSearchInfoWnd(n, m);
                map.zoomTo(16);
                addStat(STAT_SMP_ICON_CLICK)
            });
            return {
                marker: m,
                infoWindow: n
            }
        },
        createInfoWindow: function(n) {
            if (!n) {
                return
            }
            var o = n.point.split(",");
            var m = createSearchInfoWnd({
                title: n.note,
                addr: n.addr
            },
            {
                smp: n.uid,
                cityCode: n.ccode,
                x: o[0],
                y: o[1]
            });
            this.infoWindows[n.uid] = m;
            return m
        },
        createMarker: function(o) {
            if (!o) {
                return
            }
            var m = getPoiPoint(o.point);
            var n = new BMap.Marker(m, {
                icon: g,
                title: o.note,
                enableMassClear: false
            });
            this.markers[o.uid] = n;
            return n
        },
        updateOverLay: function(p) {
            if (!p || !p.uid) {
                return
            }
            var o = p.uid,
            m = this.markers[o],
            n = this.infoWindows[o];
            if (m && n) {
                map.removeOverlay(m);
                map.removeOverlay(n)
            }
            this.buildOverlay(p);
            this.showMyPlace(o)
        },
        addMyPlace: function(m, n) {
            this.open({
                note: m
            });
            h.hideSug();
            if (n == "PoiSearch") {
                addStat(STAT_SMP_SADD_CLICK)
            } else {
                if (n == "iw_ssn" || n == "iw_esn") {
                    addStat(STAT_SMP_IADD_CLICK)
                } else {
                    addStat(STAT_SMP_NADD_CLICK)
                }
            }
        },
        editMyPlace: function(n, m) {
            stopBubble(n || window.event);
            this.open(k.getItemByUid(m));
            h.hideSug()
        },
        rmvMyplace: function(p, m, o) {
            stopBubble(p || window.event);
			
            var n = window.confirm("是否要删除" + o + "?");
            if (n) {
                if (this.markers[m]) {
                    map.removeOverlay(this.markers[m])
                }
                k.rmvItemByUid(m)
            }
            h.hideSug()
        },
        showMyPlace: function(o) {
            if (o && this.markers[o]) {
                var m = this.markers[o];
                var n = this.infoWindows[o];
                if (m && n) {
                    openSearchInfoWnd(n, m)
                }
                map.centerAndZoom(m.getPoint(), 16)
            }
        },
        itemClick: function(n, o) {
            searchBox.notShowSuggest.run();
            if (o == "PoiSearch") {
                this.showMyPlace(n);
                addStat(STAT_SMP_SITEM_CLICK)
            } else {
                var m = k.getItemByUid(n);
                if (o == "iw_ssn" || o == "iw_esn") {
                    T.g(o).value = m.note;
                    addStat(STAT_SMP_IITEM_CLICK)
                } else {
                    searchBox.setValue(o, m.note);
                    addStat(STAT_SMP_NITEM_CLICK)
                }
                searchBox.inputInfo[o] = T.object.extend(searchBox.inputInfo[o], m)
            }
        },
        hideSug: function() {
            f.hide()
        }
    };
    window.SmpMgr = h
})(); (function() {
    var c = {
        box: null,
        init: function() {
            var d = this;
            this.box = T.dom.create("div", {
                id: "pc2mobile_cover"
            });
            this._innerFun = function() {
                d.resize()
            };
            T.on(window, "resize", this._innerFun)
        },
        show: function() {
            var d = this.box;
            document.body.appendChild(d);
            this.resize()
        },
        hide: function() {
            var d = this;
            d.box && document.body.removeChild(d.box);
            d.clear()
        },
        resize: function() {
            if (this.box) {
                var f = this.box,
                d = getClientSize();
                if (T.browser.ie == 6) {
                    f.style.width = d.width + "px";
                    f.style.height = d.height + "px"
                }
            }
        },
        clear: function() {
            if (this._innerFun) {
                T.un(window, "resize", this._innerFun);
                delete this._innerFun
            }
            delete this.box
        }
    };
    var b = {
        INDEX: {
            orto: 1731,
            orta: 1732
        },
        POPUP: {
            orto: 1731,
            orta: 1732
        },
        BUS: {
            orto: 1719,
            orta: 1720
        },
        NAV: {
            orto: 1722,
            orta: 1723
        },
        POI: {
            orto: 1728,
            orta: 1729
        },
        CITY: {
            orto: 1716,
            orta: 1717
        },
        OTHER: {
            orto: 1725,
            orta: 1726
        }
    };
    var a = {
        popup: null,
        component: null,
        open: function(i, f) {
            if ( !! i) {
                i = i.toUpperCase();
                var h = b[i] || b.OTHER;
                try {
                    var d = window["STAT_P2M_OPEN_" + i] || STAT_P2M_OPEN_OTHER;
                    addStat(d)
                } catch(g) {}
                a._open(h)
            }
        },
        _open: function(h) {
            if (this.popup) {
                this.popup.close()
            }
            h = h || {};
            var f = {
                content: "",
                isTitle: false,
                extClass: "mo-popup",
                height: 445,
                width: 674,
                defaultAnchor: POPUP_ANCHOR_WINDOW_CENTER,
                clickClose: false,
                closeButton: '<button class="mo-close" title="关闭"></button>',
                close: function() {
                    a.clear()
                }
            };
            var d = this.popup = new Popup(f);
            d.render();
            d.hide();
            c.init();
            go("tpl:MobileDownload", {
                dom: d.content,
                cinfo: h,
                onload: function() {
                    c.show();
                    d.show()
                }
            });
            var i = this;
            var g = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
            T.on(window.document, g,
            function(j) {
                i._escFun = arguments.callee;
                if (j.keyCode == 27) {
                    a.popup && a.popup.close()
                }
            })
        },
        clear: function() {
            if (this._escFun) {
                var d = (T.browser.ie && T.browser.ie <= 7) ? "keypress": "keydown";
                T.un(window.document, d, this._escFun);
                delete this._escFun
            }
            c.hide();
            delete this.popup
        },
        tip: {
            add: function() {
                if (T.cookie.get("Maptodowntip") !== "2") {
                    beforeEndHTML(document.body, '<div id="MaptoDown_tip" class="search-tip"><i onclick="PcToMobile.tip.remove()" title="关闭" class="close">关闭</i><div class="inner"><div class="lk-btn1"><a href="http://www.egrasp.cn">易格时空科技</a></div><div class="lk-btn"><a href="http://www.egrasp.cn">欢迎使用易格时空地图</a></div></div></div>')
                }
            },
            remove: function() {
                var d = T.g("MaptoDown_tip");
                baidu.dom.remove(d);
                T.cookie.set("Maptodowntip", "2", {
                    expires: 946080000000
                })
            }
        }
    };
    window.PcToMobile = a
})();
function processUrlQuery() {
    var p = window.location.search ? window.location.search.substr(1) : "";
    if (!p) {
        return
    }
    var j = p.split("&"),
    d = {};
    for (var k = 0,
    h = j.length; k < h; k++) {
        var a = j[k].split("=");
        try {
            d[a[0]] = decodeURIComponent(a[1])
        } catch(m) {
            continue
        }
    }
    var g = d.saddr || d.daddr;
    var o = filtQuery(d.saddr) || filtQuery(d.daddr);
    if (g) {
        if (o) {
            var q = d.ccode || modelConfig.cityCode;
            if (filtQuery(d.saddr) && filtQuery(d.daddr)) {
                var n = d.dirflag == "t" ? "bs": "nav",
                f = encodeURIComponent("2$$$$$$" + d.saddr + "$$0$$$$"),
                b = encodeURIComponent("2$$$$$$" + d.daddr + "$$0$$$$");
                if (n == "bs") {
                    go("bt&c=" + q + "&sn=" + f + "&en=" + b)
                } else {
                    go("nav&c=" + q + "&sc=" + q + "&ec=" + q + "&sn=" + f + "&en=" + b)
                }
            } else {
                go("s&wd=" + encodeURIComponent(o) + "&c=" + q, {
                    onload: function() {
                        d.dirflag = d.dirflag == "d" ? "d": "t";
                        var i = d.dirflag == "d" ? 3 : 2;
                        setTimeout(function() {
                            switchTab(i);
                            setQValue(d.saddr, i, 0);
                            setQValue(d.daddr, i, 1);
                            if (d.saddr) {
                                setQFocus(i, 1)
                            } else {
                                setQFocus(i, 0)
                            }
                        },
                        1)
                    }
                })
            }
        } else {
            var c = d.dirflag == "d" ? 3 : 2;
            switchTab(c)
        }
    }
}
function myconfilterCallback(g) {
    if (g.data[0].result) {
        return
    }
    var f = getParam(location.href),
    a = f.latlng.split(",")[1],
    h = f.latlng.split(",")[0],
    d = BMap.Project.convertLL2MC(new BMap.Point(a, h)),
    b = new BMap.Marker(d);
    map.addOverlay(b);
    map.centerAndZoom(d, 17);
    if (f.autoOpen && f.autoOpen == "true") {
        c()
    }
    b.addEventListener("click",
    function() {
        if (handleUrlExt.iw && handleUrlExt.iw.isOpen()) {} else {
            c()
        }
    });
    function c() {
        handleUrlExt.iw = createSearchInfoWnd({
            title: myconfilterCallback.tit,
            mingpian: myconfilterCallback.content
        },
        {
            cityCode: modelConfig.cityCode,
            x: d.lng,
            y: d.lat
        });
        openSearchInfoWndPOI(handleUrlExt.iw, b)
    }
}
function handleUrlExt() {
    var a = getParam(location.href);
    if (a && a.latlng && (a.title || a.title == "") && (a.content || a.content == "")) {
        myconfilterCallback.tit = filtQuery(decodeURIComponent(a.title));
        myconfilterCallback.content = filtQuery(decodeURIComponent(a.content));
        M.service.confilter({
            confilterWords: [myconfilterCallback.tit + myconfilterCallback.content],
            callback: "myconfilterCallback"
        })
    }
}
var sideBar = {
    status: "open",
    isGoing: false,
    timer: null,
    init: function() {
        var a = this;
        a.bindEvent()
    },
    hide: function() {
        var o = this;
        o.status = "close";
        if (o.isGoing) {
            return
        }
        o.isGoing = true;
        var p = T.g("MapHolder"),
        j = T.g("tools"),
        g = T.g("MapInfoCon"),
        c = T.g("MapInfoNav"),
        f = T.g("MapInfoTab"),
        k = T.g("citytools"),
        h = T.g("shad_v"),
        n = map.getCenter(),
        b = map.pointToPixel(n),
        a = b.x - 155,
        t = b.y,
        i = new BMap.Pixel(a, t),
        d = map.pixelToPoint(i),
        m = getClientSize().height - 142,
        l = getClientSize().width,
        q = T.g("tool_container");
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.left = l / 2 - 104 + "px"
        }
        if (T.G("ROUTE_CustomTip1")) {
            T.G("ROUTE_CustomTip1").style.left = (l - 235) / 2 + "px"
        }
        k.style.left = 0;
        g.style.left = "-310px";
        c.style.left = "-310px";
        f.style.left = 0;
        h.style.left = 0;
        j.style.paddingLeft = 0;
        p.style.marginLeft = 0;
        p.style.height = m + "px";
        if (T.G("GR_CustomTip2")) {
            T.G("GR_CustomTip2").style.left = "90px"
        }
        map.setCenter(d);
        if (o.timer) {
            clearTimeout(o.timer)
        }
        o.timer = setTimeout(function() {
            map.setCenter(n)
        },
        100);
        f.className = "mapinfo_but mapinfo_but_open";
        f.title = "显示左栏";
        addStat(STAT_CLOSE_SIDEBAR);
        o.isGoing = false
    },
    show: function() {
        var o = this;
        o.status = "open";
        if (o.isGoing) {
            return
        }
        o.isGoing = true;
        var p = T.g("MapHolder"),
        j = T.g("tools"),
        g = T.g("MapInfoCon"),
        c = T.g("MapInfoNav"),
        f = T.g("MapInfoTab"),
        k = T.g("citytools"),
        h = T.g("shad_v"),
        n = map.getCenter(),
        b = map.pointToPixel(n),
        a = b.x + 155,
        t = b.y,
        i = new BMap.Pixel(a, t),
        d = map.pixelToPoint(i),
        m = getClientSize().height - 142,
        l = getClientSize().width - 310,
        q = T.g("tool_container");
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.left = l / 2 + 204 + "px"
        }
        if (T.G("ROUTE_CustomTip1")) {
            T.G("ROUTE_CustomTip1").style.left = (l + 235) / 2 + "px"
        }
        k.style.left = "310px";
        g.style.left = 0;
        c.style.left = "1px";
        f.style.left = 309 + "px";
        h.style.left = 310 + "px";
        j.style.paddingLeft = 310 + "px";
        p.style.marginLeft = 310 + "px";
        p.style.height = m + "px";
        if (T.G("GR_CustomTip2")) {
            T.G("GR_CustomTip2").style.left = "400px"
        }
        map.setCenter(d);
        if (o.timer) {
            clearTimeout(o.timer)
        }
        o.timer = setTimeout(function() {
            map.setCenter(n)
        },
        100);
        f.className = "mapinfo_but";
        f.title = "收起左栏";
        addStat(STAT_OPEN_SIDEBAR);
        o.isGoing = false
    },
    bindEvent: function() {
        var a = this;
        T.on(T.g("MapInfoTab"), "mouseover",
        function() {
            var b = "mapinfo_but_close_on";
            if (a.status == "close") {
                b = "mapinfo_but_open_on"
            }
            this.className = "mapinfo_but " + b
        });
        T.on(T.g("MapInfoTab"), "mouseout",
        function() {
            var b = "";
            if (a.status == "close") {
                b = "mapinfo_but_open"
            }
            this.className = "mapinfo_but " + b
        });
        T.on(T.g("MapInfoTab"), "click",
        function() {
            if (a.status == "open") {
                a.hide()
            } else {
                a.show();
                mapInfoScrollPanel.update()
            }
        })
    }
};
sideBar.init();
var fullScreenCtrl = {
    isFullScreen: false,
    isGoing: false,
    timer: null,
    init: function() {
        var a = this;
        a.animation = new Animation();
        a.bindEvent()
    },
    toFull: function(i) {
        var x = this;
        if (x.isGoing) {
            return
        }
        x.isGoing = true;
        var g = T.g("searchWrapper"),
        z = T.g("MapHolder"),
        d = T.g("tools"),
        j = T.g("MapInfoCon"),
        c = T.g("MapInfoNav"),
        t = T.g("MapInfoTab"),
        h = T.g("citytools"),
        v = T.g("shad_v"),
        n = T.g("tool_fullScrF"),
        m = T.g("tools_search"),
        p = "",
        b = T.g("tool_container"),
        k = map.getCenter(),
        l = map.pointToPixel(k),
        w = l.x - 155,
        u = l.y - 62;
        if (sideBar.status == "close") {
            w = w + 155
        }
        var y = new BMap.Pixel(w, u);
        var a = map.pixelToPoint(y);
        if (T.G("MaptoDown_tip")) {
            baidu.dom.remove(T.G("MaptoDown_tip"))
        }
        var f = getClientSize().height - 32;
        var o = getClientSize().width;
        var q = o;
        T.rc(T.g("tool_fullScr"), "span_focus");
        T.rc(T.g("tool_fullScr"), "full_icon");
        T.ac(T.g("tool_fullScr"), "return_full_icon");
        window.GRControll && window.GRControll.setGRequestFlg(1000);
        if (T.G("form1").style.display != "none") {
            p = T.G("PoiSearch").value
        }
        T.G("ToolPoiSearch").value = p;
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.top = "39px"
        }
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.left = q / 2 - 104 + "px"
        }
        if (T.G("DEM_CustomTip1")) {
            T.G("DEM_CustomTip1").parentNode.removeChild(T.G("DEM_CustomTip1"))
        }
        if (T.G("GR_CustomTip2")) {
            T.G("GR_CustomTip2").parentNode.removeChild(T.G("GR_CustomTip2"))
        }
        if (T.G("ROUTE_CustomTip1")) {
            T.G("ROUTE_CustomTip1").style.top = "36px";
            T.G("ROUTE_CustomTip1").style.left = (q - 235) / 2 + "px"
        }
        T.g("GR_Select").style.textIndent = "-1000px";
        T.g("GR_Select")._paddingLeft = T.getStyle(T.g("GR_Select"), "paddingLeft");
        T.g("GR_Select").style.paddingLeft = "0";
        h.style.left = 0;
        g.style.display = "none";
        j.style.left = "-310px";
        c.style.left = "-310px";
        t.style.display = "none";
        v.style.left = 0;
        d.style.paddingLeft = 0;
        z.style.marginLeft = 0;
        z.style.height = f + "px";
        m.style.display = "";
        n.innerHTML = "退出全屏";
        T.g("tool_fullScr").style.display = "block";
        map.fullScreenMode = x.isFullScreen = true;
        map.setCenter(a);
        if (x.timer) {
            clearTimeout(x.timer)
        }
        x.timer = setTimeout(function() {
            map.setCenter(k)
        },
        100);
        addStat(STAT_FULL_SCREEN);
        if (i == null) {
            historyUrl("isfullScreen=true");
            History.nowTpl = escape("isfullScreen=true")
        }
        tools && tools.resetWidth();
        x.isGoing = false
    },
    exitFull: function(i) {
        var x = this;
        if (x.isGoing) {
            return
        }
        x.isGoing = true;
        var g = T.g("searchWrapper"),
        z = T.g("MapHolder"),
        d = T.g("tools"),
        k = T.g("MapInfoCon"),
        c = T.g("MapInfoNav"),
        t = T.g("MapInfoTab"),
        v = T.g("shad_v"),
        h = T.g("citytools"),
        o = T.g("tool_fullScrF"),
        n = T.g("tools_search"),
        b = T.g("tool_container"),
        l = map.getCenter(),
        m = map.pointToPixel(l),
        w = m.x + 155,
        u = m.y + 62;
        if (sideBar.status == "close") {
            w -= 155
        }
        var y = new BMap.Pixel(w, u);
        var a = map.pixelToPoint(y);
        var p = getClientSize().width;
        var f = getClientSize().height - 142;
        var j = 0;
        var q = p;
        T.rc(T.g("tool_fullScr"), "span_focus");
        T.rc(T.g("tool_fullScr"), "return_full_icon");
        T.ac(T.g("tool_fullScr"), "full_icon");
        if (sideBar.status == "open") {
            q -= 310
        }
        window.GRControll && window.GRControll.setGRequestFlg(1000);
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.top = "160px"
        }
        if (T.G("GR_CustomTip1")) {
            T.G("GR_CustomTip1").style.left = q / 2 - 104 + "px"
        }
        if (T.G("GR_CustomTip2")) {
            T.G("GR_CustomTip2").parentNode.removeChild(T.G("GR_CustomTip2"))
        }
        if (T.G("ROUTE_CustomTip1")) {
            T.G("ROUTE_CustomTip1").style.top = "145px";
            T.G("ROUTE_CustomTip1").style.left = (q + 235) / 2 + "px"
        }
        T.g("GR_Select").style.textIndent = 0;
        if (T.g("GR_Select")._paddingLeft) {
            T.g("GR_Select").style.paddingLeft = T.g("GR_Select")._paddingLeft
        }
        n.style.display = "none";
        g.style.display = "";
        t.style.display = "";
        if (sideBar.status == "open") {
            p -= 310;
            j += 310;
            k.style.left = 0;
            c.style.left = "1px";
            z.style.marginLeft = 310 + "px";
            h.style.left = "310px"
        }
        v.style.left = j + "px";
        d.style.paddingRight = j + "px";
        z.style.height = f + "px";
        o.innerHTML = "全屏";
        map.fullScreenMode = x.isFullScreen = false;
        map.setCenter(a);
        if (x.timer) {
            clearTimeout(x.timer)
        }
        x.timer = setTimeout(function() {
            map.setCenter(l)
        },
        100);
        addStat(STAT_EXIT_FULL_SCREEN);
        if (i == null) {
            historyUrl("isfullScreen=false");
            History.nowTpl = escape("isfullScreen=false")
        }
        tools && tools.resetWidth();
        x.isGoing = false
    },
    bindEvent: function() {
        var a = this;
        var b = T.g("tool_fullScr");
        T.on(b, "click",
        function() {
            if (!a.isFullScreen) {
                a.toFull()
            } else {
                a.exitFull()
            }
        });
        T.on(document, "keydown",
        function(c) {
            c = window.event || c;
            if (c.keyCode == 27 && a.isFullScreen) {
                setTimeout(function() {
                    a.exitFull()
                },
                100)
            }
        })
    }
};
fullScreenCtrl.init();
var tools = {
    timer: null,
    init: function() {
        var a = this;
        a.bindEvent()
    },
    resetWidth: function() {
        var f = T.g("tool_container"),
        b = T.g("tool_container_con"),
        g = [T.g("tool_sehInView"), T.g("tool_tarffic"), T.g("tool_tollCon"), T.g("tool_fullScr")],
        a = 0;
        f.style.width = "auto";
        for (var c = 0; c < g.length; c++) {
            a += g[c].offsetWidth + 4
        }
        f.style.width = a + 3 + "px"
    },
    bindEvent: function() {
        var u = this,
        h = T.g("tool_sehInView"),
        t = T.g("tool_tarffic"),
        c = T.g("tool_tollCon"),
        n = T.g("tool_fullScr"),
        p = T.g("tools_box"),
        v = T.g("boxBtn"),
        q = T.g("specialBtn"),
        l = T.g("favBtn"),
        b = T.g("measure"),
        i = T.g("capwrap"),
        j = T.g("signwrap"),
        g = T.g("link"),
        a = T.g("print");
        var o = function(x) {
            var w = x && x.nodeName && x.nodeType == 1 ? x: this;
            if (w._opened) {
                return
            }
            T.rc(w, "span_focus");
            T.ac(w, "span_over")
        };
        var d = function(x) {
            var w = x && x.nodeName && x.nodeType == 1 ? x: this;
            T.rc(w, "span_over");
            if (w._opened) {
                return
            }
            T.rc(w, "span_focus")
        };
        var m = function(y) {
            var x = y && y.nodeName && y.nodeType == 1 ? y: this;
            var w = 1;
            if (!T.browser.ie) {
                w = 0
            }
            if (y && y.button != w) {
                return
            }
            T.rc(x, "span_over");
            T.ac(x, "span_focus")
        };
        var f = function(x) {
            var w = x && x.nodeName && x.nodeType == 1 ? x: this;
            o(w);
            p.style.top = "23px";
            u.timer = null
        };
        var k = function(x) {
            var w = x && x.nodeName && x.nodeType == 1 ? x: this;
            d(w);
            p.style.top = "-2000px"
        };
        T.on(h, "mouseover", o);
        T.on(t, "mouseover", o);
        T.on(c, "mouseover", f);
        T.on(n, "mouseover", o);
        T.on(q, "mouseover", o);
        T.on(b, "mouseover", o);
        T.on(i, "mouseover", o);
        T.on(j, "mouseover", o);
        T.on(g, "mouseover", o);
        T.on(a, "mouseover", o);
        T.on(h, "mouseout", d);
        T.on(t, "mouseout", d);
        T.on(c, "mouseout", k);
        T.on(n, "mouseout", d);
        T.on(q, "mouseout", d);
        T.on(b, "mouseout", d);
        T.on(i, "mouseout", d);
        T.on(j, "mouseout", d);
        T.on(g, "mouseout", d);
        T.on(a, "mouseout", d);
        T.on(h, "mousedown", m);
        T.on(t, "mousedown", m);
        T.on(n, "mousedown", m);
        T.on(b, "click",
        function() {
            p.style.top = "-2000px";
            doMeasure(this);
            T.rc(T.g("tool_tollCon"), "span_focus")
        });
        T.on(i, "click",
        function() {
            p.style.top = "-2000px";
            captureMap(this);
            T.rc(T.g("tool_tollCon"), "span_focus")
        });
        T.on(j, "click",
        function() {
            p.style.top = "-2000px";
            _sign("signMap");
            T.rc(T.g("tool_tollCon"), "span_focus")
        });
        T.on(g, "click",
        function() {
            p.style.top = "-2000px";
            BShare.open(this);
            T.rc(T.g("tool_tollCon"), "span_focus")
        });
        T.on(a, "click",
        function() {
            p.style.top = "-2000px";
            printMap(this);
            T.rc(T.g("tool_tollCon"), "span_focus")
        });
        T.on(v, "mouseover", o);
        T.on(v, "mouseout", d);
        T.on(v, "mousedown", m);
        T.on(l, "mouseover", o);
        T.on(l, "mouseout", d);
        T.on(l, "mousedown", m)
    }
};
tools.init();
var BoxContainer = {
    scrollBar: null,
    container: T.g("ToolsCon"),
    titleDom: T.g("ToolsTitle"),
    contentDom: T.g("toolsContent"),
    closeBtn: T.g("ToolsCloseBtn"),
    curSpecial: null,
    curCity: null,
    init: function() {
        var a = this;
        a.bindEvent()
    },
    initScrollBar: function() {
        var a = this;
        a.scrollBar = new baidu.ui.ScrollPanel({
            container: a.contentDom,
            overflow: "overflow-y",
            margin: [0, 0, 0, 5]
        });
        a.scrollBar.render(a.contentDom)
    },
    show: function(c) {
        c = c || {};
        var b = this,
        d = c.title || "",
        a = c.content || "";
        b.setTitle(d);
        b.setContent(a);
        b.bindCloseEvent();
        b.container.style.display = "block";
        if (!b.scrollBar) {
            b.initScrollBar()
        } else {
            b.scrollBar.update()
        }
    },
    hidden: function() {
        var a = this;
        if (a.container) {
            a.container.style.display = "none"
        }
    },
    setTitle: function(b) {
        var a = this;
        a.titleDom.innerHTML = b
    },
    setContent: function(b) {
        var a = this;
        a.contentDom.innerHTML = b;
        if (a.scrollBar) {
            a.scrollBar.update()
        }
    },
    bindCloseEvent: function() {
        var a = this;
        a.closeBtn.onclick = function() {
            a.exit()
        }
    },
    exit: function() {
        var a = this;
        a.resetTab();
        a.hidden();
        if (_gl && _gl.showAllPoi) {
            _gl.showAllPoi.isGoing = false
        }
        window.FavState = 0
    },
    resetTab: function() {
        var b = ["boxBtn", "favBtn"];
        for (var a = 0; a < b.length; a++) {
            T.rc(T.g(b[a]), "span_focus");
            T.g(b[a])._opened = false
        }
    },
    bindEvent: function() {
        var d = this,
        c = T.g("boxBtn"),
        b = T.g("subWayBtn"),
        f = T.g("favBtn");
        var a = function() {
            if (this._opened) {
                d.exit();
                return
            }
            d.resetTab();
            T.ac(this, "span_focus");
            this._opened = true;
            BoxContainer.show();
            _sign("openFav")
        };
        var g = function() {
            d.openBox()
        };
        T.on(f, "click", a);
        T.on(c, "click", g)
    },
    openBox: function(c) {
        window.FavState = 0;
        var b = this,
        c = c || {},
        d = c.from || "btnClick",
        a = T.g("boxBtn");
        if (a._opened) {
            b.exit();
            return
        }
        b.resetTab();
        T.ac(a, "span_focus");
        a._opened = true;
        BoxContainer.show({
            title: "本地生活",
            content: b.createBoxHtml()
        });
        if (d == "btnClick") {
            addStat(STAT_BOX_BTN)
        }
    },
    createBoxHtml: function() {
        var a = [];
        a.push('<div class="boxContent">');
        a.push('<ul class="toolsIcon">');
        a.push(Special.getHtml({
            from: "box",
            showDescript: true,
            liEvent: " onmouseover=\"T.ac(this,'hover')\" onmouseout=\"T.rc(this,'hover')\"",
            sup: modelConfig.sup
        }).html);
        a.push("</ul>");
        a.push("</div>");
        return a.join("")
    },
    showSpecial: function(a) {
        a = a || {};
        var o = this,
        f = T.g("boxInner"),
        b = T.g("specialBtn"),
        m = T.g("specInner"),
        g = T.g("boxBtn"),
        k = modelConfig.cityName,
        j = [modelConfig.cityName],
        n = a.type || "",
        p = a.sCity || "",
        q = a.eCity || "",
        d = 0;
        k = k.replace(/市$/, "");
        if (!n) {
            d = 1
        } else {
            o.curCity = null
        }
        if (o.curCity) {
            k = o.curCity
        }
        if (p && q) {
            j = [p, q];
            for (var h = 0; h < j.length; h++) {
                var l = j[h].replace(/市$/, "");
                if (Special.data[n][l]) {
                    k = l;
                    o.curCity = l;
                    break
                }
            }
        }
        n = n || o.curSpecial;
        if (!n || !Special.data[n][k]) {
            if (d) {
                o.hiddenSpecial({
                    noClear: true
                })
            } else {
                o.hiddenSpecial()
            }
            return
        }
        var c = Special.data[n];
        f.innerHTML = "";
        g.title = "本地生活";
        m.innerHTML = c.spTitle.replace(/#cityName#/g, k);
        b.className = "span_l " + n + "_icon";
        b.style.display = "block";
        if (n != "subway") {
            b.onclick = function() {
                Special.searchWord(c.spTitle, {
                    type: n,
                    codeStr: "SPEC"
                })
            }
        } else {
            b.onclick = function() {
                addStat(window["STAT_SPEC_" + n.toUpperCase()]);
                window.open(c.url + c[k])
            }
        }
        o.curSpecial = n
    },
    hiddenSpecial: function(d) {
        d = d || {};
        var c = this,
        b = T.g("boxInner"),
        f = T.g("specialBtn"),
        a = T.g("boxBtn"),
        g = T.g("specInner");
        b.innerHTML = "本地生活";
        a.title = "";
        g.innerHTML = "";
        f.className = "span_l";
        f.style.display = "none";
        f.onclick = null;
        if (!d.noClear) {
            c.curSpecial = null
        }
        c.curCity = null
    }
};
BoxContainer.init(); (function() {
    var CONST_PATH = "/user";
    var CONST_ACTION_SYNC = "/sync";
    var CONST_ACTION_UPLOAD = "/upload";
    var CONST_ACTION_DOWNLOAD = "/download";
    var CONST_ACTION_GETSTATUS = "/get_sync_status";
    var CONST_ACTION_GETVERSION = "/get_version";
    var CONST_PLATEFORM = "webmap";
    var CONST_STATUS_OVERFLOW = 7;
    var CONST_STATUS_OK = 0;
    var helper = {
        getSearch: function(json) {
            return "?" + jsonToQuery(json)
        }
    };
    var SyncMgr = {
        helper: helper,
        data: null,
        local_data_version: null,
        server_data_version: null,
        current_tab_index: 0,
        pk_dict: {
            0 : {
                0 : {
                    ck: 0,
                    lk: 0,
                    txt: "(最少时间)"
                },
                1 : {
                    ck: 1,
                    lk: 1,
                    txt: "(最短路程)"
                },
                2 : {
                    ck: 2,
                    lk: 2,
                    txt: "(不走高速)"
                },
                t: "自驾："
            },
            1 : {
                0 : {
                    ck: 3,
                    txt: "(较快捷)"
                },
                4 : {
                    ck: 6,
                    lk: 2,
                    txt: "(不坐地铁)"
                },
                2 : {
                    ck: 4,
                    txt: "(少换乘)"
                },
                3 : {
                    ck: 5,
                    lk: 0,
                    txt: "(少步行)"
                },
                5 : {
                    lk: 3
                },
                6 : {
                    lk: 4
                },
                t: "公交："
            },
            2 : {
                t: "步行："
            },
            9 : {
                0 : {
                    ck: 3,
                    txt: "(较快捷)"
                },
                1 : {
                    ck: 7,
                    txt: "(出发较早)"
                },
                2 : {
                    ck: 8,
                    txt: "(到达较早)"
                },
                3 : {
                    lk: 0
                },
                7 : {
                    lk: 1
                },
                8 : {
                    lk: 2
                },
                t: "公交："
            }
        },
        init: function(cbk) {
            var _this = this;
            this.download(function(json) {
                cbk & cbk(json)
            })
        },
        getSyncStatus: function(cbk) {
            var param = {
                bduss: this.getBduss(),
                plateform: CONST_PLATEFORM
            };
            var url = CONST_PATH + CONST_ACTION_GETSTATUS + helper.getSearch(param);
            this._get(url, cbk)
        },
        getVersion: function(cbk) {
            var param = {
                bduss: this.getBduss(),
                plateform: CONST_PLATEFORM
            };
            var url = CONST_PATH + CONST_ACTION_GETVERSION + helper.getSearch(param);
            this._get(url, cbk)
        },
        download: function(cbk, opts) {
            opts = opts || {};
            var defOpts = {
                plateform: CONST_PLATEFORM,
                bduss: this.getBduss(),
                local_data_version: "0",
                type: "",
                sync_data_version: "",
                page_index: "",
                page_size: "",
                collection: ""
            };
            var param = T.object.extend(defOpts, opts),
            url = CONST_PATH + CONST_ACTION_DOWNLOAD + helper.getSearch(param);
            this._get('./template/eis_y_car/map/user.php?t=34', cbk)
        },
        upload: function(data, cbk) {
            if (!data) {
                return
            }
            if (Object.prototype.toString.call(data) == "[object Object]") {
                data = [].concat(data)
            }
            for (var i = 0,
            len = data.length; i < len; i++) {
                if (data[i].action == 2) {
                    delete data[i].data
                }
            }
            var param = {
                bduss: this.getBduss(),
                plateform: CONST_PLATEFORM,
                post_data: this.formatData(data)
            };
            var url = CONST_PATH + CONST_ACTION_UPLOAD;
            this._post(url, param, cbk)
        },
        sync: function(data, cbk, localDataVersion) {
            var param = {
                bduss: this.getBduss(),
                plateform: CONST_PLATEFORM,
                post_data: this.formatData(data),
                local_data_version: localDataVersion || 0
            };
            var url = CONST_PATH + CONST_ACTION_SYNC;
            this._post(url, param, cbk)
        },
        favToServer: function(cbk) {
            var _this = this;
            _gl.connectFlash(function() {
                var flashData = _gl.ls.getValue("sign", "list");
                var newArr = _this.convertFavToGe(flashData);
                _this.sync(newArr, cbk)
            })
        },
        convertFavToGe: function(data) {
            if (!data) {
                return
            }
            for (var i = 0,
            output = [], len = data.length; i < len; i++) {
                if (data[i]) {
                    output.push({
                        action: 0,
                        type: 0,
                        data: this.converToGe(data[i])
                    })
                }
            }
            return output
        },
        converToGe: function(json) {
            if (!json) {
                return ""
            }
            var output = {};
            output.name = json.title || "";
            output.content = (json.content || "").replace(/&nbsp;/g, " ");
            output.geoptx = 12957320;
            output.geopty = 4825100;
            if (json.point) {
                var pt = json.point.split("|");
                output.geoptx = parseFloat(pt[0], 10);
                output.geopty = parseFloat(pt[1], 10)
            }
            output.cityid = parseInt(json.cityCode || modelConfig.cityCode, 10);
            output.poistyle = parseInt(json.cur || 13, 10);
            output.uid = json.uid || "";
            output.poitype = parseInt(json.poitype || 0, 10);
            return output
        },
        converToOriginal: function(o) {
            if (!o) {
                return ""
            }
            var output = {};
            output.title = o.name || "";
            output.content = (o.content || "").replace(/&nbsp;/g, " ");
            output.point = o.geoptx + "|" + o.geopty;
            output.cityCode = o.cityid || "";
            output.cur = o.poistyle || 13;
            output.uid = o.uid || "";
            output.poitype = o.poitype || "";
            return output
        },
        formatData: function(data) {
            if (!data) {
                return
            }
            for (var i = 0,
            output = ["["], len = data.length; i < len; i++) {
                var item = T.json.stringify(data[i]);
                if (i + 1 < len) {
                    item += ","
                }
                output.push(item)
            }
            output.push("]");
            return '{"data":' + output.join("") + "}"
        },
        getBduss: function() {
            return T.cookie.get("BDUSS") || ""
        },
        showError: function(url, status, opts) {
			        
			       
			
            if (arguments.length == 1) {
                _gl.showTipInfo(url);
                return
            }
            if (/\/upload/.test(url)) {
                if (opts && opts.json && opts.json.content && opts.json.content.data) {
                    var data = opts.json.content.data;
                    for (var i = 0,
                    len = data.length; i < len; i++) {
                        if (data[i].status == CONST_STATUS_OVERFLOW) {
                            _gl.showTipInfo("已达收藏数量上限");
                            return
                        }
                    }
                }
                switch (status) {
                case CONST_STATUS_OVERFLOW:
                    _gl.showTipInfo("已达收藏数量上限");
                    break;
                default:
                    _gl.showTipInfo("操作失败");
                    return
                }
            }
        },
        _get: function(url, cbk) {
            var _this = this,
            timeStamp = new Date().getTime(),
            url = url + "&v=" + timeStamp;
            T.Ajax.get(url, {
                onsuccess: function(req) {
                    var json = null;
                    try {
                        eval("json=" + req.responseText);
                        if (json && json.status == CONST_STATUS_OK) {
                            cbk && cbk(json)
                        } else {
                            _this.showError(url, json.status)
                        }
                    } catch(e) {
                        _this.showError("数据错误");
                        return
                    }
                },
                onfailure: function() {
                    _this.showError("连接服务失败")
                }
            })
        },
        _post: function(url, data, cbk) {
            var _ajax = new T.Ajax();
            var _this = this;
            _ajax.method = "POST";
            _ajax.data = jsonToQuery(data);
            _ajax.request(url);
            _ajax.onsuccess = function(req) {
                var json = null;
                try {
                    eval("json=" + req.responseText);
                    if (json && json.status == CONST_STATUS_OK) {
                        cbk && cbk(json)
                    } else {
                        _this.showError(url, json.status, {
                            json: json
                        })
                    }
                } catch(e) {
                    _this.showError("数据错误");
                    return
                }
            };
            _ajax.onfailure = function() {
                _this.showError("连接服务失败")
            }
        },
        setDialog: function() {
            var opts = {
                title: "<strong>同步到手机</strong>",
                content: ['<div class="favDialog">', "<h3>同步本地收藏夹内容到账号？</h3>", "<p>可将收藏的兴趣点和路线同步到云端，在多台手机和电脑查看</p>", '<div class="favContentBox">', '<h4 id="favTit" onclick="SyncMgr.showAndHide(this)"><span class="show"></span><em>查看本地收藏</em></h4>', '<div style="visibility:hidden;" class="favHidden"><div id="favDialog"></div><div style="clear:both"></div></div>', "</div>", '<div class="btcell"><span class="fav_pageBtn" onmouseup="this.className=\'fav_pageBtn_over\'" onmousedown="this.className=\'fav_pageBtnt_down\'" onmouseout="this.className=\'fav_pageBtn\'" onmouseover="this.className=\'fav_pageBtn_over\'" onclick="addStat(STAT_TONGBU_YES);SyncMgr.syncFav()">同步</span><span class="btcell-2" onclick="addStat(STAT_TONGBU_NO);SyncMgr.hidePopFav()">不同步</span></div>', "</div>"].join(""),
                height: 190,
                width: 290,
                closeButton: true,
                enableClose: false,
                open: function() {},
                close: function() {
                    T.g("mapmask").style.display = "none"
                }
            };
            var pop = window.temp.fav = new Popup(opts);
            pop.render();
            this.loadFlashData();
            pop.dialog(pop)
        },
        hidePopFav: function() {
            if (window.temp.fav) {
                window.temp.fav.hide();
                T.g("mapmask").style.display = "none";
                _gl.clearFavBySync()
            }
        },
        loadFlashData: function() {
            var me = this,
            reg = /\{([^}]+)\}/g,
            f = function() {
                try {
                    var flashData = me.flashFavData;
                    if (!flashData || flashData.length == 0) {
                        return
                    }
                } catch(e) {
                    return
                }
                _gl.favArr = flashData;
                var html = [];
                html.push(["<div><ul>"]);
                for (var i = 0,
                l = flashData.length; i < l; i++) {
                    if (flashData[i]) {
                        var o = flashData[i],
                        title = o.title,
                        lt = T.trim(title),
                        delt = _gl.deFiltXss(lt),
                        tit = _gl.charStr(delt, 26),
                        h = ["<li>", "<p>" + tit + "</p>", "</li>"];
                        html.push(h.join(""))
                    }
                }
                html.push("</ul></div>");
                T.g("favDialog").innerHTML = html.join("");
                var s = new baidu.ui.ScrollPanel({
                    container: T.g("favDialog"),
                    overflow: "overflow-y",
                    margin: [0, 0, 0, 5]
                });
                s.render(T.g("favDialog"))
            };
            _gl.connectFlash(f)
        },
        syncFav: function() {
            if (mapPass.userState.isOnline == 1) {
                SyncMgr.favToServer(function() {
                    _gl.showTipInfo("同步成功");
                    SyncMgr.hidePopFav();
                    _gl.clearFavBySync();
                    _gl.loadCloudData(function() {
                        if (_gl.oFav) {
                            _gl.oFav.goPage()
                        }
                    })
                })
            }
        },
        showAndHide: function(obj) {
            if (obj.nextSibling.style.visibility == "hidden") {
                obj.firstChild.className = "hide";
                obj.lastChild.innerHTML = "收起本地收藏";
                obj.nextSibling.style.visibility = "visible";
                obj.nextSibling.className = "favShow";
                setTimeout(function() {
                    window.temp.fav.setHeight(340)
                },
                100)
            } else {
                obj.nextSibling.style.visibility = "hidden";
                obj.lastChild.innerHTML = "查看本地收藏";
                obj.firstChild.className = "show";
                obj.nextSibling.className = "favHidden";
                setTimeout(function() {
                    window.temp.fav.setHeight(190)
                },
                100)
            }
        },
        checkFav: function(fn, scope, op) {
            var me = this,
            args = Array.prototype.slice.call(arguments, 2);
            if (mapPass.userState.isOnline == 1) {
                SyncMgr.getVersion(function(json) {
                    var f = function() {
                        var flashData = me.flashFavData = _gl.ls.getValue("sign", "list");
                        if (flashData && flashData.length > 0) {
                            addStat(STAT_TONGBU_WHETHER);
                            me.setDialog()
                        } else {
                            fn && fn.apply(scope || window, args)
                        }
                    };
                    _gl.connectFlash(f)
                })
            } else {
                if (mapPass.userState.isOnline == 0) {
                    UserMgr.login();
                    _gl.clearFavInfo()
                }
            }
        }
    };
    window.SyncMgr = SyncMgr
})(); (function() {
    var a = {
        apiServic: "https://openapi.baidu.com/rest/2.0/baike/openapi/BaikeLemmaCardApi?",
        proxyServic: "http://map.baidu.com/maps/services/get_proxy?",
        opts: null,
        box: null,
        name: "",
        set: function(d, h) {
            var b = d || "",
            b = this.name = b.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
            var c = this.box = T.g(h);
            var g = {
                grant_type: "client_credentials",
                client_id: "eAlzIrF7aWzmi8kLr8PDRNCQ",
                client_secret: "TcQqN5qHaN17OV2tA25icrIZTIiWxrbH",
                cb: "Baike.getAccessTokenCallback",
                url: "https://openapi.baidu.com/oauth/2.0/token"
            };
            var f = a.proxyServic + jsonToQuery(g);
            T.sio.callByBrowser(f)
        },
        getAccessTokenCallback: function(c) {
            if (c && c.access_token) {
                var d = {
                    access_token: c.access_token,
                    appid: "314359",
                    ie: "utf-8",
                    bk_key: this.name,
                    bk_length: 400,
                    bk_count: 6,
                    callback: "Baike.getBaikeCardCallback"
                };
                var b = a.apiServic + jsonToQuery(d);
                baidu.sio.callByBrowser(b)
            }
        },
        getBaikeCardCallback: function(d) {
            if (d && d.key && d["abstract"]) {
                var b = d["abstract"].replace(/<[^>].*?(>|$)/g, "") + "...";
                var c = ['<dl class="baike-box">'];
                c.push("<dt>" + d.key + "</dt>");
                c.push('<dd class="baike-txt">' + b + "</dd>");
                c.push('<dd class="baike-des">来自 <a href="' + d.url + '" target="_blank">百科</a><dd>');
                c.push("</dl>");
                a.box.innerHTML = c.join("")
            }
        }
    };
    window.Baike = a
})(); (function() {
    var a = {
        record: function(d, b, g) {
            g = g || {};
            var c = T.json.stringify(g),
            f = [d, b, c];
            if (window.Hunter && window.Hunter.record) {
                Hunter.record(f)
            }
            if (this.enableRevert) {
                try {
                    console.log("map log: " + f)
                } catch(h) {}
            }
        },
        include: function(d, b) {
            var c = "t=" + new Date().getTime();
            c = d.indexOf("?") >= 0 ? ("&" + c) : ("?&" + c);
            baidu.sio.callByBrowser(d + c, b)
        }
    };
    window.MapHunter = a
})(); (function() {
    PDA = (function() {
        function g(k) {
            var j = /(chrome)\/(\d+\.\d)/,
            o = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/,
            n = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            l = /(msie) ([\w.]+)/,
            m = /(mozilla)(?:.*? rv:([\w.]+))?/,
            k = k.toLowerCase(),
            h = {};
            var i = j.exec(k) || n.exec(k) || l.exec(k) || k.indexOf("compatible") < 0 && m.exec(k) || [];
            if (o.test(k) && !/chrome/.test(k)) {
                i[1] = "safari";
                i[2] = RegExp["$1"] || RegExp["$2"]
            }
            return {
                browser: i[1] || "unknown",
                version: i[2] || "0"
            }
        }
        function c() {
            var h = g(navigator.userAgent);
            var i = h.browser;
            if (i == "msie") {
                if (document.documentMode) {
                    if (window.performance) {
                        i += "9.0"
                    } else {
                        i += "8.0"
                    }
                } else {
                    i += h.version
                }
            }
            var j = {
                "msie6.0": 16,
                "msie7.0": 17,
                "msie8.0": 18,
                "msie9.0": 19,
                chrome: 20,
                mozilla: 30,
                safari: 40,
                opera: 50
            };
            return j[i] || 0
        }
        var d = {
            url: "http://static.tieba.baidu.com/tb/pms/img/st.gif",
            param: {
                p: PDC.getProductId(),
                b: c(),
                d: []
            }
        };
        function f() {
            var q = PDC.getAllInstance();
            var n = d.param.d;
            for (var m = 0; m < 5; m++) {
                var k = q.shift();
                if (!k) {
                    break
                }
                var l = {};
                l.a = k.getAppId();
                var p = l.t = {};
                var h = k.getTiming();
                var j = h[PDC.START_EVENT];
                for (var o in h) {
                    if (o != PDC.START_EVENT) {
                        p[o] = h[o] - j
                    }
                }
                n.push(l)
            }
        }
        function b(k) {
            var m = "";
            if (k instanceof Array) {
                m += "[";
                var h = [];
                for (var j in k) {
                    var l = k[j];
                    if (typeof l == "object") {
                        l = b(l)
                    }
                    h.push(l)
                }
                m += h.join(",");
                m += "]"
            } else {
                if (k instanceof Object) {
                    m += "{";
                    var h = [];
                    for (var j in k) {
                        var l = k[j];
                        if (typeof l == "object") {
                            l = b(l)
                        }
                        h.push('"' + j + '":' + l)
                    }
                    m += h.join(",");
                    m += "}"
                }
            }
            return m
        }
        function a() {
            var h = [];
            var k = d.param;
            for (var i in k) {
                var j = k[i];
                if (typeof j == "object") {
                    j = b(j)
                }
                h.push(i + "=" + j)
            }
            return h.join("&")
        }
        return {
            send: function() {
                f();
                if (d.param.d.length > 0) {
                    var k = new Date().getTime().toString();
                    var j = k.length;
                    k = k.substring(j - 6, j);
                    var i = d.url + "?" + a() + "&_d=" + k;
                    var h = document.createElement("img");
                    h.src = i;
                    h.id = "___pms_img_" + new Date() * 1;
                    window[h.id] = h;
                    h.onload = h.onerror = function() {
                        h.onload = h.onerror = null;
                        window[this.id] = null;
                        h = null
                    };
                    d.param.d = []
                }
            }
        }
    })();
    window.PDA = PDA;
    if (window.attachEvent) {
        window.attachEvent("onbeforeunload",
        function() {
            PDA.send()
        })
    } else {
        window.addEventListener("beforeunload",
        function(a) {
            PDA.send()
        },
        false)
    }
})();