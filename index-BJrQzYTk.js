(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) s(d);
    new MutationObserver(d => {
        for (const h of d)
            if (h.type === "childList")
                for (const b of h.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && s(b)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(d) {
        const h = {};
        return d.integrity && (h.integrity = d.integrity), d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? h.credentials = "include" : d.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h
    }

    function s(d) {
        if (d.ep) return;
        d.ep = !0;
        const h = r(d);
        fetch(d.href, h)
    }
})();
var Ms = {
        exports: {}
    },
    jn = {};
var Wd;

function s1() {
    if (Wd) return jn;
    Wd = 1;
    var c = Symbol.for("react.transitional.element"),
        o = Symbol.for("react.fragment");

    function r(s, d, h) {
        var b = null;
        if (h !== void 0 && (b = "" + h), d.key !== void 0 && (b = "" + d.key), "key" in d) {
            h = {};
            for (var _ in d) _ !== "key" && (h[_] = d[_])
        } else h = d;
        return d = h.ref, {
            $$typeof: c,
            type: s,
            key: b,
            ref: d !== void 0 ? d : null,
            props: h
        }
    }
    return jn.Fragment = o, jn.jsx = r, jn.jsxs = r, jn
}
var Id;

function f1() {
    return Id || (Id = 1, Ms.exports = s1()), Ms.exports
}
var y = f1(),
    _s = {
        exports: {}
    },
    W = {};
var Pd;

function o1() {
    if (Pd) return W;
    Pd = 1;
    var c = Symbol.for("react.transitional.element"),
        o = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        d = Symbol.for("react.profiler"),
        h = Symbol.for("react.consumer"),
        b = Symbol.for("react.context"),
        _ = Symbol.for("react.forward_ref"),
        S = Symbol.for("react.suspense"),
        v = Symbol.for("react.memo"),
        O = Symbol.for("react.lazy"),
        T = Symbol.for("react.activity"),
        B = Symbol.iterator;

    function K(g) {
        return g === null || typeof g != "object" ? null : (g = B && g[B] || g["@@iterator"], typeof g == "function" ? g : null)
    }
    var Z = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        X = Object.assign,
        U = {};

    function J(g, H, q) {
        this.props = g, this.context = H, this.refs = U, this.updater = q || Z
    }
    J.prototype.isReactComponent = {}, J.prototype.setState = function(g, H) {
        if (typeof g != "object" && typeof g != "function" && g != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, H, "setState")
    }, J.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate")
    };

    function tt() {}
    tt.prototype = J.prototype;

    function k(g, H, q) {
        this.props = g, this.context = H, this.refs = U, this.updater = q || Z
    }
    var gt = k.prototype = new tt;
    gt.constructor = k, X(gt, J.prototype), gt.isPureReactComponent = !0;
    var xt = Array.isArray;

    function Nt() {}
    var F = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        Rt = Object.prototype.hasOwnProperty;

    function Jt(g, H, q) {
        var G = q.ref;
        return {
            $$typeof: c,
            type: g,
            key: H,
            ref: G !== void 0 ? G : null,
            props: q
        }
    }

    function Oe(g, H) {
        return Jt(g.type, H, g.props)
    }

    function ye(g) {
        return typeof g == "object" && g !== null && g.$$typeof === c
    }

    function kt(g) {
        var H = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + g.replace(/[=:]/g, function(q) {
            return H[q]
        })
    }
    var De = /\/+/g;

    function ve(g, H) {
        return typeof g == "object" && g !== null && g.key != null ? kt("" + g.key) : H.toString(36)
    }

    function Dt(g) {
        switch (g.status) {
            case "fulfilled":
                return g.value;
            case "rejected":
                throw g.reason;
            default:
                switch (typeof g.status == "string" ? g.then(Nt, Nt) : (g.status = "pending", g.then(function(H) {
                        g.status === "pending" && (g.status = "fulfilled", g.value = H)
                    }, function(H) {
                        g.status === "pending" && (g.status = "rejected", g.reason = H)
                    })), g.status) {
                    case "fulfilled":
                        return g.value;
                    case "rejected":
                        throw g.reason
                }
        }
        throw g
    }

    function j(g, H, q, G, I) {
        var lt = typeof g;
        (lt === "undefined" || lt === "boolean") && (g = null);
        var rt = !1;
        if (g === null) rt = !0;
        else switch (lt) {
            case "bigint":
            case "string":
            case "number":
                rt = !0;
                break;
            case "object":
                switch (g.$$typeof) {
                    case c:
                    case o:
                        rt = !0;
                        break;
                    case O:
                        return rt = g._init, j(rt(g._payload), H, q, G, I)
                }
        }
        if (rt) return I = I(g), rt = G === "" ? "." + ve(g, 0) : G, xt(I) ? (q = "", rt != null && (q = rt.replace(De, "$&/") + "/"), j(I, H, q, "", function(wa) {
            return wa
        })) : I != null && (ye(I) && (I = Oe(I, q + (I.key == null || g && g.key === I.key ? "" : ("" + I.key).replace(De, "$&/") + "/") + rt)), H.push(I)), 1;
        rt = 0;
        var Ft = G === "" ? "." : G + ":";
        if (xt(g))
            for (var jt = 0; jt < g.length; jt++) G = g[jt], lt = Ft + ve(G, jt), rt += j(G, H, q, lt, I);
        else if (jt = K(g), typeof jt == "function")
            for (g = jt.call(g), jt = 0; !(G = g.next()).done;) G = G.value, lt = Ft + ve(G, jt++), rt += j(G, H, q, lt, I);
        else if (lt === "object") {
            if (typeof g.then == "function") return j(Dt(g), H, q, G, I);
            throw H = String(g), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.")
        }
        return rt
    }

    function w(g, H, q) {
        if (g == null) return g;
        var G = [],
            I = 0;
        return j(g, G, "", "", function(lt) {
            return H.call(q, lt, I++)
        }), G
    }

    function $(g) {
        if (g._status === -1) {
            var H = g._result;
            H = H(), H.then(function(q) {
                (g._status === 0 || g._status === -1) && (g._status = 1, g._result = q)
            }, function(q) {
                (g._status === 0 || g._status === -1) && (g._status = 2, g._result = q)
            }), g._status === -1 && (g._status = 0, g._result = H)
        }
        if (g._status === 1) return g._result.default;
        throw g._result
    }
    var mt = typeof reportError == "function" ? reportError : function(g) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var H = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
                    error: g
                });
                if (!window.dispatchEvent(H)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", g);
                return
            }
            console.error(g)
        },
        bt = {
            map: w,
            forEach: function(g, H, q) {
                w(g, function() {
                    H.apply(this, arguments)
                }, q)
            },
            count: function(g) {
                var H = 0;
                return w(g, function() {
                    H++
                }), H
            },
            toArray: function(g) {
                return w(g, function(H) {
                    return H
                }) || []
            },
            only: function(g) {
                if (!ye(g)) throw Error("React.Children.only expected to receive a single React element child.");
                return g
            }
        };
    return W.Activity = T, W.Children = bt, W.Component = J, W.Fragment = r, W.Profiler = d, W.PureComponent = k, W.StrictMode = s, W.Suspense = S, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, W.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(g) {
            return F.H.useMemoCache(g)
        }
    }, W.cache = function(g) {
        return function() {
            return g.apply(null, arguments)
        }
    }, W.cacheSignal = function() {
        return null
    }, W.cloneElement = function(g, H, q) {
        if (g == null) throw Error("The argument must be a React element, but you passed " + g + ".");
        var G = X({}, g.props),
            I = g.key;
        if (H != null)
            for (lt in H.key !== void 0 && (I = "" + H.key), H) !Rt.call(H, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && H.ref === void 0 || (G[lt] = H[lt]);
        var lt = arguments.length - 2;
        if (lt === 1) G.children = q;
        else if (1 < lt) {
            for (var rt = Array(lt), Ft = 0; Ft < lt; Ft++) rt[Ft] = arguments[Ft + 2];
            G.children = rt
        }
        return Jt(g.type, I, G)
    }, W.createContext = function(g) {
        return g = {
            $$typeof: b,
            _currentValue: g,
            _currentValue2: g,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, g.Provider = g, g.Consumer = {
            $$typeof: h,
            _context: g
        }, g
    }, W.createElement = function(g, H, q) {
        var G, I = {},
            lt = null;
        if (H != null)
            for (G in H.key !== void 0 && (lt = "" + H.key), H) Rt.call(H, G) && G !== "key" && G !== "__self" && G !== "__source" && (I[G] = H[G]);
        var rt = arguments.length - 2;
        if (rt === 1) I.children = q;
        else if (1 < rt) {
            for (var Ft = Array(rt), jt = 0; jt < rt; jt++) Ft[jt] = arguments[jt + 2];
            I.children = Ft
        }
        if (g && g.defaultProps)
            for (G in rt = g.defaultProps, rt) I[G] === void 0 && (I[G] = rt[G]);
        return Jt(g, lt, I)
    }, W.createRef = function() {
        return {
            current: null
        }
    }, W.forwardRef = function(g) {
        return {
            $$typeof: _,
            render: g
        }
    }, W.isValidElement = ye, W.lazy = function(g) {
        return {
            $$typeof: O,
            _payload: {
                _status: -1,
                _result: g
            },
            _init: $
        }
    }, W.memo = function(g, H) {
        return {
            $$typeof: v,
            type: g,
            compare: H === void 0 ? null : H
        }
    }, W.startTransition = function(g) {
        var H = F.T,
            q = {};
        F.T = q;
        try {
            var G = g(),
                I = F.S;
            I !== null && I(q, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(Nt, mt)
        } catch (lt) {
            mt(lt)
        } finally {
            H !== null && q.types !== null && (H.types = q.types), F.T = H
        }
    }, W.unstable_useCacheRefresh = function() {
        return F.H.useCacheRefresh()
    }, W.use = function(g) {
        return F.H.use(g)
    }, W.useActionState = function(g, H, q) {
        return F.H.useActionState(g, H, q)
    }, W.useCallback = function(g, H) {
        return F.H.useCallback(g, H)
    }, W.useContext = function(g) {
        return F.H.useContext(g)
    }, W.useDebugValue = function() {}, W.useDeferredValue = function(g, H) {
        return F.H.useDeferredValue(g, H)
    }, W.useEffect = function(g, H) {
        return F.H.useEffect(g, H)
    }, W.useEffectEvent = function(g) {
        return F.H.useEffectEvent(g)
    }, W.useId = function() {
        return F.H.useId()
    }, W.useImperativeHandle = function(g, H, q) {
        return F.H.useImperativeHandle(g, H, q)
    }, W.useInsertionEffect = function(g, H) {
        return F.H.useInsertionEffect(g, H)
    }, W.useLayoutEffect = function(g, H) {
        return F.H.useLayoutEffect(g, H)
    }, W.useMemo = function(g, H) {
        return F.H.useMemo(g, H)
    }, W.useOptimistic = function(g, H) {
        return F.H.useOptimistic(g, H)
    }, W.useReducer = function(g, H, q) {
        return F.H.useReducer(g, H, q)
    }, W.useRef = function(g) {
        return F.H.useRef(g)
    }, W.useState = function(g) {
        return F.H.useState(g)
    }, W.useSyncExternalStore = function(g, H, q) {
        return F.H.useSyncExternalStore(g, H, q)
    }, W.useTransition = function() {
        return F.H.useTransition()
    }, W.version = "19.2.3", W
}
var th;

function qs() {
    return th || (th = 1, _s.exports = o1()), _s.exports
}
var M = qs(),
    Rs = {
        exports: {}
    },
    Cn = {},
    js = {
        exports: {}
    },
    Cs = {};
var eh;

function r1() {
    return eh || (eh = 1, (function(c) {
        function o(j, w) {
            var $ = j.length;
            j.push(w);
            t: for (; 0 < $;) {
                var mt = $ - 1 >>> 1,
                    bt = j[mt];
                if (0 < d(bt, w)) j[mt] = w, j[$] = bt, $ = mt;
                else break t
            }
        }

        function r(j) {
            return j.length === 0 ? null : j[0]
        }

        function s(j) {
            if (j.length === 0) return null;
            var w = j[0],
                $ = j.pop();
            if ($ !== w) {
                j[0] = $;
                t: for (var mt = 0, bt = j.length, g = bt >>> 1; mt < g;) {
                    var H = 2 * (mt + 1) - 1,
                        q = j[H],
                        G = H + 1,
                        I = j[G];
                    if (0 > d(q, $)) G < bt && 0 > d(I, q) ? (j[mt] = I, j[G] = $, mt = G) : (j[mt] = q, j[H] = $, mt = H);
                    else if (G < bt && 0 > d(I, $)) j[mt] = I, j[G] = $, mt = G;
                    else break t
                }
            }
            return w
        }

        function d(j, w) {
            var $ = j.sortIndex - w.sortIndex;
            return $ !== 0 ? $ : j.id - w.id
        }
        if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            c.unstable_now = function() {
                return h.now()
            }
        } else {
            var b = Date,
                _ = b.now();
            c.unstable_now = function() {
                return b.now() - _
            }
        }
        var S = [],
            v = [],
            O = 1,
            T = null,
            B = 3,
            K = !1,
            Z = !1,
            X = !1,
            U = !1,
            J = typeof setTimeout == "function" ? setTimeout : null,
            tt = typeof clearTimeout == "function" ? clearTimeout : null,
            k = typeof setImmediate < "u" ? setImmediate : null;

        function gt(j) {
            for (var w = r(v); w !== null;) {
                if (w.callback === null) s(v);
                else if (w.startTime <= j) s(v), w.sortIndex = w.expirationTime, o(S, w);
                else break;
                w = r(v)
            }
        }

        function xt(j) {
            if (X = !1, gt(j), !Z)
                if (r(S) !== null) Z = !0, Nt || (Nt = !0, kt());
                else {
                    var w = r(v);
                    w !== null && Dt(xt, w.startTime - j)
                }
        }
        var Nt = !1,
            F = -1,
            Rt = 5,
            Jt = -1;

        function Oe() {
            return U ? !0 : !(c.unstable_now() - Jt < Rt)
        }

        function ye() {
            if (U = !1, Nt) {
                var j = c.unstable_now();
                Jt = j;
                var w = !0;
                try {
                    t: {
                        Z = !1,
                        X && (X = !1, tt(F), F = -1),
                        K = !0;
                        var $ = B;
                        try {
                            e: {
                                for (gt(j), T = r(S); T !== null && !(T.expirationTime > j && Oe());) {
                                    var mt = T.callback;
                                    if (typeof mt == "function") {
                                        T.callback = null, B = T.priorityLevel;
                                        var bt = mt(T.expirationTime <= j);
                                        if (j = c.unstable_now(), typeof bt == "function") {
                                            T.callback = bt, gt(j), w = !0;
                                            break e
                                        }
                                        T === r(S) && s(S), gt(j)
                                    } else s(S);
                                    T = r(S)
                                }
                                if (T !== null) w = !0;
                                else {
                                    var g = r(v);
                                    g !== null && Dt(xt, g.startTime - j), w = !1
                                }
                            }
                            break t
                        }
                        finally {
                            T = null, B = $, K = !1
                        }
                        w = void 0
                    }
                }
                finally {
                    w ? kt() : Nt = !1
                }
            }
        }
        var kt;
        if (typeof k == "function") kt = function() {
            k(ye)
        };
        else if (typeof MessageChannel < "u") {
            var De = new MessageChannel,
                ve = De.port2;
            De.port1.onmessage = ye, kt = function() {
                ve.postMessage(null)
            }
        } else kt = function() {
            J(ye, 0)
        };

        function Dt(j, w) {
            F = J(function() {
                j(c.unstable_now())
            }, w)
        }
        c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(j) {
            j.callback = null
        }, c.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rt = 0 < j ? Math.floor(1e3 / j) : 5
        }, c.unstable_getCurrentPriorityLevel = function() {
            return B
        }, c.unstable_next = function(j) {
            switch (B) {
                case 1:
                case 2:
                case 3:
                    var w = 3;
                    break;
                default:
                    w = B
            }
            var $ = B;
            B = w;
            try {
                return j()
            } finally {
                B = $
            }
        }, c.unstable_requestPaint = function() {
            U = !0
        }, c.unstable_runWithPriority = function(j, w) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3
            }
            var $ = B;
            B = j;
            try {
                return w()
            } finally {
                B = $
            }
        }, c.unstable_scheduleCallback = function(j, w, $) {
            var mt = c.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? mt + $ : mt) : $ = mt, j) {
                case 1:
                    var bt = -1;
                    break;
                case 2:
                    bt = 250;
                    break;
                case 5:
                    bt = 1073741823;
                    break;
                case 4:
                    bt = 1e4;
                    break;
                default:
                    bt = 5e3
            }
            return bt = $ + bt, j = {
                id: O++,
                callback: w,
                priorityLevel: j,
                startTime: $,
                expirationTime: bt,
                sortIndex: -1
            }, $ > mt ? (j.sortIndex = $, o(v, j), r(S) === null && j === r(v) && (X ? (tt(F), F = -1) : X = !0, Dt(xt, $ - mt))) : (j.sortIndex = bt, o(S, j), Z || K || (Z = !0, Nt || (Nt = !0, kt()))), j
        }, c.unstable_shouldYield = Oe, c.unstable_wrapCallback = function(j) {
            var w = B;
            return function() {
                var $ = B;
                B = w;
                try {
                    return j.apply(this, arguments)
                } finally {
                    B = $
                }
            }
        }
    })(Cs)), Cs
}
var lh;

function d1() {
    return lh || (lh = 1, js.exports = r1()), js.exports
}
var Os = {
        exports: {}
    },
    $t = {};
var ah;

function h1() {
    if (ah) return $t;
    ah = 1;
    var c = qs();

    function o(S) {
        var v = "https://react.dev/errors/" + S;
        if (1 < arguments.length) {
            v += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var O = 2; O < arguments.length; O++) v += "&args[]=" + encodeURIComponent(arguments[O])
        }
        return "Minified React error #" + S + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r() {}
    var s = {
            d: {
                f: r,
                r: function() {
                    throw Error(o(522))
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        },
        d = Symbol.for("react.portal");

    function h(S, v, O) {
        var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: d,
            key: T == null ? null : "" + T,
            children: S,
            containerInfo: v,
            implementation: O
        }
    }
    var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function _(S, v) {
        if (S === "font") return "";
        if (typeof v == "string") return v === "use-credentials" ? v : ""
    }
    return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, $t.createPortal = function(S, v) {
        var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(o(299));
        return h(S, v, null, O)
    }, $t.flushSync = function(S) {
        var v = b.T,
            O = s.p;
        try {
            if (b.T = null, s.p = 2, S) return S()
        } finally {
            b.T = v, s.p = O, s.d.f()
        }
    }, $t.preconnect = function(S, v) {
        typeof S == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(S, v))
    }, $t.prefetchDNS = function(S) {
        typeof S == "string" && s.d.D(S)
    }, $t.preinit = function(S, v) {
        if (typeof S == "string" && v && typeof v.as == "string") {
            var O = v.as,
                T = _(O, v.crossOrigin),
                B = typeof v.integrity == "string" ? v.integrity : void 0,
                K = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
            O === "style" ? s.d.S(S, typeof v.precedence == "string" ? v.precedence : void 0, {
                crossOrigin: T,
                integrity: B,
                fetchPriority: K
            }) : O === "script" && s.d.X(S, {
                crossOrigin: T,
                integrity: B,
                fetchPriority: K,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0
            })
        }
    }, $t.preinitModule = function(S, v) {
        if (typeof S == "string")
            if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var O = _(v.as, v.crossOrigin);
                    s.d.M(S, {
                        crossOrigin: O,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    })
                }
            } else v == null && s.d.M(S)
    }, $t.preload = function(S, v) {
        if (typeof S == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
            var O = v.as,
                T = _(O, v.crossOrigin);
            s.d.L(S, O, {
                crossOrigin: T,
                integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                type: typeof v.type == "string" ? v.type : void 0,
                fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                media: typeof v.media == "string" ? v.media : void 0
            })
        }
    }, $t.preloadModule = function(S, v) {
        if (typeof S == "string")
            if (v) {
                var O = _(v.as, v.crossOrigin);
                s.d.m(S, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: O,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                })
            } else s.d.m(S)
    }, $t.requestFormReset = function(S) {
        s.d.r(S)
    }, $t.unstable_batchedUpdates = function(S, v) {
        return S(v)
    }, $t.useFormState = function(S, v, O) {
        return b.H.useFormState(S, v, O)
    }, $t.useFormStatus = function() {
        return b.H.useHostTransitionStatus()
    }, $t.version = "19.2.3", $t
}
var nh;

function m1() {
    if (nh) return Os.exports;
    nh = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (o) {
            console.error(o)
        }
    }
    return c(), Os.exports = h1(), Os.exports
}
var uh;

