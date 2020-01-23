! function t(e, i, n) {
    function r(o, a) {
        if (!i[o]) {
            if (!e[o]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(o, !0);
                if (s) return s(o, !0);
                var h = new Error("Cannot find module '" + o + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var u = i[o] = {
                exports: {}
            };
            e[o][0].call(u.exports, function (t) {
                var i = e[o][1][t];
                return r(i || t)
            }, u, u.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
    return r
}({
    1: [function (t, e, i) {
        var n, r;
        n = this, r = function () {
            return function (t) {
                var e = {};

                function i(n) {
                    if (e[n]) return e[n].exports;
                    var r = e[n] = {
                        exports: {},
                        id: n,
                        loaded: !1
                    };
                    return t[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
                }
                return i.m = t, i.c = e, i.p = "http://localhost:8080/dist", i(0)
            }([function (t, e, i) {
                "function" != typeof Promise && (window.Promise = i(1));
                var n = {
                    version: "1.0.0",
                    BaseTransition: i(4),
                    BaseView: i(6),
                    BaseCache: i(8),
                    Dispatcher: i(7),
                    HistoryManager: i(9),
                    Pjax: i(10),
                    Prefetch: i(13),
                    Utils: i(5)
                };
                t.exports = n
            }, function (t, e, i) {
                (function (e) {
                    ! function (i) {
                        var n = setTimeout;

                        function r() {}
                        var s = "function" == typeof e && e || function (t) {
                                n(t, 0)
                            },
                            o = function (t) {
                                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                            };

                        function a(t) {
                            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof t) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
                        }

                        function l(t, e) {
                            for (; 3 === t._state;) t = t._value;
                            0 !== t._state ? (t._handled = !0, s(function () {
                                var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                                if (null !== i) {
                                    var n;
                                    try {
                                        n = i(t._value)
                                    } catch (t) {
                                        return void u(e.promise, t)
                                    }
                                    h(e.promise, n)
                                } else(1 === t._state ? h : u)(e.promise, t._value)
                            })) : t._deferreds.push(e)
                        }

                        function h(t, e) {
                            try {
                                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var i = e.then;
                                    if (e instanceof a) return t._state = 3, t._value = e, void c(t);
                                    if ("function" == typeof i) return void f((n = i, r = e, function () {
                                        n.apply(r, arguments)
                                    }), t)
                                }
                                t._state = 1, t._value = e, c(t)
                            } catch (e) {
                                u(t, e)
                            }
                            var n, r
                        }

                        function u(t, e) {
                            t._state = 2, t._value = e, c(t)
                        }

                        function c(t) {
                            2 === t._state && 0 === t._deferreds.length && s(function () {
                                t._handled || o(t._value)
                            });
                            for (var e = 0, i = t._deferreds.length; e < i; e++) l(t, t._deferreds[e]);
                            t._deferreds = null
                        }

                        function f(t, e) {
                            var i = !1;
                            try {
                                t(function (t) {
                                    i || (i = !0, h(e, t))
                                }, function (t) {
                                    i || (i = !0, u(e, t))
                                })
                            } catch (t) {
                                if (i) return;
                                i = !0, u(e, t)
                            }
                        }
                        a.prototype.catch = function (t) {
                            return this.then(null, t)
                        }, a.prototype.then = function (t, e) {
                            var i = new this.constructor(r);
                            return l(this, new function (t, e, i) {
                                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
                            }(t, e, i)), i
                        }, a.all = function (t) {
                            var e = Array.prototype.slice.call(t);
                            return new a(function (t, i) {
                                if (0 === e.length) return t([]);
                                var n = e.length;

                                function r(s, o) {
                                    try {
                                        if (o && ("object" == typeof o || "function" == typeof o)) {
                                            var a = o.then;
                                            if ("function" == typeof a) return void a.call(o, function (t) {
                                                r(s, t)
                                            }, i)
                                        }
                                        e[s] = o, 0 == --n && t(e)
                                    } catch (t) {
                                        i(t)
                                    }
                                }
                                for (var s = 0; s < e.length; s++) r(s, e[s])
                            })
                        }, a.resolve = function (t) {
                            return t && "object" == typeof t && t.constructor === a ? t : new a(function (e) {
                                e(t)
                            })
                        }, a.reject = function (t) {
                            return new a(function (e, i) {
                                i(t)
                            })
                        }, a.race = function (t) {
                            return new a(function (e, i) {
                                for (var n = 0, r = t.length; n < r; n++) t[n].then(e, i)
                            })
                        }, a._setImmediateFn = function (t) {
                            s = t
                        }, a._setUnhandledRejectionFn = function (t) {
                            o = t
                        }, void 0 !== t && t.exports ? t.exports = a : i.Promise || (i.Promise = a)
                    }(this)
                }).call(e, i(2).setImmediate)
            }, function (t, e, i) {
                (function (t, n) {
                    var r = i(3).nextTick,
                        s = Function.prototype.apply,
                        o = Array.prototype.slice,
                        a = {},
                        l = 0;

                    function h(t, e) {
                        this._id = t, this._clearFn = e
                    }
                    e.setTimeout = function () {
                        return new h(s.call(setTimeout, window, arguments), clearTimeout)
                    }, e.setInterval = function () {
                        return new h(s.call(setInterval, window, arguments), clearInterval)
                    }, e.clearTimeout = e.clearInterval = function (t) {
                        t.close()
                    }, h.prototype.unref = h.prototype.ref = function () {}, h.prototype.close = function () {
                        this._clearFn.call(window, this._id)
                    }, e.enroll = function (t, e) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                    }, e.unenroll = function (t) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                    }, e._unrefActive = e.active = function (t) {
                        clearTimeout(t._idleTimeoutId);
                        var e = t._idleTimeout;
                        e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                            t._onTimeout && t._onTimeout()
                        }, e))
                    }, e.setImmediate = "function" == typeof t ? t : function (t) {
                        var i = l++,
                            n = !(arguments.length < 2) && o.call(arguments, 1);
                        return a[i] = !0, r(function () {
                            a[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
                        }), i
                    }, e.clearImmediate = "function" == typeof n ? n : function (t) {
                        delete a[t]
                    }
                }).call(e, i(2).setImmediate, i(2).clearImmediate)
            }, function (t, e) {
                var i, n, r = t.exports = {};
                ! function () {
                    try {
                        i = setTimeout
                    } catch (t) {
                        i = function () {
                            throw new Error("setTimeout is not defined")
                        }
                    }
                    try {
                        n = clearTimeout
                    } catch (t) {
                        n = function () {
                            throw new Error("clearTimeout is not defined")
                        }
                    }
                }();
                var s, o = [],
                    a = !1,
                    l = -1;

                function h() {
                    a && s && (a = !1, s.length ? o = s.concat(o) : l = -1, o.length && u())
                }

                function u() {
                    if (!a) {
                        var t = i(h);
                        a = !0;
                        for (var e = o.length; e;) {
                            for (s = o, o = []; ++l < e;) s && s[l].run();
                            l = -1, e = o.length
                        }
                        s = null, a = !1, n(t)
                    }
                }

                function c(t, e) {
                    this.fun = t, this.array = e
                }

                function f() {}
                r.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    o.push(new c(t, e)), 1 !== o.length || a || i(u, 0)
                }, c.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.binding = function (t) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function () {
                    return "/"
                }, r.chdir = function (t) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function () {
                    return 0
                }
            }, function (t, e, i) {
                var n = i(5),
                    r = {
                        oldContainer: void 0,
                        newContainer: void 0,
                        newContainerLoading: void 0,
                        extend: function (t) {
                            return n.extend(this, t)
                        },
                        init: function (t, e) {
                            var i = this;
                            return this.oldContainer = t, this._newContainerPromise = e, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function (t) {
                                i.newContainer = t, i.newContainerReady.resolve()
                            }), this.deferred.promise
                        },
                        done: function () {
                            this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                        },
                        start: function () {}
                    };
                t.exports = r
            }, function (t, e) {
                var i = {
                    getCurrentUrl: function () {
                        return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
                    },
                    cleanLink: function (t) {
                        return t.replace(/#.*/, "")
                    },
                    xhrTimeout: 5e3,
                    xhr: function (t) {
                        var e = this.deferred(),
                            i = new XMLHttpRequest;
                        return i.onreadystatechange = function () {
                            if (4 === i.readyState) return 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                        }, i.ontimeout = function () {
                            return e.reject(new Error("xhr: Timeout exceeded"))
                        }, i.open("GET", t), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), e.promise
                    },
                    extend: function (t, e) {
                        var i = Object.create(t);
                        for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                        return i
                    },
                    deferred: function () {
                        return new function () {
                            this.resolve = null, this.reject = null, this.promise = new Promise(function (t, e) {
                                this.resolve = t, this.reject = e
                            }.bind(this))
                        }
                    },
                    getPort: function (t) {
                        var e = void 0 !== t ? t : window.location.port,
                            i = window.location.protocol;
                        return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
                    }
                };
                t.exports = i
            }, function (t, e, i) {
                var n = i(7),
                    r = i(5),
                    s = {
                        namespace: null,
                        extend: function (t) {
                            return r.extend(this, t)
                        },
                        init: function () {
                            var t = this;
                            n.on("initStateChange", function (e, i) {
                                i && i.namespace === t.namespace && t.onLeave()
                            }), n.on("newPageReady", function (e, i, n) {
                                t.container = n, e.namespace === t.namespace && t.onEnter()
                            }), n.on("transitionCompleted", function (e, i) {
                                e.namespace === t.namespace && t.onEnterCompleted(), i && i.namespace === t.namespace && t.onLeaveCompleted()
                            })
                        },
                        onEnter: function () {},
                        onEnterCompleted: function () {},
                        onLeave: function () {},
                        onLeaveCompleted: function () {}
                    };
                t.exports = s
            }, function (t, e) {
                var i = {
                    events: {},
                    on: function (t, e) {
                        this.events[t] = this.events[t] || [], this.events[t].push(e)
                    },
                    off: function (t, e) {
                        t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
                    },
                    trigger: function (t) {
                        if (t in this.events != !1)
                            for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                    }
                };
                t.exports = i
            }, function (t, e, i) {
                var n = i(5),
                    r = {
                        data: {},
                        extend: function (t) {
                            return n.extend(this, t)
                        },
                        set: function (t, e) {
                            this.data[t] = e
                        },
                        get: function (t) {
                            return this.data[t]
                        },
                        reset: function () {
                            this.data = {}
                        }
                    };
                t.exports = r
            }, function (t, e) {
                var i = {
                    history: [],
                    add: function (t, e) {
                        e || (e = void 0), this.history.push({
                            url: t,
                            namespace: e
                        })
                    },
                    currentStatus: function () {
                        return this.history[this.history.length - 1]
                    },
                    prevStatus: function () {
                        var t = this.history;
                        return t.length < 2 ? null : t[t.length - 2]
                    }
                };
                t.exports = i
            }, function (t, e, i) {
                var n = i(5),
                    r = i(7),
                    s = i(11),
                    o = i(8),
                    a = i(9),
                    l = {
                        Dom: i(12),
                        History: a,
                        Cache: o,
                        cacheEnabled: !0,
                        transitionProgress: !1,
                        ignoreClassLink: "no-barba",
                        start: function () {
                            this.init()
                        },
                        init: function () {
                            var t = this.Dom.getContainer();
                            this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), r.trigger("initStateChange", this.History.currentStatus()), r.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), r.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                        },
                        bindEvents: function () {
                            document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                        },
                        getCurrentUrl: function () {
                            return n.cleanLink(n.getCurrentUrl())
                        },
                        goTo: function (t) {
                            window.history.pushState(null, null, t), this.onStateChange()
                        },
                        forceGoTo: function (t) {
                            window.location = t
                        },
                        load: function (t) {
                            var e, i = n.deferred(),
                                r = this;
                            return (e = this.Cache.get(t)) || (e = n.xhr(t), this.Cache.set(t, e)), e.then(function (t) {
                                var e = r.Dom.parseResponse(t);
                                r.Dom.putContainer(e), r.cacheEnabled || r.Cache.reset(), i.resolve(e)
                            }, function () {
                                r.forceGoTo(t), i.reject()
                            }), i.promise
                        },
                        getHref: function (t) {
                            if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                        },
                        onLinkClick: function (t) {
                            for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                            if (this.preventCheck(t, e)) {
                                t.stopPropagation(), t.preventDefault(), r.trigger("linkClicked", e, t);
                                var i = this.getHref(e);
                                this.goTo(i)
                            }
                        },
                        preventCheck: function (t, e) {
                            if (!window.history.pushState) return !1;
                            var i = this.getHref(e);
                            return !(!e || !i) && (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ((!e.target || "_blank" !== e.target) && (window.location.protocol === e.protocol && window.location.hostname === e.hostname && (n.getPort() === n.getPort(e.port) && (!(i.indexOf("#") > -1) && ((!e.getAttribute || "string" != typeof e.getAttribute("download")) && (n.cleanLink(i) != n.cleanLink(location.href) && !e.classList.contains(this.ignoreClassLink))))))))
                        },
                        getTransition: function () {
                            return s
                        },
                        onStateChange: function () {
                            var t = this.getCurrentUrl();
                            if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                            this.History.add(t);
                            var e = this.load(t),
                                i = Object.create(this.getTransition());
                            this.transitionProgress = !0, r.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                            var n = i.init(this.Dom.getContainer(), e);
                            e.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this))
                        },
                        onNewContainerLoaded: function (t) {
                            this.History.currentStatus().namespace = this.Dom.getNamespace(t), r.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                        },
                        onTransitionEnd: function () {
                            this.transitionProgress = !1, r.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                        }
                    };
                t.exports = l
            }, function (t, e, i) {
                var n = i(4).extend({
                    start: function () {
                        this.newContainerLoading.then(this.finish.bind(this))
                    },
                    finish: function () {
                        document.body.scrollTop = 0, this.done()
                    }
                });
                t.exports = n
            }, function (t, e) {
                var i = {
                    dataNamespace: "namespace",
                    wrapperId: "barba-wrapper",
                    containerClass: "barba-container",
                    currentHTML: document.documentElement.innerHTML,
                    parseResponse: function (t) {
                        this.currentHTML = t;
                        var e = document.createElement("div");
                        e.innerHTML = t;
                        var i = e.querySelector("title");
                        return i && (document.title = i.textContent), this.getContainer(e)
                    },
                    getWrapper: function () {
                        var t = document.getElementById(this.wrapperId);
                        if (!t) throw new Error("Barba.js: wrapper not found!");
                        return t
                    },
                    getContainer: function (t) {
                        if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                        var e = this.parseContainer(t);
                        if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                        return e
                    },
                    getNamespace: function (t) {
                        return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
                    },
                    putContainer: function (t) {
                        t.style.visibility = "hidden", this.getWrapper().appendChild(t)
                    },
                    parseContainer: function (t) {
                        return t.querySelector("." + this.containerClass)
                    }
                };
                t.exports = i
            }, function (t, e, i) {
                var n = i(5),
                    r = i(10),
                    s = {
                        ignoreClassLink: "no-barba-prefetch",
                        init: function () {
                            if (!window.history.pushState) return !1;
                            document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))
                        },
                        onLinkEnter: function (t) {
                            for (var e = t.target; e && !r.getHref(e);) e = e.parentNode;
                            if (e && !e.classList.contains(this.ignoreClassLink)) {
                                var i = r.getHref(e);
                                if (r.preventCheck(t, e) && !r.Cache.get(i)) {
                                    var s = n.xhr(i);
                                    r.Cache.set(i, s)
                                }
                            }
                        }
                    };
                t.exports = s
            }])
        }, "object" == typeof i && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define("Barba", [], r) : "object" == typeof i ? i.Barba = r() : n.Barba = r()
    }, {}],
    2: [function (t, e, i) {
        var n, r;
        n = "undefined" != typeof window ? window : this, r = function () {
            "use strict";

            function t() {}
            var e = t.prototype;
            return e.on = function (t, e) {
                if (t && e) {
                    var i = this._events = this._events || {},
                        n = i[t] = i[t] || [];
                    return -1 == n.indexOf(e) && n.push(e), this
                }
            }, e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[t] = i[t] || {})[e] = !0, this
                }
            }, e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this
                }
            }, e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                        var s = i[r];
                        n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
                    }
                    return this
                }
            }, e.allOff = function () {
                delete this._events, delete this._onceEvents
            }, t
        }, "function" == typeof define && define.amd ? define(r) : "object" == typeof e && e.exports ? e.exports = r() : n.EvEmitter = r()
    }, {}],
    3: [function (t, e, i) {
        (function (t) {
            ! function (t, i) {
                "use strict";
                var n = {},
                    r = t.document,
                    s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!s.TweenLite) {
                    var o, a, l, h, u, c, f, p = function (t) {
                            var e, i = t.split("."),
                                n = s;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        d = p("com.greensock"),
                        m = 1e-10,
                        _ = function (t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        g = function () {},
                        v = (c = Object.prototype.toString, f = c.call([]), function (t) {
                            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && c.call(t) === f)
                        }),
                        y = {},
                        w = function (r, o, a, l) {
                            this.sc = y[r] ? y[r].sc : [], y[r] = this, this.gsClass = null, this.func = a;
                            var h = [];
                            this.check = function (u) {
                                for (var c, f, d, m, _ = o.length, g = _; --_ > -1;)(c = y[o[_]] || new w(o[_], [])).gsClass ? (h[_] = c.gsClass, g--) : u && c.sc.push(this);
                                if (0 === g && a) {
                                    if (d = (f = ("com.greensock." + r).split(".")).pop(), m = p(f.join("."))[d] = this.gsClass = a.apply(a, h), l)
                                        if (s[d] = n[d] = m, void 0 !== e && e.exports)
                                            if (r === i) {
                                                e.exports = n[i] = m;
                                                for (_ in n) m[_] = n[_]
                                            } else n[i] && (n[i][d] = m);
                                    else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                        return m
                                    });
                                    for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                                }
                            }, this.check(!0)
                        },
                        x = t._gsDefine = function (t, e, i, n) {
                            return new w(t, e, i, n)
                        },
                        T = d._class = function (t, e, i) {
                            return e = e || function () {}, x(t, [], function () {
                                return e
                            }, i), e
                        };
                    x.globals = s;
                    var b = [0, 0, 1, 1],
                        P = T("easing.Ease", function (t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b
                        }, !0),
                        k = P.map = {},
                        C = P.register = function (t, e, i, n) {
                            for (var r, s, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                for (s = l[h], r = n ? T("easing." + s, null, !0) : d.easing[s] || {}, o = u.length; --o > -1;) a = u[o], k[s + "." + a] = k[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for ((l = P.prototype)._calcEnd = !1, l.getRatio = function (t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                        }, a = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = o[a] + ",Power" + a, C(new P(null, null, 1, a), l, "easeOut", !0), C(new P(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), C(new P(null, null, 3, a), l, "easeInOut");
                    k.linear = d.easing.Linear.easeIn, k.swing = d.easing.Quad.easeInOut;
                    var S = T("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (l = S.prototype).addEventListener = function (t, e, i, n, r) {
                        r = r || 0;
                        var s, o, a = this._listeners[t],
                            l = 0;
                        for (this !== h || u || h.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, l.removeEventListener = function (t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, l.dispatchEvent = function (t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var A = t.requestAnimationFrame,
                        O = t.cancelAnimationFrame,
                        R = Date.now || function () {
                            return (new Date).getTime()
                        },
                        D = R();
                    for (a = (o = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !A;) A = t[o[a] + "RequestAnimationFrame"], O = t[o[a] + "CancelAnimationFrame"] || t[o[a] + "CancelRequestAnimationFrame"];
                    T("Ticker", function (t, e) {
                        var i, n, s, o, a, l = this,
                            c = R(),
                            f = !(!1 === e || !A) && "auto",
                            p = 500,
                            d = 33,
                            m = function (t) {
                                var e, r, h = R() - D;
                                h > p && (c += h - d), D += h, l.time = (D - c) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (s = n(m)), r && l.dispatchEvent("tick")
                            };
                        S.call(l), l.time = l.frame = 0, l.tick = function () {
                            m(!0)
                        }, l.lagSmoothing = function (t, e) {
                            if (!arguments.length) return p < 1e10;
                            p = t || 1e10, d = Math.min(e, p, 0)
                        }, l.sleep = function () {
                            null != s && (f && O ? O(s) : clearTimeout(s), n = g, s = null, l === h && (u = !1))
                        }, l.wake = function (t) {
                            null !== s ? l.sleep() : t ? c += -D + (D = R()) : l.frame > 10 && (D = R() - p + 5), n = 0 === i ? g : f && A ? A : function (t) {
                                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                            }, l === h && (u = !0), m(2)
                        }, l.fps = function (t) {
                            if (!arguments.length) return i;
                            o = 1 / ((i = t) || 60), a = this.time + o, l.wake()
                        }, l.useRAF = function (t) {
                            if (!arguments.length) return f;
                            l.sleep(), f = t, l.fps(i)
                        }, l.fps(t), setTimeout(function () {
                            "auto" === f && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1)
                        }, 1500)
                    }), (l = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
                    var E = T("core.Animation", function (t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, K) {
                            u || h.wake();
                            var i = this.vars.useFrames ? Q : K;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    h = E.ticker = new d.Ticker, (l = E.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
                    var M = function () {
                        u && R() - D > 2e3 && ("hidden" !== r.visibilityState || !h.lagSmoothing()) && h.wake();
                        var t = setTimeout(M, 2e3);
                        t.unref && t.unref()
                    };
                    M(), l.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, l.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, l.resume = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, l.seek = function (t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, l.restart = function (t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, l.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, l.render = function (t, e, i) {}, l.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, l.isActive = function () {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, l._enabled = function (t, e) {
                        return u || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, l._kill = function (t, e) {
                        return this._enabled(!1, !1)
                    }, l.kill = function (t, e) {
                        return this._kill(t, e), this
                    }, l._uncache = function (t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, l._swapSelfInParams = function (t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, l._callback = function (t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (n ? n.length : 0) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, l.eventCallback = function (t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, l.delay = function (t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, l.duration = function (t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, l.totalDuration = function (t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, l.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, l.totalTime = function (t, e, i) {
                        if (u || h.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && J(), this.render(t, e, !1), I.length && J())
                        }
                        return this
                    }, l.progress = l.totalProgress = function (t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, l.startTime = function (t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, l.endTime = function (t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, l.timeScale = function (t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || m, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, l.reversed = function (t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, l.paused = function (t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (u || t || h.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var L = T("core.SimpleTimeline", function (t) {
                        E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (l = L.prototype = new E).constructor = L, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e, i, n) {
                        var r, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, l._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, l.render = function (t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, l.rawTime = function () {
                        return u || h.wake(), this._totalTime
                    };
                    var N = T("TweenLite", function (e, i, n) {
                            if (E.call(this, i, n), this.render = N.prototype.render, null == e) throw "Cannot tween a null target.";
                            this.target = e = "string" != typeof e ? e : N.selector(e) || e;
                            var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? G[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                                for (this._targets = o = _(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(_(s))) : (this._siblings[r] = tt(s, this, !1), 1 === l && this._siblings[r].length > 1 && it(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = o[r--] = N.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = tt(e, this, !1), 1 === l && this._siblings.length > 1 && it(e, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -m, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        j = function (e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        };
                    (l = N.prototype = new E).constructor = N, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, N.version = "1.20.3", N.defaultEase = l._ease = new P(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = h, N.autoSleep = 120, N.lagSmoothing = function (t, e) {
                        h.lagSmoothing(t, e)
                    }, N.selector = t.$ || t.jQuery || function (e) {
                        var i = t.$ || t.jQuery;
                        return i ? (N.selector = i, i(e)) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                    };
                    var I = [],
                        F = {},
                        q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        z = /[\+-]=-?[\.\d]/,
                        B = function (t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        H = function (t, e, i, n) {
                            var r, s, o, a, l, h, u, c = [],
                                f = 0,
                                p = "",
                                d = 0;
                            for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(q) || [], s = e.match(q) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = s.length, a = 0; a < l; a++) u = s[a], p += (h = e.substr(f, e.indexOf(u, f) - f)) || !a ? h : ",", f += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === r[a] || r.length <= a ? p += u : (p && (c.push(p), p = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: o,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                                f: 0,
                                m: d && d < 4 ? Math.round : 0
                            }), f += u.length;
                            return (p += e.substr(f)) && c.push(p), c.setRatio = B, z.test(e) && (c.end = null), c
                        },
                        X = function (t, e, i, n, r, s, o, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var h = typeof t[e],
                                u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                c = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                                f = "string" == typeof n && "=" === n.charAt(1),
                                p = {
                                    t: t,
                                    p: e,
                                    s: c,
                                    f: "function" === h,
                                    pg: 0,
                                    n: r || e,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                                };
                            if (("number" != typeof c || "number" != typeof n && !f) && (o || isNaN(c) || !f && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (p.fp = o, p = {
                                    t: H(c, f ? parseFloat(p.s) + p.c : n, a || N.defaultStringFilter, p),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (p.s = parseFloat(c), f || (p.c = parseFloat(n) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                        },
                        W = N._internals = {
                            isArray: v,
                            isSelector: j,
                            lazyTweens: I,
                            blobDif: H
                        },
                        Y = N._plugins = {},
                        U = W.tweenLookup = {},
                        V = 0,
                        $ = W.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        G = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        Q = E._rootFramesTimeline = new L,
                        K = E._rootTimeline = new L,
                        Z = 30,
                        J = W.lazyRender = function () {
                            var t, e = I.length;
                            for (F = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            I.length = 0
                        };
                    K._startTime = h.time, Q._startTime = h.frame, K._active = Q._active = !0, setTimeout(J, 1), E._updateRoot = N.render = function () {
                        var t, e, i;
                        if (I.length && J(), K.render((h.time - K._startTime) * K._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && J(), h.frame >= Z) {
                            Z = h.frame + (parseInt(N.autoSleep, 10) || 120);
                            for (i in U) {
                                for (t = (e = U[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete U[i]
                            }
                            if ((!(i = K._first) || i._paused) && N.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || h.sleep()
                            }
                        }
                    }, h.addEventListener("tick", E._updateRoot);
                    var tt = function (t, e, i) {
                            var n, r, s = t._gsTweenID;
                            if (U[s || (t._gsTweenID = s = "t" + V++)] || (U[s] = {
                                    target: t,
                                    tweens: []
                                }), e && ((n = U[s].tweens)[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return U[s].tweens
                        },
                        et = function (t, e, i, n) {
                            var r, s, o = t.vars.onOverwrite;
                            return o && (r = o(t, e, i, n)), (o = N.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                        },
                        it = function (t, e, i, n, r) {
                            var s, o, a, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, s = 0; s < l; s++)
                                    if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                                    else if (5 === n) break;
                                return o
                            }
                            var h, u = e._startTime + m,
                                c = [],
                                f = 0,
                                p = 0 === e._duration;
                            for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || nt(e, 0, p), 0 === nt(a, h, p) && (c[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (c[f++] = a)));
                            for (s = f; --s > -1;)
                                if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !et(a, e)) continue;
                                    a._enabled(!1, !1) && (o = !0)
                                }
                            return o
                        },
                        nt = function (t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                                if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return (s /= r) > e ? s - e : i && s === e || !t._initted && s - e < 2 * m ? m : (s += t.totalDuration() / t._timeScale / r) > e + m ? 0 : s - e - m
                        };
                    l._init = function () {
                        var t, e, i, n, r, s, o = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            h = !!o.immediateRender,
                            u = o.ease;
                        if (o.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in o.startAt) r[n] = o.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = N.to(this.target, 0, r), h)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (o.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (h = !1), i = {};
                                for (n in o) $[n] && "autoCSS" !== n || (i[n] = o[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = N.to(this.target, 0, i), h) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = u = u ? u instanceof P ? u : "function" == typeof u ? new P(u, o.easeParams) : k[u] || N.defaultEase : N.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, l._initProps = function (e, i, n, r, s) {
                        var o, a, l, h, u, c;
                        if (null == e) return !1;
                        F[e._gsTweenID] && J(), this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function (t, e) {
                            var i, n = {};
                            for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        }(this.vars, e);
                        for (o in this.vars)
                            if (c = this.vars[o], $[o]) c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                            else if (Y[o] && (h = new Y[o])._onInitTween(e, this.vars[o], this, s)) {
                            for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: o,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                            (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                        } else i[o] = X.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter, s);
                        return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && it(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
                    }, l.render = function (t, e, i) {
                        var n, r, s, o, a = this._time,
                            l = this._duration,
                            h = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === m && "isPause" !== this.data) && h !== t && (i = !0, h > m && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : m);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== m || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : m)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var u = t / l,
                                c = this._easeType,
                                f = this._easePower;
                            (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / l < .5 ? u / 2 : 1 - u / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === m && o !== m && (this._rawPrevTime = 0)))
                        }
                    }, l._kill = function (t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                        var n, r, s, o, a, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((v(e) || j(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (h = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in h) a[s] && (c || (c = []), c.push(s));
                                    if ((c || !t) && !et(this, i, e, c)) return !1
                                }
                                for (s in h)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, l.invalidate = function () {
                        return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
                    }, l._enabled = function (t, e) {
                        if (u || h.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = tt(n[i], this, !0);
                            else this._siblings = tt(this.target, this, !0)
                        }
                        return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, N.to = function (t, e, i) {
                        return new N(t, e, i)
                    }, N.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
                    }, N.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
                    }, N.delayedCall = function (t, e, i, n, r) {
                        return new N(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, N.set = function (t, e) {
                        return new N(t, 0, e)
                    }, N.getTweensOf = function (t, e) {
                        if (null == t) return [];
                        var i, n, r, s;
                        if (t = "string" != typeof t ? t : N.selector(t) || t, (v(t) || j(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(N.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (i = (n = tt(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, N.killTweensOf = N.killDelayedCallsTo = function (t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = N.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var rt = T("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
                    }, !0);
                    if (l = rt.prototype, rt.version = "1.19.0", rt.API = 2, l._firstPT = null, l._addTween = X, l.setRatio = B, l._kill = function (t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, l._mod = l._roundProps = function (t) {
                            for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, N._onPluginEvent = function (t, e) {
                            var i, n, r, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                    (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                }
                                a = e._firstPT = r
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, rt.activate = function (t) {
                            for (var e = t.length; --e > -1;) t[e].API === rt.API && (Y[(new t[e])._propName] = t[e]);
                            return !0
                        }, x.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                s = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                o = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                    rt.call(this, i, n), this._overwriteProps = r || []
                                }, !0 === t.global),
                                a = o.prototype = new rt(i);
                            a.constructor = o, o.API = t.API;
                            for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                            return o.version = t.version, rt.activate([o]), o
                        }, o = t._gsQueue) {
                        for (a = 0; a < o.length; a++) o[a]();
                        for (l in y) y[l].func || t.console.log("GSAP encountered missing dependency: " + l)
                    }
                    u = !1
                }
            }(void 0 !== e && e.exports && void 0 !== t ? t : this || window, "TweenLite")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function (t, e, i) {
        (function (t) {
            var i = void 0 !== e && e.exports && void 0 !== t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function () {
                    "use strict";
                    var t, e, n, r, s, o, a, l, h, u, c, f, p, d, m, _;
                    i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                        var n = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            r = function (t, e, i) {
                                var n, r, s = t.cycle;
                                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                delete t.cycle
                            },
                            s = function (t, e, n) {
                                i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render
                            },
                            o = 1e-10,
                            a = i._internals,
                            l = a.isSelector,
                            h = a.isArray,
                            u = s.prototype = i.to({}, .1, {}),
                            c = [];
                        s.version = "1.20.3", u.constructor = s, u.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, u.invalidate = function () {
                            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                        }, u.updateTo = function (t, e) {
                            var n, r = this.ratio,
                                s = this.vars.immediateRender || t.immediateRender;
                            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (n in t) this.vars[n] = t[n];
                            if (this._initted || s)
                                if (e) this._initted = !1, s && this.render(0, !0, !0);
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var o = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || s)
                                for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                            return this
                        }, u.render = function (t, e, n) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var r, s, l, h, u, c, f, p, d, m = this._dirty ? this.totalDuration() : this._totalDuration,
                                _ = this._time,
                                g = this._totalTime,
                                v = this._cycle,
                                y = this._duration,
                                w = this._rawPrevTime;
                            if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (w < 0 || t <= 0 && t >= -1e-7 || w === o && "isPause" !== this.data) && w !== t && (n = !0, w > o && (s = "onReverseComplete")), this._rawPrevTime = p = !e || t || w === t ? t : o)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && w > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (w >= 0 && (n = !0), this._rawPrevTime = p = !e || t || w === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (u = this._time / y, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), _ !== this._time || n || v !== this._cycle) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = _, this._totalTime = g, this._rawPrevTime = w, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                                    !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== _ && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || s) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === y && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0)))
                            } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                        }, s.to = function (t, e, i) {
                            return new s(t, e, i)
                        }, s.from = function (t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                        }, s.fromTo = function (t, e, i, n) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                        }, s.staggerTo = s.allTo = function (t, e, o, a, u, f, p) {
                            a = a || 0;
                            var d, m, _, g, v = 0,
                                y = [],
                                w = function () {
                                    o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(p || o.callbackScope || this, f || c)
                                },
                                x = o.cycle,
                                T = o.startAt && o.startAt.cycle;
                            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], a < 0 && ((t = n(t)).reverse(), a *= -1), d = t.length - 1, _ = 0; _ <= d; _++) {
                                m = {};
                                for (g in o) m[g] = o[g];
                                if (x && (r(m, t, _), null != m.duration && (e = m.duration, delete m.duration)), T) {
                                    T = m.startAt = {};
                                    for (g in o.startAt) T[g] = o.startAt[g];
                                    r(m.startAt, t, _)
                                }
                                m.delay = v + (m.delay || 0), _ === d && u && (m.onComplete = w), y[_] = new s(t[_], e, m), v += a
                            }
                            return y
                        }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                        }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                        }, s.delayedCall = function (t, e, i, n, r) {
                            return new s(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: n,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, s.set = function (t, e) {
                            return new s(t, 0, e)
                        }, s.isTweening = function (t) {
                            return i.getTweensOf(t, !0).length > 0
                        };
                        var f = function (t, e) {
                                for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), r = (n = n.concat(f(s, e))).length), s = s._next;
                                return n
                            },
                            p = s.getAllTweens = function (e) {
                                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                            };
                        s.killAll = function (t, i, n, r) {
                            null == i && (i = !0), null == n && (n = !0);
                            var s, o, a, l = p(0 != r),
                                h = l.length,
                                u = i && n && r;
                            for (a = 0; a < h; a++) o = l[a], (u || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                        }, s.killChildTweensOf = function (t, e) {
                            if (null != t) {
                                var r, o, u, c, f, p = a.tweenLookup;
                                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                                    for (c = t.length; --c > -1;) s.killChildTweensOf(t[c], e);
                                else {
                                    r = [];
                                    for (u in p)
                                        for (o = p[u].target.parentNode; o;) o === t && (r = r.concat(p[u].tweens)), o = o.parentNode;
                                    for (f = r.length, c = 0; c < f; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                                }
                            }
                        };
                        var d = function (t, i, n, r) {
                            i = !1 !== i, n = !1 !== n;
                            for (var s, o, a = p(r = !1 !== r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                        };
                        return s.pauseAll = function (t, e, i) {
                            d(!0, t, e, i)
                        }, s.resumeAll = function (t, e, i) {
                            d(!1, t, e, i)
                        }, s.globalTimeScale = function (e) {
                            var n = t._rootTimeline,
                                r = i.ticker.time;
                            return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                        }, u.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, u.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, u.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, u.duration = function (e) {
                            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                        }, u.totalDuration = function (t) {
                            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, u.repeat = function (t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, u.repeatDelay = function (t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, u.yoyo = function (t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, s
                    }, !0), i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
                        var r = function (t) {
                                e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var i, n, r = this.vars;
                                for (n in r) i = r[n], h(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                                h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                            },
                            s = 1e-10,
                            o = n._internals,
                            a = r._internals = {},
                            l = o.isSelector,
                            h = o.isArray,
                            u = o.lazyTweens,
                            c = o.lazyRender,
                            f = i._gsDefine.globals,
                            p = function (t) {
                                var e, i = {};
                                for (e in t) i[e] = t[e];
                                return i
                            },
                            d = function (t, e, i) {
                                var n, r, s = t.cycle;
                                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                                delete t.cycle
                            },
                            m = a.pauseCallback = function () {},
                            _ = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            g = r.prototype = new e;
                        return r.version = "1.20.3", g.constructor = r, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, i, r) {
                            var s = i.repeat && f.TweenMax || n;
                            return e ? this.add(new s(t, e, i), r) : this.set(t, i, r)
                        }, g.from = function (t, e, i, r) {
                            return this.add((i.repeat && f.TweenMax || n).from(t, e, i), r)
                        }, g.fromTo = function (t, e, i, r, s) {
                            var o = r.repeat && f.TweenMax || n;
                            return e ? this.add(o.fromTo(t, e, i, r), s) : this.set(t, r, s)
                        }, g.staggerTo = function (t, e, i, s, o, a, h, u) {
                            var c, f, m = new r({
                                    onComplete: a,
                                    onCompleteParams: h,
                                    callbackScope: u,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                g = i.cycle;
                            for ("string" == typeof t && (t = n.selector(t) || t), l(t = t || []) && (t = _(t)), (s = s || 0) < 0 && ((t = _(t)).reverse(), s *= -1), f = 0; f < t.length; f++)(c = p(i)).startAt && (c.startAt = p(c.startAt), c.startAt.cycle && d(c.startAt, t, f)), g && (d(c, t, f), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[f], e, c, f * s);
                            return this.add(m, o)
                        }, g.staggerFrom = function (t, e, i, n, r, s, o, a) {
                            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                        }, g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                        }, g.call = function (t, e, i, r) {
                            return this.add(n.delayedCall(0, t, e, i), r)
                        }, g.set = function (t, e, i) {
                            return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
                        }, r.exportRoot = function (t, e) {
                            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                            var i, s, o, a, l = new r(t),
                                h = l._timeline;
                            for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof n && o.target === o.vars.onComplete || ((s = o._startTime - o._delay) < 0 && (i = 1), l.add(o, s)), o = a;
                            return h.add(l, 0), i && l.totalDuration(), l
                        }, g.add = function (i, s, o, a) {
                            var l, u, c, f, p, d;
                            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof t)) {
                                if (i instanceof Array || i && i.push && h(i)) {
                                    for (o = o || "normal", a = a || 0, l = s, u = i.length, c = 0; c < u; c++) h(f = i[c]) && (f = new r({
                                        tweens: f
                                    })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === o ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), l += a;
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof i) return this.addLabel(i, s);
                                if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                                i = n.delayedCall(0, i)
                            }
                            if (e.prototype.add.call(this, i, s), i._time && i.render((this.rawTime() - i._startTime) * i._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                for (d = (p = this).rawTime() > i._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                            return this
                        }, g.remove = function (e) {
                            if (e instanceof t) {
                                this._remove(e, !1);
                                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                            }
                            if (e instanceof Array || e && e.push && h(e)) {
                                for (var n = e.length; --n > -1;) this.remove(e[n]);
                                return this
                            }
                            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                        }, g._remove = function (t, i) {
                            return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, g.append = function (t, e) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                        }, g.insert = g.insertMultiple = function (t, e, i, n) {
                            return this.add(t, e || 0, i, n)
                        }, g.appendMultiple = function (t, e, i, n) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                        }, g.addLabel = function (t, e) {
                            return this._labels[t] = this._parseTimeOrLabel(e), this
                        }, g.addPause = function (t, e, i, r) {
                            var s = n.delayedCall(0, m, i, r || this);
                            return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                        }, g.removeLabel = function (t) {
                            return delete this._labels[t], this
                        }, g.getLabelTime = function (t) {
                            return null != this._labels[t] ? this._labels[t] : -1
                        }, g._parseTimeOrLabel = function (e, i, n, r) {
                            var s, o;
                            if (r instanceof t && r.timeline === this) this.remove(r);
                            else if (r && (r instanceof Array || r.push && h(r)))
                                for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                            if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                            else {
                                if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                            }
                            return Number(e) + i
                        }, g.seek = function (t, e) {
                            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                        }, g.stop = function () {
                            return this.paused(!0)
                        }, g.gotoAndPlay = function (t, e) {
                            return this.play(t, e)
                        }, g.gotoAndStop = function (t, e) {
                            return this.pause(t, e)
                        }, g.render = function (t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, r, o, a, l, h, f, p = this._time,
                                d = this._dirty ? this.totalDuration() : this._totalDuration,
                                m = this._startTime,
                                _ = this._timeScale,
                                g = this._paused;
                            if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = d + 1e-4;
                            else if (t < 1e-7)
                                if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                    t = 0, this._initted || (l = !0)
                                }
                            else {
                                if (this._hasPause && !this._forcingPlayhead && !e) {
                                    if (t >= p)
                                        for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                                    else
                                        for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                                    h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                this._totalTime = this._time = this._rawPrevTime = t
                            }
                            if (this._time !== p && this._first || i || l || h) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p)
                                    for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || g));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                else
                                    for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || g));) {
                                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                            if (h === n) {
                                                for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                                h = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || m !== this._startTime && _ === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                            }
                        }, g._hasPausedChild = function () {
                            for (var t = this._first; t;) {
                                if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                                t = t._next
                            }
                            return !1
                        }, g.getChildren = function (t, e, i, r) {
                            r = r || -9999999999;
                            for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof n ? !1 !== e && (s[a++] = o) : (!1 !== i && (s[a++] = o), !1 !== t && (a = (s = s.concat(o.getChildren(!0, e, i))).length))), o = o._next;
                            return s
                        }, g.getTweensOf = function (t, e) {
                            var i, r, s = this._gc,
                                o = [],
                                a = 0;
                            for (s && this._enabled(!0, !0), r = (i = n.getTweensOf(t)).length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (o[a++] = i[r]);
                            return s && this._enabled(!1, !0), o
                        }, g.recent = function () {
                            return this._recent
                        }, g._contains = function (t) {
                            for (var e = t.timeline; e;) {
                                if (e === this) return !0;
                                e = e.timeline
                            }
                            return !1
                        }, g.shiftChildren = function (t, e, i) {
                            i = i || 0;
                            for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                            if (e)
                                for (n in s) s[n] >= i && (s[n] += t);
                            return this._uncache(!0)
                        }, g._kill = function (t, e) {
                            if (!t && !e) return this._enabled(!1, !1);
                            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                            return r
                        }, g.clear = function (t) {
                            var e = this.getChildren(!1, !0, !0),
                                i = e.length;
                            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                            return !1 !== t && (this._labels = {}), this._uncache(!0)
                        }, g.invalidate = function () {
                            for (var e = this._first; e;) e.invalidate(), e = e._next;
                            return t.prototype.invalidate.call(this)
                        }, g._enabled = function (t, i) {
                            if (t === this._gc)
                                for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                            return e.prototype._enabled.call(this, t, i)
                        }, g.totalTime = function (e, i, n) {
                            this._forcingPlayhead = !0;
                            var r = t.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, r
                        }, g.duration = function (t) {
                            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, g.totalDuration = function (t) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
                                    this._duration = this._totalDuration = n, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                        }, g.paused = function (e) {
                            if (!e)
                                for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                            return t.prototype.paused.apply(this, arguments)
                        }, g.usesFrames = function () {
                            for (var e = this._timeline; e._timeline;) e = e._timeline;
                            return e === t._rootFramesTimeline
                        }, g.rawTime = function (t) {
                            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                        }, r
                    }, !0), i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, n) {
                        var r = function (e) {
                                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                            },
                            s = 1e-10,
                            o = e._internals,
                            a = o.lazyTweens,
                            l = o.lazyRender,
                            h = i._gsDefine.globals,
                            u = new n(null, null, 1, 0),
                            c = r.prototype = new t;
                        return c.constructor = r, c.kill()._gc = !1, r.version = "1.20.3", c.invalidate = function () {
                            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                        }, c.addCallback = function (t, i, n, r) {
                            return this.add(e.delayedCall(0, t, n, r), i)
                        }, c.removeCallback = function (t, e) {
                            if (t)
                                if (null == e) this._kill(null, t);
                                else
                                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                            return this
                        }, c.removePause = function (e) {
                            return this.removeCallback(t._internals.pauseCallback, e)
                        }, c.tweenTo = function (t, i) {
                            i = i || {};
                            var n, r, s, o = {
                                    ease: u,
                                    useFrames: this.usesFrames(),
                                    immediateRender: !1
                                },
                                a = i.repeat && h.TweenMax || e;
                            for (r in i) o[r] = i[r];
                            return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function () {
                                s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                            }, s
                        }, c.tweenFromTo = function (t, e, i) {
                            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [t],
                                callbackScope: this
                            }, i.immediateRender = !1 !== i.immediateRender;
                            var n = this.tweenTo(e, i);
                            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                        }, c.render = function (t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, r, o, h, u, c, f, p, d = this._time,
                                m = this._dirty ? this.totalDuration() : this._totalDuration,
                                _ = this._duration,
                                g = this._totalTime,
                                v = this._startTime,
                                y = this._timeScale,
                                w = this._rawPrevTime,
                                x = this._paused,
                                T = this._cycle;
                            if (d !== this._time && (t += this._time - d), t >= m - 1e-7 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || w < 0 || w === s) && w !== t && this._first && (u = !0, w > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4);
                            else if (t < 1e-7)
                                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === _ && w !== s && (w > 0 || t < 0 && w >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0, h = "onReverseComplete") : w >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                                    t = 0, this._initted || (u = !0)
                                }
                            else if (0 === _ && w < 0 && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = _ + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                                if ((t = this._time) >= d || this._repeat && T !== this._cycle)
                                    for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                                f && f._startTime < _ && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            if (this._cycle !== T && !this._locked) {
                                var b = this._yoyo && 0 != (1 & T),
                                    P = b === (this._yoyo && 0 != (1 & this._cycle)),
                                    k = this._totalTime,
                                    C = this._cycle,
                                    S = this._rawPrevTime,
                                    A = this._time;
                                if (this._totalTime = T * _, this._cycle < T ? b = !b : this._totalTime += _, this._time = d, this._rawPrevTime = 0 === _ ? w - 1e-4 : w, this._cycle = T, this._locked = !0, d = b ? 0 : _, this.render(d, e, 0 === _), e || this._gc || this.vars.onRepeat && (this._cycle = C, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                                if (P && (this._cycle = T, this._locked = !0, d = b ? _ + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !x) return;
                                this._time = A, this._totalTime = k, this._cycle = C, this._rawPrevTime = S
                            }
                            if (this._time !== d && this._first || i || u || f) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= d)
                                    for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                                else
                                    for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || x));) {
                                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                            if (f === n) {
                                                for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                                f = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                this._onUpdate && (e || (a.length && l(), this._callback("onUpdate"))), h && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (r && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                            } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                        }, c.getActive = function (t, e, i) {
                            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                            var n, r, s = [],
                                o = this.getChildren(t, e, i),
                                a = 0,
                                l = o.length;
                            for (n = 0; n < l; n++)(r = o[n]).isActive() && (s[a++] = r);
                            return s
                        }, c.getLabelAfter = function (t) {
                            t || 0 !== t && (t = this._time);
                            var e, i = this.getLabelsArray(),
                                n = i.length;
                            for (e = 0; e < n; e++)
                                if (i[e].time > t) return i[e].name;
                            return null
                        }, c.getLabelBefore = function (t) {
                            null == t && (t = this._time);
                            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                                if (e[i].time < t) return e[i].name;
                            return null
                        }, c.getLabelsArray = function () {
                            var t, e = [],
                                i = 0;
                            for (t in this._labels) e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                            return e.sort(function (t, e) {
                                return t.time - e.time
                            }), e
                        }, c.invalidate = function () {
                            return this._locked = !1, t.prototype.invalidate.call(this)
                        }, c.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                        }, c.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                        }, c.totalDuration = function (e) {
                            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        }, c.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, c.repeat = function (t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, c.repeatDelay = function (t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, c.yoyo = function (t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, c.currentLabel = function (t) {
                            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                        }, r
                    }, !0), t = 180 / Math.PI, e = [], n = [], r = [], s = {}, o = i._gsDefine.globals, a = function (t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    }, l = function (t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            u = (i + n) / 2,
                            c = (l + h) / 2,
                            f = (h + u) / 2,
                            p = (f - c) / 8;
                        return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    }, h = function (t, i, s, o, a) {
                        var h, u, c, f, p, d, m, _, g, v, y, w, x, T = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (h = 0; h < T; h++) u = (p = t[b]).a, c = p.d, f = t[b + 1].d, a ? (y = e[h], x = ((w = n[h]) + y) * i * .25 / (o ? .5 : r[h] || .5), _ = c - ((d = c - (c - u) * (o ? .5 * i : 0 !== y ? x / y : 0)) + (((m = c + (f - c) * (o ? .5 * i : 0 !== w ? x / w : 0)) - d) * (3 * y / (y + w) + .5) / 4 || 0))) : _ = c - ((d = c - (c - u) * i * .5) + (m = c + (f - c) * i * .5)) / 2, d += _, m += _, p.c = g = d, p.b = 0 !== h ? P : P = p.a + .6 * (p.c - p.a), p.da = c - u, p.ca = g - u, p.ba = P - u, s ? (v = l(u, P, g, c), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        (p = t[b]).b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, s && (v = l(p.a, P, p.c, p.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    }, u = function (t, i, r, s) {
                        var o, l, h, u, c, f, p = [];
                        if (s)
                            for (l = (t = [s].concat(t)).length; --l > -1;) "string" == typeof (f = t[l][i]) && "=" === f.charAt(1) && (t[l][i] = s[i] + Number(f.charAt(0) + f.substr(2)));
                        if ((o = t.length - 2) < 0) return p[0] = new a(t[0][i], 0, 0, t[0][i]), p;
                        for (l = 0; l < o; l++) h = t[l][i], u = t[l + 1][i], p[l] = new a(h, 0, 0, u), r && (c = t[l + 2][i], e[l] = (e[l] || 0) + (u - h) * (u - h), n[l] = (n[l] || 0) + (c - u) * (c - u));
                        return p[l] = new a(t[l][i], 0, 0, t[l + 1][i]), p
                    }, c = function (t, i, o, a, l, c) {
                        var f, p, d, m, _, g, v, y, w = {},
                            x = [],
                            T = c || t[0];
                        l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == i && (i = 1);
                        for (p in t[0]) x.push(p);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;)
                                if (p = x[f], Math.abs(T[p] - y[p]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = n.length = r.length = 0, f = x.length; --f > -1;) p = x[f], s[p] = -1 !== l.indexOf("," + p + ","), w[p] = u(t, p, s[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), n[f] = Math.sqrt(n[f]);
                        if (!a) {
                            for (f = x.length; --f > -1;)
                                if (s[p])
                                    for (g = (d = w[x[f]]).length - 1, m = 0; m < g; m++) _ = d[m + 1].da / n[m] + d[m].da / e[m] || 0, r[m] = (r[m] || 0) + _ * _;
                            for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
                        }
                        for (f = x.length, m = o ? 4 : 1; --f > -1;) d = w[p = x[f]], h(d, i, o, a, s[p]), v && (d.splice(0, m), d.splice(d.length - m, m));
                        return w
                    }, f = function (t, e, i) {
                        for (var n, r, s, o, a, l, h, u, c, f, p, d = 1 / i, m = t.length; --m > -1;)
                            for (s = (f = t[m]).a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, u = 1; u <= i; u++) n = r - (r = ((h = d * u) * h * o + 3 * (c = 1 - h) * (h * a + c * l)) * h), e[p = m * i + u - 1] = (e[p] || 0) + n * n
                    }, p = i._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, l, h = e.values || [],
                                u = {},
                                p = h[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]] : null;
                            for (n in p) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), l || u[n] !== h[0][n] && (l = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function (t, e, i) {
                                    var n, r, s, o, l, h, u, c, f, p, d, m = {},
                                        _ = "cubic" === (e = e || "soft") ? 3 : 2,
                                        g = "soft" === e,
                                        v = [];
                                    if (g && i && (t = [i].concat(t)), null == t || t.length < _ + 1) throw "invalid Bezier data";
                                    for (f in t[0]) v.push(f);
                                    for (h = v.length; --h > -1;) {
                                        for (m[f = v[h]] = l = [], p = 0, c = t.length, u = 0; u < c; u++) n = null == i ? t[u][f] : "string" == typeof (d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && u > 1 && u < c - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                                        for (c = p - _ + 1, p = 0, u = 0; u < c; u += _) n = l[u], r = l[u + 1], s = l[u + 2], o = 2 === _ ? 0 : l[u + 3], l[p++] = d = 3 === _ ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                                        l.length = p
                                    }
                                    return m
                                }(h, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = function (t, e) {
                                    var i, n, r, s, o = [],
                                        a = [],
                                        l = 0,
                                        h = 0,
                                        u = (e = e >> 0 || 6) - 1,
                                        c = [],
                                        p = [];
                                    for (i in t) f(t[i], o, e);
                                    for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), p[s = n % e] = l, s === u && (h += l, c[s = n / e >> 0] = p, a[s] = h, l = 0, p = []);
                                    return {
                                        length: h,
                                        lengths: a,
                                        segments: c
                                    }
                                }(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                                    for (o = 0; o < 3; o++) n = d[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = d[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, n, r, s, o, a, l, h, u, c, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                    for (h = f - 1; r < h && (this._l2 = u[++r]) <= e;);
                                    this._l1 = u[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                    for (h = c.length - 1; r < h && (this._s2 = c[++r]) <= e;);
                                    this._s1 = c[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else a = (e - (i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], l = (a * a * (o = this._beziers[s][i]).da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var _, g, v, y, w, x, T, b = this._autoRotate;
                                for (r = b.length; --r > -1;) s = b[r][2], x = b[r][3] || 0, T = !0 === b[r][4] ? 1 : t, o = this._beziers[b[r][0]], _ = this._beziers[b[r][1]], o && _ && (o = o[i], _ = _[i], g = o.a + (o.b - o.a) * a, g += ((y = o.b + (o.c - o.b) * a) - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = _.a + (_.b - _.a) * a, v += ((w = _.b + (_.c - _.b) * a) - v) * a, w += (_.c + (_.d - _.c) * a - w) * a, l = m ? Math.atan2(w - v, y - g) * T + x : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }), d = p.prototype, p.bezierThrough = c, p.cubicToQuadratic = l, p._autoCSS = !0, p.quadraticToCubic = function (t, e, i) {
                        return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, p._cssRegister = function () {
                        var t = o.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                n = e._setPluginRatio,
                                r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function (t, e, s, o, a, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }), l = new p;
                                    var h, u, c, f = e.values,
                                        d = f.length - 1,
                                        m = [],
                                        _ = {};
                                    if (d < 0) return a;
                                    for (h = 0; h <= d; h++) c = i(t, f[h], o, a, l, d !== h), m[h] = c.end;
                                    for (u in e) _[u] = e[u];
                                    return _.values = m, (a = new r(t, "bezier", 0, 0, c.pt, 2)).data = c, a.plugin = l, a.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (h = !0 === _.autoRotate ? 0 : Number(_.autoRotate), _.autoRotate = null != c.end.left ? [["left", "top", "rotation", h, !1]] : null != c.end.x && [["x", "y", "rotation", h, !1]]), _.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(c.proxy, _, o._tween), a
                                }
                            })
                        }
                    }, d._mod = function (t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                    }, d._kill = function (t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }, i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                        var n, r, s, o, a = function () {
                                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                            },
                            l = i._gsDefine.globals,
                            h = {},
                            u = a.prototype = new t("css");
                        u.constructor = a, a.version = "1.20.3", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, u = "px", a.suffixMap = {
                            top: u,
                            right: u,
                            bottom: u,
                            left: u,
                            width: u,
                            height: u,
                            fontSize: u,
                            padding: u,
                            margin: u,
                            perspective: u,
                            lineHeight: ""
                        };
                        var c, f, p, d, m, _, g, v, y, w, x = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            T = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            P = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            k = /(?:\d|\-|\+|=|#|\.)*/g,
                            C = /opacity *= *([^)]*)/i,
                            S = /opacity:([^;]*)/i,
                            A = /alpha\(opacity *=.+?\)/i,
                            O = /^(rgb|hsl)/,
                            R = /([A-Z])/g,
                            D = /-([a-z])/gi,
                            E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                            M = function (t, e) {
                                return e.toUpperCase()
                            },
                            L = /(?:Left|Right|Width)/i,
                            N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                            j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                            I = /,(?=[^\)]*(?:\(|$))/gi,
                            F = /[\s,\(]/i,
                            q = Math.PI / 180,
                            z = 180 / Math.PI,
                            B = {},
                            H = {
                                style: {}
                            },
                            X = i.document || {
                                createElement: function () {
                                    return H
                                }
                            },
                            W = function (t, e) {
                                return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                            },
                            Y = W("div"),
                            U = W("img"),
                            V = a._internals = {
                                _specialProps: h
                            },
                            $ = (i.navigator || {}).userAgent || "",
                            G = (y = $.indexOf("Android"), w = W("a"), p = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === y || parseFloat($.substr(y + 8, 2)) > 3), m = p && parseFloat($.substr($.indexOf("Version/") + 8, 2)) < 6, d = -1 !== $.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (_ = parseFloat(RegExp.$1)), !!w && (w.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(w.style.opacity))),
                            Q = function (t) {
                                return C.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            K = function (t) {
                                i.console && console.log(t)
                            },
                            Z = "",
                            J = "",
                            tt = function (t, e) {
                                var i, n, r = (e = e || Y).style;
                                if (void 0 !== r[t]) return t;
                                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                                return n >= 0 ? (Z = "-" + (J = 3 === n ? "ms" : i[n]).toLowerCase() + "-", J + t) : null
                            },
                            et = X.defaultView ? X.defaultView.getComputedStyle : function () {},
                            it = a.getStyle = function (t, e, i, n, r) {
                                var s;
                                return G || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || et(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(R, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Q(t)
                            },
                            nt = V.convertToPixels = function (t, i, n, r, s) {
                                if ("px" === r || !r && "lineHeight" !== i) return n;
                                if ("auto" === r || !n) return 0;
                                var o, l, h, u = L.test(i),
                                    c = t,
                                    f = Y.style,
                                    p = n < 0,
                                    d = 1 === n;
                                if (p && (n = -n), d && (n *= 100), "lineHeight" !== i || r)
                                    if ("%" === r && -1 !== i.indexOf("border")) o = n / 100 * (u ? t.clientWidth : t.clientHeight);
                                    else {
                                        if (f.cssText = "border:0 solid red;position:" + it(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                        else {
                                            if (c = t.parentNode || X.body, -1 !== it(c, "display").indexOf("flex") && (f.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                            f[u ? "width" : "height"] = n + r
                                        }
                                        c.appendChild(Y), o = parseFloat(Y[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(Y), u && "%" === r && !1 !== a.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = h, l.width = o / n * 100), 0 !== o || s || (o = nt(t, i, n, r, !0))
                                    }
                                else l = et(t).lineHeight, t.style.lineHeight = n, o = parseFloat(et(t).lineHeight), t.style.lineHeight = l;
                                return d && (o /= 100), p ? -o : o
                            },
                            rt = V.calculateOffset = function (t, e, i) {
                                if ("absolute" !== it(t, "position", i)) return 0;
                                var n = "left" === e ? "Left" : "Top",
                                    r = it(t, "margin" + n, i);
                                return t["offset" + n] - (nt(t, e, parseFloat(r), r.replace(k, "")) || 0)
                            },
                            st = function (t, e) {
                                var i, n, r, s = {};
                                if (e = e || et(t, null))
                                    if (i = e.length)
                                        for (; --i > -1;) - 1 !== (r = e[i]).indexOf("-transform") && jt !== r || (s[r.replace(D, M)] = e.getPropertyValue(r));
                                    else
                                        for (i in e) - 1 !== i.indexOf("Transform") && Nt !== i || (s[i] = e[i]);
                                else if (e = t.currentStyle || t.style)
                                    for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(D, M)] = e[i]);
                                return G || (s.opacity = Q(t)), n = Gt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ft && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                            },
                            ot = function (t, e, i, n, r) {
                                var s, o, a, l = {},
                                    h = t.style;
                                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(P, "") ? s : 0 : rt(t, o), void 0 !== h[o] && (a = new xt(h, o, h[o], a))));
                                if (n)
                                    for (o in n) "className" !== o && (l[o] = n[o]);
                                return {
                                    difs: l,
                                    firstMPT: a
                                }
                            },
                            at = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            ht = function (t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || et(t))[e] || 0;
                                if (t.getCTM && Ut(t)) return t.getBBox()[e] || 0;
                                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                    r = at[e],
                                    s = r.length;
                                for (i = i || et(t, null); --s > -1;) n -= parseFloat(it(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(it(t, "border" + r[s] + "Width", i, !0)) || 0;
                                return n
                            },
                            ut = function (t, e) {
                                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                null != t && "" !== t || (t = "0 0");
                                var i, n = t.split(" "),
                                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                                    s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                                if (n.length > 3 && !e) {
                                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ut(n[i]));
                                    return t.join(",")
                                }
                                return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(P, "")), e.oy = parseFloat(s.replace(P, "")), e.v = t), e || t
                            },
                            ct = function (t, e) {
                                return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                            },
                            ft = function (t, e) {
                                return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                            },
                            pt = function (t, e, i, n) {
                                var r, s, o, a, l;
                                return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = o < 0 ? o + r : o - r), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a
                            },
                            dt = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            mt = function (t, e, i) {
                                return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                            },
                            _t = a.parseColor = function (t, e) {
                                var i, n, r, s, o, a, l, h, u, c, f;
                                if (t)
                                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else {
                                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                                        else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                        else if ("hsl" === t.substr(0, 3))
                                            if (i = f = t.match(x), e) {
                                                if (-1 !== t.indexOf("=")) return t.match(T)
                                            } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = mt(o + 1 / 3, n, r), i[1] = mt(o, n, r), i[2] = mt(o - 1 / 3, n, r);
                                        else i = t.match(x) || dt.transparent;
                                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                    }
                                else i = dt.black;
                                return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((h = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2, h === u ? o = a = 0 : (c = h - u, a = l > .5 ? c / (2 - h - u) : c / (h + u), o = h === n ? (r - s) / c + (r < s ? 6 : 0) : h === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                            },
                            gt = function (t, e) {
                                var i, n, r, s = t.match(vt) || [],
                                    o = 0,
                                    a = "";
                                if (!s.length) return t;
                                for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = _t(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                                return a + t.substr(o)
                            },
                            vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (u in dt) vt += "|" + u + "\\b";
                        vt = new RegExp(vt + ")", "gi"), a.colorStringFilter = function (t) {
                            var e, i = t[0] + " " + t[1];
                            vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), vt.lastIndex = 0
                        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                        var yt = function (t, e, i, n) {
                                if (null == t) return function (t) {
                                    return t
                                };
                                var r, s = e ? (t.match(vt) || [""])[0] : "",
                                    o = t.split(s).join("").match(b) || [],
                                    a = t.substr(0, t.indexOf(o[0])),
                                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                    h = -1 !== t.indexOf(" ") ? " " : ",",
                                    u = o.length,
                                    c = u > 0 ? o[0].replace(x, "") : "";
                                return u ? r = e ? function (t) {
                                    var e, f, p, d;
                                    if ("number" == typeof t) t += c;
                                    else if (n && I.test(t)) {
                                        for (d = t.replace(I, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                        return d.join(",")
                                    }
                                    if (e = (t.match(vt) || [s])[0], p = (f = t.split(e).join("").match(b) || []).length, u > p--)
                                        for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : o[p];
                                    return a + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                                } : function (t) {
                                    var e, s, f;
                                    if ("number" == typeof t) t += c;
                                    else if (n && I.test(t)) {
                                        for (s = t.replace(I, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                        return s.join(",")
                                    }
                                    if (f = (e = t.match(b) || []).length, u > f--)
                                        for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                                    return a + e.join(h) + l
                                } : function (t) {
                                    return t
                                }
                            },
                            wt = function (t) {
                                return t = t.split(","),
                                    function (e, i, n, r, s, o, a) {
                                        var l, h = (i + "").split(" ");
                                        for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                        return r.parse(e, a, s, o)
                                    }
                            },
                            xt = (V._setPluginRatio = function (t) {
                                this.plugin.setRatio(t);
                                for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                    for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                        if ((i = l.t).type) {
                                            if (1 === i.type) {
                                                for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                                i[s] = r
                                            }
                                        } else i[s] = i.s + i.xs0;
                                        l = l._next
                                    }
                            }, function (t, e, i, n, r) {
                                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                            }),
                            Tt = (V._parseToProxy = function (t, e, i, n, r, s) {
                                var o, a, l, h, u, c = n,
                                    f = {},
                                    p = {},
                                    d = i._transform,
                                    m = B;
                                for (i._transform = null, B = e, n = u = i.parse(t, e, n, r), B = m, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                                    if (n.type <= 1 && (p[a = n.p] = n.s + n.c, f[a] = n.s, s || (h = new xt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                        for (o = n.l; --o > 0;) l = "xn" + o, p[a = n.p + "_" + l] = n.data[l], f[a] = n[l], s || (h = new xt(n, l, a, h, n.rxp[l]));
                                    n = n._next
                                }
                                return {
                                    proxy: f,
                                    end: p,
                                    firstMPT: h,
                                    pt: u
                                }
                            }, V.CSSPropTween = function (t, e, i, r, s, a, l, h, u, c, f) {
                                this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof Tt || o.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, n = !0), this.b = void 0 === c ? i : c, this.e = void 0 === f ? i + r : f, s && (this._next = s, s._prev = this)
                            }),
                            bt = function (t, e, i, n, r, s) {
                                var o = new Tt(t, e, i, n - i, r, -1, s);
                                return o.b = i, o.e = o.xs0 = n, o
                            },
                            Pt = a.parseComplex = function (t, e, i, n, r, s, o, l, h, u) {
                                i = i || s || "", "function" == typeof n && (n = n(v, g)), o = new Tt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, n), n += "", r && vt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                                var f, p, d, m, _, y, w, b, P, k, C, S, A, O = i.split(", ").join(",").split(" "),
                                    R = n.split(", ").join(",").split(" "),
                                    D = O.length,
                                    E = !1 !== c;
                                for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (O = O.join(" ").replace(I, ", ").split(" "), R = R.join(" ").replace(I, ", ").split(" ")) : (O = O.join(" ").split(",").join(", ").split(" "), R = R.join(" ").split(",").join(", ").split(" ")), D = O.length), D !== R.length && (D = (O = (s || "").split(" ")).length), o.plugin = h, o.setRatio = u, vt.lastIndex = 0, f = 0; f < D; f++)
                                    if (m = O[f], _ = R[f], (b = parseFloat(m)) || 0 === b) o.appendXtra("", b, ct(_, b), _.replace(T, ""), E && -1 !== _.indexOf("px"), !0);
                                    else if (r && vt.test(m)) S = ")" + ((S = _.indexOf(")") + 1) ? _.substr(S) : ""), A = -1 !== _.indexOf("hsl") && G, k = _, m = _t(m, A), _ = _t(_, A), (P = m.length + _.length > 6) && !G && 0 === _[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(R[f]).join("transparent")) : (G || (P = !1), A ? o.appendXtra(k.substr(0, k.indexOf("hsl")) + (P ? "hsla(" : "hsl("), m[0], ct(_[0], m[0]), ",", !1, !0).appendXtra("", m[1], ct(_[1], m[1]), "%,", !1).appendXtra("", m[2], ct(_[2], m[2]), P ? "%," : "%" + S, !1) : o.appendXtra(k.substr(0, k.indexOf("rgb")) + (P ? "rgba(" : "rgb("), m[0], _[0] - m[0], ",", !0, !0).appendXtra("", m[1], _[1] - m[1], ",", !0).appendXtra("", m[2], _[2] - m[2], P ? "," : S, !0), P && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (_.length < 4 ? 1 : _[3]) - m, S, !1))), vt.lastIndex = 0;
                                else if (y = m.match(x)) {
                                    if (!(w = _.match(T)) || w.length !== y.length) return o;
                                    for (d = 0, p = 0; p < y.length; p++) C = y[p], k = m.indexOf(C, d), o.appendXtra(m.substr(d, k - d), Number(C), ct(w[p], C), "", E && "px" === m.substr(k + C.length, 2), 0 === p), d = k + C.length;
                                    o["xs" + o.l] += m.substr(d)
                                } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + _ : _;
                                if (-1 !== n.indexOf("=") && o.data) {
                                    for (S = o.xs0 + o.data.s, f = 1; f < o.l; f++) S += o["xs" + f] + o.data["xn" + f];
                                    o.e = S + o["xs" + f]
                                }
                                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                            },
                            kt = 9;
                        for ((u = Tt.prototype).l = u.pr = 0; --kt > 0;) u["xn" + kt] = 0, u["xs" + kt] = "";
                        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, r, s) {
                            var o = this,
                                a = o.l;
                            return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new Tt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                                s: e + i
                            }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                        };
                        var Ct = function (t, e) {
                                e = e || {}, this.p = e.prefix && tt(t) || t, h[t] = h[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                            },
                            St = V._registerComplexSpecialProp = function (t, e, i) {
                                "object" != typeof e && (e = {
                                    parser: i
                                });
                                var n, r = t.split(","),
                                    s = e.defaultValue;
                                for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Ct(r[n], e)
                            },
                            At = V._registerPluginProp = function (t) {
                                if (!h[t]) {
                                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                    St(t, {
                                        parser: function (t, i, n, r, s, o, a) {
                                            var u = l.com.greensock.plugins[e];
                                            return u ? (u._cssRegister(), h[n].parse(t, i, n, r, s, o, a)) : (K("Error: " + e + " js file not loaded."), s)
                                        }
                                    })
                                }
                            };
                        (u = Ct.prototype).parseComplex = function (t, e, i, n, r, s) {
                            var o, a, l, h, u, c, f = this.keyword;
                            if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : f && (a = [e], l = [i])), l) {
                                for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (u = e.indexOf(f)) !== (c = i.indexOf(f)) && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === u && (a[o] += " " + f));
                                e = a.join(", "), i = l.join(", ")
                            }
                            return Pt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                        }, u.parse = function (t, e, i, n, r, o, a) {
                            return this.parseComplex(t.style, this.format(it(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                        }, a.registerSpecialProp = function (t, e, i) {
                            St(t, {
                                parser: function (t, n, r, s, o, a, l) {
                                    var h = new Tt(t, r, 0, 0, o, 2, r, !1, i);
                                    return h.plugin = a, h.setRatio = e(t, n, s._tween, r), h
                                },
                                priority: i
                            })
                        }, a.useSVGTransformAttr = !0;
                        var Ot, Rt, Dt, Et, Mt, Lt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            Nt = tt("transform"),
                            jt = Z + "transform",
                            It = tt("transformOrigin"),
                            Ft = null !== tt("perspective"),
                            qt = V.Transform = function () {
                                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Ft) && (a.defaultForce3D || "auto")
                            },
                            zt = i.SVGElement,
                            Bt = function (t, e, i) {
                                var n, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                                    s = /([a-z])([A-Z])/g;
                                for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                                return e.appendChild(r), r
                            },
                            Ht = X.documentElement || {},
                            Xt = (Mt = _ || /Android/i.test($) && !i.chrome, X.createElementNS && !Mt && (Rt = Bt("svg", Ht), Et = (Dt = Bt("rect", Rt, {
                                width: 100,
                                height: 50,
                                x: 100
                            })).getBoundingClientRect().width, Dt.style[It] = "50% 50%", Dt.style[Nt] = "scaleX(0.5)", Mt = Et === Dt.getBoundingClientRect().width && !(d && Ft), Ht.removeChild(Rt)), Mt),
                            Wt = function (t, e, i, n, r, s) {
                                var o, l, h, u, c, f, p, d, m, _, g, v, y, w, x = t._gsTransform,
                                    T = $t(t, !0);
                                x && (y = x.xOrigin, w = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0
                                }), o = [(-1 !== (e = ut(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), n && T !== Vt && (f = T[0], p = T[1], d = T[2], m = T[3], _ = T[4], g = T[5], (v = f * m - p * d) && (l = u * (m / v) + c * (-d / v) + (d * g - m * _) / v, h = u * (-p / v) + c * (f / v) - (f * g - p * _) / v, u = i.xOrigin = o[0] = l, c = i.yOrigin = o[1] = h)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = u - y, h = c - w, x.xOffset += l * T[0] + h * T[2] - l, x.yOffset += l * T[1] + h * T[3] - h) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                            },
                            Yt = function (t) {
                                var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                    n = this.parentNode,
                                    r = this.nextSibling,
                                    s = this.style.cssText;
                                if (Ht.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Yt
                                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                return r ? n.insertBefore(this, r) : n.appendChild(this), Ht.removeChild(i), this.style.cssText = s, e
                            },
                            Ut = function (t) {
                                return !(!zt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function (t) {
                                    try {
                                        return t.getBBox()
                                    } catch (e) {
                                        return Yt.call(t, !0)
                                    }
                                }(t))
                            },
                            Vt = [1, 0, 0, 1, 0, 0],
                            $t = function (t, e) {
                                var i, n, r, s, o, a, l = t._gsTransform || new qt,
                                    h = t.style;
                                if (Nt ? n = it(t, jt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(N)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Nt || !(a = !et(t) || "none" === et(t).display) && t.parentNode || (a && (s = h.display, h.display = "block"), t.parentNode || (o = 1, Ht.appendChild(t)), i = !(n = it(t, jt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? h.display = s : a && Jt(h, "display"), o && Ht.removeChild(t)), (l.svg || t.getCTM && Ut(t)) && (i && -1 !== (h[Nt] + "").indexOf("matrix") && (n = h[Nt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Vt;
                                for (r = (n || "").match(x) || [], kt = r.length; --kt > -1;) s = Number(r[kt]), r[kt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                            },
                            Gt = V.getTransform = function (t, i, n, r) {
                                if (t._gsTransform && n && !r) return t._gsTransform;
                                var s, o, l, h, u, c, f = n && t._gsTransform || new qt,
                                    p = f.scaleX < 0,
                                    d = Ft && (parseFloat(it(t, It, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                                    m = parseFloat(a.defaultTransformPerspective) || 0;
                                if (f.svg = !(!t.getCTM || !Ut(t)), f.svg && (Wt(t, it(t, It, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ot = a.useSVGTransformAttr || Xt), (s = $t(t)) !== Vt) {
                                    if (16 === s.length) {
                                        var _, g, v, y, w, x = s[0],
                                            T = s[1],
                                            b = s[2],
                                            P = s[3],
                                            k = s[4],
                                            C = s[5],
                                            S = s[6],
                                            A = s[7],
                                            O = s[8],
                                            R = s[9],
                                            D = s[10],
                                            E = s[12],
                                            M = s[13],
                                            L = s[14],
                                            N = s[11],
                                            j = Math.atan2(S, D);
                                        f.zOrigin && (E = O * (L = -f.zOrigin) - s[12], M = R * L - s[13], L = D * L + f.zOrigin - s[14]), f.rotationX = j * z, j && (_ = k * (y = Math.cos(-j)) + O * (w = Math.sin(-j)), g = C * y + R * w, v = S * y + D * w, O = k * -w + O * y, R = C * -w + R * y, D = S * -w + D * y, N = A * -w + N * y, k = _, C = g, S = v), j = Math.atan2(-b, D), f.rotationY = j * z, j && (g = T * (y = Math.cos(-j)) - R * (w = Math.sin(-j)), v = b * y - D * w, R = T * w + R * y, D = b * w + D * y, N = P * w + N * y, x = _ = x * y - O * w, T = g, b = v), j = Math.atan2(T, x), f.rotation = j * z, j && (_ = x * (y = Math.cos(j)) + T * (w = Math.sin(j)), g = k * y + C * w, v = O * y + R * w, T = T * y - x * w, C = C * y - k * w, R = R * y - O * w, x = _, k = g, O = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), j = Math.atan2(k, C), f.scaleX = (1e5 * Math.sqrt(x * x + T * T + b * b) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(C * C + S * S) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(O * O + R * R + D * D) + .5 | 0) / 1e5, x /= f.scaleX, k /= f.scaleY, T /= f.scaleX, C /= f.scaleY, Math.abs(j) > 2e-5 ? (f.skewX = j * z, k = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(j))) : f.skewX = 0, f.perspective = N ? 1 / (N < 0 ? -N : N) : 0, f.x = E, f.y = M, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * C))
                                    } else if (!Ft || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                        var I = s.length >= 6,
                                            F = I ? s[0] : 1,
                                            q = s[1] || 0,
                                            B = s[2] || 0,
                                            H = I ? s[3] : 1;
                                        f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(F * F + q * q), h = Math.sqrt(H * H + B * B), u = F || q ? Math.atan2(q, F) * z : f.rotation || 0, c = B || H ? Math.atan2(B, H) * z + u : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = u, f.skewX = c, Ft && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * F + f.yOrigin * B), f.y -= f.yOrigin - (f.xOrigin * q + f.yOrigin * H))
                                    }
                                    Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = d;
                                    for (o in f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                                }
                                return n && (t._gsTransform = f, f.svg && (Ot && t.style[Nt] ? e.delayedCall(.001, function () {
                                    Jt(t.style, Nt)
                                }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function () {
                                    t.removeAttribute("transform")
                                }))), f
                            },
                            Qt = function (t) {
                                var e, i, n = this.data,
                                    r = -n.rotation * q,
                                    s = r + n.skewX * q,
                                    o = 1e5,
                                    a = (Math.cos(r) * n.scaleX * o | 0) / o,
                                    l = (Math.sin(r) * n.scaleX * o | 0) / o,
                                    h = (Math.sin(s) * -n.scaleY * o | 0) / o,
                                    u = (Math.cos(s) * n.scaleY * o | 0) / o,
                                    c = this.t.style,
                                    f = this.t.currentStyle;
                                if (f) {
                                    i = l, l = -h, h = -i, e = f.filter, c.filter = "";
                                    var p, d, m = this.t.offsetWidth,
                                        g = this.t.offsetHeight,
                                        v = "absolute" !== f.position,
                                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                        w = n.x + m * n.xPercent / 100,
                                        x = n.y + g * n.yPercent / 100;
                                    if (null != n.ox && (w += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * a + (d = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * l), x += d - (p * h + d * u)), y += v ? ", Dx=" + ((p = m / 2) - (p * a + (d = g / 2) * l) + w) + ", Dy=" + (d - (p * h + d * u) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(j, y) : c.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || C.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                        var T, b, P, S = _ < 8 ? 1 : -1;
                                        for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + w), n.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (h < 0 ? -h : h) * m)) / 2 + x), kt = 0; kt < 4; kt++) P = (i = -1 !== (T = f[b = lt[kt]]).indexOf("px") ? parseFloat(T) : nt(this.t, b, parseFloat(T), T.replace(k, "")) || 0) !== n[b] ? kt < 2 ? -n.ieOffsetX : -n.ieOffsetY : kt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, c[b] = (n[b] = Math.round(i - P * (0 === kt || 2 === kt ? 1 : S))) + "px"
                                    }
                                }
                            },
                            Kt = V.set3DTransformRatio = V.setTransformRatio = function (t) {
                                var e, i, n, r, s, o, a, l, h, u, c, f, p, m, _, g, v, y, w, x, T, b, P, k = this.data,
                                    C = this.t.style,
                                    S = k.rotation,
                                    A = k.rotationX,
                                    O = k.rotationY,
                                    R = k.scaleX,
                                    D = k.scaleY,
                                    E = k.scaleZ,
                                    M = k.x,
                                    L = k.y,
                                    N = k.z,
                                    j = k.svg,
                                    I = k.perspective,
                                    F = k.force3D,
                                    z = k.skewY,
                                    B = k.skewX;
                                if (z && (B += z, S += z), !((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || N || I || O || A || 1 !== E) || Ot && j || !Ft) S || B || j ? (S *= q, b = B * q, P = 1e5, i = Math.cos(S) * R, s = Math.sin(S) * R, n = Math.sin(S - b) * -D, o = Math.cos(S - b) * D, b && "simple" === k.skewType && (e = Math.tan(b - z * q), n *= e = Math.sqrt(1 + e * e), o *= e, z && (e = Math.tan(z * q), i *= e = Math.sqrt(1 + e * e), s *= e)), j && (M += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, L += k.yOrigin - (k.xOrigin * s + k.yOrigin * o) + k.yOffset, Ot && (k.xPercent || k.yPercent) && (_ = this.t.getBBox(), M += .01 * k.xPercent * _.width, L += .01 * k.yPercent * _.height), M < (_ = 1e-6) && M > -_ && (M = 0), L < _ && L > -_ && (L = 0)), w = (i * P | 0) / P + "," + (s * P | 0) / P + "," + (n * P | 0) / P + "," + (o * P | 0) / P + "," + M + "," + L + ")", j && Ot ? this.t.setAttribute("transform", "matrix(" + w) : C[Nt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : C[Nt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + D + "," + M + "," + L + ")";
                                else {
                                    if (d && (R < (_ = 1e-4) && R > -_ && (R = E = 2e-5), D < _ && D > -_ && (D = E = 2e-5), !I || k.z || k.rotationX || k.rotationY || (I = 0)), S || B) S *= q, g = i = Math.cos(S), v = s = Math.sin(S), B && (S -= B * q, g = Math.cos(S), v = Math.sin(S), "simple" === k.skewType && (e = Math.tan((B - z) * q), g *= e = Math.sqrt(1 + e * e), v *= e, k.skewY && (e = Math.tan(z * q), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -v, o = g;
                                    else {
                                        if (!(O || A || 1 !== E || I || j)) return void(C[Nt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + L + "px," + N + "px)" + (1 !== R || 1 !== D ? " scale(" + R + "," + D + ")" : ""));
                                        i = o = 1, n = s = 0
                                    }
                                    u = 1, r = a = l = h = c = f = 0, p = I ? -1 / I : 0, m = k.zOrigin, _ = 1e-6, x = ",", T = "0", (S = O * q) && (g = Math.cos(S), l = -(v = Math.sin(S)), c = p * -v, r = i * v, a = s * v, u = g, p *= g, i *= g, s *= g), (S = A * q) && (e = n * (g = Math.cos(S)) + r * (v = Math.sin(S)), y = o * g + a * v, h = u * v, f = p * v, r = n * -v + r * g, a = o * -v + a * g, u *= g, p *= g, n = e, o = y), 1 !== E && (r *= E, a *= E, u *= E, p *= E), 1 !== D && (n *= D, o *= D, h *= D, f *= D), 1 !== R && (i *= R, s *= R, l *= R, c *= R), (m || j) && (m && (M += r * -m, L += a * -m, N += u * -m + m), j && (M += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, L += k.yOrigin - (k.xOrigin * s + k.yOrigin * o) + k.yOffset), M < _ && M > -_ && (M = T), L < _ && L > -_ && (L = T), N < _ && N > -_ && (N = 0)), w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", w += (i < _ && i > -_ ? T : i) + x + (s < _ && s > -_ ? T : s) + x + (l < _ && l > -_ ? T : l), w += x + (c < _ && c > -_ ? T : c) + x + (n < _ && n > -_ ? T : n) + x + (o < _ && o > -_ ? T : o), A || O || 1 !== E ? (w += x + (h < _ && h > -_ ? T : h) + x + (f < _ && f > -_ ? T : f) + x + (r < _ && r > -_ ? T : r), w += x + (a < _ && a > -_ ? T : a) + x + (u < _ && u > -_ ? T : u) + x + (p < _ && p > -_ ? T : p) + x) : w += ",0,0,0,0,1,0,", w += M + x + L + x + N + x + (I ? 1 + -N / I : 1) + ")", C[Nt] = w
                                }
                            };
                        (u = qt.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function (t, e, i, n, r, o, l) {
                                if (n._lastParsedTransform === l) return r;
                                n._lastParsedTransform = l;
                                var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(v, t));
                                var c, f, p, d, m, _, y, w, x, T = t._gsTransform,
                                    b = t.style,
                                    P = Lt.length,
                                    k = l,
                                    C = {},
                                    S = "transformOrigin",
                                    A = Gt(t, s, !0, k.parseTransform),
                                    O = k.transform && ("function" == typeof k.transform ? k.transform(v, g) : k.transform);
                                if (A.skewType = k.skewType || A.skewType || a.defaultSkewType, n._transform = A, O && "string" == typeof O && Nt)(f = Y.style)[Nt] = O, f.display = "block", f.position = "absolute", X.body.appendChild(Y), c = Gt(Y, null, !1), "simple" === A.skewType && (c.scaleY *= Math.cos(c.skewX * q)), A.svg && (_ = A.xOrigin, y = A.yOrigin, c.x -= A.xOffset, c.y -= A.yOffset, (k.transformOrigin || k.svgOrigin) && (O = {}, Wt(t, ut(k.transformOrigin), O, k.svgOrigin, k.smoothOrigin, !0), _ = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset - A.xOffset, c.y -= O.yOffset - A.yOffset), (_ || y) && (w = $t(Y, !0), c.x -= _ - (_ * w[0] + y * w[2]), c.y -= y - (_ * w[1] + y * w[3]))), X.body.removeChild(Y), c.perspective || (c.perspective = A.perspective), null != k.xPercent && (c.xPercent = ft(k.xPercent, A.xPercent)), null != k.yPercent && (c.yPercent = ft(k.yPercent, A.yPercent));
                                else if ("object" == typeof k) {
                                    if (c = {
                                            scaleX: ft(null != k.scaleX ? k.scaleX : k.scale, A.scaleX),
                                            scaleY: ft(null != k.scaleY ? k.scaleY : k.scale, A.scaleY),
                                            scaleZ: ft(k.scaleZ, A.scaleZ),
                                            x: ft(k.x, A.x),
                                            y: ft(k.y, A.y),
                                            z: ft(k.z, A.z),
                                            xPercent: ft(k.xPercent, A.xPercent),
                                            yPercent: ft(k.yPercent, A.yPercent),
                                            perspective: ft(k.transformPerspective, A.perspective)
                                        }, null != (m = k.directionalRotation))
                                        if ("object" == typeof m)
                                            for (f in m) k[f] = m[f];
                                        else k.rotation = m;
                                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && (c.x = 0, c.xPercent = ft(k.x, A.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (c.y = 0, c.yPercent = ft(k.y, A.yPercent)), c.rotation = pt("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : A.rotation, A.rotation, "rotation", C), Ft && (c.rotationX = pt("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", C), c.rotationY = pt("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", C)), c.skewX = pt(k.skewX, A.skewX), c.skewY = pt(k.skewY, A.skewY)
                                }
                                for (Ft && null != k.force3D && (A.force3D = k.force3D, d = !0), (p = A.force3D || A.z || A.rotationX || A.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == k.scale || (c.scaleZ = 1); --P > -1;)((O = c[x = Lt[P]] - A[x]) > 1e-6 || O < -1e-6 || null != k[x] || null != B[x]) && (d = !0, r = new Tt(A, x, A[x], O, r), x in C && (r.e = C[x]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                                return O = k.transformOrigin, A.svg && (O || k.svgOrigin) && (_ = A.xOffset, y = A.yOffset, Wt(t, ut(O), c, k.svgOrigin, k.smoothOrigin), r = bt(A, "xOrigin", (T ? A : c).xOrigin, c.xOrigin, r, S), r = bt(A, "yOrigin", (T ? A : c).yOrigin, c.yOrigin, r, S), _ === A.xOffset && y === A.yOffset || (r = bt(A, "xOffset", T ? _ : A.xOffset, A.xOffset, r, S), r = bt(A, "yOffset", T ? y : A.yOffset, A.yOffset, r, S)), O = "0px 0px"), (O || Ft && p && A.zOrigin) && (Nt ? (d = !0, x = It, O = (O || it(t, x, s, !1, "50% 50%")) + "", (r = new Tt(b, x, 0, 0, r, -1, S)).b = b[x], r.plugin = o, Ft ? (f = A.zOrigin, O = O.split(" "), A.zOrigin = (O.length > 2 && (0 === f || "0px" !== O[2]) ? parseFloat(O[2]) : f) || 0, r.xs0 = r.e = O[0] + " " + (O[1] || "50%") + " 0px", (r = new Tt(A, "zOrigin", 0, 0, r, -1, r.n)).b = f, r.xs0 = r.e = A.zOrigin) : r.xs0 = r.e = O) : ut(O + "", A)), d && (n._transformType = A.svg && Ot || !p && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), r
                            },
                            prefix: !0
                        }), St("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), St("borderRadius", {
                            defaultValue: "0px",
                            parser: function (t, e, i, n, o, a) {
                                e = this.format(e);
                                var l, h, u, c, f, p, d, m, _, g, v, y, w, x, T, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    k = t.style;
                                for (_ = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = tt(P[h])), -1 !== (f = c = it(t, P[h], s, !1, "0px")).indexOf(" ") && (f = (c = f.split(" "))[0], c = c[1]), p = u = l[h], d = parseFloat(f), y = f.substr((d + "").length), (w = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = r[i] || y), v !== y && (x = nt(t, "borderLeft", d, y), T = nt(t, "borderTop", d, y), "%" === v ? (f = x / _ * 100 + "%", c = T / g * 100 + "%") : "em" === v ? (f = x / (b = nt(t, "borderLeft", 1, "em")) + "em", c = T / b + "em") : (f = x + "px", c = T + "px"), w && (p = parseFloat(f) + m + v, u = parseFloat(c) + m + v)), o = Pt(k, P[h], f + " " + c, p + " " + u, !1, "0px", o);
                                return o
                            },
                            prefix: !0,
                            formatter: yt("0px 0px 0px 0px", !1, !0)
                        }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function (t, e, i, n, r, o) {
                                return Pt(t.style, i, this.format(it(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                            },
                            prefix: !0,
                            formatter: yt("0px 0px", !1, !0)
                        }), St("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function (t, e, i, n, r, o) {
                                var a, l, h, u, c, f, p = "background-position",
                                    d = s || et(t, null),
                                    m = this.format((d ? _ ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                    g = this.format(e);
                                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = it(t, "backgroundImage").replace(E, "")) && "none" !== f) {
                                    for (a = m.split(" "), l = g.split(" "), U.setAttribute("src", f), h = 2; --h > -1;)(u = -1 !== (m = a[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - U.width : t.offsetHeight - U.height, a[h] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                                    m = a.join(" ")
                                }
                                return this.parseComplex(t.style, m, g, r, o)
                            },
                            formatter: ut
                        }), St("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function (t) {
                                return ut(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                            }
                        }), St("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), St("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), St("transformStyle", {
                            prefix: !0
                        }), St("backfaceVisibility", {
                            prefix: !0
                        }), St("userSelect", {
                            prefix: !0
                        }), St("margin", {
                            parser: wt("marginTop,marginRight,marginBottom,marginLeft")
                        }), St("padding", {
                            parser: wt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), St("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function (t, e, i, n, r, o) {
                                var a, l, h;
                                return _ < 9 ? (l = t.currentStyle, h = _ < 8 ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(it(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                            }
                        }), St("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), St("autoRound,strictUnits", {
                            parser: function (t, e, i, n, r) {
                                return r
                            }
                        }), St("border", {
                            defaultValue: "0px solid #000",
                            parser: function (t, e, i, n, r, o) {
                                var a = it(t, "borderTopWidth", s, !1, "0px"),
                                    l = this.format(e).split(" "),
                                    h = l[0].replace(k, "");
                                return "px" !== h && (a = parseFloat(a) / nt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + it(t, "borderTopStyle", s, !1, "solid") + " " + it(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                            },
                            color: !0,
                            formatter: function (t) {
                                var e = t.split(" ");
                                return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                            }
                        }), St("borderWidth", {
                            parser: wt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), St("float,cssFloat,styleFloat", {
                            parser: function (t, e, i, n, r, s) {
                                var o = t.style,
                                    a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                                return new Tt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                            }
                        });
                        var Zt = function (t) {
                            var e, i = this.t,
                                n = i.filter || it(this.data, "filter") || "",
                                r = this.s + this.c * t | 0;
                            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !it(this.data, "filter")) : (i.filter = n.replace(A, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(C, "opacity=" + r))
                        };
                        St("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function (t, e, i, n, r, o) {
                                var a = parseFloat(it(t, "opacity", s, !1, "1")),
                                    l = t.style,
                                    h = "autoAlpha" === i;
                                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === it(t, "visibility", s) && 0 !== e && (a = 0), G ? r = new Tt(l, "opacity", a, e - a, r) : ((r = new Tt(l, "opacity", 100 * a, 100 * (e - a), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Zt), h && ((r = new Tt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                            }
                        });
                        var Jt = function (t, e) {
                                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(R, "-$1").toLowerCase())) : t.removeAttribute(e))
                            },
                            te = function (t) {
                                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Jt(i, e.p), e = e._next;
                                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                            };
                        St("className", {
                            parser: function (t, e, i, r, o, a, l) {
                                var h, u, c, f, p, d = t.getAttribute("class") || "",
                                    m = t.style.cssText;
                                if ((o = r._classNamePT = new Tt(t, i, 0, 0, o, 2)).setRatio = te, o.pr = -11, n = !0, o.b = d, u = st(t, s), c = t._gsClassPT) {
                                    for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                                    c.setRatio(1)
                                }
                                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = ot(t, u, st(t), l, f), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = r.parse(t, h.difs, o, a)
                            }
                        });
                        var ee = function (t) {
                            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var e, i, n, r, s, o = this.t.style,
                                    a = h.transform.parse;
                                if ("all" === this.e) o.cssText = "", r = !0;
                                else
                                    for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? It : h[i].p), Jt(o, i);
                                r && (Jt(o, Nt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (St("clearProps", {
                                parser: function (t, e, i, r, s) {
                                    return (s = new Tt(t, i, 0, 0, s, 2)).setRatio = ee, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s
                                }
                            }), u = "bezier,throwProps,physicsProps,physics2D".split(","), kt = u.length; kt--;) At(u[kt]);
                        (u = a.prototype)._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, i, l) {
                            if (!t.nodeType) return !1;
                            this._target = g = t, this._tween = i, this._vars = e, v = l, c = e.autoRound, n = !1, r = e.suffixMap || a.suffixMap, s = et(t, ""), o = this._overwriteProps;
                            var u, d, _, y, w, x, T, b, P, k = t.style;
                            if (f && "" === k.zIndex && ("auto" !== (u = it(t, "zIndex", s)) && "" !== u || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (y = k.cssText, u = st(t, s), k.cssText = y + ";" + e, u = ot(t, u, st(t)).difs, !G && S.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, k.cssText = y), e.className ? this._firstPT = d = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                                for (P = 3 === this._transformType, Nt ? p && (f = !0, "" === k.zIndex && ("auto" !== (T = it(t, "zIndex", s)) && "" !== T || this._addLazySet(k, "zIndex", 0)), m && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : k.zoom = 1, _ = d; _ && _._next;) _ = _._next;
                                b = new Tt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, _), b.setRatio = Nt ? Kt : Qt, b.data = this._transform || Gt(t, s, !0), b.tween = i, b.pr = -1, o.pop()
                            }
                            if (n) {
                                for (; d;) {
                                    for (x = d._next, _ = y; _ && _.pr > d.pr;) _ = _._next;
                                    (d._prev = _ ? _._prev : w) ? d._prev._next = d: y = d, (d._next = _) ? _._prev = d : w = d, d = x
                                }
                                this._firstPT = y
                            }
                            return !0
                        }, u.parse = function (t, e, i, n) {
                            var o, a, l, u, f, p, d, m, _, y, w = t.style;
                            for (o in e) {
                                if ("function" == typeof (p = e[o]) && (p = p(v, g)), a = h[o]) i = a.parse(t, p, o, this, i, n, e);
                                else {
                                    if ("--" === o.substr(0, 2)) {
                                        this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", et(t).getPropertyValue(o) + "", p + "", o, !1, o);
                                        continue
                                    }
                                    f = it(t, o, s) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && O.test(p) ? (_ || (p = ((p = _t(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = Pt(w, o, f, p, !0, "transparent", i, 0, n)) : _ && F.test(p) ? i = Pt(w, o, f, p, !0, null, i, 0, n) : (d = (l = parseFloat(f)) || 0 === l ? f.substr((l + "").length) : "", "" !== f && "auto" !== f || ("width" === o || "height" === o ? (l = ht(t, o, s), d = "px") : "left" === o || "top" === o ? (l = rt(t, o, s), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), (y = _ && "=" === p.charAt(1)) ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(k, "")) : (u = parseFloat(p), m = _ ? p.replace(k, "") : ""), "" === m && (m = o in r ? r[o] : d), p = u || 0 === u ? (y ? u + l : u) + m : e[o], d !== m && ("" === m && "lineHeight" !== o || (u || 0 === u) && l && (l = nt(t, o, l, d), "%" === m ? (l /= nt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (f = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= nt(t, o, 1, m) : "px" !== m && (u = nt(t, o, u, m), m = "px"), y && (u || 0 === u) && (p = u + l + m))), y && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== w[o] && (p || p + "" != "NaN" && null != p) ? (i = new Tt(w, o, u || l || 0, 0, i, -1, o, !1, 0, f, p)).xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f : K("invalid " + o + " tween value: " + e[o]) : (i = new Tt(w, o, l, u - l, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, f, p)).xs0 = m)
                                }
                                n && i && !i.plugin && (i.plugin = n)
                            }
                            return i
                        }, u.setRatio = function (t) {
                            var e, i, n, r = this._firstPT;
                            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                    for (; r;) {
                                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                            if (1 === r.type)
                                                if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                        else r.t[r.p] = e + r.xs0;
                                        r = r._next
                                    } else
                                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                                else
                                    for (; r;) {
                                        if (2 !== r.type)
                                            if (r.r && -1 !== r.type)
                                                if (e = Math.round(r.s + r.c), r.type) {
                                                    if (1 === r.type) {
                                                        for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                        r.t[r.p] = i
                                                    }
                                                } else r.t[r.p] = e + r.xs0;
                                        else r.t[r.p] = r.e;
                                        else r.setRatio(t);
                                        r = r._next
                                    }
                        }, u._enableTransforms = function (t) {
                            this._transform = this._transform || Gt(this._target, s, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
                        };
                        var ie = function (t) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        u._addLazySet = function (t, e, i) {
                            var n = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
                            n.e = i, n.setRatio = ie, n.data = this
                        }, u._linkCSSP = function (t, e, i, n) {
                            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                        }, u._mod = function (t) {
                            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                        }, u._kill = function (e) {
                            var i, n, r, s = e;
                            if (e.autoAlpha || e.alpha) {
                                s = {};
                                for (n in e) s[n] = e[n];
                                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                            }
                            for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                            return t.prototype._kill.call(this, s)
                        };
                        var ne = function (t, e, i) {
                            var n, r, s, o;
                            if (t.slice)
                                for (r = t.length; --r > -1;) ne(t[r], e, i);
                            else
                                for (r = (n = t.childNodes).length; --r > -1;) o = (s = n[r]).type, s.style && (e.push(st(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ne(s, e, i)
                        };
                        return a.cascadeTo = function (t, i, n) {
                            var r, s, o, a, l = e.to(t, i, n),
                                h = [l],
                                u = [],
                                c = [],
                                f = [],
                                p = e._internals.reservedProps;
                            for (t = l._targets || l.target, ne(t, u, f), l.render(i, !0, !0), ne(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                                if ((s = ot(f[r], u[r], c[r])).firstMPT) {
                                    s = s.difs;
                                    for (o in n) p[o] && (s[o] = n[o]);
                                    a = {};
                                    for (o in s) a[o] = u[r][o];
                                    h.push(e.fromTo(f[r], i, a, s))
                                }
                            return h
                        }, t.activate([a]), a
                    }, !0), m = function (t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    }, (_ = i._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }).prototype)._onInitAllProps = function () {
                        for (var t, e, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = Math.round;
                        for (s = r.length; --s > -1;)
                            for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._mod(o) : e.n === t && (2 === e.f && e.t ? m(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a)), e = i;
                        return !1
                    }, _._add = function (t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                    }, i._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function (t, e, i, n) {
                            var r, s;
                            if ("function" != typeof t.setAttribute) return !1;
                            for (r in e) "function" == typeof (s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                            return !0
                        }
                    }), i._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.1",
                        API: 2,
                        init: function (t, e, i, n) {
                            "object" != typeof e && (e = {
                                rotation: e
                            }), this.finals = {};
                            var r, s, o, a, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                            for (r in e) "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)), s = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, h.length && (-1 !== (s = h.join("_")).indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                            return !0
                        },
                        set: function (t) {
                            var e;
                            if (1 !== t) this._super.setRatio.call(this, t);
                            else
                                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                        }
                    })._autoCSS = !0, i._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                        var e, n, r, s = i.GreenSockGlobals || i,
                            o = s.com.greensock,
                            a = 2 * Math.PI,
                            l = Math.PI / 2,
                            h = o._class,
                            u = function (e, i) {
                                var n = h("easing." + e, function () {}, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, n
                            },
                            c = t.register || function () {},
                            f = function (t, e, i, n, r) {
                                var s = h("easing." + t, {
                                    easeOut: new e,
                                    easeIn: new i,
                                    easeInOut: new n
                                }, !0);
                                return c(s, t), s
                            },
                            p = function (t, e, i) {
                                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                            },
                            d = function (e, i) {
                                var n = h("easing." + e, function (t) {
                                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, r.config = function (t) {
                                    return new n(t)
                                }, n
                            },
                            m = f("Back", d("BackOut", function (t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                            }), d("BackIn", function (t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                            }), d("BackInOut", function (t) {
                                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                            })),
                            _ = h("easing.SlowMo", function (t, e, i) {
                                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                            }, !0),
                            g = _.prototype = new t;
                        return g.constructor = _, g.getRatio = function (t) {
                            var e = t + (.5 - t) * this._p;
                            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                        }, _.ease = new _(.7, .7), g.config = _.config = function (t, e, i) {
                            return new _(t, e, i)
                        }, (g = (e = h("easing.SteppedEase", function (t, e) {
                            t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                        }, !0)).prototype = new t).constructor = e, g.getRatio = function (t) {
                            return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                        }, g.config = e.config = function (t, i) {
                            return new e(t, i)
                        }, (g = (n = h("easing.RoughEase", function (e) {
                            for (var i, n, r, s, o, a, l = (e = e || {}).taper || "none", h = [], u = 0, c = 0 | (e.points || 20), f = c, d = !1 !== e.randomize, m = !0 === e.clamp, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / c * f, n = _ ? _.getRatio(i) : i, r = "none" === l ? g : "out" === l ? (s = 1 - i) * s * g : "in" === l ? i * i * g : i < .5 ? (s = 2 * i) * s * .5 * g : (s = 2 * (1 - i)) * s * .5 * g, d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[u++] = {
                                x: i,
                                y: n
                            };
                            for (h.sort(function (t, e) {
                                    return t.x - e.x
                                }), a = new p(1, 1, null), f = c; --f > -1;) o = h[f], a = new p(o.x, o.y, a);
                            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                        }, !0)).prototype = new t).constructor = n, g.getRatio = function (t) {
                            var e = this._prev;
                            if (t > e.t) {
                                for (; e.next && t >= e.t;) e = e.next;
                                e = e.prev
                            } else
                                for (; e.prev && t <= e.t;) e = e.prev;
                            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                        }, g.config = function (t) {
                            return new n(t)
                        }, n.ease = new n, f("Bounce", u("BounceOut", function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }), u("BounceIn", function (t) {
                            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                        }), u("BounceInOut", function (t) {
                            var e = t < .5;
                            return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                        })), f("Circ", u("CircOut", function (t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        }), u("CircIn", function (t) {
                            return -(Math.sqrt(1 - t * t) - 1)
                        }), u("CircInOut", function (t) {
                            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        })), f("Elastic", (r = function (e, i, n) {
                            var r = h("easing." + e, function (t, e) {
                                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                                }, !0),
                                s = r.prototype = new t;
                            return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                                return new r(t, e)
                            }, r
                        })("ElasticOut", function (t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                        }, .3), r("ElasticIn", function (t) {
                            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                        }, .3), r("ElasticInOut", function (t) {
                            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                        }, .45)), f("Expo", u("ExpoOut", function (t) {
                            return 1 - Math.pow(2, -10 * t)
                        }), u("ExpoIn", function (t) {
                            return Math.pow(2, 10 * (t - 1)) - .001
                        }), u("ExpoInOut", function (t) {
                            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                        })), f("Sine", u("SineOut", function (t) {
                            return Math.sin(t * l)
                        }), u("SineIn", function (t) {
                            return 1 - Math.cos(t * l)
                        }), u("SineInOut", function (t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        })), h("easing.EaseLookup", {
                            find: function (e) {
                                return t.map[e]
                            }
                        }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), m
                    }, !0)
                }), i._gsDefine && i._gsQueue.pop()(),
                function (t, i) {
                    "use strict";
                    var n = {},
                        r = t.document,
                        s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (!s.TweenLite) {
                        var o, a, l, h, u, c, f, p = function (t) {
                                var e, i = t.split("."),
                                    n = s;
                                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                                return n
                            },
                            d = p("com.greensock"),
                            m = 1e-10,
                            _ = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                            },
                            g = function () {},
                            v = (c = Object.prototype.toString, f = c.call([]), function (t) {
                                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && c.call(t) === f)
                            }),
                            y = {},
                            w = function (r, o, a, l) {
                                this.sc = y[r] ? y[r].sc : [], y[r] = this, this.gsClass = null, this.func = a;
                                var h = [];
                                this.check = function (u) {
                                    for (var c, f, d, m, _ = o.length, g = _; --_ > -1;)(c = y[o[_]] || new w(o[_], [])).gsClass ? (h[_] = c.gsClass, g--) : u && c.sc.push(this);
                                    if (0 === g && a) {
                                        if (d = (f = ("com.greensock." + r).split(".")).pop(), m = p(f.join("."))[d] = this.gsClass = a.apply(a, h), l)
                                            if (s[d] = n[d] = m, void 0 !== e && e.exports)
                                                if (r === i) {
                                                    e.exports = n[i] = m;
                                                    for (_ in n) m[_] = n[_]
                                                } else n[i] && (n[i][d] = m);
                                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                            return m
                                        });
                                        for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                                    }
                                }, this.check(!0)
                            },
                            x = t._gsDefine = function (t, e, i, n) {
                                return new w(t, e, i, n)
                            },
                            T = d._class = function (t, e, i) {
                                return e = e || function () {}, x(t, [], function () {
                                    return e
                                }, i), e
                            };
                        x.globals = s;
                        var b = [0, 0, 1, 1],
                            P = T("easing.Ease", function (t, e, i, n) {
                                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b
                            }, !0),
                            k = P.map = {},
                            C = P.register = function (t, e, i, n) {
                                for (var r, s, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                    for (s = l[h], r = n ? T("easing." + s, null, !0) : d.easing[s] || {}, o = u.length; --o > -1;) a = u[o], k[s + "." + a] = k[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                            };
                        for ((l = P.prototype)._calcEnd = !1, l.getRatio = function (t) {
                                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                                var e = this._type,
                                    i = this._power,
                                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                            }, a = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = o[a] + ",Power" + a, C(new P(null, null, 1, a), l, "easeOut", !0), C(new P(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), C(new P(null, null, 3, a), l, "easeInOut");
                        k.linear = d.easing.Linear.easeIn, k.swing = d.easing.Quad.easeInOut;
                        var S = T("events.EventDispatcher", function (t) {
                            this._listeners = {}, this._eventTarget = t || this
                        });
                        (l = S.prototype).addEventListener = function (t, e, i, n, r) {
                            r = r || 0;
                            var s, o, a = this._listeners[t],
                                l = 0;
                            for (this !== h || u || h.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                            a.splice(l, 0, {
                                c: e,
                                s: i,
                                up: n,
                                pr: r
                            })
                        }, l.removeEventListener = function (t, e) {
                            var i, n = this._listeners[t];
                            if (n)
                                for (i = n.length; --i > -1;)
                                    if (n[i].c === e) return void n.splice(i, 1)
                        }, l.dispatchEvent = function (t) {
                            var e, i, n, r = this._listeners[t];
                            if (r)
                                for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                        };
                        var A = t.requestAnimationFrame,
                            O = t.cancelAnimationFrame,
                            R = Date.now || function () {
                                return (new Date).getTime()
                            },
                            D = R();
                        for (a = (o = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !A;) A = t[o[a] + "RequestAnimationFrame"], O = t[o[a] + "CancelAnimationFrame"] || t[o[a] + "CancelRequestAnimationFrame"];
                        T("Ticker", function (t, e) {
                            var i, n, s, o, a, l = this,
                                c = R(),
                                f = !(!1 === e || !A) && "auto",
                                p = 500,
                                d = 33,
                                m = function (t) {
                                    var e, r, h = R() - D;
                                    h > p && (c += h - d), D += h, l.time = (D - c) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (s = n(m)), r && l.dispatchEvent("tick")
                                };
                            S.call(l), l.time = l.frame = 0, l.tick = function () {
                                m(!0)
                            }, l.lagSmoothing = function (t, e) {
                                if (!arguments.length) return p < 1e10;
                                p = t || 1e10, d = Math.min(e, p, 0)
                            }, l.sleep = function () {
                                null != s && (f && O ? O(s) : clearTimeout(s), n = g, s = null, l === h && (u = !1))
                            }, l.wake = function (t) {
                                null !== s ? l.sleep() : t ? c += -D + (D = R()) : l.frame > 10 && (D = R() - p + 5), n = 0 === i ? g : f && A ? A : function (t) {
                                    return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                                }, l === h && (u = !0), m(2)
                            }, l.fps = function (t) {
                                if (!arguments.length) return i;
                                o = 1 / ((i = t) || 60), a = this.time + o, l.wake()
                            }, l.useRAF = function (t) {
                                if (!arguments.length) return f;
                                l.sleep(), f = t, l.fps(i)
                            }, l.fps(t), setTimeout(function () {
                                "auto" === f && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1)
                            }, 1500)
                        }), (l = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
                        var E = T("core.Animation", function (t, e) {
                            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, K) {
                                u || h.wake();
                                var i = this.vars.useFrames ? Q : K;
                                i.add(this, i._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        h = E.ticker = new d.Ticker, (l = E.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
                        var M = function () {
                            u && R() - D > 2e3 && ("hidden" !== r.visibilityState || !h.lagSmoothing()) && h.wake();
                            var t = setTimeout(M, 2e3);
                            t.unref && t.unref()
                        };
                        M(), l.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                        }, l.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0)
                        }, l.resume = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!1)
                        }, l.seek = function (t, e) {
                            return this.totalTime(Number(t), !1 !== e)
                        }, l.restart = function (t, e) {
                            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                        }, l.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                        }, l.render = function (t, e, i) {}, l.invalidate = function () {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                        }, l.isActive = function () {
                            var t, e = this._timeline,
                                i = this._startTime;
                            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                        }, l._enabled = function (t, e) {
                            return u || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                        }, l._kill = function (t, e) {
                            return this._enabled(!1, !1)
                        }, l.kill = function (t, e) {
                            return this._kill(t, e), this
                        }, l._uncache = function (t) {
                            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                            return this
                        }, l._swapSelfInParams = function (t) {
                            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                            return i
                        }, l._callback = function (t) {
                            var e = this.vars,
                                i = e[t],
                                n = e[t + "Params"],
                                r = e[t + "Scope"] || e.callbackScope || this;
                            switch (n ? n.length : 0) {
                                case 0:
                                    i.call(r);
                                    break;
                                case 1:
                                    i.call(r, n[0]);
                                    break;
                                case 2:
                                    i.call(r, n[0], n[1]);
                                    break;
                                default:
                                    i.apply(r, n)
                            }
                        }, l.eventCallback = function (t, e, i, n) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var r = this.vars;
                                if (1 === arguments.length) return r[t];
                                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                            }
                            return this
                        }, l.delay = function (t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                        }, l.duration = function (t) {
                            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, l.totalDuration = function (t) {
                            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                        }, l.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                        }, l.totalTime = function (t, e, i) {
                            if (u || h.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var n = this._totalDuration,
                                        r = this._timeline;
                                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                                }
                                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && J(), this.render(t, e, !1), I.length && J())
                            }
                            return this
                        }, l.progress = l.totalProgress = function (t, e) {
                            var i = this.duration();
                            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                        }, l.startTime = function (t) {
                            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                        }, l.endTime = function (t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                        }, l.timeScale = function (t) {
                            if (!arguments.length) return this._timeScale;
                            var e, i;
                            for (t = t || m, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                            return this
                        }, l.reversed = function (t) {
                            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, l.paused = function (t) {
                            if (!arguments.length) return this._paused;
                            var e, i, n = this._timeline;
                            return t != this._paused && n && (u || t || h.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                        };
                        var L = T("core.SimpleTimeline", function (t) {
                            E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        (l = L.prototype = new E).constructor = L, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e, i, n) {
                            var r, s;
                            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                                for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                        }, l._remove = function (t, e) {
                            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, l.render = function (t, e, i) {
                            var n, r = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                        }, l.rawTime = function () {
                            return u || h.wake(), this._totalTime
                        };
                        var N = T("TweenLite", function (e, i, n) {
                                if (E.call(this, i, n), this.render = N.prototype.render, null == e) throw "Cannot tween a null target.";
                                this.target = e = "string" != typeof e ? e : N.selector(e) || e;
                                var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                    l = this.vars.overwrite;
                                if (this._overwrite = l = null == l ? G[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                                    for (this._targets = o = _(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(_(s))) : (this._siblings[r] = tt(s, this, !1), 1 === l && this._siblings[r].length > 1 && it(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = o[r--] = N.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                                else this._propLookup = {}, this._siblings = tt(e, this, !1), 1 === l && this._siblings.length > 1 && it(e, this, null, 1, this._siblings);
                                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -m, this.render(Math.min(0, -this._delay)))
                            }, !0),
                            j = function (e) {
                                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                            };
                        (l = N.prototype = new E).constructor = N, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, N.version = "1.20.3", N.defaultEase = l._ease = new P(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = h, N.autoSleep = 120, N.lagSmoothing = function (t, e) {
                            h.lagSmoothing(t, e)
                        }, N.selector = t.$ || t.jQuery || function (e) {
                            var i = t.$ || t.jQuery;
                            return i ? (N.selector = i, i(e)) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                        };
                        var I = [],
                            F = {},
                            q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            z = /[\+-]=-?[\.\d]/,
                            B = function (t) {
                                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                            },
                            H = function (t, e, i, n) {
                                var r, s, o, a, l, h, u, c = [],
                                    f = 0,
                                    p = "",
                                    d = 0;
                                for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(q) || [], s = e.match(q) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = s.length, a = 0; a < l; a++) u = s[a], p += (h = e.substr(f, e.indexOf(u, f) - f)) || !a ? h : ",", f += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === r[a] || r.length <= a ? p += u : (p && (c.push(p), p = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = {
                                    _next: c._firstPT,
                                    t: c,
                                    p: c.length - 1,
                                    s: o,
                                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                                    f: 0,
                                    m: d && d < 4 ? Math.round : 0
                                }), f += u.length;
                                return (p += e.substr(f)) && c.push(p), c.setRatio = B, z.test(e) && (c.end = null), c
                            },
                            X = function (t, e, i, n, r, s, o, a, l) {
                                "function" == typeof n && (n = n(l || 0, t));
                                var h = typeof t[e],
                                    u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                    c = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                                    f = "string" == typeof n && "=" === n.charAt(1),
                                    p = {
                                        t: t,
                                        p: e,
                                        s: c,
                                        f: "function" === h,
                                        pg: 0,
                                        n: r || e,
                                        m: s ? "function" == typeof s ? s : Math.round : 0,
                                        pr: 0,
                                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                                    };
                                if (("number" != typeof c || "number" != typeof n && !f) && (o || isNaN(c) || !f && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (p.fp = o, p = {
                                        t: H(c, f ? parseFloat(p.s) + p.c : n, a || N.defaultStringFilter, p),
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 2,
                                        pg: 0,
                                        n: r || e,
                                        pr: 0,
                                        m: 0
                                    }) : (p.s = parseFloat(c), f || (p.c = parseFloat(n) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                            },
                            W = N._internals = {
                                isArray: v,
                                isSelector: j,
                                lazyTweens: I,
                                blobDif: H
                            },
                            Y = N._plugins = {},
                            U = W.tweenLookup = {},
                            V = 0,
                            $ = W.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1,
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1,
                                id: 1,
                                yoyoEase: 1
                            },
                            G = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                            },
                            Q = E._rootFramesTimeline = new L,
                            K = E._rootTimeline = new L,
                            Z = 30,
                            J = W.lazyRender = function () {
                                var t, e = I.length;
                                for (F = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                                I.length = 0
                            };
                        K._startTime = h.time, Q._startTime = h.frame, K._active = Q._active = !0, setTimeout(J, 1), E._updateRoot = N.render = function () {
                            var t, e, i;
                            if (I.length && J(), K.render((h.time - K._startTime) * K._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && J(), h.frame >= Z) {
                                Z = h.frame + (parseInt(N.autoSleep, 10) || 120);
                                for (i in U) {
                                    for (t = (e = U[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                    0 === e.length && delete U[i]
                                }
                                if ((!(i = K._first) || i._paused) && N.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                    for (; i && i._paused;) i = i._next;
                                    i || h.sleep()
                                }
                            }
                        }, h.addEventListener("tick", E._updateRoot);
                        var tt = function (t, e, i) {
                                var n, r, s = t._gsTweenID;
                                if (U[s || (t._gsTweenID = s = "t" + V++)] || (U[s] = {
                                        target: t,
                                        tweens: []
                                    }), e && ((n = U[s].tweens)[r = n.length] = e, i))
                                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                                return U[s].tweens
                            },
                            et = function (t, e, i, n) {
                                var r, s, o = t.vars.onOverwrite;
                                return o && (r = o(t, e, i, n)), (o = N.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                            },
                            it = function (t, e, i, n, r) {
                                var s, o, a, l;
                                if (1 === n || n >= 4) {
                                    for (l = r.length, s = 0; s < l; s++)
                                        if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                                        else if (5 === n) break;
                                    return o
                                }
                                var h, u = e._startTime + m,
                                    c = [],
                                    f = 0,
                                    p = 0 === e._duration;
                                for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || nt(e, 0, p), 0 === nt(a, h, p) && (c[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (c[f++] = a)));
                                for (s = f; --s > -1;)
                                    if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                                        if (2 !== n && !et(a, e)) continue;
                                        a._enabled(!1, !1) && (o = !0)
                                    }
                                return o
                            },
                            nt = function (t, e, i) {
                                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                                    n = n._timeline
                                }
                                return (s /= r) > e ? s - e : i && s === e || !t._initted && s - e < 2 * m ? m : (s += t.totalDuration() / t._timeScale / r) > e + m ? 0 : s - e - m
                            };
                        l._init = function () {
                            var t, e, i, n, r, s, o = this.vars,
                                a = this._overwrittenProps,
                                l = this._duration,
                                h = !!o.immediateRender,
                                u = o.ease;
                            if (o.startAt) {
                                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                                for (n in o.startAt) r[n] = o.startAt[n];
                                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = N.to(this.target, 0, r), h)
                                    if (this._time > 0) this._startAt = null;
                                    else if (0 !== l) return
                            } else if (o.runBackwards && 0 !== l)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                                else {
                                    0 !== this._time && (h = !1), i = {};
                                    for (n in o) $[n] && "autoCSS" !== n || (i[n] = o[n]);
                                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = N.to(this.target, 0, i), h) {
                                        if (0 === this._time) return
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                }
                            if (this._ease = u = u ? u instanceof P ? u : "function" == typeof u ? new P(u, o.easeParams) : k[u] || N.defaultEase : N.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                            if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                            this._onUpdate = o.onUpdate, this._initted = !0
                        }, l._initProps = function (e, i, n, r, s) {
                            var o, a, l, h, u, c;
                            if (null == e) return !1;
                            F[e._gsTweenID] && J(), this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function (t, e) {
                                var i, n = {};
                                for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                                t.css = n
                            }(this.vars, e);
                            for (o in this.vars)
                                if (c = this.vars[o], $[o]) c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                                else if (Y[o] && (h = new Y[o])._onInitTween(e, this.vars[o], this, s)) {
                                for (this._firstPT = u = {
                                        _next: this._firstPT,
                                        t: h,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: o,
                                        pg: 1,
                                        pr: h._priority,
                                        m: 0
                                    }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                            } else i[o] = X.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter, s);
                            return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && it(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
                        }, l.render = function (t, e, i) {
                            var n, r, s, o, a = this._time,
                                l = this._duration,
                                h = this._rawPrevTime;
                            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === m && "isPause" !== this.data) && h !== t && (i = !0, h > m && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : m);
                            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== m || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : m)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                            else if (this._totalTime = this._time = t, this._easeType) {
                                var u = t / l,
                                    c = this._easeType,
                                    f = this._easePower;
                                (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / l < .5 ? u / 2 : 1 - u / 2
                            } else this.ratio = this._ease.getRatio(t / l);
                            if (this._time !== a || i) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === m && o !== m && (this._rawPrevTime = 0)))
                            }
                        }, l._kill = function (t, e, i) {
                            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                            var n, r, s, o, a, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                            if ((v(e) || j(e)) && "number" != typeof e[0])
                                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                            else {
                                if (this._targets) {
                                    for (n = this._targets.length; --n > -1;)
                                        if (e === this._targets[n]) {
                                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (e !== this.target) return !1;
                                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                                }
                                if (a) {
                                    if (h = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                                        for (s in h) a[s] && (c || (c = []), c.push(s));
                                        if ((c || !t) && !et(this, i, e, c)) return !1
                                    }
                                    for (s in h)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1);
                                    !this._firstPT && this._initted && this._enabled(!1, !1)
                                }
                            }
                            return l
                        }, l.invalidate = function () {
                            return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
                        }, l._enabled = function (t, e) {
                            if (u || h.wake(), t && this._gc) {
                                var i, n = this._targets;
                                if (n)
                                    for (i = n.length; --i > -1;) this._siblings[i] = tt(n[i], this, !0);
                                else this._siblings = tt(this.target, this, !0)
                            }
                            return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                        }, N.to = function (t, e, i) {
                            return new N(t, e, i)
                        }, N.from = function (t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
                        }, N.fromTo = function (t, e, i, n) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
                        }, N.delayedCall = function (t, e, i, n, r) {
                            return new N(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: n,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, N.set = function (t, e) {
                            return new N(t, 0, e)
                        }, N.getTweensOf = function (t, e) {
                            if (null == t) return [];
                            var i, n, r, s;
                            if (t = "string" != typeof t ? t : N.selector(t) || t, (v(t) || j(t)) && "number" != typeof t[0]) {
                                for (i = t.length, n = []; --i > -1;) n = n.concat(N.getTweensOf(t[i], e));
                                for (i = n.length; --i > -1;)
                                    for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                            } else if (t._gsTweenID)
                                for (i = (n = tt(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                            return n || []
                        }, N.killTweensOf = N.killDelayedCallsTo = function (t, e, i) {
                            "object" == typeof e && (i = e, e = !1);
                            for (var n = N.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                        };
                        var rt = T("plugins.TweenPlugin", function (t, e) {
                            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
                        }, !0);
                        if (l = rt.prototype, rt.version = "1.19.0", rt.API = 2, l._firstPT = null, l._addTween = X, l.setRatio = B, l._kill = function (t) {
                                var e, i = this._overwriteProps,
                                    n = this._firstPT;
                                if (null != t[this._propName]) this._overwriteProps = [];
                                else
                                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                                return !1
                            }, l._mod = l._roundProps = function (t) {
                                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                            }, N._onPluginEvent = function (t, e) {
                                var i, n, r, s, o, a = e._firstPT;
                                if ("_onInitAllProps" === t) {
                                    for (; a;) {
                                        for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                        (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                    }
                                    a = e._firstPT = r
                                }
                                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                                return i
                            }, rt.activate = function (t) {
                                for (var e = t.length; --e > -1;) t[e].API === rt.API && (Y[(new t[e])._propName] = t[e]);
                                return !0
                            }, x.plugin = function (t) {
                                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                                var e, i = t.propName,
                                    n = t.priority || 0,
                                    r = t.overwriteProps,
                                    s = {
                                        init: "_onInitTween",
                                        set: "setRatio",
                                        kill: "_kill",
                                        round: "_mod",
                                        mod: "_mod",
                                        initAll: "_onInitAllProps"
                                    },
                                    o = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                        rt.call(this, i, n), this._overwriteProps = r || []
                                    }, !0 === t.global),
                                    a = o.prototype = new rt(i);
                                a.constructor = o, o.API = t.API;
                                for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                                return o.version = t.version, rt.activate([o]), o
                            }, o = t._gsQueue) {
                            for (a = 0; a < o.length; a++) o[a]();
                            for (l in y) y[l].func || t.console.log("GSAP encountered missing dependency: " + l)
                        }
                        u = !1
                    }
                }(void 0 !== e && e.exports && void 0 !== t ? t : this || window, "TweenMax")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    5: [function (t, e, i) {
        (function (i) {
            var n = void 0 !== e && e.exports && void 0 !== i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function () {
                    "use strict";
                    var t = (n.document || {}).documentElement,
                        e = n,
                        i = function (i, n) {
                            var r = "x" === n ? "Width" : "Height",
                                s = "scroll" + r,
                                o = "client" + r,
                                a = document.body;
                            return i === e || i === t || i === a ? Math.max(t[s], a[s]) - (e["inner" + r] || t[o] || a[o]) : i[s] - i["offset" + r]
                        },
                        r = function (i, n) {
                            var r = "scroll" + ("x" === n ? "Left" : "Top");
                            return i === e && (null != i.pageXOffset ? r = "page" + n.toUpperCase() + "Offset" : i = null != t[r] ? t : document.body),
                                function () {
                                    return i[r]
                                }
                        },
                        s = function (i, n) {
                            var s, o = (s = i, "string" == typeof s && (s = TweenLite.selector(s)), s.length && s !== e && s[0] && s[0].style && !s.nodeType && (s = s[0]), s === e || s.nodeType && s.style ? s : null).getBoundingClientRect(),
                                a = !n || n === e || n === document.body,
                                l = (a ? t : n).getBoundingClientRect(),
                                h = {
                                    x: o.left - l.left,
                                    y: o.top - l.top
                                };
                            return !a && n && (h.x += r(n, "x")(), h.y += r(n, "y")()), h
                        },
                        o = function (t, e, n) {
                            var r = typeof t;
                            return isNaN(t) ? "number" === r || "string" === r && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), s(t, e)[n]) : parseFloat(t)
                        },
                        a = n._gsDefine.plugin({
                            propName: "scrollTo",
                            API: 2,
                            global: !0,
                            version: "1.9.0",
                            init: function (t, i, n) {
                                return this._wdw = t === e, this._target = t, this._tween = n, "object" != typeof i ? "string" == typeof (i = {
                                    y: i
                                }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = {
                                    y: i,
                                    x: i
                                }), this.vars = i, this._autoKill = !1 !== i.autoKill, this.getX = r(t, "x"), this.getY = r(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                            },
                            set: function (t) {
                                this._super.setRatio.call(this, t);
                                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                    s = r - this.yPrev,
                                    o = n - this.xPrev,
                                    l = a.autoKillThreshold;
                                this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > l || o < -l) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (s > l || s < -l) && r < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                            }
                        }),
                        l = a.prototype;
                    a.max = i, a.getOffset = s, a.buildGetter = r, a.autoKillThreshold = 7, l._kill = function (t) {
                        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
                    }
                }), n._gsDefine && n._gsQueue.pop()(),
                function (i) {
                    "use strict";
                    var r = function () {
                        return (n.GreenSockGlobals || n).ScrollToPlugin
                    };
                    void 0 !== e && e.exports ? (t("gsap/TweenLite"), e.exports = r()) : "function" == typeof define && define.amd && define(["gsap/TweenLite"], r)
                }()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "gsap/TweenLite": 3
    }],
    6: [function (t, e, i) {
        ! function (i, n) {
            "use strict";
            "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
                return n(i, t)
            }) : "object" == typeof e && e.exports ? e.exports = n(i, t("ev-emitter")) : i.imagesLoaded = n(i, i.EvEmitter)
        }("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";
            var i = t.jQuery,
                n = t.console;

            function r(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }
            var s = Array.prototype.slice;

            function o(t, e, a) {
                if (!(this instanceof o)) return new o(t, e, a);
                var l, h = t;
                ("string" == typeof t && (h = document.querySelectorAll(t)), h) ? (this.elements = (l = h, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? s.call(l) : [l]), this.options = r({}, this.options), "function" == typeof e ? a = e : r(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (h || t))
            }
            o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
                this.images = [], this.elements.forEach(this.addElementImages, this)
            }, o.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && a[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var r = i[n];
                        this.addImage(r)
                    }
                    if ("string" == typeof this.options.background) {
                        var s = t.querySelectorAll(this.options.background);
                        for (n = 0; n < s.length; n++) {
                            var o = s[n];
                            this.addElementBackgroundImages(o)
                        }
                    }
                }
            };
            var a = {
                1: !0,
                9: !0,
                11: !0
            };

            function l(t) {
                this.img = t
            }

            function h(t, e) {
                this.url = t, this.element = e, this.img = new Image
            }
            return o.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                        var r = n && n[2];
                        r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                    }
            }, o.prototype.addImage = function (t) {
                var e = new l(t);
                this.images.push(e)
            }, o.prototype.addBackground = function (t, e) {
                var i = new h(t, e);
                this.images.push(i)
            }, o.prototype.check = function () {
                var t = this;

                function e(e, i, n) {
                    setTimeout(function () {
                        t.progress(e, i, n)
                    })
                }
                this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
                    t.once("progress", e), t.check()
                }) : this.complete()
            }, o.prototype.progress = function (t, e, i) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
            }, o.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this)
                }
            }, l.prototype = Object.create(e.prototype), l.prototype.check = function () {
                this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
            }, l.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth
            }, l.prototype.confirm = function (t, e) {
                this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
            }, l.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, l.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, l.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, h.prototype = Object.create(l.prototype), h.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
            }, h.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, h.prototype.confirm = function (t, e) {
                this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
            }, o.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function (t, e) {
                    return new o(this, t, e).jqDeferred.promise(i(this))
                })
            }, o.makeJQueryPlugin(), o
        })
    }, {
        "ev-emitter": 2
    }],
    7: [function (t, e, i) {
        var n, r, s, o, a, l, h, u, c, f, p, d, m, _, g, v, y, w, x;
        n = this, r = /iPhone/i, s = /iPod/i, o = /iPad/i, a = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, l = /Android/i, h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, u = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, c = /Windows Phone/i, f = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, p = /BlackBerry/i, d = /BB10/i, m = /Opera Mini/i, _ = /(CriOS|Chrome)(?=.*\bMobile\b)/i, g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), y = function (t, e) {
            return t.test(e)
        }, w = function (t) {
            var e = t || navigator.userAgent,
                i = e.split("[FBAN");
            if (void 0 !== i[1] && (e = i[0]), void 0 !== (i = e.split("Twitter"))[1] && (e = i[0]), this.apple = {
                    phone: y(r, e),
                    ipod: y(s, e),
                    tablet: !y(r, e) && y(o, e),
                    device: y(r, e) || y(s, e) || y(o, e)
                }, this.amazon = {
                    phone: y(h, e),
                    tablet: !y(h, e) && y(u, e),
                    device: y(h, e) || y(u, e)
                }, this.android = {
                    phone: y(h, e) || y(a, e),
                    tablet: !y(h, e) && !y(a, e) && (y(u, e) || y(l, e)),
                    device: y(h, e) || y(u, e) || y(a, e) || y(l, e)
                }, this.windows = {
                    phone: y(c, e),
                    tablet: y(f, e),
                    device: y(c, e) || y(f, e)
                }, this.other = {
                    blackberry: y(p, e),
                    blackberry10: y(d, e),
                    opera: y(m, e),
                    firefox: y(g, e),
                    chrome: y(_, e),
                    device: y(p, e) || y(d, e) || y(m, e) || y(g, e) || y(_, e)
                }, this.seven_inch = y(v, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
        }, x = function () {
            var t = new w;
            return t.Class = w, t
        }, void 0 !== e && e.exports && "undefined" == typeof window ? e.exports = w : void 0 !== e && e.exports && "undefined" != typeof window ? e.exports = x() : "function" == typeof define && define.amd ? define("isMobile", [], n.isMobile = x()) : n.isMobile = x()
    }, {}],
    8: [function (t, e, i) {
        ! function (t, i) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return i(t)
            } : i(t)
        }("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";
            var i = [],
                n = t.document,
                r = Object.getPrototypeOf,
                s = i.slice,
                o = i.concat,
                a = i.push,
                l = i.indexOf,
                h = {},
                u = h.toString,
                c = h.hasOwnProperty,
                f = c.toString,
                p = f.call(Object),
                d = {};

            function m(t, e) {
                var i = (e = e || n).createElement("script");
                i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
            }
            var _ = "3.0.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector,-deprecated",
                g = function (t, e) {
                    return new g.fn.init(t, e)
                },
                v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                y = /^-ms-/,
                w = /-([a-z])/g,
                x = function (t, e) {
                    return e.toUpperCase()
                };

            function T(t) {
                var e = !!t && "length" in t && t.length,
                    i = g.type(t);
                return "function" !== i && !g.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            g.fn = g.prototype = {
                jquery: _,
                constructor: g,
                length: 0,
                toArray: function () {
                    return s.call(this)
                },
                get: function (t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : s.call(this)
                },
                pushStack: function (t) {
                    var e = g.merge(this.constructor(), t);
                    return e.prevObject = this, e
                },
                each: function (t) {
                    return g.each(this, t)
                },
                map: function (t) {
                    return this.pushStack(g.map(this, function (e, i) {
                        return t.call(e, i, e)
                    }))
                },
                slice: function () {
                    return this.pushStack(s.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (t) {
                    var e = this.length,
                        i = +t + (t < 0 ? e : 0);
                    return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: i.sort,
                splice: i.splice
            }, g.extend = g.fn.extend = function () {
                var t, e, i, n, r, s, o = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    h = !1;
                for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || g.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                    if (null != (t = arguments[a]))
                        for (e in t) i = o[e], o !== (n = t[e]) && (h && n && (g.isPlainObject(n) || (r = g.isArray(n))) ? (r ? (r = !1, s = i && g.isArray(i) ? i : []) : s = i && g.isPlainObject(i) ? i : {}, o[e] = g.extend(h, s, n)) : void 0 !== n && (o[e] = n));
                return o
            }, g.extend({
                expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {},
                isFunction: function (t) {
                    return "function" === g.type(t)
                },
                isArray: Array.isArray,
                isWindow: function (t) {
                    return null != t && t === t.window
                },
                isNumeric: function (t) {
                    var e = g.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                },
                isPlainObject: function (t) {
                    var e, i;
                    return !(!t || "[object Object]" !== u.call(t)) && (!(e = r(t)) || "function" == typeof (i = c.call(e, "constructor") && e.constructor) && f.call(i) === p)
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[u.call(t)] || "object" : typeof t
                },
                globalEval: function (t) {
                    m(t)
                },
                camelCase: function (t) {
                    return t.replace(y, "ms-").replace(w, x)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e) {
                    var i, n = 0;
                    if (T(t))
                        for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                    else
                        for (n in t)
                            if (!1 === e.call(t[n], n, t[n])) break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(v, "")
                },
                makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (T(Object(t)) ? g.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
                },
                inArray: function (t, e, i) {
                    return null == e ? -1 : l.call(e, t, i)
                },
                merge: function (t, e) {
                    for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                    return t.length = r, t
                },
                grep: function (t, e, i) {
                    for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
                    return n
                },
                map: function (t, e, i) {
                    var n, r, s = 0,
                        a = [];
                    if (T(t))
                        for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && a.push(r);
                    else
                        for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
                    return o.apply([], a)
                },
                guid: 1,
                proxy: function (t, e) {
                    var i, n, r;
                    if ("string" == typeof e && (i = t[e], e = t, t = i), g.isFunction(t)) return n = s.call(arguments, 2), (r = function () {
                        return t.apply(e || this, n.concat(s.call(arguments)))
                    }).guid = t.guid = t.guid || g.guid++, r
                },
                now: Date.now,
                support: d
            }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = i[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                h["[object " + e + "]"] = e.toLowerCase()
            });
            var b = function (t) {
                var e, i, n, r, s, o, a, l, h, u, c, f, p, d, m, _, g, v, y, w = "sizzle" + 1 * new Date,
                    x = t.document,
                    T = 0,
                    b = 0,
                    P = ot(),
                    k = ot(),
                    C = ot(),
                    S = function (t, e) {
                        return t === e && (c = !0), 0
                    },
                    A = {}.hasOwnProperty,
                    O = [],
                    R = O.pop,
                    D = O.push,
                    E = O.push,
                    M = O.slice,
                    L = function (t, e) {
                        for (var i = 0, n = t.length; i < n; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    F = "\\[" + j + "*(" + I + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
                    q = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    z = new RegExp(j + "+", "g"),
                    B = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    H = new RegExp("^" + j + "*," + j + "*"),
                    X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    W = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
                    Y = new RegExp(q),
                    U = new RegExp("^" + I + "$"),
                    V = {
                        ID: new RegExp("^#(" + I + ")"),
                        CLASS: new RegExp("^\\.(" + I + ")"),
                        TAG: new RegExp("^(" + I + "|[*])"),
                        ATTR: new RegExp("^" + F),
                        PSEUDO: new RegExp("^" + q),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    $ = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                    tt = function (t, e, i) {
                        var n = "0x" + e - 65536;
                        return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    it = function (t, e) {
                        return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    nt = function () {
                        f()
                    },
                    rt = vt(function (t) {
                        return !0 === t.disabled
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    E.apply(O = M.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
                } catch (t) {
                    E = {
                        apply: O.length ? function (t, e) {
                            D.apply(t, M.call(e))
                        } : function (t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }

                function st(t, e, n, r) {
                    var s, a, h, u, c, d, g, v = e && e.ownerDocument,
                        T = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return n;
                    if (!r && ((e ? e.ownerDocument || e : x) !== p && f(e), e = e || p, m)) {
                        if (11 !== T && (c = K.exec(t)))
                            if (s = c[1]) {
                                if (9 === T) {
                                    if (!(h = e.getElementById(s))) return n;
                                    if (h.id === s) return n.push(h), n
                                } else if (v && (h = v.getElementById(s)) && y(e, h) && h.id === s) return n.push(h), n
                            } else {
                                if (c[2]) return E.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = c[3]) && i.getElementsByClassName && e.getElementsByClassName) return E.apply(n, e.getElementsByClassName(s)), n
                            }
                        if (i.qsa && !C[t + " "] && (!_ || !_.test(t))) {
                            if (1 !== T) v = e, g = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = w), a = (d = o(t)).length; a--;) d[a] = "#" + u + " " + gt(d[a]);
                                g = d.join(","), v = Z.test(t) && mt(e.parentNode) || e
                            }
                            if (g) try {
                                return E.apply(n, v.querySelectorAll(g)), n
                            } catch (t) {} finally {
                                u === w && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(B, "$1"), e, n, r)
                }

                function ot() {
                    var t = [];
                    return function e(i, r) {
                        return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                    }
                }

                function at(t) {
                    return t[w] = !0, t
                }

                function lt(t) {
                    var e = p.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ht(t, e) {
                    for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
                }

                function ut(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function ct(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ft(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && !1 === e.disabled && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !rt(e)) !== t)
                    }
                }

                function dt(t) {
                    return at(function (e) {
                        return e = +e, at(function (i, n) {
                            for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                        })
                    })
                }

                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                i = st.support = {}, s = st.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, f = st.setDocument = function (t) {
                    var e, r, o = t ? t.ownerDocument || t : x;
                    return o !== p && 9 === o.nodeType && o.documentElement ? (d = (p = o).documentElement, m = !s(p), x !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt)), i.attributes = lt(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = lt(function (t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = lt(function (t) {
                        return d.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), i.getById ? (n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, n.filter.ID = function (t) {
                        var e = t.replace(J, tt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete n.find.ID, n.filter.ID = function (t) {
                        var e = t.replace(J, tt);
                        return function (t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var i, n = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return s
                    }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                    }, g = [], _ = [], (i.qsa = Q.test(p.querySelectorAll)) && (lt(function (t) {
                        d.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || _.push("\\[" + j + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + w + "-]").length || _.push("~="), t.querySelectorAll(":checked").length || _.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || _.push(".#.+[+~]")
                    }), lt(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && _.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), d.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), _.push(",.*:")
                    })), (i.matchesSelector = Q.test(v = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && lt(function (t) {
                        i.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), g.push("!=", q)
                    }), _ = _.length && new RegExp(_.join("|")), g = g.length && new RegExp(g.join("|")), e = Q.test(d.compareDocumentPosition), y = e || Q.test(d.contains) ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, S = e ? function (t, e) {
                        if (t === e) return c = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && y(x, t) ? -1 : e === p || e.ownerDocument === x && y(x, e) ? 1 : u ? L(u, t) - L(u, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return c = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            o = [t],
                            a = [e];
                        if (!r || !s) return t === p ? -1 : e === p ? 1 : r ? -1 : s ? 1 : u ? L(u, t) - L(u, e) : 0;
                        if (r === s) return ut(t, e);
                        for (i = t; i = i.parentNode;) o.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; o[n] === a[n];) n++;
                        return n ? ut(o[n], a[n]) : o[n] === x ? -1 : a[n] === x ? 1 : 0
                    }, p) : p
                }, st.matches = function (t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== p && f(t), e = e.replace(W, "='$1']"), i.matchesSelector && m && !C[e + " "] && (!g || !g.test(e)) && (!_ || !_.test(e))) try {
                        var n = v.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return st(e, p, null, [t]).length > 0
                }, st.contains = function (t, e) {
                    return (t.ownerDocument || t) !== p && f(t), y(t, e)
                }, st.attr = function (t, e) {
                    (t.ownerDocument || t) !== p && f(t);
                    var r = n.attrHandle[e.toLowerCase()],
                        s = r && A.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                    return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                }, st.escape = function (t) {
                    return (t + "").replace(et, it)
                }, st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function (t) {
                    var e, n = [],
                        r = 0,
                        s = 0;
                    if (c = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(S), c) {
                        for (; e = t[s++];) e === t[s] && (r = n.push(s));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return u = null, t
                }, r = st.getText = function (t) {
                    var e, i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                        } else if (3 === s || 4 === s) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += r(e);
                    return i
                }, (n = st.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: V,
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
                        ATTR: function (t) {
                            return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, i = !t[6] && t[2];
                            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = o(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(J, tt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = P[t + " "];
                            return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && P(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (t, e, i) {
                            return function (n) {
                                var r = st.attr(n, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function (t, e, i, n, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, i, l) {
                                var h, u, c, f, p, d, m = s !== o ? "nextSibling" : "previousSibling",
                                    _ = e.parentNode,
                                    g = a && e.nodeName.toLowerCase(),
                                    v = !l && !a,
                                    y = !1;
                                if (_) {
                                    if (s) {
                                        for (; m;) {
                                            for (f = e; f = f[m];)
                                                if (a ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                            d = m = "only" === t && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [o ? _.firstChild : _.lastChild], o && v) {
                                        for (y = (p = (h = (u = (c = (f = _)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === T && h[1]) && h[2], f = p && _.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                                            if (1 === f.nodeType && ++y && f === e) {
                                                u[t] = [T, p, y];
                                                break
                                            }
                                    } else if (v && (y = p = (h = (u = (c = (f = e)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === T && h[1]), !1 === y)
                                        for (;
                                            (f = ++p && f && f[m] || (y = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++y || (v && ((u = (c = f[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] = [T, y]), f !== e)););
                                    return (y -= r) === n || y % n == 0 && y / n >= 0
                                }
                            }
                        },
                        PSEUDO: function (t, e) {
                            var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return r[w] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                                for (var n, s = r(t, e), o = s.length; o--;) t[n = L(t, s[o])] = !(i[n] = s[o])
                            }) : function (t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: at(function (t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(B, "$1"));
                            return n[w] ? at(function (t, e, i, r) {
                                for (var s, o = n(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function (t, r, s) {
                                return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: at(function (t) {
                            return function (e) {
                                return st(t, e).length > 0
                            }
                        }),
                        contains: at(function (t) {
                            return t = t.replace(J, tt),
                                function (e) {
                                    return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                                }
                        }),
                        lang: at(function (t) {
                            return U.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                                function (e) {
                                    var i;
                                    do {
                                        if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function (t) {
                            return t === d
                        },
                        focus: function (t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: pt(!1),
                        disabled: pt(!0),
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function (t) {
                            return G.test(t.nodeName)
                        },
                        input: function (t) {
                            return $.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: dt(function () {
                            return [0]
                        }),
                        last: dt(function (t, e) {
                            return [e - 1]
                        }),
                        eq: dt(function (t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: dt(function (t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: dt(function (t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: dt(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: dt(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq;
                for (e in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) n.pseudos[e] = ct(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) n.pseudos[e] = ft(e);

                function _t() {}

                function gt(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function vt(t, e, i) {
                    var n = e.dir,
                        r = e.next,
                        s = r || n,
                        o = i && "parentNode" === s,
                        a = b++;
                    return e.first ? function (e, i, r) {
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) return t(e, i, r)
                    } : function (e, i, l) {
                        var h, u, c, f = [T, a];
                        if (l) {
                            for (; e = e[n];)
                                if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                        } else
                            for (; e = e[n];)
                                if (1 === e.nodeType || o)
                                    if (u = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
                                    else {
                                        if ((h = u[s]) && h[0] === T && h[1] === a) return f[2] = h[2];
                                        if (u[s] = f, f[2] = t(e, i, l)) return !0
                                    }
                    }
                }

                function yt(t) {
                    return t.length > 1 ? function (e, i, n) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function wt(t, e, i, n, r) {
                    for (var s, o = [], a = 0, l = t.length, h = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), h && e.push(a)));
                    return o
                }

                function xt(t, e, i, n, r, s) {
                    return n && !n[w] && (n = xt(n)), r && !r[w] && (r = xt(r, s)), at(function (s, o, a, l) {
                        var h, u, c, f = [],
                            p = [],
                            d = o.length,
                            m = s || function (t, e, i) {
                                for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                                return i
                            }(e || "*", a.nodeType ? [a] : a, []),
                            _ = !t || !s && e ? m : wt(m, f, t, a, l),
                            g = i ? r || (s ? t : d || n) ? [] : o : _;
                        if (i && i(_, g, a, l), n)
                            for (h = wt(g, p), n(h, [], a, l), u = h.length; u--;)(c = h[u]) && (g[p[u]] = !(_[p[u]] = c));
                        if (s) {
                            if (r || t) {
                                if (r) {
                                    for (h = [], u = g.length; u--;)(c = g[u]) && h.push(_[u] = c);
                                    r(null, g = [], h, l)
                                }
                                for (u = g.length; u--;)(c = g[u]) && (h = r ? L(s, c) : f[u]) > -1 && (s[h] = !(o[h] = c))
                            }
                        } else g = wt(g === o ? g.splice(d, g.length) : g), r ? r(null, o, g, l) : E.apply(o, g)
                    })
                }

                function Tt(t) {
                    for (var e, i, r, s = t.length, o = n.relative[t[0].type], a = o || n.relative[" "], l = o ? 1 : 0, u = vt(function (t) {
                            return t === e
                        }, a, !0), c = vt(function (t) {
                            return L(e, t) > -1
                        }, a, !0), f = [function (t, i, n) {
                            var r = !o && (n || i !== h) || ((e = i).nodeType ? u(t, i, n) : c(t, i, n));
                            return e = null, r
                        }]; l < s; l++)
                        if (i = n.relative[t[l].type]) f = [vt(yt(f), i)];
                        else {
                            if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                for (r = ++l; r < s && !n.relative[t[r].type]; r++);
                                return xt(l > 1 && yt(f), l > 1 && gt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(B, "$1"), i, l < r && Tt(t.slice(l, r)), r < s && Tt(t = t.slice(r)), r < s && gt(t))
                            }
                            f.push(i)
                        }
                    return yt(f)
                }
                return _t.prototype = n.filters = n.pseudos, n.setFilters = new _t, o = st.tokenize = function (t, e) {
                    var i, r, s, o, a, l, h, u = k[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], h = n.preFilter; a;) {
                        i && !(r = H.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = X.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(B, " ")
                        }), a = a.slice(i.length));
                        for (o in n.filter) !(r = V[o].exec(a)) || h[o] && !(r = h[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? st.error(t) : k(t, l).slice(0)
                }, a = st.compile = function (t, e) {
                    var i, r, s, a, l, u, c = [],
                        d = [],
                        _ = C[t + " "];
                    if (!_) {
                        for (e || (e = o(t)), i = e.length; i--;)(_ = Tt(e[i]))[w] ? c.push(_) : d.push(_);
                        (_ = C(t, (r = d, a = (s = c).length > 0, l = r.length > 0, u = function (t, e, i, o, u) {
                            var c, d, _, g = 0,
                                v = "0",
                                y = t && [],
                                w = [],
                                x = h,
                                b = t || l && n.find.TAG("*", u),
                                P = T += null == x ? 1 : Math.random() || .1,
                                k = b.length;
                            for (u && (h = e === p || e || u); v !== k && null != (c = b[v]); v++) {
                                if (l && c) {
                                    for (d = 0, e || c.ownerDocument === p || (f(c), i = !m); _ = r[d++];)
                                        if (_(c, e || p, i)) {
                                            o.push(c);
                                            break
                                        }
                                    u && (T = P)
                                }
                                a && ((c = !_ && c) && g--, t && y.push(c))
                            }
                            if (g += v, a && v !== g) {
                                for (d = 0; _ = s[d++];) _(y, w, e, i);
                                if (t) {
                                    if (g > 0)
                                        for (; v--;) y[v] || w[v] || (w[v] = R.call(o));
                                    w = wt(w)
                                }
                                E.apply(o, w), u && !t && w.length > 0 && g + s.length > 1 && st.uniqueSort(o)
                            }
                            return u && (T = P, h = x), y
                        }, a ? at(u) : u))).selector = t
                    }
                    return _
                }, l = st.select = function (t, e, r, s) {
                    var l, h, u, c, f, p = "function" == typeof t && t,
                        d = !s && o(t = p.selector || t);
                    if (r = r || [], 1 === d.length) {
                        if ((h = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = h[0]).type && i.getById && 9 === e.nodeType && m && n.relative[h[1].type]) {
                            if (!(e = (n.find.ID(u.matches[0].replace(J, tt), e) || [])[0])) return r;
                            p && (e = e.parentNode), t = t.slice(h.shift().value.length)
                        }
                        for (l = V.needsContext.test(t) ? 0 : h.length; l-- && (u = h[l], !n.relative[c = u.type]);)
                            if ((f = n.find[c]) && (s = f(u.matches[0].replace(J, tt), Z.test(h[0].type) && mt(e.parentNode) || e))) {
                                if (h.splice(l, 1), !(t = s.length && gt(h))) return E.apply(r, s), r;
                                break
                            }
                    }
                    return (p || a(t, d))(s, e, !m, r, !e || Z.test(t) && mt(e.parentNode) || e), r
                }, i.sortStable = w.split("").sort(S).join("") === w, i.detectDuplicates = !!c, f(), i.sortDetached = lt(function (t) {
                    return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
                }), lt(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ht("type|href|height|width", function (t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), i.attributes && lt(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ht("value", function (t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), lt(function (t) {
                    return null == t.getAttribute("disabled")
                }) || ht(N, function (t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), st
            }(t);
            g.find = b, g.expr = b.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = b.uniqueSort, g.text = b.getText, g.isXMLDoc = b.isXML, g.contains = b.contains, g.escapeSelector = b.escape;
            var P = function (t, e, i) {
                    for (var n = [], r = void 0 !== i;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (r && g(t).is(i)) break;
                            n.push(t)
                        }
                    return n
                },
                k = function (t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i
                },
                C = g.expr.match.needsContext,
                S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                A = /^.[^:#\[\.,]*$/;

            function O(t, e, i) {
                if (g.isFunction(e)) return g.grep(t, function (t, n) {
                    return !!e.call(t, n, t) !== i
                });
                if (e.nodeType) return g.grep(t, function (t) {
                    return t === e !== i
                });
                if ("string" == typeof e) {
                    if (A.test(e)) return g.filter(e, t, i);
                    e = g.filter(e, t)
                }
                return g.grep(t, function (t) {
                    return l.call(e, t) > -1 !== i && 1 === t.nodeType
                })
            }
            g.filter = function (t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? g.find.matchesSelector(n, t) ? [n] : [] : g.find.matches(t, g.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, g.fn.extend({
                find: function (t) {
                    var e, i, n = this.length,
                        r = this;
                    if ("string" != typeof t) return this.pushStack(g(t).filter(function () {
                        for (e = 0; e < n; e++)
                            if (g.contains(r[e], this)) return !0
                    }));
                    for (i = this.pushStack([]), e = 0; e < n; e++) g.find(t, r[e], i);
                    return n > 1 ? g.uniqueSort(i) : i
                },
                filter: function (t) {
                    return this.pushStack(O(this, t || [], !1))
                },
                not: function (t) {
                    return this.pushStack(O(this, t || [], !0))
                },
                is: function (t) {
                    return !!O(this, "string" == typeof t && C.test(t) ? g(t) : t || [], !1).length
                }
            });
            var R, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (g.fn.init = function (t, e, i) {
                var r, s;
                if (!t) return this;
                if (i = i || R, "string" == typeof t) {
                    if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (r[1]) {
                        if (e = e instanceof g ? e[0] : e, g.merge(this, g.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), S.test(r[1]) && g.isPlainObject(e))
                            for (r in e) g.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this
                    }
                    return (s = n.getElementById(r[2])) && (this[0] = s, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : g.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(g) : g.makeArray(t, this)
            }).prototype = g.fn, R = g(n);
            var E = /^(?:parents|prev(?:Until|All))/,
                M = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function L(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            g.fn.extend({
                has: function (t) {
                    var e = g(t, this),
                        i = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < i; t++)
                            if (g.contains(this, e[t])) return !0
                    })
                },
                closest: function (t, e) {
                    var i, n = 0,
                        r = this.length,
                        s = [],
                        o = "string" != typeof t && g(t);
                    if (!C.test(t))
                        for (; n < r; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && g.find.matchesSelector(i, t))) {
                                    s.push(i);
                                    break
                                }
                    return this.pushStack(s.length > 1 ? g.uniqueSort(s) : s)
                },
                index: function (t) {
                    return t ? "string" == typeof t ? l.call(g(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (t, e) {
                    return this.pushStack(g.uniqueSort(g.merge(this.get(), g(t, e))))
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), g.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function (t) {
                    return P(t, "parentNode")
                },
                parentsUntil: function (t, e, i) {
                    return P(t, "parentNode", i)
                },
                next: function (t) {
                    return L(t, "nextSibling")
                },
                prev: function (t) {
                    return L(t, "previousSibling")
                },
                nextAll: function (t) {
                    return P(t, "nextSibling")
                },
                prevAll: function (t) {
                    return P(t, "previousSibling")
                },
                nextUntil: function (t, e, i) {
                    return P(t, "nextSibling", i)
                },
                prevUntil: function (t, e, i) {
                    return P(t, "previousSibling", i)
                },
                siblings: function (t) {
                    return k((t.parentNode || {}).firstChild, t)
                },
                children: function (t) {
                    return k(t.firstChild)
                },
                contents: function (t) {
                    return t.contentDocument || g.merge([], t.childNodes)
                }
            }, function (t, e) {
                g.fn[t] = function (i, n) {
                    var r = g.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = g.filter(n, r)), this.length > 1 && (M[t] || g.uniqueSort(r), E.test(t) && r.reverse()), this.pushStack(r)
                }
            });
            var N = /\S+/g;

            function j(t) {
                return t
            }

            function I(t) {
                throw t
            }

            function F(t, e, i) {
                var n;
                try {
                    t && g.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && g.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
                } catch (t) {
                    i.call(void 0, t)
                }
            }
            g.Callbacks = function (t) {
                var e, i;
                t = "string" == typeof t ? (e = t, i = {}, g.each(e.match(N) || [], function (t, e) {
                    i[e] = !0
                }), i) : g.extend({}, t);
                var n, r, s, o, a = [],
                    l = [],
                    h = -1,
                    u = function () {
                        for (o = t.once, s = n = !0; l.length; h = -1)
                            for (r = l.shift(); ++h < a.length;) !1 === a[h].apply(r[0], r[1]) && t.stopOnFalse && (h = a.length, r = !1);
                        t.memory || (r = !1), n = !1, o && (a = r ? [] : "")
                    },
                    c = {
                        add: function () {
                            return a && (r && !n && (h = a.length - 1, l.push(r)), function e(i) {
                                g.each(i, function (i, n) {
                                    g.isFunction(n) ? t.unique && c.has(n) || a.push(n) : n && n.length && "string" !== g.type(n) && e(n)
                                })
                            }(arguments), r && !n && u()), this
                        },
                        remove: function () {
                            return g.each(arguments, function (t, e) {
                                for (var i;
                                    (i = g.inArray(e, a, i)) > -1;) a.splice(i, 1), i <= h && h--
                            }), this
                        },
                        has: function (t) {
                            return t ? g.inArray(t, a) > -1 : a.length > 0
                        },
                        empty: function () {
                            return a && (a = []), this
                        },
                        disable: function () {
                            return o = l = [], a = r = "", this
                        },
                        disabled: function () {
                            return !a
                        },
                        lock: function () {
                            return o = l = [], r || n || (a = r = ""), this
                        },
                        locked: function () {
                            return !!o
                        },
                        fireWith: function (t, e) {
                            return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || u()), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!s
                        }
                    };
                return c
            }, g.extend({
                Deferred: function (e) {
                    var i = [["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2], ["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return s.done(arguments).fail(arguments), this
                            },
                            catch: function (t) {
                                return r.then(null, t)
                            },
                            pipe: function () {
                                var t = arguments;
                                return g.Deferred(function (e) {
                                    g.each(i, function (i, n) {
                                        var r = g.isFunction(t[n[4]]) && t[n[4]];
                                        s[n[1]](function () {
                                            var t = r && r.apply(this, arguments);
                                            t && g.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            then: function (e, n, r) {
                                var s = 0;

                                function o(e, i, n, r) {
                                    return function () {
                                        var a = this,
                                            l = arguments,
                                            h = function () {
                                                var t, h;
                                                if (!(e < s)) {
                                                    if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                    h = t && ("object" == typeof t || "function" == typeof t) && t.then, g.isFunction(h) ? r ? h.call(t, o(s, i, j, r), o(s, i, I, r)) : (s++, h.call(t, o(s, i, j, r), o(s, i, I, r), o(s, i, j, i.notifyWith))) : (n !== j && (a = void 0, l = [t]), (r || i.resolveWith)(a, l))
                                                }
                                            },
                                            u = r ? h : function () {
                                                try {
                                                    h()
                                                } catch (t) {
                                                    g.Deferred.exceptionHook && g.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= s && (n !== I && (a = void 0, l = [t]), i.rejectWith(a, l))
                                                }
                                            };
                                        e ? u() : (g.Deferred.getStackHook && (u.stackTrace = g.Deferred.getStackHook()), t.setTimeout(u))
                                    }
                                }
                                return g.Deferred(function (t) {
                                    i[0][3].add(o(0, t, g.isFunction(r) ? r : j, t.notifyWith)), i[1][3].add(o(0, t, g.isFunction(e) ? e : j)), i[2][3].add(o(0, t, g.isFunction(n) ? n : I))
                                }).promise()
                            },
                            promise: function (t) {
                                return null != t ? g.extend(t, r) : r
                            }
                        },
                        s = {};
                    return g.each(i, function (t, e) {
                        var o = e[2],
                            a = e[5];
                        r[e[1]] = o.add, a && o.add(function () {
                            n = a
                        }, i[3 - t][2].disable, i[0][2].lock), o.add(e[3].fire), s[e[0]] = function () {
                            return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[e[0] + "With"] = o.fireWith
                    }), r.promise(s), e && e.call(s, s), s
                },
                when: function (t) {
                    var e = arguments.length,
                        i = e,
                        n = Array(i),
                        r = s.call(arguments),
                        o = g.Deferred(),
                        a = function (t) {
                            return function (i) {
                                n[t] = this, r[t] = arguments.length > 1 ? s.call(arguments) : i, --e || o.resolveWith(n, r)
                            }
                        };
                    if (e <= 1 && (F(t, o.done(a(i)).resolve, o.reject), "pending" === o.state() || g.isFunction(r[i] && r[i].then))) return o.then();
                    for (; i--;) F(r[i], a(i), o.reject);
                    return o.promise()
                }
            });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            g.Deferred.exceptionHook = function (e, i) {
                t.console && t.console.warn && e && q.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
            };
            var z = g.Deferred();

            function B() {
                n.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), g.ready()
            }
            g.fn.ready = function (t) {
                return z.then(t), this
            }, g.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (t) {
                    t ? g.readyWait++ : g.ready(!0)
                },
                ready: function (t) {
                    (!0 === t ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== t && --g.readyWait > 0 || z.resolveWith(n, [g]))
                }
            }), g.ready.then = z.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(g.ready) : (n.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
            var H = function (t, e, i, n, r, s, o) {
                    var a = 0,
                        l = t.length,
                        h = null == i;
                    if ("object" === g.type(i)) {
                        r = !0;
                        for (a in i) H(t, e, a, i[a], !0, s, o)
                    } else if (void 0 !== n && (r = !0, g.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                            return h.call(g(t), i)
                        })), e))
                        for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                    return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
                },
                X = function (t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                };

            function W() {
                this.expando = g.expando + W.uid++
            }
            W.uid = 1, W.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function (t, e, i) {
                    var n, r = this.cache(t);
                    if ("string" == typeof e) r[g.camelCase(e)] = i;
                    else
                        for (n in e) r[g.camelCase(n)] = e[n];
                    return r
                },
                get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][g.camelCase(e)]
                },
                access: function (t, e, i) {
                    return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
                },
                remove: function (t, e) {
                    var i, n = t[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== e) {
                            i = (e = g.isArray(e) ? e.map(g.camelCase) : (e = g.camelCase(e)) in n ? [e] : e.match(N) || []).length;
                            for (; i--;) delete n[e[i]]
                        }(void 0 === e || g.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function (t) {
                    var e = t[this.expando];
                    return void 0 !== e && !g.isEmptyObject(e)
                }
            };
            var Y = new W,
                U = new W,
                V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                $ = /[A-Z]/g;

            function G(t, e, i) {
                var n;
                if (void 0 === i && 1 === t.nodeType)
                    if (n = "data-" + e.replace($, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                        try {
                            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : V.test(i) ? JSON.parse(i) : i)
                        } catch (t) {}
                        U.set(t, e, i)
                    } else i = void 0;
                return i
            }
            g.extend({
                hasData: function (t) {
                    return U.hasData(t) || Y.hasData(t)
                },
                data: function (t, e, i) {
                    return U.access(t, e, i)
                },
                removeData: function (t, e) {
                    U.remove(t, e)
                },
                _data: function (t, e, i) {
                    return Y.access(t, e, i)
                },
                _removeData: function (t, e) {
                    Y.remove(t, e)
                }
            }), g.fn.extend({
                data: function (t, e) {
                    var i, n, r, s = this[0],
                        o = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (r = U.get(s), 1 === s.nodeType && !Y.get(s, "hasDataAttrs"))) {
                            for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = g.camelCase(n.slice(5)), G(s, n, r[n]));
                            Y.set(s, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof t ? this.each(function () {
                        U.set(this, t)
                    }) : H(this, function (e) {
                        var i;
                        if (s && void 0 === e) return void 0 !== (i = U.get(s, t)) ? i : void 0 !== (i = G(s, t)) ? i : void 0;
                        this.each(function () {
                            U.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function (t) {
                    return this.each(function () {
                        U.remove(this, t)
                    })
                }
            }), g.extend({
                queue: function (t, e, i) {
                    var n;
                    if (t) return e = (e || "fx") + "queue", n = Y.get(t, e), i && (!n || g.isArray(i) ? n = Y.access(t, e, g.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var i = g.queue(t, e),
                        n = i.length,
                        r = i.shift(),
                        s = g._queueHooks(t, e);
                    "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                        g.dequeue(t, e)
                    }, s)), !n && s && s.empty.fire()
                },
                _queueHooks: function (t, e) {
                    var i = e + "queueHooks";
                    return Y.get(t, i) || Y.access(t, i, {
                        empty: g.Callbacks("once memory").add(function () {
                            Y.remove(t, [e + "queue", i])
                        })
                    })
                }
            }), g.fn.extend({
                queue: function (t, e) {
                    var i = 2;
                    return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? g.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var i = g.queue(this, t, e);
                        g._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && g.dequeue(this, t)
                    })
                },
                dequeue: function (t) {
                    return this.each(function () {
                        g.dequeue(this, t)
                    })
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                },
                promise: function (t, e) {
                    var i, n = 1,
                        r = g.Deferred(),
                        s = this,
                        o = this.length,
                        a = function () {
                            --n || r.resolveWith(s, [s])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = Y.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                    return a(), r.promise(e)
                }
            });
            var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                K = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
                Z = ["Top", "Right", "Bottom", "Left"],
                J = function (t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && g.contains(t.ownerDocument, t) && "none" === g.css(t, "display")
                },
                tt = function (t, e, i, n) {
                    var r, s, o = {};
                    for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                    r = i.apply(t, n || []);
                    for (s in e) t.style[s] = o[s];
                    return r
                };
            var et = {};

            function it(t, e) {
                for (var i, n, r, s, o, a, l, h = [], u = 0, c = t.length; u < c; u++)(n = t[u]).style && (i = n.style.display, e ? ("none" === i && (h[u] = Y.get(n, "display") || null, h[u] || (n.style.display = "")), "" === n.style.display && J(n) && (h[u] = (s = void 0, o = void 0, void 0, l = void 0, o = (r = n).ownerDocument, a = r.nodeName, (l = et[a]) || (s = o.body.appendChild(o.createElement(a)), l = g.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), et[a] = l, l)))) : "none" !== i && (h[u] = "none", Y.set(n, "display", i)));
                for (u = 0; u < c; u++) null != h[u] && (t[u].style.display = h[u]);
                return t
            }
            g.fn.extend({
                show: function () {
                    return it(this, !0)
                },
                hide: function () {
                    return it(this)
                },
                toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        J(this) ? g(this).show() : g(this).hide()
                    })
                }
            });
            var nt = /^(?:checkbox|radio)$/i,
                rt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                st = /^$|\/(?:java|ecma)script/i,
                ot = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function at(t, e) {
                var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && g.nodeName(t, e) ? g.merge([t], i) : i
            }

            function lt(t, e) {
                for (var i = 0, n = t.length; i < n; i++) Y.set(t[i], "globalEval", !e || Y.get(e[i], "globalEval"))
            }
            ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td;
            var ht, ut, ct = /<|&#?\w+;/;

            function ft(t, e, i, n, r) {
                for (var s, o, a, l, h, u, c = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
                    if ((s = t[p]) || 0 === s)
                        if ("object" === g.type(s)) g.merge(f, s.nodeType ? [s] : s);
                        else if (ct.test(s)) {
                    for (o = o || c.appendChild(e.createElement("div")), a = (rt.exec(s) || ["", ""])[1].toLowerCase(), l = ot[a] || ot._default, o.innerHTML = l[1] + g.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
                    g.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
                } else f.push(e.createTextNode(s));
                for (c.textContent = "", p = 0; s = f[p++];)
                    if (n && g.inArray(s, n) > -1) r && r.push(s);
                    else if (h = g.contains(s.ownerDocument, s), o = at(c.appendChild(s), "script"), h && lt(o), i)
                    for (u = 0; s = o[u++];) st.test(s.type || "") && i.push(s);
                return c
            }
            ht = n.createDocumentFragment().appendChild(n.createElement("div")), (ut = n.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), ht.appendChild(ut), d.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue;
            var pt = n.documentElement,
                dt = /^key/,
                mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                _t = /^([^.]*)(?:\.(.+)|)/;

            function gt() {
                return !0
            }

            function vt() {
                return !1
            }

            function yt() {
                try {
                    return n.activeElement
                } catch (t) {}
            }

            function wt(t, e, i, n, r, s) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof i && (n = n || i, i = void 0);
                    for (a in e) wt(t, a, i, n, e[a], s);
                    return t
                }
                if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = vt;
                else if (!r) return t;
                return 1 === s && (o = r, (r = function (t) {
                    return g().off(t), o.apply(this, arguments)
                }).guid = o.guid || (o.guid = g.guid++)), t.each(function () {
                    g.event.add(this, e, r, n, i)
                })
            }
            g.event = {
                global: {},
                add: function (t, e, i, n, r) {
                    var s, o, a, l, h, u, c, f, p, d, m, _ = Y.get(t);
                    if (_)
                        for (i.handler && (i = (s = i).handler, r = s.selector), r && g.find.matchesSelector(pt, r), i.guid || (i.guid = g.guid++), (l = _.events) || (l = _.events = {}), (o = _.handle) || (o = _.handle = function (e) {
                                return void 0 !== g && g.event.triggered !== e.type ? g.event.dispatch.apply(t, arguments) : void 0
                            }), h = (e = (e || "").match(N) || [""]).length; h--;) p = m = (a = _t.exec(e[h]) || [])[1], d = (a[2] || "").split(".").sort(), p && (c = g.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = g.event.special[p] || {}, u = g.extend({
                            type: p,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: r,
                            needsContext: r && g.expr.match.needsContext.test(r),
                            namespace: d.join(".")
                        }, s), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, d, o) || t.addEventListener && t.addEventListener(p, o)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), g.event.global[p] = !0)
                },
                remove: function (t, e, i, n, r) {
                    var s, o, a, l, h, u, c, f, p, d, m, _ = Y.hasData(t) && Y.get(t);
                    if (_ && (l = _.events)) {
                        for (h = (e = (e || "").match(N) || [""]).length; h--;)
                            if (p = m = (a = _t.exec(e[h]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                                for (c = g.event.special[p] || {}, f = l[p = (n ? c.delegateType : c.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) u = f[s], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (f.splice(s, 1), u.selector && f.delegateCount--, c.remove && c.remove.call(t, u));
                                o && !f.length && (c.teardown && !1 !== c.teardown.call(t, d, _.handle) || g.removeEvent(t, p, _.handle), delete l[p])
                            } else
                                for (p in l) g.event.remove(t, p + e[h], i, n, !0);
                        g.isEmptyObject(l) && Y.remove(t, "handle events")
                    }
                },
                dispatch: function (t) {
                    var e, i, n, r, s, o, a = g.event.fix(t),
                        l = new Array(arguments.length),
                        h = (Y.get(this, "events") || {})[a.type] || [],
                        u = g.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                        for (o = g.event.handlers.call(this, a, h), e = 0;
                            (r = o[e++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = r.elem, i = 0;
                                (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((g.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (t, e) {
                    var i, n, r, s, o = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                                for (n = [], i = 0; i < a; i++) void 0 === n[r = (s = e[i]).selector + " "] && (n[r] = s.needsContext ? g(r, this).index(l) > -1 : g.find(r, this, null, [l]).length), n[r] && n.push(s);
                                n.length && o.push({
                                    elem: l,
                                    handlers: n
                                })
                            }
                    return a < e.length && o.push({
                        elem: this,
                        handlers: e.slice(a)
                    }), o
                },
                addProp: function (t, e) {
                    Object.defineProperty(g.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: g.isFunction(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function (t) {
                    return t[g.expando] ? t : new g.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== yt() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === yt() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && g.nodeName(this, "input")) return this.click(), !1
                        },
                        _default: function (t) {
                            return g.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, g.removeEvent = function (t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i)
            }, g.Event = function (t, e) {
                if (!(this instanceof g.Event)) return new g.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? gt : vt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && g.extend(this, e), this.timeStamp = t && t.timeStamp || g.now(), this[g.expando] = !0
            }, g.Event.prototype = {
                constructor: g.Event,
                isDefaultPrevented: vt,
                isPropagationStopped: vt,
                isImmediatePropagationStopped: vt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = gt, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = gt, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = gt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, g.each({
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
                which: function (t) {
                    var e = t.button;
                    return null == t.which && dt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, g.event.addProp), g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                g.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function (t) {
                        var i, n = t.relatedTarget,
                            r = t.handleObj;
                        return n && (n === this || g.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), g.fn.extend({
                on: function (t, e, i, n) {
                    return wt(this, t, e, i, n)
                },
                one: function (t, e, i, n) {
                    return wt(this, t, e, i, n, 1)
                },
                off: function (t, e, i) {
                    var n, r;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, g(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (r in t) this.off(r, e, t[r]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = vt), this.each(function () {
                        g.event.remove(this, t, i, e)
                    })
                }
            });
            var xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Tt = /<script|<style|<link/i,
                bt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Pt = /^true\/(.*)/,
                kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ct(t, e) {
                return g.nodeName(t, "table") && g.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
            }

            function St(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function At(t) {
                var e = Pt.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function Ot(t, e) {
                var i, n, r, s, o, a, l, h;
                if (1 === e.nodeType) {
                    if (Y.hasData(t) && (s = Y.access(t), o = Y.set(e, s), h = s.events)) {
                        delete o.handle, o.events = {};
                        for (r in h)
                            for (i = 0, n = h[r].length; i < n; i++) g.event.add(e, r, h[r][i])
                    }
                    U.hasData(t) && (a = U.access(t), l = g.extend({}, a), U.set(e, l))
                }
            }

            function Rt(t, e, i, n) {
                e = o.apply([], e);
                var r, s, a, l, h, u, c = 0,
                    f = t.length,
                    p = f - 1,
                    _ = e[0],
                    v = g.isFunction(_);
                if (v || f > 1 && "string" == typeof _ && !d.checkClone && bt.test(_)) return t.each(function (r) {
                    var s = t.eq(r);
                    v && (e[0] = _.call(this, r, s.html())), Rt(s, e, i, n)
                });
                if (f && (s = (r = ft(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                    for (l = (a = g.map(at(r, "script"), St)).length; c < f; c++) h = r, c !== p && (h = g.clone(h, !0, !0), l && g.merge(a, at(h, "script"))), i.call(t[c], h, c);
                    if (l)
                        for (u = a[a.length - 1].ownerDocument, g.map(a, At), c = 0; c < l; c++) h = a[c], st.test(h.type || "") && !Y.access(h, "globalEval") && g.contains(u, h) && (h.src ? g._evalUrl && g._evalUrl(h.src) : m(h.textContent.replace(kt, ""), u))
                }
                return t
            }

            function Dt(t, e, i) {
                for (var n, r = e ? g.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || g.cleanData(at(n)), n.parentNode && (i && g.contains(n.ownerDocument, n) && lt(at(n, "script")), n.parentNode.removeChild(n));
                return t
            }
            g.extend({
                htmlPrefilter: function (t) {
                    return t.replace(xt, "<$1></$2>")
                },
                clone: function (t, e, i) {
                    var n, r, s, o, a, l, h, u = t.cloneNode(!0),
                        c = g.contains(t.ownerDocument, t);
                    if (!(d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || g.isXMLDoc(t)))
                        for (o = at(u), n = 0, r = (s = at(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (h = l.nodeName.toLowerCase()) && nt.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
                    if (e)
                        if (i)
                            for (s = s || at(t), o = o || at(u), n = 0, r = s.length; n < r; n++) Ot(s[n], o[n]);
                        else Ot(t, u);
                    return (o = at(u, "script")).length > 0 && lt(o, !c && at(t, "script")), u
                },
                cleanData: function (t) {
                    for (var e, i, n, r = g.event.special, s = 0; void 0 !== (i = t[s]); s++)
                        if (X(i)) {
                            if (e = i[Y.expando]) {
                                if (e.events)
                                    for (n in e.events) r[n] ? g.event.remove(i, n) : g.removeEvent(i, n, e.handle);
                                i[Y.expando] = void 0
                            }
                            i[U.expando] && (i[U.expando] = void 0)
                        }
                }
            }), g.fn.extend({
                detach: function (t) {
                    return Dt(this, t, !0)
                },
                remove: function (t) {
                    return Dt(this, t)
                },
                text: function (t) {
                    return H(this, function (t) {
                        return void 0 === t ? g.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function () {
                    return Rt(this, arguments, function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ct(this, t).appendChild(t)
                    })
                },
                prepend: function () {
                    return Rt(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Ct(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (g.cleanData(at(t, !1)), t.textContent = "");
                    return this
                },
                clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return g.clone(this, t, e)
                    })
                },
                html: function (t) {
                    return H(this, function (t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Tt.test(t) && !ot[(rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = g.htmlPrefilter(t);
                            try {
                                for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (g.cleanData(at(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var t = [];
                    return Rt(this, arguments, function (e) {
                        var i = this.parentNode;
                        g.inArray(this, t) < 0 && (g.cleanData(at(this)), i && i.replaceChild(e, this))
                    }, t)
                }
            }), g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                g.fn[t] = function (t) {
                    for (var i, n = [], r = g(t), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), g(r[o])[e](i), a.apply(n, i.get());
                    return this.pushStack(n)
                }
            });
            var Et = /^margin/,
                Mt = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
                Lt = function (e) {
                    var i = e.ownerDocument.defaultView;
                    return i && i.opener || (i = t), i.getComputedStyle(e)
                };

            function Nt(t, e, i) {
                var n, r, s, o, a = t.style;
                return (i = i || Lt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || g.contains(t.ownerDocument, t) || (o = g.style(t, e)), !d.pixelMarginRight() && Mt.test(o) && Et.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
            }

            function jt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                function e() {
                    if (l) {
                        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", pt.appendChild(a);
                        var e = t.getComputedStyle(l);
                        i = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, l.style.marginRight = "50%", s = "4px" === e.marginRight, pt.removeChild(a), l = null
                    }
                }
                var i, r, s, o, a = n.createElement("div"),
                    l = n.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), g.extend(d, {
                    pixelPosition: function () {
                        return e(), i
                    },
                    boxSizingReliable: function () {
                        return e(), r
                    },
                    pixelMarginRight: function () {
                        return e(), s
                    },
                    reliableMarginLeft: function () {
                        return e(), o
                    }
                }))
            }();
            var It, Ft, qt = /^(none|table(?!-c[ea]).+)/,
                zt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Bt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ht = ["Webkit", "Moz", "ms"],
                Xt = n.createElement("div").style;

            function Wt(t) {
                if (t in Xt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = Ht.length; i--;)
                    if ((t = Ht[i] + e) in Xt) return t
            }

            function Yt(t, e, i) {
                var n = K.exec(e);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
            }

            function Ut(t, e, i, n, r) {
                for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === i && (o += g.css(t, i + Z[s], !0, r)), n ? ("content" === i && (o -= g.css(t, "padding" + Z[s], !0, r)), "margin" !== i && (o -= g.css(t, "border" + Z[s] + "Width", !0, r))) : (o += g.css(t, "padding" + Z[s], !0, r), "padding" !== i && (o += g.css(t, "border" + Z[s] + "Width", !0, r)));
                return o
            }

            function Vt(t, e, i) {
                var n, r = !0,
                    s = Lt(t),
                    o = "border-box" === g.css(t, "boxSizing", !1, s);
                if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
                    if (((n = Nt(t, e, s)) < 0 || null == n) && (n = t.style[e]), Mt.test(n)) return n;
                    r = o && (d.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
                }
                return n + Ut(t, e, i || (o ? "border" : "content"), r, s) + "px"
            }
            g.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var i = Nt(t, "opacity");
                                return "" === i ? "1" : i
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
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function (t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, s, o, a = g.camelCase(e),
                            l = t.style;
                        if (e = g.cssProps[a] || (g.cssProps[a] = Wt(a) || a), o = g.cssHooks[e] || g.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                        "string" === (s = typeof i) && (r = K.exec(i)) && r[1] && (i = function (t, e, i, n) {
                            var r, s = 1,
                                o = 20,
                                a = n ? function () {
                                    return n.cur()
                                } : function () {
                                    return g.css(t, e, "")
                                },
                                l = a(),
                                h = i && i[3] || (g.cssNumber[e] ? "" : "px"),
                                u = (g.cssNumber[e] || "px" !== h && +l) && K.exec(g.css(t, e));
                            if (u && u[3] !== h) {
                                h = h || u[3], i = i || [], u = +l || 1;
                                do {
                                    u /= s = s || ".5", g.style(t, e, u + h)
                                } while (s !== (s = a() / l) && 1 !== s && --o)
                            }
                            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = u, n.end = r)), r
                        }(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (g.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i))
                    }
                },
                css: function (t, e, i, n) {
                    var r, s, o, a = g.camelCase(e);
                    return e = g.cssProps[a] || (g.cssProps[a] = Wt(a) || a), (o = g.cssHooks[e] || g.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = Nt(t, e, n)), "normal" === r && e in Bt && (r = Bt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
                }
            }), g.each(["height", "width"], function (t, e) {
                g.cssHooks[e] = {
                    get: function (t, i, n) {
                        if (i) return !qt.test(g.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, e, n) : tt(t, zt, function () {
                            return Vt(t, e, n)
                        })
                    },
                    set: function (t, i, n) {
                        var r, s = n && Lt(t),
                            o = n && Ut(t, e, n, "border-box" === g.css(t, "boxSizing", !1, s), s);
                        return o && (r = K.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = g.css(t, e)), Yt(0, i, o)
                    }
                }
            }), g.cssHooks.marginLeft = jt(d.reliableMarginLeft, function (t, e) {
                if (e) return (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {
                    marginLeft: 0
                }, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), g.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (t, e) {
                g.cssHooks[t + e] = {
                    expand: function (i) {
                        for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + Z[n] + e] = s[n] || s[n - 2] || s[0];
                        return r
                    }
                }, Et.test(t) || (g.cssHooks[t + e].set = Yt)
            }), g.fn.extend({
                css: function (t, e) {
                    return H(this, function (t, e, i) {
                        var n, r, s = {},
                            o = 0;
                        if (g.isArray(e)) {
                            for (n = Lt(t), r = e.length; o < r; o++) s[e[o]] = g.css(t, e[o], !1, n);
                            return s
                        }
                        return void 0 !== i ? g.style(t, e, i) : g.css(t, e)
                    }, t, e, arguments.length > 1)
                }
            }), g.fn.delay = function (e, i) {
                return e = g.fx && g.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, n) {
                    var r = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(r)
                    }
                })
            }, It = n.createElement("input"), Ft = n.createElement("select").appendChild(n.createElement("option")), It.type = "checkbox", d.checkOn = "" !== It.value, d.optSelected = Ft.selected, (It = n.createElement("input")).value = "t", It.type = "radio", d.radioValue = "t" === It.value;
            var $t, Gt = g.expr.attrHandle;
            g.fn.extend({
                attr: function (t, e) {
                    return H(this, g.attr, t, e, arguments.length > 1)
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        g.removeAttr(this, t)
                    })
                }
            }), g.extend({
                attr: function (t, e, i) {
                    var n, r, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? g.prop(t, e, i) : (1 === s && g.isXMLDoc(t) || (r = g.attrHooks[e.toLowerCase()] || (g.expr.match.bool.test(e) ? $t : void 0)), void 0 !== i ? null === i ? void g.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = g.find.attr(t, e)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!d.radioValue && "radio" === e && g.nodeName(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e
                            }
                        }
                    }
                },
                removeAttr: function (t, e) {
                    var i, n = 0,
                        r = e && e.match(N);
                    if (r && 1 === t.nodeType)
                        for (; i = r[n++];) t.removeAttribute(i)
                }
            }), $t = {
                set: function (t, e, i) {
                    return !1 === e ? g.removeAttr(t, i) : t.setAttribute(i, i), i
                }
            }, g.each(g.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var i = Gt[e] || g.find.attr;
                Gt[e] = function (t, e, n) {
                    var r, s, o = e.toLowerCase();
                    return n || (s = Gt[o], Gt[o] = r, r = null != i(t, e, n) ? o : null, Gt[o] = s), r
                }
            });
            var Qt = /^(?:input|select|textarea|button)$/i,
                Kt = /^(?:a|area)$/i;
            g.fn.extend({
                prop: function (t, e) {
                    return H(this, g.prop, t, e, arguments.length > 1)
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[g.propFix[t] || t]
                    })
                }
            }), g.extend({
                prop: function (t, e, i) {
                    var n, r, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && g.isXMLDoc(t) || (e = g.propFix[e] || e, r = g.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = g.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Qt.test(t.nodeName) || Kt.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), d.optSelected || (g.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                g.propFix[this.toLowerCase()] = this
            });
            var Zt = /[\t\r\n\f]/g;

            function Jt(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }
            g.fn.extend({
                addClass: function (t) {
                    var e, i, n, r, s, o, a, l = 0;
                    if (g.isFunction(t)) return this.each(function (e) {
                        g(this).addClass(t.call(this, e, Jt(this)))
                    });
                    if ("string" == typeof t && t)
                        for (e = t.match(N) || []; i = this[l++];)
                            if (r = Jt(i), n = 1 === i.nodeType && (" " + r + " ").replace(Zt, " ")) {
                                for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                r !== (a = g.trim(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (t) {
                    var e, i, n, r, s, o, a, l = 0;
                    if (g.isFunction(t)) return this.each(function (e) {
                        g(this).removeClass(t.call(this, e, Jt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof t && t)
                        for (e = t.match(N) || []; i = this[l++];)
                            if (r = Jt(i), n = 1 === i.nodeType && (" " + r + " ").replace(Zt, " ")) {
                                for (o = 0; s = e[o++];)
                                    for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                                r !== (a = g.trim(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (t, e) {
                    var i = typeof t;
                    return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : g.isFunction(t) ? this.each(function (i) {
                        g(this).toggleClass(t.call(this, i, Jt(this), e), e)
                    }) : this.each(function () {
                        var e, n, r, s;
                        if ("string" === i)
                            for (n = 0, r = g(this), s = t.match(N) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                        else void 0 !== t && "boolean" !== i || ((e = Jt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (t) {
                    var e, i, n = 0;
                    for (e = " " + t + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + Jt(i) + " ").replace(Zt, " ").indexOf(e) > -1) return !0;
                    return !1
                }
            });
            var te = /\r/g,
                ee = /[\x20\t\r\n\f]+/g;
            g.fn.extend({
                val: function (t) {
                    var e, i, n, r = this[0];
                    return arguments.length ? (n = g.isFunction(t), this.each(function (i) {
                        var r;
                        1 === this.nodeType && (null == (r = n ? t.call(this, i, g(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : g.isArray(r) && (r = g.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    })) : r ? (e = g.valHooks[r.type] || g.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(te, "") : null == i ? "" : i : void 0
                }
            }), g.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = g.find.attr(t, "value");
                            return null != e ? e : g.trim(g.text(t)).replace(ee, " ")
                        }
                    },
                    select: {
                        get: function (t) {
                            for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type, o = s ? null : [], a = s ? r + 1 : n.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                                if (((i = n[l]).selected || l === r) && !i.disabled && (!i.parentNode.disabled || !g.nodeName(i.parentNode, "optgroup"))) {
                                    if (e = g(i).val(), s) return e;
                                    o.push(e)
                                }
                            return o
                        },
                        set: function (t, e) {
                            for (var i, n, r = t.options, s = g.makeArray(e), o = r.length; o--;)((n = r[o]).selected = g.inArray(g.valHooks.option.get(n), s) > -1) && (i = !0);
                            return i || (t.selectedIndex = -1), s
                        }
                    }
                }
            }), g.each(["radio", "checkbox"], function () {
                g.valHooks[this] = {
                    set: function (t, e) {
                        if (g.isArray(e)) return t.checked = g.inArray(g(t).val(), e) > -1
                    }
                }, d.checkOn || (g.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            });
            var ie = /^(?:focusinfocus|focusoutblur)$/;
            g.extend(g.event, {
                trigger: function (e, i, r, s) {
                    var o, a, l, h, u, f, p, d = [r || n],
                        m = c.call(e, "type") ? e.type : e,
                        _ = c.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !ie.test(m + g.event.triggered) && (m.indexOf(".") > -1 && (m = (_ = m.split(".")).shift(), _.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[g.expando] ? e : new g.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), i = null == i ? [e] : g.makeArray(i, [e]), p = g.event.special[m] || {}, s || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                        if (!s && !p.noBubble && !g.isWindow(r)) {
                            for (h = p.delegateType || m, ie.test(h + m) || (a = a.parentNode); a; a = a.parentNode) d.push(a), l = a;
                            l === (r.ownerDocument || n) && d.push(l.defaultView || l.parentWindow || t)
                        }
                        for (o = 0;
                            (a = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? h : p.bindType || m, (f = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && f.apply(a, i), (f = u && a[u]) && f.apply && X(a) && (e.result = f.apply(a, i), !1 === e.result && e.preventDefault());
                        return e.type = m, s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), i) || !X(r) || u && g.isFunction(r[m]) && !g.isWindow(r) && ((l = r[u]) && (r[u] = null), g.event.triggered = m, r[m](), g.event.triggered = void 0, l && (r[u] = l)), e.result
                    }
                },
                simulate: function (t, e, i) {
                    var n = g.extend(new g.Event, i, {
                        type: t,
                        isSimulated: !0
                    });
                    g.event.trigger(n, null, e)
                }
            }), g.fn.extend({
                trigger: function (t, e) {
                    return this.each(function () {
                        g.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function (t, e) {
                    var i = this[0];
                    if (i) return g.event.trigger(t, e, i, !0)
                }
            }), g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
                g.fn[e] = function (t, i) {
                    return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                }
            }), g.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), d.focusin = "onfocusin" in t, d.focusin || g.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, e) {
                var i = function (t) {
                    g.event.simulate(e, t.target, g.event.fix(t))
                };
                g.event.special[e] = {
                    setup: function () {
                        var n = this.ownerDocument || this,
                            r = Y.access(n, e);
                        r || n.addEventListener(t, i, !0), Y.access(n, e, (r || 0) + 1)
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this,
                            r = Y.access(n, e) - 1;
                        r ? Y.access(n, e, r) : (n.removeEventListener(t, i, !0), Y.remove(n, e))
                    }
                }
            });
            var ne, re = /\[\]$/,
                se = /\r?\n/g,
                oe = /^(?:submit|button|image|reset|file)$/i,
                ae = /^(?:input|select|textarea|keygen)/i;

            function le(t, e, i, n) {
                var r;
                if (g.isArray(e)) g.each(e, function (e, r) {
                    i || re.test(t) ? n(t, r) : le(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
                });
                else if (i || "object" !== g.type(e)) n(t, e);
                else
                    for (r in e) le(t + "[" + r + "]", e[r], i, n)
            }

            function he(t) {
                return g.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }
            g.param = function (t, e) {
                var i, n = [],
                    r = function (t, e) {
                        var i = g.isFunction(e) ? e() : e;
                        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (g.isArray(t) || t.jquery && !g.isPlainObject(t)) g.each(t, function () {
                    r(this.name, this.value)
                });
                else
                    for (i in t) le(i, t[i], e, r);
                return n.join("&")
            }, g.fn.extend({
                serialize: function () {
                    return g.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = g.prop(this, "elements");
                        return t ? g.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !g(this).is(":disabled") && ae.test(this.nodeName) && !oe.test(t) && (this.checked || !nt.test(t))
                    }).map(function (t, e) {
                        var i = g(this).val();
                        return null == i ? null : g.isArray(i) ? g.map(i, function (t) {
                            return {
                                name: e.name,
                                value: t.replace(se, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(se, "\r\n")
                        }
                    }).get()
                }
            }), g.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return this[0] && (g.isFunction(t) && (t = t.call(this[0])), e = g(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function (t) {
                    return g.isFunction(t) ? this.each(function (e) {
                        g(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = g(this),
                            i = e.contents();
                        i.length ? i.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function (t) {
                    var e = g.isFunction(t);
                    return this.each(function (i) {
                        g(this).wrapAll(e ? t.call(this, i) : t)
                    })
                },
                unwrap: function (t) {
                    return this.parent(t).not("body").each(function () {
                        g(this).replaceWith(this.childNodes)
                    }), this
                }
            }), g.expr.pseudos.hidden = function (t) {
                return !g.expr.pseudos.visible(t)
            }, g.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, d.createHTMLDocument = ((ne = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ne.childNodes.length), g.parseHTML = function (t, e, i) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (d.createHTMLDocument ? ((r = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(r)) : e = n), s = S.exec(t), o = !i && [], s ? [e.createElement(s[1])] : (s = ft([t], e, o), o && o.length && g(o).remove(), g.merge([], s.childNodes)));
                var r, s, o
            }, g.offset = {
                setOffset: function (t, e, i) {
                    var n, r, s, o, a, l, h = g.css(t, "position"),
                        u = g(t),
                        c = {};
                    "static" === h && (t.style.position = "relative"), a = u.offset(), s = g.css(t, "top"), l = g.css(t, "left"), ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (o = (n = u.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), g.isFunction(e) && (e = e.call(t, i, g.extend({}, a))), null != e.top && (c.top = e.top - a.top + o), null != e.left && (c.left = e.left - a.left + r), "using" in e ? e.using.call(t, c) : u.css(c)
                }
            }, g.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        g.offset.setOffset(this, t, e)
                    });
                    var e, i, n, r, s = this[0];
                    return s ? s.getClientRects().length ? (n = s.getBoundingClientRect()).width || n.height ? (i = he(r = s.ownerDocument), e = r.documentElement, {
                        top: n.top + i.pageYOffset - e.clientTop,
                        left: n.left + i.pageXOffset - e.clientLeft
                    }) : n : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var t, e, i = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === g.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), g.nodeName(t[0], "html") || (n = t.offset()), n = {
                            top: n.top + g.css(t[0], "borderTopWidth", !0),
                            left: n.left + g.css(t[0], "borderLeftWidth", !0)
                        }), {
                            top: e.top - n.top - g.css(i, "marginTop", !0),
                            left: e.left - n.left - g.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && "static" === g.css(t, "position");) t = t.offsetParent;
                        return t || pt
                    })
                }
            }), g.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, e) {
                var i = "pageYOffset" === e;
                g.fn[t] = function (n) {
                    return H(this, function (t, n, r) {
                        var s = he(t);
                        if (void 0 === r) return s ? s[e] : t[n];
                        s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
                    }, t, n, arguments.length)
                }
            }), g.each(["top", "left"], function (t, e) {
                g.cssHooks[e] = jt(d.pixelPosition, function (t, i) {
                    if (i) return i = Nt(t, e), Mt.test(i) ? g(t).position()[e] + "px" : i
                })
            }), g.each({
                Height: "height",
                Width: "width"
            }, function (t, e) {
                g.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function (i, n) {
                    g.fn[n] = function (r, s) {
                        var o = arguments.length && (i || "boolean" != typeof r),
                            a = i || (!0 === r || !0 === s ? "margin" : "border");
                        return H(this, function (e, i, r) {
                            var s;
                            return g.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? g.css(e, i, a) : g.style(e, i, r, a)
                        }, e, o ? r : void 0, o)
                    }
                })
            }), "function" == typeof define && define.amd && define("jquery", [], function () {
                return g
            });
            var ue = t.jQuery,
                ce = t.$;
            return g.noConflict = function (e) {
                return t.$ === g && (t.$ = ce), e && t.jQuery === g && (t.jQuery = ue), g
            }, e || (t.jQuery = t.$ = g), g
        })
    }, {}],
    9: [function (t, e, i) {
        "use strict";
        var n = t("jquery-slim"),
            r = t("./throttle.js");
        window.requestAnimFrame = t("./requestAnimFrame.js"), t("gsap");
        t("./mapRange");
        e.exports = function (t, e) {
            var i = void 0,
                s = void 0,
                o = void 0,
                a = void 0,
                l = void 0,
                h = void 0;

            function u(t) {
                TweenMax.set(t, {
                    clearProps: "width, height",
                    onCompleteScope: t,
                    onComplete: function () {
                        var t = this[0].getBoundingClientRect();
                        TweenMax.set(this, {
                            width: 2 * Math.round(t.width / 2),
                            height: 2 * Math.round(t.height / 2)
                        })
                    }
                })
            }

            function c() {
                u(t)
            }! function () {
                s = 4, o = 5, a = 33.333333, l = 25, h = .03, i = new TimelineMax({
                    paused: !0,
                    repeat: -1,
                    repeatDelay: e,
                    delay: e
                });
                for (var n = 0, r = 0; r < o; r++)
                    for (var u = 0; u < s; u++) {
                        var c = u * a,
                            f = r * l;
                        i.set(t, {
                            backgroundPosition: c + "% " + f + "%"
                        }, n * h), n++
                    }
                i.play()
            }(), u(t);
            var f = r(function () {
                requestAnimFrame(c)
            }, 40);
            n(window).on("resize", f)
        }
    }, {
        "./mapRange": 18,
        "./requestAnimFrame.js": 20,
        "./throttle.js": 21,
        gsap: 4,
        "jquery-slim": 8
    }],
    10: [function (t, e, i) {
        "use strict";
        var n = t("jquery-slim"),
            r = t("./throttle.js");
        window.requestAnimFrame = t("./requestAnimFrame.js"), t("gsap");
        var s = t("./mapRange"),
            o = t("./animSlurp");
        e.exports = function (t, e) {
            if (t.length) {
                var i = n("#frog"),
                    a = n("#frogEye"),
                    l = n("#frogPupil"),
                    h = n("#frogThroat"),
                    u = n("#rectVisu"),
                    c = n("#contentRectVisu"),
                    f = n("#fly"),
                    p = n("#triggerFly"),
                    d = {
                        size: function (t) {
                            return t.width()
                        },
                        position: function (t) {
                            return t.position().left
                        },
                        offset: function (t) {
                            return t.offset().left
                        },
                        cursor: function (t) {
                            return t.pageX
                        }
                    },
                    m = {
                        size: function (t) {
                            return t.height()
                        },
                        position: function (t) {
                            return t.position().top
                        },
                        offset: function (t) {
                            return t.offset().top
                        },
                        cursor: function (t) {
                            return t.pageY
                        }
                    },
                    _ = void 0,
                    g = void 0,
                    v = void 0,
                    y = void 0,
                    w = 0,
                    x = 0,
                    T = void 0,
                    b = void 0,
                    P = void 0,
                    k = void 0,
                    C = void 0,
                    S = void 0,
                    A = f.width() / 2,
                    O = f.height() / 2,
                    R = void 0,
                    D = void 0,
                    E = !0;
                D = o(i), p.on("mouseenter", function (t) {
                    E && (D.play(), TweenMax.set(f, {
                        opacity: 0
                    }), E = !1, R.restart(), TweenMax.delayedCall(.2, function () {
                        u.removeClass("no-cursor")
                    }))
                }), (R = new TimelineMax({
                    repeat: -1,
                    yoyo: !0,
                    repeatDelay: .5
                })).to(h, .5, {
                    scale: 2,
                    x: "-35%",
                    ease: Power2.easeOut
                }), N(i), e || u.on("mousemove", function (t) {
                    var e, i, n, r, o, h, c;
                    TweenMax.set(l, {
                        x: L(l, a, t, d),
                        y: L(l, a, t, m),
                        scaleX: (e = a, i = t, n = e[0].getBoundingClientRect(), r = e.offset(), _ = u.outerWidth(), g = 0 | Math.hypot(i.pageX - (r.left + n.width / 2), i.pageY - (r.top + n.height / 2)), s(g, 0, _, 1.8, 1))
                    }), o = t, h = u[0].getBoundingClientRect(), c = u.offset(), P = o.pageX - c.left - A | 0, k = o.pageY - c.top - O | 0, T = P - h.width / 2 | 0, b = k - h.height / 2 | 0, C = T === w && b === x ? S : 180 * Math.atan2(b - x, T - w) / Math.PI, w = T, x = b, S = C, TweenMax.set(f, {
                        x: P,
                        y: k,
                        rotation: C
                    })
                }).on("mouseenter", function () {
                    TweenMax.to(c, .6, {
                        scale: .97,
                        ease: Elastic.easeOut.config(1, .2)
                    }), TweenMax.set(f, {
                        opacity: 1
                    }), n(this).addClass("no-cursor")
                }).on("mouseleave", function () {
                    TweenMax.to(c, .1, {
                        scale: 1,
                        ease: Power1.easeInOut
                    }), TweenMax.to(l, .1, {
                        x: "70%",
                        y: 0,
                        scaleX: 1
                    }), TweenMax.set(f, {
                        opacity: 0
                    }), E = !0, n(this).removeClass("no-cursor")
                });
                var M = r(function () {
                    requestAnimFrame(j)
                }, 40);
                n(window).on("resize", M)
            }

            function L(t, e, i, n) {
                return v = n.size(e) - n.size(t), y = n.cursor(i) + n.position(t) - n.offset(t) - n.size(t) / 2, Math.max(0, Math.min(v, y))
            }

            function N(t) {
                TweenMax.set(t, {
                    clearProps: "width, height",
                    onCompleteScope: t,
                    onComplete: function () {
                        var t = this[0].getBoundingClientRect();
                        TweenMax.set(this, {
                            width: 2 * Math.round(t.width / 2),
                            height: 2 * Math.round(t.height / 2)
                        })
                    }
                })
            }

            function j() {
                N(i)
            }
        }
    }, {
        "./animSlurp": 12,
        "./mapRange": 18,
        "./requestAnimFrame.js": 20,
        "./throttle.js": 21,
        gsap: 4,
        "jquery-slim": 8
    }],
    11: [function (t, e, i) {
        "use strict";
        var n = t("jquery-slim");
        t("gsap"), e.exports = function (t) {
            var e = !0,
                i = void 0,
                r = window.outerWidth;

            function s(t) {
                e = !e, t.each(function (t) {
                    var i = (t + e) % 2 ? -1 : 1;
                    TweenMax.to(n(this), .6, {
                        x: 0,
                        y: 10 * i + (5 * Math.random() - 5),
                        ease: Power2.easeInOut
                    })
                }), r > 960 && TweenMax.delayedCall(1, s, [t])
            }

            function o(t) {
                e = !e, t.each(function (t) {
                    var i = (t + e) % 2 ? -1 : 1;
                    TweenMax.to(n(this), .6, {
                        y: 0,
                        x: 10 * i + (5 * Math.random() - 5),
                        ease: Power2.easeInOut
                    })
                }), window.matchMedia("(max-width: 580px)").matches && TweenMax.delayedCall(1, o, [t])
            }
            r > 960 ? (s(t), i = !1) : window.matchMedia("(max-width: 580px)").matches ? (o(t), i = !1) : i = !0, n(window).on("resize", function () {
                (r = window.outerWidth) < 960 && window.matchMedia("(min-width: 581px)").matches && !i ? (TweenMax.to(t, .6, {
                    x: 0,
                    ease: Power2.easeInOut
                }), i = !0) : r > 960 && i ? (i = !1, TweenMax.delayedCall(1, s, [t])) : window.matchMedia("(max-width: 580px)").matches && i && (i = !1, TweenMax.delayedCall(1, o, [t]))
            })
        }
    }, {
        gsap: 4,
        "jquery-slim": 8
    }],
    12: [function (t, e, i) {
        "use strict";
        t("gsap"), e.exports = function (t) {
            if (t.length) {
                for (var e = new TimelineMax({
                        paused: !0,
                        onComplete: function () {
                            e.pause(0)
                        }
                    }), i = 0, n = void 0, r = void 0, s = 0; s < 4; s++)
                    for (var o = 0; o < 4; o++) n = 33.333333 * o, r = 33.333333 * s, e.set(t, {
                        backgroundPosition: n + "% " + r + "%"
                    }, .03 * i), i++;
                return e
            }
        }
    }, {
        gsap: 4
    }],
    13: [function (t, e, i) {
        "use strict";
        t("jquery-slim");
        t("gsap"), e.exports = function (t) {
            var e = t.find(".music"),
                i = t.find(".big-voila > span"),
                n = t.find(".honey > span"),
                r = t.find(".ready > span"),
                s = new TimelineMax({
                    paused: !0
                }),
                o = new TimelineMax({
                    paused: !0,
                    onComplete: function () {
                        s.play(0)
                    }
                });
            return s.add([TweenMax.to(e, .2, {
                opacity: 1
            }), TweenMax.to(e, .6, {
                scale: 1,
                ease: Back.easeOut.config(1.5)
            }), TweenMax.staggerTo(i, .2, {
                y: 0,
                opacity: 1,
                ease: Power2.easeInOut,
                delay: .3
            }, .02), TweenMax.staggerTo(n, .25, {
                scale: 1,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                delay: .6
            }, .05), TweenMax.staggerTo(r, .25, {
                scale: 1,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                delay: .9
            }, .05)]), o.to(n, .2, {
                opacity: 0,
                ease: Power2.easeOut
            }).to(n, 0, {
                scale: .7,
                y: 15
            }).to(r, .2, {
                opacity: 0,
                ease: Power2.easeOut
            }).to(r, 0, {
                scale: .7,
                y: 15
            }).to(i, .1, {
                opacity: 0,
                ease: Power2.easeOut
            }).to(i, 0, {
                y: 15
            }).to(e, .1, {
                scale: .5,
                ease: Power2.easeOut,
                delay: -.1
            }).to(e, .05, {
                opacity: 0,
                ease: Power2.easeOut,
                delay: -.05
            }), o
        }
    }, {
        gsap: 4,
        "jquery-slim": 8
    }],
    14: [function (t, e, i) {
        "use strict";
        var n = t("jquery-slim");
        t("gsap");
        var r = t("./etVoila");
        e.exports = function (t) {
            var e = n(window).scrollTop(),
                i = !1;
            n(document).on("scroll", function () {
                window.matchMedia("(max-width: 960px)").matches && ((e = n(window).scrollTop()) + 150 >= t.offset().top && !i ? (r(t).play(0), i = !0) : e + 150 < t.offset().top && (i = !1))
            })
        }
    }, {
        "./etVoila": 13,
        gsap: 4,
        "jquery-slim": 8
    }],
    15: [function (t, e, i) {
        "use strict";
        var n = t("gsap"),
            r = t("jquery-slim"),
            s = t("./throttle.js");
        t("gsap"), e.exports = function (t, e) {
            var i = r(window).scrollTop(),
                o = !1;
            r(document).on("scroll", s(function () {
                i < r(window).scrollTop() && !o ? (o = !0, n.TweenMax.to(r("#frogLink"), .2, {
                    rotation: "-180deg"
                })) : i > r(window).scrollTop() && o && (o = !1, n.TweenMax.to(r("#frogLink"), .2, {
                    rotation: "0deg"
                })), t.hasClass("on") ? (n.TweenMax.set(t, {
                    className: "-=on"
                }), n.TweenMax.set(e, {
                    className: "+=on"
                })) : (n.TweenMax.set(t, {
                    className: "+=on"
                }), n.TweenMax.set(e, {
                    className: "-=on"
                })), i = r(window).scrollTop()
            }, 60))
        }
    }, {
        "./throttle.js": 21,
        gsap: 4,
        "jquery-slim": 8
    }],
    16: [function (t, e, i) {
        "use strict";
        var n = t("gsap"),
            r = t("jquery-slim");
        t("gsap"), window.requestAnimFrame = t("./requestAnimFrame.js");
        var s = t("./animSlurp"),
            o = void 0,
            a = void 0,
            l = void 0,
            h = void 0,
            u = !1,
            c = {},
            f = {},
            p = {},
            d = void 0,
            m = !1,
            _ = 0,
            g = 0,
            v = void 0,
            y = void 0,
            w = void 0,
            x = void 0,
            T = void 0,
            b = void 0,
            P = function () {
                m = !1, n.TweenMax.to(o, .3, {
                    opacity: 1
                })
            },
            k = function (t) {
                -0 !== t.alpha && 0 !== t.beta && -0 !== t.gamma && (c = {
                    alpha: t.alpha,
                    beta: t.beta,
                    gamma: t.gamma
                }, u = !0, n.TweenMax.set(o, {
                    top: "50%",
                    left: "50%"
                }), n.TweenMax.to(o, .3, {
                    opacity: 1
                }))
            },
            C = function (t) {
                var e, i, s, a, d, C;
                p = {
                    alpha: t.alpha,
                    beta: t.beta,
                    gamma: t.gamma
                }, u ? (e = p, i = h, (f = "portrait" === T ? {
                    beta: c.beta - e.beta | 0,
                    gamma: c.gamma - e.gamma | 0
                } : {
                    beta: -(c.gamma - e.gamma),
                    gamma: -(c.beta - e.beta)
                }).gamma > 75 || f.gamma < -75 || f.beta > 75 || f.beta < -75 ? n.TweenMax.to(i, .2, {
                    x: 0,
                    y: 0,
                    ease: Power2.easeInOut
                }) : i.each(function () {
                    var t = f.gamma / 10 * (4 * r(this).data("gyro")),
                        e = f.beta / 10 * (4 * r(this).data("gyro"));
                    n.TweenMax.to(r(this), .1, {
                        x: t,
                        y: e,
                        ease: Power2.easeInOut
                    })
                })) : k(p), s = p, a = void 0, d = o[0].getBoundingClientRect(), C = l[0].getBoundingClientRect(), a = "portrait" === T ? {
                    beta: c.beta - s.beta,
                    gamma: c.gamma - s.gamma
                } : {
                    beta: -(c.gamma - s.gamma),
                    gamma: -(c.beta - s.beta)
                }, v = 5 * -a.gamma, y = 5 * -a.beta, w = v === _ && y === g ? x : 180 * Math.atan2(y - g, v - _) / Math.PI, _ = v, g = y, x = w, n.TweenMax.to(o, .1, {
                    x: v,
                    y: y,
                    rotation: w
                }), d.left < C.left + C.width && d.left + d.width > C.left && d.top < C.top + C.height && d.height + d.top > C.top && !m && (b.play(0), n.TweenMax.set(o, {
                    opacity: 0
                }), m = !0, n.TweenMax.delayedCall(2, P))
            },
            S = function (t) {
                C(t)
            };
        e.exports = {
            init: function (t, e, i) {
                t.length && e && (o = i.find("#fly"), a = i.find("#frog"), l = i.find("#triggerFly"), b = s(a), h = t.find(".layer"), T = window.innerWidth > window.innerHeight ? "landscape" : "portrait", window.addEventListener("deviceorientation", S, !1), r(window).on("orientationchange", function () {
                    clearTimeout(d), T = window.innerWidth > window.innerHeight ? "landscape" : "portrait", d = setTimeout(function () {
                        k(p)
                    }, 1e3)
                }))
            },
            kill: function () {
                window.removeEventListener("deviceorientation", S, !1), n.TweenMax.killAll(), u = !1, m = !1
            }
        }
    }, {
        "./animSlurp": 12,
        "./requestAnimFrame.js": 20,
        gsap: 4,
        "jquery-slim": 8
    }],
    17: [function (t, e, i) {
        (function (e) {
            "use strict";
            var i = t("jquery-slim"),
                n = t("ismobilejs"),
                r = t("barba.js");
            t("gsap"), t("gsap/scrollToPlugin"), e.jQuery = i, t("imagesloaded").makeJQueryPlugin(i), i(function () {
                window.requestAnimFrame = t("./requestAnimFrame.js");
                var e = t("./throttle.js"),
                    s = t("./animFrog.js"),
                    o = t("./etVoilaMobile.js"),
                    a = t("./frogJump.js"),
                    l = t("./animBubble.js"),
                    h = t("./transitionIn.js"),
                    u = t("./recipe.js"),
                    c = t("./transition.js"),
                    f = t("./gyro.js"),
                    p = t("./animRefs.js"),
                    d = i("body"),
                    m = (window.outerWidth, i(window).height(), i("#load")),
                    _ = i("#firstO"),
                    g = i("#baseline");

                function v() {
                    window.outerWidth, i(window).height()
                }
                TweenMax.delayedCall(2, function () {
                    g.length && g.imagesLoaded(function () {
                        h(d, i(".barba-container"), m, _)
                    })
                });
                var y = function () {},
                    w = r.BaseView.extend({
                        namespace: "common",
                        onEnterCompleted: function () {
                            var t = i(this.container).find("#frogLink"),
                                e = t.find("#iconFrog"),
                                r = t.find("#iconFrog2"),
                                h = i(this.container).find("#visuFrog"),
                                c = i(this.container).find("#bubble1"),
                                d = i(this.container).find("#bubble2"),
                                m = i(this.container).find("#bubble3");
                            u(n.any, i(this.container).data("namespace")), a(e, r), s(h, n.any), o(i(this.container).find("#voila")), l(c, 5.4), l(d, 6.1), l(m, 9.3), p(i(this.container).find(".reference")), f.init(i(this.container).find("#baseline, #contact"), n.any, i(this.container)), i(this.container).find("#contactLink").on("mouseenter", function () {
                                TweenMax.to(i(this.container).find("#contactRect"), .6, {
                                    scale: .95,
                                    ease: Elastic.easeOut.config(1, .2)
                                })
                            }).on("mouseleave", function () {
                                TweenMax.to(i(this.container).find("#contactRect"), .1, {
                                    scale: 1,
                                    ease: Power1.easeInOut
                                })
                            }), i(this.container).find("#toRecipe").on("click", function (t) {
                                t.preventDefault(), TweenMax.to(window, .3, {
                                    scrollTo: "#recipe",
                                    offsetY: 50
                                })
                            }), i(this.container).find("#hashtag").on("click", function (t) {
                                t.preventDefault(), TweenMax.to(window, .3, {
                                    scrollTo: "#contact",
                                    offsetY: 50
                                })
                            })
                        },
                        onLeave: function () {
                            i(this.container).find("#contactLink").off(), i(this.container).find("#toRecipe").off(), i(this.container).find("#hashtag").off(), i(document).off("scroll"), i(window).off("resize"), i(window).off("orientationchange"), f.kill()
                        }
                    });
                w.extend({
                    namespace: "cuisine",
                    onEnterCompleted: function () {
                        w.onEnterCompleted.apply(this)
                    }
                }).init(), w.extend({
                    namespace: "cooking",
                    onEnterCompleted: function () {
                        w.onEnterCompleted.apply(this)
                    }
                }).init(), i("#barba-wrapper").length && (r.Pjax.start(), r.Pjax.getTransition = function () {
                    return c(m, _, d)
                }, r.Dispatcher.on("linkClicked", function (t) {
                    r.Pjax.getTransition = function () {
                        return c(m, _, d, i(t))
                    }
                })), n.any ? d.addClass("is-mobile") : d.addClass("is-desktop"), "complete" === document.readyState || i(window).on("load", y), i(window).on("resize", e(function () {
                    requestAnimFrame(v)
                }, 60)), i(window).on("beforeunload", function () {
                    i(window).scrollTop(0)
                })
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./animBubble.js": 9,
        "./animFrog.js": 10,
        "./animRefs.js": 11,
        "./etVoilaMobile.js": 14,
        "./frogJump.js": 15,
        "./gyro.js": 16,
        "./recipe.js": 19,
        "./requestAnimFrame.js": 20,
        "./throttle.js": 21,
        "./transition.js": 22,
        "./transitionIn.js": 23,
        "barba.js": 1,
        gsap: 4,
        "gsap/scrollToPlugin": 5,
        imagesloaded: 6,
        ismobilejs: 7,
        "jquery-slim": 8
    }],
    18: [function (t, e, i) {
        "use strict";
        e.exports = function (t, e, i, n, r) {
            return n + (r - n) * (t - e) / (i - e)
        }
    }, {}],
    19: [function (t, e, i) {
        "use strict";
        t("gsap");
        var n = t("jquery-slim");
        t("./throttle.js");
        t("gsap");
        var r = t("./etVoila");
        e.exports = function (t, e) {
            var i = n("#recipe"),
                s = n(".container-sheet"),
                o = (n('.container-sheet[data-sheet="1"]'), n('.container-sheet[data-sheet="2"]')),
                a = (n('.container-sheet[data-sheet="3"]'), n('.container-sheet[data-sheet="4"]'), n("#voila")),
                l = o.height();
            window.matchMedia("(max-width: 960px)").matches || t ? (n(".container-sheet>div").css("height", "auto"), s.removeClass("stuck").addClass("release")) : n(".container-sheet>div").css("height", l + "px");
            var h = [0, l, 2 * l, 3 * l],
                u = !1,
                c = 0,
                f = window.innerHeight,
                p = (window.outerWidth, i.offset().top),
                d = n(window).scrollTop(),
                m = (f - l) / 2,
                _ = function (t, e, i) {
                    s.each(function (s) {
                        var o = h[s];
                        i >= t - e + o ? (c < s + 1 && c++, n(this).hasClass("stuck") && !n(this).hasClass("release") && (n(this).removeClass("stuck").addClass("release"), 3 === s && r(a).play(0))) : c === s + 1 && (c--, n(this).addClass("stuck").removeClass("release"))
                    })
                },
                g = function () {
                    d = n(window).scrollTop(), p - m <= d ? (u || (u = !0, s.addClass("stuck").removeClass("release")), _(p, m, d)) : (u = !1, s.removeClass("stuck release"))
                };
            n(document).on("scroll", function () {
                window.matchMedia("(min-width: 961px)").matches && !t && g()
            }), n(window).on("resize", function () {
                l = o.height(), h = [0, l, 2 * l, 3 * l], u = !1, c = 0, f = window.innerHeight, window.outerWidth, p = i.offset().top, d = n(window).scrollTop(), m = (f - l) / 2, window.matchMedia("(max-width: 960px)").matches || t ? (n(".container-sheet>div").css("height", "auto"), s.removeClass("stuck").addClass("release")) : (n(".container-sheet>div").css("height", l + "px"), g())
            })
        }
    }, {
        "./etVoila": 13,
        "./throttle.js": 21,
        gsap: 4,
        "jquery-slim": 8
    }],
    20: [function (t, e, i) {
        "use strict";
        e.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }, {}],
    21: [function (t, e, i) {
        "use strict";
        e.exports = function (t, e) {
            var i, n;
            return function () {
                var r = this,
                    s = +new Date,
                    o = arguments;
                i && s < i + e ? (clearTimeout(n), n = setTimeout(function () {
                    i = s, t.apply(r, o)
                }, e)) : (i = s, t.apply(r, o))
            }
        }
    }, {}],
    22: [function (t, e, i) {
        "use strict";
        var n = t("jquery-slim"),
            r = t("barba.js");
        t("gsap");
        var s = t("./transitionIn.js");
        e.exports = function (t, e, i) {
            return r.BaseTransition.extend({
                start: function () {
                    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
                },
                fadeOut: function () {
                    var e = new TimelineMax;
                    n(this.oldContainer);
                    return new Promise(function (r, s) {
                        e.set(t, {
                            scaleY: 0
                        }).set(i, {
                            className: "+=off"
                        }).set(t, {
                            css: {
                                zIndex: 6,
                                display: "block"
                            }
                        }).set(t.find(".inner-load"), {
                            y: 50,
                            opacity: 0
                        }).to(t, 1, {
                            ease: Power4.easeInOut,
                            scaleY: 1
                        }).to(t.find(".inner-load"), 1, {
                            ease: Power4.easeInOut,
                            y: 0,
                            delay: -.8,
                            opacity: 1,
                            onComplete: function () {
                                n(window).scrollTop(0), r(!0)
                            }
                        })
                    })
                },
                fadeIn: function () {
                    var r = n(this.newContainer);
                    return TweenLite.set(r, {
                        visibility: "visible"
                    }), n(this.oldContainer).hide(), s(i, r, t, e, this)
                }
            })
        }
    }, {
        "./transitionIn.js": 23,
        "barba.js": 1,
        gsap: 4,
        "jquery-slim": 8
    }],
    23: [function (t, e, i) {
        "use strict";
        t("gsap");
        t("jquery-slim");
        e.exports = function (t, e, i, n, r) {
            new TimelineMax({
                onComplete: function () {
                    void 0 !== r && r.done()
                }
            }).set(i, {
                css: {
                    zIndex: -2
                }
            }).set(n, {
                scaleY: 0
            }).set(n, {
                css: {
                    display: "block"
                }
            }).to(n, 1, {
                ease: Power4.easeInOut,
                scaleY: 1
            }).set(e.find("#visuFrog"), {
                opacity: 1
            }).to(e.find("#secondO"), 1, {
                ease: Power4.easeInOut,
                scaleY: 0,
                transformOrigin: "center bottom"
            }).to(e.find("#baselineTxt"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                y: 0,
                delay: -1
            }).to(e.find("#headerLeft"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                y: 0,
                delay: -.5
            }).to(e.find("#headerRight"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                y: 0,
                delay: -.6
            }).to(e.find("#lateralLeft"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                x: 0,
                delay: -1
            }).to(e.find("#lateralRight"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                x: 0,
                delay: -1
            }).set(t, {
                className: "-=off"
            }).set(e.find("#firstO, #secondO"), {
                css: {
                    display: "none"
                }
            }).set(i, {
                css: {
                    display: "none"
                }
            }).to(e.find("#recipe"), 1, {
                ease: Power4.easeInOut,
                opacity: 1,
                delay: -.4
            })
        }
    }, {
        gsap: 4,
        "jquery-slim": 8
    }]
}, {}, [17]);