function y1() {
    if (uh) return Cn;
    uh = 1;
    var c = d1(),
        o = qs(),
        r = m1();

    function s(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function d(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function h(t) {
        var e = t,
            l = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? l : null
    }

    function b(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function _(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function S(t) {
        if (h(t) !== t) throw Error(s(188))
    }

    function v(t) {
        var e = t.alternate;
        if (!e) {
            if (e = h(t), e === null) throw Error(s(188));
            return e !== t ? null : t
        }
        for (var l = t, a = e;;) {
            var n = l.return;
            if (n === null) break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return, a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u;) {
                    if (u === l) return S(n), t;
                    if (u === a) return S(n), e;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (l.return !== a.return) l = n, a = u;
            else {
                for (var i = !1, f = n.child; f;) {
                    if (f === l) {
                        i = !0, l = n, a = u;
                        break
                    }
                    if (f === a) {
                        i = !0, a = n, l = u;
                        break
                    }
                    f = f.sibling
                }
                if (!i) {
                    for (f = u.child; f;) {
                        if (f === l) {
                            i = !0, l = u, a = n;
                            break
                        }
                        if (f === a) {
                            i = !0, a = u, l = n;
                            break
                        }
                        f = f.sibling
                    }
                    if (!i) throw Error(s(189))
                }
            }
            if (l.alternate !== a) throw Error(s(190))
        }
        if (l.tag !== 3) throw Error(s(188));
        return l.stateNode.current === l ? t : e
    }

    function O(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = O(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var T = Object.assign,
        B = Symbol.for("react.element"),
        K = Symbol.for("react.transitional.element"),
        Z = Symbol.for("react.portal"),
        X = Symbol.for("react.fragment"),
        U = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        tt = Symbol.for("react.consumer"),
        k = Symbol.for("react.context"),
        gt = Symbol.for("react.forward_ref"),
        xt = Symbol.for("react.suspense"),
        Nt = Symbol.for("react.suspense_list"),
        F = Symbol.for("react.memo"),
        Rt = Symbol.for("react.lazy"),
        Jt = Symbol.for("react.activity"),
        Oe = Symbol.for("react.memo_cache_sentinel"),
        ye = Symbol.iterator;

    function kt(t) {
        return t === null || typeof t != "object" ? null : (t = ye && t[ye] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var De = Symbol.for("react.client.reference");

    function ve(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === De ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case X:
                return "Fragment";
            case J:
                return "Profiler";
            case U:
                return "StrictMode";
            case xt:
                return "Suspense";
            case Nt:
                return "SuspenseList";
            case Jt:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case Z:
                return "Portal";
            case k:
                return t.displayName || "Context";
            case tt:
                return (t._context.displayName || "Context") + ".Consumer";
            case gt:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case F:
                return e = t.displayName || null, e !== null ? e : ve(t.type) || "Memo";
            case Rt:
                e = t._payload, t = t._init;
                try {
                    return ve(t(e))
                } catch {}
        }
        return null
    }
    var Dt = Array.isArray,
        j = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        w = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        $ = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        mt = [],
        bt = -1;

    function g(t) {
        return {
            current: t
        }
    }

    function H(t) {
        0 > bt || (t.current = mt[bt], mt[bt] = null, bt--)
    }

    function q(t, e) {
        bt++, mt[bt] = t.current, t.current = e
    }
    var G = g(null),
        I = g(null),
        lt = g(null),
        rt = g(null);

    function Ft(t, e) {
        switch (q(lt, e), q(I, t), q(G, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? bd(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = bd(e), t = Sd(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        H(G), q(G, t)
    }

    function jt() {
        H(G), H(I), H(lt)
    }

    function wa(t) {
        t.memoizedState !== null && q(rt, t);
        var e = G.current,
            l = Sd(e, t.type);
        e !== l && (q(I, t), q(G, l))
    }

    function Bn(t) {
        I.current === t && (H(G), H(I)), rt.current === t && (H(rt), Nn._currentValue = $)
    }
    var fi, ks;

    function Cl(t) {
        if (fi === void 0) try {
            throw Error()
        } catch (l) {
            var e = l.stack.trim().match(/\n( *(at )?)/);
            fi = e && e[1] || "", ks = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + fi + t + ks
    }
    var oi = !1;

    function ri(t, e) {
        if (!t || oi) return "";
        oi = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var D = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(D.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(D, [])
                                } catch (N) {
                                    var z = N
                                }
                                Reflect.construct(t, [], D)
                            } else {
                                try {
                                    D.call()
                                } catch (N) {
                                    z = N
                                }
                                t.call(D.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (N) {
                                z = N
                            }(D = t()) && typeof D.catch == "function" && D.catch(function() {})
                        }
                    } catch (N) {
                        if (N && z && typeof N.stack == "string") return [N.stack, z.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot(),
                i = u[0],
                f = u[1];
            if (i && f) {
                var m = i.split(`
`),
                    A = f.split(`
`);
                for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");) a++;
                for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot");) n++;
                if (a === m.length || n === A.length)
                    for (a = m.length - 1, n = A.length - 1; 1 <= a && 0 <= n && m[a] !== A[n];) n--;
                for (; 1 <= a && 0 <= n; a--, n--)
                    if (m[a] !== A[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--, n--, 0 > n || m[a] !== A[n]) {
                                    var R = `
` + m[a].replace(" at new ", " at ");
                                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R
                                } while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            oi = !1, Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? Cl(l) : ""
    }

    function Lh(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Cl(t.type);
            case 16:
                return Cl("Lazy");
            case 13:
                return t.child !== e && e !== null ? Cl("Suspense Fallback") : Cl("Suspense");
            case 19:
                return Cl("SuspenseList");
            case 0:
            case 15:
                return ri(t.type, !1);
            case 11:
                return ri(t.type.render, !1);
            case 1:
                return ri(t.type, !0);
            case 31:
                return Cl("Activity");
            default:
                return ""
        }
    }

    function $s(t) {
        try {
            var e = "",
                l = null;
            do e += Lh(t, l), l = t, t = t.return; while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var di = Object.prototype.hasOwnProperty,
        hi = c.unstable_scheduleCallback,
        mi = c.unstable_cancelCallback,
        Gh = c.unstable_shouldYield,
        Yh = c.unstable_requestPaint,
        ue = c.unstable_now,
        Xh = c.unstable_getCurrentPriorityLevel,
        Fs = c.unstable_ImmediatePriority,
        Ws = c.unstable_UserBlockingPriority,
        qn = c.unstable_NormalPriority,
        Qh = c.unstable_LowPriority,
        Is = c.unstable_IdlePriority,
        Zh = c.log,
        Vh = c.unstable_setDisableYieldValue,
        Ba = null,
        ie = null;

    function il(t) {
        if (typeof Zh == "function" && Vh(t), ie && typeof ie.setStrictMode == "function") try {
            ie.setStrictMode(Ba, t)
        } catch {}
    }
    var ce = Math.clz32 ? Math.clz32 : kh,
        Kh = Math.log,
        Jh = Math.LN2;

    function kh(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Kh(t) / Jh | 0) | 0
    }
    var Ln = 256,
        Gn = 262144,
        Yn = 4194304;

    function Ol(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function Xn(t, e, l) {
        var a = t.pendingLanes;
        if (a === 0) return 0;
        var n = 0,
            u = t.suspendedLanes,
            i = t.pingedLanes;
        t = t.warmLanes;
        var f = a & 134217727;
        return f !== 0 ? (a = f & ~u, a !== 0 ? n = Ol(a) : (i &= f, i !== 0 ? n = Ol(i) : l || (l = f & ~t, l !== 0 && (n = Ol(l))))) : (f = a & ~u, f !== 0 ? n = Ol(f) : i !== 0 ? n = Ol(i) : l || (l = a & ~t, l !== 0 && (n = Ol(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
    }

    function qa(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function $h(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ps() {
        var t = Yn;
        return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), t
    }

    function yi(t) {
        for (var e = [], l = 0; 31 > l; l++) e.push(t);
        return e
    }

    function La(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function Fh(t, e, l, a, n, u) {
        var i = t.pendingLanes;
        t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
        var f = t.entanglements,
            m = t.expirationTimes,
            A = t.hiddenUpdates;
        for (l = i & ~l; 0 < l;) {
            var R = 31 - ce(l),
                D = 1 << R;
            f[R] = 0, m[R] = -1;
            var z = A[R];
            if (z !== null)
                for (A[R] = null, R = 0; R < z.length; R++) {
                    var N = z[R];
                    N !== null && (N.lane &= -536870913)
                }
            l &= ~D
        }
        a !== 0 && tf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e))
    }

    function tf(t, e, l) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var a = 31 - ce(e);
        t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930
    }

    function ef(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l;) {
            var a = 31 - ce(l),
                n = 1 << a;
            n & e | t[a] & e && (t[a] |= e), l &= ~n
        }
    }

    function lf(t, e) {
        var l = e & -e;
        return l = (l & 42) !== 0 ? 1 : vi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    }

    function vi(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function pi(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function af() {
        var t = w.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Zd(t.type))
    }

    function nf(t, e) {
        var l = w.p;
        try {
            return w.p = t, e()
        } finally {
            w.p = l
        }
    }
    var cl = Math.random().toString(36).slice(2),
        Xt = "__reactFiber$" + cl,
        It = "__reactProps$" + cl,
        Fl = "__reactContainer$" + cl,
        gi = "__reactEvents$" + cl,
        Wh = "__reactListeners$" + cl,
        Ih = "__reactHandles$" + cl,
        uf = "__reactResources$" + cl,
        Ga = "__reactMarker$" + cl;

    function xi(t) {
        delete t[Xt], delete t[It], delete t[gi], delete t[Wh], delete t[Ih]
    }

    function Wl(t) {
        var e = t[Xt];
        if (e) return e;
        for (var l = t.parentNode; l;) {
            if (e = l[Fl] || l[Xt]) {
                if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
                    for (t = _d(t); t !== null;) {
                        if (l = t[Xt]) return l;
                        t = _d(t)
                    }
                return e
            }
            t = l, l = t.parentNode
        }
        return null
    }

    function Il(t) {
        if (t = t[Xt] || t[Fl]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function Ya(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(s(33))
    }

    function Pl(t) {
        var e = t[uf];
        return e || (e = t[uf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Gt(t) {
        t[Ga] = !0
    }
    var cf = new Set,
        sf = {};

    function Dl(t, e) {
        ta(t, e), ta(t + "Capture", e)
    }

    function ta(t, e) {
        for (sf[t] = e, t = 0; t < e.length; t++) cf.add(e[t])
    }
    var Ph = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        ff = {},
        of = {};

    function tm(t) {
        return di.call(of, t) ? !0 : di.call(ff, t) ? !1 : Ph.test(t) ? of [t] = !0 : (ff[t] = !0, !1)
    }

    function Qn(t, e, l) {
        if (tm(e))
            if (l === null) t.removeAttribute(e);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var a = e.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + l)
            }
    }

    function Zn(t, e, l) {
        if (l === null) t.removeAttribute(e);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + l)
        }
    }

    function Le(t, e, l, a) {
        if (a === null) t.removeAttribute(l);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(l);
                    return
            }
            t.setAttributeNS(e, l, "" + a)
        }
    }

    function pe(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function rf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function em(t, e, l) {
        var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get,
                u = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(i) {
                    l = "" + i, u.call(this, i)
                }
            }), Object.defineProperty(t, e, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(i) {
                    l = "" + i
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function bi(t) {
        if (!t._valueTracker) {
            var e = rf(t) ? "checked" : "value";
            t._valueTracker = em(t, e, "" + t[e])
        }
    }

    function df(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var l = e.getValue(),
            a = "";
        return t && (a = rf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1
    }

    function Vn(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var lm = /[\n"\\]/g;

    function ge(t) {
        return t.replace(lm, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function Si(t, e, l, a, n, u, i, f) {
        t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + pe(e)) : t.value !== "" + pe(e) && (t.value = "" + pe(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Ei(t, i, pe(e)) : l != null ? Ei(t, i, pe(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + pe(f) : t.removeAttribute("name")
    }

    function hf(t, e, l, a, n, u, i, f) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                bi(t);
                return
            }
            l = l != null ? "" + pe(l) : "", e = e != null ? "" + pe(e) : l, f || e === t.value || (t.value = e), t.defaultValue = e
        }
        a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), bi(t)
    }

    function Ei(t, e, l) {
        e === "number" && Vn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }

    function ea(t, e, l, a) {
        if (t = t.options, e) {
            e = {};
            for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
            for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + pe(l), e = null, n = 0; n < t.length; n++) {
                if (t[n].value === l) {
                    t[n].selected = !0, a && (t[n].defaultSelected = !0);
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }

    function mf(t, e, l) {
        if (e != null && (e = "" + pe(e), e !== t.value && (t.value = e), l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + pe(l) : ""
    }

    function yf(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null) throw Error(s(92));
                if (Dt(a)) {
                    if (1 < a.length) throw Error(s(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""), e = l
        }
        l = pe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), bi(t)
    }

    function la(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var am = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function vf(t, e, l) {
        var a = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || am.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }

    function pf(t, e, l) {
        if (e != null && typeof e != "object") throw Error(s(62));
        if (t = t.style, l != null) {
            for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && vf(t, n, a)
        } else
            for (var u in e) e.hasOwnProperty(u) && vf(t, u, e[u])
    }

    function Ai(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var nm = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        um = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Kn(t) {
        return um.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function Ge() {}
    var zi = null;

    function Ti(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var aa = null,
        na = null;

    function gf(t) {
        var e = Il(t);
        if (e && (t = e.stateNode)) {
            var l = t[It] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (Si(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
                        for (l = t; l.parentNode;) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + ge("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                            var a = l[e];
                            if (a !== t && a.form === t.form) {
                                var n = a[It] || null;
                                if (!n) throw Error(s(90));
                                Si(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && df(a)
                    }
                    break t;
                case "textarea":
                    mf(t, l.value, l.defaultValue);
                    break t;
                case "select":
                    e = l.value, e != null && ea(t, !!l.multiple, e, !1)
            }
        }
    }
    var Ni = !1;

    function xf(t, e, l) {
        if (Ni) return t(e, l);
        Ni = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (Ni = !1, (aa !== null || na !== null) && (Du(), aa && (e = aa, t = na, na = aa = null, gf(e), t)))
                for (e = 0; e < t.length; e++) gf(t[e])
        }
    }

    function Xa(t, e) {
        var l = t.stateNode;
        if (l === null) return null;
        var a = l[It] || null;
        if (a === null) return null;
        l = a[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (l && typeof l != "function") throw Error(s(231, e, typeof l));
        return l
    }
    var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Mi = !1;
    if (Ye) try {
        var Qa = {};
        Object.defineProperty(Qa, "passive", {
            get: function() {
                Mi = !0
            }
        }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa)
    } catch {
        Mi = !1
    }
    var sl = null,
        _i = null,
        Jn = null;

    function bf() {
        if (Jn) return Jn;
        var t, e = _i,
            l = e.length,
            a, n = "value" in sl ? sl.value : sl.textContent,
            u = n.length;
        for (t = 0; t < l && e[t] === n[t]; t++);
        var i = l - t;
        for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
        return Jn = n.slice(t, 1 < a ? 1 - a : void 0)
    }

    function kn(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function $n() {
        return !0
    }

    function Sf() {
        return !1
    }

    function Pt(t) {
        function e(l, a, n, u, i) {
            this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
            for (var f in t) t.hasOwnProperty(f) && (l = t[f], this[f] = l ? l(u) : u[f]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $n : Sf, this.isPropagationStopped = Sf, this
        }
        return T(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = $n)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = $n)
            },
            persist: function() {},
            isPersistent: $n
        }), e
    }
    var Hl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Fn = Pt(Hl),
        Za = T({}, Hl, {
            view: 0,
            detail: 0
        }),
        im = Pt(Za),
        Ri, ji, Va, Wn = T({}, Za, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Oi,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Va && (Va && t.type === "mousemove" ? (Ri = t.screenX - Va.screenX, ji = t.screenY - Va.screenY) : ji = Ri = 0, Va = t), Ri)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : ji
            }
        }),
        Ef = Pt(Wn),
        cm = T({}, Wn, {
            dataTransfer: 0
        }),
        sm = Pt(cm),
        fm = T({}, Za, {
            relatedTarget: 0
        }),
        Ci = Pt(fm),
        om = T({}, Hl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        rm = Pt(om),
        dm = T({}, Hl, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        hm = Pt(dm),
        mm = T({}, Hl, {
            data: 0
        }),
        Af = Pt(mm),
        ym = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        vm = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        pm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function gm(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = pm[t]) ? !!e[t] : !1
    }

    function Oi() {
        return gm
    }
    var xm = T({}, Za, {
            key: function(t) {
                if (t.key) {
                    var e = ym[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = kn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? vm[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Oi,
            charCode: function(t) {
                return t.type === "keypress" ? kn(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? kn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        bm = Pt(xm),
        Sm = T({}, Wn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        zf = Pt(Sm),
        Em = T({}, Za, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Oi
        }),
        Am = Pt(Em),
        zm = T({}, Hl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Tm = Pt(zm),
        Nm = T({}, Wn, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Mm = Pt(Nm),
        _m = T({}, Hl, {
            newState: 0,
            oldState: 0
        }),
        Rm = Pt(_m),
        jm = [9, 13, 27, 32],
        Di = Ye && "CompositionEvent" in window,
        Ka = null;
    Ye && "documentMode" in document && (Ka = document.documentMode);
    var Cm = Ye && "TextEvent" in window && !Ka,
        Tf = Ye && (!Di || Ka && 8 < Ka && 11 >= Ka),
        Nf = " ",
        Mf = !1;

    function _f(t, e) {
        switch (t) {
            case "keyup":
                return jm.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Rf(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var ua = !1;

    function Om(t, e) {
        switch (t) {
            case "compositionend":
                return Rf(e);
            case "keypress":
                return e.which !== 32 ? null : (Mf = !0, Nf);
            case "textInput":
                return t = e.data, t === Nf && Mf ? null : t;
            default:
                return null
        }
    }

    function Dm(t, e) {
        if (ua) return t === "compositionend" || !Di && _f(t, e) ? (t = bf(), Jn = _i = sl = null, ua = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Tf && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var Hm = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function jf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Hm[t.type] : e === "textarea"
    }

    function Cf(t, e, l, a) {
        aa ? na ? na.push(a) : na = [a] : aa = a, e = Gu(e, "onChange"), 0 < e.length && (l = new Fn("onChange", "change", null, l, a), t.push({
            event: l,
            listeners: e
        }))
    }
    var Ja = null,
        ka = null;

    function Um(t) {
        md(t, 0)
    }

    function In(t) {
        var e = Ya(t);
        if (df(e)) return t
    }

    function Of(t, e) {
        if (t === "change") return e
    }
    var Df = !1;
    if (Ye) {
        var Hi;
        if (Ye) {
            var Ui = "oninput" in document;
            if (!Ui) {
                var Hf = document.createElement("div");
                Hf.setAttribute("oninput", "return;"), Ui = typeof Hf.oninput == "function"
            }
            Hi = Ui
        } else Hi = !1;
        Df = Hi && (!document.documentMode || 9 < document.documentMode)
    }

    function Uf() {
        Ja && (Ja.detachEvent("onpropertychange", wf), ka = Ja = null)
    }

    function wf(t) {
        if (t.propertyName === "value" && In(ka)) {
            var e = [];
            Cf(e, ka, t, Ti(t)), xf(Um, e)
        }
    }

    function wm(t, e, l) {
        t === "focusin" ? (Uf(), Ja = e, ka = l, Ja.attachEvent("onpropertychange", wf)) : t === "focusout" && Uf()
    }

    function Bm(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return In(ka)
    }

    function qm(t, e) {
        if (t === "click") return In(e)
    }

    function Lm(t, e) {
        if (t === "input" || t === "change") return In(e)
    }

    function Gm(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var se = typeof Object.is == "function" ? Object.is : Gm;

    function $a(t, e) {
        if (se(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var l = Object.keys(t),
            a = Object.keys(e);
        if (l.length !== a.length) return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!di.call(e, n) || !se(t[n], e[n])) return !1
        }
        return !0
    }

    function Bf(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function qf(t, e) {
        var l = Bf(t);
        t = 0;
        for (var a; l;) {
            if (l.nodeType === 3) {
                if (a = t + l.textContent.length, t <= e && a >= e) return {
                    node: l,
                    offset: e - t
                };
                t = a
            }
            t: {
                for (; l;) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Bf(l)
        }
    }

    function Lf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Lf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function Gf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Vn(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l) t = e.contentWindow;
            else break;
            e = Vn(t.document)
        }
        return e
    }

    function wi(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Ym = Ye && "documentMode" in document && 11 >= document.documentMode,
        ia = null,
        Bi = null,
        Fa = null,
        qi = !1;

    function Yf(t, e, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        qi || ia == null || ia !== Vn(a) || (a = ia, "selectionStart" in a && wi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Fa && $a(Fa, a) || (Fa = a, a = Gu(Bi, "onSelect"), 0 < a.length && (e = new Fn("onSelect", "select", null, e, l), t.push({
            event: e,
            listeners: a
        }), e.target = ia)))
    }

    function Ul(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l
    }
    var ca = {
            animationend: Ul("Animation", "AnimationEnd"),
            animationiteration: Ul("Animation", "AnimationIteration"),
            animationstart: Ul("Animation", "AnimationStart"),
            transitionrun: Ul("Transition", "TransitionRun"),
            transitionstart: Ul("Transition", "TransitionStart"),
            transitioncancel: Ul("Transition", "TransitionCancel"),
            transitionend: Ul("Transition", "TransitionEnd")
        },
        Li = {},
        Xf = {};
    Ye && (Xf = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);

    function wl(t) {
        if (Li[t]) return Li[t];
        if (!ca[t]) return t;
        var e = ca[t],
            l;
        for (l in e)
            if (e.hasOwnProperty(l) && l in Xf) return Li[t] = e[l];
        return t
    }
    var Qf = wl("animationend"),
        Zf = wl("animationiteration"),
        Vf = wl("animationstart"),
        Xm = wl("transitionrun"),
        Qm = wl("transitionstart"),
        Zm = wl("transitioncancel"),
        Kf = wl("transitionend"),
        Jf = new Map,
        Gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Gi.push("scrollEnd");

    function _e(t, e) {
        Jf.set(t, e), Dl(e, [t])
    }
    var Pn = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(e)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        },
        xe = [],
        sa = 0,
        Yi = 0;

    function tu() {
        for (var t = sa, e = Yi = sa = 0; e < t;) {
            var l = xe[e];
            xe[e++] = null;
            var a = xe[e];
            xe[e++] = null;
            var n = xe[e];
            xe[e++] = null;
            var u = xe[e];
            if (xe[e++] = null, a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n
            }
            u !== 0 && kf(l, n, u)
        }
    }

    function eu(t, e, l, a) {
        xe[sa++] = t, xe[sa++] = e, xe[sa++] = l, xe[sa++] = a, Yi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
    }

    function Xi(t, e, l, a) {
        return eu(t, e, l, a), lu(t)
    }

    function Bl(t, e) {
        return eu(t, null, null, e), lu(t)
    }

    function kf(t, e, l) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = t.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ce(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null
    }

    function lu(t) {
        if (50 < xn) throw xn = 0, Wc = null, Error(s(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var fa = {};

    function Vm(t, e, l, a) {
        this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function fe(t, e, l, a) {
        return new Vm(t, e, l, a)
    }

    function Qi(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Xe(t, e) {
        var l = t.alternate;
        return l === null ? (l = fe(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l
    }

    function $f(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function au(t, e, l, a, n, u) {
        var i = 0;
        if (a = t, typeof t == "function") Qi(t) && (i = 1);
        else if (typeof t == "string") i = F0(t, l, G.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case Jt:
                return t = fe(31, l, e, n), t.elementType = Jt, t.lanes = u, t;
            case X:
                return ql(l.children, n, u, e);
            case U:
                i = 8, n |= 24;
                break;
            case J:
                return t = fe(12, l, e, n | 2), t.elementType = J, t.lanes = u, t;
            case xt:
                return t = fe(13, l, e, n), t.elementType = xt, t.lanes = u, t;
            case Nt:
                return t = fe(19, l, e, n), t.elementType = Nt, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case k:
                        i = 10;
                        break t;
                    case tt:
                        i = 9;
                        break t;
                    case gt:
                        i = 11;
                        break t;
                    case F:
                        i = 14;
                        break t;
                    case Rt:
                        i = 16, a = null;
                        break t
                }
                i = 29, l = Error(s(130, t === null ? "null" : typeof t, "")), a = null
        }
        return e = fe(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e
    }

    function ql(t, e, l, a) {
        return t = fe(7, t, a, e), t.lanes = l, t
    }

    function Zi(t, e, l) {
        return t = fe(6, t, null, e), t.lanes = l, t
    }

    function Ff(t) {
        var e = fe(18, null, null, 0);
        return e.stateNode = t, e
    }

    function Vi(t, e, l) {
        return e = fe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }
    var Wf = new WeakMap;

    function be(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = Wf.get(t);
            return l !== void 0 ? l : (e = {
                value: t,
                source: e,
                stack: $s(e)
            }, Wf.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: $s(e)
        }
    }
    var oa = [],
        ra = 0,
        nu = null,
        Wa = 0,
        Se = [],
        Ee = 0,
        fl = null,
        He = 1,
        Ue = "";

    function Qe(t, e) {
        oa[ra++] = Wa, oa[ra++] = nu, nu = t, Wa = e
    }

    function If(t, e, l) {
        Se[Ee++] = He, Se[Ee++] = Ue, Se[Ee++] = fl, fl = t;
        var a = He;
        t = Ue;
        var n = 32 - ce(a) - 1;
        a &= ~(1 << n), l += 1;
        var u = 32 - ce(e) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, He = 1 << 32 - ce(e) + n | l << n | a, Ue = u + t
        } else He = 1 << u | l << n | a, Ue = t
    }

    function Ki(t) {
        t.return !== null && (Qe(t, 1), If(t, 1, 0))
    }

    function Ji(t) {
        for (; t === nu;) nu = oa[--ra], oa[ra] = null, Wa = oa[--ra], oa[ra] = null;
        for (; t === fl;) fl = Se[--Ee], Se[Ee] = null, Ue = Se[--Ee], Se[Ee] = null, He = Se[--Ee], Se[Ee] = null
    }

    function Pf(t, e) {
        Se[Ee++] = He, Se[Ee++] = Ue, Se[Ee++] = fl, He = e.id, Ue = e.overflow, fl = t
    }
    var Qt = null,
        Et = null,
        ct = !1,
        ol = null,
        Ae = !1,
        ki = Error(s(519));

    function rl(t) {
        var e = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Ia(be(e, t)), ki
    }

    function to(t) {
        var e = t.stateNode,
            l = t.type,
            a = t.memoizedProps;
        switch (e[Xt] = t, e[It] = a, l) {
            case "dialog":
                nt("cancel", e), nt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                nt("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < Sn.length; l++) nt(Sn[l], e);
                break;
            case "source":
                nt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                nt("error", e), nt("load", e);
                break;
            case "details":
                nt("toggle", e);
                break;
            case "input":
                nt("invalid", e), hf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                break;
            case "select":
                nt("invalid", e);
                break;
            case "textarea":
                nt("invalid", e), yf(e, a.value, a.defaultValue, a.children)
        }
        l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || gd(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)), a.onScroll != null && nt("scroll", e), a.onScrollEnd != null && nt("scrollend", e), a.onClick != null && (e.onclick = Ge), e = !0) : e = !1, e || rl(t, !0)
    }

    function eo(t) {
        for (Qt = t.return; Qt;) switch (Qt.tag) {
            case 5:
            case 31:
            case 13:
                Ae = !1;
                return;
            case 27:
            case 3:
                Ae = !0;
                return;
            default:
                Qt = Qt.return
        }
    }

    function da(t) {
        if (t !== Qt) return !1;
        if (!ct) return eo(t), ct = !0, !1;
        var e = t.tag,
            l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ds(t.type, t.memoizedProps)), l = !l), l && Et && rl(t), eo(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            Et = Md(t)
        } else if (e === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            Et = Md(t)
        } else e === 27 ? (e = Et, Tl(t.type) ? (t = ps, ps = null, Et = t) : Et = e) : Et = Qt ? Te(t.stateNode.nextSibling) : null;
        return !0
    }

    function Ll() {
        Et = Qt = null, ct = !1
    }

    function $i() {
        var t = ol;
        return t !== null && (ae === null ? ae = t : ae.push.apply(ae, t), ol = null), t
    }

    function Ia(t) {
        ol === null ? ol = [t] : ol.push(t)
    }
    var Fi = g(null),
        Gl = null,
        Ze = null;

    function dl(t, e, l) {
        q(Fi, e._currentValue), e._currentValue = l
    }

    function Ve(t) {
        t._currentValue = Fi.current, H(Fi)
    }

    function Wi(t, e, l) {
        for (; t !== null;) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
            t = t.return
        }
    }

    function Ii(t, e, l, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null;) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                t: for (; u !== null;) {
                    var f = u;
                    u = n;
                    for (var m = 0; m < e.length; m++)
                        if (f.context === e[m]) {
                            u.lanes |= l, f = u.alternate, f !== null && (f.lanes |= l), Wi(u.return, l, t), a || (i = null);
                            break t
                        } u = f.next
                }
            } else if (n.tag === 18) {
                if (i = n.return, i === null) throw Error(s(341));
                i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Wi(i, l, t), i = null
            } else i = n.child;
            if (i !== null) i.return = n;
            else
                for (i = n; i !== null;) {
                    if (i === t) {
                        i = null;
                        break
                    }
                    if (n = i.sibling, n !== null) {
                        n.return = i.return, i = n;
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }

    function ha(t, e, l, a) {
        t = null;
        for (var n = e, u = !1; n !== null;) {
            if (!u) {
                if ((n.flags & 524288) !== 0) u = !0;
                else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null) throw Error(s(387));
                if (i = i.memoizedProps, i !== null) {
                    var f = n.type;
                    se(n.pendingProps.value, i.value) || (t !== null ? t.push(f) : t = [f])
                }
            } else if (n === rt.current) {
                if (i = n.alternate, i === null) throw Error(s(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Nn) : t = [Nn])
            }
            n = n.return
        }
        t !== null && Ii(e, t, l, a), e.flags |= 262144
    }

    function uu(t) {
        for (t = t.firstContext; t !== null;) {
            if (!se(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Yl(t) {
        Gl = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function Zt(t) {
        return lo(Gl, t)
    }

    function iu(t, e) {
        return Gl === null && Yl(t), lo(t, e)
    }

    function lo(t, e) {
        var l = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: l,
                next: null
            }, Ze === null) {
            if (t === null) throw Error(s(308));
            Ze = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else Ze = Ze.next = e;
        return l
    }
    var Km = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(l, a) {
                        t.push(a)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(l) {
                    return l()
                })
            }
        },
        Jm = c.unstable_scheduleCallback,
        km = c.unstable_NormalPriority,
        Ht = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Pi() {
        return {
            controller: new Km,
            data: new Map,
            refCount: 0
        }
    }

    function Pa(t) {
        t.refCount--, t.refCount === 0 && Jm(km, function() {
            t.controller.abort()
        })
    }
    var tn = null,
        tc = 0,
        ma = 0,
        ya = null;

    function $m(t, e) {
        if (tn === null) {
            var l = tn = [];
            tc = 0, ma = as(), ya = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return tc++, e.then(ao, ao), e
    }

    function ao() {
        if (--tc === 0 && tn !== null) {
            ya !== null && (ya.status = "fulfilled");
            var t = tn;
            tn = null, ma = 0, ya = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function Fm(t, e) {
        var l = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    l.push(n)
                }
            };
        return t.then(function() {
            a.status = "fulfilled", a.value = e;
            for (var n = 0; n < l.length; n++)(0, l[n])(e)
        }, function(n) {
            for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
        }), a
    }
    var no = j.S;
    j.S = function(t, e) {
        Xr = ue(), typeof e == "object" && e !== null && typeof e.then == "function" && $m(t, e), no !== null && no(t, e)
    };
    var Xl = g(null);

    function ec() {
        var t = Xl.current;
        return t !== null ? t : St.pooledCache
    }

    function cu(t, e) {
        e === null ? q(Xl, Xl.current) : q(Xl, e.pool)
    }

    function uo() {
        var t = ec();
        return t === null ? null : {
            parent: Ht._currentValue,
            pool: t
        }
    }
    var va = Error(s(460)),
        lc = Error(s(474)),
        su = Error(s(542)),
        fu = {
            then: function() {}
        };

    function io(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function co(t, e, l) {
        switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ge, Ge), e = l), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, fo(t), t;
            default:
                if (typeof e.status == "string") e.then(Ge, Ge);
                else {
                    if (t = St, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
                    t = e, t.status = "pending", t.then(function(a) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "fulfilled", n.value = a
                        }
                    }, function(a) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "rejected", n.reason = a
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, fo(t), t
                }
                throw Zl = e, va
        }
    }

    function Ql(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Zl = l, va) : l
        }
    }
    var Zl = null;

    function so() {
        if (Zl === null) throw Error(s(459));
        var t = Zl;
        return Zl = null, t
    }

    function fo(t) {
        if (t === va || t === su) throw Error(s(483))
    }
    var pa = null,
        en = 0;

    function ou(t) {
        var e = en;
        return en += 1, pa === null && (pa = []), co(pa, t, e)
    }

    function ln(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function ru(t, e) {
        throw e.$$typeof === B ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function oo(t) {
        function e(x, p) {
            if (t) {
                var E = x.deletions;
                E === null ? (x.deletions = [p], x.flags |= 16) : E.push(p)
            }
        }

        function l(x, p) {
            if (!t) return null;
            for (; p !== null;) e(x, p), p = p.sibling;
            return null
        }

        function a(x) {
            for (var p = new Map; x !== null;) x.key !== null ? p.set(x.key, x) : p.set(x.index, x), x = x.sibling;
            return p
        }

        function n(x, p) {
            return x = Xe(x, p), x.index = 0, x.sibling = null, x
        }

        function u(x, p, E) {
            return x.index = E, t ? (E = x.alternate, E !== null ? (E = E.index, E < p ? (x.flags |= 67108866, p) : E) : (x.flags |= 67108866, p)) : (x.flags |= 1048576, p)
        }

        function i(x) {
            return t && x.alternate === null && (x.flags |= 67108866), x
        }

        function f(x, p, E, C) {
            return p === null || p.tag !== 6 ? (p = Zi(E, x.mode, C), p.return = x, p) : (p = n(p, E), p.return = x, p)
        }

        function m(x, p, E, C) {
            var Q = E.type;
            return Q === X ? R(x, p, E.props.children, C, E.key) : p !== null && (p.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Rt && Ql(Q) === p.type) ? (p = n(p, E.props), ln(p, E), p.return = x, p) : (p = au(E.type, E.key, E.props, null, x.mode, C), ln(p, E), p.return = x, p)
        }

        function A(x, p, E, C) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = Vi(E, x.mode, C), p.return = x, p) : (p = n(p, E.children || []), p.return = x, p)
        }

        function R(x, p, E, C, Q) {
            return p === null || p.tag !== 7 ? (p = ql(E, x.mode, C, Q), p.return = x, p) : (p = n(p, E), p.return = x, p)
        }

        function D(x, p, E) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return p = Zi("" + p, x.mode, E), p.return = x, p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                    case K:
                        return E = au(p.type, p.key, p.props, null, x.mode, E), ln(E, p), E.return = x, E;
                    case Z:
                        return p = Vi(p, x.mode, E), p.return = x, p;
                    case Rt:
                        return p = Ql(p), D(x, p, E)
                }
                if (Dt(p) || kt(p)) return p = ql(p, x.mode, E, null), p.return = x, p;
                if (typeof p.then == "function") return D(x, ou(p), E);
                if (p.$$typeof === k) return D(x, iu(x, p), E);
                ru(x, p)
            }
            return null
        }

        function z(x, p, E, C) {
            var Q = p !== null ? p.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return Q !== null ? null : f(x, p, "" + E, C);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case K:
                        return E.key === Q ? m(x, p, E, C) : null;
                    case Z:
                        return E.key === Q ? A(x, p, E, C) : null;
                    case Rt:
                        return E = Ql(E), z(x, p, E, C)
                }
                if (Dt(E) || kt(E)) return Q !== null ? null : R(x, p, E, C, null);
                if (typeof E.then == "function") return z(x, p, ou(E), C);
                if (E.$$typeof === k) return z(x, p, iu(x, E), C);
                ru(x, E)
            }
            return null
        }

        function N(x, p, E, C, Q) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return x = x.get(E) || null, f(p, x, "" + C, Q);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case K:
                        return x = x.get(C.key === null ? E : C.key) || null, m(p, x, C, Q);
                    case Z:
                        return x = x.get(C.key === null ? E : C.key) || null, A(p, x, C, Q);
                    case Rt:
                        return C = Ql(C), N(x, p, E, C, Q)
                }
                if (Dt(C) || kt(C)) return x = x.get(E) || null, R(p, x, C, Q, null);
                if (typeof C.then == "function") return N(x, p, E, ou(C), Q);
                if (C.$$typeof === k) return N(x, p, E, iu(p, C), Q);
                ru(p, C)
            }
            return null
        }

        function L(x, p, E, C) {
            for (var Q = null, st = null, Y = p, et = p = 0, it = null; Y !== null && et < E.length; et++) {
                Y.index > et ? (it = Y, Y = null) : it = Y.sibling;
                var ft = z(x, Y, E[et], C);
                if (ft === null) {
                    Y === null && (Y = it);
                    break
                }
                t && Y && ft.alternate === null && e(x, Y), p = u(ft, p, et), st === null ? Q = ft : st.sibling = ft, st = ft, Y = it
            }
            if (et === E.length) return l(x, Y), ct && Qe(x, et), Q;
            if (Y === null) {
                for (; et < E.length; et++) Y = D(x, E[et], C), Y !== null && (p = u(Y, p, et), st === null ? Q = Y : st.sibling = Y, st = Y);
                return ct && Qe(x, et), Q
            }
            for (Y = a(Y); et < E.length; et++) it = N(Y, x, et, E[et], C), it !== null && (t && it.alternate !== null && Y.delete(it.key === null ? et : it.key), p = u(it, p, et), st === null ? Q = it : st.sibling = it, st = it);
            return t && Y.forEach(function(jl) {
                return e(x, jl)
            }), ct && Qe(x, et), Q
        }

        function V(x, p, E, C) {
            if (E == null) throw Error(s(151));
            for (var Q = null, st = null, Y = p, et = p = 0, it = null, ft = E.next(); Y !== null && !ft.done; et++, ft = E.next()) {
                Y.index > et ? (it = Y, Y = null) : it = Y.sibling;
                var jl = z(x, Y, ft.value, C);
                if (jl === null) {
                    Y === null && (Y = it);
                    break
                }
                t && Y && jl.alternate === null && e(x, Y), p = u(jl, p, et), st === null ? Q = jl : st.sibling = jl, st = jl, Y = it
            }
            if (ft.done) return l(x, Y), ct && Qe(x, et), Q;
            if (Y === null) {
                for (; !ft.done; et++, ft = E.next()) ft = D(x, ft.value, C), ft !== null && (p = u(ft, p, et), st === null ? Q = ft : st.sibling = ft, st = ft);
                return ct && Qe(x, et), Q
            }
            for (Y = a(Y); !ft.done; et++, ft = E.next()) ft = N(Y, x, et, ft.value, C), ft !== null && (t && ft.alternate !== null && Y.delete(ft.key === null ? et : ft.key), p = u(ft, p, et), st === null ? Q = ft : st.sibling = ft, st = ft);
            return t && Y.forEach(function(c1) {
                return e(x, c1)
            }), ct && Qe(x, et), Q
        }

        function pt(x, p, E, C) {
            if (typeof E == "object" && E !== null && E.type === X && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case K:
                        t: {
                            for (var Q = E.key; p !== null;) {
                                if (p.key === Q) {
                                    if (Q = E.type, Q === X) {
                                        if (p.tag === 7) {
                                            l(x, p.sibling), C = n(p, E.props.children), C.return = x, x = C;
                                            break t
                                        }
                                    } else if (p.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Rt && Ql(Q) === p.type) {
                                        l(x, p.sibling), C = n(p, E.props), ln(C, E), C.return = x, x = C;
                                        break t
                                    }
                                    l(x, p);
                                    break
                                } else e(x, p);
                                p = p.sibling
                            }
                            E.type === X ? (C = ql(E.props.children, x.mode, C, E.key), C.return = x, x = C) : (C = au(E.type, E.key, E.props, null, x.mode, C), ln(C, E), C.return = x, x = C)
                        }
                        return i(x);
                    case Z:
                        t: {
                            for (Q = E.key; p !== null;) {
                                if (p.key === Q)
                                    if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                                        l(x, p.sibling), C = n(p, E.children || []), C.return = x, x = C;
                                        break t
                                    } else {
                                        l(x, p);
                                        break
                                    }
                                else e(x, p);
                                p = p.sibling
                            }
                            C = Vi(E, x.mode, C),
                            C.return = x,
                            x = C
                        }
                        return i(x);
                    case Rt:
                        return E = Ql(E), pt(x, p, E, C)
                }
                if (Dt(E)) return L(x, p, E, C);
                if (kt(E)) {
                    if (Q = kt(E), typeof Q != "function") throw Error(s(150));
                    return E = Q.call(E), V(x, p, E, C)
                }
                if (typeof E.then == "function") return pt(x, p, ou(E), C);
                if (E.$$typeof === k) return pt(x, p, iu(x, E), C);
                ru(x, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, p !== null && p.tag === 6 ? (l(x, p.sibling), C = n(p, E), C.return = x, x = C) : (l(x, p), C = Zi(E, x.mode, C), C.return = x, x = C), i(x)) : l(x, p)
        }
        return function(x, p, E, C) {
            try {
                en = 0;
                var Q = pt(x, p, E, C);
                return pa = null, Q
            } catch (Y) {
                if (Y === va || Y === su) throw Y;
                var st = fe(29, Y, null, x.mode);
                return st.lanes = C, st.return = x, st
            }
        }
    }
    var Vl = oo(!0),
        ro = oo(!1),
        hl = !1;

    function ac(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function nc(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function ml(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function yl(t, e, l) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (ot & 2) !== 0) {
            var n = a.pending;
            return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = lu(t), kf(t, null, l), e
        }
        return eu(t, a, e, l), lu(t)
    }

    function an(t, e, l) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes, l |= a, e.lanes = l, ef(t, l)
        }
    }

    function uc(t, e) {
        var l = t.updateQueue,
            a = t.alternate;
        if (a !== null && (a = a.updateQueue, l === a)) {
            var n = null,
                u = null;
            if (l = l.firstBaseUpdate, l !== null) {
                do {
                    var i = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = i : u = u.next = i, l = l.next
                } while (l !== null);
                u === null ? n = u = e : u = u.next = e
            } else n = u = e;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            }, t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e
    }
    var ic = !1;

    function nn() {
        if (ic) {
            var t = ya;
            if (t !== null) throw t
        }
    }

    function un(t, e, l, a) {
        ic = !1;
        var n = t.updateQueue;
        hl = !1;
        var u = n.firstBaseUpdate,
            i = n.lastBaseUpdate,
            f = n.shared.pending;
        if (f !== null) {
            n.shared.pending = null;
            var m = f,
                A = m.next;
            m.next = null, i === null ? u = A : i.next = A, i = m;
            var R = t.alternate;
            R !== null && (R = R.updateQueue, f = R.lastBaseUpdate, f !== i && (f === null ? R.firstBaseUpdate = A : f.next = A, R.lastBaseUpdate = m))
        }
        if (u !== null) {
            var D = n.baseState;
            i = 0, R = A = m = null, f = u;
            do {
                var z = f.lane & -536870913,
                    N = z !== f.lane;
                if (N ? (ut & z) === z : (a & z) === z) {
                    z !== 0 && z === ma && (ic = !0), R !== null && (R = R.next = {
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var L = t,
                            V = f;z = e;
                        var pt = l;
                        switch (V.tag) {
                            case 1:
                                if (L = V.payload, typeof L == "function") {
                                    D = L.call(pt, D, z);
                                    break t
                                }
                                D = L;
                                break t;
                            case 3:
                                L.flags = L.flags & -65537 | 128;
                            case 0:
                                if (L = V.payload, z = typeof L == "function" ? L.call(pt, D, z) : L, z == null) break t;
                                D = T({}, D, z);
                                break t;
                            case 2:
                                hl = !0
                        }
                    }
                    z = f.callback, z !== null && (t.flags |= 64, N && (t.flags |= 8192), N = n.callbacks, N === null ? n.callbacks = [z] : N.push(z))
                } else N = {
                    lane: z,
                    tag: f.tag,
                    payload: f.payload,
                    callback: f.callback,
                    next: null
                }, R === null ? (A = R = N, m = D) : R = R.next = N, i |= z;
                if (f = f.next, f === null) {
                    if (f = n.shared.pending, f === null) break;
                    N = f, f = N.next, N.next = null, n.lastBaseUpdate = N, n.shared.pending = null
                }
            } while (!0);
            R === null && (m = D), n.baseState = m, n.firstBaseUpdate = A, n.lastBaseUpdate = R, u === null && (n.shared.lanes = 0), bl |= i, t.lanes = i, t.memoizedState = D
        }
    }

    function ho(t, e) {
        if (typeof t != "function") throw Error(s(191, t));
        t.call(e)
    }

    function mo(t, e) {
        var l = t.callbacks;
        if (l !== null)
            for (t.callbacks = null, t = 0; t < l.length; t++) ho(l[t], e)
    }
    var ga = g(null),
        du = g(0);

    function yo(t, e) {
        t = tl, q(du, t), q(ga, e), tl = t | e.baseLanes
    }

    function cc() {
        q(du, tl), q(ga, ga.current)
    }

    function sc() {
        tl = du.current, H(ga), H(du)
    }
    var oe = g(null),
        ze = null;

    function vl(t) {
        var e = t.alternate;
        q(Ct, Ct.current & 1), q(oe, t), ze === null && (e === null || ga.current !== null || e.memoizedState !== null) && (ze = t)
    }

    function fc(t) {
        q(Ct, Ct.current), q(oe, t), ze === null && (ze = t)
    }

    function vo(t) {
        t.tag === 22 ? (q(Ct, Ct.current), q(oe, t), ze === null && (ze = t)) : pl()
    }

    function pl() {
        q(Ct, Ct.current), q(oe, oe.current)
    }

    function re(t) {
        H(oe), ze === t && (ze = null), H(Ct)
    }
    var Ct = g(0);

    function hu(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated, l === null || ys(l) || vs(l))) return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var Ke = 0,
        P = null,
        yt = null,
        Ut = null,
        mu = !1,
        xa = !1,
        Kl = !1,
        yu = 0,
        cn = 0,
        ba = null,
        Wm = 0;

    function Mt() {
        throw Error(s(321))
    }

    function oc(t, e) {
        if (e === null) return !1;
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!se(t[l], e[l])) return !1;
        return !0
    }

    function rc(t, e, l, a, n, u) {
        return Ke = u, P = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, j.H = t === null || t.memoizedState === null ? Po : Nc, Kl = !1, u = l(a, n), Kl = !1, xa && (u = go(e, l, a, n)), po(t), u
    }

    function po(t) {
        j.H = on;
        var e = yt !== null && yt.next !== null;
        if (Ke = 0, Ut = yt = P = null, mu = !1, cn = 0, ba = null, e) throw Error(s(300));
        t === null || wt || (t = t.dependencies, t !== null && uu(t) && (wt = !0))
    }

    function go(t, e, l, a) {
        P = t;
        var n = 0;
        do {
            if (xa && (ba = null), cn = 0, xa = !1, 25 <= n) throw Error(s(301));
            if (n += 1, Ut = yt = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            j.H = tr, u = e(l, a)
        } while (xa);
        return u
    }

    function Im() {
        var t = j.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? sn(e) : e, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (P.flags |= 1024), e
    }

    function dc() {
        var t = yu !== 0;
        return yu = 0, t
    }

    function hc(t, e, l) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l
    }

    function mc(t) {
        if (mu) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            mu = !1
        }
        Ke = 0, Ut = yt = P = null, xa = !1, cn = yu = 0, ba = null
    }

    function Wt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ut === null ? P.memoizedState = Ut = t : Ut = Ut.next = t, Ut
    }

    function Ot() {
        if (yt === null) {
            var t = P.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = yt.next;
        var e = Ut === null ? P.memoizedState : Ut.next;
        if (e !== null) Ut = e, yt = t;
        else {
            if (t === null) throw P.alternate === null ? Error(s(467)) : Error(s(310));
            yt = t, t = {
                memoizedState: yt.memoizedState,
                baseState: yt.baseState,
                baseQueue: yt.baseQueue,
                queue: yt.queue,
                next: null
            }, Ut === null ? P.memoizedState = Ut = t : Ut = Ut.next = t
        }
        return Ut
    }

    function vu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function sn(t) {
        var e = cn;
        return cn += 1, ba === null && (ba = []), t = co(ba, t, e), e = P, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, j.H = e === null || e.memoizedState === null ? Po : Nc), t
    }

    function pu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return sn(t);
            if (t.$$typeof === k) return Zt(t)
        }
        throw Error(s(438, String(t)))
    }

    function yc(t) {
        var e = null,
            l = P.updateQueue;
        if (l !== null && (e = l.memoCache), e == null) {
            var a = P.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), l === null && (l = vu(), P.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
            for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Oe;
        return e.index++, l
    }

    function Je(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function gu(t) {
        var e = Ot();
        return vc(e, yt, t)
    }

    function vc(t, e, l) {
        var a = t.queue;
        if (a === null) throw Error(s(311));
        a.lastRenderedReducer = l;
        var n = t.baseQueue,
            u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next, u.next = i
            }
            e.baseQueue = n = u, a.pending = null
        }
        if (u = t.baseState, n === null) t.memoizedState = u;
        else {
            e = n.next;
            var f = i = null,
                m = null,
                A = e,
                R = !1;
            do {
                var D = A.lane & -536870913;
                if (D !== A.lane ? (ut & D) === D : (Ke & D) === D) {
                    var z = A.revertLane;
                    if (z === 0) m !== null && (m = m.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }), D === ma && (R = !0);
                    else if ((Ke & z) === z) {
                        A = A.next, z === ma && (R = !0);
                        continue
                    } else D = {
                        lane: 0,
                        revertLane: A.revertLane,
                        gesture: null,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }, m === null ? (f = m = D, i = u) : m = m.next = D, P.lanes |= z, bl |= z;
                    D = A.action, Kl && l(u, D), u = A.hasEagerState ? A.eagerState : l(u, D)
                } else z = {
                    lane: D,
                    revertLane: A.revertLane,
                    gesture: A.gesture,
                    action: A.action,
                    hasEagerState: A.hasEagerState,
                    eagerState: A.eagerState,
                    next: null
                }, m === null ? (f = m = z, i = u) : m = m.next = z, P.lanes |= D, bl |= D;
                A = A.next
            } while (A !== null && A !== e);
            if (m === null ? i = u : m.next = f, !se(u, t.memoizedState) && (wt = !0, R && (l = ya, l !== null))) throw l;
            t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
    }

    function pc(t) {
        var e = Ot(),
            l = e.queue;
        if (l === null) throw Error(s(311));
        l.lastRenderedReducer = t;
        var a = l.dispatch,
            n = l.pending,
            u = e.memoizedState;
        if (n !== null) {
            l.pending = null;
            var i = n = n.next;
            do u = t(u, i.action), i = i.next; while (i !== n);
            se(u, e.memoizedState) || (wt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u
        }
        return [u, a]
    }

    function xo(t, e, l) {
        var a = P,
            n = Ot(),
            u = ct;
        if (u) {
            if (l === void 0) throw Error(s(407));
            l = l()
        } else l = e();
        var i = !se((yt || n).memoizedState, l);
        if (i && (n.memoizedState = l, wt = !0), n = n.queue, bc(Eo.bind(null, a, n, t), [t]), n.getSnapshot !== e || i || Ut !== null && Ut.memoizedState.tag & 1) {
            if (a.flags |= 2048, Sa(9, {
                    destroy: void 0
                }, So.bind(null, a, n, l, e), null), St === null) throw Error(s(349));
            u || (Ke & 127) !== 0 || bo(a, e, l)
        }
        return l
    }

    function bo(t, e, l) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: l
        }, e = P.updateQueue, e === null ? (e = vu(), P.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t))
    }

    function So(t, e, l, a) {
        e.value = l, e.getSnapshot = a, Ao(e) && zo(t)
    }

    function Eo(t, e, l) {
        return l(function() {
            Ao(e) && zo(t)
        })
    }

    function Ao(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !se(t, l)
        } catch {
            return !0
        }
    }

    function zo(t) {
        var e = Bl(t, 2);
        e !== null && ne(e, t, 2)
    }

    function gc(t) {
        var e = Wt();
        if (typeof t == "function") {
            var l = t;
            if (t = l(), Kl) {
                il(!0);
                try {
                    l()
                } finally {
                    il(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Je,
            lastRenderedState: t
        }, e
    }

    function To(t, e, l, a) {
        return t.baseState = l, vc(t, yt, typeof a == "function" ? a : Je)
    }

    function Pm(t, e, l, a, n) {
        if (Su(t)) throw Error(s(485));
        if (t = e.action, t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    u.listeners.push(i)
                }
            };
            j.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, No(e, u)) : (u.next = l.next, e.pending = l.next = u)
        }
    }

    function No(t, e) {
        var l = e.action,
            a = e.payload,
            n = t.state;
        if (e.isTransition) {
            var u = j.T,
                i = {};
            j.T = i;
            try {
                var f = l(n, a),
                    m = j.S;
                m !== null && m(i, f), Mo(t, e, f)
            } catch (A) {
                xc(t, e, A)
            } finally {
                u !== null && i.types !== null && (u.types = i.types), j.T = u
            }
        } else try {
            u = l(n, a), Mo(t, e, u)
        } catch (A) {
            xc(t, e, A)
        }
    }

    function Mo(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            _o(t, e, a)
        }, function(a) {
            return xc(t, e, a)
        }) : _o(t, e, l)
    }

    function _o(t, e, l) {
        e.status = "fulfilled", e.value = l, Ro(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, No(t, l)))
    }

    function xc(t, e, l) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
            a = a.next;
            do e.status = "rejected", e.reason = l, Ro(e), e = e.next; while (e !== a)
        }
        t.action = null
    }

    function Ro(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function jo(t, e) {
        return e
    }

    function Co(t, e) {
        if (ct) {
            var l = St.formState;
            if (l !== null) {
                t: {
                    var a = P;
                    if (ct) {
                        if (Et) {
                            e: {
                                for (var n = Et, u = Ae; n.nodeType !== 8;) {
                                    if (!u) {
                                        n = null;
                                        break e
                                    }
                                    if (n = Te(n.nextSibling), n === null) {
                                        n = null;
                                        break e
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Et = Te(n.nextSibling), a = n.data === "F!";
                                break t
                            }
                        }
                        rl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return l = Wt(), l.memoizedState = l.baseState = e, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: jo,
            lastRenderedState: e
        }, l.queue = a, l = Fo.bind(null, P, a), a.dispatch = l, a = gc(!1), u = Tc.bind(null, P, !1, a.queue), a = Wt(), n = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, a.queue = n, l = Pm.bind(null, P, n, u, l), n.dispatch = l, a.memoizedState = t, [e, l, !1]
    }

    function Oo(t) {
        var e = Ot();
        return Do(e, yt, t)
    }

    function Do(t, e, l) {
        if (e = vc(t, e, jo)[0], t = gu(Je)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var a = sn(e)
        } catch (i) {
            throw i === va ? su : i
        } else a = e;
        e = Ot();
        var n = e.queue,
            u = n.dispatch;
        return l !== e.memoizedState && (P.flags |= 2048, Sa(9, {
            destroy: void 0
        }, t0.bind(null, n, l), null)), [a, u, t]
    }

    function t0(t, e) {
        t.action = e
    }

    function Ho(t) {
        var e = Ot(),
            l = yt;
        if (l !== null) return Do(e, l, t);
        Ot(), e = e.memoizedState, l = Ot();
        var a = l.queue.dispatch;
        return l.memoizedState = t, [e, a, !1]
    }

    function Sa(t, e, l, a) {
        return t = {
            tag: t,
            create: l,
            deps: a,
            inst: e,
            next: null
        }, e = P.updateQueue, e === null && (e = vu(), P.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t
    }

    function Uo() {
        return Ot().memoizedState
    }

    function xu(t, e, l, a) {
        var n = Wt();
        P.flags |= t, n.memoizedState = Sa(1 | e, {
            destroy: void 0
        }, l, a === void 0 ? null : a)
    }

    function bu(t, e, l, a) {
        var n = Ot();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        yt !== null && a !== null && oc(a, yt.memoizedState.deps) ? n.memoizedState = Sa(e, u, l, a) : (P.flags |= t, n.memoizedState = Sa(1 | e, u, l, a))
    }

    function wo(t, e) {
        xu(8390656, 8, t, e)
    }

    function bc(t, e) {
        bu(2048, 8, t, e)
    }

    function e0(t) {
        P.flags |= 4;
        var e = P.updateQueue;
        if (e === null) e = vu(), P.updateQueue = e, e.events = [t];
        else {
            var l = e.events;
            l === null ? e.events = [t] : l.push(t)
        }
    }

    function Bo(t) {
        var e = Ot().memoizedState;
        return e0({
                ref: e,
                nextImpl: t
            }),
            function() {
                if ((ot & 2) !== 0) throw Error(s(440));
                return e.impl.apply(void 0, arguments)
            }
    }

    function qo(t, e) {
        return bu(4, 2, t, e)
    }

    function Lo(t, e) {
        return bu(4, 4, t, e)
    }

    function Go(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function() {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function Yo(t, e, l) {
        l = l != null ? l.concat([t]) : null, bu(4, 4, Go.bind(null, e, t), l)
    }

    function Sc() {}

    function Xo(t, e) {
        var l = Ot();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        return e !== null && oc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t)
    }

    function Qo(t, e) {
        var l = Ot();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        if (e !== null && oc(e, a[1])) return a[0];
        if (a = t(), Kl) {
            il(!0);
            try {
                t()
            } finally {
                il(!1)
            }
        }
        return l.memoizedState = [a, e], a
    }

    function Ec(t, e, l) {
        return l === void 0 || (Ke & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Zr(), P.lanes |= t, bl |= t, l)
    }

    function Zo(t, e, l, a) {
        return se(l, e) ? l : ga.current !== null ? (t = Ec(t, l, a), se(t, e) || (wt = !0), t) : (Ke & 42) === 0 || (Ke & 1073741824) !== 0 && (ut & 261930) === 0 ? (wt = !0, t.memoizedState = l) : (t = Zr(), P.lanes |= t, bl |= t, e)
    }

    function Vo(t, e, l, a, n) {
        var u = w.p;
        w.p = u !== 0 && 8 > u ? u : 8;
        var i = j.T,
            f = {};
        j.T = f, Tc(t, !1, e, l);
        try {
            var m = n(),
                A = j.S;
            if (A !== null && A(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
                var R = Fm(m, a);
                fn(t, e, R, me(t))
            } else fn(t, e, a, me(t))
        } catch (D) {
            fn(t, e, {
                then: function() {},
                status: "rejected",
                reason: D
            }, me())
        } finally {
            w.p = u, i !== null && f.types !== null && (i.types = f.types), j.T = i
        }
    }

    function l0() {}

    function Ac(t, e, l, a) {
        if (t.tag !== 5) throw Error(s(476));
        var n = Ko(t).queue;
        Vo(t, n, e, $, l === null ? l0 : function() {
            return Jo(t), l(a)
        })
    }

    function Ko(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: $,
            baseState: $,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Je,
                lastRenderedState: $
            },
            next: null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Je,
                lastRenderedState: l
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function Jo(t) {
        var e = Ko(t);
        e.next === null && (e = t.alternate.memoizedState), fn(t, e.next.queue, {}, me())
    }

    function zc() {
        return Zt(Nn)
    }

    function ko() {
        return Ot().memoizedState
    }

    function $o() {
        return Ot().memoizedState
    }

    function a0(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var l = me();
                    t = ml(l);
                    var a = yl(e, t, l);
                    a !== null && (ne(a, e, l), an(a, e, l)), e = {
                        cache: Pi()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function n0(t, e, l) {
        var a = me();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Su(t) ? Wo(e, l) : (l = Xi(t, e, l, a), l !== null && (ne(l, t, a), Io(l, e, a)))
    }

    function Fo(t, e, l) {
        var a = me();
        fn(t, e, l, a)
    }

    function fn(t, e, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Su(t)) Wo(e, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var i = e.lastRenderedState,
                    f = u(i, l);
                if (n.hasEagerState = !0, n.eagerState = f, se(f, i)) return eu(t, e, n, 0), St === null && tu(), !1
            } catch {}
            if (l = Xi(t, e, n, a), l !== null) return ne(l, t, a), Io(l, e, a), !0
        }
        return !1
    }

    function Tc(t, e, l, a) {
        if (a = {
                lane: 2,
                revertLane: as(),
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Su(t)) {
            if (e) throw Error(s(479))
        } else e = Xi(t, l, a, 2), e !== null && ne(e, t, 2)
    }

    function Su(t) {
        var e = t.alternate;
        return t === P || e !== null && e === P
    }

    function Wo(t, e) {
        xa = mu = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e
    }

    function Io(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes, l |= a, e.lanes = l, ef(t, l)
        }
    }
    var on = {
        readContext: Zt,
        use: pu,
        useCallback: Mt,
        useContext: Mt,
        useEffect: Mt,
        useImperativeHandle: Mt,
        useLayoutEffect: Mt,
        useInsertionEffect: Mt,
        useMemo: Mt,
        useReducer: Mt,
        useRef: Mt,
        useState: Mt,
        useDebugValue: Mt,
        useDeferredValue: Mt,
        useTransition: Mt,
        useSyncExternalStore: Mt,
        useId: Mt,
        useHostTransitionStatus: Mt,
        useFormState: Mt,
        useActionState: Mt,
        useOptimistic: Mt,
        useMemoCache: Mt,
        useCacheRefresh: Mt
    };
    on.useEffectEvent = Mt;
    var Po = {
            readContext: Zt,
            use: pu,
            useCallback: function(t, e) {
                return Wt().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: Zt,
            useEffect: wo,
            useImperativeHandle: function(t, e, l) {
                l = l != null ? l.concat([t]) : null, xu(4194308, 4, Go.bind(null, e, t), l)
            },
            useLayoutEffect: function(t, e) {
                return xu(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                xu(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var l = Wt();
                e = e === void 0 ? null : e;
                var a = t();
                if (Kl) {
                    il(!0);
                    try {
                        t()
                    } finally {
                        il(!1)
                    }
                }
                return l.memoizedState = [a, e], a
            },
            useReducer: function(t, e, l) {
                var a = Wt();
                if (l !== void 0) {
                    var n = l(e);
                    if (Kl) {
                        il(!0);
                        try {
                            l(e)
                        } finally {
                            il(!1)
                        }
                    }
                } else n = e;
                return a.memoizedState = a.baseState = n, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: n
                }, a.queue = t, t = t.dispatch = n0.bind(null, P, t), [a.memoizedState, t]
            },
            useRef: function(t) {
                var e = Wt();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: function(t) {
                t = gc(t);
                var e = t.queue,
                    l = Fo.bind(null, P, e);
                return e.dispatch = l, [t.memoizedState, l]
            },
            useDebugValue: Sc,
            useDeferredValue: function(t, e) {
                var l = Wt();
                return Ec(l, t, e)
            },
            useTransition: function() {
                var t = gc(!1);
                return t = Vo.bind(null, P, t.queue, !0, !1), Wt().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, e, l) {
                var a = P,
                    n = Wt();
                if (ct) {
                    if (l === void 0) throw Error(s(407));
                    l = l()
                } else {
                    if (l = e(), St === null) throw Error(s(349));
                    (ut & 127) !== 0 || bo(a, e, l)
                }
                n.memoizedState = l;
                var u = {
                    value: l,
                    getSnapshot: e
                };
                return n.queue = u, wo(Eo.bind(null, a, u, t), [t]), a.flags |= 2048, Sa(9, {
                    destroy: void 0
                }, So.bind(null, a, u, l, e), null), l
            },
            useId: function() {
                var t = Wt(),
                    e = St.identifierPrefix;
                if (ct) {
                    var l = Ue,
                        a = He;
                    l = (a & ~(1 << 32 - ce(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = yu++, 0 < l && (e += "H" + l.toString(32)), e += "_"
                } else l = Wm++, e = "_" + e + "r_" + l.toString(32) + "_";
                return t.memoizedState = e
            },
            useHostTransitionStatus: zc,
            useFormState: Co,
            useActionState: Co,
            useOptimistic: function(t) {
                var e = Wt();
                e.memoizedState = e.baseState = t;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = l, e = Tc.bind(null, P, !0, l), l.dispatch = e, [t, e]
            },
            useMemoCache: yc,
            useCacheRefresh: function() {
                return Wt().memoizedState = a0.bind(null, P)
            },
            useEffectEvent: function(t) {
                var e = Wt(),
                    l = {
                        impl: t
                    };
                return e.memoizedState = l,
                    function() {
                        if ((ot & 2) !== 0) throw Error(s(440));
                        return l.impl.apply(void 0, arguments)
                    }
            }
        },
        Nc = {
            readContext: Zt,
            use: pu,
            useCallback: Xo,
            useContext: Zt,
            useEffect: bc,
            useImperativeHandle: Yo,
            useInsertionEffect: qo,
            useLayoutEffect: Lo,
            useMemo: Qo,
            useReducer: gu,
            useRef: Uo,
            useState: function() {
                return gu(Je)
            },
            useDebugValue: Sc,
            useDeferredValue: function(t, e) {
                var l = Ot();
                return Zo(l, yt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = gu(Je)[0],
                    e = Ot().memoizedState;
                return [typeof t == "boolean" ? t : sn(t), e]
            },
            useSyncExternalStore: xo,
            useId: ko,
            useHostTransitionStatus: zc,
            useFormState: Oo,
            useActionState: Oo,
            useOptimistic: function(t, e) {
                var l = Ot();
                return To(l, yt, t, e)
            },
            useMemoCache: yc,
            useCacheRefresh: $o
        };
    Nc.useEffectEvent = Bo;
    var tr = {
        readContext: Zt,
        use: pu,
        useCallback: Xo,
        useContext: Zt,
        useEffect: bc,
        useImperativeHandle: Yo,
        useInsertionEffect: qo,
        useLayoutEffect: Lo,
        useMemo: Qo,
        useReducer: pc,
        useRef: Uo,
        useState: function() {
            return pc(Je)
        },
        useDebugValue: Sc,
        useDeferredValue: function(t, e) {
            var l = Ot();
            return yt === null ? Ec(l, t, e) : Zo(l, yt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = pc(Je)[0],
                e = Ot().memoizedState;
            return [typeof t == "boolean" ? t : sn(t), e]
        },
        useSyncExternalStore: xo,
        useId: ko,
        useHostTransitionStatus: zc,
        useFormState: Ho,
        useActionState: Ho,
        useOptimistic: function(t, e) {
            var l = Ot();
            return yt !== null ? To(l, yt, t, e) : (l.baseState = t, [t, l.queue.dispatch])
        },
        useMemoCache: yc,
        useCacheRefresh: $o
    };
    tr.useEffectEvent = Bo;

    function Mc(t, e, l, a) {
        e = t.memoizedState, l = l(a, e), l = l == null ? e : T({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l)
    }
    var _c = {
        enqueueSetState: function(t, e, l) {
            t = t._reactInternals;
            var a = me(),
                n = ml(a);
            n.payload = e, l != null && (n.callback = l), e = yl(t, n, a), e !== null && (ne(e, t, a), an(e, t, a))
        },
        enqueueReplaceState: function(t, e, l) {
            t = t._reactInternals;
            var a = me(),
                n = ml(a);
            n.tag = 1, n.payload = e, l != null && (n.callback = l), e = yl(t, n, a), e !== null && (ne(e, t, a), an(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var l = me(),
                a = ml(l);
            a.tag = 2, e != null && (a.callback = e), e = yl(t, a, l), e !== null && (ne(e, t, l), an(e, t, l))
        }
    };

    function er(t, e, l, a, n, u, i) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !$a(l, a) || !$a(n, u) : !0
    }

    function lr(t, e, l, a) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && _c.enqueueReplaceState(e, e.state, null)
    }

    function Jl(t, e) {
        var l = e;
        if ("ref" in e) {
            l = {};
            for (var a in e) a !== "ref" && (l[a] = e[a])
        }
        if (t = t.defaultProps) {
            l === e && (l = T({}, l));
            for (var n in t) l[n] === void 0 && (l[n] = t[n])
        }
        return l
    }

    function ar(t) {
        Pn(t)
    }

    function nr(t) {
        console.error(t)
    }

    function ur(t) {
        Pn(t)
    }

    function Eu(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function ir(t, e, l) {
        try {
            var a = t.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function Rc(t, e, l) {
        return l = ml(l), l.tag = 3, l.payload = {
            element: null
        }, l.callback = function() {
            Eu(t, e)
        }, l
    }

    function cr(t) {
        return t = ml(t), t.tag = 3, t
    }

    function sr(t, e, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function() {
                return n(u)
            }, t.callback = function() {
                ir(e, l, a)
            }
        }
        var i = l.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            ir(e, l, a), typeof n != "function" && (Sl === null ? Sl = new Set([this]) : Sl.add(this));
            var f = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: f !== null ? f : ""
            })
        })
    }

    function u0(t, e, l, a, n) {
        if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = l.alternate, e !== null && ha(e, l, n, !0), l = oe.current, l !== null) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return ze === null ? Hu() : l.alternate === null && _t === 0 && (_t = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === fu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([a]) : e.add(a), ts(t, a, n)), !1;
                    case 22:
                        return l.flags |= 65536, a === fu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([a]) : l.add(a)), ts(t, a, n)), !1
                }
                throw Error(s(435, l.tag))
            }
            return ts(t, a, n), Hu(), !1
        }
        if (ct) return e = oe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== ki && (t = Error(s(422), {
            cause: a
        }), Ia(be(t, l)))) : (a !== ki && (e = Error(s(423), {
            cause: a
        }), Ia(be(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = be(a, l), n = Rc(t.stateNode, a, n), uc(t, n), _t !== 4 && (_t = 2)), !1;
        var u = Error(s(520), {
            cause: a
        });
        if (u = be(u, l), gn === null ? gn = [u] : gn.push(u), _t !== 4 && (_t = 2), e === null) return !0;
        a = be(a, l), l = e;
        do {
            switch (l.tag) {
                case 3:
                    return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Rc(l.stateNode, a, t), uc(l, t), !1;
                case 1:
                    if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sl === null || !Sl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = cr(n), sr(n, t, l, a), uc(l, n), !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var jc = Error(s(461)),
        wt = !1;

    function Vt(t, e, l, a) {
        e.child = t === null ? ro(e, null, l, a) : Vl(e, t.child, l, a)
    }

    function fr(t, e, l, a, n) {
        l = l.render;
        var u = e.ref;
        if ("ref" in a) {
            var i = {};
            for (var f in a) f !== "ref" && (i[f] = a[f])
        } else i = a;
        return Yl(e), a = rc(t, e, l, i, u, n), f = dc(), t !== null && !wt ? (hc(t, e, n), ke(t, e, n)) : (ct && f && Ki(e), e.flags |= 1, Vt(t, e, a, n), e.child)
    }

    function or(t, e, l, a, n) {
        if (t === null) {
            var u = l.type;
            return typeof u == "function" && !Qi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, rr(t, e, u, a, n)) : (t = au(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !qc(t, n)) {
            var i = u.memoizedProps;
            if (l = l.compare, l = l !== null ? l : $a, l(i, a) && t.ref === e.ref) return ke(t, e, n)
        }
        return e.flags |= 1, t = Xe(u, a), t.ref = e.ref, t.return = e, e.child = t
    }

    function rr(t, e, l, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if ($a(u, a) && t.ref === e.ref)
                if (wt = !1, e.pendingProps = a = u, qc(t, n))(t.flags & 131072) !== 0 && (wt = !0);
                else return e.lanes = t.lanes, ke(t, e, n)
        }
        return Cc(t, e, l, a, n)
    }

    function dr(t, e, l, a) {
        var n = a.children,
            u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | l : l, t !== null) {
                    for (a = e.child = t.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
                    a = n & ~u
                } else a = 0, e.child = null;
                return hr(t, e, u, l, a)
            }
            if ((l & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && cu(e, u !== null ? u.cachePool : null), u !== null ? yo(e, u) : cc(), vo(e);
            else return a = e.lanes = 536870912, hr(t, e, u !== null ? u.baseLanes | l : l, l, a)
        } else u !== null ? (cu(e, u.cachePool), yo(e, u), pl(), e.memoizedState = null) : (t !== null && cu(e, null), cc(), pl());
        return Vt(t, e, n, l), e.child
    }

    function rn(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), e.sibling
    }

    function hr(t, e, l, a, n) {
        var u = ec();
        return u = u === null ? null : {
            parent: Ht._currentValue,
            pool: u
        }, e.memoizedState = {
            baseLanes: l,
            cachePool: u
        }, t !== null && cu(e, null), cc(), vo(e), t !== null && ha(t, e, a, !0), e.childLanes = n, null
    }

    function Au(t, e) {
        return e = Tu({
            mode: e.mode,
            children: e.children
        }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function mr(t, e, l) {
        return Vl(e, t.child, null, l), t = Au(e, e.pendingProps), t.flags |= 2, re(e), e.memoizedState = null, t
    }

    function i0(t, e, l) {
        var a = e.pendingProps,
            n = (e.flags & 128) !== 0;
        if (e.flags &= -129, t === null) {
            if (ct) {
                if (a.mode === "hidden") return t = Au(e, a), e.lanes = 536870912, rn(null, t);
                if (fc(e), (t = Et) ? (t = Nd(t, Ae), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: fl !== null ? {
                            id: He,
                            overflow: Ue
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, l = Ff(t), l.return = e, e.child = l, Qt = e, Et = null)) : t = null, t === null) throw rl(e);
                return e.lanes = 536870912, null
            }
            return Au(e, a)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var i = u.dehydrated;
            if (fc(e), n)
                if (e.flags & 256) e.flags &= -257, e = mr(t, e, l);
                else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
            else throw Error(s(558));
            else if (wt || ha(t, e, l, !1), n = (l & t.childLanes) !== 0, wt || n) {
                if (a = St, a !== null && (i = lf(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Bl(t, i), ne(a, t, i), jc;
                Hu(), e = mr(t, e, l)
            } else t = u.treeContext, Et = Te(i.nextSibling), Qt = e, ct = !0, ol = null, Ae = !1, t !== null && Pf(e, t), e = Au(e, a), e.flags |= 4096;
            return e
        }
        return t = Xe(t.child, {
            mode: a.mode,
            children: a.children
        }), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function zu(t, e) {
        var l = e.ref;
        if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object") throw Error(s(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }

    function Cc(t, e, l, a, n) {
        return Yl(e), l = rc(t, e, l, a, void 0, n), a = dc(), t !== null && !wt ? (hc(t, e, n), ke(t, e, n)) : (ct && a && Ki(e), e.flags |= 1, Vt(t, e, l, n), e.child)
    }

    function yr(t, e, l, a, n, u) {
        return Yl(e), e.updateQueue = null, l = go(e, a, l, n), po(t), a = dc(), t !== null && !wt ? (hc(t, e, u), ke(t, e, u)) : (ct && a && Ki(e), e.flags |= 1, Vt(t, e, l, u), e.child)
    }

    function vr(t, e, l, a, n) {
        if (Yl(e), e.stateNode === null) {
            var u = fa,
                i = l.contextType;
            typeof i == "object" && i !== null && (u = Zt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _c, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ac(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Zt(i) : fa, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Mc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && _c.enqueueReplaceState(u, u.state, null), un(e, a, u, n), nn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
        } else if (t === null) {
            u = e.stateNode;
            var f = e.memoizedProps,
                m = Jl(l, f);
            u.props = m;
            var A = u.context,
                R = l.contextType;
            i = fa, typeof R == "object" && R !== null && (i = Zt(R));
            var D = l.getDerivedStateFromProps;
            R = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = e.pendingProps !== f, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || A !== i) && lr(e, u, a, i), hl = !1;
            var z = e.memoizedState;
            u.state = z, un(e, a, u, n), nn(), A = e.memoizedState, f || z !== A || hl ? (typeof D == "function" && (Mc(e, l, D, a), A = e.memoizedState), (m = hl || er(e, l, m, a, z, A, i)) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
        } else {
            u = e.stateNode, nc(t, e), i = e.memoizedProps, R = Jl(l, i), u.props = R, D = e.pendingProps, z = u.context, A = l.contextType, m = fa, typeof A == "object" && A !== null && (m = Zt(A)), f = l.getDerivedStateFromProps, (A = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || z !== m) && lr(e, u, a, m), hl = !1, z = e.memoizedState, u.state = z, un(e, a, u, n), nn();
            var N = e.memoizedState;
            i !== D || z !== N || hl || t !== null && t.dependencies !== null && uu(t.dependencies) ? (typeof f == "function" && (Mc(e, l, f, a), N = e.memoizedState), (R = hl || er(e, l, R, a, z, N, m) || t !== null && t.dependencies !== null && uu(t.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, N, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, N, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = m, a = R) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), a = !1)
        }
        return u = a, zu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Vl(e, t.child, null, n), e.child = Vl(e, null, l, n)) : Vt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = ke(t, e, n), t
    }

    function pr(t, e, l, a) {
        return Ll(), e.flags |= 256, Vt(t, e, l, a), e.child
    }
    var Oc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Dc(t) {
        return {
            baseLanes: t,
            cachePool: uo()
        }
    }

    function Hc(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0, e && (t |= he), t
    }

    function gr(t, e, l) {
        var a = e.pendingProps,
            n = !1,
            u = (e.flags & 128) !== 0,
            i;
        if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (ct) {
                if (n ? vl(e) : pl(), (t = Et) ? (t = Nd(t, Ae), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: fl !== null ? {
                            id: He,
                            overflow: Ue
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, l = Ff(t), l.return = e, e.child = l, Qt = e, Et = null)) : t = null, t === null) throw rl(e);
                return vs(t) ? e.lanes = 32 : e.lanes = 536870912, null
            }
            var f = a.children;
            return a = a.fallback, n ? (pl(), n = e.mode, f = Tu({
                mode: "hidden",
                children: f
            }, n), a = ql(a, n, l, null), f.return = e, a.return = e, f.sibling = a, e.child = f, a = e.child, a.memoizedState = Dc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Oc, rn(null, a)) : (vl(e), Uc(e, f))
        }
        var m = t.memoizedState;
        if (m !== null && (f = m.dehydrated, f !== null)) {
            if (u) e.flags & 256 ? (vl(e), e.flags &= -257, e = wc(t, e, l)) : e.memoizedState !== null ? (pl(), e.child = t.child, e.flags |= 128, e = null) : (pl(), f = a.fallback, n = e.mode, a = Tu({
                mode: "visible",
                children: a.children
            }, n), f = ql(f, n, l, null), f.flags |= 2, a.return = e, f.return = e, a.sibling = f, e.child = a, Vl(e, t.child, null, l), a = e.child, a.memoizedState = Dc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Oc, e = rn(null, a));
            else if (vl(e), vs(f)) {
                if (i = f.nextSibling && f.nextSibling.dataset, i) var A = i.dgst;
                i = A, a = Error(s(419)), a.stack = "", a.digest = i, Ia({
                    value: a,
                    source: null,
                    stack: null
                }), e = wc(t, e, l)
            } else if (wt || ha(t, e, l, !1), i = (l & t.childLanes) !== 0, wt || i) {
                if (i = St, i !== null && (a = lf(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Bl(t, a), ne(i, t, a), jc;
                ys(f) || Hu(), e = wc(t, e, l)
            } else ys(f) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Et = Te(f.nextSibling), Qt = e, ct = !0, ol = null, Ae = !1, t !== null && Pf(e, t), e = Uc(e, a.children), e.flags |= 4096);
            return e
        }
        return n ? (pl(), f = a.fallback, n = e.mode, m = t.child, A = m.sibling, a = Xe(m, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = m.subtreeFlags & 65011712, A !== null ? f = Xe(A, f) : (f = ql(f, n, l, null), f.flags |= 2), f.return = e, a.return = e, a.sibling = f, e.child = a, rn(null, a), a = e.child, f = t.child.memoizedState, f === null ? f = Dc(l) : (n = f.cachePool, n !== null ? (m = Ht._currentValue, n = n.parent !== m ? {
            parent: m,
            pool: m
        } : n) : n = uo(), f = {
            baseLanes: f.baseLanes | l,
            cachePool: n
        }), a.memoizedState = f, a.childLanes = Hc(t, i, l), e.memoizedState = Oc, rn(t.child, a)) : (vl(e), l = t.child, t = l.sibling, l = Xe(l, {
            mode: "visible",
            children: a.children
        }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l)
    }

    function Uc(t, e) {
        return e = Tu({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function Tu(t, e) {
        return t = fe(22, t, null, e), t.lanes = 0, t
    }

    function wc(t, e, l) {
        return Vl(e, t.child, null, l), t = Uc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function xr(t, e, l) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e), Wi(t.return, e, l)
    }

    function Bc(t, e, l, a, n, u) {
        var i = t.memoizedState;
        i === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: u
        } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u)
    }

    function br(t, e, l) {
        var a = e.pendingProps,
            n = a.revealOrder,
            u = a.tail;
        a = a.children;
        var i = Ct.current,
            f = (i & 2) !== 0;
        if (f ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, q(Ct, i), Vt(t, e, a, l), a = ct ? Wa : 0, !f && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && xr(t, l, e);
            else if (t.tag === 19) xr(t, l, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (n) {
            case "forwards":
                for (l = e.child, n = null; l !== null;) t = l.alternate, t !== null && hu(t) === null && (n = l), l = l.sibling;
                l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Bc(e, !1, n, l, u, a);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (l = null, n = e.child, e.child = null; n !== null;) {
                    if (t = n.alternate, t !== null && hu(t) === null) {
                        e.child = n;
                        break
                    }
                    t = n.sibling, n.sibling = l, l = n, n = t
                }
                Bc(e, !0, l, null, u, a);
                break;
            case "together":
                Bc(e, !1, null, null, void 0, a);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function ke(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies), bl |= e.lanes, (l & e.childLanes) === 0)
            if (t !== null) {
                if (ha(t, e, l, !1), (l & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(s(153));
        if (e.child !== null) {
            for (t = e.child, l = Xe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;) t = t.sibling, l = l.sibling = Xe(t, t.pendingProps), l.return = e;
            l.sibling = null
        }
        return e.child
    }

    function qc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && uu(t)))
    }

    function c0(t, e, l) {
        switch (e.tag) {
            case 3:
                Ft(e, e.stateNode.containerInfo), dl(e, Ht, t.memoizedState.cache), Ll();
                break;
            case 27:
            case 5:
                wa(e);
                break;
            case 4:
                Ft(e, e.stateNode.containerInfo);
                break;
            case 10:
                dl(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return e.flags |= 128, fc(e), null;
                break;
            case 13:
                var a = e.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (vl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? gr(t, e, l) : (vl(e), t = ke(t, e, l), t !== null ? t.sibling : null);
                vl(e);
                break;
            case 19:
                var n = (t.flags & 128) !== 0;
                if (a = (l & e.childLanes) !== 0, a || (ha(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
                    if (a) return br(t, e, l);
                    e.flags |= 128
                }
                if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), q(Ct, Ct.current), a) break;
                return null;
            case 22:
                return e.lanes = 0, dr(t, e, l, e.pendingProps);
            case 24:
                dl(e, Ht, t.memoizedState.cache)
        }
        return ke(t, e, l)
    }

    function Sr(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) wt = !0;
            else {
                if (!qc(t, l) && (e.flags & 128) === 0) return wt = !1, c0(t, e, l);
                wt = (t.flags & 131072) !== 0
            }
        else wt = !1, ct && (e.flags & 1048576) !== 0 && If(e, Wa, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    var a = e.pendingProps;
                    if (t = Ql(e.elementType), e.type = t, typeof t == "function") Qi(t) ? (a = Jl(t, a), e.tag = 1, e = vr(null, e, t, a, l)) : (e.tag = 0, e = Cc(null, e, t, a, l));
                    else {
                        if (t != null) {
                            var n = t.$$typeof;
                            if (n === gt) {
                                e.tag = 11, e = fr(null, e, t, a, l);
                                break t
                            } else if (n === F) {
                                e.tag = 14, e = or(null, e, t, a, l);
                                break t
                            }
                        }
                        throw e = ve(t) || t, Error(s(306, e, ""))
                    }
                }
                return e;
            case 0:
                return Cc(t, e, e.type, e.pendingProps, l);
            case 1:
                return a = e.type, n = Jl(a, e.pendingProps), vr(t, e, a, n, l);
            case 3:
                t: {
                    if (Ft(e, e.stateNode.containerInfo), t === null) throw Error(s(387));a = e.pendingProps;
                    var u = e.memoizedState;n = u.element,
                    nc(t, e),
                    un(e, a, null, l);
                    var i = e.memoizedState;
                    if (a = i.cache, dl(e, Ht, a), a !== u.cache && Ii(e, [Ht], l, !0), nn(), a = i.element, u.isDehydrated)
                        if (u = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache
                            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = pr(t, e, a, l);
                            break t
                        } else if (a !== n) {
                        n = be(Error(s(424)), e), Ia(n), e = pr(t, e, a, l);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Et = Te(t.firstChild), Qt = e, ct = !0, ol = null, Ae = !0, l = ro(e, null, a, l), e.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
                    else {
                        if (Ll(), a === n) {
                            e = ke(t, e, l);
                            break t
                        }
                        Vt(t, e, a, l)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return zu(t, e), t === null ? (l = Od(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = Yu(lt.current).createElement(l), a[Xt] = e, a[It] = t, Kt(a, l, t), Gt(a), e.stateNode = a) : e.memoizedState = Od(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return wa(e), t === null && ct && (a = e.stateNode = Rd(e.type, e.pendingProps, lt.current), Qt = e, Ae = !0, n = Et, Tl(e.type) ? (ps = n, Et = Te(a.firstChild)) : Et = n), Vt(t, e, e.pendingProps.children, l), zu(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && ct && ((n = a = Et) && (a = B0(a, e.type, e.pendingProps, Ae), a !== null ? (e.stateNode = a, Qt = e, Et = Te(a.firstChild), Ae = !1, n = !0) : n = !1), n || rl(e)), wa(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ds(n, u) ? a = null : i !== null && ds(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = rc(t, e, Im, null, null, l), Nn._currentValue = n), zu(t, e), Vt(t, e, a, l), e.child;
            case 6:
                return t === null && ct && ((t = l = Et) && (l = q0(l, e.pendingProps, Ae), l !== null ? (e.stateNode = l, Qt = e, Et = null, t = !0) : t = !1), t || rl(e)), null;
            case 13:
                return gr(t, e, l);
            case 4:
                return Ft(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Vl(e, null, a, l) : Vt(t, e, a, l), e.child;
            case 11:
                return fr(t, e, e.type, e.pendingProps, l);
            case 7:
                return Vt(t, e, e.pendingProps, l), e.child;
            case 8:
                return Vt(t, e, e.pendingProps.children, l), e.child;
            case 12:
                return Vt(t, e, e.pendingProps.children, l), e.child;
            case 10:
                return a = e.pendingProps, dl(e, e.type, a.value), Vt(t, e, a.children, l), e.child;
            case 9:
                return n = e.type._context, a = e.pendingProps.children, Yl(e), n = Zt(n), a = a(n), e.flags |= 1, Vt(t, e, a, l), e.child;
            case 14:
                return or(t, e, e.type, e.pendingProps, l);
            case 15:
                return rr(t, e, e.type, e.pendingProps, l);
            case 19:
                return br(t, e, l);
            case 31:
                return i0(t, e, l);
            case 22:
                return dr(t, e, l, e.pendingProps);
            case 24:
                return Yl(e), a = Zt(Ht), t === null ? (n = ec(), n === null && (n = St, u = Pi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
                    parent: a,
                    cache: n
                }, ac(e), dl(e, Ht, n)) : ((t.lanes & l) !== 0 && (nc(t, e), un(e, null, null, l), nn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
                    parent: a,
                    cache: a
                }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), dl(e, Ht, a)) : (a = u.cache, dl(e, Ht, a), a !== n.cache && Ii(e, [Ht], l, !0))), Vt(t, e, e.pendingProps.children, l), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(s(156, e.tag))
    }

    function $e(t) {
        t.flags |= 4
    }

    function Lc(t, e, l, a, n) {
        if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
            if (t.flags |= 16777216, (n & 335544128) === n)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (kr()) t.flags |= 8192;
            else throw Zl = fu, lc
        } else t.flags &= -16777217
    }

    function Er(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !Bd(e))
            if (kr()) t.flags |= 8192;
            else throw Zl = fu, lc
    }

    function Nu(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ps() : 536870912, t.lanes |= e, Ta |= e)
    }

    function dn(t, e) {
        if (!ct) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var l = null; e !== null;) e.alternate !== null && (l = e), e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = t.tail;
                for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
        }
    }

    function At(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            l = 0,
            a = 0;
        if (e)
            for (var n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
        else
            for (n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
        return t.subtreeFlags |= a, t.childLanes = l, e
    }

    function s0(t, e, l) {
        var a = e.pendingProps;
        switch (Ji(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return At(e), null;
            case 1:
                return At(e), null;
            case 3:
                return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ve(Ht), jt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (da(e) ? $e(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, $i())), At(e), null;
            case 26:
                var n = e.type,
                    u = e.memoizedState;
                return t === null ? ($e(e), u !== null ? (At(e), Er(e, u)) : (At(e), Lc(e, n, null, a, l))) : u ? u !== t.memoizedState ? ($e(e), At(e), Er(e, u)) : (At(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && $e(e), At(e), Lc(e, n, t, a, l)), null;
            case 27:
                if (Bn(e), l = lt.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && $e(e);
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(s(166));
                        return At(e), null
                    }
                    t = G.current, da(e) ? to(e) : (t = Rd(n, a, l), e.stateNode = t, $e(e))
                }
                return At(e), null;
            case 5:
                if (Bn(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && $e(e);
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(s(166));
                        return At(e), null
                    }
                    if (u = G.current, da(e)) to(e);
                    else {
                        var i = Yu(lt.current);
                        switch (u) {
                            case 1:
                                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        u = i.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                        break;
                                    case "select":
                                        u = typeof a.is == "string" ? i.createElement("select", {
                                            is: a.is
                                        }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                                        break;
                                    default:
                                        u = typeof a.is == "string" ? i.createElement(n, {
                                            is: a.is
                                        }) : i.createElement(n)
                                }
                        }
                        u[Xt] = e, u[It] = a;
                        t: for (i = e.child; i !== null;) {
                            if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                            else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === e) break t;
                            for (; i.sibling === null;) {
                                if (i.return === null || i.return === e) break t;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                        e.stateNode = u;
                        t: switch (Kt(u, n, a), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a = !!a.autoFocus;
                                break t;
                            case "img":
                                a = !0;
                                break t;
                            default:
                                a = !1
                        }
                        a && $e(e)
                    }
                }
                return At(e), Lc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== a && $e(e);
                else {
                    if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
                    if (t = lt.current, da(e)) {
                        if (t = e.stateNode, l = e.memoizedProps, a = null, n = Qt, n !== null) switch (n.tag) {
                            case 27:
                            case 5:
                                a = n.memoizedProps
                        }
                        t[Xt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || gd(t.nodeValue, l)), t || rl(e, !0)
                    } else t = Yu(t).createTextNode(a), t[Xt] = e, e.stateNode = t
                }
                return At(e), null;
            case 31:
                if (l = e.memoizedState, t === null || t.memoizedState !== null) {
                    if (a = da(e), l !== null) {
                        if (t === null) {
                            if (!a) throw Error(s(318));
                            if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
                            t[Xt] = e
                        } else Ll(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        At(e), t = !1
                    } else l = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
                    if (!t) return e.flags & 256 ? (re(e), e) : (re(e), null);
                    if ((e.flags & 128) !== 0) throw Error(s(558))
                }
                return At(e), null;
            case 13:
                if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (n = da(e), a !== null && a.dehydrated !== null) {
                        if (t === null) {
                            if (!n) throw Error(s(318));
                            if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
                            n[Xt] = e
                        } else Ll(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        At(e), n = !1
                    } else n = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return e.flags & 256 ? (re(e), e) : (re(e), null)
                }
                return re(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Nu(e, e.updateQueue), At(e), null);
            case 4:
                return jt(), t === null && cs(e.stateNode.containerInfo), At(e), null;
            case 10:
                return Ve(e.type), At(e), null;
            case 19:
                if (H(Ct), a = e.memoizedState, a === null) return At(e), null;
                if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
                    if (n) dn(a, !1);
                    else {
                        if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (u = hu(t), u !== null) {
                                    for (e.flags |= 128, dn(a, !1), t = u.updateQueue, e.updateQueue = t, Nu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;) $f(l, t), l = l.sibling;
                                    return q(Ct, Ct.current & 1 | 2), ct && Qe(e, a.treeForkCount), e.child
                                }
                                t = t.sibling
                            }
                        a.tail !== null && ue() > Cu && (e.flags |= 128, n = !0, dn(a, !1), e.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (t = hu(u), t !== null) {
                            if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Nu(e, t), dn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct) return At(e), null
                        } else 2 * ue() - a.renderingStartTime > Cu && l !== 536870912 && (e.flags |= 128, n = !0, dn(a, !1), e.lanes = 4194304);
                    a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ue(), t.sibling = null, l = Ct.current, q(Ct, n ? l & 1 | 2 : l & 1), ct && Qe(e, a.treeForkCount), t) : (At(e), null);
            case 22:
            case 23:
                return re(e), sc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (At(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : At(e), l = e.updateQueue, l !== null && Nu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && H(Xl), null;
            case 24:
                return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ve(Ht), At(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(s(156, e.tag))
    }

    function f0(t, e) {
        switch (Ji(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return Ve(Ht), jt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Bn(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if (re(e), e.alternate === null) throw Error(s(340));
                    Ll()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 13:
                if (re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(s(340));
                    Ll()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return H(Ct), null;
            case 4:
                return jt(), null;
            case 10:
                return Ve(e.type), null;
            case 22:
            case 23:
                return re(e), sc(), t !== null && H(Xl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return Ve(Ht), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Ar(t, e) {
        switch (Ji(e), e.tag) {
            case 3:
                Ve(Ht), jt();
                break;
            case 26:
            case 27:
            case 5:
                Bn(e);
                break;
            case 4:
                jt();
                break;
            case 31:
                e.memoizedState !== null && re(e);
                break;
            case 13:
                re(e);
                break;
            case 19:
                H(Ct);
                break;
            case 10:
                Ve(e.type);
                break;
            case 22:
            case 23:
                re(e), sc(), t !== null && H(Xl);
                break;
            case 24:
                Ve(Ht)
        }
    }

    function hn(t, e) {
        try {
            var l = e.updateQueue,
                a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & t) === t) {
                        a = void 0;
                        var u = l.create,
                            i = l.inst;
                        a = u(), i.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (f) {
            ht(e, e.return, f)
        }
    }

    function gl(t, e, l) {
        try {
            var a = e.updateQueue,
                n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst,
                            f = i.destroy;
                        if (f !== void 0) {
                            i.destroy = void 0, n = e;
                            var m = l,
                                A = f;
                            try {
                                A()
                            } catch (R) {
                                ht(n, m, R)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (R) {
            ht(e, e.return, R)
        }
    }

    function zr(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                mo(e, l)
            } catch (a) {
                ht(t, t.return, a)
            }
        }
    }

    function Tr(t, e, l) {
        l.props = Jl(t.type, t.memoizedProps), l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            ht(t, e, a)
        }
    }

    function mn(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = t.stateNode;
                        break;
                    case 30:
                        a = t.stateNode;
                        break;
                    default:
                        a = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            ht(t, e, n)
        }
    }

    function we(t, e) {
        var l = t.ref,
            a = t.refCleanup;
        if (l !== null)
            if (typeof a == "function") try {
                a()
            } catch (n) {
                ht(t, e, n)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof l == "function") try {
                l(null)
            } catch (n) {
                ht(t, e, n)
            } else l.current = null
    }

    function Nr(t) {
        var e = t.type,
            l = t.memoizedProps,
            a = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    l.autoFocus && a.focus();
                    break t;
                case "img":
                    l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        }
        catch (n) {
            ht(t, t.return, n)
        }
    }

    function Gc(t, e, l) {
        try {
            var a = t.stateNode;
            C0(a, t.type, l, e), a[It] = e
        } catch (n) {
            ht(t, t.return, n)
        }
    }

    function Mr(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Tl(t.type) || t.tag === 4
    }

    function Yc(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Mr(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Tl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Xc(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ge));
        else if (a !== 4 && (a === 27 && Tl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
            for (Xc(t, e, l), t = t.sibling; t !== null;) Xc(t, e, l), t = t.sibling
    }

    function Mu(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (a !== 4 && (a === 27 && Tl(t.type) && (l = t.stateNode), t = t.child, t !== null))
            for (Mu(t, e, l), t = t.sibling; t !== null;) Mu(t, e, l), t = t.sibling
    }

    function _r(t) {
        var e = t.stateNode,
            l = t.memoizedProps;
        try {
            for (var a = t.type, n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
            Kt(e, a, l), e[Xt] = t, e[It] = l
        } catch (u) {
            ht(t, t.return, u)
        }
    }
    var Fe = !1,
        Bt = !1,
        Qc = !1,
        Rr = typeof WeakSet == "function" ? WeakSet : Set,
        Yt = null;

    function o0(t, e) {
        if (t = t.containerInfo, os = ku, t = Gf(t), wi(t)) {
            if ("selectionStart" in t) var l = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                l = (l = t.ownerDocument) && l.defaultView || window;
                var a = l.getSelection && l.getSelection();
                if (a && a.rangeCount !== 0) {
                    l = a.anchorNode;
                    var n = a.anchorOffset,
                        u = a.focusNode;
                    a = a.focusOffset;
                    try {
                        l.nodeType, u.nodeType
                    } catch {
                        l = null;
                        break t
                    }
                    var i = 0,
                        f = -1,
                        m = -1,
                        A = 0,
                        R = 0,
                        D = t,
                        z = null;
                    e: for (;;) {
                        for (var N; D !== l || n !== 0 && D.nodeType !== 3 || (f = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (m = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (N = D.firstChild) !== null;) z = D, D = N;
                        for (;;) {
                            if (D === t) break e;
                            if (z === l && ++A === n && (f = i), z === u && ++R === a && (m = i), (N = D.nextSibling) !== null) break;
                            D = z, z = D.parentNode
                        }
                        D = N
                    }
                    l = f === -1 || m === -1 ? null : {
                        start: f,
                        end: m
                    }
                } else l = null
            }
            l = l || {
                start: 0,
                end: 0
            }
        } else l = null;
        for (rs = {
                focusedElem: t,
                selectionRange: l
            }, ku = !1, Yt = e; Yt !== null;)
            if (e = Yt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Yt = t;
            else
                for (; Yt !== null;) {
                    switch (e = Yt, u = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                                try {
                                    var L = Jl(l.type, n);
                                    t = a.getSnapshotBeforeUpdate(L, u), a.__reactInternalSnapshotBeforeUpdate = t
                                } catch (V) {
                                    ht(l, l.return, V)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) ms(t);
                                else if (l === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        ms(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(s(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, Yt = t;
                        break
                    }
                    Yt = e.return
                }
    }

    function jr(t, e, l) {
        var a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Ie(t, l), a & 4 && hn(5, l);
                break;
            case 1:
                if (Ie(t, l), a & 4)
                    if (t = l.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (i) {
                        ht(l, l.return, i)
                    } else {
                        var n = Jl(l.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            ht(l, l.return, i)
                        }
                    }
                a & 64 && zr(l), a & 512 && mn(l, l.return);
                break;
            case 3:
                if (Ie(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
                    if (e = null, l.child !== null) switch (l.child.tag) {
                        case 27:
                        case 5:
                            e = l.child.stateNode;
                            break;
                        case 1:
                            e = l.child.stateNode
                    }
                    try {
                        mo(t, e)
                    } catch (i) {
                        ht(l, l.return, i)
                    }
                }
                break;
            case 27:
                e === null && a & 4 && _r(l);
            case 26:
            case 5:
                Ie(t, l), e === null && a & 4 && Nr(l), a & 512 && mn(l, l.return);
                break;
            case 12:
                Ie(t, l);
                break;
            case 31:
                Ie(t, l), a & 4 && Dr(t, l);
                break;
            case 13:
                Ie(t, l), a & 4 && Hr(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = x0.bind(null, l), L0(t, l))));
                break;
            case 22:
                if (a = l.memoizedState !== null || Fe, !a) {
                    e = e !== null && e.memoizedState !== null || Bt, n = Fe;
                    var u = Bt;
                    Fe = a, (Bt = e) && !u ? Pe(t, l, (l.subtreeFlags & 8772) !== 0) : Ie(t, l), Fe = n, Bt = u
                }
                break;
            case 30:
                break;
            default:
                Ie(t, l)
        }
    }

    function Cr(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, Cr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var zt = null,
        te = !1;

    function We(t, e, l) {
        for (l = l.child; l !== null;) Or(t, e, l), l = l.sibling
    }

    function Or(t, e, l) {
        if (ie && typeof ie.onCommitFiberUnmount == "function") try {
            ie.onCommitFiberUnmount(Ba, l)
        } catch {}
        switch (l.tag) {
            case 26:
                Bt || we(l, e), We(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                break;
            case 27:
                Bt || we(l, e);
                var a = zt,
                    n = te;
                Tl(l.type) && (zt = l.stateNode, te = !1), We(t, e, l), An(l.stateNode), zt = a, te = n;
                break;
            case 5:
                Bt || we(l, e);
            case 6:
                if (a = zt, n = te, zt = null, We(t, e, l), zt = a, te = n, zt !== null)
                    if (te) try {
                        (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(l.stateNode)
                    } catch (u) {
                        ht(l, e, u)
                    } else try {
                        zt.removeChild(l.stateNode)
                    } catch (u) {
                        ht(l, e, u)
                    }
                break;
            case 18:
                zt !== null && (te ? (t = zt, zd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Da(t)) : zd(zt, l.stateNode));
                break;
            case 4:
                a = zt, n = te, zt = l.stateNode.containerInfo, te = !0, We(t, e, l), zt = a, te = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                gl(2, l, e), Bt || gl(4, l, e), We(t, e, l);
                break;
            case 1:
                Bt || (we(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Tr(l, e, a)), We(t, e, l);
                break;
            case 21:
                We(t, e, l);
                break;
            case 22:
                Bt = (a = Bt) || l.memoizedState !== null, We(t, e, l), Bt = a;
                break;
            default:
                We(t, e, l)
        }
    }

    function Dr(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                Da(t)
            } catch (l) {
                ht(e, e.return, l)
            }
        }
    }

    function Hr(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Da(t)
        } catch (l) {
            ht(e, e.return, l)
        }
    }

    function r0(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new Rr), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Rr), e;
            default:
                throw Error(s(435, t.tag))
        }
    }

    function _u(t, e) {
        var l = r0(t);
        e.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = b0.bind(null, t, a);
                a.then(n, n)
            }
        })
    }

    function ee(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a],
                    u = t,
                    i = e,
                    f = i;
                t: for (; f !== null;) {
                    switch (f.tag) {
                        case 27:
                            if (Tl(f.type)) {
                                zt = f.stateNode, te = !1;
                                break t
                            }
                            break;
                        case 5:
                            zt = f.stateNode, te = !1;
                            break t;
                        case 3:
                        case 4:
                            zt = f.stateNode.containerInfo, te = !0;
                            break t
                    }
                    f = f.return
                }
                if (zt === null) throw Error(s(160));
                Or(u, i, n), zt = null, te = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null;) Ur(e, t), e = e.sibling
    }
    var Re = null;

    function Ur(t, e) {
        var l = t.alternate,
            a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ee(e, t), le(t), a & 4 && (gl(3, t, t.return), hn(3, t), gl(5, t, t.return));
                break;
            case 1:
                ee(e, t), le(t), a & 512 && (Bt || l === null || we(l, l.return)), a & 64 && Fe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                break;
            case 26:
                var n = Re;
                if (ee(e, t), le(t), a & 512 && (Bt || l === null || we(l, l.return)), a & 4) {
                    var u = l !== null ? l.memoizedState : null;
                    if (a = t.memoizedState, l === null)
                        if (a === null)
                            if (t.stateNode === null) {
                                t: {
                                    a = t.type,
                                    l = t.memoizedProps,
                                    n = n.ownerDocument || n;e: switch (a) {
                                        case "title":
                                            u = n.getElementsByTagName("title")[0], (!u || u[Ga] || u[Xt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Kt(u, a, l), u[Xt] = t, Gt(u), a = u;
                                            break t;
                                        case "link":
                                            var i = Ud("link", "href", n).get(a + (l.href || ""));
                                            if (i) {
                                                for (var f = 0; f < i.length; f++)
                                                    if (u = i[f], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                        i.splice(f, 1);
                                                        break e
                                                    }
                                            }
                                            u = n.createElement(a), Kt(u, a, l), n.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (i = Ud("meta", "content", n).get(a + (l.content || ""))) {
                                                for (f = 0; f < i.length; f++)
                                                    if (u = i[f], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                        i.splice(f, 1);
                                                        break e
                                                    }
                                            }
                                            u = n.createElement(a), Kt(u, a, l), n.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(s(468, a))
                                    }
                                    u[Xt] = t,
                                    Gt(u),
                                    a = u
                                }
                                t.stateNode = a
                            }
                    else wd(n, t.type, t.stateNode);
                    else t.stateNode = Hd(n, a, t.memoizedProps);
                    else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? wd(n, t.type, t.stateNode) : Hd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Gc(t, t.memoizedProps, l.memoizedProps)
                }
                break;
            case 27:
                ee(e, t), le(t), a & 512 && (Bt || l === null || we(l, l.return)), l !== null && a & 4 && Gc(t, t.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (ee(e, t), le(t), a & 512 && (Bt || l === null || we(l, l.return)), t.flags & 32) {
                    n = t.stateNode;
                    try {
                        la(n, "")
                    } catch (L) {
                        ht(t, t.return, L)
                    }
                }
                a & 4 && t.stateNode != null && (n = t.memoizedProps, Gc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Qc = !0);
                break;
            case 6:
                if (ee(e, t), le(t), a & 4) {
                    if (t.stateNode === null) throw Error(s(162));
                    a = t.memoizedProps, l = t.stateNode;
                    try {
                        l.nodeValue = a
                    } catch (L) {
                        ht(t, t.return, L)
                    }
                }
                break;
            case 3:
                if (Zu = null, n = Re, Re = Xu(e.containerInfo), ee(e, t), Re = n, le(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                    Da(e.containerInfo)
                } catch (L) {
                    ht(t, t.return, L)
                }
                Qc && (Qc = !1, wr(t));
                break;
            case 4:
                a = Re, Re = Xu(t.stateNode.containerInfo), ee(e, t), le(t), Re = a;
                break;
            case 12:
                ee(e, t), le(t);
                break;
            case 31:
                ee(e, t), le(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, _u(t, a)));
                break;
            case 13:
                ee(e, t), le(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ju = ue()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, _u(t, a)));
                break;
            case 22:
                n = t.memoizedState !== null;
                var m = l !== null && l.memoizedState !== null,
                    A = Fe,
                    R = Bt;
                if (Fe = A || n, Bt = R || m, ee(e, t), Bt = R, Fe = A, le(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || Fe || Bt || kl(t)), l = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            m = l = e;
                            try {
                                if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    f = m.stateNode;
                                    var D = m.memoizedProps.style,
                                        z = D != null && D.hasOwnProperty("display") ? D.display : null;
                                    f.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                                }
                            } catch (L) {
                                ht(m, m.return, L)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            m = e;
                            try {
                                m.stateNode.nodeValue = n ? "" : m.memoizedProps
                            } catch (L) {
                                ht(m, m.return, L)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (l === null) {
                            m = e;
                            try {
                                var N = m.stateNode;
                                n ? Td(N, !0) : Td(m.stateNode, !1)
                            } catch (L) {
                                ht(m, m.return, L)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        l === e && (l = null), e = e.return
                    }
                    l === e && (l = null), e.sibling.return = e.return, e = e.sibling
                }
                a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, _u(t, l))));
                break;
            case 19:
                ee(e, t), le(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, _u(t, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ee(e, t), le(t)
        }
    }

    function le(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null;) {
                    if (Mr(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null) throw Error(s(160));
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode,
                            u = Yc(t);
                        Mu(t, u, n);
                        break;
                    case 5:
                        var i = l.stateNode;
                        l.flags & 32 && (la(i, ""), l.flags &= -33);
                        var f = Yc(t);
                        Mu(t, f, i);
                        break;
                    case 3:
                    case 4:
                        var m = l.stateNode.containerInfo,
                            A = Yc(t);
                        Xc(t, A, m);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (R) {
                ht(t, t.return, R)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function wr(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                wr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function Ie(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) jr(t, e.alternate, e), e = e.sibling
    }

    function kl(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    gl(4, e, e.return), kl(e);
                    break;
                case 1:
                    we(e, e.return);
                    var l = e.stateNode;
                    typeof l.componentWillUnmount == "function" && Tr(e, e.return, l), kl(e);
                    break;
                case 27:
                    An(e.stateNode);
                case 26:
                case 5:
                    we(e, e.return), kl(e);
                    break;
                case 22:
                    e.memoizedState === null && kl(e);
                    break;
                case 30:
                    kl(e);
                    break;
                default:
                    kl(e)
            }
            t = t.sibling
        }
    }

    function Pe(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var a = e.alternate,
                n = t,
                u = e,
                i = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    Pe(n, u, l), hn(4, u);
                    break;
                case 1:
                    if (Pe(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount()
                    } catch (A) {
                        ht(a, a.return, A)
                    }
                    if (a = u, n = a.updateQueue, n !== null) {
                        var f = a.stateNode;
                        try {
                            var m = n.shared.hiddenCallbacks;
                            if (m !== null)
                                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) ho(m[n], f)
                        } catch (A) {
                            ht(a, a.return, A)
                        }
                    }
                    l && i & 64 && zr(u), mn(u, u.return);
                    break;
                case 27:
                    _r(u);
                case 26:
                case 5:
                    Pe(n, u, l), l && a === null && i & 4 && Nr(u), mn(u, u.return);
                    break;
                case 12:
                    Pe(n, u, l);
                    break;
                case 31:
                    Pe(n, u, l), l && i & 4 && Dr(n, u);
                    break;
                case 13:
                    Pe(n, u, l), l && i & 4 && Hr(n, u);
                    break;
                case 22:
                    u.memoizedState === null && Pe(n, u, l), mn(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    Pe(n, u, l)
            }
            e = e.sibling
        }
    }

    function Zc(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Pa(l))
    }

    function Vc(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Pa(t))
    }

    function je(t, e, l, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Br(t, e, l, a), e = e.sibling
    }

    function Br(t, e, l, a) {
        var n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                je(t, e, l, a), n & 2048 && hn(9, e);
                break;
            case 1:
                je(t, e, l, a);
                break;
            case 3:
                je(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Pa(t)));
                break;
            case 12:
                if (n & 2048) {
                    je(t, e, l, a), t = e.stateNode;
                    try {
                        var u = e.memoizedProps,
                            i = u.id,
                            f = u.onPostCommit;
                        typeof f == "function" && f(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (m) {
                        ht(e, e.return, m)
                    }
                } else je(t, e, l, a);
                break;
            case 31:
                je(t, e, l, a);
                break;
            case 13:
                je(t, e, l, a);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? je(t, e, l, a) : yn(t, e) : u._visibility & 2 ? je(t, e, l, a) : (u._visibility |= 2, Ea(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Zc(i, e);
                break;
            case 24:
                je(t, e, l, a), n & 2048 && Vc(e.alternate, e);
                break;
            default:
                je(t, e, l, a)
        }
    }

    function Ea(t, e, l, a, n) {
        for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
            var u = t,
                i = e,
                f = l,
                m = a,
                A = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Ea(u, i, f, m, n), hn(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var R = i.stateNode;
                    i.memoizedState !== null ? R._visibility & 2 ? Ea(u, i, f, m, n) : yn(u, i) : (R._visibility |= 2, Ea(u, i, f, m, n)), n && A & 2048 && Zc(i.alternate, i);
                    break;
                case 24:
                    Ea(u, i, f, m, n), n && A & 2048 && Vc(i.alternate, i);
                    break;
                default:
                    Ea(u, i, f, m, n)
            }
            e = e.sibling
        }
    }

    function yn(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var l = t,
                    a = e,
                    n = a.flags;
                switch (a.tag) {
                    case 22:
                        yn(l, a), n & 2048 && Zc(a.alternate, a);
                        break;
                    case 24:
                        yn(l, a), n & 2048 && Vc(a.alternate, a);
                        break;
                    default:
                        yn(l, a)
                }
                e = e.sibling
            }
    }
    var vn = 8192;

    function Aa(t, e, l) {
        if (t.subtreeFlags & vn)
            for (t = t.child; t !== null;) qr(t, e, l), t = t.sibling
    }

    function qr(t, e, l) {
        switch (t.tag) {
            case 26:
                Aa(t, e, l), t.flags & vn && t.memoizedState !== null && W0(l, Re, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Aa(t, e, l);
                break;
            case 3:
            case 4:
                var a = Re;
                Re = Xu(t.stateNode.containerInfo), Aa(t, e, l), Re = a;
                break;
            case 22:
                t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = vn, vn = 16777216, Aa(t, e, l), vn = a) : Aa(t, e, l));
                break;
            default:
                Aa(t, e, l)
        }
    }

    function Lr(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function pn(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Yt = a, Yr(a, t)
                }
            Lr(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Gr(t), t = t.sibling
    }

    function Gr(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                pn(t), t.flags & 2048 && gl(9, t, t.return);
                break;
            case 3:
                pn(t);
                break;
            case 12:
                pn(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ru(t)) : pn(t);
                break;
            default:
                pn(t)
        }
    }

    function Ru(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Yt = a, Yr(a, t)
                }
            Lr(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    gl(8, e, e.return), Ru(e);
                    break;
                case 22:
                    l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Ru(e));
                    break;
                default:
                    Ru(e)
            }
            t = t.sibling
        }
    }

    function Yr(t, e) {
        for (; Yt !== null;) {
            var l = Yt;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    gl(8, l, e);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Pa(l.memoizedState.cache)
            }
            if (a = l.child, a !== null) a.return = l, Yt = a;
            else t: for (l = t; Yt !== null;) {
                a = Yt;
                var n = a.sibling,
                    u = a.return;
                if (Cr(a), a === l) {
                    Yt = null;
                    break t
                }
                if (n !== null) {
                    n.return = u, Yt = n;
                    break t
                }
                Yt = u
            }
        }
    }
    var d0 = {
            getCacheForType: function(t) {
                var e = Zt(Ht),
                    l = e.data.get(t);
                return l === void 0 && (l = t(), e.data.set(t, l)), l
            },
            cacheSignal: function() {
                return Zt(Ht).controller.signal
            }
        },
        h0 = typeof WeakMap == "function" ? WeakMap : Map,
        ot = 0,
        St = null,
        at = null,
        ut = 0,
        dt = 0,
        de = null,
        xl = !1,
        za = !1,
        Kc = !1,
        tl = 0,
        _t = 0,
        bl = 0,
        $l = 0,
        Jc = 0,
        he = 0,
        Ta = 0,
        gn = null,
        ae = null,
        kc = !1,
        ju = 0,
        Xr = 0,
        Cu = 1 / 0,
        Ou = null,
        Sl = null,
        qt = 0,
        El = null,
        Na = null,
        el = 0,
        $c = 0,
        Fc = null,
        Qr = null,
        xn = 0,
        Wc = null;

    function me() {
        return (ot & 2) !== 0 && ut !== 0 ? ut & -ut : j.T !== null ? as() : af()
    }

    function Zr() {
        if (he === 0)
            if ((ut & 536870912) === 0 || ct) {
                var t = Gn;
                Gn <<= 1, (Gn & 3932160) === 0 && (Gn = 262144), he = t
            } else he = 536870912;
        return t = oe.current, t !== null && (t.flags |= 32), he
    }

    function ne(t, e, l) {
        (t === St && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null) && (Ma(t, 0), Al(t, ut, he, !1)), La(t, l), ((ot & 2) === 0 || t !== St) && (t === St && ((ot & 2) === 0 && ($l |= l), _t === 4 && Al(t, ut, he, !1)), Be(t))
    }

    function Vr(t, e, l) {
        if ((ot & 6) !== 0) throw Error(s(327));
        var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || qa(t, e),
            n = a ? v0(t, e) : Pc(t, e, !0),
            u = a;
        do {
            if (n === 0) {
                za && !a && Al(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate, u && !m0(l)) {
                    n = Pc(t, e, !1), u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
                    else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        e = i;
                        t: {
                            var f = t;n = gn;
                            var m = f.current.memoizedState.isDehydrated;
                            if (m && (Ma(f, i).flags |= 256), i = Pc(f, i, !1), i !== 2) {
                                if (Kc && !m) {
                                    f.errorRecoveryDisabledLanes |= u, $l |= u, n = 4;
                                    break t
                                }
                                u = ae, ae = n, u !== null && (ae === null ? ae = u : ae.push.apply(ae, u))
                            }
                            n = i
                        }
                        if (u = !1, n !== 2) continue
                    }
                }
                if (n === 1) {
                    Ma(t, 0), Al(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t, u = n, u) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Al(a, e, he, !xl);
                            break t;
                        case 2:
                            ae = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((e & 62914560) === e && (n = ju + 300 - ue(), 10 < n)) {
                        if (Al(a, e, he, !xl), Xn(a, 0, !0) !== 0) break t;
                        el = e, a.timeoutHandle = Ed(Kr.bind(null, a, l, ae, Ou, kc, e, he, $l, Ta, xl, u, "Throttled", -0, 0), n);
                        break t
                    }
                    Kr(a, l, ae, Ou, kc, e, he, $l, Ta, xl, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Be(t)
    }

    function Kr(t, e, l, a, n, u, i, f, m, A, R, D, z, N) {
        if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
            D = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ge
            }, qr(e, u, D);
            var L = (u & 62914560) === u ? ju - ue() : (u & 4194048) === u ? Xr - ue() : 0;
            if (L = I0(D, L), L !== null) {
                el = u, t.cancelPendingCommit = L(td.bind(null, t, e, u, l, a, n, i, f, m, R, D, null, z, N)), Al(t, u, i, !A);
                return
            }
        }
        td(t, e, u, l, a, n, i, f, m)
    }

    function m0(t) {
        for (var e = t;;) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a],
                        u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!se(u(), n)) return !1
                    } catch {
                        return !1
                    }
                }
            if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Al(t, e, l, a) {
        e &= ~Jc, e &= ~$l, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
        for (var n = e; 0 < n;) {
            var u = 31 - ce(n),
                i = 1 << u;
            a[u] = -1, n &= ~i
        }
        l !== 0 && tf(t, l, e)
    }

    function Du() {
        return (ot & 6) === 0 ? (bn(0), !1) : !0
    }

    function Ic() {
        if (at !== null) {
            if (dt === 0) var t = at.return;
            else t = at, Ze = Gl = null, mc(t), pa = null, en = 0, t = at;
            for (; t !== null;) Ar(t.alternate, t), t = t.return;
            at = null
        }
    }

    function Ma(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1, H0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), el = 0, Ic(), St = t, at = l = Xe(t.current, null), ut = e, dt = 0, de = null, xl = !1, za = qa(t, e), Kc = !1, Ta = he = Jc = $l = bl = _t = 0, ae = gn = null, kc = !1, (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements, a &= e; 0 < a;) {
                var n = 31 - ce(a),
                    u = 1 << n;
                e |= t[n], a &= ~u
            }
        return tl = e, tu(), l
    }

    function Jr(t, e) {
        P = null, j.H = on, e === va || e === su ? (e = so(), dt = 3) : e === lc ? (e = so(), dt = 4) : dt = e === jc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, de = e, at === null && (_t = 1, Eu(t, be(e, t.current)))
    }

    function kr() {
        var t = oe.current;
        return t === null ? !0 : (ut & 4194048) === ut ? ze === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === ze : !1
    }

    function $r() {
        var t = j.H;
        return j.H = on, t === null ? on : t
    }

    function Fr() {
        var t = j.A;
        return j.A = d0, t
    }

    function Hu() {
        _t = 4, xl || (ut & 4194048) !== ut && oe.current !== null || (za = !0), (bl & 134217727) === 0 && ($l & 134217727) === 0 || St === null || Al(St, ut, he, !1)
    }

    function Pc(t, e, l) {
        var a = ot;
        ot |= 2;
        var n = $r(),
            u = Fr();
        (St !== t || ut !== e) && (Ou = null, Ma(t, e)), e = !1;
        var i = _t;
        t: do try {
                if (dt !== 0 && at !== null) {
                    var f = at,
                        m = de;
                    switch (dt) {
                        case 8:
                            Ic(), i = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            oe.current === null && (e = !0);
                            var A = dt;
                            if (dt = 0, de = null, _a(t, f, m, A), l && za) {
                                i = 0;
                                break t
                            }
                            break;
                        default:
                            A = dt, dt = 0, de = null, _a(t, f, m, A)
                    }
                }
                y0(), i = _t;
                break
            } catch (R) {
                Jr(t, R)
            }
            while (!0);
            return e && t.shellSuspendCounter++, Ze = Gl = null, ot = a, j.H = n, j.A = u, at === null && (St = null, ut = 0, tu()), i
    }

    function y0() {
        for (; at !== null;) Wr(at)
    }

    function v0(t, e) {
        var l = ot;
        ot |= 2;
        var a = $r(),
            n = Fr();
        St !== t || ut !== e ? (Ou = null, Cu = ue() + 500, Ma(t, e)) : za = qa(t, e);
        t: do try {
                if (dt !== 0 && at !== null) {
                    e = at;
                    var u = de;
                    e: switch (dt) {
                        case 1:
                            dt = 0, de = null, _a(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (io(u)) {
                                dt = 0, de = null, Ir(e);
                                break
                            }
                            e = function() {
                                dt !== 2 && dt !== 9 || St !== t || (dt = 7), Be(t)
                            }, u.then(e, e);
                            break t;
                        case 3:
                            dt = 7;
                            break t;
                        case 4:
                            dt = 5;
                            break t;
                        case 7:
                            io(u) ? (dt = 0, de = null, Ir(e)) : (dt = 0, de = null, _a(t, e, u, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (at.tag) {
                                case 26:
                                    i = at.memoizedState;
                                case 5:
                                case 27:
                                    var f = at;
                                    if (i ? Bd(i) : f.stateNode.complete) {
                                        dt = 0, de = null;
                                        var m = f.sibling;
                                        if (m !== null) at = m;
                                        else {
                                            var A = f.return;
                                            A !== null ? (at = A, Uu(A)) : at = null
                                        }
                                        break e
                                    }
                            }
                            dt = 0, de = null, _a(t, e, u, 5);
                            break;
                        case 6:
                            dt = 0, de = null, _a(t, e, u, 6);
                            break;
                        case 8:
                            Ic(), _t = 6;
                            break t;
                        default:
                            throw Error(s(462))
                    }
                }
                p0();
                break
            } catch (R) {
                Jr(t, R)
            }
            while (!0);
            return Ze = Gl = null, j.H = a, j.A = n, ot = l, at !== null ? 0 : (St = null, ut = 0, tu(), _t)
    }

    function p0() {
        for (; at !== null && !Gh();) Wr(at)
    }

    function Wr(t) {
        var e = Sr(t.alternate, t, tl);
        t.memoizedProps = t.pendingProps, e === null ? Uu(t) : at = e
    }

    function Ir(t) {
        var e = t,
            l = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = yr(l, e, e.pendingProps, e.type, void 0, ut);
                break;
            case 11:
                e = yr(l, e, e.pendingProps, e.type.render, e.ref, ut);
                break;
            case 5:
                mc(e);
            default:
                Ar(l, e), e = at = $f(e, tl), e = Sr(l, e, tl)
        }
        t.memoizedProps = t.pendingProps, e === null ? Uu(t) : at = e
    }

    function _a(t, e, l, a) {
        Ze = Gl = null, mc(e), pa = null, en = 0;
        var n = e.return;
        try {
            if (u0(t, n, e, l, ut)) {
                _t = 1, Eu(t, be(l, t.current)), at = null;
                return
            }
        } catch (u) {
            if (n !== null) throw at = n, u;
            _t = 1, Eu(t, be(l, t.current)), at = null;
            return
        }
        e.flags & 32768 ? (ct || a === 1 ? t = !0 : za || (ut & 536870912) !== 0 ? t = !1 : (xl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = oe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Pr(e, t)) : Uu(e)
    }

    function Uu(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Pr(e, xl);
                return
            }
            t = e.return;
            var l = s0(e.alternate, e, tl);
            if (l !== null) {
                at = l;
                return
            }
            if (e = e.sibling, e !== null) {
                at = e;
                return
            }
            at = e = t
        } while (e !== null);
        _t === 0 && (_t = 5)
    }

    function Pr(t, e) {
        do {
            var l = f0(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767, at = l;
                return
            }
            if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
                at = t;
                return
            }
            at = t = l
        } while (t !== null);
        _t = 6, at = null
    }

    function td(t, e, l, a, n, u, i, f, m) {
        t.cancelPendingCommit = null;
        do wu(); while (qt !== 0);
        if ((ot & 6) !== 0) throw Error(s(327));
        if (e !== null) {
            if (e === t.current) throw Error(s(177));
            if (u = e.lanes | e.childLanes, u |= Yi, Fh(t, l, u, i, f, m), t === St && (at = St = null, ut = 0), Na = e, El = t, el = l, $c = u, Fc = n, Qr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, S0(qn, function() {
                    return ud(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
                a = j.T, j.T = null, n = w.p, w.p = 2, i = ot, ot |= 4;
                try {
                    o0(t, e, l)
                } finally {
                    ot = i, w.p = n, j.T = a
                }
            }
            qt = 1, ed(), ld(), ad()
        }
    }

    function ed() {
        if (qt === 1) {
            qt = 0;
            var t = El,
                e = Na,
                l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = j.T, j.T = null;
                var a = w.p;
                w.p = 2;
                var n = ot;
                ot |= 4;
                try {
                    Ur(e, t);
                    var u = rs,
                        i = Gf(t.containerInfo),
                        f = u.focusedElem,
                        m = u.selectionRange;
                    if (i !== f && f && f.ownerDocument && Lf(f.ownerDocument.documentElement, f)) {
                        if (m !== null && wi(f)) {
                            var A = m.start,
                                R = m.end;
                            if (R === void 0 && (R = A), "selectionStart" in f) f.selectionStart = A, f.selectionEnd = Math.min(R, f.value.length);
                            else {
                                var D = f.ownerDocument || document,
                                    z = D && D.defaultView || window;
                                if (z.getSelection) {
                                    var N = z.getSelection(),
                                        L = f.textContent.length,
                                        V = Math.min(m.start, L),
                                        pt = m.end === void 0 ? V : Math.min(m.end, L);
                                    !N.extend && V > pt && (i = pt, pt = V, V = i);
                                    var x = qf(f, V),
                                        p = qf(f, pt);
                                    if (x && p && (N.rangeCount !== 1 || N.anchorNode !== x.node || N.anchorOffset !== x.offset || N.focusNode !== p.node || N.focusOffset !== p.offset)) {
                                        var E = D.createRange();
                                        E.setStart(x.node, x.offset), N.removeAllRanges(), V > pt ? (N.addRange(E), N.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset), N.addRange(E))
                                    }
                                }
                            }
                        }
                        for (D = [], N = f; N = N.parentNode;) N.nodeType === 1 && D.push({
                            element: N,
                            left: N.scrollLeft,
                            top: N.scrollTop
                        });
                        for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
                            var C = D[f];
                            C.element.scrollLeft = C.left, C.element.scrollTop = C.top
                        }
                    }
                    ku = !!os, rs = os = null
                } finally {
                    ot = n, w.p = a, j.T = l
                }
            }
            t.current = e, qt = 2
        }
    }

    function ld() {
        if (qt === 2) {
            qt = 0;
            var t = El,
                e = Na,
                l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = j.T, j.T = null;
                var a = w.p;
                w.p = 2;
                var n = ot;
                ot |= 4;
                try {
                    jr(t, e.alternate, e)
                } finally {
                    ot = n, w.p = a, j.T = l
                }
            }
            qt = 3
        }
    }

    function ad() {
        if (qt === 4 || qt === 3) {
            qt = 0, Yh();
            var t = El,
                e = Na,
                l = el,
                a = Qr;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? qt = 5 : (qt = 0, Na = El = null, nd(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (Sl = null), pi(l), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function") try {
                ie.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                e = j.T, n = w.p, w.p = 2, j.T = null;
                try {
                    for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
                        var f = a[i];
                        u(f.value, {
                            componentStack: f.stack
                        })
                    }
                } finally {
                    j.T = e, w.p = n
                }
            }(el & 3) !== 0 && wu(), Be(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Wc ? xn++ : (xn = 0, Wc = t) : xn = 0, bn(0)
        }
    }

    function nd(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Pa(e)))
    }

    function wu() {
        return ed(), ld(), ad(), ud()
    }

    function ud() {
        if (qt !== 5) return !1;
        var t = El,
            e = $c;
        $c = 0;
        var l = pi(el),
            a = j.T,
            n = w.p;
        try {
            w.p = 32 > l ? 32 : l, j.T = null, l = Fc, Fc = null;
            var u = El,
                i = el;
            if (qt = 0, Na = El = null, el = 0, (ot & 6) !== 0) throw Error(s(331));
            var f = ot;
            if (ot |= 4, Gr(u.current), Br(u, u.current, i, l), ot = f, bn(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function") try {
                ie.onPostCommitFiberRoot(Ba, u)
            } catch {}
            return !0
        } finally {
            w.p = n, j.T = a, nd(t, e)
        }
    }

    function id(t, e, l) {
        e = be(l, e), e = Rc(t.stateNode, e, 2), t = yl(t, e, 2), t !== null && (La(t, 2), Be(t))
    }

    function ht(t, e, l) {
        if (t.tag === 3) id(t, t, l);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    id(e, t, l);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Sl === null || !Sl.has(a))) {
                        t = be(l, t), l = cr(2), a = yl(e, l, 2), a !== null && (sr(l, a, e, t), La(a, 2), Be(a));
                        break
                    }
                }
                e = e.return
            }
    }

    function ts(t, e, l) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new h0;
            var n = new Set;
            a.set(e, n)
        } else n = a.get(e), n === void 0 && (n = new Set, a.set(e, n));
        n.has(l) || (Kc = !0, n.add(l), t = g0.bind(null, t, e, l), e.then(t, t))
    }

    function g0(t, e, l) {
        var a = t.pingCache;
        a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, St === t && (ut & l) === l && (_t === 4 || _t === 3 && (ut & 62914560) === ut && 300 > ue() - ju ? (ot & 2) === 0 && Ma(t, 0) : Jc |= l, Ta === ut && (Ta = 0)), Be(t)
    }

    function cd(t, e) {
        e === 0 && (e = Ps()), t = Bl(t, e), t !== null && (La(t, e), Be(t))
    }

    function x0(t) {
        var e = t.memoizedState,
            l = 0;
        e !== null && (l = e.retryLane), cd(t, l)
    }

    function b0(t, e) {
        var l = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var a = t.stateNode,
                    n = t.memoizedState;
                n !== null && (l = n.retryLane);
                break;
            case 19:
                a = t.stateNode;
                break;
            case 22:
                a = t.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        a !== null && a.delete(e), cd(t, l)
    }

    function S0(t, e) {
        return hi(t, e)
    }
    var Bu = null,
        Ra = null,
        es = !1,
        qu = !1,
        ls = !1,
        zl = 0;

    function Be(t) {
        t !== Ra && t.next === null && (Ra === null ? Bu = Ra = t : Ra = Ra.next = t), qu = !0, es || (es = !0, A0())
    }

    function bn(t, e) {
        if (!ls && qu) {
            ls = !0;
            do
                for (var l = !1, a = Bu; a !== null;) {
                    if (t !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0) var u = 0;
                        else {
                            var i = a.suspendedLanes,
                                f = a.pingedLanes;
                            u = (1 << 31 - ce(42 | t) + 1) - 1, u &= n & ~(i & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0, rd(a, u))
                    } else u = ut, u = Xn(a, a === St ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || qa(a, u) || (l = !0, rd(a, u));
                    a = a.next
                }
            while (l);
            ls = !1
        }
    }

    function E0() {
        sd()
    }

    function sd() {
        qu = es = !1;
        var t = 0;
        zl !== 0 && D0() && (t = zl);
        for (var e = ue(), l = null, a = Bu; a !== null;) {
            var n = a.next,
                u = fd(a, e);
            u === 0 ? (a.next = null, l === null ? Bu = n : l.next = n, n === null && (Ra = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (qu = !0)), a = n
        }
        qt !== 0 && qt !== 5 || bn(t), zl !== 0 && (zl = 0)
    }

    function fd(t, e) {
        for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var i = 31 - ce(u),
                f = 1 << i,
                m = n[i];
            m === -1 ? ((f & l) === 0 || (f & a) !== 0) && (n[i] = $h(f, e)) : m <= e && (t.expiredLanes |= f), u &= ~f
        }
        if (e = St, l = ut, l = Xn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mi(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((l & 3) === 0 || qa(t, l)) {
            if (e = l & -l, e === t.callbackPriority) return e;
            switch (a !== null && mi(a), pi(l)) {
                case 2:
                case 8:
                    l = Ws;
                    break;
                case 32:
                    l = qn;
                    break;
                case 268435456:
                    l = Is;
                    break;
                default:
                    l = qn
            }
            return a = od.bind(null, t), l = hi(l, a), t.callbackPriority = e, t.callbackNode = l, e
        }
        return a !== null && a !== null && mi(a), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function od(t, e) {
        if (qt !== 0 && qt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var l = t.callbackNode;
        if (wu() && t.callbackNode !== l) return null;
        var a = ut;
        return a = Xn(t, t === St ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Vr(t, a, e), fd(t, ue()), t.callbackNode != null && t.callbackNode === l ? od.bind(null, t) : null)
    }

    function rd(t, e) {
        if (wu()) return null;
        Vr(t, e, !0)
    }

    function A0() {
        U0(function() {
            (ot & 6) !== 0 ? hi(Fs, E0) : sd()
        })
    }

    function as() {
        if (zl === 0) {
            var t = ma;
            t === 0 && (t = Ln, Ln <<= 1, (Ln & 261888) === 0 && (Ln = 256)), zl = t
        }
        return zl
    }

    function dd(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Kn("" + t)
    }

    function hd(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t
    }

    function z0(t, e, l, a, n) {
        if (e === "submit" && l && l.stateNode === n) {
            var u = dd((n[It] || null).action),
                i = a.submitter;
            i && (e = (e = i[It] || null) ? dd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
            var f = new Fn("action", "action", null, a, n);
            t.push({
                event: f,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (zl !== 0) {
                                var m = i ? hd(n, i) : new FormData(n);
                                Ac(l, {
                                    pending: !0,
                                    data: m,
                                    method: n.method,
                                    action: u
                                }, null, m)
                            }
                        } else typeof u == "function" && (f.preventDefault(), m = i ? hd(n, i) : new FormData(n), Ac(l, {
                            pending: !0,
                            data: m,
                            method: n.method,
                            action: u
                        }, u, m))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var ns = 0; ns < Gi.length; ns++) {
        var us = Gi[ns],
            T0 = us.toLowerCase(),
            N0 = us[0].toUpperCase() + us.slice(1);
        _e(T0, "on" + N0)
    }
    _e(Qf, "onAnimationEnd"), _e(Zf, "onAnimationIteration"), _e(Vf, "onAnimationStart"), _e("dblclick", "onDoubleClick"), _e("focusin", "onFocus"), _e("focusout", "onBlur"), _e(Xm, "onTransitionRun"), _e(Qm, "onTransitionStart"), _e(Zm, "onTransitionCancel"), _e(Kf, "onTransitionEnd"), ta("onMouseEnter", ["mouseout", "mouseover"]), ta("onMouseLeave", ["mouseout", "mouseover"]), ta("onPointerEnter", ["pointerout", "pointerover"]), ta("onPointerLeave", ["pointerout", "pointerover"]), Dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Dl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        M0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));

    function md(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var a = t[l],
                n = a.event;
            a = a.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var f = a[i],
                            m = f.instance,
                            A = f.currentTarget;
                        if (f = f.listener, m !== u && n.isPropagationStopped()) break t;
                        u = f, n.currentTarget = A;
                        try {
                            u(n)
                        } catch (R) {
                            Pn(R)
                        }
                        n.currentTarget = null, u = m
                    } else
                        for (i = 0; i < a.length; i++) {
                            if (f = a[i], m = f.instance, A = f.currentTarget, f = f.listener, m !== u && n.isPropagationStopped()) break t;
                            u = f, n.currentTarget = A;
                            try {
                                u(n)
                            } catch (R) {
                                Pn(R)
                            }
                            n.currentTarget = null, u = m
                        }
            }
        }
    }

    function nt(t, e) {
        var l = e[gi];
        l === void 0 && (l = e[gi] = new Set);
        var a = t + "__bubble";
        l.has(a) || (yd(e, t, 2, !1), l.add(a))
    }

    function is(t, e, l) {
        var a = 0;
        e && (a |= 4), yd(l, t, a, e)
    }
    var Lu = "_reactListening" + Math.random().toString(36).slice(2);

    function cs(t) {
        if (!t[Lu]) {
            t[Lu] = !0, cf.forEach(function(l) {
                l !== "selectionchange" && (M0.has(l) || is(l, !1, t), is(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Lu] || (e[Lu] = !0, is("selectionchange", !1, e))
        }
    }

    function yd(t, e, l, a) {
        switch (Zd(e)) {
            case 2:
                var n = e1;
                break;
            case 8:
                n = l1;
                break;
            default:
                n = Es
        }
        l = n.bind(null, e, l, t), n = void 0, !Mi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: n
        }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
            passive: n
        }) : t.addEventListener(e, l, !1)
    }

    function ss(t, e, l, a, n) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (;;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var f = a.stateNode.containerInfo;
                if (f === n) break;
                if (i === 4)
                    for (i = a.return; i !== null;) {
                        var m = i.tag;
                        if ((m === 3 || m === 4) && i.stateNode.containerInfo === n) return;
                        i = i.return
                    }
                for (; f !== null;) {
                    if (i = Wl(f), i === null) return;
                    if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
                        a = u = i;
                        continue t
                    }
                    f = f.parentNode
                }
            }
            a = a.return
        }
        xf(function() {
            var A = u,
                R = Ti(l),
                D = [];
            t: {
                var z = Jf.get(t);
                if (z !== void 0) {
                    var N = Fn,
                        L = t;
                    switch (t) {
                        case "keypress":
                            if (kn(l) === 0) break t;
                        case "keydown":
                        case "keyup":
                            N = bm;
                            break;
                        case "focusin":
                            L = "focus", N = Ci;
                            break;
                        case "focusout":
                            L = "blur", N = Ci;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            N = Ci;
                            break;
                        case "click":
                            if (l.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            N = Ef;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            N = sm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            N = Am;
                            break;
                        case Qf:
                        case Zf:
                        case Vf:
                            N = rm;
                            break;
                        case Kf:
                            N = Tm;
                            break;
                        case "scroll":
                        case "scrollend":
                            N = im;
                            break;
                        case "wheel":
                            N = Mm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            N = hm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            N = zf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            N = Rm
                    }
                    var V = (e & 4) !== 0,
                        pt = !V && (t === "scroll" || t === "scrollend"),
                        x = V ? z !== null ? z + "Capture" : null : z;
                    V = [];
                    for (var p = A, E; p !== null;) {
                        var C = p;
                        if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || x === null || (C = Xa(p, x), C != null && V.push(En(p, C, E))), pt) break;
                        p = p.return
                    }
                    0 < V.length && (z = new N(z, L, null, l, R), D.push({
                        event: z,
                        listeners: V
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (z = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", z && l !== zi && (L = l.relatedTarget || l.fromElement) && (Wl(L) || L[Fl])) break t;
                    if ((N || z) && (z = R.window === R ? R : (z = R.ownerDocument) ? z.defaultView || z.parentWindow : window, N ? (L = l.relatedTarget || l.toElement, N = A, L = L ? Wl(L) : null, L !== null && (pt = h(L), V = L.tag, L !== pt || V !== 5 && V !== 27 && V !== 6) && (L = null)) : (N = null, L = A), N !== L)) {
                        if (V = Ef, C = "onMouseLeave", x = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (V = zf, C = "onPointerLeave", x = "onPointerEnter", p = "pointer"), pt = N == null ? z : Ya(N), E = L == null ? z : Ya(L), z = new V(C, p + "leave", N, l, R), z.target = pt, z.relatedTarget = E, C = null, Wl(R) === A && (V = new V(x, p + "enter", L, l, R), V.target = E, V.relatedTarget = pt, C = V), pt = C, N && L) e: {
                            for (V = _0, x = N, p = L, E = 0, C = x; C; C = V(C)) E++;C = 0;
                            for (var Q = p; Q; Q = V(Q)) C++;
                            for (; 0 < E - C;) x = V(x),
                            E--;
                            for (; 0 < C - E;) p = V(p),
                            C--;
                            for (; E--;) {
                                if (x === p || p !== null && x === p.alternate) {
                                    V = x;
                                    break e
                                }
                                x = V(x), p = V(p)
                            }
                            V = null
                        }
                        else V = null;
                        N !== null && vd(D, z, N, V, !1), L !== null && pt !== null && vd(D, pt, L, V, !0)
                    }
                }
                t: {
                    if (z = A ? Ya(A) : window, N = z.nodeName && z.nodeName.toLowerCase(), N === "select" || N === "input" && z.type === "file") var st = Of;
                    else if (jf(z))
                        if (Df) st = Lm;
                        else {
                            st = Bm;
                            var Y = wm
                        }
                    else N = z.nodeName,
                    !N || N.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? A && Ai(A.elementType) && (st = Of) : st = qm;
                    if (st && (st = st(t, A))) {
                        Cf(D, st, l, R);
                        break t
                    }
                    Y && Y(t, z, A),
                    t === "focusout" && A && z.type === "number" && A.memoizedProps.value != null && Ei(z, "number", z.value)
                }
                switch (Y = A ? Ya(A) : window, t) {
                    case "focusin":
                        (jf(Y) || Y.contentEditable === "true") && (ia = Y, Bi = A, Fa = null);
                        break;
                    case "focusout":
                        Fa = Bi = ia = null;
                        break;
                    case "mousedown":
                        qi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        qi = !1, Yf(D, l, R);
                        break;
                    case "selectionchange":
                        if (Ym) break;
                    case "keydown":
                    case "keyup":
                        Yf(D, l, R)
                }
                var et;
                if (Di) t: {
                    switch (t) {
                        case "compositionstart":
                            var it = "onCompositionStart";
                            break t;
                        case "compositionend":
                            it = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            it = "onCompositionUpdate";
                            break t
                    }
                    it = void 0
                }
                else ua ? _f(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");it && (Tf && l.locale !== "ko" && (ua || it !== "onCompositionStart" ? it === "onCompositionEnd" && ua && (et = bf()) : (sl = R, _i = "value" in sl ? sl.value : sl.textContent, ua = !0)), Y = Gu(A, it), 0 < Y.length && (it = new Af(it, t, null, l, R), D.push({
                    event: it,
                    listeners: Y
                }), et ? it.data = et : (et = Rf(l), et !== null && (it.data = et)))),
                (et = Cm ? Om(t, l) : Dm(t, l)) && (it = Gu(A, "onBeforeInput"), 0 < it.length && (Y = new Af("onBeforeInput", "beforeinput", null, l, R), D.push({
                    event: Y,
                    listeners: it
                }), Y.data = et)),
                z0(D, t, A, l, R)
            }
            md(D, e)
        })
    }

    function En(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l
        }
    }

    function Gu(t, e) {
        for (var l = e + "Capture", a = []; t !== null;) {
            var n = t,
                u = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Xa(t, l), n != null && a.unshift(En(t, n, u)), n = Xa(t, e), n != null && a.push(En(t, n, u))), t.tag === 3) return a;
            t = t.return
        }
        return []
    }

    function _0(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function vd(t, e, l, a, n) {
        for (var u = e._reactName, i = []; l !== null && l !== a;) {
            var f = l,
                m = f.alternate,
                A = f.stateNode;
            if (f = f.tag, m !== null && m === a) break;
            f !== 5 && f !== 26 && f !== 27 || A === null || (m = A, n ? (A = Xa(l, u), A != null && i.unshift(En(l, A, m))) : n || (A = Xa(l, u), A != null && i.push(En(l, A, m)))), l = l.return
        }
        i.length !== 0 && t.push({
            event: e,
            listeners: i
        })
    }
    var R0 = /\r\n?/g,
        j0 = /\u0000|\uFFFD/g;

    function pd(t) {
        return (typeof t == "string" ? t : "" + t).replace(R0, `
`).replace(j0, "")
    }

    function gd(t, e) {
        return e = pd(e), pd(t) === e
    }

    function vt(t, e, l, a, n, u) {
        switch (l) {
            case "children":
                typeof a == "string" ? e === "body" || e === "textarea" && a === "" || la(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && la(t, "" + a);
                break;
            case "className":
                Zn(t, "class", a);
                break;
            case "tabIndex":
                Zn(t, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Zn(t, l, a);
                break;
            case "style":
                pf(t, a, u);
                break;
            case "data":
                if (e !== "object") {
                    Zn(t, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (e !== "a" || l !== "href")) {
                    t.removeAttribute(l);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(l);
                    break
                }
                a = Kn("" + a), t.setAttribute(l, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (l === "formAction" ? (e !== "input" && vt(t, e, "name", n.name, n, null), vt(t, e, "formEncType", n.formEncType, n, null), vt(t, e, "formMethod", n.formMethod, n, null), vt(t, e, "formTarget", n.formTarget, n, null)) : (vt(t, e, "encType", n.encType, n, null), vt(t, e, "method", n.method, n, null), vt(t, e, "target", n.target, n, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(l);
                    break
                }
                a = Kn("" + a), t.setAttribute(l, a);
                break;
            case "onClick":
                a != null && (t.onclick = Ge);
                break;
            case "onScroll":
                a != null && nt("scroll", t);
                break;
            case "onScrollEnd":
                a != null && nt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(s(60));
                        t.innerHTML = l
                    }
                }
                break;
            case "multiple":
                t.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                t.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                l = Kn("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
                break;
            case "capture":
            case "download":
                a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
                break;
            case "popover":
                nt("beforetoggle", t), nt("toggle", t), Qn(t, "popover", a);
                break;
            case "xlinkActuate":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Le(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Le(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Le(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Le(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                Qn(t, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = nm.get(l) || l, Qn(t, l, a))
        }
    }

    function fs(t, e, l, a, n, u) {
        switch (l) {
            case "style":
                pf(t, a, u);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(s(60));
                        t.innerHTML = l
                    }
                }
                break;
            case "children":
                typeof a == "string" ? la(t, a) : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
                break;
            case "onScroll":
                a != null && nt("scroll", t);
                break;
            case "onScrollEnd":
                a != null && nt("scrollend", t);
                break;
            case "onClick":
                a != null && (t.onclick = Ge);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!sf.hasOwnProperty(l)) t: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[It] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
                        break t
                    }
                    l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Qn(t, l, a)
                }
        }
    }

    function Kt(t, e, l) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                nt("error", t), nt("load", t);
                var a = !1,
                    n = !1,
                    u;
                for (u in l)
                    if (l.hasOwnProperty(u)) {
                        var i = l[u];
                        if (i != null) switch (u) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                n = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(137, e));
                            default:
                                vt(t, e, u, i, l, null)
                        }
                    } n && vt(t, e, "srcSet", l.srcSet, l, null), a && vt(t, e, "src", l.src, l, null);
                return;
            case "input":
                nt("invalid", t);
                var f = u = i = n = null,
                    m = null,
                    A = null;
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var R = l[a];
                        if (R != null) switch (a) {
                            case "name":
                                n = R;
                                break;
                            case "type":
                                i = R;
                                break;
                            case "checked":
                                m = R;
                                break;
                            case "defaultChecked":
                                A = R;
                                break;
                            case "value":
                                u = R;
                                break;
                            case "defaultValue":
                                f = R;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null) throw Error(s(137, e));
                                break;
                            default:
                                vt(t, e, a, R, l, null)
                        }
                    } hf(t, u, f, m, A, i, n, !1);
                return;
            case "select":
                nt("invalid", t), a = i = u = null;
                for (n in l)
                    if (l.hasOwnProperty(n) && (f = l[n], f != null)) switch (n) {
                        case "value":
                            u = f;
                            break;
                        case "defaultValue":
                            i = f;
                            break;
                        case "multiple":
                            a = f;
                        default:
                            vt(t, e, n, f, l, null)
                    }
                e = u, l = i, t.multiple = !!a, e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0);
                return;
            case "textarea":
                nt("invalid", t), u = n = a = null;
                for (i in l)
                    if (l.hasOwnProperty(i) && (f = l[i], f != null)) switch (i) {
                        case "value":
                            a = f;
                            break;
                        case "defaultValue":
                            n = f;
                            break;
                        case "children":
                            u = f;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (f != null) throw Error(s(91));
                            break;
                        default:
                            vt(t, e, i, f, l, null)
                    }
                yf(t, a, n, u);
                return;
            case "option":
                for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : vt(t, e, m, a, l, null));
                return;
            case "dialog":
                nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
                break;
            case "iframe":
            case "object":
                nt("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Sn.length; a++) nt(Sn[a], t);
                break;
            case "image":
                nt("error", t), nt("load", t);
                break;
            case "details":
                nt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                nt("error", t), nt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (A in l)
                    if (l.hasOwnProperty(A) && (a = l[A], a != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, e));
                        default:
                            vt(t, e, A, a, l, null)
                    }
                return;
            default:
                if (Ai(e)) {
                    for (R in l) l.hasOwnProperty(R) && (a = l[R], a !== void 0 && fs(t, e, R, a, l, void 0));
                    return
                }
        }
        for (f in l) l.hasOwnProperty(f) && (a = l[f], a != null && vt(t, e, f, a, l, null))
    }

    function C0(t, e, l, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var n = null,
                    u = null,
                    i = null,
                    f = null,
                    m = null,
                    A = null,
                    R = null;
                for (N in l) {
                    var D = l[N];
                    if (l.hasOwnProperty(N) && D != null) switch (N) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            m = D;
                        default:
                            a.hasOwnProperty(N) || vt(t, e, N, null, a, D)
                    }
                }
                for (var z in a) {
                    var N = a[z];
                    if (D = l[z], a.hasOwnProperty(z) && (N != null || D != null)) switch (z) {
                        case "type":
                            u = N;
                            break;
                        case "name":
                            n = N;
                            break;
                        case "checked":
                            A = N;
                            break;
                        case "defaultChecked":
                            R = N;
                            break;
                        case "value":
                            i = N;
                            break;
                        case "defaultValue":
                            f = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null) throw Error(s(137, e));
                            break;
                        default:
                            N !== D && vt(t, e, z, N, a, D)
                    }
                }
                Si(t, i, f, m, A, R, u, n);
                return;
            case "select":
                N = i = f = z = null;
                for (u in l)
                    if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            N = m;
                        default:
                            a.hasOwnProperty(u) || vt(t, e, u, null, a, m)
                    }
                for (n in a)
                    if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null)) switch (n) {
                        case "value":
                            z = u;
                            break;
                        case "defaultValue":
                            f = u;
                            break;
                        case "multiple":
                            i = u;
                        default:
                            u !== m && vt(t, e, n, u, a, m)
                    }
                e = f, l = i, a = N, z != null ? ea(t, !!l, z, !1) : !!a != !!l && (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : "", !1));
                return;
            case "textarea":
                N = z = null;
                for (f in l)
                    if (n = l[f], l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f)) switch (f) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            vt(t, e, f, null, a, n)
                    }
                for (i in a)
                    if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
                        case "value":
                            z = n;
                            break;
                        case "defaultValue":
                            N = n;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (n != null) throw Error(s(91));
                            break;
                        default:
                            n !== u && vt(t, e, i, n, a, u)
                    }
                mf(t, z, N);
                return;
            case "option":
                for (var L in l) z = l[L], l.hasOwnProperty(L) && z != null && !a.hasOwnProperty(L) && (L === "selected" ? t.selected = !1 : vt(t, e, L, null, a, z));
                for (m in a) z = a[m], N = l[m], a.hasOwnProperty(m) && z !== N && (z != null || N != null) && (m === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : vt(t, e, m, z, a, N));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var V in l) z = l[V], l.hasOwnProperty(V) && z != null && !a.hasOwnProperty(V) && vt(t, e, V, null, a, z);
                for (A in a)
                    if (z = a[A], N = l[A], a.hasOwnProperty(A) && z !== N && (z != null || N != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (z != null) throw Error(s(137, e));
                            break;
                        default:
                            vt(t, e, A, z, a, N)
                    }
                return;
            default:
                if (Ai(e)) {
                    for (var pt in l) z = l[pt], l.hasOwnProperty(pt) && z !== void 0 && !a.hasOwnProperty(pt) && fs(t, e, pt, void 0, a, z);
                    for (R in a) z = a[R], N = l[R], !a.hasOwnProperty(R) || z === N || z === void 0 && N === void 0 || fs(t, e, R, z, a, N);
                    return
                }
        }
        for (var x in l) z = l[x], l.hasOwnProperty(x) && z != null && !a.hasOwnProperty(x) && vt(t, e, x, null, a, z);
        for (D in a) z = a[D], N = l[D], !a.hasOwnProperty(D) || z === N || z == null && N == null || vt(t, e, D, z, a, N)
    }

    function xd(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function O0() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a],
                    u = n.transferSize,
                    i = n.initiatorType,
                    f = n.duration;
                if (u && f && xd(i)) {
                    for (i = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
                        var m = l[a],
                            A = m.startTime;
                        if (A > f) break;
                        var R = m.transferSize,
                            D = m.initiatorType;
                        R && xd(D) && (m = m.responseEnd, i += R * (m < f ? 1 : (f - A) / (m - A)))
                    }
                    if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }
    var os = null,
        rs = null;

    function Yu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function bd(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Sd(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function ds(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var hs = null;

    function D0() {
        var t = window.event;
        return t && t.type === "popstate" ? t === hs ? !1 : (hs = t, !0) : (hs = null, !1)
    }
    var Ed = typeof setTimeout == "function" ? setTimeout : void 0,
        H0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ad = typeof Promise == "function" ? Promise : void 0,
        U0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ad < "u" ? function(t) {
            return Ad.resolve(null).then(t).catch(w0)
        } : Ed;

    function w0(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Tl(t) {
        return t === "head"
    }

    function zd(t, e) {
        var l = e,
            a = 0;
        do {
            var n = l.nextSibling;
            if (t.removeChild(l), n && n.nodeType === 8)
                if (l = n.data, l === "/$" || l === "/&") {
                    if (a === 0) {
                        t.removeChild(n), Da(e);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
            else if (l === "html") An(t.ownerDocument.documentElement);
            else if (l === "head") {
                l = t.ownerDocument.head, An(l);
                for (var u = l.firstChild; u;) {
                    var i = u.nextSibling,
                        f = u.nodeName;
                    u[Ga] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i
                }
            } else l === "body" && An(t.ownerDocument.body);
            l = n
        } while (l);
        Da(e)
    }

    function Td(t, e) {
        var l = t;
        t = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
                if (l = a.data, l === "/$") {
                    if (t === 0) break;
                    t--
                } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
            l = a
        } while (l)
    }

    function ms(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var l = e;
            switch (e = e.nextSibling, l.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    ms(l), xi(l);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (l.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(l)
        }
    }

    function B0(t, e, l, a) {
        for (; t.nodeType === 1;) {
            var n = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (a) {
                if (!t[Ga]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = Te(t.nextSibling), t === null) break
        }
        return null
    }

    function q0(t, e, l) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Te(t.nextSibling), t === null)) return null;
        return t
    }

    function Nd(t, e) {
        for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Te(t.nextSibling), t === null)) return null;
        return t
    }

    function ys(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function vs(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function L0(t, e) {
        var l = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e;
        else if (t.data !== "$?" || l.readyState !== "loading") e();
        else {
            var a = function() {
                e(), l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a), t._reactRetry = a
        }
    }

    function Te(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                if (e === "/$" || e === "/&") return null
            }
        }
        return t
    }
    var ps = null;

    function Md(t) {
        t = t.nextSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "/$" || l === "/&") {
                    if (e === 0) return Te(t.nextSibling);
                    e--
                } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }

    function _d(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (e === 0) return t;
                    e--
                } else l !== "/$" && l !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }

    function Rd(t, e, l) {
        switch (e = Yu(l), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(s(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(s(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(s(454));
                return t;
            default:
                throw Error(s(451))
        }
    }

    function An(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        xi(t)
    }
    var Ne = new Map,
        jd = new Set;

    function Xu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var ll = w.d;
    w.d = {
        f: G0,
        r: Y0,
        D: X0,
        C: Q0,
        L: Z0,
        m: V0,
        X: J0,
        S: K0,
        M: k0
    };

    function G0() {
        var t = ll.f(),
            e = Du();
        return t || e
    }

    function Y0(t) {
        var e = Il(t);
        e !== null && e.tag === 5 && e.type === "form" ? Jo(e) : ll.r(t)
    }
    var ja = typeof document > "u" ? null : document;

    function Cd(t, e, l) {
        var a = ja;
        if (a && typeof e == "string" && e) {
            var n = ge(e);
            n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), jd.has(n) || (jd.add(n), t = {
                rel: t,
                crossOrigin: l,
                href: e
            }, a.querySelector(n) === null && (e = a.createElement("link"), Kt(e, "link", t), Gt(e), a.head.appendChild(e)))
        }
    }

    function X0(t) {
        ll.D(t), Cd("dns-prefetch", t, null)
    }

    function Q0(t, e) {
        ll.C(t, e), Cd("preconnect", t, e)
    }

    function Z0(t, e, l) {
        ll.L(t, e, l);
        var a = ja;
        if (a && t && e) {
            var n = 'link[rel="preload"][as="' + ge(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ge(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ge(l.imageSizes) + '"]')) : n += '[href="' + ge(t) + '"]';
            var u = n;
            switch (e) {
                case "style":
                    u = Ca(t);
                    break;
                case "script":
                    u = Oa(t)
            }
            Ne.has(u) || (t = T({
                rel: "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as: e
            }, l), Ne.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(zn(u)) || e === "script" && a.querySelector(Tn(u)) || (e = a.createElement("link"), Kt(e, "link", t), Gt(e), a.head.appendChild(e)))
        }
    }

    function V0(t, e) {
        ll.m(t, e);
        var l = ja;
        if (l && t) {
            var a = e && typeof e.as == "string" ? e.as : "script",
                n = 'link[rel="modulepreload"][as="' + ge(a) + '"][href="' + ge(t) + '"]',
                u = n;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = Oa(t)
            }
            if (!Ne.has(u) && (t = T({
                    rel: "modulepreload",
                    href: t
                }, e), Ne.set(u, t), l.querySelector(n) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (l.querySelector(Tn(u))) return
                }
                a = l.createElement("link"), Kt(a, "link", t), Gt(a), l.head.appendChild(a)
            }
        }
    }

    function K0(t, e, l) {
        ll.S(t, e, l);
        var a = ja;
        if (a && t) {
            var n = Pl(a).hoistableStyles,
                u = Ca(t);
            e = e || "default";
            var i = n.get(u);
            if (!i) {
                var f = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(zn(u))) f.loading = 5;
                else {
                    t = T({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, l), (l = Ne.get(u)) && gs(t, l);
                    var m = i = a.createElement("link");
                    Gt(m), Kt(m, "link", t), m._p = new Promise(function(A, R) {
                        m.onload = A, m.onerror = R
                    }), m.addEventListener("load", function() {
                        f.loading |= 1
                    }), m.addEventListener("error", function() {
                        f.loading |= 2
                    }), f.loading |= 4, Qu(i, e, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: f
                }, n.set(u, i)
            }
        }
    }

    function J0(t, e) {
        ll.X(t, e);
        var l = ja;
        if (l && t) {
            var a = Pl(l).hoistableScripts,
                n = Oa(t),
                u = a.get(n);
            u || (u = l.querySelector(Tn(n)), u || (t = T({
                src: t,
                async: !0
            }, e), (e = Ne.get(n)) && xs(t, e), u = l.createElement("script"), Gt(u), Kt(u, "link", t), l.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }

    function k0(t, e) {
        ll.M(t, e);
        var l = ja;
        if (l && t) {
            var a = Pl(l).hoistableScripts,
                n = Oa(t),
                u = a.get(n);
            u || (u = l.querySelector(Tn(n)), u || (t = T({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = Ne.get(n)) && xs(t, e), u = l.createElement("script"), Gt(u), Kt(u, "link", t), l.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }

    function Od(t, e, l, a) {
        var n = (n = lt.current) ? Xu(n) : null;
        if (!n) throw Error(s(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ca(l.href), l = Pl(n).hoistableStyles, a = l.get(e), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(e, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    t = Ca(l.href);
                    var u = Pl(n).hoistableStyles,
                        i = u.get(t);
                    if (i || (n = n.ownerDocument || n, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, i), (u = n.querySelector(zn(t))) && !u._p && (i.instance = u, i.state.loading = 5), Ne.has(t) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Ne.set(t, l), u || $0(n, t, l, i.state))), e && a === null) throw Error(s(528, ""));
                    return i
                }
                if (e && a !== null) throw Error(s(529, ""));
                return null;
            case "script":
                return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Oa(l), l = Pl(n).hoistableScripts, a = l.get(e), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(e, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(s(444, t))
        }
    }

    function Ca(t) {
        return 'href="' + ge(t) + '"'
    }

    function zn(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Dd(t) {
        return T({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function $0(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
            return a.loading |= 1
        }), e.addEventListener("error", function() {
            return a.loading |= 2
        }), Kt(e, "link", l), Gt(e), t.head.appendChild(e))
    }

    function Oa(t) {
        return '[src="' + ge(t) + '"]'
    }

    function Tn(t) {
        return "script[async]" + t
    }

    function Hd(t, e, l) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + ge(l.href) + '"]');
                if (a) return e.instance = a, Gt(a), a;
                var n = T({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"), Gt(a), Kt(a, "style", n), Qu(a, l.precedence, t), e.instance = a;
            case "stylesheet":
                n = Ca(l.href);
                var u = t.querySelector(zn(n));
                if (u) return e.state.loading |= 4, e.instance = u, Gt(u), u;
                a = Dd(l), (n = Ne.get(n)) && gs(a, n), u = (t.ownerDocument || t).createElement("link"), Gt(u);
                var i = u;
                return i._p = new Promise(function(f, m) {
                    i.onload = f, i.onerror = m
                }), Kt(u, "link", a), e.state.loading |= 4, Qu(u, l.precedence, t), e.instance = u;
            case "script":
                return u = Oa(l.src), (n = t.querySelector(Tn(u))) ? (e.instance = n, Gt(n), n) : (a = l, (n = Ne.get(u)) && (a = T({}, l), xs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Gt(n), Kt(n, "link", a), t.head.appendChild(n), e.instance = n);
            case "void":
                return null;
            default:
                throw Error(s(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Qu(a, l.precedence, t));
        return e.instance
    }

    function Qu(t, e, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var f = a[i];
            if (f.dataset.precedence === e) u = f;
            else if (u !== n) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild))
    }

    function gs(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function xs(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var Zu = null;

    function Ud(t, e, l) {
        if (Zu === null) {
            var a = new Map,
                n = Zu = new Map;
            n.set(l, a)
        } else n = Zu, a = n.get(l), a || (a = new Map, n.set(l, a));
        if (a.has(t)) return a;
        for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[Ga] || u[Xt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(e) || "";
                i = t + i;
                var f = a.get(i);
                f ? f.push(u) : a.set(i, [u])
            }
        }
        return a
    }

    function wd(t, e, l) {
        t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }

    function F0(t, e, l) {
        if (l === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function Bd(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function W0(t, e, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Ca(a.href),
                    u = e.querySelector(zn(n));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Gt(u);
                    return
                }
                u = e.ownerDocument || e, a = Dd(a), (n = Ne.get(n)) && gs(a, n), u = u.createElement("link"), Gt(u);
                var i = u;
                i._p = new Promise(function(f, m) {
                    i.onload = f, i.onerror = m
                }), Kt(u, "link", a), l.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Vu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l))
        }
    }
    var bs = 0;

    function I0(t, e) {
        return t.stylesheets && t.count === 0 && Ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && bs === 0 && (bs = 62500 * O0());
            var n = setTimeout(function() {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, (t.imgBytes > bs ? 50 : 800) + e);
            return t.unsuspend = l,
                function() {
                    t.unsuspend = null, clearTimeout(a), clearTimeout(n)
                }
        } : null
    }

    function Vu() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Ju(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var Ku = null;

    function Ju(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, Ku = new Map, e.forEach(P0, t), Ku = null, Vu.call(t))
    }

    function P0(t, e) {
        if (!(e.state.loading & 4)) {
            var l = Ku.get(t);
            if (l) var a = l.get(null);
            else {
                l = new Map, Ku.set(t, l);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i)
                }
                a && l.set(null, a)
            }
            n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Vu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4
        }
    }
    var Nn = {
        $$typeof: k,
        Provider: null,
        Consumer: null,
        _currentValue: $,
        _currentValue2: $,
        _threadCount: 0
    };

    function t1(t, e, l, a, n, u, i, f, m) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
    }

    function qd(t, e, l, a, n, u, i, f, m, A, R, D) {
        return t = new t1(t, e, l, i, m, A, R, D, f), e = 1, u === !0 && (e |= 24), u = fe(3, null, null, e), t.current = u, u.stateNode = t, e = Pi(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: e
        }, ac(u), t
    }

    function Ld(t) {
        return t ? (t = fa, t) : fa
    }

    function Gd(t, e, l, a, n, u) {
        n = Ld(n), a.context === null ? a.context = n : a.pendingContext = n, a = ml(e), a.payload = {
            element: l
        }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = yl(t, a, e), l !== null && (ne(l, t, e), an(l, t, e))
    }

    function Yd(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }

    function Ss(t, e) {
        Yd(t, e), (t = t.alternate) && Yd(t, e)
    }

    function Xd(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Bl(t, 67108864);
            e !== null && ne(e, t, 67108864), Ss(t, 67108864)
        }
    }

    function Qd(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = me();
            e = vi(e);
            var l = Bl(t, e);
            l !== null && ne(l, t, e), Ss(t, e)
        }
    }
    var ku = !0;

    function e1(t, e, l, a) {
        var n = j.T;
        j.T = null;
        var u = w.p;
        try {
            w.p = 2, Es(t, e, l, a)
        } finally {
            w.p = u, j.T = n
        }
    }

    function l1(t, e, l, a) {
        var n = j.T;
        j.T = null;
        var u = w.p;
        try {
            w.p = 8, Es(t, e, l, a)
        } finally {
            w.p = u, j.T = n
        }
    }

    function Es(t, e, l, a) {
        if (ku) {
            var n = As(a);
            if (n === null) ss(t, e, a, $u, l), Vd(t, a);
            else if (n1(n, t, e, l, a)) a.stopPropagation();
            else if (Vd(t, a), e & 4 && -1 < a1.indexOf(t)) {
                for (; n !== null;) {
                    var u = Il(n);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var i = Ol(u.pendingLanes);
                                if (i !== 0) {
                                    var f = u;
                                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                                        var m = 1 << 31 - ce(i);
                                        f.entanglements[1] |= m, i &= ~m
                                    }
                                    Be(u), (ot & 6) === 0 && (Cu = ue() + 500, bn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            f = Bl(u, 2), f !== null && ne(f, u, 2), Du(), Ss(u, 2)
                    }
                    if (u = As(a), u === null && ss(t, e, a, $u, l), u === n) break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else ss(t, e, a, null, l)
        }
    }

    function As(t) {
        return t = Ti(t), zs(t)
    }
    var $u = null;

    function zs(t) {
        if ($u = null, t = Wl(t), t !== null) {
            var e = h(t);
            if (e === null) t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (t = b(e), t !== null) return t;
                    t = null
                } else if (l === 31) {
                    if (t = _(e), t !== null) return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return $u = t, null
    }

    function Zd(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Xh()) {
                    case Fs:
                        return 2;
                    case Ws:
                        return 8;
                    case qn:
                    case Qh:
                        return 32;
                    case Is:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Ts = !1,
        Nl = null,
        Ml = null,
        _l = null,
        Mn = new Map,
        _n = new Map,
        Rl = [],
        a1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Vd(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Nl = null;
                break;
            case "dragenter":
            case "dragleave":
                Ml = null;
                break;
            case "mouseover":
            case "mouseout":
                _l = null;
                break;
            case "pointerover":
            case "pointerout":
                Mn.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                _n.delete(e.pointerId)
        }
    }

    function Rn(t, e, l, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        }, e !== null && (e = Il(e), e !== null && Xd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t)
    }

    function n1(t, e, l, a, n) {
        switch (e) {
            case "focusin":
                return Nl = Rn(Nl, t, e, l, a, n), !0;
            case "dragenter":
                return Ml = Rn(Ml, t, e, l, a, n), !0;
            case "mouseover":
                return _l = Rn(_l, t, e, l, a, n), !0;
            case "pointerover":
                var u = n.pointerId;
                return Mn.set(u, Rn(Mn.get(u) || null, t, e, l, a, n)), !0;
            case "gotpointercapture":
                return u = n.pointerId, _n.set(u, Rn(_n.get(u) || null, t, e, l, a, n)), !0
        }
        return !1
    }

    function Kd(t) {
        var e = Wl(t.target);
        if (e !== null) {
            var l = h(e);
            if (l !== null) {
                if (e = l.tag, e === 13) {
                    if (e = b(l), e !== null) {
                        t.blockedOn = e, nf(t.priority, function() {
                            Qd(l)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = _(l), e !== null) {
                        t.blockedOn = e, nf(t.priority, function() {
                            Qd(l)
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function Fu(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var l = As(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var a = new l.constructor(l.type, l);
                zi = a, l.target.dispatchEvent(a), zi = null
            } else return e = Il(l), e !== null && Xd(e), t.blockedOn = l, !1;
            e.shift()
        }
        return !0
    }

    function Jd(t, e, l) {
        Fu(t) && l.delete(e)
    }

    function u1() {
        Ts = !1, Nl !== null && Fu(Nl) && (Nl = null), Ml !== null && Fu(Ml) && (Ml = null), _l !== null && Fu(_l) && (_l = null), Mn.forEach(Jd), _n.forEach(Jd)
    }

    function Wu(t, e) {
        t.blockedOn === e && (t.blockedOn = null, Ts || (Ts = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, u1)))
    }
    var Iu = null;

    function kd(t) {
        Iu !== t && (Iu = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            Iu === t && (Iu = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e],
                    a = t[e + 1],
                    n = t[e + 2];
                if (typeof a != "function") {
                    if (zs(a || l) === null) continue;
                    break
                }
                var u = Il(l);
                u !== null && (t.splice(e, 3), e -= 3, Ac(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }

    function Da(t) {
        function e(m) {
            return Wu(m, t)
        }
        Nl !== null && Wu(Nl, t), Ml !== null && Wu(Ml, t), _l !== null && Wu(_l, t), Mn.forEach(e), _n.forEach(e);
        for (var l = 0; l < Rl.length; l++) {
            var a = Rl[l];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < Rl.length && (l = Rl[0], l.blockedOn === null);) Kd(l), l.blockedOn === null && Rl.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a],
                    u = l[a + 1],
                    i = n[It] || null;
                if (typeof u == "function") i || kd(l);
                else if (i) {
                    var f = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u, i = u[It] || null) f = i.formAction;
                        else if (zs(n) !== null) continue
                    } else f = i.action;
                    typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), kd(l)
                }
            }
    }

    function $d() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return n = i
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function e() {
            n !== null && (n(), n = null), a || setTimeout(l, 20)
        }

        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1,
                n = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100),
                function() {
                    a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null)
                }
        }
    }

    function Ns(t) {
        this._internalRoot = t
    }
    Pu.prototype.render = Ns.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(s(409));
        var l = e.current,
            a = me();
        Gd(l, a, t, e, null, null)
    }, Pu.prototype.unmount = Ns.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Gd(t.current, 2, null, t, null, null), Du(), e[Fl] = null
        }
    };

    function Pu(t) {
        this._internalRoot = t
    }
    Pu.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = af();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++);
            Rl.splice(l, 0, t), l === 0 && Kd(t)
        }
    };
    var Fd = o.version;
    if (Fd !== "19.2.3") throw Error(s(527, Fd, "19.2.3"));
    w.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
        return t = v(e), t = t !== null ? O(t) : null, t = t === null ? null : t.stateNode, t
    };
    var i1 = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ti.isDisabled && ti.supportsFiber) try {
            Ba = ti.inject(i1), ie = ti
        } catch {}
    }
    return Cn.createRoot = function(t, e) {
        if (!d(t)) throw Error(s(299));
        var l = !1,
            a = "",
            n = ar,
            u = nr,
            i = ur;
        return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = qd(t, 1, !1, null, null, l, a, null, n, u, i, $d), t[Fl] = e.current, cs(t), new Ns(e)
    }, Cn.hydrateRoot = function(t, e, l) {
        if (!d(t)) throw Error(s(299));
        var a = !1,
            n = "",
            u = ar,
            i = nr,
            f = ur,
            m = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = qd(t, 1, !0, e, l ?? null, a, n, m, u, i, f, $d), e.context = Ld(null), l = e.current, a = me(), a = vi(a), n = ml(a), n.callback = null, yl(l, n, a), l = a, e.current.lanes = l, La(e, l), Be(e), t[Fl] = e.current, cs(t), new Pu(e)
    }, Cn.version = "19.2.3", Cn
}
var ih;

function v1() {
    if (ih) return Rs.exports;
    ih = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (o) {
            console.error(o)
        }
    }
    return c(), Rs.exports = y1(), Rs.exports
}
var p1 = v1();
var ch = "popstate";

function sh(c) {
    return typeof c == "object" && c != null && "pathname" in c && "search" in c && "hash" in c && "state" in c && "key" in c
}

function g1(c = {}) {
    function o(s, d) {
        let h = d.state?.masked,
            {
                pathname: b,
                search: _,
                hash: S
            } = h || s.location;
        return Bs("", {
            pathname: b,
            search: _,
            hash: S
        }, d.state && d.state.usr || null, d.state && d.state.key || "default", h ? {
            pathname: s.location.pathname,
            search: s.location.search,
            hash: s.location.hash
        } : void 0)
    }

    function r(s, d) {
        return typeof d == "string" ? d : Dn(d)
    }
    return b1(o, r, null, c)
}

function Lt(c, o) {
    if (c === !1 || c === null || typeof c > "u") throw new Error(o)
}

function qe(c, o) {
    if (!c) {
        typeof console < "u" && console.warn(o);
        try {
            throw new Error(o)
        } catch {}
    }
}

function x1() {
    return Math.random().toString(36).substring(2, 10)
}

function fh(c, o) {
    return {
        usr: c.state,
        key: c.key,
        idx: o,
        masked: c.unstable_mask ? {
            pathname: c.pathname,
            search: c.search,
            hash: c.hash
        } : void 0
    }
}

function Bs(c, o, r = null, s, d) {
    return {
        pathname: typeof c == "string" ? c : c.pathname,
        search: "",
        hash: "",
        ...typeof o == "string" ? Hn(o) : o,
        state: r,
        key: o && o.key || s || x1(),
        unstable_mask: d
    }
}

function Dn({
    pathname: c = "/",
    search: o = "",
    hash: r = ""
}) {
    return o && o !== "?" && (c += o.charAt(0) === "?" ? o : "?" + o), r && r !== "#" && (c += r.charAt(0) === "#" ? r : "#" + r), c
}

function Hn(c) {
    let o = {};
    if (c) {
        let r = c.indexOf("#");
        r >= 0 && (o.hash = c.substring(r), c = c.substring(0, r));
        let s = c.indexOf("?");
        s >= 0 && (o.search = c.substring(s), c = c.substring(0, s)), c && (o.pathname = c)
    }
    return o
}

function b1(c, o, r, s = {}) {
    let {
        window: d = document.defaultView,
        v5Compat: h = !1
    } = s, b = d.history, _ = "POP", S = null, v = O();
    v == null && (v = 0, b.replaceState({
        ...b.state,
        idx: v
    }, ""));

    function O() {
        return (b.state || {
            idx: null
        }).idx
    }

    function T() {
        _ = "POP";
        let U = O(),
            J = U == null ? null : U - v;
        v = U, S && S({
            action: _,
            location: X.location,
            delta: J
        })
    }

    function B(U, J) {
        _ = "PUSH";
        let tt = sh(U) ? U : Bs(X.location, U, J);
        v = O() + 1;
        let k = fh(tt, v),
            gt = X.createHref(tt.unstable_mask || tt);
        try {
            b.pushState(k, "", gt)
        } catch (xt) {
            if (xt instanceof DOMException && xt.name === "DataCloneError") throw xt;
            d.location.assign(gt)
        }
        h && S && S({
            action: _,
            location: X.location,
            delta: 1
        })
    }

    function K(U, J) {
        _ = "REPLACE";
        let tt = sh(U) ? U : Bs(X.location, U, J);
        v = O();
        let k = fh(tt, v),
            gt = X.createHref(tt.unstable_mask || tt);
        b.replaceState(k, "", gt), h && S && S({
            action: _,
            location: X.location,
            delta: 0
        })
    }

    function Z(U) {
        return S1(U)
    }
    let X = {
        get action() {
            return _
        },
        get location() {
            return c(d, b)
        },
        listen(U) {
            if (S) throw new Error("A history only accepts one active listener");
            return d.addEventListener(ch, T), S = U, () => {
                d.removeEventListener(ch, T), S = null
            }
        },
        createHref(U) {
            return o(d, U)
        },
        createURL: Z,
        encodeLocation(U) {
            let J = Z(U);
            return {
                pathname: J.pathname,
                search: J.search,
                hash: J.hash
            }
        },
        push: B,
        replace: K,
        go(U) {
            return b.go(U)
        }
    };
    return X
}

function S1(c, o = !1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Lt(r, "No window.location.(origin|href) available to create URL");
    let s = typeof c == "string" ? c : Dn(c);
    return s = s.replace(/ $/, "%20"), !o && s.startsWith("//") && (s = r + s), new URL(s, r)
}

function ph(c, o, r = "/") {
    return E1(c, o, r, !1)
}

function E1(c, o, r, s) {
    let d = typeof o == "string" ? Hn(o) : o,
        h = al(d.pathname || "/", r);
    if (h == null) return null;
    let b = gh(c);
    A1(b);
    let _ = null;
    for (let S = 0; _ == null && S < b.length; ++S) {
        let v = H1(h);
        _ = O1(b[S], v, s)
    }
    return _
}

function gh(c, o = [], r = [], s = "", d = !1) {
    let h = (b, _, S = d, v) => {
        let O = {
            relativePath: v === void 0 ? b.path || "" : v,
            caseSensitive: b.caseSensitive === !0,
            childrenIndex: _,
            route: b
        };
        if (O.relativePath.startsWith("/")) {
            if (!O.relativePath.startsWith(s) && S) return;
            Lt(O.relativePath.startsWith(s), `Absolute route path "${O.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), O.relativePath = O.relativePath.slice(s.length)
        }
        let T = Ce([s, O.relativePath]),
            B = r.concat(O);
        b.children && b.children.length > 0 && (Lt(b.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${T}".`), gh(b.children, o, B, T, S)), !(b.path == null && !b.index) && o.push({
            path: T,
            score: j1(T, b.index),
            routesMeta: B
        })
    };
    return c.forEach((b, _) => {
        if (b.path === "" || !b.path?.includes("?")) h(b, _);
        else
            for (let S of xh(b.path)) h(b, _, !0, S)
    }), o
}

function xh(c) {
    let o = c.split("/");
    if (o.length === 0) return [];
    let [r, ...s] = o, d = r.endsWith("?"), h = r.replace(/\?$/, "");
    if (s.length === 0) return d ? [h, ""] : [h];
    let b = xh(s.join("/")),
        _ = [];
    return _.push(...b.map(S => S === "" ? h : [h, S].join("/"))), d && _.push(...b), _.map(S => c.startsWith("/") && S === "" ? "/" : S)
}

function A1(c) {
    c.sort((o, r) => o.score !== r.score ? r.score - o.score : C1(o.routesMeta.map(s => s.childrenIndex), r.routesMeta.map(s => s.childrenIndex)))
}
var z1 = /^:[\w-]+$/,
    T1 = 3,
    N1 = 2,
    M1 = 1,
    _1 = 10,
    R1 = -2,
    oh = c => c === "*";

function j1(c, o) {
    let r = c.split("/"),
        s = r.length;
    return r.some(oh) && (s += R1), o && (s += N1), r.filter(d => !oh(d)).reduce((d, h) => d + (z1.test(h) ? T1 : h === "" ? M1 : _1), s)
}

function C1(c, o) {
    return c.length === o.length && c.slice(0, -1).every((s, d) => s === o[d]) ? c[c.length - 1] - o[o.length - 1] : 0
}

function O1(c, o, r = !1) {
    let {
        routesMeta: s
    } = c, d = {}, h = "/", b = [];
    for (let _ = 0; _ < s.length; ++_) {
        let S = s[_],
            v = _ === s.length - 1,
            O = h === "/" ? o : o.slice(h.length) || "/",
            T = ni({
                path: S.relativePath,
                caseSensitive: S.caseSensitive,
                end: v
            }, O),
            B = S.route;
        if (!T && v && r && !s[s.length - 1].route.index && (T = ni({
                path: S.relativePath,
                caseSensitive: S.caseSensitive,
                end: !1
            }, O)), !T) return null;
        Object.assign(d, T.params), b.push({
            params: d,
            pathname: Ce([h, T.pathname]),
            pathnameBase: q1(Ce([h, T.pathnameBase])),
            route: B
        }), T.pathnameBase !== "/" && (h = Ce([h, T.pathnameBase]))
    }
    return b
}

function ni(c, o) {
    typeof c == "string" && (c = {
        path: c,
        caseSensitive: !1,
        end: !0
    });
    let [r, s] = D1(c.path, c.caseSensitive, c.end), d = o.match(r);
    if (!d) return null;
    let h = d[0],
        b = h.replace(/(.)\/+$/, "$1"),
        _ = d.slice(1);
    return {
        params: s.reduce((v, {
            paramName: O,
            isOptional: T
        }, B) => {
            if (O === "*") {
                let Z = _[B] || "";
                b = h.slice(0, h.length - Z.length).replace(/(.)\/+$/, "$1")
            }
            const K = _[B];
            return T && !K ? v[O] = void 0 : v[O] = (K || "").replace(/%2F/g, "/"), v
        }, {}),
        pathname: h,
        pathnameBase: b,
        pattern: c
    }
}

function D1(c, o = !1, r = !0) {
    qe(c === "*" || !c.endsWith("*") || c.endsWith("/*"), `Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);
    let s = [],
        d = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (b, _, S, v, O) => {
            if (s.push({
                    paramName: _,
                    isOptional: S != null
                }), S) {
                let T = O.charAt(v + b.length);
                return T && T !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?"
            }
            return "/([^\\/]+)"
        }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return c.endsWith("*") ? (s.push({
        paramName: "*"
    }), d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? d += "\\/*$" : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, o ? void 0 : "i"), s]
}

function H1(c) {
    try {
        return c.split("/").map(o => decodeURIComponent(o).replace(/\//g, "%2F")).join("/")
    } catch (o) {
        return qe(!1, `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`), c
    }
}

function al(c, o) {
    if (o === "/") return c;
    if (!c.toLowerCase().startsWith(o.toLowerCase())) return null;
    let r = o.endsWith("/") ? o.length - 1 : o.length,
        s = c.charAt(r);
    return s && s !== "/" ? null : c.slice(r) || "/"
}
var U1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function w1(c, o = "/") {
    let {
        pathname: r,
        search: s = "",
        hash: d = ""
    } = typeof c == "string" ? Hn(c) : c, h;
    return r ? (r = Sh(r), r.startsWith("/") ? h = rh(r.substring(1), "/") : h = rh(r, o)) : h = o, {
        pathname: h,
        search: L1(s),
        hash: G1(d)
    }
}

function rh(c, o) {
    let r = ui(o).split("/");
    return c.split("/").forEach(d => {
        d === ".." ? r.length > 1 && r.pop() : d !== "." && r.push(d)
    }), r.length > 1 ? r.join("/") : "/"
}

function Ds(c, o, r, s) {
    return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function B1(c) {
    return c.filter((o, r) => r === 0 || o.route.path && o.route.path.length > 0)
}

function bh(c) {
    let o = B1(c);
    return o.map((r, s) => s === o.length - 1 ? r.pathname : r.pathnameBase)
}

function Ls(c, o, r, s = !1) {
    let d;
    typeof c == "string" ? d = Hn(c) : (d = {
        ...c
    }, Lt(!d.pathname || !d.pathname.includes("?"), Ds("?", "pathname", "search", d)), Lt(!d.pathname || !d.pathname.includes("#"), Ds("#", "pathname", "hash", d)), Lt(!d.search || !d.search.includes("#"), Ds("#", "search", "hash", d)));
    let h = c === "" || d.pathname === "",
        b = h ? "/" : d.pathname,
        _;
    if (b == null) _ = r;
    else {
        let T = o.length - 1;
        if (!s && b.startsWith("..")) {
            let B = b.split("/");
            for (; B[0] === "..";) B.shift(), T -= 1;
            d.pathname = B.join("/")
        }
        _ = T >= 0 ? o[T] : "/"
    }
    let S = w1(d, _),
        v = b && b !== "/" && b.endsWith("/"),
        O = (h || b === ".") && r.endsWith("/");
    return !S.pathname.endsWith("/") && (v || O) && (S.pathname += "/"), S
}
var Sh = c => c.replace(/\/\/+/g, "/"),
    Ce = c => Sh(c.join("/")),
    ui = c => c.replace(/\/+$/, ""),
    q1 = c => ui(c).replace(/^\/*/, "/"),
    L1 = c => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c,
    G1 = c => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c,
    Y1 = class {
        constructor(c, o, r, s = !1) {
            this.status = c, this.statusText = o || "", this.internal = s, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
    };

function X1(c) {
    return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c
}

function Q1(c) {
    let o = c.map(r => r.route.path).filter(Boolean);
    return Ce(o) || "/"
}
var Eh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Ah(c, o) {
    let r = c;
    if (typeof r != "string" || !U1.test(r)) return {
        absoluteURL: void 0,
        isExternal: !1,
        to: r
    };
    let s = r,
        d = !1;
    if (Eh) try {
        let h = new URL(window.location.href),
            b = r.startsWith("//") ? new URL(h.protocol + r) : new URL(r),
            _ = al(b.pathname, o);
        b.origin === h.origin && _ != null ? r = _ + b.search + b.hash : d = !0
    } catch {
        qe(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
    }
    return {
        absoluteURL: s,
        isExternal: d,
        to: r
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var zh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(zh);
var Z1 = ["GET", ...zh];
new Set(Z1);
var Ua = M.createContext(null);
Ua.displayName = "DataRouter";
var ii = M.createContext(null);
ii.displayName = "DataRouterState";
var Th = M.createContext(!1);

function V1() {
    return M.useContext(Th)
}
var Nh = M.createContext({
    isTransitioning: !1
});
Nh.displayName = "ViewTransition";
var K1 = M.createContext(new Map);
K1.displayName = "Fetchers";
var J1 = M.createContext(null);
J1.displayName = "Await";
var Me = M.createContext(null);
Me.displayName = "Navigation";
var ci = M.createContext(null);
ci.displayName = "Location";
var nl = M.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
nl.displayName = "Route";
var Gs = M.createContext(null);
Gs.displayName = "RouteError";
var Mh = "REACT_ROUTER_ERROR",
    k1 = "REDIRECT",
    $1 = "ROUTE_ERROR_RESPONSE";

function F1(c) {
    if (c.startsWith(`${Mh}:${k1}:{`)) try {
        let o = JSON.parse(c.slice(28));
        if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean") return o
    } catch {}
}

function W1(c) {
    if (c.startsWith(`${Mh}:${$1}:{`)) try {
        let o = JSON.parse(c.slice(40));
        if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string") return new Y1(o.status, o.statusText, o.data)
    } catch {}
}

function I1(c, {
    relative: o
} = {}) {
    Lt(Un(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: r,
        navigator: s
    } = M.useContext(Me), {
        hash: d,
        pathname: h,
        search: b
    } = wn(c, {
        relative: o
    }), _ = h;
    return r !== "/" && (_ = h === "/" ? r : Ce([r, h])), s.createHref({
        pathname: _,
        search: b,
        hash: d
    })
}

function Un() {
    return M.useContext(ci) != null
}

function ul() {
    return Lt(Un(), "useLocation() may be used only in the context of a <Router> component."), M.useContext(ci).location
}
var _h = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Rh(c) {
    M.useContext(Me).static || M.useLayoutEffect(c)
}

function P1() {
    let {
        isDataRoute: c
    } = M.useContext(nl);
    return c ? dy() : ty()
}

function ty() {
    Lt(Un(), "useNavigate() may be used only in the context of a <Router> component.");
    let c = M.useContext(Ua),
        {
            basename: o,
            navigator: r
        } = M.useContext(Me),
        {
            matches: s
        } = M.useContext(nl),
        {
            pathname: d
        } = ul(),
        h = JSON.stringify(bh(s)),
        b = M.useRef(!1);
    return Rh(() => {
        b.current = !0
    }), M.useCallback((S, v = {}) => {
        if (qe(b.current, _h), !b.current) return;
        if (typeof S == "number") {
            r.go(S);
            return
        }
        let O = Ls(S, JSON.parse(h), d, v.relative === "path");
        c == null && o !== "/" && (O.pathname = O.pathname === "/" ? o : Ce([o, O.pathname])), (v.replace ? r.replace : r.push)(O, v.state, v)
    }, [o, r, h, d, c])
}
M.createContext(null);

function wn(c, {
    relative: o
} = {}) {
    let {
        matches: r
    } = M.useContext(nl), {
        pathname: s
    } = ul(), d = JSON.stringify(bh(r));
    return M.useMemo(() => Ls(c, JSON.parse(d), s, o === "path"), [c, d, s, o])
}

function ey(c, o, r) {
    Lt(Un(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: s
    } = M.useContext(Me), {
        matches: d
    } = M.useContext(nl), h = d[d.length - 1], b = h ? h.params : {}, _ = h ? h.pathname : "/", S = h ? h.pathnameBase : "/", v = h && h.route;
    {
        let U = v && v.path || "";
        Ch(_, !v || U.endsWith("*") || U.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)
    }
    let O = ul(),
        T;
    T = O;
    let B = T.pathname || "/",
        K = B;
    if (S !== "/") {
        let U = S.replace(/^\//, "").split("/");
        K = "/" + B.replace(/^\//, "").split("/").slice(U.length).join("/")
    }
    let Z = ph(c, {
        pathname: K
    });
    return qe(v || Z != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), qe(Z == null || Z[Z.length - 1].route.element !== void 0 || Z[Z.length - 1].route.Component !== void 0 || Z[Z.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), iy(Z && Z.map(U => Object.assign({}, U, {
        params: Object.assign({}, b, U.params),
        pathname: Ce([S, s.encodeLocation ? s.encodeLocation(U.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : U.pathname]),
        pathnameBase: U.pathnameBase === "/" ? S : Ce([S, s.encodeLocation ? s.encodeLocation(U.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : U.pathnameBase])
    })), d, r)
}

function ly() {
    let c = ry(),
        o = X1(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
        r = c instanceof Error ? c.stack : null,
        s = "rgba(200,200,200, 0.5)",
        d = {
            padding: "0.5rem",
            backgroundColor: s
        },
        h = {
            padding: "2px 4px",
            backgroundColor: s
        },
        b = null;
    return console.error("Error handled by React Router default ErrorBoundary:", c), b = M.createElement(M.Fragment, null, M.createElement("p", null, "💿 Hey developer 👋"), M.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", M.createElement("code", {
        style: h
    }, "ErrorBoundary"), " or", " ", M.createElement("code", {
        style: h
    }, "errorElement"), " prop on your route.")), M.createElement(M.Fragment, null, M.createElement("h2", null, "Unexpected Application Error!"), M.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, o), r ? M.createElement("pre", {
        style: d
    }, r) : null, b)
}
var ay = M.createElement(ly, null),
    jh = class extends M.Component {
        constructor(c) {
            super(c), this.state = {
                location: c.location,
                revalidation: c.revalidation,
                error: c.error
            }
        }
        static getDerivedStateFromError(c) {
            return {
                error: c
            }
        }
        static getDerivedStateFromProps(c, o) {
            return o.location !== c.location || o.revalidation !== "idle" && c.revalidation === "idle" ? {
                error: c.error,
                location: c.location,
                revalidation: c.revalidation
            } : {
                error: c.error !== void 0 ? c.error : o.error,
                location: o.location,
                revalidation: c.revalidation || o.revalidation
            }
        }
        componentDidCatch(c, o) {
            this.props.onError ? this.props.onError(c, o) : console.error("React Router caught the following error during render", c)
        }
        render() {
            let c = this.state.error;
            if (this.context && typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
                const r = W1(c.digest);
                r && (c = r)
            }
            let o = c !== void 0 ? M.createElement(nl.Provider, {
                value: this.props.routeContext
            }, M.createElement(Gs.Provider, {
                value: c,
                children: this.props.component
            })) : this.props.children;
            return this.context ? M.createElement(ny, {
                error: c
            }, o) : o
        }
    };
jh.contextType = Th;
var Hs = new WeakMap;

function ny({
    children: c,
    error: o
}) {
    let {
        basename: r
    } = M.useContext(Me);
    if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
        let s = F1(o.digest);
        if (s) {
            let d = Hs.get(o);
            if (d) throw d;
            let h = Ah(s.location, r);
            if (Eh && !Hs.get(o))
                if (h.isExternal || s.reloadDocument) window.location.href = h.absoluteURL || h.to;
                else {
                    const b = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(h.to, {
                        replace: s.replace
                    }));
                    throw Hs.set(o, b), b
                } return M.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${h.absoluteURL||h.to}`
            })
        }
    }
    return c
}

function uy({
    routeContext: c,
    match: o,
    children: r
}) {
    let s = M.useContext(Ua);
    return s && s.static && s.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = o.route.id), M.createElement(nl.Provider, {
        value: c
    }, r)
}

function iy(c, o = [], r) {
    let s = r?.state;
    if (c == null) {
        if (!s) return null;
        if (s.errors) c = s.matches;
        else if (o.length === 0 && !s.initialized && s.matches.length > 0) c = s.matches;
        else return null
    }
    let d = c,
        h = s?.errors;
    if (h != null) {
        let O = d.findIndex(T => T.route.id && h?.[T.route.id] !== void 0);
        Lt(O >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), d = d.slice(0, Math.min(d.length, O + 1))
    }
    let b = !1,
        _ = -1;
    if (r && s) {
        b = s.renderFallback;
        for (let O = 0; O < d.length; O++) {
            let T = d[O];
            if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (_ = O), T.route.id) {
                let {
                    loaderData: B,
                    errors: K
                } = s, Z = T.route.loader && !B.hasOwnProperty(T.route.id) && (!K || K[T.route.id] === void 0);
                if (T.route.lazy || Z) {
                    r.isStatic && (b = !0), _ >= 0 ? d = d.slice(0, _ + 1) : d = [d[0]];
                    break
                }
            }
        }
    }
    let S = r?.onError,
        v = s && S ? (O, T) => {
            S(O, {
                location: s.location,
                params: s.matches?.[0]?.params ?? {},
                unstable_pattern: Q1(s.matches),
                errorInfo: T
            })
        } : void 0;
    return d.reduceRight((O, T, B) => {
        let K, Z = !1,
            X = null,
            U = null;
        s && (K = h && T.route.id ? h[T.route.id] : void 0, X = T.route.errorElement || ay, b && (_ < 0 && B === 0 ? (Ch("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), Z = !0, U = null) : _ === B && (Z = !0, U = T.route.hydrateFallbackElement || null)));
        let J = o.concat(d.slice(0, B + 1)),
            tt = () => {
                let k;
                return K ? k = X : Z ? k = U : T.route.Component ? k = M.createElement(T.route.Component, null) : T.route.element ? k = T.route.element : k = O, M.createElement(uy, {
                    match: T,
                    routeContext: {
                        outlet: O,
                        matches: J,
                        isDataRoute: s != null
                    },
                    children: k
                })
            };
        return s && (T.route.ErrorBoundary || T.route.errorElement || B === 0) ? M.createElement(jh, {
            location: s.location,
            revalidation: s.revalidation,
            component: X,
            error: K,
            children: tt(),
            routeContext: {
                outlet: null,
                matches: J,
                isDataRoute: !0
            },
            onError: v
        }) : tt()
    }, null)
}

function Ys(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function cy(c) {
    let o = M.useContext(Ua);
    return Lt(o, Ys(c)), o
}

function sy(c) {
    let o = M.useContext(ii);
    return Lt(o, Ys(c)), o
}

function fy(c) {
    let o = M.useContext(nl);
    return Lt(o, Ys(c)), o
}

function Xs(c) {
    let o = fy(c),
        r = o.matches[o.matches.length - 1];
    return Lt(r.route.id, `${c} can only be used on routes that contain a unique "id"`), r.route.id
}

function oy() {
    return Xs("useRouteId")
}

function ry() {
    let c = M.useContext(Gs),
        o = sy("useRouteError"),
        r = Xs("useRouteError");
    return c !== void 0 ? c : o.errors?.[r]
}

function dy() {
    let {
        router: c
    } = cy("useNavigate"), o = Xs("useNavigate"), r = M.useRef(!1);
    return Rh(() => {
        r.current = !0
    }), M.useCallback(async (d, h = {}) => {
        qe(r.current, _h), r.current && (typeof d == "number" ? await c.navigate(d) : await c.navigate(d, {
            fromRouteId: o,
            ...h
        }))
    }, [c, o])
}
var dh = {};

function Ch(c, o, r) {
    !o && !dh[c] && (dh[c] = !0, qe(!1, r))
}
M.memo(hy);

function hy({
    routes: c,
    future: o,
    state: r,
    isStatic: s,
    onError: d
}) {
    return ey(c, void 0, {
        state: r,
        isStatic: s,
        onError: d
    })
}

function my({
    basename: c = "/",
    children: o = null,
    location: r,
    navigationType: s = "POP",
    navigator: d,
    static: h = !1,
    unstable_useTransitions: b
}) {
    Lt(!Un(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let _ = c.replace(/^\/*/, "/"),
        S = M.useMemo(() => ({
            basename: _,
            navigator: d,
            static: h,
            unstable_useTransitions: b,
            future: {}
        }), [_, d, h, b]);
    typeof r == "string" && (r = Hn(r));
    let {
        pathname: v = "/",
        search: O = "",
        hash: T = "",
        state: B = null,
        key: K = "default",
        unstable_mask: Z
    } = r, X = M.useMemo(() => {
        let U = al(v, _);
        return U == null ? null : {
            location: {
                pathname: U,
                search: O,
                hash: T,
                state: B,
                key: K,
                unstable_mask: Z
            },
            navigationType: s
        }
    }, [_, v, O, T, B, K, s, Z]);
    return qe(X != null, `<Router basename="${_}"> is not able to match the URL "${v}${O}${T}" because it does not start with the basename, so the <Router> won't render anything.`), X == null ? null : M.createElement(Me.Provider, {
        value: S
    }, M.createElement(ci.Provider, {
        children: o,
        value: X
    }))
}
var li = "get",
    ai = "application/x-www-form-urlencoded";

function si(c) {
    return typeof HTMLElement < "u" && c instanceof HTMLElement
}

function yy(c) {
    return si(c) && c.tagName.toLowerCase() === "button"
}

function vy(c) {
    return si(c) && c.tagName.toLowerCase() === "form"
}

function py(c) {
    return si(c) && c.tagName.toLowerCase() === "input"
}

function gy(c) {
    return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)
}

function xy(c, o) {
    return c.button === 0 && (!o || o === "_self") && !gy(c)
}
var ei = null;

function by() {
    if (ei === null) try {
        new FormData(document.createElement("form"), 0), ei = !1
    } catch {
        ei = !0
    }
    return ei
}
var Sy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Us(c) {
    return c != null && !Sy.has(c) ? (qe(!1, `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ai}"`), null) : c
}

function Ey(c, o) {
    let r, s, d, h, b;
    if (vy(c)) {
        let _ = c.getAttribute("action");
        s = _ ? al(_, o) : null, r = c.getAttribute("method") || li, d = Us(c.getAttribute("enctype")) || ai, h = new FormData(c)
    } else if (yy(c) || py(c) && (c.type === "submit" || c.type === "image")) {
        let _ = c.form;
        if (_ == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let S = c.getAttribute("formaction") || _.getAttribute("action");
        if (s = S ? al(S, o) : null, r = c.getAttribute("formmethod") || _.getAttribute("method") || li, d = Us(c.getAttribute("formenctype")) || Us(_.getAttribute("enctype")) || ai, h = new FormData(_, c), !by()) {
            let {
                name: v,
                type: O,
                value: T
            } = c;
            if (O === "image") {
                let B = v ? `${v}.` : "";
                h.append(`${B}x`, "0"), h.append(`${B}y`, "0")
            } else v && h.append(v, T)
        }
    } else {
        if (si(c)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = li, s = null, d = ai, b = c
    }
    return h && d === "text/plain" && (b = h, h = void 0), {
        action: s,
        method: r.toLowerCase(),
        encType: d,
        formData: h,
        body: b
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function Qs(c, o) {
    if (c === !1 || c === null || typeof c > "u") throw new Error(o)
}

function Oh(c, o, r, s) {
    let d = typeof c == "string" ? new URL(c, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : c;
    return r ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${s}` : d.pathname = `${d.pathname}.${s}` : d.pathname === "/" ? d.pathname = `_root.${s}` : o && al(d.pathname, o) === "/" ? d.pathname = `${ui(o)}/_root.${s}` : d.pathname = `${ui(d.pathname)}.${s}`, d
}
async function Ay(c, o) {
    if (c.id in o) return o[c.id];
    try {
        let r = await import(c.module);
        return o[c.id] = r, r
    } catch (r) {
        return console.error(`Error loading route module \`${c.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function zy(c) {
    return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string"
}
async function Ty(c, o, r) {
    let s = await Promise.all(c.map(async d => {
        let h = o.routes[d.route.id];
        if (h) {
            let b = await Ay(h, r);
            return b.links ? b.links() : []
        }
        return []
    }));
    return Ry(s.flat(1).filter(zy).filter(d => d.rel === "stylesheet" || d.rel === "preload").map(d => d.rel === "stylesheet" ? {
        ...d,
        rel: "prefetch",
        as: "style"
    } : {
        ...d,
        rel: "prefetch"
    }))
}

function hh(c, o, r, s, d, h) {
    let b = (S, v) => r[v] ? S.route.id !== r[v].route.id : !0,
        _ = (S, v) => r[v].pathname !== S.pathname || r[v].route.path?.endsWith("*") && r[v].params["*"] !== S.params["*"];
    return h === "assets" ? o.filter((S, v) => b(S, v) || _(S, v)) : h === "data" ? o.filter((S, v) => {
        let O = s.routes[S.route.id];
        if (!O || !O.hasLoader) return !1;
        if (b(S, v) || _(S, v)) return !0;
        if (S.route.shouldRevalidate) {
            let T = S.route.shouldRevalidate({
                currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
                currentParams: r[0]?.params || {},
                nextUrl: new URL(c, window.origin),
                nextParams: S.params,
                defaultShouldRevalidate: !0
            });
            if (typeof T == "boolean") return T
        }
        return !0
    }) : []
}

function Ny(c, o, {
    includeHydrateFallback: r
} = {}) {
    return My(c.map(s => {
        let d = o.routes[s.route.id];
        if (!d) return [];
        let h = [d.module];
        return d.clientActionModule && (h = h.concat(d.clientActionModule)), d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)), r && d.hydrateFallbackModule && (h = h.concat(d.hydrateFallbackModule)), d.imports && (h = h.concat(d.imports)), h
    }).flat(1))
}

function My(c) {
    return [...new Set(c)]
}

function _y(c) {
    let o = {},
        r = Object.keys(c).sort();
    for (let s of r) o[s] = c[s];
    return o
}

function Ry(c, o) {
    let r = new Set;
    return new Set(o), c.reduce((s, d) => {
        let h = JSON.stringify(_y(d));
        return r.has(h) || (r.add(h), s.push({
            key: h,
            link: d
        })), s
    }, [])
}

function Zs() {
    let c = M.useContext(Ua);
    return Qs(c, "You must render this element inside a <DataRouterContext.Provider> element"), c
}

function jy() {
    let c = M.useContext(ii);
    return Qs(c, "You must render this element inside a <DataRouterStateContext.Provider> element"), c
}
var Vs = M.createContext(void 0);
Vs.displayName = "FrameworkContext";

function Ks() {
    let c = M.useContext(Vs);
    return Qs(c, "You must render this element inside a <HydratedRouter> element"), c
}

function Cy(c, o) {
    let r = M.useContext(Vs),
        [s, d] = M.useState(!1),
        [h, b] = M.useState(!1),
        {
            onFocus: _,
            onBlur: S,
            onMouseEnter: v,
            onMouseLeave: O,
            onTouchStart: T
        } = o,
        B = M.useRef(null);
    M.useEffect(() => {
        if (c === "render" && b(!0), c === "viewport") {
            let X = J => {
                    J.forEach(tt => {
                        b(tt.isIntersecting)
                    })
                },
                U = new IntersectionObserver(X, {
                    threshold: .5
                });
            return B.current && U.observe(B.current), () => {
                U.disconnect()
            }
        }
    }, [c]), M.useEffect(() => {
        if (s) {
            let X = setTimeout(() => {
                b(!0)
            }, 100);
            return () => {
                clearTimeout(X)
            }
        }
    }, [s]);
    let K = () => {
            d(!0)
        },
        Z = () => {
            d(!1), b(!1)
        };
    return r ? c !== "intent" ? [h, B, {}] : [h, B, {
        onFocus: On(_, K),
        onBlur: On(S, Z),
        onMouseEnter: On(v, K),
        onMouseLeave: On(O, Z),
        onTouchStart: On(T, K)
    }] : [!1, B, {}]
}

function On(c, o) {
    return r => {
        c && c(r), r.defaultPrevented || o(r)
    }
}

function Oy({
    page: c,
    ...o
}) {
    let r = V1(),
        {
            router: s
        } = Zs(),
        d = M.useMemo(() => ph(s.routes, c, s.basename), [s.routes, c, s.basename]);
    return d ? r ? M.createElement(Hy, {
        page: c,
        matches: d,
        ...o
    }) : M.createElement(Uy, {
        page: c,
        matches: d,
        ...o
    }) : null
}

function Dy(c) {
    let {
        manifest: o,
        routeModules: r
    } = Ks(), [s, d] = M.useState([]);
    return M.useEffect(() => {
        let h = !1;
        return Ty(c, o, r).then(b => {
            h || d(b)
        }), () => {
            h = !0
        }
    }, [c, o, r]), s
}

function Hy({
    page: c,
    matches: o,
    ...r
}) {
    let s = ul(),
        {
            future: d
        } = Ks(),
        {
            basename: h
        } = Zs(),
        b = M.useMemo(() => {
            if (c === s.pathname + s.search + s.hash) return [];
            let _ = Oh(c, h, d.unstable_trailingSlashAwareDataRequests, "rsc"),
                S = !1,
                v = [];
            for (let O of o) typeof O.route.shouldRevalidate == "function" ? S = !0 : v.push(O.route.id);
            return S && v.length > 0 && _.searchParams.set("_routes", v.join(",")), [_.pathname + _.search]
        }, [h, d.unstable_trailingSlashAwareDataRequests, c, s, o]);
    return M.createElement(M.Fragment, null, b.map(_ => M.createElement("link", {
        key: _,
        rel: "prefetch",
        as: "fetch",
        href: _,
        ...r
    })))
}

function Uy({
    page: c,
    matches: o,
    ...r
}) {
    let s = ul(),
        {
            future: d,
            manifest: h,
            routeModules: b
        } = Ks(),
        {
            basename: _
        } = Zs(),
        {
            loaderData: S,
            matches: v
        } = jy(),
        O = M.useMemo(() => hh(c, o, v, h, s, "data"), [c, o, v, h, s]),
        T = M.useMemo(() => hh(c, o, v, h, s, "assets"), [c, o, v, h, s]),
        B = M.useMemo(() => {
            if (c === s.pathname + s.search + s.hash) return [];
            let X = new Set,
                U = !1;
            if (o.forEach(tt => {
                    let k = h.routes[tt.route.id];
                    !k || !k.hasLoader || (!O.some(gt => gt.route.id === tt.route.id) && tt.route.id in S && b[tt.route.id]?.shouldRevalidate || k.hasClientLoader ? U = !0 : X.add(tt.route.id))
                }), X.size === 0) return [];
            let J = Oh(c, _, d.unstable_trailingSlashAwareDataRequests, "data");
            return U && X.size > 0 && J.searchParams.set("_routes", o.filter(tt => X.has(tt.route.id)).map(tt => tt.route.id).join(",")), [J.pathname + J.search]
        }, [_, d.unstable_trailingSlashAwareDataRequests, S, s, h, O, o, c, b]),
        K = M.useMemo(() => Ny(T, h), [T, h]),
        Z = Dy(T);
    return M.createElement(M.Fragment, null, B.map(X => M.createElement("link", {
        key: X,
        rel: "prefetch",
        as: "fetch",
        href: X,
        ...r
    })), K.map(X => M.createElement("link", {
        key: X,
        rel: "modulepreload",
        href: X,
        ...r
    })), Z.map(({
        key: X,
        link: U
    }) => M.createElement("link", {
        key: X,
        nonce: r.nonce,
        ...U,
        crossOrigin: U.crossOrigin ?? r.crossOrigin
    })))
}

function wy(...c) {
    return o => {
        c.forEach(r => {
            typeof r == "function" ? r(o) : r != null && (r.current = o)
        })
    }
}
var By = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    By && (window.__reactRouterVersion = "7.14.2")
} catch {}

function qy({
    basename: c,
    children: o,
    unstable_useTransitions: r,
    window: s
}) {
    let d = M.useRef();
    d.current == null && (d.current = g1({
        window: s,
        v5Compat: !0
    }));
    let h = d.current,
        [b, _] = M.useState({
            action: h.action,
            location: h.location
        }),
        S = M.useCallback(v => {
            r === !1 ? _(v) : M.startTransition(() => _(v))
        }, [r]);
    return M.useLayoutEffect(() => h.listen(S), [h, S]), M.createElement(my, {
        basename: c,
        children: o,
        location: b.location,
        navigationType: b.action,
        navigator: h,
        unstable_useTransitions: r
    })
}
var Dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Hh = M.forwardRef(function({
        onClick: o,
        discover: r = "render",
        prefetch: s = "none",
        relative: d,
        reloadDocument: h,
        replace: b,
        unstable_mask: _,
        state: S,
        target: v,
        to: O,
        preventScrollReset: T,
        viewTransition: B,
        unstable_defaultShouldRevalidate: K,
        ...Z
    }, X) {
        let {
            basename: U,
            navigator: J,
            unstable_useTransitions: tt
        } = M.useContext(Me), k = typeof O == "string" && Dh.test(O), gt = Ah(O, U);
        O = gt.to;
        let xt = I1(O, {
                relative: d
            }),
            Nt = ul(),
            F = null;
        if (_) {
            let Dt = Ls(_, [], Nt.unstable_mask ? Nt.unstable_mask.pathname : "/", !0);
            U !== "/" && (Dt.pathname = Dt.pathname === "/" ? U : Ce([U, Dt.pathname])), F = J.createHref(Dt)
        }
        let [Rt, Jt, Oe] = Cy(s, Z), ye = Xy(O, {
            replace: b,
            unstable_mask: _,
            state: S,
            target: v,
            preventScrollReset: T,
            relative: d,
            viewTransition: B,
            unstable_defaultShouldRevalidate: K,
            unstable_useTransitions: tt
        });

        function kt(Dt) {
            o && o(Dt), Dt.defaultPrevented || ye(Dt)
        }
        let De = !(gt.isExternal || h),
            ve = M.createElement("a", {
                ...Z,
                ...Oe,
                href: (De ? F : void 0) || gt.absoluteURL || xt,
                onClick: De ? kt : o,
                ref: wy(X, Jt),
                target: v,
                "data-discover": !k && r === "render" ? "true" : void 0
            });
        return Rt && !k ? M.createElement(M.Fragment, null, ve, M.createElement(Oy, {
            page: xt
        })) : ve
    });
Hh.displayName = "Link";
var Ly = M.forwardRef(function({
    "aria-current": o = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: d = !1,
    style: h,
    to: b,
    viewTransition: _,
    children: S,
    ...v
}, O) {
    let T = wn(b, {
            relative: v.relative
        }),
        B = ul(),
        K = M.useContext(ii),
        {
            navigator: Z,
            basename: X
        } = M.useContext(Me),
        U = K != null && Jy(T) && _ === !0,
        J = Z.encodeLocation ? Z.encodeLocation(T).pathname : T.pathname,
        tt = B.pathname,
        k = K && K.navigation && K.navigation.location ? K.navigation.location.pathname : null;
    r || (tt = tt.toLowerCase(), k = k ? k.toLowerCase() : null, J = J.toLowerCase()), k && X && (k = al(k, X) || k);
    const gt = J !== "/" && J.endsWith("/") ? J.length - 1 : J.length;
    let xt = tt === J || !d && tt.startsWith(J) && tt.charAt(gt) === "/",
        Nt = k != null && (k === J || !d && k.startsWith(J) && k.charAt(J.length) === "/"),
        F = {
            isActive: xt,
            isPending: Nt,
            isTransitioning: U
        },
        Rt = xt ? o : void 0,
        Jt;
    typeof s == "function" ? Jt = s(F) : Jt = [s, xt ? "active" : null, Nt ? "pending" : null, U ? "transitioning" : null].filter(Boolean).join(" ");
    let Oe = typeof h == "function" ? h(F) : h;
    return M.createElement(Hh, {
        ...v,
        "aria-current": Rt,
        className: Jt,
        ref: O,
        style: Oe,
        to: b,
        viewTransition: _
    }, typeof S == "function" ? S(F) : S)
});
Ly.displayName = "NavLink";
var Gy = M.forwardRef(({
    discover: c = "render",
    fetcherKey: o,
    navigate: r,
    reloadDocument: s,
    replace: d,
    state: h,
    method: b = li,
    action: _,
    onSubmit: S,
    relative: v,
    preventScrollReset: O,
    viewTransition: T,
    unstable_defaultShouldRevalidate: B,
    ...K
}, Z) => {
    let {
        unstable_useTransitions: X
    } = M.useContext(Me), U = Vy(), J = Ky(_, {
        relative: v
    }), tt = b.toLowerCase() === "get" ? "get" : "post", k = typeof _ == "string" && Dh.test(_), gt = xt => {
        if (S && S(xt), xt.defaultPrevented) return;
        xt.preventDefault();
        let Nt = xt.nativeEvent.submitter,
            F = Nt?.getAttribute("formmethod") || b,
            Rt = () => U(Nt || xt.currentTarget, {
                fetcherKey: o,
                method: F,
                navigate: r,
                replace: d,
                state: h,
                relative: v,
                preventScrollReset: O,
                viewTransition: T,
                unstable_defaultShouldRevalidate: B
            });
        X && r !== !1 ? M.startTransition(() => Rt()) : Rt()
    };
    return M.createElement("form", {
        ref: Z,
        method: tt,
        action: J,
        onSubmit: s ? S : gt,
        ...K,
        "data-discover": !k && c === "render" ? "true" : void 0
    })
});
Gy.displayName = "Form";

function Yy(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Uh(c) {
    let o = M.useContext(Ua);
    return Lt(o, Yy(c)), o
}

function Xy(c, {
    target: o,
    replace: r,
    unstable_mask: s,
    state: d,
    preventScrollReset: h,
    relative: b,
    viewTransition: _,
    unstable_defaultShouldRevalidate: S,
    unstable_useTransitions: v
} = {}) {
    let O = P1(),
        T = ul(),
        B = wn(c, {
            relative: b
        });
    return M.useCallback(K => {
        if (xy(K, o)) {
            K.preventDefault();
            let Z = r !== void 0 ? r : Dn(T) === Dn(B),
                X = () => O(c, {
                    replace: Z,
                    unstable_mask: s,
                    state: d,
                    preventScrollReset: h,
                    relative: b,
                    viewTransition: _,
                    unstable_defaultShouldRevalidate: S
                });
            v ? M.startTransition(() => X()) : X()
        }
    }, [T, O, B, r, s, d, o, c, h, b, _, S, v])
}
var Qy = 0,
    Zy = () => `__${String(++Qy)}__`;

function Vy() {
    let {
        router: c
    } = Uh("useSubmit"), {
        basename: o
    } = M.useContext(Me), r = oy(), s = c.fetch, d = c.navigate;
    return M.useCallback(async (h, b = {}) => {
        let {
            action: _,
            method: S,
            encType: v,
            formData: O,
            body: T
        } = Ey(h, o);
        if (b.navigate === !1) {
            let B = b.fetcherKey || Zy();
            await s(B, r, b.action || _, {
                unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
                preventScrollReset: b.preventScrollReset,
                formData: O,
                body: T,
                formMethod: b.method || S,
                formEncType: b.encType || v,
                flushSync: b.flushSync
            })
        } else await d(b.action || _, {
            unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
            preventScrollReset: b.preventScrollReset,
            formData: O,
            body: T,
            formMethod: b.method || S,
            formEncType: b.encType || v,
            replace: b.replace,
            state: b.state,
            fromRouteId: r,
            flushSync: b.flushSync,
            viewTransition: b.viewTransition
        })
    }, [s, d, o, r])
}

function Ky(c, {
    relative: o
} = {}) {
    let {
        basename: r
    } = M.useContext(Me), s = M.useContext(nl);
    Lt(s, "useFormAction must be used inside a RouteContext");
    let [d] = s.matches.slice(-1), h = {
        ...wn(c || ".", {
            relative: o
        })
    }, b = ul();
    if (c == null) {
        h.search = b.search;
        let _ = new URLSearchParams(h.search),
            S = _.getAll("index");
        if (S.some(O => O === "")) {
            _.delete("index"), S.filter(T => T).forEach(T => _.append("index", T));
            let O = _.toString();
            h.search = O ? `?${O}` : ""
        }
    }
    return (!c || c === ".") && d.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (h.pathname = h.pathname === "/" ? r : Ce([r, h.pathname])), Dn(h)
}

function Jy(c, {
    relative: o
} = {}) {
    let r = M.useContext(Nh);
    Lt(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: s
    } = Uh("useViewTransitionState"), d = wn(c, {
        relative: o
    });
    if (!r.isTransitioning) return !1;
    let h = al(r.currentLocation.pathname, s) || r.currentLocation.pathname,
        b = al(r.nextLocation.pathname, s) || r.nextLocation.pathname;
    return ni(d.pathname, b) != null || ni(d.pathname, h) != null
}
const ky = c => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    $y = c => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, r, s) => s ? s.toUpperCase() : r.toLowerCase()),
    mh = c => {
        const o = $y(c);
        return o.charAt(0).toUpperCase() + o.slice(1)
    },
    wh = (...c) => c.filter((o, r, s) => !!o && o.trim() !== "" && s.indexOf(o) === r).join(" ").trim(),
    Fy = c => {
        for (const o in c)
            if (o.startsWith("aria-") || o === "role" || o === "title") return !0
    };
var Wy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const Iy = M.forwardRef(({
    color: c = "currentColor",
    size: o = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: d = "",
    children: h,
    iconNode: b,
    ..._
}, S) => M.createElement("svg", {
    ref: S,
    ...Wy,
    width: o,
    height: o,
    stroke: c,
    strokeWidth: s ? Number(r) * 24 / Number(o) : r,
    className: wh("lucide", d),
    ...!h && !Fy(_) && {
        "aria-hidden": "true"
    },
    ..._
}, [...b.map(([v, O]) => M.createElement(v, O)), ...Array.isArray(h) ? h : [h]]));
const Tt = (c, o) => {
    const r = M.forwardRef(({
        className: s,
        ...d
    }, h) => M.createElement(Iy, {
        ref: h,
        iconNode: o,
        className: wh(`lucide-${ky(mh(c))}`, `lucide-${c}`, s),
        ...d
    }));
    return r.displayName = mh(c), r
};
const Py = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    Js = Tt("award", Py);
const tv = [
        ["path", {
            d: "M12 7v14",
            key: "1akyts"
        }],
        ["path", {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }]
    ],
    ev = Tt("book-open", tv);
const lv = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    av = Tt("chevron-down", lv);
const nv = [
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ],
    uv = Tt("clock", nv);
const iv = [
        ["path", {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }],
        ["path", {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }],
        ["path", {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }]
    ],
    cv = Tt("code-xml", iv);
const sv = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    fv = Tt("external-link", sv);
const ov = [
        ["path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }]
    ],
    Ha = Tt("facebook", ov);
const rv = [
        ["path", {
            d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
            key: "18mbvz"
        }],
        ["path", {
            d: "M6.453 15h11.094",
            key: "3shlmq"
        }],
        ["path", {
            d: "M8.5 2h7",
            key: "csnxdl"
        }]
    ],
    dv = Tt("flask-conical", rv);
const hv = [
        ["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }],
        ["path", {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }]
    ],
    mv = Tt("github", hv);
const yv = [
        ["path", {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }]
    ],
    Bh = Tt("heart", yv);
const vv = [
        ["path", {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }],
        ["path", {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "r6nss1"
        }]
    ],
    pv = Tt("house", vv);
const gv = [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }]
    ],
    xv = Tt("image", gv);
const bv = [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }],
        ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }],
        ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }]
    ],
    Sv = Tt("instagram", bv);
const Ev = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    Av = Tt("mail", Ev);
const zv = [
        ["path", {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza"
        }],
        ["path", {
            d: "M11 12 5.12 2.2",
            key: "qhuxz6"
        }],
        ["path", {
            d: "m13 12 5.88-9.8",
            key: "hbye0f"
        }],
        ["path", {
            d: "M8 7h8",
            key: "i86dvs"
        }],
        ["circle", {
            cx: "12",
            cy: "17",
            r: "5",
            key: "qbz8iq"
        }],
        ["path", {
            d: "M12 18v-2h-.5",
            key: "fawc4q"
        }]
    ],
    Tv = Tt("medal", zv);
const Nv = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    Mv = Tt("menu", Nv);
const _v = [
        ["path", {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }],
        ["circle", {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }]
    ],
    Rv = Tt("music", _v);
const jv = [
        ["path", {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }],
        ["path", {
            d: "M20 2v4",
            key: "1rf3ol"
        }],
        ["path", {
            d: "M22 4h-4",
            key: "gwowj6"
        }],
        ["circle", {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }]
    ],
    Cv = Tt("sparkles", jv);
const Ov = [
        ["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]
    ],
    Dv = Tt("star", Ov);
const Hv = [
        ["path", {
            d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
            key: "1n3hpd"
        }],
        ["path", {
            d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
            key: "rfe1zi"
        }],
        ["path", {
            d: "M18 9h1.5a1 1 0 0 0 0-5H18",
            key: "7xy6bh"
        }],
        ["path", {
            d: "M4 22h16",
            key: "57wxv0"
        }],
        ["path", {
            d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
            key: "1mhfuq"
        }],
        ["path", {
            d: "M6 9H4.5a1 1 0 0 1 0-5H6",
            key: "tex48p"
        }]
    ],
    Uv = Tt("trophy", Hv);
const wv = [
        ["path", {
            d: "m17 2-5 5-5-5",
            key: "16satq"
        }],
        ["rect", {
            width: "20",
            height: "15",
            x: "2",
            y: "7",
            rx: "2",
            key: "1e6viu"
        }]
    ],
    Bv = Tt("tv", wv);
const qv = [
        ["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }]
    ],
    Lv = Tt("twitter", qv);
const Gv = [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ],
    Yv = Tt("user", Gv);
const Xv = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    qh = Tt("x", Xv),
    yh = [{
        label: "Home",
        id: "hero",
        icon: pv
    }, {
        label: "About",
        id: "about",
        icon: Yv
    }, {
        label: "Timeline",
        id: "timeline",
        icon: uv
    }, {
        label: "Favorites",
        id: "favorites",
        icon: Bh
    }, {
        label: "Gallery",
        id: "gallery",
        icon: xv
    }, {
        label: "Awards",
        id: "awards",
        icon: Js
    }];

function Qv() {
    const [c, o] = M.useState(!1), [r, s] = M.useState(!1);
    M.useEffect(() => {
        const h = () => o(window.scrollY > 40);
        return window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h)
    }, []);
    const d = h => {
        const b = document.getElementById(h);
        b && (b.scrollIntoView({
            behavior: "smooth"
        }), s(!1))
    };
    return y.jsxs(y.Fragment, {
        children: [y.jsx("header", {
            "code-path": "src/sections/Header.tsx:33:7",
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c?"nav-glass py-2":"bg-transparent py-4"}`,
            children: y.jsxs("div", {
                "code-path": "src/sections/Header.tsx:38:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between",
                children: [y.jsxs("div", {
                    "code-path": "src/sections/Header.tsx:40:11",
                    className: "flex items-center gap-2",
                    children: [y.jsx("div", {
                        "code-path": "src/sections/Header.tsx:41:13",
                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm",
                        children: "M"
                    }), y.jsxs("span", {
                        "code-path": "src/sections/Header.tsx:44:13",
                        className: "text-white font-bold text-lg tracking-tight",
                        children: ["Maksudul", y.jsx("span", {
                            "code-path": "src/sections/Header.tsx:45:23",
                            className: "text-red-500",
                            children: "."
                        })]
                    })]
                }), y.jsx("nav", {
                    "code-path": "src/sections/Header.tsx:50:11",
                    className: "hidden md:flex items-center gap-1",
                    children: yh.map(h => y.jsx("button", {
                        "code-path": "src/sections/Header.tsx:52:15",
                        onClick: () => d(h.id),
                        className: "px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all",
                        children: h.label
                    }, h.id))
                }), y.jsxs("a", {
                    "code-path": "src/sections/Header.tsx:63:11",
                    href: "https://www.facebook.com/maxudulmunna73",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-all",
                    children: [y.jsx(Ha, {
                        "code-path": "src/sections/Header.tsx:69:13",
                        size: 14
                    }), "Follow"]
                }), y.jsx("button", {
                    "code-path": "src/sections/Header.tsx:74:11",
                    onClick: () => s(!r),
                    className: "md:hidden text-white p-2",
                    children: r ? y.jsx(qh, {
                        "code-path": "src/sections/Header.tsx:78:27",
                        size: 24
                    }) : y.jsx(Mv, {
                        "code-path": "src/sections/Header.tsx:78:45",
                        size: 24
                    })
                })]
            })
        }), r && y.jsx("div", {
            "code-path": "src/sections/Header.tsx:85:9",
            className: "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden",
            onClick: () => s(!1),
            children: y.jsx("div", {
                "code-path": "src/sections/Header.tsx:86:11",
                className: "absolute right-0 top-0 h-full w-64 bg-[#111] border-l border-white/10 p-6 pt-20",
                onClick: h => h.stopPropagation(),
                children: y.jsxs("nav", {
                    "code-path": "src/sections/Header.tsx:90:13",
                    className: "flex flex-col gap-2",
                    children: [yh.map(h => {
                        const b = h.icon;
                        return y.jsxs("button", {
                            "code-path": "src/sections/Header.tsx:94:19",
                            onClick: () => d(h.id),
                            className: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left",
                            children: [y.jsx(b, {
                                "code-path": "src/sections/Header.tsx:99:21",
                                size: 18
                            }), h.label]
                        }, h.id)
                    }), y.jsxs("a", {
                        "code-path": "src/sections/Header.tsx:104:15",
                        href: "https://www.facebook.com/maxudulmunna73",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-3 px-4 py-3 mt-4 rounded-full bg-red-600 text-white font-medium",
                        children: [y.jsx(Ha, {
                            "code-path": "src/sections/Header.tsx:110:17",
                            size: 18
                        }), "Follow on Facebook"]
                    })]
                })
            })
        })]
    })
}

function Zv() {
    const c = M.useRef(null);
    return M.useEffect(() => {
        const o = c.current;
        if (!o) return;
        const r = o.getContext("2d");
        if (!r) return;
        let s = o.width = window.innerWidth,
            d = o.height = window.innerHeight;
        const h = Array.from({
            length: 60
        }, () => ({
            x: Math.random() * s,
            y: Math.random() * d,
            r: Math.random() * 2 + .5,
            dx: (Math.random() - .5) * .3,
            dy: (Math.random() - .5) * .3,
            alpha: Math.random() * .5 + .2
        }));
        let b;
        const _ = () => {
            r.clearRect(0, 0, s, d);
            for (const v of h) v.x += v.dx, v.y += v.dy, (v.x < 0 || v.x > s) && (v.dx *= -1), (v.y < 0 || v.y > d) && (v.dy *= -1), r.beginPath(), r.arc(v.x, v.y, v.r, 0, Math.PI * 2), r.fillStyle = `rgba(255, 77, 77, ${v.alpha})`, r.fill();
            b = requestAnimationFrame(_)
        };
        _();
        const S = () => {
            s = o.width = window.innerWidth, d = o.height = window.innerHeight
        };
        return window.addEventListener("resize", S), () => {
            cancelAnimationFrame(b), window.removeEventListener("resize", S)
        }
    }, []), y.jsx("canvas", {
        "code-path": "src/sections/Hero.tsx:54:5",
        ref: c,
        className: "absolute inset-0 z-0 pointer-events-none"
    })
}

function Vv() {
    const [cvo,setCvo]=M.useState(!1);
    return y.jsxs("section", {
        "code-path": "src/sections/Hero.tsx:63:5",
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
        children: [y.jsx(Zv, {
            "code-path": "src/sections/Hero.tsx:67:7"
        }), y.jsxs("div", {
            "code-path": "src/sections/Hero.tsx:68:7",
            className: "relative z-10 max-w-4xl mx-auto text-center px-4",
            children: [y.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:70:9",
                className: "mb-6 relative inline-block",
                children: [y.jsx("div", {
                    "code-path": "src/sections/Hero.tsx:71:11",
                    className: "w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-1 animate-pulse-glow",
                    children: y.jsx("div", {
                        "code-path": "src/sections/Hero.tsx:72:13",
                        className: "w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden",
                        children: y.jsx("img", {
                            "code-path": "src/sections/Hero.tsx:73:15",
                            src: "https://i.ibb.co.com/k2N7p3bb/IMG-20251230-012241.jpg",
                            alt: "Maksudul Munna",
                            className: "w-full h-full object-cover"
                        })
                    })
                }), y.jsx("div", {
                    "code-path": "src/sections/Hero.tsx:80:11",
                    className: "absolute bottom-1 right-1 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xs font-bold border-2 border-[#0a0a0a]",
                    children: y.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:81:13",
                        className: "text-lg",
                        children: "✦"
                    })
                })]
            }), y.jsxs("h1", {
                "code-path": "src/sections/Hero.tsx:86:9",
                className: "text-4xl md:text-6xl font-bold mb-2",
                children: [y.jsx("span", {
                    "code-path": "src/sections/Hero.tsx:87:11",
                    className: "text-white",
                    children: "Maksudul "
                }), y.jsx("span", {
                    "code-path": "src/sections/Hero.tsx:88:11",
                    className: "text-gradient",
                    children: "Munna"
                })]
            }), y.jsx("p", {
                "code-path": "src/sections/Hero.tsx:92:9",
                className: "text-lg md:text-xl text-orange-400 font-medium mb-4",
                children: "Artist • Visionary • Rebel"
            }), y.jsx("p", {
                "code-path": "src/sections/Hero.tsx:95:9",
                className: "text-gray-400 text-sm mb-1",
                children: "Ex Damian"
            }), y.jsx("p", {
                "code-path": "src/sections/Hero.tsx:96:9",
                className: "text-gray-300 text-base mb-8",
                children: "Notre Dame College Graduate"
            }), y.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:101:9",
                className: "max-w-2xl mx-auto mb-8",
                children: [y.jsx("p", {
                    "code-path": "src/sections/Hero.tsx:102:11",
                    className: "text-2xl text-red-400 mb-2",
                    children: "❞"
                }), y.jsx("p", {
                    "code-path": "src/sections/Hero.tsx:103:11",
                    className: "text-gray-300 italic text-sm md:text-base mb-2",
                    children: "“Keep your friends rich and your enemies rich, and wait to find out which is which!”"
                }), y.jsx("p", {
                    "code-path": "src/sections/Hero.tsx:106:11",
                    className: "text-red-400 text-sm font-medium",
                    children: "— Tony Stark"
                })]
            }), y.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:112:9",
                className: "flex justify-center gap-3 mb-6",
                children: [y.jsxs("a", {
                    "code-path": "src/sections/Hero.tsx:113:11",
                    href: "#",
                    onClick: function(e) { e.preventDefault(); setCvo(!0); },
                    className: "inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all cursor-pointer",
                    children: [y.jsx(fv, {
                        "code-path": "src/sections/Hero.tsx:117:13",
                        size: 16
                    }), "My CV"]
                }), y.jsxs("a", {
                    "code-path": "src/sections/Hero.tsx:120:11",
                    href: "https://www.facebook.com/maxudulmunna73",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-base font-semibold transition-all",
                    children: [y.jsx(Ha, {
                        "code-path": "src/sections/Hero.tsx:126:13",
                        size: 16
                    }), "Visit Facebook"]
                })]
            }), y.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:132:9",
                className: "flex justify-center gap-6 mb-8",
                children: [y.jsx("a", {
                    "code-path": "src/sections/Hero.tsx:133:11",
                    href: "https://www.facebook.com/maxudulmunna73",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx(Ha, {
                        "code-path": "src/sections/Hero.tsx:139:13",
                        size: 22
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Hero.tsx:141:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx(Sv, {
                        "code-path": "src/sections/Hero.tsx:142:13",
                        size: 22
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Hero.tsx:144:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx(Lv, {
                        "code-path": "src/sections/Hero.tsx:145:13",
                        size: 22
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Hero.tsx:147:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx(mv, {
                        "code-path": "src/sections/Hero.tsx:148:13",
                        size: 22
                    })
                })]
            }), y.jsx("div", {
                "code-path": "src/sections/Hero.tsx:153:9",
                className: "animate-bounce text-gray-500",
                children: y.jsx(av, {
                    "code-path": "src/sections/Hero.tsx:154:11",
                    size: 24,
                    className: "mx-auto"
                })
            })]
        }), cvo && y.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            style: { backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" },
            onClick: () => setCvo(!1),
            children: [y.jsx("button", {
                className: "absolute text-white hover:text-red-400 transition-colors",
                style: { top: "1rem", right: "1rem", zIndex: 50 },
                onClick: () => setCvo(!1),
                children: y.jsx(qh, { size: 32 })
            }), y.jsx("div", {
                className: "overflow-y-auto relative",
                style: { backgroundColor: "#1a1a1a", borderRadius: "1rem", maxWidth: "28rem", width: "100%", maxHeight: "85vh", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", margin: "0 auto" },
                onClick: function(e) { e.stopPropagation(); },
                children: y.jsxs("div", {
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [y.jsx("img", {
                            src: "https://i.ibb.co.com/k2N7p3bb/IMG-20251230-012241.jpg",
                            alt: "Maksudul Munna",
                            className: "rounded-full object-cover border-2 border-red-500",
                            style: { width: "4rem", height: "4rem", flexShrink: 0 }
                        }), y.jsxs("div", {
                            style: { minWidth: 0 },
                            children: [y.jsx("h2", {
                                className: "text-xl font-bold text-white",
                                children: "Maksudul Munna"
                            }), y.jsx("p", {
                                className: "text-orange-400 font-medium text-sm",
                                children: "Artist • Visionary • Rebel"
                            }), y.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Notre Dame College Graduate"
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "space-y-5 text-gray-300",
                        children: [y.jsxs("div", {
                            className: "glass-card p-4 rounded-xl",
                            children: [y.jsx("h3", {
                                className: "text-red-400 font-semibold mb-2 flex items-center gap-2",
                                children: "Education"
                            }), y.jsxs("div", {
                                className: "space-y-1 text-sm",
                                children: [y.jsx("p", { children: "Notre Dame College, Dhaka" }), y.jsx("p", { children: "HSC Batch: 2024 | GPA: 5.00" })]
                            })]
                        }), y.jsxs("div", {
                            className: "glass-card p-4 rounded-xl",
                            children: [y.jsx("h3", {
                                className: "text-red-400 font-semibold mb-2 flex items-center gap-2",
                                children: "About Me"
                            }), y.jsx("p", {
                                className: "text-sm leading-relaxed",
                                children: "Passionate tech enthusiast and creative individual. Believe in failing better every time. Always exploring new technologies and pushing boundaries."
                            })]
                        }), y.jsxs("div", {
                            className: "glass-card p-4 rounded-xl",
                            children: [y.jsx("h3", {
                                className: "text-red-400 font-semibold mb-2 flex items-center gap-2",
                                children: "Interests"
                            }), y.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: ["Web Development", "Programming", "Tech", "Anime", "Movies", "Music"].map(function(tag) {
                                    return y.jsx("span", {
                                        className: "px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20",
                                        children: tag
                                    }, tag);
                                })
                            })]
                        })]
                    })]
                })
            })]
        })]
    })
}
const Kv = [{
    label: "Blood Group",
    value: "O+"
}, {
    label: "HSC GPA",
    value: "5.00"
}, {
    label: "Believer",
    value: "In failing better"
}, {
    label: "Time is",
    value: "∞"
}, {
    label: "Tech enthusiast",
    value: "& very smart"
}, {
    label: "HSC Batch",
    value: "24"
}];

function Jv() {
    const c = M.useRef(null);
    return M.useEffect(() => {
        const o = c.current;
        if (!o) return;
        const r = new IntersectionObserver(([s]) => {
            s.isIntersecting && (o.classList.add("animate-in"), r.unobserve(o))
        }, {
            threshold: .1
        });
        return r.observe(o), () => r.disconnect()
    }, []), c
}

function kv() {
    const c = Jv();
    return y.jsx("section", {
        "code-path": "src/sections/About.tsx:37:5",
        id: "about",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        children: y.jsxs("div", {
            "code-path": "src/sections/About.tsx:38:7",
            className: "max-w-6xl mx-auto",
            children: [y.jsx("p", {
                "code-path": "src/sections/About.tsx:39:9",
                className: "section-subheading",
                children: "About Me"
            }), y.jsxs("h2", {
                "code-path": "src/sections/About.tsx:40:9",
                className: "section-heading",
                children: ["Know Who ", y.jsx("span", {
                    "code-path": "src/sections/About.tsx:41:20",
                    className: "text-gradient",
                    children: "I Am"
                })]
            }), y.jsxs("div", {
                "code-path": "src/sections/About.tsx:44:9",
                ref: c,
                className: "grid md:grid-cols-2 gap-8 mt-10 items-center opacity-0 translate-y-8 transition-all duration-600 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0",
                children: [y.jsxs("div", {
                    "code-path": "src/sections/About.tsx:49:11",
                    className: "relative",
                    children: [y.jsx("div", {
                        "code-path": "src/sections/About.tsx:50:13",
                        className: "rounded-2xl overflow-hidden border border-white/10",
                        children: y.jsx("img", {
                            "code-path": "src/sections/About.tsx:51:15",
                            src: "https://i.ibb.co.com/9Hm9SbJq/IMG-1767965910057.jpg",
                            alt: "Maksudul Munna",
                            className: "w-full h-80 md:h-96 object-cover"
                        })
                    }), y.jsxs("div", {
                        "code-path": "src/sections/About.tsx:57:13",
                        className: "absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg",
                        children: [y.jsx("p", {
                            "code-path": "src/sections/About.tsx:58:15",
                            className: "text-red-400 font-bold text-lg",
                            children: "5+"
                        }), y.jsx("p", {
                            "code-path": "src/sections/About.tsx:59:15",
                            className: "text-gray-400 text-xs",
                            children: "Years Learning"
                        })]
                    })]
                }), y.jsxs("div", {
                    "code-path": "src/sections/About.tsx:64:11",
                    children: [y.jsx("h3", {
                        "code-path": "src/sections/About.tsx:65:13",
                        className: "text-xl font-bold text-white mb-3",
                        children: "A Passionate Soul from Mymensingh"
                    }), y.jsxs("p", {
                        "code-path": "src/sections/About.tsx:68:13",
                        className: "text-gray-300 text-sm leading-relaxed mb-4",
                        children: ["I'm ", y.jsx("strong", {
                            "code-path": "src/sections/About.tsx:69:24",
                            className: "text-white",
                            children: "Maksudul Munna"
                        }), " — an artist, visionary, and rebel from Mymensingh, Bangladesh. Born on December 6, 2005, I'm a proud O+ blood group dreamer who believes in pushing boundaries."]
                    }), y.jsxs("p", {
                        "code-path": "src/sections/About.tsx:74:13",
                        className: "text-gray-300 text-sm leading-relaxed mb-6",
                        children: ["A Notre Dame College graduate with HSC GPA-5, I'm passionate about technology, coding at night, and immersing myself in anime worlds. Just like Tony Stark, I believe in creating my own destiny —", " ", y.jsx("em", {
                            "code-path": "src/sections/About.tsx:78:15",
                            className: "text-red-400",
                            children: "Sometimes you gotta run before you can walk."
                        })]
                    }), y.jsx("div", {
                        "code-path": "src/sections/About.tsx:84:13",
                        className: "flex flex-wrap gap-3 mb-8",
                        children: Kv.map(o => y.jsxs("div", {
                            "code-path": "src/sections/About.tsx:86:17",
                            className: "glass-card px-4 py-2 rounded-lg",
                            children: [y.jsx("p", {
                                "code-path": "src/sections/About.tsx:87:19",
                                className: "text-gray-400 text-xs",
                                children: o.label
                            }), y.jsx("p", {
                                "code-path": "src/sections/About.tsx:88:19",
                                className: "text-white font-semibold text-sm",
                                children: o.value
                            })]
                        }, o.label))
                    }), y.jsxs("div", {
                        "code-path": "src/sections/About.tsx:94:13",
                        className: "grid md:grid-cols-2 gap-4",
                        children: [y.jsxs("div", {
                            "code-path": "src/sections/About.tsx:95:15",
                            className: "glass-card glass-card-hover p-5 rounded-xl",
                            children: [y.jsxs("div", {
                                "code-path": "src/sections/About.tsx:96:17",
                                className: "flex items-center gap-3 mb-2",
                                children: [y.jsx("div", {
                                    "code-path": "src/sections/About.tsx:97:19",
                                    className: "w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400",
                                    children: y.jsx(ev, {
                                        "code-path": "src/sections/About.tsx:98:21",
                                        size: 20
                                    })
                                }), y.jsxs("div", {
                                    "code-path": "src/sections/About.tsx:100:19",
                                    children: [y.jsx("p", {
                                        "code-path": "src/sections/About.tsx:101:21",
                                        className: "text-white font-semibold text-sm",
                                        children: "Notre Dame College"
                                    }), y.jsx("p", {
                                        "code-path": "src/sections/About.tsx:104:21",
                                        className: "text-gray-400 text-xs",
                                        children: "Higher Secondary"
                                    })]
                                })]
                            }), y.jsx("span", {
                                "code-path": "src/sections/About.tsx:107:17",
                                className: "inline-block mt-2 text-xs font-medium bg-green-600/20 text-green-400 border border-green-600/30 px-2 py-1 rounded-full",
                                children: "Graduated • GPA 5.00"
                            })]
                        }), y.jsxs("div", {
                            "code-path": "src/sections/About.tsx:112:15",
                            className: "glass-card glass-card-hover p-5 rounded-xl",
                            children: [y.jsxs("div", {
                                "code-path": "src/sections/About.tsx:113:17",
                                className: "flex items-center gap-3 mb-2",
                                children: [y.jsx("div", {
                                    "code-path": "src/sections/About.tsx:114:19",
                                    className: "w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center text-orange-400",
                                    children: y.jsx(Js, {
                                        "code-path": "src/sections/About.tsx:115:21",
                                        size: 20
                                    })
                                }), y.jsxs("div", {
                                    "code-path": "src/sections/About.tsx:117:19",
                                    children: [y.jsx("p", {
                                        "code-path": "src/sections/About.tsx:118:21",
                                        className: "text-white font-semibold text-sm",
                                        children: "Madhynagar B.P High School & College"
                                    }), y.jsx("p", {
                                        "code-path": "src/sections/About.tsx:121:21",
                                        className: "text-gray-400 text-xs",
                                        children: "Secondary School"
                                    })]
                                })]
                            }), y.jsx("span", {
                                "code-path": "src/sections/About.tsx:124:17",
                                className: "inline-block mt-2 text-xs font-medium bg-green-600/20 text-green-400 border border-green-600/30 px-2 py-1 rounded-full",
                                children: "Class of 2022 • GPA 5.00"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
const $v = [{
    year: "2005",
    title: "Born in Mymensingh",
    desc: "Started the journey of life in Mymensingh, Bangladesh.",
    side: "left"
}, {
    year: "2022",
    title: "SSC Passed (GPA-5 with Scholarship)",
    desc: "Achieved perfect GPA-5 with scholarship in Secondary School Certificate.",
    side: "right"
}, {
    year: "2022",
    title: "College Life Started",
    desc: "Began college journey at Notre Dame College, Dhaka.",
    side: "left"
}, {
    year: "2023",
    title: "Science Fair Participation",
    desc: "Participated in Science Fair, showcasing innovation projects.",
    side: "right"
}, {
    year: "2024",
    title: "HSC Passed (GPA-5 with Scholarship)",
    desc: "Achieved perfect GPA-5 with scholarship in Higher Secondary Certificate.",
    side: "left"
}, {
    year: "2025",
    title: "Admission to MBSTU",
    desc: "Got admission to Mawlana Bhashani Science & Technology University.",
    side: "right"
}];

function Fv() {
    const c = M.useRef(null);
    return M.useEffect(() => {
        const o = c.current;
        if (!o) return;
        const r = o.querySelectorAll(".timeline-card"),
            s = new IntersectionObserver(d => {
                d.forEach(h => {
                    h.isIntersecting && (h.target.classList.add("animate-in"), s.unobserve(h.target))
                })
            }, {
                threshold: .1
            });
        return r.forEach(d => s.observe(d)), () => s.disconnect()
    }, []), y.jsx("section", {
        "code-path": "src/sections/Timeline.tsx:64:5",
        id: "timeline",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        children: y.jsxs("div", {
            "code-path": "src/sections/Timeline.tsx:65:7",
            className: "max-w-6xl mx-auto",
            children: [y.jsx("p", {
                "code-path": "src/sections/Timeline.tsx:66:9",
                className: "section-subheading",
                children: "My Journey"
            }), y.jsx("h2", {
                "code-path": "src/sections/Timeline.tsx:67:9",
                className: "section-heading",
                children: y.jsx("span", {
                    "code-path": "src/sections/Timeline.tsx:68:11",
                    className: "text-gradient",
                    children: "Timeline"
                })
            }), y.jsxs("div", {
                "code-path": "src/sections/Timeline.tsx:71:9",
                ref: c,
                className: "relative mt-16",
                children: [y.jsx("div", {
                    "code-path": "src/sections/Timeline.tsx:73:11",
                    className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px"
                }), y.jsx("div", {
                    "code-path": "src/sections/Timeline.tsx:75:11",
                    className: "space-y-8",
                    children: $v.map((o, r) => y.jsxs("div", {
                        "code-path": "src/sections/Timeline.tsx:77:15",
                        className: `timeline-card relative flex items-start opacity-0 translate-y-6 transition-all duration-500 delay-${r*100} [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 ${o.side==="right"?"md:flex-row-reverse":""}`,
                        children: [y.jsx("div", {
                            "code-path": "src/sections/Timeline.tsx:86:17",
                            className: "absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-[#0a0a0a] -translate-x-1.5 mt-6 z-10"
                        }), y.jsx("div", {
                            "code-path": "src/sections/Timeline.tsx:89:17",
                            className: "hidden md:block md:w-1/2"
                        }), y.jsx("div", {
                            "code-path": "src/sections/Timeline.tsx:92:17",
                            className: "ml-10 md:ml-0 md:w-1/2 md:px-8",
                            children: y.jsxs("div", {
                                "code-path": "src/sections/Timeline.tsx:93:19",
                                className: "glass-card glass-card-hover p-4 rounded-xl",
                                children: [y.jsx("span", {
                                    "code-path": "src/sections/Timeline.tsx:94:21",
                                    className: "text-red-500 text-xs font-bold",
                                    children: o.year
                                }), y.jsx("h4", {
                                    "code-path": "src/sections/Timeline.tsx:97:21",
                                    className: "text-white font-semibold mt-1",
                                    children: o.title
                                }), y.jsx("p", {
                                    "code-path": "src/sections/Timeline.tsx:100:21",
                                    className: "text-gray-400 text-sm mt-1",
                                    children: o.desc
                                })]
                            })
                        })]
                    }, r))
                })]
            })]
        })
    })
}

const Mov = [{
        title: "Inception"
    }, {
        title: "Interstellar"
    }, {
        title: "The Dark Knight"
    }, {
        title: "Avengers: Endgame"
    }, {
        title: "Spider-Man: No Way Home"
    }],
    Iv = [{
        title: "Game of Thrones"
    }, {
        title: "Westworld"
    }, {
        title: "The Witcher"
    }, {
        title: "Stranger Things"
    }, {
        title: "House of the Dragon"
    }, {
        title: "Dark"
    }, {
        title: "1899"
    }],
    Pv = [{
        title: "Naruto"
    }, {
        title: "Black Clover"
    }, {
        title: "Bleach"
    }, {
        title: "Solo Leveling"
    }, {
        title: "Death Note"
    }];
function ws({
    title: c,
    subtitle: o,
    img: r
}) {
    return y.jsx("div", {
        "code-path": "src/sections/Favorites.tsx:43:5",
        className: "glass-card glass-card-hover rounded-lg overflow-hidden group cursor-pointer flex items-center gap-3 p-2 transition-all duration-300 hover:bg-white/10",
        children: y.jsxs("div", {
            "code-path": "src/sections/Favorites.tsx:44:7",
            className: "flex items-center gap-3 w-full",
            children: [y.jsx("img", {
                "code-path": "src/sections/Favorites.tsx:45:9",
                src: r,
                alt: c,
                className: "w-12 h-12 rounded-lg object-cover flex-shrink-0"
            }), y.jsxs("div", {
                "code-path": "src/sections/Favorites.tsx:51:9",
                className: "flex-1 min-w-0",
                children: [y.jsx("p", {
                    "code-path": "src/sections/Favorites.tsx:52:11",
                    className: "text-white text-sm font-semibold truncate",
                    children: c
                }), o && y.jsx("p", {
                    "code-path": "src/sections/Favorites.tsx:54:13",
                    className: "text-gray-400 text-xs truncate",
                    children: o
                })]
            })]
        })
    })
}

function tp() {
    const c = M.useRef(null),
        [r, s] = M.useState(null),
        [d, h] = M.useState(null);
    M.useEffect(() => {
        const b = c.current;
        if (!b) return;
        const _ = b.querySelectorAll(".fav-category"),
            v = new IntersectionObserver(O => {
                O.forEach(T => {
                    T.isIntersecting && (T.target.classList.add("animate-in"), v.unobserve(T.target))
                })
            }, {
                threshold: .1
            });
        return _.forEach(O => v.observe(O)), () => v.disconnect()
    }, []);
    const b = [{
            key: "movies",
            label: "Movies",
            icon: y.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    key: "a"
                }), y.jsx("path", {
                    d: "M7 3v18",
                    key: "b"
                }), y.jsx("path", {
                    d: "M3 7.5h4",
                    key: "c"
                }), y.jsx("path", {
                    d: "M3 12h18",
                    key: "d"
                }), y.jsx("path", {
                    d: "M3 16.5h4",
                    key: "e"
                }), y.jsx("path", {
                    d: "M17 3v18",
                    key: "f"
                }), y.jsx("path", {
                    d: "M17 7.5h4",
                    key: "g"
                }), y.jsx("path", {
                    d: "M17 16.5h4",
                    key: "h"
                })]
            }),
            data: Mov,
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        }, {
            key: "series",
            label: "TV Series",
            icon: y.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("rect", {
                    width: "20",
                    height: "15",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2",
                    key: "a"
                }), y.jsx("polyline", {
                    points: "17 2 12 7 7 2",
                    key: "b"
                })]
            }),
            data: Iv,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        }, {
            key: "anime",
            label: "Anime",
            icon: y.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
                    key: "a"
                }), y.jsx("path", {
                    d: "M5 3v4",
                    key: "b"
                }), y.jsx("path", {
                    d: "M19 17v4",
                    key: "c"
                }), y.jsx("path", {
                    d: "M3 5h4",
                    key: "d"
                }), y.jsx("path", {
                    d: "M17 19h4",
                    key: "e"
                })]
            }),
            data: Pv,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        }],
        _ = O => {
            h(O), s(O)
        };
    return y.jsxs("section", {
        id: "favorites",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        children: [y.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [y.jsx("p", {
                className: "section-subheading",
                children: "My World"
            }), y.jsxs("h2", {
                className: "section-heading",
                children: ["Favourite ", y.jsx("span", {
                    className: "text-gradient",
                    children: "Things"
                })]
            }), y.jsx("div", {
                ref: c,
                className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6",
                children: b.map((O, T) => y.jsxs("div", {
                    className: "fav-category opacity-0 translate-y-6 transition-all duration-600 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 glass-card glass-card-hover rounded-xl p-6 cursor-pointer flex flex-col items-center gap-4 hover:bg-white/5",
                    style: {
                        transitionDelay: `${T*100}ms`
                    },
                    onClick: () => _(O),
                    children: [y.jsx("div", {
                        className: `w-14 h-14 rounded-full ${O.bg} ${O.color} ${O.border} border flex items-center justify-center`,
                        children: O.icon
                    }), y.jsx("h3", {
                        className: "text-white font-semibold text-lg",
                        children: O.label
                    }), y.jsx("p", {
                        className: "text-gray-400 text-sm",
                        children: `${O.data.length} titles`
                    })]
                }, O.key))
            })]
        }), d && y.jsxs("div", {
            className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
            onClick: () => s(null),
            children: [y.jsx("button", {
                className: "absolute top-4 right-4 text-white hover:text-red-400 transition-colors",
                onClick: () => s(null),
                children: y.jsx(qh, {
                    size: 32
                })
            }), y.jsxs("div", {
                className: "bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 max-w-md w-full max-h-[70vh] overflow-y-auto",
                onClick: O => O.stopPropagation(),
                children: [y.jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [y.jsx("div", {
                        className: `w-10 h-10 rounded-full ${d.bg} ${d.color} ${d.border} border flex items-center justify-center`,
                        children: d.icon
                    }), y.jsx("h3", {
                        className: "text-white font-bold text-xl",
                        children: d.label
                    })]
                }), y.jsx("ul", {
                    className: "space-y-3",
                    children: d.data.map((O, T) => y.jsx("li", {
                        className: "text-gray-300 text-sm py-2 px-3 rounded-lg bg-white/5 border border-white/5",
                        children: O.title
                    }, T))
                })]
            })]
        })]
    })
}
const ep = ["https://i.ibb.co.com/HpXv4SvV/Snapchat-2136611923.jpg", "https://i.ibb.co.com/LHx8z9P/FB-IMG-1718116480985.jpg", "https://i.ibb.co.com/fV6wdSFP/retouch-2025082222540541.jpg", "https://i.ibb.co.com/hqhnw1f/FB-IMG-1718116442789.jpg", "https://i.ibb.co.com/Tx1zmWWh/retouch-2024091800470977.jpg", "https://i.ibb.co.com/Y45L0spY/retouch-2025112414394377.jpg", "https://i.ibb.co.com/1GQwyQvK/Snapchat-368490589.jpg", "https://i.ibb.co.com/XxcczpCX/Snapchat-1585967114.jpg", "https://i.ibb.co.com/gb4K8kwC/retouch-2024091710143985.jpg", "https://i.ibb.co.com/HT9cxbpf/retouch-2025083016274126.jpg", "https://i.ibb.co.com/FLBzpSNL/Screenshot-2024-12-12-11-00-07-110-com-facebook-katana.png", "https://i.ibb.co.com/YTPnmC9f/retouch-2024122023020602.jpg", "https://i.ibb.co.com/KjL397XQ/IMG-20251207-205550.jpg", "https://i.ibb.co.com/XrcX4khr/IMG-20251214-202209.jpg", "https://i.ibb.co.com/9dqCzKG/FB-IMG-3047310916701312656.jpg", "https://i.ibb.co.com/RkNHdS1Z/QVZkd-EJf-U3-Qt-NGJm-MGkt-Rg.jpg"];

function lp() {
    const c = M.useRef(null),
        [o, r] = M.useState(null);
    return M.useEffect(() => {
        const s = c.current;
        if (!s) return;
        const d = s.querySelectorAll(".gallery-item"),
            h = new IntersectionObserver(b => {
                b.forEach(_ => {
                    _.isIntersecting && (_.target.classList.add("animate-in"), h.unobserve(_.target))
                })
            }, {
                threshold: .05
            });
        return d.forEach(b => h.observe(b)), () => h.disconnect()
    }, []), y.jsxs("section", {
        "code-path": "src/sections/Gallery.tsx:47:5",
        id: "gallery",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        children: [y.jsxs("div", {
            "code-path": "src/sections/Gallery.tsx:48:7",
            className: "max-w-6xl mx-auto",
            children: [y.jsx("p", {
                "code-path": "src/sections/Gallery.tsx:49:9",
                className: "section-subheading",
                children: "My Moments"
            }), y.jsx("h2", {
                "code-path": "src/sections/Gallery.tsx:50:9",
                className: "section-heading",
                children: y.jsx("span", {
                    "code-path": "src/sections/Gallery.tsx:51:11",
                    className: "text-gradient",
                    children: "Gallery"
                })
            }), y.jsx("div", {
                "code-path": "src/sections/Gallery.tsx:54:9",
                ref: c,
                className: "columns-2 md:columns-3 gap-3 mt-10 space-y-3",
                children: ep.map((s, d) => y.jsx("div", {
                    "code-path": "src/sections/Gallery.tsx:56:13",
                    className: "gallery-item opacity-0 translate-y-6 transition-all duration-500 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 break-inside-avoid",
                    style: {
                        transitionDelay: `${d%6*80}ms`
                    },
                    onClick: () => r(s),
                    children: y.jsx("div", {
                        "code-path": "src/sections/Gallery.tsx:62:15",
                        className: "glass-card rounded-xl overflow-hidden group cursor-pointer",
                        children: y.jsx("img", {
                            "code-path": "src/sections/Gallery.tsx:63:17",
                            src: s,
                            alt: `Gallery photo ${d+1}`,
                            className: "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                            loading: "lazy"
                        })
                    })
                }, d))
            })]
        }), o && y.jsxs("div", {
            "code-path": "src/sections/Gallery.tsx:77:9",
            className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4",
            onClick: () => r(null),
            children: [y.jsx("button", {
                "code-path": "src/sections/Gallery.tsx:81:11",
                className: "absolute top-4 right-4 text-white hover:text-red-400 transition-colors",
                onClick: () => r(null),
                children: y.jsx(qh, {
                    "code-path": "src/sections/Gallery.tsx:85:13",
                    size: 32
                })
            }), y.jsx("img", {
                "code-path": "src/sections/Gallery.tsx:87:11",
                src: o,
                alt: "Gallery preview",
                className: "max-w-full max-h-[90vh] object-contain rounded-lg",
                onClick: s => s.stopPropagation()
            })]
        })]
    })
}
const ap = [{
        title: "HSC GPA-5",
        desc: "Perfect grade in Higher Secondary Certificate",
        icon: Js,
        color: "yellow"
    }, {
        title: "Certificate of Excellence",
        desc: "Recognized for outstanding academic performance",
        icon: Dv,
        color: "blue"
    }, {
        title: "Presidency University & Prothom Alo",
        desc: "Special recognition from prestigious institutions",
        icon: Uv,
        color: "purple"
    }, {
        title: "Science Fair 2023",
        desc: "Participated and showcased innovation",
        icon: dv,
        color: "green"
    }, {
        title: "Google Certificates",
        desc: "Foundational certificates from Google",
        icon: cv,
        color: "red"
    }],
    vh = {
        yellow: {
            bg: "bg-yellow-600/20",
            text: "text-yellow-400",
            border: "border-yellow-600/30"
        },
        blue: {
            bg: "bg-blue-600/20",
            text: "text-blue-400",
            border: "border-blue-600/30"
        },
        purple: {
            bg: "bg-purple-600/20",
            text: "text-purple-400",
            border: "border-purple-600/30"
        },
        green: {
            bg: "bg-green-600/20",
            text: "text-green-400",
            border: "border-green-600/30"
        },
        red: {
            bg: "bg-red-600/20",
            text: "text-red-400",
            border: "border-red-600/30"
        }
    },
    np = [{
        uni: "MBSTU",
        status: "Admitted",
        color: "green"
    }, {
        uni: "SUST",
        status: "Rank 6503",
        color: "yellow"
    }, {
        uni: "Rajshahi University",
        status: "Rank 2389",
        color: "yellow"
    }, {
        uni: "Jahangirnagar University",
        status: "Rank 1589",
        color: "yellow"
    }, {
        uni: "Chittagong University",
        status: "Rank 5886",
        color: "yellow"
    }, {
        uni: "Jagannath University",
        status: "Rank 6798",
        color: "yellow"
    }, {
        uni: "GST (A Unit)",
        status: "Rank 2305",
        color: "yellow"
    }];

function up() {
    const c = M.useRef(null);
    return M.useEffect(() => {
        const o = c.current;
        if (!o) return;
        const r = o.querySelectorAll(".award-card"),
            s = new IntersectionObserver(d => {
                d.forEach(h => {
                    h.isIntersecting && (h.target.classList.add("animate-in"), s.unobserve(h.target))
                })
            }, {
                threshold: .1
            });
        return r.forEach(d => s.observe(d)), () => s.disconnect()
    }, []), y.jsx("section", {
        "code-path": "src/sections/Awards.tsx:97:5",
        id: "awards",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        children: y.jsxs("div", {
            "code-path": "src/sections/Awards.tsx:98:7",
            className: "max-w-6xl mx-auto",
            ref: c,
            children: [y.jsx("p", {
                "code-path": "src/sections/Awards.tsx:99:9",
                className: "section-subheading",
                children: "My Success"
            }), y.jsx("h2", {
                "code-path": "src/sections/Awards.tsx:100:9",
                className: "section-heading",
                children: y.jsx("span", {
                    "code-path": "src/sections/Awards.tsx:101:11",
                    className: "text-gradient",
                    children: "Awards"
                })
            }), y.jsx("div", {
                "code-path": "src/sections/Awards.tsx:105:9",
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10",
                children: ap.map((o, r) => {
                    const s = o.icon,
                        d = vh[o.color];
                    return y.jsxs("div", {
                        "code-path": "src/sections/Awards.tsx:110:15",
                        className: "award-card glass-card glass-card-hover p-5 rounded-xl opacity-0 translate-y-6 transition-all duration-500 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0",
                        style: {
                            transitionDelay: `${r*80}ms`
                        },
                        children: [y.jsxs("div", {
                            "code-path": "src/sections/Awards.tsx:115:17",
                            className: "flex items-center gap-3 mb-2",
                            children: [y.jsx("div", {
                                "code-path": "src/sections/Awards.tsx:116:19",
                                className: `w-10 h-10 rounded-lg ${d.bg} flex items-center justify-center ${d.text}`,
                                children: y.jsx(s, {
                                    "code-path": "src/sections/Awards.tsx:119:21",
                                    size: 20
                                })
                            }), y.jsx("h4", {
                                "code-path": "src/sections/Awards.tsx:121:19",
                                className: "text-white font-semibold text-sm",
                                children: o.title
                            })]
                        }), y.jsx("p", {
                            "code-path": "src/sections/Awards.tsx:125:17",
                            className: "text-gray-400 text-xs",
                            children: o.desc
                        })]
                    }, o.title)
                })
            }), y.jsxs("div", {
                "code-path": "src/sections/Awards.tsx:132:9",
                className: "mt-14",
                children: [y.jsxs("h3", {
                    "code-path": "src/sections/Awards.tsx:133:11",
                    className: "text-center text-white text-lg font-semibold mb-2",
                    children: [y.jsx(Tv, {
                        "code-path": "src/sections/Awards.tsx:134:13",
                        size: 20,
                        className: "inline text-red-500 mr-2"
                    }), "Admission Results"]
                }), y.jsx("div", {
                    "code-path": "src/sections/Awards.tsx:137:11",
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 mt-6",
                    children: np.map((o, r) => {
                        const s = vh[o.color];
                        return y.jsxs("div", {
                            "code-path": "src/sections/Awards.tsx:141:17",
                            className: "award-card glass-card glass-card-hover p-4 rounded-xl text-center opacity-0 translate-y-6 transition-all duration-500 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0",
                            style: {
                                transitionDelay: `${(r+5)*80}ms`
                            },
                            children: [y.jsx("p", {
                                "code-path": "src/sections/Awards.tsx:146:19",
                                className: "text-white font-semibold text-sm mb-1",
                                children: o.uni
                            }), y.jsx("span", {
                                "code-path": "src/sections/Awards.tsx:149:19",
                                className: `inline-block text-xs font-medium ${s.bg} ${s.text} border ${s.border} px-2 py-1 rounded-full`,
                                children: o.status
                            })]
                        }, o.uni)
                    })
                })]
            })]
        })
    })
}

function ip() {
    return y.jsx("section", {
        "code-path": "src/sections/Contact.tsx:5:5",
        id: "contact",
        className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-black/30",
        children: y.jsxs("div", {
            "code-path": "src/sections/Contact.tsx:9:7",
            className: "max-w-6xl mx-auto text-center",
            children: [y.jsx("p", {
                "code-path": "src/sections/Contact.tsx:10:9",
                className: "section-subheading",
                children: "Get In Touch"
            }), y.jsxs("h2", {
                "code-path": "src/sections/Contact.tsx:11:9",
                className: "section-heading",
                children: ["Let's ", y.jsx("span", {
                    "code-path": "src/sections/Contact.tsx:12:22",
                    className: "text-gradient",
                    children: "Connect"
                })]
            }), y.jsx("p", {
                "code-path": "src/sections/Contact.tsx:15:9",
                className: "text-gray-400 text-sm max-w-lg mx-auto",
                children: "Want to connect? Find me on social media or drop me a message. I'm always open to making new friends and having great conversations!"
            }), y.jsxs("div", {
                "code-path": "src/sections/Contact.tsx:21:9",
                className: "flex justify-center gap-3 mt-6",
                children: [y.jsxs("a", {
                    "code-path": "src/sections/Contact.tsx:22:11",
                    href: "https://www.facebook.com/maxudulmunna73",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all",
                    children: [y.jsx(Ha, {
                        "code-path": "src/sections/Contact.tsx:28:13",
                        size: 18
                    }), "Facebook"]
                }), y.jsxs("a", {
                    "code-path": "src/sections/Contact.tsx:31:11",
                    href: "mailto:maxudulmunna73@gmail.com",
                    className: "inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all",
                    children: [y.jsx(Av, {
                        "code-path": "src/sections/Contact.tsx:35:13",
                        size: 18
                    }), "Email"]
                })]
            }), y.jsxs("div", {
                "code-path": "src/sections/Contact.tsx:41:9",
                className: "flex justify-center gap-6 mt-8",
                children: [y.jsx("a", {
                    "code-path": "src/sections/Contact.tsx:42:11",
                    href: "https://www.facebook.com/maxudulmunna73",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx(Ha, {
                        "code-path": "src/sections/Contact.tsx:48:13",
                        size: 22
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Contact.tsx:50:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsxs("svg", {
                        "code-path": "src/sections/Contact.tsx:51:13",
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [y.jsx("rect", {
                            "code-path": "src/sections/Contact.tsx:51:156",
                            width: "20",
                            height: "20",
                            x: "2",
                            y: "2",
                            rx: "5",
                            ry: "5"
                        }), y.jsx("path", {
                            "code-path": "src/sections/Contact.tsx:51:212",
                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        }), y.jsx("line", {
                            "code-path": "src/sections/Contact.tsx:51:271",
                            x1: "17.5",
                            x2: "17.51",
                            y1: "6.5",
                            y2: "6.5"
                        })]
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Contact.tsx:53:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsx("svg", {
                        "code-path": "src/sections/Contact.tsx:54:13",
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: y.jsx("path", {
                            "code-path": "src/sections/Contact.tsx:54:156",
                            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                        })
                    })
                }), y.jsx("a", {
                    "code-path": "src/sections/Contact.tsx:56:11",
                    href: "#",
                    className: "text-gray-400 hover:text-red-400 transition-all",
                    children: y.jsxs("svg", {
                        "code-path": "src/sections/Contact.tsx:57:13",
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [y.jsx("path", {
                            "code-path": "src/sections/Contact.tsx:57:156",
                            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        }), y.jsx("path", {
                            "code-path": "src/sections/Contact.tsx:57:416",
                            d: "M9 18c-4.51 2-5-2-7-2"
                        })]
                    })
                })]
            })]
        })
    })
}

function cp() {
    return y.jsx("footer", {
        "code-path": "src/sections/Footer.tsx:5:5",
        className: "relative z-10 border-t border-white/5 py-8 px-4",
        children: y.jsxs("div", {
            "code-path": "src/sections/Footer.tsx:6:7",
            className: "max-w-6xl mx-auto flex flex-col items-center gap-3",
            children: [y.jsxs("div", {
                "code-path": "src/sections/Footer.tsx:8:9",
                className: "flex items-center gap-2",
                children: [y.jsx("div", {
                    "code-path": "src/sections/Footer.tsx:9:11",
                    className: "w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-xs",
                    children: "M"
                }), y.jsxs("span", {
                    "code-path": "src/sections/Footer.tsx:12:11",
                    className: "text-white font-bold",
                    children: ["Maksudul", y.jsx("span", {
                        "code-path": "src/sections/Footer.tsx:13:21",
                        className: "text-red-500",
                        children: "."
                    })]
                })]
            }), y.jsxs("p", {
                "code-path": "src/sections/Footer.tsx:18:9",
                className: "text-gray-500 text-xs flex items-center gap-1",
                children: ["Made with ", y.jsx(Bh, {
                    "code-path": "src/sections/Footer.tsx:19:21",
                    size: 12,
                    className: "inline text-red-500 fill-red-500"
                }), " by Maksudul Munna"]
            }), y.jsx("p", {
                "code-path": "src/sections/Footer.tsx:23:9",
                className: "text-gray-600 text-xs",
                children: "© 2026 All Rights Reserved. | “Tony Stark” Fan Forever | Time is ∞"
            })]
        })
    })
}

function sp() {
    return y.jsxs("div", {
        "code-path": "src/App.tsx:13:5",
        className: "min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden",
        children: [y.jsx(Qv, {
            "code-path": "src/App.tsx:14:7"
        }), y.jsx(Vv, {
            "code-path": "src/App.tsx:15:7"
        }), y.jsx(kv, {
            "code-path": "src/App.tsx:16:7"
        }), y.jsx(Fv, {
            "code-path": "src/App.tsx:17:7"
        }), y.jsx(tp, {
            "code-path": "src/App.tsx:18:7"
        }), y.jsx(lp, {
            "code-path": "src/App.tsx:19:7"
        }), y.jsx(up, {
            "code-path": "src/App.tsx:20:7"
        }), y.jsx(ip, {
            "code-path": "src/App.tsx:21:7"
        }), y.jsx(cp, {
            "code-path": "src/App.tsx:22:7"
        })]
    })
}
p1.createRoot(document.getElementById("root")).render(y.jsx(M.StrictMode, {
    "code-path": "src/main.tsx:8:3",
    children: y.jsx(qy, {
        "code-path": "src/main.tsx:9:5",
        children: y.jsx(sp, {
            "code-path": "src/main.tsx:10:7"
        })
    })
}));